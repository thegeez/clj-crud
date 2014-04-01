(ns clj-crud.system.database
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clojure.java.jdbc :as jdbc]
            [clojure.string :as string]
            [clj-crud.migrations :as migrations])
  (:import [java.net URI]))

;; sanity check
(let [ms migrations/migrations]
  (assert (every? (fn [m]
                    (and (vector? m)
                         (= 2 (count m))
                         (= (number? (first m)))
                         (= #{:up :down} (set (keys (second m))))
                         (fn? (:up (second m)))
                         (fn? (:down (second m))))) ms)
          "Migrations format is [[<id> {:up (fn [db] ...) :down (fn [db] ...)}")
  (assert
   (and (= 1 (ffirst ms))
        (apply < (map first ms)))
   "Migrations should start at id 1 and be increasing"))

(defn db-url-for-heroku [db-url]
  (let [db-uri (URI. db-url)
        host (.getHost db-uri)
                             port (.getPort db-uri)
        path (.getPath db-uri)
        [user password] (string/split (.getUserInfo db-uri) #":")]
    (str "jdbc:postgresql://" host ":" port path "?user=" user "&password=" password "&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory")))

(defn current-db-version [conn]
  (or (try (-> (spy (jdbc/query conn ["SELECT * FROM migration_version"]))
               first
               :version)
           (catch Exception e
             (debug "Current-db-version fail: " e)
             nil))
      0))

(defn update-current-version [conn version]
  (try (jdbc/update! conn :migration_version
                     {:version version}
                     ["id = 0"])
       ;; might fail with the latest down migration that drops :migration_version
       (catch Exception e
         (let [msg (string/lower-case (.getMessage e))]
           (when-not (.contains msg "migration_version")
             (throw e))))))

(defn migrate!
  ([conn] (migrate! conn (first (last migrations/migrations))))
  ([conn to-version]
     (let [current-version (current-db-version conn)
           todo (cond
                 (< current-version to-version)
                 (->> migrations/migrations
                      (drop-while (fn [[migration-version migration]]
                                    (<= migration-version current-version)))
                      (take-while (fn [[migration-version migration]]
                                    (<= migration-version to-version)))
                      (map (juxt first (comp :up second))))
                 (> current-version to-version)
                 (->> migrations/migrations
                      reverse
                      (drop-while (fn [[migration-version migration]]
                                    (< current-version migration-version)))
                      (take-while (fn [[migration-version migration]]
                                    (< to-version migration-version)))
                      (map (juxt first (comp :down second))))
                 :else nil)]
       (info "todo" current-version to-version todo)
       (doseq [[migration-version migration] todo]
         (debug "Run migration" migration-version)
         (try (migration conn)
              (update-current-version conn migration-version)
              (catch Exception e
                (error "Migration " migration-version " failed: " e (with-out-str (.printStackTrace e)))
                (throw e))))
       (update-current-version conn to-version))))

(defrecord DevMigrator [database]
  component/Lifecycle
  (start [component]
         (info "Migrate database up")
         (let [conn (:connection database)]
           (migrate! conn)
           component))
  (stop [component]
        (info "Migrate database down" component)
        (migrate! (:connection database) 0)
        component))

(defn dev-migrator []
  (map->DevMigrator {}))

(defrecord Migrator [database to-version]
  component/Lifecycle
  (start [component]
         (info "Migrate database up to version" to-version)
         (let [conn (:connection database)]
           (if to-version
             (migrate! conn to-version)
             (migrate! conn))
           component))
  (stop [component]
        (info "Not migrating down" component)
        component))

(defn migrator [migrate-to-version]
  (map->Migrator {:to-version migrate-to-version}))


(defrecord Database [db-connect-string]
  ;; Implement the Lifecycle protocol
  component/Lifecycle

  (start [component]
         (info ";; Starting database")
         ;; In the 'start' method, initialize this component
         ;; and start it running. For example, connect to a
         ;; database, create thread pools, or initialize shared
         ;; state.
         (let [conn {:connection (jdbc/get-connection {:connection-uri db-connect-string})
                     :connection-uri db-connect-string}]
           ;; Return an updated version of the component with the
           ;; run-time state assoc'd in.
           (try (jdbc/query conn ["VALUES 1"]) ;; derbydb
                (catch Exception e
                  (try (jdbc/query conn ["SELECT NOW()"]) ;; postgres
                       (catch Exception e
                         (debug "DB connection failed:" e (with-out-str (.printStackTrace e)))))))
           (assoc component :connection conn)))

  (stop [component]
        (info ";; Stopping database")
        ;; In the 'stop' method, shut down the running
        ;; component and release any external resources it has
        ;; acquired.
        ;;        (.close connection)
        ;; Return the component, optionally modified.
        
        component))

(defn database [db-connect-string]
  (map->Database {:db-connect-string db-connect-string}))

(comment
  (def s user/system)
  (def cs (get-in s [:config-options :db-connect-string]))
  (require '[clj-crud.system.database :as db])
  (require '[com.stuartsierra.component :as component])
  (def d (db/->Database cs))
  (def d (component/start d))
  (def c (:connection d))
  (def ms clj-crud.migrations/migrations)
  ((-> ms last second :down) c)
  ((-> ms last second :up) c)
  )

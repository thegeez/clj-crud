(ns clj-crud.core
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clj-crud.system.database :as database]
            [clj-crud.system.ring :as ring]
            [clj-crud.system.server :as server]
            [clj-crud.system.email :as email]
            [clj-crud.admin-accounts :as admin-accounts]
            [clj-crud.accounts :as accounts]
            [clj-crud.data.accounts :as accounts-data]
            [clj-crud.chains :as chains]
            [compojure.core :as compojure]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]
            [cemerick.friend.credentials :as credentials]))

(compojure/defroutes main-routes
  admin-accounts/admin-accounts-routes
  accounts/accounts-routes
  chains/chains-routes
  (compojure/ANY "*" _ "Not found")
  )

(defn main-handler []
  (-> #'main-routes
      ((fn save-friend-session [handler]
         (fn friend-session [req]
           (let [res (handler req)]
             (if (contains? (get res :session) ::friend/identity)
               res
               (if-let [auth (get-in req [:session ::friend/identity])]
                 (assoc-in res [:session ::friend/identity] auth)
                 res)
               )))))
      (friend/authenticate {:login-uri "/login"
                            :default-landing-uri "/login"
                            :workflows [(fn [req]
                                          ((workflows/interactive-form
                                            :credential-fn (fn form-credential-fn [creds]
                                                             (credentials/bcrypt-credential-fn
                                                              (accounts-data/lookup-friend-identity (:database req)) creds)))
                                           req))]})

      ring/wrap-common))

(defn dev-handler []
  (-> (main-handler)
      ring/wrap-dev))

(defrecord CrudSystem []
  component/Lifecycle
  (start [this]
         (component/start-system this (filter (partial satisfies? component/Lifecycle) (keys this))))
  (stop [this]
        (component/stop-system this (filter (partial satisfies? component/Lifecycle) (keys this)))))

(defrecord DevDBFixtures [database]
  component/Lifecycle
  (start [component]
         (info "Insert test fixtures")
         (let [db (:connection database)]
           (accounts-data/create-account db {:name "Dev Admin"
                                             :slug "dev-admin"
                                             :password "dev-admin"
                                             :email "dev@admin.example.com"
                                             :admin? true}))
         component)
  (stop [component]
        (info "Not bothering to remove test fixtures")
        component))

(defn dev-db-fixtures []
  (map->DevDBFixtures {}))


(defn dev-crud-system [config-options]
  (info "Hello world!")
  (let [{:keys [db-connect-string port]} config-options]
    (map->CrudSystem
      {:config-options config-options
       :db (database/database db-connect-string)
       :db-migrator (component/using
                     (database/dev-migrator)
                     {:database :db})
       :db-fixtures (component/using
                     (dev-db-fixtures)
                     {:database :db})
       :ring-handler (component/using
                      (ring/ring-handler (dev-handler))
                      {:database :db
                       :emailer :emailer})
       :emailer (email/log-emailer)
       :server (component/using
                (server/jetty port)
                {:handler :ring-handler})})))

(def dev-config {:db-connect-string "jdbc:derby:memory:chains;create=true" :port 3000})

(defn crud-system [config-options]
  (info "Hello world, this is the production system!")
  (let [{:keys [db-connect-string port]} config-options]
    (map->CrudSystem
      {:config-options config-options
       :db (database/database db-connect-string)
       :ring-handler (component/using
                      (ring/ring-handler (main-handler))
                      {:database :db
                       :emailer :emailer})
       :emailer (email/log-emailer)
       :server (component/using
                (server/jetty port)
                {:handler :ring-handler})})))

(defn production-config [port database-url]
  {:db-connect-string database-url
   :port port})


(defn migration-system [config-options]
  (info "Hello world, this is the migration system!")
  (let [{:keys [db-connect-string migrate-to-version]} config-options]
    (map->CrudSystem
      {:config-options config-options
       :db (database/database db-connect-string)
       :db-migrator (component/using
                     (database/migrator migrate-to-version)
                     {:database :db})})))

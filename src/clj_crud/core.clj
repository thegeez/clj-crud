(ns clj-crud.core
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clj-crud.system.database :as database]
            [clj-crud.system.ring :as ring]
            [clj-crud.system.server :as server]
            [clj-crud.accounts :as accounts]
            [clj-crud.data.accounts :as accounts-data]
            [clj-crud.admin :as admin]
            [clj-crud.chains :as chains]
            [clj-crud.data.users :as users]
            [clj-crud.tea :as tea]
            [compojure.core :as compojure]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]
            [cemerick.friend.credentials :as credentials]))

(compojure/defroutes main-routes
  #_(compojure/ANY "/" _ "hello world")
  accounts/accounts-routes
  admin/admin-routes
  chains/chains-routes
  tea/tea-routes
  )

(defn main-handler []
  (-> #'main-routes
      (friend/authenticate {:login-uri "/login"
                            :workflows [
                                        #_(workflows/interactive-form)
                                        (fn [req]
                                          ((workflows/interactive-form)
                                           (assoc-in req [::friend/auth-config :credential-fn]
                                                     (fn form-credential-fn [creds]
                                                       (debug "creds are:" creds)
                                                       (credentials/bcrypt-credential-fn
                                                        (accounts-data/lookup-friend-identity (:database req)) creds)))))]})
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
           (doseq [[slug name] [["user1" "User 1"]
                                ["user2" "Second User"]]]
             (users/create-user db {:slug slug
                                    :name name})))
         component)
  (stop [component]
        (info "Not bothering to remove test fixtures")
        component))

(defn dev-db-fixtures []
  (map->DevDBFixtures {}))


(defn crud-system [config-options]
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
                      {:database :db})
       :server (component/using
                (server/jetty port)
                {:handler :ring-handler})})))

(def dev-config {:db-connect-string "jdbc:derby:memory:chains;create=true" :port 3000})
(comment
  ;; example repl session:
  (def system (crud-system dev-config))
  ;;=> #'examples/system
  
  (alter-var-root #'system component/start)
  ;; Starting database
  ;; Opening database connection
  ;; Starting scheduler
  ;; Starting ExampleComponent
  ;; execute-query
  ;;=> #examples.ExampleSystem{ ... }
  
  (alter-var-root #'system component/stop)
  )

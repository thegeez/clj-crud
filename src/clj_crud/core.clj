(ns clj-crud.core
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [clj-crud.system.database :as database]
            [clj-crud.system.ring :as ring]
            [clj-crud.system.server :as server]
            [clj-crud.system.email :as email]
            [clj-crud.accounts :as accounts]
            [clj-crud.admin-accounts :as admin-accounts]
            [clj-crud.data.accounts :as accounts-data]
            [clj-crud.admin :as admin]
            [clj-crud.chains :as chains]
            [clj-crud.tea :as tea]
            [compojure.core :as compojure]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]
            [cemerick.friend.credentials :as credentials]))

(compojure/defroutes main-routes
  #_(compojure/ANY "/" _ "hello world")
  admin-accounts/admin-accounts-routes
  accounts/accounts-routes
  #_admin/admin-routes
  chains/chains-routes
  tea/tea-routes
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
                                             :admin? true})
           (accounts-data/create-account db {:name "User 1"
                                             :slug "user1"
                                             :password "user1"
                                             :email "user.one@example.com"
                                             :admin? false}))
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
                      {:database :db
                       :emailer :emailer})
       :emailer (email/log-emailer)
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

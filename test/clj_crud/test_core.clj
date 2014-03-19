(ns clj-crud.test-core
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clj-crud.core :as core]
            [clj-crud.data.users :as users]
            [com.stuartsierra.component :as component]))

(def test-config {:db-connect-string "jdbc:derby:memory:test_chains;create=true"})

(defrecord TestDBFixtures [database]
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

(defn test-db-fixtures []
  (map->TestDBFixtures {}))


(let [s (atom nil)]
  (defn reuse-system []
    (swap! s (fn [system]
               (if system
                 system
                 (-> (core/crud-system test-config)
                     (dissoc :server)
                     (assoc :test-db-fixtures (component/using
                                               (test-db-fixtures)
                                               {:database :db}))
                     component/start))))))

(defn reuse-handler []
  (get-in (reuse-system) [:ring-handler :app]))

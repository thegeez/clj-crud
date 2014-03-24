(ns clj-crud.data.users
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.java.jdbc :as jdbc]))

(defn create-entry [db data]
  (let [res (jdbc/insert! db :entries {:data (pr-str data)
                                       :updated_at (.getTime (java.util.Date.))})]
    (-> res first :1)))

(defn update-entry [e new]
  [(merge {} (when-not (seq (:data new))
               {:data "Data cannot be empty"}))
   (merge e
          (select-keys new (keys e)))])

(defn put-entry [db entry]
  (do (jdbc/update! db :entries (assoc (select-keys entry [:data])
                                  :updated_at (.getTime (java.util.Date.)))
                    ["id = ?" (:id entry)])
      nil))

(defn get-user [db slug]
  (first (jdbc/query db ["SELECT * FROM users WHERE slug = ?" slug])))

(defn update-user [db user]
  (do (let [res (jdbc/update! db :users (assoc user
                                          :updated_at (.getTime (java.util.Date.)))
                              ["slug = ?" (:slug user)])]
        (when-not (= res [1])
          (throw (Exception.  "DB Update has not succeeded"))))
      nil))

(defn users-list [db]
  (jdbc/query db ["SELECT * FROM users"]))

(defn create-user [db {:keys [slug name] :as data}]
  (let [now (.getTime (java.util.Date.))
        res (jdbc/insert! db :users {:slug slug
                                     :name name
                                     :updated_at now
                                     :created_at now})]
    (-> res first :1)))

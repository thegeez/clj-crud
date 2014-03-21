(ns clj-crud.data.users
  (:require [clojure.java.jdbc :as jdbc]))

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

(defn users-list [db]
  (jdbc/query db ["SELECT * FROM users"])
  #_[{:id 1 :slug "u1" :name "U1" :created_at 0 :updated_at 0}
   {:id 1 :slug "u2" :name "U2" :created_at 0 :updated_at 0}])

(defn create-user [db {:keys [slug name] :as data}]
  (let [now (.getTime (java.util.Date.))
        res (jdbc/insert! db :users {:slug slug
                                     :name name
                                     :updated_at now
                                     :created_at now})]
    (-> res first :1)))

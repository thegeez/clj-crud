(ns clj-crud.data.accounts
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.string :as string]
            [clojure.java.jdbc :as jdbc]
            [cemerick.friend.credentials :as credentials]))

(def slug-characters
  (let [ab "abcdefghijklmnopqrstuvwxyz"
        nums "0123456789"
        syms "-_"]
    (-> #{}
        (into ab)
        (into (string/capitalize ab))
        (into nums)
        (into syms))))

(defn slugify [name]
  (let [name (str name)]
    (-> name
        str
        string/lower-case
        (->>
         (filter slug-characters)
         (apply str)))))

(defn get-account [db slug]
  (first (jdbc/query db ["SELECT * FROM accounts WHERE slug = ?" slug])))

#_(defn update-account [db account]
  (do (let [res (jdbc/update! db :accounts (assoc account
                                          :updated_at (.getTime (java.util.Date.)))
                              ["slug = ?" (:slug account)])]
        (when-not (= res [1])
          (throw (Exception.  "DB Update has not succeeded"))))
      nil))

(defn create-account [db account]
  (let [exists-by-slug (get-account db (:slug account))]
    (if exists-by-slug
      ;; user needs to select different name for a unique slug
      {:errors {:name "Name already taken"}}
      (let [now (.getTime (java.util.Date.))
            {:keys [email slug name password]} account
            res (jdbc/insert! db :accounts {:slug slug
                                            :name name
                                            :email email
                                            :password (credentials/hash-bcrypt password)
                                            :created_at now
                                            :updated_at now})]
        (when-not (contains? (first res) :1)
          (throw (Exception.  "DB Create has not succeeded")))
        (get-account db (:slug account))))))

(defn delete-account [db account]
  (jdbc/delete! db :accounts ["slug = ?" (:slug account)]))

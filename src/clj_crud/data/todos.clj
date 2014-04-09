(ns clj-crud.data.todos
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.string :as string]
            [clojure.java.jdbc :as jdbc]))

(defn create-todo [db account todo]
  (let [{account_id :id} account
        {:keys [text]} todo
        now (.getTime (java.util.Date.))
        res (jdbc/insert! db :todos {:text text
                                     :account_id account_id
                                     :completed 0
                                     :created_at now
                                     :updated_at now})]
    (or (get (first res) :1)
        (get (first res) :id))))

(defn get-todos [db account]
  (let [{account_id :id} account]
    (->> (jdbc/query db ["SELECT * FROM todos WHERE account_id = ? ORDER BY id ASC" account_id])
         (map #(update-in % [:completed] pos?)))))

(defn update-todo [db account todo]
  (let [res (jdbc/update! db :todos (assoc (dissoc todo :id)
                                      :updated_at (.getTime (java.util.Date.)))
                          ["id = ? AND account_id = ?" (:id todo) (:id account)])]
    (when-not (= res [1])
      (throw (Exception.  "DB Update has not succeeded")))))

(defn delete-todo [db account todo-id]
  (jdbc/delete! db :todos ["id = ? AND account_id = ?" todo-id (:id account)]))

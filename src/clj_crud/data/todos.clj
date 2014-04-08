(ns clj-crud.data.todos
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.string :as string]
            [clojure.java.jdbc :as jdbc]))

(defn create-todo [db account todo]
  (let [{account_id :id} account
        {:keys [text]} todo
        now (.getTime (java.util.Date.))]
    (-> (jdbc/insert! db :todos {:text text
                                 :account_id account_id
                                 :finished 0
                                 :created_at now
                                 :updated_at now})
        first
        :1)))

(defn get-todos [db account]
  (let [{account_id :id} account]
    (->> (jdbc/query db ["SELECT * FROM todos WHERE account_id = ? ORDER BY id ASC" account_id])
         (map #(update-in % [:finished] pos?)))))

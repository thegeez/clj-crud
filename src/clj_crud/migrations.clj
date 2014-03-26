(ns clj-crud.migrations
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [clojure.java.jdbc :as jdbc]))

(defn serial-id [db]
  (if (.contains (:connection-uri db) "derby")
    [:id "INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1)"]
    [:id :serial "PRIMARY KEY"]))

(def migrations
     [
      (let [table :migration_version]
        [1 {:up (fn [db]
                  (jdbc/db-do-commands
                   db (jdbc/create-table-ddl
                       table
                       [:id :int]
                       [:version :int]))
                 (jdbc/insert! db
                               table {:id 0
                                      :version 1}))
           :down (fn [db]
                   (jdbc/db-do-commands
                    db (jdbc/drop-table-ddl
                        table)))}])
      (let [table :accounts]
        [2 {:up (fn [db]
                  (jdbc/db-do-commands
                   db (jdbc/create-table-ddl
                       table
                       (serial-id db)
                       [:slug "VARCHAR(256)"]
                       [:name "VARCHAR(256)"]
                       [:email "VARCHAR(256)"]
                       [:password "VARCHAR(256)"]
                       [:created_at "BIGINT"]
                       [:updated_at "BIGINT"])))
            :down (fn [db]
                    (jdbc/db-do-commands
                     db (jdbc/drop-table-ddl
                         table)))}])
      (let [table :users]
        [3 {:up (fn [db]
                  (jdbc/db-do-commands
                   db (jdbc/create-table-ddl
                       table
                       (serial-id db)
                       [:slug "VARCHAR(256)"]
                       [:name "VARCHAR(256)"]
                       [:created_at "BIGINT"]
                       [:updated_at "BIGINT"])))
            :down (fn [db]
                    (jdbc/db-do-commands
                     db (jdbc/drop-table-ddl
                         table)))}])
     ])

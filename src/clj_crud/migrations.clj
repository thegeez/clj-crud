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
      [4 {:up (fn [db]
                (jdbc/db-do-commands
                 db
                 "ALTER TABLE accounts
                   ADD reset_token VARCHAR(32)"
                 "ALTER TABLE accounts
                   ADD expire BIGINT"))
          :down (fn [db]
                  (jdbc/db-do-commands
                   db
                   "ALTER TABLE accounts
                     DROP COLUMN reset_token"
                   "ALTER TABLE accounts
                     DROP COLUMN expire"))}]
      [5 {:up (fn [db]
                (jdbc/db-do-commands
                 db
                 "ALTER TABLE accounts
                   ADD admin INT default 0"))
          :down (fn [db]
                  (jdbc/db-do-commands
                   db
                   "ALTER TABLE accounts
                     DROP COLUMN admin"))}]
      [6 {:up (fn [db]
                (let [now (.getTime (java.util.Date.))]
                  (jdbc/insert! db :accounts {:slug "admin"
                                              :name "Admin"
                                              :email "admin@example.com"
                                              :password "$2a$10$ym/vgVf41AThHInFYij1d.f0DPkM9FMS.TautrjEL/jPabb/kvLg."
                                              :admin 1
                                              :created_at now
                                              :updated_at now})))
          :down (fn [db]
                    (jdbc/delete! db :accounts ["slug = ?" "admin"]))}]
      [7 {:up (fn [db]
                (let [now (.getTime (java.util.Date.))]
                  (jdbc/insert! db :accounts {:slug "user1"
                                              :name "User 1"
                                              :email "user.1@example.com"
                                              :password "$2a$10$phn36rpqB4P8.OrJjKhDOeEuqDf6fnSGn0UpYeZb.8sHnkM9YSJFS"
                                              :admin 0
                                              :created_at now
                                              :updated_at now})))
          :down (fn [db]
                    (jdbc/delete! db :accounts ["slug = ?" "user1"]))}]
      (let [table "todos"]
        [8 {:up (fn [db]
                  (jdbc/db-do-commands
                   db (jdbc/create-table-ddl
                       table
                       (serial-id db)
                       [:text "VARCHAR(1024)"]
                       [:account_id "VARCHAR(256)"]
                       [:completed "INT"]
                       [:created_at "BIGINT"]
                       [:updated_at "BIGINT"])))
            :down (fn [db]
                    (jdbc/db-do-commands
                     db (jdbc/drop-table-ddl
                         table)))}])
      ])

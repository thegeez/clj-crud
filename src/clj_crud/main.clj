(ns clj-crud.main
  (:require [clojure.tools.logging :refer [info debug]]
            [com.stuartsierra.component :as component]
            [clj-crud.core :as core])
  (:gen-class))

(defn -main [& args]
  (info "Running main with args: " args)
  (let [port (Long/parseLong (first args))
        _ (assert (pos? port) (str "Something is wrong with the port argument: " (first args)))
        database-url (let [db-url (second args)]
                       (assert (.startsWith db-url "postgres:")
                               (str "Something is wrong with the database argument: " (second args)))
                       (.replace db-url "postgres:" "jdbc:postgresql:"))
        system (core/crud-system (core/production-config port database-url))]
    (component/start system)
    (.addShutdownHook (Runtime/getRuntime)
                      (Thread. (fn []
                                 (info "Shutting down main")
                                 (component/stop system))))))

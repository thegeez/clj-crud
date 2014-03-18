(ns clj-crud.main
  (:require [clojure.tools.logging :refer [info debug]]
            [com.stuartsierra.component :as component]
            [clj-crud.core :as core])
  (:gen-class))

(defn -main [& args]
  (info "Running main")
  (let [system (core/crud-system core/dev-config)]
    (component/start system)
    (.addShutdownHook (Runtime/getRuntime)
                      (Thread. (fn []
                                 (info "Shutting down main")
                                 (component/stop system))))))

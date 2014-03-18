(ns clj-crud.system.server
  (:require [clojure.tools.logging :refer [info]]
            [com.stuartsierra.component :as component]
            [ring.adapter.jetty :as jetty]))


(defrecord Jetty [port handler]
  component/Lifecycle
  (start [component]
         (info "Starting jetty on port: " port)
         (assoc component :jetty (jetty/run-jetty (:app handler) {:port port
                                                                  :join? false})))
  (stop [component]
        (info "Stopping jetty")
        (when-let [jetty (:jetty component)]
          (when-not (.isStopped jetty)
            (.stop jetty)))
        component))

(defn jetty [port]
  (map->Jetty {:port port}))

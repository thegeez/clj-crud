(ns clj-crud.system.server
  (:require [clojure.tools.logging :refer [info]]
            [com.stuartsierra.component :as component]
            [ring.adapter.jetty :as jetty])
  (:import [org.eclipse.jetty.server.handler GzipHandler]))

;; h/t http://cemerick.com/2011/04/22/adding-gzip-compression-to-a-clojure-webapp-in-30-seconds/#comment-2307
(defn- configurator [server]
  (.setHandler server
               (doto (new GzipHandler)
                 (.setMimeTypes "text/html,text/plain,text/xml,application/xhtml+xml,text/css,application/javascript,text/javascript,image/svg+xml,application/json,application/clojure")
                 (.setHandler (.getHandler server)))))

(defrecord Jetty [port handler]
  component/Lifecycle
  (start [component]
         (info "Starting jetty on port: " port)
         (assoc component :jetty (jetty/run-jetty (:app handler) {:port port
                                                                  :join? false
                                                                  :configurator configurator})))
  (stop [component]
        (info "Stopping jetty")
        (when-let [jetty (:jetty component)]
          (when-not (.isStopped jetty)
            (.stop jetty)))
        component))

(defn jetty [port]
  (map->Jetty {:port port}))

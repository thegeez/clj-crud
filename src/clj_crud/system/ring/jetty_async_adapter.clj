(ns clj-crud.system.ring.jetty-async-adapter
  "Adapter for the Jetty webserver, with async HTTP."
  (:import (org.eclipse.jetty.server.handler AbstractHandler)
           (org.eclipse.jetty.server Server Request Response)
           (org.eclipse.jetty.server.nio SelectChannelConnector)
           (org.eclipse.jetty.continuation Continuation ContinuationSupport ContinuationListener)
           (org.eclipse.jetty.io EofException)
           (javax.servlet.http HttpServletRequest))
  (:require [clojure.tools.logging :refer [info]]
            [ring.util.servlet :as servlet]
            [com.stuartsierra.component :as component]))

;; Based on ring-jetty-async-adapter by Mark McGranaghan
;; (https://github.com/mmcgrana/ring/tree/jetty-async)
;; This has failed write support


(defn- proxy-handler
  "Returns an Jetty Handler implementation for the given Ring handler."
  [handler options]
  (proxy [AbstractHandler] []
    (handle [target ^Request base-request ^HttpServletRequest request response]
      (let [request-map (servlet/build-request-map request)
            response-map (handler request-map)]
        (condp = (:async response-map)
            nil
          (do
            (servlet/update-servlet-response response response-map)
            (.setHandled base-request true))
          :http
          (let [reactor (:reactor response-map)
                ;; continuation lives until written to!
                continuation (.startAsync request)
                emit (fn [args]
                       (let [type (:type args)
                             servlet-response (.getServletResponse continuation)]
                         (case type
                               :head
                               (doto servlet-response
                                 (servlet/set-status (:status args))
                                 (servlet/set-headers (:headers args))
                                 (.flushBuffer))
                               :chunk
                               (do
                                 (doto (.getWriter response)
                                   (.write (:data args))
                                   (.flush))
                                 (when (.checkError (.getWriter response))
                                   (throw (Exception. "CANNOT WRITE TO STREAMING CONNECTION"))))
                               :error
                               (.sendError servlet-response (:status-code args) (:message args))
                               :close
                               (.complete continuation))))]
            (.addContinuationListener continuation
                                      (proxy [ContinuationListener] []
                                        (onComplete [c] nil)
                                        (onTimeout [c]
                                                   (.complete c))))

            ;; 4 minutes is google default
            (.setTimeout continuation (get options :response-timeout (* 4 60 1000)))
            (reactor emit)
            ))))))

(defn- create-server
  "Construct a Jetty Server instance."
  [options]
  (let [connector (doto (SelectChannelConnector.)
                    (.setPort (options :port 80))
                    (.setHost (options :host)))
        server    (doto (Server.)
                    (.addConnector connector)
                    (.setSendDateHeader true))]
    server))

(defn ^Server run-jetty-async
  "Serve the given handler according to the options.
  Options:
    :configurator   - A function called with the Server instance.
    :port
    :host
    :join?          - Block the caller: defaults to true.
    :response-timeout - Timeout after which the server will close the connection"
  [handler options]
  (let [^Server s (create-server (dissoc options :configurator))]
    (when-let [configurator (:configurator options)]
      (configurator s))
    (doto s
      (.setHandler (proxy-handler handler options))
      (.start))
    (when (:join? options true)
      (.join s))
    s))

(defrecord AsyncJetty [port handler]
  component/Lifecycle
  (start [component]
         (info "Starting async jetty on port: " port)
         (assoc component :jetty (run-jetty-async (:app handler) {:port port
                                                                  :join? false})))
  (stop [component]
        (info "Stopping async jetty")
        (when-let [jetty (:jetty component)]
          (when-not (.isStopped jetty)
            (.stop jetty)))
        component))

(defn async-jetty [port]
  (map->AsyncJetty {:port port}))

(ns clj-crud.system.ring
  (:require [clojure.tools.logging :refer [info debug spy error]]
            [com.stuartsierra.component :as component]
            [ring.middleware.params :as params]
            [ring.middleware.keyword-params :as keyword-params]
            [clj-crud.system.ring.anti-forgery :as anti-forgery]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as session-cookie]
            [ring.middleware.flash :as flash]
            [ring.middleware.resource :as resource]
            [ring.middleware.file-info :as file-info]
            [ring.middleware.content-type :as content-type]
            [ring.util.response :as response]
            [liberator.dev :as lib-dev]))

(defn wrap-database [handler database]
  (fn [req]
    (-> req
        (assoc :database database)
        handler)))

(defn wrap-emailer [handler emailer]
  (fn [req]
    (-> req
        (assoc :emailer emailer)
        handler)))

(defrecord RingHandler [handler database emailer]
  component/Lifecycle
  (start [component]
         (info "Starting handler")
         (assoc component :app (-> handler
                                   (wrap-database (:connection database))
                                   (wrap-emailer emailer))))
  (stop [component]
        (info "Stopping handler")
        component))

(defn ring-handler [handler]
  (map->RingHandler {:handler handler}))

(defn wrap-redirect-trailing-slash [handler]
  (fn [{:keys [uri] :as req}]
    (if (and (.endsWith ^String uri "/")
             (not= uri "/"))
      (response/redirect (subs uri 0 (dec (count uri))))
      (handler req))))

(defn wrap-accept-uri [handler]
  ;; when uri ends with .json / .edn then use that for accept header
  (fn [{:keys [uri] :as req}]
    (handler (if-let [[type chopped-uri] (cond
                                  (.endsWith ^String uri ".json")
                                  ["application/json" (subs uri 0 (- (count uri) 5))]
                                  (.endsWith ^String uri ".edn")
                                  ["application/edn" (subs uri 0 (- (count uri) 4))])]
               (spy (-> req
                    (assoc-in [:headers "accept"] type)
                    (assoc-in [:uri] chopped-uri)))
               req))))

;; works with the redirect of *out* to repl
(defn wrap-stacktrace-to-log [handler]
  (fn [req]
    (try (handler req)
         (catch Exception e
           (let [res (java.io.StringWriter.)
                 pw (java.io.PrintWriter. res)
                 st (.printStackTrace ^Throwable e pw)
                 st-str (.toString res)]
             (error "Exception e: " e "str:" st-str))))))

;; h/t james reeves
(defn wrap-swank [handler]
  (if-let [conn-var (try (find-var 'swank.core.connection/*current-connection*)
                         (catch IllegalArgumentException e
                           nil))]
    (let [conn (var-get conn-var)]
      (fn [request]
        (with-redefs-fn {(find-var 'swank.core.connection/*current-connection*) conn}
          (fn []
            (handler request)))))
    handler))

(defn wrap-common [handler]
  (let [handler (-> handler
                    anti-forgery/wrap-anti-forgery
                    flash/wrap-flash
                    ;; todo put this in db / split flash / account-session store?
                    (session/wrap-session {:cookie-name "ccs"
                                           :store (session-cookie/cookie-store)})
                    keyword-params/wrap-keyword-params
                    params/wrap-params
                    (resource/wrap-resource "/")
                    ;; add Cache-Control:public, max-age=31536000 to
                    ;; files, to improve heroku performance, should be
                    ;; in wrap-resource
                    ((fn [handler]
                       (fn wrap-cache-control [req]
                         (let [res (handler req)]
                           (info "File res: " res)
                           (if (and (= :get (:request-method req))
                                    (instance? java.io.File (:body res)))
                             (assoc-in res [:headers "Cache-Control"] "public, max-age=31536000")
                             res)))))
                    file-info/wrap-file-info
                    content-type/wrap-content-type
                    wrap-accept-uri
                    wrap-redirect-trailing-slash
                    wrap-stacktrace-to-log)]
    (fn wrap-common [req]
     (handler req))))

(defn wrap-dev [handler]
  (let [handler (-> handler
                    ;; have seen jetty crash on header too full with :header
                    (lib-dev/wrap-trace :ui)
                    wrap-swank)]
    (fn wrap-dev [req]
      (handler req))))

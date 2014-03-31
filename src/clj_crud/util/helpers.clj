(ns clj-crud.util.helpers
  (:require [clojure.tools.logging :refer [spy debug]]
            [liberator.representation :as lib-rep]
            [clojure.string :as string]
            [clojure.walk :as walk]))

(defn db [ctx]
  (get-in ctx [:request :database]))

(defn location-flash [uri flash]
  {:headers {"Location" uri}
   :status 303
   :flash flash})

(defn get? [ctx]
  (= :get (get-in ctx [:request :request-method])))

(defn put? [ctx]
  (= :put (get-in ctx [:request :request-method])))

(defn post? [ctx]
  (= :post (get-in ctx [:request :request-method])))

(defn edit? [ctx]
  (let [^String uri (get-in ctx [:request :uri])]
    (.contains uri "/edit")))

(defn home-uri [ctx]
  (let [request (get ctx :request)
        scheme (name (:scheme request))
        ;; is this the url or the listening host?
        server-name (:server-name request)
        port (:server-port request)]
    (if-not (= port 80)
      (format "%s://%s:%s"
              scheme
              server-name
              port)
      (format "%s://%s"
              scheme
              server-name))))

(defn uri-parts [ctx]
  (let [request (get ctx :request)
        root (format "%s://%s:%s"
                   ;; is this the url or the listening host?
                   (name (:scheme request))
                   (:server-name request)
                   (:server-port request))
        [uri view] (let [uri (:uri request)]
                       (if (.endsWith ^String uri "/edit")
                         [(subs uri 0 (- (count uri) 5)) "/edit"]
                         [uri nil]))]
    {:root root
     :uri (str root uri)
     :view view}))

(defn with-home-uri [d ctx]
  (let [home-uri (home-uri ctx)]
    (walk/prewalk
     (fn [n]
       (if (and (map? n)
                (contains? n :uri)
                (not (.startsWith (:uri n) "http")))
         (update-in n [:uri] (fn [old]
                               (str home-uri old)))
         n))
     d)))

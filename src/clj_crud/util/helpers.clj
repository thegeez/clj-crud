(ns clj-crud.util.helpers
  (:require [clojure.tools.logging :refer [spy debug]]
            [liberator.core :as lib-core]
            [liberator.representation :as lib-rep]
            [clojure.string :as string]))

(defn db [ctx]
  (get-in ctx [:request :database]))

;; to make location-flash work
(defmethod lib-core/to-location liberator.representation.RingResponse [rr]
           rr)

(defn location-flash [uri flash]
  (assoc-in (lib-core/to-location uri)
            [:response :flash] flash))

(defn put? [ctx]
  (= :put (get-in ctx [:request :request-method])))

(defn edit? [ctx]
  (let [^String uri (get-in ctx [:request :uri])]
    (.contains uri "/edit")))

(defn known-content-type [mapping]
  (fn [ctx]
    (let [rm (get-in ctx [:request :request-method])]
      (if (or (= rm :get)
              (= rm :options))
        true
        (if-let [allowed (get mapping rm)]
          (let [ct (get-in ctx [:request :headers "content-type"])]
            (contains? allowed ct))
          false)))))

(defn parse-content-type [method+content-type+convert]
  (fn [ctx]
    (let [rm (get-in ctx [:request :request-method])]
      (if (= rm :get)
        true
        (if-let [content-type+convert (get method+content-type+convert rm)]
          (let [ct (get-in ctx [:request :headers "content-type"])]
            (when-let [convert  (get content-type+convert ct)]
              [true (convert ctx)]))
          false)))))

(defn form-params-to-data [ctx]
  (let [form-params (get-in ctx [:request :form-params])
        kw-form-params (zipmap (map keyword (keys form-params))
                               (vals form-params))
        data (reduce
              (fn [acc [k v]]
                (update-in acc [(keyword (namespace k))] assoc (keyword (name k)) v))
              {} kw-form-params)]
    (assoc-in ctx [:request :params] data)))

(defn home-uri [ctx]
  (let [request (get ctx :request)]
    (format "%s://%s:%s"
            ;; is this the url or the listening host?
            (name (:scheme request))
            (:server-name request)
            (:server-port request))))

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
    (update-in d [:links]
               (fn [l]
                 (zipmap (keys l)
                         (map (fn [link]
                                (update-in link [:uri] (partial str home-uri))) (vals l)))))))

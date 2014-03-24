(ns clj-crud.util.layout
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.pprint :as pprint]
            [liberator.representation :as lib-rep]
            [net.cgrand.enlive-html :as html]
            [clj-crud.util.helpers :as h]))

;; to keep the handle-ok handlers small this method will render
;; json/edn/xml (when an available-media-type) per liberator defaults
;; html rendering of data is dispatched to key
(defmulti render (fn [key ctx]
                   (if (= (get-in ctx [:representation :media-type]) "text/html")
                     key
                     :default)))

(defmethod render :default [_ ctx]
           (lib-rep/ring-response
            ;; todo move everything to use entity
            (lib-rep/as-response (or (:entity ctx)
                                     (:data ctx)) ctx)))

(defn default-transforms [ctx]
  [[[:div#flash]
    (when-let [flash (get-in ctx [:request :flash])]
                   (html/content flash))]])

;; application used to be hard coded
(defn with-frame [ctx application & clauses]
  (apply str
         (html/emit*
          (html/at*  application
                     (concat
                      (default-transforms ctx)
                      (partition 2 clauses))))))

;; for dev use liberators default html-table rendering with enlive
(defn default-html [data]
  (let [ctx {:representation {:media-type "text/html"}}]
    (-> (lib-rep/as-response data ctx)
        :body
        html/html-content)))

(defn do-when-> [guard & trans]
  (if guard
    (apply html/do-> trans)
    identity))

(defn maybe-error [msg]
  (if msg
    (html/do->
     (html/add-class "has-error")
     (html/transform-content
      [:span.help-block]
      (html/do->
       (html/remove-class "hidden")
       (html/content msg))))
    identity))

(def edn "application/edn")
(def html "text/html")
(defn by-media [media+handlers]
  (fn [ctx]
    (let [media-type (get-in ctx [:representation :media-type])]
      (some (fn [[m handler]]
              (when (= media-type m)
                (debug "picked handler: " media-type m handler)
                (handler ctx))) media+handlers))))

(defn as-template-response [transform]
  (fn [d ctx]
    (debug "as-template-response" d ctx)
    (let [status (get ctx :status)]
      (if-not (<= 200 status 299)
        d
        (let [d (h/with-home-uri d ctx)]
          (if (= (get-in ctx [:representation :media-type]) "text/html")
            {:body (transform (assoc ctx :data d))}
            (lib-rep/as-response d ctx)))))))

(defn emit [root & clauses]
  (apply str
         (html/emit*
          (html/at*  root
                     (partition 2 clauses)))))

(defn flash [ctx]
  (when-let [flash (get-in ctx [:request :flash])]
    (html/content flash)))

(defn plain-a [link]
  (html/do->
   (html/content link)
   (html/set-attr :href link)))

(ns clj-crud.util.layout
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.pprint :as pprint]
            [liberator.representation :as lib-rep]
            [net.cgrand.enlive-html :as html]
            [clj-crud.util.helpers :as h]))

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

(defn as-template-response [transform]
  (fn [d ctx]
    (let [status (get ctx :status)]
      (if-not (<= 200 status 299)
        (if (<= 300 status 399)
          (if-let [loc (get-in d [:headers "Location"])]
            (assoc-in d [:headers "Location"]
                      (if (.startsWith loc "http")
                        loc
                        (str (h/home-uri ctx) loc)))
            d)
          d)
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

(ns clj-crud.common
  (:require [clj-crud.util.layout :as l]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def application-html (html/html-resource "templates/application.html"))

(defn emit-application [ctx & clauses]
  (assert (even? (count clauses)) "Need even number of clauses for enlive (forgot to pass ctx?)")
  (let [friend-identity (friend/identity (:request ctx))]
    (apply
     l/emit application-html
     [:#flash] (when-let [flash (get-in ctx [:request :flash])]
                 (html/content flash))
     [:#logged-in] (when friend-identity
                     (html/transform-content
                      [:a.rel-profile] (html/do->
                                        (html/content (str "Welcome, " (:current friend-identity)))
                                        (html/set-attr :href (str "/profile/" (:current friend-identity))))
                      [:a.rel-edit-profile] (html/set-attr :href (str "/profile/" (:current friend-identity) "/edit"))))
     [:#unlogged-in] (when-not friend-identity
                       identity)
     (concat clauses
             [[[:form (html/nth-child 1)]]
              (html/append [{:tag :input
                             :attrs {:type "hidden"
                                     :name "__anti-forgery-token"
                                     :value (get-in ctx [:request :anti-forgery-token])}
                             :content []}])]))))

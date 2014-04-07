(ns clj-crud.common
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clj-crud.util.layout :as l]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def application-html (html/html-resource "templates/application.html"))

(defn emit-application [ctx & clauses]
  (assert (even? (count clauses)) "Need even number of clauses for enlive (forgot to pass ctx?)")
  (let [friend-auth (friend/current-authentication (:request ctx))]
    (apply
     l/emit application-html
     [:#flash] (when-let [flash (get-in ctx [:request :flash])]
                 (html/content flash))
     [:ul [:li html/first-of-type]] (when friend-auth
                                      (html/transform-content
                                       [:a] (html/set-attr :href (str "/todos/" (:slug friend-auth)))))
     [:ul.navbar-nav :li] (if (contains? (:roles friend-auth) :admin)
                 (html/after [{:tag :li
                               :attrs nil
                               :content [{:tag :a
                                          :attrs {:href "/admin"}
                                          :content ["Admin"]}]}])
                 identity)
     [:#logged-in] (when friend-auth
                     (html/transform-content
                      [:a.rel-profile] (html/do->
                                        (html/content (str "Welcome, " (:name friend-auth)))
                                        (html/set-attr :href (str "/profile/" (:slug friend-auth))))
                      [:a.rel-edit-profile] (html/set-attr :href (str "/profile/" (:slug friend-auth) "/edit"))))
     [:#unlogged-in] (when-not friend-auth
                       identity)
     (concat clauses
             [[[:form (html/nth-child 1)]]
              (html/append [{:tag :input
                             :attrs {:type "hidden"
                                     :name "__anti-forgery-token"
                                     :value (get-in ctx [:request :session "__anti-forgery-token"])}
                             :content []}])]))))

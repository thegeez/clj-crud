(ns clj-crud.admin
  (:require [clojure.tools.logging :refer [debug spy]]
            [clj-crud.util.layout :as l]
            [clj-crud.util.helpers :as h]
            [clj-crud.common :as c]
            [clj-crud.data.users :as users]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :refer [as-response] :as lib-rep]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def admin-index-html (html/html-resource "templates/admin/index.html"))

(defn admin-index-layout [ctx]
  (l/emit c/application-html
          [:#flash] (when-let [identity (friend/identity (:request ctx))]
                      (html/content (str "Identity: " identity)))
          [:#content] (html/content admin-index-html)
          [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
          [:a.rel-users] (let [{:keys [rel uri] :as users} (get-in ctx [:data :links :users])]
                           (html/do->
                            (html/content rel)
                            (html/set-attr :href uri)))))

(defresource admin-index
  :available-media-types ["text/html" "application/edn"]
  :handle-ok {:main "Hello admin world!"
              :links {:home {:uri "/admin"
                             :rel "home"}
                      :users {:uri "/admin/users"
                              :rel "users"}}}
  :as-response (l/as-template-response admin-index-layout))

(def admin-users-list-html (html/html-resource "templates/admin/users.html"))

(defn admin-users-list-layout [ctx]
  (l/emit c/application-html
          [:#flash] (when-let [identity (friend/identity (:request ctx))]
                      (html/content (str "Identity: " identity)))
          [:#content] (html/content admin-users-list-html)
          [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
          [:a.rel-users] (let [{:keys [rel uri] :as users} (get-in ctx [:data :links :users])]
                           (html/do->
                            (html/content rel)
                            (html/set-attr :href uri)))))

(defresource admin-users-list
  :available-media-types ["text/html" "application/edn"]
  :exists? (fn [ctx]
             {:data (users/users-list (h/db ctx))})
  :handle-ok (fn [ctx]
               {:main "Hello admin world!"
                :data (:data ctx)
                :links {:home {:uri "/admin"
                               :rel "home"}
                        :users {:uri "/admin/users"
                                :rel "users"}}})
  :as-response (l/as-template-response admin-users-list-layout)
  )

(defroutes admin-routes
  (ANY "/admin" [] (fn [req]
                     (admin-index req)))
  (ANY "/admin/users" [] admin-users-list))

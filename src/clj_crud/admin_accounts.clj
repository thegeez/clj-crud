(ns clj-crud.admin-accounts
  (:require [clojure.tools.logging :refer [debug spy]]
            [clj-crud.system.email :as email]
            [clj-crud.util.layout :as l]
            [clj-crud.util.helpers :as h]
            [clj-crud.common :as c]
            [clj-crud.accounts :as accounts-resources]
            [clj-crud.data.accounts :as accounts]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as lib-rep]
            [compojure.core :refer [defroutes ANY GET context]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]))

(def admin-accounts-list-html (html/html-resource "templates/accounts/admin/accounts.html"))

(defn admin-accounts-list-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content admin-accounts-list-html)
   [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
   [:a.rel-accounts] (html/set-attr :href (get-in ctx [:data :links :accounts :uri]))
   [:table#accounts :tbody [:tr html/first-of-type]]
   (html/clone-for [account (get-in ctx [:data :accounts])]
                   [:tr] (let [{:keys [id slug name created_at updated_at admin]} account
                               edit-link (get-in account [:links :edit :uri])
                               self-link (get-in account [:links :self :uri])
                               ghost-link (get-in account [:links :ghost :uri])
                               ghost-form-name (str "ghost-form-" (:slug account))]
                           (html/transform-content
                            [:td.id] (html/content (str id))
                            [:td.slug :a] (html/do->
                                           (html/content slug)
                                           (html/set-attr :href self-link))
                            [:td.name :a] (html/do->
                                           (html/content name)
                                           (html/set-attr :href self-link))
                            [:td.created_at] (html/content (str (java.util.Date. created_at)))
                            [:td.updated_at] (html/content (str (java.util.Date. updated_at)))
                            [:td.admin] (html/content (if admin "Admin" "User"))
                            [:td.ghost :form] (html/do->
                                               (html/set-attr :name ghost-form-name)
                                               (html/set-attr :id ghost-form-name)
                                               (html/set-attr :method "POST")
                                               (html/set-attr :action ghost-link))
                            )))))

(defresource admin-accounts-list
  :available-media-types ["text/html"]
  :authorized? (fn [ctx]
                 (friend/identity (get ctx :request)))
  :handle-unauthorized (fn [ctx]
                         (h/location-flash "/login"
                                           "Please login"))
  :allowed? (fn [ctx]
                 (let [slug (get-in ctx [:request :params :slug])]
                   (friend/authorized? [:admin] (friend/identity (get ctx :request)))))
  :handle-forbidden (fn [ctx]
                      (h/location-flash "/login"
                                        "Not allowed"))
  :handle-ok (fn [ctx]
               {:accounts (for [account (accounts/list-accounts (h/db ctx))]
                            (-> account
                                accounts-resources/with-account-links
                                (assoc-in [:links :ghost]
                                          {:rel "ghost"
                                           :uri (str "/admin/accounts/ghost/" (:slug account) "/ghost")})))
                :links {:home {:uri "/admin"
                               :rel "home"}
                        :accounts {:uri "/admin/accounts"
                                   :rel "accounts"}}})
  :as-response (l/as-template-response admin-accounts-list-layout))

(def admin-index-html (html/html-resource "templates/accounts/admin/index.html"))

(defn admin-index-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content admin-index-html)
   [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
   [:a.rel-accounts] (let [uri (get-in ctx [:data :links :accounts :uri])]
                       (html/set-attr :href uri))))

(defresource admin-index
  :available-media-types ["text/html"]
  :authorized? (fn [ctx]
                 (friend/identity (get ctx :request)))
  :handle-unauthorized (fn [ctx]
                         (h/location-flash "/login"
                                           "Please login"))
  :allowed? (fn [ctx]
                 (let [slug (get-in ctx [:request :params :slug])]
                   (friend/authorized? [:admin] (friend/identity (get ctx :request)))))
  :handle-forbidden (fn [ctx]
                      (h/location-flash "/login"
                                        "Not allowed"))
  :handle-ok {:links {:home {:uri "/admin"
                             :rel "home"}
                      :accounts {:uri "/admin/accounts"
                                 :rel "accounts"}}}
  :as-response (l/as-template-response admin-index-layout))


(defroutes admin-accounts-routes
  (context "/admin" _
           (ANY "/" _ admin-index)
           (ANY "/accounts" _ admin-accounts-list)))

(ns clj-crud.admin
  (:require [clojure.tools.logging :refer [debug spy]]
            [clojure.edn :as edn]
            [clj-crud.util.layout :as l]
            [clj-crud.util.helpers :as h]
            [clj-crud.common :as c]
            [clj-crud.data.users :as users]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :refer [as-response] :as lib-rep]
            [compojure.core :refer [defroutes ANY GET context]]
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
                            (html/set-attr :href uri)))
          [:a.rel-new-user] (html/set-attr :href (get-in ctx [:data :links :new :uri]))
          [:table#users :tbody [:tr html/first-of-type]]
          (html/clone-for [user (get-in ctx [:data :users])]
                          [:tr] (let [{:keys [id slug name created_at updated_at]} user
                                      edit-link (get-in user [:links :edit :uri])
                                      self-link (get-in user [:links :self :uri])]
                                  (html/transform-content
                                   [:td.id] (html/content (str id))
                                   [:td.slug :a] (html/do->
                                                  (html/content slug)
                                                  (html/set-attr :href self-link))
                                   [:td.name :a] (html/do->
                                                  (html/content name)
                                                  (html/set-attr :href self-link))
                                   [:td.created_at] (html/content (str created_at))
                                   [:td.updated_at] (html/content (str updated_at))
                                   [:td.edit :a] (html/set-attr :href edit-link)
)))))

(defn with-user-links [{:keys [slug] :as user}]
  (assoc user :links {:self {:rel "self"
                             :uri (str "/admin/users/" slug)}
                      :edit {:rel "edit"
                             :uri (str "/admin/users/" slug "/edit")}
                      :delete {:rel "delete"
                               :uri (str "/admin/users/" slug "/delete")}
                      :users {:rel "users"
                              :uri "/admin/users"}}))

(defn with-users-links [users]
  (assoc users :links {:home {:uri "/admin"
                               :rel "home"}
                       :users {:uri "/admin/users"
                               :rel "users"}
                       :new {:uri "/admin/users/new"
                             :rel "new"}}))

(defresource admin-users-list
  :available-media-types ["text/html" "application/edn"]
  :exists? (fn [ctx]
             {:users (map with-user-links (users/users-list (h/db ctx)))})
  :handle-ok (fn [ctx]
               (with-users-links
                 {:main "Hello admin world!"
                  :users (:users ctx)}))
  :as-response (l/as-template-response admin-users-list-layout)
  )

(def admin-users-new-html (html/html-resource "templates/admin/users_new.html"))

(defn admin-users-new-layout [ctx]
  (l/emit c/application-html
          [:#flash] nil
          [:#content] (html/content admin-users-new-html)
          [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
          [:a.rel-users] (let [{:keys [rel uri] :as users} (get-in ctx [:data :links :users])]
                           (html/do->
                            (html/content rel)
                            (html/set-attr :href uri)))
          [:a.rel-user] (let [{:keys [rel uri]} (get-in ctx [:data :user :links :self])]
                          (html/do->
                           (html/content "user")
                           (html/set-attr :href uri)))
          [:div.user-panel]
          (let [{:keys [name] :as user} (get-in ctx [:data :user])
                new-link (get-in ctx [:data :links :new :uri])]
            (html/transform-content
             [:form] (html/do->
                      (html/set-attr :method "POST")
                      (html/set-attr :action new-link))
             [:div#name] (l/maybe-error (get-in user [:errors :name]))
             [:div#name :input] (html/set-attr :value name)
             ))))

(defresource admin-users-new
  :allowed-methods [:get :post]
  :available-media-types ["text/html"]
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])
                 name (get params :name)
                 errors (reduce merge {}
                                [(when (zero? (count name))
                                   [:name "Name can not be empty"])])
                 slug (users/slugify name)
                 create-user {:slug slug
                              :name name}]
             (if (seq errors)
               {:user {:errors errors}}
               (let [res (users/create-user (h/db ctx) create-user)]
                 (if-let [errors (:errors res)]
                   {:user (merge create-user
                                 res)}
                   {:user (with-user-links res)})))))
  :post-redirect? (fn [ctx]
                    (not (get-in ctx [:user :errors])))
  :new? false ;; 201 created is useless here, want to redirect html flow
  :respond-with-entity? true
  :handle-see-other (fn [ctx]
                      (h/location-flash (get-in ctx [:user :links :self :uri])
                                        "User created"))
  :handle-ok (fn [ctx]
               (with-users-links
                 {:user (:user ctx)}))
  :as-response (l/as-template-response admin-users-new-layout)
  )



(def admin-user-html (html/html-resource "templates/admin/user.html"))

(defn admin-user-layout [ctx]
  (l/emit c/application-html
          [:#flash] (when-let [flash (get-in ctx [:request :flash])]
                      (html/content flash))
          [:#content] (html/content admin-user-html)
          [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
          [:a.rel-users] (let [{:keys [rel uri] :as users} (get-in ctx [:data :links :users])]
                           (html/do->
                            (html/content rel)
                            (html/set-attr :href uri)))
          [:a.rel-edit] (let [{:keys [rel uri]} (get-in ctx [:data :user :links :edit])]
                          (html/set-attr :href uri))
          [:form#delete-form] (let [{:keys [rel uri]} (get-in ctx [:data :user :links :delete])]
                                (html/do->
                                 (html/set-attr :method "POST")
                                 (html/set-attr :action uri)))
          [:div.user-panel]
          (let [user (get-in ctx [:data :user])
                {:keys [id slug name created_at updated_at]} user
                self-link (get-in user [:links :self :uri])]
            (html/transform-content
             [:p#id] (html/content (str id))
             [:p#slug :a] (html/do->
                            (html/content slug)
                            (html/set-attr :href self-link))
             [:p#name :a] (html/do->
                                (html/content name)
                                (html/set-attr :href self-link))
             [:p#created_at] (html/content (str created_at))
             [:p#updated_at] (html/content (str updated_at))
             ))))

(def admin-user-edit-html (html/html-resource "templates/admin/user_edit.html"))

(defn admin-user-edit-layout [ctx]
  (l/emit c/application-html
          [:#flash] nil
          [:#content] (html/content admin-user-edit-html)
          [:a.rel-home] (html/set-attr :href (get-in ctx [:data :links :home :uri]))
          [:a.rel-users] (let [{:keys [rel uri] :as users} (get-in ctx [:data :links :users])]
                           (html/do->
                            (html/content rel)
                            (html/set-attr :href uri)))
          [:a.rel-user] (let [{:keys [rel uri]} (get-in ctx [:data :user :links :self])]
                          (html/set-attr :href uri))
          [:div.user-panel]
          (let [user (get-in ctx [:data :user])
                {:keys [id slug name created_at updated_at]} user
                edit-link (get-in user [:links :edit :uri])
                self-link (get-in user [:links :self :uri])]
            (html/transform-content
             [:form] (html/do->
                      (html/set-attr :method "POST")
                      (html/set-attr :action edit-link))
             [:p#id] (html/content (str id))
             [:p#slug :a] (html/do->
                            (html/content slug)
                            (html/set-attr :href self-link))
             [:div#name] (l/maybe-error (get-in user [:errors :name]))
             [:div#name :input] (html/set-attr :value name)
             [:p#created_at] (html/content (str created_at))
             [:p#updated_at] (html/content (str updated_at))
             ))))

(defresource admin-user
  :allowed-methods [:get :post]
  :available-media-types ["text/html" "application/edn"]
  :exists? (fn [ctx]
             (let [slug (get-in ctx [:request :route-params :slug])]
               (when-let [user (users/get-user (h/db ctx) slug)]
                 {:user (with-user-links user)})))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])
                 errors (reduce merge {}
                                [(when-not (contains? params :name)
                                   [:name "Must have name attr"])
                                 (when (zero? (count (get params :name)))
                                   [:name "Name can not be empty"])])
                 user-update {:slug (:slug params)
                              :name (:name params)}]
             (when-not (seq errors)
               (users/update-user (h/db ctx) user-update))
             {:user (merge user-update
                           (when (seq errors)
                             {:errors errors}))}))
  :post-redirect? (fn [ctx]
                    (not (get-in ctx [:user :errors])))
  :handle-see-other (fn [ctx]
                      (h/location-flash (get-in ctx [:user :links :self :uri])
                                        "User updated"))
  :new? false
  :respond-with-entity? true
  :handle-ok (fn [ctx]
               {:user (:user ctx)
                :links {:home {:rel "home"
                               :uri "/admin"}
                        :users {:rel "users"
                                :uri "/admin/users"}}})
  :as-response (l/as-template-response
                (fn [ctx]
                  (if (h/edit? ctx)
                    (admin-user-edit-layout ctx)
                    (admin-user-layout ctx)))))

(defresource admin-user-delete
  :allowed-methods [:post]
  :available-media-types ["text/html"]
  :exists? (fn [ctx]
             (let [slug (get-in ctx [:request :route-params :slug])]
               (when-let [user (users/get-user (h/db ctx) slug)]
                 {:user (with-user-links user)})))
  :post! (fn [ctx]
           (let [slug (get-in ctx [:request :route-params :slug])]
             (users/delete-user (h/db ctx) slug)))
  :post-redirect? true
  :handle-see-other (fn [ctx]
                      (h/location-flash (get-in ctx [:user :links :users :uri])
                                        "User deleted"))
  :as-response (l/as-template-response nil))


(defroutes admin-routes
  (context "/admin" _
           (ANY "/" _ (fn [req]
                         (admin-index req)))
           (context "/users" _
                    (ANY "/" _ admin-users-list)
                    (ANY "/new" _ admin-users-new)
                    (context "/:slug" _
                             (ANY "/" _ admin-user)
                             (ANY "/edit" _ admin-user)
                             (ANY "/delete" _ admin-user-delete)))))

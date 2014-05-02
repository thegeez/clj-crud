(ns clj-crud.accounts
  (:require [clojure.tools.logging :refer [debug spy]]
            [clj-crud.system.email :as email]
            [clj-crud.util.layout :as l]
            [clj-crud.util.helpers :as h]
            [clj-crud.common :as c]
            [clj-crud.data.accounts :as accounts]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :as lib-rep]
            [compojure.core :refer [defroutes ANY GET context]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [cemerick.friend.workflows :as workflows]))

(defn with-account-links [{:keys [slug] :as account}]
  (assoc account :links {:self {:rel "self"
                                :uri (str "/profile/" slug)}
                         :todos {:rel "todos"
                                 :uri (str "/todos/" slug)}
                         :edit {:rel "edit"
                                :uri (str "/profile/" slug "/edit")}
                         :delete {:rel "delete"
                                  :uri (str "/profile/" slug "/delete")}}))

(def signup-html (html/html-resource "templates/accounts/signup.html"))

(defn signup-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content signup-html)
   [:form#account-form] (html/do->
                         (html/set-attr :method "POST")
                         (html/set-attr :action "/signup"))
   [:div.account-panel]
   (let [{:keys [name email password password-repeat] :as account} (get-in ctx [:data :account])]
     (html/transform-content
      [:div#name] (l/maybe-error (get-in account [:errors :name]))
      [:div#name :input] (html/set-attr :value name)
      [:div#email] (l/maybe-error (get-in account [:errors :email]))
      [:div#email :input] (html/set-attr :value email)
      [:div#password] (l/maybe-error (get-in account [:errors :password]))
      [:div#password-repeat] (l/maybe-error (get-in account [:errors :password-repeat]))))))

(defresource signup
  :allowed-methods [:get :post]
  :available-media-types ["text/html"]
  :post! (fn [ctx]
           (let [{:keys [name email password password-repeat] :as params} (get-in ctx [:request :params])
                 errors (reduce merge {}
                                [(when (zero? (count name))
                                   [:name "Name can not be empty"])
                                 (when-not (accounts/valid-email? email)
                                   [:email "Invalid email"])
                                 (when (zero? (count password))
                                   [:password "Password can not be empty"])
                                 (when (not= password password-repeat)
                                   (let [msg "Passwords do not match"]
                                     {:password msg
                                      :password-repeat msg}))])
                 slug (accounts/slugify name)
                 create-account {:slug slug
                                 :name name
                                 :email email
                                 :password password}]
             (if (seq errors)
               {:account (merge create-account
                                {:errors errors})}
               (let [res (accounts/create-account (h/db ctx) create-account)]
                 (if-let [errors (:errors res)]
                   {:account (merge create-account
                                    res)}
                   {:account res})))))
  :post-redirect? (fn [ctx]
                    (not (get-in ctx [:account :errors])))
  :new? false ;; 201 created is useless here, want to redirect html flow
  :respond-with-entity? true
  :handle-see-other (fn [ctx]
                      (-> (h/location-flash (str "/profile/" (get-in ctx [:account :slug]))
                                            "Account created")
                          (friend/merge-authentication
                           (workflows/make-auth ((accounts/lookup-friend-identity (h/db ctx))
                                                 (get-in ctx [:account :name]))))))
  :handle-ok (fn [ctx]
               {:account (:account ctx)})
  :as-response (l/as-template-response signup-layout))

(def login-html (html/html-resource "templates/accounts/login.html"))

(defn login-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content login-html)
   [:form#login-form] (html/do->
                       (html/set-attr :method "POST")
                       (html/set-attr :action "/login"))
   [:div.login-panel]
   (let [username (get-in ctx [:request :params :username])
         failed (when (get-in ctx [:request :params :login_failed])
                  "Login failed")]
          (html/transform-content
           [:div#username] (l/maybe-error failed)
           [:div#username :input] (html/set-attr :value username)
           [:div#password] (l/maybe-error failed)
))))

(defresource login
  :allowed-methods [:get]
  :available-media-types ["text/html"]
  :as-response (fn [d ctx]
                 (if-let [auth (friend/current-authentication (:request ctx))]
                   ;; succesful logins get redirected to /login
                   (let [go-to (if (contains? (:roles auth) :admin)
                                 "/admin"
                                 (str "/profile/" (:slug auth)))]
                     {:headers {"Location" go-to}
                      :status 303
                      :flash (get-in ctx [:request :flash])})
                   ((l/as-template-response login-layout) d ctx))))

(defn logout [req]
  {:headers {"Location" "/login"}
   :flash "You are logged out"
   :status 303
   :session {::friend/identity nil}})

(def forgot-password-html (html/html-resource "templates/accounts/forgot_password.html"))

(defn forgot-password-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content forgot-password-html)
   [:form#forgot-password-form] (html/do->
                                 (html/set-attr :method "POST")
                                 (html/set-attr :action "/forgot-password"))
   [:div.forgot-password-panel]
   (let [{:keys [email] :as account} (get-in ctx [:data :account])]
          (html/transform-content
           [:div#email] (l/maybe-error (get-in account [:errors :email]))
           [:div#email :input] (html/set-attr :value email)))))

(defresource forgot-password
  :allowed-methods [:get :post]
  :available-media-types ["text/html"]
  :post! (fn [ctx]
           (let [email (get-in ctx [:request :params :email])
                 errors (reduce merge {}
                                [(when-not (accounts/valid-email? email)
                                   [:email "Invalid email"])])
                 account {:email email}]
             (if (seq errors)
               {:account (merge account {:errors errors})}
               (let [res (accounts/forgot-password (h/db ctx) email)]
                 (if-let [errors (:errors res)]
                   {:account (merge account
                                    res)}
                   (let [emailer (get-in ctx [:request :emailer])]
                     (email/send-email emailer email (str (h/home-uri ctx) "/reset-password/" (:reset_token res)))
                     {:account res}))))))
  :post-redirect? (fn [ctx]
                    (not (get-in ctx [:account :errors])))
  :new? false ;; 201 created is useless here, want to redirect html flow
  :respond-with-entity? true
  :handle-see-other (fn [ctx]
                      (h/location-flash "/forgot-password"
                                        (str "Check your email for password reset instructions" 
                                             "For dev purposes, the link is: " @email/testing-last-sent-email)))
  :handle-ok (fn [ctx]
               {:account (:account ctx)})
  :as-response (l/as-template-response forgot-password-layout))

(def reset-password-html (html/html-resource "templates/accounts/reset_password.html"))

(defn reset-password-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content reset-password-html)
   [:form#reset-password-form] (html/do->
                                 (html/set-attr :method "POST")
                                 (html/set-attr :action
                                                (str "/reset-password/" (get-in ctx [:request :params :reset_token]))))
   [:div.reset-password-panel]
   (let [{:keys [password password-repeat] :as account} (get-in ctx [:data :account])]
          (html/transform-content
           [:div#password] (l/maybe-error (get-in account [:errors :password]))
           [:div#password-repeat] (l/maybe-error (get-in account [:errors :password-repeat]))))))

(defresource reset-password
  :allowed-methods [:get :post]
  :available-media-types ["text/html"]
  :post! (fn [ctx]
           (let [{:keys [reset_token password password-repeat]} (get-in ctx [:request :params])
                 errors (reduce merge {}
                                [(when (zero? (count password))
                                   [:password "Password can not be empty"])
                                 (when (not= password password-repeat)
                                   (let [msg "Passwords do not match"]
                                     {:password msg
                                      :password-repeat msg}))])
                 account {:password password
                          :password-repeat password-repeat}]
             (if (seq errors)
               {:account (merge account {:errors errors})}
               (let [res (accounts/reset-password (h/db ctx) reset_token password)]
                 (if-let [errors (:errors res)]
                   {:account (merge account
                                    res)}
                   {:account res})))))
  :post-redirect? (fn [ctx]
                    (not (get-in ctx [:account :errors])))
  :new? false ;; 201 created is useless here, want to redirect html flow
  :respond-with-entity? true
  :handle-see-other (fn [ctx]
                      (h/location-flash "/login"
                                        "Login with your new password"))
  :handle-ok (fn [ctx]
               {:account (:account ctx)})
  :as-response (l/as-template-response reset-password-layout))

(def profile-html (html/html-resource "templates/accounts/profile.html"))

(defn profile-layout [ctx]
  (let [account (get-in ctx [:data :account])]
    (c/emit-application
           ctx
           [:#content] (html/content profile-html)
           [:h3] (html/append (:name account))
           [:a.rel-edit] (html/set-attr :href (get-in account [:links :edit :uri]))
           [:form#delete-form] (html/do->
                                (html/set-attr :method "POST")
                                (html/set-attr :action (get-in account [:links :delete :uri])))
           [:div.account-panel]
           (let [{:keys [id slug name email created_at updated_at] :as account} (get-in ctx [:data :account])]
             (html/transform-content
              [:p#id] (html/content (str id))
              [:p#slug] (html/content slug)
              [:p#name] (html/content name)
              [:p#email] (html/content email)
              [:p#created_at] (html/content (str (java.util.Date. created_at)))
              [:p#updated_at] (html/content (str (java.util.Date. updated_at)))
              )))))

(def profile-edit-html (html/html-resource "templates/accounts/profile_edit.html"))

(defn profile-edit-layout [ctx]
  (let [{:keys [id slug name email created_at updated_at] :as account} (get-in ctx [:data :account])]
    (c/emit-application
     ctx
     [:#content] (html/content profile-edit-html)
     [:h3] (html/append name)
     [:div.account-panel]
     (let [edit-link (get-in account [:links :edit :uri])
           self-link (get-in account [:links :self :uri])]
       (html/transform-content
        [:form] (html/do->
                 (html/set-attr :method "POST")
                 (html/set-attr :action edit-link))
        [:p#id] (html/content (str id))
        [:p#slug :a] (html/do->
                      (html/content slug)
                      (html/set-attr :href self-link))
        [:div#name] (l/maybe-error (get-in account [:errors :name]))
        [:div#name :input] (html/set-attr :value name)
        [:p#email] (html/content email)
        [:a.rel-button-cancel] (html/set-attr :href self-link)
        )))))


(defresource profile
  :allowed-methods [:get :post]
  :available-media-types ["text/html"]
  :authorized? (fn [ctx]
                 (friend/identity (get ctx :request)))
  :handle-unauthorized (fn [ctx]
                         (h/location-flash "/login"
                                           "Please login"))
  :allowed? (fn [ctx]
                 (let [slug (get-in ctx [:request :params :slug])]
                   (friend/authorized? [(keyword slug)] (friend/identity (get ctx :request)))))
  :handle-forbidden (fn [ctx]
                      (h/location-flash "/login"
                                        "Not allowed"))
  :exists? (fn [ctx]
             (let [slug (get-in ctx [:request :params :slug])]
               (when-let [account (accounts/get-account (h/db ctx) slug)]
                 {:account (with-account-links account)})))
  :post! (fn [ctx]
           (let [params (get-in ctx [:request :params])
                 errors (reduce merge {}
                                [(when-not (contains? params :name)
                                   [:name "Must have name attr"])
                                 (when (zero? (count (get params :name)))
                                   [:name "Name can not be empty"])])
                 account-update {:slug (:slug params)
                                 :name (:name params)}]
             (when-not (seq errors)
               (accounts/update-account (h/db ctx) account-update))
             {:account (merge account-update
                              (when (seq errors)
                                {:errors errors}))}))
  :post-redirect? (fn [ctx]
                    (not (get-in ctx [:account :errors])))
  :handle-see-other (fn [ctx]
                      (h/location-flash (get-in ctx [:account :links :self :uri])
                                        "Profile updated"))
  :new? false
  :respond-with-entity? true

  :handle-ok (fn [ctx]
               {:account (:account ctx)})
  :as-response (l/as-template-response
                (fn [ctx]
                  (if (h/edit? ctx)
                    (profile-edit-layout ctx)
                    (profile-layout ctx)))))

(defresource profile-delete
  :allowed-methods [:post]
  :available-media-types ["text/html"]
  :authorized? (fn [ctx]
                 (friend/identity (get ctx :request)))
  :handle-unauthorized (fn [ctx]
                         (h/location-flash "/login"
                                           "Please login"))
  :allowed? (fn [ctx]
                 (let [slug (get-in ctx [:request :params :slug])]
                   (friend/authorized? [(keyword slug)] (friend/identity (get ctx :request)))))
  :handle-forbidden (fn [ctx]
                      (h/location-flash "/login"
                                        "Not allowed"))
  :exists? (fn [ctx]
             (let [slug (get-in ctx [:request :route-params :slug])]
               (when-let [account (accounts/get-account (h/db ctx) slug)]
                 {:account account})))
  :post! (fn [ctx]
           (let [slug (get-in ctx [:request :route-params :slug])]
             (accounts/delete-account (h/db ctx) slug)))
  :post-redirect? true
  :handle-see-other (fn [ctx]
                      (h/location-flash "/"
                                        "User deleted"))
  :as-response (l/as-template-response nil))

(defroutes accounts-routes
  (ANY "/signup" _ signup)
  (ANY "/login" _ login)
  (ANY "/logout" _ logout)
  (ANY "/forgot-password" _ forgot-password)
  (ANY "/reset-password/:reset_token" _ reset-password)
  (context "/profile/:slug" _
           (ANY "/" _ profile)
           (ANY "/edit" _ profile)
           (ANY "/delete" _ profile-delete)))

(ns clj-crud.accounts
  (:require [clojure.tools.logging :refer [debug spy]]
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
                                :uri (str "/chains/" slug)}
                         ;; :edit {:rel "edit"
                         ;;        :uri (str "/accounts/" slug "/edit")}
                         ;; :delete {:rel "delete"
                         ;;          :uri (str "/accounts/" slug "/delete")}
                         }))

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
                                 (when (or (zero? (count email))
                                           (not (some #{\@} email)))
                                   [:email "Invalid email"])
                                 (when (zero? (count password))
                                   [:password "Password can not be empty"])
                                 (when (not= password password-repeat)
                                   (let [msg "Passwords do not match"]
                                     {:password msg
                                      :password-repeat msg}))])
                 _ (debug "Params:" params "errors: " errors)
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
                   {:account (with-account-links res)})))))
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
                 (if-let [identity (friend/identity (:request ctx))]
                   ;; succesful logins get redirected to /login, bring
                   ;; user to his own page from here
                   {:headers {"Location" (str "/profile/" (:current identity))}
                    :status 303}
                   ((l/as-template-response login-layout) d ctx))))

(defn logout [req]
  (friend/logout* {:headers {"Location" "/login"}
                   :flash "You are logged out"
                   :status 303}))

(defroutes accounts-routes
  (ANY "/signup" _ signup)
  (ANY "/login" _ login)
  (ANY "/logout" _ logout))

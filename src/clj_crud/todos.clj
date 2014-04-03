(ns clj-crud.todos
  (:require [clojure.tools.logging :refer [debug spy]]
            [clj-crud.util.helpers :as h]
            [clj-crud.util.layout :as l]
            [clj-crud.common :as c]
            [clj-crud.data.accounts :as accounts]
            [liberator.core :refer [resource defresource]]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def todos-page-html (html/html-resource "templates/todos.html"))

(defn todos-page-layout [ctx]
  (c/emit-application
   ctx
   [:head] (html/after (html/select todos-page-html [:head]))
   [:#content] (html/substitute (html/select todos-page-html [:#content]))))

(defresource todos-page
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
                 {:account account})))
  :handle-ok (fn [ctx]
               (debug "hello here" (:account ctx))
               {:account (:account ctx)})
  :as-response (l/as-template-response todos-page-layout))



(defroutes todos-routes
  (ANY "/todos/:slug" _ todos-page))

(ns clj-crud.todos
  (:require [clojure.tools.logging :refer [debug spy]]
            [clojure.edn :as edn]
            [clj-crud.util.helpers :as h]
            [clj-crud.util.layout :as l]
            [clj-crud.common :as c]
            [clj-crud.data.accounts :as accounts]
            [clj-crud.data.todos :as todos]
            [liberator.core :refer [resource defresource]]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]
            [ring.util.io :as ring-io])
  (:import [java.io PipedInputStream PipedOutputStream]))

(def todos-page-html (html/html-resource "templates/todos.html"))

(defn todos-page-layout [ctx]
  (c/emit-application
   ctx
   [:head html/last-child] (html/after (html/select todos-page-html [:head html/first-child]))
   [:#content] (html/substitute (html/select todos-page-html [:#content]))
   [:#csrf-token] (html/set-attr :value (get-in ctx [:request :session "__anti-forgery-token"]))))

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
               {:account (:account ctx)})
  :as-response (l/as-template-response todos-page-layout))

(defresource todos
  :allowed-methods [:get :post :put :delete]
  :available-media-types ["application/edn"]
  :authorized? (fn [ctx]
                 (friend/identity (get ctx :request)))
  :allowed? (fn [ctx]
              (let [slug (get-in ctx [:request :params :slug])]
                (when (friend/authorized? [(keyword slug)] (friend/identity (get ctx :request)))
                  {:account (accounts/get-account (h/db ctx) slug)})))
  :post! (fn [ctx]
           (let [text (-> (get-in ctx [:request :body])
                          slurp
                          edn/read-string
                          :text)
                 id (todos/create-todo (h/db ctx)
                                       (:account ctx)
                                       {:text text})]
             {:id id}))
  :new? (fn [ctx]
          (= (get-in ctx [:request :request-method]) :post))
  :handle-created (fn [ctx]
                    {:id (:id ctx)})
  :put! (fn [ctx]
          (let [todo (-> (get-in ctx [:request :body])
                         slurp
                         edn/read-string)
                todo (into {} (for [[k v] (select-keys todo [:id :text :completed])
                                    :when (not (nil? v))]
                                (if (= k :completed)
                                  [k (if v 1 0)]
                                  [k v])))]
            (todos/update-todo (h/db ctx)
                               (:account ctx)
                               todo)))
  :delete! (fn [ctx]
             (let [todo-id (-> (get-in ctx [:request :body])
                               slurp
                               edn/read-string
                               :id)]
               (todos/delete-todo (h/db ctx)
                                  (:account ctx)
                                  todo-id)))
  :handle-ok (fn [ctx]
               {:todos (todos/get-todos (h/db ctx)
                                        (:account ctx))})
  :as-response (l/as-template-response nil))

(defn events [req]
  {:async :http
   :reactor (fn [emit]
              (emit {:type :head
                     :status 200
                     :headers {"Content-Type" "text/event-stream"
                               "Cache-Control" "no-cache"
                               "Connection" "keep-alive"}})
              (emit {:type :chunk
                     :data "data: \"hello world\"\n\n"})
              (future
                (Thread/sleep 10000)
                (emit {:type :chunk
                       :data "data: \"22222222\"\n\n"})))})

(defroutes todos-routes
    (ANY "/todos/:slug" _ todos-page)
    (ANY "/todos/:slug/todos" _ todos)
    (ANY "/todos/:slug/events" _ events))

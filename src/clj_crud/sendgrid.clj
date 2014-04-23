(ns clj-crud.sendgrid
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clj-crud.common :as c]
            [clj-crud.util.helpers :as h]
            [clj-crud.util.layout :as l]
            [clj-crud.data.accounts :as accounts]
            [clj-crud.data.todos :as todos]
            [liberator.core :refer [resource defresource]]
            [compojure.core :refer [defroutes ANY GET context]]))

;; handle inbound webhook from sendgrid

(defresource inboundmail
  :allowed-methods [:post]
  :available-media-types ["application/json"]
  :post! (fn [ctx]
           (info "mail ctx: " ctx)
           (let [;; get this from mail
                 account (accounts/get-account (h/db ctx) "user1")
                 text (pr-str (slurp (get-in ctx [:request :body])))]
             (todos/create-todo (h/db ctx)
                                account
                                text)))
  :post-redirect? false
  :new? false
  :respond-with-entity? true
  :handle-ok (fn [ctx]
               "OK")
  :as-response (l/as-template-response nil))

(defroutes sendgrid-routes
  (ANY "/inboundmail" _ inboundmail))

(ns clj-crud.chains
  (:require [clojure.tools.logging :refer [debug spy]]
            [clj-crud.util.layout :as l]
            [liberator.core :refer [resource defresource]]
            [liberator.representation :refer [as-response] :as lib-rep]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def application-html (html/html-resource "templates/application.html"))

(def main-page-html (html/html-resource "templates/main.html"))

(defn main-page-layout [ctx]
  (l/emit application-html
          [:#flash] (html/content (str (friend/identity (:request ctx))))
          [:#content] (html/content main-page-html)))

(def main-page
     (resource
      :as-response (fn [d ctx]
                     (debug "d" d "ctx" ctx)
                     (as-response d ctx))
      :available-media-types ["text/html" "application/json"]
      :handle-ok {:links {:home {:href "/"
                                 :rel "home"}
                          :chains {:href "/list"}}}))

#_(def profile-page
     (resource
      :available-media-types ["text/html"]
      :authorized? (fn [{req :request}]
                     (let [roles [:role1 :role2]]
                       (or (friend/authorized? roles
                                               (friend/identity req))
                           (friend/throw-unauthorized (identity req)
                                                     {
                                                      ;;      ::required-roles roles
                                                      }))))
      :handle-ok (partial l/template main-page-layout)))

#_(def login-page
     (resource
      :available-media-types ["text/html"]
      :handle-ok (fn [ctx]
                   (spy (-> {:body (l/template login-page-layout
                                           ctx)}
                        lib-rep/ring-response
                        (assoc-in [:response :session ::friend/unauthorized-uri]
                                  ;; referer - host
                                  (subs (get-in ctx [:request :headers "referer"])

                                        ;; TODO use h/root-uri or
                                 ;; similar
                                        ;; check what the :context
                                        ;; request means in friend
                                        ;; (assumes compojure?)
                                        (+ (count (name (get-in ctx [:request :scheme])))
                                           3 ;; ://
                                           (count (get-in ctx [:request :server-name]))
                                           1 ;; :
                                           (count (str (get-in ctx [:request :server-port])))))))))))

(defroutes chains-routes
  (ANY "/" [] main-page)
  #_(ANY "/profile" [] profile-page)
  #_(ANY "/login" [] login-page))

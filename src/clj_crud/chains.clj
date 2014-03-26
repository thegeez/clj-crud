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
      :available-media-types ["text/html"]
      :handle-ok (str "Hello to chains page")))

(defroutes chains-routes
  (ANY "/chains/*" [] main-page))

(ns clj-crud.home
  (:require [clojure.tools.logging :refer [debug spy]]
            [clj-crud.util.layout :as l]
            [clj-crud.common :as c]
            [liberator.core :refer [resource defresource]]
            [compojure.core :refer [defroutes ANY GET]]
            [net.cgrand.enlive-html :as html]
            [cemerick.friend :as friend]))

(def main-page-html (html/html-resource "templates/main.html"))

(defn main-page-layout [ctx]
  (c/emit-application
   ctx
   [:#content] (html/content main-page-html)))

(defresource main-page
  :available-media-types ["text/html"]
  :handle-ok {}
  :as-response (l/as-template-response main-page-layout))

(defroutes home-routes
  (ANY "/" _ main-page))

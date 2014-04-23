(ns clj-crud.sendgrid-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [clojure.edn :as edn]
            [clj-crud.test-core :as tc]
            [peridot.core :refer :all]
            [kerodon.core :as k]
            [kerodon.test :refer :all]))

(deftest sendgrid-test
  (-> (session (tc/reuse-handler))
      (content-type "multipart/form-data")
      (request "/inboundmail"
               :request-method :post
               :body "some-data"
               :headers {}
               )
      (has (status? 200))))

(ns clj-crud.tea-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [clojure.edn :as edn]
            [clj-crud.test-core :as tc]
            [peridot.core :as p]
            [kerodon.core :refer :all]
            [kerodon.test :refer :all]))

(deftest edn-home-test
  (let [home (-> (p/session (tc/reuse-handler))
                 (p/header "Accept" "application/edn")
                 (p/request "/tea")
                 :response
                 :body
                 edn/read-string)]
    (is (map? home))
    (is (= (set (keys (:links home))) #{:home :order}))
    (is (.contains (get-in home [:links :home :uri]) "http://localhost"))))

(deftest html-home-test
  (-> (session (tc/reuse-handler))
      (visit "/tea")
      (within [:div.container :footer :p]
              (has (text? "clj-crud")))))

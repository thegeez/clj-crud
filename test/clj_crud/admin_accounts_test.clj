(ns clj-crud.admin-accounts-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [clj-crud.system.email :as email]
            [clj-crud.test-core :as tc]
            [peridot.core :as p]
            [kerodon.core :refer :all]
            [kerodon.test :refer :all]
            [net.cgrand.enlive-html :as html]))

(deftest basic-flow-test
  (-> (session (tc/reuse-handler))
      (visit "/admin")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Please login")))
      (fill-in "Name" "User 1")
      (fill-in "Password" "user1")
      (press "Login")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (follow-redirect)
      ((fn [res]
         (is (= "/profile/user1" (get-in res [:request :uri])))
         res))
      (visit "/admin")
      (follow-redirect)
      (follow-redirect)
      (within [:div#flash]
              (has (text? "Not allowed")))
))

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
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (follow-redirect)
      ((fn [res]
         (is (= "/profile/user1" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Not allowed")))
      (visit "/logout")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "You are logged out")))
      (visit "/profile/user1")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Please login")))
      (visit "/admin")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Please login")))
      (fill-in "Name" "Dev Admin")
      (fill-in "Password" "dev-admin")
      (press "Login")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      ((fn [res]
         (is (= "/admin" (get-in res [:request :uri])))
         res))
      (within [:ul.nav [:li html/last-of-type]]
              (has (attr? [:a] :href "/admin"))
              (has (text? "Admin")))
      (visit "/profile/user1")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/admin")
      (within [:#flash]
              (has (text? "Not allowed")))
      (visit "/logout")
      (follow-redirect)
      (tc/at? "/login")
      (within [:#flash]
              (has (text? "You are logged out")))
      (visit "/admin")
      (follow-redirect)
      (tc/at? "/login")
      (within [:#flash]
              (has (text? "Please login")))

)
)

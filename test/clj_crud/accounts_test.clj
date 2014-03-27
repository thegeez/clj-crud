(ns clj-crud.accounts-test
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
      (visit "/profile/accountone")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Please login")))
      (fill-in "Name" "Account One")
      (press "Login")
      (follow-redirect)
      (within [:div#username :span.help-block]
              (has (text? "Login failed")))
      (within [:div#password :span.help-block]
              (has (text? "Login failed")))
      (follow "Sign Up")
      (fill-in "Name" "Account One")
      (fill-in "Email" "one@account.example.com")
      (fill-in "Password" "a")
      (press "Sign Up")
      (within [:div#password :span.help-block]
              (has (text? "Passwords do not match")))
      (within [:div#password-repeat :span.help-block]
              (has (text? "Passwords do not match")))
      (fill-in "Password" "a")
      (fill-in "Password (repeat)" "a")
      (press "Sign Up")
      (follow-redirect)
      ((fn [res]
         (is (= "/profile/accountone" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Account created")))
      ;; login
      (follow "Logout")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "You are logged out")))
      (visit "/profile/accountone")
      (follow-redirect)
      ((fn [res]
         (is (= "/login" (get-in res [:request :uri])))
         res))
      (within [:div#flash]
              (has (text? "Please login")))
      (follow "Forgot your password?")
      ((fn [res]
         (is (= "/forgot-password" (get-in res [:request :uri])))
         res))
      (fill-in "Email" "the@wrong.email.com")
      (press "Reset password")
      (within [:div#email :span.help-block]
              (has (text? "Email is not known")))
      (fill-in "Email" "one@account.example.com")
      (press "Reset password")
      (follow-redirect)
      (within [:#flash]
              (has (text? "Check your email for password reset instructions")))
      ((fn [res] 
         (let [{:keys [email content]} @email/testing-last-sent-email]
           (is (= email "one@account.example.com"))
           (visit res content))))
      (fill-in "Password" "something")
      (fill-in "Password (repeat)" "different")
      (press "Reset password")
      (within [:div#password :span.help-block]
              (has (text? "Passwords do not match")))
      (within [:div#password-repeat :span.help-block]
              (has (text? "Passwords do not match")))
      (fill-in "Password" "new-password")
      (fill-in "Password (repeat)" "new-password")
      (press "Reset password")
      (follow-redirect)
      (within [:#flash]
              (has (text? "Login with your new password")))
      (fill-in "Name" "Account One")
      (fill-in "Password" "new-password")
      (press "Login")
      (follow-redirect)
      (follow-redirect)
      ((fn [res]
         (is (= "/profile/accountone" (get-in res [:request :uri])))
         res))
      ))

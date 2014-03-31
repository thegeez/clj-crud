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
      (tc/at? "/login")
      (within [:div#flash]
              (has (text? "Please login")))
      (fill-in "Name" "User 1")
      (fill-in "Password" "user1")
      (press "Login")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/profile/user1")
      (visit "/admin")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/profile/user1")
      (within [:div#flash]
              (has (text? "Not allowed")))
      (visit "/logout")
      (follow-redirect)
      (tc/at? "/login")
      (within [:div#flash]
              (has (text? "You are logged out")))
      (visit "/profile/user1")
      (follow-redirect)
      (tc/at? "/login")
      (within [:div#flash]
              (has (text? "Please login")))
      (visit "/admin")
      (follow-redirect)
      (tc/at? "/login")
      (within [:div#flash]
              (has (text? "Please login")))
      (fill-in "Name" "Dev Admin")
      (fill-in "Password" "dev-admin")
      (press "Login")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/admin")
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

(deftest ghosting-test
  (-> (session (tc/reuse-handler))
      (visit "/admin")
      (follow-redirect)
      (tc/at? "/login")
      (within [:div#flash]
              (has (text? "Please login")))
      (fill-in "Name" "Dev Admin")
      (fill-in "Password" "dev-admin")
      (press "Login")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/admin")
      (visit "/admin/accounts")
      (within [:table#accounts :tbody [:tr (html/nth-of-type 2)] :td.name]
              (has (attr? [:a] :href "http://localhost/profile/user1")))
      (visit "/profile/user1")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/admin")
      (within [:#flash]
              (has (text? "Not allowed")))
      (visit "/admin/accounts")
      (within [:table#accounts :tbody [:tr (html/nth-of-type 2)] :td.ghost]
              (has (attr? [:form] :action "http://localhost/admin/accounts/ghost/user1"))
              (press "Ghost"))
      (follow-redirect)
      (tc/at? "/admin/accounts")
      (within [:#flash]
              (has (text? "Now ghosting User 1")))
      (within [:table#accounts :tbody [:tr (html/nth-of-type 2)] :td.ghost]
              (has (attr? [:form] :action "http://localhost/admin/accounts/unghost/user1"))
              (within [:button]
                      (has (text? "Unghost"))))
      (visit "/profile/user1")
      (tc/at? "/profile/user1")
      (visit "/admin/accounts")
      (within [:table#accounts :tbody [:tr (html/nth-of-type 2)] :td.ghost]
              (press "Unghost"))
      (follow-redirect)
      (tc/at? "/admin/accounts")
      (within [:#flash]
              (has (text? "Unghosted User 1")))
      (visit "/profile/user1")
      (follow-redirect)
      (tc/at? "/login")
      (follow-redirect)
      (tc/at? "/admin")
      (within [:#flash]
              (has (text? "Not allowed")))
      (visit "/admin/accounts")
      (within [:table#accounts :tbody [:tr (html/nth-of-type 2)] :td.ghost]
              (has (attr? [:form] :action "http://localhost/admin/accounts/ghost/user1"))
              (within [:button]
                      (has (text? "Ghost"))))
))


(ns clj-crud.admin-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [clojure.edn :as edn]
            [clj-crud.test-core :as tc]
            [peridot.core :as p]
            [kerodon.core :refer :all]
            [kerodon.test :refer :all]
            [net.cgrand.enlive-html :as html]))

(deftest edn-admin-index-test
  (let [home (-> (p/session (tc/reuse-handler))
                 (p/header "Accept" "application/edn")
                 (p/request "/admin")
                 :response
                 :body
                 edn/read-string)]
    (is (map? home))
    (is (= (set (keys (:links home))) #{:home :users}))
    (is (.contains (spy (get-in home [:links :home :uri])) "http://localhost/admin"))))

(deftest html-admin-index-test
  (-> (session (tc/reuse-handler))
      (visit "/admin")
      (has (attr? [:a.rel-users] :href "http://localhost/admin/users"))
      (within [:div.container :footer :p]
              (has (text? "clj-crud")))))

(deftest edn-admin-users-list-test
  (let [data (-> (p/session (tc/reuse-handler))
                  (p/header "Accept" "application/edn")
                  (p/request "/admin/users")
                  :response
                  :body
                  edn/read-string)]
    (is (map? data))
    (is (= (map #(select-keys % [:id :slug :name :links]) (:users data))
           [{:links {:self {:rel "self", :uri "http://localhost/admin/users/user1"},
                     :edit {:rel "edit", :uri "http://localhost/admin/users/user1/edit"}
                     :delete {:rel "delete", :uri "http://localhost/admin/users/user1/delete"}
                     :users {:uri "http://localhost/admin/users", :rel "users"}},
             :name "User 1", :slug "user1", :id 1}
            {:links {:self {:rel "self", :uri "http://localhost/admin/users/user2"},
                     :edit {:rel "edit", :uri "http://localhost/admin/users/user2/edit"}
                     :delete {:rel "delete", :uri "http://localhost/admin/users/user2/delete"}
                     :users {:uri "http://localhost/admin/users", :rel "users"}},
             :name "Second User", :slug "user2", :id 2}]))))

(deftest html-admin-users-list-test
  (-> (session (tc/reuse-handler))
      (visit "/admin/users")
      (has (attr? [:a.rel-users] :href "http://localhost/admin/users"))
      (within [:table#users :tbody [:tr (html/nth-of-type 1)]]
              (within [:td.slug]
                      (has (text? "user1"))
                      (has (attr? [:a] :href "http://localhost/admin/users/user1"))))
      (within [:table#users :tbody [:tr (html/nth-of-type 2)] :td.edit]
              (has (attr? [:a] :href "http://localhost/admin/users/user2/edit")))
      (within [:div.container :footer :p]
              (has (text? "clj-crud")))))

(deftest edn-admin-user-get-test
  (let [data (-> (p/session (tc/reuse-handler))
                  (p/header "Accept" "application/edn")
                  (p/request "/admin/users/user2")
                  :response
                  :body
                  edn/read-string)]
    (debug "Data: " data)
    (is (map? data))
    (is (= (-> (:user data)
               (select-keys [:id :slug :name :links]))
           {:links {:self {:rel "self", :uri "http://localhost/admin/users/user2"},
                    :edit {:rel "edit", :uri "http://localhost/admin/users/user2/edit"}
                    :delete {:rel "delete", :uri "http://localhost/admin/users/user2/delete"}
                    :users {:uri "http://localhost/admin/users", :rel "users"}},
            :name "Second User", :slug "user2", :id 2}))))

(deftest html-admin-user-get-test
  (-> (session (tc/reuse-handler))
      (visit "/admin/users/user1")
      (has (attr? [:a.rel-edit] :href "http://localhost/admin/users/user1/edit"))
      (within [:p#slug]
              (has (text? "user1"))
              (has (attr? [:a] :href "http://localhost/admin/users/user1")))
      (within [:p#name]
              (has (text? "User 1"))
              (has (attr? [:a] :href "http://localhost/admin/users/user1")))))

(deftest html-admin-user-update-name-test
  (-> (session (tc/reuse-handler))
      (visit "/admin/users/user1")
      (has (attr? [:a.rel-edit] :href "http://localhost/admin/users/user1/edit"))
      (within [:p#slug]
              (has (text? "user1"))
              (has (attr? [:a] :href "http://localhost/admin/users/user1")))
      (within [:p#name]
              (has (text? "User 1"))
              (has (attr? [:a] :href "http://localhost/admin/users/user1")))
      (has (missing? [:#flash]))
      (within [:div#name]
              (has (missing? [:span.help-block])))
      ;; edit to fail
      (follow "Edit")
      (has (attr? [:form#user-form] :action "http://localhost/admin/users/user1/edit"))
      (has (attr? [:form#user-form] :method "POST"))
      (fill-in "Name" "")
      (press "Save Changes")
      (has (attr? [:form#user-form] :action "http://localhost/admin/users/user1/edit"))
      (has (attr? [:div#name] :class "has-error form-group"))
      (within [:div#name :span.help-block]
              (has (text? "Name can not be empty")))
      ;;edit to success
      (fill-in "Name" "Name One")
      (press "Save Changes")
      (follow-redirect)
      (has (status? 200))
      (within [:#flash]
              (has (text? "User updated")))
      ;; check change is persisted, and change back for clean slate
      (follow "users")
      (within [:table#users [:tr (html/nth-of-type 1)]]
              (within [:td.name]
                      (has (text? "Name One")))
              (follow "Edit"))
      (fill-in "Name" "User 1")
      (press "Save Changes")
      (follow-redirect)
      (within [:#flash]
              (has (text? "User updated")))
      (within [:p#name]
              (has (text? "User 1")))))

(deftest html-admin-user-new-and-delete-test
  (-> (session (tc/reuse-handler))
      (visit "/admin/users")
      (has (attr? [:a.rel-new-user] :href "http://localhost/admin/users/new"))
      (within [:table#users [:tr (html/nth-of-type 1)]]
              (within [:td.name]
                      (has (text? "User 1"))
                      (has (attr? [:a] :href "http://localhost/admin/users/user1"))))
      ;; edit to fail
      (follow "New user")
      (has (attr? [:form#user-form] :action "http://localhost/admin/users/new"))
      (has (attr? [:form#user-form] :method "POST"))
      (fill-in "Name" "")
      (press "Create User")
      (has (attr? [:form#user-form] :action "http://localhost/admin/users/new"))
      (has (attr? [:div#name] :class "has-error form-group"))
      (within [:div#name :span.help-block]
              (has (text? "Name can not be empty")))
      ;;edit to db fail
      (fill-in "Name" "User 1")
      (press "Create User")
      (has (attr? [:form#user-form] :action "http://localhost/admin/users/new"))
      (has (attr? [:div#name] :class "has-error form-group"))
      (within [:div#name :span.help-block]
              (has (text? "Name already taken")))
      ;; edit to success
      (fill-in "Name" "Name 3")
      (press "Create User")
      (follow-redirect)
      (has (status? 200))
      (within [:#flash]
              (has (text? "User created")))
      ;; check change is persisted, and change back for clean slate
      (follow "users")
      (within [:table#users [:tr (html/nth-of-type 3)]]
              (within [:td.slug]
                      (has (text? "name3")))
              (within [:td.name]
                      (has (text? "Name 3")))
              ;; delete to revert state
              (follow "Name 3"))
      (has (attr? [:form#delete-form] :action "http://localhost/admin/users/name3/delete"))
      (has (attr? [:form#delete-form] :method "POST"))
      (within [:form#delete-form]
              (press "Delete"))
      (follow-redirect)
      (within [:table#users [:tr (html/nth-of-type 2)]]
              (within [:td.slug]
                      (has (text? "user2"))))
      (has (missing? [:table#users [:tr (html/nth-of-type 3)]]))
      (visit "http://localhost/admin/users/name3")
      (has (status? 404))
))



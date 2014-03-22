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
    (is (.contains (spy (get-in home [:links :home :uri])) "http://localhost:80/admin"))))

(deftest html-admin-index-test
  (-> (session (tc/reuse-handler))
      (visit "/admin")
      (has (attr? [:a.rel-users] :href "http://localhost:80/admin/users"))
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
           [{:links {:self {:rel "self", :uri "http://localhost:80/admin/users/user1"},
                     :edit {:rel "edit", :uri "http://localhost:80/admin/users/user1/edit"}},
             :name "User 1", :slug "user1", :id 1}
            {:links {:self {:rel "self", :uri "http://localhost:80/admin/users/user2"},
                     :edit {:rel "edit", :uri "http://localhost:80/admin/users/user2/edit"}},
             :name "Second User", :slug "user2", :id 2}]))))

(deftest html-admin-user-list-test
  (-> (session (tc/reuse-handler))
      (visit "/admin/users")
      (has (attr? [:a.rel-users] :href "http://localhost:80/admin/users"))
      (within [:table#users :tbody [:tr (html/nth-of-type 1)]]
              (within [:td.slug]
                      (has (text? "user1"))
                      (has (attr? [:a] :href "http://localhost:80/admin/users/user1"))))
      (within [:table#users :tbody [:tr (html/nth-of-type 2)] :td.edit]
              (has (attr? [:a] :href "http://localhost:80/admin/users/user2/edit")))
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
           {:links {:self {:rel "self", :uri "http://localhost:80/admin/users/user2"}, 
                    :edit {:rel "edit", :uri "http://localhost:80/admin/users/user2/edit"}}, 
            :name "Second User", :slug "user2", :id 2}))))

(deftest html-admin-user-get-test
  (-> (session (tc/reuse-handler))
      (visit "/admin/users/user1")
      (has (attr? [:a.rel-edit] :href "http://localhost:80/admin/users/user1/edit"))
      (within [:p#slug]
              (has (text? "user1"))
              (has (attr? [:a] :href "http://localhost:80/admin/users/user1")))
      (within [:p#name]
              (has (text? "User 1"))
              (has (attr? [:a] :href "http://localhost:80/admin/users/user1")))))

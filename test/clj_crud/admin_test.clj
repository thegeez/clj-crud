(ns clj-crud.admin-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [clojure.edn :as edn]
            [clj-crud.test-core :as tc]
            [peridot.core :as p]
            [kerodon.core :refer :all]
            [kerodon.test :refer :all]))

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
    (is (= (map #(select-keys % [:id :slug :name]) (:users data))
           [{:id 1 :slug "user1" :name "User 1"}
            {:id 2 :slug "user2" :name "Second User"}]))))

#_(deftest html-admin-user-list-test
  (-> (session (tc/reuse-handler))
      (visit "/admin")
      (has (attr? [:a.rel-users] :href "http://localhost:80/admin/users"))
      (within [:div.container :footer :p]
              (has (text? "clj-crud")))))

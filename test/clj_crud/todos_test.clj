(ns clj-crud.todos-test
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.test :refer :all]
            [clojure.edn :as edn]
            [clj-crud.test-core :as tc]
            [peridot.core :refer :all]
            [kerodon.core :as k]
            [kerodon.test :refer :all]
            [net.cgrand.enlive-html :as html]))

(deftest todos-test
  (-> (session (tc/reuse-handler))
      (request "/todos/user1/todos")
      ((fn [res]
         (debug "RES" res)
         res))
      (has (status? 401))
      (k/visit "/login")
      (k/fill-in "Name" "User 1")
      (k/fill-in "Password" "user1")
      (k/press "Login")
      (follow-redirect)
      (k/visit "/todos/user1")
      ((fn [res]
         (let [csrf-token (-> (html/select (:enlive res) [:#csrf-token])
                              first
                              :attrs
                              :value)]
           (-> res
               (request "/todos/user1/todos")
               (has (status? 200))
               (content-type "application/edn")
               (request "/todos/user1/todos"
                        :request-method :post
                        :body (pr-str {:text "hello"})
                        :headers {"X-CSRF-Token" csrf-token})
               (has (status? 201))
               ((fn [res]
                  (is (.startsWith (get-in res [:response :headers "Content-Type"]) "application/edn"))
                  (is (contains? (edn/read-string (get-in res [:response :body])) :id))
                  res))
               (request "/todos/user1/todos")
               (has (status? 200))
               ((fn [res]
                  (debug "RES parse body" res)
                  (is (= (-> (get-in res [:response :body])
                             edn/read-string
                             :todos
                             first
                             :text)
                         "hello"))
                  res))
               (request "/todos/user1/todos"
                        :request-method :post
                        :body (pr-str {:text "second todo"})
                        :headers {"X-CSRF-Token" csrf-token})
               (has (status? 201))
               (request "/todos/user1/todos"
                        :request-method :post
                        :body (pr-str {:text "third todo"})
                        :headers {"X-CSRF-Token" csrf-token})
               (has (status? 201))
               (request "/todos/user1/todos")
               (has (status? 200))
               ((fn [res]
                  (is (= (map (juxt :text :finished) (-> (get-in res [:response :body]) edn/read-string :todos))
                         [["hello" false] ["second todo" false] ["third todo" false]]))
                  res))
))))))

(ns clj-crud.datascript-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]
            [datascript :as d]))

(enable-console-print!)

(defn inc-age [db name]
  (let [[e a] (first (d/q '[:find ?e ?a
                            :in $ ?n
                            :where
                            [?e :name ?n]
                            [?e :age  ?a]]
                          db name))]
    (println "[e a]" [e a])
    [[:db/add e :age (inc a)] [:db/add e :aka "By dn.fn!"]]))

(deftest hello-world
  (is (= (let [schema {:aka {:cardinality :many}}
               conn   (d/create-conn schema)]
           (println "RES:" (d/transact! conn [{:db/id -1
                                               :name "Maksim"
                                               :age 45
                                               :aka ["Maks Otto von Stirlitz", "Jack Ryan"]}
                                              ]))
           (println "inc RES:" (d/transact! conn [{:db/id -2
                                                   :name "Bruce Wayne"
                                                   :age 35
                                                   :aka ["Batman"]}
                                                  [:dn.fn/call inc-age "Maksim"]]))
           (d/q '{:find [?n ?a]
                  :where [[?e :aka "Maks Otto von Stirlitz"]
                          [?e :name ?n]
                          [?e :age  ?a]]}
                @conn))
         #{["Maksim" 46]})))

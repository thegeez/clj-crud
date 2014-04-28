(ns clj-crud.datascript-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var done)])
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
    [[:db/add e :age (inc a)] [:db/add e :aka "By db.fn!"]]))

(deftest ^:async hello-world
  (is (= (let [schema {:aka {:cardinality :many}}
               conn   (d/create-conn schema)
               seen (atom 0)
               key (d/listen! conn :test (fn [report]
                                           (println "Listen heard report: " report)
                                           (swap! seen inc)
                                           (when (= @seen 2)
                                             (done))))]
           (println "RES:" (d/transact! conn [{:db/id -1
                                               :name "Maksim"
                                               :age 45
                                               :aka ["Maks Otto von Stirlitz", "Jack Ryan"]}
                                              ]))
           (println "inc RES:" (d/transact! conn [{:db/id -2
                                                   :name "Bruce Wayne"
                                                   :age 35
                                                   :aka ["Batman"]}
                                                  [:db.fn/call inc-age "Maksim"]]))
           (d/q '{:find [?n ?a]
                  :where [[?e :aka "Maks Otto von Stirlitz"]
                          [?e :name ?n]
                          [?e :age  ?a]]}
                @conn))
         #{["Maksim" 46]})))

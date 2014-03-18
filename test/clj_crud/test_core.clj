(ns clj-crud.test-core
  (:require [clj-crud.core :as core]
            [com.stuartsierra.component :as component]))

(def test-config {:db-connect-string "jdbc:derby:memory:test_chains;create=true" :port 3333})

(let [s (atom nil)]
  (defn reuse-system []
    (swap! s (fn [system]
               (if system
                 system
                 (-> (core/crud-system test-config)
                     component/start))))))

(defn reuse-handler []
  (get-in (reuse-system) [:ring-handler :app]))

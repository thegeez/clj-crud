(ns clj-crud.test-core
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clj-crud.core :as core]
            [clj-crud.data.users :as users]
            [com.stuartsierra.component :as component]))

(def test-config {:db-connect-string "jdbc:derby:memory:test_chains;create=true"})

(let [s (atom nil)]
  (defn reuse-system []
    (swap! s (fn [system]
               (if system
                 system
                 (-> (core/crud-system test-config)
                     (dissoc :server)
                     component/start))))))

(defn reuse-handler []
  (get-in (reuse-system) [:ring-handler :app]))

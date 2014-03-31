(ns clj-crud.test-core
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clj-crud.core :as core]
            [com.stuartsierra.component :as component]
            [clojure.test :as test]))

(def test-config {:db-connect-string "jdbc:derby:memory:test_chains;create=true"})

(let [s (atom nil)]
  (defn reuse-system []
    (swap! s (fn [system]
               (if system
                 system
                 (-> (core/dev-crud-system test-config)
                     (dissoc :server)
                     component/start))))))

(defn reuse-handler []
  (get-in (reuse-system) [:ring-handler :app]))

(defn at? [res url]
  (test/is (= url (get-in res [:request :uri])))
  res)

;; hot patch kerodon for (press ...) to work on input as well as
;; button
(require 'kerodon.impl)
(require '[net.cgrand.enlive-html :as enlive])
(alter-var-root #'kerodon.impl/form-and-submit
                (fn [f]
                  (let [form-and-button (fn form-and-button-patch [form selector]
                                          (let [button (or (first
                                                            (enlive/select form
                                                                           [[:input
                                                                             (enlive/attr= :type "submit")
                                                                             (if (string? selector)
                                                                               (enlive/attr= :value selector)
                                                                               selector)]]))
                                                           (when-let [button (first
                                                                              (enlive/select form
                                                                                             [[:button
                                                                                               (enlive/attr= :type "submit")
                                                                                               ]]))]
                                                             (when (and (string? selector)
(= (enlive/text button) selector))
                                                               button)))]
                                            [form button]))]
                    (fn form-and-submit-patch [node selector]
                      (if-let [found
                               (first (filter (fn [[form button]] (not (nil? button)))
                                              (map (fn [form] (form-and-button form selector))
                                                   (enlive/select node [:form]))))]
                        found
                        (#'kerodon.impl/not-found "button" selector)))
                    )))

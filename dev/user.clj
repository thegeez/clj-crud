(ns user
  (:require [clojure.tools.logging :refer [info]]
            [com.stuartsierra.component :as component]
            [clojure.tools.namespace.repl :refer (refresh)]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.pprint :refer (pprint)]
            [clojure.repl :refer :all]
            [clojure.test :as test]
            [clj-crud.core :as app])
  (:import [java.io PrintStream]
           [org.apache.log4j Logger WriterAppender PatternLayout]))

;; from cascalog playground for swank/slime
(defn bootstrap-emacs []
  (let [logger (Logger/getRootLogger)]
    (doto (. logger (getAppender "stdout"))
      (.setWriter *out*))
    (alter-var-root #'clojure.test/*test-out* (constantly *out*))
    (info "Logging to repl")))

(def be bootstrap-emacs)

(def system nil)

(defn init []
  (alter-var-root #'system
    (constantly (app/crud-system app/dev-config))))

(defn start []
  (alter-var-root #'system component/start)
  :started)

(defn stop []
  (alter-var-root #'system
    (fn [s] (when s (component/stop s) nil))))

(defn go []
  (if system
    "System not nil, use (reset) ?"
    (do (bootstrap-emacs)
        (init)
        (start))))

(defn reset []
  (stop)
  (refresh :after 'user/go))

;; lein trampoline run -m user/run
(defn run []
  (go)
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. (fn []
                               (stop)))))

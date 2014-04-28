(ns todomvc.application
  (:require [goog.events :as e]
            [cljs.core.async :refer [<! put! chan]]
            [todomvc.render :as render]
            [todomvc.transact :as transact]
            [todomvc.services :as services]
            [datascript :as d])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn state-to-string
  "Turn state into a pretty string"
  [{:keys [all-done? current-filter items error]}]
  (str "{:all-done? " all-done? "\n"
       " :current-filter " current-filter "\n"
       " :items ["
       (apply str (interpose "\n         " items))
       "]\n"
       (when error
         (str " :error " error "\n"))
       "}"))

(defn pp-state
  "Print state in browser console"
  [state]
  (.log js/console (state-to-string state)))

(defn pp-transaction
  "Print transaction in browser console"
  [transaction]
  (.log js/console (str "\n(transact state " transaction ") =>")))

(defn load-app
  "Return a map containing the initial application"
  []
  {:conn (d/create-conn {})
   :channel (chan)
   :transact transact/handle
   :render-pending? (atom false)
   :render render/main})

(defn init-updates
  "For every value coming from channel;
   - call transact to update the application state"
  [{:keys [conn channel transact] :as app}]
  (go (while true
        (let [transaction (<! channel) ;; wait for next transaction
              datoms (transact transaction)
              _ (.log js/console (str "Datoms" datoms))
              {:keys [db-after] :as res} (d/transact! conn datoms)] ;; process transaction
          (.log js/console "db transact done")
          (.log js/console (pr-str transaction)) ;; print transaction
          (.log js/console (pr-str db-after)) ;; print state after transaction
          ))))

(defn ^:export main
  "Application entry point"
  []
  (let [{:keys [conn channel render-pending? render] :as app} (load-app)]
    (d/transact! conn [{:db/id -1 :current-filter :all}])
    (d/listen! conn (fn [report]
                      (.log js/console (str "Report: " (pr-str report)))
                      (render render-pending? (:db-after report) channel)))
    (init-updates app)
    (services/start-services app)
    (render render-pending? @conn channel)
    (def app app)))              ; hook for development/debugging

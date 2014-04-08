(ns todomvc.application
  (:require [goog.events :as e]
            [cljs.core.async :refer [<! put! chan]]
            [todomvc.render :as render]
            [todomvc.transact :as transact]
            [todomvc.services :as services])
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
  {:state (atom (transact/initial-state))
   :channel (chan)
   :emit (chan)
   :transact transact/main
   :render-pending? (atom false)
   :render render/main})

(defn init-updates
  "For every value coming from channel;
   - call transact to update the application state
   - trigger a render"
  [{:keys [state channel emit transact render] :as app}]
  (go (while true
        (let [transaction (<! channel)] ; wait for next transaction
          (>! emit transaction)
          (swap! state transact transaction) ; process transaction
          (pp-transaction transaction)       ; print transaction
          (pp-state @state)           ; print state after transaction
          (render app)))))            ; render after each state change

(defn ^:export main
  "Application entry point"
  []
  (let [{:keys [state render] :as app} (load-app)]
    (init-updates app)
    (services/start-services app)
    (pp-state @state)                 ; print initial state
    (render app)                      ; initial render
    (def app-hook app)))              ; hook for development/debugging

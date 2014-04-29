(ns todomvc.transact
  "Contains functions for manipulating the application data through DataScript"
  (:require [datascript :as d]
            [cljs-uuid-utils :as uuid]))

(defn log-event [db event & args]
  (let [evente {:db/id -100
                :event event
                :args args}]
    (if-let [prev-event-eid (ffirst (d/q '{:find [?e]
                                           :where [[?e :last-event]]}
                                         db))]
      [(assoc evente :prev-event prev-event-eid)
       [:db.fn/retractAttribute prev-event-eid :last-event]]
      [evente])))

(defn set-filter [db this-filter]
  (.log js/console "set-filter: " (pr-str this-filter))
  [[:db.fn/call log-event :set-filter this-filter]
   (let [e (ffirst (d/q '{:find [?e]
                          :where [[?e :filter]]}
                        db))]
     [:db/add e :filter this-filter])])

(defn seed-item  [db id text completed]
  [[:db.fn/call log-event :seed-item id text completed]
   {:db/id -1
    :id id
    :text text
    :completed completed
    :commited true}])

(defn remove-item [db id]
  [[:db.fn/call log-event :remove-item id]
   (let [e (ffirst (d/q '{:find [?e]
                          :in [$ ?id]
                          :where [[?e :id ?id]]}
                        db id))]
     [:db.fn/retractEntity e])])

(defn clear-completed [db]
  (let [eids+ids (d/q '{:find [?e ?id]
                        :where [[?e :completed true]
                                [?e :id ?id]]}
                      db)]
    (into [[:db.fn/call log-event :clear-completed (map second eids+ids)]]
          (for [e (map first eids+ids)]
            [:db.fn/retractEntity e]))))

(defn toggle-item
  ;; Given an application state, toggle the completion status of the
  ;; item with the specified ID
  [db id]
  (let [[e completed] (first (d/q '{:find [?e ?completed]
                                    :in [$ ?id]
                                    :where [[?e :id ?id]
                                            [?e :completed ?completed]]}
                                  db id))
        completed (not completed)]
    [[:db.fn/call log-event :toggle-item id completed]
     [:db/add e :completed completed]]))

(defn toggle-all [db]
  (let [e+id+completed (d/q '{:find [?e ?id ?completed]
                              :where [[?e :id ?id]
                                      [?e :completed ?completed]]}
                            db)
        target (not (every? (fn [[_ _ completed]] completed) e+id+completed))]
    (into  [[:db.fn/call log-event :toggle-all]]
           (for [[e id completed] e+id+completed
                 :when (= completed (not target))]
             [:db/add e :completed target]))))

(defn error [db msg]
  [[:db.fn/call log-event :error msg]
   {:db/id -1
    :error msg}])

(defn create-item [db text]
  (let [temp-id (uuid/make-random-uuid)]
    [[:db.fn/call log-event :create-item temp-id text]
     {:db/id -1
      :id temp-id
      :commited false
      :completed false
      :text text}]))

(defn commit-item [db temp-id id]
  [[:db.fn/call log-event :commit-item temp-id id]
   (let [e (ffirst (d/q '{:find [?e]
                          :in [$ ?id]
                          :where [[?e :id ?id]]}
                        db temp-id))]
     {:db/id e :id id :commited true})])

(defn start-edit [db id]
  [[:db.fn/call log-event :start-edit id]
   (let [e (ffirst (d/q '{:find [?e]
                          :in [$ ?id]
                          :where [[?e :id ?id]]}
                        db id))]
     [:db/add e :editing true])])

(defn complete-edit [db id text]
  (into [[:db.fn/call log-event :complete-edit id text]]
        (let [e (ffirst (d/q '{:find [?e]
                               :in [$ ?id]
                               :where [[?e :id ?id]]}
                             db id))]
          [[:db/add e :editing false]
           [:db/add e :commited false]
           [:db/add e :text text]])))

(defn commit-edit [db id]
  [[:db.fn/call log-event :commit-edit id]
   (let [e (ffirst (d/q '{:find [?e]
                          :in [$ ?id]
                          :where [[?e :id ?id]]}
                        db id))]
     [:db/add e :commited true])])


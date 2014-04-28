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
      (do 
        (.log js/console (str "log-event" prev-event-eid))
        [(assoc evente :prev-event prev-event-eid)
         [:db.fn/retractAttribute prev-event-eid :last-event]])
      [evente])))

(defmulti handle
  (fn [trans] (first trans)))

#_(defmethod handle :set-filter
  ;; Given an application state, set the current filter item
  [[_ this-filter]]
  (assoc state
    :current-filter this-filter))

#_(defmethod handle :seed-item
  ;; Given an application state, add a new item with the given text
  [state [_ id text completed]]
  (-> state
      (update-in [:items] conj {:id id :text text :completed completed :commited true})))

#_(defmethod handle :add-item
  ;; Given an application state, add a new item with the given text
  [{:keys [next-id] :as state} [_ id text]]
  (-> state
      (update-in [:items] conj {:id id :text text :commited false})))



#_(defmethod handle :remove-item
  ;; Given an application state, destroy the item with the specified ID
  [state [_ id]]
  (update-in state [:items]
             (fn [items]
               (remove #(= id (:id %)) items))))

#_(defmethod handle :toggle-item
  ;; Given an application state, toggle the completion status of the
  ;; item with the specified ID
  [state [_ id completed]]
  (update-item state
               id
               #(assoc % :completed completed)))




#_(defmethod handle :error
  [state _]
  (assoc state :error true))

(defmethod handle :create-item
  [[_ text]]
  (let [temp-id (uuid/make-random-uuid)]
    [[:db.fn/call log-event :create-item temp-id text]
     {:db/id -1
      :id temp-id
      :commited false
      :completed false
      :text text}]))

(defmethod handle :commit-item
  ;; Given an application state, add a new item with the given text
  [[_ temp-id id]]
  [[:db.fn/call log-event :commit-item temp-id id]
   [:db.fn/call (fn [db]
                  (let [e (ffirst (d/q '{:find [?e]
                                         :in [$ ?id]
                                         :where [[?e :id ?id]]}
                                       db temp-id))]
                    [{:db/id e :id id :commited true}]))]])

(defmethod handle :start-edit
  [[_ id]]
  [[:db.fn/call log-event :start-edit id]
   [:db.fn/call (fn [db]
                  (let [e (ffirst (d/q '{:find [?e]
                                         :in [$ ?id]
                                         :where [[?e :id ?id]]}
                                       db id))]
                    [[:db/add e :editing true]]))]])

(defmethod handle :complete-edit
  [[_ id text]]
  [[:db.fn/call log-event :complete-edit id text]
   [:db.fn/call (fn [db]
                  (let [e (ffirst (d/q '{:find [?e]
                                         :in [$ ?id]
                                         :where [[?e :id ?id]]}
                                       db id))]
                    [[:db/add e :editing false]
                     [:db/add e :commited false]
                     [:db/add e :text text]]))]])

(defmethod handle :commit-edit
  [[_ id]]
  [[:db.fn/call log-event :commit-edit id]
   [:db.fn/call (fn [db]
                  (let [e (ffirst (d/q '{:find [?e]
                                         :in [$ ?id]
                                         :where [[?e :id ?id]]}
                                       db id))]
                    [[:db/add e :commited true]]))]])

(defmethod handle :default
  [trans]
  nil)

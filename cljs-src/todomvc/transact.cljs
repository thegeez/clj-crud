(ns todomvc.transact
  "Contains functions for manipulating the application data")

(defn update-item
  [state id f]
  (update-in state
             [:items]
             (fn [items]
               (map #(if (= id (:id %)) (f %) %) items))))

(defmulti handle
  (fn [state trans] (first trans)))

(defmethod handle :set-filter
  ;; Given an application state, set the current filter item
  [state [_ this-filter]]
  (assoc state
    :current-filter this-filter))

(defmethod handle :add-item
  ;; Given an application state, add a new item with the given text
  [{:keys [next-id] :as state} [_ id text]]
  (-> state
      (update-in [:items] conj {:id id :text text :commited false})))

(defmethod handle :remove-item
  ;; Given an application state, destroy the item with the specified ID
  [state [_ id]]
  (update-in state [:items]
             (fn [items]
               (remove #(= id (:id %)) items))))

(defmethod handle :toggle-item
  ;; Given an application state, toggle the completion status of the
  ;; item with the specified ID
  [state [_ id]]
  (update-item state
               id
               #(update-in % [:completed] not)))

(defmethod handle :clear-completed
  ;; Given an application state, remove all completed items.
  [state _]
  (update-in state [:items]
             (fn [items]
               (remove #(:completed %) items))))

(defmethod handle :start-edit
  ;; Given an application state, start editing the specified item.
  [state [_ id]]
  (update-item state
               id
               #(assoc %
                  :editing true)))

(defmethod handle :complete-edit
  ;; Given an application state, start editing the specified item.
  [state [_ id text]]
  (update-item state
               id
               #(assoc %
                  :editing false
                  :text text)))

(defmethod handle :toggle-all
  [{:keys [items] :as state} _]
  (let [target (not (every? :completed items))]
    (assoc state
      :items (map #(assoc % :completed target) items))))

(defmethod handle :error
  [state _]
  (.log js/console (str "hahahah" state))
  (assoc state :error true))

(defmethod handle :default
  [state _]
  state)

(defn all-done?
  [{:keys [items] :as state}]
  (assoc state
    :all-done? (every? :completed items)))


;; API

(defn initial-state
  "Returns a new, empty application state."
  []
  {:all-done? true
   :current-filter :all
   :items []})

(defn main
  [state transaction]
  (-> state
      (handle transaction)
      (update-in [:items] vec)
      all-done?))

(defn try-transactions
  [transactions]
  (reduce main (initial-state) transactions))

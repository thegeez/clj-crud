(ns todomvc.render
  (:require [todomvc.transact :as t]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as dom]
            [datascript :as d]))

(defn enter-key?
  "Return true if an event was the enter key"
  [evt]
  (= 13 (.-keyCode evt)))

(q/defcomponent Header
  "The page's header, which includes the primary input"
  [_ conn]
  (dom/header {:id "header"}
              (dom/h1 {} "todos")
              (dom/input {:id "new-todo"
                          :placeholder "What needs to be done?"
                          :onKeyDown
                          (fn [evt]
                            (when (enter-key? evt)
                              (let [text (.-value (.-target evt))]
                                (d/transact! conn [[:db.fn/call t/create-item text]])
                                (set! (.-value (.-target evt)) ""))))
                          :autoFocus true})))

(q/defcomponent ItemFilter
  "A filtering button"
  [current-filter this-filter label href conn]
  (dom/li {} (dom/a {:className (when (= current-filter this-filter) "selected")
                     :href href
                     :onClick #(d/transact! conn [[:db.fn/call t/set-filter this-filter]])}
                    label)))

(q/defcomponent Filters
  "Buttons to filter the list"
  [current-filter conn]
  (dom/ul {:id "filters"}
          (ItemFilter current-filter :all "All" "#/" conn)
          (ItemFilter current-filter :active "Active" "#/active" conn)
          (ItemFilter current-filter :completed "Completed" "#/completed" conn)))

(q/defcomponent Footer
  "The footer at the bottom of the list"
  [[current-filter items] conn]
  (let [completed (count (filter :completed items))
        left (- (count items) completed)]
    (dom/footer {:id "footer"}
                (dom/span {:id "todo-count"}
                          (dom/strong {} (str left " item(s) left")))
                (Filters current-filter conn)
                (when (< 0 completed)
                  (dom/button {:id "clear-completed"
                               :onClick #(d/transact! conn [[:db.fn/call t/clear-completed]])}
                              (str "Clear completed (" completed ")"))))))

(defn class-name
  "Convenience function for creating class names from sets. Nils will
  not be included."
  [classes]
  (apply str (interpose " " (map identity classes))))

(defn hidden?
  "Given an item and the current application filter status, return
  true if the item should be hidden."
  [completed current-filter]
  (or (and completed       (= current-filter :active))
      (and (not completed) (= current-filter :completed))))

(q/defcomponent Item
  "An item in the todo list"
  [[{:keys [id text completed editing commited]} current-filter] conn]
  (let [completed (boolean completed)]
    (dom/li {:key id
             :className (class-name #{(when completed "completed")
                                      (when (hidden? completed current-filter)
                                        "hidden")
                                      (when editing "editing")})
             :onDoubleClick (fn [_]
                              (when commited
                                (d/transact! conn [[:db.fn/call t/start-edit id]])))}
            (dom/div {:className "view"}
                     (dom/input {:className "toggle"
                                 :type "checkbox"
                                 :checked completed
                                 :onChange
                                 (when commited
                                   (fn [_]
                                     (d/transact! conn [[:db.fn/call t/toggle-item id]])))})
                     (dom/label {} text)
                     (if-not commited
                       (dom/span {:className "syncing"} "[syncing ...]")
                       (dom/button {:className "destroy"
                                    :onClick
                                    (fn [_]
                                      (d/transact! conn [[:db.fn/call t/remove-item id]]))})))
            (dom/input (merge {:className "edit"
                               :defaultValue text
                               :onKeyDown (fn [evt] (when (enter-key? evt)
                                                      (.blur (.-target evt))))
                               :onBlur (fn [evt]
                                         (let [text (.-value (.-target evt))]
                                           (d/transact! conn [[:db.fn/call t/complete-edit id text]])))}
                              (if editing {:autoFocus true} {}))))))

(q/defcomponent TodoList
  "The primary todo list"
  [[current-filter items] conn]
  (apply dom/ul {:id "todo-list"}
         (map #(Item [% current-filter] conn) items)))

(q/defcomponent App
  "The root of the application"
  [{:keys [all-done? current-filter items error]} conn]
  (dom/div {}
           (when error
             (dom/div {:id "todo-error"
                       :className "alert alert-info"}
                      "Error occured, reloading page recommended."))
           (dom/section {:id "todoapp"}
                        (dom/div {}
                                 (Header nil conn)
                                 (dom/section {:id "main"}
                                              (dom/input {:id "toggle-all"
                                                          :type "checkbox"
                                                          :checked all-done?
                                                          :onChange #(d/transact! conn [[:db.fn/call t/toggle-all]])})
                                              (dom/label {:htmlFor "toggle-all"}
                                                         "Mark all as complete")
                                              (TodoList [current-filter items] conn))
                                 (Footer [current-filter items] conn)))))


;; API

(defn main
  "Render the given application state tree."
  [db conn]
  (.requestAnimationFrame js/window
                          (fn []
                            (let [items (->> (map #(d/entity db (first %))
                                                  (let [res (d/q '{:find [?e ?id]
                                                                   :where [[?e :id ?id]
                                                                           #_[?e :text]
                                                                           #_[?e :completed]]}
                                                                 db)]
                                                    (.log js/console "Res items" (pr-str res))
                                                    (.log js/console "DB now: " (pr-str db))
                                                    res))
                                             (sort-by :db/id))
                                  state {:all-done? (and (seq items)
                                                         (every? :completed items))
                                         :current-filter (ffirst (d/q '{:find [?filter]
                                                                        :where [[_ :filter ?filter]]}
                                                                      db))
                                         :items items
                                         :error (d/entity db :error)}]
                              (.log js/console (str "state is now: " state))
                              (q/render (App state conn)
                                        (.getElementById js/document "todopane"))))))

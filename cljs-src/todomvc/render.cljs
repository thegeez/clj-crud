(ns todomvc.render
  (:require [cljs.core.async :refer [put!]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as dom]
            [datascript :as d]))

(defn enter-key?
  "Return true if an event was the enter key"
  [evt]
  (= 13 (.-keyCode evt)))

(q/defcomponent Header
  "The page's header, which includes the primary input"
  [_ channel]
  (dom/header {:id "header"}
              (dom/h1 {} "todos")
              (dom/input {:id "new-todo"
                          :placeholder "What needs to be done?"
                          :onKeyDown
                          (fn [evt]
                            (when (enter-key? evt)
                              (let [text (.-value (.-target evt))]
                                (put! channel [:create-item text])
                                (set! (.-value (.-target evt)) ""))))
                          :autoFocus true})))

(q/defcomponent ItemFilter
  "A filtering button"
  [current-filter this-filter label href channel]
  (dom/li {} (dom/a {:className (when (= current-filter this-filter) "selected")
                 :href href
                 :onClick #(do (put! channel [:set-filter this-filter])
                               false)}
                label)))

(q/defcomponent Filters
  "Buttons to filter the list"
  [current-filter channel]
  (dom/ul {:id "filters"}
          (ItemFilter current-filter :all "All" "#/" channel)
          (ItemFilter current-filter :active "Active" "#/active" channel)
          (ItemFilter current-filter :completed "Completed" "#/completed" channel)))

(q/defcomponent Footer
  "The footer at the bottom of the list"
  [[current-filter items] channel]
  (let [completed (count (filter :completed items))
        left (- (count items) completed)]
    (dom/footer {:id "footer"}
                (dom/span {:id "todo-count"}
                          (dom/strong {} (str left " item(s) left")))
                (Filters current-filter channel)
                (when (< 0 completed)
                  (dom/button {:id "clear-completed"
                               :onClick #(put! channel [:clear-completed])}
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
  [[{:keys [id text completed editing commited]} current-filter] channel]
  (let [completed (boolean completed)]
    (dom/li {:key id
             :className (class-name #{(when completed "completed")
                                      (when (hidden? completed current-filter)
                                        "hidden")
                                      (when editing "editing")})
             :onDoubleClick (fn [_]
                              (when commited
                                (put! channel [:start-edit id])))}
            (dom/div {:className "view"}
                     (dom/input {:className "toggle"
                                 :type "checkbox"
                                 :checked completed
                                 :onChange
                                 (when commited
                                   (fn [_]
                                     (put! channel [:toggle-item id (not completed)])))})
                     (dom/label {} text)
                     (if-not commited
                       (dom/span {:className "syncing"} "[syncing ...]")
                       (dom/button {:className "destroy"
                                    :onClick
                                    (fn [_]
                                      (put! channel [:remove-item id]))})))
            (dom/input (merge {:className "edit"
                               :defaultValue text
                               :onKeyDown (fn [evt] (when (enter-key? evt)
                                                      (.blur (.-target evt))))
                               :onBlur (fn [evt]
                                         (let [text (.-value (.-target evt))]
                                           (put! channel [:complete-edit id text])))}
                              (if editing {:autoFocus true} {}))))))

(q/defcomponent TodoList
  "The primary todo list"
  [[current-filter items] channel]
  (apply dom/ul {:id "todo-list"}
         (map #(Item [% current-filter] channel) items)))

(q/defcomponent App
  "The root of the application"
  [{:keys [all-done? current-filter items error]} channel]
  (dom/div {}
           (when error
             (dom/div {:id "todo-error"
                     :className "alert alert-info"}
                    "Error occured, reloading page recommended."))
           (dom/section {:id "todoapp"}
                        (dom/div {}
                                 (Header nil channel)
                                 (dom/section {:id "main"}
                                              (dom/input {:id "toggle-all"
                                                          :type "checkbox"
                                                          :checked all-done?
                                                          :onChange #(put! channel [:toggle-all])})
                                              (dom/label {:htmlFor "toggle-all"}
                                                         "Mark all as complete")
                                              (TodoList [current-filter items] channel))
                                 (Footer [current-filter items] channel)))))


;; API

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(defn main
  "Render the given application state tree."
  [render-pending? db channel]
  (when (compare-and-set! render-pending? false true)
    (.requestAnimationFrame js/window
                            (fn []
                              (let [items (->> (map #(d/entity db (first %))
                                                    (d/q '{:find [?e]
                                                           :where [[?e :id]
                                                                   [?e :text]
                                                                   [?e :completed]]}
                                                         db))
                                               (sort-by :db/id))
                                    state {:all-done? (and (seq items)
                                                           (every? :completed items))
                                           :current-filter (ffirst (d/q '{:find [?filter]
                                                                          :where [[_ :current-filter ?filter]]}
                                                                        db))
                                           :items items
                                           :error (d/entity db :error)}]
                                (.log js/console (str "state is now: " state))
                                (q/render (App state channel)
                                          (.getElementById js/document "todopane")))
                              (reset! render-pending? false)))))

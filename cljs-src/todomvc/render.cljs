(ns todomvc.render
  (:require [cljs.core.async :refer [put!]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))

(defn enter-key?
  "Return true if an event was the enter key"
  [evt]
  (= 13 (.-keyCode evt)))

(q/defcomponent Header
  "The page's header, which includes the primary input"
  [_ channel]
  (d/header {:id "header"}
            (d/h1 {} "todos")
            (d/input {:id "new-todo"
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
  (d/li {} (d/a {:className (when (= current-filter this-filter) "selected")
                 :href href
                 :onClick #(do (put! channel [:set-filter this-filter])
                               false)}
                label)))

(q/defcomponent Filters
  "Buttons to filter the list"
  [current-filter channel]
  (d/ul {:id "filters"}
        (ItemFilter current-filter :all "All" "#/" channel)
        (ItemFilter current-filter :active "Active" "#/active" channel)
        (ItemFilter current-filter :completed "Completed" "#/completed" channel)))

(q/defcomponent Footer
  "The footer at the bottom of the list"
  [[current-filter items] channel]
  (let [completed (count (filter :completed items))
        left (- (count items) completed)]
    (d/footer {:id "footer"}
              (d/span {:id "todo-count"}
                      (d/strong {} (str left " item(s) left")))
              (Filters current-filter channel)
              (when (< 0 completed)
                (d/button {:id "clear-completed"
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
  [[{:keys [id text completed editing]} current-filter] channel]
  (let [completed (boolean completed)]
    (d/li {:key id
           :className (class-name #{(when completed "completed")
                                    (when (hidden? completed current-filter)
                                      "hidden")
                                    (when editing "editing")})
           :onDoubleClick (fn [_]
                            (put! channel [:start-edit id]))}
          (d/div {:className "view"}
                 (d/input {:className "toggle"
                           :type "checkbox"
                           :checked completed
                           :onChange
                           (fn [_]
                             (put! channel [:toggle-item id]))})
                 (d/label {} text)
                 (d/button {:className "destroy"
                            :onClick
                            (fn [_]
                              (put! channel [:remove-item id]))}))
          (d/input (merge {:className "edit"
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
  (apply d/ul {:id "todo-list"}
         (map #(Item [% current-filter] channel) items)))

(q/defcomponent App
  "The root of the application"
  [{:keys [all-done? current-filter items error]} channel]
  (d/div {}
         (when error
           (d/div {:id "todo-error"
                   :className "alert alert-info"}
                  "Error occured, reloading page recommended."))
         (d/section {:id "todoapp"}
                    (d/div {}
                           (Header nil channel)
                           (d/section {:id "main"}
                                      (d/input {:id "toggle-all"
                                                :type "checkbox"
                                                :checked all-done?
                                                :onChange #(put! channel [:toggle-all])})
                                      (d/label {:htmlFor "toggle-all"}
                                               "Mark all as complete")
                                      (TodoList [current-filter items] channel))
                           (Footer [current-filter items] channel)))))


;; API

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(defn main
  "Render the given application state tree."
  [{:keys [render-pending? state channel]}]
  (when (compare-and-set! render-pending? false true)
    (.requestAnimationFrame js/window
                            (fn []
                              (q/render (App @state channel)
                                        (.getElementById js/document "todopane"))
                              (reset! render-pending? false)))))

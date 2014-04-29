(ns todomvc.application
  (:require [goog.events :as e]
            [todomvc.render :as render]
            [todomvc.transact :as transact]
            [todomvc.services :as services]
            [datascript :as d]))

(defn load-app
  "Return a map containing the initial application"
  []
  {:conn (d/create-conn {})
   :render render/main})

(defn ^:export main
  "Application entry point"
  []
  (let [{:keys [conn render] :as app} (load-app)]
    (d/transact! conn [{:db/id -1 :filter (get {"#/" :all
                                                "#/active" :active
                                                "#/completed" :completed}
                                               (.. js/window -location -hash))}])
    (d/listen! conn (fn [report]
                      (render (:db-after report) conn)))
    (services/start-services app)
    (render @conn conn)
    (def app app)))              ; hook for development/debugging

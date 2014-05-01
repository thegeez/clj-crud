(ns todomvc.application
  (:require [goog.events :as e]
            [todomvc.render :as render]
            [todomvc.transact :as transact]
            [todomvc.services :as services]
            [todomvc.client-services :as client-services]
            [datascript :as d]))

(defn load-app
  "Return a map containing the initial application"
  []
  {:conn (d/create-conn {})
   :render render/main
   :service services/start-services})

(defn start-app [app-config]
  (let [{:keys [conn render service] :as app} app-config
        current-filter (get {"" :all
                             "#/" :all
                             "#/active" :active
                             "#/completed" :completed}
                            (.. js/window -location -hash))]
    (d/transact! conn [{:db/id -1 :filter current-filter}])
    (d/listen! conn (fn [report]
                      (render (:db-after report) conn)))
    (service app)
    (render @conn conn)
    (def app app)))

(defn ^:export main
  "Application entry point"
  []
  (start-app (load-app)))              ; hook for development/debugging

(defn load-local-app
  []
  {:conn (d/create-conn {})
   :render render/main
   :service client-services/start-services})

(defn ^:export client-local
  []
  (start-app (load-local-app)))

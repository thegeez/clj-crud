(ns todomvc.services
  (:require [cljs.core.async :refer [<! put! chan timeout]]
            [ajax.core :refer [GET POST PUT]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn error-handler [channel]
  (put! channel [:error]))

(defn start-services [app]
  (let [{:keys [channel]} app]
    (put! channel [:add-item "Hello world!"])
    (put! channel [:add-item "Item 2"])
    (GET "/todos/fail" {:handler (fn [res]
                                   (put! channel [:add-item "Succes"]))
                        :error-handler (error-handler channel)})
    (go (<! (timeout 3000))
        (>! channel [:toggle-item (-> app
                                      :state
                                      deref
                                      :items
                                      rand-nth
                                      :id)]))))

(ns todomvc.services
  (:require [cljs.core.async :refer [<! >! put! chan timeout]]
            [ajax.core :refer [GET POST PUT]]
            #_[cljs-uuid-utils :as uuid])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn current-url []
  (str (.-URL js/document)))

(defn error-handler [channel]
  (put! channel [:error]))

(defmulti handle
  (fn [channel action] (first action)))

(defmethod handle :create-item
  [channel [_ text]]
  (.log js/console (str "create-item" text))
  (let [id -4 #_(uuid/make-random-uuid)]
    (put! channel [:add-item id text])
    (.log js/console (str "toL " (current-url)))
    (POST (current-url)
          {:params {:id id
                    :text text}
           :handler (fn [res]
                      (.log js/console (str "Succesful res: " res)))
           :error-handler (error-handler channel)})))

(defmethod handle :default
  [_ _] nil)

(defn start-services [app]
  (.log js/console (str "Url is: " (.-URL js/document)))
  (let [{:keys [channel emit]} app]
    (go (while true
          (let [action (<! emit)]
            (.log js/console (str "service: " action))
            (handle channel action))))))

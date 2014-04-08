(ns todomvc.services
  (:require [cljs.core.async :refer [<! >! put! chan timeout]]
            [ajax.core :refer [GET POST PUT]]
            [cljs-uuid-utils :as uuid]
            [goog.dom :as gdom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn todos-url []
  (str (.-URL js/document))
  (str (.. js/window -location -pathname) "/todos"))

(defn error-handler [channel]
  (put! channel [:error]))

(defmulti handle
  (fn [channel action] (first action)))

(defmethod handle :create-item
  [channel [_ text]]
  (.log js/console (str "create-item" text))
  (let [temp-id (uuid/make-random-uuid)]
    (put! channel [:add-item temp-id text])
    (POST (todos-url)
          {:params {:id temp-id
                    :text text}
           :handler (fn [res]
                      (.log js/console (str "Succesful res: " res))
                      (let [id (:id res)]
                        (put! channel [:commit-item temp-id id])))
           :error-handler (fn [res]
                            (.log js/console (str "FAil res: " res))
                            (error-handler channel))
           :headers {"X-CSRF-Token" (-> (goog.dom.getElement "csrf-token")
                                        (.getAttribute "value"))}})))

(defmethod handle :default
  [_ _] nil)

(defn start-services [app]
  (.log js/console (str "Url is: " (.-URL js/document)))
  (let [{:keys [channel emit]} app]
    (go (while true
          (let [action (<! emit)]
            (.log js/console (str "service: " action))
            (handle channel action))))
    (GET (todos-url)
         {:handler (fn [res]
                     (doseq [{:keys [id text] :as todo} (:todos res)]
                       (put! channel [:seed-item id text])))
          :error-handler (fn [res]
                           (error-handler channel))})))

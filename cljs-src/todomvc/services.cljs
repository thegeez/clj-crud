(ns todomvc.services
  (:require [cljs.core.async :refer [<! >! put! chan timeout]]
            [ajax.core :refer [GET POST PUT] :as ajax-core]
            [cljs-uuid-utils :as uuid]
            [goog.dom :as gdom])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn DELETE
  "Not yet in cljs-ajax 0.2.3"
  [uri & [opts]]
  (ajax-core/ajax-request uri "DELETE" (ajax-core/transform-opts opts)))


(defn todos-url []
  (str (.-URL js/document))
  (str (.. js/window -location -pathname) "/todos"))

(defn csrf-token []
  (-> (goog.dom.getElement "csrf-token")
      (.getAttribute "value")))

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
           :headers {"X-CSRF-Token" (csrf-token)}})))

(defmethod handle :complete-edit
  [channel [_ id text]]
  (PUT (todos-url)
       {:params {:id id
                 :text text}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler channel))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :toggle-item
  [channel [_ id completed]]
  (PUT (todos-url)
       {:params {:id id
                 :completed completed}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler channel))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :remove-item
  [channel [_ id]]
  (DELETE (todos-url)
       {:params {:id id}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler channel))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

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
                     (doseq [{:keys [id text completed] :as todo} (:todos res)]
                       (put! channel [:seed-item id text completed])))
          :error-handler (fn [res]
                           (error-handler channel))})))

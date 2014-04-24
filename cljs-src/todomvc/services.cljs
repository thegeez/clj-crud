(ns todomvc.services
  (:require [cljs.core.async :refer [<! >! put! chan timeout]]
            [ajax.core :refer [GET POST PUT] :as ajax-core]
            [cljs-uuid-utils :as uuid]
            [goog.dom :as gdom]
            [cljs.reader :as reader])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn DELETE
  "Not yet in cljs-ajax 0.2.3"
  [uri & [opts]]
  (ajax-core/ajax-request uri "DELETE" (ajax-core/transform-opts opts)))


(defn todos-url []
  (str (.. js/window -location -pathname) "/todos"))

(defn events-url []
  (str (.. js/window -location -pathname) "/events"))

(defn csrf-token []
  (-> (goog.dom.getElement "csrf-token")
      (.getAttribute "value")))

(defn error-handler [channel]
  (put! channel [:error]))

(defmulti handle
  (fn [app action] (first action)))

(defmethod handle :create-item
  [{:keys [channel]} [_ text]]
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
  [{:keys [channel]} [_ id text]]
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
  [{:keys [channel]} [_ id completed]]
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
  [{:keys [channel]} [_ id]]
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

(defmethod handle :clear-completed
  ;; Given an application state, remove all completed items.
  [{:keys [state channel]} _]
  (doseq [{:keys [id completed] :as item} (:items @state)
          :when completed]
    (put! channel [:remove-item id])))

(defmethod handle :toggle-all
  [{:keys [state channel]} _]

  (let [items (:items @state)
        target (not (every? :completed items))]
    (doseq [{:keys [id completed] :as item} items
            :when (= completed (not target))]
      (put! channel [:toggle-item id target]))))

(defmethod handle :default
  [_ _] nil)

(defn start-services [app]
  (.log js/console (str "Url is: " (.-URL js/document)))
  (let [{:keys [channel emit]} app]
    ;; SSE
    (let [source (js/EventSource. (events-url))]
      (set! (.-onmessage source)
            (fn [e]
              (.log js/console e)
              (let [e (reader/read-string (.-data e))]
                (put! channel e)))))
    ;; Regular stuff
    (go (while true
          (let [action (<! emit)]
            (.log js/console (str "service: " action))
            (handle app action))))
    (GET (todos-url)
         {:handler (fn [res]
                     (doseq [{:keys [id text completed] :as todo} (:todos res)]
                       (put! channel [:seed-item id text completed])))
          :error-handler (fn [res]
                           (error-handler channel))})))

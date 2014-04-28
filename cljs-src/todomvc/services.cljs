(ns todomvc.services
  (:require [cljs.core.async :refer [<! >! put! chan timeout]]
            [ajax.core :refer [GET POST PUT] :as ajax-core]
            [goog.dom :as gdom]
            [datascript :as d])
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
  (fn [event args db channel] event))

(defmethod handle :create-item
  [_ [temp-id text] db channel]
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
         :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :complete-edit
  [event [id text] db channel]
  (PUT (todos-url)
       {:params {:id id
                 :text text}
        :handler (fn [res]
                   (.log js/console (str "Succesful res for complete-edit: " res " id is " id " text is " text))
                   (put! channel [:commit-edit id]))
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
  (let [{:keys [conn channel]} app]
    (d/listen! conn (fn [{:keys [db-after] :as report}]
                      (.log js/console (str "Report: " (pr-str report) "keys" (pr-str (keys (:db-after report
                                                                                             )))))
                      (let [[event args] (first (d/q '{:find [?event ?args]
                                                       :in [$ ?tx]
                                                       :where [[?e :event ?event ?tx]
                                                               [?e :args ?args]]}
                                                     db-after (:max-tx db-after)))]
                        (handle event args db-after channel))
                      ))
    #_(GET (todos-url)
         {:handler (fn [res]
                     (doseq [{:keys [id text completed] :as todo} (:todos res)]
                       (put! channel [:seed-item id text completed])))
          :error-handler (fn [res]
                           (error-handler channel))})))

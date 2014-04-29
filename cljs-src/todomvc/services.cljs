(ns todomvc.services
  (:require [todomvc.transact :as t]
            [ajax.core :refer [GET POST PUT] :as ajax-core]
            [goog.dom :as gdom]
            [datascript :as d]))

(defn DELETE
  "Not yet in cljs-ajax 0.2.3"
  [uri & [opts]]
  (ajax-core/ajax-request uri "DELETE" (ajax-core/transform-opts opts)))


(defn todos-url []
  (str (.. js/window -location -pathname) "/todos"))

(defn csrf-token []
  (-> (goog.dom.getElement "csrf-token")
      (.getAttribute "value")))

(defn error-handler [conn]
  (d/transact! conn [[:db.fn/call t/error "fail"]]))

(defmulti handle
  (fn [event args db conn] event))

(defmethod handle :create-item
  [_ [temp-id text] db conn]
  (POST (todos-url)
        {:params {:id temp-id
                  :text text}
         :handler (fn [res]
                    (.log js/console (str "Succesful res: " res))
                    (let [id (:id res)]
                      (d/transact! conn [[:db.fn/call t/commit-item temp-id id]])))
         :error-handler (fn [res]
                          (.log js/console (str "FAil res: " res))
                          (error-handler conn))
         :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :complete-edit
  [event [id text] db conn]
  (PUT (todos-url)
       {:params {:id id
                 :text text}
        :handler (fn [res]
                   (.log js/console (str "Succesful res for complete-edit: " res " id is " id " text is " text))
                   (d/transact! conn [[:db.fn/call t/commit-edit id]]))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler conn))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :toggle-item
  [event [id completed] db conn]
  (PUT (todos-url)
       {:params {:id id
                 :completed completed}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler conn))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :remove-item
  [event [id] db conn]
  (DELETE (todos-url)
       {:params {:id id}
        :handler (fn [res]
                   ;; nothing todo
                   (.log js/console (str "Succesful res: " res)))
        :error-handler (fn [res]
                         (.log js/console (str "Fail res: " res))
                         (error-handler conn))
        :format (merge (ajax-core/edn-request-format)
                       {:read (fn [res]
                                (let [res-text (.getResponseText res)]
                                  (when (pos? (count res-text))
                                    (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                        :description "EDN (CUSTOM)"})
        :headers {"X-CSRF-Token" (csrf-token)}}))

(defmethod handle :clear-completed
  [event [ids] db conn]
  ;; todo make batch delete enpoint and use that
  (doseq [id ids]
    (DELETE (todos-url)
            {:params {:id id}
             :handler (fn [res]
                        ;; nothing todo
                        (.log js/console (str "Succesful res: " res)))
             :error-handler (fn [res]
                              (.log js/console (str "Fail res: " res))
                              (error-handler conn))
             :format (merge (ajax-core/edn-request-format)
                            {:read (fn [res]
                                     (let [res-text (.getResponseText res)]
                                       (when (pos? (count res-text))
                                         (throw (js/Error. (str  "Assumed no content response has content: " res-text))))))
                             :description "EDN (CUSTOM)"})
             :headers {"X-CSRF-Token" (csrf-token)}})))

(defmethod handle :toggle-all
  [event _ db conn]
  (doseq [[id completed] (d/q '{:find [?id ?completed]
                                :in [$ ?tx]
                                :where [[?e :id ?id]
                                        [?e :completed ?completed ?tx]]}
                              db (:max-tx db))]
    (handle :toggle-item [id completed] db conn)))

(defmethod handle :default
  [_ _] nil)

(defn start-services [app]
  (.log js/console (str "Url is: " (.-URL js/document)))
  (let [{:keys [conn]} app]
    (d/listen! conn (fn [{:keys [db-after] :as report}]
                      (.log js/console (str "Report: " (pr-str report) "keys" (pr-str (keys (:db-after report
                                                                                             )))))
                      (let [[event args] (first (d/q '{:find [?event ?args]
                                                       :in [$ ?tx]
                                                       :where [[?e :event ?event ?tx]
                                                               [?e :args ?args]]}
                                                     db-after (:max-tx db-after)))]
                        (handle event args db-after conn))))
    (GET (todos-url)
         {:handler (fn [res]
                     (.log js/console "todos for seed: " (pr-str (:todos res)))
                     (doseq [{:keys [id text completed] :as todo} (:todos res)]
                       (d/transact! conn [[:db.fn/call t/seed-item id text completed]])))
          :error-handler (fn [res]
                           (error-handler conn))})))

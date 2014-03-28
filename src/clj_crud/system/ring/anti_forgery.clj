(ns clj-crud.system.ring.anti-forgery
  (:require [clojure.tools.logging :refer [info debug spy]]))

;; ring.middleware.anti-forgery does not use the session properly:
;; https://github.com/weavejester/ring-anti-forgery/issues/10
;; IMHO this commit is wrong:
;; https://github.com/weavejester/ring-anti-forgery/commit/e4e3d8b4a7d073bb33ef4e279c1b4773172ad0cb
;; test should verify session data put on response survives. Session
;; data on request is responsibility of whoever put it there

(def anti-forgery-key "__anti-forgery-token")

(defn wrap-anti-forgery [handler]
  (fn anti-forgery [req]
    (if (and (not (#{:head :get} (get req :request-method)))
             (let [session-token (get-in req [:session anti-forgery-key])
                   submitted-token (get-in req [:params (keyword anti-forgery-key)])]
               (not (= session-token submitted-token))))
      {:status 403
       :headers {"Content-Type" "text/html"}
       :body "<h1>Invalid anti-forgery token</h1>"}
      (let [token (or (get-in req [:session anti-forgery-key])
                      (str (java.util.UUID/randomUUID)))]
        ;; put in request so templates can inject the token, will
        ;; overwrite existing token with the same one
        (-> (handler (assoc-in req [:session anti-forgery-key] token))
            (assoc-in [:session anti-forgery-key] token))))))

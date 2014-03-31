(ns clj-crud.data.accounts
  (:require [clojure.tools.logging :refer [info debug spy]]
            [clojure.string :as string]
            [clojure.java.jdbc :as jdbc]
            [cemerick.friend.credentials :as credentials]))
(defn now []
  (.getTime (java.util.Date.)))

(defn random-string []
  (apply str (remove #{\-} (str (java.util.UUID/randomUUID)))))

(def slug-characters
  (let [ab "abcdefghijklmnopqrstuvwxyz"
        nums "0123456789"
        syms "-_"]
    (-> #{}
        (into ab)
        (into (string/capitalize ab))
        (into nums)
        (into syms))))

(defn slugify [name]
  (let [name (str name)]
    (-> name
        str
        string/lower-case
        (->>
         (filter slug-characters)
         (apply str)))))

(defn valid-email? [email]
  (and (not (zero? (count email)))
       (some #{\@} email)))

(defn get-account [db slug]
  (first (jdbc/query db ["SELECT * FROM accounts WHERE slug = ?" slug])))

(defn get-account-by-email [db email]
  (first (jdbc/query db ["SELECT * FROM accounts WHERE email = ?" email])))

(defn get-account-by-reset-token [db reset_token]
  (when-let [account (first (jdbc/query db ["SELECT * FROM accounts WHERE reset_token = ?" reset_token]))]
    (when (< (now) (:expire account))
      account)))


(defn update-account [db account]
  (let [res (jdbc/update! db :accounts (assoc account
                                         :updated_at (now))
                          ["slug = ?" (:slug account)])]
    (when-not (= res [1])
      (throw (Exception.  "DB Update has not succeeded")))))

(defn create-account [db account]
  (let [exists-by-slug (get-account db (:slug account))]
    (if exists-by-slug
      ;; user needs to select different name for a unique slug
      {:errors {:name "Name already taken"}}
      (if-let [exists-by-email (get-account-by-email db (:email account))] 
        {:errors {:email "Email already taken"}}
        (let [now (now)
              admin? (if (get account :admin?) 1 0)
              {:keys [email slug name password]} account
              res (jdbc/insert! db :accounts {:slug slug
                                              :name name
                                              :email email
                                              :password (credentials/hash-bcrypt password)
                                              :admin admin?
                                              :created_at now
                                              :updated_at now})]
          (when-not (contains? (first res) :1)
            (throw (Exception.  "DB Create has not succeeded")))
          (get-account db (:slug account)))))))

(defn delete-account [db account]
  (jdbc/delete! db :accounts ["slug = ?" (:slug account)]))

(defn lookup-friend-identity [db]
  (fn lookup-friend-identity-username [username]
    "return {:username :password :roles} for username"
    (when-let [account (first (jdbc/query db ["SELECT * FROM accounts WHERE name = ?" username]))]
      (let [admin? (= 1 (:admin account))
            roles (-> #{(keyword (:slug account))}
                      (cond-> admin? (conj :admin)))]
        (-> account
            (dissoc :admin)
            (assoc :username username
                   :roles roles))))))

(defn forgot-password [db email]
  (let [account (get-account-by-email db email)]
    (if-not account
      {:errors {:email "Email is not known"}}
      (let [now (now)
            three-days-msecs (* 3 24 60 60 1000)
            expire (+ now three-days-msecs)
            reset_token (random-string)
            res (jdbc/update! db :accounts {:reset_token reset_token
                                            :expire expire
                                            :updated_at now}
                              ["slug = ?" (:slug account)])]
        (when-not (= res [1])
          (throw (Exception.  "DB Update has not succeeded")))
        {:reset_token reset_token}))))

(defn reset-password [db reset_token password]
  (let [account (get-account-by-reset-token db reset_token)]
    (if-not account
      {:errors {:password "Can not reset password by current token"}}
      (let [now (now)
            res (jdbc/update! db :accounts {:password (credentials/hash-bcrypt password)
                                            :reset_token nil
                                            :expire -1
                                            :updated_at now}
                              ["slug = ?" (:slug account)])]
        (when-not (= res [1])
          (throw (Exception.  "DB Update has not succeeded")))
        account))))

(defn list-accounts [db]
  (for [a (jdbc/query db ["SELECT * FROM accounts"])]
    (update-in a [:admin] #(if (= % 1) true nil))))

(defn delete-account [db slug]
  ;; never delete admin accounts
  (jdbc/delete! db :accounts ["slug = ? AND admin = 0" slug]))

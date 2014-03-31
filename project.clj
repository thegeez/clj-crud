(defproject clj-crud "0.0.1-SNAPSHOT"
  :description "Simple crud in Clojure"
  :url "http://thegeez.net"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 ;; logging
                 [org.clojure/tools.logging "0.2.6"]
                 [org.slf4j/slf4j-log4j12 "1.6.6"]

                 ;; ring and webserver
                 [ring/ring-core "1.2.1"]
                 [ring/ring-jetty-adapter "1.2.1"]

                 ;; application structure
                 [com.stuartsierra/component "0.2.1"]

                 ;; request flow
                 [liberator "0.11.0"]

                 ;; routing
                 [compojure "1.1.3"]
                 ;; templates
                 [enlive "1.1.5"]
                 ;; auth
                 [com.cemerick/friend "0.2.0"]

                 [org.clojure/data.json "0.2.3"]

                 ;; db
                 [org.clojure/java.jdbc "0.3.0"]
                 [postgresql/postgresql "8.4-702.jdbc4"]
                 ]

  :profiles {:dev {:source-paths ["dev"]
                   :resource-paths ["dev/resources"]
                   :dependencies [[ring/ring-devel "1.2.1"]
                                  [org.clojure/tools.namespace "0.2.3"]
                                  [org.clojure/java.classpath "0.2.0"]
                                  [org.apache.derby/derby "10.8.1.2"]
                                  [kerodon "0.3.0"]]
                   :main user}
             :uberjar {:main clj-crud.main
                       :aot [clj-crud.main]}})

(defproject clj-crud "0.0.1-SNAPSHOT"
  :description "Simple crud in Clojure"
  :url "http://thegeez.net"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
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

  :aliases {"migrate" ["with-profile" "-dev" "run" "-m" "clj-crud.main/migrate"]}

  ;; doesn't get used when in :uberjar profile?
  :uberjar-name "clj-crud-prod-standalone.jar"
  :min-lein-version "2.0.0"

  :profiles {:dev {:source-paths ["dev"]
                   :resource-paths ["dev/resources"]
                   :dependencies [[ring/ring-devel "1.2.1"]
                                  [org.clojure/tools.namespace "0.2.3"]
                                  [org.clojure/java.classpath "0.2.0"]
                                  [org.apache.derby/derby "10.8.1.2"]
                                  [kerodon "0.3.0"]
                                  [org.clojure/clojurescript "0.0-2173"]
                                  ;; conflicts with cljs on tools.reader
                                  [ring/ring-core "1.2.1" :exclusions [org.clojure/tools.reader]]
                                  [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                                  [quiescent "0.1.1"]
                                  [cljs-ajax "0.2.3"]]
                   :plugins [[lein-cljsbuild "1.0.2"]]
                   :main user}
             :uberjar {:main clj-crud.main
                       :aot [clj-crud.main]}}

  :cljsbuild {:builds [{:id "todomvc"
                        :source-paths ["cljs-src"]
                        :compiler {
                                   :output-to "resources/public/js/todomvc.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none}}]})

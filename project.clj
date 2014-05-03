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
                                  [quiescent "0.1.1"]
                                  [cljs-ajax "0.2.3"]
                                  [org.clojars.franks42/cljs-uuid-utils "0.1.3"]
                                  [com.facebook/react "0.9.0.1"]
                                  [datascript "0.1.4"]]
                   :plugins [[lein-cljsbuild "1.0.2"]
                             [com.cemerick/clojurescript.test "0.3.0"]]
                   :main user}
             :uberjar {:main clj-crud.main
                       :aot [clj-crud.main]}}

  :cljsbuild {:builds {:dev {:source-paths ["cljs-src"]
                             :compiler {
                                        :output-to "resources/public/js/todomvc.js"
                                        :output-dir "resources/public/js/out"
                                        :optimizations :whitespace}
                             :notify-command ["notify-send" "cljsbuild"]}
                       :test {:source-paths ["cljs-src" "cljs-test"]
                              :compiler {:preamble ["react/react.min.js"]
                                         :output-to "cljs-target/cljstest.js"
                                         :optimizations :whitespace
                                         :pretty-print true}}
                       :local {:source-paths ["cljs-src" "cljs-test"]
                               :compiler {:output-to "resources/public/js/todomvc-min.js"
                                          :optimizations :advanced
                                          :elide-asserts true
                                          :pretty-print false
                                          :preamble ["react/react.min.js"]
                                          :externs ["react/externs/react.js"]}}}
              :test-commands {"tests" ["phantomjs" :runner
                                       "cljs-test/bind_polyfill.js"
                                       "cljs-target/cljstest.js"]}})

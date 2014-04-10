# clj-crud

Simple crud app in Clojure

# Running for development with temporary in process database:
In ns user, through lein repl/cider etc.:
   (go) ;; to start the component system, localhost:3000 will serve the site
   (reset) ;; to reset the whole component system

# Running production uberjar (for heroku)
   lein uberjar
   java -jar target/cljs-crud-prod-standalone.jar PORT DB-URL

# Demo accounts
Create your own through Signup or login using Name: Admin Password: admin for the demo admin account.

# Todo
- Show password reset link in html when using debug emailer for demo
- Show demo credentials on login page
- Default to ssl on Heroku
- Replace compojure with bidi
- look into jdbc entities
- use :base with liberator
- secure headers etc from clojure.web/with-security
- Walk through http://www.lispcast.com/clojure-web-security

## About

Written by:
Gijs Stuurman / [@thegeez][twt] / [Blog][blog] / [GitHub][github]

[twt]: http://twitter.com/thegeez
[blog]: http://thegeez.net
[github]: https://github.com/thegeez

## License

Copyright © 2014 Gijs Stuurman

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

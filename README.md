# clj-crud

Simple crud app in Clojure

### Development
This uses an in-process/in-memory only database. In the `user` namespace, through `lein repl/cider` etc.:
```
   (go) ;; to start the component system, localhost:3000 will serve the site
   (reset) ;; to reset the whole component system
```

### Running production uberjar (for heroku):
```
   lein uberjar
   java -jar target/cljs-crud-prod-standalone.jar PORT DB-URL
```

### Deploy on heroku
First time, provision a PostgreSQL database (see https://devcenter.heroku.com/articles/heroku-postgresql):
```
   heroku addons:add heroku-postgresql:dev
```
First time and every time adding a migration:
```
   heroku run lein migrate
```
Deploying:
```
   git push heroku
```

## Demo accounts
Create your own through Signup or login using 
```
   Name: Admin Password: admin for the demo admin account.
```

## Compiling the ClojureScript
```
   lein cljsbuild auto dev ;; continues compilation for development
   lein cljsbuild test
   lein cljsbuild once local ;; advanced compilation for the client-side only demo
   lein cljsbuild once prod ;; advanced compilation for production
```


# Todo
- Default to ssl on Heroku
- Replace compojure with bidi
- look into jdbc entities
- use :base with liberator
- secure headers etc from clojure.web/with-security
- Walk through http://www.lispcast.com/clojure-web-security
- Make pull requests for changes to anti-forgery
- Sort out ring.middleware.session situation/documentation
- Re-add something with Server-Sent Events, as done on the hackbattle2014 branch
- Look into figwheel/browser-repl

# Done
- ~~Mock sending password reset email~~
- ~~Ghost user accounts as admin~~
- ~~Add anti-forgery check~~
- ~~Add transaction functions to Datascript~~

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

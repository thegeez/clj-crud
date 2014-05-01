// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.application');
goog.require('cljs.core');
goog.require('todomvc.client_services');
goog.require('datascript');
goog.require('todomvc.render');
goog.require('todomvc.render');
goog.require('todomvc.transact');
goog.require('todomvc.services');
goog.require('datascript');
goog.require('goog.events');
goog.require('todomvc.transact');
goog.require('todomvc.client_services');
goog.require('goog.events');
goog.require('todomvc.services');
/**
* Return a map containing the initial application
*/
todomvc.application.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"render","render",4374279432),todomvc.render.main,new cljs.core.Keyword(null,"service","service",2998057511),todomvc.services.start_services], null);
});
todomvc.application.start_app = (function start_app(app_config){var map__16868 = app_config;var map__16868__$1 = ((cljs.core.seq_QMARK_.call(null,map__16868))?cljs.core.apply.call(null,cljs.core.hash_map,map__16868):map__16868);var app = map__16868__$1;var service = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"service","service",2998057511));var render = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"render","render",4374279432));var conn = cljs.core.get.call(null,map__16868__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));var current_filter = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, ["",new cljs.core.Keyword(null,"all","all",1014000915),"#/",new cljs.core.Keyword(null,"all","all",1014000915),"#/active",new cljs.core.Keyword(null,"active","active",3885920888),"#/completed",new cljs.core.Keyword(null,"completed","completed",3905939901)], null),window.location.hash);datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"filter","filter",4034379498),current_filter], null)], null));
datascript.listen_BANG_.call(null,conn,(function (report){return render.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report),conn);
}));
service.call(null,app);
render.call(null,cljs.core.deref.call(null,conn),conn);
todomvc.application.app = app;
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){return todomvc.application.start_app.call(null,todomvc.application.load_app.call(null));
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);
todomvc.application.load_local_app = (function load_local_app(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"render","render",4374279432),todomvc.render.main,new cljs.core.Keyword(null,"service","service",2998057511),todomvc.client_services.start_services], null);
});
todomvc.application.client_local = (function client_local(){return todomvc.application.start_app.call(null,todomvc.application.load_local_app.call(null));
});
goog.exportSymbol('todomvc.application.client_local', todomvc.application.client_local);

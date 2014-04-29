// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.application');
goog.require('cljs.core');
goog.require('datascript');
goog.require('todomvc.render');
goog.require('todomvc.render');
goog.require('todomvc.transact');
goog.require('todomvc.services');
goog.require('datascript');
goog.require('goog.events');
goog.require('todomvc.transact');
goog.require('goog.events');
goog.require('todomvc.services');
/**
* Turn state into a pretty string
*/
todomvc.application.state_to_string = (function state_to_string(p__13067){var map__13069 = p__13067;var map__13069__$1 = ((cljs.core.seq_QMARK_.call(null,map__13069))?cljs.core.apply.call(null,cljs.core.hash_map,map__13069):map__13069);var error = cljs.core.get.call(null,map__13069__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__13069__$1,new cljs.core.Keyword(null,"items","items",1114430258));var current_filter = cljs.core.get.call(null,map__13069__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__13069__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return [cljs.core.str("{:all-done? "),cljs.core.str(all_done_QMARK_),cljs.core.str("\n"),cljs.core.str(" :current-filter "),cljs.core.str(current_filter),cljs.core.str("\n"),cljs.core.str(" :items ["),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n         ",items))),cljs.core.str("]\n"),cljs.core.str((cljs.core.truth_(error)?[cljs.core.str(" :error "),cljs.core.str(error),cljs.core.str("\n")].join(''):null)),cljs.core.str("}")].join('');
});
/**
* Return a map containing the initial application
*/
todomvc.application.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"render","render",4374279432),todomvc.render.main], null);
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){var map__13071 = todomvc.application.load_app.call(null);var map__13071__$1 = ((cljs.core.seq_QMARK_.call(null,map__13071))?cljs.core.apply.call(null,cljs.core.hash_map,map__13071):map__13071);var app = map__13071__$1;var render = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"render","render",4374279432));var conn = cljs.core.get.call(null,map__13071__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"filter","filter",4034379498),cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, ["#/",new cljs.core.Keyword(null,"all","all",1014000915),"#/active",new cljs.core.Keyword(null,"active","active",3885920888),"#/completed",new cljs.core.Keyword(null,"completed","completed",3905939901)], null),window.location.hash)], null)], null));
datascript.listen_BANG_.call(null,conn,(function (report){console.log([cljs.core.str("Application Report: "),cljs.core.str(cljs.core.pr_str.call(null,report))].join(''));
return render.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report),conn);
}));
todomvc.services.start_services.call(null,app);
render.call(null,cljs.core.deref.call(null,conn),conn);
todomvc.application.app = app;
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);

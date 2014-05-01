// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('datascript');
goog.require('datascript');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('todomvc.transact');
goog.require('todomvc.transact');
/**
* Not yet in cljs-ajax 0.2.3
* @param {...*} var_args
*/
todomvc.services.DELETE = (function() { 
var DELETE__delegate = function (uri,p__17013){var vec__17015 = p__17013;var opts = cljs.core.nth.call(null,vec__17015,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__17013 = null;if (arguments.length > 1) {
  p__17013 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__17013);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__17016){
var uri = cljs.core.first(arglist__17016);
var p__17013 = cljs.core.rest(arglist__17016);
return DELETE__delegate(uri,p__17013);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
todomvc.services.todos_url = (function todos_url(){return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
todomvc.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
todomvc.services.error_handler = (function error_handler(conn){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.error,"fail"], null)], null));
});
todomvc.services.handle = (function (){var method_table__11187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11191__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,db,conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11191__auto__,method_table__11187__auto__,prefer_table__11188__auto__,method_cache__11189__auto__,cached_hierarchy__11190__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__17017,db,conn){var vec__17018 = p__17017;var temp_id = cljs.core.nth.call(null,vec__17018,0,null);var text = cljs.core.nth.call(null,vec__17018,1,null);return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__17019,db,conn){var vec__17020 = p__17019;var id = cljs.core.nth.call(null,vec__17020,0,null);var text = cljs.core.nth.call(null,vec__17020,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_edit,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__17021,db,conn){var vec__17022 = p__17021;var id = cljs.core.nth.call(null,vec__17022,0,null);var completed = cljs.core.nth.call(null,vec__17022,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__17023,db,conn){var vec__17024 = p__17023;var id = cljs.core.nth.call(null,vec__17024,0,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__17025,db,conn){var vec__17026 = p__17025;var ids = cljs.core.nth.call(null,vec__17026,0,null);var seq__17027 = cljs.core.seq.call(null,ids);var chunk__17028 = null;var count__17029 = 0;var i__17030 = 0;while(true){
if((i__17030 < count__17029))
{var id = cljs.core._nth.call(null,chunk__17028,i__17030);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__17027,chunk__17028,count__17029,i__17030,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__17027,chunk__17028,count__17029,i__17030,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__17027,chunk__17028,count__17029,i__17030,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__17027,chunk__17028,count__17029,i__17030,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__17027,chunk__17028,count__17029,i__17030,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__17027,chunk__17028,count__17029,i__17030,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__17031 = seq__17027;
var G__17032 = chunk__17028;
var G__17033 = count__17029;
var G__17034 = (i__17030 + 1);
seq__17027 = G__17031;
chunk__17028 = G__17032;
count__17029 = G__17033;
i__17030 = G__17034;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17027);if(temp__4092__auto__)
{var seq__17027__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17027__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__17027__$1);{
var G__17035 = cljs.core.chunk_rest.call(null,seq__17027__$1);
var G__17036 = c__11077__auto__;
var G__17037 = cljs.core.count.call(null,c__11077__auto__);
var G__17038 = 0;
seq__17027 = G__17035;
chunk__17028 = G__17036;
count__17029 = G__17037;
i__17030 = G__17038;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__17027__$1);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__17027,chunk__17028,count__17029,i__17030,id,seq__17027__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__17027,chunk__17028,count__17029,i__17030,id,seq__17027__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__17027,chunk__17028,count__17029,i__17030,id,seq__17027__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__17027,chunk__17028,count__17029,i__17030,id,seq__17027__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__17027,chunk__17028,count__17029,i__17030,id,seq__17027__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__17027,chunk__17028,count__17029,i__17030,id,seq__17027__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__17039 = cljs.core.next.call(null,seq__17027__$1);
var G__17040 = null;
var G__17041 = 0;
var G__17042 = 0;
seq__17027 = G__17039;
chunk__17028 = G__17040;
count__17029 = G__17041;
i__17030 = G__17042;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__17043 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__17044 = null;var count__17045 = 0;var i__17046 = 0;while(true){
if((i__17046 < count__17045))
{var vec__17047 = cljs.core._nth.call(null,chunk__17044,i__17046);var id = cljs.core.nth.call(null,vec__17047,0,null);var completed = cljs.core.nth.call(null,vec__17047,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__17049 = seq__17043;
var G__17050 = chunk__17044;
var G__17051 = count__17045;
var G__17052 = (i__17046 + 1);
seq__17043 = G__17049;
chunk__17044 = G__17050;
count__17045 = G__17051;
i__17046 = G__17052;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17043);if(temp__4092__auto__)
{var seq__17043__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17043__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__17043__$1);{
var G__17053 = cljs.core.chunk_rest.call(null,seq__17043__$1);
var G__17054 = c__11077__auto__;
var G__17055 = cljs.core.count.call(null,c__11077__auto__);
var G__17056 = 0;
seq__17043 = G__17053;
chunk__17044 = G__17054;
count__17045 = G__17055;
i__17046 = G__17056;
continue;
}
} else
{var vec__17048 = cljs.core.first.call(null,seq__17043__$1);var id = cljs.core.nth.call(null,vec__17048,0,null);var completed = cljs.core.nth.call(null,vec__17048,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__17057 = cljs.core.next.call(null,seq__17043__$1);
var G__17058 = null;
var G__17059 = 0;
var G__17060 = 0;
seq__17043 = G__17057;
chunk__17044 = G__17058;
count__17045 = G__17059;
i__17046 = G__17060;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.services.start_services = (function start_services(app){var map__17071 = app;var map__17071__$1 = ((cljs.core.seq_QMARK_.call(null,map__17071))?cljs.core.apply.call(null,cljs.core.hash_map,map__17071):map__17071);var conn = cljs.core.get.call(null,map__17071__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.listen_BANG_.call(null,conn,(function (p__17072){var map__17073 = p__17072;var map__17073__$1 = ((cljs.core.seq_QMARK_.call(null,map__17073))?cljs.core.apply.call(null,cljs.core.hash_map,map__17073):map__17073);var report = map__17073__$1;var db_after = cljs.core.get.call(null,map__17073__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__17074 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__17074,0,null);var args = cljs.core.nth.call(null,vec__17074,1,null);return todomvc.services.handle.call(null,event,args,db_after,conn);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__17075 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__17076 = null;var count__17077 = 0;var i__17078 = 0;while(true){
if((i__17078 < count__17077))
{var map__17079 = cljs.core._nth.call(null,chunk__17076,i__17078);var map__17079__$1 = ((cljs.core.seq_QMARK_.call(null,map__17079))?cljs.core.apply.call(null,cljs.core.hash_map,map__17079):map__17079);var todo = map__17079__$1;var completed = cljs.core.get.call(null,map__17079__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__17079__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__17079__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__17081 = seq__17075;
var G__17082 = chunk__17076;
var G__17083 = count__17077;
var G__17084 = (i__17078 + 1);
seq__17075 = G__17081;
chunk__17076 = G__17082;
count__17077 = G__17083;
i__17078 = G__17084;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17075);if(temp__4092__auto__)
{var seq__17075__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17075__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__17075__$1);{
var G__17085 = cljs.core.chunk_rest.call(null,seq__17075__$1);
var G__17086 = c__11077__auto__;
var G__17087 = cljs.core.count.call(null,c__11077__auto__);
var G__17088 = 0;
seq__17075 = G__17085;
chunk__17076 = G__17086;
count__17077 = G__17087;
i__17078 = G__17088;
continue;
}
} else
{var map__17080 = cljs.core.first.call(null,seq__17075__$1);var map__17080__$1 = ((cljs.core.seq_QMARK_.call(null,map__17080))?cljs.core.apply.call(null,cljs.core.hash_map,map__17080):map__17080);var todo = map__17080__$1;var completed = cljs.core.get.call(null,map__17080__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__17080__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__17080__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__17089 = cljs.core.next.call(null,seq__17075__$1);
var G__17090 = null;
var G__17091 = 0;
var G__17092 = 0;
seq__17075 = G__17089;
chunk__17076 = G__17090;
count__17077 = G__17091;
i__17078 = G__17092;
continue;
}
}
} else
{return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){return todomvc.services.error_handler.call(null,conn);
})], null));
});

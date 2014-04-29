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
var DELETE__delegate = function (uri,p__80400){var vec__80402 = p__80400;var opts = cljs.core.nth.call(null,vec__80402,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__80400 = null;if (arguments.length > 1) {
  p__80400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__80400);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__80403){
var uri = cljs.core.first(arglist__80403);
var p__80400 = cljs.core.rest(arglist__80403);
return DELETE__delegate(uri,p__80400);
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__80404,db,conn){var vec__80405 = p__80404;var temp_id = cljs.core.nth.call(null,vec__80405,0,null);var text = cljs.core.nth.call(null,vec__80405,1,null);return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__80406,db,conn){var vec__80407 = p__80406;var id = cljs.core.nth.call(null,vec__80407,0,null);var text = cljs.core.nth.call(null,vec__80407,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__80408,db,conn){var vec__80409 = p__80408;var id = cljs.core.nth.call(null,vec__80409,0,null);var completed = cljs.core.nth.call(null,vec__80409,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__80410,db,conn){var vec__80411 = p__80410;var id = cljs.core.nth.call(null,vec__80411,0,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__80412,db,conn){var vec__80413 = p__80412;var ids = cljs.core.nth.call(null,vec__80413,0,null);var seq__80414 = cljs.core.seq.call(null,ids);var chunk__80415 = null;var count__80416 = 0;var i__80417 = 0;while(true){
if((i__80417 < count__80416))
{var id = cljs.core._nth.call(null,chunk__80415,i__80417);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__80414,chunk__80415,count__80416,i__80417,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__80414,chunk__80415,count__80416,i__80417,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__80414,chunk__80415,count__80416,i__80417,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__80414,chunk__80415,count__80416,i__80417,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__80414,chunk__80415,count__80416,i__80417,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__80414,chunk__80415,count__80416,i__80417,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__80418 = seq__80414;
var G__80419 = chunk__80415;
var G__80420 = count__80416;
var G__80421 = (i__80417 + 1);
seq__80414 = G__80418;
chunk__80415 = G__80419;
count__80416 = G__80420;
i__80417 = G__80421;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80414);if(temp__4092__auto__)
{var seq__80414__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80414__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__80414__$1);{
var G__80422 = cljs.core.chunk_rest.call(null,seq__80414__$1);
var G__80423 = c__11077__auto__;
var G__80424 = cljs.core.count.call(null,c__11077__auto__);
var G__80425 = 0;
seq__80414 = G__80422;
chunk__80415 = G__80423;
count__80416 = G__80424;
i__80417 = G__80425;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__80414__$1);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__80414,chunk__80415,count__80416,i__80417,id,seq__80414__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__80414,chunk__80415,count__80416,i__80417,id,seq__80414__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__80414,chunk__80415,count__80416,i__80417,id,seq__80414__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__80414,chunk__80415,count__80416,i__80417,id,seq__80414__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__80414,chunk__80415,count__80416,i__80417,id,seq__80414__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__80414,chunk__80415,count__80416,i__80417,id,seq__80414__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__80426 = cljs.core.next.call(null,seq__80414__$1);
var G__80427 = null;
var G__80428 = 0;
var G__80429 = 0;
seq__80414 = G__80426;
chunk__80415 = G__80427;
count__80416 = G__80428;
i__80417 = G__80429;
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__80430 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__80431 = null;var count__80432 = 0;var i__80433 = 0;while(true){
if((i__80433 < count__80432))
{var vec__80434 = cljs.core._nth.call(null,chunk__80431,i__80433);var id = cljs.core.nth.call(null,vec__80434,0,null);var completed = cljs.core.nth.call(null,vec__80434,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__80436 = seq__80430;
var G__80437 = chunk__80431;
var G__80438 = count__80432;
var G__80439 = (i__80433 + 1);
seq__80430 = G__80436;
chunk__80431 = G__80437;
count__80432 = G__80438;
i__80433 = G__80439;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80430);if(temp__4092__auto__)
{var seq__80430__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80430__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__80430__$1);{
var G__80440 = cljs.core.chunk_rest.call(null,seq__80430__$1);
var G__80441 = c__11077__auto__;
var G__80442 = cljs.core.count.call(null,c__11077__auto__);
var G__80443 = 0;
seq__80430 = G__80440;
chunk__80431 = G__80441;
count__80432 = G__80442;
i__80433 = G__80443;
continue;
}
} else
{var vec__80435 = cljs.core.first.call(null,seq__80430__$1);var id = cljs.core.nth.call(null,vec__80435,0,null);var completed = cljs.core.nth.call(null,vec__80435,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__80444 = cljs.core.next.call(null,seq__80430__$1);
var G__80445 = null;
var G__80446 = 0;
var G__80447 = 0;
seq__80430 = G__80444;
chunk__80431 = G__80445;
count__80432 = G__80446;
i__80433 = G__80447;
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
todomvc.services.start_services = (function start_services(app){var map__80458 = app;var map__80458__$1 = ((cljs.core.seq_QMARK_.call(null,map__80458))?cljs.core.apply.call(null,cljs.core.hash_map,map__80458):map__80458);var conn = cljs.core.get.call(null,map__80458__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.listen_BANG_.call(null,conn,(function (p__80459){var map__80460 = p__80459;var map__80460__$1 = ((cljs.core.seq_QMARK_.call(null,map__80460))?cljs.core.apply.call(null,cljs.core.hash_map,map__80460):map__80460);var report = map__80460__$1;var db_after = cljs.core.get.call(null,map__80460__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__80461 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__80461,0,null);var args = cljs.core.nth.call(null,vec__80461,1,null);return todomvc.services.handle.call(null,event,args,db_after,conn);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__80462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__80463 = null;var count__80464 = 0;var i__80465 = 0;while(true){
if((i__80465 < count__80464))
{var map__80466 = cljs.core._nth.call(null,chunk__80463,i__80465);var map__80466__$1 = ((cljs.core.seq_QMARK_.call(null,map__80466))?cljs.core.apply.call(null,cljs.core.hash_map,map__80466):map__80466);var todo = map__80466__$1;var completed = cljs.core.get.call(null,map__80466__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__80466__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__80466__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__80468 = seq__80462;
var G__80469 = chunk__80463;
var G__80470 = count__80464;
var G__80471 = (i__80465 + 1);
seq__80462 = G__80468;
chunk__80463 = G__80469;
count__80464 = G__80470;
i__80465 = G__80471;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80462);if(temp__4092__auto__)
{var seq__80462__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80462__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__80462__$1);{
var G__80472 = cljs.core.chunk_rest.call(null,seq__80462__$1);
var G__80473 = c__11077__auto__;
var G__80474 = cljs.core.count.call(null,c__11077__auto__);
var G__80475 = 0;
seq__80462 = G__80472;
chunk__80463 = G__80473;
count__80464 = G__80474;
i__80465 = G__80475;
continue;
}
} else
{var map__80467 = cljs.core.first.call(null,seq__80462__$1);var map__80467__$1 = ((cljs.core.seq_QMARK_.call(null,map__80467))?cljs.core.apply.call(null,cljs.core.hash_map,map__80467):map__80467);var todo = map__80467__$1;var completed = cljs.core.get.call(null,map__80467__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__80467__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__80467__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__80476 = cljs.core.next.call(null,seq__80462__$1);
var G__80477 = null;
var G__80478 = 0;
var G__80479 = 0;
seq__80462 = G__80476;
chunk__80463 = G__80477;
count__80464 = G__80478;
i__80465 = G__80479;
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

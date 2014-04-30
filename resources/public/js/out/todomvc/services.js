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
var DELETE__delegate = function (uri,p__13085){var vec__13087 = p__13085;var opts = cljs.core.nth.call(null,vec__13087,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__13085 = null;if (arguments.length > 1) {
  p__13085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__13085);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__13088){
var uri = cljs.core.first(arglist__13088);
var p__13085 = cljs.core.rest(arglist__13088);
return DELETE__delegate(uri,p__13085);
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__13089,db,conn){var vec__13090 = p__13089;var temp_id = cljs.core.nth.call(null,vec__13090,0,null);var text = cljs.core.nth.call(null,vec__13090,1,null);return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__13091,db,conn){var vec__13092 = p__13091;var id = cljs.core.nth.call(null,vec__13092,0,null);var text = cljs.core.nth.call(null,vec__13092,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__13093,db,conn){var vec__13094 = p__13093;var id = cljs.core.nth.call(null,vec__13094,0,null);var completed = cljs.core.nth.call(null,vec__13094,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__13095,db,conn){var vec__13096 = p__13095;var id = cljs.core.nth.call(null,vec__13096,0,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__13097,db,conn){var vec__13098 = p__13097;var ids = cljs.core.nth.call(null,vec__13098,0,null);var seq__13099 = cljs.core.seq.call(null,ids);var chunk__13100 = null;var count__13101 = 0;var i__13102 = 0;while(true){
if((i__13102 < count__13101))
{var id = cljs.core._nth.call(null,chunk__13100,i__13102);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__13099,chunk__13100,count__13101,i__13102,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__13099,chunk__13100,count__13101,i__13102,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__13099,chunk__13100,count__13101,i__13102,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__13099,chunk__13100,count__13101,i__13102,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__13099,chunk__13100,count__13101,i__13102,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__13099,chunk__13100,count__13101,i__13102,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__13103 = seq__13099;
var G__13104 = chunk__13100;
var G__13105 = count__13101;
var G__13106 = (i__13102 + 1);
seq__13099 = G__13103;
chunk__13100 = G__13104;
count__13101 = G__13105;
i__13102 = G__13106;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13099);if(temp__4092__auto__)
{var seq__13099__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13099__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13099__$1);{
var G__13107 = cljs.core.chunk_rest.call(null,seq__13099__$1);
var G__13108 = c__11077__auto__;
var G__13109 = cljs.core.count.call(null,c__11077__auto__);
var G__13110 = 0;
seq__13099 = G__13107;
chunk__13100 = G__13108;
count__13101 = G__13109;
i__13102 = G__13110;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__13099__$1);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__13099,chunk__13100,count__13101,i__13102,id,seq__13099__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__13099,chunk__13100,count__13101,i__13102,id,seq__13099__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__13099,chunk__13100,count__13101,i__13102,id,seq__13099__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__13099,chunk__13100,count__13101,i__13102,id,seq__13099__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__13099,chunk__13100,count__13101,i__13102,id,seq__13099__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__13099,chunk__13100,count__13101,i__13102,id,seq__13099__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__13111 = cljs.core.next.call(null,seq__13099__$1);
var G__13112 = null;
var G__13113 = 0;
var G__13114 = 0;
seq__13099 = G__13111;
chunk__13100 = G__13112;
count__13101 = G__13113;
i__13102 = G__13114;
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__13115 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__13116 = null;var count__13117 = 0;var i__13118 = 0;while(true){
if((i__13118 < count__13117))
{var vec__13119 = cljs.core._nth.call(null,chunk__13116,i__13118);var id = cljs.core.nth.call(null,vec__13119,0,null);var completed = cljs.core.nth.call(null,vec__13119,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__13121 = seq__13115;
var G__13122 = chunk__13116;
var G__13123 = count__13117;
var G__13124 = (i__13118 + 1);
seq__13115 = G__13121;
chunk__13116 = G__13122;
count__13117 = G__13123;
i__13118 = G__13124;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13115);if(temp__4092__auto__)
{var seq__13115__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13115__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13115__$1);{
var G__13125 = cljs.core.chunk_rest.call(null,seq__13115__$1);
var G__13126 = c__11077__auto__;
var G__13127 = cljs.core.count.call(null,c__11077__auto__);
var G__13128 = 0;
seq__13115 = G__13125;
chunk__13116 = G__13126;
count__13117 = G__13127;
i__13118 = G__13128;
continue;
}
} else
{var vec__13120 = cljs.core.first.call(null,seq__13115__$1);var id = cljs.core.nth.call(null,vec__13120,0,null);var completed = cljs.core.nth.call(null,vec__13120,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__13129 = cljs.core.next.call(null,seq__13115__$1);
var G__13130 = null;
var G__13131 = 0;
var G__13132 = 0;
seq__13115 = G__13129;
chunk__13116 = G__13130;
count__13117 = G__13131;
i__13118 = G__13132;
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
todomvc.services.start_services = (function start_services(app){var map__13143 = app;var map__13143__$1 = ((cljs.core.seq_QMARK_.call(null,map__13143))?cljs.core.apply.call(null,cljs.core.hash_map,map__13143):map__13143);var conn = cljs.core.get.call(null,map__13143__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.listen_BANG_.call(null,conn,(function (p__13144){var map__13145 = p__13144;var map__13145__$1 = ((cljs.core.seq_QMARK_.call(null,map__13145))?cljs.core.apply.call(null,cljs.core.hash_map,map__13145):map__13145);var report = map__13145__$1;var db_after = cljs.core.get.call(null,map__13145__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__13146 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__13146,0,null);var args = cljs.core.nth.call(null,vec__13146,1,null);return todomvc.services.handle.call(null,event,args,db_after,conn);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__13147 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__13148 = null;var count__13149 = 0;var i__13150 = 0;while(true){
if((i__13150 < count__13149))
{var map__13151 = cljs.core._nth.call(null,chunk__13148,i__13150);var map__13151__$1 = ((cljs.core.seq_QMARK_.call(null,map__13151))?cljs.core.apply.call(null,cljs.core.hash_map,map__13151):map__13151);var todo = map__13151__$1;var completed = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__13153 = seq__13147;
var G__13154 = chunk__13148;
var G__13155 = count__13149;
var G__13156 = (i__13150 + 1);
seq__13147 = G__13153;
chunk__13148 = G__13154;
count__13149 = G__13155;
i__13150 = G__13156;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13147);if(temp__4092__auto__)
{var seq__13147__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13147__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13147__$1);{
var G__13157 = cljs.core.chunk_rest.call(null,seq__13147__$1);
var G__13158 = c__11077__auto__;
var G__13159 = cljs.core.count.call(null,c__11077__auto__);
var G__13160 = 0;
seq__13147 = G__13157;
chunk__13148 = G__13158;
count__13149 = G__13159;
i__13150 = G__13160;
continue;
}
} else
{var map__13152 = cljs.core.first.call(null,seq__13147__$1);var map__13152__$1 = ((cljs.core.seq_QMARK_.call(null,map__13152))?cljs.core.apply.call(null,cljs.core.hash_map,map__13152):map__13152);var todo = map__13152__$1;var completed = cljs.core.get.call(null,map__13152__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__13152__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__13152__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__13161 = cljs.core.next.call(null,seq__13147__$1);
var G__13162 = null;
var G__13163 = 0;
var G__13164 = 0;
seq__13147 = G__13161;
chunk__13148 = G__13162;
count__13149 = G__13163;
i__13150 = G__13164;
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

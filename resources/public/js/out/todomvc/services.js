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
var DELETE__delegate = function (uri,p__13154){var vec__13156 = p__13154;var opts = cljs.core.nth.call(null,vec__13156,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__13154 = null;if (arguments.length > 1) {
  p__13154 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__13154);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__13157){
var uri = cljs.core.first(arglist__13157);
var p__13154 = cljs.core.rest(arglist__13157);
return DELETE__delegate(uri,p__13154);
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__13158,db,conn){var vec__13159 = p__13158;var temp_id = cljs.core.nth.call(null,vec__13159,0,null);var text = cljs.core.nth.call(null,vec__13159,1,null);return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_item,temp_id,id], null)], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__13160,db,conn){var vec__13161 = p__13160;var id = cljs.core.nth.call(null,vec__13161,0,null);var text = cljs.core.nth.call(null,vec__13161,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__13162,db,conn){var vec__13163 = p__13162;var id = cljs.core.nth.call(null,vec__13163,0,null);var completed = cljs.core.nth.call(null,vec__13163,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__13164,db,conn){var vec__13165 = p__13164;var id = cljs.core.nth.call(null,vec__13165,0,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__13166,db,conn){var vec__13167 = p__13166;var ids = cljs.core.nth.call(null,vec__13167,0,null);var seq__13168 = cljs.core.seq.call(null,ids);var chunk__13169 = null;var count__13170 = 0;var i__13171 = 0;while(true){
if((i__13171 < count__13170))
{var id = cljs.core._nth.call(null,chunk__13169,i__13171);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__13168,chunk__13169,count__13170,i__13171,id){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__13168,chunk__13169,count__13170,i__13171,id))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__13168,chunk__13169,count__13170,i__13171,id){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__13168,chunk__13169,count__13170,i__13171,id))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__13168,chunk__13169,count__13170,i__13171,id){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__13168,chunk__13169,count__13170,i__13171,id))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__13172 = seq__13168;
var G__13173 = chunk__13169;
var G__13174 = count__13170;
var G__13175 = (i__13171 + 1);
seq__13168 = G__13172;
chunk__13169 = G__13173;
count__13170 = G__13174;
i__13171 = G__13175;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13168);if(temp__4092__auto__)
{var seq__13168__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13168__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13168__$1);{
var G__13176 = cljs.core.chunk_rest.call(null,seq__13168__$1);
var G__13177 = c__11077__auto__;
var G__13178 = cljs.core.count.call(null,c__11077__auto__);
var G__13179 = 0;
seq__13168 = G__13176;
chunk__13169 = G__13177;
count__13170 = G__13178;
i__13171 = G__13179;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__13168__$1);todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),((function (seq__13168,chunk__13169,count__13170,i__13171,id,seq__13168__$1,temp__4092__auto__){
return (function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
});})(seq__13168,chunk__13169,count__13170,i__13171,id,seq__13168__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),((function (seq__13168,chunk__13169,count__13170,i__13171,id,seq__13168__$1,temp__4092__auto__){
return (function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,conn);
});})(seq__13168,chunk__13169,count__13170,i__13171,id,seq__13168__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),((function (seq__13168,chunk__13169,count__13170,i__13171,id,seq__13168__$1,temp__4092__auto__){
return (function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
});})(seq__13168,chunk__13169,count__13170,i__13171,id,seq__13168__$1,temp__4092__auto__))
,new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
{
var G__13180 = cljs.core.next.call(null,seq__13168__$1);
var G__13181 = null;
var G__13182 = 0;
var G__13183 = 0;
seq__13168 = G__13180;
chunk__13169 = G__13181;
count__13170 = G__13182;
i__13171 = G__13183;
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn){var seq__13184 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__13185 = null;var count__13186 = 0;var i__13187 = 0;while(true){
if((i__13187 < count__13186))
{var vec__13188 = cljs.core._nth.call(null,chunk__13185,i__13187);var id = cljs.core.nth.call(null,vec__13188,0,null);var completed = cljs.core.nth.call(null,vec__13188,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__13190 = seq__13184;
var G__13191 = chunk__13185;
var G__13192 = count__13186;
var G__13193 = (i__13187 + 1);
seq__13184 = G__13190;
chunk__13185 = G__13191;
count__13186 = G__13192;
i__13187 = G__13193;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13184);if(temp__4092__auto__)
{var seq__13184__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13184__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13184__$1);{
var G__13194 = cljs.core.chunk_rest.call(null,seq__13184__$1);
var G__13195 = c__11077__auto__;
var G__13196 = cljs.core.count.call(null,c__11077__auto__);
var G__13197 = 0;
seq__13184 = G__13194;
chunk__13185 = G__13195;
count__13186 = G__13196;
i__13187 = G__13197;
continue;
}
} else
{var vec__13189 = cljs.core.first.call(null,seq__13184__$1);var id = cljs.core.nth.call(null,vec__13189,0,null);var completed = cljs.core.nth.call(null,vec__13189,1,null);todomvc.services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn);
{
var G__13198 = cljs.core.next.call(null,seq__13184__$1);
var G__13199 = null;
var G__13200 = 0;
var G__13201 = 0;
seq__13184 = G__13198;
chunk__13185 = G__13199;
count__13186 = G__13200;
i__13187 = G__13201;
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
todomvc.services.start_services = (function start_services(app){var map__13212 = app;var map__13212__$1 = ((cljs.core.seq_QMARK_.call(null,map__13212))?cljs.core.apply.call(null,cljs.core.hash_map,map__13212):map__13212);var conn = cljs.core.get.call(null,map__13212__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.listen_BANG_.call(null,conn,(function (p__13213){var map__13214 = p__13213;var map__13214__$1 = ((cljs.core.seq_QMARK_.call(null,map__13214))?cljs.core.apply.call(null,cljs.core.hash_map,map__13214):map__13214);var report = map__13214__$1;var db_after = cljs.core.get.call(null,map__13214__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__13215 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__13215,0,null);var args = cljs.core.nth.call(null,vec__13215,1,null);return todomvc.services.handle.call(null,event,args,db_after,conn);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__13216 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__13217 = null;var count__13218 = 0;var i__13219 = 0;while(true){
if((i__13219 < count__13218))
{var map__13220 = cljs.core._nth.call(null,chunk__13217,i__13219);var map__13220__$1 = ((cljs.core.seq_QMARK_.call(null,map__13220))?cljs.core.apply.call(null,cljs.core.hash_map,map__13220):map__13220);var todo = map__13220__$1;var completed = cljs.core.get.call(null,map__13220__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__13220__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__13220__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__13222 = seq__13216;
var G__13223 = chunk__13217;
var G__13224 = count__13218;
var G__13225 = (i__13219 + 1);
seq__13216 = G__13222;
chunk__13217 = G__13223;
count__13218 = G__13224;
i__13219 = G__13225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13216);if(temp__4092__auto__)
{var seq__13216__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13216__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13216__$1);{
var G__13226 = cljs.core.chunk_rest.call(null,seq__13216__$1);
var G__13227 = c__11077__auto__;
var G__13228 = cljs.core.count.call(null,c__11077__auto__);
var G__13229 = 0;
seq__13216 = G__13226;
chunk__13217 = G__13227;
count__13218 = G__13228;
i__13219 = G__13229;
continue;
}
} else
{var map__13221 = cljs.core.first.call(null,seq__13216__$1);var map__13221__$1 = ((cljs.core.seq_QMARK_.call(null,map__13221))?cljs.core.apply.call(null,cljs.core.hash_map,map__13221):map__13221);var todo = map__13221__$1;var completed = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"id","id",1013907597));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.seed_item,id,text,completed], null)], null));
{
var G__13230 = cljs.core.next.call(null,seq__13216__$1);
var G__13231 = null;
var G__13232 = 0;
var G__13233 = 0;
seq__13216 = G__13230;
chunk__13217 = G__13231;
count__13218 = G__13232;
i__13219 = G__13233;
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

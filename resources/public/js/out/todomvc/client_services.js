// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.client_services');
goog.require('cljs.core');
goog.require('datascript');
goog.require('datascript');
goog.require('todomvc.transact');
goog.require('todomvc.transact');
todomvc.client_services.handle = (function (){var method_table__11187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11191__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,db,conn,local_conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11191__auto__,method_table__11187__auto__,prefer_table__11188__auto__,method_cache__11189__auto__,cached_hierarchy__11190__auto__));
})();
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__13113,db,conn,local_conn){var vec__13114 = p__13113;var temp_id = cljs.core.nth.call(null,vec__13114,0,null);var text = cljs.core.nth.call(null,vec__13114,1,null);var tx = datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),false], null)], null));var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",3880764886).cljs$core$IFn$_invoke$arity$1(tx),-1);return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_item,temp_id,id], null)], null));
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__13115,db,conn,local_conn){var vec__13116 = p__13115;var id = cljs.core.nth.call(null,vec__13116,0,null);var text = cljs.core.nth.call(null,vec__13116,1,null);datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null)], null));
return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_edit,id], null)], null));
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__13117,db,conn,local_conn){var vec__13118 = p__13117;var id = cljs.core.nth.call(null,vec__13118,0,null);var completed = cljs.core.nth.call(null,vec__13118,1,null);return datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null)], null));
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__13119,db,conn,local_conn){var vec__13120 = p__13119;var id = cljs.core.nth.call(null,vec__13120,0,null);return datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null)], null));
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__13121,db,conn,local_conn){var vec__13122 = p__13121;var ids = cljs.core.nth.call(null,vec__13122,0,null);return datascript.transact_BANG_.call(null,local_conn,(function (){var iter__11046__auto__ = (function iter__13123(s__13124){return (new cljs.core.LazySeq(null,(function (){var s__13124__$1 = s__13124;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13124__$1);if(temp__4092__auto__)
{var s__13124__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13124__$2))
{var c__11044__auto__ = cljs.core.chunk_first.call(null,s__13124__$2);var size__11045__auto__ = cljs.core.count.call(null,c__11044__auto__);var b__13126 = cljs.core.chunk_buffer.call(null,size__11045__auto__);if((function (){var i__13125 = 0;while(true){
if((i__13125 < size__11045__auto__))
{var id = cljs.core._nth.call(null,c__11044__auto__,i__13125);cljs.core.chunk_append.call(null,b__13126,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null));
{
var G__13127 = (i__13125 + 1);
i__13125 = G__13127;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13126),iter__13123.call(null,cljs.core.chunk_rest.call(null,s__13124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13126),null);
}
} else
{var id = cljs.core.first.call(null,s__13124__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null),iter__13123.call(null,cljs.core.rest.call(null,s__13124__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11046__auto__.call(null,ids);
})());
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn,local_conn){var seq__13128 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__13129 = null;var count__13130 = 0;var i__13131 = 0;while(true){
if((i__13131 < count__13130))
{var vec__13132 = cljs.core._nth.call(null,chunk__13129,i__13131);var id = cljs.core.nth.call(null,vec__13132,0,null);var completed = cljs.core.nth.call(null,vec__13132,1,null);todomvc.client_services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn,local_conn);
{
var G__13134 = seq__13128;
var G__13135 = chunk__13129;
var G__13136 = count__13130;
var G__13137 = (i__13131 + 1);
seq__13128 = G__13134;
chunk__13129 = G__13135;
count__13130 = G__13136;
i__13131 = G__13137;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13128);if(temp__4092__auto__)
{var seq__13128__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13128__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__13128__$1);{
var G__13138 = cljs.core.chunk_rest.call(null,seq__13128__$1);
var G__13139 = c__11077__auto__;
var G__13140 = cljs.core.count.call(null,c__11077__auto__);
var G__13141 = 0;
seq__13128 = G__13138;
chunk__13129 = G__13139;
count__13130 = G__13140;
i__13131 = G__13141;
continue;
}
} else
{var vec__13133 = cljs.core.first.call(null,seq__13128__$1);var id = cljs.core.nth.call(null,vec__13133,0,null);var completed = cljs.core.nth.call(null,vec__13133,1,null);todomvc.client_services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn,local_conn);
{
var G__13142 = cljs.core.next.call(null,seq__13128__$1);
var G__13143 = null;
var G__13144 = 0;
var G__13145 = 0;
seq__13128 = G__13142;
chunk__13129 = G__13143;
count__13130 = G__13144;
i__13131 = G__13145;
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
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.client_services.start_services = (function start_services(app){var map__13150 = app;var map__13150__$1 = ((cljs.core.seq_QMARK_.call(null,map__13150))?cljs.core.apply.call(null,cljs.core.hash_map,map__13150):map__13150);var conn = cljs.core.get.call(null,map__13150__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));var local_conn = datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);return datascript.listen_BANG_.call(null,conn,(function (p__13151){var map__13152 = p__13151;var map__13152__$1 = ((cljs.core.seq_QMARK_.call(null,map__13152))?cljs.core.apply.call(null,cljs.core.hash_map,map__13152):map__13152);var report = map__13152__$1;var db_after = cljs.core.get.call(null,map__13152__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__13153 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__13153,0,null);var args = cljs.core.nth.call(null,vec__13153,1,null);return todomvc.client_services.handle.call(null,event,args,db_after,conn,local_conn);
}));
});

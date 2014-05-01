// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.transact');
goog.require('cljs.core');
goog.require('cljs_uuid_utils');
goog.require('cljs_uuid_utils');
goog.require('datascript');
goog.require('datascript');
/**
* @param {...*} var_args
*/
todomvc.transact.log_event = (function() { 
var log_event__delegate = function (db,event,args){var evente = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),-100,new cljs.core.Keyword(null,"event","event",1110795788),event,new cljs.core.Keyword(null,"args","args",1016906831),args], null);var temp__4090__auto__ = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"last-event","last-event",1851999253)], null)], null)], null),db));if(cljs.core.truth_(temp__4090__auto__))
{var prev_event_eid = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,evente,new cljs.core.Keyword(null,"prev-event","prev-event",3549456882),prev_event_eid),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",3416849171),prev_event_eid,new cljs.core.Keyword(null,"last-event","last-event",1851999253)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [evente], null);
}
};
var log_event = function (db,event,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return log_event__delegate.call(this,db,event,args);};
log_event.cljs$lang$maxFixedArity = 2;
log_event.cljs$lang$applyTo = (function (arglist__13234){
var db = cljs.core.first(arglist__13234);
arglist__13234 = cljs.core.next(arglist__13234);
var event = cljs.core.first(arglist__13234);
var args = cljs.core.rest(arglist__13234);
return log_event__delegate(db,event,args);
});
log_event.cljs$core$IFn$_invoke$arity$variadic = log_event__delegate;
return log_event;
})()
;
todomvc.transact.set_filter = (function set_filter(db,this_filter){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"set-filter","set-filter",2331384501),this_filter], null),(function (){var e = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"filter","filter",4034379498)], null)], null)], null),db));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"filter","filter",4034379498),this_filter], null);
})()], null);
});
todomvc.transact.seed_item = (function seed_item(db,id,text,completed){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),completed,new cljs.core.Keyword(null,"commited","commited",4706580360),true], null)], null);
});
todomvc.transact.remove_item = (function remove_item(db,id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null),(function (){var e = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db,id));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),e], null);
})()], null);
});
todomvc.transact.clear_completed = (function clear_completed(db){var eids_PLUS_ids = datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),cljs.core.map.call(null,cljs.core.second,eids_PLUS_ids)], null)], null),(function (){var iter__11046__auto__ = (function iter__13239(s__13240){return (new cljs.core.LazySeq(null,(function (){var s__13240__$1 = s__13240;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13240__$1);if(temp__4092__auto__)
{var s__13240__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13240__$2))
{var c__11044__auto__ = cljs.core.chunk_first.call(null,s__13240__$2);var size__11045__auto__ = cljs.core.count.call(null,c__11044__auto__);var b__13242 = cljs.core.chunk_buffer.call(null,size__11045__auto__);if((function (){var i__13241 = 0;while(true){
if((i__13241 < size__11045__auto__))
{var e = cljs.core._nth.call(null,c__11044__auto__,i__13241);cljs.core.chunk_append.call(null,b__13242,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),e], null));
{
var G__13243 = (i__13241 + 1);
i__13241 = G__13243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13242),iter__13239.call(null,cljs.core.chunk_rest.call(null,s__13240__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13242),null);
}
} else
{var e = cljs.core.first.call(null,s__13240__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),e], null),iter__13239.call(null,cljs.core.rest.call(null,s__13240__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11046__auto__.call(null,cljs.core.map.call(null,cljs.core.first,eids_PLUS_ids));
})());
});
todomvc.transact.toggle_item = (function toggle_item(db,id){var vec__13245 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null)], null)], null),db,id));var e = cljs.core.nth.call(null,vec__13245,0,null);var completed = cljs.core.nth.call(null,vec__13245,1,null);var completed__$1 = cljs.core.not.call(null,completed);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,completed__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"completed","completed",3905939901),completed__$1], null)], null);
});
todomvc.transact.toggle_all = (function toggle_all(db){var e_PLUS_id_PLUS_completed = datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null)], null)], null),db);var target = !(cljs.core.every_QMARK_.call(null,((function (e_PLUS_id_PLUS_completed){
return (function (p__13256){var vec__13257 = p__13256;var _ = cljs.core.nth.call(null,vec__13257,0,null);var ___$1 = cljs.core.nth.call(null,vec__13257,1,null);var completed = cljs.core.nth.call(null,vec__13257,2,null);return completed;
});})(e_PLUS_id_PLUS_completed))
,e_PLUS_id_PLUS_completed));return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858)], null)], null),(function (){var iter__11046__auto__ = (function iter__13258(s__13259){return (new cljs.core.LazySeq(null,(function (){var s__13259__$1 = s__13259;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__13259__$1);if(temp__4092__auto__)
{var s__13259__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13259__$2))
{var c__11044__auto__ = cljs.core.chunk_first.call(null,s__13259__$2);var size__11045__auto__ = cljs.core.count.call(null,c__11044__auto__);var b__13261 = cljs.core.chunk_buffer.call(null,size__11045__auto__);if((function (){var i__13260 = 0;while(true){
if((i__13260 < size__11045__auto__))
{var vec__13264 = cljs.core._nth.call(null,c__11044__auto__,i__13260);var e = cljs.core.nth.call(null,vec__13264,0,null);var id = cljs.core.nth.call(null,vec__13264,1,null);var completed = cljs.core.nth.call(null,vec__13264,2,null);if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.chunk_append.call(null,b__13261,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"completed","completed",3905939901),target], null));
{
var G__13266 = (i__13260 + 1);
i__13260 = G__13266;
continue;
}
} else
{{
var G__13267 = (i__13260 + 1);
i__13260 = G__13267;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13261),iter__13258.call(null,cljs.core.chunk_rest.call(null,s__13259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13261),null);
}
} else
{var vec__13265 = cljs.core.first.call(null,s__13259__$2);var e = cljs.core.nth.call(null,vec__13265,0,null);var id = cljs.core.nth.call(null,vec__13265,1,null);var completed = cljs.core.nth.call(null,vec__13265,2,null);if(cljs.core._EQ_.call(null,completed,!(target)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"completed","completed",3905939901),target], null),iter__13258.call(null,cljs.core.rest.call(null,s__13259__$2)));
} else
{{
var G__13268 = cljs.core.rest.call(null,s__13259__$2);
s__13259__$1 = G__13268;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__11046__auto__.call(null,e_PLUS_id_PLUS_completed);
})());
});
todomvc.transact.error = (function error(db,msg){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"error","error",1110689146),msg], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"error","error",1110689146),msg], null)], null);
});
todomvc.transact.create_item = (function create_item(db,text){var temp_id = cljs_uuid_utils.make_random_uuid.call(null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"create-item","create-item",4768804022),temp_id,text], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"commited","commited",4706580360),false,new cljs.core.Keyword(null,"completed","completed",3905939901),false,new cljs.core.Keyword(null,"text","text",1017460895),text], null)], null);
});
todomvc.transact.commit_item = (function commit_item(db,temp_id,id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null),(function (){var e = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db,temp_id));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),e,new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"commited","commited",4706580360),true], null);
})()], null);
});
todomvc.transact.start_edit = (function start_edit(db,id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"start-edit","start-edit",3689098247),id], null),(function (){var e = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db,id));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"editing","editing",3420907786),true], null);
})()], null);
});
todomvc.transact.complete_edit = (function complete_edit(db,id,text){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),id,text], null)], null),(function (){var e = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db,id));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"editing","editing",3420907786),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"commited","commited",4706580360),false], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"text","text",1017460895),text], null)], null);
})());
});
todomvc.transact.commit_edit = (function commit_edit(db,id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.log_event,new cljs.core.Keyword(null,"commit-edit","commit-edit",2479195218),id], null),(function (){var e = cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db,id));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),e,new cljs.core.Keyword(null,"commited","commited",4706580360),true], null);
})()], null);
});

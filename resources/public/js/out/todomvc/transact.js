// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.transact');
goog.require('cljs.core');
todomvc.transact.update_item = (function update_item(state,id,f){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.map.call(null,(function (p1__18034_SHARP_){if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__18034_SHARP_)))
{return f.call(null,p1__18034_SHARP_);
} else
{return p1__18034_SHARP_;
}
}),items);
}));
});
todomvc.transact.handle = (function (){var method_table__11182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11186__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (state,trans){return cljs.core.first.call(null,trans);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11186__auto__,method_table__11182__auto__,prefer_table__11183__auto__,method_cache__11184__auto__,cached_hierarchy__11185__auto__));
})();
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"set-filter","set-filter",2331384501),(function (state,p__18035){var vec__18036 = p__18035;var _ = cljs.core.nth.call(null,vec__18036,0,null);var this_filter = cljs.core.nth.call(null,vec__18036,1,null);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),this_filter);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),(function (state,p__18037){var vec__18038 = p__18037;var _ = cljs.core.nth.call(null,vec__18038,0,null);var id = cljs.core.nth.call(null,vec__18038,1,null);var text = cljs.core.nth.call(null,vec__18038,2,null);var completed = cljs.core.nth.call(null,vec__18038,3,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),completed,new cljs.core.Keyword(null,"commited","commited",4706580360),true], null));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"add-item","add-item",4026553393),(function (p__18039,p__18040){var map__18041 = p__18039;var map__18041__$1 = ((cljs.core.seq_QMARK_.call(null,map__18041))?cljs.core.apply.call(null,cljs.core.hash_map,map__18041):map__18041);var state = map__18041__$1;var next_id = cljs.core.get.call(null,map__18041__$1,new cljs.core.Keyword(null,"next-id","next-id",2860930471));var vec__18042 = p__18040;var _ = cljs.core.nth.call(null,vec__18042,0,null);var id = cljs.core.nth.call(null,vec__18042,1,null);var text = cljs.core.nth.call(null,vec__18042,2,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"commited","commited",4706580360),false], null));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),(function (state,p__18043){var vec__18044 = p__18043;var _ = cljs.core.nth.call(null,vec__18044,0,null);var temp_id = cljs.core.nth.call(null,vec__18044,1,null);var id = cljs.core.nth.call(null,vec__18044,2,null);return todomvc.transact.update_item.call(null,state,temp_id,(function (item){return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"commited","commited",4706580360),true);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (state,p__18046){var vec__18047 = p__18046;var _ = cljs.core.nth.call(null,vec__18047,0,null);var id = cljs.core.nth.call(null,vec__18047,1,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.remove.call(null,(function (p1__18045_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__18045_SHARP_));
}),items);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (state,p__18049){var vec__18050 = p__18049;var _ = cljs.core.nth.call(null,vec__18050,0,null);var id = cljs.core.nth.call(null,vec__18050,1,null);var completed = cljs.core.nth.call(null,vec__18050,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__18048_SHARP_){return cljs.core.assoc.call(null,p1__18048_SHARP_,new cljs.core.Keyword(null,"completed","completed",3905939901),completed);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"start-edit","start-edit",3689098247),(function (state,p__18051){var vec__18052 = p__18051;var _ = cljs.core.nth.call(null,vec__18052,0,null);var id = cljs.core.nth.call(null,vec__18052,1,null);return todomvc.transact.update_item.call(null,state,id,(function (item){var G__18053 = item;var G__18053__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"commited","commited",4706580360).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc.call(null,G__18053,new cljs.core.Keyword(null,"editing","editing",3420907786),true):G__18053);return G__18053__$1;
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (state,p__18055){var vec__18056 = p__18055;var _ = cljs.core.nth.call(null,vec__18056,0,null);var id = cljs.core.nth.call(null,vec__18056,1,null);var text = cljs.core.nth.call(null,vec__18056,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__18054_SHARP_){return cljs.core.assoc.call(null,p1__18054_SHARP_,new cljs.core.Keyword(null,"editing","editing",3420907786),false,new cljs.core.Keyword(null,"text","text",1017460895),text);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"error","error",1110689146),(function (state,_){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"error","error",1110689146),true);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,_){return state;
}));
todomvc.transact.all_done_QMARK_ = (function all_done_QMARK_(p__18057){var map__18059 = p__18057;var map__18059__$1 = ((cljs.core.seq_QMARK_.call(null,map__18059))?cljs.core.apply.call(null,cljs.core.hash_map,map__18059):map__18059);var state = map__18059__$1;var items = cljs.core.get.call(null,map__18059__$1,new cljs.core.Keyword(null,"items","items",1114430258));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));
});
/**
* Returns a new, empty application state.
*/
todomvc.transact.initial_state = (function initial_state(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),true,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),new cljs.core.Keyword(null,"all","all",1014000915),new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY], null);
});
todomvc.transact.main = (function main(state,transaction){return todomvc.transact.all_done_QMARK_.call(null,cljs.core.update_in.call(null,todomvc.transact.handle.call(null,state,transaction),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.vec));
});
todomvc.transact.try_transactions = (function try_transactions(transactions){return cljs.core.reduce.call(null,todomvc.transact.main,todomvc.transact.initial_state.call(null),transactions);
});

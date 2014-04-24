// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.transact');
goog.require('cljs.core');
todomvc.transact.update_item = (function update_item(state,id,f){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.map.call(null,(function (p1__16933_SHARP_){if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__16933_SHARP_)))
{return f.call(null,p1__16933_SHARP_);
} else
{return p1__16933_SHARP_;
}
}),items);
}));
});
todomvc.transact.handle = (function (){var method_table__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11254__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11255__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11256__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11257__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (state,trans){return cljs.core.first.call(null,trans);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11257__auto__,method_table__11253__auto__,prefer_table__11254__auto__,method_cache__11255__auto__,cached_hierarchy__11256__auto__));
})();
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"set-filter","set-filter",2331384501),(function (state,p__16934){var vec__16935 = p__16934;var _ = cljs.core.nth.call(null,vec__16935,0,null);var this_filter = cljs.core.nth.call(null,vec__16935,1,null);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),this_filter);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),(function (state,p__16936){var vec__16937 = p__16936;var _ = cljs.core.nth.call(null,vec__16937,0,null);var id = cljs.core.nth.call(null,vec__16937,1,null);var text = cljs.core.nth.call(null,vec__16937,2,null);var completed = cljs.core.nth.call(null,vec__16937,3,null);if(cljs.core.truth_(cljs.core.some.call(null,(function (t){console.log([cljs.core.str("checking doubles"),cljs.core.str(t),cljs.core.str(id)].join(''));
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(t),id);
}),new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(state))))
{return state;
} else
{return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),completed,new cljs.core.Keyword(null,"commited","commited",4706580360),true], null));
}
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"add-item","add-item",4026553393),(function (p__16938,p__16939){var map__16940 = p__16938;var map__16940__$1 = ((cljs.core.seq_QMARK_.call(null,map__16940))?cljs.core.apply.call(null,cljs.core.hash_map,map__16940):map__16940);var state = map__16940__$1;var next_id = cljs.core.get.call(null,map__16940__$1,new cljs.core.Keyword(null,"next-id","next-id",2860930471));var vec__16941 = p__16939;var _ = cljs.core.nth.call(null,vec__16941,0,null);var id = cljs.core.nth.call(null,vec__16941,1,null);var text = cljs.core.nth.call(null,vec__16941,2,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"commited","commited",4706580360),false], null));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),(function (state,p__16942){var vec__16943 = p__16942;var _ = cljs.core.nth.call(null,vec__16943,0,null);var temp_id = cljs.core.nth.call(null,vec__16943,1,null);var id = cljs.core.nth.call(null,vec__16943,2,null);return todomvc.transact.update_item.call(null,state,temp_id,(function (item){return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"commited","commited",4706580360),true);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (state,p__16945){var vec__16946 = p__16945;var _ = cljs.core.nth.call(null,vec__16946,0,null);var id = cljs.core.nth.call(null,vec__16946,1,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.remove.call(null,(function (p1__16944_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__16944_SHARP_));
}),items);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (state,p__16948){var vec__16949 = p__16948;var _ = cljs.core.nth.call(null,vec__16949,0,null);var id = cljs.core.nth.call(null,vec__16949,1,null);var completed = cljs.core.nth.call(null,vec__16949,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__16947_SHARP_){return cljs.core.assoc.call(null,p1__16947_SHARP_,new cljs.core.Keyword(null,"completed","completed",3905939901),completed);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"start-edit","start-edit",3689098247),(function (state,p__16950){var vec__16951 = p__16950;var _ = cljs.core.nth.call(null,vec__16951,0,null);var id = cljs.core.nth.call(null,vec__16951,1,null);return todomvc.transact.update_item.call(null,state,id,(function (item){var G__16952 = item;var G__16952__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"commited","commited",4706580360).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc.call(null,G__16952,new cljs.core.Keyword(null,"editing","editing",3420907786),true):G__16952);return G__16952__$1;
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (state,p__16954){var vec__16955 = p__16954;var _ = cljs.core.nth.call(null,vec__16955,0,null);var id = cljs.core.nth.call(null,vec__16955,1,null);var text = cljs.core.nth.call(null,vec__16955,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__16953_SHARP_){return cljs.core.assoc.call(null,p1__16953_SHARP_,new cljs.core.Keyword(null,"editing","editing",3420907786),false,new cljs.core.Keyword(null,"text","text",1017460895),text);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"error","error",1110689146),(function (state,_){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"error","error",1110689146),true);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,_){return state;
}));
todomvc.transact.all_done_QMARK_ = (function all_done_QMARK_(p__16956){var map__16958 = p__16956;var map__16958__$1 = ((cljs.core.seq_QMARK_.call(null,map__16958))?cljs.core.apply.call(null,cljs.core.hash_map,map__16958):map__16958);var state = map__16958__$1;var items = cljs.core.get.call(null,map__16958__$1,new cljs.core.Keyword(null,"items","items",1114430258));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));
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

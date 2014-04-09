// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.transact');
goog.require('cljs.core');
todomvc.transact.update_item = (function update_item(state,id,f){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.map.call(null,(function (p1__18406_SHARP_){if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__18406_SHARP_)))
{return f.call(null,p1__18406_SHARP_);
} else
{return p1__18406_SHARP_;
}
}),items);
}));
});
todomvc.transact.handle = (function (){var method_table__11166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (state,trans){return cljs.core.first.call(null,trans);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11170__auto__,method_table__11166__auto__,prefer_table__11167__auto__,method_cache__11168__auto__,cached_hierarchy__11169__auto__));
})();
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"set-filter","set-filter",2331384501),(function (state,p__18407){var vec__18408 = p__18407;var _ = cljs.core.nth.call(null,vec__18408,0,null);var this_filter = cljs.core.nth.call(null,vec__18408,1,null);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),this_filter);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),(function (state,p__18409){var vec__18410 = p__18409;var _ = cljs.core.nth.call(null,vec__18410,0,null);var id = cljs.core.nth.call(null,vec__18410,1,null);var text = cljs.core.nth.call(null,vec__18410,2,null);var completed = cljs.core.nth.call(null,vec__18410,3,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),completed,new cljs.core.Keyword(null,"commited","commited",4706580360),true], null));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"add-item","add-item",4026553393),(function (p__18411,p__18412){var map__18413 = p__18411;var map__18413__$1 = ((cljs.core.seq_QMARK_.call(null,map__18413))?cljs.core.apply.call(null,cljs.core.hash_map,map__18413):map__18413);var state = map__18413__$1;var next_id = cljs.core.get.call(null,map__18413__$1,new cljs.core.Keyword(null,"next-id","next-id",2860930471));var vec__18414 = p__18412;var _ = cljs.core.nth.call(null,vec__18414,0,null);var id = cljs.core.nth.call(null,vec__18414,1,null);var text = cljs.core.nth.call(null,vec__18414,2,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"commited","commited",4706580360),false], null));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),(function (state,p__18415){var vec__18416 = p__18415;var _ = cljs.core.nth.call(null,vec__18416,0,null);var temp_id = cljs.core.nth.call(null,vec__18416,1,null);var id = cljs.core.nth.call(null,vec__18416,2,null);return todomvc.transact.update_item.call(null,state,temp_id,(function (item){return cljs.core.assoc.call(null,item,new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"commited","commited",4706580360),true);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (state,p__18418){var vec__18419 = p__18418;var _ = cljs.core.nth.call(null,vec__18419,0,null);var id = cljs.core.nth.call(null,vec__18419,1,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.remove.call(null,(function (p1__18417_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__18417_SHARP_));
}),items);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (state,p__18421){var vec__18422 = p__18421;var _ = cljs.core.nth.call(null,vec__18422,0,null);var id = cljs.core.nth.call(null,vec__18422,1,null);var completed = cljs.core.nth.call(null,vec__18422,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__18420_SHARP_){return cljs.core.assoc.call(null,p1__18420_SHARP_,new cljs.core.Keyword(null,"completed","completed",3905939901),completed);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (state,_){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.remove.call(null,(function (p1__18423_SHARP_){return new cljs.core.Keyword(null,"completed","completed",3905939901).cljs$core$IFn$_invoke$arity$1(p1__18423_SHARP_);
}),items);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"start-edit","start-edit",3689098247),(function (state,p__18424){var vec__18425 = p__18424;var _ = cljs.core.nth.call(null,vec__18425,0,null);var id = cljs.core.nth.call(null,vec__18425,1,null);return todomvc.transact.update_item.call(null,state,id,(function (item){var G__18426 = item;var G__18426__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"commited","commited",4706580360).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.assoc.call(null,G__18426,new cljs.core.Keyword(null,"editing","editing",3420907786),true):G__18426);return G__18426__$1;
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (state,p__18428){var vec__18429 = p__18428;var _ = cljs.core.nth.call(null,vec__18429,0,null);var id = cljs.core.nth.call(null,vec__18429,1,null);var text = cljs.core.nth.call(null,vec__18429,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__18427_SHARP_){return cljs.core.assoc.call(null,p1__18427_SHARP_,new cljs.core.Keyword(null,"editing","editing",3420907786),false,new cljs.core.Keyword(null,"text","text",1017460895),text);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__18431,_){var map__18432 = p__18431;var map__18432__$1 = ((cljs.core.seq_QMARK_.call(null,map__18432))?cljs.core.apply.call(null,cljs.core.hash_map,map__18432):map__18432);var state = map__18432__$1;var items = cljs.core.get.call(null,map__18432__$1,new cljs.core.Keyword(null,"items","items",1114430258));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.map.call(null,(function (p1__18430_SHARP_){return cljs.core.assoc.call(null,p1__18430_SHARP_,new cljs.core.Keyword(null,"completed","completed",3905939901),target);
}),items));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"error","error",1110689146),(function (state,_){console.log([cljs.core.str("hahahah"),cljs.core.str(state)].join(''));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"error","error",1110689146),true);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,_){return state;
}));
todomvc.transact.all_done_QMARK_ = (function all_done_QMARK_(p__18433){var map__18435 = p__18433;var map__18435__$1 = ((cljs.core.seq_QMARK_.call(null,map__18435))?cljs.core.apply.call(null,cljs.core.hash_map,map__18435):map__18435);var state = map__18435__$1;var items = cljs.core.get.call(null,map__18435__$1,new cljs.core.Keyword(null,"items","items",1114430258));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));
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

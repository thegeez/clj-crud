// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.transact');
goog.require('cljs.core');
todomvc.transact.update_item = (function update_item(state,id,f){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.map.call(null,(function (p1__16551_SHARP_){if(cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__16551_SHARP_)))
{return f.call(null,p1__16551_SHARP_);
} else
{return p1__16551_SHARP_;
}
}),items);
}));
});
todomvc.transact.handle = (function (){var method_table__11120__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11123__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11124__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (state,trans){return cljs.core.first.call(null,trans);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11124__auto__,method_table__11120__auto__,prefer_table__11121__auto__,method_cache__11122__auto__,cached_hierarchy__11123__auto__));
})();
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"set-filter","set-filter",2331384501),(function (state,p__16552){var vec__16553 = p__16552;var _ = cljs.core.nth.call(null,vec__16553,0,null);var this_filter = cljs.core.nth.call(null,vec__16553,1,null);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),this_filter);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"add-item","add-item",4026553393),(function (p__16554,p__16555){var map__16556 = p__16554;var map__16556__$1 = ((cljs.core.seq_QMARK_.call(null,map__16556))?cljs.core.apply.call(null,cljs.core.hash_map,map__16556):map__16556);var state = map__16556__$1;var next_id = cljs.core.get.call(null,map__16556__$1,new cljs.core.Keyword(null,"next-id","next-id",2860930471));var vec__16557 = p__16555;var _ = cljs.core.nth.call(null,vec__16557,0,null);var id = cljs.core.nth.call(null,vec__16557,1,null);var text = cljs.core.nth.call(null,vec__16557,2,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"commited","commited",4706580360),false], null));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (state,p__16559){var vec__16560 = p__16559;var _ = cljs.core.nth.call(null,vec__16560,0,null);var id = cljs.core.nth.call(null,vec__16560,1,null);return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.remove.call(null,(function (p1__16558_SHARP_){return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(p1__16558_SHARP_));
}),items);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (state,p__16562){var vec__16563 = p__16562;var _ = cljs.core.nth.call(null,vec__16563,0,null);var id = cljs.core.nth.call(null,vec__16563,1,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__16561_SHARP_){return cljs.core.update_in.call(null,p1__16561_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed","completed",3905939901)], null),cljs.core.not);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (state,_){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1114430258)], null),(function (items){return cljs.core.remove.call(null,(function (p1__16564_SHARP_){return new cljs.core.Keyword(null,"completed","completed",3905939901).cljs$core$IFn$_invoke$arity$1(p1__16564_SHARP_);
}),items);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"start-edit","start-edit",3689098247),(function (state,p__16566){var vec__16567 = p__16566;var _ = cljs.core.nth.call(null,vec__16567,0,null);var id = cljs.core.nth.call(null,vec__16567,1,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__16565_SHARP_){return cljs.core.assoc.call(null,p1__16565_SHARP_,new cljs.core.Keyword(null,"editing","editing",3420907786),true);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (state,p__16569){var vec__16570 = p__16569;var _ = cljs.core.nth.call(null,vec__16570,0,null);var id = cljs.core.nth.call(null,vec__16570,1,null);var text = cljs.core.nth.call(null,vec__16570,2,null);return todomvc.transact.update_item.call(null,state,id,(function (p1__16568_SHARP_){return cljs.core.assoc.call(null,p1__16568_SHARP_,new cljs.core.Keyword(null,"editing","editing",3420907786),false,new cljs.core.Keyword(null,"text","text",1017460895),text);
}));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__16572,_){var map__16573 = p__16572;var map__16573__$1 = ((cljs.core.seq_QMARK_.call(null,map__16573))?cljs.core.apply.call(null,cljs.core.hash_map,map__16573):map__16573);var state = map__16573__$1;var items = cljs.core.get.call(null,map__16573__$1,new cljs.core.Keyword(null,"items","items",1114430258));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.map.call(null,(function (p1__16571_SHARP_){return cljs.core.assoc.call(null,p1__16571_SHARP_,new cljs.core.Keyword(null,"completed","completed",3905939901),target);
}),items));
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"error","error",1110689146),(function (state,_){console.log([cljs.core.str("hahahah"),cljs.core.str(state)].join(''));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"error","error",1110689146),true);
}));
cljs.core._add_method.call(null,todomvc.transact.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (state,_){return state;
}));
todomvc.transact.all_done_QMARK_ = (function all_done_QMARK_(p__16574){var map__16576 = p__16574;var map__16576__$1 = ((cljs.core.seq_QMARK_.call(null,map__16576))?cljs.core.apply.call(null,cljs.core.hash_map,map__16576):map__16576);var state = map__16576__$1;var items = cljs.core.get.call(null,map__16576__$1,new cljs.core.Keyword(null,"items","items",1114430258));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));
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

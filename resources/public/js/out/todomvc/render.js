// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('datascript');
goog.require('datascript');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('quiescent');
goog.require('cljs.core.async');
/**
* Return true if an event was the enter key
*/
todomvc.render.enter_key_QMARK_ = (function enter_key_QMARK_(evt){return cljs.core._EQ_.call(null,13,evt.keyCode);
});
/**
* The page's header, which includes the primary input
*/
todomvc.render.Header = quiescent.component.call(null,(function (_,channel){return quiescent.dom.header.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"header"], null),quiescent.dom.h1.call(null,cljs.core.PersistentArrayMap.EMPTY,"todos"),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"What needs to be done?",new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),(function (evt){if(todomvc.render.enter_key_QMARK_.call(null,evt))
{var text = evt.target.value;cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-item","create-item",4768804022),text], null));
return evt.target.value = "";
} else
{return null;
}
}),new cljs.core.Keyword(null,"autoFocus","autoFocus",2651959259),true], null)));
}));
/**
* A filtering button
*/
todomvc.render.ItemFilter = quiescent.component.call(null,(function (current_filter,this_filter,label,href,channel){return quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),((cljs.core._EQ_.call(null,current_filter,this_filter))?"selected":null),new cljs.core.Keyword(null,"href","href",1017115293),href,new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-filter","set-filter",2331384501),this_filter], null));
return false;
})], null),label));
}));
/**
* Buttons to filter the list
*/
todomvc.render.Filters = quiescent.component.call(null,(function (current_filter,channel){return quiescent.dom.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"filters"], null),todomvc.render.ItemFilter.call(null,current_filter,new cljs.core.Keyword(null,"all","all",1014000915),"All","#/",channel),todomvc.render.ItemFilter.call(null,current_filter,new cljs.core.Keyword(null,"active","active",3885920888),"Active","#/active",channel),todomvc.render.ItemFilter.call(null,current_filter,new cljs.core.Keyword(null,"completed","completed",3905939901),"Completed","#/completed",channel));
}));
/**
* The footer at the bottom of the list
*/
todomvc.render.Footer = quiescent.component.call(null,(function (p__16456,channel){var vec__16457 = p__16456;var current_filter = cljs.core.nth.call(null,vec__16457,0,null);var items = cljs.core.nth.call(null,vec__16457,1,null);var completed = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var left = (cljs.core.count.call(null,items) - completed);return quiescent.dom.footer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"footer"], null),quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"todo-count"], null),quiescent.dom.strong.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(left),cljs.core.str(" item(s) left")].join(''))),todomvc.render.Filters.call(null,current_filter,channel),(((0 < completed))?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"clear-completed",new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053)], null));
})], null),[cljs.core.str("Clear completed ("),cljs.core.str(completed),cljs.core.str(")")].join('')):null));
}));
/**
* Convenience function for creating class names from sets. Nils will
* not be included.
*/
todomvc.render.class_name = (function class_name(classes){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.map.call(null,cljs.core.identity,classes)));
});
/**
* Given an item and the current application filter status, return
* true if the item should be hidden.
*/
todomvc.render.hidden_QMARK_ = (function hidden_QMARK_(completed,current_filter){var or__10329__auto__ = (function (){var and__10317__auto__ = completed;if(cljs.core.truth_(and__10317__auto__))
{return cljs.core._EQ_.call(null,current_filter,new cljs.core.Keyword(null,"active","active",3885920888));
} else
{return and__10317__auto__;
}
})();if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{return (cljs.core.not.call(null,completed)) && (cljs.core._EQ_.call(null,current_filter,new cljs.core.Keyword(null,"completed","completed",3905939901)));
}
});
/**
* An item in the todo list
*/
todomvc.render.Item = quiescent.component.call(null,(function (p__16458,channel){var vec__16459 = p__16458;var map__16460 = cljs.core.nth.call(null,vec__16459,0,null);var map__16460__$1 = ((cljs.core.seq_QMARK_.call(null,map__16460))?cljs.core.apply.call(null,cljs.core.hash_map,map__16460):map__16460);var commited = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"commited","commited",4706580360));var editing = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var completed = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"id","id",1013907597));var current_filter = cljs.core.nth.call(null,vec__16459,1,null);var completed__$1 = cljs.core.boolean$.call(null,completed);return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),id,new cljs.core.Keyword(null,"className","className",1004015509),todomvc.render.class_name.call(null,cljs.core.PersistentHashSet.fromArray([((completed__$1)?"completed":null),(cljs.core.truth_(todomvc.render.hidden_QMARK_.call(null,completed__$1,current_filter))?"hidden":null),(cljs.core.truth_(editing)?"editing":null)], true)),new cljs.core.Keyword(null,"onDoubleClick","onDoubleClick",4144140362),(function (_){if(cljs.core.truth_(commited))
{return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-edit","start-edit",3689098247),id], null));
} else
{return null;
}
})], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"view"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"toggle",new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"checked","checked",1756218137),completed__$1,new cljs.core.Keyword(null,"onChange","onChange",2050678241),(cljs.core.truth_(commited)?(function (_){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,!(completed__$1)], null));
}):null)], null)),quiescent.dom.label.call(null,cljs.core.PersistentArrayMap.EMPTY,text),((cljs.core.not.call(null,commited))?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"syncing"], null),"[syncing ...]"):quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"destroy",new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (_){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
})], null)))),quiescent.dom.input.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"edit",new cljs.core.Keyword(null,"defaultValue","defaultValue",4649746210),text,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),(function (evt){if(todomvc.render.enter_key_QMARK_.call(null,evt))
{return evt.target.blur();
} else
{return null;
}
}),new cljs.core.Keyword(null,"onBlur","onBlur",4295401048),(function (evt){var text__$1 = evt.target.value;return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),id,text__$1], null));
})], null),(cljs.core.truth_(editing)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoFocus","autoFocus",2651959259),true], null):cljs.core.PersistentArrayMap.EMPTY))));
}));
/**
* The primary todo list
*/
todomvc.render.TodoList = quiescent.component.call(null,(function (p__16462,channel){var vec__16463 = p__16462;var current_filter = cljs.core.nth.call(null,vec__16463,0,null);var items = cljs.core.nth.call(null,vec__16463,1,null);return cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"todo-list"], null),cljs.core.map.call(null,(function (p1__16461_SHARP_){return todomvc.render.Item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16461_SHARP_,current_filter], null),channel);
}),items));
}));
/**
* The root of the application
*/
todomvc.render.App = quiescent.component.call(null,(function (p__16464,channel){var map__16465 = p__16464;var map__16465__$1 = ((cljs.core.seq_QMARK_.call(null,map__16465))?cljs.core.apply.call(null,cljs.core.hash_map,map__16465):map__16465);var error = cljs.core.get.call(null,map__16465__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__16465__$1,new cljs.core.Keyword(null,"items","items",1114430258));var current_filter = cljs.core.get.call(null,map__16465__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__16465__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(error)?quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"todo-error",new cljs.core.Keyword(null,"className","className",1004015509),"alert alert-info"], null),"Error occured, reloading page recommended."):null),quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"todoapp"], null),quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,todomvc.render.Header.call(null,null,channel),quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"main"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"toggle-all",new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"checked","checked",1756218137),all_done_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858)], null));
})], null)),quiescent.dom.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),"toggle-all"], null),"Mark all as complete"),todomvc.render.TodoList.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_filter,items], null),channel)),todomvc.render.Footer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_filter,items], null),channel))));
}));
/**
* Render the given application state tree.
*/
todomvc.render.main = (function main(render_pending_QMARK_,db,channel){if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK_,false,true))
{return window.requestAnimationFrame((function (){var items_16467 = cljs.core.sort_by.call(null,new cljs.core.Keyword("db","id","db/id",1014111942),cljs.core.map.call(null,(function (p1__16466_SHARP_){return datascript.entity.call(null,db,cljs.core.first.call(null,p1__16466_SHARP_));
}),datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"text","text",1017460895)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901)], null)], null)], null),db)));var state_16468 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),(cljs.core.seq.call(null,items_16467)) && (cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items_16467)),new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?filter","?filter",1458100784,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1640531432,null),new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),new cljs.core.Symbol(null,"?filter","?filter",1458100784,null)], null)], null)], null),db)),new cljs.core.Keyword(null,"items","items",1114430258),items_16467,new cljs.core.Keyword(null,"error","error",1110689146),datascript.entity.call(null,db,new cljs.core.Keyword(null,"error","error",1110689146))], null);console.log([cljs.core.str("state is now: "),cljs.core.str(state_16468)].join(''));
quiescent.render.call(null,todomvc.render.App.call(null,state_16468,channel),document.getElementById("todopane"));
return cljs.core.reset_BANG_.call(null,render_pending_QMARK_,false);
}));
} else
{return null;
}
});

// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.render');
goog.require('cljs.core');
goog.require('todomvc.transact');
goog.require('datascript');
goog.require('quiescent');
goog.require('goog.dom');
goog.require('quiescent.dom');
goog.require('quiescent.dom');
goog.require('goog.dom');
goog.require('todomvc.transact');
goog.require('quiescent');
goog.require('datascript');
goog.require('goog.async.AnimationDelay');
/**
* Return true if an event was the enter key
*/
todomvc.render.enter_key_QMARK_ = (function enter_key_QMARK_(evt){return cljs.core._EQ_.call(null,13,evt.keyCode);
});
/**
* The page's header, which includes the primary input
*/
todomvc.render.Header = quiescent.component.call(null,(function (_,conn){return quiescent.dom.header.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"header"], null),quiescent.dom.h1.call(null,cljs.core.PersistentArrayMap.EMPTY,"todos"),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"What needs to be done?",new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),(function (evt){if(todomvc.render.enter_key_QMARK_.call(null,evt))
{var text = evt.target.value;datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.create_item,text], null)], null));
return evt.target.value = "";
} else
{return null;
}
}),new cljs.core.Keyword(null,"autoFocus","autoFocus",2651959259),true], null)));
}));
/**
* A filtering button
*/
todomvc.render.ItemFilter = quiescent.component.call(null,(function (current_filter,this_filter,label,href,conn){return quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),((cljs.core._EQ_.call(null,current_filter,this_filter))?"selected":null),new cljs.core.Keyword(null,"href","href",1017115293),href,new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.set_filter,this_filter], null)], null));
})], null),label));
}));
/**
* Buttons to filter the list
*/
todomvc.render.Filters = quiescent.component.call(null,(function (current_filter,conn){return quiescent.dom.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"filters"], null),todomvc.render.ItemFilter.call(null,current_filter,new cljs.core.Keyword(null,"all","all",1014000915),"All","#/",conn),todomvc.render.ItemFilter.call(null,current_filter,new cljs.core.Keyword(null,"active","active",3885920888),"Active","#/active",conn),todomvc.render.ItemFilter.call(null,current_filter,new cljs.core.Keyword(null,"completed","completed",3905939901),"Completed","#/completed",conn));
}));
/**
* The footer at the bottom of the list
*/
todomvc.render.Footer = quiescent.component.call(null,(function (p__12929,conn){var vec__12930 = p__12929;var current_filter = cljs.core.nth.call(null,vec__12930,0,null);var items = cljs.core.nth.call(null,vec__12930,1,null);var completed = cljs.core.count.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var left = (cljs.core.count.call(null,items) - completed);return quiescent.dom.footer.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"footer"], null),quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"todo-count"], null),quiescent.dom.strong.call(null,cljs.core.PersistentArrayMap.EMPTY,[cljs.core.str(left),cljs.core.str(" item(s) left")].join(''))),todomvc.render.Filters.call(null,current_filter,conn),(((0 < completed))?quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"clear-completed",new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.clear_completed], null)], null));
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
todomvc.render.Item = quiescent.component.call(null,(function (p__12931,conn){var vec__12932 = p__12931;var map__12933 = cljs.core.nth.call(null,vec__12932,0,null);var map__12933__$1 = ((cljs.core.seq_QMARK_.call(null,map__12933))?cljs.core.apply.call(null,cljs.core.hash_map,map__12933):map__12933);var commited = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"commited","commited",4706580360));var editing = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"editing","editing",3420907786));var completed = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"id","id",1013907597));var current_filter = cljs.core.nth.call(null,vec__12932,1,null);var completed__$1 = cljs.core.boolean$.call(null,completed);return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),id,new cljs.core.Keyword(null,"className","className",1004015509),todomvc.render.class_name.call(null,cljs.core.PersistentHashSet.fromArray([((completed__$1)?"completed":null),(cljs.core.truth_(todomvc.render.hidden_QMARK_.call(null,completed__$1,current_filter))?"hidden":null),(cljs.core.truth_(editing)?"editing":null)], true)),new cljs.core.Keyword(null,"onDoubleClick","onDoubleClick",4144140362),(function (_){if(cljs.core.truth_(commited))
{return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.start_edit,id], null)], null));
} else
{return null;
}
})], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"view"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"toggle",new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"checked","checked",1756218137),completed__$1,new cljs.core.Keyword(null,"onChange","onChange",2050678241),(cljs.core.truth_(commited)?(function (_){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.toggle_item,id], null)], null));
}):null)], null)),quiescent.dom.label.call(null,cljs.core.PersistentArrayMap.EMPTY,text),((cljs.core.not.call(null,commited))?quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),"sync glyphicon glyphicon-transfer"], null),""):quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",1004015509),"destroy",new cljs.core.Keyword(null,"onClick","onClick",3956969051),(function (_){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.remove_item,id], null)], null));
})], null)))),quiescent.dom.input.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"edit",new cljs.core.Keyword(null,"defaultValue","defaultValue",4649746210),text,new cljs.core.Keyword(null,"onKeyDown","onKeyDown",1534256180),(function (evt){if(todomvc.render.enter_key_QMARK_.call(null,evt))
{return evt.target.blur();
} else
{return null;
}
}),new cljs.core.Keyword(null,"onBlur","onBlur",4295401048),(function (evt){var text__$1 = evt.target.value;return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.complete_edit,id,text__$1], null)], null));
})], null),(cljs.core.truth_(editing)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoFocus","autoFocus",2651959259),true], null):cljs.core.PersistentArrayMap.EMPTY))));
}));
/**
* The primary todo list
*/
todomvc.render.TodoList = quiescent.component.call(null,(function (p__12935,conn){var vec__12936 = p__12935;var current_filter = cljs.core.nth.call(null,vec__12936,0,null);var items = cljs.core.nth.call(null,vec__12936,1,null);return cljs.core.apply.call(null,quiescent.dom.ul,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"todo-list"], null),cljs.core.map.call(null,(function (p1__12934_SHARP_){return todomvc.render.Item.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12934_SHARP_,current_filter], null),conn);
}),items));
}));
/**
* The root of the application
*/
todomvc.render.App = quiescent.component.call(null,(function (p__12937,conn){var map__12938 = p__12937;var map__12938__$1 = ((cljs.core.seq_QMARK_.call(null,map__12938))?cljs.core.apply.call(null,cljs.core.hash_map,map__12938):map__12938);var error = cljs.core.get.call(null,map__12938__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__12938__$1,new cljs.core.Keyword(null,"items","items",1114430258));var current_filter = cljs.core.get.call(null,map__12938__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__12938__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(error)?quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),"todo-error",new cljs.core.Keyword(null,"className","className",1004015509),"alert alert-info"], null),"Error occured, reloading page recommended."):null),quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"todoapp"], null),quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,todomvc.render.Header.call(null,null,conn),quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),"main"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",1013907597),"toggle-all",new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"checked","checked",1756218137),all_done_QMARK_,new cljs.core.Keyword(null,"onChange","onChange",2050678241),(function (){return datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.toggle_all], null)], null));
})], null)),quiescent.dom.label.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),"toggle-all"], null),"Mark all as complete"),todomvc.render.TodoList.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_filter,items], null),conn)),todomvc.render.Footer.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_filter,items], null),conn))));
}));
/**
* Render the given application state tree.
*/
todomvc.render.main = (function main(db,conn){return (new goog.async.AnimationDelay((function (ms){var items = cljs.core.sort_by.call(null,new cljs.core.Keyword("db","id","db/id",1014111942),cljs.core.map.call(null,(function (p1__12939_SHARP_){return datascript.entity.call(null,db,cljs.core.first.call(null,p1__12939_SHARP_));
}),datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null)], null)], null),db)));var state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"all-done?","all-done?",3774632259),(cljs.core.seq.call(null,items)) && (cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items)),new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?filter","?filter",1458100784,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1640531432,null),new cljs.core.Keyword(null,"filter","filter",4034379498),new cljs.core.Symbol(null,"?filter","?filter",1458100784,null)], null)], null)], null),db)),new cljs.core.Keyword(null,"items","items",1114430258),items,new cljs.core.Keyword(null,"error","error",1110689146),cljs.core.ffirst.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"error","error",1110689146)], null)], null)], null),db))], null);return quiescent.render.call(null,todomvc.render.App.call(null,state,conn),goog.dom.getElement("todopane"));
}))).start();
});

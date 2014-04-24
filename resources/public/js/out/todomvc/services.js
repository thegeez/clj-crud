// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('cljs_uuid_utils');
goog.require('cljs_uuid_utils');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
/**
* Not yet in cljs-ajax 0.2.3
* @param {...*} var_args
*/
todomvc.services.DELETE = (function() { 
var DELETE__delegate = function (uri,p__16653){var vec__16655 = p__16653;var opts = cljs.core.nth.call(null,vec__16655,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__16653 = null;if (arguments.length > 1) {
  p__16653 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__16653);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__16656){
var uri = cljs.core.first(arglist__16656);
var p__16653 = cljs.core.rest(arglist__16656);
return DELETE__delegate(uri,p__16653);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
todomvc.services.todos_url = (function todos_url(){return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
todomvc.services.events_url = (function events_url(){return [cljs.core.str(window.location.pathname),cljs.core.str("/events")].join('');
});
todomvc.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.handle = (function (){var method_table__11253__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11254__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11255__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11256__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11257__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (app,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11257__auto__,method_table__11253__auto__,prefer_table__11254__auto__,method_cache__11255__auto__,cached_hierarchy__11256__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (p__16657,p__16658){var map__16659 = p__16657;var map__16659__$1 = ((cljs.core.seq_QMARK_.call(null,map__16659))?cljs.core.apply.call(null,cljs.core.hash_map,map__16659):map__16659);var channel = cljs.core.get.call(null,map__16659__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16660 = p__16658;var _ = cljs.core.nth.call(null,vec__16660,0,null);var text = cljs.core.nth.call(null,vec__16660,1,null);var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (p__16661,p__16662){var map__16663 = p__16661;var map__16663__$1 = ((cljs.core.seq_QMARK_.call(null,map__16663))?cljs.core.apply.call(null,cljs.core.hash_map,map__16663):map__16663);var channel = cljs.core.get.call(null,map__16663__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16664 = p__16662;var _ = cljs.core.nth.call(null,vec__16664,0,null);var id = cljs.core.nth.call(null,vec__16664,1,null);var text = cljs.core.nth.call(null,vec__16664,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (p__16665,p__16666){var map__16667 = p__16665;var map__16667__$1 = ((cljs.core.seq_QMARK_.call(null,map__16667))?cljs.core.apply.call(null,cljs.core.hash_map,map__16667):map__16667);var channel = cljs.core.get.call(null,map__16667__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16668 = p__16666;var _ = cljs.core.nth.call(null,vec__16668,0,null);var id = cljs.core.nth.call(null,vec__16668,1,null);var completed = cljs.core.nth.call(null,vec__16668,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (p__16669,p__16670){var map__16671 = p__16669;var map__16671__$1 = ((cljs.core.seq_QMARK_.call(null,map__16671))?cljs.core.apply.call(null,cljs.core.hash_map,map__16671):map__16671);var channel = cljs.core.get.call(null,map__16671__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16672 = p__16670;var _ = cljs.core.nth.call(null,vec__16672,0,null);var id = cljs.core.nth.call(null,vec__16672,1,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (p__16673,_){var map__16674 = p__16673;var map__16674__$1 = ((cljs.core.seq_QMARK_.call(null,map__16674))?cljs.core.apply.call(null,cljs.core.hash_map,map__16674):map__16674);var channel = cljs.core.get.call(null,map__16674__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16674__$1,new cljs.core.Keyword(null,"state","state",1123661827));var seq__16675 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));var chunk__16677 = null;var count__16678 = 0;var i__16679 = 0;while(true){
if((i__16679 < count__16678))
{var map__16681 = cljs.core._nth.call(null,chunk__16677,i__16679);var map__16681__$1 = ((cljs.core.seq_QMARK_.call(null,map__16681))?cljs.core.apply.call(null,cljs.core.hash_map,map__16681):map__16681);var item = map__16681__$1;var completed = cljs.core.get.call(null,map__16681__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16681__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__16683 = seq__16675;
var G__16684 = chunk__16677;
var G__16685 = count__16678;
var G__16686 = (i__16679 + 1);
seq__16675 = G__16683;
chunk__16677 = G__16684;
count__16678 = G__16685;
i__16679 = G__16686;
continue;
}
} else
{{
var G__16687 = seq__16675;
var G__16688 = chunk__16677;
var G__16689 = count__16678;
var G__16690 = (i__16679 + 1);
seq__16675 = G__16687;
chunk__16677 = G__16688;
count__16678 = G__16689;
i__16679 = G__16690;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16675);if(temp__4092__auto__)
{var seq__16675__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16675__$1))
{var c__11143__auto__ = cljs.core.chunk_first.call(null,seq__16675__$1);{
var G__16691 = cljs.core.chunk_rest.call(null,seq__16675__$1);
var G__16692 = c__11143__auto__;
var G__16693 = cljs.core.count.call(null,c__11143__auto__);
var G__16694 = 0;
seq__16675 = G__16691;
chunk__16677 = G__16692;
count__16678 = G__16693;
i__16679 = G__16694;
continue;
}
} else
{var map__16682 = cljs.core.first.call(null,seq__16675__$1);var map__16682__$1 = ((cljs.core.seq_QMARK_.call(null,map__16682))?cljs.core.apply.call(null,cljs.core.hash_map,map__16682):map__16682);var item = map__16682__$1;var completed = cljs.core.get.call(null,map__16682__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16682__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__16695 = cljs.core.next.call(null,seq__16675__$1);
var G__16696 = null;
var G__16697 = 0;
var G__16698 = 0;
seq__16675 = G__16695;
chunk__16677 = G__16696;
count__16678 = G__16697;
i__16679 = G__16698;
continue;
}
} else
{{
var G__16699 = cljs.core.next.call(null,seq__16675__$1);
var G__16700 = null;
var G__16701 = 0;
var G__16702 = 0;
seq__16675 = G__16699;
chunk__16677 = G__16700;
count__16678 = G__16701;
i__16679 = G__16702;
continue;
}
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__16703,_){var map__16704 = p__16703;var map__16704__$1 = ((cljs.core.seq_QMARK_.call(null,map__16704))?cljs.core.apply.call(null,cljs.core.hash_map,map__16704):map__16704);var channel = cljs.core.get.call(null,map__16704__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16704__$1,new cljs.core.Keyword(null,"state","state",1123661827));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var seq__16705 = cljs.core.seq.call(null,items);var chunk__16707 = null;var count__16708 = 0;var i__16709 = 0;while(true){
if((i__16709 < count__16708))
{var map__16711 = cljs.core._nth.call(null,chunk__16707,i__16709);var map__16711__$1 = ((cljs.core.seq_QMARK_.call(null,map__16711))?cljs.core.apply.call(null,cljs.core.hash_map,map__16711):map__16711);var item = map__16711__$1;var completed = cljs.core.get.call(null,map__16711__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16711__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__16713 = seq__16705;
var G__16714 = chunk__16707;
var G__16715 = count__16708;
var G__16716 = (i__16709 + 1);
seq__16705 = G__16713;
chunk__16707 = G__16714;
count__16708 = G__16715;
i__16709 = G__16716;
continue;
}
} else
{{
var G__16717 = seq__16705;
var G__16718 = chunk__16707;
var G__16719 = count__16708;
var G__16720 = (i__16709 + 1);
seq__16705 = G__16717;
chunk__16707 = G__16718;
count__16708 = G__16719;
i__16709 = G__16720;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16705);if(temp__4092__auto__)
{var seq__16705__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16705__$1))
{var c__11143__auto__ = cljs.core.chunk_first.call(null,seq__16705__$1);{
var G__16721 = cljs.core.chunk_rest.call(null,seq__16705__$1);
var G__16722 = c__11143__auto__;
var G__16723 = cljs.core.count.call(null,c__11143__auto__);
var G__16724 = 0;
seq__16705 = G__16721;
chunk__16707 = G__16722;
count__16708 = G__16723;
i__16709 = G__16724;
continue;
}
} else
{var map__16712 = cljs.core.first.call(null,seq__16705__$1);var map__16712__$1 = ((cljs.core.seq_QMARK_.call(null,map__16712))?cljs.core.apply.call(null,cljs.core.hash_map,map__16712):map__16712);var item = map__16712__$1;var completed = cljs.core.get.call(null,map__16712__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16712__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__16725 = cljs.core.next.call(null,seq__16705__$1);
var G__16726 = null;
var G__16727 = 0;
var G__16728 = 0;
seq__16705 = G__16725;
chunk__16707 = G__16726;
count__16708 = G__16727;
i__16709 = G__16728;
continue;
}
} else
{{
var G__16729 = cljs.core.next.call(null,seq__16705__$1);
var G__16730 = null;
var G__16731 = 0;
var G__16732 = 0;
seq__16705 = G__16729;
chunk__16707 = G__16730;
count__16708 = G__16731;
i__16709 = G__16732;
continue;
}
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
todomvc.services.start_services = (function start_services(app){console.log([cljs.core.str("Url is: "),cljs.core.str(document.URL)].join(''));
var map__16770 = app;var map__16770__$1 = ((cljs.core.seq_QMARK_.call(null,map__16770))?cljs.core.apply.call(null,cljs.core.hash_map,map__16770):map__16770);var emit = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var source_16807 = (new EventSource(todomvc.services.events_url.call(null)));source_16807.onmessage = (function (e){console.log(e);
var e__$1 = cljs.reader.read_string.call(null,e.data);return cljs.core.async.put_BANG_.call(null,channel,e__$1);
});
var c__14019__auto___16808 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14020__auto__ = (function (){var switch__13949__auto__ = (function (state_16785){var state_val_16786 = (state_16785[1]);if((state_val_16786 === 7))
{var inst_16774 = (state_16785[2]);var inst_16775 = [cljs.core.str("service: "),cljs.core.str(inst_16774)].join('');var inst_16776 = console.log(inst_16775);var inst_16777 = todomvc.services.handle.call(null,app,inst_16774);var state_16785__$1 = (function (){var statearr_16787 = state_16785;(statearr_16787[7] = inst_16777);
(statearr_16787[8] = inst_16776);
return statearr_16787;
})();var statearr_16788_16809 = state_16785__$1;(statearr_16788_16809[2] = null);
(statearr_16788_16809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16786 === 6))
{var inst_16781 = (state_16785[2]);var state_16785__$1 = state_16785;var statearr_16789_16810 = state_16785__$1;(statearr_16789_16810[2] = inst_16781);
(statearr_16789_16810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16786 === 5))
{var state_16785__$1 = state_16785;var statearr_16790_16811 = state_16785__$1;(statearr_16790_16811[2] = null);
(statearr_16790_16811[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16786 === 4))
{var state_16785__$1 = state_16785;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16785__$1,7,emit);
} else
{if((state_val_16786 === 3))
{var inst_16783 = (state_16785[2]);var state_16785__$1 = state_16785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16785__$1,inst_16783);
} else
{if((state_val_16786 === 2))
{var state_16785__$1 = state_16785;if(true)
{var statearr_16791_16812 = state_16785__$1;(statearr_16791_16812[1] = 4);
} else
{var statearr_16792_16813 = state_16785__$1;(statearr_16792_16813[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16786 === 1))
{var state_16785__$1 = state_16785;var statearr_16793_16814 = state_16785__$1;(statearr_16793_16814[2] = null);
(statearr_16793_16814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__13949__auto__){
return (function() {
var state_machine__13950__auto__ = null;
var state_machine__13950__auto____0 = (function (){var statearr_16797 = [null,null,null,null,null,null,null,null,null];(statearr_16797[0] = state_machine__13950__auto__);
(statearr_16797[1] = 1);
return statearr_16797;
});
var state_machine__13950__auto____1 = (function (state_16785){while(true){
var ret_value__13951__auto__ = (function (){try{while(true){
var result__13952__auto__ = switch__13949__auto__.call(null,state_16785);if(cljs.core.keyword_identical_QMARK_.call(null,result__13952__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13952__auto__;
}
break;
}
}catch (e16798){if((e16798 instanceof Object))
{var ex__13953__auto__ = e16798;var statearr_16799_16815 = state_16785;(statearr_16799_16815[5] = ex__13953__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16785);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13951__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16816 = state_16785;
state_16785 = G__16816;
continue;
}
} else
{return ret_value__13951__auto__;
}
break;
}
});
state_machine__13950__auto__ = function(state_16785){
switch(arguments.length){
case 0:
return state_machine__13950__auto____0.call(this);
case 1:
return state_machine__13950__auto____1.call(this,state_16785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13950__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13950__auto____0;
state_machine__13950__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13950__auto____1;
return state_machine__13950__auto__;
})()
;})(switch__13949__auto__))
})();var state__14021__auto__ = (function (){var statearr_16800 = f__14020__auto__.call(null);(statearr_16800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14019__auto___16808);
return statearr_16800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14021__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__16801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__16802 = null;var count__16803 = 0;var i__16804 = 0;while(true){
if((i__16804 < count__16803))
{var map__16805 = cljs.core._nth.call(null,chunk__16802,i__16804);var map__16805__$1 = ((cljs.core.seq_QMARK_.call(null,map__16805))?cljs.core.apply.call(null,cljs.core.hash_map,map__16805):map__16805);var todo = map__16805__$1;var completed = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__16805__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__16817 = seq__16801;
var G__16818 = chunk__16802;
var G__16819 = count__16803;
var G__16820 = (i__16804 + 1);
seq__16801 = G__16817;
chunk__16802 = G__16818;
count__16803 = G__16819;
i__16804 = G__16820;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16801);if(temp__4092__auto__)
{var seq__16801__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16801__$1))
{var c__11143__auto__ = cljs.core.chunk_first.call(null,seq__16801__$1);{
var G__16821 = cljs.core.chunk_rest.call(null,seq__16801__$1);
var G__16822 = c__11143__auto__;
var G__16823 = cljs.core.count.call(null,c__11143__auto__);
var G__16824 = 0;
seq__16801 = G__16821;
chunk__16802 = G__16822;
count__16803 = G__16823;
i__16804 = G__16824;
continue;
}
} else
{var map__16806 = cljs.core.first.call(null,seq__16801__$1);var map__16806__$1 = ((cljs.core.seq_QMARK_.call(null,map__16806))?cljs.core.apply.call(null,cljs.core.hash_map,map__16806):map__16806);var todo = map__16806__$1;var completed = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__16806__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__16825 = cljs.core.next.call(null,seq__16801__$1);
var G__16826 = null;
var G__16827 = 0;
var G__16828 = 0;
seq__16801 = G__16825;
chunk__16802 = G__16826;
count__16803 = G__16827;
i__16804 = G__16828;
continue;
}
}
} else
{return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){return todomvc.services.error_handler.call(null,channel);
})], null));
});

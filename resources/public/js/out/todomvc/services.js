// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
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
var DELETE__delegate = function (uri,p__16595){var vec__16597 = p__16595;var opts = cljs.core.nth.call(null,vec__16597,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__16595 = null;if (arguments.length > 1) {
  p__16595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__16595);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__16598){
var uri = cljs.core.first(arglist__16598);
var p__16595 = cljs.core.rest(arglist__16598);
return DELETE__delegate(uri,p__16595);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
todomvc.services.todos_url = (function todos_url(){[cljs.core.str(document.URL)].join('');
return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
todomvc.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.handle = (function (){var method_table__11187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11191__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (app,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11191__auto__,method_table__11187__auto__,prefer_table__11188__auto__,method_cache__11189__auto__,cached_hierarchy__11190__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (p__16599,p__16600){var map__16601 = p__16599;var map__16601__$1 = ((cljs.core.seq_QMARK_.call(null,map__16601))?cljs.core.apply.call(null,cljs.core.hash_map,map__16601):map__16601);var channel = cljs.core.get.call(null,map__16601__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16602 = p__16600;var _ = cljs.core.nth.call(null,vec__16602,0,null);var text = cljs.core.nth.call(null,vec__16602,1,null);var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (p__16603,p__16604){var map__16605 = p__16603;var map__16605__$1 = ((cljs.core.seq_QMARK_.call(null,map__16605))?cljs.core.apply.call(null,cljs.core.hash_map,map__16605):map__16605);var channel = cljs.core.get.call(null,map__16605__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16606 = p__16604;var _ = cljs.core.nth.call(null,vec__16606,0,null);var id = cljs.core.nth.call(null,vec__16606,1,null);var text = cljs.core.nth.call(null,vec__16606,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (p__16607,p__16608){var map__16609 = p__16607;var map__16609__$1 = ((cljs.core.seq_QMARK_.call(null,map__16609))?cljs.core.apply.call(null,cljs.core.hash_map,map__16609):map__16609);var channel = cljs.core.get.call(null,map__16609__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16610 = p__16608;var _ = cljs.core.nth.call(null,vec__16610,0,null);var id = cljs.core.nth.call(null,vec__16610,1,null);var completed = cljs.core.nth.call(null,vec__16610,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (p__16611,p__16612){var map__16613 = p__16611;var map__16613__$1 = ((cljs.core.seq_QMARK_.call(null,map__16613))?cljs.core.apply.call(null,cljs.core.hash_map,map__16613):map__16613);var channel = cljs.core.get.call(null,map__16613__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16614 = p__16612;var _ = cljs.core.nth.call(null,vec__16614,0,null);var id = cljs.core.nth.call(null,vec__16614,1,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (p__16615,_){var map__16616 = p__16615;var map__16616__$1 = ((cljs.core.seq_QMARK_.call(null,map__16616))?cljs.core.apply.call(null,cljs.core.hash_map,map__16616):map__16616);var channel = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16616__$1,new cljs.core.Keyword(null,"state","state",1123661827));var seq__16617 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));var chunk__16619 = null;var count__16620 = 0;var i__16621 = 0;while(true){
if((i__16621 < count__16620))
{var map__16623 = cljs.core._nth.call(null,chunk__16619,i__16621);var map__16623__$1 = ((cljs.core.seq_QMARK_.call(null,map__16623))?cljs.core.apply.call(null,cljs.core.hash_map,map__16623):map__16623);var item = map__16623__$1;var completed = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16623__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__16625 = seq__16617;
var G__16626 = chunk__16619;
var G__16627 = count__16620;
var G__16628 = (i__16621 + 1);
seq__16617 = G__16625;
chunk__16619 = G__16626;
count__16620 = G__16627;
i__16621 = G__16628;
continue;
}
} else
{{
var G__16629 = seq__16617;
var G__16630 = chunk__16619;
var G__16631 = count__16620;
var G__16632 = (i__16621 + 1);
seq__16617 = G__16629;
chunk__16619 = G__16630;
count__16620 = G__16631;
i__16621 = G__16632;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16617);if(temp__4092__auto__)
{var seq__16617__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16617__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__16617__$1);{
var G__16633 = cljs.core.chunk_rest.call(null,seq__16617__$1);
var G__16634 = c__11077__auto__;
var G__16635 = cljs.core.count.call(null,c__11077__auto__);
var G__16636 = 0;
seq__16617 = G__16633;
chunk__16619 = G__16634;
count__16620 = G__16635;
i__16621 = G__16636;
continue;
}
} else
{var map__16624 = cljs.core.first.call(null,seq__16617__$1);var map__16624__$1 = ((cljs.core.seq_QMARK_.call(null,map__16624))?cljs.core.apply.call(null,cljs.core.hash_map,map__16624):map__16624);var item = map__16624__$1;var completed = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16624__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__16637 = cljs.core.next.call(null,seq__16617__$1);
var G__16638 = null;
var G__16639 = 0;
var G__16640 = 0;
seq__16617 = G__16637;
chunk__16619 = G__16638;
count__16620 = G__16639;
i__16621 = G__16640;
continue;
}
} else
{{
var G__16641 = cljs.core.next.call(null,seq__16617__$1);
var G__16642 = null;
var G__16643 = 0;
var G__16644 = 0;
seq__16617 = G__16641;
chunk__16619 = G__16642;
count__16620 = G__16643;
i__16621 = G__16644;
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__16645,_){var map__16646 = p__16645;var map__16646__$1 = ((cljs.core.seq_QMARK_.call(null,map__16646))?cljs.core.apply.call(null,cljs.core.hash_map,map__16646):map__16646);var channel = cljs.core.get.call(null,map__16646__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16646__$1,new cljs.core.Keyword(null,"state","state",1123661827));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var seq__16647 = cljs.core.seq.call(null,items);var chunk__16649 = null;var count__16650 = 0;var i__16651 = 0;while(true){
if((i__16651 < count__16650))
{var map__16653 = cljs.core._nth.call(null,chunk__16649,i__16651);var map__16653__$1 = ((cljs.core.seq_QMARK_.call(null,map__16653))?cljs.core.apply.call(null,cljs.core.hash_map,map__16653):map__16653);var item = map__16653__$1;var completed = cljs.core.get.call(null,map__16653__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16653__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__16655 = seq__16647;
var G__16656 = chunk__16649;
var G__16657 = count__16650;
var G__16658 = (i__16651 + 1);
seq__16647 = G__16655;
chunk__16649 = G__16656;
count__16650 = G__16657;
i__16651 = G__16658;
continue;
}
} else
{{
var G__16659 = seq__16647;
var G__16660 = chunk__16649;
var G__16661 = count__16650;
var G__16662 = (i__16651 + 1);
seq__16647 = G__16659;
chunk__16649 = G__16660;
count__16650 = G__16661;
i__16651 = G__16662;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16647);if(temp__4092__auto__)
{var seq__16647__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16647__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__16647__$1);{
var G__16663 = cljs.core.chunk_rest.call(null,seq__16647__$1);
var G__16664 = c__11077__auto__;
var G__16665 = cljs.core.count.call(null,c__11077__auto__);
var G__16666 = 0;
seq__16647 = G__16663;
chunk__16649 = G__16664;
count__16650 = G__16665;
i__16651 = G__16666;
continue;
}
} else
{var map__16654 = cljs.core.first.call(null,seq__16647__$1);var map__16654__$1 = ((cljs.core.seq_QMARK_.call(null,map__16654))?cljs.core.apply.call(null,cljs.core.hash_map,map__16654):map__16654);var item = map__16654__$1;var completed = cljs.core.get.call(null,map__16654__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16654__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__16667 = cljs.core.next.call(null,seq__16647__$1);
var G__16668 = null;
var G__16669 = 0;
var G__16670 = 0;
seq__16647 = G__16667;
chunk__16649 = G__16668;
count__16650 = G__16669;
i__16651 = G__16670;
continue;
}
} else
{{
var G__16671 = cljs.core.next.call(null,seq__16647__$1);
var G__16672 = null;
var G__16673 = 0;
var G__16674 = 0;
seq__16647 = G__16671;
chunk__16649 = G__16672;
count__16650 = G__16673;
i__16651 = G__16674;
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
var map__16712 = app;var map__16712__$1 = ((cljs.core.seq_QMARK_.call(null,map__16712))?cljs.core.apply.call(null,cljs.core.hash_map,map__16712):map__16712);var emit = cljs.core.get.call(null,map__16712__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__16712__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var c__13953__auto___16749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_16727){var state_val_16728 = (state_16727[1]);if((state_val_16728 === 7))
{var inst_16716 = (state_16727[2]);var inst_16717 = [cljs.core.str("service: "),cljs.core.str(inst_16716)].join('');var inst_16718 = console.log(inst_16717);var inst_16719 = todomvc.services.handle.call(null,app,inst_16716);var state_16727__$1 = (function (){var statearr_16729 = state_16727;(statearr_16729[7] = inst_16719);
(statearr_16729[8] = inst_16718);
return statearr_16729;
})();var statearr_16730_16750 = state_16727__$1;(statearr_16730_16750[2] = null);
(statearr_16730_16750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 6))
{var inst_16723 = (state_16727[2]);var state_16727__$1 = state_16727;var statearr_16731_16751 = state_16727__$1;(statearr_16731_16751[2] = inst_16723);
(statearr_16731_16751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 5))
{var state_16727__$1 = state_16727;var statearr_16732_16752 = state_16727__$1;(statearr_16732_16752[2] = null);
(statearr_16732_16752[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 4))
{var state_16727__$1 = state_16727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16727__$1,7,emit);
} else
{if((state_val_16728 === 3))
{var inst_16725 = (state_16727[2]);var state_16727__$1 = state_16727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16727__$1,inst_16725);
} else
{if((state_val_16728 === 2))
{var state_16727__$1 = state_16727;if(true)
{var statearr_16733_16753 = state_16727__$1;(statearr_16733_16753[1] = 4);
} else
{var statearr_16734_16754 = state_16727__$1;(statearr_16734_16754[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16728 === 1))
{var state_16727__$1 = state_16727;var statearr_16735_16755 = state_16727__$1;(statearr_16735_16755[2] = null);
(statearr_16735_16755[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_16739 = [null,null,null,null,null,null,null,null,null];(statearr_16739[0] = state_machine__13884__auto__);
(statearr_16739[1] = 1);
return statearr_16739;
});
var state_machine__13884__auto____1 = (function (state_16727){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_16727);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e16740){if((e16740 instanceof Object))
{var ex__13887__auto__ = e16740;var statearr_16741_16756 = state_16727;(statearr_16741_16756[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16740;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16757 = state_16727;
state_16727 = G__16757;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_16727){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_16727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_16742 = f__13954__auto__.call(null);(statearr_16742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___16749);
return statearr_16742;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__16743 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__16744 = null;var count__16745 = 0;var i__16746 = 0;while(true){
if((i__16746 < count__16745))
{var map__16747 = cljs.core._nth.call(null,chunk__16744,i__16746);var map__16747__$1 = ((cljs.core.seq_QMARK_.call(null,map__16747))?cljs.core.apply.call(null,cljs.core.hash_map,map__16747):map__16747);var todo = map__16747__$1;var completed = cljs.core.get.call(null,map__16747__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__16747__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__16747__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__16758 = seq__16743;
var G__16759 = chunk__16744;
var G__16760 = count__16745;
var G__16761 = (i__16746 + 1);
seq__16743 = G__16758;
chunk__16744 = G__16759;
count__16745 = G__16760;
i__16746 = G__16761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16743);if(temp__4092__auto__)
{var seq__16743__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16743__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__16743__$1);{
var G__16762 = cljs.core.chunk_rest.call(null,seq__16743__$1);
var G__16763 = c__11077__auto__;
var G__16764 = cljs.core.count.call(null,c__11077__auto__);
var G__16765 = 0;
seq__16743 = G__16762;
chunk__16744 = G__16763;
count__16745 = G__16764;
i__16746 = G__16765;
continue;
}
} else
{var map__16748 = cljs.core.first.call(null,seq__16743__$1);var map__16748__$1 = ((cljs.core.seq_QMARK_.call(null,map__16748))?cljs.core.apply.call(null,cljs.core.hash_map,map__16748):map__16748);var todo = map__16748__$1;var completed = cljs.core.get.call(null,map__16748__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__16748__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__16748__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__16766 = cljs.core.next.call(null,seq__16743__$1);
var G__16767 = null;
var G__16768 = 0;
var G__16769 = 0;
seq__16743 = G__16766;
chunk__16744 = G__16767;
count__16745 = G__16768;
i__16746 = G__16769;
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

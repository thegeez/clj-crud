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
var DELETE__delegate = function (uri,p__18632){var vec__18634 = p__18632;var opts = cljs.core.nth.call(null,vec__18634,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__18632 = null;if (arguments.length > 1) {
  p__18632 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__18632);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__18635){
var uri = cljs.core.first(arglist__18635);
var p__18632 = cljs.core.rest(arglist__18635);
return DELETE__delegate(uri,p__18632);
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
todomvc.services.handle = (function (){var method_table__11248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11249__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11250__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11251__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11252__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (app,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11252__auto__,method_table__11248__auto__,prefer_table__11249__auto__,method_cache__11250__auto__,cached_hierarchy__11251__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (p__18636,p__18637){var map__18638 = p__18636;var map__18638__$1 = ((cljs.core.seq_QMARK_.call(null,map__18638))?cljs.core.apply.call(null,cljs.core.hash_map,map__18638):map__18638);var channel = cljs.core.get.call(null,map__18638__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__18639 = p__18637;var _ = cljs.core.nth.call(null,vec__18639,0,null);var text = cljs.core.nth.call(null,vec__18639,1,null);var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (p__18640,p__18641){var map__18642 = p__18640;var map__18642__$1 = ((cljs.core.seq_QMARK_.call(null,map__18642))?cljs.core.apply.call(null,cljs.core.hash_map,map__18642):map__18642);var channel = cljs.core.get.call(null,map__18642__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__18643 = p__18641;var _ = cljs.core.nth.call(null,vec__18643,0,null);var id = cljs.core.nth.call(null,vec__18643,1,null);var text = cljs.core.nth.call(null,vec__18643,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (p__18644,p__18645){var map__18646 = p__18644;var map__18646__$1 = ((cljs.core.seq_QMARK_.call(null,map__18646))?cljs.core.apply.call(null,cljs.core.hash_map,map__18646):map__18646);var channel = cljs.core.get.call(null,map__18646__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__18647 = p__18645;var _ = cljs.core.nth.call(null,vec__18647,0,null);var id = cljs.core.nth.call(null,vec__18647,1,null);var completed = cljs.core.nth.call(null,vec__18647,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (p__18648,p__18649){var map__18650 = p__18648;var map__18650__$1 = ((cljs.core.seq_QMARK_.call(null,map__18650))?cljs.core.apply.call(null,cljs.core.hash_map,map__18650):map__18650);var channel = cljs.core.get.call(null,map__18650__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__18651 = p__18649;var _ = cljs.core.nth.call(null,vec__18651,0,null);var id = cljs.core.nth.call(null,vec__18651,1,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (p__18652,_){var map__18653 = p__18652;var map__18653__$1 = ((cljs.core.seq_QMARK_.call(null,map__18653))?cljs.core.apply.call(null,cljs.core.hash_map,map__18653):map__18653);var channel = cljs.core.get.call(null,map__18653__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__18653__$1,new cljs.core.Keyword(null,"state","state",1123661827));var seq__18654 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));var chunk__18656 = null;var count__18657 = 0;var i__18658 = 0;while(true){
if((i__18658 < count__18657))
{var map__18660 = cljs.core._nth.call(null,chunk__18656,i__18658);var map__18660__$1 = ((cljs.core.seq_QMARK_.call(null,map__18660))?cljs.core.apply.call(null,cljs.core.hash_map,map__18660):map__18660);var item = map__18660__$1;var completed = cljs.core.get.call(null,map__18660__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__18660__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__18662 = seq__18654;
var G__18663 = chunk__18656;
var G__18664 = count__18657;
var G__18665 = (i__18658 + 1);
seq__18654 = G__18662;
chunk__18656 = G__18663;
count__18657 = G__18664;
i__18658 = G__18665;
continue;
}
} else
{{
var G__18666 = seq__18654;
var G__18667 = chunk__18656;
var G__18668 = count__18657;
var G__18669 = (i__18658 + 1);
seq__18654 = G__18666;
chunk__18656 = G__18667;
count__18657 = G__18668;
i__18658 = G__18669;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18654);if(temp__4092__auto__)
{var seq__18654__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18654__$1))
{var c__11138__auto__ = cljs.core.chunk_first.call(null,seq__18654__$1);{
var G__18670 = cljs.core.chunk_rest.call(null,seq__18654__$1);
var G__18671 = c__11138__auto__;
var G__18672 = cljs.core.count.call(null,c__11138__auto__);
var G__18673 = 0;
seq__18654 = G__18670;
chunk__18656 = G__18671;
count__18657 = G__18672;
i__18658 = G__18673;
continue;
}
} else
{var map__18661 = cljs.core.first.call(null,seq__18654__$1);var map__18661__$1 = ((cljs.core.seq_QMARK_.call(null,map__18661))?cljs.core.apply.call(null,cljs.core.hash_map,map__18661):map__18661);var item = map__18661__$1;var completed = cljs.core.get.call(null,map__18661__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__18661__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__18674 = cljs.core.next.call(null,seq__18654__$1);
var G__18675 = null;
var G__18676 = 0;
var G__18677 = 0;
seq__18654 = G__18674;
chunk__18656 = G__18675;
count__18657 = G__18676;
i__18658 = G__18677;
continue;
}
} else
{{
var G__18678 = cljs.core.next.call(null,seq__18654__$1);
var G__18679 = null;
var G__18680 = 0;
var G__18681 = 0;
seq__18654 = G__18678;
chunk__18656 = G__18679;
count__18657 = G__18680;
i__18658 = G__18681;
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__18682,_){var map__18683 = p__18682;var map__18683__$1 = ((cljs.core.seq_QMARK_.call(null,map__18683))?cljs.core.apply.call(null,cljs.core.hash_map,map__18683):map__18683);var channel = cljs.core.get.call(null,map__18683__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__18683__$1,new cljs.core.Keyword(null,"state","state",1123661827));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var seq__18684 = cljs.core.seq.call(null,items);var chunk__18686 = null;var count__18687 = 0;var i__18688 = 0;while(true){
if((i__18688 < count__18687))
{var map__18690 = cljs.core._nth.call(null,chunk__18686,i__18688);var map__18690__$1 = ((cljs.core.seq_QMARK_.call(null,map__18690))?cljs.core.apply.call(null,cljs.core.hash_map,map__18690):map__18690);var item = map__18690__$1;var completed = cljs.core.get.call(null,map__18690__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__18690__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__18692 = seq__18684;
var G__18693 = chunk__18686;
var G__18694 = count__18687;
var G__18695 = (i__18688 + 1);
seq__18684 = G__18692;
chunk__18686 = G__18693;
count__18687 = G__18694;
i__18688 = G__18695;
continue;
}
} else
{{
var G__18696 = seq__18684;
var G__18697 = chunk__18686;
var G__18698 = count__18687;
var G__18699 = (i__18688 + 1);
seq__18684 = G__18696;
chunk__18686 = G__18697;
count__18687 = G__18698;
i__18688 = G__18699;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18684);if(temp__4092__auto__)
{var seq__18684__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18684__$1))
{var c__11138__auto__ = cljs.core.chunk_first.call(null,seq__18684__$1);{
var G__18700 = cljs.core.chunk_rest.call(null,seq__18684__$1);
var G__18701 = c__11138__auto__;
var G__18702 = cljs.core.count.call(null,c__11138__auto__);
var G__18703 = 0;
seq__18684 = G__18700;
chunk__18686 = G__18701;
count__18687 = G__18702;
i__18688 = G__18703;
continue;
}
} else
{var map__18691 = cljs.core.first.call(null,seq__18684__$1);var map__18691__$1 = ((cljs.core.seq_QMARK_.call(null,map__18691))?cljs.core.apply.call(null,cljs.core.hash_map,map__18691):map__18691);var item = map__18691__$1;var completed = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__18691__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__18704 = cljs.core.next.call(null,seq__18684__$1);
var G__18705 = null;
var G__18706 = 0;
var G__18707 = 0;
seq__18684 = G__18704;
chunk__18686 = G__18705;
count__18687 = G__18706;
i__18688 = G__18707;
continue;
}
} else
{{
var G__18708 = cljs.core.next.call(null,seq__18684__$1);
var G__18709 = null;
var G__18710 = 0;
var G__18711 = 0;
seq__18684 = G__18708;
chunk__18686 = G__18709;
count__18687 = G__18710;
i__18688 = G__18711;
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
var map__18749 = app;var map__18749__$1 = ((cljs.core.seq_QMARK_.call(null,map__18749))?cljs.core.apply.call(null,cljs.core.hash_map,map__18749):map__18749);var emit = cljs.core.get.call(null,map__18749__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__18749__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var source_18786 = (new EventSource(todomvc.services.events_url.call(null)));source_18786.onmessage = (function (e){return console.log(e);
});
var c__14014__auto___18787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14015__auto__ = (function (){var switch__13944__auto__ = (function (state_18764){var state_val_18765 = (state_18764[1]);if((state_val_18765 === 7))
{var inst_18753 = (state_18764[2]);var inst_18754 = [cljs.core.str("service: "),cljs.core.str(inst_18753)].join('');var inst_18755 = console.log(inst_18754);var inst_18756 = todomvc.services.handle.call(null,app,inst_18753);var state_18764__$1 = (function (){var statearr_18766 = state_18764;(statearr_18766[7] = inst_18756);
(statearr_18766[8] = inst_18755);
return statearr_18766;
})();var statearr_18767_18788 = state_18764__$1;(statearr_18767_18788[2] = null);
(statearr_18767_18788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18765 === 6))
{var inst_18760 = (state_18764[2]);var state_18764__$1 = state_18764;var statearr_18768_18789 = state_18764__$1;(statearr_18768_18789[2] = inst_18760);
(statearr_18768_18789[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18765 === 5))
{var state_18764__$1 = state_18764;var statearr_18769_18790 = state_18764__$1;(statearr_18769_18790[2] = null);
(statearr_18769_18790[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18765 === 4))
{var state_18764__$1 = state_18764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18764__$1,7,emit);
} else
{if((state_val_18765 === 3))
{var inst_18762 = (state_18764[2]);var state_18764__$1 = state_18764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18764__$1,inst_18762);
} else
{if((state_val_18765 === 2))
{var state_18764__$1 = state_18764;if(true)
{var statearr_18770_18791 = state_18764__$1;(statearr_18770_18791[1] = 4);
} else
{var statearr_18771_18792 = state_18764__$1;(statearr_18771_18792[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18765 === 1))
{var state_18764__$1 = state_18764;var statearr_18772_18793 = state_18764__$1;(statearr_18772_18793[2] = null);
(statearr_18772_18793[1] = 2);
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
});return ((function (switch__13944__auto__){
return (function() {
var state_machine__13945__auto__ = null;
var state_machine__13945__auto____0 = (function (){var statearr_18776 = [null,null,null,null,null,null,null,null,null];(statearr_18776[0] = state_machine__13945__auto__);
(statearr_18776[1] = 1);
return statearr_18776;
});
var state_machine__13945__auto____1 = (function (state_18764){while(true){
var ret_value__13946__auto__ = (function (){try{while(true){
var result__13947__auto__ = switch__13944__auto__.call(null,state_18764);if(cljs.core.keyword_identical_QMARK_.call(null,result__13947__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13947__auto__;
}
break;
}
}catch (e18777){if((e18777 instanceof Object))
{var ex__13948__auto__ = e18777;var statearr_18778_18794 = state_18764;(statearr_18778_18794[5] = ex__13948__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18764);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13946__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18795 = state_18764;
state_18764 = G__18795;
continue;
}
} else
{return ret_value__13946__auto__;
}
break;
}
});
state_machine__13945__auto__ = function(state_18764){
switch(arguments.length){
case 0:
return state_machine__13945__auto____0.call(this);
case 1:
return state_machine__13945__auto____1.call(this,state_18764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13945__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13945__auto____0;
state_machine__13945__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13945__auto____1;
return state_machine__13945__auto__;
})()
;})(switch__13944__auto__))
})();var state__14016__auto__ = (function (){var statearr_18779 = f__14015__auto__.call(null);(statearr_18779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14014__auto___18787);
return statearr_18779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14016__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__18780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__18781 = null;var count__18782 = 0;var i__18783 = 0;while(true){
if((i__18783 < count__18782))
{var map__18784 = cljs.core._nth.call(null,chunk__18781,i__18783);var map__18784__$1 = ((cljs.core.seq_QMARK_.call(null,map__18784))?cljs.core.apply.call(null,cljs.core.hash_map,map__18784):map__18784);var todo = map__18784__$1;var completed = cljs.core.get.call(null,map__18784__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__18784__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__18784__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__18796 = seq__18780;
var G__18797 = chunk__18781;
var G__18798 = count__18782;
var G__18799 = (i__18783 + 1);
seq__18780 = G__18796;
chunk__18781 = G__18797;
count__18782 = G__18798;
i__18783 = G__18799;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18780);if(temp__4092__auto__)
{var seq__18780__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18780__$1))
{var c__11138__auto__ = cljs.core.chunk_first.call(null,seq__18780__$1);{
var G__18800 = cljs.core.chunk_rest.call(null,seq__18780__$1);
var G__18801 = c__11138__auto__;
var G__18802 = cljs.core.count.call(null,c__11138__auto__);
var G__18803 = 0;
seq__18780 = G__18800;
chunk__18781 = G__18801;
count__18782 = G__18802;
i__18783 = G__18803;
continue;
}
} else
{var map__18785 = cljs.core.first.call(null,seq__18780__$1);var map__18785__$1 = ((cljs.core.seq_QMARK_.call(null,map__18785))?cljs.core.apply.call(null,cljs.core.hash_map,map__18785):map__18785);var todo = map__18785__$1;var completed = cljs.core.get.call(null,map__18785__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__18785__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__18785__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__18804 = cljs.core.next.call(null,seq__18780__$1);
var G__18805 = null;
var G__18806 = 0;
var G__18807 = 0;
seq__18780 = G__18804;
chunk__18781 = G__18805;
count__18782 = G__18806;
i__18783 = G__18807;
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

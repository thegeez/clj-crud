// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('datascript');
goog.require('datascript');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
/**
* Not yet in cljs-ajax 0.2.3
* @param {...*} var_args
*/
todomvc.services.DELETE = (function() { 
var DELETE__delegate = function (uri,p__16742){var vec__16744 = p__16742;var opts = cljs.core.nth.call(null,vec__16744,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__16742 = null;if (arguments.length > 1) {
  p__16742 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__16742);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__16745){
var uri = cljs.core.first(arglist__16745);
var p__16742 = cljs.core.rest(arglist__16745);
return DELETE__delegate(uri,p__16742);
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
todomvc.services.handle = (function (){var method_table__11187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11191__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,db,channel){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11191__auto__,method_table__11187__auto__,prefer_table__11188__auto__,method_cache__11189__auto__,cached_hierarchy__11190__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__16746,db,channel){var vec__16747 = p__16746;var temp_id = cljs.core.nth.call(null,vec__16747,0,null);var text = cljs.core.nth.call(null,vec__16747,1,null);return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__16748,db,channel){var vec__16749 = p__16748;var id = cljs.core.nth.call(null,vec__16749,0,null);var text = cljs.core.nth.call(null,vec__16749,1,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res for complete-edit: "),cljs.core.str(res),cljs.core.str(" id is "),cljs.core.str(id),cljs.core.str(" text is "),cljs.core.str(text)].join(''));
return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-edit","commit-edit",2479195218),id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (p__16750,p__16751){var map__16752 = p__16750;var map__16752__$1 = ((cljs.core.seq_QMARK_.call(null,map__16752))?cljs.core.apply.call(null,cljs.core.hash_map,map__16752):map__16752);var channel = cljs.core.get.call(null,map__16752__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16753 = p__16751;var _ = cljs.core.nth.call(null,vec__16753,0,null);var id = cljs.core.nth.call(null,vec__16753,1,null);var completed = cljs.core.nth.call(null,vec__16753,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (p__16754,p__16755){var map__16756 = p__16754;var map__16756__$1 = ((cljs.core.seq_QMARK_.call(null,map__16756))?cljs.core.apply.call(null,cljs.core.hash_map,map__16756):map__16756);var channel = cljs.core.get.call(null,map__16756__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__16757 = p__16755;var _ = cljs.core.nth.call(null,vec__16757,0,null);var id = cljs.core.nth.call(null,vec__16757,1,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (p__16758,_){var map__16759 = p__16758;var map__16759__$1 = ((cljs.core.seq_QMARK_.call(null,map__16759))?cljs.core.apply.call(null,cljs.core.hash_map,map__16759):map__16759);var channel = cljs.core.get.call(null,map__16759__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16759__$1,new cljs.core.Keyword(null,"state","state",1123661827));var seq__16760 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));var chunk__16762 = null;var count__16763 = 0;var i__16764 = 0;while(true){
if((i__16764 < count__16763))
{var map__16766 = cljs.core._nth.call(null,chunk__16762,i__16764);var map__16766__$1 = ((cljs.core.seq_QMARK_.call(null,map__16766))?cljs.core.apply.call(null,cljs.core.hash_map,map__16766):map__16766);var item = map__16766__$1;var completed = cljs.core.get.call(null,map__16766__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16766__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__16768 = seq__16760;
var G__16769 = chunk__16762;
var G__16770 = count__16763;
var G__16771 = (i__16764 + 1);
seq__16760 = G__16768;
chunk__16762 = G__16769;
count__16763 = G__16770;
i__16764 = G__16771;
continue;
}
} else
{{
var G__16772 = seq__16760;
var G__16773 = chunk__16762;
var G__16774 = count__16763;
var G__16775 = (i__16764 + 1);
seq__16760 = G__16772;
chunk__16762 = G__16773;
count__16763 = G__16774;
i__16764 = G__16775;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16760);if(temp__4092__auto__)
{var seq__16760__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16760__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__16760__$1);{
var G__16776 = cljs.core.chunk_rest.call(null,seq__16760__$1);
var G__16777 = c__11077__auto__;
var G__16778 = cljs.core.count.call(null,c__11077__auto__);
var G__16779 = 0;
seq__16760 = G__16776;
chunk__16762 = G__16777;
count__16763 = G__16778;
i__16764 = G__16779;
continue;
}
} else
{var map__16767 = cljs.core.first.call(null,seq__16760__$1);var map__16767__$1 = ((cljs.core.seq_QMARK_.call(null,map__16767))?cljs.core.apply.call(null,cljs.core.hash_map,map__16767):map__16767);var item = map__16767__$1;var completed = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16767__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__16780 = cljs.core.next.call(null,seq__16760__$1);
var G__16781 = null;
var G__16782 = 0;
var G__16783 = 0;
seq__16760 = G__16780;
chunk__16762 = G__16781;
count__16763 = G__16782;
i__16764 = G__16783;
continue;
}
} else
{{
var G__16784 = cljs.core.next.call(null,seq__16760__$1);
var G__16785 = null;
var G__16786 = 0;
var G__16787 = 0;
seq__16760 = G__16784;
chunk__16762 = G__16785;
count__16763 = G__16786;
i__16764 = G__16787;
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
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__16788,_){var map__16789 = p__16788;var map__16789__$1 = ((cljs.core.seq_QMARK_.call(null,map__16789))?cljs.core.apply.call(null,cljs.core.hash_map,map__16789):map__16789);var channel = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16789__$1,new cljs.core.Keyword(null,"state","state",1123661827));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var seq__16790 = cljs.core.seq.call(null,items);var chunk__16792 = null;var count__16793 = 0;var i__16794 = 0;while(true){
if((i__16794 < count__16793))
{var map__16796 = cljs.core._nth.call(null,chunk__16792,i__16794);var map__16796__$1 = ((cljs.core.seq_QMARK_.call(null,map__16796))?cljs.core.apply.call(null,cljs.core.hash_map,map__16796):map__16796);var item = map__16796__$1;var completed = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16796__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__16798 = seq__16790;
var G__16799 = chunk__16792;
var G__16800 = count__16793;
var G__16801 = (i__16794 + 1);
seq__16790 = G__16798;
chunk__16792 = G__16799;
count__16793 = G__16800;
i__16794 = G__16801;
continue;
}
} else
{{
var G__16802 = seq__16790;
var G__16803 = chunk__16792;
var G__16804 = count__16793;
var G__16805 = (i__16794 + 1);
seq__16790 = G__16802;
chunk__16792 = G__16803;
count__16793 = G__16804;
i__16794 = G__16805;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16790);if(temp__4092__auto__)
{var seq__16790__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16790__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__16790__$1);{
var G__16806 = cljs.core.chunk_rest.call(null,seq__16790__$1);
var G__16807 = c__11077__auto__;
var G__16808 = cljs.core.count.call(null,c__11077__auto__);
var G__16809 = 0;
seq__16790 = G__16806;
chunk__16792 = G__16807;
count__16793 = G__16808;
i__16794 = G__16809;
continue;
}
} else
{var map__16797 = cljs.core.first.call(null,seq__16790__$1);var map__16797__$1 = ((cljs.core.seq_QMARK_.call(null,map__16797))?cljs.core.apply.call(null,cljs.core.hash_map,map__16797):map__16797);var item = map__16797__$1;var completed = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__16797__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__16810 = cljs.core.next.call(null,seq__16790__$1);
var G__16811 = null;
var G__16812 = 0;
var G__16813 = 0;
seq__16790 = G__16810;
chunk__16792 = G__16811;
count__16793 = G__16812;
i__16794 = G__16813;
continue;
}
} else
{{
var G__16814 = cljs.core.next.call(null,seq__16790__$1);
var G__16815 = null;
var G__16816 = 0;
var G__16817 = 0;
seq__16790 = G__16814;
chunk__16792 = G__16815;
count__16793 = G__16816;
i__16794 = G__16817;
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
var map__16822 = app;var map__16822__$1 = ((cljs.core.seq_QMARK_.call(null,map__16822))?cljs.core.apply.call(null,cljs.core.hash_map,map__16822):map__16822);var channel = cljs.core.get.call(null,map__16822__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var conn = cljs.core.get.call(null,map__16822__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));return datascript.listen_BANG_.call(null,conn,(function (p__16823){var map__16824 = p__16823;var map__16824__$1 = ((cljs.core.seq_QMARK_.call(null,map__16824))?cljs.core.apply.call(null,cljs.core.hash_map,map__16824):map__16824);var report = map__16824__$1;var db_after = cljs.core.get.call(null,map__16824__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));console.log([cljs.core.str("Report: "),cljs.core.str(cljs.core.pr_str.call(null,report)),cljs.core.str("keys"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report))))].join(''));
var vec__16825 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__16825,0,null);var args = cljs.core.nth.call(null,vec__16825,1,null);return todomvc.services.handle.call(null,event,args,db_after,channel);
}));
});

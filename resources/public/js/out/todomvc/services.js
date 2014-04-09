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
todomvc.services.todos_url = (function todos_url(){[cljs.core.str(document.URL)].join('');
return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
todomvc.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.handle = (function (){var method_table__11166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11168__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11169__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11170__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (channel,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11170__auto__,method_table__11166__auto__,prefer_table__11167__auto__,method_cache__11168__auto__,cached_hierarchy__11169__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (channel,p__18305){var vec__18306 = p__18305;var _ = cljs.core.nth.call(null,vec__18306,0,null);var text = cljs.core.nth.call(null,vec__18306,1,null);console.log([cljs.core.str("create-item"),cljs.core.str(text)].join(''));
var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (channel,p__18307){var vec__18308 = p__18307;var _ = cljs.core.nth.call(null,vec__18308,0,null);var id = cljs.core.nth.call(null,vec__18308,1,null);var text = cljs.core.nth.call(null,vec__18308,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (channel,p__18309){var vec__18310 = p__18309;var _ = cljs.core.nth.call(null,vec__18310,0,null);var id = cljs.core.nth.call(null,vec__18310,1,null);var completed = cljs.core.nth.call(null,vec__18310,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.services.start_services = (function start_services(app){console.log([cljs.core.str("Url is: "),cljs.core.str(document.URL)].join(''));
var map__18348 = app;var map__18348__$1 = ((cljs.core.seq_QMARK_.call(null,map__18348))?cljs.core.apply.call(null,cljs.core.hash_map,map__18348):map__18348);var emit = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__18348__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var c__13932__auto___18385 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13933__auto__ = (function (){var switch__13862__auto__ = (function (state_18363){var state_val_18364 = (state_18363[1]);if((state_val_18364 === 7))
{var inst_18352 = (state_18363[2]);var inst_18353 = [cljs.core.str("service: "),cljs.core.str(inst_18352)].join('');var inst_18354 = console.log(inst_18353);var inst_18355 = todomvc.services.handle.call(null,channel,inst_18352);var state_18363__$1 = (function (){var statearr_18365 = state_18363;(statearr_18365[7] = inst_18355);
(statearr_18365[8] = inst_18354);
return statearr_18365;
})();var statearr_18366_18386 = state_18363__$1;(statearr_18366_18386[2] = null);
(statearr_18366_18386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18364 === 6))
{var inst_18359 = (state_18363[2]);var state_18363__$1 = state_18363;var statearr_18367_18387 = state_18363__$1;(statearr_18367_18387[2] = inst_18359);
(statearr_18367_18387[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18364 === 5))
{var state_18363__$1 = state_18363;var statearr_18368_18388 = state_18363__$1;(statearr_18368_18388[2] = null);
(statearr_18368_18388[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18364 === 4))
{var state_18363__$1 = state_18363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18363__$1,7,emit);
} else
{if((state_val_18364 === 3))
{var inst_18361 = (state_18363[2]);var state_18363__$1 = state_18363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18363__$1,inst_18361);
} else
{if((state_val_18364 === 2))
{var state_18363__$1 = state_18363;if(true)
{var statearr_18369_18389 = state_18363__$1;(statearr_18369_18389[1] = 4);
} else
{var statearr_18370_18390 = state_18363__$1;(statearr_18370_18390[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18364 === 1))
{var state_18363__$1 = state_18363;var statearr_18371_18391 = state_18363__$1;(statearr_18371_18391[2] = null);
(statearr_18371_18391[1] = 2);
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
});return ((function (switch__13862__auto__){
return (function() {
var state_machine__13863__auto__ = null;
var state_machine__13863__auto____0 = (function (){var statearr_18375 = [null,null,null,null,null,null,null,null,null];(statearr_18375[0] = state_machine__13863__auto__);
(statearr_18375[1] = 1);
return statearr_18375;
});
var state_machine__13863__auto____1 = (function (state_18363){while(true){
var ret_value__13864__auto__ = (function (){try{while(true){
var result__13865__auto__ = switch__13862__auto__.call(null,state_18363);if(cljs.core.keyword_identical_QMARK_.call(null,result__13865__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13865__auto__;
}
break;
}
}catch (e18376){if((e18376 instanceof Object))
{var ex__13866__auto__ = e18376;var statearr_18377_18392 = state_18363;(statearr_18377_18392[5] = ex__13866__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13864__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18393 = state_18363;
state_18363 = G__18393;
continue;
}
} else
{return ret_value__13864__auto__;
}
break;
}
});
state_machine__13863__auto__ = function(state_18363){
switch(arguments.length){
case 0:
return state_machine__13863__auto____0.call(this);
case 1:
return state_machine__13863__auto____1.call(this,state_18363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13863__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13863__auto____0;
state_machine__13863__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13863__auto____1;
return state_machine__13863__auto__;
})()
;})(switch__13862__auto__))
})();var state__13934__auto__ = (function (){var statearr_18378 = f__13933__auto__.call(null);(statearr_18378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13932__auto___18385);
return statearr_18378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13934__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__18379 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__18380 = null;var count__18381 = 0;var i__18382 = 0;while(true){
if((i__18382 < count__18381))
{var map__18383 = cljs.core._nth.call(null,chunk__18380,i__18382);var map__18383__$1 = ((cljs.core.seq_QMARK_.call(null,map__18383))?cljs.core.apply.call(null,cljs.core.hash_map,map__18383):map__18383);var todo = map__18383__$1;var completed = cljs.core.get.call(null,map__18383__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__18383__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__18383__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__18394 = seq__18379;
var G__18395 = chunk__18380;
var G__18396 = count__18381;
var G__18397 = (i__18382 + 1);
seq__18379 = G__18394;
chunk__18380 = G__18395;
count__18381 = G__18396;
i__18382 = G__18397;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18379);if(temp__4092__auto__)
{var seq__18379__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18379__$1))
{var c__11056__auto__ = cljs.core.chunk_first.call(null,seq__18379__$1);{
var G__18398 = cljs.core.chunk_rest.call(null,seq__18379__$1);
var G__18399 = c__11056__auto__;
var G__18400 = cljs.core.count.call(null,c__11056__auto__);
var G__18401 = 0;
seq__18379 = G__18398;
chunk__18380 = G__18399;
count__18381 = G__18400;
i__18382 = G__18401;
continue;
}
} else
{var map__18384 = cljs.core.first.call(null,seq__18379__$1);var map__18384__$1 = ((cljs.core.seq_QMARK_.call(null,map__18384))?cljs.core.apply.call(null,cljs.core.hash_map,map__18384):map__18384);var todo = map__18384__$1;var completed = cljs.core.get.call(null,map__18384__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__18384__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__18384__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__18402 = cljs.core.next.call(null,seq__18379__$1);
var G__18403 = null;
var G__18404 = 0;
var G__18405 = 0;
seq__18379 = G__18402;
chunk__18380 = G__18403;
count__18381 = G__18404;
i__18382 = G__18405;
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

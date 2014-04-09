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
var DELETE__delegate = function (uri,p__16992){var vec__16994 = p__16992;var opts = cljs.core.nth.call(null,vec__16994,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__16992 = null;if (arguments.length > 1) {
  p__16992 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__16992);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__16995){
var uri = cljs.core.first(arglist__16995);
var p__16992 = cljs.core.rest(arglist__16995);
return DELETE__delegate(uri,p__16992);
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
todomvc.services.handle = (function (){var method_table__11182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11186__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (channel,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11186__auto__,method_table__11182__auto__,prefer_table__11183__auto__,method_cache__11184__auto__,cached_hierarchy__11185__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (channel,p__16996){var vec__16997 = p__16996;var _ = cljs.core.nth.call(null,vec__16997,0,null);var text = cljs.core.nth.call(null,vec__16997,1,null);console.log([cljs.core.str("create-item"),cljs.core.str(text)].join(''));
var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (channel,p__16998){var vec__16999 = p__16998;var _ = cljs.core.nth.call(null,vec__16999,0,null);var id = cljs.core.nth.call(null,vec__16999,1,null);var text = cljs.core.nth.call(null,vec__16999,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (channel,p__17000){var vec__17001 = p__17000;var _ = cljs.core.nth.call(null,vec__17001,0,null);var id = cljs.core.nth.call(null,vec__17001,1,null);var completed = cljs.core.nth.call(null,vec__17001,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (channel,p__17002){var vec__17003 = p__17002;var _ = cljs.core.nth.call(null,vec__17003,0,null);var id = cljs.core.nth.call(null,vec__17003,1,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
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
var map__17041 = app;var map__17041__$1 = ((cljs.core.seq_QMARK_.call(null,map__17041))?cljs.core.apply.call(null,cljs.core.hash_map,map__17041):map__17041);var emit = cljs.core.get.call(null,map__17041__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__17041__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var c__13948__auto___17078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13949__auto__ = (function (){var switch__13878__auto__ = (function (state_17056){var state_val_17057 = (state_17056[1]);if((state_val_17057 === 7))
{var inst_17045 = (state_17056[2]);var inst_17046 = [cljs.core.str("service: "),cljs.core.str(inst_17045)].join('');var inst_17047 = console.log(inst_17046);var inst_17048 = todomvc.services.handle.call(null,channel,inst_17045);var state_17056__$1 = (function (){var statearr_17058 = state_17056;(statearr_17058[7] = inst_17047);
(statearr_17058[8] = inst_17048);
return statearr_17058;
})();var statearr_17059_17079 = state_17056__$1;(statearr_17059_17079[2] = null);
(statearr_17059_17079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 6))
{var inst_17052 = (state_17056[2]);var state_17056__$1 = state_17056;var statearr_17060_17080 = state_17056__$1;(statearr_17060_17080[2] = inst_17052);
(statearr_17060_17080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 5))
{var state_17056__$1 = state_17056;var statearr_17061_17081 = state_17056__$1;(statearr_17061_17081[2] = null);
(statearr_17061_17081[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 4))
{var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17056__$1,7,emit);
} else
{if((state_val_17057 === 3))
{var inst_17054 = (state_17056[2]);var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17056__$1,inst_17054);
} else
{if((state_val_17057 === 2))
{var state_17056__$1 = state_17056;if(true)
{var statearr_17062_17082 = state_17056__$1;(statearr_17062_17082[1] = 4);
} else
{var statearr_17063_17083 = state_17056__$1;(statearr_17063_17083[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17057 === 1))
{var state_17056__$1 = state_17056;var statearr_17064_17084 = state_17056__$1;(statearr_17064_17084[2] = null);
(statearr_17064_17084[1] = 2);
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
});return ((function (switch__13878__auto__){
return (function() {
var state_machine__13879__auto__ = null;
var state_machine__13879__auto____0 = (function (){var statearr_17068 = [null,null,null,null,null,null,null,null,null];(statearr_17068[0] = state_machine__13879__auto__);
(statearr_17068[1] = 1);
return statearr_17068;
});
var state_machine__13879__auto____1 = (function (state_17056){while(true){
var ret_value__13880__auto__ = (function (){try{while(true){
var result__13881__auto__ = switch__13878__auto__.call(null,state_17056);if(cljs.core.keyword_identical_QMARK_.call(null,result__13881__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13881__auto__;
}
break;
}
}catch (e17069){if((e17069 instanceof Object))
{var ex__13882__auto__ = e17069;var statearr_17070_17085 = state_17056;(statearr_17070_17085[5] = ex__13882__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13880__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17086 = state_17056;
state_17056 = G__17086;
continue;
}
} else
{return ret_value__13880__auto__;
}
break;
}
});
state_machine__13879__auto__ = function(state_17056){
switch(arguments.length){
case 0:
return state_machine__13879__auto____0.call(this);
case 1:
return state_machine__13879__auto____1.call(this,state_17056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13879__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13879__auto____0;
state_machine__13879__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13879__auto____1;
return state_machine__13879__auto__;
})()
;})(switch__13878__auto__))
})();var state__13950__auto__ = (function (){var statearr_17071 = f__13949__auto__.call(null);(statearr_17071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13948__auto___17078);
return statearr_17071;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13950__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__17072 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__17073 = null;var count__17074 = 0;var i__17075 = 0;while(true){
if((i__17075 < count__17074))
{var map__17076 = cljs.core._nth.call(null,chunk__17073,i__17075);var map__17076__$1 = ((cljs.core.seq_QMARK_.call(null,map__17076))?cljs.core.apply.call(null,cljs.core.hash_map,map__17076):map__17076);var todo = map__17076__$1;var completed = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__17076__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__17087 = seq__17072;
var G__17088 = chunk__17073;
var G__17089 = count__17074;
var G__17090 = (i__17075 + 1);
seq__17072 = G__17087;
chunk__17073 = G__17088;
count__17074 = G__17089;
i__17075 = G__17090;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17072);if(temp__4092__auto__)
{var seq__17072__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17072__$1))
{var c__11072__auto__ = cljs.core.chunk_first.call(null,seq__17072__$1);{
var G__17091 = cljs.core.chunk_rest.call(null,seq__17072__$1);
var G__17092 = c__11072__auto__;
var G__17093 = cljs.core.count.call(null,c__11072__auto__);
var G__17094 = 0;
seq__17072 = G__17091;
chunk__17073 = G__17092;
count__17074 = G__17093;
i__17075 = G__17094;
continue;
}
} else
{var map__17077 = cljs.core.first.call(null,seq__17072__$1);var map__17077__$1 = ((cljs.core.seq_QMARK_.call(null,map__17077))?cljs.core.apply.call(null,cljs.core.hash_map,map__17077):map__17077);var todo = map__17077__$1;var completed = cljs.core.get.call(null,map__17077__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__17077__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__17077__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__17095 = cljs.core.next.call(null,seq__17072__$1);
var G__17096 = null;
var G__17097 = 0;
var G__17098 = 0;
seq__17072 = G__17095;
chunk__17073 = G__17096;
count__17074 = G__17097;
i__17075 = G__17098;
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

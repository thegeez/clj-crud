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
goog.require('cljs.core.async');
todomvc.services.todos_url = (function todos_url(){[cljs.core.str(document.URL)].join('');
return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.handle = (function (){var method_table__11120__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11123__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11124__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (channel,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11124__auto__,method_table__11120__auto__,prefer_table__11121__auto__,method_cache__11122__auto__,cached_hierarchy__11123__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (channel,p__18209){var vec__18210 = p__18209;var _ = cljs.core.nth.call(null,vec__18210,0,null);var text = cljs.core.nth.call(null,vec__18210,1,null);console.log([cljs.core.str("create-item"),cljs.core.str(text)].join(''));
var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",goog.dom.getElement("csrf-token").getAttribute("value")], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.services.start_services = (function start_services(app){console.log([cljs.core.str("Url is: "),cljs.core.str(document.URL)].join(''));
var map__18248 = app;var map__18248__$1 = ((cljs.core.seq_QMARK_.call(null,map__18248))?cljs.core.apply.call(null,cljs.core.hash_map,map__18248):map__18248);var emit = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__18248__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var c__13886__auto___18285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_18263){var state_val_18264 = (state_18263[1]);if((state_val_18264 === 7))
{var inst_18252 = (state_18263[2]);var inst_18253 = [cljs.core.str("service: "),cljs.core.str(inst_18252)].join('');var inst_18254 = console.log(inst_18253);var inst_18255 = todomvc.services.handle.call(null,channel,inst_18252);var state_18263__$1 = (function (){var statearr_18265 = state_18263;(statearr_18265[7] = inst_18254);
(statearr_18265[8] = inst_18255);
return statearr_18265;
})();var statearr_18266_18286 = state_18263__$1;(statearr_18266_18286[2] = null);
(statearr_18266_18286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18264 === 6))
{var inst_18259 = (state_18263[2]);var state_18263__$1 = state_18263;var statearr_18267_18287 = state_18263__$1;(statearr_18267_18287[2] = inst_18259);
(statearr_18267_18287[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18264 === 5))
{var state_18263__$1 = state_18263;var statearr_18268_18288 = state_18263__$1;(statearr_18268_18288[2] = null);
(statearr_18268_18288[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18264 === 4))
{var state_18263__$1 = state_18263;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18263__$1,7,emit);
} else
{if((state_val_18264 === 3))
{var inst_18261 = (state_18263[2]);var state_18263__$1 = state_18263;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18263__$1,inst_18261);
} else
{if((state_val_18264 === 2))
{var state_18263__$1 = state_18263;if(true)
{var statearr_18269_18289 = state_18263__$1;(statearr_18269_18289[1] = 4);
} else
{var statearr_18270_18290 = state_18263__$1;(statearr_18270_18290[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18264 === 1))
{var state_18263__$1 = state_18263;var statearr_18271_18291 = state_18263__$1;(statearr_18271_18291[2] = null);
(statearr_18271_18291[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_18275 = [null,null,null,null,null,null,null,null,null];(statearr_18275[0] = state_machine__13817__auto__);
(statearr_18275[1] = 1);
return statearr_18275;
});
var state_machine__13817__auto____1 = (function (state_18263){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_18263);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e18276){if((e18276 instanceof Object))
{var ex__13820__auto__ = e18276;var statearr_18277_18292 = state_18263;(statearr_18277_18292[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18263);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18276;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18293 = state_18263;
state_18263 = G__18293;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_18263){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_18263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_18278 = f__13887__auto__.call(null);(statearr_18278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___18285);
return statearr_18278;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__18279 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__18280 = null;var count__18281 = 0;var i__18282 = 0;while(true){
if((i__18282 < count__18281))
{var map__18283 = cljs.core._nth.call(null,chunk__18280,i__18282);var map__18283__$1 = ((cljs.core.seq_QMARK_.call(null,map__18283))?cljs.core.apply.call(null,cljs.core.hash_map,map__18283):map__18283);var todo = map__18283__$1;var text = cljs.core.get.call(null,map__18283__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__18283__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text], null));
{
var G__18294 = seq__18279;
var G__18295 = chunk__18280;
var G__18296 = count__18281;
var G__18297 = (i__18282 + 1);
seq__18279 = G__18294;
chunk__18280 = G__18295;
count__18281 = G__18296;
i__18282 = G__18297;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18279);if(temp__4092__auto__)
{var seq__18279__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18279__$1))
{var c__11010__auto__ = cljs.core.chunk_first.call(null,seq__18279__$1);{
var G__18298 = cljs.core.chunk_rest.call(null,seq__18279__$1);
var G__18299 = c__11010__auto__;
var G__18300 = cljs.core.count.call(null,c__11010__auto__);
var G__18301 = 0;
seq__18279 = G__18298;
chunk__18280 = G__18299;
count__18281 = G__18300;
i__18282 = G__18301;
continue;
}
} else
{var map__18284 = cljs.core.first.call(null,seq__18279__$1);var map__18284__$1 = ((cljs.core.seq_QMARK_.call(null,map__18284))?cljs.core.apply.call(null,cljs.core.hash_map,map__18284):map__18284);var todo = map__18284__$1;var text = cljs.core.get.call(null,map__18284__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__18284__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text], null));
{
var G__18302 = cljs.core.next.call(null,seq__18279__$1);
var G__18303 = null;
var G__18304 = 0;
var G__18305 = 0;
seq__18279 = G__18302;
chunk__18280 = G__18303;
count__18281 = G__18304;
i__18282 = G__18305;
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

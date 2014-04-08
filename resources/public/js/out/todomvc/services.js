// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
todomvc.services.current_url = (function current_url(){return [cljs.core.str(document.URL)].join('');
});
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.handle = (function (){var method_table__11120__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11121__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11122__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11123__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11124__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (channel,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11124__auto__,method_table__11120__auto__,prefer_table__11121__auto__,method_cache__11122__auto__,cached_hierarchy__11123__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (channel,p__16479){var vec__16480 = p__16479;var _ = cljs.core.nth.call(null,vec__16480,0,null);var text = cljs.core.nth.call(null,vec__16480,1,null);console.log([cljs.core.str("create-item"),cljs.core.str(text)].join(''));
var id = -4;cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),id,text], null));
console.log([cljs.core.str("toL "),cljs.core.str(todomvc.services.current_url.call(null))].join(''));
return ajax.core.POST.call(null,todomvc.services.current_url.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),todomvc.services.error_handler.call(null,channel)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.services.start_services = (function start_services(app){console.log([cljs.core.str("Url is: "),cljs.core.str(document.URL)].join(''));
var map__16512 = app;var map__16512__$1 = ((cljs.core.seq_QMARK_.call(null,map__16512))?cljs.core.apply.call(null,cljs.core.hash_map,map__16512):map__16512);var emit = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__16512__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_16527){var state_val_16528 = (state_16527[1]);if((state_val_16528 === 7))
{var inst_16516 = (state_16527[2]);var inst_16517 = [cljs.core.str("service: "),cljs.core.str(inst_16516)].join('');var inst_16518 = console.log(inst_16517);var inst_16519 = todomvc.services.handle.call(null,channel,inst_16516);var state_16527__$1 = (function (){var statearr_16529 = state_16527;(statearr_16529[7] = inst_16518);
(statearr_16529[8] = inst_16519);
return statearr_16529;
})();var statearr_16530_16543 = state_16527__$1;(statearr_16530_16543[2] = null);
(statearr_16530_16543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16528 === 6))
{var inst_16523 = (state_16527[2]);var state_16527__$1 = state_16527;var statearr_16531_16544 = state_16527__$1;(statearr_16531_16544[2] = inst_16523);
(statearr_16531_16544[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16528 === 5))
{var state_16527__$1 = state_16527;var statearr_16532_16545 = state_16527__$1;(statearr_16532_16545[2] = null);
(statearr_16532_16545[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16528 === 4))
{var state_16527__$1 = state_16527;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16527__$1,7,emit);
} else
{if((state_val_16528 === 3))
{var inst_16525 = (state_16527[2]);var state_16527__$1 = state_16527;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16527__$1,inst_16525);
} else
{if((state_val_16528 === 2))
{var state_16527__$1 = state_16527;if(true)
{var statearr_16533_16546 = state_16527__$1;(statearr_16533_16546[1] = 4);
} else
{var statearr_16534_16547 = state_16527__$1;(statearr_16534_16547[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16528 === 1))
{var state_16527__$1 = state_16527;var statearr_16535_16548 = state_16527__$1;(statearr_16535_16548[2] = null);
(statearr_16535_16548[1] = 2);
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
var state_machine__13817__auto____0 = (function (){var statearr_16539 = [null,null,null,null,null,null,null,null,null];(statearr_16539[0] = state_machine__13817__auto__);
(statearr_16539[1] = 1);
return statearr_16539;
});
var state_machine__13817__auto____1 = (function (state_16527){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_16527);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e16540){if((e16540 instanceof Object))
{var ex__13820__auto__ = e16540;var statearr_16541_16549 = state_16527;(statearr_16541_16549[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16527);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16550 = state_16527;
state_16527 = G__16550;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_16527){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_16527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_16542 = f__13887__auto__.call(null);(statearr_16542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_16542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
});

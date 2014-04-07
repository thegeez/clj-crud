// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.start_services = (function start_services(app){var map__16473 = app;var map__16473__$1 = ((cljs.core.seq_QMARK_.call(null,map__16473))?cljs.core.apply.call(null,cljs.core.hash_map,map__16473):map__16473);var channel = cljs.core.get.call(null,map__16473__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),"Hello world!"], null));
cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),"Item 2"], null));
ajax.core.GET.call(null,"/todos/fail",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),"Succes"], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),todomvc.services.error_handler.call(null,channel)], null));
var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_16487){var state_val_16488 = (state_16487[1]);if((state_val_16488 === 3))
{var inst_16485 = (state_16487[2]);var state_16487__$1 = state_16487;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16487__$1,inst_16485);
} else
{if((state_val_16488 === 2))
{var inst_16476 = (state_16487[2]);var inst_16477 = new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(app);var inst_16478 = cljs.core.deref.call(null,inst_16477);var inst_16479 = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(inst_16478);var inst_16480 = cljs.core.rand_nth.call(null,inst_16479);var inst_16481 = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(inst_16480);var inst_16482 = [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),inst_16481];var inst_16483 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16482,null));var state_16487__$1 = (function (){var statearr_16489 = state_16487;(statearr_16489[7] = inst_16476);
return statearr_16489;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16487__$1,3,channel,inst_16483);
} else
{if((state_val_16488 === 1))
{var inst_16474 = cljs.core.async.timeout.call(null,3000);var state_16487__$1 = state_16487;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16487__$1,2,inst_16474);
} else
{return null;
}
}
}
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_16493 = [null,null,null,null,null,null,null,null];(statearr_16493[0] = state_machine__13817__auto__);
(statearr_16493[1] = 1);
return statearr_16493;
});
var state_machine__13817__auto____1 = (function (state_16487){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_16487);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e16494){if((e16494 instanceof Object))
{var ex__13820__auto__ = e16494;var statearr_16495_16497 = state_16487;(statearr_16495_16497[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16494;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16498 = state_16487;
state_16487 = G__16498;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_16487){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_16487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_16496 = f__13887__auto__.call(null);(statearr_16496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_16496;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
});

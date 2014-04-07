// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.application');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('todomvc.services');
goog.require('todomvc.services');
goog.require('todomvc.transact');
goog.require('todomvc.transact');
goog.require('todomvc.render');
goog.require('todomvc.render');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
/**
* Turn state into a pretty string
*/
todomvc.application.state_to_string = (function state_to_string(p__17370){var map__17372 = p__17370;var map__17372__$1 = ((cljs.core.seq_QMARK_.call(null,map__17372))?cljs.core.apply.call(null,cljs.core.hash_map,map__17372):map__17372);var error = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"items","items",1114430258));var next_id = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"next-id","next-id",2860930471));var current_filter = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return [cljs.core.str("{:all-done? "),cljs.core.str(all_done_QMARK_),cljs.core.str("\n"),cljs.core.str(" :current-filter "),cljs.core.str(current_filter),cljs.core.str("\n"),cljs.core.str(" :next-id "),cljs.core.str(next_id),cljs.core.str("\n"),cljs.core.str(" :items ["),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n         ",items))),cljs.core.str("]\n"),cljs.core.str((cljs.core.truth_(error)?[cljs.core.str(" :error "),cljs.core.str(error),cljs.core.str("\n")].join(''):null)),cljs.core.str("}")].join('');
});
/**
* Print state in browser console
*/
todomvc.application.pp_state = (function pp_state(state){return console.log(todomvc.application.state_to_string.call(null,state));
});
/**
* Print transaction in browser console
*/
todomvc.application.pp_transaction = (function pp_transaction(transaction){return console.log([cljs.core.str("\n(transact state "),cljs.core.str(transaction),cljs.core.str(") =>")].join(''));
});
/**
* Return a map containing the initial application
*/
todomvc.application.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,todomvc.transact.initial_state.call(null)),new cljs.core.Keyword(null,"channel","channel",1752854645),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"transact","transact",2294782044),todomvc.transact.main,new cljs.core.Keyword(null,"render-pending?","render-pending?",2215462737),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"render","render",4374279432),todomvc.render.main], null);
});
/**
* For every value coming from channel;
* - call transact to update the application state
* - trigger a render
*/
todomvc.application.init_updates = (function init_updates(p__17373){var map__17407 = p__17373;var map__17407__$1 = ((cljs.core.seq_QMARK_.call(null,map__17407))?cljs.core.apply.call(null,cljs.core.hash_map,map__17407):map__17407);var app = map__17407__$1;var render = cljs.core.get.call(null,map__17407__$1,new cljs.core.Keyword(null,"render","render",4374279432));var transact = cljs.core.get.call(null,map__17407__$1,new cljs.core.Keyword(null,"transact","transact",2294782044));var channel = cljs.core.get.call(null,map__17407__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__17407__$1,new cljs.core.Keyword(null,"state","state",1123661827));var c__13887__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13888__auto__ = (function (){var switch__13817__auto__ = (function (state_17424){var state_val_17425 = (state_17424[1]);if((state_val_17425 === 7))
{var inst_17411 = (state_17424[2]);var inst_17412 = cljs.core.swap_BANG_.call(null,state,transact,inst_17411);var inst_17413 = todomvc.application.pp_transaction.call(null,inst_17411);var inst_17414 = cljs.core.deref.call(null,state);var inst_17415 = todomvc.application.pp_state.call(null,inst_17414);var inst_17416 = render.call(null,app);var state_17424__$1 = (function (){var statearr_17426 = state_17424;(statearr_17426[7] = inst_17412);
(statearr_17426[8] = inst_17413);
(statearr_17426[9] = inst_17416);
(statearr_17426[10] = inst_17415);
return statearr_17426;
})();var statearr_17427_17440 = state_17424__$1;(statearr_17427_17440[2] = null);
(statearr_17427_17440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 6))
{var inst_17420 = (state_17424[2]);var state_17424__$1 = state_17424;var statearr_17428_17441 = state_17424__$1;(statearr_17428_17441[2] = inst_17420);
(statearr_17428_17441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 5))
{var state_17424__$1 = state_17424;var statearr_17429_17442 = state_17424__$1;(statearr_17429_17442[2] = null);
(statearr_17429_17442[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 4))
{var state_17424__$1 = state_17424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17424__$1,7,channel);
} else
{if((state_val_17425 === 3))
{var inst_17422 = (state_17424[2]);var state_17424__$1 = state_17424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17424__$1,inst_17422);
} else
{if((state_val_17425 === 2))
{var state_17424__$1 = state_17424;if(true)
{var statearr_17430_17443 = state_17424__$1;(statearr_17430_17443[1] = 4);
} else
{var statearr_17431_17444 = state_17424__$1;(statearr_17431_17444[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17425 === 1))
{var state_17424__$1 = state_17424;var statearr_17432_17445 = state_17424__$1;(statearr_17432_17445[2] = null);
(statearr_17432_17445[1] = 2);
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
});return ((function (switch__13817__auto__){
return (function() {
var state_machine__13818__auto__ = null;
var state_machine__13818__auto____0 = (function (){var statearr_17436 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17436[0] = state_machine__13818__auto__);
(statearr_17436[1] = 1);
return statearr_17436;
});
var state_machine__13818__auto____1 = (function (state_17424){while(true){
var ret_value__13819__auto__ = (function (){try{while(true){
var result__13820__auto__ = switch__13817__auto__.call(null,state_17424);if(cljs.core.keyword_identical_QMARK_.call(null,result__13820__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13820__auto__;
}
break;
}
}catch (e17437){if((e17437 instanceof Object))
{var ex__13821__auto__ = e17437;var statearr_17438_17446 = state_17424;(statearr_17438_17446[5] = ex__13821__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17424);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17437;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17447 = state_17424;
state_17424 = G__17447;
continue;
}
} else
{return ret_value__13819__auto__;
}
break;
}
});
state_machine__13818__auto__ = function(state_17424){
switch(arguments.length){
case 0:
return state_machine__13818__auto____0.call(this);
case 1:
return state_machine__13818__auto____1.call(this,state_17424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13818__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13818__auto____0;
state_machine__13818__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13818__auto____1;
return state_machine__13818__auto__;
})()
;})(switch__13817__auto__))
})();var state__13889__auto__ = (function (){var statearr_17439 = f__13888__auto__.call(null);(statearr_17439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13887__auto__);
return statearr_17439;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13889__auto__);
}));
return c__13887__auto__;
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){var map__17449 = todomvc.application.load_app.call(null);var map__17449__$1 = ((cljs.core.seq_QMARK_.call(null,map__17449))?cljs.core.apply.call(null,cljs.core.hash_map,map__17449):map__17449);var app = map__17449__$1;var render = cljs.core.get.call(null,map__17449__$1,new cljs.core.Keyword(null,"render","render",4374279432));var state = cljs.core.get.call(null,map__17449__$1,new cljs.core.Keyword(null,"state","state",1123661827));todomvc.application.init_updates.call(null,app);
todomvc.services.start_services.call(null,app);
todomvc.application.pp_state.call(null,cljs.core.deref.call(null,state));
render.call(null,app);
todomvc.application.app_hook = app;
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);

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
todomvc.application.state_to_string = (function state_to_string(p__16393){var map__16395 = p__16393;var map__16395__$1 = ((cljs.core.seq_QMARK_.call(null,map__16395))?cljs.core.apply.call(null,cljs.core.hash_map,map__16395):map__16395);var error = cljs.core.get.call(null,map__16395__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__16395__$1,new cljs.core.Keyword(null,"items","items",1114430258));var next_id = cljs.core.get.call(null,map__16395__$1,new cljs.core.Keyword(null,"next-id","next-id",2860930471));var current_filter = cljs.core.get.call(null,map__16395__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__16395__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return [cljs.core.str("{:all-done? "),cljs.core.str(all_done_QMARK_),cljs.core.str("\n"),cljs.core.str(" :current-filter "),cljs.core.str(current_filter),cljs.core.str("\n"),cljs.core.str(" :next-id "),cljs.core.str(next_id),cljs.core.str("\n"),cljs.core.str(" :items ["),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n         ",items))),cljs.core.str("]\n"),cljs.core.str((cljs.core.truth_(error)?[cljs.core.str(" :error "),cljs.core.str(error),cljs.core.str("\n")].join(''):null)),cljs.core.str("}")].join('');
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
todomvc.application.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",1123661827),cljs.core.atom.call(null,todomvc.transact.initial_state.call(null)),new cljs.core.Keyword(null,"channel","channel",1752854645),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"emit","emit",1017021253),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"transact","transact",2294782044),todomvc.transact.main,new cljs.core.Keyword(null,"render-pending?","render-pending?",2215462737),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"render","render",4374279432),todomvc.render.main], null);
});
/**
* For every value coming from channel;
* - call transact to update the application state
* - trigger a render
*/
todomvc.application.init_updates = (function init_updates(p__16396){var map__16433 = p__16396;var map__16433__$1 = ((cljs.core.seq_QMARK_.call(null,map__16433))?cljs.core.apply.call(null,cljs.core.hash_map,map__16433):map__16433);var app = map__16433__$1;var render = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"render","render",4374279432));var transact = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"transact","transact",2294782044));var emit = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"state","state",1123661827));var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_16452){var state_val_16453 = (state_16452[1]);if((state_val_16453 === 8))
{var inst_16437 = (state_16452[7]);var inst_16439 = (state_16452[2]);var inst_16440 = cljs.core.swap_BANG_.call(null,state,transact,inst_16437);var inst_16441 = todomvc.application.pp_transaction.call(null,inst_16437);var inst_16442 = cljs.core.deref.call(null,state);var inst_16443 = todomvc.application.pp_state.call(null,inst_16442);var inst_16444 = render.call(null,app);var state_16452__$1 = (function (){var statearr_16454 = state_16452;(statearr_16454[8] = inst_16444);
(statearr_16454[9] = inst_16443);
(statearr_16454[10] = inst_16441);
(statearr_16454[11] = inst_16440);
(statearr_16454[12] = inst_16439);
return statearr_16454;
})();var statearr_16455_16469 = state_16452__$1;(statearr_16455_16469[2] = null);
(statearr_16455_16469[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16453 === 7))
{var inst_16437 = (state_16452[7]);var inst_16437__$1 = (state_16452[2]);var state_16452__$1 = (function (){var statearr_16456 = state_16452;(statearr_16456[7] = inst_16437__$1);
return statearr_16456;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16452__$1,8,emit,inst_16437__$1);
} else
{if((state_val_16453 === 6))
{var inst_16448 = (state_16452[2]);var state_16452__$1 = state_16452;var statearr_16457_16470 = state_16452__$1;(statearr_16457_16470[2] = inst_16448);
(statearr_16457_16470[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16453 === 5))
{var state_16452__$1 = state_16452;var statearr_16458_16471 = state_16452__$1;(statearr_16458_16471[2] = null);
(statearr_16458_16471[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16453 === 4))
{var state_16452__$1 = state_16452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16452__$1,7,channel);
} else
{if((state_val_16453 === 3))
{var inst_16450 = (state_16452[2]);var state_16452__$1 = state_16452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16452__$1,inst_16450);
} else
{if((state_val_16453 === 2))
{var state_16452__$1 = state_16452;if(true)
{var statearr_16459_16472 = state_16452__$1;(statearr_16459_16472[1] = 4);
} else
{var statearr_16460_16473 = state_16452__$1;(statearr_16460_16473[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16453 === 1))
{var state_16452__$1 = state_16452;var statearr_16461_16474 = state_16452__$1;(statearr_16461_16474[2] = null);
(statearr_16461_16474[1] = 2);
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
}
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_16465 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16465[0] = state_machine__13817__auto__);
(statearr_16465[1] = 1);
return statearr_16465;
});
var state_machine__13817__auto____1 = (function (state_16452){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_16452);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e16466){if((e16466 instanceof Object))
{var ex__13820__auto__ = e16466;var statearr_16467_16475 = state_16452;(statearr_16467_16475[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16476 = state_16452;
state_16452 = G__16476;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_16452){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_16452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_16468 = f__13887__auto__.call(null);(statearr_16468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_16468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){var map__16478 = todomvc.application.load_app.call(null);var map__16478__$1 = ((cljs.core.seq_QMARK_.call(null,map__16478))?cljs.core.apply.call(null,cljs.core.hash_map,map__16478):map__16478);var app = map__16478__$1;var render = cljs.core.get.call(null,map__16478__$1,new cljs.core.Keyword(null,"render","render",4374279432));var state = cljs.core.get.call(null,map__16478__$1,new cljs.core.Keyword(null,"state","state",1123661827));todomvc.application.init_updates.call(null,app);
todomvc.services.start_services.call(null,app);
todomvc.application.pp_state.call(null,cljs.core.deref.call(null,state));
render.call(null,app);
todomvc.application.app_hook = app;
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);

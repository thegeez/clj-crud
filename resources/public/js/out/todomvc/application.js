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
todomvc.application.state_to_string = (function state_to_string(p__16509){var map__16511 = p__16509;var map__16511__$1 = ((cljs.core.seq_QMARK_.call(null,map__16511))?cljs.core.apply.call(null,cljs.core.hash_map,map__16511):map__16511);var error = cljs.core.get.call(null,map__16511__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__16511__$1,new cljs.core.Keyword(null,"items","items",1114430258));var current_filter = cljs.core.get.call(null,map__16511__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__16511__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return [cljs.core.str("{:all-done? "),cljs.core.str(all_done_QMARK_),cljs.core.str("\n"),cljs.core.str(" :current-filter "),cljs.core.str(current_filter),cljs.core.str("\n"),cljs.core.str(" :items ["),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n         ",items))),cljs.core.str("]\n"),cljs.core.str((cljs.core.truth_(error)?[cljs.core.str(" :error "),cljs.core.str(error),cljs.core.str("\n")].join(''):null)),cljs.core.str("}")].join('');
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
todomvc.application.init_updates = (function init_updates(p__16512){var map__16549 = p__16512;var map__16549__$1 = ((cljs.core.seq_QMARK_.call(null,map__16549))?cljs.core.apply.call(null,cljs.core.hash_map,map__16549):map__16549);var app = map__16549__$1;var render = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"render","render",4374279432));var transact = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"transact","transact",2294782044));var emit = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__16549__$1,new cljs.core.Keyword(null,"state","state",1123661827));var c__13953__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_16568){var state_val_16569 = (state_16568[1]);if((state_val_16569 === 8))
{var inst_16553 = (state_16568[7]);var inst_16555 = (state_16568[2]);var inst_16556 = cljs.core.swap_BANG_.call(null,state,transact,inst_16553);var inst_16557 = todomvc.application.pp_transaction.call(null,inst_16553);var inst_16558 = cljs.core.deref.call(null,state);var inst_16559 = todomvc.application.pp_state.call(null,inst_16558);var inst_16560 = render.call(null,app);var state_16568__$1 = (function (){var statearr_16570 = state_16568;(statearr_16570[8] = inst_16559);
(statearr_16570[9] = inst_16557);
(statearr_16570[10] = inst_16556);
(statearr_16570[11] = inst_16555);
(statearr_16570[12] = inst_16560);
return statearr_16570;
})();var statearr_16571_16585 = state_16568__$1;(statearr_16571_16585[2] = null);
(statearr_16571_16585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16569 === 7))
{var inst_16553 = (state_16568[7]);var inst_16553__$1 = (state_16568[2]);var state_16568__$1 = (function (){var statearr_16572 = state_16568;(statearr_16572[7] = inst_16553__$1);
return statearr_16572;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16568__$1,8,emit,inst_16553__$1);
} else
{if((state_val_16569 === 6))
{var inst_16564 = (state_16568[2]);var state_16568__$1 = state_16568;var statearr_16573_16586 = state_16568__$1;(statearr_16573_16586[2] = inst_16564);
(statearr_16573_16586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16569 === 5))
{var state_16568__$1 = state_16568;var statearr_16574_16587 = state_16568__$1;(statearr_16574_16587[2] = null);
(statearr_16574_16587[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16569 === 4))
{var state_16568__$1 = state_16568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16568__$1,7,channel);
} else
{if((state_val_16569 === 3))
{var inst_16566 = (state_16568[2]);var state_16568__$1 = state_16568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16568__$1,inst_16566);
} else
{if((state_val_16569 === 2))
{var state_16568__$1 = state_16568;if(true)
{var statearr_16575_16588 = state_16568__$1;(statearr_16575_16588[1] = 4);
} else
{var statearr_16576_16589 = state_16568__$1;(statearr_16576_16589[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16569 === 1))
{var state_16568__$1 = state_16568;var statearr_16577_16590 = state_16568__$1;(statearr_16577_16590[2] = null);
(statearr_16577_16590[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_16581 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16581[0] = state_machine__13884__auto__);
(statearr_16581[1] = 1);
return statearr_16581;
});
var state_machine__13884__auto____1 = (function (state_16568){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_16568);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e16582){if((e16582 instanceof Object))
{var ex__13887__auto__ = e16582;var statearr_16583_16591 = state_16568;(statearr_16583_16591[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16592 = state_16568;
state_16568 = G__16592;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_16568){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_16568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_16584 = f__13954__auto__.call(null);(statearr_16584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto__);
return statearr_16584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
}));
return c__13953__auto__;
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){var map__16594 = todomvc.application.load_app.call(null);var map__16594__$1 = ((cljs.core.seq_QMARK_.call(null,map__16594))?cljs.core.apply.call(null,cljs.core.hash_map,map__16594):map__16594);var app = map__16594__$1;var render = cljs.core.get.call(null,map__16594__$1,new cljs.core.Keyword(null,"render","render",4374279432));var state = cljs.core.get.call(null,map__16594__$1,new cljs.core.Keyword(null,"state","state",1123661827));todomvc.application.init_updates.call(null,app);
todomvc.services.start_services.call(null,app);
todomvc.application.pp_state.call(null,cljs.core.deref.call(null,state));
render.call(null,app);
todomvc.application.app_hook = app;
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);

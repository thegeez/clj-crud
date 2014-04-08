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
todomvc.application.state_to_string = (function state_to_string(p__17738){var map__17740 = p__17738;var map__17740__$1 = ((cljs.core.seq_QMARK_.call(null,map__17740))?cljs.core.apply.call(null,cljs.core.hash_map,map__17740):map__17740);var error = cljs.core.get.call(null,map__17740__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__17740__$1,new cljs.core.Keyword(null,"items","items",1114430258));var current_filter = cljs.core.get.call(null,map__17740__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__17740__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return [cljs.core.str("{:all-done? "),cljs.core.str(all_done_QMARK_),cljs.core.str("\n"),cljs.core.str(" :current-filter "),cljs.core.str(current_filter),cljs.core.str("\n"),cljs.core.str(" :items ["),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n         ",items))),cljs.core.str("]\n"),cljs.core.str((cljs.core.truth_(error)?[cljs.core.str(" :error "),cljs.core.str(error),cljs.core.str("\n")].join(''):null)),cljs.core.str("}")].join('');
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
todomvc.application.init_updates = (function init_updates(p__17741){var map__17778 = p__17741;var map__17778__$1 = ((cljs.core.seq_QMARK_.call(null,map__17778))?cljs.core.apply.call(null,cljs.core.hash_map,map__17778):map__17778);var app = map__17778__$1;var render = cljs.core.get.call(null,map__17778__$1,new cljs.core.Keyword(null,"render","render",4374279432));var transact = cljs.core.get.call(null,map__17778__$1,new cljs.core.Keyword(null,"transact","transact",2294782044));var emit = cljs.core.get.call(null,map__17778__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__17778__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__17778__$1,new cljs.core.Keyword(null,"state","state",1123661827));var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_17797){var state_val_17798 = (state_17797[1]);if((state_val_17798 === 8))
{var inst_17782 = (state_17797[7]);var inst_17784 = (state_17797[2]);var inst_17785 = cljs.core.swap_BANG_.call(null,state,transact,inst_17782);var inst_17786 = todomvc.application.pp_transaction.call(null,inst_17782);var inst_17787 = cljs.core.deref.call(null,state);var inst_17788 = todomvc.application.pp_state.call(null,inst_17787);var inst_17789 = render.call(null,app);var state_17797__$1 = (function (){var statearr_17799 = state_17797;(statearr_17799[8] = inst_17789);
(statearr_17799[9] = inst_17788);
(statearr_17799[10] = inst_17786);
(statearr_17799[11] = inst_17784);
(statearr_17799[12] = inst_17785);
return statearr_17799;
})();var statearr_17800_17814 = state_17797__$1;(statearr_17800_17814[2] = null);
(statearr_17800_17814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17798 === 7))
{var inst_17782 = (state_17797[7]);var inst_17782__$1 = (state_17797[2]);var state_17797__$1 = (function (){var statearr_17801 = state_17797;(statearr_17801[7] = inst_17782__$1);
return statearr_17801;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17797__$1,8,emit,inst_17782__$1);
} else
{if((state_val_17798 === 6))
{var inst_17793 = (state_17797[2]);var state_17797__$1 = state_17797;var statearr_17802_17815 = state_17797__$1;(statearr_17802_17815[2] = inst_17793);
(statearr_17802_17815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17798 === 5))
{var state_17797__$1 = state_17797;var statearr_17803_17816 = state_17797__$1;(statearr_17803_17816[2] = null);
(statearr_17803_17816[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17798 === 4))
{var state_17797__$1 = state_17797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17797__$1,7,channel);
} else
{if((state_val_17798 === 3))
{var inst_17795 = (state_17797[2]);var state_17797__$1 = state_17797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17797__$1,inst_17795);
} else
{if((state_val_17798 === 2))
{var state_17797__$1 = state_17797;if(true)
{var statearr_17804_17817 = state_17797__$1;(statearr_17804_17817[1] = 4);
} else
{var statearr_17805_17818 = state_17797__$1;(statearr_17805_17818[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17798 === 1))
{var state_17797__$1 = state_17797;var statearr_17806_17819 = state_17797__$1;(statearr_17806_17819[2] = null);
(statearr_17806_17819[1] = 2);
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
var state_machine__13817__auto____0 = (function (){var statearr_17810 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17810[0] = state_machine__13817__auto__);
(statearr_17810[1] = 1);
return statearr_17810;
});
var state_machine__13817__auto____1 = (function (state_17797){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_17797);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e17811){if((e17811 instanceof Object))
{var ex__13820__auto__ = e17811;var statearr_17812_17820 = state_17797;(statearr_17812_17820[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17811;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17821 = state_17797;
state_17797 = G__17821;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_17813 = f__13887__auto__.call(null);(statearr_17813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_17813;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){var map__17823 = todomvc.application.load_app.call(null);var map__17823__$1 = ((cljs.core.seq_QMARK_.call(null,map__17823))?cljs.core.apply.call(null,cljs.core.hash_map,map__17823):map__17823);var app = map__17823__$1;var render = cljs.core.get.call(null,map__17823__$1,new cljs.core.Keyword(null,"render","render",4374279432));var state = cljs.core.get.call(null,map__17823__$1,new cljs.core.Keyword(null,"state","state",1123661827));todomvc.application.init_updates.call(null,app);
todomvc.services.start_services.call(null,app);
todomvc.application.pp_state.call(null,cljs.core.deref.call(null,state));
render.call(null,app);
todomvc.application.app_hook = app;
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);

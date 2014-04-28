// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.application');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('datascript');
goog.require('todomvc.render');
goog.require('todomvc.render');
goog.require('todomvc.transact');
goog.require('todomvc.services');
goog.require('datascript');
goog.require('goog.events');
goog.require('todomvc.transact');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('todomvc.services');
/**
* Turn state into a pretty string
*/
todomvc.application.state_to_string = (function state_to_string(p__16624){var map__16626 = p__16624;var map__16626__$1 = ((cljs.core.seq_QMARK_.call(null,map__16626))?cljs.core.apply.call(null,cljs.core.hash_map,map__16626):map__16626);var error = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"error","error",1110689146));var items = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"items","items",1114430258));var current_filter = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582));var all_done_QMARK_ = cljs.core.get.call(null,map__16626__$1,new cljs.core.Keyword(null,"all-done?","all-done?",3774632259));return [cljs.core.str("{:all-done? "),cljs.core.str(all_done_QMARK_),cljs.core.str("\n"),cljs.core.str(" :current-filter "),cljs.core.str(current_filter),cljs.core.str("\n"),cljs.core.str(" :items ["),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n         ",items))),cljs.core.str("]\n"),cljs.core.str((cljs.core.truth_(error)?[cljs.core.str(" :error "),cljs.core.str(error),cljs.core.str("\n")].join(''):null)),cljs.core.str("}")].join('');
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
todomvc.application.load_app = (function load_app(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"conn","conn",1016963742),datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"channel","channel",1752854645),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"transact","transact",2294782044),todomvc.transact.handle,new cljs.core.Keyword(null,"render-pending?","render-pending?",2215462737),cljs.core.atom.call(null,false),new cljs.core.Keyword(null,"render","render",4374279432),todomvc.render.main], null);
});
/**
* For every value coming from channel;
* - call transact to update the application state
*/
todomvc.application.init_updates = (function init_updates(p__16627){var map__16678 = p__16627;var map__16678__$1 = ((cljs.core.seq_QMARK_.call(null,map__16678))?cljs.core.apply.call(null,cljs.core.hash_map,map__16678):map__16678);var app = map__16678__$1;var transact = cljs.core.get.call(null,map__16678__$1,new cljs.core.Keyword(null,"transact","transact",2294782044));var channel = cljs.core.get.call(null,map__16678__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var conn = cljs.core.get.call(null,map__16678__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));var c__14152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_16707){var state_val_16708 = (state_16707[1]);if((state_val_16708 === 1))
{var state_16707__$1 = state_16707;var statearr_16709_16728 = state_16707__$1;(statearr_16709_16728[2] = null);
(statearr_16709_16728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 2))
{var state_16707__$1 = state_16707;if(true)
{var statearr_16710_16729 = state_16707__$1;(statearr_16710_16729[1] = 4);
} else
{var statearr_16711_16730 = state_16707__$1;(statearr_16711_16730[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 3))
{var inst_16705 = (state_16707[2]);var state_16707__$1 = state_16707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16707__$1,inst_16705);
} else
{if((state_val_16708 === 4))
{var state_16707__$1 = state_16707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16707__$1,7,channel);
} else
{if((state_val_16708 === 5))
{var state_16707__$1 = state_16707;var statearr_16712_16731 = state_16707__$1;(statearr_16712_16731[2] = null);
(statearr_16712_16731[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 6))
{var inst_16703 = (state_16707[2]);var state_16707__$1 = state_16707;var statearr_16713_16732 = state_16707__$1;(statearr_16713_16732[2] = inst_16703);
(statearr_16713_16732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 7))
{var inst_16687 = (state_16707[7]);var inst_16683 = (state_16707[8]);var inst_16683__$1 = (state_16707[2]);var inst_16684 = transact.call(null,inst_16683__$1);var inst_16685 = [cljs.core.str("Datoms"),cljs.core.str(inst_16684)].join('');var inst_16686 = console.log(inst_16685);var inst_16687__$1 = datascript.transact_BANG_.call(null,conn,inst_16684);var inst_16688 = cljs.core.seq_QMARK_.call(null,inst_16687__$1);var state_16707__$1 = (function (){var statearr_16714 = state_16707;(statearr_16714[9] = inst_16686);
(statearr_16714[7] = inst_16687__$1);
(statearr_16714[8] = inst_16683__$1);
return statearr_16714;
})();if(inst_16688)
{var statearr_16715_16733 = state_16707__$1;(statearr_16715_16733[1] = 8);
} else
{var statearr_16716_16734 = state_16707__$1;(statearr_16716_16734[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 8))
{var inst_16687 = (state_16707[7]);var inst_16690 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16687);var state_16707__$1 = state_16707;var statearr_16717_16735 = state_16707__$1;(statearr_16717_16735[2] = inst_16690);
(statearr_16717_16735[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 9))
{var inst_16687 = (state_16707[7]);var state_16707__$1 = state_16707;var statearr_16718_16736 = state_16707__$1;(statearr_16718_16736[2] = inst_16687);
(statearr_16718_16736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16708 === 10))
{var inst_16683 = (state_16707[8]);var inst_16693 = (state_16707[2]);var inst_16694 = cljs.core.get.call(null,inst_16693,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var inst_16695 = console.log("db transact done");var inst_16696 = cljs.core.pr_str.call(null,inst_16683);var inst_16697 = console.log(inst_16696);var inst_16698 = cljs.core.pr_str.call(null,inst_16694);var inst_16699 = console.log(inst_16698);var state_16707__$1 = (function (){var statearr_16719 = state_16707;(statearr_16719[10] = inst_16699);
(statearr_16719[11] = inst_16697);
(statearr_16719[12] = inst_16695);
return statearr_16719;
})();var statearr_16720_16737 = state_16707__$1;(statearr_16720_16737[2] = null);
(statearr_16720_16737[1] = 2);
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
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_16724 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16724[0] = state_machine__14083__auto__);
(statearr_16724[1] = 1);
return statearr_16724;
});
var state_machine__14083__auto____1 = (function (state_16707){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_16707);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e16725){if((e16725 instanceof Object))
{var ex__14086__auto__ = e16725;var statearr_16726_16738 = state_16707;(statearr_16726_16738[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16739 = state_16707;
state_16707 = G__16739;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_16707){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_16707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_16727 = f__14153__auto__.call(null);(statearr_16727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto__);
return statearr_16727;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return c__14152__auto__;
});
/**
* Application entry point
*/
todomvc.application.main = (function main(){var map__16741 = todomvc.application.load_app.call(null);var map__16741__$1 = ((cljs.core.seq_QMARK_.call(null,map__16741))?cljs.core.apply.call(null,cljs.core.hash_map,map__16741):map__16741);var app = map__16741__$1;var render = cljs.core.get.call(null,map__16741__$1,new cljs.core.Keyword(null,"render","render",4374279432));var render_pending_QMARK_ = cljs.core.get.call(null,map__16741__$1,new cljs.core.Keyword(null,"render-pending?","render-pending?",2215462737));var channel = cljs.core.get.call(null,map__16741__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var conn = cljs.core.get.call(null,map__16741__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"current-filter","current-filter",2062811582),new cljs.core.Keyword(null,"all","all",1014000915)], null)], null));
datascript.listen_BANG_.call(null,conn,(function (report){console.log([cljs.core.str("Report: "),cljs.core.str(cljs.core.pr_str.call(null,report))].join(''));
return render.call(null,render_pending_QMARK_,new cljs.core.Keyword(null,"db-after","db-after",1658340159).cljs$core$IFn$_invoke$arity$1(report),channel);
}));
todomvc.application.init_updates.call(null,app);
todomvc.services.start_services.call(null,app);
render.call(null,render_pending_QMARK_,cljs.core.deref.call(null,conn),channel);
todomvc.application.app = app;
});
goog.exportSymbol('todomvc.application.main', todomvc.application.main);

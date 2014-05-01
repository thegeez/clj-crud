// Compiled by ClojureScript 0.0-2173
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
goog.require('quiescent');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.dom.js_props = (function js_props(obj){if(cljs.core.map_QMARK_.call(null,obj))
{var o = (function (){var obj18465 = {};return obj18465;
})();var seq__18466_18472 = cljs.core.seq.call(null,obj);var chunk__18467_18473 = null;var count__18468_18474 = 0;var i__18469_18475 = 0;while(true){
if((i__18469_18475 < count__18468_18474))
{var vec__18470_18476 = cljs.core._nth.call(null,chunk__18467_18473,i__18469_18475);var k_18477 = cljs.core.nth.call(null,vec__18470_18476,0,null);var v_18478 = cljs.core.nth.call(null,vec__18470_18476,1,null);(o[cljs.core.name.call(null,k_18477)] = js_props.call(null,v_18478));
{
var G__18479 = seq__18466_18472;
var G__18480 = chunk__18467_18473;
var G__18481 = count__18468_18474;
var G__18482 = (i__18469_18475 + 1);
seq__18466_18472 = G__18479;
chunk__18467_18473 = G__18480;
count__18468_18474 = G__18481;
i__18469_18475 = G__18482;
continue;
}
} else
{var temp__4092__auto___18483 = cljs.core.seq.call(null,seq__18466_18472);if(temp__4092__auto___18483)
{var seq__18466_18484__$1 = temp__4092__auto___18483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18466_18484__$1))
{var c__11077__auto___18485 = cljs.core.chunk_first.call(null,seq__18466_18484__$1);{
var G__18486 = cljs.core.chunk_rest.call(null,seq__18466_18484__$1);
var G__18487 = c__11077__auto___18485;
var G__18488 = cljs.core.count.call(null,c__11077__auto___18485);
var G__18489 = 0;
seq__18466_18472 = G__18486;
chunk__18467_18473 = G__18487;
count__18468_18474 = G__18488;
i__18469_18475 = G__18489;
continue;
}
} else
{var vec__18471_18490 = cljs.core.first.call(null,seq__18466_18484__$1);var k_18491 = cljs.core.nth.call(null,vec__18471_18490,0,null);var v_18492 = cljs.core.nth.call(null,vec__18471_18490,1,null);(o[cljs.core.name.call(null,k_18491)] = js_props.call(null,v_18492));
{
var G__18493 = cljs.core.next.call(null,seq__18466_18484__$1);
var G__18494 = null;
var G__18495 = 0;
var G__18496 = 0;
seq__18466_18472 = G__18493;
chunk__18467_18473 = G__18494;
count__18468_18474 = G__18495;
i__18469_18475 = G__18496;
continue;
}
}
} else
{}
}
break;
}
return o;
} else
{return obj;
}
});
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18501_19449 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18502_19450 = null;var count__18503_19451 = 0;var i__18504_19452 = 0;while(true){
if((i__18504_19452 < count__18503_19451))
{var arg__11924__auto___19453 = cljs.core._nth.call(null,chunk__18502_19450,i__18504_19452);a__11923__auto__.push(arg__11924__auto___19453);
{
var G__19454 = seq__18501_19449;
var G__19455 = chunk__18502_19450;
var G__19456 = count__18503_19451;
var G__19457 = (i__18504_19452 + 1);
seq__18501_19449 = G__19454;
chunk__18502_19450 = G__19455;
count__18503_19451 = G__19456;
i__18504_19452 = G__19457;
continue;
}
} else
{var temp__4092__auto___19458 = cljs.core.seq.call(null,seq__18501_19449);if(temp__4092__auto___19458)
{var seq__18501_19459__$1 = temp__4092__auto___19458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18501_19459__$1))
{var c__11077__auto___19460 = cljs.core.chunk_first.call(null,seq__18501_19459__$1);{
var G__19461 = cljs.core.chunk_rest.call(null,seq__18501_19459__$1);
var G__19462 = c__11077__auto___19460;
var G__19463 = cljs.core.count.call(null,c__11077__auto___19460);
var G__19464 = 0;
seq__18501_19449 = G__19461;
chunk__18502_19450 = G__19462;
count__18503_19451 = G__19463;
i__18504_19452 = G__19464;
continue;
}
} else
{var arg__11924__auto___19465 = cljs.core.first.call(null,seq__18501_19459__$1);a__11923__auto__.push(arg__11924__auto___19465);
{
var G__19466 = cljs.core.next.call(null,seq__18501_19459__$1);
var G__19467 = null;
var G__19468 = 0;
var G__19469 = 0;
seq__18501_19449 = G__19466;
chunk__18502_19450 = G__19467;
count__18503_19451 = G__19468;
i__18504_19452 = G__19469;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__11923__auto__);
};
var a = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__11922__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__19470){
var args__11922__auto__ = cljs.core.seq(arglist__19470);
return a__delegate(args__11922__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18509_19471 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18510_19472 = null;var count__18511_19473 = 0;var i__18512_19474 = 0;while(true){
if((i__18512_19474 < count__18511_19473))
{var arg__11924__auto___19475 = cljs.core._nth.call(null,chunk__18510_19472,i__18512_19474);a__11923__auto__.push(arg__11924__auto___19475);
{
var G__19476 = seq__18509_19471;
var G__19477 = chunk__18510_19472;
var G__19478 = count__18511_19473;
var G__19479 = (i__18512_19474 + 1);
seq__18509_19471 = G__19476;
chunk__18510_19472 = G__19477;
count__18511_19473 = G__19478;
i__18512_19474 = G__19479;
continue;
}
} else
{var temp__4092__auto___19480 = cljs.core.seq.call(null,seq__18509_19471);if(temp__4092__auto___19480)
{var seq__18509_19481__$1 = temp__4092__auto___19480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18509_19481__$1))
{var c__11077__auto___19482 = cljs.core.chunk_first.call(null,seq__18509_19481__$1);{
var G__19483 = cljs.core.chunk_rest.call(null,seq__18509_19481__$1);
var G__19484 = c__11077__auto___19482;
var G__19485 = cljs.core.count.call(null,c__11077__auto___19482);
var G__19486 = 0;
seq__18509_19471 = G__19483;
chunk__18510_19472 = G__19484;
count__18511_19473 = G__19485;
i__18512_19474 = G__19486;
continue;
}
} else
{var arg__11924__auto___19487 = cljs.core.first.call(null,seq__18509_19481__$1);a__11923__auto__.push(arg__11924__auto___19487);
{
var G__19488 = cljs.core.next.call(null,seq__18509_19481__$1);
var G__19489 = null;
var G__19490 = 0;
var G__19491 = 0;
seq__18509_19471 = G__19488;
chunk__18510_19472 = G__19489;
count__18511_19473 = G__19490;
i__18512_19474 = G__19491;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__11923__auto__);
};
var abbr = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__11922__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__19492){
var args__11922__auto__ = cljs.core.seq(arglist__19492);
return abbr__delegate(args__11922__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18517_19493 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18518_19494 = null;var count__18519_19495 = 0;var i__18520_19496 = 0;while(true){
if((i__18520_19496 < count__18519_19495))
{var arg__11924__auto___19497 = cljs.core._nth.call(null,chunk__18518_19494,i__18520_19496);a__11923__auto__.push(arg__11924__auto___19497);
{
var G__19498 = seq__18517_19493;
var G__19499 = chunk__18518_19494;
var G__19500 = count__18519_19495;
var G__19501 = (i__18520_19496 + 1);
seq__18517_19493 = G__19498;
chunk__18518_19494 = G__19499;
count__18519_19495 = G__19500;
i__18520_19496 = G__19501;
continue;
}
} else
{var temp__4092__auto___19502 = cljs.core.seq.call(null,seq__18517_19493);if(temp__4092__auto___19502)
{var seq__18517_19503__$1 = temp__4092__auto___19502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18517_19503__$1))
{var c__11077__auto___19504 = cljs.core.chunk_first.call(null,seq__18517_19503__$1);{
var G__19505 = cljs.core.chunk_rest.call(null,seq__18517_19503__$1);
var G__19506 = c__11077__auto___19504;
var G__19507 = cljs.core.count.call(null,c__11077__auto___19504);
var G__19508 = 0;
seq__18517_19493 = G__19505;
chunk__18518_19494 = G__19506;
count__18519_19495 = G__19507;
i__18520_19496 = G__19508;
continue;
}
} else
{var arg__11924__auto___19509 = cljs.core.first.call(null,seq__18517_19503__$1);a__11923__auto__.push(arg__11924__auto___19509);
{
var G__19510 = cljs.core.next.call(null,seq__18517_19503__$1);
var G__19511 = null;
var G__19512 = 0;
var G__19513 = 0;
seq__18517_19493 = G__19510;
chunk__18518_19494 = G__19511;
count__18519_19495 = G__19512;
i__18520_19496 = G__19513;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__11923__auto__);
};
var address = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__11922__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__19514){
var args__11922__auto__ = cljs.core.seq(arglist__19514);
return address__delegate(args__11922__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18525_19515 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18526_19516 = null;var count__18527_19517 = 0;var i__18528_19518 = 0;while(true){
if((i__18528_19518 < count__18527_19517))
{var arg__11924__auto___19519 = cljs.core._nth.call(null,chunk__18526_19516,i__18528_19518);a__11923__auto__.push(arg__11924__auto___19519);
{
var G__19520 = seq__18525_19515;
var G__19521 = chunk__18526_19516;
var G__19522 = count__18527_19517;
var G__19523 = (i__18528_19518 + 1);
seq__18525_19515 = G__19520;
chunk__18526_19516 = G__19521;
count__18527_19517 = G__19522;
i__18528_19518 = G__19523;
continue;
}
} else
{var temp__4092__auto___19524 = cljs.core.seq.call(null,seq__18525_19515);if(temp__4092__auto___19524)
{var seq__18525_19525__$1 = temp__4092__auto___19524;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18525_19525__$1))
{var c__11077__auto___19526 = cljs.core.chunk_first.call(null,seq__18525_19525__$1);{
var G__19527 = cljs.core.chunk_rest.call(null,seq__18525_19525__$1);
var G__19528 = c__11077__auto___19526;
var G__19529 = cljs.core.count.call(null,c__11077__auto___19526);
var G__19530 = 0;
seq__18525_19515 = G__19527;
chunk__18526_19516 = G__19528;
count__18527_19517 = G__19529;
i__18528_19518 = G__19530;
continue;
}
} else
{var arg__11924__auto___19531 = cljs.core.first.call(null,seq__18525_19525__$1);a__11923__auto__.push(arg__11924__auto___19531);
{
var G__19532 = cljs.core.next.call(null,seq__18525_19525__$1);
var G__19533 = null;
var G__19534 = 0;
var G__19535 = 0;
seq__18525_19515 = G__19532;
chunk__18526_19516 = G__19533;
count__18527_19517 = G__19534;
i__18528_19518 = G__19535;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__11923__auto__);
};
var area = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__11922__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__19536){
var args__11922__auto__ = cljs.core.seq(arglist__19536);
return area__delegate(args__11922__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18533_19537 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18534_19538 = null;var count__18535_19539 = 0;var i__18536_19540 = 0;while(true){
if((i__18536_19540 < count__18535_19539))
{var arg__11924__auto___19541 = cljs.core._nth.call(null,chunk__18534_19538,i__18536_19540);a__11923__auto__.push(arg__11924__auto___19541);
{
var G__19542 = seq__18533_19537;
var G__19543 = chunk__18534_19538;
var G__19544 = count__18535_19539;
var G__19545 = (i__18536_19540 + 1);
seq__18533_19537 = G__19542;
chunk__18534_19538 = G__19543;
count__18535_19539 = G__19544;
i__18536_19540 = G__19545;
continue;
}
} else
{var temp__4092__auto___19546 = cljs.core.seq.call(null,seq__18533_19537);if(temp__4092__auto___19546)
{var seq__18533_19547__$1 = temp__4092__auto___19546;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18533_19547__$1))
{var c__11077__auto___19548 = cljs.core.chunk_first.call(null,seq__18533_19547__$1);{
var G__19549 = cljs.core.chunk_rest.call(null,seq__18533_19547__$1);
var G__19550 = c__11077__auto___19548;
var G__19551 = cljs.core.count.call(null,c__11077__auto___19548);
var G__19552 = 0;
seq__18533_19537 = G__19549;
chunk__18534_19538 = G__19550;
count__18535_19539 = G__19551;
i__18536_19540 = G__19552;
continue;
}
} else
{var arg__11924__auto___19553 = cljs.core.first.call(null,seq__18533_19547__$1);a__11923__auto__.push(arg__11924__auto___19553);
{
var G__19554 = cljs.core.next.call(null,seq__18533_19547__$1);
var G__19555 = null;
var G__19556 = 0;
var G__19557 = 0;
seq__18533_19537 = G__19554;
chunk__18534_19538 = G__19555;
count__18535_19539 = G__19556;
i__18536_19540 = G__19557;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__11923__auto__);
};
var article = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__11922__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__19558){
var args__11922__auto__ = cljs.core.seq(arglist__19558);
return article__delegate(args__11922__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18541_19559 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18542_19560 = null;var count__18543_19561 = 0;var i__18544_19562 = 0;while(true){
if((i__18544_19562 < count__18543_19561))
{var arg__11924__auto___19563 = cljs.core._nth.call(null,chunk__18542_19560,i__18544_19562);a__11923__auto__.push(arg__11924__auto___19563);
{
var G__19564 = seq__18541_19559;
var G__19565 = chunk__18542_19560;
var G__19566 = count__18543_19561;
var G__19567 = (i__18544_19562 + 1);
seq__18541_19559 = G__19564;
chunk__18542_19560 = G__19565;
count__18543_19561 = G__19566;
i__18544_19562 = G__19567;
continue;
}
} else
{var temp__4092__auto___19568 = cljs.core.seq.call(null,seq__18541_19559);if(temp__4092__auto___19568)
{var seq__18541_19569__$1 = temp__4092__auto___19568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18541_19569__$1))
{var c__11077__auto___19570 = cljs.core.chunk_first.call(null,seq__18541_19569__$1);{
var G__19571 = cljs.core.chunk_rest.call(null,seq__18541_19569__$1);
var G__19572 = c__11077__auto___19570;
var G__19573 = cljs.core.count.call(null,c__11077__auto___19570);
var G__19574 = 0;
seq__18541_19559 = G__19571;
chunk__18542_19560 = G__19572;
count__18543_19561 = G__19573;
i__18544_19562 = G__19574;
continue;
}
} else
{var arg__11924__auto___19575 = cljs.core.first.call(null,seq__18541_19569__$1);a__11923__auto__.push(arg__11924__auto___19575);
{
var G__19576 = cljs.core.next.call(null,seq__18541_19569__$1);
var G__19577 = null;
var G__19578 = 0;
var G__19579 = 0;
seq__18541_19559 = G__19576;
chunk__18542_19560 = G__19577;
count__18543_19561 = G__19578;
i__18544_19562 = G__19579;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__11923__auto__);
};
var aside = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__11922__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__19580){
var args__11922__auto__ = cljs.core.seq(arglist__19580);
return aside__delegate(args__11922__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18549_19581 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18550_19582 = null;var count__18551_19583 = 0;var i__18552_19584 = 0;while(true){
if((i__18552_19584 < count__18551_19583))
{var arg__11924__auto___19585 = cljs.core._nth.call(null,chunk__18550_19582,i__18552_19584);a__11923__auto__.push(arg__11924__auto___19585);
{
var G__19586 = seq__18549_19581;
var G__19587 = chunk__18550_19582;
var G__19588 = count__18551_19583;
var G__19589 = (i__18552_19584 + 1);
seq__18549_19581 = G__19586;
chunk__18550_19582 = G__19587;
count__18551_19583 = G__19588;
i__18552_19584 = G__19589;
continue;
}
} else
{var temp__4092__auto___19590 = cljs.core.seq.call(null,seq__18549_19581);if(temp__4092__auto___19590)
{var seq__18549_19591__$1 = temp__4092__auto___19590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18549_19591__$1))
{var c__11077__auto___19592 = cljs.core.chunk_first.call(null,seq__18549_19591__$1);{
var G__19593 = cljs.core.chunk_rest.call(null,seq__18549_19591__$1);
var G__19594 = c__11077__auto___19592;
var G__19595 = cljs.core.count.call(null,c__11077__auto___19592);
var G__19596 = 0;
seq__18549_19581 = G__19593;
chunk__18550_19582 = G__19594;
count__18551_19583 = G__19595;
i__18552_19584 = G__19596;
continue;
}
} else
{var arg__11924__auto___19597 = cljs.core.first.call(null,seq__18549_19591__$1);a__11923__auto__.push(arg__11924__auto___19597);
{
var G__19598 = cljs.core.next.call(null,seq__18549_19591__$1);
var G__19599 = null;
var G__19600 = 0;
var G__19601 = 0;
seq__18549_19581 = G__19598;
chunk__18550_19582 = G__19599;
count__18551_19583 = G__19600;
i__18552_19584 = G__19601;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__11923__auto__);
};
var audio = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__11922__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__19602){
var args__11922__auto__ = cljs.core.seq(arglist__19602);
return audio__delegate(args__11922__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18557_19603 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18558_19604 = null;var count__18559_19605 = 0;var i__18560_19606 = 0;while(true){
if((i__18560_19606 < count__18559_19605))
{var arg__11924__auto___19607 = cljs.core._nth.call(null,chunk__18558_19604,i__18560_19606);a__11923__auto__.push(arg__11924__auto___19607);
{
var G__19608 = seq__18557_19603;
var G__19609 = chunk__18558_19604;
var G__19610 = count__18559_19605;
var G__19611 = (i__18560_19606 + 1);
seq__18557_19603 = G__19608;
chunk__18558_19604 = G__19609;
count__18559_19605 = G__19610;
i__18560_19606 = G__19611;
continue;
}
} else
{var temp__4092__auto___19612 = cljs.core.seq.call(null,seq__18557_19603);if(temp__4092__auto___19612)
{var seq__18557_19613__$1 = temp__4092__auto___19612;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18557_19613__$1))
{var c__11077__auto___19614 = cljs.core.chunk_first.call(null,seq__18557_19613__$1);{
var G__19615 = cljs.core.chunk_rest.call(null,seq__18557_19613__$1);
var G__19616 = c__11077__auto___19614;
var G__19617 = cljs.core.count.call(null,c__11077__auto___19614);
var G__19618 = 0;
seq__18557_19603 = G__19615;
chunk__18558_19604 = G__19616;
count__18559_19605 = G__19617;
i__18560_19606 = G__19618;
continue;
}
} else
{var arg__11924__auto___19619 = cljs.core.first.call(null,seq__18557_19613__$1);a__11923__auto__.push(arg__11924__auto___19619);
{
var G__19620 = cljs.core.next.call(null,seq__18557_19613__$1);
var G__19621 = null;
var G__19622 = 0;
var G__19623 = 0;
seq__18557_19603 = G__19620;
chunk__18558_19604 = G__19621;
count__18559_19605 = G__19622;
i__18560_19606 = G__19623;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__11923__auto__);
};
var b = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__11922__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__19624){
var args__11922__auto__ = cljs.core.seq(arglist__19624);
return b__delegate(args__11922__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18565_19625 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18566_19626 = null;var count__18567_19627 = 0;var i__18568_19628 = 0;while(true){
if((i__18568_19628 < count__18567_19627))
{var arg__11924__auto___19629 = cljs.core._nth.call(null,chunk__18566_19626,i__18568_19628);a__11923__auto__.push(arg__11924__auto___19629);
{
var G__19630 = seq__18565_19625;
var G__19631 = chunk__18566_19626;
var G__19632 = count__18567_19627;
var G__19633 = (i__18568_19628 + 1);
seq__18565_19625 = G__19630;
chunk__18566_19626 = G__19631;
count__18567_19627 = G__19632;
i__18568_19628 = G__19633;
continue;
}
} else
{var temp__4092__auto___19634 = cljs.core.seq.call(null,seq__18565_19625);if(temp__4092__auto___19634)
{var seq__18565_19635__$1 = temp__4092__auto___19634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18565_19635__$1))
{var c__11077__auto___19636 = cljs.core.chunk_first.call(null,seq__18565_19635__$1);{
var G__19637 = cljs.core.chunk_rest.call(null,seq__18565_19635__$1);
var G__19638 = c__11077__auto___19636;
var G__19639 = cljs.core.count.call(null,c__11077__auto___19636);
var G__19640 = 0;
seq__18565_19625 = G__19637;
chunk__18566_19626 = G__19638;
count__18567_19627 = G__19639;
i__18568_19628 = G__19640;
continue;
}
} else
{var arg__11924__auto___19641 = cljs.core.first.call(null,seq__18565_19635__$1);a__11923__auto__.push(arg__11924__auto___19641);
{
var G__19642 = cljs.core.next.call(null,seq__18565_19635__$1);
var G__19643 = null;
var G__19644 = 0;
var G__19645 = 0;
seq__18565_19625 = G__19642;
chunk__18566_19626 = G__19643;
count__18567_19627 = G__19644;
i__18568_19628 = G__19645;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__11923__auto__);
};
var base = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__11922__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__19646){
var args__11922__auto__ = cljs.core.seq(arglist__19646);
return base__delegate(args__11922__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18573_19647 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18574_19648 = null;var count__18575_19649 = 0;var i__18576_19650 = 0;while(true){
if((i__18576_19650 < count__18575_19649))
{var arg__11924__auto___19651 = cljs.core._nth.call(null,chunk__18574_19648,i__18576_19650);a__11923__auto__.push(arg__11924__auto___19651);
{
var G__19652 = seq__18573_19647;
var G__19653 = chunk__18574_19648;
var G__19654 = count__18575_19649;
var G__19655 = (i__18576_19650 + 1);
seq__18573_19647 = G__19652;
chunk__18574_19648 = G__19653;
count__18575_19649 = G__19654;
i__18576_19650 = G__19655;
continue;
}
} else
{var temp__4092__auto___19656 = cljs.core.seq.call(null,seq__18573_19647);if(temp__4092__auto___19656)
{var seq__18573_19657__$1 = temp__4092__auto___19656;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18573_19657__$1))
{var c__11077__auto___19658 = cljs.core.chunk_first.call(null,seq__18573_19657__$1);{
var G__19659 = cljs.core.chunk_rest.call(null,seq__18573_19657__$1);
var G__19660 = c__11077__auto___19658;
var G__19661 = cljs.core.count.call(null,c__11077__auto___19658);
var G__19662 = 0;
seq__18573_19647 = G__19659;
chunk__18574_19648 = G__19660;
count__18575_19649 = G__19661;
i__18576_19650 = G__19662;
continue;
}
} else
{var arg__11924__auto___19663 = cljs.core.first.call(null,seq__18573_19657__$1);a__11923__auto__.push(arg__11924__auto___19663);
{
var G__19664 = cljs.core.next.call(null,seq__18573_19657__$1);
var G__19665 = null;
var G__19666 = 0;
var G__19667 = 0;
seq__18573_19647 = G__19664;
chunk__18574_19648 = G__19665;
count__18575_19649 = G__19666;
i__18576_19650 = G__19667;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__11923__auto__);
};
var bdi = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__11922__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__19668){
var args__11922__auto__ = cljs.core.seq(arglist__19668);
return bdi__delegate(args__11922__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18581_19669 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18582_19670 = null;var count__18583_19671 = 0;var i__18584_19672 = 0;while(true){
if((i__18584_19672 < count__18583_19671))
{var arg__11924__auto___19673 = cljs.core._nth.call(null,chunk__18582_19670,i__18584_19672);a__11923__auto__.push(arg__11924__auto___19673);
{
var G__19674 = seq__18581_19669;
var G__19675 = chunk__18582_19670;
var G__19676 = count__18583_19671;
var G__19677 = (i__18584_19672 + 1);
seq__18581_19669 = G__19674;
chunk__18582_19670 = G__19675;
count__18583_19671 = G__19676;
i__18584_19672 = G__19677;
continue;
}
} else
{var temp__4092__auto___19678 = cljs.core.seq.call(null,seq__18581_19669);if(temp__4092__auto___19678)
{var seq__18581_19679__$1 = temp__4092__auto___19678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18581_19679__$1))
{var c__11077__auto___19680 = cljs.core.chunk_first.call(null,seq__18581_19679__$1);{
var G__19681 = cljs.core.chunk_rest.call(null,seq__18581_19679__$1);
var G__19682 = c__11077__auto___19680;
var G__19683 = cljs.core.count.call(null,c__11077__auto___19680);
var G__19684 = 0;
seq__18581_19669 = G__19681;
chunk__18582_19670 = G__19682;
count__18583_19671 = G__19683;
i__18584_19672 = G__19684;
continue;
}
} else
{var arg__11924__auto___19685 = cljs.core.first.call(null,seq__18581_19679__$1);a__11923__auto__.push(arg__11924__auto___19685);
{
var G__19686 = cljs.core.next.call(null,seq__18581_19679__$1);
var G__19687 = null;
var G__19688 = 0;
var G__19689 = 0;
seq__18581_19669 = G__19686;
chunk__18582_19670 = G__19687;
count__18583_19671 = G__19688;
i__18584_19672 = G__19689;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__11923__auto__);
};
var bdo = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__11922__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__19690){
var args__11922__auto__ = cljs.core.seq(arglist__19690);
return bdo__delegate(args__11922__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18589_19691 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18590_19692 = null;var count__18591_19693 = 0;var i__18592_19694 = 0;while(true){
if((i__18592_19694 < count__18591_19693))
{var arg__11924__auto___19695 = cljs.core._nth.call(null,chunk__18590_19692,i__18592_19694);a__11923__auto__.push(arg__11924__auto___19695);
{
var G__19696 = seq__18589_19691;
var G__19697 = chunk__18590_19692;
var G__19698 = count__18591_19693;
var G__19699 = (i__18592_19694 + 1);
seq__18589_19691 = G__19696;
chunk__18590_19692 = G__19697;
count__18591_19693 = G__19698;
i__18592_19694 = G__19699;
continue;
}
} else
{var temp__4092__auto___19700 = cljs.core.seq.call(null,seq__18589_19691);if(temp__4092__auto___19700)
{var seq__18589_19701__$1 = temp__4092__auto___19700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18589_19701__$1))
{var c__11077__auto___19702 = cljs.core.chunk_first.call(null,seq__18589_19701__$1);{
var G__19703 = cljs.core.chunk_rest.call(null,seq__18589_19701__$1);
var G__19704 = c__11077__auto___19702;
var G__19705 = cljs.core.count.call(null,c__11077__auto___19702);
var G__19706 = 0;
seq__18589_19691 = G__19703;
chunk__18590_19692 = G__19704;
count__18591_19693 = G__19705;
i__18592_19694 = G__19706;
continue;
}
} else
{var arg__11924__auto___19707 = cljs.core.first.call(null,seq__18589_19701__$1);a__11923__auto__.push(arg__11924__auto___19707);
{
var G__19708 = cljs.core.next.call(null,seq__18589_19701__$1);
var G__19709 = null;
var G__19710 = 0;
var G__19711 = 0;
seq__18589_19691 = G__19708;
chunk__18590_19692 = G__19709;
count__18591_19693 = G__19710;
i__18592_19694 = G__19711;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__11923__auto__);
};
var big = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__11922__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__19712){
var args__11922__auto__ = cljs.core.seq(arglist__19712);
return big__delegate(args__11922__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18597_19713 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18598_19714 = null;var count__18599_19715 = 0;var i__18600_19716 = 0;while(true){
if((i__18600_19716 < count__18599_19715))
{var arg__11924__auto___19717 = cljs.core._nth.call(null,chunk__18598_19714,i__18600_19716);a__11923__auto__.push(arg__11924__auto___19717);
{
var G__19718 = seq__18597_19713;
var G__19719 = chunk__18598_19714;
var G__19720 = count__18599_19715;
var G__19721 = (i__18600_19716 + 1);
seq__18597_19713 = G__19718;
chunk__18598_19714 = G__19719;
count__18599_19715 = G__19720;
i__18600_19716 = G__19721;
continue;
}
} else
{var temp__4092__auto___19722 = cljs.core.seq.call(null,seq__18597_19713);if(temp__4092__auto___19722)
{var seq__18597_19723__$1 = temp__4092__auto___19722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18597_19723__$1))
{var c__11077__auto___19724 = cljs.core.chunk_first.call(null,seq__18597_19723__$1);{
var G__19725 = cljs.core.chunk_rest.call(null,seq__18597_19723__$1);
var G__19726 = c__11077__auto___19724;
var G__19727 = cljs.core.count.call(null,c__11077__auto___19724);
var G__19728 = 0;
seq__18597_19713 = G__19725;
chunk__18598_19714 = G__19726;
count__18599_19715 = G__19727;
i__18600_19716 = G__19728;
continue;
}
} else
{var arg__11924__auto___19729 = cljs.core.first.call(null,seq__18597_19723__$1);a__11923__auto__.push(arg__11924__auto___19729);
{
var G__19730 = cljs.core.next.call(null,seq__18597_19723__$1);
var G__19731 = null;
var G__19732 = 0;
var G__19733 = 0;
seq__18597_19713 = G__19730;
chunk__18598_19714 = G__19731;
count__18599_19715 = G__19732;
i__18600_19716 = G__19733;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__11923__auto__);
};
var blockquote = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__11922__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__19734){
var args__11922__auto__ = cljs.core.seq(arglist__19734);
return blockquote__delegate(args__11922__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18605_19735 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18606_19736 = null;var count__18607_19737 = 0;var i__18608_19738 = 0;while(true){
if((i__18608_19738 < count__18607_19737))
{var arg__11924__auto___19739 = cljs.core._nth.call(null,chunk__18606_19736,i__18608_19738);a__11923__auto__.push(arg__11924__auto___19739);
{
var G__19740 = seq__18605_19735;
var G__19741 = chunk__18606_19736;
var G__19742 = count__18607_19737;
var G__19743 = (i__18608_19738 + 1);
seq__18605_19735 = G__19740;
chunk__18606_19736 = G__19741;
count__18607_19737 = G__19742;
i__18608_19738 = G__19743;
continue;
}
} else
{var temp__4092__auto___19744 = cljs.core.seq.call(null,seq__18605_19735);if(temp__4092__auto___19744)
{var seq__18605_19745__$1 = temp__4092__auto___19744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18605_19745__$1))
{var c__11077__auto___19746 = cljs.core.chunk_first.call(null,seq__18605_19745__$1);{
var G__19747 = cljs.core.chunk_rest.call(null,seq__18605_19745__$1);
var G__19748 = c__11077__auto___19746;
var G__19749 = cljs.core.count.call(null,c__11077__auto___19746);
var G__19750 = 0;
seq__18605_19735 = G__19747;
chunk__18606_19736 = G__19748;
count__18607_19737 = G__19749;
i__18608_19738 = G__19750;
continue;
}
} else
{var arg__11924__auto___19751 = cljs.core.first.call(null,seq__18605_19745__$1);a__11923__auto__.push(arg__11924__auto___19751);
{
var G__19752 = cljs.core.next.call(null,seq__18605_19745__$1);
var G__19753 = null;
var G__19754 = 0;
var G__19755 = 0;
seq__18605_19735 = G__19752;
chunk__18606_19736 = G__19753;
count__18607_19737 = G__19754;
i__18608_19738 = G__19755;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__11923__auto__);
};
var body = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__11922__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__19756){
var args__11922__auto__ = cljs.core.seq(arglist__19756);
return body__delegate(args__11922__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18613_19757 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18614_19758 = null;var count__18615_19759 = 0;var i__18616_19760 = 0;while(true){
if((i__18616_19760 < count__18615_19759))
{var arg__11924__auto___19761 = cljs.core._nth.call(null,chunk__18614_19758,i__18616_19760);a__11923__auto__.push(arg__11924__auto___19761);
{
var G__19762 = seq__18613_19757;
var G__19763 = chunk__18614_19758;
var G__19764 = count__18615_19759;
var G__19765 = (i__18616_19760 + 1);
seq__18613_19757 = G__19762;
chunk__18614_19758 = G__19763;
count__18615_19759 = G__19764;
i__18616_19760 = G__19765;
continue;
}
} else
{var temp__4092__auto___19766 = cljs.core.seq.call(null,seq__18613_19757);if(temp__4092__auto___19766)
{var seq__18613_19767__$1 = temp__4092__auto___19766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18613_19767__$1))
{var c__11077__auto___19768 = cljs.core.chunk_first.call(null,seq__18613_19767__$1);{
var G__19769 = cljs.core.chunk_rest.call(null,seq__18613_19767__$1);
var G__19770 = c__11077__auto___19768;
var G__19771 = cljs.core.count.call(null,c__11077__auto___19768);
var G__19772 = 0;
seq__18613_19757 = G__19769;
chunk__18614_19758 = G__19770;
count__18615_19759 = G__19771;
i__18616_19760 = G__19772;
continue;
}
} else
{var arg__11924__auto___19773 = cljs.core.first.call(null,seq__18613_19767__$1);a__11923__auto__.push(arg__11924__auto___19773);
{
var G__19774 = cljs.core.next.call(null,seq__18613_19767__$1);
var G__19775 = null;
var G__19776 = 0;
var G__19777 = 0;
seq__18613_19757 = G__19774;
chunk__18614_19758 = G__19775;
count__18615_19759 = G__19776;
i__18616_19760 = G__19777;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__11923__auto__);
};
var br = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__11922__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__19778){
var args__11922__auto__ = cljs.core.seq(arglist__19778);
return br__delegate(args__11922__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18621_19779 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18622_19780 = null;var count__18623_19781 = 0;var i__18624_19782 = 0;while(true){
if((i__18624_19782 < count__18623_19781))
{var arg__11924__auto___19783 = cljs.core._nth.call(null,chunk__18622_19780,i__18624_19782);a__11923__auto__.push(arg__11924__auto___19783);
{
var G__19784 = seq__18621_19779;
var G__19785 = chunk__18622_19780;
var G__19786 = count__18623_19781;
var G__19787 = (i__18624_19782 + 1);
seq__18621_19779 = G__19784;
chunk__18622_19780 = G__19785;
count__18623_19781 = G__19786;
i__18624_19782 = G__19787;
continue;
}
} else
{var temp__4092__auto___19788 = cljs.core.seq.call(null,seq__18621_19779);if(temp__4092__auto___19788)
{var seq__18621_19789__$1 = temp__4092__auto___19788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18621_19789__$1))
{var c__11077__auto___19790 = cljs.core.chunk_first.call(null,seq__18621_19789__$1);{
var G__19791 = cljs.core.chunk_rest.call(null,seq__18621_19789__$1);
var G__19792 = c__11077__auto___19790;
var G__19793 = cljs.core.count.call(null,c__11077__auto___19790);
var G__19794 = 0;
seq__18621_19779 = G__19791;
chunk__18622_19780 = G__19792;
count__18623_19781 = G__19793;
i__18624_19782 = G__19794;
continue;
}
} else
{var arg__11924__auto___19795 = cljs.core.first.call(null,seq__18621_19789__$1);a__11923__auto__.push(arg__11924__auto___19795);
{
var G__19796 = cljs.core.next.call(null,seq__18621_19789__$1);
var G__19797 = null;
var G__19798 = 0;
var G__19799 = 0;
seq__18621_19779 = G__19796;
chunk__18622_19780 = G__19797;
count__18623_19781 = G__19798;
i__18624_19782 = G__19799;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__11923__auto__);
};
var button = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__11922__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__19800){
var args__11922__auto__ = cljs.core.seq(arglist__19800);
return button__delegate(args__11922__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18629_19801 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18630_19802 = null;var count__18631_19803 = 0;var i__18632_19804 = 0;while(true){
if((i__18632_19804 < count__18631_19803))
{var arg__11924__auto___19805 = cljs.core._nth.call(null,chunk__18630_19802,i__18632_19804);a__11923__auto__.push(arg__11924__auto___19805);
{
var G__19806 = seq__18629_19801;
var G__19807 = chunk__18630_19802;
var G__19808 = count__18631_19803;
var G__19809 = (i__18632_19804 + 1);
seq__18629_19801 = G__19806;
chunk__18630_19802 = G__19807;
count__18631_19803 = G__19808;
i__18632_19804 = G__19809;
continue;
}
} else
{var temp__4092__auto___19810 = cljs.core.seq.call(null,seq__18629_19801);if(temp__4092__auto___19810)
{var seq__18629_19811__$1 = temp__4092__auto___19810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18629_19811__$1))
{var c__11077__auto___19812 = cljs.core.chunk_first.call(null,seq__18629_19811__$1);{
var G__19813 = cljs.core.chunk_rest.call(null,seq__18629_19811__$1);
var G__19814 = c__11077__auto___19812;
var G__19815 = cljs.core.count.call(null,c__11077__auto___19812);
var G__19816 = 0;
seq__18629_19801 = G__19813;
chunk__18630_19802 = G__19814;
count__18631_19803 = G__19815;
i__18632_19804 = G__19816;
continue;
}
} else
{var arg__11924__auto___19817 = cljs.core.first.call(null,seq__18629_19811__$1);a__11923__auto__.push(arg__11924__auto___19817);
{
var G__19818 = cljs.core.next.call(null,seq__18629_19811__$1);
var G__19819 = null;
var G__19820 = 0;
var G__19821 = 0;
seq__18629_19801 = G__19818;
chunk__18630_19802 = G__19819;
count__18631_19803 = G__19820;
i__18632_19804 = G__19821;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__11923__auto__);
};
var canvas = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__11922__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__19822){
var args__11922__auto__ = cljs.core.seq(arglist__19822);
return canvas__delegate(args__11922__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18637_19823 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18638_19824 = null;var count__18639_19825 = 0;var i__18640_19826 = 0;while(true){
if((i__18640_19826 < count__18639_19825))
{var arg__11924__auto___19827 = cljs.core._nth.call(null,chunk__18638_19824,i__18640_19826);a__11923__auto__.push(arg__11924__auto___19827);
{
var G__19828 = seq__18637_19823;
var G__19829 = chunk__18638_19824;
var G__19830 = count__18639_19825;
var G__19831 = (i__18640_19826 + 1);
seq__18637_19823 = G__19828;
chunk__18638_19824 = G__19829;
count__18639_19825 = G__19830;
i__18640_19826 = G__19831;
continue;
}
} else
{var temp__4092__auto___19832 = cljs.core.seq.call(null,seq__18637_19823);if(temp__4092__auto___19832)
{var seq__18637_19833__$1 = temp__4092__auto___19832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18637_19833__$1))
{var c__11077__auto___19834 = cljs.core.chunk_first.call(null,seq__18637_19833__$1);{
var G__19835 = cljs.core.chunk_rest.call(null,seq__18637_19833__$1);
var G__19836 = c__11077__auto___19834;
var G__19837 = cljs.core.count.call(null,c__11077__auto___19834);
var G__19838 = 0;
seq__18637_19823 = G__19835;
chunk__18638_19824 = G__19836;
count__18639_19825 = G__19837;
i__18640_19826 = G__19838;
continue;
}
} else
{var arg__11924__auto___19839 = cljs.core.first.call(null,seq__18637_19833__$1);a__11923__auto__.push(arg__11924__auto___19839);
{
var G__19840 = cljs.core.next.call(null,seq__18637_19833__$1);
var G__19841 = null;
var G__19842 = 0;
var G__19843 = 0;
seq__18637_19823 = G__19840;
chunk__18638_19824 = G__19841;
count__18639_19825 = G__19842;
i__18640_19826 = G__19843;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__11923__auto__);
};
var caption = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__11922__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__19844){
var args__11922__auto__ = cljs.core.seq(arglist__19844);
return caption__delegate(args__11922__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18645_19845 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18646_19846 = null;var count__18647_19847 = 0;var i__18648_19848 = 0;while(true){
if((i__18648_19848 < count__18647_19847))
{var arg__11924__auto___19849 = cljs.core._nth.call(null,chunk__18646_19846,i__18648_19848);a__11923__auto__.push(arg__11924__auto___19849);
{
var G__19850 = seq__18645_19845;
var G__19851 = chunk__18646_19846;
var G__19852 = count__18647_19847;
var G__19853 = (i__18648_19848 + 1);
seq__18645_19845 = G__19850;
chunk__18646_19846 = G__19851;
count__18647_19847 = G__19852;
i__18648_19848 = G__19853;
continue;
}
} else
{var temp__4092__auto___19854 = cljs.core.seq.call(null,seq__18645_19845);if(temp__4092__auto___19854)
{var seq__18645_19855__$1 = temp__4092__auto___19854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18645_19855__$1))
{var c__11077__auto___19856 = cljs.core.chunk_first.call(null,seq__18645_19855__$1);{
var G__19857 = cljs.core.chunk_rest.call(null,seq__18645_19855__$1);
var G__19858 = c__11077__auto___19856;
var G__19859 = cljs.core.count.call(null,c__11077__auto___19856);
var G__19860 = 0;
seq__18645_19845 = G__19857;
chunk__18646_19846 = G__19858;
count__18647_19847 = G__19859;
i__18648_19848 = G__19860;
continue;
}
} else
{var arg__11924__auto___19861 = cljs.core.first.call(null,seq__18645_19855__$1);a__11923__auto__.push(arg__11924__auto___19861);
{
var G__19862 = cljs.core.next.call(null,seq__18645_19855__$1);
var G__19863 = null;
var G__19864 = 0;
var G__19865 = 0;
seq__18645_19845 = G__19862;
chunk__18646_19846 = G__19863;
count__18647_19847 = G__19864;
i__18648_19848 = G__19865;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__11923__auto__);
};
var cite = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__11922__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__19866){
var args__11922__auto__ = cljs.core.seq(arglist__19866);
return cite__delegate(args__11922__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18653_19867 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18654_19868 = null;var count__18655_19869 = 0;var i__18656_19870 = 0;while(true){
if((i__18656_19870 < count__18655_19869))
{var arg__11924__auto___19871 = cljs.core._nth.call(null,chunk__18654_19868,i__18656_19870);a__11923__auto__.push(arg__11924__auto___19871);
{
var G__19872 = seq__18653_19867;
var G__19873 = chunk__18654_19868;
var G__19874 = count__18655_19869;
var G__19875 = (i__18656_19870 + 1);
seq__18653_19867 = G__19872;
chunk__18654_19868 = G__19873;
count__18655_19869 = G__19874;
i__18656_19870 = G__19875;
continue;
}
} else
{var temp__4092__auto___19876 = cljs.core.seq.call(null,seq__18653_19867);if(temp__4092__auto___19876)
{var seq__18653_19877__$1 = temp__4092__auto___19876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18653_19877__$1))
{var c__11077__auto___19878 = cljs.core.chunk_first.call(null,seq__18653_19877__$1);{
var G__19879 = cljs.core.chunk_rest.call(null,seq__18653_19877__$1);
var G__19880 = c__11077__auto___19878;
var G__19881 = cljs.core.count.call(null,c__11077__auto___19878);
var G__19882 = 0;
seq__18653_19867 = G__19879;
chunk__18654_19868 = G__19880;
count__18655_19869 = G__19881;
i__18656_19870 = G__19882;
continue;
}
} else
{var arg__11924__auto___19883 = cljs.core.first.call(null,seq__18653_19877__$1);a__11923__auto__.push(arg__11924__auto___19883);
{
var G__19884 = cljs.core.next.call(null,seq__18653_19877__$1);
var G__19885 = null;
var G__19886 = 0;
var G__19887 = 0;
seq__18653_19867 = G__19884;
chunk__18654_19868 = G__19885;
count__18655_19869 = G__19886;
i__18656_19870 = G__19887;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__11923__auto__);
};
var code = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__11922__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__19888){
var args__11922__auto__ = cljs.core.seq(arglist__19888);
return code__delegate(args__11922__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18661_19889 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18662_19890 = null;var count__18663_19891 = 0;var i__18664_19892 = 0;while(true){
if((i__18664_19892 < count__18663_19891))
{var arg__11924__auto___19893 = cljs.core._nth.call(null,chunk__18662_19890,i__18664_19892);a__11923__auto__.push(arg__11924__auto___19893);
{
var G__19894 = seq__18661_19889;
var G__19895 = chunk__18662_19890;
var G__19896 = count__18663_19891;
var G__19897 = (i__18664_19892 + 1);
seq__18661_19889 = G__19894;
chunk__18662_19890 = G__19895;
count__18663_19891 = G__19896;
i__18664_19892 = G__19897;
continue;
}
} else
{var temp__4092__auto___19898 = cljs.core.seq.call(null,seq__18661_19889);if(temp__4092__auto___19898)
{var seq__18661_19899__$1 = temp__4092__auto___19898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18661_19899__$1))
{var c__11077__auto___19900 = cljs.core.chunk_first.call(null,seq__18661_19899__$1);{
var G__19901 = cljs.core.chunk_rest.call(null,seq__18661_19899__$1);
var G__19902 = c__11077__auto___19900;
var G__19903 = cljs.core.count.call(null,c__11077__auto___19900);
var G__19904 = 0;
seq__18661_19889 = G__19901;
chunk__18662_19890 = G__19902;
count__18663_19891 = G__19903;
i__18664_19892 = G__19904;
continue;
}
} else
{var arg__11924__auto___19905 = cljs.core.first.call(null,seq__18661_19899__$1);a__11923__auto__.push(arg__11924__auto___19905);
{
var G__19906 = cljs.core.next.call(null,seq__18661_19899__$1);
var G__19907 = null;
var G__19908 = 0;
var G__19909 = 0;
seq__18661_19889 = G__19906;
chunk__18662_19890 = G__19907;
count__18663_19891 = G__19908;
i__18664_19892 = G__19909;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__11923__auto__);
};
var col = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__11922__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__19910){
var args__11922__auto__ = cljs.core.seq(arglist__19910);
return col__delegate(args__11922__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18669_19911 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18670_19912 = null;var count__18671_19913 = 0;var i__18672_19914 = 0;while(true){
if((i__18672_19914 < count__18671_19913))
{var arg__11924__auto___19915 = cljs.core._nth.call(null,chunk__18670_19912,i__18672_19914);a__11923__auto__.push(arg__11924__auto___19915);
{
var G__19916 = seq__18669_19911;
var G__19917 = chunk__18670_19912;
var G__19918 = count__18671_19913;
var G__19919 = (i__18672_19914 + 1);
seq__18669_19911 = G__19916;
chunk__18670_19912 = G__19917;
count__18671_19913 = G__19918;
i__18672_19914 = G__19919;
continue;
}
} else
{var temp__4092__auto___19920 = cljs.core.seq.call(null,seq__18669_19911);if(temp__4092__auto___19920)
{var seq__18669_19921__$1 = temp__4092__auto___19920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18669_19921__$1))
{var c__11077__auto___19922 = cljs.core.chunk_first.call(null,seq__18669_19921__$1);{
var G__19923 = cljs.core.chunk_rest.call(null,seq__18669_19921__$1);
var G__19924 = c__11077__auto___19922;
var G__19925 = cljs.core.count.call(null,c__11077__auto___19922);
var G__19926 = 0;
seq__18669_19911 = G__19923;
chunk__18670_19912 = G__19924;
count__18671_19913 = G__19925;
i__18672_19914 = G__19926;
continue;
}
} else
{var arg__11924__auto___19927 = cljs.core.first.call(null,seq__18669_19921__$1);a__11923__auto__.push(arg__11924__auto___19927);
{
var G__19928 = cljs.core.next.call(null,seq__18669_19921__$1);
var G__19929 = null;
var G__19930 = 0;
var G__19931 = 0;
seq__18669_19911 = G__19928;
chunk__18670_19912 = G__19929;
count__18671_19913 = G__19930;
i__18672_19914 = G__19931;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__11923__auto__);
};
var colgroup = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__11922__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__19932){
var args__11922__auto__ = cljs.core.seq(arglist__19932);
return colgroup__delegate(args__11922__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18677_19933 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18678_19934 = null;var count__18679_19935 = 0;var i__18680_19936 = 0;while(true){
if((i__18680_19936 < count__18679_19935))
{var arg__11924__auto___19937 = cljs.core._nth.call(null,chunk__18678_19934,i__18680_19936);a__11923__auto__.push(arg__11924__auto___19937);
{
var G__19938 = seq__18677_19933;
var G__19939 = chunk__18678_19934;
var G__19940 = count__18679_19935;
var G__19941 = (i__18680_19936 + 1);
seq__18677_19933 = G__19938;
chunk__18678_19934 = G__19939;
count__18679_19935 = G__19940;
i__18680_19936 = G__19941;
continue;
}
} else
{var temp__4092__auto___19942 = cljs.core.seq.call(null,seq__18677_19933);if(temp__4092__auto___19942)
{var seq__18677_19943__$1 = temp__4092__auto___19942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18677_19943__$1))
{var c__11077__auto___19944 = cljs.core.chunk_first.call(null,seq__18677_19943__$1);{
var G__19945 = cljs.core.chunk_rest.call(null,seq__18677_19943__$1);
var G__19946 = c__11077__auto___19944;
var G__19947 = cljs.core.count.call(null,c__11077__auto___19944);
var G__19948 = 0;
seq__18677_19933 = G__19945;
chunk__18678_19934 = G__19946;
count__18679_19935 = G__19947;
i__18680_19936 = G__19948;
continue;
}
} else
{var arg__11924__auto___19949 = cljs.core.first.call(null,seq__18677_19943__$1);a__11923__auto__.push(arg__11924__auto___19949);
{
var G__19950 = cljs.core.next.call(null,seq__18677_19943__$1);
var G__19951 = null;
var G__19952 = 0;
var G__19953 = 0;
seq__18677_19933 = G__19950;
chunk__18678_19934 = G__19951;
count__18679_19935 = G__19952;
i__18680_19936 = G__19953;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__11923__auto__);
};
var data = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__11922__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__19954){
var args__11922__auto__ = cljs.core.seq(arglist__19954);
return data__delegate(args__11922__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18685_19955 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18686_19956 = null;var count__18687_19957 = 0;var i__18688_19958 = 0;while(true){
if((i__18688_19958 < count__18687_19957))
{var arg__11924__auto___19959 = cljs.core._nth.call(null,chunk__18686_19956,i__18688_19958);a__11923__auto__.push(arg__11924__auto___19959);
{
var G__19960 = seq__18685_19955;
var G__19961 = chunk__18686_19956;
var G__19962 = count__18687_19957;
var G__19963 = (i__18688_19958 + 1);
seq__18685_19955 = G__19960;
chunk__18686_19956 = G__19961;
count__18687_19957 = G__19962;
i__18688_19958 = G__19963;
continue;
}
} else
{var temp__4092__auto___19964 = cljs.core.seq.call(null,seq__18685_19955);if(temp__4092__auto___19964)
{var seq__18685_19965__$1 = temp__4092__auto___19964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18685_19965__$1))
{var c__11077__auto___19966 = cljs.core.chunk_first.call(null,seq__18685_19965__$1);{
var G__19967 = cljs.core.chunk_rest.call(null,seq__18685_19965__$1);
var G__19968 = c__11077__auto___19966;
var G__19969 = cljs.core.count.call(null,c__11077__auto___19966);
var G__19970 = 0;
seq__18685_19955 = G__19967;
chunk__18686_19956 = G__19968;
count__18687_19957 = G__19969;
i__18688_19958 = G__19970;
continue;
}
} else
{var arg__11924__auto___19971 = cljs.core.first.call(null,seq__18685_19965__$1);a__11923__auto__.push(arg__11924__auto___19971);
{
var G__19972 = cljs.core.next.call(null,seq__18685_19965__$1);
var G__19973 = null;
var G__19974 = 0;
var G__19975 = 0;
seq__18685_19955 = G__19972;
chunk__18686_19956 = G__19973;
count__18687_19957 = G__19974;
i__18688_19958 = G__19975;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__11923__auto__);
};
var datalist = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__11922__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__19976){
var args__11922__auto__ = cljs.core.seq(arglist__19976);
return datalist__delegate(args__11922__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18693_19977 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18694_19978 = null;var count__18695_19979 = 0;var i__18696_19980 = 0;while(true){
if((i__18696_19980 < count__18695_19979))
{var arg__11924__auto___19981 = cljs.core._nth.call(null,chunk__18694_19978,i__18696_19980);a__11923__auto__.push(arg__11924__auto___19981);
{
var G__19982 = seq__18693_19977;
var G__19983 = chunk__18694_19978;
var G__19984 = count__18695_19979;
var G__19985 = (i__18696_19980 + 1);
seq__18693_19977 = G__19982;
chunk__18694_19978 = G__19983;
count__18695_19979 = G__19984;
i__18696_19980 = G__19985;
continue;
}
} else
{var temp__4092__auto___19986 = cljs.core.seq.call(null,seq__18693_19977);if(temp__4092__auto___19986)
{var seq__18693_19987__$1 = temp__4092__auto___19986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18693_19987__$1))
{var c__11077__auto___19988 = cljs.core.chunk_first.call(null,seq__18693_19987__$1);{
var G__19989 = cljs.core.chunk_rest.call(null,seq__18693_19987__$1);
var G__19990 = c__11077__auto___19988;
var G__19991 = cljs.core.count.call(null,c__11077__auto___19988);
var G__19992 = 0;
seq__18693_19977 = G__19989;
chunk__18694_19978 = G__19990;
count__18695_19979 = G__19991;
i__18696_19980 = G__19992;
continue;
}
} else
{var arg__11924__auto___19993 = cljs.core.first.call(null,seq__18693_19987__$1);a__11923__auto__.push(arg__11924__auto___19993);
{
var G__19994 = cljs.core.next.call(null,seq__18693_19987__$1);
var G__19995 = null;
var G__19996 = 0;
var G__19997 = 0;
seq__18693_19977 = G__19994;
chunk__18694_19978 = G__19995;
count__18695_19979 = G__19996;
i__18696_19980 = G__19997;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__11923__auto__);
};
var dd = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__11922__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__19998){
var args__11922__auto__ = cljs.core.seq(arglist__19998);
return dd__delegate(args__11922__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18701_19999 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18702_20000 = null;var count__18703_20001 = 0;var i__18704_20002 = 0;while(true){
if((i__18704_20002 < count__18703_20001))
{var arg__11924__auto___20003 = cljs.core._nth.call(null,chunk__18702_20000,i__18704_20002);a__11923__auto__.push(arg__11924__auto___20003);
{
var G__20004 = seq__18701_19999;
var G__20005 = chunk__18702_20000;
var G__20006 = count__18703_20001;
var G__20007 = (i__18704_20002 + 1);
seq__18701_19999 = G__20004;
chunk__18702_20000 = G__20005;
count__18703_20001 = G__20006;
i__18704_20002 = G__20007;
continue;
}
} else
{var temp__4092__auto___20008 = cljs.core.seq.call(null,seq__18701_19999);if(temp__4092__auto___20008)
{var seq__18701_20009__$1 = temp__4092__auto___20008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18701_20009__$1))
{var c__11077__auto___20010 = cljs.core.chunk_first.call(null,seq__18701_20009__$1);{
var G__20011 = cljs.core.chunk_rest.call(null,seq__18701_20009__$1);
var G__20012 = c__11077__auto___20010;
var G__20013 = cljs.core.count.call(null,c__11077__auto___20010);
var G__20014 = 0;
seq__18701_19999 = G__20011;
chunk__18702_20000 = G__20012;
count__18703_20001 = G__20013;
i__18704_20002 = G__20014;
continue;
}
} else
{var arg__11924__auto___20015 = cljs.core.first.call(null,seq__18701_20009__$1);a__11923__auto__.push(arg__11924__auto___20015);
{
var G__20016 = cljs.core.next.call(null,seq__18701_20009__$1);
var G__20017 = null;
var G__20018 = 0;
var G__20019 = 0;
seq__18701_19999 = G__20016;
chunk__18702_20000 = G__20017;
count__18703_20001 = G__20018;
i__18704_20002 = G__20019;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__11923__auto__);
};
var del = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__11922__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__20020){
var args__11922__auto__ = cljs.core.seq(arglist__20020);
return del__delegate(args__11922__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18709_20021 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18710_20022 = null;var count__18711_20023 = 0;var i__18712_20024 = 0;while(true){
if((i__18712_20024 < count__18711_20023))
{var arg__11924__auto___20025 = cljs.core._nth.call(null,chunk__18710_20022,i__18712_20024);a__11923__auto__.push(arg__11924__auto___20025);
{
var G__20026 = seq__18709_20021;
var G__20027 = chunk__18710_20022;
var G__20028 = count__18711_20023;
var G__20029 = (i__18712_20024 + 1);
seq__18709_20021 = G__20026;
chunk__18710_20022 = G__20027;
count__18711_20023 = G__20028;
i__18712_20024 = G__20029;
continue;
}
} else
{var temp__4092__auto___20030 = cljs.core.seq.call(null,seq__18709_20021);if(temp__4092__auto___20030)
{var seq__18709_20031__$1 = temp__4092__auto___20030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18709_20031__$1))
{var c__11077__auto___20032 = cljs.core.chunk_first.call(null,seq__18709_20031__$1);{
var G__20033 = cljs.core.chunk_rest.call(null,seq__18709_20031__$1);
var G__20034 = c__11077__auto___20032;
var G__20035 = cljs.core.count.call(null,c__11077__auto___20032);
var G__20036 = 0;
seq__18709_20021 = G__20033;
chunk__18710_20022 = G__20034;
count__18711_20023 = G__20035;
i__18712_20024 = G__20036;
continue;
}
} else
{var arg__11924__auto___20037 = cljs.core.first.call(null,seq__18709_20031__$1);a__11923__auto__.push(arg__11924__auto___20037);
{
var G__20038 = cljs.core.next.call(null,seq__18709_20031__$1);
var G__20039 = null;
var G__20040 = 0;
var G__20041 = 0;
seq__18709_20021 = G__20038;
chunk__18710_20022 = G__20039;
count__18711_20023 = G__20040;
i__18712_20024 = G__20041;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__11923__auto__);
};
var details = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__11922__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__20042){
var args__11922__auto__ = cljs.core.seq(arglist__20042);
return details__delegate(args__11922__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18717_20043 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18718_20044 = null;var count__18719_20045 = 0;var i__18720_20046 = 0;while(true){
if((i__18720_20046 < count__18719_20045))
{var arg__11924__auto___20047 = cljs.core._nth.call(null,chunk__18718_20044,i__18720_20046);a__11923__auto__.push(arg__11924__auto___20047);
{
var G__20048 = seq__18717_20043;
var G__20049 = chunk__18718_20044;
var G__20050 = count__18719_20045;
var G__20051 = (i__18720_20046 + 1);
seq__18717_20043 = G__20048;
chunk__18718_20044 = G__20049;
count__18719_20045 = G__20050;
i__18720_20046 = G__20051;
continue;
}
} else
{var temp__4092__auto___20052 = cljs.core.seq.call(null,seq__18717_20043);if(temp__4092__auto___20052)
{var seq__18717_20053__$1 = temp__4092__auto___20052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18717_20053__$1))
{var c__11077__auto___20054 = cljs.core.chunk_first.call(null,seq__18717_20053__$1);{
var G__20055 = cljs.core.chunk_rest.call(null,seq__18717_20053__$1);
var G__20056 = c__11077__auto___20054;
var G__20057 = cljs.core.count.call(null,c__11077__auto___20054);
var G__20058 = 0;
seq__18717_20043 = G__20055;
chunk__18718_20044 = G__20056;
count__18719_20045 = G__20057;
i__18720_20046 = G__20058;
continue;
}
} else
{var arg__11924__auto___20059 = cljs.core.first.call(null,seq__18717_20053__$1);a__11923__auto__.push(arg__11924__auto___20059);
{
var G__20060 = cljs.core.next.call(null,seq__18717_20053__$1);
var G__20061 = null;
var G__20062 = 0;
var G__20063 = 0;
seq__18717_20043 = G__20060;
chunk__18718_20044 = G__20061;
count__18719_20045 = G__20062;
i__18720_20046 = G__20063;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__11923__auto__);
};
var dfn = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__11922__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__20064){
var args__11922__auto__ = cljs.core.seq(arglist__20064);
return dfn__delegate(args__11922__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18725_20065 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18726_20066 = null;var count__18727_20067 = 0;var i__18728_20068 = 0;while(true){
if((i__18728_20068 < count__18727_20067))
{var arg__11924__auto___20069 = cljs.core._nth.call(null,chunk__18726_20066,i__18728_20068);a__11923__auto__.push(arg__11924__auto___20069);
{
var G__20070 = seq__18725_20065;
var G__20071 = chunk__18726_20066;
var G__20072 = count__18727_20067;
var G__20073 = (i__18728_20068 + 1);
seq__18725_20065 = G__20070;
chunk__18726_20066 = G__20071;
count__18727_20067 = G__20072;
i__18728_20068 = G__20073;
continue;
}
} else
{var temp__4092__auto___20074 = cljs.core.seq.call(null,seq__18725_20065);if(temp__4092__auto___20074)
{var seq__18725_20075__$1 = temp__4092__auto___20074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18725_20075__$1))
{var c__11077__auto___20076 = cljs.core.chunk_first.call(null,seq__18725_20075__$1);{
var G__20077 = cljs.core.chunk_rest.call(null,seq__18725_20075__$1);
var G__20078 = c__11077__auto___20076;
var G__20079 = cljs.core.count.call(null,c__11077__auto___20076);
var G__20080 = 0;
seq__18725_20065 = G__20077;
chunk__18726_20066 = G__20078;
count__18727_20067 = G__20079;
i__18728_20068 = G__20080;
continue;
}
} else
{var arg__11924__auto___20081 = cljs.core.first.call(null,seq__18725_20075__$1);a__11923__auto__.push(arg__11924__auto___20081);
{
var G__20082 = cljs.core.next.call(null,seq__18725_20075__$1);
var G__20083 = null;
var G__20084 = 0;
var G__20085 = 0;
seq__18725_20065 = G__20082;
chunk__18726_20066 = G__20083;
count__18727_20067 = G__20084;
i__18728_20068 = G__20085;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__11923__auto__);
};
var div = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__11922__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__20086){
var args__11922__auto__ = cljs.core.seq(arglist__20086);
return div__delegate(args__11922__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18733_20087 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18734_20088 = null;var count__18735_20089 = 0;var i__18736_20090 = 0;while(true){
if((i__18736_20090 < count__18735_20089))
{var arg__11924__auto___20091 = cljs.core._nth.call(null,chunk__18734_20088,i__18736_20090);a__11923__auto__.push(arg__11924__auto___20091);
{
var G__20092 = seq__18733_20087;
var G__20093 = chunk__18734_20088;
var G__20094 = count__18735_20089;
var G__20095 = (i__18736_20090 + 1);
seq__18733_20087 = G__20092;
chunk__18734_20088 = G__20093;
count__18735_20089 = G__20094;
i__18736_20090 = G__20095;
continue;
}
} else
{var temp__4092__auto___20096 = cljs.core.seq.call(null,seq__18733_20087);if(temp__4092__auto___20096)
{var seq__18733_20097__$1 = temp__4092__auto___20096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18733_20097__$1))
{var c__11077__auto___20098 = cljs.core.chunk_first.call(null,seq__18733_20097__$1);{
var G__20099 = cljs.core.chunk_rest.call(null,seq__18733_20097__$1);
var G__20100 = c__11077__auto___20098;
var G__20101 = cljs.core.count.call(null,c__11077__auto___20098);
var G__20102 = 0;
seq__18733_20087 = G__20099;
chunk__18734_20088 = G__20100;
count__18735_20089 = G__20101;
i__18736_20090 = G__20102;
continue;
}
} else
{var arg__11924__auto___20103 = cljs.core.first.call(null,seq__18733_20097__$1);a__11923__auto__.push(arg__11924__auto___20103);
{
var G__20104 = cljs.core.next.call(null,seq__18733_20097__$1);
var G__20105 = null;
var G__20106 = 0;
var G__20107 = 0;
seq__18733_20087 = G__20104;
chunk__18734_20088 = G__20105;
count__18735_20089 = G__20106;
i__18736_20090 = G__20107;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__11923__auto__);
};
var dl = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__11922__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__20108){
var args__11922__auto__ = cljs.core.seq(arglist__20108);
return dl__delegate(args__11922__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18741_20109 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18742_20110 = null;var count__18743_20111 = 0;var i__18744_20112 = 0;while(true){
if((i__18744_20112 < count__18743_20111))
{var arg__11924__auto___20113 = cljs.core._nth.call(null,chunk__18742_20110,i__18744_20112);a__11923__auto__.push(arg__11924__auto___20113);
{
var G__20114 = seq__18741_20109;
var G__20115 = chunk__18742_20110;
var G__20116 = count__18743_20111;
var G__20117 = (i__18744_20112 + 1);
seq__18741_20109 = G__20114;
chunk__18742_20110 = G__20115;
count__18743_20111 = G__20116;
i__18744_20112 = G__20117;
continue;
}
} else
{var temp__4092__auto___20118 = cljs.core.seq.call(null,seq__18741_20109);if(temp__4092__auto___20118)
{var seq__18741_20119__$1 = temp__4092__auto___20118;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18741_20119__$1))
{var c__11077__auto___20120 = cljs.core.chunk_first.call(null,seq__18741_20119__$1);{
var G__20121 = cljs.core.chunk_rest.call(null,seq__18741_20119__$1);
var G__20122 = c__11077__auto___20120;
var G__20123 = cljs.core.count.call(null,c__11077__auto___20120);
var G__20124 = 0;
seq__18741_20109 = G__20121;
chunk__18742_20110 = G__20122;
count__18743_20111 = G__20123;
i__18744_20112 = G__20124;
continue;
}
} else
{var arg__11924__auto___20125 = cljs.core.first.call(null,seq__18741_20119__$1);a__11923__auto__.push(arg__11924__auto___20125);
{
var G__20126 = cljs.core.next.call(null,seq__18741_20119__$1);
var G__20127 = null;
var G__20128 = 0;
var G__20129 = 0;
seq__18741_20109 = G__20126;
chunk__18742_20110 = G__20127;
count__18743_20111 = G__20128;
i__18744_20112 = G__20129;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__11923__auto__);
};
var dt = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__11922__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__20130){
var args__11922__auto__ = cljs.core.seq(arglist__20130);
return dt__delegate(args__11922__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18749_20131 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18750_20132 = null;var count__18751_20133 = 0;var i__18752_20134 = 0;while(true){
if((i__18752_20134 < count__18751_20133))
{var arg__11924__auto___20135 = cljs.core._nth.call(null,chunk__18750_20132,i__18752_20134);a__11923__auto__.push(arg__11924__auto___20135);
{
var G__20136 = seq__18749_20131;
var G__20137 = chunk__18750_20132;
var G__20138 = count__18751_20133;
var G__20139 = (i__18752_20134 + 1);
seq__18749_20131 = G__20136;
chunk__18750_20132 = G__20137;
count__18751_20133 = G__20138;
i__18752_20134 = G__20139;
continue;
}
} else
{var temp__4092__auto___20140 = cljs.core.seq.call(null,seq__18749_20131);if(temp__4092__auto___20140)
{var seq__18749_20141__$1 = temp__4092__auto___20140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18749_20141__$1))
{var c__11077__auto___20142 = cljs.core.chunk_first.call(null,seq__18749_20141__$1);{
var G__20143 = cljs.core.chunk_rest.call(null,seq__18749_20141__$1);
var G__20144 = c__11077__auto___20142;
var G__20145 = cljs.core.count.call(null,c__11077__auto___20142);
var G__20146 = 0;
seq__18749_20131 = G__20143;
chunk__18750_20132 = G__20144;
count__18751_20133 = G__20145;
i__18752_20134 = G__20146;
continue;
}
} else
{var arg__11924__auto___20147 = cljs.core.first.call(null,seq__18749_20141__$1);a__11923__auto__.push(arg__11924__auto___20147);
{
var G__20148 = cljs.core.next.call(null,seq__18749_20141__$1);
var G__20149 = null;
var G__20150 = 0;
var G__20151 = 0;
seq__18749_20131 = G__20148;
chunk__18750_20132 = G__20149;
count__18751_20133 = G__20150;
i__18752_20134 = G__20151;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__11923__auto__);
};
var em = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__11922__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__20152){
var args__11922__auto__ = cljs.core.seq(arglist__20152);
return em__delegate(args__11922__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18765_20153 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18766_20154 = null;var count__18767_20155 = 0;var i__18768_20156 = 0;while(true){
if((i__18768_20156 < count__18767_20155))
{var arg__11924__auto___20157 = cljs.core._nth.call(null,chunk__18766_20154,i__18768_20156);a__11923__auto__.push(arg__11924__auto___20157);
{
var G__20158 = seq__18765_20153;
var G__20159 = chunk__18766_20154;
var G__20160 = count__18767_20155;
var G__20161 = (i__18768_20156 + 1);
seq__18765_20153 = G__20158;
chunk__18766_20154 = G__20159;
count__18767_20155 = G__20160;
i__18768_20156 = G__20161;
continue;
}
} else
{var temp__4092__auto___20162 = cljs.core.seq.call(null,seq__18765_20153);if(temp__4092__auto___20162)
{var seq__18765_20163__$1 = temp__4092__auto___20162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18765_20163__$1))
{var c__11077__auto___20164 = cljs.core.chunk_first.call(null,seq__18765_20163__$1);{
var G__20165 = cljs.core.chunk_rest.call(null,seq__18765_20163__$1);
var G__20166 = c__11077__auto___20164;
var G__20167 = cljs.core.count.call(null,c__11077__auto___20164);
var G__20168 = 0;
seq__18765_20153 = G__20165;
chunk__18766_20154 = G__20166;
count__18767_20155 = G__20167;
i__18768_20156 = G__20168;
continue;
}
} else
{var arg__11924__auto___20169 = cljs.core.first.call(null,seq__18765_20163__$1);a__11923__auto__.push(arg__11924__auto___20169);
{
var G__20170 = cljs.core.next.call(null,seq__18765_20163__$1);
var G__20171 = null;
var G__20172 = 0;
var G__20173 = 0;
seq__18765_20153 = G__20170;
chunk__18766_20154 = G__20171;
count__18767_20155 = G__20172;
i__18768_20156 = G__20173;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__11923__auto__);
};
var embed = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__11922__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__20174){
var args__11922__auto__ = cljs.core.seq(arglist__20174);
return embed__delegate(args__11922__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18773_20175 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18774_20176 = null;var count__18775_20177 = 0;var i__18776_20178 = 0;while(true){
if((i__18776_20178 < count__18775_20177))
{var arg__11924__auto___20179 = cljs.core._nth.call(null,chunk__18774_20176,i__18776_20178);a__11923__auto__.push(arg__11924__auto___20179);
{
var G__20180 = seq__18773_20175;
var G__20181 = chunk__18774_20176;
var G__20182 = count__18775_20177;
var G__20183 = (i__18776_20178 + 1);
seq__18773_20175 = G__20180;
chunk__18774_20176 = G__20181;
count__18775_20177 = G__20182;
i__18776_20178 = G__20183;
continue;
}
} else
{var temp__4092__auto___20184 = cljs.core.seq.call(null,seq__18773_20175);if(temp__4092__auto___20184)
{var seq__18773_20185__$1 = temp__4092__auto___20184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18773_20185__$1))
{var c__11077__auto___20186 = cljs.core.chunk_first.call(null,seq__18773_20185__$1);{
var G__20187 = cljs.core.chunk_rest.call(null,seq__18773_20185__$1);
var G__20188 = c__11077__auto___20186;
var G__20189 = cljs.core.count.call(null,c__11077__auto___20186);
var G__20190 = 0;
seq__18773_20175 = G__20187;
chunk__18774_20176 = G__20188;
count__18775_20177 = G__20189;
i__18776_20178 = G__20190;
continue;
}
} else
{var arg__11924__auto___20191 = cljs.core.first.call(null,seq__18773_20185__$1);a__11923__auto__.push(arg__11924__auto___20191);
{
var G__20192 = cljs.core.next.call(null,seq__18773_20185__$1);
var G__20193 = null;
var G__20194 = 0;
var G__20195 = 0;
seq__18773_20175 = G__20192;
chunk__18774_20176 = G__20193;
count__18775_20177 = G__20194;
i__18776_20178 = G__20195;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__11923__auto__);
};
var fieldset = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__11922__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__20196){
var args__11922__auto__ = cljs.core.seq(arglist__20196);
return fieldset__delegate(args__11922__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18781_20197 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18782_20198 = null;var count__18783_20199 = 0;var i__18784_20200 = 0;while(true){
if((i__18784_20200 < count__18783_20199))
{var arg__11924__auto___20201 = cljs.core._nth.call(null,chunk__18782_20198,i__18784_20200);a__11923__auto__.push(arg__11924__auto___20201);
{
var G__20202 = seq__18781_20197;
var G__20203 = chunk__18782_20198;
var G__20204 = count__18783_20199;
var G__20205 = (i__18784_20200 + 1);
seq__18781_20197 = G__20202;
chunk__18782_20198 = G__20203;
count__18783_20199 = G__20204;
i__18784_20200 = G__20205;
continue;
}
} else
{var temp__4092__auto___20206 = cljs.core.seq.call(null,seq__18781_20197);if(temp__4092__auto___20206)
{var seq__18781_20207__$1 = temp__4092__auto___20206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18781_20207__$1))
{var c__11077__auto___20208 = cljs.core.chunk_first.call(null,seq__18781_20207__$1);{
var G__20209 = cljs.core.chunk_rest.call(null,seq__18781_20207__$1);
var G__20210 = c__11077__auto___20208;
var G__20211 = cljs.core.count.call(null,c__11077__auto___20208);
var G__20212 = 0;
seq__18781_20197 = G__20209;
chunk__18782_20198 = G__20210;
count__18783_20199 = G__20211;
i__18784_20200 = G__20212;
continue;
}
} else
{var arg__11924__auto___20213 = cljs.core.first.call(null,seq__18781_20207__$1);a__11923__auto__.push(arg__11924__auto___20213);
{
var G__20214 = cljs.core.next.call(null,seq__18781_20207__$1);
var G__20215 = null;
var G__20216 = 0;
var G__20217 = 0;
seq__18781_20197 = G__20214;
chunk__18782_20198 = G__20215;
count__18783_20199 = G__20216;
i__18784_20200 = G__20217;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__11923__auto__);
};
var figcaption = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__11922__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__20218){
var args__11922__auto__ = cljs.core.seq(arglist__20218);
return figcaption__delegate(args__11922__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18789_20219 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18790_20220 = null;var count__18791_20221 = 0;var i__18792_20222 = 0;while(true){
if((i__18792_20222 < count__18791_20221))
{var arg__11924__auto___20223 = cljs.core._nth.call(null,chunk__18790_20220,i__18792_20222);a__11923__auto__.push(arg__11924__auto___20223);
{
var G__20224 = seq__18789_20219;
var G__20225 = chunk__18790_20220;
var G__20226 = count__18791_20221;
var G__20227 = (i__18792_20222 + 1);
seq__18789_20219 = G__20224;
chunk__18790_20220 = G__20225;
count__18791_20221 = G__20226;
i__18792_20222 = G__20227;
continue;
}
} else
{var temp__4092__auto___20228 = cljs.core.seq.call(null,seq__18789_20219);if(temp__4092__auto___20228)
{var seq__18789_20229__$1 = temp__4092__auto___20228;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18789_20229__$1))
{var c__11077__auto___20230 = cljs.core.chunk_first.call(null,seq__18789_20229__$1);{
var G__20231 = cljs.core.chunk_rest.call(null,seq__18789_20229__$1);
var G__20232 = c__11077__auto___20230;
var G__20233 = cljs.core.count.call(null,c__11077__auto___20230);
var G__20234 = 0;
seq__18789_20219 = G__20231;
chunk__18790_20220 = G__20232;
count__18791_20221 = G__20233;
i__18792_20222 = G__20234;
continue;
}
} else
{var arg__11924__auto___20235 = cljs.core.first.call(null,seq__18789_20229__$1);a__11923__auto__.push(arg__11924__auto___20235);
{
var G__20236 = cljs.core.next.call(null,seq__18789_20229__$1);
var G__20237 = null;
var G__20238 = 0;
var G__20239 = 0;
seq__18789_20219 = G__20236;
chunk__18790_20220 = G__20237;
count__18791_20221 = G__20238;
i__18792_20222 = G__20239;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__11923__auto__);
};
var figure = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__11922__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__20240){
var args__11922__auto__ = cljs.core.seq(arglist__20240);
return figure__delegate(args__11922__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18797_20241 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18798_20242 = null;var count__18799_20243 = 0;var i__18800_20244 = 0;while(true){
if((i__18800_20244 < count__18799_20243))
{var arg__11924__auto___20245 = cljs.core._nth.call(null,chunk__18798_20242,i__18800_20244);a__11923__auto__.push(arg__11924__auto___20245);
{
var G__20246 = seq__18797_20241;
var G__20247 = chunk__18798_20242;
var G__20248 = count__18799_20243;
var G__20249 = (i__18800_20244 + 1);
seq__18797_20241 = G__20246;
chunk__18798_20242 = G__20247;
count__18799_20243 = G__20248;
i__18800_20244 = G__20249;
continue;
}
} else
{var temp__4092__auto___20250 = cljs.core.seq.call(null,seq__18797_20241);if(temp__4092__auto___20250)
{var seq__18797_20251__$1 = temp__4092__auto___20250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18797_20251__$1))
{var c__11077__auto___20252 = cljs.core.chunk_first.call(null,seq__18797_20251__$1);{
var G__20253 = cljs.core.chunk_rest.call(null,seq__18797_20251__$1);
var G__20254 = c__11077__auto___20252;
var G__20255 = cljs.core.count.call(null,c__11077__auto___20252);
var G__20256 = 0;
seq__18797_20241 = G__20253;
chunk__18798_20242 = G__20254;
count__18799_20243 = G__20255;
i__18800_20244 = G__20256;
continue;
}
} else
{var arg__11924__auto___20257 = cljs.core.first.call(null,seq__18797_20251__$1);a__11923__auto__.push(arg__11924__auto___20257);
{
var G__20258 = cljs.core.next.call(null,seq__18797_20251__$1);
var G__20259 = null;
var G__20260 = 0;
var G__20261 = 0;
seq__18797_20241 = G__20258;
chunk__18798_20242 = G__20259;
count__18799_20243 = G__20260;
i__18800_20244 = G__20261;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__11923__auto__);
};
var footer = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__11922__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__20262){
var args__11922__auto__ = cljs.core.seq(arglist__20262);
return footer__delegate(args__11922__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18805_20263 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18806_20264 = null;var count__18807_20265 = 0;var i__18808_20266 = 0;while(true){
if((i__18808_20266 < count__18807_20265))
{var arg__11924__auto___20267 = cljs.core._nth.call(null,chunk__18806_20264,i__18808_20266);a__11923__auto__.push(arg__11924__auto___20267);
{
var G__20268 = seq__18805_20263;
var G__20269 = chunk__18806_20264;
var G__20270 = count__18807_20265;
var G__20271 = (i__18808_20266 + 1);
seq__18805_20263 = G__20268;
chunk__18806_20264 = G__20269;
count__18807_20265 = G__20270;
i__18808_20266 = G__20271;
continue;
}
} else
{var temp__4092__auto___20272 = cljs.core.seq.call(null,seq__18805_20263);if(temp__4092__auto___20272)
{var seq__18805_20273__$1 = temp__4092__auto___20272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18805_20273__$1))
{var c__11077__auto___20274 = cljs.core.chunk_first.call(null,seq__18805_20273__$1);{
var G__20275 = cljs.core.chunk_rest.call(null,seq__18805_20273__$1);
var G__20276 = c__11077__auto___20274;
var G__20277 = cljs.core.count.call(null,c__11077__auto___20274);
var G__20278 = 0;
seq__18805_20263 = G__20275;
chunk__18806_20264 = G__20276;
count__18807_20265 = G__20277;
i__18808_20266 = G__20278;
continue;
}
} else
{var arg__11924__auto___20279 = cljs.core.first.call(null,seq__18805_20273__$1);a__11923__auto__.push(arg__11924__auto___20279);
{
var G__20280 = cljs.core.next.call(null,seq__18805_20273__$1);
var G__20281 = null;
var G__20282 = 0;
var G__20283 = 0;
seq__18805_20263 = G__20280;
chunk__18806_20264 = G__20281;
count__18807_20265 = G__20282;
i__18808_20266 = G__20283;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__11923__auto__);
};
var form = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__11922__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__20284){
var args__11922__auto__ = cljs.core.seq(arglist__20284);
return form__delegate(args__11922__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18813_20285 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18814_20286 = null;var count__18815_20287 = 0;var i__18816_20288 = 0;while(true){
if((i__18816_20288 < count__18815_20287))
{var arg__11924__auto___20289 = cljs.core._nth.call(null,chunk__18814_20286,i__18816_20288);a__11923__auto__.push(arg__11924__auto___20289);
{
var G__20290 = seq__18813_20285;
var G__20291 = chunk__18814_20286;
var G__20292 = count__18815_20287;
var G__20293 = (i__18816_20288 + 1);
seq__18813_20285 = G__20290;
chunk__18814_20286 = G__20291;
count__18815_20287 = G__20292;
i__18816_20288 = G__20293;
continue;
}
} else
{var temp__4092__auto___20294 = cljs.core.seq.call(null,seq__18813_20285);if(temp__4092__auto___20294)
{var seq__18813_20295__$1 = temp__4092__auto___20294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18813_20295__$1))
{var c__11077__auto___20296 = cljs.core.chunk_first.call(null,seq__18813_20295__$1);{
var G__20297 = cljs.core.chunk_rest.call(null,seq__18813_20295__$1);
var G__20298 = c__11077__auto___20296;
var G__20299 = cljs.core.count.call(null,c__11077__auto___20296);
var G__20300 = 0;
seq__18813_20285 = G__20297;
chunk__18814_20286 = G__20298;
count__18815_20287 = G__20299;
i__18816_20288 = G__20300;
continue;
}
} else
{var arg__11924__auto___20301 = cljs.core.first.call(null,seq__18813_20295__$1);a__11923__auto__.push(arg__11924__auto___20301);
{
var G__20302 = cljs.core.next.call(null,seq__18813_20295__$1);
var G__20303 = null;
var G__20304 = 0;
var G__20305 = 0;
seq__18813_20285 = G__20302;
chunk__18814_20286 = G__20303;
count__18815_20287 = G__20304;
i__18816_20288 = G__20305;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__11923__auto__);
};
var h1 = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__11922__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__20306){
var args__11922__auto__ = cljs.core.seq(arglist__20306);
return h1__delegate(args__11922__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18821_20307 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18822_20308 = null;var count__18823_20309 = 0;var i__18824_20310 = 0;while(true){
if((i__18824_20310 < count__18823_20309))
{var arg__11924__auto___20311 = cljs.core._nth.call(null,chunk__18822_20308,i__18824_20310);a__11923__auto__.push(arg__11924__auto___20311);
{
var G__20312 = seq__18821_20307;
var G__20313 = chunk__18822_20308;
var G__20314 = count__18823_20309;
var G__20315 = (i__18824_20310 + 1);
seq__18821_20307 = G__20312;
chunk__18822_20308 = G__20313;
count__18823_20309 = G__20314;
i__18824_20310 = G__20315;
continue;
}
} else
{var temp__4092__auto___20316 = cljs.core.seq.call(null,seq__18821_20307);if(temp__4092__auto___20316)
{var seq__18821_20317__$1 = temp__4092__auto___20316;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18821_20317__$1))
{var c__11077__auto___20318 = cljs.core.chunk_first.call(null,seq__18821_20317__$1);{
var G__20319 = cljs.core.chunk_rest.call(null,seq__18821_20317__$1);
var G__20320 = c__11077__auto___20318;
var G__20321 = cljs.core.count.call(null,c__11077__auto___20318);
var G__20322 = 0;
seq__18821_20307 = G__20319;
chunk__18822_20308 = G__20320;
count__18823_20309 = G__20321;
i__18824_20310 = G__20322;
continue;
}
} else
{var arg__11924__auto___20323 = cljs.core.first.call(null,seq__18821_20317__$1);a__11923__auto__.push(arg__11924__auto___20323);
{
var G__20324 = cljs.core.next.call(null,seq__18821_20317__$1);
var G__20325 = null;
var G__20326 = 0;
var G__20327 = 0;
seq__18821_20307 = G__20324;
chunk__18822_20308 = G__20325;
count__18823_20309 = G__20326;
i__18824_20310 = G__20327;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__11923__auto__);
};
var h2 = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__11922__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__20328){
var args__11922__auto__ = cljs.core.seq(arglist__20328);
return h2__delegate(args__11922__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18829_20329 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18830_20330 = null;var count__18831_20331 = 0;var i__18832_20332 = 0;while(true){
if((i__18832_20332 < count__18831_20331))
{var arg__11924__auto___20333 = cljs.core._nth.call(null,chunk__18830_20330,i__18832_20332);a__11923__auto__.push(arg__11924__auto___20333);
{
var G__20334 = seq__18829_20329;
var G__20335 = chunk__18830_20330;
var G__20336 = count__18831_20331;
var G__20337 = (i__18832_20332 + 1);
seq__18829_20329 = G__20334;
chunk__18830_20330 = G__20335;
count__18831_20331 = G__20336;
i__18832_20332 = G__20337;
continue;
}
} else
{var temp__4092__auto___20338 = cljs.core.seq.call(null,seq__18829_20329);if(temp__4092__auto___20338)
{var seq__18829_20339__$1 = temp__4092__auto___20338;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18829_20339__$1))
{var c__11077__auto___20340 = cljs.core.chunk_first.call(null,seq__18829_20339__$1);{
var G__20341 = cljs.core.chunk_rest.call(null,seq__18829_20339__$1);
var G__20342 = c__11077__auto___20340;
var G__20343 = cljs.core.count.call(null,c__11077__auto___20340);
var G__20344 = 0;
seq__18829_20329 = G__20341;
chunk__18830_20330 = G__20342;
count__18831_20331 = G__20343;
i__18832_20332 = G__20344;
continue;
}
} else
{var arg__11924__auto___20345 = cljs.core.first.call(null,seq__18829_20339__$1);a__11923__auto__.push(arg__11924__auto___20345);
{
var G__20346 = cljs.core.next.call(null,seq__18829_20339__$1);
var G__20347 = null;
var G__20348 = 0;
var G__20349 = 0;
seq__18829_20329 = G__20346;
chunk__18830_20330 = G__20347;
count__18831_20331 = G__20348;
i__18832_20332 = G__20349;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__11923__auto__);
};
var h3 = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__11922__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__20350){
var args__11922__auto__ = cljs.core.seq(arglist__20350);
return h3__delegate(args__11922__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18837_20351 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18838_20352 = null;var count__18839_20353 = 0;var i__18840_20354 = 0;while(true){
if((i__18840_20354 < count__18839_20353))
{var arg__11924__auto___20355 = cljs.core._nth.call(null,chunk__18838_20352,i__18840_20354);a__11923__auto__.push(arg__11924__auto___20355);
{
var G__20356 = seq__18837_20351;
var G__20357 = chunk__18838_20352;
var G__20358 = count__18839_20353;
var G__20359 = (i__18840_20354 + 1);
seq__18837_20351 = G__20356;
chunk__18838_20352 = G__20357;
count__18839_20353 = G__20358;
i__18840_20354 = G__20359;
continue;
}
} else
{var temp__4092__auto___20360 = cljs.core.seq.call(null,seq__18837_20351);if(temp__4092__auto___20360)
{var seq__18837_20361__$1 = temp__4092__auto___20360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18837_20361__$1))
{var c__11077__auto___20362 = cljs.core.chunk_first.call(null,seq__18837_20361__$1);{
var G__20363 = cljs.core.chunk_rest.call(null,seq__18837_20361__$1);
var G__20364 = c__11077__auto___20362;
var G__20365 = cljs.core.count.call(null,c__11077__auto___20362);
var G__20366 = 0;
seq__18837_20351 = G__20363;
chunk__18838_20352 = G__20364;
count__18839_20353 = G__20365;
i__18840_20354 = G__20366;
continue;
}
} else
{var arg__11924__auto___20367 = cljs.core.first.call(null,seq__18837_20361__$1);a__11923__auto__.push(arg__11924__auto___20367);
{
var G__20368 = cljs.core.next.call(null,seq__18837_20361__$1);
var G__20369 = null;
var G__20370 = 0;
var G__20371 = 0;
seq__18837_20351 = G__20368;
chunk__18838_20352 = G__20369;
count__18839_20353 = G__20370;
i__18840_20354 = G__20371;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__11923__auto__);
};
var h4 = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__11922__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__20372){
var args__11922__auto__ = cljs.core.seq(arglist__20372);
return h4__delegate(args__11922__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18845_20373 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18846_20374 = null;var count__18847_20375 = 0;var i__18848_20376 = 0;while(true){
if((i__18848_20376 < count__18847_20375))
{var arg__11924__auto___20377 = cljs.core._nth.call(null,chunk__18846_20374,i__18848_20376);a__11923__auto__.push(arg__11924__auto___20377);
{
var G__20378 = seq__18845_20373;
var G__20379 = chunk__18846_20374;
var G__20380 = count__18847_20375;
var G__20381 = (i__18848_20376 + 1);
seq__18845_20373 = G__20378;
chunk__18846_20374 = G__20379;
count__18847_20375 = G__20380;
i__18848_20376 = G__20381;
continue;
}
} else
{var temp__4092__auto___20382 = cljs.core.seq.call(null,seq__18845_20373);if(temp__4092__auto___20382)
{var seq__18845_20383__$1 = temp__4092__auto___20382;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18845_20383__$1))
{var c__11077__auto___20384 = cljs.core.chunk_first.call(null,seq__18845_20383__$1);{
var G__20385 = cljs.core.chunk_rest.call(null,seq__18845_20383__$1);
var G__20386 = c__11077__auto___20384;
var G__20387 = cljs.core.count.call(null,c__11077__auto___20384);
var G__20388 = 0;
seq__18845_20373 = G__20385;
chunk__18846_20374 = G__20386;
count__18847_20375 = G__20387;
i__18848_20376 = G__20388;
continue;
}
} else
{var arg__11924__auto___20389 = cljs.core.first.call(null,seq__18845_20383__$1);a__11923__auto__.push(arg__11924__auto___20389);
{
var G__20390 = cljs.core.next.call(null,seq__18845_20383__$1);
var G__20391 = null;
var G__20392 = 0;
var G__20393 = 0;
seq__18845_20373 = G__20390;
chunk__18846_20374 = G__20391;
count__18847_20375 = G__20392;
i__18848_20376 = G__20393;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__11923__auto__);
};
var h5 = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__11922__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__20394){
var args__11922__auto__ = cljs.core.seq(arglist__20394);
return h5__delegate(args__11922__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18853_20395 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18854_20396 = null;var count__18855_20397 = 0;var i__18856_20398 = 0;while(true){
if((i__18856_20398 < count__18855_20397))
{var arg__11924__auto___20399 = cljs.core._nth.call(null,chunk__18854_20396,i__18856_20398);a__11923__auto__.push(arg__11924__auto___20399);
{
var G__20400 = seq__18853_20395;
var G__20401 = chunk__18854_20396;
var G__20402 = count__18855_20397;
var G__20403 = (i__18856_20398 + 1);
seq__18853_20395 = G__20400;
chunk__18854_20396 = G__20401;
count__18855_20397 = G__20402;
i__18856_20398 = G__20403;
continue;
}
} else
{var temp__4092__auto___20404 = cljs.core.seq.call(null,seq__18853_20395);if(temp__4092__auto___20404)
{var seq__18853_20405__$1 = temp__4092__auto___20404;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18853_20405__$1))
{var c__11077__auto___20406 = cljs.core.chunk_first.call(null,seq__18853_20405__$1);{
var G__20407 = cljs.core.chunk_rest.call(null,seq__18853_20405__$1);
var G__20408 = c__11077__auto___20406;
var G__20409 = cljs.core.count.call(null,c__11077__auto___20406);
var G__20410 = 0;
seq__18853_20395 = G__20407;
chunk__18854_20396 = G__20408;
count__18855_20397 = G__20409;
i__18856_20398 = G__20410;
continue;
}
} else
{var arg__11924__auto___20411 = cljs.core.first.call(null,seq__18853_20405__$1);a__11923__auto__.push(arg__11924__auto___20411);
{
var G__20412 = cljs.core.next.call(null,seq__18853_20405__$1);
var G__20413 = null;
var G__20414 = 0;
var G__20415 = 0;
seq__18853_20395 = G__20412;
chunk__18854_20396 = G__20413;
count__18855_20397 = G__20414;
i__18856_20398 = G__20415;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__11923__auto__);
};
var h6 = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__11922__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__20416){
var args__11922__auto__ = cljs.core.seq(arglist__20416);
return h6__delegate(args__11922__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18861_20417 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18862_20418 = null;var count__18863_20419 = 0;var i__18864_20420 = 0;while(true){
if((i__18864_20420 < count__18863_20419))
{var arg__11924__auto___20421 = cljs.core._nth.call(null,chunk__18862_20418,i__18864_20420);a__11923__auto__.push(arg__11924__auto___20421);
{
var G__20422 = seq__18861_20417;
var G__20423 = chunk__18862_20418;
var G__20424 = count__18863_20419;
var G__20425 = (i__18864_20420 + 1);
seq__18861_20417 = G__20422;
chunk__18862_20418 = G__20423;
count__18863_20419 = G__20424;
i__18864_20420 = G__20425;
continue;
}
} else
{var temp__4092__auto___20426 = cljs.core.seq.call(null,seq__18861_20417);if(temp__4092__auto___20426)
{var seq__18861_20427__$1 = temp__4092__auto___20426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18861_20427__$1))
{var c__11077__auto___20428 = cljs.core.chunk_first.call(null,seq__18861_20427__$1);{
var G__20429 = cljs.core.chunk_rest.call(null,seq__18861_20427__$1);
var G__20430 = c__11077__auto___20428;
var G__20431 = cljs.core.count.call(null,c__11077__auto___20428);
var G__20432 = 0;
seq__18861_20417 = G__20429;
chunk__18862_20418 = G__20430;
count__18863_20419 = G__20431;
i__18864_20420 = G__20432;
continue;
}
} else
{var arg__11924__auto___20433 = cljs.core.first.call(null,seq__18861_20427__$1);a__11923__auto__.push(arg__11924__auto___20433);
{
var G__20434 = cljs.core.next.call(null,seq__18861_20427__$1);
var G__20435 = null;
var G__20436 = 0;
var G__20437 = 0;
seq__18861_20417 = G__20434;
chunk__18862_20418 = G__20435;
count__18863_20419 = G__20436;
i__18864_20420 = G__20437;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__11923__auto__);
};
var head = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__11922__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__20438){
var args__11922__auto__ = cljs.core.seq(arglist__20438);
return head__delegate(args__11922__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18869_20439 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18870_20440 = null;var count__18871_20441 = 0;var i__18872_20442 = 0;while(true){
if((i__18872_20442 < count__18871_20441))
{var arg__11924__auto___20443 = cljs.core._nth.call(null,chunk__18870_20440,i__18872_20442);a__11923__auto__.push(arg__11924__auto___20443);
{
var G__20444 = seq__18869_20439;
var G__20445 = chunk__18870_20440;
var G__20446 = count__18871_20441;
var G__20447 = (i__18872_20442 + 1);
seq__18869_20439 = G__20444;
chunk__18870_20440 = G__20445;
count__18871_20441 = G__20446;
i__18872_20442 = G__20447;
continue;
}
} else
{var temp__4092__auto___20448 = cljs.core.seq.call(null,seq__18869_20439);if(temp__4092__auto___20448)
{var seq__18869_20449__$1 = temp__4092__auto___20448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18869_20449__$1))
{var c__11077__auto___20450 = cljs.core.chunk_first.call(null,seq__18869_20449__$1);{
var G__20451 = cljs.core.chunk_rest.call(null,seq__18869_20449__$1);
var G__20452 = c__11077__auto___20450;
var G__20453 = cljs.core.count.call(null,c__11077__auto___20450);
var G__20454 = 0;
seq__18869_20439 = G__20451;
chunk__18870_20440 = G__20452;
count__18871_20441 = G__20453;
i__18872_20442 = G__20454;
continue;
}
} else
{var arg__11924__auto___20455 = cljs.core.first.call(null,seq__18869_20449__$1);a__11923__auto__.push(arg__11924__auto___20455);
{
var G__20456 = cljs.core.next.call(null,seq__18869_20449__$1);
var G__20457 = null;
var G__20458 = 0;
var G__20459 = 0;
seq__18869_20439 = G__20456;
chunk__18870_20440 = G__20457;
count__18871_20441 = G__20458;
i__18872_20442 = G__20459;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__11923__auto__);
};
var header = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__11922__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__20460){
var args__11922__auto__ = cljs.core.seq(arglist__20460);
return header__delegate(args__11922__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18877_20461 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18878_20462 = null;var count__18879_20463 = 0;var i__18880_20464 = 0;while(true){
if((i__18880_20464 < count__18879_20463))
{var arg__11924__auto___20465 = cljs.core._nth.call(null,chunk__18878_20462,i__18880_20464);a__11923__auto__.push(arg__11924__auto___20465);
{
var G__20466 = seq__18877_20461;
var G__20467 = chunk__18878_20462;
var G__20468 = count__18879_20463;
var G__20469 = (i__18880_20464 + 1);
seq__18877_20461 = G__20466;
chunk__18878_20462 = G__20467;
count__18879_20463 = G__20468;
i__18880_20464 = G__20469;
continue;
}
} else
{var temp__4092__auto___20470 = cljs.core.seq.call(null,seq__18877_20461);if(temp__4092__auto___20470)
{var seq__18877_20471__$1 = temp__4092__auto___20470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18877_20471__$1))
{var c__11077__auto___20472 = cljs.core.chunk_first.call(null,seq__18877_20471__$1);{
var G__20473 = cljs.core.chunk_rest.call(null,seq__18877_20471__$1);
var G__20474 = c__11077__auto___20472;
var G__20475 = cljs.core.count.call(null,c__11077__auto___20472);
var G__20476 = 0;
seq__18877_20461 = G__20473;
chunk__18878_20462 = G__20474;
count__18879_20463 = G__20475;
i__18880_20464 = G__20476;
continue;
}
} else
{var arg__11924__auto___20477 = cljs.core.first.call(null,seq__18877_20471__$1);a__11923__auto__.push(arg__11924__auto___20477);
{
var G__20478 = cljs.core.next.call(null,seq__18877_20471__$1);
var G__20479 = null;
var G__20480 = 0;
var G__20481 = 0;
seq__18877_20461 = G__20478;
chunk__18878_20462 = G__20479;
count__18879_20463 = G__20480;
i__18880_20464 = G__20481;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__11923__auto__);
};
var hr = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__11922__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__20482){
var args__11922__auto__ = cljs.core.seq(arglist__20482);
return hr__delegate(args__11922__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18885_20483 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18886_20484 = null;var count__18887_20485 = 0;var i__18888_20486 = 0;while(true){
if((i__18888_20486 < count__18887_20485))
{var arg__11924__auto___20487 = cljs.core._nth.call(null,chunk__18886_20484,i__18888_20486);a__11923__auto__.push(arg__11924__auto___20487);
{
var G__20488 = seq__18885_20483;
var G__20489 = chunk__18886_20484;
var G__20490 = count__18887_20485;
var G__20491 = (i__18888_20486 + 1);
seq__18885_20483 = G__20488;
chunk__18886_20484 = G__20489;
count__18887_20485 = G__20490;
i__18888_20486 = G__20491;
continue;
}
} else
{var temp__4092__auto___20492 = cljs.core.seq.call(null,seq__18885_20483);if(temp__4092__auto___20492)
{var seq__18885_20493__$1 = temp__4092__auto___20492;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18885_20493__$1))
{var c__11077__auto___20494 = cljs.core.chunk_first.call(null,seq__18885_20493__$1);{
var G__20495 = cljs.core.chunk_rest.call(null,seq__18885_20493__$1);
var G__20496 = c__11077__auto___20494;
var G__20497 = cljs.core.count.call(null,c__11077__auto___20494);
var G__20498 = 0;
seq__18885_20483 = G__20495;
chunk__18886_20484 = G__20496;
count__18887_20485 = G__20497;
i__18888_20486 = G__20498;
continue;
}
} else
{var arg__11924__auto___20499 = cljs.core.first.call(null,seq__18885_20493__$1);a__11923__auto__.push(arg__11924__auto___20499);
{
var G__20500 = cljs.core.next.call(null,seq__18885_20493__$1);
var G__20501 = null;
var G__20502 = 0;
var G__20503 = 0;
seq__18885_20483 = G__20500;
chunk__18886_20484 = G__20501;
count__18887_20485 = G__20502;
i__18888_20486 = G__20503;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__11923__auto__);
};
var html = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__11922__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__20504){
var args__11922__auto__ = cljs.core.seq(arglist__20504);
return html__delegate(args__11922__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18893_20505 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18894_20506 = null;var count__18895_20507 = 0;var i__18896_20508 = 0;while(true){
if((i__18896_20508 < count__18895_20507))
{var arg__11924__auto___20509 = cljs.core._nth.call(null,chunk__18894_20506,i__18896_20508);a__11923__auto__.push(arg__11924__auto___20509);
{
var G__20510 = seq__18893_20505;
var G__20511 = chunk__18894_20506;
var G__20512 = count__18895_20507;
var G__20513 = (i__18896_20508 + 1);
seq__18893_20505 = G__20510;
chunk__18894_20506 = G__20511;
count__18895_20507 = G__20512;
i__18896_20508 = G__20513;
continue;
}
} else
{var temp__4092__auto___20514 = cljs.core.seq.call(null,seq__18893_20505);if(temp__4092__auto___20514)
{var seq__18893_20515__$1 = temp__4092__auto___20514;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18893_20515__$1))
{var c__11077__auto___20516 = cljs.core.chunk_first.call(null,seq__18893_20515__$1);{
var G__20517 = cljs.core.chunk_rest.call(null,seq__18893_20515__$1);
var G__20518 = c__11077__auto___20516;
var G__20519 = cljs.core.count.call(null,c__11077__auto___20516);
var G__20520 = 0;
seq__18893_20505 = G__20517;
chunk__18894_20506 = G__20518;
count__18895_20507 = G__20519;
i__18896_20508 = G__20520;
continue;
}
} else
{var arg__11924__auto___20521 = cljs.core.first.call(null,seq__18893_20515__$1);a__11923__auto__.push(arg__11924__auto___20521);
{
var G__20522 = cljs.core.next.call(null,seq__18893_20515__$1);
var G__20523 = null;
var G__20524 = 0;
var G__20525 = 0;
seq__18893_20505 = G__20522;
chunk__18894_20506 = G__20523;
count__18895_20507 = G__20524;
i__18896_20508 = G__20525;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__11923__auto__);
};
var i = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__11922__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__20526){
var args__11922__auto__ = cljs.core.seq(arglist__20526);
return i__delegate(args__11922__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18901_20527 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18902_20528 = null;var count__18903_20529 = 0;var i__18904_20530 = 0;while(true){
if((i__18904_20530 < count__18903_20529))
{var arg__11924__auto___20531 = cljs.core._nth.call(null,chunk__18902_20528,i__18904_20530);a__11923__auto__.push(arg__11924__auto___20531);
{
var G__20532 = seq__18901_20527;
var G__20533 = chunk__18902_20528;
var G__20534 = count__18903_20529;
var G__20535 = (i__18904_20530 + 1);
seq__18901_20527 = G__20532;
chunk__18902_20528 = G__20533;
count__18903_20529 = G__20534;
i__18904_20530 = G__20535;
continue;
}
} else
{var temp__4092__auto___20536 = cljs.core.seq.call(null,seq__18901_20527);if(temp__4092__auto___20536)
{var seq__18901_20537__$1 = temp__4092__auto___20536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18901_20537__$1))
{var c__11077__auto___20538 = cljs.core.chunk_first.call(null,seq__18901_20537__$1);{
var G__20539 = cljs.core.chunk_rest.call(null,seq__18901_20537__$1);
var G__20540 = c__11077__auto___20538;
var G__20541 = cljs.core.count.call(null,c__11077__auto___20538);
var G__20542 = 0;
seq__18901_20527 = G__20539;
chunk__18902_20528 = G__20540;
count__18903_20529 = G__20541;
i__18904_20530 = G__20542;
continue;
}
} else
{var arg__11924__auto___20543 = cljs.core.first.call(null,seq__18901_20537__$1);a__11923__auto__.push(arg__11924__auto___20543);
{
var G__20544 = cljs.core.next.call(null,seq__18901_20537__$1);
var G__20545 = null;
var G__20546 = 0;
var G__20547 = 0;
seq__18901_20527 = G__20544;
chunk__18902_20528 = G__20545;
count__18903_20529 = G__20546;
i__18904_20530 = G__20547;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__11923__auto__);
};
var iframe = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__11922__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__20548){
var args__11922__auto__ = cljs.core.seq(arglist__20548);
return iframe__delegate(args__11922__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18909_20549 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18910_20550 = null;var count__18911_20551 = 0;var i__18912_20552 = 0;while(true){
if((i__18912_20552 < count__18911_20551))
{var arg__11924__auto___20553 = cljs.core._nth.call(null,chunk__18910_20550,i__18912_20552);a__11923__auto__.push(arg__11924__auto___20553);
{
var G__20554 = seq__18909_20549;
var G__20555 = chunk__18910_20550;
var G__20556 = count__18911_20551;
var G__20557 = (i__18912_20552 + 1);
seq__18909_20549 = G__20554;
chunk__18910_20550 = G__20555;
count__18911_20551 = G__20556;
i__18912_20552 = G__20557;
continue;
}
} else
{var temp__4092__auto___20558 = cljs.core.seq.call(null,seq__18909_20549);if(temp__4092__auto___20558)
{var seq__18909_20559__$1 = temp__4092__auto___20558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18909_20559__$1))
{var c__11077__auto___20560 = cljs.core.chunk_first.call(null,seq__18909_20559__$1);{
var G__20561 = cljs.core.chunk_rest.call(null,seq__18909_20559__$1);
var G__20562 = c__11077__auto___20560;
var G__20563 = cljs.core.count.call(null,c__11077__auto___20560);
var G__20564 = 0;
seq__18909_20549 = G__20561;
chunk__18910_20550 = G__20562;
count__18911_20551 = G__20563;
i__18912_20552 = G__20564;
continue;
}
} else
{var arg__11924__auto___20565 = cljs.core.first.call(null,seq__18909_20559__$1);a__11923__auto__.push(arg__11924__auto___20565);
{
var G__20566 = cljs.core.next.call(null,seq__18909_20559__$1);
var G__20567 = null;
var G__20568 = 0;
var G__20569 = 0;
seq__18909_20549 = G__20566;
chunk__18910_20550 = G__20567;
count__18911_20551 = G__20568;
i__18912_20552 = G__20569;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__11923__auto__);
};
var img = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__11922__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__20570){
var args__11922__auto__ = cljs.core.seq(arglist__20570);
return img__delegate(args__11922__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18917_20571 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18918_20572 = null;var count__18919_20573 = 0;var i__18920_20574 = 0;while(true){
if((i__18920_20574 < count__18919_20573))
{var arg__11924__auto___20575 = cljs.core._nth.call(null,chunk__18918_20572,i__18920_20574);a__11923__auto__.push(arg__11924__auto___20575);
{
var G__20576 = seq__18917_20571;
var G__20577 = chunk__18918_20572;
var G__20578 = count__18919_20573;
var G__20579 = (i__18920_20574 + 1);
seq__18917_20571 = G__20576;
chunk__18918_20572 = G__20577;
count__18919_20573 = G__20578;
i__18920_20574 = G__20579;
continue;
}
} else
{var temp__4092__auto___20580 = cljs.core.seq.call(null,seq__18917_20571);if(temp__4092__auto___20580)
{var seq__18917_20581__$1 = temp__4092__auto___20580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18917_20581__$1))
{var c__11077__auto___20582 = cljs.core.chunk_first.call(null,seq__18917_20581__$1);{
var G__20583 = cljs.core.chunk_rest.call(null,seq__18917_20581__$1);
var G__20584 = c__11077__auto___20582;
var G__20585 = cljs.core.count.call(null,c__11077__auto___20582);
var G__20586 = 0;
seq__18917_20571 = G__20583;
chunk__18918_20572 = G__20584;
count__18919_20573 = G__20585;
i__18920_20574 = G__20586;
continue;
}
} else
{var arg__11924__auto___20587 = cljs.core.first.call(null,seq__18917_20581__$1);a__11923__auto__.push(arg__11924__auto___20587);
{
var G__20588 = cljs.core.next.call(null,seq__18917_20581__$1);
var G__20589 = null;
var G__20590 = 0;
var G__20591 = 0;
seq__18917_20571 = G__20588;
chunk__18918_20572 = G__20589;
count__18919_20573 = G__20590;
i__18920_20574 = G__20591;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__11923__auto__);
};
var input = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__11922__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__20592){
var args__11922__auto__ = cljs.core.seq(arglist__20592);
return input__delegate(args__11922__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18925_20593 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18926_20594 = null;var count__18927_20595 = 0;var i__18928_20596 = 0;while(true){
if((i__18928_20596 < count__18927_20595))
{var arg__11924__auto___20597 = cljs.core._nth.call(null,chunk__18926_20594,i__18928_20596);a__11923__auto__.push(arg__11924__auto___20597);
{
var G__20598 = seq__18925_20593;
var G__20599 = chunk__18926_20594;
var G__20600 = count__18927_20595;
var G__20601 = (i__18928_20596 + 1);
seq__18925_20593 = G__20598;
chunk__18926_20594 = G__20599;
count__18927_20595 = G__20600;
i__18928_20596 = G__20601;
continue;
}
} else
{var temp__4092__auto___20602 = cljs.core.seq.call(null,seq__18925_20593);if(temp__4092__auto___20602)
{var seq__18925_20603__$1 = temp__4092__auto___20602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18925_20603__$1))
{var c__11077__auto___20604 = cljs.core.chunk_first.call(null,seq__18925_20603__$1);{
var G__20605 = cljs.core.chunk_rest.call(null,seq__18925_20603__$1);
var G__20606 = c__11077__auto___20604;
var G__20607 = cljs.core.count.call(null,c__11077__auto___20604);
var G__20608 = 0;
seq__18925_20593 = G__20605;
chunk__18926_20594 = G__20606;
count__18927_20595 = G__20607;
i__18928_20596 = G__20608;
continue;
}
} else
{var arg__11924__auto___20609 = cljs.core.first.call(null,seq__18925_20603__$1);a__11923__auto__.push(arg__11924__auto___20609);
{
var G__20610 = cljs.core.next.call(null,seq__18925_20603__$1);
var G__20611 = null;
var G__20612 = 0;
var G__20613 = 0;
seq__18925_20593 = G__20610;
chunk__18926_20594 = G__20611;
count__18927_20595 = G__20612;
i__18928_20596 = G__20613;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__11923__auto__);
};
var ins = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__11922__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__20614){
var args__11922__auto__ = cljs.core.seq(arglist__20614);
return ins__delegate(args__11922__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18933_20615 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18934_20616 = null;var count__18935_20617 = 0;var i__18936_20618 = 0;while(true){
if((i__18936_20618 < count__18935_20617))
{var arg__11924__auto___20619 = cljs.core._nth.call(null,chunk__18934_20616,i__18936_20618);a__11923__auto__.push(arg__11924__auto___20619);
{
var G__20620 = seq__18933_20615;
var G__20621 = chunk__18934_20616;
var G__20622 = count__18935_20617;
var G__20623 = (i__18936_20618 + 1);
seq__18933_20615 = G__20620;
chunk__18934_20616 = G__20621;
count__18935_20617 = G__20622;
i__18936_20618 = G__20623;
continue;
}
} else
{var temp__4092__auto___20624 = cljs.core.seq.call(null,seq__18933_20615);if(temp__4092__auto___20624)
{var seq__18933_20625__$1 = temp__4092__auto___20624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18933_20625__$1))
{var c__11077__auto___20626 = cljs.core.chunk_first.call(null,seq__18933_20625__$1);{
var G__20627 = cljs.core.chunk_rest.call(null,seq__18933_20625__$1);
var G__20628 = c__11077__auto___20626;
var G__20629 = cljs.core.count.call(null,c__11077__auto___20626);
var G__20630 = 0;
seq__18933_20615 = G__20627;
chunk__18934_20616 = G__20628;
count__18935_20617 = G__20629;
i__18936_20618 = G__20630;
continue;
}
} else
{var arg__11924__auto___20631 = cljs.core.first.call(null,seq__18933_20625__$1);a__11923__auto__.push(arg__11924__auto___20631);
{
var G__20632 = cljs.core.next.call(null,seq__18933_20625__$1);
var G__20633 = null;
var G__20634 = 0;
var G__20635 = 0;
seq__18933_20615 = G__20632;
chunk__18934_20616 = G__20633;
count__18935_20617 = G__20634;
i__18936_20618 = G__20635;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__11923__auto__);
};
var kbd = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__11922__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__20636){
var args__11922__auto__ = cljs.core.seq(arglist__20636);
return kbd__delegate(args__11922__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18941_20637 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18942_20638 = null;var count__18943_20639 = 0;var i__18944_20640 = 0;while(true){
if((i__18944_20640 < count__18943_20639))
{var arg__11924__auto___20641 = cljs.core._nth.call(null,chunk__18942_20638,i__18944_20640);a__11923__auto__.push(arg__11924__auto___20641);
{
var G__20642 = seq__18941_20637;
var G__20643 = chunk__18942_20638;
var G__20644 = count__18943_20639;
var G__20645 = (i__18944_20640 + 1);
seq__18941_20637 = G__20642;
chunk__18942_20638 = G__20643;
count__18943_20639 = G__20644;
i__18944_20640 = G__20645;
continue;
}
} else
{var temp__4092__auto___20646 = cljs.core.seq.call(null,seq__18941_20637);if(temp__4092__auto___20646)
{var seq__18941_20647__$1 = temp__4092__auto___20646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18941_20647__$1))
{var c__11077__auto___20648 = cljs.core.chunk_first.call(null,seq__18941_20647__$1);{
var G__20649 = cljs.core.chunk_rest.call(null,seq__18941_20647__$1);
var G__20650 = c__11077__auto___20648;
var G__20651 = cljs.core.count.call(null,c__11077__auto___20648);
var G__20652 = 0;
seq__18941_20637 = G__20649;
chunk__18942_20638 = G__20650;
count__18943_20639 = G__20651;
i__18944_20640 = G__20652;
continue;
}
} else
{var arg__11924__auto___20653 = cljs.core.first.call(null,seq__18941_20647__$1);a__11923__auto__.push(arg__11924__auto___20653);
{
var G__20654 = cljs.core.next.call(null,seq__18941_20647__$1);
var G__20655 = null;
var G__20656 = 0;
var G__20657 = 0;
seq__18941_20637 = G__20654;
chunk__18942_20638 = G__20655;
count__18943_20639 = G__20656;
i__18944_20640 = G__20657;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__11923__auto__);
};
var keygen = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__11922__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__20658){
var args__11922__auto__ = cljs.core.seq(arglist__20658);
return keygen__delegate(args__11922__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18949_20659 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18950_20660 = null;var count__18951_20661 = 0;var i__18952_20662 = 0;while(true){
if((i__18952_20662 < count__18951_20661))
{var arg__11924__auto___20663 = cljs.core._nth.call(null,chunk__18950_20660,i__18952_20662);a__11923__auto__.push(arg__11924__auto___20663);
{
var G__20664 = seq__18949_20659;
var G__20665 = chunk__18950_20660;
var G__20666 = count__18951_20661;
var G__20667 = (i__18952_20662 + 1);
seq__18949_20659 = G__20664;
chunk__18950_20660 = G__20665;
count__18951_20661 = G__20666;
i__18952_20662 = G__20667;
continue;
}
} else
{var temp__4092__auto___20668 = cljs.core.seq.call(null,seq__18949_20659);if(temp__4092__auto___20668)
{var seq__18949_20669__$1 = temp__4092__auto___20668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18949_20669__$1))
{var c__11077__auto___20670 = cljs.core.chunk_first.call(null,seq__18949_20669__$1);{
var G__20671 = cljs.core.chunk_rest.call(null,seq__18949_20669__$1);
var G__20672 = c__11077__auto___20670;
var G__20673 = cljs.core.count.call(null,c__11077__auto___20670);
var G__20674 = 0;
seq__18949_20659 = G__20671;
chunk__18950_20660 = G__20672;
count__18951_20661 = G__20673;
i__18952_20662 = G__20674;
continue;
}
} else
{var arg__11924__auto___20675 = cljs.core.first.call(null,seq__18949_20669__$1);a__11923__auto__.push(arg__11924__auto___20675);
{
var G__20676 = cljs.core.next.call(null,seq__18949_20669__$1);
var G__20677 = null;
var G__20678 = 0;
var G__20679 = 0;
seq__18949_20659 = G__20676;
chunk__18950_20660 = G__20677;
count__18951_20661 = G__20678;
i__18952_20662 = G__20679;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__11923__auto__);
};
var label = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__11922__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__20680){
var args__11922__auto__ = cljs.core.seq(arglist__20680);
return label__delegate(args__11922__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18957_20681 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18958_20682 = null;var count__18959_20683 = 0;var i__18960_20684 = 0;while(true){
if((i__18960_20684 < count__18959_20683))
{var arg__11924__auto___20685 = cljs.core._nth.call(null,chunk__18958_20682,i__18960_20684);a__11923__auto__.push(arg__11924__auto___20685);
{
var G__20686 = seq__18957_20681;
var G__20687 = chunk__18958_20682;
var G__20688 = count__18959_20683;
var G__20689 = (i__18960_20684 + 1);
seq__18957_20681 = G__20686;
chunk__18958_20682 = G__20687;
count__18959_20683 = G__20688;
i__18960_20684 = G__20689;
continue;
}
} else
{var temp__4092__auto___20690 = cljs.core.seq.call(null,seq__18957_20681);if(temp__4092__auto___20690)
{var seq__18957_20691__$1 = temp__4092__auto___20690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18957_20691__$1))
{var c__11077__auto___20692 = cljs.core.chunk_first.call(null,seq__18957_20691__$1);{
var G__20693 = cljs.core.chunk_rest.call(null,seq__18957_20691__$1);
var G__20694 = c__11077__auto___20692;
var G__20695 = cljs.core.count.call(null,c__11077__auto___20692);
var G__20696 = 0;
seq__18957_20681 = G__20693;
chunk__18958_20682 = G__20694;
count__18959_20683 = G__20695;
i__18960_20684 = G__20696;
continue;
}
} else
{var arg__11924__auto___20697 = cljs.core.first.call(null,seq__18957_20691__$1);a__11923__auto__.push(arg__11924__auto___20697);
{
var G__20698 = cljs.core.next.call(null,seq__18957_20691__$1);
var G__20699 = null;
var G__20700 = 0;
var G__20701 = 0;
seq__18957_20681 = G__20698;
chunk__18958_20682 = G__20699;
count__18959_20683 = G__20700;
i__18960_20684 = G__20701;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__11923__auto__);
};
var legend = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__11922__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__20702){
var args__11922__auto__ = cljs.core.seq(arglist__20702);
return legend__delegate(args__11922__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18965_20703 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18966_20704 = null;var count__18967_20705 = 0;var i__18968_20706 = 0;while(true){
if((i__18968_20706 < count__18967_20705))
{var arg__11924__auto___20707 = cljs.core._nth.call(null,chunk__18966_20704,i__18968_20706);a__11923__auto__.push(arg__11924__auto___20707);
{
var G__20708 = seq__18965_20703;
var G__20709 = chunk__18966_20704;
var G__20710 = count__18967_20705;
var G__20711 = (i__18968_20706 + 1);
seq__18965_20703 = G__20708;
chunk__18966_20704 = G__20709;
count__18967_20705 = G__20710;
i__18968_20706 = G__20711;
continue;
}
} else
{var temp__4092__auto___20712 = cljs.core.seq.call(null,seq__18965_20703);if(temp__4092__auto___20712)
{var seq__18965_20713__$1 = temp__4092__auto___20712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18965_20713__$1))
{var c__11077__auto___20714 = cljs.core.chunk_first.call(null,seq__18965_20713__$1);{
var G__20715 = cljs.core.chunk_rest.call(null,seq__18965_20713__$1);
var G__20716 = c__11077__auto___20714;
var G__20717 = cljs.core.count.call(null,c__11077__auto___20714);
var G__20718 = 0;
seq__18965_20703 = G__20715;
chunk__18966_20704 = G__20716;
count__18967_20705 = G__20717;
i__18968_20706 = G__20718;
continue;
}
} else
{var arg__11924__auto___20719 = cljs.core.first.call(null,seq__18965_20713__$1);a__11923__auto__.push(arg__11924__auto___20719);
{
var G__20720 = cljs.core.next.call(null,seq__18965_20713__$1);
var G__20721 = null;
var G__20722 = 0;
var G__20723 = 0;
seq__18965_20703 = G__20720;
chunk__18966_20704 = G__20721;
count__18967_20705 = G__20722;
i__18968_20706 = G__20723;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__11923__auto__);
};
var li = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__11922__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__20724){
var args__11922__auto__ = cljs.core.seq(arglist__20724);
return li__delegate(args__11922__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18973_20725 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18974_20726 = null;var count__18975_20727 = 0;var i__18976_20728 = 0;while(true){
if((i__18976_20728 < count__18975_20727))
{var arg__11924__auto___20729 = cljs.core._nth.call(null,chunk__18974_20726,i__18976_20728);a__11923__auto__.push(arg__11924__auto___20729);
{
var G__20730 = seq__18973_20725;
var G__20731 = chunk__18974_20726;
var G__20732 = count__18975_20727;
var G__20733 = (i__18976_20728 + 1);
seq__18973_20725 = G__20730;
chunk__18974_20726 = G__20731;
count__18975_20727 = G__20732;
i__18976_20728 = G__20733;
continue;
}
} else
{var temp__4092__auto___20734 = cljs.core.seq.call(null,seq__18973_20725);if(temp__4092__auto___20734)
{var seq__18973_20735__$1 = temp__4092__auto___20734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18973_20735__$1))
{var c__11077__auto___20736 = cljs.core.chunk_first.call(null,seq__18973_20735__$1);{
var G__20737 = cljs.core.chunk_rest.call(null,seq__18973_20735__$1);
var G__20738 = c__11077__auto___20736;
var G__20739 = cljs.core.count.call(null,c__11077__auto___20736);
var G__20740 = 0;
seq__18973_20725 = G__20737;
chunk__18974_20726 = G__20738;
count__18975_20727 = G__20739;
i__18976_20728 = G__20740;
continue;
}
} else
{var arg__11924__auto___20741 = cljs.core.first.call(null,seq__18973_20735__$1);a__11923__auto__.push(arg__11924__auto___20741);
{
var G__20742 = cljs.core.next.call(null,seq__18973_20735__$1);
var G__20743 = null;
var G__20744 = 0;
var G__20745 = 0;
seq__18973_20725 = G__20742;
chunk__18974_20726 = G__20743;
count__18975_20727 = G__20744;
i__18976_20728 = G__20745;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__11923__auto__);
};
var link = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__11922__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__20746){
var args__11922__auto__ = cljs.core.seq(arglist__20746);
return link__delegate(args__11922__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18981_20747 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18982_20748 = null;var count__18983_20749 = 0;var i__18984_20750 = 0;while(true){
if((i__18984_20750 < count__18983_20749))
{var arg__11924__auto___20751 = cljs.core._nth.call(null,chunk__18982_20748,i__18984_20750);a__11923__auto__.push(arg__11924__auto___20751);
{
var G__20752 = seq__18981_20747;
var G__20753 = chunk__18982_20748;
var G__20754 = count__18983_20749;
var G__20755 = (i__18984_20750 + 1);
seq__18981_20747 = G__20752;
chunk__18982_20748 = G__20753;
count__18983_20749 = G__20754;
i__18984_20750 = G__20755;
continue;
}
} else
{var temp__4092__auto___20756 = cljs.core.seq.call(null,seq__18981_20747);if(temp__4092__auto___20756)
{var seq__18981_20757__$1 = temp__4092__auto___20756;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18981_20757__$1))
{var c__11077__auto___20758 = cljs.core.chunk_first.call(null,seq__18981_20757__$1);{
var G__20759 = cljs.core.chunk_rest.call(null,seq__18981_20757__$1);
var G__20760 = c__11077__auto___20758;
var G__20761 = cljs.core.count.call(null,c__11077__auto___20758);
var G__20762 = 0;
seq__18981_20747 = G__20759;
chunk__18982_20748 = G__20760;
count__18983_20749 = G__20761;
i__18984_20750 = G__20762;
continue;
}
} else
{var arg__11924__auto___20763 = cljs.core.first.call(null,seq__18981_20757__$1);a__11923__auto__.push(arg__11924__auto___20763);
{
var G__20764 = cljs.core.next.call(null,seq__18981_20757__$1);
var G__20765 = null;
var G__20766 = 0;
var G__20767 = 0;
seq__18981_20747 = G__20764;
chunk__18982_20748 = G__20765;
count__18983_20749 = G__20766;
i__18984_20750 = G__20767;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__11923__auto__);
};
var main = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__11922__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__20768){
var args__11922__auto__ = cljs.core.seq(arglist__20768);
return main__delegate(args__11922__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18989_20769 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18990_20770 = null;var count__18991_20771 = 0;var i__18992_20772 = 0;while(true){
if((i__18992_20772 < count__18991_20771))
{var arg__11924__auto___20773 = cljs.core._nth.call(null,chunk__18990_20770,i__18992_20772);a__11923__auto__.push(arg__11924__auto___20773);
{
var G__20774 = seq__18989_20769;
var G__20775 = chunk__18990_20770;
var G__20776 = count__18991_20771;
var G__20777 = (i__18992_20772 + 1);
seq__18989_20769 = G__20774;
chunk__18990_20770 = G__20775;
count__18991_20771 = G__20776;
i__18992_20772 = G__20777;
continue;
}
} else
{var temp__4092__auto___20778 = cljs.core.seq.call(null,seq__18989_20769);if(temp__4092__auto___20778)
{var seq__18989_20779__$1 = temp__4092__auto___20778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18989_20779__$1))
{var c__11077__auto___20780 = cljs.core.chunk_first.call(null,seq__18989_20779__$1);{
var G__20781 = cljs.core.chunk_rest.call(null,seq__18989_20779__$1);
var G__20782 = c__11077__auto___20780;
var G__20783 = cljs.core.count.call(null,c__11077__auto___20780);
var G__20784 = 0;
seq__18989_20769 = G__20781;
chunk__18990_20770 = G__20782;
count__18991_20771 = G__20783;
i__18992_20772 = G__20784;
continue;
}
} else
{var arg__11924__auto___20785 = cljs.core.first.call(null,seq__18989_20779__$1);a__11923__auto__.push(arg__11924__auto___20785);
{
var G__20786 = cljs.core.next.call(null,seq__18989_20779__$1);
var G__20787 = null;
var G__20788 = 0;
var G__20789 = 0;
seq__18989_20769 = G__20786;
chunk__18990_20770 = G__20787;
count__18991_20771 = G__20788;
i__18992_20772 = G__20789;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__11923__auto__);
};
var map = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__11922__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__20790){
var args__11922__auto__ = cljs.core.seq(arglist__20790);
return map__delegate(args__11922__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18997_20791 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18998_20792 = null;var count__18999_20793 = 0;var i__19000_20794 = 0;while(true){
if((i__19000_20794 < count__18999_20793))
{var arg__11924__auto___20795 = cljs.core._nth.call(null,chunk__18998_20792,i__19000_20794);a__11923__auto__.push(arg__11924__auto___20795);
{
var G__20796 = seq__18997_20791;
var G__20797 = chunk__18998_20792;
var G__20798 = count__18999_20793;
var G__20799 = (i__19000_20794 + 1);
seq__18997_20791 = G__20796;
chunk__18998_20792 = G__20797;
count__18999_20793 = G__20798;
i__19000_20794 = G__20799;
continue;
}
} else
{var temp__4092__auto___20800 = cljs.core.seq.call(null,seq__18997_20791);if(temp__4092__auto___20800)
{var seq__18997_20801__$1 = temp__4092__auto___20800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18997_20801__$1))
{var c__11077__auto___20802 = cljs.core.chunk_first.call(null,seq__18997_20801__$1);{
var G__20803 = cljs.core.chunk_rest.call(null,seq__18997_20801__$1);
var G__20804 = c__11077__auto___20802;
var G__20805 = cljs.core.count.call(null,c__11077__auto___20802);
var G__20806 = 0;
seq__18997_20791 = G__20803;
chunk__18998_20792 = G__20804;
count__18999_20793 = G__20805;
i__19000_20794 = G__20806;
continue;
}
} else
{var arg__11924__auto___20807 = cljs.core.first.call(null,seq__18997_20801__$1);a__11923__auto__.push(arg__11924__auto___20807);
{
var G__20808 = cljs.core.next.call(null,seq__18997_20801__$1);
var G__20809 = null;
var G__20810 = 0;
var G__20811 = 0;
seq__18997_20791 = G__20808;
chunk__18998_20792 = G__20809;
count__18999_20793 = G__20810;
i__19000_20794 = G__20811;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__11923__auto__);
};
var mark = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__11922__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__20812){
var args__11922__auto__ = cljs.core.seq(arglist__20812);
return mark__delegate(args__11922__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19005_20813 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19006_20814 = null;var count__19007_20815 = 0;var i__19008_20816 = 0;while(true){
if((i__19008_20816 < count__19007_20815))
{var arg__11924__auto___20817 = cljs.core._nth.call(null,chunk__19006_20814,i__19008_20816);a__11923__auto__.push(arg__11924__auto___20817);
{
var G__20818 = seq__19005_20813;
var G__20819 = chunk__19006_20814;
var G__20820 = count__19007_20815;
var G__20821 = (i__19008_20816 + 1);
seq__19005_20813 = G__20818;
chunk__19006_20814 = G__20819;
count__19007_20815 = G__20820;
i__19008_20816 = G__20821;
continue;
}
} else
{var temp__4092__auto___20822 = cljs.core.seq.call(null,seq__19005_20813);if(temp__4092__auto___20822)
{var seq__19005_20823__$1 = temp__4092__auto___20822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19005_20823__$1))
{var c__11077__auto___20824 = cljs.core.chunk_first.call(null,seq__19005_20823__$1);{
var G__20825 = cljs.core.chunk_rest.call(null,seq__19005_20823__$1);
var G__20826 = c__11077__auto___20824;
var G__20827 = cljs.core.count.call(null,c__11077__auto___20824);
var G__20828 = 0;
seq__19005_20813 = G__20825;
chunk__19006_20814 = G__20826;
count__19007_20815 = G__20827;
i__19008_20816 = G__20828;
continue;
}
} else
{var arg__11924__auto___20829 = cljs.core.first.call(null,seq__19005_20823__$1);a__11923__auto__.push(arg__11924__auto___20829);
{
var G__20830 = cljs.core.next.call(null,seq__19005_20823__$1);
var G__20831 = null;
var G__20832 = 0;
var G__20833 = 0;
seq__19005_20813 = G__20830;
chunk__19006_20814 = G__20831;
count__19007_20815 = G__20832;
i__19008_20816 = G__20833;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__11923__auto__);
};
var menu = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__11922__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__20834){
var args__11922__auto__ = cljs.core.seq(arglist__20834);
return menu__delegate(args__11922__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19013_20835 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19014_20836 = null;var count__19015_20837 = 0;var i__19016_20838 = 0;while(true){
if((i__19016_20838 < count__19015_20837))
{var arg__11924__auto___20839 = cljs.core._nth.call(null,chunk__19014_20836,i__19016_20838);a__11923__auto__.push(arg__11924__auto___20839);
{
var G__20840 = seq__19013_20835;
var G__20841 = chunk__19014_20836;
var G__20842 = count__19015_20837;
var G__20843 = (i__19016_20838 + 1);
seq__19013_20835 = G__20840;
chunk__19014_20836 = G__20841;
count__19015_20837 = G__20842;
i__19016_20838 = G__20843;
continue;
}
} else
{var temp__4092__auto___20844 = cljs.core.seq.call(null,seq__19013_20835);if(temp__4092__auto___20844)
{var seq__19013_20845__$1 = temp__4092__auto___20844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19013_20845__$1))
{var c__11077__auto___20846 = cljs.core.chunk_first.call(null,seq__19013_20845__$1);{
var G__20847 = cljs.core.chunk_rest.call(null,seq__19013_20845__$1);
var G__20848 = c__11077__auto___20846;
var G__20849 = cljs.core.count.call(null,c__11077__auto___20846);
var G__20850 = 0;
seq__19013_20835 = G__20847;
chunk__19014_20836 = G__20848;
count__19015_20837 = G__20849;
i__19016_20838 = G__20850;
continue;
}
} else
{var arg__11924__auto___20851 = cljs.core.first.call(null,seq__19013_20845__$1);a__11923__auto__.push(arg__11924__auto___20851);
{
var G__20852 = cljs.core.next.call(null,seq__19013_20845__$1);
var G__20853 = null;
var G__20854 = 0;
var G__20855 = 0;
seq__19013_20835 = G__20852;
chunk__19014_20836 = G__20853;
count__19015_20837 = G__20854;
i__19016_20838 = G__20855;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__11923__auto__);
};
var menuitem = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__11922__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__20856){
var args__11922__auto__ = cljs.core.seq(arglist__20856);
return menuitem__delegate(args__11922__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19021_20857 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19022_20858 = null;var count__19023_20859 = 0;var i__19024_20860 = 0;while(true){
if((i__19024_20860 < count__19023_20859))
{var arg__11924__auto___20861 = cljs.core._nth.call(null,chunk__19022_20858,i__19024_20860);a__11923__auto__.push(arg__11924__auto___20861);
{
var G__20862 = seq__19021_20857;
var G__20863 = chunk__19022_20858;
var G__20864 = count__19023_20859;
var G__20865 = (i__19024_20860 + 1);
seq__19021_20857 = G__20862;
chunk__19022_20858 = G__20863;
count__19023_20859 = G__20864;
i__19024_20860 = G__20865;
continue;
}
} else
{var temp__4092__auto___20866 = cljs.core.seq.call(null,seq__19021_20857);if(temp__4092__auto___20866)
{var seq__19021_20867__$1 = temp__4092__auto___20866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19021_20867__$1))
{var c__11077__auto___20868 = cljs.core.chunk_first.call(null,seq__19021_20867__$1);{
var G__20869 = cljs.core.chunk_rest.call(null,seq__19021_20867__$1);
var G__20870 = c__11077__auto___20868;
var G__20871 = cljs.core.count.call(null,c__11077__auto___20868);
var G__20872 = 0;
seq__19021_20857 = G__20869;
chunk__19022_20858 = G__20870;
count__19023_20859 = G__20871;
i__19024_20860 = G__20872;
continue;
}
} else
{var arg__11924__auto___20873 = cljs.core.first.call(null,seq__19021_20867__$1);a__11923__auto__.push(arg__11924__auto___20873);
{
var G__20874 = cljs.core.next.call(null,seq__19021_20867__$1);
var G__20875 = null;
var G__20876 = 0;
var G__20877 = 0;
seq__19021_20857 = G__20874;
chunk__19022_20858 = G__20875;
count__19023_20859 = G__20876;
i__19024_20860 = G__20877;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__11923__auto__);
};
var meta = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__11922__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__20878){
var args__11922__auto__ = cljs.core.seq(arglist__20878);
return meta__delegate(args__11922__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19029_20879 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19030_20880 = null;var count__19031_20881 = 0;var i__19032_20882 = 0;while(true){
if((i__19032_20882 < count__19031_20881))
{var arg__11924__auto___20883 = cljs.core._nth.call(null,chunk__19030_20880,i__19032_20882);a__11923__auto__.push(arg__11924__auto___20883);
{
var G__20884 = seq__19029_20879;
var G__20885 = chunk__19030_20880;
var G__20886 = count__19031_20881;
var G__20887 = (i__19032_20882 + 1);
seq__19029_20879 = G__20884;
chunk__19030_20880 = G__20885;
count__19031_20881 = G__20886;
i__19032_20882 = G__20887;
continue;
}
} else
{var temp__4092__auto___20888 = cljs.core.seq.call(null,seq__19029_20879);if(temp__4092__auto___20888)
{var seq__19029_20889__$1 = temp__4092__auto___20888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19029_20889__$1))
{var c__11077__auto___20890 = cljs.core.chunk_first.call(null,seq__19029_20889__$1);{
var G__20891 = cljs.core.chunk_rest.call(null,seq__19029_20889__$1);
var G__20892 = c__11077__auto___20890;
var G__20893 = cljs.core.count.call(null,c__11077__auto___20890);
var G__20894 = 0;
seq__19029_20879 = G__20891;
chunk__19030_20880 = G__20892;
count__19031_20881 = G__20893;
i__19032_20882 = G__20894;
continue;
}
} else
{var arg__11924__auto___20895 = cljs.core.first.call(null,seq__19029_20889__$1);a__11923__auto__.push(arg__11924__auto___20895);
{
var G__20896 = cljs.core.next.call(null,seq__19029_20889__$1);
var G__20897 = null;
var G__20898 = 0;
var G__20899 = 0;
seq__19029_20879 = G__20896;
chunk__19030_20880 = G__20897;
count__19031_20881 = G__20898;
i__19032_20882 = G__20899;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__11923__auto__);
};
var meter = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__11922__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__20900){
var args__11922__auto__ = cljs.core.seq(arglist__20900);
return meter__delegate(args__11922__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19037_20901 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19038_20902 = null;var count__19039_20903 = 0;var i__19040_20904 = 0;while(true){
if((i__19040_20904 < count__19039_20903))
{var arg__11924__auto___20905 = cljs.core._nth.call(null,chunk__19038_20902,i__19040_20904);a__11923__auto__.push(arg__11924__auto___20905);
{
var G__20906 = seq__19037_20901;
var G__20907 = chunk__19038_20902;
var G__20908 = count__19039_20903;
var G__20909 = (i__19040_20904 + 1);
seq__19037_20901 = G__20906;
chunk__19038_20902 = G__20907;
count__19039_20903 = G__20908;
i__19040_20904 = G__20909;
continue;
}
} else
{var temp__4092__auto___20910 = cljs.core.seq.call(null,seq__19037_20901);if(temp__4092__auto___20910)
{var seq__19037_20911__$1 = temp__4092__auto___20910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19037_20911__$1))
{var c__11077__auto___20912 = cljs.core.chunk_first.call(null,seq__19037_20911__$1);{
var G__20913 = cljs.core.chunk_rest.call(null,seq__19037_20911__$1);
var G__20914 = c__11077__auto___20912;
var G__20915 = cljs.core.count.call(null,c__11077__auto___20912);
var G__20916 = 0;
seq__19037_20901 = G__20913;
chunk__19038_20902 = G__20914;
count__19039_20903 = G__20915;
i__19040_20904 = G__20916;
continue;
}
} else
{var arg__11924__auto___20917 = cljs.core.first.call(null,seq__19037_20911__$1);a__11923__auto__.push(arg__11924__auto___20917);
{
var G__20918 = cljs.core.next.call(null,seq__19037_20911__$1);
var G__20919 = null;
var G__20920 = 0;
var G__20921 = 0;
seq__19037_20901 = G__20918;
chunk__19038_20902 = G__20919;
count__19039_20903 = G__20920;
i__19040_20904 = G__20921;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__11923__auto__);
};
var nav = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__11922__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__20922){
var args__11922__auto__ = cljs.core.seq(arglist__20922);
return nav__delegate(args__11922__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19045_20923 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19046_20924 = null;var count__19047_20925 = 0;var i__19048_20926 = 0;while(true){
if((i__19048_20926 < count__19047_20925))
{var arg__11924__auto___20927 = cljs.core._nth.call(null,chunk__19046_20924,i__19048_20926);a__11923__auto__.push(arg__11924__auto___20927);
{
var G__20928 = seq__19045_20923;
var G__20929 = chunk__19046_20924;
var G__20930 = count__19047_20925;
var G__20931 = (i__19048_20926 + 1);
seq__19045_20923 = G__20928;
chunk__19046_20924 = G__20929;
count__19047_20925 = G__20930;
i__19048_20926 = G__20931;
continue;
}
} else
{var temp__4092__auto___20932 = cljs.core.seq.call(null,seq__19045_20923);if(temp__4092__auto___20932)
{var seq__19045_20933__$1 = temp__4092__auto___20932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19045_20933__$1))
{var c__11077__auto___20934 = cljs.core.chunk_first.call(null,seq__19045_20933__$1);{
var G__20935 = cljs.core.chunk_rest.call(null,seq__19045_20933__$1);
var G__20936 = c__11077__auto___20934;
var G__20937 = cljs.core.count.call(null,c__11077__auto___20934);
var G__20938 = 0;
seq__19045_20923 = G__20935;
chunk__19046_20924 = G__20936;
count__19047_20925 = G__20937;
i__19048_20926 = G__20938;
continue;
}
} else
{var arg__11924__auto___20939 = cljs.core.first.call(null,seq__19045_20933__$1);a__11923__auto__.push(arg__11924__auto___20939);
{
var G__20940 = cljs.core.next.call(null,seq__19045_20933__$1);
var G__20941 = null;
var G__20942 = 0;
var G__20943 = 0;
seq__19045_20923 = G__20940;
chunk__19046_20924 = G__20941;
count__19047_20925 = G__20942;
i__19048_20926 = G__20943;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__11923__auto__);
};
var noscript = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__11922__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__20944){
var args__11922__auto__ = cljs.core.seq(arglist__20944);
return noscript__delegate(args__11922__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19053_20945 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19054_20946 = null;var count__19055_20947 = 0;var i__19056_20948 = 0;while(true){
if((i__19056_20948 < count__19055_20947))
{var arg__11924__auto___20949 = cljs.core._nth.call(null,chunk__19054_20946,i__19056_20948);a__11923__auto__.push(arg__11924__auto___20949);
{
var G__20950 = seq__19053_20945;
var G__20951 = chunk__19054_20946;
var G__20952 = count__19055_20947;
var G__20953 = (i__19056_20948 + 1);
seq__19053_20945 = G__20950;
chunk__19054_20946 = G__20951;
count__19055_20947 = G__20952;
i__19056_20948 = G__20953;
continue;
}
} else
{var temp__4092__auto___20954 = cljs.core.seq.call(null,seq__19053_20945);if(temp__4092__auto___20954)
{var seq__19053_20955__$1 = temp__4092__auto___20954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19053_20955__$1))
{var c__11077__auto___20956 = cljs.core.chunk_first.call(null,seq__19053_20955__$1);{
var G__20957 = cljs.core.chunk_rest.call(null,seq__19053_20955__$1);
var G__20958 = c__11077__auto___20956;
var G__20959 = cljs.core.count.call(null,c__11077__auto___20956);
var G__20960 = 0;
seq__19053_20945 = G__20957;
chunk__19054_20946 = G__20958;
count__19055_20947 = G__20959;
i__19056_20948 = G__20960;
continue;
}
} else
{var arg__11924__auto___20961 = cljs.core.first.call(null,seq__19053_20955__$1);a__11923__auto__.push(arg__11924__auto___20961);
{
var G__20962 = cljs.core.next.call(null,seq__19053_20955__$1);
var G__20963 = null;
var G__20964 = 0;
var G__20965 = 0;
seq__19053_20945 = G__20962;
chunk__19054_20946 = G__20963;
count__19055_20947 = G__20964;
i__19056_20948 = G__20965;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__11923__auto__);
};
var object = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__11922__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__20966){
var args__11922__auto__ = cljs.core.seq(arglist__20966);
return object__delegate(args__11922__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19061_20967 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19062_20968 = null;var count__19063_20969 = 0;var i__19064_20970 = 0;while(true){
if((i__19064_20970 < count__19063_20969))
{var arg__11924__auto___20971 = cljs.core._nth.call(null,chunk__19062_20968,i__19064_20970);a__11923__auto__.push(arg__11924__auto___20971);
{
var G__20972 = seq__19061_20967;
var G__20973 = chunk__19062_20968;
var G__20974 = count__19063_20969;
var G__20975 = (i__19064_20970 + 1);
seq__19061_20967 = G__20972;
chunk__19062_20968 = G__20973;
count__19063_20969 = G__20974;
i__19064_20970 = G__20975;
continue;
}
} else
{var temp__4092__auto___20976 = cljs.core.seq.call(null,seq__19061_20967);if(temp__4092__auto___20976)
{var seq__19061_20977__$1 = temp__4092__auto___20976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19061_20977__$1))
{var c__11077__auto___20978 = cljs.core.chunk_first.call(null,seq__19061_20977__$1);{
var G__20979 = cljs.core.chunk_rest.call(null,seq__19061_20977__$1);
var G__20980 = c__11077__auto___20978;
var G__20981 = cljs.core.count.call(null,c__11077__auto___20978);
var G__20982 = 0;
seq__19061_20967 = G__20979;
chunk__19062_20968 = G__20980;
count__19063_20969 = G__20981;
i__19064_20970 = G__20982;
continue;
}
} else
{var arg__11924__auto___20983 = cljs.core.first.call(null,seq__19061_20977__$1);a__11923__auto__.push(arg__11924__auto___20983);
{
var G__20984 = cljs.core.next.call(null,seq__19061_20977__$1);
var G__20985 = null;
var G__20986 = 0;
var G__20987 = 0;
seq__19061_20967 = G__20984;
chunk__19062_20968 = G__20985;
count__19063_20969 = G__20986;
i__19064_20970 = G__20987;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__11923__auto__);
};
var ol = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__11922__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__20988){
var args__11922__auto__ = cljs.core.seq(arglist__20988);
return ol__delegate(args__11922__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19069_20989 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19070_20990 = null;var count__19071_20991 = 0;var i__19072_20992 = 0;while(true){
if((i__19072_20992 < count__19071_20991))
{var arg__11924__auto___20993 = cljs.core._nth.call(null,chunk__19070_20990,i__19072_20992);a__11923__auto__.push(arg__11924__auto___20993);
{
var G__20994 = seq__19069_20989;
var G__20995 = chunk__19070_20990;
var G__20996 = count__19071_20991;
var G__20997 = (i__19072_20992 + 1);
seq__19069_20989 = G__20994;
chunk__19070_20990 = G__20995;
count__19071_20991 = G__20996;
i__19072_20992 = G__20997;
continue;
}
} else
{var temp__4092__auto___20998 = cljs.core.seq.call(null,seq__19069_20989);if(temp__4092__auto___20998)
{var seq__19069_20999__$1 = temp__4092__auto___20998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19069_20999__$1))
{var c__11077__auto___21000 = cljs.core.chunk_first.call(null,seq__19069_20999__$1);{
var G__21001 = cljs.core.chunk_rest.call(null,seq__19069_20999__$1);
var G__21002 = c__11077__auto___21000;
var G__21003 = cljs.core.count.call(null,c__11077__auto___21000);
var G__21004 = 0;
seq__19069_20989 = G__21001;
chunk__19070_20990 = G__21002;
count__19071_20991 = G__21003;
i__19072_20992 = G__21004;
continue;
}
} else
{var arg__11924__auto___21005 = cljs.core.first.call(null,seq__19069_20999__$1);a__11923__auto__.push(arg__11924__auto___21005);
{
var G__21006 = cljs.core.next.call(null,seq__19069_20999__$1);
var G__21007 = null;
var G__21008 = 0;
var G__21009 = 0;
seq__19069_20989 = G__21006;
chunk__19070_20990 = G__21007;
count__19071_20991 = G__21008;
i__19072_20992 = G__21009;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__11923__auto__);
};
var optgroup = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__11922__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__21010){
var args__11922__auto__ = cljs.core.seq(arglist__21010);
return optgroup__delegate(args__11922__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19077_21011 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19078_21012 = null;var count__19079_21013 = 0;var i__19080_21014 = 0;while(true){
if((i__19080_21014 < count__19079_21013))
{var arg__11924__auto___21015 = cljs.core._nth.call(null,chunk__19078_21012,i__19080_21014);a__11923__auto__.push(arg__11924__auto___21015);
{
var G__21016 = seq__19077_21011;
var G__21017 = chunk__19078_21012;
var G__21018 = count__19079_21013;
var G__21019 = (i__19080_21014 + 1);
seq__19077_21011 = G__21016;
chunk__19078_21012 = G__21017;
count__19079_21013 = G__21018;
i__19080_21014 = G__21019;
continue;
}
} else
{var temp__4092__auto___21020 = cljs.core.seq.call(null,seq__19077_21011);if(temp__4092__auto___21020)
{var seq__19077_21021__$1 = temp__4092__auto___21020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19077_21021__$1))
{var c__11077__auto___21022 = cljs.core.chunk_first.call(null,seq__19077_21021__$1);{
var G__21023 = cljs.core.chunk_rest.call(null,seq__19077_21021__$1);
var G__21024 = c__11077__auto___21022;
var G__21025 = cljs.core.count.call(null,c__11077__auto___21022);
var G__21026 = 0;
seq__19077_21011 = G__21023;
chunk__19078_21012 = G__21024;
count__19079_21013 = G__21025;
i__19080_21014 = G__21026;
continue;
}
} else
{var arg__11924__auto___21027 = cljs.core.first.call(null,seq__19077_21021__$1);a__11923__auto__.push(arg__11924__auto___21027);
{
var G__21028 = cljs.core.next.call(null,seq__19077_21021__$1);
var G__21029 = null;
var G__21030 = 0;
var G__21031 = 0;
seq__19077_21011 = G__21028;
chunk__19078_21012 = G__21029;
count__19079_21013 = G__21030;
i__19080_21014 = G__21031;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__11923__auto__);
};
var option = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__11922__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__21032){
var args__11922__auto__ = cljs.core.seq(arglist__21032);
return option__delegate(args__11922__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19085_21033 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19086_21034 = null;var count__19087_21035 = 0;var i__19088_21036 = 0;while(true){
if((i__19088_21036 < count__19087_21035))
{var arg__11924__auto___21037 = cljs.core._nth.call(null,chunk__19086_21034,i__19088_21036);a__11923__auto__.push(arg__11924__auto___21037);
{
var G__21038 = seq__19085_21033;
var G__21039 = chunk__19086_21034;
var G__21040 = count__19087_21035;
var G__21041 = (i__19088_21036 + 1);
seq__19085_21033 = G__21038;
chunk__19086_21034 = G__21039;
count__19087_21035 = G__21040;
i__19088_21036 = G__21041;
continue;
}
} else
{var temp__4092__auto___21042 = cljs.core.seq.call(null,seq__19085_21033);if(temp__4092__auto___21042)
{var seq__19085_21043__$1 = temp__4092__auto___21042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19085_21043__$1))
{var c__11077__auto___21044 = cljs.core.chunk_first.call(null,seq__19085_21043__$1);{
var G__21045 = cljs.core.chunk_rest.call(null,seq__19085_21043__$1);
var G__21046 = c__11077__auto___21044;
var G__21047 = cljs.core.count.call(null,c__11077__auto___21044);
var G__21048 = 0;
seq__19085_21033 = G__21045;
chunk__19086_21034 = G__21046;
count__19087_21035 = G__21047;
i__19088_21036 = G__21048;
continue;
}
} else
{var arg__11924__auto___21049 = cljs.core.first.call(null,seq__19085_21043__$1);a__11923__auto__.push(arg__11924__auto___21049);
{
var G__21050 = cljs.core.next.call(null,seq__19085_21043__$1);
var G__21051 = null;
var G__21052 = 0;
var G__21053 = 0;
seq__19085_21033 = G__21050;
chunk__19086_21034 = G__21051;
count__19087_21035 = G__21052;
i__19088_21036 = G__21053;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__11923__auto__);
};
var output = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__11922__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__21054){
var args__11922__auto__ = cljs.core.seq(arglist__21054);
return output__delegate(args__11922__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19093_21055 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19094_21056 = null;var count__19095_21057 = 0;var i__19096_21058 = 0;while(true){
if((i__19096_21058 < count__19095_21057))
{var arg__11924__auto___21059 = cljs.core._nth.call(null,chunk__19094_21056,i__19096_21058);a__11923__auto__.push(arg__11924__auto___21059);
{
var G__21060 = seq__19093_21055;
var G__21061 = chunk__19094_21056;
var G__21062 = count__19095_21057;
var G__21063 = (i__19096_21058 + 1);
seq__19093_21055 = G__21060;
chunk__19094_21056 = G__21061;
count__19095_21057 = G__21062;
i__19096_21058 = G__21063;
continue;
}
} else
{var temp__4092__auto___21064 = cljs.core.seq.call(null,seq__19093_21055);if(temp__4092__auto___21064)
{var seq__19093_21065__$1 = temp__4092__auto___21064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19093_21065__$1))
{var c__11077__auto___21066 = cljs.core.chunk_first.call(null,seq__19093_21065__$1);{
var G__21067 = cljs.core.chunk_rest.call(null,seq__19093_21065__$1);
var G__21068 = c__11077__auto___21066;
var G__21069 = cljs.core.count.call(null,c__11077__auto___21066);
var G__21070 = 0;
seq__19093_21055 = G__21067;
chunk__19094_21056 = G__21068;
count__19095_21057 = G__21069;
i__19096_21058 = G__21070;
continue;
}
} else
{var arg__11924__auto___21071 = cljs.core.first.call(null,seq__19093_21065__$1);a__11923__auto__.push(arg__11924__auto___21071);
{
var G__21072 = cljs.core.next.call(null,seq__19093_21065__$1);
var G__21073 = null;
var G__21074 = 0;
var G__21075 = 0;
seq__19093_21055 = G__21072;
chunk__19094_21056 = G__21073;
count__19095_21057 = G__21074;
i__19096_21058 = G__21075;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__11923__auto__);
};
var p = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__11922__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__21076){
var args__11922__auto__ = cljs.core.seq(arglist__21076);
return p__delegate(args__11922__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19101_21077 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19102_21078 = null;var count__19103_21079 = 0;var i__19104_21080 = 0;while(true){
if((i__19104_21080 < count__19103_21079))
{var arg__11924__auto___21081 = cljs.core._nth.call(null,chunk__19102_21078,i__19104_21080);a__11923__auto__.push(arg__11924__auto___21081);
{
var G__21082 = seq__19101_21077;
var G__21083 = chunk__19102_21078;
var G__21084 = count__19103_21079;
var G__21085 = (i__19104_21080 + 1);
seq__19101_21077 = G__21082;
chunk__19102_21078 = G__21083;
count__19103_21079 = G__21084;
i__19104_21080 = G__21085;
continue;
}
} else
{var temp__4092__auto___21086 = cljs.core.seq.call(null,seq__19101_21077);if(temp__4092__auto___21086)
{var seq__19101_21087__$1 = temp__4092__auto___21086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19101_21087__$1))
{var c__11077__auto___21088 = cljs.core.chunk_first.call(null,seq__19101_21087__$1);{
var G__21089 = cljs.core.chunk_rest.call(null,seq__19101_21087__$1);
var G__21090 = c__11077__auto___21088;
var G__21091 = cljs.core.count.call(null,c__11077__auto___21088);
var G__21092 = 0;
seq__19101_21077 = G__21089;
chunk__19102_21078 = G__21090;
count__19103_21079 = G__21091;
i__19104_21080 = G__21092;
continue;
}
} else
{var arg__11924__auto___21093 = cljs.core.first.call(null,seq__19101_21087__$1);a__11923__auto__.push(arg__11924__auto___21093);
{
var G__21094 = cljs.core.next.call(null,seq__19101_21087__$1);
var G__21095 = null;
var G__21096 = 0;
var G__21097 = 0;
seq__19101_21077 = G__21094;
chunk__19102_21078 = G__21095;
count__19103_21079 = G__21096;
i__19104_21080 = G__21097;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__11923__auto__);
};
var param = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__11922__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__21098){
var args__11922__auto__ = cljs.core.seq(arglist__21098);
return param__delegate(args__11922__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19109_21099 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19110_21100 = null;var count__19111_21101 = 0;var i__19112_21102 = 0;while(true){
if((i__19112_21102 < count__19111_21101))
{var arg__11924__auto___21103 = cljs.core._nth.call(null,chunk__19110_21100,i__19112_21102);a__11923__auto__.push(arg__11924__auto___21103);
{
var G__21104 = seq__19109_21099;
var G__21105 = chunk__19110_21100;
var G__21106 = count__19111_21101;
var G__21107 = (i__19112_21102 + 1);
seq__19109_21099 = G__21104;
chunk__19110_21100 = G__21105;
count__19111_21101 = G__21106;
i__19112_21102 = G__21107;
continue;
}
} else
{var temp__4092__auto___21108 = cljs.core.seq.call(null,seq__19109_21099);if(temp__4092__auto___21108)
{var seq__19109_21109__$1 = temp__4092__auto___21108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19109_21109__$1))
{var c__11077__auto___21110 = cljs.core.chunk_first.call(null,seq__19109_21109__$1);{
var G__21111 = cljs.core.chunk_rest.call(null,seq__19109_21109__$1);
var G__21112 = c__11077__auto___21110;
var G__21113 = cljs.core.count.call(null,c__11077__auto___21110);
var G__21114 = 0;
seq__19109_21099 = G__21111;
chunk__19110_21100 = G__21112;
count__19111_21101 = G__21113;
i__19112_21102 = G__21114;
continue;
}
} else
{var arg__11924__auto___21115 = cljs.core.first.call(null,seq__19109_21109__$1);a__11923__auto__.push(arg__11924__auto___21115);
{
var G__21116 = cljs.core.next.call(null,seq__19109_21109__$1);
var G__21117 = null;
var G__21118 = 0;
var G__21119 = 0;
seq__19109_21099 = G__21116;
chunk__19110_21100 = G__21117;
count__19111_21101 = G__21118;
i__19112_21102 = G__21119;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__11923__auto__);
};
var pre = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__11922__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__21120){
var args__11922__auto__ = cljs.core.seq(arglist__21120);
return pre__delegate(args__11922__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19117_21121 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19118_21122 = null;var count__19119_21123 = 0;var i__19120_21124 = 0;while(true){
if((i__19120_21124 < count__19119_21123))
{var arg__11924__auto___21125 = cljs.core._nth.call(null,chunk__19118_21122,i__19120_21124);a__11923__auto__.push(arg__11924__auto___21125);
{
var G__21126 = seq__19117_21121;
var G__21127 = chunk__19118_21122;
var G__21128 = count__19119_21123;
var G__21129 = (i__19120_21124 + 1);
seq__19117_21121 = G__21126;
chunk__19118_21122 = G__21127;
count__19119_21123 = G__21128;
i__19120_21124 = G__21129;
continue;
}
} else
{var temp__4092__auto___21130 = cljs.core.seq.call(null,seq__19117_21121);if(temp__4092__auto___21130)
{var seq__19117_21131__$1 = temp__4092__auto___21130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19117_21131__$1))
{var c__11077__auto___21132 = cljs.core.chunk_first.call(null,seq__19117_21131__$1);{
var G__21133 = cljs.core.chunk_rest.call(null,seq__19117_21131__$1);
var G__21134 = c__11077__auto___21132;
var G__21135 = cljs.core.count.call(null,c__11077__auto___21132);
var G__21136 = 0;
seq__19117_21121 = G__21133;
chunk__19118_21122 = G__21134;
count__19119_21123 = G__21135;
i__19120_21124 = G__21136;
continue;
}
} else
{var arg__11924__auto___21137 = cljs.core.first.call(null,seq__19117_21131__$1);a__11923__auto__.push(arg__11924__auto___21137);
{
var G__21138 = cljs.core.next.call(null,seq__19117_21131__$1);
var G__21139 = null;
var G__21140 = 0;
var G__21141 = 0;
seq__19117_21121 = G__21138;
chunk__19118_21122 = G__21139;
count__19119_21123 = G__21140;
i__19120_21124 = G__21141;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__11923__auto__);
};
var progress = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__11922__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__21142){
var args__11922__auto__ = cljs.core.seq(arglist__21142);
return progress__delegate(args__11922__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19125_21143 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19126_21144 = null;var count__19127_21145 = 0;var i__19128_21146 = 0;while(true){
if((i__19128_21146 < count__19127_21145))
{var arg__11924__auto___21147 = cljs.core._nth.call(null,chunk__19126_21144,i__19128_21146);a__11923__auto__.push(arg__11924__auto___21147);
{
var G__21148 = seq__19125_21143;
var G__21149 = chunk__19126_21144;
var G__21150 = count__19127_21145;
var G__21151 = (i__19128_21146 + 1);
seq__19125_21143 = G__21148;
chunk__19126_21144 = G__21149;
count__19127_21145 = G__21150;
i__19128_21146 = G__21151;
continue;
}
} else
{var temp__4092__auto___21152 = cljs.core.seq.call(null,seq__19125_21143);if(temp__4092__auto___21152)
{var seq__19125_21153__$1 = temp__4092__auto___21152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19125_21153__$1))
{var c__11077__auto___21154 = cljs.core.chunk_first.call(null,seq__19125_21153__$1);{
var G__21155 = cljs.core.chunk_rest.call(null,seq__19125_21153__$1);
var G__21156 = c__11077__auto___21154;
var G__21157 = cljs.core.count.call(null,c__11077__auto___21154);
var G__21158 = 0;
seq__19125_21143 = G__21155;
chunk__19126_21144 = G__21156;
count__19127_21145 = G__21157;
i__19128_21146 = G__21158;
continue;
}
} else
{var arg__11924__auto___21159 = cljs.core.first.call(null,seq__19125_21153__$1);a__11923__auto__.push(arg__11924__auto___21159);
{
var G__21160 = cljs.core.next.call(null,seq__19125_21153__$1);
var G__21161 = null;
var G__21162 = 0;
var G__21163 = 0;
seq__19125_21143 = G__21160;
chunk__19126_21144 = G__21161;
count__19127_21145 = G__21162;
i__19128_21146 = G__21163;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__11923__auto__);
};
var q = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__11922__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__21164){
var args__11922__auto__ = cljs.core.seq(arglist__21164);
return q__delegate(args__11922__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19133_21165 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19134_21166 = null;var count__19135_21167 = 0;var i__19136_21168 = 0;while(true){
if((i__19136_21168 < count__19135_21167))
{var arg__11924__auto___21169 = cljs.core._nth.call(null,chunk__19134_21166,i__19136_21168);a__11923__auto__.push(arg__11924__auto___21169);
{
var G__21170 = seq__19133_21165;
var G__21171 = chunk__19134_21166;
var G__21172 = count__19135_21167;
var G__21173 = (i__19136_21168 + 1);
seq__19133_21165 = G__21170;
chunk__19134_21166 = G__21171;
count__19135_21167 = G__21172;
i__19136_21168 = G__21173;
continue;
}
} else
{var temp__4092__auto___21174 = cljs.core.seq.call(null,seq__19133_21165);if(temp__4092__auto___21174)
{var seq__19133_21175__$1 = temp__4092__auto___21174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19133_21175__$1))
{var c__11077__auto___21176 = cljs.core.chunk_first.call(null,seq__19133_21175__$1);{
var G__21177 = cljs.core.chunk_rest.call(null,seq__19133_21175__$1);
var G__21178 = c__11077__auto___21176;
var G__21179 = cljs.core.count.call(null,c__11077__auto___21176);
var G__21180 = 0;
seq__19133_21165 = G__21177;
chunk__19134_21166 = G__21178;
count__19135_21167 = G__21179;
i__19136_21168 = G__21180;
continue;
}
} else
{var arg__11924__auto___21181 = cljs.core.first.call(null,seq__19133_21175__$1);a__11923__auto__.push(arg__11924__auto___21181);
{
var G__21182 = cljs.core.next.call(null,seq__19133_21175__$1);
var G__21183 = null;
var G__21184 = 0;
var G__21185 = 0;
seq__19133_21165 = G__21182;
chunk__19134_21166 = G__21183;
count__19135_21167 = G__21184;
i__19136_21168 = G__21185;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__11923__auto__);
};
var rp = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__11922__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__21186){
var args__11922__auto__ = cljs.core.seq(arglist__21186);
return rp__delegate(args__11922__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19141_21187 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19142_21188 = null;var count__19143_21189 = 0;var i__19144_21190 = 0;while(true){
if((i__19144_21190 < count__19143_21189))
{var arg__11924__auto___21191 = cljs.core._nth.call(null,chunk__19142_21188,i__19144_21190);a__11923__auto__.push(arg__11924__auto___21191);
{
var G__21192 = seq__19141_21187;
var G__21193 = chunk__19142_21188;
var G__21194 = count__19143_21189;
var G__21195 = (i__19144_21190 + 1);
seq__19141_21187 = G__21192;
chunk__19142_21188 = G__21193;
count__19143_21189 = G__21194;
i__19144_21190 = G__21195;
continue;
}
} else
{var temp__4092__auto___21196 = cljs.core.seq.call(null,seq__19141_21187);if(temp__4092__auto___21196)
{var seq__19141_21197__$1 = temp__4092__auto___21196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19141_21197__$1))
{var c__11077__auto___21198 = cljs.core.chunk_first.call(null,seq__19141_21197__$1);{
var G__21199 = cljs.core.chunk_rest.call(null,seq__19141_21197__$1);
var G__21200 = c__11077__auto___21198;
var G__21201 = cljs.core.count.call(null,c__11077__auto___21198);
var G__21202 = 0;
seq__19141_21187 = G__21199;
chunk__19142_21188 = G__21200;
count__19143_21189 = G__21201;
i__19144_21190 = G__21202;
continue;
}
} else
{var arg__11924__auto___21203 = cljs.core.first.call(null,seq__19141_21197__$1);a__11923__auto__.push(arg__11924__auto___21203);
{
var G__21204 = cljs.core.next.call(null,seq__19141_21197__$1);
var G__21205 = null;
var G__21206 = 0;
var G__21207 = 0;
seq__19141_21187 = G__21204;
chunk__19142_21188 = G__21205;
count__19143_21189 = G__21206;
i__19144_21190 = G__21207;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__11923__auto__);
};
var rt = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__11922__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__21208){
var args__11922__auto__ = cljs.core.seq(arglist__21208);
return rt__delegate(args__11922__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19149_21209 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19150_21210 = null;var count__19151_21211 = 0;var i__19152_21212 = 0;while(true){
if((i__19152_21212 < count__19151_21211))
{var arg__11924__auto___21213 = cljs.core._nth.call(null,chunk__19150_21210,i__19152_21212);a__11923__auto__.push(arg__11924__auto___21213);
{
var G__21214 = seq__19149_21209;
var G__21215 = chunk__19150_21210;
var G__21216 = count__19151_21211;
var G__21217 = (i__19152_21212 + 1);
seq__19149_21209 = G__21214;
chunk__19150_21210 = G__21215;
count__19151_21211 = G__21216;
i__19152_21212 = G__21217;
continue;
}
} else
{var temp__4092__auto___21218 = cljs.core.seq.call(null,seq__19149_21209);if(temp__4092__auto___21218)
{var seq__19149_21219__$1 = temp__4092__auto___21218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19149_21219__$1))
{var c__11077__auto___21220 = cljs.core.chunk_first.call(null,seq__19149_21219__$1);{
var G__21221 = cljs.core.chunk_rest.call(null,seq__19149_21219__$1);
var G__21222 = c__11077__auto___21220;
var G__21223 = cljs.core.count.call(null,c__11077__auto___21220);
var G__21224 = 0;
seq__19149_21209 = G__21221;
chunk__19150_21210 = G__21222;
count__19151_21211 = G__21223;
i__19152_21212 = G__21224;
continue;
}
} else
{var arg__11924__auto___21225 = cljs.core.first.call(null,seq__19149_21219__$1);a__11923__auto__.push(arg__11924__auto___21225);
{
var G__21226 = cljs.core.next.call(null,seq__19149_21219__$1);
var G__21227 = null;
var G__21228 = 0;
var G__21229 = 0;
seq__19149_21209 = G__21226;
chunk__19150_21210 = G__21227;
count__19151_21211 = G__21228;
i__19152_21212 = G__21229;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__11923__auto__);
};
var ruby = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__11922__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__21230){
var args__11922__auto__ = cljs.core.seq(arglist__21230);
return ruby__delegate(args__11922__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19157_21231 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19158_21232 = null;var count__19159_21233 = 0;var i__19160_21234 = 0;while(true){
if((i__19160_21234 < count__19159_21233))
{var arg__11924__auto___21235 = cljs.core._nth.call(null,chunk__19158_21232,i__19160_21234);a__11923__auto__.push(arg__11924__auto___21235);
{
var G__21236 = seq__19157_21231;
var G__21237 = chunk__19158_21232;
var G__21238 = count__19159_21233;
var G__21239 = (i__19160_21234 + 1);
seq__19157_21231 = G__21236;
chunk__19158_21232 = G__21237;
count__19159_21233 = G__21238;
i__19160_21234 = G__21239;
continue;
}
} else
{var temp__4092__auto___21240 = cljs.core.seq.call(null,seq__19157_21231);if(temp__4092__auto___21240)
{var seq__19157_21241__$1 = temp__4092__auto___21240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19157_21241__$1))
{var c__11077__auto___21242 = cljs.core.chunk_first.call(null,seq__19157_21241__$1);{
var G__21243 = cljs.core.chunk_rest.call(null,seq__19157_21241__$1);
var G__21244 = c__11077__auto___21242;
var G__21245 = cljs.core.count.call(null,c__11077__auto___21242);
var G__21246 = 0;
seq__19157_21231 = G__21243;
chunk__19158_21232 = G__21244;
count__19159_21233 = G__21245;
i__19160_21234 = G__21246;
continue;
}
} else
{var arg__11924__auto___21247 = cljs.core.first.call(null,seq__19157_21241__$1);a__11923__auto__.push(arg__11924__auto___21247);
{
var G__21248 = cljs.core.next.call(null,seq__19157_21241__$1);
var G__21249 = null;
var G__21250 = 0;
var G__21251 = 0;
seq__19157_21231 = G__21248;
chunk__19158_21232 = G__21249;
count__19159_21233 = G__21250;
i__19160_21234 = G__21251;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__11923__auto__);
};
var s = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__11922__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__21252){
var args__11922__auto__ = cljs.core.seq(arglist__21252);
return s__delegate(args__11922__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19165_21253 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19166_21254 = null;var count__19167_21255 = 0;var i__19168_21256 = 0;while(true){
if((i__19168_21256 < count__19167_21255))
{var arg__11924__auto___21257 = cljs.core._nth.call(null,chunk__19166_21254,i__19168_21256);a__11923__auto__.push(arg__11924__auto___21257);
{
var G__21258 = seq__19165_21253;
var G__21259 = chunk__19166_21254;
var G__21260 = count__19167_21255;
var G__21261 = (i__19168_21256 + 1);
seq__19165_21253 = G__21258;
chunk__19166_21254 = G__21259;
count__19167_21255 = G__21260;
i__19168_21256 = G__21261;
continue;
}
} else
{var temp__4092__auto___21262 = cljs.core.seq.call(null,seq__19165_21253);if(temp__4092__auto___21262)
{var seq__19165_21263__$1 = temp__4092__auto___21262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19165_21263__$1))
{var c__11077__auto___21264 = cljs.core.chunk_first.call(null,seq__19165_21263__$1);{
var G__21265 = cljs.core.chunk_rest.call(null,seq__19165_21263__$1);
var G__21266 = c__11077__auto___21264;
var G__21267 = cljs.core.count.call(null,c__11077__auto___21264);
var G__21268 = 0;
seq__19165_21253 = G__21265;
chunk__19166_21254 = G__21266;
count__19167_21255 = G__21267;
i__19168_21256 = G__21268;
continue;
}
} else
{var arg__11924__auto___21269 = cljs.core.first.call(null,seq__19165_21263__$1);a__11923__auto__.push(arg__11924__auto___21269);
{
var G__21270 = cljs.core.next.call(null,seq__19165_21263__$1);
var G__21271 = null;
var G__21272 = 0;
var G__21273 = 0;
seq__19165_21253 = G__21270;
chunk__19166_21254 = G__21271;
count__19167_21255 = G__21272;
i__19168_21256 = G__21273;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__11923__auto__);
};
var samp = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__11922__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__21274){
var args__11922__auto__ = cljs.core.seq(arglist__21274);
return samp__delegate(args__11922__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19173_21275 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19174_21276 = null;var count__19175_21277 = 0;var i__19176_21278 = 0;while(true){
if((i__19176_21278 < count__19175_21277))
{var arg__11924__auto___21279 = cljs.core._nth.call(null,chunk__19174_21276,i__19176_21278);a__11923__auto__.push(arg__11924__auto___21279);
{
var G__21280 = seq__19173_21275;
var G__21281 = chunk__19174_21276;
var G__21282 = count__19175_21277;
var G__21283 = (i__19176_21278 + 1);
seq__19173_21275 = G__21280;
chunk__19174_21276 = G__21281;
count__19175_21277 = G__21282;
i__19176_21278 = G__21283;
continue;
}
} else
{var temp__4092__auto___21284 = cljs.core.seq.call(null,seq__19173_21275);if(temp__4092__auto___21284)
{var seq__19173_21285__$1 = temp__4092__auto___21284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19173_21285__$1))
{var c__11077__auto___21286 = cljs.core.chunk_first.call(null,seq__19173_21285__$1);{
var G__21287 = cljs.core.chunk_rest.call(null,seq__19173_21285__$1);
var G__21288 = c__11077__auto___21286;
var G__21289 = cljs.core.count.call(null,c__11077__auto___21286);
var G__21290 = 0;
seq__19173_21275 = G__21287;
chunk__19174_21276 = G__21288;
count__19175_21277 = G__21289;
i__19176_21278 = G__21290;
continue;
}
} else
{var arg__11924__auto___21291 = cljs.core.first.call(null,seq__19173_21285__$1);a__11923__auto__.push(arg__11924__auto___21291);
{
var G__21292 = cljs.core.next.call(null,seq__19173_21285__$1);
var G__21293 = null;
var G__21294 = 0;
var G__21295 = 0;
seq__19173_21275 = G__21292;
chunk__19174_21276 = G__21293;
count__19175_21277 = G__21294;
i__19176_21278 = G__21295;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__11923__auto__);
};
var script = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__11922__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__21296){
var args__11922__auto__ = cljs.core.seq(arglist__21296);
return script__delegate(args__11922__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19181_21297 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19182_21298 = null;var count__19183_21299 = 0;var i__19184_21300 = 0;while(true){
if((i__19184_21300 < count__19183_21299))
{var arg__11924__auto___21301 = cljs.core._nth.call(null,chunk__19182_21298,i__19184_21300);a__11923__auto__.push(arg__11924__auto___21301);
{
var G__21302 = seq__19181_21297;
var G__21303 = chunk__19182_21298;
var G__21304 = count__19183_21299;
var G__21305 = (i__19184_21300 + 1);
seq__19181_21297 = G__21302;
chunk__19182_21298 = G__21303;
count__19183_21299 = G__21304;
i__19184_21300 = G__21305;
continue;
}
} else
{var temp__4092__auto___21306 = cljs.core.seq.call(null,seq__19181_21297);if(temp__4092__auto___21306)
{var seq__19181_21307__$1 = temp__4092__auto___21306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19181_21307__$1))
{var c__11077__auto___21308 = cljs.core.chunk_first.call(null,seq__19181_21307__$1);{
var G__21309 = cljs.core.chunk_rest.call(null,seq__19181_21307__$1);
var G__21310 = c__11077__auto___21308;
var G__21311 = cljs.core.count.call(null,c__11077__auto___21308);
var G__21312 = 0;
seq__19181_21297 = G__21309;
chunk__19182_21298 = G__21310;
count__19183_21299 = G__21311;
i__19184_21300 = G__21312;
continue;
}
} else
{var arg__11924__auto___21313 = cljs.core.first.call(null,seq__19181_21307__$1);a__11923__auto__.push(arg__11924__auto___21313);
{
var G__21314 = cljs.core.next.call(null,seq__19181_21307__$1);
var G__21315 = null;
var G__21316 = 0;
var G__21317 = 0;
seq__19181_21297 = G__21314;
chunk__19182_21298 = G__21315;
count__19183_21299 = G__21316;
i__19184_21300 = G__21317;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__11923__auto__);
};
var section = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__11922__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__21318){
var args__11922__auto__ = cljs.core.seq(arglist__21318);
return section__delegate(args__11922__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19189_21319 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19190_21320 = null;var count__19191_21321 = 0;var i__19192_21322 = 0;while(true){
if((i__19192_21322 < count__19191_21321))
{var arg__11924__auto___21323 = cljs.core._nth.call(null,chunk__19190_21320,i__19192_21322);a__11923__auto__.push(arg__11924__auto___21323);
{
var G__21324 = seq__19189_21319;
var G__21325 = chunk__19190_21320;
var G__21326 = count__19191_21321;
var G__21327 = (i__19192_21322 + 1);
seq__19189_21319 = G__21324;
chunk__19190_21320 = G__21325;
count__19191_21321 = G__21326;
i__19192_21322 = G__21327;
continue;
}
} else
{var temp__4092__auto___21328 = cljs.core.seq.call(null,seq__19189_21319);if(temp__4092__auto___21328)
{var seq__19189_21329__$1 = temp__4092__auto___21328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19189_21329__$1))
{var c__11077__auto___21330 = cljs.core.chunk_first.call(null,seq__19189_21329__$1);{
var G__21331 = cljs.core.chunk_rest.call(null,seq__19189_21329__$1);
var G__21332 = c__11077__auto___21330;
var G__21333 = cljs.core.count.call(null,c__11077__auto___21330);
var G__21334 = 0;
seq__19189_21319 = G__21331;
chunk__19190_21320 = G__21332;
count__19191_21321 = G__21333;
i__19192_21322 = G__21334;
continue;
}
} else
{var arg__11924__auto___21335 = cljs.core.first.call(null,seq__19189_21329__$1);a__11923__auto__.push(arg__11924__auto___21335);
{
var G__21336 = cljs.core.next.call(null,seq__19189_21329__$1);
var G__21337 = null;
var G__21338 = 0;
var G__21339 = 0;
seq__19189_21319 = G__21336;
chunk__19190_21320 = G__21337;
count__19191_21321 = G__21338;
i__19192_21322 = G__21339;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__11923__auto__);
};
var select = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__11922__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__21340){
var args__11922__auto__ = cljs.core.seq(arglist__21340);
return select__delegate(args__11922__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19197_21341 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19198_21342 = null;var count__19199_21343 = 0;var i__19200_21344 = 0;while(true){
if((i__19200_21344 < count__19199_21343))
{var arg__11924__auto___21345 = cljs.core._nth.call(null,chunk__19198_21342,i__19200_21344);a__11923__auto__.push(arg__11924__auto___21345);
{
var G__21346 = seq__19197_21341;
var G__21347 = chunk__19198_21342;
var G__21348 = count__19199_21343;
var G__21349 = (i__19200_21344 + 1);
seq__19197_21341 = G__21346;
chunk__19198_21342 = G__21347;
count__19199_21343 = G__21348;
i__19200_21344 = G__21349;
continue;
}
} else
{var temp__4092__auto___21350 = cljs.core.seq.call(null,seq__19197_21341);if(temp__4092__auto___21350)
{var seq__19197_21351__$1 = temp__4092__auto___21350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19197_21351__$1))
{var c__11077__auto___21352 = cljs.core.chunk_first.call(null,seq__19197_21351__$1);{
var G__21353 = cljs.core.chunk_rest.call(null,seq__19197_21351__$1);
var G__21354 = c__11077__auto___21352;
var G__21355 = cljs.core.count.call(null,c__11077__auto___21352);
var G__21356 = 0;
seq__19197_21341 = G__21353;
chunk__19198_21342 = G__21354;
count__19199_21343 = G__21355;
i__19200_21344 = G__21356;
continue;
}
} else
{var arg__11924__auto___21357 = cljs.core.first.call(null,seq__19197_21351__$1);a__11923__auto__.push(arg__11924__auto___21357);
{
var G__21358 = cljs.core.next.call(null,seq__19197_21351__$1);
var G__21359 = null;
var G__21360 = 0;
var G__21361 = 0;
seq__19197_21341 = G__21358;
chunk__19198_21342 = G__21359;
count__19199_21343 = G__21360;
i__19200_21344 = G__21361;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__11923__auto__);
};
var small = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__11922__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__21362){
var args__11922__auto__ = cljs.core.seq(arglist__21362);
return small__delegate(args__11922__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19205_21363 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19206_21364 = null;var count__19207_21365 = 0;var i__19208_21366 = 0;while(true){
if((i__19208_21366 < count__19207_21365))
{var arg__11924__auto___21367 = cljs.core._nth.call(null,chunk__19206_21364,i__19208_21366);a__11923__auto__.push(arg__11924__auto___21367);
{
var G__21368 = seq__19205_21363;
var G__21369 = chunk__19206_21364;
var G__21370 = count__19207_21365;
var G__21371 = (i__19208_21366 + 1);
seq__19205_21363 = G__21368;
chunk__19206_21364 = G__21369;
count__19207_21365 = G__21370;
i__19208_21366 = G__21371;
continue;
}
} else
{var temp__4092__auto___21372 = cljs.core.seq.call(null,seq__19205_21363);if(temp__4092__auto___21372)
{var seq__19205_21373__$1 = temp__4092__auto___21372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19205_21373__$1))
{var c__11077__auto___21374 = cljs.core.chunk_first.call(null,seq__19205_21373__$1);{
var G__21375 = cljs.core.chunk_rest.call(null,seq__19205_21373__$1);
var G__21376 = c__11077__auto___21374;
var G__21377 = cljs.core.count.call(null,c__11077__auto___21374);
var G__21378 = 0;
seq__19205_21363 = G__21375;
chunk__19206_21364 = G__21376;
count__19207_21365 = G__21377;
i__19208_21366 = G__21378;
continue;
}
} else
{var arg__11924__auto___21379 = cljs.core.first.call(null,seq__19205_21373__$1);a__11923__auto__.push(arg__11924__auto___21379);
{
var G__21380 = cljs.core.next.call(null,seq__19205_21373__$1);
var G__21381 = null;
var G__21382 = 0;
var G__21383 = 0;
seq__19205_21363 = G__21380;
chunk__19206_21364 = G__21381;
count__19207_21365 = G__21382;
i__19208_21366 = G__21383;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__11923__auto__);
};
var source = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__11922__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__21384){
var args__11922__auto__ = cljs.core.seq(arglist__21384);
return source__delegate(args__11922__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19213_21385 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19214_21386 = null;var count__19215_21387 = 0;var i__19216_21388 = 0;while(true){
if((i__19216_21388 < count__19215_21387))
{var arg__11924__auto___21389 = cljs.core._nth.call(null,chunk__19214_21386,i__19216_21388);a__11923__auto__.push(arg__11924__auto___21389);
{
var G__21390 = seq__19213_21385;
var G__21391 = chunk__19214_21386;
var G__21392 = count__19215_21387;
var G__21393 = (i__19216_21388 + 1);
seq__19213_21385 = G__21390;
chunk__19214_21386 = G__21391;
count__19215_21387 = G__21392;
i__19216_21388 = G__21393;
continue;
}
} else
{var temp__4092__auto___21394 = cljs.core.seq.call(null,seq__19213_21385);if(temp__4092__auto___21394)
{var seq__19213_21395__$1 = temp__4092__auto___21394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19213_21395__$1))
{var c__11077__auto___21396 = cljs.core.chunk_first.call(null,seq__19213_21395__$1);{
var G__21397 = cljs.core.chunk_rest.call(null,seq__19213_21395__$1);
var G__21398 = c__11077__auto___21396;
var G__21399 = cljs.core.count.call(null,c__11077__auto___21396);
var G__21400 = 0;
seq__19213_21385 = G__21397;
chunk__19214_21386 = G__21398;
count__19215_21387 = G__21399;
i__19216_21388 = G__21400;
continue;
}
} else
{var arg__11924__auto___21401 = cljs.core.first.call(null,seq__19213_21395__$1);a__11923__auto__.push(arg__11924__auto___21401);
{
var G__21402 = cljs.core.next.call(null,seq__19213_21395__$1);
var G__21403 = null;
var G__21404 = 0;
var G__21405 = 0;
seq__19213_21385 = G__21402;
chunk__19214_21386 = G__21403;
count__19215_21387 = G__21404;
i__19216_21388 = G__21405;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__11923__auto__);
};
var span = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__11922__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__21406){
var args__11922__auto__ = cljs.core.seq(arglist__21406);
return span__delegate(args__11922__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19221_21407 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19222_21408 = null;var count__19223_21409 = 0;var i__19224_21410 = 0;while(true){
if((i__19224_21410 < count__19223_21409))
{var arg__11924__auto___21411 = cljs.core._nth.call(null,chunk__19222_21408,i__19224_21410);a__11923__auto__.push(arg__11924__auto___21411);
{
var G__21412 = seq__19221_21407;
var G__21413 = chunk__19222_21408;
var G__21414 = count__19223_21409;
var G__21415 = (i__19224_21410 + 1);
seq__19221_21407 = G__21412;
chunk__19222_21408 = G__21413;
count__19223_21409 = G__21414;
i__19224_21410 = G__21415;
continue;
}
} else
{var temp__4092__auto___21416 = cljs.core.seq.call(null,seq__19221_21407);if(temp__4092__auto___21416)
{var seq__19221_21417__$1 = temp__4092__auto___21416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19221_21417__$1))
{var c__11077__auto___21418 = cljs.core.chunk_first.call(null,seq__19221_21417__$1);{
var G__21419 = cljs.core.chunk_rest.call(null,seq__19221_21417__$1);
var G__21420 = c__11077__auto___21418;
var G__21421 = cljs.core.count.call(null,c__11077__auto___21418);
var G__21422 = 0;
seq__19221_21407 = G__21419;
chunk__19222_21408 = G__21420;
count__19223_21409 = G__21421;
i__19224_21410 = G__21422;
continue;
}
} else
{var arg__11924__auto___21423 = cljs.core.first.call(null,seq__19221_21417__$1);a__11923__auto__.push(arg__11924__auto___21423);
{
var G__21424 = cljs.core.next.call(null,seq__19221_21417__$1);
var G__21425 = null;
var G__21426 = 0;
var G__21427 = 0;
seq__19221_21407 = G__21424;
chunk__19222_21408 = G__21425;
count__19223_21409 = G__21426;
i__19224_21410 = G__21427;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__11923__auto__);
};
var strong = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__11922__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__21428){
var args__11922__auto__ = cljs.core.seq(arglist__21428);
return strong__delegate(args__11922__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19229_21429 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19230_21430 = null;var count__19231_21431 = 0;var i__19232_21432 = 0;while(true){
if((i__19232_21432 < count__19231_21431))
{var arg__11924__auto___21433 = cljs.core._nth.call(null,chunk__19230_21430,i__19232_21432);a__11923__auto__.push(arg__11924__auto___21433);
{
var G__21434 = seq__19229_21429;
var G__21435 = chunk__19230_21430;
var G__21436 = count__19231_21431;
var G__21437 = (i__19232_21432 + 1);
seq__19229_21429 = G__21434;
chunk__19230_21430 = G__21435;
count__19231_21431 = G__21436;
i__19232_21432 = G__21437;
continue;
}
} else
{var temp__4092__auto___21438 = cljs.core.seq.call(null,seq__19229_21429);if(temp__4092__auto___21438)
{var seq__19229_21439__$1 = temp__4092__auto___21438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19229_21439__$1))
{var c__11077__auto___21440 = cljs.core.chunk_first.call(null,seq__19229_21439__$1);{
var G__21441 = cljs.core.chunk_rest.call(null,seq__19229_21439__$1);
var G__21442 = c__11077__auto___21440;
var G__21443 = cljs.core.count.call(null,c__11077__auto___21440);
var G__21444 = 0;
seq__19229_21429 = G__21441;
chunk__19230_21430 = G__21442;
count__19231_21431 = G__21443;
i__19232_21432 = G__21444;
continue;
}
} else
{var arg__11924__auto___21445 = cljs.core.first.call(null,seq__19229_21439__$1);a__11923__auto__.push(arg__11924__auto___21445);
{
var G__21446 = cljs.core.next.call(null,seq__19229_21439__$1);
var G__21447 = null;
var G__21448 = 0;
var G__21449 = 0;
seq__19229_21429 = G__21446;
chunk__19230_21430 = G__21447;
count__19231_21431 = G__21448;
i__19232_21432 = G__21449;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__11923__auto__);
};
var style = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__11922__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__21450){
var args__11922__auto__ = cljs.core.seq(arglist__21450);
return style__delegate(args__11922__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19237_21451 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19238_21452 = null;var count__19239_21453 = 0;var i__19240_21454 = 0;while(true){
if((i__19240_21454 < count__19239_21453))
{var arg__11924__auto___21455 = cljs.core._nth.call(null,chunk__19238_21452,i__19240_21454);a__11923__auto__.push(arg__11924__auto___21455);
{
var G__21456 = seq__19237_21451;
var G__21457 = chunk__19238_21452;
var G__21458 = count__19239_21453;
var G__21459 = (i__19240_21454 + 1);
seq__19237_21451 = G__21456;
chunk__19238_21452 = G__21457;
count__19239_21453 = G__21458;
i__19240_21454 = G__21459;
continue;
}
} else
{var temp__4092__auto___21460 = cljs.core.seq.call(null,seq__19237_21451);if(temp__4092__auto___21460)
{var seq__19237_21461__$1 = temp__4092__auto___21460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19237_21461__$1))
{var c__11077__auto___21462 = cljs.core.chunk_first.call(null,seq__19237_21461__$1);{
var G__21463 = cljs.core.chunk_rest.call(null,seq__19237_21461__$1);
var G__21464 = c__11077__auto___21462;
var G__21465 = cljs.core.count.call(null,c__11077__auto___21462);
var G__21466 = 0;
seq__19237_21451 = G__21463;
chunk__19238_21452 = G__21464;
count__19239_21453 = G__21465;
i__19240_21454 = G__21466;
continue;
}
} else
{var arg__11924__auto___21467 = cljs.core.first.call(null,seq__19237_21461__$1);a__11923__auto__.push(arg__11924__auto___21467);
{
var G__21468 = cljs.core.next.call(null,seq__19237_21461__$1);
var G__21469 = null;
var G__21470 = 0;
var G__21471 = 0;
seq__19237_21451 = G__21468;
chunk__19238_21452 = G__21469;
count__19239_21453 = G__21470;
i__19240_21454 = G__21471;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__11923__auto__);
};
var sub = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__11922__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__21472){
var args__11922__auto__ = cljs.core.seq(arglist__21472);
return sub__delegate(args__11922__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19245_21473 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19246_21474 = null;var count__19247_21475 = 0;var i__19248_21476 = 0;while(true){
if((i__19248_21476 < count__19247_21475))
{var arg__11924__auto___21477 = cljs.core._nth.call(null,chunk__19246_21474,i__19248_21476);a__11923__auto__.push(arg__11924__auto___21477);
{
var G__21478 = seq__19245_21473;
var G__21479 = chunk__19246_21474;
var G__21480 = count__19247_21475;
var G__21481 = (i__19248_21476 + 1);
seq__19245_21473 = G__21478;
chunk__19246_21474 = G__21479;
count__19247_21475 = G__21480;
i__19248_21476 = G__21481;
continue;
}
} else
{var temp__4092__auto___21482 = cljs.core.seq.call(null,seq__19245_21473);if(temp__4092__auto___21482)
{var seq__19245_21483__$1 = temp__4092__auto___21482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19245_21483__$1))
{var c__11077__auto___21484 = cljs.core.chunk_first.call(null,seq__19245_21483__$1);{
var G__21485 = cljs.core.chunk_rest.call(null,seq__19245_21483__$1);
var G__21486 = c__11077__auto___21484;
var G__21487 = cljs.core.count.call(null,c__11077__auto___21484);
var G__21488 = 0;
seq__19245_21473 = G__21485;
chunk__19246_21474 = G__21486;
count__19247_21475 = G__21487;
i__19248_21476 = G__21488;
continue;
}
} else
{var arg__11924__auto___21489 = cljs.core.first.call(null,seq__19245_21483__$1);a__11923__auto__.push(arg__11924__auto___21489);
{
var G__21490 = cljs.core.next.call(null,seq__19245_21483__$1);
var G__21491 = null;
var G__21492 = 0;
var G__21493 = 0;
seq__19245_21473 = G__21490;
chunk__19246_21474 = G__21491;
count__19247_21475 = G__21492;
i__19248_21476 = G__21493;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__11923__auto__);
};
var summary = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__11922__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__21494){
var args__11922__auto__ = cljs.core.seq(arglist__21494);
return summary__delegate(args__11922__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19253_21495 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19254_21496 = null;var count__19255_21497 = 0;var i__19256_21498 = 0;while(true){
if((i__19256_21498 < count__19255_21497))
{var arg__11924__auto___21499 = cljs.core._nth.call(null,chunk__19254_21496,i__19256_21498);a__11923__auto__.push(arg__11924__auto___21499);
{
var G__21500 = seq__19253_21495;
var G__21501 = chunk__19254_21496;
var G__21502 = count__19255_21497;
var G__21503 = (i__19256_21498 + 1);
seq__19253_21495 = G__21500;
chunk__19254_21496 = G__21501;
count__19255_21497 = G__21502;
i__19256_21498 = G__21503;
continue;
}
} else
{var temp__4092__auto___21504 = cljs.core.seq.call(null,seq__19253_21495);if(temp__4092__auto___21504)
{var seq__19253_21505__$1 = temp__4092__auto___21504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19253_21505__$1))
{var c__11077__auto___21506 = cljs.core.chunk_first.call(null,seq__19253_21505__$1);{
var G__21507 = cljs.core.chunk_rest.call(null,seq__19253_21505__$1);
var G__21508 = c__11077__auto___21506;
var G__21509 = cljs.core.count.call(null,c__11077__auto___21506);
var G__21510 = 0;
seq__19253_21495 = G__21507;
chunk__19254_21496 = G__21508;
count__19255_21497 = G__21509;
i__19256_21498 = G__21510;
continue;
}
} else
{var arg__11924__auto___21511 = cljs.core.first.call(null,seq__19253_21505__$1);a__11923__auto__.push(arg__11924__auto___21511);
{
var G__21512 = cljs.core.next.call(null,seq__19253_21505__$1);
var G__21513 = null;
var G__21514 = 0;
var G__21515 = 0;
seq__19253_21495 = G__21512;
chunk__19254_21496 = G__21513;
count__19255_21497 = G__21514;
i__19256_21498 = G__21515;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__11923__auto__);
};
var sup = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__11922__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__21516){
var args__11922__auto__ = cljs.core.seq(arglist__21516);
return sup__delegate(args__11922__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19261_21517 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19262_21518 = null;var count__19263_21519 = 0;var i__19264_21520 = 0;while(true){
if((i__19264_21520 < count__19263_21519))
{var arg__11924__auto___21521 = cljs.core._nth.call(null,chunk__19262_21518,i__19264_21520);a__11923__auto__.push(arg__11924__auto___21521);
{
var G__21522 = seq__19261_21517;
var G__21523 = chunk__19262_21518;
var G__21524 = count__19263_21519;
var G__21525 = (i__19264_21520 + 1);
seq__19261_21517 = G__21522;
chunk__19262_21518 = G__21523;
count__19263_21519 = G__21524;
i__19264_21520 = G__21525;
continue;
}
} else
{var temp__4092__auto___21526 = cljs.core.seq.call(null,seq__19261_21517);if(temp__4092__auto___21526)
{var seq__19261_21527__$1 = temp__4092__auto___21526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19261_21527__$1))
{var c__11077__auto___21528 = cljs.core.chunk_first.call(null,seq__19261_21527__$1);{
var G__21529 = cljs.core.chunk_rest.call(null,seq__19261_21527__$1);
var G__21530 = c__11077__auto___21528;
var G__21531 = cljs.core.count.call(null,c__11077__auto___21528);
var G__21532 = 0;
seq__19261_21517 = G__21529;
chunk__19262_21518 = G__21530;
count__19263_21519 = G__21531;
i__19264_21520 = G__21532;
continue;
}
} else
{var arg__11924__auto___21533 = cljs.core.first.call(null,seq__19261_21527__$1);a__11923__auto__.push(arg__11924__auto___21533);
{
var G__21534 = cljs.core.next.call(null,seq__19261_21527__$1);
var G__21535 = null;
var G__21536 = 0;
var G__21537 = 0;
seq__19261_21517 = G__21534;
chunk__19262_21518 = G__21535;
count__19263_21519 = G__21536;
i__19264_21520 = G__21537;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__11923__auto__);
};
var table = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__11922__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__21538){
var args__11922__auto__ = cljs.core.seq(arglist__21538);
return table__delegate(args__11922__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19269_21539 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19270_21540 = null;var count__19271_21541 = 0;var i__19272_21542 = 0;while(true){
if((i__19272_21542 < count__19271_21541))
{var arg__11924__auto___21543 = cljs.core._nth.call(null,chunk__19270_21540,i__19272_21542);a__11923__auto__.push(arg__11924__auto___21543);
{
var G__21544 = seq__19269_21539;
var G__21545 = chunk__19270_21540;
var G__21546 = count__19271_21541;
var G__21547 = (i__19272_21542 + 1);
seq__19269_21539 = G__21544;
chunk__19270_21540 = G__21545;
count__19271_21541 = G__21546;
i__19272_21542 = G__21547;
continue;
}
} else
{var temp__4092__auto___21548 = cljs.core.seq.call(null,seq__19269_21539);if(temp__4092__auto___21548)
{var seq__19269_21549__$1 = temp__4092__auto___21548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19269_21549__$1))
{var c__11077__auto___21550 = cljs.core.chunk_first.call(null,seq__19269_21549__$1);{
var G__21551 = cljs.core.chunk_rest.call(null,seq__19269_21549__$1);
var G__21552 = c__11077__auto___21550;
var G__21553 = cljs.core.count.call(null,c__11077__auto___21550);
var G__21554 = 0;
seq__19269_21539 = G__21551;
chunk__19270_21540 = G__21552;
count__19271_21541 = G__21553;
i__19272_21542 = G__21554;
continue;
}
} else
{var arg__11924__auto___21555 = cljs.core.first.call(null,seq__19269_21549__$1);a__11923__auto__.push(arg__11924__auto___21555);
{
var G__21556 = cljs.core.next.call(null,seq__19269_21549__$1);
var G__21557 = null;
var G__21558 = 0;
var G__21559 = 0;
seq__19269_21539 = G__21556;
chunk__19270_21540 = G__21557;
count__19271_21541 = G__21558;
i__19272_21542 = G__21559;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__11923__auto__);
};
var tbody = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__11922__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__21560){
var args__11922__auto__ = cljs.core.seq(arglist__21560);
return tbody__delegate(args__11922__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19277_21561 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19278_21562 = null;var count__19279_21563 = 0;var i__19280_21564 = 0;while(true){
if((i__19280_21564 < count__19279_21563))
{var arg__11924__auto___21565 = cljs.core._nth.call(null,chunk__19278_21562,i__19280_21564);a__11923__auto__.push(arg__11924__auto___21565);
{
var G__21566 = seq__19277_21561;
var G__21567 = chunk__19278_21562;
var G__21568 = count__19279_21563;
var G__21569 = (i__19280_21564 + 1);
seq__19277_21561 = G__21566;
chunk__19278_21562 = G__21567;
count__19279_21563 = G__21568;
i__19280_21564 = G__21569;
continue;
}
} else
{var temp__4092__auto___21570 = cljs.core.seq.call(null,seq__19277_21561);if(temp__4092__auto___21570)
{var seq__19277_21571__$1 = temp__4092__auto___21570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19277_21571__$1))
{var c__11077__auto___21572 = cljs.core.chunk_first.call(null,seq__19277_21571__$1);{
var G__21573 = cljs.core.chunk_rest.call(null,seq__19277_21571__$1);
var G__21574 = c__11077__auto___21572;
var G__21575 = cljs.core.count.call(null,c__11077__auto___21572);
var G__21576 = 0;
seq__19277_21561 = G__21573;
chunk__19278_21562 = G__21574;
count__19279_21563 = G__21575;
i__19280_21564 = G__21576;
continue;
}
} else
{var arg__11924__auto___21577 = cljs.core.first.call(null,seq__19277_21571__$1);a__11923__auto__.push(arg__11924__auto___21577);
{
var G__21578 = cljs.core.next.call(null,seq__19277_21571__$1);
var G__21579 = null;
var G__21580 = 0;
var G__21581 = 0;
seq__19277_21561 = G__21578;
chunk__19278_21562 = G__21579;
count__19279_21563 = G__21580;
i__19280_21564 = G__21581;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__11923__auto__);
};
var td = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__11922__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__21582){
var args__11922__auto__ = cljs.core.seq(arglist__21582);
return td__delegate(args__11922__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19285_21583 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19286_21584 = null;var count__19287_21585 = 0;var i__19288_21586 = 0;while(true){
if((i__19288_21586 < count__19287_21585))
{var arg__11924__auto___21587 = cljs.core._nth.call(null,chunk__19286_21584,i__19288_21586);a__11923__auto__.push(arg__11924__auto___21587);
{
var G__21588 = seq__19285_21583;
var G__21589 = chunk__19286_21584;
var G__21590 = count__19287_21585;
var G__21591 = (i__19288_21586 + 1);
seq__19285_21583 = G__21588;
chunk__19286_21584 = G__21589;
count__19287_21585 = G__21590;
i__19288_21586 = G__21591;
continue;
}
} else
{var temp__4092__auto___21592 = cljs.core.seq.call(null,seq__19285_21583);if(temp__4092__auto___21592)
{var seq__19285_21593__$1 = temp__4092__auto___21592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19285_21593__$1))
{var c__11077__auto___21594 = cljs.core.chunk_first.call(null,seq__19285_21593__$1);{
var G__21595 = cljs.core.chunk_rest.call(null,seq__19285_21593__$1);
var G__21596 = c__11077__auto___21594;
var G__21597 = cljs.core.count.call(null,c__11077__auto___21594);
var G__21598 = 0;
seq__19285_21583 = G__21595;
chunk__19286_21584 = G__21596;
count__19287_21585 = G__21597;
i__19288_21586 = G__21598;
continue;
}
} else
{var arg__11924__auto___21599 = cljs.core.first.call(null,seq__19285_21593__$1);a__11923__auto__.push(arg__11924__auto___21599);
{
var G__21600 = cljs.core.next.call(null,seq__19285_21593__$1);
var G__21601 = null;
var G__21602 = 0;
var G__21603 = 0;
seq__19285_21583 = G__21600;
chunk__19286_21584 = G__21601;
count__19287_21585 = G__21602;
i__19288_21586 = G__21603;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__11923__auto__);
};
var textarea = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__11922__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__21604){
var args__11922__auto__ = cljs.core.seq(arglist__21604);
return textarea__delegate(args__11922__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19293_21605 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19294_21606 = null;var count__19295_21607 = 0;var i__19296_21608 = 0;while(true){
if((i__19296_21608 < count__19295_21607))
{var arg__11924__auto___21609 = cljs.core._nth.call(null,chunk__19294_21606,i__19296_21608);a__11923__auto__.push(arg__11924__auto___21609);
{
var G__21610 = seq__19293_21605;
var G__21611 = chunk__19294_21606;
var G__21612 = count__19295_21607;
var G__21613 = (i__19296_21608 + 1);
seq__19293_21605 = G__21610;
chunk__19294_21606 = G__21611;
count__19295_21607 = G__21612;
i__19296_21608 = G__21613;
continue;
}
} else
{var temp__4092__auto___21614 = cljs.core.seq.call(null,seq__19293_21605);if(temp__4092__auto___21614)
{var seq__19293_21615__$1 = temp__4092__auto___21614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19293_21615__$1))
{var c__11077__auto___21616 = cljs.core.chunk_first.call(null,seq__19293_21615__$1);{
var G__21617 = cljs.core.chunk_rest.call(null,seq__19293_21615__$1);
var G__21618 = c__11077__auto___21616;
var G__21619 = cljs.core.count.call(null,c__11077__auto___21616);
var G__21620 = 0;
seq__19293_21605 = G__21617;
chunk__19294_21606 = G__21618;
count__19295_21607 = G__21619;
i__19296_21608 = G__21620;
continue;
}
} else
{var arg__11924__auto___21621 = cljs.core.first.call(null,seq__19293_21615__$1);a__11923__auto__.push(arg__11924__auto___21621);
{
var G__21622 = cljs.core.next.call(null,seq__19293_21615__$1);
var G__21623 = null;
var G__21624 = 0;
var G__21625 = 0;
seq__19293_21605 = G__21622;
chunk__19294_21606 = G__21623;
count__19295_21607 = G__21624;
i__19296_21608 = G__21625;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__11923__auto__);
};
var tfoot = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__11922__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__21626){
var args__11922__auto__ = cljs.core.seq(arglist__21626);
return tfoot__delegate(args__11922__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19301_21627 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19302_21628 = null;var count__19303_21629 = 0;var i__19304_21630 = 0;while(true){
if((i__19304_21630 < count__19303_21629))
{var arg__11924__auto___21631 = cljs.core._nth.call(null,chunk__19302_21628,i__19304_21630);a__11923__auto__.push(arg__11924__auto___21631);
{
var G__21632 = seq__19301_21627;
var G__21633 = chunk__19302_21628;
var G__21634 = count__19303_21629;
var G__21635 = (i__19304_21630 + 1);
seq__19301_21627 = G__21632;
chunk__19302_21628 = G__21633;
count__19303_21629 = G__21634;
i__19304_21630 = G__21635;
continue;
}
} else
{var temp__4092__auto___21636 = cljs.core.seq.call(null,seq__19301_21627);if(temp__4092__auto___21636)
{var seq__19301_21637__$1 = temp__4092__auto___21636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19301_21637__$1))
{var c__11077__auto___21638 = cljs.core.chunk_first.call(null,seq__19301_21637__$1);{
var G__21639 = cljs.core.chunk_rest.call(null,seq__19301_21637__$1);
var G__21640 = c__11077__auto___21638;
var G__21641 = cljs.core.count.call(null,c__11077__auto___21638);
var G__21642 = 0;
seq__19301_21627 = G__21639;
chunk__19302_21628 = G__21640;
count__19303_21629 = G__21641;
i__19304_21630 = G__21642;
continue;
}
} else
{var arg__11924__auto___21643 = cljs.core.first.call(null,seq__19301_21637__$1);a__11923__auto__.push(arg__11924__auto___21643);
{
var G__21644 = cljs.core.next.call(null,seq__19301_21637__$1);
var G__21645 = null;
var G__21646 = 0;
var G__21647 = 0;
seq__19301_21627 = G__21644;
chunk__19302_21628 = G__21645;
count__19303_21629 = G__21646;
i__19304_21630 = G__21647;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__11923__auto__);
};
var th = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__11922__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__21648){
var args__11922__auto__ = cljs.core.seq(arglist__21648);
return th__delegate(args__11922__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19309_21649 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19310_21650 = null;var count__19311_21651 = 0;var i__19312_21652 = 0;while(true){
if((i__19312_21652 < count__19311_21651))
{var arg__11924__auto___21653 = cljs.core._nth.call(null,chunk__19310_21650,i__19312_21652);a__11923__auto__.push(arg__11924__auto___21653);
{
var G__21654 = seq__19309_21649;
var G__21655 = chunk__19310_21650;
var G__21656 = count__19311_21651;
var G__21657 = (i__19312_21652 + 1);
seq__19309_21649 = G__21654;
chunk__19310_21650 = G__21655;
count__19311_21651 = G__21656;
i__19312_21652 = G__21657;
continue;
}
} else
{var temp__4092__auto___21658 = cljs.core.seq.call(null,seq__19309_21649);if(temp__4092__auto___21658)
{var seq__19309_21659__$1 = temp__4092__auto___21658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19309_21659__$1))
{var c__11077__auto___21660 = cljs.core.chunk_first.call(null,seq__19309_21659__$1);{
var G__21661 = cljs.core.chunk_rest.call(null,seq__19309_21659__$1);
var G__21662 = c__11077__auto___21660;
var G__21663 = cljs.core.count.call(null,c__11077__auto___21660);
var G__21664 = 0;
seq__19309_21649 = G__21661;
chunk__19310_21650 = G__21662;
count__19311_21651 = G__21663;
i__19312_21652 = G__21664;
continue;
}
} else
{var arg__11924__auto___21665 = cljs.core.first.call(null,seq__19309_21659__$1);a__11923__auto__.push(arg__11924__auto___21665);
{
var G__21666 = cljs.core.next.call(null,seq__19309_21659__$1);
var G__21667 = null;
var G__21668 = 0;
var G__21669 = 0;
seq__19309_21649 = G__21666;
chunk__19310_21650 = G__21667;
count__19311_21651 = G__21668;
i__19312_21652 = G__21669;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__11923__auto__);
};
var thead = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__11922__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__21670){
var args__11922__auto__ = cljs.core.seq(arglist__21670);
return thead__delegate(args__11922__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19317_21671 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19318_21672 = null;var count__19319_21673 = 0;var i__19320_21674 = 0;while(true){
if((i__19320_21674 < count__19319_21673))
{var arg__11924__auto___21675 = cljs.core._nth.call(null,chunk__19318_21672,i__19320_21674);a__11923__auto__.push(arg__11924__auto___21675);
{
var G__21676 = seq__19317_21671;
var G__21677 = chunk__19318_21672;
var G__21678 = count__19319_21673;
var G__21679 = (i__19320_21674 + 1);
seq__19317_21671 = G__21676;
chunk__19318_21672 = G__21677;
count__19319_21673 = G__21678;
i__19320_21674 = G__21679;
continue;
}
} else
{var temp__4092__auto___21680 = cljs.core.seq.call(null,seq__19317_21671);if(temp__4092__auto___21680)
{var seq__19317_21681__$1 = temp__4092__auto___21680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19317_21681__$1))
{var c__11077__auto___21682 = cljs.core.chunk_first.call(null,seq__19317_21681__$1);{
var G__21683 = cljs.core.chunk_rest.call(null,seq__19317_21681__$1);
var G__21684 = c__11077__auto___21682;
var G__21685 = cljs.core.count.call(null,c__11077__auto___21682);
var G__21686 = 0;
seq__19317_21671 = G__21683;
chunk__19318_21672 = G__21684;
count__19319_21673 = G__21685;
i__19320_21674 = G__21686;
continue;
}
} else
{var arg__11924__auto___21687 = cljs.core.first.call(null,seq__19317_21681__$1);a__11923__auto__.push(arg__11924__auto___21687);
{
var G__21688 = cljs.core.next.call(null,seq__19317_21681__$1);
var G__21689 = null;
var G__21690 = 0;
var G__21691 = 0;
seq__19317_21671 = G__21688;
chunk__19318_21672 = G__21689;
count__19319_21673 = G__21690;
i__19320_21674 = G__21691;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__11923__auto__);
};
var time = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__11922__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__21692){
var args__11922__auto__ = cljs.core.seq(arglist__21692);
return time__delegate(args__11922__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19325_21693 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19326_21694 = null;var count__19327_21695 = 0;var i__19328_21696 = 0;while(true){
if((i__19328_21696 < count__19327_21695))
{var arg__11924__auto___21697 = cljs.core._nth.call(null,chunk__19326_21694,i__19328_21696);a__11923__auto__.push(arg__11924__auto___21697);
{
var G__21698 = seq__19325_21693;
var G__21699 = chunk__19326_21694;
var G__21700 = count__19327_21695;
var G__21701 = (i__19328_21696 + 1);
seq__19325_21693 = G__21698;
chunk__19326_21694 = G__21699;
count__19327_21695 = G__21700;
i__19328_21696 = G__21701;
continue;
}
} else
{var temp__4092__auto___21702 = cljs.core.seq.call(null,seq__19325_21693);if(temp__4092__auto___21702)
{var seq__19325_21703__$1 = temp__4092__auto___21702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19325_21703__$1))
{var c__11077__auto___21704 = cljs.core.chunk_first.call(null,seq__19325_21703__$1);{
var G__21705 = cljs.core.chunk_rest.call(null,seq__19325_21703__$1);
var G__21706 = c__11077__auto___21704;
var G__21707 = cljs.core.count.call(null,c__11077__auto___21704);
var G__21708 = 0;
seq__19325_21693 = G__21705;
chunk__19326_21694 = G__21706;
count__19327_21695 = G__21707;
i__19328_21696 = G__21708;
continue;
}
} else
{var arg__11924__auto___21709 = cljs.core.first.call(null,seq__19325_21703__$1);a__11923__auto__.push(arg__11924__auto___21709);
{
var G__21710 = cljs.core.next.call(null,seq__19325_21703__$1);
var G__21711 = null;
var G__21712 = 0;
var G__21713 = 0;
seq__19325_21693 = G__21710;
chunk__19326_21694 = G__21711;
count__19327_21695 = G__21712;
i__19328_21696 = G__21713;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__11923__auto__);
};
var title = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__11922__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__21714){
var args__11922__auto__ = cljs.core.seq(arglist__21714);
return title__delegate(args__11922__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19333_21715 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19334_21716 = null;var count__19335_21717 = 0;var i__19336_21718 = 0;while(true){
if((i__19336_21718 < count__19335_21717))
{var arg__11924__auto___21719 = cljs.core._nth.call(null,chunk__19334_21716,i__19336_21718);a__11923__auto__.push(arg__11924__auto___21719);
{
var G__21720 = seq__19333_21715;
var G__21721 = chunk__19334_21716;
var G__21722 = count__19335_21717;
var G__21723 = (i__19336_21718 + 1);
seq__19333_21715 = G__21720;
chunk__19334_21716 = G__21721;
count__19335_21717 = G__21722;
i__19336_21718 = G__21723;
continue;
}
} else
{var temp__4092__auto___21724 = cljs.core.seq.call(null,seq__19333_21715);if(temp__4092__auto___21724)
{var seq__19333_21725__$1 = temp__4092__auto___21724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19333_21725__$1))
{var c__11077__auto___21726 = cljs.core.chunk_first.call(null,seq__19333_21725__$1);{
var G__21727 = cljs.core.chunk_rest.call(null,seq__19333_21725__$1);
var G__21728 = c__11077__auto___21726;
var G__21729 = cljs.core.count.call(null,c__11077__auto___21726);
var G__21730 = 0;
seq__19333_21715 = G__21727;
chunk__19334_21716 = G__21728;
count__19335_21717 = G__21729;
i__19336_21718 = G__21730;
continue;
}
} else
{var arg__11924__auto___21731 = cljs.core.first.call(null,seq__19333_21725__$1);a__11923__auto__.push(arg__11924__auto___21731);
{
var G__21732 = cljs.core.next.call(null,seq__19333_21725__$1);
var G__21733 = null;
var G__21734 = 0;
var G__21735 = 0;
seq__19333_21715 = G__21732;
chunk__19334_21716 = G__21733;
count__19335_21717 = G__21734;
i__19336_21718 = G__21735;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__11923__auto__);
};
var tr = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__11922__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__21736){
var args__11922__auto__ = cljs.core.seq(arglist__21736);
return tr__delegate(args__11922__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19341_21737 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19342_21738 = null;var count__19343_21739 = 0;var i__19344_21740 = 0;while(true){
if((i__19344_21740 < count__19343_21739))
{var arg__11924__auto___21741 = cljs.core._nth.call(null,chunk__19342_21738,i__19344_21740);a__11923__auto__.push(arg__11924__auto___21741);
{
var G__21742 = seq__19341_21737;
var G__21743 = chunk__19342_21738;
var G__21744 = count__19343_21739;
var G__21745 = (i__19344_21740 + 1);
seq__19341_21737 = G__21742;
chunk__19342_21738 = G__21743;
count__19343_21739 = G__21744;
i__19344_21740 = G__21745;
continue;
}
} else
{var temp__4092__auto___21746 = cljs.core.seq.call(null,seq__19341_21737);if(temp__4092__auto___21746)
{var seq__19341_21747__$1 = temp__4092__auto___21746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19341_21747__$1))
{var c__11077__auto___21748 = cljs.core.chunk_first.call(null,seq__19341_21747__$1);{
var G__21749 = cljs.core.chunk_rest.call(null,seq__19341_21747__$1);
var G__21750 = c__11077__auto___21748;
var G__21751 = cljs.core.count.call(null,c__11077__auto___21748);
var G__21752 = 0;
seq__19341_21737 = G__21749;
chunk__19342_21738 = G__21750;
count__19343_21739 = G__21751;
i__19344_21740 = G__21752;
continue;
}
} else
{var arg__11924__auto___21753 = cljs.core.first.call(null,seq__19341_21747__$1);a__11923__auto__.push(arg__11924__auto___21753);
{
var G__21754 = cljs.core.next.call(null,seq__19341_21747__$1);
var G__21755 = null;
var G__21756 = 0;
var G__21757 = 0;
seq__19341_21737 = G__21754;
chunk__19342_21738 = G__21755;
count__19343_21739 = G__21756;
i__19344_21740 = G__21757;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__11923__auto__);
};
var track = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__11922__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__21758){
var args__11922__auto__ = cljs.core.seq(arglist__21758);
return track__delegate(args__11922__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19349_21759 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19350_21760 = null;var count__19351_21761 = 0;var i__19352_21762 = 0;while(true){
if((i__19352_21762 < count__19351_21761))
{var arg__11924__auto___21763 = cljs.core._nth.call(null,chunk__19350_21760,i__19352_21762);a__11923__auto__.push(arg__11924__auto___21763);
{
var G__21764 = seq__19349_21759;
var G__21765 = chunk__19350_21760;
var G__21766 = count__19351_21761;
var G__21767 = (i__19352_21762 + 1);
seq__19349_21759 = G__21764;
chunk__19350_21760 = G__21765;
count__19351_21761 = G__21766;
i__19352_21762 = G__21767;
continue;
}
} else
{var temp__4092__auto___21768 = cljs.core.seq.call(null,seq__19349_21759);if(temp__4092__auto___21768)
{var seq__19349_21769__$1 = temp__4092__auto___21768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19349_21769__$1))
{var c__11077__auto___21770 = cljs.core.chunk_first.call(null,seq__19349_21769__$1);{
var G__21771 = cljs.core.chunk_rest.call(null,seq__19349_21769__$1);
var G__21772 = c__11077__auto___21770;
var G__21773 = cljs.core.count.call(null,c__11077__auto___21770);
var G__21774 = 0;
seq__19349_21759 = G__21771;
chunk__19350_21760 = G__21772;
count__19351_21761 = G__21773;
i__19352_21762 = G__21774;
continue;
}
} else
{var arg__11924__auto___21775 = cljs.core.first.call(null,seq__19349_21769__$1);a__11923__auto__.push(arg__11924__auto___21775);
{
var G__21776 = cljs.core.next.call(null,seq__19349_21769__$1);
var G__21777 = null;
var G__21778 = 0;
var G__21779 = 0;
seq__19349_21759 = G__21776;
chunk__19350_21760 = G__21777;
count__19351_21761 = G__21778;
i__19352_21762 = G__21779;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__11923__auto__);
};
var u = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__11922__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__21780){
var args__11922__auto__ = cljs.core.seq(arglist__21780);
return u__delegate(args__11922__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19357_21781 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19358_21782 = null;var count__19359_21783 = 0;var i__19360_21784 = 0;while(true){
if((i__19360_21784 < count__19359_21783))
{var arg__11924__auto___21785 = cljs.core._nth.call(null,chunk__19358_21782,i__19360_21784);a__11923__auto__.push(arg__11924__auto___21785);
{
var G__21786 = seq__19357_21781;
var G__21787 = chunk__19358_21782;
var G__21788 = count__19359_21783;
var G__21789 = (i__19360_21784 + 1);
seq__19357_21781 = G__21786;
chunk__19358_21782 = G__21787;
count__19359_21783 = G__21788;
i__19360_21784 = G__21789;
continue;
}
} else
{var temp__4092__auto___21790 = cljs.core.seq.call(null,seq__19357_21781);if(temp__4092__auto___21790)
{var seq__19357_21791__$1 = temp__4092__auto___21790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19357_21791__$1))
{var c__11077__auto___21792 = cljs.core.chunk_first.call(null,seq__19357_21791__$1);{
var G__21793 = cljs.core.chunk_rest.call(null,seq__19357_21791__$1);
var G__21794 = c__11077__auto___21792;
var G__21795 = cljs.core.count.call(null,c__11077__auto___21792);
var G__21796 = 0;
seq__19357_21781 = G__21793;
chunk__19358_21782 = G__21794;
count__19359_21783 = G__21795;
i__19360_21784 = G__21796;
continue;
}
} else
{var arg__11924__auto___21797 = cljs.core.first.call(null,seq__19357_21791__$1);a__11923__auto__.push(arg__11924__auto___21797);
{
var G__21798 = cljs.core.next.call(null,seq__19357_21791__$1);
var G__21799 = null;
var G__21800 = 0;
var G__21801 = 0;
seq__19357_21781 = G__21798;
chunk__19358_21782 = G__21799;
count__19359_21783 = G__21800;
i__19360_21784 = G__21801;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__11923__auto__);
};
var ul = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__11922__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__21802){
var args__11922__auto__ = cljs.core.seq(arglist__21802);
return ul__delegate(args__11922__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19365_21803 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19366_21804 = null;var count__19367_21805 = 0;var i__19368_21806 = 0;while(true){
if((i__19368_21806 < count__19367_21805))
{var arg__11924__auto___21807 = cljs.core._nth.call(null,chunk__19366_21804,i__19368_21806);a__11923__auto__.push(arg__11924__auto___21807);
{
var G__21808 = seq__19365_21803;
var G__21809 = chunk__19366_21804;
var G__21810 = count__19367_21805;
var G__21811 = (i__19368_21806 + 1);
seq__19365_21803 = G__21808;
chunk__19366_21804 = G__21809;
count__19367_21805 = G__21810;
i__19368_21806 = G__21811;
continue;
}
} else
{var temp__4092__auto___21812 = cljs.core.seq.call(null,seq__19365_21803);if(temp__4092__auto___21812)
{var seq__19365_21813__$1 = temp__4092__auto___21812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19365_21813__$1))
{var c__11077__auto___21814 = cljs.core.chunk_first.call(null,seq__19365_21813__$1);{
var G__21815 = cljs.core.chunk_rest.call(null,seq__19365_21813__$1);
var G__21816 = c__11077__auto___21814;
var G__21817 = cljs.core.count.call(null,c__11077__auto___21814);
var G__21818 = 0;
seq__19365_21803 = G__21815;
chunk__19366_21804 = G__21816;
count__19367_21805 = G__21817;
i__19368_21806 = G__21818;
continue;
}
} else
{var arg__11924__auto___21819 = cljs.core.first.call(null,seq__19365_21813__$1);a__11923__auto__.push(arg__11924__auto___21819);
{
var G__21820 = cljs.core.next.call(null,seq__19365_21813__$1);
var G__21821 = null;
var G__21822 = 0;
var G__21823 = 0;
seq__19365_21803 = G__21820;
chunk__19366_21804 = G__21821;
count__19367_21805 = G__21822;
i__19368_21806 = G__21823;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__11923__auto__);
};
var var$ = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__11922__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__21824){
var args__11922__auto__ = cljs.core.seq(arglist__21824);
return var$__delegate(args__11922__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19373_21825 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19374_21826 = null;var count__19375_21827 = 0;var i__19376_21828 = 0;while(true){
if((i__19376_21828 < count__19375_21827))
{var arg__11924__auto___21829 = cljs.core._nth.call(null,chunk__19374_21826,i__19376_21828);a__11923__auto__.push(arg__11924__auto___21829);
{
var G__21830 = seq__19373_21825;
var G__21831 = chunk__19374_21826;
var G__21832 = count__19375_21827;
var G__21833 = (i__19376_21828 + 1);
seq__19373_21825 = G__21830;
chunk__19374_21826 = G__21831;
count__19375_21827 = G__21832;
i__19376_21828 = G__21833;
continue;
}
} else
{var temp__4092__auto___21834 = cljs.core.seq.call(null,seq__19373_21825);if(temp__4092__auto___21834)
{var seq__19373_21835__$1 = temp__4092__auto___21834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19373_21835__$1))
{var c__11077__auto___21836 = cljs.core.chunk_first.call(null,seq__19373_21835__$1);{
var G__21837 = cljs.core.chunk_rest.call(null,seq__19373_21835__$1);
var G__21838 = c__11077__auto___21836;
var G__21839 = cljs.core.count.call(null,c__11077__auto___21836);
var G__21840 = 0;
seq__19373_21825 = G__21837;
chunk__19374_21826 = G__21838;
count__19375_21827 = G__21839;
i__19376_21828 = G__21840;
continue;
}
} else
{var arg__11924__auto___21841 = cljs.core.first.call(null,seq__19373_21835__$1);a__11923__auto__.push(arg__11924__auto___21841);
{
var G__21842 = cljs.core.next.call(null,seq__19373_21835__$1);
var G__21843 = null;
var G__21844 = 0;
var G__21845 = 0;
seq__19373_21825 = G__21842;
chunk__19374_21826 = G__21843;
count__19375_21827 = G__21844;
i__19376_21828 = G__21845;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__11923__auto__);
};
var video = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__11922__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__21846){
var args__11922__auto__ = cljs.core.seq(arglist__21846);
return video__delegate(args__11922__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19381_21847 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19382_21848 = null;var count__19383_21849 = 0;var i__19384_21850 = 0;while(true){
if((i__19384_21850 < count__19383_21849))
{var arg__11924__auto___21851 = cljs.core._nth.call(null,chunk__19382_21848,i__19384_21850);a__11923__auto__.push(arg__11924__auto___21851);
{
var G__21852 = seq__19381_21847;
var G__21853 = chunk__19382_21848;
var G__21854 = count__19383_21849;
var G__21855 = (i__19384_21850 + 1);
seq__19381_21847 = G__21852;
chunk__19382_21848 = G__21853;
count__19383_21849 = G__21854;
i__19384_21850 = G__21855;
continue;
}
} else
{var temp__4092__auto___21856 = cljs.core.seq.call(null,seq__19381_21847);if(temp__4092__auto___21856)
{var seq__19381_21857__$1 = temp__4092__auto___21856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19381_21857__$1))
{var c__11077__auto___21858 = cljs.core.chunk_first.call(null,seq__19381_21857__$1);{
var G__21859 = cljs.core.chunk_rest.call(null,seq__19381_21857__$1);
var G__21860 = c__11077__auto___21858;
var G__21861 = cljs.core.count.call(null,c__11077__auto___21858);
var G__21862 = 0;
seq__19381_21847 = G__21859;
chunk__19382_21848 = G__21860;
count__19383_21849 = G__21861;
i__19384_21850 = G__21862;
continue;
}
} else
{var arg__11924__auto___21863 = cljs.core.first.call(null,seq__19381_21857__$1);a__11923__auto__.push(arg__11924__auto___21863);
{
var G__21864 = cljs.core.next.call(null,seq__19381_21857__$1);
var G__21865 = null;
var G__21866 = 0;
var G__21867 = 0;
seq__19381_21847 = G__21864;
chunk__19382_21848 = G__21865;
count__19383_21849 = G__21866;
i__19384_21850 = G__21867;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__11923__auto__);
};
var wbr = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__11922__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__21868){
var args__11922__auto__ = cljs.core.seq(arglist__21868);
return wbr__delegate(args__11922__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19389_21869 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19390_21870 = null;var count__19391_21871 = 0;var i__19392_21872 = 0;while(true){
if((i__19392_21872 < count__19391_21871))
{var arg__11924__auto___21873 = cljs.core._nth.call(null,chunk__19390_21870,i__19392_21872);a__11923__auto__.push(arg__11924__auto___21873);
{
var G__21874 = seq__19389_21869;
var G__21875 = chunk__19390_21870;
var G__21876 = count__19391_21871;
var G__21877 = (i__19392_21872 + 1);
seq__19389_21869 = G__21874;
chunk__19390_21870 = G__21875;
count__19391_21871 = G__21876;
i__19392_21872 = G__21877;
continue;
}
} else
{var temp__4092__auto___21878 = cljs.core.seq.call(null,seq__19389_21869);if(temp__4092__auto___21878)
{var seq__19389_21879__$1 = temp__4092__auto___21878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19389_21879__$1))
{var c__11077__auto___21880 = cljs.core.chunk_first.call(null,seq__19389_21879__$1);{
var G__21881 = cljs.core.chunk_rest.call(null,seq__19389_21879__$1);
var G__21882 = c__11077__auto___21880;
var G__21883 = cljs.core.count.call(null,c__11077__auto___21880);
var G__21884 = 0;
seq__19389_21869 = G__21881;
chunk__19390_21870 = G__21882;
count__19391_21871 = G__21883;
i__19392_21872 = G__21884;
continue;
}
} else
{var arg__11924__auto___21885 = cljs.core.first.call(null,seq__19389_21879__$1);a__11923__auto__.push(arg__11924__auto___21885);
{
var G__21886 = cljs.core.next.call(null,seq__19389_21879__$1);
var G__21887 = null;
var G__21888 = 0;
var G__21889 = 0;
seq__19389_21869 = G__21886;
chunk__19390_21870 = G__21887;
count__19391_21871 = G__21888;
i__19392_21872 = G__21889;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__11923__auto__);
};
var circle = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__11922__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__21890){
var args__11922__auto__ = cljs.core.seq(arglist__21890);
return circle__delegate(args__11922__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19397_21891 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19398_21892 = null;var count__19399_21893 = 0;var i__19400_21894 = 0;while(true){
if((i__19400_21894 < count__19399_21893))
{var arg__11924__auto___21895 = cljs.core._nth.call(null,chunk__19398_21892,i__19400_21894);a__11923__auto__.push(arg__11924__auto___21895);
{
var G__21896 = seq__19397_21891;
var G__21897 = chunk__19398_21892;
var G__21898 = count__19399_21893;
var G__21899 = (i__19400_21894 + 1);
seq__19397_21891 = G__21896;
chunk__19398_21892 = G__21897;
count__19399_21893 = G__21898;
i__19400_21894 = G__21899;
continue;
}
} else
{var temp__4092__auto___21900 = cljs.core.seq.call(null,seq__19397_21891);if(temp__4092__auto___21900)
{var seq__19397_21901__$1 = temp__4092__auto___21900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19397_21901__$1))
{var c__11077__auto___21902 = cljs.core.chunk_first.call(null,seq__19397_21901__$1);{
var G__21903 = cljs.core.chunk_rest.call(null,seq__19397_21901__$1);
var G__21904 = c__11077__auto___21902;
var G__21905 = cljs.core.count.call(null,c__11077__auto___21902);
var G__21906 = 0;
seq__19397_21891 = G__21903;
chunk__19398_21892 = G__21904;
count__19399_21893 = G__21905;
i__19400_21894 = G__21906;
continue;
}
} else
{var arg__11924__auto___21907 = cljs.core.first.call(null,seq__19397_21901__$1);a__11923__auto__.push(arg__11924__auto___21907);
{
var G__21908 = cljs.core.next.call(null,seq__19397_21901__$1);
var G__21909 = null;
var G__21910 = 0;
var G__21911 = 0;
seq__19397_21891 = G__21908;
chunk__19398_21892 = G__21909;
count__19399_21893 = G__21910;
i__19400_21894 = G__21911;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__11923__auto__);
};
var g = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__11922__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__21912){
var args__11922__auto__ = cljs.core.seq(arglist__21912);
return g__delegate(args__11922__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19405_21913 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19406_21914 = null;var count__19407_21915 = 0;var i__19408_21916 = 0;while(true){
if((i__19408_21916 < count__19407_21915))
{var arg__11924__auto___21917 = cljs.core._nth.call(null,chunk__19406_21914,i__19408_21916);a__11923__auto__.push(arg__11924__auto___21917);
{
var G__21918 = seq__19405_21913;
var G__21919 = chunk__19406_21914;
var G__21920 = count__19407_21915;
var G__21921 = (i__19408_21916 + 1);
seq__19405_21913 = G__21918;
chunk__19406_21914 = G__21919;
count__19407_21915 = G__21920;
i__19408_21916 = G__21921;
continue;
}
} else
{var temp__4092__auto___21922 = cljs.core.seq.call(null,seq__19405_21913);if(temp__4092__auto___21922)
{var seq__19405_21923__$1 = temp__4092__auto___21922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19405_21923__$1))
{var c__11077__auto___21924 = cljs.core.chunk_first.call(null,seq__19405_21923__$1);{
var G__21925 = cljs.core.chunk_rest.call(null,seq__19405_21923__$1);
var G__21926 = c__11077__auto___21924;
var G__21927 = cljs.core.count.call(null,c__11077__auto___21924);
var G__21928 = 0;
seq__19405_21913 = G__21925;
chunk__19406_21914 = G__21926;
count__19407_21915 = G__21927;
i__19408_21916 = G__21928;
continue;
}
} else
{var arg__11924__auto___21929 = cljs.core.first.call(null,seq__19405_21923__$1);a__11923__auto__.push(arg__11924__auto___21929);
{
var G__21930 = cljs.core.next.call(null,seq__19405_21923__$1);
var G__21931 = null;
var G__21932 = 0;
var G__21933 = 0;
seq__19405_21913 = G__21930;
chunk__19406_21914 = G__21931;
count__19407_21915 = G__21932;
i__19408_21916 = G__21933;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__11923__auto__);
};
var line = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__11922__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__21934){
var args__11922__auto__ = cljs.core.seq(arglist__21934);
return line__delegate(args__11922__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19413_21935 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19414_21936 = null;var count__19415_21937 = 0;var i__19416_21938 = 0;while(true){
if((i__19416_21938 < count__19415_21937))
{var arg__11924__auto___21939 = cljs.core._nth.call(null,chunk__19414_21936,i__19416_21938);a__11923__auto__.push(arg__11924__auto___21939);
{
var G__21940 = seq__19413_21935;
var G__21941 = chunk__19414_21936;
var G__21942 = count__19415_21937;
var G__21943 = (i__19416_21938 + 1);
seq__19413_21935 = G__21940;
chunk__19414_21936 = G__21941;
count__19415_21937 = G__21942;
i__19416_21938 = G__21943;
continue;
}
} else
{var temp__4092__auto___21944 = cljs.core.seq.call(null,seq__19413_21935);if(temp__4092__auto___21944)
{var seq__19413_21945__$1 = temp__4092__auto___21944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19413_21945__$1))
{var c__11077__auto___21946 = cljs.core.chunk_first.call(null,seq__19413_21945__$1);{
var G__21947 = cljs.core.chunk_rest.call(null,seq__19413_21945__$1);
var G__21948 = c__11077__auto___21946;
var G__21949 = cljs.core.count.call(null,c__11077__auto___21946);
var G__21950 = 0;
seq__19413_21935 = G__21947;
chunk__19414_21936 = G__21948;
count__19415_21937 = G__21949;
i__19416_21938 = G__21950;
continue;
}
} else
{var arg__11924__auto___21951 = cljs.core.first.call(null,seq__19413_21945__$1);a__11923__auto__.push(arg__11924__auto___21951);
{
var G__21952 = cljs.core.next.call(null,seq__19413_21945__$1);
var G__21953 = null;
var G__21954 = 0;
var G__21955 = 0;
seq__19413_21935 = G__21952;
chunk__19414_21936 = G__21953;
count__19415_21937 = G__21954;
i__19416_21938 = G__21955;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__11923__auto__);
};
var path = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__11922__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__21956){
var args__11922__auto__ = cljs.core.seq(arglist__21956);
return path__delegate(args__11922__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19421_21957 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19422_21958 = null;var count__19423_21959 = 0;var i__19424_21960 = 0;while(true){
if((i__19424_21960 < count__19423_21959))
{var arg__11924__auto___21961 = cljs.core._nth.call(null,chunk__19422_21958,i__19424_21960);a__11923__auto__.push(arg__11924__auto___21961);
{
var G__21962 = seq__19421_21957;
var G__21963 = chunk__19422_21958;
var G__21964 = count__19423_21959;
var G__21965 = (i__19424_21960 + 1);
seq__19421_21957 = G__21962;
chunk__19422_21958 = G__21963;
count__19423_21959 = G__21964;
i__19424_21960 = G__21965;
continue;
}
} else
{var temp__4092__auto___21966 = cljs.core.seq.call(null,seq__19421_21957);if(temp__4092__auto___21966)
{var seq__19421_21967__$1 = temp__4092__auto___21966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19421_21967__$1))
{var c__11077__auto___21968 = cljs.core.chunk_first.call(null,seq__19421_21967__$1);{
var G__21969 = cljs.core.chunk_rest.call(null,seq__19421_21967__$1);
var G__21970 = c__11077__auto___21968;
var G__21971 = cljs.core.count.call(null,c__11077__auto___21968);
var G__21972 = 0;
seq__19421_21957 = G__21969;
chunk__19422_21958 = G__21970;
count__19423_21959 = G__21971;
i__19424_21960 = G__21972;
continue;
}
} else
{var arg__11924__auto___21973 = cljs.core.first.call(null,seq__19421_21967__$1);a__11923__auto__.push(arg__11924__auto___21973);
{
var G__21974 = cljs.core.next.call(null,seq__19421_21967__$1);
var G__21975 = null;
var G__21976 = 0;
var G__21977 = 0;
seq__19421_21957 = G__21974;
chunk__19422_21958 = G__21975;
count__19423_21959 = G__21976;
i__19424_21960 = G__21977;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__11923__auto__);
};
var polygon = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__11922__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__21978){
var args__11922__auto__ = cljs.core.seq(arglist__21978);
return polygon__delegate(args__11922__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19429_21979 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19430_21980 = null;var count__19431_21981 = 0;var i__19432_21982 = 0;while(true){
if((i__19432_21982 < count__19431_21981))
{var arg__11924__auto___21983 = cljs.core._nth.call(null,chunk__19430_21980,i__19432_21982);a__11923__auto__.push(arg__11924__auto___21983);
{
var G__21984 = seq__19429_21979;
var G__21985 = chunk__19430_21980;
var G__21986 = count__19431_21981;
var G__21987 = (i__19432_21982 + 1);
seq__19429_21979 = G__21984;
chunk__19430_21980 = G__21985;
count__19431_21981 = G__21986;
i__19432_21982 = G__21987;
continue;
}
} else
{var temp__4092__auto___21988 = cljs.core.seq.call(null,seq__19429_21979);if(temp__4092__auto___21988)
{var seq__19429_21989__$1 = temp__4092__auto___21988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19429_21989__$1))
{var c__11077__auto___21990 = cljs.core.chunk_first.call(null,seq__19429_21989__$1);{
var G__21991 = cljs.core.chunk_rest.call(null,seq__19429_21989__$1);
var G__21992 = c__11077__auto___21990;
var G__21993 = cljs.core.count.call(null,c__11077__auto___21990);
var G__21994 = 0;
seq__19429_21979 = G__21991;
chunk__19430_21980 = G__21992;
count__19431_21981 = G__21993;
i__19432_21982 = G__21994;
continue;
}
} else
{var arg__11924__auto___21995 = cljs.core.first.call(null,seq__19429_21989__$1);a__11923__auto__.push(arg__11924__auto___21995);
{
var G__21996 = cljs.core.next.call(null,seq__19429_21989__$1);
var G__21997 = null;
var G__21998 = 0;
var G__21999 = 0;
seq__19429_21979 = G__21996;
chunk__19430_21980 = G__21997;
count__19431_21981 = G__21998;
i__19432_21982 = G__21999;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__11923__auto__);
};
var polyline = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__11922__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__22000){
var args__11922__auto__ = cljs.core.seq(arglist__22000);
return polyline__delegate(args__11922__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19437_22001 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19438_22002 = null;var count__19439_22003 = 0;var i__19440_22004 = 0;while(true){
if((i__19440_22004 < count__19439_22003))
{var arg__11924__auto___22005 = cljs.core._nth.call(null,chunk__19438_22002,i__19440_22004);a__11923__auto__.push(arg__11924__auto___22005);
{
var G__22006 = seq__19437_22001;
var G__22007 = chunk__19438_22002;
var G__22008 = count__19439_22003;
var G__22009 = (i__19440_22004 + 1);
seq__19437_22001 = G__22006;
chunk__19438_22002 = G__22007;
count__19439_22003 = G__22008;
i__19440_22004 = G__22009;
continue;
}
} else
{var temp__4092__auto___22010 = cljs.core.seq.call(null,seq__19437_22001);if(temp__4092__auto___22010)
{var seq__19437_22011__$1 = temp__4092__auto___22010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19437_22011__$1))
{var c__11077__auto___22012 = cljs.core.chunk_first.call(null,seq__19437_22011__$1);{
var G__22013 = cljs.core.chunk_rest.call(null,seq__19437_22011__$1);
var G__22014 = c__11077__auto___22012;
var G__22015 = cljs.core.count.call(null,c__11077__auto___22012);
var G__22016 = 0;
seq__19437_22001 = G__22013;
chunk__19438_22002 = G__22014;
count__19439_22003 = G__22015;
i__19440_22004 = G__22016;
continue;
}
} else
{var arg__11924__auto___22017 = cljs.core.first.call(null,seq__19437_22011__$1);a__11923__auto__.push(arg__11924__auto___22017);
{
var G__22018 = cljs.core.next.call(null,seq__19437_22011__$1);
var G__22019 = null;
var G__22020 = 0;
var G__22021 = 0;
seq__19437_22001 = G__22018;
chunk__19438_22002 = G__22019;
count__19439_22003 = G__22020;
i__19440_22004 = G__22021;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__11923__auto__);
};
var rect = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__11922__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__22022){
var args__11922__auto__ = cljs.core.seq(arglist__22022);
return rect__delegate(args__11922__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__19445_22023 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__19446_22024 = null;var count__19447_22025 = 0;var i__19448_22026 = 0;while(true){
if((i__19448_22026 < count__19447_22025))
{var arg__11924__auto___22027 = cljs.core._nth.call(null,chunk__19446_22024,i__19448_22026);a__11923__auto__.push(arg__11924__auto___22027);
{
var G__22028 = seq__19445_22023;
var G__22029 = chunk__19446_22024;
var G__22030 = count__19447_22025;
var G__22031 = (i__19448_22026 + 1);
seq__19445_22023 = G__22028;
chunk__19446_22024 = G__22029;
count__19447_22025 = G__22030;
i__19448_22026 = G__22031;
continue;
}
} else
{var temp__4092__auto___22032 = cljs.core.seq.call(null,seq__19445_22023);if(temp__4092__auto___22032)
{var seq__19445_22033__$1 = temp__4092__auto___22032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19445_22033__$1))
{var c__11077__auto___22034 = cljs.core.chunk_first.call(null,seq__19445_22033__$1);{
var G__22035 = cljs.core.chunk_rest.call(null,seq__19445_22033__$1);
var G__22036 = c__11077__auto___22034;
var G__22037 = cljs.core.count.call(null,c__11077__auto___22034);
var G__22038 = 0;
seq__19445_22023 = G__22035;
chunk__19446_22024 = G__22036;
count__19447_22025 = G__22037;
i__19448_22026 = G__22038;
continue;
}
} else
{var arg__11924__auto___22039 = cljs.core.first.call(null,seq__19445_22033__$1);a__11923__auto__.push(arg__11924__auto___22039);
{
var G__22040 = cljs.core.next.call(null,seq__19445_22033__$1);
var G__22041 = null;
var G__22042 = 0;
var G__22043 = 0;
seq__19445_22023 = G__22040;
chunk__19446_22024 = G__22041;
count__19447_22025 = G__22042;
i__19448_22026 = G__22043;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__11923__auto__);
};
var svg = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__11922__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__22044){
var args__11922__auto__ = cljs.core.seq(arglist__22044);
return svg__delegate(args__11922__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__11922__auto__){var a__11923__auto__ = [];a__11923__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11922__auto__)));
var seq__18757_22045 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__18758_22046 = null;var count__18759_22047 = 0;var i__18760_22048 = 0;while(true){
if((i__18760_22048 < count__18759_22047))
{var arg__11924__auto___22049 = cljs.core._nth.call(null,chunk__18758_22046,i__18760_22048);a__11923__auto__.push(arg__11924__auto___22049);
{
var G__22050 = seq__18757_22045;
var G__22051 = chunk__18758_22046;
var G__22052 = count__18759_22047;
var G__22053 = (i__18760_22048 + 1);
seq__18757_22045 = G__22050;
chunk__18758_22046 = G__22051;
count__18759_22047 = G__22052;
i__18760_22048 = G__22053;
continue;
}
} else
{var temp__4092__auto___22054 = cljs.core.seq.call(null,seq__18757_22045);if(temp__4092__auto___22054)
{var seq__18757_22055__$1 = temp__4092__auto___22054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18757_22055__$1))
{var c__11077__auto___22056 = cljs.core.chunk_first.call(null,seq__18757_22055__$1);{
var G__22057 = cljs.core.chunk_rest.call(null,seq__18757_22055__$1);
var G__22058 = c__11077__auto___22056;
var G__22059 = cljs.core.count.call(null,c__11077__auto___22056);
var G__22060 = 0;
seq__18757_22045 = G__22057;
chunk__18758_22046 = G__22058;
count__18759_22047 = G__22059;
i__18760_22048 = G__22060;
continue;
}
} else
{var arg__11924__auto___22061 = cljs.core.first.call(null,seq__18757_22055__$1);a__11923__auto__.push(arg__11924__auto___22061);
{
var G__22062 = cljs.core.next.call(null,seq__18757_22055__$1);
var G__22063 = null;
var G__22064 = 0;
var G__22065 = 0;
seq__18757_22045 = G__22062;
chunk__18758_22046 = G__22063;
count__18759_22047 = G__22064;
i__18760_22048 = G__22065;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__11923__auto__);
};
var text = function (var_args){
var args__11922__auto__ = null;if (arguments.length > 0) {
  args__11922__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__11922__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__22066){
var args__11922__auto__ = cljs.core.seq(arglist__22066);
return text__delegate(args__11922__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

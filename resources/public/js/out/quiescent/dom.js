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
{var o = (function (){var obj14537 = {};return obj14537;
})();var seq__14538_14544 = cljs.core.seq.call(null,obj);var chunk__14539_14545 = null;var count__14540_14546 = 0;var i__14541_14547 = 0;while(true){
if((i__14541_14547 < count__14540_14546))
{var vec__14542_14548 = cljs.core._nth.call(null,chunk__14539_14545,i__14541_14547);var k_14549 = cljs.core.nth.call(null,vec__14542_14548,0,null);var v_14550 = cljs.core.nth.call(null,vec__14542_14548,1,null);(o[cljs.core.name.call(null,k_14549)] = js_props.call(null,v_14550));
{
var G__14551 = seq__14538_14544;
var G__14552 = chunk__14539_14545;
var G__14553 = count__14540_14546;
var G__14554 = (i__14541_14547 + 1);
seq__14538_14544 = G__14551;
chunk__14539_14545 = G__14552;
count__14540_14546 = G__14553;
i__14541_14547 = G__14554;
continue;
}
} else
{var temp__4092__auto___14555 = cljs.core.seq.call(null,seq__14538_14544);if(temp__4092__auto___14555)
{var seq__14538_14556__$1 = temp__4092__auto___14555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14538_14556__$1))
{var c__11077__auto___14557 = cljs.core.chunk_first.call(null,seq__14538_14556__$1);{
var G__14558 = cljs.core.chunk_rest.call(null,seq__14538_14556__$1);
var G__14559 = c__11077__auto___14557;
var G__14560 = cljs.core.count.call(null,c__11077__auto___14557);
var G__14561 = 0;
seq__14538_14544 = G__14558;
chunk__14539_14545 = G__14559;
count__14540_14546 = G__14560;
i__14541_14547 = G__14561;
continue;
}
} else
{var vec__14543_14562 = cljs.core.first.call(null,seq__14538_14556__$1);var k_14563 = cljs.core.nth.call(null,vec__14543_14562,0,null);var v_14564 = cljs.core.nth.call(null,vec__14543_14562,1,null);(o[cljs.core.name.call(null,k_14563)] = js_props.call(null,v_14564));
{
var G__14565 = cljs.core.next.call(null,seq__14538_14556__$1);
var G__14566 = null;
var G__14567 = 0;
var G__14568 = 0;
seq__14538_14544 = G__14565;
chunk__14539_14545 = G__14566;
count__14540_14546 = G__14567;
i__14541_14547 = G__14568;
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
var seq__14573_15521 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14574_15522 = null;var count__14575_15523 = 0;var i__14576_15524 = 0;while(true){
if((i__14576_15524 < count__14575_15523))
{var arg__11924__auto___15525 = cljs.core._nth.call(null,chunk__14574_15522,i__14576_15524);a__11923__auto__.push(arg__11924__auto___15525);
{
var G__15526 = seq__14573_15521;
var G__15527 = chunk__14574_15522;
var G__15528 = count__14575_15523;
var G__15529 = (i__14576_15524 + 1);
seq__14573_15521 = G__15526;
chunk__14574_15522 = G__15527;
count__14575_15523 = G__15528;
i__14576_15524 = G__15529;
continue;
}
} else
{var temp__4092__auto___15530 = cljs.core.seq.call(null,seq__14573_15521);if(temp__4092__auto___15530)
{var seq__14573_15531__$1 = temp__4092__auto___15530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14573_15531__$1))
{var c__11077__auto___15532 = cljs.core.chunk_first.call(null,seq__14573_15531__$1);{
var G__15533 = cljs.core.chunk_rest.call(null,seq__14573_15531__$1);
var G__15534 = c__11077__auto___15532;
var G__15535 = cljs.core.count.call(null,c__11077__auto___15532);
var G__15536 = 0;
seq__14573_15521 = G__15533;
chunk__14574_15522 = G__15534;
count__14575_15523 = G__15535;
i__14576_15524 = G__15536;
continue;
}
} else
{var arg__11924__auto___15537 = cljs.core.first.call(null,seq__14573_15531__$1);a__11923__auto__.push(arg__11924__auto___15537);
{
var G__15538 = cljs.core.next.call(null,seq__14573_15531__$1);
var G__15539 = null;
var G__15540 = 0;
var G__15541 = 0;
seq__14573_15521 = G__15538;
chunk__14574_15522 = G__15539;
count__14575_15523 = G__15540;
i__14576_15524 = G__15541;
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
a.cljs$lang$applyTo = (function (arglist__15542){
var args__11922__auto__ = cljs.core.seq(arglist__15542);
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
var seq__14581_15543 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14582_15544 = null;var count__14583_15545 = 0;var i__14584_15546 = 0;while(true){
if((i__14584_15546 < count__14583_15545))
{var arg__11924__auto___15547 = cljs.core._nth.call(null,chunk__14582_15544,i__14584_15546);a__11923__auto__.push(arg__11924__auto___15547);
{
var G__15548 = seq__14581_15543;
var G__15549 = chunk__14582_15544;
var G__15550 = count__14583_15545;
var G__15551 = (i__14584_15546 + 1);
seq__14581_15543 = G__15548;
chunk__14582_15544 = G__15549;
count__14583_15545 = G__15550;
i__14584_15546 = G__15551;
continue;
}
} else
{var temp__4092__auto___15552 = cljs.core.seq.call(null,seq__14581_15543);if(temp__4092__auto___15552)
{var seq__14581_15553__$1 = temp__4092__auto___15552;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14581_15553__$1))
{var c__11077__auto___15554 = cljs.core.chunk_first.call(null,seq__14581_15553__$1);{
var G__15555 = cljs.core.chunk_rest.call(null,seq__14581_15553__$1);
var G__15556 = c__11077__auto___15554;
var G__15557 = cljs.core.count.call(null,c__11077__auto___15554);
var G__15558 = 0;
seq__14581_15543 = G__15555;
chunk__14582_15544 = G__15556;
count__14583_15545 = G__15557;
i__14584_15546 = G__15558;
continue;
}
} else
{var arg__11924__auto___15559 = cljs.core.first.call(null,seq__14581_15553__$1);a__11923__auto__.push(arg__11924__auto___15559);
{
var G__15560 = cljs.core.next.call(null,seq__14581_15553__$1);
var G__15561 = null;
var G__15562 = 0;
var G__15563 = 0;
seq__14581_15543 = G__15560;
chunk__14582_15544 = G__15561;
count__14583_15545 = G__15562;
i__14584_15546 = G__15563;
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
abbr.cljs$lang$applyTo = (function (arglist__15564){
var args__11922__auto__ = cljs.core.seq(arglist__15564);
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
var seq__14589_15565 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14590_15566 = null;var count__14591_15567 = 0;var i__14592_15568 = 0;while(true){
if((i__14592_15568 < count__14591_15567))
{var arg__11924__auto___15569 = cljs.core._nth.call(null,chunk__14590_15566,i__14592_15568);a__11923__auto__.push(arg__11924__auto___15569);
{
var G__15570 = seq__14589_15565;
var G__15571 = chunk__14590_15566;
var G__15572 = count__14591_15567;
var G__15573 = (i__14592_15568 + 1);
seq__14589_15565 = G__15570;
chunk__14590_15566 = G__15571;
count__14591_15567 = G__15572;
i__14592_15568 = G__15573;
continue;
}
} else
{var temp__4092__auto___15574 = cljs.core.seq.call(null,seq__14589_15565);if(temp__4092__auto___15574)
{var seq__14589_15575__$1 = temp__4092__auto___15574;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14589_15575__$1))
{var c__11077__auto___15576 = cljs.core.chunk_first.call(null,seq__14589_15575__$1);{
var G__15577 = cljs.core.chunk_rest.call(null,seq__14589_15575__$1);
var G__15578 = c__11077__auto___15576;
var G__15579 = cljs.core.count.call(null,c__11077__auto___15576);
var G__15580 = 0;
seq__14589_15565 = G__15577;
chunk__14590_15566 = G__15578;
count__14591_15567 = G__15579;
i__14592_15568 = G__15580;
continue;
}
} else
{var arg__11924__auto___15581 = cljs.core.first.call(null,seq__14589_15575__$1);a__11923__auto__.push(arg__11924__auto___15581);
{
var G__15582 = cljs.core.next.call(null,seq__14589_15575__$1);
var G__15583 = null;
var G__15584 = 0;
var G__15585 = 0;
seq__14589_15565 = G__15582;
chunk__14590_15566 = G__15583;
count__14591_15567 = G__15584;
i__14592_15568 = G__15585;
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
address.cljs$lang$applyTo = (function (arglist__15586){
var args__11922__auto__ = cljs.core.seq(arglist__15586);
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
var seq__14597_15587 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14598_15588 = null;var count__14599_15589 = 0;var i__14600_15590 = 0;while(true){
if((i__14600_15590 < count__14599_15589))
{var arg__11924__auto___15591 = cljs.core._nth.call(null,chunk__14598_15588,i__14600_15590);a__11923__auto__.push(arg__11924__auto___15591);
{
var G__15592 = seq__14597_15587;
var G__15593 = chunk__14598_15588;
var G__15594 = count__14599_15589;
var G__15595 = (i__14600_15590 + 1);
seq__14597_15587 = G__15592;
chunk__14598_15588 = G__15593;
count__14599_15589 = G__15594;
i__14600_15590 = G__15595;
continue;
}
} else
{var temp__4092__auto___15596 = cljs.core.seq.call(null,seq__14597_15587);if(temp__4092__auto___15596)
{var seq__14597_15597__$1 = temp__4092__auto___15596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14597_15597__$1))
{var c__11077__auto___15598 = cljs.core.chunk_first.call(null,seq__14597_15597__$1);{
var G__15599 = cljs.core.chunk_rest.call(null,seq__14597_15597__$1);
var G__15600 = c__11077__auto___15598;
var G__15601 = cljs.core.count.call(null,c__11077__auto___15598);
var G__15602 = 0;
seq__14597_15587 = G__15599;
chunk__14598_15588 = G__15600;
count__14599_15589 = G__15601;
i__14600_15590 = G__15602;
continue;
}
} else
{var arg__11924__auto___15603 = cljs.core.first.call(null,seq__14597_15597__$1);a__11923__auto__.push(arg__11924__auto___15603);
{
var G__15604 = cljs.core.next.call(null,seq__14597_15597__$1);
var G__15605 = null;
var G__15606 = 0;
var G__15607 = 0;
seq__14597_15587 = G__15604;
chunk__14598_15588 = G__15605;
count__14599_15589 = G__15606;
i__14600_15590 = G__15607;
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
area.cljs$lang$applyTo = (function (arglist__15608){
var args__11922__auto__ = cljs.core.seq(arglist__15608);
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
var seq__14605_15609 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14606_15610 = null;var count__14607_15611 = 0;var i__14608_15612 = 0;while(true){
if((i__14608_15612 < count__14607_15611))
{var arg__11924__auto___15613 = cljs.core._nth.call(null,chunk__14606_15610,i__14608_15612);a__11923__auto__.push(arg__11924__auto___15613);
{
var G__15614 = seq__14605_15609;
var G__15615 = chunk__14606_15610;
var G__15616 = count__14607_15611;
var G__15617 = (i__14608_15612 + 1);
seq__14605_15609 = G__15614;
chunk__14606_15610 = G__15615;
count__14607_15611 = G__15616;
i__14608_15612 = G__15617;
continue;
}
} else
{var temp__4092__auto___15618 = cljs.core.seq.call(null,seq__14605_15609);if(temp__4092__auto___15618)
{var seq__14605_15619__$1 = temp__4092__auto___15618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14605_15619__$1))
{var c__11077__auto___15620 = cljs.core.chunk_first.call(null,seq__14605_15619__$1);{
var G__15621 = cljs.core.chunk_rest.call(null,seq__14605_15619__$1);
var G__15622 = c__11077__auto___15620;
var G__15623 = cljs.core.count.call(null,c__11077__auto___15620);
var G__15624 = 0;
seq__14605_15609 = G__15621;
chunk__14606_15610 = G__15622;
count__14607_15611 = G__15623;
i__14608_15612 = G__15624;
continue;
}
} else
{var arg__11924__auto___15625 = cljs.core.first.call(null,seq__14605_15619__$1);a__11923__auto__.push(arg__11924__auto___15625);
{
var G__15626 = cljs.core.next.call(null,seq__14605_15619__$1);
var G__15627 = null;
var G__15628 = 0;
var G__15629 = 0;
seq__14605_15609 = G__15626;
chunk__14606_15610 = G__15627;
count__14607_15611 = G__15628;
i__14608_15612 = G__15629;
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
article.cljs$lang$applyTo = (function (arglist__15630){
var args__11922__auto__ = cljs.core.seq(arglist__15630);
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
var seq__14613_15631 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14614_15632 = null;var count__14615_15633 = 0;var i__14616_15634 = 0;while(true){
if((i__14616_15634 < count__14615_15633))
{var arg__11924__auto___15635 = cljs.core._nth.call(null,chunk__14614_15632,i__14616_15634);a__11923__auto__.push(arg__11924__auto___15635);
{
var G__15636 = seq__14613_15631;
var G__15637 = chunk__14614_15632;
var G__15638 = count__14615_15633;
var G__15639 = (i__14616_15634 + 1);
seq__14613_15631 = G__15636;
chunk__14614_15632 = G__15637;
count__14615_15633 = G__15638;
i__14616_15634 = G__15639;
continue;
}
} else
{var temp__4092__auto___15640 = cljs.core.seq.call(null,seq__14613_15631);if(temp__4092__auto___15640)
{var seq__14613_15641__$1 = temp__4092__auto___15640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14613_15641__$1))
{var c__11077__auto___15642 = cljs.core.chunk_first.call(null,seq__14613_15641__$1);{
var G__15643 = cljs.core.chunk_rest.call(null,seq__14613_15641__$1);
var G__15644 = c__11077__auto___15642;
var G__15645 = cljs.core.count.call(null,c__11077__auto___15642);
var G__15646 = 0;
seq__14613_15631 = G__15643;
chunk__14614_15632 = G__15644;
count__14615_15633 = G__15645;
i__14616_15634 = G__15646;
continue;
}
} else
{var arg__11924__auto___15647 = cljs.core.first.call(null,seq__14613_15641__$1);a__11923__auto__.push(arg__11924__auto___15647);
{
var G__15648 = cljs.core.next.call(null,seq__14613_15641__$1);
var G__15649 = null;
var G__15650 = 0;
var G__15651 = 0;
seq__14613_15631 = G__15648;
chunk__14614_15632 = G__15649;
count__14615_15633 = G__15650;
i__14616_15634 = G__15651;
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
aside.cljs$lang$applyTo = (function (arglist__15652){
var args__11922__auto__ = cljs.core.seq(arglist__15652);
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
var seq__14621_15653 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14622_15654 = null;var count__14623_15655 = 0;var i__14624_15656 = 0;while(true){
if((i__14624_15656 < count__14623_15655))
{var arg__11924__auto___15657 = cljs.core._nth.call(null,chunk__14622_15654,i__14624_15656);a__11923__auto__.push(arg__11924__auto___15657);
{
var G__15658 = seq__14621_15653;
var G__15659 = chunk__14622_15654;
var G__15660 = count__14623_15655;
var G__15661 = (i__14624_15656 + 1);
seq__14621_15653 = G__15658;
chunk__14622_15654 = G__15659;
count__14623_15655 = G__15660;
i__14624_15656 = G__15661;
continue;
}
} else
{var temp__4092__auto___15662 = cljs.core.seq.call(null,seq__14621_15653);if(temp__4092__auto___15662)
{var seq__14621_15663__$1 = temp__4092__auto___15662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14621_15663__$1))
{var c__11077__auto___15664 = cljs.core.chunk_first.call(null,seq__14621_15663__$1);{
var G__15665 = cljs.core.chunk_rest.call(null,seq__14621_15663__$1);
var G__15666 = c__11077__auto___15664;
var G__15667 = cljs.core.count.call(null,c__11077__auto___15664);
var G__15668 = 0;
seq__14621_15653 = G__15665;
chunk__14622_15654 = G__15666;
count__14623_15655 = G__15667;
i__14624_15656 = G__15668;
continue;
}
} else
{var arg__11924__auto___15669 = cljs.core.first.call(null,seq__14621_15663__$1);a__11923__auto__.push(arg__11924__auto___15669);
{
var G__15670 = cljs.core.next.call(null,seq__14621_15663__$1);
var G__15671 = null;
var G__15672 = 0;
var G__15673 = 0;
seq__14621_15653 = G__15670;
chunk__14622_15654 = G__15671;
count__14623_15655 = G__15672;
i__14624_15656 = G__15673;
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
audio.cljs$lang$applyTo = (function (arglist__15674){
var args__11922__auto__ = cljs.core.seq(arglist__15674);
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
var seq__14629_15675 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14630_15676 = null;var count__14631_15677 = 0;var i__14632_15678 = 0;while(true){
if((i__14632_15678 < count__14631_15677))
{var arg__11924__auto___15679 = cljs.core._nth.call(null,chunk__14630_15676,i__14632_15678);a__11923__auto__.push(arg__11924__auto___15679);
{
var G__15680 = seq__14629_15675;
var G__15681 = chunk__14630_15676;
var G__15682 = count__14631_15677;
var G__15683 = (i__14632_15678 + 1);
seq__14629_15675 = G__15680;
chunk__14630_15676 = G__15681;
count__14631_15677 = G__15682;
i__14632_15678 = G__15683;
continue;
}
} else
{var temp__4092__auto___15684 = cljs.core.seq.call(null,seq__14629_15675);if(temp__4092__auto___15684)
{var seq__14629_15685__$1 = temp__4092__auto___15684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14629_15685__$1))
{var c__11077__auto___15686 = cljs.core.chunk_first.call(null,seq__14629_15685__$1);{
var G__15687 = cljs.core.chunk_rest.call(null,seq__14629_15685__$1);
var G__15688 = c__11077__auto___15686;
var G__15689 = cljs.core.count.call(null,c__11077__auto___15686);
var G__15690 = 0;
seq__14629_15675 = G__15687;
chunk__14630_15676 = G__15688;
count__14631_15677 = G__15689;
i__14632_15678 = G__15690;
continue;
}
} else
{var arg__11924__auto___15691 = cljs.core.first.call(null,seq__14629_15685__$1);a__11923__auto__.push(arg__11924__auto___15691);
{
var G__15692 = cljs.core.next.call(null,seq__14629_15685__$1);
var G__15693 = null;
var G__15694 = 0;
var G__15695 = 0;
seq__14629_15675 = G__15692;
chunk__14630_15676 = G__15693;
count__14631_15677 = G__15694;
i__14632_15678 = G__15695;
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
b.cljs$lang$applyTo = (function (arglist__15696){
var args__11922__auto__ = cljs.core.seq(arglist__15696);
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
var seq__14637_15697 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14638_15698 = null;var count__14639_15699 = 0;var i__14640_15700 = 0;while(true){
if((i__14640_15700 < count__14639_15699))
{var arg__11924__auto___15701 = cljs.core._nth.call(null,chunk__14638_15698,i__14640_15700);a__11923__auto__.push(arg__11924__auto___15701);
{
var G__15702 = seq__14637_15697;
var G__15703 = chunk__14638_15698;
var G__15704 = count__14639_15699;
var G__15705 = (i__14640_15700 + 1);
seq__14637_15697 = G__15702;
chunk__14638_15698 = G__15703;
count__14639_15699 = G__15704;
i__14640_15700 = G__15705;
continue;
}
} else
{var temp__4092__auto___15706 = cljs.core.seq.call(null,seq__14637_15697);if(temp__4092__auto___15706)
{var seq__14637_15707__$1 = temp__4092__auto___15706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14637_15707__$1))
{var c__11077__auto___15708 = cljs.core.chunk_first.call(null,seq__14637_15707__$1);{
var G__15709 = cljs.core.chunk_rest.call(null,seq__14637_15707__$1);
var G__15710 = c__11077__auto___15708;
var G__15711 = cljs.core.count.call(null,c__11077__auto___15708);
var G__15712 = 0;
seq__14637_15697 = G__15709;
chunk__14638_15698 = G__15710;
count__14639_15699 = G__15711;
i__14640_15700 = G__15712;
continue;
}
} else
{var arg__11924__auto___15713 = cljs.core.first.call(null,seq__14637_15707__$1);a__11923__auto__.push(arg__11924__auto___15713);
{
var G__15714 = cljs.core.next.call(null,seq__14637_15707__$1);
var G__15715 = null;
var G__15716 = 0;
var G__15717 = 0;
seq__14637_15697 = G__15714;
chunk__14638_15698 = G__15715;
count__14639_15699 = G__15716;
i__14640_15700 = G__15717;
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
base.cljs$lang$applyTo = (function (arglist__15718){
var args__11922__auto__ = cljs.core.seq(arglist__15718);
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
var seq__14645_15719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14646_15720 = null;var count__14647_15721 = 0;var i__14648_15722 = 0;while(true){
if((i__14648_15722 < count__14647_15721))
{var arg__11924__auto___15723 = cljs.core._nth.call(null,chunk__14646_15720,i__14648_15722);a__11923__auto__.push(arg__11924__auto___15723);
{
var G__15724 = seq__14645_15719;
var G__15725 = chunk__14646_15720;
var G__15726 = count__14647_15721;
var G__15727 = (i__14648_15722 + 1);
seq__14645_15719 = G__15724;
chunk__14646_15720 = G__15725;
count__14647_15721 = G__15726;
i__14648_15722 = G__15727;
continue;
}
} else
{var temp__4092__auto___15728 = cljs.core.seq.call(null,seq__14645_15719);if(temp__4092__auto___15728)
{var seq__14645_15729__$1 = temp__4092__auto___15728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14645_15729__$1))
{var c__11077__auto___15730 = cljs.core.chunk_first.call(null,seq__14645_15729__$1);{
var G__15731 = cljs.core.chunk_rest.call(null,seq__14645_15729__$1);
var G__15732 = c__11077__auto___15730;
var G__15733 = cljs.core.count.call(null,c__11077__auto___15730);
var G__15734 = 0;
seq__14645_15719 = G__15731;
chunk__14646_15720 = G__15732;
count__14647_15721 = G__15733;
i__14648_15722 = G__15734;
continue;
}
} else
{var arg__11924__auto___15735 = cljs.core.first.call(null,seq__14645_15729__$1);a__11923__auto__.push(arg__11924__auto___15735);
{
var G__15736 = cljs.core.next.call(null,seq__14645_15729__$1);
var G__15737 = null;
var G__15738 = 0;
var G__15739 = 0;
seq__14645_15719 = G__15736;
chunk__14646_15720 = G__15737;
count__14647_15721 = G__15738;
i__14648_15722 = G__15739;
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
bdi.cljs$lang$applyTo = (function (arglist__15740){
var args__11922__auto__ = cljs.core.seq(arglist__15740);
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
var seq__14653_15741 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14654_15742 = null;var count__14655_15743 = 0;var i__14656_15744 = 0;while(true){
if((i__14656_15744 < count__14655_15743))
{var arg__11924__auto___15745 = cljs.core._nth.call(null,chunk__14654_15742,i__14656_15744);a__11923__auto__.push(arg__11924__auto___15745);
{
var G__15746 = seq__14653_15741;
var G__15747 = chunk__14654_15742;
var G__15748 = count__14655_15743;
var G__15749 = (i__14656_15744 + 1);
seq__14653_15741 = G__15746;
chunk__14654_15742 = G__15747;
count__14655_15743 = G__15748;
i__14656_15744 = G__15749;
continue;
}
} else
{var temp__4092__auto___15750 = cljs.core.seq.call(null,seq__14653_15741);if(temp__4092__auto___15750)
{var seq__14653_15751__$1 = temp__4092__auto___15750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14653_15751__$1))
{var c__11077__auto___15752 = cljs.core.chunk_first.call(null,seq__14653_15751__$1);{
var G__15753 = cljs.core.chunk_rest.call(null,seq__14653_15751__$1);
var G__15754 = c__11077__auto___15752;
var G__15755 = cljs.core.count.call(null,c__11077__auto___15752);
var G__15756 = 0;
seq__14653_15741 = G__15753;
chunk__14654_15742 = G__15754;
count__14655_15743 = G__15755;
i__14656_15744 = G__15756;
continue;
}
} else
{var arg__11924__auto___15757 = cljs.core.first.call(null,seq__14653_15751__$1);a__11923__auto__.push(arg__11924__auto___15757);
{
var G__15758 = cljs.core.next.call(null,seq__14653_15751__$1);
var G__15759 = null;
var G__15760 = 0;
var G__15761 = 0;
seq__14653_15741 = G__15758;
chunk__14654_15742 = G__15759;
count__14655_15743 = G__15760;
i__14656_15744 = G__15761;
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
bdo.cljs$lang$applyTo = (function (arglist__15762){
var args__11922__auto__ = cljs.core.seq(arglist__15762);
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
var seq__14661_15763 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14662_15764 = null;var count__14663_15765 = 0;var i__14664_15766 = 0;while(true){
if((i__14664_15766 < count__14663_15765))
{var arg__11924__auto___15767 = cljs.core._nth.call(null,chunk__14662_15764,i__14664_15766);a__11923__auto__.push(arg__11924__auto___15767);
{
var G__15768 = seq__14661_15763;
var G__15769 = chunk__14662_15764;
var G__15770 = count__14663_15765;
var G__15771 = (i__14664_15766 + 1);
seq__14661_15763 = G__15768;
chunk__14662_15764 = G__15769;
count__14663_15765 = G__15770;
i__14664_15766 = G__15771;
continue;
}
} else
{var temp__4092__auto___15772 = cljs.core.seq.call(null,seq__14661_15763);if(temp__4092__auto___15772)
{var seq__14661_15773__$1 = temp__4092__auto___15772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14661_15773__$1))
{var c__11077__auto___15774 = cljs.core.chunk_first.call(null,seq__14661_15773__$1);{
var G__15775 = cljs.core.chunk_rest.call(null,seq__14661_15773__$1);
var G__15776 = c__11077__auto___15774;
var G__15777 = cljs.core.count.call(null,c__11077__auto___15774);
var G__15778 = 0;
seq__14661_15763 = G__15775;
chunk__14662_15764 = G__15776;
count__14663_15765 = G__15777;
i__14664_15766 = G__15778;
continue;
}
} else
{var arg__11924__auto___15779 = cljs.core.first.call(null,seq__14661_15773__$1);a__11923__auto__.push(arg__11924__auto___15779);
{
var G__15780 = cljs.core.next.call(null,seq__14661_15773__$1);
var G__15781 = null;
var G__15782 = 0;
var G__15783 = 0;
seq__14661_15763 = G__15780;
chunk__14662_15764 = G__15781;
count__14663_15765 = G__15782;
i__14664_15766 = G__15783;
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
big.cljs$lang$applyTo = (function (arglist__15784){
var args__11922__auto__ = cljs.core.seq(arglist__15784);
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
var seq__14669_15785 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14670_15786 = null;var count__14671_15787 = 0;var i__14672_15788 = 0;while(true){
if((i__14672_15788 < count__14671_15787))
{var arg__11924__auto___15789 = cljs.core._nth.call(null,chunk__14670_15786,i__14672_15788);a__11923__auto__.push(arg__11924__auto___15789);
{
var G__15790 = seq__14669_15785;
var G__15791 = chunk__14670_15786;
var G__15792 = count__14671_15787;
var G__15793 = (i__14672_15788 + 1);
seq__14669_15785 = G__15790;
chunk__14670_15786 = G__15791;
count__14671_15787 = G__15792;
i__14672_15788 = G__15793;
continue;
}
} else
{var temp__4092__auto___15794 = cljs.core.seq.call(null,seq__14669_15785);if(temp__4092__auto___15794)
{var seq__14669_15795__$1 = temp__4092__auto___15794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14669_15795__$1))
{var c__11077__auto___15796 = cljs.core.chunk_first.call(null,seq__14669_15795__$1);{
var G__15797 = cljs.core.chunk_rest.call(null,seq__14669_15795__$1);
var G__15798 = c__11077__auto___15796;
var G__15799 = cljs.core.count.call(null,c__11077__auto___15796);
var G__15800 = 0;
seq__14669_15785 = G__15797;
chunk__14670_15786 = G__15798;
count__14671_15787 = G__15799;
i__14672_15788 = G__15800;
continue;
}
} else
{var arg__11924__auto___15801 = cljs.core.first.call(null,seq__14669_15795__$1);a__11923__auto__.push(arg__11924__auto___15801);
{
var G__15802 = cljs.core.next.call(null,seq__14669_15795__$1);
var G__15803 = null;
var G__15804 = 0;
var G__15805 = 0;
seq__14669_15785 = G__15802;
chunk__14670_15786 = G__15803;
count__14671_15787 = G__15804;
i__14672_15788 = G__15805;
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
blockquote.cljs$lang$applyTo = (function (arglist__15806){
var args__11922__auto__ = cljs.core.seq(arglist__15806);
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
var seq__14677_15807 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14678_15808 = null;var count__14679_15809 = 0;var i__14680_15810 = 0;while(true){
if((i__14680_15810 < count__14679_15809))
{var arg__11924__auto___15811 = cljs.core._nth.call(null,chunk__14678_15808,i__14680_15810);a__11923__auto__.push(arg__11924__auto___15811);
{
var G__15812 = seq__14677_15807;
var G__15813 = chunk__14678_15808;
var G__15814 = count__14679_15809;
var G__15815 = (i__14680_15810 + 1);
seq__14677_15807 = G__15812;
chunk__14678_15808 = G__15813;
count__14679_15809 = G__15814;
i__14680_15810 = G__15815;
continue;
}
} else
{var temp__4092__auto___15816 = cljs.core.seq.call(null,seq__14677_15807);if(temp__4092__auto___15816)
{var seq__14677_15817__$1 = temp__4092__auto___15816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14677_15817__$1))
{var c__11077__auto___15818 = cljs.core.chunk_first.call(null,seq__14677_15817__$1);{
var G__15819 = cljs.core.chunk_rest.call(null,seq__14677_15817__$1);
var G__15820 = c__11077__auto___15818;
var G__15821 = cljs.core.count.call(null,c__11077__auto___15818);
var G__15822 = 0;
seq__14677_15807 = G__15819;
chunk__14678_15808 = G__15820;
count__14679_15809 = G__15821;
i__14680_15810 = G__15822;
continue;
}
} else
{var arg__11924__auto___15823 = cljs.core.first.call(null,seq__14677_15817__$1);a__11923__auto__.push(arg__11924__auto___15823);
{
var G__15824 = cljs.core.next.call(null,seq__14677_15817__$1);
var G__15825 = null;
var G__15826 = 0;
var G__15827 = 0;
seq__14677_15807 = G__15824;
chunk__14678_15808 = G__15825;
count__14679_15809 = G__15826;
i__14680_15810 = G__15827;
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
body.cljs$lang$applyTo = (function (arglist__15828){
var args__11922__auto__ = cljs.core.seq(arglist__15828);
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
var seq__14685_15829 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14686_15830 = null;var count__14687_15831 = 0;var i__14688_15832 = 0;while(true){
if((i__14688_15832 < count__14687_15831))
{var arg__11924__auto___15833 = cljs.core._nth.call(null,chunk__14686_15830,i__14688_15832);a__11923__auto__.push(arg__11924__auto___15833);
{
var G__15834 = seq__14685_15829;
var G__15835 = chunk__14686_15830;
var G__15836 = count__14687_15831;
var G__15837 = (i__14688_15832 + 1);
seq__14685_15829 = G__15834;
chunk__14686_15830 = G__15835;
count__14687_15831 = G__15836;
i__14688_15832 = G__15837;
continue;
}
} else
{var temp__4092__auto___15838 = cljs.core.seq.call(null,seq__14685_15829);if(temp__4092__auto___15838)
{var seq__14685_15839__$1 = temp__4092__auto___15838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14685_15839__$1))
{var c__11077__auto___15840 = cljs.core.chunk_first.call(null,seq__14685_15839__$1);{
var G__15841 = cljs.core.chunk_rest.call(null,seq__14685_15839__$1);
var G__15842 = c__11077__auto___15840;
var G__15843 = cljs.core.count.call(null,c__11077__auto___15840);
var G__15844 = 0;
seq__14685_15829 = G__15841;
chunk__14686_15830 = G__15842;
count__14687_15831 = G__15843;
i__14688_15832 = G__15844;
continue;
}
} else
{var arg__11924__auto___15845 = cljs.core.first.call(null,seq__14685_15839__$1);a__11923__auto__.push(arg__11924__auto___15845);
{
var G__15846 = cljs.core.next.call(null,seq__14685_15839__$1);
var G__15847 = null;
var G__15848 = 0;
var G__15849 = 0;
seq__14685_15829 = G__15846;
chunk__14686_15830 = G__15847;
count__14687_15831 = G__15848;
i__14688_15832 = G__15849;
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
br.cljs$lang$applyTo = (function (arglist__15850){
var args__11922__auto__ = cljs.core.seq(arglist__15850);
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
var seq__14693_15851 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14694_15852 = null;var count__14695_15853 = 0;var i__14696_15854 = 0;while(true){
if((i__14696_15854 < count__14695_15853))
{var arg__11924__auto___15855 = cljs.core._nth.call(null,chunk__14694_15852,i__14696_15854);a__11923__auto__.push(arg__11924__auto___15855);
{
var G__15856 = seq__14693_15851;
var G__15857 = chunk__14694_15852;
var G__15858 = count__14695_15853;
var G__15859 = (i__14696_15854 + 1);
seq__14693_15851 = G__15856;
chunk__14694_15852 = G__15857;
count__14695_15853 = G__15858;
i__14696_15854 = G__15859;
continue;
}
} else
{var temp__4092__auto___15860 = cljs.core.seq.call(null,seq__14693_15851);if(temp__4092__auto___15860)
{var seq__14693_15861__$1 = temp__4092__auto___15860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14693_15861__$1))
{var c__11077__auto___15862 = cljs.core.chunk_first.call(null,seq__14693_15861__$1);{
var G__15863 = cljs.core.chunk_rest.call(null,seq__14693_15861__$1);
var G__15864 = c__11077__auto___15862;
var G__15865 = cljs.core.count.call(null,c__11077__auto___15862);
var G__15866 = 0;
seq__14693_15851 = G__15863;
chunk__14694_15852 = G__15864;
count__14695_15853 = G__15865;
i__14696_15854 = G__15866;
continue;
}
} else
{var arg__11924__auto___15867 = cljs.core.first.call(null,seq__14693_15861__$1);a__11923__auto__.push(arg__11924__auto___15867);
{
var G__15868 = cljs.core.next.call(null,seq__14693_15861__$1);
var G__15869 = null;
var G__15870 = 0;
var G__15871 = 0;
seq__14693_15851 = G__15868;
chunk__14694_15852 = G__15869;
count__14695_15853 = G__15870;
i__14696_15854 = G__15871;
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
button.cljs$lang$applyTo = (function (arglist__15872){
var args__11922__auto__ = cljs.core.seq(arglist__15872);
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
var seq__14701_15873 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14702_15874 = null;var count__14703_15875 = 0;var i__14704_15876 = 0;while(true){
if((i__14704_15876 < count__14703_15875))
{var arg__11924__auto___15877 = cljs.core._nth.call(null,chunk__14702_15874,i__14704_15876);a__11923__auto__.push(arg__11924__auto___15877);
{
var G__15878 = seq__14701_15873;
var G__15879 = chunk__14702_15874;
var G__15880 = count__14703_15875;
var G__15881 = (i__14704_15876 + 1);
seq__14701_15873 = G__15878;
chunk__14702_15874 = G__15879;
count__14703_15875 = G__15880;
i__14704_15876 = G__15881;
continue;
}
} else
{var temp__4092__auto___15882 = cljs.core.seq.call(null,seq__14701_15873);if(temp__4092__auto___15882)
{var seq__14701_15883__$1 = temp__4092__auto___15882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14701_15883__$1))
{var c__11077__auto___15884 = cljs.core.chunk_first.call(null,seq__14701_15883__$1);{
var G__15885 = cljs.core.chunk_rest.call(null,seq__14701_15883__$1);
var G__15886 = c__11077__auto___15884;
var G__15887 = cljs.core.count.call(null,c__11077__auto___15884);
var G__15888 = 0;
seq__14701_15873 = G__15885;
chunk__14702_15874 = G__15886;
count__14703_15875 = G__15887;
i__14704_15876 = G__15888;
continue;
}
} else
{var arg__11924__auto___15889 = cljs.core.first.call(null,seq__14701_15883__$1);a__11923__auto__.push(arg__11924__auto___15889);
{
var G__15890 = cljs.core.next.call(null,seq__14701_15883__$1);
var G__15891 = null;
var G__15892 = 0;
var G__15893 = 0;
seq__14701_15873 = G__15890;
chunk__14702_15874 = G__15891;
count__14703_15875 = G__15892;
i__14704_15876 = G__15893;
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
canvas.cljs$lang$applyTo = (function (arglist__15894){
var args__11922__auto__ = cljs.core.seq(arglist__15894);
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
var seq__14709_15895 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14710_15896 = null;var count__14711_15897 = 0;var i__14712_15898 = 0;while(true){
if((i__14712_15898 < count__14711_15897))
{var arg__11924__auto___15899 = cljs.core._nth.call(null,chunk__14710_15896,i__14712_15898);a__11923__auto__.push(arg__11924__auto___15899);
{
var G__15900 = seq__14709_15895;
var G__15901 = chunk__14710_15896;
var G__15902 = count__14711_15897;
var G__15903 = (i__14712_15898 + 1);
seq__14709_15895 = G__15900;
chunk__14710_15896 = G__15901;
count__14711_15897 = G__15902;
i__14712_15898 = G__15903;
continue;
}
} else
{var temp__4092__auto___15904 = cljs.core.seq.call(null,seq__14709_15895);if(temp__4092__auto___15904)
{var seq__14709_15905__$1 = temp__4092__auto___15904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14709_15905__$1))
{var c__11077__auto___15906 = cljs.core.chunk_first.call(null,seq__14709_15905__$1);{
var G__15907 = cljs.core.chunk_rest.call(null,seq__14709_15905__$1);
var G__15908 = c__11077__auto___15906;
var G__15909 = cljs.core.count.call(null,c__11077__auto___15906);
var G__15910 = 0;
seq__14709_15895 = G__15907;
chunk__14710_15896 = G__15908;
count__14711_15897 = G__15909;
i__14712_15898 = G__15910;
continue;
}
} else
{var arg__11924__auto___15911 = cljs.core.first.call(null,seq__14709_15905__$1);a__11923__auto__.push(arg__11924__auto___15911);
{
var G__15912 = cljs.core.next.call(null,seq__14709_15905__$1);
var G__15913 = null;
var G__15914 = 0;
var G__15915 = 0;
seq__14709_15895 = G__15912;
chunk__14710_15896 = G__15913;
count__14711_15897 = G__15914;
i__14712_15898 = G__15915;
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
caption.cljs$lang$applyTo = (function (arglist__15916){
var args__11922__auto__ = cljs.core.seq(arglist__15916);
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
var seq__14717_15917 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14718_15918 = null;var count__14719_15919 = 0;var i__14720_15920 = 0;while(true){
if((i__14720_15920 < count__14719_15919))
{var arg__11924__auto___15921 = cljs.core._nth.call(null,chunk__14718_15918,i__14720_15920);a__11923__auto__.push(arg__11924__auto___15921);
{
var G__15922 = seq__14717_15917;
var G__15923 = chunk__14718_15918;
var G__15924 = count__14719_15919;
var G__15925 = (i__14720_15920 + 1);
seq__14717_15917 = G__15922;
chunk__14718_15918 = G__15923;
count__14719_15919 = G__15924;
i__14720_15920 = G__15925;
continue;
}
} else
{var temp__4092__auto___15926 = cljs.core.seq.call(null,seq__14717_15917);if(temp__4092__auto___15926)
{var seq__14717_15927__$1 = temp__4092__auto___15926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14717_15927__$1))
{var c__11077__auto___15928 = cljs.core.chunk_first.call(null,seq__14717_15927__$1);{
var G__15929 = cljs.core.chunk_rest.call(null,seq__14717_15927__$1);
var G__15930 = c__11077__auto___15928;
var G__15931 = cljs.core.count.call(null,c__11077__auto___15928);
var G__15932 = 0;
seq__14717_15917 = G__15929;
chunk__14718_15918 = G__15930;
count__14719_15919 = G__15931;
i__14720_15920 = G__15932;
continue;
}
} else
{var arg__11924__auto___15933 = cljs.core.first.call(null,seq__14717_15927__$1);a__11923__auto__.push(arg__11924__auto___15933);
{
var G__15934 = cljs.core.next.call(null,seq__14717_15927__$1);
var G__15935 = null;
var G__15936 = 0;
var G__15937 = 0;
seq__14717_15917 = G__15934;
chunk__14718_15918 = G__15935;
count__14719_15919 = G__15936;
i__14720_15920 = G__15937;
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
cite.cljs$lang$applyTo = (function (arglist__15938){
var args__11922__auto__ = cljs.core.seq(arglist__15938);
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
var seq__14725_15939 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14726_15940 = null;var count__14727_15941 = 0;var i__14728_15942 = 0;while(true){
if((i__14728_15942 < count__14727_15941))
{var arg__11924__auto___15943 = cljs.core._nth.call(null,chunk__14726_15940,i__14728_15942);a__11923__auto__.push(arg__11924__auto___15943);
{
var G__15944 = seq__14725_15939;
var G__15945 = chunk__14726_15940;
var G__15946 = count__14727_15941;
var G__15947 = (i__14728_15942 + 1);
seq__14725_15939 = G__15944;
chunk__14726_15940 = G__15945;
count__14727_15941 = G__15946;
i__14728_15942 = G__15947;
continue;
}
} else
{var temp__4092__auto___15948 = cljs.core.seq.call(null,seq__14725_15939);if(temp__4092__auto___15948)
{var seq__14725_15949__$1 = temp__4092__auto___15948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14725_15949__$1))
{var c__11077__auto___15950 = cljs.core.chunk_first.call(null,seq__14725_15949__$1);{
var G__15951 = cljs.core.chunk_rest.call(null,seq__14725_15949__$1);
var G__15952 = c__11077__auto___15950;
var G__15953 = cljs.core.count.call(null,c__11077__auto___15950);
var G__15954 = 0;
seq__14725_15939 = G__15951;
chunk__14726_15940 = G__15952;
count__14727_15941 = G__15953;
i__14728_15942 = G__15954;
continue;
}
} else
{var arg__11924__auto___15955 = cljs.core.first.call(null,seq__14725_15949__$1);a__11923__auto__.push(arg__11924__auto___15955);
{
var G__15956 = cljs.core.next.call(null,seq__14725_15949__$1);
var G__15957 = null;
var G__15958 = 0;
var G__15959 = 0;
seq__14725_15939 = G__15956;
chunk__14726_15940 = G__15957;
count__14727_15941 = G__15958;
i__14728_15942 = G__15959;
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
code.cljs$lang$applyTo = (function (arglist__15960){
var args__11922__auto__ = cljs.core.seq(arglist__15960);
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
var seq__14733_15961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14734_15962 = null;var count__14735_15963 = 0;var i__14736_15964 = 0;while(true){
if((i__14736_15964 < count__14735_15963))
{var arg__11924__auto___15965 = cljs.core._nth.call(null,chunk__14734_15962,i__14736_15964);a__11923__auto__.push(arg__11924__auto___15965);
{
var G__15966 = seq__14733_15961;
var G__15967 = chunk__14734_15962;
var G__15968 = count__14735_15963;
var G__15969 = (i__14736_15964 + 1);
seq__14733_15961 = G__15966;
chunk__14734_15962 = G__15967;
count__14735_15963 = G__15968;
i__14736_15964 = G__15969;
continue;
}
} else
{var temp__4092__auto___15970 = cljs.core.seq.call(null,seq__14733_15961);if(temp__4092__auto___15970)
{var seq__14733_15971__$1 = temp__4092__auto___15970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14733_15971__$1))
{var c__11077__auto___15972 = cljs.core.chunk_first.call(null,seq__14733_15971__$1);{
var G__15973 = cljs.core.chunk_rest.call(null,seq__14733_15971__$1);
var G__15974 = c__11077__auto___15972;
var G__15975 = cljs.core.count.call(null,c__11077__auto___15972);
var G__15976 = 0;
seq__14733_15961 = G__15973;
chunk__14734_15962 = G__15974;
count__14735_15963 = G__15975;
i__14736_15964 = G__15976;
continue;
}
} else
{var arg__11924__auto___15977 = cljs.core.first.call(null,seq__14733_15971__$1);a__11923__auto__.push(arg__11924__auto___15977);
{
var G__15978 = cljs.core.next.call(null,seq__14733_15971__$1);
var G__15979 = null;
var G__15980 = 0;
var G__15981 = 0;
seq__14733_15961 = G__15978;
chunk__14734_15962 = G__15979;
count__14735_15963 = G__15980;
i__14736_15964 = G__15981;
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
col.cljs$lang$applyTo = (function (arglist__15982){
var args__11922__auto__ = cljs.core.seq(arglist__15982);
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
var seq__14741_15983 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14742_15984 = null;var count__14743_15985 = 0;var i__14744_15986 = 0;while(true){
if((i__14744_15986 < count__14743_15985))
{var arg__11924__auto___15987 = cljs.core._nth.call(null,chunk__14742_15984,i__14744_15986);a__11923__auto__.push(arg__11924__auto___15987);
{
var G__15988 = seq__14741_15983;
var G__15989 = chunk__14742_15984;
var G__15990 = count__14743_15985;
var G__15991 = (i__14744_15986 + 1);
seq__14741_15983 = G__15988;
chunk__14742_15984 = G__15989;
count__14743_15985 = G__15990;
i__14744_15986 = G__15991;
continue;
}
} else
{var temp__4092__auto___15992 = cljs.core.seq.call(null,seq__14741_15983);if(temp__4092__auto___15992)
{var seq__14741_15993__$1 = temp__4092__auto___15992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14741_15993__$1))
{var c__11077__auto___15994 = cljs.core.chunk_first.call(null,seq__14741_15993__$1);{
var G__15995 = cljs.core.chunk_rest.call(null,seq__14741_15993__$1);
var G__15996 = c__11077__auto___15994;
var G__15997 = cljs.core.count.call(null,c__11077__auto___15994);
var G__15998 = 0;
seq__14741_15983 = G__15995;
chunk__14742_15984 = G__15996;
count__14743_15985 = G__15997;
i__14744_15986 = G__15998;
continue;
}
} else
{var arg__11924__auto___15999 = cljs.core.first.call(null,seq__14741_15993__$1);a__11923__auto__.push(arg__11924__auto___15999);
{
var G__16000 = cljs.core.next.call(null,seq__14741_15993__$1);
var G__16001 = null;
var G__16002 = 0;
var G__16003 = 0;
seq__14741_15983 = G__16000;
chunk__14742_15984 = G__16001;
count__14743_15985 = G__16002;
i__14744_15986 = G__16003;
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
colgroup.cljs$lang$applyTo = (function (arglist__16004){
var args__11922__auto__ = cljs.core.seq(arglist__16004);
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
var seq__14749_16005 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14750_16006 = null;var count__14751_16007 = 0;var i__14752_16008 = 0;while(true){
if((i__14752_16008 < count__14751_16007))
{var arg__11924__auto___16009 = cljs.core._nth.call(null,chunk__14750_16006,i__14752_16008);a__11923__auto__.push(arg__11924__auto___16009);
{
var G__16010 = seq__14749_16005;
var G__16011 = chunk__14750_16006;
var G__16012 = count__14751_16007;
var G__16013 = (i__14752_16008 + 1);
seq__14749_16005 = G__16010;
chunk__14750_16006 = G__16011;
count__14751_16007 = G__16012;
i__14752_16008 = G__16013;
continue;
}
} else
{var temp__4092__auto___16014 = cljs.core.seq.call(null,seq__14749_16005);if(temp__4092__auto___16014)
{var seq__14749_16015__$1 = temp__4092__auto___16014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14749_16015__$1))
{var c__11077__auto___16016 = cljs.core.chunk_first.call(null,seq__14749_16015__$1);{
var G__16017 = cljs.core.chunk_rest.call(null,seq__14749_16015__$1);
var G__16018 = c__11077__auto___16016;
var G__16019 = cljs.core.count.call(null,c__11077__auto___16016);
var G__16020 = 0;
seq__14749_16005 = G__16017;
chunk__14750_16006 = G__16018;
count__14751_16007 = G__16019;
i__14752_16008 = G__16020;
continue;
}
} else
{var arg__11924__auto___16021 = cljs.core.first.call(null,seq__14749_16015__$1);a__11923__auto__.push(arg__11924__auto___16021);
{
var G__16022 = cljs.core.next.call(null,seq__14749_16015__$1);
var G__16023 = null;
var G__16024 = 0;
var G__16025 = 0;
seq__14749_16005 = G__16022;
chunk__14750_16006 = G__16023;
count__14751_16007 = G__16024;
i__14752_16008 = G__16025;
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
data.cljs$lang$applyTo = (function (arglist__16026){
var args__11922__auto__ = cljs.core.seq(arglist__16026);
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
var seq__14757_16027 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14758_16028 = null;var count__14759_16029 = 0;var i__14760_16030 = 0;while(true){
if((i__14760_16030 < count__14759_16029))
{var arg__11924__auto___16031 = cljs.core._nth.call(null,chunk__14758_16028,i__14760_16030);a__11923__auto__.push(arg__11924__auto___16031);
{
var G__16032 = seq__14757_16027;
var G__16033 = chunk__14758_16028;
var G__16034 = count__14759_16029;
var G__16035 = (i__14760_16030 + 1);
seq__14757_16027 = G__16032;
chunk__14758_16028 = G__16033;
count__14759_16029 = G__16034;
i__14760_16030 = G__16035;
continue;
}
} else
{var temp__4092__auto___16036 = cljs.core.seq.call(null,seq__14757_16027);if(temp__4092__auto___16036)
{var seq__14757_16037__$1 = temp__4092__auto___16036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14757_16037__$1))
{var c__11077__auto___16038 = cljs.core.chunk_first.call(null,seq__14757_16037__$1);{
var G__16039 = cljs.core.chunk_rest.call(null,seq__14757_16037__$1);
var G__16040 = c__11077__auto___16038;
var G__16041 = cljs.core.count.call(null,c__11077__auto___16038);
var G__16042 = 0;
seq__14757_16027 = G__16039;
chunk__14758_16028 = G__16040;
count__14759_16029 = G__16041;
i__14760_16030 = G__16042;
continue;
}
} else
{var arg__11924__auto___16043 = cljs.core.first.call(null,seq__14757_16037__$1);a__11923__auto__.push(arg__11924__auto___16043);
{
var G__16044 = cljs.core.next.call(null,seq__14757_16037__$1);
var G__16045 = null;
var G__16046 = 0;
var G__16047 = 0;
seq__14757_16027 = G__16044;
chunk__14758_16028 = G__16045;
count__14759_16029 = G__16046;
i__14760_16030 = G__16047;
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
datalist.cljs$lang$applyTo = (function (arglist__16048){
var args__11922__auto__ = cljs.core.seq(arglist__16048);
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
var seq__14765_16049 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14766_16050 = null;var count__14767_16051 = 0;var i__14768_16052 = 0;while(true){
if((i__14768_16052 < count__14767_16051))
{var arg__11924__auto___16053 = cljs.core._nth.call(null,chunk__14766_16050,i__14768_16052);a__11923__auto__.push(arg__11924__auto___16053);
{
var G__16054 = seq__14765_16049;
var G__16055 = chunk__14766_16050;
var G__16056 = count__14767_16051;
var G__16057 = (i__14768_16052 + 1);
seq__14765_16049 = G__16054;
chunk__14766_16050 = G__16055;
count__14767_16051 = G__16056;
i__14768_16052 = G__16057;
continue;
}
} else
{var temp__4092__auto___16058 = cljs.core.seq.call(null,seq__14765_16049);if(temp__4092__auto___16058)
{var seq__14765_16059__$1 = temp__4092__auto___16058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14765_16059__$1))
{var c__11077__auto___16060 = cljs.core.chunk_first.call(null,seq__14765_16059__$1);{
var G__16061 = cljs.core.chunk_rest.call(null,seq__14765_16059__$1);
var G__16062 = c__11077__auto___16060;
var G__16063 = cljs.core.count.call(null,c__11077__auto___16060);
var G__16064 = 0;
seq__14765_16049 = G__16061;
chunk__14766_16050 = G__16062;
count__14767_16051 = G__16063;
i__14768_16052 = G__16064;
continue;
}
} else
{var arg__11924__auto___16065 = cljs.core.first.call(null,seq__14765_16059__$1);a__11923__auto__.push(arg__11924__auto___16065);
{
var G__16066 = cljs.core.next.call(null,seq__14765_16059__$1);
var G__16067 = null;
var G__16068 = 0;
var G__16069 = 0;
seq__14765_16049 = G__16066;
chunk__14766_16050 = G__16067;
count__14767_16051 = G__16068;
i__14768_16052 = G__16069;
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
dd.cljs$lang$applyTo = (function (arglist__16070){
var args__11922__auto__ = cljs.core.seq(arglist__16070);
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
var seq__14773_16071 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14774_16072 = null;var count__14775_16073 = 0;var i__14776_16074 = 0;while(true){
if((i__14776_16074 < count__14775_16073))
{var arg__11924__auto___16075 = cljs.core._nth.call(null,chunk__14774_16072,i__14776_16074);a__11923__auto__.push(arg__11924__auto___16075);
{
var G__16076 = seq__14773_16071;
var G__16077 = chunk__14774_16072;
var G__16078 = count__14775_16073;
var G__16079 = (i__14776_16074 + 1);
seq__14773_16071 = G__16076;
chunk__14774_16072 = G__16077;
count__14775_16073 = G__16078;
i__14776_16074 = G__16079;
continue;
}
} else
{var temp__4092__auto___16080 = cljs.core.seq.call(null,seq__14773_16071);if(temp__4092__auto___16080)
{var seq__14773_16081__$1 = temp__4092__auto___16080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14773_16081__$1))
{var c__11077__auto___16082 = cljs.core.chunk_first.call(null,seq__14773_16081__$1);{
var G__16083 = cljs.core.chunk_rest.call(null,seq__14773_16081__$1);
var G__16084 = c__11077__auto___16082;
var G__16085 = cljs.core.count.call(null,c__11077__auto___16082);
var G__16086 = 0;
seq__14773_16071 = G__16083;
chunk__14774_16072 = G__16084;
count__14775_16073 = G__16085;
i__14776_16074 = G__16086;
continue;
}
} else
{var arg__11924__auto___16087 = cljs.core.first.call(null,seq__14773_16081__$1);a__11923__auto__.push(arg__11924__auto___16087);
{
var G__16088 = cljs.core.next.call(null,seq__14773_16081__$1);
var G__16089 = null;
var G__16090 = 0;
var G__16091 = 0;
seq__14773_16071 = G__16088;
chunk__14774_16072 = G__16089;
count__14775_16073 = G__16090;
i__14776_16074 = G__16091;
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
del.cljs$lang$applyTo = (function (arglist__16092){
var args__11922__auto__ = cljs.core.seq(arglist__16092);
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
var seq__14781_16093 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14782_16094 = null;var count__14783_16095 = 0;var i__14784_16096 = 0;while(true){
if((i__14784_16096 < count__14783_16095))
{var arg__11924__auto___16097 = cljs.core._nth.call(null,chunk__14782_16094,i__14784_16096);a__11923__auto__.push(arg__11924__auto___16097);
{
var G__16098 = seq__14781_16093;
var G__16099 = chunk__14782_16094;
var G__16100 = count__14783_16095;
var G__16101 = (i__14784_16096 + 1);
seq__14781_16093 = G__16098;
chunk__14782_16094 = G__16099;
count__14783_16095 = G__16100;
i__14784_16096 = G__16101;
continue;
}
} else
{var temp__4092__auto___16102 = cljs.core.seq.call(null,seq__14781_16093);if(temp__4092__auto___16102)
{var seq__14781_16103__$1 = temp__4092__auto___16102;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14781_16103__$1))
{var c__11077__auto___16104 = cljs.core.chunk_first.call(null,seq__14781_16103__$1);{
var G__16105 = cljs.core.chunk_rest.call(null,seq__14781_16103__$1);
var G__16106 = c__11077__auto___16104;
var G__16107 = cljs.core.count.call(null,c__11077__auto___16104);
var G__16108 = 0;
seq__14781_16093 = G__16105;
chunk__14782_16094 = G__16106;
count__14783_16095 = G__16107;
i__14784_16096 = G__16108;
continue;
}
} else
{var arg__11924__auto___16109 = cljs.core.first.call(null,seq__14781_16103__$1);a__11923__auto__.push(arg__11924__auto___16109);
{
var G__16110 = cljs.core.next.call(null,seq__14781_16103__$1);
var G__16111 = null;
var G__16112 = 0;
var G__16113 = 0;
seq__14781_16093 = G__16110;
chunk__14782_16094 = G__16111;
count__14783_16095 = G__16112;
i__14784_16096 = G__16113;
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
details.cljs$lang$applyTo = (function (arglist__16114){
var args__11922__auto__ = cljs.core.seq(arglist__16114);
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
var seq__14789_16115 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14790_16116 = null;var count__14791_16117 = 0;var i__14792_16118 = 0;while(true){
if((i__14792_16118 < count__14791_16117))
{var arg__11924__auto___16119 = cljs.core._nth.call(null,chunk__14790_16116,i__14792_16118);a__11923__auto__.push(arg__11924__auto___16119);
{
var G__16120 = seq__14789_16115;
var G__16121 = chunk__14790_16116;
var G__16122 = count__14791_16117;
var G__16123 = (i__14792_16118 + 1);
seq__14789_16115 = G__16120;
chunk__14790_16116 = G__16121;
count__14791_16117 = G__16122;
i__14792_16118 = G__16123;
continue;
}
} else
{var temp__4092__auto___16124 = cljs.core.seq.call(null,seq__14789_16115);if(temp__4092__auto___16124)
{var seq__14789_16125__$1 = temp__4092__auto___16124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14789_16125__$1))
{var c__11077__auto___16126 = cljs.core.chunk_first.call(null,seq__14789_16125__$1);{
var G__16127 = cljs.core.chunk_rest.call(null,seq__14789_16125__$1);
var G__16128 = c__11077__auto___16126;
var G__16129 = cljs.core.count.call(null,c__11077__auto___16126);
var G__16130 = 0;
seq__14789_16115 = G__16127;
chunk__14790_16116 = G__16128;
count__14791_16117 = G__16129;
i__14792_16118 = G__16130;
continue;
}
} else
{var arg__11924__auto___16131 = cljs.core.first.call(null,seq__14789_16125__$1);a__11923__auto__.push(arg__11924__auto___16131);
{
var G__16132 = cljs.core.next.call(null,seq__14789_16125__$1);
var G__16133 = null;
var G__16134 = 0;
var G__16135 = 0;
seq__14789_16115 = G__16132;
chunk__14790_16116 = G__16133;
count__14791_16117 = G__16134;
i__14792_16118 = G__16135;
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
dfn.cljs$lang$applyTo = (function (arglist__16136){
var args__11922__auto__ = cljs.core.seq(arglist__16136);
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
var seq__14797_16137 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14798_16138 = null;var count__14799_16139 = 0;var i__14800_16140 = 0;while(true){
if((i__14800_16140 < count__14799_16139))
{var arg__11924__auto___16141 = cljs.core._nth.call(null,chunk__14798_16138,i__14800_16140);a__11923__auto__.push(arg__11924__auto___16141);
{
var G__16142 = seq__14797_16137;
var G__16143 = chunk__14798_16138;
var G__16144 = count__14799_16139;
var G__16145 = (i__14800_16140 + 1);
seq__14797_16137 = G__16142;
chunk__14798_16138 = G__16143;
count__14799_16139 = G__16144;
i__14800_16140 = G__16145;
continue;
}
} else
{var temp__4092__auto___16146 = cljs.core.seq.call(null,seq__14797_16137);if(temp__4092__auto___16146)
{var seq__14797_16147__$1 = temp__4092__auto___16146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14797_16147__$1))
{var c__11077__auto___16148 = cljs.core.chunk_first.call(null,seq__14797_16147__$1);{
var G__16149 = cljs.core.chunk_rest.call(null,seq__14797_16147__$1);
var G__16150 = c__11077__auto___16148;
var G__16151 = cljs.core.count.call(null,c__11077__auto___16148);
var G__16152 = 0;
seq__14797_16137 = G__16149;
chunk__14798_16138 = G__16150;
count__14799_16139 = G__16151;
i__14800_16140 = G__16152;
continue;
}
} else
{var arg__11924__auto___16153 = cljs.core.first.call(null,seq__14797_16147__$1);a__11923__auto__.push(arg__11924__auto___16153);
{
var G__16154 = cljs.core.next.call(null,seq__14797_16147__$1);
var G__16155 = null;
var G__16156 = 0;
var G__16157 = 0;
seq__14797_16137 = G__16154;
chunk__14798_16138 = G__16155;
count__14799_16139 = G__16156;
i__14800_16140 = G__16157;
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
div.cljs$lang$applyTo = (function (arglist__16158){
var args__11922__auto__ = cljs.core.seq(arglist__16158);
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
var seq__14805_16159 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14806_16160 = null;var count__14807_16161 = 0;var i__14808_16162 = 0;while(true){
if((i__14808_16162 < count__14807_16161))
{var arg__11924__auto___16163 = cljs.core._nth.call(null,chunk__14806_16160,i__14808_16162);a__11923__auto__.push(arg__11924__auto___16163);
{
var G__16164 = seq__14805_16159;
var G__16165 = chunk__14806_16160;
var G__16166 = count__14807_16161;
var G__16167 = (i__14808_16162 + 1);
seq__14805_16159 = G__16164;
chunk__14806_16160 = G__16165;
count__14807_16161 = G__16166;
i__14808_16162 = G__16167;
continue;
}
} else
{var temp__4092__auto___16168 = cljs.core.seq.call(null,seq__14805_16159);if(temp__4092__auto___16168)
{var seq__14805_16169__$1 = temp__4092__auto___16168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14805_16169__$1))
{var c__11077__auto___16170 = cljs.core.chunk_first.call(null,seq__14805_16169__$1);{
var G__16171 = cljs.core.chunk_rest.call(null,seq__14805_16169__$1);
var G__16172 = c__11077__auto___16170;
var G__16173 = cljs.core.count.call(null,c__11077__auto___16170);
var G__16174 = 0;
seq__14805_16159 = G__16171;
chunk__14806_16160 = G__16172;
count__14807_16161 = G__16173;
i__14808_16162 = G__16174;
continue;
}
} else
{var arg__11924__auto___16175 = cljs.core.first.call(null,seq__14805_16169__$1);a__11923__auto__.push(arg__11924__auto___16175);
{
var G__16176 = cljs.core.next.call(null,seq__14805_16169__$1);
var G__16177 = null;
var G__16178 = 0;
var G__16179 = 0;
seq__14805_16159 = G__16176;
chunk__14806_16160 = G__16177;
count__14807_16161 = G__16178;
i__14808_16162 = G__16179;
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
dl.cljs$lang$applyTo = (function (arglist__16180){
var args__11922__auto__ = cljs.core.seq(arglist__16180);
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
var seq__14813_16181 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14814_16182 = null;var count__14815_16183 = 0;var i__14816_16184 = 0;while(true){
if((i__14816_16184 < count__14815_16183))
{var arg__11924__auto___16185 = cljs.core._nth.call(null,chunk__14814_16182,i__14816_16184);a__11923__auto__.push(arg__11924__auto___16185);
{
var G__16186 = seq__14813_16181;
var G__16187 = chunk__14814_16182;
var G__16188 = count__14815_16183;
var G__16189 = (i__14816_16184 + 1);
seq__14813_16181 = G__16186;
chunk__14814_16182 = G__16187;
count__14815_16183 = G__16188;
i__14816_16184 = G__16189;
continue;
}
} else
{var temp__4092__auto___16190 = cljs.core.seq.call(null,seq__14813_16181);if(temp__4092__auto___16190)
{var seq__14813_16191__$1 = temp__4092__auto___16190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14813_16191__$1))
{var c__11077__auto___16192 = cljs.core.chunk_first.call(null,seq__14813_16191__$1);{
var G__16193 = cljs.core.chunk_rest.call(null,seq__14813_16191__$1);
var G__16194 = c__11077__auto___16192;
var G__16195 = cljs.core.count.call(null,c__11077__auto___16192);
var G__16196 = 0;
seq__14813_16181 = G__16193;
chunk__14814_16182 = G__16194;
count__14815_16183 = G__16195;
i__14816_16184 = G__16196;
continue;
}
} else
{var arg__11924__auto___16197 = cljs.core.first.call(null,seq__14813_16191__$1);a__11923__auto__.push(arg__11924__auto___16197);
{
var G__16198 = cljs.core.next.call(null,seq__14813_16191__$1);
var G__16199 = null;
var G__16200 = 0;
var G__16201 = 0;
seq__14813_16181 = G__16198;
chunk__14814_16182 = G__16199;
count__14815_16183 = G__16200;
i__14816_16184 = G__16201;
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
dt.cljs$lang$applyTo = (function (arglist__16202){
var args__11922__auto__ = cljs.core.seq(arglist__16202);
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
var seq__14821_16203 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14822_16204 = null;var count__14823_16205 = 0;var i__14824_16206 = 0;while(true){
if((i__14824_16206 < count__14823_16205))
{var arg__11924__auto___16207 = cljs.core._nth.call(null,chunk__14822_16204,i__14824_16206);a__11923__auto__.push(arg__11924__auto___16207);
{
var G__16208 = seq__14821_16203;
var G__16209 = chunk__14822_16204;
var G__16210 = count__14823_16205;
var G__16211 = (i__14824_16206 + 1);
seq__14821_16203 = G__16208;
chunk__14822_16204 = G__16209;
count__14823_16205 = G__16210;
i__14824_16206 = G__16211;
continue;
}
} else
{var temp__4092__auto___16212 = cljs.core.seq.call(null,seq__14821_16203);if(temp__4092__auto___16212)
{var seq__14821_16213__$1 = temp__4092__auto___16212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14821_16213__$1))
{var c__11077__auto___16214 = cljs.core.chunk_first.call(null,seq__14821_16213__$1);{
var G__16215 = cljs.core.chunk_rest.call(null,seq__14821_16213__$1);
var G__16216 = c__11077__auto___16214;
var G__16217 = cljs.core.count.call(null,c__11077__auto___16214);
var G__16218 = 0;
seq__14821_16203 = G__16215;
chunk__14822_16204 = G__16216;
count__14823_16205 = G__16217;
i__14824_16206 = G__16218;
continue;
}
} else
{var arg__11924__auto___16219 = cljs.core.first.call(null,seq__14821_16213__$1);a__11923__auto__.push(arg__11924__auto___16219);
{
var G__16220 = cljs.core.next.call(null,seq__14821_16213__$1);
var G__16221 = null;
var G__16222 = 0;
var G__16223 = 0;
seq__14821_16203 = G__16220;
chunk__14822_16204 = G__16221;
count__14823_16205 = G__16222;
i__14824_16206 = G__16223;
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
em.cljs$lang$applyTo = (function (arglist__16224){
var args__11922__auto__ = cljs.core.seq(arglist__16224);
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
var seq__14837_16225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14838_16226 = null;var count__14839_16227 = 0;var i__14840_16228 = 0;while(true){
if((i__14840_16228 < count__14839_16227))
{var arg__11924__auto___16229 = cljs.core._nth.call(null,chunk__14838_16226,i__14840_16228);a__11923__auto__.push(arg__11924__auto___16229);
{
var G__16230 = seq__14837_16225;
var G__16231 = chunk__14838_16226;
var G__16232 = count__14839_16227;
var G__16233 = (i__14840_16228 + 1);
seq__14837_16225 = G__16230;
chunk__14838_16226 = G__16231;
count__14839_16227 = G__16232;
i__14840_16228 = G__16233;
continue;
}
} else
{var temp__4092__auto___16234 = cljs.core.seq.call(null,seq__14837_16225);if(temp__4092__auto___16234)
{var seq__14837_16235__$1 = temp__4092__auto___16234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14837_16235__$1))
{var c__11077__auto___16236 = cljs.core.chunk_first.call(null,seq__14837_16235__$1);{
var G__16237 = cljs.core.chunk_rest.call(null,seq__14837_16235__$1);
var G__16238 = c__11077__auto___16236;
var G__16239 = cljs.core.count.call(null,c__11077__auto___16236);
var G__16240 = 0;
seq__14837_16225 = G__16237;
chunk__14838_16226 = G__16238;
count__14839_16227 = G__16239;
i__14840_16228 = G__16240;
continue;
}
} else
{var arg__11924__auto___16241 = cljs.core.first.call(null,seq__14837_16235__$1);a__11923__auto__.push(arg__11924__auto___16241);
{
var G__16242 = cljs.core.next.call(null,seq__14837_16235__$1);
var G__16243 = null;
var G__16244 = 0;
var G__16245 = 0;
seq__14837_16225 = G__16242;
chunk__14838_16226 = G__16243;
count__14839_16227 = G__16244;
i__14840_16228 = G__16245;
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
embed.cljs$lang$applyTo = (function (arglist__16246){
var args__11922__auto__ = cljs.core.seq(arglist__16246);
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
var seq__14845_16247 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14846_16248 = null;var count__14847_16249 = 0;var i__14848_16250 = 0;while(true){
if((i__14848_16250 < count__14847_16249))
{var arg__11924__auto___16251 = cljs.core._nth.call(null,chunk__14846_16248,i__14848_16250);a__11923__auto__.push(arg__11924__auto___16251);
{
var G__16252 = seq__14845_16247;
var G__16253 = chunk__14846_16248;
var G__16254 = count__14847_16249;
var G__16255 = (i__14848_16250 + 1);
seq__14845_16247 = G__16252;
chunk__14846_16248 = G__16253;
count__14847_16249 = G__16254;
i__14848_16250 = G__16255;
continue;
}
} else
{var temp__4092__auto___16256 = cljs.core.seq.call(null,seq__14845_16247);if(temp__4092__auto___16256)
{var seq__14845_16257__$1 = temp__4092__auto___16256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14845_16257__$1))
{var c__11077__auto___16258 = cljs.core.chunk_first.call(null,seq__14845_16257__$1);{
var G__16259 = cljs.core.chunk_rest.call(null,seq__14845_16257__$1);
var G__16260 = c__11077__auto___16258;
var G__16261 = cljs.core.count.call(null,c__11077__auto___16258);
var G__16262 = 0;
seq__14845_16247 = G__16259;
chunk__14846_16248 = G__16260;
count__14847_16249 = G__16261;
i__14848_16250 = G__16262;
continue;
}
} else
{var arg__11924__auto___16263 = cljs.core.first.call(null,seq__14845_16257__$1);a__11923__auto__.push(arg__11924__auto___16263);
{
var G__16264 = cljs.core.next.call(null,seq__14845_16257__$1);
var G__16265 = null;
var G__16266 = 0;
var G__16267 = 0;
seq__14845_16247 = G__16264;
chunk__14846_16248 = G__16265;
count__14847_16249 = G__16266;
i__14848_16250 = G__16267;
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
fieldset.cljs$lang$applyTo = (function (arglist__16268){
var args__11922__auto__ = cljs.core.seq(arglist__16268);
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
var seq__14853_16269 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14854_16270 = null;var count__14855_16271 = 0;var i__14856_16272 = 0;while(true){
if((i__14856_16272 < count__14855_16271))
{var arg__11924__auto___16273 = cljs.core._nth.call(null,chunk__14854_16270,i__14856_16272);a__11923__auto__.push(arg__11924__auto___16273);
{
var G__16274 = seq__14853_16269;
var G__16275 = chunk__14854_16270;
var G__16276 = count__14855_16271;
var G__16277 = (i__14856_16272 + 1);
seq__14853_16269 = G__16274;
chunk__14854_16270 = G__16275;
count__14855_16271 = G__16276;
i__14856_16272 = G__16277;
continue;
}
} else
{var temp__4092__auto___16278 = cljs.core.seq.call(null,seq__14853_16269);if(temp__4092__auto___16278)
{var seq__14853_16279__$1 = temp__4092__auto___16278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14853_16279__$1))
{var c__11077__auto___16280 = cljs.core.chunk_first.call(null,seq__14853_16279__$1);{
var G__16281 = cljs.core.chunk_rest.call(null,seq__14853_16279__$1);
var G__16282 = c__11077__auto___16280;
var G__16283 = cljs.core.count.call(null,c__11077__auto___16280);
var G__16284 = 0;
seq__14853_16269 = G__16281;
chunk__14854_16270 = G__16282;
count__14855_16271 = G__16283;
i__14856_16272 = G__16284;
continue;
}
} else
{var arg__11924__auto___16285 = cljs.core.first.call(null,seq__14853_16279__$1);a__11923__auto__.push(arg__11924__auto___16285);
{
var G__16286 = cljs.core.next.call(null,seq__14853_16279__$1);
var G__16287 = null;
var G__16288 = 0;
var G__16289 = 0;
seq__14853_16269 = G__16286;
chunk__14854_16270 = G__16287;
count__14855_16271 = G__16288;
i__14856_16272 = G__16289;
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
figcaption.cljs$lang$applyTo = (function (arglist__16290){
var args__11922__auto__ = cljs.core.seq(arglist__16290);
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
var seq__14861_16291 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14862_16292 = null;var count__14863_16293 = 0;var i__14864_16294 = 0;while(true){
if((i__14864_16294 < count__14863_16293))
{var arg__11924__auto___16295 = cljs.core._nth.call(null,chunk__14862_16292,i__14864_16294);a__11923__auto__.push(arg__11924__auto___16295);
{
var G__16296 = seq__14861_16291;
var G__16297 = chunk__14862_16292;
var G__16298 = count__14863_16293;
var G__16299 = (i__14864_16294 + 1);
seq__14861_16291 = G__16296;
chunk__14862_16292 = G__16297;
count__14863_16293 = G__16298;
i__14864_16294 = G__16299;
continue;
}
} else
{var temp__4092__auto___16300 = cljs.core.seq.call(null,seq__14861_16291);if(temp__4092__auto___16300)
{var seq__14861_16301__$1 = temp__4092__auto___16300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14861_16301__$1))
{var c__11077__auto___16302 = cljs.core.chunk_first.call(null,seq__14861_16301__$1);{
var G__16303 = cljs.core.chunk_rest.call(null,seq__14861_16301__$1);
var G__16304 = c__11077__auto___16302;
var G__16305 = cljs.core.count.call(null,c__11077__auto___16302);
var G__16306 = 0;
seq__14861_16291 = G__16303;
chunk__14862_16292 = G__16304;
count__14863_16293 = G__16305;
i__14864_16294 = G__16306;
continue;
}
} else
{var arg__11924__auto___16307 = cljs.core.first.call(null,seq__14861_16301__$1);a__11923__auto__.push(arg__11924__auto___16307);
{
var G__16308 = cljs.core.next.call(null,seq__14861_16301__$1);
var G__16309 = null;
var G__16310 = 0;
var G__16311 = 0;
seq__14861_16291 = G__16308;
chunk__14862_16292 = G__16309;
count__14863_16293 = G__16310;
i__14864_16294 = G__16311;
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
figure.cljs$lang$applyTo = (function (arglist__16312){
var args__11922__auto__ = cljs.core.seq(arglist__16312);
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
var seq__14869_16313 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14870_16314 = null;var count__14871_16315 = 0;var i__14872_16316 = 0;while(true){
if((i__14872_16316 < count__14871_16315))
{var arg__11924__auto___16317 = cljs.core._nth.call(null,chunk__14870_16314,i__14872_16316);a__11923__auto__.push(arg__11924__auto___16317);
{
var G__16318 = seq__14869_16313;
var G__16319 = chunk__14870_16314;
var G__16320 = count__14871_16315;
var G__16321 = (i__14872_16316 + 1);
seq__14869_16313 = G__16318;
chunk__14870_16314 = G__16319;
count__14871_16315 = G__16320;
i__14872_16316 = G__16321;
continue;
}
} else
{var temp__4092__auto___16322 = cljs.core.seq.call(null,seq__14869_16313);if(temp__4092__auto___16322)
{var seq__14869_16323__$1 = temp__4092__auto___16322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14869_16323__$1))
{var c__11077__auto___16324 = cljs.core.chunk_first.call(null,seq__14869_16323__$1);{
var G__16325 = cljs.core.chunk_rest.call(null,seq__14869_16323__$1);
var G__16326 = c__11077__auto___16324;
var G__16327 = cljs.core.count.call(null,c__11077__auto___16324);
var G__16328 = 0;
seq__14869_16313 = G__16325;
chunk__14870_16314 = G__16326;
count__14871_16315 = G__16327;
i__14872_16316 = G__16328;
continue;
}
} else
{var arg__11924__auto___16329 = cljs.core.first.call(null,seq__14869_16323__$1);a__11923__auto__.push(arg__11924__auto___16329);
{
var G__16330 = cljs.core.next.call(null,seq__14869_16323__$1);
var G__16331 = null;
var G__16332 = 0;
var G__16333 = 0;
seq__14869_16313 = G__16330;
chunk__14870_16314 = G__16331;
count__14871_16315 = G__16332;
i__14872_16316 = G__16333;
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
footer.cljs$lang$applyTo = (function (arglist__16334){
var args__11922__auto__ = cljs.core.seq(arglist__16334);
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
var seq__14877_16335 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14878_16336 = null;var count__14879_16337 = 0;var i__14880_16338 = 0;while(true){
if((i__14880_16338 < count__14879_16337))
{var arg__11924__auto___16339 = cljs.core._nth.call(null,chunk__14878_16336,i__14880_16338);a__11923__auto__.push(arg__11924__auto___16339);
{
var G__16340 = seq__14877_16335;
var G__16341 = chunk__14878_16336;
var G__16342 = count__14879_16337;
var G__16343 = (i__14880_16338 + 1);
seq__14877_16335 = G__16340;
chunk__14878_16336 = G__16341;
count__14879_16337 = G__16342;
i__14880_16338 = G__16343;
continue;
}
} else
{var temp__4092__auto___16344 = cljs.core.seq.call(null,seq__14877_16335);if(temp__4092__auto___16344)
{var seq__14877_16345__$1 = temp__4092__auto___16344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14877_16345__$1))
{var c__11077__auto___16346 = cljs.core.chunk_first.call(null,seq__14877_16345__$1);{
var G__16347 = cljs.core.chunk_rest.call(null,seq__14877_16345__$1);
var G__16348 = c__11077__auto___16346;
var G__16349 = cljs.core.count.call(null,c__11077__auto___16346);
var G__16350 = 0;
seq__14877_16335 = G__16347;
chunk__14878_16336 = G__16348;
count__14879_16337 = G__16349;
i__14880_16338 = G__16350;
continue;
}
} else
{var arg__11924__auto___16351 = cljs.core.first.call(null,seq__14877_16345__$1);a__11923__auto__.push(arg__11924__auto___16351);
{
var G__16352 = cljs.core.next.call(null,seq__14877_16345__$1);
var G__16353 = null;
var G__16354 = 0;
var G__16355 = 0;
seq__14877_16335 = G__16352;
chunk__14878_16336 = G__16353;
count__14879_16337 = G__16354;
i__14880_16338 = G__16355;
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
form.cljs$lang$applyTo = (function (arglist__16356){
var args__11922__auto__ = cljs.core.seq(arglist__16356);
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
var seq__14885_16357 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14886_16358 = null;var count__14887_16359 = 0;var i__14888_16360 = 0;while(true){
if((i__14888_16360 < count__14887_16359))
{var arg__11924__auto___16361 = cljs.core._nth.call(null,chunk__14886_16358,i__14888_16360);a__11923__auto__.push(arg__11924__auto___16361);
{
var G__16362 = seq__14885_16357;
var G__16363 = chunk__14886_16358;
var G__16364 = count__14887_16359;
var G__16365 = (i__14888_16360 + 1);
seq__14885_16357 = G__16362;
chunk__14886_16358 = G__16363;
count__14887_16359 = G__16364;
i__14888_16360 = G__16365;
continue;
}
} else
{var temp__4092__auto___16366 = cljs.core.seq.call(null,seq__14885_16357);if(temp__4092__auto___16366)
{var seq__14885_16367__$1 = temp__4092__auto___16366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14885_16367__$1))
{var c__11077__auto___16368 = cljs.core.chunk_first.call(null,seq__14885_16367__$1);{
var G__16369 = cljs.core.chunk_rest.call(null,seq__14885_16367__$1);
var G__16370 = c__11077__auto___16368;
var G__16371 = cljs.core.count.call(null,c__11077__auto___16368);
var G__16372 = 0;
seq__14885_16357 = G__16369;
chunk__14886_16358 = G__16370;
count__14887_16359 = G__16371;
i__14888_16360 = G__16372;
continue;
}
} else
{var arg__11924__auto___16373 = cljs.core.first.call(null,seq__14885_16367__$1);a__11923__auto__.push(arg__11924__auto___16373);
{
var G__16374 = cljs.core.next.call(null,seq__14885_16367__$1);
var G__16375 = null;
var G__16376 = 0;
var G__16377 = 0;
seq__14885_16357 = G__16374;
chunk__14886_16358 = G__16375;
count__14887_16359 = G__16376;
i__14888_16360 = G__16377;
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
h1.cljs$lang$applyTo = (function (arglist__16378){
var args__11922__auto__ = cljs.core.seq(arglist__16378);
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
var seq__14893_16379 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14894_16380 = null;var count__14895_16381 = 0;var i__14896_16382 = 0;while(true){
if((i__14896_16382 < count__14895_16381))
{var arg__11924__auto___16383 = cljs.core._nth.call(null,chunk__14894_16380,i__14896_16382);a__11923__auto__.push(arg__11924__auto___16383);
{
var G__16384 = seq__14893_16379;
var G__16385 = chunk__14894_16380;
var G__16386 = count__14895_16381;
var G__16387 = (i__14896_16382 + 1);
seq__14893_16379 = G__16384;
chunk__14894_16380 = G__16385;
count__14895_16381 = G__16386;
i__14896_16382 = G__16387;
continue;
}
} else
{var temp__4092__auto___16388 = cljs.core.seq.call(null,seq__14893_16379);if(temp__4092__auto___16388)
{var seq__14893_16389__$1 = temp__4092__auto___16388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14893_16389__$1))
{var c__11077__auto___16390 = cljs.core.chunk_first.call(null,seq__14893_16389__$1);{
var G__16391 = cljs.core.chunk_rest.call(null,seq__14893_16389__$1);
var G__16392 = c__11077__auto___16390;
var G__16393 = cljs.core.count.call(null,c__11077__auto___16390);
var G__16394 = 0;
seq__14893_16379 = G__16391;
chunk__14894_16380 = G__16392;
count__14895_16381 = G__16393;
i__14896_16382 = G__16394;
continue;
}
} else
{var arg__11924__auto___16395 = cljs.core.first.call(null,seq__14893_16389__$1);a__11923__auto__.push(arg__11924__auto___16395);
{
var G__16396 = cljs.core.next.call(null,seq__14893_16389__$1);
var G__16397 = null;
var G__16398 = 0;
var G__16399 = 0;
seq__14893_16379 = G__16396;
chunk__14894_16380 = G__16397;
count__14895_16381 = G__16398;
i__14896_16382 = G__16399;
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
h2.cljs$lang$applyTo = (function (arglist__16400){
var args__11922__auto__ = cljs.core.seq(arglist__16400);
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
var seq__14901_16401 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14902_16402 = null;var count__14903_16403 = 0;var i__14904_16404 = 0;while(true){
if((i__14904_16404 < count__14903_16403))
{var arg__11924__auto___16405 = cljs.core._nth.call(null,chunk__14902_16402,i__14904_16404);a__11923__auto__.push(arg__11924__auto___16405);
{
var G__16406 = seq__14901_16401;
var G__16407 = chunk__14902_16402;
var G__16408 = count__14903_16403;
var G__16409 = (i__14904_16404 + 1);
seq__14901_16401 = G__16406;
chunk__14902_16402 = G__16407;
count__14903_16403 = G__16408;
i__14904_16404 = G__16409;
continue;
}
} else
{var temp__4092__auto___16410 = cljs.core.seq.call(null,seq__14901_16401);if(temp__4092__auto___16410)
{var seq__14901_16411__$1 = temp__4092__auto___16410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14901_16411__$1))
{var c__11077__auto___16412 = cljs.core.chunk_first.call(null,seq__14901_16411__$1);{
var G__16413 = cljs.core.chunk_rest.call(null,seq__14901_16411__$1);
var G__16414 = c__11077__auto___16412;
var G__16415 = cljs.core.count.call(null,c__11077__auto___16412);
var G__16416 = 0;
seq__14901_16401 = G__16413;
chunk__14902_16402 = G__16414;
count__14903_16403 = G__16415;
i__14904_16404 = G__16416;
continue;
}
} else
{var arg__11924__auto___16417 = cljs.core.first.call(null,seq__14901_16411__$1);a__11923__auto__.push(arg__11924__auto___16417);
{
var G__16418 = cljs.core.next.call(null,seq__14901_16411__$1);
var G__16419 = null;
var G__16420 = 0;
var G__16421 = 0;
seq__14901_16401 = G__16418;
chunk__14902_16402 = G__16419;
count__14903_16403 = G__16420;
i__14904_16404 = G__16421;
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
h3.cljs$lang$applyTo = (function (arglist__16422){
var args__11922__auto__ = cljs.core.seq(arglist__16422);
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
var seq__14909_16423 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14910_16424 = null;var count__14911_16425 = 0;var i__14912_16426 = 0;while(true){
if((i__14912_16426 < count__14911_16425))
{var arg__11924__auto___16427 = cljs.core._nth.call(null,chunk__14910_16424,i__14912_16426);a__11923__auto__.push(arg__11924__auto___16427);
{
var G__16428 = seq__14909_16423;
var G__16429 = chunk__14910_16424;
var G__16430 = count__14911_16425;
var G__16431 = (i__14912_16426 + 1);
seq__14909_16423 = G__16428;
chunk__14910_16424 = G__16429;
count__14911_16425 = G__16430;
i__14912_16426 = G__16431;
continue;
}
} else
{var temp__4092__auto___16432 = cljs.core.seq.call(null,seq__14909_16423);if(temp__4092__auto___16432)
{var seq__14909_16433__$1 = temp__4092__auto___16432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14909_16433__$1))
{var c__11077__auto___16434 = cljs.core.chunk_first.call(null,seq__14909_16433__$1);{
var G__16435 = cljs.core.chunk_rest.call(null,seq__14909_16433__$1);
var G__16436 = c__11077__auto___16434;
var G__16437 = cljs.core.count.call(null,c__11077__auto___16434);
var G__16438 = 0;
seq__14909_16423 = G__16435;
chunk__14910_16424 = G__16436;
count__14911_16425 = G__16437;
i__14912_16426 = G__16438;
continue;
}
} else
{var arg__11924__auto___16439 = cljs.core.first.call(null,seq__14909_16433__$1);a__11923__auto__.push(arg__11924__auto___16439);
{
var G__16440 = cljs.core.next.call(null,seq__14909_16433__$1);
var G__16441 = null;
var G__16442 = 0;
var G__16443 = 0;
seq__14909_16423 = G__16440;
chunk__14910_16424 = G__16441;
count__14911_16425 = G__16442;
i__14912_16426 = G__16443;
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
h4.cljs$lang$applyTo = (function (arglist__16444){
var args__11922__auto__ = cljs.core.seq(arglist__16444);
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
var seq__14917_16445 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14918_16446 = null;var count__14919_16447 = 0;var i__14920_16448 = 0;while(true){
if((i__14920_16448 < count__14919_16447))
{var arg__11924__auto___16449 = cljs.core._nth.call(null,chunk__14918_16446,i__14920_16448);a__11923__auto__.push(arg__11924__auto___16449);
{
var G__16450 = seq__14917_16445;
var G__16451 = chunk__14918_16446;
var G__16452 = count__14919_16447;
var G__16453 = (i__14920_16448 + 1);
seq__14917_16445 = G__16450;
chunk__14918_16446 = G__16451;
count__14919_16447 = G__16452;
i__14920_16448 = G__16453;
continue;
}
} else
{var temp__4092__auto___16454 = cljs.core.seq.call(null,seq__14917_16445);if(temp__4092__auto___16454)
{var seq__14917_16455__$1 = temp__4092__auto___16454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14917_16455__$1))
{var c__11077__auto___16456 = cljs.core.chunk_first.call(null,seq__14917_16455__$1);{
var G__16457 = cljs.core.chunk_rest.call(null,seq__14917_16455__$1);
var G__16458 = c__11077__auto___16456;
var G__16459 = cljs.core.count.call(null,c__11077__auto___16456);
var G__16460 = 0;
seq__14917_16445 = G__16457;
chunk__14918_16446 = G__16458;
count__14919_16447 = G__16459;
i__14920_16448 = G__16460;
continue;
}
} else
{var arg__11924__auto___16461 = cljs.core.first.call(null,seq__14917_16455__$1);a__11923__auto__.push(arg__11924__auto___16461);
{
var G__16462 = cljs.core.next.call(null,seq__14917_16455__$1);
var G__16463 = null;
var G__16464 = 0;
var G__16465 = 0;
seq__14917_16445 = G__16462;
chunk__14918_16446 = G__16463;
count__14919_16447 = G__16464;
i__14920_16448 = G__16465;
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
h5.cljs$lang$applyTo = (function (arglist__16466){
var args__11922__auto__ = cljs.core.seq(arglist__16466);
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
var seq__14925_16467 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14926_16468 = null;var count__14927_16469 = 0;var i__14928_16470 = 0;while(true){
if((i__14928_16470 < count__14927_16469))
{var arg__11924__auto___16471 = cljs.core._nth.call(null,chunk__14926_16468,i__14928_16470);a__11923__auto__.push(arg__11924__auto___16471);
{
var G__16472 = seq__14925_16467;
var G__16473 = chunk__14926_16468;
var G__16474 = count__14927_16469;
var G__16475 = (i__14928_16470 + 1);
seq__14925_16467 = G__16472;
chunk__14926_16468 = G__16473;
count__14927_16469 = G__16474;
i__14928_16470 = G__16475;
continue;
}
} else
{var temp__4092__auto___16476 = cljs.core.seq.call(null,seq__14925_16467);if(temp__4092__auto___16476)
{var seq__14925_16477__$1 = temp__4092__auto___16476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14925_16477__$1))
{var c__11077__auto___16478 = cljs.core.chunk_first.call(null,seq__14925_16477__$1);{
var G__16479 = cljs.core.chunk_rest.call(null,seq__14925_16477__$1);
var G__16480 = c__11077__auto___16478;
var G__16481 = cljs.core.count.call(null,c__11077__auto___16478);
var G__16482 = 0;
seq__14925_16467 = G__16479;
chunk__14926_16468 = G__16480;
count__14927_16469 = G__16481;
i__14928_16470 = G__16482;
continue;
}
} else
{var arg__11924__auto___16483 = cljs.core.first.call(null,seq__14925_16477__$1);a__11923__auto__.push(arg__11924__auto___16483);
{
var G__16484 = cljs.core.next.call(null,seq__14925_16477__$1);
var G__16485 = null;
var G__16486 = 0;
var G__16487 = 0;
seq__14925_16467 = G__16484;
chunk__14926_16468 = G__16485;
count__14927_16469 = G__16486;
i__14928_16470 = G__16487;
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
h6.cljs$lang$applyTo = (function (arglist__16488){
var args__11922__auto__ = cljs.core.seq(arglist__16488);
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
var seq__14933_16489 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14934_16490 = null;var count__14935_16491 = 0;var i__14936_16492 = 0;while(true){
if((i__14936_16492 < count__14935_16491))
{var arg__11924__auto___16493 = cljs.core._nth.call(null,chunk__14934_16490,i__14936_16492);a__11923__auto__.push(arg__11924__auto___16493);
{
var G__16494 = seq__14933_16489;
var G__16495 = chunk__14934_16490;
var G__16496 = count__14935_16491;
var G__16497 = (i__14936_16492 + 1);
seq__14933_16489 = G__16494;
chunk__14934_16490 = G__16495;
count__14935_16491 = G__16496;
i__14936_16492 = G__16497;
continue;
}
} else
{var temp__4092__auto___16498 = cljs.core.seq.call(null,seq__14933_16489);if(temp__4092__auto___16498)
{var seq__14933_16499__$1 = temp__4092__auto___16498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14933_16499__$1))
{var c__11077__auto___16500 = cljs.core.chunk_first.call(null,seq__14933_16499__$1);{
var G__16501 = cljs.core.chunk_rest.call(null,seq__14933_16499__$1);
var G__16502 = c__11077__auto___16500;
var G__16503 = cljs.core.count.call(null,c__11077__auto___16500);
var G__16504 = 0;
seq__14933_16489 = G__16501;
chunk__14934_16490 = G__16502;
count__14935_16491 = G__16503;
i__14936_16492 = G__16504;
continue;
}
} else
{var arg__11924__auto___16505 = cljs.core.first.call(null,seq__14933_16499__$1);a__11923__auto__.push(arg__11924__auto___16505);
{
var G__16506 = cljs.core.next.call(null,seq__14933_16499__$1);
var G__16507 = null;
var G__16508 = 0;
var G__16509 = 0;
seq__14933_16489 = G__16506;
chunk__14934_16490 = G__16507;
count__14935_16491 = G__16508;
i__14936_16492 = G__16509;
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
head.cljs$lang$applyTo = (function (arglist__16510){
var args__11922__auto__ = cljs.core.seq(arglist__16510);
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
var seq__14941_16511 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14942_16512 = null;var count__14943_16513 = 0;var i__14944_16514 = 0;while(true){
if((i__14944_16514 < count__14943_16513))
{var arg__11924__auto___16515 = cljs.core._nth.call(null,chunk__14942_16512,i__14944_16514);a__11923__auto__.push(arg__11924__auto___16515);
{
var G__16516 = seq__14941_16511;
var G__16517 = chunk__14942_16512;
var G__16518 = count__14943_16513;
var G__16519 = (i__14944_16514 + 1);
seq__14941_16511 = G__16516;
chunk__14942_16512 = G__16517;
count__14943_16513 = G__16518;
i__14944_16514 = G__16519;
continue;
}
} else
{var temp__4092__auto___16520 = cljs.core.seq.call(null,seq__14941_16511);if(temp__4092__auto___16520)
{var seq__14941_16521__$1 = temp__4092__auto___16520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14941_16521__$1))
{var c__11077__auto___16522 = cljs.core.chunk_first.call(null,seq__14941_16521__$1);{
var G__16523 = cljs.core.chunk_rest.call(null,seq__14941_16521__$1);
var G__16524 = c__11077__auto___16522;
var G__16525 = cljs.core.count.call(null,c__11077__auto___16522);
var G__16526 = 0;
seq__14941_16511 = G__16523;
chunk__14942_16512 = G__16524;
count__14943_16513 = G__16525;
i__14944_16514 = G__16526;
continue;
}
} else
{var arg__11924__auto___16527 = cljs.core.first.call(null,seq__14941_16521__$1);a__11923__auto__.push(arg__11924__auto___16527);
{
var G__16528 = cljs.core.next.call(null,seq__14941_16521__$1);
var G__16529 = null;
var G__16530 = 0;
var G__16531 = 0;
seq__14941_16511 = G__16528;
chunk__14942_16512 = G__16529;
count__14943_16513 = G__16530;
i__14944_16514 = G__16531;
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
header.cljs$lang$applyTo = (function (arglist__16532){
var args__11922__auto__ = cljs.core.seq(arglist__16532);
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
var seq__14949_16533 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14950_16534 = null;var count__14951_16535 = 0;var i__14952_16536 = 0;while(true){
if((i__14952_16536 < count__14951_16535))
{var arg__11924__auto___16537 = cljs.core._nth.call(null,chunk__14950_16534,i__14952_16536);a__11923__auto__.push(arg__11924__auto___16537);
{
var G__16538 = seq__14949_16533;
var G__16539 = chunk__14950_16534;
var G__16540 = count__14951_16535;
var G__16541 = (i__14952_16536 + 1);
seq__14949_16533 = G__16538;
chunk__14950_16534 = G__16539;
count__14951_16535 = G__16540;
i__14952_16536 = G__16541;
continue;
}
} else
{var temp__4092__auto___16542 = cljs.core.seq.call(null,seq__14949_16533);if(temp__4092__auto___16542)
{var seq__14949_16543__$1 = temp__4092__auto___16542;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14949_16543__$1))
{var c__11077__auto___16544 = cljs.core.chunk_first.call(null,seq__14949_16543__$1);{
var G__16545 = cljs.core.chunk_rest.call(null,seq__14949_16543__$1);
var G__16546 = c__11077__auto___16544;
var G__16547 = cljs.core.count.call(null,c__11077__auto___16544);
var G__16548 = 0;
seq__14949_16533 = G__16545;
chunk__14950_16534 = G__16546;
count__14951_16535 = G__16547;
i__14952_16536 = G__16548;
continue;
}
} else
{var arg__11924__auto___16549 = cljs.core.first.call(null,seq__14949_16543__$1);a__11923__auto__.push(arg__11924__auto___16549);
{
var G__16550 = cljs.core.next.call(null,seq__14949_16543__$1);
var G__16551 = null;
var G__16552 = 0;
var G__16553 = 0;
seq__14949_16533 = G__16550;
chunk__14950_16534 = G__16551;
count__14951_16535 = G__16552;
i__14952_16536 = G__16553;
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
hr.cljs$lang$applyTo = (function (arglist__16554){
var args__11922__auto__ = cljs.core.seq(arglist__16554);
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
var seq__14957_16555 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14958_16556 = null;var count__14959_16557 = 0;var i__14960_16558 = 0;while(true){
if((i__14960_16558 < count__14959_16557))
{var arg__11924__auto___16559 = cljs.core._nth.call(null,chunk__14958_16556,i__14960_16558);a__11923__auto__.push(arg__11924__auto___16559);
{
var G__16560 = seq__14957_16555;
var G__16561 = chunk__14958_16556;
var G__16562 = count__14959_16557;
var G__16563 = (i__14960_16558 + 1);
seq__14957_16555 = G__16560;
chunk__14958_16556 = G__16561;
count__14959_16557 = G__16562;
i__14960_16558 = G__16563;
continue;
}
} else
{var temp__4092__auto___16564 = cljs.core.seq.call(null,seq__14957_16555);if(temp__4092__auto___16564)
{var seq__14957_16565__$1 = temp__4092__auto___16564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14957_16565__$1))
{var c__11077__auto___16566 = cljs.core.chunk_first.call(null,seq__14957_16565__$1);{
var G__16567 = cljs.core.chunk_rest.call(null,seq__14957_16565__$1);
var G__16568 = c__11077__auto___16566;
var G__16569 = cljs.core.count.call(null,c__11077__auto___16566);
var G__16570 = 0;
seq__14957_16555 = G__16567;
chunk__14958_16556 = G__16568;
count__14959_16557 = G__16569;
i__14960_16558 = G__16570;
continue;
}
} else
{var arg__11924__auto___16571 = cljs.core.first.call(null,seq__14957_16565__$1);a__11923__auto__.push(arg__11924__auto___16571);
{
var G__16572 = cljs.core.next.call(null,seq__14957_16565__$1);
var G__16573 = null;
var G__16574 = 0;
var G__16575 = 0;
seq__14957_16555 = G__16572;
chunk__14958_16556 = G__16573;
count__14959_16557 = G__16574;
i__14960_16558 = G__16575;
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
html.cljs$lang$applyTo = (function (arglist__16576){
var args__11922__auto__ = cljs.core.seq(arglist__16576);
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
var seq__14965_16577 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14966_16578 = null;var count__14967_16579 = 0;var i__14968_16580 = 0;while(true){
if((i__14968_16580 < count__14967_16579))
{var arg__11924__auto___16581 = cljs.core._nth.call(null,chunk__14966_16578,i__14968_16580);a__11923__auto__.push(arg__11924__auto___16581);
{
var G__16582 = seq__14965_16577;
var G__16583 = chunk__14966_16578;
var G__16584 = count__14967_16579;
var G__16585 = (i__14968_16580 + 1);
seq__14965_16577 = G__16582;
chunk__14966_16578 = G__16583;
count__14967_16579 = G__16584;
i__14968_16580 = G__16585;
continue;
}
} else
{var temp__4092__auto___16586 = cljs.core.seq.call(null,seq__14965_16577);if(temp__4092__auto___16586)
{var seq__14965_16587__$1 = temp__4092__auto___16586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14965_16587__$1))
{var c__11077__auto___16588 = cljs.core.chunk_first.call(null,seq__14965_16587__$1);{
var G__16589 = cljs.core.chunk_rest.call(null,seq__14965_16587__$1);
var G__16590 = c__11077__auto___16588;
var G__16591 = cljs.core.count.call(null,c__11077__auto___16588);
var G__16592 = 0;
seq__14965_16577 = G__16589;
chunk__14966_16578 = G__16590;
count__14967_16579 = G__16591;
i__14968_16580 = G__16592;
continue;
}
} else
{var arg__11924__auto___16593 = cljs.core.first.call(null,seq__14965_16587__$1);a__11923__auto__.push(arg__11924__auto___16593);
{
var G__16594 = cljs.core.next.call(null,seq__14965_16587__$1);
var G__16595 = null;
var G__16596 = 0;
var G__16597 = 0;
seq__14965_16577 = G__16594;
chunk__14966_16578 = G__16595;
count__14967_16579 = G__16596;
i__14968_16580 = G__16597;
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
i.cljs$lang$applyTo = (function (arglist__16598){
var args__11922__auto__ = cljs.core.seq(arglist__16598);
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
var seq__14973_16599 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14974_16600 = null;var count__14975_16601 = 0;var i__14976_16602 = 0;while(true){
if((i__14976_16602 < count__14975_16601))
{var arg__11924__auto___16603 = cljs.core._nth.call(null,chunk__14974_16600,i__14976_16602);a__11923__auto__.push(arg__11924__auto___16603);
{
var G__16604 = seq__14973_16599;
var G__16605 = chunk__14974_16600;
var G__16606 = count__14975_16601;
var G__16607 = (i__14976_16602 + 1);
seq__14973_16599 = G__16604;
chunk__14974_16600 = G__16605;
count__14975_16601 = G__16606;
i__14976_16602 = G__16607;
continue;
}
} else
{var temp__4092__auto___16608 = cljs.core.seq.call(null,seq__14973_16599);if(temp__4092__auto___16608)
{var seq__14973_16609__$1 = temp__4092__auto___16608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14973_16609__$1))
{var c__11077__auto___16610 = cljs.core.chunk_first.call(null,seq__14973_16609__$1);{
var G__16611 = cljs.core.chunk_rest.call(null,seq__14973_16609__$1);
var G__16612 = c__11077__auto___16610;
var G__16613 = cljs.core.count.call(null,c__11077__auto___16610);
var G__16614 = 0;
seq__14973_16599 = G__16611;
chunk__14974_16600 = G__16612;
count__14975_16601 = G__16613;
i__14976_16602 = G__16614;
continue;
}
} else
{var arg__11924__auto___16615 = cljs.core.first.call(null,seq__14973_16609__$1);a__11923__auto__.push(arg__11924__auto___16615);
{
var G__16616 = cljs.core.next.call(null,seq__14973_16609__$1);
var G__16617 = null;
var G__16618 = 0;
var G__16619 = 0;
seq__14973_16599 = G__16616;
chunk__14974_16600 = G__16617;
count__14975_16601 = G__16618;
i__14976_16602 = G__16619;
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
iframe.cljs$lang$applyTo = (function (arglist__16620){
var args__11922__auto__ = cljs.core.seq(arglist__16620);
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
var seq__14981_16621 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14982_16622 = null;var count__14983_16623 = 0;var i__14984_16624 = 0;while(true){
if((i__14984_16624 < count__14983_16623))
{var arg__11924__auto___16625 = cljs.core._nth.call(null,chunk__14982_16622,i__14984_16624);a__11923__auto__.push(arg__11924__auto___16625);
{
var G__16626 = seq__14981_16621;
var G__16627 = chunk__14982_16622;
var G__16628 = count__14983_16623;
var G__16629 = (i__14984_16624 + 1);
seq__14981_16621 = G__16626;
chunk__14982_16622 = G__16627;
count__14983_16623 = G__16628;
i__14984_16624 = G__16629;
continue;
}
} else
{var temp__4092__auto___16630 = cljs.core.seq.call(null,seq__14981_16621);if(temp__4092__auto___16630)
{var seq__14981_16631__$1 = temp__4092__auto___16630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14981_16631__$1))
{var c__11077__auto___16632 = cljs.core.chunk_first.call(null,seq__14981_16631__$1);{
var G__16633 = cljs.core.chunk_rest.call(null,seq__14981_16631__$1);
var G__16634 = c__11077__auto___16632;
var G__16635 = cljs.core.count.call(null,c__11077__auto___16632);
var G__16636 = 0;
seq__14981_16621 = G__16633;
chunk__14982_16622 = G__16634;
count__14983_16623 = G__16635;
i__14984_16624 = G__16636;
continue;
}
} else
{var arg__11924__auto___16637 = cljs.core.first.call(null,seq__14981_16631__$1);a__11923__auto__.push(arg__11924__auto___16637);
{
var G__16638 = cljs.core.next.call(null,seq__14981_16631__$1);
var G__16639 = null;
var G__16640 = 0;
var G__16641 = 0;
seq__14981_16621 = G__16638;
chunk__14982_16622 = G__16639;
count__14983_16623 = G__16640;
i__14984_16624 = G__16641;
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
img.cljs$lang$applyTo = (function (arglist__16642){
var args__11922__auto__ = cljs.core.seq(arglist__16642);
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
var seq__14989_16643 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14990_16644 = null;var count__14991_16645 = 0;var i__14992_16646 = 0;while(true){
if((i__14992_16646 < count__14991_16645))
{var arg__11924__auto___16647 = cljs.core._nth.call(null,chunk__14990_16644,i__14992_16646);a__11923__auto__.push(arg__11924__auto___16647);
{
var G__16648 = seq__14989_16643;
var G__16649 = chunk__14990_16644;
var G__16650 = count__14991_16645;
var G__16651 = (i__14992_16646 + 1);
seq__14989_16643 = G__16648;
chunk__14990_16644 = G__16649;
count__14991_16645 = G__16650;
i__14992_16646 = G__16651;
continue;
}
} else
{var temp__4092__auto___16652 = cljs.core.seq.call(null,seq__14989_16643);if(temp__4092__auto___16652)
{var seq__14989_16653__$1 = temp__4092__auto___16652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14989_16653__$1))
{var c__11077__auto___16654 = cljs.core.chunk_first.call(null,seq__14989_16653__$1);{
var G__16655 = cljs.core.chunk_rest.call(null,seq__14989_16653__$1);
var G__16656 = c__11077__auto___16654;
var G__16657 = cljs.core.count.call(null,c__11077__auto___16654);
var G__16658 = 0;
seq__14989_16643 = G__16655;
chunk__14990_16644 = G__16656;
count__14991_16645 = G__16657;
i__14992_16646 = G__16658;
continue;
}
} else
{var arg__11924__auto___16659 = cljs.core.first.call(null,seq__14989_16653__$1);a__11923__auto__.push(arg__11924__auto___16659);
{
var G__16660 = cljs.core.next.call(null,seq__14989_16653__$1);
var G__16661 = null;
var G__16662 = 0;
var G__16663 = 0;
seq__14989_16643 = G__16660;
chunk__14990_16644 = G__16661;
count__14991_16645 = G__16662;
i__14992_16646 = G__16663;
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
input.cljs$lang$applyTo = (function (arglist__16664){
var args__11922__auto__ = cljs.core.seq(arglist__16664);
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
var seq__14997_16665 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14998_16666 = null;var count__14999_16667 = 0;var i__15000_16668 = 0;while(true){
if((i__15000_16668 < count__14999_16667))
{var arg__11924__auto___16669 = cljs.core._nth.call(null,chunk__14998_16666,i__15000_16668);a__11923__auto__.push(arg__11924__auto___16669);
{
var G__16670 = seq__14997_16665;
var G__16671 = chunk__14998_16666;
var G__16672 = count__14999_16667;
var G__16673 = (i__15000_16668 + 1);
seq__14997_16665 = G__16670;
chunk__14998_16666 = G__16671;
count__14999_16667 = G__16672;
i__15000_16668 = G__16673;
continue;
}
} else
{var temp__4092__auto___16674 = cljs.core.seq.call(null,seq__14997_16665);if(temp__4092__auto___16674)
{var seq__14997_16675__$1 = temp__4092__auto___16674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14997_16675__$1))
{var c__11077__auto___16676 = cljs.core.chunk_first.call(null,seq__14997_16675__$1);{
var G__16677 = cljs.core.chunk_rest.call(null,seq__14997_16675__$1);
var G__16678 = c__11077__auto___16676;
var G__16679 = cljs.core.count.call(null,c__11077__auto___16676);
var G__16680 = 0;
seq__14997_16665 = G__16677;
chunk__14998_16666 = G__16678;
count__14999_16667 = G__16679;
i__15000_16668 = G__16680;
continue;
}
} else
{var arg__11924__auto___16681 = cljs.core.first.call(null,seq__14997_16675__$1);a__11923__auto__.push(arg__11924__auto___16681);
{
var G__16682 = cljs.core.next.call(null,seq__14997_16675__$1);
var G__16683 = null;
var G__16684 = 0;
var G__16685 = 0;
seq__14997_16665 = G__16682;
chunk__14998_16666 = G__16683;
count__14999_16667 = G__16684;
i__15000_16668 = G__16685;
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
ins.cljs$lang$applyTo = (function (arglist__16686){
var args__11922__auto__ = cljs.core.seq(arglist__16686);
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
var seq__15005_16687 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15006_16688 = null;var count__15007_16689 = 0;var i__15008_16690 = 0;while(true){
if((i__15008_16690 < count__15007_16689))
{var arg__11924__auto___16691 = cljs.core._nth.call(null,chunk__15006_16688,i__15008_16690);a__11923__auto__.push(arg__11924__auto___16691);
{
var G__16692 = seq__15005_16687;
var G__16693 = chunk__15006_16688;
var G__16694 = count__15007_16689;
var G__16695 = (i__15008_16690 + 1);
seq__15005_16687 = G__16692;
chunk__15006_16688 = G__16693;
count__15007_16689 = G__16694;
i__15008_16690 = G__16695;
continue;
}
} else
{var temp__4092__auto___16696 = cljs.core.seq.call(null,seq__15005_16687);if(temp__4092__auto___16696)
{var seq__15005_16697__$1 = temp__4092__auto___16696;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15005_16697__$1))
{var c__11077__auto___16698 = cljs.core.chunk_first.call(null,seq__15005_16697__$1);{
var G__16699 = cljs.core.chunk_rest.call(null,seq__15005_16697__$1);
var G__16700 = c__11077__auto___16698;
var G__16701 = cljs.core.count.call(null,c__11077__auto___16698);
var G__16702 = 0;
seq__15005_16687 = G__16699;
chunk__15006_16688 = G__16700;
count__15007_16689 = G__16701;
i__15008_16690 = G__16702;
continue;
}
} else
{var arg__11924__auto___16703 = cljs.core.first.call(null,seq__15005_16697__$1);a__11923__auto__.push(arg__11924__auto___16703);
{
var G__16704 = cljs.core.next.call(null,seq__15005_16697__$1);
var G__16705 = null;
var G__16706 = 0;
var G__16707 = 0;
seq__15005_16687 = G__16704;
chunk__15006_16688 = G__16705;
count__15007_16689 = G__16706;
i__15008_16690 = G__16707;
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
kbd.cljs$lang$applyTo = (function (arglist__16708){
var args__11922__auto__ = cljs.core.seq(arglist__16708);
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
var seq__15013_16709 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15014_16710 = null;var count__15015_16711 = 0;var i__15016_16712 = 0;while(true){
if((i__15016_16712 < count__15015_16711))
{var arg__11924__auto___16713 = cljs.core._nth.call(null,chunk__15014_16710,i__15016_16712);a__11923__auto__.push(arg__11924__auto___16713);
{
var G__16714 = seq__15013_16709;
var G__16715 = chunk__15014_16710;
var G__16716 = count__15015_16711;
var G__16717 = (i__15016_16712 + 1);
seq__15013_16709 = G__16714;
chunk__15014_16710 = G__16715;
count__15015_16711 = G__16716;
i__15016_16712 = G__16717;
continue;
}
} else
{var temp__4092__auto___16718 = cljs.core.seq.call(null,seq__15013_16709);if(temp__4092__auto___16718)
{var seq__15013_16719__$1 = temp__4092__auto___16718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15013_16719__$1))
{var c__11077__auto___16720 = cljs.core.chunk_first.call(null,seq__15013_16719__$1);{
var G__16721 = cljs.core.chunk_rest.call(null,seq__15013_16719__$1);
var G__16722 = c__11077__auto___16720;
var G__16723 = cljs.core.count.call(null,c__11077__auto___16720);
var G__16724 = 0;
seq__15013_16709 = G__16721;
chunk__15014_16710 = G__16722;
count__15015_16711 = G__16723;
i__15016_16712 = G__16724;
continue;
}
} else
{var arg__11924__auto___16725 = cljs.core.first.call(null,seq__15013_16719__$1);a__11923__auto__.push(arg__11924__auto___16725);
{
var G__16726 = cljs.core.next.call(null,seq__15013_16719__$1);
var G__16727 = null;
var G__16728 = 0;
var G__16729 = 0;
seq__15013_16709 = G__16726;
chunk__15014_16710 = G__16727;
count__15015_16711 = G__16728;
i__15016_16712 = G__16729;
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
keygen.cljs$lang$applyTo = (function (arglist__16730){
var args__11922__auto__ = cljs.core.seq(arglist__16730);
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
var seq__15021_16731 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15022_16732 = null;var count__15023_16733 = 0;var i__15024_16734 = 0;while(true){
if((i__15024_16734 < count__15023_16733))
{var arg__11924__auto___16735 = cljs.core._nth.call(null,chunk__15022_16732,i__15024_16734);a__11923__auto__.push(arg__11924__auto___16735);
{
var G__16736 = seq__15021_16731;
var G__16737 = chunk__15022_16732;
var G__16738 = count__15023_16733;
var G__16739 = (i__15024_16734 + 1);
seq__15021_16731 = G__16736;
chunk__15022_16732 = G__16737;
count__15023_16733 = G__16738;
i__15024_16734 = G__16739;
continue;
}
} else
{var temp__4092__auto___16740 = cljs.core.seq.call(null,seq__15021_16731);if(temp__4092__auto___16740)
{var seq__15021_16741__$1 = temp__4092__auto___16740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15021_16741__$1))
{var c__11077__auto___16742 = cljs.core.chunk_first.call(null,seq__15021_16741__$1);{
var G__16743 = cljs.core.chunk_rest.call(null,seq__15021_16741__$1);
var G__16744 = c__11077__auto___16742;
var G__16745 = cljs.core.count.call(null,c__11077__auto___16742);
var G__16746 = 0;
seq__15021_16731 = G__16743;
chunk__15022_16732 = G__16744;
count__15023_16733 = G__16745;
i__15024_16734 = G__16746;
continue;
}
} else
{var arg__11924__auto___16747 = cljs.core.first.call(null,seq__15021_16741__$1);a__11923__auto__.push(arg__11924__auto___16747);
{
var G__16748 = cljs.core.next.call(null,seq__15021_16741__$1);
var G__16749 = null;
var G__16750 = 0;
var G__16751 = 0;
seq__15021_16731 = G__16748;
chunk__15022_16732 = G__16749;
count__15023_16733 = G__16750;
i__15024_16734 = G__16751;
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
label.cljs$lang$applyTo = (function (arglist__16752){
var args__11922__auto__ = cljs.core.seq(arglist__16752);
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
var seq__15029_16753 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15030_16754 = null;var count__15031_16755 = 0;var i__15032_16756 = 0;while(true){
if((i__15032_16756 < count__15031_16755))
{var arg__11924__auto___16757 = cljs.core._nth.call(null,chunk__15030_16754,i__15032_16756);a__11923__auto__.push(arg__11924__auto___16757);
{
var G__16758 = seq__15029_16753;
var G__16759 = chunk__15030_16754;
var G__16760 = count__15031_16755;
var G__16761 = (i__15032_16756 + 1);
seq__15029_16753 = G__16758;
chunk__15030_16754 = G__16759;
count__15031_16755 = G__16760;
i__15032_16756 = G__16761;
continue;
}
} else
{var temp__4092__auto___16762 = cljs.core.seq.call(null,seq__15029_16753);if(temp__4092__auto___16762)
{var seq__15029_16763__$1 = temp__4092__auto___16762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15029_16763__$1))
{var c__11077__auto___16764 = cljs.core.chunk_first.call(null,seq__15029_16763__$1);{
var G__16765 = cljs.core.chunk_rest.call(null,seq__15029_16763__$1);
var G__16766 = c__11077__auto___16764;
var G__16767 = cljs.core.count.call(null,c__11077__auto___16764);
var G__16768 = 0;
seq__15029_16753 = G__16765;
chunk__15030_16754 = G__16766;
count__15031_16755 = G__16767;
i__15032_16756 = G__16768;
continue;
}
} else
{var arg__11924__auto___16769 = cljs.core.first.call(null,seq__15029_16763__$1);a__11923__auto__.push(arg__11924__auto___16769);
{
var G__16770 = cljs.core.next.call(null,seq__15029_16763__$1);
var G__16771 = null;
var G__16772 = 0;
var G__16773 = 0;
seq__15029_16753 = G__16770;
chunk__15030_16754 = G__16771;
count__15031_16755 = G__16772;
i__15032_16756 = G__16773;
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
legend.cljs$lang$applyTo = (function (arglist__16774){
var args__11922__auto__ = cljs.core.seq(arglist__16774);
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
var seq__15037_16775 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15038_16776 = null;var count__15039_16777 = 0;var i__15040_16778 = 0;while(true){
if((i__15040_16778 < count__15039_16777))
{var arg__11924__auto___16779 = cljs.core._nth.call(null,chunk__15038_16776,i__15040_16778);a__11923__auto__.push(arg__11924__auto___16779);
{
var G__16780 = seq__15037_16775;
var G__16781 = chunk__15038_16776;
var G__16782 = count__15039_16777;
var G__16783 = (i__15040_16778 + 1);
seq__15037_16775 = G__16780;
chunk__15038_16776 = G__16781;
count__15039_16777 = G__16782;
i__15040_16778 = G__16783;
continue;
}
} else
{var temp__4092__auto___16784 = cljs.core.seq.call(null,seq__15037_16775);if(temp__4092__auto___16784)
{var seq__15037_16785__$1 = temp__4092__auto___16784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15037_16785__$1))
{var c__11077__auto___16786 = cljs.core.chunk_first.call(null,seq__15037_16785__$1);{
var G__16787 = cljs.core.chunk_rest.call(null,seq__15037_16785__$1);
var G__16788 = c__11077__auto___16786;
var G__16789 = cljs.core.count.call(null,c__11077__auto___16786);
var G__16790 = 0;
seq__15037_16775 = G__16787;
chunk__15038_16776 = G__16788;
count__15039_16777 = G__16789;
i__15040_16778 = G__16790;
continue;
}
} else
{var arg__11924__auto___16791 = cljs.core.first.call(null,seq__15037_16785__$1);a__11923__auto__.push(arg__11924__auto___16791);
{
var G__16792 = cljs.core.next.call(null,seq__15037_16785__$1);
var G__16793 = null;
var G__16794 = 0;
var G__16795 = 0;
seq__15037_16775 = G__16792;
chunk__15038_16776 = G__16793;
count__15039_16777 = G__16794;
i__15040_16778 = G__16795;
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
li.cljs$lang$applyTo = (function (arglist__16796){
var args__11922__auto__ = cljs.core.seq(arglist__16796);
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
var seq__15045_16797 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15046_16798 = null;var count__15047_16799 = 0;var i__15048_16800 = 0;while(true){
if((i__15048_16800 < count__15047_16799))
{var arg__11924__auto___16801 = cljs.core._nth.call(null,chunk__15046_16798,i__15048_16800);a__11923__auto__.push(arg__11924__auto___16801);
{
var G__16802 = seq__15045_16797;
var G__16803 = chunk__15046_16798;
var G__16804 = count__15047_16799;
var G__16805 = (i__15048_16800 + 1);
seq__15045_16797 = G__16802;
chunk__15046_16798 = G__16803;
count__15047_16799 = G__16804;
i__15048_16800 = G__16805;
continue;
}
} else
{var temp__4092__auto___16806 = cljs.core.seq.call(null,seq__15045_16797);if(temp__4092__auto___16806)
{var seq__15045_16807__$1 = temp__4092__auto___16806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15045_16807__$1))
{var c__11077__auto___16808 = cljs.core.chunk_first.call(null,seq__15045_16807__$1);{
var G__16809 = cljs.core.chunk_rest.call(null,seq__15045_16807__$1);
var G__16810 = c__11077__auto___16808;
var G__16811 = cljs.core.count.call(null,c__11077__auto___16808);
var G__16812 = 0;
seq__15045_16797 = G__16809;
chunk__15046_16798 = G__16810;
count__15047_16799 = G__16811;
i__15048_16800 = G__16812;
continue;
}
} else
{var arg__11924__auto___16813 = cljs.core.first.call(null,seq__15045_16807__$1);a__11923__auto__.push(arg__11924__auto___16813);
{
var G__16814 = cljs.core.next.call(null,seq__15045_16807__$1);
var G__16815 = null;
var G__16816 = 0;
var G__16817 = 0;
seq__15045_16797 = G__16814;
chunk__15046_16798 = G__16815;
count__15047_16799 = G__16816;
i__15048_16800 = G__16817;
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
link.cljs$lang$applyTo = (function (arglist__16818){
var args__11922__auto__ = cljs.core.seq(arglist__16818);
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
var seq__15053_16819 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15054_16820 = null;var count__15055_16821 = 0;var i__15056_16822 = 0;while(true){
if((i__15056_16822 < count__15055_16821))
{var arg__11924__auto___16823 = cljs.core._nth.call(null,chunk__15054_16820,i__15056_16822);a__11923__auto__.push(arg__11924__auto___16823);
{
var G__16824 = seq__15053_16819;
var G__16825 = chunk__15054_16820;
var G__16826 = count__15055_16821;
var G__16827 = (i__15056_16822 + 1);
seq__15053_16819 = G__16824;
chunk__15054_16820 = G__16825;
count__15055_16821 = G__16826;
i__15056_16822 = G__16827;
continue;
}
} else
{var temp__4092__auto___16828 = cljs.core.seq.call(null,seq__15053_16819);if(temp__4092__auto___16828)
{var seq__15053_16829__$1 = temp__4092__auto___16828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15053_16829__$1))
{var c__11077__auto___16830 = cljs.core.chunk_first.call(null,seq__15053_16829__$1);{
var G__16831 = cljs.core.chunk_rest.call(null,seq__15053_16829__$1);
var G__16832 = c__11077__auto___16830;
var G__16833 = cljs.core.count.call(null,c__11077__auto___16830);
var G__16834 = 0;
seq__15053_16819 = G__16831;
chunk__15054_16820 = G__16832;
count__15055_16821 = G__16833;
i__15056_16822 = G__16834;
continue;
}
} else
{var arg__11924__auto___16835 = cljs.core.first.call(null,seq__15053_16829__$1);a__11923__auto__.push(arg__11924__auto___16835);
{
var G__16836 = cljs.core.next.call(null,seq__15053_16829__$1);
var G__16837 = null;
var G__16838 = 0;
var G__16839 = 0;
seq__15053_16819 = G__16836;
chunk__15054_16820 = G__16837;
count__15055_16821 = G__16838;
i__15056_16822 = G__16839;
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
main.cljs$lang$applyTo = (function (arglist__16840){
var args__11922__auto__ = cljs.core.seq(arglist__16840);
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
var seq__15061_16841 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15062_16842 = null;var count__15063_16843 = 0;var i__15064_16844 = 0;while(true){
if((i__15064_16844 < count__15063_16843))
{var arg__11924__auto___16845 = cljs.core._nth.call(null,chunk__15062_16842,i__15064_16844);a__11923__auto__.push(arg__11924__auto___16845);
{
var G__16846 = seq__15061_16841;
var G__16847 = chunk__15062_16842;
var G__16848 = count__15063_16843;
var G__16849 = (i__15064_16844 + 1);
seq__15061_16841 = G__16846;
chunk__15062_16842 = G__16847;
count__15063_16843 = G__16848;
i__15064_16844 = G__16849;
continue;
}
} else
{var temp__4092__auto___16850 = cljs.core.seq.call(null,seq__15061_16841);if(temp__4092__auto___16850)
{var seq__15061_16851__$1 = temp__4092__auto___16850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15061_16851__$1))
{var c__11077__auto___16852 = cljs.core.chunk_first.call(null,seq__15061_16851__$1);{
var G__16853 = cljs.core.chunk_rest.call(null,seq__15061_16851__$1);
var G__16854 = c__11077__auto___16852;
var G__16855 = cljs.core.count.call(null,c__11077__auto___16852);
var G__16856 = 0;
seq__15061_16841 = G__16853;
chunk__15062_16842 = G__16854;
count__15063_16843 = G__16855;
i__15064_16844 = G__16856;
continue;
}
} else
{var arg__11924__auto___16857 = cljs.core.first.call(null,seq__15061_16851__$1);a__11923__auto__.push(arg__11924__auto___16857);
{
var G__16858 = cljs.core.next.call(null,seq__15061_16851__$1);
var G__16859 = null;
var G__16860 = 0;
var G__16861 = 0;
seq__15061_16841 = G__16858;
chunk__15062_16842 = G__16859;
count__15063_16843 = G__16860;
i__15064_16844 = G__16861;
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
map.cljs$lang$applyTo = (function (arglist__16862){
var args__11922__auto__ = cljs.core.seq(arglist__16862);
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
var seq__15069_16863 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15070_16864 = null;var count__15071_16865 = 0;var i__15072_16866 = 0;while(true){
if((i__15072_16866 < count__15071_16865))
{var arg__11924__auto___16867 = cljs.core._nth.call(null,chunk__15070_16864,i__15072_16866);a__11923__auto__.push(arg__11924__auto___16867);
{
var G__16868 = seq__15069_16863;
var G__16869 = chunk__15070_16864;
var G__16870 = count__15071_16865;
var G__16871 = (i__15072_16866 + 1);
seq__15069_16863 = G__16868;
chunk__15070_16864 = G__16869;
count__15071_16865 = G__16870;
i__15072_16866 = G__16871;
continue;
}
} else
{var temp__4092__auto___16872 = cljs.core.seq.call(null,seq__15069_16863);if(temp__4092__auto___16872)
{var seq__15069_16873__$1 = temp__4092__auto___16872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15069_16873__$1))
{var c__11077__auto___16874 = cljs.core.chunk_first.call(null,seq__15069_16873__$1);{
var G__16875 = cljs.core.chunk_rest.call(null,seq__15069_16873__$1);
var G__16876 = c__11077__auto___16874;
var G__16877 = cljs.core.count.call(null,c__11077__auto___16874);
var G__16878 = 0;
seq__15069_16863 = G__16875;
chunk__15070_16864 = G__16876;
count__15071_16865 = G__16877;
i__15072_16866 = G__16878;
continue;
}
} else
{var arg__11924__auto___16879 = cljs.core.first.call(null,seq__15069_16873__$1);a__11923__auto__.push(arg__11924__auto___16879);
{
var G__16880 = cljs.core.next.call(null,seq__15069_16873__$1);
var G__16881 = null;
var G__16882 = 0;
var G__16883 = 0;
seq__15069_16863 = G__16880;
chunk__15070_16864 = G__16881;
count__15071_16865 = G__16882;
i__15072_16866 = G__16883;
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
mark.cljs$lang$applyTo = (function (arglist__16884){
var args__11922__auto__ = cljs.core.seq(arglist__16884);
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
var seq__15077_16885 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15078_16886 = null;var count__15079_16887 = 0;var i__15080_16888 = 0;while(true){
if((i__15080_16888 < count__15079_16887))
{var arg__11924__auto___16889 = cljs.core._nth.call(null,chunk__15078_16886,i__15080_16888);a__11923__auto__.push(arg__11924__auto___16889);
{
var G__16890 = seq__15077_16885;
var G__16891 = chunk__15078_16886;
var G__16892 = count__15079_16887;
var G__16893 = (i__15080_16888 + 1);
seq__15077_16885 = G__16890;
chunk__15078_16886 = G__16891;
count__15079_16887 = G__16892;
i__15080_16888 = G__16893;
continue;
}
} else
{var temp__4092__auto___16894 = cljs.core.seq.call(null,seq__15077_16885);if(temp__4092__auto___16894)
{var seq__15077_16895__$1 = temp__4092__auto___16894;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15077_16895__$1))
{var c__11077__auto___16896 = cljs.core.chunk_first.call(null,seq__15077_16895__$1);{
var G__16897 = cljs.core.chunk_rest.call(null,seq__15077_16895__$1);
var G__16898 = c__11077__auto___16896;
var G__16899 = cljs.core.count.call(null,c__11077__auto___16896);
var G__16900 = 0;
seq__15077_16885 = G__16897;
chunk__15078_16886 = G__16898;
count__15079_16887 = G__16899;
i__15080_16888 = G__16900;
continue;
}
} else
{var arg__11924__auto___16901 = cljs.core.first.call(null,seq__15077_16895__$1);a__11923__auto__.push(arg__11924__auto___16901);
{
var G__16902 = cljs.core.next.call(null,seq__15077_16895__$1);
var G__16903 = null;
var G__16904 = 0;
var G__16905 = 0;
seq__15077_16885 = G__16902;
chunk__15078_16886 = G__16903;
count__15079_16887 = G__16904;
i__15080_16888 = G__16905;
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
menu.cljs$lang$applyTo = (function (arglist__16906){
var args__11922__auto__ = cljs.core.seq(arglist__16906);
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
var seq__15085_16907 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15086_16908 = null;var count__15087_16909 = 0;var i__15088_16910 = 0;while(true){
if((i__15088_16910 < count__15087_16909))
{var arg__11924__auto___16911 = cljs.core._nth.call(null,chunk__15086_16908,i__15088_16910);a__11923__auto__.push(arg__11924__auto___16911);
{
var G__16912 = seq__15085_16907;
var G__16913 = chunk__15086_16908;
var G__16914 = count__15087_16909;
var G__16915 = (i__15088_16910 + 1);
seq__15085_16907 = G__16912;
chunk__15086_16908 = G__16913;
count__15087_16909 = G__16914;
i__15088_16910 = G__16915;
continue;
}
} else
{var temp__4092__auto___16916 = cljs.core.seq.call(null,seq__15085_16907);if(temp__4092__auto___16916)
{var seq__15085_16917__$1 = temp__4092__auto___16916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15085_16917__$1))
{var c__11077__auto___16918 = cljs.core.chunk_first.call(null,seq__15085_16917__$1);{
var G__16919 = cljs.core.chunk_rest.call(null,seq__15085_16917__$1);
var G__16920 = c__11077__auto___16918;
var G__16921 = cljs.core.count.call(null,c__11077__auto___16918);
var G__16922 = 0;
seq__15085_16907 = G__16919;
chunk__15086_16908 = G__16920;
count__15087_16909 = G__16921;
i__15088_16910 = G__16922;
continue;
}
} else
{var arg__11924__auto___16923 = cljs.core.first.call(null,seq__15085_16917__$1);a__11923__auto__.push(arg__11924__auto___16923);
{
var G__16924 = cljs.core.next.call(null,seq__15085_16917__$1);
var G__16925 = null;
var G__16926 = 0;
var G__16927 = 0;
seq__15085_16907 = G__16924;
chunk__15086_16908 = G__16925;
count__15087_16909 = G__16926;
i__15088_16910 = G__16927;
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
menuitem.cljs$lang$applyTo = (function (arglist__16928){
var args__11922__auto__ = cljs.core.seq(arglist__16928);
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
var seq__15093_16929 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15094_16930 = null;var count__15095_16931 = 0;var i__15096_16932 = 0;while(true){
if((i__15096_16932 < count__15095_16931))
{var arg__11924__auto___16933 = cljs.core._nth.call(null,chunk__15094_16930,i__15096_16932);a__11923__auto__.push(arg__11924__auto___16933);
{
var G__16934 = seq__15093_16929;
var G__16935 = chunk__15094_16930;
var G__16936 = count__15095_16931;
var G__16937 = (i__15096_16932 + 1);
seq__15093_16929 = G__16934;
chunk__15094_16930 = G__16935;
count__15095_16931 = G__16936;
i__15096_16932 = G__16937;
continue;
}
} else
{var temp__4092__auto___16938 = cljs.core.seq.call(null,seq__15093_16929);if(temp__4092__auto___16938)
{var seq__15093_16939__$1 = temp__4092__auto___16938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15093_16939__$1))
{var c__11077__auto___16940 = cljs.core.chunk_first.call(null,seq__15093_16939__$1);{
var G__16941 = cljs.core.chunk_rest.call(null,seq__15093_16939__$1);
var G__16942 = c__11077__auto___16940;
var G__16943 = cljs.core.count.call(null,c__11077__auto___16940);
var G__16944 = 0;
seq__15093_16929 = G__16941;
chunk__15094_16930 = G__16942;
count__15095_16931 = G__16943;
i__15096_16932 = G__16944;
continue;
}
} else
{var arg__11924__auto___16945 = cljs.core.first.call(null,seq__15093_16939__$1);a__11923__auto__.push(arg__11924__auto___16945);
{
var G__16946 = cljs.core.next.call(null,seq__15093_16939__$1);
var G__16947 = null;
var G__16948 = 0;
var G__16949 = 0;
seq__15093_16929 = G__16946;
chunk__15094_16930 = G__16947;
count__15095_16931 = G__16948;
i__15096_16932 = G__16949;
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
meta.cljs$lang$applyTo = (function (arglist__16950){
var args__11922__auto__ = cljs.core.seq(arglist__16950);
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
var seq__15101_16951 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15102_16952 = null;var count__15103_16953 = 0;var i__15104_16954 = 0;while(true){
if((i__15104_16954 < count__15103_16953))
{var arg__11924__auto___16955 = cljs.core._nth.call(null,chunk__15102_16952,i__15104_16954);a__11923__auto__.push(arg__11924__auto___16955);
{
var G__16956 = seq__15101_16951;
var G__16957 = chunk__15102_16952;
var G__16958 = count__15103_16953;
var G__16959 = (i__15104_16954 + 1);
seq__15101_16951 = G__16956;
chunk__15102_16952 = G__16957;
count__15103_16953 = G__16958;
i__15104_16954 = G__16959;
continue;
}
} else
{var temp__4092__auto___16960 = cljs.core.seq.call(null,seq__15101_16951);if(temp__4092__auto___16960)
{var seq__15101_16961__$1 = temp__4092__auto___16960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15101_16961__$1))
{var c__11077__auto___16962 = cljs.core.chunk_first.call(null,seq__15101_16961__$1);{
var G__16963 = cljs.core.chunk_rest.call(null,seq__15101_16961__$1);
var G__16964 = c__11077__auto___16962;
var G__16965 = cljs.core.count.call(null,c__11077__auto___16962);
var G__16966 = 0;
seq__15101_16951 = G__16963;
chunk__15102_16952 = G__16964;
count__15103_16953 = G__16965;
i__15104_16954 = G__16966;
continue;
}
} else
{var arg__11924__auto___16967 = cljs.core.first.call(null,seq__15101_16961__$1);a__11923__auto__.push(arg__11924__auto___16967);
{
var G__16968 = cljs.core.next.call(null,seq__15101_16961__$1);
var G__16969 = null;
var G__16970 = 0;
var G__16971 = 0;
seq__15101_16951 = G__16968;
chunk__15102_16952 = G__16969;
count__15103_16953 = G__16970;
i__15104_16954 = G__16971;
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
meter.cljs$lang$applyTo = (function (arglist__16972){
var args__11922__auto__ = cljs.core.seq(arglist__16972);
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
var seq__15109_16973 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15110_16974 = null;var count__15111_16975 = 0;var i__15112_16976 = 0;while(true){
if((i__15112_16976 < count__15111_16975))
{var arg__11924__auto___16977 = cljs.core._nth.call(null,chunk__15110_16974,i__15112_16976);a__11923__auto__.push(arg__11924__auto___16977);
{
var G__16978 = seq__15109_16973;
var G__16979 = chunk__15110_16974;
var G__16980 = count__15111_16975;
var G__16981 = (i__15112_16976 + 1);
seq__15109_16973 = G__16978;
chunk__15110_16974 = G__16979;
count__15111_16975 = G__16980;
i__15112_16976 = G__16981;
continue;
}
} else
{var temp__4092__auto___16982 = cljs.core.seq.call(null,seq__15109_16973);if(temp__4092__auto___16982)
{var seq__15109_16983__$1 = temp__4092__auto___16982;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15109_16983__$1))
{var c__11077__auto___16984 = cljs.core.chunk_first.call(null,seq__15109_16983__$1);{
var G__16985 = cljs.core.chunk_rest.call(null,seq__15109_16983__$1);
var G__16986 = c__11077__auto___16984;
var G__16987 = cljs.core.count.call(null,c__11077__auto___16984);
var G__16988 = 0;
seq__15109_16973 = G__16985;
chunk__15110_16974 = G__16986;
count__15111_16975 = G__16987;
i__15112_16976 = G__16988;
continue;
}
} else
{var arg__11924__auto___16989 = cljs.core.first.call(null,seq__15109_16983__$1);a__11923__auto__.push(arg__11924__auto___16989);
{
var G__16990 = cljs.core.next.call(null,seq__15109_16983__$1);
var G__16991 = null;
var G__16992 = 0;
var G__16993 = 0;
seq__15109_16973 = G__16990;
chunk__15110_16974 = G__16991;
count__15111_16975 = G__16992;
i__15112_16976 = G__16993;
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
nav.cljs$lang$applyTo = (function (arglist__16994){
var args__11922__auto__ = cljs.core.seq(arglist__16994);
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
var seq__15117_16995 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15118_16996 = null;var count__15119_16997 = 0;var i__15120_16998 = 0;while(true){
if((i__15120_16998 < count__15119_16997))
{var arg__11924__auto___16999 = cljs.core._nth.call(null,chunk__15118_16996,i__15120_16998);a__11923__auto__.push(arg__11924__auto___16999);
{
var G__17000 = seq__15117_16995;
var G__17001 = chunk__15118_16996;
var G__17002 = count__15119_16997;
var G__17003 = (i__15120_16998 + 1);
seq__15117_16995 = G__17000;
chunk__15118_16996 = G__17001;
count__15119_16997 = G__17002;
i__15120_16998 = G__17003;
continue;
}
} else
{var temp__4092__auto___17004 = cljs.core.seq.call(null,seq__15117_16995);if(temp__4092__auto___17004)
{var seq__15117_17005__$1 = temp__4092__auto___17004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15117_17005__$1))
{var c__11077__auto___17006 = cljs.core.chunk_first.call(null,seq__15117_17005__$1);{
var G__17007 = cljs.core.chunk_rest.call(null,seq__15117_17005__$1);
var G__17008 = c__11077__auto___17006;
var G__17009 = cljs.core.count.call(null,c__11077__auto___17006);
var G__17010 = 0;
seq__15117_16995 = G__17007;
chunk__15118_16996 = G__17008;
count__15119_16997 = G__17009;
i__15120_16998 = G__17010;
continue;
}
} else
{var arg__11924__auto___17011 = cljs.core.first.call(null,seq__15117_17005__$1);a__11923__auto__.push(arg__11924__auto___17011);
{
var G__17012 = cljs.core.next.call(null,seq__15117_17005__$1);
var G__17013 = null;
var G__17014 = 0;
var G__17015 = 0;
seq__15117_16995 = G__17012;
chunk__15118_16996 = G__17013;
count__15119_16997 = G__17014;
i__15120_16998 = G__17015;
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
noscript.cljs$lang$applyTo = (function (arglist__17016){
var args__11922__auto__ = cljs.core.seq(arglist__17016);
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
var seq__15125_17017 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15126_17018 = null;var count__15127_17019 = 0;var i__15128_17020 = 0;while(true){
if((i__15128_17020 < count__15127_17019))
{var arg__11924__auto___17021 = cljs.core._nth.call(null,chunk__15126_17018,i__15128_17020);a__11923__auto__.push(arg__11924__auto___17021);
{
var G__17022 = seq__15125_17017;
var G__17023 = chunk__15126_17018;
var G__17024 = count__15127_17019;
var G__17025 = (i__15128_17020 + 1);
seq__15125_17017 = G__17022;
chunk__15126_17018 = G__17023;
count__15127_17019 = G__17024;
i__15128_17020 = G__17025;
continue;
}
} else
{var temp__4092__auto___17026 = cljs.core.seq.call(null,seq__15125_17017);if(temp__4092__auto___17026)
{var seq__15125_17027__$1 = temp__4092__auto___17026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15125_17027__$1))
{var c__11077__auto___17028 = cljs.core.chunk_first.call(null,seq__15125_17027__$1);{
var G__17029 = cljs.core.chunk_rest.call(null,seq__15125_17027__$1);
var G__17030 = c__11077__auto___17028;
var G__17031 = cljs.core.count.call(null,c__11077__auto___17028);
var G__17032 = 0;
seq__15125_17017 = G__17029;
chunk__15126_17018 = G__17030;
count__15127_17019 = G__17031;
i__15128_17020 = G__17032;
continue;
}
} else
{var arg__11924__auto___17033 = cljs.core.first.call(null,seq__15125_17027__$1);a__11923__auto__.push(arg__11924__auto___17033);
{
var G__17034 = cljs.core.next.call(null,seq__15125_17027__$1);
var G__17035 = null;
var G__17036 = 0;
var G__17037 = 0;
seq__15125_17017 = G__17034;
chunk__15126_17018 = G__17035;
count__15127_17019 = G__17036;
i__15128_17020 = G__17037;
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
object.cljs$lang$applyTo = (function (arglist__17038){
var args__11922__auto__ = cljs.core.seq(arglist__17038);
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
var seq__15133_17039 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15134_17040 = null;var count__15135_17041 = 0;var i__15136_17042 = 0;while(true){
if((i__15136_17042 < count__15135_17041))
{var arg__11924__auto___17043 = cljs.core._nth.call(null,chunk__15134_17040,i__15136_17042);a__11923__auto__.push(arg__11924__auto___17043);
{
var G__17044 = seq__15133_17039;
var G__17045 = chunk__15134_17040;
var G__17046 = count__15135_17041;
var G__17047 = (i__15136_17042 + 1);
seq__15133_17039 = G__17044;
chunk__15134_17040 = G__17045;
count__15135_17041 = G__17046;
i__15136_17042 = G__17047;
continue;
}
} else
{var temp__4092__auto___17048 = cljs.core.seq.call(null,seq__15133_17039);if(temp__4092__auto___17048)
{var seq__15133_17049__$1 = temp__4092__auto___17048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15133_17049__$1))
{var c__11077__auto___17050 = cljs.core.chunk_first.call(null,seq__15133_17049__$1);{
var G__17051 = cljs.core.chunk_rest.call(null,seq__15133_17049__$1);
var G__17052 = c__11077__auto___17050;
var G__17053 = cljs.core.count.call(null,c__11077__auto___17050);
var G__17054 = 0;
seq__15133_17039 = G__17051;
chunk__15134_17040 = G__17052;
count__15135_17041 = G__17053;
i__15136_17042 = G__17054;
continue;
}
} else
{var arg__11924__auto___17055 = cljs.core.first.call(null,seq__15133_17049__$1);a__11923__auto__.push(arg__11924__auto___17055);
{
var G__17056 = cljs.core.next.call(null,seq__15133_17049__$1);
var G__17057 = null;
var G__17058 = 0;
var G__17059 = 0;
seq__15133_17039 = G__17056;
chunk__15134_17040 = G__17057;
count__15135_17041 = G__17058;
i__15136_17042 = G__17059;
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
ol.cljs$lang$applyTo = (function (arglist__17060){
var args__11922__auto__ = cljs.core.seq(arglist__17060);
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
var seq__15141_17061 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15142_17062 = null;var count__15143_17063 = 0;var i__15144_17064 = 0;while(true){
if((i__15144_17064 < count__15143_17063))
{var arg__11924__auto___17065 = cljs.core._nth.call(null,chunk__15142_17062,i__15144_17064);a__11923__auto__.push(arg__11924__auto___17065);
{
var G__17066 = seq__15141_17061;
var G__17067 = chunk__15142_17062;
var G__17068 = count__15143_17063;
var G__17069 = (i__15144_17064 + 1);
seq__15141_17061 = G__17066;
chunk__15142_17062 = G__17067;
count__15143_17063 = G__17068;
i__15144_17064 = G__17069;
continue;
}
} else
{var temp__4092__auto___17070 = cljs.core.seq.call(null,seq__15141_17061);if(temp__4092__auto___17070)
{var seq__15141_17071__$1 = temp__4092__auto___17070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15141_17071__$1))
{var c__11077__auto___17072 = cljs.core.chunk_first.call(null,seq__15141_17071__$1);{
var G__17073 = cljs.core.chunk_rest.call(null,seq__15141_17071__$1);
var G__17074 = c__11077__auto___17072;
var G__17075 = cljs.core.count.call(null,c__11077__auto___17072);
var G__17076 = 0;
seq__15141_17061 = G__17073;
chunk__15142_17062 = G__17074;
count__15143_17063 = G__17075;
i__15144_17064 = G__17076;
continue;
}
} else
{var arg__11924__auto___17077 = cljs.core.first.call(null,seq__15141_17071__$1);a__11923__auto__.push(arg__11924__auto___17077);
{
var G__17078 = cljs.core.next.call(null,seq__15141_17071__$1);
var G__17079 = null;
var G__17080 = 0;
var G__17081 = 0;
seq__15141_17061 = G__17078;
chunk__15142_17062 = G__17079;
count__15143_17063 = G__17080;
i__15144_17064 = G__17081;
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
optgroup.cljs$lang$applyTo = (function (arglist__17082){
var args__11922__auto__ = cljs.core.seq(arglist__17082);
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
var seq__15149_17083 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15150_17084 = null;var count__15151_17085 = 0;var i__15152_17086 = 0;while(true){
if((i__15152_17086 < count__15151_17085))
{var arg__11924__auto___17087 = cljs.core._nth.call(null,chunk__15150_17084,i__15152_17086);a__11923__auto__.push(arg__11924__auto___17087);
{
var G__17088 = seq__15149_17083;
var G__17089 = chunk__15150_17084;
var G__17090 = count__15151_17085;
var G__17091 = (i__15152_17086 + 1);
seq__15149_17083 = G__17088;
chunk__15150_17084 = G__17089;
count__15151_17085 = G__17090;
i__15152_17086 = G__17091;
continue;
}
} else
{var temp__4092__auto___17092 = cljs.core.seq.call(null,seq__15149_17083);if(temp__4092__auto___17092)
{var seq__15149_17093__$1 = temp__4092__auto___17092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15149_17093__$1))
{var c__11077__auto___17094 = cljs.core.chunk_first.call(null,seq__15149_17093__$1);{
var G__17095 = cljs.core.chunk_rest.call(null,seq__15149_17093__$1);
var G__17096 = c__11077__auto___17094;
var G__17097 = cljs.core.count.call(null,c__11077__auto___17094);
var G__17098 = 0;
seq__15149_17083 = G__17095;
chunk__15150_17084 = G__17096;
count__15151_17085 = G__17097;
i__15152_17086 = G__17098;
continue;
}
} else
{var arg__11924__auto___17099 = cljs.core.first.call(null,seq__15149_17093__$1);a__11923__auto__.push(arg__11924__auto___17099);
{
var G__17100 = cljs.core.next.call(null,seq__15149_17093__$1);
var G__17101 = null;
var G__17102 = 0;
var G__17103 = 0;
seq__15149_17083 = G__17100;
chunk__15150_17084 = G__17101;
count__15151_17085 = G__17102;
i__15152_17086 = G__17103;
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
option.cljs$lang$applyTo = (function (arglist__17104){
var args__11922__auto__ = cljs.core.seq(arglist__17104);
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
var seq__15157_17105 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15158_17106 = null;var count__15159_17107 = 0;var i__15160_17108 = 0;while(true){
if((i__15160_17108 < count__15159_17107))
{var arg__11924__auto___17109 = cljs.core._nth.call(null,chunk__15158_17106,i__15160_17108);a__11923__auto__.push(arg__11924__auto___17109);
{
var G__17110 = seq__15157_17105;
var G__17111 = chunk__15158_17106;
var G__17112 = count__15159_17107;
var G__17113 = (i__15160_17108 + 1);
seq__15157_17105 = G__17110;
chunk__15158_17106 = G__17111;
count__15159_17107 = G__17112;
i__15160_17108 = G__17113;
continue;
}
} else
{var temp__4092__auto___17114 = cljs.core.seq.call(null,seq__15157_17105);if(temp__4092__auto___17114)
{var seq__15157_17115__$1 = temp__4092__auto___17114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15157_17115__$1))
{var c__11077__auto___17116 = cljs.core.chunk_first.call(null,seq__15157_17115__$1);{
var G__17117 = cljs.core.chunk_rest.call(null,seq__15157_17115__$1);
var G__17118 = c__11077__auto___17116;
var G__17119 = cljs.core.count.call(null,c__11077__auto___17116);
var G__17120 = 0;
seq__15157_17105 = G__17117;
chunk__15158_17106 = G__17118;
count__15159_17107 = G__17119;
i__15160_17108 = G__17120;
continue;
}
} else
{var arg__11924__auto___17121 = cljs.core.first.call(null,seq__15157_17115__$1);a__11923__auto__.push(arg__11924__auto___17121);
{
var G__17122 = cljs.core.next.call(null,seq__15157_17115__$1);
var G__17123 = null;
var G__17124 = 0;
var G__17125 = 0;
seq__15157_17105 = G__17122;
chunk__15158_17106 = G__17123;
count__15159_17107 = G__17124;
i__15160_17108 = G__17125;
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
output.cljs$lang$applyTo = (function (arglist__17126){
var args__11922__auto__ = cljs.core.seq(arglist__17126);
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
var seq__15165_17127 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15166_17128 = null;var count__15167_17129 = 0;var i__15168_17130 = 0;while(true){
if((i__15168_17130 < count__15167_17129))
{var arg__11924__auto___17131 = cljs.core._nth.call(null,chunk__15166_17128,i__15168_17130);a__11923__auto__.push(arg__11924__auto___17131);
{
var G__17132 = seq__15165_17127;
var G__17133 = chunk__15166_17128;
var G__17134 = count__15167_17129;
var G__17135 = (i__15168_17130 + 1);
seq__15165_17127 = G__17132;
chunk__15166_17128 = G__17133;
count__15167_17129 = G__17134;
i__15168_17130 = G__17135;
continue;
}
} else
{var temp__4092__auto___17136 = cljs.core.seq.call(null,seq__15165_17127);if(temp__4092__auto___17136)
{var seq__15165_17137__$1 = temp__4092__auto___17136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15165_17137__$1))
{var c__11077__auto___17138 = cljs.core.chunk_first.call(null,seq__15165_17137__$1);{
var G__17139 = cljs.core.chunk_rest.call(null,seq__15165_17137__$1);
var G__17140 = c__11077__auto___17138;
var G__17141 = cljs.core.count.call(null,c__11077__auto___17138);
var G__17142 = 0;
seq__15165_17127 = G__17139;
chunk__15166_17128 = G__17140;
count__15167_17129 = G__17141;
i__15168_17130 = G__17142;
continue;
}
} else
{var arg__11924__auto___17143 = cljs.core.first.call(null,seq__15165_17137__$1);a__11923__auto__.push(arg__11924__auto___17143);
{
var G__17144 = cljs.core.next.call(null,seq__15165_17137__$1);
var G__17145 = null;
var G__17146 = 0;
var G__17147 = 0;
seq__15165_17127 = G__17144;
chunk__15166_17128 = G__17145;
count__15167_17129 = G__17146;
i__15168_17130 = G__17147;
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
p.cljs$lang$applyTo = (function (arglist__17148){
var args__11922__auto__ = cljs.core.seq(arglist__17148);
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
var seq__15173_17149 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15174_17150 = null;var count__15175_17151 = 0;var i__15176_17152 = 0;while(true){
if((i__15176_17152 < count__15175_17151))
{var arg__11924__auto___17153 = cljs.core._nth.call(null,chunk__15174_17150,i__15176_17152);a__11923__auto__.push(arg__11924__auto___17153);
{
var G__17154 = seq__15173_17149;
var G__17155 = chunk__15174_17150;
var G__17156 = count__15175_17151;
var G__17157 = (i__15176_17152 + 1);
seq__15173_17149 = G__17154;
chunk__15174_17150 = G__17155;
count__15175_17151 = G__17156;
i__15176_17152 = G__17157;
continue;
}
} else
{var temp__4092__auto___17158 = cljs.core.seq.call(null,seq__15173_17149);if(temp__4092__auto___17158)
{var seq__15173_17159__$1 = temp__4092__auto___17158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15173_17159__$1))
{var c__11077__auto___17160 = cljs.core.chunk_first.call(null,seq__15173_17159__$1);{
var G__17161 = cljs.core.chunk_rest.call(null,seq__15173_17159__$1);
var G__17162 = c__11077__auto___17160;
var G__17163 = cljs.core.count.call(null,c__11077__auto___17160);
var G__17164 = 0;
seq__15173_17149 = G__17161;
chunk__15174_17150 = G__17162;
count__15175_17151 = G__17163;
i__15176_17152 = G__17164;
continue;
}
} else
{var arg__11924__auto___17165 = cljs.core.first.call(null,seq__15173_17159__$1);a__11923__auto__.push(arg__11924__auto___17165);
{
var G__17166 = cljs.core.next.call(null,seq__15173_17159__$1);
var G__17167 = null;
var G__17168 = 0;
var G__17169 = 0;
seq__15173_17149 = G__17166;
chunk__15174_17150 = G__17167;
count__15175_17151 = G__17168;
i__15176_17152 = G__17169;
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
param.cljs$lang$applyTo = (function (arglist__17170){
var args__11922__auto__ = cljs.core.seq(arglist__17170);
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
var seq__15181_17171 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15182_17172 = null;var count__15183_17173 = 0;var i__15184_17174 = 0;while(true){
if((i__15184_17174 < count__15183_17173))
{var arg__11924__auto___17175 = cljs.core._nth.call(null,chunk__15182_17172,i__15184_17174);a__11923__auto__.push(arg__11924__auto___17175);
{
var G__17176 = seq__15181_17171;
var G__17177 = chunk__15182_17172;
var G__17178 = count__15183_17173;
var G__17179 = (i__15184_17174 + 1);
seq__15181_17171 = G__17176;
chunk__15182_17172 = G__17177;
count__15183_17173 = G__17178;
i__15184_17174 = G__17179;
continue;
}
} else
{var temp__4092__auto___17180 = cljs.core.seq.call(null,seq__15181_17171);if(temp__4092__auto___17180)
{var seq__15181_17181__$1 = temp__4092__auto___17180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15181_17181__$1))
{var c__11077__auto___17182 = cljs.core.chunk_first.call(null,seq__15181_17181__$1);{
var G__17183 = cljs.core.chunk_rest.call(null,seq__15181_17181__$1);
var G__17184 = c__11077__auto___17182;
var G__17185 = cljs.core.count.call(null,c__11077__auto___17182);
var G__17186 = 0;
seq__15181_17171 = G__17183;
chunk__15182_17172 = G__17184;
count__15183_17173 = G__17185;
i__15184_17174 = G__17186;
continue;
}
} else
{var arg__11924__auto___17187 = cljs.core.first.call(null,seq__15181_17181__$1);a__11923__auto__.push(arg__11924__auto___17187);
{
var G__17188 = cljs.core.next.call(null,seq__15181_17181__$1);
var G__17189 = null;
var G__17190 = 0;
var G__17191 = 0;
seq__15181_17171 = G__17188;
chunk__15182_17172 = G__17189;
count__15183_17173 = G__17190;
i__15184_17174 = G__17191;
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
pre.cljs$lang$applyTo = (function (arglist__17192){
var args__11922__auto__ = cljs.core.seq(arglist__17192);
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
var seq__15189_17193 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15190_17194 = null;var count__15191_17195 = 0;var i__15192_17196 = 0;while(true){
if((i__15192_17196 < count__15191_17195))
{var arg__11924__auto___17197 = cljs.core._nth.call(null,chunk__15190_17194,i__15192_17196);a__11923__auto__.push(arg__11924__auto___17197);
{
var G__17198 = seq__15189_17193;
var G__17199 = chunk__15190_17194;
var G__17200 = count__15191_17195;
var G__17201 = (i__15192_17196 + 1);
seq__15189_17193 = G__17198;
chunk__15190_17194 = G__17199;
count__15191_17195 = G__17200;
i__15192_17196 = G__17201;
continue;
}
} else
{var temp__4092__auto___17202 = cljs.core.seq.call(null,seq__15189_17193);if(temp__4092__auto___17202)
{var seq__15189_17203__$1 = temp__4092__auto___17202;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15189_17203__$1))
{var c__11077__auto___17204 = cljs.core.chunk_first.call(null,seq__15189_17203__$1);{
var G__17205 = cljs.core.chunk_rest.call(null,seq__15189_17203__$1);
var G__17206 = c__11077__auto___17204;
var G__17207 = cljs.core.count.call(null,c__11077__auto___17204);
var G__17208 = 0;
seq__15189_17193 = G__17205;
chunk__15190_17194 = G__17206;
count__15191_17195 = G__17207;
i__15192_17196 = G__17208;
continue;
}
} else
{var arg__11924__auto___17209 = cljs.core.first.call(null,seq__15189_17203__$1);a__11923__auto__.push(arg__11924__auto___17209);
{
var G__17210 = cljs.core.next.call(null,seq__15189_17203__$1);
var G__17211 = null;
var G__17212 = 0;
var G__17213 = 0;
seq__15189_17193 = G__17210;
chunk__15190_17194 = G__17211;
count__15191_17195 = G__17212;
i__15192_17196 = G__17213;
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
progress.cljs$lang$applyTo = (function (arglist__17214){
var args__11922__auto__ = cljs.core.seq(arglist__17214);
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
var seq__15197_17215 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15198_17216 = null;var count__15199_17217 = 0;var i__15200_17218 = 0;while(true){
if((i__15200_17218 < count__15199_17217))
{var arg__11924__auto___17219 = cljs.core._nth.call(null,chunk__15198_17216,i__15200_17218);a__11923__auto__.push(arg__11924__auto___17219);
{
var G__17220 = seq__15197_17215;
var G__17221 = chunk__15198_17216;
var G__17222 = count__15199_17217;
var G__17223 = (i__15200_17218 + 1);
seq__15197_17215 = G__17220;
chunk__15198_17216 = G__17221;
count__15199_17217 = G__17222;
i__15200_17218 = G__17223;
continue;
}
} else
{var temp__4092__auto___17224 = cljs.core.seq.call(null,seq__15197_17215);if(temp__4092__auto___17224)
{var seq__15197_17225__$1 = temp__4092__auto___17224;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15197_17225__$1))
{var c__11077__auto___17226 = cljs.core.chunk_first.call(null,seq__15197_17225__$1);{
var G__17227 = cljs.core.chunk_rest.call(null,seq__15197_17225__$1);
var G__17228 = c__11077__auto___17226;
var G__17229 = cljs.core.count.call(null,c__11077__auto___17226);
var G__17230 = 0;
seq__15197_17215 = G__17227;
chunk__15198_17216 = G__17228;
count__15199_17217 = G__17229;
i__15200_17218 = G__17230;
continue;
}
} else
{var arg__11924__auto___17231 = cljs.core.first.call(null,seq__15197_17225__$1);a__11923__auto__.push(arg__11924__auto___17231);
{
var G__17232 = cljs.core.next.call(null,seq__15197_17225__$1);
var G__17233 = null;
var G__17234 = 0;
var G__17235 = 0;
seq__15197_17215 = G__17232;
chunk__15198_17216 = G__17233;
count__15199_17217 = G__17234;
i__15200_17218 = G__17235;
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
q.cljs$lang$applyTo = (function (arglist__17236){
var args__11922__auto__ = cljs.core.seq(arglist__17236);
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
var seq__15205_17237 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15206_17238 = null;var count__15207_17239 = 0;var i__15208_17240 = 0;while(true){
if((i__15208_17240 < count__15207_17239))
{var arg__11924__auto___17241 = cljs.core._nth.call(null,chunk__15206_17238,i__15208_17240);a__11923__auto__.push(arg__11924__auto___17241);
{
var G__17242 = seq__15205_17237;
var G__17243 = chunk__15206_17238;
var G__17244 = count__15207_17239;
var G__17245 = (i__15208_17240 + 1);
seq__15205_17237 = G__17242;
chunk__15206_17238 = G__17243;
count__15207_17239 = G__17244;
i__15208_17240 = G__17245;
continue;
}
} else
{var temp__4092__auto___17246 = cljs.core.seq.call(null,seq__15205_17237);if(temp__4092__auto___17246)
{var seq__15205_17247__$1 = temp__4092__auto___17246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15205_17247__$1))
{var c__11077__auto___17248 = cljs.core.chunk_first.call(null,seq__15205_17247__$1);{
var G__17249 = cljs.core.chunk_rest.call(null,seq__15205_17247__$1);
var G__17250 = c__11077__auto___17248;
var G__17251 = cljs.core.count.call(null,c__11077__auto___17248);
var G__17252 = 0;
seq__15205_17237 = G__17249;
chunk__15206_17238 = G__17250;
count__15207_17239 = G__17251;
i__15208_17240 = G__17252;
continue;
}
} else
{var arg__11924__auto___17253 = cljs.core.first.call(null,seq__15205_17247__$1);a__11923__auto__.push(arg__11924__auto___17253);
{
var G__17254 = cljs.core.next.call(null,seq__15205_17247__$1);
var G__17255 = null;
var G__17256 = 0;
var G__17257 = 0;
seq__15205_17237 = G__17254;
chunk__15206_17238 = G__17255;
count__15207_17239 = G__17256;
i__15208_17240 = G__17257;
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
rp.cljs$lang$applyTo = (function (arglist__17258){
var args__11922__auto__ = cljs.core.seq(arglist__17258);
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
var seq__15213_17259 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15214_17260 = null;var count__15215_17261 = 0;var i__15216_17262 = 0;while(true){
if((i__15216_17262 < count__15215_17261))
{var arg__11924__auto___17263 = cljs.core._nth.call(null,chunk__15214_17260,i__15216_17262);a__11923__auto__.push(arg__11924__auto___17263);
{
var G__17264 = seq__15213_17259;
var G__17265 = chunk__15214_17260;
var G__17266 = count__15215_17261;
var G__17267 = (i__15216_17262 + 1);
seq__15213_17259 = G__17264;
chunk__15214_17260 = G__17265;
count__15215_17261 = G__17266;
i__15216_17262 = G__17267;
continue;
}
} else
{var temp__4092__auto___17268 = cljs.core.seq.call(null,seq__15213_17259);if(temp__4092__auto___17268)
{var seq__15213_17269__$1 = temp__4092__auto___17268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15213_17269__$1))
{var c__11077__auto___17270 = cljs.core.chunk_first.call(null,seq__15213_17269__$1);{
var G__17271 = cljs.core.chunk_rest.call(null,seq__15213_17269__$1);
var G__17272 = c__11077__auto___17270;
var G__17273 = cljs.core.count.call(null,c__11077__auto___17270);
var G__17274 = 0;
seq__15213_17259 = G__17271;
chunk__15214_17260 = G__17272;
count__15215_17261 = G__17273;
i__15216_17262 = G__17274;
continue;
}
} else
{var arg__11924__auto___17275 = cljs.core.first.call(null,seq__15213_17269__$1);a__11923__auto__.push(arg__11924__auto___17275);
{
var G__17276 = cljs.core.next.call(null,seq__15213_17269__$1);
var G__17277 = null;
var G__17278 = 0;
var G__17279 = 0;
seq__15213_17259 = G__17276;
chunk__15214_17260 = G__17277;
count__15215_17261 = G__17278;
i__15216_17262 = G__17279;
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
rt.cljs$lang$applyTo = (function (arglist__17280){
var args__11922__auto__ = cljs.core.seq(arglist__17280);
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
var seq__15221_17281 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15222_17282 = null;var count__15223_17283 = 0;var i__15224_17284 = 0;while(true){
if((i__15224_17284 < count__15223_17283))
{var arg__11924__auto___17285 = cljs.core._nth.call(null,chunk__15222_17282,i__15224_17284);a__11923__auto__.push(arg__11924__auto___17285);
{
var G__17286 = seq__15221_17281;
var G__17287 = chunk__15222_17282;
var G__17288 = count__15223_17283;
var G__17289 = (i__15224_17284 + 1);
seq__15221_17281 = G__17286;
chunk__15222_17282 = G__17287;
count__15223_17283 = G__17288;
i__15224_17284 = G__17289;
continue;
}
} else
{var temp__4092__auto___17290 = cljs.core.seq.call(null,seq__15221_17281);if(temp__4092__auto___17290)
{var seq__15221_17291__$1 = temp__4092__auto___17290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15221_17291__$1))
{var c__11077__auto___17292 = cljs.core.chunk_first.call(null,seq__15221_17291__$1);{
var G__17293 = cljs.core.chunk_rest.call(null,seq__15221_17291__$1);
var G__17294 = c__11077__auto___17292;
var G__17295 = cljs.core.count.call(null,c__11077__auto___17292);
var G__17296 = 0;
seq__15221_17281 = G__17293;
chunk__15222_17282 = G__17294;
count__15223_17283 = G__17295;
i__15224_17284 = G__17296;
continue;
}
} else
{var arg__11924__auto___17297 = cljs.core.first.call(null,seq__15221_17291__$1);a__11923__auto__.push(arg__11924__auto___17297);
{
var G__17298 = cljs.core.next.call(null,seq__15221_17291__$1);
var G__17299 = null;
var G__17300 = 0;
var G__17301 = 0;
seq__15221_17281 = G__17298;
chunk__15222_17282 = G__17299;
count__15223_17283 = G__17300;
i__15224_17284 = G__17301;
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
ruby.cljs$lang$applyTo = (function (arglist__17302){
var args__11922__auto__ = cljs.core.seq(arglist__17302);
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
var seq__15229_17303 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15230_17304 = null;var count__15231_17305 = 0;var i__15232_17306 = 0;while(true){
if((i__15232_17306 < count__15231_17305))
{var arg__11924__auto___17307 = cljs.core._nth.call(null,chunk__15230_17304,i__15232_17306);a__11923__auto__.push(arg__11924__auto___17307);
{
var G__17308 = seq__15229_17303;
var G__17309 = chunk__15230_17304;
var G__17310 = count__15231_17305;
var G__17311 = (i__15232_17306 + 1);
seq__15229_17303 = G__17308;
chunk__15230_17304 = G__17309;
count__15231_17305 = G__17310;
i__15232_17306 = G__17311;
continue;
}
} else
{var temp__4092__auto___17312 = cljs.core.seq.call(null,seq__15229_17303);if(temp__4092__auto___17312)
{var seq__15229_17313__$1 = temp__4092__auto___17312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15229_17313__$1))
{var c__11077__auto___17314 = cljs.core.chunk_first.call(null,seq__15229_17313__$1);{
var G__17315 = cljs.core.chunk_rest.call(null,seq__15229_17313__$1);
var G__17316 = c__11077__auto___17314;
var G__17317 = cljs.core.count.call(null,c__11077__auto___17314);
var G__17318 = 0;
seq__15229_17303 = G__17315;
chunk__15230_17304 = G__17316;
count__15231_17305 = G__17317;
i__15232_17306 = G__17318;
continue;
}
} else
{var arg__11924__auto___17319 = cljs.core.first.call(null,seq__15229_17313__$1);a__11923__auto__.push(arg__11924__auto___17319);
{
var G__17320 = cljs.core.next.call(null,seq__15229_17313__$1);
var G__17321 = null;
var G__17322 = 0;
var G__17323 = 0;
seq__15229_17303 = G__17320;
chunk__15230_17304 = G__17321;
count__15231_17305 = G__17322;
i__15232_17306 = G__17323;
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
s.cljs$lang$applyTo = (function (arglist__17324){
var args__11922__auto__ = cljs.core.seq(arglist__17324);
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
var seq__15237_17325 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15238_17326 = null;var count__15239_17327 = 0;var i__15240_17328 = 0;while(true){
if((i__15240_17328 < count__15239_17327))
{var arg__11924__auto___17329 = cljs.core._nth.call(null,chunk__15238_17326,i__15240_17328);a__11923__auto__.push(arg__11924__auto___17329);
{
var G__17330 = seq__15237_17325;
var G__17331 = chunk__15238_17326;
var G__17332 = count__15239_17327;
var G__17333 = (i__15240_17328 + 1);
seq__15237_17325 = G__17330;
chunk__15238_17326 = G__17331;
count__15239_17327 = G__17332;
i__15240_17328 = G__17333;
continue;
}
} else
{var temp__4092__auto___17334 = cljs.core.seq.call(null,seq__15237_17325);if(temp__4092__auto___17334)
{var seq__15237_17335__$1 = temp__4092__auto___17334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15237_17335__$1))
{var c__11077__auto___17336 = cljs.core.chunk_first.call(null,seq__15237_17335__$1);{
var G__17337 = cljs.core.chunk_rest.call(null,seq__15237_17335__$1);
var G__17338 = c__11077__auto___17336;
var G__17339 = cljs.core.count.call(null,c__11077__auto___17336);
var G__17340 = 0;
seq__15237_17325 = G__17337;
chunk__15238_17326 = G__17338;
count__15239_17327 = G__17339;
i__15240_17328 = G__17340;
continue;
}
} else
{var arg__11924__auto___17341 = cljs.core.first.call(null,seq__15237_17335__$1);a__11923__auto__.push(arg__11924__auto___17341);
{
var G__17342 = cljs.core.next.call(null,seq__15237_17335__$1);
var G__17343 = null;
var G__17344 = 0;
var G__17345 = 0;
seq__15237_17325 = G__17342;
chunk__15238_17326 = G__17343;
count__15239_17327 = G__17344;
i__15240_17328 = G__17345;
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
samp.cljs$lang$applyTo = (function (arglist__17346){
var args__11922__auto__ = cljs.core.seq(arglist__17346);
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
var seq__15245_17347 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15246_17348 = null;var count__15247_17349 = 0;var i__15248_17350 = 0;while(true){
if((i__15248_17350 < count__15247_17349))
{var arg__11924__auto___17351 = cljs.core._nth.call(null,chunk__15246_17348,i__15248_17350);a__11923__auto__.push(arg__11924__auto___17351);
{
var G__17352 = seq__15245_17347;
var G__17353 = chunk__15246_17348;
var G__17354 = count__15247_17349;
var G__17355 = (i__15248_17350 + 1);
seq__15245_17347 = G__17352;
chunk__15246_17348 = G__17353;
count__15247_17349 = G__17354;
i__15248_17350 = G__17355;
continue;
}
} else
{var temp__4092__auto___17356 = cljs.core.seq.call(null,seq__15245_17347);if(temp__4092__auto___17356)
{var seq__15245_17357__$1 = temp__4092__auto___17356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15245_17357__$1))
{var c__11077__auto___17358 = cljs.core.chunk_first.call(null,seq__15245_17357__$1);{
var G__17359 = cljs.core.chunk_rest.call(null,seq__15245_17357__$1);
var G__17360 = c__11077__auto___17358;
var G__17361 = cljs.core.count.call(null,c__11077__auto___17358);
var G__17362 = 0;
seq__15245_17347 = G__17359;
chunk__15246_17348 = G__17360;
count__15247_17349 = G__17361;
i__15248_17350 = G__17362;
continue;
}
} else
{var arg__11924__auto___17363 = cljs.core.first.call(null,seq__15245_17357__$1);a__11923__auto__.push(arg__11924__auto___17363);
{
var G__17364 = cljs.core.next.call(null,seq__15245_17357__$1);
var G__17365 = null;
var G__17366 = 0;
var G__17367 = 0;
seq__15245_17347 = G__17364;
chunk__15246_17348 = G__17365;
count__15247_17349 = G__17366;
i__15248_17350 = G__17367;
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
script.cljs$lang$applyTo = (function (arglist__17368){
var args__11922__auto__ = cljs.core.seq(arglist__17368);
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
var seq__15253_17369 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15254_17370 = null;var count__15255_17371 = 0;var i__15256_17372 = 0;while(true){
if((i__15256_17372 < count__15255_17371))
{var arg__11924__auto___17373 = cljs.core._nth.call(null,chunk__15254_17370,i__15256_17372);a__11923__auto__.push(arg__11924__auto___17373);
{
var G__17374 = seq__15253_17369;
var G__17375 = chunk__15254_17370;
var G__17376 = count__15255_17371;
var G__17377 = (i__15256_17372 + 1);
seq__15253_17369 = G__17374;
chunk__15254_17370 = G__17375;
count__15255_17371 = G__17376;
i__15256_17372 = G__17377;
continue;
}
} else
{var temp__4092__auto___17378 = cljs.core.seq.call(null,seq__15253_17369);if(temp__4092__auto___17378)
{var seq__15253_17379__$1 = temp__4092__auto___17378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15253_17379__$1))
{var c__11077__auto___17380 = cljs.core.chunk_first.call(null,seq__15253_17379__$1);{
var G__17381 = cljs.core.chunk_rest.call(null,seq__15253_17379__$1);
var G__17382 = c__11077__auto___17380;
var G__17383 = cljs.core.count.call(null,c__11077__auto___17380);
var G__17384 = 0;
seq__15253_17369 = G__17381;
chunk__15254_17370 = G__17382;
count__15255_17371 = G__17383;
i__15256_17372 = G__17384;
continue;
}
} else
{var arg__11924__auto___17385 = cljs.core.first.call(null,seq__15253_17379__$1);a__11923__auto__.push(arg__11924__auto___17385);
{
var G__17386 = cljs.core.next.call(null,seq__15253_17379__$1);
var G__17387 = null;
var G__17388 = 0;
var G__17389 = 0;
seq__15253_17369 = G__17386;
chunk__15254_17370 = G__17387;
count__15255_17371 = G__17388;
i__15256_17372 = G__17389;
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
section.cljs$lang$applyTo = (function (arglist__17390){
var args__11922__auto__ = cljs.core.seq(arglist__17390);
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
var seq__15261_17391 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15262_17392 = null;var count__15263_17393 = 0;var i__15264_17394 = 0;while(true){
if((i__15264_17394 < count__15263_17393))
{var arg__11924__auto___17395 = cljs.core._nth.call(null,chunk__15262_17392,i__15264_17394);a__11923__auto__.push(arg__11924__auto___17395);
{
var G__17396 = seq__15261_17391;
var G__17397 = chunk__15262_17392;
var G__17398 = count__15263_17393;
var G__17399 = (i__15264_17394 + 1);
seq__15261_17391 = G__17396;
chunk__15262_17392 = G__17397;
count__15263_17393 = G__17398;
i__15264_17394 = G__17399;
continue;
}
} else
{var temp__4092__auto___17400 = cljs.core.seq.call(null,seq__15261_17391);if(temp__4092__auto___17400)
{var seq__15261_17401__$1 = temp__4092__auto___17400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15261_17401__$1))
{var c__11077__auto___17402 = cljs.core.chunk_first.call(null,seq__15261_17401__$1);{
var G__17403 = cljs.core.chunk_rest.call(null,seq__15261_17401__$1);
var G__17404 = c__11077__auto___17402;
var G__17405 = cljs.core.count.call(null,c__11077__auto___17402);
var G__17406 = 0;
seq__15261_17391 = G__17403;
chunk__15262_17392 = G__17404;
count__15263_17393 = G__17405;
i__15264_17394 = G__17406;
continue;
}
} else
{var arg__11924__auto___17407 = cljs.core.first.call(null,seq__15261_17401__$1);a__11923__auto__.push(arg__11924__auto___17407);
{
var G__17408 = cljs.core.next.call(null,seq__15261_17401__$1);
var G__17409 = null;
var G__17410 = 0;
var G__17411 = 0;
seq__15261_17391 = G__17408;
chunk__15262_17392 = G__17409;
count__15263_17393 = G__17410;
i__15264_17394 = G__17411;
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
select.cljs$lang$applyTo = (function (arglist__17412){
var args__11922__auto__ = cljs.core.seq(arglist__17412);
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
var seq__15269_17413 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15270_17414 = null;var count__15271_17415 = 0;var i__15272_17416 = 0;while(true){
if((i__15272_17416 < count__15271_17415))
{var arg__11924__auto___17417 = cljs.core._nth.call(null,chunk__15270_17414,i__15272_17416);a__11923__auto__.push(arg__11924__auto___17417);
{
var G__17418 = seq__15269_17413;
var G__17419 = chunk__15270_17414;
var G__17420 = count__15271_17415;
var G__17421 = (i__15272_17416 + 1);
seq__15269_17413 = G__17418;
chunk__15270_17414 = G__17419;
count__15271_17415 = G__17420;
i__15272_17416 = G__17421;
continue;
}
} else
{var temp__4092__auto___17422 = cljs.core.seq.call(null,seq__15269_17413);if(temp__4092__auto___17422)
{var seq__15269_17423__$1 = temp__4092__auto___17422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15269_17423__$1))
{var c__11077__auto___17424 = cljs.core.chunk_first.call(null,seq__15269_17423__$1);{
var G__17425 = cljs.core.chunk_rest.call(null,seq__15269_17423__$1);
var G__17426 = c__11077__auto___17424;
var G__17427 = cljs.core.count.call(null,c__11077__auto___17424);
var G__17428 = 0;
seq__15269_17413 = G__17425;
chunk__15270_17414 = G__17426;
count__15271_17415 = G__17427;
i__15272_17416 = G__17428;
continue;
}
} else
{var arg__11924__auto___17429 = cljs.core.first.call(null,seq__15269_17423__$1);a__11923__auto__.push(arg__11924__auto___17429);
{
var G__17430 = cljs.core.next.call(null,seq__15269_17423__$1);
var G__17431 = null;
var G__17432 = 0;
var G__17433 = 0;
seq__15269_17413 = G__17430;
chunk__15270_17414 = G__17431;
count__15271_17415 = G__17432;
i__15272_17416 = G__17433;
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
small.cljs$lang$applyTo = (function (arglist__17434){
var args__11922__auto__ = cljs.core.seq(arglist__17434);
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
var seq__15277_17435 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15278_17436 = null;var count__15279_17437 = 0;var i__15280_17438 = 0;while(true){
if((i__15280_17438 < count__15279_17437))
{var arg__11924__auto___17439 = cljs.core._nth.call(null,chunk__15278_17436,i__15280_17438);a__11923__auto__.push(arg__11924__auto___17439);
{
var G__17440 = seq__15277_17435;
var G__17441 = chunk__15278_17436;
var G__17442 = count__15279_17437;
var G__17443 = (i__15280_17438 + 1);
seq__15277_17435 = G__17440;
chunk__15278_17436 = G__17441;
count__15279_17437 = G__17442;
i__15280_17438 = G__17443;
continue;
}
} else
{var temp__4092__auto___17444 = cljs.core.seq.call(null,seq__15277_17435);if(temp__4092__auto___17444)
{var seq__15277_17445__$1 = temp__4092__auto___17444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15277_17445__$1))
{var c__11077__auto___17446 = cljs.core.chunk_first.call(null,seq__15277_17445__$1);{
var G__17447 = cljs.core.chunk_rest.call(null,seq__15277_17445__$1);
var G__17448 = c__11077__auto___17446;
var G__17449 = cljs.core.count.call(null,c__11077__auto___17446);
var G__17450 = 0;
seq__15277_17435 = G__17447;
chunk__15278_17436 = G__17448;
count__15279_17437 = G__17449;
i__15280_17438 = G__17450;
continue;
}
} else
{var arg__11924__auto___17451 = cljs.core.first.call(null,seq__15277_17445__$1);a__11923__auto__.push(arg__11924__auto___17451);
{
var G__17452 = cljs.core.next.call(null,seq__15277_17445__$1);
var G__17453 = null;
var G__17454 = 0;
var G__17455 = 0;
seq__15277_17435 = G__17452;
chunk__15278_17436 = G__17453;
count__15279_17437 = G__17454;
i__15280_17438 = G__17455;
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
source.cljs$lang$applyTo = (function (arglist__17456){
var args__11922__auto__ = cljs.core.seq(arglist__17456);
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
var seq__15285_17457 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15286_17458 = null;var count__15287_17459 = 0;var i__15288_17460 = 0;while(true){
if((i__15288_17460 < count__15287_17459))
{var arg__11924__auto___17461 = cljs.core._nth.call(null,chunk__15286_17458,i__15288_17460);a__11923__auto__.push(arg__11924__auto___17461);
{
var G__17462 = seq__15285_17457;
var G__17463 = chunk__15286_17458;
var G__17464 = count__15287_17459;
var G__17465 = (i__15288_17460 + 1);
seq__15285_17457 = G__17462;
chunk__15286_17458 = G__17463;
count__15287_17459 = G__17464;
i__15288_17460 = G__17465;
continue;
}
} else
{var temp__4092__auto___17466 = cljs.core.seq.call(null,seq__15285_17457);if(temp__4092__auto___17466)
{var seq__15285_17467__$1 = temp__4092__auto___17466;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15285_17467__$1))
{var c__11077__auto___17468 = cljs.core.chunk_first.call(null,seq__15285_17467__$1);{
var G__17469 = cljs.core.chunk_rest.call(null,seq__15285_17467__$1);
var G__17470 = c__11077__auto___17468;
var G__17471 = cljs.core.count.call(null,c__11077__auto___17468);
var G__17472 = 0;
seq__15285_17457 = G__17469;
chunk__15286_17458 = G__17470;
count__15287_17459 = G__17471;
i__15288_17460 = G__17472;
continue;
}
} else
{var arg__11924__auto___17473 = cljs.core.first.call(null,seq__15285_17467__$1);a__11923__auto__.push(arg__11924__auto___17473);
{
var G__17474 = cljs.core.next.call(null,seq__15285_17467__$1);
var G__17475 = null;
var G__17476 = 0;
var G__17477 = 0;
seq__15285_17457 = G__17474;
chunk__15286_17458 = G__17475;
count__15287_17459 = G__17476;
i__15288_17460 = G__17477;
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
span.cljs$lang$applyTo = (function (arglist__17478){
var args__11922__auto__ = cljs.core.seq(arglist__17478);
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
var seq__15293_17479 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15294_17480 = null;var count__15295_17481 = 0;var i__15296_17482 = 0;while(true){
if((i__15296_17482 < count__15295_17481))
{var arg__11924__auto___17483 = cljs.core._nth.call(null,chunk__15294_17480,i__15296_17482);a__11923__auto__.push(arg__11924__auto___17483);
{
var G__17484 = seq__15293_17479;
var G__17485 = chunk__15294_17480;
var G__17486 = count__15295_17481;
var G__17487 = (i__15296_17482 + 1);
seq__15293_17479 = G__17484;
chunk__15294_17480 = G__17485;
count__15295_17481 = G__17486;
i__15296_17482 = G__17487;
continue;
}
} else
{var temp__4092__auto___17488 = cljs.core.seq.call(null,seq__15293_17479);if(temp__4092__auto___17488)
{var seq__15293_17489__$1 = temp__4092__auto___17488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15293_17489__$1))
{var c__11077__auto___17490 = cljs.core.chunk_first.call(null,seq__15293_17489__$1);{
var G__17491 = cljs.core.chunk_rest.call(null,seq__15293_17489__$1);
var G__17492 = c__11077__auto___17490;
var G__17493 = cljs.core.count.call(null,c__11077__auto___17490);
var G__17494 = 0;
seq__15293_17479 = G__17491;
chunk__15294_17480 = G__17492;
count__15295_17481 = G__17493;
i__15296_17482 = G__17494;
continue;
}
} else
{var arg__11924__auto___17495 = cljs.core.first.call(null,seq__15293_17489__$1);a__11923__auto__.push(arg__11924__auto___17495);
{
var G__17496 = cljs.core.next.call(null,seq__15293_17489__$1);
var G__17497 = null;
var G__17498 = 0;
var G__17499 = 0;
seq__15293_17479 = G__17496;
chunk__15294_17480 = G__17497;
count__15295_17481 = G__17498;
i__15296_17482 = G__17499;
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
strong.cljs$lang$applyTo = (function (arglist__17500){
var args__11922__auto__ = cljs.core.seq(arglist__17500);
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
var seq__15301_17501 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15302_17502 = null;var count__15303_17503 = 0;var i__15304_17504 = 0;while(true){
if((i__15304_17504 < count__15303_17503))
{var arg__11924__auto___17505 = cljs.core._nth.call(null,chunk__15302_17502,i__15304_17504);a__11923__auto__.push(arg__11924__auto___17505);
{
var G__17506 = seq__15301_17501;
var G__17507 = chunk__15302_17502;
var G__17508 = count__15303_17503;
var G__17509 = (i__15304_17504 + 1);
seq__15301_17501 = G__17506;
chunk__15302_17502 = G__17507;
count__15303_17503 = G__17508;
i__15304_17504 = G__17509;
continue;
}
} else
{var temp__4092__auto___17510 = cljs.core.seq.call(null,seq__15301_17501);if(temp__4092__auto___17510)
{var seq__15301_17511__$1 = temp__4092__auto___17510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15301_17511__$1))
{var c__11077__auto___17512 = cljs.core.chunk_first.call(null,seq__15301_17511__$1);{
var G__17513 = cljs.core.chunk_rest.call(null,seq__15301_17511__$1);
var G__17514 = c__11077__auto___17512;
var G__17515 = cljs.core.count.call(null,c__11077__auto___17512);
var G__17516 = 0;
seq__15301_17501 = G__17513;
chunk__15302_17502 = G__17514;
count__15303_17503 = G__17515;
i__15304_17504 = G__17516;
continue;
}
} else
{var arg__11924__auto___17517 = cljs.core.first.call(null,seq__15301_17511__$1);a__11923__auto__.push(arg__11924__auto___17517);
{
var G__17518 = cljs.core.next.call(null,seq__15301_17511__$1);
var G__17519 = null;
var G__17520 = 0;
var G__17521 = 0;
seq__15301_17501 = G__17518;
chunk__15302_17502 = G__17519;
count__15303_17503 = G__17520;
i__15304_17504 = G__17521;
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
style.cljs$lang$applyTo = (function (arglist__17522){
var args__11922__auto__ = cljs.core.seq(arglist__17522);
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
var seq__15309_17523 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15310_17524 = null;var count__15311_17525 = 0;var i__15312_17526 = 0;while(true){
if((i__15312_17526 < count__15311_17525))
{var arg__11924__auto___17527 = cljs.core._nth.call(null,chunk__15310_17524,i__15312_17526);a__11923__auto__.push(arg__11924__auto___17527);
{
var G__17528 = seq__15309_17523;
var G__17529 = chunk__15310_17524;
var G__17530 = count__15311_17525;
var G__17531 = (i__15312_17526 + 1);
seq__15309_17523 = G__17528;
chunk__15310_17524 = G__17529;
count__15311_17525 = G__17530;
i__15312_17526 = G__17531;
continue;
}
} else
{var temp__4092__auto___17532 = cljs.core.seq.call(null,seq__15309_17523);if(temp__4092__auto___17532)
{var seq__15309_17533__$1 = temp__4092__auto___17532;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15309_17533__$1))
{var c__11077__auto___17534 = cljs.core.chunk_first.call(null,seq__15309_17533__$1);{
var G__17535 = cljs.core.chunk_rest.call(null,seq__15309_17533__$1);
var G__17536 = c__11077__auto___17534;
var G__17537 = cljs.core.count.call(null,c__11077__auto___17534);
var G__17538 = 0;
seq__15309_17523 = G__17535;
chunk__15310_17524 = G__17536;
count__15311_17525 = G__17537;
i__15312_17526 = G__17538;
continue;
}
} else
{var arg__11924__auto___17539 = cljs.core.first.call(null,seq__15309_17533__$1);a__11923__auto__.push(arg__11924__auto___17539);
{
var G__17540 = cljs.core.next.call(null,seq__15309_17533__$1);
var G__17541 = null;
var G__17542 = 0;
var G__17543 = 0;
seq__15309_17523 = G__17540;
chunk__15310_17524 = G__17541;
count__15311_17525 = G__17542;
i__15312_17526 = G__17543;
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
sub.cljs$lang$applyTo = (function (arglist__17544){
var args__11922__auto__ = cljs.core.seq(arglist__17544);
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
var seq__15317_17545 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15318_17546 = null;var count__15319_17547 = 0;var i__15320_17548 = 0;while(true){
if((i__15320_17548 < count__15319_17547))
{var arg__11924__auto___17549 = cljs.core._nth.call(null,chunk__15318_17546,i__15320_17548);a__11923__auto__.push(arg__11924__auto___17549);
{
var G__17550 = seq__15317_17545;
var G__17551 = chunk__15318_17546;
var G__17552 = count__15319_17547;
var G__17553 = (i__15320_17548 + 1);
seq__15317_17545 = G__17550;
chunk__15318_17546 = G__17551;
count__15319_17547 = G__17552;
i__15320_17548 = G__17553;
continue;
}
} else
{var temp__4092__auto___17554 = cljs.core.seq.call(null,seq__15317_17545);if(temp__4092__auto___17554)
{var seq__15317_17555__$1 = temp__4092__auto___17554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15317_17555__$1))
{var c__11077__auto___17556 = cljs.core.chunk_first.call(null,seq__15317_17555__$1);{
var G__17557 = cljs.core.chunk_rest.call(null,seq__15317_17555__$1);
var G__17558 = c__11077__auto___17556;
var G__17559 = cljs.core.count.call(null,c__11077__auto___17556);
var G__17560 = 0;
seq__15317_17545 = G__17557;
chunk__15318_17546 = G__17558;
count__15319_17547 = G__17559;
i__15320_17548 = G__17560;
continue;
}
} else
{var arg__11924__auto___17561 = cljs.core.first.call(null,seq__15317_17555__$1);a__11923__auto__.push(arg__11924__auto___17561);
{
var G__17562 = cljs.core.next.call(null,seq__15317_17555__$1);
var G__17563 = null;
var G__17564 = 0;
var G__17565 = 0;
seq__15317_17545 = G__17562;
chunk__15318_17546 = G__17563;
count__15319_17547 = G__17564;
i__15320_17548 = G__17565;
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
summary.cljs$lang$applyTo = (function (arglist__17566){
var args__11922__auto__ = cljs.core.seq(arglist__17566);
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
var seq__15325_17567 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15326_17568 = null;var count__15327_17569 = 0;var i__15328_17570 = 0;while(true){
if((i__15328_17570 < count__15327_17569))
{var arg__11924__auto___17571 = cljs.core._nth.call(null,chunk__15326_17568,i__15328_17570);a__11923__auto__.push(arg__11924__auto___17571);
{
var G__17572 = seq__15325_17567;
var G__17573 = chunk__15326_17568;
var G__17574 = count__15327_17569;
var G__17575 = (i__15328_17570 + 1);
seq__15325_17567 = G__17572;
chunk__15326_17568 = G__17573;
count__15327_17569 = G__17574;
i__15328_17570 = G__17575;
continue;
}
} else
{var temp__4092__auto___17576 = cljs.core.seq.call(null,seq__15325_17567);if(temp__4092__auto___17576)
{var seq__15325_17577__$1 = temp__4092__auto___17576;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15325_17577__$1))
{var c__11077__auto___17578 = cljs.core.chunk_first.call(null,seq__15325_17577__$1);{
var G__17579 = cljs.core.chunk_rest.call(null,seq__15325_17577__$1);
var G__17580 = c__11077__auto___17578;
var G__17581 = cljs.core.count.call(null,c__11077__auto___17578);
var G__17582 = 0;
seq__15325_17567 = G__17579;
chunk__15326_17568 = G__17580;
count__15327_17569 = G__17581;
i__15328_17570 = G__17582;
continue;
}
} else
{var arg__11924__auto___17583 = cljs.core.first.call(null,seq__15325_17577__$1);a__11923__auto__.push(arg__11924__auto___17583);
{
var G__17584 = cljs.core.next.call(null,seq__15325_17577__$1);
var G__17585 = null;
var G__17586 = 0;
var G__17587 = 0;
seq__15325_17567 = G__17584;
chunk__15326_17568 = G__17585;
count__15327_17569 = G__17586;
i__15328_17570 = G__17587;
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
sup.cljs$lang$applyTo = (function (arglist__17588){
var args__11922__auto__ = cljs.core.seq(arglist__17588);
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
var seq__15333_17589 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15334_17590 = null;var count__15335_17591 = 0;var i__15336_17592 = 0;while(true){
if((i__15336_17592 < count__15335_17591))
{var arg__11924__auto___17593 = cljs.core._nth.call(null,chunk__15334_17590,i__15336_17592);a__11923__auto__.push(arg__11924__auto___17593);
{
var G__17594 = seq__15333_17589;
var G__17595 = chunk__15334_17590;
var G__17596 = count__15335_17591;
var G__17597 = (i__15336_17592 + 1);
seq__15333_17589 = G__17594;
chunk__15334_17590 = G__17595;
count__15335_17591 = G__17596;
i__15336_17592 = G__17597;
continue;
}
} else
{var temp__4092__auto___17598 = cljs.core.seq.call(null,seq__15333_17589);if(temp__4092__auto___17598)
{var seq__15333_17599__$1 = temp__4092__auto___17598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15333_17599__$1))
{var c__11077__auto___17600 = cljs.core.chunk_first.call(null,seq__15333_17599__$1);{
var G__17601 = cljs.core.chunk_rest.call(null,seq__15333_17599__$1);
var G__17602 = c__11077__auto___17600;
var G__17603 = cljs.core.count.call(null,c__11077__auto___17600);
var G__17604 = 0;
seq__15333_17589 = G__17601;
chunk__15334_17590 = G__17602;
count__15335_17591 = G__17603;
i__15336_17592 = G__17604;
continue;
}
} else
{var arg__11924__auto___17605 = cljs.core.first.call(null,seq__15333_17599__$1);a__11923__auto__.push(arg__11924__auto___17605);
{
var G__17606 = cljs.core.next.call(null,seq__15333_17599__$1);
var G__17607 = null;
var G__17608 = 0;
var G__17609 = 0;
seq__15333_17589 = G__17606;
chunk__15334_17590 = G__17607;
count__15335_17591 = G__17608;
i__15336_17592 = G__17609;
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
table.cljs$lang$applyTo = (function (arglist__17610){
var args__11922__auto__ = cljs.core.seq(arglist__17610);
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
var seq__15341_17611 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15342_17612 = null;var count__15343_17613 = 0;var i__15344_17614 = 0;while(true){
if((i__15344_17614 < count__15343_17613))
{var arg__11924__auto___17615 = cljs.core._nth.call(null,chunk__15342_17612,i__15344_17614);a__11923__auto__.push(arg__11924__auto___17615);
{
var G__17616 = seq__15341_17611;
var G__17617 = chunk__15342_17612;
var G__17618 = count__15343_17613;
var G__17619 = (i__15344_17614 + 1);
seq__15341_17611 = G__17616;
chunk__15342_17612 = G__17617;
count__15343_17613 = G__17618;
i__15344_17614 = G__17619;
continue;
}
} else
{var temp__4092__auto___17620 = cljs.core.seq.call(null,seq__15341_17611);if(temp__4092__auto___17620)
{var seq__15341_17621__$1 = temp__4092__auto___17620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15341_17621__$1))
{var c__11077__auto___17622 = cljs.core.chunk_first.call(null,seq__15341_17621__$1);{
var G__17623 = cljs.core.chunk_rest.call(null,seq__15341_17621__$1);
var G__17624 = c__11077__auto___17622;
var G__17625 = cljs.core.count.call(null,c__11077__auto___17622);
var G__17626 = 0;
seq__15341_17611 = G__17623;
chunk__15342_17612 = G__17624;
count__15343_17613 = G__17625;
i__15344_17614 = G__17626;
continue;
}
} else
{var arg__11924__auto___17627 = cljs.core.first.call(null,seq__15341_17621__$1);a__11923__auto__.push(arg__11924__auto___17627);
{
var G__17628 = cljs.core.next.call(null,seq__15341_17621__$1);
var G__17629 = null;
var G__17630 = 0;
var G__17631 = 0;
seq__15341_17611 = G__17628;
chunk__15342_17612 = G__17629;
count__15343_17613 = G__17630;
i__15344_17614 = G__17631;
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
tbody.cljs$lang$applyTo = (function (arglist__17632){
var args__11922__auto__ = cljs.core.seq(arglist__17632);
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
var seq__15349_17633 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15350_17634 = null;var count__15351_17635 = 0;var i__15352_17636 = 0;while(true){
if((i__15352_17636 < count__15351_17635))
{var arg__11924__auto___17637 = cljs.core._nth.call(null,chunk__15350_17634,i__15352_17636);a__11923__auto__.push(arg__11924__auto___17637);
{
var G__17638 = seq__15349_17633;
var G__17639 = chunk__15350_17634;
var G__17640 = count__15351_17635;
var G__17641 = (i__15352_17636 + 1);
seq__15349_17633 = G__17638;
chunk__15350_17634 = G__17639;
count__15351_17635 = G__17640;
i__15352_17636 = G__17641;
continue;
}
} else
{var temp__4092__auto___17642 = cljs.core.seq.call(null,seq__15349_17633);if(temp__4092__auto___17642)
{var seq__15349_17643__$1 = temp__4092__auto___17642;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15349_17643__$1))
{var c__11077__auto___17644 = cljs.core.chunk_first.call(null,seq__15349_17643__$1);{
var G__17645 = cljs.core.chunk_rest.call(null,seq__15349_17643__$1);
var G__17646 = c__11077__auto___17644;
var G__17647 = cljs.core.count.call(null,c__11077__auto___17644);
var G__17648 = 0;
seq__15349_17633 = G__17645;
chunk__15350_17634 = G__17646;
count__15351_17635 = G__17647;
i__15352_17636 = G__17648;
continue;
}
} else
{var arg__11924__auto___17649 = cljs.core.first.call(null,seq__15349_17643__$1);a__11923__auto__.push(arg__11924__auto___17649);
{
var G__17650 = cljs.core.next.call(null,seq__15349_17643__$1);
var G__17651 = null;
var G__17652 = 0;
var G__17653 = 0;
seq__15349_17633 = G__17650;
chunk__15350_17634 = G__17651;
count__15351_17635 = G__17652;
i__15352_17636 = G__17653;
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
td.cljs$lang$applyTo = (function (arglist__17654){
var args__11922__auto__ = cljs.core.seq(arglist__17654);
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
var seq__15357_17655 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15358_17656 = null;var count__15359_17657 = 0;var i__15360_17658 = 0;while(true){
if((i__15360_17658 < count__15359_17657))
{var arg__11924__auto___17659 = cljs.core._nth.call(null,chunk__15358_17656,i__15360_17658);a__11923__auto__.push(arg__11924__auto___17659);
{
var G__17660 = seq__15357_17655;
var G__17661 = chunk__15358_17656;
var G__17662 = count__15359_17657;
var G__17663 = (i__15360_17658 + 1);
seq__15357_17655 = G__17660;
chunk__15358_17656 = G__17661;
count__15359_17657 = G__17662;
i__15360_17658 = G__17663;
continue;
}
} else
{var temp__4092__auto___17664 = cljs.core.seq.call(null,seq__15357_17655);if(temp__4092__auto___17664)
{var seq__15357_17665__$1 = temp__4092__auto___17664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15357_17665__$1))
{var c__11077__auto___17666 = cljs.core.chunk_first.call(null,seq__15357_17665__$1);{
var G__17667 = cljs.core.chunk_rest.call(null,seq__15357_17665__$1);
var G__17668 = c__11077__auto___17666;
var G__17669 = cljs.core.count.call(null,c__11077__auto___17666);
var G__17670 = 0;
seq__15357_17655 = G__17667;
chunk__15358_17656 = G__17668;
count__15359_17657 = G__17669;
i__15360_17658 = G__17670;
continue;
}
} else
{var arg__11924__auto___17671 = cljs.core.first.call(null,seq__15357_17665__$1);a__11923__auto__.push(arg__11924__auto___17671);
{
var G__17672 = cljs.core.next.call(null,seq__15357_17665__$1);
var G__17673 = null;
var G__17674 = 0;
var G__17675 = 0;
seq__15357_17655 = G__17672;
chunk__15358_17656 = G__17673;
count__15359_17657 = G__17674;
i__15360_17658 = G__17675;
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
textarea.cljs$lang$applyTo = (function (arglist__17676){
var args__11922__auto__ = cljs.core.seq(arglist__17676);
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
var seq__15365_17677 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15366_17678 = null;var count__15367_17679 = 0;var i__15368_17680 = 0;while(true){
if((i__15368_17680 < count__15367_17679))
{var arg__11924__auto___17681 = cljs.core._nth.call(null,chunk__15366_17678,i__15368_17680);a__11923__auto__.push(arg__11924__auto___17681);
{
var G__17682 = seq__15365_17677;
var G__17683 = chunk__15366_17678;
var G__17684 = count__15367_17679;
var G__17685 = (i__15368_17680 + 1);
seq__15365_17677 = G__17682;
chunk__15366_17678 = G__17683;
count__15367_17679 = G__17684;
i__15368_17680 = G__17685;
continue;
}
} else
{var temp__4092__auto___17686 = cljs.core.seq.call(null,seq__15365_17677);if(temp__4092__auto___17686)
{var seq__15365_17687__$1 = temp__4092__auto___17686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15365_17687__$1))
{var c__11077__auto___17688 = cljs.core.chunk_first.call(null,seq__15365_17687__$1);{
var G__17689 = cljs.core.chunk_rest.call(null,seq__15365_17687__$1);
var G__17690 = c__11077__auto___17688;
var G__17691 = cljs.core.count.call(null,c__11077__auto___17688);
var G__17692 = 0;
seq__15365_17677 = G__17689;
chunk__15366_17678 = G__17690;
count__15367_17679 = G__17691;
i__15368_17680 = G__17692;
continue;
}
} else
{var arg__11924__auto___17693 = cljs.core.first.call(null,seq__15365_17687__$1);a__11923__auto__.push(arg__11924__auto___17693);
{
var G__17694 = cljs.core.next.call(null,seq__15365_17687__$1);
var G__17695 = null;
var G__17696 = 0;
var G__17697 = 0;
seq__15365_17677 = G__17694;
chunk__15366_17678 = G__17695;
count__15367_17679 = G__17696;
i__15368_17680 = G__17697;
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
tfoot.cljs$lang$applyTo = (function (arglist__17698){
var args__11922__auto__ = cljs.core.seq(arglist__17698);
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
var seq__15373_17699 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15374_17700 = null;var count__15375_17701 = 0;var i__15376_17702 = 0;while(true){
if((i__15376_17702 < count__15375_17701))
{var arg__11924__auto___17703 = cljs.core._nth.call(null,chunk__15374_17700,i__15376_17702);a__11923__auto__.push(arg__11924__auto___17703);
{
var G__17704 = seq__15373_17699;
var G__17705 = chunk__15374_17700;
var G__17706 = count__15375_17701;
var G__17707 = (i__15376_17702 + 1);
seq__15373_17699 = G__17704;
chunk__15374_17700 = G__17705;
count__15375_17701 = G__17706;
i__15376_17702 = G__17707;
continue;
}
} else
{var temp__4092__auto___17708 = cljs.core.seq.call(null,seq__15373_17699);if(temp__4092__auto___17708)
{var seq__15373_17709__$1 = temp__4092__auto___17708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15373_17709__$1))
{var c__11077__auto___17710 = cljs.core.chunk_first.call(null,seq__15373_17709__$1);{
var G__17711 = cljs.core.chunk_rest.call(null,seq__15373_17709__$1);
var G__17712 = c__11077__auto___17710;
var G__17713 = cljs.core.count.call(null,c__11077__auto___17710);
var G__17714 = 0;
seq__15373_17699 = G__17711;
chunk__15374_17700 = G__17712;
count__15375_17701 = G__17713;
i__15376_17702 = G__17714;
continue;
}
} else
{var arg__11924__auto___17715 = cljs.core.first.call(null,seq__15373_17709__$1);a__11923__auto__.push(arg__11924__auto___17715);
{
var G__17716 = cljs.core.next.call(null,seq__15373_17709__$1);
var G__17717 = null;
var G__17718 = 0;
var G__17719 = 0;
seq__15373_17699 = G__17716;
chunk__15374_17700 = G__17717;
count__15375_17701 = G__17718;
i__15376_17702 = G__17719;
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
th.cljs$lang$applyTo = (function (arglist__17720){
var args__11922__auto__ = cljs.core.seq(arglist__17720);
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
var seq__15381_17721 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15382_17722 = null;var count__15383_17723 = 0;var i__15384_17724 = 0;while(true){
if((i__15384_17724 < count__15383_17723))
{var arg__11924__auto___17725 = cljs.core._nth.call(null,chunk__15382_17722,i__15384_17724);a__11923__auto__.push(arg__11924__auto___17725);
{
var G__17726 = seq__15381_17721;
var G__17727 = chunk__15382_17722;
var G__17728 = count__15383_17723;
var G__17729 = (i__15384_17724 + 1);
seq__15381_17721 = G__17726;
chunk__15382_17722 = G__17727;
count__15383_17723 = G__17728;
i__15384_17724 = G__17729;
continue;
}
} else
{var temp__4092__auto___17730 = cljs.core.seq.call(null,seq__15381_17721);if(temp__4092__auto___17730)
{var seq__15381_17731__$1 = temp__4092__auto___17730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15381_17731__$1))
{var c__11077__auto___17732 = cljs.core.chunk_first.call(null,seq__15381_17731__$1);{
var G__17733 = cljs.core.chunk_rest.call(null,seq__15381_17731__$1);
var G__17734 = c__11077__auto___17732;
var G__17735 = cljs.core.count.call(null,c__11077__auto___17732);
var G__17736 = 0;
seq__15381_17721 = G__17733;
chunk__15382_17722 = G__17734;
count__15383_17723 = G__17735;
i__15384_17724 = G__17736;
continue;
}
} else
{var arg__11924__auto___17737 = cljs.core.first.call(null,seq__15381_17731__$1);a__11923__auto__.push(arg__11924__auto___17737);
{
var G__17738 = cljs.core.next.call(null,seq__15381_17731__$1);
var G__17739 = null;
var G__17740 = 0;
var G__17741 = 0;
seq__15381_17721 = G__17738;
chunk__15382_17722 = G__17739;
count__15383_17723 = G__17740;
i__15384_17724 = G__17741;
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
thead.cljs$lang$applyTo = (function (arglist__17742){
var args__11922__auto__ = cljs.core.seq(arglist__17742);
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
var seq__15389_17743 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15390_17744 = null;var count__15391_17745 = 0;var i__15392_17746 = 0;while(true){
if((i__15392_17746 < count__15391_17745))
{var arg__11924__auto___17747 = cljs.core._nth.call(null,chunk__15390_17744,i__15392_17746);a__11923__auto__.push(arg__11924__auto___17747);
{
var G__17748 = seq__15389_17743;
var G__17749 = chunk__15390_17744;
var G__17750 = count__15391_17745;
var G__17751 = (i__15392_17746 + 1);
seq__15389_17743 = G__17748;
chunk__15390_17744 = G__17749;
count__15391_17745 = G__17750;
i__15392_17746 = G__17751;
continue;
}
} else
{var temp__4092__auto___17752 = cljs.core.seq.call(null,seq__15389_17743);if(temp__4092__auto___17752)
{var seq__15389_17753__$1 = temp__4092__auto___17752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15389_17753__$1))
{var c__11077__auto___17754 = cljs.core.chunk_first.call(null,seq__15389_17753__$1);{
var G__17755 = cljs.core.chunk_rest.call(null,seq__15389_17753__$1);
var G__17756 = c__11077__auto___17754;
var G__17757 = cljs.core.count.call(null,c__11077__auto___17754);
var G__17758 = 0;
seq__15389_17743 = G__17755;
chunk__15390_17744 = G__17756;
count__15391_17745 = G__17757;
i__15392_17746 = G__17758;
continue;
}
} else
{var arg__11924__auto___17759 = cljs.core.first.call(null,seq__15389_17753__$1);a__11923__auto__.push(arg__11924__auto___17759);
{
var G__17760 = cljs.core.next.call(null,seq__15389_17753__$1);
var G__17761 = null;
var G__17762 = 0;
var G__17763 = 0;
seq__15389_17743 = G__17760;
chunk__15390_17744 = G__17761;
count__15391_17745 = G__17762;
i__15392_17746 = G__17763;
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
time.cljs$lang$applyTo = (function (arglist__17764){
var args__11922__auto__ = cljs.core.seq(arglist__17764);
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
var seq__15397_17765 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15398_17766 = null;var count__15399_17767 = 0;var i__15400_17768 = 0;while(true){
if((i__15400_17768 < count__15399_17767))
{var arg__11924__auto___17769 = cljs.core._nth.call(null,chunk__15398_17766,i__15400_17768);a__11923__auto__.push(arg__11924__auto___17769);
{
var G__17770 = seq__15397_17765;
var G__17771 = chunk__15398_17766;
var G__17772 = count__15399_17767;
var G__17773 = (i__15400_17768 + 1);
seq__15397_17765 = G__17770;
chunk__15398_17766 = G__17771;
count__15399_17767 = G__17772;
i__15400_17768 = G__17773;
continue;
}
} else
{var temp__4092__auto___17774 = cljs.core.seq.call(null,seq__15397_17765);if(temp__4092__auto___17774)
{var seq__15397_17775__$1 = temp__4092__auto___17774;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15397_17775__$1))
{var c__11077__auto___17776 = cljs.core.chunk_first.call(null,seq__15397_17775__$1);{
var G__17777 = cljs.core.chunk_rest.call(null,seq__15397_17775__$1);
var G__17778 = c__11077__auto___17776;
var G__17779 = cljs.core.count.call(null,c__11077__auto___17776);
var G__17780 = 0;
seq__15397_17765 = G__17777;
chunk__15398_17766 = G__17778;
count__15399_17767 = G__17779;
i__15400_17768 = G__17780;
continue;
}
} else
{var arg__11924__auto___17781 = cljs.core.first.call(null,seq__15397_17775__$1);a__11923__auto__.push(arg__11924__auto___17781);
{
var G__17782 = cljs.core.next.call(null,seq__15397_17775__$1);
var G__17783 = null;
var G__17784 = 0;
var G__17785 = 0;
seq__15397_17765 = G__17782;
chunk__15398_17766 = G__17783;
count__15399_17767 = G__17784;
i__15400_17768 = G__17785;
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
title.cljs$lang$applyTo = (function (arglist__17786){
var args__11922__auto__ = cljs.core.seq(arglist__17786);
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
var seq__15405_17787 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15406_17788 = null;var count__15407_17789 = 0;var i__15408_17790 = 0;while(true){
if((i__15408_17790 < count__15407_17789))
{var arg__11924__auto___17791 = cljs.core._nth.call(null,chunk__15406_17788,i__15408_17790);a__11923__auto__.push(arg__11924__auto___17791);
{
var G__17792 = seq__15405_17787;
var G__17793 = chunk__15406_17788;
var G__17794 = count__15407_17789;
var G__17795 = (i__15408_17790 + 1);
seq__15405_17787 = G__17792;
chunk__15406_17788 = G__17793;
count__15407_17789 = G__17794;
i__15408_17790 = G__17795;
continue;
}
} else
{var temp__4092__auto___17796 = cljs.core.seq.call(null,seq__15405_17787);if(temp__4092__auto___17796)
{var seq__15405_17797__$1 = temp__4092__auto___17796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15405_17797__$1))
{var c__11077__auto___17798 = cljs.core.chunk_first.call(null,seq__15405_17797__$1);{
var G__17799 = cljs.core.chunk_rest.call(null,seq__15405_17797__$1);
var G__17800 = c__11077__auto___17798;
var G__17801 = cljs.core.count.call(null,c__11077__auto___17798);
var G__17802 = 0;
seq__15405_17787 = G__17799;
chunk__15406_17788 = G__17800;
count__15407_17789 = G__17801;
i__15408_17790 = G__17802;
continue;
}
} else
{var arg__11924__auto___17803 = cljs.core.first.call(null,seq__15405_17797__$1);a__11923__auto__.push(arg__11924__auto___17803);
{
var G__17804 = cljs.core.next.call(null,seq__15405_17797__$1);
var G__17805 = null;
var G__17806 = 0;
var G__17807 = 0;
seq__15405_17787 = G__17804;
chunk__15406_17788 = G__17805;
count__15407_17789 = G__17806;
i__15408_17790 = G__17807;
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
tr.cljs$lang$applyTo = (function (arglist__17808){
var args__11922__auto__ = cljs.core.seq(arglist__17808);
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
var seq__15413_17809 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15414_17810 = null;var count__15415_17811 = 0;var i__15416_17812 = 0;while(true){
if((i__15416_17812 < count__15415_17811))
{var arg__11924__auto___17813 = cljs.core._nth.call(null,chunk__15414_17810,i__15416_17812);a__11923__auto__.push(arg__11924__auto___17813);
{
var G__17814 = seq__15413_17809;
var G__17815 = chunk__15414_17810;
var G__17816 = count__15415_17811;
var G__17817 = (i__15416_17812 + 1);
seq__15413_17809 = G__17814;
chunk__15414_17810 = G__17815;
count__15415_17811 = G__17816;
i__15416_17812 = G__17817;
continue;
}
} else
{var temp__4092__auto___17818 = cljs.core.seq.call(null,seq__15413_17809);if(temp__4092__auto___17818)
{var seq__15413_17819__$1 = temp__4092__auto___17818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15413_17819__$1))
{var c__11077__auto___17820 = cljs.core.chunk_first.call(null,seq__15413_17819__$1);{
var G__17821 = cljs.core.chunk_rest.call(null,seq__15413_17819__$1);
var G__17822 = c__11077__auto___17820;
var G__17823 = cljs.core.count.call(null,c__11077__auto___17820);
var G__17824 = 0;
seq__15413_17809 = G__17821;
chunk__15414_17810 = G__17822;
count__15415_17811 = G__17823;
i__15416_17812 = G__17824;
continue;
}
} else
{var arg__11924__auto___17825 = cljs.core.first.call(null,seq__15413_17819__$1);a__11923__auto__.push(arg__11924__auto___17825);
{
var G__17826 = cljs.core.next.call(null,seq__15413_17819__$1);
var G__17827 = null;
var G__17828 = 0;
var G__17829 = 0;
seq__15413_17809 = G__17826;
chunk__15414_17810 = G__17827;
count__15415_17811 = G__17828;
i__15416_17812 = G__17829;
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
track.cljs$lang$applyTo = (function (arglist__17830){
var args__11922__auto__ = cljs.core.seq(arglist__17830);
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
var seq__15421_17831 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15422_17832 = null;var count__15423_17833 = 0;var i__15424_17834 = 0;while(true){
if((i__15424_17834 < count__15423_17833))
{var arg__11924__auto___17835 = cljs.core._nth.call(null,chunk__15422_17832,i__15424_17834);a__11923__auto__.push(arg__11924__auto___17835);
{
var G__17836 = seq__15421_17831;
var G__17837 = chunk__15422_17832;
var G__17838 = count__15423_17833;
var G__17839 = (i__15424_17834 + 1);
seq__15421_17831 = G__17836;
chunk__15422_17832 = G__17837;
count__15423_17833 = G__17838;
i__15424_17834 = G__17839;
continue;
}
} else
{var temp__4092__auto___17840 = cljs.core.seq.call(null,seq__15421_17831);if(temp__4092__auto___17840)
{var seq__15421_17841__$1 = temp__4092__auto___17840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15421_17841__$1))
{var c__11077__auto___17842 = cljs.core.chunk_first.call(null,seq__15421_17841__$1);{
var G__17843 = cljs.core.chunk_rest.call(null,seq__15421_17841__$1);
var G__17844 = c__11077__auto___17842;
var G__17845 = cljs.core.count.call(null,c__11077__auto___17842);
var G__17846 = 0;
seq__15421_17831 = G__17843;
chunk__15422_17832 = G__17844;
count__15423_17833 = G__17845;
i__15424_17834 = G__17846;
continue;
}
} else
{var arg__11924__auto___17847 = cljs.core.first.call(null,seq__15421_17841__$1);a__11923__auto__.push(arg__11924__auto___17847);
{
var G__17848 = cljs.core.next.call(null,seq__15421_17841__$1);
var G__17849 = null;
var G__17850 = 0;
var G__17851 = 0;
seq__15421_17831 = G__17848;
chunk__15422_17832 = G__17849;
count__15423_17833 = G__17850;
i__15424_17834 = G__17851;
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
u.cljs$lang$applyTo = (function (arglist__17852){
var args__11922__auto__ = cljs.core.seq(arglist__17852);
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
var seq__15429_17853 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15430_17854 = null;var count__15431_17855 = 0;var i__15432_17856 = 0;while(true){
if((i__15432_17856 < count__15431_17855))
{var arg__11924__auto___17857 = cljs.core._nth.call(null,chunk__15430_17854,i__15432_17856);a__11923__auto__.push(arg__11924__auto___17857);
{
var G__17858 = seq__15429_17853;
var G__17859 = chunk__15430_17854;
var G__17860 = count__15431_17855;
var G__17861 = (i__15432_17856 + 1);
seq__15429_17853 = G__17858;
chunk__15430_17854 = G__17859;
count__15431_17855 = G__17860;
i__15432_17856 = G__17861;
continue;
}
} else
{var temp__4092__auto___17862 = cljs.core.seq.call(null,seq__15429_17853);if(temp__4092__auto___17862)
{var seq__15429_17863__$1 = temp__4092__auto___17862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15429_17863__$1))
{var c__11077__auto___17864 = cljs.core.chunk_first.call(null,seq__15429_17863__$1);{
var G__17865 = cljs.core.chunk_rest.call(null,seq__15429_17863__$1);
var G__17866 = c__11077__auto___17864;
var G__17867 = cljs.core.count.call(null,c__11077__auto___17864);
var G__17868 = 0;
seq__15429_17853 = G__17865;
chunk__15430_17854 = G__17866;
count__15431_17855 = G__17867;
i__15432_17856 = G__17868;
continue;
}
} else
{var arg__11924__auto___17869 = cljs.core.first.call(null,seq__15429_17863__$1);a__11923__auto__.push(arg__11924__auto___17869);
{
var G__17870 = cljs.core.next.call(null,seq__15429_17863__$1);
var G__17871 = null;
var G__17872 = 0;
var G__17873 = 0;
seq__15429_17853 = G__17870;
chunk__15430_17854 = G__17871;
count__15431_17855 = G__17872;
i__15432_17856 = G__17873;
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
ul.cljs$lang$applyTo = (function (arglist__17874){
var args__11922__auto__ = cljs.core.seq(arglist__17874);
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
var seq__15437_17875 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15438_17876 = null;var count__15439_17877 = 0;var i__15440_17878 = 0;while(true){
if((i__15440_17878 < count__15439_17877))
{var arg__11924__auto___17879 = cljs.core._nth.call(null,chunk__15438_17876,i__15440_17878);a__11923__auto__.push(arg__11924__auto___17879);
{
var G__17880 = seq__15437_17875;
var G__17881 = chunk__15438_17876;
var G__17882 = count__15439_17877;
var G__17883 = (i__15440_17878 + 1);
seq__15437_17875 = G__17880;
chunk__15438_17876 = G__17881;
count__15439_17877 = G__17882;
i__15440_17878 = G__17883;
continue;
}
} else
{var temp__4092__auto___17884 = cljs.core.seq.call(null,seq__15437_17875);if(temp__4092__auto___17884)
{var seq__15437_17885__$1 = temp__4092__auto___17884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15437_17885__$1))
{var c__11077__auto___17886 = cljs.core.chunk_first.call(null,seq__15437_17885__$1);{
var G__17887 = cljs.core.chunk_rest.call(null,seq__15437_17885__$1);
var G__17888 = c__11077__auto___17886;
var G__17889 = cljs.core.count.call(null,c__11077__auto___17886);
var G__17890 = 0;
seq__15437_17875 = G__17887;
chunk__15438_17876 = G__17888;
count__15439_17877 = G__17889;
i__15440_17878 = G__17890;
continue;
}
} else
{var arg__11924__auto___17891 = cljs.core.first.call(null,seq__15437_17885__$1);a__11923__auto__.push(arg__11924__auto___17891);
{
var G__17892 = cljs.core.next.call(null,seq__15437_17885__$1);
var G__17893 = null;
var G__17894 = 0;
var G__17895 = 0;
seq__15437_17875 = G__17892;
chunk__15438_17876 = G__17893;
count__15439_17877 = G__17894;
i__15440_17878 = G__17895;
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
var$.cljs$lang$applyTo = (function (arglist__17896){
var args__11922__auto__ = cljs.core.seq(arglist__17896);
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
var seq__15445_17897 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15446_17898 = null;var count__15447_17899 = 0;var i__15448_17900 = 0;while(true){
if((i__15448_17900 < count__15447_17899))
{var arg__11924__auto___17901 = cljs.core._nth.call(null,chunk__15446_17898,i__15448_17900);a__11923__auto__.push(arg__11924__auto___17901);
{
var G__17902 = seq__15445_17897;
var G__17903 = chunk__15446_17898;
var G__17904 = count__15447_17899;
var G__17905 = (i__15448_17900 + 1);
seq__15445_17897 = G__17902;
chunk__15446_17898 = G__17903;
count__15447_17899 = G__17904;
i__15448_17900 = G__17905;
continue;
}
} else
{var temp__4092__auto___17906 = cljs.core.seq.call(null,seq__15445_17897);if(temp__4092__auto___17906)
{var seq__15445_17907__$1 = temp__4092__auto___17906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15445_17907__$1))
{var c__11077__auto___17908 = cljs.core.chunk_first.call(null,seq__15445_17907__$1);{
var G__17909 = cljs.core.chunk_rest.call(null,seq__15445_17907__$1);
var G__17910 = c__11077__auto___17908;
var G__17911 = cljs.core.count.call(null,c__11077__auto___17908);
var G__17912 = 0;
seq__15445_17897 = G__17909;
chunk__15446_17898 = G__17910;
count__15447_17899 = G__17911;
i__15448_17900 = G__17912;
continue;
}
} else
{var arg__11924__auto___17913 = cljs.core.first.call(null,seq__15445_17907__$1);a__11923__auto__.push(arg__11924__auto___17913);
{
var G__17914 = cljs.core.next.call(null,seq__15445_17907__$1);
var G__17915 = null;
var G__17916 = 0;
var G__17917 = 0;
seq__15445_17897 = G__17914;
chunk__15446_17898 = G__17915;
count__15447_17899 = G__17916;
i__15448_17900 = G__17917;
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
video.cljs$lang$applyTo = (function (arglist__17918){
var args__11922__auto__ = cljs.core.seq(arglist__17918);
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
var seq__15453_17919 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15454_17920 = null;var count__15455_17921 = 0;var i__15456_17922 = 0;while(true){
if((i__15456_17922 < count__15455_17921))
{var arg__11924__auto___17923 = cljs.core._nth.call(null,chunk__15454_17920,i__15456_17922);a__11923__auto__.push(arg__11924__auto___17923);
{
var G__17924 = seq__15453_17919;
var G__17925 = chunk__15454_17920;
var G__17926 = count__15455_17921;
var G__17927 = (i__15456_17922 + 1);
seq__15453_17919 = G__17924;
chunk__15454_17920 = G__17925;
count__15455_17921 = G__17926;
i__15456_17922 = G__17927;
continue;
}
} else
{var temp__4092__auto___17928 = cljs.core.seq.call(null,seq__15453_17919);if(temp__4092__auto___17928)
{var seq__15453_17929__$1 = temp__4092__auto___17928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15453_17929__$1))
{var c__11077__auto___17930 = cljs.core.chunk_first.call(null,seq__15453_17929__$1);{
var G__17931 = cljs.core.chunk_rest.call(null,seq__15453_17929__$1);
var G__17932 = c__11077__auto___17930;
var G__17933 = cljs.core.count.call(null,c__11077__auto___17930);
var G__17934 = 0;
seq__15453_17919 = G__17931;
chunk__15454_17920 = G__17932;
count__15455_17921 = G__17933;
i__15456_17922 = G__17934;
continue;
}
} else
{var arg__11924__auto___17935 = cljs.core.first.call(null,seq__15453_17929__$1);a__11923__auto__.push(arg__11924__auto___17935);
{
var G__17936 = cljs.core.next.call(null,seq__15453_17929__$1);
var G__17937 = null;
var G__17938 = 0;
var G__17939 = 0;
seq__15453_17919 = G__17936;
chunk__15454_17920 = G__17937;
count__15455_17921 = G__17938;
i__15456_17922 = G__17939;
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
wbr.cljs$lang$applyTo = (function (arglist__17940){
var args__11922__auto__ = cljs.core.seq(arglist__17940);
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
var seq__15461_17941 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15462_17942 = null;var count__15463_17943 = 0;var i__15464_17944 = 0;while(true){
if((i__15464_17944 < count__15463_17943))
{var arg__11924__auto___17945 = cljs.core._nth.call(null,chunk__15462_17942,i__15464_17944);a__11923__auto__.push(arg__11924__auto___17945);
{
var G__17946 = seq__15461_17941;
var G__17947 = chunk__15462_17942;
var G__17948 = count__15463_17943;
var G__17949 = (i__15464_17944 + 1);
seq__15461_17941 = G__17946;
chunk__15462_17942 = G__17947;
count__15463_17943 = G__17948;
i__15464_17944 = G__17949;
continue;
}
} else
{var temp__4092__auto___17950 = cljs.core.seq.call(null,seq__15461_17941);if(temp__4092__auto___17950)
{var seq__15461_17951__$1 = temp__4092__auto___17950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15461_17951__$1))
{var c__11077__auto___17952 = cljs.core.chunk_first.call(null,seq__15461_17951__$1);{
var G__17953 = cljs.core.chunk_rest.call(null,seq__15461_17951__$1);
var G__17954 = c__11077__auto___17952;
var G__17955 = cljs.core.count.call(null,c__11077__auto___17952);
var G__17956 = 0;
seq__15461_17941 = G__17953;
chunk__15462_17942 = G__17954;
count__15463_17943 = G__17955;
i__15464_17944 = G__17956;
continue;
}
} else
{var arg__11924__auto___17957 = cljs.core.first.call(null,seq__15461_17951__$1);a__11923__auto__.push(arg__11924__auto___17957);
{
var G__17958 = cljs.core.next.call(null,seq__15461_17951__$1);
var G__17959 = null;
var G__17960 = 0;
var G__17961 = 0;
seq__15461_17941 = G__17958;
chunk__15462_17942 = G__17959;
count__15463_17943 = G__17960;
i__15464_17944 = G__17961;
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
circle.cljs$lang$applyTo = (function (arglist__17962){
var args__11922__auto__ = cljs.core.seq(arglist__17962);
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
var seq__15469_17963 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15470_17964 = null;var count__15471_17965 = 0;var i__15472_17966 = 0;while(true){
if((i__15472_17966 < count__15471_17965))
{var arg__11924__auto___17967 = cljs.core._nth.call(null,chunk__15470_17964,i__15472_17966);a__11923__auto__.push(arg__11924__auto___17967);
{
var G__17968 = seq__15469_17963;
var G__17969 = chunk__15470_17964;
var G__17970 = count__15471_17965;
var G__17971 = (i__15472_17966 + 1);
seq__15469_17963 = G__17968;
chunk__15470_17964 = G__17969;
count__15471_17965 = G__17970;
i__15472_17966 = G__17971;
continue;
}
} else
{var temp__4092__auto___17972 = cljs.core.seq.call(null,seq__15469_17963);if(temp__4092__auto___17972)
{var seq__15469_17973__$1 = temp__4092__auto___17972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15469_17973__$1))
{var c__11077__auto___17974 = cljs.core.chunk_first.call(null,seq__15469_17973__$1);{
var G__17975 = cljs.core.chunk_rest.call(null,seq__15469_17973__$1);
var G__17976 = c__11077__auto___17974;
var G__17977 = cljs.core.count.call(null,c__11077__auto___17974);
var G__17978 = 0;
seq__15469_17963 = G__17975;
chunk__15470_17964 = G__17976;
count__15471_17965 = G__17977;
i__15472_17966 = G__17978;
continue;
}
} else
{var arg__11924__auto___17979 = cljs.core.first.call(null,seq__15469_17973__$1);a__11923__auto__.push(arg__11924__auto___17979);
{
var G__17980 = cljs.core.next.call(null,seq__15469_17973__$1);
var G__17981 = null;
var G__17982 = 0;
var G__17983 = 0;
seq__15469_17963 = G__17980;
chunk__15470_17964 = G__17981;
count__15471_17965 = G__17982;
i__15472_17966 = G__17983;
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
g.cljs$lang$applyTo = (function (arglist__17984){
var args__11922__auto__ = cljs.core.seq(arglist__17984);
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
var seq__15477_17985 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15478_17986 = null;var count__15479_17987 = 0;var i__15480_17988 = 0;while(true){
if((i__15480_17988 < count__15479_17987))
{var arg__11924__auto___17989 = cljs.core._nth.call(null,chunk__15478_17986,i__15480_17988);a__11923__auto__.push(arg__11924__auto___17989);
{
var G__17990 = seq__15477_17985;
var G__17991 = chunk__15478_17986;
var G__17992 = count__15479_17987;
var G__17993 = (i__15480_17988 + 1);
seq__15477_17985 = G__17990;
chunk__15478_17986 = G__17991;
count__15479_17987 = G__17992;
i__15480_17988 = G__17993;
continue;
}
} else
{var temp__4092__auto___17994 = cljs.core.seq.call(null,seq__15477_17985);if(temp__4092__auto___17994)
{var seq__15477_17995__$1 = temp__4092__auto___17994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15477_17995__$1))
{var c__11077__auto___17996 = cljs.core.chunk_first.call(null,seq__15477_17995__$1);{
var G__17997 = cljs.core.chunk_rest.call(null,seq__15477_17995__$1);
var G__17998 = c__11077__auto___17996;
var G__17999 = cljs.core.count.call(null,c__11077__auto___17996);
var G__18000 = 0;
seq__15477_17985 = G__17997;
chunk__15478_17986 = G__17998;
count__15479_17987 = G__17999;
i__15480_17988 = G__18000;
continue;
}
} else
{var arg__11924__auto___18001 = cljs.core.first.call(null,seq__15477_17995__$1);a__11923__auto__.push(arg__11924__auto___18001);
{
var G__18002 = cljs.core.next.call(null,seq__15477_17995__$1);
var G__18003 = null;
var G__18004 = 0;
var G__18005 = 0;
seq__15477_17985 = G__18002;
chunk__15478_17986 = G__18003;
count__15479_17987 = G__18004;
i__15480_17988 = G__18005;
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
line.cljs$lang$applyTo = (function (arglist__18006){
var args__11922__auto__ = cljs.core.seq(arglist__18006);
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
var seq__15485_18007 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15486_18008 = null;var count__15487_18009 = 0;var i__15488_18010 = 0;while(true){
if((i__15488_18010 < count__15487_18009))
{var arg__11924__auto___18011 = cljs.core._nth.call(null,chunk__15486_18008,i__15488_18010);a__11923__auto__.push(arg__11924__auto___18011);
{
var G__18012 = seq__15485_18007;
var G__18013 = chunk__15486_18008;
var G__18014 = count__15487_18009;
var G__18015 = (i__15488_18010 + 1);
seq__15485_18007 = G__18012;
chunk__15486_18008 = G__18013;
count__15487_18009 = G__18014;
i__15488_18010 = G__18015;
continue;
}
} else
{var temp__4092__auto___18016 = cljs.core.seq.call(null,seq__15485_18007);if(temp__4092__auto___18016)
{var seq__15485_18017__$1 = temp__4092__auto___18016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15485_18017__$1))
{var c__11077__auto___18018 = cljs.core.chunk_first.call(null,seq__15485_18017__$1);{
var G__18019 = cljs.core.chunk_rest.call(null,seq__15485_18017__$1);
var G__18020 = c__11077__auto___18018;
var G__18021 = cljs.core.count.call(null,c__11077__auto___18018);
var G__18022 = 0;
seq__15485_18007 = G__18019;
chunk__15486_18008 = G__18020;
count__15487_18009 = G__18021;
i__15488_18010 = G__18022;
continue;
}
} else
{var arg__11924__auto___18023 = cljs.core.first.call(null,seq__15485_18017__$1);a__11923__auto__.push(arg__11924__auto___18023);
{
var G__18024 = cljs.core.next.call(null,seq__15485_18017__$1);
var G__18025 = null;
var G__18026 = 0;
var G__18027 = 0;
seq__15485_18007 = G__18024;
chunk__15486_18008 = G__18025;
count__15487_18009 = G__18026;
i__15488_18010 = G__18027;
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
path.cljs$lang$applyTo = (function (arglist__18028){
var args__11922__auto__ = cljs.core.seq(arglist__18028);
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
var seq__15493_18029 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15494_18030 = null;var count__15495_18031 = 0;var i__15496_18032 = 0;while(true){
if((i__15496_18032 < count__15495_18031))
{var arg__11924__auto___18033 = cljs.core._nth.call(null,chunk__15494_18030,i__15496_18032);a__11923__auto__.push(arg__11924__auto___18033);
{
var G__18034 = seq__15493_18029;
var G__18035 = chunk__15494_18030;
var G__18036 = count__15495_18031;
var G__18037 = (i__15496_18032 + 1);
seq__15493_18029 = G__18034;
chunk__15494_18030 = G__18035;
count__15495_18031 = G__18036;
i__15496_18032 = G__18037;
continue;
}
} else
{var temp__4092__auto___18038 = cljs.core.seq.call(null,seq__15493_18029);if(temp__4092__auto___18038)
{var seq__15493_18039__$1 = temp__4092__auto___18038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15493_18039__$1))
{var c__11077__auto___18040 = cljs.core.chunk_first.call(null,seq__15493_18039__$1);{
var G__18041 = cljs.core.chunk_rest.call(null,seq__15493_18039__$1);
var G__18042 = c__11077__auto___18040;
var G__18043 = cljs.core.count.call(null,c__11077__auto___18040);
var G__18044 = 0;
seq__15493_18029 = G__18041;
chunk__15494_18030 = G__18042;
count__15495_18031 = G__18043;
i__15496_18032 = G__18044;
continue;
}
} else
{var arg__11924__auto___18045 = cljs.core.first.call(null,seq__15493_18039__$1);a__11923__auto__.push(arg__11924__auto___18045);
{
var G__18046 = cljs.core.next.call(null,seq__15493_18039__$1);
var G__18047 = null;
var G__18048 = 0;
var G__18049 = 0;
seq__15493_18029 = G__18046;
chunk__15494_18030 = G__18047;
count__15495_18031 = G__18048;
i__15496_18032 = G__18049;
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
polygon.cljs$lang$applyTo = (function (arglist__18050){
var args__11922__auto__ = cljs.core.seq(arglist__18050);
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
var seq__15501_18051 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15502_18052 = null;var count__15503_18053 = 0;var i__15504_18054 = 0;while(true){
if((i__15504_18054 < count__15503_18053))
{var arg__11924__auto___18055 = cljs.core._nth.call(null,chunk__15502_18052,i__15504_18054);a__11923__auto__.push(arg__11924__auto___18055);
{
var G__18056 = seq__15501_18051;
var G__18057 = chunk__15502_18052;
var G__18058 = count__15503_18053;
var G__18059 = (i__15504_18054 + 1);
seq__15501_18051 = G__18056;
chunk__15502_18052 = G__18057;
count__15503_18053 = G__18058;
i__15504_18054 = G__18059;
continue;
}
} else
{var temp__4092__auto___18060 = cljs.core.seq.call(null,seq__15501_18051);if(temp__4092__auto___18060)
{var seq__15501_18061__$1 = temp__4092__auto___18060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15501_18061__$1))
{var c__11077__auto___18062 = cljs.core.chunk_first.call(null,seq__15501_18061__$1);{
var G__18063 = cljs.core.chunk_rest.call(null,seq__15501_18061__$1);
var G__18064 = c__11077__auto___18062;
var G__18065 = cljs.core.count.call(null,c__11077__auto___18062);
var G__18066 = 0;
seq__15501_18051 = G__18063;
chunk__15502_18052 = G__18064;
count__15503_18053 = G__18065;
i__15504_18054 = G__18066;
continue;
}
} else
{var arg__11924__auto___18067 = cljs.core.first.call(null,seq__15501_18061__$1);a__11923__auto__.push(arg__11924__auto___18067);
{
var G__18068 = cljs.core.next.call(null,seq__15501_18061__$1);
var G__18069 = null;
var G__18070 = 0;
var G__18071 = 0;
seq__15501_18051 = G__18068;
chunk__15502_18052 = G__18069;
count__15503_18053 = G__18070;
i__15504_18054 = G__18071;
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
polyline.cljs$lang$applyTo = (function (arglist__18072){
var args__11922__auto__ = cljs.core.seq(arglist__18072);
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
var seq__15509_18073 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15510_18074 = null;var count__15511_18075 = 0;var i__15512_18076 = 0;while(true){
if((i__15512_18076 < count__15511_18075))
{var arg__11924__auto___18077 = cljs.core._nth.call(null,chunk__15510_18074,i__15512_18076);a__11923__auto__.push(arg__11924__auto___18077);
{
var G__18078 = seq__15509_18073;
var G__18079 = chunk__15510_18074;
var G__18080 = count__15511_18075;
var G__18081 = (i__15512_18076 + 1);
seq__15509_18073 = G__18078;
chunk__15510_18074 = G__18079;
count__15511_18075 = G__18080;
i__15512_18076 = G__18081;
continue;
}
} else
{var temp__4092__auto___18082 = cljs.core.seq.call(null,seq__15509_18073);if(temp__4092__auto___18082)
{var seq__15509_18083__$1 = temp__4092__auto___18082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15509_18083__$1))
{var c__11077__auto___18084 = cljs.core.chunk_first.call(null,seq__15509_18083__$1);{
var G__18085 = cljs.core.chunk_rest.call(null,seq__15509_18083__$1);
var G__18086 = c__11077__auto___18084;
var G__18087 = cljs.core.count.call(null,c__11077__auto___18084);
var G__18088 = 0;
seq__15509_18073 = G__18085;
chunk__15510_18074 = G__18086;
count__15511_18075 = G__18087;
i__15512_18076 = G__18088;
continue;
}
} else
{var arg__11924__auto___18089 = cljs.core.first.call(null,seq__15509_18083__$1);a__11923__auto__.push(arg__11924__auto___18089);
{
var G__18090 = cljs.core.next.call(null,seq__15509_18083__$1);
var G__18091 = null;
var G__18092 = 0;
var G__18093 = 0;
seq__15509_18073 = G__18090;
chunk__15510_18074 = G__18091;
count__15511_18075 = G__18092;
i__15512_18076 = G__18093;
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
rect.cljs$lang$applyTo = (function (arglist__18094){
var args__11922__auto__ = cljs.core.seq(arglist__18094);
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
var seq__15517_18095 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__15518_18096 = null;var count__15519_18097 = 0;var i__15520_18098 = 0;while(true){
if((i__15520_18098 < count__15519_18097))
{var arg__11924__auto___18099 = cljs.core._nth.call(null,chunk__15518_18096,i__15520_18098);a__11923__auto__.push(arg__11924__auto___18099);
{
var G__18100 = seq__15517_18095;
var G__18101 = chunk__15518_18096;
var G__18102 = count__15519_18097;
var G__18103 = (i__15520_18098 + 1);
seq__15517_18095 = G__18100;
chunk__15518_18096 = G__18101;
count__15519_18097 = G__18102;
i__15520_18098 = G__18103;
continue;
}
} else
{var temp__4092__auto___18104 = cljs.core.seq.call(null,seq__15517_18095);if(temp__4092__auto___18104)
{var seq__15517_18105__$1 = temp__4092__auto___18104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15517_18105__$1))
{var c__11077__auto___18106 = cljs.core.chunk_first.call(null,seq__15517_18105__$1);{
var G__18107 = cljs.core.chunk_rest.call(null,seq__15517_18105__$1);
var G__18108 = c__11077__auto___18106;
var G__18109 = cljs.core.count.call(null,c__11077__auto___18106);
var G__18110 = 0;
seq__15517_18095 = G__18107;
chunk__15518_18096 = G__18108;
count__15519_18097 = G__18109;
i__15520_18098 = G__18110;
continue;
}
} else
{var arg__11924__auto___18111 = cljs.core.first.call(null,seq__15517_18105__$1);a__11923__auto__.push(arg__11924__auto___18111);
{
var G__18112 = cljs.core.next.call(null,seq__15517_18105__$1);
var G__18113 = null;
var G__18114 = 0;
var G__18115 = 0;
seq__15517_18095 = G__18112;
chunk__15518_18096 = G__18113;
count__15519_18097 = G__18114;
i__15520_18098 = G__18115;
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
svg.cljs$lang$applyTo = (function (arglist__18116){
var args__11922__auto__ = cljs.core.seq(arglist__18116);
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
var seq__14829_18117 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11922__auto__));var chunk__14830_18118 = null;var count__14831_18119 = 0;var i__14832_18120 = 0;while(true){
if((i__14832_18120 < count__14831_18119))
{var arg__11924__auto___18121 = cljs.core._nth.call(null,chunk__14830_18118,i__14832_18120);a__11923__auto__.push(arg__11924__auto___18121);
{
var G__18122 = seq__14829_18117;
var G__18123 = chunk__14830_18118;
var G__18124 = count__14831_18119;
var G__18125 = (i__14832_18120 + 1);
seq__14829_18117 = G__18122;
chunk__14830_18118 = G__18123;
count__14831_18119 = G__18124;
i__14832_18120 = G__18125;
continue;
}
} else
{var temp__4092__auto___18126 = cljs.core.seq.call(null,seq__14829_18117);if(temp__4092__auto___18126)
{var seq__14829_18127__$1 = temp__4092__auto___18126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14829_18127__$1))
{var c__11077__auto___18128 = cljs.core.chunk_first.call(null,seq__14829_18127__$1);{
var G__18129 = cljs.core.chunk_rest.call(null,seq__14829_18127__$1);
var G__18130 = c__11077__auto___18128;
var G__18131 = cljs.core.count.call(null,c__11077__auto___18128);
var G__18132 = 0;
seq__14829_18117 = G__18129;
chunk__14830_18118 = G__18130;
count__14831_18119 = G__18131;
i__14832_18120 = G__18132;
continue;
}
} else
{var arg__11924__auto___18133 = cljs.core.first.call(null,seq__14829_18127__$1);a__11923__auto__.push(arg__11924__auto___18133);
{
var G__18134 = cljs.core.next.call(null,seq__14829_18127__$1);
var G__18135 = null;
var G__18136 = 0;
var G__18137 = 0;
seq__14829_18117 = G__18134;
chunk__14830_18118 = G__18135;
count__14831_18119 = G__18136;
i__14832_18120 = G__18137;
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
text.cljs$lang$applyTo = (function (arglist__18138){
var args__11922__auto__ = cljs.core.seq(arglist__18138);
return text__delegate(args__11922__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

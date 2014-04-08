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
{var o = (function (){var obj17631 = {};return obj17631;
})();var seq__17632_17638 = cljs.core.seq.call(null,obj);var chunk__17633_17639 = null;var count__17634_17640 = 0;var i__17635_17641 = 0;while(true){
if((i__17635_17641 < count__17634_17640))
{var vec__17636_17642 = cljs.core._nth.call(null,chunk__17633_17639,i__17635_17641);var k_17643 = cljs.core.nth.call(null,vec__17636_17642,0,null);var v_17644 = cljs.core.nth.call(null,vec__17636_17642,1,null);(o[cljs.core.name.call(null,k_17643)] = js_props.call(null,v_17644));
{
var G__17645 = seq__17632_17638;
var G__17646 = chunk__17633_17639;
var G__17647 = count__17634_17640;
var G__17648 = (i__17635_17641 + 1);
seq__17632_17638 = G__17645;
chunk__17633_17639 = G__17646;
count__17634_17640 = G__17647;
i__17635_17641 = G__17648;
continue;
}
} else
{var temp__4092__auto___17649 = cljs.core.seq.call(null,seq__17632_17638);if(temp__4092__auto___17649)
{var seq__17632_17650__$1 = temp__4092__auto___17649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17632_17650__$1))
{var c__11010__auto___17651 = cljs.core.chunk_first.call(null,seq__17632_17650__$1);{
var G__17652 = cljs.core.chunk_rest.call(null,seq__17632_17650__$1);
var G__17653 = c__11010__auto___17651;
var G__17654 = cljs.core.count.call(null,c__11010__auto___17651);
var G__17655 = 0;
seq__17632_17638 = G__17652;
chunk__17633_17639 = G__17653;
count__17634_17640 = G__17654;
i__17635_17641 = G__17655;
continue;
}
} else
{var vec__17637_17656 = cljs.core.first.call(null,seq__17632_17650__$1);var k_17657 = cljs.core.nth.call(null,vec__17637_17656,0,null);var v_17658 = cljs.core.nth.call(null,vec__17637_17656,1,null);(o[cljs.core.name.call(null,k_17657)] = js_props.call(null,v_17658));
{
var G__17659 = cljs.core.next.call(null,seq__17632_17650__$1);
var G__17660 = null;
var G__17661 = 0;
var G__17662 = 0;
seq__17632_17638 = G__17659;
chunk__17633_17639 = G__17660;
count__17634_17640 = G__17661;
i__17635_17641 = G__17662;
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
var a__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17667_18615 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17668_18616 = null;var count__17669_18617 = 0;var i__17670_18618 = 0;while(true){
if((i__17670_18618 < count__17669_18617))
{var arg__11642__auto___18619 = cljs.core._nth.call(null,chunk__17668_18616,i__17670_18618);a__11641__auto__.push(arg__11642__auto___18619);
{
var G__18620 = seq__17667_18615;
var G__18621 = chunk__17668_18616;
var G__18622 = count__17669_18617;
var G__18623 = (i__17670_18618 + 1);
seq__17667_18615 = G__18620;
chunk__17668_18616 = G__18621;
count__17669_18617 = G__18622;
i__17670_18618 = G__18623;
continue;
}
} else
{var temp__4092__auto___18624 = cljs.core.seq.call(null,seq__17667_18615);if(temp__4092__auto___18624)
{var seq__17667_18625__$1 = temp__4092__auto___18624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17667_18625__$1))
{var c__11010__auto___18626 = cljs.core.chunk_first.call(null,seq__17667_18625__$1);{
var G__18627 = cljs.core.chunk_rest.call(null,seq__17667_18625__$1);
var G__18628 = c__11010__auto___18626;
var G__18629 = cljs.core.count.call(null,c__11010__auto___18626);
var G__18630 = 0;
seq__17667_18615 = G__18627;
chunk__17668_18616 = G__18628;
count__17669_18617 = G__18629;
i__17670_18618 = G__18630;
continue;
}
} else
{var arg__11642__auto___18631 = cljs.core.first.call(null,seq__17667_18625__$1);a__11641__auto__.push(arg__11642__auto___18631);
{
var G__18632 = cljs.core.next.call(null,seq__17667_18625__$1);
var G__18633 = null;
var G__18634 = 0;
var G__18635 = 0;
seq__17667_18615 = G__18632;
chunk__17668_18616 = G__18633;
count__17669_18617 = G__18634;
i__17670_18618 = G__18635;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__11641__auto__);
};
var a = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__11640__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__18636){
var args__11640__auto__ = cljs.core.seq(arglist__18636);
return a__delegate(args__11640__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17675_18637 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17676_18638 = null;var count__17677_18639 = 0;var i__17678_18640 = 0;while(true){
if((i__17678_18640 < count__17677_18639))
{var arg__11642__auto___18641 = cljs.core._nth.call(null,chunk__17676_18638,i__17678_18640);a__11641__auto__.push(arg__11642__auto___18641);
{
var G__18642 = seq__17675_18637;
var G__18643 = chunk__17676_18638;
var G__18644 = count__17677_18639;
var G__18645 = (i__17678_18640 + 1);
seq__17675_18637 = G__18642;
chunk__17676_18638 = G__18643;
count__17677_18639 = G__18644;
i__17678_18640 = G__18645;
continue;
}
} else
{var temp__4092__auto___18646 = cljs.core.seq.call(null,seq__17675_18637);if(temp__4092__auto___18646)
{var seq__17675_18647__$1 = temp__4092__auto___18646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17675_18647__$1))
{var c__11010__auto___18648 = cljs.core.chunk_first.call(null,seq__17675_18647__$1);{
var G__18649 = cljs.core.chunk_rest.call(null,seq__17675_18647__$1);
var G__18650 = c__11010__auto___18648;
var G__18651 = cljs.core.count.call(null,c__11010__auto___18648);
var G__18652 = 0;
seq__17675_18637 = G__18649;
chunk__17676_18638 = G__18650;
count__17677_18639 = G__18651;
i__17678_18640 = G__18652;
continue;
}
} else
{var arg__11642__auto___18653 = cljs.core.first.call(null,seq__17675_18647__$1);a__11641__auto__.push(arg__11642__auto___18653);
{
var G__18654 = cljs.core.next.call(null,seq__17675_18647__$1);
var G__18655 = null;
var G__18656 = 0;
var G__18657 = 0;
seq__17675_18637 = G__18654;
chunk__17676_18638 = G__18655;
count__17677_18639 = G__18656;
i__17678_18640 = G__18657;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__11641__auto__);
};
var abbr = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__11640__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__18658){
var args__11640__auto__ = cljs.core.seq(arglist__18658);
return abbr__delegate(args__11640__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17683_18659 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17684_18660 = null;var count__17685_18661 = 0;var i__17686_18662 = 0;while(true){
if((i__17686_18662 < count__17685_18661))
{var arg__11642__auto___18663 = cljs.core._nth.call(null,chunk__17684_18660,i__17686_18662);a__11641__auto__.push(arg__11642__auto___18663);
{
var G__18664 = seq__17683_18659;
var G__18665 = chunk__17684_18660;
var G__18666 = count__17685_18661;
var G__18667 = (i__17686_18662 + 1);
seq__17683_18659 = G__18664;
chunk__17684_18660 = G__18665;
count__17685_18661 = G__18666;
i__17686_18662 = G__18667;
continue;
}
} else
{var temp__4092__auto___18668 = cljs.core.seq.call(null,seq__17683_18659);if(temp__4092__auto___18668)
{var seq__17683_18669__$1 = temp__4092__auto___18668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17683_18669__$1))
{var c__11010__auto___18670 = cljs.core.chunk_first.call(null,seq__17683_18669__$1);{
var G__18671 = cljs.core.chunk_rest.call(null,seq__17683_18669__$1);
var G__18672 = c__11010__auto___18670;
var G__18673 = cljs.core.count.call(null,c__11010__auto___18670);
var G__18674 = 0;
seq__17683_18659 = G__18671;
chunk__17684_18660 = G__18672;
count__17685_18661 = G__18673;
i__17686_18662 = G__18674;
continue;
}
} else
{var arg__11642__auto___18675 = cljs.core.first.call(null,seq__17683_18669__$1);a__11641__auto__.push(arg__11642__auto___18675);
{
var G__18676 = cljs.core.next.call(null,seq__17683_18669__$1);
var G__18677 = null;
var G__18678 = 0;
var G__18679 = 0;
seq__17683_18659 = G__18676;
chunk__17684_18660 = G__18677;
count__17685_18661 = G__18678;
i__17686_18662 = G__18679;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__11641__auto__);
};
var address = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__11640__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__18680){
var args__11640__auto__ = cljs.core.seq(arglist__18680);
return address__delegate(args__11640__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17691_18681 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17692_18682 = null;var count__17693_18683 = 0;var i__17694_18684 = 0;while(true){
if((i__17694_18684 < count__17693_18683))
{var arg__11642__auto___18685 = cljs.core._nth.call(null,chunk__17692_18682,i__17694_18684);a__11641__auto__.push(arg__11642__auto___18685);
{
var G__18686 = seq__17691_18681;
var G__18687 = chunk__17692_18682;
var G__18688 = count__17693_18683;
var G__18689 = (i__17694_18684 + 1);
seq__17691_18681 = G__18686;
chunk__17692_18682 = G__18687;
count__17693_18683 = G__18688;
i__17694_18684 = G__18689;
continue;
}
} else
{var temp__4092__auto___18690 = cljs.core.seq.call(null,seq__17691_18681);if(temp__4092__auto___18690)
{var seq__17691_18691__$1 = temp__4092__auto___18690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17691_18691__$1))
{var c__11010__auto___18692 = cljs.core.chunk_first.call(null,seq__17691_18691__$1);{
var G__18693 = cljs.core.chunk_rest.call(null,seq__17691_18691__$1);
var G__18694 = c__11010__auto___18692;
var G__18695 = cljs.core.count.call(null,c__11010__auto___18692);
var G__18696 = 0;
seq__17691_18681 = G__18693;
chunk__17692_18682 = G__18694;
count__17693_18683 = G__18695;
i__17694_18684 = G__18696;
continue;
}
} else
{var arg__11642__auto___18697 = cljs.core.first.call(null,seq__17691_18691__$1);a__11641__auto__.push(arg__11642__auto___18697);
{
var G__18698 = cljs.core.next.call(null,seq__17691_18691__$1);
var G__18699 = null;
var G__18700 = 0;
var G__18701 = 0;
seq__17691_18681 = G__18698;
chunk__17692_18682 = G__18699;
count__17693_18683 = G__18700;
i__17694_18684 = G__18701;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__11641__auto__);
};
var area = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__11640__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__18702){
var args__11640__auto__ = cljs.core.seq(arglist__18702);
return area__delegate(args__11640__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17699_18703 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17700_18704 = null;var count__17701_18705 = 0;var i__17702_18706 = 0;while(true){
if((i__17702_18706 < count__17701_18705))
{var arg__11642__auto___18707 = cljs.core._nth.call(null,chunk__17700_18704,i__17702_18706);a__11641__auto__.push(arg__11642__auto___18707);
{
var G__18708 = seq__17699_18703;
var G__18709 = chunk__17700_18704;
var G__18710 = count__17701_18705;
var G__18711 = (i__17702_18706 + 1);
seq__17699_18703 = G__18708;
chunk__17700_18704 = G__18709;
count__17701_18705 = G__18710;
i__17702_18706 = G__18711;
continue;
}
} else
{var temp__4092__auto___18712 = cljs.core.seq.call(null,seq__17699_18703);if(temp__4092__auto___18712)
{var seq__17699_18713__$1 = temp__4092__auto___18712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17699_18713__$1))
{var c__11010__auto___18714 = cljs.core.chunk_first.call(null,seq__17699_18713__$1);{
var G__18715 = cljs.core.chunk_rest.call(null,seq__17699_18713__$1);
var G__18716 = c__11010__auto___18714;
var G__18717 = cljs.core.count.call(null,c__11010__auto___18714);
var G__18718 = 0;
seq__17699_18703 = G__18715;
chunk__17700_18704 = G__18716;
count__17701_18705 = G__18717;
i__17702_18706 = G__18718;
continue;
}
} else
{var arg__11642__auto___18719 = cljs.core.first.call(null,seq__17699_18713__$1);a__11641__auto__.push(arg__11642__auto___18719);
{
var G__18720 = cljs.core.next.call(null,seq__17699_18713__$1);
var G__18721 = null;
var G__18722 = 0;
var G__18723 = 0;
seq__17699_18703 = G__18720;
chunk__17700_18704 = G__18721;
count__17701_18705 = G__18722;
i__17702_18706 = G__18723;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__11641__auto__);
};
var article = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__11640__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__18724){
var args__11640__auto__ = cljs.core.seq(arglist__18724);
return article__delegate(args__11640__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17707_18725 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17708_18726 = null;var count__17709_18727 = 0;var i__17710_18728 = 0;while(true){
if((i__17710_18728 < count__17709_18727))
{var arg__11642__auto___18729 = cljs.core._nth.call(null,chunk__17708_18726,i__17710_18728);a__11641__auto__.push(arg__11642__auto___18729);
{
var G__18730 = seq__17707_18725;
var G__18731 = chunk__17708_18726;
var G__18732 = count__17709_18727;
var G__18733 = (i__17710_18728 + 1);
seq__17707_18725 = G__18730;
chunk__17708_18726 = G__18731;
count__17709_18727 = G__18732;
i__17710_18728 = G__18733;
continue;
}
} else
{var temp__4092__auto___18734 = cljs.core.seq.call(null,seq__17707_18725);if(temp__4092__auto___18734)
{var seq__17707_18735__$1 = temp__4092__auto___18734;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17707_18735__$1))
{var c__11010__auto___18736 = cljs.core.chunk_first.call(null,seq__17707_18735__$1);{
var G__18737 = cljs.core.chunk_rest.call(null,seq__17707_18735__$1);
var G__18738 = c__11010__auto___18736;
var G__18739 = cljs.core.count.call(null,c__11010__auto___18736);
var G__18740 = 0;
seq__17707_18725 = G__18737;
chunk__17708_18726 = G__18738;
count__17709_18727 = G__18739;
i__17710_18728 = G__18740;
continue;
}
} else
{var arg__11642__auto___18741 = cljs.core.first.call(null,seq__17707_18735__$1);a__11641__auto__.push(arg__11642__auto___18741);
{
var G__18742 = cljs.core.next.call(null,seq__17707_18735__$1);
var G__18743 = null;
var G__18744 = 0;
var G__18745 = 0;
seq__17707_18725 = G__18742;
chunk__17708_18726 = G__18743;
count__17709_18727 = G__18744;
i__17710_18728 = G__18745;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__11641__auto__);
};
var aside = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__11640__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__18746){
var args__11640__auto__ = cljs.core.seq(arglist__18746);
return aside__delegate(args__11640__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17715_18747 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17716_18748 = null;var count__17717_18749 = 0;var i__17718_18750 = 0;while(true){
if((i__17718_18750 < count__17717_18749))
{var arg__11642__auto___18751 = cljs.core._nth.call(null,chunk__17716_18748,i__17718_18750);a__11641__auto__.push(arg__11642__auto___18751);
{
var G__18752 = seq__17715_18747;
var G__18753 = chunk__17716_18748;
var G__18754 = count__17717_18749;
var G__18755 = (i__17718_18750 + 1);
seq__17715_18747 = G__18752;
chunk__17716_18748 = G__18753;
count__17717_18749 = G__18754;
i__17718_18750 = G__18755;
continue;
}
} else
{var temp__4092__auto___18756 = cljs.core.seq.call(null,seq__17715_18747);if(temp__4092__auto___18756)
{var seq__17715_18757__$1 = temp__4092__auto___18756;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17715_18757__$1))
{var c__11010__auto___18758 = cljs.core.chunk_first.call(null,seq__17715_18757__$1);{
var G__18759 = cljs.core.chunk_rest.call(null,seq__17715_18757__$1);
var G__18760 = c__11010__auto___18758;
var G__18761 = cljs.core.count.call(null,c__11010__auto___18758);
var G__18762 = 0;
seq__17715_18747 = G__18759;
chunk__17716_18748 = G__18760;
count__17717_18749 = G__18761;
i__17718_18750 = G__18762;
continue;
}
} else
{var arg__11642__auto___18763 = cljs.core.first.call(null,seq__17715_18757__$1);a__11641__auto__.push(arg__11642__auto___18763);
{
var G__18764 = cljs.core.next.call(null,seq__17715_18757__$1);
var G__18765 = null;
var G__18766 = 0;
var G__18767 = 0;
seq__17715_18747 = G__18764;
chunk__17716_18748 = G__18765;
count__17717_18749 = G__18766;
i__17718_18750 = G__18767;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__11641__auto__);
};
var audio = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__11640__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__18768){
var args__11640__auto__ = cljs.core.seq(arglist__18768);
return audio__delegate(args__11640__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17723_18769 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17724_18770 = null;var count__17725_18771 = 0;var i__17726_18772 = 0;while(true){
if((i__17726_18772 < count__17725_18771))
{var arg__11642__auto___18773 = cljs.core._nth.call(null,chunk__17724_18770,i__17726_18772);a__11641__auto__.push(arg__11642__auto___18773);
{
var G__18774 = seq__17723_18769;
var G__18775 = chunk__17724_18770;
var G__18776 = count__17725_18771;
var G__18777 = (i__17726_18772 + 1);
seq__17723_18769 = G__18774;
chunk__17724_18770 = G__18775;
count__17725_18771 = G__18776;
i__17726_18772 = G__18777;
continue;
}
} else
{var temp__4092__auto___18778 = cljs.core.seq.call(null,seq__17723_18769);if(temp__4092__auto___18778)
{var seq__17723_18779__$1 = temp__4092__auto___18778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17723_18779__$1))
{var c__11010__auto___18780 = cljs.core.chunk_first.call(null,seq__17723_18779__$1);{
var G__18781 = cljs.core.chunk_rest.call(null,seq__17723_18779__$1);
var G__18782 = c__11010__auto___18780;
var G__18783 = cljs.core.count.call(null,c__11010__auto___18780);
var G__18784 = 0;
seq__17723_18769 = G__18781;
chunk__17724_18770 = G__18782;
count__17725_18771 = G__18783;
i__17726_18772 = G__18784;
continue;
}
} else
{var arg__11642__auto___18785 = cljs.core.first.call(null,seq__17723_18779__$1);a__11641__auto__.push(arg__11642__auto___18785);
{
var G__18786 = cljs.core.next.call(null,seq__17723_18779__$1);
var G__18787 = null;
var G__18788 = 0;
var G__18789 = 0;
seq__17723_18769 = G__18786;
chunk__17724_18770 = G__18787;
count__17725_18771 = G__18788;
i__17726_18772 = G__18789;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__11641__auto__);
};
var b = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__11640__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__18790){
var args__11640__auto__ = cljs.core.seq(arglist__18790);
return b__delegate(args__11640__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17731_18791 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17732_18792 = null;var count__17733_18793 = 0;var i__17734_18794 = 0;while(true){
if((i__17734_18794 < count__17733_18793))
{var arg__11642__auto___18795 = cljs.core._nth.call(null,chunk__17732_18792,i__17734_18794);a__11641__auto__.push(arg__11642__auto___18795);
{
var G__18796 = seq__17731_18791;
var G__18797 = chunk__17732_18792;
var G__18798 = count__17733_18793;
var G__18799 = (i__17734_18794 + 1);
seq__17731_18791 = G__18796;
chunk__17732_18792 = G__18797;
count__17733_18793 = G__18798;
i__17734_18794 = G__18799;
continue;
}
} else
{var temp__4092__auto___18800 = cljs.core.seq.call(null,seq__17731_18791);if(temp__4092__auto___18800)
{var seq__17731_18801__$1 = temp__4092__auto___18800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17731_18801__$1))
{var c__11010__auto___18802 = cljs.core.chunk_first.call(null,seq__17731_18801__$1);{
var G__18803 = cljs.core.chunk_rest.call(null,seq__17731_18801__$1);
var G__18804 = c__11010__auto___18802;
var G__18805 = cljs.core.count.call(null,c__11010__auto___18802);
var G__18806 = 0;
seq__17731_18791 = G__18803;
chunk__17732_18792 = G__18804;
count__17733_18793 = G__18805;
i__17734_18794 = G__18806;
continue;
}
} else
{var arg__11642__auto___18807 = cljs.core.first.call(null,seq__17731_18801__$1);a__11641__auto__.push(arg__11642__auto___18807);
{
var G__18808 = cljs.core.next.call(null,seq__17731_18801__$1);
var G__18809 = null;
var G__18810 = 0;
var G__18811 = 0;
seq__17731_18791 = G__18808;
chunk__17732_18792 = G__18809;
count__17733_18793 = G__18810;
i__17734_18794 = G__18811;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__11641__auto__);
};
var base = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__11640__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__18812){
var args__11640__auto__ = cljs.core.seq(arglist__18812);
return base__delegate(args__11640__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17739_18813 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17740_18814 = null;var count__17741_18815 = 0;var i__17742_18816 = 0;while(true){
if((i__17742_18816 < count__17741_18815))
{var arg__11642__auto___18817 = cljs.core._nth.call(null,chunk__17740_18814,i__17742_18816);a__11641__auto__.push(arg__11642__auto___18817);
{
var G__18818 = seq__17739_18813;
var G__18819 = chunk__17740_18814;
var G__18820 = count__17741_18815;
var G__18821 = (i__17742_18816 + 1);
seq__17739_18813 = G__18818;
chunk__17740_18814 = G__18819;
count__17741_18815 = G__18820;
i__17742_18816 = G__18821;
continue;
}
} else
{var temp__4092__auto___18822 = cljs.core.seq.call(null,seq__17739_18813);if(temp__4092__auto___18822)
{var seq__17739_18823__$1 = temp__4092__auto___18822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17739_18823__$1))
{var c__11010__auto___18824 = cljs.core.chunk_first.call(null,seq__17739_18823__$1);{
var G__18825 = cljs.core.chunk_rest.call(null,seq__17739_18823__$1);
var G__18826 = c__11010__auto___18824;
var G__18827 = cljs.core.count.call(null,c__11010__auto___18824);
var G__18828 = 0;
seq__17739_18813 = G__18825;
chunk__17740_18814 = G__18826;
count__17741_18815 = G__18827;
i__17742_18816 = G__18828;
continue;
}
} else
{var arg__11642__auto___18829 = cljs.core.first.call(null,seq__17739_18823__$1);a__11641__auto__.push(arg__11642__auto___18829);
{
var G__18830 = cljs.core.next.call(null,seq__17739_18823__$1);
var G__18831 = null;
var G__18832 = 0;
var G__18833 = 0;
seq__17739_18813 = G__18830;
chunk__17740_18814 = G__18831;
count__17741_18815 = G__18832;
i__17742_18816 = G__18833;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__11641__auto__);
};
var bdi = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__11640__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__18834){
var args__11640__auto__ = cljs.core.seq(arglist__18834);
return bdi__delegate(args__11640__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17747_18835 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17748_18836 = null;var count__17749_18837 = 0;var i__17750_18838 = 0;while(true){
if((i__17750_18838 < count__17749_18837))
{var arg__11642__auto___18839 = cljs.core._nth.call(null,chunk__17748_18836,i__17750_18838);a__11641__auto__.push(arg__11642__auto___18839);
{
var G__18840 = seq__17747_18835;
var G__18841 = chunk__17748_18836;
var G__18842 = count__17749_18837;
var G__18843 = (i__17750_18838 + 1);
seq__17747_18835 = G__18840;
chunk__17748_18836 = G__18841;
count__17749_18837 = G__18842;
i__17750_18838 = G__18843;
continue;
}
} else
{var temp__4092__auto___18844 = cljs.core.seq.call(null,seq__17747_18835);if(temp__4092__auto___18844)
{var seq__17747_18845__$1 = temp__4092__auto___18844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17747_18845__$1))
{var c__11010__auto___18846 = cljs.core.chunk_first.call(null,seq__17747_18845__$1);{
var G__18847 = cljs.core.chunk_rest.call(null,seq__17747_18845__$1);
var G__18848 = c__11010__auto___18846;
var G__18849 = cljs.core.count.call(null,c__11010__auto___18846);
var G__18850 = 0;
seq__17747_18835 = G__18847;
chunk__17748_18836 = G__18848;
count__17749_18837 = G__18849;
i__17750_18838 = G__18850;
continue;
}
} else
{var arg__11642__auto___18851 = cljs.core.first.call(null,seq__17747_18845__$1);a__11641__auto__.push(arg__11642__auto___18851);
{
var G__18852 = cljs.core.next.call(null,seq__17747_18845__$1);
var G__18853 = null;
var G__18854 = 0;
var G__18855 = 0;
seq__17747_18835 = G__18852;
chunk__17748_18836 = G__18853;
count__17749_18837 = G__18854;
i__17750_18838 = G__18855;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__11641__auto__);
};
var bdo = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__11640__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__18856){
var args__11640__auto__ = cljs.core.seq(arglist__18856);
return bdo__delegate(args__11640__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17755_18857 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17756_18858 = null;var count__17757_18859 = 0;var i__17758_18860 = 0;while(true){
if((i__17758_18860 < count__17757_18859))
{var arg__11642__auto___18861 = cljs.core._nth.call(null,chunk__17756_18858,i__17758_18860);a__11641__auto__.push(arg__11642__auto___18861);
{
var G__18862 = seq__17755_18857;
var G__18863 = chunk__17756_18858;
var G__18864 = count__17757_18859;
var G__18865 = (i__17758_18860 + 1);
seq__17755_18857 = G__18862;
chunk__17756_18858 = G__18863;
count__17757_18859 = G__18864;
i__17758_18860 = G__18865;
continue;
}
} else
{var temp__4092__auto___18866 = cljs.core.seq.call(null,seq__17755_18857);if(temp__4092__auto___18866)
{var seq__17755_18867__$1 = temp__4092__auto___18866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17755_18867__$1))
{var c__11010__auto___18868 = cljs.core.chunk_first.call(null,seq__17755_18867__$1);{
var G__18869 = cljs.core.chunk_rest.call(null,seq__17755_18867__$1);
var G__18870 = c__11010__auto___18868;
var G__18871 = cljs.core.count.call(null,c__11010__auto___18868);
var G__18872 = 0;
seq__17755_18857 = G__18869;
chunk__17756_18858 = G__18870;
count__17757_18859 = G__18871;
i__17758_18860 = G__18872;
continue;
}
} else
{var arg__11642__auto___18873 = cljs.core.first.call(null,seq__17755_18867__$1);a__11641__auto__.push(arg__11642__auto___18873);
{
var G__18874 = cljs.core.next.call(null,seq__17755_18867__$1);
var G__18875 = null;
var G__18876 = 0;
var G__18877 = 0;
seq__17755_18857 = G__18874;
chunk__17756_18858 = G__18875;
count__17757_18859 = G__18876;
i__17758_18860 = G__18877;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__11641__auto__);
};
var big = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__11640__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__18878){
var args__11640__auto__ = cljs.core.seq(arglist__18878);
return big__delegate(args__11640__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17763_18879 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17764_18880 = null;var count__17765_18881 = 0;var i__17766_18882 = 0;while(true){
if((i__17766_18882 < count__17765_18881))
{var arg__11642__auto___18883 = cljs.core._nth.call(null,chunk__17764_18880,i__17766_18882);a__11641__auto__.push(arg__11642__auto___18883);
{
var G__18884 = seq__17763_18879;
var G__18885 = chunk__17764_18880;
var G__18886 = count__17765_18881;
var G__18887 = (i__17766_18882 + 1);
seq__17763_18879 = G__18884;
chunk__17764_18880 = G__18885;
count__17765_18881 = G__18886;
i__17766_18882 = G__18887;
continue;
}
} else
{var temp__4092__auto___18888 = cljs.core.seq.call(null,seq__17763_18879);if(temp__4092__auto___18888)
{var seq__17763_18889__$1 = temp__4092__auto___18888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17763_18889__$1))
{var c__11010__auto___18890 = cljs.core.chunk_first.call(null,seq__17763_18889__$1);{
var G__18891 = cljs.core.chunk_rest.call(null,seq__17763_18889__$1);
var G__18892 = c__11010__auto___18890;
var G__18893 = cljs.core.count.call(null,c__11010__auto___18890);
var G__18894 = 0;
seq__17763_18879 = G__18891;
chunk__17764_18880 = G__18892;
count__17765_18881 = G__18893;
i__17766_18882 = G__18894;
continue;
}
} else
{var arg__11642__auto___18895 = cljs.core.first.call(null,seq__17763_18889__$1);a__11641__auto__.push(arg__11642__auto___18895);
{
var G__18896 = cljs.core.next.call(null,seq__17763_18889__$1);
var G__18897 = null;
var G__18898 = 0;
var G__18899 = 0;
seq__17763_18879 = G__18896;
chunk__17764_18880 = G__18897;
count__17765_18881 = G__18898;
i__17766_18882 = G__18899;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__11641__auto__);
};
var blockquote = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__11640__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__18900){
var args__11640__auto__ = cljs.core.seq(arglist__18900);
return blockquote__delegate(args__11640__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17771_18901 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17772_18902 = null;var count__17773_18903 = 0;var i__17774_18904 = 0;while(true){
if((i__17774_18904 < count__17773_18903))
{var arg__11642__auto___18905 = cljs.core._nth.call(null,chunk__17772_18902,i__17774_18904);a__11641__auto__.push(arg__11642__auto___18905);
{
var G__18906 = seq__17771_18901;
var G__18907 = chunk__17772_18902;
var G__18908 = count__17773_18903;
var G__18909 = (i__17774_18904 + 1);
seq__17771_18901 = G__18906;
chunk__17772_18902 = G__18907;
count__17773_18903 = G__18908;
i__17774_18904 = G__18909;
continue;
}
} else
{var temp__4092__auto___18910 = cljs.core.seq.call(null,seq__17771_18901);if(temp__4092__auto___18910)
{var seq__17771_18911__$1 = temp__4092__auto___18910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17771_18911__$1))
{var c__11010__auto___18912 = cljs.core.chunk_first.call(null,seq__17771_18911__$1);{
var G__18913 = cljs.core.chunk_rest.call(null,seq__17771_18911__$1);
var G__18914 = c__11010__auto___18912;
var G__18915 = cljs.core.count.call(null,c__11010__auto___18912);
var G__18916 = 0;
seq__17771_18901 = G__18913;
chunk__17772_18902 = G__18914;
count__17773_18903 = G__18915;
i__17774_18904 = G__18916;
continue;
}
} else
{var arg__11642__auto___18917 = cljs.core.first.call(null,seq__17771_18911__$1);a__11641__auto__.push(arg__11642__auto___18917);
{
var G__18918 = cljs.core.next.call(null,seq__17771_18911__$1);
var G__18919 = null;
var G__18920 = 0;
var G__18921 = 0;
seq__17771_18901 = G__18918;
chunk__17772_18902 = G__18919;
count__17773_18903 = G__18920;
i__17774_18904 = G__18921;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__11641__auto__);
};
var body = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__11640__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__18922){
var args__11640__auto__ = cljs.core.seq(arglist__18922);
return body__delegate(args__11640__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17779_18923 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17780_18924 = null;var count__17781_18925 = 0;var i__17782_18926 = 0;while(true){
if((i__17782_18926 < count__17781_18925))
{var arg__11642__auto___18927 = cljs.core._nth.call(null,chunk__17780_18924,i__17782_18926);a__11641__auto__.push(arg__11642__auto___18927);
{
var G__18928 = seq__17779_18923;
var G__18929 = chunk__17780_18924;
var G__18930 = count__17781_18925;
var G__18931 = (i__17782_18926 + 1);
seq__17779_18923 = G__18928;
chunk__17780_18924 = G__18929;
count__17781_18925 = G__18930;
i__17782_18926 = G__18931;
continue;
}
} else
{var temp__4092__auto___18932 = cljs.core.seq.call(null,seq__17779_18923);if(temp__4092__auto___18932)
{var seq__17779_18933__$1 = temp__4092__auto___18932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17779_18933__$1))
{var c__11010__auto___18934 = cljs.core.chunk_first.call(null,seq__17779_18933__$1);{
var G__18935 = cljs.core.chunk_rest.call(null,seq__17779_18933__$1);
var G__18936 = c__11010__auto___18934;
var G__18937 = cljs.core.count.call(null,c__11010__auto___18934);
var G__18938 = 0;
seq__17779_18923 = G__18935;
chunk__17780_18924 = G__18936;
count__17781_18925 = G__18937;
i__17782_18926 = G__18938;
continue;
}
} else
{var arg__11642__auto___18939 = cljs.core.first.call(null,seq__17779_18933__$1);a__11641__auto__.push(arg__11642__auto___18939);
{
var G__18940 = cljs.core.next.call(null,seq__17779_18933__$1);
var G__18941 = null;
var G__18942 = 0;
var G__18943 = 0;
seq__17779_18923 = G__18940;
chunk__17780_18924 = G__18941;
count__17781_18925 = G__18942;
i__17782_18926 = G__18943;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__11641__auto__);
};
var br = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__11640__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__18944){
var args__11640__auto__ = cljs.core.seq(arglist__18944);
return br__delegate(args__11640__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17787_18945 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17788_18946 = null;var count__17789_18947 = 0;var i__17790_18948 = 0;while(true){
if((i__17790_18948 < count__17789_18947))
{var arg__11642__auto___18949 = cljs.core._nth.call(null,chunk__17788_18946,i__17790_18948);a__11641__auto__.push(arg__11642__auto___18949);
{
var G__18950 = seq__17787_18945;
var G__18951 = chunk__17788_18946;
var G__18952 = count__17789_18947;
var G__18953 = (i__17790_18948 + 1);
seq__17787_18945 = G__18950;
chunk__17788_18946 = G__18951;
count__17789_18947 = G__18952;
i__17790_18948 = G__18953;
continue;
}
} else
{var temp__4092__auto___18954 = cljs.core.seq.call(null,seq__17787_18945);if(temp__4092__auto___18954)
{var seq__17787_18955__$1 = temp__4092__auto___18954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17787_18955__$1))
{var c__11010__auto___18956 = cljs.core.chunk_first.call(null,seq__17787_18955__$1);{
var G__18957 = cljs.core.chunk_rest.call(null,seq__17787_18955__$1);
var G__18958 = c__11010__auto___18956;
var G__18959 = cljs.core.count.call(null,c__11010__auto___18956);
var G__18960 = 0;
seq__17787_18945 = G__18957;
chunk__17788_18946 = G__18958;
count__17789_18947 = G__18959;
i__17790_18948 = G__18960;
continue;
}
} else
{var arg__11642__auto___18961 = cljs.core.first.call(null,seq__17787_18955__$1);a__11641__auto__.push(arg__11642__auto___18961);
{
var G__18962 = cljs.core.next.call(null,seq__17787_18955__$1);
var G__18963 = null;
var G__18964 = 0;
var G__18965 = 0;
seq__17787_18945 = G__18962;
chunk__17788_18946 = G__18963;
count__17789_18947 = G__18964;
i__17790_18948 = G__18965;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__11641__auto__);
};
var button = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__11640__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__18966){
var args__11640__auto__ = cljs.core.seq(arglist__18966);
return button__delegate(args__11640__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17795_18967 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17796_18968 = null;var count__17797_18969 = 0;var i__17798_18970 = 0;while(true){
if((i__17798_18970 < count__17797_18969))
{var arg__11642__auto___18971 = cljs.core._nth.call(null,chunk__17796_18968,i__17798_18970);a__11641__auto__.push(arg__11642__auto___18971);
{
var G__18972 = seq__17795_18967;
var G__18973 = chunk__17796_18968;
var G__18974 = count__17797_18969;
var G__18975 = (i__17798_18970 + 1);
seq__17795_18967 = G__18972;
chunk__17796_18968 = G__18973;
count__17797_18969 = G__18974;
i__17798_18970 = G__18975;
continue;
}
} else
{var temp__4092__auto___18976 = cljs.core.seq.call(null,seq__17795_18967);if(temp__4092__auto___18976)
{var seq__17795_18977__$1 = temp__4092__auto___18976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17795_18977__$1))
{var c__11010__auto___18978 = cljs.core.chunk_first.call(null,seq__17795_18977__$1);{
var G__18979 = cljs.core.chunk_rest.call(null,seq__17795_18977__$1);
var G__18980 = c__11010__auto___18978;
var G__18981 = cljs.core.count.call(null,c__11010__auto___18978);
var G__18982 = 0;
seq__17795_18967 = G__18979;
chunk__17796_18968 = G__18980;
count__17797_18969 = G__18981;
i__17798_18970 = G__18982;
continue;
}
} else
{var arg__11642__auto___18983 = cljs.core.first.call(null,seq__17795_18977__$1);a__11641__auto__.push(arg__11642__auto___18983);
{
var G__18984 = cljs.core.next.call(null,seq__17795_18977__$1);
var G__18985 = null;
var G__18986 = 0;
var G__18987 = 0;
seq__17795_18967 = G__18984;
chunk__17796_18968 = G__18985;
count__17797_18969 = G__18986;
i__17798_18970 = G__18987;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__11641__auto__);
};
var canvas = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__11640__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__18988){
var args__11640__auto__ = cljs.core.seq(arglist__18988);
return canvas__delegate(args__11640__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17803_18989 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17804_18990 = null;var count__17805_18991 = 0;var i__17806_18992 = 0;while(true){
if((i__17806_18992 < count__17805_18991))
{var arg__11642__auto___18993 = cljs.core._nth.call(null,chunk__17804_18990,i__17806_18992);a__11641__auto__.push(arg__11642__auto___18993);
{
var G__18994 = seq__17803_18989;
var G__18995 = chunk__17804_18990;
var G__18996 = count__17805_18991;
var G__18997 = (i__17806_18992 + 1);
seq__17803_18989 = G__18994;
chunk__17804_18990 = G__18995;
count__17805_18991 = G__18996;
i__17806_18992 = G__18997;
continue;
}
} else
{var temp__4092__auto___18998 = cljs.core.seq.call(null,seq__17803_18989);if(temp__4092__auto___18998)
{var seq__17803_18999__$1 = temp__4092__auto___18998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17803_18999__$1))
{var c__11010__auto___19000 = cljs.core.chunk_first.call(null,seq__17803_18999__$1);{
var G__19001 = cljs.core.chunk_rest.call(null,seq__17803_18999__$1);
var G__19002 = c__11010__auto___19000;
var G__19003 = cljs.core.count.call(null,c__11010__auto___19000);
var G__19004 = 0;
seq__17803_18989 = G__19001;
chunk__17804_18990 = G__19002;
count__17805_18991 = G__19003;
i__17806_18992 = G__19004;
continue;
}
} else
{var arg__11642__auto___19005 = cljs.core.first.call(null,seq__17803_18999__$1);a__11641__auto__.push(arg__11642__auto___19005);
{
var G__19006 = cljs.core.next.call(null,seq__17803_18999__$1);
var G__19007 = null;
var G__19008 = 0;
var G__19009 = 0;
seq__17803_18989 = G__19006;
chunk__17804_18990 = G__19007;
count__17805_18991 = G__19008;
i__17806_18992 = G__19009;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__11641__auto__);
};
var caption = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__11640__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__19010){
var args__11640__auto__ = cljs.core.seq(arglist__19010);
return caption__delegate(args__11640__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17811_19011 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17812_19012 = null;var count__17813_19013 = 0;var i__17814_19014 = 0;while(true){
if((i__17814_19014 < count__17813_19013))
{var arg__11642__auto___19015 = cljs.core._nth.call(null,chunk__17812_19012,i__17814_19014);a__11641__auto__.push(arg__11642__auto___19015);
{
var G__19016 = seq__17811_19011;
var G__19017 = chunk__17812_19012;
var G__19018 = count__17813_19013;
var G__19019 = (i__17814_19014 + 1);
seq__17811_19011 = G__19016;
chunk__17812_19012 = G__19017;
count__17813_19013 = G__19018;
i__17814_19014 = G__19019;
continue;
}
} else
{var temp__4092__auto___19020 = cljs.core.seq.call(null,seq__17811_19011);if(temp__4092__auto___19020)
{var seq__17811_19021__$1 = temp__4092__auto___19020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17811_19021__$1))
{var c__11010__auto___19022 = cljs.core.chunk_first.call(null,seq__17811_19021__$1);{
var G__19023 = cljs.core.chunk_rest.call(null,seq__17811_19021__$1);
var G__19024 = c__11010__auto___19022;
var G__19025 = cljs.core.count.call(null,c__11010__auto___19022);
var G__19026 = 0;
seq__17811_19011 = G__19023;
chunk__17812_19012 = G__19024;
count__17813_19013 = G__19025;
i__17814_19014 = G__19026;
continue;
}
} else
{var arg__11642__auto___19027 = cljs.core.first.call(null,seq__17811_19021__$1);a__11641__auto__.push(arg__11642__auto___19027);
{
var G__19028 = cljs.core.next.call(null,seq__17811_19021__$1);
var G__19029 = null;
var G__19030 = 0;
var G__19031 = 0;
seq__17811_19011 = G__19028;
chunk__17812_19012 = G__19029;
count__17813_19013 = G__19030;
i__17814_19014 = G__19031;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__11641__auto__);
};
var cite = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__11640__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__19032){
var args__11640__auto__ = cljs.core.seq(arglist__19032);
return cite__delegate(args__11640__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17819_19033 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17820_19034 = null;var count__17821_19035 = 0;var i__17822_19036 = 0;while(true){
if((i__17822_19036 < count__17821_19035))
{var arg__11642__auto___19037 = cljs.core._nth.call(null,chunk__17820_19034,i__17822_19036);a__11641__auto__.push(arg__11642__auto___19037);
{
var G__19038 = seq__17819_19033;
var G__19039 = chunk__17820_19034;
var G__19040 = count__17821_19035;
var G__19041 = (i__17822_19036 + 1);
seq__17819_19033 = G__19038;
chunk__17820_19034 = G__19039;
count__17821_19035 = G__19040;
i__17822_19036 = G__19041;
continue;
}
} else
{var temp__4092__auto___19042 = cljs.core.seq.call(null,seq__17819_19033);if(temp__4092__auto___19042)
{var seq__17819_19043__$1 = temp__4092__auto___19042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17819_19043__$1))
{var c__11010__auto___19044 = cljs.core.chunk_first.call(null,seq__17819_19043__$1);{
var G__19045 = cljs.core.chunk_rest.call(null,seq__17819_19043__$1);
var G__19046 = c__11010__auto___19044;
var G__19047 = cljs.core.count.call(null,c__11010__auto___19044);
var G__19048 = 0;
seq__17819_19033 = G__19045;
chunk__17820_19034 = G__19046;
count__17821_19035 = G__19047;
i__17822_19036 = G__19048;
continue;
}
} else
{var arg__11642__auto___19049 = cljs.core.first.call(null,seq__17819_19043__$1);a__11641__auto__.push(arg__11642__auto___19049);
{
var G__19050 = cljs.core.next.call(null,seq__17819_19043__$1);
var G__19051 = null;
var G__19052 = 0;
var G__19053 = 0;
seq__17819_19033 = G__19050;
chunk__17820_19034 = G__19051;
count__17821_19035 = G__19052;
i__17822_19036 = G__19053;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__11641__auto__);
};
var code = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__11640__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__19054){
var args__11640__auto__ = cljs.core.seq(arglist__19054);
return code__delegate(args__11640__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17827_19055 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17828_19056 = null;var count__17829_19057 = 0;var i__17830_19058 = 0;while(true){
if((i__17830_19058 < count__17829_19057))
{var arg__11642__auto___19059 = cljs.core._nth.call(null,chunk__17828_19056,i__17830_19058);a__11641__auto__.push(arg__11642__auto___19059);
{
var G__19060 = seq__17827_19055;
var G__19061 = chunk__17828_19056;
var G__19062 = count__17829_19057;
var G__19063 = (i__17830_19058 + 1);
seq__17827_19055 = G__19060;
chunk__17828_19056 = G__19061;
count__17829_19057 = G__19062;
i__17830_19058 = G__19063;
continue;
}
} else
{var temp__4092__auto___19064 = cljs.core.seq.call(null,seq__17827_19055);if(temp__4092__auto___19064)
{var seq__17827_19065__$1 = temp__4092__auto___19064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17827_19065__$1))
{var c__11010__auto___19066 = cljs.core.chunk_first.call(null,seq__17827_19065__$1);{
var G__19067 = cljs.core.chunk_rest.call(null,seq__17827_19065__$1);
var G__19068 = c__11010__auto___19066;
var G__19069 = cljs.core.count.call(null,c__11010__auto___19066);
var G__19070 = 0;
seq__17827_19055 = G__19067;
chunk__17828_19056 = G__19068;
count__17829_19057 = G__19069;
i__17830_19058 = G__19070;
continue;
}
} else
{var arg__11642__auto___19071 = cljs.core.first.call(null,seq__17827_19065__$1);a__11641__auto__.push(arg__11642__auto___19071);
{
var G__19072 = cljs.core.next.call(null,seq__17827_19065__$1);
var G__19073 = null;
var G__19074 = 0;
var G__19075 = 0;
seq__17827_19055 = G__19072;
chunk__17828_19056 = G__19073;
count__17829_19057 = G__19074;
i__17830_19058 = G__19075;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__11641__auto__);
};
var col = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__11640__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__19076){
var args__11640__auto__ = cljs.core.seq(arglist__19076);
return col__delegate(args__11640__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17835_19077 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17836_19078 = null;var count__17837_19079 = 0;var i__17838_19080 = 0;while(true){
if((i__17838_19080 < count__17837_19079))
{var arg__11642__auto___19081 = cljs.core._nth.call(null,chunk__17836_19078,i__17838_19080);a__11641__auto__.push(arg__11642__auto___19081);
{
var G__19082 = seq__17835_19077;
var G__19083 = chunk__17836_19078;
var G__19084 = count__17837_19079;
var G__19085 = (i__17838_19080 + 1);
seq__17835_19077 = G__19082;
chunk__17836_19078 = G__19083;
count__17837_19079 = G__19084;
i__17838_19080 = G__19085;
continue;
}
} else
{var temp__4092__auto___19086 = cljs.core.seq.call(null,seq__17835_19077);if(temp__4092__auto___19086)
{var seq__17835_19087__$1 = temp__4092__auto___19086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17835_19087__$1))
{var c__11010__auto___19088 = cljs.core.chunk_first.call(null,seq__17835_19087__$1);{
var G__19089 = cljs.core.chunk_rest.call(null,seq__17835_19087__$1);
var G__19090 = c__11010__auto___19088;
var G__19091 = cljs.core.count.call(null,c__11010__auto___19088);
var G__19092 = 0;
seq__17835_19077 = G__19089;
chunk__17836_19078 = G__19090;
count__17837_19079 = G__19091;
i__17838_19080 = G__19092;
continue;
}
} else
{var arg__11642__auto___19093 = cljs.core.first.call(null,seq__17835_19087__$1);a__11641__auto__.push(arg__11642__auto___19093);
{
var G__19094 = cljs.core.next.call(null,seq__17835_19087__$1);
var G__19095 = null;
var G__19096 = 0;
var G__19097 = 0;
seq__17835_19077 = G__19094;
chunk__17836_19078 = G__19095;
count__17837_19079 = G__19096;
i__17838_19080 = G__19097;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__11641__auto__);
};
var colgroup = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__11640__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__19098){
var args__11640__auto__ = cljs.core.seq(arglist__19098);
return colgroup__delegate(args__11640__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17843_19099 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17844_19100 = null;var count__17845_19101 = 0;var i__17846_19102 = 0;while(true){
if((i__17846_19102 < count__17845_19101))
{var arg__11642__auto___19103 = cljs.core._nth.call(null,chunk__17844_19100,i__17846_19102);a__11641__auto__.push(arg__11642__auto___19103);
{
var G__19104 = seq__17843_19099;
var G__19105 = chunk__17844_19100;
var G__19106 = count__17845_19101;
var G__19107 = (i__17846_19102 + 1);
seq__17843_19099 = G__19104;
chunk__17844_19100 = G__19105;
count__17845_19101 = G__19106;
i__17846_19102 = G__19107;
continue;
}
} else
{var temp__4092__auto___19108 = cljs.core.seq.call(null,seq__17843_19099);if(temp__4092__auto___19108)
{var seq__17843_19109__$1 = temp__4092__auto___19108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17843_19109__$1))
{var c__11010__auto___19110 = cljs.core.chunk_first.call(null,seq__17843_19109__$1);{
var G__19111 = cljs.core.chunk_rest.call(null,seq__17843_19109__$1);
var G__19112 = c__11010__auto___19110;
var G__19113 = cljs.core.count.call(null,c__11010__auto___19110);
var G__19114 = 0;
seq__17843_19099 = G__19111;
chunk__17844_19100 = G__19112;
count__17845_19101 = G__19113;
i__17846_19102 = G__19114;
continue;
}
} else
{var arg__11642__auto___19115 = cljs.core.first.call(null,seq__17843_19109__$1);a__11641__auto__.push(arg__11642__auto___19115);
{
var G__19116 = cljs.core.next.call(null,seq__17843_19109__$1);
var G__19117 = null;
var G__19118 = 0;
var G__19119 = 0;
seq__17843_19099 = G__19116;
chunk__17844_19100 = G__19117;
count__17845_19101 = G__19118;
i__17846_19102 = G__19119;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__11641__auto__);
};
var data = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__11640__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__19120){
var args__11640__auto__ = cljs.core.seq(arglist__19120);
return data__delegate(args__11640__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17851_19121 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17852_19122 = null;var count__17853_19123 = 0;var i__17854_19124 = 0;while(true){
if((i__17854_19124 < count__17853_19123))
{var arg__11642__auto___19125 = cljs.core._nth.call(null,chunk__17852_19122,i__17854_19124);a__11641__auto__.push(arg__11642__auto___19125);
{
var G__19126 = seq__17851_19121;
var G__19127 = chunk__17852_19122;
var G__19128 = count__17853_19123;
var G__19129 = (i__17854_19124 + 1);
seq__17851_19121 = G__19126;
chunk__17852_19122 = G__19127;
count__17853_19123 = G__19128;
i__17854_19124 = G__19129;
continue;
}
} else
{var temp__4092__auto___19130 = cljs.core.seq.call(null,seq__17851_19121);if(temp__4092__auto___19130)
{var seq__17851_19131__$1 = temp__4092__auto___19130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17851_19131__$1))
{var c__11010__auto___19132 = cljs.core.chunk_first.call(null,seq__17851_19131__$1);{
var G__19133 = cljs.core.chunk_rest.call(null,seq__17851_19131__$1);
var G__19134 = c__11010__auto___19132;
var G__19135 = cljs.core.count.call(null,c__11010__auto___19132);
var G__19136 = 0;
seq__17851_19121 = G__19133;
chunk__17852_19122 = G__19134;
count__17853_19123 = G__19135;
i__17854_19124 = G__19136;
continue;
}
} else
{var arg__11642__auto___19137 = cljs.core.first.call(null,seq__17851_19131__$1);a__11641__auto__.push(arg__11642__auto___19137);
{
var G__19138 = cljs.core.next.call(null,seq__17851_19131__$1);
var G__19139 = null;
var G__19140 = 0;
var G__19141 = 0;
seq__17851_19121 = G__19138;
chunk__17852_19122 = G__19139;
count__17853_19123 = G__19140;
i__17854_19124 = G__19141;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__11641__auto__);
};
var datalist = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__11640__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__19142){
var args__11640__auto__ = cljs.core.seq(arglist__19142);
return datalist__delegate(args__11640__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17859_19143 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17860_19144 = null;var count__17861_19145 = 0;var i__17862_19146 = 0;while(true){
if((i__17862_19146 < count__17861_19145))
{var arg__11642__auto___19147 = cljs.core._nth.call(null,chunk__17860_19144,i__17862_19146);a__11641__auto__.push(arg__11642__auto___19147);
{
var G__19148 = seq__17859_19143;
var G__19149 = chunk__17860_19144;
var G__19150 = count__17861_19145;
var G__19151 = (i__17862_19146 + 1);
seq__17859_19143 = G__19148;
chunk__17860_19144 = G__19149;
count__17861_19145 = G__19150;
i__17862_19146 = G__19151;
continue;
}
} else
{var temp__4092__auto___19152 = cljs.core.seq.call(null,seq__17859_19143);if(temp__4092__auto___19152)
{var seq__17859_19153__$1 = temp__4092__auto___19152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17859_19153__$1))
{var c__11010__auto___19154 = cljs.core.chunk_first.call(null,seq__17859_19153__$1);{
var G__19155 = cljs.core.chunk_rest.call(null,seq__17859_19153__$1);
var G__19156 = c__11010__auto___19154;
var G__19157 = cljs.core.count.call(null,c__11010__auto___19154);
var G__19158 = 0;
seq__17859_19143 = G__19155;
chunk__17860_19144 = G__19156;
count__17861_19145 = G__19157;
i__17862_19146 = G__19158;
continue;
}
} else
{var arg__11642__auto___19159 = cljs.core.first.call(null,seq__17859_19153__$1);a__11641__auto__.push(arg__11642__auto___19159);
{
var G__19160 = cljs.core.next.call(null,seq__17859_19153__$1);
var G__19161 = null;
var G__19162 = 0;
var G__19163 = 0;
seq__17859_19143 = G__19160;
chunk__17860_19144 = G__19161;
count__17861_19145 = G__19162;
i__17862_19146 = G__19163;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__11641__auto__);
};
var dd = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__11640__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__19164){
var args__11640__auto__ = cljs.core.seq(arglist__19164);
return dd__delegate(args__11640__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17867_19165 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17868_19166 = null;var count__17869_19167 = 0;var i__17870_19168 = 0;while(true){
if((i__17870_19168 < count__17869_19167))
{var arg__11642__auto___19169 = cljs.core._nth.call(null,chunk__17868_19166,i__17870_19168);a__11641__auto__.push(arg__11642__auto___19169);
{
var G__19170 = seq__17867_19165;
var G__19171 = chunk__17868_19166;
var G__19172 = count__17869_19167;
var G__19173 = (i__17870_19168 + 1);
seq__17867_19165 = G__19170;
chunk__17868_19166 = G__19171;
count__17869_19167 = G__19172;
i__17870_19168 = G__19173;
continue;
}
} else
{var temp__4092__auto___19174 = cljs.core.seq.call(null,seq__17867_19165);if(temp__4092__auto___19174)
{var seq__17867_19175__$1 = temp__4092__auto___19174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17867_19175__$1))
{var c__11010__auto___19176 = cljs.core.chunk_first.call(null,seq__17867_19175__$1);{
var G__19177 = cljs.core.chunk_rest.call(null,seq__17867_19175__$1);
var G__19178 = c__11010__auto___19176;
var G__19179 = cljs.core.count.call(null,c__11010__auto___19176);
var G__19180 = 0;
seq__17867_19165 = G__19177;
chunk__17868_19166 = G__19178;
count__17869_19167 = G__19179;
i__17870_19168 = G__19180;
continue;
}
} else
{var arg__11642__auto___19181 = cljs.core.first.call(null,seq__17867_19175__$1);a__11641__auto__.push(arg__11642__auto___19181);
{
var G__19182 = cljs.core.next.call(null,seq__17867_19175__$1);
var G__19183 = null;
var G__19184 = 0;
var G__19185 = 0;
seq__17867_19165 = G__19182;
chunk__17868_19166 = G__19183;
count__17869_19167 = G__19184;
i__17870_19168 = G__19185;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__11641__auto__);
};
var del = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__11640__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__19186){
var args__11640__auto__ = cljs.core.seq(arglist__19186);
return del__delegate(args__11640__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17875_19187 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17876_19188 = null;var count__17877_19189 = 0;var i__17878_19190 = 0;while(true){
if((i__17878_19190 < count__17877_19189))
{var arg__11642__auto___19191 = cljs.core._nth.call(null,chunk__17876_19188,i__17878_19190);a__11641__auto__.push(arg__11642__auto___19191);
{
var G__19192 = seq__17875_19187;
var G__19193 = chunk__17876_19188;
var G__19194 = count__17877_19189;
var G__19195 = (i__17878_19190 + 1);
seq__17875_19187 = G__19192;
chunk__17876_19188 = G__19193;
count__17877_19189 = G__19194;
i__17878_19190 = G__19195;
continue;
}
} else
{var temp__4092__auto___19196 = cljs.core.seq.call(null,seq__17875_19187);if(temp__4092__auto___19196)
{var seq__17875_19197__$1 = temp__4092__auto___19196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17875_19197__$1))
{var c__11010__auto___19198 = cljs.core.chunk_first.call(null,seq__17875_19197__$1);{
var G__19199 = cljs.core.chunk_rest.call(null,seq__17875_19197__$1);
var G__19200 = c__11010__auto___19198;
var G__19201 = cljs.core.count.call(null,c__11010__auto___19198);
var G__19202 = 0;
seq__17875_19187 = G__19199;
chunk__17876_19188 = G__19200;
count__17877_19189 = G__19201;
i__17878_19190 = G__19202;
continue;
}
} else
{var arg__11642__auto___19203 = cljs.core.first.call(null,seq__17875_19197__$1);a__11641__auto__.push(arg__11642__auto___19203);
{
var G__19204 = cljs.core.next.call(null,seq__17875_19197__$1);
var G__19205 = null;
var G__19206 = 0;
var G__19207 = 0;
seq__17875_19187 = G__19204;
chunk__17876_19188 = G__19205;
count__17877_19189 = G__19206;
i__17878_19190 = G__19207;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__11641__auto__);
};
var details = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__11640__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__19208){
var args__11640__auto__ = cljs.core.seq(arglist__19208);
return details__delegate(args__11640__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17883_19209 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17884_19210 = null;var count__17885_19211 = 0;var i__17886_19212 = 0;while(true){
if((i__17886_19212 < count__17885_19211))
{var arg__11642__auto___19213 = cljs.core._nth.call(null,chunk__17884_19210,i__17886_19212);a__11641__auto__.push(arg__11642__auto___19213);
{
var G__19214 = seq__17883_19209;
var G__19215 = chunk__17884_19210;
var G__19216 = count__17885_19211;
var G__19217 = (i__17886_19212 + 1);
seq__17883_19209 = G__19214;
chunk__17884_19210 = G__19215;
count__17885_19211 = G__19216;
i__17886_19212 = G__19217;
continue;
}
} else
{var temp__4092__auto___19218 = cljs.core.seq.call(null,seq__17883_19209);if(temp__4092__auto___19218)
{var seq__17883_19219__$1 = temp__4092__auto___19218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17883_19219__$1))
{var c__11010__auto___19220 = cljs.core.chunk_first.call(null,seq__17883_19219__$1);{
var G__19221 = cljs.core.chunk_rest.call(null,seq__17883_19219__$1);
var G__19222 = c__11010__auto___19220;
var G__19223 = cljs.core.count.call(null,c__11010__auto___19220);
var G__19224 = 0;
seq__17883_19209 = G__19221;
chunk__17884_19210 = G__19222;
count__17885_19211 = G__19223;
i__17886_19212 = G__19224;
continue;
}
} else
{var arg__11642__auto___19225 = cljs.core.first.call(null,seq__17883_19219__$1);a__11641__auto__.push(arg__11642__auto___19225);
{
var G__19226 = cljs.core.next.call(null,seq__17883_19219__$1);
var G__19227 = null;
var G__19228 = 0;
var G__19229 = 0;
seq__17883_19209 = G__19226;
chunk__17884_19210 = G__19227;
count__17885_19211 = G__19228;
i__17886_19212 = G__19229;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__11641__auto__);
};
var dfn = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__11640__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__19230){
var args__11640__auto__ = cljs.core.seq(arglist__19230);
return dfn__delegate(args__11640__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17891_19231 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17892_19232 = null;var count__17893_19233 = 0;var i__17894_19234 = 0;while(true){
if((i__17894_19234 < count__17893_19233))
{var arg__11642__auto___19235 = cljs.core._nth.call(null,chunk__17892_19232,i__17894_19234);a__11641__auto__.push(arg__11642__auto___19235);
{
var G__19236 = seq__17891_19231;
var G__19237 = chunk__17892_19232;
var G__19238 = count__17893_19233;
var G__19239 = (i__17894_19234 + 1);
seq__17891_19231 = G__19236;
chunk__17892_19232 = G__19237;
count__17893_19233 = G__19238;
i__17894_19234 = G__19239;
continue;
}
} else
{var temp__4092__auto___19240 = cljs.core.seq.call(null,seq__17891_19231);if(temp__4092__auto___19240)
{var seq__17891_19241__$1 = temp__4092__auto___19240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17891_19241__$1))
{var c__11010__auto___19242 = cljs.core.chunk_first.call(null,seq__17891_19241__$1);{
var G__19243 = cljs.core.chunk_rest.call(null,seq__17891_19241__$1);
var G__19244 = c__11010__auto___19242;
var G__19245 = cljs.core.count.call(null,c__11010__auto___19242);
var G__19246 = 0;
seq__17891_19231 = G__19243;
chunk__17892_19232 = G__19244;
count__17893_19233 = G__19245;
i__17894_19234 = G__19246;
continue;
}
} else
{var arg__11642__auto___19247 = cljs.core.first.call(null,seq__17891_19241__$1);a__11641__auto__.push(arg__11642__auto___19247);
{
var G__19248 = cljs.core.next.call(null,seq__17891_19241__$1);
var G__19249 = null;
var G__19250 = 0;
var G__19251 = 0;
seq__17891_19231 = G__19248;
chunk__17892_19232 = G__19249;
count__17893_19233 = G__19250;
i__17894_19234 = G__19251;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__11641__auto__);
};
var div = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__11640__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__19252){
var args__11640__auto__ = cljs.core.seq(arglist__19252);
return div__delegate(args__11640__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17899_19253 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17900_19254 = null;var count__17901_19255 = 0;var i__17902_19256 = 0;while(true){
if((i__17902_19256 < count__17901_19255))
{var arg__11642__auto___19257 = cljs.core._nth.call(null,chunk__17900_19254,i__17902_19256);a__11641__auto__.push(arg__11642__auto___19257);
{
var G__19258 = seq__17899_19253;
var G__19259 = chunk__17900_19254;
var G__19260 = count__17901_19255;
var G__19261 = (i__17902_19256 + 1);
seq__17899_19253 = G__19258;
chunk__17900_19254 = G__19259;
count__17901_19255 = G__19260;
i__17902_19256 = G__19261;
continue;
}
} else
{var temp__4092__auto___19262 = cljs.core.seq.call(null,seq__17899_19253);if(temp__4092__auto___19262)
{var seq__17899_19263__$1 = temp__4092__auto___19262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17899_19263__$1))
{var c__11010__auto___19264 = cljs.core.chunk_first.call(null,seq__17899_19263__$1);{
var G__19265 = cljs.core.chunk_rest.call(null,seq__17899_19263__$1);
var G__19266 = c__11010__auto___19264;
var G__19267 = cljs.core.count.call(null,c__11010__auto___19264);
var G__19268 = 0;
seq__17899_19253 = G__19265;
chunk__17900_19254 = G__19266;
count__17901_19255 = G__19267;
i__17902_19256 = G__19268;
continue;
}
} else
{var arg__11642__auto___19269 = cljs.core.first.call(null,seq__17899_19263__$1);a__11641__auto__.push(arg__11642__auto___19269);
{
var G__19270 = cljs.core.next.call(null,seq__17899_19263__$1);
var G__19271 = null;
var G__19272 = 0;
var G__19273 = 0;
seq__17899_19253 = G__19270;
chunk__17900_19254 = G__19271;
count__17901_19255 = G__19272;
i__17902_19256 = G__19273;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__11641__auto__);
};
var dl = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__11640__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__19274){
var args__11640__auto__ = cljs.core.seq(arglist__19274);
return dl__delegate(args__11640__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17907_19275 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17908_19276 = null;var count__17909_19277 = 0;var i__17910_19278 = 0;while(true){
if((i__17910_19278 < count__17909_19277))
{var arg__11642__auto___19279 = cljs.core._nth.call(null,chunk__17908_19276,i__17910_19278);a__11641__auto__.push(arg__11642__auto___19279);
{
var G__19280 = seq__17907_19275;
var G__19281 = chunk__17908_19276;
var G__19282 = count__17909_19277;
var G__19283 = (i__17910_19278 + 1);
seq__17907_19275 = G__19280;
chunk__17908_19276 = G__19281;
count__17909_19277 = G__19282;
i__17910_19278 = G__19283;
continue;
}
} else
{var temp__4092__auto___19284 = cljs.core.seq.call(null,seq__17907_19275);if(temp__4092__auto___19284)
{var seq__17907_19285__$1 = temp__4092__auto___19284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17907_19285__$1))
{var c__11010__auto___19286 = cljs.core.chunk_first.call(null,seq__17907_19285__$1);{
var G__19287 = cljs.core.chunk_rest.call(null,seq__17907_19285__$1);
var G__19288 = c__11010__auto___19286;
var G__19289 = cljs.core.count.call(null,c__11010__auto___19286);
var G__19290 = 0;
seq__17907_19275 = G__19287;
chunk__17908_19276 = G__19288;
count__17909_19277 = G__19289;
i__17910_19278 = G__19290;
continue;
}
} else
{var arg__11642__auto___19291 = cljs.core.first.call(null,seq__17907_19285__$1);a__11641__auto__.push(arg__11642__auto___19291);
{
var G__19292 = cljs.core.next.call(null,seq__17907_19285__$1);
var G__19293 = null;
var G__19294 = 0;
var G__19295 = 0;
seq__17907_19275 = G__19292;
chunk__17908_19276 = G__19293;
count__17909_19277 = G__19294;
i__17910_19278 = G__19295;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__11641__auto__);
};
var dt = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__11640__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__19296){
var args__11640__auto__ = cljs.core.seq(arglist__19296);
return dt__delegate(args__11640__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17915_19297 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17916_19298 = null;var count__17917_19299 = 0;var i__17918_19300 = 0;while(true){
if((i__17918_19300 < count__17917_19299))
{var arg__11642__auto___19301 = cljs.core._nth.call(null,chunk__17916_19298,i__17918_19300);a__11641__auto__.push(arg__11642__auto___19301);
{
var G__19302 = seq__17915_19297;
var G__19303 = chunk__17916_19298;
var G__19304 = count__17917_19299;
var G__19305 = (i__17918_19300 + 1);
seq__17915_19297 = G__19302;
chunk__17916_19298 = G__19303;
count__17917_19299 = G__19304;
i__17918_19300 = G__19305;
continue;
}
} else
{var temp__4092__auto___19306 = cljs.core.seq.call(null,seq__17915_19297);if(temp__4092__auto___19306)
{var seq__17915_19307__$1 = temp__4092__auto___19306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17915_19307__$1))
{var c__11010__auto___19308 = cljs.core.chunk_first.call(null,seq__17915_19307__$1);{
var G__19309 = cljs.core.chunk_rest.call(null,seq__17915_19307__$1);
var G__19310 = c__11010__auto___19308;
var G__19311 = cljs.core.count.call(null,c__11010__auto___19308);
var G__19312 = 0;
seq__17915_19297 = G__19309;
chunk__17916_19298 = G__19310;
count__17917_19299 = G__19311;
i__17918_19300 = G__19312;
continue;
}
} else
{var arg__11642__auto___19313 = cljs.core.first.call(null,seq__17915_19307__$1);a__11641__auto__.push(arg__11642__auto___19313);
{
var G__19314 = cljs.core.next.call(null,seq__17915_19307__$1);
var G__19315 = null;
var G__19316 = 0;
var G__19317 = 0;
seq__17915_19297 = G__19314;
chunk__17916_19298 = G__19315;
count__17917_19299 = G__19316;
i__17918_19300 = G__19317;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__11641__auto__);
};
var em = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__11640__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__19318){
var args__11640__auto__ = cljs.core.seq(arglist__19318);
return em__delegate(args__11640__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17931_19319 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17932_19320 = null;var count__17933_19321 = 0;var i__17934_19322 = 0;while(true){
if((i__17934_19322 < count__17933_19321))
{var arg__11642__auto___19323 = cljs.core._nth.call(null,chunk__17932_19320,i__17934_19322);a__11641__auto__.push(arg__11642__auto___19323);
{
var G__19324 = seq__17931_19319;
var G__19325 = chunk__17932_19320;
var G__19326 = count__17933_19321;
var G__19327 = (i__17934_19322 + 1);
seq__17931_19319 = G__19324;
chunk__17932_19320 = G__19325;
count__17933_19321 = G__19326;
i__17934_19322 = G__19327;
continue;
}
} else
{var temp__4092__auto___19328 = cljs.core.seq.call(null,seq__17931_19319);if(temp__4092__auto___19328)
{var seq__17931_19329__$1 = temp__4092__auto___19328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17931_19329__$1))
{var c__11010__auto___19330 = cljs.core.chunk_first.call(null,seq__17931_19329__$1);{
var G__19331 = cljs.core.chunk_rest.call(null,seq__17931_19329__$1);
var G__19332 = c__11010__auto___19330;
var G__19333 = cljs.core.count.call(null,c__11010__auto___19330);
var G__19334 = 0;
seq__17931_19319 = G__19331;
chunk__17932_19320 = G__19332;
count__17933_19321 = G__19333;
i__17934_19322 = G__19334;
continue;
}
} else
{var arg__11642__auto___19335 = cljs.core.first.call(null,seq__17931_19329__$1);a__11641__auto__.push(arg__11642__auto___19335);
{
var G__19336 = cljs.core.next.call(null,seq__17931_19329__$1);
var G__19337 = null;
var G__19338 = 0;
var G__19339 = 0;
seq__17931_19319 = G__19336;
chunk__17932_19320 = G__19337;
count__17933_19321 = G__19338;
i__17934_19322 = G__19339;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__11641__auto__);
};
var embed = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__11640__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__19340){
var args__11640__auto__ = cljs.core.seq(arglist__19340);
return embed__delegate(args__11640__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17939_19341 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17940_19342 = null;var count__17941_19343 = 0;var i__17942_19344 = 0;while(true){
if((i__17942_19344 < count__17941_19343))
{var arg__11642__auto___19345 = cljs.core._nth.call(null,chunk__17940_19342,i__17942_19344);a__11641__auto__.push(arg__11642__auto___19345);
{
var G__19346 = seq__17939_19341;
var G__19347 = chunk__17940_19342;
var G__19348 = count__17941_19343;
var G__19349 = (i__17942_19344 + 1);
seq__17939_19341 = G__19346;
chunk__17940_19342 = G__19347;
count__17941_19343 = G__19348;
i__17942_19344 = G__19349;
continue;
}
} else
{var temp__4092__auto___19350 = cljs.core.seq.call(null,seq__17939_19341);if(temp__4092__auto___19350)
{var seq__17939_19351__$1 = temp__4092__auto___19350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17939_19351__$1))
{var c__11010__auto___19352 = cljs.core.chunk_first.call(null,seq__17939_19351__$1);{
var G__19353 = cljs.core.chunk_rest.call(null,seq__17939_19351__$1);
var G__19354 = c__11010__auto___19352;
var G__19355 = cljs.core.count.call(null,c__11010__auto___19352);
var G__19356 = 0;
seq__17939_19341 = G__19353;
chunk__17940_19342 = G__19354;
count__17941_19343 = G__19355;
i__17942_19344 = G__19356;
continue;
}
} else
{var arg__11642__auto___19357 = cljs.core.first.call(null,seq__17939_19351__$1);a__11641__auto__.push(arg__11642__auto___19357);
{
var G__19358 = cljs.core.next.call(null,seq__17939_19351__$1);
var G__19359 = null;
var G__19360 = 0;
var G__19361 = 0;
seq__17939_19341 = G__19358;
chunk__17940_19342 = G__19359;
count__17941_19343 = G__19360;
i__17942_19344 = G__19361;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__11641__auto__);
};
var fieldset = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__11640__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__19362){
var args__11640__auto__ = cljs.core.seq(arglist__19362);
return fieldset__delegate(args__11640__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17947_19363 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17948_19364 = null;var count__17949_19365 = 0;var i__17950_19366 = 0;while(true){
if((i__17950_19366 < count__17949_19365))
{var arg__11642__auto___19367 = cljs.core._nth.call(null,chunk__17948_19364,i__17950_19366);a__11641__auto__.push(arg__11642__auto___19367);
{
var G__19368 = seq__17947_19363;
var G__19369 = chunk__17948_19364;
var G__19370 = count__17949_19365;
var G__19371 = (i__17950_19366 + 1);
seq__17947_19363 = G__19368;
chunk__17948_19364 = G__19369;
count__17949_19365 = G__19370;
i__17950_19366 = G__19371;
continue;
}
} else
{var temp__4092__auto___19372 = cljs.core.seq.call(null,seq__17947_19363);if(temp__4092__auto___19372)
{var seq__17947_19373__$1 = temp__4092__auto___19372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17947_19373__$1))
{var c__11010__auto___19374 = cljs.core.chunk_first.call(null,seq__17947_19373__$1);{
var G__19375 = cljs.core.chunk_rest.call(null,seq__17947_19373__$1);
var G__19376 = c__11010__auto___19374;
var G__19377 = cljs.core.count.call(null,c__11010__auto___19374);
var G__19378 = 0;
seq__17947_19363 = G__19375;
chunk__17948_19364 = G__19376;
count__17949_19365 = G__19377;
i__17950_19366 = G__19378;
continue;
}
} else
{var arg__11642__auto___19379 = cljs.core.first.call(null,seq__17947_19373__$1);a__11641__auto__.push(arg__11642__auto___19379);
{
var G__19380 = cljs.core.next.call(null,seq__17947_19373__$1);
var G__19381 = null;
var G__19382 = 0;
var G__19383 = 0;
seq__17947_19363 = G__19380;
chunk__17948_19364 = G__19381;
count__17949_19365 = G__19382;
i__17950_19366 = G__19383;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__11641__auto__);
};
var figcaption = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__11640__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__19384){
var args__11640__auto__ = cljs.core.seq(arglist__19384);
return figcaption__delegate(args__11640__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17955_19385 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17956_19386 = null;var count__17957_19387 = 0;var i__17958_19388 = 0;while(true){
if((i__17958_19388 < count__17957_19387))
{var arg__11642__auto___19389 = cljs.core._nth.call(null,chunk__17956_19386,i__17958_19388);a__11641__auto__.push(arg__11642__auto___19389);
{
var G__19390 = seq__17955_19385;
var G__19391 = chunk__17956_19386;
var G__19392 = count__17957_19387;
var G__19393 = (i__17958_19388 + 1);
seq__17955_19385 = G__19390;
chunk__17956_19386 = G__19391;
count__17957_19387 = G__19392;
i__17958_19388 = G__19393;
continue;
}
} else
{var temp__4092__auto___19394 = cljs.core.seq.call(null,seq__17955_19385);if(temp__4092__auto___19394)
{var seq__17955_19395__$1 = temp__4092__auto___19394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17955_19395__$1))
{var c__11010__auto___19396 = cljs.core.chunk_first.call(null,seq__17955_19395__$1);{
var G__19397 = cljs.core.chunk_rest.call(null,seq__17955_19395__$1);
var G__19398 = c__11010__auto___19396;
var G__19399 = cljs.core.count.call(null,c__11010__auto___19396);
var G__19400 = 0;
seq__17955_19385 = G__19397;
chunk__17956_19386 = G__19398;
count__17957_19387 = G__19399;
i__17958_19388 = G__19400;
continue;
}
} else
{var arg__11642__auto___19401 = cljs.core.first.call(null,seq__17955_19395__$1);a__11641__auto__.push(arg__11642__auto___19401);
{
var G__19402 = cljs.core.next.call(null,seq__17955_19395__$1);
var G__19403 = null;
var G__19404 = 0;
var G__19405 = 0;
seq__17955_19385 = G__19402;
chunk__17956_19386 = G__19403;
count__17957_19387 = G__19404;
i__17958_19388 = G__19405;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__11641__auto__);
};
var figure = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__11640__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__19406){
var args__11640__auto__ = cljs.core.seq(arglist__19406);
return figure__delegate(args__11640__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17963_19407 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17964_19408 = null;var count__17965_19409 = 0;var i__17966_19410 = 0;while(true){
if((i__17966_19410 < count__17965_19409))
{var arg__11642__auto___19411 = cljs.core._nth.call(null,chunk__17964_19408,i__17966_19410);a__11641__auto__.push(arg__11642__auto___19411);
{
var G__19412 = seq__17963_19407;
var G__19413 = chunk__17964_19408;
var G__19414 = count__17965_19409;
var G__19415 = (i__17966_19410 + 1);
seq__17963_19407 = G__19412;
chunk__17964_19408 = G__19413;
count__17965_19409 = G__19414;
i__17966_19410 = G__19415;
continue;
}
} else
{var temp__4092__auto___19416 = cljs.core.seq.call(null,seq__17963_19407);if(temp__4092__auto___19416)
{var seq__17963_19417__$1 = temp__4092__auto___19416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17963_19417__$1))
{var c__11010__auto___19418 = cljs.core.chunk_first.call(null,seq__17963_19417__$1);{
var G__19419 = cljs.core.chunk_rest.call(null,seq__17963_19417__$1);
var G__19420 = c__11010__auto___19418;
var G__19421 = cljs.core.count.call(null,c__11010__auto___19418);
var G__19422 = 0;
seq__17963_19407 = G__19419;
chunk__17964_19408 = G__19420;
count__17965_19409 = G__19421;
i__17966_19410 = G__19422;
continue;
}
} else
{var arg__11642__auto___19423 = cljs.core.first.call(null,seq__17963_19417__$1);a__11641__auto__.push(arg__11642__auto___19423);
{
var G__19424 = cljs.core.next.call(null,seq__17963_19417__$1);
var G__19425 = null;
var G__19426 = 0;
var G__19427 = 0;
seq__17963_19407 = G__19424;
chunk__17964_19408 = G__19425;
count__17965_19409 = G__19426;
i__17966_19410 = G__19427;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__11641__auto__);
};
var footer = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__11640__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__19428){
var args__11640__auto__ = cljs.core.seq(arglist__19428);
return footer__delegate(args__11640__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17971_19429 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17972_19430 = null;var count__17973_19431 = 0;var i__17974_19432 = 0;while(true){
if((i__17974_19432 < count__17973_19431))
{var arg__11642__auto___19433 = cljs.core._nth.call(null,chunk__17972_19430,i__17974_19432);a__11641__auto__.push(arg__11642__auto___19433);
{
var G__19434 = seq__17971_19429;
var G__19435 = chunk__17972_19430;
var G__19436 = count__17973_19431;
var G__19437 = (i__17974_19432 + 1);
seq__17971_19429 = G__19434;
chunk__17972_19430 = G__19435;
count__17973_19431 = G__19436;
i__17974_19432 = G__19437;
continue;
}
} else
{var temp__4092__auto___19438 = cljs.core.seq.call(null,seq__17971_19429);if(temp__4092__auto___19438)
{var seq__17971_19439__$1 = temp__4092__auto___19438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17971_19439__$1))
{var c__11010__auto___19440 = cljs.core.chunk_first.call(null,seq__17971_19439__$1);{
var G__19441 = cljs.core.chunk_rest.call(null,seq__17971_19439__$1);
var G__19442 = c__11010__auto___19440;
var G__19443 = cljs.core.count.call(null,c__11010__auto___19440);
var G__19444 = 0;
seq__17971_19429 = G__19441;
chunk__17972_19430 = G__19442;
count__17973_19431 = G__19443;
i__17974_19432 = G__19444;
continue;
}
} else
{var arg__11642__auto___19445 = cljs.core.first.call(null,seq__17971_19439__$1);a__11641__auto__.push(arg__11642__auto___19445);
{
var G__19446 = cljs.core.next.call(null,seq__17971_19439__$1);
var G__19447 = null;
var G__19448 = 0;
var G__19449 = 0;
seq__17971_19429 = G__19446;
chunk__17972_19430 = G__19447;
count__17973_19431 = G__19448;
i__17974_19432 = G__19449;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__11641__auto__);
};
var form = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__11640__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__19450){
var args__11640__auto__ = cljs.core.seq(arglist__19450);
return form__delegate(args__11640__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17979_19451 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17980_19452 = null;var count__17981_19453 = 0;var i__17982_19454 = 0;while(true){
if((i__17982_19454 < count__17981_19453))
{var arg__11642__auto___19455 = cljs.core._nth.call(null,chunk__17980_19452,i__17982_19454);a__11641__auto__.push(arg__11642__auto___19455);
{
var G__19456 = seq__17979_19451;
var G__19457 = chunk__17980_19452;
var G__19458 = count__17981_19453;
var G__19459 = (i__17982_19454 + 1);
seq__17979_19451 = G__19456;
chunk__17980_19452 = G__19457;
count__17981_19453 = G__19458;
i__17982_19454 = G__19459;
continue;
}
} else
{var temp__4092__auto___19460 = cljs.core.seq.call(null,seq__17979_19451);if(temp__4092__auto___19460)
{var seq__17979_19461__$1 = temp__4092__auto___19460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17979_19461__$1))
{var c__11010__auto___19462 = cljs.core.chunk_first.call(null,seq__17979_19461__$1);{
var G__19463 = cljs.core.chunk_rest.call(null,seq__17979_19461__$1);
var G__19464 = c__11010__auto___19462;
var G__19465 = cljs.core.count.call(null,c__11010__auto___19462);
var G__19466 = 0;
seq__17979_19451 = G__19463;
chunk__17980_19452 = G__19464;
count__17981_19453 = G__19465;
i__17982_19454 = G__19466;
continue;
}
} else
{var arg__11642__auto___19467 = cljs.core.first.call(null,seq__17979_19461__$1);a__11641__auto__.push(arg__11642__auto___19467);
{
var G__19468 = cljs.core.next.call(null,seq__17979_19461__$1);
var G__19469 = null;
var G__19470 = 0;
var G__19471 = 0;
seq__17979_19451 = G__19468;
chunk__17980_19452 = G__19469;
count__17981_19453 = G__19470;
i__17982_19454 = G__19471;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__11641__auto__);
};
var h1 = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__11640__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__19472){
var args__11640__auto__ = cljs.core.seq(arglist__19472);
return h1__delegate(args__11640__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17987_19473 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17988_19474 = null;var count__17989_19475 = 0;var i__17990_19476 = 0;while(true){
if((i__17990_19476 < count__17989_19475))
{var arg__11642__auto___19477 = cljs.core._nth.call(null,chunk__17988_19474,i__17990_19476);a__11641__auto__.push(arg__11642__auto___19477);
{
var G__19478 = seq__17987_19473;
var G__19479 = chunk__17988_19474;
var G__19480 = count__17989_19475;
var G__19481 = (i__17990_19476 + 1);
seq__17987_19473 = G__19478;
chunk__17988_19474 = G__19479;
count__17989_19475 = G__19480;
i__17990_19476 = G__19481;
continue;
}
} else
{var temp__4092__auto___19482 = cljs.core.seq.call(null,seq__17987_19473);if(temp__4092__auto___19482)
{var seq__17987_19483__$1 = temp__4092__auto___19482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17987_19483__$1))
{var c__11010__auto___19484 = cljs.core.chunk_first.call(null,seq__17987_19483__$1);{
var G__19485 = cljs.core.chunk_rest.call(null,seq__17987_19483__$1);
var G__19486 = c__11010__auto___19484;
var G__19487 = cljs.core.count.call(null,c__11010__auto___19484);
var G__19488 = 0;
seq__17987_19473 = G__19485;
chunk__17988_19474 = G__19486;
count__17989_19475 = G__19487;
i__17990_19476 = G__19488;
continue;
}
} else
{var arg__11642__auto___19489 = cljs.core.first.call(null,seq__17987_19483__$1);a__11641__auto__.push(arg__11642__auto___19489);
{
var G__19490 = cljs.core.next.call(null,seq__17987_19483__$1);
var G__19491 = null;
var G__19492 = 0;
var G__19493 = 0;
seq__17987_19473 = G__19490;
chunk__17988_19474 = G__19491;
count__17989_19475 = G__19492;
i__17990_19476 = G__19493;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__11641__auto__);
};
var h2 = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__11640__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__19494){
var args__11640__auto__ = cljs.core.seq(arglist__19494);
return h2__delegate(args__11640__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17995_19495 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17996_19496 = null;var count__17997_19497 = 0;var i__17998_19498 = 0;while(true){
if((i__17998_19498 < count__17997_19497))
{var arg__11642__auto___19499 = cljs.core._nth.call(null,chunk__17996_19496,i__17998_19498);a__11641__auto__.push(arg__11642__auto___19499);
{
var G__19500 = seq__17995_19495;
var G__19501 = chunk__17996_19496;
var G__19502 = count__17997_19497;
var G__19503 = (i__17998_19498 + 1);
seq__17995_19495 = G__19500;
chunk__17996_19496 = G__19501;
count__17997_19497 = G__19502;
i__17998_19498 = G__19503;
continue;
}
} else
{var temp__4092__auto___19504 = cljs.core.seq.call(null,seq__17995_19495);if(temp__4092__auto___19504)
{var seq__17995_19505__$1 = temp__4092__auto___19504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17995_19505__$1))
{var c__11010__auto___19506 = cljs.core.chunk_first.call(null,seq__17995_19505__$1);{
var G__19507 = cljs.core.chunk_rest.call(null,seq__17995_19505__$1);
var G__19508 = c__11010__auto___19506;
var G__19509 = cljs.core.count.call(null,c__11010__auto___19506);
var G__19510 = 0;
seq__17995_19495 = G__19507;
chunk__17996_19496 = G__19508;
count__17997_19497 = G__19509;
i__17998_19498 = G__19510;
continue;
}
} else
{var arg__11642__auto___19511 = cljs.core.first.call(null,seq__17995_19505__$1);a__11641__auto__.push(arg__11642__auto___19511);
{
var G__19512 = cljs.core.next.call(null,seq__17995_19505__$1);
var G__19513 = null;
var G__19514 = 0;
var G__19515 = 0;
seq__17995_19495 = G__19512;
chunk__17996_19496 = G__19513;
count__17997_19497 = G__19514;
i__17998_19498 = G__19515;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__11641__auto__);
};
var h3 = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__11640__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__19516){
var args__11640__auto__ = cljs.core.seq(arglist__19516);
return h3__delegate(args__11640__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18003_19517 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18004_19518 = null;var count__18005_19519 = 0;var i__18006_19520 = 0;while(true){
if((i__18006_19520 < count__18005_19519))
{var arg__11642__auto___19521 = cljs.core._nth.call(null,chunk__18004_19518,i__18006_19520);a__11641__auto__.push(arg__11642__auto___19521);
{
var G__19522 = seq__18003_19517;
var G__19523 = chunk__18004_19518;
var G__19524 = count__18005_19519;
var G__19525 = (i__18006_19520 + 1);
seq__18003_19517 = G__19522;
chunk__18004_19518 = G__19523;
count__18005_19519 = G__19524;
i__18006_19520 = G__19525;
continue;
}
} else
{var temp__4092__auto___19526 = cljs.core.seq.call(null,seq__18003_19517);if(temp__4092__auto___19526)
{var seq__18003_19527__$1 = temp__4092__auto___19526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18003_19527__$1))
{var c__11010__auto___19528 = cljs.core.chunk_first.call(null,seq__18003_19527__$1);{
var G__19529 = cljs.core.chunk_rest.call(null,seq__18003_19527__$1);
var G__19530 = c__11010__auto___19528;
var G__19531 = cljs.core.count.call(null,c__11010__auto___19528);
var G__19532 = 0;
seq__18003_19517 = G__19529;
chunk__18004_19518 = G__19530;
count__18005_19519 = G__19531;
i__18006_19520 = G__19532;
continue;
}
} else
{var arg__11642__auto___19533 = cljs.core.first.call(null,seq__18003_19527__$1);a__11641__auto__.push(arg__11642__auto___19533);
{
var G__19534 = cljs.core.next.call(null,seq__18003_19527__$1);
var G__19535 = null;
var G__19536 = 0;
var G__19537 = 0;
seq__18003_19517 = G__19534;
chunk__18004_19518 = G__19535;
count__18005_19519 = G__19536;
i__18006_19520 = G__19537;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__11641__auto__);
};
var h4 = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__11640__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__19538){
var args__11640__auto__ = cljs.core.seq(arglist__19538);
return h4__delegate(args__11640__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18011_19539 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18012_19540 = null;var count__18013_19541 = 0;var i__18014_19542 = 0;while(true){
if((i__18014_19542 < count__18013_19541))
{var arg__11642__auto___19543 = cljs.core._nth.call(null,chunk__18012_19540,i__18014_19542);a__11641__auto__.push(arg__11642__auto___19543);
{
var G__19544 = seq__18011_19539;
var G__19545 = chunk__18012_19540;
var G__19546 = count__18013_19541;
var G__19547 = (i__18014_19542 + 1);
seq__18011_19539 = G__19544;
chunk__18012_19540 = G__19545;
count__18013_19541 = G__19546;
i__18014_19542 = G__19547;
continue;
}
} else
{var temp__4092__auto___19548 = cljs.core.seq.call(null,seq__18011_19539);if(temp__4092__auto___19548)
{var seq__18011_19549__$1 = temp__4092__auto___19548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18011_19549__$1))
{var c__11010__auto___19550 = cljs.core.chunk_first.call(null,seq__18011_19549__$1);{
var G__19551 = cljs.core.chunk_rest.call(null,seq__18011_19549__$1);
var G__19552 = c__11010__auto___19550;
var G__19553 = cljs.core.count.call(null,c__11010__auto___19550);
var G__19554 = 0;
seq__18011_19539 = G__19551;
chunk__18012_19540 = G__19552;
count__18013_19541 = G__19553;
i__18014_19542 = G__19554;
continue;
}
} else
{var arg__11642__auto___19555 = cljs.core.first.call(null,seq__18011_19549__$1);a__11641__auto__.push(arg__11642__auto___19555);
{
var G__19556 = cljs.core.next.call(null,seq__18011_19549__$1);
var G__19557 = null;
var G__19558 = 0;
var G__19559 = 0;
seq__18011_19539 = G__19556;
chunk__18012_19540 = G__19557;
count__18013_19541 = G__19558;
i__18014_19542 = G__19559;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__11641__auto__);
};
var h5 = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__11640__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__19560){
var args__11640__auto__ = cljs.core.seq(arglist__19560);
return h5__delegate(args__11640__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18019_19561 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18020_19562 = null;var count__18021_19563 = 0;var i__18022_19564 = 0;while(true){
if((i__18022_19564 < count__18021_19563))
{var arg__11642__auto___19565 = cljs.core._nth.call(null,chunk__18020_19562,i__18022_19564);a__11641__auto__.push(arg__11642__auto___19565);
{
var G__19566 = seq__18019_19561;
var G__19567 = chunk__18020_19562;
var G__19568 = count__18021_19563;
var G__19569 = (i__18022_19564 + 1);
seq__18019_19561 = G__19566;
chunk__18020_19562 = G__19567;
count__18021_19563 = G__19568;
i__18022_19564 = G__19569;
continue;
}
} else
{var temp__4092__auto___19570 = cljs.core.seq.call(null,seq__18019_19561);if(temp__4092__auto___19570)
{var seq__18019_19571__$1 = temp__4092__auto___19570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18019_19571__$1))
{var c__11010__auto___19572 = cljs.core.chunk_first.call(null,seq__18019_19571__$1);{
var G__19573 = cljs.core.chunk_rest.call(null,seq__18019_19571__$1);
var G__19574 = c__11010__auto___19572;
var G__19575 = cljs.core.count.call(null,c__11010__auto___19572);
var G__19576 = 0;
seq__18019_19561 = G__19573;
chunk__18020_19562 = G__19574;
count__18021_19563 = G__19575;
i__18022_19564 = G__19576;
continue;
}
} else
{var arg__11642__auto___19577 = cljs.core.first.call(null,seq__18019_19571__$1);a__11641__auto__.push(arg__11642__auto___19577);
{
var G__19578 = cljs.core.next.call(null,seq__18019_19571__$1);
var G__19579 = null;
var G__19580 = 0;
var G__19581 = 0;
seq__18019_19561 = G__19578;
chunk__18020_19562 = G__19579;
count__18021_19563 = G__19580;
i__18022_19564 = G__19581;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__11641__auto__);
};
var h6 = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__11640__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__19582){
var args__11640__auto__ = cljs.core.seq(arglist__19582);
return h6__delegate(args__11640__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18027_19583 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18028_19584 = null;var count__18029_19585 = 0;var i__18030_19586 = 0;while(true){
if((i__18030_19586 < count__18029_19585))
{var arg__11642__auto___19587 = cljs.core._nth.call(null,chunk__18028_19584,i__18030_19586);a__11641__auto__.push(arg__11642__auto___19587);
{
var G__19588 = seq__18027_19583;
var G__19589 = chunk__18028_19584;
var G__19590 = count__18029_19585;
var G__19591 = (i__18030_19586 + 1);
seq__18027_19583 = G__19588;
chunk__18028_19584 = G__19589;
count__18029_19585 = G__19590;
i__18030_19586 = G__19591;
continue;
}
} else
{var temp__4092__auto___19592 = cljs.core.seq.call(null,seq__18027_19583);if(temp__4092__auto___19592)
{var seq__18027_19593__$1 = temp__4092__auto___19592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18027_19593__$1))
{var c__11010__auto___19594 = cljs.core.chunk_first.call(null,seq__18027_19593__$1);{
var G__19595 = cljs.core.chunk_rest.call(null,seq__18027_19593__$1);
var G__19596 = c__11010__auto___19594;
var G__19597 = cljs.core.count.call(null,c__11010__auto___19594);
var G__19598 = 0;
seq__18027_19583 = G__19595;
chunk__18028_19584 = G__19596;
count__18029_19585 = G__19597;
i__18030_19586 = G__19598;
continue;
}
} else
{var arg__11642__auto___19599 = cljs.core.first.call(null,seq__18027_19593__$1);a__11641__auto__.push(arg__11642__auto___19599);
{
var G__19600 = cljs.core.next.call(null,seq__18027_19593__$1);
var G__19601 = null;
var G__19602 = 0;
var G__19603 = 0;
seq__18027_19583 = G__19600;
chunk__18028_19584 = G__19601;
count__18029_19585 = G__19602;
i__18030_19586 = G__19603;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__11641__auto__);
};
var head = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__11640__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__19604){
var args__11640__auto__ = cljs.core.seq(arglist__19604);
return head__delegate(args__11640__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18035_19605 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18036_19606 = null;var count__18037_19607 = 0;var i__18038_19608 = 0;while(true){
if((i__18038_19608 < count__18037_19607))
{var arg__11642__auto___19609 = cljs.core._nth.call(null,chunk__18036_19606,i__18038_19608);a__11641__auto__.push(arg__11642__auto___19609);
{
var G__19610 = seq__18035_19605;
var G__19611 = chunk__18036_19606;
var G__19612 = count__18037_19607;
var G__19613 = (i__18038_19608 + 1);
seq__18035_19605 = G__19610;
chunk__18036_19606 = G__19611;
count__18037_19607 = G__19612;
i__18038_19608 = G__19613;
continue;
}
} else
{var temp__4092__auto___19614 = cljs.core.seq.call(null,seq__18035_19605);if(temp__4092__auto___19614)
{var seq__18035_19615__$1 = temp__4092__auto___19614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18035_19615__$1))
{var c__11010__auto___19616 = cljs.core.chunk_first.call(null,seq__18035_19615__$1);{
var G__19617 = cljs.core.chunk_rest.call(null,seq__18035_19615__$1);
var G__19618 = c__11010__auto___19616;
var G__19619 = cljs.core.count.call(null,c__11010__auto___19616);
var G__19620 = 0;
seq__18035_19605 = G__19617;
chunk__18036_19606 = G__19618;
count__18037_19607 = G__19619;
i__18038_19608 = G__19620;
continue;
}
} else
{var arg__11642__auto___19621 = cljs.core.first.call(null,seq__18035_19615__$1);a__11641__auto__.push(arg__11642__auto___19621);
{
var G__19622 = cljs.core.next.call(null,seq__18035_19615__$1);
var G__19623 = null;
var G__19624 = 0;
var G__19625 = 0;
seq__18035_19605 = G__19622;
chunk__18036_19606 = G__19623;
count__18037_19607 = G__19624;
i__18038_19608 = G__19625;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__11641__auto__);
};
var header = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__11640__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__19626){
var args__11640__auto__ = cljs.core.seq(arglist__19626);
return header__delegate(args__11640__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18043_19627 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18044_19628 = null;var count__18045_19629 = 0;var i__18046_19630 = 0;while(true){
if((i__18046_19630 < count__18045_19629))
{var arg__11642__auto___19631 = cljs.core._nth.call(null,chunk__18044_19628,i__18046_19630);a__11641__auto__.push(arg__11642__auto___19631);
{
var G__19632 = seq__18043_19627;
var G__19633 = chunk__18044_19628;
var G__19634 = count__18045_19629;
var G__19635 = (i__18046_19630 + 1);
seq__18043_19627 = G__19632;
chunk__18044_19628 = G__19633;
count__18045_19629 = G__19634;
i__18046_19630 = G__19635;
continue;
}
} else
{var temp__4092__auto___19636 = cljs.core.seq.call(null,seq__18043_19627);if(temp__4092__auto___19636)
{var seq__18043_19637__$1 = temp__4092__auto___19636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18043_19637__$1))
{var c__11010__auto___19638 = cljs.core.chunk_first.call(null,seq__18043_19637__$1);{
var G__19639 = cljs.core.chunk_rest.call(null,seq__18043_19637__$1);
var G__19640 = c__11010__auto___19638;
var G__19641 = cljs.core.count.call(null,c__11010__auto___19638);
var G__19642 = 0;
seq__18043_19627 = G__19639;
chunk__18044_19628 = G__19640;
count__18045_19629 = G__19641;
i__18046_19630 = G__19642;
continue;
}
} else
{var arg__11642__auto___19643 = cljs.core.first.call(null,seq__18043_19637__$1);a__11641__auto__.push(arg__11642__auto___19643);
{
var G__19644 = cljs.core.next.call(null,seq__18043_19637__$1);
var G__19645 = null;
var G__19646 = 0;
var G__19647 = 0;
seq__18043_19627 = G__19644;
chunk__18044_19628 = G__19645;
count__18045_19629 = G__19646;
i__18046_19630 = G__19647;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__11641__auto__);
};
var hr = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__11640__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__19648){
var args__11640__auto__ = cljs.core.seq(arglist__19648);
return hr__delegate(args__11640__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18051_19649 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18052_19650 = null;var count__18053_19651 = 0;var i__18054_19652 = 0;while(true){
if((i__18054_19652 < count__18053_19651))
{var arg__11642__auto___19653 = cljs.core._nth.call(null,chunk__18052_19650,i__18054_19652);a__11641__auto__.push(arg__11642__auto___19653);
{
var G__19654 = seq__18051_19649;
var G__19655 = chunk__18052_19650;
var G__19656 = count__18053_19651;
var G__19657 = (i__18054_19652 + 1);
seq__18051_19649 = G__19654;
chunk__18052_19650 = G__19655;
count__18053_19651 = G__19656;
i__18054_19652 = G__19657;
continue;
}
} else
{var temp__4092__auto___19658 = cljs.core.seq.call(null,seq__18051_19649);if(temp__4092__auto___19658)
{var seq__18051_19659__$1 = temp__4092__auto___19658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18051_19659__$1))
{var c__11010__auto___19660 = cljs.core.chunk_first.call(null,seq__18051_19659__$1);{
var G__19661 = cljs.core.chunk_rest.call(null,seq__18051_19659__$1);
var G__19662 = c__11010__auto___19660;
var G__19663 = cljs.core.count.call(null,c__11010__auto___19660);
var G__19664 = 0;
seq__18051_19649 = G__19661;
chunk__18052_19650 = G__19662;
count__18053_19651 = G__19663;
i__18054_19652 = G__19664;
continue;
}
} else
{var arg__11642__auto___19665 = cljs.core.first.call(null,seq__18051_19659__$1);a__11641__auto__.push(arg__11642__auto___19665);
{
var G__19666 = cljs.core.next.call(null,seq__18051_19659__$1);
var G__19667 = null;
var G__19668 = 0;
var G__19669 = 0;
seq__18051_19649 = G__19666;
chunk__18052_19650 = G__19667;
count__18053_19651 = G__19668;
i__18054_19652 = G__19669;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__11641__auto__);
};
var html = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__11640__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__19670){
var args__11640__auto__ = cljs.core.seq(arglist__19670);
return html__delegate(args__11640__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18059_19671 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18060_19672 = null;var count__18061_19673 = 0;var i__18062_19674 = 0;while(true){
if((i__18062_19674 < count__18061_19673))
{var arg__11642__auto___19675 = cljs.core._nth.call(null,chunk__18060_19672,i__18062_19674);a__11641__auto__.push(arg__11642__auto___19675);
{
var G__19676 = seq__18059_19671;
var G__19677 = chunk__18060_19672;
var G__19678 = count__18061_19673;
var G__19679 = (i__18062_19674 + 1);
seq__18059_19671 = G__19676;
chunk__18060_19672 = G__19677;
count__18061_19673 = G__19678;
i__18062_19674 = G__19679;
continue;
}
} else
{var temp__4092__auto___19680 = cljs.core.seq.call(null,seq__18059_19671);if(temp__4092__auto___19680)
{var seq__18059_19681__$1 = temp__4092__auto___19680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18059_19681__$1))
{var c__11010__auto___19682 = cljs.core.chunk_first.call(null,seq__18059_19681__$1);{
var G__19683 = cljs.core.chunk_rest.call(null,seq__18059_19681__$1);
var G__19684 = c__11010__auto___19682;
var G__19685 = cljs.core.count.call(null,c__11010__auto___19682);
var G__19686 = 0;
seq__18059_19671 = G__19683;
chunk__18060_19672 = G__19684;
count__18061_19673 = G__19685;
i__18062_19674 = G__19686;
continue;
}
} else
{var arg__11642__auto___19687 = cljs.core.first.call(null,seq__18059_19681__$1);a__11641__auto__.push(arg__11642__auto___19687);
{
var G__19688 = cljs.core.next.call(null,seq__18059_19681__$1);
var G__19689 = null;
var G__19690 = 0;
var G__19691 = 0;
seq__18059_19671 = G__19688;
chunk__18060_19672 = G__19689;
count__18061_19673 = G__19690;
i__18062_19674 = G__19691;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__11641__auto__);
};
var i = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__11640__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__19692){
var args__11640__auto__ = cljs.core.seq(arglist__19692);
return i__delegate(args__11640__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18067_19693 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18068_19694 = null;var count__18069_19695 = 0;var i__18070_19696 = 0;while(true){
if((i__18070_19696 < count__18069_19695))
{var arg__11642__auto___19697 = cljs.core._nth.call(null,chunk__18068_19694,i__18070_19696);a__11641__auto__.push(arg__11642__auto___19697);
{
var G__19698 = seq__18067_19693;
var G__19699 = chunk__18068_19694;
var G__19700 = count__18069_19695;
var G__19701 = (i__18070_19696 + 1);
seq__18067_19693 = G__19698;
chunk__18068_19694 = G__19699;
count__18069_19695 = G__19700;
i__18070_19696 = G__19701;
continue;
}
} else
{var temp__4092__auto___19702 = cljs.core.seq.call(null,seq__18067_19693);if(temp__4092__auto___19702)
{var seq__18067_19703__$1 = temp__4092__auto___19702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18067_19703__$1))
{var c__11010__auto___19704 = cljs.core.chunk_first.call(null,seq__18067_19703__$1);{
var G__19705 = cljs.core.chunk_rest.call(null,seq__18067_19703__$1);
var G__19706 = c__11010__auto___19704;
var G__19707 = cljs.core.count.call(null,c__11010__auto___19704);
var G__19708 = 0;
seq__18067_19693 = G__19705;
chunk__18068_19694 = G__19706;
count__18069_19695 = G__19707;
i__18070_19696 = G__19708;
continue;
}
} else
{var arg__11642__auto___19709 = cljs.core.first.call(null,seq__18067_19703__$1);a__11641__auto__.push(arg__11642__auto___19709);
{
var G__19710 = cljs.core.next.call(null,seq__18067_19703__$1);
var G__19711 = null;
var G__19712 = 0;
var G__19713 = 0;
seq__18067_19693 = G__19710;
chunk__18068_19694 = G__19711;
count__18069_19695 = G__19712;
i__18070_19696 = G__19713;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__11641__auto__);
};
var iframe = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__11640__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__19714){
var args__11640__auto__ = cljs.core.seq(arglist__19714);
return iframe__delegate(args__11640__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18075_19715 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18076_19716 = null;var count__18077_19717 = 0;var i__18078_19718 = 0;while(true){
if((i__18078_19718 < count__18077_19717))
{var arg__11642__auto___19719 = cljs.core._nth.call(null,chunk__18076_19716,i__18078_19718);a__11641__auto__.push(arg__11642__auto___19719);
{
var G__19720 = seq__18075_19715;
var G__19721 = chunk__18076_19716;
var G__19722 = count__18077_19717;
var G__19723 = (i__18078_19718 + 1);
seq__18075_19715 = G__19720;
chunk__18076_19716 = G__19721;
count__18077_19717 = G__19722;
i__18078_19718 = G__19723;
continue;
}
} else
{var temp__4092__auto___19724 = cljs.core.seq.call(null,seq__18075_19715);if(temp__4092__auto___19724)
{var seq__18075_19725__$1 = temp__4092__auto___19724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18075_19725__$1))
{var c__11010__auto___19726 = cljs.core.chunk_first.call(null,seq__18075_19725__$1);{
var G__19727 = cljs.core.chunk_rest.call(null,seq__18075_19725__$1);
var G__19728 = c__11010__auto___19726;
var G__19729 = cljs.core.count.call(null,c__11010__auto___19726);
var G__19730 = 0;
seq__18075_19715 = G__19727;
chunk__18076_19716 = G__19728;
count__18077_19717 = G__19729;
i__18078_19718 = G__19730;
continue;
}
} else
{var arg__11642__auto___19731 = cljs.core.first.call(null,seq__18075_19725__$1);a__11641__auto__.push(arg__11642__auto___19731);
{
var G__19732 = cljs.core.next.call(null,seq__18075_19725__$1);
var G__19733 = null;
var G__19734 = 0;
var G__19735 = 0;
seq__18075_19715 = G__19732;
chunk__18076_19716 = G__19733;
count__18077_19717 = G__19734;
i__18078_19718 = G__19735;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__11641__auto__);
};
var img = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__11640__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__19736){
var args__11640__auto__ = cljs.core.seq(arglist__19736);
return img__delegate(args__11640__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18083_19737 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18084_19738 = null;var count__18085_19739 = 0;var i__18086_19740 = 0;while(true){
if((i__18086_19740 < count__18085_19739))
{var arg__11642__auto___19741 = cljs.core._nth.call(null,chunk__18084_19738,i__18086_19740);a__11641__auto__.push(arg__11642__auto___19741);
{
var G__19742 = seq__18083_19737;
var G__19743 = chunk__18084_19738;
var G__19744 = count__18085_19739;
var G__19745 = (i__18086_19740 + 1);
seq__18083_19737 = G__19742;
chunk__18084_19738 = G__19743;
count__18085_19739 = G__19744;
i__18086_19740 = G__19745;
continue;
}
} else
{var temp__4092__auto___19746 = cljs.core.seq.call(null,seq__18083_19737);if(temp__4092__auto___19746)
{var seq__18083_19747__$1 = temp__4092__auto___19746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18083_19747__$1))
{var c__11010__auto___19748 = cljs.core.chunk_first.call(null,seq__18083_19747__$1);{
var G__19749 = cljs.core.chunk_rest.call(null,seq__18083_19747__$1);
var G__19750 = c__11010__auto___19748;
var G__19751 = cljs.core.count.call(null,c__11010__auto___19748);
var G__19752 = 0;
seq__18083_19737 = G__19749;
chunk__18084_19738 = G__19750;
count__18085_19739 = G__19751;
i__18086_19740 = G__19752;
continue;
}
} else
{var arg__11642__auto___19753 = cljs.core.first.call(null,seq__18083_19747__$1);a__11641__auto__.push(arg__11642__auto___19753);
{
var G__19754 = cljs.core.next.call(null,seq__18083_19747__$1);
var G__19755 = null;
var G__19756 = 0;
var G__19757 = 0;
seq__18083_19737 = G__19754;
chunk__18084_19738 = G__19755;
count__18085_19739 = G__19756;
i__18086_19740 = G__19757;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__11641__auto__);
};
var input = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__11640__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__19758){
var args__11640__auto__ = cljs.core.seq(arglist__19758);
return input__delegate(args__11640__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18091_19759 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18092_19760 = null;var count__18093_19761 = 0;var i__18094_19762 = 0;while(true){
if((i__18094_19762 < count__18093_19761))
{var arg__11642__auto___19763 = cljs.core._nth.call(null,chunk__18092_19760,i__18094_19762);a__11641__auto__.push(arg__11642__auto___19763);
{
var G__19764 = seq__18091_19759;
var G__19765 = chunk__18092_19760;
var G__19766 = count__18093_19761;
var G__19767 = (i__18094_19762 + 1);
seq__18091_19759 = G__19764;
chunk__18092_19760 = G__19765;
count__18093_19761 = G__19766;
i__18094_19762 = G__19767;
continue;
}
} else
{var temp__4092__auto___19768 = cljs.core.seq.call(null,seq__18091_19759);if(temp__4092__auto___19768)
{var seq__18091_19769__$1 = temp__4092__auto___19768;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18091_19769__$1))
{var c__11010__auto___19770 = cljs.core.chunk_first.call(null,seq__18091_19769__$1);{
var G__19771 = cljs.core.chunk_rest.call(null,seq__18091_19769__$1);
var G__19772 = c__11010__auto___19770;
var G__19773 = cljs.core.count.call(null,c__11010__auto___19770);
var G__19774 = 0;
seq__18091_19759 = G__19771;
chunk__18092_19760 = G__19772;
count__18093_19761 = G__19773;
i__18094_19762 = G__19774;
continue;
}
} else
{var arg__11642__auto___19775 = cljs.core.first.call(null,seq__18091_19769__$1);a__11641__auto__.push(arg__11642__auto___19775);
{
var G__19776 = cljs.core.next.call(null,seq__18091_19769__$1);
var G__19777 = null;
var G__19778 = 0;
var G__19779 = 0;
seq__18091_19759 = G__19776;
chunk__18092_19760 = G__19777;
count__18093_19761 = G__19778;
i__18094_19762 = G__19779;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__11641__auto__);
};
var ins = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__11640__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__19780){
var args__11640__auto__ = cljs.core.seq(arglist__19780);
return ins__delegate(args__11640__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18099_19781 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18100_19782 = null;var count__18101_19783 = 0;var i__18102_19784 = 0;while(true){
if((i__18102_19784 < count__18101_19783))
{var arg__11642__auto___19785 = cljs.core._nth.call(null,chunk__18100_19782,i__18102_19784);a__11641__auto__.push(arg__11642__auto___19785);
{
var G__19786 = seq__18099_19781;
var G__19787 = chunk__18100_19782;
var G__19788 = count__18101_19783;
var G__19789 = (i__18102_19784 + 1);
seq__18099_19781 = G__19786;
chunk__18100_19782 = G__19787;
count__18101_19783 = G__19788;
i__18102_19784 = G__19789;
continue;
}
} else
{var temp__4092__auto___19790 = cljs.core.seq.call(null,seq__18099_19781);if(temp__4092__auto___19790)
{var seq__18099_19791__$1 = temp__4092__auto___19790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18099_19791__$1))
{var c__11010__auto___19792 = cljs.core.chunk_first.call(null,seq__18099_19791__$1);{
var G__19793 = cljs.core.chunk_rest.call(null,seq__18099_19791__$1);
var G__19794 = c__11010__auto___19792;
var G__19795 = cljs.core.count.call(null,c__11010__auto___19792);
var G__19796 = 0;
seq__18099_19781 = G__19793;
chunk__18100_19782 = G__19794;
count__18101_19783 = G__19795;
i__18102_19784 = G__19796;
continue;
}
} else
{var arg__11642__auto___19797 = cljs.core.first.call(null,seq__18099_19791__$1);a__11641__auto__.push(arg__11642__auto___19797);
{
var G__19798 = cljs.core.next.call(null,seq__18099_19791__$1);
var G__19799 = null;
var G__19800 = 0;
var G__19801 = 0;
seq__18099_19781 = G__19798;
chunk__18100_19782 = G__19799;
count__18101_19783 = G__19800;
i__18102_19784 = G__19801;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__11641__auto__);
};
var kbd = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__11640__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__19802){
var args__11640__auto__ = cljs.core.seq(arglist__19802);
return kbd__delegate(args__11640__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18107_19803 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18108_19804 = null;var count__18109_19805 = 0;var i__18110_19806 = 0;while(true){
if((i__18110_19806 < count__18109_19805))
{var arg__11642__auto___19807 = cljs.core._nth.call(null,chunk__18108_19804,i__18110_19806);a__11641__auto__.push(arg__11642__auto___19807);
{
var G__19808 = seq__18107_19803;
var G__19809 = chunk__18108_19804;
var G__19810 = count__18109_19805;
var G__19811 = (i__18110_19806 + 1);
seq__18107_19803 = G__19808;
chunk__18108_19804 = G__19809;
count__18109_19805 = G__19810;
i__18110_19806 = G__19811;
continue;
}
} else
{var temp__4092__auto___19812 = cljs.core.seq.call(null,seq__18107_19803);if(temp__4092__auto___19812)
{var seq__18107_19813__$1 = temp__4092__auto___19812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18107_19813__$1))
{var c__11010__auto___19814 = cljs.core.chunk_first.call(null,seq__18107_19813__$1);{
var G__19815 = cljs.core.chunk_rest.call(null,seq__18107_19813__$1);
var G__19816 = c__11010__auto___19814;
var G__19817 = cljs.core.count.call(null,c__11010__auto___19814);
var G__19818 = 0;
seq__18107_19803 = G__19815;
chunk__18108_19804 = G__19816;
count__18109_19805 = G__19817;
i__18110_19806 = G__19818;
continue;
}
} else
{var arg__11642__auto___19819 = cljs.core.first.call(null,seq__18107_19813__$1);a__11641__auto__.push(arg__11642__auto___19819);
{
var G__19820 = cljs.core.next.call(null,seq__18107_19813__$1);
var G__19821 = null;
var G__19822 = 0;
var G__19823 = 0;
seq__18107_19803 = G__19820;
chunk__18108_19804 = G__19821;
count__18109_19805 = G__19822;
i__18110_19806 = G__19823;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__11641__auto__);
};
var keygen = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__11640__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__19824){
var args__11640__auto__ = cljs.core.seq(arglist__19824);
return keygen__delegate(args__11640__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18115_19825 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18116_19826 = null;var count__18117_19827 = 0;var i__18118_19828 = 0;while(true){
if((i__18118_19828 < count__18117_19827))
{var arg__11642__auto___19829 = cljs.core._nth.call(null,chunk__18116_19826,i__18118_19828);a__11641__auto__.push(arg__11642__auto___19829);
{
var G__19830 = seq__18115_19825;
var G__19831 = chunk__18116_19826;
var G__19832 = count__18117_19827;
var G__19833 = (i__18118_19828 + 1);
seq__18115_19825 = G__19830;
chunk__18116_19826 = G__19831;
count__18117_19827 = G__19832;
i__18118_19828 = G__19833;
continue;
}
} else
{var temp__4092__auto___19834 = cljs.core.seq.call(null,seq__18115_19825);if(temp__4092__auto___19834)
{var seq__18115_19835__$1 = temp__4092__auto___19834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18115_19835__$1))
{var c__11010__auto___19836 = cljs.core.chunk_first.call(null,seq__18115_19835__$1);{
var G__19837 = cljs.core.chunk_rest.call(null,seq__18115_19835__$1);
var G__19838 = c__11010__auto___19836;
var G__19839 = cljs.core.count.call(null,c__11010__auto___19836);
var G__19840 = 0;
seq__18115_19825 = G__19837;
chunk__18116_19826 = G__19838;
count__18117_19827 = G__19839;
i__18118_19828 = G__19840;
continue;
}
} else
{var arg__11642__auto___19841 = cljs.core.first.call(null,seq__18115_19835__$1);a__11641__auto__.push(arg__11642__auto___19841);
{
var G__19842 = cljs.core.next.call(null,seq__18115_19835__$1);
var G__19843 = null;
var G__19844 = 0;
var G__19845 = 0;
seq__18115_19825 = G__19842;
chunk__18116_19826 = G__19843;
count__18117_19827 = G__19844;
i__18118_19828 = G__19845;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__11641__auto__);
};
var label = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__11640__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__19846){
var args__11640__auto__ = cljs.core.seq(arglist__19846);
return label__delegate(args__11640__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18123_19847 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18124_19848 = null;var count__18125_19849 = 0;var i__18126_19850 = 0;while(true){
if((i__18126_19850 < count__18125_19849))
{var arg__11642__auto___19851 = cljs.core._nth.call(null,chunk__18124_19848,i__18126_19850);a__11641__auto__.push(arg__11642__auto___19851);
{
var G__19852 = seq__18123_19847;
var G__19853 = chunk__18124_19848;
var G__19854 = count__18125_19849;
var G__19855 = (i__18126_19850 + 1);
seq__18123_19847 = G__19852;
chunk__18124_19848 = G__19853;
count__18125_19849 = G__19854;
i__18126_19850 = G__19855;
continue;
}
} else
{var temp__4092__auto___19856 = cljs.core.seq.call(null,seq__18123_19847);if(temp__4092__auto___19856)
{var seq__18123_19857__$1 = temp__4092__auto___19856;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18123_19857__$1))
{var c__11010__auto___19858 = cljs.core.chunk_first.call(null,seq__18123_19857__$1);{
var G__19859 = cljs.core.chunk_rest.call(null,seq__18123_19857__$1);
var G__19860 = c__11010__auto___19858;
var G__19861 = cljs.core.count.call(null,c__11010__auto___19858);
var G__19862 = 0;
seq__18123_19847 = G__19859;
chunk__18124_19848 = G__19860;
count__18125_19849 = G__19861;
i__18126_19850 = G__19862;
continue;
}
} else
{var arg__11642__auto___19863 = cljs.core.first.call(null,seq__18123_19857__$1);a__11641__auto__.push(arg__11642__auto___19863);
{
var G__19864 = cljs.core.next.call(null,seq__18123_19857__$1);
var G__19865 = null;
var G__19866 = 0;
var G__19867 = 0;
seq__18123_19847 = G__19864;
chunk__18124_19848 = G__19865;
count__18125_19849 = G__19866;
i__18126_19850 = G__19867;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__11641__auto__);
};
var legend = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__11640__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__19868){
var args__11640__auto__ = cljs.core.seq(arglist__19868);
return legend__delegate(args__11640__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18131_19869 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18132_19870 = null;var count__18133_19871 = 0;var i__18134_19872 = 0;while(true){
if((i__18134_19872 < count__18133_19871))
{var arg__11642__auto___19873 = cljs.core._nth.call(null,chunk__18132_19870,i__18134_19872);a__11641__auto__.push(arg__11642__auto___19873);
{
var G__19874 = seq__18131_19869;
var G__19875 = chunk__18132_19870;
var G__19876 = count__18133_19871;
var G__19877 = (i__18134_19872 + 1);
seq__18131_19869 = G__19874;
chunk__18132_19870 = G__19875;
count__18133_19871 = G__19876;
i__18134_19872 = G__19877;
continue;
}
} else
{var temp__4092__auto___19878 = cljs.core.seq.call(null,seq__18131_19869);if(temp__4092__auto___19878)
{var seq__18131_19879__$1 = temp__4092__auto___19878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18131_19879__$1))
{var c__11010__auto___19880 = cljs.core.chunk_first.call(null,seq__18131_19879__$1);{
var G__19881 = cljs.core.chunk_rest.call(null,seq__18131_19879__$1);
var G__19882 = c__11010__auto___19880;
var G__19883 = cljs.core.count.call(null,c__11010__auto___19880);
var G__19884 = 0;
seq__18131_19869 = G__19881;
chunk__18132_19870 = G__19882;
count__18133_19871 = G__19883;
i__18134_19872 = G__19884;
continue;
}
} else
{var arg__11642__auto___19885 = cljs.core.first.call(null,seq__18131_19879__$1);a__11641__auto__.push(arg__11642__auto___19885);
{
var G__19886 = cljs.core.next.call(null,seq__18131_19879__$1);
var G__19887 = null;
var G__19888 = 0;
var G__19889 = 0;
seq__18131_19869 = G__19886;
chunk__18132_19870 = G__19887;
count__18133_19871 = G__19888;
i__18134_19872 = G__19889;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__11641__auto__);
};
var li = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__11640__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__19890){
var args__11640__auto__ = cljs.core.seq(arglist__19890);
return li__delegate(args__11640__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18139_19891 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18140_19892 = null;var count__18141_19893 = 0;var i__18142_19894 = 0;while(true){
if((i__18142_19894 < count__18141_19893))
{var arg__11642__auto___19895 = cljs.core._nth.call(null,chunk__18140_19892,i__18142_19894);a__11641__auto__.push(arg__11642__auto___19895);
{
var G__19896 = seq__18139_19891;
var G__19897 = chunk__18140_19892;
var G__19898 = count__18141_19893;
var G__19899 = (i__18142_19894 + 1);
seq__18139_19891 = G__19896;
chunk__18140_19892 = G__19897;
count__18141_19893 = G__19898;
i__18142_19894 = G__19899;
continue;
}
} else
{var temp__4092__auto___19900 = cljs.core.seq.call(null,seq__18139_19891);if(temp__4092__auto___19900)
{var seq__18139_19901__$1 = temp__4092__auto___19900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18139_19901__$1))
{var c__11010__auto___19902 = cljs.core.chunk_first.call(null,seq__18139_19901__$1);{
var G__19903 = cljs.core.chunk_rest.call(null,seq__18139_19901__$1);
var G__19904 = c__11010__auto___19902;
var G__19905 = cljs.core.count.call(null,c__11010__auto___19902);
var G__19906 = 0;
seq__18139_19891 = G__19903;
chunk__18140_19892 = G__19904;
count__18141_19893 = G__19905;
i__18142_19894 = G__19906;
continue;
}
} else
{var arg__11642__auto___19907 = cljs.core.first.call(null,seq__18139_19901__$1);a__11641__auto__.push(arg__11642__auto___19907);
{
var G__19908 = cljs.core.next.call(null,seq__18139_19901__$1);
var G__19909 = null;
var G__19910 = 0;
var G__19911 = 0;
seq__18139_19891 = G__19908;
chunk__18140_19892 = G__19909;
count__18141_19893 = G__19910;
i__18142_19894 = G__19911;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__11641__auto__);
};
var link = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__11640__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__19912){
var args__11640__auto__ = cljs.core.seq(arglist__19912);
return link__delegate(args__11640__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18147_19913 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18148_19914 = null;var count__18149_19915 = 0;var i__18150_19916 = 0;while(true){
if((i__18150_19916 < count__18149_19915))
{var arg__11642__auto___19917 = cljs.core._nth.call(null,chunk__18148_19914,i__18150_19916);a__11641__auto__.push(arg__11642__auto___19917);
{
var G__19918 = seq__18147_19913;
var G__19919 = chunk__18148_19914;
var G__19920 = count__18149_19915;
var G__19921 = (i__18150_19916 + 1);
seq__18147_19913 = G__19918;
chunk__18148_19914 = G__19919;
count__18149_19915 = G__19920;
i__18150_19916 = G__19921;
continue;
}
} else
{var temp__4092__auto___19922 = cljs.core.seq.call(null,seq__18147_19913);if(temp__4092__auto___19922)
{var seq__18147_19923__$1 = temp__4092__auto___19922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18147_19923__$1))
{var c__11010__auto___19924 = cljs.core.chunk_first.call(null,seq__18147_19923__$1);{
var G__19925 = cljs.core.chunk_rest.call(null,seq__18147_19923__$1);
var G__19926 = c__11010__auto___19924;
var G__19927 = cljs.core.count.call(null,c__11010__auto___19924);
var G__19928 = 0;
seq__18147_19913 = G__19925;
chunk__18148_19914 = G__19926;
count__18149_19915 = G__19927;
i__18150_19916 = G__19928;
continue;
}
} else
{var arg__11642__auto___19929 = cljs.core.first.call(null,seq__18147_19923__$1);a__11641__auto__.push(arg__11642__auto___19929);
{
var G__19930 = cljs.core.next.call(null,seq__18147_19923__$1);
var G__19931 = null;
var G__19932 = 0;
var G__19933 = 0;
seq__18147_19913 = G__19930;
chunk__18148_19914 = G__19931;
count__18149_19915 = G__19932;
i__18150_19916 = G__19933;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__11641__auto__);
};
var main = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__11640__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__19934){
var args__11640__auto__ = cljs.core.seq(arglist__19934);
return main__delegate(args__11640__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18155_19935 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18156_19936 = null;var count__18157_19937 = 0;var i__18158_19938 = 0;while(true){
if((i__18158_19938 < count__18157_19937))
{var arg__11642__auto___19939 = cljs.core._nth.call(null,chunk__18156_19936,i__18158_19938);a__11641__auto__.push(arg__11642__auto___19939);
{
var G__19940 = seq__18155_19935;
var G__19941 = chunk__18156_19936;
var G__19942 = count__18157_19937;
var G__19943 = (i__18158_19938 + 1);
seq__18155_19935 = G__19940;
chunk__18156_19936 = G__19941;
count__18157_19937 = G__19942;
i__18158_19938 = G__19943;
continue;
}
} else
{var temp__4092__auto___19944 = cljs.core.seq.call(null,seq__18155_19935);if(temp__4092__auto___19944)
{var seq__18155_19945__$1 = temp__4092__auto___19944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18155_19945__$1))
{var c__11010__auto___19946 = cljs.core.chunk_first.call(null,seq__18155_19945__$1);{
var G__19947 = cljs.core.chunk_rest.call(null,seq__18155_19945__$1);
var G__19948 = c__11010__auto___19946;
var G__19949 = cljs.core.count.call(null,c__11010__auto___19946);
var G__19950 = 0;
seq__18155_19935 = G__19947;
chunk__18156_19936 = G__19948;
count__18157_19937 = G__19949;
i__18158_19938 = G__19950;
continue;
}
} else
{var arg__11642__auto___19951 = cljs.core.first.call(null,seq__18155_19945__$1);a__11641__auto__.push(arg__11642__auto___19951);
{
var G__19952 = cljs.core.next.call(null,seq__18155_19945__$1);
var G__19953 = null;
var G__19954 = 0;
var G__19955 = 0;
seq__18155_19935 = G__19952;
chunk__18156_19936 = G__19953;
count__18157_19937 = G__19954;
i__18158_19938 = G__19955;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__11641__auto__);
};
var map = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__11640__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__19956){
var args__11640__auto__ = cljs.core.seq(arglist__19956);
return map__delegate(args__11640__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18163_19957 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18164_19958 = null;var count__18165_19959 = 0;var i__18166_19960 = 0;while(true){
if((i__18166_19960 < count__18165_19959))
{var arg__11642__auto___19961 = cljs.core._nth.call(null,chunk__18164_19958,i__18166_19960);a__11641__auto__.push(arg__11642__auto___19961);
{
var G__19962 = seq__18163_19957;
var G__19963 = chunk__18164_19958;
var G__19964 = count__18165_19959;
var G__19965 = (i__18166_19960 + 1);
seq__18163_19957 = G__19962;
chunk__18164_19958 = G__19963;
count__18165_19959 = G__19964;
i__18166_19960 = G__19965;
continue;
}
} else
{var temp__4092__auto___19966 = cljs.core.seq.call(null,seq__18163_19957);if(temp__4092__auto___19966)
{var seq__18163_19967__$1 = temp__4092__auto___19966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18163_19967__$1))
{var c__11010__auto___19968 = cljs.core.chunk_first.call(null,seq__18163_19967__$1);{
var G__19969 = cljs.core.chunk_rest.call(null,seq__18163_19967__$1);
var G__19970 = c__11010__auto___19968;
var G__19971 = cljs.core.count.call(null,c__11010__auto___19968);
var G__19972 = 0;
seq__18163_19957 = G__19969;
chunk__18164_19958 = G__19970;
count__18165_19959 = G__19971;
i__18166_19960 = G__19972;
continue;
}
} else
{var arg__11642__auto___19973 = cljs.core.first.call(null,seq__18163_19967__$1);a__11641__auto__.push(arg__11642__auto___19973);
{
var G__19974 = cljs.core.next.call(null,seq__18163_19967__$1);
var G__19975 = null;
var G__19976 = 0;
var G__19977 = 0;
seq__18163_19957 = G__19974;
chunk__18164_19958 = G__19975;
count__18165_19959 = G__19976;
i__18166_19960 = G__19977;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__11641__auto__);
};
var mark = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__11640__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__19978){
var args__11640__auto__ = cljs.core.seq(arglist__19978);
return mark__delegate(args__11640__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18171_19979 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18172_19980 = null;var count__18173_19981 = 0;var i__18174_19982 = 0;while(true){
if((i__18174_19982 < count__18173_19981))
{var arg__11642__auto___19983 = cljs.core._nth.call(null,chunk__18172_19980,i__18174_19982);a__11641__auto__.push(arg__11642__auto___19983);
{
var G__19984 = seq__18171_19979;
var G__19985 = chunk__18172_19980;
var G__19986 = count__18173_19981;
var G__19987 = (i__18174_19982 + 1);
seq__18171_19979 = G__19984;
chunk__18172_19980 = G__19985;
count__18173_19981 = G__19986;
i__18174_19982 = G__19987;
continue;
}
} else
{var temp__4092__auto___19988 = cljs.core.seq.call(null,seq__18171_19979);if(temp__4092__auto___19988)
{var seq__18171_19989__$1 = temp__4092__auto___19988;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18171_19989__$1))
{var c__11010__auto___19990 = cljs.core.chunk_first.call(null,seq__18171_19989__$1);{
var G__19991 = cljs.core.chunk_rest.call(null,seq__18171_19989__$1);
var G__19992 = c__11010__auto___19990;
var G__19993 = cljs.core.count.call(null,c__11010__auto___19990);
var G__19994 = 0;
seq__18171_19979 = G__19991;
chunk__18172_19980 = G__19992;
count__18173_19981 = G__19993;
i__18174_19982 = G__19994;
continue;
}
} else
{var arg__11642__auto___19995 = cljs.core.first.call(null,seq__18171_19989__$1);a__11641__auto__.push(arg__11642__auto___19995);
{
var G__19996 = cljs.core.next.call(null,seq__18171_19989__$1);
var G__19997 = null;
var G__19998 = 0;
var G__19999 = 0;
seq__18171_19979 = G__19996;
chunk__18172_19980 = G__19997;
count__18173_19981 = G__19998;
i__18174_19982 = G__19999;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__11641__auto__);
};
var menu = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__11640__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__20000){
var args__11640__auto__ = cljs.core.seq(arglist__20000);
return menu__delegate(args__11640__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18179_20001 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18180_20002 = null;var count__18181_20003 = 0;var i__18182_20004 = 0;while(true){
if((i__18182_20004 < count__18181_20003))
{var arg__11642__auto___20005 = cljs.core._nth.call(null,chunk__18180_20002,i__18182_20004);a__11641__auto__.push(arg__11642__auto___20005);
{
var G__20006 = seq__18179_20001;
var G__20007 = chunk__18180_20002;
var G__20008 = count__18181_20003;
var G__20009 = (i__18182_20004 + 1);
seq__18179_20001 = G__20006;
chunk__18180_20002 = G__20007;
count__18181_20003 = G__20008;
i__18182_20004 = G__20009;
continue;
}
} else
{var temp__4092__auto___20010 = cljs.core.seq.call(null,seq__18179_20001);if(temp__4092__auto___20010)
{var seq__18179_20011__$1 = temp__4092__auto___20010;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18179_20011__$1))
{var c__11010__auto___20012 = cljs.core.chunk_first.call(null,seq__18179_20011__$1);{
var G__20013 = cljs.core.chunk_rest.call(null,seq__18179_20011__$1);
var G__20014 = c__11010__auto___20012;
var G__20015 = cljs.core.count.call(null,c__11010__auto___20012);
var G__20016 = 0;
seq__18179_20001 = G__20013;
chunk__18180_20002 = G__20014;
count__18181_20003 = G__20015;
i__18182_20004 = G__20016;
continue;
}
} else
{var arg__11642__auto___20017 = cljs.core.first.call(null,seq__18179_20011__$1);a__11641__auto__.push(arg__11642__auto___20017);
{
var G__20018 = cljs.core.next.call(null,seq__18179_20011__$1);
var G__20019 = null;
var G__20020 = 0;
var G__20021 = 0;
seq__18179_20001 = G__20018;
chunk__18180_20002 = G__20019;
count__18181_20003 = G__20020;
i__18182_20004 = G__20021;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__11641__auto__);
};
var menuitem = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__11640__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__20022){
var args__11640__auto__ = cljs.core.seq(arglist__20022);
return menuitem__delegate(args__11640__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18187_20023 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18188_20024 = null;var count__18189_20025 = 0;var i__18190_20026 = 0;while(true){
if((i__18190_20026 < count__18189_20025))
{var arg__11642__auto___20027 = cljs.core._nth.call(null,chunk__18188_20024,i__18190_20026);a__11641__auto__.push(arg__11642__auto___20027);
{
var G__20028 = seq__18187_20023;
var G__20029 = chunk__18188_20024;
var G__20030 = count__18189_20025;
var G__20031 = (i__18190_20026 + 1);
seq__18187_20023 = G__20028;
chunk__18188_20024 = G__20029;
count__18189_20025 = G__20030;
i__18190_20026 = G__20031;
continue;
}
} else
{var temp__4092__auto___20032 = cljs.core.seq.call(null,seq__18187_20023);if(temp__4092__auto___20032)
{var seq__18187_20033__$1 = temp__4092__auto___20032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18187_20033__$1))
{var c__11010__auto___20034 = cljs.core.chunk_first.call(null,seq__18187_20033__$1);{
var G__20035 = cljs.core.chunk_rest.call(null,seq__18187_20033__$1);
var G__20036 = c__11010__auto___20034;
var G__20037 = cljs.core.count.call(null,c__11010__auto___20034);
var G__20038 = 0;
seq__18187_20023 = G__20035;
chunk__18188_20024 = G__20036;
count__18189_20025 = G__20037;
i__18190_20026 = G__20038;
continue;
}
} else
{var arg__11642__auto___20039 = cljs.core.first.call(null,seq__18187_20033__$1);a__11641__auto__.push(arg__11642__auto___20039);
{
var G__20040 = cljs.core.next.call(null,seq__18187_20033__$1);
var G__20041 = null;
var G__20042 = 0;
var G__20043 = 0;
seq__18187_20023 = G__20040;
chunk__18188_20024 = G__20041;
count__18189_20025 = G__20042;
i__18190_20026 = G__20043;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__11641__auto__);
};
var meta = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__11640__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__20044){
var args__11640__auto__ = cljs.core.seq(arglist__20044);
return meta__delegate(args__11640__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18195_20045 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18196_20046 = null;var count__18197_20047 = 0;var i__18198_20048 = 0;while(true){
if((i__18198_20048 < count__18197_20047))
{var arg__11642__auto___20049 = cljs.core._nth.call(null,chunk__18196_20046,i__18198_20048);a__11641__auto__.push(arg__11642__auto___20049);
{
var G__20050 = seq__18195_20045;
var G__20051 = chunk__18196_20046;
var G__20052 = count__18197_20047;
var G__20053 = (i__18198_20048 + 1);
seq__18195_20045 = G__20050;
chunk__18196_20046 = G__20051;
count__18197_20047 = G__20052;
i__18198_20048 = G__20053;
continue;
}
} else
{var temp__4092__auto___20054 = cljs.core.seq.call(null,seq__18195_20045);if(temp__4092__auto___20054)
{var seq__18195_20055__$1 = temp__4092__auto___20054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18195_20055__$1))
{var c__11010__auto___20056 = cljs.core.chunk_first.call(null,seq__18195_20055__$1);{
var G__20057 = cljs.core.chunk_rest.call(null,seq__18195_20055__$1);
var G__20058 = c__11010__auto___20056;
var G__20059 = cljs.core.count.call(null,c__11010__auto___20056);
var G__20060 = 0;
seq__18195_20045 = G__20057;
chunk__18196_20046 = G__20058;
count__18197_20047 = G__20059;
i__18198_20048 = G__20060;
continue;
}
} else
{var arg__11642__auto___20061 = cljs.core.first.call(null,seq__18195_20055__$1);a__11641__auto__.push(arg__11642__auto___20061);
{
var G__20062 = cljs.core.next.call(null,seq__18195_20055__$1);
var G__20063 = null;
var G__20064 = 0;
var G__20065 = 0;
seq__18195_20045 = G__20062;
chunk__18196_20046 = G__20063;
count__18197_20047 = G__20064;
i__18198_20048 = G__20065;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__11641__auto__);
};
var meter = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__11640__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__20066){
var args__11640__auto__ = cljs.core.seq(arglist__20066);
return meter__delegate(args__11640__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18203_20067 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18204_20068 = null;var count__18205_20069 = 0;var i__18206_20070 = 0;while(true){
if((i__18206_20070 < count__18205_20069))
{var arg__11642__auto___20071 = cljs.core._nth.call(null,chunk__18204_20068,i__18206_20070);a__11641__auto__.push(arg__11642__auto___20071);
{
var G__20072 = seq__18203_20067;
var G__20073 = chunk__18204_20068;
var G__20074 = count__18205_20069;
var G__20075 = (i__18206_20070 + 1);
seq__18203_20067 = G__20072;
chunk__18204_20068 = G__20073;
count__18205_20069 = G__20074;
i__18206_20070 = G__20075;
continue;
}
} else
{var temp__4092__auto___20076 = cljs.core.seq.call(null,seq__18203_20067);if(temp__4092__auto___20076)
{var seq__18203_20077__$1 = temp__4092__auto___20076;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18203_20077__$1))
{var c__11010__auto___20078 = cljs.core.chunk_first.call(null,seq__18203_20077__$1);{
var G__20079 = cljs.core.chunk_rest.call(null,seq__18203_20077__$1);
var G__20080 = c__11010__auto___20078;
var G__20081 = cljs.core.count.call(null,c__11010__auto___20078);
var G__20082 = 0;
seq__18203_20067 = G__20079;
chunk__18204_20068 = G__20080;
count__18205_20069 = G__20081;
i__18206_20070 = G__20082;
continue;
}
} else
{var arg__11642__auto___20083 = cljs.core.first.call(null,seq__18203_20077__$1);a__11641__auto__.push(arg__11642__auto___20083);
{
var G__20084 = cljs.core.next.call(null,seq__18203_20077__$1);
var G__20085 = null;
var G__20086 = 0;
var G__20087 = 0;
seq__18203_20067 = G__20084;
chunk__18204_20068 = G__20085;
count__18205_20069 = G__20086;
i__18206_20070 = G__20087;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__11641__auto__);
};
var nav = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__11640__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__20088){
var args__11640__auto__ = cljs.core.seq(arglist__20088);
return nav__delegate(args__11640__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18211_20089 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18212_20090 = null;var count__18213_20091 = 0;var i__18214_20092 = 0;while(true){
if((i__18214_20092 < count__18213_20091))
{var arg__11642__auto___20093 = cljs.core._nth.call(null,chunk__18212_20090,i__18214_20092);a__11641__auto__.push(arg__11642__auto___20093);
{
var G__20094 = seq__18211_20089;
var G__20095 = chunk__18212_20090;
var G__20096 = count__18213_20091;
var G__20097 = (i__18214_20092 + 1);
seq__18211_20089 = G__20094;
chunk__18212_20090 = G__20095;
count__18213_20091 = G__20096;
i__18214_20092 = G__20097;
continue;
}
} else
{var temp__4092__auto___20098 = cljs.core.seq.call(null,seq__18211_20089);if(temp__4092__auto___20098)
{var seq__18211_20099__$1 = temp__4092__auto___20098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18211_20099__$1))
{var c__11010__auto___20100 = cljs.core.chunk_first.call(null,seq__18211_20099__$1);{
var G__20101 = cljs.core.chunk_rest.call(null,seq__18211_20099__$1);
var G__20102 = c__11010__auto___20100;
var G__20103 = cljs.core.count.call(null,c__11010__auto___20100);
var G__20104 = 0;
seq__18211_20089 = G__20101;
chunk__18212_20090 = G__20102;
count__18213_20091 = G__20103;
i__18214_20092 = G__20104;
continue;
}
} else
{var arg__11642__auto___20105 = cljs.core.first.call(null,seq__18211_20099__$1);a__11641__auto__.push(arg__11642__auto___20105);
{
var G__20106 = cljs.core.next.call(null,seq__18211_20099__$1);
var G__20107 = null;
var G__20108 = 0;
var G__20109 = 0;
seq__18211_20089 = G__20106;
chunk__18212_20090 = G__20107;
count__18213_20091 = G__20108;
i__18214_20092 = G__20109;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__11641__auto__);
};
var noscript = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__11640__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__20110){
var args__11640__auto__ = cljs.core.seq(arglist__20110);
return noscript__delegate(args__11640__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18219_20111 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18220_20112 = null;var count__18221_20113 = 0;var i__18222_20114 = 0;while(true){
if((i__18222_20114 < count__18221_20113))
{var arg__11642__auto___20115 = cljs.core._nth.call(null,chunk__18220_20112,i__18222_20114);a__11641__auto__.push(arg__11642__auto___20115);
{
var G__20116 = seq__18219_20111;
var G__20117 = chunk__18220_20112;
var G__20118 = count__18221_20113;
var G__20119 = (i__18222_20114 + 1);
seq__18219_20111 = G__20116;
chunk__18220_20112 = G__20117;
count__18221_20113 = G__20118;
i__18222_20114 = G__20119;
continue;
}
} else
{var temp__4092__auto___20120 = cljs.core.seq.call(null,seq__18219_20111);if(temp__4092__auto___20120)
{var seq__18219_20121__$1 = temp__4092__auto___20120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18219_20121__$1))
{var c__11010__auto___20122 = cljs.core.chunk_first.call(null,seq__18219_20121__$1);{
var G__20123 = cljs.core.chunk_rest.call(null,seq__18219_20121__$1);
var G__20124 = c__11010__auto___20122;
var G__20125 = cljs.core.count.call(null,c__11010__auto___20122);
var G__20126 = 0;
seq__18219_20111 = G__20123;
chunk__18220_20112 = G__20124;
count__18221_20113 = G__20125;
i__18222_20114 = G__20126;
continue;
}
} else
{var arg__11642__auto___20127 = cljs.core.first.call(null,seq__18219_20121__$1);a__11641__auto__.push(arg__11642__auto___20127);
{
var G__20128 = cljs.core.next.call(null,seq__18219_20121__$1);
var G__20129 = null;
var G__20130 = 0;
var G__20131 = 0;
seq__18219_20111 = G__20128;
chunk__18220_20112 = G__20129;
count__18221_20113 = G__20130;
i__18222_20114 = G__20131;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__11641__auto__);
};
var object = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__11640__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__20132){
var args__11640__auto__ = cljs.core.seq(arglist__20132);
return object__delegate(args__11640__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18227_20133 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18228_20134 = null;var count__18229_20135 = 0;var i__18230_20136 = 0;while(true){
if((i__18230_20136 < count__18229_20135))
{var arg__11642__auto___20137 = cljs.core._nth.call(null,chunk__18228_20134,i__18230_20136);a__11641__auto__.push(arg__11642__auto___20137);
{
var G__20138 = seq__18227_20133;
var G__20139 = chunk__18228_20134;
var G__20140 = count__18229_20135;
var G__20141 = (i__18230_20136 + 1);
seq__18227_20133 = G__20138;
chunk__18228_20134 = G__20139;
count__18229_20135 = G__20140;
i__18230_20136 = G__20141;
continue;
}
} else
{var temp__4092__auto___20142 = cljs.core.seq.call(null,seq__18227_20133);if(temp__4092__auto___20142)
{var seq__18227_20143__$1 = temp__4092__auto___20142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18227_20143__$1))
{var c__11010__auto___20144 = cljs.core.chunk_first.call(null,seq__18227_20143__$1);{
var G__20145 = cljs.core.chunk_rest.call(null,seq__18227_20143__$1);
var G__20146 = c__11010__auto___20144;
var G__20147 = cljs.core.count.call(null,c__11010__auto___20144);
var G__20148 = 0;
seq__18227_20133 = G__20145;
chunk__18228_20134 = G__20146;
count__18229_20135 = G__20147;
i__18230_20136 = G__20148;
continue;
}
} else
{var arg__11642__auto___20149 = cljs.core.first.call(null,seq__18227_20143__$1);a__11641__auto__.push(arg__11642__auto___20149);
{
var G__20150 = cljs.core.next.call(null,seq__18227_20143__$1);
var G__20151 = null;
var G__20152 = 0;
var G__20153 = 0;
seq__18227_20133 = G__20150;
chunk__18228_20134 = G__20151;
count__18229_20135 = G__20152;
i__18230_20136 = G__20153;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__11641__auto__);
};
var ol = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__11640__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__20154){
var args__11640__auto__ = cljs.core.seq(arglist__20154);
return ol__delegate(args__11640__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18235_20155 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18236_20156 = null;var count__18237_20157 = 0;var i__18238_20158 = 0;while(true){
if((i__18238_20158 < count__18237_20157))
{var arg__11642__auto___20159 = cljs.core._nth.call(null,chunk__18236_20156,i__18238_20158);a__11641__auto__.push(arg__11642__auto___20159);
{
var G__20160 = seq__18235_20155;
var G__20161 = chunk__18236_20156;
var G__20162 = count__18237_20157;
var G__20163 = (i__18238_20158 + 1);
seq__18235_20155 = G__20160;
chunk__18236_20156 = G__20161;
count__18237_20157 = G__20162;
i__18238_20158 = G__20163;
continue;
}
} else
{var temp__4092__auto___20164 = cljs.core.seq.call(null,seq__18235_20155);if(temp__4092__auto___20164)
{var seq__18235_20165__$1 = temp__4092__auto___20164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18235_20165__$1))
{var c__11010__auto___20166 = cljs.core.chunk_first.call(null,seq__18235_20165__$1);{
var G__20167 = cljs.core.chunk_rest.call(null,seq__18235_20165__$1);
var G__20168 = c__11010__auto___20166;
var G__20169 = cljs.core.count.call(null,c__11010__auto___20166);
var G__20170 = 0;
seq__18235_20155 = G__20167;
chunk__18236_20156 = G__20168;
count__18237_20157 = G__20169;
i__18238_20158 = G__20170;
continue;
}
} else
{var arg__11642__auto___20171 = cljs.core.first.call(null,seq__18235_20165__$1);a__11641__auto__.push(arg__11642__auto___20171);
{
var G__20172 = cljs.core.next.call(null,seq__18235_20165__$1);
var G__20173 = null;
var G__20174 = 0;
var G__20175 = 0;
seq__18235_20155 = G__20172;
chunk__18236_20156 = G__20173;
count__18237_20157 = G__20174;
i__18238_20158 = G__20175;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__11641__auto__);
};
var optgroup = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__11640__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__20176){
var args__11640__auto__ = cljs.core.seq(arglist__20176);
return optgroup__delegate(args__11640__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18243_20177 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18244_20178 = null;var count__18245_20179 = 0;var i__18246_20180 = 0;while(true){
if((i__18246_20180 < count__18245_20179))
{var arg__11642__auto___20181 = cljs.core._nth.call(null,chunk__18244_20178,i__18246_20180);a__11641__auto__.push(arg__11642__auto___20181);
{
var G__20182 = seq__18243_20177;
var G__20183 = chunk__18244_20178;
var G__20184 = count__18245_20179;
var G__20185 = (i__18246_20180 + 1);
seq__18243_20177 = G__20182;
chunk__18244_20178 = G__20183;
count__18245_20179 = G__20184;
i__18246_20180 = G__20185;
continue;
}
} else
{var temp__4092__auto___20186 = cljs.core.seq.call(null,seq__18243_20177);if(temp__4092__auto___20186)
{var seq__18243_20187__$1 = temp__4092__auto___20186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18243_20187__$1))
{var c__11010__auto___20188 = cljs.core.chunk_first.call(null,seq__18243_20187__$1);{
var G__20189 = cljs.core.chunk_rest.call(null,seq__18243_20187__$1);
var G__20190 = c__11010__auto___20188;
var G__20191 = cljs.core.count.call(null,c__11010__auto___20188);
var G__20192 = 0;
seq__18243_20177 = G__20189;
chunk__18244_20178 = G__20190;
count__18245_20179 = G__20191;
i__18246_20180 = G__20192;
continue;
}
} else
{var arg__11642__auto___20193 = cljs.core.first.call(null,seq__18243_20187__$1);a__11641__auto__.push(arg__11642__auto___20193);
{
var G__20194 = cljs.core.next.call(null,seq__18243_20187__$1);
var G__20195 = null;
var G__20196 = 0;
var G__20197 = 0;
seq__18243_20177 = G__20194;
chunk__18244_20178 = G__20195;
count__18245_20179 = G__20196;
i__18246_20180 = G__20197;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__11641__auto__);
};
var option = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__11640__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__20198){
var args__11640__auto__ = cljs.core.seq(arglist__20198);
return option__delegate(args__11640__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18251_20199 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18252_20200 = null;var count__18253_20201 = 0;var i__18254_20202 = 0;while(true){
if((i__18254_20202 < count__18253_20201))
{var arg__11642__auto___20203 = cljs.core._nth.call(null,chunk__18252_20200,i__18254_20202);a__11641__auto__.push(arg__11642__auto___20203);
{
var G__20204 = seq__18251_20199;
var G__20205 = chunk__18252_20200;
var G__20206 = count__18253_20201;
var G__20207 = (i__18254_20202 + 1);
seq__18251_20199 = G__20204;
chunk__18252_20200 = G__20205;
count__18253_20201 = G__20206;
i__18254_20202 = G__20207;
continue;
}
} else
{var temp__4092__auto___20208 = cljs.core.seq.call(null,seq__18251_20199);if(temp__4092__auto___20208)
{var seq__18251_20209__$1 = temp__4092__auto___20208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18251_20209__$1))
{var c__11010__auto___20210 = cljs.core.chunk_first.call(null,seq__18251_20209__$1);{
var G__20211 = cljs.core.chunk_rest.call(null,seq__18251_20209__$1);
var G__20212 = c__11010__auto___20210;
var G__20213 = cljs.core.count.call(null,c__11010__auto___20210);
var G__20214 = 0;
seq__18251_20199 = G__20211;
chunk__18252_20200 = G__20212;
count__18253_20201 = G__20213;
i__18254_20202 = G__20214;
continue;
}
} else
{var arg__11642__auto___20215 = cljs.core.first.call(null,seq__18251_20209__$1);a__11641__auto__.push(arg__11642__auto___20215);
{
var G__20216 = cljs.core.next.call(null,seq__18251_20209__$1);
var G__20217 = null;
var G__20218 = 0;
var G__20219 = 0;
seq__18251_20199 = G__20216;
chunk__18252_20200 = G__20217;
count__18253_20201 = G__20218;
i__18254_20202 = G__20219;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__11641__auto__);
};
var output = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__11640__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__20220){
var args__11640__auto__ = cljs.core.seq(arglist__20220);
return output__delegate(args__11640__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18259_20221 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18260_20222 = null;var count__18261_20223 = 0;var i__18262_20224 = 0;while(true){
if((i__18262_20224 < count__18261_20223))
{var arg__11642__auto___20225 = cljs.core._nth.call(null,chunk__18260_20222,i__18262_20224);a__11641__auto__.push(arg__11642__auto___20225);
{
var G__20226 = seq__18259_20221;
var G__20227 = chunk__18260_20222;
var G__20228 = count__18261_20223;
var G__20229 = (i__18262_20224 + 1);
seq__18259_20221 = G__20226;
chunk__18260_20222 = G__20227;
count__18261_20223 = G__20228;
i__18262_20224 = G__20229;
continue;
}
} else
{var temp__4092__auto___20230 = cljs.core.seq.call(null,seq__18259_20221);if(temp__4092__auto___20230)
{var seq__18259_20231__$1 = temp__4092__auto___20230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18259_20231__$1))
{var c__11010__auto___20232 = cljs.core.chunk_first.call(null,seq__18259_20231__$1);{
var G__20233 = cljs.core.chunk_rest.call(null,seq__18259_20231__$1);
var G__20234 = c__11010__auto___20232;
var G__20235 = cljs.core.count.call(null,c__11010__auto___20232);
var G__20236 = 0;
seq__18259_20221 = G__20233;
chunk__18260_20222 = G__20234;
count__18261_20223 = G__20235;
i__18262_20224 = G__20236;
continue;
}
} else
{var arg__11642__auto___20237 = cljs.core.first.call(null,seq__18259_20231__$1);a__11641__auto__.push(arg__11642__auto___20237);
{
var G__20238 = cljs.core.next.call(null,seq__18259_20231__$1);
var G__20239 = null;
var G__20240 = 0;
var G__20241 = 0;
seq__18259_20221 = G__20238;
chunk__18260_20222 = G__20239;
count__18261_20223 = G__20240;
i__18262_20224 = G__20241;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__11641__auto__);
};
var p = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__11640__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__20242){
var args__11640__auto__ = cljs.core.seq(arglist__20242);
return p__delegate(args__11640__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18267_20243 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18268_20244 = null;var count__18269_20245 = 0;var i__18270_20246 = 0;while(true){
if((i__18270_20246 < count__18269_20245))
{var arg__11642__auto___20247 = cljs.core._nth.call(null,chunk__18268_20244,i__18270_20246);a__11641__auto__.push(arg__11642__auto___20247);
{
var G__20248 = seq__18267_20243;
var G__20249 = chunk__18268_20244;
var G__20250 = count__18269_20245;
var G__20251 = (i__18270_20246 + 1);
seq__18267_20243 = G__20248;
chunk__18268_20244 = G__20249;
count__18269_20245 = G__20250;
i__18270_20246 = G__20251;
continue;
}
} else
{var temp__4092__auto___20252 = cljs.core.seq.call(null,seq__18267_20243);if(temp__4092__auto___20252)
{var seq__18267_20253__$1 = temp__4092__auto___20252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18267_20253__$1))
{var c__11010__auto___20254 = cljs.core.chunk_first.call(null,seq__18267_20253__$1);{
var G__20255 = cljs.core.chunk_rest.call(null,seq__18267_20253__$1);
var G__20256 = c__11010__auto___20254;
var G__20257 = cljs.core.count.call(null,c__11010__auto___20254);
var G__20258 = 0;
seq__18267_20243 = G__20255;
chunk__18268_20244 = G__20256;
count__18269_20245 = G__20257;
i__18270_20246 = G__20258;
continue;
}
} else
{var arg__11642__auto___20259 = cljs.core.first.call(null,seq__18267_20253__$1);a__11641__auto__.push(arg__11642__auto___20259);
{
var G__20260 = cljs.core.next.call(null,seq__18267_20253__$1);
var G__20261 = null;
var G__20262 = 0;
var G__20263 = 0;
seq__18267_20243 = G__20260;
chunk__18268_20244 = G__20261;
count__18269_20245 = G__20262;
i__18270_20246 = G__20263;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__11641__auto__);
};
var param = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__11640__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__20264){
var args__11640__auto__ = cljs.core.seq(arglist__20264);
return param__delegate(args__11640__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18275_20265 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18276_20266 = null;var count__18277_20267 = 0;var i__18278_20268 = 0;while(true){
if((i__18278_20268 < count__18277_20267))
{var arg__11642__auto___20269 = cljs.core._nth.call(null,chunk__18276_20266,i__18278_20268);a__11641__auto__.push(arg__11642__auto___20269);
{
var G__20270 = seq__18275_20265;
var G__20271 = chunk__18276_20266;
var G__20272 = count__18277_20267;
var G__20273 = (i__18278_20268 + 1);
seq__18275_20265 = G__20270;
chunk__18276_20266 = G__20271;
count__18277_20267 = G__20272;
i__18278_20268 = G__20273;
continue;
}
} else
{var temp__4092__auto___20274 = cljs.core.seq.call(null,seq__18275_20265);if(temp__4092__auto___20274)
{var seq__18275_20275__$1 = temp__4092__auto___20274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18275_20275__$1))
{var c__11010__auto___20276 = cljs.core.chunk_first.call(null,seq__18275_20275__$1);{
var G__20277 = cljs.core.chunk_rest.call(null,seq__18275_20275__$1);
var G__20278 = c__11010__auto___20276;
var G__20279 = cljs.core.count.call(null,c__11010__auto___20276);
var G__20280 = 0;
seq__18275_20265 = G__20277;
chunk__18276_20266 = G__20278;
count__18277_20267 = G__20279;
i__18278_20268 = G__20280;
continue;
}
} else
{var arg__11642__auto___20281 = cljs.core.first.call(null,seq__18275_20275__$1);a__11641__auto__.push(arg__11642__auto___20281);
{
var G__20282 = cljs.core.next.call(null,seq__18275_20275__$1);
var G__20283 = null;
var G__20284 = 0;
var G__20285 = 0;
seq__18275_20265 = G__20282;
chunk__18276_20266 = G__20283;
count__18277_20267 = G__20284;
i__18278_20268 = G__20285;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__11641__auto__);
};
var pre = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__11640__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__20286){
var args__11640__auto__ = cljs.core.seq(arglist__20286);
return pre__delegate(args__11640__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18283_20287 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18284_20288 = null;var count__18285_20289 = 0;var i__18286_20290 = 0;while(true){
if((i__18286_20290 < count__18285_20289))
{var arg__11642__auto___20291 = cljs.core._nth.call(null,chunk__18284_20288,i__18286_20290);a__11641__auto__.push(arg__11642__auto___20291);
{
var G__20292 = seq__18283_20287;
var G__20293 = chunk__18284_20288;
var G__20294 = count__18285_20289;
var G__20295 = (i__18286_20290 + 1);
seq__18283_20287 = G__20292;
chunk__18284_20288 = G__20293;
count__18285_20289 = G__20294;
i__18286_20290 = G__20295;
continue;
}
} else
{var temp__4092__auto___20296 = cljs.core.seq.call(null,seq__18283_20287);if(temp__4092__auto___20296)
{var seq__18283_20297__$1 = temp__4092__auto___20296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18283_20297__$1))
{var c__11010__auto___20298 = cljs.core.chunk_first.call(null,seq__18283_20297__$1);{
var G__20299 = cljs.core.chunk_rest.call(null,seq__18283_20297__$1);
var G__20300 = c__11010__auto___20298;
var G__20301 = cljs.core.count.call(null,c__11010__auto___20298);
var G__20302 = 0;
seq__18283_20287 = G__20299;
chunk__18284_20288 = G__20300;
count__18285_20289 = G__20301;
i__18286_20290 = G__20302;
continue;
}
} else
{var arg__11642__auto___20303 = cljs.core.first.call(null,seq__18283_20297__$1);a__11641__auto__.push(arg__11642__auto___20303);
{
var G__20304 = cljs.core.next.call(null,seq__18283_20297__$1);
var G__20305 = null;
var G__20306 = 0;
var G__20307 = 0;
seq__18283_20287 = G__20304;
chunk__18284_20288 = G__20305;
count__18285_20289 = G__20306;
i__18286_20290 = G__20307;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__11641__auto__);
};
var progress = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__11640__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__20308){
var args__11640__auto__ = cljs.core.seq(arglist__20308);
return progress__delegate(args__11640__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18291_20309 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18292_20310 = null;var count__18293_20311 = 0;var i__18294_20312 = 0;while(true){
if((i__18294_20312 < count__18293_20311))
{var arg__11642__auto___20313 = cljs.core._nth.call(null,chunk__18292_20310,i__18294_20312);a__11641__auto__.push(arg__11642__auto___20313);
{
var G__20314 = seq__18291_20309;
var G__20315 = chunk__18292_20310;
var G__20316 = count__18293_20311;
var G__20317 = (i__18294_20312 + 1);
seq__18291_20309 = G__20314;
chunk__18292_20310 = G__20315;
count__18293_20311 = G__20316;
i__18294_20312 = G__20317;
continue;
}
} else
{var temp__4092__auto___20318 = cljs.core.seq.call(null,seq__18291_20309);if(temp__4092__auto___20318)
{var seq__18291_20319__$1 = temp__4092__auto___20318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18291_20319__$1))
{var c__11010__auto___20320 = cljs.core.chunk_first.call(null,seq__18291_20319__$1);{
var G__20321 = cljs.core.chunk_rest.call(null,seq__18291_20319__$1);
var G__20322 = c__11010__auto___20320;
var G__20323 = cljs.core.count.call(null,c__11010__auto___20320);
var G__20324 = 0;
seq__18291_20309 = G__20321;
chunk__18292_20310 = G__20322;
count__18293_20311 = G__20323;
i__18294_20312 = G__20324;
continue;
}
} else
{var arg__11642__auto___20325 = cljs.core.first.call(null,seq__18291_20319__$1);a__11641__auto__.push(arg__11642__auto___20325);
{
var G__20326 = cljs.core.next.call(null,seq__18291_20319__$1);
var G__20327 = null;
var G__20328 = 0;
var G__20329 = 0;
seq__18291_20309 = G__20326;
chunk__18292_20310 = G__20327;
count__18293_20311 = G__20328;
i__18294_20312 = G__20329;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__11641__auto__);
};
var q = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__11640__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__20330){
var args__11640__auto__ = cljs.core.seq(arglist__20330);
return q__delegate(args__11640__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18299_20331 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18300_20332 = null;var count__18301_20333 = 0;var i__18302_20334 = 0;while(true){
if((i__18302_20334 < count__18301_20333))
{var arg__11642__auto___20335 = cljs.core._nth.call(null,chunk__18300_20332,i__18302_20334);a__11641__auto__.push(arg__11642__auto___20335);
{
var G__20336 = seq__18299_20331;
var G__20337 = chunk__18300_20332;
var G__20338 = count__18301_20333;
var G__20339 = (i__18302_20334 + 1);
seq__18299_20331 = G__20336;
chunk__18300_20332 = G__20337;
count__18301_20333 = G__20338;
i__18302_20334 = G__20339;
continue;
}
} else
{var temp__4092__auto___20340 = cljs.core.seq.call(null,seq__18299_20331);if(temp__4092__auto___20340)
{var seq__18299_20341__$1 = temp__4092__auto___20340;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18299_20341__$1))
{var c__11010__auto___20342 = cljs.core.chunk_first.call(null,seq__18299_20341__$1);{
var G__20343 = cljs.core.chunk_rest.call(null,seq__18299_20341__$1);
var G__20344 = c__11010__auto___20342;
var G__20345 = cljs.core.count.call(null,c__11010__auto___20342);
var G__20346 = 0;
seq__18299_20331 = G__20343;
chunk__18300_20332 = G__20344;
count__18301_20333 = G__20345;
i__18302_20334 = G__20346;
continue;
}
} else
{var arg__11642__auto___20347 = cljs.core.first.call(null,seq__18299_20341__$1);a__11641__auto__.push(arg__11642__auto___20347);
{
var G__20348 = cljs.core.next.call(null,seq__18299_20341__$1);
var G__20349 = null;
var G__20350 = 0;
var G__20351 = 0;
seq__18299_20331 = G__20348;
chunk__18300_20332 = G__20349;
count__18301_20333 = G__20350;
i__18302_20334 = G__20351;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__11641__auto__);
};
var rp = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__11640__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__20352){
var args__11640__auto__ = cljs.core.seq(arglist__20352);
return rp__delegate(args__11640__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18307_20353 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18308_20354 = null;var count__18309_20355 = 0;var i__18310_20356 = 0;while(true){
if((i__18310_20356 < count__18309_20355))
{var arg__11642__auto___20357 = cljs.core._nth.call(null,chunk__18308_20354,i__18310_20356);a__11641__auto__.push(arg__11642__auto___20357);
{
var G__20358 = seq__18307_20353;
var G__20359 = chunk__18308_20354;
var G__20360 = count__18309_20355;
var G__20361 = (i__18310_20356 + 1);
seq__18307_20353 = G__20358;
chunk__18308_20354 = G__20359;
count__18309_20355 = G__20360;
i__18310_20356 = G__20361;
continue;
}
} else
{var temp__4092__auto___20362 = cljs.core.seq.call(null,seq__18307_20353);if(temp__4092__auto___20362)
{var seq__18307_20363__$1 = temp__4092__auto___20362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18307_20363__$1))
{var c__11010__auto___20364 = cljs.core.chunk_first.call(null,seq__18307_20363__$1);{
var G__20365 = cljs.core.chunk_rest.call(null,seq__18307_20363__$1);
var G__20366 = c__11010__auto___20364;
var G__20367 = cljs.core.count.call(null,c__11010__auto___20364);
var G__20368 = 0;
seq__18307_20353 = G__20365;
chunk__18308_20354 = G__20366;
count__18309_20355 = G__20367;
i__18310_20356 = G__20368;
continue;
}
} else
{var arg__11642__auto___20369 = cljs.core.first.call(null,seq__18307_20363__$1);a__11641__auto__.push(arg__11642__auto___20369);
{
var G__20370 = cljs.core.next.call(null,seq__18307_20363__$1);
var G__20371 = null;
var G__20372 = 0;
var G__20373 = 0;
seq__18307_20353 = G__20370;
chunk__18308_20354 = G__20371;
count__18309_20355 = G__20372;
i__18310_20356 = G__20373;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__11641__auto__);
};
var rt = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__11640__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__20374){
var args__11640__auto__ = cljs.core.seq(arglist__20374);
return rt__delegate(args__11640__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18315_20375 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18316_20376 = null;var count__18317_20377 = 0;var i__18318_20378 = 0;while(true){
if((i__18318_20378 < count__18317_20377))
{var arg__11642__auto___20379 = cljs.core._nth.call(null,chunk__18316_20376,i__18318_20378);a__11641__auto__.push(arg__11642__auto___20379);
{
var G__20380 = seq__18315_20375;
var G__20381 = chunk__18316_20376;
var G__20382 = count__18317_20377;
var G__20383 = (i__18318_20378 + 1);
seq__18315_20375 = G__20380;
chunk__18316_20376 = G__20381;
count__18317_20377 = G__20382;
i__18318_20378 = G__20383;
continue;
}
} else
{var temp__4092__auto___20384 = cljs.core.seq.call(null,seq__18315_20375);if(temp__4092__auto___20384)
{var seq__18315_20385__$1 = temp__4092__auto___20384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18315_20385__$1))
{var c__11010__auto___20386 = cljs.core.chunk_first.call(null,seq__18315_20385__$1);{
var G__20387 = cljs.core.chunk_rest.call(null,seq__18315_20385__$1);
var G__20388 = c__11010__auto___20386;
var G__20389 = cljs.core.count.call(null,c__11010__auto___20386);
var G__20390 = 0;
seq__18315_20375 = G__20387;
chunk__18316_20376 = G__20388;
count__18317_20377 = G__20389;
i__18318_20378 = G__20390;
continue;
}
} else
{var arg__11642__auto___20391 = cljs.core.first.call(null,seq__18315_20385__$1);a__11641__auto__.push(arg__11642__auto___20391);
{
var G__20392 = cljs.core.next.call(null,seq__18315_20385__$1);
var G__20393 = null;
var G__20394 = 0;
var G__20395 = 0;
seq__18315_20375 = G__20392;
chunk__18316_20376 = G__20393;
count__18317_20377 = G__20394;
i__18318_20378 = G__20395;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__11641__auto__);
};
var ruby = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__11640__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__20396){
var args__11640__auto__ = cljs.core.seq(arglist__20396);
return ruby__delegate(args__11640__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18323_20397 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18324_20398 = null;var count__18325_20399 = 0;var i__18326_20400 = 0;while(true){
if((i__18326_20400 < count__18325_20399))
{var arg__11642__auto___20401 = cljs.core._nth.call(null,chunk__18324_20398,i__18326_20400);a__11641__auto__.push(arg__11642__auto___20401);
{
var G__20402 = seq__18323_20397;
var G__20403 = chunk__18324_20398;
var G__20404 = count__18325_20399;
var G__20405 = (i__18326_20400 + 1);
seq__18323_20397 = G__20402;
chunk__18324_20398 = G__20403;
count__18325_20399 = G__20404;
i__18326_20400 = G__20405;
continue;
}
} else
{var temp__4092__auto___20406 = cljs.core.seq.call(null,seq__18323_20397);if(temp__4092__auto___20406)
{var seq__18323_20407__$1 = temp__4092__auto___20406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18323_20407__$1))
{var c__11010__auto___20408 = cljs.core.chunk_first.call(null,seq__18323_20407__$1);{
var G__20409 = cljs.core.chunk_rest.call(null,seq__18323_20407__$1);
var G__20410 = c__11010__auto___20408;
var G__20411 = cljs.core.count.call(null,c__11010__auto___20408);
var G__20412 = 0;
seq__18323_20397 = G__20409;
chunk__18324_20398 = G__20410;
count__18325_20399 = G__20411;
i__18326_20400 = G__20412;
continue;
}
} else
{var arg__11642__auto___20413 = cljs.core.first.call(null,seq__18323_20407__$1);a__11641__auto__.push(arg__11642__auto___20413);
{
var G__20414 = cljs.core.next.call(null,seq__18323_20407__$1);
var G__20415 = null;
var G__20416 = 0;
var G__20417 = 0;
seq__18323_20397 = G__20414;
chunk__18324_20398 = G__20415;
count__18325_20399 = G__20416;
i__18326_20400 = G__20417;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__11641__auto__);
};
var s = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__11640__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__20418){
var args__11640__auto__ = cljs.core.seq(arglist__20418);
return s__delegate(args__11640__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18331_20419 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18332_20420 = null;var count__18333_20421 = 0;var i__18334_20422 = 0;while(true){
if((i__18334_20422 < count__18333_20421))
{var arg__11642__auto___20423 = cljs.core._nth.call(null,chunk__18332_20420,i__18334_20422);a__11641__auto__.push(arg__11642__auto___20423);
{
var G__20424 = seq__18331_20419;
var G__20425 = chunk__18332_20420;
var G__20426 = count__18333_20421;
var G__20427 = (i__18334_20422 + 1);
seq__18331_20419 = G__20424;
chunk__18332_20420 = G__20425;
count__18333_20421 = G__20426;
i__18334_20422 = G__20427;
continue;
}
} else
{var temp__4092__auto___20428 = cljs.core.seq.call(null,seq__18331_20419);if(temp__4092__auto___20428)
{var seq__18331_20429__$1 = temp__4092__auto___20428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18331_20429__$1))
{var c__11010__auto___20430 = cljs.core.chunk_first.call(null,seq__18331_20429__$1);{
var G__20431 = cljs.core.chunk_rest.call(null,seq__18331_20429__$1);
var G__20432 = c__11010__auto___20430;
var G__20433 = cljs.core.count.call(null,c__11010__auto___20430);
var G__20434 = 0;
seq__18331_20419 = G__20431;
chunk__18332_20420 = G__20432;
count__18333_20421 = G__20433;
i__18334_20422 = G__20434;
continue;
}
} else
{var arg__11642__auto___20435 = cljs.core.first.call(null,seq__18331_20429__$1);a__11641__auto__.push(arg__11642__auto___20435);
{
var G__20436 = cljs.core.next.call(null,seq__18331_20429__$1);
var G__20437 = null;
var G__20438 = 0;
var G__20439 = 0;
seq__18331_20419 = G__20436;
chunk__18332_20420 = G__20437;
count__18333_20421 = G__20438;
i__18334_20422 = G__20439;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__11641__auto__);
};
var samp = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__11640__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__20440){
var args__11640__auto__ = cljs.core.seq(arglist__20440);
return samp__delegate(args__11640__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18339_20441 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18340_20442 = null;var count__18341_20443 = 0;var i__18342_20444 = 0;while(true){
if((i__18342_20444 < count__18341_20443))
{var arg__11642__auto___20445 = cljs.core._nth.call(null,chunk__18340_20442,i__18342_20444);a__11641__auto__.push(arg__11642__auto___20445);
{
var G__20446 = seq__18339_20441;
var G__20447 = chunk__18340_20442;
var G__20448 = count__18341_20443;
var G__20449 = (i__18342_20444 + 1);
seq__18339_20441 = G__20446;
chunk__18340_20442 = G__20447;
count__18341_20443 = G__20448;
i__18342_20444 = G__20449;
continue;
}
} else
{var temp__4092__auto___20450 = cljs.core.seq.call(null,seq__18339_20441);if(temp__4092__auto___20450)
{var seq__18339_20451__$1 = temp__4092__auto___20450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18339_20451__$1))
{var c__11010__auto___20452 = cljs.core.chunk_first.call(null,seq__18339_20451__$1);{
var G__20453 = cljs.core.chunk_rest.call(null,seq__18339_20451__$1);
var G__20454 = c__11010__auto___20452;
var G__20455 = cljs.core.count.call(null,c__11010__auto___20452);
var G__20456 = 0;
seq__18339_20441 = G__20453;
chunk__18340_20442 = G__20454;
count__18341_20443 = G__20455;
i__18342_20444 = G__20456;
continue;
}
} else
{var arg__11642__auto___20457 = cljs.core.first.call(null,seq__18339_20451__$1);a__11641__auto__.push(arg__11642__auto___20457);
{
var G__20458 = cljs.core.next.call(null,seq__18339_20451__$1);
var G__20459 = null;
var G__20460 = 0;
var G__20461 = 0;
seq__18339_20441 = G__20458;
chunk__18340_20442 = G__20459;
count__18341_20443 = G__20460;
i__18342_20444 = G__20461;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__11641__auto__);
};
var script = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__11640__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__20462){
var args__11640__auto__ = cljs.core.seq(arglist__20462);
return script__delegate(args__11640__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18347_20463 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18348_20464 = null;var count__18349_20465 = 0;var i__18350_20466 = 0;while(true){
if((i__18350_20466 < count__18349_20465))
{var arg__11642__auto___20467 = cljs.core._nth.call(null,chunk__18348_20464,i__18350_20466);a__11641__auto__.push(arg__11642__auto___20467);
{
var G__20468 = seq__18347_20463;
var G__20469 = chunk__18348_20464;
var G__20470 = count__18349_20465;
var G__20471 = (i__18350_20466 + 1);
seq__18347_20463 = G__20468;
chunk__18348_20464 = G__20469;
count__18349_20465 = G__20470;
i__18350_20466 = G__20471;
continue;
}
} else
{var temp__4092__auto___20472 = cljs.core.seq.call(null,seq__18347_20463);if(temp__4092__auto___20472)
{var seq__18347_20473__$1 = temp__4092__auto___20472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18347_20473__$1))
{var c__11010__auto___20474 = cljs.core.chunk_first.call(null,seq__18347_20473__$1);{
var G__20475 = cljs.core.chunk_rest.call(null,seq__18347_20473__$1);
var G__20476 = c__11010__auto___20474;
var G__20477 = cljs.core.count.call(null,c__11010__auto___20474);
var G__20478 = 0;
seq__18347_20463 = G__20475;
chunk__18348_20464 = G__20476;
count__18349_20465 = G__20477;
i__18350_20466 = G__20478;
continue;
}
} else
{var arg__11642__auto___20479 = cljs.core.first.call(null,seq__18347_20473__$1);a__11641__auto__.push(arg__11642__auto___20479);
{
var G__20480 = cljs.core.next.call(null,seq__18347_20473__$1);
var G__20481 = null;
var G__20482 = 0;
var G__20483 = 0;
seq__18347_20463 = G__20480;
chunk__18348_20464 = G__20481;
count__18349_20465 = G__20482;
i__18350_20466 = G__20483;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__11641__auto__);
};
var section = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__11640__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__20484){
var args__11640__auto__ = cljs.core.seq(arglist__20484);
return section__delegate(args__11640__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18355_20485 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18356_20486 = null;var count__18357_20487 = 0;var i__18358_20488 = 0;while(true){
if((i__18358_20488 < count__18357_20487))
{var arg__11642__auto___20489 = cljs.core._nth.call(null,chunk__18356_20486,i__18358_20488);a__11641__auto__.push(arg__11642__auto___20489);
{
var G__20490 = seq__18355_20485;
var G__20491 = chunk__18356_20486;
var G__20492 = count__18357_20487;
var G__20493 = (i__18358_20488 + 1);
seq__18355_20485 = G__20490;
chunk__18356_20486 = G__20491;
count__18357_20487 = G__20492;
i__18358_20488 = G__20493;
continue;
}
} else
{var temp__4092__auto___20494 = cljs.core.seq.call(null,seq__18355_20485);if(temp__4092__auto___20494)
{var seq__18355_20495__$1 = temp__4092__auto___20494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18355_20495__$1))
{var c__11010__auto___20496 = cljs.core.chunk_first.call(null,seq__18355_20495__$1);{
var G__20497 = cljs.core.chunk_rest.call(null,seq__18355_20495__$1);
var G__20498 = c__11010__auto___20496;
var G__20499 = cljs.core.count.call(null,c__11010__auto___20496);
var G__20500 = 0;
seq__18355_20485 = G__20497;
chunk__18356_20486 = G__20498;
count__18357_20487 = G__20499;
i__18358_20488 = G__20500;
continue;
}
} else
{var arg__11642__auto___20501 = cljs.core.first.call(null,seq__18355_20495__$1);a__11641__auto__.push(arg__11642__auto___20501);
{
var G__20502 = cljs.core.next.call(null,seq__18355_20495__$1);
var G__20503 = null;
var G__20504 = 0;
var G__20505 = 0;
seq__18355_20485 = G__20502;
chunk__18356_20486 = G__20503;
count__18357_20487 = G__20504;
i__18358_20488 = G__20505;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__11641__auto__);
};
var select = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__11640__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__20506){
var args__11640__auto__ = cljs.core.seq(arglist__20506);
return select__delegate(args__11640__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18363_20507 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18364_20508 = null;var count__18365_20509 = 0;var i__18366_20510 = 0;while(true){
if((i__18366_20510 < count__18365_20509))
{var arg__11642__auto___20511 = cljs.core._nth.call(null,chunk__18364_20508,i__18366_20510);a__11641__auto__.push(arg__11642__auto___20511);
{
var G__20512 = seq__18363_20507;
var G__20513 = chunk__18364_20508;
var G__20514 = count__18365_20509;
var G__20515 = (i__18366_20510 + 1);
seq__18363_20507 = G__20512;
chunk__18364_20508 = G__20513;
count__18365_20509 = G__20514;
i__18366_20510 = G__20515;
continue;
}
} else
{var temp__4092__auto___20516 = cljs.core.seq.call(null,seq__18363_20507);if(temp__4092__auto___20516)
{var seq__18363_20517__$1 = temp__4092__auto___20516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18363_20517__$1))
{var c__11010__auto___20518 = cljs.core.chunk_first.call(null,seq__18363_20517__$1);{
var G__20519 = cljs.core.chunk_rest.call(null,seq__18363_20517__$1);
var G__20520 = c__11010__auto___20518;
var G__20521 = cljs.core.count.call(null,c__11010__auto___20518);
var G__20522 = 0;
seq__18363_20507 = G__20519;
chunk__18364_20508 = G__20520;
count__18365_20509 = G__20521;
i__18366_20510 = G__20522;
continue;
}
} else
{var arg__11642__auto___20523 = cljs.core.first.call(null,seq__18363_20517__$1);a__11641__auto__.push(arg__11642__auto___20523);
{
var G__20524 = cljs.core.next.call(null,seq__18363_20517__$1);
var G__20525 = null;
var G__20526 = 0;
var G__20527 = 0;
seq__18363_20507 = G__20524;
chunk__18364_20508 = G__20525;
count__18365_20509 = G__20526;
i__18366_20510 = G__20527;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__11641__auto__);
};
var small = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__11640__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__20528){
var args__11640__auto__ = cljs.core.seq(arglist__20528);
return small__delegate(args__11640__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18371_20529 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18372_20530 = null;var count__18373_20531 = 0;var i__18374_20532 = 0;while(true){
if((i__18374_20532 < count__18373_20531))
{var arg__11642__auto___20533 = cljs.core._nth.call(null,chunk__18372_20530,i__18374_20532);a__11641__auto__.push(arg__11642__auto___20533);
{
var G__20534 = seq__18371_20529;
var G__20535 = chunk__18372_20530;
var G__20536 = count__18373_20531;
var G__20537 = (i__18374_20532 + 1);
seq__18371_20529 = G__20534;
chunk__18372_20530 = G__20535;
count__18373_20531 = G__20536;
i__18374_20532 = G__20537;
continue;
}
} else
{var temp__4092__auto___20538 = cljs.core.seq.call(null,seq__18371_20529);if(temp__4092__auto___20538)
{var seq__18371_20539__$1 = temp__4092__auto___20538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18371_20539__$1))
{var c__11010__auto___20540 = cljs.core.chunk_first.call(null,seq__18371_20539__$1);{
var G__20541 = cljs.core.chunk_rest.call(null,seq__18371_20539__$1);
var G__20542 = c__11010__auto___20540;
var G__20543 = cljs.core.count.call(null,c__11010__auto___20540);
var G__20544 = 0;
seq__18371_20529 = G__20541;
chunk__18372_20530 = G__20542;
count__18373_20531 = G__20543;
i__18374_20532 = G__20544;
continue;
}
} else
{var arg__11642__auto___20545 = cljs.core.first.call(null,seq__18371_20539__$1);a__11641__auto__.push(arg__11642__auto___20545);
{
var G__20546 = cljs.core.next.call(null,seq__18371_20539__$1);
var G__20547 = null;
var G__20548 = 0;
var G__20549 = 0;
seq__18371_20529 = G__20546;
chunk__18372_20530 = G__20547;
count__18373_20531 = G__20548;
i__18374_20532 = G__20549;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__11641__auto__);
};
var source = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__11640__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__20550){
var args__11640__auto__ = cljs.core.seq(arglist__20550);
return source__delegate(args__11640__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18379_20551 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18380_20552 = null;var count__18381_20553 = 0;var i__18382_20554 = 0;while(true){
if((i__18382_20554 < count__18381_20553))
{var arg__11642__auto___20555 = cljs.core._nth.call(null,chunk__18380_20552,i__18382_20554);a__11641__auto__.push(arg__11642__auto___20555);
{
var G__20556 = seq__18379_20551;
var G__20557 = chunk__18380_20552;
var G__20558 = count__18381_20553;
var G__20559 = (i__18382_20554 + 1);
seq__18379_20551 = G__20556;
chunk__18380_20552 = G__20557;
count__18381_20553 = G__20558;
i__18382_20554 = G__20559;
continue;
}
} else
{var temp__4092__auto___20560 = cljs.core.seq.call(null,seq__18379_20551);if(temp__4092__auto___20560)
{var seq__18379_20561__$1 = temp__4092__auto___20560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18379_20561__$1))
{var c__11010__auto___20562 = cljs.core.chunk_first.call(null,seq__18379_20561__$1);{
var G__20563 = cljs.core.chunk_rest.call(null,seq__18379_20561__$1);
var G__20564 = c__11010__auto___20562;
var G__20565 = cljs.core.count.call(null,c__11010__auto___20562);
var G__20566 = 0;
seq__18379_20551 = G__20563;
chunk__18380_20552 = G__20564;
count__18381_20553 = G__20565;
i__18382_20554 = G__20566;
continue;
}
} else
{var arg__11642__auto___20567 = cljs.core.first.call(null,seq__18379_20561__$1);a__11641__auto__.push(arg__11642__auto___20567);
{
var G__20568 = cljs.core.next.call(null,seq__18379_20561__$1);
var G__20569 = null;
var G__20570 = 0;
var G__20571 = 0;
seq__18379_20551 = G__20568;
chunk__18380_20552 = G__20569;
count__18381_20553 = G__20570;
i__18382_20554 = G__20571;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__11641__auto__);
};
var span = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__11640__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__20572){
var args__11640__auto__ = cljs.core.seq(arglist__20572);
return span__delegate(args__11640__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18387_20573 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18388_20574 = null;var count__18389_20575 = 0;var i__18390_20576 = 0;while(true){
if((i__18390_20576 < count__18389_20575))
{var arg__11642__auto___20577 = cljs.core._nth.call(null,chunk__18388_20574,i__18390_20576);a__11641__auto__.push(arg__11642__auto___20577);
{
var G__20578 = seq__18387_20573;
var G__20579 = chunk__18388_20574;
var G__20580 = count__18389_20575;
var G__20581 = (i__18390_20576 + 1);
seq__18387_20573 = G__20578;
chunk__18388_20574 = G__20579;
count__18389_20575 = G__20580;
i__18390_20576 = G__20581;
continue;
}
} else
{var temp__4092__auto___20582 = cljs.core.seq.call(null,seq__18387_20573);if(temp__4092__auto___20582)
{var seq__18387_20583__$1 = temp__4092__auto___20582;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18387_20583__$1))
{var c__11010__auto___20584 = cljs.core.chunk_first.call(null,seq__18387_20583__$1);{
var G__20585 = cljs.core.chunk_rest.call(null,seq__18387_20583__$1);
var G__20586 = c__11010__auto___20584;
var G__20587 = cljs.core.count.call(null,c__11010__auto___20584);
var G__20588 = 0;
seq__18387_20573 = G__20585;
chunk__18388_20574 = G__20586;
count__18389_20575 = G__20587;
i__18390_20576 = G__20588;
continue;
}
} else
{var arg__11642__auto___20589 = cljs.core.first.call(null,seq__18387_20583__$1);a__11641__auto__.push(arg__11642__auto___20589);
{
var G__20590 = cljs.core.next.call(null,seq__18387_20583__$1);
var G__20591 = null;
var G__20592 = 0;
var G__20593 = 0;
seq__18387_20573 = G__20590;
chunk__18388_20574 = G__20591;
count__18389_20575 = G__20592;
i__18390_20576 = G__20593;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__11641__auto__);
};
var strong = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__11640__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__20594){
var args__11640__auto__ = cljs.core.seq(arglist__20594);
return strong__delegate(args__11640__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18395_20595 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18396_20596 = null;var count__18397_20597 = 0;var i__18398_20598 = 0;while(true){
if((i__18398_20598 < count__18397_20597))
{var arg__11642__auto___20599 = cljs.core._nth.call(null,chunk__18396_20596,i__18398_20598);a__11641__auto__.push(arg__11642__auto___20599);
{
var G__20600 = seq__18395_20595;
var G__20601 = chunk__18396_20596;
var G__20602 = count__18397_20597;
var G__20603 = (i__18398_20598 + 1);
seq__18395_20595 = G__20600;
chunk__18396_20596 = G__20601;
count__18397_20597 = G__20602;
i__18398_20598 = G__20603;
continue;
}
} else
{var temp__4092__auto___20604 = cljs.core.seq.call(null,seq__18395_20595);if(temp__4092__auto___20604)
{var seq__18395_20605__$1 = temp__4092__auto___20604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18395_20605__$1))
{var c__11010__auto___20606 = cljs.core.chunk_first.call(null,seq__18395_20605__$1);{
var G__20607 = cljs.core.chunk_rest.call(null,seq__18395_20605__$1);
var G__20608 = c__11010__auto___20606;
var G__20609 = cljs.core.count.call(null,c__11010__auto___20606);
var G__20610 = 0;
seq__18395_20595 = G__20607;
chunk__18396_20596 = G__20608;
count__18397_20597 = G__20609;
i__18398_20598 = G__20610;
continue;
}
} else
{var arg__11642__auto___20611 = cljs.core.first.call(null,seq__18395_20605__$1);a__11641__auto__.push(arg__11642__auto___20611);
{
var G__20612 = cljs.core.next.call(null,seq__18395_20605__$1);
var G__20613 = null;
var G__20614 = 0;
var G__20615 = 0;
seq__18395_20595 = G__20612;
chunk__18396_20596 = G__20613;
count__18397_20597 = G__20614;
i__18398_20598 = G__20615;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__11641__auto__);
};
var style = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__11640__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__20616){
var args__11640__auto__ = cljs.core.seq(arglist__20616);
return style__delegate(args__11640__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18403_20617 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18404_20618 = null;var count__18405_20619 = 0;var i__18406_20620 = 0;while(true){
if((i__18406_20620 < count__18405_20619))
{var arg__11642__auto___20621 = cljs.core._nth.call(null,chunk__18404_20618,i__18406_20620);a__11641__auto__.push(arg__11642__auto___20621);
{
var G__20622 = seq__18403_20617;
var G__20623 = chunk__18404_20618;
var G__20624 = count__18405_20619;
var G__20625 = (i__18406_20620 + 1);
seq__18403_20617 = G__20622;
chunk__18404_20618 = G__20623;
count__18405_20619 = G__20624;
i__18406_20620 = G__20625;
continue;
}
} else
{var temp__4092__auto___20626 = cljs.core.seq.call(null,seq__18403_20617);if(temp__4092__auto___20626)
{var seq__18403_20627__$1 = temp__4092__auto___20626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18403_20627__$1))
{var c__11010__auto___20628 = cljs.core.chunk_first.call(null,seq__18403_20627__$1);{
var G__20629 = cljs.core.chunk_rest.call(null,seq__18403_20627__$1);
var G__20630 = c__11010__auto___20628;
var G__20631 = cljs.core.count.call(null,c__11010__auto___20628);
var G__20632 = 0;
seq__18403_20617 = G__20629;
chunk__18404_20618 = G__20630;
count__18405_20619 = G__20631;
i__18406_20620 = G__20632;
continue;
}
} else
{var arg__11642__auto___20633 = cljs.core.first.call(null,seq__18403_20627__$1);a__11641__auto__.push(arg__11642__auto___20633);
{
var G__20634 = cljs.core.next.call(null,seq__18403_20627__$1);
var G__20635 = null;
var G__20636 = 0;
var G__20637 = 0;
seq__18403_20617 = G__20634;
chunk__18404_20618 = G__20635;
count__18405_20619 = G__20636;
i__18406_20620 = G__20637;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__11641__auto__);
};
var sub = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__11640__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__20638){
var args__11640__auto__ = cljs.core.seq(arglist__20638);
return sub__delegate(args__11640__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18411_20639 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18412_20640 = null;var count__18413_20641 = 0;var i__18414_20642 = 0;while(true){
if((i__18414_20642 < count__18413_20641))
{var arg__11642__auto___20643 = cljs.core._nth.call(null,chunk__18412_20640,i__18414_20642);a__11641__auto__.push(arg__11642__auto___20643);
{
var G__20644 = seq__18411_20639;
var G__20645 = chunk__18412_20640;
var G__20646 = count__18413_20641;
var G__20647 = (i__18414_20642 + 1);
seq__18411_20639 = G__20644;
chunk__18412_20640 = G__20645;
count__18413_20641 = G__20646;
i__18414_20642 = G__20647;
continue;
}
} else
{var temp__4092__auto___20648 = cljs.core.seq.call(null,seq__18411_20639);if(temp__4092__auto___20648)
{var seq__18411_20649__$1 = temp__4092__auto___20648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18411_20649__$1))
{var c__11010__auto___20650 = cljs.core.chunk_first.call(null,seq__18411_20649__$1);{
var G__20651 = cljs.core.chunk_rest.call(null,seq__18411_20649__$1);
var G__20652 = c__11010__auto___20650;
var G__20653 = cljs.core.count.call(null,c__11010__auto___20650);
var G__20654 = 0;
seq__18411_20639 = G__20651;
chunk__18412_20640 = G__20652;
count__18413_20641 = G__20653;
i__18414_20642 = G__20654;
continue;
}
} else
{var arg__11642__auto___20655 = cljs.core.first.call(null,seq__18411_20649__$1);a__11641__auto__.push(arg__11642__auto___20655);
{
var G__20656 = cljs.core.next.call(null,seq__18411_20649__$1);
var G__20657 = null;
var G__20658 = 0;
var G__20659 = 0;
seq__18411_20639 = G__20656;
chunk__18412_20640 = G__20657;
count__18413_20641 = G__20658;
i__18414_20642 = G__20659;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__11641__auto__);
};
var summary = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__11640__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__20660){
var args__11640__auto__ = cljs.core.seq(arglist__20660);
return summary__delegate(args__11640__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18419_20661 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18420_20662 = null;var count__18421_20663 = 0;var i__18422_20664 = 0;while(true){
if((i__18422_20664 < count__18421_20663))
{var arg__11642__auto___20665 = cljs.core._nth.call(null,chunk__18420_20662,i__18422_20664);a__11641__auto__.push(arg__11642__auto___20665);
{
var G__20666 = seq__18419_20661;
var G__20667 = chunk__18420_20662;
var G__20668 = count__18421_20663;
var G__20669 = (i__18422_20664 + 1);
seq__18419_20661 = G__20666;
chunk__18420_20662 = G__20667;
count__18421_20663 = G__20668;
i__18422_20664 = G__20669;
continue;
}
} else
{var temp__4092__auto___20670 = cljs.core.seq.call(null,seq__18419_20661);if(temp__4092__auto___20670)
{var seq__18419_20671__$1 = temp__4092__auto___20670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18419_20671__$1))
{var c__11010__auto___20672 = cljs.core.chunk_first.call(null,seq__18419_20671__$1);{
var G__20673 = cljs.core.chunk_rest.call(null,seq__18419_20671__$1);
var G__20674 = c__11010__auto___20672;
var G__20675 = cljs.core.count.call(null,c__11010__auto___20672);
var G__20676 = 0;
seq__18419_20661 = G__20673;
chunk__18420_20662 = G__20674;
count__18421_20663 = G__20675;
i__18422_20664 = G__20676;
continue;
}
} else
{var arg__11642__auto___20677 = cljs.core.first.call(null,seq__18419_20671__$1);a__11641__auto__.push(arg__11642__auto___20677);
{
var G__20678 = cljs.core.next.call(null,seq__18419_20671__$1);
var G__20679 = null;
var G__20680 = 0;
var G__20681 = 0;
seq__18419_20661 = G__20678;
chunk__18420_20662 = G__20679;
count__18421_20663 = G__20680;
i__18422_20664 = G__20681;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__11641__auto__);
};
var sup = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__11640__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__20682){
var args__11640__auto__ = cljs.core.seq(arglist__20682);
return sup__delegate(args__11640__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18427_20683 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18428_20684 = null;var count__18429_20685 = 0;var i__18430_20686 = 0;while(true){
if((i__18430_20686 < count__18429_20685))
{var arg__11642__auto___20687 = cljs.core._nth.call(null,chunk__18428_20684,i__18430_20686);a__11641__auto__.push(arg__11642__auto___20687);
{
var G__20688 = seq__18427_20683;
var G__20689 = chunk__18428_20684;
var G__20690 = count__18429_20685;
var G__20691 = (i__18430_20686 + 1);
seq__18427_20683 = G__20688;
chunk__18428_20684 = G__20689;
count__18429_20685 = G__20690;
i__18430_20686 = G__20691;
continue;
}
} else
{var temp__4092__auto___20692 = cljs.core.seq.call(null,seq__18427_20683);if(temp__4092__auto___20692)
{var seq__18427_20693__$1 = temp__4092__auto___20692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18427_20693__$1))
{var c__11010__auto___20694 = cljs.core.chunk_first.call(null,seq__18427_20693__$1);{
var G__20695 = cljs.core.chunk_rest.call(null,seq__18427_20693__$1);
var G__20696 = c__11010__auto___20694;
var G__20697 = cljs.core.count.call(null,c__11010__auto___20694);
var G__20698 = 0;
seq__18427_20683 = G__20695;
chunk__18428_20684 = G__20696;
count__18429_20685 = G__20697;
i__18430_20686 = G__20698;
continue;
}
} else
{var arg__11642__auto___20699 = cljs.core.first.call(null,seq__18427_20693__$1);a__11641__auto__.push(arg__11642__auto___20699);
{
var G__20700 = cljs.core.next.call(null,seq__18427_20693__$1);
var G__20701 = null;
var G__20702 = 0;
var G__20703 = 0;
seq__18427_20683 = G__20700;
chunk__18428_20684 = G__20701;
count__18429_20685 = G__20702;
i__18430_20686 = G__20703;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__11641__auto__);
};
var table = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__11640__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__20704){
var args__11640__auto__ = cljs.core.seq(arglist__20704);
return table__delegate(args__11640__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18435_20705 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18436_20706 = null;var count__18437_20707 = 0;var i__18438_20708 = 0;while(true){
if((i__18438_20708 < count__18437_20707))
{var arg__11642__auto___20709 = cljs.core._nth.call(null,chunk__18436_20706,i__18438_20708);a__11641__auto__.push(arg__11642__auto___20709);
{
var G__20710 = seq__18435_20705;
var G__20711 = chunk__18436_20706;
var G__20712 = count__18437_20707;
var G__20713 = (i__18438_20708 + 1);
seq__18435_20705 = G__20710;
chunk__18436_20706 = G__20711;
count__18437_20707 = G__20712;
i__18438_20708 = G__20713;
continue;
}
} else
{var temp__4092__auto___20714 = cljs.core.seq.call(null,seq__18435_20705);if(temp__4092__auto___20714)
{var seq__18435_20715__$1 = temp__4092__auto___20714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18435_20715__$1))
{var c__11010__auto___20716 = cljs.core.chunk_first.call(null,seq__18435_20715__$1);{
var G__20717 = cljs.core.chunk_rest.call(null,seq__18435_20715__$1);
var G__20718 = c__11010__auto___20716;
var G__20719 = cljs.core.count.call(null,c__11010__auto___20716);
var G__20720 = 0;
seq__18435_20705 = G__20717;
chunk__18436_20706 = G__20718;
count__18437_20707 = G__20719;
i__18438_20708 = G__20720;
continue;
}
} else
{var arg__11642__auto___20721 = cljs.core.first.call(null,seq__18435_20715__$1);a__11641__auto__.push(arg__11642__auto___20721);
{
var G__20722 = cljs.core.next.call(null,seq__18435_20715__$1);
var G__20723 = null;
var G__20724 = 0;
var G__20725 = 0;
seq__18435_20705 = G__20722;
chunk__18436_20706 = G__20723;
count__18437_20707 = G__20724;
i__18438_20708 = G__20725;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__11641__auto__);
};
var tbody = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__11640__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__20726){
var args__11640__auto__ = cljs.core.seq(arglist__20726);
return tbody__delegate(args__11640__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18443_20727 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18444_20728 = null;var count__18445_20729 = 0;var i__18446_20730 = 0;while(true){
if((i__18446_20730 < count__18445_20729))
{var arg__11642__auto___20731 = cljs.core._nth.call(null,chunk__18444_20728,i__18446_20730);a__11641__auto__.push(arg__11642__auto___20731);
{
var G__20732 = seq__18443_20727;
var G__20733 = chunk__18444_20728;
var G__20734 = count__18445_20729;
var G__20735 = (i__18446_20730 + 1);
seq__18443_20727 = G__20732;
chunk__18444_20728 = G__20733;
count__18445_20729 = G__20734;
i__18446_20730 = G__20735;
continue;
}
} else
{var temp__4092__auto___20736 = cljs.core.seq.call(null,seq__18443_20727);if(temp__4092__auto___20736)
{var seq__18443_20737__$1 = temp__4092__auto___20736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18443_20737__$1))
{var c__11010__auto___20738 = cljs.core.chunk_first.call(null,seq__18443_20737__$1);{
var G__20739 = cljs.core.chunk_rest.call(null,seq__18443_20737__$1);
var G__20740 = c__11010__auto___20738;
var G__20741 = cljs.core.count.call(null,c__11010__auto___20738);
var G__20742 = 0;
seq__18443_20727 = G__20739;
chunk__18444_20728 = G__20740;
count__18445_20729 = G__20741;
i__18446_20730 = G__20742;
continue;
}
} else
{var arg__11642__auto___20743 = cljs.core.first.call(null,seq__18443_20737__$1);a__11641__auto__.push(arg__11642__auto___20743);
{
var G__20744 = cljs.core.next.call(null,seq__18443_20737__$1);
var G__20745 = null;
var G__20746 = 0;
var G__20747 = 0;
seq__18443_20727 = G__20744;
chunk__18444_20728 = G__20745;
count__18445_20729 = G__20746;
i__18446_20730 = G__20747;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__11641__auto__);
};
var td = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__11640__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__20748){
var args__11640__auto__ = cljs.core.seq(arglist__20748);
return td__delegate(args__11640__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18451_20749 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18452_20750 = null;var count__18453_20751 = 0;var i__18454_20752 = 0;while(true){
if((i__18454_20752 < count__18453_20751))
{var arg__11642__auto___20753 = cljs.core._nth.call(null,chunk__18452_20750,i__18454_20752);a__11641__auto__.push(arg__11642__auto___20753);
{
var G__20754 = seq__18451_20749;
var G__20755 = chunk__18452_20750;
var G__20756 = count__18453_20751;
var G__20757 = (i__18454_20752 + 1);
seq__18451_20749 = G__20754;
chunk__18452_20750 = G__20755;
count__18453_20751 = G__20756;
i__18454_20752 = G__20757;
continue;
}
} else
{var temp__4092__auto___20758 = cljs.core.seq.call(null,seq__18451_20749);if(temp__4092__auto___20758)
{var seq__18451_20759__$1 = temp__4092__auto___20758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18451_20759__$1))
{var c__11010__auto___20760 = cljs.core.chunk_first.call(null,seq__18451_20759__$1);{
var G__20761 = cljs.core.chunk_rest.call(null,seq__18451_20759__$1);
var G__20762 = c__11010__auto___20760;
var G__20763 = cljs.core.count.call(null,c__11010__auto___20760);
var G__20764 = 0;
seq__18451_20749 = G__20761;
chunk__18452_20750 = G__20762;
count__18453_20751 = G__20763;
i__18454_20752 = G__20764;
continue;
}
} else
{var arg__11642__auto___20765 = cljs.core.first.call(null,seq__18451_20759__$1);a__11641__auto__.push(arg__11642__auto___20765);
{
var G__20766 = cljs.core.next.call(null,seq__18451_20759__$1);
var G__20767 = null;
var G__20768 = 0;
var G__20769 = 0;
seq__18451_20749 = G__20766;
chunk__18452_20750 = G__20767;
count__18453_20751 = G__20768;
i__18454_20752 = G__20769;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__11641__auto__);
};
var textarea = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__11640__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__20770){
var args__11640__auto__ = cljs.core.seq(arglist__20770);
return textarea__delegate(args__11640__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18459_20771 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18460_20772 = null;var count__18461_20773 = 0;var i__18462_20774 = 0;while(true){
if((i__18462_20774 < count__18461_20773))
{var arg__11642__auto___20775 = cljs.core._nth.call(null,chunk__18460_20772,i__18462_20774);a__11641__auto__.push(arg__11642__auto___20775);
{
var G__20776 = seq__18459_20771;
var G__20777 = chunk__18460_20772;
var G__20778 = count__18461_20773;
var G__20779 = (i__18462_20774 + 1);
seq__18459_20771 = G__20776;
chunk__18460_20772 = G__20777;
count__18461_20773 = G__20778;
i__18462_20774 = G__20779;
continue;
}
} else
{var temp__4092__auto___20780 = cljs.core.seq.call(null,seq__18459_20771);if(temp__4092__auto___20780)
{var seq__18459_20781__$1 = temp__4092__auto___20780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18459_20781__$1))
{var c__11010__auto___20782 = cljs.core.chunk_first.call(null,seq__18459_20781__$1);{
var G__20783 = cljs.core.chunk_rest.call(null,seq__18459_20781__$1);
var G__20784 = c__11010__auto___20782;
var G__20785 = cljs.core.count.call(null,c__11010__auto___20782);
var G__20786 = 0;
seq__18459_20771 = G__20783;
chunk__18460_20772 = G__20784;
count__18461_20773 = G__20785;
i__18462_20774 = G__20786;
continue;
}
} else
{var arg__11642__auto___20787 = cljs.core.first.call(null,seq__18459_20781__$1);a__11641__auto__.push(arg__11642__auto___20787);
{
var G__20788 = cljs.core.next.call(null,seq__18459_20781__$1);
var G__20789 = null;
var G__20790 = 0;
var G__20791 = 0;
seq__18459_20771 = G__20788;
chunk__18460_20772 = G__20789;
count__18461_20773 = G__20790;
i__18462_20774 = G__20791;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__11641__auto__);
};
var tfoot = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__11640__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__20792){
var args__11640__auto__ = cljs.core.seq(arglist__20792);
return tfoot__delegate(args__11640__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18467_20793 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18468_20794 = null;var count__18469_20795 = 0;var i__18470_20796 = 0;while(true){
if((i__18470_20796 < count__18469_20795))
{var arg__11642__auto___20797 = cljs.core._nth.call(null,chunk__18468_20794,i__18470_20796);a__11641__auto__.push(arg__11642__auto___20797);
{
var G__20798 = seq__18467_20793;
var G__20799 = chunk__18468_20794;
var G__20800 = count__18469_20795;
var G__20801 = (i__18470_20796 + 1);
seq__18467_20793 = G__20798;
chunk__18468_20794 = G__20799;
count__18469_20795 = G__20800;
i__18470_20796 = G__20801;
continue;
}
} else
{var temp__4092__auto___20802 = cljs.core.seq.call(null,seq__18467_20793);if(temp__4092__auto___20802)
{var seq__18467_20803__$1 = temp__4092__auto___20802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18467_20803__$1))
{var c__11010__auto___20804 = cljs.core.chunk_first.call(null,seq__18467_20803__$1);{
var G__20805 = cljs.core.chunk_rest.call(null,seq__18467_20803__$1);
var G__20806 = c__11010__auto___20804;
var G__20807 = cljs.core.count.call(null,c__11010__auto___20804);
var G__20808 = 0;
seq__18467_20793 = G__20805;
chunk__18468_20794 = G__20806;
count__18469_20795 = G__20807;
i__18470_20796 = G__20808;
continue;
}
} else
{var arg__11642__auto___20809 = cljs.core.first.call(null,seq__18467_20803__$1);a__11641__auto__.push(arg__11642__auto___20809);
{
var G__20810 = cljs.core.next.call(null,seq__18467_20803__$1);
var G__20811 = null;
var G__20812 = 0;
var G__20813 = 0;
seq__18467_20793 = G__20810;
chunk__18468_20794 = G__20811;
count__18469_20795 = G__20812;
i__18470_20796 = G__20813;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__11641__auto__);
};
var th = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__11640__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__20814){
var args__11640__auto__ = cljs.core.seq(arglist__20814);
return th__delegate(args__11640__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18475_20815 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18476_20816 = null;var count__18477_20817 = 0;var i__18478_20818 = 0;while(true){
if((i__18478_20818 < count__18477_20817))
{var arg__11642__auto___20819 = cljs.core._nth.call(null,chunk__18476_20816,i__18478_20818);a__11641__auto__.push(arg__11642__auto___20819);
{
var G__20820 = seq__18475_20815;
var G__20821 = chunk__18476_20816;
var G__20822 = count__18477_20817;
var G__20823 = (i__18478_20818 + 1);
seq__18475_20815 = G__20820;
chunk__18476_20816 = G__20821;
count__18477_20817 = G__20822;
i__18478_20818 = G__20823;
continue;
}
} else
{var temp__4092__auto___20824 = cljs.core.seq.call(null,seq__18475_20815);if(temp__4092__auto___20824)
{var seq__18475_20825__$1 = temp__4092__auto___20824;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18475_20825__$1))
{var c__11010__auto___20826 = cljs.core.chunk_first.call(null,seq__18475_20825__$1);{
var G__20827 = cljs.core.chunk_rest.call(null,seq__18475_20825__$1);
var G__20828 = c__11010__auto___20826;
var G__20829 = cljs.core.count.call(null,c__11010__auto___20826);
var G__20830 = 0;
seq__18475_20815 = G__20827;
chunk__18476_20816 = G__20828;
count__18477_20817 = G__20829;
i__18478_20818 = G__20830;
continue;
}
} else
{var arg__11642__auto___20831 = cljs.core.first.call(null,seq__18475_20825__$1);a__11641__auto__.push(arg__11642__auto___20831);
{
var G__20832 = cljs.core.next.call(null,seq__18475_20825__$1);
var G__20833 = null;
var G__20834 = 0;
var G__20835 = 0;
seq__18475_20815 = G__20832;
chunk__18476_20816 = G__20833;
count__18477_20817 = G__20834;
i__18478_20818 = G__20835;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__11641__auto__);
};
var thead = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__11640__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__20836){
var args__11640__auto__ = cljs.core.seq(arglist__20836);
return thead__delegate(args__11640__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18483_20837 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18484_20838 = null;var count__18485_20839 = 0;var i__18486_20840 = 0;while(true){
if((i__18486_20840 < count__18485_20839))
{var arg__11642__auto___20841 = cljs.core._nth.call(null,chunk__18484_20838,i__18486_20840);a__11641__auto__.push(arg__11642__auto___20841);
{
var G__20842 = seq__18483_20837;
var G__20843 = chunk__18484_20838;
var G__20844 = count__18485_20839;
var G__20845 = (i__18486_20840 + 1);
seq__18483_20837 = G__20842;
chunk__18484_20838 = G__20843;
count__18485_20839 = G__20844;
i__18486_20840 = G__20845;
continue;
}
} else
{var temp__4092__auto___20846 = cljs.core.seq.call(null,seq__18483_20837);if(temp__4092__auto___20846)
{var seq__18483_20847__$1 = temp__4092__auto___20846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18483_20847__$1))
{var c__11010__auto___20848 = cljs.core.chunk_first.call(null,seq__18483_20847__$1);{
var G__20849 = cljs.core.chunk_rest.call(null,seq__18483_20847__$1);
var G__20850 = c__11010__auto___20848;
var G__20851 = cljs.core.count.call(null,c__11010__auto___20848);
var G__20852 = 0;
seq__18483_20837 = G__20849;
chunk__18484_20838 = G__20850;
count__18485_20839 = G__20851;
i__18486_20840 = G__20852;
continue;
}
} else
{var arg__11642__auto___20853 = cljs.core.first.call(null,seq__18483_20847__$1);a__11641__auto__.push(arg__11642__auto___20853);
{
var G__20854 = cljs.core.next.call(null,seq__18483_20847__$1);
var G__20855 = null;
var G__20856 = 0;
var G__20857 = 0;
seq__18483_20837 = G__20854;
chunk__18484_20838 = G__20855;
count__18485_20839 = G__20856;
i__18486_20840 = G__20857;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__11641__auto__);
};
var time = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__11640__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__20858){
var args__11640__auto__ = cljs.core.seq(arglist__20858);
return time__delegate(args__11640__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18491_20859 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18492_20860 = null;var count__18493_20861 = 0;var i__18494_20862 = 0;while(true){
if((i__18494_20862 < count__18493_20861))
{var arg__11642__auto___20863 = cljs.core._nth.call(null,chunk__18492_20860,i__18494_20862);a__11641__auto__.push(arg__11642__auto___20863);
{
var G__20864 = seq__18491_20859;
var G__20865 = chunk__18492_20860;
var G__20866 = count__18493_20861;
var G__20867 = (i__18494_20862 + 1);
seq__18491_20859 = G__20864;
chunk__18492_20860 = G__20865;
count__18493_20861 = G__20866;
i__18494_20862 = G__20867;
continue;
}
} else
{var temp__4092__auto___20868 = cljs.core.seq.call(null,seq__18491_20859);if(temp__4092__auto___20868)
{var seq__18491_20869__$1 = temp__4092__auto___20868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18491_20869__$1))
{var c__11010__auto___20870 = cljs.core.chunk_first.call(null,seq__18491_20869__$1);{
var G__20871 = cljs.core.chunk_rest.call(null,seq__18491_20869__$1);
var G__20872 = c__11010__auto___20870;
var G__20873 = cljs.core.count.call(null,c__11010__auto___20870);
var G__20874 = 0;
seq__18491_20859 = G__20871;
chunk__18492_20860 = G__20872;
count__18493_20861 = G__20873;
i__18494_20862 = G__20874;
continue;
}
} else
{var arg__11642__auto___20875 = cljs.core.first.call(null,seq__18491_20869__$1);a__11641__auto__.push(arg__11642__auto___20875);
{
var G__20876 = cljs.core.next.call(null,seq__18491_20869__$1);
var G__20877 = null;
var G__20878 = 0;
var G__20879 = 0;
seq__18491_20859 = G__20876;
chunk__18492_20860 = G__20877;
count__18493_20861 = G__20878;
i__18494_20862 = G__20879;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__11641__auto__);
};
var title = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__11640__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__20880){
var args__11640__auto__ = cljs.core.seq(arglist__20880);
return title__delegate(args__11640__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18499_20881 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18500_20882 = null;var count__18501_20883 = 0;var i__18502_20884 = 0;while(true){
if((i__18502_20884 < count__18501_20883))
{var arg__11642__auto___20885 = cljs.core._nth.call(null,chunk__18500_20882,i__18502_20884);a__11641__auto__.push(arg__11642__auto___20885);
{
var G__20886 = seq__18499_20881;
var G__20887 = chunk__18500_20882;
var G__20888 = count__18501_20883;
var G__20889 = (i__18502_20884 + 1);
seq__18499_20881 = G__20886;
chunk__18500_20882 = G__20887;
count__18501_20883 = G__20888;
i__18502_20884 = G__20889;
continue;
}
} else
{var temp__4092__auto___20890 = cljs.core.seq.call(null,seq__18499_20881);if(temp__4092__auto___20890)
{var seq__18499_20891__$1 = temp__4092__auto___20890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18499_20891__$1))
{var c__11010__auto___20892 = cljs.core.chunk_first.call(null,seq__18499_20891__$1);{
var G__20893 = cljs.core.chunk_rest.call(null,seq__18499_20891__$1);
var G__20894 = c__11010__auto___20892;
var G__20895 = cljs.core.count.call(null,c__11010__auto___20892);
var G__20896 = 0;
seq__18499_20881 = G__20893;
chunk__18500_20882 = G__20894;
count__18501_20883 = G__20895;
i__18502_20884 = G__20896;
continue;
}
} else
{var arg__11642__auto___20897 = cljs.core.first.call(null,seq__18499_20891__$1);a__11641__auto__.push(arg__11642__auto___20897);
{
var G__20898 = cljs.core.next.call(null,seq__18499_20891__$1);
var G__20899 = null;
var G__20900 = 0;
var G__20901 = 0;
seq__18499_20881 = G__20898;
chunk__18500_20882 = G__20899;
count__18501_20883 = G__20900;
i__18502_20884 = G__20901;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__11641__auto__);
};
var tr = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__11640__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__20902){
var args__11640__auto__ = cljs.core.seq(arglist__20902);
return tr__delegate(args__11640__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18507_20903 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18508_20904 = null;var count__18509_20905 = 0;var i__18510_20906 = 0;while(true){
if((i__18510_20906 < count__18509_20905))
{var arg__11642__auto___20907 = cljs.core._nth.call(null,chunk__18508_20904,i__18510_20906);a__11641__auto__.push(arg__11642__auto___20907);
{
var G__20908 = seq__18507_20903;
var G__20909 = chunk__18508_20904;
var G__20910 = count__18509_20905;
var G__20911 = (i__18510_20906 + 1);
seq__18507_20903 = G__20908;
chunk__18508_20904 = G__20909;
count__18509_20905 = G__20910;
i__18510_20906 = G__20911;
continue;
}
} else
{var temp__4092__auto___20912 = cljs.core.seq.call(null,seq__18507_20903);if(temp__4092__auto___20912)
{var seq__18507_20913__$1 = temp__4092__auto___20912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18507_20913__$1))
{var c__11010__auto___20914 = cljs.core.chunk_first.call(null,seq__18507_20913__$1);{
var G__20915 = cljs.core.chunk_rest.call(null,seq__18507_20913__$1);
var G__20916 = c__11010__auto___20914;
var G__20917 = cljs.core.count.call(null,c__11010__auto___20914);
var G__20918 = 0;
seq__18507_20903 = G__20915;
chunk__18508_20904 = G__20916;
count__18509_20905 = G__20917;
i__18510_20906 = G__20918;
continue;
}
} else
{var arg__11642__auto___20919 = cljs.core.first.call(null,seq__18507_20913__$1);a__11641__auto__.push(arg__11642__auto___20919);
{
var G__20920 = cljs.core.next.call(null,seq__18507_20913__$1);
var G__20921 = null;
var G__20922 = 0;
var G__20923 = 0;
seq__18507_20903 = G__20920;
chunk__18508_20904 = G__20921;
count__18509_20905 = G__20922;
i__18510_20906 = G__20923;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__11641__auto__);
};
var track = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__11640__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__20924){
var args__11640__auto__ = cljs.core.seq(arglist__20924);
return track__delegate(args__11640__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18515_20925 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18516_20926 = null;var count__18517_20927 = 0;var i__18518_20928 = 0;while(true){
if((i__18518_20928 < count__18517_20927))
{var arg__11642__auto___20929 = cljs.core._nth.call(null,chunk__18516_20926,i__18518_20928);a__11641__auto__.push(arg__11642__auto___20929);
{
var G__20930 = seq__18515_20925;
var G__20931 = chunk__18516_20926;
var G__20932 = count__18517_20927;
var G__20933 = (i__18518_20928 + 1);
seq__18515_20925 = G__20930;
chunk__18516_20926 = G__20931;
count__18517_20927 = G__20932;
i__18518_20928 = G__20933;
continue;
}
} else
{var temp__4092__auto___20934 = cljs.core.seq.call(null,seq__18515_20925);if(temp__4092__auto___20934)
{var seq__18515_20935__$1 = temp__4092__auto___20934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18515_20935__$1))
{var c__11010__auto___20936 = cljs.core.chunk_first.call(null,seq__18515_20935__$1);{
var G__20937 = cljs.core.chunk_rest.call(null,seq__18515_20935__$1);
var G__20938 = c__11010__auto___20936;
var G__20939 = cljs.core.count.call(null,c__11010__auto___20936);
var G__20940 = 0;
seq__18515_20925 = G__20937;
chunk__18516_20926 = G__20938;
count__18517_20927 = G__20939;
i__18518_20928 = G__20940;
continue;
}
} else
{var arg__11642__auto___20941 = cljs.core.first.call(null,seq__18515_20935__$1);a__11641__auto__.push(arg__11642__auto___20941);
{
var G__20942 = cljs.core.next.call(null,seq__18515_20935__$1);
var G__20943 = null;
var G__20944 = 0;
var G__20945 = 0;
seq__18515_20925 = G__20942;
chunk__18516_20926 = G__20943;
count__18517_20927 = G__20944;
i__18518_20928 = G__20945;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__11641__auto__);
};
var u = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__11640__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__20946){
var args__11640__auto__ = cljs.core.seq(arglist__20946);
return u__delegate(args__11640__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18523_20947 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18524_20948 = null;var count__18525_20949 = 0;var i__18526_20950 = 0;while(true){
if((i__18526_20950 < count__18525_20949))
{var arg__11642__auto___20951 = cljs.core._nth.call(null,chunk__18524_20948,i__18526_20950);a__11641__auto__.push(arg__11642__auto___20951);
{
var G__20952 = seq__18523_20947;
var G__20953 = chunk__18524_20948;
var G__20954 = count__18525_20949;
var G__20955 = (i__18526_20950 + 1);
seq__18523_20947 = G__20952;
chunk__18524_20948 = G__20953;
count__18525_20949 = G__20954;
i__18526_20950 = G__20955;
continue;
}
} else
{var temp__4092__auto___20956 = cljs.core.seq.call(null,seq__18523_20947);if(temp__4092__auto___20956)
{var seq__18523_20957__$1 = temp__4092__auto___20956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18523_20957__$1))
{var c__11010__auto___20958 = cljs.core.chunk_first.call(null,seq__18523_20957__$1);{
var G__20959 = cljs.core.chunk_rest.call(null,seq__18523_20957__$1);
var G__20960 = c__11010__auto___20958;
var G__20961 = cljs.core.count.call(null,c__11010__auto___20958);
var G__20962 = 0;
seq__18523_20947 = G__20959;
chunk__18524_20948 = G__20960;
count__18525_20949 = G__20961;
i__18526_20950 = G__20962;
continue;
}
} else
{var arg__11642__auto___20963 = cljs.core.first.call(null,seq__18523_20957__$1);a__11641__auto__.push(arg__11642__auto___20963);
{
var G__20964 = cljs.core.next.call(null,seq__18523_20957__$1);
var G__20965 = null;
var G__20966 = 0;
var G__20967 = 0;
seq__18523_20947 = G__20964;
chunk__18524_20948 = G__20965;
count__18525_20949 = G__20966;
i__18526_20950 = G__20967;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__11641__auto__);
};
var ul = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__11640__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__20968){
var args__11640__auto__ = cljs.core.seq(arglist__20968);
return ul__delegate(args__11640__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18531_20969 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18532_20970 = null;var count__18533_20971 = 0;var i__18534_20972 = 0;while(true){
if((i__18534_20972 < count__18533_20971))
{var arg__11642__auto___20973 = cljs.core._nth.call(null,chunk__18532_20970,i__18534_20972);a__11641__auto__.push(arg__11642__auto___20973);
{
var G__20974 = seq__18531_20969;
var G__20975 = chunk__18532_20970;
var G__20976 = count__18533_20971;
var G__20977 = (i__18534_20972 + 1);
seq__18531_20969 = G__20974;
chunk__18532_20970 = G__20975;
count__18533_20971 = G__20976;
i__18534_20972 = G__20977;
continue;
}
} else
{var temp__4092__auto___20978 = cljs.core.seq.call(null,seq__18531_20969);if(temp__4092__auto___20978)
{var seq__18531_20979__$1 = temp__4092__auto___20978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18531_20979__$1))
{var c__11010__auto___20980 = cljs.core.chunk_first.call(null,seq__18531_20979__$1);{
var G__20981 = cljs.core.chunk_rest.call(null,seq__18531_20979__$1);
var G__20982 = c__11010__auto___20980;
var G__20983 = cljs.core.count.call(null,c__11010__auto___20980);
var G__20984 = 0;
seq__18531_20969 = G__20981;
chunk__18532_20970 = G__20982;
count__18533_20971 = G__20983;
i__18534_20972 = G__20984;
continue;
}
} else
{var arg__11642__auto___20985 = cljs.core.first.call(null,seq__18531_20979__$1);a__11641__auto__.push(arg__11642__auto___20985);
{
var G__20986 = cljs.core.next.call(null,seq__18531_20979__$1);
var G__20987 = null;
var G__20988 = 0;
var G__20989 = 0;
seq__18531_20969 = G__20986;
chunk__18532_20970 = G__20987;
count__18533_20971 = G__20988;
i__18534_20972 = G__20989;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__11641__auto__);
};
var var$ = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__11640__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__20990){
var args__11640__auto__ = cljs.core.seq(arglist__20990);
return var$__delegate(args__11640__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18539_20991 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18540_20992 = null;var count__18541_20993 = 0;var i__18542_20994 = 0;while(true){
if((i__18542_20994 < count__18541_20993))
{var arg__11642__auto___20995 = cljs.core._nth.call(null,chunk__18540_20992,i__18542_20994);a__11641__auto__.push(arg__11642__auto___20995);
{
var G__20996 = seq__18539_20991;
var G__20997 = chunk__18540_20992;
var G__20998 = count__18541_20993;
var G__20999 = (i__18542_20994 + 1);
seq__18539_20991 = G__20996;
chunk__18540_20992 = G__20997;
count__18541_20993 = G__20998;
i__18542_20994 = G__20999;
continue;
}
} else
{var temp__4092__auto___21000 = cljs.core.seq.call(null,seq__18539_20991);if(temp__4092__auto___21000)
{var seq__18539_21001__$1 = temp__4092__auto___21000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18539_21001__$1))
{var c__11010__auto___21002 = cljs.core.chunk_first.call(null,seq__18539_21001__$1);{
var G__21003 = cljs.core.chunk_rest.call(null,seq__18539_21001__$1);
var G__21004 = c__11010__auto___21002;
var G__21005 = cljs.core.count.call(null,c__11010__auto___21002);
var G__21006 = 0;
seq__18539_20991 = G__21003;
chunk__18540_20992 = G__21004;
count__18541_20993 = G__21005;
i__18542_20994 = G__21006;
continue;
}
} else
{var arg__11642__auto___21007 = cljs.core.first.call(null,seq__18539_21001__$1);a__11641__auto__.push(arg__11642__auto___21007);
{
var G__21008 = cljs.core.next.call(null,seq__18539_21001__$1);
var G__21009 = null;
var G__21010 = 0;
var G__21011 = 0;
seq__18539_20991 = G__21008;
chunk__18540_20992 = G__21009;
count__18541_20993 = G__21010;
i__18542_20994 = G__21011;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__11641__auto__);
};
var video = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__11640__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__21012){
var args__11640__auto__ = cljs.core.seq(arglist__21012);
return video__delegate(args__11640__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18547_21013 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18548_21014 = null;var count__18549_21015 = 0;var i__18550_21016 = 0;while(true){
if((i__18550_21016 < count__18549_21015))
{var arg__11642__auto___21017 = cljs.core._nth.call(null,chunk__18548_21014,i__18550_21016);a__11641__auto__.push(arg__11642__auto___21017);
{
var G__21018 = seq__18547_21013;
var G__21019 = chunk__18548_21014;
var G__21020 = count__18549_21015;
var G__21021 = (i__18550_21016 + 1);
seq__18547_21013 = G__21018;
chunk__18548_21014 = G__21019;
count__18549_21015 = G__21020;
i__18550_21016 = G__21021;
continue;
}
} else
{var temp__4092__auto___21022 = cljs.core.seq.call(null,seq__18547_21013);if(temp__4092__auto___21022)
{var seq__18547_21023__$1 = temp__4092__auto___21022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18547_21023__$1))
{var c__11010__auto___21024 = cljs.core.chunk_first.call(null,seq__18547_21023__$1);{
var G__21025 = cljs.core.chunk_rest.call(null,seq__18547_21023__$1);
var G__21026 = c__11010__auto___21024;
var G__21027 = cljs.core.count.call(null,c__11010__auto___21024);
var G__21028 = 0;
seq__18547_21013 = G__21025;
chunk__18548_21014 = G__21026;
count__18549_21015 = G__21027;
i__18550_21016 = G__21028;
continue;
}
} else
{var arg__11642__auto___21029 = cljs.core.first.call(null,seq__18547_21023__$1);a__11641__auto__.push(arg__11642__auto___21029);
{
var G__21030 = cljs.core.next.call(null,seq__18547_21023__$1);
var G__21031 = null;
var G__21032 = 0;
var G__21033 = 0;
seq__18547_21013 = G__21030;
chunk__18548_21014 = G__21031;
count__18549_21015 = G__21032;
i__18550_21016 = G__21033;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__11641__auto__);
};
var wbr = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__11640__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__21034){
var args__11640__auto__ = cljs.core.seq(arglist__21034);
return wbr__delegate(args__11640__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18555_21035 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18556_21036 = null;var count__18557_21037 = 0;var i__18558_21038 = 0;while(true){
if((i__18558_21038 < count__18557_21037))
{var arg__11642__auto___21039 = cljs.core._nth.call(null,chunk__18556_21036,i__18558_21038);a__11641__auto__.push(arg__11642__auto___21039);
{
var G__21040 = seq__18555_21035;
var G__21041 = chunk__18556_21036;
var G__21042 = count__18557_21037;
var G__21043 = (i__18558_21038 + 1);
seq__18555_21035 = G__21040;
chunk__18556_21036 = G__21041;
count__18557_21037 = G__21042;
i__18558_21038 = G__21043;
continue;
}
} else
{var temp__4092__auto___21044 = cljs.core.seq.call(null,seq__18555_21035);if(temp__4092__auto___21044)
{var seq__18555_21045__$1 = temp__4092__auto___21044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18555_21045__$1))
{var c__11010__auto___21046 = cljs.core.chunk_first.call(null,seq__18555_21045__$1);{
var G__21047 = cljs.core.chunk_rest.call(null,seq__18555_21045__$1);
var G__21048 = c__11010__auto___21046;
var G__21049 = cljs.core.count.call(null,c__11010__auto___21046);
var G__21050 = 0;
seq__18555_21035 = G__21047;
chunk__18556_21036 = G__21048;
count__18557_21037 = G__21049;
i__18558_21038 = G__21050;
continue;
}
} else
{var arg__11642__auto___21051 = cljs.core.first.call(null,seq__18555_21045__$1);a__11641__auto__.push(arg__11642__auto___21051);
{
var G__21052 = cljs.core.next.call(null,seq__18555_21045__$1);
var G__21053 = null;
var G__21054 = 0;
var G__21055 = 0;
seq__18555_21035 = G__21052;
chunk__18556_21036 = G__21053;
count__18557_21037 = G__21054;
i__18558_21038 = G__21055;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__11641__auto__);
};
var circle = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__11640__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__21056){
var args__11640__auto__ = cljs.core.seq(arglist__21056);
return circle__delegate(args__11640__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18563_21057 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18564_21058 = null;var count__18565_21059 = 0;var i__18566_21060 = 0;while(true){
if((i__18566_21060 < count__18565_21059))
{var arg__11642__auto___21061 = cljs.core._nth.call(null,chunk__18564_21058,i__18566_21060);a__11641__auto__.push(arg__11642__auto___21061);
{
var G__21062 = seq__18563_21057;
var G__21063 = chunk__18564_21058;
var G__21064 = count__18565_21059;
var G__21065 = (i__18566_21060 + 1);
seq__18563_21057 = G__21062;
chunk__18564_21058 = G__21063;
count__18565_21059 = G__21064;
i__18566_21060 = G__21065;
continue;
}
} else
{var temp__4092__auto___21066 = cljs.core.seq.call(null,seq__18563_21057);if(temp__4092__auto___21066)
{var seq__18563_21067__$1 = temp__4092__auto___21066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18563_21067__$1))
{var c__11010__auto___21068 = cljs.core.chunk_first.call(null,seq__18563_21067__$1);{
var G__21069 = cljs.core.chunk_rest.call(null,seq__18563_21067__$1);
var G__21070 = c__11010__auto___21068;
var G__21071 = cljs.core.count.call(null,c__11010__auto___21068);
var G__21072 = 0;
seq__18563_21057 = G__21069;
chunk__18564_21058 = G__21070;
count__18565_21059 = G__21071;
i__18566_21060 = G__21072;
continue;
}
} else
{var arg__11642__auto___21073 = cljs.core.first.call(null,seq__18563_21067__$1);a__11641__auto__.push(arg__11642__auto___21073);
{
var G__21074 = cljs.core.next.call(null,seq__18563_21067__$1);
var G__21075 = null;
var G__21076 = 0;
var G__21077 = 0;
seq__18563_21057 = G__21074;
chunk__18564_21058 = G__21075;
count__18565_21059 = G__21076;
i__18566_21060 = G__21077;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__11641__auto__);
};
var g = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__11640__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__21078){
var args__11640__auto__ = cljs.core.seq(arglist__21078);
return g__delegate(args__11640__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18571_21079 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18572_21080 = null;var count__18573_21081 = 0;var i__18574_21082 = 0;while(true){
if((i__18574_21082 < count__18573_21081))
{var arg__11642__auto___21083 = cljs.core._nth.call(null,chunk__18572_21080,i__18574_21082);a__11641__auto__.push(arg__11642__auto___21083);
{
var G__21084 = seq__18571_21079;
var G__21085 = chunk__18572_21080;
var G__21086 = count__18573_21081;
var G__21087 = (i__18574_21082 + 1);
seq__18571_21079 = G__21084;
chunk__18572_21080 = G__21085;
count__18573_21081 = G__21086;
i__18574_21082 = G__21087;
continue;
}
} else
{var temp__4092__auto___21088 = cljs.core.seq.call(null,seq__18571_21079);if(temp__4092__auto___21088)
{var seq__18571_21089__$1 = temp__4092__auto___21088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18571_21089__$1))
{var c__11010__auto___21090 = cljs.core.chunk_first.call(null,seq__18571_21089__$1);{
var G__21091 = cljs.core.chunk_rest.call(null,seq__18571_21089__$1);
var G__21092 = c__11010__auto___21090;
var G__21093 = cljs.core.count.call(null,c__11010__auto___21090);
var G__21094 = 0;
seq__18571_21079 = G__21091;
chunk__18572_21080 = G__21092;
count__18573_21081 = G__21093;
i__18574_21082 = G__21094;
continue;
}
} else
{var arg__11642__auto___21095 = cljs.core.first.call(null,seq__18571_21089__$1);a__11641__auto__.push(arg__11642__auto___21095);
{
var G__21096 = cljs.core.next.call(null,seq__18571_21089__$1);
var G__21097 = null;
var G__21098 = 0;
var G__21099 = 0;
seq__18571_21079 = G__21096;
chunk__18572_21080 = G__21097;
count__18573_21081 = G__21098;
i__18574_21082 = G__21099;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__11641__auto__);
};
var line = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__11640__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__21100){
var args__11640__auto__ = cljs.core.seq(arglist__21100);
return line__delegate(args__11640__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18579_21101 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18580_21102 = null;var count__18581_21103 = 0;var i__18582_21104 = 0;while(true){
if((i__18582_21104 < count__18581_21103))
{var arg__11642__auto___21105 = cljs.core._nth.call(null,chunk__18580_21102,i__18582_21104);a__11641__auto__.push(arg__11642__auto___21105);
{
var G__21106 = seq__18579_21101;
var G__21107 = chunk__18580_21102;
var G__21108 = count__18581_21103;
var G__21109 = (i__18582_21104 + 1);
seq__18579_21101 = G__21106;
chunk__18580_21102 = G__21107;
count__18581_21103 = G__21108;
i__18582_21104 = G__21109;
continue;
}
} else
{var temp__4092__auto___21110 = cljs.core.seq.call(null,seq__18579_21101);if(temp__4092__auto___21110)
{var seq__18579_21111__$1 = temp__4092__auto___21110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18579_21111__$1))
{var c__11010__auto___21112 = cljs.core.chunk_first.call(null,seq__18579_21111__$1);{
var G__21113 = cljs.core.chunk_rest.call(null,seq__18579_21111__$1);
var G__21114 = c__11010__auto___21112;
var G__21115 = cljs.core.count.call(null,c__11010__auto___21112);
var G__21116 = 0;
seq__18579_21101 = G__21113;
chunk__18580_21102 = G__21114;
count__18581_21103 = G__21115;
i__18582_21104 = G__21116;
continue;
}
} else
{var arg__11642__auto___21117 = cljs.core.first.call(null,seq__18579_21111__$1);a__11641__auto__.push(arg__11642__auto___21117);
{
var G__21118 = cljs.core.next.call(null,seq__18579_21111__$1);
var G__21119 = null;
var G__21120 = 0;
var G__21121 = 0;
seq__18579_21101 = G__21118;
chunk__18580_21102 = G__21119;
count__18581_21103 = G__21120;
i__18582_21104 = G__21121;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__11641__auto__);
};
var path = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__11640__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__21122){
var args__11640__auto__ = cljs.core.seq(arglist__21122);
return path__delegate(args__11640__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18587_21123 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18588_21124 = null;var count__18589_21125 = 0;var i__18590_21126 = 0;while(true){
if((i__18590_21126 < count__18589_21125))
{var arg__11642__auto___21127 = cljs.core._nth.call(null,chunk__18588_21124,i__18590_21126);a__11641__auto__.push(arg__11642__auto___21127);
{
var G__21128 = seq__18587_21123;
var G__21129 = chunk__18588_21124;
var G__21130 = count__18589_21125;
var G__21131 = (i__18590_21126 + 1);
seq__18587_21123 = G__21128;
chunk__18588_21124 = G__21129;
count__18589_21125 = G__21130;
i__18590_21126 = G__21131;
continue;
}
} else
{var temp__4092__auto___21132 = cljs.core.seq.call(null,seq__18587_21123);if(temp__4092__auto___21132)
{var seq__18587_21133__$1 = temp__4092__auto___21132;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18587_21133__$1))
{var c__11010__auto___21134 = cljs.core.chunk_first.call(null,seq__18587_21133__$1);{
var G__21135 = cljs.core.chunk_rest.call(null,seq__18587_21133__$1);
var G__21136 = c__11010__auto___21134;
var G__21137 = cljs.core.count.call(null,c__11010__auto___21134);
var G__21138 = 0;
seq__18587_21123 = G__21135;
chunk__18588_21124 = G__21136;
count__18589_21125 = G__21137;
i__18590_21126 = G__21138;
continue;
}
} else
{var arg__11642__auto___21139 = cljs.core.first.call(null,seq__18587_21133__$1);a__11641__auto__.push(arg__11642__auto___21139);
{
var G__21140 = cljs.core.next.call(null,seq__18587_21133__$1);
var G__21141 = null;
var G__21142 = 0;
var G__21143 = 0;
seq__18587_21123 = G__21140;
chunk__18588_21124 = G__21141;
count__18589_21125 = G__21142;
i__18590_21126 = G__21143;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__11641__auto__);
};
var polygon = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__11640__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__21144){
var args__11640__auto__ = cljs.core.seq(arglist__21144);
return polygon__delegate(args__11640__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18595_21145 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18596_21146 = null;var count__18597_21147 = 0;var i__18598_21148 = 0;while(true){
if((i__18598_21148 < count__18597_21147))
{var arg__11642__auto___21149 = cljs.core._nth.call(null,chunk__18596_21146,i__18598_21148);a__11641__auto__.push(arg__11642__auto___21149);
{
var G__21150 = seq__18595_21145;
var G__21151 = chunk__18596_21146;
var G__21152 = count__18597_21147;
var G__21153 = (i__18598_21148 + 1);
seq__18595_21145 = G__21150;
chunk__18596_21146 = G__21151;
count__18597_21147 = G__21152;
i__18598_21148 = G__21153;
continue;
}
} else
{var temp__4092__auto___21154 = cljs.core.seq.call(null,seq__18595_21145);if(temp__4092__auto___21154)
{var seq__18595_21155__$1 = temp__4092__auto___21154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18595_21155__$1))
{var c__11010__auto___21156 = cljs.core.chunk_first.call(null,seq__18595_21155__$1);{
var G__21157 = cljs.core.chunk_rest.call(null,seq__18595_21155__$1);
var G__21158 = c__11010__auto___21156;
var G__21159 = cljs.core.count.call(null,c__11010__auto___21156);
var G__21160 = 0;
seq__18595_21145 = G__21157;
chunk__18596_21146 = G__21158;
count__18597_21147 = G__21159;
i__18598_21148 = G__21160;
continue;
}
} else
{var arg__11642__auto___21161 = cljs.core.first.call(null,seq__18595_21155__$1);a__11641__auto__.push(arg__11642__auto___21161);
{
var G__21162 = cljs.core.next.call(null,seq__18595_21155__$1);
var G__21163 = null;
var G__21164 = 0;
var G__21165 = 0;
seq__18595_21145 = G__21162;
chunk__18596_21146 = G__21163;
count__18597_21147 = G__21164;
i__18598_21148 = G__21165;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__11641__auto__);
};
var polyline = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__11640__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__21166){
var args__11640__auto__ = cljs.core.seq(arglist__21166);
return polyline__delegate(args__11640__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18603_21167 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18604_21168 = null;var count__18605_21169 = 0;var i__18606_21170 = 0;while(true){
if((i__18606_21170 < count__18605_21169))
{var arg__11642__auto___21171 = cljs.core._nth.call(null,chunk__18604_21168,i__18606_21170);a__11641__auto__.push(arg__11642__auto___21171);
{
var G__21172 = seq__18603_21167;
var G__21173 = chunk__18604_21168;
var G__21174 = count__18605_21169;
var G__21175 = (i__18606_21170 + 1);
seq__18603_21167 = G__21172;
chunk__18604_21168 = G__21173;
count__18605_21169 = G__21174;
i__18606_21170 = G__21175;
continue;
}
} else
{var temp__4092__auto___21176 = cljs.core.seq.call(null,seq__18603_21167);if(temp__4092__auto___21176)
{var seq__18603_21177__$1 = temp__4092__auto___21176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18603_21177__$1))
{var c__11010__auto___21178 = cljs.core.chunk_first.call(null,seq__18603_21177__$1);{
var G__21179 = cljs.core.chunk_rest.call(null,seq__18603_21177__$1);
var G__21180 = c__11010__auto___21178;
var G__21181 = cljs.core.count.call(null,c__11010__auto___21178);
var G__21182 = 0;
seq__18603_21167 = G__21179;
chunk__18604_21168 = G__21180;
count__18605_21169 = G__21181;
i__18606_21170 = G__21182;
continue;
}
} else
{var arg__11642__auto___21183 = cljs.core.first.call(null,seq__18603_21177__$1);a__11641__auto__.push(arg__11642__auto___21183);
{
var G__21184 = cljs.core.next.call(null,seq__18603_21177__$1);
var G__21185 = null;
var G__21186 = 0;
var G__21187 = 0;
seq__18603_21167 = G__21184;
chunk__18604_21168 = G__21185;
count__18605_21169 = G__21186;
i__18606_21170 = G__21187;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__11641__auto__);
};
var rect = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__11640__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__21188){
var args__11640__auto__ = cljs.core.seq(arglist__21188);
return rect__delegate(args__11640__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__18611_21189 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__18612_21190 = null;var count__18613_21191 = 0;var i__18614_21192 = 0;while(true){
if((i__18614_21192 < count__18613_21191))
{var arg__11642__auto___21193 = cljs.core._nth.call(null,chunk__18612_21190,i__18614_21192);a__11641__auto__.push(arg__11642__auto___21193);
{
var G__21194 = seq__18611_21189;
var G__21195 = chunk__18612_21190;
var G__21196 = count__18613_21191;
var G__21197 = (i__18614_21192 + 1);
seq__18611_21189 = G__21194;
chunk__18612_21190 = G__21195;
count__18613_21191 = G__21196;
i__18614_21192 = G__21197;
continue;
}
} else
{var temp__4092__auto___21198 = cljs.core.seq.call(null,seq__18611_21189);if(temp__4092__auto___21198)
{var seq__18611_21199__$1 = temp__4092__auto___21198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18611_21199__$1))
{var c__11010__auto___21200 = cljs.core.chunk_first.call(null,seq__18611_21199__$1);{
var G__21201 = cljs.core.chunk_rest.call(null,seq__18611_21199__$1);
var G__21202 = c__11010__auto___21200;
var G__21203 = cljs.core.count.call(null,c__11010__auto___21200);
var G__21204 = 0;
seq__18611_21189 = G__21201;
chunk__18612_21190 = G__21202;
count__18613_21191 = G__21203;
i__18614_21192 = G__21204;
continue;
}
} else
{var arg__11642__auto___21205 = cljs.core.first.call(null,seq__18611_21199__$1);a__11641__auto__.push(arg__11642__auto___21205);
{
var G__21206 = cljs.core.next.call(null,seq__18611_21199__$1);
var G__21207 = null;
var G__21208 = 0;
var G__21209 = 0;
seq__18611_21189 = G__21206;
chunk__18612_21190 = G__21207;
count__18613_21191 = G__21208;
i__18614_21192 = G__21209;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__11641__auto__);
};
var svg = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__11640__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__21210){
var args__11640__auto__ = cljs.core.seq(arglist__21210);
return svg__delegate(args__11640__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__11640__auto__){var a__11641__auto__ = [];a__11641__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11640__auto__)));
var seq__17923_21211 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11640__auto__));var chunk__17924_21212 = null;var count__17925_21213 = 0;var i__17926_21214 = 0;while(true){
if((i__17926_21214 < count__17925_21213))
{var arg__11642__auto___21215 = cljs.core._nth.call(null,chunk__17924_21212,i__17926_21214);a__11641__auto__.push(arg__11642__auto___21215);
{
var G__21216 = seq__17923_21211;
var G__21217 = chunk__17924_21212;
var G__21218 = count__17925_21213;
var G__21219 = (i__17926_21214 + 1);
seq__17923_21211 = G__21216;
chunk__17924_21212 = G__21217;
count__17925_21213 = G__21218;
i__17926_21214 = G__21219;
continue;
}
} else
{var temp__4092__auto___21220 = cljs.core.seq.call(null,seq__17923_21211);if(temp__4092__auto___21220)
{var seq__17923_21221__$1 = temp__4092__auto___21220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17923_21221__$1))
{var c__11010__auto___21222 = cljs.core.chunk_first.call(null,seq__17923_21221__$1);{
var G__21223 = cljs.core.chunk_rest.call(null,seq__17923_21221__$1);
var G__21224 = c__11010__auto___21222;
var G__21225 = cljs.core.count.call(null,c__11010__auto___21222);
var G__21226 = 0;
seq__17923_21211 = G__21223;
chunk__17924_21212 = G__21224;
count__17925_21213 = G__21225;
i__17926_21214 = G__21226;
continue;
}
} else
{var arg__11642__auto___21227 = cljs.core.first.call(null,seq__17923_21221__$1);a__11641__auto__.push(arg__11642__auto___21227);
{
var G__21228 = cljs.core.next.call(null,seq__17923_21221__$1);
var G__21229 = null;
var G__21230 = 0;
var G__21231 = 0;
seq__17923_21211 = G__21228;
chunk__17924_21212 = G__21229;
count__17925_21213 = G__21230;
i__17926_21214 = G__21231;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__11641__auto__);
};
var text = function (var_args){
var args__11640__auto__ = null;if (arguments.length > 0) {
  args__11640__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__11640__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__21232){
var args__11640__auto__ = cljs.core.seq(arglist__21232);
return text__delegate(args__11640__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

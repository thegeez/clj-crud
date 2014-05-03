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
{var o = (function (){var obj14666 = {};return obj14666;
})();var seq__14667_14673 = cljs.core.seq.call(null,obj);var chunk__14668_14674 = null;var count__14669_14675 = 0;var i__14670_14676 = 0;while(true){
if((i__14670_14676 < count__14669_14675))
{var vec__14671_14677 = cljs.core._nth.call(null,chunk__14668_14674,i__14670_14676);var k_14678 = cljs.core.nth.call(null,vec__14671_14677,0,null);var v_14679 = cljs.core.nth.call(null,vec__14671_14677,1,null);(o[cljs.core.name.call(null,k_14678)] = js_props.call(null,v_14679));
{
var G__14680 = seq__14667_14673;
var G__14681 = chunk__14668_14674;
var G__14682 = count__14669_14675;
var G__14683 = (i__14670_14676 + 1);
seq__14667_14673 = G__14680;
chunk__14668_14674 = G__14681;
count__14669_14675 = G__14682;
i__14670_14676 = G__14683;
continue;
}
} else
{var temp__4092__auto___14684 = cljs.core.seq.call(null,seq__14667_14673);if(temp__4092__auto___14684)
{var seq__14667_14685__$1 = temp__4092__auto___14684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14667_14685__$1))
{var c__11077__auto___14686 = cljs.core.chunk_first.call(null,seq__14667_14685__$1);{
var G__14687 = cljs.core.chunk_rest.call(null,seq__14667_14685__$1);
var G__14688 = c__11077__auto___14686;
var G__14689 = cljs.core.count.call(null,c__11077__auto___14686);
var G__14690 = 0;
seq__14667_14673 = G__14687;
chunk__14668_14674 = G__14688;
count__14669_14675 = G__14689;
i__14670_14676 = G__14690;
continue;
}
} else
{var vec__14672_14691 = cljs.core.first.call(null,seq__14667_14685__$1);var k_14692 = cljs.core.nth.call(null,vec__14672_14691,0,null);var v_14693 = cljs.core.nth.call(null,vec__14672_14691,1,null);(o[cljs.core.name.call(null,k_14692)] = js_props.call(null,v_14693));
{
var G__14694 = cljs.core.next.call(null,seq__14667_14685__$1);
var G__14695 = null;
var G__14696 = 0;
var G__14697 = 0;
seq__14667_14673 = G__14694;
chunk__14668_14674 = G__14695;
count__14669_14675 = G__14696;
i__14670_14676 = G__14697;
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
var a__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14702_15650 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14703_15651 = null;var count__14704_15652 = 0;var i__14705_15653 = 0;while(true){
if((i__14705_15653 < count__14704_15652))
{var arg__11936__auto___15654 = cljs.core._nth.call(null,chunk__14703_15651,i__14705_15653);a__11935__auto__.push(arg__11936__auto___15654);
{
var G__15655 = seq__14702_15650;
var G__15656 = chunk__14703_15651;
var G__15657 = count__14704_15652;
var G__15658 = (i__14705_15653 + 1);
seq__14702_15650 = G__15655;
chunk__14703_15651 = G__15656;
count__14704_15652 = G__15657;
i__14705_15653 = G__15658;
continue;
}
} else
{var temp__4092__auto___15659 = cljs.core.seq.call(null,seq__14702_15650);if(temp__4092__auto___15659)
{var seq__14702_15660__$1 = temp__4092__auto___15659;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14702_15660__$1))
{var c__11077__auto___15661 = cljs.core.chunk_first.call(null,seq__14702_15660__$1);{
var G__15662 = cljs.core.chunk_rest.call(null,seq__14702_15660__$1);
var G__15663 = c__11077__auto___15661;
var G__15664 = cljs.core.count.call(null,c__11077__auto___15661);
var G__15665 = 0;
seq__14702_15650 = G__15662;
chunk__14703_15651 = G__15663;
count__14704_15652 = G__15664;
i__14705_15653 = G__15665;
continue;
}
} else
{var arg__11936__auto___15666 = cljs.core.first.call(null,seq__14702_15660__$1);a__11935__auto__.push(arg__11936__auto___15666);
{
var G__15667 = cljs.core.next.call(null,seq__14702_15660__$1);
var G__15668 = null;
var G__15669 = 0;
var G__15670 = 0;
seq__14702_15650 = G__15667;
chunk__14703_15651 = G__15668;
count__14704_15652 = G__15669;
i__14705_15653 = G__15670;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.a.apply(null,a__11935__auto__);
};
var a = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return a__delegate.call(this,args__11934__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__15671){
var args__11934__auto__ = cljs.core.seq(arglist__15671);
return a__delegate(args__11934__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14710_15672 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14711_15673 = null;var count__14712_15674 = 0;var i__14713_15675 = 0;while(true){
if((i__14713_15675 < count__14712_15674))
{var arg__11936__auto___15676 = cljs.core._nth.call(null,chunk__14711_15673,i__14713_15675);a__11935__auto__.push(arg__11936__auto___15676);
{
var G__15677 = seq__14710_15672;
var G__15678 = chunk__14711_15673;
var G__15679 = count__14712_15674;
var G__15680 = (i__14713_15675 + 1);
seq__14710_15672 = G__15677;
chunk__14711_15673 = G__15678;
count__14712_15674 = G__15679;
i__14713_15675 = G__15680;
continue;
}
} else
{var temp__4092__auto___15681 = cljs.core.seq.call(null,seq__14710_15672);if(temp__4092__auto___15681)
{var seq__14710_15682__$1 = temp__4092__auto___15681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14710_15682__$1))
{var c__11077__auto___15683 = cljs.core.chunk_first.call(null,seq__14710_15682__$1);{
var G__15684 = cljs.core.chunk_rest.call(null,seq__14710_15682__$1);
var G__15685 = c__11077__auto___15683;
var G__15686 = cljs.core.count.call(null,c__11077__auto___15683);
var G__15687 = 0;
seq__14710_15672 = G__15684;
chunk__14711_15673 = G__15685;
count__14712_15674 = G__15686;
i__14713_15675 = G__15687;
continue;
}
} else
{var arg__11936__auto___15688 = cljs.core.first.call(null,seq__14710_15682__$1);a__11935__auto__.push(arg__11936__auto___15688);
{
var G__15689 = cljs.core.next.call(null,seq__14710_15682__$1);
var G__15690 = null;
var G__15691 = 0;
var G__15692 = 0;
seq__14710_15672 = G__15689;
chunk__14711_15673 = G__15690;
count__14712_15674 = G__15691;
i__14713_15675 = G__15692;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.abbr.apply(null,a__11935__auto__);
};
var abbr = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return abbr__delegate.call(this,args__11934__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__15693){
var args__11934__auto__ = cljs.core.seq(arglist__15693);
return abbr__delegate(args__11934__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14718_15694 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14719_15695 = null;var count__14720_15696 = 0;var i__14721_15697 = 0;while(true){
if((i__14721_15697 < count__14720_15696))
{var arg__11936__auto___15698 = cljs.core._nth.call(null,chunk__14719_15695,i__14721_15697);a__11935__auto__.push(arg__11936__auto___15698);
{
var G__15699 = seq__14718_15694;
var G__15700 = chunk__14719_15695;
var G__15701 = count__14720_15696;
var G__15702 = (i__14721_15697 + 1);
seq__14718_15694 = G__15699;
chunk__14719_15695 = G__15700;
count__14720_15696 = G__15701;
i__14721_15697 = G__15702;
continue;
}
} else
{var temp__4092__auto___15703 = cljs.core.seq.call(null,seq__14718_15694);if(temp__4092__auto___15703)
{var seq__14718_15704__$1 = temp__4092__auto___15703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14718_15704__$1))
{var c__11077__auto___15705 = cljs.core.chunk_first.call(null,seq__14718_15704__$1);{
var G__15706 = cljs.core.chunk_rest.call(null,seq__14718_15704__$1);
var G__15707 = c__11077__auto___15705;
var G__15708 = cljs.core.count.call(null,c__11077__auto___15705);
var G__15709 = 0;
seq__14718_15694 = G__15706;
chunk__14719_15695 = G__15707;
count__14720_15696 = G__15708;
i__14721_15697 = G__15709;
continue;
}
} else
{var arg__11936__auto___15710 = cljs.core.first.call(null,seq__14718_15704__$1);a__11935__auto__.push(arg__11936__auto___15710);
{
var G__15711 = cljs.core.next.call(null,seq__14718_15704__$1);
var G__15712 = null;
var G__15713 = 0;
var G__15714 = 0;
seq__14718_15694 = G__15711;
chunk__14719_15695 = G__15712;
count__14720_15696 = G__15713;
i__14721_15697 = G__15714;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.address.apply(null,a__11935__auto__);
};
var address = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return address__delegate.call(this,args__11934__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__15715){
var args__11934__auto__ = cljs.core.seq(arglist__15715);
return address__delegate(args__11934__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14726_15716 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14727_15717 = null;var count__14728_15718 = 0;var i__14729_15719 = 0;while(true){
if((i__14729_15719 < count__14728_15718))
{var arg__11936__auto___15720 = cljs.core._nth.call(null,chunk__14727_15717,i__14729_15719);a__11935__auto__.push(arg__11936__auto___15720);
{
var G__15721 = seq__14726_15716;
var G__15722 = chunk__14727_15717;
var G__15723 = count__14728_15718;
var G__15724 = (i__14729_15719 + 1);
seq__14726_15716 = G__15721;
chunk__14727_15717 = G__15722;
count__14728_15718 = G__15723;
i__14729_15719 = G__15724;
continue;
}
} else
{var temp__4092__auto___15725 = cljs.core.seq.call(null,seq__14726_15716);if(temp__4092__auto___15725)
{var seq__14726_15726__$1 = temp__4092__auto___15725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14726_15726__$1))
{var c__11077__auto___15727 = cljs.core.chunk_first.call(null,seq__14726_15726__$1);{
var G__15728 = cljs.core.chunk_rest.call(null,seq__14726_15726__$1);
var G__15729 = c__11077__auto___15727;
var G__15730 = cljs.core.count.call(null,c__11077__auto___15727);
var G__15731 = 0;
seq__14726_15716 = G__15728;
chunk__14727_15717 = G__15729;
count__14728_15718 = G__15730;
i__14729_15719 = G__15731;
continue;
}
} else
{var arg__11936__auto___15732 = cljs.core.first.call(null,seq__14726_15726__$1);a__11935__auto__.push(arg__11936__auto___15732);
{
var G__15733 = cljs.core.next.call(null,seq__14726_15726__$1);
var G__15734 = null;
var G__15735 = 0;
var G__15736 = 0;
seq__14726_15716 = G__15733;
chunk__14727_15717 = G__15734;
count__14728_15718 = G__15735;
i__14729_15719 = G__15736;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.area.apply(null,a__11935__auto__);
};
var area = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return area__delegate.call(this,args__11934__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__15737){
var args__11934__auto__ = cljs.core.seq(arglist__15737);
return area__delegate(args__11934__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14734_15738 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14735_15739 = null;var count__14736_15740 = 0;var i__14737_15741 = 0;while(true){
if((i__14737_15741 < count__14736_15740))
{var arg__11936__auto___15742 = cljs.core._nth.call(null,chunk__14735_15739,i__14737_15741);a__11935__auto__.push(arg__11936__auto___15742);
{
var G__15743 = seq__14734_15738;
var G__15744 = chunk__14735_15739;
var G__15745 = count__14736_15740;
var G__15746 = (i__14737_15741 + 1);
seq__14734_15738 = G__15743;
chunk__14735_15739 = G__15744;
count__14736_15740 = G__15745;
i__14737_15741 = G__15746;
continue;
}
} else
{var temp__4092__auto___15747 = cljs.core.seq.call(null,seq__14734_15738);if(temp__4092__auto___15747)
{var seq__14734_15748__$1 = temp__4092__auto___15747;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14734_15748__$1))
{var c__11077__auto___15749 = cljs.core.chunk_first.call(null,seq__14734_15748__$1);{
var G__15750 = cljs.core.chunk_rest.call(null,seq__14734_15748__$1);
var G__15751 = c__11077__auto___15749;
var G__15752 = cljs.core.count.call(null,c__11077__auto___15749);
var G__15753 = 0;
seq__14734_15738 = G__15750;
chunk__14735_15739 = G__15751;
count__14736_15740 = G__15752;
i__14737_15741 = G__15753;
continue;
}
} else
{var arg__11936__auto___15754 = cljs.core.first.call(null,seq__14734_15748__$1);a__11935__auto__.push(arg__11936__auto___15754);
{
var G__15755 = cljs.core.next.call(null,seq__14734_15748__$1);
var G__15756 = null;
var G__15757 = 0;
var G__15758 = 0;
seq__14734_15738 = G__15755;
chunk__14735_15739 = G__15756;
count__14736_15740 = G__15757;
i__14737_15741 = G__15758;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.article.apply(null,a__11935__auto__);
};
var article = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return article__delegate.call(this,args__11934__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__15759){
var args__11934__auto__ = cljs.core.seq(arglist__15759);
return article__delegate(args__11934__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14742_15760 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14743_15761 = null;var count__14744_15762 = 0;var i__14745_15763 = 0;while(true){
if((i__14745_15763 < count__14744_15762))
{var arg__11936__auto___15764 = cljs.core._nth.call(null,chunk__14743_15761,i__14745_15763);a__11935__auto__.push(arg__11936__auto___15764);
{
var G__15765 = seq__14742_15760;
var G__15766 = chunk__14743_15761;
var G__15767 = count__14744_15762;
var G__15768 = (i__14745_15763 + 1);
seq__14742_15760 = G__15765;
chunk__14743_15761 = G__15766;
count__14744_15762 = G__15767;
i__14745_15763 = G__15768;
continue;
}
} else
{var temp__4092__auto___15769 = cljs.core.seq.call(null,seq__14742_15760);if(temp__4092__auto___15769)
{var seq__14742_15770__$1 = temp__4092__auto___15769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14742_15770__$1))
{var c__11077__auto___15771 = cljs.core.chunk_first.call(null,seq__14742_15770__$1);{
var G__15772 = cljs.core.chunk_rest.call(null,seq__14742_15770__$1);
var G__15773 = c__11077__auto___15771;
var G__15774 = cljs.core.count.call(null,c__11077__auto___15771);
var G__15775 = 0;
seq__14742_15760 = G__15772;
chunk__14743_15761 = G__15773;
count__14744_15762 = G__15774;
i__14745_15763 = G__15775;
continue;
}
} else
{var arg__11936__auto___15776 = cljs.core.first.call(null,seq__14742_15770__$1);a__11935__auto__.push(arg__11936__auto___15776);
{
var G__15777 = cljs.core.next.call(null,seq__14742_15770__$1);
var G__15778 = null;
var G__15779 = 0;
var G__15780 = 0;
seq__14742_15760 = G__15777;
chunk__14743_15761 = G__15778;
count__14744_15762 = G__15779;
i__14745_15763 = G__15780;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.aside.apply(null,a__11935__auto__);
};
var aside = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return aside__delegate.call(this,args__11934__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__15781){
var args__11934__auto__ = cljs.core.seq(arglist__15781);
return aside__delegate(args__11934__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14750_15782 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14751_15783 = null;var count__14752_15784 = 0;var i__14753_15785 = 0;while(true){
if((i__14753_15785 < count__14752_15784))
{var arg__11936__auto___15786 = cljs.core._nth.call(null,chunk__14751_15783,i__14753_15785);a__11935__auto__.push(arg__11936__auto___15786);
{
var G__15787 = seq__14750_15782;
var G__15788 = chunk__14751_15783;
var G__15789 = count__14752_15784;
var G__15790 = (i__14753_15785 + 1);
seq__14750_15782 = G__15787;
chunk__14751_15783 = G__15788;
count__14752_15784 = G__15789;
i__14753_15785 = G__15790;
continue;
}
} else
{var temp__4092__auto___15791 = cljs.core.seq.call(null,seq__14750_15782);if(temp__4092__auto___15791)
{var seq__14750_15792__$1 = temp__4092__auto___15791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14750_15792__$1))
{var c__11077__auto___15793 = cljs.core.chunk_first.call(null,seq__14750_15792__$1);{
var G__15794 = cljs.core.chunk_rest.call(null,seq__14750_15792__$1);
var G__15795 = c__11077__auto___15793;
var G__15796 = cljs.core.count.call(null,c__11077__auto___15793);
var G__15797 = 0;
seq__14750_15782 = G__15794;
chunk__14751_15783 = G__15795;
count__14752_15784 = G__15796;
i__14753_15785 = G__15797;
continue;
}
} else
{var arg__11936__auto___15798 = cljs.core.first.call(null,seq__14750_15792__$1);a__11935__auto__.push(arg__11936__auto___15798);
{
var G__15799 = cljs.core.next.call(null,seq__14750_15792__$1);
var G__15800 = null;
var G__15801 = 0;
var G__15802 = 0;
seq__14750_15782 = G__15799;
chunk__14751_15783 = G__15800;
count__14752_15784 = G__15801;
i__14753_15785 = G__15802;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.audio.apply(null,a__11935__auto__);
};
var audio = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return audio__delegate.call(this,args__11934__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__15803){
var args__11934__auto__ = cljs.core.seq(arglist__15803);
return audio__delegate(args__11934__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14758_15804 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14759_15805 = null;var count__14760_15806 = 0;var i__14761_15807 = 0;while(true){
if((i__14761_15807 < count__14760_15806))
{var arg__11936__auto___15808 = cljs.core._nth.call(null,chunk__14759_15805,i__14761_15807);a__11935__auto__.push(arg__11936__auto___15808);
{
var G__15809 = seq__14758_15804;
var G__15810 = chunk__14759_15805;
var G__15811 = count__14760_15806;
var G__15812 = (i__14761_15807 + 1);
seq__14758_15804 = G__15809;
chunk__14759_15805 = G__15810;
count__14760_15806 = G__15811;
i__14761_15807 = G__15812;
continue;
}
} else
{var temp__4092__auto___15813 = cljs.core.seq.call(null,seq__14758_15804);if(temp__4092__auto___15813)
{var seq__14758_15814__$1 = temp__4092__auto___15813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14758_15814__$1))
{var c__11077__auto___15815 = cljs.core.chunk_first.call(null,seq__14758_15814__$1);{
var G__15816 = cljs.core.chunk_rest.call(null,seq__14758_15814__$1);
var G__15817 = c__11077__auto___15815;
var G__15818 = cljs.core.count.call(null,c__11077__auto___15815);
var G__15819 = 0;
seq__14758_15804 = G__15816;
chunk__14759_15805 = G__15817;
count__14760_15806 = G__15818;
i__14761_15807 = G__15819;
continue;
}
} else
{var arg__11936__auto___15820 = cljs.core.first.call(null,seq__14758_15814__$1);a__11935__auto__.push(arg__11936__auto___15820);
{
var G__15821 = cljs.core.next.call(null,seq__14758_15814__$1);
var G__15822 = null;
var G__15823 = 0;
var G__15824 = 0;
seq__14758_15804 = G__15821;
chunk__14759_15805 = G__15822;
count__14760_15806 = G__15823;
i__14761_15807 = G__15824;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.b.apply(null,a__11935__auto__);
};
var b = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return b__delegate.call(this,args__11934__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__15825){
var args__11934__auto__ = cljs.core.seq(arglist__15825);
return b__delegate(args__11934__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14766_15826 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14767_15827 = null;var count__14768_15828 = 0;var i__14769_15829 = 0;while(true){
if((i__14769_15829 < count__14768_15828))
{var arg__11936__auto___15830 = cljs.core._nth.call(null,chunk__14767_15827,i__14769_15829);a__11935__auto__.push(arg__11936__auto___15830);
{
var G__15831 = seq__14766_15826;
var G__15832 = chunk__14767_15827;
var G__15833 = count__14768_15828;
var G__15834 = (i__14769_15829 + 1);
seq__14766_15826 = G__15831;
chunk__14767_15827 = G__15832;
count__14768_15828 = G__15833;
i__14769_15829 = G__15834;
continue;
}
} else
{var temp__4092__auto___15835 = cljs.core.seq.call(null,seq__14766_15826);if(temp__4092__auto___15835)
{var seq__14766_15836__$1 = temp__4092__auto___15835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14766_15836__$1))
{var c__11077__auto___15837 = cljs.core.chunk_first.call(null,seq__14766_15836__$1);{
var G__15838 = cljs.core.chunk_rest.call(null,seq__14766_15836__$1);
var G__15839 = c__11077__auto___15837;
var G__15840 = cljs.core.count.call(null,c__11077__auto___15837);
var G__15841 = 0;
seq__14766_15826 = G__15838;
chunk__14767_15827 = G__15839;
count__14768_15828 = G__15840;
i__14769_15829 = G__15841;
continue;
}
} else
{var arg__11936__auto___15842 = cljs.core.first.call(null,seq__14766_15836__$1);a__11935__auto__.push(arg__11936__auto___15842);
{
var G__15843 = cljs.core.next.call(null,seq__14766_15836__$1);
var G__15844 = null;
var G__15845 = 0;
var G__15846 = 0;
seq__14766_15826 = G__15843;
chunk__14767_15827 = G__15844;
count__14768_15828 = G__15845;
i__14769_15829 = G__15846;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.base.apply(null,a__11935__auto__);
};
var base = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return base__delegate.call(this,args__11934__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__15847){
var args__11934__auto__ = cljs.core.seq(arglist__15847);
return base__delegate(args__11934__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14774_15848 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14775_15849 = null;var count__14776_15850 = 0;var i__14777_15851 = 0;while(true){
if((i__14777_15851 < count__14776_15850))
{var arg__11936__auto___15852 = cljs.core._nth.call(null,chunk__14775_15849,i__14777_15851);a__11935__auto__.push(arg__11936__auto___15852);
{
var G__15853 = seq__14774_15848;
var G__15854 = chunk__14775_15849;
var G__15855 = count__14776_15850;
var G__15856 = (i__14777_15851 + 1);
seq__14774_15848 = G__15853;
chunk__14775_15849 = G__15854;
count__14776_15850 = G__15855;
i__14777_15851 = G__15856;
continue;
}
} else
{var temp__4092__auto___15857 = cljs.core.seq.call(null,seq__14774_15848);if(temp__4092__auto___15857)
{var seq__14774_15858__$1 = temp__4092__auto___15857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14774_15858__$1))
{var c__11077__auto___15859 = cljs.core.chunk_first.call(null,seq__14774_15858__$1);{
var G__15860 = cljs.core.chunk_rest.call(null,seq__14774_15858__$1);
var G__15861 = c__11077__auto___15859;
var G__15862 = cljs.core.count.call(null,c__11077__auto___15859);
var G__15863 = 0;
seq__14774_15848 = G__15860;
chunk__14775_15849 = G__15861;
count__14776_15850 = G__15862;
i__14777_15851 = G__15863;
continue;
}
} else
{var arg__11936__auto___15864 = cljs.core.first.call(null,seq__14774_15858__$1);a__11935__auto__.push(arg__11936__auto___15864);
{
var G__15865 = cljs.core.next.call(null,seq__14774_15858__$1);
var G__15866 = null;
var G__15867 = 0;
var G__15868 = 0;
seq__14774_15848 = G__15865;
chunk__14775_15849 = G__15866;
count__14776_15850 = G__15867;
i__14777_15851 = G__15868;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdi.apply(null,a__11935__auto__);
};
var bdi = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdi__delegate.call(this,args__11934__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__15869){
var args__11934__auto__ = cljs.core.seq(arglist__15869);
return bdi__delegate(args__11934__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14782_15870 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14783_15871 = null;var count__14784_15872 = 0;var i__14785_15873 = 0;while(true){
if((i__14785_15873 < count__14784_15872))
{var arg__11936__auto___15874 = cljs.core._nth.call(null,chunk__14783_15871,i__14785_15873);a__11935__auto__.push(arg__11936__auto___15874);
{
var G__15875 = seq__14782_15870;
var G__15876 = chunk__14783_15871;
var G__15877 = count__14784_15872;
var G__15878 = (i__14785_15873 + 1);
seq__14782_15870 = G__15875;
chunk__14783_15871 = G__15876;
count__14784_15872 = G__15877;
i__14785_15873 = G__15878;
continue;
}
} else
{var temp__4092__auto___15879 = cljs.core.seq.call(null,seq__14782_15870);if(temp__4092__auto___15879)
{var seq__14782_15880__$1 = temp__4092__auto___15879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14782_15880__$1))
{var c__11077__auto___15881 = cljs.core.chunk_first.call(null,seq__14782_15880__$1);{
var G__15882 = cljs.core.chunk_rest.call(null,seq__14782_15880__$1);
var G__15883 = c__11077__auto___15881;
var G__15884 = cljs.core.count.call(null,c__11077__auto___15881);
var G__15885 = 0;
seq__14782_15870 = G__15882;
chunk__14783_15871 = G__15883;
count__14784_15872 = G__15884;
i__14785_15873 = G__15885;
continue;
}
} else
{var arg__11936__auto___15886 = cljs.core.first.call(null,seq__14782_15880__$1);a__11935__auto__.push(arg__11936__auto___15886);
{
var G__15887 = cljs.core.next.call(null,seq__14782_15880__$1);
var G__15888 = null;
var G__15889 = 0;
var G__15890 = 0;
seq__14782_15870 = G__15887;
chunk__14783_15871 = G__15888;
count__14784_15872 = G__15889;
i__14785_15873 = G__15890;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.bdo.apply(null,a__11935__auto__);
};
var bdo = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return bdo__delegate.call(this,args__11934__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__15891){
var args__11934__auto__ = cljs.core.seq(arglist__15891);
return bdo__delegate(args__11934__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14790_15892 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14791_15893 = null;var count__14792_15894 = 0;var i__14793_15895 = 0;while(true){
if((i__14793_15895 < count__14792_15894))
{var arg__11936__auto___15896 = cljs.core._nth.call(null,chunk__14791_15893,i__14793_15895);a__11935__auto__.push(arg__11936__auto___15896);
{
var G__15897 = seq__14790_15892;
var G__15898 = chunk__14791_15893;
var G__15899 = count__14792_15894;
var G__15900 = (i__14793_15895 + 1);
seq__14790_15892 = G__15897;
chunk__14791_15893 = G__15898;
count__14792_15894 = G__15899;
i__14793_15895 = G__15900;
continue;
}
} else
{var temp__4092__auto___15901 = cljs.core.seq.call(null,seq__14790_15892);if(temp__4092__auto___15901)
{var seq__14790_15902__$1 = temp__4092__auto___15901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14790_15902__$1))
{var c__11077__auto___15903 = cljs.core.chunk_first.call(null,seq__14790_15902__$1);{
var G__15904 = cljs.core.chunk_rest.call(null,seq__14790_15902__$1);
var G__15905 = c__11077__auto___15903;
var G__15906 = cljs.core.count.call(null,c__11077__auto___15903);
var G__15907 = 0;
seq__14790_15892 = G__15904;
chunk__14791_15893 = G__15905;
count__14792_15894 = G__15906;
i__14793_15895 = G__15907;
continue;
}
} else
{var arg__11936__auto___15908 = cljs.core.first.call(null,seq__14790_15902__$1);a__11935__auto__.push(arg__11936__auto___15908);
{
var G__15909 = cljs.core.next.call(null,seq__14790_15902__$1);
var G__15910 = null;
var G__15911 = 0;
var G__15912 = 0;
seq__14790_15892 = G__15909;
chunk__14791_15893 = G__15910;
count__14792_15894 = G__15911;
i__14793_15895 = G__15912;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.big.apply(null,a__11935__auto__);
};
var big = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return big__delegate.call(this,args__11934__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__15913){
var args__11934__auto__ = cljs.core.seq(arglist__15913);
return big__delegate(args__11934__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14798_15914 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14799_15915 = null;var count__14800_15916 = 0;var i__14801_15917 = 0;while(true){
if((i__14801_15917 < count__14800_15916))
{var arg__11936__auto___15918 = cljs.core._nth.call(null,chunk__14799_15915,i__14801_15917);a__11935__auto__.push(arg__11936__auto___15918);
{
var G__15919 = seq__14798_15914;
var G__15920 = chunk__14799_15915;
var G__15921 = count__14800_15916;
var G__15922 = (i__14801_15917 + 1);
seq__14798_15914 = G__15919;
chunk__14799_15915 = G__15920;
count__14800_15916 = G__15921;
i__14801_15917 = G__15922;
continue;
}
} else
{var temp__4092__auto___15923 = cljs.core.seq.call(null,seq__14798_15914);if(temp__4092__auto___15923)
{var seq__14798_15924__$1 = temp__4092__auto___15923;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14798_15924__$1))
{var c__11077__auto___15925 = cljs.core.chunk_first.call(null,seq__14798_15924__$1);{
var G__15926 = cljs.core.chunk_rest.call(null,seq__14798_15924__$1);
var G__15927 = c__11077__auto___15925;
var G__15928 = cljs.core.count.call(null,c__11077__auto___15925);
var G__15929 = 0;
seq__14798_15914 = G__15926;
chunk__14799_15915 = G__15927;
count__14800_15916 = G__15928;
i__14801_15917 = G__15929;
continue;
}
} else
{var arg__11936__auto___15930 = cljs.core.first.call(null,seq__14798_15924__$1);a__11935__auto__.push(arg__11936__auto___15930);
{
var G__15931 = cljs.core.next.call(null,seq__14798_15924__$1);
var G__15932 = null;
var G__15933 = 0;
var G__15934 = 0;
seq__14798_15914 = G__15931;
chunk__14799_15915 = G__15932;
count__14800_15916 = G__15933;
i__14801_15917 = G__15934;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.blockquote.apply(null,a__11935__auto__);
};
var blockquote = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return blockquote__delegate.call(this,args__11934__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__15935){
var args__11934__auto__ = cljs.core.seq(arglist__15935);
return blockquote__delegate(args__11934__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14806_15936 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14807_15937 = null;var count__14808_15938 = 0;var i__14809_15939 = 0;while(true){
if((i__14809_15939 < count__14808_15938))
{var arg__11936__auto___15940 = cljs.core._nth.call(null,chunk__14807_15937,i__14809_15939);a__11935__auto__.push(arg__11936__auto___15940);
{
var G__15941 = seq__14806_15936;
var G__15942 = chunk__14807_15937;
var G__15943 = count__14808_15938;
var G__15944 = (i__14809_15939 + 1);
seq__14806_15936 = G__15941;
chunk__14807_15937 = G__15942;
count__14808_15938 = G__15943;
i__14809_15939 = G__15944;
continue;
}
} else
{var temp__4092__auto___15945 = cljs.core.seq.call(null,seq__14806_15936);if(temp__4092__auto___15945)
{var seq__14806_15946__$1 = temp__4092__auto___15945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14806_15946__$1))
{var c__11077__auto___15947 = cljs.core.chunk_first.call(null,seq__14806_15946__$1);{
var G__15948 = cljs.core.chunk_rest.call(null,seq__14806_15946__$1);
var G__15949 = c__11077__auto___15947;
var G__15950 = cljs.core.count.call(null,c__11077__auto___15947);
var G__15951 = 0;
seq__14806_15936 = G__15948;
chunk__14807_15937 = G__15949;
count__14808_15938 = G__15950;
i__14809_15939 = G__15951;
continue;
}
} else
{var arg__11936__auto___15952 = cljs.core.first.call(null,seq__14806_15946__$1);a__11935__auto__.push(arg__11936__auto___15952);
{
var G__15953 = cljs.core.next.call(null,seq__14806_15946__$1);
var G__15954 = null;
var G__15955 = 0;
var G__15956 = 0;
seq__14806_15936 = G__15953;
chunk__14807_15937 = G__15954;
count__14808_15938 = G__15955;
i__14809_15939 = G__15956;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.body.apply(null,a__11935__auto__);
};
var body = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return body__delegate.call(this,args__11934__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__15957){
var args__11934__auto__ = cljs.core.seq(arglist__15957);
return body__delegate(args__11934__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14814_15958 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14815_15959 = null;var count__14816_15960 = 0;var i__14817_15961 = 0;while(true){
if((i__14817_15961 < count__14816_15960))
{var arg__11936__auto___15962 = cljs.core._nth.call(null,chunk__14815_15959,i__14817_15961);a__11935__auto__.push(arg__11936__auto___15962);
{
var G__15963 = seq__14814_15958;
var G__15964 = chunk__14815_15959;
var G__15965 = count__14816_15960;
var G__15966 = (i__14817_15961 + 1);
seq__14814_15958 = G__15963;
chunk__14815_15959 = G__15964;
count__14816_15960 = G__15965;
i__14817_15961 = G__15966;
continue;
}
} else
{var temp__4092__auto___15967 = cljs.core.seq.call(null,seq__14814_15958);if(temp__4092__auto___15967)
{var seq__14814_15968__$1 = temp__4092__auto___15967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14814_15968__$1))
{var c__11077__auto___15969 = cljs.core.chunk_first.call(null,seq__14814_15968__$1);{
var G__15970 = cljs.core.chunk_rest.call(null,seq__14814_15968__$1);
var G__15971 = c__11077__auto___15969;
var G__15972 = cljs.core.count.call(null,c__11077__auto___15969);
var G__15973 = 0;
seq__14814_15958 = G__15970;
chunk__14815_15959 = G__15971;
count__14816_15960 = G__15972;
i__14817_15961 = G__15973;
continue;
}
} else
{var arg__11936__auto___15974 = cljs.core.first.call(null,seq__14814_15968__$1);a__11935__auto__.push(arg__11936__auto___15974);
{
var G__15975 = cljs.core.next.call(null,seq__14814_15968__$1);
var G__15976 = null;
var G__15977 = 0;
var G__15978 = 0;
seq__14814_15958 = G__15975;
chunk__14815_15959 = G__15976;
count__14816_15960 = G__15977;
i__14817_15961 = G__15978;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.br.apply(null,a__11935__auto__);
};
var br = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return br__delegate.call(this,args__11934__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__15979){
var args__11934__auto__ = cljs.core.seq(arglist__15979);
return br__delegate(args__11934__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14822_15980 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14823_15981 = null;var count__14824_15982 = 0;var i__14825_15983 = 0;while(true){
if((i__14825_15983 < count__14824_15982))
{var arg__11936__auto___15984 = cljs.core._nth.call(null,chunk__14823_15981,i__14825_15983);a__11935__auto__.push(arg__11936__auto___15984);
{
var G__15985 = seq__14822_15980;
var G__15986 = chunk__14823_15981;
var G__15987 = count__14824_15982;
var G__15988 = (i__14825_15983 + 1);
seq__14822_15980 = G__15985;
chunk__14823_15981 = G__15986;
count__14824_15982 = G__15987;
i__14825_15983 = G__15988;
continue;
}
} else
{var temp__4092__auto___15989 = cljs.core.seq.call(null,seq__14822_15980);if(temp__4092__auto___15989)
{var seq__14822_15990__$1 = temp__4092__auto___15989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14822_15990__$1))
{var c__11077__auto___15991 = cljs.core.chunk_first.call(null,seq__14822_15990__$1);{
var G__15992 = cljs.core.chunk_rest.call(null,seq__14822_15990__$1);
var G__15993 = c__11077__auto___15991;
var G__15994 = cljs.core.count.call(null,c__11077__auto___15991);
var G__15995 = 0;
seq__14822_15980 = G__15992;
chunk__14823_15981 = G__15993;
count__14824_15982 = G__15994;
i__14825_15983 = G__15995;
continue;
}
} else
{var arg__11936__auto___15996 = cljs.core.first.call(null,seq__14822_15990__$1);a__11935__auto__.push(arg__11936__auto___15996);
{
var G__15997 = cljs.core.next.call(null,seq__14822_15990__$1);
var G__15998 = null;
var G__15999 = 0;
var G__16000 = 0;
seq__14822_15980 = G__15997;
chunk__14823_15981 = G__15998;
count__14824_15982 = G__15999;
i__14825_15983 = G__16000;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.button.apply(null,a__11935__auto__);
};
var button = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return button__delegate.call(this,args__11934__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__16001){
var args__11934__auto__ = cljs.core.seq(arglist__16001);
return button__delegate(args__11934__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14830_16002 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14831_16003 = null;var count__14832_16004 = 0;var i__14833_16005 = 0;while(true){
if((i__14833_16005 < count__14832_16004))
{var arg__11936__auto___16006 = cljs.core._nth.call(null,chunk__14831_16003,i__14833_16005);a__11935__auto__.push(arg__11936__auto___16006);
{
var G__16007 = seq__14830_16002;
var G__16008 = chunk__14831_16003;
var G__16009 = count__14832_16004;
var G__16010 = (i__14833_16005 + 1);
seq__14830_16002 = G__16007;
chunk__14831_16003 = G__16008;
count__14832_16004 = G__16009;
i__14833_16005 = G__16010;
continue;
}
} else
{var temp__4092__auto___16011 = cljs.core.seq.call(null,seq__14830_16002);if(temp__4092__auto___16011)
{var seq__14830_16012__$1 = temp__4092__auto___16011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830_16012__$1))
{var c__11077__auto___16013 = cljs.core.chunk_first.call(null,seq__14830_16012__$1);{
var G__16014 = cljs.core.chunk_rest.call(null,seq__14830_16012__$1);
var G__16015 = c__11077__auto___16013;
var G__16016 = cljs.core.count.call(null,c__11077__auto___16013);
var G__16017 = 0;
seq__14830_16002 = G__16014;
chunk__14831_16003 = G__16015;
count__14832_16004 = G__16016;
i__14833_16005 = G__16017;
continue;
}
} else
{var arg__11936__auto___16018 = cljs.core.first.call(null,seq__14830_16012__$1);a__11935__auto__.push(arg__11936__auto___16018);
{
var G__16019 = cljs.core.next.call(null,seq__14830_16012__$1);
var G__16020 = null;
var G__16021 = 0;
var G__16022 = 0;
seq__14830_16002 = G__16019;
chunk__14831_16003 = G__16020;
count__14832_16004 = G__16021;
i__14833_16005 = G__16022;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.canvas.apply(null,a__11935__auto__);
};
var canvas = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return canvas__delegate.call(this,args__11934__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__16023){
var args__11934__auto__ = cljs.core.seq(arglist__16023);
return canvas__delegate(args__11934__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14838_16024 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14839_16025 = null;var count__14840_16026 = 0;var i__14841_16027 = 0;while(true){
if((i__14841_16027 < count__14840_16026))
{var arg__11936__auto___16028 = cljs.core._nth.call(null,chunk__14839_16025,i__14841_16027);a__11935__auto__.push(arg__11936__auto___16028);
{
var G__16029 = seq__14838_16024;
var G__16030 = chunk__14839_16025;
var G__16031 = count__14840_16026;
var G__16032 = (i__14841_16027 + 1);
seq__14838_16024 = G__16029;
chunk__14839_16025 = G__16030;
count__14840_16026 = G__16031;
i__14841_16027 = G__16032;
continue;
}
} else
{var temp__4092__auto___16033 = cljs.core.seq.call(null,seq__14838_16024);if(temp__4092__auto___16033)
{var seq__14838_16034__$1 = temp__4092__auto___16033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14838_16034__$1))
{var c__11077__auto___16035 = cljs.core.chunk_first.call(null,seq__14838_16034__$1);{
var G__16036 = cljs.core.chunk_rest.call(null,seq__14838_16034__$1);
var G__16037 = c__11077__auto___16035;
var G__16038 = cljs.core.count.call(null,c__11077__auto___16035);
var G__16039 = 0;
seq__14838_16024 = G__16036;
chunk__14839_16025 = G__16037;
count__14840_16026 = G__16038;
i__14841_16027 = G__16039;
continue;
}
} else
{var arg__11936__auto___16040 = cljs.core.first.call(null,seq__14838_16034__$1);a__11935__auto__.push(arg__11936__auto___16040);
{
var G__16041 = cljs.core.next.call(null,seq__14838_16034__$1);
var G__16042 = null;
var G__16043 = 0;
var G__16044 = 0;
seq__14838_16024 = G__16041;
chunk__14839_16025 = G__16042;
count__14840_16026 = G__16043;
i__14841_16027 = G__16044;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.caption.apply(null,a__11935__auto__);
};
var caption = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return caption__delegate.call(this,args__11934__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__16045){
var args__11934__auto__ = cljs.core.seq(arglist__16045);
return caption__delegate(args__11934__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14846_16046 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14847_16047 = null;var count__14848_16048 = 0;var i__14849_16049 = 0;while(true){
if((i__14849_16049 < count__14848_16048))
{var arg__11936__auto___16050 = cljs.core._nth.call(null,chunk__14847_16047,i__14849_16049);a__11935__auto__.push(arg__11936__auto___16050);
{
var G__16051 = seq__14846_16046;
var G__16052 = chunk__14847_16047;
var G__16053 = count__14848_16048;
var G__16054 = (i__14849_16049 + 1);
seq__14846_16046 = G__16051;
chunk__14847_16047 = G__16052;
count__14848_16048 = G__16053;
i__14849_16049 = G__16054;
continue;
}
} else
{var temp__4092__auto___16055 = cljs.core.seq.call(null,seq__14846_16046);if(temp__4092__auto___16055)
{var seq__14846_16056__$1 = temp__4092__auto___16055;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14846_16056__$1))
{var c__11077__auto___16057 = cljs.core.chunk_first.call(null,seq__14846_16056__$1);{
var G__16058 = cljs.core.chunk_rest.call(null,seq__14846_16056__$1);
var G__16059 = c__11077__auto___16057;
var G__16060 = cljs.core.count.call(null,c__11077__auto___16057);
var G__16061 = 0;
seq__14846_16046 = G__16058;
chunk__14847_16047 = G__16059;
count__14848_16048 = G__16060;
i__14849_16049 = G__16061;
continue;
}
} else
{var arg__11936__auto___16062 = cljs.core.first.call(null,seq__14846_16056__$1);a__11935__auto__.push(arg__11936__auto___16062);
{
var G__16063 = cljs.core.next.call(null,seq__14846_16056__$1);
var G__16064 = null;
var G__16065 = 0;
var G__16066 = 0;
seq__14846_16046 = G__16063;
chunk__14847_16047 = G__16064;
count__14848_16048 = G__16065;
i__14849_16049 = G__16066;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.cite.apply(null,a__11935__auto__);
};
var cite = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cite__delegate.call(this,args__11934__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__16067){
var args__11934__auto__ = cljs.core.seq(arglist__16067);
return cite__delegate(args__11934__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14854_16068 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14855_16069 = null;var count__14856_16070 = 0;var i__14857_16071 = 0;while(true){
if((i__14857_16071 < count__14856_16070))
{var arg__11936__auto___16072 = cljs.core._nth.call(null,chunk__14855_16069,i__14857_16071);a__11935__auto__.push(arg__11936__auto___16072);
{
var G__16073 = seq__14854_16068;
var G__16074 = chunk__14855_16069;
var G__16075 = count__14856_16070;
var G__16076 = (i__14857_16071 + 1);
seq__14854_16068 = G__16073;
chunk__14855_16069 = G__16074;
count__14856_16070 = G__16075;
i__14857_16071 = G__16076;
continue;
}
} else
{var temp__4092__auto___16077 = cljs.core.seq.call(null,seq__14854_16068);if(temp__4092__auto___16077)
{var seq__14854_16078__$1 = temp__4092__auto___16077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14854_16078__$1))
{var c__11077__auto___16079 = cljs.core.chunk_first.call(null,seq__14854_16078__$1);{
var G__16080 = cljs.core.chunk_rest.call(null,seq__14854_16078__$1);
var G__16081 = c__11077__auto___16079;
var G__16082 = cljs.core.count.call(null,c__11077__auto___16079);
var G__16083 = 0;
seq__14854_16068 = G__16080;
chunk__14855_16069 = G__16081;
count__14856_16070 = G__16082;
i__14857_16071 = G__16083;
continue;
}
} else
{var arg__11936__auto___16084 = cljs.core.first.call(null,seq__14854_16078__$1);a__11935__auto__.push(arg__11936__auto___16084);
{
var G__16085 = cljs.core.next.call(null,seq__14854_16078__$1);
var G__16086 = null;
var G__16087 = 0;
var G__16088 = 0;
seq__14854_16068 = G__16085;
chunk__14855_16069 = G__16086;
count__14856_16070 = G__16087;
i__14857_16071 = G__16088;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.code.apply(null,a__11935__auto__);
};
var code = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return code__delegate.call(this,args__11934__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__16089){
var args__11934__auto__ = cljs.core.seq(arglist__16089);
return code__delegate(args__11934__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14862_16090 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14863_16091 = null;var count__14864_16092 = 0;var i__14865_16093 = 0;while(true){
if((i__14865_16093 < count__14864_16092))
{var arg__11936__auto___16094 = cljs.core._nth.call(null,chunk__14863_16091,i__14865_16093);a__11935__auto__.push(arg__11936__auto___16094);
{
var G__16095 = seq__14862_16090;
var G__16096 = chunk__14863_16091;
var G__16097 = count__14864_16092;
var G__16098 = (i__14865_16093 + 1);
seq__14862_16090 = G__16095;
chunk__14863_16091 = G__16096;
count__14864_16092 = G__16097;
i__14865_16093 = G__16098;
continue;
}
} else
{var temp__4092__auto___16099 = cljs.core.seq.call(null,seq__14862_16090);if(temp__4092__auto___16099)
{var seq__14862_16100__$1 = temp__4092__auto___16099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14862_16100__$1))
{var c__11077__auto___16101 = cljs.core.chunk_first.call(null,seq__14862_16100__$1);{
var G__16102 = cljs.core.chunk_rest.call(null,seq__14862_16100__$1);
var G__16103 = c__11077__auto___16101;
var G__16104 = cljs.core.count.call(null,c__11077__auto___16101);
var G__16105 = 0;
seq__14862_16090 = G__16102;
chunk__14863_16091 = G__16103;
count__14864_16092 = G__16104;
i__14865_16093 = G__16105;
continue;
}
} else
{var arg__11936__auto___16106 = cljs.core.first.call(null,seq__14862_16100__$1);a__11935__auto__.push(arg__11936__auto___16106);
{
var G__16107 = cljs.core.next.call(null,seq__14862_16100__$1);
var G__16108 = null;
var G__16109 = 0;
var G__16110 = 0;
seq__14862_16090 = G__16107;
chunk__14863_16091 = G__16108;
count__14864_16092 = G__16109;
i__14865_16093 = G__16110;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.col.apply(null,a__11935__auto__);
};
var col = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return col__delegate.call(this,args__11934__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__16111){
var args__11934__auto__ = cljs.core.seq(arglist__16111);
return col__delegate(args__11934__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14870_16112 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14871_16113 = null;var count__14872_16114 = 0;var i__14873_16115 = 0;while(true){
if((i__14873_16115 < count__14872_16114))
{var arg__11936__auto___16116 = cljs.core._nth.call(null,chunk__14871_16113,i__14873_16115);a__11935__auto__.push(arg__11936__auto___16116);
{
var G__16117 = seq__14870_16112;
var G__16118 = chunk__14871_16113;
var G__16119 = count__14872_16114;
var G__16120 = (i__14873_16115 + 1);
seq__14870_16112 = G__16117;
chunk__14871_16113 = G__16118;
count__14872_16114 = G__16119;
i__14873_16115 = G__16120;
continue;
}
} else
{var temp__4092__auto___16121 = cljs.core.seq.call(null,seq__14870_16112);if(temp__4092__auto___16121)
{var seq__14870_16122__$1 = temp__4092__auto___16121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14870_16122__$1))
{var c__11077__auto___16123 = cljs.core.chunk_first.call(null,seq__14870_16122__$1);{
var G__16124 = cljs.core.chunk_rest.call(null,seq__14870_16122__$1);
var G__16125 = c__11077__auto___16123;
var G__16126 = cljs.core.count.call(null,c__11077__auto___16123);
var G__16127 = 0;
seq__14870_16112 = G__16124;
chunk__14871_16113 = G__16125;
count__14872_16114 = G__16126;
i__14873_16115 = G__16127;
continue;
}
} else
{var arg__11936__auto___16128 = cljs.core.first.call(null,seq__14870_16122__$1);a__11935__auto__.push(arg__11936__auto___16128);
{
var G__16129 = cljs.core.next.call(null,seq__14870_16122__$1);
var G__16130 = null;
var G__16131 = 0;
var G__16132 = 0;
seq__14870_16112 = G__16129;
chunk__14871_16113 = G__16130;
count__14872_16114 = G__16131;
i__14873_16115 = G__16132;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.colgroup.apply(null,a__11935__auto__);
};
var colgroup = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return colgroup__delegate.call(this,args__11934__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__16133){
var args__11934__auto__ = cljs.core.seq(arglist__16133);
return colgroup__delegate(args__11934__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14878_16134 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14879_16135 = null;var count__14880_16136 = 0;var i__14881_16137 = 0;while(true){
if((i__14881_16137 < count__14880_16136))
{var arg__11936__auto___16138 = cljs.core._nth.call(null,chunk__14879_16135,i__14881_16137);a__11935__auto__.push(arg__11936__auto___16138);
{
var G__16139 = seq__14878_16134;
var G__16140 = chunk__14879_16135;
var G__16141 = count__14880_16136;
var G__16142 = (i__14881_16137 + 1);
seq__14878_16134 = G__16139;
chunk__14879_16135 = G__16140;
count__14880_16136 = G__16141;
i__14881_16137 = G__16142;
continue;
}
} else
{var temp__4092__auto___16143 = cljs.core.seq.call(null,seq__14878_16134);if(temp__4092__auto___16143)
{var seq__14878_16144__$1 = temp__4092__auto___16143;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14878_16144__$1))
{var c__11077__auto___16145 = cljs.core.chunk_first.call(null,seq__14878_16144__$1);{
var G__16146 = cljs.core.chunk_rest.call(null,seq__14878_16144__$1);
var G__16147 = c__11077__auto___16145;
var G__16148 = cljs.core.count.call(null,c__11077__auto___16145);
var G__16149 = 0;
seq__14878_16134 = G__16146;
chunk__14879_16135 = G__16147;
count__14880_16136 = G__16148;
i__14881_16137 = G__16149;
continue;
}
} else
{var arg__11936__auto___16150 = cljs.core.first.call(null,seq__14878_16144__$1);a__11935__auto__.push(arg__11936__auto___16150);
{
var G__16151 = cljs.core.next.call(null,seq__14878_16144__$1);
var G__16152 = null;
var G__16153 = 0;
var G__16154 = 0;
seq__14878_16134 = G__16151;
chunk__14879_16135 = G__16152;
count__14880_16136 = G__16153;
i__14881_16137 = G__16154;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.data.apply(null,a__11935__auto__);
};
var data = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return data__delegate.call(this,args__11934__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__16155){
var args__11934__auto__ = cljs.core.seq(arglist__16155);
return data__delegate(args__11934__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14886_16156 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14887_16157 = null;var count__14888_16158 = 0;var i__14889_16159 = 0;while(true){
if((i__14889_16159 < count__14888_16158))
{var arg__11936__auto___16160 = cljs.core._nth.call(null,chunk__14887_16157,i__14889_16159);a__11935__auto__.push(arg__11936__auto___16160);
{
var G__16161 = seq__14886_16156;
var G__16162 = chunk__14887_16157;
var G__16163 = count__14888_16158;
var G__16164 = (i__14889_16159 + 1);
seq__14886_16156 = G__16161;
chunk__14887_16157 = G__16162;
count__14888_16158 = G__16163;
i__14889_16159 = G__16164;
continue;
}
} else
{var temp__4092__auto___16165 = cljs.core.seq.call(null,seq__14886_16156);if(temp__4092__auto___16165)
{var seq__14886_16166__$1 = temp__4092__auto___16165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14886_16166__$1))
{var c__11077__auto___16167 = cljs.core.chunk_first.call(null,seq__14886_16166__$1);{
var G__16168 = cljs.core.chunk_rest.call(null,seq__14886_16166__$1);
var G__16169 = c__11077__auto___16167;
var G__16170 = cljs.core.count.call(null,c__11077__auto___16167);
var G__16171 = 0;
seq__14886_16156 = G__16168;
chunk__14887_16157 = G__16169;
count__14888_16158 = G__16170;
i__14889_16159 = G__16171;
continue;
}
} else
{var arg__11936__auto___16172 = cljs.core.first.call(null,seq__14886_16166__$1);a__11935__auto__.push(arg__11936__auto___16172);
{
var G__16173 = cljs.core.next.call(null,seq__14886_16166__$1);
var G__16174 = null;
var G__16175 = 0;
var G__16176 = 0;
seq__14886_16156 = G__16173;
chunk__14887_16157 = G__16174;
count__14888_16158 = G__16175;
i__14889_16159 = G__16176;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.datalist.apply(null,a__11935__auto__);
};
var datalist = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return datalist__delegate.call(this,args__11934__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__16177){
var args__11934__auto__ = cljs.core.seq(arglist__16177);
return datalist__delegate(args__11934__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14894_16178 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14895_16179 = null;var count__14896_16180 = 0;var i__14897_16181 = 0;while(true){
if((i__14897_16181 < count__14896_16180))
{var arg__11936__auto___16182 = cljs.core._nth.call(null,chunk__14895_16179,i__14897_16181);a__11935__auto__.push(arg__11936__auto___16182);
{
var G__16183 = seq__14894_16178;
var G__16184 = chunk__14895_16179;
var G__16185 = count__14896_16180;
var G__16186 = (i__14897_16181 + 1);
seq__14894_16178 = G__16183;
chunk__14895_16179 = G__16184;
count__14896_16180 = G__16185;
i__14897_16181 = G__16186;
continue;
}
} else
{var temp__4092__auto___16187 = cljs.core.seq.call(null,seq__14894_16178);if(temp__4092__auto___16187)
{var seq__14894_16188__$1 = temp__4092__auto___16187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14894_16188__$1))
{var c__11077__auto___16189 = cljs.core.chunk_first.call(null,seq__14894_16188__$1);{
var G__16190 = cljs.core.chunk_rest.call(null,seq__14894_16188__$1);
var G__16191 = c__11077__auto___16189;
var G__16192 = cljs.core.count.call(null,c__11077__auto___16189);
var G__16193 = 0;
seq__14894_16178 = G__16190;
chunk__14895_16179 = G__16191;
count__14896_16180 = G__16192;
i__14897_16181 = G__16193;
continue;
}
} else
{var arg__11936__auto___16194 = cljs.core.first.call(null,seq__14894_16188__$1);a__11935__auto__.push(arg__11936__auto___16194);
{
var G__16195 = cljs.core.next.call(null,seq__14894_16188__$1);
var G__16196 = null;
var G__16197 = 0;
var G__16198 = 0;
seq__14894_16178 = G__16195;
chunk__14895_16179 = G__16196;
count__14896_16180 = G__16197;
i__14897_16181 = G__16198;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dd.apply(null,a__11935__auto__);
};
var dd = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dd__delegate.call(this,args__11934__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__16199){
var args__11934__auto__ = cljs.core.seq(arglist__16199);
return dd__delegate(args__11934__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14902_16200 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14903_16201 = null;var count__14904_16202 = 0;var i__14905_16203 = 0;while(true){
if((i__14905_16203 < count__14904_16202))
{var arg__11936__auto___16204 = cljs.core._nth.call(null,chunk__14903_16201,i__14905_16203);a__11935__auto__.push(arg__11936__auto___16204);
{
var G__16205 = seq__14902_16200;
var G__16206 = chunk__14903_16201;
var G__16207 = count__14904_16202;
var G__16208 = (i__14905_16203 + 1);
seq__14902_16200 = G__16205;
chunk__14903_16201 = G__16206;
count__14904_16202 = G__16207;
i__14905_16203 = G__16208;
continue;
}
} else
{var temp__4092__auto___16209 = cljs.core.seq.call(null,seq__14902_16200);if(temp__4092__auto___16209)
{var seq__14902_16210__$1 = temp__4092__auto___16209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14902_16210__$1))
{var c__11077__auto___16211 = cljs.core.chunk_first.call(null,seq__14902_16210__$1);{
var G__16212 = cljs.core.chunk_rest.call(null,seq__14902_16210__$1);
var G__16213 = c__11077__auto___16211;
var G__16214 = cljs.core.count.call(null,c__11077__auto___16211);
var G__16215 = 0;
seq__14902_16200 = G__16212;
chunk__14903_16201 = G__16213;
count__14904_16202 = G__16214;
i__14905_16203 = G__16215;
continue;
}
} else
{var arg__11936__auto___16216 = cljs.core.first.call(null,seq__14902_16210__$1);a__11935__auto__.push(arg__11936__auto___16216);
{
var G__16217 = cljs.core.next.call(null,seq__14902_16210__$1);
var G__16218 = null;
var G__16219 = 0;
var G__16220 = 0;
seq__14902_16200 = G__16217;
chunk__14903_16201 = G__16218;
count__14904_16202 = G__16219;
i__14905_16203 = G__16220;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.del.apply(null,a__11935__auto__);
};
var del = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return del__delegate.call(this,args__11934__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__16221){
var args__11934__auto__ = cljs.core.seq(arglist__16221);
return del__delegate(args__11934__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14910_16222 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14911_16223 = null;var count__14912_16224 = 0;var i__14913_16225 = 0;while(true){
if((i__14913_16225 < count__14912_16224))
{var arg__11936__auto___16226 = cljs.core._nth.call(null,chunk__14911_16223,i__14913_16225);a__11935__auto__.push(arg__11936__auto___16226);
{
var G__16227 = seq__14910_16222;
var G__16228 = chunk__14911_16223;
var G__16229 = count__14912_16224;
var G__16230 = (i__14913_16225 + 1);
seq__14910_16222 = G__16227;
chunk__14911_16223 = G__16228;
count__14912_16224 = G__16229;
i__14913_16225 = G__16230;
continue;
}
} else
{var temp__4092__auto___16231 = cljs.core.seq.call(null,seq__14910_16222);if(temp__4092__auto___16231)
{var seq__14910_16232__$1 = temp__4092__auto___16231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14910_16232__$1))
{var c__11077__auto___16233 = cljs.core.chunk_first.call(null,seq__14910_16232__$1);{
var G__16234 = cljs.core.chunk_rest.call(null,seq__14910_16232__$1);
var G__16235 = c__11077__auto___16233;
var G__16236 = cljs.core.count.call(null,c__11077__auto___16233);
var G__16237 = 0;
seq__14910_16222 = G__16234;
chunk__14911_16223 = G__16235;
count__14912_16224 = G__16236;
i__14913_16225 = G__16237;
continue;
}
} else
{var arg__11936__auto___16238 = cljs.core.first.call(null,seq__14910_16232__$1);a__11935__auto__.push(arg__11936__auto___16238);
{
var G__16239 = cljs.core.next.call(null,seq__14910_16232__$1);
var G__16240 = null;
var G__16241 = 0;
var G__16242 = 0;
seq__14910_16222 = G__16239;
chunk__14911_16223 = G__16240;
count__14912_16224 = G__16241;
i__14913_16225 = G__16242;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.details.apply(null,a__11935__auto__);
};
var details = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return details__delegate.call(this,args__11934__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__16243){
var args__11934__auto__ = cljs.core.seq(arglist__16243);
return details__delegate(args__11934__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14918_16244 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14919_16245 = null;var count__14920_16246 = 0;var i__14921_16247 = 0;while(true){
if((i__14921_16247 < count__14920_16246))
{var arg__11936__auto___16248 = cljs.core._nth.call(null,chunk__14919_16245,i__14921_16247);a__11935__auto__.push(arg__11936__auto___16248);
{
var G__16249 = seq__14918_16244;
var G__16250 = chunk__14919_16245;
var G__16251 = count__14920_16246;
var G__16252 = (i__14921_16247 + 1);
seq__14918_16244 = G__16249;
chunk__14919_16245 = G__16250;
count__14920_16246 = G__16251;
i__14921_16247 = G__16252;
continue;
}
} else
{var temp__4092__auto___16253 = cljs.core.seq.call(null,seq__14918_16244);if(temp__4092__auto___16253)
{var seq__14918_16254__$1 = temp__4092__auto___16253;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14918_16254__$1))
{var c__11077__auto___16255 = cljs.core.chunk_first.call(null,seq__14918_16254__$1);{
var G__16256 = cljs.core.chunk_rest.call(null,seq__14918_16254__$1);
var G__16257 = c__11077__auto___16255;
var G__16258 = cljs.core.count.call(null,c__11077__auto___16255);
var G__16259 = 0;
seq__14918_16244 = G__16256;
chunk__14919_16245 = G__16257;
count__14920_16246 = G__16258;
i__14921_16247 = G__16259;
continue;
}
} else
{var arg__11936__auto___16260 = cljs.core.first.call(null,seq__14918_16254__$1);a__11935__auto__.push(arg__11936__auto___16260);
{
var G__16261 = cljs.core.next.call(null,seq__14918_16254__$1);
var G__16262 = null;
var G__16263 = 0;
var G__16264 = 0;
seq__14918_16244 = G__16261;
chunk__14919_16245 = G__16262;
count__14920_16246 = G__16263;
i__14921_16247 = G__16264;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dfn.apply(null,a__11935__auto__);
};
var dfn = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dfn__delegate.call(this,args__11934__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__16265){
var args__11934__auto__ = cljs.core.seq(arglist__16265);
return dfn__delegate(args__11934__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14926_16266 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14927_16267 = null;var count__14928_16268 = 0;var i__14929_16269 = 0;while(true){
if((i__14929_16269 < count__14928_16268))
{var arg__11936__auto___16270 = cljs.core._nth.call(null,chunk__14927_16267,i__14929_16269);a__11935__auto__.push(arg__11936__auto___16270);
{
var G__16271 = seq__14926_16266;
var G__16272 = chunk__14927_16267;
var G__16273 = count__14928_16268;
var G__16274 = (i__14929_16269 + 1);
seq__14926_16266 = G__16271;
chunk__14927_16267 = G__16272;
count__14928_16268 = G__16273;
i__14929_16269 = G__16274;
continue;
}
} else
{var temp__4092__auto___16275 = cljs.core.seq.call(null,seq__14926_16266);if(temp__4092__auto___16275)
{var seq__14926_16276__$1 = temp__4092__auto___16275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14926_16276__$1))
{var c__11077__auto___16277 = cljs.core.chunk_first.call(null,seq__14926_16276__$1);{
var G__16278 = cljs.core.chunk_rest.call(null,seq__14926_16276__$1);
var G__16279 = c__11077__auto___16277;
var G__16280 = cljs.core.count.call(null,c__11077__auto___16277);
var G__16281 = 0;
seq__14926_16266 = G__16278;
chunk__14927_16267 = G__16279;
count__14928_16268 = G__16280;
i__14929_16269 = G__16281;
continue;
}
} else
{var arg__11936__auto___16282 = cljs.core.first.call(null,seq__14926_16276__$1);a__11935__auto__.push(arg__11936__auto___16282);
{
var G__16283 = cljs.core.next.call(null,seq__14926_16276__$1);
var G__16284 = null;
var G__16285 = 0;
var G__16286 = 0;
seq__14926_16266 = G__16283;
chunk__14927_16267 = G__16284;
count__14928_16268 = G__16285;
i__14929_16269 = G__16286;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.div.apply(null,a__11935__auto__);
};
var div = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return div__delegate.call(this,args__11934__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__16287){
var args__11934__auto__ = cljs.core.seq(arglist__16287);
return div__delegate(args__11934__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14934_16288 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14935_16289 = null;var count__14936_16290 = 0;var i__14937_16291 = 0;while(true){
if((i__14937_16291 < count__14936_16290))
{var arg__11936__auto___16292 = cljs.core._nth.call(null,chunk__14935_16289,i__14937_16291);a__11935__auto__.push(arg__11936__auto___16292);
{
var G__16293 = seq__14934_16288;
var G__16294 = chunk__14935_16289;
var G__16295 = count__14936_16290;
var G__16296 = (i__14937_16291 + 1);
seq__14934_16288 = G__16293;
chunk__14935_16289 = G__16294;
count__14936_16290 = G__16295;
i__14937_16291 = G__16296;
continue;
}
} else
{var temp__4092__auto___16297 = cljs.core.seq.call(null,seq__14934_16288);if(temp__4092__auto___16297)
{var seq__14934_16298__$1 = temp__4092__auto___16297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14934_16298__$1))
{var c__11077__auto___16299 = cljs.core.chunk_first.call(null,seq__14934_16298__$1);{
var G__16300 = cljs.core.chunk_rest.call(null,seq__14934_16298__$1);
var G__16301 = c__11077__auto___16299;
var G__16302 = cljs.core.count.call(null,c__11077__auto___16299);
var G__16303 = 0;
seq__14934_16288 = G__16300;
chunk__14935_16289 = G__16301;
count__14936_16290 = G__16302;
i__14937_16291 = G__16303;
continue;
}
} else
{var arg__11936__auto___16304 = cljs.core.first.call(null,seq__14934_16298__$1);a__11935__auto__.push(arg__11936__auto___16304);
{
var G__16305 = cljs.core.next.call(null,seq__14934_16298__$1);
var G__16306 = null;
var G__16307 = 0;
var G__16308 = 0;
seq__14934_16288 = G__16305;
chunk__14935_16289 = G__16306;
count__14936_16290 = G__16307;
i__14937_16291 = G__16308;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dl.apply(null,a__11935__auto__);
};
var dl = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dl__delegate.call(this,args__11934__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__16309){
var args__11934__auto__ = cljs.core.seq(arglist__16309);
return dl__delegate(args__11934__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14942_16310 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14943_16311 = null;var count__14944_16312 = 0;var i__14945_16313 = 0;while(true){
if((i__14945_16313 < count__14944_16312))
{var arg__11936__auto___16314 = cljs.core._nth.call(null,chunk__14943_16311,i__14945_16313);a__11935__auto__.push(arg__11936__auto___16314);
{
var G__16315 = seq__14942_16310;
var G__16316 = chunk__14943_16311;
var G__16317 = count__14944_16312;
var G__16318 = (i__14945_16313 + 1);
seq__14942_16310 = G__16315;
chunk__14943_16311 = G__16316;
count__14944_16312 = G__16317;
i__14945_16313 = G__16318;
continue;
}
} else
{var temp__4092__auto___16319 = cljs.core.seq.call(null,seq__14942_16310);if(temp__4092__auto___16319)
{var seq__14942_16320__$1 = temp__4092__auto___16319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14942_16320__$1))
{var c__11077__auto___16321 = cljs.core.chunk_first.call(null,seq__14942_16320__$1);{
var G__16322 = cljs.core.chunk_rest.call(null,seq__14942_16320__$1);
var G__16323 = c__11077__auto___16321;
var G__16324 = cljs.core.count.call(null,c__11077__auto___16321);
var G__16325 = 0;
seq__14942_16310 = G__16322;
chunk__14943_16311 = G__16323;
count__14944_16312 = G__16324;
i__14945_16313 = G__16325;
continue;
}
} else
{var arg__11936__auto___16326 = cljs.core.first.call(null,seq__14942_16320__$1);a__11935__auto__.push(arg__11936__auto___16326);
{
var G__16327 = cljs.core.next.call(null,seq__14942_16320__$1);
var G__16328 = null;
var G__16329 = 0;
var G__16330 = 0;
seq__14942_16310 = G__16327;
chunk__14943_16311 = G__16328;
count__14944_16312 = G__16329;
i__14945_16313 = G__16330;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.dt.apply(null,a__11935__auto__);
};
var dt = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return dt__delegate.call(this,args__11934__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__16331){
var args__11934__auto__ = cljs.core.seq(arglist__16331);
return dt__delegate(args__11934__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14950_16332 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14951_16333 = null;var count__14952_16334 = 0;var i__14953_16335 = 0;while(true){
if((i__14953_16335 < count__14952_16334))
{var arg__11936__auto___16336 = cljs.core._nth.call(null,chunk__14951_16333,i__14953_16335);a__11935__auto__.push(arg__11936__auto___16336);
{
var G__16337 = seq__14950_16332;
var G__16338 = chunk__14951_16333;
var G__16339 = count__14952_16334;
var G__16340 = (i__14953_16335 + 1);
seq__14950_16332 = G__16337;
chunk__14951_16333 = G__16338;
count__14952_16334 = G__16339;
i__14953_16335 = G__16340;
continue;
}
} else
{var temp__4092__auto___16341 = cljs.core.seq.call(null,seq__14950_16332);if(temp__4092__auto___16341)
{var seq__14950_16342__$1 = temp__4092__auto___16341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14950_16342__$1))
{var c__11077__auto___16343 = cljs.core.chunk_first.call(null,seq__14950_16342__$1);{
var G__16344 = cljs.core.chunk_rest.call(null,seq__14950_16342__$1);
var G__16345 = c__11077__auto___16343;
var G__16346 = cljs.core.count.call(null,c__11077__auto___16343);
var G__16347 = 0;
seq__14950_16332 = G__16344;
chunk__14951_16333 = G__16345;
count__14952_16334 = G__16346;
i__14953_16335 = G__16347;
continue;
}
} else
{var arg__11936__auto___16348 = cljs.core.first.call(null,seq__14950_16342__$1);a__11935__auto__.push(arg__11936__auto___16348);
{
var G__16349 = cljs.core.next.call(null,seq__14950_16342__$1);
var G__16350 = null;
var G__16351 = 0;
var G__16352 = 0;
seq__14950_16332 = G__16349;
chunk__14951_16333 = G__16350;
count__14952_16334 = G__16351;
i__14953_16335 = G__16352;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.em.apply(null,a__11935__auto__);
};
var em = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return em__delegate.call(this,args__11934__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__16353){
var args__11934__auto__ = cljs.core.seq(arglist__16353);
return em__delegate(args__11934__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14966_16354 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14967_16355 = null;var count__14968_16356 = 0;var i__14969_16357 = 0;while(true){
if((i__14969_16357 < count__14968_16356))
{var arg__11936__auto___16358 = cljs.core._nth.call(null,chunk__14967_16355,i__14969_16357);a__11935__auto__.push(arg__11936__auto___16358);
{
var G__16359 = seq__14966_16354;
var G__16360 = chunk__14967_16355;
var G__16361 = count__14968_16356;
var G__16362 = (i__14969_16357 + 1);
seq__14966_16354 = G__16359;
chunk__14967_16355 = G__16360;
count__14968_16356 = G__16361;
i__14969_16357 = G__16362;
continue;
}
} else
{var temp__4092__auto___16363 = cljs.core.seq.call(null,seq__14966_16354);if(temp__4092__auto___16363)
{var seq__14966_16364__$1 = temp__4092__auto___16363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14966_16364__$1))
{var c__11077__auto___16365 = cljs.core.chunk_first.call(null,seq__14966_16364__$1);{
var G__16366 = cljs.core.chunk_rest.call(null,seq__14966_16364__$1);
var G__16367 = c__11077__auto___16365;
var G__16368 = cljs.core.count.call(null,c__11077__auto___16365);
var G__16369 = 0;
seq__14966_16354 = G__16366;
chunk__14967_16355 = G__16367;
count__14968_16356 = G__16368;
i__14969_16357 = G__16369;
continue;
}
} else
{var arg__11936__auto___16370 = cljs.core.first.call(null,seq__14966_16364__$1);a__11935__auto__.push(arg__11936__auto___16370);
{
var G__16371 = cljs.core.next.call(null,seq__14966_16364__$1);
var G__16372 = null;
var G__16373 = 0;
var G__16374 = 0;
seq__14966_16354 = G__16371;
chunk__14967_16355 = G__16372;
count__14968_16356 = G__16373;
i__14969_16357 = G__16374;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.embed.apply(null,a__11935__auto__);
};
var embed = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return embed__delegate.call(this,args__11934__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__16375){
var args__11934__auto__ = cljs.core.seq(arglist__16375);
return embed__delegate(args__11934__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14974_16376 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14975_16377 = null;var count__14976_16378 = 0;var i__14977_16379 = 0;while(true){
if((i__14977_16379 < count__14976_16378))
{var arg__11936__auto___16380 = cljs.core._nth.call(null,chunk__14975_16377,i__14977_16379);a__11935__auto__.push(arg__11936__auto___16380);
{
var G__16381 = seq__14974_16376;
var G__16382 = chunk__14975_16377;
var G__16383 = count__14976_16378;
var G__16384 = (i__14977_16379 + 1);
seq__14974_16376 = G__16381;
chunk__14975_16377 = G__16382;
count__14976_16378 = G__16383;
i__14977_16379 = G__16384;
continue;
}
} else
{var temp__4092__auto___16385 = cljs.core.seq.call(null,seq__14974_16376);if(temp__4092__auto___16385)
{var seq__14974_16386__$1 = temp__4092__auto___16385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14974_16386__$1))
{var c__11077__auto___16387 = cljs.core.chunk_first.call(null,seq__14974_16386__$1);{
var G__16388 = cljs.core.chunk_rest.call(null,seq__14974_16386__$1);
var G__16389 = c__11077__auto___16387;
var G__16390 = cljs.core.count.call(null,c__11077__auto___16387);
var G__16391 = 0;
seq__14974_16376 = G__16388;
chunk__14975_16377 = G__16389;
count__14976_16378 = G__16390;
i__14977_16379 = G__16391;
continue;
}
} else
{var arg__11936__auto___16392 = cljs.core.first.call(null,seq__14974_16386__$1);a__11935__auto__.push(arg__11936__auto___16392);
{
var G__16393 = cljs.core.next.call(null,seq__14974_16386__$1);
var G__16394 = null;
var G__16395 = 0;
var G__16396 = 0;
seq__14974_16376 = G__16393;
chunk__14975_16377 = G__16394;
count__14976_16378 = G__16395;
i__14977_16379 = G__16396;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.fieldset.apply(null,a__11935__auto__);
};
var fieldset = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fieldset__delegate.call(this,args__11934__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__16397){
var args__11934__auto__ = cljs.core.seq(arglist__16397);
return fieldset__delegate(args__11934__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14982_16398 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14983_16399 = null;var count__14984_16400 = 0;var i__14985_16401 = 0;while(true){
if((i__14985_16401 < count__14984_16400))
{var arg__11936__auto___16402 = cljs.core._nth.call(null,chunk__14983_16399,i__14985_16401);a__11935__auto__.push(arg__11936__auto___16402);
{
var G__16403 = seq__14982_16398;
var G__16404 = chunk__14983_16399;
var G__16405 = count__14984_16400;
var G__16406 = (i__14985_16401 + 1);
seq__14982_16398 = G__16403;
chunk__14983_16399 = G__16404;
count__14984_16400 = G__16405;
i__14985_16401 = G__16406;
continue;
}
} else
{var temp__4092__auto___16407 = cljs.core.seq.call(null,seq__14982_16398);if(temp__4092__auto___16407)
{var seq__14982_16408__$1 = temp__4092__auto___16407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14982_16408__$1))
{var c__11077__auto___16409 = cljs.core.chunk_first.call(null,seq__14982_16408__$1);{
var G__16410 = cljs.core.chunk_rest.call(null,seq__14982_16408__$1);
var G__16411 = c__11077__auto___16409;
var G__16412 = cljs.core.count.call(null,c__11077__auto___16409);
var G__16413 = 0;
seq__14982_16398 = G__16410;
chunk__14983_16399 = G__16411;
count__14984_16400 = G__16412;
i__14985_16401 = G__16413;
continue;
}
} else
{var arg__11936__auto___16414 = cljs.core.first.call(null,seq__14982_16408__$1);a__11935__auto__.push(arg__11936__auto___16414);
{
var G__16415 = cljs.core.next.call(null,seq__14982_16408__$1);
var G__16416 = null;
var G__16417 = 0;
var G__16418 = 0;
seq__14982_16398 = G__16415;
chunk__14983_16399 = G__16416;
count__14984_16400 = G__16417;
i__14985_16401 = G__16418;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figcaption.apply(null,a__11935__auto__);
};
var figcaption = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figcaption__delegate.call(this,args__11934__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__16419){
var args__11934__auto__ = cljs.core.seq(arglist__16419);
return figcaption__delegate(args__11934__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14990_16420 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14991_16421 = null;var count__14992_16422 = 0;var i__14993_16423 = 0;while(true){
if((i__14993_16423 < count__14992_16422))
{var arg__11936__auto___16424 = cljs.core._nth.call(null,chunk__14991_16421,i__14993_16423);a__11935__auto__.push(arg__11936__auto___16424);
{
var G__16425 = seq__14990_16420;
var G__16426 = chunk__14991_16421;
var G__16427 = count__14992_16422;
var G__16428 = (i__14993_16423 + 1);
seq__14990_16420 = G__16425;
chunk__14991_16421 = G__16426;
count__14992_16422 = G__16427;
i__14993_16423 = G__16428;
continue;
}
} else
{var temp__4092__auto___16429 = cljs.core.seq.call(null,seq__14990_16420);if(temp__4092__auto___16429)
{var seq__14990_16430__$1 = temp__4092__auto___16429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14990_16430__$1))
{var c__11077__auto___16431 = cljs.core.chunk_first.call(null,seq__14990_16430__$1);{
var G__16432 = cljs.core.chunk_rest.call(null,seq__14990_16430__$1);
var G__16433 = c__11077__auto___16431;
var G__16434 = cljs.core.count.call(null,c__11077__auto___16431);
var G__16435 = 0;
seq__14990_16420 = G__16432;
chunk__14991_16421 = G__16433;
count__14992_16422 = G__16434;
i__14993_16423 = G__16435;
continue;
}
} else
{var arg__11936__auto___16436 = cljs.core.first.call(null,seq__14990_16430__$1);a__11935__auto__.push(arg__11936__auto___16436);
{
var G__16437 = cljs.core.next.call(null,seq__14990_16430__$1);
var G__16438 = null;
var G__16439 = 0;
var G__16440 = 0;
seq__14990_16420 = G__16437;
chunk__14991_16421 = G__16438;
count__14992_16422 = G__16439;
i__14993_16423 = G__16440;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.figure.apply(null,a__11935__auto__);
};
var figure = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return figure__delegate.call(this,args__11934__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__16441){
var args__11934__auto__ = cljs.core.seq(arglist__16441);
return figure__delegate(args__11934__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14998_16442 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14999_16443 = null;var count__15000_16444 = 0;var i__15001_16445 = 0;while(true){
if((i__15001_16445 < count__15000_16444))
{var arg__11936__auto___16446 = cljs.core._nth.call(null,chunk__14999_16443,i__15001_16445);a__11935__auto__.push(arg__11936__auto___16446);
{
var G__16447 = seq__14998_16442;
var G__16448 = chunk__14999_16443;
var G__16449 = count__15000_16444;
var G__16450 = (i__15001_16445 + 1);
seq__14998_16442 = G__16447;
chunk__14999_16443 = G__16448;
count__15000_16444 = G__16449;
i__15001_16445 = G__16450;
continue;
}
} else
{var temp__4092__auto___16451 = cljs.core.seq.call(null,seq__14998_16442);if(temp__4092__auto___16451)
{var seq__14998_16452__$1 = temp__4092__auto___16451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14998_16452__$1))
{var c__11077__auto___16453 = cljs.core.chunk_first.call(null,seq__14998_16452__$1);{
var G__16454 = cljs.core.chunk_rest.call(null,seq__14998_16452__$1);
var G__16455 = c__11077__auto___16453;
var G__16456 = cljs.core.count.call(null,c__11077__auto___16453);
var G__16457 = 0;
seq__14998_16442 = G__16454;
chunk__14999_16443 = G__16455;
count__15000_16444 = G__16456;
i__15001_16445 = G__16457;
continue;
}
} else
{var arg__11936__auto___16458 = cljs.core.first.call(null,seq__14998_16452__$1);a__11935__auto__.push(arg__11936__auto___16458);
{
var G__16459 = cljs.core.next.call(null,seq__14998_16452__$1);
var G__16460 = null;
var G__16461 = 0;
var G__16462 = 0;
seq__14998_16442 = G__16459;
chunk__14999_16443 = G__16460;
count__15000_16444 = G__16461;
i__15001_16445 = G__16462;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.footer.apply(null,a__11935__auto__);
};
var footer = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return footer__delegate.call(this,args__11934__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__16463){
var args__11934__auto__ = cljs.core.seq(arglist__16463);
return footer__delegate(args__11934__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15006_16464 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15007_16465 = null;var count__15008_16466 = 0;var i__15009_16467 = 0;while(true){
if((i__15009_16467 < count__15008_16466))
{var arg__11936__auto___16468 = cljs.core._nth.call(null,chunk__15007_16465,i__15009_16467);a__11935__auto__.push(arg__11936__auto___16468);
{
var G__16469 = seq__15006_16464;
var G__16470 = chunk__15007_16465;
var G__16471 = count__15008_16466;
var G__16472 = (i__15009_16467 + 1);
seq__15006_16464 = G__16469;
chunk__15007_16465 = G__16470;
count__15008_16466 = G__16471;
i__15009_16467 = G__16472;
continue;
}
} else
{var temp__4092__auto___16473 = cljs.core.seq.call(null,seq__15006_16464);if(temp__4092__auto___16473)
{var seq__15006_16474__$1 = temp__4092__auto___16473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15006_16474__$1))
{var c__11077__auto___16475 = cljs.core.chunk_first.call(null,seq__15006_16474__$1);{
var G__16476 = cljs.core.chunk_rest.call(null,seq__15006_16474__$1);
var G__16477 = c__11077__auto___16475;
var G__16478 = cljs.core.count.call(null,c__11077__auto___16475);
var G__16479 = 0;
seq__15006_16464 = G__16476;
chunk__15007_16465 = G__16477;
count__15008_16466 = G__16478;
i__15009_16467 = G__16479;
continue;
}
} else
{var arg__11936__auto___16480 = cljs.core.first.call(null,seq__15006_16474__$1);a__11935__auto__.push(arg__11936__auto___16480);
{
var G__16481 = cljs.core.next.call(null,seq__15006_16474__$1);
var G__16482 = null;
var G__16483 = 0;
var G__16484 = 0;
seq__15006_16464 = G__16481;
chunk__15007_16465 = G__16482;
count__15008_16466 = G__16483;
i__15009_16467 = G__16484;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.form.apply(null,a__11935__auto__);
};
var form = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return form__delegate.call(this,args__11934__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__16485){
var args__11934__auto__ = cljs.core.seq(arglist__16485);
return form__delegate(args__11934__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15014_16486 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15015_16487 = null;var count__15016_16488 = 0;var i__15017_16489 = 0;while(true){
if((i__15017_16489 < count__15016_16488))
{var arg__11936__auto___16490 = cljs.core._nth.call(null,chunk__15015_16487,i__15017_16489);a__11935__auto__.push(arg__11936__auto___16490);
{
var G__16491 = seq__15014_16486;
var G__16492 = chunk__15015_16487;
var G__16493 = count__15016_16488;
var G__16494 = (i__15017_16489 + 1);
seq__15014_16486 = G__16491;
chunk__15015_16487 = G__16492;
count__15016_16488 = G__16493;
i__15017_16489 = G__16494;
continue;
}
} else
{var temp__4092__auto___16495 = cljs.core.seq.call(null,seq__15014_16486);if(temp__4092__auto___16495)
{var seq__15014_16496__$1 = temp__4092__auto___16495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15014_16496__$1))
{var c__11077__auto___16497 = cljs.core.chunk_first.call(null,seq__15014_16496__$1);{
var G__16498 = cljs.core.chunk_rest.call(null,seq__15014_16496__$1);
var G__16499 = c__11077__auto___16497;
var G__16500 = cljs.core.count.call(null,c__11077__auto___16497);
var G__16501 = 0;
seq__15014_16486 = G__16498;
chunk__15015_16487 = G__16499;
count__15016_16488 = G__16500;
i__15017_16489 = G__16501;
continue;
}
} else
{var arg__11936__auto___16502 = cljs.core.first.call(null,seq__15014_16496__$1);a__11935__auto__.push(arg__11936__auto___16502);
{
var G__16503 = cljs.core.next.call(null,seq__15014_16496__$1);
var G__16504 = null;
var G__16505 = 0;
var G__16506 = 0;
seq__15014_16486 = G__16503;
chunk__15015_16487 = G__16504;
count__15016_16488 = G__16505;
i__15017_16489 = G__16506;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h1.apply(null,a__11935__auto__);
};
var h1 = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h1__delegate.call(this,args__11934__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__16507){
var args__11934__auto__ = cljs.core.seq(arglist__16507);
return h1__delegate(args__11934__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15022_16508 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15023_16509 = null;var count__15024_16510 = 0;var i__15025_16511 = 0;while(true){
if((i__15025_16511 < count__15024_16510))
{var arg__11936__auto___16512 = cljs.core._nth.call(null,chunk__15023_16509,i__15025_16511);a__11935__auto__.push(arg__11936__auto___16512);
{
var G__16513 = seq__15022_16508;
var G__16514 = chunk__15023_16509;
var G__16515 = count__15024_16510;
var G__16516 = (i__15025_16511 + 1);
seq__15022_16508 = G__16513;
chunk__15023_16509 = G__16514;
count__15024_16510 = G__16515;
i__15025_16511 = G__16516;
continue;
}
} else
{var temp__4092__auto___16517 = cljs.core.seq.call(null,seq__15022_16508);if(temp__4092__auto___16517)
{var seq__15022_16518__$1 = temp__4092__auto___16517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15022_16518__$1))
{var c__11077__auto___16519 = cljs.core.chunk_first.call(null,seq__15022_16518__$1);{
var G__16520 = cljs.core.chunk_rest.call(null,seq__15022_16518__$1);
var G__16521 = c__11077__auto___16519;
var G__16522 = cljs.core.count.call(null,c__11077__auto___16519);
var G__16523 = 0;
seq__15022_16508 = G__16520;
chunk__15023_16509 = G__16521;
count__15024_16510 = G__16522;
i__15025_16511 = G__16523;
continue;
}
} else
{var arg__11936__auto___16524 = cljs.core.first.call(null,seq__15022_16518__$1);a__11935__auto__.push(arg__11936__auto___16524);
{
var G__16525 = cljs.core.next.call(null,seq__15022_16518__$1);
var G__16526 = null;
var G__16527 = 0;
var G__16528 = 0;
seq__15022_16508 = G__16525;
chunk__15023_16509 = G__16526;
count__15024_16510 = G__16527;
i__15025_16511 = G__16528;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h2.apply(null,a__11935__auto__);
};
var h2 = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h2__delegate.call(this,args__11934__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__16529){
var args__11934__auto__ = cljs.core.seq(arglist__16529);
return h2__delegate(args__11934__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15030_16530 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15031_16531 = null;var count__15032_16532 = 0;var i__15033_16533 = 0;while(true){
if((i__15033_16533 < count__15032_16532))
{var arg__11936__auto___16534 = cljs.core._nth.call(null,chunk__15031_16531,i__15033_16533);a__11935__auto__.push(arg__11936__auto___16534);
{
var G__16535 = seq__15030_16530;
var G__16536 = chunk__15031_16531;
var G__16537 = count__15032_16532;
var G__16538 = (i__15033_16533 + 1);
seq__15030_16530 = G__16535;
chunk__15031_16531 = G__16536;
count__15032_16532 = G__16537;
i__15033_16533 = G__16538;
continue;
}
} else
{var temp__4092__auto___16539 = cljs.core.seq.call(null,seq__15030_16530);if(temp__4092__auto___16539)
{var seq__15030_16540__$1 = temp__4092__auto___16539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15030_16540__$1))
{var c__11077__auto___16541 = cljs.core.chunk_first.call(null,seq__15030_16540__$1);{
var G__16542 = cljs.core.chunk_rest.call(null,seq__15030_16540__$1);
var G__16543 = c__11077__auto___16541;
var G__16544 = cljs.core.count.call(null,c__11077__auto___16541);
var G__16545 = 0;
seq__15030_16530 = G__16542;
chunk__15031_16531 = G__16543;
count__15032_16532 = G__16544;
i__15033_16533 = G__16545;
continue;
}
} else
{var arg__11936__auto___16546 = cljs.core.first.call(null,seq__15030_16540__$1);a__11935__auto__.push(arg__11936__auto___16546);
{
var G__16547 = cljs.core.next.call(null,seq__15030_16540__$1);
var G__16548 = null;
var G__16549 = 0;
var G__16550 = 0;
seq__15030_16530 = G__16547;
chunk__15031_16531 = G__16548;
count__15032_16532 = G__16549;
i__15033_16533 = G__16550;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h3.apply(null,a__11935__auto__);
};
var h3 = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h3__delegate.call(this,args__11934__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__16551){
var args__11934__auto__ = cljs.core.seq(arglist__16551);
return h3__delegate(args__11934__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15038_16552 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15039_16553 = null;var count__15040_16554 = 0;var i__15041_16555 = 0;while(true){
if((i__15041_16555 < count__15040_16554))
{var arg__11936__auto___16556 = cljs.core._nth.call(null,chunk__15039_16553,i__15041_16555);a__11935__auto__.push(arg__11936__auto___16556);
{
var G__16557 = seq__15038_16552;
var G__16558 = chunk__15039_16553;
var G__16559 = count__15040_16554;
var G__16560 = (i__15041_16555 + 1);
seq__15038_16552 = G__16557;
chunk__15039_16553 = G__16558;
count__15040_16554 = G__16559;
i__15041_16555 = G__16560;
continue;
}
} else
{var temp__4092__auto___16561 = cljs.core.seq.call(null,seq__15038_16552);if(temp__4092__auto___16561)
{var seq__15038_16562__$1 = temp__4092__auto___16561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15038_16562__$1))
{var c__11077__auto___16563 = cljs.core.chunk_first.call(null,seq__15038_16562__$1);{
var G__16564 = cljs.core.chunk_rest.call(null,seq__15038_16562__$1);
var G__16565 = c__11077__auto___16563;
var G__16566 = cljs.core.count.call(null,c__11077__auto___16563);
var G__16567 = 0;
seq__15038_16552 = G__16564;
chunk__15039_16553 = G__16565;
count__15040_16554 = G__16566;
i__15041_16555 = G__16567;
continue;
}
} else
{var arg__11936__auto___16568 = cljs.core.first.call(null,seq__15038_16562__$1);a__11935__auto__.push(arg__11936__auto___16568);
{
var G__16569 = cljs.core.next.call(null,seq__15038_16562__$1);
var G__16570 = null;
var G__16571 = 0;
var G__16572 = 0;
seq__15038_16552 = G__16569;
chunk__15039_16553 = G__16570;
count__15040_16554 = G__16571;
i__15041_16555 = G__16572;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h4.apply(null,a__11935__auto__);
};
var h4 = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h4__delegate.call(this,args__11934__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__16573){
var args__11934__auto__ = cljs.core.seq(arglist__16573);
return h4__delegate(args__11934__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15046_16574 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15047_16575 = null;var count__15048_16576 = 0;var i__15049_16577 = 0;while(true){
if((i__15049_16577 < count__15048_16576))
{var arg__11936__auto___16578 = cljs.core._nth.call(null,chunk__15047_16575,i__15049_16577);a__11935__auto__.push(arg__11936__auto___16578);
{
var G__16579 = seq__15046_16574;
var G__16580 = chunk__15047_16575;
var G__16581 = count__15048_16576;
var G__16582 = (i__15049_16577 + 1);
seq__15046_16574 = G__16579;
chunk__15047_16575 = G__16580;
count__15048_16576 = G__16581;
i__15049_16577 = G__16582;
continue;
}
} else
{var temp__4092__auto___16583 = cljs.core.seq.call(null,seq__15046_16574);if(temp__4092__auto___16583)
{var seq__15046_16584__$1 = temp__4092__auto___16583;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15046_16584__$1))
{var c__11077__auto___16585 = cljs.core.chunk_first.call(null,seq__15046_16584__$1);{
var G__16586 = cljs.core.chunk_rest.call(null,seq__15046_16584__$1);
var G__16587 = c__11077__auto___16585;
var G__16588 = cljs.core.count.call(null,c__11077__auto___16585);
var G__16589 = 0;
seq__15046_16574 = G__16586;
chunk__15047_16575 = G__16587;
count__15048_16576 = G__16588;
i__15049_16577 = G__16589;
continue;
}
} else
{var arg__11936__auto___16590 = cljs.core.first.call(null,seq__15046_16584__$1);a__11935__auto__.push(arg__11936__auto___16590);
{
var G__16591 = cljs.core.next.call(null,seq__15046_16584__$1);
var G__16592 = null;
var G__16593 = 0;
var G__16594 = 0;
seq__15046_16574 = G__16591;
chunk__15047_16575 = G__16592;
count__15048_16576 = G__16593;
i__15049_16577 = G__16594;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h5.apply(null,a__11935__auto__);
};
var h5 = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h5__delegate.call(this,args__11934__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__16595){
var args__11934__auto__ = cljs.core.seq(arglist__16595);
return h5__delegate(args__11934__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15054_16596 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15055_16597 = null;var count__15056_16598 = 0;var i__15057_16599 = 0;while(true){
if((i__15057_16599 < count__15056_16598))
{var arg__11936__auto___16600 = cljs.core._nth.call(null,chunk__15055_16597,i__15057_16599);a__11935__auto__.push(arg__11936__auto___16600);
{
var G__16601 = seq__15054_16596;
var G__16602 = chunk__15055_16597;
var G__16603 = count__15056_16598;
var G__16604 = (i__15057_16599 + 1);
seq__15054_16596 = G__16601;
chunk__15055_16597 = G__16602;
count__15056_16598 = G__16603;
i__15057_16599 = G__16604;
continue;
}
} else
{var temp__4092__auto___16605 = cljs.core.seq.call(null,seq__15054_16596);if(temp__4092__auto___16605)
{var seq__15054_16606__$1 = temp__4092__auto___16605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15054_16606__$1))
{var c__11077__auto___16607 = cljs.core.chunk_first.call(null,seq__15054_16606__$1);{
var G__16608 = cljs.core.chunk_rest.call(null,seq__15054_16606__$1);
var G__16609 = c__11077__auto___16607;
var G__16610 = cljs.core.count.call(null,c__11077__auto___16607);
var G__16611 = 0;
seq__15054_16596 = G__16608;
chunk__15055_16597 = G__16609;
count__15056_16598 = G__16610;
i__15057_16599 = G__16611;
continue;
}
} else
{var arg__11936__auto___16612 = cljs.core.first.call(null,seq__15054_16606__$1);a__11935__auto__.push(arg__11936__auto___16612);
{
var G__16613 = cljs.core.next.call(null,seq__15054_16606__$1);
var G__16614 = null;
var G__16615 = 0;
var G__16616 = 0;
seq__15054_16596 = G__16613;
chunk__15055_16597 = G__16614;
count__15056_16598 = G__16615;
i__15057_16599 = G__16616;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.h6.apply(null,a__11935__auto__);
};
var h6 = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return h6__delegate.call(this,args__11934__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__16617){
var args__11934__auto__ = cljs.core.seq(arglist__16617);
return h6__delegate(args__11934__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15062_16618 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15063_16619 = null;var count__15064_16620 = 0;var i__15065_16621 = 0;while(true){
if((i__15065_16621 < count__15064_16620))
{var arg__11936__auto___16622 = cljs.core._nth.call(null,chunk__15063_16619,i__15065_16621);a__11935__auto__.push(arg__11936__auto___16622);
{
var G__16623 = seq__15062_16618;
var G__16624 = chunk__15063_16619;
var G__16625 = count__15064_16620;
var G__16626 = (i__15065_16621 + 1);
seq__15062_16618 = G__16623;
chunk__15063_16619 = G__16624;
count__15064_16620 = G__16625;
i__15065_16621 = G__16626;
continue;
}
} else
{var temp__4092__auto___16627 = cljs.core.seq.call(null,seq__15062_16618);if(temp__4092__auto___16627)
{var seq__15062_16628__$1 = temp__4092__auto___16627;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15062_16628__$1))
{var c__11077__auto___16629 = cljs.core.chunk_first.call(null,seq__15062_16628__$1);{
var G__16630 = cljs.core.chunk_rest.call(null,seq__15062_16628__$1);
var G__16631 = c__11077__auto___16629;
var G__16632 = cljs.core.count.call(null,c__11077__auto___16629);
var G__16633 = 0;
seq__15062_16618 = G__16630;
chunk__15063_16619 = G__16631;
count__15064_16620 = G__16632;
i__15065_16621 = G__16633;
continue;
}
} else
{var arg__11936__auto___16634 = cljs.core.first.call(null,seq__15062_16628__$1);a__11935__auto__.push(arg__11936__auto___16634);
{
var G__16635 = cljs.core.next.call(null,seq__15062_16628__$1);
var G__16636 = null;
var G__16637 = 0;
var G__16638 = 0;
seq__15062_16618 = G__16635;
chunk__15063_16619 = G__16636;
count__15064_16620 = G__16637;
i__15065_16621 = G__16638;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.head.apply(null,a__11935__auto__);
};
var head = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return head__delegate.call(this,args__11934__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__16639){
var args__11934__auto__ = cljs.core.seq(arglist__16639);
return head__delegate(args__11934__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15070_16640 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15071_16641 = null;var count__15072_16642 = 0;var i__15073_16643 = 0;while(true){
if((i__15073_16643 < count__15072_16642))
{var arg__11936__auto___16644 = cljs.core._nth.call(null,chunk__15071_16641,i__15073_16643);a__11935__auto__.push(arg__11936__auto___16644);
{
var G__16645 = seq__15070_16640;
var G__16646 = chunk__15071_16641;
var G__16647 = count__15072_16642;
var G__16648 = (i__15073_16643 + 1);
seq__15070_16640 = G__16645;
chunk__15071_16641 = G__16646;
count__15072_16642 = G__16647;
i__15073_16643 = G__16648;
continue;
}
} else
{var temp__4092__auto___16649 = cljs.core.seq.call(null,seq__15070_16640);if(temp__4092__auto___16649)
{var seq__15070_16650__$1 = temp__4092__auto___16649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15070_16650__$1))
{var c__11077__auto___16651 = cljs.core.chunk_first.call(null,seq__15070_16650__$1);{
var G__16652 = cljs.core.chunk_rest.call(null,seq__15070_16650__$1);
var G__16653 = c__11077__auto___16651;
var G__16654 = cljs.core.count.call(null,c__11077__auto___16651);
var G__16655 = 0;
seq__15070_16640 = G__16652;
chunk__15071_16641 = G__16653;
count__15072_16642 = G__16654;
i__15073_16643 = G__16655;
continue;
}
} else
{var arg__11936__auto___16656 = cljs.core.first.call(null,seq__15070_16650__$1);a__11935__auto__.push(arg__11936__auto___16656);
{
var G__16657 = cljs.core.next.call(null,seq__15070_16650__$1);
var G__16658 = null;
var G__16659 = 0;
var G__16660 = 0;
seq__15070_16640 = G__16657;
chunk__15071_16641 = G__16658;
count__15072_16642 = G__16659;
i__15073_16643 = G__16660;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.header.apply(null,a__11935__auto__);
};
var header = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return header__delegate.call(this,args__11934__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__16661){
var args__11934__auto__ = cljs.core.seq(arglist__16661);
return header__delegate(args__11934__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15078_16662 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15079_16663 = null;var count__15080_16664 = 0;var i__15081_16665 = 0;while(true){
if((i__15081_16665 < count__15080_16664))
{var arg__11936__auto___16666 = cljs.core._nth.call(null,chunk__15079_16663,i__15081_16665);a__11935__auto__.push(arg__11936__auto___16666);
{
var G__16667 = seq__15078_16662;
var G__16668 = chunk__15079_16663;
var G__16669 = count__15080_16664;
var G__16670 = (i__15081_16665 + 1);
seq__15078_16662 = G__16667;
chunk__15079_16663 = G__16668;
count__15080_16664 = G__16669;
i__15081_16665 = G__16670;
continue;
}
} else
{var temp__4092__auto___16671 = cljs.core.seq.call(null,seq__15078_16662);if(temp__4092__auto___16671)
{var seq__15078_16672__$1 = temp__4092__auto___16671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15078_16672__$1))
{var c__11077__auto___16673 = cljs.core.chunk_first.call(null,seq__15078_16672__$1);{
var G__16674 = cljs.core.chunk_rest.call(null,seq__15078_16672__$1);
var G__16675 = c__11077__auto___16673;
var G__16676 = cljs.core.count.call(null,c__11077__auto___16673);
var G__16677 = 0;
seq__15078_16662 = G__16674;
chunk__15079_16663 = G__16675;
count__15080_16664 = G__16676;
i__15081_16665 = G__16677;
continue;
}
} else
{var arg__11936__auto___16678 = cljs.core.first.call(null,seq__15078_16672__$1);a__11935__auto__.push(arg__11936__auto___16678);
{
var G__16679 = cljs.core.next.call(null,seq__15078_16672__$1);
var G__16680 = null;
var G__16681 = 0;
var G__16682 = 0;
seq__15078_16662 = G__16679;
chunk__15079_16663 = G__16680;
count__15080_16664 = G__16681;
i__15081_16665 = G__16682;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.hr.apply(null,a__11935__auto__);
};
var hr = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return hr__delegate.call(this,args__11934__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__16683){
var args__11934__auto__ = cljs.core.seq(arglist__16683);
return hr__delegate(args__11934__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15086_16684 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15087_16685 = null;var count__15088_16686 = 0;var i__15089_16687 = 0;while(true){
if((i__15089_16687 < count__15088_16686))
{var arg__11936__auto___16688 = cljs.core._nth.call(null,chunk__15087_16685,i__15089_16687);a__11935__auto__.push(arg__11936__auto___16688);
{
var G__16689 = seq__15086_16684;
var G__16690 = chunk__15087_16685;
var G__16691 = count__15088_16686;
var G__16692 = (i__15089_16687 + 1);
seq__15086_16684 = G__16689;
chunk__15087_16685 = G__16690;
count__15088_16686 = G__16691;
i__15089_16687 = G__16692;
continue;
}
} else
{var temp__4092__auto___16693 = cljs.core.seq.call(null,seq__15086_16684);if(temp__4092__auto___16693)
{var seq__15086_16694__$1 = temp__4092__auto___16693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15086_16694__$1))
{var c__11077__auto___16695 = cljs.core.chunk_first.call(null,seq__15086_16694__$1);{
var G__16696 = cljs.core.chunk_rest.call(null,seq__15086_16694__$1);
var G__16697 = c__11077__auto___16695;
var G__16698 = cljs.core.count.call(null,c__11077__auto___16695);
var G__16699 = 0;
seq__15086_16684 = G__16696;
chunk__15087_16685 = G__16697;
count__15088_16686 = G__16698;
i__15089_16687 = G__16699;
continue;
}
} else
{var arg__11936__auto___16700 = cljs.core.first.call(null,seq__15086_16694__$1);a__11935__auto__.push(arg__11936__auto___16700);
{
var G__16701 = cljs.core.next.call(null,seq__15086_16694__$1);
var G__16702 = null;
var G__16703 = 0;
var G__16704 = 0;
seq__15086_16684 = G__16701;
chunk__15087_16685 = G__16702;
count__15088_16686 = G__16703;
i__15089_16687 = G__16704;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.html.apply(null,a__11935__auto__);
};
var html = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return html__delegate.call(this,args__11934__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__16705){
var args__11934__auto__ = cljs.core.seq(arglist__16705);
return html__delegate(args__11934__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15094_16706 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15095_16707 = null;var count__15096_16708 = 0;var i__15097_16709 = 0;while(true){
if((i__15097_16709 < count__15096_16708))
{var arg__11936__auto___16710 = cljs.core._nth.call(null,chunk__15095_16707,i__15097_16709);a__11935__auto__.push(arg__11936__auto___16710);
{
var G__16711 = seq__15094_16706;
var G__16712 = chunk__15095_16707;
var G__16713 = count__15096_16708;
var G__16714 = (i__15097_16709 + 1);
seq__15094_16706 = G__16711;
chunk__15095_16707 = G__16712;
count__15096_16708 = G__16713;
i__15097_16709 = G__16714;
continue;
}
} else
{var temp__4092__auto___16715 = cljs.core.seq.call(null,seq__15094_16706);if(temp__4092__auto___16715)
{var seq__15094_16716__$1 = temp__4092__auto___16715;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15094_16716__$1))
{var c__11077__auto___16717 = cljs.core.chunk_first.call(null,seq__15094_16716__$1);{
var G__16718 = cljs.core.chunk_rest.call(null,seq__15094_16716__$1);
var G__16719 = c__11077__auto___16717;
var G__16720 = cljs.core.count.call(null,c__11077__auto___16717);
var G__16721 = 0;
seq__15094_16706 = G__16718;
chunk__15095_16707 = G__16719;
count__15096_16708 = G__16720;
i__15097_16709 = G__16721;
continue;
}
} else
{var arg__11936__auto___16722 = cljs.core.first.call(null,seq__15094_16716__$1);a__11935__auto__.push(arg__11936__auto___16722);
{
var G__16723 = cljs.core.next.call(null,seq__15094_16716__$1);
var G__16724 = null;
var G__16725 = 0;
var G__16726 = 0;
seq__15094_16706 = G__16723;
chunk__15095_16707 = G__16724;
count__15096_16708 = G__16725;
i__15097_16709 = G__16726;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.i.apply(null,a__11935__auto__);
};
var i = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return i__delegate.call(this,args__11934__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__16727){
var args__11934__auto__ = cljs.core.seq(arglist__16727);
return i__delegate(args__11934__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15102_16728 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15103_16729 = null;var count__15104_16730 = 0;var i__15105_16731 = 0;while(true){
if((i__15105_16731 < count__15104_16730))
{var arg__11936__auto___16732 = cljs.core._nth.call(null,chunk__15103_16729,i__15105_16731);a__11935__auto__.push(arg__11936__auto___16732);
{
var G__16733 = seq__15102_16728;
var G__16734 = chunk__15103_16729;
var G__16735 = count__15104_16730;
var G__16736 = (i__15105_16731 + 1);
seq__15102_16728 = G__16733;
chunk__15103_16729 = G__16734;
count__15104_16730 = G__16735;
i__15105_16731 = G__16736;
continue;
}
} else
{var temp__4092__auto___16737 = cljs.core.seq.call(null,seq__15102_16728);if(temp__4092__auto___16737)
{var seq__15102_16738__$1 = temp__4092__auto___16737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15102_16738__$1))
{var c__11077__auto___16739 = cljs.core.chunk_first.call(null,seq__15102_16738__$1);{
var G__16740 = cljs.core.chunk_rest.call(null,seq__15102_16738__$1);
var G__16741 = c__11077__auto___16739;
var G__16742 = cljs.core.count.call(null,c__11077__auto___16739);
var G__16743 = 0;
seq__15102_16728 = G__16740;
chunk__15103_16729 = G__16741;
count__15104_16730 = G__16742;
i__15105_16731 = G__16743;
continue;
}
} else
{var arg__11936__auto___16744 = cljs.core.first.call(null,seq__15102_16738__$1);a__11935__auto__.push(arg__11936__auto___16744);
{
var G__16745 = cljs.core.next.call(null,seq__15102_16738__$1);
var G__16746 = null;
var G__16747 = 0;
var G__16748 = 0;
seq__15102_16728 = G__16745;
chunk__15103_16729 = G__16746;
count__15104_16730 = G__16747;
i__15105_16731 = G__16748;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.iframe.apply(null,a__11935__auto__);
};
var iframe = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return iframe__delegate.call(this,args__11934__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__16749){
var args__11934__auto__ = cljs.core.seq(arglist__16749);
return iframe__delegate(args__11934__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15110_16750 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15111_16751 = null;var count__15112_16752 = 0;var i__15113_16753 = 0;while(true){
if((i__15113_16753 < count__15112_16752))
{var arg__11936__auto___16754 = cljs.core._nth.call(null,chunk__15111_16751,i__15113_16753);a__11935__auto__.push(arg__11936__auto___16754);
{
var G__16755 = seq__15110_16750;
var G__16756 = chunk__15111_16751;
var G__16757 = count__15112_16752;
var G__16758 = (i__15113_16753 + 1);
seq__15110_16750 = G__16755;
chunk__15111_16751 = G__16756;
count__15112_16752 = G__16757;
i__15113_16753 = G__16758;
continue;
}
} else
{var temp__4092__auto___16759 = cljs.core.seq.call(null,seq__15110_16750);if(temp__4092__auto___16759)
{var seq__15110_16760__$1 = temp__4092__auto___16759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15110_16760__$1))
{var c__11077__auto___16761 = cljs.core.chunk_first.call(null,seq__15110_16760__$1);{
var G__16762 = cljs.core.chunk_rest.call(null,seq__15110_16760__$1);
var G__16763 = c__11077__auto___16761;
var G__16764 = cljs.core.count.call(null,c__11077__auto___16761);
var G__16765 = 0;
seq__15110_16750 = G__16762;
chunk__15111_16751 = G__16763;
count__15112_16752 = G__16764;
i__15113_16753 = G__16765;
continue;
}
} else
{var arg__11936__auto___16766 = cljs.core.first.call(null,seq__15110_16760__$1);a__11935__auto__.push(arg__11936__auto___16766);
{
var G__16767 = cljs.core.next.call(null,seq__15110_16760__$1);
var G__16768 = null;
var G__16769 = 0;
var G__16770 = 0;
seq__15110_16750 = G__16767;
chunk__15111_16751 = G__16768;
count__15112_16752 = G__16769;
i__15113_16753 = G__16770;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.img.apply(null,a__11935__auto__);
};
var img = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return img__delegate.call(this,args__11934__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__16771){
var args__11934__auto__ = cljs.core.seq(arglist__16771);
return img__delegate(args__11934__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15118_16772 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15119_16773 = null;var count__15120_16774 = 0;var i__15121_16775 = 0;while(true){
if((i__15121_16775 < count__15120_16774))
{var arg__11936__auto___16776 = cljs.core._nth.call(null,chunk__15119_16773,i__15121_16775);a__11935__auto__.push(arg__11936__auto___16776);
{
var G__16777 = seq__15118_16772;
var G__16778 = chunk__15119_16773;
var G__16779 = count__15120_16774;
var G__16780 = (i__15121_16775 + 1);
seq__15118_16772 = G__16777;
chunk__15119_16773 = G__16778;
count__15120_16774 = G__16779;
i__15121_16775 = G__16780;
continue;
}
} else
{var temp__4092__auto___16781 = cljs.core.seq.call(null,seq__15118_16772);if(temp__4092__auto___16781)
{var seq__15118_16782__$1 = temp__4092__auto___16781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15118_16782__$1))
{var c__11077__auto___16783 = cljs.core.chunk_first.call(null,seq__15118_16782__$1);{
var G__16784 = cljs.core.chunk_rest.call(null,seq__15118_16782__$1);
var G__16785 = c__11077__auto___16783;
var G__16786 = cljs.core.count.call(null,c__11077__auto___16783);
var G__16787 = 0;
seq__15118_16772 = G__16784;
chunk__15119_16773 = G__16785;
count__15120_16774 = G__16786;
i__15121_16775 = G__16787;
continue;
}
} else
{var arg__11936__auto___16788 = cljs.core.first.call(null,seq__15118_16782__$1);a__11935__auto__.push(arg__11936__auto___16788);
{
var G__16789 = cljs.core.next.call(null,seq__15118_16782__$1);
var G__16790 = null;
var G__16791 = 0;
var G__16792 = 0;
seq__15118_16772 = G__16789;
chunk__15119_16773 = G__16790;
count__15120_16774 = G__16791;
i__15121_16775 = G__16792;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.input.apply(null,a__11935__auto__);
};
var input = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return input__delegate.call(this,args__11934__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__16793){
var args__11934__auto__ = cljs.core.seq(arglist__16793);
return input__delegate(args__11934__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15126_16794 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15127_16795 = null;var count__15128_16796 = 0;var i__15129_16797 = 0;while(true){
if((i__15129_16797 < count__15128_16796))
{var arg__11936__auto___16798 = cljs.core._nth.call(null,chunk__15127_16795,i__15129_16797);a__11935__auto__.push(arg__11936__auto___16798);
{
var G__16799 = seq__15126_16794;
var G__16800 = chunk__15127_16795;
var G__16801 = count__15128_16796;
var G__16802 = (i__15129_16797 + 1);
seq__15126_16794 = G__16799;
chunk__15127_16795 = G__16800;
count__15128_16796 = G__16801;
i__15129_16797 = G__16802;
continue;
}
} else
{var temp__4092__auto___16803 = cljs.core.seq.call(null,seq__15126_16794);if(temp__4092__auto___16803)
{var seq__15126_16804__$1 = temp__4092__auto___16803;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15126_16804__$1))
{var c__11077__auto___16805 = cljs.core.chunk_first.call(null,seq__15126_16804__$1);{
var G__16806 = cljs.core.chunk_rest.call(null,seq__15126_16804__$1);
var G__16807 = c__11077__auto___16805;
var G__16808 = cljs.core.count.call(null,c__11077__auto___16805);
var G__16809 = 0;
seq__15126_16794 = G__16806;
chunk__15127_16795 = G__16807;
count__15128_16796 = G__16808;
i__15129_16797 = G__16809;
continue;
}
} else
{var arg__11936__auto___16810 = cljs.core.first.call(null,seq__15126_16804__$1);a__11935__auto__.push(arg__11936__auto___16810);
{
var G__16811 = cljs.core.next.call(null,seq__15126_16804__$1);
var G__16812 = null;
var G__16813 = 0;
var G__16814 = 0;
seq__15126_16794 = G__16811;
chunk__15127_16795 = G__16812;
count__15128_16796 = G__16813;
i__15129_16797 = G__16814;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ins.apply(null,a__11935__auto__);
};
var ins = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ins__delegate.call(this,args__11934__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__16815){
var args__11934__auto__ = cljs.core.seq(arglist__16815);
return ins__delegate(args__11934__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15134_16816 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15135_16817 = null;var count__15136_16818 = 0;var i__15137_16819 = 0;while(true){
if((i__15137_16819 < count__15136_16818))
{var arg__11936__auto___16820 = cljs.core._nth.call(null,chunk__15135_16817,i__15137_16819);a__11935__auto__.push(arg__11936__auto___16820);
{
var G__16821 = seq__15134_16816;
var G__16822 = chunk__15135_16817;
var G__16823 = count__15136_16818;
var G__16824 = (i__15137_16819 + 1);
seq__15134_16816 = G__16821;
chunk__15135_16817 = G__16822;
count__15136_16818 = G__16823;
i__15137_16819 = G__16824;
continue;
}
} else
{var temp__4092__auto___16825 = cljs.core.seq.call(null,seq__15134_16816);if(temp__4092__auto___16825)
{var seq__15134_16826__$1 = temp__4092__auto___16825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15134_16826__$1))
{var c__11077__auto___16827 = cljs.core.chunk_first.call(null,seq__15134_16826__$1);{
var G__16828 = cljs.core.chunk_rest.call(null,seq__15134_16826__$1);
var G__16829 = c__11077__auto___16827;
var G__16830 = cljs.core.count.call(null,c__11077__auto___16827);
var G__16831 = 0;
seq__15134_16816 = G__16828;
chunk__15135_16817 = G__16829;
count__15136_16818 = G__16830;
i__15137_16819 = G__16831;
continue;
}
} else
{var arg__11936__auto___16832 = cljs.core.first.call(null,seq__15134_16826__$1);a__11935__auto__.push(arg__11936__auto___16832);
{
var G__16833 = cljs.core.next.call(null,seq__15134_16826__$1);
var G__16834 = null;
var G__16835 = 0;
var G__16836 = 0;
seq__15134_16816 = G__16833;
chunk__15135_16817 = G__16834;
count__15136_16818 = G__16835;
i__15137_16819 = G__16836;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.kbd.apply(null,a__11935__auto__);
};
var kbd = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return kbd__delegate.call(this,args__11934__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__16837){
var args__11934__auto__ = cljs.core.seq(arglist__16837);
return kbd__delegate(args__11934__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15142_16838 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15143_16839 = null;var count__15144_16840 = 0;var i__15145_16841 = 0;while(true){
if((i__15145_16841 < count__15144_16840))
{var arg__11936__auto___16842 = cljs.core._nth.call(null,chunk__15143_16839,i__15145_16841);a__11935__auto__.push(arg__11936__auto___16842);
{
var G__16843 = seq__15142_16838;
var G__16844 = chunk__15143_16839;
var G__16845 = count__15144_16840;
var G__16846 = (i__15145_16841 + 1);
seq__15142_16838 = G__16843;
chunk__15143_16839 = G__16844;
count__15144_16840 = G__16845;
i__15145_16841 = G__16846;
continue;
}
} else
{var temp__4092__auto___16847 = cljs.core.seq.call(null,seq__15142_16838);if(temp__4092__auto___16847)
{var seq__15142_16848__$1 = temp__4092__auto___16847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15142_16848__$1))
{var c__11077__auto___16849 = cljs.core.chunk_first.call(null,seq__15142_16848__$1);{
var G__16850 = cljs.core.chunk_rest.call(null,seq__15142_16848__$1);
var G__16851 = c__11077__auto___16849;
var G__16852 = cljs.core.count.call(null,c__11077__auto___16849);
var G__16853 = 0;
seq__15142_16838 = G__16850;
chunk__15143_16839 = G__16851;
count__15144_16840 = G__16852;
i__15145_16841 = G__16853;
continue;
}
} else
{var arg__11936__auto___16854 = cljs.core.first.call(null,seq__15142_16848__$1);a__11935__auto__.push(arg__11936__auto___16854);
{
var G__16855 = cljs.core.next.call(null,seq__15142_16848__$1);
var G__16856 = null;
var G__16857 = 0;
var G__16858 = 0;
seq__15142_16838 = G__16855;
chunk__15143_16839 = G__16856;
count__15144_16840 = G__16857;
i__15145_16841 = G__16858;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.keygen.apply(null,a__11935__auto__);
};
var keygen = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return keygen__delegate.call(this,args__11934__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__16859){
var args__11934__auto__ = cljs.core.seq(arglist__16859);
return keygen__delegate(args__11934__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15150_16860 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15151_16861 = null;var count__15152_16862 = 0;var i__15153_16863 = 0;while(true){
if((i__15153_16863 < count__15152_16862))
{var arg__11936__auto___16864 = cljs.core._nth.call(null,chunk__15151_16861,i__15153_16863);a__11935__auto__.push(arg__11936__auto___16864);
{
var G__16865 = seq__15150_16860;
var G__16866 = chunk__15151_16861;
var G__16867 = count__15152_16862;
var G__16868 = (i__15153_16863 + 1);
seq__15150_16860 = G__16865;
chunk__15151_16861 = G__16866;
count__15152_16862 = G__16867;
i__15153_16863 = G__16868;
continue;
}
} else
{var temp__4092__auto___16869 = cljs.core.seq.call(null,seq__15150_16860);if(temp__4092__auto___16869)
{var seq__15150_16870__$1 = temp__4092__auto___16869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15150_16870__$1))
{var c__11077__auto___16871 = cljs.core.chunk_first.call(null,seq__15150_16870__$1);{
var G__16872 = cljs.core.chunk_rest.call(null,seq__15150_16870__$1);
var G__16873 = c__11077__auto___16871;
var G__16874 = cljs.core.count.call(null,c__11077__auto___16871);
var G__16875 = 0;
seq__15150_16860 = G__16872;
chunk__15151_16861 = G__16873;
count__15152_16862 = G__16874;
i__15153_16863 = G__16875;
continue;
}
} else
{var arg__11936__auto___16876 = cljs.core.first.call(null,seq__15150_16870__$1);a__11935__auto__.push(arg__11936__auto___16876);
{
var G__16877 = cljs.core.next.call(null,seq__15150_16870__$1);
var G__16878 = null;
var G__16879 = 0;
var G__16880 = 0;
seq__15150_16860 = G__16877;
chunk__15151_16861 = G__16878;
count__15152_16862 = G__16879;
i__15153_16863 = G__16880;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.label.apply(null,a__11935__auto__);
};
var label = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return label__delegate.call(this,args__11934__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__16881){
var args__11934__auto__ = cljs.core.seq(arglist__16881);
return label__delegate(args__11934__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15158_16882 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15159_16883 = null;var count__15160_16884 = 0;var i__15161_16885 = 0;while(true){
if((i__15161_16885 < count__15160_16884))
{var arg__11936__auto___16886 = cljs.core._nth.call(null,chunk__15159_16883,i__15161_16885);a__11935__auto__.push(arg__11936__auto___16886);
{
var G__16887 = seq__15158_16882;
var G__16888 = chunk__15159_16883;
var G__16889 = count__15160_16884;
var G__16890 = (i__15161_16885 + 1);
seq__15158_16882 = G__16887;
chunk__15159_16883 = G__16888;
count__15160_16884 = G__16889;
i__15161_16885 = G__16890;
continue;
}
} else
{var temp__4092__auto___16891 = cljs.core.seq.call(null,seq__15158_16882);if(temp__4092__auto___16891)
{var seq__15158_16892__$1 = temp__4092__auto___16891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15158_16892__$1))
{var c__11077__auto___16893 = cljs.core.chunk_first.call(null,seq__15158_16892__$1);{
var G__16894 = cljs.core.chunk_rest.call(null,seq__15158_16892__$1);
var G__16895 = c__11077__auto___16893;
var G__16896 = cljs.core.count.call(null,c__11077__auto___16893);
var G__16897 = 0;
seq__15158_16882 = G__16894;
chunk__15159_16883 = G__16895;
count__15160_16884 = G__16896;
i__15161_16885 = G__16897;
continue;
}
} else
{var arg__11936__auto___16898 = cljs.core.first.call(null,seq__15158_16892__$1);a__11935__auto__.push(arg__11936__auto___16898);
{
var G__16899 = cljs.core.next.call(null,seq__15158_16892__$1);
var G__16900 = null;
var G__16901 = 0;
var G__16902 = 0;
seq__15158_16882 = G__16899;
chunk__15159_16883 = G__16900;
count__15160_16884 = G__16901;
i__15161_16885 = G__16902;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.legend.apply(null,a__11935__auto__);
};
var legend = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return legend__delegate.call(this,args__11934__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__16903){
var args__11934__auto__ = cljs.core.seq(arglist__16903);
return legend__delegate(args__11934__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15166_16904 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15167_16905 = null;var count__15168_16906 = 0;var i__15169_16907 = 0;while(true){
if((i__15169_16907 < count__15168_16906))
{var arg__11936__auto___16908 = cljs.core._nth.call(null,chunk__15167_16905,i__15169_16907);a__11935__auto__.push(arg__11936__auto___16908);
{
var G__16909 = seq__15166_16904;
var G__16910 = chunk__15167_16905;
var G__16911 = count__15168_16906;
var G__16912 = (i__15169_16907 + 1);
seq__15166_16904 = G__16909;
chunk__15167_16905 = G__16910;
count__15168_16906 = G__16911;
i__15169_16907 = G__16912;
continue;
}
} else
{var temp__4092__auto___16913 = cljs.core.seq.call(null,seq__15166_16904);if(temp__4092__auto___16913)
{var seq__15166_16914__$1 = temp__4092__auto___16913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15166_16914__$1))
{var c__11077__auto___16915 = cljs.core.chunk_first.call(null,seq__15166_16914__$1);{
var G__16916 = cljs.core.chunk_rest.call(null,seq__15166_16914__$1);
var G__16917 = c__11077__auto___16915;
var G__16918 = cljs.core.count.call(null,c__11077__auto___16915);
var G__16919 = 0;
seq__15166_16904 = G__16916;
chunk__15167_16905 = G__16917;
count__15168_16906 = G__16918;
i__15169_16907 = G__16919;
continue;
}
} else
{var arg__11936__auto___16920 = cljs.core.first.call(null,seq__15166_16914__$1);a__11935__auto__.push(arg__11936__auto___16920);
{
var G__16921 = cljs.core.next.call(null,seq__15166_16914__$1);
var G__16922 = null;
var G__16923 = 0;
var G__16924 = 0;
seq__15166_16904 = G__16921;
chunk__15167_16905 = G__16922;
count__15168_16906 = G__16923;
i__15169_16907 = G__16924;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.li.apply(null,a__11935__auto__);
};
var li = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return li__delegate.call(this,args__11934__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__16925){
var args__11934__auto__ = cljs.core.seq(arglist__16925);
return li__delegate(args__11934__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15174_16926 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15175_16927 = null;var count__15176_16928 = 0;var i__15177_16929 = 0;while(true){
if((i__15177_16929 < count__15176_16928))
{var arg__11936__auto___16930 = cljs.core._nth.call(null,chunk__15175_16927,i__15177_16929);a__11935__auto__.push(arg__11936__auto___16930);
{
var G__16931 = seq__15174_16926;
var G__16932 = chunk__15175_16927;
var G__16933 = count__15176_16928;
var G__16934 = (i__15177_16929 + 1);
seq__15174_16926 = G__16931;
chunk__15175_16927 = G__16932;
count__15176_16928 = G__16933;
i__15177_16929 = G__16934;
continue;
}
} else
{var temp__4092__auto___16935 = cljs.core.seq.call(null,seq__15174_16926);if(temp__4092__auto___16935)
{var seq__15174_16936__$1 = temp__4092__auto___16935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15174_16936__$1))
{var c__11077__auto___16937 = cljs.core.chunk_first.call(null,seq__15174_16936__$1);{
var G__16938 = cljs.core.chunk_rest.call(null,seq__15174_16936__$1);
var G__16939 = c__11077__auto___16937;
var G__16940 = cljs.core.count.call(null,c__11077__auto___16937);
var G__16941 = 0;
seq__15174_16926 = G__16938;
chunk__15175_16927 = G__16939;
count__15176_16928 = G__16940;
i__15177_16929 = G__16941;
continue;
}
} else
{var arg__11936__auto___16942 = cljs.core.first.call(null,seq__15174_16936__$1);a__11935__auto__.push(arg__11936__auto___16942);
{
var G__16943 = cljs.core.next.call(null,seq__15174_16936__$1);
var G__16944 = null;
var G__16945 = 0;
var G__16946 = 0;
seq__15174_16926 = G__16943;
chunk__15175_16927 = G__16944;
count__15176_16928 = G__16945;
i__15177_16929 = G__16946;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.link.apply(null,a__11935__auto__);
};
var link = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return link__delegate.call(this,args__11934__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__16947){
var args__11934__auto__ = cljs.core.seq(arglist__16947);
return link__delegate(args__11934__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15182_16948 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15183_16949 = null;var count__15184_16950 = 0;var i__15185_16951 = 0;while(true){
if((i__15185_16951 < count__15184_16950))
{var arg__11936__auto___16952 = cljs.core._nth.call(null,chunk__15183_16949,i__15185_16951);a__11935__auto__.push(arg__11936__auto___16952);
{
var G__16953 = seq__15182_16948;
var G__16954 = chunk__15183_16949;
var G__16955 = count__15184_16950;
var G__16956 = (i__15185_16951 + 1);
seq__15182_16948 = G__16953;
chunk__15183_16949 = G__16954;
count__15184_16950 = G__16955;
i__15185_16951 = G__16956;
continue;
}
} else
{var temp__4092__auto___16957 = cljs.core.seq.call(null,seq__15182_16948);if(temp__4092__auto___16957)
{var seq__15182_16958__$1 = temp__4092__auto___16957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15182_16958__$1))
{var c__11077__auto___16959 = cljs.core.chunk_first.call(null,seq__15182_16958__$1);{
var G__16960 = cljs.core.chunk_rest.call(null,seq__15182_16958__$1);
var G__16961 = c__11077__auto___16959;
var G__16962 = cljs.core.count.call(null,c__11077__auto___16959);
var G__16963 = 0;
seq__15182_16948 = G__16960;
chunk__15183_16949 = G__16961;
count__15184_16950 = G__16962;
i__15185_16951 = G__16963;
continue;
}
} else
{var arg__11936__auto___16964 = cljs.core.first.call(null,seq__15182_16958__$1);a__11935__auto__.push(arg__11936__auto___16964);
{
var G__16965 = cljs.core.next.call(null,seq__15182_16958__$1);
var G__16966 = null;
var G__16967 = 0;
var G__16968 = 0;
seq__15182_16948 = G__16965;
chunk__15183_16949 = G__16966;
count__15184_16950 = G__16967;
i__15185_16951 = G__16968;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.main.apply(null,a__11935__auto__);
};
var main = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return main__delegate.call(this,args__11934__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__16969){
var args__11934__auto__ = cljs.core.seq(arglist__16969);
return main__delegate(args__11934__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15190_16970 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15191_16971 = null;var count__15192_16972 = 0;var i__15193_16973 = 0;while(true){
if((i__15193_16973 < count__15192_16972))
{var arg__11936__auto___16974 = cljs.core._nth.call(null,chunk__15191_16971,i__15193_16973);a__11935__auto__.push(arg__11936__auto___16974);
{
var G__16975 = seq__15190_16970;
var G__16976 = chunk__15191_16971;
var G__16977 = count__15192_16972;
var G__16978 = (i__15193_16973 + 1);
seq__15190_16970 = G__16975;
chunk__15191_16971 = G__16976;
count__15192_16972 = G__16977;
i__15193_16973 = G__16978;
continue;
}
} else
{var temp__4092__auto___16979 = cljs.core.seq.call(null,seq__15190_16970);if(temp__4092__auto___16979)
{var seq__15190_16980__$1 = temp__4092__auto___16979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15190_16980__$1))
{var c__11077__auto___16981 = cljs.core.chunk_first.call(null,seq__15190_16980__$1);{
var G__16982 = cljs.core.chunk_rest.call(null,seq__15190_16980__$1);
var G__16983 = c__11077__auto___16981;
var G__16984 = cljs.core.count.call(null,c__11077__auto___16981);
var G__16985 = 0;
seq__15190_16970 = G__16982;
chunk__15191_16971 = G__16983;
count__15192_16972 = G__16984;
i__15193_16973 = G__16985;
continue;
}
} else
{var arg__11936__auto___16986 = cljs.core.first.call(null,seq__15190_16980__$1);a__11935__auto__.push(arg__11936__auto___16986);
{
var G__16987 = cljs.core.next.call(null,seq__15190_16980__$1);
var G__16988 = null;
var G__16989 = 0;
var G__16990 = 0;
seq__15190_16970 = G__16987;
chunk__15191_16971 = G__16988;
count__15192_16972 = G__16989;
i__15193_16973 = G__16990;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.map.apply(null,a__11935__auto__);
};
var map = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return map__delegate.call(this,args__11934__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__16991){
var args__11934__auto__ = cljs.core.seq(arglist__16991);
return map__delegate(args__11934__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15198_16992 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15199_16993 = null;var count__15200_16994 = 0;var i__15201_16995 = 0;while(true){
if((i__15201_16995 < count__15200_16994))
{var arg__11936__auto___16996 = cljs.core._nth.call(null,chunk__15199_16993,i__15201_16995);a__11935__auto__.push(arg__11936__auto___16996);
{
var G__16997 = seq__15198_16992;
var G__16998 = chunk__15199_16993;
var G__16999 = count__15200_16994;
var G__17000 = (i__15201_16995 + 1);
seq__15198_16992 = G__16997;
chunk__15199_16993 = G__16998;
count__15200_16994 = G__16999;
i__15201_16995 = G__17000;
continue;
}
} else
{var temp__4092__auto___17001 = cljs.core.seq.call(null,seq__15198_16992);if(temp__4092__auto___17001)
{var seq__15198_17002__$1 = temp__4092__auto___17001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15198_17002__$1))
{var c__11077__auto___17003 = cljs.core.chunk_first.call(null,seq__15198_17002__$1);{
var G__17004 = cljs.core.chunk_rest.call(null,seq__15198_17002__$1);
var G__17005 = c__11077__auto___17003;
var G__17006 = cljs.core.count.call(null,c__11077__auto___17003);
var G__17007 = 0;
seq__15198_16992 = G__17004;
chunk__15199_16993 = G__17005;
count__15200_16994 = G__17006;
i__15201_16995 = G__17007;
continue;
}
} else
{var arg__11936__auto___17008 = cljs.core.first.call(null,seq__15198_17002__$1);a__11935__auto__.push(arg__11936__auto___17008);
{
var G__17009 = cljs.core.next.call(null,seq__15198_17002__$1);
var G__17010 = null;
var G__17011 = 0;
var G__17012 = 0;
seq__15198_16992 = G__17009;
chunk__15199_16993 = G__17010;
count__15200_16994 = G__17011;
i__15201_16995 = G__17012;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.mark.apply(null,a__11935__auto__);
};
var mark = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return mark__delegate.call(this,args__11934__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__17013){
var args__11934__auto__ = cljs.core.seq(arglist__17013);
return mark__delegate(args__11934__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15206_17014 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15207_17015 = null;var count__15208_17016 = 0;var i__15209_17017 = 0;while(true){
if((i__15209_17017 < count__15208_17016))
{var arg__11936__auto___17018 = cljs.core._nth.call(null,chunk__15207_17015,i__15209_17017);a__11935__auto__.push(arg__11936__auto___17018);
{
var G__17019 = seq__15206_17014;
var G__17020 = chunk__15207_17015;
var G__17021 = count__15208_17016;
var G__17022 = (i__15209_17017 + 1);
seq__15206_17014 = G__17019;
chunk__15207_17015 = G__17020;
count__15208_17016 = G__17021;
i__15209_17017 = G__17022;
continue;
}
} else
{var temp__4092__auto___17023 = cljs.core.seq.call(null,seq__15206_17014);if(temp__4092__auto___17023)
{var seq__15206_17024__$1 = temp__4092__auto___17023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15206_17024__$1))
{var c__11077__auto___17025 = cljs.core.chunk_first.call(null,seq__15206_17024__$1);{
var G__17026 = cljs.core.chunk_rest.call(null,seq__15206_17024__$1);
var G__17027 = c__11077__auto___17025;
var G__17028 = cljs.core.count.call(null,c__11077__auto___17025);
var G__17029 = 0;
seq__15206_17014 = G__17026;
chunk__15207_17015 = G__17027;
count__15208_17016 = G__17028;
i__15209_17017 = G__17029;
continue;
}
} else
{var arg__11936__auto___17030 = cljs.core.first.call(null,seq__15206_17024__$1);a__11935__auto__.push(arg__11936__auto___17030);
{
var G__17031 = cljs.core.next.call(null,seq__15206_17024__$1);
var G__17032 = null;
var G__17033 = 0;
var G__17034 = 0;
seq__15206_17014 = G__17031;
chunk__15207_17015 = G__17032;
count__15208_17016 = G__17033;
i__15209_17017 = G__17034;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menu.apply(null,a__11935__auto__);
};
var menu = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menu__delegate.call(this,args__11934__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__17035){
var args__11934__auto__ = cljs.core.seq(arglist__17035);
return menu__delegate(args__11934__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15214_17036 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15215_17037 = null;var count__15216_17038 = 0;var i__15217_17039 = 0;while(true){
if((i__15217_17039 < count__15216_17038))
{var arg__11936__auto___17040 = cljs.core._nth.call(null,chunk__15215_17037,i__15217_17039);a__11935__auto__.push(arg__11936__auto___17040);
{
var G__17041 = seq__15214_17036;
var G__17042 = chunk__15215_17037;
var G__17043 = count__15216_17038;
var G__17044 = (i__15217_17039 + 1);
seq__15214_17036 = G__17041;
chunk__15215_17037 = G__17042;
count__15216_17038 = G__17043;
i__15217_17039 = G__17044;
continue;
}
} else
{var temp__4092__auto___17045 = cljs.core.seq.call(null,seq__15214_17036);if(temp__4092__auto___17045)
{var seq__15214_17046__$1 = temp__4092__auto___17045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15214_17046__$1))
{var c__11077__auto___17047 = cljs.core.chunk_first.call(null,seq__15214_17046__$1);{
var G__17048 = cljs.core.chunk_rest.call(null,seq__15214_17046__$1);
var G__17049 = c__11077__auto___17047;
var G__17050 = cljs.core.count.call(null,c__11077__auto___17047);
var G__17051 = 0;
seq__15214_17036 = G__17048;
chunk__15215_17037 = G__17049;
count__15216_17038 = G__17050;
i__15217_17039 = G__17051;
continue;
}
} else
{var arg__11936__auto___17052 = cljs.core.first.call(null,seq__15214_17046__$1);a__11935__auto__.push(arg__11936__auto___17052);
{
var G__17053 = cljs.core.next.call(null,seq__15214_17046__$1);
var G__17054 = null;
var G__17055 = 0;
var G__17056 = 0;
seq__15214_17036 = G__17053;
chunk__15215_17037 = G__17054;
count__15216_17038 = G__17055;
i__15217_17039 = G__17056;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.menuitem.apply(null,a__11935__auto__);
};
var menuitem = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return menuitem__delegate.call(this,args__11934__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__17057){
var args__11934__auto__ = cljs.core.seq(arglist__17057);
return menuitem__delegate(args__11934__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15222_17058 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15223_17059 = null;var count__15224_17060 = 0;var i__15225_17061 = 0;while(true){
if((i__15225_17061 < count__15224_17060))
{var arg__11936__auto___17062 = cljs.core._nth.call(null,chunk__15223_17059,i__15225_17061);a__11935__auto__.push(arg__11936__auto___17062);
{
var G__17063 = seq__15222_17058;
var G__17064 = chunk__15223_17059;
var G__17065 = count__15224_17060;
var G__17066 = (i__15225_17061 + 1);
seq__15222_17058 = G__17063;
chunk__15223_17059 = G__17064;
count__15224_17060 = G__17065;
i__15225_17061 = G__17066;
continue;
}
} else
{var temp__4092__auto___17067 = cljs.core.seq.call(null,seq__15222_17058);if(temp__4092__auto___17067)
{var seq__15222_17068__$1 = temp__4092__auto___17067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15222_17068__$1))
{var c__11077__auto___17069 = cljs.core.chunk_first.call(null,seq__15222_17068__$1);{
var G__17070 = cljs.core.chunk_rest.call(null,seq__15222_17068__$1);
var G__17071 = c__11077__auto___17069;
var G__17072 = cljs.core.count.call(null,c__11077__auto___17069);
var G__17073 = 0;
seq__15222_17058 = G__17070;
chunk__15223_17059 = G__17071;
count__15224_17060 = G__17072;
i__15225_17061 = G__17073;
continue;
}
} else
{var arg__11936__auto___17074 = cljs.core.first.call(null,seq__15222_17068__$1);a__11935__auto__.push(arg__11936__auto___17074);
{
var G__17075 = cljs.core.next.call(null,seq__15222_17068__$1);
var G__17076 = null;
var G__17077 = 0;
var G__17078 = 0;
seq__15222_17058 = G__17075;
chunk__15223_17059 = G__17076;
count__15224_17060 = G__17077;
i__15225_17061 = G__17078;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meta.apply(null,a__11935__auto__);
};
var meta = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meta__delegate.call(this,args__11934__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__17079){
var args__11934__auto__ = cljs.core.seq(arglist__17079);
return meta__delegate(args__11934__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15230_17080 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15231_17081 = null;var count__15232_17082 = 0;var i__15233_17083 = 0;while(true){
if((i__15233_17083 < count__15232_17082))
{var arg__11936__auto___17084 = cljs.core._nth.call(null,chunk__15231_17081,i__15233_17083);a__11935__auto__.push(arg__11936__auto___17084);
{
var G__17085 = seq__15230_17080;
var G__17086 = chunk__15231_17081;
var G__17087 = count__15232_17082;
var G__17088 = (i__15233_17083 + 1);
seq__15230_17080 = G__17085;
chunk__15231_17081 = G__17086;
count__15232_17082 = G__17087;
i__15233_17083 = G__17088;
continue;
}
} else
{var temp__4092__auto___17089 = cljs.core.seq.call(null,seq__15230_17080);if(temp__4092__auto___17089)
{var seq__15230_17090__$1 = temp__4092__auto___17089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15230_17090__$1))
{var c__11077__auto___17091 = cljs.core.chunk_first.call(null,seq__15230_17090__$1);{
var G__17092 = cljs.core.chunk_rest.call(null,seq__15230_17090__$1);
var G__17093 = c__11077__auto___17091;
var G__17094 = cljs.core.count.call(null,c__11077__auto___17091);
var G__17095 = 0;
seq__15230_17080 = G__17092;
chunk__15231_17081 = G__17093;
count__15232_17082 = G__17094;
i__15233_17083 = G__17095;
continue;
}
} else
{var arg__11936__auto___17096 = cljs.core.first.call(null,seq__15230_17090__$1);a__11935__auto__.push(arg__11936__auto___17096);
{
var G__17097 = cljs.core.next.call(null,seq__15230_17090__$1);
var G__17098 = null;
var G__17099 = 0;
var G__17100 = 0;
seq__15230_17080 = G__17097;
chunk__15231_17081 = G__17098;
count__15232_17082 = G__17099;
i__15233_17083 = G__17100;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.meter.apply(null,a__11935__auto__);
};
var meter = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return meter__delegate.call(this,args__11934__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__17101){
var args__11934__auto__ = cljs.core.seq(arglist__17101);
return meter__delegate(args__11934__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15238_17102 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15239_17103 = null;var count__15240_17104 = 0;var i__15241_17105 = 0;while(true){
if((i__15241_17105 < count__15240_17104))
{var arg__11936__auto___17106 = cljs.core._nth.call(null,chunk__15239_17103,i__15241_17105);a__11935__auto__.push(arg__11936__auto___17106);
{
var G__17107 = seq__15238_17102;
var G__17108 = chunk__15239_17103;
var G__17109 = count__15240_17104;
var G__17110 = (i__15241_17105 + 1);
seq__15238_17102 = G__17107;
chunk__15239_17103 = G__17108;
count__15240_17104 = G__17109;
i__15241_17105 = G__17110;
continue;
}
} else
{var temp__4092__auto___17111 = cljs.core.seq.call(null,seq__15238_17102);if(temp__4092__auto___17111)
{var seq__15238_17112__$1 = temp__4092__auto___17111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15238_17112__$1))
{var c__11077__auto___17113 = cljs.core.chunk_first.call(null,seq__15238_17112__$1);{
var G__17114 = cljs.core.chunk_rest.call(null,seq__15238_17112__$1);
var G__17115 = c__11077__auto___17113;
var G__17116 = cljs.core.count.call(null,c__11077__auto___17113);
var G__17117 = 0;
seq__15238_17102 = G__17114;
chunk__15239_17103 = G__17115;
count__15240_17104 = G__17116;
i__15241_17105 = G__17117;
continue;
}
} else
{var arg__11936__auto___17118 = cljs.core.first.call(null,seq__15238_17112__$1);a__11935__auto__.push(arg__11936__auto___17118);
{
var G__17119 = cljs.core.next.call(null,seq__15238_17112__$1);
var G__17120 = null;
var G__17121 = 0;
var G__17122 = 0;
seq__15238_17102 = G__17119;
chunk__15239_17103 = G__17120;
count__15240_17104 = G__17121;
i__15241_17105 = G__17122;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.nav.apply(null,a__11935__auto__);
};
var nav = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return nav__delegate.call(this,args__11934__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__17123){
var args__11934__auto__ = cljs.core.seq(arglist__17123);
return nav__delegate(args__11934__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15246_17124 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15247_17125 = null;var count__15248_17126 = 0;var i__15249_17127 = 0;while(true){
if((i__15249_17127 < count__15248_17126))
{var arg__11936__auto___17128 = cljs.core._nth.call(null,chunk__15247_17125,i__15249_17127);a__11935__auto__.push(arg__11936__auto___17128);
{
var G__17129 = seq__15246_17124;
var G__17130 = chunk__15247_17125;
var G__17131 = count__15248_17126;
var G__17132 = (i__15249_17127 + 1);
seq__15246_17124 = G__17129;
chunk__15247_17125 = G__17130;
count__15248_17126 = G__17131;
i__15249_17127 = G__17132;
continue;
}
} else
{var temp__4092__auto___17133 = cljs.core.seq.call(null,seq__15246_17124);if(temp__4092__auto___17133)
{var seq__15246_17134__$1 = temp__4092__auto___17133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15246_17134__$1))
{var c__11077__auto___17135 = cljs.core.chunk_first.call(null,seq__15246_17134__$1);{
var G__17136 = cljs.core.chunk_rest.call(null,seq__15246_17134__$1);
var G__17137 = c__11077__auto___17135;
var G__17138 = cljs.core.count.call(null,c__11077__auto___17135);
var G__17139 = 0;
seq__15246_17124 = G__17136;
chunk__15247_17125 = G__17137;
count__15248_17126 = G__17138;
i__15249_17127 = G__17139;
continue;
}
} else
{var arg__11936__auto___17140 = cljs.core.first.call(null,seq__15246_17134__$1);a__11935__auto__.push(arg__11936__auto___17140);
{
var G__17141 = cljs.core.next.call(null,seq__15246_17134__$1);
var G__17142 = null;
var G__17143 = 0;
var G__17144 = 0;
seq__15246_17124 = G__17141;
chunk__15247_17125 = G__17142;
count__15248_17126 = G__17143;
i__15249_17127 = G__17144;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.noscript.apply(null,a__11935__auto__);
};
var noscript = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return noscript__delegate.call(this,args__11934__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__17145){
var args__11934__auto__ = cljs.core.seq(arglist__17145);
return noscript__delegate(args__11934__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15254_17146 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15255_17147 = null;var count__15256_17148 = 0;var i__15257_17149 = 0;while(true){
if((i__15257_17149 < count__15256_17148))
{var arg__11936__auto___17150 = cljs.core._nth.call(null,chunk__15255_17147,i__15257_17149);a__11935__auto__.push(arg__11936__auto___17150);
{
var G__17151 = seq__15254_17146;
var G__17152 = chunk__15255_17147;
var G__17153 = count__15256_17148;
var G__17154 = (i__15257_17149 + 1);
seq__15254_17146 = G__17151;
chunk__15255_17147 = G__17152;
count__15256_17148 = G__17153;
i__15257_17149 = G__17154;
continue;
}
} else
{var temp__4092__auto___17155 = cljs.core.seq.call(null,seq__15254_17146);if(temp__4092__auto___17155)
{var seq__15254_17156__$1 = temp__4092__auto___17155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15254_17156__$1))
{var c__11077__auto___17157 = cljs.core.chunk_first.call(null,seq__15254_17156__$1);{
var G__17158 = cljs.core.chunk_rest.call(null,seq__15254_17156__$1);
var G__17159 = c__11077__auto___17157;
var G__17160 = cljs.core.count.call(null,c__11077__auto___17157);
var G__17161 = 0;
seq__15254_17146 = G__17158;
chunk__15255_17147 = G__17159;
count__15256_17148 = G__17160;
i__15257_17149 = G__17161;
continue;
}
} else
{var arg__11936__auto___17162 = cljs.core.first.call(null,seq__15254_17156__$1);a__11935__auto__.push(arg__11936__auto___17162);
{
var G__17163 = cljs.core.next.call(null,seq__15254_17156__$1);
var G__17164 = null;
var G__17165 = 0;
var G__17166 = 0;
seq__15254_17146 = G__17163;
chunk__15255_17147 = G__17164;
count__15256_17148 = G__17165;
i__15257_17149 = G__17166;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.object.apply(null,a__11935__auto__);
};
var object = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return object__delegate.call(this,args__11934__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__17167){
var args__11934__auto__ = cljs.core.seq(arglist__17167);
return object__delegate(args__11934__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15262_17168 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15263_17169 = null;var count__15264_17170 = 0;var i__15265_17171 = 0;while(true){
if((i__15265_17171 < count__15264_17170))
{var arg__11936__auto___17172 = cljs.core._nth.call(null,chunk__15263_17169,i__15265_17171);a__11935__auto__.push(arg__11936__auto___17172);
{
var G__17173 = seq__15262_17168;
var G__17174 = chunk__15263_17169;
var G__17175 = count__15264_17170;
var G__17176 = (i__15265_17171 + 1);
seq__15262_17168 = G__17173;
chunk__15263_17169 = G__17174;
count__15264_17170 = G__17175;
i__15265_17171 = G__17176;
continue;
}
} else
{var temp__4092__auto___17177 = cljs.core.seq.call(null,seq__15262_17168);if(temp__4092__auto___17177)
{var seq__15262_17178__$1 = temp__4092__auto___17177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15262_17178__$1))
{var c__11077__auto___17179 = cljs.core.chunk_first.call(null,seq__15262_17178__$1);{
var G__17180 = cljs.core.chunk_rest.call(null,seq__15262_17178__$1);
var G__17181 = c__11077__auto___17179;
var G__17182 = cljs.core.count.call(null,c__11077__auto___17179);
var G__17183 = 0;
seq__15262_17168 = G__17180;
chunk__15263_17169 = G__17181;
count__15264_17170 = G__17182;
i__15265_17171 = G__17183;
continue;
}
} else
{var arg__11936__auto___17184 = cljs.core.first.call(null,seq__15262_17178__$1);a__11935__auto__.push(arg__11936__auto___17184);
{
var G__17185 = cljs.core.next.call(null,seq__15262_17178__$1);
var G__17186 = null;
var G__17187 = 0;
var G__17188 = 0;
seq__15262_17168 = G__17185;
chunk__15263_17169 = G__17186;
count__15264_17170 = G__17187;
i__15265_17171 = G__17188;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ol.apply(null,a__11935__auto__);
};
var ol = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ol__delegate.call(this,args__11934__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__17189){
var args__11934__auto__ = cljs.core.seq(arglist__17189);
return ol__delegate(args__11934__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15270_17190 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15271_17191 = null;var count__15272_17192 = 0;var i__15273_17193 = 0;while(true){
if((i__15273_17193 < count__15272_17192))
{var arg__11936__auto___17194 = cljs.core._nth.call(null,chunk__15271_17191,i__15273_17193);a__11935__auto__.push(arg__11936__auto___17194);
{
var G__17195 = seq__15270_17190;
var G__17196 = chunk__15271_17191;
var G__17197 = count__15272_17192;
var G__17198 = (i__15273_17193 + 1);
seq__15270_17190 = G__17195;
chunk__15271_17191 = G__17196;
count__15272_17192 = G__17197;
i__15273_17193 = G__17198;
continue;
}
} else
{var temp__4092__auto___17199 = cljs.core.seq.call(null,seq__15270_17190);if(temp__4092__auto___17199)
{var seq__15270_17200__$1 = temp__4092__auto___17199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15270_17200__$1))
{var c__11077__auto___17201 = cljs.core.chunk_first.call(null,seq__15270_17200__$1);{
var G__17202 = cljs.core.chunk_rest.call(null,seq__15270_17200__$1);
var G__17203 = c__11077__auto___17201;
var G__17204 = cljs.core.count.call(null,c__11077__auto___17201);
var G__17205 = 0;
seq__15270_17190 = G__17202;
chunk__15271_17191 = G__17203;
count__15272_17192 = G__17204;
i__15273_17193 = G__17205;
continue;
}
} else
{var arg__11936__auto___17206 = cljs.core.first.call(null,seq__15270_17200__$1);a__11935__auto__.push(arg__11936__auto___17206);
{
var G__17207 = cljs.core.next.call(null,seq__15270_17200__$1);
var G__17208 = null;
var G__17209 = 0;
var G__17210 = 0;
seq__15270_17190 = G__17207;
chunk__15271_17191 = G__17208;
count__15272_17192 = G__17209;
i__15273_17193 = G__17210;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.optgroup.apply(null,a__11935__auto__);
};
var optgroup = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return optgroup__delegate.call(this,args__11934__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__17211){
var args__11934__auto__ = cljs.core.seq(arglist__17211);
return optgroup__delegate(args__11934__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15278_17212 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15279_17213 = null;var count__15280_17214 = 0;var i__15281_17215 = 0;while(true){
if((i__15281_17215 < count__15280_17214))
{var arg__11936__auto___17216 = cljs.core._nth.call(null,chunk__15279_17213,i__15281_17215);a__11935__auto__.push(arg__11936__auto___17216);
{
var G__17217 = seq__15278_17212;
var G__17218 = chunk__15279_17213;
var G__17219 = count__15280_17214;
var G__17220 = (i__15281_17215 + 1);
seq__15278_17212 = G__17217;
chunk__15279_17213 = G__17218;
count__15280_17214 = G__17219;
i__15281_17215 = G__17220;
continue;
}
} else
{var temp__4092__auto___17221 = cljs.core.seq.call(null,seq__15278_17212);if(temp__4092__auto___17221)
{var seq__15278_17222__$1 = temp__4092__auto___17221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15278_17222__$1))
{var c__11077__auto___17223 = cljs.core.chunk_first.call(null,seq__15278_17222__$1);{
var G__17224 = cljs.core.chunk_rest.call(null,seq__15278_17222__$1);
var G__17225 = c__11077__auto___17223;
var G__17226 = cljs.core.count.call(null,c__11077__auto___17223);
var G__17227 = 0;
seq__15278_17212 = G__17224;
chunk__15279_17213 = G__17225;
count__15280_17214 = G__17226;
i__15281_17215 = G__17227;
continue;
}
} else
{var arg__11936__auto___17228 = cljs.core.first.call(null,seq__15278_17222__$1);a__11935__auto__.push(arg__11936__auto___17228);
{
var G__17229 = cljs.core.next.call(null,seq__15278_17222__$1);
var G__17230 = null;
var G__17231 = 0;
var G__17232 = 0;
seq__15278_17212 = G__17229;
chunk__15279_17213 = G__17230;
count__15280_17214 = G__17231;
i__15281_17215 = G__17232;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.option.apply(null,a__11935__auto__);
};
var option = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return option__delegate.call(this,args__11934__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__17233){
var args__11934__auto__ = cljs.core.seq(arglist__17233);
return option__delegate(args__11934__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15286_17234 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15287_17235 = null;var count__15288_17236 = 0;var i__15289_17237 = 0;while(true){
if((i__15289_17237 < count__15288_17236))
{var arg__11936__auto___17238 = cljs.core._nth.call(null,chunk__15287_17235,i__15289_17237);a__11935__auto__.push(arg__11936__auto___17238);
{
var G__17239 = seq__15286_17234;
var G__17240 = chunk__15287_17235;
var G__17241 = count__15288_17236;
var G__17242 = (i__15289_17237 + 1);
seq__15286_17234 = G__17239;
chunk__15287_17235 = G__17240;
count__15288_17236 = G__17241;
i__15289_17237 = G__17242;
continue;
}
} else
{var temp__4092__auto___17243 = cljs.core.seq.call(null,seq__15286_17234);if(temp__4092__auto___17243)
{var seq__15286_17244__$1 = temp__4092__auto___17243;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15286_17244__$1))
{var c__11077__auto___17245 = cljs.core.chunk_first.call(null,seq__15286_17244__$1);{
var G__17246 = cljs.core.chunk_rest.call(null,seq__15286_17244__$1);
var G__17247 = c__11077__auto___17245;
var G__17248 = cljs.core.count.call(null,c__11077__auto___17245);
var G__17249 = 0;
seq__15286_17234 = G__17246;
chunk__15287_17235 = G__17247;
count__15288_17236 = G__17248;
i__15289_17237 = G__17249;
continue;
}
} else
{var arg__11936__auto___17250 = cljs.core.first.call(null,seq__15286_17244__$1);a__11935__auto__.push(arg__11936__auto___17250);
{
var G__17251 = cljs.core.next.call(null,seq__15286_17244__$1);
var G__17252 = null;
var G__17253 = 0;
var G__17254 = 0;
seq__15286_17234 = G__17251;
chunk__15287_17235 = G__17252;
count__15288_17236 = G__17253;
i__15289_17237 = G__17254;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.output.apply(null,a__11935__auto__);
};
var output = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return output__delegate.call(this,args__11934__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__17255){
var args__11934__auto__ = cljs.core.seq(arglist__17255);
return output__delegate(args__11934__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15294_17256 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15295_17257 = null;var count__15296_17258 = 0;var i__15297_17259 = 0;while(true){
if((i__15297_17259 < count__15296_17258))
{var arg__11936__auto___17260 = cljs.core._nth.call(null,chunk__15295_17257,i__15297_17259);a__11935__auto__.push(arg__11936__auto___17260);
{
var G__17261 = seq__15294_17256;
var G__17262 = chunk__15295_17257;
var G__17263 = count__15296_17258;
var G__17264 = (i__15297_17259 + 1);
seq__15294_17256 = G__17261;
chunk__15295_17257 = G__17262;
count__15296_17258 = G__17263;
i__15297_17259 = G__17264;
continue;
}
} else
{var temp__4092__auto___17265 = cljs.core.seq.call(null,seq__15294_17256);if(temp__4092__auto___17265)
{var seq__15294_17266__$1 = temp__4092__auto___17265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15294_17266__$1))
{var c__11077__auto___17267 = cljs.core.chunk_first.call(null,seq__15294_17266__$1);{
var G__17268 = cljs.core.chunk_rest.call(null,seq__15294_17266__$1);
var G__17269 = c__11077__auto___17267;
var G__17270 = cljs.core.count.call(null,c__11077__auto___17267);
var G__17271 = 0;
seq__15294_17256 = G__17268;
chunk__15295_17257 = G__17269;
count__15296_17258 = G__17270;
i__15297_17259 = G__17271;
continue;
}
} else
{var arg__11936__auto___17272 = cljs.core.first.call(null,seq__15294_17266__$1);a__11935__auto__.push(arg__11936__auto___17272);
{
var G__17273 = cljs.core.next.call(null,seq__15294_17266__$1);
var G__17274 = null;
var G__17275 = 0;
var G__17276 = 0;
seq__15294_17256 = G__17273;
chunk__15295_17257 = G__17274;
count__15296_17258 = G__17275;
i__15297_17259 = G__17276;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.p.apply(null,a__11935__auto__);
};
var p = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return p__delegate.call(this,args__11934__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__17277){
var args__11934__auto__ = cljs.core.seq(arglist__17277);
return p__delegate(args__11934__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15302_17278 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15303_17279 = null;var count__15304_17280 = 0;var i__15305_17281 = 0;while(true){
if((i__15305_17281 < count__15304_17280))
{var arg__11936__auto___17282 = cljs.core._nth.call(null,chunk__15303_17279,i__15305_17281);a__11935__auto__.push(arg__11936__auto___17282);
{
var G__17283 = seq__15302_17278;
var G__17284 = chunk__15303_17279;
var G__17285 = count__15304_17280;
var G__17286 = (i__15305_17281 + 1);
seq__15302_17278 = G__17283;
chunk__15303_17279 = G__17284;
count__15304_17280 = G__17285;
i__15305_17281 = G__17286;
continue;
}
} else
{var temp__4092__auto___17287 = cljs.core.seq.call(null,seq__15302_17278);if(temp__4092__auto___17287)
{var seq__15302_17288__$1 = temp__4092__auto___17287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15302_17288__$1))
{var c__11077__auto___17289 = cljs.core.chunk_first.call(null,seq__15302_17288__$1);{
var G__17290 = cljs.core.chunk_rest.call(null,seq__15302_17288__$1);
var G__17291 = c__11077__auto___17289;
var G__17292 = cljs.core.count.call(null,c__11077__auto___17289);
var G__17293 = 0;
seq__15302_17278 = G__17290;
chunk__15303_17279 = G__17291;
count__15304_17280 = G__17292;
i__15305_17281 = G__17293;
continue;
}
} else
{var arg__11936__auto___17294 = cljs.core.first.call(null,seq__15302_17288__$1);a__11935__auto__.push(arg__11936__auto___17294);
{
var G__17295 = cljs.core.next.call(null,seq__15302_17288__$1);
var G__17296 = null;
var G__17297 = 0;
var G__17298 = 0;
seq__15302_17278 = G__17295;
chunk__15303_17279 = G__17296;
count__15304_17280 = G__17297;
i__15305_17281 = G__17298;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.param.apply(null,a__11935__auto__);
};
var param = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return param__delegate.call(this,args__11934__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__17299){
var args__11934__auto__ = cljs.core.seq(arglist__17299);
return param__delegate(args__11934__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15310_17300 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15311_17301 = null;var count__15312_17302 = 0;var i__15313_17303 = 0;while(true){
if((i__15313_17303 < count__15312_17302))
{var arg__11936__auto___17304 = cljs.core._nth.call(null,chunk__15311_17301,i__15313_17303);a__11935__auto__.push(arg__11936__auto___17304);
{
var G__17305 = seq__15310_17300;
var G__17306 = chunk__15311_17301;
var G__17307 = count__15312_17302;
var G__17308 = (i__15313_17303 + 1);
seq__15310_17300 = G__17305;
chunk__15311_17301 = G__17306;
count__15312_17302 = G__17307;
i__15313_17303 = G__17308;
continue;
}
} else
{var temp__4092__auto___17309 = cljs.core.seq.call(null,seq__15310_17300);if(temp__4092__auto___17309)
{var seq__15310_17310__$1 = temp__4092__auto___17309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15310_17310__$1))
{var c__11077__auto___17311 = cljs.core.chunk_first.call(null,seq__15310_17310__$1);{
var G__17312 = cljs.core.chunk_rest.call(null,seq__15310_17310__$1);
var G__17313 = c__11077__auto___17311;
var G__17314 = cljs.core.count.call(null,c__11077__auto___17311);
var G__17315 = 0;
seq__15310_17300 = G__17312;
chunk__15311_17301 = G__17313;
count__15312_17302 = G__17314;
i__15313_17303 = G__17315;
continue;
}
} else
{var arg__11936__auto___17316 = cljs.core.first.call(null,seq__15310_17310__$1);a__11935__auto__.push(arg__11936__auto___17316);
{
var G__17317 = cljs.core.next.call(null,seq__15310_17310__$1);
var G__17318 = null;
var G__17319 = 0;
var G__17320 = 0;
seq__15310_17300 = G__17317;
chunk__15311_17301 = G__17318;
count__15312_17302 = G__17319;
i__15313_17303 = G__17320;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.pre.apply(null,a__11935__auto__);
};
var pre = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return pre__delegate.call(this,args__11934__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__17321){
var args__11934__auto__ = cljs.core.seq(arglist__17321);
return pre__delegate(args__11934__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15318_17322 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15319_17323 = null;var count__15320_17324 = 0;var i__15321_17325 = 0;while(true){
if((i__15321_17325 < count__15320_17324))
{var arg__11936__auto___17326 = cljs.core._nth.call(null,chunk__15319_17323,i__15321_17325);a__11935__auto__.push(arg__11936__auto___17326);
{
var G__17327 = seq__15318_17322;
var G__17328 = chunk__15319_17323;
var G__17329 = count__15320_17324;
var G__17330 = (i__15321_17325 + 1);
seq__15318_17322 = G__17327;
chunk__15319_17323 = G__17328;
count__15320_17324 = G__17329;
i__15321_17325 = G__17330;
continue;
}
} else
{var temp__4092__auto___17331 = cljs.core.seq.call(null,seq__15318_17322);if(temp__4092__auto___17331)
{var seq__15318_17332__$1 = temp__4092__auto___17331;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15318_17332__$1))
{var c__11077__auto___17333 = cljs.core.chunk_first.call(null,seq__15318_17332__$1);{
var G__17334 = cljs.core.chunk_rest.call(null,seq__15318_17332__$1);
var G__17335 = c__11077__auto___17333;
var G__17336 = cljs.core.count.call(null,c__11077__auto___17333);
var G__17337 = 0;
seq__15318_17322 = G__17334;
chunk__15319_17323 = G__17335;
count__15320_17324 = G__17336;
i__15321_17325 = G__17337;
continue;
}
} else
{var arg__11936__auto___17338 = cljs.core.first.call(null,seq__15318_17332__$1);a__11935__auto__.push(arg__11936__auto___17338);
{
var G__17339 = cljs.core.next.call(null,seq__15318_17332__$1);
var G__17340 = null;
var G__17341 = 0;
var G__17342 = 0;
seq__15318_17322 = G__17339;
chunk__15319_17323 = G__17340;
count__15320_17324 = G__17341;
i__15321_17325 = G__17342;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.progress.apply(null,a__11935__auto__);
};
var progress = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return progress__delegate.call(this,args__11934__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__17343){
var args__11934__auto__ = cljs.core.seq(arglist__17343);
return progress__delegate(args__11934__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15326_17344 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15327_17345 = null;var count__15328_17346 = 0;var i__15329_17347 = 0;while(true){
if((i__15329_17347 < count__15328_17346))
{var arg__11936__auto___17348 = cljs.core._nth.call(null,chunk__15327_17345,i__15329_17347);a__11935__auto__.push(arg__11936__auto___17348);
{
var G__17349 = seq__15326_17344;
var G__17350 = chunk__15327_17345;
var G__17351 = count__15328_17346;
var G__17352 = (i__15329_17347 + 1);
seq__15326_17344 = G__17349;
chunk__15327_17345 = G__17350;
count__15328_17346 = G__17351;
i__15329_17347 = G__17352;
continue;
}
} else
{var temp__4092__auto___17353 = cljs.core.seq.call(null,seq__15326_17344);if(temp__4092__auto___17353)
{var seq__15326_17354__$1 = temp__4092__auto___17353;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15326_17354__$1))
{var c__11077__auto___17355 = cljs.core.chunk_first.call(null,seq__15326_17354__$1);{
var G__17356 = cljs.core.chunk_rest.call(null,seq__15326_17354__$1);
var G__17357 = c__11077__auto___17355;
var G__17358 = cljs.core.count.call(null,c__11077__auto___17355);
var G__17359 = 0;
seq__15326_17344 = G__17356;
chunk__15327_17345 = G__17357;
count__15328_17346 = G__17358;
i__15329_17347 = G__17359;
continue;
}
} else
{var arg__11936__auto___17360 = cljs.core.first.call(null,seq__15326_17354__$1);a__11935__auto__.push(arg__11936__auto___17360);
{
var G__17361 = cljs.core.next.call(null,seq__15326_17354__$1);
var G__17362 = null;
var G__17363 = 0;
var G__17364 = 0;
seq__15326_17344 = G__17361;
chunk__15327_17345 = G__17362;
count__15328_17346 = G__17363;
i__15329_17347 = G__17364;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.q.apply(null,a__11935__auto__);
};
var q = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return q__delegate.call(this,args__11934__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__17365){
var args__11934__auto__ = cljs.core.seq(arglist__17365);
return q__delegate(args__11934__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15334_17366 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15335_17367 = null;var count__15336_17368 = 0;var i__15337_17369 = 0;while(true){
if((i__15337_17369 < count__15336_17368))
{var arg__11936__auto___17370 = cljs.core._nth.call(null,chunk__15335_17367,i__15337_17369);a__11935__auto__.push(arg__11936__auto___17370);
{
var G__17371 = seq__15334_17366;
var G__17372 = chunk__15335_17367;
var G__17373 = count__15336_17368;
var G__17374 = (i__15337_17369 + 1);
seq__15334_17366 = G__17371;
chunk__15335_17367 = G__17372;
count__15336_17368 = G__17373;
i__15337_17369 = G__17374;
continue;
}
} else
{var temp__4092__auto___17375 = cljs.core.seq.call(null,seq__15334_17366);if(temp__4092__auto___17375)
{var seq__15334_17376__$1 = temp__4092__auto___17375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15334_17376__$1))
{var c__11077__auto___17377 = cljs.core.chunk_first.call(null,seq__15334_17376__$1);{
var G__17378 = cljs.core.chunk_rest.call(null,seq__15334_17376__$1);
var G__17379 = c__11077__auto___17377;
var G__17380 = cljs.core.count.call(null,c__11077__auto___17377);
var G__17381 = 0;
seq__15334_17366 = G__17378;
chunk__15335_17367 = G__17379;
count__15336_17368 = G__17380;
i__15337_17369 = G__17381;
continue;
}
} else
{var arg__11936__auto___17382 = cljs.core.first.call(null,seq__15334_17376__$1);a__11935__auto__.push(arg__11936__auto___17382);
{
var G__17383 = cljs.core.next.call(null,seq__15334_17376__$1);
var G__17384 = null;
var G__17385 = 0;
var G__17386 = 0;
seq__15334_17366 = G__17383;
chunk__15335_17367 = G__17384;
count__15336_17368 = G__17385;
i__15337_17369 = G__17386;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rp.apply(null,a__11935__auto__);
};
var rp = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rp__delegate.call(this,args__11934__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__17387){
var args__11934__auto__ = cljs.core.seq(arglist__17387);
return rp__delegate(args__11934__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15342_17388 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15343_17389 = null;var count__15344_17390 = 0;var i__15345_17391 = 0;while(true){
if((i__15345_17391 < count__15344_17390))
{var arg__11936__auto___17392 = cljs.core._nth.call(null,chunk__15343_17389,i__15345_17391);a__11935__auto__.push(arg__11936__auto___17392);
{
var G__17393 = seq__15342_17388;
var G__17394 = chunk__15343_17389;
var G__17395 = count__15344_17390;
var G__17396 = (i__15345_17391 + 1);
seq__15342_17388 = G__17393;
chunk__15343_17389 = G__17394;
count__15344_17390 = G__17395;
i__15345_17391 = G__17396;
continue;
}
} else
{var temp__4092__auto___17397 = cljs.core.seq.call(null,seq__15342_17388);if(temp__4092__auto___17397)
{var seq__15342_17398__$1 = temp__4092__auto___17397;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15342_17398__$1))
{var c__11077__auto___17399 = cljs.core.chunk_first.call(null,seq__15342_17398__$1);{
var G__17400 = cljs.core.chunk_rest.call(null,seq__15342_17398__$1);
var G__17401 = c__11077__auto___17399;
var G__17402 = cljs.core.count.call(null,c__11077__auto___17399);
var G__17403 = 0;
seq__15342_17388 = G__17400;
chunk__15343_17389 = G__17401;
count__15344_17390 = G__17402;
i__15345_17391 = G__17403;
continue;
}
} else
{var arg__11936__auto___17404 = cljs.core.first.call(null,seq__15342_17398__$1);a__11935__auto__.push(arg__11936__auto___17404);
{
var G__17405 = cljs.core.next.call(null,seq__15342_17398__$1);
var G__17406 = null;
var G__17407 = 0;
var G__17408 = 0;
seq__15342_17388 = G__17405;
chunk__15343_17389 = G__17406;
count__15344_17390 = G__17407;
i__15345_17391 = G__17408;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rt.apply(null,a__11935__auto__);
};
var rt = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rt__delegate.call(this,args__11934__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__17409){
var args__11934__auto__ = cljs.core.seq(arglist__17409);
return rt__delegate(args__11934__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15350_17410 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15351_17411 = null;var count__15352_17412 = 0;var i__15353_17413 = 0;while(true){
if((i__15353_17413 < count__15352_17412))
{var arg__11936__auto___17414 = cljs.core._nth.call(null,chunk__15351_17411,i__15353_17413);a__11935__auto__.push(arg__11936__auto___17414);
{
var G__17415 = seq__15350_17410;
var G__17416 = chunk__15351_17411;
var G__17417 = count__15352_17412;
var G__17418 = (i__15353_17413 + 1);
seq__15350_17410 = G__17415;
chunk__15351_17411 = G__17416;
count__15352_17412 = G__17417;
i__15353_17413 = G__17418;
continue;
}
} else
{var temp__4092__auto___17419 = cljs.core.seq.call(null,seq__15350_17410);if(temp__4092__auto___17419)
{var seq__15350_17420__$1 = temp__4092__auto___17419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15350_17420__$1))
{var c__11077__auto___17421 = cljs.core.chunk_first.call(null,seq__15350_17420__$1);{
var G__17422 = cljs.core.chunk_rest.call(null,seq__15350_17420__$1);
var G__17423 = c__11077__auto___17421;
var G__17424 = cljs.core.count.call(null,c__11077__auto___17421);
var G__17425 = 0;
seq__15350_17410 = G__17422;
chunk__15351_17411 = G__17423;
count__15352_17412 = G__17424;
i__15353_17413 = G__17425;
continue;
}
} else
{var arg__11936__auto___17426 = cljs.core.first.call(null,seq__15350_17420__$1);a__11935__auto__.push(arg__11936__auto___17426);
{
var G__17427 = cljs.core.next.call(null,seq__15350_17420__$1);
var G__17428 = null;
var G__17429 = 0;
var G__17430 = 0;
seq__15350_17410 = G__17427;
chunk__15351_17411 = G__17428;
count__15352_17412 = G__17429;
i__15353_17413 = G__17430;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ruby.apply(null,a__11935__auto__);
};
var ruby = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ruby__delegate.call(this,args__11934__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__17431){
var args__11934__auto__ = cljs.core.seq(arglist__17431);
return ruby__delegate(args__11934__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15358_17432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15359_17433 = null;var count__15360_17434 = 0;var i__15361_17435 = 0;while(true){
if((i__15361_17435 < count__15360_17434))
{var arg__11936__auto___17436 = cljs.core._nth.call(null,chunk__15359_17433,i__15361_17435);a__11935__auto__.push(arg__11936__auto___17436);
{
var G__17437 = seq__15358_17432;
var G__17438 = chunk__15359_17433;
var G__17439 = count__15360_17434;
var G__17440 = (i__15361_17435 + 1);
seq__15358_17432 = G__17437;
chunk__15359_17433 = G__17438;
count__15360_17434 = G__17439;
i__15361_17435 = G__17440;
continue;
}
} else
{var temp__4092__auto___17441 = cljs.core.seq.call(null,seq__15358_17432);if(temp__4092__auto___17441)
{var seq__15358_17442__$1 = temp__4092__auto___17441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15358_17442__$1))
{var c__11077__auto___17443 = cljs.core.chunk_first.call(null,seq__15358_17442__$1);{
var G__17444 = cljs.core.chunk_rest.call(null,seq__15358_17442__$1);
var G__17445 = c__11077__auto___17443;
var G__17446 = cljs.core.count.call(null,c__11077__auto___17443);
var G__17447 = 0;
seq__15358_17432 = G__17444;
chunk__15359_17433 = G__17445;
count__15360_17434 = G__17446;
i__15361_17435 = G__17447;
continue;
}
} else
{var arg__11936__auto___17448 = cljs.core.first.call(null,seq__15358_17442__$1);a__11935__auto__.push(arg__11936__auto___17448);
{
var G__17449 = cljs.core.next.call(null,seq__15358_17442__$1);
var G__17450 = null;
var G__17451 = 0;
var G__17452 = 0;
seq__15358_17432 = G__17449;
chunk__15359_17433 = G__17450;
count__15360_17434 = G__17451;
i__15361_17435 = G__17452;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.s.apply(null,a__11935__auto__);
};
var s = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return s__delegate.call(this,args__11934__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__17453){
var args__11934__auto__ = cljs.core.seq(arglist__17453);
return s__delegate(args__11934__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15366_17454 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15367_17455 = null;var count__15368_17456 = 0;var i__15369_17457 = 0;while(true){
if((i__15369_17457 < count__15368_17456))
{var arg__11936__auto___17458 = cljs.core._nth.call(null,chunk__15367_17455,i__15369_17457);a__11935__auto__.push(arg__11936__auto___17458);
{
var G__17459 = seq__15366_17454;
var G__17460 = chunk__15367_17455;
var G__17461 = count__15368_17456;
var G__17462 = (i__15369_17457 + 1);
seq__15366_17454 = G__17459;
chunk__15367_17455 = G__17460;
count__15368_17456 = G__17461;
i__15369_17457 = G__17462;
continue;
}
} else
{var temp__4092__auto___17463 = cljs.core.seq.call(null,seq__15366_17454);if(temp__4092__auto___17463)
{var seq__15366_17464__$1 = temp__4092__auto___17463;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15366_17464__$1))
{var c__11077__auto___17465 = cljs.core.chunk_first.call(null,seq__15366_17464__$1);{
var G__17466 = cljs.core.chunk_rest.call(null,seq__15366_17464__$1);
var G__17467 = c__11077__auto___17465;
var G__17468 = cljs.core.count.call(null,c__11077__auto___17465);
var G__17469 = 0;
seq__15366_17454 = G__17466;
chunk__15367_17455 = G__17467;
count__15368_17456 = G__17468;
i__15369_17457 = G__17469;
continue;
}
} else
{var arg__11936__auto___17470 = cljs.core.first.call(null,seq__15366_17464__$1);a__11935__auto__.push(arg__11936__auto___17470);
{
var G__17471 = cljs.core.next.call(null,seq__15366_17464__$1);
var G__17472 = null;
var G__17473 = 0;
var G__17474 = 0;
seq__15366_17454 = G__17471;
chunk__15367_17455 = G__17472;
count__15368_17456 = G__17473;
i__15369_17457 = G__17474;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.samp.apply(null,a__11935__auto__);
};
var samp = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return samp__delegate.call(this,args__11934__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__17475){
var args__11934__auto__ = cljs.core.seq(arglist__17475);
return samp__delegate(args__11934__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15374_17476 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15375_17477 = null;var count__15376_17478 = 0;var i__15377_17479 = 0;while(true){
if((i__15377_17479 < count__15376_17478))
{var arg__11936__auto___17480 = cljs.core._nth.call(null,chunk__15375_17477,i__15377_17479);a__11935__auto__.push(arg__11936__auto___17480);
{
var G__17481 = seq__15374_17476;
var G__17482 = chunk__15375_17477;
var G__17483 = count__15376_17478;
var G__17484 = (i__15377_17479 + 1);
seq__15374_17476 = G__17481;
chunk__15375_17477 = G__17482;
count__15376_17478 = G__17483;
i__15377_17479 = G__17484;
continue;
}
} else
{var temp__4092__auto___17485 = cljs.core.seq.call(null,seq__15374_17476);if(temp__4092__auto___17485)
{var seq__15374_17486__$1 = temp__4092__auto___17485;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15374_17486__$1))
{var c__11077__auto___17487 = cljs.core.chunk_first.call(null,seq__15374_17486__$1);{
var G__17488 = cljs.core.chunk_rest.call(null,seq__15374_17486__$1);
var G__17489 = c__11077__auto___17487;
var G__17490 = cljs.core.count.call(null,c__11077__auto___17487);
var G__17491 = 0;
seq__15374_17476 = G__17488;
chunk__15375_17477 = G__17489;
count__15376_17478 = G__17490;
i__15377_17479 = G__17491;
continue;
}
} else
{var arg__11936__auto___17492 = cljs.core.first.call(null,seq__15374_17486__$1);a__11935__auto__.push(arg__11936__auto___17492);
{
var G__17493 = cljs.core.next.call(null,seq__15374_17486__$1);
var G__17494 = null;
var G__17495 = 0;
var G__17496 = 0;
seq__15374_17476 = G__17493;
chunk__15375_17477 = G__17494;
count__15376_17478 = G__17495;
i__15377_17479 = G__17496;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.script.apply(null,a__11935__auto__);
};
var script = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return script__delegate.call(this,args__11934__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__17497){
var args__11934__auto__ = cljs.core.seq(arglist__17497);
return script__delegate(args__11934__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15382_17498 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15383_17499 = null;var count__15384_17500 = 0;var i__15385_17501 = 0;while(true){
if((i__15385_17501 < count__15384_17500))
{var arg__11936__auto___17502 = cljs.core._nth.call(null,chunk__15383_17499,i__15385_17501);a__11935__auto__.push(arg__11936__auto___17502);
{
var G__17503 = seq__15382_17498;
var G__17504 = chunk__15383_17499;
var G__17505 = count__15384_17500;
var G__17506 = (i__15385_17501 + 1);
seq__15382_17498 = G__17503;
chunk__15383_17499 = G__17504;
count__15384_17500 = G__17505;
i__15385_17501 = G__17506;
continue;
}
} else
{var temp__4092__auto___17507 = cljs.core.seq.call(null,seq__15382_17498);if(temp__4092__auto___17507)
{var seq__15382_17508__$1 = temp__4092__auto___17507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15382_17508__$1))
{var c__11077__auto___17509 = cljs.core.chunk_first.call(null,seq__15382_17508__$1);{
var G__17510 = cljs.core.chunk_rest.call(null,seq__15382_17508__$1);
var G__17511 = c__11077__auto___17509;
var G__17512 = cljs.core.count.call(null,c__11077__auto___17509);
var G__17513 = 0;
seq__15382_17498 = G__17510;
chunk__15383_17499 = G__17511;
count__15384_17500 = G__17512;
i__15385_17501 = G__17513;
continue;
}
} else
{var arg__11936__auto___17514 = cljs.core.first.call(null,seq__15382_17508__$1);a__11935__auto__.push(arg__11936__auto___17514);
{
var G__17515 = cljs.core.next.call(null,seq__15382_17508__$1);
var G__17516 = null;
var G__17517 = 0;
var G__17518 = 0;
seq__15382_17498 = G__17515;
chunk__15383_17499 = G__17516;
count__15384_17500 = G__17517;
i__15385_17501 = G__17518;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.section.apply(null,a__11935__auto__);
};
var section = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return section__delegate.call(this,args__11934__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__17519){
var args__11934__auto__ = cljs.core.seq(arglist__17519);
return section__delegate(args__11934__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15390_17520 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15391_17521 = null;var count__15392_17522 = 0;var i__15393_17523 = 0;while(true){
if((i__15393_17523 < count__15392_17522))
{var arg__11936__auto___17524 = cljs.core._nth.call(null,chunk__15391_17521,i__15393_17523);a__11935__auto__.push(arg__11936__auto___17524);
{
var G__17525 = seq__15390_17520;
var G__17526 = chunk__15391_17521;
var G__17527 = count__15392_17522;
var G__17528 = (i__15393_17523 + 1);
seq__15390_17520 = G__17525;
chunk__15391_17521 = G__17526;
count__15392_17522 = G__17527;
i__15393_17523 = G__17528;
continue;
}
} else
{var temp__4092__auto___17529 = cljs.core.seq.call(null,seq__15390_17520);if(temp__4092__auto___17529)
{var seq__15390_17530__$1 = temp__4092__auto___17529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15390_17530__$1))
{var c__11077__auto___17531 = cljs.core.chunk_first.call(null,seq__15390_17530__$1);{
var G__17532 = cljs.core.chunk_rest.call(null,seq__15390_17530__$1);
var G__17533 = c__11077__auto___17531;
var G__17534 = cljs.core.count.call(null,c__11077__auto___17531);
var G__17535 = 0;
seq__15390_17520 = G__17532;
chunk__15391_17521 = G__17533;
count__15392_17522 = G__17534;
i__15393_17523 = G__17535;
continue;
}
} else
{var arg__11936__auto___17536 = cljs.core.first.call(null,seq__15390_17530__$1);a__11935__auto__.push(arg__11936__auto___17536);
{
var G__17537 = cljs.core.next.call(null,seq__15390_17530__$1);
var G__17538 = null;
var G__17539 = 0;
var G__17540 = 0;
seq__15390_17520 = G__17537;
chunk__15391_17521 = G__17538;
count__15392_17522 = G__17539;
i__15393_17523 = G__17540;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.select.apply(null,a__11935__auto__);
};
var select = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return select__delegate.call(this,args__11934__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__17541){
var args__11934__auto__ = cljs.core.seq(arglist__17541);
return select__delegate(args__11934__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15398_17542 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15399_17543 = null;var count__15400_17544 = 0;var i__15401_17545 = 0;while(true){
if((i__15401_17545 < count__15400_17544))
{var arg__11936__auto___17546 = cljs.core._nth.call(null,chunk__15399_17543,i__15401_17545);a__11935__auto__.push(arg__11936__auto___17546);
{
var G__17547 = seq__15398_17542;
var G__17548 = chunk__15399_17543;
var G__17549 = count__15400_17544;
var G__17550 = (i__15401_17545 + 1);
seq__15398_17542 = G__17547;
chunk__15399_17543 = G__17548;
count__15400_17544 = G__17549;
i__15401_17545 = G__17550;
continue;
}
} else
{var temp__4092__auto___17551 = cljs.core.seq.call(null,seq__15398_17542);if(temp__4092__auto___17551)
{var seq__15398_17552__$1 = temp__4092__auto___17551;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15398_17552__$1))
{var c__11077__auto___17553 = cljs.core.chunk_first.call(null,seq__15398_17552__$1);{
var G__17554 = cljs.core.chunk_rest.call(null,seq__15398_17552__$1);
var G__17555 = c__11077__auto___17553;
var G__17556 = cljs.core.count.call(null,c__11077__auto___17553);
var G__17557 = 0;
seq__15398_17542 = G__17554;
chunk__15399_17543 = G__17555;
count__15400_17544 = G__17556;
i__15401_17545 = G__17557;
continue;
}
} else
{var arg__11936__auto___17558 = cljs.core.first.call(null,seq__15398_17552__$1);a__11935__auto__.push(arg__11936__auto___17558);
{
var G__17559 = cljs.core.next.call(null,seq__15398_17552__$1);
var G__17560 = null;
var G__17561 = 0;
var G__17562 = 0;
seq__15398_17542 = G__17559;
chunk__15399_17543 = G__17560;
count__15400_17544 = G__17561;
i__15401_17545 = G__17562;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.small.apply(null,a__11935__auto__);
};
var small = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return small__delegate.call(this,args__11934__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__17563){
var args__11934__auto__ = cljs.core.seq(arglist__17563);
return small__delegate(args__11934__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15406_17564 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15407_17565 = null;var count__15408_17566 = 0;var i__15409_17567 = 0;while(true){
if((i__15409_17567 < count__15408_17566))
{var arg__11936__auto___17568 = cljs.core._nth.call(null,chunk__15407_17565,i__15409_17567);a__11935__auto__.push(arg__11936__auto___17568);
{
var G__17569 = seq__15406_17564;
var G__17570 = chunk__15407_17565;
var G__17571 = count__15408_17566;
var G__17572 = (i__15409_17567 + 1);
seq__15406_17564 = G__17569;
chunk__15407_17565 = G__17570;
count__15408_17566 = G__17571;
i__15409_17567 = G__17572;
continue;
}
} else
{var temp__4092__auto___17573 = cljs.core.seq.call(null,seq__15406_17564);if(temp__4092__auto___17573)
{var seq__15406_17574__$1 = temp__4092__auto___17573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15406_17574__$1))
{var c__11077__auto___17575 = cljs.core.chunk_first.call(null,seq__15406_17574__$1);{
var G__17576 = cljs.core.chunk_rest.call(null,seq__15406_17574__$1);
var G__17577 = c__11077__auto___17575;
var G__17578 = cljs.core.count.call(null,c__11077__auto___17575);
var G__17579 = 0;
seq__15406_17564 = G__17576;
chunk__15407_17565 = G__17577;
count__15408_17566 = G__17578;
i__15409_17567 = G__17579;
continue;
}
} else
{var arg__11936__auto___17580 = cljs.core.first.call(null,seq__15406_17574__$1);a__11935__auto__.push(arg__11936__auto___17580);
{
var G__17581 = cljs.core.next.call(null,seq__15406_17574__$1);
var G__17582 = null;
var G__17583 = 0;
var G__17584 = 0;
seq__15406_17564 = G__17581;
chunk__15407_17565 = G__17582;
count__15408_17566 = G__17583;
i__15409_17567 = G__17584;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.source.apply(null,a__11935__auto__);
};
var source = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return source__delegate.call(this,args__11934__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__17585){
var args__11934__auto__ = cljs.core.seq(arglist__17585);
return source__delegate(args__11934__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15414_17586 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15415_17587 = null;var count__15416_17588 = 0;var i__15417_17589 = 0;while(true){
if((i__15417_17589 < count__15416_17588))
{var arg__11936__auto___17590 = cljs.core._nth.call(null,chunk__15415_17587,i__15417_17589);a__11935__auto__.push(arg__11936__auto___17590);
{
var G__17591 = seq__15414_17586;
var G__17592 = chunk__15415_17587;
var G__17593 = count__15416_17588;
var G__17594 = (i__15417_17589 + 1);
seq__15414_17586 = G__17591;
chunk__15415_17587 = G__17592;
count__15416_17588 = G__17593;
i__15417_17589 = G__17594;
continue;
}
} else
{var temp__4092__auto___17595 = cljs.core.seq.call(null,seq__15414_17586);if(temp__4092__auto___17595)
{var seq__15414_17596__$1 = temp__4092__auto___17595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15414_17596__$1))
{var c__11077__auto___17597 = cljs.core.chunk_first.call(null,seq__15414_17596__$1);{
var G__17598 = cljs.core.chunk_rest.call(null,seq__15414_17596__$1);
var G__17599 = c__11077__auto___17597;
var G__17600 = cljs.core.count.call(null,c__11077__auto___17597);
var G__17601 = 0;
seq__15414_17586 = G__17598;
chunk__15415_17587 = G__17599;
count__15416_17588 = G__17600;
i__15417_17589 = G__17601;
continue;
}
} else
{var arg__11936__auto___17602 = cljs.core.first.call(null,seq__15414_17596__$1);a__11935__auto__.push(arg__11936__auto___17602);
{
var G__17603 = cljs.core.next.call(null,seq__15414_17596__$1);
var G__17604 = null;
var G__17605 = 0;
var G__17606 = 0;
seq__15414_17586 = G__17603;
chunk__15415_17587 = G__17604;
count__15416_17588 = G__17605;
i__15417_17589 = G__17606;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.span.apply(null,a__11935__auto__);
};
var span = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return span__delegate.call(this,args__11934__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__17607){
var args__11934__auto__ = cljs.core.seq(arglist__17607);
return span__delegate(args__11934__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15422_17608 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15423_17609 = null;var count__15424_17610 = 0;var i__15425_17611 = 0;while(true){
if((i__15425_17611 < count__15424_17610))
{var arg__11936__auto___17612 = cljs.core._nth.call(null,chunk__15423_17609,i__15425_17611);a__11935__auto__.push(arg__11936__auto___17612);
{
var G__17613 = seq__15422_17608;
var G__17614 = chunk__15423_17609;
var G__17615 = count__15424_17610;
var G__17616 = (i__15425_17611 + 1);
seq__15422_17608 = G__17613;
chunk__15423_17609 = G__17614;
count__15424_17610 = G__17615;
i__15425_17611 = G__17616;
continue;
}
} else
{var temp__4092__auto___17617 = cljs.core.seq.call(null,seq__15422_17608);if(temp__4092__auto___17617)
{var seq__15422_17618__$1 = temp__4092__auto___17617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15422_17618__$1))
{var c__11077__auto___17619 = cljs.core.chunk_first.call(null,seq__15422_17618__$1);{
var G__17620 = cljs.core.chunk_rest.call(null,seq__15422_17618__$1);
var G__17621 = c__11077__auto___17619;
var G__17622 = cljs.core.count.call(null,c__11077__auto___17619);
var G__17623 = 0;
seq__15422_17608 = G__17620;
chunk__15423_17609 = G__17621;
count__15424_17610 = G__17622;
i__15425_17611 = G__17623;
continue;
}
} else
{var arg__11936__auto___17624 = cljs.core.first.call(null,seq__15422_17618__$1);a__11935__auto__.push(arg__11936__auto___17624);
{
var G__17625 = cljs.core.next.call(null,seq__15422_17618__$1);
var G__17626 = null;
var G__17627 = 0;
var G__17628 = 0;
seq__15422_17608 = G__17625;
chunk__15423_17609 = G__17626;
count__15424_17610 = G__17627;
i__15425_17611 = G__17628;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.strong.apply(null,a__11935__auto__);
};
var strong = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return strong__delegate.call(this,args__11934__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__17629){
var args__11934__auto__ = cljs.core.seq(arglist__17629);
return strong__delegate(args__11934__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15430_17630 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15431_17631 = null;var count__15432_17632 = 0;var i__15433_17633 = 0;while(true){
if((i__15433_17633 < count__15432_17632))
{var arg__11936__auto___17634 = cljs.core._nth.call(null,chunk__15431_17631,i__15433_17633);a__11935__auto__.push(arg__11936__auto___17634);
{
var G__17635 = seq__15430_17630;
var G__17636 = chunk__15431_17631;
var G__17637 = count__15432_17632;
var G__17638 = (i__15433_17633 + 1);
seq__15430_17630 = G__17635;
chunk__15431_17631 = G__17636;
count__15432_17632 = G__17637;
i__15433_17633 = G__17638;
continue;
}
} else
{var temp__4092__auto___17639 = cljs.core.seq.call(null,seq__15430_17630);if(temp__4092__auto___17639)
{var seq__15430_17640__$1 = temp__4092__auto___17639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15430_17640__$1))
{var c__11077__auto___17641 = cljs.core.chunk_first.call(null,seq__15430_17640__$1);{
var G__17642 = cljs.core.chunk_rest.call(null,seq__15430_17640__$1);
var G__17643 = c__11077__auto___17641;
var G__17644 = cljs.core.count.call(null,c__11077__auto___17641);
var G__17645 = 0;
seq__15430_17630 = G__17642;
chunk__15431_17631 = G__17643;
count__15432_17632 = G__17644;
i__15433_17633 = G__17645;
continue;
}
} else
{var arg__11936__auto___17646 = cljs.core.first.call(null,seq__15430_17640__$1);a__11935__auto__.push(arg__11936__auto___17646);
{
var G__17647 = cljs.core.next.call(null,seq__15430_17640__$1);
var G__17648 = null;
var G__17649 = 0;
var G__17650 = 0;
seq__15430_17630 = G__17647;
chunk__15431_17631 = G__17648;
count__15432_17632 = G__17649;
i__15433_17633 = G__17650;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.style.apply(null,a__11935__auto__);
};
var style = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return style__delegate.call(this,args__11934__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__17651){
var args__11934__auto__ = cljs.core.seq(arglist__17651);
return style__delegate(args__11934__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15438_17652 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15439_17653 = null;var count__15440_17654 = 0;var i__15441_17655 = 0;while(true){
if((i__15441_17655 < count__15440_17654))
{var arg__11936__auto___17656 = cljs.core._nth.call(null,chunk__15439_17653,i__15441_17655);a__11935__auto__.push(arg__11936__auto___17656);
{
var G__17657 = seq__15438_17652;
var G__17658 = chunk__15439_17653;
var G__17659 = count__15440_17654;
var G__17660 = (i__15441_17655 + 1);
seq__15438_17652 = G__17657;
chunk__15439_17653 = G__17658;
count__15440_17654 = G__17659;
i__15441_17655 = G__17660;
continue;
}
} else
{var temp__4092__auto___17661 = cljs.core.seq.call(null,seq__15438_17652);if(temp__4092__auto___17661)
{var seq__15438_17662__$1 = temp__4092__auto___17661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15438_17662__$1))
{var c__11077__auto___17663 = cljs.core.chunk_first.call(null,seq__15438_17662__$1);{
var G__17664 = cljs.core.chunk_rest.call(null,seq__15438_17662__$1);
var G__17665 = c__11077__auto___17663;
var G__17666 = cljs.core.count.call(null,c__11077__auto___17663);
var G__17667 = 0;
seq__15438_17652 = G__17664;
chunk__15439_17653 = G__17665;
count__15440_17654 = G__17666;
i__15441_17655 = G__17667;
continue;
}
} else
{var arg__11936__auto___17668 = cljs.core.first.call(null,seq__15438_17662__$1);a__11935__auto__.push(arg__11936__auto___17668);
{
var G__17669 = cljs.core.next.call(null,seq__15438_17662__$1);
var G__17670 = null;
var G__17671 = 0;
var G__17672 = 0;
seq__15438_17652 = G__17669;
chunk__15439_17653 = G__17670;
count__15440_17654 = G__17671;
i__15441_17655 = G__17672;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sub.apply(null,a__11935__auto__);
};
var sub = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sub__delegate.call(this,args__11934__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__17673){
var args__11934__auto__ = cljs.core.seq(arglist__17673);
return sub__delegate(args__11934__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15446_17674 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15447_17675 = null;var count__15448_17676 = 0;var i__15449_17677 = 0;while(true){
if((i__15449_17677 < count__15448_17676))
{var arg__11936__auto___17678 = cljs.core._nth.call(null,chunk__15447_17675,i__15449_17677);a__11935__auto__.push(arg__11936__auto___17678);
{
var G__17679 = seq__15446_17674;
var G__17680 = chunk__15447_17675;
var G__17681 = count__15448_17676;
var G__17682 = (i__15449_17677 + 1);
seq__15446_17674 = G__17679;
chunk__15447_17675 = G__17680;
count__15448_17676 = G__17681;
i__15449_17677 = G__17682;
continue;
}
} else
{var temp__4092__auto___17683 = cljs.core.seq.call(null,seq__15446_17674);if(temp__4092__auto___17683)
{var seq__15446_17684__$1 = temp__4092__auto___17683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15446_17684__$1))
{var c__11077__auto___17685 = cljs.core.chunk_first.call(null,seq__15446_17684__$1);{
var G__17686 = cljs.core.chunk_rest.call(null,seq__15446_17684__$1);
var G__17687 = c__11077__auto___17685;
var G__17688 = cljs.core.count.call(null,c__11077__auto___17685);
var G__17689 = 0;
seq__15446_17674 = G__17686;
chunk__15447_17675 = G__17687;
count__15448_17676 = G__17688;
i__15449_17677 = G__17689;
continue;
}
} else
{var arg__11936__auto___17690 = cljs.core.first.call(null,seq__15446_17684__$1);a__11935__auto__.push(arg__11936__auto___17690);
{
var G__17691 = cljs.core.next.call(null,seq__15446_17684__$1);
var G__17692 = null;
var G__17693 = 0;
var G__17694 = 0;
seq__15446_17674 = G__17691;
chunk__15447_17675 = G__17692;
count__15448_17676 = G__17693;
i__15449_17677 = G__17694;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.summary.apply(null,a__11935__auto__);
};
var summary = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return summary__delegate.call(this,args__11934__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__17695){
var args__11934__auto__ = cljs.core.seq(arglist__17695);
return summary__delegate(args__11934__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15454_17696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15455_17697 = null;var count__15456_17698 = 0;var i__15457_17699 = 0;while(true){
if((i__15457_17699 < count__15456_17698))
{var arg__11936__auto___17700 = cljs.core._nth.call(null,chunk__15455_17697,i__15457_17699);a__11935__auto__.push(arg__11936__auto___17700);
{
var G__17701 = seq__15454_17696;
var G__17702 = chunk__15455_17697;
var G__17703 = count__15456_17698;
var G__17704 = (i__15457_17699 + 1);
seq__15454_17696 = G__17701;
chunk__15455_17697 = G__17702;
count__15456_17698 = G__17703;
i__15457_17699 = G__17704;
continue;
}
} else
{var temp__4092__auto___17705 = cljs.core.seq.call(null,seq__15454_17696);if(temp__4092__auto___17705)
{var seq__15454_17706__$1 = temp__4092__auto___17705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15454_17706__$1))
{var c__11077__auto___17707 = cljs.core.chunk_first.call(null,seq__15454_17706__$1);{
var G__17708 = cljs.core.chunk_rest.call(null,seq__15454_17706__$1);
var G__17709 = c__11077__auto___17707;
var G__17710 = cljs.core.count.call(null,c__11077__auto___17707);
var G__17711 = 0;
seq__15454_17696 = G__17708;
chunk__15455_17697 = G__17709;
count__15456_17698 = G__17710;
i__15457_17699 = G__17711;
continue;
}
} else
{var arg__11936__auto___17712 = cljs.core.first.call(null,seq__15454_17706__$1);a__11935__auto__.push(arg__11936__auto___17712);
{
var G__17713 = cljs.core.next.call(null,seq__15454_17706__$1);
var G__17714 = null;
var G__17715 = 0;
var G__17716 = 0;
seq__15454_17696 = G__17713;
chunk__15455_17697 = G__17714;
count__15456_17698 = G__17715;
i__15457_17699 = G__17716;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.sup.apply(null,a__11935__auto__);
};
var sup = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return sup__delegate.call(this,args__11934__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__17717){
var args__11934__auto__ = cljs.core.seq(arglist__17717);
return sup__delegate(args__11934__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15462_17718 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15463_17719 = null;var count__15464_17720 = 0;var i__15465_17721 = 0;while(true){
if((i__15465_17721 < count__15464_17720))
{var arg__11936__auto___17722 = cljs.core._nth.call(null,chunk__15463_17719,i__15465_17721);a__11935__auto__.push(arg__11936__auto___17722);
{
var G__17723 = seq__15462_17718;
var G__17724 = chunk__15463_17719;
var G__17725 = count__15464_17720;
var G__17726 = (i__15465_17721 + 1);
seq__15462_17718 = G__17723;
chunk__15463_17719 = G__17724;
count__15464_17720 = G__17725;
i__15465_17721 = G__17726;
continue;
}
} else
{var temp__4092__auto___17727 = cljs.core.seq.call(null,seq__15462_17718);if(temp__4092__auto___17727)
{var seq__15462_17728__$1 = temp__4092__auto___17727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15462_17728__$1))
{var c__11077__auto___17729 = cljs.core.chunk_first.call(null,seq__15462_17728__$1);{
var G__17730 = cljs.core.chunk_rest.call(null,seq__15462_17728__$1);
var G__17731 = c__11077__auto___17729;
var G__17732 = cljs.core.count.call(null,c__11077__auto___17729);
var G__17733 = 0;
seq__15462_17718 = G__17730;
chunk__15463_17719 = G__17731;
count__15464_17720 = G__17732;
i__15465_17721 = G__17733;
continue;
}
} else
{var arg__11936__auto___17734 = cljs.core.first.call(null,seq__15462_17728__$1);a__11935__auto__.push(arg__11936__auto___17734);
{
var G__17735 = cljs.core.next.call(null,seq__15462_17728__$1);
var G__17736 = null;
var G__17737 = 0;
var G__17738 = 0;
seq__15462_17718 = G__17735;
chunk__15463_17719 = G__17736;
count__15464_17720 = G__17737;
i__15465_17721 = G__17738;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.table.apply(null,a__11935__auto__);
};
var table = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return table__delegate.call(this,args__11934__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__17739){
var args__11934__auto__ = cljs.core.seq(arglist__17739);
return table__delegate(args__11934__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15470_17740 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15471_17741 = null;var count__15472_17742 = 0;var i__15473_17743 = 0;while(true){
if((i__15473_17743 < count__15472_17742))
{var arg__11936__auto___17744 = cljs.core._nth.call(null,chunk__15471_17741,i__15473_17743);a__11935__auto__.push(arg__11936__auto___17744);
{
var G__17745 = seq__15470_17740;
var G__17746 = chunk__15471_17741;
var G__17747 = count__15472_17742;
var G__17748 = (i__15473_17743 + 1);
seq__15470_17740 = G__17745;
chunk__15471_17741 = G__17746;
count__15472_17742 = G__17747;
i__15473_17743 = G__17748;
continue;
}
} else
{var temp__4092__auto___17749 = cljs.core.seq.call(null,seq__15470_17740);if(temp__4092__auto___17749)
{var seq__15470_17750__$1 = temp__4092__auto___17749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15470_17750__$1))
{var c__11077__auto___17751 = cljs.core.chunk_first.call(null,seq__15470_17750__$1);{
var G__17752 = cljs.core.chunk_rest.call(null,seq__15470_17750__$1);
var G__17753 = c__11077__auto___17751;
var G__17754 = cljs.core.count.call(null,c__11077__auto___17751);
var G__17755 = 0;
seq__15470_17740 = G__17752;
chunk__15471_17741 = G__17753;
count__15472_17742 = G__17754;
i__15473_17743 = G__17755;
continue;
}
} else
{var arg__11936__auto___17756 = cljs.core.first.call(null,seq__15470_17750__$1);a__11935__auto__.push(arg__11936__auto___17756);
{
var G__17757 = cljs.core.next.call(null,seq__15470_17750__$1);
var G__17758 = null;
var G__17759 = 0;
var G__17760 = 0;
seq__15470_17740 = G__17757;
chunk__15471_17741 = G__17758;
count__15472_17742 = G__17759;
i__15473_17743 = G__17760;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tbody.apply(null,a__11935__auto__);
};
var tbody = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tbody__delegate.call(this,args__11934__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__17761){
var args__11934__auto__ = cljs.core.seq(arglist__17761);
return tbody__delegate(args__11934__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15478_17762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15479_17763 = null;var count__15480_17764 = 0;var i__15481_17765 = 0;while(true){
if((i__15481_17765 < count__15480_17764))
{var arg__11936__auto___17766 = cljs.core._nth.call(null,chunk__15479_17763,i__15481_17765);a__11935__auto__.push(arg__11936__auto___17766);
{
var G__17767 = seq__15478_17762;
var G__17768 = chunk__15479_17763;
var G__17769 = count__15480_17764;
var G__17770 = (i__15481_17765 + 1);
seq__15478_17762 = G__17767;
chunk__15479_17763 = G__17768;
count__15480_17764 = G__17769;
i__15481_17765 = G__17770;
continue;
}
} else
{var temp__4092__auto___17771 = cljs.core.seq.call(null,seq__15478_17762);if(temp__4092__auto___17771)
{var seq__15478_17772__$1 = temp__4092__auto___17771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15478_17772__$1))
{var c__11077__auto___17773 = cljs.core.chunk_first.call(null,seq__15478_17772__$1);{
var G__17774 = cljs.core.chunk_rest.call(null,seq__15478_17772__$1);
var G__17775 = c__11077__auto___17773;
var G__17776 = cljs.core.count.call(null,c__11077__auto___17773);
var G__17777 = 0;
seq__15478_17762 = G__17774;
chunk__15479_17763 = G__17775;
count__15480_17764 = G__17776;
i__15481_17765 = G__17777;
continue;
}
} else
{var arg__11936__auto___17778 = cljs.core.first.call(null,seq__15478_17772__$1);a__11935__auto__.push(arg__11936__auto___17778);
{
var G__17779 = cljs.core.next.call(null,seq__15478_17772__$1);
var G__17780 = null;
var G__17781 = 0;
var G__17782 = 0;
seq__15478_17762 = G__17779;
chunk__15479_17763 = G__17780;
count__15480_17764 = G__17781;
i__15481_17765 = G__17782;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.td.apply(null,a__11935__auto__);
};
var td = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return td__delegate.call(this,args__11934__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__17783){
var args__11934__auto__ = cljs.core.seq(arglist__17783);
return td__delegate(args__11934__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15486_17784 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15487_17785 = null;var count__15488_17786 = 0;var i__15489_17787 = 0;while(true){
if((i__15489_17787 < count__15488_17786))
{var arg__11936__auto___17788 = cljs.core._nth.call(null,chunk__15487_17785,i__15489_17787);a__11935__auto__.push(arg__11936__auto___17788);
{
var G__17789 = seq__15486_17784;
var G__17790 = chunk__15487_17785;
var G__17791 = count__15488_17786;
var G__17792 = (i__15489_17787 + 1);
seq__15486_17784 = G__17789;
chunk__15487_17785 = G__17790;
count__15488_17786 = G__17791;
i__15489_17787 = G__17792;
continue;
}
} else
{var temp__4092__auto___17793 = cljs.core.seq.call(null,seq__15486_17784);if(temp__4092__auto___17793)
{var seq__15486_17794__$1 = temp__4092__auto___17793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15486_17794__$1))
{var c__11077__auto___17795 = cljs.core.chunk_first.call(null,seq__15486_17794__$1);{
var G__17796 = cljs.core.chunk_rest.call(null,seq__15486_17794__$1);
var G__17797 = c__11077__auto___17795;
var G__17798 = cljs.core.count.call(null,c__11077__auto___17795);
var G__17799 = 0;
seq__15486_17784 = G__17796;
chunk__15487_17785 = G__17797;
count__15488_17786 = G__17798;
i__15489_17787 = G__17799;
continue;
}
} else
{var arg__11936__auto___17800 = cljs.core.first.call(null,seq__15486_17794__$1);a__11935__auto__.push(arg__11936__auto___17800);
{
var G__17801 = cljs.core.next.call(null,seq__15486_17794__$1);
var G__17802 = null;
var G__17803 = 0;
var G__17804 = 0;
seq__15486_17784 = G__17801;
chunk__15487_17785 = G__17802;
count__15488_17786 = G__17803;
i__15489_17787 = G__17804;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.textarea.apply(null,a__11935__auto__);
};
var textarea = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return textarea__delegate.call(this,args__11934__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__17805){
var args__11934__auto__ = cljs.core.seq(arglist__17805);
return textarea__delegate(args__11934__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15494_17806 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15495_17807 = null;var count__15496_17808 = 0;var i__15497_17809 = 0;while(true){
if((i__15497_17809 < count__15496_17808))
{var arg__11936__auto___17810 = cljs.core._nth.call(null,chunk__15495_17807,i__15497_17809);a__11935__auto__.push(arg__11936__auto___17810);
{
var G__17811 = seq__15494_17806;
var G__17812 = chunk__15495_17807;
var G__17813 = count__15496_17808;
var G__17814 = (i__15497_17809 + 1);
seq__15494_17806 = G__17811;
chunk__15495_17807 = G__17812;
count__15496_17808 = G__17813;
i__15497_17809 = G__17814;
continue;
}
} else
{var temp__4092__auto___17815 = cljs.core.seq.call(null,seq__15494_17806);if(temp__4092__auto___17815)
{var seq__15494_17816__$1 = temp__4092__auto___17815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15494_17816__$1))
{var c__11077__auto___17817 = cljs.core.chunk_first.call(null,seq__15494_17816__$1);{
var G__17818 = cljs.core.chunk_rest.call(null,seq__15494_17816__$1);
var G__17819 = c__11077__auto___17817;
var G__17820 = cljs.core.count.call(null,c__11077__auto___17817);
var G__17821 = 0;
seq__15494_17806 = G__17818;
chunk__15495_17807 = G__17819;
count__15496_17808 = G__17820;
i__15497_17809 = G__17821;
continue;
}
} else
{var arg__11936__auto___17822 = cljs.core.first.call(null,seq__15494_17816__$1);a__11935__auto__.push(arg__11936__auto___17822);
{
var G__17823 = cljs.core.next.call(null,seq__15494_17816__$1);
var G__17824 = null;
var G__17825 = 0;
var G__17826 = 0;
seq__15494_17806 = G__17823;
chunk__15495_17807 = G__17824;
count__15496_17808 = G__17825;
i__15497_17809 = G__17826;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tfoot.apply(null,a__11935__auto__);
};
var tfoot = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tfoot__delegate.call(this,args__11934__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__17827){
var args__11934__auto__ = cljs.core.seq(arglist__17827);
return tfoot__delegate(args__11934__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15502_17828 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15503_17829 = null;var count__15504_17830 = 0;var i__15505_17831 = 0;while(true){
if((i__15505_17831 < count__15504_17830))
{var arg__11936__auto___17832 = cljs.core._nth.call(null,chunk__15503_17829,i__15505_17831);a__11935__auto__.push(arg__11936__auto___17832);
{
var G__17833 = seq__15502_17828;
var G__17834 = chunk__15503_17829;
var G__17835 = count__15504_17830;
var G__17836 = (i__15505_17831 + 1);
seq__15502_17828 = G__17833;
chunk__15503_17829 = G__17834;
count__15504_17830 = G__17835;
i__15505_17831 = G__17836;
continue;
}
} else
{var temp__4092__auto___17837 = cljs.core.seq.call(null,seq__15502_17828);if(temp__4092__auto___17837)
{var seq__15502_17838__$1 = temp__4092__auto___17837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15502_17838__$1))
{var c__11077__auto___17839 = cljs.core.chunk_first.call(null,seq__15502_17838__$1);{
var G__17840 = cljs.core.chunk_rest.call(null,seq__15502_17838__$1);
var G__17841 = c__11077__auto___17839;
var G__17842 = cljs.core.count.call(null,c__11077__auto___17839);
var G__17843 = 0;
seq__15502_17828 = G__17840;
chunk__15503_17829 = G__17841;
count__15504_17830 = G__17842;
i__15505_17831 = G__17843;
continue;
}
} else
{var arg__11936__auto___17844 = cljs.core.first.call(null,seq__15502_17838__$1);a__11935__auto__.push(arg__11936__auto___17844);
{
var G__17845 = cljs.core.next.call(null,seq__15502_17838__$1);
var G__17846 = null;
var G__17847 = 0;
var G__17848 = 0;
seq__15502_17828 = G__17845;
chunk__15503_17829 = G__17846;
count__15504_17830 = G__17847;
i__15505_17831 = G__17848;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.th.apply(null,a__11935__auto__);
};
var th = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return th__delegate.call(this,args__11934__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__17849){
var args__11934__auto__ = cljs.core.seq(arglist__17849);
return th__delegate(args__11934__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15510_17850 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15511_17851 = null;var count__15512_17852 = 0;var i__15513_17853 = 0;while(true){
if((i__15513_17853 < count__15512_17852))
{var arg__11936__auto___17854 = cljs.core._nth.call(null,chunk__15511_17851,i__15513_17853);a__11935__auto__.push(arg__11936__auto___17854);
{
var G__17855 = seq__15510_17850;
var G__17856 = chunk__15511_17851;
var G__17857 = count__15512_17852;
var G__17858 = (i__15513_17853 + 1);
seq__15510_17850 = G__17855;
chunk__15511_17851 = G__17856;
count__15512_17852 = G__17857;
i__15513_17853 = G__17858;
continue;
}
} else
{var temp__4092__auto___17859 = cljs.core.seq.call(null,seq__15510_17850);if(temp__4092__auto___17859)
{var seq__15510_17860__$1 = temp__4092__auto___17859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15510_17860__$1))
{var c__11077__auto___17861 = cljs.core.chunk_first.call(null,seq__15510_17860__$1);{
var G__17862 = cljs.core.chunk_rest.call(null,seq__15510_17860__$1);
var G__17863 = c__11077__auto___17861;
var G__17864 = cljs.core.count.call(null,c__11077__auto___17861);
var G__17865 = 0;
seq__15510_17850 = G__17862;
chunk__15511_17851 = G__17863;
count__15512_17852 = G__17864;
i__15513_17853 = G__17865;
continue;
}
} else
{var arg__11936__auto___17866 = cljs.core.first.call(null,seq__15510_17860__$1);a__11935__auto__.push(arg__11936__auto___17866);
{
var G__17867 = cljs.core.next.call(null,seq__15510_17860__$1);
var G__17868 = null;
var G__17869 = 0;
var G__17870 = 0;
seq__15510_17850 = G__17867;
chunk__15511_17851 = G__17868;
count__15512_17852 = G__17869;
i__15513_17853 = G__17870;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.thead.apply(null,a__11935__auto__);
};
var thead = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return thead__delegate.call(this,args__11934__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__17871){
var args__11934__auto__ = cljs.core.seq(arglist__17871);
return thead__delegate(args__11934__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15518_17872 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15519_17873 = null;var count__15520_17874 = 0;var i__15521_17875 = 0;while(true){
if((i__15521_17875 < count__15520_17874))
{var arg__11936__auto___17876 = cljs.core._nth.call(null,chunk__15519_17873,i__15521_17875);a__11935__auto__.push(arg__11936__auto___17876);
{
var G__17877 = seq__15518_17872;
var G__17878 = chunk__15519_17873;
var G__17879 = count__15520_17874;
var G__17880 = (i__15521_17875 + 1);
seq__15518_17872 = G__17877;
chunk__15519_17873 = G__17878;
count__15520_17874 = G__17879;
i__15521_17875 = G__17880;
continue;
}
} else
{var temp__4092__auto___17881 = cljs.core.seq.call(null,seq__15518_17872);if(temp__4092__auto___17881)
{var seq__15518_17882__$1 = temp__4092__auto___17881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15518_17882__$1))
{var c__11077__auto___17883 = cljs.core.chunk_first.call(null,seq__15518_17882__$1);{
var G__17884 = cljs.core.chunk_rest.call(null,seq__15518_17882__$1);
var G__17885 = c__11077__auto___17883;
var G__17886 = cljs.core.count.call(null,c__11077__auto___17883);
var G__17887 = 0;
seq__15518_17872 = G__17884;
chunk__15519_17873 = G__17885;
count__15520_17874 = G__17886;
i__15521_17875 = G__17887;
continue;
}
} else
{var arg__11936__auto___17888 = cljs.core.first.call(null,seq__15518_17882__$1);a__11935__auto__.push(arg__11936__auto___17888);
{
var G__17889 = cljs.core.next.call(null,seq__15518_17882__$1);
var G__17890 = null;
var G__17891 = 0;
var G__17892 = 0;
seq__15518_17872 = G__17889;
chunk__15519_17873 = G__17890;
count__15520_17874 = G__17891;
i__15521_17875 = G__17892;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.time.apply(null,a__11935__auto__);
};
var time = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return time__delegate.call(this,args__11934__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__17893){
var args__11934__auto__ = cljs.core.seq(arglist__17893);
return time__delegate(args__11934__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15526_17894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15527_17895 = null;var count__15528_17896 = 0;var i__15529_17897 = 0;while(true){
if((i__15529_17897 < count__15528_17896))
{var arg__11936__auto___17898 = cljs.core._nth.call(null,chunk__15527_17895,i__15529_17897);a__11935__auto__.push(arg__11936__auto___17898);
{
var G__17899 = seq__15526_17894;
var G__17900 = chunk__15527_17895;
var G__17901 = count__15528_17896;
var G__17902 = (i__15529_17897 + 1);
seq__15526_17894 = G__17899;
chunk__15527_17895 = G__17900;
count__15528_17896 = G__17901;
i__15529_17897 = G__17902;
continue;
}
} else
{var temp__4092__auto___17903 = cljs.core.seq.call(null,seq__15526_17894);if(temp__4092__auto___17903)
{var seq__15526_17904__$1 = temp__4092__auto___17903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15526_17904__$1))
{var c__11077__auto___17905 = cljs.core.chunk_first.call(null,seq__15526_17904__$1);{
var G__17906 = cljs.core.chunk_rest.call(null,seq__15526_17904__$1);
var G__17907 = c__11077__auto___17905;
var G__17908 = cljs.core.count.call(null,c__11077__auto___17905);
var G__17909 = 0;
seq__15526_17894 = G__17906;
chunk__15527_17895 = G__17907;
count__15528_17896 = G__17908;
i__15529_17897 = G__17909;
continue;
}
} else
{var arg__11936__auto___17910 = cljs.core.first.call(null,seq__15526_17904__$1);a__11935__auto__.push(arg__11936__auto___17910);
{
var G__17911 = cljs.core.next.call(null,seq__15526_17904__$1);
var G__17912 = null;
var G__17913 = 0;
var G__17914 = 0;
seq__15526_17894 = G__17911;
chunk__15527_17895 = G__17912;
count__15528_17896 = G__17913;
i__15529_17897 = G__17914;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.title.apply(null,a__11935__auto__);
};
var title = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return title__delegate.call(this,args__11934__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__17915){
var args__11934__auto__ = cljs.core.seq(arglist__17915);
return title__delegate(args__11934__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15534_17916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15535_17917 = null;var count__15536_17918 = 0;var i__15537_17919 = 0;while(true){
if((i__15537_17919 < count__15536_17918))
{var arg__11936__auto___17920 = cljs.core._nth.call(null,chunk__15535_17917,i__15537_17919);a__11935__auto__.push(arg__11936__auto___17920);
{
var G__17921 = seq__15534_17916;
var G__17922 = chunk__15535_17917;
var G__17923 = count__15536_17918;
var G__17924 = (i__15537_17919 + 1);
seq__15534_17916 = G__17921;
chunk__15535_17917 = G__17922;
count__15536_17918 = G__17923;
i__15537_17919 = G__17924;
continue;
}
} else
{var temp__4092__auto___17925 = cljs.core.seq.call(null,seq__15534_17916);if(temp__4092__auto___17925)
{var seq__15534_17926__$1 = temp__4092__auto___17925;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15534_17926__$1))
{var c__11077__auto___17927 = cljs.core.chunk_first.call(null,seq__15534_17926__$1);{
var G__17928 = cljs.core.chunk_rest.call(null,seq__15534_17926__$1);
var G__17929 = c__11077__auto___17927;
var G__17930 = cljs.core.count.call(null,c__11077__auto___17927);
var G__17931 = 0;
seq__15534_17916 = G__17928;
chunk__15535_17917 = G__17929;
count__15536_17918 = G__17930;
i__15537_17919 = G__17931;
continue;
}
} else
{var arg__11936__auto___17932 = cljs.core.first.call(null,seq__15534_17926__$1);a__11935__auto__.push(arg__11936__auto___17932);
{
var G__17933 = cljs.core.next.call(null,seq__15534_17926__$1);
var G__17934 = null;
var G__17935 = 0;
var G__17936 = 0;
seq__15534_17916 = G__17933;
chunk__15535_17917 = G__17934;
count__15536_17918 = G__17935;
i__15537_17919 = G__17936;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.tr.apply(null,a__11935__auto__);
};
var tr = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return tr__delegate.call(this,args__11934__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__17937){
var args__11934__auto__ = cljs.core.seq(arglist__17937);
return tr__delegate(args__11934__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15542_17938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15543_17939 = null;var count__15544_17940 = 0;var i__15545_17941 = 0;while(true){
if((i__15545_17941 < count__15544_17940))
{var arg__11936__auto___17942 = cljs.core._nth.call(null,chunk__15543_17939,i__15545_17941);a__11935__auto__.push(arg__11936__auto___17942);
{
var G__17943 = seq__15542_17938;
var G__17944 = chunk__15543_17939;
var G__17945 = count__15544_17940;
var G__17946 = (i__15545_17941 + 1);
seq__15542_17938 = G__17943;
chunk__15543_17939 = G__17944;
count__15544_17940 = G__17945;
i__15545_17941 = G__17946;
continue;
}
} else
{var temp__4092__auto___17947 = cljs.core.seq.call(null,seq__15542_17938);if(temp__4092__auto___17947)
{var seq__15542_17948__$1 = temp__4092__auto___17947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15542_17948__$1))
{var c__11077__auto___17949 = cljs.core.chunk_first.call(null,seq__15542_17948__$1);{
var G__17950 = cljs.core.chunk_rest.call(null,seq__15542_17948__$1);
var G__17951 = c__11077__auto___17949;
var G__17952 = cljs.core.count.call(null,c__11077__auto___17949);
var G__17953 = 0;
seq__15542_17938 = G__17950;
chunk__15543_17939 = G__17951;
count__15544_17940 = G__17952;
i__15545_17941 = G__17953;
continue;
}
} else
{var arg__11936__auto___17954 = cljs.core.first.call(null,seq__15542_17948__$1);a__11935__auto__.push(arg__11936__auto___17954);
{
var G__17955 = cljs.core.next.call(null,seq__15542_17948__$1);
var G__17956 = null;
var G__17957 = 0;
var G__17958 = 0;
seq__15542_17938 = G__17955;
chunk__15543_17939 = G__17956;
count__15544_17940 = G__17957;
i__15545_17941 = G__17958;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.track.apply(null,a__11935__auto__);
};
var track = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return track__delegate.call(this,args__11934__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__17959){
var args__11934__auto__ = cljs.core.seq(arglist__17959);
return track__delegate(args__11934__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15550_17960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15551_17961 = null;var count__15552_17962 = 0;var i__15553_17963 = 0;while(true){
if((i__15553_17963 < count__15552_17962))
{var arg__11936__auto___17964 = cljs.core._nth.call(null,chunk__15551_17961,i__15553_17963);a__11935__auto__.push(arg__11936__auto___17964);
{
var G__17965 = seq__15550_17960;
var G__17966 = chunk__15551_17961;
var G__17967 = count__15552_17962;
var G__17968 = (i__15553_17963 + 1);
seq__15550_17960 = G__17965;
chunk__15551_17961 = G__17966;
count__15552_17962 = G__17967;
i__15553_17963 = G__17968;
continue;
}
} else
{var temp__4092__auto___17969 = cljs.core.seq.call(null,seq__15550_17960);if(temp__4092__auto___17969)
{var seq__15550_17970__$1 = temp__4092__auto___17969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15550_17970__$1))
{var c__11077__auto___17971 = cljs.core.chunk_first.call(null,seq__15550_17970__$1);{
var G__17972 = cljs.core.chunk_rest.call(null,seq__15550_17970__$1);
var G__17973 = c__11077__auto___17971;
var G__17974 = cljs.core.count.call(null,c__11077__auto___17971);
var G__17975 = 0;
seq__15550_17960 = G__17972;
chunk__15551_17961 = G__17973;
count__15552_17962 = G__17974;
i__15553_17963 = G__17975;
continue;
}
} else
{var arg__11936__auto___17976 = cljs.core.first.call(null,seq__15550_17970__$1);a__11935__auto__.push(arg__11936__auto___17976);
{
var G__17977 = cljs.core.next.call(null,seq__15550_17970__$1);
var G__17978 = null;
var G__17979 = 0;
var G__17980 = 0;
seq__15550_17960 = G__17977;
chunk__15551_17961 = G__17978;
count__15552_17962 = G__17979;
i__15553_17963 = G__17980;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.u.apply(null,a__11935__auto__);
};
var u = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return u__delegate.call(this,args__11934__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__17981){
var args__11934__auto__ = cljs.core.seq(arglist__17981);
return u__delegate(args__11934__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15558_17982 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15559_17983 = null;var count__15560_17984 = 0;var i__15561_17985 = 0;while(true){
if((i__15561_17985 < count__15560_17984))
{var arg__11936__auto___17986 = cljs.core._nth.call(null,chunk__15559_17983,i__15561_17985);a__11935__auto__.push(arg__11936__auto___17986);
{
var G__17987 = seq__15558_17982;
var G__17988 = chunk__15559_17983;
var G__17989 = count__15560_17984;
var G__17990 = (i__15561_17985 + 1);
seq__15558_17982 = G__17987;
chunk__15559_17983 = G__17988;
count__15560_17984 = G__17989;
i__15561_17985 = G__17990;
continue;
}
} else
{var temp__4092__auto___17991 = cljs.core.seq.call(null,seq__15558_17982);if(temp__4092__auto___17991)
{var seq__15558_17992__$1 = temp__4092__auto___17991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15558_17992__$1))
{var c__11077__auto___17993 = cljs.core.chunk_first.call(null,seq__15558_17992__$1);{
var G__17994 = cljs.core.chunk_rest.call(null,seq__15558_17992__$1);
var G__17995 = c__11077__auto___17993;
var G__17996 = cljs.core.count.call(null,c__11077__auto___17993);
var G__17997 = 0;
seq__15558_17982 = G__17994;
chunk__15559_17983 = G__17995;
count__15560_17984 = G__17996;
i__15561_17985 = G__17997;
continue;
}
} else
{var arg__11936__auto___17998 = cljs.core.first.call(null,seq__15558_17992__$1);a__11935__auto__.push(arg__11936__auto___17998);
{
var G__17999 = cljs.core.next.call(null,seq__15558_17992__$1);
var G__18000 = null;
var G__18001 = 0;
var G__18002 = 0;
seq__15558_17982 = G__17999;
chunk__15559_17983 = G__18000;
count__15560_17984 = G__18001;
i__15561_17985 = G__18002;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.ul.apply(null,a__11935__auto__);
};
var ul = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return ul__delegate.call(this,args__11934__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__18003){
var args__11934__auto__ = cljs.core.seq(arglist__18003);
return ul__delegate(args__11934__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15566_18004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15567_18005 = null;var count__15568_18006 = 0;var i__15569_18007 = 0;while(true){
if((i__15569_18007 < count__15568_18006))
{var arg__11936__auto___18008 = cljs.core._nth.call(null,chunk__15567_18005,i__15569_18007);a__11935__auto__.push(arg__11936__auto___18008);
{
var G__18009 = seq__15566_18004;
var G__18010 = chunk__15567_18005;
var G__18011 = count__15568_18006;
var G__18012 = (i__15569_18007 + 1);
seq__15566_18004 = G__18009;
chunk__15567_18005 = G__18010;
count__15568_18006 = G__18011;
i__15569_18007 = G__18012;
continue;
}
} else
{var temp__4092__auto___18013 = cljs.core.seq.call(null,seq__15566_18004);if(temp__4092__auto___18013)
{var seq__15566_18014__$1 = temp__4092__auto___18013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15566_18014__$1))
{var c__11077__auto___18015 = cljs.core.chunk_first.call(null,seq__15566_18014__$1);{
var G__18016 = cljs.core.chunk_rest.call(null,seq__15566_18014__$1);
var G__18017 = c__11077__auto___18015;
var G__18018 = cljs.core.count.call(null,c__11077__auto___18015);
var G__18019 = 0;
seq__15566_18004 = G__18016;
chunk__15567_18005 = G__18017;
count__15568_18006 = G__18018;
i__15569_18007 = G__18019;
continue;
}
} else
{var arg__11936__auto___18020 = cljs.core.first.call(null,seq__15566_18014__$1);a__11935__auto__.push(arg__11936__auto___18020);
{
var G__18021 = cljs.core.next.call(null,seq__15566_18014__$1);
var G__18022 = null;
var G__18023 = 0;
var G__18024 = 0;
seq__15566_18004 = G__18021;
chunk__15567_18005 = G__18022;
count__15568_18006 = G__18023;
i__15569_18007 = G__18024;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.var$.apply(null,a__11935__auto__);
};
var var$ = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return var$__delegate.call(this,args__11934__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__18025){
var args__11934__auto__ = cljs.core.seq(arglist__18025);
return var$__delegate(args__11934__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15574_18026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15575_18027 = null;var count__15576_18028 = 0;var i__15577_18029 = 0;while(true){
if((i__15577_18029 < count__15576_18028))
{var arg__11936__auto___18030 = cljs.core._nth.call(null,chunk__15575_18027,i__15577_18029);a__11935__auto__.push(arg__11936__auto___18030);
{
var G__18031 = seq__15574_18026;
var G__18032 = chunk__15575_18027;
var G__18033 = count__15576_18028;
var G__18034 = (i__15577_18029 + 1);
seq__15574_18026 = G__18031;
chunk__15575_18027 = G__18032;
count__15576_18028 = G__18033;
i__15577_18029 = G__18034;
continue;
}
} else
{var temp__4092__auto___18035 = cljs.core.seq.call(null,seq__15574_18026);if(temp__4092__auto___18035)
{var seq__15574_18036__$1 = temp__4092__auto___18035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15574_18036__$1))
{var c__11077__auto___18037 = cljs.core.chunk_first.call(null,seq__15574_18036__$1);{
var G__18038 = cljs.core.chunk_rest.call(null,seq__15574_18036__$1);
var G__18039 = c__11077__auto___18037;
var G__18040 = cljs.core.count.call(null,c__11077__auto___18037);
var G__18041 = 0;
seq__15574_18026 = G__18038;
chunk__15575_18027 = G__18039;
count__15576_18028 = G__18040;
i__15577_18029 = G__18041;
continue;
}
} else
{var arg__11936__auto___18042 = cljs.core.first.call(null,seq__15574_18036__$1);a__11935__auto__.push(arg__11936__auto___18042);
{
var G__18043 = cljs.core.next.call(null,seq__15574_18036__$1);
var G__18044 = null;
var G__18045 = 0;
var G__18046 = 0;
seq__15574_18026 = G__18043;
chunk__15575_18027 = G__18044;
count__15576_18028 = G__18045;
i__15577_18029 = G__18046;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.video.apply(null,a__11935__auto__);
};
var video = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return video__delegate.call(this,args__11934__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__18047){
var args__11934__auto__ = cljs.core.seq(arglist__18047);
return video__delegate(args__11934__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15582_18048 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15583_18049 = null;var count__15584_18050 = 0;var i__15585_18051 = 0;while(true){
if((i__15585_18051 < count__15584_18050))
{var arg__11936__auto___18052 = cljs.core._nth.call(null,chunk__15583_18049,i__15585_18051);a__11935__auto__.push(arg__11936__auto___18052);
{
var G__18053 = seq__15582_18048;
var G__18054 = chunk__15583_18049;
var G__18055 = count__15584_18050;
var G__18056 = (i__15585_18051 + 1);
seq__15582_18048 = G__18053;
chunk__15583_18049 = G__18054;
count__15584_18050 = G__18055;
i__15585_18051 = G__18056;
continue;
}
} else
{var temp__4092__auto___18057 = cljs.core.seq.call(null,seq__15582_18048);if(temp__4092__auto___18057)
{var seq__15582_18058__$1 = temp__4092__auto___18057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15582_18058__$1))
{var c__11077__auto___18059 = cljs.core.chunk_first.call(null,seq__15582_18058__$1);{
var G__18060 = cljs.core.chunk_rest.call(null,seq__15582_18058__$1);
var G__18061 = c__11077__auto___18059;
var G__18062 = cljs.core.count.call(null,c__11077__auto___18059);
var G__18063 = 0;
seq__15582_18048 = G__18060;
chunk__15583_18049 = G__18061;
count__15584_18050 = G__18062;
i__15585_18051 = G__18063;
continue;
}
} else
{var arg__11936__auto___18064 = cljs.core.first.call(null,seq__15582_18058__$1);a__11935__auto__.push(arg__11936__auto___18064);
{
var G__18065 = cljs.core.next.call(null,seq__15582_18058__$1);
var G__18066 = null;
var G__18067 = 0;
var G__18068 = 0;
seq__15582_18048 = G__18065;
chunk__15583_18049 = G__18066;
count__15584_18050 = G__18067;
i__15585_18051 = G__18068;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.wbr.apply(null,a__11935__auto__);
};
var wbr = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return wbr__delegate.call(this,args__11934__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__18069){
var args__11934__auto__ = cljs.core.seq(arglist__18069);
return wbr__delegate(args__11934__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15590_18070 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15591_18071 = null;var count__15592_18072 = 0;var i__15593_18073 = 0;while(true){
if((i__15593_18073 < count__15592_18072))
{var arg__11936__auto___18074 = cljs.core._nth.call(null,chunk__15591_18071,i__15593_18073);a__11935__auto__.push(arg__11936__auto___18074);
{
var G__18075 = seq__15590_18070;
var G__18076 = chunk__15591_18071;
var G__18077 = count__15592_18072;
var G__18078 = (i__15593_18073 + 1);
seq__15590_18070 = G__18075;
chunk__15591_18071 = G__18076;
count__15592_18072 = G__18077;
i__15593_18073 = G__18078;
continue;
}
} else
{var temp__4092__auto___18079 = cljs.core.seq.call(null,seq__15590_18070);if(temp__4092__auto___18079)
{var seq__15590_18080__$1 = temp__4092__auto___18079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15590_18080__$1))
{var c__11077__auto___18081 = cljs.core.chunk_first.call(null,seq__15590_18080__$1);{
var G__18082 = cljs.core.chunk_rest.call(null,seq__15590_18080__$1);
var G__18083 = c__11077__auto___18081;
var G__18084 = cljs.core.count.call(null,c__11077__auto___18081);
var G__18085 = 0;
seq__15590_18070 = G__18082;
chunk__15591_18071 = G__18083;
count__15592_18072 = G__18084;
i__15593_18073 = G__18085;
continue;
}
} else
{var arg__11936__auto___18086 = cljs.core.first.call(null,seq__15590_18080__$1);a__11935__auto__.push(arg__11936__auto___18086);
{
var G__18087 = cljs.core.next.call(null,seq__15590_18080__$1);
var G__18088 = null;
var G__18089 = 0;
var G__18090 = 0;
seq__15590_18070 = G__18087;
chunk__15591_18071 = G__18088;
count__15592_18072 = G__18089;
i__15593_18073 = G__18090;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.circle.apply(null,a__11935__auto__);
};
var circle = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return circle__delegate.call(this,args__11934__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__18091){
var args__11934__auto__ = cljs.core.seq(arglist__18091);
return circle__delegate(args__11934__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15598_18092 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15599_18093 = null;var count__15600_18094 = 0;var i__15601_18095 = 0;while(true){
if((i__15601_18095 < count__15600_18094))
{var arg__11936__auto___18096 = cljs.core._nth.call(null,chunk__15599_18093,i__15601_18095);a__11935__auto__.push(arg__11936__auto___18096);
{
var G__18097 = seq__15598_18092;
var G__18098 = chunk__15599_18093;
var G__18099 = count__15600_18094;
var G__18100 = (i__15601_18095 + 1);
seq__15598_18092 = G__18097;
chunk__15599_18093 = G__18098;
count__15600_18094 = G__18099;
i__15601_18095 = G__18100;
continue;
}
} else
{var temp__4092__auto___18101 = cljs.core.seq.call(null,seq__15598_18092);if(temp__4092__auto___18101)
{var seq__15598_18102__$1 = temp__4092__auto___18101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15598_18102__$1))
{var c__11077__auto___18103 = cljs.core.chunk_first.call(null,seq__15598_18102__$1);{
var G__18104 = cljs.core.chunk_rest.call(null,seq__15598_18102__$1);
var G__18105 = c__11077__auto___18103;
var G__18106 = cljs.core.count.call(null,c__11077__auto___18103);
var G__18107 = 0;
seq__15598_18092 = G__18104;
chunk__15599_18093 = G__18105;
count__15600_18094 = G__18106;
i__15601_18095 = G__18107;
continue;
}
} else
{var arg__11936__auto___18108 = cljs.core.first.call(null,seq__15598_18102__$1);a__11935__auto__.push(arg__11936__auto___18108);
{
var G__18109 = cljs.core.next.call(null,seq__15598_18102__$1);
var G__18110 = null;
var G__18111 = 0;
var G__18112 = 0;
seq__15598_18092 = G__18109;
chunk__15599_18093 = G__18110;
count__15600_18094 = G__18111;
i__15601_18095 = G__18112;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.g.apply(null,a__11935__auto__);
};
var g = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return g__delegate.call(this,args__11934__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__18113){
var args__11934__auto__ = cljs.core.seq(arglist__18113);
return g__delegate(args__11934__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15606_18114 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15607_18115 = null;var count__15608_18116 = 0;var i__15609_18117 = 0;while(true){
if((i__15609_18117 < count__15608_18116))
{var arg__11936__auto___18118 = cljs.core._nth.call(null,chunk__15607_18115,i__15609_18117);a__11935__auto__.push(arg__11936__auto___18118);
{
var G__18119 = seq__15606_18114;
var G__18120 = chunk__15607_18115;
var G__18121 = count__15608_18116;
var G__18122 = (i__15609_18117 + 1);
seq__15606_18114 = G__18119;
chunk__15607_18115 = G__18120;
count__15608_18116 = G__18121;
i__15609_18117 = G__18122;
continue;
}
} else
{var temp__4092__auto___18123 = cljs.core.seq.call(null,seq__15606_18114);if(temp__4092__auto___18123)
{var seq__15606_18124__$1 = temp__4092__auto___18123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15606_18124__$1))
{var c__11077__auto___18125 = cljs.core.chunk_first.call(null,seq__15606_18124__$1);{
var G__18126 = cljs.core.chunk_rest.call(null,seq__15606_18124__$1);
var G__18127 = c__11077__auto___18125;
var G__18128 = cljs.core.count.call(null,c__11077__auto___18125);
var G__18129 = 0;
seq__15606_18114 = G__18126;
chunk__15607_18115 = G__18127;
count__15608_18116 = G__18128;
i__15609_18117 = G__18129;
continue;
}
} else
{var arg__11936__auto___18130 = cljs.core.first.call(null,seq__15606_18124__$1);a__11935__auto__.push(arg__11936__auto___18130);
{
var G__18131 = cljs.core.next.call(null,seq__15606_18124__$1);
var G__18132 = null;
var G__18133 = 0;
var G__18134 = 0;
seq__15606_18114 = G__18131;
chunk__15607_18115 = G__18132;
count__15608_18116 = G__18133;
i__15609_18117 = G__18134;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.line.apply(null,a__11935__auto__);
};
var line = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return line__delegate.call(this,args__11934__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__18135){
var args__11934__auto__ = cljs.core.seq(arglist__18135);
return line__delegate(args__11934__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15614_18136 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15615_18137 = null;var count__15616_18138 = 0;var i__15617_18139 = 0;while(true){
if((i__15617_18139 < count__15616_18138))
{var arg__11936__auto___18140 = cljs.core._nth.call(null,chunk__15615_18137,i__15617_18139);a__11935__auto__.push(arg__11936__auto___18140);
{
var G__18141 = seq__15614_18136;
var G__18142 = chunk__15615_18137;
var G__18143 = count__15616_18138;
var G__18144 = (i__15617_18139 + 1);
seq__15614_18136 = G__18141;
chunk__15615_18137 = G__18142;
count__15616_18138 = G__18143;
i__15617_18139 = G__18144;
continue;
}
} else
{var temp__4092__auto___18145 = cljs.core.seq.call(null,seq__15614_18136);if(temp__4092__auto___18145)
{var seq__15614_18146__$1 = temp__4092__auto___18145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15614_18146__$1))
{var c__11077__auto___18147 = cljs.core.chunk_first.call(null,seq__15614_18146__$1);{
var G__18148 = cljs.core.chunk_rest.call(null,seq__15614_18146__$1);
var G__18149 = c__11077__auto___18147;
var G__18150 = cljs.core.count.call(null,c__11077__auto___18147);
var G__18151 = 0;
seq__15614_18136 = G__18148;
chunk__15615_18137 = G__18149;
count__15616_18138 = G__18150;
i__15617_18139 = G__18151;
continue;
}
} else
{var arg__11936__auto___18152 = cljs.core.first.call(null,seq__15614_18146__$1);a__11935__auto__.push(arg__11936__auto___18152);
{
var G__18153 = cljs.core.next.call(null,seq__15614_18146__$1);
var G__18154 = null;
var G__18155 = 0;
var G__18156 = 0;
seq__15614_18136 = G__18153;
chunk__15615_18137 = G__18154;
count__15616_18138 = G__18155;
i__15617_18139 = G__18156;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.path.apply(null,a__11935__auto__);
};
var path = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return path__delegate.call(this,args__11934__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__18157){
var args__11934__auto__ = cljs.core.seq(arglist__18157);
return path__delegate(args__11934__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15622_18158 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15623_18159 = null;var count__15624_18160 = 0;var i__15625_18161 = 0;while(true){
if((i__15625_18161 < count__15624_18160))
{var arg__11936__auto___18162 = cljs.core._nth.call(null,chunk__15623_18159,i__15625_18161);a__11935__auto__.push(arg__11936__auto___18162);
{
var G__18163 = seq__15622_18158;
var G__18164 = chunk__15623_18159;
var G__18165 = count__15624_18160;
var G__18166 = (i__15625_18161 + 1);
seq__15622_18158 = G__18163;
chunk__15623_18159 = G__18164;
count__15624_18160 = G__18165;
i__15625_18161 = G__18166;
continue;
}
} else
{var temp__4092__auto___18167 = cljs.core.seq.call(null,seq__15622_18158);if(temp__4092__auto___18167)
{var seq__15622_18168__$1 = temp__4092__auto___18167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15622_18168__$1))
{var c__11077__auto___18169 = cljs.core.chunk_first.call(null,seq__15622_18168__$1);{
var G__18170 = cljs.core.chunk_rest.call(null,seq__15622_18168__$1);
var G__18171 = c__11077__auto___18169;
var G__18172 = cljs.core.count.call(null,c__11077__auto___18169);
var G__18173 = 0;
seq__15622_18158 = G__18170;
chunk__15623_18159 = G__18171;
count__15624_18160 = G__18172;
i__15625_18161 = G__18173;
continue;
}
} else
{var arg__11936__auto___18174 = cljs.core.first.call(null,seq__15622_18168__$1);a__11935__auto__.push(arg__11936__auto___18174);
{
var G__18175 = cljs.core.next.call(null,seq__15622_18168__$1);
var G__18176 = null;
var G__18177 = 0;
var G__18178 = 0;
seq__15622_18158 = G__18175;
chunk__15623_18159 = G__18176;
count__15624_18160 = G__18177;
i__15625_18161 = G__18178;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polygon.apply(null,a__11935__auto__);
};
var polygon = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polygon__delegate.call(this,args__11934__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__18179){
var args__11934__auto__ = cljs.core.seq(arglist__18179);
return polygon__delegate(args__11934__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15630_18180 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15631_18181 = null;var count__15632_18182 = 0;var i__15633_18183 = 0;while(true){
if((i__15633_18183 < count__15632_18182))
{var arg__11936__auto___18184 = cljs.core._nth.call(null,chunk__15631_18181,i__15633_18183);a__11935__auto__.push(arg__11936__auto___18184);
{
var G__18185 = seq__15630_18180;
var G__18186 = chunk__15631_18181;
var G__18187 = count__15632_18182;
var G__18188 = (i__15633_18183 + 1);
seq__15630_18180 = G__18185;
chunk__15631_18181 = G__18186;
count__15632_18182 = G__18187;
i__15633_18183 = G__18188;
continue;
}
} else
{var temp__4092__auto___18189 = cljs.core.seq.call(null,seq__15630_18180);if(temp__4092__auto___18189)
{var seq__15630_18190__$1 = temp__4092__auto___18189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15630_18190__$1))
{var c__11077__auto___18191 = cljs.core.chunk_first.call(null,seq__15630_18190__$1);{
var G__18192 = cljs.core.chunk_rest.call(null,seq__15630_18190__$1);
var G__18193 = c__11077__auto___18191;
var G__18194 = cljs.core.count.call(null,c__11077__auto___18191);
var G__18195 = 0;
seq__15630_18180 = G__18192;
chunk__15631_18181 = G__18193;
count__15632_18182 = G__18194;
i__15633_18183 = G__18195;
continue;
}
} else
{var arg__11936__auto___18196 = cljs.core.first.call(null,seq__15630_18190__$1);a__11935__auto__.push(arg__11936__auto___18196);
{
var G__18197 = cljs.core.next.call(null,seq__15630_18190__$1);
var G__18198 = null;
var G__18199 = 0;
var G__18200 = 0;
seq__15630_18180 = G__18197;
chunk__15631_18181 = G__18198;
count__15632_18182 = G__18199;
i__15633_18183 = G__18200;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.polyline.apply(null,a__11935__auto__);
};
var polyline = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return polyline__delegate.call(this,args__11934__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__18201){
var args__11934__auto__ = cljs.core.seq(arglist__18201);
return polyline__delegate(args__11934__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15638_18202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15639_18203 = null;var count__15640_18204 = 0;var i__15641_18205 = 0;while(true){
if((i__15641_18205 < count__15640_18204))
{var arg__11936__auto___18206 = cljs.core._nth.call(null,chunk__15639_18203,i__15641_18205);a__11935__auto__.push(arg__11936__auto___18206);
{
var G__18207 = seq__15638_18202;
var G__18208 = chunk__15639_18203;
var G__18209 = count__15640_18204;
var G__18210 = (i__15641_18205 + 1);
seq__15638_18202 = G__18207;
chunk__15639_18203 = G__18208;
count__15640_18204 = G__18209;
i__15641_18205 = G__18210;
continue;
}
} else
{var temp__4092__auto___18211 = cljs.core.seq.call(null,seq__15638_18202);if(temp__4092__auto___18211)
{var seq__15638_18212__$1 = temp__4092__auto___18211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15638_18212__$1))
{var c__11077__auto___18213 = cljs.core.chunk_first.call(null,seq__15638_18212__$1);{
var G__18214 = cljs.core.chunk_rest.call(null,seq__15638_18212__$1);
var G__18215 = c__11077__auto___18213;
var G__18216 = cljs.core.count.call(null,c__11077__auto___18213);
var G__18217 = 0;
seq__15638_18202 = G__18214;
chunk__15639_18203 = G__18215;
count__15640_18204 = G__18216;
i__15641_18205 = G__18217;
continue;
}
} else
{var arg__11936__auto___18218 = cljs.core.first.call(null,seq__15638_18212__$1);a__11935__auto__.push(arg__11936__auto___18218);
{
var G__18219 = cljs.core.next.call(null,seq__15638_18212__$1);
var G__18220 = null;
var G__18221 = 0;
var G__18222 = 0;
seq__15638_18202 = G__18219;
chunk__15639_18203 = G__18220;
count__15640_18204 = G__18221;
i__15641_18205 = G__18222;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.rect.apply(null,a__11935__auto__);
};
var rect = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rect__delegate.call(this,args__11934__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__18223){
var args__11934__auto__ = cljs.core.seq(arglist__18223);
return rect__delegate(args__11934__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__15646_18224 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__15647_18225 = null;var count__15648_18226 = 0;var i__15649_18227 = 0;while(true){
if((i__15649_18227 < count__15648_18226))
{var arg__11936__auto___18228 = cljs.core._nth.call(null,chunk__15647_18225,i__15649_18227);a__11935__auto__.push(arg__11936__auto___18228);
{
var G__18229 = seq__15646_18224;
var G__18230 = chunk__15647_18225;
var G__18231 = count__15648_18226;
var G__18232 = (i__15649_18227 + 1);
seq__15646_18224 = G__18229;
chunk__15647_18225 = G__18230;
count__15648_18226 = G__18231;
i__15649_18227 = G__18232;
continue;
}
} else
{var temp__4092__auto___18233 = cljs.core.seq.call(null,seq__15646_18224);if(temp__4092__auto___18233)
{var seq__15646_18234__$1 = temp__4092__auto___18233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15646_18234__$1))
{var c__11077__auto___18235 = cljs.core.chunk_first.call(null,seq__15646_18234__$1);{
var G__18236 = cljs.core.chunk_rest.call(null,seq__15646_18234__$1);
var G__18237 = c__11077__auto___18235;
var G__18238 = cljs.core.count.call(null,c__11077__auto___18235);
var G__18239 = 0;
seq__15646_18224 = G__18236;
chunk__15647_18225 = G__18237;
count__15648_18226 = G__18238;
i__15649_18227 = G__18239;
continue;
}
} else
{var arg__11936__auto___18240 = cljs.core.first.call(null,seq__15646_18234__$1);a__11935__auto__.push(arg__11936__auto___18240);
{
var G__18241 = cljs.core.next.call(null,seq__15646_18234__$1);
var G__18242 = null;
var G__18243 = 0;
var G__18244 = 0;
seq__15646_18224 = G__18241;
chunk__15647_18225 = G__18242;
count__15648_18226 = G__18243;
i__15649_18227 = G__18244;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.svg.apply(null,a__11935__auto__);
};
var svg = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return svg__delegate.call(this,args__11934__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__18245){
var args__11934__auto__ = cljs.core.seq(arglist__18245);
return svg__delegate(args__11934__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__11934__auto__){var a__11935__auto__ = [];a__11935__auto__.push(quiescent.dom.js_props.call(null,cljs.core.first.call(null,args__11934__auto__)));
var seq__14958_18246 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__11934__auto__));var chunk__14959_18247 = null;var count__14960_18248 = 0;var i__14961_18249 = 0;while(true){
if((i__14961_18249 < count__14960_18248))
{var arg__11936__auto___18250 = cljs.core._nth.call(null,chunk__14959_18247,i__14961_18249);a__11935__auto__.push(arg__11936__auto___18250);
{
var G__18251 = seq__14958_18246;
var G__18252 = chunk__14959_18247;
var G__18253 = count__14960_18248;
var G__18254 = (i__14961_18249 + 1);
seq__14958_18246 = G__18251;
chunk__14959_18247 = G__18252;
count__14960_18248 = G__18253;
i__14961_18249 = G__18254;
continue;
}
} else
{var temp__4092__auto___18255 = cljs.core.seq.call(null,seq__14958_18246);if(temp__4092__auto___18255)
{var seq__14958_18256__$1 = temp__4092__auto___18255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14958_18256__$1))
{var c__11077__auto___18257 = cljs.core.chunk_first.call(null,seq__14958_18256__$1);{
var G__18258 = cljs.core.chunk_rest.call(null,seq__14958_18256__$1);
var G__18259 = c__11077__auto___18257;
var G__18260 = cljs.core.count.call(null,c__11077__auto___18257);
var G__18261 = 0;
seq__14958_18246 = G__18258;
chunk__14959_18247 = G__18259;
count__14960_18248 = G__18260;
i__14961_18249 = G__18261;
continue;
}
} else
{var arg__11936__auto___18262 = cljs.core.first.call(null,seq__14958_18256__$1);a__11935__auto__.push(arg__11936__auto___18262);
{
var G__18263 = cljs.core.next.call(null,seq__14958_18256__$1);
var G__18264 = null;
var G__18265 = 0;
var G__18266 = 0;
seq__14958_18246 = G__18263;
chunk__14959_18247 = G__18264;
count__14960_18248 = G__18265;
i__14961_18249 = G__18266;
continue;
}
}
} else
{}
}
break;
}
return React.DOM.text.apply(null,a__11935__auto__);
};
var text = function (var_args){
var args__11934__auto__ = null;if (arguments.length > 0) {
  args__11934__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return text__delegate.call(this,args__11934__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__18267){
var args__11934__auto__ = cljs.core.seq(arglist__18267);
return text__delegate(args__11934__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

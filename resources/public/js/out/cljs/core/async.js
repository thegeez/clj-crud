// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21767 = (function (f,fn_handler,meta21768){
this.f = f;
this.fn_handler = fn_handler;
this.meta21768 = meta21768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21767.cljs$lang$type = true;
cljs.core.async.t21767.cljs$lang$ctorStr = "cljs.core.async/t21767";
cljs.core.async.t21767.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21767");
});
cljs.core.async.t21767.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21769){var self__ = this;
var _21769__$1 = this;return self__.meta21768;
});
cljs.core.async.t21767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21769,meta21768__$1){var self__ = this;
var _21769__$1 = this;return (new cljs.core.async.t21767(self__.f,self__.fn_handler,meta21768__$1));
});
cljs.core.async.__GT_t21767 = (function __GT_t21767(f__$1,fn_handler__$1,meta21768){return (new cljs.core.async.t21767(f__$1,fn_handler__$1,meta21768));
});
}
return (new cljs.core.async.t21767(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21771 = buff;if(G__21771)
{var bit__10979__auto__ = null;if(cljs.core.truth_((function (){var or__10329__auto__ = bit__10979__auto__;if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{return G__21771.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21771.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21771);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21771);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_21772 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21772);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21772);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__10317__auto__ = ret;if(cljs.core.truth_(and__10317__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__10317__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11177__auto___21773 = n;var x_21774 = 0;while(true){
if((x_21774 < n__11177__auto___21773))
{(a[x_21774] = 0);
{
var G__21775 = (x_21774 + 1);
x_21774 = G__21775;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__21776 = (i + 1);
i = G__21776;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21780 = (function (flag,alt_flag,meta21781){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21781 = meta21781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21780.cljs$lang$type = true;
cljs.core.async.t21780.cljs$lang$ctorStr = "cljs.core.async/t21780";
cljs.core.async.t21780.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21780");
});
cljs.core.async.t21780.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21782){var self__ = this;
var _21782__$1 = this;return self__.meta21781;
});
cljs.core.async.t21780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21782,meta21781__$1){var self__ = this;
var _21782__$1 = this;return (new cljs.core.async.t21780(self__.flag,self__.alt_flag,meta21781__$1));
});
cljs.core.async.__GT_t21780 = (function __GT_t21780(flag__$1,alt_flag__$1,meta21781){return (new cljs.core.async.t21780(flag__$1,alt_flag__$1,meta21781));
});
}
return (new cljs.core.async.t21780(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21786 = (function (cb,flag,alt_handler,meta21787){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21787 = meta21787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21786.cljs$lang$type = true;
cljs.core.async.t21786.cljs$lang$ctorStr = "cljs.core.async/t21786";
cljs.core.async.t21786.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21786");
});
cljs.core.async.t21786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21788){var self__ = this;
var _21788__$1 = this;return self__.meta21787;
});
cljs.core.async.t21786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21788,meta21787__$1){var self__ = this;
var _21788__$1 = this;return (new cljs.core.async.t21786(self__.cb,self__.flag,self__.alt_handler,meta21787__$1));
});
cljs.core.async.__GT_t21786 = (function __GT_t21786(cb__$1,flag__$1,alt_handler__$1,meta21787){return (new cljs.core.async.t21786(cb__$1,flag__$1,alt_handler__$1,meta21787));
});
}
return (new cljs.core.async.t21786(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21789_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21789_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10329__auto__ = wport;if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21790 = (i + 1);
i = G__21790;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10329__auto__ = ret;if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__10317__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10317__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10317__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__21791){var map__21793 = p__21791;var map__21793__$1 = ((cljs.core.seq_QMARK_.call(null,map__21793))?cljs.core.apply.call(null,cljs.core.hash_map,map__21793):map__21793);var opts = map__21793__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21791 = null;if (arguments.length > 1) {
  p__21791 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21791);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21794){
var ports = cljs.core.first(arglist__21794);
var p__21791 = cljs.core.rest(arglist__21794);
return alts_BANG___delegate(ports,p__21791);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21802 = (function (ch,f,map_LT_,meta21803){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21803 = meta21803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21802.cljs$lang$type = true;
cljs.core.async.t21802.cljs$lang$ctorStr = "cljs.core.async/t21802";
cljs.core.async.t21802.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21802");
});
cljs.core.async.t21802.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21802.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21805 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21805 = (function (fn1,_,meta21803,ch,f,map_LT_,meta21806){
this.fn1 = fn1;
this._ = _;
this.meta21803 = meta21803;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21806 = meta21806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21805.cljs$lang$type = true;
cljs.core.async.t21805.cljs$lang$ctorStr = "cljs.core.async/t21805";
cljs.core.async.t21805.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21805");
});
cljs.core.async.t21805.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21805.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21805.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21805.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21795_SHARP_){return f1.call(null,(((p1__21795_SHARP_ == null))?null:self__.f.call(null,p1__21795_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21807){var self__ = this;
var _21807__$1 = this;return self__.meta21806;
});
cljs.core.async.t21805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21807,meta21806__$1){var self__ = this;
var _21807__$1 = this;return (new cljs.core.async.t21805(self__.fn1,self__._,self__.meta21803,self__.ch,self__.f,self__.map_LT_,meta21806__$1));
});
cljs.core.async.__GT_t21805 = (function __GT_t21805(fn1__$1,___$2,meta21803__$1,ch__$2,f__$2,map_LT___$2,meta21806){return (new cljs.core.async.t21805(fn1__$1,___$2,meta21803__$1,ch__$2,f__$2,map_LT___$2,meta21806));
});
}
return (new cljs.core.async.t21805(fn1,___$1,self__.meta21803,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10317__auto__ = ret;if(cljs.core.truth_(and__10317__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10317__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21802.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21804){var self__ = this;
var _21804__$1 = this;return self__.meta21803;
});
cljs.core.async.t21802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21804,meta21803__$1){var self__ = this;
var _21804__$1 = this;return (new cljs.core.async.t21802(self__.ch,self__.f,self__.map_LT_,meta21803__$1));
});
cljs.core.async.__GT_t21802 = (function __GT_t21802(ch__$1,f__$1,map_LT___$1,meta21803){return (new cljs.core.async.t21802(ch__$1,f__$1,map_LT___$1,meta21803));
});
}
return (new cljs.core.async.t21802(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21811 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21811 = (function (ch,f,map_GT_,meta21812){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21812 = meta21812;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21811.cljs$lang$type = true;
cljs.core.async.t21811.cljs$lang$ctorStr = "cljs.core.async/t21811";
cljs.core.async.t21811.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21811");
});
cljs.core.async.t21811.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21811.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21811.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21813){var self__ = this;
var _21813__$1 = this;return self__.meta21812;
});
cljs.core.async.t21811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21813,meta21812__$1){var self__ = this;
var _21813__$1 = this;return (new cljs.core.async.t21811(self__.ch,self__.f,self__.map_GT_,meta21812__$1));
});
cljs.core.async.__GT_t21811 = (function __GT_t21811(ch__$1,f__$1,map_GT___$1,meta21812){return (new cljs.core.async.t21811(ch__$1,f__$1,map_GT___$1,meta21812));
});
}
return (new cljs.core.async.t21811(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21817 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21817 = (function (ch,p,filter_GT_,meta21818){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21818 = meta21818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21817.cljs$lang$type = true;
cljs.core.async.t21817.cljs$lang$ctorStr = "cljs.core.async/t21817";
cljs.core.async.t21817.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21817");
});
cljs.core.async.t21817.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21817.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21817.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21819){var self__ = this;
var _21819__$1 = this;return self__.meta21818;
});
cljs.core.async.t21817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21819,meta21818__$1){var self__ = this;
var _21819__$1 = this;return (new cljs.core.async.t21817(self__.ch,self__.p,self__.filter_GT_,meta21818__$1));
});
cljs.core.async.__GT_t21817 = (function __GT_t21817(ch__$1,p__$1,filter_GT___$1,meta21818){return (new cljs.core.async.t21817(ch__$1,p__$1,filter_GT___$1,meta21818));
});
}
return (new cljs.core.async.t21817(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14152__auto___21902 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_21881){var state_val_21882 = (state_21881[1]);if((state_val_21882 === 1))
{var state_21881__$1 = state_21881;var statearr_21883_21903 = state_21881__$1;(statearr_21883_21903[2] = null);
(statearr_21883_21903[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 2))
{var state_21881__$1 = state_21881;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21881__$1,4,ch);
} else
{if((state_val_21882 === 3))
{var inst_21879 = (state_21881[2]);var state_21881__$1 = state_21881;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21881__$1,inst_21879);
} else
{if((state_val_21882 === 4))
{var inst_21863 = (state_21881[7]);var inst_21863__$1 = (state_21881[2]);var inst_21864 = (inst_21863__$1 == null);var state_21881__$1 = (function (){var statearr_21884 = state_21881;(statearr_21884[7] = inst_21863__$1);
return statearr_21884;
})();if(cljs.core.truth_(inst_21864))
{var statearr_21885_21904 = state_21881__$1;(statearr_21885_21904[1] = 5);
} else
{var statearr_21886_21905 = state_21881__$1;(statearr_21886_21905[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 5))
{var inst_21866 = cljs.core.async.close_BANG_.call(null,out);var state_21881__$1 = state_21881;var statearr_21887_21906 = state_21881__$1;(statearr_21887_21906[2] = inst_21866);
(statearr_21887_21906[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 6))
{var inst_21863 = (state_21881[7]);var inst_21868 = p.call(null,inst_21863);var state_21881__$1 = state_21881;if(cljs.core.truth_(inst_21868))
{var statearr_21888_21907 = state_21881__$1;(statearr_21888_21907[1] = 8);
} else
{var statearr_21889_21908 = state_21881__$1;(statearr_21889_21908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 7))
{var inst_21877 = (state_21881[2]);var state_21881__$1 = state_21881;var statearr_21890_21909 = state_21881__$1;(statearr_21890_21909[2] = inst_21877);
(statearr_21890_21909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 8))
{var inst_21863 = (state_21881[7]);var state_21881__$1 = state_21881;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21881__$1,11,out,inst_21863);
} else
{if((state_val_21882 === 9))
{var state_21881__$1 = state_21881;var statearr_21891_21910 = state_21881__$1;(statearr_21891_21910[2] = null);
(statearr_21891_21910[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 10))
{var inst_21874 = (state_21881[2]);var state_21881__$1 = (function (){var statearr_21892 = state_21881;(statearr_21892[8] = inst_21874);
return statearr_21892;
})();var statearr_21893_21911 = state_21881__$1;(statearr_21893_21911[2] = null);
(statearr_21893_21911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21882 === 11))
{var inst_21871 = (state_21881[2]);var state_21881__$1 = state_21881;var statearr_21894_21912 = state_21881__$1;(statearr_21894_21912[2] = inst_21871);
(statearr_21894_21912[1] = 10);
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
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_21898 = [null,null,null,null,null,null,null,null,null];(statearr_21898[0] = state_machine__14083__auto__);
(statearr_21898[1] = 1);
return statearr_21898;
});
var state_machine__14083__auto____1 = (function (state_21881){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_21881);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e21899){if((e21899 instanceof Object))
{var ex__14086__auto__ = e21899;var statearr_21900_21913 = state_21881;(statearr_21900_21913[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21881);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21914 = state_21881;
state_21881 = G__21914;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_21881){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_21881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_21901 = f__14153__auto__.call(null);(statearr_21901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___21902);
return statearr_21901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_22066){var state_val_22067 = (state_22066[1]);if((state_val_22067 === 1))
{var state_22066__$1 = state_22066;var statearr_22068_22105 = state_22066__$1;(statearr_22068_22105[2] = null);
(statearr_22068_22105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 2))
{var state_22066__$1 = state_22066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22066__$1,4,in$);
} else
{if((state_val_22067 === 3))
{var inst_22064 = (state_22066[2]);var state_22066__$1 = state_22066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22066__$1,inst_22064);
} else
{if((state_val_22067 === 4))
{var inst_22012 = (state_22066[7]);var inst_22012__$1 = (state_22066[2]);var inst_22013 = (inst_22012__$1 == null);var state_22066__$1 = (function (){var statearr_22069 = state_22066;(statearr_22069[7] = inst_22012__$1);
return statearr_22069;
})();if(cljs.core.truth_(inst_22013))
{var statearr_22070_22106 = state_22066__$1;(statearr_22070_22106[1] = 5);
} else
{var statearr_22071_22107 = state_22066__$1;(statearr_22071_22107[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 5))
{var inst_22015 = cljs.core.async.close_BANG_.call(null,out);var state_22066__$1 = state_22066;var statearr_22072_22108 = state_22066__$1;(statearr_22072_22108[2] = inst_22015);
(statearr_22072_22108[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 6))
{var inst_22012 = (state_22066[7]);var inst_22017 = f.call(null,inst_22012);var inst_22022 = cljs.core.seq.call(null,inst_22017);var inst_22023 = inst_22022;var inst_22024 = null;var inst_22025 = 0;var inst_22026 = 0;var state_22066__$1 = (function (){var statearr_22073 = state_22066;(statearr_22073[8] = inst_22026);
(statearr_22073[9] = inst_22025);
(statearr_22073[10] = inst_22024);
(statearr_22073[11] = inst_22023);
return statearr_22073;
})();var statearr_22074_22109 = state_22066__$1;(statearr_22074_22109[2] = null);
(statearr_22074_22109[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 7))
{var inst_22062 = (state_22066[2]);var state_22066__$1 = state_22066;var statearr_22075_22110 = state_22066__$1;(statearr_22075_22110[2] = inst_22062);
(statearr_22075_22110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 8))
{var inst_22026 = (state_22066[8]);var inst_22025 = (state_22066[9]);var inst_22028 = (inst_22026 < inst_22025);var inst_22029 = inst_22028;var state_22066__$1 = state_22066;if(cljs.core.truth_(inst_22029))
{var statearr_22076_22111 = state_22066__$1;(statearr_22076_22111[1] = 10);
} else
{var statearr_22077_22112 = state_22066__$1;(statearr_22077_22112[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 9))
{var inst_22059 = (state_22066[2]);var state_22066__$1 = (function (){var statearr_22078 = state_22066;(statearr_22078[12] = inst_22059);
return statearr_22078;
})();var statearr_22079_22113 = state_22066__$1;(statearr_22079_22113[2] = null);
(statearr_22079_22113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 10))
{var inst_22026 = (state_22066[8]);var inst_22024 = (state_22066[10]);var inst_22031 = cljs.core._nth.call(null,inst_22024,inst_22026);var state_22066__$1 = state_22066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22066__$1,13,out,inst_22031);
} else
{if((state_val_22067 === 11))
{var inst_22037 = (state_22066[13]);var inst_22023 = (state_22066[11]);var inst_22037__$1 = cljs.core.seq.call(null,inst_22023);var state_22066__$1 = (function (){var statearr_22083 = state_22066;(statearr_22083[13] = inst_22037__$1);
return statearr_22083;
})();if(inst_22037__$1)
{var statearr_22084_22114 = state_22066__$1;(statearr_22084_22114[1] = 14);
} else
{var statearr_22085_22115 = state_22066__$1;(statearr_22085_22115[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 12))
{var inst_22057 = (state_22066[2]);var state_22066__$1 = state_22066;var statearr_22086_22116 = state_22066__$1;(statearr_22086_22116[2] = inst_22057);
(statearr_22086_22116[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 13))
{var inst_22026 = (state_22066[8]);var inst_22025 = (state_22066[9]);var inst_22024 = (state_22066[10]);var inst_22023 = (state_22066[11]);var inst_22033 = (state_22066[2]);var inst_22034 = (inst_22026 + 1);var tmp22080 = inst_22025;var tmp22081 = inst_22024;var tmp22082 = inst_22023;var inst_22023__$1 = tmp22082;var inst_22024__$1 = tmp22081;var inst_22025__$1 = tmp22080;var inst_22026__$1 = inst_22034;var state_22066__$1 = (function (){var statearr_22087 = state_22066;(statearr_22087[14] = inst_22033);
(statearr_22087[8] = inst_22026__$1);
(statearr_22087[9] = inst_22025__$1);
(statearr_22087[10] = inst_22024__$1);
(statearr_22087[11] = inst_22023__$1);
return statearr_22087;
})();var statearr_22088_22117 = state_22066__$1;(statearr_22088_22117[2] = null);
(statearr_22088_22117[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 14))
{var inst_22037 = (state_22066[13]);var inst_22039 = cljs.core.chunked_seq_QMARK_.call(null,inst_22037);var state_22066__$1 = state_22066;if(inst_22039)
{var statearr_22089_22118 = state_22066__$1;(statearr_22089_22118[1] = 17);
} else
{var statearr_22090_22119 = state_22066__$1;(statearr_22090_22119[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 15))
{var state_22066__$1 = state_22066;var statearr_22091_22120 = state_22066__$1;(statearr_22091_22120[2] = null);
(statearr_22091_22120[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 16))
{var inst_22055 = (state_22066[2]);var state_22066__$1 = state_22066;var statearr_22092_22121 = state_22066__$1;(statearr_22092_22121[2] = inst_22055);
(statearr_22092_22121[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 17))
{var inst_22037 = (state_22066[13]);var inst_22041 = cljs.core.chunk_first.call(null,inst_22037);var inst_22042 = cljs.core.chunk_rest.call(null,inst_22037);var inst_22043 = cljs.core.count.call(null,inst_22041);var inst_22023 = inst_22042;var inst_22024 = inst_22041;var inst_22025 = inst_22043;var inst_22026 = 0;var state_22066__$1 = (function (){var statearr_22093 = state_22066;(statearr_22093[8] = inst_22026);
(statearr_22093[9] = inst_22025);
(statearr_22093[10] = inst_22024);
(statearr_22093[11] = inst_22023);
return statearr_22093;
})();var statearr_22094_22122 = state_22066__$1;(statearr_22094_22122[2] = null);
(statearr_22094_22122[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 18))
{var inst_22037 = (state_22066[13]);var inst_22046 = cljs.core.first.call(null,inst_22037);var state_22066__$1 = state_22066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22066__$1,20,out,inst_22046);
} else
{if((state_val_22067 === 19))
{var inst_22052 = (state_22066[2]);var state_22066__$1 = state_22066;var statearr_22095_22123 = state_22066__$1;(statearr_22095_22123[2] = inst_22052);
(statearr_22095_22123[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22067 === 20))
{var inst_22037 = (state_22066[13]);var inst_22048 = (state_22066[2]);var inst_22049 = cljs.core.next.call(null,inst_22037);var inst_22023 = inst_22049;var inst_22024 = null;var inst_22025 = 0;var inst_22026 = 0;var state_22066__$1 = (function (){var statearr_22096 = state_22066;(statearr_22096[8] = inst_22026);
(statearr_22096[9] = inst_22025);
(statearr_22096[10] = inst_22024);
(statearr_22096[11] = inst_22023);
(statearr_22096[15] = inst_22048);
return statearr_22096;
})();var statearr_22097_22124 = state_22066__$1;(statearr_22097_22124[2] = null);
(statearr_22097_22124[1] = 8);
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
var state_machine__14083__auto____0 = (function (){var statearr_22101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22101[0] = state_machine__14083__auto__);
(statearr_22101[1] = 1);
return statearr_22101;
});
var state_machine__14083__auto____1 = (function (state_22066){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_22066);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e22102){if((e22102 instanceof Object))
{var ex__14086__auto__ = e22102;var statearr_22103_22125 = state_22066;(statearr_22103_22125[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22126 = state_22066;
state_22066 = G__22126;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_22066){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_22066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_22104 = f__14153__auto__.call(null);(statearr_22104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto__);
return statearr_22104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return c__14152__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14152__auto___22207 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_22186){var state_val_22187 = (state_22186[1]);if((state_val_22187 === 1))
{var state_22186__$1 = state_22186;var statearr_22188_22208 = state_22186__$1;(statearr_22188_22208[2] = null);
(statearr_22188_22208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 2))
{var state_22186__$1 = state_22186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22186__$1,4,from);
} else
{if((state_val_22187 === 3))
{var inst_22184 = (state_22186[2]);var state_22186__$1 = state_22186;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22186__$1,inst_22184);
} else
{if((state_val_22187 === 4))
{var inst_22169 = (state_22186[7]);var inst_22169__$1 = (state_22186[2]);var inst_22170 = (inst_22169__$1 == null);var state_22186__$1 = (function (){var statearr_22189 = state_22186;(statearr_22189[7] = inst_22169__$1);
return statearr_22189;
})();if(cljs.core.truth_(inst_22170))
{var statearr_22190_22209 = state_22186__$1;(statearr_22190_22209[1] = 5);
} else
{var statearr_22191_22210 = state_22186__$1;(statearr_22191_22210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 5))
{var state_22186__$1 = state_22186;if(cljs.core.truth_(close_QMARK_))
{var statearr_22192_22211 = state_22186__$1;(statearr_22192_22211[1] = 8);
} else
{var statearr_22193_22212 = state_22186__$1;(statearr_22193_22212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 6))
{var inst_22169 = (state_22186[7]);var state_22186__$1 = state_22186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22186__$1,11,to,inst_22169);
} else
{if((state_val_22187 === 7))
{var inst_22182 = (state_22186[2]);var state_22186__$1 = state_22186;var statearr_22194_22213 = state_22186__$1;(statearr_22194_22213[2] = inst_22182);
(statearr_22194_22213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 8))
{var inst_22173 = cljs.core.async.close_BANG_.call(null,to);var state_22186__$1 = state_22186;var statearr_22195_22214 = state_22186__$1;(statearr_22195_22214[2] = inst_22173);
(statearr_22195_22214[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 9))
{var state_22186__$1 = state_22186;var statearr_22196_22215 = state_22186__$1;(statearr_22196_22215[2] = null);
(statearr_22196_22215[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 10))
{var inst_22176 = (state_22186[2]);var state_22186__$1 = state_22186;var statearr_22197_22216 = state_22186__$1;(statearr_22197_22216[2] = inst_22176);
(statearr_22197_22216[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22187 === 11))
{var inst_22179 = (state_22186[2]);var state_22186__$1 = (function (){var statearr_22198 = state_22186;(statearr_22198[8] = inst_22179);
return statearr_22198;
})();var statearr_22199_22217 = state_22186__$1;(statearr_22199_22217[2] = null);
(statearr_22199_22217[1] = 2);
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
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_22203 = [null,null,null,null,null,null,null,null,null];(statearr_22203[0] = state_machine__14083__auto__);
(statearr_22203[1] = 1);
return statearr_22203;
});
var state_machine__14083__auto____1 = (function (state_22186){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_22186);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e22204){if((e22204 instanceof Object))
{var ex__14086__auto__ = e22204;var statearr_22205_22218 = state_22186;(statearr_22205_22218[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22204;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22219 = state_22186;
state_22186 = G__22219;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_22186){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_22186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_22206 = f__14153__auto__.call(null);(statearr_22206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___22207);
return statearr_22206;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14152__auto___22306 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_22284){var state_val_22285 = (state_22284[1]);if((state_val_22285 === 1))
{var state_22284__$1 = state_22284;var statearr_22286_22307 = state_22284__$1;(statearr_22286_22307[2] = null);
(statearr_22286_22307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 2))
{var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22284__$1,4,ch);
} else
{if((state_val_22285 === 3))
{var inst_22282 = (state_22284[2]);var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22284__$1,inst_22282);
} else
{if((state_val_22285 === 4))
{var inst_22265 = (state_22284[7]);var inst_22265__$1 = (state_22284[2]);var inst_22266 = (inst_22265__$1 == null);var state_22284__$1 = (function (){var statearr_22287 = state_22284;(statearr_22287[7] = inst_22265__$1);
return statearr_22287;
})();if(cljs.core.truth_(inst_22266))
{var statearr_22288_22308 = state_22284__$1;(statearr_22288_22308[1] = 5);
} else
{var statearr_22289_22309 = state_22284__$1;(statearr_22289_22309[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 5))
{var inst_22268 = cljs.core.async.close_BANG_.call(null,tc);var inst_22269 = cljs.core.async.close_BANG_.call(null,fc);var state_22284__$1 = (function (){var statearr_22290 = state_22284;(statearr_22290[8] = inst_22268);
return statearr_22290;
})();var statearr_22291_22310 = state_22284__$1;(statearr_22291_22310[2] = inst_22269);
(statearr_22291_22310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 6))
{var inst_22265 = (state_22284[7]);var inst_22271 = p.call(null,inst_22265);var state_22284__$1 = state_22284;if(cljs.core.truth_(inst_22271))
{var statearr_22292_22311 = state_22284__$1;(statearr_22292_22311[1] = 9);
} else
{var statearr_22293_22312 = state_22284__$1;(statearr_22293_22312[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 7))
{var inst_22280 = (state_22284[2]);var state_22284__$1 = state_22284;var statearr_22294_22313 = state_22284__$1;(statearr_22294_22313[2] = inst_22280);
(statearr_22294_22313[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 8))
{var inst_22277 = (state_22284[2]);var state_22284__$1 = (function (){var statearr_22295 = state_22284;(statearr_22295[9] = inst_22277);
return statearr_22295;
})();var statearr_22296_22314 = state_22284__$1;(statearr_22296_22314[2] = null);
(statearr_22296_22314[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 9))
{var state_22284__$1 = state_22284;var statearr_22297_22315 = state_22284__$1;(statearr_22297_22315[2] = tc);
(statearr_22297_22315[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 10))
{var state_22284__$1 = state_22284;var statearr_22298_22316 = state_22284__$1;(statearr_22298_22316[2] = fc);
(statearr_22298_22316[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22285 === 11))
{var inst_22265 = (state_22284[7]);var inst_22275 = (state_22284[2]);var state_22284__$1 = state_22284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22284__$1,8,inst_22275,inst_22265);
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
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_22302 = [null,null,null,null,null,null,null,null,null,null];(statearr_22302[0] = state_machine__14083__auto__);
(statearr_22302[1] = 1);
return statearr_22302;
});
var state_machine__14083__auto____1 = (function (state_22284){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_22284);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e22303){if((e22303 instanceof Object))
{var ex__14086__auto__ = e22303;var statearr_22304_22317 = state_22284;(statearr_22304_22317[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22303;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22318 = state_22284;
state_22284 = G__22318;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_22305 = f__14153__auto__.call(null);(statearr_22305[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___22306);
return statearr_22305;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_22365){var state_val_22366 = (state_22365[1]);if((state_val_22366 === 7))
{var inst_22361 = (state_22365[2]);var state_22365__$1 = state_22365;var statearr_22367_22383 = state_22365__$1;(statearr_22367_22383[2] = inst_22361);
(statearr_22367_22383[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22366 === 6))
{var inst_22354 = (state_22365[7]);var inst_22351 = (state_22365[8]);var inst_22358 = f.call(null,inst_22351,inst_22354);var inst_22351__$1 = inst_22358;var state_22365__$1 = (function (){var statearr_22368 = state_22365;(statearr_22368[8] = inst_22351__$1);
return statearr_22368;
})();var statearr_22369_22384 = state_22365__$1;(statearr_22369_22384[2] = null);
(statearr_22369_22384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22366 === 5))
{var inst_22351 = (state_22365[8]);var state_22365__$1 = state_22365;var statearr_22370_22385 = state_22365__$1;(statearr_22370_22385[2] = inst_22351);
(statearr_22370_22385[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22366 === 4))
{var inst_22354 = (state_22365[7]);var inst_22354__$1 = (state_22365[2]);var inst_22355 = (inst_22354__$1 == null);var state_22365__$1 = (function (){var statearr_22371 = state_22365;(statearr_22371[7] = inst_22354__$1);
return statearr_22371;
})();if(cljs.core.truth_(inst_22355))
{var statearr_22372_22386 = state_22365__$1;(statearr_22372_22386[1] = 5);
} else
{var statearr_22373_22387 = state_22365__$1;(statearr_22373_22387[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22366 === 3))
{var inst_22363 = (state_22365[2]);var state_22365__$1 = state_22365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22365__$1,inst_22363);
} else
{if((state_val_22366 === 2))
{var state_22365__$1 = state_22365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22365__$1,4,ch);
} else
{if((state_val_22366 === 1))
{var inst_22351 = init;var state_22365__$1 = (function (){var statearr_22374 = state_22365;(statearr_22374[8] = inst_22351);
return statearr_22374;
})();var statearr_22375_22388 = state_22365__$1;(statearr_22375_22388[2] = null);
(statearr_22375_22388[1] = 2);
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
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_22379 = [null,null,null,null,null,null,null,null,null];(statearr_22379[0] = state_machine__14083__auto__);
(statearr_22379[1] = 1);
return statearr_22379;
});
var state_machine__14083__auto____1 = (function (state_22365){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_22365);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e22380){if((e22380 instanceof Object))
{var ex__14086__auto__ = e22380;var statearr_22381_22389 = state_22365;(statearr_22381_22389[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22390 = state_22365;
state_22365 = G__22390;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_22365){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_22365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_22382 = f__14153__auto__.call(null);(statearr_22382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto__);
return statearr_22382;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return c__14152__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14152__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_22452){var state_val_22453 = (state_22452[1]);if((state_val_22453 === 1))
{var inst_22432 = cljs.core.seq.call(null,coll);var inst_22433 = inst_22432;var state_22452__$1 = (function (){var statearr_22454 = state_22452;(statearr_22454[7] = inst_22433);
return statearr_22454;
})();var statearr_22455_22473 = state_22452__$1;(statearr_22455_22473[2] = null);
(statearr_22455_22473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 2))
{var inst_22433 = (state_22452[7]);var state_22452__$1 = state_22452;if(cljs.core.truth_(inst_22433))
{var statearr_22456_22474 = state_22452__$1;(statearr_22456_22474[1] = 4);
} else
{var statearr_22457_22475 = state_22452__$1;(statearr_22457_22475[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 3))
{var inst_22450 = (state_22452[2]);var state_22452__$1 = state_22452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22452__$1,inst_22450);
} else
{if((state_val_22453 === 4))
{var inst_22433 = (state_22452[7]);var inst_22436 = cljs.core.first.call(null,inst_22433);var state_22452__$1 = state_22452;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22452__$1,7,ch,inst_22436);
} else
{if((state_val_22453 === 5))
{var state_22452__$1 = state_22452;if(cljs.core.truth_(close_QMARK_))
{var statearr_22458_22476 = state_22452__$1;(statearr_22458_22476[1] = 8);
} else
{var statearr_22459_22477 = state_22452__$1;(statearr_22459_22477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 6))
{var inst_22448 = (state_22452[2]);var state_22452__$1 = state_22452;var statearr_22460_22478 = state_22452__$1;(statearr_22460_22478[2] = inst_22448);
(statearr_22460_22478[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 7))
{var inst_22433 = (state_22452[7]);var inst_22438 = (state_22452[2]);var inst_22439 = cljs.core.next.call(null,inst_22433);var inst_22433__$1 = inst_22439;var state_22452__$1 = (function (){var statearr_22461 = state_22452;(statearr_22461[8] = inst_22438);
(statearr_22461[7] = inst_22433__$1);
return statearr_22461;
})();var statearr_22462_22479 = state_22452__$1;(statearr_22462_22479[2] = null);
(statearr_22462_22479[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 8))
{var inst_22443 = cljs.core.async.close_BANG_.call(null,ch);var state_22452__$1 = state_22452;var statearr_22463_22480 = state_22452__$1;(statearr_22463_22480[2] = inst_22443);
(statearr_22463_22480[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 9))
{var state_22452__$1 = state_22452;var statearr_22464_22481 = state_22452__$1;(statearr_22464_22481[2] = null);
(statearr_22464_22481[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22453 === 10))
{var inst_22446 = (state_22452[2]);var state_22452__$1 = state_22452;var statearr_22465_22482 = state_22452__$1;(statearr_22465_22482[2] = inst_22446);
(statearr_22465_22482[1] = 6);
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
var state_machine__14083__auto____0 = (function (){var statearr_22469 = [null,null,null,null,null,null,null,null,null];(statearr_22469[0] = state_machine__14083__auto__);
(statearr_22469[1] = 1);
return statearr_22469;
});
var state_machine__14083__auto____1 = (function (state_22452){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_22452);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e22470){if((e22470 instanceof Object))
{var ex__14086__auto__ = e22470;var statearr_22471_22483 = state_22452;(statearr_22471_22483[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22484 = state_22452;
state_22452 = G__22484;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_22452){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_22452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_22472 = f__14153__auto__.call(null);(statearr_22472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto__);
return statearr_22472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return c__14152__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj22486 = {};return obj22486;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10317__auto__ = _;if(and__10317__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10317__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10956__auto__ = (((_ == null))?null:_);return (function (){var or__10329__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj22488 = {};return obj22488;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22712 = (function (cs,ch,mult,meta22713){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22713 = meta22713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22712.cljs$lang$type = true;
cljs.core.async.t22712.cljs$lang$ctorStr = "cljs.core.async/t22712";
cljs.core.async.t22712.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22712");
});})(cs))
;
cljs.core.async.t22712.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22712.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22712.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22712.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22712.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22714){var self__ = this;
var _22714__$1 = this;return self__.meta22713;
});})(cs))
;
cljs.core.async.t22712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22714,meta22713__$1){var self__ = this;
var _22714__$1 = this;return (new cljs.core.async.t22712(self__.cs,self__.ch,self__.mult,meta22713__$1));
});})(cs))
;
cljs.core.async.__GT_t22712 = ((function (cs){
return (function __GT_t22712(cs__$1,ch__$1,mult__$1,meta22713){return (new cljs.core.async.t22712(cs__$1,ch__$1,mult__$1,meta22713));
});})(cs))
;
}
return (new cljs.core.async.t22712(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14152__auto___22935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_22849){var state_val_22850 = (state_22849[1]);if((state_val_22850 === 32))
{var inst_22717 = (state_22849[7]);var inst_22793 = (state_22849[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22849,31,Object,null,30);var inst_22800 = cljs.core.async.put_BANG_.call(null,inst_22793,inst_22717,done);var state_22849__$1 = state_22849;var statearr_22851_22936 = state_22849__$1;(statearr_22851_22936[2] = inst_22800);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 1))
{var state_22849__$1 = state_22849;var statearr_22852_22937 = state_22849__$1;(statearr_22852_22937[2] = null);
(statearr_22852_22937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 33))
{var inst_22806 = (state_22849[9]);var inst_22808 = cljs.core.chunked_seq_QMARK_.call(null,inst_22806);var state_22849__$1 = state_22849;if(inst_22808)
{var statearr_22853_22938 = state_22849__$1;(statearr_22853_22938[1] = 36);
} else
{var statearr_22854_22939 = state_22849__$1;(statearr_22854_22939[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 2))
{var state_22849__$1 = state_22849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,4,ch);
} else
{if((state_val_22850 === 34))
{var state_22849__$1 = state_22849;var statearr_22855_22940 = state_22849__$1;(statearr_22855_22940[2] = null);
(statearr_22855_22940[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 3))
{var inst_22847 = (state_22849[2]);var state_22849__$1 = state_22849;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22849__$1,inst_22847);
} else
{if((state_val_22850 === 35))
{var inst_22831 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22856_22941 = state_22849__$1;(statearr_22856_22941[2] = inst_22831);
(statearr_22856_22941[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 4))
{var inst_22717 = (state_22849[7]);var inst_22717__$1 = (state_22849[2]);var inst_22718 = (inst_22717__$1 == null);var state_22849__$1 = (function (){var statearr_22857 = state_22849;(statearr_22857[7] = inst_22717__$1);
return statearr_22857;
})();if(cljs.core.truth_(inst_22718))
{var statearr_22858_22942 = state_22849__$1;(statearr_22858_22942[1] = 5);
} else
{var statearr_22859_22943 = state_22849__$1;(statearr_22859_22943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 36))
{var inst_22806 = (state_22849[9]);var inst_22810 = cljs.core.chunk_first.call(null,inst_22806);var inst_22811 = cljs.core.chunk_rest.call(null,inst_22806);var inst_22812 = cljs.core.count.call(null,inst_22810);var inst_22785 = inst_22811;var inst_22786 = inst_22810;var inst_22787 = inst_22812;var inst_22788 = 0;var state_22849__$1 = (function (){var statearr_22860 = state_22849;(statearr_22860[10] = inst_22786);
(statearr_22860[11] = inst_22787);
(statearr_22860[12] = inst_22788);
(statearr_22860[13] = inst_22785);
return statearr_22860;
})();var statearr_22861_22944 = state_22849__$1;(statearr_22861_22944[2] = null);
(statearr_22861_22944[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 5))
{var inst_22724 = cljs.core.deref.call(null,cs);var inst_22725 = cljs.core.seq.call(null,inst_22724);var inst_22726 = inst_22725;var inst_22727 = null;var inst_22728 = 0;var inst_22729 = 0;var state_22849__$1 = (function (){var statearr_22862 = state_22849;(statearr_22862[14] = inst_22727);
(statearr_22862[15] = inst_22726);
(statearr_22862[16] = inst_22728);
(statearr_22862[17] = inst_22729);
return statearr_22862;
})();var statearr_22863_22945 = state_22849__$1;(statearr_22863_22945[2] = null);
(statearr_22863_22945[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 37))
{var inst_22806 = (state_22849[9]);var inst_22815 = cljs.core.first.call(null,inst_22806);var state_22849__$1 = (function (){var statearr_22864 = state_22849;(statearr_22864[18] = inst_22815);
return statearr_22864;
})();var statearr_22865_22946 = state_22849__$1;(statearr_22865_22946[2] = null);
(statearr_22865_22946[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 6))
{var inst_22777 = (state_22849[19]);var inst_22776 = cljs.core.deref.call(null,cs);var inst_22777__$1 = cljs.core.keys.call(null,inst_22776);var inst_22778 = cljs.core.count.call(null,inst_22777__$1);var inst_22779 = cljs.core.reset_BANG_.call(null,dctr,inst_22778);var inst_22784 = cljs.core.seq.call(null,inst_22777__$1);var inst_22785 = inst_22784;var inst_22786 = null;var inst_22787 = 0;var inst_22788 = 0;var state_22849__$1 = (function (){var statearr_22866 = state_22849;(statearr_22866[10] = inst_22786);
(statearr_22866[11] = inst_22787);
(statearr_22866[12] = inst_22788);
(statearr_22866[13] = inst_22785);
(statearr_22866[19] = inst_22777__$1);
(statearr_22866[20] = inst_22779);
return statearr_22866;
})();var statearr_22867_22947 = state_22849__$1;(statearr_22867_22947[2] = null);
(statearr_22867_22947[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 38))
{var inst_22828 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22868_22948 = state_22849__$1;(statearr_22868_22948[2] = inst_22828);
(statearr_22868_22948[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 7))
{var inst_22845 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22869_22949 = state_22849__$1;(statearr_22869_22949[2] = inst_22845);
(statearr_22869_22949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 39))
{var inst_22806 = (state_22849[9]);var inst_22824 = (state_22849[2]);var inst_22825 = cljs.core.next.call(null,inst_22806);var inst_22785 = inst_22825;var inst_22786 = null;var inst_22787 = 0;var inst_22788 = 0;var state_22849__$1 = (function (){var statearr_22870 = state_22849;(statearr_22870[10] = inst_22786);
(statearr_22870[11] = inst_22787);
(statearr_22870[12] = inst_22788);
(statearr_22870[13] = inst_22785);
(statearr_22870[21] = inst_22824);
return statearr_22870;
})();var statearr_22871_22950 = state_22849__$1;(statearr_22871_22950[2] = null);
(statearr_22871_22950[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 8))
{var inst_22728 = (state_22849[16]);var inst_22729 = (state_22849[17]);var inst_22731 = (inst_22729 < inst_22728);var inst_22732 = inst_22731;var state_22849__$1 = state_22849;if(cljs.core.truth_(inst_22732))
{var statearr_22872_22951 = state_22849__$1;(statearr_22872_22951[1] = 10);
} else
{var statearr_22873_22952 = state_22849__$1;(statearr_22873_22952[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 40))
{var inst_22815 = (state_22849[18]);var inst_22816 = (state_22849[2]);var inst_22817 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22818 = cljs.core.async.untap_STAR_.call(null,m,inst_22815);var state_22849__$1 = (function (){var statearr_22874 = state_22849;(statearr_22874[22] = inst_22816);
(statearr_22874[23] = inst_22817);
return statearr_22874;
})();var statearr_22875_22953 = state_22849__$1;(statearr_22875_22953[2] = inst_22818);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 9))
{var inst_22774 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22876_22954 = state_22849__$1;(statearr_22876_22954[2] = inst_22774);
(statearr_22876_22954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 41))
{var inst_22717 = (state_22849[7]);var inst_22815 = (state_22849[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22849,40,Object,null,39);var inst_22822 = cljs.core.async.put_BANG_.call(null,inst_22815,inst_22717,done);var state_22849__$1 = state_22849;var statearr_22877_22955 = state_22849__$1;(statearr_22877_22955[2] = inst_22822);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 10))
{var inst_22727 = (state_22849[14]);var inst_22729 = (state_22849[17]);var inst_22735 = cljs.core._nth.call(null,inst_22727,inst_22729);var inst_22736 = cljs.core.nth.call(null,inst_22735,0,null);var inst_22737 = cljs.core.nth.call(null,inst_22735,1,null);var state_22849__$1 = (function (){var statearr_22878 = state_22849;(statearr_22878[24] = inst_22736);
return statearr_22878;
})();if(cljs.core.truth_(inst_22737))
{var statearr_22879_22956 = state_22849__$1;(statearr_22879_22956[1] = 13);
} else
{var statearr_22880_22957 = state_22849__$1;(statearr_22880_22957[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 42))
{var state_22849__$1 = state_22849;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,45,dchan);
} else
{if((state_val_22850 === 11))
{var inst_22726 = (state_22849[15]);var inst_22746 = (state_22849[25]);var inst_22746__$1 = cljs.core.seq.call(null,inst_22726);var state_22849__$1 = (function (){var statearr_22881 = state_22849;(statearr_22881[25] = inst_22746__$1);
return statearr_22881;
})();if(inst_22746__$1)
{var statearr_22882_22958 = state_22849__$1;(statearr_22882_22958[1] = 16);
} else
{var statearr_22883_22959 = state_22849__$1;(statearr_22883_22959[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 43))
{var state_22849__$1 = state_22849;var statearr_22884_22960 = state_22849__$1;(statearr_22884_22960[2] = null);
(statearr_22884_22960[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 12))
{var inst_22772 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22885_22961 = state_22849__$1;(statearr_22885_22961[2] = inst_22772);
(statearr_22885_22961[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 44))
{var inst_22842 = (state_22849[2]);var state_22849__$1 = (function (){var statearr_22886 = state_22849;(statearr_22886[26] = inst_22842);
return statearr_22886;
})();var statearr_22887_22962 = state_22849__$1;(statearr_22887_22962[2] = null);
(statearr_22887_22962[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 13))
{var inst_22736 = (state_22849[24]);var inst_22739 = cljs.core.async.close_BANG_.call(null,inst_22736);var state_22849__$1 = state_22849;var statearr_22888_22963 = state_22849__$1;(statearr_22888_22963[2] = inst_22739);
(statearr_22888_22963[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 45))
{var inst_22839 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22892_22964 = state_22849__$1;(statearr_22892_22964[2] = inst_22839);
(statearr_22892_22964[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 14))
{var state_22849__$1 = state_22849;var statearr_22893_22965 = state_22849__$1;(statearr_22893_22965[2] = null);
(statearr_22893_22965[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 15))
{var inst_22727 = (state_22849[14]);var inst_22726 = (state_22849[15]);var inst_22728 = (state_22849[16]);var inst_22729 = (state_22849[17]);var inst_22742 = (state_22849[2]);var inst_22743 = (inst_22729 + 1);var tmp22889 = inst_22727;var tmp22890 = inst_22726;var tmp22891 = inst_22728;var inst_22726__$1 = tmp22890;var inst_22727__$1 = tmp22889;var inst_22728__$1 = tmp22891;var inst_22729__$1 = inst_22743;var state_22849__$1 = (function (){var statearr_22894 = state_22849;(statearr_22894[27] = inst_22742);
(statearr_22894[14] = inst_22727__$1);
(statearr_22894[15] = inst_22726__$1);
(statearr_22894[16] = inst_22728__$1);
(statearr_22894[17] = inst_22729__$1);
return statearr_22894;
})();var statearr_22895_22966 = state_22849__$1;(statearr_22895_22966[2] = null);
(statearr_22895_22966[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 16))
{var inst_22746 = (state_22849[25]);var inst_22748 = cljs.core.chunked_seq_QMARK_.call(null,inst_22746);var state_22849__$1 = state_22849;if(inst_22748)
{var statearr_22896_22967 = state_22849__$1;(statearr_22896_22967[1] = 19);
} else
{var statearr_22897_22968 = state_22849__$1;(statearr_22897_22968[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 17))
{var state_22849__$1 = state_22849;var statearr_22898_22969 = state_22849__$1;(statearr_22898_22969[2] = null);
(statearr_22898_22969[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 18))
{var inst_22770 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22899_22970 = state_22849__$1;(statearr_22899_22970[2] = inst_22770);
(statearr_22899_22970[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 19))
{var inst_22746 = (state_22849[25]);var inst_22750 = cljs.core.chunk_first.call(null,inst_22746);var inst_22751 = cljs.core.chunk_rest.call(null,inst_22746);var inst_22752 = cljs.core.count.call(null,inst_22750);var inst_22726 = inst_22751;var inst_22727 = inst_22750;var inst_22728 = inst_22752;var inst_22729 = 0;var state_22849__$1 = (function (){var statearr_22900 = state_22849;(statearr_22900[14] = inst_22727);
(statearr_22900[15] = inst_22726);
(statearr_22900[16] = inst_22728);
(statearr_22900[17] = inst_22729);
return statearr_22900;
})();var statearr_22901_22971 = state_22849__$1;(statearr_22901_22971[2] = null);
(statearr_22901_22971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 20))
{var inst_22746 = (state_22849[25]);var inst_22756 = cljs.core.first.call(null,inst_22746);var inst_22757 = cljs.core.nth.call(null,inst_22756,0,null);var inst_22758 = cljs.core.nth.call(null,inst_22756,1,null);var state_22849__$1 = (function (){var statearr_22902 = state_22849;(statearr_22902[28] = inst_22757);
return statearr_22902;
})();if(cljs.core.truth_(inst_22758))
{var statearr_22903_22972 = state_22849__$1;(statearr_22903_22972[1] = 22);
} else
{var statearr_22904_22973 = state_22849__$1;(statearr_22904_22973[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 21))
{var inst_22767 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22905_22974 = state_22849__$1;(statearr_22905_22974[2] = inst_22767);
(statearr_22905_22974[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 22))
{var inst_22757 = (state_22849[28]);var inst_22760 = cljs.core.async.close_BANG_.call(null,inst_22757);var state_22849__$1 = state_22849;var statearr_22906_22975 = state_22849__$1;(statearr_22906_22975[2] = inst_22760);
(statearr_22906_22975[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 23))
{var state_22849__$1 = state_22849;var statearr_22907_22976 = state_22849__$1;(statearr_22907_22976[2] = null);
(statearr_22907_22976[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 24))
{var inst_22746 = (state_22849[25]);var inst_22763 = (state_22849[2]);var inst_22764 = cljs.core.next.call(null,inst_22746);var inst_22726 = inst_22764;var inst_22727 = null;var inst_22728 = 0;var inst_22729 = 0;var state_22849__$1 = (function (){var statearr_22908 = state_22849;(statearr_22908[14] = inst_22727);
(statearr_22908[15] = inst_22726);
(statearr_22908[16] = inst_22728);
(statearr_22908[17] = inst_22729);
(statearr_22908[29] = inst_22763);
return statearr_22908;
})();var statearr_22909_22977 = state_22849__$1;(statearr_22909_22977[2] = null);
(statearr_22909_22977[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 25))
{var inst_22787 = (state_22849[11]);var inst_22788 = (state_22849[12]);var inst_22790 = (inst_22788 < inst_22787);var inst_22791 = inst_22790;var state_22849__$1 = state_22849;if(cljs.core.truth_(inst_22791))
{var statearr_22910_22978 = state_22849__$1;(statearr_22910_22978[1] = 27);
} else
{var statearr_22911_22979 = state_22849__$1;(statearr_22911_22979[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 26))
{var inst_22777 = (state_22849[19]);var inst_22835 = (state_22849[2]);var inst_22836 = cljs.core.seq.call(null,inst_22777);var state_22849__$1 = (function (){var statearr_22912 = state_22849;(statearr_22912[30] = inst_22835);
return statearr_22912;
})();if(inst_22836)
{var statearr_22913_22980 = state_22849__$1;(statearr_22913_22980[1] = 42);
} else
{var statearr_22914_22981 = state_22849__$1;(statearr_22914_22981[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 27))
{var inst_22786 = (state_22849[10]);var inst_22788 = (state_22849[12]);var inst_22793 = cljs.core._nth.call(null,inst_22786,inst_22788);var state_22849__$1 = (function (){var statearr_22915 = state_22849;(statearr_22915[8] = inst_22793);
return statearr_22915;
})();var statearr_22916_22982 = state_22849__$1;(statearr_22916_22982[2] = null);
(statearr_22916_22982[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 28))
{var inst_22785 = (state_22849[13]);var inst_22806 = (state_22849[9]);var inst_22806__$1 = cljs.core.seq.call(null,inst_22785);var state_22849__$1 = (function (){var statearr_22920 = state_22849;(statearr_22920[9] = inst_22806__$1);
return statearr_22920;
})();if(inst_22806__$1)
{var statearr_22921_22983 = state_22849__$1;(statearr_22921_22983[1] = 33);
} else
{var statearr_22922_22984 = state_22849__$1;(statearr_22922_22984[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 29))
{var inst_22833 = (state_22849[2]);var state_22849__$1 = state_22849;var statearr_22923_22985 = state_22849__$1;(statearr_22923_22985[2] = inst_22833);
(statearr_22923_22985[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 30))
{var inst_22786 = (state_22849[10]);var inst_22787 = (state_22849[11]);var inst_22788 = (state_22849[12]);var inst_22785 = (state_22849[13]);var inst_22802 = (state_22849[2]);var inst_22803 = (inst_22788 + 1);var tmp22917 = inst_22786;var tmp22918 = inst_22787;var tmp22919 = inst_22785;var inst_22785__$1 = tmp22919;var inst_22786__$1 = tmp22917;var inst_22787__$1 = tmp22918;var inst_22788__$1 = inst_22803;var state_22849__$1 = (function (){var statearr_22924 = state_22849;(statearr_22924[10] = inst_22786__$1);
(statearr_22924[11] = inst_22787__$1);
(statearr_22924[12] = inst_22788__$1);
(statearr_22924[31] = inst_22802);
(statearr_22924[13] = inst_22785__$1);
return statearr_22924;
})();var statearr_22925_22986 = state_22849__$1;(statearr_22925_22986[2] = null);
(statearr_22925_22986[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22850 === 31))
{var inst_22793 = (state_22849[8]);var inst_22794 = (state_22849[2]);var inst_22795 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22796 = cljs.core.async.untap_STAR_.call(null,m,inst_22793);var state_22849__$1 = (function (){var statearr_22926 = state_22849;(statearr_22926[32] = inst_22795);
(statearr_22926[33] = inst_22794);
return statearr_22926;
})();var statearr_22927_22987 = state_22849__$1;(statearr_22927_22987[2] = inst_22796);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849__$1);
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
}
}
}
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_22931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22931[0] = state_machine__14083__auto__);
(statearr_22931[1] = 1);
return statearr_22931;
});
var state_machine__14083__auto____1 = (function (state_22849){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_22849);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e22932){if((e22932 instanceof Object))
{var ex__14086__auto__ = e22932;var statearr_22933_22988 = state_22849;(statearr_22933_22988[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22989 = state_22849;
state_22849 = G__22989;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_22849){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_22849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_22934 = f__14153__auto__.call(null);(statearr_22934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___22935);
return statearr_22934;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj22991 = {};return obj22991;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10317__auto__ = m;if(and__10317__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10317__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10956__auto__ = (((m == null))?null:m);return (function (){var or__10329__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t23101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23101 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23102){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta23102 = meta23102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23101.cljs$lang$type = true;
cljs.core.async.t23101.cljs$lang$ctorStr = "cljs.core.async/t23101";
cljs.core.async.t23101.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t23101");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23101.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23103){var self__ = this;
var _23103__$1 = this;return self__.meta23102;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23103,meta23102__$1){var self__ = this;
var _23103__$1 = this;return (new cljs.core.async.t23101(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23102__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23101 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23101(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23102){return (new cljs.core.async.t23101(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23102));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23101(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__14152__auto___23210 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_23168){var state_val_23169 = (state_23168[1]);if((state_val_23169 === 1))
{var inst_23107 = (state_23168[7]);var inst_23107__$1 = calc_state.call(null);var inst_23108 = cljs.core.seq_QMARK_.call(null,inst_23107__$1);var state_23168__$1 = (function (){var statearr_23170 = state_23168;(statearr_23170[7] = inst_23107__$1);
return statearr_23170;
})();if(inst_23108)
{var statearr_23171_23211 = state_23168__$1;(statearr_23171_23211[1] = 2);
} else
{var statearr_23172_23212 = state_23168__$1;(statearr_23172_23212[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 2))
{var inst_23107 = (state_23168[7]);var inst_23110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23107);var state_23168__$1 = state_23168;var statearr_23173_23213 = state_23168__$1;(statearr_23173_23213[2] = inst_23110);
(statearr_23173_23213[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 3))
{var inst_23107 = (state_23168[7]);var state_23168__$1 = state_23168;var statearr_23174_23214 = state_23168__$1;(statearr_23174_23214[2] = inst_23107);
(statearr_23174_23214[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 4))
{var inst_23107 = (state_23168[7]);var inst_23113 = (state_23168[2]);var inst_23114 = cljs.core.get.call(null,inst_23113,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23115 = cljs.core.get.call(null,inst_23113,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23116 = cljs.core.get.call(null,inst_23113,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_23117 = inst_23107;var state_23168__$1 = (function (){var statearr_23175 = state_23168;(statearr_23175[8] = inst_23116);
(statearr_23175[9] = inst_23117);
(statearr_23175[10] = inst_23115);
(statearr_23175[11] = inst_23114);
return statearr_23175;
})();var statearr_23176_23215 = state_23168__$1;(statearr_23176_23215[2] = null);
(statearr_23176_23215[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 5))
{var inst_23117 = (state_23168[9]);var inst_23120 = cljs.core.seq_QMARK_.call(null,inst_23117);var state_23168__$1 = state_23168;if(inst_23120)
{var statearr_23177_23216 = state_23168__$1;(statearr_23177_23216[1] = 7);
} else
{var statearr_23178_23217 = state_23168__$1;(statearr_23178_23217[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 6))
{var inst_23166 = (state_23168[2]);var state_23168__$1 = state_23168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23168__$1,inst_23166);
} else
{if((state_val_23169 === 7))
{var inst_23117 = (state_23168[9]);var inst_23122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23117);var state_23168__$1 = state_23168;var statearr_23179_23218 = state_23168__$1;(statearr_23179_23218[2] = inst_23122);
(statearr_23179_23218[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 8))
{var inst_23117 = (state_23168[9]);var state_23168__$1 = state_23168;var statearr_23180_23219 = state_23168__$1;(statearr_23180_23219[2] = inst_23117);
(statearr_23180_23219[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 9))
{var inst_23125 = (state_23168[12]);var inst_23125__$1 = (state_23168[2]);var inst_23126 = cljs.core.get.call(null,inst_23125__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23127 = cljs.core.get.call(null,inst_23125__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23128 = cljs.core.get.call(null,inst_23125__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_23168__$1 = (function (){var statearr_23181 = state_23168;(statearr_23181[12] = inst_23125__$1);
(statearr_23181[13] = inst_23127);
(statearr_23181[14] = inst_23128);
return statearr_23181;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23168__$1,10,inst_23126);
} else
{if((state_val_23169 === 10))
{var inst_23132 = (state_23168[15]);var inst_23133 = (state_23168[16]);var inst_23131 = (state_23168[2]);var inst_23132__$1 = cljs.core.nth.call(null,inst_23131,0,null);var inst_23133__$1 = cljs.core.nth.call(null,inst_23131,1,null);var inst_23134 = (inst_23132__$1 == null);var inst_23135 = cljs.core._EQ_.call(null,inst_23133__$1,change);var inst_23136 = (inst_23134) || (inst_23135);var state_23168__$1 = (function (){var statearr_23182 = state_23168;(statearr_23182[15] = inst_23132__$1);
(statearr_23182[16] = inst_23133__$1);
return statearr_23182;
})();if(cljs.core.truth_(inst_23136))
{var statearr_23183_23220 = state_23168__$1;(statearr_23183_23220[1] = 11);
} else
{var statearr_23184_23221 = state_23168__$1;(statearr_23184_23221[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 11))
{var inst_23132 = (state_23168[15]);var inst_23138 = (inst_23132 == null);var state_23168__$1 = state_23168;if(cljs.core.truth_(inst_23138))
{var statearr_23185_23222 = state_23168__$1;(statearr_23185_23222[1] = 14);
} else
{var statearr_23186_23223 = state_23168__$1;(statearr_23186_23223[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 12))
{var inst_23133 = (state_23168[16]);var inst_23147 = (state_23168[17]);var inst_23128 = (state_23168[14]);var inst_23147__$1 = inst_23128.call(null,inst_23133);var state_23168__$1 = (function (){var statearr_23187 = state_23168;(statearr_23187[17] = inst_23147__$1);
return statearr_23187;
})();if(cljs.core.truth_(inst_23147__$1))
{var statearr_23188_23224 = state_23168__$1;(statearr_23188_23224[1] = 17);
} else
{var statearr_23189_23225 = state_23168__$1;(statearr_23189_23225[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 13))
{var inst_23164 = (state_23168[2]);var state_23168__$1 = state_23168;var statearr_23190_23226 = state_23168__$1;(statearr_23190_23226[2] = inst_23164);
(statearr_23190_23226[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 14))
{var inst_23133 = (state_23168[16]);var inst_23140 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23133);var state_23168__$1 = state_23168;var statearr_23191_23227 = state_23168__$1;(statearr_23191_23227[2] = inst_23140);
(statearr_23191_23227[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 15))
{var state_23168__$1 = state_23168;var statearr_23192_23228 = state_23168__$1;(statearr_23192_23228[2] = null);
(statearr_23192_23228[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 16))
{var inst_23143 = (state_23168[2]);var inst_23144 = calc_state.call(null);var inst_23117 = inst_23144;var state_23168__$1 = (function (){var statearr_23193 = state_23168;(statearr_23193[9] = inst_23117);
(statearr_23193[18] = inst_23143);
return statearr_23193;
})();var statearr_23194_23229 = state_23168__$1;(statearr_23194_23229[2] = null);
(statearr_23194_23229[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 17))
{var inst_23147 = (state_23168[17]);var state_23168__$1 = state_23168;var statearr_23195_23230 = state_23168__$1;(statearr_23195_23230[2] = inst_23147);
(statearr_23195_23230[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 18))
{var inst_23133 = (state_23168[16]);var inst_23127 = (state_23168[13]);var inst_23128 = (state_23168[14]);var inst_23150 = cljs.core.empty_QMARK_.call(null,inst_23128);var inst_23151 = inst_23127.call(null,inst_23133);var inst_23152 = cljs.core.not.call(null,inst_23151);var inst_23153 = (inst_23150) && (inst_23152);var state_23168__$1 = state_23168;var statearr_23196_23231 = state_23168__$1;(statearr_23196_23231[2] = inst_23153);
(statearr_23196_23231[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 19))
{var inst_23155 = (state_23168[2]);var state_23168__$1 = state_23168;if(cljs.core.truth_(inst_23155))
{var statearr_23197_23232 = state_23168__$1;(statearr_23197_23232[1] = 20);
} else
{var statearr_23198_23233 = state_23168__$1;(statearr_23198_23233[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 20))
{var inst_23132 = (state_23168[15]);var state_23168__$1 = state_23168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23168__$1,23,out,inst_23132);
} else
{if((state_val_23169 === 21))
{var state_23168__$1 = state_23168;var statearr_23199_23234 = state_23168__$1;(statearr_23199_23234[2] = null);
(statearr_23199_23234[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 22))
{var inst_23125 = (state_23168[12]);var inst_23161 = (state_23168[2]);var inst_23117 = inst_23125;var state_23168__$1 = (function (){var statearr_23200 = state_23168;(statearr_23200[9] = inst_23117);
(statearr_23200[19] = inst_23161);
return statearr_23200;
})();var statearr_23201_23235 = state_23168__$1;(statearr_23201_23235[2] = null);
(statearr_23201_23235[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23169 === 23))
{var inst_23158 = (state_23168[2]);var state_23168__$1 = state_23168;var statearr_23202_23236 = state_23168__$1;(statearr_23202_23236[2] = inst_23158);
(statearr_23202_23236[1] = 22);
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
}
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_23206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23206[0] = state_machine__14083__auto__);
(statearr_23206[1] = 1);
return statearr_23206;
});
var state_machine__14083__auto____1 = (function (state_23168){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_23168);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e23207){if((e23207 instanceof Object))
{var ex__14086__auto__ = e23207;var statearr_23208_23237 = state_23168;(statearr_23208_23237[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23238 = state_23168;
state_23168 = G__23238;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_23168){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_23168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_23209 = f__14153__auto__.call(null);(statearr_23209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___23210);
return statearr_23209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj23240 = {};return obj23240;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10317__auto__ = p;if(and__10317__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10317__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10956__auto__ = (((p == null))?null:p);return (function (){var or__10329__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10317__auto__ = p;if(and__10317__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10317__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10956__auto__ = (((p == null))?null:p);return (function (){var or__10329__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10317__auto__ = p;if(and__10317__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10317__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10956__auto__ = (((p == null))?null:p);return (function (){var or__10329__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10317__auto__ = p;if(and__10317__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10317__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10956__auto__ = (((p == null))?null:p);return (function (){var or__10329__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10956__auto__)]);if(or__10329__auto__)
{return or__10329__auto__;
} else
{var or__10329__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10329__auto____$1)
{return or__10329__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__10329__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10329__auto__,mults){
return (function (p1__23241_SHARP_){if(cljs.core.truth_(p1__23241_SHARP_.call(null,topic)))
{return p1__23241_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23241_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10329__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23366 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23367){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23367 = meta23367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23366.cljs$lang$type = true;
cljs.core.async.t23366.cljs$lang$ctorStr = "cljs.core.async/t23366";
cljs.core.async.t23366.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t23366");
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23366.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23366.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23368){var self__ = this;
var _23368__$1 = this;return self__.meta23367;
});})(mults,ensure_mult))
;
cljs.core.async.t23366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23368,meta23367__$1){var self__ = this;
var _23368__$1 = this;return (new cljs.core.async.t23366(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23367__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23366 = ((function (mults,ensure_mult){
return (function __GT_t23366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23367){return (new cljs.core.async.t23366(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23367));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23366(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14152__auto___23490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_23442){var state_val_23443 = (state_23442[1]);if((state_val_23443 === 1))
{var state_23442__$1 = state_23442;var statearr_23444_23491 = state_23442__$1;(statearr_23444_23491[2] = null);
(statearr_23444_23491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 2))
{var state_23442__$1 = state_23442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23442__$1,4,ch);
} else
{if((state_val_23443 === 3))
{var inst_23440 = (state_23442[2]);var state_23442__$1 = state_23442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23442__$1,inst_23440);
} else
{if((state_val_23443 === 4))
{var inst_23371 = (state_23442[7]);var inst_23371__$1 = (state_23442[2]);var inst_23372 = (inst_23371__$1 == null);var state_23442__$1 = (function (){var statearr_23445 = state_23442;(statearr_23445[7] = inst_23371__$1);
return statearr_23445;
})();if(cljs.core.truth_(inst_23372))
{var statearr_23446_23492 = state_23442__$1;(statearr_23446_23492[1] = 5);
} else
{var statearr_23447_23493 = state_23442__$1;(statearr_23447_23493[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 5))
{var inst_23378 = cljs.core.deref.call(null,mults);var inst_23379 = cljs.core.vals.call(null,inst_23378);var inst_23380 = cljs.core.seq.call(null,inst_23379);var inst_23381 = inst_23380;var inst_23382 = null;var inst_23383 = 0;var inst_23384 = 0;var state_23442__$1 = (function (){var statearr_23448 = state_23442;(statearr_23448[8] = inst_23383);
(statearr_23448[9] = inst_23384);
(statearr_23448[10] = inst_23382);
(statearr_23448[11] = inst_23381);
return statearr_23448;
})();var statearr_23449_23494 = state_23442__$1;(statearr_23449_23494[2] = null);
(statearr_23449_23494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 6))
{var inst_23419 = (state_23442[12]);var inst_23371 = (state_23442[7]);var inst_23421 = (state_23442[13]);var inst_23419__$1 = topic_fn.call(null,inst_23371);var inst_23420 = cljs.core.deref.call(null,mults);var inst_23421__$1 = cljs.core.get.call(null,inst_23420,inst_23419__$1);var state_23442__$1 = (function (){var statearr_23450 = state_23442;(statearr_23450[12] = inst_23419__$1);
(statearr_23450[13] = inst_23421__$1);
return statearr_23450;
})();if(cljs.core.truth_(inst_23421__$1))
{var statearr_23451_23495 = state_23442__$1;(statearr_23451_23495[1] = 19);
} else
{var statearr_23452_23496 = state_23442__$1;(statearr_23452_23496[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 7))
{var inst_23438 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23453_23497 = state_23442__$1;(statearr_23453_23497[2] = inst_23438);
(statearr_23453_23497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 8))
{var inst_23383 = (state_23442[8]);var inst_23384 = (state_23442[9]);var inst_23386 = (inst_23384 < inst_23383);var inst_23387 = inst_23386;var state_23442__$1 = state_23442;if(cljs.core.truth_(inst_23387))
{var statearr_23457_23498 = state_23442__$1;(statearr_23457_23498[1] = 10);
} else
{var statearr_23458_23499 = state_23442__$1;(statearr_23458_23499[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 9))
{var inst_23417 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23459_23500 = state_23442__$1;(statearr_23459_23500[2] = inst_23417);
(statearr_23459_23500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 10))
{var inst_23383 = (state_23442[8]);var inst_23384 = (state_23442[9]);var inst_23382 = (state_23442[10]);var inst_23381 = (state_23442[11]);var inst_23389 = cljs.core._nth.call(null,inst_23382,inst_23384);var inst_23390 = cljs.core.async.muxch_STAR_.call(null,inst_23389);var inst_23391 = cljs.core.async.close_BANG_.call(null,inst_23390);var inst_23392 = (inst_23384 + 1);var tmp23454 = inst_23383;var tmp23455 = inst_23382;var tmp23456 = inst_23381;var inst_23381__$1 = tmp23456;var inst_23382__$1 = tmp23455;var inst_23383__$1 = tmp23454;var inst_23384__$1 = inst_23392;var state_23442__$1 = (function (){var statearr_23460 = state_23442;(statearr_23460[14] = inst_23391);
(statearr_23460[8] = inst_23383__$1);
(statearr_23460[9] = inst_23384__$1);
(statearr_23460[10] = inst_23382__$1);
(statearr_23460[11] = inst_23381__$1);
return statearr_23460;
})();var statearr_23461_23501 = state_23442__$1;(statearr_23461_23501[2] = null);
(statearr_23461_23501[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 11))
{var inst_23395 = (state_23442[15]);var inst_23381 = (state_23442[11]);var inst_23395__$1 = cljs.core.seq.call(null,inst_23381);var state_23442__$1 = (function (){var statearr_23462 = state_23442;(statearr_23462[15] = inst_23395__$1);
return statearr_23462;
})();if(inst_23395__$1)
{var statearr_23463_23502 = state_23442__$1;(statearr_23463_23502[1] = 13);
} else
{var statearr_23464_23503 = state_23442__$1;(statearr_23464_23503[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 12))
{var inst_23415 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23465_23504 = state_23442__$1;(statearr_23465_23504[2] = inst_23415);
(statearr_23465_23504[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 13))
{var inst_23395 = (state_23442[15]);var inst_23397 = cljs.core.chunked_seq_QMARK_.call(null,inst_23395);var state_23442__$1 = state_23442;if(inst_23397)
{var statearr_23466_23505 = state_23442__$1;(statearr_23466_23505[1] = 16);
} else
{var statearr_23467_23506 = state_23442__$1;(statearr_23467_23506[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 14))
{var state_23442__$1 = state_23442;var statearr_23468_23507 = state_23442__$1;(statearr_23468_23507[2] = null);
(statearr_23468_23507[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 15))
{var inst_23413 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23469_23508 = state_23442__$1;(statearr_23469_23508[2] = inst_23413);
(statearr_23469_23508[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 16))
{var inst_23395 = (state_23442[15]);var inst_23399 = cljs.core.chunk_first.call(null,inst_23395);var inst_23400 = cljs.core.chunk_rest.call(null,inst_23395);var inst_23401 = cljs.core.count.call(null,inst_23399);var inst_23381 = inst_23400;var inst_23382 = inst_23399;var inst_23383 = inst_23401;var inst_23384 = 0;var state_23442__$1 = (function (){var statearr_23470 = state_23442;(statearr_23470[8] = inst_23383);
(statearr_23470[9] = inst_23384);
(statearr_23470[10] = inst_23382);
(statearr_23470[11] = inst_23381);
return statearr_23470;
})();var statearr_23471_23509 = state_23442__$1;(statearr_23471_23509[2] = null);
(statearr_23471_23509[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 17))
{var inst_23395 = (state_23442[15]);var inst_23404 = cljs.core.first.call(null,inst_23395);var inst_23405 = cljs.core.async.muxch_STAR_.call(null,inst_23404);var inst_23406 = cljs.core.async.close_BANG_.call(null,inst_23405);var inst_23407 = cljs.core.next.call(null,inst_23395);var inst_23381 = inst_23407;var inst_23382 = null;var inst_23383 = 0;var inst_23384 = 0;var state_23442__$1 = (function (){var statearr_23472 = state_23442;(statearr_23472[16] = inst_23406);
(statearr_23472[8] = inst_23383);
(statearr_23472[9] = inst_23384);
(statearr_23472[10] = inst_23382);
(statearr_23472[11] = inst_23381);
return statearr_23472;
})();var statearr_23473_23510 = state_23442__$1;(statearr_23473_23510[2] = null);
(statearr_23473_23510[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 18))
{var inst_23410 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23474_23511 = state_23442__$1;(statearr_23474_23511[2] = inst_23410);
(statearr_23474_23511[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 19))
{var state_23442__$1 = state_23442;var statearr_23475_23512 = state_23442__$1;(statearr_23475_23512[2] = null);
(statearr_23475_23512[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 20))
{var state_23442__$1 = state_23442;var statearr_23476_23513 = state_23442__$1;(statearr_23476_23513[2] = null);
(statearr_23476_23513[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 21))
{var inst_23435 = (state_23442[2]);var state_23442__$1 = (function (){var statearr_23477 = state_23442;(statearr_23477[17] = inst_23435);
return statearr_23477;
})();var statearr_23478_23514 = state_23442__$1;(statearr_23478_23514[2] = null);
(statearr_23478_23514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 22))
{var inst_23432 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23479_23515 = state_23442__$1;(statearr_23479_23515[2] = inst_23432);
(statearr_23479_23515[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 23))
{var inst_23419 = (state_23442[12]);var inst_23423 = (state_23442[2]);var inst_23424 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23419);var state_23442__$1 = (function (){var statearr_23480 = state_23442;(statearr_23480[18] = inst_23423);
return statearr_23480;
})();var statearr_23481_23516 = state_23442__$1;(statearr_23481_23516[2] = inst_23424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23442__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23443 === 24))
{var inst_23371 = (state_23442[7]);var inst_23421 = (state_23442[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23442,23,Object,null,22);var inst_23428 = cljs.core.async.muxch_STAR_.call(null,inst_23421);var state_23442__$1 = state_23442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23442__$1,25,inst_23428,inst_23371);
} else
{if((state_val_23443 === 25))
{var inst_23430 = (state_23442[2]);var state_23442__$1 = state_23442;var statearr_23482_23517 = state_23442__$1;(statearr_23482_23517[2] = inst_23430);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23442__$1);
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
}
}
}
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_23486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23486[0] = state_machine__14083__auto__);
(statearr_23486[1] = 1);
return statearr_23486;
});
var state_machine__14083__auto____1 = (function (state_23442){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_23442);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e23487){if((e23487 instanceof Object))
{var ex__14086__auto__ = e23487;var statearr_23488_23518 = state_23442;(statearr_23488_23518[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23519 = state_23442;
state_23442 = G__23519;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_23442){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_23442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_23489 = f__14153__auto__.call(null);(statearr_23489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___23490);
return statearr_23489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__14152__auto___23656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_23626){var state_val_23627 = (state_23626[1]);if((state_val_23627 === 1))
{var state_23626__$1 = state_23626;var statearr_23628_23657 = state_23626__$1;(statearr_23628_23657[2] = null);
(statearr_23628_23657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 2))
{var inst_23589 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23590 = 0;var state_23626__$1 = (function (){var statearr_23629 = state_23626;(statearr_23629[7] = inst_23590);
(statearr_23629[8] = inst_23589);
return statearr_23629;
})();var statearr_23630_23658 = state_23626__$1;(statearr_23630_23658[2] = null);
(statearr_23630_23658[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 3))
{var inst_23624 = (state_23626[2]);var state_23626__$1 = state_23626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23626__$1,inst_23624);
} else
{if((state_val_23627 === 4))
{var inst_23590 = (state_23626[7]);var inst_23592 = (inst_23590 < cnt);var state_23626__$1 = state_23626;if(cljs.core.truth_(inst_23592))
{var statearr_23631_23659 = state_23626__$1;(statearr_23631_23659[1] = 6);
} else
{var statearr_23632_23660 = state_23626__$1;(statearr_23632_23660[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 5))
{var inst_23610 = (state_23626[2]);var state_23626__$1 = (function (){var statearr_23633 = state_23626;(statearr_23633[9] = inst_23610);
return statearr_23633;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23626__$1,12,dchan);
} else
{if((state_val_23627 === 6))
{var state_23626__$1 = state_23626;var statearr_23634_23661 = state_23626__$1;(statearr_23634_23661[2] = null);
(statearr_23634_23661[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 7))
{var state_23626__$1 = state_23626;var statearr_23635_23662 = state_23626__$1;(statearr_23635_23662[2] = null);
(statearr_23635_23662[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 8))
{var inst_23608 = (state_23626[2]);var state_23626__$1 = state_23626;var statearr_23636_23663 = state_23626__$1;(statearr_23636_23663[2] = inst_23608);
(statearr_23636_23663[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 9))
{var inst_23590 = (state_23626[7]);var inst_23603 = (state_23626[2]);var inst_23604 = (inst_23590 + 1);var inst_23590__$1 = inst_23604;var state_23626__$1 = (function (){var statearr_23637 = state_23626;(statearr_23637[7] = inst_23590__$1);
(statearr_23637[10] = inst_23603);
return statearr_23637;
})();var statearr_23638_23664 = state_23626__$1;(statearr_23638_23664[2] = null);
(statearr_23638_23664[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 10))
{var inst_23594 = (state_23626[2]);var inst_23595 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23626__$1 = (function (){var statearr_23639 = state_23626;(statearr_23639[11] = inst_23594);
return statearr_23639;
})();var statearr_23640_23665 = state_23626__$1;(statearr_23640_23665[2] = inst_23595);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23626__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 11))
{var inst_23590 = (state_23626[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23626,10,Object,null,9);var inst_23599 = chs__$1.call(null,inst_23590);var inst_23600 = done.call(null,inst_23590);var inst_23601 = cljs.core.async.take_BANG_.call(null,inst_23599,inst_23600);var state_23626__$1 = state_23626;var statearr_23641_23666 = state_23626__$1;(statearr_23641_23666[2] = inst_23601);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23626__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 12))
{var inst_23612 = (state_23626[12]);var inst_23612__$1 = (state_23626[2]);var inst_23613 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23612__$1);var state_23626__$1 = (function (){var statearr_23642 = state_23626;(statearr_23642[12] = inst_23612__$1);
return statearr_23642;
})();if(cljs.core.truth_(inst_23613))
{var statearr_23643_23667 = state_23626__$1;(statearr_23643_23667[1] = 13);
} else
{var statearr_23644_23668 = state_23626__$1;(statearr_23644_23668[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 13))
{var inst_23615 = cljs.core.async.close_BANG_.call(null,out);var state_23626__$1 = state_23626;var statearr_23645_23669 = state_23626__$1;(statearr_23645_23669[2] = inst_23615);
(statearr_23645_23669[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 14))
{var inst_23612 = (state_23626[12]);var inst_23617 = cljs.core.apply.call(null,f,inst_23612);var state_23626__$1 = state_23626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23626__$1,16,out,inst_23617);
} else
{if((state_val_23627 === 15))
{var inst_23622 = (state_23626[2]);var state_23626__$1 = state_23626;var statearr_23646_23670 = state_23626__$1;(statearr_23646_23670[2] = inst_23622);
(statearr_23646_23670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23627 === 16))
{var inst_23619 = (state_23626[2]);var state_23626__$1 = (function (){var statearr_23647 = state_23626;(statearr_23647[13] = inst_23619);
return statearr_23647;
})();var statearr_23648_23671 = state_23626__$1;(statearr_23648_23671[2] = null);
(statearr_23648_23671[1] = 2);
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
}
}
}
}
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_23652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23652[0] = state_machine__14083__auto__);
(statearr_23652[1] = 1);
return statearr_23652;
});
var state_machine__14083__auto____1 = (function (state_23626){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_23626);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e23653){if((e23653 instanceof Object))
{var ex__14086__auto__ = e23653;var statearr_23654_23672 = state_23626;(statearr_23654_23672[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23673 = state_23626;
state_23626 = G__23673;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_23626){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_23626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_23655 = f__14153__auto__.call(null);(statearr_23655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___23656);
return statearr_23655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14152__auto___23781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_23757){var state_val_23758 = (state_23757[1]);if((state_val_23758 === 1))
{var inst_23728 = cljs.core.vec.call(null,chs);var inst_23729 = inst_23728;var state_23757__$1 = (function (){var statearr_23759 = state_23757;(statearr_23759[7] = inst_23729);
return statearr_23759;
})();var statearr_23760_23782 = state_23757__$1;(statearr_23760_23782[2] = null);
(statearr_23760_23782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 2))
{var inst_23729 = (state_23757[7]);var inst_23731 = cljs.core.count.call(null,inst_23729);var inst_23732 = (inst_23731 > 0);var state_23757__$1 = state_23757;if(cljs.core.truth_(inst_23732))
{var statearr_23761_23783 = state_23757__$1;(statearr_23761_23783[1] = 4);
} else
{var statearr_23762_23784 = state_23757__$1;(statearr_23762_23784[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 3))
{var inst_23755 = (state_23757[2]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23757__$1,inst_23755);
} else
{if((state_val_23758 === 4))
{var inst_23729 = (state_23757[7]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23757__$1,7,inst_23729);
} else
{if((state_val_23758 === 5))
{var inst_23751 = cljs.core.async.close_BANG_.call(null,out);var state_23757__$1 = state_23757;var statearr_23763_23785 = state_23757__$1;(statearr_23763_23785[2] = inst_23751);
(statearr_23763_23785[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 6))
{var inst_23753 = (state_23757[2]);var state_23757__$1 = state_23757;var statearr_23764_23786 = state_23757__$1;(statearr_23764_23786[2] = inst_23753);
(statearr_23764_23786[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 7))
{var inst_23737 = (state_23757[8]);var inst_23736 = (state_23757[9]);var inst_23736__$1 = (state_23757[2]);var inst_23737__$1 = cljs.core.nth.call(null,inst_23736__$1,0,null);var inst_23738 = cljs.core.nth.call(null,inst_23736__$1,1,null);var inst_23739 = (inst_23737__$1 == null);var state_23757__$1 = (function (){var statearr_23765 = state_23757;(statearr_23765[8] = inst_23737__$1);
(statearr_23765[9] = inst_23736__$1);
(statearr_23765[10] = inst_23738);
return statearr_23765;
})();if(cljs.core.truth_(inst_23739))
{var statearr_23766_23787 = state_23757__$1;(statearr_23766_23787[1] = 8);
} else
{var statearr_23767_23788 = state_23757__$1;(statearr_23767_23788[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 8))
{var inst_23729 = (state_23757[7]);var inst_23737 = (state_23757[8]);var inst_23736 = (state_23757[9]);var inst_23738 = (state_23757[10]);var inst_23741 = (function (){var c = inst_23738;var v = inst_23737;var vec__23734 = inst_23736;var cs = inst_23729;return ((function (c,v,vec__23734,cs,inst_23729,inst_23737,inst_23736,inst_23738,state_val_23758){
return (function (p1__23674_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23674_SHARP_);
});
;})(c,v,vec__23734,cs,inst_23729,inst_23737,inst_23736,inst_23738,state_val_23758))
})();var inst_23742 = cljs.core.filterv.call(null,inst_23741,inst_23729);var inst_23729__$1 = inst_23742;var state_23757__$1 = (function (){var statearr_23768 = state_23757;(statearr_23768[7] = inst_23729__$1);
return statearr_23768;
})();var statearr_23769_23789 = state_23757__$1;(statearr_23769_23789[2] = null);
(statearr_23769_23789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 9))
{var inst_23737 = (state_23757[8]);var state_23757__$1 = state_23757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23757__$1,11,out,inst_23737);
} else
{if((state_val_23758 === 10))
{var inst_23749 = (state_23757[2]);var state_23757__$1 = state_23757;var statearr_23771_23790 = state_23757__$1;(statearr_23771_23790[2] = inst_23749);
(statearr_23771_23790[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23758 === 11))
{var inst_23729 = (state_23757[7]);var inst_23746 = (state_23757[2]);var tmp23770 = inst_23729;var inst_23729__$1 = tmp23770;var state_23757__$1 = (function (){var statearr_23772 = state_23757;(statearr_23772[7] = inst_23729__$1);
(statearr_23772[11] = inst_23746);
return statearr_23772;
})();var statearr_23773_23791 = state_23757__$1;(statearr_23773_23791[2] = null);
(statearr_23773_23791[1] = 2);
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
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_23777 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23777[0] = state_machine__14083__auto__);
(statearr_23777[1] = 1);
return statearr_23777;
});
var state_machine__14083__auto____1 = (function (state_23757){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_23757);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e23778){if((e23778 instanceof Object))
{var ex__14086__auto__ = e23778;var statearr_23779_23792 = state_23757;(statearr_23779_23792[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23793 = state_23757;
state_23757 = G__23793;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_23757){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_23757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_23780 = f__14153__auto__.call(null);(statearr_23780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___23781);
return statearr_23780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14152__auto___23886 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_23863){var state_val_23864 = (state_23863[1]);if((state_val_23864 === 1))
{var inst_23840 = 0;var state_23863__$1 = (function (){var statearr_23865 = state_23863;(statearr_23865[7] = inst_23840);
return statearr_23865;
})();var statearr_23866_23887 = state_23863__$1;(statearr_23866_23887[2] = null);
(statearr_23866_23887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 2))
{var inst_23840 = (state_23863[7]);var inst_23842 = (inst_23840 < n);var state_23863__$1 = state_23863;if(cljs.core.truth_(inst_23842))
{var statearr_23867_23888 = state_23863__$1;(statearr_23867_23888[1] = 4);
} else
{var statearr_23868_23889 = state_23863__$1;(statearr_23868_23889[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 3))
{var inst_23860 = (state_23863[2]);var inst_23861 = cljs.core.async.close_BANG_.call(null,out);var state_23863__$1 = (function (){var statearr_23869 = state_23863;(statearr_23869[8] = inst_23860);
return statearr_23869;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23863__$1,inst_23861);
} else
{if((state_val_23864 === 4))
{var state_23863__$1 = state_23863;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23863__$1,7,ch);
} else
{if((state_val_23864 === 5))
{var state_23863__$1 = state_23863;var statearr_23870_23890 = state_23863__$1;(statearr_23870_23890[2] = null);
(statearr_23870_23890[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 6))
{var inst_23858 = (state_23863[2]);var state_23863__$1 = state_23863;var statearr_23871_23891 = state_23863__$1;(statearr_23871_23891[2] = inst_23858);
(statearr_23871_23891[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 7))
{var inst_23845 = (state_23863[9]);var inst_23845__$1 = (state_23863[2]);var inst_23846 = (inst_23845__$1 == null);var inst_23847 = cljs.core.not.call(null,inst_23846);var state_23863__$1 = (function (){var statearr_23872 = state_23863;(statearr_23872[9] = inst_23845__$1);
return statearr_23872;
})();if(inst_23847)
{var statearr_23873_23892 = state_23863__$1;(statearr_23873_23892[1] = 8);
} else
{var statearr_23874_23893 = state_23863__$1;(statearr_23874_23893[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 8))
{var inst_23845 = (state_23863[9]);var state_23863__$1 = state_23863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23863__$1,11,out,inst_23845);
} else
{if((state_val_23864 === 9))
{var state_23863__$1 = state_23863;var statearr_23875_23894 = state_23863__$1;(statearr_23875_23894[2] = null);
(statearr_23875_23894[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 10))
{var inst_23855 = (state_23863[2]);var state_23863__$1 = state_23863;var statearr_23876_23895 = state_23863__$1;(statearr_23876_23895[2] = inst_23855);
(statearr_23876_23895[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23864 === 11))
{var inst_23840 = (state_23863[7]);var inst_23850 = (state_23863[2]);var inst_23851 = (inst_23840 + 1);var inst_23840__$1 = inst_23851;var state_23863__$1 = (function (){var statearr_23877 = state_23863;(statearr_23877[7] = inst_23840__$1);
(statearr_23877[10] = inst_23850);
return statearr_23877;
})();var statearr_23878_23896 = state_23863__$1;(statearr_23878_23896[2] = null);
(statearr_23878_23896[1] = 2);
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
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_23882 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23882[0] = state_machine__14083__auto__);
(statearr_23882[1] = 1);
return statearr_23882;
});
var state_machine__14083__auto____1 = (function (state_23863){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_23863);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e23883){if((e23883 instanceof Object))
{var ex__14086__auto__ = e23883;var statearr_23884_23897 = state_23863;(statearr_23884_23897[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23898 = state_23863;
state_23863 = G__23898;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_23863){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_23863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_23885 = f__14153__auto__.call(null);(statearr_23885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___23886);
return statearr_23885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14152__auto___23995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_23970){var state_val_23971 = (state_23970[1]);if((state_val_23971 === 1))
{var inst_23947 = null;var state_23970__$1 = (function (){var statearr_23972 = state_23970;(statearr_23972[7] = inst_23947);
return statearr_23972;
})();var statearr_23973_23996 = state_23970__$1;(statearr_23973_23996[2] = null);
(statearr_23973_23996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 2))
{var state_23970__$1 = state_23970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23970__$1,4,ch);
} else
{if((state_val_23971 === 3))
{var inst_23967 = (state_23970[2]);var inst_23968 = cljs.core.async.close_BANG_.call(null,out);var state_23970__$1 = (function (){var statearr_23974 = state_23970;(statearr_23974[8] = inst_23967);
return statearr_23974;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23970__$1,inst_23968);
} else
{if((state_val_23971 === 4))
{var inst_23950 = (state_23970[9]);var inst_23950__$1 = (state_23970[2]);var inst_23951 = (inst_23950__$1 == null);var inst_23952 = cljs.core.not.call(null,inst_23951);var state_23970__$1 = (function (){var statearr_23975 = state_23970;(statearr_23975[9] = inst_23950__$1);
return statearr_23975;
})();if(inst_23952)
{var statearr_23976_23997 = state_23970__$1;(statearr_23976_23997[1] = 5);
} else
{var statearr_23977_23998 = state_23970__$1;(statearr_23977_23998[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 5))
{var inst_23950 = (state_23970[9]);var inst_23947 = (state_23970[7]);var inst_23954 = cljs.core._EQ_.call(null,inst_23950,inst_23947);var state_23970__$1 = state_23970;if(inst_23954)
{var statearr_23978_23999 = state_23970__$1;(statearr_23978_23999[1] = 8);
} else
{var statearr_23979_24000 = state_23970__$1;(statearr_23979_24000[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 6))
{var state_23970__$1 = state_23970;var statearr_23981_24001 = state_23970__$1;(statearr_23981_24001[2] = null);
(statearr_23981_24001[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 7))
{var inst_23965 = (state_23970[2]);var state_23970__$1 = state_23970;var statearr_23982_24002 = state_23970__$1;(statearr_23982_24002[2] = inst_23965);
(statearr_23982_24002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 8))
{var inst_23947 = (state_23970[7]);var tmp23980 = inst_23947;var inst_23947__$1 = tmp23980;var state_23970__$1 = (function (){var statearr_23983 = state_23970;(statearr_23983[7] = inst_23947__$1);
return statearr_23983;
})();var statearr_23984_24003 = state_23970__$1;(statearr_23984_24003[2] = null);
(statearr_23984_24003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 9))
{var inst_23950 = (state_23970[9]);var state_23970__$1 = state_23970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23970__$1,11,out,inst_23950);
} else
{if((state_val_23971 === 10))
{var inst_23962 = (state_23970[2]);var state_23970__$1 = state_23970;var statearr_23985_24004 = state_23970__$1;(statearr_23985_24004[2] = inst_23962);
(statearr_23985_24004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23971 === 11))
{var inst_23950 = (state_23970[9]);var inst_23959 = (state_23970[2]);var inst_23947 = inst_23950;var state_23970__$1 = (function (){var statearr_23986 = state_23970;(statearr_23986[7] = inst_23947);
(statearr_23986[10] = inst_23959);
return statearr_23986;
})();var statearr_23987_24005 = state_23970__$1;(statearr_23987_24005[2] = null);
(statearr_23987_24005[1] = 2);
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
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_23991 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23991[0] = state_machine__14083__auto__);
(statearr_23991[1] = 1);
return statearr_23991;
});
var state_machine__14083__auto____1 = (function (state_23970){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_23970);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e23992){if((e23992 instanceof Object))
{var ex__14086__auto__ = e23992;var statearr_23993_24006 = state_23970;(statearr_23993_24006[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24007 = state_23970;
state_23970 = G__24007;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_23970){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_23970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_23994 = f__14153__auto__.call(null);(statearr_23994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___23995);
return statearr_23994;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14152__auto___24142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_24112){var state_val_24113 = (state_24112[1]);if((state_val_24113 === 1))
{var inst_24075 = (new Array(n));var inst_24076 = inst_24075;var inst_24077 = 0;var state_24112__$1 = (function (){var statearr_24114 = state_24112;(statearr_24114[7] = inst_24076);
(statearr_24114[8] = inst_24077);
return statearr_24114;
})();var statearr_24115_24143 = state_24112__$1;(statearr_24115_24143[2] = null);
(statearr_24115_24143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 2))
{var state_24112__$1 = state_24112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24112__$1,4,ch);
} else
{if((state_val_24113 === 3))
{var inst_24110 = (state_24112[2]);var state_24112__$1 = state_24112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24112__$1,inst_24110);
} else
{if((state_val_24113 === 4))
{var inst_24080 = (state_24112[9]);var inst_24080__$1 = (state_24112[2]);var inst_24081 = (inst_24080__$1 == null);var inst_24082 = cljs.core.not.call(null,inst_24081);var state_24112__$1 = (function (){var statearr_24116 = state_24112;(statearr_24116[9] = inst_24080__$1);
return statearr_24116;
})();if(inst_24082)
{var statearr_24117_24144 = state_24112__$1;(statearr_24117_24144[1] = 5);
} else
{var statearr_24118_24145 = state_24112__$1;(statearr_24118_24145[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 5))
{var inst_24085 = (state_24112[10]);var inst_24080 = (state_24112[9]);var inst_24076 = (state_24112[7]);var inst_24077 = (state_24112[8]);var inst_24084 = (inst_24076[inst_24077] = inst_24080);var inst_24085__$1 = (inst_24077 + 1);var inst_24086 = (inst_24085__$1 < n);var state_24112__$1 = (function (){var statearr_24119 = state_24112;(statearr_24119[11] = inst_24084);
(statearr_24119[10] = inst_24085__$1);
return statearr_24119;
})();if(cljs.core.truth_(inst_24086))
{var statearr_24120_24146 = state_24112__$1;(statearr_24120_24146[1] = 8);
} else
{var statearr_24121_24147 = state_24112__$1;(statearr_24121_24147[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 6))
{var inst_24077 = (state_24112[8]);var inst_24098 = (inst_24077 > 0);var state_24112__$1 = state_24112;if(cljs.core.truth_(inst_24098))
{var statearr_24123_24148 = state_24112__$1;(statearr_24123_24148[1] = 12);
} else
{var statearr_24124_24149 = state_24112__$1;(statearr_24124_24149[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 7))
{var inst_24108 = (state_24112[2]);var state_24112__$1 = state_24112;var statearr_24125_24150 = state_24112__$1;(statearr_24125_24150[2] = inst_24108);
(statearr_24125_24150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 8))
{var inst_24085 = (state_24112[10]);var inst_24076 = (state_24112[7]);var tmp24122 = inst_24076;var inst_24076__$1 = tmp24122;var inst_24077 = inst_24085;var state_24112__$1 = (function (){var statearr_24126 = state_24112;(statearr_24126[7] = inst_24076__$1);
(statearr_24126[8] = inst_24077);
return statearr_24126;
})();var statearr_24127_24151 = state_24112__$1;(statearr_24127_24151[2] = null);
(statearr_24127_24151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 9))
{var inst_24076 = (state_24112[7]);var inst_24090 = cljs.core.vec.call(null,inst_24076);var state_24112__$1 = state_24112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24112__$1,11,out,inst_24090);
} else
{if((state_val_24113 === 10))
{var inst_24096 = (state_24112[2]);var state_24112__$1 = state_24112;var statearr_24128_24152 = state_24112__$1;(statearr_24128_24152[2] = inst_24096);
(statearr_24128_24152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 11))
{var inst_24092 = (state_24112[2]);var inst_24093 = (new Array(n));var inst_24076 = inst_24093;var inst_24077 = 0;var state_24112__$1 = (function (){var statearr_24129 = state_24112;(statearr_24129[12] = inst_24092);
(statearr_24129[7] = inst_24076);
(statearr_24129[8] = inst_24077);
return statearr_24129;
})();var statearr_24130_24153 = state_24112__$1;(statearr_24130_24153[2] = null);
(statearr_24130_24153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 12))
{var inst_24076 = (state_24112[7]);var inst_24100 = cljs.core.vec.call(null,inst_24076);var state_24112__$1 = state_24112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24112__$1,15,out,inst_24100);
} else
{if((state_val_24113 === 13))
{var state_24112__$1 = state_24112;var statearr_24131_24154 = state_24112__$1;(statearr_24131_24154[2] = null);
(statearr_24131_24154[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 14))
{var inst_24105 = (state_24112[2]);var inst_24106 = cljs.core.async.close_BANG_.call(null,out);var state_24112__$1 = (function (){var statearr_24132 = state_24112;(statearr_24132[13] = inst_24105);
return statearr_24132;
})();var statearr_24133_24155 = state_24112__$1;(statearr_24133_24155[2] = inst_24106);
(statearr_24133_24155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24113 === 15))
{var inst_24102 = (state_24112[2]);var state_24112__$1 = state_24112;var statearr_24134_24156 = state_24112__$1;(statearr_24134_24156[2] = inst_24102);
(statearr_24134_24156[1] = 14);
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
}
}
}
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_24138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24138[0] = state_machine__14083__auto__);
(statearr_24138[1] = 1);
return statearr_24138;
});
var state_machine__14083__auto____1 = (function (state_24112){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_24112);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e24139){if((e24139 instanceof Object))
{var ex__14086__auto__ = e24139;var statearr_24140_24157 = state_24112;(statearr_24140_24157[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24158 = state_24112;
state_24112 = G__24158;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_24112){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_24112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_24141 = f__14153__auto__.call(null);(statearr_24141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___24142);
return statearr_24141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14152__auto___24301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14153__auto__ = (function (){var switch__14082__auto__ = (function (state_24271){var state_val_24272 = (state_24271[1]);if((state_val_24272 === 1))
{var inst_24230 = [];var inst_24231 = inst_24230;var inst_24232 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_24271__$1 = (function (){var statearr_24273 = state_24271;(statearr_24273[7] = inst_24232);
(statearr_24273[8] = inst_24231);
return statearr_24273;
})();var statearr_24274_24302 = state_24271__$1;(statearr_24274_24302[2] = null);
(statearr_24274_24302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 2))
{var state_24271__$1 = state_24271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24271__$1,4,ch);
} else
{if((state_val_24272 === 3))
{var inst_24269 = (state_24271[2]);var state_24271__$1 = state_24271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24271__$1,inst_24269);
} else
{if((state_val_24272 === 4))
{var inst_24235 = (state_24271[9]);var inst_24235__$1 = (state_24271[2]);var inst_24236 = (inst_24235__$1 == null);var inst_24237 = cljs.core.not.call(null,inst_24236);var state_24271__$1 = (function (){var statearr_24275 = state_24271;(statearr_24275[9] = inst_24235__$1);
return statearr_24275;
})();if(inst_24237)
{var statearr_24276_24303 = state_24271__$1;(statearr_24276_24303[1] = 5);
} else
{var statearr_24277_24304 = state_24271__$1;(statearr_24277_24304[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 5))
{var inst_24239 = (state_24271[10]);var inst_24235 = (state_24271[9]);var inst_24232 = (state_24271[7]);var inst_24239__$1 = f.call(null,inst_24235);var inst_24240 = cljs.core._EQ_.call(null,inst_24239__$1,inst_24232);var inst_24241 = cljs.core.keyword_identical_QMARK_.call(null,inst_24232,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_24242 = (inst_24240) || (inst_24241);var state_24271__$1 = (function (){var statearr_24278 = state_24271;(statearr_24278[10] = inst_24239__$1);
return statearr_24278;
})();if(cljs.core.truth_(inst_24242))
{var statearr_24279_24305 = state_24271__$1;(statearr_24279_24305[1] = 8);
} else
{var statearr_24280_24306 = state_24271__$1;(statearr_24280_24306[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 6))
{var inst_24231 = (state_24271[8]);var inst_24256 = inst_24231.length;var inst_24257 = (inst_24256 > 0);var state_24271__$1 = state_24271;if(cljs.core.truth_(inst_24257))
{var statearr_24282_24307 = state_24271__$1;(statearr_24282_24307[1] = 12);
} else
{var statearr_24283_24308 = state_24271__$1;(statearr_24283_24308[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 7))
{var inst_24267 = (state_24271[2]);var state_24271__$1 = state_24271;var statearr_24284_24309 = state_24271__$1;(statearr_24284_24309[2] = inst_24267);
(statearr_24284_24309[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 8))
{var inst_24239 = (state_24271[10]);var inst_24235 = (state_24271[9]);var inst_24231 = (state_24271[8]);var inst_24244 = inst_24231.push(inst_24235);var tmp24281 = inst_24231;var inst_24231__$1 = tmp24281;var inst_24232 = inst_24239;var state_24271__$1 = (function (){var statearr_24285 = state_24271;(statearr_24285[11] = inst_24244);
(statearr_24285[7] = inst_24232);
(statearr_24285[8] = inst_24231__$1);
return statearr_24285;
})();var statearr_24286_24310 = state_24271__$1;(statearr_24286_24310[2] = null);
(statearr_24286_24310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 9))
{var inst_24231 = (state_24271[8]);var inst_24247 = cljs.core.vec.call(null,inst_24231);var state_24271__$1 = state_24271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24271__$1,11,out,inst_24247);
} else
{if((state_val_24272 === 10))
{var inst_24254 = (state_24271[2]);var state_24271__$1 = state_24271;var statearr_24287_24311 = state_24271__$1;(statearr_24287_24311[2] = inst_24254);
(statearr_24287_24311[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 11))
{var inst_24239 = (state_24271[10]);var inst_24235 = (state_24271[9]);var inst_24249 = (state_24271[2]);var inst_24250 = [];var inst_24251 = inst_24250.push(inst_24235);var inst_24231 = inst_24250;var inst_24232 = inst_24239;var state_24271__$1 = (function (){var statearr_24288 = state_24271;(statearr_24288[12] = inst_24249);
(statearr_24288[13] = inst_24251);
(statearr_24288[7] = inst_24232);
(statearr_24288[8] = inst_24231);
return statearr_24288;
})();var statearr_24289_24312 = state_24271__$1;(statearr_24289_24312[2] = null);
(statearr_24289_24312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 12))
{var inst_24231 = (state_24271[8]);var inst_24259 = cljs.core.vec.call(null,inst_24231);var state_24271__$1 = state_24271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24271__$1,15,out,inst_24259);
} else
{if((state_val_24272 === 13))
{var state_24271__$1 = state_24271;var statearr_24290_24313 = state_24271__$1;(statearr_24290_24313[2] = null);
(statearr_24290_24313[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 14))
{var inst_24264 = (state_24271[2]);var inst_24265 = cljs.core.async.close_BANG_.call(null,out);var state_24271__$1 = (function (){var statearr_24291 = state_24271;(statearr_24291[14] = inst_24264);
return statearr_24291;
})();var statearr_24292_24314 = state_24271__$1;(statearr_24292_24314[2] = inst_24265);
(statearr_24292_24314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24272 === 15))
{var inst_24261 = (state_24271[2]);var state_24271__$1 = state_24271;var statearr_24293_24315 = state_24271__$1;(statearr_24293_24315[2] = inst_24261);
(statearr_24293_24315[1] = 14);
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
}
}
}
}
}
});return ((function (switch__14082__auto__){
return (function() {
var state_machine__14083__auto__ = null;
var state_machine__14083__auto____0 = (function (){var statearr_24297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24297[0] = state_machine__14083__auto__);
(statearr_24297[1] = 1);
return statearr_24297;
});
var state_machine__14083__auto____1 = (function (state_24271){while(true){
var ret_value__14084__auto__ = (function (){try{while(true){
var result__14085__auto__ = switch__14082__auto__.call(null,state_24271);if(cljs.core.keyword_identical_QMARK_.call(null,result__14085__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14085__auto__;
}
break;
}
}catch (e24298){if((e24298 instanceof Object))
{var ex__14086__auto__ = e24298;var statearr_24299_24316 = state_24271;(statearr_24299_24316[5] = ex__14086__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14084__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24317 = state_24271;
state_24271 = G__24317;
continue;
}
} else
{return ret_value__14084__auto__;
}
break;
}
});
state_machine__14083__auto__ = function(state_24271){
switch(arguments.length){
case 0:
return state_machine__14083__auto____0.call(this);
case 1:
return state_machine__14083__auto____1.call(this,state_24271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14083__auto____0;
state_machine__14083__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14083__auto____1;
return state_machine__14083__auto__;
})()
;})(switch__14082__auto__))
})();var state__14154__auto__ = (function (){var statearr_24300 = f__14153__auto__.call(null);(statearr_24300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14152__auto___24301);
return statearr_24300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14154__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

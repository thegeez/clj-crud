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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t20995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20995 = (function (f,fn_handler,meta20996){
this.f = f;
this.fn_handler = fn_handler;
this.meta20996 = meta20996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20995.cljs$lang$type = true;
cljs.core.async.t20995.cljs$lang$ctorStr = "cljs.core.async/t20995";
cljs.core.async.t20995.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t20995");
});
cljs.core.async.t20995.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t20995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t20995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t20995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20997){var self__ = this;
var _20997__$1 = this;return self__.meta20996;
});
cljs.core.async.t20995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20997,meta20996__$1){var self__ = this;
var _20997__$1 = this;return (new cljs.core.async.t20995(self__.f,self__.fn_handler,meta20996__$1));
});
cljs.core.async.__GT_t20995 = (function __GT_t20995(f__$1,fn_handler__$1,meta20996){return (new cljs.core.async.t20995(f__$1,fn_handler__$1,meta20996));
});
}
return (new cljs.core.async.t20995(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__20999 = buff;if(G__20999)
{var bit__10908__auto__ = null;if(cljs.core.truth_((function (){var or__10258__auto__ = bit__10908__auto__;if(cljs.core.truth_(or__10258__auto__))
{return or__10258__auto__;
} else
{return G__20999.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__20999.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20999);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20999);
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
{var val_21000 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21000);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21000);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__10246__auto__ = ret;if(cljs.core.truth_(and__10246__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__10246__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11106__auto___21001 = n;var x_21002 = 0;while(true){
if((x_21002 < n__11106__auto___21001))
{(a[x_21002] = 0);
{
var G__21003 = (x_21002 + 1);
x_21002 = G__21003;
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
var G__21004 = (i + 1);
i = G__21004;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21008 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21008 = (function (flag,alt_flag,meta21009){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21009 = meta21009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21008.cljs$lang$type = true;
cljs.core.async.t21008.cljs$lang$ctorStr = "cljs.core.async/t21008";
cljs.core.async.t21008.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21008");
});
cljs.core.async.t21008.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21010){var self__ = this;
var _21010__$1 = this;return self__.meta21009;
});
cljs.core.async.t21008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21010,meta21009__$1){var self__ = this;
var _21010__$1 = this;return (new cljs.core.async.t21008(self__.flag,self__.alt_flag,meta21009__$1));
});
cljs.core.async.__GT_t21008 = (function __GT_t21008(flag__$1,alt_flag__$1,meta21009){return (new cljs.core.async.t21008(flag__$1,alt_flag__$1,meta21009));
});
}
return (new cljs.core.async.t21008(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21014 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21014 = (function (cb,flag,alt_handler,meta21015){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21015 = meta21015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21014.cljs$lang$type = true;
cljs.core.async.t21014.cljs$lang$ctorStr = "cljs.core.async/t21014";
cljs.core.async.t21014.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21014");
});
cljs.core.async.t21014.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21014.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21014.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21016){var self__ = this;
var _21016__$1 = this;return self__.meta21015;
});
cljs.core.async.t21014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21016,meta21015__$1){var self__ = this;
var _21016__$1 = this;return (new cljs.core.async.t21014(self__.cb,self__.flag,self__.alt_handler,meta21015__$1));
});
cljs.core.async.__GT_t21014 = (function __GT_t21014(cb__$1,flag__$1,alt_handler__$1,meta21015){return (new cljs.core.async.t21014(cb__$1,flag__$1,alt_handler__$1,meta21015));
});
}
return (new cljs.core.async.t21014(cb,flag,alt_handler,null));
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
return (function (p1__21017_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21017_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10258__auto__ = wport;if(cljs.core.truth_(or__10258__auto__))
{return or__10258__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21018 = (i + 1);
i = G__21018;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10258__auto__ = ret;if(cljs.core.truth_(or__10258__auto__))
{return or__10258__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__10246__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10246__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10246__auto__;
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
var alts_BANG___delegate = function (ports,p__21019){var map__21021 = p__21019;var map__21021__$1 = ((cljs.core.seq_QMARK_.call(null,map__21021))?cljs.core.apply.call(null,cljs.core.hash_map,map__21021):map__21021);var opts = map__21021__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21019 = null;if (arguments.length > 1) {
  p__21019 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21019);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21022){
var ports = cljs.core.first(arglist__21022);
var p__21019 = cljs.core.rest(arglist__21022);
return alts_BANG___delegate(ports,p__21019);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21030 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21030 = (function (ch,f,map_LT_,meta21031){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21031 = meta21031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21030.cljs$lang$type = true;
cljs.core.async.t21030.cljs$lang$ctorStr = "cljs.core.async/t21030";
cljs.core.async.t21030.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21030");
});
cljs.core.async.t21030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21033 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21033 = (function (fn1,_,meta21031,ch,f,map_LT_,meta21034){
this.fn1 = fn1;
this._ = _;
this.meta21031 = meta21031;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21034 = meta21034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21033.cljs$lang$type = true;
cljs.core.async.t21033.cljs$lang$ctorStr = "cljs.core.async/t21033";
cljs.core.async.t21033.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21033");
});
cljs.core.async.t21033.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21033.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21023_SHARP_){return f1.call(null,(((p1__21023_SHARP_ == null))?null:self__.f.call(null,p1__21023_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21035){var self__ = this;
var _21035__$1 = this;return self__.meta21034;
});
cljs.core.async.t21033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21035,meta21034__$1){var self__ = this;
var _21035__$1 = this;return (new cljs.core.async.t21033(self__.fn1,self__._,self__.meta21031,self__.ch,self__.f,self__.map_LT_,meta21034__$1));
});
cljs.core.async.__GT_t21033 = (function __GT_t21033(fn1__$1,___$2,meta21031__$1,ch__$2,f__$2,map_LT___$2,meta21034){return (new cljs.core.async.t21033(fn1__$1,___$2,meta21031__$1,ch__$2,f__$2,map_LT___$2,meta21034));
});
}
return (new cljs.core.async.t21033(fn1,___$1,self__.meta21031,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10246__auto__ = ret;if(cljs.core.truth_(and__10246__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10246__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21030.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21032){var self__ = this;
var _21032__$1 = this;return self__.meta21031;
});
cljs.core.async.t21030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21032,meta21031__$1){var self__ = this;
var _21032__$1 = this;return (new cljs.core.async.t21030(self__.ch,self__.f,self__.map_LT_,meta21031__$1));
});
cljs.core.async.__GT_t21030 = (function __GT_t21030(ch__$1,f__$1,map_LT___$1,meta21031){return (new cljs.core.async.t21030(ch__$1,f__$1,map_LT___$1,meta21031));
});
}
return (new cljs.core.async.t21030(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21039 = (function (ch,f,map_GT_,meta21040){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21040 = meta21040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21039.cljs$lang$type = true;
cljs.core.async.t21039.cljs$lang$ctorStr = "cljs.core.async/t21039";
cljs.core.async.t21039.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21039");
});
cljs.core.async.t21039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21041){var self__ = this;
var _21041__$1 = this;return self__.meta21040;
});
cljs.core.async.t21039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21041,meta21040__$1){var self__ = this;
var _21041__$1 = this;return (new cljs.core.async.t21039(self__.ch,self__.f,self__.map_GT_,meta21040__$1));
});
cljs.core.async.__GT_t21039 = (function __GT_t21039(ch__$1,f__$1,map_GT___$1,meta21040){return (new cljs.core.async.t21039(ch__$1,f__$1,map_GT___$1,meta21040));
});
}
return (new cljs.core.async.t21039(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21045 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21045 = (function (ch,p,filter_GT_,meta21046){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21046 = meta21046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21045.cljs$lang$type = true;
cljs.core.async.t21045.cljs$lang$ctorStr = "cljs.core.async/t21045";
cljs.core.async.t21045.cljs$lang$ctorPrWriter = (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21045");
});
cljs.core.async.t21045.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21045.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21045.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21047){var self__ = this;
var _21047__$1 = this;return self__.meta21046;
});
cljs.core.async.t21045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21047,meta21046__$1){var self__ = this;
var _21047__$1 = this;return (new cljs.core.async.t21045(self__.ch,self__.p,self__.filter_GT_,meta21046__$1));
});
cljs.core.async.__GT_t21045 = (function __GT_t21045(ch__$1,p__$1,filter_GT___$1,meta21046){return (new cljs.core.async.t21045(ch__$1,p__$1,filter_GT___$1,meta21046));
});
}
return (new cljs.core.async.t21045(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13882__auto___21130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_21109){var state_val_21110 = (state_21109[1]);if((state_val_21110 === 1))
{var state_21109__$1 = state_21109;var statearr_21111_21131 = state_21109__$1;(statearr_21111_21131[2] = null);
(statearr_21111_21131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 2))
{var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21109__$1,4,ch);
} else
{if((state_val_21110 === 3))
{var inst_21107 = (state_21109[2]);var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21109__$1,inst_21107);
} else
{if((state_val_21110 === 4))
{var inst_21091 = (state_21109[7]);var inst_21091__$1 = (state_21109[2]);var inst_21092 = (inst_21091__$1 == null);var state_21109__$1 = (function (){var statearr_21112 = state_21109;(statearr_21112[7] = inst_21091__$1);
return statearr_21112;
})();if(cljs.core.truth_(inst_21092))
{var statearr_21113_21132 = state_21109__$1;(statearr_21113_21132[1] = 5);
} else
{var statearr_21114_21133 = state_21109__$1;(statearr_21114_21133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 5))
{var inst_21094 = cljs.core.async.close_BANG_.call(null,out);var state_21109__$1 = state_21109;var statearr_21115_21134 = state_21109__$1;(statearr_21115_21134[2] = inst_21094);
(statearr_21115_21134[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 6))
{var inst_21091 = (state_21109[7]);var inst_21096 = p.call(null,inst_21091);var state_21109__$1 = state_21109;if(cljs.core.truth_(inst_21096))
{var statearr_21116_21135 = state_21109__$1;(statearr_21116_21135[1] = 8);
} else
{var statearr_21117_21136 = state_21109__$1;(statearr_21117_21136[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 7))
{var inst_21105 = (state_21109[2]);var state_21109__$1 = state_21109;var statearr_21118_21137 = state_21109__$1;(statearr_21118_21137[2] = inst_21105);
(statearr_21118_21137[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 8))
{var inst_21091 = (state_21109[7]);var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21109__$1,11,out,inst_21091);
} else
{if((state_val_21110 === 9))
{var state_21109__$1 = state_21109;var statearr_21119_21138 = state_21109__$1;(statearr_21119_21138[2] = null);
(statearr_21119_21138[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 10))
{var inst_21102 = (state_21109[2]);var state_21109__$1 = (function (){var statearr_21120 = state_21109;(statearr_21120[8] = inst_21102);
return statearr_21120;
})();var statearr_21121_21139 = state_21109__$1;(statearr_21121_21139[2] = null);
(statearr_21121_21139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21110 === 11))
{var inst_21099 = (state_21109[2]);var state_21109__$1 = state_21109;var statearr_21122_21140 = state_21109__$1;(statearr_21122_21140[2] = inst_21099);
(statearr_21122_21140[1] = 10);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_21126 = [null,null,null,null,null,null,null,null,null];(statearr_21126[0] = state_machine__13813__auto__);
(statearr_21126[1] = 1);
return statearr_21126;
});
var state_machine__13813__auto____1 = (function (state_21109){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_21109);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e21127){if((e21127 instanceof Object))
{var ex__13816__auto__ = e21127;var statearr_21128_21141 = state_21109;(statearr_21128_21141[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21109);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21142 = state_21109;
state_21109 = G__21142;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_21109){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_21109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_21129 = f__13883__auto__.call(null);(statearr_21129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___21130);
return statearr_21129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13882__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_21294){var state_val_21295 = (state_21294[1]);if((state_val_21295 === 1))
{var state_21294__$1 = state_21294;var statearr_21296_21333 = state_21294__$1;(statearr_21296_21333[2] = null);
(statearr_21296_21333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 2))
{var state_21294__$1 = state_21294;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21294__$1,4,in$);
} else
{if((state_val_21295 === 3))
{var inst_21292 = (state_21294[2]);var state_21294__$1 = state_21294;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21294__$1,inst_21292);
} else
{if((state_val_21295 === 4))
{var inst_21240 = (state_21294[7]);var inst_21240__$1 = (state_21294[2]);var inst_21241 = (inst_21240__$1 == null);var state_21294__$1 = (function (){var statearr_21297 = state_21294;(statearr_21297[7] = inst_21240__$1);
return statearr_21297;
})();if(cljs.core.truth_(inst_21241))
{var statearr_21298_21334 = state_21294__$1;(statearr_21298_21334[1] = 5);
} else
{var statearr_21299_21335 = state_21294__$1;(statearr_21299_21335[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 5))
{var inst_21243 = cljs.core.async.close_BANG_.call(null,out);var state_21294__$1 = state_21294;var statearr_21300_21336 = state_21294__$1;(statearr_21300_21336[2] = inst_21243);
(statearr_21300_21336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 6))
{var inst_21240 = (state_21294[7]);var inst_21245 = f.call(null,inst_21240);var inst_21250 = cljs.core.seq.call(null,inst_21245);var inst_21251 = inst_21250;var inst_21252 = null;var inst_21253 = 0;var inst_21254 = 0;var state_21294__$1 = (function (){var statearr_21301 = state_21294;(statearr_21301[8] = inst_21251);
(statearr_21301[9] = inst_21252);
(statearr_21301[10] = inst_21254);
(statearr_21301[11] = inst_21253);
return statearr_21301;
})();var statearr_21302_21337 = state_21294__$1;(statearr_21302_21337[2] = null);
(statearr_21302_21337[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 7))
{var inst_21290 = (state_21294[2]);var state_21294__$1 = state_21294;var statearr_21303_21338 = state_21294__$1;(statearr_21303_21338[2] = inst_21290);
(statearr_21303_21338[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 8))
{var inst_21254 = (state_21294[10]);var inst_21253 = (state_21294[11]);var inst_21256 = (inst_21254 < inst_21253);var inst_21257 = inst_21256;var state_21294__$1 = state_21294;if(cljs.core.truth_(inst_21257))
{var statearr_21304_21339 = state_21294__$1;(statearr_21304_21339[1] = 10);
} else
{var statearr_21305_21340 = state_21294__$1;(statearr_21305_21340[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 9))
{var inst_21287 = (state_21294[2]);var state_21294__$1 = (function (){var statearr_21306 = state_21294;(statearr_21306[12] = inst_21287);
return statearr_21306;
})();var statearr_21307_21341 = state_21294__$1;(statearr_21307_21341[2] = null);
(statearr_21307_21341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 10))
{var inst_21252 = (state_21294[9]);var inst_21254 = (state_21294[10]);var inst_21259 = cljs.core._nth.call(null,inst_21252,inst_21254);var state_21294__$1 = state_21294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21294__$1,13,out,inst_21259);
} else
{if((state_val_21295 === 11))
{var inst_21251 = (state_21294[8]);var inst_21265 = (state_21294[13]);var inst_21265__$1 = cljs.core.seq.call(null,inst_21251);var state_21294__$1 = (function (){var statearr_21311 = state_21294;(statearr_21311[13] = inst_21265__$1);
return statearr_21311;
})();if(inst_21265__$1)
{var statearr_21312_21342 = state_21294__$1;(statearr_21312_21342[1] = 14);
} else
{var statearr_21313_21343 = state_21294__$1;(statearr_21313_21343[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 12))
{var inst_21285 = (state_21294[2]);var state_21294__$1 = state_21294;var statearr_21314_21344 = state_21294__$1;(statearr_21314_21344[2] = inst_21285);
(statearr_21314_21344[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 13))
{var inst_21251 = (state_21294[8]);var inst_21252 = (state_21294[9]);var inst_21254 = (state_21294[10]);var inst_21253 = (state_21294[11]);var inst_21261 = (state_21294[2]);var inst_21262 = (inst_21254 + 1);var tmp21308 = inst_21251;var tmp21309 = inst_21252;var tmp21310 = inst_21253;var inst_21251__$1 = tmp21308;var inst_21252__$1 = tmp21309;var inst_21253__$1 = tmp21310;var inst_21254__$1 = inst_21262;var state_21294__$1 = (function (){var statearr_21315 = state_21294;(statearr_21315[8] = inst_21251__$1);
(statearr_21315[9] = inst_21252__$1);
(statearr_21315[14] = inst_21261);
(statearr_21315[10] = inst_21254__$1);
(statearr_21315[11] = inst_21253__$1);
return statearr_21315;
})();var statearr_21316_21345 = state_21294__$1;(statearr_21316_21345[2] = null);
(statearr_21316_21345[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 14))
{var inst_21265 = (state_21294[13]);var inst_21267 = cljs.core.chunked_seq_QMARK_.call(null,inst_21265);var state_21294__$1 = state_21294;if(inst_21267)
{var statearr_21317_21346 = state_21294__$1;(statearr_21317_21346[1] = 17);
} else
{var statearr_21318_21347 = state_21294__$1;(statearr_21318_21347[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 15))
{var state_21294__$1 = state_21294;var statearr_21319_21348 = state_21294__$1;(statearr_21319_21348[2] = null);
(statearr_21319_21348[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 16))
{var inst_21283 = (state_21294[2]);var state_21294__$1 = state_21294;var statearr_21320_21349 = state_21294__$1;(statearr_21320_21349[2] = inst_21283);
(statearr_21320_21349[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 17))
{var inst_21265 = (state_21294[13]);var inst_21269 = cljs.core.chunk_first.call(null,inst_21265);var inst_21270 = cljs.core.chunk_rest.call(null,inst_21265);var inst_21271 = cljs.core.count.call(null,inst_21269);var inst_21251 = inst_21270;var inst_21252 = inst_21269;var inst_21253 = inst_21271;var inst_21254 = 0;var state_21294__$1 = (function (){var statearr_21321 = state_21294;(statearr_21321[8] = inst_21251);
(statearr_21321[9] = inst_21252);
(statearr_21321[10] = inst_21254);
(statearr_21321[11] = inst_21253);
return statearr_21321;
})();var statearr_21322_21350 = state_21294__$1;(statearr_21322_21350[2] = null);
(statearr_21322_21350[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 18))
{var inst_21265 = (state_21294[13]);var inst_21274 = cljs.core.first.call(null,inst_21265);var state_21294__$1 = state_21294;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21294__$1,20,out,inst_21274);
} else
{if((state_val_21295 === 19))
{var inst_21280 = (state_21294[2]);var state_21294__$1 = state_21294;var statearr_21323_21351 = state_21294__$1;(statearr_21323_21351[2] = inst_21280);
(statearr_21323_21351[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21295 === 20))
{var inst_21265 = (state_21294[13]);var inst_21276 = (state_21294[2]);var inst_21277 = cljs.core.next.call(null,inst_21265);var inst_21251 = inst_21277;var inst_21252 = null;var inst_21253 = 0;var inst_21254 = 0;var state_21294__$1 = (function (){var statearr_21324 = state_21294;(statearr_21324[8] = inst_21251);
(statearr_21324[9] = inst_21252);
(statearr_21324[10] = inst_21254);
(statearr_21324[11] = inst_21253);
(statearr_21324[15] = inst_21276);
return statearr_21324;
})();var statearr_21325_21352 = state_21294__$1;(statearr_21325_21352[2] = null);
(statearr_21325_21352[1] = 8);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_21329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21329[0] = state_machine__13813__auto__);
(statearr_21329[1] = 1);
return statearr_21329;
});
var state_machine__13813__auto____1 = (function (state_21294){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_21294);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e21330){if((e21330 instanceof Object))
{var ex__13816__auto__ = e21330;var statearr_21331_21353 = state_21294;(statearr_21331_21353[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21294);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21330;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21354 = state_21294;
state_21294 = G__21354;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_21294){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_21294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_21332 = f__13883__auto__.call(null);(statearr_21332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto__);
return statearr_21332;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
}));
return c__13882__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13882__auto___21435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_21414){var state_val_21415 = (state_21414[1]);if((state_val_21415 === 1))
{var state_21414__$1 = state_21414;var statearr_21416_21436 = state_21414__$1;(statearr_21416_21436[2] = null);
(statearr_21416_21436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 2))
{var state_21414__$1 = state_21414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21414__$1,4,from);
} else
{if((state_val_21415 === 3))
{var inst_21412 = (state_21414[2]);var state_21414__$1 = state_21414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21414__$1,inst_21412);
} else
{if((state_val_21415 === 4))
{var inst_21397 = (state_21414[7]);var inst_21397__$1 = (state_21414[2]);var inst_21398 = (inst_21397__$1 == null);var state_21414__$1 = (function (){var statearr_21417 = state_21414;(statearr_21417[7] = inst_21397__$1);
return statearr_21417;
})();if(cljs.core.truth_(inst_21398))
{var statearr_21418_21437 = state_21414__$1;(statearr_21418_21437[1] = 5);
} else
{var statearr_21419_21438 = state_21414__$1;(statearr_21419_21438[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 5))
{var state_21414__$1 = state_21414;if(cljs.core.truth_(close_QMARK_))
{var statearr_21420_21439 = state_21414__$1;(statearr_21420_21439[1] = 8);
} else
{var statearr_21421_21440 = state_21414__$1;(statearr_21421_21440[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 6))
{var inst_21397 = (state_21414[7]);var state_21414__$1 = state_21414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21414__$1,11,to,inst_21397);
} else
{if((state_val_21415 === 7))
{var inst_21410 = (state_21414[2]);var state_21414__$1 = state_21414;var statearr_21422_21441 = state_21414__$1;(statearr_21422_21441[2] = inst_21410);
(statearr_21422_21441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 8))
{var inst_21401 = cljs.core.async.close_BANG_.call(null,to);var state_21414__$1 = state_21414;var statearr_21423_21442 = state_21414__$1;(statearr_21423_21442[2] = inst_21401);
(statearr_21423_21442[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 9))
{var state_21414__$1 = state_21414;var statearr_21424_21443 = state_21414__$1;(statearr_21424_21443[2] = null);
(statearr_21424_21443[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 10))
{var inst_21404 = (state_21414[2]);var state_21414__$1 = state_21414;var statearr_21425_21444 = state_21414__$1;(statearr_21425_21444[2] = inst_21404);
(statearr_21425_21444[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21415 === 11))
{var inst_21407 = (state_21414[2]);var state_21414__$1 = (function (){var statearr_21426 = state_21414;(statearr_21426[8] = inst_21407);
return statearr_21426;
})();var statearr_21427_21445 = state_21414__$1;(statearr_21427_21445[2] = null);
(statearr_21427_21445[1] = 2);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_21431 = [null,null,null,null,null,null,null,null,null];(statearr_21431[0] = state_machine__13813__auto__);
(statearr_21431[1] = 1);
return statearr_21431;
});
var state_machine__13813__auto____1 = (function (state_21414){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_21414);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e21432){if((e21432 instanceof Object))
{var ex__13816__auto__ = e21432;var statearr_21433_21446 = state_21414;(statearr_21433_21446[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21414);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21447 = state_21414;
state_21414 = G__21447;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_21414){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_21414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_21434 = f__13883__auto__.call(null);(statearr_21434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___21435);
return statearr_21434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13882__auto___21534 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_21512){var state_val_21513 = (state_21512[1]);if((state_val_21513 === 1))
{var state_21512__$1 = state_21512;var statearr_21514_21535 = state_21512__$1;(statearr_21514_21535[2] = null);
(statearr_21514_21535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 2))
{var state_21512__$1 = state_21512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21512__$1,4,ch);
} else
{if((state_val_21513 === 3))
{var inst_21510 = (state_21512[2]);var state_21512__$1 = state_21512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21512__$1,inst_21510);
} else
{if((state_val_21513 === 4))
{var inst_21493 = (state_21512[7]);var inst_21493__$1 = (state_21512[2]);var inst_21494 = (inst_21493__$1 == null);var state_21512__$1 = (function (){var statearr_21515 = state_21512;(statearr_21515[7] = inst_21493__$1);
return statearr_21515;
})();if(cljs.core.truth_(inst_21494))
{var statearr_21516_21536 = state_21512__$1;(statearr_21516_21536[1] = 5);
} else
{var statearr_21517_21537 = state_21512__$1;(statearr_21517_21537[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 5))
{var inst_21496 = cljs.core.async.close_BANG_.call(null,tc);var inst_21497 = cljs.core.async.close_BANG_.call(null,fc);var state_21512__$1 = (function (){var statearr_21518 = state_21512;(statearr_21518[8] = inst_21496);
return statearr_21518;
})();var statearr_21519_21538 = state_21512__$1;(statearr_21519_21538[2] = inst_21497);
(statearr_21519_21538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 6))
{var inst_21493 = (state_21512[7]);var inst_21499 = p.call(null,inst_21493);var state_21512__$1 = state_21512;if(cljs.core.truth_(inst_21499))
{var statearr_21520_21539 = state_21512__$1;(statearr_21520_21539[1] = 9);
} else
{var statearr_21521_21540 = state_21512__$1;(statearr_21521_21540[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 7))
{var inst_21508 = (state_21512[2]);var state_21512__$1 = state_21512;var statearr_21522_21541 = state_21512__$1;(statearr_21522_21541[2] = inst_21508);
(statearr_21522_21541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 8))
{var inst_21505 = (state_21512[2]);var state_21512__$1 = (function (){var statearr_21523 = state_21512;(statearr_21523[9] = inst_21505);
return statearr_21523;
})();var statearr_21524_21542 = state_21512__$1;(statearr_21524_21542[2] = null);
(statearr_21524_21542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 9))
{var state_21512__$1 = state_21512;var statearr_21525_21543 = state_21512__$1;(statearr_21525_21543[2] = tc);
(statearr_21525_21543[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 10))
{var state_21512__$1 = state_21512;var statearr_21526_21544 = state_21512__$1;(statearr_21526_21544[2] = fc);
(statearr_21526_21544[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21513 === 11))
{var inst_21493 = (state_21512[7]);var inst_21503 = (state_21512[2]);var state_21512__$1 = state_21512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21512__$1,8,inst_21503,inst_21493);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_21530 = [null,null,null,null,null,null,null,null,null,null];(statearr_21530[0] = state_machine__13813__auto__);
(statearr_21530[1] = 1);
return statearr_21530;
});
var state_machine__13813__auto____1 = (function (state_21512){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_21512);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e21531){if((e21531 instanceof Object))
{var ex__13816__auto__ = e21531;var statearr_21532_21545 = state_21512;(statearr_21532_21545[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21546 = state_21512;
state_21512 = G__21546;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_21512){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_21512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_21533 = f__13883__auto__.call(null);(statearr_21533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___21534);
return statearr_21533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13882__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_21593){var state_val_21594 = (state_21593[1]);if((state_val_21594 === 7))
{var inst_21589 = (state_21593[2]);var state_21593__$1 = state_21593;var statearr_21595_21611 = state_21593__$1;(statearr_21595_21611[2] = inst_21589);
(statearr_21595_21611[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21594 === 6))
{var inst_21579 = (state_21593[7]);var inst_21582 = (state_21593[8]);var inst_21586 = f.call(null,inst_21579,inst_21582);var inst_21579__$1 = inst_21586;var state_21593__$1 = (function (){var statearr_21596 = state_21593;(statearr_21596[7] = inst_21579__$1);
return statearr_21596;
})();var statearr_21597_21612 = state_21593__$1;(statearr_21597_21612[2] = null);
(statearr_21597_21612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21594 === 5))
{var inst_21579 = (state_21593[7]);var state_21593__$1 = state_21593;var statearr_21598_21613 = state_21593__$1;(statearr_21598_21613[2] = inst_21579);
(statearr_21598_21613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21594 === 4))
{var inst_21582 = (state_21593[8]);var inst_21582__$1 = (state_21593[2]);var inst_21583 = (inst_21582__$1 == null);var state_21593__$1 = (function (){var statearr_21599 = state_21593;(statearr_21599[8] = inst_21582__$1);
return statearr_21599;
})();if(cljs.core.truth_(inst_21583))
{var statearr_21600_21614 = state_21593__$1;(statearr_21600_21614[1] = 5);
} else
{var statearr_21601_21615 = state_21593__$1;(statearr_21601_21615[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21594 === 3))
{var inst_21591 = (state_21593[2]);var state_21593__$1 = state_21593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21593__$1,inst_21591);
} else
{if((state_val_21594 === 2))
{var state_21593__$1 = state_21593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21593__$1,4,ch);
} else
{if((state_val_21594 === 1))
{var inst_21579 = init;var state_21593__$1 = (function (){var statearr_21602 = state_21593;(statearr_21602[7] = inst_21579);
return statearr_21602;
})();var statearr_21603_21616 = state_21593__$1;(statearr_21603_21616[2] = null);
(statearr_21603_21616[1] = 2);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_21607 = [null,null,null,null,null,null,null,null,null];(statearr_21607[0] = state_machine__13813__auto__);
(statearr_21607[1] = 1);
return statearr_21607;
});
var state_machine__13813__auto____1 = (function (state_21593){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_21593);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e21608){if((e21608 instanceof Object))
{var ex__13816__auto__ = e21608;var statearr_21609_21617 = state_21593;(statearr_21609_21617[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21608;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21618 = state_21593;
state_21593 = G__21618;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_21593){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_21593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_21610 = f__13883__auto__.call(null);(statearr_21610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto__);
return statearr_21610;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
}));
return c__13882__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13882__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_21680){var state_val_21681 = (state_21680[1]);if((state_val_21681 === 1))
{var inst_21660 = cljs.core.seq.call(null,coll);var inst_21661 = inst_21660;var state_21680__$1 = (function (){var statearr_21682 = state_21680;(statearr_21682[7] = inst_21661);
return statearr_21682;
})();var statearr_21683_21701 = state_21680__$1;(statearr_21683_21701[2] = null);
(statearr_21683_21701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 2))
{var inst_21661 = (state_21680[7]);var state_21680__$1 = state_21680;if(cljs.core.truth_(inst_21661))
{var statearr_21684_21702 = state_21680__$1;(statearr_21684_21702[1] = 4);
} else
{var statearr_21685_21703 = state_21680__$1;(statearr_21685_21703[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 3))
{var inst_21678 = (state_21680[2]);var state_21680__$1 = state_21680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21680__$1,inst_21678);
} else
{if((state_val_21681 === 4))
{var inst_21661 = (state_21680[7]);var inst_21664 = cljs.core.first.call(null,inst_21661);var state_21680__$1 = state_21680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21680__$1,7,ch,inst_21664);
} else
{if((state_val_21681 === 5))
{var state_21680__$1 = state_21680;if(cljs.core.truth_(close_QMARK_))
{var statearr_21686_21704 = state_21680__$1;(statearr_21686_21704[1] = 8);
} else
{var statearr_21687_21705 = state_21680__$1;(statearr_21687_21705[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 6))
{var inst_21676 = (state_21680[2]);var state_21680__$1 = state_21680;var statearr_21688_21706 = state_21680__$1;(statearr_21688_21706[2] = inst_21676);
(statearr_21688_21706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 7))
{var inst_21661 = (state_21680[7]);var inst_21666 = (state_21680[2]);var inst_21667 = cljs.core.next.call(null,inst_21661);var inst_21661__$1 = inst_21667;var state_21680__$1 = (function (){var statearr_21689 = state_21680;(statearr_21689[7] = inst_21661__$1);
(statearr_21689[8] = inst_21666);
return statearr_21689;
})();var statearr_21690_21707 = state_21680__$1;(statearr_21690_21707[2] = null);
(statearr_21690_21707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 8))
{var inst_21671 = cljs.core.async.close_BANG_.call(null,ch);var state_21680__$1 = state_21680;var statearr_21691_21708 = state_21680__$1;(statearr_21691_21708[2] = inst_21671);
(statearr_21691_21708[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 9))
{var state_21680__$1 = state_21680;var statearr_21692_21709 = state_21680__$1;(statearr_21692_21709[2] = null);
(statearr_21692_21709[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21681 === 10))
{var inst_21674 = (state_21680[2]);var state_21680__$1 = state_21680;var statearr_21693_21710 = state_21680__$1;(statearr_21693_21710[2] = inst_21674);
(statearr_21693_21710[1] = 6);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_21697 = [null,null,null,null,null,null,null,null,null];(statearr_21697[0] = state_machine__13813__auto__);
(statearr_21697[1] = 1);
return statearr_21697;
});
var state_machine__13813__auto____1 = (function (state_21680){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_21680);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e21698){if((e21698 instanceof Object))
{var ex__13816__auto__ = e21698;var statearr_21699_21711 = state_21680;(statearr_21699_21711[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21712 = state_21680;
state_21680 = G__21712;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_21680){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_21680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_21700 = f__13883__auto__.call(null);(statearr_21700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto__);
return statearr_21700;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
}));
return c__13882__auto__;
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
cljs.core.async.Mux = (function (){var obj21714 = {};return obj21714;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10246__auto__ = _;if(and__10246__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10246__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10885__auto__ = (((_ == null))?null:_);return (function (){var or__10258__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21716 = {};return obj21716;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t21940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21940 = (function (cs,ch,mult,meta21941){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21941 = meta21941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21940.cljs$lang$type = true;
cljs.core.async.t21940.cljs$lang$ctorStr = "cljs.core.async/t21940";
cljs.core.async.t21940.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t21940");
});})(cs))
;
cljs.core.async.t21940.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t21940.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t21940.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t21940.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t21940.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t21940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t21940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21942){var self__ = this;
var _21942__$1 = this;return self__.meta21941;
});})(cs))
;
cljs.core.async.t21940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21942,meta21941__$1){var self__ = this;
var _21942__$1 = this;return (new cljs.core.async.t21940(self__.cs,self__.ch,self__.mult,meta21941__$1));
});})(cs))
;
cljs.core.async.__GT_t21940 = ((function (cs){
return (function __GT_t21940(cs__$1,ch__$1,mult__$1,meta21941){return (new cljs.core.async.t21940(cs__$1,ch__$1,mult__$1,meta21941));
});})(cs))
;
}
return (new cljs.core.async.t21940(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13882__auto___22163 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_22077){var state_val_22078 = (state_22077[1]);if((state_val_22078 === 32))
{var inst_22021 = (state_22077[7]);var inst_21945 = (state_22077[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22077,31,Object,null,30);var inst_22028 = cljs.core.async.put_BANG_.call(null,inst_22021,inst_21945,done);var state_22077__$1 = state_22077;var statearr_22079_22164 = state_22077__$1;(statearr_22079_22164[2] = inst_22028);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22077__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 1))
{var state_22077__$1 = state_22077;var statearr_22080_22165 = state_22077__$1;(statearr_22080_22165[2] = null);
(statearr_22080_22165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 33))
{var inst_22034 = (state_22077[9]);var inst_22036 = cljs.core.chunked_seq_QMARK_.call(null,inst_22034);var state_22077__$1 = state_22077;if(inst_22036)
{var statearr_22081_22166 = state_22077__$1;(statearr_22081_22166[1] = 36);
} else
{var statearr_22082_22167 = state_22077__$1;(statearr_22082_22167[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 2))
{var state_22077__$1 = state_22077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22077__$1,4,ch);
} else
{if((state_val_22078 === 34))
{var state_22077__$1 = state_22077;var statearr_22083_22168 = state_22077__$1;(statearr_22083_22168[2] = null);
(statearr_22083_22168[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 3))
{var inst_22075 = (state_22077[2]);var state_22077__$1 = state_22077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22077__$1,inst_22075);
} else
{if((state_val_22078 === 35))
{var inst_22059 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22084_22169 = state_22077__$1;(statearr_22084_22169[2] = inst_22059);
(statearr_22084_22169[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 4))
{var inst_21945 = (state_22077[8]);var inst_21945__$1 = (state_22077[2]);var inst_21946 = (inst_21945__$1 == null);var state_22077__$1 = (function (){var statearr_22085 = state_22077;(statearr_22085[8] = inst_21945__$1);
return statearr_22085;
})();if(cljs.core.truth_(inst_21946))
{var statearr_22086_22170 = state_22077__$1;(statearr_22086_22170[1] = 5);
} else
{var statearr_22087_22171 = state_22077__$1;(statearr_22087_22171[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 36))
{var inst_22034 = (state_22077[9]);var inst_22038 = cljs.core.chunk_first.call(null,inst_22034);var inst_22039 = cljs.core.chunk_rest.call(null,inst_22034);var inst_22040 = cljs.core.count.call(null,inst_22038);var inst_22013 = inst_22039;var inst_22014 = inst_22038;var inst_22015 = inst_22040;var inst_22016 = 0;var state_22077__$1 = (function (){var statearr_22088 = state_22077;(statearr_22088[10] = inst_22016);
(statearr_22088[11] = inst_22015);
(statearr_22088[12] = inst_22014);
(statearr_22088[13] = inst_22013);
return statearr_22088;
})();var statearr_22089_22172 = state_22077__$1;(statearr_22089_22172[2] = null);
(statearr_22089_22172[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 5))
{var inst_21952 = cljs.core.deref.call(null,cs);var inst_21953 = cljs.core.seq.call(null,inst_21952);var inst_21954 = inst_21953;var inst_21955 = null;var inst_21956 = 0;var inst_21957 = 0;var state_22077__$1 = (function (){var statearr_22090 = state_22077;(statearr_22090[14] = inst_21955);
(statearr_22090[15] = inst_21954);
(statearr_22090[16] = inst_21957);
(statearr_22090[17] = inst_21956);
return statearr_22090;
})();var statearr_22091_22173 = state_22077__$1;(statearr_22091_22173[2] = null);
(statearr_22091_22173[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 37))
{var inst_22034 = (state_22077[9]);var inst_22043 = cljs.core.first.call(null,inst_22034);var state_22077__$1 = (function (){var statearr_22092 = state_22077;(statearr_22092[18] = inst_22043);
return statearr_22092;
})();var statearr_22093_22174 = state_22077__$1;(statearr_22093_22174[2] = null);
(statearr_22093_22174[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 6))
{var inst_22005 = (state_22077[19]);var inst_22004 = cljs.core.deref.call(null,cs);var inst_22005__$1 = cljs.core.keys.call(null,inst_22004);var inst_22006 = cljs.core.count.call(null,inst_22005__$1);var inst_22007 = cljs.core.reset_BANG_.call(null,dctr,inst_22006);var inst_22012 = cljs.core.seq.call(null,inst_22005__$1);var inst_22013 = inst_22012;var inst_22014 = null;var inst_22015 = 0;var inst_22016 = 0;var state_22077__$1 = (function (){var statearr_22094 = state_22077;(statearr_22094[10] = inst_22016);
(statearr_22094[19] = inst_22005__$1);
(statearr_22094[11] = inst_22015);
(statearr_22094[12] = inst_22014);
(statearr_22094[13] = inst_22013);
(statearr_22094[20] = inst_22007);
return statearr_22094;
})();var statearr_22095_22175 = state_22077__$1;(statearr_22095_22175[2] = null);
(statearr_22095_22175[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 38))
{var inst_22056 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22096_22176 = state_22077__$1;(statearr_22096_22176[2] = inst_22056);
(statearr_22096_22176[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 7))
{var inst_22073 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22097_22177 = state_22077__$1;(statearr_22097_22177[2] = inst_22073);
(statearr_22097_22177[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 39))
{var inst_22034 = (state_22077[9]);var inst_22052 = (state_22077[2]);var inst_22053 = cljs.core.next.call(null,inst_22034);var inst_22013 = inst_22053;var inst_22014 = null;var inst_22015 = 0;var inst_22016 = 0;var state_22077__$1 = (function (){var statearr_22098 = state_22077;(statearr_22098[10] = inst_22016);
(statearr_22098[11] = inst_22015);
(statearr_22098[12] = inst_22014);
(statearr_22098[13] = inst_22013);
(statearr_22098[21] = inst_22052);
return statearr_22098;
})();var statearr_22099_22178 = state_22077__$1;(statearr_22099_22178[2] = null);
(statearr_22099_22178[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 8))
{var inst_21957 = (state_22077[16]);var inst_21956 = (state_22077[17]);var inst_21959 = (inst_21957 < inst_21956);var inst_21960 = inst_21959;var state_22077__$1 = state_22077;if(cljs.core.truth_(inst_21960))
{var statearr_22100_22179 = state_22077__$1;(statearr_22100_22179[1] = 10);
} else
{var statearr_22101_22180 = state_22077__$1;(statearr_22101_22180[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 40))
{var inst_22043 = (state_22077[18]);var inst_22044 = (state_22077[2]);var inst_22045 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22046 = cljs.core.async.untap_STAR_.call(null,m,inst_22043);var state_22077__$1 = (function (){var statearr_22102 = state_22077;(statearr_22102[22] = inst_22044);
(statearr_22102[23] = inst_22045);
return statearr_22102;
})();var statearr_22103_22181 = state_22077__$1;(statearr_22103_22181[2] = inst_22046);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22077__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 9))
{var inst_22002 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22104_22182 = state_22077__$1;(statearr_22104_22182[2] = inst_22002);
(statearr_22104_22182[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 41))
{var inst_21945 = (state_22077[8]);var inst_22043 = (state_22077[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22077,40,Object,null,39);var inst_22050 = cljs.core.async.put_BANG_.call(null,inst_22043,inst_21945,done);var state_22077__$1 = state_22077;var statearr_22105_22183 = state_22077__$1;(statearr_22105_22183[2] = inst_22050);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22077__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 10))
{var inst_21955 = (state_22077[14]);var inst_21957 = (state_22077[16]);var inst_21963 = cljs.core._nth.call(null,inst_21955,inst_21957);var inst_21964 = cljs.core.nth.call(null,inst_21963,0,null);var inst_21965 = cljs.core.nth.call(null,inst_21963,1,null);var state_22077__$1 = (function (){var statearr_22106 = state_22077;(statearr_22106[24] = inst_21964);
return statearr_22106;
})();if(cljs.core.truth_(inst_21965))
{var statearr_22107_22184 = state_22077__$1;(statearr_22107_22184[1] = 13);
} else
{var statearr_22108_22185 = state_22077__$1;(statearr_22108_22185[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 42))
{var state_22077__$1 = state_22077;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22077__$1,45,dchan);
} else
{if((state_val_22078 === 11))
{var inst_21974 = (state_22077[25]);var inst_21954 = (state_22077[15]);var inst_21974__$1 = cljs.core.seq.call(null,inst_21954);var state_22077__$1 = (function (){var statearr_22109 = state_22077;(statearr_22109[25] = inst_21974__$1);
return statearr_22109;
})();if(inst_21974__$1)
{var statearr_22110_22186 = state_22077__$1;(statearr_22110_22186[1] = 16);
} else
{var statearr_22111_22187 = state_22077__$1;(statearr_22111_22187[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 43))
{var state_22077__$1 = state_22077;var statearr_22112_22188 = state_22077__$1;(statearr_22112_22188[2] = null);
(statearr_22112_22188[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 12))
{var inst_22000 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22113_22189 = state_22077__$1;(statearr_22113_22189[2] = inst_22000);
(statearr_22113_22189[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 44))
{var inst_22070 = (state_22077[2]);var state_22077__$1 = (function (){var statearr_22114 = state_22077;(statearr_22114[26] = inst_22070);
return statearr_22114;
})();var statearr_22115_22190 = state_22077__$1;(statearr_22115_22190[2] = null);
(statearr_22115_22190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 13))
{var inst_21964 = (state_22077[24]);var inst_21967 = cljs.core.async.close_BANG_.call(null,inst_21964);var state_22077__$1 = state_22077;var statearr_22116_22191 = state_22077__$1;(statearr_22116_22191[2] = inst_21967);
(statearr_22116_22191[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 45))
{var inst_22067 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22120_22192 = state_22077__$1;(statearr_22120_22192[2] = inst_22067);
(statearr_22120_22192[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 14))
{var state_22077__$1 = state_22077;var statearr_22121_22193 = state_22077__$1;(statearr_22121_22193[2] = null);
(statearr_22121_22193[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 15))
{var inst_21955 = (state_22077[14]);var inst_21954 = (state_22077[15]);var inst_21957 = (state_22077[16]);var inst_21956 = (state_22077[17]);var inst_21970 = (state_22077[2]);var inst_21971 = (inst_21957 + 1);var tmp22117 = inst_21955;var tmp22118 = inst_21954;var tmp22119 = inst_21956;var inst_21954__$1 = tmp22118;var inst_21955__$1 = tmp22117;var inst_21956__$1 = tmp22119;var inst_21957__$1 = inst_21971;var state_22077__$1 = (function (){var statearr_22122 = state_22077;(statearr_22122[14] = inst_21955__$1);
(statearr_22122[15] = inst_21954__$1);
(statearr_22122[16] = inst_21957__$1);
(statearr_22122[17] = inst_21956__$1);
(statearr_22122[27] = inst_21970);
return statearr_22122;
})();var statearr_22123_22194 = state_22077__$1;(statearr_22123_22194[2] = null);
(statearr_22123_22194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 16))
{var inst_21974 = (state_22077[25]);var inst_21976 = cljs.core.chunked_seq_QMARK_.call(null,inst_21974);var state_22077__$1 = state_22077;if(inst_21976)
{var statearr_22124_22195 = state_22077__$1;(statearr_22124_22195[1] = 19);
} else
{var statearr_22125_22196 = state_22077__$1;(statearr_22125_22196[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 17))
{var state_22077__$1 = state_22077;var statearr_22126_22197 = state_22077__$1;(statearr_22126_22197[2] = null);
(statearr_22126_22197[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 18))
{var inst_21998 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22127_22198 = state_22077__$1;(statearr_22127_22198[2] = inst_21998);
(statearr_22127_22198[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 19))
{var inst_21974 = (state_22077[25]);var inst_21978 = cljs.core.chunk_first.call(null,inst_21974);var inst_21979 = cljs.core.chunk_rest.call(null,inst_21974);var inst_21980 = cljs.core.count.call(null,inst_21978);var inst_21954 = inst_21979;var inst_21955 = inst_21978;var inst_21956 = inst_21980;var inst_21957 = 0;var state_22077__$1 = (function (){var statearr_22128 = state_22077;(statearr_22128[14] = inst_21955);
(statearr_22128[15] = inst_21954);
(statearr_22128[16] = inst_21957);
(statearr_22128[17] = inst_21956);
return statearr_22128;
})();var statearr_22129_22199 = state_22077__$1;(statearr_22129_22199[2] = null);
(statearr_22129_22199[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 20))
{var inst_21974 = (state_22077[25]);var inst_21984 = cljs.core.first.call(null,inst_21974);var inst_21985 = cljs.core.nth.call(null,inst_21984,0,null);var inst_21986 = cljs.core.nth.call(null,inst_21984,1,null);var state_22077__$1 = (function (){var statearr_22130 = state_22077;(statearr_22130[28] = inst_21985);
return statearr_22130;
})();if(cljs.core.truth_(inst_21986))
{var statearr_22131_22200 = state_22077__$1;(statearr_22131_22200[1] = 22);
} else
{var statearr_22132_22201 = state_22077__$1;(statearr_22132_22201[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 21))
{var inst_21995 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22133_22202 = state_22077__$1;(statearr_22133_22202[2] = inst_21995);
(statearr_22133_22202[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 22))
{var inst_21985 = (state_22077[28]);var inst_21988 = cljs.core.async.close_BANG_.call(null,inst_21985);var state_22077__$1 = state_22077;var statearr_22134_22203 = state_22077__$1;(statearr_22134_22203[2] = inst_21988);
(statearr_22134_22203[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 23))
{var state_22077__$1 = state_22077;var statearr_22135_22204 = state_22077__$1;(statearr_22135_22204[2] = null);
(statearr_22135_22204[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 24))
{var inst_21974 = (state_22077[25]);var inst_21991 = (state_22077[2]);var inst_21992 = cljs.core.next.call(null,inst_21974);var inst_21954 = inst_21992;var inst_21955 = null;var inst_21956 = 0;var inst_21957 = 0;var state_22077__$1 = (function (){var statearr_22136 = state_22077;(statearr_22136[14] = inst_21955);
(statearr_22136[15] = inst_21954);
(statearr_22136[16] = inst_21957);
(statearr_22136[17] = inst_21956);
(statearr_22136[29] = inst_21991);
return statearr_22136;
})();var statearr_22137_22205 = state_22077__$1;(statearr_22137_22205[2] = null);
(statearr_22137_22205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 25))
{var inst_22016 = (state_22077[10]);var inst_22015 = (state_22077[11]);var inst_22018 = (inst_22016 < inst_22015);var inst_22019 = inst_22018;var state_22077__$1 = state_22077;if(cljs.core.truth_(inst_22019))
{var statearr_22138_22206 = state_22077__$1;(statearr_22138_22206[1] = 27);
} else
{var statearr_22139_22207 = state_22077__$1;(statearr_22139_22207[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 26))
{var inst_22005 = (state_22077[19]);var inst_22063 = (state_22077[2]);var inst_22064 = cljs.core.seq.call(null,inst_22005);var state_22077__$1 = (function (){var statearr_22140 = state_22077;(statearr_22140[30] = inst_22063);
return statearr_22140;
})();if(inst_22064)
{var statearr_22141_22208 = state_22077__$1;(statearr_22141_22208[1] = 42);
} else
{var statearr_22142_22209 = state_22077__$1;(statearr_22142_22209[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 27))
{var inst_22016 = (state_22077[10]);var inst_22014 = (state_22077[12]);var inst_22021 = cljs.core._nth.call(null,inst_22014,inst_22016);var state_22077__$1 = (function (){var statearr_22143 = state_22077;(statearr_22143[7] = inst_22021);
return statearr_22143;
})();var statearr_22144_22210 = state_22077__$1;(statearr_22144_22210[2] = null);
(statearr_22144_22210[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 28))
{var inst_22034 = (state_22077[9]);var inst_22013 = (state_22077[13]);var inst_22034__$1 = cljs.core.seq.call(null,inst_22013);var state_22077__$1 = (function (){var statearr_22148 = state_22077;(statearr_22148[9] = inst_22034__$1);
return statearr_22148;
})();if(inst_22034__$1)
{var statearr_22149_22211 = state_22077__$1;(statearr_22149_22211[1] = 33);
} else
{var statearr_22150_22212 = state_22077__$1;(statearr_22150_22212[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 29))
{var inst_22061 = (state_22077[2]);var state_22077__$1 = state_22077;var statearr_22151_22213 = state_22077__$1;(statearr_22151_22213[2] = inst_22061);
(statearr_22151_22213[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 30))
{var inst_22016 = (state_22077[10]);var inst_22015 = (state_22077[11]);var inst_22014 = (state_22077[12]);var inst_22013 = (state_22077[13]);var inst_22030 = (state_22077[2]);var inst_22031 = (inst_22016 + 1);var tmp22145 = inst_22015;var tmp22146 = inst_22014;var tmp22147 = inst_22013;var inst_22013__$1 = tmp22147;var inst_22014__$1 = tmp22146;var inst_22015__$1 = tmp22145;var inst_22016__$1 = inst_22031;var state_22077__$1 = (function (){var statearr_22152 = state_22077;(statearr_22152[31] = inst_22030);
(statearr_22152[10] = inst_22016__$1);
(statearr_22152[11] = inst_22015__$1);
(statearr_22152[12] = inst_22014__$1);
(statearr_22152[13] = inst_22013__$1);
return statearr_22152;
})();var statearr_22153_22214 = state_22077__$1;(statearr_22153_22214[2] = null);
(statearr_22153_22214[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22078 === 31))
{var inst_22021 = (state_22077[7]);var inst_22022 = (state_22077[2]);var inst_22023 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22024 = cljs.core.async.untap_STAR_.call(null,m,inst_22021);var state_22077__$1 = (function (){var statearr_22154 = state_22077;(statearr_22154[32] = inst_22022);
(statearr_22154[33] = inst_22023);
return statearr_22154;
})();var statearr_22155_22215 = state_22077__$1;(statearr_22155_22215[2] = inst_22024);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22077__$1);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_22159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22159[0] = state_machine__13813__auto__);
(statearr_22159[1] = 1);
return statearr_22159;
});
var state_machine__13813__auto____1 = (function (state_22077){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_22077);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e22160){if((e22160 instanceof Object))
{var ex__13816__auto__ = e22160;var statearr_22161_22216 = state_22077;(statearr_22161_22216[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22077);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22217 = state_22077;
state_22077 = G__22217;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_22077){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_22077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_22162 = f__13883__auto__.call(null);(statearr_22162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___22163);
return statearr_22162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
cljs.core.async.Mix = (function (){var obj22219 = {};return obj22219;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10246__auto__ = m;if(and__10246__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10246__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10885__auto__ = (((m == null))?null:m);return (function (){var or__10258__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t22329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22329 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22330){
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
this.meta22330 = meta22330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22329.cljs$lang$type = true;
cljs.core.async.t22329.cljs$lang$ctorStr = "cljs.core.async/t22329";
cljs.core.async.t22329.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t22329");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22331){var self__ = this;
var _22331__$1 = this;return self__.meta22330;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22331,meta22330__$1){var self__ = this;
var _22331__$1 = this;return (new cljs.core.async.t22329(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22330__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22329 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22329(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22330){return (new cljs.core.async.t22329(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22330));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22329(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13882__auto___22438 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_22396){var state_val_22397 = (state_22396[1]);if((state_val_22397 === 1))
{var inst_22335 = (state_22396[7]);var inst_22335__$1 = calc_state.call(null);var inst_22336 = cljs.core.seq_QMARK_.call(null,inst_22335__$1);var state_22396__$1 = (function (){var statearr_22398 = state_22396;(statearr_22398[7] = inst_22335__$1);
return statearr_22398;
})();if(inst_22336)
{var statearr_22399_22439 = state_22396__$1;(statearr_22399_22439[1] = 2);
} else
{var statearr_22400_22440 = state_22396__$1;(statearr_22400_22440[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 2))
{var inst_22335 = (state_22396[7]);var inst_22338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22335);var state_22396__$1 = state_22396;var statearr_22401_22441 = state_22396__$1;(statearr_22401_22441[2] = inst_22338);
(statearr_22401_22441[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 3))
{var inst_22335 = (state_22396[7]);var state_22396__$1 = state_22396;var statearr_22402_22442 = state_22396__$1;(statearr_22402_22442[2] = inst_22335);
(statearr_22402_22442[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 4))
{var inst_22335 = (state_22396[7]);var inst_22341 = (state_22396[2]);var inst_22342 = cljs.core.get.call(null,inst_22341,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22343 = cljs.core.get.call(null,inst_22341,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22344 = cljs.core.get.call(null,inst_22341,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22345 = inst_22335;var state_22396__$1 = (function (){var statearr_22403 = state_22396;(statearr_22403[8] = inst_22345);
(statearr_22403[9] = inst_22344);
(statearr_22403[10] = inst_22343);
(statearr_22403[11] = inst_22342);
return statearr_22403;
})();var statearr_22404_22443 = state_22396__$1;(statearr_22404_22443[2] = null);
(statearr_22404_22443[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 5))
{var inst_22345 = (state_22396[8]);var inst_22348 = cljs.core.seq_QMARK_.call(null,inst_22345);var state_22396__$1 = state_22396;if(inst_22348)
{var statearr_22405_22444 = state_22396__$1;(statearr_22405_22444[1] = 7);
} else
{var statearr_22406_22445 = state_22396__$1;(statearr_22406_22445[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 6))
{var inst_22394 = (state_22396[2]);var state_22396__$1 = state_22396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22396__$1,inst_22394);
} else
{if((state_val_22397 === 7))
{var inst_22345 = (state_22396[8]);var inst_22350 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22345);var state_22396__$1 = state_22396;var statearr_22407_22446 = state_22396__$1;(statearr_22407_22446[2] = inst_22350);
(statearr_22407_22446[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 8))
{var inst_22345 = (state_22396[8]);var state_22396__$1 = state_22396;var statearr_22408_22447 = state_22396__$1;(statearr_22408_22447[2] = inst_22345);
(statearr_22408_22447[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 9))
{var inst_22353 = (state_22396[12]);var inst_22353__$1 = (state_22396[2]);var inst_22354 = cljs.core.get.call(null,inst_22353__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22355 = cljs.core.get.call(null,inst_22353__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22356 = cljs.core.get.call(null,inst_22353__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22396__$1 = (function (){var statearr_22409 = state_22396;(statearr_22409[13] = inst_22356);
(statearr_22409[14] = inst_22355);
(statearr_22409[12] = inst_22353__$1);
return statearr_22409;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22396__$1,10,inst_22354);
} else
{if((state_val_22397 === 10))
{var inst_22360 = (state_22396[15]);var inst_22361 = (state_22396[16]);var inst_22359 = (state_22396[2]);var inst_22360__$1 = cljs.core.nth.call(null,inst_22359,0,null);var inst_22361__$1 = cljs.core.nth.call(null,inst_22359,1,null);var inst_22362 = (inst_22360__$1 == null);var inst_22363 = cljs.core._EQ_.call(null,inst_22361__$1,change);var inst_22364 = (inst_22362) || (inst_22363);var state_22396__$1 = (function (){var statearr_22410 = state_22396;(statearr_22410[15] = inst_22360__$1);
(statearr_22410[16] = inst_22361__$1);
return statearr_22410;
})();if(cljs.core.truth_(inst_22364))
{var statearr_22411_22448 = state_22396__$1;(statearr_22411_22448[1] = 11);
} else
{var statearr_22412_22449 = state_22396__$1;(statearr_22412_22449[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 11))
{var inst_22360 = (state_22396[15]);var inst_22366 = (inst_22360 == null);var state_22396__$1 = state_22396;if(cljs.core.truth_(inst_22366))
{var statearr_22413_22450 = state_22396__$1;(statearr_22413_22450[1] = 14);
} else
{var statearr_22414_22451 = state_22396__$1;(statearr_22414_22451[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 12))
{var inst_22356 = (state_22396[13]);var inst_22361 = (state_22396[16]);var inst_22375 = (state_22396[17]);var inst_22375__$1 = inst_22356.call(null,inst_22361);var state_22396__$1 = (function (){var statearr_22415 = state_22396;(statearr_22415[17] = inst_22375__$1);
return statearr_22415;
})();if(cljs.core.truth_(inst_22375__$1))
{var statearr_22416_22452 = state_22396__$1;(statearr_22416_22452[1] = 17);
} else
{var statearr_22417_22453 = state_22396__$1;(statearr_22417_22453[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 13))
{var inst_22392 = (state_22396[2]);var state_22396__$1 = state_22396;var statearr_22418_22454 = state_22396__$1;(statearr_22418_22454[2] = inst_22392);
(statearr_22418_22454[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 14))
{var inst_22361 = (state_22396[16]);var inst_22368 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22361);var state_22396__$1 = state_22396;var statearr_22419_22455 = state_22396__$1;(statearr_22419_22455[2] = inst_22368);
(statearr_22419_22455[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 15))
{var state_22396__$1 = state_22396;var statearr_22420_22456 = state_22396__$1;(statearr_22420_22456[2] = null);
(statearr_22420_22456[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 16))
{var inst_22371 = (state_22396[2]);var inst_22372 = calc_state.call(null);var inst_22345 = inst_22372;var state_22396__$1 = (function (){var statearr_22421 = state_22396;(statearr_22421[8] = inst_22345);
(statearr_22421[18] = inst_22371);
return statearr_22421;
})();var statearr_22422_22457 = state_22396__$1;(statearr_22422_22457[2] = null);
(statearr_22422_22457[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 17))
{var inst_22375 = (state_22396[17]);var state_22396__$1 = state_22396;var statearr_22423_22458 = state_22396__$1;(statearr_22423_22458[2] = inst_22375);
(statearr_22423_22458[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 18))
{var inst_22356 = (state_22396[13]);var inst_22355 = (state_22396[14]);var inst_22361 = (state_22396[16]);var inst_22378 = cljs.core.empty_QMARK_.call(null,inst_22356);var inst_22379 = inst_22355.call(null,inst_22361);var inst_22380 = cljs.core.not.call(null,inst_22379);var inst_22381 = (inst_22378) && (inst_22380);var state_22396__$1 = state_22396;var statearr_22424_22459 = state_22396__$1;(statearr_22424_22459[2] = inst_22381);
(statearr_22424_22459[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 19))
{var inst_22383 = (state_22396[2]);var state_22396__$1 = state_22396;if(cljs.core.truth_(inst_22383))
{var statearr_22425_22460 = state_22396__$1;(statearr_22425_22460[1] = 20);
} else
{var statearr_22426_22461 = state_22396__$1;(statearr_22426_22461[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 20))
{var inst_22360 = (state_22396[15]);var state_22396__$1 = state_22396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22396__$1,23,out,inst_22360);
} else
{if((state_val_22397 === 21))
{var state_22396__$1 = state_22396;var statearr_22427_22462 = state_22396__$1;(statearr_22427_22462[2] = null);
(statearr_22427_22462[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 22))
{var inst_22353 = (state_22396[12]);var inst_22389 = (state_22396[2]);var inst_22345 = inst_22353;var state_22396__$1 = (function (){var statearr_22428 = state_22396;(statearr_22428[19] = inst_22389);
(statearr_22428[8] = inst_22345);
return statearr_22428;
})();var statearr_22429_22463 = state_22396__$1;(statearr_22429_22463[2] = null);
(statearr_22429_22463[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22397 === 23))
{var inst_22386 = (state_22396[2]);var state_22396__$1 = state_22396;var statearr_22430_22464 = state_22396__$1;(statearr_22430_22464[2] = inst_22386);
(statearr_22430_22464[1] = 22);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_22434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22434[0] = state_machine__13813__auto__);
(statearr_22434[1] = 1);
return statearr_22434;
});
var state_machine__13813__auto____1 = (function (state_22396){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_22396);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e22435){if((e22435 instanceof Object))
{var ex__13816__auto__ = e22435;var statearr_22436_22465 = state_22396;(statearr_22436_22465[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22396);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22435;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22466 = state_22396;
state_22396 = G__22466;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_22396){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_22396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_22437 = f__13883__auto__.call(null);(statearr_22437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___22438);
return statearr_22437;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
cljs.core.async.Pub = (function (){var obj22468 = {};return obj22468;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10246__auto__ = p;if(and__10246__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10246__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10885__auto__ = (((p == null))?null:p);return (function (){var or__10258__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10246__auto__ = p;if(and__10246__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10246__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10885__auto__ = (((p == null))?null:p);return (function (){var or__10258__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10246__auto__ = p;if(and__10246__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10246__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10885__auto__ = (((p == null))?null:p);return (function (){var or__10258__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10246__auto__ = p;if(and__10246__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10246__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10885__auto__ = (((p == null))?null:p);return (function (){var or__10258__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10885__auto__)]);if(or__10258__auto__)
{return or__10258__auto__;
} else
{var or__10258__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10258__auto____$1)
{return or__10258__auto____$1;
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
return (function (topic){var or__10258__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10258__auto__))
{return or__10258__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10258__auto__,mults){
return (function (p1__22469_SHARP_){if(cljs.core.truth_(p1__22469_SHARP_.call(null,topic)))
{return p1__22469_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22469_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10258__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22594 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22595){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22595 = meta22595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22594.cljs$lang$type = true;
cljs.core.async.t22594.cljs$lang$ctorStr = "cljs.core.async/t22594";
cljs.core.async.t22594.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10825__auto__,writer__10826__auto__,opt__10827__auto__){return cljs.core._write.call(null,writer__10826__auto__,"cljs.core.async/t22594");
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22596){var self__ = this;
var _22596__$1 = this;return self__.meta22595;
});})(mults,ensure_mult))
;
cljs.core.async.t22594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22596,meta22595__$1){var self__ = this;
var _22596__$1 = this;return (new cljs.core.async.t22594(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22595__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22594 = ((function (mults,ensure_mult){
return (function __GT_t22594(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22595){return (new cljs.core.async.t22594(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22595));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22594(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13882__auto___22718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_22670){var state_val_22671 = (state_22670[1]);if((state_val_22671 === 1))
{var state_22670__$1 = state_22670;var statearr_22672_22719 = state_22670__$1;(statearr_22672_22719[2] = null);
(statearr_22672_22719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 2))
{var state_22670__$1 = state_22670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22670__$1,4,ch);
} else
{if((state_val_22671 === 3))
{var inst_22668 = (state_22670[2]);var state_22670__$1 = state_22670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22670__$1,inst_22668);
} else
{if((state_val_22671 === 4))
{var inst_22599 = (state_22670[7]);var inst_22599__$1 = (state_22670[2]);var inst_22600 = (inst_22599__$1 == null);var state_22670__$1 = (function (){var statearr_22673 = state_22670;(statearr_22673[7] = inst_22599__$1);
return statearr_22673;
})();if(cljs.core.truth_(inst_22600))
{var statearr_22674_22720 = state_22670__$1;(statearr_22674_22720[1] = 5);
} else
{var statearr_22675_22721 = state_22670__$1;(statearr_22675_22721[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 5))
{var inst_22606 = cljs.core.deref.call(null,mults);var inst_22607 = cljs.core.vals.call(null,inst_22606);var inst_22608 = cljs.core.seq.call(null,inst_22607);var inst_22609 = inst_22608;var inst_22610 = null;var inst_22611 = 0;var inst_22612 = 0;var state_22670__$1 = (function (){var statearr_22676 = state_22670;(statearr_22676[8] = inst_22609);
(statearr_22676[9] = inst_22610);
(statearr_22676[10] = inst_22611);
(statearr_22676[11] = inst_22612);
return statearr_22676;
})();var statearr_22677_22722 = state_22670__$1;(statearr_22677_22722[2] = null);
(statearr_22677_22722[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 6))
{var inst_22647 = (state_22670[12]);var inst_22649 = (state_22670[13]);var inst_22599 = (state_22670[7]);var inst_22647__$1 = topic_fn.call(null,inst_22599);var inst_22648 = cljs.core.deref.call(null,mults);var inst_22649__$1 = cljs.core.get.call(null,inst_22648,inst_22647__$1);var state_22670__$1 = (function (){var statearr_22678 = state_22670;(statearr_22678[12] = inst_22647__$1);
(statearr_22678[13] = inst_22649__$1);
return statearr_22678;
})();if(cljs.core.truth_(inst_22649__$1))
{var statearr_22679_22723 = state_22670__$1;(statearr_22679_22723[1] = 19);
} else
{var statearr_22680_22724 = state_22670__$1;(statearr_22680_22724[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 7))
{var inst_22666 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22681_22725 = state_22670__$1;(statearr_22681_22725[2] = inst_22666);
(statearr_22681_22725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 8))
{var inst_22611 = (state_22670[10]);var inst_22612 = (state_22670[11]);var inst_22614 = (inst_22612 < inst_22611);var inst_22615 = inst_22614;var state_22670__$1 = state_22670;if(cljs.core.truth_(inst_22615))
{var statearr_22685_22726 = state_22670__$1;(statearr_22685_22726[1] = 10);
} else
{var statearr_22686_22727 = state_22670__$1;(statearr_22686_22727[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 9))
{var inst_22645 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22687_22728 = state_22670__$1;(statearr_22687_22728[2] = inst_22645);
(statearr_22687_22728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 10))
{var inst_22609 = (state_22670[8]);var inst_22610 = (state_22670[9]);var inst_22611 = (state_22670[10]);var inst_22612 = (state_22670[11]);var inst_22617 = cljs.core._nth.call(null,inst_22610,inst_22612);var inst_22618 = cljs.core.async.muxch_STAR_.call(null,inst_22617);var inst_22619 = cljs.core.async.close_BANG_.call(null,inst_22618);var inst_22620 = (inst_22612 + 1);var tmp22682 = inst_22609;var tmp22683 = inst_22610;var tmp22684 = inst_22611;var inst_22609__$1 = tmp22682;var inst_22610__$1 = tmp22683;var inst_22611__$1 = tmp22684;var inst_22612__$1 = inst_22620;var state_22670__$1 = (function (){var statearr_22688 = state_22670;(statearr_22688[8] = inst_22609__$1);
(statearr_22688[9] = inst_22610__$1);
(statearr_22688[10] = inst_22611__$1);
(statearr_22688[11] = inst_22612__$1);
(statearr_22688[14] = inst_22619);
return statearr_22688;
})();var statearr_22689_22729 = state_22670__$1;(statearr_22689_22729[2] = null);
(statearr_22689_22729[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 11))
{var inst_22623 = (state_22670[15]);var inst_22609 = (state_22670[8]);var inst_22623__$1 = cljs.core.seq.call(null,inst_22609);var state_22670__$1 = (function (){var statearr_22690 = state_22670;(statearr_22690[15] = inst_22623__$1);
return statearr_22690;
})();if(inst_22623__$1)
{var statearr_22691_22730 = state_22670__$1;(statearr_22691_22730[1] = 13);
} else
{var statearr_22692_22731 = state_22670__$1;(statearr_22692_22731[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 12))
{var inst_22643 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22693_22732 = state_22670__$1;(statearr_22693_22732[2] = inst_22643);
(statearr_22693_22732[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 13))
{var inst_22623 = (state_22670[15]);var inst_22625 = cljs.core.chunked_seq_QMARK_.call(null,inst_22623);var state_22670__$1 = state_22670;if(inst_22625)
{var statearr_22694_22733 = state_22670__$1;(statearr_22694_22733[1] = 16);
} else
{var statearr_22695_22734 = state_22670__$1;(statearr_22695_22734[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 14))
{var state_22670__$1 = state_22670;var statearr_22696_22735 = state_22670__$1;(statearr_22696_22735[2] = null);
(statearr_22696_22735[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 15))
{var inst_22641 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22697_22736 = state_22670__$1;(statearr_22697_22736[2] = inst_22641);
(statearr_22697_22736[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 16))
{var inst_22623 = (state_22670[15]);var inst_22627 = cljs.core.chunk_first.call(null,inst_22623);var inst_22628 = cljs.core.chunk_rest.call(null,inst_22623);var inst_22629 = cljs.core.count.call(null,inst_22627);var inst_22609 = inst_22628;var inst_22610 = inst_22627;var inst_22611 = inst_22629;var inst_22612 = 0;var state_22670__$1 = (function (){var statearr_22698 = state_22670;(statearr_22698[8] = inst_22609);
(statearr_22698[9] = inst_22610);
(statearr_22698[10] = inst_22611);
(statearr_22698[11] = inst_22612);
return statearr_22698;
})();var statearr_22699_22737 = state_22670__$1;(statearr_22699_22737[2] = null);
(statearr_22699_22737[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 17))
{var inst_22623 = (state_22670[15]);var inst_22632 = cljs.core.first.call(null,inst_22623);var inst_22633 = cljs.core.async.muxch_STAR_.call(null,inst_22632);var inst_22634 = cljs.core.async.close_BANG_.call(null,inst_22633);var inst_22635 = cljs.core.next.call(null,inst_22623);var inst_22609 = inst_22635;var inst_22610 = null;var inst_22611 = 0;var inst_22612 = 0;var state_22670__$1 = (function (){var statearr_22700 = state_22670;(statearr_22700[8] = inst_22609);
(statearr_22700[9] = inst_22610);
(statearr_22700[10] = inst_22611);
(statearr_22700[11] = inst_22612);
(statearr_22700[16] = inst_22634);
return statearr_22700;
})();var statearr_22701_22738 = state_22670__$1;(statearr_22701_22738[2] = null);
(statearr_22701_22738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 18))
{var inst_22638 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22702_22739 = state_22670__$1;(statearr_22702_22739[2] = inst_22638);
(statearr_22702_22739[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 19))
{var state_22670__$1 = state_22670;var statearr_22703_22740 = state_22670__$1;(statearr_22703_22740[2] = null);
(statearr_22703_22740[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 20))
{var state_22670__$1 = state_22670;var statearr_22704_22741 = state_22670__$1;(statearr_22704_22741[2] = null);
(statearr_22704_22741[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 21))
{var inst_22663 = (state_22670[2]);var state_22670__$1 = (function (){var statearr_22705 = state_22670;(statearr_22705[17] = inst_22663);
return statearr_22705;
})();var statearr_22706_22742 = state_22670__$1;(statearr_22706_22742[2] = null);
(statearr_22706_22742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 22))
{var inst_22660 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22707_22743 = state_22670__$1;(statearr_22707_22743[2] = inst_22660);
(statearr_22707_22743[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 23))
{var inst_22647 = (state_22670[12]);var inst_22651 = (state_22670[2]);var inst_22652 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22647);var state_22670__$1 = (function (){var statearr_22708 = state_22670;(statearr_22708[18] = inst_22651);
return statearr_22708;
})();var statearr_22709_22744 = state_22670__$1;(statearr_22709_22744[2] = inst_22652);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22670__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22671 === 24))
{var inst_22649 = (state_22670[13]);var inst_22599 = (state_22670[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22670,23,Object,null,22);var inst_22656 = cljs.core.async.muxch_STAR_.call(null,inst_22649);var state_22670__$1 = state_22670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22670__$1,25,inst_22656,inst_22599);
} else
{if((state_val_22671 === 25))
{var inst_22658 = (state_22670[2]);var state_22670__$1 = state_22670;var statearr_22710_22745 = state_22670__$1;(statearr_22710_22745[2] = inst_22658);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22670__$1);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_22714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22714[0] = state_machine__13813__auto__);
(statearr_22714[1] = 1);
return statearr_22714;
});
var state_machine__13813__auto____1 = (function (state_22670){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_22670);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e22715){if((e22715 instanceof Object))
{var ex__13816__auto__ = e22715;var statearr_22716_22746 = state_22670;(statearr_22716_22746[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22747 = state_22670;
state_22670 = G__22747;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_22670){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_22670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_22717 = f__13883__auto__.call(null);(statearr_22717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___22718);
return statearr_22717;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
,cljs.core.range.call(null,cnt));var c__13882__auto___22884 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_22854){var state_val_22855 = (state_22854[1]);if((state_val_22855 === 1))
{var state_22854__$1 = state_22854;var statearr_22856_22885 = state_22854__$1;(statearr_22856_22885[2] = null);
(statearr_22856_22885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 2))
{var inst_22817 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_22818 = 0;var state_22854__$1 = (function (){var statearr_22857 = state_22854;(statearr_22857[7] = inst_22818);
(statearr_22857[8] = inst_22817);
return statearr_22857;
})();var statearr_22858_22886 = state_22854__$1;(statearr_22858_22886[2] = null);
(statearr_22858_22886[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 3))
{var inst_22852 = (state_22854[2]);var state_22854__$1 = state_22854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22854__$1,inst_22852);
} else
{if((state_val_22855 === 4))
{var inst_22818 = (state_22854[7]);var inst_22820 = (inst_22818 < cnt);var state_22854__$1 = state_22854;if(cljs.core.truth_(inst_22820))
{var statearr_22859_22887 = state_22854__$1;(statearr_22859_22887[1] = 6);
} else
{var statearr_22860_22888 = state_22854__$1;(statearr_22860_22888[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 5))
{var inst_22838 = (state_22854[2]);var state_22854__$1 = (function (){var statearr_22861 = state_22854;(statearr_22861[9] = inst_22838);
return statearr_22861;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22854__$1,12,dchan);
} else
{if((state_val_22855 === 6))
{var state_22854__$1 = state_22854;var statearr_22862_22889 = state_22854__$1;(statearr_22862_22889[2] = null);
(statearr_22862_22889[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 7))
{var state_22854__$1 = state_22854;var statearr_22863_22890 = state_22854__$1;(statearr_22863_22890[2] = null);
(statearr_22863_22890[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 8))
{var inst_22836 = (state_22854[2]);var state_22854__$1 = state_22854;var statearr_22864_22891 = state_22854__$1;(statearr_22864_22891[2] = inst_22836);
(statearr_22864_22891[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 9))
{var inst_22818 = (state_22854[7]);var inst_22831 = (state_22854[2]);var inst_22832 = (inst_22818 + 1);var inst_22818__$1 = inst_22832;var state_22854__$1 = (function (){var statearr_22865 = state_22854;(statearr_22865[7] = inst_22818__$1);
(statearr_22865[10] = inst_22831);
return statearr_22865;
})();var statearr_22866_22892 = state_22854__$1;(statearr_22866_22892[2] = null);
(statearr_22866_22892[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 10))
{var inst_22822 = (state_22854[2]);var inst_22823 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_22854__$1 = (function (){var statearr_22867 = state_22854;(statearr_22867[11] = inst_22822);
return statearr_22867;
})();var statearr_22868_22893 = state_22854__$1;(statearr_22868_22893[2] = inst_22823);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22854__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 11))
{var inst_22818 = (state_22854[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22854,10,Object,null,9);var inst_22827 = chs__$1.call(null,inst_22818);var inst_22828 = done.call(null,inst_22818);var inst_22829 = cljs.core.async.take_BANG_.call(null,inst_22827,inst_22828);var state_22854__$1 = state_22854;var statearr_22869_22894 = state_22854__$1;(statearr_22869_22894[2] = inst_22829);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22854__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 12))
{var inst_22840 = (state_22854[12]);var inst_22840__$1 = (state_22854[2]);var inst_22841 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22840__$1);var state_22854__$1 = (function (){var statearr_22870 = state_22854;(statearr_22870[12] = inst_22840__$1);
return statearr_22870;
})();if(cljs.core.truth_(inst_22841))
{var statearr_22871_22895 = state_22854__$1;(statearr_22871_22895[1] = 13);
} else
{var statearr_22872_22896 = state_22854__$1;(statearr_22872_22896[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 13))
{var inst_22843 = cljs.core.async.close_BANG_.call(null,out);var state_22854__$1 = state_22854;var statearr_22873_22897 = state_22854__$1;(statearr_22873_22897[2] = inst_22843);
(statearr_22873_22897[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 14))
{var inst_22840 = (state_22854[12]);var inst_22845 = cljs.core.apply.call(null,f,inst_22840);var state_22854__$1 = state_22854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22854__$1,16,out,inst_22845);
} else
{if((state_val_22855 === 15))
{var inst_22850 = (state_22854[2]);var state_22854__$1 = state_22854;var statearr_22874_22898 = state_22854__$1;(statearr_22874_22898[2] = inst_22850);
(statearr_22874_22898[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22855 === 16))
{var inst_22847 = (state_22854[2]);var state_22854__$1 = (function (){var statearr_22875 = state_22854;(statearr_22875[13] = inst_22847);
return statearr_22875;
})();var statearr_22876_22899 = state_22854__$1;(statearr_22876_22899[2] = null);
(statearr_22876_22899[1] = 2);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_22880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22880[0] = state_machine__13813__auto__);
(statearr_22880[1] = 1);
return statearr_22880;
});
var state_machine__13813__auto____1 = (function (state_22854){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_22854);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e22881){if((e22881 instanceof Object))
{var ex__13816__auto__ = e22881;var statearr_22882_22900 = state_22854;(statearr_22882_22900[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22854);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22881;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22901 = state_22854;
state_22854 = G__22901;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_22854){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_22854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_22883 = f__13883__auto__.call(null);(statearr_22883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___22884);
return statearr_22883;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13882__auto___23009 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_22985){var state_val_22986 = (state_22985[1]);if((state_val_22986 === 1))
{var inst_22956 = cljs.core.vec.call(null,chs);var inst_22957 = inst_22956;var state_22985__$1 = (function (){var statearr_22987 = state_22985;(statearr_22987[7] = inst_22957);
return statearr_22987;
})();var statearr_22988_23010 = state_22985__$1;(statearr_22988_23010[2] = null);
(statearr_22988_23010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 2))
{var inst_22957 = (state_22985[7]);var inst_22959 = cljs.core.count.call(null,inst_22957);var inst_22960 = (inst_22959 > 0);var state_22985__$1 = state_22985;if(cljs.core.truth_(inst_22960))
{var statearr_22989_23011 = state_22985__$1;(statearr_22989_23011[1] = 4);
} else
{var statearr_22990_23012 = state_22985__$1;(statearr_22990_23012[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 3))
{var inst_22983 = (state_22985[2]);var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22985__$1,inst_22983);
} else
{if((state_val_22986 === 4))
{var inst_22957 = (state_22985[7]);var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22985__$1,7,inst_22957);
} else
{if((state_val_22986 === 5))
{var inst_22979 = cljs.core.async.close_BANG_.call(null,out);var state_22985__$1 = state_22985;var statearr_22991_23013 = state_22985__$1;(statearr_22991_23013[2] = inst_22979);
(statearr_22991_23013[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 6))
{var inst_22981 = (state_22985[2]);var state_22985__$1 = state_22985;var statearr_22992_23014 = state_22985__$1;(statearr_22992_23014[2] = inst_22981);
(statearr_22992_23014[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 7))
{var inst_22964 = (state_22985[8]);var inst_22965 = (state_22985[9]);var inst_22964__$1 = (state_22985[2]);var inst_22965__$1 = cljs.core.nth.call(null,inst_22964__$1,0,null);var inst_22966 = cljs.core.nth.call(null,inst_22964__$1,1,null);var inst_22967 = (inst_22965__$1 == null);var state_22985__$1 = (function (){var statearr_22993 = state_22985;(statearr_22993[10] = inst_22966);
(statearr_22993[8] = inst_22964__$1);
(statearr_22993[9] = inst_22965__$1);
return statearr_22993;
})();if(cljs.core.truth_(inst_22967))
{var statearr_22994_23015 = state_22985__$1;(statearr_22994_23015[1] = 8);
} else
{var statearr_22995_23016 = state_22985__$1;(statearr_22995_23016[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 8))
{var inst_22957 = (state_22985[7]);var inst_22966 = (state_22985[10]);var inst_22964 = (state_22985[8]);var inst_22965 = (state_22985[9]);var inst_22969 = (function (){var c = inst_22966;var v = inst_22965;var vec__22962 = inst_22964;var cs = inst_22957;return ((function (c,v,vec__22962,cs,inst_22957,inst_22966,inst_22964,inst_22965,state_val_22986){
return (function (p1__22902_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__22902_SHARP_);
});
;})(c,v,vec__22962,cs,inst_22957,inst_22966,inst_22964,inst_22965,state_val_22986))
})();var inst_22970 = cljs.core.filterv.call(null,inst_22969,inst_22957);var inst_22957__$1 = inst_22970;var state_22985__$1 = (function (){var statearr_22996 = state_22985;(statearr_22996[7] = inst_22957__$1);
return statearr_22996;
})();var statearr_22997_23017 = state_22985__$1;(statearr_22997_23017[2] = null);
(statearr_22997_23017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 9))
{var inst_22965 = (state_22985[9]);var state_22985__$1 = state_22985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22985__$1,11,out,inst_22965);
} else
{if((state_val_22986 === 10))
{var inst_22977 = (state_22985[2]);var state_22985__$1 = state_22985;var statearr_22999_23018 = state_22985__$1;(statearr_22999_23018[2] = inst_22977);
(statearr_22999_23018[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22986 === 11))
{var inst_22957 = (state_22985[7]);var inst_22974 = (state_22985[2]);var tmp22998 = inst_22957;var inst_22957__$1 = tmp22998;var state_22985__$1 = (function (){var statearr_23000 = state_22985;(statearr_23000[7] = inst_22957__$1);
(statearr_23000[11] = inst_22974);
return statearr_23000;
})();var statearr_23001_23019 = state_22985__$1;(statearr_23001_23019[2] = null);
(statearr_23001_23019[1] = 2);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_23005 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23005[0] = state_machine__13813__auto__);
(statearr_23005[1] = 1);
return statearr_23005;
});
var state_machine__13813__auto____1 = (function (state_22985){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_22985);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e23006){if((e23006 instanceof Object))
{var ex__13816__auto__ = e23006;var statearr_23007_23020 = state_22985;(statearr_23007_23020[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23021 = state_22985;
state_22985 = G__23021;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_22985){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_22985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_23008 = f__13883__auto__.call(null);(statearr_23008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___23009);
return statearr_23008;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13882__auto___23114 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_23091){var state_val_23092 = (state_23091[1]);if((state_val_23092 === 1))
{var inst_23068 = 0;var state_23091__$1 = (function (){var statearr_23093 = state_23091;(statearr_23093[7] = inst_23068);
return statearr_23093;
})();var statearr_23094_23115 = state_23091__$1;(statearr_23094_23115[2] = null);
(statearr_23094_23115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 2))
{var inst_23068 = (state_23091[7]);var inst_23070 = (inst_23068 < n);var state_23091__$1 = state_23091;if(cljs.core.truth_(inst_23070))
{var statearr_23095_23116 = state_23091__$1;(statearr_23095_23116[1] = 4);
} else
{var statearr_23096_23117 = state_23091__$1;(statearr_23096_23117[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 3))
{var inst_23088 = (state_23091[2]);var inst_23089 = cljs.core.async.close_BANG_.call(null,out);var state_23091__$1 = (function (){var statearr_23097 = state_23091;(statearr_23097[8] = inst_23088);
return statearr_23097;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23091__$1,inst_23089);
} else
{if((state_val_23092 === 4))
{var state_23091__$1 = state_23091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23091__$1,7,ch);
} else
{if((state_val_23092 === 5))
{var state_23091__$1 = state_23091;var statearr_23098_23118 = state_23091__$1;(statearr_23098_23118[2] = null);
(statearr_23098_23118[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 6))
{var inst_23086 = (state_23091[2]);var state_23091__$1 = state_23091;var statearr_23099_23119 = state_23091__$1;(statearr_23099_23119[2] = inst_23086);
(statearr_23099_23119[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 7))
{var inst_23073 = (state_23091[9]);var inst_23073__$1 = (state_23091[2]);var inst_23074 = (inst_23073__$1 == null);var inst_23075 = cljs.core.not.call(null,inst_23074);var state_23091__$1 = (function (){var statearr_23100 = state_23091;(statearr_23100[9] = inst_23073__$1);
return statearr_23100;
})();if(inst_23075)
{var statearr_23101_23120 = state_23091__$1;(statearr_23101_23120[1] = 8);
} else
{var statearr_23102_23121 = state_23091__$1;(statearr_23102_23121[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 8))
{var inst_23073 = (state_23091[9]);var state_23091__$1 = state_23091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23091__$1,11,out,inst_23073);
} else
{if((state_val_23092 === 9))
{var state_23091__$1 = state_23091;var statearr_23103_23122 = state_23091__$1;(statearr_23103_23122[2] = null);
(statearr_23103_23122[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 10))
{var inst_23083 = (state_23091[2]);var state_23091__$1 = state_23091;var statearr_23104_23123 = state_23091__$1;(statearr_23104_23123[2] = inst_23083);
(statearr_23104_23123[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23092 === 11))
{var inst_23068 = (state_23091[7]);var inst_23078 = (state_23091[2]);var inst_23079 = (inst_23068 + 1);var inst_23068__$1 = inst_23079;var state_23091__$1 = (function (){var statearr_23105 = state_23091;(statearr_23105[10] = inst_23078);
(statearr_23105[7] = inst_23068__$1);
return statearr_23105;
})();var statearr_23106_23124 = state_23091__$1;(statearr_23106_23124[2] = null);
(statearr_23106_23124[1] = 2);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_23110 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23110[0] = state_machine__13813__auto__);
(statearr_23110[1] = 1);
return statearr_23110;
});
var state_machine__13813__auto____1 = (function (state_23091){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_23091);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e23111){if((e23111 instanceof Object))
{var ex__13816__auto__ = e23111;var statearr_23112_23125 = state_23091;(statearr_23112_23125[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23091);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23111;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23126 = state_23091;
state_23091 = G__23126;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_23091){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_23091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_23113 = f__13883__auto__.call(null);(statearr_23113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___23114);
return statearr_23113;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13882__auto___23223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_23198){var state_val_23199 = (state_23198[1]);if((state_val_23199 === 1))
{var inst_23175 = null;var state_23198__$1 = (function (){var statearr_23200 = state_23198;(statearr_23200[7] = inst_23175);
return statearr_23200;
})();var statearr_23201_23224 = state_23198__$1;(statearr_23201_23224[2] = null);
(statearr_23201_23224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 2))
{var state_23198__$1 = state_23198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23198__$1,4,ch);
} else
{if((state_val_23199 === 3))
{var inst_23195 = (state_23198[2]);var inst_23196 = cljs.core.async.close_BANG_.call(null,out);var state_23198__$1 = (function (){var statearr_23202 = state_23198;(statearr_23202[8] = inst_23195);
return statearr_23202;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23198__$1,inst_23196);
} else
{if((state_val_23199 === 4))
{var inst_23178 = (state_23198[9]);var inst_23178__$1 = (state_23198[2]);var inst_23179 = (inst_23178__$1 == null);var inst_23180 = cljs.core.not.call(null,inst_23179);var state_23198__$1 = (function (){var statearr_23203 = state_23198;(statearr_23203[9] = inst_23178__$1);
return statearr_23203;
})();if(inst_23180)
{var statearr_23204_23225 = state_23198__$1;(statearr_23204_23225[1] = 5);
} else
{var statearr_23205_23226 = state_23198__$1;(statearr_23205_23226[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 5))
{var inst_23175 = (state_23198[7]);var inst_23178 = (state_23198[9]);var inst_23182 = cljs.core._EQ_.call(null,inst_23178,inst_23175);var state_23198__$1 = state_23198;if(inst_23182)
{var statearr_23206_23227 = state_23198__$1;(statearr_23206_23227[1] = 8);
} else
{var statearr_23207_23228 = state_23198__$1;(statearr_23207_23228[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 6))
{var state_23198__$1 = state_23198;var statearr_23209_23229 = state_23198__$1;(statearr_23209_23229[2] = null);
(statearr_23209_23229[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 7))
{var inst_23193 = (state_23198[2]);var state_23198__$1 = state_23198;var statearr_23210_23230 = state_23198__$1;(statearr_23210_23230[2] = inst_23193);
(statearr_23210_23230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 8))
{var inst_23175 = (state_23198[7]);var tmp23208 = inst_23175;var inst_23175__$1 = tmp23208;var state_23198__$1 = (function (){var statearr_23211 = state_23198;(statearr_23211[7] = inst_23175__$1);
return statearr_23211;
})();var statearr_23212_23231 = state_23198__$1;(statearr_23212_23231[2] = null);
(statearr_23212_23231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 9))
{var inst_23178 = (state_23198[9]);var state_23198__$1 = state_23198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23198__$1,11,out,inst_23178);
} else
{if((state_val_23199 === 10))
{var inst_23190 = (state_23198[2]);var state_23198__$1 = state_23198;var statearr_23213_23232 = state_23198__$1;(statearr_23213_23232[2] = inst_23190);
(statearr_23213_23232[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23199 === 11))
{var inst_23178 = (state_23198[9]);var inst_23187 = (state_23198[2]);var inst_23175 = inst_23178;var state_23198__$1 = (function (){var statearr_23214 = state_23198;(statearr_23214[7] = inst_23175);
(statearr_23214[10] = inst_23187);
return statearr_23214;
})();var statearr_23215_23233 = state_23198__$1;(statearr_23215_23233[2] = null);
(statearr_23215_23233[1] = 2);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_23219 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23219[0] = state_machine__13813__auto__);
(statearr_23219[1] = 1);
return statearr_23219;
});
var state_machine__13813__auto____1 = (function (state_23198){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_23198);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e23220){if((e23220 instanceof Object))
{var ex__13816__auto__ = e23220;var statearr_23221_23234 = state_23198;(statearr_23221_23234[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23235 = state_23198;
state_23198 = G__23235;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_23198){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_23198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_23222 = f__13883__auto__.call(null);(statearr_23222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___23223);
return statearr_23222;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13882__auto___23370 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_23340){var state_val_23341 = (state_23340[1]);if((state_val_23341 === 1))
{var inst_23303 = (new Array(n));var inst_23304 = inst_23303;var inst_23305 = 0;var state_23340__$1 = (function (){var statearr_23342 = state_23340;(statearr_23342[7] = inst_23304);
(statearr_23342[8] = inst_23305);
return statearr_23342;
})();var statearr_23343_23371 = state_23340__$1;(statearr_23343_23371[2] = null);
(statearr_23343_23371[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 2))
{var state_23340__$1 = state_23340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23340__$1,4,ch);
} else
{if((state_val_23341 === 3))
{var inst_23338 = (state_23340[2]);var state_23340__$1 = state_23340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23340__$1,inst_23338);
} else
{if((state_val_23341 === 4))
{var inst_23308 = (state_23340[9]);var inst_23308__$1 = (state_23340[2]);var inst_23309 = (inst_23308__$1 == null);var inst_23310 = cljs.core.not.call(null,inst_23309);var state_23340__$1 = (function (){var statearr_23344 = state_23340;(statearr_23344[9] = inst_23308__$1);
return statearr_23344;
})();if(inst_23310)
{var statearr_23345_23372 = state_23340__$1;(statearr_23345_23372[1] = 5);
} else
{var statearr_23346_23373 = state_23340__$1;(statearr_23346_23373[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 5))
{var inst_23313 = (state_23340[10]);var inst_23304 = (state_23340[7]);var inst_23305 = (state_23340[8]);var inst_23308 = (state_23340[9]);var inst_23312 = (inst_23304[inst_23305] = inst_23308);var inst_23313__$1 = (inst_23305 + 1);var inst_23314 = (inst_23313__$1 < n);var state_23340__$1 = (function (){var statearr_23347 = state_23340;(statearr_23347[10] = inst_23313__$1);
(statearr_23347[11] = inst_23312);
return statearr_23347;
})();if(cljs.core.truth_(inst_23314))
{var statearr_23348_23374 = state_23340__$1;(statearr_23348_23374[1] = 8);
} else
{var statearr_23349_23375 = state_23340__$1;(statearr_23349_23375[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 6))
{var inst_23305 = (state_23340[8]);var inst_23326 = (inst_23305 > 0);var state_23340__$1 = state_23340;if(cljs.core.truth_(inst_23326))
{var statearr_23351_23376 = state_23340__$1;(statearr_23351_23376[1] = 12);
} else
{var statearr_23352_23377 = state_23340__$1;(statearr_23352_23377[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 7))
{var inst_23336 = (state_23340[2]);var state_23340__$1 = state_23340;var statearr_23353_23378 = state_23340__$1;(statearr_23353_23378[2] = inst_23336);
(statearr_23353_23378[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 8))
{var inst_23313 = (state_23340[10]);var inst_23304 = (state_23340[7]);var tmp23350 = inst_23304;var inst_23304__$1 = tmp23350;var inst_23305 = inst_23313;var state_23340__$1 = (function (){var statearr_23354 = state_23340;(statearr_23354[7] = inst_23304__$1);
(statearr_23354[8] = inst_23305);
return statearr_23354;
})();var statearr_23355_23379 = state_23340__$1;(statearr_23355_23379[2] = null);
(statearr_23355_23379[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 9))
{var inst_23304 = (state_23340[7]);var inst_23318 = cljs.core.vec.call(null,inst_23304);var state_23340__$1 = state_23340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23340__$1,11,out,inst_23318);
} else
{if((state_val_23341 === 10))
{var inst_23324 = (state_23340[2]);var state_23340__$1 = state_23340;var statearr_23356_23380 = state_23340__$1;(statearr_23356_23380[2] = inst_23324);
(statearr_23356_23380[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 11))
{var inst_23320 = (state_23340[2]);var inst_23321 = (new Array(n));var inst_23304 = inst_23321;var inst_23305 = 0;var state_23340__$1 = (function (){var statearr_23357 = state_23340;(statearr_23357[12] = inst_23320);
(statearr_23357[7] = inst_23304);
(statearr_23357[8] = inst_23305);
return statearr_23357;
})();var statearr_23358_23381 = state_23340__$1;(statearr_23358_23381[2] = null);
(statearr_23358_23381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 12))
{var inst_23304 = (state_23340[7]);var inst_23328 = cljs.core.vec.call(null,inst_23304);var state_23340__$1 = state_23340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23340__$1,15,out,inst_23328);
} else
{if((state_val_23341 === 13))
{var state_23340__$1 = state_23340;var statearr_23359_23382 = state_23340__$1;(statearr_23359_23382[2] = null);
(statearr_23359_23382[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 14))
{var inst_23333 = (state_23340[2]);var inst_23334 = cljs.core.async.close_BANG_.call(null,out);var state_23340__$1 = (function (){var statearr_23360 = state_23340;(statearr_23360[13] = inst_23333);
return statearr_23360;
})();var statearr_23361_23383 = state_23340__$1;(statearr_23361_23383[2] = inst_23334);
(statearr_23361_23383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23341 === 15))
{var inst_23330 = (state_23340[2]);var state_23340__$1 = state_23340;var statearr_23362_23384 = state_23340__$1;(statearr_23362_23384[2] = inst_23330);
(statearr_23362_23384[1] = 14);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_23366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23366[0] = state_machine__13813__auto__);
(statearr_23366[1] = 1);
return statearr_23366;
});
var state_machine__13813__auto____1 = (function (state_23340){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_23340);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e23367){if((e23367 instanceof Object))
{var ex__13816__auto__ = e23367;var statearr_23368_23385 = state_23340;(statearr_23368_23385[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23386 = state_23340;
state_23340 = G__23386;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_23340){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_23340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_23369 = f__13883__auto__.call(null);(statearr_23369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___23370);
return statearr_23369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13882__auto___23529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13883__auto__ = (function (){var switch__13812__auto__ = (function (state_23499){var state_val_23500 = (state_23499[1]);if((state_val_23500 === 1))
{var inst_23458 = [];var inst_23459 = inst_23458;var inst_23460 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23499__$1 = (function (){var statearr_23501 = state_23499;(statearr_23501[7] = inst_23459);
(statearr_23501[8] = inst_23460);
return statearr_23501;
})();var statearr_23502_23530 = state_23499__$1;(statearr_23502_23530[2] = null);
(statearr_23502_23530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 2))
{var state_23499__$1 = state_23499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23499__$1,4,ch);
} else
{if((state_val_23500 === 3))
{var inst_23497 = (state_23499[2]);var state_23499__$1 = state_23499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23499__$1,inst_23497);
} else
{if((state_val_23500 === 4))
{var inst_23463 = (state_23499[9]);var inst_23463__$1 = (state_23499[2]);var inst_23464 = (inst_23463__$1 == null);var inst_23465 = cljs.core.not.call(null,inst_23464);var state_23499__$1 = (function (){var statearr_23503 = state_23499;(statearr_23503[9] = inst_23463__$1);
return statearr_23503;
})();if(inst_23465)
{var statearr_23504_23531 = state_23499__$1;(statearr_23504_23531[1] = 5);
} else
{var statearr_23505_23532 = state_23499__$1;(statearr_23505_23532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 5))
{var inst_23467 = (state_23499[10]);var inst_23463 = (state_23499[9]);var inst_23460 = (state_23499[8]);var inst_23467__$1 = f.call(null,inst_23463);var inst_23468 = cljs.core._EQ_.call(null,inst_23467__$1,inst_23460);var inst_23469 = cljs.core.keyword_identical_QMARK_.call(null,inst_23460,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23470 = (inst_23468) || (inst_23469);var state_23499__$1 = (function (){var statearr_23506 = state_23499;(statearr_23506[10] = inst_23467__$1);
return statearr_23506;
})();if(cljs.core.truth_(inst_23470))
{var statearr_23507_23533 = state_23499__$1;(statearr_23507_23533[1] = 8);
} else
{var statearr_23508_23534 = state_23499__$1;(statearr_23508_23534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 6))
{var inst_23459 = (state_23499[7]);var inst_23484 = inst_23459.length;var inst_23485 = (inst_23484 > 0);var state_23499__$1 = state_23499;if(cljs.core.truth_(inst_23485))
{var statearr_23510_23535 = state_23499__$1;(statearr_23510_23535[1] = 12);
} else
{var statearr_23511_23536 = state_23499__$1;(statearr_23511_23536[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 7))
{var inst_23495 = (state_23499[2]);var state_23499__$1 = state_23499;var statearr_23512_23537 = state_23499__$1;(statearr_23512_23537[2] = inst_23495);
(statearr_23512_23537[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 8))
{var inst_23467 = (state_23499[10]);var inst_23459 = (state_23499[7]);var inst_23463 = (state_23499[9]);var inst_23472 = inst_23459.push(inst_23463);var tmp23509 = inst_23459;var inst_23459__$1 = tmp23509;var inst_23460 = inst_23467;var state_23499__$1 = (function (){var statearr_23513 = state_23499;(statearr_23513[11] = inst_23472);
(statearr_23513[7] = inst_23459__$1);
(statearr_23513[8] = inst_23460);
return statearr_23513;
})();var statearr_23514_23538 = state_23499__$1;(statearr_23514_23538[2] = null);
(statearr_23514_23538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 9))
{var inst_23459 = (state_23499[7]);var inst_23475 = cljs.core.vec.call(null,inst_23459);var state_23499__$1 = state_23499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23499__$1,11,out,inst_23475);
} else
{if((state_val_23500 === 10))
{var inst_23482 = (state_23499[2]);var state_23499__$1 = state_23499;var statearr_23515_23539 = state_23499__$1;(statearr_23515_23539[2] = inst_23482);
(statearr_23515_23539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 11))
{var inst_23467 = (state_23499[10]);var inst_23463 = (state_23499[9]);var inst_23477 = (state_23499[2]);var inst_23478 = [];var inst_23479 = inst_23478.push(inst_23463);var inst_23459 = inst_23478;var inst_23460 = inst_23467;var state_23499__$1 = (function (){var statearr_23516 = state_23499;(statearr_23516[12] = inst_23479);
(statearr_23516[13] = inst_23477);
(statearr_23516[7] = inst_23459);
(statearr_23516[8] = inst_23460);
return statearr_23516;
})();var statearr_23517_23540 = state_23499__$1;(statearr_23517_23540[2] = null);
(statearr_23517_23540[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 12))
{var inst_23459 = (state_23499[7]);var inst_23487 = cljs.core.vec.call(null,inst_23459);var state_23499__$1 = state_23499;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23499__$1,15,out,inst_23487);
} else
{if((state_val_23500 === 13))
{var state_23499__$1 = state_23499;var statearr_23518_23541 = state_23499__$1;(statearr_23518_23541[2] = null);
(statearr_23518_23541[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 14))
{var inst_23492 = (state_23499[2]);var inst_23493 = cljs.core.async.close_BANG_.call(null,out);var state_23499__$1 = (function (){var statearr_23519 = state_23499;(statearr_23519[14] = inst_23492);
return statearr_23519;
})();var statearr_23520_23542 = state_23499__$1;(statearr_23520_23542[2] = inst_23493);
(statearr_23520_23542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23500 === 15))
{var inst_23489 = (state_23499[2]);var state_23499__$1 = state_23499;var statearr_23521_23543 = state_23499__$1;(statearr_23521_23543[2] = inst_23489);
(statearr_23521_23543[1] = 14);
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
});return ((function (switch__13812__auto__){
return (function() {
var state_machine__13813__auto__ = null;
var state_machine__13813__auto____0 = (function (){var statearr_23525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23525[0] = state_machine__13813__auto__);
(statearr_23525[1] = 1);
return statearr_23525;
});
var state_machine__13813__auto____1 = (function (state_23499){while(true){
var ret_value__13814__auto__ = (function (){try{while(true){
var result__13815__auto__ = switch__13812__auto__.call(null,state_23499);if(cljs.core.keyword_identical_QMARK_.call(null,result__13815__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13815__auto__;
}
break;
}
}catch (e23526){if((e23526 instanceof Object))
{var ex__13816__auto__ = e23526;var statearr_23527_23544 = state_23499;(statearr_23527_23544[5] = ex__13816__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23499);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23545 = state_23499;
state_23499 = G__23545;
continue;
}
} else
{return ret_value__13814__auto__;
}
break;
}
});
state_machine__13813__auto__ = function(state_23499){
switch(arguments.length){
case 0:
return state_machine__13813__auto____0.call(this);
case 1:
return state_machine__13813__auto____1.call(this,state_23499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13813__auto____0;
state_machine__13813__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13813__auto____1;
return state_machine__13813__auto__;
})()
;})(switch__13812__auto__))
})();var state__13884__auto__ = (function (){var statearr_23528 = f__13883__auto__.call(null);(statearr_23528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13882__auto___23529);
return statearr_23528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13884__auto__);
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

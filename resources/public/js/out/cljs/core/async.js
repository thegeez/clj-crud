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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21460 = (function (f,fn_handler,meta21461){
this.f = f;
this.fn_handler = fn_handler;
this.meta21461 = meta21461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21460.cljs$lang$type = true;
cljs.core.async.t21460.cljs$lang$ctorStr = "cljs.core.async/t21460";
cljs.core.async.t21460.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21460");
});
cljs.core.async.t21460.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21462){var self__ = this;
var _21462__$1 = this;return self__.meta21461;
});
cljs.core.async.t21460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21462,meta21461__$1){var self__ = this;
var _21462__$1 = this;return (new cljs.core.async.t21460(self__.f,self__.fn_handler,meta21461__$1));
});
cljs.core.async.__GT_t21460 = (function __GT_t21460(f__$1,fn_handler__$1,meta21461){return (new cljs.core.async.t21460(f__$1,fn_handler__$1,meta21461));
});
}
return (new cljs.core.async.t21460(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21464 = buff;if(G__21464)
{var bit__10979__auto__ = null;if(cljs.core.truth_((function (){var or__10329__auto__ = bit__10979__auto__;if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{return G__21464.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21464.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21464);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21464);
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
{var val_21465 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21465);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21465);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11177__auto___21466 = n;var x_21467 = 0;while(true){
if((x_21467 < n__11177__auto___21466))
{(a[x_21467] = 0);
{
var G__21468 = (x_21467 + 1);
x_21467 = G__21468;
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
var G__21469 = (i + 1);
i = G__21469;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21473 = (function (flag,alt_flag,meta21474){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21474 = meta21474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21473.cljs$lang$type = true;
cljs.core.async.t21473.cljs$lang$ctorStr = "cljs.core.async/t21473";
cljs.core.async.t21473.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21473");
});
cljs.core.async.t21473.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21473.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21473.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21475){var self__ = this;
var _21475__$1 = this;return self__.meta21474;
});
cljs.core.async.t21473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21475,meta21474__$1){var self__ = this;
var _21475__$1 = this;return (new cljs.core.async.t21473(self__.flag,self__.alt_flag,meta21474__$1));
});
cljs.core.async.__GT_t21473 = (function __GT_t21473(flag__$1,alt_flag__$1,meta21474){return (new cljs.core.async.t21473(flag__$1,alt_flag__$1,meta21474));
});
}
return (new cljs.core.async.t21473(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21479 = (function (cb,flag,alt_handler,meta21480){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21480 = meta21480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21479.cljs$lang$type = true;
cljs.core.async.t21479.cljs$lang$ctorStr = "cljs.core.async/t21479";
cljs.core.async.t21479.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21479");
});
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21481){var self__ = this;
var _21481__$1 = this;return self__.meta21480;
});
cljs.core.async.t21479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21481,meta21480__$1){var self__ = this;
var _21481__$1 = this;return (new cljs.core.async.t21479(self__.cb,self__.flag,self__.alt_handler,meta21480__$1));
});
cljs.core.async.__GT_t21479 = (function __GT_t21479(cb__$1,flag__$1,alt_handler__$1,meta21480){return (new cljs.core.async.t21479(cb__$1,flag__$1,alt_handler__$1,meta21480));
});
}
return (new cljs.core.async.t21479(cb,flag,alt_handler,null));
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
return (function (p1__21482_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21482_SHARP_,port], null));
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
var G__21483 = (i + 1);
i = G__21483;
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
var alts_BANG___delegate = function (ports,p__21484){var map__21486 = p__21484;var map__21486__$1 = ((cljs.core.seq_QMARK_.call(null,map__21486))?cljs.core.apply.call(null,cljs.core.hash_map,map__21486):map__21486);var opts = map__21486__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21484 = null;if (arguments.length > 1) {
  p__21484 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21484);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21487){
var ports = cljs.core.first(arglist__21487);
var p__21484 = cljs.core.rest(arglist__21487);
return alts_BANG___delegate(ports,p__21484);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21495 = (function (ch,f,map_LT_,meta21496){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21496 = meta21496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21495.cljs$lang$type = true;
cljs.core.async.t21495.cljs$lang$ctorStr = "cljs.core.async/t21495";
cljs.core.async.t21495.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21495");
});
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21498 = (function (fn1,_,meta21496,ch,f,map_LT_,meta21499){
this.fn1 = fn1;
this._ = _;
this.meta21496 = meta21496;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21499 = meta21499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21498.cljs$lang$type = true;
cljs.core.async.t21498.cljs$lang$ctorStr = "cljs.core.async/t21498";
cljs.core.async.t21498.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21498");
});
cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21488_SHARP_){return f1.call(null,(((p1__21488_SHARP_ == null))?null:self__.f.call(null,p1__21488_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21500){var self__ = this;
var _21500__$1 = this;return self__.meta21499;
});
cljs.core.async.t21498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21500,meta21499__$1){var self__ = this;
var _21500__$1 = this;return (new cljs.core.async.t21498(self__.fn1,self__._,self__.meta21496,self__.ch,self__.f,self__.map_LT_,meta21499__$1));
});
cljs.core.async.__GT_t21498 = (function __GT_t21498(fn1__$1,___$2,meta21496__$1,ch__$2,f__$2,map_LT___$2,meta21499){return (new cljs.core.async.t21498(fn1__$1,___$2,meta21496__$1,ch__$2,f__$2,map_LT___$2,meta21499));
});
}
return (new cljs.core.async.t21498(fn1,___$1,self__.meta21496,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21495.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21497){var self__ = this;
var _21497__$1 = this;return self__.meta21496;
});
cljs.core.async.t21495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21497,meta21496__$1){var self__ = this;
var _21497__$1 = this;return (new cljs.core.async.t21495(self__.ch,self__.f,self__.map_LT_,meta21496__$1));
});
cljs.core.async.__GT_t21495 = (function __GT_t21495(ch__$1,f__$1,map_LT___$1,meta21496){return (new cljs.core.async.t21495(ch__$1,f__$1,map_LT___$1,meta21496));
});
}
return (new cljs.core.async.t21495(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21504 = (function (ch,f,map_GT_,meta21505){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21505 = meta21505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21504.cljs$lang$type = true;
cljs.core.async.t21504.cljs$lang$ctorStr = "cljs.core.async/t21504";
cljs.core.async.t21504.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21504");
});
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21504.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21506){var self__ = this;
var _21506__$1 = this;return self__.meta21505;
});
cljs.core.async.t21504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21506,meta21505__$1){var self__ = this;
var _21506__$1 = this;return (new cljs.core.async.t21504(self__.ch,self__.f,self__.map_GT_,meta21505__$1));
});
cljs.core.async.__GT_t21504 = (function __GT_t21504(ch__$1,f__$1,map_GT___$1,meta21505){return (new cljs.core.async.t21504(ch__$1,f__$1,map_GT___$1,meta21505));
});
}
return (new cljs.core.async.t21504(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21510 = (function (ch,p,filter_GT_,meta21511){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21511 = meta21511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21510.cljs$lang$type = true;
cljs.core.async.t21510.cljs$lang$ctorStr = "cljs.core.async/t21510";
cljs.core.async.t21510.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t21510");
});
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21512){var self__ = this;
var _21512__$1 = this;return self__.meta21511;
});
cljs.core.async.t21510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21512,meta21511__$1){var self__ = this;
var _21512__$1 = this;return (new cljs.core.async.t21510(self__.ch,self__.p,self__.filter_GT_,meta21511__$1));
});
cljs.core.async.__GT_t21510 = (function __GT_t21510(ch__$1,p__$1,filter_GT___$1,meta21511){return (new cljs.core.async.t21510(ch__$1,p__$1,filter_GT___$1,meta21511));
});
}
return (new cljs.core.async.t21510(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13953__auto___21595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_21574){var state_val_21575 = (state_21574[1]);if((state_val_21575 === 1))
{var state_21574__$1 = state_21574;var statearr_21576_21596 = state_21574__$1;(statearr_21576_21596[2] = null);
(statearr_21576_21596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 2))
{var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21574__$1,4,ch);
} else
{if((state_val_21575 === 3))
{var inst_21572 = (state_21574[2]);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21574__$1,inst_21572);
} else
{if((state_val_21575 === 4))
{var inst_21556 = (state_21574[7]);var inst_21556__$1 = (state_21574[2]);var inst_21557 = (inst_21556__$1 == null);var state_21574__$1 = (function (){var statearr_21577 = state_21574;(statearr_21577[7] = inst_21556__$1);
return statearr_21577;
})();if(cljs.core.truth_(inst_21557))
{var statearr_21578_21597 = state_21574__$1;(statearr_21578_21597[1] = 5);
} else
{var statearr_21579_21598 = state_21574__$1;(statearr_21579_21598[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 5))
{var inst_21559 = cljs.core.async.close_BANG_.call(null,out);var state_21574__$1 = state_21574;var statearr_21580_21599 = state_21574__$1;(statearr_21580_21599[2] = inst_21559);
(statearr_21580_21599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 6))
{var inst_21556 = (state_21574[7]);var inst_21561 = p.call(null,inst_21556);var state_21574__$1 = state_21574;if(cljs.core.truth_(inst_21561))
{var statearr_21581_21600 = state_21574__$1;(statearr_21581_21600[1] = 8);
} else
{var statearr_21582_21601 = state_21574__$1;(statearr_21582_21601[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 7))
{var inst_21570 = (state_21574[2]);var state_21574__$1 = state_21574;var statearr_21583_21602 = state_21574__$1;(statearr_21583_21602[2] = inst_21570);
(statearr_21583_21602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 8))
{var inst_21556 = (state_21574[7]);var state_21574__$1 = state_21574;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21574__$1,11,out,inst_21556);
} else
{if((state_val_21575 === 9))
{var state_21574__$1 = state_21574;var statearr_21584_21603 = state_21574__$1;(statearr_21584_21603[2] = null);
(statearr_21584_21603[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 10))
{var inst_21567 = (state_21574[2]);var state_21574__$1 = (function (){var statearr_21585 = state_21574;(statearr_21585[8] = inst_21567);
return statearr_21585;
})();var statearr_21586_21604 = state_21574__$1;(statearr_21586_21604[2] = null);
(statearr_21586_21604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21575 === 11))
{var inst_21564 = (state_21574[2]);var state_21574__$1 = state_21574;var statearr_21587_21605 = state_21574__$1;(statearr_21587_21605[2] = inst_21564);
(statearr_21587_21605[1] = 10);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_21591 = [null,null,null,null,null,null,null,null,null];(statearr_21591[0] = state_machine__13884__auto__);
(statearr_21591[1] = 1);
return statearr_21591;
});
var state_machine__13884__auto____1 = (function (state_21574){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_21574);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e21592){if((e21592 instanceof Object))
{var ex__13887__auto__ = e21592;var statearr_21593_21606 = state_21574;(statearr_21593_21606[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21607 = state_21574;
state_21574 = G__21607;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_21574){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_21574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_21594 = f__13954__auto__.call(null);(statearr_21594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___21595);
return statearr_21594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13953__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_21759){var state_val_21760 = (state_21759[1]);if((state_val_21760 === 1))
{var state_21759__$1 = state_21759;var statearr_21761_21798 = state_21759__$1;(statearr_21761_21798[2] = null);
(statearr_21761_21798[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 2))
{var state_21759__$1 = state_21759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21759__$1,4,in$);
} else
{if((state_val_21760 === 3))
{var inst_21757 = (state_21759[2]);var state_21759__$1 = state_21759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21759__$1,inst_21757);
} else
{if((state_val_21760 === 4))
{var inst_21705 = (state_21759[7]);var inst_21705__$1 = (state_21759[2]);var inst_21706 = (inst_21705__$1 == null);var state_21759__$1 = (function (){var statearr_21762 = state_21759;(statearr_21762[7] = inst_21705__$1);
return statearr_21762;
})();if(cljs.core.truth_(inst_21706))
{var statearr_21763_21799 = state_21759__$1;(statearr_21763_21799[1] = 5);
} else
{var statearr_21764_21800 = state_21759__$1;(statearr_21764_21800[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 5))
{var inst_21708 = cljs.core.async.close_BANG_.call(null,out);var state_21759__$1 = state_21759;var statearr_21765_21801 = state_21759__$1;(statearr_21765_21801[2] = inst_21708);
(statearr_21765_21801[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 6))
{var inst_21705 = (state_21759[7]);var inst_21710 = f.call(null,inst_21705);var inst_21715 = cljs.core.seq.call(null,inst_21710);var inst_21716 = inst_21715;var inst_21717 = null;var inst_21718 = 0;var inst_21719 = 0;var state_21759__$1 = (function (){var statearr_21766 = state_21759;(statearr_21766[8] = inst_21718);
(statearr_21766[9] = inst_21719);
(statearr_21766[10] = inst_21716);
(statearr_21766[11] = inst_21717);
return statearr_21766;
})();var statearr_21767_21802 = state_21759__$1;(statearr_21767_21802[2] = null);
(statearr_21767_21802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 7))
{var inst_21755 = (state_21759[2]);var state_21759__$1 = state_21759;var statearr_21768_21803 = state_21759__$1;(statearr_21768_21803[2] = inst_21755);
(statearr_21768_21803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 8))
{var inst_21718 = (state_21759[8]);var inst_21719 = (state_21759[9]);var inst_21721 = (inst_21719 < inst_21718);var inst_21722 = inst_21721;var state_21759__$1 = state_21759;if(cljs.core.truth_(inst_21722))
{var statearr_21769_21804 = state_21759__$1;(statearr_21769_21804[1] = 10);
} else
{var statearr_21770_21805 = state_21759__$1;(statearr_21770_21805[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 9))
{var inst_21752 = (state_21759[2]);var state_21759__$1 = (function (){var statearr_21771 = state_21759;(statearr_21771[12] = inst_21752);
return statearr_21771;
})();var statearr_21772_21806 = state_21759__$1;(statearr_21772_21806[2] = null);
(statearr_21772_21806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 10))
{var inst_21719 = (state_21759[9]);var inst_21717 = (state_21759[11]);var inst_21724 = cljs.core._nth.call(null,inst_21717,inst_21719);var state_21759__$1 = state_21759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21759__$1,13,out,inst_21724);
} else
{if((state_val_21760 === 11))
{var inst_21730 = (state_21759[13]);var inst_21716 = (state_21759[10]);var inst_21730__$1 = cljs.core.seq.call(null,inst_21716);var state_21759__$1 = (function (){var statearr_21776 = state_21759;(statearr_21776[13] = inst_21730__$1);
return statearr_21776;
})();if(inst_21730__$1)
{var statearr_21777_21807 = state_21759__$1;(statearr_21777_21807[1] = 14);
} else
{var statearr_21778_21808 = state_21759__$1;(statearr_21778_21808[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 12))
{var inst_21750 = (state_21759[2]);var state_21759__$1 = state_21759;var statearr_21779_21809 = state_21759__$1;(statearr_21779_21809[2] = inst_21750);
(statearr_21779_21809[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 13))
{var inst_21718 = (state_21759[8]);var inst_21719 = (state_21759[9]);var inst_21716 = (state_21759[10]);var inst_21717 = (state_21759[11]);var inst_21726 = (state_21759[2]);var inst_21727 = (inst_21719 + 1);var tmp21773 = inst_21718;var tmp21774 = inst_21716;var tmp21775 = inst_21717;var inst_21716__$1 = tmp21774;var inst_21717__$1 = tmp21775;var inst_21718__$1 = tmp21773;var inst_21719__$1 = inst_21727;var state_21759__$1 = (function (){var statearr_21780 = state_21759;(statearr_21780[8] = inst_21718__$1);
(statearr_21780[9] = inst_21719__$1);
(statearr_21780[10] = inst_21716__$1);
(statearr_21780[11] = inst_21717__$1);
(statearr_21780[14] = inst_21726);
return statearr_21780;
})();var statearr_21781_21810 = state_21759__$1;(statearr_21781_21810[2] = null);
(statearr_21781_21810[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 14))
{var inst_21730 = (state_21759[13]);var inst_21732 = cljs.core.chunked_seq_QMARK_.call(null,inst_21730);var state_21759__$1 = state_21759;if(inst_21732)
{var statearr_21782_21811 = state_21759__$1;(statearr_21782_21811[1] = 17);
} else
{var statearr_21783_21812 = state_21759__$1;(statearr_21783_21812[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 15))
{var state_21759__$1 = state_21759;var statearr_21784_21813 = state_21759__$1;(statearr_21784_21813[2] = null);
(statearr_21784_21813[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 16))
{var inst_21748 = (state_21759[2]);var state_21759__$1 = state_21759;var statearr_21785_21814 = state_21759__$1;(statearr_21785_21814[2] = inst_21748);
(statearr_21785_21814[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 17))
{var inst_21730 = (state_21759[13]);var inst_21734 = cljs.core.chunk_first.call(null,inst_21730);var inst_21735 = cljs.core.chunk_rest.call(null,inst_21730);var inst_21736 = cljs.core.count.call(null,inst_21734);var inst_21716 = inst_21735;var inst_21717 = inst_21734;var inst_21718 = inst_21736;var inst_21719 = 0;var state_21759__$1 = (function (){var statearr_21786 = state_21759;(statearr_21786[8] = inst_21718);
(statearr_21786[9] = inst_21719);
(statearr_21786[10] = inst_21716);
(statearr_21786[11] = inst_21717);
return statearr_21786;
})();var statearr_21787_21815 = state_21759__$1;(statearr_21787_21815[2] = null);
(statearr_21787_21815[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 18))
{var inst_21730 = (state_21759[13]);var inst_21739 = cljs.core.first.call(null,inst_21730);var state_21759__$1 = state_21759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21759__$1,20,out,inst_21739);
} else
{if((state_val_21760 === 19))
{var inst_21745 = (state_21759[2]);var state_21759__$1 = state_21759;var statearr_21788_21816 = state_21759__$1;(statearr_21788_21816[2] = inst_21745);
(statearr_21788_21816[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21760 === 20))
{var inst_21730 = (state_21759[13]);var inst_21741 = (state_21759[2]);var inst_21742 = cljs.core.next.call(null,inst_21730);var inst_21716 = inst_21742;var inst_21717 = null;var inst_21718 = 0;var inst_21719 = 0;var state_21759__$1 = (function (){var statearr_21789 = state_21759;(statearr_21789[8] = inst_21718);
(statearr_21789[9] = inst_21719);
(statearr_21789[10] = inst_21716);
(statearr_21789[11] = inst_21717);
(statearr_21789[15] = inst_21741);
return statearr_21789;
})();var statearr_21790_21817 = state_21759__$1;(statearr_21790_21817[2] = null);
(statearr_21790_21817[1] = 8);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_21794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21794[0] = state_machine__13884__auto__);
(statearr_21794[1] = 1);
return statearr_21794;
});
var state_machine__13884__auto____1 = (function (state_21759){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_21759);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e21795){if((e21795 instanceof Object))
{var ex__13887__auto__ = e21795;var statearr_21796_21818 = state_21759;(statearr_21796_21818[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21819 = state_21759;
state_21759 = G__21819;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_21759){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_21759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_21797 = f__13954__auto__.call(null);(statearr_21797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto__);
return statearr_21797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
}));
return c__13953__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13953__auto___21900 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_21879){var state_val_21880 = (state_21879[1]);if((state_val_21880 === 1))
{var state_21879__$1 = state_21879;var statearr_21881_21901 = state_21879__$1;(statearr_21881_21901[2] = null);
(statearr_21881_21901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 2))
{var state_21879__$1 = state_21879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21879__$1,4,from);
} else
{if((state_val_21880 === 3))
{var inst_21877 = (state_21879[2]);var state_21879__$1 = state_21879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21879__$1,inst_21877);
} else
{if((state_val_21880 === 4))
{var inst_21862 = (state_21879[7]);var inst_21862__$1 = (state_21879[2]);var inst_21863 = (inst_21862__$1 == null);var state_21879__$1 = (function (){var statearr_21882 = state_21879;(statearr_21882[7] = inst_21862__$1);
return statearr_21882;
})();if(cljs.core.truth_(inst_21863))
{var statearr_21883_21902 = state_21879__$1;(statearr_21883_21902[1] = 5);
} else
{var statearr_21884_21903 = state_21879__$1;(statearr_21884_21903[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 5))
{var state_21879__$1 = state_21879;if(cljs.core.truth_(close_QMARK_))
{var statearr_21885_21904 = state_21879__$1;(statearr_21885_21904[1] = 8);
} else
{var statearr_21886_21905 = state_21879__$1;(statearr_21886_21905[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 6))
{var inst_21862 = (state_21879[7]);var state_21879__$1 = state_21879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21879__$1,11,to,inst_21862);
} else
{if((state_val_21880 === 7))
{var inst_21875 = (state_21879[2]);var state_21879__$1 = state_21879;var statearr_21887_21906 = state_21879__$1;(statearr_21887_21906[2] = inst_21875);
(statearr_21887_21906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 8))
{var inst_21866 = cljs.core.async.close_BANG_.call(null,to);var state_21879__$1 = state_21879;var statearr_21888_21907 = state_21879__$1;(statearr_21888_21907[2] = inst_21866);
(statearr_21888_21907[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 9))
{var state_21879__$1 = state_21879;var statearr_21889_21908 = state_21879__$1;(statearr_21889_21908[2] = null);
(statearr_21889_21908[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 10))
{var inst_21869 = (state_21879[2]);var state_21879__$1 = state_21879;var statearr_21890_21909 = state_21879__$1;(statearr_21890_21909[2] = inst_21869);
(statearr_21890_21909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21880 === 11))
{var inst_21872 = (state_21879[2]);var state_21879__$1 = (function (){var statearr_21891 = state_21879;(statearr_21891[8] = inst_21872);
return statearr_21891;
})();var statearr_21892_21910 = state_21879__$1;(statearr_21892_21910[2] = null);
(statearr_21892_21910[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_21896 = [null,null,null,null,null,null,null,null,null];(statearr_21896[0] = state_machine__13884__auto__);
(statearr_21896[1] = 1);
return statearr_21896;
});
var state_machine__13884__auto____1 = (function (state_21879){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_21879);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e21897){if((e21897 instanceof Object))
{var ex__13887__auto__ = e21897;var statearr_21898_21911 = state_21879;(statearr_21898_21911[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21912 = state_21879;
state_21879 = G__21912;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_21879){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_21879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_21899 = f__13954__auto__.call(null);(statearr_21899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___21900);
return statearr_21899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13953__auto___21999 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_21977){var state_val_21978 = (state_21977[1]);if((state_val_21978 === 1))
{var state_21977__$1 = state_21977;var statearr_21979_22000 = state_21977__$1;(statearr_21979_22000[2] = null);
(statearr_21979_22000[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 2))
{var state_21977__$1 = state_21977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21977__$1,4,ch);
} else
{if((state_val_21978 === 3))
{var inst_21975 = (state_21977[2]);var state_21977__$1 = state_21977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21977__$1,inst_21975);
} else
{if((state_val_21978 === 4))
{var inst_21958 = (state_21977[7]);var inst_21958__$1 = (state_21977[2]);var inst_21959 = (inst_21958__$1 == null);var state_21977__$1 = (function (){var statearr_21980 = state_21977;(statearr_21980[7] = inst_21958__$1);
return statearr_21980;
})();if(cljs.core.truth_(inst_21959))
{var statearr_21981_22001 = state_21977__$1;(statearr_21981_22001[1] = 5);
} else
{var statearr_21982_22002 = state_21977__$1;(statearr_21982_22002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 5))
{var inst_21961 = cljs.core.async.close_BANG_.call(null,tc);var inst_21962 = cljs.core.async.close_BANG_.call(null,fc);var state_21977__$1 = (function (){var statearr_21983 = state_21977;(statearr_21983[8] = inst_21961);
return statearr_21983;
})();var statearr_21984_22003 = state_21977__$1;(statearr_21984_22003[2] = inst_21962);
(statearr_21984_22003[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 6))
{var inst_21958 = (state_21977[7]);var inst_21964 = p.call(null,inst_21958);var state_21977__$1 = state_21977;if(cljs.core.truth_(inst_21964))
{var statearr_21985_22004 = state_21977__$1;(statearr_21985_22004[1] = 9);
} else
{var statearr_21986_22005 = state_21977__$1;(statearr_21986_22005[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 7))
{var inst_21973 = (state_21977[2]);var state_21977__$1 = state_21977;var statearr_21987_22006 = state_21977__$1;(statearr_21987_22006[2] = inst_21973);
(statearr_21987_22006[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 8))
{var inst_21970 = (state_21977[2]);var state_21977__$1 = (function (){var statearr_21988 = state_21977;(statearr_21988[9] = inst_21970);
return statearr_21988;
})();var statearr_21989_22007 = state_21977__$1;(statearr_21989_22007[2] = null);
(statearr_21989_22007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 9))
{var state_21977__$1 = state_21977;var statearr_21990_22008 = state_21977__$1;(statearr_21990_22008[2] = tc);
(statearr_21990_22008[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 10))
{var state_21977__$1 = state_21977;var statearr_21991_22009 = state_21977__$1;(statearr_21991_22009[2] = fc);
(statearr_21991_22009[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21978 === 11))
{var inst_21958 = (state_21977[7]);var inst_21968 = (state_21977[2]);var state_21977__$1 = state_21977;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21977__$1,8,inst_21968,inst_21958);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_21995 = [null,null,null,null,null,null,null,null,null,null];(statearr_21995[0] = state_machine__13884__auto__);
(statearr_21995[1] = 1);
return statearr_21995;
});
var state_machine__13884__auto____1 = (function (state_21977){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_21977);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e21996){if((e21996 instanceof Object))
{var ex__13887__auto__ = e21996;var statearr_21997_22010 = state_21977;(statearr_21997_22010[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22011 = state_21977;
state_21977 = G__22011;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_21977){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_21977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_21998 = f__13954__auto__.call(null);(statearr_21998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___21999);
return statearr_21998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13953__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_22058){var state_val_22059 = (state_22058[1]);if((state_val_22059 === 7))
{var inst_22054 = (state_22058[2]);var state_22058__$1 = state_22058;var statearr_22060_22076 = state_22058__$1;(statearr_22060_22076[2] = inst_22054);
(statearr_22060_22076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22059 === 6))
{var inst_22044 = (state_22058[7]);var inst_22047 = (state_22058[8]);var inst_22051 = f.call(null,inst_22044,inst_22047);var inst_22044__$1 = inst_22051;var state_22058__$1 = (function (){var statearr_22061 = state_22058;(statearr_22061[7] = inst_22044__$1);
return statearr_22061;
})();var statearr_22062_22077 = state_22058__$1;(statearr_22062_22077[2] = null);
(statearr_22062_22077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22059 === 5))
{var inst_22044 = (state_22058[7]);var state_22058__$1 = state_22058;var statearr_22063_22078 = state_22058__$1;(statearr_22063_22078[2] = inst_22044);
(statearr_22063_22078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22059 === 4))
{var inst_22047 = (state_22058[8]);var inst_22047__$1 = (state_22058[2]);var inst_22048 = (inst_22047__$1 == null);var state_22058__$1 = (function (){var statearr_22064 = state_22058;(statearr_22064[8] = inst_22047__$1);
return statearr_22064;
})();if(cljs.core.truth_(inst_22048))
{var statearr_22065_22079 = state_22058__$1;(statearr_22065_22079[1] = 5);
} else
{var statearr_22066_22080 = state_22058__$1;(statearr_22066_22080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22059 === 3))
{var inst_22056 = (state_22058[2]);var state_22058__$1 = state_22058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22058__$1,inst_22056);
} else
{if((state_val_22059 === 2))
{var state_22058__$1 = state_22058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22058__$1,4,ch);
} else
{if((state_val_22059 === 1))
{var inst_22044 = init;var state_22058__$1 = (function (){var statearr_22067 = state_22058;(statearr_22067[7] = inst_22044);
return statearr_22067;
})();var statearr_22068_22081 = state_22058__$1;(statearr_22068_22081[2] = null);
(statearr_22068_22081[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_22072 = [null,null,null,null,null,null,null,null,null];(statearr_22072[0] = state_machine__13884__auto__);
(statearr_22072[1] = 1);
return statearr_22072;
});
var state_machine__13884__auto____1 = (function (state_22058){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_22058);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e22073){if((e22073 instanceof Object))
{var ex__13887__auto__ = e22073;var statearr_22074_22082 = state_22058;(statearr_22074_22082[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22058);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22083 = state_22058;
state_22058 = G__22083;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_22058){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_22058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_22075 = f__13954__auto__.call(null);(statearr_22075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto__);
return statearr_22075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
}));
return c__13953__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13953__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_22145){var state_val_22146 = (state_22145[1]);if((state_val_22146 === 1))
{var inst_22125 = cljs.core.seq.call(null,coll);var inst_22126 = inst_22125;var state_22145__$1 = (function (){var statearr_22147 = state_22145;(statearr_22147[7] = inst_22126);
return statearr_22147;
})();var statearr_22148_22166 = state_22145__$1;(statearr_22148_22166[2] = null);
(statearr_22148_22166[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 2))
{var inst_22126 = (state_22145[7]);var state_22145__$1 = state_22145;if(cljs.core.truth_(inst_22126))
{var statearr_22149_22167 = state_22145__$1;(statearr_22149_22167[1] = 4);
} else
{var statearr_22150_22168 = state_22145__$1;(statearr_22150_22168[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 3))
{var inst_22143 = (state_22145[2]);var state_22145__$1 = state_22145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22145__$1,inst_22143);
} else
{if((state_val_22146 === 4))
{var inst_22126 = (state_22145[7]);var inst_22129 = cljs.core.first.call(null,inst_22126);var state_22145__$1 = state_22145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22145__$1,7,ch,inst_22129);
} else
{if((state_val_22146 === 5))
{var state_22145__$1 = state_22145;if(cljs.core.truth_(close_QMARK_))
{var statearr_22151_22169 = state_22145__$1;(statearr_22151_22169[1] = 8);
} else
{var statearr_22152_22170 = state_22145__$1;(statearr_22152_22170[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 6))
{var inst_22141 = (state_22145[2]);var state_22145__$1 = state_22145;var statearr_22153_22171 = state_22145__$1;(statearr_22153_22171[2] = inst_22141);
(statearr_22153_22171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 7))
{var inst_22126 = (state_22145[7]);var inst_22131 = (state_22145[2]);var inst_22132 = cljs.core.next.call(null,inst_22126);var inst_22126__$1 = inst_22132;var state_22145__$1 = (function (){var statearr_22154 = state_22145;(statearr_22154[7] = inst_22126__$1);
(statearr_22154[8] = inst_22131);
return statearr_22154;
})();var statearr_22155_22172 = state_22145__$1;(statearr_22155_22172[2] = null);
(statearr_22155_22172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 8))
{var inst_22136 = cljs.core.async.close_BANG_.call(null,ch);var state_22145__$1 = state_22145;var statearr_22156_22173 = state_22145__$1;(statearr_22156_22173[2] = inst_22136);
(statearr_22156_22173[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 9))
{var state_22145__$1 = state_22145;var statearr_22157_22174 = state_22145__$1;(statearr_22157_22174[2] = null);
(statearr_22157_22174[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22146 === 10))
{var inst_22139 = (state_22145[2]);var state_22145__$1 = state_22145;var statearr_22158_22175 = state_22145__$1;(statearr_22158_22175[2] = inst_22139);
(statearr_22158_22175[1] = 6);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_22162 = [null,null,null,null,null,null,null,null,null];(statearr_22162[0] = state_machine__13884__auto__);
(statearr_22162[1] = 1);
return statearr_22162;
});
var state_machine__13884__auto____1 = (function (state_22145){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_22145);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e22163){if((e22163 instanceof Object))
{var ex__13887__auto__ = e22163;var statearr_22164_22176 = state_22145;(statearr_22164_22176[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22177 = state_22145;
state_22145 = G__22177;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_22145){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_22145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_22165 = f__13954__auto__.call(null);(statearr_22165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto__);
return statearr_22165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
}));
return c__13953__auto__;
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
cljs.core.async.Mux = (function (){var obj22179 = {};return obj22179;
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
cljs.core.async.Mult = (function (){var obj22181 = {};return obj22181;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22405 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22405 = (function (cs,ch,mult,meta22406){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22406 = meta22406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22405.cljs$lang$type = true;
cljs.core.async.t22405.cljs$lang$ctorStr = "cljs.core.async/t22405";
cljs.core.async.t22405.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22405");
});})(cs))
;
cljs.core.async.t22405.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22405.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22405.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22405.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22405.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22405.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22407){var self__ = this;
var _22407__$1 = this;return self__.meta22406;
});})(cs))
;
cljs.core.async.t22405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22407,meta22406__$1){var self__ = this;
var _22407__$1 = this;return (new cljs.core.async.t22405(self__.cs,self__.ch,self__.mult,meta22406__$1));
});})(cs))
;
cljs.core.async.__GT_t22405 = ((function (cs){
return (function __GT_t22405(cs__$1,ch__$1,mult__$1,meta22406){return (new cljs.core.async.t22405(cs__$1,ch__$1,mult__$1,meta22406));
});})(cs))
;
}
return (new cljs.core.async.t22405(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13953__auto___22628 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_22542){var state_val_22543 = (state_22542[1]);if((state_val_22543 === 32))
{var inst_22410 = (state_22542[7]);var inst_22486 = (state_22542[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22542,31,Object,null,30);var inst_22493 = cljs.core.async.put_BANG_.call(null,inst_22486,inst_22410,done);var state_22542__$1 = state_22542;var statearr_22544_22629 = state_22542__$1;(statearr_22544_22629[2] = inst_22493);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 1))
{var state_22542__$1 = state_22542;var statearr_22545_22630 = state_22542__$1;(statearr_22545_22630[2] = null);
(statearr_22545_22630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 33))
{var inst_22499 = (state_22542[9]);var inst_22501 = cljs.core.chunked_seq_QMARK_.call(null,inst_22499);var state_22542__$1 = state_22542;if(inst_22501)
{var statearr_22546_22631 = state_22542__$1;(statearr_22546_22631[1] = 36);
} else
{var statearr_22547_22632 = state_22542__$1;(statearr_22547_22632[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 2))
{var state_22542__$1 = state_22542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22542__$1,4,ch);
} else
{if((state_val_22543 === 34))
{var state_22542__$1 = state_22542;var statearr_22548_22633 = state_22542__$1;(statearr_22548_22633[2] = null);
(statearr_22548_22633[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 3))
{var inst_22540 = (state_22542[2]);var state_22542__$1 = state_22542;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22542__$1,inst_22540);
} else
{if((state_val_22543 === 35))
{var inst_22524 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22549_22634 = state_22542__$1;(statearr_22549_22634[2] = inst_22524);
(statearr_22549_22634[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 4))
{var inst_22410 = (state_22542[7]);var inst_22410__$1 = (state_22542[2]);var inst_22411 = (inst_22410__$1 == null);var state_22542__$1 = (function (){var statearr_22550 = state_22542;(statearr_22550[7] = inst_22410__$1);
return statearr_22550;
})();if(cljs.core.truth_(inst_22411))
{var statearr_22551_22635 = state_22542__$1;(statearr_22551_22635[1] = 5);
} else
{var statearr_22552_22636 = state_22542__$1;(statearr_22552_22636[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 36))
{var inst_22499 = (state_22542[9]);var inst_22503 = cljs.core.chunk_first.call(null,inst_22499);var inst_22504 = cljs.core.chunk_rest.call(null,inst_22499);var inst_22505 = cljs.core.count.call(null,inst_22503);var inst_22478 = inst_22504;var inst_22479 = inst_22503;var inst_22480 = inst_22505;var inst_22481 = 0;var state_22542__$1 = (function (){var statearr_22553 = state_22542;(statearr_22553[10] = inst_22481);
(statearr_22553[11] = inst_22480);
(statearr_22553[12] = inst_22478);
(statearr_22553[13] = inst_22479);
return statearr_22553;
})();var statearr_22554_22637 = state_22542__$1;(statearr_22554_22637[2] = null);
(statearr_22554_22637[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 5))
{var inst_22417 = cljs.core.deref.call(null,cs);var inst_22418 = cljs.core.seq.call(null,inst_22417);var inst_22419 = inst_22418;var inst_22420 = null;var inst_22421 = 0;var inst_22422 = 0;var state_22542__$1 = (function (){var statearr_22555 = state_22542;(statearr_22555[14] = inst_22422);
(statearr_22555[15] = inst_22421);
(statearr_22555[16] = inst_22420);
(statearr_22555[17] = inst_22419);
return statearr_22555;
})();var statearr_22556_22638 = state_22542__$1;(statearr_22556_22638[2] = null);
(statearr_22556_22638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 37))
{var inst_22499 = (state_22542[9]);var inst_22508 = cljs.core.first.call(null,inst_22499);var state_22542__$1 = (function (){var statearr_22557 = state_22542;(statearr_22557[18] = inst_22508);
return statearr_22557;
})();var statearr_22558_22639 = state_22542__$1;(statearr_22558_22639[2] = null);
(statearr_22558_22639[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 6))
{var inst_22470 = (state_22542[19]);var inst_22469 = cljs.core.deref.call(null,cs);var inst_22470__$1 = cljs.core.keys.call(null,inst_22469);var inst_22471 = cljs.core.count.call(null,inst_22470__$1);var inst_22472 = cljs.core.reset_BANG_.call(null,dctr,inst_22471);var inst_22477 = cljs.core.seq.call(null,inst_22470__$1);var inst_22478 = inst_22477;var inst_22479 = null;var inst_22480 = 0;var inst_22481 = 0;var state_22542__$1 = (function (){var statearr_22559 = state_22542;(statearr_22559[20] = inst_22472);
(statearr_22559[19] = inst_22470__$1);
(statearr_22559[10] = inst_22481);
(statearr_22559[11] = inst_22480);
(statearr_22559[12] = inst_22478);
(statearr_22559[13] = inst_22479);
return statearr_22559;
})();var statearr_22560_22640 = state_22542__$1;(statearr_22560_22640[2] = null);
(statearr_22560_22640[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 38))
{var inst_22521 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22561_22641 = state_22542__$1;(statearr_22561_22641[2] = inst_22521);
(statearr_22561_22641[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 7))
{var inst_22538 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22562_22642 = state_22542__$1;(statearr_22562_22642[2] = inst_22538);
(statearr_22562_22642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 39))
{var inst_22499 = (state_22542[9]);var inst_22517 = (state_22542[2]);var inst_22518 = cljs.core.next.call(null,inst_22499);var inst_22478 = inst_22518;var inst_22479 = null;var inst_22480 = 0;var inst_22481 = 0;var state_22542__$1 = (function (){var statearr_22563 = state_22542;(statearr_22563[21] = inst_22517);
(statearr_22563[10] = inst_22481);
(statearr_22563[11] = inst_22480);
(statearr_22563[12] = inst_22478);
(statearr_22563[13] = inst_22479);
return statearr_22563;
})();var statearr_22564_22643 = state_22542__$1;(statearr_22564_22643[2] = null);
(statearr_22564_22643[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 8))
{var inst_22422 = (state_22542[14]);var inst_22421 = (state_22542[15]);var inst_22424 = (inst_22422 < inst_22421);var inst_22425 = inst_22424;var state_22542__$1 = state_22542;if(cljs.core.truth_(inst_22425))
{var statearr_22565_22644 = state_22542__$1;(statearr_22565_22644[1] = 10);
} else
{var statearr_22566_22645 = state_22542__$1;(statearr_22566_22645[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 40))
{var inst_22508 = (state_22542[18]);var inst_22509 = (state_22542[2]);var inst_22510 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22511 = cljs.core.async.untap_STAR_.call(null,m,inst_22508);var state_22542__$1 = (function (){var statearr_22567 = state_22542;(statearr_22567[22] = inst_22510);
(statearr_22567[23] = inst_22509);
return statearr_22567;
})();var statearr_22568_22646 = state_22542__$1;(statearr_22568_22646[2] = inst_22511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 9))
{var inst_22467 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22569_22647 = state_22542__$1;(statearr_22569_22647[2] = inst_22467);
(statearr_22569_22647[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 41))
{var inst_22410 = (state_22542[7]);var inst_22508 = (state_22542[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22542,40,Object,null,39);var inst_22515 = cljs.core.async.put_BANG_.call(null,inst_22508,inst_22410,done);var state_22542__$1 = state_22542;var statearr_22570_22648 = state_22542__$1;(statearr_22570_22648[2] = inst_22515);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22542__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 10))
{var inst_22422 = (state_22542[14]);var inst_22420 = (state_22542[16]);var inst_22428 = cljs.core._nth.call(null,inst_22420,inst_22422);var inst_22429 = cljs.core.nth.call(null,inst_22428,0,null);var inst_22430 = cljs.core.nth.call(null,inst_22428,1,null);var state_22542__$1 = (function (){var statearr_22571 = state_22542;(statearr_22571[24] = inst_22429);
return statearr_22571;
})();if(cljs.core.truth_(inst_22430))
{var statearr_22572_22649 = state_22542__$1;(statearr_22572_22649[1] = 13);
} else
{var statearr_22573_22650 = state_22542__$1;(statearr_22573_22650[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 42))
{var state_22542__$1 = state_22542;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22542__$1,45,dchan);
} else
{if((state_val_22543 === 11))
{var inst_22439 = (state_22542[25]);var inst_22419 = (state_22542[17]);var inst_22439__$1 = cljs.core.seq.call(null,inst_22419);var state_22542__$1 = (function (){var statearr_22574 = state_22542;(statearr_22574[25] = inst_22439__$1);
return statearr_22574;
})();if(inst_22439__$1)
{var statearr_22575_22651 = state_22542__$1;(statearr_22575_22651[1] = 16);
} else
{var statearr_22576_22652 = state_22542__$1;(statearr_22576_22652[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 43))
{var state_22542__$1 = state_22542;var statearr_22577_22653 = state_22542__$1;(statearr_22577_22653[2] = null);
(statearr_22577_22653[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 12))
{var inst_22465 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22578_22654 = state_22542__$1;(statearr_22578_22654[2] = inst_22465);
(statearr_22578_22654[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 44))
{var inst_22535 = (state_22542[2]);var state_22542__$1 = (function (){var statearr_22579 = state_22542;(statearr_22579[26] = inst_22535);
return statearr_22579;
})();var statearr_22580_22655 = state_22542__$1;(statearr_22580_22655[2] = null);
(statearr_22580_22655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 13))
{var inst_22429 = (state_22542[24]);var inst_22432 = cljs.core.async.close_BANG_.call(null,inst_22429);var state_22542__$1 = state_22542;var statearr_22581_22656 = state_22542__$1;(statearr_22581_22656[2] = inst_22432);
(statearr_22581_22656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 45))
{var inst_22532 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22585_22657 = state_22542__$1;(statearr_22585_22657[2] = inst_22532);
(statearr_22585_22657[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 14))
{var state_22542__$1 = state_22542;var statearr_22586_22658 = state_22542__$1;(statearr_22586_22658[2] = null);
(statearr_22586_22658[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 15))
{var inst_22422 = (state_22542[14]);var inst_22421 = (state_22542[15]);var inst_22420 = (state_22542[16]);var inst_22419 = (state_22542[17]);var inst_22435 = (state_22542[2]);var inst_22436 = (inst_22422 + 1);var tmp22582 = inst_22421;var tmp22583 = inst_22420;var tmp22584 = inst_22419;var inst_22419__$1 = tmp22584;var inst_22420__$1 = tmp22583;var inst_22421__$1 = tmp22582;var inst_22422__$1 = inst_22436;var state_22542__$1 = (function (){var statearr_22587 = state_22542;(statearr_22587[14] = inst_22422__$1);
(statearr_22587[15] = inst_22421__$1);
(statearr_22587[16] = inst_22420__$1);
(statearr_22587[17] = inst_22419__$1);
(statearr_22587[27] = inst_22435);
return statearr_22587;
})();var statearr_22588_22659 = state_22542__$1;(statearr_22588_22659[2] = null);
(statearr_22588_22659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 16))
{var inst_22439 = (state_22542[25]);var inst_22441 = cljs.core.chunked_seq_QMARK_.call(null,inst_22439);var state_22542__$1 = state_22542;if(inst_22441)
{var statearr_22589_22660 = state_22542__$1;(statearr_22589_22660[1] = 19);
} else
{var statearr_22590_22661 = state_22542__$1;(statearr_22590_22661[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 17))
{var state_22542__$1 = state_22542;var statearr_22591_22662 = state_22542__$1;(statearr_22591_22662[2] = null);
(statearr_22591_22662[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 18))
{var inst_22463 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22592_22663 = state_22542__$1;(statearr_22592_22663[2] = inst_22463);
(statearr_22592_22663[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 19))
{var inst_22439 = (state_22542[25]);var inst_22443 = cljs.core.chunk_first.call(null,inst_22439);var inst_22444 = cljs.core.chunk_rest.call(null,inst_22439);var inst_22445 = cljs.core.count.call(null,inst_22443);var inst_22419 = inst_22444;var inst_22420 = inst_22443;var inst_22421 = inst_22445;var inst_22422 = 0;var state_22542__$1 = (function (){var statearr_22593 = state_22542;(statearr_22593[14] = inst_22422);
(statearr_22593[15] = inst_22421);
(statearr_22593[16] = inst_22420);
(statearr_22593[17] = inst_22419);
return statearr_22593;
})();var statearr_22594_22664 = state_22542__$1;(statearr_22594_22664[2] = null);
(statearr_22594_22664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 20))
{var inst_22439 = (state_22542[25]);var inst_22449 = cljs.core.first.call(null,inst_22439);var inst_22450 = cljs.core.nth.call(null,inst_22449,0,null);var inst_22451 = cljs.core.nth.call(null,inst_22449,1,null);var state_22542__$1 = (function (){var statearr_22595 = state_22542;(statearr_22595[28] = inst_22450);
return statearr_22595;
})();if(cljs.core.truth_(inst_22451))
{var statearr_22596_22665 = state_22542__$1;(statearr_22596_22665[1] = 22);
} else
{var statearr_22597_22666 = state_22542__$1;(statearr_22597_22666[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 21))
{var inst_22460 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22598_22667 = state_22542__$1;(statearr_22598_22667[2] = inst_22460);
(statearr_22598_22667[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 22))
{var inst_22450 = (state_22542[28]);var inst_22453 = cljs.core.async.close_BANG_.call(null,inst_22450);var state_22542__$1 = state_22542;var statearr_22599_22668 = state_22542__$1;(statearr_22599_22668[2] = inst_22453);
(statearr_22599_22668[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 23))
{var state_22542__$1 = state_22542;var statearr_22600_22669 = state_22542__$1;(statearr_22600_22669[2] = null);
(statearr_22600_22669[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 24))
{var inst_22439 = (state_22542[25]);var inst_22456 = (state_22542[2]);var inst_22457 = cljs.core.next.call(null,inst_22439);var inst_22419 = inst_22457;var inst_22420 = null;var inst_22421 = 0;var inst_22422 = 0;var state_22542__$1 = (function (){var statearr_22601 = state_22542;(statearr_22601[14] = inst_22422);
(statearr_22601[29] = inst_22456);
(statearr_22601[15] = inst_22421);
(statearr_22601[16] = inst_22420);
(statearr_22601[17] = inst_22419);
return statearr_22601;
})();var statearr_22602_22670 = state_22542__$1;(statearr_22602_22670[2] = null);
(statearr_22602_22670[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 25))
{var inst_22481 = (state_22542[10]);var inst_22480 = (state_22542[11]);var inst_22483 = (inst_22481 < inst_22480);var inst_22484 = inst_22483;var state_22542__$1 = state_22542;if(cljs.core.truth_(inst_22484))
{var statearr_22603_22671 = state_22542__$1;(statearr_22603_22671[1] = 27);
} else
{var statearr_22604_22672 = state_22542__$1;(statearr_22604_22672[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 26))
{var inst_22470 = (state_22542[19]);var inst_22528 = (state_22542[2]);var inst_22529 = cljs.core.seq.call(null,inst_22470);var state_22542__$1 = (function (){var statearr_22605 = state_22542;(statearr_22605[30] = inst_22528);
return statearr_22605;
})();if(inst_22529)
{var statearr_22606_22673 = state_22542__$1;(statearr_22606_22673[1] = 42);
} else
{var statearr_22607_22674 = state_22542__$1;(statearr_22607_22674[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 27))
{var inst_22481 = (state_22542[10]);var inst_22479 = (state_22542[13]);var inst_22486 = cljs.core._nth.call(null,inst_22479,inst_22481);var state_22542__$1 = (function (){var statearr_22608 = state_22542;(statearr_22608[8] = inst_22486);
return statearr_22608;
})();var statearr_22609_22675 = state_22542__$1;(statearr_22609_22675[2] = null);
(statearr_22609_22675[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 28))
{var inst_22499 = (state_22542[9]);var inst_22478 = (state_22542[12]);var inst_22499__$1 = cljs.core.seq.call(null,inst_22478);var state_22542__$1 = (function (){var statearr_22613 = state_22542;(statearr_22613[9] = inst_22499__$1);
return statearr_22613;
})();if(inst_22499__$1)
{var statearr_22614_22676 = state_22542__$1;(statearr_22614_22676[1] = 33);
} else
{var statearr_22615_22677 = state_22542__$1;(statearr_22615_22677[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 29))
{var inst_22526 = (state_22542[2]);var state_22542__$1 = state_22542;var statearr_22616_22678 = state_22542__$1;(statearr_22616_22678[2] = inst_22526);
(statearr_22616_22678[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 30))
{var inst_22481 = (state_22542[10]);var inst_22480 = (state_22542[11]);var inst_22478 = (state_22542[12]);var inst_22479 = (state_22542[13]);var inst_22495 = (state_22542[2]);var inst_22496 = (inst_22481 + 1);var tmp22610 = inst_22480;var tmp22611 = inst_22478;var tmp22612 = inst_22479;var inst_22478__$1 = tmp22611;var inst_22479__$1 = tmp22612;var inst_22480__$1 = tmp22610;var inst_22481__$1 = inst_22496;var state_22542__$1 = (function (){var statearr_22617 = state_22542;(statearr_22617[10] = inst_22481__$1);
(statearr_22617[11] = inst_22480__$1);
(statearr_22617[31] = inst_22495);
(statearr_22617[12] = inst_22478__$1);
(statearr_22617[13] = inst_22479__$1);
return statearr_22617;
})();var statearr_22618_22679 = state_22542__$1;(statearr_22618_22679[2] = null);
(statearr_22618_22679[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22543 === 31))
{var inst_22486 = (state_22542[8]);var inst_22487 = (state_22542[2]);var inst_22488 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22489 = cljs.core.async.untap_STAR_.call(null,m,inst_22486);var state_22542__$1 = (function (){var statearr_22619 = state_22542;(statearr_22619[32] = inst_22488);
(statearr_22619[33] = inst_22487);
return statearr_22619;
})();var statearr_22620_22680 = state_22542__$1;(statearr_22620_22680[2] = inst_22489);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22542__$1);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_22624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22624[0] = state_machine__13884__auto__);
(statearr_22624[1] = 1);
return statearr_22624;
});
var state_machine__13884__auto____1 = (function (state_22542){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_22542);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e22625){if((e22625 instanceof Object))
{var ex__13887__auto__ = e22625;var statearr_22626_22681 = state_22542;(statearr_22626_22681[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22542);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22625;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22682 = state_22542;
state_22542 = G__22682;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_22542){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_22542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_22627 = f__13954__auto__.call(null);(statearr_22627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___22628);
return statearr_22627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
cljs.core.async.Mix = (function (){var obj22684 = {};return obj22684;
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
;var m = (function (){if(typeof cljs.core.async.t22794 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22794 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22795){
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
this.meta22795 = meta22795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22794.cljs$lang$type = true;
cljs.core.async.t22794.cljs$lang$ctorStr = "cljs.core.async/t22794";
cljs.core.async.t22794.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22794");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22794.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22794.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22796){var self__ = this;
var _22796__$1 = this;return self__.meta22795;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22796,meta22795__$1){var self__ = this;
var _22796__$1 = this;return (new cljs.core.async.t22794(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22795__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22794 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22795){return (new cljs.core.async.t22794(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22795));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22794(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13953__auto___22903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_22861){var state_val_22862 = (state_22861[1]);if((state_val_22862 === 1))
{var inst_22800 = (state_22861[7]);var inst_22800__$1 = calc_state.call(null);var inst_22801 = cljs.core.seq_QMARK_.call(null,inst_22800__$1);var state_22861__$1 = (function (){var statearr_22863 = state_22861;(statearr_22863[7] = inst_22800__$1);
return statearr_22863;
})();if(inst_22801)
{var statearr_22864_22904 = state_22861__$1;(statearr_22864_22904[1] = 2);
} else
{var statearr_22865_22905 = state_22861__$1;(statearr_22865_22905[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 2))
{var inst_22800 = (state_22861[7]);var inst_22803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22800);var state_22861__$1 = state_22861;var statearr_22866_22906 = state_22861__$1;(statearr_22866_22906[2] = inst_22803);
(statearr_22866_22906[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 3))
{var inst_22800 = (state_22861[7]);var state_22861__$1 = state_22861;var statearr_22867_22907 = state_22861__$1;(statearr_22867_22907[2] = inst_22800);
(statearr_22867_22907[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 4))
{var inst_22800 = (state_22861[7]);var inst_22806 = (state_22861[2]);var inst_22807 = cljs.core.get.call(null,inst_22806,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22808 = cljs.core.get.call(null,inst_22806,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22809 = cljs.core.get.call(null,inst_22806,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22810 = inst_22800;var state_22861__$1 = (function (){var statearr_22868 = state_22861;(statearr_22868[8] = inst_22809);
(statearr_22868[9] = inst_22807);
(statearr_22868[10] = inst_22808);
(statearr_22868[11] = inst_22810);
return statearr_22868;
})();var statearr_22869_22908 = state_22861__$1;(statearr_22869_22908[2] = null);
(statearr_22869_22908[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 5))
{var inst_22810 = (state_22861[11]);var inst_22813 = cljs.core.seq_QMARK_.call(null,inst_22810);var state_22861__$1 = state_22861;if(inst_22813)
{var statearr_22870_22909 = state_22861__$1;(statearr_22870_22909[1] = 7);
} else
{var statearr_22871_22910 = state_22861__$1;(statearr_22871_22910[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 6))
{var inst_22859 = (state_22861[2]);var state_22861__$1 = state_22861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22861__$1,inst_22859);
} else
{if((state_val_22862 === 7))
{var inst_22810 = (state_22861[11]);var inst_22815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22810);var state_22861__$1 = state_22861;var statearr_22872_22911 = state_22861__$1;(statearr_22872_22911[2] = inst_22815);
(statearr_22872_22911[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 8))
{var inst_22810 = (state_22861[11]);var state_22861__$1 = state_22861;var statearr_22873_22912 = state_22861__$1;(statearr_22873_22912[2] = inst_22810);
(statearr_22873_22912[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 9))
{var inst_22818 = (state_22861[12]);var inst_22818__$1 = (state_22861[2]);var inst_22819 = cljs.core.get.call(null,inst_22818__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22820 = cljs.core.get.call(null,inst_22818__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22821 = cljs.core.get.call(null,inst_22818__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22861__$1 = (function (){var statearr_22874 = state_22861;(statearr_22874[13] = inst_22820);
(statearr_22874[14] = inst_22821);
(statearr_22874[12] = inst_22818__$1);
return statearr_22874;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22861__$1,10,inst_22819);
} else
{if((state_val_22862 === 10))
{var inst_22826 = (state_22861[15]);var inst_22825 = (state_22861[16]);var inst_22824 = (state_22861[2]);var inst_22825__$1 = cljs.core.nth.call(null,inst_22824,0,null);var inst_22826__$1 = cljs.core.nth.call(null,inst_22824,1,null);var inst_22827 = (inst_22825__$1 == null);var inst_22828 = cljs.core._EQ_.call(null,inst_22826__$1,change);var inst_22829 = (inst_22827) || (inst_22828);var state_22861__$1 = (function (){var statearr_22875 = state_22861;(statearr_22875[15] = inst_22826__$1);
(statearr_22875[16] = inst_22825__$1);
return statearr_22875;
})();if(cljs.core.truth_(inst_22829))
{var statearr_22876_22913 = state_22861__$1;(statearr_22876_22913[1] = 11);
} else
{var statearr_22877_22914 = state_22861__$1;(statearr_22877_22914[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 11))
{var inst_22825 = (state_22861[16]);var inst_22831 = (inst_22825 == null);var state_22861__$1 = state_22861;if(cljs.core.truth_(inst_22831))
{var statearr_22878_22915 = state_22861__$1;(statearr_22878_22915[1] = 14);
} else
{var statearr_22879_22916 = state_22861__$1;(statearr_22879_22916[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 12))
{var inst_22821 = (state_22861[14]);var inst_22826 = (state_22861[15]);var inst_22840 = (state_22861[17]);var inst_22840__$1 = inst_22821.call(null,inst_22826);var state_22861__$1 = (function (){var statearr_22880 = state_22861;(statearr_22880[17] = inst_22840__$1);
return statearr_22880;
})();if(cljs.core.truth_(inst_22840__$1))
{var statearr_22881_22917 = state_22861__$1;(statearr_22881_22917[1] = 17);
} else
{var statearr_22882_22918 = state_22861__$1;(statearr_22882_22918[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 13))
{var inst_22857 = (state_22861[2]);var state_22861__$1 = state_22861;var statearr_22883_22919 = state_22861__$1;(statearr_22883_22919[2] = inst_22857);
(statearr_22883_22919[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 14))
{var inst_22826 = (state_22861[15]);var inst_22833 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22826);var state_22861__$1 = state_22861;var statearr_22884_22920 = state_22861__$1;(statearr_22884_22920[2] = inst_22833);
(statearr_22884_22920[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 15))
{var state_22861__$1 = state_22861;var statearr_22885_22921 = state_22861__$1;(statearr_22885_22921[2] = null);
(statearr_22885_22921[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 16))
{var inst_22836 = (state_22861[2]);var inst_22837 = calc_state.call(null);var inst_22810 = inst_22837;var state_22861__$1 = (function (){var statearr_22886 = state_22861;(statearr_22886[18] = inst_22836);
(statearr_22886[11] = inst_22810);
return statearr_22886;
})();var statearr_22887_22922 = state_22861__$1;(statearr_22887_22922[2] = null);
(statearr_22887_22922[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 17))
{var inst_22840 = (state_22861[17]);var state_22861__$1 = state_22861;var statearr_22888_22923 = state_22861__$1;(statearr_22888_22923[2] = inst_22840);
(statearr_22888_22923[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 18))
{var inst_22820 = (state_22861[13]);var inst_22821 = (state_22861[14]);var inst_22826 = (state_22861[15]);var inst_22843 = cljs.core.empty_QMARK_.call(null,inst_22821);var inst_22844 = inst_22820.call(null,inst_22826);var inst_22845 = cljs.core.not.call(null,inst_22844);var inst_22846 = (inst_22843) && (inst_22845);var state_22861__$1 = state_22861;var statearr_22889_22924 = state_22861__$1;(statearr_22889_22924[2] = inst_22846);
(statearr_22889_22924[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 19))
{var inst_22848 = (state_22861[2]);var state_22861__$1 = state_22861;if(cljs.core.truth_(inst_22848))
{var statearr_22890_22925 = state_22861__$1;(statearr_22890_22925[1] = 20);
} else
{var statearr_22891_22926 = state_22861__$1;(statearr_22891_22926[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 20))
{var inst_22825 = (state_22861[16]);var state_22861__$1 = state_22861;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22861__$1,23,out,inst_22825);
} else
{if((state_val_22862 === 21))
{var state_22861__$1 = state_22861;var statearr_22892_22927 = state_22861__$1;(statearr_22892_22927[2] = null);
(statearr_22892_22927[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 22))
{var inst_22818 = (state_22861[12]);var inst_22854 = (state_22861[2]);var inst_22810 = inst_22818;var state_22861__$1 = (function (){var statearr_22893 = state_22861;(statearr_22893[11] = inst_22810);
(statearr_22893[19] = inst_22854);
return statearr_22893;
})();var statearr_22894_22928 = state_22861__$1;(statearr_22894_22928[2] = null);
(statearr_22894_22928[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22862 === 23))
{var inst_22851 = (state_22861[2]);var state_22861__$1 = state_22861;var statearr_22895_22929 = state_22861__$1;(statearr_22895_22929[2] = inst_22851);
(statearr_22895_22929[1] = 22);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_22899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22899[0] = state_machine__13884__auto__);
(statearr_22899[1] = 1);
return statearr_22899;
});
var state_machine__13884__auto____1 = (function (state_22861){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_22861);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e22900){if((e22900 instanceof Object))
{var ex__13887__auto__ = e22900;var statearr_22901_22930 = state_22861;(statearr_22901_22930[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22931 = state_22861;
state_22861 = G__22931;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_22861){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_22861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_22902 = f__13954__auto__.call(null);(statearr_22902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___22903);
return statearr_22902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
cljs.core.async.Pub = (function (){var obj22933 = {};return obj22933;
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
return (function (p1__22934_SHARP_){if(cljs.core.truth_(p1__22934_SHARP_.call(null,topic)))
{return p1__22934_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22934_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10329__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23059 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23059 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23060){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23060 = meta23060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23059.cljs$lang$type = true;
cljs.core.async.t23059.cljs$lang$ctorStr = "cljs.core.async/t23059";
cljs.core.async.t23059.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t23059");
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23059.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23061){var self__ = this;
var _23061__$1 = this;return self__.meta23060;
});})(mults,ensure_mult))
;
cljs.core.async.t23059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23061,meta23060__$1){var self__ = this;
var _23061__$1 = this;return (new cljs.core.async.t23059(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23060__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23059 = ((function (mults,ensure_mult){
return (function __GT_t23059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23060){return (new cljs.core.async.t23059(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23060));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23059(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13953__auto___23183 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23135){var state_val_23136 = (state_23135[1]);if((state_val_23136 === 1))
{var state_23135__$1 = state_23135;var statearr_23137_23184 = state_23135__$1;(statearr_23137_23184[2] = null);
(statearr_23137_23184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 2))
{var state_23135__$1 = state_23135;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23135__$1,4,ch);
} else
{if((state_val_23136 === 3))
{var inst_23133 = (state_23135[2]);var state_23135__$1 = state_23135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23135__$1,inst_23133);
} else
{if((state_val_23136 === 4))
{var inst_23064 = (state_23135[7]);var inst_23064__$1 = (state_23135[2]);var inst_23065 = (inst_23064__$1 == null);var state_23135__$1 = (function (){var statearr_23138 = state_23135;(statearr_23138[7] = inst_23064__$1);
return statearr_23138;
})();if(cljs.core.truth_(inst_23065))
{var statearr_23139_23185 = state_23135__$1;(statearr_23139_23185[1] = 5);
} else
{var statearr_23140_23186 = state_23135__$1;(statearr_23140_23186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 5))
{var inst_23071 = cljs.core.deref.call(null,mults);var inst_23072 = cljs.core.vals.call(null,inst_23071);var inst_23073 = cljs.core.seq.call(null,inst_23072);var inst_23074 = inst_23073;var inst_23075 = null;var inst_23076 = 0;var inst_23077 = 0;var state_23135__$1 = (function (){var statearr_23141 = state_23135;(statearr_23141[8] = inst_23077);
(statearr_23141[9] = inst_23075);
(statearr_23141[10] = inst_23076);
(statearr_23141[11] = inst_23074);
return statearr_23141;
})();var statearr_23142_23187 = state_23135__$1;(statearr_23142_23187[2] = null);
(statearr_23142_23187[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 6))
{var inst_23114 = (state_23135[12]);var inst_23112 = (state_23135[13]);var inst_23064 = (state_23135[7]);var inst_23112__$1 = topic_fn.call(null,inst_23064);var inst_23113 = cljs.core.deref.call(null,mults);var inst_23114__$1 = cljs.core.get.call(null,inst_23113,inst_23112__$1);var state_23135__$1 = (function (){var statearr_23143 = state_23135;(statearr_23143[12] = inst_23114__$1);
(statearr_23143[13] = inst_23112__$1);
return statearr_23143;
})();if(cljs.core.truth_(inst_23114__$1))
{var statearr_23144_23188 = state_23135__$1;(statearr_23144_23188[1] = 19);
} else
{var statearr_23145_23189 = state_23135__$1;(statearr_23145_23189[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 7))
{var inst_23131 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23146_23190 = state_23135__$1;(statearr_23146_23190[2] = inst_23131);
(statearr_23146_23190[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 8))
{var inst_23077 = (state_23135[8]);var inst_23076 = (state_23135[10]);var inst_23079 = (inst_23077 < inst_23076);var inst_23080 = inst_23079;var state_23135__$1 = state_23135;if(cljs.core.truth_(inst_23080))
{var statearr_23150_23191 = state_23135__$1;(statearr_23150_23191[1] = 10);
} else
{var statearr_23151_23192 = state_23135__$1;(statearr_23151_23192[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 9))
{var inst_23110 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23152_23193 = state_23135__$1;(statearr_23152_23193[2] = inst_23110);
(statearr_23152_23193[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 10))
{var inst_23077 = (state_23135[8]);var inst_23075 = (state_23135[9]);var inst_23076 = (state_23135[10]);var inst_23074 = (state_23135[11]);var inst_23082 = cljs.core._nth.call(null,inst_23075,inst_23077);var inst_23083 = cljs.core.async.muxch_STAR_.call(null,inst_23082);var inst_23084 = cljs.core.async.close_BANG_.call(null,inst_23083);var inst_23085 = (inst_23077 + 1);var tmp23147 = inst_23075;var tmp23148 = inst_23076;var tmp23149 = inst_23074;var inst_23074__$1 = tmp23149;var inst_23075__$1 = tmp23147;var inst_23076__$1 = tmp23148;var inst_23077__$1 = inst_23085;var state_23135__$1 = (function (){var statearr_23153 = state_23135;(statearr_23153[8] = inst_23077__$1);
(statearr_23153[9] = inst_23075__$1);
(statearr_23153[10] = inst_23076__$1);
(statearr_23153[11] = inst_23074__$1);
(statearr_23153[14] = inst_23084);
return statearr_23153;
})();var statearr_23154_23194 = state_23135__$1;(statearr_23154_23194[2] = null);
(statearr_23154_23194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 11))
{var inst_23074 = (state_23135[11]);var inst_23088 = (state_23135[15]);var inst_23088__$1 = cljs.core.seq.call(null,inst_23074);var state_23135__$1 = (function (){var statearr_23155 = state_23135;(statearr_23155[15] = inst_23088__$1);
return statearr_23155;
})();if(inst_23088__$1)
{var statearr_23156_23195 = state_23135__$1;(statearr_23156_23195[1] = 13);
} else
{var statearr_23157_23196 = state_23135__$1;(statearr_23157_23196[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 12))
{var inst_23108 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23158_23197 = state_23135__$1;(statearr_23158_23197[2] = inst_23108);
(statearr_23158_23197[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 13))
{var inst_23088 = (state_23135[15]);var inst_23090 = cljs.core.chunked_seq_QMARK_.call(null,inst_23088);var state_23135__$1 = state_23135;if(inst_23090)
{var statearr_23159_23198 = state_23135__$1;(statearr_23159_23198[1] = 16);
} else
{var statearr_23160_23199 = state_23135__$1;(statearr_23160_23199[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 14))
{var state_23135__$1 = state_23135;var statearr_23161_23200 = state_23135__$1;(statearr_23161_23200[2] = null);
(statearr_23161_23200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 15))
{var inst_23106 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23162_23201 = state_23135__$1;(statearr_23162_23201[2] = inst_23106);
(statearr_23162_23201[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 16))
{var inst_23088 = (state_23135[15]);var inst_23092 = cljs.core.chunk_first.call(null,inst_23088);var inst_23093 = cljs.core.chunk_rest.call(null,inst_23088);var inst_23094 = cljs.core.count.call(null,inst_23092);var inst_23074 = inst_23093;var inst_23075 = inst_23092;var inst_23076 = inst_23094;var inst_23077 = 0;var state_23135__$1 = (function (){var statearr_23163 = state_23135;(statearr_23163[8] = inst_23077);
(statearr_23163[9] = inst_23075);
(statearr_23163[10] = inst_23076);
(statearr_23163[11] = inst_23074);
return statearr_23163;
})();var statearr_23164_23202 = state_23135__$1;(statearr_23164_23202[2] = null);
(statearr_23164_23202[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 17))
{var inst_23088 = (state_23135[15]);var inst_23097 = cljs.core.first.call(null,inst_23088);var inst_23098 = cljs.core.async.muxch_STAR_.call(null,inst_23097);var inst_23099 = cljs.core.async.close_BANG_.call(null,inst_23098);var inst_23100 = cljs.core.next.call(null,inst_23088);var inst_23074 = inst_23100;var inst_23075 = null;var inst_23076 = 0;var inst_23077 = 0;var state_23135__$1 = (function (){var statearr_23165 = state_23135;(statearr_23165[8] = inst_23077);
(statearr_23165[9] = inst_23075);
(statearr_23165[10] = inst_23076);
(statearr_23165[11] = inst_23074);
(statearr_23165[16] = inst_23099);
return statearr_23165;
})();var statearr_23166_23203 = state_23135__$1;(statearr_23166_23203[2] = null);
(statearr_23166_23203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 18))
{var inst_23103 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23167_23204 = state_23135__$1;(statearr_23167_23204[2] = inst_23103);
(statearr_23167_23204[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 19))
{var state_23135__$1 = state_23135;var statearr_23168_23205 = state_23135__$1;(statearr_23168_23205[2] = null);
(statearr_23168_23205[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 20))
{var state_23135__$1 = state_23135;var statearr_23169_23206 = state_23135__$1;(statearr_23169_23206[2] = null);
(statearr_23169_23206[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 21))
{var inst_23128 = (state_23135[2]);var state_23135__$1 = (function (){var statearr_23170 = state_23135;(statearr_23170[17] = inst_23128);
return statearr_23170;
})();var statearr_23171_23207 = state_23135__$1;(statearr_23171_23207[2] = null);
(statearr_23171_23207[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 22))
{var inst_23125 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23172_23208 = state_23135__$1;(statearr_23172_23208[2] = inst_23125);
(statearr_23172_23208[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 23))
{var inst_23112 = (state_23135[13]);var inst_23116 = (state_23135[2]);var inst_23117 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23112);var state_23135__$1 = (function (){var statearr_23173 = state_23135;(statearr_23173[18] = inst_23116);
return statearr_23173;
})();var statearr_23174_23209 = state_23135__$1;(statearr_23174_23209[2] = inst_23117);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23135__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23136 === 24))
{var inst_23114 = (state_23135[12]);var inst_23064 = (state_23135[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23135,23,Object,null,22);var inst_23121 = cljs.core.async.muxch_STAR_.call(null,inst_23114);var state_23135__$1 = state_23135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23135__$1,25,inst_23121,inst_23064);
} else
{if((state_val_23136 === 25))
{var inst_23123 = (state_23135[2]);var state_23135__$1 = state_23135;var statearr_23175_23210 = state_23135__$1;(statearr_23175_23210[2] = inst_23123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23135__$1);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23179[0] = state_machine__13884__auto__);
(statearr_23179[1] = 1);
return statearr_23179;
});
var state_machine__13884__auto____1 = (function (state_23135){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23135);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23180){if((e23180 instanceof Object))
{var ex__13887__auto__ = e23180;var statearr_23181_23211 = state_23135;(statearr_23181_23211[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23135);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23212 = state_23135;
state_23135 = G__23212;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23135){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23182 = f__13954__auto__.call(null);(statearr_23182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23183);
return statearr_23182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
,cljs.core.range.call(null,cnt));var c__13953__auto___23349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23319){var state_val_23320 = (state_23319[1]);if((state_val_23320 === 1))
{var state_23319__$1 = state_23319;var statearr_23321_23350 = state_23319__$1;(statearr_23321_23350[2] = null);
(statearr_23321_23350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 2))
{var inst_23282 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23283 = 0;var state_23319__$1 = (function (){var statearr_23322 = state_23319;(statearr_23322[7] = inst_23283);
(statearr_23322[8] = inst_23282);
return statearr_23322;
})();var statearr_23323_23351 = state_23319__$1;(statearr_23323_23351[2] = null);
(statearr_23323_23351[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 3))
{var inst_23317 = (state_23319[2]);var state_23319__$1 = state_23319;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else
{if((state_val_23320 === 4))
{var inst_23283 = (state_23319[7]);var inst_23285 = (inst_23283 < cnt);var state_23319__$1 = state_23319;if(cljs.core.truth_(inst_23285))
{var statearr_23324_23352 = state_23319__$1;(statearr_23324_23352[1] = 6);
} else
{var statearr_23325_23353 = state_23319__$1;(statearr_23325_23353[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 5))
{var inst_23303 = (state_23319[2]);var state_23319__$1 = (function (){var statearr_23326 = state_23319;(statearr_23326[9] = inst_23303);
return statearr_23326;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,12,dchan);
} else
{if((state_val_23320 === 6))
{var state_23319__$1 = state_23319;var statearr_23327_23354 = state_23319__$1;(statearr_23327_23354[2] = null);
(statearr_23327_23354[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 7))
{var state_23319__$1 = state_23319;var statearr_23328_23355 = state_23319__$1;(statearr_23328_23355[2] = null);
(statearr_23328_23355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 8))
{var inst_23301 = (state_23319[2]);var state_23319__$1 = state_23319;var statearr_23329_23356 = state_23319__$1;(statearr_23329_23356[2] = inst_23301);
(statearr_23329_23356[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 9))
{var inst_23283 = (state_23319[7]);var inst_23296 = (state_23319[2]);var inst_23297 = (inst_23283 + 1);var inst_23283__$1 = inst_23297;var state_23319__$1 = (function (){var statearr_23330 = state_23319;(statearr_23330[7] = inst_23283__$1);
(statearr_23330[10] = inst_23296);
return statearr_23330;
})();var statearr_23331_23357 = state_23319__$1;(statearr_23331_23357[2] = null);
(statearr_23331_23357[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 10))
{var inst_23287 = (state_23319[2]);var inst_23288 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23319__$1 = (function (){var statearr_23332 = state_23319;(statearr_23332[11] = inst_23287);
return statearr_23332;
})();var statearr_23333_23358 = state_23319__$1;(statearr_23333_23358[2] = inst_23288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 11))
{var inst_23283 = (state_23319[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23319,10,Object,null,9);var inst_23292 = chs__$1.call(null,inst_23283);var inst_23293 = done.call(null,inst_23283);var inst_23294 = cljs.core.async.take_BANG_.call(null,inst_23292,inst_23293);var state_23319__$1 = state_23319;var statearr_23334_23359 = state_23319__$1;(statearr_23334_23359[2] = inst_23294);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 12))
{var inst_23305 = (state_23319[12]);var inst_23305__$1 = (state_23319[2]);var inst_23306 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23305__$1);var state_23319__$1 = (function (){var statearr_23335 = state_23319;(statearr_23335[12] = inst_23305__$1);
return statearr_23335;
})();if(cljs.core.truth_(inst_23306))
{var statearr_23336_23360 = state_23319__$1;(statearr_23336_23360[1] = 13);
} else
{var statearr_23337_23361 = state_23319__$1;(statearr_23337_23361[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 13))
{var inst_23308 = cljs.core.async.close_BANG_.call(null,out);var state_23319__$1 = state_23319;var statearr_23338_23362 = state_23319__$1;(statearr_23338_23362[2] = inst_23308);
(statearr_23338_23362[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 14))
{var inst_23305 = (state_23319[12]);var inst_23310 = cljs.core.apply.call(null,f,inst_23305);var state_23319__$1 = state_23319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23319__$1,16,out,inst_23310);
} else
{if((state_val_23320 === 15))
{var inst_23315 = (state_23319[2]);var state_23319__$1 = state_23319;var statearr_23339_23363 = state_23319__$1;(statearr_23339_23363[2] = inst_23315);
(statearr_23339_23363[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23320 === 16))
{var inst_23312 = (state_23319[2]);var state_23319__$1 = (function (){var statearr_23340 = state_23319;(statearr_23340[13] = inst_23312);
return statearr_23340;
})();var statearr_23341_23364 = state_23319__$1;(statearr_23341_23364[2] = null);
(statearr_23341_23364[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23345[0] = state_machine__13884__auto__);
(statearr_23345[1] = 1);
return statearr_23345;
});
var state_machine__13884__auto____1 = (function (state_23319){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23319);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23346){if((e23346 instanceof Object))
{var ex__13887__auto__ = e23346;var statearr_23347_23365 = state_23319;(statearr_23347_23365[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23366 = state_23319;
state_23319 = G__23366;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23348 = f__13954__auto__.call(null);(statearr_23348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23349);
return statearr_23348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13953__auto___23474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23450){var state_val_23451 = (state_23450[1]);if((state_val_23451 === 1))
{var inst_23421 = cljs.core.vec.call(null,chs);var inst_23422 = inst_23421;var state_23450__$1 = (function (){var statearr_23452 = state_23450;(statearr_23452[7] = inst_23422);
return statearr_23452;
})();var statearr_23453_23475 = state_23450__$1;(statearr_23453_23475[2] = null);
(statearr_23453_23475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 2))
{var inst_23422 = (state_23450[7]);var inst_23424 = cljs.core.count.call(null,inst_23422);var inst_23425 = (inst_23424 > 0);var state_23450__$1 = state_23450;if(cljs.core.truth_(inst_23425))
{var statearr_23454_23476 = state_23450__$1;(statearr_23454_23476[1] = 4);
} else
{var statearr_23455_23477 = state_23450__$1;(statearr_23455_23477[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 3))
{var inst_23448 = (state_23450[2]);var state_23450__$1 = state_23450;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23450__$1,inst_23448);
} else
{if((state_val_23451 === 4))
{var inst_23422 = (state_23450[7]);var state_23450__$1 = state_23450;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23450__$1,7,inst_23422);
} else
{if((state_val_23451 === 5))
{var inst_23444 = cljs.core.async.close_BANG_.call(null,out);var state_23450__$1 = state_23450;var statearr_23456_23478 = state_23450__$1;(statearr_23456_23478[2] = inst_23444);
(statearr_23456_23478[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 6))
{var inst_23446 = (state_23450[2]);var state_23450__$1 = state_23450;var statearr_23457_23479 = state_23450__$1;(statearr_23457_23479[2] = inst_23446);
(statearr_23457_23479[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 7))
{var inst_23430 = (state_23450[8]);var inst_23429 = (state_23450[9]);var inst_23429__$1 = (state_23450[2]);var inst_23430__$1 = cljs.core.nth.call(null,inst_23429__$1,0,null);var inst_23431 = cljs.core.nth.call(null,inst_23429__$1,1,null);var inst_23432 = (inst_23430__$1 == null);var state_23450__$1 = (function (){var statearr_23458 = state_23450;(statearr_23458[8] = inst_23430__$1);
(statearr_23458[10] = inst_23431);
(statearr_23458[9] = inst_23429__$1);
return statearr_23458;
})();if(cljs.core.truth_(inst_23432))
{var statearr_23459_23480 = state_23450__$1;(statearr_23459_23480[1] = 8);
} else
{var statearr_23460_23481 = state_23450__$1;(statearr_23460_23481[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 8))
{var inst_23430 = (state_23450[8]);var inst_23431 = (state_23450[10]);var inst_23429 = (state_23450[9]);var inst_23422 = (state_23450[7]);var inst_23434 = (function (){var c = inst_23431;var v = inst_23430;var vec__23427 = inst_23429;var cs = inst_23422;return ((function (c,v,vec__23427,cs,inst_23430,inst_23431,inst_23429,inst_23422,state_val_23451){
return (function (p1__23367_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23367_SHARP_);
});
;})(c,v,vec__23427,cs,inst_23430,inst_23431,inst_23429,inst_23422,state_val_23451))
})();var inst_23435 = cljs.core.filterv.call(null,inst_23434,inst_23422);var inst_23422__$1 = inst_23435;var state_23450__$1 = (function (){var statearr_23461 = state_23450;(statearr_23461[7] = inst_23422__$1);
return statearr_23461;
})();var statearr_23462_23482 = state_23450__$1;(statearr_23462_23482[2] = null);
(statearr_23462_23482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 9))
{var inst_23430 = (state_23450[8]);var state_23450__$1 = state_23450;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23450__$1,11,out,inst_23430);
} else
{if((state_val_23451 === 10))
{var inst_23442 = (state_23450[2]);var state_23450__$1 = state_23450;var statearr_23464_23483 = state_23450__$1;(statearr_23464_23483[2] = inst_23442);
(statearr_23464_23483[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23451 === 11))
{var inst_23422 = (state_23450[7]);var inst_23439 = (state_23450[2]);var tmp23463 = inst_23422;var inst_23422__$1 = tmp23463;var state_23450__$1 = (function (){var statearr_23465 = state_23450;(statearr_23465[7] = inst_23422__$1);
(statearr_23465[11] = inst_23439);
return statearr_23465;
})();var statearr_23466_23484 = state_23450__$1;(statearr_23466_23484[2] = null);
(statearr_23466_23484[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23470 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23470[0] = state_machine__13884__auto__);
(statearr_23470[1] = 1);
return statearr_23470;
});
var state_machine__13884__auto____1 = (function (state_23450){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23450);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23471){if((e23471 instanceof Object))
{var ex__13887__auto__ = e23471;var statearr_23472_23485 = state_23450;(statearr_23472_23485[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23450);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23486 = state_23450;
state_23450 = G__23486;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23450){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23473 = f__13954__auto__.call(null);(statearr_23473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23474);
return statearr_23473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13953__auto___23579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23556){var state_val_23557 = (state_23556[1]);if((state_val_23557 === 1))
{var inst_23533 = 0;var state_23556__$1 = (function (){var statearr_23558 = state_23556;(statearr_23558[7] = inst_23533);
return statearr_23558;
})();var statearr_23559_23580 = state_23556__$1;(statearr_23559_23580[2] = null);
(statearr_23559_23580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 2))
{var inst_23533 = (state_23556[7]);var inst_23535 = (inst_23533 < n);var state_23556__$1 = state_23556;if(cljs.core.truth_(inst_23535))
{var statearr_23560_23581 = state_23556__$1;(statearr_23560_23581[1] = 4);
} else
{var statearr_23561_23582 = state_23556__$1;(statearr_23561_23582[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 3))
{var inst_23553 = (state_23556[2]);var inst_23554 = cljs.core.async.close_BANG_.call(null,out);var state_23556__$1 = (function (){var statearr_23562 = state_23556;(statearr_23562[8] = inst_23553);
return statearr_23562;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23556__$1,inst_23554);
} else
{if((state_val_23557 === 4))
{var state_23556__$1 = state_23556;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23556__$1,7,ch);
} else
{if((state_val_23557 === 5))
{var state_23556__$1 = state_23556;var statearr_23563_23583 = state_23556__$1;(statearr_23563_23583[2] = null);
(statearr_23563_23583[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 6))
{var inst_23551 = (state_23556[2]);var state_23556__$1 = state_23556;var statearr_23564_23584 = state_23556__$1;(statearr_23564_23584[2] = inst_23551);
(statearr_23564_23584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 7))
{var inst_23538 = (state_23556[9]);var inst_23538__$1 = (state_23556[2]);var inst_23539 = (inst_23538__$1 == null);var inst_23540 = cljs.core.not.call(null,inst_23539);var state_23556__$1 = (function (){var statearr_23565 = state_23556;(statearr_23565[9] = inst_23538__$1);
return statearr_23565;
})();if(inst_23540)
{var statearr_23566_23585 = state_23556__$1;(statearr_23566_23585[1] = 8);
} else
{var statearr_23567_23586 = state_23556__$1;(statearr_23567_23586[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 8))
{var inst_23538 = (state_23556[9]);var state_23556__$1 = state_23556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23556__$1,11,out,inst_23538);
} else
{if((state_val_23557 === 9))
{var state_23556__$1 = state_23556;var statearr_23568_23587 = state_23556__$1;(statearr_23568_23587[2] = null);
(statearr_23568_23587[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 10))
{var inst_23548 = (state_23556[2]);var state_23556__$1 = state_23556;var statearr_23569_23588 = state_23556__$1;(statearr_23569_23588[2] = inst_23548);
(statearr_23569_23588[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23557 === 11))
{var inst_23533 = (state_23556[7]);var inst_23543 = (state_23556[2]);var inst_23544 = (inst_23533 + 1);var inst_23533__$1 = inst_23544;var state_23556__$1 = (function (){var statearr_23570 = state_23556;(statearr_23570[10] = inst_23543);
(statearr_23570[7] = inst_23533__$1);
return statearr_23570;
})();var statearr_23571_23589 = state_23556__$1;(statearr_23571_23589[2] = null);
(statearr_23571_23589[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23575 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23575[0] = state_machine__13884__auto__);
(statearr_23575[1] = 1);
return statearr_23575;
});
var state_machine__13884__auto____1 = (function (state_23556){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23556);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23576){if((e23576 instanceof Object))
{var ex__13887__auto__ = e23576;var statearr_23577_23590 = state_23556;(statearr_23577_23590[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23591 = state_23556;
state_23556 = G__23591;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23556){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23578 = f__13954__auto__.call(null);(statearr_23578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23579);
return statearr_23578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13953__auto___23688 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23663){var state_val_23664 = (state_23663[1]);if((state_val_23664 === 1))
{var inst_23640 = null;var state_23663__$1 = (function (){var statearr_23665 = state_23663;(statearr_23665[7] = inst_23640);
return statearr_23665;
})();var statearr_23666_23689 = state_23663__$1;(statearr_23666_23689[2] = null);
(statearr_23666_23689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 2))
{var state_23663__$1 = state_23663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23663__$1,4,ch);
} else
{if((state_val_23664 === 3))
{var inst_23660 = (state_23663[2]);var inst_23661 = cljs.core.async.close_BANG_.call(null,out);var state_23663__$1 = (function (){var statearr_23667 = state_23663;(statearr_23667[8] = inst_23660);
return statearr_23667;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23663__$1,inst_23661);
} else
{if((state_val_23664 === 4))
{var inst_23643 = (state_23663[9]);var inst_23643__$1 = (state_23663[2]);var inst_23644 = (inst_23643__$1 == null);var inst_23645 = cljs.core.not.call(null,inst_23644);var state_23663__$1 = (function (){var statearr_23668 = state_23663;(statearr_23668[9] = inst_23643__$1);
return statearr_23668;
})();if(inst_23645)
{var statearr_23669_23690 = state_23663__$1;(statearr_23669_23690[1] = 5);
} else
{var statearr_23670_23691 = state_23663__$1;(statearr_23670_23691[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 5))
{var inst_23643 = (state_23663[9]);var inst_23640 = (state_23663[7]);var inst_23647 = cljs.core._EQ_.call(null,inst_23643,inst_23640);var state_23663__$1 = state_23663;if(inst_23647)
{var statearr_23671_23692 = state_23663__$1;(statearr_23671_23692[1] = 8);
} else
{var statearr_23672_23693 = state_23663__$1;(statearr_23672_23693[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 6))
{var state_23663__$1 = state_23663;var statearr_23674_23694 = state_23663__$1;(statearr_23674_23694[2] = null);
(statearr_23674_23694[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 7))
{var inst_23658 = (state_23663[2]);var state_23663__$1 = state_23663;var statearr_23675_23695 = state_23663__$1;(statearr_23675_23695[2] = inst_23658);
(statearr_23675_23695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 8))
{var inst_23640 = (state_23663[7]);var tmp23673 = inst_23640;var inst_23640__$1 = tmp23673;var state_23663__$1 = (function (){var statearr_23676 = state_23663;(statearr_23676[7] = inst_23640__$1);
return statearr_23676;
})();var statearr_23677_23696 = state_23663__$1;(statearr_23677_23696[2] = null);
(statearr_23677_23696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 9))
{var inst_23643 = (state_23663[9]);var state_23663__$1 = state_23663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23663__$1,11,out,inst_23643);
} else
{if((state_val_23664 === 10))
{var inst_23655 = (state_23663[2]);var state_23663__$1 = state_23663;var statearr_23678_23697 = state_23663__$1;(statearr_23678_23697[2] = inst_23655);
(statearr_23678_23697[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23664 === 11))
{var inst_23643 = (state_23663[9]);var inst_23652 = (state_23663[2]);var inst_23640 = inst_23643;var state_23663__$1 = (function (){var statearr_23679 = state_23663;(statearr_23679[7] = inst_23640);
(statearr_23679[10] = inst_23652);
return statearr_23679;
})();var statearr_23680_23698 = state_23663__$1;(statearr_23680_23698[2] = null);
(statearr_23680_23698[1] = 2);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23684 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23684[0] = state_machine__13884__auto__);
(statearr_23684[1] = 1);
return statearr_23684;
});
var state_machine__13884__auto____1 = (function (state_23663){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23663);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23685){if((e23685 instanceof Object))
{var ex__13887__auto__ = e23685;var statearr_23686_23699 = state_23663;(statearr_23686_23699[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23700 = state_23663;
state_23663 = G__23700;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23663){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23687 = f__13954__auto__.call(null);(statearr_23687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23688);
return statearr_23687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13953__auto___23835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23805){var state_val_23806 = (state_23805[1]);if((state_val_23806 === 1))
{var inst_23768 = (new Array(n));var inst_23769 = inst_23768;var inst_23770 = 0;var state_23805__$1 = (function (){var statearr_23807 = state_23805;(statearr_23807[7] = inst_23769);
(statearr_23807[8] = inst_23770);
return statearr_23807;
})();var statearr_23808_23836 = state_23805__$1;(statearr_23808_23836[2] = null);
(statearr_23808_23836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 2))
{var state_23805__$1 = state_23805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23805__$1,4,ch);
} else
{if((state_val_23806 === 3))
{var inst_23803 = (state_23805[2]);var state_23805__$1 = state_23805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23805__$1,inst_23803);
} else
{if((state_val_23806 === 4))
{var inst_23773 = (state_23805[9]);var inst_23773__$1 = (state_23805[2]);var inst_23774 = (inst_23773__$1 == null);var inst_23775 = cljs.core.not.call(null,inst_23774);var state_23805__$1 = (function (){var statearr_23809 = state_23805;(statearr_23809[9] = inst_23773__$1);
return statearr_23809;
})();if(inst_23775)
{var statearr_23810_23837 = state_23805__$1;(statearr_23810_23837[1] = 5);
} else
{var statearr_23811_23838 = state_23805__$1;(statearr_23811_23838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 5))
{var inst_23769 = (state_23805[7]);var inst_23770 = (state_23805[8]);var inst_23778 = (state_23805[10]);var inst_23773 = (state_23805[9]);var inst_23777 = (inst_23769[inst_23770] = inst_23773);var inst_23778__$1 = (inst_23770 + 1);var inst_23779 = (inst_23778__$1 < n);var state_23805__$1 = (function (){var statearr_23812 = state_23805;(statearr_23812[11] = inst_23777);
(statearr_23812[10] = inst_23778__$1);
return statearr_23812;
})();if(cljs.core.truth_(inst_23779))
{var statearr_23813_23839 = state_23805__$1;(statearr_23813_23839[1] = 8);
} else
{var statearr_23814_23840 = state_23805__$1;(statearr_23814_23840[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 6))
{var inst_23770 = (state_23805[8]);var inst_23791 = (inst_23770 > 0);var state_23805__$1 = state_23805;if(cljs.core.truth_(inst_23791))
{var statearr_23816_23841 = state_23805__$1;(statearr_23816_23841[1] = 12);
} else
{var statearr_23817_23842 = state_23805__$1;(statearr_23817_23842[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 7))
{var inst_23801 = (state_23805[2]);var state_23805__$1 = state_23805;var statearr_23818_23843 = state_23805__$1;(statearr_23818_23843[2] = inst_23801);
(statearr_23818_23843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 8))
{var inst_23769 = (state_23805[7]);var inst_23778 = (state_23805[10]);var tmp23815 = inst_23769;var inst_23769__$1 = tmp23815;var inst_23770 = inst_23778;var state_23805__$1 = (function (){var statearr_23819 = state_23805;(statearr_23819[7] = inst_23769__$1);
(statearr_23819[8] = inst_23770);
return statearr_23819;
})();var statearr_23820_23844 = state_23805__$1;(statearr_23820_23844[2] = null);
(statearr_23820_23844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 9))
{var inst_23769 = (state_23805[7]);var inst_23783 = cljs.core.vec.call(null,inst_23769);var state_23805__$1 = state_23805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23805__$1,11,out,inst_23783);
} else
{if((state_val_23806 === 10))
{var inst_23789 = (state_23805[2]);var state_23805__$1 = state_23805;var statearr_23821_23845 = state_23805__$1;(statearr_23821_23845[2] = inst_23789);
(statearr_23821_23845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 11))
{var inst_23785 = (state_23805[2]);var inst_23786 = (new Array(n));var inst_23769 = inst_23786;var inst_23770 = 0;var state_23805__$1 = (function (){var statearr_23822 = state_23805;(statearr_23822[7] = inst_23769);
(statearr_23822[8] = inst_23770);
(statearr_23822[12] = inst_23785);
return statearr_23822;
})();var statearr_23823_23846 = state_23805__$1;(statearr_23823_23846[2] = null);
(statearr_23823_23846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 12))
{var inst_23769 = (state_23805[7]);var inst_23793 = cljs.core.vec.call(null,inst_23769);var state_23805__$1 = state_23805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23805__$1,15,out,inst_23793);
} else
{if((state_val_23806 === 13))
{var state_23805__$1 = state_23805;var statearr_23824_23847 = state_23805__$1;(statearr_23824_23847[2] = null);
(statearr_23824_23847[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 14))
{var inst_23798 = (state_23805[2]);var inst_23799 = cljs.core.async.close_BANG_.call(null,out);var state_23805__$1 = (function (){var statearr_23825 = state_23805;(statearr_23825[13] = inst_23798);
return statearr_23825;
})();var statearr_23826_23848 = state_23805__$1;(statearr_23826_23848[2] = inst_23799);
(statearr_23826_23848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23806 === 15))
{var inst_23795 = (state_23805[2]);var state_23805__$1 = state_23805;var statearr_23827_23849 = state_23805__$1;(statearr_23827_23849[2] = inst_23795);
(statearr_23827_23849[1] = 14);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23831[0] = state_machine__13884__auto__);
(statearr_23831[1] = 1);
return statearr_23831;
});
var state_machine__13884__auto____1 = (function (state_23805){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23805);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23832){if((e23832 instanceof Object))
{var ex__13887__auto__ = e23832;var statearr_23833_23850 = state_23805;(statearr_23833_23850[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23851 = state_23805;
state_23805 = G__23851;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23805){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23834 = f__13954__auto__.call(null);(statearr_23834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23835);
return statearr_23834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13953__auto___23994 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13954__auto__ = (function (){var switch__13883__auto__ = (function (state_23964){var state_val_23965 = (state_23964[1]);if((state_val_23965 === 1))
{var inst_23923 = [];var inst_23924 = inst_23923;var inst_23925 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23964__$1 = (function (){var statearr_23966 = state_23964;(statearr_23966[7] = inst_23924);
(statearr_23966[8] = inst_23925);
return statearr_23966;
})();var statearr_23967_23995 = state_23964__$1;(statearr_23967_23995[2] = null);
(statearr_23967_23995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 2))
{var state_23964__$1 = state_23964;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23964__$1,4,ch);
} else
{if((state_val_23965 === 3))
{var inst_23962 = (state_23964[2]);var state_23964__$1 = state_23964;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23964__$1,inst_23962);
} else
{if((state_val_23965 === 4))
{var inst_23928 = (state_23964[9]);var inst_23928__$1 = (state_23964[2]);var inst_23929 = (inst_23928__$1 == null);var inst_23930 = cljs.core.not.call(null,inst_23929);var state_23964__$1 = (function (){var statearr_23968 = state_23964;(statearr_23968[9] = inst_23928__$1);
return statearr_23968;
})();if(inst_23930)
{var statearr_23969_23996 = state_23964__$1;(statearr_23969_23996[1] = 5);
} else
{var statearr_23970_23997 = state_23964__$1;(statearr_23970_23997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 5))
{var inst_23925 = (state_23964[8]);var inst_23928 = (state_23964[9]);var inst_23932 = (state_23964[10]);var inst_23932__$1 = f.call(null,inst_23928);var inst_23933 = cljs.core._EQ_.call(null,inst_23932__$1,inst_23925);var inst_23934 = cljs.core.keyword_identical_QMARK_.call(null,inst_23925,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23935 = (inst_23933) || (inst_23934);var state_23964__$1 = (function (){var statearr_23971 = state_23964;(statearr_23971[10] = inst_23932__$1);
return statearr_23971;
})();if(cljs.core.truth_(inst_23935))
{var statearr_23972_23998 = state_23964__$1;(statearr_23972_23998[1] = 8);
} else
{var statearr_23973_23999 = state_23964__$1;(statearr_23973_23999[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 6))
{var inst_23924 = (state_23964[7]);var inst_23949 = inst_23924.length;var inst_23950 = (inst_23949 > 0);var state_23964__$1 = state_23964;if(cljs.core.truth_(inst_23950))
{var statearr_23975_24000 = state_23964__$1;(statearr_23975_24000[1] = 12);
} else
{var statearr_23976_24001 = state_23964__$1;(statearr_23976_24001[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 7))
{var inst_23960 = (state_23964[2]);var state_23964__$1 = state_23964;var statearr_23977_24002 = state_23964__$1;(statearr_23977_24002[2] = inst_23960);
(statearr_23977_24002[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 8))
{var inst_23924 = (state_23964[7]);var inst_23928 = (state_23964[9]);var inst_23932 = (state_23964[10]);var inst_23937 = inst_23924.push(inst_23928);var tmp23974 = inst_23924;var inst_23924__$1 = tmp23974;var inst_23925 = inst_23932;var state_23964__$1 = (function (){var statearr_23978 = state_23964;(statearr_23978[7] = inst_23924__$1);
(statearr_23978[8] = inst_23925);
(statearr_23978[11] = inst_23937);
return statearr_23978;
})();var statearr_23979_24003 = state_23964__$1;(statearr_23979_24003[2] = null);
(statearr_23979_24003[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 9))
{var inst_23924 = (state_23964[7]);var inst_23940 = cljs.core.vec.call(null,inst_23924);var state_23964__$1 = state_23964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23964__$1,11,out,inst_23940);
} else
{if((state_val_23965 === 10))
{var inst_23947 = (state_23964[2]);var state_23964__$1 = state_23964;var statearr_23980_24004 = state_23964__$1;(statearr_23980_24004[2] = inst_23947);
(statearr_23980_24004[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 11))
{var inst_23928 = (state_23964[9]);var inst_23932 = (state_23964[10]);var inst_23942 = (state_23964[2]);var inst_23943 = [];var inst_23944 = inst_23943.push(inst_23928);var inst_23924 = inst_23943;var inst_23925 = inst_23932;var state_23964__$1 = (function (){var statearr_23981 = state_23964;(statearr_23981[7] = inst_23924);
(statearr_23981[8] = inst_23925);
(statearr_23981[12] = inst_23942);
(statearr_23981[13] = inst_23944);
return statearr_23981;
})();var statearr_23982_24005 = state_23964__$1;(statearr_23982_24005[2] = null);
(statearr_23982_24005[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 12))
{var inst_23924 = (state_23964[7]);var inst_23952 = cljs.core.vec.call(null,inst_23924);var state_23964__$1 = state_23964;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23964__$1,15,out,inst_23952);
} else
{if((state_val_23965 === 13))
{var state_23964__$1 = state_23964;var statearr_23983_24006 = state_23964__$1;(statearr_23983_24006[2] = null);
(statearr_23983_24006[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 14))
{var inst_23957 = (state_23964[2]);var inst_23958 = cljs.core.async.close_BANG_.call(null,out);var state_23964__$1 = (function (){var statearr_23984 = state_23964;(statearr_23984[14] = inst_23957);
return statearr_23984;
})();var statearr_23985_24007 = state_23964__$1;(statearr_23985_24007[2] = inst_23958);
(statearr_23985_24007[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23965 === 15))
{var inst_23954 = (state_23964[2]);var state_23964__$1 = state_23964;var statearr_23986_24008 = state_23964__$1;(statearr_23986_24008[2] = inst_23954);
(statearr_23986_24008[1] = 14);
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
});return ((function (switch__13883__auto__){
return (function() {
var state_machine__13884__auto__ = null;
var state_machine__13884__auto____0 = (function (){var statearr_23990 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23990[0] = state_machine__13884__auto__);
(statearr_23990[1] = 1);
return statearr_23990;
});
var state_machine__13884__auto____1 = (function (state_23964){while(true){
var ret_value__13885__auto__ = (function (){try{while(true){
var result__13886__auto__ = switch__13883__auto__.call(null,state_23964);if(cljs.core.keyword_identical_QMARK_.call(null,result__13886__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13886__auto__;
}
break;
}
}catch (e23991){if((e23991 instanceof Object))
{var ex__13887__auto__ = e23991;var statearr_23992_24009 = state_23964;(statearr_23992_24009[5] = ex__13887__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23964);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13885__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24010 = state_23964;
state_23964 = G__24010;
continue;
}
} else
{return ret_value__13885__auto__;
}
break;
}
});
state_machine__13884__auto__ = function(state_23964){
switch(arguments.length){
case 0:
return state_machine__13884__auto____0.call(this);
case 1:
return state_machine__13884__auto____1.call(this,state_23964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13884__auto____0;
state_machine__13884__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13884__auto____1;
return state_machine__13884__auto__;
})()
;})(switch__13883__auto__))
})();var state__13955__auto__ = (function (){var statearr_23993 = f__13954__auto__.call(null);(statearr_23993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13953__auto___23994);
return statearr_23993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13955__auto__);
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

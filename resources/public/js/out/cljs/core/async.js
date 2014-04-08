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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t21241 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21241 = (function (f,fn_handler,meta21242){
this.f = f;
this.fn_handler = fn_handler;
this.meta21242 = meta21242;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21241.cljs$lang$type = true;
cljs.core.async.t21241.cljs$lang$ctorStr = "cljs.core.async/t21241";
cljs.core.async.t21241.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21241");
});
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t21241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t21241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21243){var self__ = this;
var _21243__$1 = this;return self__.meta21242;
});
cljs.core.async.t21241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21243,meta21242__$1){var self__ = this;
var _21243__$1 = this;return (new cljs.core.async.t21241(self__.f,self__.fn_handler,meta21242__$1));
});
cljs.core.async.__GT_t21241 = (function __GT_t21241(f__$1,fn_handler__$1,meta21242){return (new cljs.core.async.t21241(f__$1,fn_handler__$1,meta21242));
});
}
return (new cljs.core.async.t21241(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__21245 = buff;if(G__21245)
{var bit__10912__auto__ = null;if(cljs.core.truth_((function (){var or__10262__auto__ = bit__10912__auto__;if(cljs.core.truth_(or__10262__auto__))
{return or__10262__auto__;
} else
{return G__21245.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__21245.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21245);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__21245);
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
{var val_21246 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_21246);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_21246);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__10250__auto__ = ret;if(cljs.core.truth_(and__10250__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__10250__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11110__auto___21247 = n;var x_21248 = 0;while(true){
if((x_21248 < n__11110__auto___21247))
{(a[x_21248] = 0);
{
var G__21249 = (x_21248 + 1);
x_21248 = G__21249;
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
var G__21250 = (i + 1);
i = G__21250;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t21254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21254 = (function (flag,alt_flag,meta21255){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta21255 = meta21255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21254.cljs$lang$type = true;
cljs.core.async.t21254.cljs$lang$ctorStr = "cljs.core.async/t21254";
cljs.core.async.t21254.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21254");
});
cljs.core.async.t21254.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t21254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t21254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21256){var self__ = this;
var _21256__$1 = this;return self__.meta21255;
});
cljs.core.async.t21254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21256,meta21255__$1){var self__ = this;
var _21256__$1 = this;return (new cljs.core.async.t21254(self__.flag,self__.alt_flag,meta21255__$1));
});
cljs.core.async.__GT_t21254 = (function __GT_t21254(flag__$1,alt_flag__$1,meta21255){return (new cljs.core.async.t21254(flag__$1,alt_flag__$1,meta21255));
});
}
return (new cljs.core.async.t21254(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t21260 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21260 = (function (cb,flag,alt_handler,meta21261){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta21261 = meta21261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21260.cljs$lang$type = true;
cljs.core.async.t21260.cljs$lang$ctorStr = "cljs.core.async/t21260";
cljs.core.async.t21260.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21260");
});
cljs.core.async.t21260.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21260.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t21260.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t21260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21262){var self__ = this;
var _21262__$1 = this;return self__.meta21261;
});
cljs.core.async.t21260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21262,meta21261__$1){var self__ = this;
var _21262__$1 = this;return (new cljs.core.async.t21260(self__.cb,self__.flag,self__.alt_handler,meta21261__$1));
});
cljs.core.async.__GT_t21260 = (function __GT_t21260(cb__$1,flag__$1,alt_handler__$1,meta21261){return (new cljs.core.async.t21260(cb__$1,flag__$1,alt_handler__$1,meta21261));
});
}
return (new cljs.core.async.t21260(cb,flag,alt_handler,null));
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
return (function (p1__21263_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21263_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10262__auto__ = wport;if(cljs.core.truth_(or__10262__auto__))
{return or__10262__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__21264 = (i + 1);
i = G__21264;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10262__auto__ = ret;if(cljs.core.truth_(or__10262__auto__))
{return or__10262__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__10250__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10250__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10250__auto__;
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
var alts_BANG___delegate = function (ports,p__21265){var map__21267 = p__21265;var map__21267__$1 = ((cljs.core.seq_QMARK_.call(null,map__21267))?cljs.core.apply.call(null,cljs.core.hash_map,map__21267):map__21267);var opts = map__21267__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__21265 = null;if (arguments.length > 1) {
  p__21265 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__21265);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__21268){
var ports = cljs.core.first(arglist__21268);
var p__21265 = cljs.core.rest(arglist__21268);
return alts_BANG___delegate(ports,p__21265);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21276 = (function (ch,f,map_LT_,meta21277){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21277 = meta21277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21276.cljs$lang$type = true;
cljs.core.async.t21276.cljs$lang$ctorStr = "cljs.core.async/t21276";
cljs.core.async.t21276.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21276");
});
cljs.core.async.t21276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t21276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21279 = (function (fn1,_,meta21277,ch,f,map_LT_,meta21280){
this.fn1 = fn1;
this._ = _;
this.meta21277 = meta21277;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21280 = meta21280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21279.cljs$lang$type = true;
cljs.core.async.t21279.cljs$lang$ctorStr = "cljs.core.async/t21279";
cljs.core.async.t21279.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21279");
});
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t21279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__21269_SHARP_){return f1.call(null,(((p1__21269_SHARP_ == null))?null:self__.f.call(null,p1__21269_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t21279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21281){var self__ = this;
var _21281__$1 = this;return self__.meta21280;
});
cljs.core.async.t21279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21281,meta21280__$1){var self__ = this;
var _21281__$1 = this;return (new cljs.core.async.t21279(self__.fn1,self__._,self__.meta21277,self__.ch,self__.f,self__.map_LT_,meta21280__$1));
});
cljs.core.async.__GT_t21279 = (function __GT_t21279(fn1__$1,___$2,meta21277__$1,ch__$2,f__$2,map_LT___$2,meta21280){return (new cljs.core.async.t21279(fn1__$1,___$2,meta21277__$1,ch__$2,f__$2,map_LT___$2,meta21280));
});
}
return (new cljs.core.async.t21279(fn1,___$1,self__.meta21277,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10250__auto__ = ret;if(cljs.core.truth_(and__10250__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10250__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t21276.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21278){var self__ = this;
var _21278__$1 = this;return self__.meta21277;
});
cljs.core.async.t21276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21278,meta21277__$1){var self__ = this;
var _21278__$1 = this;return (new cljs.core.async.t21276(self__.ch,self__.f,self__.map_LT_,meta21277__$1));
});
cljs.core.async.__GT_t21276 = (function __GT_t21276(ch__$1,f__$1,map_LT___$1,meta21277){return (new cljs.core.async.t21276(ch__$1,f__$1,map_LT___$1,meta21277));
});
}
return (new cljs.core.async.t21276(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21285 = (function (ch,f,map_GT_,meta21286){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21286 = meta21286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21285.cljs$lang$type = true;
cljs.core.async.t21285.cljs$lang$ctorStr = "cljs.core.async/t21285";
cljs.core.async.t21285.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21285");
});
cljs.core.async.t21285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t21285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21285.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21287){var self__ = this;
var _21287__$1 = this;return self__.meta21286;
});
cljs.core.async.t21285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21287,meta21286__$1){var self__ = this;
var _21287__$1 = this;return (new cljs.core.async.t21285(self__.ch,self__.f,self__.map_GT_,meta21286__$1));
});
cljs.core.async.__GT_t21285 = (function __GT_t21285(ch__$1,f__$1,map_GT___$1,meta21286){return (new cljs.core.async.t21285(ch__$1,f__$1,map_GT___$1,meta21286));
});
}
return (new cljs.core.async.t21285(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21291 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21291 = (function (ch,p,filter_GT_,meta21292){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21292 = meta21292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21291.cljs$lang$type = true;
cljs.core.async.t21291.cljs$lang$ctorStr = "cljs.core.async/t21291";
cljs.core.async.t21291.cljs$lang$ctorPrWriter = (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t21291");
});
cljs.core.async.t21291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t21291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21291.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21293){var self__ = this;
var _21293__$1 = this;return self__.meta21292;
});
cljs.core.async.t21291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21293,meta21292__$1){var self__ = this;
var _21293__$1 = this;return (new cljs.core.async.t21291(self__.ch,self__.p,self__.filter_GT_,meta21292__$1));
});
cljs.core.async.__GT_t21291 = (function __GT_t21291(ch__$1,p__$1,filter_GT___$1,meta21292){return (new cljs.core.async.t21291(ch__$1,p__$1,filter_GT___$1,meta21292));
});
}
return (new cljs.core.async.t21291(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13886__auto___21376 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_21355){var state_val_21356 = (state_21355[1]);if((state_val_21356 === 1))
{var state_21355__$1 = state_21355;var statearr_21357_21377 = state_21355__$1;(statearr_21357_21377[2] = null);
(statearr_21357_21377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 2))
{var state_21355__$1 = state_21355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21355__$1,4,ch);
} else
{if((state_val_21356 === 3))
{var inst_21353 = (state_21355[2]);var state_21355__$1 = state_21355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21355__$1,inst_21353);
} else
{if((state_val_21356 === 4))
{var inst_21337 = (state_21355[7]);var inst_21337__$1 = (state_21355[2]);var inst_21338 = (inst_21337__$1 == null);var state_21355__$1 = (function (){var statearr_21358 = state_21355;(statearr_21358[7] = inst_21337__$1);
return statearr_21358;
})();if(cljs.core.truth_(inst_21338))
{var statearr_21359_21378 = state_21355__$1;(statearr_21359_21378[1] = 5);
} else
{var statearr_21360_21379 = state_21355__$1;(statearr_21360_21379[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 5))
{var inst_21340 = cljs.core.async.close_BANG_.call(null,out);var state_21355__$1 = state_21355;var statearr_21361_21380 = state_21355__$1;(statearr_21361_21380[2] = inst_21340);
(statearr_21361_21380[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 6))
{var inst_21337 = (state_21355[7]);var inst_21342 = p.call(null,inst_21337);var state_21355__$1 = state_21355;if(cljs.core.truth_(inst_21342))
{var statearr_21362_21381 = state_21355__$1;(statearr_21362_21381[1] = 8);
} else
{var statearr_21363_21382 = state_21355__$1;(statearr_21363_21382[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 7))
{var inst_21351 = (state_21355[2]);var state_21355__$1 = state_21355;var statearr_21364_21383 = state_21355__$1;(statearr_21364_21383[2] = inst_21351);
(statearr_21364_21383[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 8))
{var inst_21337 = (state_21355[7]);var state_21355__$1 = state_21355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21355__$1,11,out,inst_21337);
} else
{if((state_val_21356 === 9))
{var state_21355__$1 = state_21355;var statearr_21365_21384 = state_21355__$1;(statearr_21365_21384[2] = null);
(statearr_21365_21384[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 10))
{var inst_21348 = (state_21355[2]);var state_21355__$1 = (function (){var statearr_21366 = state_21355;(statearr_21366[8] = inst_21348);
return statearr_21366;
})();var statearr_21367_21385 = state_21355__$1;(statearr_21367_21385[2] = null);
(statearr_21367_21385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21356 === 11))
{var inst_21345 = (state_21355[2]);var state_21355__$1 = state_21355;var statearr_21368_21386 = state_21355__$1;(statearr_21368_21386[2] = inst_21345);
(statearr_21368_21386[1] = 10);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_21372 = [null,null,null,null,null,null,null,null,null];(statearr_21372[0] = state_machine__13817__auto__);
(statearr_21372[1] = 1);
return statearr_21372;
});
var state_machine__13817__auto____1 = (function (state_21355){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_21355);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e21373){if((e21373 instanceof Object))
{var ex__13820__auto__ = e21373;var statearr_21374_21387 = state_21355;(statearr_21374_21387[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21355);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21373;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21388 = state_21355;
state_21355 = G__21388;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_21355){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_21355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_21375 = f__13887__auto__.call(null);(statearr_21375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___21376);
return statearr_21375;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_21540){var state_val_21541 = (state_21540[1]);if((state_val_21541 === 1))
{var state_21540__$1 = state_21540;var statearr_21542_21579 = state_21540__$1;(statearr_21542_21579[2] = null);
(statearr_21542_21579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 2))
{var state_21540__$1 = state_21540;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21540__$1,4,in$);
} else
{if((state_val_21541 === 3))
{var inst_21538 = (state_21540[2]);var state_21540__$1 = state_21540;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21540__$1,inst_21538);
} else
{if((state_val_21541 === 4))
{var inst_21486 = (state_21540[7]);var inst_21486__$1 = (state_21540[2]);var inst_21487 = (inst_21486__$1 == null);var state_21540__$1 = (function (){var statearr_21543 = state_21540;(statearr_21543[7] = inst_21486__$1);
return statearr_21543;
})();if(cljs.core.truth_(inst_21487))
{var statearr_21544_21580 = state_21540__$1;(statearr_21544_21580[1] = 5);
} else
{var statearr_21545_21581 = state_21540__$1;(statearr_21545_21581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 5))
{var inst_21489 = cljs.core.async.close_BANG_.call(null,out);var state_21540__$1 = state_21540;var statearr_21546_21582 = state_21540__$1;(statearr_21546_21582[2] = inst_21489);
(statearr_21546_21582[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 6))
{var inst_21486 = (state_21540[7]);var inst_21491 = f.call(null,inst_21486);var inst_21496 = cljs.core.seq.call(null,inst_21491);var inst_21497 = inst_21496;var inst_21498 = null;var inst_21499 = 0;var inst_21500 = 0;var state_21540__$1 = (function (){var statearr_21547 = state_21540;(statearr_21547[8] = inst_21499);
(statearr_21547[9] = inst_21498);
(statearr_21547[10] = inst_21497);
(statearr_21547[11] = inst_21500);
return statearr_21547;
})();var statearr_21548_21583 = state_21540__$1;(statearr_21548_21583[2] = null);
(statearr_21548_21583[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 7))
{var inst_21536 = (state_21540[2]);var state_21540__$1 = state_21540;var statearr_21549_21584 = state_21540__$1;(statearr_21549_21584[2] = inst_21536);
(statearr_21549_21584[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 8))
{var inst_21499 = (state_21540[8]);var inst_21500 = (state_21540[11]);var inst_21502 = (inst_21500 < inst_21499);var inst_21503 = inst_21502;var state_21540__$1 = state_21540;if(cljs.core.truth_(inst_21503))
{var statearr_21550_21585 = state_21540__$1;(statearr_21550_21585[1] = 10);
} else
{var statearr_21551_21586 = state_21540__$1;(statearr_21551_21586[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 9))
{var inst_21533 = (state_21540[2]);var state_21540__$1 = (function (){var statearr_21552 = state_21540;(statearr_21552[12] = inst_21533);
return statearr_21552;
})();var statearr_21553_21587 = state_21540__$1;(statearr_21553_21587[2] = null);
(statearr_21553_21587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 10))
{var inst_21498 = (state_21540[9]);var inst_21500 = (state_21540[11]);var inst_21505 = cljs.core._nth.call(null,inst_21498,inst_21500);var state_21540__$1 = state_21540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21540__$1,13,out,inst_21505);
} else
{if((state_val_21541 === 11))
{var inst_21497 = (state_21540[10]);var inst_21511 = (state_21540[13]);var inst_21511__$1 = cljs.core.seq.call(null,inst_21497);var state_21540__$1 = (function (){var statearr_21557 = state_21540;(statearr_21557[13] = inst_21511__$1);
return statearr_21557;
})();if(inst_21511__$1)
{var statearr_21558_21588 = state_21540__$1;(statearr_21558_21588[1] = 14);
} else
{var statearr_21559_21589 = state_21540__$1;(statearr_21559_21589[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 12))
{var inst_21531 = (state_21540[2]);var state_21540__$1 = state_21540;var statearr_21560_21590 = state_21540__$1;(statearr_21560_21590[2] = inst_21531);
(statearr_21560_21590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 13))
{var inst_21499 = (state_21540[8]);var inst_21498 = (state_21540[9]);var inst_21497 = (state_21540[10]);var inst_21500 = (state_21540[11]);var inst_21507 = (state_21540[2]);var inst_21508 = (inst_21500 + 1);var tmp21554 = inst_21499;var tmp21555 = inst_21498;var tmp21556 = inst_21497;var inst_21497__$1 = tmp21556;var inst_21498__$1 = tmp21555;var inst_21499__$1 = tmp21554;var inst_21500__$1 = inst_21508;var state_21540__$1 = (function (){var statearr_21561 = state_21540;(statearr_21561[8] = inst_21499__$1);
(statearr_21561[14] = inst_21507);
(statearr_21561[9] = inst_21498__$1);
(statearr_21561[10] = inst_21497__$1);
(statearr_21561[11] = inst_21500__$1);
return statearr_21561;
})();var statearr_21562_21591 = state_21540__$1;(statearr_21562_21591[2] = null);
(statearr_21562_21591[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 14))
{var inst_21511 = (state_21540[13]);var inst_21513 = cljs.core.chunked_seq_QMARK_.call(null,inst_21511);var state_21540__$1 = state_21540;if(inst_21513)
{var statearr_21563_21592 = state_21540__$1;(statearr_21563_21592[1] = 17);
} else
{var statearr_21564_21593 = state_21540__$1;(statearr_21564_21593[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 15))
{var state_21540__$1 = state_21540;var statearr_21565_21594 = state_21540__$1;(statearr_21565_21594[2] = null);
(statearr_21565_21594[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 16))
{var inst_21529 = (state_21540[2]);var state_21540__$1 = state_21540;var statearr_21566_21595 = state_21540__$1;(statearr_21566_21595[2] = inst_21529);
(statearr_21566_21595[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 17))
{var inst_21511 = (state_21540[13]);var inst_21515 = cljs.core.chunk_first.call(null,inst_21511);var inst_21516 = cljs.core.chunk_rest.call(null,inst_21511);var inst_21517 = cljs.core.count.call(null,inst_21515);var inst_21497 = inst_21516;var inst_21498 = inst_21515;var inst_21499 = inst_21517;var inst_21500 = 0;var state_21540__$1 = (function (){var statearr_21567 = state_21540;(statearr_21567[8] = inst_21499);
(statearr_21567[9] = inst_21498);
(statearr_21567[10] = inst_21497);
(statearr_21567[11] = inst_21500);
return statearr_21567;
})();var statearr_21568_21596 = state_21540__$1;(statearr_21568_21596[2] = null);
(statearr_21568_21596[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 18))
{var inst_21511 = (state_21540[13]);var inst_21520 = cljs.core.first.call(null,inst_21511);var state_21540__$1 = state_21540;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21540__$1,20,out,inst_21520);
} else
{if((state_val_21541 === 19))
{var inst_21526 = (state_21540[2]);var state_21540__$1 = state_21540;var statearr_21569_21597 = state_21540__$1;(statearr_21569_21597[2] = inst_21526);
(statearr_21569_21597[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21541 === 20))
{var inst_21511 = (state_21540[13]);var inst_21522 = (state_21540[2]);var inst_21523 = cljs.core.next.call(null,inst_21511);var inst_21497 = inst_21523;var inst_21498 = null;var inst_21499 = 0;var inst_21500 = 0;var state_21540__$1 = (function (){var statearr_21570 = state_21540;(statearr_21570[8] = inst_21499);
(statearr_21570[9] = inst_21498);
(statearr_21570[10] = inst_21497);
(statearr_21570[15] = inst_21522);
(statearr_21570[11] = inst_21500);
return statearr_21570;
})();var statearr_21571_21598 = state_21540__$1;(statearr_21571_21598[2] = null);
(statearr_21571_21598[1] = 8);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_21575 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21575[0] = state_machine__13817__auto__);
(statearr_21575[1] = 1);
return statearr_21575;
});
var state_machine__13817__auto____1 = (function (state_21540){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_21540);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e21576){if((e21576 instanceof Object))
{var ex__13820__auto__ = e21576;var statearr_21577_21599 = state_21540;(statearr_21577_21599[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21540);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21600 = state_21540;
state_21540 = G__21600;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_21540){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_21540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_21578 = f__13887__auto__.call(null);(statearr_21578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_21578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13886__auto___21681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_21660){var state_val_21661 = (state_21660[1]);if((state_val_21661 === 1))
{var state_21660__$1 = state_21660;var statearr_21662_21682 = state_21660__$1;(statearr_21662_21682[2] = null);
(statearr_21662_21682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 2))
{var state_21660__$1 = state_21660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21660__$1,4,from);
} else
{if((state_val_21661 === 3))
{var inst_21658 = (state_21660[2]);var state_21660__$1 = state_21660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21660__$1,inst_21658);
} else
{if((state_val_21661 === 4))
{var inst_21643 = (state_21660[7]);var inst_21643__$1 = (state_21660[2]);var inst_21644 = (inst_21643__$1 == null);var state_21660__$1 = (function (){var statearr_21663 = state_21660;(statearr_21663[7] = inst_21643__$1);
return statearr_21663;
})();if(cljs.core.truth_(inst_21644))
{var statearr_21664_21683 = state_21660__$1;(statearr_21664_21683[1] = 5);
} else
{var statearr_21665_21684 = state_21660__$1;(statearr_21665_21684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 5))
{var state_21660__$1 = state_21660;if(cljs.core.truth_(close_QMARK_))
{var statearr_21666_21685 = state_21660__$1;(statearr_21666_21685[1] = 8);
} else
{var statearr_21667_21686 = state_21660__$1;(statearr_21667_21686[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 6))
{var inst_21643 = (state_21660[7]);var state_21660__$1 = state_21660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21660__$1,11,to,inst_21643);
} else
{if((state_val_21661 === 7))
{var inst_21656 = (state_21660[2]);var state_21660__$1 = state_21660;var statearr_21668_21687 = state_21660__$1;(statearr_21668_21687[2] = inst_21656);
(statearr_21668_21687[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 8))
{var inst_21647 = cljs.core.async.close_BANG_.call(null,to);var state_21660__$1 = state_21660;var statearr_21669_21688 = state_21660__$1;(statearr_21669_21688[2] = inst_21647);
(statearr_21669_21688[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 9))
{var state_21660__$1 = state_21660;var statearr_21670_21689 = state_21660__$1;(statearr_21670_21689[2] = null);
(statearr_21670_21689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 10))
{var inst_21650 = (state_21660[2]);var state_21660__$1 = state_21660;var statearr_21671_21690 = state_21660__$1;(statearr_21671_21690[2] = inst_21650);
(statearr_21671_21690[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21661 === 11))
{var inst_21653 = (state_21660[2]);var state_21660__$1 = (function (){var statearr_21672 = state_21660;(statearr_21672[8] = inst_21653);
return statearr_21672;
})();var statearr_21673_21691 = state_21660__$1;(statearr_21673_21691[2] = null);
(statearr_21673_21691[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_21677 = [null,null,null,null,null,null,null,null,null];(statearr_21677[0] = state_machine__13817__auto__);
(statearr_21677[1] = 1);
return statearr_21677;
});
var state_machine__13817__auto____1 = (function (state_21660){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_21660);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e21678){if((e21678 instanceof Object))
{var ex__13820__auto__ = e21678;var statearr_21679_21692 = state_21660;(statearr_21679_21692[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21660);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21693 = state_21660;
state_21660 = G__21693;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_21660){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_21660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_21680 = f__13887__auto__.call(null);(statearr_21680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___21681);
return statearr_21680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__13886__auto___21780 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_21758){var state_val_21759 = (state_21758[1]);if((state_val_21759 === 1))
{var state_21758__$1 = state_21758;var statearr_21760_21781 = state_21758__$1;(statearr_21760_21781[2] = null);
(statearr_21760_21781[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 2))
{var state_21758__$1 = state_21758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21758__$1,4,ch);
} else
{if((state_val_21759 === 3))
{var inst_21756 = (state_21758[2]);var state_21758__$1 = state_21758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21758__$1,inst_21756);
} else
{if((state_val_21759 === 4))
{var inst_21739 = (state_21758[7]);var inst_21739__$1 = (state_21758[2]);var inst_21740 = (inst_21739__$1 == null);var state_21758__$1 = (function (){var statearr_21761 = state_21758;(statearr_21761[7] = inst_21739__$1);
return statearr_21761;
})();if(cljs.core.truth_(inst_21740))
{var statearr_21762_21782 = state_21758__$1;(statearr_21762_21782[1] = 5);
} else
{var statearr_21763_21783 = state_21758__$1;(statearr_21763_21783[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 5))
{var inst_21742 = cljs.core.async.close_BANG_.call(null,tc);var inst_21743 = cljs.core.async.close_BANG_.call(null,fc);var state_21758__$1 = (function (){var statearr_21764 = state_21758;(statearr_21764[8] = inst_21742);
return statearr_21764;
})();var statearr_21765_21784 = state_21758__$1;(statearr_21765_21784[2] = inst_21743);
(statearr_21765_21784[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 6))
{var inst_21739 = (state_21758[7]);var inst_21745 = p.call(null,inst_21739);var state_21758__$1 = state_21758;if(cljs.core.truth_(inst_21745))
{var statearr_21766_21785 = state_21758__$1;(statearr_21766_21785[1] = 9);
} else
{var statearr_21767_21786 = state_21758__$1;(statearr_21767_21786[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 7))
{var inst_21754 = (state_21758[2]);var state_21758__$1 = state_21758;var statearr_21768_21787 = state_21758__$1;(statearr_21768_21787[2] = inst_21754);
(statearr_21768_21787[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 8))
{var inst_21751 = (state_21758[2]);var state_21758__$1 = (function (){var statearr_21769 = state_21758;(statearr_21769[9] = inst_21751);
return statearr_21769;
})();var statearr_21770_21788 = state_21758__$1;(statearr_21770_21788[2] = null);
(statearr_21770_21788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 9))
{var state_21758__$1 = state_21758;var statearr_21771_21789 = state_21758__$1;(statearr_21771_21789[2] = tc);
(statearr_21771_21789[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 10))
{var state_21758__$1 = state_21758;var statearr_21772_21790 = state_21758__$1;(statearr_21772_21790[2] = fc);
(statearr_21772_21790[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21759 === 11))
{var inst_21739 = (state_21758[7]);var inst_21749 = (state_21758[2]);var state_21758__$1 = state_21758;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21758__$1,8,inst_21749,inst_21739);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_21776 = [null,null,null,null,null,null,null,null,null,null];(statearr_21776[0] = state_machine__13817__auto__);
(statearr_21776[1] = 1);
return statearr_21776;
});
var state_machine__13817__auto____1 = (function (state_21758){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_21758);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e21777){if((e21777 instanceof Object))
{var ex__13820__auto__ = e21777;var statearr_21778_21791 = state_21758;(statearr_21778_21791[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21758);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21792 = state_21758;
state_21758 = G__21792;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_21758){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_21758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_21779 = f__13887__auto__.call(null);(statearr_21779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___21780);
return statearr_21779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_21839){var state_val_21840 = (state_21839[1]);if((state_val_21840 === 7))
{var inst_21835 = (state_21839[2]);var state_21839__$1 = state_21839;var statearr_21841_21857 = state_21839__$1;(statearr_21841_21857[2] = inst_21835);
(statearr_21841_21857[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21840 === 6))
{var inst_21825 = (state_21839[7]);var inst_21828 = (state_21839[8]);var inst_21832 = f.call(null,inst_21825,inst_21828);var inst_21825__$1 = inst_21832;var state_21839__$1 = (function (){var statearr_21842 = state_21839;(statearr_21842[7] = inst_21825__$1);
return statearr_21842;
})();var statearr_21843_21858 = state_21839__$1;(statearr_21843_21858[2] = null);
(statearr_21843_21858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21840 === 5))
{var inst_21825 = (state_21839[7]);var state_21839__$1 = state_21839;var statearr_21844_21859 = state_21839__$1;(statearr_21844_21859[2] = inst_21825);
(statearr_21844_21859[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21840 === 4))
{var inst_21828 = (state_21839[8]);var inst_21828__$1 = (state_21839[2]);var inst_21829 = (inst_21828__$1 == null);var state_21839__$1 = (function (){var statearr_21845 = state_21839;(statearr_21845[8] = inst_21828__$1);
return statearr_21845;
})();if(cljs.core.truth_(inst_21829))
{var statearr_21846_21860 = state_21839__$1;(statearr_21846_21860[1] = 5);
} else
{var statearr_21847_21861 = state_21839__$1;(statearr_21847_21861[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21840 === 3))
{var inst_21837 = (state_21839[2]);var state_21839__$1 = state_21839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21839__$1,inst_21837);
} else
{if((state_val_21840 === 2))
{var state_21839__$1 = state_21839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21839__$1,4,ch);
} else
{if((state_val_21840 === 1))
{var inst_21825 = init;var state_21839__$1 = (function (){var statearr_21848 = state_21839;(statearr_21848[7] = inst_21825);
return statearr_21848;
})();var statearr_21849_21862 = state_21839__$1;(statearr_21849_21862[2] = null);
(statearr_21849_21862[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_21853 = [null,null,null,null,null,null,null,null,null];(statearr_21853[0] = state_machine__13817__auto__);
(statearr_21853[1] = 1);
return statearr_21853;
});
var state_machine__13817__auto____1 = (function (state_21839){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_21839);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e21854){if((e21854 instanceof Object))
{var ex__13820__auto__ = e21854;var statearr_21855_21863 = state_21839;(statearr_21855_21863[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21839);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21864 = state_21839;
state_21839 = G__21864;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_21839){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_21839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_21856 = f__13887__auto__.call(null);(statearr_21856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_21856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13886__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_21926){var state_val_21927 = (state_21926[1]);if((state_val_21927 === 1))
{var inst_21906 = cljs.core.seq.call(null,coll);var inst_21907 = inst_21906;var state_21926__$1 = (function (){var statearr_21928 = state_21926;(statearr_21928[7] = inst_21907);
return statearr_21928;
})();var statearr_21929_21947 = state_21926__$1;(statearr_21929_21947[2] = null);
(statearr_21929_21947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 2))
{var inst_21907 = (state_21926[7]);var state_21926__$1 = state_21926;if(cljs.core.truth_(inst_21907))
{var statearr_21930_21948 = state_21926__$1;(statearr_21930_21948[1] = 4);
} else
{var statearr_21931_21949 = state_21926__$1;(statearr_21931_21949[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 3))
{var inst_21924 = (state_21926[2]);var state_21926__$1 = state_21926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21926__$1,inst_21924);
} else
{if((state_val_21927 === 4))
{var inst_21907 = (state_21926[7]);var inst_21910 = cljs.core.first.call(null,inst_21907);var state_21926__$1 = state_21926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21926__$1,7,ch,inst_21910);
} else
{if((state_val_21927 === 5))
{var state_21926__$1 = state_21926;if(cljs.core.truth_(close_QMARK_))
{var statearr_21932_21950 = state_21926__$1;(statearr_21932_21950[1] = 8);
} else
{var statearr_21933_21951 = state_21926__$1;(statearr_21933_21951[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 6))
{var inst_21922 = (state_21926[2]);var state_21926__$1 = state_21926;var statearr_21934_21952 = state_21926__$1;(statearr_21934_21952[2] = inst_21922);
(statearr_21934_21952[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 7))
{var inst_21907 = (state_21926[7]);var inst_21912 = (state_21926[2]);var inst_21913 = cljs.core.next.call(null,inst_21907);var inst_21907__$1 = inst_21913;var state_21926__$1 = (function (){var statearr_21935 = state_21926;(statearr_21935[8] = inst_21912);
(statearr_21935[7] = inst_21907__$1);
return statearr_21935;
})();var statearr_21936_21953 = state_21926__$1;(statearr_21936_21953[2] = null);
(statearr_21936_21953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 8))
{var inst_21917 = cljs.core.async.close_BANG_.call(null,ch);var state_21926__$1 = state_21926;var statearr_21937_21954 = state_21926__$1;(statearr_21937_21954[2] = inst_21917);
(statearr_21937_21954[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 9))
{var state_21926__$1 = state_21926;var statearr_21938_21955 = state_21926__$1;(statearr_21938_21955[2] = null);
(statearr_21938_21955[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21927 === 10))
{var inst_21920 = (state_21926[2]);var state_21926__$1 = state_21926;var statearr_21939_21956 = state_21926__$1;(statearr_21939_21956[2] = inst_21920);
(statearr_21939_21956[1] = 6);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_21943 = [null,null,null,null,null,null,null,null,null];(statearr_21943[0] = state_machine__13817__auto__);
(statearr_21943[1] = 1);
return statearr_21943;
});
var state_machine__13817__auto____1 = (function (state_21926){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_21926);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e21944){if((e21944 instanceof Object))
{var ex__13820__auto__ = e21944;var statearr_21945_21957 = state_21926;(statearr_21945_21957[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21958 = state_21926;
state_21926 = G__21958;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_21926){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_21926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_21946 = f__13887__auto__.call(null);(statearr_21946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto__);
return statearr_21946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
}));
return c__13886__auto__;
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
cljs.core.async.Mux = (function (){var obj21960 = {};return obj21960;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10250__auto__ = _;if(and__10250__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10250__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10889__auto__ = (((_ == null))?null:_);return (function (){var or__10262__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj21962 = {};return obj21962;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t22186 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22186 = (function (cs,ch,mult,meta22187){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta22187 = meta22187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22186.cljs$lang$type = true;
cljs.core.async.t22186.cljs$lang$ctorStr = "cljs.core.async/t22186";
cljs.core.async.t22186.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t22186");
});})(cs))
;
cljs.core.async.t22186.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t22186.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t22186.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t22186.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t22186.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22186.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t22186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22188){var self__ = this;
var _22188__$1 = this;return self__.meta22187;
});})(cs))
;
cljs.core.async.t22186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22188,meta22187__$1){var self__ = this;
var _22188__$1 = this;return (new cljs.core.async.t22186(self__.cs,self__.ch,self__.mult,meta22187__$1));
});})(cs))
;
cljs.core.async.__GT_t22186 = ((function (cs){
return (function __GT_t22186(cs__$1,ch__$1,mult__$1,meta22187){return (new cljs.core.async.t22186(cs__$1,ch__$1,mult__$1,meta22187));
});})(cs))
;
}
return (new cljs.core.async.t22186(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13886__auto___22409 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_22323){var state_val_22324 = (state_22323[1]);if((state_val_22324 === 32))
{var inst_22267 = (state_22323[7]);var inst_22191 = (state_22323[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22323,31,Object,null,30);var inst_22274 = cljs.core.async.put_BANG_.call(null,inst_22267,inst_22191,done);var state_22323__$1 = state_22323;var statearr_22325_22410 = state_22323__$1;(statearr_22325_22410[2] = inst_22274);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 1))
{var state_22323__$1 = state_22323;var statearr_22326_22411 = state_22323__$1;(statearr_22326_22411[2] = null);
(statearr_22326_22411[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 33))
{var inst_22280 = (state_22323[9]);var inst_22282 = cljs.core.chunked_seq_QMARK_.call(null,inst_22280);var state_22323__$1 = state_22323;if(inst_22282)
{var statearr_22327_22412 = state_22323__$1;(statearr_22327_22412[1] = 36);
} else
{var statearr_22328_22413 = state_22323__$1;(statearr_22328_22413[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 2))
{var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22323__$1,4,ch);
} else
{if((state_val_22324 === 34))
{var state_22323__$1 = state_22323;var statearr_22329_22414 = state_22323__$1;(statearr_22329_22414[2] = null);
(statearr_22329_22414[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 3))
{var inst_22321 = (state_22323[2]);var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22323__$1,inst_22321);
} else
{if((state_val_22324 === 35))
{var inst_22305 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22330_22415 = state_22323__$1;(statearr_22330_22415[2] = inst_22305);
(statearr_22330_22415[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 4))
{var inst_22191 = (state_22323[8]);var inst_22191__$1 = (state_22323[2]);var inst_22192 = (inst_22191__$1 == null);var state_22323__$1 = (function (){var statearr_22331 = state_22323;(statearr_22331[8] = inst_22191__$1);
return statearr_22331;
})();if(cljs.core.truth_(inst_22192))
{var statearr_22332_22416 = state_22323__$1;(statearr_22332_22416[1] = 5);
} else
{var statearr_22333_22417 = state_22323__$1;(statearr_22333_22417[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 36))
{var inst_22280 = (state_22323[9]);var inst_22284 = cljs.core.chunk_first.call(null,inst_22280);var inst_22285 = cljs.core.chunk_rest.call(null,inst_22280);var inst_22286 = cljs.core.count.call(null,inst_22284);var inst_22259 = inst_22285;var inst_22260 = inst_22284;var inst_22261 = inst_22286;var inst_22262 = 0;var state_22323__$1 = (function (){var statearr_22334 = state_22323;(statearr_22334[10] = inst_22261);
(statearr_22334[11] = inst_22262);
(statearr_22334[12] = inst_22260);
(statearr_22334[13] = inst_22259);
return statearr_22334;
})();var statearr_22335_22418 = state_22323__$1;(statearr_22335_22418[2] = null);
(statearr_22335_22418[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 5))
{var inst_22198 = cljs.core.deref.call(null,cs);var inst_22199 = cljs.core.seq.call(null,inst_22198);var inst_22200 = inst_22199;var inst_22201 = null;var inst_22202 = 0;var inst_22203 = 0;var state_22323__$1 = (function (){var statearr_22336 = state_22323;(statearr_22336[14] = inst_22203);
(statearr_22336[15] = inst_22202);
(statearr_22336[16] = inst_22201);
(statearr_22336[17] = inst_22200);
return statearr_22336;
})();var statearr_22337_22419 = state_22323__$1;(statearr_22337_22419[2] = null);
(statearr_22337_22419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 37))
{var inst_22280 = (state_22323[9]);var inst_22289 = cljs.core.first.call(null,inst_22280);var state_22323__$1 = (function (){var statearr_22338 = state_22323;(statearr_22338[18] = inst_22289);
return statearr_22338;
})();var statearr_22339_22420 = state_22323__$1;(statearr_22339_22420[2] = null);
(statearr_22339_22420[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 6))
{var inst_22251 = (state_22323[19]);var inst_22250 = cljs.core.deref.call(null,cs);var inst_22251__$1 = cljs.core.keys.call(null,inst_22250);var inst_22252 = cljs.core.count.call(null,inst_22251__$1);var inst_22253 = cljs.core.reset_BANG_.call(null,dctr,inst_22252);var inst_22258 = cljs.core.seq.call(null,inst_22251__$1);var inst_22259 = inst_22258;var inst_22260 = null;var inst_22261 = 0;var inst_22262 = 0;var state_22323__$1 = (function (){var statearr_22340 = state_22323;(statearr_22340[10] = inst_22261);
(statearr_22340[11] = inst_22262);
(statearr_22340[12] = inst_22260);
(statearr_22340[13] = inst_22259);
(statearr_22340[20] = inst_22253);
(statearr_22340[19] = inst_22251__$1);
return statearr_22340;
})();var statearr_22341_22421 = state_22323__$1;(statearr_22341_22421[2] = null);
(statearr_22341_22421[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 38))
{var inst_22302 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22342_22422 = state_22323__$1;(statearr_22342_22422[2] = inst_22302);
(statearr_22342_22422[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 7))
{var inst_22319 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22343_22423 = state_22323__$1;(statearr_22343_22423[2] = inst_22319);
(statearr_22343_22423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 39))
{var inst_22280 = (state_22323[9]);var inst_22298 = (state_22323[2]);var inst_22299 = cljs.core.next.call(null,inst_22280);var inst_22259 = inst_22299;var inst_22260 = null;var inst_22261 = 0;var inst_22262 = 0;var state_22323__$1 = (function (){var statearr_22344 = state_22323;(statearr_22344[10] = inst_22261);
(statearr_22344[11] = inst_22262);
(statearr_22344[12] = inst_22260);
(statearr_22344[13] = inst_22259);
(statearr_22344[21] = inst_22298);
return statearr_22344;
})();var statearr_22345_22424 = state_22323__$1;(statearr_22345_22424[2] = null);
(statearr_22345_22424[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 8))
{var inst_22203 = (state_22323[14]);var inst_22202 = (state_22323[15]);var inst_22205 = (inst_22203 < inst_22202);var inst_22206 = inst_22205;var state_22323__$1 = state_22323;if(cljs.core.truth_(inst_22206))
{var statearr_22346_22425 = state_22323__$1;(statearr_22346_22425[1] = 10);
} else
{var statearr_22347_22426 = state_22323__$1;(statearr_22347_22426[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 40))
{var inst_22289 = (state_22323[18]);var inst_22290 = (state_22323[2]);var inst_22291 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22292 = cljs.core.async.untap_STAR_.call(null,m,inst_22289);var state_22323__$1 = (function (){var statearr_22348 = state_22323;(statearr_22348[22] = inst_22291);
(statearr_22348[23] = inst_22290);
return statearr_22348;
})();var statearr_22349_22427 = state_22323__$1;(statearr_22349_22427[2] = inst_22292);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 9))
{var inst_22248 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22350_22428 = state_22323__$1;(statearr_22350_22428[2] = inst_22248);
(statearr_22350_22428[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 41))
{var inst_22191 = (state_22323[8]);var inst_22289 = (state_22323[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22323,40,Object,null,39);var inst_22296 = cljs.core.async.put_BANG_.call(null,inst_22289,inst_22191,done);var state_22323__$1 = state_22323;var statearr_22351_22429 = state_22323__$1;(statearr_22351_22429[2] = inst_22296);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 10))
{var inst_22203 = (state_22323[14]);var inst_22201 = (state_22323[16]);var inst_22209 = cljs.core._nth.call(null,inst_22201,inst_22203);var inst_22210 = cljs.core.nth.call(null,inst_22209,0,null);var inst_22211 = cljs.core.nth.call(null,inst_22209,1,null);var state_22323__$1 = (function (){var statearr_22352 = state_22323;(statearr_22352[24] = inst_22210);
return statearr_22352;
})();if(cljs.core.truth_(inst_22211))
{var statearr_22353_22430 = state_22323__$1;(statearr_22353_22430[1] = 13);
} else
{var statearr_22354_22431 = state_22323__$1;(statearr_22354_22431[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 42))
{var state_22323__$1 = state_22323;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22323__$1,45,dchan);
} else
{if((state_val_22324 === 11))
{var inst_22220 = (state_22323[25]);var inst_22200 = (state_22323[17]);var inst_22220__$1 = cljs.core.seq.call(null,inst_22200);var state_22323__$1 = (function (){var statearr_22355 = state_22323;(statearr_22355[25] = inst_22220__$1);
return statearr_22355;
})();if(inst_22220__$1)
{var statearr_22356_22432 = state_22323__$1;(statearr_22356_22432[1] = 16);
} else
{var statearr_22357_22433 = state_22323__$1;(statearr_22357_22433[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 43))
{var state_22323__$1 = state_22323;var statearr_22358_22434 = state_22323__$1;(statearr_22358_22434[2] = null);
(statearr_22358_22434[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 12))
{var inst_22246 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22359_22435 = state_22323__$1;(statearr_22359_22435[2] = inst_22246);
(statearr_22359_22435[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 44))
{var inst_22316 = (state_22323[2]);var state_22323__$1 = (function (){var statearr_22360 = state_22323;(statearr_22360[26] = inst_22316);
return statearr_22360;
})();var statearr_22361_22436 = state_22323__$1;(statearr_22361_22436[2] = null);
(statearr_22361_22436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 13))
{var inst_22210 = (state_22323[24]);var inst_22213 = cljs.core.async.close_BANG_.call(null,inst_22210);var state_22323__$1 = state_22323;var statearr_22362_22437 = state_22323__$1;(statearr_22362_22437[2] = inst_22213);
(statearr_22362_22437[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 45))
{var inst_22313 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22366_22438 = state_22323__$1;(statearr_22366_22438[2] = inst_22313);
(statearr_22366_22438[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 14))
{var state_22323__$1 = state_22323;var statearr_22367_22439 = state_22323__$1;(statearr_22367_22439[2] = null);
(statearr_22367_22439[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 15))
{var inst_22203 = (state_22323[14]);var inst_22202 = (state_22323[15]);var inst_22201 = (state_22323[16]);var inst_22200 = (state_22323[17]);var inst_22216 = (state_22323[2]);var inst_22217 = (inst_22203 + 1);var tmp22363 = inst_22202;var tmp22364 = inst_22201;var tmp22365 = inst_22200;var inst_22200__$1 = tmp22365;var inst_22201__$1 = tmp22364;var inst_22202__$1 = tmp22363;var inst_22203__$1 = inst_22217;var state_22323__$1 = (function (){var statearr_22368 = state_22323;(statearr_22368[27] = inst_22216);
(statearr_22368[14] = inst_22203__$1);
(statearr_22368[15] = inst_22202__$1);
(statearr_22368[16] = inst_22201__$1);
(statearr_22368[17] = inst_22200__$1);
return statearr_22368;
})();var statearr_22369_22440 = state_22323__$1;(statearr_22369_22440[2] = null);
(statearr_22369_22440[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 16))
{var inst_22220 = (state_22323[25]);var inst_22222 = cljs.core.chunked_seq_QMARK_.call(null,inst_22220);var state_22323__$1 = state_22323;if(inst_22222)
{var statearr_22370_22441 = state_22323__$1;(statearr_22370_22441[1] = 19);
} else
{var statearr_22371_22442 = state_22323__$1;(statearr_22371_22442[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 17))
{var state_22323__$1 = state_22323;var statearr_22372_22443 = state_22323__$1;(statearr_22372_22443[2] = null);
(statearr_22372_22443[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 18))
{var inst_22244 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22373_22444 = state_22323__$1;(statearr_22373_22444[2] = inst_22244);
(statearr_22373_22444[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 19))
{var inst_22220 = (state_22323[25]);var inst_22224 = cljs.core.chunk_first.call(null,inst_22220);var inst_22225 = cljs.core.chunk_rest.call(null,inst_22220);var inst_22226 = cljs.core.count.call(null,inst_22224);var inst_22200 = inst_22225;var inst_22201 = inst_22224;var inst_22202 = inst_22226;var inst_22203 = 0;var state_22323__$1 = (function (){var statearr_22374 = state_22323;(statearr_22374[14] = inst_22203);
(statearr_22374[15] = inst_22202);
(statearr_22374[16] = inst_22201);
(statearr_22374[17] = inst_22200);
return statearr_22374;
})();var statearr_22375_22445 = state_22323__$1;(statearr_22375_22445[2] = null);
(statearr_22375_22445[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 20))
{var inst_22220 = (state_22323[25]);var inst_22230 = cljs.core.first.call(null,inst_22220);var inst_22231 = cljs.core.nth.call(null,inst_22230,0,null);var inst_22232 = cljs.core.nth.call(null,inst_22230,1,null);var state_22323__$1 = (function (){var statearr_22376 = state_22323;(statearr_22376[28] = inst_22231);
return statearr_22376;
})();if(cljs.core.truth_(inst_22232))
{var statearr_22377_22446 = state_22323__$1;(statearr_22377_22446[1] = 22);
} else
{var statearr_22378_22447 = state_22323__$1;(statearr_22378_22447[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 21))
{var inst_22241 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22379_22448 = state_22323__$1;(statearr_22379_22448[2] = inst_22241);
(statearr_22379_22448[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 22))
{var inst_22231 = (state_22323[28]);var inst_22234 = cljs.core.async.close_BANG_.call(null,inst_22231);var state_22323__$1 = state_22323;var statearr_22380_22449 = state_22323__$1;(statearr_22380_22449[2] = inst_22234);
(statearr_22380_22449[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 23))
{var state_22323__$1 = state_22323;var statearr_22381_22450 = state_22323__$1;(statearr_22381_22450[2] = null);
(statearr_22381_22450[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 24))
{var inst_22220 = (state_22323[25]);var inst_22237 = (state_22323[2]);var inst_22238 = cljs.core.next.call(null,inst_22220);var inst_22200 = inst_22238;var inst_22201 = null;var inst_22202 = 0;var inst_22203 = 0;var state_22323__$1 = (function (){var statearr_22382 = state_22323;(statearr_22382[14] = inst_22203);
(statearr_22382[15] = inst_22202);
(statearr_22382[16] = inst_22201);
(statearr_22382[29] = inst_22237);
(statearr_22382[17] = inst_22200);
return statearr_22382;
})();var statearr_22383_22451 = state_22323__$1;(statearr_22383_22451[2] = null);
(statearr_22383_22451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 25))
{var inst_22261 = (state_22323[10]);var inst_22262 = (state_22323[11]);var inst_22264 = (inst_22262 < inst_22261);var inst_22265 = inst_22264;var state_22323__$1 = state_22323;if(cljs.core.truth_(inst_22265))
{var statearr_22384_22452 = state_22323__$1;(statearr_22384_22452[1] = 27);
} else
{var statearr_22385_22453 = state_22323__$1;(statearr_22385_22453[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 26))
{var inst_22251 = (state_22323[19]);var inst_22309 = (state_22323[2]);var inst_22310 = cljs.core.seq.call(null,inst_22251);var state_22323__$1 = (function (){var statearr_22386 = state_22323;(statearr_22386[30] = inst_22309);
return statearr_22386;
})();if(inst_22310)
{var statearr_22387_22454 = state_22323__$1;(statearr_22387_22454[1] = 42);
} else
{var statearr_22388_22455 = state_22323__$1;(statearr_22388_22455[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 27))
{var inst_22262 = (state_22323[11]);var inst_22260 = (state_22323[12]);var inst_22267 = cljs.core._nth.call(null,inst_22260,inst_22262);var state_22323__$1 = (function (){var statearr_22389 = state_22323;(statearr_22389[7] = inst_22267);
return statearr_22389;
})();var statearr_22390_22456 = state_22323__$1;(statearr_22390_22456[2] = null);
(statearr_22390_22456[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 28))
{var inst_22259 = (state_22323[13]);var inst_22280 = (state_22323[9]);var inst_22280__$1 = cljs.core.seq.call(null,inst_22259);var state_22323__$1 = (function (){var statearr_22394 = state_22323;(statearr_22394[9] = inst_22280__$1);
return statearr_22394;
})();if(inst_22280__$1)
{var statearr_22395_22457 = state_22323__$1;(statearr_22395_22457[1] = 33);
} else
{var statearr_22396_22458 = state_22323__$1;(statearr_22396_22458[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 29))
{var inst_22307 = (state_22323[2]);var state_22323__$1 = state_22323;var statearr_22397_22459 = state_22323__$1;(statearr_22397_22459[2] = inst_22307);
(statearr_22397_22459[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 30))
{var inst_22261 = (state_22323[10]);var inst_22262 = (state_22323[11]);var inst_22260 = (state_22323[12]);var inst_22259 = (state_22323[13]);var inst_22276 = (state_22323[2]);var inst_22277 = (inst_22262 + 1);var tmp22391 = inst_22261;var tmp22392 = inst_22260;var tmp22393 = inst_22259;var inst_22259__$1 = tmp22393;var inst_22260__$1 = tmp22392;var inst_22261__$1 = tmp22391;var inst_22262__$1 = inst_22277;var state_22323__$1 = (function (){var statearr_22398 = state_22323;(statearr_22398[10] = inst_22261__$1);
(statearr_22398[11] = inst_22262__$1);
(statearr_22398[12] = inst_22260__$1);
(statearr_22398[31] = inst_22276);
(statearr_22398[13] = inst_22259__$1);
return statearr_22398;
})();var statearr_22399_22460 = state_22323__$1;(statearr_22399_22460[2] = null);
(statearr_22399_22460[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22324 === 31))
{var inst_22267 = (state_22323[7]);var inst_22268 = (state_22323[2]);var inst_22269 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_22270 = cljs.core.async.untap_STAR_.call(null,m,inst_22267);var state_22323__$1 = (function (){var statearr_22400 = state_22323;(statearr_22400[32] = inst_22269);
(statearr_22400[33] = inst_22268);
return statearr_22400;
})();var statearr_22401_22461 = state_22323__$1;(statearr_22401_22461[2] = inst_22270);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323__$1);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_22405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22405[0] = state_machine__13817__auto__);
(statearr_22405[1] = 1);
return statearr_22405;
});
var state_machine__13817__auto____1 = (function (state_22323){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_22323);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e22406){if((e22406 instanceof Object))
{var ex__13820__auto__ = e22406;var statearr_22407_22462 = state_22323;(statearr_22407_22462[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22406;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22463 = state_22323;
state_22323 = G__22463;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_22323){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_22323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_22408 = f__13887__auto__.call(null);(statearr_22408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___22409);
return statearr_22408;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
cljs.core.async.Mix = (function (){var obj22465 = {};return obj22465;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10250__auto__ = m;if(and__10250__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10250__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10889__auto__ = (((m == null))?null:m);return (function (){var or__10262__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t22575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22575 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta22576){
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
this.meta22576 = meta22576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22575.cljs$lang$type = true;
cljs.core.async.t22575.cljs$lang$ctorStr = "cljs.core.async/t22575";
cljs.core.async.t22575.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t22575");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t22575.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22577){var self__ = this;
var _22577__$1 = this;return self__.meta22576;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t22575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22577,meta22576__$1){var self__ = this;
var _22577__$1 = this;return (new cljs.core.async.t22575(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta22576__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t22575 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t22575(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22576){return (new cljs.core.async.t22575(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta22576));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t22575(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13886__auto___22684 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_22642){var state_val_22643 = (state_22642[1]);if((state_val_22643 === 1))
{var inst_22581 = (state_22642[7]);var inst_22581__$1 = calc_state.call(null);var inst_22582 = cljs.core.seq_QMARK_.call(null,inst_22581__$1);var state_22642__$1 = (function (){var statearr_22644 = state_22642;(statearr_22644[7] = inst_22581__$1);
return statearr_22644;
})();if(inst_22582)
{var statearr_22645_22685 = state_22642__$1;(statearr_22645_22685[1] = 2);
} else
{var statearr_22646_22686 = state_22642__$1;(statearr_22646_22686[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 2))
{var inst_22581 = (state_22642[7]);var inst_22584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22581);var state_22642__$1 = state_22642;var statearr_22647_22687 = state_22642__$1;(statearr_22647_22687[2] = inst_22584);
(statearr_22647_22687[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 3))
{var inst_22581 = (state_22642[7]);var state_22642__$1 = state_22642;var statearr_22648_22688 = state_22642__$1;(statearr_22648_22688[2] = inst_22581);
(statearr_22648_22688[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 4))
{var inst_22581 = (state_22642[7]);var inst_22587 = (state_22642[2]);var inst_22588 = cljs.core.get.call(null,inst_22587,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22589 = cljs.core.get.call(null,inst_22587,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22590 = cljs.core.get.call(null,inst_22587,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_22591 = inst_22581;var state_22642__$1 = (function (){var statearr_22649 = state_22642;(statearr_22649[8] = inst_22588);
(statearr_22649[9] = inst_22589);
(statearr_22649[10] = inst_22591);
(statearr_22649[11] = inst_22590);
return statearr_22649;
})();var statearr_22650_22689 = state_22642__$1;(statearr_22650_22689[2] = null);
(statearr_22650_22689[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 5))
{var inst_22591 = (state_22642[10]);var inst_22594 = cljs.core.seq_QMARK_.call(null,inst_22591);var state_22642__$1 = state_22642;if(inst_22594)
{var statearr_22651_22690 = state_22642__$1;(statearr_22651_22690[1] = 7);
} else
{var statearr_22652_22691 = state_22642__$1;(statearr_22652_22691[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 6))
{var inst_22640 = (state_22642[2]);var state_22642__$1 = state_22642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22642__$1,inst_22640);
} else
{if((state_val_22643 === 7))
{var inst_22591 = (state_22642[10]);var inst_22596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22591);var state_22642__$1 = state_22642;var statearr_22653_22692 = state_22642__$1;(statearr_22653_22692[2] = inst_22596);
(statearr_22653_22692[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 8))
{var inst_22591 = (state_22642[10]);var state_22642__$1 = state_22642;var statearr_22654_22693 = state_22642__$1;(statearr_22654_22693[2] = inst_22591);
(statearr_22654_22693[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 9))
{var inst_22599 = (state_22642[12]);var inst_22599__$1 = (state_22642[2]);var inst_22600 = cljs.core.get.call(null,inst_22599__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_22601 = cljs.core.get.call(null,inst_22599__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_22602 = cljs.core.get.call(null,inst_22599__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_22642__$1 = (function (){var statearr_22655 = state_22642;(statearr_22655[13] = inst_22601);
(statearr_22655[14] = inst_22602);
(statearr_22655[12] = inst_22599__$1);
return statearr_22655;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22642__$1,10,inst_22600);
} else
{if((state_val_22643 === 10))
{var inst_22606 = (state_22642[15]);var inst_22607 = (state_22642[16]);var inst_22605 = (state_22642[2]);var inst_22606__$1 = cljs.core.nth.call(null,inst_22605,0,null);var inst_22607__$1 = cljs.core.nth.call(null,inst_22605,1,null);var inst_22608 = (inst_22606__$1 == null);var inst_22609 = cljs.core._EQ_.call(null,inst_22607__$1,change);var inst_22610 = (inst_22608) || (inst_22609);var state_22642__$1 = (function (){var statearr_22656 = state_22642;(statearr_22656[15] = inst_22606__$1);
(statearr_22656[16] = inst_22607__$1);
return statearr_22656;
})();if(cljs.core.truth_(inst_22610))
{var statearr_22657_22694 = state_22642__$1;(statearr_22657_22694[1] = 11);
} else
{var statearr_22658_22695 = state_22642__$1;(statearr_22658_22695[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 11))
{var inst_22606 = (state_22642[15]);var inst_22612 = (inst_22606 == null);var state_22642__$1 = state_22642;if(cljs.core.truth_(inst_22612))
{var statearr_22659_22696 = state_22642__$1;(statearr_22659_22696[1] = 14);
} else
{var statearr_22660_22697 = state_22642__$1;(statearr_22660_22697[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 12))
{var inst_22621 = (state_22642[17]);var inst_22607 = (state_22642[16]);var inst_22602 = (state_22642[14]);var inst_22621__$1 = inst_22602.call(null,inst_22607);var state_22642__$1 = (function (){var statearr_22661 = state_22642;(statearr_22661[17] = inst_22621__$1);
return statearr_22661;
})();if(cljs.core.truth_(inst_22621__$1))
{var statearr_22662_22698 = state_22642__$1;(statearr_22662_22698[1] = 17);
} else
{var statearr_22663_22699 = state_22642__$1;(statearr_22663_22699[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 13))
{var inst_22638 = (state_22642[2]);var state_22642__$1 = state_22642;var statearr_22664_22700 = state_22642__$1;(statearr_22664_22700[2] = inst_22638);
(statearr_22664_22700[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 14))
{var inst_22607 = (state_22642[16]);var inst_22614 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22607);var state_22642__$1 = state_22642;var statearr_22665_22701 = state_22642__$1;(statearr_22665_22701[2] = inst_22614);
(statearr_22665_22701[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 15))
{var state_22642__$1 = state_22642;var statearr_22666_22702 = state_22642__$1;(statearr_22666_22702[2] = null);
(statearr_22666_22702[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 16))
{var inst_22617 = (state_22642[2]);var inst_22618 = calc_state.call(null);var inst_22591 = inst_22618;var state_22642__$1 = (function (){var statearr_22667 = state_22642;(statearr_22667[10] = inst_22591);
(statearr_22667[18] = inst_22617);
return statearr_22667;
})();var statearr_22668_22703 = state_22642__$1;(statearr_22668_22703[2] = null);
(statearr_22668_22703[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 17))
{var inst_22621 = (state_22642[17]);var state_22642__$1 = state_22642;var statearr_22669_22704 = state_22642__$1;(statearr_22669_22704[2] = inst_22621);
(statearr_22669_22704[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 18))
{var inst_22607 = (state_22642[16]);var inst_22601 = (state_22642[13]);var inst_22602 = (state_22642[14]);var inst_22624 = cljs.core.empty_QMARK_.call(null,inst_22602);var inst_22625 = inst_22601.call(null,inst_22607);var inst_22626 = cljs.core.not.call(null,inst_22625);var inst_22627 = (inst_22624) && (inst_22626);var state_22642__$1 = state_22642;var statearr_22670_22705 = state_22642__$1;(statearr_22670_22705[2] = inst_22627);
(statearr_22670_22705[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 19))
{var inst_22629 = (state_22642[2]);var state_22642__$1 = state_22642;if(cljs.core.truth_(inst_22629))
{var statearr_22671_22706 = state_22642__$1;(statearr_22671_22706[1] = 20);
} else
{var statearr_22672_22707 = state_22642__$1;(statearr_22672_22707[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 20))
{var inst_22606 = (state_22642[15]);var state_22642__$1 = state_22642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22642__$1,23,out,inst_22606);
} else
{if((state_val_22643 === 21))
{var state_22642__$1 = state_22642;var statearr_22673_22708 = state_22642__$1;(statearr_22673_22708[2] = null);
(statearr_22673_22708[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 22))
{var inst_22599 = (state_22642[12]);var inst_22635 = (state_22642[2]);var inst_22591 = inst_22599;var state_22642__$1 = (function (){var statearr_22674 = state_22642;(statearr_22674[10] = inst_22591);
(statearr_22674[19] = inst_22635);
return statearr_22674;
})();var statearr_22675_22709 = state_22642__$1;(statearr_22675_22709[2] = null);
(statearr_22675_22709[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22643 === 23))
{var inst_22632 = (state_22642[2]);var state_22642__$1 = state_22642;var statearr_22676_22710 = state_22642__$1;(statearr_22676_22710[2] = inst_22632);
(statearr_22676_22710[1] = 22);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_22680 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22680[0] = state_machine__13817__auto__);
(statearr_22680[1] = 1);
return statearr_22680;
});
var state_machine__13817__auto____1 = (function (state_22642){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_22642);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e22681){if((e22681 instanceof Object))
{var ex__13820__auto__ = e22681;var statearr_22682_22711 = state_22642;(statearr_22682_22711[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22681;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22712 = state_22642;
state_22642 = G__22712;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_22642){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_22642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_22683 = f__13887__auto__.call(null);(statearr_22683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___22684);
return statearr_22683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
cljs.core.async.Pub = (function (){var obj22714 = {};return obj22714;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10250__auto__ = p;if(and__10250__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10250__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10889__auto__ = (((p == null))?null:p);return (function (){var or__10262__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10250__auto__ = p;if(and__10250__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10250__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10889__auto__ = (((p == null))?null:p);return (function (){var or__10262__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10250__auto__ = p;if(and__10250__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10250__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10889__auto__ = (((p == null))?null:p);return (function (){var or__10262__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10250__auto__ = p;if(and__10250__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10250__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10889__auto__ = (((p == null))?null:p);return (function (){var or__10262__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10889__auto__)]);if(or__10262__auto__)
{return or__10262__auto__;
} else
{var or__10262__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10262__auto____$1)
{return or__10262__auto____$1;
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
return (function (topic){var or__10262__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10262__auto__))
{return or__10262__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10262__auto__,mults){
return (function (p1__22715_SHARP_){if(cljs.core.truth_(p1__22715_SHARP_.call(null,topic)))
{return p1__22715_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__22715_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10262__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t22840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22840 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22841){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22841 = meta22841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22840.cljs$lang$type = true;
cljs.core.async.t22840.cljs$lang$ctorStr = "cljs.core.async/t22840";
cljs.core.async.t22840.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10829__auto__,writer__10830__auto__,opt__10831__auto__){return cljs.core._write.call(null,writer__10830__auto__,"cljs.core.async/t22840");
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t22840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22842){var self__ = this;
var _22842__$1 = this;return self__.meta22841;
});})(mults,ensure_mult))
;
cljs.core.async.t22840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22842,meta22841__$1){var self__ = this;
var _22842__$1 = this;return (new cljs.core.async.t22840(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22841__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t22840 = ((function (mults,ensure_mult){
return (function __GT_t22840(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22841){return (new cljs.core.async.t22840(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22841));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t22840(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13886__auto___22964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_22916){var state_val_22917 = (state_22916[1]);if((state_val_22917 === 1))
{var state_22916__$1 = state_22916;var statearr_22918_22965 = state_22916__$1;(statearr_22918_22965[2] = null);
(statearr_22918_22965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 2))
{var state_22916__$1 = state_22916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22916__$1,4,ch);
} else
{if((state_val_22917 === 3))
{var inst_22914 = (state_22916[2]);var state_22916__$1 = state_22916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22916__$1,inst_22914);
} else
{if((state_val_22917 === 4))
{var inst_22845 = (state_22916[7]);var inst_22845__$1 = (state_22916[2]);var inst_22846 = (inst_22845__$1 == null);var state_22916__$1 = (function (){var statearr_22919 = state_22916;(statearr_22919[7] = inst_22845__$1);
return statearr_22919;
})();if(cljs.core.truth_(inst_22846))
{var statearr_22920_22966 = state_22916__$1;(statearr_22920_22966[1] = 5);
} else
{var statearr_22921_22967 = state_22916__$1;(statearr_22921_22967[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 5))
{var inst_22852 = cljs.core.deref.call(null,mults);var inst_22853 = cljs.core.vals.call(null,inst_22852);var inst_22854 = cljs.core.seq.call(null,inst_22853);var inst_22855 = inst_22854;var inst_22856 = null;var inst_22857 = 0;var inst_22858 = 0;var state_22916__$1 = (function (){var statearr_22922 = state_22916;(statearr_22922[8] = inst_22855);
(statearr_22922[9] = inst_22857);
(statearr_22922[10] = inst_22856);
(statearr_22922[11] = inst_22858);
return statearr_22922;
})();var statearr_22923_22968 = state_22916__$1;(statearr_22923_22968[2] = null);
(statearr_22923_22968[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 6))
{var inst_22845 = (state_22916[7]);var inst_22895 = (state_22916[12]);var inst_22893 = (state_22916[13]);var inst_22893__$1 = topic_fn.call(null,inst_22845);var inst_22894 = cljs.core.deref.call(null,mults);var inst_22895__$1 = cljs.core.get.call(null,inst_22894,inst_22893__$1);var state_22916__$1 = (function (){var statearr_22924 = state_22916;(statearr_22924[12] = inst_22895__$1);
(statearr_22924[13] = inst_22893__$1);
return statearr_22924;
})();if(cljs.core.truth_(inst_22895__$1))
{var statearr_22925_22969 = state_22916__$1;(statearr_22925_22969[1] = 19);
} else
{var statearr_22926_22970 = state_22916__$1;(statearr_22926_22970[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 7))
{var inst_22912 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22927_22971 = state_22916__$1;(statearr_22927_22971[2] = inst_22912);
(statearr_22927_22971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 8))
{var inst_22857 = (state_22916[9]);var inst_22858 = (state_22916[11]);var inst_22860 = (inst_22858 < inst_22857);var inst_22861 = inst_22860;var state_22916__$1 = state_22916;if(cljs.core.truth_(inst_22861))
{var statearr_22931_22972 = state_22916__$1;(statearr_22931_22972[1] = 10);
} else
{var statearr_22932_22973 = state_22916__$1;(statearr_22932_22973[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 9))
{var inst_22891 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22933_22974 = state_22916__$1;(statearr_22933_22974[2] = inst_22891);
(statearr_22933_22974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 10))
{var inst_22855 = (state_22916[8]);var inst_22857 = (state_22916[9]);var inst_22856 = (state_22916[10]);var inst_22858 = (state_22916[11]);var inst_22863 = cljs.core._nth.call(null,inst_22856,inst_22858);var inst_22864 = cljs.core.async.muxch_STAR_.call(null,inst_22863);var inst_22865 = cljs.core.async.close_BANG_.call(null,inst_22864);var inst_22866 = (inst_22858 + 1);var tmp22928 = inst_22855;var tmp22929 = inst_22857;var tmp22930 = inst_22856;var inst_22855__$1 = tmp22928;var inst_22856__$1 = tmp22930;var inst_22857__$1 = tmp22929;var inst_22858__$1 = inst_22866;var state_22916__$1 = (function (){var statearr_22934 = state_22916;(statearr_22934[14] = inst_22865);
(statearr_22934[8] = inst_22855__$1);
(statearr_22934[9] = inst_22857__$1);
(statearr_22934[10] = inst_22856__$1);
(statearr_22934[11] = inst_22858__$1);
return statearr_22934;
})();var statearr_22935_22975 = state_22916__$1;(statearr_22935_22975[2] = null);
(statearr_22935_22975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 11))
{var inst_22855 = (state_22916[8]);var inst_22869 = (state_22916[15]);var inst_22869__$1 = cljs.core.seq.call(null,inst_22855);var state_22916__$1 = (function (){var statearr_22936 = state_22916;(statearr_22936[15] = inst_22869__$1);
return statearr_22936;
})();if(inst_22869__$1)
{var statearr_22937_22976 = state_22916__$1;(statearr_22937_22976[1] = 13);
} else
{var statearr_22938_22977 = state_22916__$1;(statearr_22938_22977[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 12))
{var inst_22889 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22939_22978 = state_22916__$1;(statearr_22939_22978[2] = inst_22889);
(statearr_22939_22978[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 13))
{var inst_22869 = (state_22916[15]);var inst_22871 = cljs.core.chunked_seq_QMARK_.call(null,inst_22869);var state_22916__$1 = state_22916;if(inst_22871)
{var statearr_22940_22979 = state_22916__$1;(statearr_22940_22979[1] = 16);
} else
{var statearr_22941_22980 = state_22916__$1;(statearr_22941_22980[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 14))
{var state_22916__$1 = state_22916;var statearr_22942_22981 = state_22916__$1;(statearr_22942_22981[2] = null);
(statearr_22942_22981[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 15))
{var inst_22887 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22943_22982 = state_22916__$1;(statearr_22943_22982[2] = inst_22887);
(statearr_22943_22982[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 16))
{var inst_22869 = (state_22916[15]);var inst_22873 = cljs.core.chunk_first.call(null,inst_22869);var inst_22874 = cljs.core.chunk_rest.call(null,inst_22869);var inst_22875 = cljs.core.count.call(null,inst_22873);var inst_22855 = inst_22874;var inst_22856 = inst_22873;var inst_22857 = inst_22875;var inst_22858 = 0;var state_22916__$1 = (function (){var statearr_22944 = state_22916;(statearr_22944[8] = inst_22855);
(statearr_22944[9] = inst_22857);
(statearr_22944[10] = inst_22856);
(statearr_22944[11] = inst_22858);
return statearr_22944;
})();var statearr_22945_22983 = state_22916__$1;(statearr_22945_22983[2] = null);
(statearr_22945_22983[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 17))
{var inst_22869 = (state_22916[15]);var inst_22878 = cljs.core.first.call(null,inst_22869);var inst_22879 = cljs.core.async.muxch_STAR_.call(null,inst_22878);var inst_22880 = cljs.core.async.close_BANG_.call(null,inst_22879);var inst_22881 = cljs.core.next.call(null,inst_22869);var inst_22855 = inst_22881;var inst_22856 = null;var inst_22857 = 0;var inst_22858 = 0;var state_22916__$1 = (function (){var statearr_22946 = state_22916;(statearr_22946[8] = inst_22855);
(statearr_22946[9] = inst_22857);
(statearr_22946[10] = inst_22856);
(statearr_22946[16] = inst_22880);
(statearr_22946[11] = inst_22858);
return statearr_22946;
})();var statearr_22947_22984 = state_22916__$1;(statearr_22947_22984[2] = null);
(statearr_22947_22984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 18))
{var inst_22884 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22948_22985 = state_22916__$1;(statearr_22948_22985[2] = inst_22884);
(statearr_22948_22985[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 19))
{var state_22916__$1 = state_22916;var statearr_22949_22986 = state_22916__$1;(statearr_22949_22986[2] = null);
(statearr_22949_22986[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 20))
{var state_22916__$1 = state_22916;var statearr_22950_22987 = state_22916__$1;(statearr_22950_22987[2] = null);
(statearr_22950_22987[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 21))
{var inst_22909 = (state_22916[2]);var state_22916__$1 = (function (){var statearr_22951 = state_22916;(statearr_22951[17] = inst_22909);
return statearr_22951;
})();var statearr_22952_22988 = state_22916__$1;(statearr_22952_22988[2] = null);
(statearr_22952_22988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 22))
{var inst_22906 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22953_22989 = state_22916__$1;(statearr_22953_22989[2] = inst_22906);
(statearr_22953_22989[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 23))
{var inst_22893 = (state_22916[13]);var inst_22897 = (state_22916[2]);var inst_22898 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22893);var state_22916__$1 = (function (){var statearr_22954 = state_22916;(statearr_22954[18] = inst_22897);
return statearr_22954;
})();var statearr_22955_22990 = state_22916__$1;(statearr_22955_22990[2] = inst_22898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22916__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22917 === 24))
{var inst_22845 = (state_22916[7]);var inst_22895 = (state_22916[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22916,23,Object,null,22);var inst_22902 = cljs.core.async.muxch_STAR_.call(null,inst_22895);var state_22916__$1 = state_22916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22916__$1,25,inst_22902,inst_22845);
} else
{if((state_val_22917 === 25))
{var inst_22904 = (state_22916[2]);var state_22916__$1 = state_22916;var statearr_22956_22991 = state_22916__$1;(statearr_22956_22991[2] = inst_22904);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22916__$1);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_22960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22960[0] = state_machine__13817__auto__);
(statearr_22960[1] = 1);
return statearr_22960;
});
var state_machine__13817__auto____1 = (function (state_22916){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_22916);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e22961){if((e22961 instanceof Object))
{var ex__13820__auto__ = e22961;var statearr_22962_22992 = state_22916;(statearr_22962_22992[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22993 = state_22916;
state_22916 = G__22993;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_22916){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_22916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_22963 = f__13887__auto__.call(null);(statearr_22963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___22964);
return statearr_22963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
,cljs.core.range.call(null,cnt));var c__13886__auto___23130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_23100){var state_val_23101 = (state_23100[1]);if((state_val_23101 === 1))
{var state_23100__$1 = state_23100;var statearr_23102_23131 = state_23100__$1;(statearr_23102_23131[2] = null);
(statearr_23102_23131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 2))
{var inst_23063 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23064 = 0;var state_23100__$1 = (function (){var statearr_23103 = state_23100;(statearr_23103[7] = inst_23064);
(statearr_23103[8] = inst_23063);
return statearr_23103;
})();var statearr_23104_23132 = state_23100__$1;(statearr_23104_23132[2] = null);
(statearr_23104_23132[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 3))
{var inst_23098 = (state_23100[2]);var state_23100__$1 = state_23100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23100__$1,inst_23098);
} else
{if((state_val_23101 === 4))
{var inst_23064 = (state_23100[7]);var inst_23066 = (inst_23064 < cnt);var state_23100__$1 = state_23100;if(cljs.core.truth_(inst_23066))
{var statearr_23105_23133 = state_23100__$1;(statearr_23105_23133[1] = 6);
} else
{var statearr_23106_23134 = state_23100__$1;(statearr_23106_23134[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 5))
{var inst_23084 = (state_23100[2]);var state_23100__$1 = (function (){var statearr_23107 = state_23100;(statearr_23107[9] = inst_23084);
return statearr_23107;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23100__$1,12,dchan);
} else
{if((state_val_23101 === 6))
{var state_23100__$1 = state_23100;var statearr_23108_23135 = state_23100__$1;(statearr_23108_23135[2] = null);
(statearr_23108_23135[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 7))
{var state_23100__$1 = state_23100;var statearr_23109_23136 = state_23100__$1;(statearr_23109_23136[2] = null);
(statearr_23109_23136[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 8))
{var inst_23082 = (state_23100[2]);var state_23100__$1 = state_23100;var statearr_23110_23137 = state_23100__$1;(statearr_23110_23137[2] = inst_23082);
(statearr_23110_23137[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 9))
{var inst_23064 = (state_23100[7]);var inst_23077 = (state_23100[2]);var inst_23078 = (inst_23064 + 1);var inst_23064__$1 = inst_23078;var state_23100__$1 = (function (){var statearr_23111 = state_23100;(statearr_23111[10] = inst_23077);
(statearr_23111[7] = inst_23064__$1);
return statearr_23111;
})();var statearr_23112_23138 = state_23100__$1;(statearr_23112_23138[2] = null);
(statearr_23112_23138[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 10))
{var inst_23068 = (state_23100[2]);var inst_23069 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_23100__$1 = (function (){var statearr_23113 = state_23100;(statearr_23113[11] = inst_23068);
return statearr_23113;
})();var statearr_23114_23139 = state_23100__$1;(statearr_23114_23139[2] = inst_23069);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23100__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 11))
{var inst_23064 = (state_23100[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23100,10,Object,null,9);var inst_23073 = chs__$1.call(null,inst_23064);var inst_23074 = done.call(null,inst_23064);var inst_23075 = cljs.core.async.take_BANG_.call(null,inst_23073,inst_23074);var state_23100__$1 = state_23100;var statearr_23115_23140 = state_23100__$1;(statearr_23115_23140[2] = inst_23075);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23100__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 12))
{var inst_23086 = (state_23100[12]);var inst_23086__$1 = (state_23100[2]);var inst_23087 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23086__$1);var state_23100__$1 = (function (){var statearr_23116 = state_23100;(statearr_23116[12] = inst_23086__$1);
return statearr_23116;
})();if(cljs.core.truth_(inst_23087))
{var statearr_23117_23141 = state_23100__$1;(statearr_23117_23141[1] = 13);
} else
{var statearr_23118_23142 = state_23100__$1;(statearr_23118_23142[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 13))
{var inst_23089 = cljs.core.async.close_BANG_.call(null,out);var state_23100__$1 = state_23100;var statearr_23119_23143 = state_23100__$1;(statearr_23119_23143[2] = inst_23089);
(statearr_23119_23143[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 14))
{var inst_23086 = (state_23100[12]);var inst_23091 = cljs.core.apply.call(null,f,inst_23086);var state_23100__$1 = state_23100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23100__$1,16,out,inst_23091);
} else
{if((state_val_23101 === 15))
{var inst_23096 = (state_23100[2]);var state_23100__$1 = state_23100;var statearr_23120_23144 = state_23100__$1;(statearr_23120_23144[2] = inst_23096);
(statearr_23120_23144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23101 === 16))
{var inst_23093 = (state_23100[2]);var state_23100__$1 = (function (){var statearr_23121 = state_23100;(statearr_23121[13] = inst_23093);
return statearr_23121;
})();var statearr_23122_23145 = state_23100__$1;(statearr_23122_23145[2] = null);
(statearr_23122_23145[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_23126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23126[0] = state_machine__13817__auto__);
(statearr_23126[1] = 1);
return statearr_23126;
});
var state_machine__13817__auto____1 = (function (state_23100){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_23100);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e23127){if((e23127 instanceof Object))
{var ex__13820__auto__ = e23127;var statearr_23128_23146 = state_23100;(statearr_23128_23146[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23147 = state_23100;
state_23100 = G__23147;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_23100){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_23100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_23129 = f__13887__auto__.call(null);(statearr_23129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___23130);
return statearr_23129;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13886__auto___23255 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_23231){var state_val_23232 = (state_23231[1]);if((state_val_23232 === 1))
{var inst_23202 = cljs.core.vec.call(null,chs);var inst_23203 = inst_23202;var state_23231__$1 = (function (){var statearr_23233 = state_23231;(statearr_23233[7] = inst_23203);
return statearr_23233;
})();var statearr_23234_23256 = state_23231__$1;(statearr_23234_23256[2] = null);
(statearr_23234_23256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 2))
{var inst_23203 = (state_23231[7]);var inst_23205 = cljs.core.count.call(null,inst_23203);var inst_23206 = (inst_23205 > 0);var state_23231__$1 = state_23231;if(cljs.core.truth_(inst_23206))
{var statearr_23235_23257 = state_23231__$1;(statearr_23235_23257[1] = 4);
} else
{var statearr_23236_23258 = state_23231__$1;(statearr_23236_23258[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 3))
{var inst_23229 = (state_23231[2]);var state_23231__$1 = state_23231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23231__$1,inst_23229);
} else
{if((state_val_23232 === 4))
{var inst_23203 = (state_23231[7]);var state_23231__$1 = state_23231;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23231__$1,7,inst_23203);
} else
{if((state_val_23232 === 5))
{var inst_23225 = cljs.core.async.close_BANG_.call(null,out);var state_23231__$1 = state_23231;var statearr_23237_23259 = state_23231__$1;(statearr_23237_23259[2] = inst_23225);
(statearr_23237_23259[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 6))
{var inst_23227 = (state_23231[2]);var state_23231__$1 = state_23231;var statearr_23238_23260 = state_23231__$1;(statearr_23238_23260[2] = inst_23227);
(statearr_23238_23260[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 7))
{var inst_23210 = (state_23231[8]);var inst_23211 = (state_23231[9]);var inst_23210__$1 = (state_23231[2]);var inst_23211__$1 = cljs.core.nth.call(null,inst_23210__$1,0,null);var inst_23212 = cljs.core.nth.call(null,inst_23210__$1,1,null);var inst_23213 = (inst_23211__$1 == null);var state_23231__$1 = (function (){var statearr_23239 = state_23231;(statearr_23239[8] = inst_23210__$1);
(statearr_23239[10] = inst_23212);
(statearr_23239[9] = inst_23211__$1);
return statearr_23239;
})();if(cljs.core.truth_(inst_23213))
{var statearr_23240_23261 = state_23231__$1;(statearr_23240_23261[1] = 8);
} else
{var statearr_23241_23262 = state_23231__$1;(statearr_23241_23262[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 8))
{var inst_23203 = (state_23231[7]);var inst_23210 = (state_23231[8]);var inst_23212 = (state_23231[10]);var inst_23211 = (state_23231[9]);var inst_23215 = (function (){var c = inst_23212;var v = inst_23211;var vec__23208 = inst_23210;var cs = inst_23203;return ((function (c,v,vec__23208,cs,inst_23203,inst_23210,inst_23212,inst_23211,state_val_23232){
return (function (p1__23148_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__23148_SHARP_);
});
;})(c,v,vec__23208,cs,inst_23203,inst_23210,inst_23212,inst_23211,state_val_23232))
})();var inst_23216 = cljs.core.filterv.call(null,inst_23215,inst_23203);var inst_23203__$1 = inst_23216;var state_23231__$1 = (function (){var statearr_23242 = state_23231;(statearr_23242[7] = inst_23203__$1);
return statearr_23242;
})();var statearr_23243_23263 = state_23231__$1;(statearr_23243_23263[2] = null);
(statearr_23243_23263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 9))
{var inst_23211 = (state_23231[9]);var state_23231__$1 = state_23231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23231__$1,11,out,inst_23211);
} else
{if((state_val_23232 === 10))
{var inst_23223 = (state_23231[2]);var state_23231__$1 = state_23231;var statearr_23245_23264 = state_23231__$1;(statearr_23245_23264[2] = inst_23223);
(statearr_23245_23264[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23232 === 11))
{var inst_23203 = (state_23231[7]);var inst_23220 = (state_23231[2]);var tmp23244 = inst_23203;var inst_23203__$1 = tmp23244;var state_23231__$1 = (function (){var statearr_23246 = state_23231;(statearr_23246[7] = inst_23203__$1);
(statearr_23246[11] = inst_23220);
return statearr_23246;
})();var statearr_23247_23265 = state_23231__$1;(statearr_23247_23265[2] = null);
(statearr_23247_23265[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_23251 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23251[0] = state_machine__13817__auto__);
(statearr_23251[1] = 1);
return statearr_23251;
});
var state_machine__13817__auto____1 = (function (state_23231){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_23231);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e23252){if((e23252 instanceof Object))
{var ex__13820__auto__ = e23252;var statearr_23253_23266 = state_23231;(statearr_23253_23266[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23231);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23252;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23267 = state_23231;
state_23231 = G__23267;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_23231){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_23231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_23254 = f__13887__auto__.call(null);(statearr_23254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___23255);
return statearr_23254;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13886__auto___23360 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_23337){var state_val_23338 = (state_23337[1]);if((state_val_23338 === 1))
{var inst_23314 = 0;var state_23337__$1 = (function (){var statearr_23339 = state_23337;(statearr_23339[7] = inst_23314);
return statearr_23339;
})();var statearr_23340_23361 = state_23337__$1;(statearr_23340_23361[2] = null);
(statearr_23340_23361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 2))
{var inst_23314 = (state_23337[7]);var inst_23316 = (inst_23314 < n);var state_23337__$1 = state_23337;if(cljs.core.truth_(inst_23316))
{var statearr_23341_23362 = state_23337__$1;(statearr_23341_23362[1] = 4);
} else
{var statearr_23342_23363 = state_23337__$1;(statearr_23342_23363[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 3))
{var inst_23334 = (state_23337[2]);var inst_23335 = cljs.core.async.close_BANG_.call(null,out);var state_23337__$1 = (function (){var statearr_23343 = state_23337;(statearr_23343[8] = inst_23334);
return statearr_23343;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23337__$1,inst_23335);
} else
{if((state_val_23338 === 4))
{var state_23337__$1 = state_23337;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23337__$1,7,ch);
} else
{if((state_val_23338 === 5))
{var state_23337__$1 = state_23337;var statearr_23344_23364 = state_23337__$1;(statearr_23344_23364[2] = null);
(statearr_23344_23364[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 6))
{var inst_23332 = (state_23337[2]);var state_23337__$1 = state_23337;var statearr_23345_23365 = state_23337__$1;(statearr_23345_23365[2] = inst_23332);
(statearr_23345_23365[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 7))
{var inst_23319 = (state_23337[9]);var inst_23319__$1 = (state_23337[2]);var inst_23320 = (inst_23319__$1 == null);var inst_23321 = cljs.core.not.call(null,inst_23320);var state_23337__$1 = (function (){var statearr_23346 = state_23337;(statearr_23346[9] = inst_23319__$1);
return statearr_23346;
})();if(inst_23321)
{var statearr_23347_23366 = state_23337__$1;(statearr_23347_23366[1] = 8);
} else
{var statearr_23348_23367 = state_23337__$1;(statearr_23348_23367[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 8))
{var inst_23319 = (state_23337[9]);var state_23337__$1 = state_23337;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23337__$1,11,out,inst_23319);
} else
{if((state_val_23338 === 9))
{var state_23337__$1 = state_23337;var statearr_23349_23368 = state_23337__$1;(statearr_23349_23368[2] = null);
(statearr_23349_23368[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 10))
{var inst_23329 = (state_23337[2]);var state_23337__$1 = state_23337;var statearr_23350_23369 = state_23337__$1;(statearr_23350_23369[2] = inst_23329);
(statearr_23350_23369[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23338 === 11))
{var inst_23314 = (state_23337[7]);var inst_23324 = (state_23337[2]);var inst_23325 = (inst_23314 + 1);var inst_23314__$1 = inst_23325;var state_23337__$1 = (function (){var statearr_23351 = state_23337;(statearr_23351[10] = inst_23324);
(statearr_23351[7] = inst_23314__$1);
return statearr_23351;
})();var statearr_23352_23370 = state_23337__$1;(statearr_23352_23370[2] = null);
(statearr_23352_23370[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_23356 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23356[0] = state_machine__13817__auto__);
(statearr_23356[1] = 1);
return statearr_23356;
});
var state_machine__13817__auto____1 = (function (state_23337){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_23337);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e23357){if((e23357 instanceof Object))
{var ex__13820__auto__ = e23357;var statearr_23358_23371 = state_23337;(statearr_23358_23371[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23337);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23357;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23372 = state_23337;
state_23337 = G__23372;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_23337){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_23337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_23359 = f__13887__auto__.call(null);(statearr_23359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___23360);
return statearr_23359;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13886__auto___23469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_23444){var state_val_23445 = (state_23444[1]);if((state_val_23445 === 1))
{var inst_23421 = null;var state_23444__$1 = (function (){var statearr_23446 = state_23444;(statearr_23446[7] = inst_23421);
return statearr_23446;
})();var statearr_23447_23470 = state_23444__$1;(statearr_23447_23470[2] = null);
(statearr_23447_23470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 2))
{var state_23444__$1 = state_23444;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23444__$1,4,ch);
} else
{if((state_val_23445 === 3))
{var inst_23441 = (state_23444[2]);var inst_23442 = cljs.core.async.close_BANG_.call(null,out);var state_23444__$1 = (function (){var statearr_23448 = state_23444;(statearr_23448[8] = inst_23441);
return statearr_23448;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23444__$1,inst_23442);
} else
{if((state_val_23445 === 4))
{var inst_23424 = (state_23444[9]);var inst_23424__$1 = (state_23444[2]);var inst_23425 = (inst_23424__$1 == null);var inst_23426 = cljs.core.not.call(null,inst_23425);var state_23444__$1 = (function (){var statearr_23449 = state_23444;(statearr_23449[9] = inst_23424__$1);
return statearr_23449;
})();if(inst_23426)
{var statearr_23450_23471 = state_23444__$1;(statearr_23450_23471[1] = 5);
} else
{var statearr_23451_23472 = state_23444__$1;(statearr_23451_23472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 5))
{var inst_23424 = (state_23444[9]);var inst_23421 = (state_23444[7]);var inst_23428 = cljs.core._EQ_.call(null,inst_23424,inst_23421);var state_23444__$1 = state_23444;if(inst_23428)
{var statearr_23452_23473 = state_23444__$1;(statearr_23452_23473[1] = 8);
} else
{var statearr_23453_23474 = state_23444__$1;(statearr_23453_23474[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 6))
{var state_23444__$1 = state_23444;var statearr_23455_23475 = state_23444__$1;(statearr_23455_23475[2] = null);
(statearr_23455_23475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 7))
{var inst_23439 = (state_23444[2]);var state_23444__$1 = state_23444;var statearr_23456_23476 = state_23444__$1;(statearr_23456_23476[2] = inst_23439);
(statearr_23456_23476[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 8))
{var inst_23421 = (state_23444[7]);var tmp23454 = inst_23421;var inst_23421__$1 = tmp23454;var state_23444__$1 = (function (){var statearr_23457 = state_23444;(statearr_23457[7] = inst_23421__$1);
return statearr_23457;
})();var statearr_23458_23477 = state_23444__$1;(statearr_23458_23477[2] = null);
(statearr_23458_23477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 9))
{var inst_23424 = (state_23444[9]);var state_23444__$1 = state_23444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23444__$1,11,out,inst_23424);
} else
{if((state_val_23445 === 10))
{var inst_23436 = (state_23444[2]);var state_23444__$1 = state_23444;var statearr_23459_23478 = state_23444__$1;(statearr_23459_23478[2] = inst_23436);
(statearr_23459_23478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23445 === 11))
{var inst_23424 = (state_23444[9]);var inst_23433 = (state_23444[2]);var inst_23421 = inst_23424;var state_23444__$1 = (function (){var statearr_23460 = state_23444;(statearr_23460[10] = inst_23433);
(statearr_23460[7] = inst_23421);
return statearr_23460;
})();var statearr_23461_23479 = state_23444__$1;(statearr_23461_23479[2] = null);
(statearr_23461_23479[1] = 2);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_23465 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23465[0] = state_machine__13817__auto__);
(statearr_23465[1] = 1);
return statearr_23465;
});
var state_machine__13817__auto____1 = (function (state_23444){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_23444);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e23466){if((e23466 instanceof Object))
{var ex__13820__auto__ = e23466;var statearr_23467_23480 = state_23444;(statearr_23467_23480[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23481 = state_23444;
state_23444 = G__23481;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_23444){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_23444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_23468 = f__13887__auto__.call(null);(statearr_23468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___23469);
return statearr_23468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13886__auto___23616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_23586){var state_val_23587 = (state_23586[1]);if((state_val_23587 === 1))
{var inst_23549 = (new Array(n));var inst_23550 = inst_23549;var inst_23551 = 0;var state_23586__$1 = (function (){var statearr_23588 = state_23586;(statearr_23588[7] = inst_23550);
(statearr_23588[8] = inst_23551);
return statearr_23588;
})();var statearr_23589_23617 = state_23586__$1;(statearr_23589_23617[2] = null);
(statearr_23589_23617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 2))
{var state_23586__$1 = state_23586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23586__$1,4,ch);
} else
{if((state_val_23587 === 3))
{var inst_23584 = (state_23586[2]);var state_23586__$1 = state_23586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23586__$1,inst_23584);
} else
{if((state_val_23587 === 4))
{var inst_23554 = (state_23586[9]);var inst_23554__$1 = (state_23586[2]);var inst_23555 = (inst_23554__$1 == null);var inst_23556 = cljs.core.not.call(null,inst_23555);var state_23586__$1 = (function (){var statearr_23590 = state_23586;(statearr_23590[9] = inst_23554__$1);
return statearr_23590;
})();if(inst_23556)
{var statearr_23591_23618 = state_23586__$1;(statearr_23591_23618[1] = 5);
} else
{var statearr_23592_23619 = state_23586__$1;(statearr_23592_23619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 5))
{var inst_23550 = (state_23586[7]);var inst_23551 = (state_23586[8]);var inst_23559 = (state_23586[10]);var inst_23554 = (state_23586[9]);var inst_23558 = (inst_23550[inst_23551] = inst_23554);var inst_23559__$1 = (inst_23551 + 1);var inst_23560 = (inst_23559__$1 < n);var state_23586__$1 = (function (){var statearr_23593 = state_23586;(statearr_23593[11] = inst_23558);
(statearr_23593[10] = inst_23559__$1);
return statearr_23593;
})();if(cljs.core.truth_(inst_23560))
{var statearr_23594_23620 = state_23586__$1;(statearr_23594_23620[1] = 8);
} else
{var statearr_23595_23621 = state_23586__$1;(statearr_23595_23621[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 6))
{var inst_23551 = (state_23586[8]);var inst_23572 = (inst_23551 > 0);var state_23586__$1 = state_23586;if(cljs.core.truth_(inst_23572))
{var statearr_23597_23622 = state_23586__$1;(statearr_23597_23622[1] = 12);
} else
{var statearr_23598_23623 = state_23586__$1;(statearr_23598_23623[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 7))
{var inst_23582 = (state_23586[2]);var state_23586__$1 = state_23586;var statearr_23599_23624 = state_23586__$1;(statearr_23599_23624[2] = inst_23582);
(statearr_23599_23624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 8))
{var inst_23550 = (state_23586[7]);var inst_23559 = (state_23586[10]);var tmp23596 = inst_23550;var inst_23550__$1 = tmp23596;var inst_23551 = inst_23559;var state_23586__$1 = (function (){var statearr_23600 = state_23586;(statearr_23600[7] = inst_23550__$1);
(statearr_23600[8] = inst_23551);
return statearr_23600;
})();var statearr_23601_23625 = state_23586__$1;(statearr_23601_23625[2] = null);
(statearr_23601_23625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 9))
{var inst_23550 = (state_23586[7]);var inst_23564 = cljs.core.vec.call(null,inst_23550);var state_23586__$1 = state_23586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23586__$1,11,out,inst_23564);
} else
{if((state_val_23587 === 10))
{var inst_23570 = (state_23586[2]);var state_23586__$1 = state_23586;var statearr_23602_23626 = state_23586__$1;(statearr_23602_23626[2] = inst_23570);
(statearr_23602_23626[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 11))
{var inst_23566 = (state_23586[2]);var inst_23567 = (new Array(n));var inst_23550 = inst_23567;var inst_23551 = 0;var state_23586__$1 = (function (){var statearr_23603 = state_23586;(statearr_23603[7] = inst_23550);
(statearr_23603[8] = inst_23551);
(statearr_23603[12] = inst_23566);
return statearr_23603;
})();var statearr_23604_23627 = state_23586__$1;(statearr_23604_23627[2] = null);
(statearr_23604_23627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 12))
{var inst_23550 = (state_23586[7]);var inst_23574 = cljs.core.vec.call(null,inst_23550);var state_23586__$1 = state_23586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23586__$1,15,out,inst_23574);
} else
{if((state_val_23587 === 13))
{var state_23586__$1 = state_23586;var statearr_23605_23628 = state_23586__$1;(statearr_23605_23628[2] = null);
(statearr_23605_23628[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 14))
{var inst_23579 = (state_23586[2]);var inst_23580 = cljs.core.async.close_BANG_.call(null,out);var state_23586__$1 = (function (){var statearr_23606 = state_23586;(statearr_23606[13] = inst_23579);
return statearr_23606;
})();var statearr_23607_23629 = state_23586__$1;(statearr_23607_23629[2] = inst_23580);
(statearr_23607_23629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23587 === 15))
{var inst_23576 = (state_23586[2]);var state_23586__$1 = state_23586;var statearr_23608_23630 = state_23586__$1;(statearr_23608_23630[2] = inst_23576);
(statearr_23608_23630[1] = 14);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_23612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23612[0] = state_machine__13817__auto__);
(statearr_23612[1] = 1);
return statearr_23612;
});
var state_machine__13817__auto____1 = (function (state_23586){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_23586);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e23613){if((e23613 instanceof Object))
{var ex__13820__auto__ = e23613;var statearr_23614_23631 = state_23586;(statearr_23614_23631[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23632 = state_23586;
state_23586 = G__23632;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_23586){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_23586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_23615 = f__13887__auto__.call(null);(statearr_23615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___23616);
return statearr_23615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__13886__auto___23775 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13887__auto__ = (function (){var switch__13816__auto__ = (function (state_23745){var state_val_23746 = (state_23745[1]);if((state_val_23746 === 1))
{var inst_23704 = [];var inst_23705 = inst_23704;var inst_23706 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_23745__$1 = (function (){var statearr_23747 = state_23745;(statearr_23747[7] = inst_23706);
(statearr_23747[8] = inst_23705);
return statearr_23747;
})();var statearr_23748_23776 = state_23745__$1;(statearr_23748_23776[2] = null);
(statearr_23748_23776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 2))
{var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23745__$1,4,ch);
} else
{if((state_val_23746 === 3))
{var inst_23743 = (state_23745[2]);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23745__$1,inst_23743);
} else
{if((state_val_23746 === 4))
{var inst_23709 = (state_23745[9]);var inst_23709__$1 = (state_23745[2]);var inst_23710 = (inst_23709__$1 == null);var inst_23711 = cljs.core.not.call(null,inst_23710);var state_23745__$1 = (function (){var statearr_23749 = state_23745;(statearr_23749[9] = inst_23709__$1);
return statearr_23749;
})();if(inst_23711)
{var statearr_23750_23777 = state_23745__$1;(statearr_23750_23777[1] = 5);
} else
{var statearr_23751_23778 = state_23745__$1;(statearr_23751_23778[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 5))
{var inst_23713 = (state_23745[10]);var inst_23706 = (state_23745[7]);var inst_23709 = (state_23745[9]);var inst_23713__$1 = f.call(null,inst_23709);var inst_23714 = cljs.core._EQ_.call(null,inst_23713__$1,inst_23706);var inst_23715 = cljs.core.keyword_identical_QMARK_.call(null,inst_23706,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_23716 = (inst_23714) || (inst_23715);var state_23745__$1 = (function (){var statearr_23752 = state_23745;(statearr_23752[10] = inst_23713__$1);
return statearr_23752;
})();if(cljs.core.truth_(inst_23716))
{var statearr_23753_23779 = state_23745__$1;(statearr_23753_23779[1] = 8);
} else
{var statearr_23754_23780 = state_23745__$1;(statearr_23754_23780[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 6))
{var inst_23705 = (state_23745[8]);var inst_23730 = inst_23705.length;var inst_23731 = (inst_23730 > 0);var state_23745__$1 = state_23745;if(cljs.core.truth_(inst_23731))
{var statearr_23756_23781 = state_23745__$1;(statearr_23756_23781[1] = 12);
} else
{var statearr_23757_23782 = state_23745__$1;(statearr_23757_23782[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 7))
{var inst_23741 = (state_23745[2]);var state_23745__$1 = state_23745;var statearr_23758_23783 = state_23745__$1;(statearr_23758_23783[2] = inst_23741);
(statearr_23758_23783[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 8))
{var inst_23713 = (state_23745[10]);var inst_23705 = (state_23745[8]);var inst_23709 = (state_23745[9]);var inst_23718 = inst_23705.push(inst_23709);var tmp23755 = inst_23705;var inst_23705__$1 = tmp23755;var inst_23706 = inst_23713;var state_23745__$1 = (function (){var statearr_23759 = state_23745;(statearr_23759[7] = inst_23706);
(statearr_23759[8] = inst_23705__$1);
(statearr_23759[11] = inst_23718);
return statearr_23759;
})();var statearr_23760_23784 = state_23745__$1;(statearr_23760_23784[2] = null);
(statearr_23760_23784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 9))
{var inst_23705 = (state_23745[8]);var inst_23721 = cljs.core.vec.call(null,inst_23705);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,11,out,inst_23721);
} else
{if((state_val_23746 === 10))
{var inst_23728 = (state_23745[2]);var state_23745__$1 = state_23745;var statearr_23761_23785 = state_23745__$1;(statearr_23761_23785[2] = inst_23728);
(statearr_23761_23785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 11))
{var inst_23713 = (state_23745[10]);var inst_23709 = (state_23745[9]);var inst_23723 = (state_23745[2]);var inst_23724 = [];var inst_23725 = inst_23724.push(inst_23709);var inst_23705 = inst_23724;var inst_23706 = inst_23713;var state_23745__$1 = (function (){var statearr_23762 = state_23745;(statearr_23762[12] = inst_23725);
(statearr_23762[7] = inst_23706);
(statearr_23762[8] = inst_23705);
(statearr_23762[13] = inst_23723);
return statearr_23762;
})();var statearr_23763_23786 = state_23745__$1;(statearr_23763_23786[2] = null);
(statearr_23763_23786[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 12))
{var inst_23705 = (state_23745[8]);var inst_23733 = cljs.core.vec.call(null,inst_23705);var state_23745__$1 = state_23745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23745__$1,15,out,inst_23733);
} else
{if((state_val_23746 === 13))
{var state_23745__$1 = state_23745;var statearr_23764_23787 = state_23745__$1;(statearr_23764_23787[2] = null);
(statearr_23764_23787[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 14))
{var inst_23738 = (state_23745[2]);var inst_23739 = cljs.core.async.close_BANG_.call(null,out);var state_23745__$1 = (function (){var statearr_23765 = state_23745;(statearr_23765[14] = inst_23738);
return statearr_23765;
})();var statearr_23766_23788 = state_23745__$1;(statearr_23766_23788[2] = inst_23739);
(statearr_23766_23788[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23746 === 15))
{var inst_23735 = (state_23745[2]);var state_23745__$1 = state_23745;var statearr_23767_23789 = state_23745__$1;(statearr_23767_23789[2] = inst_23735);
(statearr_23767_23789[1] = 14);
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
});return ((function (switch__13816__auto__){
return (function() {
var state_machine__13817__auto__ = null;
var state_machine__13817__auto____0 = (function (){var statearr_23771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23771[0] = state_machine__13817__auto__);
(statearr_23771[1] = 1);
return statearr_23771;
});
var state_machine__13817__auto____1 = (function (state_23745){while(true){
var ret_value__13818__auto__ = (function (){try{while(true){
var result__13819__auto__ = switch__13816__auto__.call(null,state_23745);if(cljs.core.keyword_identical_QMARK_.call(null,result__13819__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13819__auto__;
}
break;
}
}catch (e23772){if((e23772 instanceof Object))
{var ex__13820__auto__ = e23772;var statearr_23773_23790 = state_23745;(statearr_23773_23790[5] = ex__13820__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23745);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13818__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23791 = state_23745;
state_23745 = G__23791;
continue;
}
} else
{return ret_value__13818__auto__;
}
break;
}
});
state_machine__13817__auto__ = function(state_23745){
switch(arguments.length){
case 0:
return state_machine__13817__auto____0.call(this);
case 1:
return state_machine__13817__auto____1.call(this,state_23745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13817__auto____0;
state_machine__13817__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13817__auto____1;
return state_machine__13817__auto__;
})()
;})(switch__13816__auto__))
})();var state__13888__auto__ = (function (){var statearr_23774 = f__13887__auto__.call(null);(statearr_23774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13886__auto___23775);
return statearr_23774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13888__auto__);
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

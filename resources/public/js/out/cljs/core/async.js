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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22075 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22075 = (function (f,fn_handler,meta22076){
this.f = f;
this.fn_handler = fn_handler;
this.meta22076 = meta22076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22075.cljs$lang$type = true;
cljs.core.async.t22075.cljs$lang$ctorStr = "cljs.core.async/t22075";
cljs.core.async.t22075.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22075");
});
cljs.core.async.t22075.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22077){var self__ = this;
var _22077__$1 = this;return self__.meta22076;
});
cljs.core.async.t22075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22077,meta22076__$1){var self__ = this;
var _22077__$1 = this;return (new cljs.core.async.t22075(self__.f,self__.fn_handler,meta22076__$1));
});
cljs.core.async.__GT_t22075 = (function __GT_t22075(f__$1,fn_handler__$1,meta22076){return (new cljs.core.async.t22075(f__$1,fn_handler__$1,meta22076));
});
}
return (new cljs.core.async.t22075(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22079 = buff;if(G__22079)
{var bit__10979__auto__ = null;if(cljs.core.truth_((function (){var or__10329__auto__ = bit__10979__auto__;if(cljs.core.truth_(or__10329__auto__))
{return or__10329__auto__;
} else
{return G__22079.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22079.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22079);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22079);
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
* Returns true unless port is already closed
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
{var val_22080 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_22080);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_22080);
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
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
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
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,ret);
}));
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11177__auto___22081 = n;var x_22082 = 0;while(true){
if((x_22082 < n__11177__auto___22081))
{(a[x_22082] = 0);
{
var G__22083 = (x_22082 + 1);
x_22082 = G__22083;
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
var G__22084 = (i + 1);
i = G__22084;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t22088 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22088 = (function (flag,alt_flag,meta22089){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22089 = meta22089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22088.cljs$lang$type = true;
cljs.core.async.t22088.cljs$lang$ctorStr = "cljs.core.async/t22088";
cljs.core.async.t22088.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22088");
});
cljs.core.async.t22088.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t22088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t22088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22090){var self__ = this;
var _22090__$1 = this;return self__.meta22089;
});
cljs.core.async.t22088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22090,meta22089__$1){var self__ = this;
var _22090__$1 = this;return (new cljs.core.async.t22088(self__.flag,self__.alt_flag,meta22089__$1));
});
cljs.core.async.__GT_t22088 = (function __GT_t22088(flag__$1,alt_flag__$1,meta22089){return (new cljs.core.async.t22088(flag__$1,alt_flag__$1,meta22089));
});
}
return (new cljs.core.async.t22088(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22094 = (function (cb,flag,alt_handler,meta22095){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22095 = meta22095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22094.cljs$lang$type = true;
cljs.core.async.t22094.cljs$lang$ctorStr = "cljs.core.async/t22094";
cljs.core.async.t22094.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22094");
});
cljs.core.async.t22094.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t22094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t22094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22096){var self__ = this;
var _22096__$1 = this;return self__.meta22095;
});
cljs.core.async.t22094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22096,meta22095__$1){var self__ = this;
var _22096__$1 = this;return (new cljs.core.async.t22094(self__.cb,self__.flag,self__.alt_handler,meta22095__$1));
});
cljs.core.async.__GT_t22094 = (function __GT_t22094(cb__$1,flag__$1,alt_handler__$1,meta22095){return (new cljs.core.async.t22094(cb__$1,flag__$1,alt_handler__$1,meta22095));
});
}
return (new cljs.core.async.t22094(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22097_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22097_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22098_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22098_SHARP_,port], null));
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
var G__22099 = (i + 1);
i = G__22099;
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
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
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
var alts_BANG___delegate = function (ports,p__22100){var map__22102 = p__22100;var map__22102__$1 = ((cljs.core.seq_QMARK_.call(null,map__22102))?cljs.core.apply.call(null,cljs.core.hash_map,map__22102):map__22102);var opts = map__22102__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22100 = null;if (arguments.length > 1) {
  p__22100 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22100);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22103){
var ports = cljs.core.first(arglist__22103);
var p__22100 = cljs.core.rest(arglist__22103);
return alts_BANG___delegate(ports,p__22100);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22111 = (function (ch,f,map_LT_,meta22112){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22112 = meta22112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22111.cljs$lang$type = true;
cljs.core.async.t22111.cljs$lang$ctorStr = "cljs.core.async/t22111";
cljs.core.async.t22111.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22111");
});
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t22114 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22114 = (function (fn1,_,meta22112,ch,f,map_LT_,meta22115){
this.fn1 = fn1;
this._ = _;
this.meta22112 = meta22112;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22115 = meta22115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22114.cljs$lang$type = true;
cljs.core.async.t22114.cljs$lang$ctorStr = "cljs.core.async/t22114";
cljs.core.async.t22114.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22114");
});
cljs.core.async.t22114.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22114.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t22114.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t22114.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__22104_SHARP_){return f1.call(null,(((p1__22104_SHARP_ == null))?null:self__.f.call(null,p1__22104_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t22114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22116){var self__ = this;
var _22116__$1 = this;return self__.meta22115;
});
cljs.core.async.t22114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22116,meta22115__$1){var self__ = this;
var _22116__$1 = this;return (new cljs.core.async.t22114(self__.fn1,self__._,self__.meta22112,self__.ch,self__.f,self__.map_LT_,meta22115__$1));
});
cljs.core.async.__GT_t22114 = (function __GT_t22114(fn1__$1,___$2,meta22112__$1,ch__$2,f__$2,map_LT___$2,meta22115){return (new cljs.core.async.t22114(fn1__$1,___$2,meta22112__$1,ch__$2,f__$2,map_LT___$2,meta22115));
});
}
return (new cljs.core.async.t22114(fn1,___$1,self__.meta22112,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22111.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t22111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22113){var self__ = this;
var _22113__$1 = this;return self__.meta22112;
});
cljs.core.async.t22111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22113,meta22112__$1){var self__ = this;
var _22113__$1 = this;return (new cljs.core.async.t22111(self__.ch,self__.f,self__.map_LT_,meta22112__$1));
});
cljs.core.async.__GT_t22111 = (function __GT_t22111(ch__$1,f__$1,map_LT___$1,meta22112){return (new cljs.core.async.t22111(ch__$1,f__$1,map_LT___$1,meta22112));
});
}
return (new cljs.core.async.t22111(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22120 = (function (ch,f,map_GT_,meta22121){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22121 = meta22121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22120.cljs$lang$type = true;
cljs.core.async.t22120.cljs$lang$ctorStr = "cljs.core.async/t22120";
cljs.core.async.t22120.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22120");
});
cljs.core.async.t22120.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22120.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t22120.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22120.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22120.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22120.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22122){var self__ = this;
var _22122__$1 = this;return self__.meta22121;
});
cljs.core.async.t22120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22122,meta22121__$1){var self__ = this;
var _22122__$1 = this;return (new cljs.core.async.t22120(self__.ch,self__.f,self__.map_GT_,meta22121__$1));
});
cljs.core.async.__GT_t22120 = (function __GT_t22120(ch__$1,f__$1,map_GT___$1,meta22121){return (new cljs.core.async.t22120(ch__$1,f__$1,map_GT___$1,meta22121));
});
}
return (new cljs.core.async.t22120(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22126 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22126 = (function (ch,p,filter_GT_,meta22127){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22127 = meta22127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22126.cljs$lang$type = true;
cljs.core.async.t22126.cljs$lang$ctorStr = "cljs.core.async/t22126";
cljs.core.async.t22126.cljs$lang$ctorPrWriter = (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t22126");
});
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t22126.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t22126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22128){var self__ = this;
var _22128__$1 = this;return self__.meta22127;
});
cljs.core.async.t22126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22128,meta22127__$1){var self__ = this;
var _22128__$1 = this;return (new cljs.core.async.t22126(self__.ch,self__.p,self__.filter_GT_,meta22127__$1));
});
cljs.core.async.__GT_t22126 = (function __GT_t22126(ch__$1,p__$1,filter_GT___$1,meta22127){return (new cljs.core.async.t22126(ch__$1,p__$1,filter_GT___$1,meta22127));
});
}
return (new cljs.core.async.t22126(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14224__auto___22211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_22190){var state_val_22191 = (state_22190[1]);if((state_val_22191 === 1))
{var state_22190__$1 = state_22190;var statearr_22192_22212 = state_22190__$1;(statearr_22192_22212[2] = null);
(statearr_22192_22212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 2))
{var state_22190__$1 = state_22190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22190__$1,4,ch);
} else
{if((state_val_22191 === 3))
{var inst_22188 = (state_22190[2]);var state_22190__$1 = state_22190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22190__$1,inst_22188);
} else
{if((state_val_22191 === 4))
{var inst_22172 = (state_22190[7]);var inst_22172__$1 = (state_22190[2]);var inst_22173 = (inst_22172__$1 == null);var state_22190__$1 = (function (){var statearr_22193 = state_22190;(statearr_22193[7] = inst_22172__$1);
return statearr_22193;
})();if(cljs.core.truth_(inst_22173))
{var statearr_22194_22213 = state_22190__$1;(statearr_22194_22213[1] = 5);
} else
{var statearr_22195_22214 = state_22190__$1;(statearr_22195_22214[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 5))
{var inst_22175 = cljs.core.async.close_BANG_.call(null,out);var state_22190__$1 = state_22190;var statearr_22196_22215 = state_22190__$1;(statearr_22196_22215[2] = inst_22175);
(statearr_22196_22215[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 6))
{var inst_22172 = (state_22190[7]);var inst_22177 = p.call(null,inst_22172);var state_22190__$1 = state_22190;if(cljs.core.truth_(inst_22177))
{var statearr_22197_22216 = state_22190__$1;(statearr_22197_22216[1] = 8);
} else
{var statearr_22198_22217 = state_22190__$1;(statearr_22198_22217[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 7))
{var inst_22186 = (state_22190[2]);var state_22190__$1 = state_22190;var statearr_22199_22218 = state_22190__$1;(statearr_22199_22218[2] = inst_22186);
(statearr_22199_22218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 8))
{var inst_22172 = (state_22190[7]);var state_22190__$1 = state_22190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22190__$1,11,out,inst_22172);
} else
{if((state_val_22191 === 9))
{var state_22190__$1 = state_22190;var statearr_22200_22219 = state_22190__$1;(statearr_22200_22219[2] = null);
(statearr_22200_22219[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 10))
{var inst_22183 = (state_22190[2]);var state_22190__$1 = (function (){var statearr_22201 = state_22190;(statearr_22201[8] = inst_22183);
return statearr_22201;
})();var statearr_22202_22220 = state_22190__$1;(statearr_22202_22220[2] = null);
(statearr_22202_22220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22191 === 11))
{var inst_22180 = (state_22190[2]);var state_22190__$1 = state_22190;var statearr_22203_22221 = state_22190__$1;(statearr_22203_22221[2] = inst_22180);
(statearr_22203_22221[1] = 10);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_22207 = [null,null,null,null,null,null,null,null,null];(statearr_22207[0] = state_machine__14155__auto__);
(statearr_22207[1] = 1);
return statearr_22207;
});
var state_machine__14155__auto____1 = (function (state_22190){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_22190);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e22208){if((e22208 instanceof Object))
{var ex__14158__auto__ = e22208;var statearr_22209_22222 = state_22190;(statearr_22209_22222[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22223 = state_22190;
state_22190 = G__22223;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_22190){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_22190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_22210 = f__14225__auto__.call(null);(statearr_22210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___22211);
return statearr_22210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_22389){var state_val_22390 = (state_22389[1]);if((state_val_22390 === 1))
{var state_22389__$1 = state_22389;var statearr_22391_22432 = state_22389__$1;(statearr_22391_22432[2] = null);
(statearr_22391_22432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 2))
{var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22389__$1,4,in$);
} else
{if((state_val_22390 === 3))
{var inst_22387 = (state_22389[2]);var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22389__$1,inst_22387);
} else
{if((state_val_22390 === 4))
{var inst_22330 = (state_22389[7]);var inst_22330__$1 = (state_22389[2]);var inst_22331 = (inst_22330__$1 == null);var state_22389__$1 = (function (){var statearr_22392 = state_22389;(statearr_22392[7] = inst_22330__$1);
return statearr_22392;
})();if(cljs.core.truth_(inst_22331))
{var statearr_22393_22433 = state_22389__$1;(statearr_22393_22433[1] = 5);
} else
{var statearr_22394_22434 = state_22389__$1;(statearr_22394_22434[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 5))
{var inst_22333 = cljs.core.async.close_BANG_.call(null,out);var state_22389__$1 = state_22389;var statearr_22395_22435 = state_22389__$1;(statearr_22395_22435[2] = inst_22333);
(statearr_22395_22435[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 6))
{var inst_22330 = (state_22389[7]);var inst_22339 = f.call(null,inst_22330);var inst_22340 = cljs.core.seq.call(null,inst_22339);var inst_22341 = inst_22340;var inst_22342 = null;var inst_22343 = 0;var inst_22344 = 0;var state_22389__$1 = (function (){var statearr_22396 = state_22389;(statearr_22396[8] = inst_22341);
(statearr_22396[9] = inst_22344);
(statearr_22396[10] = inst_22343);
(statearr_22396[11] = inst_22342);
return statearr_22396;
})();var statearr_22397_22436 = state_22389__$1;(statearr_22397_22436[2] = null);
(statearr_22397_22436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 7))
{var inst_22385 = (state_22389[2]);var state_22389__$1 = state_22389;var statearr_22398_22437 = state_22389__$1;(statearr_22398_22437[2] = inst_22385);
(statearr_22398_22437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 8))
{var inst_22344 = (state_22389[9]);var inst_22343 = (state_22389[10]);var inst_22346 = (inst_22344 < inst_22343);var inst_22347 = inst_22346;var state_22389__$1 = state_22389;if(cljs.core.truth_(inst_22347))
{var statearr_22399_22438 = state_22389__$1;(statearr_22399_22438[1] = 10);
} else
{var statearr_22400_22439 = state_22389__$1;(statearr_22400_22439[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 9))
{var inst_22377 = (state_22389[2]);var inst_22378 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_22389__$1 = (function (){var statearr_22401 = state_22389;(statearr_22401[12] = inst_22377);
return statearr_22401;
})();if(cljs.core.truth_(inst_22378))
{var statearr_22402_22440 = state_22389__$1;(statearr_22402_22440[1] = 21);
} else
{var statearr_22403_22441 = state_22389__$1;(statearr_22403_22441[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 10))
{var inst_22344 = (state_22389[9]);var inst_22342 = (state_22389[11]);var inst_22349 = cljs.core._nth.call(null,inst_22342,inst_22344);var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22389__$1,13,out,inst_22349);
} else
{if((state_val_22390 === 11))
{var inst_22341 = (state_22389[8]);var inst_22355 = (state_22389[13]);var inst_22355__$1 = cljs.core.seq.call(null,inst_22341);var state_22389__$1 = (function (){var statearr_22407 = state_22389;(statearr_22407[13] = inst_22355__$1);
return statearr_22407;
})();if(inst_22355__$1)
{var statearr_22408_22442 = state_22389__$1;(statearr_22408_22442[1] = 14);
} else
{var statearr_22409_22443 = state_22389__$1;(statearr_22409_22443[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 12))
{var inst_22375 = (state_22389[2]);var state_22389__$1 = state_22389;var statearr_22410_22444 = state_22389__$1;(statearr_22410_22444[2] = inst_22375);
(statearr_22410_22444[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 13))
{var inst_22341 = (state_22389[8]);var inst_22344 = (state_22389[9]);var inst_22343 = (state_22389[10]);var inst_22342 = (state_22389[11]);var inst_22351 = (state_22389[2]);var inst_22352 = (inst_22344 + 1);var tmp22404 = inst_22341;var tmp22405 = inst_22343;var tmp22406 = inst_22342;var inst_22341__$1 = tmp22404;var inst_22342__$1 = tmp22406;var inst_22343__$1 = tmp22405;var inst_22344__$1 = inst_22352;var state_22389__$1 = (function (){var statearr_22411 = state_22389;(statearr_22411[8] = inst_22341__$1);
(statearr_22411[14] = inst_22351);
(statearr_22411[9] = inst_22344__$1);
(statearr_22411[10] = inst_22343__$1);
(statearr_22411[11] = inst_22342__$1);
return statearr_22411;
})();var statearr_22412_22445 = state_22389__$1;(statearr_22412_22445[2] = null);
(statearr_22412_22445[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 14))
{var inst_22355 = (state_22389[13]);var inst_22357 = cljs.core.chunked_seq_QMARK_.call(null,inst_22355);var state_22389__$1 = state_22389;if(inst_22357)
{var statearr_22413_22446 = state_22389__$1;(statearr_22413_22446[1] = 17);
} else
{var statearr_22414_22447 = state_22389__$1;(statearr_22414_22447[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 15))
{var state_22389__$1 = state_22389;var statearr_22415_22448 = state_22389__$1;(statearr_22415_22448[2] = null);
(statearr_22415_22448[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 16))
{var inst_22373 = (state_22389[2]);var state_22389__$1 = state_22389;var statearr_22416_22449 = state_22389__$1;(statearr_22416_22449[2] = inst_22373);
(statearr_22416_22449[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 17))
{var inst_22355 = (state_22389[13]);var inst_22359 = cljs.core.chunk_first.call(null,inst_22355);var inst_22360 = cljs.core.chunk_rest.call(null,inst_22355);var inst_22361 = cljs.core.count.call(null,inst_22359);var inst_22341 = inst_22360;var inst_22342 = inst_22359;var inst_22343 = inst_22361;var inst_22344 = 0;var state_22389__$1 = (function (){var statearr_22417 = state_22389;(statearr_22417[8] = inst_22341);
(statearr_22417[9] = inst_22344);
(statearr_22417[10] = inst_22343);
(statearr_22417[11] = inst_22342);
return statearr_22417;
})();var statearr_22418_22450 = state_22389__$1;(statearr_22418_22450[2] = null);
(statearr_22418_22450[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 18))
{var inst_22355 = (state_22389[13]);var inst_22364 = cljs.core.first.call(null,inst_22355);var state_22389__$1 = state_22389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22389__$1,20,out,inst_22364);
} else
{if((state_val_22390 === 19))
{var inst_22370 = (state_22389[2]);var state_22389__$1 = state_22389;var statearr_22419_22451 = state_22389__$1;(statearr_22419_22451[2] = inst_22370);
(statearr_22419_22451[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 20))
{var inst_22355 = (state_22389[13]);var inst_22366 = (state_22389[2]);var inst_22367 = cljs.core.next.call(null,inst_22355);var inst_22341 = inst_22367;var inst_22342 = null;var inst_22343 = 0;var inst_22344 = 0;var state_22389__$1 = (function (){var statearr_22420 = state_22389;(statearr_22420[8] = inst_22341);
(statearr_22420[9] = inst_22344);
(statearr_22420[10] = inst_22343);
(statearr_22420[11] = inst_22342);
(statearr_22420[15] = inst_22366);
return statearr_22420;
})();var statearr_22421_22452 = state_22389__$1;(statearr_22421_22452[2] = null);
(statearr_22421_22452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 21))
{var state_22389__$1 = state_22389;var statearr_22422_22453 = state_22389__$1;(statearr_22422_22453[2] = null);
(statearr_22422_22453[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 22))
{var state_22389__$1 = state_22389;var statearr_22423_22454 = state_22389__$1;(statearr_22423_22454[2] = null);
(statearr_22423_22454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22390 === 23))
{var inst_22383 = (state_22389[2]);var state_22389__$1 = state_22389;var statearr_22424_22455 = state_22389__$1;(statearr_22424_22455[2] = inst_22383);
(statearr_22424_22455[1] = 7);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_22428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22428[0] = state_machine__14155__auto__);
(statearr_22428[1] = 1);
return statearr_22428;
});
var state_machine__14155__auto____1 = (function (state_22389){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_22389);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e22429){if((e22429 instanceof Object))
{var ex__14158__auto__ = e22429;var statearr_22430_22456 = state_22389;(statearr_22430_22456[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22457 = state_22389;
state_22389 = G__22457;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_22389){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_22389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_22431 = f__14225__auto__.call(null);(statearr_22431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_22431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
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
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__14224__auto___22552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_22528){var state_val_22529 = (state_22528[1]);if((state_val_22529 === 1))
{var state_22528__$1 = state_22528;var statearr_22530_22553 = state_22528__$1;(statearr_22530_22553[2] = null);
(statearr_22530_22553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 2))
{var state_22528__$1 = state_22528;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22528__$1,4,from);
} else
{if((state_val_22529 === 3))
{var inst_22526 = (state_22528[2]);var state_22528__$1 = state_22528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22528__$1,inst_22526);
} else
{if((state_val_22529 === 4))
{var inst_22507 = (state_22528[7]);var inst_22507__$1 = (state_22528[2]);var inst_22508 = (inst_22507__$1 == null);var state_22528__$1 = (function (){var statearr_22531 = state_22528;(statearr_22531[7] = inst_22507__$1);
return statearr_22531;
})();if(cljs.core.truth_(inst_22508))
{var statearr_22532_22554 = state_22528__$1;(statearr_22532_22554[1] = 5);
} else
{var statearr_22533_22555 = state_22528__$1;(statearr_22533_22555[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 5))
{var state_22528__$1 = state_22528;if(cljs.core.truth_(close_QMARK_))
{var statearr_22534_22556 = state_22528__$1;(statearr_22534_22556[1] = 8);
} else
{var statearr_22535_22557 = state_22528__$1;(statearr_22535_22557[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 6))
{var inst_22507 = (state_22528[7]);var state_22528__$1 = state_22528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22528__$1,11,to,inst_22507);
} else
{if((state_val_22529 === 7))
{var inst_22524 = (state_22528[2]);var state_22528__$1 = state_22528;var statearr_22536_22558 = state_22528__$1;(statearr_22536_22558[2] = inst_22524);
(statearr_22536_22558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 8))
{var inst_22511 = cljs.core.async.close_BANG_.call(null,to);var state_22528__$1 = state_22528;var statearr_22537_22559 = state_22528__$1;(statearr_22537_22559[2] = inst_22511);
(statearr_22537_22559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 9))
{var state_22528__$1 = state_22528;var statearr_22538_22560 = state_22528__$1;(statearr_22538_22560[2] = null);
(statearr_22538_22560[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 10))
{var inst_22514 = (state_22528[2]);var state_22528__$1 = state_22528;var statearr_22539_22561 = state_22528__$1;(statearr_22539_22561[2] = inst_22514);
(statearr_22539_22561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 11))
{var inst_22517 = (state_22528[2]);var state_22528__$1 = state_22528;if(cljs.core.truth_(inst_22517))
{var statearr_22540_22562 = state_22528__$1;(statearr_22540_22562[1] = 12);
} else
{var statearr_22541_22563 = state_22528__$1;(statearr_22541_22563[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 12))
{var state_22528__$1 = state_22528;var statearr_22542_22564 = state_22528__$1;(statearr_22542_22564[2] = null);
(statearr_22542_22564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 13))
{var state_22528__$1 = state_22528;var statearr_22543_22565 = state_22528__$1;(statearr_22543_22565[2] = null);
(statearr_22543_22565[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22529 === 14))
{var inst_22522 = (state_22528[2]);var state_22528__$1 = state_22528;var statearr_22544_22566 = state_22528__$1;(statearr_22544_22566[2] = inst_22522);
(statearr_22544_22566[1] = 7);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_22548 = [null,null,null,null,null,null,null,null];(statearr_22548[0] = state_machine__14155__auto__);
(statearr_22548[1] = 1);
return statearr_22548;
});
var state_machine__14155__auto____1 = (function (state_22528){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_22528);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e22549){if((e22549 instanceof Object))
{var ex__14158__auto__ = e22549;var statearr_22550_22567 = state_22528;(statearr_22550_22567[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22568 = state_22528;
state_22528 = G__22568;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_22528){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_22528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_22551 = f__14225__auto__.call(null);(statearr_22551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___22552);
return statearr_22551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__14224__auto___22669 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_22644){var state_val_22645 = (state_22644[1]);if((state_val_22645 === 1))
{var state_22644__$1 = state_22644;var statearr_22646_22670 = state_22644__$1;(statearr_22646_22670[2] = null);
(statearr_22646_22670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 2))
{var state_22644__$1 = state_22644;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22644__$1,4,ch);
} else
{if((state_val_22645 === 3))
{var inst_22642 = (state_22644[2]);var state_22644__$1 = state_22644;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22644__$1,inst_22642);
} else
{if((state_val_22645 === 4))
{var inst_22621 = (state_22644[7]);var inst_22621__$1 = (state_22644[2]);var inst_22622 = (inst_22621__$1 == null);var state_22644__$1 = (function (){var statearr_22647 = state_22644;(statearr_22647[7] = inst_22621__$1);
return statearr_22647;
})();if(cljs.core.truth_(inst_22622))
{var statearr_22648_22671 = state_22644__$1;(statearr_22648_22671[1] = 5);
} else
{var statearr_22649_22672 = state_22644__$1;(statearr_22649_22672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 5))
{var inst_22624 = cljs.core.async.close_BANG_.call(null,tc);var inst_22625 = cljs.core.async.close_BANG_.call(null,fc);var state_22644__$1 = (function (){var statearr_22650 = state_22644;(statearr_22650[8] = inst_22624);
return statearr_22650;
})();var statearr_22651_22673 = state_22644__$1;(statearr_22651_22673[2] = inst_22625);
(statearr_22651_22673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 6))
{var inst_22621 = (state_22644[7]);var inst_22627 = p.call(null,inst_22621);var state_22644__$1 = state_22644;if(cljs.core.truth_(inst_22627))
{var statearr_22652_22674 = state_22644__$1;(statearr_22652_22674[1] = 9);
} else
{var statearr_22653_22675 = state_22644__$1;(statearr_22653_22675[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 7))
{var inst_22640 = (state_22644[2]);var state_22644__$1 = state_22644;var statearr_22654_22676 = state_22644__$1;(statearr_22654_22676[2] = inst_22640);
(statearr_22654_22676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 8))
{var inst_22633 = (state_22644[2]);var state_22644__$1 = state_22644;if(cljs.core.truth_(inst_22633))
{var statearr_22655_22677 = state_22644__$1;(statearr_22655_22677[1] = 12);
} else
{var statearr_22656_22678 = state_22644__$1;(statearr_22656_22678[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 9))
{var state_22644__$1 = state_22644;var statearr_22657_22679 = state_22644__$1;(statearr_22657_22679[2] = tc);
(statearr_22657_22679[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 10))
{var state_22644__$1 = state_22644;var statearr_22658_22680 = state_22644__$1;(statearr_22658_22680[2] = fc);
(statearr_22658_22680[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 11))
{var inst_22621 = (state_22644[7]);var inst_22631 = (state_22644[2]);var state_22644__$1 = state_22644;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22644__$1,8,inst_22631,inst_22621);
} else
{if((state_val_22645 === 12))
{var state_22644__$1 = state_22644;var statearr_22659_22681 = state_22644__$1;(statearr_22659_22681[2] = null);
(statearr_22659_22681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 13))
{var state_22644__$1 = state_22644;var statearr_22660_22682 = state_22644__$1;(statearr_22660_22682[2] = null);
(statearr_22660_22682[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22645 === 14))
{var inst_22638 = (state_22644[2]);var state_22644__$1 = state_22644;var statearr_22661_22683 = state_22644__$1;(statearr_22661_22683[2] = inst_22638);
(statearr_22661_22683[1] = 7);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_22665 = [null,null,null,null,null,null,null,null,null];(statearr_22665[0] = state_machine__14155__auto__);
(statearr_22665[1] = 1);
return statearr_22665;
});
var state_machine__14155__auto____1 = (function (state_22644){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_22644);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e22666){if((e22666 instanceof Object))
{var ex__14158__auto__ = e22666;var statearr_22667_22684 = state_22644;(statearr_22667_22684[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22644);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22685 = state_22644;
state_22644 = G__22685;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_22644){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_22644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_22668 = f__14225__auto__.call(null);(statearr_22668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___22669);
return statearr_22668;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_22732){var state_val_22733 = (state_22732[1]);if((state_val_22733 === 7))
{var inst_22728 = (state_22732[2]);var state_22732__$1 = state_22732;var statearr_22734_22750 = state_22732__$1;(statearr_22734_22750[2] = inst_22728);
(statearr_22734_22750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22733 === 6))
{var inst_22718 = (state_22732[7]);var inst_22721 = (state_22732[8]);var inst_22725 = f.call(null,inst_22718,inst_22721);var inst_22718__$1 = inst_22725;var state_22732__$1 = (function (){var statearr_22735 = state_22732;(statearr_22735[7] = inst_22718__$1);
return statearr_22735;
})();var statearr_22736_22751 = state_22732__$1;(statearr_22736_22751[2] = null);
(statearr_22736_22751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22733 === 5))
{var inst_22718 = (state_22732[7]);var state_22732__$1 = state_22732;var statearr_22737_22752 = state_22732__$1;(statearr_22737_22752[2] = inst_22718);
(statearr_22737_22752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22733 === 4))
{var inst_22721 = (state_22732[8]);var inst_22721__$1 = (state_22732[2]);var inst_22722 = (inst_22721__$1 == null);var state_22732__$1 = (function (){var statearr_22738 = state_22732;(statearr_22738[8] = inst_22721__$1);
return statearr_22738;
})();if(cljs.core.truth_(inst_22722))
{var statearr_22739_22753 = state_22732__$1;(statearr_22739_22753[1] = 5);
} else
{var statearr_22740_22754 = state_22732__$1;(statearr_22740_22754[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22733 === 3))
{var inst_22730 = (state_22732[2]);var state_22732__$1 = state_22732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22732__$1,inst_22730);
} else
{if((state_val_22733 === 2))
{var state_22732__$1 = state_22732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22732__$1,4,ch);
} else
{if((state_val_22733 === 1))
{var inst_22718 = init;var state_22732__$1 = (function (){var statearr_22741 = state_22732;(statearr_22741[7] = inst_22718);
return statearr_22741;
})();var statearr_22742_22755 = state_22732__$1;(statearr_22742_22755[2] = null);
(statearr_22742_22755[1] = 2);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_22746 = [null,null,null,null,null,null,null,null,null];(statearr_22746[0] = state_machine__14155__auto__);
(statearr_22746[1] = 1);
return statearr_22746;
});
var state_machine__14155__auto____1 = (function (state_22732){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_22732);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e22747){if((e22747 instanceof Object))
{var ex__14158__auto__ = e22747;var statearr_22748_22756 = state_22732;(statearr_22748_22756[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22732);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22757 = state_22732;
state_22732 = G__22757;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_22732){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_22732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_22749 = f__14225__auto__.call(null);(statearr_22749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_22749;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_22831){var state_val_22832 = (state_22831[1]);if((state_val_22832 === 1))
{var inst_22807 = cljs.core.seq.call(null,coll);var inst_22808 = inst_22807;var state_22831__$1 = (function (){var statearr_22833 = state_22831;(statearr_22833[7] = inst_22808);
return statearr_22833;
})();var statearr_22834_22856 = state_22831__$1;(statearr_22834_22856[2] = null);
(statearr_22834_22856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 2))
{var inst_22808 = (state_22831[7]);var state_22831__$1 = state_22831;if(cljs.core.truth_(inst_22808))
{var statearr_22835_22857 = state_22831__$1;(statearr_22835_22857[1] = 4);
} else
{var statearr_22836_22858 = state_22831__$1;(statearr_22836_22858[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 3))
{var inst_22829 = (state_22831[2]);var state_22831__$1 = state_22831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22831__$1,inst_22829);
} else
{if((state_val_22832 === 4))
{var inst_22808 = (state_22831[7]);var inst_22811 = cljs.core.first.call(null,inst_22808);var state_22831__$1 = state_22831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22831__$1,7,ch,inst_22811);
} else
{if((state_val_22832 === 5))
{var inst_22808 = (state_22831[7]);var state_22831__$1 = state_22831;var statearr_22837_22859 = state_22831__$1;(statearr_22837_22859[2] = inst_22808);
(statearr_22837_22859[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 6))
{var inst_22816 = (state_22831[2]);var state_22831__$1 = state_22831;if(cljs.core.truth_(inst_22816))
{var statearr_22838_22860 = state_22831__$1;(statearr_22838_22860[1] = 8);
} else
{var statearr_22839_22861 = state_22831__$1;(statearr_22839_22861[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 7))
{var inst_22813 = (state_22831[2]);var state_22831__$1 = state_22831;var statearr_22840_22862 = state_22831__$1;(statearr_22840_22862[2] = inst_22813);
(statearr_22840_22862[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 8))
{var inst_22808 = (state_22831[7]);var inst_22818 = cljs.core.next.call(null,inst_22808);var inst_22808__$1 = inst_22818;var state_22831__$1 = (function (){var statearr_22841 = state_22831;(statearr_22841[7] = inst_22808__$1);
return statearr_22841;
})();var statearr_22842_22863 = state_22831__$1;(statearr_22842_22863[2] = null);
(statearr_22842_22863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 9))
{var state_22831__$1 = state_22831;if(cljs.core.truth_(close_QMARK_))
{var statearr_22843_22864 = state_22831__$1;(statearr_22843_22864[1] = 11);
} else
{var statearr_22844_22865 = state_22831__$1;(statearr_22844_22865[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 10))
{var inst_22827 = (state_22831[2]);var state_22831__$1 = state_22831;var statearr_22845_22866 = state_22831__$1;(statearr_22845_22866[2] = inst_22827);
(statearr_22845_22866[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 11))
{var inst_22822 = cljs.core.async.close_BANG_.call(null,ch);var state_22831__$1 = state_22831;var statearr_22846_22867 = state_22831__$1;(statearr_22846_22867[2] = inst_22822);
(statearr_22846_22867[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 12))
{var state_22831__$1 = state_22831;var statearr_22847_22868 = state_22831__$1;(statearr_22847_22868[2] = null);
(statearr_22847_22868[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22832 === 13))
{var inst_22825 = (state_22831[2]);var state_22831__$1 = state_22831;var statearr_22848_22869 = state_22831__$1;(statearr_22848_22869[2] = inst_22825);
(statearr_22848_22869[1] = 10);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_22852 = [null,null,null,null,null,null,null,null];(statearr_22852[0] = state_machine__14155__auto__);
(statearr_22852[1] = 1);
return statearr_22852;
});
var state_machine__14155__auto____1 = (function (state_22831){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_22831);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e22853){if((e22853 instanceof Object))
{var ex__14158__auto__ = e22853;var statearr_22854_22870 = state_22831;(statearr_22854_22870[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22871 = state_22831;
state_22831 = G__22871;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_22831){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_22831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_22855 = f__14225__auto__.call(null);(statearr_22855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_22855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
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
cljs.core.async.Mux = (function (){var obj22873 = {};return obj22873;
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
cljs.core.async.Mult = (function (){var obj22875 = {};return obj22875;
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
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23097 = (function (cs,ch,mult,meta23098){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23098 = meta23098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23097.cljs$lang$type = true;
cljs.core.async.t23097.cljs$lang$ctorStr = "cljs.core.async/t23097";
cljs.core.async.t23097.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t23097");
});})(cs))
;
cljs.core.async.t23097.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23097.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23097.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23097.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23097.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23099){var self__ = this;
var _23099__$1 = this;return self__.meta23098;
});})(cs))
;
cljs.core.async.t23097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23099,meta23098__$1){var self__ = this;
var _23099__$1 = this;return (new cljs.core.async.t23097(self__.cs,self__.ch,self__.mult,meta23098__$1));
});})(cs))
;
cljs.core.async.__GT_t23097 = ((function (cs){
return (function __GT_t23097(cs__$1,ch__$1,mult__$1,meta23098){return (new cljs.core.async.t23097(cs__$1,ch__$1,mult__$1,meta23098));
});})(cs))
;
}
return (new cljs.core.async.t23097(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__14224__auto___23318 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_23230){var state_val_23231 = (state_23230[1]);if((state_val_23231 === 32))
{var inst_23171 = (state_23230[7]);var inst_23170 = (state_23230[8]);var inst_23173 = (state_23230[9]);var inst_23172 = (state_23230[10]);var inst_23185 = (state_23230[2]);var inst_23186 = (inst_23173 + 1);var tmp23232 = inst_23171;var tmp23233 = inst_23170;var tmp23234 = inst_23172;var inst_23170__$1 = tmp23233;var inst_23171__$1 = tmp23232;var inst_23172__$1 = tmp23234;var inst_23173__$1 = inst_23186;var state_23230__$1 = (function (){var statearr_23235 = state_23230;(statearr_23235[7] = inst_23171__$1);
(statearr_23235[8] = inst_23170__$1);
(statearr_23235[9] = inst_23173__$1);
(statearr_23235[10] = inst_23172__$1);
(statearr_23235[11] = inst_23185);
return statearr_23235;
})();var statearr_23236_23319 = state_23230__$1;(statearr_23236_23319[2] = null);
(statearr_23236_23319[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 1))
{var state_23230__$1 = state_23230;var statearr_23237_23320 = state_23230__$1;(statearr_23237_23320[2] = null);
(statearr_23237_23320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 33))
{var inst_23189 = (state_23230[12]);var inst_23191 = cljs.core.chunked_seq_QMARK_.call(null,inst_23189);var state_23230__$1 = state_23230;if(inst_23191)
{var statearr_23238_23321 = state_23230__$1;(statearr_23238_23321[1] = 36);
} else
{var statearr_23239_23322 = state_23230__$1;(statearr_23239_23322[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 2))
{var state_23230__$1 = state_23230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23230__$1,4,ch);
} else
{if((state_val_23231 === 34))
{var state_23230__$1 = state_23230;var statearr_23240_23323 = state_23230__$1;(statearr_23240_23323[2] = null);
(statearr_23240_23323[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 3))
{var inst_23228 = (state_23230[2]);var state_23230__$1 = state_23230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23230__$1,inst_23228);
} else
{if((state_val_23231 === 35))
{var inst_23212 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23241_23324 = state_23230__$1;(statearr_23241_23324[2] = inst_23212);
(statearr_23241_23324[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 4))
{var inst_23102 = (state_23230[13]);var inst_23102__$1 = (state_23230[2]);var inst_23103 = (inst_23102__$1 == null);var state_23230__$1 = (function (){var statearr_23242 = state_23230;(statearr_23242[13] = inst_23102__$1);
return statearr_23242;
})();if(cljs.core.truth_(inst_23103))
{var statearr_23243_23325 = state_23230__$1;(statearr_23243_23325[1] = 5);
} else
{var statearr_23244_23326 = state_23230__$1;(statearr_23244_23326[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 36))
{var inst_23189 = (state_23230[12]);var inst_23193 = cljs.core.chunk_first.call(null,inst_23189);var inst_23194 = cljs.core.chunk_rest.call(null,inst_23189);var inst_23195 = cljs.core.count.call(null,inst_23193);var inst_23170 = inst_23194;var inst_23171 = inst_23193;var inst_23172 = inst_23195;var inst_23173 = 0;var state_23230__$1 = (function (){var statearr_23245 = state_23230;(statearr_23245[7] = inst_23171);
(statearr_23245[8] = inst_23170);
(statearr_23245[9] = inst_23173);
(statearr_23245[10] = inst_23172);
return statearr_23245;
})();var statearr_23246_23327 = state_23230__$1;(statearr_23246_23327[2] = null);
(statearr_23246_23327[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 5))
{var inst_23109 = cljs.core.deref.call(null,cs);var inst_23110 = cljs.core.seq.call(null,inst_23109);var inst_23111 = inst_23110;var inst_23112 = null;var inst_23113 = 0;var inst_23114 = 0;var state_23230__$1 = (function (){var statearr_23247 = state_23230;(statearr_23247[14] = inst_23111);
(statearr_23247[15] = inst_23114);
(statearr_23247[16] = inst_23113);
(statearr_23247[17] = inst_23112);
return statearr_23247;
})();var statearr_23248_23328 = state_23230__$1;(statearr_23248_23328[2] = null);
(statearr_23248_23328[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 37))
{var inst_23198 = (state_23230[18]);var inst_23102 = (state_23230[13]);var inst_23189 = (state_23230[12]);var inst_23198__$1 = cljs.core.first.call(null,inst_23189);var inst_23199 = cljs.core.async.put_BANG_.call(null,inst_23198__$1,inst_23102,done);var state_23230__$1 = (function (){var statearr_23249 = state_23230;(statearr_23249[18] = inst_23198__$1);
return statearr_23249;
})();if(cljs.core.truth_(inst_23199))
{var statearr_23250_23329 = state_23230__$1;(statearr_23250_23329[1] = 39);
} else
{var statearr_23251_23330 = state_23230__$1;(statearr_23251_23330[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 6))
{var inst_23162 = (state_23230[19]);var inst_23161 = cljs.core.deref.call(null,cs);var inst_23162__$1 = cljs.core.keys.call(null,inst_23161);var inst_23163 = cljs.core.count.call(null,inst_23162__$1);var inst_23164 = cljs.core.reset_BANG_.call(null,dctr,inst_23163);var inst_23169 = cljs.core.seq.call(null,inst_23162__$1);var inst_23170 = inst_23169;var inst_23171 = null;var inst_23172 = 0;var inst_23173 = 0;var state_23230__$1 = (function (){var statearr_23252 = state_23230;(statearr_23252[20] = inst_23164);
(statearr_23252[19] = inst_23162__$1);
(statearr_23252[7] = inst_23171);
(statearr_23252[8] = inst_23170);
(statearr_23252[9] = inst_23173);
(statearr_23252[10] = inst_23172);
return statearr_23252;
})();var statearr_23253_23331 = state_23230__$1;(statearr_23253_23331[2] = null);
(statearr_23253_23331[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 38))
{var inst_23209 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23254_23332 = state_23230__$1;(statearr_23254_23332[2] = inst_23209);
(statearr_23254_23332[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 7))
{var inst_23226 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23255_23333 = state_23230__$1;(statearr_23255_23333[2] = inst_23226);
(statearr_23255_23333[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 39))
{var state_23230__$1 = state_23230;var statearr_23256_23334 = state_23230__$1;(statearr_23256_23334[2] = null);
(statearr_23256_23334[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 8))
{var inst_23114 = (state_23230[15]);var inst_23113 = (state_23230[16]);var inst_23116 = (inst_23114 < inst_23113);var inst_23117 = inst_23116;var state_23230__$1 = state_23230;if(cljs.core.truth_(inst_23117))
{var statearr_23257_23335 = state_23230__$1;(statearr_23257_23335[1] = 10);
} else
{var statearr_23258_23336 = state_23230__$1;(statearr_23258_23336[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 40))
{var inst_23198 = (state_23230[18]);var inst_23202 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23203 = cljs.core.async.untap_STAR_.call(null,m,inst_23198);var state_23230__$1 = (function (){var statearr_23259 = state_23230;(statearr_23259[21] = inst_23202);
return statearr_23259;
})();var statearr_23260_23337 = state_23230__$1;(statearr_23260_23337[2] = inst_23203);
(statearr_23260_23337[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 9))
{var inst_23159 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23261_23338 = state_23230__$1;(statearr_23261_23338[2] = inst_23159);
(statearr_23261_23338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 41))
{var inst_23189 = (state_23230[12]);var inst_23205 = (state_23230[2]);var inst_23206 = cljs.core.next.call(null,inst_23189);var inst_23170 = inst_23206;var inst_23171 = null;var inst_23172 = 0;var inst_23173 = 0;var state_23230__$1 = (function (){var statearr_23262 = state_23230;(statearr_23262[7] = inst_23171);
(statearr_23262[8] = inst_23170);
(statearr_23262[9] = inst_23173);
(statearr_23262[10] = inst_23172);
(statearr_23262[22] = inst_23205);
return statearr_23262;
})();var statearr_23263_23339 = state_23230__$1;(statearr_23263_23339[2] = null);
(statearr_23263_23339[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 10))
{var inst_23114 = (state_23230[15]);var inst_23112 = (state_23230[17]);var inst_23120 = cljs.core._nth.call(null,inst_23112,inst_23114);var inst_23121 = cljs.core.nth.call(null,inst_23120,0,null);var inst_23122 = cljs.core.nth.call(null,inst_23120,1,null);var state_23230__$1 = (function (){var statearr_23264 = state_23230;(statearr_23264[23] = inst_23121);
return statearr_23264;
})();if(cljs.core.truth_(inst_23122))
{var statearr_23265_23340 = state_23230__$1;(statearr_23265_23340[1] = 13);
} else
{var statearr_23266_23341 = state_23230__$1;(statearr_23266_23341[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 42))
{var state_23230__$1 = state_23230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23230__$1,45,dchan);
} else
{if((state_val_23231 === 11))
{var inst_23111 = (state_23230[14]);var inst_23131 = (state_23230[24]);var inst_23131__$1 = cljs.core.seq.call(null,inst_23111);var state_23230__$1 = (function (){var statearr_23267 = state_23230;(statearr_23267[24] = inst_23131__$1);
return statearr_23267;
})();if(inst_23131__$1)
{var statearr_23268_23342 = state_23230__$1;(statearr_23268_23342[1] = 16);
} else
{var statearr_23269_23343 = state_23230__$1;(statearr_23269_23343[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 43))
{var state_23230__$1 = state_23230;var statearr_23270_23344 = state_23230__$1;(statearr_23270_23344[2] = null);
(statearr_23270_23344[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 12))
{var inst_23157 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23271_23345 = state_23230__$1;(statearr_23271_23345[2] = inst_23157);
(statearr_23271_23345[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 44))
{var inst_23223 = (state_23230[2]);var state_23230__$1 = (function (){var statearr_23272 = state_23230;(statearr_23272[25] = inst_23223);
return statearr_23272;
})();var statearr_23273_23346 = state_23230__$1;(statearr_23273_23346[2] = null);
(statearr_23273_23346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 13))
{var inst_23121 = (state_23230[23]);var inst_23124 = cljs.core.async.close_BANG_.call(null,inst_23121);var state_23230__$1 = state_23230;var statearr_23274_23347 = state_23230__$1;(statearr_23274_23347[2] = inst_23124);
(statearr_23274_23347[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 45))
{var inst_23220 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23278_23348 = state_23230__$1;(statearr_23278_23348[2] = inst_23220);
(statearr_23278_23348[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 14))
{var state_23230__$1 = state_23230;var statearr_23279_23349 = state_23230__$1;(statearr_23279_23349[2] = null);
(statearr_23279_23349[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 15))
{var inst_23111 = (state_23230[14]);var inst_23114 = (state_23230[15]);var inst_23113 = (state_23230[16]);var inst_23112 = (state_23230[17]);var inst_23127 = (state_23230[2]);var inst_23128 = (inst_23114 + 1);var tmp23275 = inst_23111;var tmp23276 = inst_23113;var tmp23277 = inst_23112;var inst_23111__$1 = tmp23275;var inst_23112__$1 = tmp23277;var inst_23113__$1 = tmp23276;var inst_23114__$1 = inst_23128;var state_23230__$1 = (function (){var statearr_23280 = state_23230;(statearr_23280[14] = inst_23111__$1);
(statearr_23280[15] = inst_23114__$1);
(statearr_23280[16] = inst_23113__$1);
(statearr_23280[17] = inst_23112__$1);
(statearr_23280[26] = inst_23127);
return statearr_23280;
})();var statearr_23281_23350 = state_23230__$1;(statearr_23281_23350[2] = null);
(statearr_23281_23350[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 16))
{var inst_23131 = (state_23230[24]);var inst_23133 = cljs.core.chunked_seq_QMARK_.call(null,inst_23131);var state_23230__$1 = state_23230;if(inst_23133)
{var statearr_23282_23351 = state_23230__$1;(statearr_23282_23351[1] = 19);
} else
{var statearr_23283_23352 = state_23230__$1;(statearr_23283_23352[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 17))
{var state_23230__$1 = state_23230;var statearr_23284_23353 = state_23230__$1;(statearr_23284_23353[2] = null);
(statearr_23284_23353[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 18))
{var inst_23155 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23285_23354 = state_23230__$1;(statearr_23285_23354[2] = inst_23155);
(statearr_23285_23354[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 19))
{var inst_23131 = (state_23230[24]);var inst_23135 = cljs.core.chunk_first.call(null,inst_23131);var inst_23136 = cljs.core.chunk_rest.call(null,inst_23131);var inst_23137 = cljs.core.count.call(null,inst_23135);var inst_23111 = inst_23136;var inst_23112 = inst_23135;var inst_23113 = inst_23137;var inst_23114 = 0;var state_23230__$1 = (function (){var statearr_23286 = state_23230;(statearr_23286[14] = inst_23111);
(statearr_23286[15] = inst_23114);
(statearr_23286[16] = inst_23113);
(statearr_23286[17] = inst_23112);
return statearr_23286;
})();var statearr_23287_23355 = state_23230__$1;(statearr_23287_23355[2] = null);
(statearr_23287_23355[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 20))
{var inst_23131 = (state_23230[24]);var inst_23141 = cljs.core.first.call(null,inst_23131);var inst_23142 = cljs.core.nth.call(null,inst_23141,0,null);var inst_23143 = cljs.core.nth.call(null,inst_23141,1,null);var state_23230__$1 = (function (){var statearr_23288 = state_23230;(statearr_23288[27] = inst_23142);
return statearr_23288;
})();if(cljs.core.truth_(inst_23143))
{var statearr_23289_23356 = state_23230__$1;(statearr_23289_23356[1] = 22);
} else
{var statearr_23290_23357 = state_23230__$1;(statearr_23290_23357[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 21))
{var inst_23152 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23291_23358 = state_23230__$1;(statearr_23291_23358[2] = inst_23152);
(statearr_23291_23358[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 22))
{var inst_23142 = (state_23230[27]);var inst_23145 = cljs.core.async.close_BANG_.call(null,inst_23142);var state_23230__$1 = state_23230;var statearr_23292_23359 = state_23230__$1;(statearr_23292_23359[2] = inst_23145);
(statearr_23292_23359[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 23))
{var state_23230__$1 = state_23230;var statearr_23293_23360 = state_23230__$1;(statearr_23293_23360[2] = null);
(statearr_23293_23360[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 24))
{var inst_23131 = (state_23230[24]);var inst_23148 = (state_23230[2]);var inst_23149 = cljs.core.next.call(null,inst_23131);var inst_23111 = inst_23149;var inst_23112 = null;var inst_23113 = 0;var inst_23114 = 0;var state_23230__$1 = (function (){var statearr_23294 = state_23230;(statearr_23294[14] = inst_23111);
(statearr_23294[15] = inst_23114);
(statearr_23294[16] = inst_23113);
(statearr_23294[17] = inst_23112);
(statearr_23294[28] = inst_23148);
return statearr_23294;
})();var statearr_23295_23361 = state_23230__$1;(statearr_23295_23361[2] = null);
(statearr_23295_23361[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 25))
{var inst_23173 = (state_23230[9]);var inst_23172 = (state_23230[10]);var inst_23175 = (inst_23173 < inst_23172);var inst_23176 = inst_23175;var state_23230__$1 = state_23230;if(cljs.core.truth_(inst_23176))
{var statearr_23296_23362 = state_23230__$1;(statearr_23296_23362[1] = 27);
} else
{var statearr_23297_23363 = state_23230__$1;(statearr_23297_23363[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 26))
{var inst_23162 = (state_23230[19]);var inst_23216 = (state_23230[2]);var inst_23217 = cljs.core.seq.call(null,inst_23162);var state_23230__$1 = (function (){var statearr_23298 = state_23230;(statearr_23298[29] = inst_23216);
return statearr_23298;
})();if(inst_23217)
{var statearr_23299_23364 = state_23230__$1;(statearr_23299_23364[1] = 42);
} else
{var statearr_23300_23365 = state_23230__$1;(statearr_23300_23365[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 27))
{var inst_23171 = (state_23230[7]);var inst_23102 = (state_23230[13]);var inst_23173 = (state_23230[9]);var inst_23178 = (state_23230[30]);var inst_23178__$1 = cljs.core._nth.call(null,inst_23171,inst_23173);var inst_23179 = cljs.core.async.put_BANG_.call(null,inst_23178__$1,inst_23102,done);var state_23230__$1 = (function (){var statearr_23301 = state_23230;(statearr_23301[30] = inst_23178__$1);
return statearr_23301;
})();if(cljs.core.truth_(inst_23179))
{var statearr_23302_23366 = state_23230__$1;(statearr_23302_23366[1] = 30);
} else
{var statearr_23303_23367 = state_23230__$1;(statearr_23303_23367[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 28))
{var inst_23170 = (state_23230[8]);var inst_23189 = (state_23230[12]);var inst_23189__$1 = cljs.core.seq.call(null,inst_23170);var state_23230__$1 = (function (){var statearr_23304 = state_23230;(statearr_23304[12] = inst_23189__$1);
return statearr_23304;
})();if(inst_23189__$1)
{var statearr_23305_23368 = state_23230__$1;(statearr_23305_23368[1] = 33);
} else
{var statearr_23306_23369 = state_23230__$1;(statearr_23306_23369[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 29))
{var inst_23214 = (state_23230[2]);var state_23230__$1 = state_23230;var statearr_23307_23370 = state_23230__$1;(statearr_23307_23370[2] = inst_23214);
(statearr_23307_23370[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 30))
{var state_23230__$1 = state_23230;var statearr_23308_23371 = state_23230__$1;(statearr_23308_23371[2] = null);
(statearr_23308_23371[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23231 === 31))
{var inst_23178 = (state_23230[30]);var inst_23182 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_23183 = cljs.core.async.untap_STAR_.call(null,m,inst_23178);var state_23230__$1 = (function (){var statearr_23309 = state_23230;(statearr_23309[31] = inst_23182);
return statearr_23309;
})();var statearr_23310_23372 = state_23230__$1;(statearr_23310_23372[2] = inst_23183);
(statearr_23310_23372[1] = 32);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_23314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23314[0] = state_machine__14155__auto__);
(statearr_23314[1] = 1);
return statearr_23314;
});
var state_machine__14155__auto____1 = (function (state_23230){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_23230);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e23315){if((e23315 instanceof Object))
{var ex__14158__auto__ = e23315;var statearr_23316_23373 = state_23230;(statearr_23316_23373[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23374 = state_23230;
state_23230 = G__23374;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_23230){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_23230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_23317 = f__14225__auto__.call(null);(statearr_23317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___23318);
return statearr_23317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
cljs.core.async.Mix = (function (){var obj23376 = {};return obj23376;
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
;var m = (function (){if(typeof cljs.core.async.t23496 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23496 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta23497){
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
this.meta23497 = meta23497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23496.cljs$lang$type = true;
cljs.core.async.t23496.cljs$lang$ctorStr = "cljs.core.async/t23496";
cljs.core.async.t23496.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t23496");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t23496.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23498){var self__ = this;
var _23498__$1 = this;return self__.meta23497;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t23496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23498,meta23497__$1){var self__ = this;
var _23498__$1 = this;return (new cljs.core.async.t23496(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta23497__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t23496 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t23496(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23497){return (new cljs.core.async.t23496(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta23497));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t23496(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__14224__auto___23615 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_23568){var state_val_23569 = (state_23568[1]);if((state_val_23569 === 1))
{var inst_23502 = (state_23568[7]);var inst_23502__$1 = calc_state.call(null);var inst_23503 = cljs.core.seq_QMARK_.call(null,inst_23502__$1);var state_23568__$1 = (function (){var statearr_23570 = state_23568;(statearr_23570[7] = inst_23502__$1);
return statearr_23570;
})();if(inst_23503)
{var statearr_23571_23616 = state_23568__$1;(statearr_23571_23616[1] = 2);
} else
{var statearr_23572_23617 = state_23568__$1;(statearr_23572_23617[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 2))
{var inst_23502 = (state_23568[7]);var inst_23505 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23502);var state_23568__$1 = state_23568;var statearr_23573_23618 = state_23568__$1;(statearr_23573_23618[2] = inst_23505);
(statearr_23573_23618[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 3))
{var inst_23502 = (state_23568[7]);var state_23568__$1 = state_23568;var statearr_23574_23619 = state_23568__$1;(statearr_23574_23619[2] = inst_23502);
(statearr_23574_23619[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 4))
{var inst_23502 = (state_23568[7]);var inst_23508 = (state_23568[2]);var inst_23509 = cljs.core.get.call(null,inst_23508,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23510 = cljs.core.get.call(null,inst_23508,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23511 = cljs.core.get.call(null,inst_23508,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_23512 = inst_23502;var state_23568__$1 = (function (){var statearr_23575 = state_23568;(statearr_23575[8] = inst_23512);
(statearr_23575[9] = inst_23511);
(statearr_23575[10] = inst_23510);
(statearr_23575[11] = inst_23509);
return statearr_23575;
})();var statearr_23576_23620 = state_23568__$1;(statearr_23576_23620[2] = null);
(statearr_23576_23620[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 5))
{var inst_23512 = (state_23568[8]);var inst_23515 = cljs.core.seq_QMARK_.call(null,inst_23512);var state_23568__$1 = state_23568;if(inst_23515)
{var statearr_23577_23621 = state_23568__$1;(statearr_23577_23621[1] = 7);
} else
{var statearr_23578_23622 = state_23568__$1;(statearr_23578_23622[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 6))
{var inst_23566 = (state_23568[2]);var state_23568__$1 = state_23568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23568__$1,inst_23566);
} else
{if((state_val_23569 === 7))
{var inst_23512 = (state_23568[8]);var inst_23517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23512);var state_23568__$1 = state_23568;var statearr_23579_23623 = state_23568__$1;(statearr_23579_23623[2] = inst_23517);
(statearr_23579_23623[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 8))
{var inst_23512 = (state_23568[8]);var state_23568__$1 = state_23568;var statearr_23580_23624 = state_23568__$1;(statearr_23580_23624[2] = inst_23512);
(statearr_23580_23624[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 9))
{var inst_23520 = (state_23568[12]);var inst_23520__$1 = (state_23568[2]);var inst_23521 = cljs.core.get.call(null,inst_23520__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_23522 = cljs.core.get.call(null,inst_23520__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_23523 = cljs.core.get.call(null,inst_23520__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_23568__$1 = (function (){var statearr_23581 = state_23568;(statearr_23581[13] = inst_23522);
(statearr_23581[12] = inst_23520__$1);
(statearr_23581[14] = inst_23523);
return statearr_23581;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_23568__$1,10,inst_23521);
} else
{if((state_val_23569 === 10))
{var inst_23528 = (state_23568[15]);var inst_23527 = (state_23568[16]);var inst_23526 = (state_23568[2]);var inst_23527__$1 = cljs.core.nth.call(null,inst_23526,0,null);var inst_23528__$1 = cljs.core.nth.call(null,inst_23526,1,null);var inst_23529 = (inst_23527__$1 == null);var inst_23530 = cljs.core._EQ_.call(null,inst_23528__$1,change);var inst_23531 = (inst_23529) || (inst_23530);var state_23568__$1 = (function (){var statearr_23582 = state_23568;(statearr_23582[15] = inst_23528__$1);
(statearr_23582[16] = inst_23527__$1);
return statearr_23582;
})();if(cljs.core.truth_(inst_23531))
{var statearr_23583_23625 = state_23568__$1;(statearr_23583_23625[1] = 11);
} else
{var statearr_23584_23626 = state_23568__$1;(statearr_23584_23626[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 11))
{var inst_23527 = (state_23568[16]);var inst_23533 = (inst_23527 == null);var state_23568__$1 = state_23568;if(cljs.core.truth_(inst_23533))
{var statearr_23585_23627 = state_23568__$1;(statearr_23585_23627[1] = 14);
} else
{var statearr_23586_23628 = state_23568__$1;(statearr_23586_23628[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 12))
{var inst_23528 = (state_23568[15]);var inst_23542 = (state_23568[17]);var inst_23523 = (state_23568[14]);var inst_23542__$1 = inst_23523.call(null,inst_23528);var state_23568__$1 = (function (){var statearr_23587 = state_23568;(statearr_23587[17] = inst_23542__$1);
return statearr_23587;
})();if(cljs.core.truth_(inst_23542__$1))
{var statearr_23588_23629 = state_23568__$1;(statearr_23588_23629[1] = 17);
} else
{var statearr_23589_23630 = state_23568__$1;(statearr_23589_23630[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 13))
{var inst_23564 = (state_23568[2]);var state_23568__$1 = state_23568;var statearr_23590_23631 = state_23568__$1;(statearr_23590_23631[2] = inst_23564);
(statearr_23590_23631[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 14))
{var inst_23528 = (state_23568[15]);var inst_23535 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23528);var state_23568__$1 = state_23568;var statearr_23591_23632 = state_23568__$1;(statearr_23591_23632[2] = inst_23535);
(statearr_23591_23632[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 15))
{var state_23568__$1 = state_23568;var statearr_23592_23633 = state_23568__$1;(statearr_23592_23633[2] = null);
(statearr_23592_23633[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 16))
{var inst_23538 = (state_23568[2]);var inst_23539 = calc_state.call(null);var inst_23512 = inst_23539;var state_23568__$1 = (function (){var statearr_23593 = state_23568;(statearr_23593[8] = inst_23512);
(statearr_23593[18] = inst_23538);
return statearr_23593;
})();var statearr_23594_23634 = state_23568__$1;(statearr_23594_23634[2] = null);
(statearr_23594_23634[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 17))
{var inst_23542 = (state_23568[17]);var state_23568__$1 = state_23568;var statearr_23595_23635 = state_23568__$1;(statearr_23595_23635[2] = inst_23542);
(statearr_23595_23635[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 18))
{var inst_23528 = (state_23568[15]);var inst_23522 = (state_23568[13]);var inst_23523 = (state_23568[14]);var inst_23545 = cljs.core.empty_QMARK_.call(null,inst_23523);var inst_23546 = inst_23522.call(null,inst_23528);var inst_23547 = cljs.core.not.call(null,inst_23546);var inst_23548 = (inst_23545) && (inst_23547);var state_23568__$1 = state_23568;var statearr_23596_23636 = state_23568__$1;(statearr_23596_23636[2] = inst_23548);
(statearr_23596_23636[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 19))
{var inst_23550 = (state_23568[2]);var state_23568__$1 = state_23568;if(cljs.core.truth_(inst_23550))
{var statearr_23597_23637 = state_23568__$1;(statearr_23597_23637[1] = 20);
} else
{var statearr_23598_23638 = state_23568__$1;(statearr_23598_23638[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 20))
{var inst_23527 = (state_23568[16]);var state_23568__$1 = state_23568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23568__$1,23,out,inst_23527);
} else
{if((state_val_23569 === 21))
{var inst_23520 = (state_23568[12]);var inst_23512 = inst_23520;var state_23568__$1 = (function (){var statearr_23599 = state_23568;(statearr_23599[8] = inst_23512);
return statearr_23599;
})();var statearr_23600_23639 = state_23568__$1;(statearr_23600_23639[2] = null);
(statearr_23600_23639[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 22))
{var inst_23562 = (state_23568[2]);var state_23568__$1 = state_23568;var statearr_23601_23640 = state_23568__$1;(statearr_23601_23640[2] = inst_23562);
(statearr_23601_23640[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 23))
{var inst_23553 = (state_23568[2]);var state_23568__$1 = state_23568;if(cljs.core.truth_(inst_23553))
{var statearr_23602_23641 = state_23568__$1;(statearr_23602_23641[1] = 24);
} else
{var statearr_23603_23642 = state_23568__$1;(statearr_23603_23642[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 24))
{var inst_23520 = (state_23568[12]);var inst_23512 = inst_23520;var state_23568__$1 = (function (){var statearr_23604 = state_23568;(statearr_23604[8] = inst_23512);
return statearr_23604;
})();var statearr_23605_23643 = state_23568__$1;(statearr_23605_23643[2] = null);
(statearr_23605_23643[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 25))
{var state_23568__$1 = state_23568;var statearr_23606_23644 = state_23568__$1;(statearr_23606_23644[2] = null);
(statearr_23606_23644[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23569 === 26))
{var inst_23558 = (state_23568[2]);var state_23568__$1 = state_23568;var statearr_23607_23645 = state_23568__$1;(statearr_23607_23645[2] = inst_23558);
(statearr_23607_23645[1] = 22);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_23611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23611[0] = state_machine__14155__auto__);
(statearr_23611[1] = 1);
return statearr_23611;
});
var state_machine__14155__auto____1 = (function (state_23568){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_23568);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e23612){if((e23612 instanceof Object))
{var ex__14158__auto__ = e23612;var statearr_23613_23646 = state_23568;(statearr_23613_23646[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23647 = state_23568;
state_23568 = G__23647;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_23568){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_23568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_23614 = f__14225__auto__.call(null);(statearr_23614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___23615);
return statearr_23614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
cljs.core.async.Pub = (function (){var obj23649 = {};return obj23649;
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
return (function (p1__23650_SHARP_){if(cljs.core.truth_(p1__23650_SHARP_.call(null,topic)))
{return p1__23650_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__23650_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10329__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t23773 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23773 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta23774){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta23774 = meta23774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23773.cljs$lang$type = true;
cljs.core.async.t23773.cljs$lang$ctorStr = "cljs.core.async/t23773";
cljs.core.async.t23773.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10896__auto__,writer__10897__auto__,opt__10898__auto__){return cljs.core._write.call(null,writer__10897__auto__,"cljs.core.async/t23773");
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t23773.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23775){var self__ = this;
var _23775__$1 = this;return self__.meta23774;
});})(mults,ensure_mult))
;
cljs.core.async.t23773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23775,meta23774__$1){var self__ = this;
var _23775__$1 = this;return (new cljs.core.async.t23773(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta23774__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t23773 = ((function (mults,ensure_mult){
return (function __GT_t23773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23774){return (new cljs.core.async.t23773(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta23774));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t23773(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__14224__auto___23895 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_23847){var state_val_23848 = (state_23847[1]);if((state_val_23848 === 1))
{var state_23847__$1 = state_23847;var statearr_23849_23896 = state_23847__$1;(statearr_23849_23896[2] = null);
(statearr_23849_23896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 2))
{var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23847__$1,4,ch);
} else
{if((state_val_23848 === 3))
{var inst_23845 = (state_23847[2]);var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23847__$1,inst_23845);
} else
{if((state_val_23848 === 4))
{var inst_23778 = (state_23847[7]);var inst_23778__$1 = (state_23847[2]);var inst_23779 = (inst_23778__$1 == null);var state_23847__$1 = (function (){var statearr_23850 = state_23847;(statearr_23850[7] = inst_23778__$1);
return statearr_23850;
})();if(cljs.core.truth_(inst_23779))
{var statearr_23851_23897 = state_23847__$1;(statearr_23851_23897[1] = 5);
} else
{var statearr_23852_23898 = state_23847__$1;(statearr_23852_23898[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 5))
{var inst_23785 = cljs.core.deref.call(null,mults);var inst_23786 = cljs.core.vals.call(null,inst_23785);var inst_23787 = cljs.core.seq.call(null,inst_23786);var inst_23788 = inst_23787;var inst_23789 = null;var inst_23790 = 0;var inst_23791 = 0;var state_23847__$1 = (function (){var statearr_23853 = state_23847;(statearr_23853[8] = inst_23790);
(statearr_23853[9] = inst_23791);
(statearr_23853[10] = inst_23788);
(statearr_23853[11] = inst_23789);
return statearr_23853;
})();var statearr_23854_23899 = state_23847__$1;(statearr_23854_23899[2] = null);
(statearr_23854_23899[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 6))
{var inst_23826 = (state_23847[12]);var inst_23828 = (state_23847[13]);var inst_23778 = (state_23847[7]);var inst_23826__$1 = topic_fn.call(null,inst_23778);var inst_23827 = cljs.core.deref.call(null,mults);var inst_23828__$1 = cljs.core.get.call(null,inst_23827,inst_23826__$1);var state_23847__$1 = (function (){var statearr_23855 = state_23847;(statearr_23855[12] = inst_23826__$1);
(statearr_23855[13] = inst_23828__$1);
return statearr_23855;
})();if(cljs.core.truth_(inst_23828__$1))
{var statearr_23856_23900 = state_23847__$1;(statearr_23856_23900[1] = 19);
} else
{var statearr_23857_23901 = state_23847__$1;(statearr_23857_23901[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 7))
{var inst_23843 = (state_23847[2]);var state_23847__$1 = state_23847;var statearr_23858_23902 = state_23847__$1;(statearr_23858_23902[2] = inst_23843);
(statearr_23858_23902[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 8))
{var inst_23790 = (state_23847[8]);var inst_23791 = (state_23847[9]);var inst_23793 = (inst_23791 < inst_23790);var inst_23794 = inst_23793;var state_23847__$1 = state_23847;if(cljs.core.truth_(inst_23794))
{var statearr_23862_23903 = state_23847__$1;(statearr_23862_23903[1] = 10);
} else
{var statearr_23863_23904 = state_23847__$1;(statearr_23863_23904[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 9))
{var inst_23824 = (state_23847[2]);var state_23847__$1 = state_23847;var statearr_23864_23905 = state_23847__$1;(statearr_23864_23905[2] = inst_23824);
(statearr_23864_23905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 10))
{var inst_23790 = (state_23847[8]);var inst_23791 = (state_23847[9]);var inst_23788 = (state_23847[10]);var inst_23789 = (state_23847[11]);var inst_23796 = cljs.core._nth.call(null,inst_23789,inst_23791);var inst_23797 = cljs.core.async.muxch_STAR_.call(null,inst_23796);var inst_23798 = cljs.core.async.close_BANG_.call(null,inst_23797);var inst_23799 = (inst_23791 + 1);var tmp23859 = inst_23790;var tmp23860 = inst_23788;var tmp23861 = inst_23789;var inst_23788__$1 = tmp23860;var inst_23789__$1 = tmp23861;var inst_23790__$1 = tmp23859;var inst_23791__$1 = inst_23799;var state_23847__$1 = (function (){var statearr_23865 = state_23847;(statearr_23865[8] = inst_23790__$1);
(statearr_23865[9] = inst_23791__$1);
(statearr_23865[14] = inst_23798);
(statearr_23865[10] = inst_23788__$1);
(statearr_23865[11] = inst_23789__$1);
return statearr_23865;
})();var statearr_23866_23906 = state_23847__$1;(statearr_23866_23906[2] = null);
(statearr_23866_23906[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 11))
{var inst_23802 = (state_23847[15]);var inst_23788 = (state_23847[10]);var inst_23802__$1 = cljs.core.seq.call(null,inst_23788);var state_23847__$1 = (function (){var statearr_23867 = state_23847;(statearr_23867[15] = inst_23802__$1);
return statearr_23867;
})();if(inst_23802__$1)
{var statearr_23868_23907 = state_23847__$1;(statearr_23868_23907[1] = 13);
} else
{var statearr_23869_23908 = state_23847__$1;(statearr_23869_23908[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 12))
{var inst_23822 = (state_23847[2]);var state_23847__$1 = state_23847;var statearr_23870_23909 = state_23847__$1;(statearr_23870_23909[2] = inst_23822);
(statearr_23870_23909[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 13))
{var inst_23802 = (state_23847[15]);var inst_23804 = cljs.core.chunked_seq_QMARK_.call(null,inst_23802);var state_23847__$1 = state_23847;if(inst_23804)
{var statearr_23871_23910 = state_23847__$1;(statearr_23871_23910[1] = 16);
} else
{var statearr_23872_23911 = state_23847__$1;(statearr_23872_23911[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 14))
{var state_23847__$1 = state_23847;var statearr_23873_23912 = state_23847__$1;(statearr_23873_23912[2] = null);
(statearr_23873_23912[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 15))
{var inst_23820 = (state_23847[2]);var state_23847__$1 = state_23847;var statearr_23874_23913 = state_23847__$1;(statearr_23874_23913[2] = inst_23820);
(statearr_23874_23913[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 16))
{var inst_23802 = (state_23847[15]);var inst_23806 = cljs.core.chunk_first.call(null,inst_23802);var inst_23807 = cljs.core.chunk_rest.call(null,inst_23802);var inst_23808 = cljs.core.count.call(null,inst_23806);var inst_23788 = inst_23807;var inst_23789 = inst_23806;var inst_23790 = inst_23808;var inst_23791 = 0;var state_23847__$1 = (function (){var statearr_23875 = state_23847;(statearr_23875[8] = inst_23790);
(statearr_23875[9] = inst_23791);
(statearr_23875[10] = inst_23788);
(statearr_23875[11] = inst_23789);
return statearr_23875;
})();var statearr_23876_23914 = state_23847__$1;(statearr_23876_23914[2] = null);
(statearr_23876_23914[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 17))
{var inst_23802 = (state_23847[15]);var inst_23811 = cljs.core.first.call(null,inst_23802);var inst_23812 = cljs.core.async.muxch_STAR_.call(null,inst_23811);var inst_23813 = cljs.core.async.close_BANG_.call(null,inst_23812);var inst_23814 = cljs.core.next.call(null,inst_23802);var inst_23788 = inst_23814;var inst_23789 = null;var inst_23790 = 0;var inst_23791 = 0;var state_23847__$1 = (function (){var statearr_23877 = state_23847;(statearr_23877[8] = inst_23790);
(statearr_23877[9] = inst_23791);
(statearr_23877[16] = inst_23813);
(statearr_23877[10] = inst_23788);
(statearr_23877[11] = inst_23789);
return statearr_23877;
})();var statearr_23878_23915 = state_23847__$1;(statearr_23878_23915[2] = null);
(statearr_23878_23915[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 18))
{var inst_23817 = (state_23847[2]);var state_23847__$1 = state_23847;var statearr_23879_23916 = state_23847__$1;(statearr_23879_23916[2] = inst_23817);
(statearr_23879_23916[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 19))
{var inst_23828 = (state_23847[13]);var inst_23778 = (state_23847[7]);var inst_23830 = cljs.core.async.muxch_STAR_.call(null,inst_23828);var state_23847__$1 = state_23847;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23847__$1,22,inst_23830,inst_23778);
} else
{if((state_val_23848 === 20))
{var state_23847__$1 = state_23847;var statearr_23880_23917 = state_23847__$1;(statearr_23880_23917[2] = null);
(statearr_23880_23917[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 21))
{var inst_23840 = (state_23847[2]);var state_23847__$1 = (function (){var statearr_23881 = state_23847;(statearr_23881[17] = inst_23840);
return statearr_23881;
})();var statearr_23882_23918 = state_23847__$1;(statearr_23882_23918[2] = null);
(statearr_23882_23918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 22))
{var inst_23832 = (state_23847[2]);var state_23847__$1 = state_23847;if(cljs.core.truth_(inst_23832))
{var statearr_23883_23919 = state_23847__$1;(statearr_23883_23919[1] = 23);
} else
{var statearr_23884_23920 = state_23847__$1;(statearr_23884_23920[1] = 24);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 23))
{var state_23847__$1 = state_23847;var statearr_23885_23921 = state_23847__$1;(statearr_23885_23921[2] = null);
(statearr_23885_23921[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 24))
{var inst_23826 = (state_23847[12]);var inst_23835 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23826);var state_23847__$1 = state_23847;var statearr_23886_23922 = state_23847__$1;(statearr_23886_23922[2] = inst_23835);
(statearr_23886_23922[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23848 === 25))
{var inst_23837 = (state_23847[2]);var state_23847__$1 = state_23847;var statearr_23887_23923 = state_23847__$1;(statearr_23887_23923[2] = inst_23837);
(statearr_23887_23923[1] = 21);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_23891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23891[0] = state_machine__14155__auto__);
(statearr_23891[1] = 1);
return statearr_23891;
});
var state_machine__14155__auto____1 = (function (state_23847){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_23847);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e23892){if((e23892 instanceof Object))
{var ex__14158__auto__ = e23892;var statearr_23893_23924 = state_23847;(statearr_23893_23924[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23847);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23925 = state_23847;
state_23847 = G__23925;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_23847){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_23847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_23894 = f__14225__auto__.call(null);(statearr_23894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___23895);
return statearr_23894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
,cljs.core.range.call(null,cnt));var c__14224__auto___24062 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_24032){var state_val_24033 = (state_24032[1]);if((state_val_24033 === 1))
{var state_24032__$1 = state_24032;var statearr_24034_24063 = state_24032__$1;(statearr_24034_24063[2] = null);
(statearr_24034_24063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 2))
{var inst_23995 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_23996 = 0;var state_24032__$1 = (function (){var statearr_24035 = state_24032;(statearr_24035[7] = inst_23996);
(statearr_24035[8] = inst_23995);
return statearr_24035;
})();var statearr_24036_24064 = state_24032__$1;(statearr_24036_24064[2] = null);
(statearr_24036_24064[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 3))
{var inst_24030 = (state_24032[2]);var state_24032__$1 = state_24032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24032__$1,inst_24030);
} else
{if((state_val_24033 === 4))
{var inst_23996 = (state_24032[7]);var inst_23998 = (inst_23996 < cnt);var state_24032__$1 = state_24032;if(cljs.core.truth_(inst_23998))
{var statearr_24037_24065 = state_24032__$1;(statearr_24037_24065[1] = 6);
} else
{var statearr_24038_24066 = state_24032__$1;(statearr_24038_24066[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 5))
{var inst_24016 = (state_24032[2]);var state_24032__$1 = (function (){var statearr_24039 = state_24032;(statearr_24039[9] = inst_24016);
return statearr_24039;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24032__$1,12,dchan);
} else
{if((state_val_24033 === 6))
{var state_24032__$1 = state_24032;var statearr_24040_24067 = state_24032__$1;(statearr_24040_24067[2] = null);
(statearr_24040_24067[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 7))
{var state_24032__$1 = state_24032;var statearr_24041_24068 = state_24032__$1;(statearr_24041_24068[2] = null);
(statearr_24041_24068[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 8))
{var inst_24014 = (state_24032[2]);var state_24032__$1 = state_24032;var statearr_24042_24069 = state_24032__$1;(statearr_24042_24069[2] = inst_24014);
(statearr_24042_24069[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 9))
{var inst_23996 = (state_24032[7]);var inst_24009 = (state_24032[2]);var inst_24010 = (inst_23996 + 1);var inst_23996__$1 = inst_24010;var state_24032__$1 = (function (){var statearr_24043 = state_24032;(statearr_24043[7] = inst_23996__$1);
(statearr_24043[10] = inst_24009);
return statearr_24043;
})();var statearr_24044_24070 = state_24032__$1;(statearr_24044_24070[2] = null);
(statearr_24044_24070[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 10))
{var inst_24000 = (state_24032[2]);var inst_24001 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_24032__$1 = (function (){var statearr_24045 = state_24032;(statearr_24045[11] = inst_24000);
return statearr_24045;
})();var statearr_24046_24071 = state_24032__$1;(statearr_24046_24071[2] = inst_24001);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24032__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 11))
{var inst_23996 = (state_24032[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24032,10,Object,null,9);var inst_24005 = chs__$1.call(null,inst_23996);var inst_24006 = done.call(null,inst_23996);var inst_24007 = cljs.core.async.take_BANG_.call(null,inst_24005,inst_24006);var state_24032__$1 = state_24032;var statearr_24047_24072 = state_24032__$1;(statearr_24047_24072[2] = inst_24007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24032__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 12))
{var inst_24018 = (state_24032[12]);var inst_24018__$1 = (state_24032[2]);var inst_24019 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24018__$1);var state_24032__$1 = (function (){var statearr_24048 = state_24032;(statearr_24048[12] = inst_24018__$1);
return statearr_24048;
})();if(cljs.core.truth_(inst_24019))
{var statearr_24049_24073 = state_24032__$1;(statearr_24049_24073[1] = 13);
} else
{var statearr_24050_24074 = state_24032__$1;(statearr_24050_24074[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 13))
{var inst_24021 = cljs.core.async.close_BANG_.call(null,out);var state_24032__$1 = state_24032;var statearr_24051_24075 = state_24032__$1;(statearr_24051_24075[2] = inst_24021);
(statearr_24051_24075[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 14))
{var inst_24018 = (state_24032[12]);var inst_24023 = cljs.core.apply.call(null,f,inst_24018);var state_24032__$1 = state_24032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24032__$1,16,out,inst_24023);
} else
{if((state_val_24033 === 15))
{var inst_24028 = (state_24032[2]);var state_24032__$1 = state_24032;var statearr_24052_24076 = state_24032__$1;(statearr_24052_24076[2] = inst_24028);
(statearr_24052_24076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24033 === 16))
{var inst_24025 = (state_24032[2]);var state_24032__$1 = (function (){var statearr_24053 = state_24032;(statearr_24053[13] = inst_24025);
return statearr_24053;
})();var statearr_24054_24077 = state_24032__$1;(statearr_24054_24077[2] = null);
(statearr_24054_24077[1] = 2);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_24058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24058[0] = state_machine__14155__auto__);
(statearr_24058[1] = 1);
return statearr_24058;
});
var state_machine__14155__auto____1 = (function (state_24032){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_24032);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e24059){if((e24059 instanceof Object))
{var ex__14158__auto__ = e24059;var statearr_24060_24078 = state_24032;(statearr_24060_24078[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24079 = state_24032;
state_24032 = G__24079;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_24032){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_24032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_24061 = f__14225__auto__.call(null);(statearr_24061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___24062);
return statearr_24061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14224__auto___24187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_24163){var state_val_24164 = (state_24163[1]);if((state_val_24164 === 1))
{var inst_24134 = cljs.core.vec.call(null,chs);var inst_24135 = inst_24134;var state_24163__$1 = (function (){var statearr_24165 = state_24163;(statearr_24165[7] = inst_24135);
return statearr_24165;
})();var statearr_24166_24188 = state_24163__$1;(statearr_24166_24188[2] = null);
(statearr_24166_24188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 2))
{var inst_24135 = (state_24163[7]);var inst_24137 = cljs.core.count.call(null,inst_24135);var inst_24138 = (inst_24137 > 0);var state_24163__$1 = state_24163;if(cljs.core.truth_(inst_24138))
{var statearr_24167_24189 = state_24163__$1;(statearr_24167_24189[1] = 4);
} else
{var statearr_24168_24190 = state_24163__$1;(statearr_24168_24190[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 3))
{var inst_24161 = (state_24163[2]);var state_24163__$1 = state_24163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24163__$1,inst_24161);
} else
{if((state_val_24164 === 4))
{var inst_24135 = (state_24163[7]);var state_24163__$1 = state_24163;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_24163__$1,7,inst_24135);
} else
{if((state_val_24164 === 5))
{var inst_24157 = cljs.core.async.close_BANG_.call(null,out);var state_24163__$1 = state_24163;var statearr_24169_24191 = state_24163__$1;(statearr_24169_24191[2] = inst_24157);
(statearr_24169_24191[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 6))
{var inst_24159 = (state_24163[2]);var state_24163__$1 = state_24163;var statearr_24170_24192 = state_24163__$1;(statearr_24170_24192[2] = inst_24159);
(statearr_24170_24192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 7))
{var inst_24142 = (state_24163[8]);var inst_24143 = (state_24163[9]);var inst_24142__$1 = (state_24163[2]);var inst_24143__$1 = cljs.core.nth.call(null,inst_24142__$1,0,null);var inst_24144 = cljs.core.nth.call(null,inst_24142__$1,1,null);var inst_24145 = (inst_24143__$1 == null);var state_24163__$1 = (function (){var statearr_24171 = state_24163;(statearr_24171[10] = inst_24144);
(statearr_24171[8] = inst_24142__$1);
(statearr_24171[9] = inst_24143__$1);
return statearr_24171;
})();if(cljs.core.truth_(inst_24145))
{var statearr_24172_24193 = state_24163__$1;(statearr_24172_24193[1] = 8);
} else
{var statearr_24173_24194 = state_24163__$1;(statearr_24173_24194[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 8))
{var inst_24135 = (state_24163[7]);var inst_24144 = (state_24163[10]);var inst_24142 = (state_24163[8]);var inst_24143 = (state_24163[9]);var inst_24147 = (function (){var c = inst_24144;var v = inst_24143;var vec__24140 = inst_24142;var cs = inst_24135;return ((function (c,v,vec__24140,cs,inst_24135,inst_24144,inst_24142,inst_24143,state_val_24164){
return (function (p1__24080_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__24080_SHARP_);
});
;})(c,v,vec__24140,cs,inst_24135,inst_24144,inst_24142,inst_24143,state_val_24164))
})();var inst_24148 = cljs.core.filterv.call(null,inst_24147,inst_24135);var inst_24135__$1 = inst_24148;var state_24163__$1 = (function (){var statearr_24174 = state_24163;(statearr_24174[7] = inst_24135__$1);
return statearr_24174;
})();var statearr_24175_24195 = state_24163__$1;(statearr_24175_24195[2] = null);
(statearr_24175_24195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 9))
{var inst_24143 = (state_24163[9]);var state_24163__$1 = state_24163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24163__$1,11,out,inst_24143);
} else
{if((state_val_24164 === 10))
{var inst_24155 = (state_24163[2]);var state_24163__$1 = state_24163;var statearr_24177_24196 = state_24163__$1;(statearr_24177_24196[2] = inst_24155);
(statearr_24177_24196[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24164 === 11))
{var inst_24135 = (state_24163[7]);var inst_24152 = (state_24163[2]);var tmp24176 = inst_24135;var inst_24135__$1 = tmp24176;var state_24163__$1 = (function (){var statearr_24178 = state_24163;(statearr_24178[7] = inst_24135__$1);
(statearr_24178[11] = inst_24152);
return statearr_24178;
})();var statearr_24179_24197 = state_24163__$1;(statearr_24179_24197[2] = null);
(statearr_24179_24197[1] = 2);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_24183 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24183[0] = state_machine__14155__auto__);
(statearr_24183[1] = 1);
return statearr_24183;
});
var state_machine__14155__auto____1 = (function (state_24163){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_24163);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e24184){if((e24184 instanceof Object))
{var ex__14158__auto__ = e24184;var statearr_24185_24198 = state_24163;(statearr_24185_24198[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24199 = state_24163;
state_24163 = G__24199;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_24163){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_24186 = f__14225__auto__.call(null);(statearr_24186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___24187);
return statearr_24186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14224__auto___24292 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_24269){var state_val_24270 = (state_24269[1]);if((state_val_24270 === 1))
{var inst_24246 = 0;var state_24269__$1 = (function (){var statearr_24271 = state_24269;(statearr_24271[7] = inst_24246);
return statearr_24271;
})();var statearr_24272_24293 = state_24269__$1;(statearr_24272_24293[2] = null);
(statearr_24272_24293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 2))
{var inst_24246 = (state_24269[7]);var inst_24248 = (inst_24246 < n);var state_24269__$1 = state_24269;if(cljs.core.truth_(inst_24248))
{var statearr_24273_24294 = state_24269__$1;(statearr_24273_24294[1] = 4);
} else
{var statearr_24274_24295 = state_24269__$1;(statearr_24274_24295[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 3))
{var inst_24266 = (state_24269[2]);var inst_24267 = cljs.core.async.close_BANG_.call(null,out);var state_24269__$1 = (function (){var statearr_24275 = state_24269;(statearr_24275[8] = inst_24266);
return statearr_24275;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24269__$1,inst_24267);
} else
{if((state_val_24270 === 4))
{var state_24269__$1 = state_24269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,7,ch);
} else
{if((state_val_24270 === 5))
{var state_24269__$1 = state_24269;var statearr_24276_24296 = state_24269__$1;(statearr_24276_24296[2] = null);
(statearr_24276_24296[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 6))
{var inst_24264 = (state_24269[2]);var state_24269__$1 = state_24269;var statearr_24277_24297 = state_24269__$1;(statearr_24277_24297[2] = inst_24264);
(statearr_24277_24297[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 7))
{var inst_24251 = (state_24269[9]);var inst_24251__$1 = (state_24269[2]);var inst_24252 = (inst_24251__$1 == null);var inst_24253 = cljs.core.not.call(null,inst_24252);var state_24269__$1 = (function (){var statearr_24278 = state_24269;(statearr_24278[9] = inst_24251__$1);
return statearr_24278;
})();if(inst_24253)
{var statearr_24279_24298 = state_24269__$1;(statearr_24279_24298[1] = 8);
} else
{var statearr_24280_24299 = state_24269__$1;(statearr_24280_24299[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 8))
{var inst_24251 = (state_24269[9]);var state_24269__$1 = state_24269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24269__$1,11,out,inst_24251);
} else
{if((state_val_24270 === 9))
{var state_24269__$1 = state_24269;var statearr_24281_24300 = state_24269__$1;(statearr_24281_24300[2] = null);
(statearr_24281_24300[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 10))
{var inst_24261 = (state_24269[2]);var state_24269__$1 = state_24269;var statearr_24282_24301 = state_24269__$1;(statearr_24282_24301[2] = inst_24261);
(statearr_24282_24301[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24270 === 11))
{var inst_24246 = (state_24269[7]);var inst_24256 = (state_24269[2]);var inst_24257 = (inst_24246 + 1);var inst_24246__$1 = inst_24257;var state_24269__$1 = (function (){var statearr_24283 = state_24269;(statearr_24283[10] = inst_24256);
(statearr_24283[7] = inst_24246__$1);
return statearr_24283;
})();var statearr_24284_24302 = state_24269__$1;(statearr_24284_24302[2] = null);
(statearr_24284_24302[1] = 2);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_24288 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24288[0] = state_machine__14155__auto__);
(statearr_24288[1] = 1);
return statearr_24288;
});
var state_machine__14155__auto____1 = (function (state_24269){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_24269);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e24289){if((e24289 instanceof Object))
{var ex__14158__auto__ = e24289;var statearr_24290_24303 = state_24269;(statearr_24290_24303[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24304 = state_24269;
state_24269 = G__24304;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_24269){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_24269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_24291 = f__14225__auto__.call(null);(statearr_24291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___24292);
return statearr_24291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14224__auto___24401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_24376){var state_val_24377 = (state_24376[1]);if((state_val_24377 === 1))
{var inst_24353 = null;var state_24376__$1 = (function (){var statearr_24378 = state_24376;(statearr_24378[7] = inst_24353);
return statearr_24378;
})();var statearr_24379_24402 = state_24376__$1;(statearr_24379_24402[2] = null);
(statearr_24379_24402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 2))
{var state_24376__$1 = state_24376;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24376__$1,4,ch);
} else
{if((state_val_24377 === 3))
{var inst_24373 = (state_24376[2]);var inst_24374 = cljs.core.async.close_BANG_.call(null,out);var state_24376__$1 = (function (){var statearr_24380 = state_24376;(statearr_24380[8] = inst_24373);
return statearr_24380;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24376__$1,inst_24374);
} else
{if((state_val_24377 === 4))
{var inst_24356 = (state_24376[9]);var inst_24356__$1 = (state_24376[2]);var inst_24357 = (inst_24356__$1 == null);var inst_24358 = cljs.core.not.call(null,inst_24357);var state_24376__$1 = (function (){var statearr_24381 = state_24376;(statearr_24381[9] = inst_24356__$1);
return statearr_24381;
})();if(inst_24358)
{var statearr_24382_24403 = state_24376__$1;(statearr_24382_24403[1] = 5);
} else
{var statearr_24383_24404 = state_24376__$1;(statearr_24383_24404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 5))
{var inst_24356 = (state_24376[9]);var inst_24353 = (state_24376[7]);var inst_24360 = cljs.core._EQ_.call(null,inst_24356,inst_24353);var state_24376__$1 = state_24376;if(inst_24360)
{var statearr_24384_24405 = state_24376__$1;(statearr_24384_24405[1] = 8);
} else
{var statearr_24385_24406 = state_24376__$1;(statearr_24385_24406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 6))
{var state_24376__$1 = state_24376;var statearr_24387_24407 = state_24376__$1;(statearr_24387_24407[2] = null);
(statearr_24387_24407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 7))
{var inst_24371 = (state_24376[2]);var state_24376__$1 = state_24376;var statearr_24388_24408 = state_24376__$1;(statearr_24388_24408[2] = inst_24371);
(statearr_24388_24408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 8))
{var inst_24353 = (state_24376[7]);var tmp24386 = inst_24353;var inst_24353__$1 = tmp24386;var state_24376__$1 = (function (){var statearr_24389 = state_24376;(statearr_24389[7] = inst_24353__$1);
return statearr_24389;
})();var statearr_24390_24409 = state_24376__$1;(statearr_24390_24409[2] = null);
(statearr_24390_24409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 9))
{var inst_24356 = (state_24376[9]);var state_24376__$1 = state_24376;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24376__$1,11,out,inst_24356);
} else
{if((state_val_24377 === 10))
{var inst_24368 = (state_24376[2]);var state_24376__$1 = state_24376;var statearr_24391_24410 = state_24376__$1;(statearr_24391_24410[2] = inst_24368);
(statearr_24391_24410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24377 === 11))
{var inst_24356 = (state_24376[9]);var inst_24365 = (state_24376[2]);var inst_24353 = inst_24356;var state_24376__$1 = (function (){var statearr_24392 = state_24376;(statearr_24392[10] = inst_24365);
(statearr_24392[7] = inst_24353);
return statearr_24392;
})();var statearr_24393_24411 = state_24376__$1;(statearr_24393_24411[2] = null);
(statearr_24393_24411[1] = 2);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_24397 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_24397[0] = state_machine__14155__auto__);
(statearr_24397[1] = 1);
return statearr_24397;
});
var state_machine__14155__auto____1 = (function (state_24376){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_24376);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e24398){if((e24398 instanceof Object))
{var ex__14158__auto__ = e24398;var statearr_24399_24412 = state_24376;(statearr_24399_24412[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24376);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24413 = state_24376;
state_24376 = G__24413;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_24376){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_24376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_24400 = f__14225__auto__.call(null);(statearr_24400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___24401);
return statearr_24400;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14224__auto___24548 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_24518){var state_val_24519 = (state_24518[1]);if((state_val_24519 === 1))
{var inst_24481 = (new Array(n));var inst_24482 = inst_24481;var inst_24483 = 0;var state_24518__$1 = (function (){var statearr_24520 = state_24518;(statearr_24520[7] = inst_24483);
(statearr_24520[8] = inst_24482);
return statearr_24520;
})();var statearr_24521_24549 = state_24518__$1;(statearr_24521_24549[2] = null);
(statearr_24521_24549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 2))
{var state_24518__$1 = state_24518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24518__$1,4,ch);
} else
{if((state_val_24519 === 3))
{var inst_24516 = (state_24518[2]);var state_24518__$1 = state_24518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24518__$1,inst_24516);
} else
{if((state_val_24519 === 4))
{var inst_24486 = (state_24518[9]);var inst_24486__$1 = (state_24518[2]);var inst_24487 = (inst_24486__$1 == null);var inst_24488 = cljs.core.not.call(null,inst_24487);var state_24518__$1 = (function (){var statearr_24522 = state_24518;(statearr_24522[9] = inst_24486__$1);
return statearr_24522;
})();if(inst_24488)
{var statearr_24523_24550 = state_24518__$1;(statearr_24523_24550[1] = 5);
} else
{var statearr_24524_24551 = state_24518__$1;(statearr_24524_24551[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 5))
{var inst_24486 = (state_24518[9]);var inst_24483 = (state_24518[7]);var inst_24482 = (state_24518[8]);var inst_24491 = (state_24518[10]);var inst_24490 = (inst_24482[inst_24483] = inst_24486);var inst_24491__$1 = (inst_24483 + 1);var inst_24492 = (inst_24491__$1 < n);var state_24518__$1 = (function (){var statearr_24525 = state_24518;(statearr_24525[10] = inst_24491__$1);
(statearr_24525[11] = inst_24490);
return statearr_24525;
})();if(cljs.core.truth_(inst_24492))
{var statearr_24526_24552 = state_24518__$1;(statearr_24526_24552[1] = 8);
} else
{var statearr_24527_24553 = state_24518__$1;(statearr_24527_24553[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 6))
{var inst_24483 = (state_24518[7]);var inst_24504 = (inst_24483 > 0);var state_24518__$1 = state_24518;if(cljs.core.truth_(inst_24504))
{var statearr_24529_24554 = state_24518__$1;(statearr_24529_24554[1] = 12);
} else
{var statearr_24530_24555 = state_24518__$1;(statearr_24530_24555[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 7))
{var inst_24514 = (state_24518[2]);var state_24518__$1 = state_24518;var statearr_24531_24556 = state_24518__$1;(statearr_24531_24556[2] = inst_24514);
(statearr_24531_24556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 8))
{var inst_24482 = (state_24518[8]);var inst_24491 = (state_24518[10]);var tmp24528 = inst_24482;var inst_24482__$1 = tmp24528;var inst_24483 = inst_24491;var state_24518__$1 = (function (){var statearr_24532 = state_24518;(statearr_24532[7] = inst_24483);
(statearr_24532[8] = inst_24482__$1);
return statearr_24532;
})();var statearr_24533_24557 = state_24518__$1;(statearr_24533_24557[2] = null);
(statearr_24533_24557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 9))
{var inst_24482 = (state_24518[8]);var inst_24496 = cljs.core.vec.call(null,inst_24482);var state_24518__$1 = state_24518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24518__$1,11,out,inst_24496);
} else
{if((state_val_24519 === 10))
{var inst_24502 = (state_24518[2]);var state_24518__$1 = state_24518;var statearr_24534_24558 = state_24518__$1;(statearr_24534_24558[2] = inst_24502);
(statearr_24534_24558[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 11))
{var inst_24498 = (state_24518[2]);var inst_24499 = (new Array(n));var inst_24482 = inst_24499;var inst_24483 = 0;var state_24518__$1 = (function (){var statearr_24535 = state_24518;(statearr_24535[7] = inst_24483);
(statearr_24535[8] = inst_24482);
(statearr_24535[12] = inst_24498);
return statearr_24535;
})();var statearr_24536_24559 = state_24518__$1;(statearr_24536_24559[2] = null);
(statearr_24536_24559[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 12))
{var inst_24482 = (state_24518[8]);var inst_24506 = cljs.core.vec.call(null,inst_24482);var state_24518__$1 = state_24518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24518__$1,15,out,inst_24506);
} else
{if((state_val_24519 === 13))
{var state_24518__$1 = state_24518;var statearr_24537_24560 = state_24518__$1;(statearr_24537_24560[2] = null);
(statearr_24537_24560[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 14))
{var inst_24511 = (state_24518[2]);var inst_24512 = cljs.core.async.close_BANG_.call(null,out);var state_24518__$1 = (function (){var statearr_24538 = state_24518;(statearr_24538[13] = inst_24511);
return statearr_24538;
})();var statearr_24539_24561 = state_24518__$1;(statearr_24539_24561[2] = inst_24512);
(statearr_24539_24561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24519 === 15))
{var inst_24508 = (state_24518[2]);var state_24518__$1 = state_24518;var statearr_24540_24562 = state_24518__$1;(statearr_24540_24562[2] = inst_24508);
(statearr_24540_24562[1] = 14);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_24544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24544[0] = state_machine__14155__auto__);
(statearr_24544[1] = 1);
return statearr_24544;
});
var state_machine__14155__auto____1 = (function (state_24518){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_24518);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e24545){if((e24545 instanceof Object))
{var ex__14158__auto__ = e24545;var statearr_24546_24563 = state_24518;(statearr_24546_24563[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24564 = state_24518;
state_24518 = G__24564;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_24518){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_24518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_24547 = f__14225__auto__.call(null);(statearr_24547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___24548);
return statearr_24547;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__14224__auto___24707 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_24677){var state_val_24678 = (state_24677[1]);if((state_val_24678 === 1))
{var inst_24636 = [];var inst_24637 = inst_24636;var inst_24638 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_24677__$1 = (function (){var statearr_24679 = state_24677;(statearr_24679[7] = inst_24637);
(statearr_24679[8] = inst_24638);
return statearr_24679;
})();var statearr_24680_24708 = state_24677__$1;(statearr_24680_24708[2] = null);
(statearr_24680_24708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 2))
{var state_24677__$1 = state_24677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24677__$1,4,ch);
} else
{if((state_val_24678 === 3))
{var inst_24675 = (state_24677[2]);var state_24677__$1 = state_24677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24677__$1,inst_24675);
} else
{if((state_val_24678 === 4))
{var inst_24641 = (state_24677[9]);var inst_24641__$1 = (state_24677[2]);var inst_24642 = (inst_24641__$1 == null);var inst_24643 = cljs.core.not.call(null,inst_24642);var state_24677__$1 = (function (){var statearr_24681 = state_24677;(statearr_24681[9] = inst_24641__$1);
return statearr_24681;
})();if(inst_24643)
{var statearr_24682_24709 = state_24677__$1;(statearr_24682_24709[1] = 5);
} else
{var statearr_24683_24710 = state_24677__$1;(statearr_24683_24710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 5))
{var inst_24645 = (state_24677[10]);var inst_24641 = (state_24677[9]);var inst_24638 = (state_24677[8]);var inst_24645__$1 = f.call(null,inst_24641);var inst_24646 = cljs.core._EQ_.call(null,inst_24645__$1,inst_24638);var inst_24647 = cljs.core.keyword_identical_QMARK_.call(null,inst_24638,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_24648 = (inst_24646) || (inst_24647);var state_24677__$1 = (function (){var statearr_24684 = state_24677;(statearr_24684[10] = inst_24645__$1);
return statearr_24684;
})();if(cljs.core.truth_(inst_24648))
{var statearr_24685_24711 = state_24677__$1;(statearr_24685_24711[1] = 8);
} else
{var statearr_24686_24712 = state_24677__$1;(statearr_24686_24712[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 6))
{var inst_24637 = (state_24677[7]);var inst_24662 = inst_24637.length;var inst_24663 = (inst_24662 > 0);var state_24677__$1 = state_24677;if(cljs.core.truth_(inst_24663))
{var statearr_24688_24713 = state_24677__$1;(statearr_24688_24713[1] = 12);
} else
{var statearr_24689_24714 = state_24677__$1;(statearr_24689_24714[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 7))
{var inst_24673 = (state_24677[2]);var state_24677__$1 = state_24677;var statearr_24690_24715 = state_24677__$1;(statearr_24690_24715[2] = inst_24673);
(statearr_24690_24715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 8))
{var inst_24645 = (state_24677[10]);var inst_24641 = (state_24677[9]);var inst_24637 = (state_24677[7]);var inst_24650 = inst_24637.push(inst_24641);var tmp24687 = inst_24637;var inst_24637__$1 = tmp24687;var inst_24638 = inst_24645;var state_24677__$1 = (function (){var statearr_24691 = state_24677;(statearr_24691[11] = inst_24650);
(statearr_24691[7] = inst_24637__$1);
(statearr_24691[8] = inst_24638);
return statearr_24691;
})();var statearr_24692_24716 = state_24677__$1;(statearr_24692_24716[2] = null);
(statearr_24692_24716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 9))
{var inst_24637 = (state_24677[7]);var inst_24653 = cljs.core.vec.call(null,inst_24637);var state_24677__$1 = state_24677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24677__$1,11,out,inst_24653);
} else
{if((state_val_24678 === 10))
{var inst_24660 = (state_24677[2]);var state_24677__$1 = state_24677;var statearr_24693_24717 = state_24677__$1;(statearr_24693_24717[2] = inst_24660);
(statearr_24693_24717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 11))
{var inst_24645 = (state_24677[10]);var inst_24641 = (state_24677[9]);var inst_24655 = (state_24677[2]);var inst_24656 = [];var inst_24657 = inst_24656.push(inst_24641);var inst_24637 = inst_24656;var inst_24638 = inst_24645;var state_24677__$1 = (function (){var statearr_24694 = state_24677;(statearr_24694[12] = inst_24655);
(statearr_24694[7] = inst_24637);
(statearr_24694[8] = inst_24638);
(statearr_24694[13] = inst_24657);
return statearr_24694;
})();var statearr_24695_24718 = state_24677__$1;(statearr_24695_24718[2] = null);
(statearr_24695_24718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 12))
{var inst_24637 = (state_24677[7]);var inst_24665 = cljs.core.vec.call(null,inst_24637);var state_24677__$1 = state_24677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24677__$1,15,out,inst_24665);
} else
{if((state_val_24678 === 13))
{var state_24677__$1 = state_24677;var statearr_24696_24719 = state_24677__$1;(statearr_24696_24719[2] = null);
(statearr_24696_24719[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 14))
{var inst_24670 = (state_24677[2]);var inst_24671 = cljs.core.async.close_BANG_.call(null,out);var state_24677__$1 = (function (){var statearr_24697 = state_24677;(statearr_24697[14] = inst_24670);
return statearr_24697;
})();var statearr_24698_24720 = state_24677__$1;(statearr_24698_24720[2] = inst_24671);
(statearr_24698_24720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24678 === 15))
{var inst_24667 = (state_24677[2]);var state_24677__$1 = state_24677;var statearr_24699_24721 = state_24677__$1;(statearr_24699_24721[2] = inst_24667);
(statearr_24699_24721[1] = 14);
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
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_24703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24703[0] = state_machine__14155__auto__);
(statearr_24703[1] = 1);
return statearr_24703;
});
var state_machine__14155__auto____1 = (function (state_24677){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_24677);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e24704){if((e24704 instanceof Object))
{var ex__14158__auto__ = e24704;var statearr_24705_24722 = state_24677;(statearr_24705_24722[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24723 = state_24677;
state_24677 = G__24723;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_24677){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_24677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_24706 = f__14225__auto__.call(null);(statearr_24706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto___24707);
return statearr_24706;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
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

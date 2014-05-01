// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.client_services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('datascript');
goog.require('datascript');
goog.require('todomvc.transact');
goog.require('todomvc.transact');
todomvc.client_services.handle = (function (){var method_table__11187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11189__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11190__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11191__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (event,args,db,conn,local_conn){return event;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11191__auto__,method_table__11187__auto__,prefer_table__11188__auto__,method_cache__11189__auto__,cached_hierarchy__11190__auto__));
})();
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (_,p__16869,db,conn,local_conn){var vec__16870 = p__16869;var temp_id = cljs.core.nth.call(null,vec__16870,0,null);var text = cljs.core.nth.call(null,vec__16870,1,null);var tx = datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",1014111942),-1,new cljs.core.Keyword(null,"text","text",1017460895),text,new cljs.core.Keyword(null,"completed","completed",3905939901),false], null)], null));var id = cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",3880764886).cljs$core$IFn$_invoke$arity$1(tx),-1);var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_16880){var state_val_16881 = (state_16880[1]);if((state_val_16881 === 2))
{var inst_16873 = (state_16880[2]);var inst_16874 = [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_item,temp_id,id];var inst_16875 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16874,null));var inst_16876 = [inst_16875];var inst_16877 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16876,null));var inst_16878 = datascript.transact_BANG_.call(null,conn,inst_16877);var state_16880__$1 = (function (){var statearr_16882 = state_16880;(statearr_16882[7] = inst_16873);
return statearr_16882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16880__$1,inst_16878);
} else
{if((state_val_16881 === 1))
{var inst_16871 = cljs.core.async.timeout.call(null,1000);var state_16880__$1 = state_16880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16880__$1,2,inst_16871);
} else
{return null;
}
}
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_16886 = [null,null,null,null,null,null,null,null];(statearr_16886[0] = state_machine__14155__auto__);
(statearr_16886[1] = 1);
return statearr_16886;
});
var state_machine__14155__auto____1 = (function (state_16880){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_16880);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e16887){if((e16887 instanceof Object))
{var ex__14158__auto__ = e16887;var statearr_16888_16890 = state_16880;(statearr_16888_16890[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16887;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16891 = state_16880;
state_16880 = G__16891;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_16880){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_16880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_16889 = f__14225__auto__.call(null);(statearr_16889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_16889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (event,p__16892,db,conn,local_conn){var vec__16893 = p__16892;var id = cljs.core.nth.call(null,vec__16893,0,null);var text = cljs.core.nth.call(null,vec__16893,1,null);datascript.transact_BANG_.call(null,local_conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",1014207040),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null)], null));
var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_16903){var state_val_16904 = (state_16903[1]);if((state_val_16904 === 2))
{var inst_16896 = (state_16903[2]);var inst_16897 = [new cljs.core.Keyword("db.fn","call","db.fn/call",2901959894),todomvc.transact.commit_edit,id];var inst_16898 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16897,null));var inst_16899 = [inst_16898];var inst_16900 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16899,null));var inst_16901 = datascript.transact_BANG_.call(null,conn,inst_16900);var state_16903__$1 = (function (){var statearr_16905 = state_16903;(statearr_16905[7] = inst_16896);
return statearr_16905;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16903__$1,inst_16901);
} else
{if((state_val_16904 === 1))
{var inst_16894 = cljs.core.async.timeout.call(null,1000);var state_16903__$1 = state_16903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16903__$1,2,inst_16894);
} else
{return null;
}
}
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_16909 = [null,null,null,null,null,null,null,null];(statearr_16909[0] = state_machine__14155__auto__);
(statearr_16909[1] = 1);
return statearr_16909;
});
var state_machine__14155__auto____1 = (function (state_16903){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_16903);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e16910){if((e16910 instanceof Object))
{var ex__14158__auto__ = e16910;var statearr_16911_16913 = state_16903;(statearr_16911_16913[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16903);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16914 = state_16903;
state_16903 = G__16914;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_16903){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_16903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_16912 = f__14225__auto__.call(null);(statearr_16912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_16912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (event,p__16915,db,conn,local_conn){var vec__16916 = p__16915;var id = cljs.core.nth.call(null,vec__16916,0,null);var completed = cljs.core.nth.call(null,vec__16916,1,null);var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_16926){var state_val_16927 = (state_16926[1]);if((state_val_16927 === 2))
{var inst_16919 = (state_16926[2]);var inst_16920 = [new cljs.core.Keyword("db","add","db/add",1014207040),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed];var inst_16921 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16920,null));var inst_16922 = [inst_16921];var inst_16923 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16922,null));var inst_16924 = datascript.transact_BANG_.call(null,local_conn,inst_16923);var state_16926__$1 = (function (){var statearr_16928 = state_16926;(statearr_16928[7] = inst_16919);
return statearr_16928;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16926__$1,inst_16924);
} else
{if((state_val_16927 === 1))
{var inst_16917 = cljs.core.async.timeout.call(null,1000);var state_16926__$1 = state_16926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16926__$1,2,inst_16917);
} else
{return null;
}
}
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_16932 = [null,null,null,null,null,null,null,null];(statearr_16932[0] = state_machine__14155__auto__);
(statearr_16932[1] = 1);
return statearr_16932;
});
var state_machine__14155__auto____1 = (function (state_16926){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_16926);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e16933){if((e16933 instanceof Object))
{var ex__14158__auto__ = e16933;var statearr_16934_16936 = state_16926;(statearr_16934_16936[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16933;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16937 = state_16926;
state_16926 = G__16937;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_16926){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_16926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_16935 = f__14225__auto__.call(null);(statearr_16935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_16935;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (event,p__16938,db,conn,local_conn){var vec__16939 = p__16938;var id = cljs.core.nth.call(null,vec__16939,0,null);var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_16949){var state_val_16950 = (state_16949[1]);if((state_val_16950 === 2))
{var inst_16942 = (state_16949[2]);var inst_16943 = [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id];var inst_16944 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16943,null));var inst_16945 = [inst_16944];var inst_16946 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_16945,null));var inst_16947 = datascript.transact_BANG_.call(null,local_conn,inst_16946);var state_16949__$1 = (function (){var statearr_16951 = state_16949;(statearr_16951[7] = inst_16942);
return statearr_16951;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16949__$1,inst_16947);
} else
{if((state_val_16950 === 1))
{var inst_16940 = cljs.core.async.timeout.call(null,1000);var state_16949__$1 = state_16949;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16949__$1,2,inst_16940);
} else
{return null;
}
}
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_16955 = [null,null,null,null,null,null,null,null];(statearr_16955[0] = state_machine__14155__auto__);
(statearr_16955[1] = 1);
return statearr_16955;
});
var state_machine__14155__auto____1 = (function (state_16949){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_16949);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e16956){if((e16956 instanceof Object))
{var ex__14158__auto__ = e16956;var statearr_16957_16959 = state_16949;(statearr_16957_16959[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16956;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16960 = state_16949;
state_16949 = G__16960;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_16949){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_16949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_16958 = f__14225__auto__.call(null);(statearr_16958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_16958;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (event,p__16961,db,conn,local_conn){var vec__16962 = p__16961;var ids = cljs.core.nth.call(null,vec__16962,0,null);var c__14224__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__14225__auto__ = (function (){var switch__14154__auto__ = (function (state_16974){var state_val_16975 = (state_16974[1]);if((state_val_16975 === 2))
{var inst_16965 = (state_16974[2]);var inst_16970 = (function (){return ((function (inst_16965,state_val_16975){
return (function iter__16966(s__16967){return (new cljs.core.LazySeq(null,((function (inst_16965,state_val_16975){
return (function (){var s__16967__$1 = s__16967;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16967__$1);if(temp__4092__auto__)
{var s__16967__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16967__$2))
{var c__11044__auto__ = cljs.core.chunk_first.call(null,s__16967__$2);var size__11045__auto__ = cljs.core.count.call(null,c__11044__auto__);var b__16969 = cljs.core.chunk_buffer.call(null,size__11045__auto__);if((function (){var i__16968 = 0;while(true){
if((i__16968 < size__11045__auto__))
{var id = cljs.core._nth.call(null,c__11044__auto__,i__16968);cljs.core.chunk_append.call(null,b__16969,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null));
{
var G__16984 = (i__16968 + 1);
i__16968 = G__16984;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16969),iter__16966.call(null,cljs.core.chunk_rest.call(null,s__16967__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16969),null);
}
} else
{var id = cljs.core.first.call(null,s__16967__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",4213852396),id], null),iter__16966.call(null,cljs.core.rest.call(null,s__16967__$2)));
}
} else
{return null;
}
break;
}
});})(inst_16965,state_val_16975))
,null,null));
});
;})(inst_16965,state_val_16975))
})();var inst_16971 = inst_16970.call(null,ids);var inst_16972 = datascript.transact_BANG_.call(null,local_conn,inst_16971);var state_16974__$1 = (function (){var statearr_16976 = state_16974;(statearr_16976[7] = inst_16965);
return statearr_16976;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16974__$1,inst_16972);
} else
{if((state_val_16975 === 1))
{var inst_16963 = cljs.core.async.timeout.call(null,1000);var state_16974__$1 = state_16974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16974__$1,2,inst_16963);
} else
{return null;
}
}
});return ((function (switch__14154__auto__){
return (function() {
var state_machine__14155__auto__ = null;
var state_machine__14155__auto____0 = (function (){var statearr_16980 = [null,null,null,null,null,null,null,null];(statearr_16980[0] = state_machine__14155__auto__);
(statearr_16980[1] = 1);
return statearr_16980;
});
var state_machine__14155__auto____1 = (function (state_16974){while(true){
var ret_value__14156__auto__ = (function (){try{while(true){
var result__14157__auto__ = switch__14154__auto__.call(null,state_16974);if(cljs.core.keyword_identical_QMARK_.call(null,result__14157__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__14157__auto__;
}
break;
}
}catch (e16981){if((e16981 instanceof Object))
{var ex__14158__auto__ = e16981;var statearr_16982_16985 = state_16974;(statearr_16982_16985[5] = ex__14158__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16981;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14156__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16986 = state_16974;
state_16974 = G__16986;
continue;
}
} else
{return ret_value__14156__auto__;
}
break;
}
});
state_machine__14155__auto__ = function(state_16974){
switch(arguments.length){
case 0:
return state_machine__14155__auto____0.call(this);
case 1:
return state_machine__14155__auto____1.call(this,state_16974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__14155__auto____0;
state_machine__14155__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__14155__auto____1;
return state_machine__14155__auto__;
})()
;})(switch__14154__auto__))
})();var state__14226__auto__ = (function (){var statearr_16983 = f__14225__auto__.call(null);(statearr_16983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14224__auto__);
return statearr_16983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14226__auto__);
}));
return c__14224__auto__;
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (event,_,db,conn,local_conn){var seq__16987 = cljs.core.seq.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",-1640467629,null),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Symbol(null,"?id","?id",-1640467629,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"completed","completed",3905939901),new cljs.core.Symbol(null,"?completed","?completed",1756055205,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null)], null)], null),db,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db)));var chunk__16988 = null;var count__16989 = 0;var i__16990 = 0;while(true){
if((i__16990 < count__16989))
{var vec__16991 = cljs.core._nth.call(null,chunk__16988,i__16990);var id = cljs.core.nth.call(null,vec__16991,0,null);var completed = cljs.core.nth.call(null,vec__16991,1,null);todomvc.client_services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn,local_conn);
{
var G__16993 = seq__16987;
var G__16994 = chunk__16988;
var G__16995 = count__16989;
var G__16996 = (i__16990 + 1);
seq__16987 = G__16993;
chunk__16988 = G__16994;
count__16989 = G__16995;
i__16990 = G__16996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16987);if(temp__4092__auto__)
{var seq__16987__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16987__$1))
{var c__11077__auto__ = cljs.core.chunk_first.call(null,seq__16987__$1);{
var G__16997 = cljs.core.chunk_rest.call(null,seq__16987__$1);
var G__16998 = c__11077__auto__;
var G__16999 = cljs.core.count.call(null,c__11077__auto__);
var G__17000 = 0;
seq__16987 = G__16997;
chunk__16988 = G__16998;
count__16989 = G__16999;
i__16990 = G__17000;
continue;
}
} else
{var vec__16992 = cljs.core.first.call(null,seq__16987__$1);var id = cljs.core.nth.call(null,vec__16992,0,null);var completed = cljs.core.nth.call(null,vec__16992,1,null);todomvc.client_services.handle.call(null,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,completed], null),db,conn,local_conn);
{
var G__17001 = cljs.core.next.call(null,seq__16987__$1);
var G__17002 = null;
var G__17003 = 0;
var G__17004 = 0;
seq__16987 = G__17001;
chunk__16988 = G__17002;
count__16989 = G__17003;
i__16990 = G__17004;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,todomvc.client_services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.client_services.start_services = (function start_services(app){var map__17009 = app;var map__17009__$1 = ((cljs.core.seq_QMARK_.call(null,map__17009))?cljs.core.apply.call(null,cljs.core.hash_map,map__17009):map__17009);var conn = cljs.core.get.call(null,map__17009__$1,new cljs.core.Keyword(null,"conn","conn",1016963742));var local_conn = datascript.create_conn.call(null,cljs.core.PersistentArrayMap.EMPTY);return datascript.listen_BANG_.call(null,conn,(function (p__17010){var map__17011 = p__17010;var map__17011__$1 = ((cljs.core.seq_QMARK_.call(null,map__17011))?cljs.core.apply.call(null,cljs.core.hash_map,map__17011):map__17011);var report = map__17011__$1;var db_after = cljs.core.get.call(null,map__17011__$1,new cljs.core.Keyword(null,"db-after","db-after",1658340159));var vec__17012 = cljs.core.first.call(null,datascript.q.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",1017047339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null),new cljs.core.Keyword(null,"in","in",1013907607),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1640531491,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Symbol(null,"?event","?event",259996532,null),new cljs.core.Symbol(null,"?tx","?tx",-1640467268,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1640529473,null),new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.Symbol(null,"?args","?args",-1579347115,null)], null)], null)], null),db_after,new cljs.core.Keyword(null,"max-tx","max-tx",4227685119).cljs$core$IFn$_invoke$arity$1(db_after)));var event = cljs.core.nth.call(null,vec__17012,0,null);var args = cljs.core.nth.call(null,vec__17012,1,null);return todomvc.client_services.handle.call(null,event,args,db_after,conn,local_conn);
}));
});

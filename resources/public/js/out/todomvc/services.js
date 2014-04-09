// Compiled by ClojureScript 0.0-2173
goog.provide('todomvc.services');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('cljs_uuid_utils');
goog.require('cljs_uuid_utils');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('cljs.core.async');
/**
* Not yet in cljs-ajax 0.2.3
* @param {...*} var_args
*/
todomvc.services.DELETE = (function() { 
var DELETE__delegate = function (uri,p__20126){var vec__20128 = p__20126;var opts = cljs.core.nth.call(null,vec__20128,0,null);return ajax.core.ajax_request.call(null,uri,"DELETE",ajax.core.transform_opts.call(null,opts));
};
var DELETE = function (uri,var_args){
var p__20126 = null;if (arguments.length > 1) {
  p__20126 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return DELETE__delegate.call(this,uri,p__20126);};
DELETE.cljs$lang$maxFixedArity = 1;
DELETE.cljs$lang$applyTo = (function (arglist__20129){
var uri = cljs.core.first(arglist__20129);
var p__20126 = cljs.core.rest(arglist__20129);
return DELETE__delegate(uri,p__20126);
});
DELETE.cljs$core$IFn$_invoke$arity$variadic = DELETE__delegate;
return DELETE;
})()
;
todomvc.services.todos_url = (function todos_url(){[cljs.core.str(document.URL)].join('');
return [cljs.core.str(window.location.pathname),cljs.core.str("/todos")].join('');
});
todomvc.services.csrf_token = (function csrf_token(){return goog.dom.getElement("csrf-token").getAttribute("value");
});
todomvc.services.error_handler = (function error_handler(channel){return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",1110689146)], null));
});
todomvc.services.handle = (function (){var method_table__11182__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11183__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__11184__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11186__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",(function (app,action){return cljs.core.first.call(null,action);
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__11186__auto__,method_table__11182__auto__,prefer_table__11183__auto__,method_cache__11184__auto__,cached_hierarchy__11185__auto__));
})();
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"create-item","create-item",4768804022),(function (p__20130,p__20131){var map__20132 = p__20130;var map__20132__$1 = ((cljs.core.seq_QMARK_.call(null,map__20132))?cljs.core.apply.call(null,cljs.core.hash_map,map__20132):map__20132);var channel = cljs.core.get.call(null,map__20132__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__20133 = p__20131;var _ = cljs.core.nth.call(null,vec__20133,0,null);var text = cljs.core.nth.call(null,vec__20133,1,null);var temp_id = cljs_uuid_utils.make_random_uuid.call(null);cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-item","add-item",4026553393),temp_id,text], null));
return ajax.core.POST.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),temp_id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(res);return cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-item","commit-item",2479329627),temp_id,id], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("FAil res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"complete-edit","complete-edit",1152265616),(function (p__20134,p__20135){var map__20136 = p__20134;var map__20136__$1 = ((cljs.core.seq_QMARK_.call(null,map__20136))?cljs.core.apply.call(null,cljs.core.hash_map,map__20136):map__20136);var channel = cljs.core.get.call(null,map__20136__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__20137 = p__20135;var _ = cljs.core.nth.call(null,vec__20137,0,null);var id = cljs.core.nth.call(null,vec__20137,1,null);var text = cljs.core.nth.call(null,vec__20137,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"text","text",1017460895),text], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),(function (p__20138,p__20139){var map__20140 = p__20138;var map__20140__$1 = ((cljs.core.seq_QMARK_.call(null,map__20140))?cljs.core.apply.call(null,cljs.core.hash_map,map__20140):map__20140);var channel = cljs.core.get.call(null,map__20140__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__20141 = p__20139;var _ = cljs.core.nth.call(null,vec__20141,0,null);var id = cljs.core.nth.call(null,vec__20141,1,null);var completed = cljs.core.nth.call(null,vec__20141,2,null);return ajax.core.PUT.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"completed","completed",3905939901),completed], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"remove-item","remove-item",673860142),(function (p__20142,p__20143){var map__20144 = p__20142;var map__20144__$1 = ((cljs.core.seq_QMARK_.call(null,map__20144))?cljs.core.apply.call(null,cljs.core.hash_map,map__20144):map__20144);var channel = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var vec__20145 = p__20143;var _ = cljs.core.nth.call(null,vec__20145,0,null);var id = cljs.core.nth.call(null,vec__20145,1,null);return todomvc.services.DELETE.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),id], null),new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){return console.log([cljs.core.str("Succesful res: "),cljs.core.str(res)].join(''));
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){console.log([cljs.core.str("Fail res: "),cljs.core.str(res)].join(''));
return todomvc.services.error_handler.call(null,channel);
}),new cljs.core.Keyword(null,"format","format",4040092521),cljs.core.merge.call(null,ajax.core.edn_request_format.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1017400584),(function (res){var res_text = res.getResponseText();if((cljs.core.count.call(null,res_text) > 0))
{throw (new Error([cljs.core.str("Assumed no content response has content: "),cljs.core.str(res_text)].join('')));
} else
{return null;
}
}),new cljs.core.Keyword(null,"description","description",3584325486),"EDN (CUSTOM)"], null)),new cljs.core.Keyword(null,"headers","headers",1809212152),new cljs.core.PersistentArrayMap(null, 1, ["X-CSRF-Token",todomvc.services.csrf_token.call(null)], null)], null));
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"clear-completed","clear-completed",888981053),(function (p__20146,_){var map__20147 = p__20146;var map__20147__$1 = ((cljs.core.seq_QMARK_.call(null,map__20147))?cljs.core.apply.call(null,cljs.core.hash_map,map__20147):map__20147);var channel = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__20147__$1,new cljs.core.Keyword(null,"state","state",1123661827));var seq__20148 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)));var chunk__20150 = null;var count__20151 = 0;var i__20152 = 0;while(true){
if((i__20152 < count__20151))
{var map__20154 = cljs.core._nth.call(null,chunk__20150,i__20152);var map__20154__$1 = ((cljs.core.seq_QMARK_.call(null,map__20154))?cljs.core.apply.call(null,cljs.core.hash_map,map__20154):map__20154);var item = map__20154__$1;var completed = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__20154__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__20156 = seq__20148;
var G__20157 = chunk__20150;
var G__20158 = count__20151;
var G__20159 = (i__20152 + 1);
seq__20148 = G__20156;
chunk__20150 = G__20157;
count__20151 = G__20158;
i__20152 = G__20159;
continue;
}
} else
{{
var G__20160 = seq__20148;
var G__20161 = chunk__20150;
var G__20162 = count__20151;
var G__20163 = (i__20152 + 1);
seq__20148 = G__20160;
chunk__20150 = G__20161;
count__20151 = G__20162;
i__20152 = G__20163;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20148);if(temp__4092__auto__)
{var seq__20148__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20148__$1))
{var c__11072__auto__ = cljs.core.chunk_first.call(null,seq__20148__$1);{
var G__20164 = cljs.core.chunk_rest.call(null,seq__20148__$1);
var G__20165 = c__11072__auto__;
var G__20166 = cljs.core.count.call(null,c__11072__auto__);
var G__20167 = 0;
seq__20148 = G__20164;
chunk__20150 = G__20165;
count__20151 = G__20166;
i__20152 = G__20167;
continue;
}
} else
{var map__20155 = cljs.core.first.call(null,seq__20148__$1);var map__20155__$1 = ((cljs.core.seq_QMARK_.call(null,map__20155))?cljs.core.apply.call(null,cljs.core.hash_map,map__20155):map__20155);var item = map__20155__$1;var completed = cljs.core.get.call(null,map__20155__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__20155__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core.truth_(completed))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-item","remove-item",673860142),id], null));
{
var G__20168 = cljs.core.next.call(null,seq__20148__$1);
var G__20169 = null;
var G__20170 = 0;
var G__20171 = 0;
seq__20148 = G__20168;
chunk__20150 = G__20169;
count__20151 = G__20170;
i__20152 = G__20171;
continue;
}
} else
{{
var G__20172 = cljs.core.next.call(null,seq__20148__$1);
var G__20173 = null;
var G__20174 = 0;
var G__20175 = 0;
seq__20148 = G__20172;
chunk__20150 = G__20173;
count__20151 = G__20174;
i__20152 = G__20175;
continue;
}
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"toggle-all","toggle-all",4455256858),(function (p__20176,_){var map__20177 = p__20176;var map__20177__$1 = ((cljs.core.seq_QMARK_.call(null,map__20177))?cljs.core.apply.call(null,cljs.core.hash_map,map__20177):map__20177);var channel = cljs.core.get.call(null,map__20177__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var state = cljs.core.get.call(null,map__20177__$1,new cljs.core.Keyword(null,"state","state",1123661827));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));var target = !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"completed","completed",3905939901),items));var seq__20178 = cljs.core.seq.call(null,items);var chunk__20180 = null;var count__20181 = 0;var i__20182 = 0;while(true){
if((i__20182 < count__20181))
{var map__20184 = cljs.core._nth.call(null,chunk__20180,i__20182);var map__20184__$1 = ((cljs.core.seq_QMARK_.call(null,map__20184))?cljs.core.apply.call(null,cljs.core.hash_map,map__20184):map__20184);var item = map__20184__$1;var completed = cljs.core.get.call(null,map__20184__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__20184__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__20186 = seq__20178;
var G__20187 = chunk__20180;
var G__20188 = count__20181;
var G__20189 = (i__20182 + 1);
seq__20178 = G__20186;
chunk__20180 = G__20187;
count__20181 = G__20188;
i__20182 = G__20189;
continue;
}
} else
{{
var G__20190 = seq__20178;
var G__20191 = chunk__20180;
var G__20192 = count__20181;
var G__20193 = (i__20182 + 1);
seq__20178 = G__20190;
chunk__20180 = G__20191;
count__20181 = G__20192;
i__20182 = G__20193;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20178);if(temp__4092__auto__)
{var seq__20178__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20178__$1))
{var c__11072__auto__ = cljs.core.chunk_first.call(null,seq__20178__$1);{
var G__20194 = cljs.core.chunk_rest.call(null,seq__20178__$1);
var G__20195 = c__11072__auto__;
var G__20196 = cljs.core.count.call(null,c__11072__auto__);
var G__20197 = 0;
seq__20178 = G__20194;
chunk__20180 = G__20195;
count__20181 = G__20196;
i__20182 = G__20197;
continue;
}
} else
{var map__20185 = cljs.core.first.call(null,seq__20178__$1);var map__20185__$1 = ((cljs.core.seq_QMARK_.call(null,map__20185))?cljs.core.apply.call(null,cljs.core.hash_map,map__20185):map__20185);var item = map__20185__$1;var completed = cljs.core.get.call(null,map__20185__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var id = cljs.core.get.call(null,map__20185__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(cljs.core._EQ_.call(null,completed,!(target)))
{cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-item","toggle-item",4616866142),id,target], null));
{
var G__20198 = cljs.core.next.call(null,seq__20178__$1);
var G__20199 = null;
var G__20200 = 0;
var G__20201 = 0;
seq__20178 = G__20198;
chunk__20180 = G__20199;
count__20181 = G__20200;
i__20182 = G__20201;
continue;
}
} else
{{
var G__20202 = cljs.core.next.call(null,seq__20178__$1);
var G__20203 = null;
var G__20204 = 0;
var G__20205 = 0;
seq__20178 = G__20202;
chunk__20180 = G__20203;
count__20181 = G__20204;
i__20182 = G__20205;
continue;
}
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,todomvc.services.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
todomvc.services.start_services = (function start_services(app){console.log([cljs.core.str("Url is: "),cljs.core.str(document.URL)].join(''));
var map__20243 = app;var map__20243__$1 = ((cljs.core.seq_QMARK_.call(null,map__20243))?cljs.core.apply.call(null,cljs.core.hash_map,map__20243):map__20243);var emit = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"emit","emit",1017021253));var channel = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"channel","channel",1752854645));var c__13948__auto___20280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13949__auto__ = (function (){var switch__13878__auto__ = (function (state_20258){var state_val_20259 = (state_20258[1]);if((state_val_20259 === 7))
{var inst_20247 = (state_20258[2]);var inst_20248 = [cljs.core.str("service: "),cljs.core.str(inst_20247)].join('');var inst_20249 = console.log(inst_20248);var inst_20250 = todomvc.services.handle.call(null,app,inst_20247);var state_20258__$1 = (function (){var statearr_20260 = state_20258;(statearr_20260[7] = inst_20250);
(statearr_20260[8] = inst_20249);
return statearr_20260;
})();var statearr_20261_20281 = state_20258__$1;(statearr_20261_20281[2] = null);
(statearr_20261_20281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20259 === 6))
{var inst_20254 = (state_20258[2]);var state_20258__$1 = state_20258;var statearr_20262_20282 = state_20258__$1;(statearr_20262_20282[2] = inst_20254);
(statearr_20262_20282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20259 === 5))
{var state_20258__$1 = state_20258;var statearr_20263_20283 = state_20258__$1;(statearr_20263_20283[2] = null);
(statearr_20263_20283[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20259 === 4))
{var state_20258__$1 = state_20258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20258__$1,7,emit);
} else
{if((state_val_20259 === 3))
{var inst_20256 = (state_20258[2]);var state_20258__$1 = state_20258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20258__$1,inst_20256);
} else
{if((state_val_20259 === 2))
{var state_20258__$1 = state_20258;if(true)
{var statearr_20264_20284 = state_20258__$1;(statearr_20264_20284[1] = 4);
} else
{var statearr_20265_20285 = state_20258__$1;(statearr_20265_20285[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20259 === 1))
{var state_20258__$1 = state_20258;var statearr_20266_20286 = state_20258__$1;(statearr_20266_20286[2] = null);
(statearr_20266_20286[1] = 2);
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
});return ((function (switch__13878__auto__){
return (function() {
var state_machine__13879__auto__ = null;
var state_machine__13879__auto____0 = (function (){var statearr_20270 = [null,null,null,null,null,null,null,null,null];(statearr_20270[0] = state_machine__13879__auto__);
(statearr_20270[1] = 1);
return statearr_20270;
});
var state_machine__13879__auto____1 = (function (state_20258){while(true){
var ret_value__13880__auto__ = (function (){try{while(true){
var result__13881__auto__ = switch__13878__auto__.call(null,state_20258);if(cljs.core.keyword_identical_QMARK_.call(null,result__13881__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13881__auto__;
}
break;
}
}catch (e20271){if((e20271 instanceof Object))
{var ex__13882__auto__ = e20271;var statearr_20272_20287 = state_20258;(statearr_20272_20287[5] = ex__13882__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13880__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20288 = state_20258;
state_20258 = G__20288;
continue;
}
} else
{return ret_value__13880__auto__;
}
break;
}
});
state_machine__13879__auto__ = function(state_20258){
switch(arguments.length){
case 0:
return state_machine__13879__auto____0.call(this);
case 1:
return state_machine__13879__auto____1.call(this,state_20258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13879__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13879__auto____0;
state_machine__13879__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13879__auto____1;
return state_machine__13879__auto__;
})()
;})(switch__13878__auto__))
})();var state__13950__auto__ = (function (){var statearr_20273 = f__13949__auto__.call(null);(statearr_20273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13948__auto___20280);
return statearr_20273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13950__auto__);
}));
return ajax.core.GET.call(null,todomvc.services.todos_url.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",1706707644),(function (res){var seq__20274 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"todos","todos",1124439135).cljs$core$IFn$_invoke$arity$1(res));var chunk__20275 = null;var count__20276 = 0;var i__20277 = 0;while(true){
if((i__20277 < count__20276))
{var map__20278 = cljs.core._nth.call(null,chunk__20275,i__20277);var map__20278__$1 = ((cljs.core.seq_QMARK_.call(null,map__20278))?cljs.core.apply.call(null,cljs.core.hash_map,map__20278):map__20278);var todo = map__20278__$1;var completed = cljs.core.get.call(null,map__20278__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__20278__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__20278__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__20289 = seq__20274;
var G__20290 = chunk__20275;
var G__20291 = count__20276;
var G__20292 = (i__20277 + 1);
seq__20274 = G__20289;
chunk__20275 = G__20290;
count__20276 = G__20291;
i__20277 = G__20292;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20274);if(temp__4092__auto__)
{var seq__20274__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20274__$1))
{var c__11072__auto__ = cljs.core.chunk_first.call(null,seq__20274__$1);{
var G__20293 = cljs.core.chunk_rest.call(null,seq__20274__$1);
var G__20294 = c__11072__auto__;
var G__20295 = cljs.core.count.call(null,c__11072__auto__);
var G__20296 = 0;
seq__20274 = G__20293;
chunk__20275 = G__20294;
count__20276 = G__20295;
i__20277 = G__20296;
continue;
}
} else
{var map__20279 = cljs.core.first.call(null,seq__20274__$1);var map__20279__$1 = ((cljs.core.seq_QMARK_.call(null,map__20279))?cljs.core.apply.call(null,cljs.core.hash_map,map__20279):map__20279);var todo = map__20279__$1;var completed = cljs.core.get.call(null,map__20279__$1,new cljs.core.Keyword(null,"completed","completed",3905939901));var text = cljs.core.get.call(null,map__20279__$1,new cljs.core.Keyword(null,"text","text",1017460895));var id = cljs.core.get.call(null,map__20279__$1,new cljs.core.Keyword(null,"id","id",1013907597));cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seed-item","seed-item",1596530785),id,text,completed], null));
{
var G__20297 = cljs.core.next.call(null,seq__20274__$1);
var G__20298 = null;
var G__20299 = 0;
var G__20300 = 0;
seq__20274 = G__20297;
chunk__20275 = G__20298;
count__20276 = G__20299;
i__20277 = G__20300;
continue;
}
}
} else
{return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",1866823671),(function (res){return todomvc.services.error_handler.call(null,channel);
})], null));
});

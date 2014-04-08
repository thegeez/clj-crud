// Compiled by ClojureScript 0.0-2173
goog.provide('cljs_uuid_utils');
goog.require('cljs.core');
goog.require('goog.string.StringBuffer');
/**
* (uuid-string a-uuid)  =>  uuid-str
* Arguments and Values:
* a-uuid --- a cljs.core/UUID instance.
* uuid-str --- returns a string representation of the UUID instance
* Description:
* Returns the string representation of the UUID instance in the format of,
* "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" similarly to java.util.UUID/toString.
* Note that this is different from cljs.core/UUID's EDN string-format.
* Examples:
* (def u (make-random-uuid))  =>  #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
* (uuid-string u) => "305e764d-b451-47ae-a90d-5db782ac1f2e"
*/
cljs_uuid_utils.uuid_string = (function uuid_string(a_uuid){return [cljs.core.str(a_uuid.uuid)].join('');
});
/**
* (make-random-uuid)  =>  new-uuid
* Arguments and Values:
* new-uuid --- new type 4 (pseudo randomly generated) cljs.core/UUID instance.
* Description:
* Returns pseudo randomly generated UUID,
* like: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx as per http://www.ietf.org/rfc/rfc4122.txt.
* Examples:
* (make-random-uuid)  =>  #uuid "305e764d-b451-47ae-a90d-5db782ac1f2e"
* (type (make-random-uuid)) => cljs.core/UUID
*/
cljs_uuid_utils.make_random_uuid = (function make_random_uuid(){var f = (function f(){return cljs.core.rand_int.call(null,16).toString(16);
});
var g = (function g(){return (8 | (3 & cljs.core.rand_int.call(null,15))).toString(16);
});
return (new cljs.core.UUID((new goog.string.StringBuffer()).append(f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),"-4",f.call(null),f.call(null),f.call(null),"-",g.call(null),f.call(null),f.call(null),f.call(null),"-",f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null),f.call(null))));
});
cljs_uuid_utils.uuid_regex = (function (){var x = "[0-9a-fA-F]";return cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str("-"),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str("-"),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str("-"),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str("-"),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str(x),cljs.core.str("$")].join(''));
})();
/**
* (valid-uuid? maybe-uuid)  =>  truthy-falsy
* Arguments and Values:
* maybe-uuid --- string or UUID-instance that may represent a conformant UUID.
* truthy-falsy --- Returns either the conforming UUID-string (truthy) or nil (falsy).
* Description:
* Predicate to test whether a string representation conforms to a
* "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" format where each x is a hexadecimal character.
* Input can be a maybe-uuid string or a cljs.core/UUID instance.
* Note that the current "cljs.core/UUID." constructor does not check for any conformance.
* Examples:
* (valid-uuid? "NO-WAY")  =>  nil
* (valid-uuid? "4d7332e7-e4c6-4ca5-af91-86336c825e25")  => "4d7332e7-e4c6-4ca5-af91-86336c825e25"
* (valid-uuid? (UUID. "4d7332e7-e4c6-4ca5-af91-86336c825e25"))  => "4d7332e7-e4c6-4ca5-af91-86336c825e25"
* (valid-uuid? (UUID. "YES-WAY"))  => nil
*/
cljs_uuid_utils.valid_uuid_QMARK_ = (function valid_uuid_QMARK_(maybe_uuid){var maybe_uuid_str = ((cljs.core._EQ_.call(null,cljs.core.type.call(null,maybe_uuid),cljs.core.UUID))?cljs_uuid_utils.uuid_string.call(null,maybe_uuid):((typeof maybe_uuid === 'string')?maybe_uuid:((new cljs.core.Keyword(null,"true","true",1017473280))?false:null)));if(cljs.core.truth_(maybe_uuid_str))
{return cljs.core.re_find.call(null,cljs_uuid_utils.uuid_regex,maybe_uuid_str);
} else
{return null;
}
});
/**
* (make-uuid-from maybe-uuid maybe-uuid)  =>  uuid-or-nil
* Arguments and Values:
* maybe-uuid --- string or UUID-instance that may represent a conformant UUID.
* uuid-or-nil --- Returns either a cljs.core/UUID instance or nil.
* Description:
* Returns a cljs.core/UUID instance for a conformant UUID-string representation, or nil.
* Input can be a string or a cljs.core/UUID instance.
* Note that if the input UUID-instance is not valid, nil is returned.
* Examples:
* (make-uuid-from "NO-WAY")  =>  nil
* (make-uuid-from "4d7332e7-e4c6-4ca5-af91-86336c825e25")  => #uuid "4d7332e7-e4c6-4ca5-af91-86336c825e25"
* (make-uuid-from (UUID. "4d7332e7-e4c6-4ca5-af91-86336c825e25"))  => #uuid "4d7332e7-e4c6-4ca5-af91-86336c825e25"
* (make-uuid-from (UUID. "YES-WAY"))  => nil
*/
cljs_uuid_utils.make_uuid_from = (function make_uuid_from(maybe_uuid){var temp__4092__auto__ = cljs_uuid_utils.valid_uuid_QMARK_.call(null,maybe_uuid);if(cljs.core.truth_(temp__4092__auto__))
{var uuid = temp__4092__auto__;if(cljs.core._EQ_.call(null,cljs.core.type.call(null,maybe_uuid),cljs.core.UUID))
{return maybe_uuid;
} else
{return (new cljs.core.UUID(uuid));
}
} else
{return null;
}
});

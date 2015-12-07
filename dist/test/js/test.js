(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":11}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":12}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":13}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":14}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":15}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":16}],7:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],8:[function(require,module,exports){
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":3}],9:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],10:[function(require,module,exports){
"use strict";

var _Array$from = require("babel-runtime/core-js/array/from")["default"];

exports["default"] = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return _Array$from(arr);
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/array/from":1}],11:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":21,"../../modules/es6.array.from":69,"../../modules/es6.string.iterator":73}],12:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":45}],13:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":45}],14:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":21,"../modules/es6.object.to-string":71,"../modules/es6.promise":72,"../modules/es6.string.iterator":73,"../modules/web.dom.iterable":75}],15:[function(require,module,exports){
require('../../modules/es6.symbol');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":21,"../../modules/es6.symbol":74}],16:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":67,"../../modules/es6.string.iterator":73,"../../modules/web.dom.iterable":75}],17:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],18:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":38}],19:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./$.cof')
  , TAG = require('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":20,"./$.wks":67}],20:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],21:[function(require,module,exports){
var core = module.exports = {version: '1.2.1'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],22:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":17}],23:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , PROTOTYPE = 'prototype';
var ctx = function(fn, that){
  return function(){
    return fn.apply(that, arguments);
  };
};
var $def = function(type, name, source){
  var key, own, out, exp
    , isGlobal = type & $def.G
    , isProto  = type & $def.P
    , target   = isGlobal ? global : type & $def.S
        ? global[name] : (global[name] || {})[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // contains in native
    own = !(type & $def.F) && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    if(isGlobal && typeof target[key] != 'function')exp = source[key];
    // bind timers to global for call from export context
    else if(type & $def.B && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & $def.W && target[key] == out)!function(C){
      exp = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      exp[PROTOTYPE] = C[PROTOTYPE];
    }(out);
    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export
    exports[key] = exp;
    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$def.F = 1;  // forced
$def.G = 2;  // global
$def.S = 4;  // static
$def.P = 8;  // proto
$def.B = 16; // bind
$def.W = 32; // wrap
module.exports = $def;
},{"./$.core":21,"./$.global":30}],24:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],25:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":30,"./$.is-object":38}],26:[function(require,module,exports){
// all enumerable object keys, includes symbols
var $ = require('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":45}],27:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],28:[function(require,module,exports){
var ctx         = require('./$.ctx')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , anObject    = require('./$.an-object')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":18,"./$.ctx":22,"./$.is-array-iter":36,"./$.iter-call":39,"./$.to-length":63,"./core.get-iterator-method":68}],29:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toString  = {}.toString
  , toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":45,"./$.to-iobject":62}],30:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var UNDEFINED = 'undefined';
var global = module.exports = typeof window != UNDEFINED && window.Math == Math
  ? window : typeof self != UNDEFINED && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],31:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],32:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.support-desc') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":45,"./$.property-desc":50,"./$.support-desc":58}],33:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":30}],34:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],35:[function(require,module,exports){
// indexed object, fallback for non-array-like ES3 strings
var cof = require('./$.cof');
module.exports = 0 in Object('z') ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":20}],36:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./$.iterators')
  , ITERATOR  = require('./$.wks')('iterator');
module.exports = function(it){
  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
};
},{"./$.iterators":44,"./$.wks":67}],37:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":20}],38:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],39:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":18}],40:[function(require,module,exports){
'use strict';
var $ = require('./$')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: require('./$.property-desc')(1,next)});
  require('./$.tag')(Constructor, NAME + ' Iterator');
};
},{"./$":45,"./$.hide":32,"./$.property-desc":50,"./$.tag":59,"./$.wks":67}],41:[function(require,module,exports){
'use strict';
var LIBRARY         = require('./$.library')
  , $def            = require('./$.def')
  , $redef          = require('./$.redef')
  , hide            = require('./$.hide')
  , has             = require('./$.has')
  , SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , Iterators       = require('./$.iterators')
  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR     = '@@iterator'
  , KEYS            = 'keys'
  , VALUES          = 'values';
var returnThis = function(){ return this; };
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
  require('./$.iter-create')(Constructor, NAME, next);
  var createMethod = function(kind){
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG      = NAME + ' Iterator'
    , proto    = Base.prototype
    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , _default = _native || createMethod(DEFAULT)
    , methods, key;
  // Fix native
  if(_native){
    var IteratorPrototype = require('./$').getProto(_default.call(new Base));
    // Set @@toStringTag to native iterators
    require('./$.tag')(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
  }
  // Define iterator
  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
  // Plug for library
  Iterators[NAME] = _default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      keys:    IS_SET            ? _default : createMethod(KEYS),
      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
      entries: DEFAULT != VALUES ? _default : createMethod('entries')
    };
    if(FORCE)for(key in methods){
      if(!(key in proto))$redef(proto, key, methods[key]);
    } else $def($def.P + $def.F * BUGGY, NAME, methods);
  }
};
},{"./$":45,"./$.def":23,"./$.has":31,"./$.hide":32,"./$.iter-create":40,"./$.iterators":44,"./$.library":47,"./$.redef":51,"./$.tag":59,"./$.wks":67}],42:[function(require,module,exports){
var SYMBOL_ITERATOR = require('./$.wks')('iterator')
  , SAFE_CLOSING    = false;
try {
  var riter = [7][SYMBOL_ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }
module.exports = function(exec){
  if(!SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[SYMBOL_ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[SYMBOL_ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":67}],43:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],44:[function(require,module,exports){
module.exports = {};
},{}],45:[function(require,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],46:[function(require,module,exports){
var $         = require('./$')
  , toIObject = require('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":45,"./$.to-iobject":62}],47:[function(require,module,exports){
module.exports = true;
},{}],48:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    if(domain)domain.enter();
    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
}

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":20,"./$.global":30,"./$.task":60}],49:[function(require,module,exports){
var $redef = require('./$.redef');
module.exports = function(target, src){
  for(var key in src)$redef(target, key, src[key]);
  return target;
};
},{"./$.redef":51}],50:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],51:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":32}],52:[function(require,module,exports){
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],53:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = require('./$').getDesc
  , isObject = require('./$.is-object')
  , anObject = require('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line no-proto
    function(test, buggy, set){
      try {
        set = require('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":45,"./$.an-object":18,"./$.ctx":22,"./$.is-object":38}],54:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":30}],55:[function(require,module,exports){
'use strict';
var $       = require('./$')
  , SPECIES = require('./$.wks')('species');
module.exports = function(C){
  if(require('./$.support-desc') && !(SPECIES in C))$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":45,"./$.support-desc":58,"./$.wks":67}],56:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],57:[function(require,module,exports){
// true  -> String#at
// false -> String#codePointAt
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l
      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":24,"./$.to-integer":61}],58:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":27}],59:[function(require,module,exports){
var has  = require('./$.has')
  , hide = require('./$.hide')
  , TAG  = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))hide(it, TAG, tag);
};
},{"./$.has":31,"./$.hide":32,"./$.wks":67}],60:[function(require,module,exports){
'use strict';
var ctx                = require('./$.ctx')
  , invoke             = require('./$.invoke')
  , html               = require('./$.html')
  , cel                = require('./$.dom-create')
  , global             = require('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":20,"./$.ctx":22,"./$.dom-create":25,"./$.global":30,"./$.html":33,"./$.invoke":34}],61:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],62:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":24,"./$.iobject":35}],63:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":61}],64:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":24}],65:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],66:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],67:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || require('./$.uid'))('Symbol.' + name));
};
},{"./$.global":30,"./$.shared":54,"./$.uid":65}],68:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};
},{"./$.classof":19,"./$.core":21,"./$.iterators":44,"./$.wks":67}],69:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $def        = require('./$.def')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$def($def.S + $def.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , mapfn   = arguments[1]
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, arguments[2], 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./$.ctx":22,"./$.def":23,"./$.is-array-iter":36,"./$.iter-call":39,"./$.iter-detect":42,"./$.to-length":63,"./$.to-object":64,"./core.get-iterator-method":68}],70:[function(require,module,exports){
'use strict';
var setUnscope = require('./$.unscope')
  , step       = require('./$.iter-step')
  , Iterators  = require('./$.iterators')
  , toIObject  = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
require('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

setUnscope('keys');
setUnscope('values');
setUnscope('entries');
},{"./$.iter-define":41,"./$.iter-step":43,"./$.iterators":44,"./$.to-iobject":62,"./$.unscope":66}],71:[function(require,module,exports){

},{}],72:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $def       = require('./$.def')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same')
  , species    = require('./$.species')
  , SPECIES    = require('./$.wks')('species')
  , RECORD     = require('./$.uid')('record')
  , asap       = require('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var useNative = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && require('./$.support-desc')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var isPromise = function(it){
  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
};
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(react){
      var cb = ok ? react.ok : react.fail
        , ret, then;
      try {
        if(cb){
          if(!ok)record.h = true;
          ret = cb === true ? value : cb(value);
          if(ret === react.P){
            react.rej(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(ret)){
            then.call(ret, react.res, react.rej);
          } else react.res(ret);
        } else react.rej(value);
      } catch(err){
        react.rej(err);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise[RECORD]
    , chain  = record.a || record.c
    , i      = 0
    , react;
  if(record.h)return false;
  while(chain.length > i){
    react = chain[i++];
    if(react.fail || !isUnhandled(react.P))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!useNative){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    this[RECORD] = record;
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.mix')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var S = anObject(anObject(this).constructor)[SPECIES];
      var react = {
        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
        fail: typeof onRejected == 'function'  ? onRejected  : false
      };
      var promise = react.P = new (S != undefined ? S : P)(function(res, rej){
        react.res = res;
        react.rej = rej;
      });
      aFunction(react.res);
      aFunction(react.rej);
      var record = this[RECORD];
      record.c.push(react);
      if(record.a)record.a.push(react);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

// export
$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
require('./$.tag')(P, PROMISE);
species(P);
species(Wrapper = require('./$.core')[PROMISE]);

// statics
$def($def.S + $def.F * !useNative, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    return new this(function(res, rej){ rej(r); });
  }
});
$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    return isPromise(x) && sameConstructor(x.constructor, this)
      ? x : new this(function(res){ res(x); });
  }
});
$def($def.S + $def.F * !(useNative && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C      = getConstructor(this)
      , values = [];
    return new C(function(res, rej){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        C.resolve(promise).then(function(value){
          results[index] = value;
          --remaining || res(results);
        }, rej);
      });
      else res(results);
    });
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C = getConstructor(this);
    return new C(function(res, rej){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(res, rej);
      });
    });
  }
});
},{"./$":45,"./$.a-function":17,"./$.an-object":18,"./$.classof":19,"./$.core":21,"./$.ctx":22,"./$.def":23,"./$.for-of":28,"./$.global":30,"./$.is-object":38,"./$.iter-detect":42,"./$.library":47,"./$.microtask":48,"./$.mix":49,"./$.same":52,"./$.set-proto":53,"./$.species":55,"./$.strict-new":56,"./$.support-desc":58,"./$.tag":59,"./$.uid":65,"./$.wks":67}],73:[function(require,module,exports){
'use strict';
var $at  = require('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":41,"./$.string-at":57}],74:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , SUPPORT_DESC   = require('./$.support-desc')
  , $def           = require('./$.def')
  , $redef         = require('./$.redef')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setTag         = require('./$.tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
  , isObject       = require('./$.is-object')
  , anObject       = require('./$.an-object')
  , toIObject      = require('./$.to-iobject')
  , createDesc     = require('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = SUPPORT_DESC && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  SUPPORT_DESC && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  var args = [it]
    , i    = 1
    , replacer, $replacer;
  while(arguments.length > i)args.push(arguments[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments[0]));
  };
  $redef($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(SUPPORT_DESC && !require('./$.library')){
    $redef(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
    'species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), function(it){
    var sym = wks(it);
    symbolStatics[it] = useNative ? sym : wrap(sym);
  }
);

setter = true;

$def($def.G + $def.W, {Symbol: $Symbol});

$def($def.S, 'Symbol', symbolStatics);

$def($def.S + $def.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $def($def.S + $def.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setTag(global.JSON, 'JSON', true);
},{"./$":45,"./$.an-object":18,"./$.def":23,"./$.enum-keys":26,"./$.fails":27,"./$.get-names":29,"./$.global":30,"./$.has":31,"./$.is-array":37,"./$.is-object":38,"./$.keyof":46,"./$.library":47,"./$.property-desc":50,"./$.redef":51,"./$.shared":54,"./$.support-desc":58,"./$.tag":59,"./$.to-iobject":62,"./$.uid":65,"./$.wks":67}],75:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":44,"./es6.array.iterator":70}],76:[function(require,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":77}],77:[function(require,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      var enqueueResult =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(function () {
        return invoke(method, arg);
      }) : new _Promise(function (resolve) {
        resolve(invoke(method, arg));
      });

      // Avoid propagating enqueueResult failures to Promises returned by
      // later invocations of the iterator.
      previousPromise = enqueueResult["catch"](function (ignored) {});

      return enqueueResult;
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":78,"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/promise":4,"babel-runtime/core-js/symbol":5,"babel-runtime/core-js/symbol/iterator":6}],78:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],79:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _secretFormJsSecretFormJs = require("./secret-form/js/secret-form.js");

var _secretFormJsSecretFormJs2 = _interopRequireDefault(_secretFormJsSecretFormJs);

exports.secretFormView = _secretFormJsSecretFormJs2["default"];

},{"./secret-form/js/secret-form.js":86,"babel-runtime/helpers/interop-require-default":9}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsStringToBufferJs = require("../../utils/string-to-buffer.js");

exports.computeSecret = computeSecret;
exports.computePublicKey = computePublicKey;

var ALGO = {
	name: "AES-CBC",
	iv: new Uint8Array(16) // filled with zero
};

function computeSecret(passphraseStr, publicKey) {
	return computePrivateKey(passphraseStr).then(function (privateKey) {
		return window.crypto.subtle.decrypt(ALGO, privateKey, publicKey);
	});
}

function computePublicKey(passphraseStr, secret) {
	return computePrivateKey(passphraseStr).then(function (privateKey) {
		return window.crypto.subtle.encrypt(ALGO, privateKey, secret);
	});
}

function computePrivateKey(passphraseStr) {
	var passphrase = (0, _utilsStringToBufferJs.stringToBuffer)(passphraseStr);
	return window.crypto.subtle.digest("SHA-256", passphrase).then(function (passphraseDigest) {
		return window.crypto.subtle.importKey("raw", passphraseDigest, "AES-CBC", true, ["encrypt", "decrypt"]);
	});
}

},{"../../utils/string-to-buffer.js":100}],81:[function(require,module,exports){
"use strict";

var _cryptoJs = require("./crypto.js");

var _utilsStringToBufferJs = require("../../utils/string-to-buffer.js");

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Crypto module]", function () {

	describe("computePublicKey", function () {

		var PASSPHRASE_STR = "123456qwerty";
		var SECRET_STR = "asdfg12345";

		it("should work symmetrically to computeSecret", function () {
			var secret = (0, _utilsStringToBufferJs.stringToBuffer)(SECRET_STR);
			return expect((0, _cryptoJs.computePublicKey)(PASSPHRASE_STR, secret).then(function (publicKey) {
				return (0, _cryptoJs.computeSecret)(PASSPHRASE_STR, publicKey);
			}).then(_utilsStringToBufferJs.bufferToString)).to.eventually.equal(SECRET_STR);
		});
	});
});

},{"../../utils/string-to-buffer.js":100,"./crypto.js":80}],82:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var STORAGE_KEY_PREFIX = "35a5bcbb-edc7-4e48-ad29-dc9b2fc2fd54-pk-";

var PublicKeyStorage = (function () {
	function PublicKeyStorage(storage) {
		_classCallCheck(this, PublicKeyStorage);

		this.storage = storage;
	}

	_createClass(PublicKeyStorage, [{
		key: "getPublicKey",
		value: function getPublicKey(publicKeyName) {
			return this.storage.getItem(computeStorageKeyName(publicKeyName));
		}
	}, {
		key: "setPublicKey",
		value: function setPublicKey(publicKeyName, publicKey) {
			return this.storage.setItem(computeStorageKeyName(publicKeyName), publicKey);
		}
	}, {
		key: "removePublicKey",
		value: function removePublicKey(publicKeyName) {
			this.storage.removeItem(computeStorageKeyName(publicKeyName));
		}
	}, {
		key: "entries",
		get: function get() {
			return loadEntries.call(this);
		},
		set: function set(newEntries) {
			saveEntries.call(this, newEntries);
		}
	}]);

	return PublicKeyStorage;
})();

exports["default"] = new PublicKeyStorage(window.localStorage);

function loadEntries() {
	var result = [];
	for (var i = 0; i < this.storage.length; i++) {
		var storageKeyName = this.storage.key(i);
		if (isAppropriateStorageKeyName(storageKeyName)) {
			var publicKeyName = computePublicKeyName(storageKeyName);
			var publicKey = this.storage.getItem(storageKeyName);
			result.push({ publicKeyName: publicKeyName, publicKey: publicKey });
		}
	}
	return result;
}

function saveEntries(newEntries) {
	if (newEntries) {
		newEntries.forEach(saveEntry.bind(this));
	}
}

function saveEntry(newEntry) {
	if (newEntry) {
		var publicKeyName = newEntry.publicKeyName;
		var publicKey = newEntry.publicKey;

		this.storage.setItem(computeStorageKeyName(publicKeyName), publicKey);
	}
}

function isAppropriateStorageKeyName(storageKeyName) {
	return _.startsWith(storageKeyName, STORAGE_KEY_PREFIX);
}

function computeStorageKeyName(publicKeyName) {
	return STORAGE_KEY_PREFIX + publicKeyName;
}

function computePublicKeyName(storageKeyName) {
	return storageKeyName.substring(STORAGE_KEY_PREFIX.length);
}
module.exports = exports["default"];

},{"babel-runtime/helpers/class-call-check":7,"babel-runtime/helpers/create-class":8}],83:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _publicKeyStorageJs = require("./public-key-storage.js");

var _publicKeyStorageJs2 = _interopRequireDefault(_publicKeyStorageJs);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Public key storage module]", function () {

	var PUBLIC_KEY_ENTRY_LIST = [{ publicKeyName: "foo", publicKey: "123456" }, { publicKeyName: "Foo", publicKey: "654321" }, { publicKeyName: "bar", publicKey: "qwerty" }, { publicKeyName: "bAr", publicKey: "ytrewq" }, { publicKeyName: "baz", publicKey: "asdfgh" }, { publicKeyName: "baZ", publicKey: "hgfdsa" }, { publicKeyName: "qux", publicKey: "zxcvbn" }, { publicKeyName: "QUX", publicKey: "nbvcxz" }];

	beforeEach(function () {
		window.localStorage.clear();
	});

	it("All saved public keys should be accessible (by entries)", function () {
		_publicKeyStorageJs2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
		expect(entrtyListToMap(_publicKeyStorageJs2["default"].entries)).to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST));
	});

	it("If public key already exists it could be updated (by setPublicKey)", function () {
		var _PUBLIC_KEY_ENTRY_LIST$0 = PUBLIC_KEY_ENTRY_LIST[0];
		var publicKeyName = _PUBLIC_KEY_ENTRY_LIST$0.publicKeyName;
		var publicKey = _PUBLIC_KEY_ENTRY_LIST$0.publicKey;

		_publicKeyStorageJs2["default"].setPublicKey(publicKeyName, publicKey);
		expect(_publicKeyStorageJs2["default"].entries).to.have.length(1);
		_publicKeyStorageJs2["default"].setPublicKey(publicKeyName, publicKey);
		expect(_publicKeyStorageJs2["default"].entries).to.have.length(1);
	});

	it("If public key exists it could be removed (by removePublicKey)", function () {
		_publicKeyStorageJs2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
		var publicKeyName = PUBLIC_KEY_ENTRY_LIST[5].publicKeyName;

		_publicKeyStorageJs2["default"].removePublicKey(publicKeyName);
		var expectedPublicKeysMap = entrtyListToMap(PUBLIC_KEY_ENTRY_LIST);
		delete expectedPublicKeysMap[publicKeyName];
		expect(entrtyListToMap(_publicKeyStorageJs2["default"].entries)).to.deep.equal(expectedPublicKeysMap);
	});
});

function entrtyListToMap(entryList) {
	return _(entryList).indexBy("publicKeyName").mapValues("publicKey").value();
}

},{"./public-key-storage.js":82,"babel-runtime/helpers/interop-require-default":9}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cryptoJs = require("./crypto.js");

var _utilsStringToBufferJs = require("../../utils/string-to-buffer.js");

var _utilsBufferToBase64Js = require("../../utils/buffer-to-base64.js");

exports["default"] = {
	data: {
		chosenPublicKey: "",
		chosenPublicKeyName: "",
		computedSecret: "",
		secretComputationError: undefined
	},
	watch: {
		"passphrase + chosenPublicKey": "updateComputedSecret"
	},
	methods: {
		updateComputedSecret: function updateComputedSecret() {
			var _this = this;

			if (this.passphrase && this.chosenPublicKey) {
				try {
					(0, _cryptoJs.computeSecret)(this.passphrase, (0, _utilsBufferToBase64Js.base64ToBuffer)(this.chosenPublicKey)).then(function (secret) {
						_this.computedSecret = (0, _utilsStringToBufferJs.bufferToString)(secret);
						_this.secretComputationError = undefined;
					})["catch"](handleComputationError.bind(this));
				} catch (ex) {
					handleComputationError.call(this, ex);
				}
			} else {
				this.computedSecret = "";
				this.secretComputationError = undefined;
			}

			function handleComputationError(ex) {
				console.warn(ex);
				this.computedSecret = "";
				this.secretComputationError = ex;
			}
		}
	}
};
module.exports = exports["default"];

},{"../../utils/buffer-to-base64.js":94,"../../utils/string-to-buffer.js":100,"./crypto.js":80}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _cryptoJs = require("./crypto.js");

var _utilsStringToBufferJs = require("../../utils/string-to-buffer.js");

var _utilsBufferToBase64Js = require("../../utils/buffer-to-base64.js");

exports["default"] = {
	data: {
		generatedSecret: "",
		enteredPublicKeyName: "",
		computedPublicKey: "",
		publicKeyComputationError: undefined
	},
	watch: {
		"passphrase + generatedSecret": "updateComputedPublicKey"
	},
	methods: {
		updateComputedPublicKey: function updateComputedPublicKey() {
			var _this = this;

			if (this.passphrase && this.generatedSecret) {
				try {
					(0, _cryptoJs.computePublicKey)(this.passphrase, (0, _utilsStringToBufferJs.stringToBuffer)(this.generatedSecret)).then(function (publicKey) {
						_this.computedPublicKey = (0, _utilsBufferToBase64Js.bufferToBase64)(publicKey);
						_this.publicKeyComputationError = undefined;
					})["catch"](handleComputationError.bind(this));
				} catch (ex) {
					handleComputationError.call(this, ex);
				}
			} else {
				this.computedPublicKey = "";
				this.publicKeyComputationError = undefined;
			}

			function handleComputationError(ex) {
				console.warn(ex);
				this.computedPublicKey = "";
				this.publicKeyComputationError = ex;
			}
		}
	}
};
module.exports = exports["default"];

},{"../../utils/buffer-to-base64.js":94,"../../utils/string-to-buffer.js":100,"./crypto.js":80}],86:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _secretFormDirectModeMixinJs = require("./secret-form-direct-mode-mixin.js");

var _secretFormDirectModeMixinJs2 = _interopRequireDefault(_secretFormDirectModeMixinJs);

var _secretFormReverseModeMixinJs = require("./secret-form-reverse-mode-mixin.js");

var _secretFormReverseModeMixinJs2 = _interopRequireDefault(_secretFormReverseModeMixinJs);

var _passphraseFieldPassphraseFieldJs = require("../passphrase-field/passphrase-field.js");

var _passphraseFieldPassphraseFieldJs2 = _interopRequireDefault(_passphraseFieldPassphraseFieldJs);

var _publicKeyReaderFieldPublicKeyReaderFieldJs = require("../public-key-reader-field/public-key-reader-field.js");

var _publicKeyReaderFieldPublicKeyReaderFieldJs2 = _interopRequireDefault(_publicKeyReaderFieldPublicKeyReaderFieldJs);

var _publicKeyWriterFieldPublicKeyWriterFieldJs = require("../public-key-writer-field/public-key-writer-field.js");

var _publicKeyWriterFieldPublicKeyWriterFieldJs2 = _interopRequireDefault(_publicKeyWriterFieldPublicKeyWriterFieldJs);

var _secretGeneratorFieldJsSecretGeneratorFieldJs = require("../secret-generator-field/js/secret-generator-field.js");

var _secretGeneratorFieldJsSecretGeneratorFieldJs2 = _interopRequireDefault(_secretGeneratorFieldJsSecretGeneratorFieldJs);

var _secretFieldSecretFieldJs = require("../secret-field/secret-field.js");

var _secretFieldSecretFieldJs2 = _interopRequireDefault(_secretFieldSecretFieldJs);

exports["default"] = new Vue({
	el: "#secret-form",
	mixins: [_secretFormDirectModeMixinJs2["default"], _secretFormReverseModeMixinJs2["default"]],
	data: {
		directMode: true,
		passphrase: ""
	},
	computed: {
		reverseMode: function reverseMode() {
			return !this.directMode;
		}
	},
	methods: {
		toggleMode: function toggleMode() {
			this.directMode = !this.directMode;
		}
	},
	components: {
		"passphrase-field": _passphraseFieldPassphraseFieldJs2["default"],
		"public-key-reader-field": _publicKeyReaderFieldPublicKeyReaderFieldJs2["default"],
		"public-key-writer-field": _publicKeyWriterFieldPublicKeyWriterFieldJs2["default"],
		"secret-generator-field": _secretGeneratorFieldJsSecretGeneratorFieldJs2["default"],
		"secret-field": _secretFieldSecretFieldJs2["default"]
	}
});
module.exports = exports["default"];

},{"../passphrase-field/passphrase-field.js":87,"../public-key-reader-field/public-key-reader-field.js":88,"../public-key-writer-field/public-key-writer-field.js":89,"../secret-field/secret-field.js":90,"../secret-generator-field/js/secret-generator-field.js":93,"./secret-form-direct-mode-mixin.js":84,"./secret-form-reverse-mode-mixin.js":85,"babel-runtime/helpers/interop-require-default":9}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = Vue.extend({
	template: "#passphrase-field-template",
	props: {
		passphrase: {
			type: String,
			required: true
		}
	},
	computed: {
		passphraseFieldType: function passphraseFieldType() {
			return this.passphraseVisible ? "text" : "password";
		}
	},
	data: function data() {
		return {
			passphraseVisible: false
		};
	},
	methods: {
		togglePassphraseVisibility: function togglePassphraseVisibility() {
			this.passphraseVisible = !this.passphraseVisible;
		}
	}
});
module.exports = exports["default"];

},{}],88:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsPublicKeyStorageJs = require("../js/public-key-storage.js");

var _jsPublicKeyStorageJs2 = _interopRequireDefault(_jsPublicKeyStorageJs);

exports["default"] = Vue.extend({
	template: "#public-key-reader-field-template",
	props: {
		publicKey: {
			type: String,
			required: true
		},
		publicKeyName: {
			type: String,
			required: true
		},
		tabIndex: {
			type: String,
			"default": "-1"
		}
	},
	data: function data() {
		return {
			publicKeyStorage: _jsPublicKeyStorageJs2["default"],
			publicKeyName: ""
		};
	},
	watch: {
		publicKeyName: function publicKeyName(_publicKeyName) {
			this.publicKey = _jsPublicKeyStorageJs2["default"].getPublicKey(_publicKeyName);
		}
	}
});
module.exports = exports["default"];

},{"../js/public-key-storage.js":82,"babel-runtime/helpers/interop-require-default":9}],89:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsPublicKeyStorageJs = require("../js/public-key-storage.js");

var _jsPublicKeyStorageJs2 = _interopRequireDefault(_jsPublicKeyStorageJs);

exports["default"] = Vue.extend({
	template: "#public-key-writer-field-template",
	props: {
		publicKey: {
			type: String,
			required: true
		},
		publicKeyName: {
			type: String,
			required: true
		},
		tabIndex: {
			type: String,
			"default": "-1"
		}
	},
	data: function data() {
		return {
			publicKeyStorage: _jsPublicKeyStorageJs2["default"],
			publicKeyName: ""
		};
	},
	watch: {
		publicKeyName: function publicKeyName(_publicKeyName) {
			this.publicKey = _jsPublicKeyStorageJs2["default"].getPublicKey(_publicKeyName);
		}
	}
});
module.exports = exports["default"];

},{"../js/public-key-storage.js":82,"babel-runtime/helpers/interop-require-default":9}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = Vue.extend({
	template: "#secret-field-template",
	props: {
		secret: {
			type: String,
			required: true
		},
		tabIndex: {
			type: String,
			"default": "-1"
		}
	},
	methods: {
		selectSecret: function selectSecret() {
			this.$el.querySelector("input").select();
		}
	}
});
module.exports = exports["default"];

},{}],91:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsGeneratorsCharsJs = require("../../../utils/generators/chars.js");

var _utilsGeneratorsCharsJs2 = _interopRequireDefault(_utilsGeneratorsCharsJs);

var _utilsGeneratorsRandomCharsJs = require("../../../utils/generators/random-chars.js");

var _utilsGeneratorsRandomCharsJs2 = _interopRequireDefault(_utilsGeneratorsRandomCharsJs);

exports.generateSecret = generateSecret;
exports.filterAlphabet = filterAlphabet;

var ABC = [].concat(_toConsumableArray((0, _utilsGeneratorsCharsJs2["default"])("!", "~")));

function generateSecret(length) {
	var alphabet = arguments.length <= 1 || arguments[1] === undefined ? ABC : arguments[1];

	return [].concat(_toConsumableArray((0, _utilsGeneratorsRandomCharsJs2["default"])(length, alphabet))).join("");
}

function filterAlphabet(regExp) {
	var alphabet = arguments.length <= 1 || arguments[1] === undefined ? ABC : arguments[1];

	return alphabet.filter(function (char) {
		return regExp.test(char);
	});
}

},{"../../../utils/generators/chars.js":96,"../../../utils/generators/random-chars.js":98,"babel-runtime/helpers/interop-require-default":9,"babel-runtime/helpers/to-consumable-array":10}],92:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _generateSecretJs = require("./generate-secret.js");

var _utilsGeneratorsCharsJs = require("../../../utils/generators/chars.js");

var _utilsGeneratorsCharsJs2 = _interopRequireDefault(_utilsGeneratorsCharsJs);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Secret generator module]", function () {

	describe("filterAlphabet", function () {
		it("should reduce alphabet according to regular expression", function () {
			expect((0, _generateSecretJs.filterAlphabet)(/[A-Z]/)).to.deep.equal([].concat(_toConsumableArray((0, _utilsGeneratorsCharsJs2["default"])("A", "Z"))));
		});
	});

	describe("generateSecret", function () {

		var SECRET_LEN = 10;

		it("should return string with exact length", function () {
			expect((0, _generateSecretJs.generateSecret)(SECRET_LEN)).to.be.a("string").and.to.have.length(SECRET_LEN);
		});

		it("should generate chars from specified alphabet", function () {
			expect((0, _generateSecretJs.generateSecret)(SECRET_LEN, (0, _generateSecretJs.filterAlphabet)(/[A-Z]/))).to.match(/^[A-Z]+$/);
		});
	});
});

},{"../../../utils/generators/chars.js":96,"./generate-secret.js":91,"babel-runtime/helpers/interop-require-default":9,"babel-runtime/helpers/to-consumable-array":10}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _generateSecretJs = require("./generate-secret.js");

var DEFAULT_ALPHABET_REGEXP = /[0-9a-zA-Z_]/;
var DEFAULT_SECRET_LENGTH_VARIANT = { secretLength: 32, label: "Long" };

exports["default"] = Vue.extend({
	template: "#secret-generator-field-template",
	props: {
		secret: {
			type: String,
			required: true
		},
		title: {
			type: String,
			"default": "Secret"
		},
		tabIndex: {
			type: String,
			"default": "-1"
		}
	},
	data: function data() {
		return {
			alphabetRegExpList: [/[0-9a-zA-Z~!@#$%^&*_=]/, DEFAULT_ALPHABET_REGEXP, /[0-9a-z_]/, /[0-9]/],
			currentAlphabetRegExp: DEFAULT_ALPHABET_REGEXP,
			secretLengthVariantList: [{ secretLength: 8, label: "Short" }, { secretLength: 16, label: "Medium" }, DEFAULT_SECRET_LENGTH_VARIANT],
			currentSecretLengthVariant: DEFAULT_SECRET_LENGTH_VARIANT
		};
	},
	methods: {
		generateSecret: function generateSecret() {
			var alphabet = (0, _generateSecretJs.filterAlphabet)(this.currentAlphabetRegExp);
			this.secret = (0, _generateSecretJs.generateSecret)(this.currentSecretLengthVariant.secretLength, alphabet);
			Vue.nextTick(this.selectSecret.bind(this));
		},
		chooseAlphabet: function chooseAlphabet(alphabetRegExp) {
			this.currentAlphabetRegExp = alphabetRegExp;
			this.generateSecret();
		},
		chooseSecretLength: function chooseSecretLength(secretLengthVariant) {
			this.currentSecretLengthVariant = secretLengthVariant;
			this.generateSecret();
		},
		selectSecret: function selectSecret() {
			this.$el.querySelector("input").select();
		}
	}
});
module.exports = exports["default"];

},{"./generate-secret.js":91}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringToBufferJs = require("./string-to-buffer.js");

exports.bufferToBase64 = bufferToBase64;
exports.base64ToBuffer = base64ToBuffer;

function bufferToBase64(buffer) {
	if (!(buffer instanceof ArrayBuffer)) {
		throw new Error("Invalid argument. ArrayBuffer is expected");
	}
	if (buffer.byteLength === 0) {
		return "";
	}
	return btoa((0, _stringToBufferJs.bufferToString)(buffer, Uint8Array));
}

function base64ToBuffer(base64) {
	if (!_.isString(base64)) {
		throw new Error("Invalid argument. String is expected");
	}
	if (!base64) {
		return new ArrayBuffer(0);
	}
	return (0, _stringToBufferJs.stringToBuffer)(atob(base64), Uint8Array);
}

},{"./string-to-buffer.js":100}],95:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _bufferToBase64Js = require("./buffer-to-base64.js");

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Base64 converter module]", function () {

	var randomBuffer = undefined;

	beforeEach(function () {
		randomBuffer = generateRandomBuffer();
	});

	describe("bufferToBase64", function () {
		it("should return string", function () {
			expect((0, _bufferToBase64Js.bufferToBase64)(randomBuffer)).to.be.a("string").and.to.have.length.above(0);
		});
	});

	describe("base64ToBuffer", function () {
		it("should work symmetrically to bufferToBase64", function () {
			var buffer = (0, _bufferToBase64Js.base64ToBuffer)((0, _bufferToBase64Js.bufferToBase64)(randomBuffer));
			expect(toArray(buffer)).to.deep.equal(toArray(randomBuffer));
		});
	});
});

function generateRandomBuffer() {
	var result = new Uint8Array(10);
	window.crypto.getRandomValues(result);
	return result.buffer;
}

function toArray(buffer) {
	return [].concat(_toConsumableArray(new Uint8Array(buffer)));
}

},{"./buffer-to-base64.js":94,"babel-runtime/helpers/to-consumable-array":10}],96:[function(require,module,exports){
"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = chars;
var marked0$0 = [chars].map(_regeneratorRuntime.mark);

function chars(fromChar, toChar) {
	var char;
	return _regeneratorRuntime.wrap(function chars$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				char = fromChar;

			case 1:
				if (!(char <= toChar)) {
					context$1$0.next = 7;
					break;
				}

				context$1$0.next = 4;
				return char;

			case 4:
				char = String.fromCharCode(char.charCodeAt(0) + 1);
				context$1$0.next = 1;
				break;

			case 7:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"babel-runtime/regenerator":76}],97:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _charsJs = require("./chars.js");

var _charsJs2 = _interopRequireDefault(_charsJs);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Chars generator module]", function () {

	it("Should return valid alphabetic range", function () {
		expect([].concat(_toConsumableArray((0, _charsJs2["default"])("A", "C")))).to.deep.equal(["A", "B", "C"]);
	});

	it("Should return valid numeric range", function () {
		expect([].concat(_toConsumableArray((0, _charsJs2["default"])("1", "3")))).to.deep.equal(["1", "2", "3"]);
	});
});

},{"./chars.js":96,"babel-runtime/helpers/interop-require-default":9,"babel-runtime/helpers/to-consumable-array":10}],98:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = randomChars;
var marked0$0 = [randomChars].map(_regeneratorRuntime.mark);

function randomChars(count, alphabet) {
	var indices;
	return _regeneratorRuntime.wrap(function randomChars$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				indices = new Uint16Array(count);

				window.crypto.getRandomValues(indices);
				return context$1$0.delegateYield([].concat(_toConsumableArray(indices)).map(function (index) {
					return alphabet[index % alphabet.length];
				}), "t0", 3);

			case 3:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

module.exports = exports["default"];

},{"babel-runtime/helpers/to-consumable-array":10,"babel-runtime/regenerator":76}],99:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _randomCharsJs = require("./random-chars.js");

var _randomCharsJs2 = _interopRequireDefault(_randomCharsJs);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Random chars generator module]", function () {

	var RND_SEQUENCE_LEN = 10;

	it("Should generate random sequence of specified length", function () {
		expect([].concat(_toConsumableArray((0, _randomCharsJs2["default"])(RND_SEQUENCE_LEN, "abc")))).to.have.length(RND_SEQUENCE_LEN);
	});

	it("Should generate chars from specified alphabet", function () {
		var randomStr = [].concat(_toConsumableArray((0, _randomCharsJs2["default"])(RND_SEQUENCE_LEN, "abc123"))).join("");
		expect(randomStr).to.match(/^[abc123]+$/);
	});
});

},{"./random-chars.js":98,"babel-runtime/helpers/interop-require-default":9,"babel-runtime/helpers/to-consumable-array":10}],100:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.stringToBuffer = stringToBuffer;
exports.bufferToString = bufferToString;

function stringToBuffer(str) {
	var ArrayType = arguments.length <= 1 || arguments[1] === undefined ? Uint16Array : arguments[1];

	if (!_.isString(str)) {
		throw new Error("Invalid argument. String is expected");
	}
	if (!str) {
		return new ArrayBuffer(0);
	}
	var charCodes = [].concat(_toConsumableArray(str)).map(function (char) {
		return char.charCodeAt(0);
	});
	return ArrayType.from(charCodes).buffer;
}

function bufferToString(buffer) {
	var ArrayType = arguments.length <= 1 || arguments[1] === undefined ? Uint16Array : arguments[1];

	if (!(buffer instanceof ArrayBuffer)) {
		throw new Error("Invalid argument. ArrayBuffer is expected");
	}
	if (buffer.byteLength === 0) {
		return "";
	}
	var array = new ArrayType(buffer);
	return String.fromCharCode.apply(String, _toConsumableArray(array));
}

},{"babel-runtime/helpers/to-consumable-array":10}],101:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _stringToBufferJs = require("./string-to-buffer.js");

var _generatorsCharsJs = require("./generators/chars.js");

var _generatorsCharsJs2 = _interopRequireDefault(_generatorsCharsJs);

var _generatorsRandomCharsJs = require("./generators/random-chars.js");

var _generatorsRandomCharsJs2 = _interopRequireDefault(_generatorsRandomCharsJs);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[String converter module]", function () {

	var randomStr = undefined,
	    randomBuffer = undefined;

	beforeEach(function () {
		randomStr = generateRandomStr();
		randomBuffer = (0, _stringToBufferJs.stringToBuffer)(randomStr);
	});

	describe("stringToBuffer", function () {
		it("should return non-empty ArrayBuffer", function () {
			expect((0, _stringToBufferJs.stringToBuffer)(randomStr)).to.be.an["instanceof"](ArrayBuffer).and.to.satisfy(function (buffer) {
				return buffer.byteLength > 0;
			});
		});

		it("should throw error in case of invalid argument", function () {
			expect(_stringToBufferJs.stringToBuffer).to["throw"](Error, /Invalid argument/);
		});
	});

	describe("bufferToString", function () {
		it("should return non-empty string", function () {
			expect((0, _stringToBufferJs.bufferToString)(randomBuffer)).to.be.a("string").and.to.have.length.above(0);
		});

		it("should work symmetrically to stringToBuffer", function () {
			expect((0, _stringToBufferJs.bufferToString)(randomBuffer)).to.be.equal(randomStr);
		});

		it("should throw error in case of invalid argument", function () {
			expect(_stringToBufferJs.bufferToString).to["throw"](Error, /Invalid argument/);
		});
	});
});

function generateRandomStr() {
	var abc = [].concat(_toConsumableArray((0, _generatorsCharsJs2["default"])("A", "Z")), _toConsumableArray((0, _generatorsCharsJs2["default"])("a", "z")), _toConsumableArray((0, _generatorsCharsJs2["default"])("0", "9")));
	return [].concat(_toConsumableArray((0, _generatorsRandomCharsJs2["default"])(10, abc))).join("");
}

},{"./generators/chars.js":96,"./generators/random-chars.js":98,"./string-to-buffer.js":100,"babel-runtime/helpers/interop-require-default":9,"babel-runtime/helpers/to-consumable-array":10}]},{},[79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101]);

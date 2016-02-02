(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":14}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":15}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":16}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":17}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":18}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":19}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":20}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":21}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":22}],10:[function(require,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],11:[function(require,module,exports){
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
},{"babel-runtime/core-js/object/define-property":5}],12:[function(require,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],13:[function(require,module,exports){
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
},{"babel-runtime/core-js/array/from":1}],14:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/es6.array.from');
module.exports = require('../../modules/$.core').Array.from;
},{"../../modules/$.core":31,"../../modules/es6.array.from":79,"../../modules/es6.string.iterator":86}],15:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
module.exports = require('../modules/$.core').Map;
},{"../modules/$.core":31,"../modules/es6.map":81,"../modules/es6.object.to-string":83,"../modules/es6.string.iterator":86,"../modules/es7.map.to-json":88,"../modules/web.dom.iterable":90}],16:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":56}],17:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":56}],18:[function(require,module,exports){
var $ = require('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":56}],19:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":31,"../../modules/es6.object.set-prototype-of":82}],20:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/$.core').Promise;
},{"../modules/$.core":31,"../modules/es6.object.to-string":83,"../modules/es6.promise":84,"../modules/es6.string.iterator":86,"../modules/web.dom.iterable":90}],21:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.set');
require('../modules/es7.set.to-json');
module.exports = require('../modules/$.core').Set;
},{"../modules/$.core":31,"../modules/es6.object.to-string":83,"../modules/es6.set":85,"../modules/es6.string.iterator":86,"../modules/es7.set.to-json":89,"../modules/web.dom.iterable":90}],22:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
module.exports = require('../../modules/$.core').Symbol;
},{"../../modules/$.core":31,"../../modules/es6.object.to-string":83,"../../modules/es6.symbol":87}],23:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],24:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],25:[function(require,module,exports){
var isObject = require('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":49}],26:[function(require,module,exports){
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
},{"./$.cof":27,"./$.wks":77}],27:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],28:[function(require,module,exports){
'use strict';
var $            = require('./$')
  , hide         = require('./$.hide')
  , redefineAll  = require('./$.redefine-all')
  , ctx          = require('./$.ctx')
  , strictNew    = require('./$.strict-new')
  , defined      = require('./$.defined')
  , forOf        = require('./$.for-of')
  , $iterDefine  = require('./$.iter-define')
  , step         = require('./$.iter-step')
  , ID           = require('./$.uid')('id')
  , $has         = require('./$.has')
  , isObject     = require('./$.is-object')
  , setSpecies   = require('./$.set-species')
  , DESCRIPTORS  = require('./$.descriptors')
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./$":56,"./$.ctx":32,"./$.defined":33,"./$.descriptors":34,"./$.for-of":39,"./$.has":42,"./$.hide":43,"./$.is-object":49,"./$.iter-define":52,"./$.iter-step":54,"./$.redefine-all":61,"./$.set-species":65,"./$.strict-new":69,"./$.uid":76}],29:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = require('./$.for-of')
  , classof = require('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":26,"./$.for-of":39}],30:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , global         = require('./$.global')
  , $export        = require('./$.export')
  , fails          = require('./$.fails')
  , hide           = require('./$.hide')
  , redefineAll    = require('./$.redefine-all')
  , forOf          = require('./$.for-of')
  , strictNew      = require('./$.strict-new')
  , isObject       = require('./$.is-object')
  , setToStringTag = require('./$.set-to-string-tag')
  , DESCRIPTORS    = require('./$.descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      strictNew(target, C, NAME);
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$":56,"./$.descriptors":34,"./$.export":37,"./$.fails":38,"./$.for-of":39,"./$.global":41,"./$.hide":43,"./$.is-object":49,"./$.redefine-all":61,"./$.set-to-string-tag":66,"./$.strict-new":69}],31:[function(require,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],32:[function(require,module,exports){
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
},{"./$.a-function":23}],33:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],34:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":38}],35:[function(require,module,exports){
var isObject = require('./$.is-object')
  , document = require('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":41,"./$.is-object":49}],36:[function(require,module,exports){
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
},{"./$":56}],37:[function(require,module,exports){
var global    = require('./$.global')
  , core      = require('./$.core')
  , ctx       = require('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":31,"./$.ctx":32,"./$.global":41}],38:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],39:[function(require,module,exports){
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
},{"./$.an-object":25,"./$.ctx":32,"./$.is-array-iter":47,"./$.iter-call":50,"./$.to-length":74,"./core.get-iterator-method":78}],40:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./$.to-iobject')
  , getNames  = require('./$').getNames
  , toString  = {}.toString;

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
},{"./$":56,"./$.to-iobject":73}],41:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],42:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],43:[function(require,module,exports){
var $          = require('./$')
  , createDesc = require('./$.property-desc');
module.exports = require('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":56,"./$.descriptors":34,"./$.property-desc":60}],44:[function(require,module,exports){
module.exports = require('./$.global').document && document.documentElement;
},{"./$.global":41}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":27}],47:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./$.iterators')
  , ITERATOR   = require('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":55,"./$.wks":77}],48:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":27}],49:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],50:[function(require,module,exports){
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
},{"./$.an-object":25}],51:[function(require,module,exports){
'use strict';
var $              = require('./$')
  , descriptor     = require('./$.property-desc')
  , setToStringTag = require('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./$.hide')(IteratorPrototype, require('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":56,"./$.hide":43,"./$.property-desc":60,"./$.set-to-string-tag":66,"./$.wks":77}],52:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./$.library')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , hide           = require('./$.hide')
  , has            = require('./$.has')
  , Iterators      = require('./$.iterators')
  , $iterCreate    = require('./$.iter-create')
  , setToStringTag = require('./$.set-to-string-tag')
  , getProto       = require('./$').getProto
  , ITERATOR       = require('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":56,"./$.export":37,"./$.has":42,"./$.hide":43,"./$.iter-create":51,"./$.iterators":55,"./$.library":58,"./$.redefine":62,"./$.set-to-string-tag":66,"./$.wks":77}],53:[function(require,module,exports){
var ITERATOR     = require('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":77}],54:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],55:[function(require,module,exports){
module.exports = {};
},{}],56:[function(require,module,exports){
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
},{}],57:[function(require,module,exports){
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
},{"./$":56,"./$.to-iobject":73}],58:[function(require,module,exports){
module.exports = true;
},{}],59:[function(require,module,exports){
var global    = require('./$.global')
  , macrotask = require('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

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
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
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
},{"./$.cof":27,"./$.global":41,"./$.task":71}],60:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],61:[function(require,module,exports){
var redefine = require('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":62}],62:[function(require,module,exports){
module.exports = require('./$.hide');
},{"./$.hide":43}],63:[function(require,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],64:[function(require,module,exports){
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
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
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
},{"./$":56,"./$.an-object":25,"./$.ctx":32,"./$.is-object":49}],65:[function(require,module,exports){
'use strict';
var core        = require('./$.core')
  , $           = require('./$')
  , DESCRIPTORS = require('./$.descriptors')
  , SPECIES     = require('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":56,"./$.core":31,"./$.descriptors":34,"./$.wks":77}],66:[function(require,module,exports){
var def = require('./$').setDesc
  , has = require('./$.has')
  , TAG = require('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":56,"./$.has":42,"./$.wks":77}],67:[function(require,module,exports){
var global = require('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":41}],68:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./$.an-object')
  , aFunction = require('./$.a-function')
  , SPECIES   = require('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":23,"./$.an-object":25,"./$.wks":77}],69:[function(require,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],70:[function(require,module,exports){
var toInteger = require('./$.to-integer')
  , defined   = require('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":33,"./$.to-integer":72}],71:[function(require,module,exports){
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
},{"./$.cof":27,"./$.ctx":32,"./$.dom-create":35,"./$.global":41,"./$.html":44,"./$.invoke":45}],72:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],73:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./$.iobject')
  , defined = require('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":33,"./$.iobject":46}],74:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":72}],75:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":33}],76:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],77:[function(require,module,exports){
var store  = require('./$.shared')('wks')
  , uid    = require('./$.uid')
  , Symbol = require('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":41,"./$.shared":67,"./$.uid":76}],78:[function(require,module,exports){
var classof   = require('./$.classof')
  , ITERATOR  = require('./$.wks')('iterator')
  , Iterators = require('./$.iterators');
module.exports = require('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":26,"./$.core":31,"./$.iterators":55,"./$.wks":77}],79:[function(require,module,exports){
'use strict';
var ctx         = require('./$.ctx')
  , $export     = require('./$.export')
  , toObject    = require('./$.to-object')
  , call        = require('./$.iter-call')
  , isArrayIter = require('./$.is-array-iter')
  , toLength    = require('./$.to-length')
  , getIterFn   = require('./core.get-iterator-method');
$export($export.S + $export.F * !require('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
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

},{"./$.ctx":32,"./$.export":37,"./$.is-array-iter":47,"./$.iter-call":50,"./$.iter-detect":53,"./$.to-length":74,"./$.to-object":75,"./core.get-iterator-method":78}],80:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./$.add-to-unscopables')
  , step             = require('./$.iter-step')
  , Iterators        = require('./$.iterators')
  , toIObject        = require('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./$.iter-define')(Array, 'Array', function(iterated, kind){
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

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":24,"./$.iter-define":52,"./$.iter-step":54,"./$.iterators":55,"./$.to-iobject":73}],81:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.1 Map Objects
require('./$.collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":30,"./$.collection-strong":28}],82:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./$.export');
$export($export.S, 'Object', {setPrototypeOf: require('./$.set-proto').set});
},{"./$.export":37,"./$.set-proto":64}],83:[function(require,module,exports){

},{}],84:[function(require,module,exports){
'use strict';
var $          = require('./$')
  , LIBRARY    = require('./$.library')
  , global     = require('./$.global')
  , ctx        = require('./$.ctx')
  , classof    = require('./$.classof')
  , $export    = require('./$.export')
  , isObject   = require('./$.is-object')
  , anObject   = require('./$.an-object')
  , aFunction  = require('./$.a-function')
  , strictNew  = require('./$.strict-new')
  , forOf      = require('./$.for-of')
  , setProto   = require('./$.set-proto').set
  , same       = require('./$.same-value')
  , SPECIES    = require('./$.wks')('species')
  , speciesConstructor = require('./$.species-constructor')
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

var USE_NATIVE = function(){
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
    if(works && require('./$.descriptors')){
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
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
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
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
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
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
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
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  require('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
require('./$.set-to-string-tag')(P, PROMISE);
require('./$.set-species')(PROMISE);
Wrapper = require('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":56,"./$.a-function":23,"./$.an-object":25,"./$.classof":26,"./$.core":31,"./$.ctx":32,"./$.descriptors":34,"./$.export":37,"./$.for-of":39,"./$.global":41,"./$.is-object":49,"./$.iter-detect":53,"./$.library":58,"./$.microtask":59,"./$.redefine-all":61,"./$.same-value":63,"./$.set-proto":64,"./$.set-species":65,"./$.set-to-string-tag":66,"./$.species-constructor":68,"./$.strict-new":69,"./$.wks":77}],85:[function(require,module,exports){
'use strict';
var strong = require('./$.collection-strong');

// 23.2 Set Objects
require('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":30,"./$.collection-strong":28}],86:[function(require,module,exports){
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
},{"./$.iter-define":52,"./$.string-at":70}],87:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = require('./$')
  , global         = require('./$.global')
  , has            = require('./$.has')
  , DESCRIPTORS    = require('./$.descriptors')
  , $export        = require('./$.export')
  , redefine       = require('./$.redefine')
  , $fails         = require('./$.fails')
  , shared         = require('./$.shared')
  , setToStringTag = require('./$.set-to-string-tag')
  , uid            = require('./$.uid')
  , wks            = require('./$.wks')
  , keyOf          = require('./$.keyof')
  , $names         = require('./$.get-names')
  , enumKeys       = require('./$.enum-keys')
  , isArray        = require('./$.is-array')
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
var setSymbolDesc = DESCRIPTORS && $fails(function(){
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
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
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
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
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
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
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

  if(DESCRIPTORS && !require('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
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
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
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
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":56,"./$.an-object":25,"./$.descriptors":34,"./$.enum-keys":36,"./$.export":37,"./$.fails":38,"./$.get-names":40,"./$.global":41,"./$.has":42,"./$.is-array":48,"./$.keyof":57,"./$.library":58,"./$.property-desc":60,"./$.redefine":62,"./$.set-to-string-tag":66,"./$.shared":67,"./$.to-iobject":73,"./$.uid":76,"./$.wks":77}],88:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Map', {toJSON: require('./$.collection-to-json')('Map')});
},{"./$.collection-to-json":29,"./$.export":37}],89:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = require('./$.export');

$export($export.P, 'Set', {toJSON: require('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":29,"./$.export":37}],90:[function(require,module,exports){
require('./es6.array.iterator');
var Iterators = require('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":55,"./es6.array.iterator":80}],91:[function(require,module,exports){
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
},{"./runtime":92}],92:[function(require,module,exports){
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

var _Object$create = require("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof _Symbol === "function" ? _Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

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
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

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
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

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
    if (_Object$setPrototypeOf) {
      _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
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
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return _Promise.resolve(value.arg).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return _Promise.resolve(value).then(function (unwrapped) {
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
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new _Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
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

  Gp[toStringTagSymbol] = "Generator";

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
},{"_process":93,"babel-runtime/core-js/object/create":3,"babel-runtime/core-js/object/set-prototype-of":6,"babel-runtime/core-js/promise":7,"babel-runtime/core-js/symbol":9}],93:[function(require,module,exports){
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

},{}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsStringToBuffer = require("utils/string-to-buffer");

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
	var passphrase = (0, _utilsStringToBuffer.stringToBuffer)(passphraseStr);
	return window.crypto.subtle.digest("SHA-256", passphrase).then(function (passphraseDigest) {
		return window.crypto.subtle.importKey("raw", passphraseDigest, "AES-CBC", true, ["encrypt", "decrypt"]);
	});
}

},{"utils/string-to-buffer":116}],95:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var KEY_CODE_FIELD = _Symbol();
var DESCRIPTION_FIELD = _Symbol();
var HANDLE_METHOD = _Symbol();

var HotKey = (function () {
	_createClass(HotKey, null, [{
		key: "values",
		// enum
		get: function get() {
			return [HotKey.PASSPHRASE_ENTER_HOT_KEY, HotKey.PUBLIC_KEY_CHOOSE_HOT_KEY, HotKey.SECRET_GENERATION_HOT_KEY, HotKey.IMPORT_PUBLIC_KEYS_HOT_KEY, HotKey.EXPORT_PUBLIC_KEYS_HOT_KEY];
		}
	}, {
		key: "PASSPHRASE_ENTER_HOT_KEY",
		get: function get() {
			return new HotKey({
				keyCode: 80, // P
				description: "Enter passphrase",
				handle: function handle(indexPage) {
					var secretForm = indexPage.$refs.secretForm,
					    passphraseField = secretForm.$refs.passphraseField;
					passphraseField.$el.querySelector("input").select();
				}
			});
		}
	}, {
		key: "PUBLIC_KEY_CHOOSE_HOT_KEY",
		get: function get() {
			return new HotKey({
				keyCode: 75, // K
				description: "Choose public key",
				handle: function handle(indexPage) {
					var secretForm = indexPage.$refs.secretForm;
					secretForm.isDirectMode = true;
					Vue.nextTick(function () {
						var publicKeyReaderField = secretForm.$refs.publicKeyReaderField;
						publicKeyReaderField.$el.querySelector("input").select();
					});
				}
			});
		}
	}, {
		key: "SECRET_GENERATION_HOT_KEY",
		get: function get() {
			return new HotKey({
				keyCode: 82, // R
				description: "Generate new secret",
				handle: function handle(indexPage) {
					var secretForm = indexPage.$refs.secretForm;
					secretForm.isDirectMode = false;
					Vue.nextTick(function () {
						var secretGeneratorField = secretForm.$refs.secretGeneratorField;
						secretGeneratorField.generateSecret();
					});
				}
			});
		}
	}, {
		key: "IMPORT_PUBLIC_KEYS_HOT_KEY",
		get: function get() {
			return new HotKey({
				keyCode: 73, // I
				description: "Import public keys from file",
				handle: function handle(indexPage) {
					var secretForm = indexPage.$refs.secretForm;
					secretForm.isDirectMode = true;
					Vue.nextTick(function () {
						var publicKeyReaderField = secretForm.$refs.publicKeyReaderField;
						publicKeyReaderField.openFileChooserForImport();
					});
				}
			});
		}
	}, {
		key: "EXPORT_PUBLIC_KEYS_HOT_KEY",
		get: function get() {
			return new HotKey({
				keyCode: 69, // E
				description: "Export public keys to file",
				handle: function handle(indexPage) {
					var secretForm = indexPage.$refs.secretForm;
					secretForm.isDirectMode = true;
					Vue.nextTick(function () {
						var publicKeyReaderField = secretForm.$refs.publicKeyReaderField;
						publicKeyReaderField.exportPublicKeys();
					});
				}
			});
		}
	}]);

	function HotKey(_ref) {
		var keyCode = _ref.keyCode;
		var description = _ref.description;
		var handle = _ref.handle;

		_classCallCheck(this, HotKey);

		this[KEY_CODE_FIELD] = keyCode;
		this[DESCRIPTION_FIELD] = description;
		this[HANDLE_METHOD] = handle;
	}

	_createClass(HotKey, [{
		key: "isActivated",
		value: function isActivated(event) {
			return (event.metaKey || event.ctrlKey) && event.altKey && this.keyCode === event.which;
		}
	}, {
		key: "handle",
		value: function handle(event) {
			this[HANDLE_METHOD].call(this, event);
		}
	}, {
		key: "keyCode",
		get: function get() {
			return this[KEY_CODE_FIELD];
		}
	}, {
		key: "char",
		get: function get() {
			return String.fromCharCode(this.keyCode);
		}
	}, {
		key: "description",
		get: function get() {
			return this[DESCRIPTION_FIELD];
		}
	}]);

	return HotKey;
})();

exports["default"] = HotKey;
module.exports = exports["default"];

},{"babel-runtime/core-js/symbol":9,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":11}],96:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hotKey = require("./hot-key");

var _hotKey2 = _interopRequireDefault(_hotKey);

var KEY_CODE_TO_HOT_KEY_MAP = _.zipObject(_.map(_hotKey2["default"].values, "keyCode"), _hotKey2["default"].values);

var HotKeysController = (function () {
	_createClass(HotKeysController, null, [{
		key: "hotKeysList",
		get: function get() {
			return _hotKey2["default"].values;
		}
	}]);

	function HotKeysController(indexPage) {
		_classCallCheck(this, HotKeysController);

		$(document).on("keydown", onKeyDown.bind(this, indexPage));
	}

	return HotKeysController;
})();

exports["default"] = HotKeysController;

function onKeyDown(indexPage, event) {
	var hotKey = getHotKey(event);
	if (hotKey && hotKey.isActivated(event)) {
		hotKey.handle(indexPage);
		event.preventDefault();
		event.stopPropagation();
	}
}

function getHotKey(event) {
	return KEY_CODE_TO_HOT_KEY_MAP[event.which];
}
module.exports = exports["default"];

},{"./hot-key":95,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/interop-require-default":12}],97:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hotKey = require("./hot-key");

var _hotKey2 = _interopRequireDefault(_hotKey);

exports["default"] = Vue.extend({
	template: "#hot-keys-section-template",
	data: function data() {
		return {
			hotKeysList: _hotKey2["default"].values
		};
	}
});
module.exports = exports["default"];

},{"./hot-key":95,"babel-runtime/helpers/interop-require-default":12}],98:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _secretForm = require("secret-form");

var _secretForm2 = _interopRequireDefault(_secretForm);

var _hotKeysSection = require("hot-keys-section");

var _hotKeysSection2 = _interopRequireDefault(_hotKeysSection);

var _hotKeysController = require("hot-keys-controller");

var _hotKeysController2 = _interopRequireDefault(_hotKeysController);

exports["default"] = new Vue({
	el: "body",
	ready: function ready() {
		this.hotKeysController = new _hotKeysController2["default"](this);
	},
	components: {
		"secret-form": _secretForm2["default"],
		"hot-keys-section": _hotKeysSection2["default"]
	}
});
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":12,"hot-keys-controller":96,"hot-keys-section":97,"secret-form":110}],99:[function(require,module,exports){
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Set = require("babel-runtime/core-js/set")["default"];

var _Map = require("babel-runtime/core-js/map")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
var marked0$0 = [entries].map(_regeneratorRuntime.mark);
var STORAGE_ITEM_KEY_PREFIX = "35a5bcbb-edc7-4e48-ad29-dc9b2fc2fd54-pk-";
var PK_TO_PK_NAME_MAP_FIELD = _Symbol();
var OBSERVERS_FIELD = _Symbol();

var PublicKeyStorage = (function () {
	function PublicKeyStorage(storage) {
		_classCallCheck(this, PublicKeyStorage);

		this.storage = storage;
		this[OBSERVERS_FIELD] = new _Set();
		initPublicKeyToPublicKeyNameMap.call(this);
	}

	_createClass(PublicKeyStorage, [{
		key: "getPublicKey",
		value: function getPublicKey(publicKeyName) {
			return _getPublicKey.call(this, publicKeyName);
		}
	}, {
		key: "setPublicKey",
		value: function setPublicKey(publicKeyName, publicKey) {
			_setPublicKey.call(this, publicKeyName, publicKey);
			notifyObservers.call(this);
		}
	}, {
		key: "removePublicKey",
		value: function removePublicKey(publicKeyName) {
			_removePublicKey.call(this, publicKeyName);
			notifyObservers.call(this);
		}
	}, {
		key: "doesPublicKeyNameExist",
		value: function doesPublicKeyNameExist(publicKeyName) {
			return Boolean(this.getPublicKey(publicKeyName));
		}
	}, {
		key: "doesPublicKeyExist",
		value: function doesPublicKeyExist(publicKey) {
			return this[PK_TO_PK_NAME_MAP_FIELD].has(publicKey);
		}
	}, {
		key: "getPublicKeyName",
		value: function getPublicKeyName(publicKey) {
			return this[PK_TO_PK_NAME_MAP_FIELD].get(publicKey);
		}
	}, {
		key: "observe",
		value: function observe(observer) {
			this[OBSERVERS_FIELD].add(observer);
			return (function unobserve() {
				this[OBSERVERS_FIELD]["delete"](observer);
			}).bind(this);
		}
	}, {
		key: "isEmpty",
		get: function get() {
			var firstEntry = entries.call(this).next();
			return firstEntry.done;
		}
	}, {
		key: "isNotEmpty",
		get: function get() {
			return !this.isEmpty;
		}
	}, {
		key: "entries",
		get: function get() {
			return [].concat(_toConsumableArray(entries.call(this)));
		},
		set: function set(newEntries) {
			setEntries.call(this, newEntries);
			notifyObservers.call(this);
		}
	}]);

	return PublicKeyStorage;
})();

exports["default"] = new PublicKeyStorage(window.localStorage);

function initPublicKeyToPublicKeyNameMap() {
	var _this = this;

	this[PK_TO_PK_NAME_MAP_FIELD] = new _Map();
	this.entries.forEach(function (entry) {
		_this[PK_TO_PK_NAME_MAP_FIELD].set(entry.publicKey, entry.publicKeyName);
	});
}

function entries() {
	var i, storageItemKey, publicKeyName, publicKey;
	return _regeneratorRuntime.wrap(function entries$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				i = 0;

			case 1:
				if (!(i < this.storage.length)) {
					context$1$0.next = 10;
					break;
				}

				storageItemKey = this.storage.key(i);

				if (!isAppropriateStorageItemKey(storageItemKey)) {
					context$1$0.next = 7;
					break;
				}

				publicKeyName = toPublicKeyName(storageItemKey), publicKey = this.storage.getItem(storageItemKey);
				context$1$0.next = 7;
				return { publicKey: publicKey, publicKeyName: publicKeyName };

			case 7:
				i++;
				context$1$0.next = 1;
				break;

			case 10:
			case "end":
				return context$1$0.stop();
		}
	}, marked0$0[0], this);
}

function setEntries(newEntries) {
	var _this2 = this;

	if (newEntries) {
		newEntries.forEach(function (entry) {
			_setPublicKey.call(_this2, entry.publicKeyName, entry.publicKey);
		});
	}
}

function _getPublicKey(publicKeyName) {
	return this.storage.getItem(toStorageItemKey(publicKeyName));
}

function _setPublicKey(publicKeyName, publicKey) {
	if (publicKeyName && publicKey) {
		if (this[PK_TO_PK_NAME_MAP_FIELD].has(publicKey)) {
			var oldPublicKeyName = this[PK_TO_PK_NAME_MAP_FIELD].get(publicKey);
			_removePublicKey.call(this, oldPublicKeyName);
		}
		this.storage.setItem(toStorageItemKey(publicKeyName), publicKey);
		this[PK_TO_PK_NAME_MAP_FIELD].set(publicKey, publicKeyName);
	}
}

function _removePublicKey(publicKeyName) {
	var storageItemKey = toStorageItemKey(publicKeyName);
	var publicKey = this.storage.getItem(storageItemKey);
	if (publicKey) {
		this.storage.removeItem(storageItemKey);
		this[PK_TO_PK_NAME_MAP_FIELD]["delete"](publicKey);
	}
}

function notifyObservers() {
	var _this3 = this;

	this[OBSERVERS_FIELD].forEach(function (observer) {
		return observer.call(_this3);
	});
}

function isAppropriateStorageItemKey(storageItemKey) {
	return _.startsWith(storageItemKey, STORAGE_ITEM_KEY_PREFIX);
}

function toStorageItemKey(publicKeyName) {
	return STORAGE_ITEM_KEY_PREFIX + publicKeyName;
}

function toPublicKeyName(storageItemKey) {
	return storageItemKey.substring(STORAGE_ITEM_KEY_PREFIX.length);
}
module.exports = exports["default"];

},{"babel-runtime/core-js/map":2,"babel-runtime/core-js/set":8,"babel-runtime/core-js/symbol":9,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":11,"babel-runtime/helpers/to-consumable-array":13,"babel-runtime/regenerator":91}],100:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _publicKeyStorage = require("public-key-storage");

var _publicKeyStorage2 = _interopRequireDefault(_publicKeyStorage);

exports["default"] = {
	showBullets: false,
	showProgress: true,
	showButtons: true,
	scrollToElement: true,
	showStepNumbers: false,
	keyboardNavigation: false,
	steps: prepareIntroSteps([{
		intro: "<strong>In Mind Notes</strong> is here to help you keep your secrets\n\t\t\t\t\tin the most safe place... <strong>in your mind</strong>."
	}, {
		intro: "Please think up <strong>the strongest passphrase</strong> you can remember.",
		position: "bottom",
		postProcess: function postProcess() {
			if (!this.passphrase) {
				this.passphrase = "qwerty";
			}
		}
	}, {
		intro: "Generate <strong>your secret</strong>\n\t\t\t\t\tto use it in any <strong>service</strong> you want:\n\t\t\t\t\tmail, social network, online banking, ...",
		position: "right",
		init: function init(stepInitSPI) {
			return this.$watch("generatedSecret", function (generatedSecret) {
				if (stepInitSPI.isCurrentStep && generatedSecret) {
					stepInitSPI.nextStep();
				}
			});
		},
		preProcess: function preProcess() {
			this.isDirectMode = false;
		},
		postProcess: function postProcess() {
			if (!this.generatedSecret) {
				this.generatedSecret = "asdfgh";
			}
		}
	}, {
		intro: "<strong>Secret</strong> has been generated. Here it is.\n\t\t\t\t\tIt can be used as very strong password. Let's go to the next step.",
		position: "bottom",
		preProcess: function preProcess() {
			this.isDirectMode = false;
		},
		postProcess: function postProcess() {
			if (!this.generatedSecret) {
				this.generatedSecret = "asdfgh";
			}
		}
	}, {
		intro: "Name your secret. Appropriate service name is the better choice.\n\t\t\t\t\tFor example <strong>facebook</strong> or <strong>mail.ru</strong>.",
		position: "top",
		preProcess: function preProcess() {
			this.isDirectMode = false;
		},
		postProcess: function postProcess() {
			if (!this.enteredPublicKeyName) {
				this.enteredPublicKeyName = "noname";
			}
		}
	}, {
		intro: "You are doing well. Press this button to save new public key\n\t\t\t\t\tin <strong>the local storage</strong> (of your browser).\n\t\t\t\t\tPlease don't worry about public keys safety.\n\t\t\t\t\tHowever, keep them in the private space.",
		position: "left",
		init: function init(stepInitSPI) {
			var _this = this;

			return _publicKeyStorage2["default"].observe(function () {
				if (stepInitSPI.isCurrentStep && _publicKeyStorage2["default"].doesPublicKeyNameExist(_this.enteredPublicKeyName)) {
					stepInitSPI.nextStep();
				}
			});
		},
		preProcess: function preProcess() {
			this.isDirectMode = false;
			_publicKeyStorage2["default"].removePublicKey(this.enteredPublicKeyName);
		},
		postProcess: function postProcess() {
			if (!_publicKeyStorage2["default"].doesPublicKeyNameExist(this.enteredPublicKeyName)) {
				_publicKeyStorage2["default"].setPublicKey(this.enteredPublicKeyName, this.computedPublicKey);
			}
		}
	}, {
		intro: "Your secret has been saved by means of <strong>passphrase</strong>\n\t\t\t\t\tand <strong>public key</strong>. Now let's try to restore your secret.\n\t\t\t\t\tPlease press this button to change mode.",
		position: "bottom",
		init: function init(stepInitSPI) {
			return this.$watch("isDirectMode", function (isDirectMode) {
				if (stepInitSPI.isCurrentStep && isDirectMode) {
					stepInitSPI.nextStep();
				}
			});
		},
		postProcess: function postProcess() {
			if (!this.isDirectMode) {
				this.isDirectMode = true;
			}
		}
	}, {
		intro: "Enter the name of the secret once again (public key name).",
		position: "bottom",
		postProcess: function postProcess() {
			if (this.enteredPublicKeyName !== this.chosenPublicKeyName) {
				this.chosenPublicKeyName = this.enteredPublicKeyName;
			}
		}
	}, {
		intro: "Great job. Here is your secret.",
		position: "top"
	}])
};

function prepareIntroSteps(steps) {
	steps.forEach(function (step, index) {
		if (index) {
			step.element = "[data-step-index='" + index + "']";
		} else {
			// Zero step goes without element, because it is introductory words only
		}
	});
	return steps;
}
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":12,"public-key-storage":99}],101:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _Object$defineProperties = require("babel-runtime/core-js/object/define-properties")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _introDefinition = require("intro-definition");

var _introDefinition2 = _interopRequireDefault(_introDefinition);

var DESTROYERS_FIELD = _Symbol();

exports["default"] = {
	methods: {
		startIntro: function startIntro() {
			var intro = initIntro.call(this);
			intro.start();
		}
	}
};

function initIntro() {
	var _this = this;

	Vue.config.async = false;
	var intro = introJs();
	this[DESTROYERS_FIELD] = [];
	_introDefinition2["default"].steps.forEach(function (step, stepIndex) {
		if (step.init) {
			var stepInitSPI = createStepInitSPI.call(_this, stepIndex, intro),
			    destroyer = step.init.call(_this, stepInitSPI);
			_this[DESTROYERS_FIELD].push(destroyer);
		}
	});
	return intro.setOptions(_introDefinition2["default"]).onbeforechange(function (node) {
		var currentStepIndex = $(node).data("step-index") || 0;
		processStep.call(_this, currentStepIndex);
	}).oncomplete(destroyIntro.bind(this)).onexit(destroyIntro.bind(this));
}

function createStepInitSPI(stepIndex, intro) {
	return _Object$defineProperties({
		nextStep: function nextStep() {
			intro.goToStep(1 + stepIndex + 1);
		}
	}, {
		isCurrentStep: {
			get: function get() {
				return stepIndex === intro._currentStep;
			},
			configurable: true,
			enumerable: true
		}
	});
}

function processStep(currentStepIndex) {
	for (var stepIndex = 0; stepIndex < currentStepIndex; stepIndex++) {
		invokeStepProcessor.call(this, stepIndex, "postProcess");
	}
	invokeStepProcessor.call(this, currentStepIndex, "preProcess");
}

function invokeStepProcessor(stepIndex, processorName) {
	if (stepIndex < 0 || stepIndex >= _introDefinition2["default"].steps.length) {
		return;
	}
	var step = _introDefinition2["default"].steps[stepIndex];
	if (processorName in step) {
		step[processorName].call(this);
	}
}

function destroyIntro() {
	Vue.config.async = true;
	this[DESTROYERS_FIELD].forEach(function (destroyer) {
		if (destroyer) {
			destroyer();
		}
	});
}
module.exports = exports["default"];

},{"babel-runtime/core-js/object/define-properties":4,"babel-runtime/core-js/symbol":9,"babel-runtime/helpers/interop-require-default":12,"intro-definition":100}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {
	data: function data() {
		return {
			isPassphraseVisible: false
		};
	},
	methods: {
		togglePassphraseVisibility: function togglePassphraseVisibility() {
			this.isPassphraseVisible = !this.isPassphraseVisible;
		}
	}
};
module.exports = exports["default"];

},{}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = {
	computed: {
		isBestPassphrase: function isBestPassphrase() {
			return this.passphraseScore === 4;
		},
		isStrongPassphrase: function isStrongPassphrase() {
			return this.passphraseScore === 3;
		},
		isNormalPassphrase: function isNormalPassphrase() {
			return this.passphraseScore === 2;
		},
		isWeakPassphrase: function isWeakPassphrase() {
			return this.passphraseScore < 2;
		},
		passphraseScorePercentage: function passphraseScorePercentage() {
			if (this.passphrase) {
				return Math.round((this.passphraseScore + 1) * 100 / 5);
			} else {
				return 0;
			}
		},
		passphraseScore: function passphraseScore() {
			var passphraseStat = zxcvbn(this.passphrase);
			return passphraseStat.score;
		}
	}
};
module.exports = exports["default"];

},{}],104:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _scorePassphraseField__score = require("./__score/passphrase-field__score");

var _scorePassphraseField__score2 = _interopRequireDefault(_scorePassphraseField__score);

var _eyeButtonPassphraseField__eyeButton = require("./__eye-button/passphrase-field__eye-button");

var _eyeButtonPassphraseField__eyeButton2 = _interopRequireDefault(_eyeButtonPassphraseField__eyeButton);

exports["default"] = Vue.extend({
	mixins: [_scorePassphraseField__score2["default"], _eyeButtonPassphraseField__eyeButton2["default"]],
	template: "#passphrase-field-template",
	props: {
		passphrase: {
			type: String,
			required: true
		}
	},
	computed: {
		passphraseFieldType: function passphraseFieldType() {
			return this.isPassphraseVisible ? "text" : "password";
		}
	}
});
module.exports = exports["default"];

},{"./__eye-button/passphrase-field__eye-button":102,"./__score/passphrase-field__score":103,"babel-runtime/helpers/interop-require-default":12}],105:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _publicKeyStorage = require("public-key-storage");

var _publicKeyStorage2 = _interopRequireDefault(_publicKeyStorage);

var UNOBSERVE_METHOD = _Symbol();

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
	created: function created() {
		var _this = this;

		this[UNOBSERVE_METHOD] = _publicKeyStorage2["default"].observe(function () {
			_this.entries = _publicKeyStorage2["default"].entries;
			_this.publicKey = _publicKeyStorage2["default"].getPublicKey(_this.publicKeyName);
		});
	},
	data: function data() {
		return {
			entries: _publicKeyStorage2["default"].entries
		};
	},
	watch: {
		publicKeyName: function publicKeyName(_publicKeyName) {
			this.publicKey = _publicKeyStorage2["default"].getPublicKey(_publicKeyName);
		}
	},
	computed: {
		entriesDownloadHref: function entriesDownloadHref() {
			if (this.entries && this.entries.length) {
				var content = JSON.stringify(this.entries);
				return "data:text/json;charset=utf-8," + encodeURIComponent(content);
			} else {
				return "";
			}
		}
	},
	methods: {
		openFileChooserForImport: function openFileChooserForImport() {
			getFileInputForImport.call(this).click();
		},
		importPublicKeys: function importPublicKeys() {
			var fileInput = getFileInputForImport.call(this);
			if (!fileInput.files || !fileInput.files.length) {
				return;
			}
			var fileReader = new FileReader();
			fileReader.onload = function () {
				try {
					_publicKeyStorage2["default"].entries = JSON.parse(fileReader.result);
				} catch (ex) {
					console.warn(ex);
				}
			};
			fileReader.readAsText(fileInput.files[0]);
		},
		exportPublicKeys: function exportPublicKeys() {
			if (_publicKeyStorage2["default"].isNotEmpty) {
				this.$el.querySelector("a[download]").click();
			} else {
				swal("No public keys to export");
			}
		}
	},
	destroyed: function destroyed() {
		this[UNOBSERVE_METHOD]();
	}
});

function getFileInputForImport() {
	return this.$el.querySelector("input[type=file]");
}
module.exports = exports["default"];

},{"babel-runtime/core-js/symbol":9,"babel-runtime/helpers/interop-require-default":12,"public-key-storage":99}],106:[function(require,module,exports){
"use strict";

var _Symbol = require("babel-runtime/core-js/symbol")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _publicKeyStorage = require("public-key-storage");

var _publicKeyStorage2 = _interopRequireDefault(_publicKeyStorage);

var UNOBSERVE_METHOD = _Symbol();

exports["default"] = Vue.extend({
	template: "#public-key-writer-field-template",
	props: {
		publicKey: {
			type: String,
			required: true
		},
		publicKeyName: {
			type: String,
			required: true,
			"default": ""
		},
		error: {
			required: true
		},
		tabIndex: {
			type: String,
			"default": "-1"
		}
	},
	created: function created() {
		this[UNOBSERVE_METHOD] = _publicKeyStorage2["default"].observe(recomputeSavedPublicKey.bind(this));
		recomputeSavedPublicKey.call(this);
	},
	watch: {
		publicKeyName: recomputeSavedPublicKey
	},
	data: function data() {
		return {
			savedPublicKey: null
		};
	},
	computed: {
		hasError: function hasError() {
			return Boolean(this.error);
		},
		isSaved: function isSaved() {
			var samePublicKey = this.savedPublicKey === this.publicKey;
			return this.publicKeyName && samePublicKey;
		},
		isReadyForSave: function isReadyForSave() {
			return this.publicKey && this.publicKeyName;
		}
	},
	methods: {
		tryToSavePublicKey: function tryToSavePublicKey() {
			if (this.isSaved || !this.isReadyForSave) {
				return;
			}
			if (_publicKeyStorage2["default"].doesPublicKeyNameExist(this.publicKeyName)) {
				swal({
					type: "warning",
					title: "Are you sure?",
					text: "You are going to rewrite public key with name \"" + this.publicKeyName + "\"...",
					showCancelButton: true,
					confirmButtonText: "Rewrite"
				}, savePublicKey.bind(this));
			} else if (_publicKeyStorage2["default"].doesPublicKeyExist(this.publicKey)) {
				var oldName = _publicKeyStorage2["default"].getPublicKeyName(this.publicKey);
				swal({
					type: "warning",
					title: "Are you sure?",
					text: "You are going to change public key name from \"" + oldName + "\" to \"" + this.publicKeyName + "\"...",
					showCancelButton: true,
					confirmButtonText: "Rename"
				}, savePublicKey.bind(this));
			} else {
				savePublicKey.call(this);
			}
		}
	},
	destroyed: function destroyed() {
		this[UNOBSERVE_METHOD]();
	}
});

function savePublicKey() {
	_publicKeyStorage2["default"].setPublicKey(this.publicKeyName, this.publicKey);
}

function recomputeSavedPublicKey() {
	this.savedPublicKey = _publicKeyStorage2["default"].getPublicKey(this.publicKeyName);
}
module.exports = exports["default"];

},{"babel-runtime/core-js/symbol":9,"babel-runtime/helpers/interop-require-default":12,"public-key-storage":99}],107:[function(require,module,exports){
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
		error: {
			required: true
		},
		tabIndex: {
			type: String,
			"default": "-1"
		}
	},
	computed: {
		hasError: function hasError() {
			return Boolean(this.error);
		}
	},
	methods: {
		selectSecret: function selectSecret() {
			this.$el.querySelector("input").select();
		}
	}
});
module.exports = exports["default"];

},{}],108:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _crypto = require("crypto");

var _utilsStringToBuffer = require("utils/string-to-buffer");

var _utilsBufferToBase64 = require("utils/buffer-to-base64");

var _secretFormPublicKeyReaderField = require("secret-form/public-key-reader-field");

var _secretFormPublicKeyReaderField2 = _interopRequireDefault(_secretFormPublicKeyReaderField);

var _secretFormSecretField = require("secret-form/secret-field");

var _secretFormSecretField2 = _interopRequireDefault(_secretFormSecretField);

exports["default"] = {
	data: function data() {
		return {
			chosenPublicKey: "",
			chosenPublicKeyName: "",
			computedSecret: "",
			secretComputationError: undefined
		};
	},
	watch: {
		"passphrase + chosenPublicKey": "updateComputedSecret"
	},
	methods: {
		updateComputedSecret: function updateComputedSecret() {
			var _this = this;

			if (this.passphrase && this.chosenPublicKey) {
				try {
					(0, _crypto.computeSecret)(this.passphrase, (0, _utilsBufferToBase64.base64ToBuffer)(this.chosenPublicKey)).then(function (secret) {
						_this.computedSecret = (0, _utilsStringToBuffer.bufferToString)(secret);
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
	},
	components: {
		"public-key-reader-field": _secretFormPublicKeyReaderField2["default"],
		"secret-field": _secretFormSecretField2["default"]
	}
};
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":12,"crypto":94,"secret-form/public-key-reader-field":105,"secret-form/secret-field":107,"utils/buffer-to-base64":113,"utils/string-to-buffer":116}],109:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _crypto = require("crypto");

var _utilsStringToBuffer = require("utils/string-to-buffer");

var _utilsBufferToBase64 = require("utils/buffer-to-base64");

var _secretFormSecretGeneratorField = require("secret-form/secret-generator-field");

var _secretFormSecretGeneratorField2 = _interopRequireDefault(_secretFormSecretGeneratorField);

var _secretFormPublicKeyWriterField = require("secret-form/public-key-writer-field");

var _secretFormPublicKeyWriterField2 = _interopRequireDefault(_secretFormPublicKeyWriterField);

exports["default"] = {
	data: function data() {
		return {
			generatedSecret: "",
			enteredPublicKeyName: "",
			computedPublicKey: "",
			publicKeyComputationError: undefined
		};
	},
	watch: {
		"passphrase + generatedSecret": "updateComputedPublicKey"
	},
	methods: {
		updateComputedPublicKey: function updateComputedPublicKey() {
			var _this = this;

			if (this.passphrase && this.generatedSecret) {
				try {
					(0, _crypto.computePublicKey)(this.passphrase, (0, _utilsStringToBuffer.stringToBuffer)(this.generatedSecret)).then(function (publicKey) {
						_this.computedPublicKey = (0, _utilsBufferToBase64.bufferToBase64)(publicKey);
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
	},
	components: {
		"secret-generator-field": _secretFormSecretGeneratorField2["default"],
		"public-key-writer-field": _secretFormPublicKeyWriterField2["default"]
	}
};
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":12,"crypto":94,"secret-form/public-key-writer-field":106,"secret-form/secret-generator-field":112,"utils/buffer-to-base64":113,"utils/string-to-buffer":116}],110:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _secretFormDirectModeMixin = require("secret-form-direct-mode-mixin");

var _secretFormDirectModeMixin2 = _interopRequireDefault(_secretFormDirectModeMixin);

var _secretFormReverseModeMixin = require("secret-form-reverse-mode-mixin");

var _secretFormReverseModeMixin2 = _interopRequireDefault(_secretFormReverseModeMixin);

var _secretFormIntroMixin = require("secret-form-intro-mixin");

var _secretFormIntroMixin2 = _interopRequireDefault(_secretFormIntroMixin);

var _secretFormPassphraseField = require("secret-form/passphrase-field");

var _secretFormPassphraseField2 = _interopRequireDefault(_secretFormPassphraseField);

var _publicKeyStorage = require("public-key-storage");

var _publicKeyStorage2 = _interopRequireDefault(_publicKeyStorage);

exports["default"] = Vue.extend({
	template: "#secret-form-template",
	mixins: [_secretFormDirectModeMixin2["default"], _secretFormReverseModeMixin2["default"], _secretFormIntroMixin2["default"]],
	data: function data() {
		return {
			isDirectMode: Boolean(_publicKeyStorage2["default"].entries.length),
			passphrase: ""
		};
	},
	computed: {
		isReverseMode: function isReverseMode() {
			return !this.isDirectMode;
		}
	},
	methods: {
		toggleMode: function toggleMode() {
			this.isDirectMode = !this.isDirectMode;
		}
	},
	components: {
		"passphrase-field": _secretFormPassphraseField2["default"]
	}
});
module.exports = exports["default"];

},{"babel-runtime/helpers/interop-require-default":12,"public-key-storage":99,"secret-form-direct-mode-mixin":108,"secret-form-intro-mixin":101,"secret-form-reverse-mode-mixin":109,"secret-form/passphrase-field":104}],111:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsGeneratorsChars = require("utils/generators/chars");

var _utilsGeneratorsChars2 = _interopRequireDefault(_utilsGeneratorsChars);

var _utilsGeneratorsRandomChars = require("utils/generators/random-chars");

var _utilsGeneratorsRandomChars2 = _interopRequireDefault(_utilsGeneratorsRandomChars);

exports.generateSecret = generateSecret;
exports.filterAlphabet = filterAlphabet;

var ABC = [].concat(_toConsumableArray((0, _utilsGeneratorsChars2["default"])("!", "~")));

function generateSecret(length) {
	var alphabet = arguments.length <= 1 || arguments[1] === undefined ? ABC : arguments[1];

	return [].concat(_toConsumableArray((0, _utilsGeneratorsRandomChars2["default"])(length, alphabet))).join("");
}

function filterAlphabet(regExp) {
	var alphabet = arguments.length <= 1 || arguments[1] === undefined ? ABC : arguments[1];

	return alphabet.filter(function (char) {
		return regExp.test(char);
	});
}

},{"babel-runtime/helpers/interop-require-default":12,"babel-runtime/helpers/to-consumable-array":13,"utils/generators/chars":114,"utils/generators/random-chars":115}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _secretFormSecretGeneratorFieldGenerateSecret = require("secret-form/secret-generator-field/generate-secret");

var DEFAULT_ALPHABET_REGEXP = /[0-9a-zA-Z_]/;
var DEFAULT_SECRET_LENGTH_VARIANT = { secretLength: 16, label: "Medium" };

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
			secretLengthVariantList: [{ secretLength: 8, label: "Short" }, DEFAULT_SECRET_LENGTH_VARIANT, { secretLength: 32, label: "Long" }],
			currentSecretLengthVariant: DEFAULT_SECRET_LENGTH_VARIANT
		};
	},
	methods: {
		generateSecret: function generateSecret() {
			var alphabet = (0, _secretFormSecretGeneratorFieldGenerateSecret.filterAlphabet)(this.currentAlphabetRegExp);
			this.secret = (0, _secretFormSecretGeneratorFieldGenerateSecret.generateSecret)(this.currentSecretLengthVariant.secretLength, alphabet);
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

},{"secret-form/secret-generator-field/generate-secret":111}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _utilsStringToBuffer = require("utils/string-to-buffer");

exports.bufferToBase64 = bufferToBase64;
exports.base64ToBuffer = base64ToBuffer;

function bufferToBase64(buffer) {
	if (!(buffer instanceof ArrayBuffer)) {
		throw new Error("Invalid argument. ArrayBuffer is expected");
	}
	if (buffer.byteLength === 0) {
		return "";
	}
	return btoa((0, _utilsStringToBuffer.bufferToString)(buffer, Uint8Array));
}

function base64ToBuffer(base64) {
	if (!_.isString(base64)) {
		throw new Error("Invalid argument. String is expected");
	}
	if (!base64) {
		return new ArrayBuffer(0);
	}
	return (0, _utilsStringToBuffer.stringToBuffer)(atob(base64), Uint8Array);
}

},{"utils/string-to-buffer":116}],114:[function(require,module,exports){
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

},{"babel-runtime/regenerator":91}],115:[function(require,module,exports){
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

},{"babel-runtime/helpers/to-consumable-array":13,"babel-runtime/regenerator":91}],116:[function(require,module,exports){
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

},{"babel-runtime/helpers/to-consumable-array":13}],117:[function(require,module,exports){
"use strict";

var _crypto = require("crypto");

var _utilsStringToBuffer = require("utils/string-to-buffer");

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Crypto module]", function () {

	describe("computePublicKey", function () {

		var PASSPHRASE_STR = "123456qwerty";
		var SECRET_STR = "asdfg12345";

		it("should work symmetrically to computeSecret", function () {
			var secret = (0, _utilsStringToBuffer.stringToBuffer)(SECRET_STR);
			return expect((0, _crypto.computePublicKey)(PASSPHRASE_STR, secret).then(function (publicKey) {
				return (0, _crypto.computeSecret)(PASSPHRASE_STR, publicKey);
			}).then(_utilsStringToBuffer.bufferToString)).to.eventually.equal(SECRET_STR);
		});
	});
});

},{"crypto":94,"utils/string-to-buffer":116}],118:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _publicKeyStorage = require("public-key-storage");

var _publicKeyStorage2 = _interopRequireDefault(_publicKeyStorage);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Public key storage module]", function () {

	describe("publicKeyStorage", function () {
		var PUBLIC_KEY_ENTRY_LIST = [{ publicKeyName: "foo", publicKey: "123456" }, { publicKeyName: "Foo", publicKey: "654321" }, { publicKeyName: "bar", publicKey: "qwerty" }, { publicKeyName: "bAr", publicKey: "ytrewq" }, { publicKeyName: "baz", publicKey: "asdfgh" }, { publicKeyName: "baZ", publicKey: "hgfdsa" }, { publicKeyName: "qux", publicKey: "zxcvbn" }, { publicKeyName: "QUX", publicKey: "nbvcxz" }];

		var PUBLIC_KEY = PUBLIC_KEY_ENTRY_LIST[0];

		beforeEach(function () {
			window.localStorage.clear();
		});

		describe("entries", function () {
			it("should represent all public keys", function () {
				_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
				expect(entrtyListToMap(_publicKeyStorage2["default"].entries)).to.deep.equal(entrtyListToMap(PUBLIC_KEY_ENTRY_LIST));
			});
		});

		describe("isEmpty", function () {
			it("should reflect the absence of public keys", function () {
				expect(_publicKeyStorage2["default"].isEmpty).to.equal(true);
				_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
				expect(_publicKeyStorage2["default"].isEmpty).to.equal(false);
			});
		});

		describe("isNotEmpty", function () {
			it("should reflect the presence of public keys", function () {
				expect(_publicKeyStorage2["default"].isNotEmpty).to.equal(false);
				_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
				expect(_publicKeyStorage2["default"].isNotEmpty).to.equal(true);
			});
		});

		describe("setPublicKey", function () {
			it("should store public key", function () {
				var publicKeyName = PUBLIC_KEY.publicKeyName;
				var publicKey = PUBLIC_KEY.publicKey;

				_publicKeyStorage2["default"].setPublicKey(publicKeyName, publicKey);
				expect(_publicKeyStorage2["default"].entries).to.deep.equal([PUBLIC_KEY]);
			});

			it("should replace public key with same name", function () {
				var publicKeyName = PUBLIC_KEY.publicKeyName;
				var publicKey = PUBLIC_KEY.publicKey;

				_publicKeyStorage2["default"].setPublicKey(publicKeyName, publicKey);
				_publicKeyStorage2["default"].setPublicKey(publicKeyName, "new-public-key");
				var expectedPublicKey = { publicKeyName: publicKeyName, publicKey: "new-public-key" };
				expect(_publicKeyStorage2["default"].entries).to.deep.equal([expectedPublicKey]);
			});

			it("should rename public key entry with same public key inside", function () {
				var publicKeyName = PUBLIC_KEY.publicKeyName;
				var publicKey = PUBLIC_KEY.publicKey;

				_publicKeyStorage2["default"].setPublicKey(publicKeyName, publicKey);
				_publicKeyStorage2["default"].setPublicKey("new-name", publicKey);
				var expectedPublicKey = { publicKeyName: "new-name", publicKey: publicKey };
				expect(_publicKeyStorage2["default"].entries).to.deep.equal([expectedPublicKey]);
			});
		});

		describe("removePublicKey", function () {
			it("should remove public key by name", function () {
				_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
				var publicKeyName = PUBLIC_KEY_ENTRY_LIST[5].publicKeyName;

				_publicKeyStorage2["default"].removePublicKey(publicKeyName);
				var expectedPublicKeysMap = entrtyListToMap(PUBLIC_KEY_ENTRY_LIST);
				delete expectedPublicKeysMap[publicKeyName];
				expect(entrtyListToMap(_publicKeyStorage2["default"].entries)).to.deep.equal(expectedPublicKeysMap);
			});
		});

		it("should notify observers on entries update", function () {
			var observer = chai.spy();
			_publicKeyStorage2["default"].observe(observer);
			_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
			expect(observer).to.have.been.called.once();
		});

		it("should notify observers on setPublicKey", function () {
			var observer = chai.spy();
			_publicKeyStorage2["default"].observe(observer);
			var publicKeyName = PUBLIC_KEY.publicKeyName;
			var publicKey = PUBLIC_KEY.publicKey;

			_publicKeyStorage2["default"].setPublicKey(publicKeyName, publicKey);
			expect(observer).to.have.been.called.once();
		});

		it("should notify observers on removePublicKey", function () {
			var observer = chai.spy();
			_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
			_publicKeyStorage2["default"].observe(observer);
			expect(observer).to.not.have.been.called();
			var publicKeyName = PUBLIC_KEY_ENTRY_LIST[5].publicKeyName;

			_publicKeyStorage2["default"].removePublicKey(publicKeyName);
			expect(observer).to.have.been.called.once();
		});

		it("should NOT notify abandoned observers", function () {
			var observer = chai.spy();
			var unobserve = _publicKeyStorage2["default"].observe(observer);
			unobserve();
			_publicKeyStorage2["default"].entries = PUBLIC_KEY_ENTRY_LIST;
			expect(observer).to.not.have.been.called();
		});
	});
});

function entrtyListToMap(entryList) {
	return _(entryList).indexBy("publicKeyName").mapValues("publicKey").value();
}

},{"babel-runtime/helpers/interop-require-default":12,"public-key-storage":99}],119:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _secretFormSecretGeneratorFieldGenerateSecret = require("secret-form/secret-generator-field/generate-secret");

var _utilsGeneratorsChars = require("utils/generators/chars");

var _utilsGeneratorsChars2 = _interopRequireDefault(_utilsGeneratorsChars);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Secret generator module]", function () {

	describe("filterAlphabet", function () {
		it("should reduce alphabet according to regular expression", function () {
			expect((0, _secretFormSecretGeneratorFieldGenerateSecret.filterAlphabet)(/[A-Z]/)).to.deep.equal([].concat(_toConsumableArray((0, _utilsGeneratorsChars2["default"])("A", "Z"))));
		});
	});

	describe("generateSecret", function () {

		var SECRET_LEN = 10;

		it("should return string with exact length", function () {
			expect((0, _secretFormSecretGeneratorFieldGenerateSecret.generateSecret)(SECRET_LEN)).to.be.a("string").and.to.have.length(SECRET_LEN);
		});

		it("should generate chars from specified alphabet", function () {
			expect((0, _secretFormSecretGeneratorFieldGenerateSecret.generateSecret)(SECRET_LEN, (0, _secretFormSecretGeneratorFieldGenerateSecret.filterAlphabet)(/[A-Z]/))).to.match(/^[A-Z]+$/);
		});
	});
});

},{"babel-runtime/helpers/interop-require-default":12,"babel-runtime/helpers/to-consumable-array":13,"secret-form/secret-generator-field/generate-secret":111,"utils/generators/chars":114}],120:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _utilsBufferToBase64 = require("utils/buffer-to-base64");

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Base64 converter module]", function () {

	var randomBuffer = undefined;

	beforeEach(function () {
		randomBuffer = generateRandomBuffer();
	});

	describe("bufferToBase64", function () {
		it("should return string", function () {
			expect((0, _utilsBufferToBase64.bufferToBase64)(randomBuffer)).to.be.a("string").and.to.have.length.above(0);
		});
	});

	describe("base64ToBuffer", function () {
		it("should work symmetrically to bufferToBase64", function () {
			var buffer = (0, _utilsBufferToBase64.base64ToBuffer)((0, _utilsBufferToBase64.bufferToBase64)(randomBuffer));
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

},{"babel-runtime/helpers/to-consumable-array":13,"utils/buffer-to-base64":113}],121:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _utilsGeneratorsChars = require("utils/generators/chars");

var _utilsGeneratorsChars2 = _interopRequireDefault(_utilsGeneratorsChars);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Chars generator module]", function () {

	describe("chars generator", function () {
		it("should return valid alphabetic range", function () {
			expect([].concat(_toConsumableArray((0, _utilsGeneratorsChars2["default"])("A", "C")))).to.deep.equal(["A", "B", "C"]);
		});

		it("should return valid numeric range", function () {
			expect([].concat(_toConsumableArray((0, _utilsGeneratorsChars2["default"])("1", "3")))).to.deep.equal(["1", "2", "3"]);
		});
	});
});

},{"babel-runtime/helpers/interop-require-default":12,"babel-runtime/helpers/to-consumable-array":13,"utils/generators/chars":114}],122:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _utilsGeneratorsRandomChars = require("utils/generators/random-chars");

var _utilsGeneratorsRandomChars2 = _interopRequireDefault(_utilsGeneratorsRandomChars);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[Random chars generator module]", function () {

	describe("randomChars generator", function () {
		var RND_SEQUENCE_LEN = 10;

		it("should generate random sequence of specified length", function () {
			expect([].concat(_toConsumableArray((0, _utilsGeneratorsRandomChars2["default"])(RND_SEQUENCE_LEN, "abc")))).to.have.length(RND_SEQUENCE_LEN);
		});

		it("should generate chars from specified alphabet", function () {
			var randomStr = [].concat(_toConsumableArray((0, _utilsGeneratorsRandomChars2["default"])(RND_SEQUENCE_LEN, "abc123"))).join("");
			expect(randomStr).to.match(/^[abc123]+$/);
		});
	});
});

},{"babel-runtime/helpers/interop-require-default":12,"babel-runtime/helpers/to-consumable-array":13,"utils/generators/random-chars":115}],123:[function(require,module,exports){
"use strict";

var _toConsumableArray = require("babel-runtime/helpers/to-consumable-array")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

var _utilsStringToBuffer = require("utils/string-to-buffer");

var _utilsGeneratorsChars = require("utils/generators/chars");

var _utilsGeneratorsChars2 = _interopRequireDefault(_utilsGeneratorsChars);

var _utilsGeneratorsRandomChars = require("utils/generators/random-chars");

var _utilsGeneratorsRandomChars2 = _interopRequireDefault(_utilsGeneratorsRandomChars);

chai.config.includeStack = true;

var expect = chai.expect;

describe("[String converter module]", function () {

	var randomStr = undefined,
	    randomBuffer = undefined;

	beforeEach(function () {
		randomStr = generateRandomStr();
		randomBuffer = (0, _utilsStringToBuffer.stringToBuffer)(randomStr);
	});

	describe("stringToBuffer", function () {
		it("should return non-empty ArrayBuffer", function () {
			expect((0, _utilsStringToBuffer.stringToBuffer)(randomStr)).to.be.an["instanceof"](ArrayBuffer).and.to.satisfy(function (buffer) {
				return buffer.byteLength > 0;
			});
		});

		it("should throw error in case of invalid argument", function () {
			expect(_utilsStringToBuffer.stringToBuffer).to["throw"](Error, /Invalid argument/);
		});
	});

	describe("bufferToString", function () {
		it("should return non-empty string", function () {
			expect((0, _utilsStringToBuffer.bufferToString)(randomBuffer)).to.be.a("string").and.to.have.length.above(0);
		});

		it("should work symmetrically to stringToBuffer", function () {
			expect((0, _utilsStringToBuffer.bufferToString)(randomBuffer)).to.be.equal(randomStr);
		});

		it("should throw error in case of invalid argument", function () {
			expect(_utilsStringToBuffer.bufferToString).to["throw"](Error, /Invalid argument/);
		});
	});
});

function generateRandomStr() {
	var abc = [].concat(_toConsumableArray((0, _utilsGeneratorsChars2["default"])("A", "Z")), _toConsumableArray((0, _utilsGeneratorsChars2["default"])("a", "z")), _toConsumableArray((0, _utilsGeneratorsChars2["default"])("0", "9")));
	return [].concat(_toConsumableArray((0, _utilsGeneratorsRandomChars2["default"])(10, abc))).join("");
}

},{"babel-runtime/helpers/interop-require-default":12,"babel-runtime/helpers/to-consumable-array":13,"utils/generators/chars":114,"utils/generators/random-chars":115,"utils/string-to-buffer":116}]},{},[117,118,119,120,121,122,123,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116]);

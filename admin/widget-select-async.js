var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.AsyncSelectWidget = {}));
})(this, function(exports2) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getAugmentedNamespace(n2) {
    if (n2.__esModule)
      return n2;
    var a = Object.defineProperty({}, "__esModule", { value: true });
    Object.keys(n2).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n2, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n2[k];
        }
      });
    });
    return a;
  }
  var react = { exports: {} };
  var react_production_min = {};
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject$1(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i2 = 0; i2 < 10; i2++) {
        test2["_" + String.fromCharCode(i2)] = i2;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
        return test2[n2];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from2;
    var to2 = toObject$1(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from2 = Object(arguments[s]);
      for (var key in from2) {
        if (hasOwnProperty$5.call(from2, key)) {
          to2[key] = from2[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from2);
        for (var i2 = 0; i2 < symbols.length; i2++) {
          if (propIsEnumerable.call(from2, symbols[i2])) {
            to2[symbols[i2]] = from2[symbols[i2]];
          }
        }
      }
    }
    return to2;
  };
  /** @license React v16.14.0
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l = objectAssign, n$1 = typeof Symbol === "function" && Symbol.for, p = n$1 ? Symbol.for("react.element") : 60103, q = n$1 ? Symbol.for("react.portal") : 60106, r$1 = n$1 ? Symbol.for("react.fragment") : 60107, t = n$1 ? Symbol.for("react.strict_mode") : 60108, u$1 = n$1 ? Symbol.for("react.profiler") : 60114, v$1 = n$1 ? Symbol.for("react.provider") : 60109, w = n$1 ? Symbol.for("react.context") : 60110, x = n$1 ? Symbol.for("react.forward_ref") : 60112, y = n$1 ? Symbol.for("react.suspense") : 60113, z = n$1 ? Symbol.for("react.memo") : 60115, A = n$1 ? Symbol.for("react.lazy") : 60116, B = typeof Symbol === "function" && Symbol.iterator;
  function C$1(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var D = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E$1 = {};
  function F$1(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = E$1;
    this.updater = c || D;
  }
  F$1.prototype.isReactComponent = {};
  F$1.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(C$1(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  F$1.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function G$1() {
  }
  G$1.prototype = F$1.prototype;
  function H$1(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = E$1;
    this.updater = c || D;
  }
  var I$1 = H$1.prototype = new G$1();
  I$1.constructor = H$1;
  l(I$1, F$1.prototype);
  I$1.isPureReactComponent = true;
  var J$1 = { current: null }, K$1 = Object.prototype.hasOwnProperty, L$1 = { key: true, ref: true, __self: true, __source: true };
  function M$1(a, b, c) {
    var e, d = {}, g = null, k = null;
    if (b != null)
      for (e in b.ref !== void 0 && (k = b.ref), b.key !== void 0 && (g = "" + b.key), b)
        K$1.call(b, e) && !L$1.hasOwnProperty(e) && (d[e] = b[e]);
    var f = arguments.length - 2;
    if (f === 1)
      d.children = c;
    else if (1 < f) {
      for (var h = Array(f), m = 0; m < f; m++)
        h[m] = arguments[m + 2];
      d.children = h;
    }
    if (a && a.defaultProps)
      for (e in f = a.defaultProps, f)
        d[e] === void 0 && (d[e] = f[e]);
    return { $$typeof: p, type: a, key: g, ref: k, props: d, _owner: J$1.current };
  }
  function N$1(a, b) {
    return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O$1(a) {
    return typeof a === "object" && a !== null && a.$$typeof === p;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + ("" + a).replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P$1 = /\/+/g, Q$1 = [];
  function R$1(a, b, c, e) {
    if (Q$1.length) {
      var d = Q$1.pop();
      d.result = a;
      d.keyPrefix = b;
      d.func = c;
      d.context = e;
      d.count = 0;
      return d;
    }
    return { result: a, keyPrefix: b, func: c, context: e, count: 0 };
  }
  function S$1(a) {
    a.result = null;
    a.keyPrefix = null;
    a.func = null;
    a.context = null;
    a.count = 0;
    10 > Q$1.length && Q$1.push(a);
  }
  function T$1(a, b, c, e) {
    var d = typeof a;
    if (d === "undefined" || d === "boolean")
      a = null;
    var g = false;
    if (a === null)
      g = true;
    else
      switch (d) {
        case "string":
        case "number":
          g = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case p:
            case q:
              g = true;
          }
      }
    if (g)
      return c(e, a, b === "" ? "." + U$1(a, 0) : b), 1;
    g = 0;
    b = b === "" ? "." : b + ":";
    if (Array.isArray(a))
      for (var k = 0; k < a.length; k++) {
        d = a[k];
        var f = b + U$1(d, k);
        g += T$1(d, f, c, e);
      }
    else if (a === null || typeof a !== "object" ? f = null : (f = B && a[B] || a["@@iterator"], f = typeof f === "function" ? f : null), typeof f === "function")
      for (a = f.call(a), k = 0; !(d = a.next()).done; )
        d = d.value, f = b + U$1(d, k++), g += T$1(d, f, c, e);
    else if (d === "object")
      throw c = "" + a, Error(C$1(31, c === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : c, ""));
    return g;
  }
  function V$1(a, b, c) {
    return a == null ? 0 : T$1(a, "", b, c);
  }
  function U$1(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape(a.key) : b.toString(36);
  }
  function W$1(a, b) {
    a.func.call(a.context, b, a.count++);
  }
  function aa$1(a, b, c) {
    var e = a.result, d = a.keyPrefix;
    a = a.func.call(a.context, b, a.count++);
    Array.isArray(a) ? X$1(a, e, c, function(a2) {
      return a2;
    }) : a != null && (O$1(a) && (a = N$1(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P$1, "$&/") + "/") + c)), e.push(a));
  }
  function X$1(a, b, c, e, d) {
    var g = "";
    c != null && (g = ("" + c).replace(P$1, "$&/") + "/");
    b = R$1(b, g, e, d);
    V$1(a, aa$1, b);
    S$1(b);
  }
  var Y$1 = { current: null };
  function Z$1() {
    var a = Y$1.current;
    if (a === null)
      throw Error(C$1(321));
    return a;
  }
  var ba$1 = { ReactCurrentDispatcher: Y$1, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J$1, IsSomeRendererActing: { current: false }, assign: l };
  react_production_min.Children = { map: function(a, b, c) {
    if (a == null)
      return a;
    var e = [];
    X$1(a, e, null, b, c);
    return e;
  }, forEach: function(a, b, c) {
    if (a == null)
      return a;
    b = R$1(null, null, b, c);
    V$1(a, W$1, b);
    S$1(b);
  }, count: function(a) {
    return V$1(a, function() {
      return null;
    }, null);
  }, toArray: function(a) {
    var b = [];
    X$1(a, b, null, function(a2) {
      return a2;
    });
    return b;
  }, only: function(a) {
    if (!O$1(a))
      throw Error(C$1(143));
    return a;
  } };
  react_production_min.Component = F$1;
  react_production_min.Fragment = r$1;
  react_production_min.Profiler = u$1;
  react_production_min.PureComponent = H$1;
  react_production_min.StrictMode = t;
  react_production_min.Suspense = y;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba$1;
  react_production_min.cloneElement = function(a, b, c) {
    if (a === null || a === void 0)
      throw Error(C$1(267, a));
    var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner;
    if (b != null) {
      b.ref !== void 0 && (g = b.ref, k = J$1.current);
      b.key !== void 0 && (d = "" + b.key);
      if (a.type && a.type.defaultProps)
        var f = a.type.defaultProps;
      for (h in b)
        K$1.call(b, h) && !L$1.hasOwnProperty(h) && (e[h] = b[h] === void 0 && f !== void 0 ? f[h] : b[h]);
    }
    var h = arguments.length - 2;
    if (h === 1)
      e.children = c;
    else if (1 < h) {
      f = Array(h);
      for (var m = 0; m < h; m++)
        f[m] = arguments[m + 2];
      e.children = f;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: d,
      ref: g,
      props: e,
      _owner: k
    };
  };
  react_production_min.createContext = function(a, b) {
    b === void 0 && (b = null);
    a = { $$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
    a.Provider = { $$typeof: v$1, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M$1;
  react_production_min.createFactory = function(a) {
    var b = M$1.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: x, render: a };
  };
  react_production_min.isValidElement = O$1;
  react_production_min.lazy = function(a) {
    return { $$typeof: A, _ctor: a, _status: -1, _result: null };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: z, type: a, compare: b === void 0 ? null : b };
  };
  react_production_min.useCallback = function(a, b) {
    return Z$1().useCallback(a, b);
  };
  react_production_min.useContext = function(a, b) {
    return Z$1().useContext(a, b);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useEffect = function(a, b) {
    return Z$1().useEffect(a, b);
  };
  react_production_min.useImperativeHandle = function(a, b, c) {
    return Z$1().useImperativeHandle(a, b, c);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return Z$1().useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return Z$1().useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, c) {
    return Z$1().useReducer(a, b, c);
  };
  react_production_min.useRef = function(a) {
    return Z$1().useRef(a);
  };
  react_production_min.useState = function(a) {
    return Z$1().useState(a);
  };
  react_production_min.version = "16.14.0";
  {
    react.exports = react_production_min;
  }
  var React = react.exports;
  var propTypes = { exports: {} };
  var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  function emptyFunction() {
  }
  function emptyFunctionWithReset() {
  }
  emptyFunctionWithReset.resetWarningCache = emptyFunction;
  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret) {
        return;
      }
      var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      err.name = "Invariant Violation";
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    }
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  {
    propTypes.exports = factoryWithThrowingShims();
  }
  var PropTypes = propTypes.exports;
  var immutable = { exports: {} };
  (function(module2, exports3) {
    (function(global2, factory) {
      module2.exports = factory();
    })(commonjsGlobal, function() {
      var SLICE$0 = Array.prototype.slice;
      function createClass(ctor, superClass) {
        if (superClass) {
          ctor.prototype = Object.create(superClass.prototype);
        }
        ctor.prototype.constructor = ctor;
      }
      function Iterable(value) {
        return isIterable(value) ? value : Seq(value);
      }
      createClass(KeyedIterable, Iterable);
      function KeyedIterable(value) {
        return isKeyed(value) ? value : KeyedSeq(value);
      }
      createClass(IndexedIterable, Iterable);
      function IndexedIterable(value) {
        return isIndexed(value) ? value : IndexedSeq(value);
      }
      createClass(SetIterable, Iterable);
      function SetIterable(value) {
        return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
      }
      function isIterable(maybeIterable) {
        return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
      }
      function isKeyed(maybeKeyed) {
        return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
      }
      function isIndexed(maybeIndexed) {
        return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
      }
      function isAssociative(maybeAssociative) {
        return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
      }
      function isOrdered(maybeOrdered) {
        return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
      }
      Iterable.isIterable = isIterable;
      Iterable.isKeyed = isKeyed;
      Iterable.isIndexed = isIndexed;
      Iterable.isAssociative = isAssociative;
      Iterable.isOrdered = isOrdered;
      Iterable.Keyed = KeyedIterable;
      Iterable.Indexed = IndexedIterable;
      Iterable.Set = SetIterable;
      var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
      var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
      var IS_INDEXED_SENTINEL = "@@__IMMUTABLE_INDEXED__@@";
      var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
      var DELETE = "delete";
      var SHIFT = 5;
      var SIZE = 1 << SHIFT;
      var MASK = SIZE - 1;
      var NOT_SET = {};
      var CHANGE_LENGTH = { value: false };
      var DID_ALTER = { value: false };
      function MakeRef(ref) {
        ref.value = false;
        return ref;
      }
      function SetRef(ref) {
        ref && (ref.value = true);
      }
      function OwnerID() {
      }
      function arrCopy(arr, offset2) {
        offset2 = offset2 || 0;
        var len = Math.max(0, arr.length - offset2);
        var newArr = new Array(len);
        for (var ii2 = 0; ii2 < len; ii2++) {
          newArr[ii2] = arr[ii2 + offset2];
        }
        return newArr;
      }
      function ensureSize(iter) {
        if (iter.size === void 0) {
          iter.size = iter.__iterate(returnTrue);
        }
        return iter.size;
      }
      function wrapIndex(iter, index) {
        if (typeof index !== "number") {
          var uint32Index = index >>> 0;
          if ("" + uint32Index !== index || uint32Index === 4294967295) {
            return NaN;
          }
          index = uint32Index;
        }
        return index < 0 ? ensureSize(iter) + index : index;
      }
      function returnTrue() {
        return true;
      }
      function wholeSlice(begin, end, size) {
        return (begin === 0 || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
      }
      function resolveBegin(begin, size) {
        return resolveIndex(begin, size, 0);
      }
      function resolveEnd(end, size) {
        return resolveIndex(end, size, size);
      }
      function resolveIndex(index, size, defaultIndex) {
        return index === void 0 ? defaultIndex : index < 0 ? Math.max(0, size + index) : size === void 0 ? index : Math.min(size, index);
      }
      var ITERATE_KEYS = 0;
      var ITERATE_VALUES = 1;
      var ITERATE_ENTRIES = 2;
      var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
      function Iterator(next) {
        this.next = next;
      }
      Iterator.prototype.toString = function() {
        return "[Iterator]";
      };
      Iterator.KEYS = ITERATE_KEYS;
      Iterator.VALUES = ITERATE_VALUES;
      Iterator.ENTRIES = ITERATE_ENTRIES;
      Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
        return this.toString();
      };
      Iterator.prototype[ITERATOR_SYMBOL] = function() {
        return this;
      };
      function iteratorValue(type, k, v2, iteratorResult) {
        var value = type === 0 ? k : type === 1 ? v2 : [k, v2];
        iteratorResult ? iteratorResult.value = value : iteratorResult = {
          value,
          done: false
        };
        return iteratorResult;
      }
      function iteratorDone() {
        return { value: void 0, done: true };
      }
      function hasIterator(maybeIterable) {
        return !!getIteratorFn(maybeIterable);
      }
      function isIterator(maybeIterator) {
        return maybeIterator && typeof maybeIterator.next === "function";
      }
      function getIterator(iterable) {
        var iteratorFn = getIteratorFn(iterable);
        return iteratorFn && iteratorFn.call(iterable);
      }
      function getIteratorFn(iterable) {
        var iteratorFn = iterable && (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || iterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      function isArrayLike(value) {
        return value && typeof value.length === "number";
      }
      createClass(Seq, Iterable);
      function Seq(value) {
        return value === null || value === void 0 ? emptySequence() : isIterable(value) ? value.toSeq() : seqFromValue(value);
      }
      Seq.of = function() {
        return Seq(arguments);
      };
      Seq.prototype.toSeq = function() {
        return this;
      };
      Seq.prototype.toString = function() {
        return this.__toString("Seq {", "}");
      };
      Seq.prototype.cacheResult = function() {
        if (!this._cache && this.__iterateUncached) {
          this._cache = this.entrySeq().toArray();
          this.size = this._cache.length;
        }
        return this;
      };
      Seq.prototype.__iterate = function(fn, reverse) {
        return seqIterate(this, fn, reverse, true);
      };
      Seq.prototype.__iterator = function(type, reverse) {
        return seqIterator(this, type, reverse, true);
      };
      createClass(KeyedSeq, Seq);
      function KeyedSeq(value) {
        return value === null || value === void 0 ? emptySequence().toKeyedSeq() : isIterable(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : keyedSeqFromValue(value);
      }
      KeyedSeq.prototype.toKeyedSeq = function() {
        return this;
      };
      createClass(IndexedSeq, Seq);
      function IndexedSeq(value) {
        return value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
      }
      IndexedSeq.of = function() {
        return IndexedSeq(arguments);
      };
      IndexedSeq.prototype.toIndexedSeq = function() {
        return this;
      };
      IndexedSeq.prototype.toString = function() {
        return this.__toString("Seq [", "]");
      };
      IndexedSeq.prototype.__iterate = function(fn, reverse) {
        return seqIterate(this, fn, reverse, false);
      };
      IndexedSeq.prototype.__iterator = function(type, reverse) {
        return seqIterator(this, type, reverse, false);
      };
      createClass(SetSeq, Seq);
      function SetSeq(value) {
        return (value === null || value === void 0 ? emptySequence() : !isIterable(value) ? indexedSeqFromValue(value) : isKeyed(value) ? value.entrySeq() : value).toSetSeq();
      }
      SetSeq.of = function() {
        return SetSeq(arguments);
      };
      SetSeq.prototype.toSetSeq = function() {
        return this;
      };
      Seq.isSeq = isSeq;
      Seq.Keyed = KeyedSeq;
      Seq.Set = SetSeq;
      Seq.Indexed = IndexedSeq;
      var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
      Seq.prototype[IS_SEQ_SENTINEL] = true;
      createClass(ArraySeq, IndexedSeq);
      function ArraySeq(array) {
        this._array = array;
        this.size = array.length;
      }
      ArraySeq.prototype.get = function(index, notSetValue) {
        return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
      };
      ArraySeq.prototype.__iterate = function(fn, reverse) {
        var array = this._array;
        var maxIndex = array.length - 1;
        for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
          if (fn(array[reverse ? maxIndex - ii2 : ii2], ii2, this) === false) {
            return ii2 + 1;
          }
        }
        return ii2;
      };
      ArraySeq.prototype.__iterator = function(type, reverse) {
        var array = this._array;
        var maxIndex = array.length - 1;
        var ii2 = 0;
        return new Iterator(function() {
          return ii2 > maxIndex ? iteratorDone() : iteratorValue(type, ii2, array[reverse ? maxIndex - ii2++ : ii2++]);
        });
      };
      createClass(ObjectSeq, KeyedSeq);
      function ObjectSeq(object) {
        var keys2 = Object.keys(object);
        this._object = object;
        this._keys = keys2;
        this.size = keys2.length;
      }
      ObjectSeq.prototype.get = function(key, notSetValue) {
        if (notSetValue !== void 0 && !this.has(key)) {
          return notSetValue;
        }
        return this._object[key];
      };
      ObjectSeq.prototype.has = function(key) {
        return this._object.hasOwnProperty(key);
      };
      ObjectSeq.prototype.__iterate = function(fn, reverse) {
        var object = this._object;
        var keys2 = this._keys;
        var maxIndex = keys2.length - 1;
        for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
          var key = keys2[reverse ? maxIndex - ii2 : ii2];
          if (fn(object[key], key, this) === false) {
            return ii2 + 1;
          }
        }
        return ii2;
      };
      ObjectSeq.prototype.__iterator = function(type, reverse) {
        var object = this._object;
        var keys2 = this._keys;
        var maxIndex = keys2.length - 1;
        var ii2 = 0;
        return new Iterator(function() {
          var key = keys2[reverse ? maxIndex - ii2 : ii2];
          return ii2++ > maxIndex ? iteratorDone() : iteratorValue(type, key, object[key]);
        });
      };
      ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;
      createClass(IterableSeq, IndexedSeq);
      function IterableSeq(iterable) {
        this._iterable = iterable;
        this.size = iterable.length || iterable.size;
      }
      IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var iterable = this._iterable;
        var iterator = getIterator(iterable);
        var iterations = 0;
        if (isIterator(iterator)) {
          var step;
          while (!(step = iterator.next()).done) {
            if (fn(step.value, iterations++, this) === false) {
              break;
            }
          }
        }
        return iterations;
      };
      IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterable = this._iterable;
        var iterator = getIterator(iterable);
        if (!isIterator(iterator)) {
          return new Iterator(iteratorDone);
        }
        var iterations = 0;
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, iterations++, step.value);
        });
      };
      createClass(IteratorSeq, IndexedSeq);
      function IteratorSeq(iterator) {
        this._iterator = iterator;
        this._iteratorCache = [];
      }
      IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
        if (reverse) {
          return this.cacheResult().__iterate(fn, reverse);
        }
        var iterator = this._iterator;
        var cache = this._iteratorCache;
        var iterations = 0;
        while (iterations < cache.length) {
          if (fn(cache[iterations], iterations++, this) === false) {
            return iterations;
          }
        }
        var step;
        while (!(step = iterator.next()).done) {
          var val = step.value;
          cache[iterations] = val;
          if (fn(val, iterations++, this) === false) {
            break;
          }
        }
        return iterations;
      };
      IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
        if (reverse) {
          return this.cacheResult().__iterator(type, reverse);
        }
        var iterator = this._iterator;
        var cache = this._iteratorCache;
        var iterations = 0;
        return new Iterator(function() {
          if (iterations >= cache.length) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            cache[iterations] = step.value;
          }
          return iteratorValue(type, iterations, cache[iterations++]);
        });
      };
      function isSeq(maybeSeq) {
        return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
      }
      var EMPTY_SEQ;
      function emptySequence() {
        return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
      }
      function keyedSeqFromValue(value) {
        var seq = Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() : isIterator(value) ? new IteratorSeq(value).fromEntrySeq() : hasIterator(value) ? new IterableSeq(value).fromEntrySeq() : typeof value === "object" ? new ObjectSeq(value) : void 0;
        if (!seq) {
          throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + value);
        }
        return seq;
      }
      function indexedSeqFromValue(value) {
        var seq = maybeIndexedSeqFromValue(value);
        if (!seq) {
          throw new TypeError("Expected Array or iterable object of values: " + value);
        }
        return seq;
      }
      function seqFromValue(value) {
        var seq = maybeIndexedSeqFromValue(value) || typeof value === "object" && new ObjectSeq(value);
        if (!seq) {
          throw new TypeError("Expected Array or iterable object of values, or keyed object: " + value);
        }
        return seq;
      }
      function maybeIndexedSeqFromValue(value) {
        return isArrayLike(value) ? new ArraySeq(value) : isIterator(value) ? new IteratorSeq(value) : hasIterator(value) ? new IterableSeq(value) : void 0;
      }
      function seqIterate(seq, fn, reverse, useKeys) {
        var cache = seq._cache;
        if (cache) {
          var maxIndex = cache.length - 1;
          for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
            var entry = cache[reverse ? maxIndex - ii2 : ii2];
            if (fn(entry[1], useKeys ? entry[0] : ii2, seq) === false) {
              return ii2 + 1;
            }
          }
          return ii2;
        }
        return seq.__iterateUncached(fn, reverse);
      }
      function seqIterator(seq, type, reverse, useKeys) {
        var cache = seq._cache;
        if (cache) {
          var maxIndex = cache.length - 1;
          var ii2 = 0;
          return new Iterator(function() {
            var entry = cache[reverse ? maxIndex - ii2 : ii2];
            return ii2++ > maxIndex ? iteratorDone() : iteratorValue(type, useKeys ? entry[0] : ii2 - 1, entry[1]);
          });
        }
        return seq.__iteratorUncached(type, reverse);
      }
      function fromJS(json, converter) {
        return converter ? fromJSWith(converter, json, "", { "": json }) : fromJSDefault(json);
      }
      function fromJSWith(converter, json, key, parentJSON) {
        if (Array.isArray(json)) {
          return converter.call(parentJSON, key, IndexedSeq(json).map(function(v2, k) {
            return fromJSWith(converter, v2, k, json);
          }));
        }
        if (isPlainObj(json)) {
          return converter.call(parentJSON, key, KeyedSeq(json).map(function(v2, k) {
            return fromJSWith(converter, v2, k, json);
          }));
        }
        return json;
      }
      function fromJSDefault(json) {
        if (Array.isArray(json)) {
          return IndexedSeq(json).map(fromJSDefault).toList();
        }
        if (isPlainObj(json)) {
          return KeyedSeq(json).map(fromJSDefault).toMap();
        }
        return json;
      }
      function isPlainObj(value) {
        return value && (value.constructor === Object || value.constructor === void 0);
      }
      function is(valueA, valueB) {
        if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
          return true;
        }
        if (!valueA || !valueB) {
          return false;
        }
        if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
          valueA = valueA.valueOf();
          valueB = valueB.valueOf();
          if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
            return true;
          }
          if (!valueA || !valueB) {
            return false;
          }
        }
        if (typeof valueA.equals === "function" && typeof valueB.equals === "function" && valueA.equals(valueB)) {
          return true;
        }
        return false;
      }
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        if (!isIterable(b) || a.size !== void 0 && b.size !== void 0 && a.size !== b.size || a.__hash !== void 0 && b.__hash !== void 0 && a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || isOrdered(a) !== isOrdered(b)) {
          return false;
        }
        if (a.size === 0 && b.size === 0) {
          return true;
        }
        var notAssociative = !isAssociative(a);
        if (isOrdered(a)) {
          var entries = a.entries();
          return b.every(function(v2, k) {
            var entry = entries.next().value;
            return entry && is(entry[1], v2) && (notAssociative || is(entry[0], k));
          }) && entries.next().done;
        }
        var flipped = false;
        if (a.size === void 0) {
          if (b.size === void 0) {
            if (typeof a.cacheResult === "function") {
              a.cacheResult();
            }
          } else {
            flipped = true;
            var _ = a;
            a = b;
            b = _;
          }
        }
        var allEqual = true;
        var bSize = b.__iterate(function(v2, k) {
          if (notAssociative ? !a.has(v2) : flipped ? !is(v2, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v2)) {
            allEqual = false;
            return false;
          }
        });
        return allEqual && a.size === bSize;
      }
      createClass(Repeat, IndexedSeq);
      function Repeat(value, times) {
        if (!(this instanceof Repeat)) {
          return new Repeat(value, times);
        }
        this._value = value;
        this.size = times === void 0 ? Infinity : Math.max(0, times);
        if (this.size === 0) {
          if (EMPTY_REPEAT) {
            return EMPTY_REPEAT;
          }
          EMPTY_REPEAT = this;
        }
      }
      Repeat.prototype.toString = function() {
        if (this.size === 0) {
          return "Repeat []";
        }
        return "Repeat [ " + this._value + " " + this.size + " times ]";
      };
      Repeat.prototype.get = function(index, notSetValue) {
        return this.has(index) ? this._value : notSetValue;
      };
      Repeat.prototype.includes = function(searchValue) {
        return is(this._value, searchValue);
      };
      Repeat.prototype.slice = function(begin, end) {
        var size = this.size;
        return wholeSlice(begin, end, size) ? this : new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
      };
      Repeat.prototype.reverse = function() {
        return this;
      };
      Repeat.prototype.indexOf = function(searchValue) {
        if (is(this._value, searchValue)) {
          return 0;
        }
        return -1;
      };
      Repeat.prototype.lastIndexOf = function(searchValue) {
        if (is(this._value, searchValue)) {
          return this.size;
        }
        return -1;
      };
      Repeat.prototype.__iterate = function(fn, reverse) {
        for (var ii2 = 0; ii2 < this.size; ii2++) {
          if (fn(this._value, ii2, this) === false) {
            return ii2 + 1;
          }
        }
        return ii2;
      };
      Repeat.prototype.__iterator = function(type, reverse) {
        var this$0 = this;
        var ii2 = 0;
        return new Iterator(function() {
          return ii2 < this$0.size ? iteratorValue(type, ii2++, this$0._value) : iteratorDone();
        });
      };
      Repeat.prototype.equals = function(other) {
        return other instanceof Repeat ? is(this._value, other._value) : deepEqual(other);
      };
      var EMPTY_REPEAT;
      function invariant2(condition, error) {
        if (!condition)
          throw new Error(error);
      }
      createClass(Range, IndexedSeq);
      function Range(start, end, step) {
        if (!(this instanceof Range)) {
          return new Range(start, end, step);
        }
        invariant2(step !== 0, "Cannot step a Range by 0");
        start = start || 0;
        if (end === void 0) {
          end = Infinity;
        }
        step = step === void 0 ? 1 : Math.abs(step);
        if (end < start) {
          step = -step;
        }
        this._start = start;
        this._end = end;
        this._step = step;
        this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
        if (this.size === 0) {
          if (EMPTY_RANGE) {
            return EMPTY_RANGE;
          }
          EMPTY_RANGE = this;
        }
      }
      Range.prototype.toString = function() {
        if (this.size === 0) {
          return "Range []";
        }
        return "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
      };
      Range.prototype.get = function(index, notSetValue) {
        return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
      };
      Range.prototype.includes = function(searchValue) {
        var possibleIndex = (searchValue - this._start) / this._step;
        return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
      };
      Range.prototype.slice = function(begin, end) {
        if (wholeSlice(begin, end, this.size)) {
          return this;
        }
        begin = resolveBegin(begin, this.size);
        end = resolveEnd(end, this.size);
        if (end <= begin) {
          return new Range(0, 0);
        }
        return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
      };
      Range.prototype.indexOf = function(searchValue) {
        var offsetValue = searchValue - this._start;
        if (offsetValue % this._step === 0) {
          var index = offsetValue / this._step;
          if (index >= 0 && index < this.size) {
            return index;
          }
        }
        return -1;
      };
      Range.prototype.lastIndexOf = function(searchValue) {
        return this.indexOf(searchValue);
      };
      Range.prototype.__iterate = function(fn, reverse) {
        var maxIndex = this.size - 1;
        var step = this._step;
        var value = reverse ? this._start + maxIndex * step : this._start;
        for (var ii2 = 0; ii2 <= maxIndex; ii2++) {
          if (fn(value, ii2, this) === false) {
            return ii2 + 1;
          }
          value += reverse ? -step : step;
        }
        return ii2;
      };
      Range.prototype.__iterator = function(type, reverse) {
        var maxIndex = this.size - 1;
        var step = this._step;
        var value = reverse ? this._start + maxIndex * step : this._start;
        var ii2 = 0;
        return new Iterator(function() {
          var v2 = value;
          value += reverse ? -step : step;
          return ii2 > maxIndex ? iteratorDone() : iteratorValue(type, ii2++, v2);
        });
      };
      Range.prototype.equals = function(other) {
        return other instanceof Range ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
      };
      var EMPTY_RANGE;
      createClass(Collection, Iterable);
      function Collection() {
        throw TypeError("Abstract");
      }
      createClass(KeyedCollection, Collection);
      function KeyedCollection() {
      }
      createClass(IndexedCollection, Collection);
      function IndexedCollection() {
      }
      createClass(SetCollection, Collection);
      function SetCollection() {
      }
      Collection.Keyed = KeyedCollection;
      Collection.Indexed = IndexedCollection;
      Collection.Set = SetCollection;
      var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
        a = a | 0;
        b = b | 0;
        var c = a & 65535;
        var d = b & 65535;
        return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
      };
      function smi(i32) {
        return i32 >>> 1 & 1073741824 | i32 & 3221225471;
      }
      function hash(o) {
        if (o === false || o === null || o === void 0) {
          return 0;
        }
        if (typeof o.valueOf === "function") {
          o = o.valueOf();
          if (o === false || o === null || o === void 0) {
            return 0;
          }
        }
        if (o === true) {
          return 1;
        }
        var type = typeof o;
        if (type === "number") {
          if (o !== o || o === Infinity) {
            return 0;
          }
          var h = o | 0;
          if (h !== o) {
            h ^= o * 4294967295;
          }
          while (o > 4294967295) {
            o /= 4294967295;
            h ^= o;
          }
          return smi(h);
        }
        if (type === "string") {
          return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
        }
        if (typeof o.hashCode === "function") {
          return o.hashCode();
        }
        if (type === "object") {
          return hashJSObj(o);
        }
        if (typeof o.toString === "function") {
          return hashString(o.toString());
        }
        throw new Error("Value type " + type + " cannot be hashed.");
      }
      function cachedHashString(string) {
        var hash2 = stringHashCache[string];
        if (hash2 === void 0) {
          hash2 = hashString(string);
          if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
            STRING_HASH_CACHE_SIZE = 0;
            stringHashCache = {};
          }
          STRING_HASH_CACHE_SIZE++;
          stringHashCache[string] = hash2;
        }
        return hash2;
      }
      function hashString(string) {
        var hash2 = 0;
        for (var ii2 = 0; ii2 < string.length; ii2++) {
          hash2 = 31 * hash2 + string.charCodeAt(ii2) | 0;
        }
        return smi(hash2);
      }
      function hashJSObj(obj) {
        var hash2;
        if (usingWeakMap) {
          hash2 = weakMap.get(obj);
          if (hash2 !== void 0) {
            return hash2;
          }
        }
        hash2 = obj[UID_HASH_KEY];
        if (hash2 !== void 0) {
          return hash2;
        }
        if (!canDefineProperty) {
          hash2 = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
          if (hash2 !== void 0) {
            return hash2;
          }
          hash2 = getIENodeHash(obj);
          if (hash2 !== void 0) {
            return hash2;
          }
        }
        hash2 = ++objHashUID;
        if (objHashUID & 1073741824) {
          objHashUID = 0;
        }
        if (usingWeakMap) {
          weakMap.set(obj, hash2);
        } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
          throw new Error("Non-extensible objects are not allowed as keys.");
        } else if (canDefineProperty) {
          Object.defineProperty(obj, UID_HASH_KEY, {
            "enumerable": false,
            "configurable": false,
            "writable": false,
            "value": hash2
          });
        } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
          obj.propertyIsEnumerable = function() {
            return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
          };
          obj.propertyIsEnumerable[UID_HASH_KEY] = hash2;
        } else if (obj.nodeType !== void 0) {
          obj[UID_HASH_KEY] = hash2;
        } else {
          throw new Error("Unable to set a non-enumerable property on object.");
        }
        return hash2;
      }
      var isExtensible = Object.isExtensible;
      var canDefineProperty = function() {
        try {
          Object.defineProperty({}, "@", {});
          return true;
        } catch (e) {
          return false;
        }
      }();
      function getIENodeHash(node) {
        if (node && node.nodeType > 0) {
          switch (node.nodeType) {
            case 1:
              return node.uniqueID;
            case 9:
              return node.documentElement && node.documentElement.uniqueID;
          }
        }
      }
      var usingWeakMap = typeof WeakMap === "function";
      var weakMap;
      if (usingWeakMap) {
        weakMap = new WeakMap();
      }
      var objHashUID = 0;
      var UID_HASH_KEY = "__immutablehash__";
      if (typeof Symbol === "function") {
        UID_HASH_KEY = Symbol(UID_HASH_KEY);
      }
      var STRING_HASH_CACHE_MIN_STRLEN = 16;
      var STRING_HASH_CACHE_MAX_SIZE = 255;
      var STRING_HASH_CACHE_SIZE = 0;
      var stringHashCache = {};
      function assertNotInfinite(size) {
        invariant2(size !== Infinity, "Cannot perform this action with an infinite size.");
      }
      createClass(Map2, KeyedCollection);
      function Map2(value) {
        return value === null || value === void 0 ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map2) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v2, k) {
            return map2.set(k, v2);
          });
        });
      }
      Map2.of = function() {
        var keyValues = SLICE$0.call(arguments, 0);
        return emptyMap().withMutations(function(map2) {
          for (var i2 = 0; i2 < keyValues.length; i2 += 2) {
            if (i2 + 1 >= keyValues.length) {
              throw new Error("Missing value for key: " + keyValues[i2]);
            }
            map2.set(keyValues[i2], keyValues[i2 + 1]);
          }
        });
      };
      Map2.prototype.toString = function() {
        return this.__toString("Map {", "}");
      };
      Map2.prototype.get = function(k, notSetValue) {
        return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
      };
      Map2.prototype.set = function(k, v2) {
        return updateMap(this, k, v2);
      };
      Map2.prototype.setIn = function(keyPath, v2) {
        return this.updateIn(keyPath, NOT_SET, function() {
          return v2;
        });
      };
      Map2.prototype.remove = function(k) {
        return updateMap(this, k, NOT_SET);
      };
      Map2.prototype.deleteIn = function(keyPath) {
        return this.updateIn(keyPath, function() {
          return NOT_SET;
        });
      };
      Map2.prototype.update = function(k, notSetValue, updater) {
        return arguments.length === 1 ? k(this) : this.updateIn([k], notSetValue, updater);
      };
      Map2.prototype.updateIn = function(keyPath, notSetValue, updater) {
        if (!updater) {
          updater = notSetValue;
          notSetValue = void 0;
        }
        var updatedValue = updateInDeepMap(this, forceIterator(keyPath), notSetValue, updater);
        return updatedValue === NOT_SET ? void 0 : updatedValue;
      };
      Map2.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = 0;
          this._root = null;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return emptyMap();
      };
      Map2.prototype.merge = function() {
        return mergeIntoMapWith(this, void 0, arguments);
      };
      Map2.prototype.mergeWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoMapWith(this, merger, iters);
      };
      Map2.prototype.mergeIn = function(keyPath) {
        var iters = SLICE$0.call(arguments, 1);
        return this.updateIn(keyPath, emptyMap(), function(m) {
          return typeof m.merge === "function" ? m.merge.apply(m, iters) : iters[iters.length - 1];
        });
      };
      Map2.prototype.mergeDeep = function() {
        return mergeIntoMapWith(this, deepMerger, arguments);
      };
      Map2.prototype.mergeDeepWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoMapWith(this, deepMergerWith(merger), iters);
      };
      Map2.prototype.mergeDeepIn = function(keyPath) {
        var iters = SLICE$0.call(arguments, 1);
        return this.updateIn(keyPath, emptyMap(), function(m) {
          return typeof m.mergeDeep === "function" ? m.mergeDeep.apply(m, iters) : iters[iters.length - 1];
        });
      };
      Map2.prototype.sort = function(comparator) {
        return OrderedMap(sortFactory(this, comparator));
      };
      Map2.prototype.sortBy = function(mapper, comparator) {
        return OrderedMap(sortFactory(this, comparator, mapper));
      };
      Map2.prototype.withMutations = function(fn) {
        var mutable = this.asMutable();
        fn(mutable);
        return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
      };
      Map2.prototype.asMutable = function() {
        return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
      };
      Map2.prototype.asImmutable = function() {
        return this.__ensureOwner();
      };
      Map2.prototype.wasAltered = function() {
        return this.__altered;
      };
      Map2.prototype.__iterator = function(type, reverse) {
        return new MapIterator(this, type, reverse);
      };
      Map2.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        this._root && this._root.iterate(function(entry) {
          iterations++;
          return fn(entry[1], entry[0], this$0);
        }, reverse);
        return iterations;
      };
      Map2.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        if (!ownerID) {
          this.__ownerID = ownerID;
          this.__altered = false;
          return this;
        }
        return makeMap(this.size, this._root, ownerID, this.__hash);
      };
      function isMap(maybeMap) {
        return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
      }
      Map2.isMap = isMap;
      var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
      var MapPrototype = Map2.prototype;
      MapPrototype[IS_MAP_SENTINEL] = true;
      MapPrototype[DELETE] = MapPrototype.remove;
      MapPrototype.removeIn = MapPrototype.deleteIn;
      function ArrayMapNode(ownerID, entries) {
        this.ownerID = ownerID;
        this.entries = entries;
      }
      ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        var entries = this.entries;
        for (var ii2 = 0, len = entries.length; ii2 < len; ii2++) {
          if (is(key, entries[ii2][0])) {
            return entries[ii2][1];
          }
        }
        return notSetValue;
      };
      ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        var removed = value === NOT_SET;
        var entries = this.entries;
        var idx = 0;
        for (var len = entries.length; idx < len; idx++) {
          if (is(key, entries[idx][0])) {
            break;
          }
        }
        var exists = idx < len;
        if (exists ? entries[idx][1] === value : removed) {
          return this;
        }
        SetRef(didAlter);
        (removed || !exists) && SetRef(didChangeSize);
        if (removed && entries.length === 1) {
          return;
        }
        if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
          return createNodes(ownerID, entries, key, value);
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newEntries = isEditable ? entries : arrCopy(entries);
        if (exists) {
          if (removed) {
            idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
          } else {
            newEntries[idx] = [key, value];
          }
        } else {
          newEntries.push([key, value]);
        }
        if (isEditable) {
          this.entries = newEntries;
          return this;
        }
        return new ArrayMapNode(ownerID, newEntries);
      };
      function BitmapIndexedNode(ownerID, bitmap, nodes) {
        this.ownerID = ownerID;
        this.bitmap = bitmap;
        this.nodes = nodes;
      }
      BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
        var bitmap = this.bitmap;
        return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(shift + SHIFT, keyHash, key, notSetValue);
      };
      BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var bit = 1 << keyHashFrag;
        var bitmap = this.bitmap;
        var exists = (bitmap & bit) !== 0;
        if (!exists && value === NOT_SET) {
          return this;
        }
        var idx = popCount(bitmap & bit - 1);
        var nodes = this.nodes;
        var node = exists ? nodes[idx] : void 0;
        var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
        if (newNode === node) {
          return this;
        }
        if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
          return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
        }
        if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
          return nodes[idx ^ 1];
        }
        if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
          return newNode;
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
        var newNodes = exists ? newNode ? setIn(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
        if (isEditable) {
          this.bitmap = newBitmap;
          this.nodes = newNodes;
          return this;
        }
        return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
      };
      function HashArrayMapNode(ownerID, count, nodes) {
        this.ownerID = ownerID;
        this.count = count;
        this.nodes = nodes;
      }
      HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var node = this.nodes[idx];
        return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
      };
      HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var removed = value === NOT_SET;
        var nodes = this.nodes;
        var node = nodes[idx];
        if (removed && !node) {
          return this;
        }
        var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
        if (newNode === node) {
          return this;
        }
        var newCount = this.count;
        if (!node) {
          newCount++;
        } else if (!newNode) {
          newCount--;
          if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
            return packNodes(ownerID, nodes, newCount, idx);
          }
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newNodes = setIn(nodes, idx, newNode, isEditable);
        if (isEditable) {
          this.count = newCount;
          this.nodes = newNodes;
          return this;
        }
        return new HashArrayMapNode(ownerID, newCount, newNodes);
      };
      function HashCollisionNode(ownerID, keyHash, entries) {
        this.ownerID = ownerID;
        this.keyHash = keyHash;
        this.entries = entries;
      }
      HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        var entries = this.entries;
        for (var ii2 = 0, len = entries.length; ii2 < len; ii2++) {
          if (is(key, entries[ii2][0])) {
            return entries[ii2][1];
          }
        }
        return notSetValue;
      };
      HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (keyHash === void 0) {
          keyHash = hash(key);
        }
        var removed = value === NOT_SET;
        if (keyHash !== this.keyHash) {
          if (removed) {
            return this;
          }
          SetRef(didAlter);
          SetRef(didChangeSize);
          return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
        }
        var entries = this.entries;
        var idx = 0;
        for (var len = entries.length; idx < len; idx++) {
          if (is(key, entries[idx][0])) {
            break;
          }
        }
        var exists = idx < len;
        if (exists ? entries[idx][1] === value : removed) {
          return this;
        }
        SetRef(didAlter);
        (removed || !exists) && SetRef(didChangeSize);
        if (removed && len === 2) {
          return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
        }
        var isEditable = ownerID && ownerID === this.ownerID;
        var newEntries = isEditable ? entries : arrCopy(entries);
        if (exists) {
          if (removed) {
            idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
          } else {
            newEntries[idx] = [key, value];
          }
        } else {
          newEntries.push([key, value]);
        }
        if (isEditable) {
          this.entries = newEntries;
          return this;
        }
        return new HashCollisionNode(ownerID, this.keyHash, newEntries);
      };
      function ValueNode(ownerID, keyHash, entry) {
        this.ownerID = ownerID;
        this.keyHash = keyHash;
        this.entry = entry;
      }
      ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
        return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
      };
      ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        var removed = value === NOT_SET;
        var keyMatch = is(key, this.entry[0]);
        if (keyMatch ? value === this.entry[1] : removed) {
          return this;
        }
        SetRef(didAlter);
        if (removed) {
          SetRef(didChangeSize);
          return;
        }
        if (keyMatch) {
          if (ownerID && ownerID === this.ownerID) {
            this.entry[1] = value;
            return this;
          }
          return new ValueNode(ownerID, this.keyHash, [key, value]);
        }
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
      };
      ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse) {
        var entries = this.entries;
        for (var ii2 = 0, maxIndex = entries.length - 1; ii2 <= maxIndex; ii2++) {
          if (fn(entries[reverse ? maxIndex - ii2 : ii2]) === false) {
            return false;
          }
        }
      };
      BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse) {
        var nodes = this.nodes;
        for (var ii2 = 0, maxIndex = nodes.length - 1; ii2 <= maxIndex; ii2++) {
          var node = nodes[reverse ? maxIndex - ii2 : ii2];
          if (node && node.iterate(fn, reverse) === false) {
            return false;
          }
        }
      };
      ValueNode.prototype.iterate = function(fn, reverse) {
        return fn(this.entry);
      };
      createClass(MapIterator, Iterator);
      function MapIterator(map2, type, reverse) {
        this._type = type;
        this._reverse = reverse;
        this._stack = map2._root && mapIteratorFrame(map2._root);
      }
      MapIterator.prototype.next = function() {
        var type = this._type;
        var stack = this._stack;
        while (stack) {
          var node = stack.node;
          var index = stack.index++;
          var maxIndex;
          if (node.entry) {
            if (index === 0) {
              return mapIteratorValue(type, node.entry);
            }
          } else if (node.entries) {
            maxIndex = node.entries.length - 1;
            if (index <= maxIndex) {
              return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
            }
          } else {
            maxIndex = node.nodes.length - 1;
            if (index <= maxIndex) {
              var subNode = node.nodes[this._reverse ? maxIndex - index : index];
              if (subNode) {
                if (subNode.entry) {
                  return mapIteratorValue(type, subNode.entry);
                }
                stack = this._stack = mapIteratorFrame(subNode, stack);
              }
              continue;
            }
          }
          stack = this._stack = this._stack.__prev;
        }
        return iteratorDone();
      };
      function mapIteratorValue(type, entry) {
        return iteratorValue(type, entry[0], entry[1]);
      }
      function mapIteratorFrame(node, prev) {
        return {
          node,
          index: 0,
          __prev: prev
        };
      }
      function makeMap(size, root2, ownerID, hash2) {
        var map2 = Object.create(MapPrototype);
        map2.size = size;
        map2._root = root2;
        map2.__ownerID = ownerID;
        map2.__hash = hash2;
        map2.__altered = false;
        return map2;
      }
      var EMPTY_MAP;
      function emptyMap() {
        return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
      }
      function updateMap(map2, k, v2) {
        var newRoot;
        var newSize;
        if (!map2._root) {
          if (v2 === NOT_SET) {
            return map2;
          }
          newSize = 1;
          newRoot = new ArrayMapNode(map2.__ownerID, [[k, v2]]);
        } else {
          var didChangeSize = MakeRef(CHANGE_LENGTH);
          var didAlter = MakeRef(DID_ALTER);
          newRoot = updateNode(map2._root, map2.__ownerID, 0, void 0, k, v2, didChangeSize, didAlter);
          if (!didAlter.value) {
            return map2;
          }
          newSize = map2.size + (didChangeSize.value ? v2 === NOT_SET ? -1 : 1 : 0);
        }
        if (map2.__ownerID) {
          map2.size = newSize;
          map2._root = newRoot;
          map2.__hash = void 0;
          map2.__altered = true;
          return map2;
        }
        return newRoot ? makeMap(newSize, newRoot) : emptyMap();
      }
      function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
        if (!node) {
          if (value === NOT_SET) {
            return node;
          }
          SetRef(didAlter);
          SetRef(didChangeSize);
          return new ValueNode(ownerID, keyHash, [key, value]);
        }
        return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
      }
      function isLeafNode(node) {
        return node.constructor === ValueNode || node.constructor === HashCollisionNode;
      }
      function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
        if (node.keyHash === keyHash) {
          return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
        }
        var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
        var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
        var newNode;
        var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
        return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
      }
      function createNodes(ownerID, entries, key, value) {
        if (!ownerID) {
          ownerID = new OwnerID();
        }
        var node = new ValueNode(ownerID, hash(key), [key, value]);
        for (var ii2 = 0; ii2 < entries.length; ii2++) {
          var entry = entries[ii2];
          node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
        }
        return node;
      }
      function packNodes(ownerID, nodes, count, excluding) {
        var bitmap = 0;
        var packedII = 0;
        var packedNodes = new Array(count);
        for (var ii2 = 0, bit = 1, len = nodes.length; ii2 < len; ii2++, bit <<= 1) {
          var node = nodes[ii2];
          if (node !== void 0 && ii2 !== excluding) {
            bitmap |= bit;
            packedNodes[packedII++] = node;
          }
        }
        return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
      }
      function expandNodes(ownerID, nodes, bitmap, including, node) {
        var count = 0;
        var expandedNodes = new Array(SIZE);
        for (var ii2 = 0; bitmap !== 0; ii2++, bitmap >>>= 1) {
          expandedNodes[ii2] = bitmap & 1 ? nodes[count++] : void 0;
        }
        expandedNodes[including] = node;
        return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
      }
      function mergeIntoMapWith(map2, merger, iterables) {
        var iters = [];
        for (var ii2 = 0; ii2 < iterables.length; ii2++) {
          var value = iterables[ii2];
          var iter = KeyedIterable(value);
          if (!isIterable(value)) {
            iter = iter.map(function(v2) {
              return fromJS(v2);
            });
          }
          iters.push(iter);
        }
        return mergeIntoCollectionWith(map2, merger, iters);
      }
      function deepMerger(existing, value, key) {
        return existing && existing.mergeDeep && isIterable(value) ? existing.mergeDeep(value) : is(existing, value) ? existing : value;
      }
      function deepMergerWith(merger) {
        return function(existing, value, key) {
          if (existing && existing.mergeDeepWith && isIterable(value)) {
            return existing.mergeDeepWith(merger, value);
          }
          var nextValue = merger(existing, value, key);
          return is(existing, nextValue) ? existing : nextValue;
        };
      }
      function mergeIntoCollectionWith(collection, merger, iters) {
        iters = iters.filter(function(x2) {
          return x2.size !== 0;
        });
        if (iters.length === 0) {
          return collection;
        }
        if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
          return collection.constructor(iters[0]);
        }
        return collection.withMutations(function(collection2) {
          var mergeIntoMap = merger ? function(value, key) {
            collection2.update(key, NOT_SET, function(existing) {
              return existing === NOT_SET ? value : merger(existing, value, key);
            });
          } : function(value, key) {
            collection2.set(key, value);
          };
          for (var ii2 = 0; ii2 < iters.length; ii2++) {
            iters[ii2].forEach(mergeIntoMap);
          }
        });
      }
      function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
        var isNotSet = existing === NOT_SET;
        var step = keyPathIter.next();
        if (step.done) {
          var existingValue = isNotSet ? notSetValue : existing;
          var newValue = updater(existingValue);
          return newValue === existingValue ? existing : newValue;
        }
        invariant2(isNotSet || existing && existing.set, "invalid keyPath");
        var key = step.value;
        var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
        var nextUpdated = updateInDeepMap(nextExisting, keyPathIter, notSetValue, updater);
        return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? existing.remove(key) : (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
      }
      function popCount(x2) {
        x2 = x2 - (x2 >> 1 & 1431655765);
        x2 = (x2 & 858993459) + (x2 >> 2 & 858993459);
        x2 = x2 + (x2 >> 4) & 252645135;
        x2 = x2 + (x2 >> 8);
        x2 = x2 + (x2 >> 16);
        return x2 & 127;
      }
      function setIn(array, idx, val, canEdit) {
        var newArray = canEdit ? array : arrCopy(array);
        newArray[idx] = val;
        return newArray;
      }
      function spliceIn(array, idx, val, canEdit) {
        var newLen = array.length + 1;
        if (canEdit && idx + 1 === newLen) {
          array[idx] = val;
          return array;
        }
        var newArray = new Array(newLen);
        var after = 0;
        for (var ii2 = 0; ii2 < newLen; ii2++) {
          if (ii2 === idx) {
            newArray[ii2] = val;
            after = -1;
          } else {
            newArray[ii2] = array[ii2 + after];
          }
        }
        return newArray;
      }
      function spliceOut(array, idx, canEdit) {
        var newLen = array.length - 1;
        if (canEdit && idx === newLen) {
          array.pop();
          return array;
        }
        var newArray = new Array(newLen);
        var after = 0;
        for (var ii2 = 0; ii2 < newLen; ii2++) {
          if (ii2 === idx) {
            after = 1;
          }
          newArray[ii2] = array[ii2 + after];
        }
        return newArray;
      }
      var MAX_ARRAY_MAP_SIZE = SIZE / 4;
      var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
      var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
      createClass(List, IndexedCollection);
      function List(value) {
        var empty = emptyList();
        if (value === null || value === void 0) {
          return empty;
        }
        if (isList(value)) {
          return value;
        }
        var iter = IndexedIterable(value);
        var size = iter.size;
        if (size === 0) {
          return empty;
        }
        assertNotInfinite(size);
        if (size > 0 && size < SIZE) {
          return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
        }
        return empty.withMutations(function(list) {
          list.setSize(size);
          iter.forEach(function(v2, i2) {
            return list.set(i2, v2);
          });
        });
      }
      List.of = function() {
        return this(arguments);
      };
      List.prototype.toString = function() {
        return this.__toString("List [", "]");
      };
      List.prototype.get = function(index, notSetValue) {
        index = wrapIndex(this, index);
        if (index >= 0 && index < this.size) {
          index += this._origin;
          var node = listNodeFor(this, index);
          return node && node.array[index & MASK];
        }
        return notSetValue;
      };
      List.prototype.set = function(index, value) {
        return updateList(this, index, value);
      };
      List.prototype.remove = function(index) {
        return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
      };
      List.prototype.insert = function(index, value) {
        return this.splice(index, 0, value);
      };
      List.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = this._origin = this._capacity = 0;
          this._level = SHIFT;
          this._root = this._tail = null;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return emptyList();
      };
      List.prototype.push = function() {
        var values = arguments;
        var oldSize = this.size;
        return this.withMutations(function(list) {
          setListBounds(list, 0, oldSize + values.length);
          for (var ii2 = 0; ii2 < values.length; ii2++) {
            list.set(oldSize + ii2, values[ii2]);
          }
        });
      };
      List.prototype.pop = function() {
        return setListBounds(this, 0, -1);
      };
      List.prototype.unshift = function() {
        var values = arguments;
        return this.withMutations(function(list) {
          setListBounds(list, -values.length);
          for (var ii2 = 0; ii2 < values.length; ii2++) {
            list.set(ii2, values[ii2]);
          }
        });
      };
      List.prototype.shift = function() {
        return setListBounds(this, 1);
      };
      List.prototype.merge = function() {
        return mergeIntoListWith(this, void 0, arguments);
      };
      List.prototype.mergeWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoListWith(this, merger, iters);
      };
      List.prototype.mergeDeep = function() {
        return mergeIntoListWith(this, deepMerger, arguments);
      };
      List.prototype.mergeDeepWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return mergeIntoListWith(this, deepMergerWith(merger), iters);
      };
      List.prototype.setSize = function(size) {
        return setListBounds(this, 0, size);
      };
      List.prototype.slice = function(begin, end) {
        var size = this.size;
        if (wholeSlice(begin, end, size)) {
          return this;
        }
        return setListBounds(this, resolveBegin(begin, size), resolveEnd(end, size));
      };
      List.prototype.__iterator = function(type, reverse) {
        var index = 0;
        var values = iterateList(this, reverse);
        return new Iterator(function() {
          var value = values();
          return value === DONE ? iteratorDone() : iteratorValue(type, index++, value);
        });
      };
      List.prototype.__iterate = function(fn, reverse) {
        var index = 0;
        var values = iterateList(this, reverse);
        var value;
        while ((value = values()) !== DONE) {
          if (fn(value, index++, this) === false) {
            break;
          }
        }
        return index;
      };
      List.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        if (!ownerID) {
          this.__ownerID = ownerID;
          return this;
        }
        return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
      };
      function isList(maybeList) {
        return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
      }
      List.isList = isList;
      var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
      var ListPrototype = List.prototype;
      ListPrototype[IS_LIST_SENTINEL] = true;
      ListPrototype[DELETE] = ListPrototype.remove;
      ListPrototype.setIn = MapPrototype.setIn;
      ListPrototype.deleteIn = ListPrototype.removeIn = MapPrototype.removeIn;
      ListPrototype.update = MapPrototype.update;
      ListPrototype.updateIn = MapPrototype.updateIn;
      ListPrototype.mergeIn = MapPrototype.mergeIn;
      ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
      ListPrototype.withMutations = MapPrototype.withMutations;
      ListPrototype.asMutable = MapPrototype.asMutable;
      ListPrototype.asImmutable = MapPrototype.asImmutable;
      ListPrototype.wasAltered = MapPrototype.wasAltered;
      function VNode(array, ownerID) {
        this.array = array;
        this.ownerID = ownerID;
      }
      VNode.prototype.removeBefore = function(ownerID, level, index) {
        if (index === level ? 1 << level : this.array.length === 0) {
          return this;
        }
        var originIndex = index >>> level & MASK;
        if (originIndex >= this.array.length) {
          return new VNode([], ownerID);
        }
        var removingFirst = originIndex === 0;
        var newChild;
        if (level > 0) {
          var oldChild = this.array[originIndex];
          newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
          if (newChild === oldChild && removingFirst) {
            return this;
          }
        }
        if (removingFirst && !newChild) {
          return this;
        }
        var editable = editableVNode(this, ownerID);
        if (!removingFirst) {
          for (var ii2 = 0; ii2 < originIndex; ii2++) {
            editable.array[ii2] = void 0;
          }
        }
        if (newChild) {
          editable.array[originIndex] = newChild;
        }
        return editable;
      };
      VNode.prototype.removeAfter = function(ownerID, level, index) {
        if (index === (level ? 1 << level : 0) || this.array.length === 0) {
          return this;
        }
        var sizeIndex = index - 1 >>> level & MASK;
        if (sizeIndex >= this.array.length) {
          return this;
        }
        var newChild;
        if (level > 0) {
          var oldChild = this.array[sizeIndex];
          newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
          if (newChild === oldChild && sizeIndex === this.array.length - 1) {
            return this;
          }
        }
        var editable = editableVNode(this, ownerID);
        editable.array.splice(sizeIndex + 1);
        if (newChild) {
          editable.array[sizeIndex] = newChild;
        }
        return editable;
      };
      var DONE = {};
      function iterateList(list, reverse) {
        var left = list._origin;
        var right = list._capacity;
        var tailPos = getTailOffset(right);
        var tail = list._tail;
        return iterateNodeOrLeaf(list._root, list._level, 0);
        function iterateNodeOrLeaf(node, level, offset2) {
          return level === 0 ? iterateLeaf(node, offset2) : iterateNode(node, level, offset2);
        }
        function iterateLeaf(node, offset2) {
          var array = offset2 === tailPos ? tail && tail.array : node && node.array;
          var from2 = offset2 > left ? 0 : left - offset2;
          var to2 = right - offset2;
          if (to2 > SIZE) {
            to2 = SIZE;
          }
          return function() {
            if (from2 === to2) {
              return DONE;
            }
            var idx = reverse ? --to2 : from2++;
            return array && array[idx];
          };
        }
        function iterateNode(node, level, offset2) {
          var values;
          var array = node && node.array;
          var from2 = offset2 > left ? 0 : left - offset2 >> level;
          var to2 = (right - offset2 >> level) + 1;
          if (to2 > SIZE) {
            to2 = SIZE;
          }
          return function() {
            do {
              if (values) {
                var value = values();
                if (value !== DONE) {
                  return value;
                }
                values = null;
              }
              if (from2 === to2) {
                return DONE;
              }
              var idx = reverse ? --to2 : from2++;
              values = iterateNodeOrLeaf(array && array[idx], level - SHIFT, offset2 + (idx << level));
            } while (true);
          };
        }
      }
      function makeList(origin, capacity, level, root2, tail, ownerID, hash2) {
        var list = Object.create(ListPrototype);
        list.size = capacity - origin;
        list._origin = origin;
        list._capacity = capacity;
        list._level = level;
        list._root = root2;
        list._tail = tail;
        list.__ownerID = ownerID;
        list.__hash = hash2;
        list.__altered = false;
        return list;
      }
      var EMPTY_LIST;
      function emptyList() {
        return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
      }
      function updateList(list, index, value) {
        index = wrapIndex(list, index);
        if (index !== index) {
          return list;
        }
        if (index >= list.size || index < 0) {
          return list.withMutations(function(list2) {
            index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
          });
        }
        index += list._origin;
        var newTail = list._tail;
        var newRoot = list._root;
        var didAlter = MakeRef(DID_ALTER);
        if (index >= getTailOffset(list._capacity)) {
          newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
        } else {
          newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
        }
        if (!didAlter.value) {
          return list;
        }
        if (list.__ownerID) {
          list._root = newRoot;
          list._tail = newTail;
          list.__hash = void 0;
          list.__altered = true;
          return list;
        }
        return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
      }
      function updateVNode(node, ownerID, level, index, value, didAlter) {
        var idx = index >>> level & MASK;
        var nodeHas = node && idx < node.array.length;
        if (!nodeHas && value === void 0) {
          return node;
        }
        var newNode;
        if (level > 0) {
          var lowerNode = node && node.array[idx];
          var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
          if (newLowerNode === lowerNode) {
            return node;
          }
          newNode = editableVNode(node, ownerID);
          newNode.array[idx] = newLowerNode;
          return newNode;
        }
        if (nodeHas && node.array[idx] === value) {
          return node;
        }
        SetRef(didAlter);
        newNode = editableVNode(node, ownerID);
        if (value === void 0 && idx === newNode.array.length - 1) {
          newNode.array.pop();
        } else {
          newNode.array[idx] = value;
        }
        return newNode;
      }
      function editableVNode(node, ownerID) {
        if (ownerID && node && ownerID === node.ownerID) {
          return node;
        }
        return new VNode(node ? node.array.slice() : [], ownerID);
      }
      function listNodeFor(list, rawIndex) {
        if (rawIndex >= getTailOffset(list._capacity)) {
          return list._tail;
        }
        if (rawIndex < 1 << list._level + SHIFT) {
          var node = list._root;
          var level = list._level;
          while (node && level > 0) {
            node = node.array[rawIndex >>> level & MASK];
            level -= SHIFT;
          }
          return node;
        }
      }
      function setListBounds(list, begin, end) {
        if (begin !== void 0) {
          begin = begin | 0;
        }
        if (end !== void 0) {
          end = end | 0;
        }
        var owner = list.__ownerID || new OwnerID();
        var oldOrigin = list._origin;
        var oldCapacity = list._capacity;
        var newOrigin = oldOrigin + begin;
        var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
        if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
          return list;
        }
        if (newOrigin >= newCapacity) {
          return list.clear();
        }
        var newLevel = list._level;
        var newRoot = list._root;
        var offsetShift = 0;
        while (newOrigin + offsetShift < 0) {
          newRoot = new VNode(newRoot && newRoot.array.length ? [void 0, newRoot] : [], owner);
          newLevel += SHIFT;
          offsetShift += 1 << newLevel;
        }
        if (offsetShift) {
          newOrigin += offsetShift;
          oldOrigin += offsetShift;
          newCapacity += offsetShift;
          oldCapacity += offsetShift;
        }
        var oldTailOffset = getTailOffset(oldCapacity);
        var newTailOffset = getTailOffset(newCapacity);
        while (newTailOffset >= 1 << newLevel + SHIFT) {
          newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
          newLevel += SHIFT;
        }
        var oldTail = list._tail;
        var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
        if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
          newRoot = editableVNode(newRoot, owner);
          var node = newRoot;
          for (var level = newLevel; level > SHIFT; level -= SHIFT) {
            var idx = oldTailOffset >>> level & MASK;
            node = node.array[idx] = editableVNode(node.array[idx], owner);
          }
          node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
        }
        if (newCapacity < oldCapacity) {
          newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
        }
        if (newOrigin >= newTailOffset) {
          newOrigin -= newTailOffset;
          newCapacity -= newTailOffset;
          newLevel = SHIFT;
          newRoot = null;
          newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
        } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
          offsetShift = 0;
          while (newRoot) {
            var beginIndex = newOrigin >>> newLevel & MASK;
            if (beginIndex !== newTailOffset >>> newLevel & MASK) {
              break;
            }
            if (beginIndex) {
              offsetShift += (1 << newLevel) * beginIndex;
            }
            newLevel -= SHIFT;
            newRoot = newRoot.array[beginIndex];
          }
          if (newRoot && newOrigin > oldOrigin) {
            newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
          }
          if (newRoot && newTailOffset < oldTailOffset) {
            newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
          }
          if (offsetShift) {
            newOrigin -= offsetShift;
            newCapacity -= offsetShift;
          }
        }
        if (list.__ownerID) {
          list.size = newCapacity - newOrigin;
          list._origin = newOrigin;
          list._capacity = newCapacity;
          list._level = newLevel;
          list._root = newRoot;
          list._tail = newTail;
          list.__hash = void 0;
          list.__altered = true;
          return list;
        }
        return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
      }
      function mergeIntoListWith(list, merger, iterables) {
        var iters = [];
        var maxSize = 0;
        for (var ii2 = 0; ii2 < iterables.length; ii2++) {
          var value = iterables[ii2];
          var iter = IndexedIterable(value);
          if (iter.size > maxSize) {
            maxSize = iter.size;
          }
          if (!isIterable(value)) {
            iter = iter.map(function(v2) {
              return fromJS(v2);
            });
          }
          iters.push(iter);
        }
        if (maxSize > list.size) {
          list = list.setSize(maxSize);
        }
        return mergeIntoCollectionWith(list, merger, iters);
      }
      function getTailOffset(size) {
        return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
      }
      createClass(OrderedMap, Map2);
      function OrderedMap(value) {
        return value === null || value === void 0 ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map2) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v2, k) {
            return map2.set(k, v2);
          });
        });
      }
      OrderedMap.of = function() {
        return this(arguments);
      };
      OrderedMap.prototype.toString = function() {
        return this.__toString("OrderedMap {", "}");
      };
      OrderedMap.prototype.get = function(k, notSetValue) {
        var index = this._map.get(k);
        return index !== void 0 ? this._list.get(index)[1] : notSetValue;
      };
      OrderedMap.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = 0;
          this._map.clear();
          this._list.clear();
          return this;
        }
        return emptyOrderedMap();
      };
      OrderedMap.prototype.set = function(k, v2) {
        return updateOrderedMap(this, k, v2);
      };
      OrderedMap.prototype.remove = function(k) {
        return updateOrderedMap(this, k, NOT_SET);
      };
      OrderedMap.prototype.wasAltered = function() {
        return this._map.wasAltered() || this._list.wasAltered();
      };
      OrderedMap.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._list.__iterate(function(entry) {
          return entry && fn(entry[1], entry[0], this$0);
        }, reverse);
      };
      OrderedMap.prototype.__iterator = function(type, reverse) {
        return this._list.fromEntrySeq().__iterator(type, reverse);
      };
      OrderedMap.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        var newMap = this._map.__ensureOwner(ownerID);
        var newList = this._list.__ensureOwner(ownerID);
        if (!ownerID) {
          this.__ownerID = ownerID;
          this._map = newMap;
          this._list = newList;
          return this;
        }
        return makeOrderedMap(newMap, newList, ownerID, this.__hash);
      };
      function isOrderedMap(maybeOrderedMap) {
        return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
      }
      OrderedMap.isOrderedMap = isOrderedMap;
      OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
      OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
      function makeOrderedMap(map2, list, ownerID, hash2) {
        var omap = Object.create(OrderedMap.prototype);
        omap.size = map2 ? map2.size : 0;
        omap._map = map2;
        omap._list = list;
        omap.__ownerID = ownerID;
        omap.__hash = hash2;
        return omap;
      }
      var EMPTY_ORDERED_MAP;
      function emptyOrderedMap() {
        return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
      }
      function updateOrderedMap(omap, k, v2) {
        var map2 = omap._map;
        var list = omap._list;
        var i2 = map2.get(k);
        var has = i2 !== void 0;
        var newMap;
        var newList;
        if (v2 === NOT_SET) {
          if (!has) {
            return omap;
          }
          if (list.size >= SIZE && list.size >= map2.size * 2) {
            newList = list.filter(function(entry, idx) {
              return entry !== void 0 && i2 !== idx;
            });
            newMap = newList.toKeyedSeq().map(function(entry) {
              return entry[0];
            }).flip().toMap();
            if (omap.__ownerID) {
              newMap.__ownerID = newList.__ownerID = omap.__ownerID;
            }
          } else {
            newMap = map2.remove(k);
            newList = i2 === list.size - 1 ? list.pop() : list.set(i2, void 0);
          }
        } else {
          if (has) {
            if (v2 === list.get(i2)[1]) {
              return omap;
            }
            newMap = map2;
            newList = list.set(i2, [k, v2]);
          } else {
            newMap = map2.set(k, list.size);
            newList = list.set(list.size, [k, v2]);
          }
        }
        if (omap.__ownerID) {
          omap.size = newMap.size;
          omap._map = newMap;
          omap._list = newList;
          omap.__hash = void 0;
          return omap;
        }
        return makeOrderedMap(newMap, newList);
      }
      createClass(ToKeyedSequence, KeyedSeq);
      function ToKeyedSequence(indexed, useKeys) {
        this._iter = indexed;
        this._useKeys = useKeys;
        this.size = indexed.size;
      }
      ToKeyedSequence.prototype.get = function(key, notSetValue) {
        return this._iter.get(key, notSetValue);
      };
      ToKeyedSequence.prototype.has = function(key) {
        return this._iter.has(key);
      };
      ToKeyedSequence.prototype.valueSeq = function() {
        return this._iter.valueSeq();
      };
      ToKeyedSequence.prototype.reverse = function() {
        var this$0 = this;
        var reversedSequence = reverseFactory(this, true);
        if (!this._useKeys) {
          reversedSequence.valueSeq = function() {
            return this$0._iter.toSeq().reverse();
          };
        }
        return reversedSequence;
      };
      ToKeyedSequence.prototype.map = function(mapper, context) {
        var this$0 = this;
        var mappedSequence = mapFactory(this, mapper, context);
        if (!this._useKeys) {
          mappedSequence.valueSeq = function() {
            return this$0._iter.toSeq().map(mapper, context);
          };
        }
        return mappedSequence;
      };
      ToKeyedSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        var ii2;
        return this._iter.__iterate(this._useKeys ? function(v2, k) {
          return fn(v2, k, this$0);
        } : (ii2 = reverse ? resolveSize(this) : 0, function(v2) {
          return fn(v2, reverse ? --ii2 : ii2++, this$0);
        }), reverse);
      };
      ToKeyedSequence.prototype.__iterator = function(type, reverse) {
        if (this._useKeys) {
          return this._iter.__iterator(type, reverse);
        }
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        var ii2 = reverse ? resolveSize(this) : 0;
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, reverse ? --ii2 : ii2++, step.value, step);
        });
      };
      ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;
      createClass(ToIndexedSequence, IndexedSeq);
      function ToIndexedSequence(iter) {
        this._iter = iter;
        this.size = iter.size;
      }
      ToIndexedSequence.prototype.includes = function(value) {
        return this._iter.includes(value);
      };
      ToIndexedSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        var iterations = 0;
        return this._iter.__iterate(function(v2) {
          return fn(v2, iterations++, this$0);
        }, reverse);
      };
      ToIndexedSequence.prototype.__iterator = function(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        var iterations = 0;
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, iterations++, step.value, step);
        });
      };
      createClass(ToSetSequence, SetSeq);
      function ToSetSequence(iter) {
        this._iter = iter;
        this.size = iter.size;
      }
      ToSetSequence.prototype.has = function(key) {
        return this._iter.includes(key);
      };
      ToSetSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._iter.__iterate(function(v2) {
          return fn(v2, v2, this$0);
        }, reverse);
      };
      ToSetSequence.prototype.__iterator = function(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function() {
          var step = iterator.next();
          return step.done ? step : iteratorValue(type, step.value, step.value, step);
        });
      };
      createClass(FromEntriesSequence, KeyedSeq);
      function FromEntriesSequence(entries) {
        this._iter = entries;
        this.size = entries.size;
      }
      FromEntriesSequence.prototype.entrySeq = function() {
        return this._iter.toSeq();
      };
      FromEntriesSequence.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._iter.__iterate(function(entry) {
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return fn(indexedIterable ? entry.get(1) : entry[1], indexedIterable ? entry.get(0) : entry[0], this$0);
          }
        }, reverse);
      };
      FromEntriesSequence.prototype.__iterator = function(type, reverse) {
        var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
        return new Iterator(function() {
          while (true) {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            if (entry) {
              validateEntry(entry);
              var indexedIterable = isIterable(entry);
              return iteratorValue(type, indexedIterable ? entry.get(0) : entry[0], indexedIterable ? entry.get(1) : entry[1], step);
            }
          }
        });
      };
      ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
      function flipFactory(iterable) {
        var flipSequence = makeSequence(iterable);
        flipSequence._iter = iterable;
        flipSequence.size = iterable.size;
        flipSequence.flip = function() {
          return iterable;
        };
        flipSequence.reverse = function() {
          var reversedSequence = iterable.reverse.apply(this);
          reversedSequence.flip = function() {
            return iterable.reverse();
          };
          return reversedSequence;
        };
        flipSequence.has = function(key) {
          return iterable.includes(key);
        };
        flipSequence.includes = function(key) {
          return iterable.has(key);
        };
        flipSequence.cacheResult = cacheResultThrough;
        flipSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          return iterable.__iterate(function(v2, k) {
            return fn(k, v2, this$0) !== false;
          }, reverse);
        };
        flipSequence.__iteratorUncached = function(type, reverse) {
          if (type === ITERATE_ENTRIES) {
            var iterator = iterable.__iterator(type, reverse);
            return new Iterator(function() {
              var step = iterator.next();
              if (!step.done) {
                var k = step.value[0];
                step.value[0] = step.value[1];
                step.value[1] = k;
              }
              return step;
            });
          }
          return iterable.__iterator(type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES, reverse);
        };
        return flipSequence;
      }
      function mapFactory(iterable, mapper, context) {
        var mappedSequence = makeSequence(iterable);
        mappedSequence.size = iterable.size;
        mappedSequence.has = function(key) {
          return iterable.has(key);
        };
        mappedSequence.get = function(key, notSetValue) {
          var v2 = iterable.get(key, NOT_SET);
          return v2 === NOT_SET ? notSetValue : mapper.call(context, v2, key, iterable);
        };
        mappedSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          return iterable.__iterate(function(v2, k, c) {
            return fn(mapper.call(context, v2, k, c), k, this$0) !== false;
          }, reverse);
        };
        mappedSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          return new Iterator(function() {
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var key = entry[0];
            return iteratorValue(type, key, mapper.call(context, entry[1], key, iterable), step);
          });
        };
        return mappedSequence;
      }
      function reverseFactory(iterable, useKeys) {
        var reversedSequence = makeSequence(iterable);
        reversedSequence._iter = iterable;
        reversedSequence.size = iterable.size;
        reversedSequence.reverse = function() {
          return iterable;
        };
        if (iterable.flip) {
          reversedSequence.flip = function() {
            var flipSequence = flipFactory(iterable);
            flipSequence.reverse = function() {
              return iterable.flip();
            };
            return flipSequence;
          };
        }
        reversedSequence.get = function(key, notSetValue) {
          return iterable.get(useKeys ? key : -1 - key, notSetValue);
        };
        reversedSequence.has = function(key) {
          return iterable.has(useKeys ? key : -1 - key);
        };
        reversedSequence.includes = function(value) {
          return iterable.includes(value);
        };
        reversedSequence.cacheResult = cacheResultThrough;
        reversedSequence.__iterate = function(fn, reverse) {
          var this$0 = this;
          return iterable.__iterate(function(v2, k) {
            return fn(v2, k, this$0);
          }, !reverse);
        };
        reversedSequence.__iterator = function(type, reverse) {
          return iterable.__iterator(type, !reverse);
        };
        return reversedSequence;
      }
      function filterFactory(iterable, predicate, context, useKeys) {
        var filterSequence = makeSequence(iterable);
        if (useKeys) {
          filterSequence.has = function(key) {
            var v2 = iterable.get(key, NOT_SET);
            return v2 !== NOT_SET && !!predicate.call(context, v2, key, iterable);
          };
          filterSequence.get = function(key, notSetValue) {
            var v2 = iterable.get(key, NOT_SET);
            return v2 !== NOT_SET && predicate.call(context, v2, key, iterable) ? v2 : notSetValue;
          };
        }
        filterSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          var iterations = 0;
          iterable.__iterate(function(v2, k, c) {
            if (predicate.call(context, v2, k, c)) {
              iterations++;
              return fn(v2, useKeys ? k : iterations - 1, this$0);
            }
          }, reverse);
          return iterations;
        };
        filterSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          var iterations = 0;
          return new Iterator(function() {
            while (true) {
              var step = iterator.next();
              if (step.done) {
                return step;
              }
              var entry = step.value;
              var key = entry[0];
              var value = entry[1];
              if (predicate.call(context, value, key, iterable)) {
                return iteratorValue(type, useKeys ? key : iterations++, value, step);
              }
            }
          });
        };
        return filterSequence;
      }
      function countByFactory(iterable, grouper, context) {
        var groups = Map2().asMutable();
        iterable.__iterate(function(v2, k) {
          groups.update(grouper.call(context, v2, k, iterable), 0, function(a) {
            return a + 1;
          });
        });
        return groups.asImmutable();
      }
      function groupByFactory(iterable, grouper, context) {
        var isKeyedIter = isKeyed(iterable);
        var groups = (isOrdered(iterable) ? OrderedMap() : Map2()).asMutable();
        iterable.__iterate(function(v2, k) {
          groups.update(grouper.call(context, v2, k, iterable), function(a) {
            return a = a || [], a.push(isKeyedIter ? [k, v2] : v2), a;
          });
        });
        var coerce = iterableClass(iterable);
        return groups.map(function(arr) {
          return reify(iterable, coerce(arr));
        });
      }
      function sliceFactory(iterable, begin, end, useKeys) {
        var originalSize = iterable.size;
        if (begin !== void 0) {
          begin = begin | 0;
        }
        if (end !== void 0) {
          if (end === Infinity) {
            end = originalSize;
          } else {
            end = end | 0;
          }
        }
        if (wholeSlice(begin, end, originalSize)) {
          return iterable;
        }
        var resolvedBegin = resolveBegin(begin, originalSize);
        var resolvedEnd = resolveEnd(end, originalSize);
        if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
          return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
        }
        var resolvedSize = resolvedEnd - resolvedBegin;
        var sliceSize;
        if (resolvedSize === resolvedSize) {
          sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
        }
        var sliceSeq = makeSequence(iterable);
        sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || void 0;
        if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
          sliceSeq.get = function(index, notSetValue) {
            index = wrapIndex(this, index);
            return index >= 0 && index < sliceSize ? iterable.get(index + resolvedBegin, notSetValue) : notSetValue;
          };
        }
        sliceSeq.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          if (sliceSize === 0) {
            return 0;
          }
          if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
          }
          var skipped = 0;
          var isSkipping = true;
          var iterations = 0;
          iterable.__iterate(function(v2, k) {
            if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
              iterations++;
              return fn(v2, useKeys ? k : iterations - 1, this$0) !== false && iterations !== sliceSize;
            }
          });
          return iterations;
        };
        sliceSeq.__iteratorUncached = function(type, reverse) {
          if (sliceSize !== 0 && reverse) {
            return this.cacheResult().__iterator(type, reverse);
          }
          var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
          var skipped = 0;
          var iterations = 0;
          return new Iterator(function() {
            while (skipped++ < resolvedBegin) {
              iterator.next();
            }
            if (++iterations > sliceSize) {
              return iteratorDone();
            }
            var step = iterator.next();
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations - 1, void 0, step);
            } else {
              return iteratorValue(type, iterations - 1, step.value[1], step);
            }
          });
        };
        return sliceSeq;
      }
      function takeWhileFactory(iterable, predicate, context) {
        var takeSequence = makeSequence(iterable);
        takeSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
          }
          var iterations = 0;
          iterable.__iterate(function(v2, k, c) {
            return predicate.call(context, v2, k, c) && ++iterations && fn(v2, k, this$0);
          });
          return iterations;
        };
        takeSequence.__iteratorUncached = function(type, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
          }
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          var iterating = true;
          return new Iterator(function() {
            if (!iterating) {
              return iteratorDone();
            }
            var step = iterator.next();
            if (step.done) {
              return step;
            }
            var entry = step.value;
            var k = entry[0];
            var v2 = entry[1];
            if (!predicate.call(context, v2, k, this$0)) {
              iterating = false;
              return iteratorDone();
            }
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v2, step);
          });
        };
        return takeSequence;
      }
      function skipWhileFactory(iterable, predicate, context, useKeys) {
        var skipSequence = makeSequence(iterable);
        skipSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterate(fn, reverse);
          }
          var isSkipping = true;
          var iterations = 0;
          iterable.__iterate(function(v2, k, c) {
            if (!(isSkipping && (isSkipping = predicate.call(context, v2, k, c)))) {
              iterations++;
              return fn(v2, useKeys ? k : iterations - 1, this$0);
            }
          });
          return iterations;
        };
        skipSequence.__iteratorUncached = function(type, reverse) {
          var this$0 = this;
          if (reverse) {
            return this.cacheResult().__iterator(type, reverse);
          }
          var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
          var skipping = true;
          var iterations = 0;
          return new Iterator(function() {
            var step, k, v2;
            do {
              step = iterator.next();
              if (step.done) {
                if (useKeys || type === ITERATE_VALUES) {
                  return step;
                } else if (type === ITERATE_KEYS) {
                  return iteratorValue(type, iterations++, void 0, step);
                } else {
                  return iteratorValue(type, iterations++, step.value[1], step);
                }
              }
              var entry = step.value;
              k = entry[0];
              v2 = entry[1];
              skipping && (skipping = predicate.call(context, v2, k, this$0));
            } while (skipping);
            return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v2, step);
          });
        };
        return skipSequence;
      }
      function concatFactory(iterable, values) {
        var isKeyedIterable = isKeyed(iterable);
        var iters = [iterable].concat(values).map(function(v2) {
          if (!isIterable(v2)) {
            v2 = isKeyedIterable ? keyedSeqFromValue(v2) : indexedSeqFromValue(Array.isArray(v2) ? v2 : [v2]);
          } else if (isKeyedIterable) {
            v2 = KeyedIterable(v2);
          }
          return v2;
        }).filter(function(v2) {
          return v2.size !== 0;
        });
        if (iters.length === 0) {
          return iterable;
        }
        if (iters.length === 1) {
          var singleton = iters[0];
          if (singleton === iterable || isKeyedIterable && isKeyed(singleton) || isIndexed(iterable) && isIndexed(singleton)) {
            return singleton;
          }
        }
        var concatSeq = new ArraySeq(iters);
        if (isKeyedIterable) {
          concatSeq = concatSeq.toKeyedSeq();
        } else if (!isIndexed(iterable)) {
          concatSeq = concatSeq.toSetSeq();
        }
        concatSeq = concatSeq.flatten(true);
        concatSeq.size = iters.reduce(function(sum, seq) {
          if (sum !== void 0) {
            var size = seq.size;
            if (size !== void 0) {
              return sum + size;
            }
          }
        }, 0);
        return concatSeq;
      }
      function flattenFactory(iterable, depth, useKeys) {
        var flatSequence = makeSequence(iterable);
        flatSequence.__iterateUncached = function(fn, reverse) {
          var iterations = 0;
          var stopped = false;
          function flatDeep(iter, currentDepth) {
            var this$0 = this;
            iter.__iterate(function(v2, k) {
              if ((!depth || currentDepth < depth) && isIterable(v2)) {
                flatDeep(v2, currentDepth + 1);
              } else if (fn(v2, useKeys ? k : iterations++, this$0) === false) {
                stopped = true;
              }
              return !stopped;
            }, reverse);
          }
          flatDeep(iterable, 0);
          return iterations;
        };
        flatSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(type, reverse);
          var stack = [];
          var iterations = 0;
          return new Iterator(function() {
            while (iterator) {
              var step = iterator.next();
              if (step.done !== false) {
                iterator = stack.pop();
                continue;
              }
              var v2 = step.value;
              if (type === ITERATE_ENTRIES) {
                v2 = v2[1];
              }
              if ((!depth || stack.length < depth) && isIterable(v2)) {
                stack.push(iterator);
                iterator = v2.__iterator(type, reverse);
              } else {
                return useKeys ? step : iteratorValue(type, iterations++, v2, step);
              }
            }
            return iteratorDone();
          });
        };
        return flatSequence;
      }
      function flatMapFactory(iterable, mapper, context) {
        var coerce = iterableClass(iterable);
        return iterable.toSeq().map(function(v2, k) {
          return coerce(mapper.call(context, v2, k, iterable));
        }).flatten(true);
      }
      function interposeFactory(iterable, separator) {
        var interposedSequence = makeSequence(iterable);
        interposedSequence.size = iterable.size && iterable.size * 2 - 1;
        interposedSequence.__iterateUncached = function(fn, reverse) {
          var this$0 = this;
          var iterations = 0;
          iterable.__iterate(function(v2, k) {
            return (!iterations || fn(separator, iterations++, this$0) !== false) && fn(v2, iterations++, this$0) !== false;
          }, reverse);
          return iterations;
        };
        interposedSequence.__iteratorUncached = function(type, reverse) {
          var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
          var iterations = 0;
          var step;
          return new Iterator(function() {
            if (!step || iterations % 2) {
              step = iterator.next();
              if (step.done) {
                return step;
              }
            }
            return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
          });
        };
        return interposedSequence;
      }
      function sortFactory(iterable, comparator, mapper) {
        if (!comparator) {
          comparator = defaultComparator;
        }
        var isKeyedIterable = isKeyed(iterable);
        var index = 0;
        var entries = iterable.toSeq().map(function(v2, k) {
          return [k, v2, index++, mapper ? mapper(v2, k, iterable) : v2];
        }).toArray();
        entries.sort(function(a, b) {
          return comparator(a[3], b[3]) || a[2] - b[2];
        }).forEach(isKeyedIterable ? function(v2, i2) {
          entries[i2].length = 2;
        } : function(v2, i2) {
          entries[i2] = v2[1];
        });
        return isKeyedIterable ? KeyedSeq(entries) : isIndexed(iterable) ? IndexedSeq(entries) : SetSeq(entries);
      }
      function maxFactory(iterable, comparator, mapper) {
        if (!comparator) {
          comparator = defaultComparator;
        }
        if (mapper) {
          var entry = iterable.toSeq().map(function(v2, k) {
            return [v2, mapper(v2, k, iterable)];
          }).reduce(function(a, b) {
            return maxCompare(comparator, a[1], b[1]) ? b : a;
          });
          return entry && entry[0];
        } else {
          return iterable.reduce(function(a, b) {
            return maxCompare(comparator, a, b) ? b : a;
          });
        }
      }
      function maxCompare(comparator, a, b) {
        var comp = comparator(b, a);
        return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
      }
      function zipWithFactory(keyIter, zipper, iters) {
        var zipSequence = makeSequence(keyIter);
        zipSequence.size = new ArraySeq(iters).map(function(i2) {
          return i2.size;
        }).min();
        zipSequence.__iterate = function(fn, reverse) {
          var iterator = this.__iterator(ITERATE_VALUES, reverse);
          var step;
          var iterations = 0;
          while (!(step = iterator.next()).done) {
            if (fn(step.value, iterations++, this) === false) {
              break;
            }
          }
          return iterations;
        };
        zipSequence.__iteratorUncached = function(type, reverse) {
          var iterators = iters.map(function(i2) {
            return i2 = Iterable(i2), getIterator(reverse ? i2.reverse() : i2);
          });
          var iterations = 0;
          var isDone = false;
          return new Iterator(function() {
            var steps;
            if (!isDone) {
              steps = iterators.map(function(i2) {
                return i2.next();
              });
              isDone = steps.some(function(s) {
                return s.done;
              });
            }
            if (isDone) {
              return iteratorDone();
            }
            return iteratorValue(type, iterations++, zipper.apply(null, steps.map(function(s) {
              return s.value;
            })));
          });
        };
        return zipSequence;
      }
      function reify(iter, seq) {
        return isSeq(iter) ? seq : iter.constructor(seq);
      }
      function validateEntry(entry) {
        if (entry !== Object(entry)) {
          throw new TypeError("Expected [K, V] tuple: " + entry);
        }
      }
      function resolveSize(iter) {
        assertNotInfinite(iter.size);
        return ensureSize(iter);
      }
      function iterableClass(iterable) {
        return isKeyed(iterable) ? KeyedIterable : isIndexed(iterable) ? IndexedIterable : SetIterable;
      }
      function makeSequence(iterable) {
        return Object.create((isKeyed(iterable) ? KeyedSeq : isIndexed(iterable) ? IndexedSeq : SetSeq).prototype);
      }
      function cacheResultThrough() {
        if (this._iter.cacheResult) {
          this._iter.cacheResult();
          this.size = this._iter.size;
          return this;
        } else {
          return Seq.prototype.cacheResult.call(this);
        }
      }
      function defaultComparator(a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      }
      function forceIterator(keyPath) {
        var iter = getIterator(keyPath);
        if (!iter) {
          if (!isArrayLike(keyPath)) {
            throw new TypeError("Expected iterable or array-like: " + keyPath);
          }
          iter = getIterator(Iterable(keyPath));
        }
        return iter;
      }
      createClass(Record, KeyedCollection);
      function Record(defaultValues, name) {
        var hasInitialized;
        var RecordType = function Record2(values) {
          if (values instanceof RecordType) {
            return values;
          }
          if (!(this instanceof RecordType)) {
            return new RecordType(values);
          }
          if (!hasInitialized) {
            hasInitialized = true;
            var keys2 = Object.keys(defaultValues);
            setProps(RecordTypePrototype, keys2);
            RecordTypePrototype.size = keys2.length;
            RecordTypePrototype._name = name;
            RecordTypePrototype._keys = keys2;
            RecordTypePrototype._defaultValues = defaultValues;
          }
          this._map = Map2(values);
        };
        var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
        RecordTypePrototype.constructor = RecordType;
        return RecordType;
      }
      Record.prototype.toString = function() {
        return this.__toString(recordName(this) + " {", "}");
      };
      Record.prototype.has = function(k) {
        return this._defaultValues.hasOwnProperty(k);
      };
      Record.prototype.get = function(k, notSetValue) {
        if (!this.has(k)) {
          return notSetValue;
        }
        var defaultVal = this._defaultValues[k];
        return this._map ? this._map.get(k, defaultVal) : defaultVal;
      };
      Record.prototype.clear = function() {
        if (this.__ownerID) {
          this._map && this._map.clear();
          return this;
        }
        var RecordType = this.constructor;
        return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
      };
      Record.prototype.set = function(k, v2) {
        if (!this.has(k)) {
          throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
        }
        if (this._map && !this._map.has(k)) {
          var defaultVal = this._defaultValues[k];
          if (v2 === defaultVal) {
            return this;
          }
        }
        var newMap = this._map && this._map.set(k, v2);
        if (this.__ownerID || newMap === this._map) {
          return this;
        }
        return makeRecord(this, newMap);
      };
      Record.prototype.remove = function(k) {
        if (!this.has(k)) {
          return this;
        }
        var newMap = this._map && this._map.remove(k);
        if (this.__ownerID || newMap === this._map) {
          return this;
        }
        return makeRecord(this, newMap);
      };
      Record.prototype.wasAltered = function() {
        return this._map.wasAltered();
      };
      Record.prototype.__iterator = function(type, reverse) {
        var this$0 = this;
        return KeyedIterable(this._defaultValues).map(function(_, k) {
          return this$0.get(k);
        }).__iterator(type, reverse);
      };
      Record.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return KeyedIterable(this._defaultValues).map(function(_, k) {
          return this$0.get(k);
        }).__iterate(fn, reverse);
      };
      Record.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        var newMap = this._map && this._map.__ensureOwner(ownerID);
        if (!ownerID) {
          this.__ownerID = ownerID;
          this._map = newMap;
          return this;
        }
        return makeRecord(this, newMap, ownerID);
      };
      var RecordPrototype = Record.prototype;
      RecordPrototype[DELETE] = RecordPrototype.remove;
      RecordPrototype.deleteIn = RecordPrototype.removeIn = MapPrototype.removeIn;
      RecordPrototype.merge = MapPrototype.merge;
      RecordPrototype.mergeWith = MapPrototype.mergeWith;
      RecordPrototype.mergeIn = MapPrototype.mergeIn;
      RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
      RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
      RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
      RecordPrototype.setIn = MapPrototype.setIn;
      RecordPrototype.update = MapPrototype.update;
      RecordPrototype.updateIn = MapPrototype.updateIn;
      RecordPrototype.withMutations = MapPrototype.withMutations;
      RecordPrototype.asMutable = MapPrototype.asMutable;
      RecordPrototype.asImmutable = MapPrototype.asImmutable;
      function makeRecord(likeRecord, map2, ownerID) {
        var record = Object.create(Object.getPrototypeOf(likeRecord));
        record._map = map2;
        record.__ownerID = ownerID;
        return record;
      }
      function recordName(record) {
        return record._name || record.constructor.name || "Record";
      }
      function setProps(prototype, names) {
        try {
          names.forEach(setProp.bind(void 0, prototype));
        } catch (error) {
        }
      }
      function setProp(prototype, name) {
        Object.defineProperty(prototype, name, {
          get: function() {
            return this.get(name);
          },
          set: function(value) {
            invariant2(this.__ownerID, "Cannot set on an immutable record.");
            this.set(name, value);
          }
        });
      }
      createClass(Set2, SetCollection);
      function Set2(value) {
        return value === null || value === void 0 ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set2) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v2) {
            return set2.add(v2);
          });
        });
      }
      Set2.of = function() {
        return this(arguments);
      };
      Set2.fromKeys = function(value) {
        return this(KeyedIterable(value).keySeq());
      };
      Set2.prototype.toString = function() {
        return this.__toString("Set {", "}");
      };
      Set2.prototype.has = function(value) {
        return this._map.has(value);
      };
      Set2.prototype.add = function(value) {
        return updateSet(this, this._map.set(value, true));
      };
      Set2.prototype.remove = function(value) {
        return updateSet(this, this._map.remove(value));
      };
      Set2.prototype.clear = function() {
        return updateSet(this, this._map.clear());
      };
      Set2.prototype.union = function() {
        var iters = SLICE$0.call(arguments, 0);
        iters = iters.filter(function(x2) {
          return x2.size !== 0;
        });
        if (iters.length === 0) {
          return this;
        }
        if (this.size === 0 && !this.__ownerID && iters.length === 1) {
          return this.constructor(iters[0]);
        }
        return this.withMutations(function(set2) {
          for (var ii2 = 0; ii2 < iters.length; ii2++) {
            SetIterable(iters[ii2]).forEach(function(value) {
              return set2.add(value);
            });
          }
        });
      };
      Set2.prototype.intersect = function() {
        var iters = SLICE$0.call(arguments, 0);
        if (iters.length === 0) {
          return this;
        }
        iters = iters.map(function(iter) {
          return SetIterable(iter);
        });
        var originalSet = this;
        return this.withMutations(function(set2) {
          originalSet.forEach(function(value) {
            if (!iters.every(function(iter) {
              return iter.includes(value);
            })) {
              set2.remove(value);
            }
          });
        });
      };
      Set2.prototype.subtract = function() {
        var iters = SLICE$0.call(arguments, 0);
        if (iters.length === 0) {
          return this;
        }
        iters = iters.map(function(iter) {
          return SetIterable(iter);
        });
        var originalSet = this;
        return this.withMutations(function(set2) {
          originalSet.forEach(function(value) {
            if (iters.some(function(iter) {
              return iter.includes(value);
            })) {
              set2.remove(value);
            }
          });
        });
      };
      Set2.prototype.merge = function() {
        return this.union.apply(this, arguments);
      };
      Set2.prototype.mergeWith = function(merger) {
        var iters = SLICE$0.call(arguments, 1);
        return this.union.apply(this, iters);
      };
      Set2.prototype.sort = function(comparator) {
        return OrderedSet(sortFactory(this, comparator));
      };
      Set2.prototype.sortBy = function(mapper, comparator) {
        return OrderedSet(sortFactory(this, comparator, mapper));
      };
      Set2.prototype.wasAltered = function() {
        return this._map.wasAltered();
      };
      Set2.prototype.__iterate = function(fn, reverse) {
        var this$0 = this;
        return this._map.__iterate(function(_, k) {
          return fn(k, k, this$0);
        }, reverse);
      };
      Set2.prototype.__iterator = function(type, reverse) {
        return this._map.map(function(_, k) {
          return k;
        }).__iterator(type, reverse);
      };
      Set2.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        var newMap = this._map.__ensureOwner(ownerID);
        if (!ownerID) {
          this.__ownerID = ownerID;
          this._map = newMap;
          return this;
        }
        return this.__make(newMap, ownerID);
      };
      function isSet(maybeSet) {
        return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
      }
      Set2.isSet = isSet;
      var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
      var SetPrototype = Set2.prototype;
      SetPrototype[IS_SET_SENTINEL] = true;
      SetPrototype[DELETE] = SetPrototype.remove;
      SetPrototype.mergeDeep = SetPrototype.merge;
      SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
      SetPrototype.withMutations = MapPrototype.withMutations;
      SetPrototype.asMutable = MapPrototype.asMutable;
      SetPrototype.asImmutable = MapPrototype.asImmutable;
      SetPrototype.__empty = emptySet;
      SetPrototype.__make = makeSet;
      function updateSet(set2, newMap) {
        if (set2.__ownerID) {
          set2.size = newMap.size;
          set2._map = newMap;
          return set2;
        }
        return newMap === set2._map ? set2 : newMap.size === 0 ? set2.__empty() : set2.__make(newMap);
      }
      function makeSet(map2, ownerID) {
        var set2 = Object.create(SetPrototype);
        set2.size = map2 ? map2.size : 0;
        set2._map = map2;
        set2.__ownerID = ownerID;
        return set2;
      }
      var EMPTY_SET;
      function emptySet() {
        return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
      }
      createClass(OrderedSet, Set2);
      function OrderedSet(value) {
        return value === null || value === void 0 ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set2) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v2) {
            return set2.add(v2);
          });
        });
      }
      OrderedSet.of = function() {
        return this(arguments);
      };
      OrderedSet.fromKeys = function(value) {
        return this(KeyedIterable(value).keySeq());
      };
      OrderedSet.prototype.toString = function() {
        return this.__toString("OrderedSet {", "}");
      };
      function isOrderedSet(maybeOrderedSet) {
        return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
      }
      OrderedSet.isOrderedSet = isOrderedSet;
      var OrderedSetPrototype = OrderedSet.prototype;
      OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;
      OrderedSetPrototype.__empty = emptyOrderedSet;
      OrderedSetPrototype.__make = makeOrderedSet;
      function makeOrderedSet(map2, ownerID) {
        var set2 = Object.create(OrderedSetPrototype);
        set2.size = map2 ? map2.size : 0;
        set2._map = map2;
        set2.__ownerID = ownerID;
        return set2;
      }
      var EMPTY_ORDERED_SET;
      function emptyOrderedSet() {
        return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
      }
      createClass(Stack, IndexedCollection);
      function Stack(value) {
        return value === null || value === void 0 ? emptyStack() : isStack(value) ? value : emptyStack().unshiftAll(value);
      }
      Stack.of = function() {
        return this(arguments);
      };
      Stack.prototype.toString = function() {
        return this.__toString("Stack [", "]");
      };
      Stack.prototype.get = function(index, notSetValue) {
        var head = this._head;
        index = wrapIndex(this, index);
        while (head && index--) {
          head = head.next;
        }
        return head ? head.value : notSetValue;
      };
      Stack.prototype.peek = function() {
        return this._head && this._head.value;
      };
      Stack.prototype.push = function() {
        if (arguments.length === 0) {
          return this;
        }
        var newSize = this.size + arguments.length;
        var head = this._head;
        for (var ii2 = arguments.length - 1; ii2 >= 0; ii2--) {
          head = {
            value: arguments[ii2],
            next: head
          };
        }
        if (this.__ownerID) {
          this.size = newSize;
          this._head = head;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return makeStack(newSize, head);
      };
      Stack.prototype.pushAll = function(iter) {
        iter = IndexedIterable(iter);
        if (iter.size === 0) {
          return this;
        }
        assertNotInfinite(iter.size);
        var newSize = this.size;
        var head = this._head;
        iter.reverse().forEach(function(value) {
          newSize++;
          head = {
            value,
            next: head
          };
        });
        if (this.__ownerID) {
          this.size = newSize;
          this._head = head;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return makeStack(newSize, head);
      };
      Stack.prototype.pop = function() {
        return this.slice(1);
      };
      Stack.prototype.unshift = function() {
        return this.push.apply(this, arguments);
      };
      Stack.prototype.unshiftAll = function(iter) {
        return this.pushAll(iter);
      };
      Stack.prototype.shift = function() {
        return this.pop.apply(this, arguments);
      };
      Stack.prototype.clear = function() {
        if (this.size === 0) {
          return this;
        }
        if (this.__ownerID) {
          this.size = 0;
          this._head = void 0;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return emptyStack();
      };
      Stack.prototype.slice = function(begin, end) {
        if (wholeSlice(begin, end, this.size)) {
          return this;
        }
        var resolvedBegin = resolveBegin(begin, this.size);
        var resolvedEnd = resolveEnd(end, this.size);
        if (resolvedEnd !== this.size) {
          return IndexedCollection.prototype.slice.call(this, begin, end);
        }
        var newSize = this.size - resolvedBegin;
        var head = this._head;
        while (resolvedBegin--) {
          head = head.next;
        }
        if (this.__ownerID) {
          this.size = newSize;
          this._head = head;
          this.__hash = void 0;
          this.__altered = true;
          return this;
        }
        return makeStack(newSize, head);
      };
      Stack.prototype.__ensureOwner = function(ownerID) {
        if (ownerID === this.__ownerID) {
          return this;
        }
        if (!ownerID) {
          this.__ownerID = ownerID;
          this.__altered = false;
          return this;
        }
        return makeStack(this.size, this._head, ownerID, this.__hash);
      };
      Stack.prototype.__iterate = function(fn, reverse) {
        if (reverse) {
          return this.reverse().__iterate(fn);
        }
        var iterations = 0;
        var node = this._head;
        while (node) {
          if (fn(node.value, iterations++, this) === false) {
            break;
          }
          node = node.next;
        }
        return iterations;
      };
      Stack.prototype.__iterator = function(type, reverse) {
        if (reverse) {
          return this.reverse().__iterator(type);
        }
        var iterations = 0;
        var node = this._head;
        return new Iterator(function() {
          if (node) {
            var value = node.value;
            node = node.next;
            return iteratorValue(type, iterations++, value);
          }
          return iteratorDone();
        });
      };
      function isStack(maybeStack) {
        return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
      }
      Stack.isStack = isStack;
      var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
      var StackPrototype = Stack.prototype;
      StackPrototype[IS_STACK_SENTINEL] = true;
      StackPrototype.withMutations = MapPrototype.withMutations;
      StackPrototype.asMutable = MapPrototype.asMutable;
      StackPrototype.asImmutable = MapPrototype.asImmutable;
      StackPrototype.wasAltered = MapPrototype.wasAltered;
      function makeStack(size, head, ownerID, hash2) {
        var map2 = Object.create(StackPrototype);
        map2.size = size;
        map2._head = head;
        map2.__ownerID = ownerID;
        map2.__hash = hash2;
        map2.__altered = false;
        return map2;
      }
      var EMPTY_STACK;
      function emptyStack() {
        return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
      }
      function mixin(ctor, methods) {
        var keyCopier = function(key) {
          ctor.prototype[key] = methods[key];
        };
        Object.keys(methods).forEach(keyCopier);
        Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
        return ctor;
      }
      Iterable.Iterator = Iterator;
      mixin(Iterable, {
        toArray: function() {
          assertNotInfinite(this.size);
          var array = new Array(this.size || 0);
          this.valueSeq().__iterate(function(v2, i2) {
            array[i2] = v2;
          });
          return array;
        },
        toIndexedSeq: function() {
          return new ToIndexedSequence(this);
        },
        toJS: function() {
          return this.toSeq().map(function(value) {
            return value && typeof value.toJS === "function" ? value.toJS() : value;
          }).__toJS();
        },
        toJSON: function() {
          return this.toSeq().map(function(value) {
            return value && typeof value.toJSON === "function" ? value.toJSON() : value;
          }).__toJS();
        },
        toKeyedSeq: function() {
          return new ToKeyedSequence(this, true);
        },
        toMap: function() {
          return Map2(this.toKeyedSeq());
        },
        toObject: function() {
          assertNotInfinite(this.size);
          var object = {};
          this.__iterate(function(v2, k) {
            object[k] = v2;
          });
          return object;
        },
        toOrderedMap: function() {
          return OrderedMap(this.toKeyedSeq());
        },
        toOrderedSet: function() {
          return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
        },
        toSet: function() {
          return Set2(isKeyed(this) ? this.valueSeq() : this);
        },
        toSetSeq: function() {
          return new ToSetSequence(this);
        },
        toSeq: function() {
          return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
        },
        toStack: function() {
          return Stack(isKeyed(this) ? this.valueSeq() : this);
        },
        toList: function() {
          return List(isKeyed(this) ? this.valueSeq() : this);
        },
        toString: function() {
          return "[Iterable]";
        },
        __toString: function(head, tail) {
          if (this.size === 0) {
            return head + tail;
          }
          return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
        },
        concat: function() {
          var values = SLICE$0.call(arguments, 0);
          return reify(this, concatFactory(this, values));
        },
        includes: function(searchValue) {
          return this.some(function(value) {
            return is(value, searchValue);
          });
        },
        entries: function() {
          return this.__iterator(ITERATE_ENTRIES);
        },
        every: function(predicate, context) {
          assertNotInfinite(this.size);
          var returnValue = true;
          this.__iterate(function(v2, k, c) {
            if (!predicate.call(context, v2, k, c)) {
              returnValue = false;
              return false;
            }
          });
          return returnValue;
        },
        filter: function(predicate, context) {
          return reify(this, filterFactory(this, predicate, context, true));
        },
        find: function(predicate, context, notSetValue) {
          var entry = this.findEntry(predicate, context);
          return entry ? entry[1] : notSetValue;
        },
        forEach: function(sideEffect, context) {
          assertNotInfinite(this.size);
          return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
        },
        join: function(separator) {
          assertNotInfinite(this.size);
          separator = separator !== void 0 ? "" + separator : ",";
          var joined = "";
          var isFirst = true;
          this.__iterate(function(v2) {
            isFirst ? isFirst = false : joined += separator;
            joined += v2 !== null && v2 !== void 0 ? v2.toString() : "";
          });
          return joined;
        },
        keys: function() {
          return this.__iterator(ITERATE_KEYS);
        },
        map: function(mapper, context) {
          return reify(this, mapFactory(this, mapper, context));
        },
        reduce: function(reducer, initialReduction, context) {
          assertNotInfinite(this.size);
          var reduction;
          var useFirst;
          if (arguments.length < 2) {
            useFirst = true;
          } else {
            reduction = initialReduction;
          }
          this.__iterate(function(v2, k, c) {
            if (useFirst) {
              useFirst = false;
              reduction = v2;
            } else {
              reduction = reducer.call(context, reduction, v2, k, c);
            }
          });
          return reduction;
        },
        reduceRight: function(reducer, initialReduction, context) {
          var reversed = this.toKeyedSeq().reverse();
          return reversed.reduce.apply(reversed, arguments);
        },
        reverse: function() {
          return reify(this, reverseFactory(this, true));
        },
        slice: function(begin, end) {
          return reify(this, sliceFactory(this, begin, end, true));
        },
        some: function(predicate, context) {
          return !this.every(not(predicate), context);
        },
        sort: function(comparator) {
          return reify(this, sortFactory(this, comparator));
        },
        values: function() {
          return this.__iterator(ITERATE_VALUES);
        },
        butLast: function() {
          return this.slice(0, -1);
        },
        isEmpty: function() {
          return this.size !== void 0 ? this.size === 0 : !this.some(function() {
            return true;
          });
        },
        count: function(predicate, context) {
          return ensureSize(predicate ? this.toSeq().filter(predicate, context) : this);
        },
        countBy: function(grouper, context) {
          return countByFactory(this, grouper, context);
        },
        equals: function(other) {
          return deepEqual(this, other);
        },
        entrySeq: function() {
          var iterable = this;
          if (iterable._cache) {
            return new ArraySeq(iterable._cache);
          }
          var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
          entriesSequence.fromEntrySeq = function() {
            return iterable.toSeq();
          };
          return entriesSequence;
        },
        filterNot: function(predicate, context) {
          return this.filter(not(predicate), context);
        },
        findEntry: function(predicate, context, notSetValue) {
          var found = notSetValue;
          this.__iterate(function(v2, k, c) {
            if (predicate.call(context, v2, k, c)) {
              found = [k, v2];
              return false;
            }
          });
          return found;
        },
        findKey: function(predicate, context) {
          var entry = this.findEntry(predicate, context);
          return entry && entry[0];
        },
        findLast: function(predicate, context, notSetValue) {
          return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
        },
        findLastEntry: function(predicate, context, notSetValue) {
          return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
        },
        findLastKey: function(predicate, context) {
          return this.toKeyedSeq().reverse().findKey(predicate, context);
        },
        first: function() {
          return this.find(returnTrue);
        },
        flatMap: function(mapper, context) {
          return reify(this, flatMapFactory(this, mapper, context));
        },
        flatten: function(depth) {
          return reify(this, flattenFactory(this, depth, true));
        },
        fromEntrySeq: function() {
          return new FromEntriesSequence(this);
        },
        get: function(searchKey, notSetValue) {
          return this.find(function(_, key) {
            return is(key, searchKey);
          }, void 0, notSetValue);
        },
        getIn: function(searchKeyPath, notSetValue) {
          var nested = this;
          var iter = forceIterator(searchKeyPath);
          var step;
          while (!(step = iter.next()).done) {
            var key = step.value;
            nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
            if (nested === NOT_SET) {
              return notSetValue;
            }
          }
          return nested;
        },
        groupBy: function(grouper, context) {
          return groupByFactory(this, grouper, context);
        },
        has: function(searchKey) {
          return this.get(searchKey, NOT_SET) !== NOT_SET;
        },
        hasIn: function(searchKeyPath) {
          return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
        },
        isSubset: function(iter) {
          iter = typeof iter.includes === "function" ? iter : Iterable(iter);
          return this.every(function(value) {
            return iter.includes(value);
          });
        },
        isSuperset: function(iter) {
          iter = typeof iter.isSubset === "function" ? iter : Iterable(iter);
          return iter.isSubset(this);
        },
        keyOf: function(searchValue) {
          return this.findKey(function(value) {
            return is(value, searchValue);
          });
        },
        keySeq: function() {
          return this.toSeq().map(keyMapper).toIndexedSeq();
        },
        last: function() {
          return this.toSeq().reverse().first();
        },
        lastKeyOf: function(searchValue) {
          return this.toKeyedSeq().reverse().keyOf(searchValue);
        },
        max: function(comparator) {
          return maxFactory(this, comparator);
        },
        maxBy: function(mapper, comparator) {
          return maxFactory(this, comparator, mapper);
        },
        min: function(comparator) {
          return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
        },
        minBy: function(mapper, comparator) {
          return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
        },
        rest: function() {
          return this.slice(1);
        },
        skip: function(amount) {
          return this.slice(Math.max(0, amount));
        },
        skipLast: function(amount) {
          return reify(this, this.toSeq().reverse().skip(amount).reverse());
        },
        skipWhile: function(predicate, context) {
          return reify(this, skipWhileFactory(this, predicate, context, true));
        },
        skipUntil: function(predicate, context) {
          return this.skipWhile(not(predicate), context);
        },
        sortBy: function(mapper, comparator) {
          return reify(this, sortFactory(this, comparator, mapper));
        },
        take: function(amount) {
          return this.slice(0, Math.max(0, amount));
        },
        takeLast: function(amount) {
          return reify(this, this.toSeq().reverse().take(amount).reverse());
        },
        takeWhile: function(predicate, context) {
          return reify(this, takeWhileFactory(this, predicate, context));
        },
        takeUntil: function(predicate, context) {
          return this.takeWhile(not(predicate), context);
        },
        valueSeq: function() {
          return this.toIndexedSeq();
        },
        hashCode: function() {
          return this.__hash || (this.__hash = hashIterable(this));
        }
      });
      var IterablePrototype = Iterable.prototype;
      IterablePrototype[IS_ITERABLE_SENTINEL] = true;
      IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
      IterablePrototype.__toJS = IterablePrototype.toArray;
      IterablePrototype.__toStringMapper = quoteString;
      IterablePrototype.inspect = IterablePrototype.toSource = function() {
        return this.toString();
      };
      IterablePrototype.chain = IterablePrototype.flatMap;
      IterablePrototype.contains = IterablePrototype.includes;
      mixin(KeyedIterable, {
        flip: function() {
          return reify(this, flipFactory(this));
        },
        mapEntries: function(mapper, context) {
          var this$0 = this;
          var iterations = 0;
          return reify(this, this.toSeq().map(function(v2, k) {
            return mapper.call(context, [k, v2], iterations++, this$0);
          }).fromEntrySeq());
        },
        mapKeys: function(mapper, context) {
          var this$0 = this;
          return reify(this, this.toSeq().flip().map(function(k, v2) {
            return mapper.call(context, k, v2, this$0);
          }).flip());
        }
      });
      var KeyedIterablePrototype = KeyedIterable.prototype;
      KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
      KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
      KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
      KeyedIterablePrototype.__toStringMapper = function(v2, k) {
        return JSON.stringify(k) + ": " + quoteString(v2);
      };
      mixin(IndexedIterable, {
        toKeyedSeq: function() {
          return new ToKeyedSequence(this, false);
        },
        filter: function(predicate, context) {
          return reify(this, filterFactory(this, predicate, context, false));
        },
        findIndex: function(predicate, context) {
          var entry = this.findEntry(predicate, context);
          return entry ? entry[0] : -1;
        },
        indexOf: function(searchValue) {
          var key = this.keyOf(searchValue);
          return key === void 0 ? -1 : key;
        },
        lastIndexOf: function(searchValue) {
          var key = this.lastKeyOf(searchValue);
          return key === void 0 ? -1 : key;
        },
        reverse: function() {
          return reify(this, reverseFactory(this, false));
        },
        slice: function(begin, end) {
          return reify(this, sliceFactory(this, begin, end, false));
        },
        splice: function(index, removeNum) {
          var numArgs = arguments.length;
          removeNum = Math.max(removeNum | 0, 0);
          if (numArgs === 0 || numArgs === 2 && !removeNum) {
            return this;
          }
          index = resolveBegin(index, index < 0 ? this.count() : this.size);
          var spliced = this.slice(0, index);
          return reify(this, numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum)));
        },
        findLastIndex: function(predicate, context) {
          var entry = this.findLastEntry(predicate, context);
          return entry ? entry[0] : -1;
        },
        first: function() {
          return this.get(0);
        },
        flatten: function(depth) {
          return reify(this, flattenFactory(this, depth, false));
        },
        get: function(index, notSetValue) {
          index = wrapIndex(this, index);
          return index < 0 || (this.size === Infinity || this.size !== void 0 && index > this.size) ? notSetValue : this.find(function(_, key) {
            return key === index;
          }, void 0, notSetValue);
        },
        has: function(index) {
          index = wrapIndex(this, index);
          return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.indexOf(index) !== -1);
        },
        interpose: function(separator) {
          return reify(this, interposeFactory(this, separator));
        },
        interleave: function() {
          var iterables = [this].concat(arrCopy(arguments));
          var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
          var interleaved = zipped.flatten(true);
          if (zipped.size) {
            interleaved.size = zipped.size * iterables.length;
          }
          return reify(this, interleaved);
        },
        keySeq: function() {
          return Range(0, this.size);
        },
        last: function() {
          return this.get(-1);
        },
        skipWhile: function(predicate, context) {
          return reify(this, skipWhileFactory(this, predicate, context, false));
        },
        zip: function() {
          var iterables = [this].concat(arrCopy(arguments));
          return reify(this, zipWithFactory(this, defaultZipper, iterables));
        },
        zipWith: function(zipper) {
          var iterables = arrCopy(arguments);
          iterables[0] = this;
          return reify(this, zipWithFactory(this, zipper, iterables));
        }
      });
      IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
      IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;
      mixin(SetIterable, {
        get: function(value, notSetValue) {
          return this.has(value) ? value : notSetValue;
        },
        includes: function(value) {
          return this.has(value);
        },
        keySeq: function() {
          return this.valueSeq();
        }
      });
      SetIterable.prototype.has = IterablePrototype.includes;
      SetIterable.prototype.contains = SetIterable.prototype.includes;
      mixin(KeyedSeq, KeyedIterable.prototype);
      mixin(IndexedSeq, IndexedIterable.prototype);
      mixin(SetSeq, SetIterable.prototype);
      mixin(KeyedCollection, KeyedIterable.prototype);
      mixin(IndexedCollection, IndexedIterable.prototype);
      mixin(SetCollection, SetIterable.prototype);
      function keyMapper(v2, k) {
        return k;
      }
      function entryMapper(v2, k) {
        return [k, v2];
      }
      function not(predicate) {
        return function() {
          return !predicate.apply(this, arguments);
        };
      }
      function neg(predicate) {
        return function() {
          return -predicate.apply(this, arguments);
        };
      }
      function quoteString(value) {
        return typeof value === "string" ? JSON.stringify(value) : String(value);
      }
      function defaultZipper() {
        return arrCopy(arguments);
      }
      function defaultNegComparator(a, b) {
        return a < b ? 1 : a > b ? -1 : 0;
      }
      function hashIterable(iterable) {
        if (iterable.size === Infinity) {
          return 0;
        }
        var ordered = isOrdered(iterable);
        var keyed = isKeyed(iterable);
        var h = ordered ? 1 : 0;
        var size = iterable.__iterate(keyed ? ordered ? function(v2, k) {
          h = 31 * h + hashMerge(hash(v2), hash(k)) | 0;
        } : function(v2, k) {
          h = h + hashMerge(hash(v2), hash(k)) | 0;
        } : ordered ? function(v2) {
          h = 31 * h + hash(v2) | 0;
        } : function(v2) {
          h = h + hash(v2) | 0;
        });
        return murmurHashOfSize(size, h);
      }
      function murmurHashOfSize(size, h) {
        h = imul(h, 3432918353);
        h = imul(h << 15 | h >>> -15, 461845907);
        h = imul(h << 13 | h >>> -13, 5);
        h = (h + 3864292196 | 0) ^ size;
        h = imul(h ^ h >>> 16, 2246822507);
        h = imul(h ^ h >>> 13, 3266489909);
        h = smi(h ^ h >>> 16);
        return h;
      }
      function hashMerge(a, b) {
        return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
      }
      var Immutable2 = {
        Iterable,
        Seq,
        Collection,
        Map: Map2,
        OrderedMap,
        List,
        Stack,
        Set: Set2,
        OrderedSet,
        Record,
        Range,
        Repeat,
        is,
        fromJS
      };
      return Immutable2;
    });
  })(immutable);
  var Immutable = immutable.exports;
  var ANONYMOUS = "<<anonymous>>";
  var ImmutablePropTypes;
  {
    var productionTypeChecker = function productionTypeChecker2() {
      invariant(false, "ImmutablePropTypes type checking code is stripped in production.");
    };
    productionTypeChecker.isRequired = productionTypeChecker;
    var getProductionTypeChecker = function getProductionTypeChecker2() {
      return productionTypeChecker;
    };
    ImmutablePropTypes = {
      listOf: getProductionTypeChecker,
      mapOf: getProductionTypeChecker,
      orderedMapOf: getProductionTypeChecker,
      setOf: getProductionTypeChecker,
      orderedSetOf: getProductionTypeChecker,
      stackOf: getProductionTypeChecker,
      iterableOf: getProductionTypeChecker,
      recordOf: getProductionTypeChecker,
      shape: getProductionTypeChecker,
      contains: getProductionTypeChecker,
      mapContains: getProductionTypeChecker,
      orderedMapContains: getProductionTypeChecker,
      list: productionTypeChecker,
      map: productionTypeChecker,
      orderedMap: productionTypeChecker,
      set: productionTypeChecker,
      orderedSet: productionTypeChecker,
      stack: productionTypeChecker,
      seq: productionTypeChecker,
      record: productionTypeChecker,
      iterable: productionTypeChecker
    };
  }
  ImmutablePropTypes.iterable.indexed = createIterableSubclassTypeChecker("Indexed", Immutable.Iterable.isIndexed);
  ImmutablePropTypes.iterable.keyed = createIterableSubclassTypeChecker("Keyed", Immutable.Iterable.isKeyed);
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      return "object";
    }
    if (propValue instanceof Immutable.Iterable) {
      return "Immutable." + propValue.toSource().split(" ")[0];
    }
    return propType;
  }
  function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
      for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        rest[_key - 6] = arguments[_key];
      }
      propFullName = propFullName || propName;
      componentName = componentName || ANONYMOUS;
      if (props[propName] == null) {
        var locationName = location;
        if (isRequired) {
          return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
        }
      } else {
        return validate.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!immutableClassTypeValidator(propValue)) {
        var propType = getPropType(propValue);
        return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createIterableSubclassTypeChecker(subclassName, validator) {
    return createImmutableTypeChecker("Iterable." + subclassName, function(propValue) {
      return Immutable.Iterable.isIterable(propValue) && validator(propValue);
    });
  }
  var ImmutablePropTypes_1 = ImmutablePropTypes;
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties$1(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _extends$1() {
    _extends$1 = Object.assign || function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends$1.apply(this, arguments);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(arr, i2) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
      arr2[i2] = arr[i2];
    }
    return arr2;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n2 = Object.prototype.toString.call(o).slice(8, -1);
    if (n2 === "Object" && o.constructor)
      n2 = o.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o, minLen);
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _setPrototypeOf(o, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
      o2.__proto__ = p3;
      return o2;
    };
    return _setPrototypeOf(o, p2);
  }
  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _possibleConstructorReturn$1(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  var safeIsNaN = Number.isNaN || function ponyfill(value) {
    return typeof value === "number" && value !== value;
  };
  function isEqual(first, second) {
    if (first === second) {
      return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
      return true;
    }
    return false;
  }
  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }
    for (var i2 = 0; i2 < newInputs.length; i2++) {
      if (!isEqual(newInputs[i2], lastInputs[i2])) {
        return false;
      }
    }
    return true;
  }
  function memoizeOne(resultFn, isEqual2) {
    if (isEqual2 === void 0) {
      isEqual2 = areInputsEqual;
    }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
      var newArgs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i];
      }
      if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
        return lastResult;
      }
      lastResult = resultFn.apply(this, newArgs);
      calledOnce = true;
      lastThis = this;
      lastArgs = newArgs;
      return lastResult;
    }
    return memoized;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    }
    for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
      if (document.styleSheets[i2].ownerNode === tag) {
        return document.styleSheets[i2];
      }
    }
  }
  function createStyleElement(options) {
    var tag = document.createElement("style");
    tag.setAttribute("data-emotion", options.key);
    if (options.nonce !== void 0) {
      tag.setAttribute("nonce", options.nonce);
    }
    tag.appendChild(document.createTextNode(""));
    return tag;
  }
  var StyleSheet = /* @__PURE__ */ function() {
    function StyleSheet2(options) {
      this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce;
      this.key = options.key;
      this.container = options.container;
      this.before = null;
    }
    var _proto = StyleSheet2.prototype;
    _proto.insert = function insert(rule) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
        var _tag = createStyleElement(this);
        var before;
        if (this.tags.length === 0) {
          before = this.before;
        } else {
          before = this.tags[this.tags.length - 1].nextSibling;
        }
        this.container.insertBefore(_tag, before);
        this.tags.push(_tag);
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64;
          sheet.insertRule(rule, isImportRule ? 0 : sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function(tag) {
        return tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet2;
  }();
  function stylis_min(W2) {
    function M2(d, c, e, h, a) {
      for (var m = 0, b = 0, v2 = 0, n2 = 0, q2, g, x2 = 0, K2 = 0, k, u2 = k = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e.length, J2 = B3 - 1, y2, f = "", p2 = "", F3 = "", G3 = "", C2; l2 < B3; ) {
        g = e.charCodeAt(l2);
        l2 === J2 && b + n2 + v2 + m !== 0 && (b !== 0 && (g = b === 47 ? 10 : 47), n2 = v2 = m = 0, B3++, J2++);
        if (b + n2 + v2 + m === 0) {
          if (l2 === J2 && (0 < r2 && (f = f.replace(N2, "")), 0 < f.trim().length)) {
            switch (g) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                f += e.charAt(l2);
            }
            g = 59;
          }
          switch (g) {
            case 123:
              f = f.trim();
              q2 = f.charCodeAt(0);
              k = 1;
              for (t2 = ++l2; l2 < B3; ) {
                switch (g = e.charCodeAt(l2)) {
                  case 123:
                    k++;
                    break;
                  case 125:
                    k--;
                    break;
                  case 47:
                    switch (g = e.charCodeAt(l2 + 1)) {
                      case 42:
                      case 47:
                        a: {
                          for (u2 = l2 + 1; u2 < J2; ++u2) {
                            switch (e.charCodeAt(u2)) {
                              case 47:
                                if (g === 42 && e.charCodeAt(u2 - 1) === 42 && l2 + 2 !== u2) {
                                  l2 = u2 + 1;
                                  break a;
                                }
                                break;
                              case 10:
                                if (g === 47) {
                                  l2 = u2 + 1;
                                  break a;
                                }
                            }
                          }
                          l2 = u2;
                        }
                    }
                    break;
                  case 91:
                    g++;
                  case 40:
                    g++;
                  case 34:
                  case 39:
                    for (; l2++ < J2 && e.charCodeAt(l2) !== g; ) {
                    }
                }
                if (k === 0)
                  break;
                l2++;
              }
              k = e.substring(t2, l2);
              q2 === 0 && (q2 = (f = f.replace(ca, "").trim()).charCodeAt(0));
              switch (q2) {
                case 64:
                  0 < r2 && (f = f.replace(N2, ""));
                  g = f.charCodeAt(1);
                  switch (g) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      r2 = c;
                      break;
                    default:
                      r2 = O2;
                  }
                  k = M2(c, r2, k, g, a + 1);
                  t2 = k.length;
                  0 < A2 && (r2 = X2(O2, f, I2), C2 = H2(3, k, r2, c, D2, z2, t2, g, a, h), f = r2.join(""), C2 !== void 0 && (t2 = (k = C2.trim()).length) === 0 && (g = 0, k = ""));
                  if (0 < t2)
                    switch (g) {
                      case 115:
                        f = f.replace(da2, ea2);
                      case 100:
                      case 109:
                      case 45:
                        k = f + "{" + k + "}";
                        break;
                      case 107:
                        f = f.replace(fa2, "$1 $2");
                        k = f + "{" + k + "}";
                        k = w2 === 1 || w2 === 2 && L2("@" + k, 3) ? "@-webkit-" + k + "@" + k : "@" + k;
                        break;
                      default:
                        k = f + k, h === 112 && (k = (p2 += k, ""));
                    }
                  else
                    k = "";
                  break;
                default:
                  k = M2(c, X2(c, f, I2), k, h, a + 1);
              }
              F3 += k;
              k = I2 = r2 = u2 = q2 = 0;
              f = "";
              g = e.charCodeAt(++l2);
              break;
            case 125:
            case 59:
              f = (0 < r2 ? f.replace(N2, "") : f).trim();
              if (1 < (t2 = f.length))
                switch (u2 === 0 && (q2 = f.charCodeAt(0), q2 === 45 || 96 < q2 && 123 > q2) && (t2 = (f = f.replace(" ", ":")).length), 0 < A2 && (C2 = H2(1, f, c, d, D2, z2, p2.length, h, a, h)) !== void 0 && (t2 = (f = C2.trim()).length) === 0 && (f = "\0\0"), q2 = f.charCodeAt(0), g = f.charCodeAt(1), q2) {
                  case 0:
                    break;
                  case 64:
                    if (g === 105 || g === 99) {
                      G3 += f + e.charAt(l2);
                      break;
                    }
                  default:
                    f.charCodeAt(t2 - 1) !== 58 && (p2 += P2(f, q2, g, f.charCodeAt(2)));
                }
              I2 = r2 = u2 = q2 = 0;
              f = "";
              g = e.charCodeAt(++l2);
          }
        }
        switch (g) {
          case 13:
          case 10:
            b === 47 ? b = 0 : 1 + q2 === 0 && h !== 107 && 0 < f.length && (r2 = 1, f += "\0");
            0 < A2 * Y2 && H2(0, f, c, d, D2, z2, p2.length, h, a, h);
            z2 = 1;
            D2++;
            break;
          case 59:
          case 125:
            if (b + n2 + v2 + m === 0) {
              z2++;
              break;
            }
          default:
            z2++;
            y2 = e.charAt(l2);
            switch (g) {
              case 9:
              case 32:
                if (n2 + m + b === 0)
                  switch (x2) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y2 = "";
                      break;
                    default:
                      g !== 32 && (y2 = " ");
                  }
                break;
              case 0:
                y2 = "\\0";
                break;
              case 12:
                y2 = "\\f";
                break;
              case 11:
                y2 = "\\v";
                break;
              case 38:
                n2 + b + m === 0 && (r2 = I2 = 1, y2 = "\f" + y2);
                break;
              case 108:
                if (n2 + b + m + E2 === 0 && 0 < u2)
                  switch (l2 - u2) {
                    case 2:
                      x2 === 112 && e.charCodeAt(l2 - 3) === 58 && (E2 = x2);
                    case 8:
                      K2 === 111 && (E2 = K2);
                  }
                break;
              case 58:
                n2 + b + m === 0 && (u2 = l2);
                break;
              case 44:
                b + v2 + n2 + m === 0 && (r2 = 1, y2 += "\r");
                break;
              case 34:
              case 39:
                b === 0 && (n2 = n2 === g ? 0 : n2 === 0 ? g : n2);
                break;
              case 91:
                n2 + b + v2 === 0 && m++;
                break;
              case 93:
                n2 + b + v2 === 0 && m--;
                break;
              case 41:
                n2 + b + m === 0 && v2--;
                break;
              case 40:
                if (n2 + b + m === 0) {
                  if (q2 === 0)
                    switch (2 * x2 + 3 * K2) {
                      case 533:
                        break;
                      default:
                        q2 = 1;
                    }
                  v2++;
                }
                break;
              case 64:
                b + v2 + n2 + m + u2 + k === 0 && (k = 1);
                break;
              case 42:
              case 47:
                if (!(0 < n2 + m + v2))
                  switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l2 + 1)) {
                        case 235:
                          b = 47;
                          break;
                        case 220:
                          t2 = l2, b = 42;
                      }
                      break;
                    case 42:
                      g === 47 && x2 === 42 && t2 + 2 !== l2 && (e.charCodeAt(t2 + 2) === 33 && (p2 += e.substring(t2, l2 + 1)), y2 = "", b = 0);
                  }
            }
            b === 0 && (f += y2);
        }
        K2 = x2;
        x2 = g;
        l2++;
      }
      t2 = p2.length;
      if (0 < t2) {
        r2 = c;
        if (0 < A2 && (C2 = H2(2, p2, r2, d, D2, z2, t2, h, a, h), C2 !== void 0 && (p2 = C2).length === 0))
          return G3 + p2 + F3;
        p2 = r2.join(",") + "{" + p2 + "}";
        if (w2 * E2 !== 0) {
          w2 !== 2 || L2(p2, 2) || (E2 = 0);
          switch (E2) {
            case 111:
              p2 = p2.replace(ha2, ":-moz-$1") + p2;
              break;
            case 112:
              p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
          }
          E2 = 0;
        }
      }
      return G3 + p2 + F3;
    }
    function X2(d, c, e) {
      var h = c.trim().split(ia2);
      c = h;
      var a = h.length, m = d.length;
      switch (m) {
        case 0:
        case 1:
          var b = 0;
          for (d = m === 0 ? "" : d[0] + " "; b < a; ++b) {
            c[b] = Z2(d, c[b], e).trim();
          }
          break;
        default:
          var v2 = b = 0;
          for (c = []; b < a; ++b) {
            for (var n2 = 0; n2 < m; ++n2) {
              c[v2++] = Z2(d[n2] + " ", h[b], e).trim();
            }
          }
      }
      return c;
    }
    function Z2(d, c, e) {
      var h = c.charCodeAt(0);
      33 > h && (h = (c = c.trim()).charCodeAt(0));
      switch (h) {
        case 38:
          return c.replace(F2, "$1" + d.trim());
        case 58:
          return d.trim() + c.replace(F2, "$1" + d.trim());
        default:
          if (0 < 1 * e && 0 < c.indexOf("\f"))
            return c.replace(F2, (d.charCodeAt(0) === 58 ? "" : "$1") + d.trim());
      }
      return d + c;
    }
    function P2(d, c, e, h) {
      var a = d + ";", m = 2 * c + 3 * e + 4 * h;
      if (m === 944) {
        d = a.indexOf(":", 9) + 1;
        var b = a.substring(d, a.length - 1).trim();
        b = a.substring(0, d).trim() + b + ";";
        return w2 === 1 || w2 === 2 && L2(b, 1) ? "-webkit-" + b + b : b;
      }
      if (w2 === 0 || w2 === 2 && !L2(a, 1))
        return a;
      switch (m) {
        case 1015:
          return a.charCodeAt(10) === 97 ? "-webkit-" + a + a : a;
        case 951:
          return a.charCodeAt(3) === 116 ? "-webkit-" + a + a : a;
        case 963:
          return a.charCodeAt(5) === 110 ? "-webkit-" + a + a : a;
        case 1009:
          if (a.charCodeAt(4) !== 100)
            break;
        case 969:
        case 942:
          return "-webkit-" + a + a;
        case 978:
          return "-webkit-" + a + "-moz-" + a + a;
        case 1019:
        case 983:
          return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
        case 883:
          if (a.charCodeAt(8) === 45)
            return "-webkit-" + a + a;
          if (0 < a.indexOf("image-set(", 11))
            return a.replace(ja2, "$1-webkit-$2") + a;
          break;
        case 932:
          if (a.charCodeAt(4) === 45)
            switch (a.charCodeAt(5)) {
              case 103:
                return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
              case 115:
                return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
              case 98:
                return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a;
            }
          return "-webkit-" + a + "-ms-" + a + a;
        case 964:
          return "-webkit-" + a + "-ms-flex-" + a + a;
        case 1023:
          if (a.charCodeAt(8) !== 99)
            break;
          b = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
          return "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a;
        case 1005:
          return ka2.test(a) ? a.replace(aa2, ":-webkit-") + a.replace(aa2, ":-moz-") + a : a;
        case 1e3:
          b = a.substring(13).trim();
          c = b.indexOf("-") + 1;
          switch (b.charCodeAt(0) + b.charCodeAt(c)) {
            case 226:
              b = a.replace(G2, "tb");
              break;
            case 232:
              b = a.replace(G2, "tb-rl");
              break;
            case 220:
              b = a.replace(G2, "lr");
              break;
            default:
              return a;
          }
          return "-webkit-" + a + "-ms-" + b + a;
        case 1017:
          if (a.indexOf("sticky", 9) === -1)
            break;
        case 975:
          c = (a = d).length - 10;
          b = (a.charCodeAt(c) === 33 ? a.substring(0, c) : a).substring(d.indexOf(":", 7) + 1).trim();
          switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
            case 203:
              if (111 > b.charCodeAt(8))
                break;
            case 115:
              a = a.replace(b, "-webkit-" + b) + ";" + a;
              break;
            case 207:
            case 102:
              a = a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") + ";" + a.replace(b, "-webkit-" + b) + ";" + a.replace(b, "-ms-" + b + "box") + ";" + a;
          }
          return a + ";";
        case 938:
          if (a.charCodeAt(5) === 45)
            switch (a.charCodeAt(6)) {
              case 105:
                return b = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a;
              case 115:
                return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba2, "") + a;
              default:
                return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(ba2, "") + a;
            }
          break;
        case 973:
        case 989:
          if (a.charCodeAt(3) !== 45 || a.charCodeAt(4) === 122)
            break;
        case 931:
        case 953:
          if (la2.test(d) === true)
            return (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0) === 115 ? P2(d.replace("stretch", "fill-available"), c, e, h).replace(":fill-available", ":stretch") : a.replace(b, "-webkit-" + b) + a.replace(b, "-moz-" + b.replace("fill-", "")) + a;
          break;
        case 962:
          if (a = "-webkit-" + a + (a.charCodeAt(5) === 102 ? "-ms-" + a : "") + a, e + h === 211 && a.charCodeAt(13) === 105 && 0 < a.indexOf("transform", 10))
            return a.substring(0, a.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a;
      }
      return a;
    }
    function L2(d, c) {
      var e = d.indexOf(c === 1 ? ":" : "{"), h = d.substring(0, c !== 3 ? e : 10);
      e = d.substring(e + 1, d.length - 1);
      return R2(c !== 2 ? h : h.replace(na2, "$1"), e, c);
    }
    function ea2(d, c) {
      var e = P2(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
      return e !== c + ";" ? e.replace(oa2, " or ($1)").substring(4) : "(" + c + ")";
    }
    function H2(d, c, e, h, a, m, b, v2, n2, q2) {
      for (var g = 0, x2 = c, w3; g < A2; ++g) {
        switch (w3 = S2[g].call(B2, d, x2, e, h, a, m, b, v2, n2, q2)) {
          case void 0:
          case false:
          case true:
          case null:
            break;
          default:
            x2 = w3;
        }
      }
      if (x2 !== c)
        return x2;
    }
    function T2(d) {
      switch (d) {
        case void 0:
        case null:
          A2 = S2.length = 0;
          break;
        default:
          if (typeof d === "function")
            S2[A2++] = d;
          else if (typeof d === "object")
            for (var c = 0, e = d.length; c < e; ++c) {
              T2(d[c]);
            }
          else
            Y2 = !!d | 0;
      }
      return T2;
    }
    function U2(d) {
      d = d.prefix;
      d !== void 0 && (R2 = null, d ? typeof d !== "function" ? w2 = 1 : (w2 = 2, R2 = d) : w2 = 0);
      return U2;
    }
    function B2(d, c) {
      var e = d;
      33 > e.charCodeAt(0) && (e = e.trim());
      V2 = e;
      e = [V2];
      if (0 < A2) {
        var h = H2(-1, c, e, e, D2, z2, 0, 0, 0, 0);
        h !== void 0 && typeof h === "string" && (c = h);
      }
      var a = M2(O2, e, c, 0, 0);
      0 < A2 && (h = H2(-2, a, e, e, D2, z2, a.length, 0, 0, 0), h !== void 0 && (a = h));
      V2 = "";
      E2 = 0;
      z2 = D2 = 1;
      return a;
    }
    var ca = /^\0+/g, N2 = /[\0\r\f]/g, aa2 = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha2 = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba2 = /-self|flex-/g, na2 = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
    B2.use = T2;
    B2.set = U2;
    W2 !== void 0 && U2(W2);
    return B2;
  }
  var delimiter = "/*|*/";
  var needle = delimiter + "}";
  function toSheet(block) {
    if (block) {
      Sheet.current.insert(block + "}");
    }
  }
  var Sheet = {
    current: null
  };
  var ruleSheet = function ruleSheet2(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      case 1: {
        switch (content.charCodeAt(0)) {
          case 64: {
            Sheet.current.insert(content + ";");
            return "";
          }
          case 108: {
            if (content.charCodeAt(2) === 98) {
              return "";
            }
          }
        }
        break;
      }
      case 2: {
        if (ns === 0)
          return content + delimiter;
        break;
      }
      case 3: {
        switch (ns) {
          case 102:
          case 112: {
            Sheet.current.insert(selectors[0] + content);
            return "";
          }
          default: {
            return content + (at === 0 ? delimiter : "");
          }
        }
      }
      case -2: {
        content.split(needle).forEach(toSheet);
      }
    }
  };
  var createCache = function createCache2(options) {
    if (options === void 0)
      options = {};
    var key = options.key || "css";
    var stylisOptions;
    if (options.prefix !== void 0) {
      stylisOptions = {
        prefix: options.prefix
      };
    }
    var stylis = new stylis_min(stylisOptions);
    var inserted = {};
    var container;
    {
      container = options.container || document.head;
      var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
      Array.prototype.forEach.call(nodes, function(node) {
        var attrib = node.getAttribute("data-emotion-" + key);
        attrib.split(" ").forEach(function(id2) {
          inserted[id2] = true;
        });
        if (node.parentNode !== container) {
          container.appendChild(node);
        }
      });
    }
    var _insert;
    {
      stylis.use(options.stylisPlugins)(ruleSheet);
      _insert = function insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        Sheet.current = sheet;
        stylis(selector, serialized.styles);
        if (shouldCache) {
          cache.inserted[name] = true;
        }
      };
    }
    var cache = {
      key,
      sheet: new StyleSheet({
        key,
        container,
        nonce: options.nonce,
        speedy: options.speedy
      }),
      nonce: options.nonce,
      inserted,
      registered: {},
      insert: _insert
    };
    return cache;
  };
  var isBrowser = true;
  function getRegisteredStyles(registered, registeredStyles, classNames2) {
    var rawClassName = "";
    classNames2.split(" ").forEach(function(className) {
      if (registered[className] !== void 0) {
        registeredStyles.push(registered[className]);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var insertStyles = function insertStyles2(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) {
      cache.registered[className] = serialized.styles;
    }
    if (cache.inserted[serialized.name] === void 0) {
      var current = serialized;
      do {
        cache.insert("." + className, current, cache.sheet, true);
        current = current.next;
      } while (current !== void 0);
    }
  };
  function murmur2(str) {
    var h = 0;
    var k, i2 = 0, len = str.length;
    for (; len >= 4; ++i2, len -= 4) {
      k = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
      k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
      k ^= k >>> 24;
      h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i2 + 2) & 255) << 16;
      case 2:
        h ^= (str.charCodeAt(i2 + 1) & 255) << 8;
      case 1:
        h ^= str.charCodeAt(i2) & 255;
        h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    }
    h ^= h >>> 13;
    h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  function memoize$2(fn) {
    var cache = {};
    return function(arg) {
      if (cache[arg] === void 0)
        cache[arg] = fn(arg);
      return cache[arg];
    };
  }
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty2(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue2(value) {
    return value != null && typeof value !== "boolean";
  };
  var processStyleName = memoize$2(function(styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
  });
  var processStyleValue = function processStyleValue2(key, value) {
    switch (key) {
      case "animation":
      case "animationName": {
        if (typeof value === "string") {
          return value.replace(animationRegex, function(match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
      return value + "px";
    }
    return value;
  };
  function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return "";
    }
    if (interpolation.__emotion_styles !== void 0) {
      return interpolation;
    }
    switch (typeof interpolation) {
      case "boolean": {
        return "";
      }
      case "object": {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }
        if (interpolation.styles !== void 0) {
          var next = interpolation.next;
          if (next !== void 0) {
            while (next !== void 0) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }
          var styles2 = interpolation.styles + ";";
          return styles2;
        }
        return createStringFromObject(mergedProps, registered, interpolation);
      }
      case "function": {
        if (mergedProps !== void 0) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        }
        break;
      }
    }
    if (registered == null) {
      return interpolation;
    }
    var cached = registered[interpolation];
    return cached !== void 0 && !couldBeSelectorInterpolation ? cached : interpolation;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = "";
    if (Array.isArray(obj)) {
      for (var i2 = 0; i2 < obj.length; i2++) {
        string += handleInterpolation(mergedProps, registered, obj[i2], false);
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];
        if (typeof value !== "object") {
          if (registered != null && registered[value] !== void 0) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === "NO_COMPONENT_SELECTOR" && false) {
            throw new Error("Component selectors can only be used in conjunction with babel-plugin-emotion.");
          }
          if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value, false);
            switch (_key) {
              case "animation":
              case "animationName": {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }
              default: {
                string += _key + "{" + interpolated + "}";
              }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
  var cursor;
  var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
      return args[0];
    }
    var stringMode = true;
    var styles2 = "";
    cursor = void 0;
    var strings = args[0];
    if (strings == null || strings.raw === void 0) {
      stringMode = false;
      styles2 += handleInterpolation(mergedProps, registered, strings, false);
    } else {
      styles2 += strings[0];
    }
    for (var i2 = 1; i2 < args.length; i2++) {
      styles2 += handleInterpolation(mergedProps, registered, args[i2], styles2.charCodeAt(styles2.length - 1) === 46);
      if (stringMode) {
        styles2 += strings[i2];
      }
    }
    labelPattern.lastIndex = 0;
    var identifierName = "";
    var match;
    while ((match = labelPattern.exec(styles2)) !== null) {
      identifierName += "-" + match[1];
    }
    var name = murmur2(styles2) + identifierName;
    return {
      name,
      styles: styles2,
      next: cursor
    };
  };
  var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
  var EmotionCacheContext = /* @__PURE__ */ react.exports.createContext(typeof HTMLElement !== "undefined" ? createCache() : null);
  var ThemeContext = /* @__PURE__ */ react.exports.createContext({});
  var CacheProvider = EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache2(func) {
    var render2 = function render3(props, ref) {
      return /* @__PURE__ */ react.exports.createElement(EmotionCacheContext.Consumer, null, function(cache) {
        return func(props, cache, ref);
      });
    };
    return /* @__PURE__ */ react.exports.forwardRef(render2);
  };
  var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  var createEmotionProps = function createEmotionProps2(type, props) {
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty$4.call(props, key)) {
        newProps[key] = props[key];
      }
    }
    newProps[typePropName] = type;
    return newProps;
  };
  var render = function render2(cache, props, theme, ref) {
    var cssProp = theme === null ? props.css : props.css(theme);
    if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) {
      cssProp = cache.registered[cssProp];
    }
    var type = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles);
    insertStyles(cache, serialized, typeof type === "string");
    className += cache.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwnProperty$4.call(props, key) && key !== "css" && key !== typePropName && true) {
        newProps[key] = props[key];
      }
    }
    newProps.ref = ref;
    newProps.className = className;
    var ele = /* @__PURE__ */ react.exports.createElement(type, newProps);
    return ele;
  };
  var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
    if (typeof props.css === "function") {
      return /* @__PURE__ */ react.exports.createElement(ThemeContext.Consumer, null, function(theme) {
        return render(cache, props, theme, ref);
      });
    }
    return render(cache, props, null, ref);
  });
  function css$2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }
  var jsx = function jsx2(type, props) {
    var args = arguments;
    if (props == null || !hasOwnProperty$4.call(props, "css")) {
      return react.exports.createElement.apply(void 0, args);
    }
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = Emotion;
    createElementArgArray[1] = createEmotionProps(type, props);
    for (var i2 = 2; i2 < argsLength; i2++) {
      createElementArgArray[i2] = args[i2];
    }
    return react.exports.createElement.apply(null, createElementArgArray);
  };
  var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
    var styles2 = props.styles;
    if (typeof styles2 === "function") {
      return /* @__PURE__ */ react.exports.createElement(ThemeContext.Consumer, null, function(theme) {
        var serialized2 = serializeStyles([styles2(theme)]);
        return /* @__PURE__ */ react.exports.createElement(InnerGlobal, {
          serialized: serialized2,
          cache
        });
      });
    }
    var serialized = serializeStyles([styles2]);
    return /* @__PURE__ */ react.exports.createElement(InnerGlobal, {
      serialized,
      cache
    });
  });
  var InnerGlobal = /* @__PURE__ */ function(_React$Component) {
    _inheritsLoose(InnerGlobal2, _React$Component);
    function InnerGlobal2(props, context, updater) {
      return _React$Component.call(this, props, context, updater) || this;
    }
    var _proto = InnerGlobal2.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.sheet = new StyleSheet({
        key: this.props.cache.key + "-global",
        nonce: this.props.cache.sheet.nonce,
        container: this.props.cache.sheet.container
      });
      var node = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
      if (node !== null) {
        this.sheet.tags.push(node);
      }
      if (this.props.cache.sheet.tags.length) {
        this.sheet.before = this.props.cache.sheet.tags[0];
      }
      this.insertStyles();
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (prevProps.serialized.name !== this.props.serialized.name) {
        this.insertStyles();
      }
    };
    _proto.insertStyles = function insertStyles$1() {
      if (this.props.serialized.next !== void 0) {
        insertStyles(this.props.cache, this.props.serialized.next, true);
      }
      if (this.sheet.tags.length) {
        var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
        this.sheet.before = element;
        this.sheet.flush();
      }
      this.props.cache.insert("", this.props.serialized, this.sheet, false);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.sheet.flush();
    };
    _proto.render = function render2() {
      return null;
    };
    return InnerGlobal2;
  }(react.exports.Component);
  var keyframes = function keyframes2() {
    var insertable = css$2.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString2() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var classnames = function classnames2(args) {
    var len = args.length;
    var i2 = 0;
    var cls = "";
    for (; i2 < len; i2++) {
      var arg = args[i2];
      if (arg == null)
        continue;
      var toAdd = void 0;
      switch (typeof arg) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(arg)) {
            toAdd = classnames2(arg);
          } else {
            toAdd = "";
            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += " ");
                toAdd += k;
              }
            }
          }
          break;
        }
        default: {
          toAdd = arg;
        }
      }
      if (toAdd) {
        cls && (cls += " ");
        cls += toAdd;
      }
    }
    return cls;
  };
  function merge(registered, css2, className) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
    if (registeredStyles.length < 2) {
      return className;
    }
    return rawClassName + css2(registeredStyles);
  }
  var ClassNames = withEmotionCache(function(props, context) {
    return /* @__PURE__ */ react.exports.createElement(ThemeContext.Consumer, null, function(theme) {
      var hasRendered = false;
      var css2 = function css3() {
        if (hasRendered && false) {
          throw new Error("css can only be used during render");
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        var serialized = serializeStyles(args, context.registered);
        {
          insertStyles(context, serialized, false);
        }
        return context.key + "-" + serialized.name;
      };
      var cx = function cx2() {
        if (hasRendered && false) {
          throw new Error("cx can only be used during render");
        }
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return merge(context.registered, css2, classnames(args));
      };
      var content = {
        css: css2,
        cx,
        theme
      };
      var ele = props.children(content);
      hasRendered = true;
      return ele;
    });
  });
  var core_browser_esm = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    ClassNames,
    Global,
    createElement: jsx,
    jsx,
    keyframes,
    CacheProvider,
    ThemeContext,
    withEmotionCache,
    css: css$2
  });
  var reactDom = { exports: {} };
  var reactDom_production_min = {};
  var scheduler = { exports: {} };
  var scheduler_production_min = {};
  /** @license React v0.19.1
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  (function(exports3) {
    var f, g, h, k, l2;
    if (typeof window === "undefined" || typeof MessageChannel !== "function") {
      var p2 = null, q2 = null, t2 = function() {
        if (p2 !== null)
          try {
            var a = exports3.unstable_now();
            p2(true, a);
            p2 = null;
          } catch (b) {
            throw setTimeout(t2, 0), b;
          }
      }, u2 = Date.now();
      exports3.unstable_now = function() {
        return Date.now() - u2;
      };
      f = function(a) {
        p2 !== null ? setTimeout(f, 0, a) : (p2 = a, setTimeout(t2, 0));
      };
      g = function(a, b) {
        q2 = setTimeout(a, b);
      };
      h = function() {
        clearTimeout(q2);
      };
      k = function() {
        return false;
      };
      l2 = exports3.unstable_forceFrameRate = function() {
      };
    } else {
      var w2 = window.performance, x2 = window.Date, y2 = window.setTimeout, z2 = window.clearTimeout;
      if (typeof console !== "undefined") {
        var A2 = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
        typeof A2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      }
      if (typeof w2 === "object" && typeof w2.now === "function")
        exports3.unstable_now = function() {
          return w2.now();
        };
      else {
        var B2 = x2.now();
        exports3.unstable_now = function() {
          return x2.now() - B2;
        };
      }
      var C2 = false, D2 = null, E2 = -1, F2 = 5, G2 = 0;
      k = function() {
        return exports3.unstable_now() >= G2;
      };
      l2 = function() {
      };
      exports3.unstable_forceFrameRate = function(a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      var H2 = new MessageChannel(), I2 = H2.port2;
      H2.port1.onmessage = function() {
        if (D2 !== null) {
          var a = exports3.unstable_now();
          G2 = a + F2;
          try {
            D2(true, a) ? I2.postMessage(null) : (C2 = false, D2 = null);
          } catch (b) {
            throw I2.postMessage(null), b;
          }
        } else
          C2 = false;
      };
      f = function(a) {
        D2 = a;
        C2 || (C2 = true, I2.postMessage(null));
      };
      g = function(a, b) {
        E2 = y2(function() {
          a(exports3.unstable_now());
        }, b);
      };
      h = function() {
        z2(E2);
        E2 = -1;
      };
    }
    function J2(a, b) {
      var c = a.length;
      a.push(b);
      a:
        for (; ; ) {
          var d = c - 1 >>> 1, e = a[d];
          if (e !== void 0 && 0 < K2(e, b))
            a[d] = b, a[c] = e, c = d;
          else
            break a;
        }
    }
    function L2(a) {
      a = a[0];
      return a === void 0 ? null : a;
    }
    function M2(a) {
      var b = a[0];
      if (b !== void 0) {
        var c = a.pop();
        if (c !== b) {
          a[0] = c;
          a:
            for (var d = 0, e = a.length; d < e; ) {
              var m = 2 * (d + 1) - 1, n2 = a[m], v2 = m + 1, r2 = a[v2];
              if (n2 !== void 0 && 0 > K2(n2, c))
                r2 !== void 0 && 0 > K2(r2, n2) ? (a[d] = r2, a[v2] = c, d = v2) : (a[d] = n2, a[m] = c, d = m);
              else if (r2 !== void 0 && 0 > K2(r2, c))
                a[d] = r2, a[v2] = c, d = v2;
              else
                break a;
            }
        }
        return b;
      }
      return null;
    }
    function K2(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return c !== 0 ? c : a.id - b.id;
    }
    var N2 = [], O2 = [], P2 = 1, Q2 = null, R2 = 3, S2 = false, T2 = false, U2 = false;
    function V2(a) {
      for (var b = L2(O2); b !== null; ) {
        if (b.callback === null)
          M2(O2);
        else if (b.startTime <= a)
          M2(O2), b.sortIndex = b.expirationTime, J2(N2, b);
        else
          break;
        b = L2(O2);
      }
    }
    function W2(a) {
      U2 = false;
      V2(a);
      if (!T2)
        if (L2(N2) !== null)
          T2 = true, f(X2);
        else {
          var b = L2(O2);
          b !== null && g(W2, b.startTime - a);
        }
    }
    function X2(a, b) {
      T2 = false;
      U2 && (U2 = false, h());
      S2 = true;
      var c = R2;
      try {
        V2(b);
        for (Q2 = L2(N2); Q2 !== null && (!(Q2.expirationTime > b) || a && !k()); ) {
          var d = Q2.callback;
          if (d !== null) {
            Q2.callback = null;
            R2 = Q2.priorityLevel;
            var e = d(Q2.expirationTime <= b);
            b = exports3.unstable_now();
            typeof e === "function" ? Q2.callback = e : Q2 === L2(N2) && M2(N2);
            V2(b);
          } else
            M2(N2);
          Q2 = L2(N2);
        }
        if (Q2 !== null)
          var m = true;
        else {
          var n2 = L2(O2);
          n2 !== null && g(W2, n2.startTime - b);
          m = false;
        }
        return m;
      } finally {
        Q2 = null, R2 = c, S2 = false;
      }
    }
    function Y2(a) {
      switch (a) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var Z2 = l2;
    exports3.unstable_IdlePriority = 5;
    exports3.unstable_ImmediatePriority = 1;
    exports3.unstable_LowPriority = 4;
    exports3.unstable_NormalPriority = 3;
    exports3.unstable_Profiling = null;
    exports3.unstable_UserBlockingPriority = 2;
    exports3.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports3.unstable_continueExecution = function() {
      T2 || S2 || (T2 = true, f(X2));
    };
    exports3.unstable_getCurrentPriorityLevel = function() {
      return R2;
    };
    exports3.unstable_getFirstCallbackNode = function() {
      return L2(N2);
    };
    exports3.unstable_next = function(a) {
      switch (R2) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = R2;
      }
      var c = R2;
      R2 = b;
      try {
        return a();
      } finally {
        R2 = c;
      }
    };
    exports3.unstable_pauseExecution = function() {
    };
    exports3.unstable_requestPaint = Z2;
    exports3.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = R2;
      R2 = a;
      try {
        return b();
      } finally {
        R2 = c;
      }
    };
    exports3.unstable_scheduleCallback = function(a, b, c) {
      var d = exports3.unstable_now();
      if (typeof c === "object" && c !== null) {
        var e = c.delay;
        e = typeof e === "number" && 0 < e ? d + e : d;
        c = typeof c.timeout === "number" ? c.timeout : Y2(a);
      } else
        c = Y2(a), e = d;
      c = e + c;
      a = { id: P2++, callback: b, priorityLevel: a, startTime: e, expirationTime: c, sortIndex: -1 };
      e > d ? (a.sortIndex = e, J2(O2, a), L2(N2) === null && a === L2(O2) && (U2 ? h() : U2 = true, g(W2, e - d))) : (a.sortIndex = c, J2(N2, a), T2 || S2 || (T2 = true, f(X2)));
      return a;
    };
    exports3.unstable_shouldYield = function() {
      var a = exports3.unstable_now();
      V2(a);
      var b = L2(N2);
      return b !== Q2 && Q2 !== null && b !== null && b.callback !== null && b.startTime <= a && b.expirationTime < Q2.expirationTime || k();
    };
    exports3.unstable_wrapCallback = function(a) {
      var b = R2;
      return function() {
        var c = R2;
        R2 = b;
        try {
          return a.apply(this, arguments);
        } finally {
          R2 = c;
        }
      };
    };
  })(scheduler_production_min);
  {
    scheduler.exports = scheduler_production_min;
  }
  /** @license React v16.14.0
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = react.exports, n = objectAssign, r = scheduler.exports;
  function u(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!aa)
    throw Error(u(227));
  function ba(a, b, c, d, e, f, g, h, k) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l2);
    } catch (m) {
      this.onError(m);
    }
  }
  var da = false, ea = null, fa = false, ha = null, ia = { onError: function(a) {
    da = true;
    ea = a;
  } };
  function ja(a, b, c, d, e, f, g, h, k) {
    da = false;
    ea = null;
    ba.apply(ia, arguments);
  }
  function ka(a, b, c, d, e, f, g, h, k) {
    ja.apply(this, arguments);
    if (da) {
      if (da) {
        var l2 = ea;
        da = false;
        ea = null;
      } else
        throw Error(u(198));
      fa || (fa = true, ha = l2);
    }
  }
  var la = null, ma = null, na = null;
  function oa(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = na(c);
    ka(d, b, void 0, a);
    a.currentTarget = null;
  }
  var pa = null, qa = {};
  function ra() {
    if (pa)
      for (var a in qa) {
        var b = qa[a], c = pa.indexOf(a);
        if (!(-1 < c))
          throw Error(u(96, a));
        if (!sa[c]) {
          if (!b.extractEvents)
            throw Error(u(97, a));
          sa[c] = b;
          c = b.eventTypes;
          for (var d in c) {
            var e = void 0;
            var f = c[d], g = b, h = d;
            if (ta.hasOwnProperty(h))
              throw Error(u(99, h));
            ta[h] = f;
            var k = f.phasedRegistrationNames;
            if (k) {
              for (e in k)
                k.hasOwnProperty(e) && ua(k[e], g, h);
              e = true;
            } else
              f.registrationName ? (ua(f.registrationName, g, h), e = true) : e = false;
            if (!e)
              throw Error(u(98, d, a));
          }
        }
      }
  }
  function ua(a, b, c) {
    if (va[a])
      throw Error(u(100, a));
    va[a] = b;
    wa[a] = b.eventTypes[c].dependencies;
  }
  var sa = [], ta = {}, va = {}, wa = {};
  function xa(a) {
    var b = false, c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        if (!qa.hasOwnProperty(c) || qa[c] !== d) {
          if (qa[c])
            throw Error(u(102, c));
          qa[c] = d;
          b = true;
        }
      }
    b && ra();
  }
  var ya = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), za = null, Aa = null, Ba = null;
  function Ca(a) {
    if (a = ma(a)) {
      if (typeof za !== "function")
        throw Error(u(280));
      var b = a.stateNode;
      b && (b = la(b), za(a.stateNode, a.type, b));
    }
  }
  function Da(a) {
    Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
  }
  function Ea() {
    if (Aa) {
      var a = Aa, b = Ba;
      Ba = Aa = null;
      Ca(a);
      if (b)
        for (a = 0; a < b.length; a++)
          Ca(b[a]);
    }
  }
  function Fa(a, b) {
    return a(b);
  }
  function Ga(a, b, c, d, e) {
    return a(b, c, d, e);
  }
  function Ha() {
  }
  var Ia = Fa, Ja = false, Ka = false;
  function La() {
    if (Aa !== null || Ba !== null)
      Ha(), Ea();
  }
  function Ma(a, b, c) {
    if (Ka)
      return a(b, c);
    Ka = true;
    try {
      return Ia(a, b, c);
    } finally {
      Ka = false, La();
    }
  }
  var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oa = Object.prototype.hasOwnProperty, Pa = {}, Qa = {};
  function Ra(a) {
    if (Oa.call(Qa, a))
      return true;
    if (Oa.call(Pa, a))
      return false;
    if (Na.test(a))
      return Qa[a] = true;
    Pa[a] = true;
    return false;
  }
  function Sa(a, b, c, d) {
    if (c !== null && c.type === 0)
      return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d)
          return false;
        if (c !== null)
          return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return a !== "data-" && a !== "aria-";
      default:
        return false;
    }
  }
  function Ta(a, b, c, d) {
    if (b === null || typeof b === "undefined" || Sa(a, b, c, d))
      return true;
    if (d)
      return false;
    if (c !== null)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return b === false;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return false;
  }
  function v(a, b, c, d, e, f) {
    this.acceptsBooleans = b === 2 || b === 3 || b === 4;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
  }
  var C = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    C[a] = new v(a, 0, false, a, null, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    C[b] = new v(b, 1, false, a[1], null, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    C[a] = new v(a, 2, false, a.toLowerCase(), null, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    C[a] = new v(a, 2, false, a, null, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    C[a] = new v(a, 3, false, a.toLowerCase(), null, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    C[a] = new v(a, 3, true, a, null, false);
  });
  ["capture", "download"].forEach(function(a) {
    C[a] = new v(a, 4, false, a, null, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    C[a] = new v(a, 6, false, a, null, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    C[a] = new v(a, 5, false, a.toLowerCase(), null, false);
  });
  var Ua = /[\-:]([a-z])/g;
  function Va(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(Ua, Va);
    C[b] = new v(b, 1, false, a, null, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(Ua, Va);
    C[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(Ua, Va);
    C[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    C[a] = new v(a, 1, false, a.toLowerCase(), null, false);
  });
  C.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    C[a] = new v(a, 1, false, a.toLowerCase(), null, true);
  });
  var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null });
  Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
  function Xa(a, b, c, d) {
    var e = C.hasOwnProperty(b) ? C[b] : null;
    var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
    f || (Ta(b, c, e, d) && (c = null), d || e === null ? Ra(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
  }
  var Ya = /^(.*)[\\\/]/, E = typeof Symbol === "function" && Symbol.for, Za = E ? Symbol.for("react.element") : 60103, $a = E ? Symbol.for("react.portal") : 60106, ab = E ? Symbol.for("react.fragment") : 60107, bb = E ? Symbol.for("react.strict_mode") : 60108, cb = E ? Symbol.for("react.profiler") : 60114, db = E ? Symbol.for("react.provider") : 60109, eb = E ? Symbol.for("react.context") : 60110, fb = E ? Symbol.for("react.concurrent_mode") : 60111, gb = E ? Symbol.for("react.forward_ref") : 60112, hb = E ? Symbol.for("react.suspense") : 60113, ib = E ? Symbol.for("react.suspense_list") : 60120, jb = E ? Symbol.for("react.memo") : 60115, kb = E ? Symbol.for("react.lazy") : 60116, lb = E ? Symbol.for("react.block") : 60121, mb = typeof Symbol === "function" && Symbol.iterator;
  function nb(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = mb && a[mb] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function ob(a) {
    if (a._status === -1) {
      a._status = 0;
      var b = a._ctor;
      b = b();
      a._result = b;
      b.then(function(b2) {
        a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
      }, function(b2) {
        a._status === 0 && (a._status = 2, a._result = b2);
      });
    }
  }
  function pb(a) {
    if (a == null)
      return null;
    if (typeof a === "function")
      return a.displayName || a.name || null;
    if (typeof a === "string")
      return a;
    switch (a) {
      case ab:
        return "Fragment";
      case $a:
        return "Portal";
      case cb:
        return "Profiler";
      case bb:
        return "StrictMode";
      case hb:
        return "Suspense";
      case ib:
        return "SuspenseList";
    }
    if (typeof a === "object")
      switch (a.$$typeof) {
        case eb:
          return "Context.Consumer";
        case db:
          return "Context.Provider";
        case gb:
          var b = a.render;
          b = b.displayName || b.name || "";
          return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
        case jb:
          return pb(a.type);
        case lb:
          return pb(a.render);
        case kb:
          if (a = a._status === 1 ? a._result : null)
            return pb(a);
      }
    return null;
  }
  function qb(a) {
    var b = "";
    do {
      a:
        switch (a.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var c = "";
            break a;
          default:
            var d = a._debugOwner, e = a._debugSource, f = pb(a.type);
            c = null;
            d && (c = pb(d.type));
            d = f;
            f = "";
            e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
            c = "\n    in " + (d || "Unknown") + f;
        }
      b += c;
      a = a.return;
    } while (a);
    return b;
  }
  function rb(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return a;
      default:
        return "";
    }
  }
  function sb(a) {
    var b = a.type;
    return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
  }
  function tb(a) {
    var b = sb(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function xb(a) {
    a._valueTracker || (a._valueTracker = tb(a));
  }
  function yb(a) {
    if (!a)
      return false;
    var b = a._valueTracker;
    if (!b)
      return true;
    var c = b.getValue();
    var d = "";
    a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function zb(a, b) {
    var c = b.checked;
    return n({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked });
  }
  function Ab(a, b) {
    var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
    c = rb(b.value != null ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
  }
  function Bb(a, b) {
    b = b.checked;
    b != null && Xa(a, "checked", b, false);
  }
  function Cb(a, b) {
    Bb(a, b);
    var c = rb(b.value), d = b.type;
    if (c != null)
      if (d === "number") {
        if (c === 0 && a.value === "" || a.value != c)
          a.value = "" + c;
      } else
        a.value !== "" + c && (a.value = "" + c);
    else if (d === "submit" || d === "reset") {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? Db(a, b.type, c) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
    b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
  }
  function Eb(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
        return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    c !== "" && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    c !== "" && (a.name = c);
  }
  function Db(a, b, c) {
    if (b !== "number" || a.ownerDocument.activeElement !== a)
      c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  function Fb(a) {
    var b = "";
    aa.Children.forEach(a, function(a2) {
      a2 != null && (b += a2);
    });
    return b;
  }
  function Gb(a, b) {
    a = n({ children: void 0 }, b);
    if (b = Fb(b.children))
      a.children = b;
    return a;
  }
  function Hb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++)
        b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++)
        e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + rb(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        b !== null || a[e].disabled || (b = a[e]);
      }
      b !== null && (b.selected = true);
    }
  }
  function Ib(a, b) {
    if (b.dangerouslySetInnerHTML != null)
      throw Error(u(91));
    return n({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function Jb(a, b) {
    var c = b.value;
    if (c == null) {
      c = b.children;
      b = b.defaultValue;
      if (c != null) {
        if (b != null)
          throw Error(u(92));
        if (Array.isArray(c)) {
          if (!(1 >= c.length))
            throw Error(u(93));
          c = c[0];
        }
        b = c;
      }
      b == null && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: rb(c) };
  }
  function Kb(a, b) {
    var c = rb(b.value), d = rb(b.defaultValue);
    c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
    d != null && (a.defaultValue = "" + d);
  }
  function Lb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
  }
  var Mb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Nb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ob(a, b) {
    return a == null || a === "http://www.w3.org/1999/xhtml" ? Nb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
  }
  var Pb, Qb = function(a) {
    return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  }(function(a, b) {
    if (a.namespaceURI !== Mb.svg || "innerHTML" in a)
      a.innerHTML = b;
    else {
      Pb = Pb || document.createElement("div");
      Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = Pb.firstChild; a.firstChild; )
        a.removeChild(a.firstChild);
      for (; b.firstChild; )
        a.appendChild(b.firstChild);
    }
  });
  function Rb(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && c.nodeType === 3) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  function Sb(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var Tb = { animationend: Sb("Animation", "AnimationEnd"), animationiteration: Sb("Animation", "AnimationIteration"), animationstart: Sb("Animation", "AnimationStart"), transitionend: Sb("Transition", "TransitionEnd") }, Ub = {}, Vb = {};
  ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
  function Wb(a) {
    if (Ub[a])
      return Ub[a];
    if (!Tb[a])
      return a;
    var b = Tb[a], c;
    for (c in b)
      if (b.hasOwnProperty(c) && c in Vb)
        return Ub[a] = b[c];
    return a;
  }
  var Xb = Wb("animationend"), Yb = Wb("animationiteration"), Zb = Wb("animationstart"), $b = Wb("transitionend"), ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bc = new (typeof WeakMap === "function" ? WeakMap : Map)();
  function cc(a) {
    var b = bc.get(a);
    b === void 0 && (b = new Map(), bc.set(a, b));
    return b;
  }
  function dc(a) {
    var b = a, c = a;
    if (a.alternate)
      for (; b.return; )
        b = b.return;
    else {
      a = b;
      do
        b = a, (b.effectTag & 1026) !== 0 && (c = b.return), a = b.return;
      while (a);
    }
    return b.tag === 3 ? c : null;
  }
  function ec(a) {
    if (a.tag === 13) {
      var b = a.memoizedState;
      b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
      if (b !== null)
        return b.dehydrated;
    }
    return null;
  }
  function fc(a) {
    if (dc(a) !== a)
      throw Error(u(188));
  }
  function gc(a) {
    var b = a.alternate;
    if (!b) {
      b = dc(a);
      if (b === null)
        throw Error(u(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (e === null)
        break;
      var f = e.alternate;
      if (f === null) {
        d = e.return;
        if (d !== null) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c)
            return fc(e), a;
          if (f === d)
            return fc(e), b;
          f = f.sibling;
        }
        throw Error(u(188));
      }
      if (c.return !== d.return)
        c = e, d = f;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g)
            throw Error(u(189));
        }
      }
      if (c.alternate !== d)
        throw Error(u(190));
    }
    if (c.tag !== 3)
      throw Error(u(188));
    return c.stateNode.current === c ? a : b;
  }
  function hc(a) {
    a = gc(a);
    if (!a)
      return null;
    for (var b = a; ; ) {
      if (b.tag === 5 || b.tag === 6)
        return b;
      if (b.child)
        b.child.return = b, b = b.child;
      else {
        if (b === a)
          break;
        for (; !b.sibling; ) {
          if (!b.return || b.return === a)
            return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function ic(a, b) {
    if (b == null)
      throw Error(u(30));
    if (a == null)
      return b;
    if (Array.isArray(a)) {
      if (Array.isArray(b))
        return a.push.apply(a, b), a;
      a.push(b);
      return a;
    }
    return Array.isArray(b) ? [a].concat(b) : [a, b];
  }
  function jc(a, b, c) {
    Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
  }
  var kc = null;
  function lc(a) {
    if (a) {
      var b = a._dispatchListeners, c = a._dispatchInstances;
      if (Array.isArray(b))
        for (var d = 0; d < b.length && !a.isPropagationStopped(); d++)
          oa(a, b[d], c[d]);
      else
        b && oa(a, b, c);
      a._dispatchListeners = null;
      a._dispatchInstances = null;
      a.isPersistent() || a.constructor.release(a);
    }
  }
  function mc(a) {
    a !== null && (kc = ic(kc, a));
    a = kc;
    kc = null;
    if (a) {
      jc(a, lc);
      if (kc)
        throw Error(u(95));
      if (fa)
        throw a = ha, fa = false, ha = null, a;
    }
  }
  function nc(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return a.nodeType === 3 ? a.parentNode : a;
  }
  function oc(a) {
    if (!ya)
      return false;
    a = "on" + a;
    var b = a in document;
    b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = typeof b[a] === "function");
    return b;
  }
  var pc = [];
  function qc(a) {
    a.topLevelType = null;
    a.nativeEvent = null;
    a.targetInst = null;
    a.ancestors.length = 0;
    10 > pc.length && pc.push(a);
  }
  function rc(a, b, c, d) {
    if (pc.length) {
      var e = pc.pop();
      e.topLevelType = a;
      e.eventSystemFlags = d;
      e.nativeEvent = b;
      e.targetInst = c;
      return e;
    }
    return { topLevelType: a, eventSystemFlags: d, nativeEvent: b, targetInst: c, ancestors: [] };
  }
  function sc(a) {
    var b = a.targetInst, c = b;
    do {
      if (!c) {
        a.ancestors.push(c);
        break;
      }
      var d = c;
      if (d.tag === 3)
        d = d.stateNode.containerInfo;
      else {
        for (; d.return; )
          d = d.return;
        d = d.tag !== 3 ? null : d.stateNode.containerInfo;
      }
      if (!d)
        break;
      b = c.tag;
      b !== 5 && b !== 6 || a.ancestors.push(c);
      c = tc(d);
    } while (c);
    for (c = 0; c < a.ancestors.length; c++) {
      b = a.ancestors[c];
      var e = nc(a.nativeEvent);
      d = a.topLevelType;
      var f = a.nativeEvent, g = a.eventSystemFlags;
      c === 0 && (g |= 64);
      for (var h = null, k = 0; k < sa.length; k++) {
        var l2 = sa[k];
        l2 && (l2 = l2.extractEvents(d, b, f, e, g)) && (h = ic(h, l2));
      }
      mc(h);
    }
  }
  function uc(a, b, c) {
    if (!c.has(a)) {
      switch (a) {
        case "scroll":
          vc(b, "scroll", true);
          break;
        case "focus":
        case "blur":
          vc(b, "focus", true);
          vc(b, "blur", true);
          c.set("blur", null);
          c.set("focus", null);
          break;
        case "cancel":
        case "close":
          oc(a) && vc(b, a, true);
          break;
        case "invalid":
        case "submit":
        case "reset":
          break;
        default:
          ac.indexOf(a) === -1 && F(a, b);
      }
      c.set(a, null);
    }
  }
  var wc, xc, yc, zc = false, Ac = [], Bc = null, Cc = null, Dc = null, Ec = new Map(), Fc = new Map(), Gc = [], Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
  function Jc(a, b) {
    var c = cc(b);
    Hc.forEach(function(a2) {
      uc(a2, b, c);
    });
    Ic.forEach(function(a2) {
      uc(a2, b, c);
    });
  }
  function Kc(a, b, c, d, e) {
    return { blockedOn: a, topLevelType: b, eventSystemFlags: c | 32, nativeEvent: e, container: d };
  }
  function Lc(a, b) {
    switch (a) {
      case "focus":
      case "blur":
        Bc = null;
        break;
      case "dragenter":
      case "dragleave":
        Cc = null;
        break;
      case "mouseover":
      case "mouseout":
        Dc = null;
        break;
      case "pointerover":
      case "pointerout":
        Ec.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Fc.delete(b.pointerId);
    }
  }
  function Mc(a, b, c, d, e, f) {
    if (a === null || a.nativeEvent !== f)
      return a = Kc(b, c, d, e, f), b !== null && (b = Nc(b), b !== null && xc(b)), a;
    a.eventSystemFlags |= d;
    return a;
  }
  function Oc(a, b, c, d, e) {
    switch (b) {
      case "focus":
        return Bc = Mc(Bc, a, b, c, d, e), true;
      case "dragenter":
        return Cc = Mc(Cc, a, b, c, d, e), true;
      case "mouseover":
        return Dc = Mc(Dc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Ec.set(f, Mc(Ec.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Pc(a) {
    var b = tc(a.target);
    if (b !== null) {
      var c = dc(b);
      if (c !== null) {
        if (b = c.tag, b === 13) {
          if (b = ec(c), b !== null) {
            a.blockedOn = b;
            r.unstable_runWithPriority(a.priority, function() {
              yc(c);
            });
            return;
          }
        } else if (b === 3 && c.stateNode.hydrate) {
          a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Qc(a) {
    if (a.blockedOn !== null)
      return false;
    var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    if (b !== null) {
      var c = Nc(b);
      c !== null && xc(c);
      a.blockedOn = b;
      return false;
    }
    return true;
  }
  function Sc(a, b, c) {
    Qc(a) && c.delete(b);
  }
  function Tc() {
    for (zc = false; 0 < Ac.length; ) {
      var a = Ac[0];
      if (a.blockedOn !== null) {
        a = Nc(a.blockedOn);
        a !== null && wc(a);
        break;
      }
      var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
      b !== null ? a.blockedOn = b : Ac.shift();
    }
    Bc !== null && Qc(Bc) && (Bc = null);
    Cc !== null && Qc(Cc) && (Cc = null);
    Dc !== null && Qc(Dc) && (Dc = null);
    Ec.forEach(Sc);
    Fc.forEach(Sc);
  }
  function Uc(a, b) {
    a.blockedOn === b && (a.blockedOn = null, zc || (zc = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
  }
  function Vc(a) {
    function b(b2) {
      return Uc(b2, a);
    }
    if (0 < Ac.length) {
      Uc(Ac[0], a);
      for (var c = 1; c < Ac.length; c++) {
        var d = Ac[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    Bc !== null && Uc(Bc, a);
    Cc !== null && Uc(Cc, a);
    Dc !== null && Uc(Dc, a);
    Ec.forEach(b);
    Fc.forEach(b);
    for (c = 0; c < Gc.length; c++)
      d = Gc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Gc.length && (c = Gc[0], c.blockedOn === null); )
      Pc(c), c.blockedOn === null && Gc.shift();
  }
  var Wc = {}, Yc = new Map(), Zc = new Map(), $c = [
    "abort",
    "abort",
    Xb,
    "animationEnd",
    Yb,
    "animationIteration",
    Zb,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    $b,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function ad(a, b) {
    for (var c = 0; c < a.length; c += 2) {
      var d = a[c], e = a[c + 1], f = "on" + (e[0].toUpperCase() + e.slice(1));
      f = { phasedRegistrationNames: { bubbled: f, captured: f + "Capture" }, dependencies: [d], eventPriority: b };
      Zc.set(d, b);
      Yc.set(d, f);
      Wc[e] = f;
    }
  }
  ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
  ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
  ad($c, 2);
  for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++)
    Zc.set(bd[cd], 0);
  var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
  function F(a, b) {
    vc(b, a, false);
  }
  function vc(a, b, c) {
    var d = Zc.get(b);
    switch (d === void 0 ? 2 : d) {
      case 0:
        d = gd.bind(null, b, 1, a);
        break;
      case 1:
        d = hd.bind(null, b, 1, a);
        break;
      default:
        d = id.bind(null, b, 1, a);
    }
    c ? a.addEventListener(b, d, true) : a.addEventListener(b, d, false);
  }
  function gd(a, b, c, d) {
    Ja || Ha();
    var e = id, f = Ja;
    Ja = true;
    try {
      Ga(e, a, b, c, d);
    } finally {
      (Ja = f) || La();
    }
  }
  function hd(a, b, c, d) {
    ed(dd, id.bind(null, a, b, c, d));
  }
  function id(a, b, c, d) {
    if (fd)
      if (0 < Ac.length && -1 < Hc.indexOf(a))
        a = Kc(null, a, b, c, d), Ac.push(a);
      else {
        var e = Rc(a, b, c, d);
        if (e === null)
          Lc(a, d);
        else if (-1 < Hc.indexOf(a))
          a = Kc(e, a, b, c, d), Ac.push(a);
        else if (!Oc(e, a, b, c, d)) {
          Lc(a, d);
          a = rc(a, d, null, b);
          try {
            Ma(sc, a);
          } finally {
            qc(a);
          }
        }
      }
  }
  function Rc(a, b, c, d) {
    c = nc(d);
    c = tc(c);
    if (c !== null) {
      var e = dc(c);
      if (e === null)
        c = null;
      else {
        var f = e.tag;
        if (f === 13) {
          c = ec(e);
          if (c !== null)
            return c;
          c = null;
        } else if (f === 3) {
          if (e.stateNode.hydrate)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          c = null;
        } else
          e !== c && (c = null);
      }
    }
    a = rc(a, d, c, b);
    try {
      Ma(sc, a);
    } finally {
      qc(a);
    }
    return null;
  }
  var jd = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, kd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(jd).forEach(function(a) {
    kd.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      jd[b] = jd[a];
    });
  });
  function ld(a, b, c) {
    return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
  }
  function md(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = c.indexOf("--") === 0, e = ld(c, b[c], d);
        c === "float" && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
  }
  var nd = n({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function od(a, b) {
    if (b) {
      if (nd[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
        throw Error(u(137, a, ""));
      if (b.dangerouslySetInnerHTML != null) {
        if (b.children != null)
          throw Error(u(60));
        if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
          throw Error(u(61));
      }
      if (b.style != null && typeof b.style !== "object")
        throw Error(u(62, ""));
    }
  }
  function pd(a, b) {
    if (a.indexOf("-") === -1)
      return typeof b.is === "string";
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var qd = Mb.html;
  function rd(a, b) {
    a = a.nodeType === 9 || a.nodeType === 11 ? a : a.ownerDocument;
    var c = cc(a);
    b = wa[b];
    for (var d = 0; d < b.length; d++)
      uc(b[d], a, c);
  }
  function sd() {
  }
  function td(a) {
    a = a || (typeof document !== "undefined" ? document : void 0);
    if (typeof a === "undefined")
      return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function ud(a) {
    for (; a && a.firstChild; )
      a = a.firstChild;
    return a;
  }
  function vd(a, b) {
    var c = ud(a);
    a = 0;
    for (var d; c; ) {
      if (c.nodeType === 3) {
        d = a + c.textContent.length;
        if (a <= b && d >= b)
          return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = ud(c);
    }
  }
  function wd(a, b) {
    return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function xd() {
    for (var a = window, b = td(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = typeof b.contentWindow.location.href === "string";
      } catch (d) {
        c = false;
      }
      if (c)
        a = b.contentWindow;
      else
        break;
      b = td(a.document);
    }
    return b;
  }
  function yd(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
  }
  var zd = "$", Ad = "/$", Bd = "$?", Cd = "$!", Dd = null, Ed = null;
  function Fd(a, b) {
    switch (a) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!b.autoFocus;
    }
    return false;
  }
  function Gd(a, b) {
    return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
  }
  var Hd = typeof setTimeout === "function" ? setTimeout : void 0, Id = typeof clearTimeout === "function" ? clearTimeout : void 0;
  function Jd(a) {
    for (; a != null; a = a.nextSibling) {
      var b = a.nodeType;
      if (b === 1 || b === 3)
        break;
    }
    return a;
  }
  function Kd(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (a.nodeType === 8) {
        var c = a.data;
        if (c === zd || c === Cd || c === Bd) {
          if (b === 0)
            return a;
          b--;
        } else
          c === Ad && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Ld = Math.random().toString(36).slice(2), Md = "__reactInternalInstance$" + Ld, Nd = "__reactEventHandlers$" + Ld, Od = "__reactContainere$" + Ld;
  function tc(a) {
    var b = a[Md];
    if (b)
      return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[Od] || c[Md]) {
        c = b.alternate;
        if (b.child !== null || c !== null && c.child !== null)
          for (a = Kd(a); a !== null; ) {
            if (c = a[Md])
              return c;
            a = Kd(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Nc(a) {
    a = a[Md] || a[Od];
    return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
  }
  function Pd(a) {
    if (a.tag === 5 || a.tag === 6)
      return a.stateNode;
    throw Error(u(33));
  }
  function Qd(a) {
    return a[Nd] || null;
  }
  function Rd(a) {
    do
      a = a.return;
    while (a && a.tag !== 5);
    return a ? a : null;
  }
  function Sd(a, b) {
    var c = a.stateNode;
    if (!c)
      return null;
    var d = la(c);
    if (!d)
      return null;
    c = d[b];
    a:
      switch (b) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
          a = !d;
          break a;
        default:
          a = false;
      }
    if (a)
      return null;
    if (c && typeof c !== "function")
      throw Error(u(231, b, typeof c));
    return c;
  }
  function Td(a, b, c) {
    if (b = Sd(a, c.dispatchConfig.phasedRegistrationNames[b]))
      c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a);
  }
  function Ud(a) {
    if (a && a.dispatchConfig.phasedRegistrationNames) {
      for (var b = a._targetInst, c = []; b; )
        c.push(b), b = Rd(b);
      for (b = c.length; 0 < b--; )
        Td(c[b], "captured", a);
      for (b = 0; b < c.length; b++)
        Td(c[b], "bubbled", a);
    }
  }
  function Vd(a, b, c) {
    a && c && c.dispatchConfig.registrationName && (b = Sd(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = ic(c._dispatchListeners, b), c._dispatchInstances = ic(c._dispatchInstances, a));
  }
  function Wd(a) {
    a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
  }
  function Xd(a) {
    jc(a, Ud);
  }
  var Yd = null, Zd = null, $d = null;
  function ae() {
    if ($d)
      return $d;
    var a, b = Zd, c = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++)
      ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
      ;
    return $d = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function be() {
    return true;
  }
  function ce() {
    return false;
  }
  function G(a, b, c, d) {
    this.dispatchConfig = a;
    this._targetInst = b;
    this.nativeEvent = c;
    a = this.constructor.Interface;
    for (var e in a)
      a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : e === "target" ? this.target = d : this[e] = c[e]);
    this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === false) ? be : ce;
    this.isPropagationStopped = ce;
    return this;
  }
  n(G.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue !== "unknown" && (a.returnValue = false), this.isDefaultPrevented = be);
  }, stopPropagation: function() {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble !== "unknown" && (a.cancelBubble = true), this.isPropagationStopped = be);
  }, persist: function() {
    this.isPersistent = be;
  }, isPersistent: ce, destructor: function() {
    var a = this.constructor.Interface, b;
    for (b in a)
      this[b] = null;
    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = ce;
    this._dispatchInstances = this._dispatchListeners = null;
  } });
  G.Interface = { type: null, target: null, currentTarget: function() {
    return null;
  }, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null };
  G.extend = function(a) {
    function b() {
    }
    function c() {
      return d.apply(this, arguments);
    }
    var d = this;
    b.prototype = d.prototype;
    var e = new b();
    n(e, c.prototype);
    c.prototype = e;
    c.prototype.constructor = c;
    c.Interface = n({}, d.Interface, a);
    c.extend = d.extend;
    de(c);
    return c;
  };
  de(G);
  function ee(a, b, c, d) {
    if (this.eventPool.length) {
      var e = this.eventPool.pop();
      this.call(e, a, b, c, d);
      return e;
    }
    return new this(a, b, c, d);
  }
  function fe(a) {
    if (!(a instanceof this))
      throw Error(u(279));
    a.destructor();
    10 > this.eventPool.length && this.eventPool.push(a);
  }
  function de(a) {
    a.eventPool = [];
    a.getPooled = ee;
    a.release = fe;
  }
  var ge = G.extend({ data: null }), he = G.extend({ data: null }), ie = [9, 13, 27, 32], je = ya && "CompositionEvent" in window, ke = null;
  ya && "documentMode" in document && (ke = document.documentMode);
  var le = ya && "TextEvent" in window && !ke, me = ya && (!je || ke && 8 < ke && 11 >= ke), ne = String.fromCharCode(32), oe = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
    bubbled: "onCompositionStart",
    captured: "onCompositionStartCapture"
  }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } }, pe = false;
  function qe(a, b) {
    switch (a) {
      case "keyup":
        return ie.indexOf(b.keyCode) !== -1;
      case "keydown":
        return b.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "blur":
        return true;
      default:
        return false;
    }
  }
  function re(a) {
    a = a.detail;
    return typeof a === "object" && "data" in a ? a.data : null;
  }
  var se = false;
  function te(a, b) {
    switch (a) {
      case "compositionend":
        return re(b);
      case "keypress":
        if (b.which !== 32)
          return null;
        pe = true;
        return ne;
      case "textInput":
        return a = b.data, a === ne && pe ? null : a;
      default:
        return null;
    }
  }
  function ue(a, b) {
    if (se)
      return a === "compositionend" || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length)
            return b.char;
          if (b.which)
            return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return me && b.locale !== "ko" ? null : b.data;
      default:
        return null;
    }
  }
  var ve = { eventTypes: oe, extractEvents: function(a, b, c, d) {
    var e;
    if (je)
      b: {
        switch (a) {
          case "compositionstart":
            var f = oe.compositionStart;
            break b;
          case "compositionend":
            f = oe.compositionEnd;
            break b;
          case "compositionupdate":
            f = oe.compositionUpdate;
            break b;
        }
        f = void 0;
      }
    else
      se ? qe(a, c) && (f = oe.compositionEnd) : a === "keydown" && c.keyCode === 229 && (f = oe.compositionStart);
    f ? (me && c.locale !== "ko" && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = true)), f = ge.getPooled(f, b, c, d), e ? f.data = e : (e = re(c), e !== null && (f.data = e)), Xd(f), e = f) : e = null;
    (a = le ? te(a, c) : ue(a, c)) ? (b = he.getPooled(oe.beforeInput, b, c, d), b.data = a, Xd(b)) : b = null;
    return e === null ? b : b === null ? e : [e, b];
  } }, we = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function xe(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b === "input" ? !!we[a.type] : b === "textarea" ? true : false;
  }
  var ye = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
  function ze(a, b, c) {
    a = G.getPooled(ye.change, a, b, c);
    a.type = "change";
    Da(c);
    Xd(a);
    return a;
  }
  var Ae = null, Be = null;
  function Ce(a) {
    mc(a);
  }
  function De(a) {
    var b = Pd(a);
    if (yb(b))
      return a;
  }
  function Ee(a, b) {
    if (a === "change")
      return b;
  }
  var Fe = false;
  ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
  function Ge() {
    Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
  }
  function He(a) {
    if (a.propertyName === "value" && De(Be))
      if (a = ze(Be, a, nc(a)), Ja)
        mc(a);
      else {
        Ja = true;
        try {
          Fa(Ce, a);
        } finally {
          Ja = false, La();
        }
      }
  }
  function Ie(a, b, c) {
    a === "focus" ? (Ge(), Ae = b, Be = c, Ae.attachEvent("onpropertychange", He)) : a === "blur" && Ge();
  }
  function Je(a) {
    if (a === "selectionchange" || a === "keyup" || a === "keydown")
      return De(Be);
  }
  function Ke(a, b) {
    if (a === "click")
      return De(b);
  }
  function Le(a, b) {
    if (a === "input" || a === "change")
      return De(b);
  }
  var Me = { eventTypes: ye, _isInputEventSupported: Fe, extractEvents: function(a, b, c, d) {
    var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase();
    if (f === "select" || f === "input" && e.type === "file")
      var g = Ee;
    else if (xe(e))
      if (Fe)
        g = Le;
      else {
        g = Je;
        var h = Ie;
      }
    else
      (f = e.nodeName) && f.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio") && (g = Ke);
    if (g && (g = g(a, b)))
      return ze(g, c, d);
    h && h(a, e, b);
    a === "blur" && (a = e._wrapperState) && a.controlled && e.type === "number" && Db(e, "number", e.value);
  } }, Ne = G.extend({ view: null, detail: null }), Oe = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pe(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : false;
  }
  function Qe() {
    return Pe;
  }
  var Re = 0, Se = 0, Te = false, Ue = false, Ve = Ne.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Qe, button: null, buttons: null, relatedTarget: function(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  }, movementX: function(a) {
    if ("movementX" in a)
      return a.movementX;
    var b = Re;
    Re = a.screenX;
    return Te ? a.type === "mousemove" ? a.screenX - b : 0 : (Te = true, 0);
  }, movementY: function(a) {
    if ("movementY" in a)
      return a.movementY;
    var b = Se;
    Se = a.screenY;
    return Ue ? a.type === "mousemove" ? a.screenY - b : 0 : (Ue = true, 0);
  } }), We = Ve.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), Xe = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  } }, Ye = { eventTypes: Xe, extractEvents: function(a, b, c, d, e) {
    var f = a === "mouseover" || a === "pointerover", g = a === "mouseout" || a === "pointerout";
    if (f && (e & 32) === 0 && (c.relatedTarget || c.fromElement) || !g && !f)
      return null;
    f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
    if (g) {
      if (g = b, b = (b = c.relatedTarget || c.toElement) ? tc(b) : null, b !== null) {
        var h = dc(b);
        if (b !== h || b.tag !== 5 && b.tag !== 6)
          b = null;
      }
    } else
      g = null;
    if (g === b)
      return null;
    if (a === "mouseout" || a === "mouseover") {
      var k = Ve;
      var l2 = Xe.mouseLeave;
      var m = Xe.mouseEnter;
      var p2 = "mouse";
    } else if (a === "pointerout" || a === "pointerover")
      k = We, l2 = Xe.pointerLeave, m = Xe.pointerEnter, p2 = "pointer";
    a = g == null ? f : Pd(g);
    f = b == null ? f : Pd(b);
    l2 = k.getPooled(l2, g, c, d);
    l2.type = p2 + "leave";
    l2.target = a;
    l2.relatedTarget = f;
    c = k.getPooled(m, b, c, d);
    c.type = p2 + "enter";
    c.target = f;
    c.relatedTarget = a;
    d = g;
    p2 = b;
    if (d && p2)
      a: {
        k = d;
        m = p2;
        g = 0;
        for (a = k; a; a = Rd(a))
          g++;
        a = 0;
        for (b = m; b; b = Rd(b))
          a++;
        for (; 0 < g - a; )
          k = Rd(k), g--;
        for (; 0 < a - g; )
          m = Rd(m), a--;
        for (; g--; ) {
          if (k === m || k === m.alternate)
            break a;
          k = Rd(k);
          m = Rd(m);
        }
        k = null;
      }
    else
      k = null;
    m = k;
    for (k = []; d && d !== m; ) {
      g = d.alternate;
      if (g !== null && g === m)
        break;
      k.push(d);
      d = Rd(d);
    }
    for (d = []; p2 && p2 !== m; ) {
      g = p2.alternate;
      if (g !== null && g === m)
        break;
      d.push(p2);
      p2 = Rd(p2);
    }
    for (p2 = 0; p2 < k.length; p2++)
      Vd(k[p2], "bubbled", l2);
    for (p2 = d.length; 0 < p2--; )
      Vd(d[p2], "captured", c);
    return (e & 64) === 0 ? [l2] : [l2, c];
  } };
  function Ze(a, b) {
    return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var $e = typeof Object.is === "function" ? Object.is : Ze, af = Object.prototype.hasOwnProperty;
  function bf(a, b) {
    if ($e(a, b))
      return true;
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
      return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length)
      return false;
    for (d = 0; d < c.length; d++)
      if (!af.call(b, c[d]) || !$e(a[c[d]], b[c[d]]))
        return false;
    return true;
  }
  var cf = ya && "documentMode" in document && 11 >= document.documentMode, df = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, ef = null, ff = null, gf = null, hf = false;
  function jf(a, b) {
    var c = b.window === b ? b.document : b.nodeType === 9 ? b : b.ownerDocument;
    if (hf || ef == null || ef !== td(c))
      return null;
    c = ef;
    "selectionStart" in c && yd(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset });
    return gf && bf(gf, c) ? null : (gf = c, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
  }
  var kf = { eventTypes: df, extractEvents: function(a, b, c, d, e, f) {
    e = f || (d.window === d ? d.document : d.nodeType === 9 ? d : d.ownerDocument);
    if (!(f = !e)) {
      a: {
        e = cc(e);
        f = wa.onSelect;
        for (var g = 0; g < f.length; g++)
          if (!e.has(f[g])) {
            e = false;
            break a;
          }
        e = true;
      }
      f = !e;
    }
    if (f)
      return null;
    e = b ? Pd(b) : window;
    switch (a) {
      case "focus":
        if (xe(e) || e.contentEditable === "true")
          ef = e, ff = b, gf = null;
        break;
      case "blur":
        gf = ff = ef = null;
        break;
      case "mousedown":
        hf = true;
        break;
      case "contextmenu":
      case "mouseup":
      case "dragend":
        return hf = false, jf(c, d);
      case "selectionchange":
        if (cf)
          break;
      case "keydown":
      case "keyup":
        return jf(c, d);
    }
    return null;
  } }, lf = G.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), mf = G.extend({ clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), nf = Ne.extend({ relatedTarget: null });
  function of(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
    a === 10 && (a = 13);
    return 32 <= a || a === 13 ? a : 0;
  }
  var pf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, qf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, rf = Ne.extend({ key: function(a) {
    if (a.key) {
      var b = pf[a.key] || a.key;
      if (b !== "Unidentified")
        return b;
    }
    return a.type === "keypress" ? (a = of(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? qf[a.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Qe, charCode: function(a) {
    return a.type === "keypress" ? of(a) : 0;
  }, keyCode: function(a) {
    return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  }, which: function(a) {
    return a.type === "keypress" ? of(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
  } }), sf = Ve.extend({ dataTransfer: null }), tf = Ne.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Qe }), uf = G.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), vf = Ve.extend({ deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  }, deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null }), wf = { eventTypes: Wc, extractEvents: function(a, b, c, d) {
    var e = Yc.get(a);
    if (!e)
      return null;
    switch (a) {
      case "keypress":
        if (of(c) === 0)
          return null;
      case "keydown":
      case "keyup":
        a = rf;
        break;
      case "blur":
      case "focus":
        a = nf;
        break;
      case "click":
        if (c.button === 2)
          return null;
      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = Ve;
        break;
      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = sf;
        break;
      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = tf;
        break;
      case Xb:
      case Yb:
      case Zb:
        a = lf;
        break;
      case $b:
        a = uf;
        break;
      case "scroll":
        a = Ne;
        break;
      case "wheel":
        a = vf;
        break;
      case "copy":
      case "cut":
      case "paste":
        a = mf;
        break;
      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = We;
        break;
      default:
        a = G;
    }
    b = a.getPooled(e, b, c, d);
    Xd(b);
    return b;
  } };
  if (pa)
    throw Error(u(101));
  pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
  ra();
  var xf = Nc;
  la = Qd;
  ma = xf;
  na = Pd;
  xa({ SimpleEventPlugin: wf, EnterLeaveEventPlugin: Ye, ChangeEventPlugin: Me, SelectEventPlugin: kf, BeforeInputEventPlugin: ve });
  var yf = [], zf = -1;
  function H(a) {
    0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
  }
  function I(a, b) {
    zf++;
    yf[zf] = a.current;
    a.current = b;
  }
  var Af = {}, J = { current: Af }, K = { current: false }, Bf = Af;
  function Cf(a, b) {
    var c = a.type.contextTypes;
    if (!c)
      return Af;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c)
      e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function L(a) {
    a = a.childContextTypes;
    return a !== null && a !== void 0;
  }
  function Df() {
    H(K);
    H(J);
  }
  function Ef(a, b, c) {
    if (J.current !== Af)
      throw Error(u(168));
    I(J, b);
    I(K, c);
  }
  function Ff(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if (typeof d.getChildContext !== "function")
      return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in a))
        throw Error(u(108, pb(b) || "Unknown", e));
    return n({}, c, {}, d);
  }
  function Gf(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
    Bf = J.current;
    I(J, a);
    I(K, K.current);
    return true;
  }
  function Hf(a, b, c) {
    var d = a.stateNode;
    if (!d)
      throw Error(u(169));
    c ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
    I(K, c);
  }
  var If = r.unstable_runWithPriority, Jf = r.unstable_scheduleCallback, Kf = r.unstable_cancelCallback, Lf = r.unstable_requestPaint, Mf = r.unstable_now, Nf = r.unstable_getCurrentPriorityLevel, Of = r.unstable_ImmediatePriority, Pf = r.unstable_UserBlockingPriority, Qf = r.unstable_NormalPriority, Rf = r.unstable_LowPriority, Sf = r.unstable_IdlePriority, Tf = {}, Uf = r.unstable_shouldYield, Vf = Lf !== void 0 ? Lf : function() {
  }, Wf = null, Xf = null, Yf = false, Zf = Mf(), $f = 1e4 > Zf ? Mf : function() {
    return Mf() - Zf;
  };
  function ag() {
    switch (Nf()) {
      case Of:
        return 99;
      case Pf:
        return 98;
      case Qf:
        return 97;
      case Rf:
        return 96;
      case Sf:
        return 95;
      default:
        throw Error(u(332));
    }
  }
  function bg(a) {
    switch (a) {
      case 99:
        return Of;
      case 98:
        return Pf;
      case 97:
        return Qf;
      case 96:
        return Rf;
      case 95:
        return Sf;
      default:
        throw Error(u(332));
    }
  }
  function cg(a, b) {
    a = bg(a);
    return If(a, b);
  }
  function dg(a, b, c) {
    a = bg(a);
    return Jf(a, b, c);
  }
  function eg(a) {
    Wf === null ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
    return Tf;
  }
  function gg() {
    if (Xf !== null) {
      var a = Xf;
      Xf = null;
      Kf(a);
    }
    fg();
  }
  function fg() {
    if (!Yf && Wf !== null) {
      Yf = true;
      var a = 0;
      try {
        var b = Wf;
        cg(99, function() {
          for (; a < b.length; a++) {
            var c = b[a];
            do
              c = c(true);
            while (c !== null);
          }
        });
        Wf = null;
      } catch (c) {
        throw Wf !== null && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c;
      } finally {
        Yf = false;
      }
    }
  }
  function hg(a, b, c) {
    c /= 10;
    return 1073741821 - (((1073741821 - a + b / 10) / c | 0) + 1) * c;
  }
  function ig(a, b) {
    if (a && a.defaultProps) {
      b = n({}, b);
      a = a.defaultProps;
      for (var c in a)
        b[c] === void 0 && (b[c] = a[c]);
    }
    return b;
  }
  var jg = { current: null }, kg = null, lg = null, mg = null;
  function ng() {
    mg = lg = kg = null;
  }
  function og(a) {
    var b = jg.current;
    H(jg);
    a.type._context._currentValue = b;
  }
  function pg(a, b) {
    for (; a !== null; ) {
      var c = a.alternate;
      if (a.childExpirationTime < b)
        a.childExpirationTime = b, c !== null && c.childExpirationTime < b && (c.childExpirationTime = b);
      else if (c !== null && c.childExpirationTime < b)
        c.childExpirationTime = b;
      else
        break;
      a = a.return;
    }
  }
  function qg(a, b) {
    kg = a;
    mg = lg = null;
    a = a.dependencies;
    a !== null && a.firstContext !== null && (a.expirationTime >= b && (rg = true), a.firstContext = null);
  }
  function sg(a, b) {
    if (mg !== a && b !== false && b !== 0) {
      if (typeof b !== "number" || b === 1073741823)
        mg = a, b = 1073741823;
      b = { context: a, observedBits: b, next: null };
      if (lg === null) {
        if (kg === null)
          throw Error(u(308));
        lg = b;
        kg.dependencies = { expirationTime: 0, firstContext: b, responders: null };
      } else
        lg = lg.next = b;
    }
    return a._currentValue;
  }
  var tg = false;
  function ug(a) {
    a.updateQueue = { baseState: a.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
  }
  function vg(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, baseQueue: a.baseQueue, shared: a.shared, effects: a.effects });
  }
  function wg(a, b) {
    a = { expirationTime: a, suspenseConfig: b, tag: 0, payload: null, callback: null, next: null };
    return a.next = a;
  }
  function xg(a, b) {
    a = a.updateQueue;
    if (a !== null) {
      a = a.shared;
      var c = a.pending;
      c === null ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
  }
  function yg(a, b) {
    var c = a.alternate;
    c !== null && vg(c, a);
    a = a.updateQueue;
    c = a.baseQueue;
    c === null ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c.next, c.next = b);
  }
  function zg(a, b, c, d) {
    var e = a.updateQueue;
    tg = false;
    var f = e.baseQueue, g = e.shared.pending;
    if (g !== null) {
      if (f !== null) {
        var h = f.next;
        f.next = g.next;
        g.next = h;
      }
      f = g;
      e.shared.pending = null;
      h = a.alternate;
      h !== null && (h = h.updateQueue, h !== null && (h.baseQueue = g));
    }
    if (f !== null) {
      h = f.next;
      var k = e.baseState, l2 = 0, m = null, p2 = null, x2 = null;
      if (h !== null) {
        var z2 = h;
        do {
          g = z2.expirationTime;
          if (g < d) {
            var ca = { expirationTime: z2.expirationTime, suspenseConfig: z2.suspenseConfig, tag: z2.tag, payload: z2.payload, callback: z2.callback, next: null };
            x2 === null ? (p2 = x2 = ca, m = k) : x2 = x2.next = ca;
            g > l2 && (l2 = g);
          } else {
            x2 !== null && (x2 = x2.next = { expirationTime: 1073741823, suspenseConfig: z2.suspenseConfig, tag: z2.tag, payload: z2.payload, callback: z2.callback, next: null });
            Ag(g, z2.suspenseConfig);
            a: {
              var D2 = a, t2 = z2;
              g = b;
              ca = c;
              switch (t2.tag) {
                case 1:
                  D2 = t2.payload;
                  if (typeof D2 === "function") {
                    k = D2.call(ca, k, g);
                    break a;
                  }
                  k = D2;
                  break a;
                case 3:
                  D2.effectTag = D2.effectTag & -4097 | 64;
                case 0:
                  D2 = t2.payload;
                  g = typeof D2 === "function" ? D2.call(ca, k, g) : D2;
                  if (g === null || g === void 0)
                    break a;
                  k = n({}, k, g);
                  break a;
                case 2:
                  tg = true;
              }
            }
            z2.callback !== null && (a.effectTag |= 32, g = e.effects, g === null ? e.effects = [z2] : g.push(z2));
          }
          z2 = z2.next;
          if (z2 === null || z2 === h)
            if (g = e.shared.pending, g === null)
              break;
            else
              z2 = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
        } while (1);
      }
      x2 === null ? m = k : x2.next = p2;
      e.baseState = m;
      e.baseQueue = x2;
      Bg(l2);
      a.expirationTime = l2;
      a.memoizedState = k;
    }
  }
  function Cg(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (a !== null)
      for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (e !== null) {
          d.callback = null;
          d = e;
          e = c;
          if (typeof d !== "function")
            throw Error(u(191, d));
          d.call(e);
        }
      }
  }
  var Dg = Wa.ReactCurrentBatchConfig, Eg = new aa.Component().refs;
  function Fg(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = c === null || c === void 0 ? b : n({}, b, c);
    a.memoizedState = c;
    a.expirationTime === 0 && (a.updateQueue.baseState = c);
  }
  var Jg = { isMounted: function(a) {
    return (a = a._reactInternalFiber) ? dc(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternalFiber;
    var d = Gg(), e = Dg.suspense;
    d = Hg(d, a, e);
    e = wg(d, e);
    e.payload = b;
    c !== void 0 && c !== null && (e.callback = c);
    xg(a, e);
    Ig(a, d);
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternalFiber;
    var d = Gg(), e = Dg.suspense;
    d = Hg(d, a, e);
    e = wg(d, e);
    e.tag = 1;
    e.payload = b;
    c !== void 0 && c !== null && (e.callback = c);
    xg(a, e);
    Ig(a, d);
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternalFiber;
    var c = Gg(), d = Dg.suspense;
    c = Hg(c, a, d);
    d = wg(c, d);
    d.tag = 2;
    b !== void 0 && b !== null && (d.callback = b);
    xg(a, d);
    Ig(a, c);
  } };
  function Kg(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c, d) || !bf(e, f) : true;
  }
  function Lg(a, b, c) {
    var d = false, e = Af;
    var f = b.contextType;
    typeof f === "object" && f !== null ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Cf(a, e) : Af);
    b = new b(c, f);
    a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
    b.updater = Jg;
    a.stateNode = b;
    b._reactInternalFiber = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Mg(a, b, c, d) {
    a = b.state;
    typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
    typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
  }
  function Ng(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Eg;
    ug(a);
    var f = b.contextType;
    typeof f === "object" && f !== null ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
    zg(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    typeof f === "function" && (Fg(a, b, f, c), e.state = a.memoizedState);
    typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c, e, d), e.state = a.memoizedState);
    typeof e.componentDidMount === "function" && (a.effectTag |= 4);
  }
  var Og = Array.isArray;
  function Pg(a, b, c) {
    a = c.ref;
    if (a !== null && typeof a !== "function" && typeof a !== "object") {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (c.tag !== 1)
            throw Error(u(309));
          var d = c.stateNode;
        }
        if (!d)
          throw Error(u(147, a));
        var e = "" + a;
        if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
          return b.ref;
        b = function(a2) {
          var b2 = d.refs;
          b2 === Eg && (b2 = d.refs = {});
          a2 === null ? delete b2[e] : b2[e] = a2;
        };
        b._stringRef = e;
        return b;
      }
      if (typeof a !== "string")
        throw Error(u(284));
      if (!c._owner)
        throw Error(u(290, a));
    }
    return a;
  }
  function Qg(a, b) {
    if (a.type !== "textarea")
      throw Error(u(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
  }
  function Rg(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.lastEffect;
        d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
        c2.nextEffect = null;
        c2.effectTag = 8;
      }
    }
    function c(c2, d2) {
      if (!a)
        return null;
      for (; d2 !== null; )
        b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = new Map(); b2 !== null; )
        b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Sg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a)
        return c2;
      d2 = b2.alternate;
      if (d2 !== null)
        return d2 = d2.index, d2 < c2 ? (b2.effectTag = 2, c2) : d2;
      b2.effectTag = 2;
      return c2;
    }
    function g(b2) {
      a && b2.alternate === null && (b2.effectTag = 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (b2 === null || b2.tag !== 6)
        return b2 = Tg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      if (b2 !== null && b2.elementType === c2.type)
        return d2 = e(b2, c2.props), d2.ref = Pg(a2, b2, c2), d2.return = a2, d2;
      d2 = Ug(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Pg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l2(a2, b2, c2, d2) {
      if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
        return b2 = Vg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (b2 === null || b2.tag !== 7)
        return b2 = Wg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function p2(a2, b2, c2) {
      if (typeof b2 === "string" || typeof b2 === "number")
        return b2 = Tg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if (typeof b2 === "object" && b2 !== null) {
        switch (b2.$$typeof) {
          case Za:
            return c2 = Ug(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Pg(a2, null, b2), c2.return = a2, c2;
          case $a:
            return b2 = Vg(b2, a2.mode, c2), b2.return = a2, b2;
        }
        if (Og(b2) || nb(b2))
          return b2 = Wg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Qg(a2, b2);
      }
      return null;
    }
    function x2(a2, b2, c2, d2) {
      var e2 = b2 !== null ? b2.key : null;
      if (typeof c2 === "string" || typeof c2 === "number")
        return e2 !== null ? null : h(a2, b2, "" + c2, d2);
      if (typeof c2 === "object" && c2 !== null) {
        switch (c2.$$typeof) {
          case Za:
            return c2.key === e2 ? c2.type === ab ? m(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
          case $a:
            return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        }
        if (Og(c2) || nb(c2))
          return e2 !== null ? null : m(a2, b2, c2, d2, null);
        Qg(a2, c2);
      }
      return null;
    }
    function z2(a2, b2, c2, d2, e2) {
      if (typeof d2 === "string" || typeof d2 === "number")
        return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if (typeof d2 === "object" && d2 !== null) {
        switch (d2.$$typeof) {
          case Za:
            return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ab ? m(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
          case $a:
            return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        }
        if (Og(d2) || nb(d2))
          return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Qg(b2, d2);
      }
      return null;
    }
    function ca(e2, g2, h2, k2) {
      for (var l3 = null, t2 = null, m2 = g2, y2 = g2 = 0, A2 = null; m2 !== null && y2 < h2.length; y2++) {
        m2.index > y2 ? (A2 = m2, m2 = null) : A2 = m2.sibling;
        var q2 = x2(e2, m2, h2[y2], k2);
        if (q2 === null) {
          m2 === null && (m2 = A2);
          break;
        }
        a && m2 && q2.alternate === null && b(e2, m2);
        g2 = f(q2, g2, y2);
        t2 === null ? l3 = q2 : t2.sibling = q2;
        t2 = q2;
        m2 = A2;
      }
      if (y2 === h2.length)
        return c(e2, m2), l3;
      if (m2 === null) {
        for (; y2 < h2.length; y2++)
          m2 = p2(e2, h2[y2], k2), m2 !== null && (g2 = f(m2, g2, y2), t2 === null ? l3 = m2 : t2.sibling = m2, t2 = m2);
        return l3;
      }
      for (m2 = d(e2, m2); y2 < h2.length; y2++)
        A2 = z2(m2, e2, y2, h2[y2], k2), A2 !== null && (a && A2.alternate !== null && m2.delete(A2.key === null ? y2 : A2.key), g2 = f(A2, g2, y2), t2 === null ? l3 = A2 : t2.sibling = A2, t2 = A2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      return l3;
    }
    function D2(e2, g2, h2, l3) {
      var k2 = nb(h2);
      if (typeof k2 !== "function")
        throw Error(u(150));
      h2 = k2.call(h2);
      if (h2 == null)
        throw Error(u(151));
      for (var m2 = k2 = null, t2 = g2, y2 = g2 = 0, A2 = null, q2 = h2.next(); t2 !== null && !q2.done; y2++, q2 = h2.next()) {
        t2.index > y2 ? (A2 = t2, t2 = null) : A2 = t2.sibling;
        var D3 = x2(e2, t2, q2.value, l3);
        if (D3 === null) {
          t2 === null && (t2 = A2);
          break;
        }
        a && t2 && D3.alternate === null && b(e2, t2);
        g2 = f(D3, g2, y2);
        m2 === null ? k2 = D3 : m2.sibling = D3;
        m2 = D3;
        t2 = A2;
      }
      if (q2.done)
        return c(e2, t2), k2;
      if (t2 === null) {
        for (; !q2.done; y2++, q2 = h2.next())
          q2 = p2(e2, q2.value, l3), q2 !== null && (g2 = f(q2, g2, y2), m2 === null ? k2 = q2 : m2.sibling = q2, m2 = q2);
        return k2;
      }
      for (t2 = d(e2, t2); !q2.done; y2++, q2 = h2.next())
        q2 = z2(t2, e2, y2, q2.value, l3), q2 !== null && (a && q2.alternate !== null && t2.delete(q2.key === null ? y2 : q2.key), g2 = f(q2, g2, y2), m2 === null ? k2 = q2 : m2.sibling = q2, m2 = q2);
      a && t2.forEach(function(a2) {
        return b(e2, a2);
      });
      return k2;
    }
    return function(a2, d2, f2, h2) {
      var k2 = typeof f2 === "object" && f2 !== null && f2.type === ab && f2.key === null;
      k2 && (f2 = f2.props.children);
      var l3 = typeof f2 === "object" && f2 !== null;
      if (l3)
        switch (f2.$$typeof) {
          case Za:
            a: {
              l3 = f2.key;
              for (k2 = d2; k2 !== null; ) {
                if (k2.key === l3) {
                  switch (k2.tag) {
                    case 7:
                      if (f2.type === ab) {
                        c(a2, k2.sibling);
                        d2 = e(k2, f2.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                      break;
                    default:
                      if (k2.elementType === f2.type) {
                        c(a2, k2.sibling);
                        d2 = e(k2, f2.props);
                        d2.ref = Pg(a2, k2, f2);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                  }
                  c(a2, k2);
                  break;
                } else
                  b(a2, k2);
                k2 = k2.sibling;
              }
              f2.type === ab ? (d2 = Wg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Ug(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Pg(a2, d2, f2), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case $a:
            a: {
              for (k2 = f2.key; d2 !== null; ) {
                if (d2.key === k2)
                  if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f2.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                else
                  b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Vg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
        }
      if (typeof f2 === "string" || typeof f2 === "number")
        return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Tg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
      if (Og(f2))
        return ca(a2, d2, f2, h2);
      if (nb(f2))
        return D2(a2, d2, f2, h2);
      l3 && Qg(a2, f2);
      if (typeof f2 === "undefined" && !k2)
        switch (a2.tag) {
          case 1:
          case 0:
            throw a2 = a2.type, Error(u(152, a2.displayName || a2.name || "Component"));
        }
      return c(a2, d2);
    };
  }
  var Xg = Rg(true), Yg = Rg(false), Zg = {}, $g = { current: Zg }, ah = { current: Zg }, bh = { current: Zg };
  function ch(a) {
    if (a === Zg)
      throw Error(u(174));
    return a;
  }
  function dh(a, b) {
    I(bh, b);
    I(ah, a);
    I($g, Zg);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
        break;
      default:
        a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
    }
    H($g);
    I($g, b);
  }
  function eh() {
    H($g);
    H(ah);
    H(bh);
  }
  function fh(a) {
    ch(bh.current);
    var b = ch($g.current);
    var c = Ob(b, a.type);
    b !== c && (I(ah, a), I($g, c));
  }
  function gh(a) {
    ah.current === a && (H($g), H(ah));
  }
  var M = { current: 0 };
  function hh(a) {
    for (var b = a; b !== null; ) {
      if (b.tag === 13) {
        var c = b.memoizedState;
        if (c !== null && (c = c.dehydrated, c === null || c.data === Bd || c.data === Cd))
          return b;
      } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
        if ((b.effectTag & 64) !== 0)
          return b;
      } else if (b.child !== null) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a)
        break;
      for (; b.sibling === null; ) {
        if (b.return === null || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  function ih(a, b) {
    return { responder: a, props: b };
  }
  var jh = Wa.ReactCurrentDispatcher, kh = Wa.ReactCurrentBatchConfig, lh = 0, N = null, O = null, P = null, mh = false;
  function Q() {
    throw Error(u(321));
  }
  function nh(a, b) {
    if (b === null)
      return false;
    for (var c = 0; c < b.length && c < a.length; c++)
      if (!$e(a[c], b[c]))
        return false;
    return true;
  }
  function oh(a, b, c, d, e, f) {
    lh = f;
    N = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.expirationTime = 0;
    jh.current = a === null || a.memoizedState === null ? ph : qh;
    a = c(d, e);
    if (b.expirationTime === lh) {
      f = 0;
      do {
        b.expirationTime = 0;
        if (!(25 > f))
          throw Error(u(301));
        f += 1;
        P = O = null;
        b.updateQueue = null;
        jh.current = rh;
        a = c(d, e);
      } while (b.expirationTime === lh);
    }
    jh.current = sh;
    b = O !== null && O.next !== null;
    lh = 0;
    P = O = N = null;
    mh = false;
    if (b)
      throw Error(u(300));
    return a;
  }
  function th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    P === null ? N.memoizedState = P = a : P = P.next = a;
    return P;
  }
  function uh() {
    if (O === null) {
      var a = N.alternate;
      a = a !== null ? a.memoizedState : null;
    } else
      a = O.next;
    var b = P === null ? N.memoizedState : P.next;
    if (b !== null)
      P = b, O = a;
    else {
      if (a === null)
        throw Error(u(310));
      O = a;
      a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
      P === null ? N.memoizedState = P = a : P = P.next = a;
    }
    return P;
  }
  function vh(a, b) {
    return typeof b === "function" ? b(a) : b;
  }
  function wh(a) {
    var b = uh(), c = b.queue;
    if (c === null)
      throw Error(u(311));
    c.lastRenderedReducer = a;
    var d = O, e = d.baseQueue, f = c.pending;
    if (f !== null) {
      if (e !== null) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (e !== null) {
      e = e.next;
      d = d.baseState;
      var h = g = f = null, k = e;
      do {
        var l2 = k.expirationTime;
        if (l2 < lh) {
          var m = { expirationTime: k.expirationTime, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null };
          h === null ? (g = h = m, f = d) : h = h.next = m;
          l2 > N.expirationTime && (N.expirationTime = l2, Bg(l2));
        } else
          h !== null && (h = h.next = { expirationTime: 1073741823, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), Ag(l2, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
        k = k.next;
      } while (k !== null && k !== e);
      h === null ? f = d : h.next = g;
      $e(d, b.memoizedState) || (rg = true);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }
    return [b.memoizedState, c.dispatch];
  }
  function xh(a) {
    var b = uh(), c = b.queue;
    if (c === null)
      throw Error(u(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (e !== null) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      $e(f, b.memoizedState) || (rg = true);
      b.memoizedState = f;
      b.baseQueue === null && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function yh(a) {
    var b = th();
    typeof a === "function" && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: vh, lastRenderedState: a };
    a = a.dispatch = zh.bind(null, N, a);
    return [b.memoizedState, a];
  }
  function Ah(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = N.updateQueue;
    b === null ? (b = { lastEffect: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function Bh() {
    return uh().memoizedState;
  }
  function Ch(a, b, c, d) {
    var e = th();
    N.effectTag |= a;
    e.memoizedState = Ah(1 | b, c, void 0, d === void 0 ? null : d);
  }
  function Dh(a, b, c, d) {
    var e = uh();
    d = d === void 0 ? null : d;
    var f = void 0;
    if (O !== null) {
      var g = O.memoizedState;
      f = g.destroy;
      if (d !== null && nh(d, g.deps)) {
        Ah(b, c, f, d);
        return;
      }
    }
    N.effectTag |= a;
    e.memoizedState = Ah(1 | b, c, f, d);
  }
  function Eh(a, b) {
    return Ch(516, 4, a, b);
  }
  function Fh(a, b) {
    return Dh(516, 4, a, b);
  }
  function Gh(a, b) {
    return Dh(4, 2, a, b);
  }
  function Hh(a, b) {
    if (typeof b === "function")
      return a = a(), b(a), function() {
        b(null);
      };
    if (b !== null && b !== void 0)
      return a = a(), b.current = a, function() {
        b.current = null;
      };
  }
  function Ih(a, b, c) {
    c = c !== null && c !== void 0 ? c.concat([a]) : null;
    return Dh(4, 2, Hh.bind(null, b, a), c);
  }
  function Jh() {
  }
  function Kh(a, b) {
    th().memoizedState = [a, b === void 0 ? null : b];
    return a;
  }
  function Lh(a, b) {
    var c = uh();
    b = b === void 0 ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && nh(b, d[1]))
      return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function Mh(a, b) {
    var c = uh();
    b = b === void 0 ? null : b;
    var d = c.memoizedState;
    if (d !== null && b !== null && nh(b, d[1]))
      return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function Nh(a, b, c) {
    var d = ag();
    cg(98 > d ? 98 : d, function() {
      a(true);
    });
    cg(97 < d ? 97 : d, function() {
      var d2 = kh.suspense;
      kh.suspense = b === void 0 ? null : b;
      try {
        a(false), c();
      } finally {
        kh.suspense = d2;
      }
    });
  }
  function zh(a, b, c) {
    var d = Gg(), e = Dg.suspense;
    d = Hg(d, a, e);
    e = { expirationTime: d, suspenseConfig: e, action: c, eagerReducer: null, eagerState: null, next: null };
    var f = b.pending;
    f === null ? e.next = e : (e.next = f.next, f.next = e);
    b.pending = e;
    f = a.alternate;
    if (a === N || f !== null && f === N)
      mh = true, e.expirationTime = lh, N.expirationTime = lh;
    else {
      if (a.expirationTime === 0 && (f === null || f.expirationTime === 0) && (f = b.lastRenderedReducer, f !== null))
        try {
          var g = b.lastRenderedState, h = f(g, c);
          e.eagerReducer = f;
          e.eagerState = h;
          if ($e(h, g))
            return;
        } catch (k) {
        } finally {
        }
      Ig(a, d);
    }
  }
  var sh = { readContext: sg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useResponder: Q, useDeferredValue: Q, useTransition: Q }, ph = { readContext: sg, useCallback: Kh, useContext: sg, useEffect: Eh, useImperativeHandle: function(a, b, c) {
    c = c !== null && c !== void 0 ? c.concat([a]) : null;
    return Ch(4, 2, Hh.bind(null, b, a), c);
  }, useLayoutEffect: function(a, b) {
    return Ch(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = th();
    b = b === void 0 ? null : b;
    a = a();
    c.memoizedState = [
      a,
      b
    ];
    return a;
  }, useReducer: function(a, b, c) {
    var d = th();
    b = c !== void 0 ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    a = a.dispatch = zh.bind(null, N, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: yh, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
    var c = yh(a), d = c[0], e = c[1];
    Eh(function() {
      var c2 = kh.suspense;
      kh.suspense = b === void 0 ? null : b;
      try {
        e(a);
      } finally {
        kh.suspense = c2;
      }
    }, [a, b]);
    return d;
  }, useTransition: function(a) {
    var b = yh(false), c = b[0];
    b = b[1];
    return [Kh(Nh.bind(null, b, a), [b, a]), c];
  } }, qh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: wh, useRef: Bh, useState: function() {
    return wh(vh);
  }, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
    var c = wh(vh), d = c[0], e = c[1];
    Fh(function() {
      var c2 = kh.suspense;
      kh.suspense = b === void 0 ? null : b;
      try {
        e(a);
      } finally {
        kh.suspense = c2;
      }
    }, [a, b]);
    return d;
  }, useTransition: function(a) {
    var b = wh(vh), c = b[0];
    b = b[1];
    return [Lh(Nh.bind(null, b, a), [b, a]), c];
  } }, rh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: xh, useRef: Bh, useState: function() {
    return xh(vh);
  }, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
    var c = xh(vh), d = c[0], e = c[1];
    Fh(function() {
      var c2 = kh.suspense;
      kh.suspense = b === void 0 ? null : b;
      try {
        e(a);
      } finally {
        kh.suspense = c2;
      }
    }, [a, b]);
    return d;
  }, useTransition: function(a) {
    var b = xh(vh), c = b[0];
    b = b[1];
    return [Lh(Nh.bind(null, b, a), [b, a]), c];
  } }, Oh = null, Ph = null, Qh = false;
  function Rh(a, b) {
    var c = Sh(5, null, null, 0);
    c.elementType = "DELETED";
    c.type = "DELETED";
    c.stateNode = b;
    c.return = a;
    c.effectTag = 8;
    a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }
  function Th(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return b !== null ? (a.stateNode = b, true) : false;
      case 6:
        return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
      case 13:
        return false;
      default:
        return false;
    }
  }
  function Uh(a) {
    if (Qh) {
      var b = Ph;
      if (b) {
        var c = b;
        if (!Th(a, b)) {
          b = Jd(c.nextSibling);
          if (!b || !Th(a, b)) {
            a.effectTag = a.effectTag & -1025 | 2;
            Qh = false;
            Oh = a;
            return;
          }
          Rh(Oh, c);
        }
        Oh = a;
        Ph = Jd(b.firstChild);
      } else
        a.effectTag = a.effectTag & -1025 | 2, Qh = false, Oh = a;
    }
  }
  function Vh(a) {
    for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
      a = a.return;
    Oh = a;
  }
  function Wh(a) {
    if (a !== Oh)
      return false;
    if (!Qh)
      return Vh(a), Qh = true, false;
    var b = a.type;
    if (a.tag !== 5 || b !== "head" && b !== "body" && !Gd(b, a.memoizedProps))
      for (b = Ph; b; )
        Rh(a, b), b = Jd(b.nextSibling);
    Vh(a);
    if (a.tag === 13) {
      a = a.memoizedState;
      a = a !== null ? a.dehydrated : null;
      if (!a)
        throw Error(u(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (a.nodeType === 8) {
            var c = a.data;
            if (c === Ad) {
              if (b === 0) {
                Ph = Jd(a.nextSibling);
                break a;
              }
              b--;
            } else
              c !== zd && c !== Cd && c !== Bd || b++;
          }
          a = a.nextSibling;
        }
        Ph = null;
      }
    } else
      Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
    return true;
  }
  function Xh() {
    Ph = Oh = null;
    Qh = false;
  }
  var Yh = Wa.ReactCurrentOwner, rg = false;
  function R(a, b, c, d) {
    b.child = a === null ? Yg(b, null, c, d) : Xg(b, a.child, c, d);
  }
  function Zh(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    qg(b, e);
    d = oh(a, b, c, d, f, e);
    if (a !== null && !rg)
      return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
    b.effectTag |= 1;
    R(a, b, d, e);
    return b.child;
  }
  function ai(a, b, c, d, e, f) {
    if (a === null) {
      var g = c.type;
      if (typeof g === "function" && !bi(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
        return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
      a = Ug(c.type, null, d, null, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    g = a.child;
    if (e < f && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : bf, c(e, d) && a.ref === b.ref))
      return $h(a, b, f);
    b.effectTag |= 1;
    a = Sg(g, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function ci(a, b, c, d, e, f) {
    return a !== null && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = false, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c, d, f);
  }
  function ei(a, b) {
    var c = b.ref;
    if (a === null && c !== null || a !== null && a.ref !== c)
      b.effectTag |= 128;
  }
  function di(a, b, c, d, e) {
    var f = L(c) ? Bf : J.current;
    f = Cf(b, f);
    qg(b, e);
    c = oh(a, b, c, d, f, e);
    if (a !== null && !rg)
      return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
    b.effectTag |= 1;
    R(a, b, c, e);
    return b.child;
  }
  function fi(a, b, c, d, e) {
    if (L(c)) {
      var f = true;
      Gf(b);
    } else
      f = false;
    qg(b, e);
    if (b.stateNode === null)
      a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c, d), Ng(b, c, d, e), d = true;
    else if (a === null) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l2 = c.contextType;
      typeof l2 === "object" && l2 !== null ? l2 = sg(l2) : (l2 = L(c) ? Bf : J.current, l2 = Cf(b, l2));
      var m = c.getDerivedStateFromProps, p2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function";
      p2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Mg(b, g, d, l2);
      tg = false;
      var x2 = b.memoizedState;
      g.state = x2;
      zg(b, d, g, e);
      k = b.memoizedState;
      h !== d || x2 !== k || K.current || tg ? (typeof m === "function" && (Fg(b, c, m, d), k = b.memoizedState), (h = tg || Kg(b, c, h, d, x2, k, l2)) ? (p2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.effectTag |= 4)) : (typeof g.componentDidMount === "function" && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.effectTag |= 4), d = false);
    } else
      g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l2 = c.contextType, typeof l2 === "object" && l2 !== null ? l2 = sg(l2) : (l2 = L(c) ? Bf : J.current, l2 = Cf(b, l2)), m = c.getDerivedStateFromProps, (p2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Mg(b, g, d, l2), tg = false, k = b.memoizedState, g.state = k, zg(b, d, g, e), x2 = b.memoizedState, h !== d || k !== x2 || K.current || tg ? (typeof m === "function" && (Fg(b, c, m, d), x2 = b.memoizedState), (m = tg || Kg(b, c, h, d, k, x2, l2)) ? (p2 || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x2, l2), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x2, l2)), typeof g.componentDidUpdate === "function" && (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.effectTag |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = l2, d = m) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = false);
    return gi(a, b, c, d, f, e);
  }
  function gi(a, b, c, d, e, f) {
    ei(a, b);
    var g = (b.effectTag & 64) !== 0;
    if (!d && !g)
      return e && Hf(b, c, false), $h(a, b, f);
    d = b.stateNode;
    Yh.current = b;
    var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
    b.effectTag |= 1;
    a !== null && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
    b.memoizedState = d.state;
    e && Hf(b, c, true);
    return b.child;
  }
  function hi(a) {
    var b = a.stateNode;
    b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, false);
    dh(a, b.containerInfo);
  }
  var ii = { dehydrated: null, retryTime: 0 };
  function ji(a, b, c) {
    var d = b.mode, e = b.pendingProps, f = M.current, g = false, h;
    (h = (b.effectTag & 64) !== 0) || (h = (f & 2) !== 0 && (a === null || a.memoizedState !== null));
    h ? (g = true, b.effectTag &= -65) : a !== null && a.memoizedState === null || e.fallback === void 0 || e.unstable_avoidThisFallback === true || (f |= 1);
    I(M, f & 1);
    if (a === null) {
      e.fallback !== void 0 && Uh(b);
      if (g) {
        g = e.fallback;
        e = Wg(null, d, 0, null);
        e.return = b;
        if ((b.mode & 2) === 0)
          for (a = b.memoizedState !== null ? b.child.child : b.child, e.child = a; a !== null; )
            a.return = e, a = a.sibling;
        c = Wg(g, d, c, null);
        c.return = b;
        e.sibling = c;
        b.memoizedState = ii;
        b.child = e;
        return c;
      }
      d = e.children;
      b.memoizedState = null;
      return b.child = Yg(b, null, d, c);
    }
    if (a.memoizedState !== null) {
      a = a.child;
      d = a.sibling;
      if (g) {
        e = e.fallback;
        c = Sg(a, a.pendingProps);
        c.return = b;
        if ((b.mode & 2) === 0 && (g = b.memoizedState !== null ? b.child.child : b.child, g !== a.child))
          for (c.child = g; g !== null; )
            g.return = c, g = g.sibling;
        d = Sg(d, e);
        d.return = b;
        c.sibling = d;
        c.childExpirationTime = 0;
        b.memoizedState = ii;
        b.child = c;
        return d;
      }
      c = Xg(b, a.child, e.children, c);
      b.memoizedState = null;
      return b.child = c;
    }
    a = a.child;
    if (g) {
      g = e.fallback;
      e = Wg(null, d, 0, null);
      e.return = b;
      e.child = a;
      a !== null && (a.return = e);
      if ((b.mode & 2) === 0)
        for (a = b.memoizedState !== null ? b.child.child : b.child, e.child = a; a !== null; )
          a.return = e, a = a.sibling;
      c = Wg(g, d, c, null);
      c.return = b;
      e.sibling = c;
      c.effectTag |= 2;
      e.childExpirationTime = 0;
      b.memoizedState = ii;
      b.child = e;
      return c;
    }
    b.memoizedState = null;
    return b.child = Xg(b, a, e.children, c);
  }
  function ki(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    c !== null && c.expirationTime < b && (c.expirationTime = b);
    pg(a.return, b);
  }
  function li(a, b, c, d, e, f) {
    var g = a.memoizedState;
    g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailExpiration: 0, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
  }
  function mi(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    R(a, b, d.children, c);
    d = M.current;
    if ((d & 2) !== 0)
      d = d & 1 | 2, b.effectTag |= 64;
    else {
      if (a !== null && (a.effectTag & 64) !== 0)
        a:
          for (a = b.child; a !== null; ) {
            if (a.tag === 13)
              a.memoizedState !== null && ki(a, c);
            else if (a.tag === 19)
              ki(a, c);
            else if (a.child !== null) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === b)
              break a;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === b)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      d &= 1;
    }
    I(M, d);
    if ((b.mode & 2) === 0)
      b.memoizedState = null;
    else
      switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; c !== null; )
            a = c.alternate, a !== null && hh(a) === null && (e = c), c = c.sibling;
          c = e;
          c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          li(b, false, e, c, f, b.lastEffect);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; e !== null; ) {
            a = e.alternate;
            if (a !== null && hh(a) === null) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          li(b, true, c, null, f, b.lastEffect);
          break;
        case "together":
          li(b, false, null, null, void 0, b.lastEffect);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }
  function $h(a, b, c) {
    a !== null && (b.dependencies = a.dependencies);
    var d = b.expirationTime;
    d !== 0 && Bg(d);
    if (b.childExpirationTime < c)
      return null;
    if (a !== null && b.child !== a.child)
      throw Error(u(153));
    if (b.child !== null) {
      a = b.child;
      c = Sg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Sg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  var ni, oi, pi, qi;
  ni = function(a, b) {
    for (var c = b.child; c !== null; ) {
      if (c.tag === 5 || c.tag === 6)
        a.appendChild(c.stateNode);
      else if (c.tag !== 4 && c.child !== null) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b)
        break;
      for (; c.sibling === null; ) {
        if (c.return === null || c.return === b)
          return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  oi = function() {
  };
  pi = function(a, b, c, d, e) {
    var f = a.memoizedProps;
    if (f !== d) {
      var g = b.stateNode;
      ch($g.current);
      a = null;
      switch (c) {
        case "input":
          f = zb(g, f);
          d = zb(g, d);
          a = [];
          break;
        case "option":
          f = Gb(g, f);
          d = Gb(g, d);
          a = [];
          break;
        case "select":
          f = n({}, f, { value: void 0 });
          d = n({}, d, { value: void 0 });
          a = [];
          break;
        case "textarea":
          f = Ib(g, f);
          d = Ib(g, d);
          a = [];
          break;
        default:
          typeof f.onClick !== "function" && typeof d.onClick === "function" && (g.onclick = sd);
      }
      od(c, d);
      var h, k;
      c = null;
      for (h in f)
        if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && f[h] != null)
          if (h === "style")
            for (k in g = f[h], g)
              g.hasOwnProperty(k) && (c || (c = {}), c[k] = "");
          else
            h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
      for (h in d) {
        var l2 = d[h];
        g = f != null ? f[h] : void 0;
        if (d.hasOwnProperty(h) && l2 !== g && (l2 != null || g != null))
          if (h === "style")
            if (g) {
              for (k in g)
                !g.hasOwnProperty(k) || l2 && l2.hasOwnProperty(k) || (c || (c = {}), c[k] = "");
              for (k in l2)
                l2.hasOwnProperty(k) && g[k] !== l2[k] && (c || (c = {}), c[k] = l2[k]);
            } else
              c || (a || (a = []), a.push(h, c)), c = l2;
          else
            h === "dangerouslySetInnerHTML" ? (l2 = l2 ? l2.__html : void 0, g = g ? g.__html : void 0, l2 != null && g !== l2 && (a = a || []).push(h, l2)) : h === "children" ? g === l2 || typeof l2 !== "string" && typeof l2 !== "number" || (a = a || []).push(h, "" + l2) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (va.hasOwnProperty(h) ? (l2 != null && rd(e, h), a || g === l2 || (a = [])) : (a = a || []).push(h, l2));
      }
      c && (a = a || []).push("style", c);
      e = a;
      if (b.updateQueue = e)
        b.effectTag |= 4;
    }
  };
  qi = function(a, b, c, d) {
    c !== d && (b.effectTag |= 4);
  };
  function ri(a, b) {
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function si(a, b, c) {
    var d = b.pendingProps;
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return L(b.type) && Df(), null;
      case 3:
        return eh(), H(K), H(J), c = b.stateNode, c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), a !== null && a.child !== null || !Wh(b) || (b.effectTag |= 4), oi(b), null;
      case 5:
        gh(b);
        c = ch(bh.current);
        var e = b.type;
        if (a !== null && b.stateNode != null)
          pi(a, b, e, d, c), a.ref !== b.ref && (b.effectTag |= 128);
        else {
          if (!d) {
            if (b.stateNode === null)
              throw Error(u(166));
            return null;
          }
          a = ch($g.current);
          if (Wh(b)) {
            d = b.stateNode;
            e = b.type;
            var f = b.memoizedProps;
            d[Md] = b;
            d[Nd] = f;
            switch (e) {
              case "iframe":
              case "object":
              case "embed":
                F("load", d);
                break;
              case "video":
              case "audio":
                for (a = 0; a < ac.length; a++)
                  F(ac[a], d);
                break;
              case "source":
                F("error", d);
                break;
              case "img":
              case "image":
              case "link":
                F("error", d);
                F("load", d);
                break;
              case "form":
                F("reset", d);
                F("submit", d);
                break;
              case "details":
                F("toggle", d);
                break;
              case "input":
                Ab(d, f);
                F("invalid", d);
                rd(c, "onChange");
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                F("invalid", d);
                rd(c, "onChange");
                break;
              case "textarea":
                Jb(d, f), F("invalid", d), rd(c, "onChange");
            }
            od(e, f);
            a = null;
            for (var g in f)
              if (f.hasOwnProperty(g)) {
                var h = f[g];
                g === "children" ? typeof h === "string" ? d.textContent !== h && (a = ["children", h]) : typeof h === "number" && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && h != null && rd(c, g);
              }
            switch (e) {
              case "input":
                xb(d);
                Eb(d, f, true);
                break;
              case "textarea":
                xb(d);
                Lb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick === "function" && (d.onclick = sd);
            }
            c = a;
            b.updateQueue = c;
            c !== null && (b.effectTag |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument;
            a === qd && (a = Nb(e));
            a === qd ? e === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(e, { is: d.is }) : (a = g.createElement(e), e === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
            a[Md] = b;
            a[Nd] = d;
            ni(a, b, false, false);
            b.stateNode = a;
            g = pd(e, d);
            switch (e) {
              case "iframe":
              case "object":
              case "embed":
                F("load", a);
                h = d;
                break;
              case "video":
              case "audio":
                for (h = 0; h < ac.length; h++)
                  F(ac[h], a);
                h = d;
                break;
              case "source":
                F("error", a);
                h = d;
                break;
              case "img":
              case "image":
              case "link":
                F("error", a);
                F("load", a);
                h = d;
                break;
              case "form":
                F("reset", a);
                F("submit", a);
                h = d;
                break;
              case "details":
                F("toggle", a);
                h = d;
                break;
              case "input":
                Ab(a, d);
                h = zb(a, d);
                F("invalid", a);
                rd(c, "onChange");
                break;
              case "option":
                h = Gb(a, d);
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                h = n({}, d, { value: void 0 });
                F("invalid", a);
                rd(c, "onChange");
                break;
              case "textarea":
                Jb(a, d);
                h = Ib(a, d);
                F("invalid", a);
                rd(c, "onChange");
                break;
              default:
                h = d;
            }
            od(e, h);
            var k = h;
            for (f in k)
              if (k.hasOwnProperty(f)) {
                var l2 = k[f];
                f === "style" ? md(a, l2) : f === "dangerouslySetInnerHTML" ? (l2 = l2 ? l2.__html : void 0, l2 != null && Qb(a, l2)) : f === "children" ? typeof l2 === "string" ? (e !== "textarea" || l2 !== "") && Rb(a, l2) : typeof l2 === "number" && Rb(a, "" + l2) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (va.hasOwnProperty(f) ? l2 != null && rd(c, f) : l2 != null && Xa(a, f, l2, g));
              }
            switch (e) {
              case "input":
                xb(a);
                Eb(a, d, false);
                break;
              case "textarea":
                xb(a);
                Lb(a);
                break;
              case "option":
                d.value != null && a.setAttribute("value", "" + rb(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                c = d.value;
                c != null ? Hb(a, !!d.multiple, c, false) : d.defaultValue != null && Hb(a, !!d.multiple, d.defaultValue, true);
                break;
              default:
                typeof h.onClick === "function" && (a.onclick = sd);
            }
            Fd(e, d) && (b.effectTag |= 4);
          }
          b.ref !== null && (b.effectTag |= 128);
        }
        return null;
      case 6:
        if (a && b.stateNode != null)
          qi(a, b, a.memoizedProps, d);
        else {
          if (typeof d !== "string" && b.stateNode === null)
            throw Error(u(166));
          c = ch(bh.current);
          ch($g.current);
          Wh(b) ? (c = b.stateNode, d = b.memoizedProps, c[Md] = b, c.nodeValue !== d && (b.effectTag |= 4)) : (c = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), c[Md] = b, b.stateNode = c);
        }
        return null;
      case 13:
        H(M);
        d = b.memoizedState;
        if ((b.effectTag & 64) !== 0)
          return b.expirationTime = c, b;
        c = d !== null;
        d = false;
        a === null ? b.memoizedProps.fallback !== void 0 && Wh(b) : (e = a.memoizedState, d = e !== null, c || e === null || (e = a.child.sibling, e !== null && (f = b.firstEffect, f !== null ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
        if (c && !d && (b.mode & 2) !== 0)
          if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (M.current & 1) !== 0)
            S === ti && (S = ui);
          else {
            if (S === ti || S === ui)
              S = vi;
            wi !== 0 && T !== null && (xi(T, U), yi(T, wi));
          }
        if (c || d)
          b.effectTag |= 4;
        return null;
      case 4:
        return eh(), oi(b), null;
      case 10:
        return og(b), null;
      case 17:
        return L(b.type) && Df(), null;
      case 19:
        H(M);
        d = b.memoizedState;
        if (d === null)
          return null;
        e = (b.effectTag & 64) !== 0;
        f = d.rendering;
        if (f === null)
          if (e)
            ri(d, false);
          else {
            if (S !== ti || a !== null && (a.effectTag & 64) !== 0)
              for (f = b.child; f !== null; ) {
                a = hh(f);
                if (a !== null) {
                  b.effectTag |= 64;
                  ri(d, false);
                  e = a.updateQueue;
                  e !== null && (b.updateQueue = e, b.effectTag |= 4);
                  d.lastEffect === null && (b.firstEffect = null);
                  b.lastEffect = d.lastEffect;
                  for (d = b.child; d !== null; )
                    e = d, f = c, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, a === null ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = f === null ? null : { expirationTime: f.expirationTime, firstContext: f.firstContext, responders: f.responders }), d = d.sibling;
                  I(M, M.current & 1 | 2);
                  return b.child;
                }
                f = f.sibling;
              }
          }
        else {
          if (!e)
            if (a = hh(f), a !== null) {
              if (b.effectTag |= 64, e = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.effectTag |= 4), ri(d, true), d.tail === null && d.tailMode === "hidden" && !f.alternate)
                return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
            } else
              2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c && (b.effectTag |= 64, e = true, ri(d, false), b.expirationTime = b.childExpirationTime = c - 1);
          d.isBackwards ? (f.sibling = b.child, b.child = f) : (c = d.last, c !== null ? c.sibling = f : b.child = f, d.last = f);
        }
        return d.tail !== null ? (d.tailExpiration === 0 && (d.tailExpiration = $f() + 500), c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c) : null;
    }
    throw Error(u(156, b.tag));
  }
  function zi(a) {
    switch (a.tag) {
      case 1:
        L(a.type) && Df();
        var b = a.effectTag;
        return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
      case 3:
        eh();
        H(K);
        H(J);
        b = a.effectTag;
        if ((b & 64) !== 0)
          throw Error(u(285));
        a.effectTag = b & -4097 | 64;
        return a;
      case 5:
        return gh(a), null;
      case 13:
        return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
      case 19:
        return H(M), null;
      case 4:
        return eh(), null;
      case 10:
        return og(a), null;
      default:
        return null;
    }
  }
  function Ai(a, b) {
    return { value: a, source: b, stack: qb(b) };
  }
  var Bi = typeof WeakSet === "function" ? WeakSet : Set;
  function Ci(a, b) {
    var c = b.source, d = b.stack;
    d === null && c !== null && (d = qb(c));
    c !== null && pb(c.type);
    b = b.value;
    a !== null && a.tag === 1 && pb(a.type);
    try {
      console.error(b);
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Di(a, b) {
    try {
      b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
    } catch (c) {
      Ei(a, c);
    }
  }
  function Fi(a) {
    var b = a.ref;
    if (b !== null)
      if (typeof b === "function")
        try {
          b(null);
        } catch (c) {
          Ei(a, c);
        }
      else
        b.current = null;
  }
  function Gi(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b.effectTag & 256 && a !== null) {
          var c = a.memoizedProps, d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : ig(b.type, c), d);
          a.__reactInternalSnapshotBeforeUpdate = b;
        }
        return;
      case 3:
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(u(163));
  }
  function Hi(a, b) {
    b = b.updateQueue;
    b = b !== null ? b.lastEffect : null;
    if (b !== null) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.destroy;
          c.destroy = void 0;
          d !== void 0 && d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Ii(a, b) {
    b = b.updateQueue;
    b = b !== null ? b.lastEffect : null;
    if (b !== null) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Ji(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        Ii(3, c);
        return;
      case 1:
        a = c.stateNode;
        if (c.effectTag & 4)
          if (b === null)
            a.componentDidMount();
          else {
            var d = c.elementType === c.type ? b.memoizedProps : ig(c.type, b.memoizedProps);
            a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
          }
        b = c.updateQueue;
        b !== null && Cg(c, b, a);
        return;
      case 3:
        b = c.updateQueue;
        if (b !== null) {
          a = null;
          if (c.child !== null)
            switch (c.child.tag) {
              case 5:
                a = c.child.stateNode;
                break;
              case 1:
                a = c.child.stateNode;
            }
          Cg(c, b, a);
        }
        return;
      case 5:
        a = c.stateNode;
        b === null && c.effectTag & 4 && Fd(c.type, c.memoizedProps) && a.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Vc(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
        return;
    }
    throw Error(u(163));
  }
  function Ki(a, b, c) {
    typeof Li === "function" && Li(b);
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;
        if (a !== null && (a = a.lastEffect, a !== null)) {
          var d = a.next;
          cg(97 < c ? 97 : c, function() {
            var a2 = d;
            do {
              var c2 = a2.destroy;
              if (c2 !== void 0) {
                var g = b;
                try {
                  c2();
                } catch (h) {
                  Ei(g, h);
                }
              }
              a2 = a2.next;
            } while (a2 !== d);
          });
        }
        break;
      case 1:
        Fi(b);
        c = b.stateNode;
        typeof c.componentWillUnmount === "function" && Di(b, c);
        break;
      case 5:
        Fi(b);
        break;
      case 4:
        Mi(a, b, c);
    }
  }
  function Ni(a) {
    var b = a.alternate;
    a.return = null;
    a.child = null;
    a.memoizedState = null;
    a.updateQueue = null;
    a.dependencies = null;
    a.alternate = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.pendingProps = null;
    a.memoizedProps = null;
    a.stateNode = null;
    b !== null && Ni(b);
  }
  function Oi(a) {
    return a.tag === 5 || a.tag === 3 || a.tag === 4;
  }
  function Pi(a) {
    a: {
      for (var b = a.return; b !== null; ) {
        if (Oi(b)) {
          var c = b;
          break a;
        }
        b = b.return;
      }
      throw Error(u(160));
    }
    b = c.stateNode;
    switch (c.tag) {
      case 5:
        var d = false;
        break;
      case 3:
        b = b.containerInfo;
        d = true;
        break;
      case 4:
        b = b.containerInfo;
        d = true;
        break;
      default:
        throw Error(u(161));
    }
    c.effectTag & 16 && (Rb(b, ""), c.effectTag &= -17);
    a:
      b:
        for (c = a; ; ) {
          for (; c.sibling === null; ) {
            if (c.return === null || Oi(c.return)) {
              c = null;
              break a;
            }
            c = c.return;
          }
          c.sibling.return = c.return;
          for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
            if (c.effectTag & 2)
              continue b;
            if (c.child === null || c.tag === 4)
              continue b;
            else
              c.child.return = c, c = c.child;
          }
          if (!(c.effectTag & 2)) {
            c = c.stateNode;
            break a;
          }
        }
    d ? Qi(a, c, b) : Ri(a, c, b);
  }
  function Qi(a, b, c) {
    var d = a.tag, e = d === 5 || d === 6;
    if (e)
      a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = sd));
    else if (d !== 4 && (a = a.child, a !== null))
      for (Qi(a, b, c), a = a.sibling; a !== null; )
        Qi(a, b, c), a = a.sibling;
  }
  function Ri(a, b, c) {
    var d = a.tag, e = d === 5 || d === 6;
    if (e)
      a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (d !== 4 && (a = a.child, a !== null))
      for (Ri(a, b, c), a = a.sibling; a !== null; )
        Ri(a, b, c), a = a.sibling;
  }
  function Mi(a, b, c) {
    for (var d = b, e = false, f, g; ; ) {
      if (!e) {
        e = d.return;
        a:
          for (; ; ) {
            if (e === null)
              throw Error(u(160));
            f = e.stateNode;
            switch (e.tag) {
              case 5:
                g = false;
                break a;
              case 3:
                f = f.containerInfo;
                g = true;
                break a;
              case 4:
                f = f.containerInfo;
                g = true;
                break a;
            }
            e = e.return;
          }
        e = true;
      }
      if (d.tag === 5 || d.tag === 6) {
        a:
          for (var h = a, k = d, l2 = c, m = k; ; )
            if (Ki(h, m, l2), m.child !== null && m.tag !== 4)
              m.child.return = m, m = m.child;
            else {
              if (m === k)
                break a;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === k)
                  break a;
                m = m.return;
              }
              m.sibling.return = m.return;
              m = m.sibling;
            }
        g ? (h = f, k = d.stateNode, h.nodeType === 8 ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
      } else if (d.tag === 4) {
        if (d.child !== null) {
          f = d.stateNode.containerInfo;
          g = true;
          d.child.return = d;
          d = d.child;
          continue;
        }
      } else if (Ki(a, d, c), d.child !== null) {
        d.child.return = d;
        d = d.child;
        continue;
      }
      if (d === b)
        break;
      for (; d.sibling === null; ) {
        if (d.return === null || d.return === b)
          return;
        d = d.return;
        d.tag === 4 && (e = false);
      }
      d.sibling.return = d.return;
      d = d.sibling;
    }
  }
  function Si(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        Hi(3, b);
        return;
      case 1:
        return;
      case 5:
        var c = b.stateNode;
        if (c != null) {
          var d = b.memoizedProps, e = a !== null ? a.memoizedProps : d;
          a = b.type;
          var f = b.updateQueue;
          b.updateQueue = null;
          if (f !== null) {
            c[Nd] = d;
            a === "input" && d.type === "radio" && d.name != null && Bb(c, d);
            pd(a, e);
            b = pd(a, d);
            for (e = 0; e < f.length; e += 2) {
              var g = f[e], h = f[e + 1];
              g === "style" ? md(c, h) : g === "dangerouslySetInnerHTML" ? Qb(c, h) : g === "children" ? Rb(c, h) : Xa(c, g, h, b);
            }
            switch (a) {
              case "input":
                Cb(c, d);
                break;
              case "textarea":
                Kb(c, d);
                break;
              case "select":
                b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, a != null ? Hb(c, !!d.multiple, a, false) : b !== !!d.multiple && (d.defaultValue != null ? Hb(c, !!d.multiple, d.defaultValue, true) : Hb(c, !!d.multiple, d.multiple ? [] : "", false));
            }
          }
        }
        return;
      case 6:
        if (b.stateNode === null)
          throw Error(u(162));
        b.stateNode.nodeValue = b.memoizedProps;
        return;
      case 3:
        b = b.stateNode;
        b.hydrate && (b.hydrate = false, Vc(b.containerInfo));
        return;
      case 12:
        return;
      case 13:
        c = b;
        b.memoizedState === null ? d = false : (d = true, c = b.child, Ti = $f());
        if (c !== null)
          a:
            for (a = c; ; ) {
              if (a.tag === 5)
                f = a.stateNode, d ? (f = f.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));
              else if (a.tag === 6)
                a.stateNode.nodeValue = d ? "" : a.memoizedProps;
              else if (a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null) {
                f = a.child.sibling;
                f.return = a;
                a = f;
                continue;
              } else if (a.child !== null) {
                a.child.return = a;
                a = a.child;
                continue;
              }
              if (a === c)
                break;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === c)
                  break a;
                a = a.return;
              }
              a.sibling.return = a.return;
              a = a.sibling;
            }
        Ui(b);
        return;
      case 19:
        Ui(b);
        return;
      case 17:
        return;
    }
    throw Error(u(163));
  }
  function Ui(a) {
    var b = a.updateQueue;
    if (b !== null) {
      a.updateQueue = null;
      var c = a.stateNode;
      c === null && (c = a.stateNode = new Bi());
      b.forEach(function(b2) {
        var d = Vi.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  var Wi = typeof WeakMap === "function" ? WeakMap : Map;
  function Xi(a, b, c) {
    c = wg(c, null);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Yi || (Yi = true, Zi = d);
      Ci(a, b);
    };
    return c;
  }
  function $i(a, b, c) {
    c = wg(c, null);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if (typeof d === "function") {
      var e = b.value;
      c.payload = function() {
        Ci(a, b);
        return d(e);
      };
    }
    var f = a.stateNode;
    f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
      typeof d !== "function" && (aj === null ? aj = new Set([this]) : aj.add(this), Ci(a, b));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: c2 !== null ? c2 : "" });
    });
    return c;
  }
  var bj = Math.ceil, cj = Wa.ReactCurrentDispatcher, dj = Wa.ReactCurrentOwner, V = 0, ej = 8, fj = 16, gj = 32, ti = 0, hj = 1, ij = 2, ui = 3, vi = 4, jj = 5, W = V, T = null, X = null, U = 0, S = ti, kj = null, lj = 1073741823, mj = 1073741823, nj = null, wi = 0, oj = false, Ti = 0, pj = 500, Y = null, Yi = false, Zi = null, aj = null, qj = false, rj = null, sj = 90, tj = null, uj = 0, vj = null, wj = 0;
  function Gg() {
    return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : wj !== 0 ? wj : wj = 1073741821 - ($f() / 10 | 0);
  }
  function Hg(a, b, c) {
    b = b.mode;
    if ((b & 2) === 0)
      return 1073741823;
    var d = ag();
    if ((b & 4) === 0)
      return d === 99 ? 1073741823 : 1073741822;
    if ((W & fj) !== V)
      return U;
    if (c !== null)
      a = hg(a, c.timeoutMs | 0 || 5e3, 250);
    else
      switch (d) {
        case 99:
          a = 1073741823;
          break;
        case 98:
          a = hg(a, 150, 100);
          break;
        case 97:
        case 96:
          a = hg(a, 5e3, 250);
          break;
        case 95:
          a = 2;
          break;
        default:
          throw Error(u(326));
      }
    T !== null && a === U && --a;
    return a;
  }
  function Ig(a, b) {
    if (50 < uj)
      throw uj = 0, vj = null, Error(u(185));
    a = xj(a, b);
    if (a !== null) {
      var c = ag();
      b === 1073741823 ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
      (W & 4) === V || c !== 98 && c !== 99 || (tj === null ? tj = new Map([[a, b]]) : (c = tj.get(a), (c === void 0 || c > b) && tj.set(a, b)));
    }
  }
  function xj(a, b) {
    a.expirationTime < b && (a.expirationTime = b);
    var c = a.alternate;
    c !== null && c.expirationTime < b && (c.expirationTime = b);
    var d = a.return, e = null;
    if (d === null && a.tag === 3)
      e = a.stateNode;
    else
      for (; d !== null; ) {
        c = d.alternate;
        d.childExpirationTime < b && (d.childExpirationTime = b);
        c !== null && c.childExpirationTime < b && (c.childExpirationTime = b);
        if (d.return === null && d.tag === 3) {
          e = d.stateNode;
          break;
        }
        d = d.return;
      }
    e !== null && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
    return e;
  }
  function zj(a) {
    var b = a.lastExpiredTime;
    if (b !== 0)
      return b;
    b = a.firstPendingTime;
    if (!Aj(a, b))
      return b;
    var c = a.lastPingedTime;
    a = a.nextKnownPendingLevel;
    a = c > a ? c : a;
    return 2 >= a && b !== a ? 0 : a;
  }
  function Z(a) {
    if (a.lastExpiredTime !== 0)
      a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));
    else {
      var b = zj(a), c = a.callbackNode;
      if (b === 0)
        c !== null && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
      else {
        var d = Gg();
        b === 1073741823 ? d = 99 : b === 1 || b === 2 ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
        if (c !== null) {
          var e = a.callbackPriority;
          if (a.callbackExpirationTime === b && e >= d)
            return;
          c !== Tf && Kf(c);
        }
        a.callbackExpirationTime = b;
        a.callbackPriority = d;
        b = b === 1073741823 ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), { timeout: 10 * (1073741821 - b) - $f() });
        a.callbackNode = b;
      }
    }
  }
  function Bj(a, b) {
    wj = 0;
    if (b)
      return b = Gg(), Cj(a, b), Z(a), null;
    var c = zj(a);
    if (c !== 0) {
      b = a.callbackNode;
      if ((W & (fj | gj)) !== V)
        throw Error(u(327));
      Dj();
      a === T && c === U || Ej(a, c);
      if (X !== null) {
        var d = W;
        W |= fj;
        var e = Fj();
        do
          try {
            Gj();
            break;
          } catch (h) {
            Hj(a, h);
          }
        while (1);
        ng();
        W = d;
        cj.current = e;
        if (S === hj)
          throw b = kj, Ej(a, c), xi(a, c), Z(a), b;
        if (X === null)
          switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c, d = S, T = null, d) {
            case ti:
            case hj:
              throw Error(u(345));
            case ij:
              Cj(a, 2 < c ? 2 : c);
              break;
            case ui:
              xi(a, c);
              d = a.lastSuspendedTime;
              c === d && (a.nextKnownPendingLevel = Ij(e));
              if (lj === 1073741823 && (e = Ti + pj - $f(), 10 < e)) {
                if (oj) {
                  var f = a.lastPingedTime;
                  if (f === 0 || f >= c) {
                    a.lastPingedTime = c;
                    Ej(a, c);
                    break;
                  }
                }
                f = zj(a);
                if (f !== 0 && f !== c)
                  break;
                if (d !== 0 && d !== c) {
                  a.lastPingedTime = d;
                  break;
                }
                a.timeoutHandle = Hd(Jj.bind(null, a), e);
                break;
              }
              Jj(a);
              break;
            case vi:
              xi(a, c);
              d = a.lastSuspendedTime;
              c === d && (a.nextKnownPendingLevel = Ij(e));
              if (oj && (e = a.lastPingedTime, e === 0 || e >= c)) {
                a.lastPingedTime = c;
                Ej(a, c);
                break;
              }
              e = zj(a);
              if (e !== 0 && e !== c)
                break;
              if (d !== 0 && d !== c) {
                a.lastPingedTime = d;
                break;
              }
              mj !== 1073741823 ? d = 10 * (1073741821 - mj) - $f() : lj === 1073741823 ? d = 0 : (d = 10 * (1073741821 - lj) - 5e3, e = $f(), c = 10 * (1073741821 - c) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c < d && (d = c));
              if (10 < d) {
                a.timeoutHandle = Hd(Jj.bind(null, a), d);
                break;
              }
              Jj(a);
              break;
            case jj:
              if (lj !== 1073741823 && nj !== null) {
                f = lj;
                var g = nj;
                d = g.busyMinDurationMs | 0;
                0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3)), d = f <= e ? 0 : e + d - f);
                if (10 < d) {
                  xi(a, c);
                  a.timeoutHandle = Hd(Jj.bind(null, a), d);
                  break;
                }
              }
              Jj(a);
              break;
            default:
              throw Error(u(329));
          }
        Z(a);
        if (a.callbackNode === b)
          return Bj.bind(null, a);
      }
    }
    return null;
  }
  function yj(a) {
    var b = a.lastExpiredTime;
    b = b !== 0 ? b : 1073741823;
    if ((W & (fj | gj)) !== V)
      throw Error(u(327));
    Dj();
    a === T && b === U || Ej(a, b);
    if (X !== null) {
      var c = W;
      W |= fj;
      var d = Fj();
      do
        try {
          Kj();
          break;
        } catch (e) {
          Hj(a, e);
        }
      while (1);
      ng();
      W = c;
      cj.current = d;
      if (S === hj)
        throw c = kj, Ej(a, b), xi(a, b), Z(a), c;
      if (X !== null)
        throw Error(u(261));
      a.finishedWork = a.current.alternate;
      a.finishedExpirationTime = b;
      T = null;
      Jj(a);
      Z(a);
    }
    return null;
  }
  function Lj() {
    if (tj !== null) {
      var a = tj;
      tj = null;
      a.forEach(function(a2, c) {
        Cj(c, a2);
        Z(c);
      });
      gg();
    }
  }
  function Mj(a, b) {
    var c = W;
    W |= 1;
    try {
      return a(b);
    } finally {
      W = c, W === V && gg();
    }
  }
  function Nj(a, b) {
    var c = W;
    W &= -2;
    W |= ej;
    try {
      return a(b);
    } finally {
      W = c, W === V && gg();
    }
  }
  function Ej(a, b) {
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    var c = a.timeoutHandle;
    c !== -1 && (a.timeoutHandle = -1, Id(c));
    if (X !== null)
      for (c = X.return; c !== null; ) {
        var d = c;
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            d !== null && d !== void 0 && Df();
            break;
          case 3:
            eh();
            H(K);
            H(J);
            break;
          case 5:
            gh(d);
            break;
          case 4:
            eh();
            break;
          case 13:
            H(M);
            break;
          case 19:
            H(M);
            break;
          case 10:
            og(d);
        }
        c = c.return;
      }
    T = a;
    X = Sg(a.current, null);
    U = b;
    S = ti;
    kj = null;
    mj = lj = 1073741823;
    nj = null;
    wi = 0;
    oj = false;
  }
  function Hj(a, b) {
    do {
      try {
        ng();
        jh.current = sh;
        if (mh)
          for (var c = N.memoizedState; c !== null; ) {
            var d = c.queue;
            d !== null && (d.pending = null);
            c = c.next;
          }
        lh = 0;
        P = O = N = null;
        mh = false;
        if (X === null || X.return === null)
          return S = hj, kj = b, X = null;
        a: {
          var e = a, f = X.return, g = X, h = b;
          b = U;
          g.effectTag |= 2048;
          g.firstEffect = g.lastEffect = null;
          if (h !== null && typeof h === "object" && typeof h.then === "function") {
            var k = h;
            if ((g.mode & 2) === 0) {
              var l2 = g.alternate;
              l2 ? (g.updateQueue = l2.updateQueue, g.memoizedState = l2.memoizedState, g.expirationTime = l2.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
            }
            var m = (M.current & 1) !== 0, p2 = f;
            do {
              var x2;
              if (x2 = p2.tag === 13) {
                var z2 = p2.memoizedState;
                if (z2 !== null)
                  x2 = z2.dehydrated !== null ? true : false;
                else {
                  var ca = p2.memoizedProps;
                  x2 = ca.fallback === void 0 ? false : ca.unstable_avoidThisFallback !== true ? true : m ? false : true;
                }
              }
              if (x2) {
                var D2 = p2.updateQueue;
                if (D2 === null) {
                  var t2 = new Set();
                  t2.add(k);
                  p2.updateQueue = t2;
                } else
                  D2.add(k);
                if ((p2.mode & 2) === 0) {
                  p2.effectTag |= 64;
                  g.effectTag &= -2981;
                  if (g.tag === 1)
                    if (g.alternate === null)
                      g.tag = 17;
                    else {
                      var y2 = wg(1073741823, null);
                      y2.tag = 2;
                      xg(g, y2);
                    }
                  g.expirationTime = 1073741823;
                  break a;
                }
                h = void 0;
                g = b;
                var A2 = e.pingCache;
                A2 === null ? (A2 = e.pingCache = new Wi(), h = new Set(), A2.set(k, h)) : (h = A2.get(k), h === void 0 && (h = new Set(), A2.set(k, h)));
                if (!h.has(g)) {
                  h.add(g);
                  var q2 = Oj.bind(null, e, k, g);
                  k.then(q2, q2);
                }
                p2.effectTag |= 4096;
                p2.expirationTime = b;
                break a;
              }
              p2 = p2.return;
            } while (p2 !== null);
            h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
          }
          S !== jj && (S = ij);
          h = Ai(h, g);
          p2 = f;
          do {
            switch (p2.tag) {
              case 3:
                k = h;
                p2.effectTag |= 4096;
                p2.expirationTime = b;
                var B2 = Xi(p2, k, b);
                yg(p2, B2);
                break a;
              case 1:
                k = h;
                var w2 = p2.type, ub = p2.stateNode;
                if ((p2.effectTag & 64) === 0 && (typeof w2.getDerivedStateFromError === "function" || ub !== null && typeof ub.componentDidCatch === "function" && (aj === null || !aj.has(ub)))) {
                  p2.effectTag |= 4096;
                  p2.expirationTime = b;
                  var vb = $i(p2, k, b);
                  yg(p2, vb);
                  break a;
                }
            }
            p2 = p2.return;
          } while (p2 !== null);
        }
        X = Pj(X);
      } catch (Xc) {
        b = Xc;
        continue;
      }
      break;
    } while (1);
  }
  function Fj() {
    var a = cj.current;
    cj.current = sh;
    return a === null ? sh : a;
  }
  function Ag(a, b) {
    a < lj && 2 < a && (lj = a);
    b !== null && a < mj && 2 < a && (mj = a, nj = b);
  }
  function Bg(a) {
    a > wi && (wi = a);
  }
  function Kj() {
    for (; X !== null; )
      X = Qj(X);
  }
  function Gj() {
    for (; X !== null && !Uf(); )
      X = Qj(X);
  }
  function Qj(a) {
    var b = Rj(a.alternate, a, U);
    a.memoizedProps = a.pendingProps;
    b === null && (b = Pj(a));
    dj.current = null;
    return b;
  }
  function Pj(a) {
    X = a;
    do {
      var b = X.alternate;
      a = X.return;
      if ((X.effectTag & 2048) === 0) {
        b = si(b, X, U);
        if (U === 1 || X.childExpirationTime !== 1) {
          for (var c = 0, d = X.child; d !== null; ) {
            var e = d.expirationTime, f = d.childExpirationTime;
            e > c && (c = e);
            f > c && (c = f);
            d = d.sibling;
          }
          X.childExpirationTime = c;
        }
        if (b !== null)
          return b;
        a !== null && (a.effectTag & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = X.firstEffect), X.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (a.lastEffect !== null ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
      } else {
        b = zi(X);
        if (b !== null)
          return b.effectTag &= 2047, b;
        a !== null && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
      }
      b = X.sibling;
      if (b !== null)
        return b;
      X = a;
    } while (X !== null);
    S === ti && (S = jj);
    return null;
  }
  function Ij(a) {
    var b = a.expirationTime;
    a = a.childExpirationTime;
    return b > a ? b : a;
  }
  function Jj(a) {
    var b = ag();
    cg(99, Sj.bind(null, a, b));
    return null;
  }
  function Sj(a, b) {
    do
      Dj();
    while (rj !== null);
    if ((W & (fj | gj)) !== V)
      throw Error(u(327));
    var c = a.finishedWork, d = a.finishedExpirationTime;
    if (c === null)
      return null;
    a.finishedWork = null;
    a.finishedExpirationTime = 0;
    if (c === a.current)
      throw Error(u(177));
    a.callbackNode = null;
    a.callbackExpirationTime = 0;
    a.callbackPriority = 90;
    a.nextKnownPendingLevel = 0;
    var e = Ij(c);
    a.firstPendingTime = e;
    d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
    d <= a.lastPingedTime && (a.lastPingedTime = 0);
    d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
    a === T && (X = T = null, U = 0);
    1 < c.effectTag ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;
    if (e !== null) {
      var f = W;
      W |= gj;
      dj.current = null;
      Dd = fd;
      var g = xd();
      if (yd(g)) {
        if ("selectionStart" in g)
          var h = { start: g.selectionStart, end: g.selectionEnd };
        else
          a: {
            h = (h = g.ownerDocument) && h.defaultView || window;
            var k = h.getSelection && h.getSelection();
            if (k && k.rangeCount !== 0) {
              h = k.anchorNode;
              var l2 = k.anchorOffset, m = k.focusNode;
              k = k.focusOffset;
              try {
                h.nodeType, m.nodeType;
              } catch (wb) {
                h = null;
                break a;
              }
              var p2 = 0, x2 = -1, z2 = -1, ca = 0, D2 = 0, t2 = g, y2 = null;
              b:
                for (; ; ) {
                  for (var A2; ; ) {
                    t2 !== h || l2 !== 0 && t2.nodeType !== 3 || (x2 = p2 + l2);
                    t2 !== m || k !== 0 && t2.nodeType !== 3 || (z2 = p2 + k);
                    t2.nodeType === 3 && (p2 += t2.nodeValue.length);
                    if ((A2 = t2.firstChild) === null)
                      break;
                    y2 = t2;
                    t2 = A2;
                  }
                  for (; ; ) {
                    if (t2 === g)
                      break b;
                    y2 === h && ++ca === l2 && (x2 = p2);
                    y2 === m && ++D2 === k && (z2 = p2);
                    if ((A2 = t2.nextSibling) !== null)
                      break;
                    t2 = y2;
                    y2 = t2.parentNode;
                  }
                  t2 = A2;
                }
              h = x2 === -1 || z2 === -1 ? null : { start: x2, end: z2 };
            } else
              h = null;
          }
        h = h || { start: 0, end: 0 };
      } else
        h = null;
      Ed = { activeElementDetached: null, focusedElem: g, selectionRange: h };
      fd = false;
      Y = e;
      do
        try {
          Tj();
        } catch (wb) {
          if (Y === null)
            throw Error(u(330));
          Ei(Y, wb);
          Y = Y.nextEffect;
        }
      while (Y !== null);
      Y = e;
      do
        try {
          for (g = a, h = b; Y !== null; ) {
            var q2 = Y.effectTag;
            q2 & 16 && Rb(Y.stateNode, "");
            if (q2 & 128) {
              var B2 = Y.alternate;
              if (B2 !== null) {
                var w2 = B2.ref;
                w2 !== null && (typeof w2 === "function" ? w2(null) : w2.current = null);
              }
            }
            switch (q2 & 1038) {
              case 2:
                Pi(Y);
                Y.effectTag &= -3;
                break;
              case 6:
                Pi(Y);
                Y.effectTag &= -3;
                Si(Y.alternate, Y);
                break;
              case 1024:
                Y.effectTag &= -1025;
                break;
              case 1028:
                Y.effectTag &= -1025;
                Si(Y.alternate, Y);
                break;
              case 4:
                Si(Y.alternate, Y);
                break;
              case 8:
                l2 = Y, Mi(g, l2, h), Ni(l2);
            }
            Y = Y.nextEffect;
          }
        } catch (wb) {
          if (Y === null)
            throw Error(u(330));
          Ei(Y, wb);
          Y = Y.nextEffect;
        }
      while (Y !== null);
      w2 = Ed;
      B2 = xd();
      q2 = w2.focusedElem;
      h = w2.selectionRange;
      if (B2 !== q2 && q2 && q2.ownerDocument && wd(q2.ownerDocument.documentElement, q2)) {
        h !== null && yd(q2) && (B2 = h.start, w2 = h.end, w2 === void 0 && (w2 = B2), "selectionStart" in q2 ? (q2.selectionStart = B2, q2.selectionEnd = Math.min(w2, q2.value.length)) : (w2 = (B2 = q2.ownerDocument || document) && B2.defaultView || window, w2.getSelection && (w2 = w2.getSelection(), l2 = q2.textContent.length, g = Math.min(h.start, l2), h = h.end === void 0 ? g : Math.min(h.end, l2), !w2.extend && g > h && (l2 = h, h = g, g = l2), l2 = vd(q2, g), m = vd(q2, h), l2 && m && (w2.rangeCount !== 1 || w2.anchorNode !== l2.node || w2.anchorOffset !== l2.offset || w2.focusNode !== m.node || w2.focusOffset !== m.offset) && (B2 = B2.createRange(), B2.setStart(l2.node, l2.offset), w2.removeAllRanges(), g > h ? (w2.addRange(B2), w2.extend(m.node, m.offset)) : (B2.setEnd(m.node, m.offset), w2.addRange(B2))))));
        B2 = [];
        for (w2 = q2; w2 = w2.parentNode; )
          w2.nodeType === 1 && B2.push({
            element: w2,
            left: w2.scrollLeft,
            top: w2.scrollTop
          });
        typeof q2.focus === "function" && q2.focus();
        for (q2 = 0; q2 < B2.length; q2++)
          w2 = B2[q2], w2.element.scrollLeft = w2.left, w2.element.scrollTop = w2.top;
      }
      fd = !!Dd;
      Ed = Dd = null;
      a.current = c;
      Y = e;
      do
        try {
          for (q2 = a; Y !== null; ) {
            var ub = Y.effectTag;
            ub & 36 && Ji(q2, Y.alternate, Y);
            if (ub & 128) {
              B2 = void 0;
              var vb = Y.ref;
              if (vb !== null) {
                var Xc = Y.stateNode;
                switch (Y.tag) {
                  case 5:
                    B2 = Xc;
                    break;
                  default:
                    B2 = Xc;
                }
                typeof vb === "function" ? vb(B2) : vb.current = B2;
              }
            }
            Y = Y.nextEffect;
          }
        } catch (wb) {
          if (Y === null)
            throw Error(u(330));
          Ei(Y, wb);
          Y = Y.nextEffect;
        }
      while (Y !== null);
      Y = null;
      Vf();
      W = f;
    } else
      a.current = c;
    if (qj)
      qj = false, rj = a, sj = b;
    else
      for (Y = e; Y !== null; )
        b = Y.nextEffect, Y.nextEffect = null, Y = b;
    b = a.firstPendingTime;
    b === 0 && (aj = null);
    b === 1073741823 ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
    typeof Uj === "function" && Uj(c.stateNode, d);
    Z(a);
    if (Yi)
      throw Yi = false, a = Zi, Zi = null, a;
    if ((W & ej) !== V)
      return null;
    gg();
    return null;
  }
  function Tj() {
    for (; Y !== null; ) {
      var a = Y.effectTag;
      (a & 256) !== 0 && Gi(Y.alternate, Y);
      (a & 512) === 0 || qj || (qj = true, dg(97, function() {
        Dj();
        return null;
      }));
      Y = Y.nextEffect;
    }
  }
  function Dj() {
    if (sj !== 90) {
      var a = 97 < sj ? 97 : sj;
      sj = 90;
      return cg(a, Vj);
    }
  }
  function Vj() {
    if (rj === null)
      return false;
    var a = rj;
    rj = null;
    if ((W & (fj | gj)) !== V)
      throw Error(u(331));
    var b = W;
    W |= gj;
    for (a = a.current.firstEffect; a !== null; ) {
      try {
        var c = a;
        if ((c.effectTag & 512) !== 0)
          switch (c.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              Hi(5, c), Ii(5, c);
          }
      } catch (d) {
        if (a === null)
          throw Error(u(330));
        Ei(a, d);
      }
      c = a.nextEffect;
      a.nextEffect = null;
      a = c;
    }
    W = b;
    gg();
    return true;
  }
  function Wj(a, b, c) {
    b = Ai(c, b);
    b = Xi(a, b, 1073741823);
    xg(a, b);
    a = xj(a, 1073741823);
    a !== null && Z(a);
  }
  function Ei(a, b) {
    if (a.tag === 3)
      Wj(a, a, b);
    else
      for (var c = a.return; c !== null; ) {
        if (c.tag === 3) {
          Wj(c, a, b);
          break;
        } else if (c.tag === 1) {
          var d = c.stateNode;
          if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (aj === null || !aj.has(d))) {
            a = Ai(b, a);
            a = $i(c, a, 1073741823);
            xg(c, a);
            c = xj(c, 1073741823);
            c !== null && Z(c);
            break;
          }
        }
        c = c.return;
      }
  }
  function Oj(a, b, c) {
    var d = a.pingCache;
    d !== null && d.delete(b);
    T === a && U === c ? S === vi || S === ui && lj === 1073741823 && $f() - Ti < pj ? Ej(a, U) : oj = true : Aj(a, c) && (b = a.lastPingedTime, b !== 0 && b < c || (a.lastPingedTime = c, Z(a)));
  }
  function Vi(a, b) {
    var c = a.stateNode;
    c !== null && c.delete(b);
    b = 0;
    b === 0 && (b = Gg(), b = Hg(b, a, null));
    a = xj(a, b);
    a !== null && Z(a);
  }
  var Rj;
  Rj = function(a, b, c) {
    var d = b.expirationTime;
    if (a !== null) {
      var e = b.pendingProps;
      if (a.memoizedProps !== e || K.current)
        rg = true;
      else {
        if (d < c) {
          rg = false;
          switch (b.tag) {
            case 3:
              hi(b);
              Xh();
              break;
            case 5:
              fh(b);
              if (b.mode & 4 && c !== 1 && e.hidden)
                return b.expirationTime = b.childExpirationTime = 1, null;
              break;
            case 1:
              L(b.type) && Gf(b);
              break;
            case 4:
              dh(b, b.stateNode.containerInfo);
              break;
            case 10:
              d = b.memoizedProps.value;
              e = b.type._context;
              I(jg, e._currentValue);
              e._currentValue = d;
              break;
            case 13:
              if (b.memoizedState !== null) {
                d = b.child.childExpirationTime;
                if (d !== 0 && d >= c)
                  return ji(a, b, c);
                I(M, M.current & 1);
                b = $h(a, b, c);
                return b !== null ? b.sibling : null;
              }
              I(M, M.current & 1);
              break;
            case 19:
              d = b.childExpirationTime >= c;
              if ((a.effectTag & 64) !== 0) {
                if (d)
                  return mi(a, b, c);
                b.effectTag |= 64;
              }
              e = b.memoizedState;
              e !== null && (e.rendering = null, e.tail = null);
              I(M, M.current);
              if (!d)
                return null;
          }
          return $h(a, b, c);
        }
        rg = false;
      }
    } else
      rg = false;
    b.expirationTime = 0;
    switch (b.tag) {
      case 2:
        d = b.type;
        a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        e = Cf(b, J.current);
        qg(b, c);
        e = oh(null, b, d, a, e, c);
        b.effectTag |= 1;
        if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;
          if (L(d)) {
            var f = true;
            Gf(b);
          } else
            f = false;
          b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
          ug(b);
          var g = d.getDerivedStateFromProps;
          typeof g === "function" && Fg(b, d, g, a);
          e.updater = Jg;
          b.stateNode = e;
          e._reactInternalFiber = b;
          Ng(b, d, a, c);
          b = gi(null, b, d, true, f, c);
        } else
          b.tag = 0, R(null, b, e, c), b = b.child;
        return b;
      case 16:
        a: {
          e = b.elementType;
          a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
          a = b.pendingProps;
          ob(e);
          if (e._status !== 1)
            throw e._result;
          e = e._result;
          b.type = e;
          f = b.tag = Xj(e);
          a = ig(e, a);
          switch (f) {
            case 0:
              b = di(null, b, e, a, c);
              break a;
            case 1:
              b = fi(null, b, e, a, c);
              break a;
            case 11:
              b = Zh(null, b, e, a, c);
              break a;
            case 14:
              b = ai(null, b, e, ig(e.type, a), d, c);
              break a;
          }
          throw Error(u(306, e, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c);
      case 3:
        hi(b);
        d = b.updateQueue;
        if (a === null || d === null)
          throw Error(u(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = e !== null ? e.element : null;
        vg(a, b);
        zg(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e)
          Xh(), b = $h(a, b, c);
        else {
          if (e = b.stateNode.hydrate)
            Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = true;
          if (e)
            for (c = Yg(b, null, d, c), b.child = c; c; )
              c.effectTag = c.effectTag & -3 | 1024, c = c.sibling;
          else
            R(a, b, d, c), Xh();
          b = b.child;
        }
        return b;
      case 5:
        return fh(b), a === null && Uh(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : f !== null && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && c !== 1 && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c), b = b.child), b;
      case 6:
        return a === null && Uh(b), null;
      case 13:
        return ji(a, b, c);
      case 4:
        return dh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Xg(b, null, d, c) : R(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c);
      case 7:
        return R(a, b, b.pendingProps, c), b.child;
      case 8:
        return R(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return R(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          var h = b.type._context;
          I(jg, h._currentValue);
          h._currentValue = f;
          if (g !== null)
            if (h = g.value, f = $e(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
              if (g.children === e.children && !K.current) {
                b = $h(a, b, c);
                break a;
              }
            } else
              for (h = b.child, h !== null && (h.return = b); h !== null; ) {
                var k = h.dependencies;
                if (k !== null) {
                  g = h.child;
                  for (var l2 = k.firstContext; l2 !== null; ) {
                    if (l2.context === d && (l2.observedBits & f) !== 0) {
                      h.tag === 1 && (l2 = wg(c, null), l2.tag = 2, xg(h, l2));
                      h.expirationTime < c && (h.expirationTime = c);
                      l2 = h.alternate;
                      l2 !== null && l2.expirationTime < c && (l2.expirationTime = c);
                      pg(h.return, c);
                      k.expirationTime < c && (k.expirationTime = c);
                      break;
                    }
                    l2 = l2.next;
                  }
                } else
                  g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
                if (g !== null)
                  g.return = h;
                else
                  for (g = h; g !== null; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    h = g.sibling;
                    if (h !== null) {
                      h.return = g.return;
                      g = h;
                      break;
                    }
                    g = g.return;
                  }
                h = g;
              }
          R(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, f = b.pendingProps, d = f.children, qg(b, c), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c), b.child;
      case 14:
        return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c);
      case 15:
        return ci(a, b, b.type, b.pendingProps, d, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = true, Gf(b)) : a = false, qg(b, c), Lg(b, d, e), Ng(b, d, e, c), gi(null, b, d, true, a, c);
      case 19:
        return mi(a, b, c);
    }
    throw Error(u(156, b.tag));
  };
  var Uj = null, Li = null;
  function Yj(a) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
      return false;
    var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (b.isDisabled || !b.supportsFiber)
      return true;
    try {
      var c = b.inject(a);
      Uj = function(a2) {
        try {
          b.onCommitFiberRoot(c, a2, void 0, (a2.current.effectTag & 64) === 64);
        } catch (e) {
        }
      };
      Li = function(a2) {
        try {
          b.onCommitFiberUnmount(c, a2);
        } catch (e) {
        }
      };
    } catch (d) {
    }
    return true;
  }
  function Zj(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.effectTag = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childExpirationTime = this.expirationTime = 0;
    this.alternate = null;
  }
  function Sh(a, b, c, d) {
    return new Zj(a, b, c, d);
  }
  function bi(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Xj(a) {
    if (typeof a === "function")
      return bi(a) ? 1 : 0;
    if (a !== void 0 && a !== null) {
      a = a.$$typeof;
      if (a === gb)
        return 11;
      if (a === jb)
        return 14;
    }
    return 2;
  }
  function Sg(a, b) {
    var c = a.alternate;
    c === null ? (c = Sh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
    c.childExpirationTime = a.childExpirationTime;
    c.expirationTime = a.expirationTime;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = b === null ? null : {
      expirationTime: b.expirationTime,
      firstContext: b.firstContext,
      responders: b.responders
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Ug(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if (typeof a === "function")
      bi(a) && (g = 1);
    else if (typeof a === "string")
      g = 5;
    else
      a:
        switch (a) {
          case ab:
            return Wg(c.children, e, f, b);
          case fb:
            g = 8;
            e |= 7;
            break;
          case bb:
            g = 8;
            e |= 1;
            break;
          case cb:
            return a = Sh(12, c, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
          case hb:
            return a = Sh(13, c, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
          case ib:
            return a = Sh(19, c, b, e), a.elementType = ib, a.expirationTime = f, a;
          default:
            if (typeof a === "object" && a !== null)
              switch (a.$$typeof) {
                case db:
                  g = 10;
                  break a;
                case eb:
                  g = 9;
                  break a;
                case gb:
                  g = 11;
                  break a;
                case jb:
                  g = 14;
                  break a;
                case kb:
                  g = 16;
                  d = null;
                  break a;
                case lb:
                  g = 22;
                  break a;
              }
            throw Error(u(130, a == null ? a : typeof a, ""));
        }
    b = Sh(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.expirationTime = f;
    return b;
  }
  function Wg(a, b, c, d) {
    a = Sh(7, a, d, b);
    a.expirationTime = c;
    return a;
  }
  function Tg(a, b, c) {
    a = Sh(6, a, null, b);
    a.expirationTime = c;
    return a;
  }
  function Vg(a, b, c) {
    b = Sh(4, a.children !== null ? a.children : [], a.key, b);
    b.expirationTime = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function ak(a, b, c) {
    this.tag = b;
    this.current = null;
    this.containerInfo = a;
    this.pingCache = this.pendingChildren = null;
    this.finishedExpirationTime = 0;
    this.finishedWork = null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 90;
    this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
  }
  function Aj(a, b) {
    var c = a.firstSuspendedTime;
    a = a.lastSuspendedTime;
    return c !== 0 && c >= b && a <= b;
  }
  function xi(a, b) {
    var c = a.firstSuspendedTime, d = a.lastSuspendedTime;
    c < b && (a.firstSuspendedTime = b);
    if (d > b || c === 0)
      a.lastSuspendedTime = b;
    b <= a.lastPingedTime && (a.lastPingedTime = 0);
    b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  }
  function yi(a, b) {
    b > a.firstPendingTime && (a.firstPendingTime = b);
    var c = a.firstSuspendedTime;
    c !== 0 && (b >= c ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
  }
  function Cj(a, b) {
    var c = a.lastExpiredTime;
    if (c === 0 || c > b)
      a.lastExpiredTime = b;
  }
  function bk(a, b, c, d) {
    var e = b.current, f = Gg(), g = Dg.suspense;
    f = Hg(f, e, g);
    a:
      if (c) {
        c = c._reactInternalFiber;
        b: {
          if (dc(c) !== c || c.tag !== 1)
            throw Error(u(170));
          var h = c;
          do {
            switch (h.tag) {
              case 3:
                h = h.stateNode.context;
                break b;
              case 1:
                if (L(h.type)) {
                  h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                  break b;
                }
            }
            h = h.return;
          } while (h !== null);
          throw Error(u(171));
        }
        if (c.tag === 1) {
          var k = c.type;
          if (L(k)) {
            c = Ff(c, k, h);
            break a;
          }
        }
        c = h;
      } else
        c = Af;
    b.context === null ? b.context = c : b.pendingContext = c;
    b = wg(f, g);
    b.payload = { element: a };
    d = d === void 0 ? null : d;
    d !== null && (b.callback = d);
    xg(e, b);
    Ig(e, f);
    return f;
  }
  function ck(a) {
    a = a.current;
    if (!a.child)
      return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function dk(a, b) {
    a = a.memoizedState;
    a !== null && a.dehydrated !== null && a.retryTime < b && (a.retryTime = b);
  }
  function ek(a, b) {
    dk(a, b);
    (a = a.alternate) && dk(a, b);
  }
  function fk(a, b, c) {
    c = c != null && c.hydrate === true;
    var d = new ak(a, b, c), e = Sh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
    d.current = e;
    e.stateNode = d;
    ug(e);
    a[Od] = d.current;
    c && b !== 0 && Jc(a, a.nodeType === 9 ? a : a.ownerDocument);
    this._internalRoot = d;
  }
  fk.prototype.render = function(a) {
    bk(a, this._internalRoot, null, null);
  };
  fk.prototype.unmount = function() {
    var a = this._internalRoot, b = a.containerInfo;
    bk(null, a, null, function() {
      b[Od] = null;
    });
  };
  function gk(a) {
    return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
  }
  function hk(a, b) {
    b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
    if (!b)
      for (var c; c = a.lastChild; )
        a.removeChild(c);
    return new fk(a, 0, b ? { hydrate: true } : void 0);
  }
  function ik(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f._internalRoot;
      if (typeof e === "function") {
        var h = e;
        e = function() {
          var a2 = ck(g);
          h.call(a2);
        };
      }
      bk(b, g, a, e);
    } else {
      f = c._reactRootContainer = hk(c, d);
      g = f._internalRoot;
      if (typeof e === "function") {
        var k = e;
        e = function() {
          var a2 = ck(g);
          k.call(a2);
        };
      }
      Nj(function() {
        bk(b, g, a, e);
      });
    }
    return ck(g);
  }
  function jk(a, b, c) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: $a, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  wc = function(a) {
    if (a.tag === 13) {
      var b = hg(Gg(), 150, 100);
      Ig(a, b);
      ek(a, b);
    }
  };
  xc = function(a) {
    a.tag === 13 && (Ig(a, 3), ek(a, 3));
  };
  yc = function(a) {
    if (a.tag === 13) {
      var b = Gg();
      b = Hg(b, a, null);
      Ig(a, b);
      ek(a, b);
    }
  };
  za = function(a, b, c) {
    switch (b) {
      case "input":
        Cb(a, c);
        b = c.name;
        if (c.type === "radio" && b != null) {
          for (c = a; c.parentNode; )
            c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Qd(d);
              if (!e)
                throw Error(u(90));
              yb(d);
              Cb(d, e);
            }
          }
        }
        break;
      case "textarea":
        Kb(a, c);
        break;
      case "select":
        b = c.value, b != null && Hb(a, !!c.multiple, b, false);
    }
  };
  Fa = Mj;
  Ga = function(a, b, c, d, e) {
    var f = W;
    W |= 4;
    try {
      return cg(98, a.bind(null, b, c, d, e));
    } finally {
      W = f, W === V && gg();
    }
  };
  Ha = function() {
    (W & (1 | fj | gj)) === V && (Lj(), Dj());
  };
  Ia = function(a, b) {
    var c = W;
    W |= 2;
    try {
      return a(b);
    } finally {
      W = c, W === V && gg();
    }
  };
  function kk(a, b) {
    var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gk(b))
      throw Error(u(200));
    return jk(a, b, null, c);
  }
  var lk = { Events: [Nc, Pd, Qd, xa, ta, Xd, function(a) {
    jc(a, Wd);
  }, Da, Ea, id, mc, Dj, { current: false }] };
  (function(a) {
    var b = a.findFiberByHostInstance;
    return Yj(n({}, a, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wa.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
      a2 = hc(a2);
      return a2 === null ? null : a2.stateNode;
    }, findFiberByHostInstance: function(a2) {
      return b ? b(a2) : null;
    }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
  })({
    findFiberByHostInstance: tc,
    bundleType: 0,
    version: "16.14.0",
    rendererPackageName: "react-dom"
  });
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
  reactDom_production_min.createPortal = kk;
  reactDom_production_min.findDOMNode = function(a) {
    if (a == null)
      return null;
    if (a.nodeType === 1)
      return a;
    var b = a._reactInternalFiber;
    if (b === void 0) {
      if (typeof a.render === "function")
        throw Error(u(188));
      throw Error(u(268, Object.keys(a)));
    }
    a = hc(b);
    a = a === null ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a, b) {
    if ((W & (fj | gj)) !== V)
      throw Error(u(187));
    var c = W;
    W |= 1;
    try {
      return cg(99, a.bind(null, b));
    } finally {
      W = c, gg();
    }
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!gk(b))
      throw Error(u(200));
    return ik(null, a, b, true, c);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!gk(b))
      throw Error(u(200));
    return ik(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!gk(a))
      throw Error(u(40));
    return a._reactRootContainer ? (Nj(function() {
      ik(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[Od] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Mj;
  reactDom_production_min.unstable_createPortal = function(a, b) {
    return kk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  };
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!gk(c))
      throw Error(u(200));
    if (a == null || a._reactInternalFiber === void 0)
      throw Error(u(38));
    return ik(a, b, c, false, d);
  };
  reactDom_production_min.version = "16.14.0";
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  var AutosizeInput$1 = {};
  Object.defineProperty(AutosizeInput$1, "__esModule", {
    value: true
  });
  var _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  var _react = react.exports;
  var _react2 = _interopRequireDefault$3(_react);
  var _propTypes = propTypes.exports;
  var _propTypes2 = _interopRequireDefault$3(_propTypes);
  function _interopRequireDefault$3(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _objectWithoutProperties(obj, keys2) {
    var target = {};
    for (var i2 in obj) {
      if (keys2.indexOf(i2) >= 0)
        continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i2))
        continue;
      target[i2] = obj[i2];
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _possibleConstructorReturn(self2, call) {
    if (!self2) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self2;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
    if (superClass)
      Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  var sizerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    visibility: "hidden",
    height: 0,
    overflow: "scroll",
    whiteSpace: "pre"
  };
  var INPUT_PROPS_BLACKLIST = ["extraWidth", "injectStyles", "inputClassName", "inputRef", "inputStyle", "minWidth", "onAutosize", "placeholderIsMinWidth"];
  var cleanInputProps = function cleanInputProps2(inputProps) {
    INPUT_PROPS_BLACKLIST.forEach(function(field) {
      return delete inputProps[field];
    });
    return inputProps;
  };
  var copyStyles = function copyStyles2(styles2, node) {
    node.style.fontSize = styles2.fontSize;
    node.style.fontFamily = styles2.fontFamily;
    node.style.fontWeight = styles2.fontWeight;
    node.style.fontStyle = styles2.fontStyle;
    node.style.letterSpacing = styles2.letterSpacing;
    node.style.textTransform = styles2.textTransform;
  };
  var isIE = typeof window !== "undefined" && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;
  var generateId = function generateId2() {
    return isIE ? "_" + Math.random().toString(36).substr(2, 12) : void 0;
  };
  var AutosizeInput = function(_Component) {
    _inherits(AutosizeInput2, _Component);
    _createClass(AutosizeInput2, null, [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var id2 = props.id;
        return id2 !== state.prevId ? { inputId: id2 || generateId(), prevId: id2 } : null;
      }
    }]);
    function AutosizeInput2(props) {
      _classCallCheck(this, AutosizeInput2);
      var _this = _possibleConstructorReturn(this, (AutosizeInput2.__proto__ || Object.getPrototypeOf(AutosizeInput2)).call(this, props));
      _this.inputRef = function(el) {
        _this.input = el;
        if (typeof _this.props.inputRef === "function") {
          _this.props.inputRef(el);
        }
      };
      _this.placeHolderSizerRef = function(el) {
        _this.placeHolderSizer = el;
      };
      _this.sizerRef = function(el) {
        _this.sizer = el;
      };
      _this.state = {
        inputWidth: props.minWidth,
        inputId: props.id || generateId(),
        prevId: props.id
      };
      return _this;
    }
    _createClass(AutosizeInput2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        this.copyInputStyles();
        this.updateInputWidth();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevState.inputWidth !== this.state.inputWidth) {
          if (typeof this.props.onAutosize === "function") {
            this.props.onAutosize(this.state.inputWidth);
          }
        }
        this.updateInputWidth();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "copyInputStyles",
      value: function copyInputStyles() {
        if (!this.mounted || !window.getComputedStyle) {
          return;
        }
        var inputStyles = this.input && window.getComputedStyle(this.input);
        if (!inputStyles) {
          return;
        }
        copyStyles(inputStyles, this.sizer);
        if (this.placeHolderSizer) {
          copyStyles(inputStyles, this.placeHolderSizer);
        }
      }
    }, {
      key: "updateInputWidth",
      value: function updateInputWidth() {
        if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === "undefined") {
          return;
        }
        var newInputWidth = void 0;
        if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
          newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
        } else {
          newInputWidth = this.sizer.scrollWidth + 2;
        }
        var extraWidth = this.props.type === "number" && this.props.extraWidth === void 0 ? 16 : parseInt(this.props.extraWidth) || 0;
        newInputWidth += extraWidth;
        if (newInputWidth < this.props.minWidth) {
          newInputWidth = this.props.minWidth;
        }
        if (newInputWidth !== this.state.inputWidth) {
          this.setState({
            inputWidth: newInputWidth
          });
        }
      }
    }, {
      key: "getInput",
      value: function getInput() {
        return this.input;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.input.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.input.blur();
      }
    }, {
      key: "select",
      value: function select() {
        this.input.select();
      }
    }, {
      key: "renderStyles",
      value: function renderStyles() {
        var injectStyles = this.props.injectStyles;
        return isIE && injectStyles ? _react2.default.createElement("style", { dangerouslySetInnerHTML: {
          __html: "input#" + this.state.inputId + "::-ms-clear {display: none;}"
        } }) : null;
      }
    }, {
      key: "render",
      value: function render2() {
        var sizerValue = [this.props.defaultValue, this.props.value, ""].reduce(function(previousValue, currentValue) {
          if (previousValue !== null && previousValue !== void 0) {
            return previousValue;
          }
          return currentValue;
        });
        var wrapperStyle = _extends({}, this.props.style);
        if (!wrapperStyle.display)
          wrapperStyle.display = "inline-block";
        var inputStyle2 = _extends({
          boxSizing: "content-box",
          width: this.state.inputWidth + "px"
        }, this.props.inputStyle);
        var inputProps = _objectWithoutProperties(this.props, []);
        cleanInputProps(inputProps);
        inputProps.className = this.props.inputClassName;
        inputProps.id = this.state.inputId;
        inputProps.style = inputStyle2;
        return _react2.default.createElement("div", { className: this.props.className, style: wrapperStyle }, this.renderStyles(), _react2.default.createElement("input", _extends({}, inputProps, { ref: this.inputRef })), _react2.default.createElement("div", { ref: this.sizerRef, style: sizerStyle }, sizerValue), this.props.placeholder ? _react2.default.createElement("div", { ref: this.placeHolderSizerRef, style: sizerStyle }, this.props.placeholder) : null);
      }
    }]);
    return AutosizeInput2;
  }(_react.Component);
  AutosizeInput.propTypes = {
    className: _propTypes2.default.string,
    defaultValue: _propTypes2.default.any,
    extraWidth: _propTypes2.default.oneOfType([
      _propTypes2.default.number,
      _propTypes2.default.string
    ]),
    id: _propTypes2.default.string,
    injectStyles: _propTypes2.default.bool,
    inputClassName: _propTypes2.default.string,
    inputRef: _propTypes2.default.func,
    inputStyle: _propTypes2.default.object,
    minWidth: _propTypes2.default.oneOfType([
      _propTypes2.default.number,
      _propTypes2.default.string
    ]),
    onAutosize: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    placeholderIsMinWidth: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    value: _propTypes2.default.any
  };
  AutosizeInput.defaultProps = {
    minWidth: 1,
    injectStyles: true
  };
  var _default = AutosizeInput$1.default = AutosizeInput;
  var noop = function noop2() {
  };
  function applyPrefixToName(prefix, name) {
    if (!name) {
      return prefix;
    } else if (name[0] === "-") {
      return prefix + name;
    } else {
      return prefix + "__" + name;
    }
  }
  function classNames(prefix, state, className) {
    var arr = [className];
    if (state && prefix) {
      for (var key in state) {
        if (state.hasOwnProperty(key) && state[key]) {
          arr.push("".concat(applyPrefixToName(prefix, key)));
        }
      }
    }
    return arr.filter(function(i2) {
      return i2;
    }).map(function(i2) {
      return String(i2).trim();
    }).join(" ");
  }
  var cleanValue = function cleanValue2(value) {
    if (Array.isArray(value))
      return value.filter(Boolean);
    if (_typeof(value) === "object" && value !== null)
      return [value];
    return [];
  };
  function handleInputChange(inputValue, actionMeta, onInputChange) {
    if (onInputChange) {
      var newValue = onInputChange(inputValue, actionMeta);
      if (typeof newValue === "string")
        return newValue;
    }
    return inputValue;
  }
  function isDocumentElement(el) {
    return [document.documentElement, document.body, window].indexOf(el) > -1;
  }
  function getScrollTop(el) {
    if (isDocumentElement(el)) {
      return window.pageYOffset;
    }
    return el.scrollTop;
  }
  function scrollTo(el, top) {
    if (isDocumentElement(el)) {
      window.scrollTo(0, top);
      return;
    }
    el.scrollTop = top;
  }
  function getScrollParent(element) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === "absolute";
    var overflowRx = /(auto|scroll)/;
    var docEl = document.documentElement;
    if (style.position === "fixed")
      return docEl;
    for (var parent = element; parent = parent.parentElement; ) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === "static") {
        continue;
      }
      if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
        return parent;
      }
    }
    return docEl;
  }
  function easeOutCubic(t2, b, c, d) {
    return c * ((t2 = t2 / d - 1) * t2 * t2 + 1) + b;
  }
  function animatedScrollTo(element, to2) {
    var duration = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200;
    var callback = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : noop;
    var start = getScrollTop(element);
    var change = to2 - start;
    var increment = 10;
    var currentTime = 0;
    function animateScroll() {
      currentTime += increment;
      var val = easeOutCubic(currentTime, start, change, duration);
      scrollTo(element, val);
      if (currentTime < duration) {
        window.requestAnimationFrame(animateScroll);
      } else {
        callback(element);
      }
    }
    animateScroll();
  }
  function scrollIntoView(menuEl, focusedEl) {
    var menuRect = menuEl.getBoundingClientRect();
    var focusedRect = focusedEl.getBoundingClientRect();
    var overScroll = focusedEl.offsetHeight / 3;
    if (focusedRect.bottom + overScroll > menuRect.bottom) {
      scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
    } else if (focusedRect.top - overScroll < menuRect.top) {
      scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
    }
  }
  function getBoundingClientObj(element) {
    var rect = element.getBoundingClientRect();
    return {
      bottom: rect.bottom,
      height: rect.height,
      left: rect.left,
      right: rect.right,
      top: rect.top,
      width: rect.width
    };
  }
  function isTouchCapable() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  function isMobileDevice() {
    try {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    } catch (e) {
      return false;
    }
  }
  function ownKeys$3(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$3(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$3(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$3(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _createSuper$5(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$5() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function getMenuPlacement(_ref3) {
    var maxHeight = _ref3.maxHeight, menuEl = _ref3.menuEl, minHeight = _ref3.minHeight, placement = _ref3.placement, shouldScroll = _ref3.shouldScroll, isFixedPosition = _ref3.isFixedPosition, theme = _ref3.theme;
    var spacing2 = theme.spacing;
    var scrollParent = getScrollParent(menuEl);
    var defaultState = {
      placement: "bottom",
      maxHeight
    };
    if (!menuEl || !menuEl.offsetParent)
      return defaultState;
    var _scrollParent$getBoun = scrollParent.getBoundingClientRect(), scrollHeight = _scrollParent$getBoun.height;
    var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(), menuBottom = _menuEl$getBoundingCl.bottom, menuHeight = _menuEl$getBoundingCl.height, menuTop = _menuEl$getBoundingCl.top;
    var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(), containerTop = _menuEl$offsetParent$.top;
    var viewHeight = window.innerHeight;
    var scrollTop = getScrollTop(scrollParent);
    var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
    var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
    var viewSpaceAbove = containerTop - marginTop;
    var viewSpaceBelow = viewHeight - menuTop;
    var scrollSpaceAbove = viewSpaceAbove + scrollTop;
    var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
    var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
    var scrollUp = scrollTop + menuTop - marginTop;
    var scrollDuration = 160;
    switch (placement) {
      case "auto":
      case "bottom":
        if (viewSpaceBelow >= menuHeight) {
          return {
            placement: "bottom",
            maxHeight
          };
        }
        if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }
          return {
            placement: "bottom",
            maxHeight
          };
        }
        if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollDown, scrollDuration);
          }
          var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
          return {
            placement: "bottom",
            maxHeight: constrainedHeight
          };
        }
        if (placement === "auto" || isFixedPosition) {
          var _constrainedHeight = maxHeight;
          var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
          if (spaceAbove >= minHeight) {
            _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing2.controlHeight, maxHeight);
          }
          return {
            placement: "top",
            maxHeight: _constrainedHeight
          };
        }
        if (placement === "bottom") {
          scrollTo(scrollParent, scrollDown);
          return {
            placement: "bottom",
            maxHeight
          };
        }
        break;
      case "top":
        if (viewSpaceAbove >= menuHeight) {
          return {
            placement: "top",
            maxHeight
          };
        }
        if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: "top",
            maxHeight
          };
        }
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          var _constrainedHeight2 = maxHeight;
          if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
            _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
          }
          if (shouldScroll) {
            animatedScrollTo(scrollParent, scrollUp, scrollDuration);
          }
          return {
            placement: "top",
            maxHeight: _constrainedHeight2
          };
        }
        return {
          placement: "bottom",
          maxHeight
        };
      default:
        throw new Error('Invalid placement provided "'.concat(placement, '".'));
    }
    return defaultState;
  }
  function alignToControl(placement) {
    var placementToCSSProp = {
      bottom: "top",
      top: "bottom"
    };
    return placement ? placementToCSSProp[placement] : "bottom";
  }
  var coercePlacement = function coercePlacement2(p2) {
    return p2 === "auto" ? "bottom" : p2;
  };
  var menuCSS = function menuCSS2(_ref22) {
    var _ref3;
    var placement = _ref22.placement, _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, spacing2 = _ref2$theme.spacing, colors2 = _ref2$theme.colors;
    return _ref3 = {
      label: "menu"
    }, _defineProperty$1(_ref3, alignToControl(placement), "100%"), _defineProperty$1(_ref3, "backgroundColor", colors2.neutral0), _defineProperty$1(_ref3, "borderRadius", borderRadius2), _defineProperty$1(_ref3, "boxShadow", "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)"), _defineProperty$1(_ref3, "marginBottom", spacing2.menuGutter), _defineProperty$1(_ref3, "marginTop", spacing2.menuGutter), _defineProperty$1(_ref3, "position", "absolute"), _defineProperty$1(_ref3, "width", "100%"), _defineProperty$1(_ref3, "zIndex", 1), _ref3;
  };
  var PortalPlacementContext = /* @__PURE__ */ react.exports.createContext({
    getPortalPlacement: null
  });
  var MenuPlacer = /* @__PURE__ */ function(_Component) {
    _inherits$1(MenuPlacer2, _Component);
    var _super = _createSuper$5(MenuPlacer2);
    function MenuPlacer2() {
      var _this;
      _classCallCheck$1(this, MenuPlacer2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        maxHeight: _this.props.maxMenuHeight,
        placement: null
      };
      _this.getPlacement = function(ref) {
        var _this$props = _this.props, minMenuHeight = _this$props.minMenuHeight, maxMenuHeight = _this$props.maxMenuHeight, menuPlacement = _this$props.menuPlacement, menuPosition = _this$props.menuPosition, menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView, theme = _this$props.theme;
        if (!ref)
          return;
        var isFixedPosition = menuPosition === "fixed";
        var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
        var state = getMenuPlacement({
          maxHeight: maxMenuHeight,
          menuEl: ref,
          minHeight: minMenuHeight,
          placement: menuPlacement,
          shouldScroll,
          isFixedPosition,
          theme
        });
        var getPortalPlacement = _this.context.getPortalPlacement;
        if (getPortalPlacement)
          getPortalPlacement(state);
        _this.setState(state);
      };
      _this.getUpdatedProps = function() {
        var menuPlacement = _this.props.menuPlacement;
        var placement = _this.state.placement || coercePlacement(menuPlacement);
        return _objectSpread$3(_objectSpread$3({}, _this.props), {}, {
          placement,
          maxHeight: _this.state.maxHeight
        });
      };
      return _this;
    }
    _createClass$1(MenuPlacer2, [{
      key: "render",
      value: function render2() {
        var children = this.props.children;
        return children({
          ref: this.getPlacement,
          placerProps: this.getUpdatedProps()
        });
      }
    }]);
    return MenuPlacer2;
  }(react.exports.Component);
  MenuPlacer.contextType = PortalPlacementContext;
  var Menu = function Menu2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerRef = props.innerRef, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("menu", props),
      className: cx({
        menu: true
      }, className)
    }, innerProps, {
      ref: innerRef
    }), children);
  };
  var menuListCSS = function menuListCSS2(_ref4) {
    var maxHeight = _ref4.maxHeight, baseUnit2 = _ref4.theme.spacing.baseUnit;
    return {
      maxHeight,
      overflowY: "auto",
      paddingBottom: baseUnit2,
      paddingTop: baseUnit2,
      position: "relative",
      WebkitOverflowScrolling: "touch"
    };
  };
  var MenuList = function MenuList2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isMulti = props.isMulti, innerRef = props.innerRef, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("menuList", props),
      className: cx({
        "menu-list": true,
        "menu-list--is-multi": isMulti
      }, className),
      ref: innerRef
    }, innerProps), children);
  };
  var noticeCSS = function noticeCSS2(_ref5) {
    var _ref5$theme = _ref5.theme, baseUnit2 = _ref5$theme.spacing.baseUnit, colors2 = _ref5$theme.colors;
    return {
      color: colors2.neutral40,
      padding: "".concat(baseUnit2 * 2, "px ").concat(baseUnit2 * 3, "px"),
      textAlign: "center"
    };
  };
  var noOptionsMessageCSS = noticeCSS;
  var loadingMessageCSS = noticeCSS;
  var NoOptionsMessage = function NoOptionsMessage2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("noOptionsMessage", props),
      className: cx({
        "menu-notice": true,
        "menu-notice--no-options": true
      }, className)
    }, innerProps), children);
  };
  NoOptionsMessage.defaultProps = {
    children: "No options"
  };
  var LoadingMessage = function LoadingMessage2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("loadingMessage", props),
      className: cx({
        "menu-notice": true,
        "menu-notice--loading": true
      }, className)
    }, innerProps), children);
  };
  LoadingMessage.defaultProps = {
    children: "Loading..."
  };
  var menuPortalCSS = function menuPortalCSS2(_ref6) {
    var rect = _ref6.rect, offset2 = _ref6.offset, position = _ref6.position;
    return {
      left: rect.left,
      position,
      top: offset2,
      width: rect.width,
      zIndex: 1
    };
  };
  var MenuPortal = /* @__PURE__ */ function(_Component2) {
    _inherits$1(MenuPortal2, _Component2);
    var _super2 = _createSuper$5(MenuPortal2);
    function MenuPortal2() {
      var _this2;
      _classCallCheck$1(this, MenuPortal2);
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      _this2 = _super2.call.apply(_super2, [this].concat(args));
      _this2.state = {
        placement: null
      };
      _this2.getPortalPlacement = function(_ref7) {
        var placement = _ref7.placement;
        var initialPlacement = coercePlacement(_this2.props.menuPlacement);
        if (placement !== initialPlacement) {
          _this2.setState({
            placement
          });
        }
      };
      return _this2;
    }
    _createClass$1(MenuPortal2, [{
      key: "render",
      value: function render2() {
        var _this$props2 = this.props, appendTo = _this$props2.appendTo, children = _this$props2.children, controlElement = _this$props2.controlElement, menuPlacement = _this$props2.menuPlacement, position = _this$props2.menuPosition, getStyles = _this$props2.getStyles;
        var isFixed = position === "fixed";
        if (!appendTo && !isFixed || !controlElement) {
          return null;
        }
        var placement = this.state.placement || coercePlacement(menuPlacement);
        var rect = getBoundingClientObj(controlElement);
        var scrollDistance = isFixed ? 0 : window.pageYOffset;
        var offset2 = rect[placement] + scrollDistance;
        var state = {
          offset: offset2,
          position,
          rect
        };
        var menuWrapper = jsx("div", {
          css: getStyles("menuPortal", state)
        }, children);
        return jsx(PortalPlacementContext.Provider, {
          value: {
            getPortalPlacement: this.getPortalPlacement
          }
        }, appendTo ? /* @__PURE__ */ reactDom.exports.createPortal(menuWrapper, appendTo) : menuWrapper);
      }
    }]);
    return MenuPortal2;
  }(react.exports.Component);
  var isArray$6 = Array.isArray;
  var keyList = Object.keys;
  var hasProp = Object.prototype.hasOwnProperty;
  function equal(a, b) {
    if (a === b)
      return true;
    if (a && b && _typeof(a) == "object" && _typeof(b) == "object") {
      var arrA = isArray$6(a), arrB = isArray$6(b), i2, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i2 = length; i2-- !== 0; ) {
          if (!equal(a[i2], b[i2]))
            return false;
        }
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys2 = keyList(a);
      length = keys2.length;
      if (length !== keyList(b).length) {
        return false;
      }
      for (i2 = length; i2-- !== 0; ) {
        if (!hasProp.call(b, keys2[i2]))
          return false;
      }
      for (i2 = length; i2-- !== 0; ) {
        key = keys2[i2];
        if (key === "_owner" && a.$$typeof) {
          continue;
        } else {
          if (!equal(a[key], b[key]))
            return false;
        }
      }
      return true;
    }
    return a !== a && b !== b;
  }
  function exportedEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if (error.message && error.message.match(/stack|recursion/i)) {
        console.warn("Warning: react-fast-compare does not handle circular references.", error.name, error.message);
        return false;
      }
      throw error;
    }
  }
  var containerCSS = function containerCSS2(_ref3) {
    var isDisabled = _ref3.isDisabled, isRtl = _ref3.isRtl;
    return {
      label: "container",
      direction: isRtl ? "rtl" : null,
      pointerEvents: isDisabled ? "none" : null,
      position: "relative"
    };
  };
  var SelectContainer = function SelectContainer2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, isRtl = props.isRtl;
    return jsx("div", _extends$1({
      css: getStyles("container", props),
      className: cx({
        "--is-disabled": isDisabled,
        "--is-rtl": isRtl
      }, className)
    }, innerProps), children);
  };
  var valueContainerCSS = function valueContainerCSS2(_ref22) {
    var spacing2 = _ref22.theme.spacing;
    return {
      alignItems: "center",
      display: "flex",
      flex: 1,
      flexWrap: "wrap",
      padding: "".concat(spacing2.baseUnit / 2, "px ").concat(spacing2.baseUnit * 2, "px"),
      WebkitOverflowScrolling: "touch",
      position: "relative",
      overflow: "hidden"
    };
  };
  var ValueContainer = function ValueContainer2(props) {
    var children = props.children, className = props.className, cx = props.cx, isMulti = props.isMulti, getStyles = props.getStyles, hasValue = props.hasValue;
    return jsx("div", {
      css: getStyles("valueContainer", props),
      className: cx({
        "value-container": true,
        "value-container--is-multi": isMulti,
        "value-container--has-value": hasValue
      }, className)
    }, children);
  };
  var indicatorsContainerCSS = function indicatorsContainerCSS2() {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0
    };
  };
  var IndicatorsContainer = function IndicatorsContainer2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles;
    return jsx("div", {
      css: getStyles("indicatorsContainer", props),
      className: cx({
        indicators: true
      }, className)
    }, children);
  };
  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"]);
    _templateObject = function _templateObject2() {
      return data;
    };
    return data;
  }
  var _ref2 = {
    name: "19bqh2r",
    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;"
  };
  var Svg = function Svg2(_ref3) {
    var size = _ref3.size, props = _objectWithoutProperties$1(_ref3, ["size"]);
    return jsx("svg", _extends$1({
      height: size,
      width: size,
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      focusable: "false",
      css: _ref2
    }, props));
  };
  var CrossIcon = function CrossIcon2(props) {
    return jsx(Svg, _extends$1({
      size: 20
    }, props), jsx("path", {
      d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
    }));
  };
  var DownChevron = function DownChevron2(props) {
    return jsx(Svg, _extends$1({
      size: 20
    }, props), jsx("path", {
      d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
    }));
  };
  var baseCSS = function baseCSS2(_ref3) {
    var isFocused = _ref3.isFocused, _ref3$theme = _ref3.theme, baseUnit2 = _ref3$theme.spacing.baseUnit, colors2 = _ref3$theme.colors;
    return {
      label: "indicatorContainer",
      color: isFocused ? colors2.neutral60 : colors2.neutral20,
      display: "flex",
      padding: baseUnit2 * 2,
      transition: "color 150ms",
      ":hover": {
        color: isFocused ? colors2.neutral80 : colors2.neutral40
      }
    };
  };
  var dropdownIndicatorCSS = baseCSS;
  var DropdownIndicator = function DropdownIndicator2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return jsx("div", _extends$1({}, innerProps, {
      css: getStyles("dropdownIndicator", props),
      className: cx({
        indicator: true,
        "dropdown-indicator": true
      }, className)
    }), children || jsx(DownChevron, null));
  };
  var clearIndicatorCSS = baseCSS;
  var ClearIndicator = function ClearIndicator2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return jsx("div", _extends$1({}, innerProps, {
      css: getStyles("clearIndicator", props),
      className: cx({
        indicator: true,
        "clear-indicator": true
      }, className)
    }), children || jsx(CrossIcon, null));
  };
  var indicatorSeparatorCSS = function indicatorSeparatorCSS2(_ref4) {
    var isDisabled = _ref4.isDisabled, _ref4$theme = _ref4.theme, baseUnit2 = _ref4$theme.spacing.baseUnit, colors2 = _ref4$theme.colors;
    return {
      label: "indicatorSeparator",
      alignSelf: "stretch",
      backgroundColor: isDisabled ? colors2.neutral10 : colors2.neutral20,
      marginBottom: baseUnit2 * 2,
      marginTop: baseUnit2 * 2,
      width: 1
    };
  };
  var IndicatorSeparator = function IndicatorSeparator2(props) {
    var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return jsx("span", _extends$1({}, innerProps, {
      css: getStyles("indicatorSeparator", props),
      className: cx({
        "indicator-separator": true
      }, className)
    }));
  };
  var loadingDotAnimations = keyframes(_templateObject());
  var loadingIndicatorCSS = function loadingIndicatorCSS2(_ref5) {
    var isFocused = _ref5.isFocused, size = _ref5.size, _ref5$theme = _ref5.theme, colors2 = _ref5$theme.colors, baseUnit2 = _ref5$theme.spacing.baseUnit;
    return {
      label: "loadingIndicator",
      color: isFocused ? colors2.neutral60 : colors2.neutral20,
      display: "flex",
      padding: baseUnit2 * 2,
      transition: "color 150ms",
      alignSelf: "center",
      fontSize: size,
      lineHeight: 1,
      marginRight: size,
      textAlign: "center",
      verticalAlign: "middle"
    };
  };
  var LoadingDot = function LoadingDot2(_ref6) {
    var delay = _ref6.delay, offset2 = _ref6.offset;
    return jsx("span", {
      css: /* @__PURE__ */ css$2({
        animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
        backgroundColor: "currentColor",
        borderRadius: "1em",
        display: "inline-block",
        marginLeft: offset2 ? "1em" : null,
        height: "1em",
        verticalAlign: "top",
        width: "1em"
      }, "")
    });
  };
  var LoadingIndicator = function LoadingIndicator2(props) {
    var className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps, isRtl = props.isRtl;
    return jsx("div", _extends$1({}, innerProps, {
      css: getStyles("loadingIndicator", props),
      className: cx({
        indicator: true,
        "loading-indicator": true
      }, className)
    }), jsx(LoadingDot, {
      delay: 0,
      offset: isRtl
    }), jsx(LoadingDot, {
      delay: 160,
      offset: true
    }), jsx(LoadingDot, {
      delay: 320,
      offset: !isRtl
    }));
  };
  LoadingIndicator.defaultProps = {
    size: 4
  };
  var css = function css2(_ref3) {
    var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, _ref$theme = _ref3.theme, colors2 = _ref$theme.colors, borderRadius2 = _ref$theme.borderRadius, spacing2 = _ref$theme.spacing;
    return {
      label: "control",
      alignItems: "center",
      backgroundColor: isDisabled ? colors2.neutral5 : colors2.neutral0,
      borderColor: isDisabled ? colors2.neutral10 : isFocused ? colors2.primary : colors2.neutral20,
      borderRadius: borderRadius2,
      borderStyle: "solid",
      borderWidth: 1,
      boxShadow: isFocused ? "0 0 0 1px ".concat(colors2.primary) : null,
      cursor: "default",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      minHeight: spacing2.controlHeight,
      outline: "0 !important",
      position: "relative",
      transition: "all 100ms",
      "&:hover": {
        borderColor: isFocused ? colors2.primary : colors2.neutral30
      }
    };
  };
  var Control$1 = function Control2(props) {
    var children = props.children, cx = props.cx, getStyles = props.getStyles, className = props.className, isDisabled = props.isDisabled, isFocused = props.isFocused, innerRef = props.innerRef, innerProps = props.innerProps, menuIsOpen = props.menuIsOpen;
    return jsx("div", _extends$1({
      ref: innerRef,
      css: getStyles("control", props),
      className: cx({
        control: true,
        "control--is-disabled": isDisabled,
        "control--is-focused": isFocused,
        "control--menu-is-open": menuIsOpen
      }, className)
    }, innerProps), children);
  };
  function ownKeys$1$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$1$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$1$1(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var groupCSS = function groupCSS2(_ref3) {
    var spacing2 = _ref3.theme.spacing;
    return {
      paddingBottom: spacing2.baseUnit * 2,
      paddingTop: spacing2.baseUnit * 2
    };
  };
  var Group = function Group2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, Heading = props.Heading, headingProps = props.headingProps, label = props.label, theme = props.theme, selectProps = props.selectProps;
    return jsx("div", {
      css: getStyles("group", props),
      className: cx({
        group: true
      }, className)
    }, jsx(Heading, _extends$1({}, headingProps, {
      selectProps,
      theme,
      getStyles,
      cx
    }), label), jsx("div", null, children));
  };
  var groupHeadingCSS = function groupHeadingCSS2(_ref22) {
    var spacing2 = _ref22.theme.spacing;
    return {
      label: "group",
      color: "#999",
      cursor: "default",
      display: "block",
      fontSize: "75%",
      fontWeight: "500",
      marginBottom: "0.25em",
      paddingLeft: spacing2.baseUnit * 3,
      paddingRight: spacing2.baseUnit * 3,
      textTransform: "uppercase"
    };
  };
  var GroupHeading = function GroupHeading2(props) {
    var className = props.className, cx = props.cx, getStyles = props.getStyles, theme = props.theme;
    props.selectProps;
    var cleanProps = _objectWithoutProperties$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);
    return jsx("div", _extends$1({
      css: getStyles("groupHeading", _objectSpread$1$1({
        theme
      }, cleanProps)),
      className: cx({
        "group-heading": true
      }, className)
    }, cleanProps));
  };
  function ownKeys$2$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$2$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$2$1(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var inputCSS = function inputCSS2(_ref3) {
    var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
    return {
      margin: spacing2.baseUnit / 2,
      paddingBottom: spacing2.baseUnit / 2,
      paddingTop: spacing2.baseUnit / 2,
      visibility: isDisabled ? "hidden" : "visible",
      color: colors2.neutral80
    };
  };
  var inputStyle = function inputStyle2(isHidden) {
    return {
      label: "input",
      background: 0,
      border: 0,
      fontSize: "inherit",
      opacity: isHidden ? 0 : 1,
      outline: 0,
      padding: 0,
      color: "inherit"
    };
  };
  var Input = function Input2(_ref22) {
    var className = _ref22.className, cx = _ref22.cx, getStyles = _ref22.getStyles, innerRef = _ref22.innerRef, isHidden = _ref22.isHidden, isDisabled = _ref22.isDisabled, theme = _ref22.theme;
    _ref22.selectProps;
    var props = _objectWithoutProperties$1(_ref22, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);
    return jsx("div", {
      css: getStyles("input", _objectSpread$2$1({
        theme
      }, props))
    }, jsx(_default, _extends$1({
      className: cx({
        input: true
      }, className),
      inputRef: innerRef,
      inputStyle: inputStyle(isHidden),
      disabled: isDisabled
    }, props)));
  };
  function ownKeys$3$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$3$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$3$1(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$3$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var multiValueCSS = function multiValueCSS2(_ref3) {
    var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, borderRadius2 = _ref$theme.borderRadius, colors2 = _ref$theme.colors;
    return {
      label: "multiValue",
      backgroundColor: colors2.neutral10,
      borderRadius: borderRadius2 / 2,
      display: "flex",
      margin: spacing2.baseUnit / 2,
      minWidth: 0
    };
  };
  var multiValueLabelCSS = function multiValueLabelCSS2(_ref22) {
    var _ref2$theme = _ref22.theme, borderRadius2 = _ref2$theme.borderRadius, colors2 = _ref2$theme.colors, cropWithEllipsis = _ref22.cropWithEllipsis;
    return {
      borderRadius: borderRadius2 / 2,
      color: colors2.neutral80,
      fontSize: "85%",
      overflow: "hidden",
      padding: 3,
      paddingLeft: 6,
      textOverflow: cropWithEllipsis ? "ellipsis" : null,
      whiteSpace: "nowrap"
    };
  };
  var multiValueRemoveCSS = function multiValueRemoveCSS2(_ref3) {
    var _ref3$theme = _ref3.theme, spacing2 = _ref3$theme.spacing, borderRadius2 = _ref3$theme.borderRadius, colors2 = _ref3$theme.colors, isFocused = _ref3.isFocused;
    return {
      alignItems: "center",
      borderRadius: borderRadius2 / 2,
      backgroundColor: isFocused && colors2.dangerLight,
      display: "flex",
      paddingLeft: spacing2.baseUnit,
      paddingRight: spacing2.baseUnit,
      ":hover": {
        backgroundColor: colors2.dangerLight,
        color: colors2.danger
      }
    };
  };
  var MultiValueGeneric = function MultiValueGeneric2(_ref4) {
    var children = _ref4.children, innerProps = _ref4.innerProps;
    return jsx("div", innerProps, children);
  };
  var MultiValueContainer = MultiValueGeneric;
  var MultiValueLabel = MultiValueGeneric;
  function MultiValueRemove(_ref5) {
    var children = _ref5.children, innerProps = _ref5.innerProps;
    return jsx("div", innerProps, children || jsx(CrossIcon, {
      size: 14
    }));
  }
  var MultiValue = function MultiValue2(props) {
    var children = props.children, className = props.className, components2 = props.components, cx = props.cx, data = props.data, getStyles = props.getStyles, innerProps = props.innerProps, isDisabled = props.isDisabled, removeProps = props.removeProps, selectProps = props.selectProps;
    var Container = components2.Container, Label = components2.Label, Remove = components2.Remove;
    return jsx(ClassNames, null, function(_ref6) {
      var css2 = _ref6.css, emotionCx = _ref6.cx;
      return jsx(Container, {
        data,
        innerProps: _objectSpread$3$1(_objectSpread$3$1({}, innerProps), {}, {
          className: emotionCx(css2(getStyles("multiValue", props)), cx({
            "multi-value": true,
            "multi-value--is-disabled": isDisabled
          }, className))
        }),
        selectProps
      }, jsx(Label, {
        data,
        innerProps: {
          className: emotionCx(css2(getStyles("multiValueLabel", props)), cx({
            "multi-value__label": true
          }, className))
        },
        selectProps
      }, children), jsx(Remove, {
        data,
        innerProps: _objectSpread$3$1({
          className: emotionCx(css2(getStyles("multiValueRemove", props)), cx({
            "multi-value__remove": true
          }, className))
        }, removeProps),
        selectProps
      }));
    });
  };
  MultiValue.defaultProps = {
    cropWithEllipsis: true
  };
  var optionCSS = function optionCSS2(_ref3) {
    var isDisabled = _ref3.isDisabled, isFocused = _ref3.isFocused, isSelected = _ref3.isSelected, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
    return {
      label: "option",
      backgroundColor: isSelected ? colors2.primary : isFocused ? colors2.primary25 : "transparent",
      color: isDisabled ? colors2.neutral20 : isSelected ? colors2.neutral0 : "inherit",
      cursor: "default",
      display: "block",
      fontSize: "inherit",
      padding: "".concat(spacing2.baseUnit * 2, "px ").concat(spacing2.baseUnit * 3, "px"),
      width: "100%",
      userSelect: "none",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      ":active": {
        backgroundColor: !isDisabled && (isSelected ? colors2.primary : colors2.primary50)
      }
    };
  };
  var Option = function Option2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, isFocused = props.isFocused, isSelected = props.isSelected, innerRef = props.innerRef, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("option", props),
      className: cx({
        option: true,
        "option--is-disabled": isDisabled,
        "option--is-focused": isFocused,
        "option--is-selected": isSelected
      }, className),
      ref: innerRef
    }, innerProps), children);
  };
  var placeholderCSS = function placeholderCSS2(_ref3) {
    var _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
    return {
      label: "placeholder",
      color: colors2.neutral50,
      marginLeft: spacing2.baseUnit / 2,
      marginRight: spacing2.baseUnit / 2,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)"
    };
  };
  var Placeholder = function Placeholder2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("placeholder", props),
      className: cx({
        placeholder: true
      }, className)
    }, innerProps), children);
  };
  var css$1 = function css2(_ref3) {
    var isDisabled = _ref3.isDisabled, _ref$theme = _ref3.theme, spacing2 = _ref$theme.spacing, colors2 = _ref$theme.colors;
    return {
      label: "singleValue",
      color: isDisabled ? colors2.neutral40 : colors2.neutral80,
      marginLeft: spacing2.baseUnit / 2,
      marginRight: spacing2.baseUnit / 2,
      maxWidth: "calc(100% - ".concat(spacing2.baseUnit * 2, "px)"),
      overflow: "hidden",
      position: "absolute",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      top: "50%",
      transform: "translateY(-50%)"
    };
  };
  var SingleValue = function SingleValue2(props) {
    var children = props.children, className = props.className, cx = props.cx, getStyles = props.getStyles, isDisabled = props.isDisabled, innerProps = props.innerProps;
    return jsx("div", _extends$1({
      css: getStyles("singleValue", props),
      className: cx({
        "single-value": true,
        "single-value--is-disabled": isDisabled
      }, className)
    }, innerProps), children);
  };
  function ownKeys$4(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$4(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$4(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$4(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var components$1 = {
    ClearIndicator,
    Control: Control$1,
    DropdownIndicator,
    DownChevron,
    CrossIcon,
    Group,
    GroupHeading,
    IndicatorsContainer,
    IndicatorSeparator,
    Input,
    LoadingIndicator,
    Menu,
    MenuList,
    MenuPortal,
    LoadingMessage,
    NoOptionsMessage,
    MultiValue,
    MultiValueContainer,
    MultiValueLabel,
    MultiValueRemove,
    Option,
    Placeholder,
    SelectContainer,
    SingleValue,
    ValueContainer
  };
  var defaultComponents = function defaultComponents2(props) {
    return _objectSpread$4(_objectSpread$4({}, components$1), props.components);
  };
  var diacritics = [{
    base: "A",
    letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
  }, {
    base: "AA",
    letters: "\uA732"
  }, {
    base: "AE",
    letters: "\xC6\u01FC\u01E2"
  }, {
    base: "AO",
    letters: "\uA734"
  }, {
    base: "AU",
    letters: "\uA736"
  }, {
    base: "AV",
    letters: "\uA738\uA73A"
  }, {
    base: "AY",
    letters: "\uA73C"
  }, {
    base: "B",
    letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
  }, {
    base: "C",
    letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
  }, {
    base: "D",
    letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
  }, {
    base: "DZ",
    letters: "\u01F1\u01C4"
  }, {
    base: "Dz",
    letters: "\u01F2\u01C5"
  }, {
    base: "E",
    letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
  }, {
    base: "F",
    letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
  }, {
    base: "G",
    letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
  }, {
    base: "H",
    letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
  }, {
    base: "I",
    letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
  }, {
    base: "J",
    letters: "J\u24BF\uFF2A\u0134\u0248"
  }, {
    base: "K",
    letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
  }, {
    base: "L",
    letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
  }, {
    base: "LJ",
    letters: "\u01C7"
  }, {
    base: "Lj",
    letters: "\u01C8"
  }, {
    base: "M",
    letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
  }, {
    base: "N",
    letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
  }, {
    base: "NJ",
    letters: "\u01CA"
  }, {
    base: "Nj",
    letters: "\u01CB"
  }, {
    base: "O",
    letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
  }, {
    base: "OI",
    letters: "\u01A2"
  }, {
    base: "OO",
    letters: "\uA74E"
  }, {
    base: "OU",
    letters: "\u0222"
  }, {
    base: "P",
    letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
  }, {
    base: "Q",
    letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
  }, {
    base: "R",
    letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
  }, {
    base: "S",
    letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
  }, {
    base: "T",
    letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
  }, {
    base: "TZ",
    letters: "\uA728"
  }, {
    base: "U",
    letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
  }, {
    base: "V",
    letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
  }, {
    base: "VY",
    letters: "\uA760"
  }, {
    base: "W",
    letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
  }, {
    base: "X",
    letters: "X\u24CD\uFF38\u1E8A\u1E8C"
  }, {
    base: "Y",
    letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
  }, {
    base: "Z",
    letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
  }, {
    base: "a",
    letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
  }, {
    base: "aa",
    letters: "\uA733"
  }, {
    base: "ae",
    letters: "\xE6\u01FD\u01E3"
  }, {
    base: "ao",
    letters: "\uA735"
  }, {
    base: "au",
    letters: "\uA737"
  }, {
    base: "av",
    letters: "\uA739\uA73B"
  }, {
    base: "ay",
    letters: "\uA73D"
  }, {
    base: "b",
    letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
  }, {
    base: "c",
    letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
  }, {
    base: "d",
    letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
  }, {
    base: "dz",
    letters: "\u01F3\u01C6"
  }, {
    base: "e",
    letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
  }, {
    base: "f",
    letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
  }, {
    base: "g",
    letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
  }, {
    base: "h",
    letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
  }, {
    base: "hv",
    letters: "\u0195"
  }, {
    base: "i",
    letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
  }, {
    base: "j",
    letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
  }, {
    base: "k",
    letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
  }, {
    base: "l",
    letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
  }, {
    base: "lj",
    letters: "\u01C9"
  }, {
    base: "m",
    letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
  }, {
    base: "n",
    letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
  }, {
    base: "nj",
    letters: "\u01CC"
  }, {
    base: "o",
    letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
  }, {
    base: "oi",
    letters: "\u01A3"
  }, {
    base: "ou",
    letters: "\u0223"
  }, {
    base: "oo",
    letters: "\uA74F"
  }, {
    base: "p",
    letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
  }, {
    base: "q",
    letters: "q\u24E0\uFF51\u024B\uA757\uA759"
  }, {
    base: "r",
    letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
  }, {
    base: "s",
    letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
  }, {
    base: "t",
    letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
  }, {
    base: "tz",
    letters: "\uA729"
  }, {
    base: "u",
    letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
  }, {
    base: "v",
    letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
  }, {
    base: "vy",
    letters: "\uA761"
  }, {
    base: "w",
    letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
  }, {
    base: "x",
    letters: "x\u24E7\uFF58\u1E8B\u1E8D"
  }, {
    base: "y",
    letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
  }, {
    base: "z",
    letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
  }];
  var anyDiacritic = new RegExp("[" + diacritics.map(function(d) {
    return d.letters;
  }).join("") + "]", "g");
  var diacriticToBase = {};
  for (var i = 0; i < diacritics.length; i++) {
    var diacritic = diacritics[i];
    for (var j = 0; j < diacritic.letters.length; j++) {
      diacriticToBase[diacritic.letters[j]] = diacritic.base;
    }
  }
  var stripDiacritics = function stripDiacritics2(str) {
    return str.replace(anyDiacritic, function(match) {
      return diacriticToBase[match];
    });
  };
  function ownKeys$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$1(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$1(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  var trimString = function trimString2(str) {
    return str.replace(/^\s+|\s+$/g, "");
  };
  var defaultStringify = function defaultStringify2(option) {
    return "".concat(option.label, " ").concat(option.value);
  };
  var createFilter = function createFilter2(config) {
    return function(option, rawInput) {
      var _ignoreCase$ignoreAcc = _objectSpread$1({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: "any"
      }, config), ignoreCase = _ignoreCase$ignoreAcc.ignoreCase, ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents, stringify = _ignoreCase$ignoreAcc.stringify, trim = _ignoreCase$ignoreAcc.trim, matchFrom = _ignoreCase$ignoreAcc.matchFrom;
      var input = trim ? trimString(rawInput) : rawInput;
      var candidate = trim ? trimString(stringify(option)) : stringify(option);
      if (ignoreCase) {
        input = input.toLowerCase();
        candidate = candidate.toLowerCase();
      }
      if (ignoreAccents) {
        input = stripDiacritics(input);
        candidate = stripDiacritics(candidate);
      }
      return matchFrom === "start" ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
    };
  };
  var _ref = {
    name: "1laao21-a11yText",
    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;"
  };
  var A11yText = function A11yText2(props) {
    return jsx("span", _extends$1({
      css: _ref
    }, props));
  };
  function DummyInput(_ref3) {
    _ref3.in;
    _ref3.out;
    _ref3.onExited;
    _ref3.appear;
    _ref3.enter;
    _ref3.exit;
    var innerRef = _ref3.innerRef;
    _ref3.emotion;
    var props = _objectWithoutProperties$1(_ref3, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);
    return jsx("input", _extends$1({
      ref: innerRef
    }, props, {
      css: /* @__PURE__ */ css$2({
        label: "dummyInput",
        background: 0,
        border: 0,
        fontSize: "inherit",
        outline: 0,
        padding: 0,
        width: 1,
        color: "transparent",
        left: -100,
        opacity: 0,
        position: "relative",
        transform: "scale(0)"
      }, "")
    }));
  }
  function _createSuper$2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$2() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var NodeResolver = /* @__PURE__ */ function(_Component) {
    _inherits$1(NodeResolver2, _Component);
    var _super = _createSuper$2(NodeResolver2);
    function NodeResolver2() {
      _classCallCheck$1(this, NodeResolver2);
      return _super.apply(this, arguments);
    }
    _createClass$1(NodeResolver2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.innerRef(reactDom.exports.findDOMNode(this));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.props.innerRef(null);
      }
    }, {
      key: "render",
      value: function render2() {
        return this.props.children;
      }
    }]);
    return NodeResolver2;
  }(react.exports.Component);
  var STYLE_KEYS = ["boxSizing", "height", "overflow", "paddingRight", "position"];
  var LOCK_STYLES = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%"
  };
  function preventTouchMove(e) {
    e.preventDefault();
  }
  function allowTouchMove(e) {
    e.stopPropagation();
  }
  function preventInertiaScroll() {
    var top = this.scrollTop;
    var totalScroll = this.scrollHeight;
    var currentScroll = top + this.offsetHeight;
    if (top === 0) {
      this.scrollTop = 1;
    } else if (currentScroll === totalScroll) {
      this.scrollTop = top - 1;
    }
  }
  function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }
  function _createSuper$1$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1$1();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$1$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var canUseDOM = !!(window.document && window.document.createElement);
  var activeScrollLocks = 0;
  var ScrollLock = /* @__PURE__ */ function(_Component) {
    _inherits$1(ScrollLock2, _Component);
    var _super = _createSuper$1$1(ScrollLock2);
    function ScrollLock2() {
      var _this;
      _classCallCheck$1(this, ScrollLock2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.originalStyles = {};
      _this.listenerOptions = {
        capture: false,
        passive: false
      };
      return _this;
    }
    _createClass$1(ScrollLock2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        if (!canUseDOM)
          return;
        var _this$props = this.props, accountForScrollbars = _this$props.accountForScrollbars, touchScrollTarget = _this$props.touchScrollTarget;
        var target = document.body;
        var targetStyle = target && target.style;
        if (accountForScrollbars) {
          STYLE_KEYS.forEach(function(key) {
            var val = targetStyle && targetStyle[key];
            _this2.originalStyles[key] = val;
          });
        }
        if (accountForScrollbars && activeScrollLocks < 1) {
          var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
          var clientWidth = document.body ? document.body.clientWidth : 0;
          var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
          Object.keys(LOCK_STYLES).forEach(function(key) {
            var val = LOCK_STYLES[key];
            if (targetStyle) {
              targetStyle[key] = val;
            }
          });
          if (targetStyle) {
            targetStyle.paddingRight = "".concat(adjustedPadding, "px");
          }
        }
        if (target && isTouchDevice()) {
          target.addEventListener("touchmove", preventTouchMove, this.listenerOptions);
          if (touchScrollTarget) {
            touchScrollTarget.addEventListener("touchstart", preventInertiaScroll, this.listenerOptions);
            touchScrollTarget.addEventListener("touchmove", allowTouchMove, this.listenerOptions);
          }
        }
        activeScrollLocks += 1;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;
        if (!canUseDOM)
          return;
        var _this$props2 = this.props, accountForScrollbars = _this$props2.accountForScrollbars, touchScrollTarget = _this$props2.touchScrollTarget;
        var target = document.body;
        var targetStyle = target && target.style;
        activeScrollLocks = Math.max(activeScrollLocks - 1, 0);
        if (accountForScrollbars && activeScrollLocks < 1) {
          STYLE_KEYS.forEach(function(key) {
            var val = _this3.originalStyles[key];
            if (targetStyle) {
              targetStyle[key] = val;
            }
          });
        }
        if (target && isTouchDevice()) {
          target.removeEventListener("touchmove", preventTouchMove, this.listenerOptions);
          if (touchScrollTarget) {
            touchScrollTarget.removeEventListener("touchstart", preventInertiaScroll, this.listenerOptions);
            touchScrollTarget.removeEventListener("touchmove", allowTouchMove, this.listenerOptions);
          }
        }
      }
    }, {
      key: "render",
      value: function render2() {
        return null;
      }
    }]);
    return ScrollLock2;
  }(react.exports.Component);
  ScrollLock.defaultProps = {
    accountForScrollbars: true
  };
  function _createSuper$2$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$2$1();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$2$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var _ref$1 = {
    name: "1dsbpcp",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0;"
  };
  var ScrollBlock = /* @__PURE__ */ function(_PureComponent) {
    _inherits$1(ScrollBlock2, _PureComponent);
    var _super = _createSuper$2$1(ScrollBlock2);
    function ScrollBlock2() {
      var _this;
      _classCallCheck$1(this, ScrollBlock2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        touchScrollTarget: null
      };
      _this.getScrollTarget = function(ref) {
        if (ref === _this.state.touchScrollTarget)
          return;
        _this.setState({
          touchScrollTarget: ref
        });
      };
      _this.blurSelectInput = function() {
        if (document.activeElement) {
          document.activeElement.blur();
        }
      };
      return _this;
    }
    _createClass$1(ScrollBlock2, [{
      key: "render",
      value: function render2() {
        var _this$props = this.props, children = _this$props.children, isEnabled = _this$props.isEnabled;
        var touchScrollTarget = this.state.touchScrollTarget;
        if (!isEnabled)
          return children;
        return jsx("div", null, jsx("div", {
          onClick: this.blurSelectInput,
          css: _ref$1
        }), jsx(NodeResolver, {
          innerRef: this.getScrollTarget
        }, children), touchScrollTarget ? jsx(ScrollLock, {
          touchScrollTarget
        }) : null);
      }
    }]);
    return ScrollBlock2;
  }(react.exports.PureComponent);
  function _createSuper$3(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$3() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var ScrollCaptor = /* @__PURE__ */ function(_Component) {
    _inherits$1(ScrollCaptor2, _Component);
    var _super = _createSuper$3(ScrollCaptor2);
    function ScrollCaptor2() {
      var _this;
      _classCallCheck$1(this, ScrollCaptor2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.isBottom = false;
      _this.isTop = false;
      _this.scrollTarget = void 0;
      _this.touchStart = void 0;
      _this.cancelScroll = function(event) {
        event.preventDefault();
        event.stopPropagation();
      };
      _this.handleEventDelta = function(event, delta) {
        var _this$props = _this.props, onBottomArrive = _this$props.onBottomArrive, onBottomLeave = _this$props.onBottomLeave, onTopArrive = _this$props.onTopArrive, onTopLeave = _this$props.onTopLeave;
        var _this$scrollTarget = _this.scrollTarget, scrollTop = _this$scrollTarget.scrollTop, scrollHeight = _this$scrollTarget.scrollHeight, clientHeight = _this$scrollTarget.clientHeight;
        var target = _this.scrollTarget;
        var isDeltaPositive = delta > 0;
        var availableScroll = scrollHeight - clientHeight - scrollTop;
        var shouldCancelScroll = false;
        if (availableScroll > delta && _this.isBottom) {
          if (onBottomLeave)
            onBottomLeave(event);
          _this.isBottom = false;
        }
        if (isDeltaPositive && _this.isTop) {
          if (onTopLeave)
            onTopLeave(event);
          _this.isTop = false;
        }
        if (isDeltaPositive && delta > availableScroll) {
          if (onBottomArrive && !_this.isBottom) {
            onBottomArrive(event);
          }
          target.scrollTop = scrollHeight;
          shouldCancelScroll = true;
          _this.isBottom = true;
        } else if (!isDeltaPositive && -delta > scrollTop) {
          if (onTopArrive && !_this.isTop) {
            onTopArrive(event);
          }
          target.scrollTop = 0;
          shouldCancelScroll = true;
          _this.isTop = true;
        }
        if (shouldCancelScroll) {
          _this.cancelScroll(event);
        }
      };
      _this.onWheel = function(event) {
        _this.handleEventDelta(event, event.deltaY);
      };
      _this.onTouchStart = function(event) {
        _this.touchStart = event.changedTouches[0].clientY;
      };
      _this.onTouchMove = function(event) {
        var deltaY = _this.touchStart - event.changedTouches[0].clientY;
        _this.handleEventDelta(event, deltaY);
      };
      _this.getScrollTarget = function(ref) {
        _this.scrollTarget = ref;
      };
      return _this;
    }
    _createClass$1(ScrollCaptor2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.startListening(this.scrollTarget);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.stopListening(this.scrollTarget);
      }
    }, {
      key: "startListening",
      value: function startListening(el) {
        if (!el)
          return;
        if (typeof el.addEventListener === "function") {
          el.addEventListener("wheel", this.onWheel, false);
        }
        if (typeof el.addEventListener === "function") {
          el.addEventListener("touchstart", this.onTouchStart, false);
        }
        if (typeof el.addEventListener === "function") {
          el.addEventListener("touchmove", this.onTouchMove, false);
        }
      }
    }, {
      key: "stopListening",
      value: function stopListening(el) {
        if (!el)
          return;
        if (typeof el.removeEventListener === "function") {
          el.removeEventListener("wheel", this.onWheel, false);
        }
        if (typeof el.removeEventListener === "function") {
          el.removeEventListener("touchstart", this.onTouchStart, false);
        }
        if (typeof el.removeEventListener === "function") {
          el.removeEventListener("touchmove", this.onTouchMove, false);
        }
      }
    }, {
      key: "render",
      value: function render2() {
        return /* @__PURE__ */ React.createElement(NodeResolver, {
          innerRef: this.getScrollTarget
        }, this.props.children);
      }
    }]);
    return ScrollCaptor2;
  }(react.exports.Component);
  function ScrollCaptorSwitch(_ref3) {
    var _ref$isEnabled = _ref3.isEnabled, isEnabled = _ref$isEnabled === void 0 ? true : _ref$isEnabled, props = _objectWithoutProperties$1(_ref3, ["isEnabled"]);
    return isEnabled ? /* @__PURE__ */ React.createElement(ScrollCaptor, props) : props.children;
  }
  var instructionsAriaMessage = function instructionsAriaMessage2(event) {
    var context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var isSearchable = context.isSearchable, isMulti = context.isMulti, label = context.label, isDisabled = context.isDisabled, tabSelectsValue = context.tabSelectsValue;
    switch (event) {
      case "menu":
        return "Use Up and Down to choose options".concat(isDisabled ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(tabSelectsValue ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return "".concat(label ? label : "Select", " is focused ").concat(isSearchable ? ",type to refine list" : "", ", press Down to open the menu, ").concat(isMulti ? " press left to focus selected values" : "");
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
    }
  };
  var valueEventAriaMessage = function valueEventAriaMessage2(event, context) {
    var value = context.value, isDisabled = context.isDisabled;
    if (!value)
      return;
    switch (event) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(value, ", deselected.");
      case "select-option":
        return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
    }
  };
  var valueFocusAriaMessage = function valueFocusAriaMessage2(_ref3) {
    var focusedValue = _ref3.focusedValue, getOptionLabel2 = _ref3.getOptionLabel, selectValue = _ref3.selectValue;
    return "value ".concat(getOptionLabel2(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
  };
  var optionFocusAriaMessage = function optionFocusAriaMessage2(_ref22) {
    var focusedOption = _ref22.focusedOption, getOptionLabel2 = _ref22.getOptionLabel, options = _ref22.options;
    return "option ".concat(getOptionLabel2(focusedOption), " focused").concat(focusedOption.isDisabled ? " disabled" : "", ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
  };
  var resultsAriaMessage = function resultsAriaMessage2(_ref3) {
    var inputValue = _ref3.inputValue, screenReaderMessage = _ref3.screenReaderMessage;
    return "".concat(screenReaderMessage).concat(inputValue ? " for search term " + inputValue : "", ".");
  };
  var formatGroupLabel$1 = function formatGroupLabel2(group) {
    return group.label;
  };
  var getOptionLabel = function getOptionLabel2(option) {
    return option.label;
  };
  var getOptionValue = function getOptionValue2(option) {
    return option.value;
  };
  var isOptionDisabled = function isOptionDisabled2(option) {
    return !!option.isDisabled;
  };
  var defaultStyles = {
    clearIndicator: clearIndicatorCSS,
    container: containerCSS,
    control: css,
    dropdownIndicator: dropdownIndicatorCSS,
    group: groupCSS,
    groupHeading: groupHeadingCSS,
    indicatorsContainer: indicatorsContainerCSS,
    indicatorSeparator: indicatorSeparatorCSS,
    input: inputCSS,
    loadingIndicator: loadingIndicatorCSS,
    loadingMessage: loadingMessageCSS,
    menu: menuCSS,
    menuList: menuListCSS,
    menuPortal: menuPortalCSS,
    multiValue: multiValueCSS,
    multiValueLabel: multiValueLabelCSS,
    multiValueRemove: multiValueRemoveCSS,
    noOptionsMessage: noOptionsMessageCSS,
    option: optionCSS,
    placeholder: placeholderCSS,
    singleValue: css$1,
    valueContainer: valueContainerCSS
  };
  var colors$1 = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)"
  };
  var borderRadius = 4;
  var baseUnit = 4;
  var controlHeight = 38;
  var menuGutter = baseUnit * 2;
  var spacing = {
    baseUnit,
    controlHeight,
    menuGutter
  };
  var defaultTheme = {
    borderRadius,
    colors: colors$1,
    spacing
  };
  function ownKeys$2(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$2(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys$2(Object(source), true).forEach(function(key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _createSuper$4(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$4() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var defaultProps$2 = {
    backspaceRemovesValue: true,
    blurInputOnSelect: isTouchCapable(),
    captureMenuScroll: !isTouchCapable(),
    closeMenuOnSelect: true,
    closeMenuOnScroll: false,
    components: {},
    controlShouldRenderValue: true,
    escapeClearsValue: false,
    filterOption: createFilter(),
    formatGroupLabel: formatGroupLabel$1,
    getOptionLabel,
    getOptionValue,
    isDisabled: false,
    isLoading: false,
    isMulti: false,
    isRtl: false,
    isSearchable: true,
    isOptionDisabled,
    loadingMessage: function loadingMessage() {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: false,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: false,
    menuShouldScrollIntoView: !isMobileDevice(),
    noOptionsMessage: function noOptionsMessage() {
      return "No options";
    },
    openMenuOnFocus: false,
    openMenuOnClick: true,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function screenReaderStatus(_ref3) {
      var count = _ref3.count;
      return "".concat(count, " result").concat(count !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: "0",
    tabSelectsValue: true
  };
  var instanceId = 1;
  var Select = /* @__PURE__ */ function(_Component) {
    _inherits$1(Select2, _Component);
    var _super = _createSuper$4(Select2);
    function Select2(_props) {
      var _this;
      _classCallCheck$1(this, Select2);
      _this = _super.call(this, _props);
      _this.state = {
        ariaLiveSelection: "",
        ariaLiveContext: "",
        focusedOption: null,
        focusedValue: null,
        inputIsHidden: false,
        isFocused: false,
        menuOptions: {
          render: [],
          focusable: []
        },
        selectValue: []
      };
      _this.blockOptionHover = false;
      _this.isComposing = false;
      _this.clearFocusValueOnUpdate = false;
      _this.commonProps = void 0;
      _this.components = void 0;
      _this.hasGroups = false;
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
      _this.inputIsHiddenAfterUpdate = void 0;
      _this.instancePrefix = "";
      _this.openAfterFocus = false;
      _this.scrollToFocusedOptionOnUpdate = false;
      _this.userIsDragging = void 0;
      _this.controlRef = null;
      _this.getControlRef = function(ref) {
        _this.controlRef = ref;
      };
      _this.focusedOptionRef = null;
      _this.getFocusedOptionRef = function(ref) {
        _this.focusedOptionRef = ref;
      };
      _this.menuListRef = null;
      _this.getMenuListRef = function(ref) {
        _this.menuListRef = ref;
      };
      _this.inputRef = null;
      _this.getInputRef = function(ref) {
        _this.inputRef = ref;
      };
      _this.cacheComponents = function(components2) {
        _this.components = defaultComponents({
          components: components2
        });
      };
      _this.focus = _this.focusInput;
      _this.blur = _this.blurInput;
      _this.onChange = function(newValue, actionMeta) {
        var _this$props = _this.props, onChange = _this$props.onChange, name = _this$props.name;
        onChange(newValue, _objectSpread$2(_objectSpread$2({}, actionMeta), {}, {
          name
        }));
      };
      _this.setValue = function(newValue) {
        var action = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "set-value";
        var option = arguments.length > 2 ? arguments[2] : void 0;
        var _this$props2 = _this.props, closeMenuOnSelect = _this$props2.closeMenuOnSelect, isMulti = _this$props2.isMulti;
        _this.onInputChange("", {
          action: "set-value"
        });
        if (closeMenuOnSelect) {
          _this.inputIsHiddenAfterUpdate = !isMulti;
          _this.onMenuClose();
        }
        _this.clearFocusValueOnUpdate = true;
        _this.onChange(newValue, {
          action,
          option
        });
      };
      _this.selectOption = function(newValue) {
        var _this$props3 = _this.props, blurInputOnSelect = _this$props3.blurInputOnSelect, isMulti = _this$props3.isMulti;
        var selectValue = _this.state.selectValue;
        if (isMulti) {
          if (_this.isOptionSelected(newValue, selectValue)) {
            var candidate = _this.getOptionValue(newValue);
            _this.setValue(selectValue.filter(function(i2) {
              return _this.getOptionValue(i2) !== candidate;
            }), "deselect-option", newValue);
            _this.announceAriaLiveSelection({
              event: "deselect-option",
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            if (!_this.isOptionDisabled(newValue, selectValue)) {
              _this.setValue([].concat(_toConsumableArray(selectValue), [newValue]), "select-option", newValue);
              _this.announceAriaLiveSelection({
                event: "select-option",
                context: {
                  value: _this.getOptionLabel(newValue)
                }
              });
            } else {
              _this.announceAriaLiveSelection({
                event: "select-option",
                context: {
                  value: _this.getOptionLabel(newValue),
                  isDisabled: true
                }
              });
            }
          }
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue(newValue, "select-option");
            _this.announceAriaLiveSelection({
              event: "select-option",
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            _this.announceAriaLiveSelection({
              event: "select-option",
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
        if (blurInputOnSelect) {
          _this.blurInput();
        }
      };
      _this.removeValue = function(removedValue) {
        var selectValue = _this.state.selectValue;
        var candidate = _this.getOptionValue(removedValue);
        var newValue = selectValue.filter(function(i2) {
          return _this.getOptionValue(i2) !== candidate;
        });
        _this.onChange(newValue.length ? newValue : null, {
          action: "remove-value",
          removedValue
        });
        _this.announceAriaLiveSelection({
          event: "remove-value",
          context: {
            value: removedValue ? _this.getOptionLabel(removedValue) : ""
          }
        });
        _this.focusInput();
      };
      _this.clearValue = function() {
        _this.onChange(null, {
          action: "clear"
        });
      };
      _this.popValue = function() {
        var selectValue = _this.state.selectValue;
        var lastSelectedValue = selectValue[selectValue.length - 1];
        var newValue = selectValue.slice(0, selectValue.length - 1);
        _this.announceAriaLiveSelection({
          event: "pop-value",
          context: {
            value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ""
          }
        });
        _this.onChange(newValue.length ? newValue : null, {
          action: "pop-value",
          removedValue: lastSelectedValue
        });
      };
      _this.getValue = function() {
        return _this.state.selectValue;
      };
      _this.cx = function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return classNames.apply(void 0, [_this.props.classNamePrefix].concat(args));
      };
      _this.getOptionLabel = function(data) {
        return _this.props.getOptionLabel(data);
      };
      _this.getOptionValue = function(data) {
        return _this.props.getOptionValue(data);
      };
      _this.getStyles = function(key, props) {
        var base = defaultStyles[key](props);
        base.boxSizing = "border-box";
        var custom = _this.props.styles[key];
        return custom ? custom(base, props) : base;
      };
      _this.getElementId = function(element) {
        return "".concat(_this.instancePrefix, "-").concat(element);
      };
      _this.getActiveDescendentId = function() {
        var menuIsOpen = _this.props.menuIsOpen;
        var _this$state = _this.state, menuOptions = _this$state.menuOptions, focusedOption = _this$state.focusedOption;
        if (!focusedOption || !menuIsOpen)
          return void 0;
        var index = menuOptions.focusable.indexOf(focusedOption);
        var option = menuOptions.render[index];
        return option && option.key;
      };
      _this.announceAriaLiveSelection = function(_ref22) {
        var event = _ref22.event, context = _ref22.context;
        _this.setState({
          ariaLiveSelection: valueEventAriaMessage(event, context)
        });
      };
      _this.announceAriaLiveContext = function(_ref3) {
        var event = _ref3.event, context = _ref3.context;
        _this.setState({
          ariaLiveContext: instructionsAriaMessage(event, _objectSpread$2(_objectSpread$2({}, context), {}, {
            label: _this.props["aria-label"]
          }))
        });
      };
      _this.onMenuMouseDown = function(event) {
        if (event.button !== 0) {
          return;
        }
        event.stopPropagation();
        event.preventDefault();
        _this.focusInput();
      };
      _this.onMenuMouseMove = function(event) {
        _this.blockOptionHover = false;
      };
      _this.onControlMouseDown = function(event) {
        var openMenuOnClick = _this.props.openMenuOnClick;
        if (!_this.state.isFocused) {
          if (openMenuOnClick) {
            _this.openAfterFocus = true;
          }
          _this.focusInput();
        } else if (!_this.props.menuIsOpen) {
          if (openMenuOnClick) {
            _this.openMenu("first");
          }
        } else {
          if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
            _this.onMenuClose();
          }
        }
        if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
          event.preventDefault();
        }
      };
      _this.onDropdownIndicatorMouseDown = function(event) {
        if (event && event.type === "mousedown" && event.button !== 0) {
          return;
        }
        if (_this.props.isDisabled)
          return;
        var _this$props4 = _this.props, isMulti = _this$props4.isMulti, menuIsOpen = _this$props4.menuIsOpen;
        _this.focusInput();
        if (menuIsOpen) {
          _this.inputIsHiddenAfterUpdate = !isMulti;
          _this.onMenuClose();
        } else {
          _this.openMenu("first");
        }
        event.preventDefault();
        event.stopPropagation();
      };
      _this.onClearIndicatorMouseDown = function(event) {
        if (event && event.type === "mousedown" && event.button !== 0) {
          return;
        }
        _this.clearValue();
        event.stopPropagation();
        _this.openAfterFocus = false;
        if (event.type === "touchend") {
          _this.focusInput();
        } else {
          setTimeout(function() {
            return _this.focusInput();
          });
        }
      };
      _this.onScroll = function(event) {
        if (typeof _this.props.closeMenuOnScroll === "boolean") {
          if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
            _this.props.onMenuClose();
          }
        } else if (typeof _this.props.closeMenuOnScroll === "function") {
          if (_this.props.closeMenuOnScroll(event)) {
            _this.props.onMenuClose();
          }
        }
      };
      _this.onCompositionStart = function() {
        _this.isComposing = true;
      };
      _this.onCompositionEnd = function() {
        _this.isComposing = false;
      };
      _this.onTouchStart = function(_ref4) {
        var touches = _ref4.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        _this.initialTouchX = touch.clientX;
        _this.initialTouchY = touch.clientY;
        _this.userIsDragging = false;
      };
      _this.onTouchMove = function(_ref5) {
        var touches = _ref5.touches;
        var touch = touches && touches.item(0);
        if (!touch) {
          return;
        }
        var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
        var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
        var moveThreshold = 5;
        _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
      };
      _this.onTouchEnd = function(event) {
        if (_this.userIsDragging)
          return;
        if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
          _this.blurInput();
        }
        _this.initialTouchX = 0;
        _this.initialTouchY = 0;
      };
      _this.onControlTouchEnd = function(event) {
        if (_this.userIsDragging)
          return;
        _this.onControlMouseDown(event);
      };
      _this.onClearIndicatorTouchEnd = function(event) {
        if (_this.userIsDragging)
          return;
        _this.onClearIndicatorMouseDown(event);
      };
      _this.onDropdownIndicatorTouchEnd = function(event) {
        if (_this.userIsDragging)
          return;
        _this.onDropdownIndicatorMouseDown(event);
      };
      _this.handleInputChange = function(event) {
        var inputValue = event.currentTarget.value;
        _this.inputIsHiddenAfterUpdate = false;
        _this.onInputChange(inputValue, {
          action: "input-change"
        });
        if (!_this.props.menuIsOpen) {
          _this.onMenuOpen();
        }
      };
      _this.onInputFocus = function(event) {
        var _this$props5 = _this.props, isSearchable = _this$props5.isSearchable, isMulti = _this$props5.isMulti;
        if (_this.props.onFocus) {
          _this.props.onFocus(event);
        }
        _this.inputIsHiddenAfterUpdate = false;
        _this.announceAriaLiveContext({
          event: "input",
          context: {
            isSearchable,
            isMulti
          }
        });
        _this.setState({
          isFocused: true
        });
        if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
          _this.openMenu("first");
        }
        _this.openAfterFocus = false;
      };
      _this.onInputBlur = function(event) {
        if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
          _this.inputRef.focus();
          return;
        }
        if (_this.props.onBlur) {
          _this.props.onBlur(event);
        }
        _this.onInputChange("", {
          action: "input-blur"
        });
        _this.onMenuClose();
        _this.setState({
          focusedValue: null,
          isFocused: false
        });
      };
      _this.onOptionHover = function(focusedOption) {
        if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
          return;
        }
        _this.setState({
          focusedOption
        });
      };
      _this.shouldHideSelectedOptions = function() {
        var _this$props6 = _this.props, hideSelectedOptions = _this$props6.hideSelectedOptions, isMulti = _this$props6.isMulti;
        if (hideSelectedOptions === void 0)
          return isMulti;
        return hideSelectedOptions;
      };
      _this.onKeyDown = function(event) {
        var _this$props7 = _this.props, isMulti = _this$props7.isMulti, backspaceRemovesValue = _this$props7.backspaceRemovesValue, escapeClearsValue = _this$props7.escapeClearsValue, inputValue = _this$props7.inputValue, isClearable = _this$props7.isClearable, isDisabled = _this$props7.isDisabled, menuIsOpen = _this$props7.menuIsOpen, onKeyDown = _this$props7.onKeyDown, tabSelectsValue = _this$props7.tabSelectsValue, openMenuOnFocus = _this$props7.openMenuOnFocus;
        var _this$state2 = _this.state, focusedOption = _this$state2.focusedOption, focusedValue = _this$state2.focusedValue, selectValue = _this$state2.selectValue;
        if (isDisabled)
          return;
        if (typeof onKeyDown === "function") {
          onKeyDown(event);
          if (event.defaultPrevented) {
            return;
          }
        }
        _this.blockOptionHover = true;
        switch (event.key) {
          case "ArrowLeft":
            if (!isMulti || inputValue)
              return;
            _this.focusValue("previous");
            break;
          case "ArrowRight":
            if (!isMulti || inputValue)
              return;
            _this.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (inputValue)
              return;
            if (focusedValue) {
              _this.removeValue(focusedValue);
            } else {
              if (!backspaceRemovesValue)
                return;
              if (isMulti) {
                _this.popValue();
              } else if (isClearable) {
                _this.clearValue();
              }
            }
            break;
          case "Tab":
            if (_this.isComposing)
              return;
            if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
              return;
            }
            _this.selectOption(focusedOption);
            break;
          case "Enter":
            if (event.keyCode === 229) {
              break;
            }
            if (menuIsOpen) {
              if (!focusedOption)
                return;
              if (_this.isComposing)
                return;
              _this.selectOption(focusedOption);
              break;
            }
            return;
          case "Escape":
            if (menuIsOpen) {
              _this.inputIsHiddenAfterUpdate = false;
              _this.onInputChange("", {
                action: "menu-close"
              });
              _this.onMenuClose();
            } else if (isClearable && escapeClearsValue) {
              _this.clearValue();
            }
            break;
          case " ":
            if (inputValue) {
              return;
            }
            if (!menuIsOpen) {
              _this.openMenu("first");
              break;
            }
            if (!focusedOption)
              return;
            _this.selectOption(focusedOption);
            break;
          case "ArrowUp":
            if (menuIsOpen) {
              _this.focusOption("up");
            } else {
              _this.openMenu("last");
            }
            break;
          case "ArrowDown":
            if (menuIsOpen) {
              _this.focusOption("down");
            } else {
              _this.openMenu("first");
            }
            break;
          case "PageUp":
            if (!menuIsOpen)
              return;
            _this.focusOption("pageup");
            break;
          case "PageDown":
            if (!menuIsOpen)
              return;
            _this.focusOption("pagedown");
            break;
          case "Home":
            if (!menuIsOpen)
              return;
            _this.focusOption("first");
            break;
          case "End":
            if (!menuIsOpen)
              return;
            _this.focusOption("last");
            break;
          default:
            return;
        }
        event.preventDefault();
      };
      _this.buildMenuOptions = function(props, selectValue) {
        var _props$inputValue = props.inputValue, inputValue = _props$inputValue === void 0 ? "" : _props$inputValue, options = props.options;
        var toOption = function toOption2(option, id2) {
          var isDisabled = _this.isOptionDisabled(option, selectValue);
          var isSelected = _this.isOptionSelected(option, selectValue);
          var label = _this.getOptionLabel(option);
          var value = _this.getOptionValue(option);
          if (_this.shouldHideSelectedOptions() && isSelected || !_this.filterOption({
            label,
            value,
            data: option
          }, inputValue)) {
            return;
          }
          var onHover = isDisabled ? void 0 : function() {
            return _this.onOptionHover(option);
          };
          var onSelect = isDisabled ? void 0 : function() {
            return _this.selectOption(option);
          };
          var optionId = "".concat(_this.getElementId("option"), "-").concat(id2);
          return {
            innerProps: {
              id: optionId,
              onClick: onSelect,
              onMouseMove: onHover,
              onMouseOver: onHover,
              tabIndex: -1
            },
            data: option,
            isDisabled,
            isSelected,
            key: optionId,
            label,
            type: "option",
            value
          };
        };
        return options.reduce(function(acc, item, itemIndex) {
          if (item.options) {
            if (!_this.hasGroups)
              _this.hasGroups = true;
            var items = item.options;
            var children = items.map(function(child, i2) {
              var option2 = toOption(child, "".concat(itemIndex, "-").concat(i2));
              if (option2)
                acc.focusable.push(child);
              return option2;
            }).filter(Boolean);
            if (children.length) {
              var groupId = "".concat(_this.getElementId("group"), "-").concat(itemIndex);
              acc.render.push({
                type: "group",
                key: groupId,
                data: item,
                options: children
              });
            }
          } else {
            var option = toOption(item, "".concat(itemIndex));
            if (option) {
              acc.render.push(option);
              acc.focusable.push(item);
            }
          }
          return acc;
        }, {
          render: [],
          focusable: []
        });
      };
      var _value = _props.value;
      _this.cacheComponents = memoizeOne(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized(_this));
      _this.cacheComponents(_props.components);
      _this.instancePrefix = "react-select-" + (_this.props.instanceId || ++instanceId);
      var _selectValue = cleanValue(_value);
      _this.buildMenuOptions = memoizeOne(_this.buildMenuOptions, function(newArgs, lastArgs) {
        var _ref6 = newArgs, _ref7 = _slicedToArray(_ref6, 2), newProps = _ref7[0], newSelectValue = _ref7[1];
        var _ref8 = lastArgs, _ref9 = _slicedToArray(_ref8, 2), lastProps = _ref9[0], lastSelectValue = _ref9[1];
        return newSelectValue === lastSelectValue && newProps.inputValue === lastProps.inputValue && newProps.options === lastProps.options;
      }).bind(_assertThisInitialized(_this));
      var _menuOptions = _props.menuIsOpen ? _this.buildMenuOptions(_props, _selectValue) : {
        render: [],
        focusable: []
      };
      _this.state.menuOptions = _menuOptions;
      _this.state.selectValue = _selectValue;
      return _this;
    }
    _createClass$1(Select2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.startListeningComposition();
        this.startListeningToTouch();
        if (this.props.closeMenuOnScroll && document && document.addEventListener) {
          document.addEventListener("scroll", this.onScroll, true);
        }
        if (this.props.autoFocus) {
          this.focusInput();
        }
      }
    }, {
      key: "UNSAFE_componentWillReceiveProps",
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        var _this$props8 = this.props, options = _this$props8.options, value = _this$props8.value, menuIsOpen = _this$props8.menuIsOpen, inputValue = _this$props8.inputValue;
        this.cacheComponents(nextProps.components);
        if (nextProps.value !== value || nextProps.options !== options || nextProps.menuIsOpen !== menuIsOpen || nextProps.inputValue !== inputValue) {
          var selectValue = cleanValue(nextProps.value);
          var menuOptions = nextProps.menuIsOpen ? this.buildMenuOptions(nextProps, selectValue) : {
            render: [],
            focusable: []
          };
          var focusedValue = this.getNextFocusedValue(selectValue);
          var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
          this.setState({
            menuOptions,
            selectValue,
            focusedOption,
            focusedValue
          });
        }
        if (this.inputIsHiddenAfterUpdate != null) {
          this.setState({
            inputIsHidden: this.inputIsHiddenAfterUpdate
          });
          delete this.inputIsHiddenAfterUpdate;
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props9 = this.props, isDisabled = _this$props9.isDisabled, menuIsOpen = _this$props9.menuIsOpen;
        var isFocused = this.state.isFocused;
        if (isFocused && !isDisabled && prevProps.isDisabled || isFocused && menuIsOpen && !prevProps.menuIsOpen) {
          this.focusInput();
        }
        if (isFocused && isDisabled && !prevProps.isDisabled) {
          this.setState({
            isFocused: false
          }, this.onMenuClose);
        }
        if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
          scrollIntoView(this.menuListRef, this.focusedOptionRef);
          this.scrollToFocusedOptionOnUpdate = false;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.stopListeningComposition();
        this.stopListeningToTouch();
        document.removeEventListener("scroll", this.onScroll, true);
      }
    }, {
      key: "onMenuOpen",
      value: function onMenuOpen() {
        this.props.onMenuOpen();
      }
    }, {
      key: "onMenuClose",
      value: function onMenuClose() {
        var _this$props10 = this.props, isSearchable = _this$props10.isSearchable, isMulti = _this$props10.isMulti;
        this.announceAriaLiveContext({
          event: "input",
          context: {
            isSearchable,
            isMulti
          }
        });
        this.onInputChange("", {
          action: "menu-close"
        });
        this.props.onMenuClose();
      }
    }, {
      key: "onInputChange",
      value: function onInputChange(newValue, actionMeta) {
        this.props.onInputChange(newValue, actionMeta);
      }
    }, {
      key: "focusInput",
      value: function focusInput() {
        if (!this.inputRef)
          return;
        this.inputRef.focus();
      }
    }, {
      key: "blurInput",
      value: function blurInput() {
        if (!this.inputRef)
          return;
        this.inputRef.blur();
      }
    }, {
      key: "openMenu",
      value: function openMenu(focusOption) {
        var _this2 = this;
        var _this$state3 = this.state, selectValue = _this$state3.selectValue, isFocused = _this$state3.isFocused;
        var menuOptions = this.buildMenuOptions(this.props, selectValue);
        var _this$props11 = this.props, isMulti = _this$props11.isMulti, tabSelectsValue = _this$props11.tabSelectsValue;
        var openAtIndex = focusOption === "first" ? 0 : menuOptions.focusable.length - 1;
        if (!isMulti) {
          var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);
          if (selectedIndex > -1) {
            openAtIndex = selectedIndex;
          }
        }
        this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
        this.inputIsHiddenAfterUpdate = false;
        this.setState({
          menuOptions,
          focusedValue: null,
          focusedOption: menuOptions.focusable[openAtIndex]
        }, function() {
          _this2.onMenuOpen();
          _this2.announceAriaLiveContext({
            event: "menu",
            context: {
              tabSelectsValue
            }
          });
        });
      }
    }, {
      key: "focusValue",
      value: function focusValue(direction) {
        var _this$props12 = this.props, isMulti = _this$props12.isMulti, isSearchable = _this$props12.isSearchable;
        var _this$state4 = this.state, selectValue = _this$state4.selectValue, focusedValue = _this$state4.focusedValue;
        if (!isMulti)
          return;
        this.setState({
          focusedOption: null
        });
        var focusedIndex = selectValue.indexOf(focusedValue);
        if (!focusedValue) {
          focusedIndex = -1;
          this.announceAriaLiveContext({
            event: "value"
          });
        }
        var lastIndex = selectValue.length - 1;
        var nextFocus = -1;
        if (!selectValue.length)
          return;
        switch (direction) {
          case "previous":
            if (focusedIndex === 0) {
              nextFocus = 0;
            } else if (focusedIndex === -1) {
              nextFocus = lastIndex;
            } else {
              nextFocus = focusedIndex - 1;
            }
            break;
          case "next":
            if (focusedIndex > -1 && focusedIndex < lastIndex) {
              nextFocus = focusedIndex + 1;
            }
            break;
        }
        if (nextFocus === -1) {
          this.announceAriaLiveContext({
            event: "input",
            context: {
              isSearchable,
              isMulti
            }
          });
        }
        this.setState({
          inputIsHidden: nextFocus !== -1,
          focusedValue: selectValue[nextFocus]
        });
      }
    }, {
      key: "focusOption",
      value: function focusOption() {
        var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first";
        var _this$props13 = this.props, pageSize = _this$props13.pageSize, tabSelectsValue = _this$props13.tabSelectsValue;
        var _this$state5 = this.state, focusedOption = _this$state5.focusedOption, menuOptions = _this$state5.menuOptions;
        var options = menuOptions.focusable;
        if (!options.length)
          return;
        var nextFocus = 0;
        var focusedIndex = options.indexOf(focusedOption);
        if (!focusedOption) {
          focusedIndex = -1;
          this.announceAriaLiveContext({
            event: "menu",
            context: {
              tabSelectsValue
            }
          });
        }
        if (direction === "up") {
          nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
        } else if (direction === "down") {
          nextFocus = (focusedIndex + 1) % options.length;
        } else if (direction === "pageup") {
          nextFocus = focusedIndex - pageSize;
          if (nextFocus < 0)
            nextFocus = 0;
        } else if (direction === "pagedown") {
          nextFocus = focusedIndex + pageSize;
          if (nextFocus > options.length - 1)
            nextFocus = options.length - 1;
        } else if (direction === "last") {
          nextFocus = options.length - 1;
        }
        this.scrollToFocusedOptionOnUpdate = true;
        this.setState({
          focusedOption: options[nextFocus],
          focusedValue: null
        });
        this.announceAriaLiveContext({
          event: "menu",
          context: {
            isDisabled: isOptionDisabled(options[nextFocus]),
            tabSelectsValue
          }
        });
      }
    }, {
      key: "getTheme",
      value: function getTheme() {
        if (!this.props.theme) {
          return defaultTheme;
        }
        if (typeof this.props.theme === "function") {
          return this.props.theme(defaultTheme);
        }
        return _objectSpread$2(_objectSpread$2({}, defaultTheme), this.props.theme);
      }
    }, {
      key: "getCommonProps",
      value: function getCommonProps() {
        var clearValue = this.clearValue, cx = this.cx, getStyles = this.getStyles, getValue2 = this.getValue, setValue = this.setValue, selectOption = this.selectOption, props = this.props;
        var isMulti = props.isMulti, isRtl = props.isRtl, options = props.options;
        var hasValue = this.hasValue();
        return {
          cx,
          clearValue,
          getStyles,
          getValue: getValue2,
          hasValue,
          isMulti,
          isRtl,
          options,
          selectOption,
          setValue,
          selectProps: props,
          theme: this.getTheme()
        };
      }
    }, {
      key: "getNextFocusedValue",
      value: function getNextFocusedValue(nextSelectValue) {
        if (this.clearFocusValueOnUpdate) {
          this.clearFocusValueOnUpdate = false;
          return null;
        }
        var _this$state6 = this.state, focusedValue = _this$state6.focusedValue, lastSelectValue = _this$state6.selectValue;
        var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
        if (lastFocusedIndex > -1) {
          var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
          if (nextFocusedIndex > -1) {
            return focusedValue;
          } else if (lastFocusedIndex < nextSelectValue.length) {
            return nextSelectValue[lastFocusedIndex];
          }
        }
        return null;
      }
    }, {
      key: "getNextFocusedOption",
      value: function getNextFocusedOption(options) {
        var lastFocusedOption = this.state.focusedOption;
        return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
      }
    }, {
      key: "hasValue",
      value: function hasValue() {
        var selectValue = this.state.selectValue;
        return selectValue.length > 0;
      }
    }, {
      key: "hasOptions",
      value: function hasOptions() {
        return !!this.state.menuOptions.render.length;
      }
    }, {
      key: "countOptions",
      value: function countOptions() {
        return this.state.menuOptions.focusable.length;
      }
    }, {
      key: "isClearable",
      value: function isClearable() {
        var _this$props14 = this.props, isClearable2 = _this$props14.isClearable, isMulti = _this$props14.isMulti;
        if (isClearable2 === void 0)
          return isMulti;
        return isClearable2;
      }
    }, {
      key: "isOptionDisabled",
      value: function isOptionDisabled2(option, selectValue) {
        return typeof this.props.isOptionDisabled === "function" ? this.props.isOptionDisabled(option, selectValue) : false;
      }
    }, {
      key: "isOptionSelected",
      value: function isOptionSelected(option, selectValue) {
        var _this3 = this;
        if (selectValue.indexOf(option) > -1)
          return true;
        if (typeof this.props.isOptionSelected === "function") {
          return this.props.isOptionSelected(option, selectValue);
        }
        var candidate = this.getOptionValue(option);
        return selectValue.some(function(i2) {
          return _this3.getOptionValue(i2) === candidate;
        });
      }
    }, {
      key: "filterOption",
      value: function filterOption(option, inputValue) {
        return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
      }
    }, {
      key: "formatOptionLabel",
      value: function formatOptionLabel(data, context) {
        if (typeof this.props.formatOptionLabel === "function") {
          var inputValue = this.props.inputValue;
          var selectValue = this.state.selectValue;
          return this.props.formatOptionLabel(data, {
            context,
            inputValue,
            selectValue
          });
        } else {
          return this.getOptionLabel(data);
        }
      }
    }, {
      key: "formatGroupLabel",
      value: function formatGroupLabel2(data) {
        return this.props.formatGroupLabel(data);
      }
    }, {
      key: "startListeningComposition",
      value: function startListeningComposition() {
        if (document && document.addEventListener) {
          document.addEventListener("compositionstart", this.onCompositionStart, false);
          document.addEventListener("compositionend", this.onCompositionEnd, false);
        }
      }
    }, {
      key: "stopListeningComposition",
      value: function stopListeningComposition() {
        if (document && document.removeEventListener) {
          document.removeEventListener("compositionstart", this.onCompositionStart);
          document.removeEventListener("compositionend", this.onCompositionEnd);
        }
      }
    }, {
      key: "startListeningToTouch",
      value: function startListeningToTouch() {
        if (document && document.addEventListener) {
          document.addEventListener("touchstart", this.onTouchStart, false);
          document.addEventListener("touchmove", this.onTouchMove, false);
          document.addEventListener("touchend", this.onTouchEnd, false);
        }
      }
    }, {
      key: "stopListeningToTouch",
      value: function stopListeningToTouch() {
        if (document && document.removeEventListener) {
          document.removeEventListener("touchstart", this.onTouchStart);
          document.removeEventListener("touchmove", this.onTouchMove);
          document.removeEventListener("touchend", this.onTouchEnd);
        }
      }
    }, {
      key: "constructAriaLiveMessage",
      value: function constructAriaLiveMessage() {
        var _this$state7 = this.state, ariaLiveContext = _this$state7.ariaLiveContext, selectValue = _this$state7.selectValue, focusedValue = _this$state7.focusedValue, focusedOption = _this$state7.focusedOption;
        var _this$props15 = this.props, options = _this$props15.options, menuIsOpen = _this$props15.menuIsOpen, inputValue = _this$props15.inputValue, screenReaderStatus = _this$props15.screenReaderStatus;
        var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
          focusedValue,
          getOptionLabel: this.getOptionLabel,
          selectValue
        }) : "";
        var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
          focusedOption,
          getOptionLabel: this.getOptionLabel,
          options
        }) : "";
        var resultsMsg = resultsAriaMessage({
          inputValue,
          screenReaderMessage: screenReaderStatus({
            count: this.countOptions()
          })
        });
        return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
      }
    }, {
      key: "renderInput",
      value: function renderInput() {
        var _this$props16 = this.props, isDisabled = _this$props16.isDisabled, isSearchable = _this$props16.isSearchable, inputId = _this$props16.inputId, inputValue = _this$props16.inputValue, tabIndex = _this$props16.tabIndex, form = _this$props16.form;
        var Input2 = this.components.Input;
        var inputIsHidden = this.state.inputIsHidden;
        var id2 = inputId || this.getElementId("input");
        var ariaAttributes = {
          "aria-autocomplete": "list",
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"]
        };
        if (!isSearchable) {
          return /* @__PURE__ */ React.createElement(DummyInput, _extends$1({
            id: id2,
            innerRef: this.getInputRef,
            onBlur: this.onInputBlur,
            onChange: noop,
            onFocus: this.onInputFocus,
            readOnly: true,
            disabled: isDisabled,
            tabIndex,
            form,
            value: ""
          }, ariaAttributes));
        }
        var _this$commonProps = this.commonProps, cx = _this$commonProps.cx, theme = _this$commonProps.theme, selectProps = _this$commonProps.selectProps;
        return /* @__PURE__ */ React.createElement(Input2, _extends$1({
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          cx,
          getStyles: this.getStyles,
          id: id2,
          innerRef: this.getInputRef,
          isDisabled,
          isHidden: inputIsHidden,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          selectProps,
          spellCheck: "false",
          tabIndex,
          form,
          theme,
          type: "text",
          value: inputValue
        }, ariaAttributes));
      }
    }, {
      key: "renderPlaceholderOrValue",
      value: function renderPlaceholderOrValue() {
        var _this4 = this;
        var _this$components = this.components, MultiValue2 = _this$components.MultiValue, MultiValueContainer2 = _this$components.MultiValueContainer, MultiValueLabel2 = _this$components.MultiValueLabel, MultiValueRemove2 = _this$components.MultiValueRemove, SingleValue2 = _this$components.SingleValue, Placeholder2 = _this$components.Placeholder;
        var commonProps = this.commonProps;
        var _this$props17 = this.props, controlShouldRenderValue = _this$props17.controlShouldRenderValue, isDisabled = _this$props17.isDisabled, isMulti = _this$props17.isMulti, inputValue = _this$props17.inputValue, placeholder = _this$props17.placeholder;
        var _this$state8 = this.state, selectValue = _this$state8.selectValue, focusedValue = _this$state8.focusedValue, isFocused = _this$state8.isFocused;
        if (!this.hasValue() || !controlShouldRenderValue) {
          return inputValue ? null : /* @__PURE__ */ React.createElement(Placeholder2, _extends$1({}, commonProps, {
            key: "placeholder",
            isDisabled,
            isFocused
          }), placeholder);
        }
        if (isMulti) {
          var selectValues = selectValue.map(function(opt, index) {
            var isOptionFocused = opt === focusedValue;
            return /* @__PURE__ */ React.createElement(MultiValue2, _extends$1({}, commonProps, {
              components: {
                Container: MultiValueContainer2,
                Label: MultiValueLabel2,
                Remove: MultiValueRemove2
              },
              isFocused: isOptionFocused,
              isDisabled,
              key: "".concat(_this4.getOptionValue(opt)).concat(index),
              index,
              removeProps: {
                onClick: function onClick() {
                  return _this4.removeValue(opt);
                },
                onTouchEnd: function onTouchEnd() {
                  return _this4.removeValue(opt);
                },
                onMouseDown: function onMouseDown(e) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              },
              data: opt
            }), _this4.formatOptionLabel(opt, "value"));
          });
          return selectValues;
        }
        if (inputValue) {
          return null;
        }
        var singleValue = selectValue[0];
        return /* @__PURE__ */ React.createElement(SingleValue2, _extends$1({}, commonProps, {
          data: singleValue,
          isDisabled
        }), this.formatOptionLabel(singleValue, "value"));
      }
    }, {
      key: "renderClearIndicator",
      value: function renderClearIndicator() {
        var ClearIndicator2 = this.components.ClearIndicator;
        var commonProps = this.commonProps;
        var _this$props18 = this.props, isDisabled = _this$props18.isDisabled, isLoading = _this$props18.isLoading;
        var isFocused = this.state.isFocused;
        if (!this.isClearable() || !ClearIndicator2 || isDisabled || !this.hasValue() || isLoading) {
          return null;
        }
        var innerProps = {
          onMouseDown: this.onClearIndicatorMouseDown,
          onTouchEnd: this.onClearIndicatorTouchEnd,
          "aria-hidden": "true"
        };
        return /* @__PURE__ */ React.createElement(ClearIndicator2, _extends$1({}, commonProps, {
          innerProps,
          isFocused
        }));
      }
    }, {
      key: "renderLoadingIndicator",
      value: function renderLoadingIndicator() {
        var LoadingIndicator2 = this.components.LoadingIndicator;
        var commonProps = this.commonProps;
        var _this$props19 = this.props, isDisabled = _this$props19.isDisabled, isLoading = _this$props19.isLoading;
        var isFocused = this.state.isFocused;
        if (!LoadingIndicator2 || !isLoading)
          return null;
        var innerProps = {
          "aria-hidden": "true"
        };
        return /* @__PURE__ */ React.createElement(LoadingIndicator2, _extends$1({}, commonProps, {
          innerProps,
          isDisabled,
          isFocused
        }));
      }
    }, {
      key: "renderIndicatorSeparator",
      value: function renderIndicatorSeparator() {
        var _this$components2 = this.components, DropdownIndicator2 = _this$components2.DropdownIndicator, IndicatorSeparator2 = _this$components2.IndicatorSeparator;
        if (!DropdownIndicator2 || !IndicatorSeparator2)
          return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        return /* @__PURE__ */ React.createElement(IndicatorSeparator2, _extends$1({}, commonProps, {
          isDisabled,
          isFocused
        }));
      }
    }, {
      key: "renderDropdownIndicator",
      value: function renderDropdownIndicator() {
        var DropdownIndicator2 = this.components.DropdownIndicator;
        if (!DropdownIndicator2)
          return null;
        var commonProps = this.commonProps;
        var isDisabled = this.props.isDisabled;
        var isFocused = this.state.isFocused;
        var innerProps = {
          onMouseDown: this.onDropdownIndicatorMouseDown,
          onTouchEnd: this.onDropdownIndicatorTouchEnd,
          "aria-hidden": "true"
        };
        return /* @__PURE__ */ React.createElement(DropdownIndicator2, _extends$1({}, commonProps, {
          innerProps,
          isDisabled,
          isFocused
        }));
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
        var _this5 = this;
        var _this$components3 = this.components, Group2 = _this$components3.Group, GroupHeading2 = _this$components3.GroupHeading, Menu2 = _this$components3.Menu, MenuList2 = _this$components3.MenuList, MenuPortal2 = _this$components3.MenuPortal, LoadingMessage2 = _this$components3.LoadingMessage, NoOptionsMessage2 = _this$components3.NoOptionsMessage, Option2 = _this$components3.Option;
        var commonProps = this.commonProps;
        var _this$state9 = this.state, focusedOption = _this$state9.focusedOption, menuOptions = _this$state9.menuOptions;
        var _this$props20 = this.props, captureMenuScroll = _this$props20.captureMenuScroll, inputValue = _this$props20.inputValue, isLoading = _this$props20.isLoading, loadingMessage = _this$props20.loadingMessage, minMenuHeight = _this$props20.minMenuHeight, maxMenuHeight = _this$props20.maxMenuHeight, menuIsOpen = _this$props20.menuIsOpen, menuPlacement = _this$props20.menuPlacement, menuPosition = _this$props20.menuPosition, menuPortalTarget = _this$props20.menuPortalTarget, menuShouldBlockScroll = _this$props20.menuShouldBlockScroll, menuShouldScrollIntoView = _this$props20.menuShouldScrollIntoView, noOptionsMessage = _this$props20.noOptionsMessage, onMenuScrollToTop = _this$props20.onMenuScrollToTop, onMenuScrollToBottom = _this$props20.onMenuScrollToBottom;
        if (!menuIsOpen)
          return null;
        var render2 = function render3(props) {
          var isFocused = focusedOption === props.data;
          props.innerRef = isFocused ? _this5.getFocusedOptionRef : void 0;
          return /* @__PURE__ */ React.createElement(Option2, _extends$1({}, commonProps, props, {
            isFocused
          }), _this5.formatOptionLabel(props.data, "menu"));
        };
        var menuUI;
        if (this.hasOptions()) {
          menuUI = menuOptions.render.map(function(item) {
            if (item.type === "group") {
              item.type;
              var group = _objectWithoutProperties$1(item, ["type"]);
              var headingId = "".concat(item.key, "-heading");
              return /* @__PURE__ */ React.createElement(Group2, _extends$1({}, commonProps, group, {
                Heading: GroupHeading2,
                headingProps: {
                  id: headingId,
                  data: item.data
                },
                label: _this5.formatGroupLabel(item.data)
              }), item.options.map(function(option) {
                return render2(option);
              }));
            } else if (item.type === "option") {
              return render2(item);
            }
          });
        } else if (isLoading) {
          var message = loadingMessage({
            inputValue
          });
          if (message === null)
            return null;
          menuUI = /* @__PURE__ */ React.createElement(LoadingMessage2, commonProps, message);
        } else {
          var _message = noOptionsMessage({
            inputValue
          });
          if (_message === null)
            return null;
          menuUI = /* @__PURE__ */ React.createElement(NoOptionsMessage2, commonProps, _message);
        }
        var menuPlacementProps = {
          minMenuHeight,
          maxMenuHeight,
          menuPlacement,
          menuPosition,
          menuShouldScrollIntoView
        };
        var menuElement = /* @__PURE__ */ React.createElement(MenuPlacer, _extends$1({}, commonProps, menuPlacementProps), function(_ref10) {
          var ref = _ref10.ref, _ref10$placerProps = _ref10.placerProps, placement = _ref10$placerProps.placement, maxHeight = _ref10$placerProps.maxHeight;
          return /* @__PURE__ */ React.createElement(Menu2, _extends$1({}, commonProps, menuPlacementProps, {
            innerRef: ref,
            innerProps: {
              onMouseDown: _this5.onMenuMouseDown,
              onMouseMove: _this5.onMenuMouseMove
            },
            isLoading,
            placement
          }), /* @__PURE__ */ React.createElement(ScrollCaptorSwitch, {
            isEnabled: captureMenuScroll,
            onTopArrive: onMenuScrollToTop,
            onBottomArrive: onMenuScrollToBottom
          }, /* @__PURE__ */ React.createElement(ScrollBlock, {
            isEnabled: menuShouldBlockScroll
          }, /* @__PURE__ */ React.createElement(MenuList2, _extends$1({}, commonProps, {
            innerRef: _this5.getMenuListRef,
            isLoading,
            maxHeight
          }), menuUI))));
        });
        return menuPortalTarget || menuPosition === "fixed" ? /* @__PURE__ */ React.createElement(MenuPortal2, _extends$1({}, commonProps, {
          appendTo: menuPortalTarget,
          controlElement: this.controlRef,
          menuPlacement,
          menuPosition
        }), menuElement) : menuElement;
      }
    }, {
      key: "renderFormField",
      value: function renderFormField() {
        var _this6 = this;
        var _this$props21 = this.props, delimiter2 = _this$props21.delimiter, isDisabled = _this$props21.isDisabled, isMulti = _this$props21.isMulti, name = _this$props21.name;
        var selectValue = this.state.selectValue;
        if (!name || isDisabled)
          return;
        if (isMulti) {
          if (delimiter2) {
            var value = selectValue.map(function(opt) {
              return _this6.getOptionValue(opt);
            }).join(delimiter2);
            return /* @__PURE__ */ React.createElement("input", {
              name,
              type: "hidden",
              value
            });
          } else {
            var input = selectValue.length > 0 ? selectValue.map(function(opt, i2) {
              return /* @__PURE__ */ React.createElement("input", {
                key: "i-".concat(i2),
                name,
                type: "hidden",
                value: _this6.getOptionValue(opt)
              });
            }) : /* @__PURE__ */ React.createElement("input", {
              name,
              type: "hidden"
            });
            return /* @__PURE__ */ React.createElement("div", null, input);
          }
        } else {
          var _value2 = selectValue[0] ? this.getOptionValue(selectValue[0]) : "";
          return /* @__PURE__ */ React.createElement("input", {
            name,
            type: "hidden",
            value: _value2
          });
        }
      }
    }, {
      key: "renderLiveRegion",
      value: function renderLiveRegion() {
        if (!this.state.isFocused)
          return null;
        return /* @__PURE__ */ React.createElement(A11yText, {
          "aria-live": "polite"
        }, /* @__PURE__ */ React.createElement("span", {
          id: "aria-selection-event"
        }, "\xA0", this.state.ariaLiveSelection), /* @__PURE__ */ React.createElement("span", {
          id: "aria-context"
        }, "\xA0", this.constructAriaLiveMessage()));
      }
    }, {
      key: "render",
      value: function render2() {
        var _this$components4 = this.components, Control2 = _this$components4.Control, IndicatorsContainer2 = _this$components4.IndicatorsContainer, SelectContainer2 = _this$components4.SelectContainer, ValueContainer2 = _this$components4.ValueContainer;
        var _this$props22 = this.props, className = _this$props22.className, id2 = _this$props22.id, isDisabled = _this$props22.isDisabled, menuIsOpen = _this$props22.menuIsOpen;
        var isFocused = this.state.isFocused;
        var commonProps = this.commonProps = this.getCommonProps();
        return /* @__PURE__ */ React.createElement(SelectContainer2, _extends$1({}, commonProps, {
          className,
          innerProps: {
            id: id2,
            onKeyDown: this.onKeyDown
          },
          isDisabled,
          isFocused
        }), this.renderLiveRegion(), /* @__PURE__ */ React.createElement(Control2, _extends$1({}, commonProps, {
          innerRef: this.getControlRef,
          innerProps: {
            onMouseDown: this.onControlMouseDown,
            onTouchEnd: this.onControlTouchEnd
          },
          isDisabled,
          isFocused,
          menuIsOpen
        }), /* @__PURE__ */ React.createElement(ValueContainer2, _extends$1({}, commonProps, {
          isDisabled
        }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ React.createElement(IndicatorsContainer2, _extends$1({}, commonProps, {
          isDisabled
        }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
      }
    }]);
    return Select2;
  }(react.exports.Component);
  Select.defaultProps = defaultProps$2;
  function _createSuper$1(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var defaultProps$1 = {
    defaultInputValue: "",
    defaultMenuIsOpen: false,
    defaultValue: null
  };
  var manageState = function manageState2(SelectComponent) {
    var _class, _temp;
    return _temp = _class = /* @__PURE__ */ function(_Component) {
      _inherits$1(StateManager, _Component);
      var _super = _createSuper$1(StateManager);
      function StateManager() {
        var _this;
        _classCallCheck$1(this, StateManager);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _this.select = void 0;
        _this.state = {
          inputValue: _this.props.inputValue !== void 0 ? _this.props.inputValue : _this.props.defaultInputValue,
          menuIsOpen: _this.props.menuIsOpen !== void 0 ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
          value: _this.props.value !== void 0 ? _this.props.value : _this.props.defaultValue
        };
        _this.onChange = function(value, actionMeta) {
          _this.callProp("onChange", value, actionMeta);
          _this.setState({
            value
          });
        };
        _this.onInputChange = function(value, actionMeta) {
          var newValue = _this.callProp("onInputChange", value, actionMeta);
          _this.setState({
            inputValue: newValue !== void 0 ? newValue : value
          });
        };
        _this.onMenuOpen = function() {
          _this.callProp("onMenuOpen");
          _this.setState({
            menuIsOpen: true
          });
        };
        _this.onMenuClose = function() {
          _this.callProp("onMenuClose");
          _this.setState({
            menuIsOpen: false
          });
        };
        return _this;
      }
      _createClass$1(StateManager, [{
        key: "focus",
        value: function focus() {
          this.select.focus();
        }
      }, {
        key: "blur",
        value: function blur() {
          this.select.blur();
        }
      }, {
        key: "getProp",
        value: function getProp(key) {
          return this.props[key] !== void 0 ? this.props[key] : this.state[key];
        }
      }, {
        key: "callProp",
        value: function callProp(name) {
          if (typeof this.props[name] === "function") {
            var _this$props;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            return (_this$props = this.props)[name].apply(_this$props, args);
          }
        }
      }, {
        key: "render",
        value: function render2() {
          var _this2 = this;
          var _this$props2 = this.props;
          _this$props2.defaultInputValue;
          _this$props2.defaultMenuIsOpen;
          _this$props2.defaultValue;
          var props = _objectWithoutProperties$1(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);
          return /* @__PURE__ */ React.createElement(SelectComponent, _extends$1({}, props, {
            ref: function ref(_ref3) {
              _this2.select = _ref3;
            },
            inputValue: this.getProp("inputValue"),
            menuIsOpen: this.getProp("menuIsOpen"),
            onChange: this.onChange,
            onInputChange: this.onInputChange,
            onMenuClose: this.onMenuClose,
            onMenuOpen: this.onMenuOpen,
            value: this.getProp("value")
          }));
        }
      }]);
      return StateManager;
    }(react.exports.Component), _class.defaultProps = defaultProps$1, _temp;
  };
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn$1(this, result);
    };
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  var defaultProps = {
    cacheOptions: false,
    defaultOptions: false,
    filterOption: null,
    isLoading: false
  };
  var makeAsyncSelect = function makeAsyncSelect2(SelectComponent) {
    var _class, _temp;
    return _temp = _class = /* @__PURE__ */ function(_Component) {
      _inherits$1(Async2, _Component);
      var _super = _createSuper(Async2);
      function Async2(props) {
        var _this;
        _classCallCheck$1(this, Async2);
        _this = _super.call(this);
        _this.select = void 0;
        _this.lastRequest = void 0;
        _this.mounted = false;
        _this.optionsCache = {};
        _this.handleInputChange = function(newValue, actionMeta) {
          var _this$props = _this.props, cacheOptions = _this$props.cacheOptions, onInputChange = _this$props.onInputChange;
          var inputValue = handleInputChange(newValue, actionMeta, onInputChange);
          if (!inputValue) {
            delete _this.lastRequest;
            _this.setState({
              inputValue: "",
              loadedInputValue: "",
              loadedOptions: [],
              isLoading: false,
              passEmptyOptions: false
            });
            return;
          }
          if (cacheOptions && _this.optionsCache[inputValue]) {
            _this.setState({
              inputValue,
              loadedInputValue: inputValue,
              loadedOptions: _this.optionsCache[inputValue],
              isLoading: false,
              passEmptyOptions: false
            });
          } else {
            var request = _this.lastRequest = {};
            _this.setState({
              inputValue,
              isLoading: true,
              passEmptyOptions: !_this.state.loadedInputValue
            }, function() {
              _this.loadOptions(inputValue, function(options) {
                if (!_this.mounted)
                  return;
                if (options) {
                  _this.optionsCache[inputValue] = options;
                }
                if (request !== _this.lastRequest)
                  return;
                delete _this.lastRequest;
                _this.setState({
                  isLoading: false,
                  loadedInputValue: inputValue,
                  loadedOptions: options || [],
                  passEmptyOptions: false
                });
              });
            });
          }
          return inputValue;
        };
        _this.state = {
          defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : void 0,
          inputValue: typeof props.inputValue !== "undefined" ? props.inputValue : "",
          isLoading: props.defaultOptions === true,
          loadedOptions: [],
          passEmptyOptions: false
        };
        return _this;
      }
      _createClass$1(Async2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          this.mounted = true;
          var defaultOptions = this.props.defaultOptions;
          var inputValue = this.state.inputValue;
          if (defaultOptions === true) {
            this.loadOptions(inputValue, function(options) {
              if (!_this2.mounted)
                return;
              var isLoading = !!_this2.lastRequest;
              _this2.setState({
                defaultOptions: options || [],
                isLoading
              });
            });
          }
        }
      }, {
        key: "UNSAFE_componentWillReceiveProps",
        value: function UNSAFE_componentWillReceiveProps(nextProps) {
          if (nextProps.cacheOptions !== this.props.cacheOptions) {
            this.optionsCache = {};
          }
          if (nextProps.defaultOptions !== this.props.defaultOptions) {
            this.setState({
              defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : void 0
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.mounted = false;
        }
      }, {
        key: "focus",
        value: function focus() {
          this.select.focus();
        }
      }, {
        key: "blur",
        value: function blur() {
          this.select.blur();
        }
      }, {
        key: "loadOptions",
        value: function loadOptions(inputValue, callback) {
          var loadOptions2 = this.props.loadOptions;
          if (!loadOptions2)
            return callback();
          var loader = loadOptions2(inputValue, callback);
          if (loader && typeof loader.then === "function") {
            loader.then(callback, function() {
              return callback();
            });
          }
        }
      }, {
        key: "render",
        value: function render2() {
          var _this3 = this;
          var _this$props2 = this.props;
          _this$props2.loadOptions;
          var isLoadingProp = _this$props2.isLoading, props = _objectWithoutProperties$1(_this$props2, ["loadOptions", "isLoading"]);
          var _this$state = this.state, defaultOptions = _this$state.defaultOptions, inputValue = _this$state.inputValue, isLoading = _this$state.isLoading, loadedInputValue = _this$state.loadedInputValue, loadedOptions = _this$state.loadedOptions, passEmptyOptions = _this$state.passEmptyOptions;
          var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
          return /* @__PURE__ */ React.createElement(SelectComponent, _extends$1({}, props, {
            ref: function ref(_ref3) {
              _this3.select = _ref3;
            },
            options,
            isLoading: isLoading || isLoadingProp,
            onInputChange: this.handleInputChange
          }));
        }
      }]);
      return Async2;
    }(react.exports.Component), _class.defaultProps = defaultProps, _temp;
  };
  var SelectState = manageState(Select);
  var Async = makeAsyncSelect(SelectState);
  function isObject$6(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$6;
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$4 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$4;
  var root$3 = _root;
  var now$2 = function() {
    return root$3.Date.now();
  };
  var now_1 = now$2;
  var reWhitespace = /\s/;
  function trimmedEndIndex$2(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var _trimmedEndIndex = trimmedEndIndex$2;
  var trimmedEndIndex$1 = _trimmedEndIndex;
  var reTrimStart = /^\s+/;
  function baseTrim$1(string) {
    return string ? string.slice(0, trimmedEndIndex$1(string) + 1).replace(reTrimStart, "") : string;
  }
  var _baseTrim = baseTrim$1;
  var root$2 = _root;
  var Symbol$4 = root$2.Symbol;
  var _Symbol = Symbol$4;
  var Symbol$3 = _Symbol;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$4.toString;
  var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$3.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$3 = Object.prototype;
  var nativeObjectToString = objectProto$3.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
  function baseGetTag$3(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$3;
  function isObjectLike$3(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$3;
  var baseGetTag$2 = _baseGetTag, isObjectLike$2 = isObjectLike_1;
  var symbolTag = "[object Symbol]";
  function isSymbol$4(value) {
    return typeof value == "symbol" || isObjectLike$2(value) && baseGetTag$2(value) == symbolTag;
  }
  var isSymbol_1 = isSymbol$4;
  var baseTrim = _baseTrim, isObject$5 = isObject_1, isSymbol$3 = isSymbol_1;
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber$1(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol$3(value)) {
      return NAN;
    }
    if (isObject$5(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject$5(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_1 = toNumber$1;
  var isObject$4 = isObject_1, now$1 = now_1, toNumber = toNumber_1;
  var FUNC_ERROR_TEXT$1 = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }
    wait = toNumber(wait) || 0;
    if (isObject$4(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now$1();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now$1());
    }
    function debounced() {
      var time = now$1(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_1 = debounce;
  var styles = {};
  var require$$1 = /* @__PURE__ */ getAugmentedNamespace(core_browser_esm);
  Object.defineProperty(styles, "__esModule", {
    value: true
  });
  styles.GlobalStyles = GlobalStyles;
  var reactSelectStyles_1 = styles.reactSelectStyles = styles.zIndex = styles.effects = styles.transitions = styles.borders = styles.shadows = styles.text = styles.buttons = styles.components = styles.lengths = styles.colors = styles.colorsRaw = styles.fonts = void 0;
  _interopRequireDefault$2(react.exports);
  var _core = require$$1;
  function _interopRequireDefault$2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2] != null ? arguments[i2] : {};
      if (i2 % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  const fonts = {
    primary: `
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  `,
    mono: `
    'SFMono-Regular',
    Consolas,
    "Liberation Mono",
    Menlo,
    Courier,
    monospace;
  `
  };
  styles.fonts = fonts;
  const colorsRaw = {
    white: "#fff",
    grayLight: "#eff0f4",
    gray: "#798291",
    grayDark: "#313d3e",
    blue: "#3a69c7",
    blueLight: "#e8f5fe",
    green: "#005614",
    greenLight: "#caef6f",
    brown: "#754e00",
    yellow: "#ffee9c",
    red: "#ff003b",
    redLight: "#fcefea",
    purple: "#70399f",
    purpleLight: "#f6d8ff",
    teal: "#17a2b8",
    tealLight: "#ddf5f9"
  };
  styles.colorsRaw = colorsRaw;
  const colors = {
    statusDraftText: colorsRaw.purple,
    statusDraftBackground: colorsRaw.purpleLight,
    statusReviewText: colorsRaw.brown,
    statusReviewBackground: colorsRaw.yellow,
    statusReadyText: colorsRaw.green,
    statusReadyBackground: colorsRaw.greenLight,
    text: colorsRaw.gray,
    textLight: colorsRaw.white,
    textLead: colorsRaw.grayDark,
    background: colorsRaw.grayLight,
    foreground: colorsRaw.white,
    active: colorsRaw.blue,
    activeBackground: colorsRaw.blueLight,
    inactive: colorsRaw.gray,
    button: colorsRaw.gray,
    buttonText: colorsRaw.white,
    inputBackground: colorsRaw.white,
    infoText: colorsRaw.blue,
    infoBackground: colorsRaw.blueLight,
    successText: colorsRaw.green,
    successBackground: colorsRaw.greenLight,
    warnText: colorsRaw.brown,
    warnBackground: colorsRaw.yellow,
    errorText: colorsRaw.red,
    errorBackground: colorsRaw.redLight,
    textFieldBorder: "#dfdfe3",
    controlLabel: "#7a8291",
    checkerboardLight: "#f2f2f2",
    checkerboardDark: "#e6e6e6",
    mediaDraftText: colorsRaw.purple,
    mediaDraftBackground: colorsRaw.purpleLight
  };
  styles.colors = colors;
  const lengths = {
    topBarHeight: "56px",
    inputPadding: "16px 20px",
    borderRadius: "5px",
    richTextEditorMinHeight: "300px",
    borderWidth: "2px",
    topCardWidth: "682px",
    pageMargin: "28px 18px",
    objectWidgetTopBarContainerPadding: "0 14px 14px"
  };
  styles.lengths = lengths;
  const borders = {
    textField: `solid  ${lengths.borderWidth} ${colors.textFieldBorder}`
  };
  styles.borders = borders;
  const transitions = {
    main: ".2s ease"
  };
  styles.transitions = transitions;
  const shadows = {
    drop: `
    box-shadow: 0 2px 4px 0 rgba(19, 39, 48, 0.12);
  `,
    dropMain: `
    box-shadow: 0 2px 6px 0 rgba(68, 74, 87, 0.05), 0 1px 3px 0 rgba(68, 74, 87, 0.1);
  `,
    dropMiddle: `
    box-shadow: 0 2px 6px 0 rgba(68, 74, 87, 0.15), 0 1px 3px 0 rgba(68, 74, 87, 0.3);
  `,
    dropDeep: `
    box-shadow: 0 4px 12px 0 rgba(68, 74, 87, 0.15), 0 1px 3px 0 rgba(68, 74, 87, 0.25);
  `,
    inset: `
    box-shadow: inset 0 0 4px rgba(68, 74, 87, 0.3);
  `
  };
  styles.shadows = shadows;
  const text = {
    fieldLabel: /* @__PURE__ */ (0, _core.css)("font-size:12px;text-transform:uppercase;font-weight:600;color:", colors.controlLabel, ";;label:fieldLabel;")
  };
  styles.text = text;
  const gradients = {
    checkerboard: `
    linear-gradient(
      45deg,
      ${colors.checkerboardDark} 25%,
      transparent 25%,
      transparent 75%,
      ${colors.checkerboardDark} 75%,
      ${colors.checkerboardDark}
    )
  `
  };
  const effects = {
    checkerboard: /* @__PURE__ */ (0, _core.css)("background-color:", colors.checkerboardLight, ";background-size:16px 16px;background-position:0 0,8px 8px;background-image:", gradients.checkerboard, ",", gradients.checkerboard, ";;label:checkerboard;")
  };
  styles.effects = effects;
  const badge = {
    name: "12f5b7t-badge",
    styles: "font-size:13px;line-height:1;;label:badge;"
  };
  const backgroundBadge = /* @__PURE__ */ (0, _core.css)(badge, ";display:block;border-radius:", lengths.borderRadius, ";padding:4px 10px;text-align:center;;label:backgroundBadge;");
  const textBadge = /* @__PURE__ */ (0, _core.css)(badge, ";display:inline-block;font-weight:700;text-transform:uppercase;;label:textBadge;");
  const card = /* @__PURE__ */ (0, _core.css)(shadows.dropMain, ";border-radius:5px;background-color:#fff;;label:card;");
  const buttons = {
    button: /* @__PURE__ */ (0, _core.css)("border:0;border-radius:", lengths.borderRadius, ";cursor:pointer;;label:button;"),
    default: /* @__PURE__ */ (0, _core.css)("height:36px;line-height:36px;font-weight:500;padding:0 15px;background-color:", colorsRaw.gray, ";color:", colorsRaw.white, ";;label:default;"),
    medium: {
      name: "17u3ojd-medium",
      styles: "height:27px;line-height:27px;font-size:12px;font-weight:600;border-radius:3px;padding:0 24px 0 14px;;label:medium;"
    },
    small: {
      name: "1ryj6xw-small",
      styles: "font-size:13px;height:23px;line-height:23px;;label:small;"
    },
    gray: /* @__PURE__ */ (0, _core.css)("background-color:", colors.button, ";color:", colors.buttonText, ";&:focus,&:hover{color:", colorsRaw.white, ";background-color:#555a65;};label:gray;"),
    grayText: /* @__PURE__ */ (0, _core.css)("background-color:transparent;color:", colorsRaw.gray, ";;label:grayText;"),
    green: /* @__PURE__ */ (0, _core.css)("background-color:#aae31f;color:", colorsRaw.green, ";;label:green;"),
    lightRed: /* @__PURE__ */ (0, _core.css)("background-color:", colorsRaw.redLight, ";color:", colorsRaw.red, ";;label:lightRed;"),
    lightBlue: /* @__PURE__ */ (0, _core.css)("background-color:", colorsRaw.blueLight, ";color:", colorsRaw.blue, ";;label:lightBlue;"),
    lightTeal: /* @__PURE__ */ (0, _core.css)("background-color:", colorsRaw.tealLight, ";color:#1195aa;;label:lightTeal;"),
    teal: /* @__PURE__ */ (0, _core.css)("background-color:", colorsRaw.teal, ";color:", colorsRaw.white, ";;label:teal;"),
    disabled: /* @__PURE__ */ (0, _core.css)("background-color:", colorsRaw.grayLight, ";color:", colorsRaw.gray, ";;label:disabled;")
  };
  styles.buttons = buttons;
  const caret = /* @__PURE__ */ (0, _core.css)("color:", colorsRaw.white, ";width:0;height:0;border:5px solid transparent;border-radius:2px;;label:caret;");
  const components = {
    card,
    caretDown: /* @__PURE__ */ (0, _core.css)(caret, ";border-top:6px solid currentColor;border-bottom:0;;label:caretDown;"),
    caretRight: /* @__PURE__ */ (0, _core.css)(caret, ";border-left:6px solid currentColor;border-right:0;;label:caretRight;"),
    badge: /* @__PURE__ */ (0, _core.css)(backgroundBadge, ";color:", colors.infoText, ";background-color:", colors.infoBackground, ";;label:badge;"),
    badgeSuccess: /* @__PURE__ */ (0, _core.css)(backgroundBadge, ";color:", colors.successText, ";background-color:", colors.successBackground, ";;label:badgeSuccess;"),
    badgeDanger: /* @__PURE__ */ (0, _core.css)(backgroundBadge, ";color:", colorsRaw.red, ";background-color:#fbe0d7;;label:badgeDanger;"),
    textBadge: /* @__PURE__ */ (0, _core.css)(textBadge, ";color:", colors.infoText, ";;label:textBadge;"),
    textBadgeSuccess: /* @__PURE__ */ (0, _core.css)(textBadge, ";color:", colors.successText, ";;label:textBadgeSuccess;"),
    textBadgeDanger: /* @__PURE__ */ (0, _core.css)(textBadge, ";color:", colorsRaw.red, ";;label:textBadgeDanger;"),
    loaderSize: {
      name: "1y4gkn3-loaderSize",
      styles: "width:2.28571429rem;height:2.28571429rem;;label:loaderSize;"
    },
    cardTop: /* @__PURE__ */ (0, _core.css)(card, ";width:", lengths.topCardWidth, ";max-width:100%;padding:18px 20px;margin-bottom:28px;;label:cardTop;"),
    cardTopHeading: {
      name: "wfgyt-cardTopHeading",
      styles: "font-size:22px;font-weight:600;line-height:37px;margin:0;padding:0;;label:cardTopHeading;"
    },
    cardTopDescription: /* @__PURE__ */ (0, _core.css)("max-width:480px;color:", colors.text, ";font-size:14px;margin-top:8px;;label:cardTopDescription;"),
    objectWidgetTopBarContainer: /* @__PURE__ */ (0, _core.css)("padding:", lengths.objectWidgetTopBarContainerPadding, ";;label:objectWidgetTopBarContainer;"),
    dropdownList: /* @__PURE__ */ (0, _core.css)(shadows.dropDeep, ";background-color:", colorsRaw.white, ";border-radius:", lengths.borderRadius, ";overflow:hidden;;label:dropdownList;"),
    dropdownItem: /* @__PURE__ */ (0, _core.css)(buttons.button, ";background-color:transparent;border-radius:0;color:", colorsRaw.gray, ";font-weight:500;border-bottom:1px solid #eaebf1;padding:8px 14px;display:flex;justify-content:space-between;align-items:center;min-width:max-content;&:last-of-type{border-bottom:0;}&.active,&:hover,&:active,&:focus{color:", colors.active, ";background-color:", colors.activeBackground, ";};label:dropdownItem;"),
    viewControlsText: /* @__PURE__ */ (0, _core.css)("font-size:14px;color:", colors.text, ";margin-right:12px;white-space:nowrap;;label:viewControlsText;")
  };
  styles.components = components;
  const reactSelectStyles = {
    control: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      border: 0,
      boxShadow: "none",
      padding: "9px 0 9px 12px"
    }),
    option: (styles2, state) => _objectSpread(_objectSpread({}, styles2), {}, {
      backgroundColor: state.isSelected ? `${colors.active}` : state.isFocused ? `${colors.activeBackground}` : "transparent",
      paddingLeft: "22px"
    }),
    menu: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      right: 0,
      zIndex: zIndex.zIndex300
    }),
    container: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      padding: "0 !important"
    }),
    indicatorSeparator: (styles2, state) => state.hasValue && state.selectProps.isClearable ? _objectSpread(_objectSpread({}, styles2), {}, {
      backgroundColor: `${colors.textFieldBorder}`
    }) : {
      display: "none"
    },
    dropdownIndicator: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      color: `${colors.controlLabel}`
    }),
    clearIndicator: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      color: `${colors.controlLabel}`
    }),
    multiValue: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      backgroundColor: colors.background
    }),
    multiValueLabel: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      color: colors.textLead,
      fontWeight: 500
    }),
    multiValueRemove: (styles2) => _objectSpread(_objectSpread({}, styles2), {}, {
      color: colors.controlLabel,
      ":hover": {
        color: colors.errorText,
        backgroundColor: colors.errorBackground
      }
    })
  };
  reactSelectStyles_1 = styles.reactSelectStyles = reactSelectStyles;
  const zIndex = {
    zIndex0: 0,
    zIndex1: 1,
    zIndex2: 2,
    zIndex10: 10,
    zIndex100: 100,
    zIndex200: 200,
    zIndex299: 299,
    zIndex300: 300,
    zIndex1000: 1e3,
    zIndex10000: 1e4,
    zIndex99999: 99999
  };
  styles.zIndex = zIndex;
  function GlobalStyles() {
    return (0, _core.jsx)(_core.Global, {
      styles: /* @__PURE__ */ (0, _core.css)("*,*:before,*:after{box-sizing:border-box;}:focus{outline:-webkit-focus-ring-color auto ", lengths.borderRadius, ";}[data-whatintent='mouse'] *:focus{outline:none;}input{border:0;}body{font-family:", fonts.primary, ";font-weight:normal;background-color:", colors.background, ";color:", colors.text, ";margin:0;}ul,ol{padding-left:0;}h1,h2,h3,h4,h5,h6,p{font-family:", fonts.primary, ";color:", colors.textLead, ";font-size:15px;line-height:1.5;margin-top:0;}h1,h2,h3,h4,h5,h6{font-weight:500;}h1{font-size:24px;letter-spacing:0.4px;color:", colors.textLead, ";}a,button{font-size:14px;font-weight:500;}a{color:", colors.text, ";text-decoration:none;}button{font-family:inherit;}img{max-width:100%;}textarea{resize:none;};label:GlobalStyles;")
    });
  }
  var esm = {};
  var stringTemplate$1 = {};
  function arrayMap$1(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var _arrayMap = arrayMap$1;
  var isArray$5 = Array.isArray;
  var isArray_1 = isArray$5;
  var Symbol$1 = _Symbol, arrayMap = _arrayMap, isArray$4 = isArray_1, isSymbol$2 = isSymbol_1;
  var INFINITY$2 = 1 / 0;
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString$3(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray$4(value)) {
      return arrayMap(value, baseToString$3) + "";
    }
    if (isSymbol$2(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
  }
  var _baseToString = baseToString$3;
  function baseSlice$1(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  var _baseSlice = baseSlice$1;
  var baseSlice = _baseSlice;
  function castSlice$1(array, start, end) {
    var length = array.length;
    end = end === void 0 ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  var _castSlice = castSlice$1;
  function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  var _baseFindIndex = baseFindIndex$1;
  function baseIsNaN$1(value) {
    return value !== value;
  }
  var _baseIsNaN = baseIsNaN$1;
  function strictIndexOf$1(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  var _strictIndexOf = strictIndexOf$1;
  var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
  function baseIndexOf$1(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var _baseIndexOf = baseIndexOf$1;
  var baseIndexOf = _baseIndexOf;
  function charsEndIndex$1(strSymbols, chrSymbols) {
    var index = strSymbols.length;
    while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
    }
    return index;
  }
  var _charsEndIndex = charsEndIndex$1;
  function asciiToArray$1(string) {
    return string.split("");
  }
  var _asciiToArray = asciiToArray$1;
  var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
  var rsZWJ$1 = "\\u200d";
  var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
  function hasUnicode$1(string) {
    return reHasUnicode.test(string);
  }
  var _hasUnicode = hasUnicode$1;
  var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
  var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
  var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
  var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
  function unicodeToArray$1(string) {
    return string.match(reUnicode) || [];
  }
  var _unicodeToArray = unicodeToArray$1;
  var asciiToArray = _asciiToArray, hasUnicode = _hasUnicode, unicodeToArray = _unicodeToArray;
  function stringToArray$1(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  var _stringToArray = stringToArray$1;
  var baseToString$2 = _baseToString;
  function toString$4(value) {
    return value == null ? "" : baseToString$2(value);
  }
  var toString_1 = toString$4;
  var baseToString$1 = _baseToString, castSlice = _castSlice, charsEndIndex = _charsEndIndex, stringToArray = _stringToArray, toString$3 = toString_1, trimmedEndIndex = _trimmedEndIndex;
  function trimEnd(string, chars, guard) {
    string = toString$3(string);
    if (string && (guard || chars === void 0)) {
      return string.slice(0, trimmedEndIndex(string) + 1);
    }
    if (!string || !(chars = baseToString$1(chars))) {
      return string;
    }
    var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
    return castSlice(strSymbols, 0, end).join("");
  }
  var trimEnd_1 = trimEnd;
  var isArray$3 = isArray_1, isSymbol$1 = isSymbol_1;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey$1(value, object) {
    if (isArray$3(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$1(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var _isKey = isKey$1;
  var baseGetTag$1 = _baseGetTag, isObject$3 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$2(value) {
    if (!isObject$3(value)) {
      return false;
    }
    var tag = baseGetTag$1(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$2;
  var root$1 = _root;
  var coreJsData$1 = root$1["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;
  function toSource$1(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var _toSource = toSource$1;
  var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$2 = isObject_1, toSource = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype, objectProto$2 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative$1(value) {
    if (!isObject$2(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative, getValue = _getValue;
  function getNative$2(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$2;
  var getNative$1 = _getNative;
  var nativeCreate$4 = getNative$1(Object, "create");
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$2) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? void 0 : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty.call(data, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function hashSet$1(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
  function Hash$1(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype["delete"] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$1(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$1;
  var eq = eq_1;
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key) {
    var data = this.__data__, index = assocIndexOf$3(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data = this.__data__, index = assocIndexOf$2(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
  function ListCache$1(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$1.prototype.clear = listCacheClear;
  ListCache$1.prototype["delete"] = listCacheDelete;
  ListCache$1.prototype.get = listCacheGet;
  ListCache$1.prototype.has = listCacheHas;
  ListCache$1.prototype.set = listCacheSet;
  var _ListCache = ListCache$1;
  var getNative = _getNative, root = _root;
  var Map$2 = getNative(root, "Map");
  var _Map = Map$2;
  var Hash = _Hash, ListCache = _ListCache, Map$1 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$1 || ListCache)(),
      "string": new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map2, key) {
    var data = map2.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
  function MapCache$1(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$1.prototype.clear = mapCacheClear;
  MapCache$1.prototype["delete"] = mapCacheDelete;
  MapCache$1.prototype.get = mapCacheGet;
  MapCache$1.prototype.has = mapCacheHas;
  MapCache$1.prototype.set = mapCacheSet;
  var _MapCache = MapCache$1;
  var MapCache = _MapCache;
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize$1(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache)();
    return memoized;
  }
  memoize$1.Cache = MapCache;
  var memoize_1 = memoize$1;
  var memoize = memoize_1;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped$1(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var _memoizeCapped = memoizeCapped$1;
  var memoizeCapped = _memoizeCapped;
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath$1 = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath$1;
  var isArray$2 = isArray_1, isKey = _isKey, stringToPath = _stringToPath, toString$2 = toString_1;
  function castPath$1(value, object) {
    if (isArray$2(value)) {
      return value;
    }
    return isKey(value, object) ? [value] : stringToPath(toString$2(value));
  }
  var _castPath = castPath$1;
  var isSymbol = isSymbol_1;
  var INFINITY$1 = 1 / 0;
  function toKey$1(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  var _toKey = toKey$1;
  var castPath = _castPath, toKey = _toKey;
  function baseGet$1(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var _baseGet = baseGet$1;
  var baseGet = _baseGet;
  function get$3(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_1 = get$3;
  //! moment.js
  //! version : 2.29.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var hookCallback;
  function hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray$1(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
  }
  function isObject$1(input) {
    return input != null && Object.prototype.toString.call(input) === "[object Object]";
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else {
      var k;
      for (k in obj) {
        if (hasOwnProp(obj, k)) {
          return false;
        }
      }
      return true;
    }
  }
  function isUndefined(input) {
    return input === void 0;
  }
  function isNumber$2(input) {
    return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
  }
  function map(arr, fn) {
    var res = [], i2;
    for (i2 = 0; i2 < arr.length; ++i2) {
      res.push(fn(arr[i2], i2));
    }
    return res;
  }
  function extend(a, b) {
    for (var i2 in b) {
      if (hasOwnProp(b, i2)) {
        a[i2] = b[i2];
      }
    }
    if (hasOwnProp(b, "toString")) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, "valueOf")) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function createUTC(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t2 = Object(this), len = t2.length >>> 0, i2;
      for (i2 = 0; i2 < len; i2++) {
        if (i2 in t2 && fun.call(this, t2[i2], i2, t2)) {
          return true;
        }
      }
      return false;
    };
  }
  function isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, function(i2) {
        return i2 != null;
      }), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
      if (m._strict) {
        isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
      }
      if (Object.isFrozen == null || !Object.isFrozen(m)) {
        m._isValid = isNowValid;
      } else {
        return isNowValid;
      }
    }
    return m._isValid;
  }
  function createInvalid(flags) {
    var m = createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  var momentProperties = hooks.momentProperties = [], updateInProgress = false;
  function copyConfig(to2, from2) {
    var i2, prop, val;
    if (!isUndefined(from2._isAMomentObject)) {
      to2._isAMomentObject = from2._isAMomentObject;
    }
    if (!isUndefined(from2._i)) {
      to2._i = from2._i;
    }
    if (!isUndefined(from2._f)) {
      to2._f = from2._f;
    }
    if (!isUndefined(from2._l)) {
      to2._l = from2._l;
    }
    if (!isUndefined(from2._strict)) {
      to2._strict = from2._strict;
    }
    if (!isUndefined(from2._tzm)) {
      to2._tzm = from2._tzm;
    }
    if (!isUndefined(from2._isUTC)) {
      to2._isUTC = from2._isUTC;
    }
    if (!isUndefined(from2._offset)) {
      to2._offset = from2._offset;
    }
    if (!isUndefined(from2._pf)) {
      to2._pf = getParsingFlags(from2);
    }
    if (!isUndefined(from2._locale)) {
      to2._locale = from2._locale;
    }
    if (momentProperties.length > 0) {
      for (i2 = 0; i2 < momentProperties.length; i2++) {
        prop = momentProperties[i2];
        val = from2[prop];
        if (!isUndefined(val)) {
          to2[prop] = val;
        }
      }
    }
    return to2;
  }
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
      this._d = new Date(NaN);
    }
    if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
  }
  function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
      console.warn("Deprecation warning: " + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        var args = [], arg, i2, key;
        for (i2 = 0; i2 < arguments.length; i2++) {
          arg = "";
          if (typeof arguments[i2] === "object") {
            arg += "\n[" + i2 + "] ";
            for (key in arguments[0]) {
              if (hasOwnProp(arguments[0], key)) {
                arg += key + ": " + arguments[0][key] + ", ";
              }
            }
            arg = arg.slice(0, -2);
          } else {
            arg = arguments[i2];
          }
          args.push(arg);
        }
        warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  hooks.suppressDeprecationWarnings = false;
  hooks.deprecationHandler = null;
  function isFunction(input) {
    return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
  }
  function set(config) {
    var prop, i2;
    for (i2 in config) {
      if (hasOwnProp(config, i2)) {
        prop = config[i2];
        if (isFunction(prop)) {
          this[i2] = prop;
        } else {
          this["_" + i2] = prop;
        }
      }
    }
    this._config = config;
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject$1(parentConfig[prop]) && isObject$1(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject$1(parentConfig[prop])) {
        res[prop] = extend({}, res[prop]);
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i2, res = [];
      for (i2 in obj) {
        if (hasOwnProp(obj, i2)) {
          res.push(i2);
        }
      }
      return res;
    };
  }
  var defaultCalendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function calendar(key, mom, now2) {
    var output = this._calendar[key] || this._calendar["sameElse"];
    return isFunction(output) ? output.call(mom, now2) : output;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
    return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
  function addFormatToken(token2, padded, ordinal2, callback) {
    var func = callback;
    if (typeof callback === "string") {
      func = function() {
        return this[callback]();
      };
    }
    if (token2) {
      formatTokenFunctions[token2] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal2) {
      formatTokenFunctions[ordinal2] = function() {
        return this.localeData().ordinal(func.apply(this, arguments), token2);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, "");
    }
    return input.replace(/\\/g, "");
  }
  function makeFormatFunction(format2) {
    var array = format2.match(formattingTokens), i2, length;
    for (i2 = 0, length = array.length; i2 < length; i2++) {
      if (formatTokenFunctions[array[i2]]) {
        array[i2] = formatTokenFunctions[array[i2]];
      } else {
        array[i2] = removeFormattingTokens(array[i2]);
      }
    }
    return function(mom) {
      var output = "", i3;
      for (i3 = 0; i3 < length; i3++) {
        output += isFunction(array[i3]) ? array[i3].call(mom, format2) : array[i3];
      }
      return output;
    };
  }
  function formatMoment(m, format2) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format2 = expandFormat(format2, m.localeData());
    formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
    return formatFunctions[format2](m);
  }
  function expandFormat(format2, locale2) {
    var i2 = 5;
    function replaceLongDateFormatTokens(input) {
      return locale2.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i2 >= 0 && localFormattingTokens.test(format2)) {
      format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i2 -= 1;
    }
    return format2;
  }
  var defaultLongDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function longDateFormat(key) {
    var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format2 || !formatUpper) {
      return format2;
    }
    this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
      if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
        return tok.slice(1);
      }
      return tok;
    }).join("");
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = "Invalid date";
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace("%d", number);
  }
  var defaultRelativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff2, output) {
    var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
    return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {}, normalizedProp, prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  var priorities = {};
  function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
  }
  function getPrioritizedUnits(unitsObj) {
    var units = [], u2;
    for (u2 in unitsObj) {
      if (hasOwnProp(unitsObj, u2)) {
        units.push({ unit: u2, priority: priorities[u2] });
      }
    }
    units.sort(function(a, b) {
      return a.priority - b.priority;
    });
    return units;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number) || 0;
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion, value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        set$1(this, unit, value);
        hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get$1(this, unit);
      }
    };
  }
  function get$1(mom, unit) {
    return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
  }
  function set$1(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
      if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
        value = toInt(value);
        mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
      } else {
        mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
      }
    }
  }
  function stringGet(units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units]();
    }
    return this;
  }
  function stringSet(units, value) {
    if (typeof units === "object") {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units), i2;
      for (i2 = 0; i2 < prioritized.length; i2++) {
        this[prioritized[i2].unit](units[prioritized[i2].unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
  regexes = {};
  function addRegexToken(token2, regex, strictRegex) {
    regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
      return isStrict && strictRegex ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token2, config) {
    if (!hasOwnProp(regexes, token2)) {
      return new RegExp(unescapeFormat(token2));
    }
    return regexes[token2](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var tokens = {};
  function addParseToken(token2, callback) {
    var i2, func = callback;
    if (typeof token2 === "string") {
      token2 = [token2];
    }
    if (isNumber$2(callback)) {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i2 = 0; i2 < token2.length; i2++) {
      tokens[token2[i2]] = func;
    }
  }
  function addWeekParseToken(token2, callback) {
    addParseToken(token2, function(input, array, config, token3) {
      config._w = config._w || {};
      callback(input, config._w, config, token3);
    });
  }
  function addTimeToArrayFromToken(token2, input, config) {
    if (input != null && hasOwnProp(tokens, token2)) {
      tokens[token2](input, config._a, config, token2);
    }
  }
  var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
  function mod(n2, x2) {
    return (n2 % x2 + x2) % x2;
  }
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i2;
      for (i2 = 0; i2 < this.length; ++i2) {
        if (this[i2] === o) {
          return i2;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
      return NaN;
    }
    var modMonth = mod(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
  }
  addFormatToken("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  addFormatToken("MMM", 0, 0, function(format2) {
    return this.localeData().monthsShort(this, format2);
  });
  addFormatToken("MMMM", 0, 0, function(format2) {
    return this.localeData().months(this, format2);
  });
  addUnitAlias("month", "M");
  addUnitPriority("month", 8);
  addRegexToken("M", match1to2);
  addRegexToken("MM", match1to2, match2);
  addRegexToken("MMM", function(isStrict, locale2) {
    return locale2.monthsShortRegex(isStrict);
  });
  addRegexToken("MMMM", function(isStrict, locale2) {
    return locale2.monthsRegex(isStrict);
  });
  addParseToken(["M", "MM"], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
    var month = config._locale.monthsParse(input, token2, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
  function localeMonths(m, format2) {
    if (!m) {
      return isArray$1(this._months) ? this._months : this._months["standalone"];
    }
    return isArray$1(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m.month()];
  }
  function localeMonthsShort(m, format2) {
    if (!m) {
      return isArray$1(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
    }
    return isArray$1(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m.month()];
  }
  function handleStrictParse(monthName, format2, strict) {
    var i2, ii2, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i2 = 0; i2 < 12; ++i2) {
        mom = createUTC([2e3, i2]);
        this._shortMonthsParse[i2] = this.monthsShort(mom, "").toLocaleLowerCase();
        this._longMonthsParse[i2] = this.months(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "MMM") {
        ii2 = indexOf.call(this._shortMonthsParse, llc);
        return ii2 !== -1 ? ii2 : null;
      } else {
        ii2 = indexOf.call(this._longMonthsParse, llc);
        return ii2 !== -1 ? ii2 : null;
      }
    } else {
      if (format2 === "MMM") {
        ii2 = indexOf.call(this._shortMonthsParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._longMonthsParse, llc);
        return ii2 !== -1 ? ii2 : null;
      } else {
        ii2 = indexOf.call(this._longMonthsParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._shortMonthsParse, llc);
        return ii2 !== -1 ? ii2 : null;
      }
    }
  }
  function localeMonthsParse(monthName, format2, strict) {
    var i2, mom, regex;
    if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format2, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i2 = 0; i2 < 12; i2++) {
      mom = createUTC([2e3, i2]);
      if (strict && !this._longMonthsParse[i2]) {
        this._longMonthsParse[i2] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
        this._shortMonthsParse[i2] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
      }
      if (!strict && !this._monthsParse[i2]) {
        regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
        this._monthsParse[i2] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "MMMM" && this._longMonthsParse[i2].test(monthName)) {
        return i2;
      } else if (strict && format2 === "MMM" && this._shortMonthsParse[i2].test(monthName)) {
        return i2;
      } else if (!strict && this._monthsParse[i2].test(monthName)) {
        return i2;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === "string") {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (!isNumber$2(value)) {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
    } else {
      return get$1(this, "Month");
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsShortRegex")) {
        this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, "_monthsRegex")) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      if (!hasOwnProp(this, "_monthsRegex")) {
        this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [], longPieces = [], mixedPieces = [], i2, mom;
    for (i2 = 0; i2 < 12; i2++) {
      mom = createUTC([2e3, i2]);
      shortPieces.push(this.monthsShort(mom, ""));
      longPieces.push(this.months(mom, ""));
      mixedPieces.push(this.months(mom, ""));
      mixedPieces.push(this.monthsShort(mom, ""));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i2 = 0; i2 < 12; i2++) {
      shortPieces[i2] = regexEscape(shortPieces[i2]);
      longPieces[i2] = regexEscape(longPieces[i2]);
    }
    for (i2 = 0; i2 < 24; i2++) {
      mixedPieces[i2] = regexEscape(mixedPieces[i2]);
    }
    this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
    this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
  }
  addFormatToken("Y", 0, 0, function() {
    var y2 = this.year();
    return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
  });
  addFormatToken(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ["YYYY", 4], 0, "year");
  addFormatToken(0, ["YYYYY", 5], 0, "year");
  addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
  addUnitAlias("year", "y");
  addUnitPriority("year", 1);
  addRegexToken("Y", matchSigned);
  addRegexToken("YY", match1to2, match2);
  addRegexToken("YYYY", match1to4, match4);
  addRegexToken("YYYYY", match1to6, match6);
  addRegexToken("YYYYYY", match1to6, match6);
  addParseToken(["YYYYY", "YYYYYY"], YEAR);
  addParseToken("YYYY", function(input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken("YY", function(input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
  });
  addParseToken("Y", function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
  };
  var getSetYear = makeGetSet("FullYear", true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function createDate(y2, m, d, h, M2, s, ms) {
    var date;
    if (y2 < 100 && y2 >= 0) {
      date = new Date(y2 + 400, m, d, h, M2, s, ms);
      if (isFinite(date.getFullYear())) {
        date.setFullYear(y2);
      }
    } else {
      date = new Date(y2, m, d, h, M2, s, ms);
    }
    return date;
  }
  function createUTCDate(y2) {
    var date, args;
    if (y2 < 100 && y2 >= 0) {
      args = Array.prototype.slice.call(arguments);
      args[0] = y2 + 400;
      date = new Date(Date.UTC.apply(null, args));
      if (isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y2);
      }
    } else {
      date = new Date(Date.UTC.apply(null, arguments));
    }
    return date;
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  addFormatToken("w", ["ww", 2], "wo", "week");
  addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
  addUnitAlias("week", "w");
  addUnitAlias("isoWeek", "W");
  addUnitPriority("week", 5);
  addUnitPriority("isoWeek", 5);
  addRegexToken("w", match1to2);
  addRegexToken("ww", match1to2, match2);
  addRegexToken("W", match1to2);
  addRegexToken("WW", match1to2, match2);
  addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
    week[token2.substr(0, 1)] = toInt(input);
  });
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, "d");
  }
  addFormatToken("d", 0, "do", "day");
  addFormatToken("dd", 0, 0, function(format2) {
    return this.localeData().weekdaysMin(this, format2);
  });
  addFormatToken("ddd", 0, 0, function(format2) {
    return this.localeData().weekdaysShort(this, format2);
  });
  addFormatToken("dddd", 0, 0, function(format2) {
    return this.localeData().weekdays(this, format2);
  });
  addFormatToken("e", 0, 0, "weekday");
  addFormatToken("E", 0, 0, "isoWeekday");
  addUnitAlias("day", "d");
  addUnitAlias("weekday", "e");
  addUnitAlias("isoWeekday", "E");
  addUnitPriority("day", 11);
  addUnitPriority("weekday", 11);
  addUnitPriority("isoWeekday", 11);
  addRegexToken("d", match1to2);
  addRegexToken("e", match1to2);
  addRegexToken("E", match1to2);
  addRegexToken("dd", function(isStrict, locale2) {
    return locale2.weekdaysMinRegex(isStrict);
  });
  addRegexToken("ddd", function(isStrict, locale2) {
    return locale2.weekdaysShortRegex(isStrict);
  });
  addRegexToken("dddd", function(isStrict, locale2) {
    return locale2.weekdaysRegex(isStrict);
  });
  addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
    var weekday = config._locale.weekdaysParse(input, token2, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
    week[token2] = toInt(input);
  });
  function parseWeekday(input, locale2) {
    if (typeof input !== "string") {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale2.weekdaysParse(input);
    if (typeof input === "number") {
      return input;
    }
    return null;
  }
  function parseIsoWeekday(input, locale2) {
    if (typeof input === "string") {
      return locale2.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
  }
  function shiftWeekdays(ws, n2) {
    return ws.slice(n2, 7).concat(ws.slice(0, n2));
  }
  var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
  function localeWeekdays(m, format2) {
    var weekdays = isArray$1(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
    return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
  }
  function localeWeekdaysShort(m) {
    return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
  }
  function localeWeekdaysMin(m) {
    return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
  }
  function handleStrictParse$1(weekdayName, format2, strict) {
    var i2, ii2, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i2 = 0; i2 < 7; ++i2) {
        mom = createUTC([2e3, 1]).day(i2);
        this._minWeekdaysParse[i2] = this.weekdaysMin(mom, "").toLocaleLowerCase();
        this._shortWeekdaysParse[i2] = this.weekdaysShort(mom, "").toLocaleLowerCase();
        this._weekdaysParse[i2] = this.weekdays(mom, "").toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format2 === "dddd") {
        ii2 = indexOf.call(this._weekdaysParse, llc);
        return ii2 !== -1 ? ii2 : null;
      } else if (format2 === "ddd") {
        ii2 = indexOf.call(this._shortWeekdaysParse, llc);
        return ii2 !== -1 ? ii2 : null;
      } else {
        ii2 = indexOf.call(this._minWeekdaysParse, llc);
        return ii2 !== -1 ? ii2 : null;
      }
    } else {
      if (format2 === "dddd") {
        ii2 = indexOf.call(this._weekdaysParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._minWeekdaysParse, llc);
        return ii2 !== -1 ? ii2 : null;
      } else if (format2 === "ddd") {
        ii2 = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._weekdaysParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._minWeekdaysParse, llc);
        return ii2 !== -1 ? ii2 : null;
      } else {
        ii2 = indexOf.call(this._minWeekdaysParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._weekdaysParse, llc);
        if (ii2 !== -1) {
          return ii2;
        }
        ii2 = indexOf.call(this._shortWeekdaysParse, llc);
        return ii2 !== -1 ? ii2 : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format2, strict) {
    var i2, mom, regex;
    if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format2, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i2 = 0; i2 < 7; i2++) {
      mom = createUTC([2e3, 1]).day(i2);
      if (strict && !this._fullWeekdaysParse[i2]) {
        this._fullWeekdaysParse[i2] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
        this._shortWeekdaysParse[i2] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
        this._minWeekdaysParse[i2] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
      }
      if (!this._weekdaysParse[i2]) {
        regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
        this._weekdaysParse[i2] = new RegExp(regex.replace(".", ""), "i");
      }
      if (strict && format2 === "dddd" && this._fullWeekdaysParse[i2].test(weekdayName)) {
        return i2;
      } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i2].test(weekdayName)) {
        return i2;
      } else if (strict && format2 === "dd" && this._minWeekdaysParse[i2].test(weekdayName)) {
        return i2;
      } else if (!strict && this._weekdaysParse[i2].test(weekdayName)) {
        return i2;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, "d");
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, "d");
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
      return this.day() || 7;
    }
  }
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysShortRegex")) {
        this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, "_weekdaysRegex")) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      if (!hasOwnProp(this, "_weekdaysMinRegex")) {
        this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i2, mom, minp, shortp, longp;
    for (i2 = 0; i2 < 7; i2++) {
      mom = createUTC([2e3, 1]).day(i2);
      minp = regexEscape(this.weekdaysMin(mom, ""));
      shortp = regexEscape(this.weekdaysShort(mom, ""));
      longp = regexEscape(this.weekdays(mom, ""));
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
    this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
    this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken("H", ["HH", 2], 0, "hour");
  addFormatToken("h", ["hh", 2], 0, hFormat);
  addFormatToken("k", ["kk", 2], 0, kFormat);
  addFormatToken("hmm", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken("hmmss", 0, 0, function() {
    return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken("Hmm", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken("Hmmss", 0, 0, function() {
    return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token2, lowercase) {
    addFormatToken(token2, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem("a", true);
  meridiem("A", false);
  addUnitAlias("hour", "h");
  addUnitPriority("hour", 13);
  function matchMeridiem(isStrict, locale2) {
    return locale2._meridiemParse;
  }
  addRegexToken("a", matchMeridiem);
  addRegexToken("A", matchMeridiem);
  addRegexToken("H", match1to2);
  addRegexToken("h", match1to2);
  addRegexToken("k", match1to2);
  addRegexToken("HH", match1to2, match2);
  addRegexToken("hh", match1to2, match2);
  addRegexToken("kk", match1to2, match2);
  addRegexToken("hmm", match3to4);
  addRegexToken("hmmss", match5to6);
  addRegexToken("Hmm", match3to4);
  addRegexToken("Hmmss", match5to6);
  addParseToken(["H", "HH"], HOUR);
  addParseToken(["k", "kk"], function(input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
  });
  addParseToken(["a", "A"], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(["h", "hh"], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken("Hmm", function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken("Hmmss", function(input, array, config) {
    var pos1 = input.length - 4, pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return (input + "").toLowerCase().charAt(0) === "p";
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
  function localeMeridiem(hours2, minutes2, isLower) {
    if (hours2 > 11) {
      return isLower ? "pm" : "PM";
    } else {
      return isLower ? "am" : "AM";
    }
  }
  var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
  };
  var locales = {}, localeFamilies = {}, globalLocale;
  function commonPrefix(arr1, arr2) {
    var i2, minl = Math.min(arr1.length, arr2.length);
    for (i2 = 0; i2 < minl; i2 += 1) {
      if (arr1[i2] !== arr2[i2]) {
        return i2;
      }
    }
    return minl;
  }
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace("_", "-") : key;
  }
  function chooseLocale(names) {
    var i2 = 0, j2, next, locale2, split;
    while (i2 < names.length) {
      split = normalizeLocale(names[i2]).split("-");
      j2 = split.length;
      next = normalizeLocale(names[i2 + 1]);
      next = next ? next.split("-") : null;
      while (j2 > 0) {
        locale2 = loadLocale(split.slice(0, j2).join("-"));
        if (locale2) {
          return locale2;
        }
        if (next && next.length >= j2 && commonPrefix(split, next) >= j2 - 1) {
          break;
        }
        j2--;
      }
      i2++;
    }
    return globalLocale;
  }
  function loadLocale(name) {
    var oldLocale = null, aliasedRequire;
    if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        aliasedRequire = require;
        aliasedRequire("./locale/" + name);
        getSetGlobalLocale(oldLocale);
      } catch (e) {
        locales[name] = null;
      }
    }
    return locales[name];
  }
  function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      } else {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("Locale " + key + " not found. Did you forget to load it?");
        }
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      var locale2, parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
        parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          locale2 = loadLocale(config.parentLocale);
          if (locale2 != null) {
            parentConfig = locale2._config;
          } else {
            if (!localeFamilies[config.parentLocale]) {
              localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({
              name,
              config
            });
            return null;
          }
        }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));
      if (localeFamilies[name]) {
        localeFamilies[name].forEach(function(x2) {
          defineLocale(x2.name, x2.config);
        });
      }
      getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale2, tmpLocale, parentConfig = baseConfig;
      if (locales[name] != null && locales[name].parentLocale != null) {
        locales[name].set(mergeConfigs(locales[name]._config, config));
      } else {
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        if (tmpLocale == null) {
          config.abbr = name;
        }
        locale2 = new Locale(config);
        locale2.parentLocale = locales[name];
        locales[name] = locale2;
      }
      getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
          if (name === getSetGlobalLocale()) {
            getSetGlobalLocale(name);
          }
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function getLocale(key) {
    var locale2;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray$1(key)) {
      locale2 = loadLocale(key);
      if (locale2) {
        return locale2;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function listLocales() {
    return keys(locales);
  }
  function checkOverflow(m) {
    var overflow, a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, false],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, false],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, false],
    ["YYYY", /\d{4}/, false]
  ], isoTimes = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function configFromISO(config) {
    var i2, l2, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i2 = 0, l2 = isoDates.length; i2 < l2; i2++) {
        if (isoDates[i2][1].exec(match[1])) {
          dateFormat = isoDates[i2][0];
          allowTime = isoDates[i2][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i2 = 0, l2 = isoTimes.length; i2 < l2; i2++) {
          if (isoTimes[i2][1].exec(match[3])) {
            timeFormat = (match[2] || " ") + isoTimes[i2][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = "Z";
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = [
      untruncateYear(yearStr),
      defaultLocaleMonthsShort.indexOf(monthStr),
      parseInt(dayStr, 10),
      parseInt(hourStr, 10),
      parseInt(minuteStr, 10)
    ];
    if (secondStr) {
      result.push(parseInt(secondStr, 10));
    }
    return result;
  }
  function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
      return 2e3 + year;
    } else if (year <= 999) {
      return 1900 + year;
    }
    return year;
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
      var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
      if (weekdayProvided !== weekdayActual) {
        getParsingFlags(config).weekdayMismatch = true;
        config._isValid = false;
        return false;
      }
    }
    return true;
  }
  function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
      return obsOffsets[obsOffset];
    } else if (militaryOffset) {
      return 0;
    } else {
      var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
      return h * 60 + m;
    }
  }
  function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
    if (match) {
      parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
      if (!checkWeekday(match[1], parsedArray, config)) {
        return;
      }
      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      getParsingFlags(config).rfc2822 = true;
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
      delete config._isValid;
    } else {
      return;
    }
    if (config._strict) {
      config._isValid = false;
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
    config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
  });
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
      return [
        nowValue.getUTCFullYear(),
        nowValue.getUTCMonth(),
        nowValue.getUTCDate()
      ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i2, date, input = [], currentDate, expectedWeekday, yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear != null) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i2 = 0; i2 < 3 && config._a[i2] == null; ++i2) {
      config._a[i2] = input[i2] = currentDate[i2];
    }
    for (; i2 < 7; i2++) {
      config._a[i2] = input[i2] = config._a[i2] == null ? i2 === 2 ? 1 : 0 : config._a[i2];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
    if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
      getParsingFlags(config).weekdayMismatch = true;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
    w2 = config._w;
    if (w2.GG != null || w2.W != null || w2.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(w2.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w2.W, 1);
      weekday = defaults(w2.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      curWeek = weekOfYear(createLocal(), dow, doy);
      weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
      week = defaults(w2.w, curWeek.week);
      if (w2.d != null) {
        weekday = w2.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w2.e != null) {
        weekday = w2.e + dow;
        if (w2.e < 0 || w2.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  hooks.ISO_8601 = function() {
  };
  hooks.RFC_2822 = function() {
  };
  function configFromStringAndFormat(config) {
    if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    if (config._f === hooks.RFC_2822) {
      configFromRFC2822(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = "" + config._i, i2, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
    tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i2 = 0; i2 < tokens2.length; i2++) {
      token2 = tokens2[i2];
      parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token2]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token2);
        }
        addTimeToArrayFromToken(token2, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token2);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    era = getParsingFlags(config).era;
    if (era !== null) {
      config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
    }
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale2, hour, meridiem2) {
    var isPm;
    if (meridiem2 == null) {
      return hour;
    }
    if (locale2.meridiemHour != null) {
      return locale2.meridiemHour(hour, meridiem2);
    } else if (locale2.isPM != null) {
      isPm = locale2.isPM(meridiem2);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i2, currentScore, validFormatFound, bestFormatIsValid = false;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i2 = 0; i2 < config._f.length; i2++) {
      currentScore = 0;
      validFormatFound = false;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i2];
      configFromStringAndFormat(tempConfig);
      if (isValid(tempConfig)) {
        validFormatFound = true;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (!bestFormatIsValid) {
        if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
          if (validFormatFound) {
            bestFormatIsValid = true;
          }
        }
      } else {
        if (currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i2 = normalizeObjectUnits(config._i), dayOrDate = i2.day === void 0 ? i2.date : i2.day;
    config._a = map([i2.year, i2.month, dayOrDate, i2.hour, i2.minute, i2.second, i2.millisecond], function(obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, "d");
      res._nextDay = void 0;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i, format2 = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || format2 === void 0 && input === "") {
      return createInvalid({ nullInput: true });
    }
    if (typeof input === "string") {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
      config._d = input;
    } else if (isArray$1(format2)) {
      configFromStringAndArray(config);
    } else if (format2) {
      configFromStringAndFormat(config);
    } else {
      configFromInput(config);
    }
    if (!isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
      config._d = new Date(hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === "string") {
      configFromString(config);
    } else if (isArray$1(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (isObject$1(input)) {
      configFromObject(config);
    } else if (isNumber$2(input)) {
      config._d = new Date(input);
    } else {
      hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
    var c = {};
    if (format2 === true || format2 === false) {
      strict = format2;
      format2 = void 0;
    }
    if (locale2 === true || locale2 === false) {
      strict = locale2;
      locale2 = void 0;
    }
    if (isObject$1(input) && isObjectEmpty(input) || isArray$1(input) && input.length === 0) {
      input = void 0;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale2;
    c._i = input;
    c._f = format2;
    c._strict = strict;
    return createFromConfig(c);
  }
  function createLocal(input, format2, locale2, strict) {
    return createLocalOrUTC(input, format2, locale2, strict, false);
  }
  var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return createInvalid();
    }
  }), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var other = createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return createInvalid();
    }
  });
  function pickBy(fn, moments) {
    var res, i2;
    if (moments.length === 1 && isArray$1(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return createLocal();
    }
    res = moments[0];
    for (i2 = 1; i2 < moments.length; ++i2) {
      if (!moments[i2].isValid() || moments[i2][fn](res)) {
        res = moments[i2];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isBefore", args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy("isAfter", args);
  }
  var now = function() {
    return Date.now ? Date.now() : +new Date();
  };
  var ordering = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function isDurationValid(m) {
    var key, unitHasDecimal = false, i2;
    for (key in m) {
      if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
        return false;
      }
    }
    for (i2 = 0; i2 < ordering.length; ++i2) {
      if (m[ordering[i2]]) {
        if (unitHasDecimal) {
          return false;
        }
        if (parseFloat(m[ordering[i2]]) !== toInt(m[ordering[i2]])) {
          unitHasDecimal = true;
        }
      }
    }
    return true;
  }
  function isValid$1() {
    return this._isValid;
  }
  function createInvalid$1() {
    return createDuration(NaN);
  }
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
    this._isValid = isDurationValid(normalizedInput);
    this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
    this._days = +days2 + weeks2 * 7;
    this._months = +months2 + quarters * 3 + years2 * 12;
    this._data = {};
    this._locale = getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i2;
    for (i2 = 0; i2 < len; i2++) {
      if (dontConvert && array1[i2] !== array2[i2] || !dontConvert && toInt(array1[i2]) !== toInt(array2[i2])) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function offset(token2, separator) {
    addFormatToken(token2, 0, 0, function() {
      var offset2 = this.utcOffset(), sign2 = "+";
      if (offset2 < 0) {
        offset2 = -offset2;
        sign2 = "-";
      }
      return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
    });
  }
  offset("Z", ":");
  offset("ZZ", "");
  addRegexToken("Z", matchShortOffset);
  addRegexToken("ZZ", matchShortOffset);
  addParseToken(["Z", "ZZ"], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = (string || "").match(matcher), chunk, parts, minutes2;
    if (matches === null) {
      return null;
    }
    chunk = matches[matches.length - 1] || [];
    parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
    minutes2 = +(parts[1] * 60) + toInt(parts[2]);
    return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
  }
  function cloneWithOffset(input, model) {
    var res, diff2;
    if (model._isUTC) {
      res = model.clone();
      diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff2);
      hooks.updateOffset(res, false);
      return res;
    } else {
      return createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset());
  }
  hooks.updateOffset = function() {
  };
  function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset2 = this._offset || 0, localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === "string") {
        input = offsetFromString(matchShortOffset, input);
        if (input === null) {
          return this;
        }
      } else if (Math.abs(input) < 16 && !keepMinutes) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, "m");
      }
      if (offset2 !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          addSubtract(this, createDuration(input - offset2, "m"), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset2 : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== "string") {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), "m");
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm != null) {
      this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === "string") {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
        this.utcOffset(tZone);
      } else {
        this.utcOffset(0, true);
      }
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {}, other;
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function createDuration(input, key) {
    var duration = input, match = null, sign2, ret, diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (isNumber$2(input) || !isNaN(+input)) {
      duration = {};
      if (key) {
        duration[key] = +input;
      } else {
        duration.milliseconds = +input;
      }
    } else if (match = aspNetRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign2,
        h: toInt(match[HOUR]) * sign2,
        m: toInt(match[MINUTE]) * sign2,
        s: toInt(match[SECOND]) * sign2,
        ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
      };
    } else if (match = isoRegex.exec(input)) {
      sign2 = match[1] === "-" ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign2),
        M: parseIso(match[3], sign2),
        w: parseIso(match[4], sign2),
        d: parseIso(match[5], sign2),
        h: parseIso(match[6], sign2),
        m: parseIso(match[7], sign2),
        s: parseIso(match[8], sign2)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, "_locale")) {
      ret._locale = input._locale;
    }
    if (isDuration(input) && hasOwnProp(input, "_isValid")) {
      ret._isValid = input._isValid;
    }
    return ret;
  }
  createDuration.fn = Duration.prototype;
  createDuration.invalid = createInvalid$1;
  function parseIso(inp, sign2) {
    var res = inp && parseFloat(inp.replace(",", "."));
    return (isNaN(res) ? 0 : res) * sign2;
  }
  function positiveMomentsDifference(base, other) {
    var res = {};
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, "M").isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +base.clone().add(res.months, "M");
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return { milliseconds: 0, months: 0 };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur, tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
        tmp = val;
        val = period;
        period = tmp;
      }
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
    };
  }
  function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (months2) {
      setMonth(mom, get$1(mom, "Month") + months2 * isAdding);
    }
    if (days2) {
      set$1(mom, "Date", get$1(mom, "Date") + days2 * isAdding);
    }
    if (milliseconds2) {
      mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
    }
    if (updateOffset) {
      hooks.updateOffset(mom, days2 || months2);
    }
  }
  var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
  function isString$1(input) {
    return typeof input === "string" || input instanceof String;
  }
  function isMomentInput(input) {
    return isMoment(input) || isDate(input) || isString$1(input) || isNumber$2(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
  }
  function isMomentInputObject(input) {
    var objectTest = isObject$1(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], i2, property;
    for (i2 = 0; i2 < properties.length; i2 += 1) {
      property = properties[i2];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function isNumberOrStringArray(input) {
    var arrayTest = isArray$1(input), dataTypeTest = false;
    if (arrayTest) {
      dataTypeTest = input.filter(function(item) {
        return !isNumber$2(item) && isString$1(input);
      }).length === 0;
    }
    return arrayTest && dataTypeTest;
  }
  function isCalendarSpec(input) {
    var objectTest = isObject$1(input) && !isObjectEmpty(input), propertyTest = false, properties = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], i2, property;
    for (i2 = 0; i2 < properties.length; i2 += 1) {
      property = properties[i2];
      propertyTest = propertyTest || hasOwnProp(input, property);
    }
    return objectTest && propertyTest;
  }
  function getCalendarFormat(myMoment, now2) {
    var diff2 = myMoment.diff(now2, "days", true);
    return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
  }
  function calendar$1(time, formats) {
    if (arguments.length === 1) {
      if (!arguments[0]) {
        time = void 0;
        formats = void 0;
      } else if (isMomentInput(arguments[0])) {
        time = arguments[0];
        formats = void 0;
      } else if (isCalendarSpec(arguments[0])) {
        formats = arguments[0];
        time = void 0;
      }
    }
    var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
    return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from2, to2, units, inclusivity) {
    var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
      return false;
    }
    inclusivity = inclusivity || "()";
    return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : createLocal(input), inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units) || "millisecond";
    if (units === "millisecond") {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that, zoneDelta, output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    switch (units) {
      case "year":
        output = monthDiff(this, that) / 12;
        break;
      case "month":
        output = monthDiff(this, that);
        break;
      case "quarter":
        output = monthDiff(this, that) / 3;
        break;
      case "second":
        output = (this - that) / 1e3;
        break;
      case "minute":
        output = (this - that) / 6e4;
        break;
      case "hour":
        output = (this - that) / 36e5;
        break;
      case "day":
        output = (this - that - zoneDelta) / 864e5;
        break;
      case "week":
        output = (this - that - zoneDelta) / 6048e5;
        break;
      default:
        output = this - that;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    if (a.date() < b.date()) {
      return -monthDiff(b, a);
    }
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function toString$1() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function toISOString(keepOffset) {
    if (!this.isValid()) {
      return null;
    }
    var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
      return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
    }
    if (isFunction(Date.prototype.toISOString)) {
      if (utc) {
        return this.toDate().toISOString();
      } else {
        return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
      }
    }
    return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  function inspect() {
    if (!this.isValid()) {
      return "moment.invalid(/* " + this._i + " */)";
    }
    var func = "moment", zone = "", prefix, year, datetime, suffix;
    if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
      zone = "Z";
    }
    prefix = "[" + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
    datetime = "-MM-DD[T]HH:mm:ss.SSS";
    suffix = zone + '[")]';
    return this.format(prefix + year + datetime + suffix);
  }
  function format$1(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
      return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === void 0) {
      return this._locale._abbr;
    } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
    if (key === void 0) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
  function mod$1(dividend, divisor) {
    return (dividend % divisor + divisor) % divisor;
  }
  function localStartOfDate(y2, m, d) {
    if (y2 < 100 && y2 >= 0) {
      return new Date(y2 + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return new Date(y2, m, d).valueOf();
    }
  }
  function utcStartOfDate(y2, m, d) {
    if (y2 < 100 && y2 >= 0) {
      return Date.UTC(y2 + 400, m, d) - MS_PER_400_YEARS;
    } else {
      return Date.UTC(y2, m, d);
    }
  }
  function startOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year(), 0, 1);
        break;
      case "quarter":
        time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        time = startOfDate(this.year(), this.month(), 1);
        break;
      case "week":
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date());
        break;
      case "hour":
        time = this._d.valueOf();
        time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
        break;
      case "minute":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_MINUTE);
        break;
      case "second":
        time = this._d.valueOf();
        time -= mod$1(time, MS_PER_SECOND);
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function endOf(units) {
    var time, startOfDate;
    units = normalizeUnits(units);
    if (units === void 0 || units === "millisecond" || !this.isValid()) {
      return this;
    }
    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
    switch (units) {
      case "year":
        time = startOfDate(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        time = startOfDate(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        time = this._d.valueOf();
        time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
        break;
      case "minute":
        time = this._d.valueOf();
        time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
        break;
      case "second":
        time = this._d.valueOf();
        time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
        break;
    }
    this._d.setTime(time);
    hooks.updateOffset(this, true);
    return this;
  }
  function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function unix() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function toDate() {
    return new Date(this.valueOf());
  }
  function toArray() {
    var m = this;
    return [
      m.year(),
      m.month(),
      m.date(),
      m.hour(),
      m.minute(),
      m.second(),
      m.millisecond()
    ];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function isValid$2() {
    return isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken("N", 0, 0, "eraAbbr");
  addFormatToken("NN", 0, 0, "eraAbbr");
  addFormatToken("NNN", 0, 0, "eraAbbr");
  addFormatToken("NNNN", 0, 0, "eraName");
  addFormatToken("NNNNN", 0, 0, "eraNarrow");
  addFormatToken("y", ["y", 1], "yo", "eraYear");
  addFormatToken("y", ["yy", 2], 0, "eraYear");
  addFormatToken("y", ["yyy", 3], 0, "eraYear");
  addFormatToken("y", ["yyyy", 4], 0, "eraYear");
  addRegexToken("N", matchEraAbbr);
  addRegexToken("NN", matchEraAbbr);
  addRegexToken("NNN", matchEraAbbr);
  addRegexToken("NNNN", matchEraName);
  addRegexToken("NNNNN", matchEraNarrow);
  addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
    var era = config._locale.erasParse(input, token2, config._strict);
    if (era) {
      getParsingFlags(config).era = era;
    } else {
      getParsingFlags(config).invalidEra = input;
    }
  });
  addRegexToken("y", matchUnsigned);
  addRegexToken("yy", matchUnsigned);
  addRegexToken("yyy", matchUnsigned);
  addRegexToken("yyyy", matchUnsigned);
  addRegexToken("yo", matchEraYearOrdinal);
  addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
  addParseToken(["yo"], function(input, array, config, token2) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
      match = input.match(config._locale._eraYearOrdinalRegex);
    }
    if (config._locale.eraYearOrdinalParse) {
      array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
    } else {
      array[YEAR] = parseInt(input, 10);
    }
  });
  function localeEras(m, format2) {
    var i2, l2, date, eras = this._eras || getLocale("en")._eras;
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      switch (typeof eras[i2].since) {
        case "string":
          date = hooks(eras[i2].since).startOf("day");
          eras[i2].since = date.valueOf();
          break;
      }
      switch (typeof eras[i2].until) {
        case "undefined":
          eras[i2].until = Infinity;
          break;
        case "string":
          date = hooks(eras[i2].until).startOf("day").valueOf();
          eras[i2].until = date.valueOf();
          break;
      }
    }
    return eras;
  }
  function localeErasParse(eraName, format2, strict) {
    var i2, l2, eras = this.eras(), name, abbr, narrow;
    eraName = eraName.toUpperCase();
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      name = eras[i2].name.toUpperCase();
      abbr = eras[i2].abbr.toUpperCase();
      narrow = eras[i2].narrow.toUpperCase();
      if (strict) {
        switch (format2) {
          case "N":
          case "NN":
          case "NNN":
            if (abbr === eraName) {
              return eras[i2];
            }
            break;
          case "NNNN":
            if (name === eraName) {
              return eras[i2];
            }
            break;
          case "NNNNN":
            if (narrow === eraName) {
              return eras[i2];
            }
            break;
        }
      } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
        return eras[i2];
      }
    }
  }
  function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? 1 : -1;
    if (year === void 0) {
      return hooks(era.since).year();
    } else {
      return hooks(era.since).year() + (year - era.offset) * dir;
    }
  }
  function getEraName() {
    var i2, l2, val, eras = this.localeData().eras();
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i2].since <= val && val <= eras[i2].until) {
        return eras[i2].name;
      }
      if (eras[i2].until <= val && val <= eras[i2].since) {
        return eras[i2].name;
      }
    }
    return "";
  }
  function getEraNarrow() {
    var i2, l2, val, eras = this.localeData().eras();
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i2].since <= val && val <= eras[i2].until) {
        return eras[i2].narrow;
      }
      if (eras[i2].until <= val && val <= eras[i2].since) {
        return eras[i2].narrow;
      }
    }
    return "";
  }
  function getEraAbbr() {
    var i2, l2, val, eras = this.localeData().eras();
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      val = this.clone().startOf("day").valueOf();
      if (eras[i2].since <= val && val <= eras[i2].until) {
        return eras[i2].abbr;
      }
      if (eras[i2].until <= val && val <= eras[i2].since) {
        return eras[i2].abbr;
      }
    }
    return "";
  }
  function getEraYear() {
    var i2, l2, dir, val, eras = this.localeData().eras();
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      dir = eras[i2].since <= eras[i2].until ? 1 : -1;
      val = this.clone().startOf("day").valueOf();
      if (eras[i2].since <= val && val <= eras[i2].until || eras[i2].until <= val && val <= eras[i2].since) {
        return (this.year() - hooks(eras[i2].since).year()) * dir + eras[i2].offset;
      }
    }
    return this.year();
  }
  function erasNameRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNameRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
  }
  function erasAbbrRegex(isStrict) {
    if (!hasOwnProp(this, "_erasAbbrRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
  }
  function erasNarrowRegex(isStrict) {
    if (!hasOwnProp(this, "_erasNarrowRegex")) {
      computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
  }
  function matchEraAbbr(isStrict, locale2) {
    return locale2.erasAbbrRegex(isStrict);
  }
  function matchEraName(isStrict, locale2) {
    return locale2.erasNameRegex(isStrict);
  }
  function matchEraNarrow(isStrict, locale2) {
    return locale2.erasNarrowRegex(isStrict);
  }
  function matchEraYearOrdinal(isStrict, locale2) {
    return locale2._eraYearOrdinalRegex || matchUnsigned;
  }
  function computeErasParse() {
    var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i2, l2, eras = this.eras();
    for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
      namePieces.push(regexEscape(eras[i2].name));
      abbrPieces.push(regexEscape(eras[i2].abbr));
      narrowPieces.push(regexEscape(eras[i2].narrow));
      mixedPieces.push(regexEscape(eras[i2].name));
      mixedPieces.push(regexEscape(eras[i2].abbr));
      mixedPieces.push(regexEscape(eras[i2].narrow));
    }
    this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
    this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
    this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
    this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
  }
  addFormatToken(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token2, getter) {
    addFormatToken(0, [token2, token2.length], 0, getter);
  }
  addWeekYearFormatToken("gggg", "weekYear");
  addWeekYearFormatToken("ggggg", "weekYear");
  addWeekYearFormatToken("GGGG", "isoWeekYear");
  addWeekYearFormatToken("GGGGG", "isoWeekYear");
  addUnitAlias("weekYear", "gg");
  addUnitAlias("isoWeekYear", "GG");
  addUnitPriority("weekYear", 1);
  addUnitPriority("isoWeekYear", 1);
  addRegexToken("G", matchSigned);
  addRegexToken("g", matchSigned);
  addRegexToken("GG", match1to2, match2);
  addRegexToken("gg", match1to2, match2);
  addRegexToken("GGGG", match1to4, match4);
  addRegexToken("gggg", match1to4, match4);
  addRegexToken("GGGGG", match1to6, match6);
  addRegexToken("ggggg", match1to6, match6);
  addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
    week[token2.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
    week[token2] = hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getISOWeeksInISOWeekYear() {
    return weeksInYear(this.isoWeekYear(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken("Q", 0, "Qo", "quarter");
  addUnitAlias("quarter", "Q");
  addUnitPriority("quarter", 7);
  addRegexToken("Q", match1);
  addParseToken("Q", function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken("D", ["DD", 2], "Do", "date");
  addUnitAlias("date", "D");
  addUnitPriority("date", 9);
  addRegexToken("D", match1to2);
  addRegexToken("DD", match1to2, match2);
  addRegexToken("Do", function(isStrict, locale2) {
    return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
  });
  addParseToken(["D", "DD"], DATE);
  addParseToken("Do", function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0]);
  });
  var getSetDayOfMonth = makeGetSet("Date", true);
  addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  addUnitAlias("dayOfYear", "DDD");
  addUnitPriority("dayOfYear", 4);
  addRegexToken("DDD", match1to3);
  addRegexToken("DDDD", match3);
  addParseToken(["DDD", "DDDD"], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
  }
  addFormatToken("m", ["mm", 2], 0, "minute");
  addUnitAlias("minute", "m");
  addUnitPriority("minute", 14);
  addRegexToken("m", match1to2);
  addRegexToken("mm", match1to2, match2);
  addParseToken(["m", "mm"], MINUTE);
  var getSetMinute = makeGetSet("Minutes", false);
  addFormatToken("s", ["ss", 2], 0, "second");
  addUnitAlias("second", "s");
  addUnitPriority("second", 15);
  addRegexToken("s", match1to2);
  addRegexToken("ss", match1to2, match2);
  addParseToken(["s", "ss"], SECOND);
  var getSetSecond = makeGetSet("Seconds", false);
  addFormatToken("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ["SSS", 3], 0, "millisecond");
  addFormatToken(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  addFormatToken(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  addUnitAlias("millisecond", "ms");
  addUnitPriority("millisecond", 16);
  addRegexToken("S", match1to3, match1);
  addRegexToken("SS", match1to3, match2);
  addRegexToken("SSS", match1to3, match3);
  var token, getSetMillisecond;
  for (token = "SSSS"; token.length <= 9; token += "S") {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(("0." + input) * 1e3);
  }
  for (token = "S"; token.length <= 9; token += "S") {
    addParseToken(token, parseMs);
  }
  getSetMillisecond = makeGetSet("Milliseconds", false);
  addFormatToken("z", 0, 0, "zoneAbbr");
  addFormatToken("zz", 0, 0, "zoneName");
  function getZoneAbbr() {
    return this._isUTC ? "UTC" : "";
  }
  function getZoneName() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var proto = Moment.prototype;
  proto.add = add;
  proto.calendar = calendar$1;
  proto.clone = clone;
  proto.diff = diff;
  proto.endOf = endOf;
  proto.format = format$1;
  proto.from = from;
  proto.fromNow = fromNow;
  proto.to = to;
  proto.toNow = toNow;
  proto.get = stringGet;
  proto.invalidAt = invalidAt;
  proto.isAfter = isAfter;
  proto.isBefore = isBefore;
  proto.isBetween = isBetween;
  proto.isSame = isSame;
  proto.isSameOrAfter = isSameOrAfter;
  proto.isSameOrBefore = isSameOrBefore;
  proto.isValid = isValid$2;
  proto.lang = lang;
  proto.locale = locale;
  proto.localeData = localeData;
  proto.max = prototypeMax;
  proto.min = prototypeMin;
  proto.parsingFlags = parsingFlags;
  proto.set = stringSet;
  proto.startOf = startOf;
  proto.subtract = subtract;
  proto.toArray = toArray;
  proto.toObject = toObject;
  proto.toDate = toDate;
  proto.toISOString = toISOString;
  proto.inspect = inspect;
  if (typeof Symbol !== "undefined" && Symbol.for != null) {
    proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
      return "Moment<" + this.format() + ">";
    };
  }
  proto.toJSON = toJSON;
  proto.toString = toString$1;
  proto.unix = unix;
  proto.valueOf = valueOf;
  proto.creationData = creationData;
  proto.eraName = getEraName;
  proto.eraNarrow = getEraNarrow;
  proto.eraAbbr = getEraAbbr;
  proto.eraYear = getEraYear;
  proto.year = getSetYear;
  proto.isLeapYear = getIsLeapYear;
  proto.weekYear = getSetWeekYear;
  proto.isoWeekYear = getSetISOWeekYear;
  proto.quarter = proto.quarters = getSetQuarter;
  proto.month = getSetMonth;
  proto.daysInMonth = getDaysInMonth;
  proto.week = proto.weeks = getSetWeek;
  proto.isoWeek = proto.isoWeeks = getSetISOWeek;
  proto.weeksInYear = getWeeksInYear;
  proto.weeksInWeekYear = getWeeksInWeekYear;
  proto.isoWeeksInYear = getISOWeeksInYear;
  proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
  proto.date = getSetDayOfMonth;
  proto.day = proto.days = getSetDayOfWeek;
  proto.weekday = getSetLocaleDayOfWeek;
  proto.isoWeekday = getSetISODayOfWeek;
  proto.dayOfYear = getSetDayOfYear;
  proto.hour = proto.hours = getSetHour;
  proto.minute = proto.minutes = getSetMinute;
  proto.second = proto.seconds = getSetSecond;
  proto.millisecond = proto.milliseconds = getSetMillisecond;
  proto.utcOffset = getSetOffset;
  proto.utc = setOffsetToUTC;
  proto.local = setOffsetToLocal;
  proto.parseZone = setOffsetToParsedOffset;
  proto.hasAlignedHourOffset = hasAlignedHourOffset;
  proto.isDST = isDaylightSavingTime;
  proto.isLocal = isLocal;
  proto.isUtcOffset = isUtcOffset;
  proto.isUtc = isUtc;
  proto.isUTC = isUtc;
  proto.zoneAbbr = getZoneAbbr;
  proto.zoneName = getZoneName;
  proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
  proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
  proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
  proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
  proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
  function createUnix(input) {
    return createLocal(input * 1e3);
  }
  function createInZone() {
    return createLocal.apply(null, arguments).parseZone();
  }
  function preParsePostFormat(string) {
    return string;
  }
  var proto$1 = Locale.prototype;
  proto$1.calendar = calendar;
  proto$1.longDateFormat = longDateFormat;
  proto$1.invalidDate = invalidDate;
  proto$1.ordinal = ordinal;
  proto$1.preparse = preParsePostFormat;
  proto$1.postformat = preParsePostFormat;
  proto$1.relativeTime = relativeTime;
  proto$1.pastFuture = pastFuture;
  proto$1.set = set;
  proto$1.eras = localeEras;
  proto$1.erasParse = localeErasParse;
  proto$1.erasConvertYear = localeErasConvertYear;
  proto$1.erasAbbrRegex = erasAbbrRegex;
  proto$1.erasNameRegex = erasNameRegex;
  proto$1.erasNarrowRegex = erasNarrowRegex;
  proto$1.months = localeMonths;
  proto$1.monthsShort = localeMonthsShort;
  proto$1.monthsParse = localeMonthsParse;
  proto$1.monthsRegex = monthsRegex;
  proto$1.monthsShortRegex = monthsShortRegex;
  proto$1.week = localeWeek;
  proto$1.firstDayOfYear = localeFirstDayOfYear;
  proto$1.firstDayOfWeek = localeFirstDayOfWeek;
  proto$1.weekdays = localeWeekdays;
  proto$1.weekdaysMin = localeWeekdaysMin;
  proto$1.weekdaysShort = localeWeekdaysShort;
  proto$1.weekdaysParse = localeWeekdaysParse;
  proto$1.weekdaysRegex = weekdaysRegex;
  proto$1.weekdaysShortRegex = weekdaysShortRegex;
  proto$1.weekdaysMinRegex = weekdaysMinRegex;
  proto$1.isPM = localeIsPM;
  proto$1.meridiem = localeMeridiem;
  function get$1$1(format2, index, field, setter) {
    var locale2 = getLocale(), utc = createUTC().set(setter, index);
    return locale2[field](utc, format2);
  }
  function listMonthsImpl(format2, index, field) {
    if (isNumber$2(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
    if (index != null) {
      return get$1$1(format2, index, field, "month");
    }
    var i2, out = [];
    for (i2 = 0; i2 < 12; i2++) {
      out[i2] = get$1$1(format2, i2, field, "month");
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format2, index, field) {
    if (typeof localeSorted === "boolean") {
      if (isNumber$2(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    } else {
      format2 = localeSorted;
      index = format2;
      localeSorted = false;
      if (isNumber$2(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
    }
    var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i2, out = [];
    if (index != null) {
      return get$1$1(format2, (index + shift) % 7, field, "day");
    }
    for (i2 = 0; i2 < 7; i2++) {
      out[i2] = get$1$1(format2, (i2 + shift) % 7, field, "day");
    }
    return out;
  }
  function listMonths(format2, index) {
    return listMonthsImpl(format2, index, "months");
  }
  function listMonthsShort(format2, index) {
    return listMonthsImpl(format2, index, "monthsShort");
  }
  function listWeekdays(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
  }
  function listWeekdaysShort(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
  }
  function listWeekdaysMin(localeSorted, format2, index) {
    return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
  }
  getSetGlobalLocale("en", {
    eras: [
      {
        since: "0001-01-01",
        until: Infinity,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -Infinity,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
      return number + output;
    }
  });
  hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
  hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
  var mathAbs = Math.abs;
  function abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function addSubtract$1(duration, input, value, direction) {
    var other = createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function add$1(input, value) {
    return addSubtract$1(this, input, value, 1);
  }
  function subtract$1(input, value) {
    return addSubtract$1(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
    if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
      milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
      days2 = 0;
      months2 = 0;
    }
    data.milliseconds = milliseconds2 % 1e3;
    seconds2 = absFloor(milliseconds2 / 1e3);
    data.seconds = seconds2 % 60;
    minutes2 = absFloor(seconds2 / 60);
    data.minutes = minutes2 % 60;
    hours2 = absFloor(minutes2 / 60);
    data.hours = hours2 % 24;
    days2 += absFloor(hours2 / 24);
    monthsFromDays = absFloor(daysToMonths(days2));
    months2 += monthsFromDays;
    days2 -= absCeil(monthsToDays(monthsFromDays));
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    data.days = days2;
    data.months = months2;
    data.years = years2;
    return this;
  }
  function daysToMonths(days2) {
    return days2 * 4800 / 146097;
  }
  function monthsToDays(months2) {
    return months2 * 146097 / 4800;
  }
  function as(units) {
    if (!this.isValid()) {
      return NaN;
    }
    var days2, months2, milliseconds2 = this._milliseconds;
    units = normalizeUnits(units);
    if (units === "month" || units === "quarter" || units === "year") {
      days2 = this._days + milliseconds2 / 864e5;
      months2 = this._months + daysToMonths(days2);
      switch (units) {
        case "month":
          return months2;
        case "quarter":
          return months2 / 3;
        case "year":
          return months2 / 12;
      }
    } else {
      days2 = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case "week":
          return days2 / 7 + milliseconds2 / 6048e5;
        case "day":
          return days2 + milliseconds2 / 864e5;
        case "hour":
          return days2 * 24 + milliseconds2 / 36e5;
        case "minute":
          return days2 * 1440 + milliseconds2 / 6e4;
        case "second":
          return days2 * 86400 + milliseconds2 / 1e3;
        case "millisecond":
          return Math.floor(days2 * 864e5) + milliseconds2;
        default:
          throw new Error("Unknown unit " + units);
      }
    }
  }
  function valueOf$1() {
    if (!this.isValid()) {
      return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
  function clone$1() {
    return createDuration(this);
  }
  function get$2(units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + "s"]() : NaN;
  }
  function makeGetter(name) {
    return function() {
      return this.isValid() ? this._data[name] : NaN;
    };
  }
  var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round, thresholds = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
    return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
    var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
    if (thresholds2.w != null) {
      a = a || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
    }
    a = a || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale2;
    return substituteTimeAgo.apply(null, a);
  }
  function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === void 0) {
      return round;
    }
    if (typeof roundingFunction === "function") {
      round = roundingFunction;
      return true;
    }
    return false;
  }
  function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === void 0) {
      return false;
    }
    if (limit === void 0) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === "s") {
      thresholds.ss = limit - 1;
    }
    return true;
  }
  function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var withSuffix = false, th2 = thresholds, locale2, output;
    if (typeof argWithSuffix === "object") {
      argThresholds = argWithSuffix;
      argWithSuffix = false;
    }
    if (typeof argWithSuffix === "boolean") {
      withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === "object") {
      th2 = Object.assign({}, thresholds, argThresholds);
      if (argThresholds.s != null && argThresholds.ss == null) {
        th2.ss = argThresholds.s - 1;
      }
    }
    locale2 = this.localeData();
    output = relativeTime$1(this, !withSuffix, th2, locale2);
    if (withSuffix) {
      output = locale2.pastFuture(+this, output);
    }
    return locale2.postformat(output);
  }
  var abs$1 = Math.abs;
  function sign(x2) {
    return (x2 > 0) - (x2 < 0) || +x2;
  }
  function toISOString$1() {
    if (!this.isValid()) {
      return this.localeData().invalidDate();
    }
    var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
    if (!total) {
      return "P0D";
    }
    minutes2 = absFloor(seconds2 / 60);
    hours2 = absFloor(minutes2 / 60);
    seconds2 %= 60;
    minutes2 %= 60;
    years2 = absFloor(months2 / 12);
    months2 %= 12;
    s = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
    totalSign = total < 0 ? "-" : "";
    ymSign = sign(this._months) !== sign(total) ? "-" : "";
    daysSign = sign(this._days) !== sign(total) ? "-" : "";
    hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
    return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s + "S" : "");
  }
  var proto$2 = Duration.prototype;
  proto$2.isValid = isValid$1;
  proto$2.abs = abs;
  proto$2.add = add$1;
  proto$2.subtract = subtract$1;
  proto$2.as = as;
  proto$2.asMilliseconds = asMilliseconds;
  proto$2.asSeconds = asSeconds;
  proto$2.asMinutes = asMinutes;
  proto$2.asHours = asHours;
  proto$2.asDays = asDays;
  proto$2.asWeeks = asWeeks;
  proto$2.asMonths = asMonths;
  proto$2.asQuarters = asQuarters;
  proto$2.asYears = asYears;
  proto$2.valueOf = valueOf$1;
  proto$2._bubble = bubble;
  proto$2.clone = clone$1;
  proto$2.get = get$2;
  proto$2.milliseconds = milliseconds;
  proto$2.seconds = seconds;
  proto$2.minutes = minutes;
  proto$2.hours = hours;
  proto$2.days = days;
  proto$2.weeks = weeks;
  proto$2.months = months;
  proto$2.years = years;
  proto$2.humanize = humanize;
  proto$2.toISOString = toISOString$1;
  proto$2.toString = toISOString$1;
  proto$2.toJSON = toISOString$1;
  proto$2.locale = locale;
  proto$2.localeData = localeData;
  proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
  proto$2.lang = lang;
  addFormatToken("X", 0, 0, "unix");
  addFormatToken("x", 0, 0, "valueOf");
  addRegexToken("x", matchSigned);
  addRegexToken("X", matchTimestamp);
  addParseToken("X", function(input, array, config) {
    config._d = new Date(parseFloat(input) * 1e3);
  });
  addParseToken("x", function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  //! moment.js
  hooks.version = "2.29.1";
  setHookCallback(createLocal);
  hooks.fn = proto;
  hooks.min = min;
  hooks.max = max;
  hooks.now = now;
  hooks.utc = createUTC;
  hooks.unix = createUnix;
  hooks.months = listMonths;
  hooks.isDate = isDate;
  hooks.locale = getSetGlobalLocale;
  hooks.invalid = createInvalid;
  hooks.duration = createDuration;
  hooks.isMoment = isMoment;
  hooks.weekdays = listWeekdays;
  hooks.parseZone = createInZone;
  hooks.localeData = getLocale;
  hooks.isDuration = isDuration;
  hooks.monthsShort = listMonthsShort;
  hooks.weekdaysMin = listWeekdaysMin;
  hooks.defineLocale = defineLocale;
  hooks.updateLocale = updateLocale;
  hooks.locales = listLocales;
  hooks.weekdaysShort = listWeekdaysShort;
  hooks.normalizeUnits = normalizeUnits;
  hooks.relativeTimeRounding = getSetRelativeTimeRounding;
  hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
  hooks.calendarFormat = getCalendarFormat;
  hooks.prototype = proto;
  hooks.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };
  var moment = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": hooks
  });
  var require$$2 = /* @__PURE__ */ getAugmentedNamespace(moment);
  var __viteBrowserExternal = {};
  var __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    "default": __viteBrowserExternal
  });
  var require$$4 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  Object.defineProperty(stringTemplate$1, "__esModule", {
    value: true
  });
  stringTemplate$1.parseDateFromEntry = parseDateFromEntry;
  stringTemplate$1.keyToPathArray = keyToPathArray;
  stringTemplate$1.expandPath = expandPath;
  stringTemplate$1.compileStringTemplate = compileStringTemplate;
  stringTemplate$1.extractTemplateVars = extractTemplateVars;
  stringTemplate$1.addFileTemplateFields = addFileTemplateFields;
  stringTemplate$1.SLUG_MISSING_REQUIRED_DATE = stringTemplate$1.dateParsers = void 0;
  var _trimEnd2 = _interopRequireDefault$1(trimEnd_1);
  var _get2 = _interopRequireDefault$1(get_1);
  var _moment = _interopRequireDefault$1(require$$2);
  var _immutable = immutable.exports;
  var _path = require$$4;
  function _interopRequireDefault$1(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  const filters = [{
    pattern: /^upper$/,
    transform: (str) => str.toUpperCase()
  }, {
    pattern: /^lower$/,
    transform: (str) => str.toLowerCase()
  }, {
    pattern: /^date\('(.+)'\)$/,
    transform: (str, match) => (0, _moment.default)(str).format(match[1])
  }];
  const FIELD_PREFIX = "fields.";
  const templateContentPattern = "([^}{|]+)";
  const filterPattern = "( \\| ([^}{]+))?";
  const templateVariablePattern = `{{${templateContentPattern}${filterPattern}}}`;
  function formatDate(date) {
    return `0${date}`.slice(-2);
  }
  const dateParsers = {
    year: (date) => `${date.getUTCFullYear()}`,
    month: (date) => formatDate(date.getUTCMonth() + 1),
    day: (date) => formatDate(date.getUTCDate()),
    hour: (date) => formatDate(date.getUTCHours()),
    minute: (date) => formatDate(date.getUTCMinutes()),
    second: (date) => formatDate(date.getUTCSeconds())
  };
  stringTemplate$1.dateParsers = dateParsers;
  function parseDateFromEntry(entry, dateFieldName) {
    if (!dateFieldName) {
      return;
    }
    const dateValue = entry.getIn(["data", dateFieldName]);
    const dateMoment = dateValue && (0, _moment.default)(dateValue);
    if (dateMoment && dateMoment.isValid()) {
      return dateMoment.toDate();
    }
  }
  const SLUG_MISSING_REQUIRED_DATE = "SLUG_MISSING_REQUIRED_DATE";
  stringTemplate$1.SLUG_MISSING_REQUIRED_DATE = SLUG_MISSING_REQUIRED_DATE;
  function keyToPathArray(key) {
    if (!key) {
      return [];
    }
    const parts = [];
    const separator = "";
    const chars = key.split(separator);
    let currentChar;
    let currentStr = [];
    while (currentChar = chars.shift()) {
      if (["[", "]", "."].includes(currentChar)) {
        if (currentStr.length > 0) {
          parts.push(currentStr.join(separator));
        }
        currentStr = [];
      } else {
        currentStr.push(currentChar);
      }
    }
    if (currentStr.length > 0) {
      parts.push(currentStr.join(separator));
    }
    return parts;
  }
  function expandPath({
    data,
    path,
    paths = []
  }) {
    if (path.endsWith(".*")) {
      path = path + ".";
    }
    const sep = ".*.";
    const parts = path.split(sep);
    if (parts.length === 1) {
      paths.push(path);
    } else {
      const partialPath = parts[0];
      const value = (0, _get2.default)(data, partialPath);
      if (Array.isArray(value)) {
        value.forEach((_, index) => {
          expandPath({
            data,
            path: (0, _trimEnd2.default)(`${partialPath}.${index}.${parts.slice(1).join(sep)}`, "."),
            paths
          });
        });
      }
    }
    return paths;
  }
  function getExplicitFieldReplacement(key, data) {
    if (!key.startsWith(FIELD_PREFIX)) {
      return;
    }
    const fieldName = key.substring(FIELD_PREFIX.length);
    const value = data.getIn(keyToPathArray(fieldName));
    if (typeof value === "object" && value !== null) {
      return JSON.stringify(value);
    }
    return value;
  }
  function getFilterFunction(filterStr) {
    if (filterStr) {
      let match = null;
      const filter = filters.find((filter2) => {
        match = filterStr.match(filter2.pattern);
        return !!match;
      });
      if (filter) {
        return (str) => filter.transform(str, match);
      }
    }
    return null;
  }
  function compileStringTemplate(template, date, identifier = "", data = (0, _immutable.Map)(), processor) {
    let missingRequiredDate;
    const useDate = date !== null;
    const compiledString = template.replace(RegExp(templateVariablePattern, "g"), (_full, key, _part, filter) => {
      let replacement;
      const explicitFieldReplacement = getExplicitFieldReplacement(key, data);
      if (explicitFieldReplacement) {
        replacement = explicitFieldReplacement;
      } else if (dateParsers[key] && !date) {
        missingRequiredDate = true;
        return "";
      } else if (dateParsers[key]) {
        replacement = dateParsers[key](date);
      } else if (key === "slug") {
        replacement = identifier;
      } else {
        replacement = data.getIn(keyToPathArray(key), "");
      }
      if (processor) {
        return processor(replacement);
      } else {
        const filterFunction = getFilterFunction(filter);
        if (filterFunction) {
          replacement = filterFunction(replacement);
        }
      }
      return replacement;
    });
    if (useDate && missingRequiredDate) {
      const err = new Error();
      err.name = SLUG_MISSING_REQUIRED_DATE;
      throw err;
    } else {
      return compiledString;
    }
  }
  function extractTemplateVars(template) {
    const regexp = RegExp(templateVariablePattern, "g");
    const contentRegexp = RegExp(templateContentPattern, "g");
    const matches = template.match(regexp) || [];
    return matches.map((elem) => {
      const match = elem.match(contentRegexp);
      return match ? match[0] : "";
    });
  }
  function addFileTemplateFields(entryPath, fields, folder = "") {
    if (!entryPath) {
      return fields;
    }
    const extension = (0, _path.extname)(entryPath);
    const filename = (0, _path.basename)(entryPath, extension);
    const dirnameExcludingFolder = (0, _path.dirname)(entryPath).replace(new RegExp(`^(/?)${folder}/?`), "$1");
    fields = fields.withMutations((map2) => {
      map2.set("dirname", dirnameExcludingFolder);
      map2.set("filename", filename);
      map2.set("extension", extension === "" ? extension : extension.substr(1));
    });
    return fields;
  }
  var validations$1 = {};
  var baseGetTag = _baseGetTag, isObjectLike$1 = isObjectLike_1;
  var numberTag = "[object Number]";
  function isNumber$1(value) {
    return typeof value == "number" || isObjectLike$1(value) && baseGetTag(value) == numberTag;
  }
  var isNumber_1 = isNumber$1;
  Object.defineProperty(validations$1, "__esModule", {
    value: true
  });
  validations$1.validateMinMax = validateMinMax;
  var _isNumber2 = _interopRequireDefault(isNumber_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function validateMinMax(t2, fieldLabel, value, min2, max2) {
    function minMaxError(messageKey) {
      return {
        type: "RANGE",
        message: t2(`editor.editorControlPane.widget.${messageKey}`, {
          fieldLabel,
          minCount: min2,
          maxCount: max2,
          count: min2
        })
      };
    }
    if ([min2, max2, value === null || value === void 0 ? void 0 : value.size].every(_isNumber2.default) && (value.size < min2 || value.size > max2)) {
      return minMaxError(min2 === max2 ? "rangeCountExact" : "rangeCount");
    } else if ((0, _isNumber2.default)(min2) && min2 > 0 && value !== null && value !== void 0 && value.size && value.size < min2) {
      return minMaxError("rangeMin");
    } else if ((0, _isNumber2.default)(max2) && value !== null && value !== void 0 && value.size && value.size > max2) {
      return minMaxError("rangeMax");
    }
  }
  Object.defineProperty(esm, "__esModule", {
    value: true
  });
  var validations_1 = esm.validations = esm.stringTemplate = esm.NetlifyCmsLibWidgets = void 0;
  var stringTemplate = _interopRequireWildcard(stringTemplate$1);
  esm.stringTemplate = stringTemplate;
  var validations = _interopRequireWildcard(validations$1);
  validations_1 = esm.validations = validations;
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  const NetlifyCmsLibWidgets = {
    stringTemplate,
    validations
  };
  esm.NetlifyCmsLibWidgets = NetlifyCmsLibWidgets;
  function isArray(value) {
    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
  }
  const INFINITY = 1 / 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    let result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isNumber(value) {
    return typeof value === "number";
  }
  function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
  }
  function isObject(value) {
    return typeof value === "object";
  }
  function isObjectLike(value) {
    return isObject(value) && value !== null;
  }
  function isDefined(value) {
    return value !== void 0 && value !== null;
  }
  function isBlank(value) {
    return !value.trim().length;
  }
  function getTag(value) {
    return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
  }
  const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
  const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
  const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key) => `Invalid value for key ${key}`;
  const PATTERN_LENGTH_TOO_LARGE = (max2) => `Pattern length exceeds max of ${max2}.`;
  const MISSING_KEY_PROPERTY = (name) => `Missing ${name} property in key`;
  const INVALID_KEY_WEIGHT_VALUE = (key) => `Property 'weight' in key '${key}' must be a positive integer`;
  const hasOwn = Object.prototype.hasOwnProperty;
  class KeyStore {
    constructor(keys2) {
      this._keys = [];
      this._keyMap = {};
      let totalWeight = 0;
      keys2.forEach((key) => {
        let obj = createKey(key);
        totalWeight += obj.weight;
        this._keys.push(obj);
        this._keyMap[obj.id] = obj;
        totalWeight += obj.weight;
      });
      this._keys.forEach((key) => {
        key.weight /= totalWeight;
      });
    }
    get(keyId) {
      return this._keyMap[keyId];
    }
    keys() {
      return this._keys;
    }
    toJSON() {
      return JSON.stringify(this._keys);
    }
  }
  function createKey(key) {
    let path = null;
    let id2 = null;
    let src = null;
    let weight = 1;
    if (isString(key) || isArray(key)) {
      src = key;
      path = createKeyPath(key);
      id2 = createKeyId(key);
    } else {
      if (!hasOwn.call(key, "name")) {
        throw new Error(MISSING_KEY_PROPERTY("name"));
      }
      const name = key.name;
      src = name;
      if (hasOwn.call(key, "weight")) {
        weight = key.weight;
        if (weight <= 0) {
          throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
        }
      }
      path = createKeyPath(name);
      id2 = createKeyId(name);
    }
    return { path, id: id2, weight, src };
  }
  function createKeyPath(key) {
    return isArray(key) ? key : key.split(".");
  }
  function createKeyId(key) {
    return isArray(key) ? key.join(".") : key;
  }
  function get(obj, path) {
    let list = [];
    let arr = false;
    const deepGet = (obj2, path2, index) => {
      if (!isDefined(obj2)) {
        return;
      }
      if (!path2[index]) {
        list.push(obj2);
      } else {
        let key = path2[index];
        const value = obj2[key];
        if (!isDefined(value)) {
          return;
        }
        if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
          list.push(toString(value));
        } else if (isArray(value)) {
          arr = true;
          for (let i2 = 0, len = value.length; i2 < len; i2 += 1) {
            deepGet(value[i2], path2, index + 1);
          }
        } else if (path2.length) {
          deepGet(value, path2, index + 1);
        }
      }
    };
    deepGet(obj, isString(path) ? path.split(".") : path, 0);
    return arr ? list : list[0];
  }
  const MatchOptions = {
    includeMatches: false,
    findAllMatches: false,
    minMatchCharLength: 1
  };
  const BasicOptions = {
    isCaseSensitive: false,
    includeScore: false,
    keys: [],
    shouldSort: true,
    sortFn: (a, b) => a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
  };
  const FuzzyOptions = {
    location: 0,
    threshold: 0.6,
    distance: 100
  };
  const AdvancedOptions = {
    useExtendedSearch: false,
    getFn: get,
    ignoreLocation: false,
    ignoreFieldNorm: false
  };
  var Config = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
  const SPACE = /[^ ]+/g;
  function norm(mantissa = 3) {
    const cache = new Map();
    const m = Math.pow(10, mantissa);
    return {
      get(value) {
        const numTokens = value.match(SPACE).length;
        if (cache.has(numTokens)) {
          return cache.get(numTokens);
        }
        const norm2 = 1 / Math.sqrt(numTokens);
        const n2 = parseFloat(Math.round(norm2 * m) / m);
        cache.set(numTokens, n2);
        return n2;
      },
      clear() {
        cache.clear();
      }
    };
  }
  class FuseIndex {
    constructor({ getFn = Config.getFn } = {}) {
      this.norm = norm(3);
      this.getFn = getFn;
      this.isCreated = false;
      this.setIndexRecords();
    }
    setSources(docs = []) {
      this.docs = docs;
    }
    setIndexRecords(records = []) {
      this.records = records;
    }
    setKeys(keys2 = []) {
      this.keys = keys2;
      this._keysMap = {};
      keys2.forEach((key, idx) => {
        this._keysMap[key.id] = idx;
      });
    }
    create() {
      if (this.isCreated || !this.docs.length) {
        return;
      }
      this.isCreated = true;
      if (isString(this.docs[0])) {
        this.docs.forEach((doc, docIndex) => {
          this._addString(doc, docIndex);
        });
      } else {
        this.docs.forEach((doc, docIndex) => {
          this._addObject(doc, docIndex);
        });
      }
      this.norm.clear();
    }
    add(doc) {
      const idx = this.size();
      if (isString(doc)) {
        this._addString(doc, idx);
      } else {
        this._addObject(doc, idx);
      }
    }
    removeAt(idx) {
      this.records.splice(idx, 1);
      for (let i2 = idx, len = this.size(); i2 < len; i2 += 1) {
        this.records[i2].i -= 1;
      }
    }
    getValueForItemAtKeyId(item, keyId) {
      return item[this._keysMap[keyId]];
    }
    size() {
      return this.records.length;
    }
    _addString(doc, docIndex) {
      if (!isDefined(doc) || isBlank(doc)) {
        return;
      }
      let record = {
        v: doc,
        i: docIndex,
        n: this.norm.get(doc)
      };
      this.records.push(record);
    }
    _addObject(doc, docIndex) {
      let record = { i: docIndex, $: {} };
      this.keys.forEach((key, keyIndex) => {
        let value = this.getFn(doc, key.path);
        if (!isDefined(value)) {
          return;
        }
        if (isArray(value)) {
          let subRecords = [];
          const stack = [{ nestedArrIndex: -1, value }];
          while (stack.length) {
            const { nestedArrIndex, value: value2 } = stack.pop();
            if (!isDefined(value2)) {
              continue;
            }
            if (isString(value2) && !isBlank(value2)) {
              let subRecord = {
                v: value2,
                i: nestedArrIndex,
                n: this.norm.get(value2)
              };
              subRecords.push(subRecord);
            } else if (isArray(value2)) {
              value2.forEach((item, k) => {
                stack.push({
                  nestedArrIndex: k,
                  value: item
                });
              });
            }
          }
          record.$[keyIndex] = subRecords;
        } else if (!isBlank(value)) {
          let subRecord = {
            v: value,
            n: this.norm.get(value)
          };
          record.$[keyIndex] = subRecord;
        }
      });
      this.records.push(record);
    }
    toJSON() {
      return {
        keys: this.keys,
        records: this.records
      };
    }
  }
  function createIndex(keys2, docs, { getFn = Config.getFn } = {}) {
    const myIndex = new FuseIndex({ getFn });
    myIndex.setKeys(keys2.map(createKey));
    myIndex.setSources(docs);
    myIndex.create();
    return myIndex;
  }
  function parseIndex(data, { getFn = Config.getFn } = {}) {
    const { keys: keys2, records } = data;
    const myIndex = new FuseIndex({ getFn });
    myIndex.setKeys(keys2);
    myIndex.setIndexRecords(records);
    return myIndex;
  }
  function computeScore(pattern, {
    errors = 0,
    currentLocation = 0,
    expectedLocation = 0,
    distance = Config.distance,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    const accuracy = errors / pattern.length;
    if (ignoreLocation) {
      return accuracy;
    }
    const proximity = Math.abs(expectedLocation - currentLocation);
    if (!distance) {
      return proximity ? 1 : accuracy;
    }
    return accuracy + proximity / distance;
  }
  function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
    let indices = [];
    let start = -1;
    let end = -1;
    let i2 = 0;
    for (let len = matchmask.length; i2 < len; i2 += 1) {
      let match = matchmask[i2];
      if (match && start === -1) {
        start = i2;
      } else if (!match && start !== -1) {
        end = i2 - 1;
        if (end - start + 1 >= minMatchCharLength) {
          indices.push([start, end]);
        }
        start = -1;
      }
    }
    if (matchmask[i2 - 1] && i2 - start >= minMatchCharLength) {
      indices.push([start, i2 - 1]);
    }
    return indices;
  }
  const MAX_BITS = 32;
  function search(text2, pattern, patternAlphabet, {
    location = Config.location,
    distance = Config.distance,
    threshold = Config.threshold,
    findAllMatches = Config.findAllMatches,
    minMatchCharLength = Config.minMatchCharLength,
    includeMatches = Config.includeMatches,
    ignoreLocation = Config.ignoreLocation
  } = {}) {
    if (pattern.length > MAX_BITS) {
      throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
    }
    const patternLen = pattern.length;
    const textLen = text2.length;
    const expectedLocation = Math.max(0, Math.min(location, textLen));
    let currentThreshold = threshold;
    let bestLocation = expectedLocation;
    const computeMatches = minMatchCharLength > 1 || includeMatches;
    const matchMask = computeMatches ? Array(textLen) : [];
    let index;
    while ((index = text2.indexOf(pattern, bestLocation)) > -1) {
      let score = computeScore(pattern, {
        currentLocation: index,
        expectedLocation,
        distance,
        ignoreLocation
      });
      currentThreshold = Math.min(score, currentThreshold);
      bestLocation = index + patternLen;
      if (computeMatches) {
        let i2 = 0;
        while (i2 < patternLen) {
          matchMask[index + i2] = 1;
          i2 += 1;
        }
      }
    }
    bestLocation = -1;
    let lastBitArr = [];
    let finalScore = 1;
    let binMax = patternLen + textLen;
    const mask = 1 << patternLen - 1;
    for (let i2 = 0; i2 < patternLen; i2 += 1) {
      let binMin = 0;
      let binMid = binMax;
      while (binMin < binMid) {
        const score2 = computeScore(pattern, {
          errors: i2,
          currentLocation: expectedLocation + binMid,
          expectedLocation,
          distance,
          ignoreLocation
        });
        if (score2 <= currentThreshold) {
          binMin = binMid;
        } else {
          binMax = binMid;
        }
        binMid = Math.floor((binMax - binMin) / 2 + binMin);
      }
      binMax = binMid;
      let start = Math.max(1, expectedLocation - binMid + 1);
      let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
      let bitArr = Array(finish + 2);
      bitArr[finish + 1] = (1 << i2) - 1;
      for (let j2 = finish; j2 >= start; j2 -= 1) {
        let currentLocation = j2 - 1;
        let charMatch = patternAlphabet[text2.charAt(currentLocation)];
        if (computeMatches) {
          matchMask[currentLocation] = +!!charMatch;
        }
        bitArr[j2] = (bitArr[j2 + 1] << 1 | 1) & charMatch;
        if (i2) {
          bitArr[j2] |= (lastBitArr[j2 + 1] | lastBitArr[j2]) << 1 | 1 | lastBitArr[j2 + 1];
        }
        if (bitArr[j2] & mask) {
          finalScore = computeScore(pattern, {
            errors: i2,
            currentLocation,
            expectedLocation,
            distance,
            ignoreLocation
          });
          if (finalScore <= currentThreshold) {
            currentThreshold = finalScore;
            bestLocation = currentLocation;
            if (bestLocation <= expectedLocation) {
              break;
            }
            start = Math.max(1, 2 * expectedLocation - bestLocation);
          }
        }
      }
      const score = computeScore(pattern, {
        errors: i2 + 1,
        currentLocation: expectedLocation,
        expectedLocation,
        distance,
        ignoreLocation
      });
      if (score > currentThreshold) {
        break;
      }
      lastBitArr = bitArr;
    }
    const result = {
      isMatch: bestLocation >= 0,
      score: Math.max(1e-3, finalScore)
    };
    if (computeMatches) {
      const indices = convertMaskToIndices(matchMask, minMatchCharLength);
      if (!indices.length) {
        result.isMatch = false;
      } else if (includeMatches) {
        result.indices = indices;
      }
    }
    return result;
  }
  function createPatternAlphabet(pattern) {
    let mask = {};
    for (let i2 = 0, len = pattern.length; i2 < len; i2 += 1) {
      const char = pattern.charAt(i2);
      mask[char] = (mask[char] || 0) | 1 << len - i2 - 1;
    }
    return mask;
  }
  class BitapSearch {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      this.options = {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.chunks = [];
      if (!this.pattern.length) {
        return;
      }
      const addChunk = (pattern2, startIndex) => {
        this.chunks.push({
          pattern: pattern2,
          alphabet: createPatternAlphabet(pattern2),
          startIndex
        });
      };
      const len = this.pattern.length;
      if (len > MAX_BITS) {
        let i2 = 0;
        const remainder = len % MAX_BITS;
        const end = len - remainder;
        while (i2 < end) {
          addChunk(this.pattern.substr(i2, MAX_BITS), i2);
          i2 += MAX_BITS;
        }
        if (remainder) {
          const startIndex = len - MAX_BITS;
          addChunk(this.pattern.substr(startIndex), startIndex);
        }
      } else {
        addChunk(this.pattern, 0);
      }
    }
    searchIn(text2) {
      const { isCaseSensitive, includeMatches } = this.options;
      if (!isCaseSensitive) {
        text2 = text2.toLowerCase();
      }
      if (this.pattern === text2) {
        let result2 = {
          isMatch: true,
          score: 0
        };
        if (includeMatches) {
          result2.indices = [[0, text2.length - 1]];
        }
        return result2;
      }
      const {
        location,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        ignoreLocation
      } = this.options;
      let allIndices = [];
      let totalScore = 0;
      let hasMatches = false;
      this.chunks.forEach(({ pattern, alphabet, startIndex }) => {
        const { isMatch, score, indices } = search(text2, pattern, alphabet, {
          location: location + startIndex,
          distance,
          threshold,
          findAllMatches,
          minMatchCharLength,
          includeMatches,
          ignoreLocation
        });
        if (isMatch) {
          hasMatches = true;
        }
        totalScore += score;
        if (isMatch && indices) {
          allIndices = [...allIndices, ...indices];
        }
      });
      let result = {
        isMatch: hasMatches,
        score: hasMatches ? totalScore / this.chunks.length : 1
      };
      if (hasMatches && includeMatches) {
        result.indices = allIndices;
      }
      return result;
    }
  }
  class BaseMatch {
    constructor(pattern) {
      this.pattern = pattern;
    }
    static isMultiMatch(pattern) {
      return getMatch(pattern, this.multiRegex);
    }
    static isSingleMatch(pattern) {
      return getMatch(pattern, this.singleRegex);
    }
    search() {
    }
  }
  function getMatch(pattern, exp) {
    const matches = pattern.match(exp);
    return matches ? matches[1] : null;
  }
  class ExactMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "exact";
    }
    static get multiRegex() {
      return /^="(.*)"$/;
    }
    static get singleRegex() {
      return /^=(.*)$/;
    }
    search(text2) {
      const isMatch = text2 === this.pattern;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  }
  class InverseExactMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"$/;
    }
    static get singleRegex() {
      return /^!(.*)$/;
    }
    search(text2) {
      const index = text2.indexOf(this.pattern);
      const isMatch = index === -1;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text2.length - 1]
      };
    }
  }
  class PrefixExactMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "prefix-exact";
    }
    static get multiRegex() {
      return /^\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^\^(.*)$/;
    }
    search(text2) {
      const isMatch = text2.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, this.pattern.length - 1]
      };
    }
  }
  class InversePrefixExactMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-prefix-exact";
    }
    static get multiRegex() {
      return /^!\^"(.*)"$/;
    }
    static get singleRegex() {
      return /^!\^(.*)$/;
    }
    search(text2) {
      const isMatch = !text2.startsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text2.length - 1]
      };
    }
  }
  class SuffixExactMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "suffix-exact";
    }
    static get multiRegex() {
      return /^"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^(.*)\$$/;
    }
    search(text2) {
      const isMatch = text2.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [text2.length - this.pattern.length, text2.length - 1]
      };
    }
  }
  class InverseSuffixExactMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "inverse-suffix-exact";
    }
    static get multiRegex() {
      return /^!"(.*)"\$$/;
    }
    static get singleRegex() {
      return /^!(.*)\$$/;
    }
    search(text2) {
      const isMatch = !text2.endsWith(this.pattern);
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices: [0, text2.length - 1]
      };
    }
  }
  class FuzzyMatch extends BaseMatch {
    constructor(pattern, {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive,
      ignoreLocation = Config.ignoreLocation
    } = {}) {
      super(pattern);
      this._bitapSearch = new BitapSearch(pattern, {
        location,
        threshold,
        distance,
        includeMatches,
        findAllMatches,
        minMatchCharLength,
        isCaseSensitive,
        ignoreLocation
      });
    }
    static get type() {
      return "fuzzy";
    }
    static get multiRegex() {
      return /^"(.*)"$/;
    }
    static get singleRegex() {
      return /^(.*)$/;
    }
    search(text2) {
      return this._bitapSearch.searchIn(text2);
    }
  }
  class IncludeMatch extends BaseMatch {
    constructor(pattern) {
      super(pattern);
    }
    static get type() {
      return "include";
    }
    static get multiRegex() {
      return /^'"(.*)"$/;
    }
    static get singleRegex() {
      return /^'(.*)$/;
    }
    search(text2) {
      let location = 0;
      let index;
      const indices = [];
      const patternLen = this.pattern.length;
      while ((index = text2.indexOf(this.pattern, location)) > -1) {
        location = index + patternLen;
        indices.push([index, location - 1]);
      }
      const isMatch = !!indices.length;
      return {
        isMatch,
        score: isMatch ? 0 : 1,
        indices
      };
    }
  }
  const searchers = [
    ExactMatch,
    IncludeMatch,
    PrefixExactMatch,
    InversePrefixExactMatch,
    InverseSuffixExactMatch,
    SuffixExactMatch,
    InverseExactMatch,
    FuzzyMatch
  ];
  const searchersLen = searchers.length;
  const SPACE_RE = / +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;
  const OR_TOKEN = "|";
  function parseQuery(pattern, options = {}) {
    return pattern.split(OR_TOKEN).map((item) => {
      let query = item.trim().split(SPACE_RE).filter((item2) => item2 && !!item2.trim());
      let results = [];
      for (let i2 = 0, len = query.length; i2 < len; i2 += 1) {
        const queryItem = query[i2];
        let found = false;
        let idx = -1;
        while (!found && ++idx < searchersLen) {
          const searcher = searchers[idx];
          let token2 = searcher.isMultiMatch(queryItem);
          if (token2) {
            results.push(new searcher(token2, options));
            found = true;
          }
        }
        if (found) {
          continue;
        }
        idx = -1;
        while (++idx < searchersLen) {
          const searcher = searchers[idx];
          let token2 = searcher.isSingleMatch(queryItem);
          if (token2) {
            results.push(new searcher(token2, options));
            break;
          }
        }
      }
      return results;
    });
  }
  const MultiMatchSet = new Set([FuzzyMatch.type, IncludeMatch.type]);
  class ExtendedSearch {
    constructor(pattern, {
      isCaseSensitive = Config.isCaseSensitive,
      includeMatches = Config.includeMatches,
      minMatchCharLength = Config.minMatchCharLength,
      ignoreLocation = Config.ignoreLocation,
      findAllMatches = Config.findAllMatches,
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance
    } = {}) {
      this.query = null;
      this.options = {
        isCaseSensitive,
        includeMatches,
        minMatchCharLength,
        findAllMatches,
        ignoreLocation,
        location,
        threshold,
        distance
      };
      this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
      this.query = parseQuery(this.pattern, this.options);
    }
    static condition(_, options) {
      return options.useExtendedSearch;
    }
    searchIn(text2) {
      const query = this.query;
      if (!query) {
        return {
          isMatch: false,
          score: 1
        };
      }
      const { includeMatches, isCaseSensitive } = this.options;
      text2 = isCaseSensitive ? text2 : text2.toLowerCase();
      let numMatches = 0;
      let allIndices = [];
      let totalScore = 0;
      for (let i2 = 0, qLen = query.length; i2 < qLen; i2 += 1) {
        const searchers2 = query[i2];
        allIndices.length = 0;
        numMatches = 0;
        for (let j2 = 0, pLen = searchers2.length; j2 < pLen; j2 += 1) {
          const searcher = searchers2[j2];
          const { isMatch, indices, score } = searcher.search(text2);
          if (isMatch) {
            numMatches += 1;
            totalScore += score;
            if (includeMatches) {
              const type = searcher.constructor.type;
              if (MultiMatchSet.has(type)) {
                allIndices = [...allIndices, ...indices];
              } else {
                allIndices.push(indices);
              }
            }
          } else {
            totalScore = 0;
            numMatches = 0;
            allIndices.length = 0;
            break;
          }
        }
        if (numMatches) {
          let result = {
            isMatch: true,
            score: totalScore / numMatches
          };
          if (includeMatches) {
            result.indices = allIndices;
          }
          return result;
        }
      }
      return {
        isMatch: false,
        score: 1
      };
    }
  }
  const registeredSearchers = [];
  function register(...args) {
    registeredSearchers.push(...args);
  }
  function createSearcher(pattern, options) {
    for (let i2 = 0, len = registeredSearchers.length; i2 < len; i2 += 1) {
      let searcherClass = registeredSearchers[i2];
      if (searcherClass.condition(pattern, options)) {
        return new searcherClass(pattern, options);
      }
    }
    return new BitapSearch(pattern, options);
  }
  const LogicalOperator = {
    AND: "$and",
    OR: "$or"
  };
  const KeyType = {
    PATH: "$path",
    PATTERN: "$val"
  };
  const isExpression = (query) => !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
  const isPath = (query) => !!query[KeyType.PATH];
  const isLeaf = (query) => !isArray(query) && isObject(query) && !isExpression(query);
  const convertToExplicit = (query) => ({
    [LogicalOperator.AND]: Object.keys(query).map((key) => ({
      [key]: query[key]
    }))
  });
  function parse(query, options, { auto = true } = {}) {
    const next = (query2) => {
      let keys2 = Object.keys(query2);
      const isQueryPath = isPath(query2);
      if (!isQueryPath && keys2.length > 1 && !isExpression(query2)) {
        return next(convertToExplicit(query2));
      }
      if (isLeaf(query2)) {
        const key = isQueryPath ? query2[KeyType.PATH] : keys2[0];
        const pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
        if (!isString(pattern)) {
          throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
        }
        const obj = {
          keyId: createKeyId(key),
          pattern
        };
        if (auto) {
          obj.searcher = createSearcher(pattern, options);
        }
        return obj;
      }
      let node = {
        children: [],
        operator: keys2[0]
      };
      keys2.forEach((key) => {
        const value = query2[key];
        if (isArray(value)) {
          value.forEach((item) => {
            node.children.push(next(item));
          });
        }
      });
      return node;
    };
    if (!isExpression(query)) {
      query = convertToExplicit(query);
    }
    return next(query);
  }
  function computeScore$1(results, { ignoreFieldNorm = Config.ignoreFieldNorm }) {
    results.forEach((result) => {
      let totalScore = 1;
      result.matches.forEach(({ key, norm: norm2, score }) => {
        const weight = key ? key.weight : null;
        totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
      });
      result.score = totalScore;
    });
  }
  function transformMatches(result, data) {
    const matches = result.matches;
    data.matches = [];
    if (!isDefined(matches)) {
      return;
    }
    matches.forEach((match) => {
      if (!isDefined(match.indices) || !match.indices.length) {
        return;
      }
      const { indices, value } = match;
      let obj = {
        indices,
        value
      };
      if (match.key) {
        obj.key = match.key.src;
      }
      if (match.idx > -1) {
        obj.refIndex = match.idx;
      }
      data.matches.push(obj);
    });
  }
  function transformScore(result, data) {
    data.score = result.score;
  }
  function format(results, docs, {
    includeMatches = Config.includeMatches,
    includeScore = Config.includeScore
  } = {}) {
    const transformers = [];
    if (includeMatches)
      transformers.push(transformMatches);
    if (includeScore)
      transformers.push(transformScore);
    return results.map((result) => {
      const { idx } = result;
      const data = {
        item: docs[idx],
        refIndex: idx
      };
      if (transformers.length) {
        transformers.forEach((transformer) => {
          transformer(result, data);
        });
      }
      return data;
    });
  }
  class Fuse {
    constructor(docs, options = {}, index) {
      this.options = __spreadValues(__spreadValues({}, Config), options);
      if (this.options.useExtendedSearch && false) {
        throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
      }
      this._keyStore = new KeyStore(this.options.keys);
      this.setCollection(docs, index);
    }
    setCollection(docs, index) {
      this._docs = docs;
      if (index && !(index instanceof FuseIndex)) {
        throw new Error(INCORRECT_INDEX_TYPE);
      }
      this._myIndex = index || createIndex(this.options.keys, this._docs, {
        getFn: this.options.getFn
      });
    }
    add(doc) {
      if (!isDefined(doc)) {
        return;
      }
      this._docs.push(doc);
      this._myIndex.add(doc);
    }
    remove(predicate = () => false) {
      const results = [];
      for (let i2 = 0, len = this._docs.length; i2 < len; i2 += 1) {
        const doc = this._docs[i2];
        if (predicate(doc, i2)) {
          this.removeAt(i2);
          i2 -= 1;
          len -= 1;
          results.push(doc);
        }
      }
      return results;
    }
    removeAt(idx) {
      this._docs.splice(idx, 1);
      this._myIndex.removeAt(idx);
    }
    getIndex() {
      return this._myIndex;
    }
    search(query, { limit = -1 } = {}) {
      const {
        includeMatches,
        includeScore,
        shouldSort,
        sortFn,
        ignoreFieldNorm
      } = this.options;
      let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
      computeScore$1(results, { ignoreFieldNorm });
      if (shouldSort) {
        results.sort(sortFn);
      }
      if (isNumber(limit) && limit > -1) {
        results = results.slice(0, limit);
      }
      return format(results, this._docs, {
        includeMatches,
        includeScore
      });
    }
    _searchStringList(query) {
      const searcher = createSearcher(query, this.options);
      const { records } = this._myIndex;
      const results = [];
      records.forEach(({ v: text2, i: idx, n: norm2 }) => {
        if (!isDefined(text2)) {
          return;
        }
        const { isMatch, score, indices } = searcher.searchIn(text2);
        if (isMatch) {
          results.push({
            item: text2,
            idx,
            matches: [{ score, value: text2, norm: norm2, indices }]
          });
        }
      });
      return results;
    }
    _searchLogical(query) {
      const expression = parse(query, this.options);
      const evaluate = (node, item, idx) => {
        if (!node.children) {
          const { keyId, searcher } = node;
          const matches = this._findMatches({
            key: this._keyStore.get(keyId),
            value: this._myIndex.getValueForItemAtKeyId(item, keyId),
            searcher
          });
          if (matches && matches.length) {
            return [
              {
                idx,
                item,
                matches
              }
            ];
          }
          return [];
        }
        switch (node.operator) {
          case LogicalOperator.AND: {
            const res = [];
            for (let i2 = 0, len = node.children.length; i2 < len; i2 += 1) {
              const child = node.children[i2];
              const result = evaluate(child, item, idx);
              if (result.length) {
                res.push(...result);
              } else {
                return [];
              }
            }
            return res;
          }
          case LogicalOperator.OR: {
            const res = [];
            for (let i2 = 0, len = node.children.length; i2 < len; i2 += 1) {
              const child = node.children[i2];
              const result = evaluate(child, item, idx);
              if (result.length) {
                res.push(...result);
                break;
              }
            }
            return res;
          }
        }
      };
      const records = this._myIndex.records;
      const resultMap = {};
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (isDefined(item)) {
          let expResults = evaluate(expression, item, idx);
          if (expResults.length) {
            if (!resultMap[idx]) {
              resultMap[idx] = { idx, item, matches: [] };
              results.push(resultMap[idx]);
            }
            expResults.forEach(({ matches }) => {
              resultMap[idx].matches.push(...matches);
            });
          }
        }
      });
      return results;
    }
    _searchObjectList(query) {
      const searcher = createSearcher(query, this.options);
      const { keys: keys2, records } = this._myIndex;
      const results = [];
      records.forEach(({ $: item, i: idx }) => {
        if (!isDefined(item)) {
          return;
        }
        let matches = [];
        keys2.forEach((key, keyIndex) => {
          matches.push(...this._findMatches({
            key,
            value: item[keyIndex],
            searcher
          }));
        });
        if (matches.length) {
          results.push({
            idx,
            item,
            matches
          });
        }
      });
      return results;
    }
    _findMatches({ key, value, searcher }) {
      if (!isDefined(value)) {
        return [];
      }
      let matches = [];
      if (isArray(value)) {
        value.forEach(({ v: text2, i: idx, n: norm2 }) => {
          if (!isDefined(text2)) {
            return;
          }
          const { isMatch, score, indices } = searcher.searchIn(text2);
          if (isMatch) {
            matches.push({
              score,
              key,
              value: text2,
              idx,
              norm: norm2,
              indices
            });
          }
        });
      } else {
        const { v: text2, n: norm2 } = value;
        const { isMatch, score, indices } = searcher.searchIn(text2);
        if (isMatch) {
          matches.push({ score, key, value: text2, norm: norm2, indices });
        }
      }
      return matches;
    }
  }
  Fuse.version = "6.4.6";
  Fuse.createIndex = createIndex;
  Fuse.parseIndex = parseIndex;
  Fuse.config = Config;
  {
    Fuse.parseQuery = parse;
  }
  {
    register(ExtendedSearch);
  }
  function dlv(t2, e, l2, n2, r2) {
    for (e = e.split ? e.split(".") : e, n2 = 0; n2 < e.length; n2++)
      t2 = t2 ? t2[e[n2]] : r2;
    return t2 === r2 ? l2 : t2;
  }
  const groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 10px 5px"
  };
  const groupBadgeStyles = {
    backgroundColor: "#EBECF0",
    borderRadius: "2em",
    color: "#172B4D",
    display: "inline-block",
    fontSize: 12,
    fontWeight: "normal",
    lineHeight: "1",
    minWidth: 1,
    padding: "0.16666666666667em 0.5em",
    textAlign: "center"
  };
  const formatGroupLabel = (data) => /* @__PURE__ */ React.createElement("div", {
    style: groupStyles
  }, /* @__PURE__ */ React.createElement("span", null, data.label), /* @__PURE__ */ React.createElement("span", {
    style: groupBadgeStyles
  }, data.options.length));
  function getOptionsFromInitialValue({ value, options, isMultiple }) {
    if (!options)
      return;
    function $hasValue(item) {
      return item.value === this;
    }
    if (isMultiple) {
      let arrayValues = value;
      if (!value || !Array.isArray(value)) {
        arrayValues = value.toArray() || [];
      }
      const selectedValues = arrayValues.map(({ value: value2 }) => {
        const result = options.find($hasValue, value2);
        if (result) {
          return result;
        }
        let nestedResults = [];
        options.some(({ options: nestedOptions }) => {
          if (!nestedOptions)
            return false;
          const nestedResult = nestedOptions.find($hasValue, value2);
          if (nestedResult) {
            nestedResults.push(nestedResult);
            return true;
          }
        });
        return nestedResults;
      });
      if (selectedValues) {
        return selectedValues;
      }
    } else {
      let selectedValue = options.find($hasValue, value);
      if (selectedValue)
        return selectedValue;
      options.some(({ options: nestedOptions }, item) => {
        if (!nestedOptions)
          return;
        const result = nestedOptions.find($hasValue, value);
        if (result) {
          selectedValue = result;
          return true;
        }
      });
      if (selectedValue)
        return selectedValue;
    }
  }
  function optionToString(option) {
    return option && option.value ? option.value : "";
  }
  const fieldDefaults = {
    value_field: "value",
    label_field: "label",
    multiple: false,
    required: true,
    refetch_url: true,
    fuzzy_search: true,
    grouped_options: {
      flatten_singles: true
    },
    fetch_options: {
      headers: {},
      method: "GET",
      body: void 0
    }
  };
  class Control extends React.Component {
    constructor(props) {
      super(props);
      this.fuse = null;
      this.count = 0;
      this.state = {
        allOptions: null,
        selectedOptions: null,
        initialOptionsLoaded: false
      };
      this.loadOptions = debounce_1(this.loadOptions.bind(this), 100, { leading: true, trailing: true, maxWait: 300 });
      this.fetchUrl = this.fetchUrl.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.fuzzySearch = this.fuzzySearch.bind(this);
      this.getCMSValues = this.getCMSValues.bind(this);
      this.processRawData = this.processRawData.bind(this);
      this.getOptions = this.getOptions.bind(this);
    }
    handleChange(selectedOptions) {
      const { onChange, field } = this.props;
      const isMultiple = field.get("multiple", fieldDefaults.multiple);
      const isEmpty = isMultiple ? !selectedOptions.length : !selectedOptions;
      if (field.get("required") && isEmpty && isMultiple) {
        onChange([]);
      } else if (isEmpty) {
        onChange(null);
      } else if (isMultiple) {
        const options = selectedOptions.map(optionToString);
        onChange(options);
      } else {
        onChange(optionToString(selectedOptions));
      }
      this.setState({
        selectedOptions
      });
    }
    isValid() {
      const { field, value, t: t2 } = this.props;
      const min2 = field.get("min");
      const max2 = field.get("max");
      if (!field.get("multiple")) {
        return { error: false };
      }
      const error = validations_1.validateMinMax(t2, field.get("label", field.get("name")), value, min2, max2);
      return error ? { error } : { error: false };
    }
    getCMSValues() {
      const { field } = this.props;
      const valueField = field.get("value_field", fieldDefaults.value_field);
      const displayField = field.get("display_field", fieldDefaults.display_field);
      const dataPath = field.get("data_path");
      const isGroupedOptions = !!field.get("grouped_options");
      const groupedValueField = field.getIn(["grouped_options", "value_field"], fieldDefaults.value_field);
      const groupedDisplayField = field.getIn(["grouped_options", "display_field"], fieldDefaults.display_field);
      const groupedDataPath = field.getIn(["grouped_options", "data_path"]);
      const groupedFlattenSingles = field.getIn(["grouped_options", "flatten_singles"], fieldDefaults.grouped_options.flatten_singles);
      const url = field.get("url");
      const method = field.getIn(["fetch_options", "method"], fieldDefaults.fetch_options.method);
      const headers = field.hasIn(["fetch_options", "headers"]) ? field.getIn(["fetch_options", "headers"]).toObject() : fieldDefaults.fetch_options.headers;
      const body = field.getIn(["fetch_options", "body"], fieldDefaults.fetch_options.body);
      const paramsFunction = field.getIn(["fetch_options", "params_function"]);
      const refetchUrl = field.get("refetch_url", fieldDefaults.refetch_url);
      const fuzzySearch = field.get("fuzzy_search", fieldDefaults.fuzzy_search);
      return {
        body,
        dataPath,
        displayField,
        fuzzySearch,
        groupedDataPath,
        groupedDisplayField,
        groupedFlattenSingles,
        groupedValueField,
        headers,
        isGroupedOptions,
        method,
        paramsFunction,
        refetchUrl,
        url,
        valueField
      };
    }
    fuzzySearch(term, data) {
      const processResults = (results2) => results2.length > 0 ? results2.map(({ item }) => item) : [];
      const {
        isGroupedOptions
      } = this.getCMSValues();
      if (this.fuse) {
        const results2 = this.fuse.search(term);
        return processResults(results2);
      }
      let searchKeys = [
        {
          name: "label",
          weight: 0.5
        }
      ];
      if (isGroupedOptions) {
        searchKeys.push({ name: "options.label", weight: 0.6 });
      }
      let fuseOptions = {
        keys: searchKeys
      };
      this.fuse = new Fuse(data, fuseOptions);
      const results = this.fuse.search(term);
      return processResults(results);
    }
    async fetchUrl({ term }) {
      const {
        url,
        refetchUrl,
        method,
        headers,
        body,
        paramsFunction
      } = this.getCMSValues();
      let fetchParams = {};
      if (paramsFunction && typeof paramsFunction === "function") {
        const paramsFunctionObject = paramsFunction({
          term,
          url,
          method,
          headers,
          refetchUrl
        });
        if (paramsFunctionObject && typeof paramsFunctionObject === "object" && paramsFunctionObject.url) {
          fetchParams = paramsFunctionObject;
        } else {
          console.error("'params_function' does not return a valid object. Please check your config file.\nReceived object: " + JSON.stringify(paramsFunctionObject) + "\nFunction: " + paramsFunction);
        }
      } else {
        fetchParams = {
          url,
          options: {
            method,
            headers,
            body
          }
        };
      }
      try {
        const res = await fetch(fetchParams.url, fetchParams.options);
        const data = await res.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    }
    processRawData(rawData) {
      const {
        dataPath,
        valueField,
        displayField,
        isGroupedOptions,
        groupedValueField,
        groupedDisplayField,
        groupedDataPath,
        groupedFlattenSingles
      } = this.getCMSValues();
      const flatLabel = (parentLabel, childLabel) => `${parentLabel}: ${childLabel}`;
      const structure = {
        groupedSingle: (parent, option = []) => ({
          "label": flatLabel(dlv(parent, displayField), dlv(option, groupedDisplayField)),
          "value": dlv(option, groupedValueField),
          "__dataGroup": option
        }),
        groupedMulti: (parent, options) => ({
          "label": dlv(parent, displayField),
          "options": options.map((itm) => ({
            "label": dlv(itm, groupedDisplayField),
            "value": dlv(itm, groupedValueField),
            "__dataGroup": itm
          }))
        }),
        single: (option) => ({
          "label": dlv(option, displayField),
          "value": dlv(option, valueField),
          "__data": option
        })
      };
      const rawOptions = dataPath ? dlv(rawData, dataPath) : rawData;
      if (rawOptions) {
        const processedOptions = rawOptions.map((item) => {
          const group = isGroupedOptions && dlv(item, groupedDataPath);
          if (group && group.length) {
            if (groupedFlattenSingles && group.length === 1) {
              return structure.groupedSingle(item, group[0]);
            } else {
              return structure.groupedMulti(item, group);
            }
          }
          return structure.single(item);
        });
        return processedOptions;
      }
    }
    async getOptions(term) {
      const { refetchUrl, fuzzySearch } = this.getCMSValues();
      if (!this.state.allOptions || refetchUrl) {
        const rawData = await this.fetchUrl({ term });
        await this.setState({
          allOptions: this.processRawData(rawData)
        });
      }
      if (this.props.value && !this.initialOptionsLoaded && !this.selectedOptions) {
        const { field, value } = this.props;
        const enrichedValues = getOptionsFromInitialValue({
          options: this.state.allOptions,
          isMultiple: field.get("multiple", fieldDefaults.multiple),
          value
        });
        if (enrichedValues) {
          this.setState({
            selectedOptions: enrichedValues,
            initialOptionsLoaded: true
          });
        }
      }
      if (term && fuzzySearch) {
        const searchResults = this.fuzzySearch(term, this.state.allOptions);
        return searchResults;
      } else {
        return this.state.allOptions;
      }
    }
    loadOptions(term, callback) {
      this.getOptions(term).then((options) => callback(options));
    }
    render() {
      const {
        field,
        forID,
        classNameWrapper,
        setActiveStyle,
        setInactiveStyle
      } = this.props;
      const isMultiple = field.get("multiple", fieldDefaults.multiple);
      const isClearable = !field.get("required", fieldDefaults.required) || isMultiple;
      const isSearchable = !(!field.get("fuzzy_search", fieldDefaults.fuzzy_search) && !field.get("refetch_url", fieldDefaults.refetch_url));
      return /* @__PURE__ */ React.createElement(Async, {
        defaultOptions: true,
        className: classNameWrapper,
        inputId: forID,
        isClearable,
        isMulti: isMultiple,
        formatGroupLabel,
        loadOptions: this.loadOptions,
        onChange: this.handleChange,
        isSearchable,
        onBlur: setInactiveStyle,
        onFocus: setActiveStyle,
        placeholder: "",
        value: this.state.selectedOptions,
        styles: reactSelectStyles_1
      });
    }
  }
  Control.propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string.isRequired,
    value: PropTypes.node,
    field: ImmutablePropTypes_1.map,
    fetchID: PropTypes.string,
    query: PropTypes.func.isRequired,
    queryHits: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    classNameWrapper: PropTypes.string.isRequired,
    setActiveStyle: PropTypes.func.isRequired,
    setInactiveStyle: PropTypes.func.isRequired,
    hasActiveStyle: PropTypes.func,
    t: PropTypes.func
  };
  function ListPreview({ values }) {
    return /* @__PURE__ */ React.createElement("ul", null, values.map((value, idx) => /* @__PURE__ */ React.createElement("li", {
      key: idx
    }, value)));
  }
  ListPreview.propTypes = {
    values: PropTypes.oneOfType([PropTypes.string, ImmutablePropTypes_1.list])
  };
  function SelectPreview({ value }) {
    return /* @__PURE__ */ React.createElement("div", null, value && (immutable.exports.List.isList(value) ? /* @__PURE__ */ React.createElement(ListPreview, {
      values: value
    }) : value), !value && null);
  }
  SelectPreview.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, ImmutablePropTypes_1.list])
  };
  var schema = {
    properties: {
      url: { type: "string" },
      multiple: { type: "boolean" },
      min: { type: "integer" },
      max: { type: "integer" },
      display_field: { type: "string" },
      value_field: { type: "string" },
      data_path: { type: "string" },
      refetch_url: { type: "boolean" },
      fuzzy_search: { type: "boolean" },
      fetch_options: {
        type: "object",
        properties: {
          method: { type: "string" },
          body: { type: "string" },
          headers: {
            type: "object"
          }
        }
      },
      grouped_options: {
        type: "object",
        properties: {
          display_field: { type: "string" },
          value_field: { type: "string" },
          data_path: { type: "string" },
          flatten_singles: { type: "boolean" }
        }
      }
    },
    required: ["url"]
  };
  const Widget = {
    name: "select-async",
    controlComponent: Control,
    previewComponent: SelectPreview,
    schema
  };
  exports2.Widget = Widget;
  exports2.controlComponent = Control;
  exports2.previewComponent = SelectPreview;
  exports2.schema = schema;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2[Symbol.toStringTag] = "Module";
});

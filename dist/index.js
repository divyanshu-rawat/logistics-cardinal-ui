'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var SelectPlus = _interopDefault(require('react-select-plus'));
var moment = _interopDefault(require('moment-timezone'));
var reactBootstrap = require('react-bootstrap');

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

var inherits = function(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    );
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
};

var objectWithoutProperties = function(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }

  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
};

var taggedTemplateLiteral = function(strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw),
      },
    }),
  );
};

var toConsumableArray = function(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _templateObject = taggedTemplateLiteral(
  [
    '\n  background-color: ',
    ';\n  font-family: ',
    ';\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: ',
    ';\n  width: 100%;\n  height: 100vh;\n',
  ],
  [
    '\n  background-color: ',
    ';\n  font-family: ',
    ';\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: ',
    ';\n  width: 100%;\n  height: 100vh;\n',
  ],
);

var Global = styled__default.main(
  _templateObject,
  function(props) {
    return props.theme.colors.bodyBackground;
  },
  function(props) {
    return props.theme.fontFamily.default;
  },
  function(props) {
    return props.theme.colors.white;
  },
);

var _templateObject$1 = taggedTemplateLiteral(
  [
    '\n  display: inline-block;\n  margin-right: 5px;\n  width: 100%;\n  position: relative;\n  z-index: ',
    ';\n  .Select {\n    width: ',
    ';\n    &-control {\n      background-color: ',
    ';\n      border: 1px solid\n        ',
    ';\n      display: flex;\n      min-height: 40px;\n      align-items: center;\n      height: auto;\n    }\n    &-multi {\n      &-value-wrapper {\n        flex: 1;\n      }\n    }\n    &-placeholder {\n      position: relative;\n    }\n    &-value {\n      margin: 5px 0 5px 5px;\n    }\n    &.is-focused,\n    &.is-open {\n      .Select-control {\n        background-color: ',
    ';\n        border: 1px solid\n          ',
    ';\n        box-shadow: none;\n      }\n    }\n    &-input {\n      position: absolute;\n      top: 0;\n      opacity: 1;\n      z-index: -1;\n    }\n    &-menu-outer {\n      box-shadow: 0;\n      background-color: ',
    ';\n      border: 1px solid ',
    ';\n      .Select-menu .Select-option {\n        background-color: ',
    ';\n        color: ',
    ';\n        &.is-selected {\n          background-color: ',
    ';\n          border-bottom: 1px solid ',
    ';\n        }\n        &.is-focused {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &:hover {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &.is-selected:hover {\n          background-color: ',
    ';\n          border-bottom: 1px solid ',
    ';\n        }\n        &.is-disabled {\n          color: ',
    ';\n          &:hover {\n            background-color: ',
    ';\n            color: ',
    ';\n          }\n        }\n      }\n    }\n    &--single {\n      > .Select-control .Select-value {\n        position: relative;\n        margin: 0;\n      }\n    }\n    &--multi {\n      .Select-value {\n        display: inline-flex;\n        background-color: ',
    ';\n        color: ',
    ';\n        flex-flow: row-reverse;\n        align-items: center;\n        &-label {\n          flex: 1;\n        }\n      }\n    }\n    &.has-value {\n      &.Select--single {\n        > .Select-control .Select-value .Select-value-label {\n          color: #b2b8c0;\n        }\n      }\n    }\n  }\n',
  ],
  [
    '\n  display: inline-block;\n  margin-right: 5px;\n  width: 100%;\n  position: relative;\n  z-index: ',
    ';\n  .Select {\n    width: ',
    ';\n    &-control {\n      background-color: ',
    ';\n      border: 1px solid\n        ',
    ';\n      display: flex;\n      min-height: 40px;\n      align-items: center;\n      height: auto;\n    }\n    &-multi {\n      &-value-wrapper {\n        flex: 1;\n      }\n    }\n    &-placeholder {\n      position: relative;\n    }\n    &-value {\n      margin: 5px 0 5px 5px;\n    }\n    &.is-focused,\n    &.is-open {\n      .Select-control {\n        background-color: ',
    ';\n        border: 1px solid\n          ',
    ';\n        box-shadow: none;\n      }\n    }\n    &-input {\n      position: absolute;\n      top: 0;\n      opacity: 1;\n      z-index: -1;\n    }\n    &-menu-outer {\n      box-shadow: 0;\n      background-color: ',
    ';\n      border: 1px solid ',
    ';\n      .Select-menu .Select-option {\n        background-color: ',
    ';\n        color: ',
    ';\n        &.is-selected {\n          background-color: ',
    ';\n          border-bottom: 1px solid ',
    ';\n        }\n        &.is-focused {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &:hover {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &.is-selected:hover {\n          background-color: ',
    ';\n          border-bottom: 1px solid ',
    ';\n        }\n        &.is-disabled {\n          color: ',
    ';\n          &:hover {\n            background-color: ',
    ';\n            color: ',
    ';\n          }\n        }\n      }\n    }\n    &--single {\n      > .Select-control .Select-value {\n        position: relative;\n        margin: 0;\n      }\n    }\n    &--multi {\n      .Select-value {\n        display: inline-flex;\n        background-color: ',
    ';\n        color: ',
    ';\n        flex-flow: row-reverse;\n        align-items: center;\n        &-label {\n          flex: 1;\n        }\n      }\n    }\n    &.has-value {\n      &.Select--single {\n        > .Select-control .Select-value .Select-value-label {\n          color: #b2b8c0;\n        }\n      }\n    }\n  }\n',
  ],
);

var sizes = {
  small: '100px',
  regular: '300px',
  block: '100%',
};

var validationStateColor = {
  error: 'danger',
  success: 'success',
  warning: 'warning',
};

var Select = styled__default('div')(
  _templateObject$1,
  function(_ref) {
    var theme = _ref.theme;
    return theme.zIndex.select;
  },
  function(props) {
    return sizes[props.size];
  },
  function(_ref2) {
    var theme = _ref2.theme;
    return theme.colors.grey400;
  },
  function(_ref3) {
    var validationState = _ref3.validationState,
      theme = _ref3.theme;
    return validationState
      ? theme.colors[validationStateColor[validationState]]
      : theme.colors.grey500;
  },
  function(_ref4) {
    var theme = _ref4.theme;
    return theme.colors.grey400;
  },
  function(_ref5) {
    var validationState = _ref5.validationState,
      theme = _ref5.theme;
    return validationState
      ? theme.colors[validationStateColor[validationState]]
      : theme.colors.grey500;
  },
  function(_ref6) {
    var theme = _ref6.theme;
    return theme.colors.grey400;
  },
  function(_ref7) {
    var theme = _ref7.theme;
    return theme.colors.grey500;
  },
  function(_ref8) {
    var theme = _ref8.theme;
    return theme.colors.grey400;
  },
  function(_ref9) {
    var theme = _ref9.theme;
    return theme.colors.white;
  },
  function(_ref10) {
    var theme = _ref10.theme;
    return theme.colors.grey400;
  },
  function(_ref11) {
    var theme = _ref11.theme;
    return theme.colors.grey500;
  },
  function(_ref12) {
    var theme = _ref12.theme;
    return theme.colors.grey400;
  },
  function(_ref13) {
    var theme = _ref13.theme;
    return theme.colors.grey300;
  },
  function(_ref14) {
    var theme = _ref14.theme;
    return theme.colors.grey300;
  },
  function(_ref15) {
    var theme = _ref15.theme;
    return theme.colors.grey500;
  },
  function(_ref16) {
    var theme = _ref16.theme;
    return theme.colors.grey100;
  },
  function(_ref17) {
    var theme = _ref17.theme;
    return theme.colors.grey400;
  },
  function(_ref18) {
    var theme = _ref18.theme;
    return theme.colors.grey100;
  },
  function(_ref19) {
    var theme = _ref19.theme;
    return theme.colors.primary100;
  },
  function(_ref20) {
    var theme = _ref20.theme;
    return theme.colors.white;
  },
);

var SingleSelect = (function(_PureComponent) {
  inherits(SingleSelect, _PureComponent);

  function SingleSelect() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, SingleSelect);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref =
          SingleSelect.__proto__ ||
          Object.getPrototypeOf(SingleSelect)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.state = {
        selectedValue: _this.props.initialValue,
      }),
      (_this.onChangeTime = function(option) {
        var name = _this.props.name;

        _this.setState({ selectedValue: option }, function() {
          return _this.props.onChange({ name: name, option: option });
        });
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(SingleSelect, [
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          _props$size = _props.size,
          size = _props$size === undefined ? 'block' : _props$size,
          options = _props.options,
          name = _props.name,
          placeholder = _props.placeholder,
          _props$isSearchable = _props.isSearchable,
          isSearchable =
            _props$isSearchable === undefined ? false : _props$isSearchable,
          isFirst = _props.isFirst,
          validationState = _props.validationState;
        var selectedValue = this.state.selectedValue;

        return React__default.createElement(
          Select,
          { size: size, validationState: validationState, isFirst: isFirst },
          React__default.createElement(SelectPlus, {
            joinValues: true,
            clearable: false,
            searchable: isSearchable,
            name: name,
            value: selectedValue,
            placeholder: placeholder,
            options: options,
            onChange: this.onChangeTime,
          }),
        );
      },
    },
  ]);
  return SingleSelect;
})(React.PureComponent);

SingleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  validationState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
  isSearchable: PropTypes.bool,
  isFirst: PropTypes.bool,
  size: PropTypes.string,
  initialValue: PropTypes.string,
};

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);

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

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache();
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
    result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

var commonjsGlobal =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
        ? self
        : {};

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal =
  typeof commonjsGlobal == 'object' &&
  commonjsGlobal &&
  commonjsGlobal.Object === Object &&
  commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf =
  typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
    tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag$1 && symToStringTag$1 in Object(value)
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(
    (_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO) || '',
  );
  return uid ? 'Symbol(src)_1.' + uid : '';
})();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp(
  '^' +
    funcToString$1
      .call(hasOwnProperty$1)
      .replace(reRegExpChar, '\\$&')
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        '$1.*?',
      ) +
    '$',
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate
    ? data[key] !== undefined
    : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    hash: new _Hash(),
    map: new (_Map || _ListCache)(),
    string: new _Hash(),
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' ||
    type == 'number' ||
    type == 'symbol' ||
    type == 'boolean'
    ? value !== '__proto__'
    : value === null;
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
    size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = (this.__data__ = new _ListCache(entries));
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
    length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
    arrLength = array.length,
    othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
    result = true,
    seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
      othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (
        !_arraySome(other, function(othValue, othIndex) {
          if (
            !_cacheHas(seen, othIndex) &&
            (arrValue === othValue ||
              equalFunc(arrValue, othValue, bitmask, customizer, stack))
          ) {
            return seen.push(othIndex);
          }
        })
      ) {
        result = false;
        break;
      }
    } else if (
      !(
        arrValue === othValue ||
        equalFunc(arrValue, othValue, bitmask, customizer, stack)
      )
    ) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
    result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
    result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (
        object.byteLength != other.byteLength ||
        object.byteOffset != other.byteOffset
      ) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (
        object.byteLength != other.byteLength ||
        !equalFunc(new _Uint8Array(object), new _Uint8Array(other))
      ) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(
        convert(object),
        convert(other),
        bitmask,
        customizer,
        equalFunc,
        stack,
      );
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
    length = values.length,
    offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols
  ? stubArray_1
  : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return _arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
    result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(
  (function() {
    return arguments;
  })(),
)
  ? _baseIsArguments
  : function(value) {
      return (
        isObjectLike_1(value) &&
        hasOwnProperty$4.call(value, 'callee') &&
        !propertyIsEnumerable$1.call(value, 'callee')
      );
    };

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function(module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =
    'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule =
    freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return (
    !!length &&
    (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
    (value > -1 && value % 1 == 0 && value < length)
  );
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return (
    typeof value == 'number' &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER$1
  );
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[
  int8Tag
] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[
  uint8Tag
] = typedArrayTags[uint8ClampedTag] = typedArrayTags[
  uint16Tag
] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[
  arrayBufferTag$1
] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$1] = typedArrayTags[
  dateTag$1
] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[
  mapTag$1
] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag] = typedArrayTags[
  regexpTag$1
] = typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] = typedArrayTags[
  weakMapTag
] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (
    isObjectLike_1(value) &&
    isLength_1(value.length) &&
    !!typedArrayTags[_baseGetTag(value)]
  );
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function(module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =
    'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule =
    freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types =
        freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  })();

  module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray
  ? _baseUnary(nodeIsTypedArray)
  : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
    isArg = !isArr && isArguments_1(value),
    isBuff = !isArr && !isArg && isBuffer_1(value),
    isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
    skipIndexes = isArr || isArg || isBuff || isType,
    result = skipIndexes ? _baseTimes(value.length, String) : [],
    length = result.length;

  for (var key in value) {
    if (
      (inherited || hasOwnProperty$5.call(value, key)) &&
      !(
        skipIndexes &&
        // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == 'length' ||
          // Node.js 0.10 has enumerable non-index properties on buffers.
          (isBuff && (key == 'offset' || key == 'parent')) ||
          // PhantomJS 2 has enumerable non-index properties on typed arrays.
          (isType &&
            (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
          // Skip index properties.
          _isIndex(key, length))
      )
    ) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
    proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$10.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
    objProps = _getAllKeys(object),
    objLength = objProps.length,
    othProps = _getAllKeys(other),
    othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
      othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (
      !(compared === undefined
        ? objValue === othValue ||
          equalFunc(objValue, othValue, bitmask, customizer, stack)
        : compared)
    ) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
      othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (
      objCtor != othCtor &&
      ('constructor' in object && 'constructor' in other) &&
      !(
        typeof objCtor == 'function' &&
        objCtor instanceof objCtor &&
        typeof othCtor == 'function' &&
        othCtor instanceof othCtor
      )
    ) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]';
var objectTag$1 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (
  (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
  (_Map && getTag(new _Map()) != mapTag$2) ||
  (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
  (_Set && getTag(new _Set()) != setTag$2) ||
  (_WeakMap && getTag(new _WeakMap()) != weakMapTag$1)
) {
  getTag = function(value) {
    var result = _baseGetTag(value),
      Ctor = result == objectTag$1 ? value.constructor : undefined,
      ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$2;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$11.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
    othIsArr = isArray_1(other),
    objTag = objIsArr ? arrayTag$1 : _getTag(object),
    othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
    othIsObj = othTag == objectTag$2,
    isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || isTypedArray_1(object)
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(
          object,
          other,
          objTag,
          bitmask,
          customizer,
          equalFunc,
          stack,
        );
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
      othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
        othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack());
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (
    value == null ||
    other == null ||
    (!isObjectLike_1(value) && !isObjectLike_1(other))
  ) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(
    value,
    other,
    bitmask,
    customizer,
    baseIsEqual,
    stack,
  );
}

var _baseIsEqual = baseIsEqual;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

var MultipleSelect = (function(_Component) {
  inherits(MultipleSelect, _Component);

  function MultipleSelect() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MultipleSelect);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref =
          MultipleSelect.__proto__ ||
          Object.getPrototypeOf(MultipleSelect)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.state = {
        selectedValue: [],
      }),
      (_this.onChange = function(option) {
        _this.setState({ selectedValue: option }, function() {
          return _this.props.onChange({ option: option });
        });
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(MultipleSelect, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var initialValue = this.props.initialValue;

        if (initialValue.length) {
          this.onChange(initialValue);
        }
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(nextProps) {
        var initialValue = this.props.initialValue;

        if (!isEqual_1(nextProps.initialValue, initialValue)) {
          this.onChange(initialValue);
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _props = this.props,
          options = _props.options,
          name = _props.name,
          placeholder = _props.placeholder,
          validationState = _props.validationState;
        var selectedValue = this.state.selectedValue;

        return React__default.createElement(
          Select,
          { validationState: validationState },
          React__default.createElement(SelectPlus, {
            clearable: false,
            searchable: false,
            joinValues: true,
            name: name,
            multi: true,
            value: selectedValue,
            placeholder: placeholder,
            options: options,
            onChange: this.onChange,
          }),
        );
      },
    },
  ]);
  return MultipleSelect;
})(React.Component);

MultipleSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  validationState: PropTypes.oneOf([null, 'success', 'warning', 'error']),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  initialValue: PropTypes.array,
};
MultipleSelect.defaultProps = {
  initialValue: [],
};

var _templateObject$2 = taggedTemplateLiteral(
  [
    '\n  color: ',
    ';\n  font-family: ',
    ';\n  font-weight: ',
    ';\n  text-align: ',
    ';\n  text-transform: ',
    ';\n  margin: ',
    ';\n  font-size: ',
    ';\n  display: inline-block;\n\n  ',
    ';\n',
  ],
  [
    '\n  color: ',
    ';\n  font-family: ',
    ';\n  font-weight: ',
    ';\n  text-align: ',
    ';\n  text-transform: ',
    ';\n  margin: ',
    ';\n  font-size: ',
    ';\n  display: inline-block;\n\n  ',
    ';\n',
  ],
);

var TextStyled = styled__default.span(
  _templateObject$2,
  function(_ref) {
    var theme = _ref.theme,
      color = _ref.color;
    return color || theme.fontFamily.color;
  },
  function(_ref2) {
    var theme = _ref2.theme,
      fontFamily = _ref2.fontFamily;
    return fontFamily || theme.fontFamily.default;
  },
  function(_ref3) {
    var theme = _ref3.theme,
      weight = _ref3.weight;
    return weight || theme.fontWeight.regular;
  },
  function(_ref4) {
    var align = _ref4.align;
    return align || 'left';
  },
  function(_ref5) {
    var uppercase = _ref5.uppercase;
    return uppercase ? 'uppercase' : 'auto';
  },
  function(_ref6) {
    var margin = _ref6.margin,
      theme = _ref6.theme;
    return margin || theme.composedSpacings.byte;
  },
  function(_ref7) {
    var fontSize = _ref7.fontSize,
      theme = _ref7.theme;
    return theme.fontSize[fontSize] || theme.fontSize.byte;
  },
  function(_ref8) {
    var truncate = _ref8.truncate;

    if (truncate) {
      return '\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      ';
    }

    return '';
  },
);

var Text = function Text(_ref) {
  var children = _ref.children,
    props = objectWithoutProperties(_ref, ['children']);

  var RenderAsProp = TextStyled.withComponent(props.as);
  return React__default.createElement(RenderAsProp, props, children);
};

Text.propTypes = {
  children: PropTypes.any.isRequired,
  /** Final Element HTML to be rendered */
  as: PropTypes.string.isRequired,
  /** Text Color */
  color: PropTypes.string,
  /** Font Family, default is the theme one */
  fontFamily: PropTypes.string,
  /** Font Weight, default is the theme one */
  weight: PropTypes.number,
  /** Text Align, default is left */
  align: PropTypes.string,
  /** Truncate... */
  truncate: PropTypes.bool,
  /** Text Transform, UPPERCASE */
  uppercase: PropTypes.bool,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
};

Text.defaultProps = {
  children: '',
  as: 'span',
};

var TimeSpanDisplay = function TimeSpanDisplay(_ref) {
  var date = _ref.date,
    withSeconds = _ref.withSeconds;
  return React__default.createElement(
    React.Fragment,
    null,
    moment(date).format('' + (withSeconds ? 'HH:mm:ss' : 'HH:mm')),
  );
};

TimeSpanDisplay.propTypes = {
  date: PropTypes.string.isRequired,
  withSeconds: PropTypes.bool,
};

var TimeSpanDisplay$1 = function TimeSpanDisplay$$1(_ref) {
  var fontSize = _ref.fontSize,
    startAt = _ref.startAt,
    theme = _ref.theme,
    endAt = _ref.endAt,
    withSeconds = _ref.withSeconds;
  return React__default.createElement(
    Text,
    { fontSize: fontSize, color: theme.colors.grey100 },
    React__default.createElement(TimeSpanDisplay, {
      date: startAt,
      withSeconds: withSeconds,
    }),
    ' \u2014',
    ' ',
    React__default.createElement(TimeSpanDisplay, {
      date: endAt,
      withSeconds: withSeconds,
    }),
  );
};

TimeSpanDisplay$1.propTypes = {
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  fontSize: PropTypes.oneOf(['bit', 'byte', 'kilo', 'mega', 'giga']),
  withSeconds: PropTypes.bool,
};

var TimeSpanDisplay$2 = styled.withTheme(TimeSpanDisplay$1);

var Button$1 = function Button$$1(_ref) {
  var active = _ref.active,
    disabled = _ref.disabled,
    href = _ref.href,
    stretch = _ref.stretch,
    elementType = _ref.elementType,
    children = _ref.children,
    actionType = _ref.actionType,
    onClick = _ref.onClick,
    size = _ref.size;
  return React__default.createElement(
    reactBootstrap.Button,
    _extends(
      {
        active: active,
        disabled: disabled,
        href: href,
        block: stretch,
        type: elementType,
        bsStyle: actionType,
        onClick: onClick,
      },
      { bsSize: size || null },
    ),
    children,
  );
};

Button$1.propTypes = {
  /**
   * The html inside of the button
   */
  children: PropTypes.any.isRequired,
  /**
   * It's going to generate the action color such as
   * .btn-primary, .btn-info, .btn-default and so on...
   */
  actionType: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'info',
    'warning',
    'danger',
    'link',
  ]).isRequired,
  /**
   * Button type
   */
  elementType: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  /**
   * Flag to determine if the button is active or not
   */
  /**
   * Size of the button
   */
  size: PropTypes.oneOf(['large', '', 'small', 'xsmall']).isRequired,
  active: PropTypes.bool,
  /**
   * Flag to determine if the button is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * Anchor
   */
  href: PropTypes.string,
  /**
   * Makes button stretched
   */
  stretch: PropTypes.bool,
  /**
   * Action that will be triggered when the button is clicked
   */
  onClick: PropTypes.func,
};

Button$1.defaultProps = {
  active: false,
  disabled: false,
  href: '',
  stretch: false,
  actionType: 'default',
  elementType: 'button',
  size: '',
};

function createCommonjsModule$1(e, n) {
  return (n = { exports: {} }), e(n, n.exports), n.exports;
}
function makeEmptyFunction(e) {
  return function() {
    return e;
  };
}
function invariant(e, n, r, t, o, i, a, u) {
  if ((validateFormat(n), !e)) {
    var c;
    if (void 0 === n)
      c = new Error(
        'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
      );
    else {
      var s = [r, t, o, i, a, u],
        p = 0;
      (c = new Error(
        n.replace(/%s/g, function() {
          return s[p++];
        }),
      )).name =
        'Invariant Violation';
    }
    throw ((c.framesToPop = 1), c);
  }
}
function toObject(e) {
  if (null === e || void 0 === e)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined',
    );
  return Object(e);
}
function shouldUseNative() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
    for (var n = {}, r = 0; r < 10; r++) n['_' + String.fromCharCode(r)] = r;
    if (
      '0123456789' !==
      Object.getOwnPropertyNames(n)
        .map(function(e) {
          return n[e];
        })
        .join('')
    )
      return !1;
    var t = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function(e) {
        t[e] = e;
      }),
      'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, t)).join('')
    );
  } catch (e) {
    return !1;
  }
}
function checkPropTypes(e, n, r, t, o) {
  if ('production' !== process.env.NODE_ENV)
    for (var i in e)
      if (e.hasOwnProperty(i)) {
        var a;
        try {
          invariant$1(
            'function' == typeof e[i],
            '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
            t || 'React class',
            r,
            i,
            _typeof$1(e[i]),
          ),
            (a = e[i](n, i, t, r, null, ReactPropTypesSecret$1));
        } catch (e) {
          a = e;
        }
        if (
          (warning$1(
            !a || a instanceof Error,
            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
            t || 'React class',
            r,
            i,
            void 0 === a ? 'undefined' : _typeof$1(a),
          ),
          a instanceof Error && !(a.message in loggedTypeFailures))
        ) {
          loggedTypeFailures[a.message] = !0;
          var u = o ? o() : '';
          warning$1(
            !1,
            'Failed %s type: %s%s',
            r,
            a.message,
            null != u ? u : '',
          );
        }
      }
}
var emptyFunction = function() {};
(emptyFunction.thatReturns = makeEmptyFunction),
  (emptyFunction.thatReturnsFalse = makeEmptyFunction(!1)),
  (emptyFunction.thatReturnsTrue = makeEmptyFunction(!0)),
  (emptyFunction.thatReturnsNull = makeEmptyFunction(null)),
  (emptyFunction.thatReturnsThis = function() {
    return this;
  }),
  (emptyFunction.thatReturnsArgument = function(e) {
    return e;
  });
var emptyFunction_1 = emptyFunction;
var validateFormat = function(e) {};
'production' !== process.env.NODE_ENV &&
  (validateFormat = function(e) {
    if (void 0 === e)
      throw new Error('invariant requires an error message argument');
  });
var invariant_1 = invariant;
var warning = emptyFunction_1;
if ('production' !== process.env.NODE_ENV) {
  var printWarning = function(e) {
    for (
      var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), t = 1;
      t < n;
      t++
    )
      r[t - 1] = arguments[t];
    var o = 0,
      i =
        'Warning: ' +
        e.replace(/%s/g, function() {
          return r[o++];
        });
    'undefined' != typeof console && console.error(i);
    try {
      throw new Error(i);
    } catch (e) {}
  };
  warning = function(e, n) {
    if (void 0 === n)
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning message argument',
      );
    if (0 !== n.indexOf('Failed Composite propType: ') && !e) {
      for (
        var r = arguments.length, t = Array(r > 2 ? r - 2 : 0), o = 2;
        o < r;
        o++
      )
        t[o - 2] = arguments[o];
      printWarning.apply(void 0, [n].concat(t));
    }
  };
}
var warning_1 = warning;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$9 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var index$1 = shouldUseNative()
  ? Object.assign
  : function(e, n) {
      for (var r, t, o = toObject(e), i = 1; i < arguments.length; i++) {
        r = Object(arguments[i]);
        for (var a in r) hasOwnProperty$9.call(r, a) && (o[a] = r[a]);
        if (getOwnPropertySymbols) {
          t = getOwnPropertySymbols(r);
          for (var u = 0; u < t.length; u++)
            propIsEnumerable.call(r, t[u]) && (o[t[u]] = r[t[u]]);
        }
      }
      return o;
    };
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
var _typeof$1 =
  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
    ? function(e) {
        return typeof e;
      }
    : function(e) {
        return e &&
          'function' == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? 'symbol'
          : typeof e;
      };
if ('production' !== process.env.NODE_ENV) var invariant$1 = invariant_1;
var warning$1 = warning_1;
var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var loggedTypeFailures = {};
var checkPropTypes_1 = checkPropTypes;
var factoryWithTypeCheckers = function(e, n) {
  function r(e) {
    var n = e && ((y && e[y]) || e[d]);
    if ('function' == typeof n) return n;
  }
  function t(e, n) {
    return e === n ? 0 !== e || 1 / e == 1 / n : e !== e && n !== n;
  }
  function o(e) {
    (this.message = e), (this.stack = '');
  }
  function i(e) {
    function r(r, a, u, c, s, p, f) {
      if (((c = c || m), (p = p || u), f !== ReactPropTypesSecret_1))
        if (n)
          invariant_1(
            !1,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
          );
        else if (
          'production' !== process.env.NODE_ENV &&
          'undefined' != typeof console
        ) {
          var l = c + ':' + u;
          !t[l] &&
            i < 3 &&
            (warning_1(
              !1,
              'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
              p,
              c,
            ),
            (t[l] = !0),
            i++);
        }
      return null == a[u]
        ? r
          ? new o(
              null === a[u]
                ? 'The ' +
                  s +
                  ' `' +
                  p +
                  '` is marked as required in `' +
                  c +
                  '`, but its value is `null`.'
                : 'The ' +
                  s +
                  ' `' +
                  p +
                  '` is marked as required in `' +
                  c +
                  '`, but its value is `undefined`.',
            )
          : null
        : e(a, u, c, s, p);
    }
    if ('production' !== process.env.NODE_ENV)
      var t = {},
        i = 0;
    var a = r.bind(null, !1);
    return (a.isRequired = r.bind(null, !0)), a;
  }
  function a(e) {
    return i(function(n, r, t, i, a, u) {
      var c = n[r];
      return s(c) !== e
        ? new o(
            'Invalid ' +
              i +
              ' `' +
              a +
              '` of type `' +
              p(c) +
              '` supplied to `' +
              t +
              '`, expected `' +
              e +
              '`.',
          )
        : null;
    });
  }
  function u(n) {
    switch (void 0 === n ? 'undefined' : _typeof$1(n)) {
      case 'number':
      case 'string':
      case 'undefined':
        return !0;
      case 'boolean':
        return !n;
      case 'object':
        if (Array.isArray(n)) return n.every(u);
        if (null === n || e(n)) return !0;
        var t = r(n);
        if (!t) return !1;
        var o,
          i = t.call(n);
        if (t !== n.entries) {
          for (; !(o = i.next()).done; ) if (!u(o.value)) return !1;
        } else
          for (; !(o = i.next()).done; ) {
            var a = o.value;
            if (a && !u(a[1])) return !1;
          }
        return !0;
      default:
        return !1;
    }
  }
  function c(e, n) {
    return (
      'symbol' === e ||
      ('Symbol' === n['@@toStringTag'] ||
        ('function' == typeof Symbol && n instanceof Symbol))
    );
  }
  function s(e) {
    var n = void 0 === e ? 'undefined' : _typeof$1(e);
    return Array.isArray(e)
      ? 'array'
      : e instanceof RegExp
        ? 'object'
        : c(n, e)
          ? 'symbol'
          : n;
  }
  function p(e) {
    if (void 0 === e || null === e) return '' + e;
    var n = s(e);
    if ('object' === n) {
      if (e instanceof Date) return 'date';
      if (e instanceof RegExp) return 'regexp';
    }
    return n;
  }
  function f(e) {
    var n = p(e);
    switch (n) {
      case 'array':
      case 'object':
        return 'an ' + n;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + n;
      default:
        return n;
    }
  }
  function l(e) {
    return e.constructor && e.constructor.name ? e.constructor.name : m;
  }
  var y = 'function' == typeof Symbol && Symbol.iterator,
    d = '@@iterator',
    m = '<<anonymous>>',
    v = {
      array: a('array'),
      bool: a('boolean'),
      func: a('function'),
      number: a('number'),
      object: a('object'),
      string: a('string'),
      symbol: a('symbol'),
      any: i(emptyFunction_1.thatReturnsNull),
      arrayOf: function(e) {
        return i(function(n, r, t, i, a) {
          if ('function' != typeof e)
            return new o(
              'Property `' +
                a +
                '` of component `' +
                t +
                '` has invalid PropType notation inside arrayOf.',
            );
          var u = n[r];
          if (!Array.isArray(u))
            return new o(
              'Invalid ' +
                i +
                ' `' +
                a +
                '` of type `' +
                s(u) +
                '` supplied to `' +
                t +
                '`, expected an array.',
            );
          for (var c = 0; c < u.length; c++) {
            var p = e(u, c, t, i, a + '[' + c + ']', ReactPropTypesSecret_1);
            if (p instanceof Error) return p;
          }
          return null;
        });
      },
      element: (function() {
        return i(function(n, r, t, i, a) {
          var u = n[r];
          return e(u)
            ? null
            : new o(
                'Invalid ' +
                  i +
                  ' `' +
                  a +
                  '` of type `' +
                  s(u) +
                  '` supplied to `' +
                  t +
                  '`, expected a single ReactElement.',
              );
        });
      })(),
      instanceOf: function(e) {
        return i(function(n, r, t, i, a) {
          if (!(n[r] instanceof e)) {
            var u = e.name || m;
            return new o(
              'Invalid ' +
                i +
                ' `' +
                a +
                '` of type `' +
                l(n[r]) +
                '` supplied to `' +
                t +
                '`, expected instance of `' +
                u +
                '`.',
            );
          }
          return null;
        });
      },
      node: (function() {
        return i(function(e, n, r, t, i) {
          return u(e[n])
            ? null
            : new o(
                'Invalid ' +
                  t +
                  ' `' +
                  i +
                  '` supplied to `' +
                  r +
                  '`, expected a ReactNode.',
              );
        });
      })(),
      objectOf: function(e) {
        return i(function(n, r, t, i, a) {
          if ('function' != typeof e)
            return new o(
              'Property `' +
                a +
                '` of component `' +
                t +
                '` has invalid PropType notation inside objectOf.',
            );
          var u = n[r],
            c = s(u);
          if ('object' !== c)
            return new o(
              'Invalid ' +
                i +
                ' `' +
                a +
                '` of type `' +
                c +
                '` supplied to `' +
                t +
                '`, expected an object.',
            );
          for (var p in u)
            if (u.hasOwnProperty(p)) {
              var f = e(u, p, t, i, a + '.' + p, ReactPropTypesSecret_1);
              if (f instanceof Error) return f;
            }
          return null;
        });
      },
      oneOf: function(e) {
        return Array.isArray(e)
          ? i(function(n, r, i, a, u) {
              for (var c = n[r], s = 0; s < e.length; s++)
                if (t(c, e[s])) return null;
              return new o(
                'Invalid ' +
                  a +
                  ' `' +
                  u +
                  '` of value `' +
                  c +
                  '` supplied to `' +
                  i +
                  '`, expected one of ' +
                  JSON.stringify(e) +
                  '.',
              );
            })
          : ('production' !== process.env.NODE_ENV &&
              warning_1(
                !1,
                'Invalid argument supplied to oneOf, expected an instance of array.',
              ),
            emptyFunction_1.thatReturnsNull);
      },
      oneOfType: function(e) {
        if (!Array.isArray(e))
          return (
            'production' !== process.env.NODE_ENV &&
              warning_1(
                !1,
                'Invalid argument supplied to oneOfType, expected an instance of array.',
              ),
            emptyFunction_1.thatReturnsNull
          );
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if ('function' != typeof r)
            return (
              warning_1(
                !1,
                'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',
                f(r),
                n,
              ),
              emptyFunction_1.thatReturnsNull
            );
        }
        return i(function(n, r, t, i, a) {
          for (var u = 0; u < e.length; u++)
            if (null == (0, e[u])(n, r, t, i, a, ReactPropTypesSecret_1))
              return null;
          return new o(
            'Invalid ' + i + ' `' + a + '` supplied to `' + t + '`.',
          );
        });
      },
      shape: function(e) {
        return i(function(n, r, t, i, a) {
          var u = n[r],
            c = s(u);
          if ('object' !== c)
            return new o(
              'Invalid ' +
                i +
                ' `' +
                a +
                '` of type `' +
                c +
                '` supplied to `' +
                t +
                '`, expected `object`.',
            );
          for (var p in e) {
            var f = e[p];
            if (f) {
              var l = f(u, p, t, i, a + '.' + p, ReactPropTypesSecret_1);
              if (l) return l;
            }
          }
          return null;
        });
      },
      exact: function(e) {
        return i(function(n, r, t, i, a) {
          var u = n[r],
            c = s(u);
          if ('object' !== c)
            return new o(
              'Invalid ' +
                i +
                ' `' +
                a +
                '` of type `' +
                c +
                '` supplied to `' +
                t +
                '`, expected `object`.',
            );
          var p = index$1({}, n[r], e);
          for (var f in p) {
            var l = e[f];
            if (!l)
              return new o(
                'Invalid ' +
                  i +
                  ' `' +
                  a +
                  '` key `' +
                  f +
                  '` supplied to `' +
                  t +
                  '`.\nBad object: ' +
                  JSON.stringify(n[r], null, '  ') +
                  '\nValid keys: ' +
                  JSON.stringify(Object.keys(e), null, '  '),
              );
            var y = l(u, f, t, i, a + '.' + f, ReactPropTypesSecret_1);
            if (y) return y;
          }
          return null;
        });
      },
    };
  return (
    (o.prototype = Error.prototype),
    (v.checkPropTypes = checkPropTypes_1),
    (v.PropTypes = v),
    v
  );
};
var factoryWithThrowingShims = function() {
  function e(e, n, r, t, o, i) {
    i !== ReactPropTypesSecret_1 &&
      invariant_1(
        !1,
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
  }
  function n() {
    return e;
  }
  e.isRequired = e;
  var r = {
    array: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: n,
    element: e,
    instanceOf: n,
    node: e,
    objectOf: n,
    oneOf: n,
    oneOfType: n,
    shape: n,
    exact: n,
  };
  return (r.checkPropTypes = emptyFunction_1), (r.PropTypes = r), r;
};
var index = createCommonjsModule$1(function(e) {
  if ('production' !== process.env.NODE_ENV) {
    var n =
        ('function' == typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103,
      r = function(e) {
        return (
          'object' === (void 0 === e ? 'undefined' : _typeof$1(e)) &&
          null !== e &&
          e.$$typeof === n
        );
      };
    e.exports = factoryWithTypeCheckers(r, !0);
  } else e.exports = factoryWithThrowingShims();
});
var Cell = styled__default.section.withConfig({ displayName: 'Cell__Cell' })(
  [
    'height:100%;min-width:0;align-content:space-around;grid-column-end:',
    ';grid-row-end:',
    ';',
    ';',
    ';',
    ';',
    ';',
    ';',
  ],
  function(e) {
    var n = e.width;
    return 'span ' + (void 0 === n ? 1 : n);
  },
  function(e) {
    var n = e.height;
    return 'span ' + (void 0 === n ? 1 : n);
  },
  function(e) {
    var n = e.left;
    return n && 'grid-column-start: ' + n;
  },
  function(e) {
    var n = e.top;
    return n && 'grid-row-start: ' + n;
  },
  function(e) {
    return e.center && 'text-align: center';
  },
  function(e) {
    var n = e.area;
    return n && 'grid-area: ' + n;
  },
  function(e) {
    return (
      e.middle &&
      '\n    display: inline-flex;\n    flex-flow: column wrap;\n    justify-content: center;\n    justify-self: stretch;\n  '
    );
  },
);
Cell.propTypes = {
  className: index.string,
  width: index.number,
  height: index.number,
  top: index.oneOfType([index.number, index.string]),
  left: index.oneOfType([index.number, index.string]),
  middle: index.bool,
  center: index.bool,
  area: index.string,
};
var autoRows = function(e) {
  var n = e.minRowHeight;
  return 'minmax(' + (void 0 === n ? '20px' : n) + ', auto)';
};
var frGetter = function(e) {
  return 'number' == typeof e ? 'repeat(' + e + ', 1fr)' : e;
};
var gap = function(e) {
  var n = e.gap,
    r = void 0 === n ? '8px' : n;
  return r + ' ' + r;
};
var flow = function(e) {
  var n = e.flow,
    r = void 0 === n ? 'row' : n;
  return r;
};
var formatAreas = function(e) {
  return e
    .map(function(e) {
      return '"' + e + '"';
    })
    .join(' ');
};
var Grid = styled__default.div.withConfig({ displayName: 'Grid__Grid' })(
  [
    'display:grid;grid-auto-flow:',
    ';grid-auto-rows:',
    ';',
    ';grid-template-columns:',
    ';grid-gap:',
    ';',
    ';',
    ';',
    ';',
  ],
  flow,
  autoRows,
  function(e) {
    var n = e.rows;
    return n && 'grid-template-rows: ' + frGetter(n);
  },
  function(e) {
    var n = e.columns;
    return frGetter(void 0 === n ? 12 : n);
  },
  gap,
  function(e) {
    var n = e.areas;
    return n && 'grid-template-areas: ' + formatAreas(n);
  },
  function(e) {
    var n = e.justifyContent;
    return n && 'justify-content: ' + n;
  },
  function(e) {
    var n = e.alignContent;
    return n && 'align-content: ' + n;
  },
);
Grid.propTypes = {
  className: index.string,
  columns: index.oneOfType([index.string, index.number]),
  gap: index.string,
  minRowHeight: index.string,
  flow: index.string,
  rows: index.oneOfType([index.string, index.number]),
  areas: index.arrayOf(index.string),
  justifyContent: index.string,
  alignContent: index.string,
};

var _templateObject$3 = taggedTemplateLiteral(
  ['\n  padding: ', ';\n'],
  ['\n  padding: ', ';\n'],
);

var OuterGutter = styled__default.section(_templateObject$3, function(_ref) {
  var theme = _ref.theme,
    withPad = _ref.withPad;
  return withPad ? theme.grid.outerGutter : '0px';
});

var ComposedGrid = function ComposedGrid(props) {
  return React__default.createElement(
    OuterGutter,
    { withPad: props.withPad },
    React__default.createElement(Grid, props),
  );
};

ComposedGrid.propTypes = {
  gap: PropTypes.string.isRequired,
  withPad: PropTypes.bool,
};

ComposedGrid.defaultProps = {
  gap: '10px',
  withPad: false,
};

var Grid$2 = { Grid: ComposedGrid, Cell: Cell };

var hashids = createCommonjsModule(function(module, exports) {
  (function(global, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
      undefined(['module', 'exports'], factory);
    } else {
      factory(module, exports);
    }
  })(commonjsGlobal, function(module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    }

    var _createClass = (function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();

    var Hashids = (function() {
      function Hashids() {
        var salt =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : '';
        var minLength =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var alphabet =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

        _classCallCheck(this, Hashids);

        var minAlphabetLength = 16;
        var sepDiv = 3.5;
        var guardDiv = 12;

        var errorAlphabetLength =
          'error: alphabet must contain at least X unique characters';
        var errorAlphabetSpace = 'error: alphabet cannot contain spaces';

        var uniqueAlphabet = '',
          sepsLength = void 0,
          diff = void 0;

        /* funcs */

        this.escapeRegExp = function(s) {
          return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        };
        this.parseInt = function(v, radix) {
          return /^(\-|\+)?([0-9]+|Infinity)$/.test(v)
            ? parseInt(v, radix)
            : NaN;
        };

        /* alphabet vars */

        this.seps = 'cfhistuCFHISTU';
        this.minLength = parseInt(minLength, 10) > 0 ? minLength : 0;
        this.salt = typeof salt === 'string' ? salt : '';

        if (typeof alphabet === 'string') {
          this.alphabet = alphabet;
        }

        for (var i = 0; i !== this.alphabet.length; i++) {
          if (uniqueAlphabet.indexOf(this.alphabet.charAt(i)) === -1) {
            uniqueAlphabet += this.alphabet.charAt(i);
          }
        }

        this.alphabet = uniqueAlphabet;

        if (this.alphabet.length < minAlphabetLength) {
          throw errorAlphabetLength.replace('X', minAlphabetLength);
        }

        if (this.alphabet.search(' ') !== -1) {
          throw errorAlphabetSpace;
        }

        /*
   	`this.seps` should contain only characters present in `this.alphabet`
   	`this.alphabet` should not contains `this.seps`
   */

        for (var _i = 0; _i !== this.seps.length; _i++) {
          var j = this.alphabet.indexOf(this.seps.charAt(_i));
          if (j === -1) {
            this.seps =
              this.seps.substr(0, _i) + ' ' + this.seps.substr(_i + 1);
          } else {
            this.alphabet =
              this.alphabet.substr(0, j) + ' ' + this.alphabet.substr(j + 1);
          }
        }

        this.alphabet = this.alphabet.replace(/ /g, '');

        this.seps = this.seps.replace(/ /g, '');
        this.seps = this._shuffle(this.seps, this.salt);

        if (
          !this.seps.length ||
          this.alphabet.length / this.seps.length > sepDiv
        ) {
          sepsLength = Math.ceil(this.alphabet.length / sepDiv);

          if (sepsLength > this.seps.length) {
            diff = sepsLength - this.seps.length;
            this.seps += this.alphabet.substr(0, diff);
            this.alphabet = this.alphabet.substr(diff);
          }
        }

        this.alphabet = this._shuffle(this.alphabet, this.salt);
        var guardCount = Math.ceil(this.alphabet.length / guardDiv);

        if (this.alphabet.length < 3) {
          this.guards = this.seps.substr(0, guardCount);
          this.seps = this.seps.substr(guardCount);
        } else {
          this.guards = this.alphabet.substr(0, guardCount);
          this.alphabet = this.alphabet.substr(guardCount);
        }
      }

      _createClass(Hashids, [
        {
          key: 'encode',
          value: function encode() {
            for (
              var _len = arguments.length, numbers = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              numbers[_key] = arguments[_key];
            }

            var ret = '';

            if (!numbers.length) {
              return ret;
            }

            if (numbers[0] && numbers[0].constructor === Array) {
              numbers = numbers[0];
              if (!numbers.length) {
                return ret;
              }
            }

            for (var i = 0; i !== numbers.length; i++) {
              numbers[i] = this.parseInt(numbers[i], 10);
              if (numbers[i] >= 0) {
                continue;
              } else {
                return ret;
              }
            }

            return this._encode(numbers);
          },
        },
        {
          key: 'decode',
          value: function decode(id) {
            var ret = [];

            if (!id || !id.length || typeof id !== 'string') {
              return ret;
            }

            return this._decode(id, this.alphabet);
          },
        },
        {
          key: 'encodeHex',
          value: function encodeHex(hex) {
            hex = hex.toString();
            if (!/^[0-9a-fA-F]+$/.test(hex)) {
              return '';
            }

            var numbers = hex.match(/[\w\W]{1,12}/g);

            for (var i = 0; i !== numbers.length; i++) {
              numbers[i] = parseInt('1' + numbers[i], 16);
            }

            return this.encode.apply(this, numbers);
          },
        },
        {
          key: 'decodeHex',
          value: function decodeHex(id) {
            var ret = [];

            var numbers = this.decode(id);

            for (var i = 0; i !== numbers.length; i++) {
              ret += numbers[i].toString(16).substr(1);
            }

            return ret;
          },
        },
        {
          key: '_encode',
          value: function _encode(numbers) {
            var ret = void 0,
              alphabet = this.alphabet,
              numbersIdInt = 0;

            for (var i = 0; i !== numbers.length; i++) {
              numbersIdInt += numbers[i] % (i + 100);
            }

            ret = alphabet.charAt(numbersIdInt % alphabet.length);
            var lottery = ret;

            for (var _i2 = 0; _i2 !== numbers.length; _i2++) {
              var number = numbers[_i2];
              var buffer = lottery + this.salt + alphabet;

              alphabet = this._shuffle(
                alphabet,
                buffer.substr(0, alphabet.length),
              );
              var last = this._toAlphabet(number, alphabet);

              ret += last;

              if (_i2 + 1 < numbers.length) {
                number %= last.charCodeAt(0) + _i2;
                var sepsIndex = number % this.seps.length;
                ret += this.seps.charAt(sepsIndex);
              }
            }

            if (ret.length < this.minLength) {
              var guardIndex =
                (numbersIdInt + ret[0].charCodeAt(0)) % this.guards.length;
              var guard = this.guards[guardIndex];

              ret = guard + ret;

              if (ret.length < this.minLength) {
                guardIndex =
                  (numbersIdInt + ret[2].charCodeAt(0)) % this.guards.length;
                guard = this.guards[guardIndex];

                ret += guard;
              }
            }

            var halfLength = parseInt(alphabet.length / 2, 10);
            while (ret.length < this.minLength) {
              alphabet = this._shuffle(alphabet, alphabet);
              ret =
                alphabet.substr(halfLength) +
                ret +
                alphabet.substr(0, halfLength);

              var excess = ret.length - this.minLength;
              if (excess > 0) {
                ret = ret.substr(excess / 2, this.minLength);
              }
            }

            return ret;
          },
        },
        {
          key: '_decode',
          value: function _decode(id, alphabet) {
            var ret = [],
              i = 0,
              r = new RegExp('[' + this.escapeRegExp(this.guards) + ']', 'g'),
              idBreakdown = id.replace(r, ' '),
              idArray = idBreakdown.split(' ');

            if (idArray.length === 3 || idArray.length === 2) {
              i = 1;
            }

            idBreakdown = idArray[i];
            if (typeof idBreakdown[0] !== 'undefined') {
              var lottery = idBreakdown[0];
              idBreakdown = idBreakdown.substr(1);

              r = new RegExp('[' + this.escapeRegExp(this.seps) + ']', 'g');
              idBreakdown = idBreakdown.replace(r, ' ');
              idArray = idBreakdown.split(' ');

              for (var j = 0; j !== idArray.length; j++) {
                var subId = idArray[j];
                var buffer = lottery + this.salt + alphabet;

                alphabet = this._shuffle(
                  alphabet,
                  buffer.substr(0, alphabet.length),
                );
                ret.push(this._fromAlphabet(subId, alphabet));
              }

              if (this.encode(ret) !== id) {
                ret = [];
              }
            }

            return ret;
          },
        },
        {
          key: '_shuffle',
          value: function _shuffle(alphabet, salt) {
            var integer = void 0;

            if (!salt.length) {
              return alphabet;
            }

            alphabet = alphabet.split('');

            for (
              var i = alphabet.length - 1, v = 0, p = 0, j = 0;
              i > 0;
              i--, v++
            ) {
              v %= salt.length;
              p += integer = salt.charCodeAt(v);
              j = (integer + v + p) % i;

              var tmp = alphabet[j];
              alphabet[j] = alphabet[i];
              alphabet[i] = tmp;
            }

            alphabet = alphabet.join('');

            return alphabet;
          },
        },
        {
          key: '_toAlphabet',
          value: function _toAlphabet(input, alphabet) {
            var id = '';

            do {
              id = alphabet.charAt(input % alphabet.length) + id;
              input = parseInt(input / alphabet.length, 10);
            } while (input);

            return id;
          },
        },
        {
          key: '_fromAlphabet',
          value: function _fromAlphabet(input, alphabet) {
            return input
              .split('')
              .map(function(item) {
                return alphabet.indexOf(item);
              })
              .reduce(function(carry, item) {
                return carry * alphabet.length + item;
              }, 0);
          },
        },
      ]);

      return Hashids;
    })();

    exports.default = Hashids;
    module.exports = exports['default'];
  });
});

unwrapExports(hashids);

var reactKeyIndex = createCommonjsModule(function(module) {
  module.exports = (arr, label) => {
    var hashids$$1 = new hashids();
    var x = parseInt(label);
    var digits = [9, 9, x];
    var obj = {};
    var result = arr.map(function(arr, index) {
      digits.push(index);
      if (typeof arr === 'object') {
        var i = 0;
        Object.keys(arr).forEach(function(key) {
          var x = '';
          digits.push(i);
          x = '_' + key + 'Id';
          arr[x] = hashids$$1.encode(digits);
          digits = digits.slice(0, 6);
          console.log(digits);
          i++;
        });
        return arr;
      } else {
        obj = {
          value: arr,
          id: hashids$$1.encode(digits),
        };
        digits = digits.slice(0, 5);
        return obj;
      }
      //matrix.push(digits);
    });
    return result;
  };
});

//

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var _extends$1 =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

var taggedTemplateLiteralLoose$1 = function(strings, raw) {
  strings.raw = raw;
  return strings;
};

var _opinionatedRules;
var _abbrTitle;
var _unopinionatedRules;

//
var opinionatedRules = ((_opinionatedRules = {
  html: {
    fontFamily: 'sans-serif',
  },

  body: {
    margin: '0',
  },
}),
(_opinionatedRules['a:active,\n  a:hover'] = {
  outlineWidth: '0',
}),
(_opinionatedRules['button,\n  input,\n  optgroup,\n  select,\n  textarea'] = {
  fontFamily: 'sans-serif',
  fontSize: '100%',
  lineHeight: '1.15',
}),
_opinionatedRules);

var unopinionatedRules = ((_unopinionatedRules = {
  html: {
    lineHeight: '1.15',
    textSizeAdjust: '100%',
  },
}),
(_unopinionatedRules[
  'article,\n  aside,\n  footer,\n  header,\n  nav,\n  section'
] = {
  display: 'block',
}),
(_unopinionatedRules.h1 = {
  fontSize: '2em',
  margin: '0.67em 0',
}),
(_unopinionatedRules['figcaption,\n  figure,\n  main'] = {
  display: 'block',
}),
(_unopinionatedRules.figure = {
  margin: '1em 40px',
}),
(_unopinionatedRules.hr = {
  boxSizing: 'content-box',
  height: '0',
  overflow: 'visible',
}),
(_unopinionatedRules.pre = {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
}),
(_unopinionatedRules.a = {
  'background-color': 'transparent',
  '-webkit-text-decoration-skip': 'objects',
}),
(_unopinionatedRules['abbr[title]'] = ((_abbrTitle = {
  borderBottom: 'none',
  textDecoration: 'underline',
}),
(_abbrTitle['textDecoration'] = 'underline dotted'),
_abbrTitle)),
(_unopinionatedRules['b,\n  strong'] = {
  fontWeight: 'inherit',
}),
(_unopinionatedRules['code,\n  kbd,\n  samp'] = {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
}),
(_unopinionatedRules.dfn = {
  fontStyle: 'italic',
}),
(_unopinionatedRules.mark = {
  backgroundColor: '#ff0',
  color: '#000',
}),
(_unopinionatedRules.small = {
  fontSize: '80%',
}),
(_unopinionatedRules['sub,\n  sup'] = {
  fontSize: '75%',
  lineHeight: '0',
  position: 'relative',
  verticalAlign: 'baseline',
}),
(_unopinionatedRules.sub = {
  bottom: '-0.25em',
}),
(_unopinionatedRules.sup = {
  top: '-0.5em',
}),
(_unopinionatedRules['audio,\n  video'] = {
  display: 'inline-block',
}),
(_unopinionatedRules['audio:not([controls])'] = {
  display: 'none',
  height: '0',
}),
(_unopinionatedRules.img = {
  borderStyle: 'none',
}),
(_unopinionatedRules['svg:not(:root)'] = {
  overflow: 'hidden',
}),
(_unopinionatedRules[
  'button,\n  input,\n  optgroup,\n  select,\n  textarea'
] = {
  margin: '0',
}),
(_unopinionatedRules['button,\n  input'] = {
  overflow: 'visible',
}),
(_unopinionatedRules['button,\n  select'] = {
  textTransform: 'none',
}),
(_unopinionatedRules[
  'button,\n  html [type="button"],\n  [type="reset"],\n  [type="submit"]'
] = {
  '-webkit-appearance': 'button',
}),
(_unopinionatedRules[
  'button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner'
] = {
  borderStyle: 'none',
  padding: '0',
}),
(_unopinionatedRules[
  'button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring'
] = {
  outline: '1px dotted ButtonText',
}),
(_unopinionatedRules.fieldset = {
  border: '1px solid #c0c0c0',
  margin: '0 2px',
  padding: '0.35em 0.625em 0.75em',
}),
(_unopinionatedRules.legend = {
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'table',
  maxWidth: '100%',
  padding: '0',
  whiteSpace: 'normal',
}),
(_unopinionatedRules.progress = {
  display: 'inline-block',
  verticalAlign: 'baseline',
}),
(_unopinionatedRules.textarea = {
  overflow: 'auto',
}),
(_unopinionatedRules['[type="checkbox"],\n  [type="radio"]'] = {
  boxSizing: 'border-box',
  padding: '0',
}),
(_unopinionatedRules[
  '[type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button'
] = {
  height: 'auto',
}),
(_unopinionatedRules['[type="search"]'] = {
  '-webkit-appearance': 'textfield',
  outlineOffset: '-2px',
}),
(_unopinionatedRules[
  '[type="search"]::-webkit-search-cancel-button,\n  [type="search"]::-webkit-search-decoration'
] = {
  '-webkit-appearance': 'none',
}),
(_unopinionatedRules['::-webkit-file-upload-button'] = {
  '-webkit-appearance': 'button',
  font: 'inherit',
}),
(_unopinionatedRules['details,\n  menu'] = {
  display: 'block',
}),
(_unopinionatedRules.summary = {
  display: 'list-item',
}),
(_unopinionatedRules.canvas = {
  display: 'inline-block',
}),
(_unopinionatedRules.template = {
  display: 'none',
}),
(_unopinionatedRules['[hidden]'] = {
  display: 'none',
}),
_unopinionatedRules);

var _templateObject$4 = /*#__PURE__*/ taggedTemplateLiteralLoose$1(
  ['radial-gradient(', '', '', '', ')'],
  ['radial-gradient(', '', '', '', ')'],
);

//

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + ',' + colorToInt(green) + ',' + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness) {
  var convert =
    arguments.length > 3 && arguments[3] !== undefined
      ? arguments[3]
      : convertToInt;

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  }

  // formular from https://en.wikipedia.org/wiki/HSL_and_HSV
  var huePrime = (hue % 360) / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));

  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

//
var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32',

  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */
};
function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName]
    ? '#' + namedColorMap[normalizedColorName]
    : color;
}

//
var hexRegex = /^#[a-fA-F0-9]{6}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;

/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    );
  }
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
    };
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
    };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) {
    return {
      red: parseInt('' + rgbMatched[1], 10),
      green: parseInt('' + rgbMatched[2], 10),
      blue: parseInt('' + rgbMatched[3], 10),
    };
  }
  var rgbaMatched = rgbaRegex.exec(normalizedColor);
  if (rgbaMatched) {
    return {
      red: parseInt('' + rgbaMatched[1], 10),
      green: parseInt('' + rgbaMatched[2], 10),
      blue: parseInt('' + rgbaMatched[3], 10),
      alpha: parseFloat('' + rgbaMatched[4]),
    };
  }
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt('' + hslMatched[1], 10);
    var saturation = parseInt('' + hslMatched[2], 10) / 100;
    var lightness = parseInt('' + hslMatched[3], 10) / 100;
    var rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')';
    var hslRgbMatched = rgbRegex.exec(rgbColorString);
    return {
      red: parseInt('' + hslRgbMatched[1], 10),
      green: parseInt('' + hslRgbMatched[2], 10),
      blue: parseInt('' + hslRgbMatched[3], 10),
    };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor);
  if (hslaMatched) {
    var _hue = parseInt('' + hslaMatched[1], 10);
    var _saturation = parseInt('' + hslaMatched[2], 10) / 100;
    var _lightness = parseInt('' + hslaMatched[3], 10) / 100;
    var _rgbColorString =
      'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')';
    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    return {
      red: parseInt('' + _hslRgbMatched[1], 10),
      green: parseInt('' + _hslRgbMatched[2], 10),
      blue: parseInt('' + _hslRgbMatched[3], 10),
      alpha: parseFloat('' + hslaMatched[4]),
    };
  }
  throw new Error(
    "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.",
  );
}

//

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;

  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha,
      };
    } else {
      return { hue: 0, saturation: 0, lightness: lightness };
    }
  }

  var hue = void 0;
  var delta = max - min;
  var saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;
  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha,
    };
  }
  return { hue: hue, saturation: saturation, lightness: lightness };
}

//

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = 'rgb(255, 0, 0)';
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = 'hsla(210, 10%, 40%, 0.75)';
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

//

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (
    value.length === 7 &&
    value[1] === value[2] &&
    value[3] === value[4] &&
    value[5] === value[6]
  ) {
    return '#' + value[1] + value[3] + value[5];
  }
  return value;
};

//
function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

//

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (
    typeof value === 'number' &&
    typeof green === 'number' &&
    typeof blue === 'number'
  ) {
    return reduceHexValue(
      '#' + numberToHex(value) + numberToHex(green) + numberToHex(blue),
    );
  } else if (
    typeof value === 'object' &&
    green === undefined &&
    blue === undefined
  ) {
    return reduceHexValue(
      '#' +
        numberToHex(value.red) +
        numberToHex(value.green) +
        numberToHex(value.blue),
    );
  }

  throw new Error(
    'Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).',
  );
}

//

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return (
      'rgba(' +
      rgbValue.red +
      ',' +
      rgbValue.green +
      ',' +
      rgbValue.blue +
      ',' +
      secondValue +
      ')'
    );
  } else if (
    typeof firstValue === 'number' &&
    typeof secondValue === 'number' &&
    typeof thirdValue === 'number' &&
    typeof fourthValue === 'number'
  ) {
    return fourthValue >= 1
      ? rgb(firstValue, secondValue, thirdValue)
      : 'rgba(' +
          firstValue +
          ',' +
          secondValue +
          ',' +
          thirdValue +
          ',' +
          fourthValue +
          ')';
  } else if (
    typeof firstValue === 'object' &&
    secondValue === undefined &&
    thirdValue === undefined &&
    fourthValue === undefined
  ) {
    return firstValue.alpha >= 1
      ? rgb(firstValue.red, firstValue.green, firstValue.blue)
      : 'rgba(' +
          firstValue.red +
          ',' +
          firstValue.green +
          ',' +
          firstValue.blue +
          ',' +
          firstValue.alpha +
          ')';
  }

  throw new Error(
    'Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).',
  );
}

//
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue(
    '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue),
  );
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

//

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (
    typeof value === 'number' &&
    typeof saturation === 'number' &&
    typeof lightness === 'number'
  ) {
    return hslToHex(value, saturation, lightness);
  } else if (
    typeof value === 'object' &&
    saturation === undefined &&
    lightness === undefined
  ) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error(
    'Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).',
  );
}

//

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (
    typeof value === 'number' &&
    typeof saturation === 'number' &&
    typeof lightness === 'number' &&
    typeof alpha === 'number'
  ) {
    return alpha >= 1
      ? hslToHex(value, saturation, lightness)
      : 'rgba(' + hslToRgb(value, saturation, lightness) + ',' + alpha + ')';
  } else if (
    typeof value === 'object' &&
    saturation === undefined &&
    lightness === undefined &&
    alpha === undefined
  ) {
    return value.alpha >= 1
      ? hslToHex(value.hue, value.saturation, value.lightness)
      : 'rgba(' +
          hslToRgb(value.hue, value.saturation, value.lightness) +
          ',' +
          value.alpha +
          ')';
  }

  throw new Error(
    'Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).',
  );
}

//
var isRgb = function isRgb(color) {
  return (
    typeof color.red === 'number' &&
    typeof color.green === 'number' &&
    typeof color.blue === 'number' &&
    (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')
  );
};

var isRgba = function isRgba(color) {
  return (
    typeof color.red === 'number' &&
    typeof color.green === 'number' &&
    typeof color.blue === 'number' &&
    typeof color.alpha === 'number'
  );
};

var isHsl = function isHsl(color) {
  return (
    typeof color.hue === 'number' &&
    typeof color.saturation === 'number' &&
    typeof color.lightness === 'number' &&
    (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')
  );
};

var isHsla = function isHsla(color) {
  return (
    typeof color.hue === 'number' &&
    typeof color.saturation === 'number' &&
    typeof color.lightness === 'number' &&
    typeof color.alpha === 'number'
  );
};

var errMsg =
  'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';

/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);

  throw new Error(errMsg);
}

//

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-redeclare

function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length
      ? f.apply(this, combined)
      : curried(f, length, combined);
  };
}

// eslint-disable-next-line no-redeclare
function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

//

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue(180, 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue(180, 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */
function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(
    _extends$1({}, hslColor, {
      hue: (hslColor.hue + degree) % 360,
    }),
  );
}

var curriedAdjustHue = /*#__PURE__*/ curry(adjustHue);

//

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

//

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken(0.2, 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken(0.2, 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */
function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(
    _extends$1({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness - amount),
    }),
  );
}

var curriedDarken = /*#__PURE__*/ curry(darken);

//

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */
function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(
    _extends$1({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation - amount),
    }),
  );
}

var curriedDesaturate = /*#__PURE__*/ curry(desaturate);

//
/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */
function getLuminance(color) {
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function(key) {
      var channel = rgbColor[key] / 255;
      return channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4);
    }),
    r = _Object$keys$map[0],
    g = _Object$keys$map[1],
    b = _Object$keys$map[2];

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

//

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */
function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(
    _extends$1({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness + amount),
    }),
  );
}

var curriedLighten = /*#__PURE__*/ curry(lighten);

//

/**
 * Mixes two colors together by calculating the average of each of the RGB components.
 *
 * By default the weight is 0.5 meaning that half of the first color and half the second
 * color should be used. Optionally the weight can be modified by providing a number
 * as the first argument. 0.25 means that a quarter of the first color and three quarters
 * of the second color should be used.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix(0.5, 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */
function mix() {
  var weight =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
  var color = arguments[1];
  var otherColor = arguments[2];

  var parsedColor1 = parseToRgb(color);
  var color1 = _extends$1({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1,
  });

  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends$1({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1,

    // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method
  });
  var alphaDelta = color1.alpha - color2.alpha;
  var x = weight * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;

  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (weight / 1.0),
  };

  return rgba(mixedColor);
}

var curriedMix = /*#__PURE__*/ curry(mix);

//
/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */
function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + amount * 100) / 100),
  });
  return rgba(colorWithAlpha);
}

var curriedOpacify = /*#__PURE__*/ curry(opacify);

//
/**
 * Selects black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

function readableColor(color) {
  return getLuminance(color) > 0.179 ? '#000' : '#fff';
}

var curriedReadableColor = /*#__PURE__*/ curry(readableColor);

//

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */
function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(
    _extends$1({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation + amount),
    }),
  );
}

var curriedSaturate = /*#__PURE__*/ curry(saturate);

//

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue(244, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue(244, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */
function setHue(hue, color) {
  return toColorString(
    _extends$1({}, parseToHsl(color), {
      hue: hue,
    }),
  );
}

var curriedSetHue = /*#__PURE__*/ curry(setHue);

//

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */
function setLightness(lightness, color) {
  return toColorString(
    _extends$1({}, parseToHsl(color), {
      lightness: lightness,
    }),
  );
}

var curriedSetLightness = /*#__PURE__*/ curry(setLightness);

//

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */
function setSaturation(saturation, color) {
  return toColorString(
    _extends$1({}, parseToHsl(color), {
      saturation: saturation,
    }),
  );
}

var curriedSetSaturation = /*#__PURE__*/ curry(setSaturation);

//

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error(
      'Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.',
    );
  }
  if (typeof color !== 'string') {
    throw new Error(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    );
  }
  return curriedMix(percentage, color, 'rgb(0, 0, 0)');
}

var curriedShade = /*#__PURE__*/ curry(shade);

//

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error(
      'Passed an incorrect argument to tint, please pass a percentage less than or equal to 1 and larger than or equal to -1.',
    );
  }
  if (typeof color !== 'string') {
    throw new Error(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    );
  }
  return curriedMix(percentage, color, 'rgb(255, 255, 255)');
}

var curriedTint = /*#__PURE__*/ curry(tint);

//
/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */
function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;
  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - amount * 100) / 100),
  });
  return rgba(colorWithAlpha);
}

var curriedTransparentize = /*#__PURE__*/ curry(transparentize);

//
/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */

function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);
  if (!radius && radius !== 0) {
    throw new Error(
      'borderRadius expects a radius value as a string or number as the second argument.',
    );
  }
  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return (
      (_ref = {}),
      (_ref['border' + uppercaseSide + 'RightRadius'] = radius),
      (_ref['border' + uppercaseSide + 'LeftRadius'] = radius),
      _ref
    );
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return (
      (_ref2 = {}),
      (_ref2['borderTop' + uppercaseSide + 'Radius'] = radius),
      (_ref2['borderBottom' + uppercaseSide + 'Radius'] = radius),
      _ref2
    );
  }

  throw new Error(
    'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.',
  );
}

//

/**
 * Shorthand that accepts any number of transition values as parameters for creating a single transition statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 * }
 */

function transitions() {
  for (
    var _len = arguments.length, properties = Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    properties[_key] = arguments[_key];
  }

  return {
    transition: properties.join(', '),
  };
}

var _templateObject$5 = taggedTemplateLiteral(
  [
    '\n  ',
    ';\n  color: ',
    ';\n  background-color: ',
    ';\n  margin-right: ',
    ';\n  padding: ',
    ';\n  outline-width: 0;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  text-transform: capitalize;\n  &:hover {\n    text-decoration: none;\n  }\n  &:active,\n  &:hover,\n  &:focus {\n    color: ',
    ';\n  }\n',
  ],
  [
    '\n  ',
    ';\n  color: ',
    ';\n  background-color: ',
    ';\n  margin-right: ',
    ';\n  padding: ',
    ';\n  outline-width: 0;\n  text-decoration: none;\n  cursor: pointer;\n  display: inline-block;\n  text-transform: capitalize;\n  &:hover {\n    text-decoration: none;\n  }\n  &:active,\n  &:hover,\n  &:focus {\n    color: ',
    ';\n  }\n',
  ],
);

var TabButton = styled__default('a')(
  _templateObject$5,
  function(_ref) {
    var theme = _ref.theme;
    return borderRadius('top', theme.borderRadius.mega);
  },
  function(_ref2) {
    var theme = _ref2.theme,
      isActive = _ref2.isActive;
    return isActive ? theme.colors.white : theme.colors.grey100;
  },
  function(_ref3) {
    var theme = _ref3.theme;
    return theme.colors.grey300;
  },
  function(_ref4) {
    var theme = _ref4.theme;
    return theme.spacings.bit;
  },
  function(_ref5) {
    var theme = _ref5.theme;
    return theme.composedSpacings.byte;
  },
  function(_ref6) {
    var theme = _ref6.theme;
    return theme.colors.white;
  },
);

var TabButtonList = function TabButtonList(_ref) {
  var options = _ref.options,
    activeTab = _ref.activeTab,
    onClick = _ref.onClick;
  return React__default.createElement(
    React.Fragment,
    null,
    reactKeyIndex(options, 1).map(function(item, key) {
      return React__default.createElement(
        TabButton,
        {
          key: 'ComposedTabButton-' + item.id,
          isActive: activeTab === key,
          onClick: onClick(key),
        },
        item.value,
      );
    }),
  );
};

TabButtonList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

var _templateObject$6 = taggedTemplateLiteral(
  ['\n  width: 100%;\n  padding: ', ';\n  background-color: ', ';\n'],
  ['\n  width: 100%;\n  padding: ', ';\n  background-color: ', ';\n'],
);

var TabContainer = styled__default.div(
  _templateObject$6,
  function(_ref) {
    var theme = _ref.theme;
    return theme.composedSpacings.byte;
  },
  function(_ref2) {
    var theme = _ref2.theme;
    return theme.colors.grey300;
  },
);

var TabContainerList = function TabContainerList(_ref) {
  var options = _ref.options,
    activeTab = _ref.activeTab;

  var optionsWithKey = reactKeyIndex(
    [].concat(toConsumableArray(Array(options.length))),
    1,
  );
  return React__default.createElement(
    React.Fragment,
    null,
    options.map(function(item, key) {
      return (
        activeTab === key &&
        React__default.createElement(
          TabContainer,
          { key: 'ComposedTabContainer-' + optionsWithKey[key] },
          item,
        )
      );
    }),
  );
};

TabContainerList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
};

var ComposedTabs = (function(_PureComponent) {
  inherits(ComposedTabs, _PureComponent);

  function ComposedTabs() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ComposedTabs);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref =
          ComposedTabs.__proto__ ||
          Object.getPrototypeOf(ComposedTabs)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.state = {
        active: 0,
      }),
      (_this.onClick = function(id) {
        return function() {
          _this.setState({ active: id });
        };
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(ComposedTabs, [
    {
      key: 'render',
      value: function render() {
        var options = this.props.options;
        var active = this.state.active;

        return React__default.createElement(
          'div',
          null,
          React__default.createElement(TabButtonList, {
            activeTab: active,
            options: Object.keys(options),
            onClick: this.onClick,
          }),
          React__default.createElement(TabContainerList, {
            activeTab: active,
            options: Object.values(options),
          }),
        );
      },
    },
  ]);
  return ComposedTabs;
})(React.PureComponent);

ComposedTabs.propTypes = {
  /** Tab Component Options */
  options: PropTypes.object.isRequired,
};

var _templateObject$7 = taggedTemplateLiteral(
  [
    "\n  display: inline-block;\n  position: relative;\n  [type='checkbox'],\n  [type='checkbox'] {\n    position: absolute;\n    visibility: hidden;\n    + label {\n      cursor: pointer;\n      flex-direction: row;\n      align-items: center;\n      display: flex;\n      &:before {\n        border: 1px solid ",
    ';\n        background: ',
    ';\n        margin-right: ',
    ";\n        width: 8px;\n        height: 8px;\n        border-radius: 100%;\n        content: ' ';\n      }\n    }\n    &:checked {\n      + label {\n        &:before {\n          border: 1px solid\n            ",
    ';\n          background: ',
    ';\n        }\n      }\n    }\n  }\n',
  ],
  [
    "\n  display: inline-block;\n  position: relative;\n  [type='checkbox'],\n  [type='checkbox'] {\n    position: absolute;\n    visibility: hidden;\n    + label {\n      cursor: pointer;\n      flex-direction: row;\n      align-items: center;\n      display: flex;\n      &:before {\n        border: 1px solid ",
    ';\n        background: ',
    ';\n        margin-right: ',
    ";\n        width: 8px;\n        height: 8px;\n        border-radius: 100%;\n        content: ' ';\n      }\n    }\n    &:checked {\n      + label {\n        &:before {\n          border: 1px solid\n            ",
    ';\n          background: ',
    ';\n        }\n      }\n    }\n  }\n',
  ],
);

var IndicatorStyled = styled__default.div(
  _templateObject$7,
  function(_ref) {
    var theme = _ref.theme;
    return curriedLighten(0.2, theme.colors.grey200);
  },
  function(_ref2) {
    var theme = _ref2.theme;
    return theme.colors.grey200;
  },
  function(_ref3) {
    var theme = _ref3.theme;
    return theme.spacings.byte;
  },
  function(_ref4) {
    var theme = _ref4.theme,
      color = _ref4.color;
    return color || theme.colors.grey100;
  },
  function(_ref5) {
    var theme = _ref5.theme,
      color = _ref5.color;
    return color || theme.colors.grey100;
  },
);

var Checkbox = (function(_PureComponent) {
  inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Checkbox);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = possibleConstructorReturn(
        this,
        (_ref =
          Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.state = {
        selectedValue: _this.props.initialValue || false,
      }),
      (_this.handleChange = function(event) {
        event.persist();

        _this.setState(
          { selectedValue: !_this.state.selectedValue },
          function() {
            return _this.props.onChange(event.target.checked);
          },
        );
      }),
      _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(Checkbox, [
    {
      key: 'render',
      value: function render() {
        var selectedValue = this.state.selectedValue;
        var _props = this.props,
          id = _props.id,
          label = _props.label,
          name = _props.name;

        return React__default.createElement(
          React.Fragment,
          null,
          React__default.createElement('input', {
            id: id,
            name: name,
            type: 'checkbox',
            onChange: this.handleChange,
            checked: selectedValue,
          }),
          React__default.createElement('label', { htmlFor: id }, label),
        );
      },
    },
  ]);
  return Checkbox;
})(React.PureComponent);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.bool,
};

var Indicator = function Indicator(props) {
  return React__default.createElement(
    IndicatorStyled,
    { color: props.color },
    React__default.createElement(Checkbox, props),
  );
};

Indicator.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialValue: PropTypes.bool,
  color: PropTypes.string,
};

var _templateObject$8 = taggedTemplateLiteral(
  [
    '\n  overflow: hidden;\n  width: 100%;\n  min-height: 40px;\n  position: relative;\n  background-color: ',
    ';\n',
  ],
  [
    '\n  overflow: hidden;\n  width: 100%;\n  min-height: 40px;\n  position: relative;\n  background-color: ',
    ';\n',
  ],
);

var CellStyled = styled__default.div(_templateObject$8, function(_ref) {
  var type = _ref.type,
    theme = _ref.theme;
  return type === 'forecast' ? theme.colors.grey400 : theme.colors.grey300;
});

var calculatePercentage = function calculatePercentage(context, target) {
  return target / context * 100;
};

var _templateObject$9 = taggedTemplateLiteral(
  [
    '\n  color: white;\n  position: absolute;\n  height: 25px;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  background-color: ',
    ';\n  width: ',
    ';\n  ',
    ';\n',
  ],
  [
    '\n  color: white;\n  position: absolute;\n  height: 25px;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  background-color: ',
    ';\n  width: ',
    ';\n  ',
    ';\n',
  ],
);

var TotalBarStyled = styled__default.span(
  _templateObject$9,
  function(_ref) {
    var type = _ref.type,
      theme = _ref.theme;
    return type === 'forecast'
      ? theme.colors.primary300
      : theme.colors.primary500;
  },
  function(_ref2) {
    var width = _ref2.width;
    return width > 0 ? width + '%' : 'auto';
  },
  transitions('width .5s ease-in-out .5s'),
);

var TotalNumber = function TotalNumber(_ref) {
  var width = _ref.width,
    type = _ref.type;
  return React__default.createElement(TotalBarStyled, {
    width: width,
    type: type,
  });
};

TotalNumber.propTypes = {
  type: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

var _templateObject$10 = taggedTemplateLiteral(
  [
    '\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  transform: translateY(-50%);\n  z-index: 2;\n  font-size: 11px;\n',
  ],
  [
    '\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 5px;\n  transform: translateY(-50%);\n  z-index: 2;\n  font-size: 11px;\n',
  ],
);

var TotalNumberStyled = styled__default.span(_templateObject$10);

var TotalNumber$1 = function TotalNumber(_ref) {
  var total = _ref.total;
  return React__default.createElement(TotalNumberStyled, null, total);
};

TotalNumber$1.propTypes = {
  total: PropTypes.number.isRequired,
};

var Total = function Total(_ref) {
  var type = _ref.type,
    total = _ref.total,
    totalOfTheWeek = _ref.totalOfTheWeek;
  return React__default.createElement(
    React.Fragment,
    null,
    React__default.createElement(TotalNumber, {
      type: type,
      width: Math.round(calculatePercentage(totalOfTheWeek, total)),
    }),
    React__default.createElement(TotalNumber$1, { total: total }),
  );
};

Total.propTypes = {
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['forecast', 'actual']).isRequired,
};

var _templateObject$11 = taggedTemplateLiteral(
  [
    '\n  color: white;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  z-index: 2;\n  font-size: 11px;\n  color: ',
    ';\n',
  ],
  [
    '\n  color: white;\n  position: absolute;\n  top: 50%;\n  right: 15px;\n  transform: translateY(-50%);\n  z-index: 2;\n  font-size: 11px;\n  color: ',
    ';\n',
  ],
);

var PercentageStyled = styled__default.span(_templateObject$11, function(_ref) {
  var theme = _ref.theme;
  return theme.colors.primary400;
});

var Percentage = function Percentage(_ref) {
  var total = _ref.total,
    totalOfTheWeek = _ref.totalOfTheWeek;
  return React__default.createElement(
    PercentageStyled,
    null,
    Math.round(calculatePercentage(totalOfTheWeek, total)),
    '%',
  );
};

Percentage.propTypes = {
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
};

var Cell$1 = function Cell(_ref) {
  var total = _ref.total,
    totalOfTheWeek = _ref.totalOfTheWeek,
    type = _ref.type;
  return React__default.createElement(
    CellStyled,
    { type: type },
    React__default.createElement(Total, {
      type: type,
      totalOfTheWeek: totalOfTheWeek,
      total: total,
    }),
    React__default.createElement(Percentage, {
      totalOfTheWeek: totalOfTheWeek,
      total: total,
    }),
  );
};

Cell$1.propTypes = {
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['forecast', 'actual']).isRequired,
};

var Prediction = function Prediction(props) {
  return React__default.createElement(Cell$1, props);
};

Prediction.propTypes = {
  /** Total of the day */
  total: PropTypes.number.isRequired,
  totalOfTheWeek: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['forecast', 'actual']).isRequired,
};

// Using bootstrap .form-control for now.
// However, the plan is to get rid of it in the future
var Input = function Input(_ref) {
  var inputRef = _ref.inputRef,
    placeholder = _ref.placeholder,
    props = objectWithoutProperties(_ref, ['inputRef', 'placeholder']);
  return React__default.createElement(
    'input',
    _extends(
      {
        className: 'form-control',
        // this is necessary to cover the <MaskedInput /> case
      },
      typeof inputRef === 'function'
        ? {
            ref: function ref(input) {
              return inputRef(input);
            },
          }
        : inputRef,
      {
        placeholder: placeholder,
      },
      props,
    ),
  );
};

Input.propTypes = {
  /** The inputRef, it's necessary to cover <MaskedInput /> case */
  inputRef: PropTypes.any,
  /** For instance, DD.MM.YYYY */
  placeholder: PropTypes.string,
};

var reactTextMask = createCommonjsModule(function(module, exports) {
  !(function(e, t) {
    module.exports = t(React__default);
  })(commonjsGlobal, function(e) {
    return (function(e) {
      function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { exports: {}, id: n, loaded: !1 });
        return (
          e[n].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
        );
      }
      var r = {};
      return (t.m = e), (t.c = r), (t.p = ''), t(0);
    })([
      function(e, t, r) {
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e, t) {
          var r = {};
          for (var n in e)
            t.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
          return r;
        }
        function i(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function a(e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
        }
        function u(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.conformToMask = void 0);
        var l =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          s = (function() {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  'value' in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function(t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })(),
          f = r(2);
        Object.defineProperty(t, 'conformToMask', {
          enumerable: !0,
          get: function() {
            return n(f).default;
          },
        });
        var c = r(11),
          p = n(c),
          d = r(9),
          h = n(d),
          v = r(5),
          y = n(v),
          m = (function(e) {
            function t() {
              var e;
              i(this, t);
              for (var r = arguments.length, n = Array(r), o = 0; o < r; o++)
                n[o] = arguments[o];
              var u = a(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(n),
                ),
              );
              return (
                (u.onBlur = u.onBlur.bind(u)),
                (u.onChange = u.onChange.bind(u)),
                u
              );
            }
            return (
              u(t, e),
              s(t, [
                {
                  key: 'initTextMask',
                  value: function() {
                    var e = this.props,
                      t = this.props.value;
                    (this.textMaskInputElement = (0, y.default)(
                      l({ inputElement: this.inputElement }, e),
                    )),
                      this.textMaskInputElement.update(t);
                  },
                },
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.initTextMask();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function() {
                    this.initTextMask();
                  },
                },
                {
                  key: 'render',
                  value: function e() {
                    var t = this,
                      r = this.props,
                      e = r.render,
                      n = o(r, ['render']);
                    delete n.mask,
                      delete n.guide,
                      delete n.pipe,
                      delete n.placeholderChar,
                      delete n.keepCharPositions,
                      delete n.value,
                      delete n.onBlur,
                      delete n.onChange,
                      delete n.showMask;
                    var i = function(e) {
                      return (t.inputElement = e);
                    };
                    return e(
                      i,
                      l(
                        {
                          onBlur: this.onBlur,
                          onChange: this.onChange,
                          defaultValue: this.props.value,
                        },
                        n,
                      ),
                    );
                  },
                },
                {
                  key: 'onChange',
                  value: function(e) {
                    this.textMaskInputElement.update(),
                      'function' == typeof this.props.onChange &&
                        this.props.onChange(e);
                  },
                },
                {
                  key: 'onBlur',
                  value: function(e) {
                    'function' == typeof this.props.onBlur &&
                      this.props.onBlur(e);
                  },
                },
              ]),
              t
            );
          })(p.default.Component);
        (t.default = m),
          (m.propTypes = {
            mask: h.default.oneOfType([
              h.default.array,
              h.default.func,
              h.default.bool,
              h.default.shape({
                mask: h.default.oneOfType([h.default.array, h.default.func]),
                pipe: h.default.func,
              }),
            ]).isRequired,
            guide: h.default.bool,
            value: h.default.oneOfType([h.default.string, h.default.number]),
            pipe: h.default.func,
            placeholderChar: h.default.string,
            keepCharPositions: h.default.bool,
            showMask: h.default.bool,
          }),
          (m.defaultProps = {
            render: function(e, t) {
              return p.default.createElement('input', l({ ref: e }, t));
            },
          });
      },
      function(e, t) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.placeholderChar = '_'),
          (t.strFunction = 'function');
      },
      function(e, t, r) {
        function n() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : l,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u,
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          if (!(0, i.isArray)(t)) {
            if (
              ('undefined' == typeof t ? 'undefined' : o(t)) !== a.strFunction
            )
              throw new Error(
                'Text-mask:conformToMask; The mask property must be an array.',
              );
            (t = t(e, r)),
              (t = (0, i.processCaretTraps)(t).maskWithoutCaretTraps);
          }
          var n = r.guide,
            s = void 0 === n || n,
            f = r.previousConformedValue,
            c = void 0 === f ? l : f,
            p = r.placeholderChar,
            d = void 0 === p ? a.placeholderChar : p,
            h = r.placeholder,
            v = void 0 === h ? (0, i.convertMaskToPlaceholder)(t, d) : h,
            y = r.currentCaretPosition,
            m = r.keepCharPositions,
            b = s === !1 && void 0 !== c,
            g = e.length,
            k = c.length,
            C = v.length,
            O = t.length,
            T = g - k,
            P = T > 0,
            x = y + (P ? -T : 0),
            w = x + Math.abs(T);
          if (m === !0 && !P) {
            for (var _ = l, M = x; M < w; M++) v[M] === d && (_ += d);
            e = e.slice(0, x) + _ + e.slice(x, g);
          }
          for (
            var S = e.split(l).map(function(e, t) {
                return { char: e, isNew: t >= x && t < w };
              }),
              j = g - 1;
            j >= 0;
            j--
          ) {
            var E = S[j].char;
            if (E !== d) {
              var R = j >= x && k === O;
              E === v[R ? j - T : j] && S.splice(j, 1);
            }
          }
          var V = l,
            A = !1;
          e: for (var N = 0; N < C; N++) {
            var B = v[N];
            if (B === d) {
              if (S.length > 0)
                for (; S.length > 0; ) {
                  var I = S.shift(),
                    F = I.char,
                    q = I.isNew;
                  if (F === d && b !== !0) {
                    V += d;
                    continue e;
                  }
                  if (t[N].test(F)) {
                    if (m === !0 && q !== !1 && c !== l && s !== !1 && P) {
                      for (var D = S.length, L = null, W = 0; W < D; W++) {
                        var J = S[W];
                        if (J.char !== d && J.isNew === !1) break;
                        if (J.char === d) {
                          L = W;
                          break;
                        }
                      }
                      null !== L ? ((V += F), S.splice(L, 1)) : N--;
                    } else V += F;
                    continue e;
                  }
                  A = !0;
                }
              b === !1 && (V += v.substr(N, C));
              break;
            }
            V += B;
          }
          if (b && P === !1) {
            for (var U = null, H = 0; H < V.length; H++) v[H] === d && (U = H);
            V = null !== U ? V.substr(0, U + 1) : l;
          }
          return { conformedValue: V, meta: { someCharsRejected: A } };
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var o =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
        t.default = n;
        var i = r(3),
          a = r(1),
          u = [],
          l = '';
      },
      function(e, t, r) {
        function n() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : s,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : l.placeholderChar;
          if (!o(e))
            throw new Error(
              'Text-mask:convertMaskToPlaceholder; The mask property must be an array.',
            );
          if (e.indexOf(t) !== -1)
            throw new Error(
              'Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n' +
                ('The placeholder character that was received is: ' +
                  JSON.stringify(t) +
                  '\n\n') +
                ('The mask that was received is: ' + JSON.stringify(e)),
            );
          return e
            .map(function(e) {
              return e instanceof RegExp ? t : e;
            })
            .join('');
        }
        function o(e) {
          return (Array.isArray && Array.isArray(e)) || e instanceof Array;
        }
        function i(e) {
          return 'string' == typeof e || e instanceof String;
        }
        function a(e) {
          return 'number' == typeof e && void 0 === e.length && !isNaN(e);
        }
        function u(e) {
          for (var t = [], r = void 0; (r = e.indexOf(f)), r !== -1; )
            t.push(r), e.splice(r, 1);
          return { maskWithoutCaretTraps: e, indexes: t };
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.convertMaskToPlaceholder = n),
          (t.isArray = o),
          (t.isString = i),
          (t.isNumber = a),
          (t.processCaretTraps = u);
        var l = r(1),
          s = [],
          f = '[]';
      },
      function(e, t) {
        function r(e) {
          var t = e.previousConformedValue,
            r = void 0 === t ? o : t,
            i = e.previousPlaceholder,
            a = void 0 === i ? o : i,
            u = e.currentCaretPosition,
            l = void 0 === u ? 0 : u,
            s = e.conformedValue,
            f = e.rawValue,
            c = e.placeholderChar,
            p = e.placeholder,
            d = e.indexesOfPipedChars,
            h = void 0 === d ? n : d,
            v = e.caretTrapIndexes,
            y = void 0 === v ? n : v;
          if (0 === l || !f.length) return 0;
          var m = f.length,
            b = r.length,
            g = p.length,
            k = s.length,
            C = m - b,
            O = C > 0,
            T = 0 === b,
            P = C > 1 && !O && !T;
          if (P) return l;
          var x = O && (r === s || s === p),
            w = 0,
            _ = void 0,
            M = void 0;
          if (x) w = l - C;
          else {
            var S = s.toLowerCase(),
              j = f.toLowerCase(),
              E = j.substr(0, l).split(o),
              R = E.filter(function(e) {
                return S.indexOf(e) !== -1;
              });
            M = R[R.length - 1];
            var V = a
                .substr(0, R.length)
                .split(o)
                .filter(function(e) {
                  return e !== c;
                }).length,
              A = p
                .substr(0, R.length)
                .split(o)
                .filter(function(e) {
                  return e !== c;
                }).length,
              N = A !== V,
              B =
                void 0 !== a[R.length - 1] &&
                void 0 !== p[R.length - 2] &&
                a[R.length - 1] !== c &&
                a[R.length - 1] !== p[R.length - 1] &&
                a[R.length - 1] === p[R.length - 2];
            !O &&
              (N || B) &&
              V > 0 &&
              p.indexOf(M) > -1 &&
              void 0 !== f[l] &&
              ((_ = !0), (M = f[l]));
            for (
              var I = h.map(function(e) {
                  return S[e];
                }),
                F = I.filter(function(e) {
                  return e === M;
                }).length,
                q = R.filter(function(e) {
                  return e === M;
                }).length,
                D = p
                  .substr(0, p.indexOf(c))
                  .split(o)
                  .filter(function(e, t) {
                    return e === M && f[t] !== e;
                  }).length,
                L = D + q + F + (_ ? 1 : 0),
                W = 0,
                J = 0;
              J < k;
              J++
            ) {
              var U = S[J];
              if (((w = J + 1), U === M && W++, W >= L)) break;
            }
          }
          if (O) {
            for (var H = w, Y = w; Y <= g; Y++)
              if (
                (p[Y] === c && (H = Y),
                p[Y] === c || y.indexOf(Y) !== -1 || Y === g)
              )
                return H;
          } else if (_) {
            for (var z = w - 1; z >= 0; z--)
              if (s[z] === M || y.indexOf(z) !== -1 || 0 === z) return z;
          } else
            for (var G = w; G >= 0; G--)
              if (p[G - 1] === c || y.indexOf(G) !== -1 || 0 === G) return G;
        }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = r);
        var n = [],
          o = '';
      },
      function(e, t, r) {
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function o(e) {
          var t = {
            previousConformedValue: void 0,
            previousPlaceholder: void 0,
          };
          return {
            state: t,
            update: function(r) {
              var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e,
                o = n.inputElement,
                s = n.mask,
                c = n.guide,
                y = n.pipe,
                b = n.placeholderChar,
                g = void 0 === b ? h.placeholderChar : b,
                k = n.keepCharPositions,
                C = void 0 !== k && k,
                O = n.showMask,
                T = void 0 !== O && O;
              if (
                ('undefined' == typeof r && (r = o.value),
                r !== t.previousConformedValue)
              ) {
                ('undefined' == typeof s ? 'undefined' : l(s)) === m &&
                  void 0 !== s.pipe &&
                  void 0 !== s.mask &&
                  ((y = s.pipe), (s = s.mask));
                var P = void 0,
                  x = void 0;
                if (
                  (s instanceof Array &&
                    (P = (0, d.convertMaskToPlaceholder)(s, g)),
                  s !== !1)
                ) {
                  var w = a(r),
                    _ = o.selectionEnd,
                    M = t.previousConformedValue,
                    S = t.previousPlaceholder,
                    j = void 0;
                  if (
                    ('undefined' == typeof s ? 'undefined' : l(s)) ===
                    h.strFunction
                  ) {
                    if (
                      ((x = s(w, {
                        currentCaretPosition: _,
                        previousConformedValue: M,
                        placeholderChar: g,
                      })),
                      x === !1)
                    )
                      return;
                    var E = (0, d.processCaretTraps)(x),
                      R = E.maskWithoutCaretTraps,
                      V = E.indexes;
                    (x = R),
                      (j = V),
                      (P = (0, d.convertMaskToPlaceholder)(x, g));
                  } else x = s;
                  var A = {
                      previousConformedValue: M,
                      guide: c,
                      placeholderChar: g,
                      pipe: y,
                      placeholder: P,
                      currentCaretPosition: _,
                      keepCharPositions: C,
                    },
                    N = (0, p.default)(w, x, A),
                    B = N.conformedValue,
                    I =
                      ('undefined' == typeof y ? 'undefined' : l(y)) ===
                      h.strFunction,
                    F = {};
                  I &&
                    ((F = y(B, u({ rawValue: w }, A))),
                    F === !1
                      ? (F = { value: M, rejected: !0 })
                      : (0, d.isString)(F) && (F = { value: F }));
                  var q = I ? F.value : B,
                    D = (0, f.default)({
                      previousConformedValue: M,
                      previousPlaceholder: S,
                      conformedValue: q,
                      placeholder: P,
                      rawValue: w,
                      currentCaretPosition: _,
                      placeholderChar: g,
                      indexesOfPipedChars: F.indexesOfPipedChars,
                      caretTrapIndexes: j,
                    }),
                    L = q === P && 0 === D,
                    W = T ? P : v,
                    J = L ? W : q;
                  (t.previousConformedValue = J),
                    (t.previousPlaceholder = P),
                    o.value !== J && ((o.value = J), i(o, D));
                }
              }
            },
          };
        }
        function i(e, t) {
          document.activeElement === e &&
            (b
              ? g(function() {
                  return e.setSelectionRange(t, t, y);
                }, 0)
              : e.setSelectionRange(t, t, y));
        }
        function a(e) {
          if ((0, d.isString)(e)) return e;
          if ((0, d.isNumber)(e)) return String(e);
          if (void 0 === e || null === e) return v;
          throw new Error(
            "The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " +
              JSON.stringify(e),
          );
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var u =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          l =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                };
        t.default = o;
        var s = r(4),
          f = n(s),
          c = r(2),
          p = n(c),
          d = r(3),
          h = r(1),
          v = '',
          y = 'none',
          m = 'object',
          b =
            'undefined' != typeof navigator &&
            /Android/i.test(navigator.userAgent),
          g =
            'undefined' != typeof requestAnimationFrame
              ? requestAnimationFrame
              : setTimeout;
      },
      function(e, t) {
        function r(e) {
          return function() {
            return e;
          };
        }
        var n = function() {};
        (n.thatReturns = r),
          (n.thatReturnsFalse = r(!1)),
          (n.thatReturnsTrue = r(!0)),
          (n.thatReturnsNull = r(null)),
          (n.thatReturnsThis = function() {
            return this;
          }),
          (n.thatReturnsArgument = function(e) {
            return e;
          }),
          (e.exports = n);
      },
      function(e, t, r) {
        function n(e, t, r, n, i, a, u, l) {
          if (!e) {
            var s;
            if (void 0 === t)
              s = new Error(
                'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
              );
            else {
              var f = [r, n, i, a, u, l],
                c = 0;
              (s = new Error(
                t.replace(/%s/g, function() {
                  return f[c++];
                }),
              )),
                (s.name = 'Invariant Violation');
            }
            throw ((s.framesToPop = 1), s);
          }
        }
        e.exports = n;
      },
      function(e, t, r) {
        var n = r(6),
          o = r(7),
          i = r(10);
        e.exports = function() {
          function e(e, t, r, n, a, u) {
            u !== i &&
              o(
                !1,
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              );
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
          };
          return (r.checkPropTypes = n), (r.PropTypes = r), r;
        };
      },
      function(e, t, r) {
        e.exports = r(8)();
      },
      function(e, t) {
        var r = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        e.exports = r;
      },
      function(t, r) {
        t.exports = e;
      },
    ]);
  });
});

var MaskedInput = unwrapExports(reactTextMask);
var reactTextMask_1 = reactTextMask.reactTextMask;

var InputMask = function InputMask(_ref) {
  var guide = _ref.guide,
    mask = _ref.mask,
    placeholder = _ref.placeholder,
    id = _ref.id,
    value = _ref.value,
    onChange = _ref.onChange,
    onBlur = _ref.onBlur;
  return React__default.createElement(MaskedInput, {
    mask: mask,
    guide: guide,
    placeholder: placeholder,
    value: value,
    id: id,
    onChange: onChange,
    onBlur: onBlur,
    render: function render(ref, props) {
      return React__default.createElement(
        Input,
        _extends({ inputRef: ref }, props),
      );
    },
  });
};

InputMask.propTypes = {
  /** Mask can be Array or Func. Check `react-text-mask` for more info about it */
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  /** input id */
  id: PropTypes.string.isRequired,
  /** onChange callback, if you are using redux-form it's going likely to be `input.change` */
  onChange: PropTypes.func.isRequired,
  /** input value */
  value: PropTypes.any,
  /** onBlur callback */
  onBlur: PropTypes.func,
  /** input placeholder */
  placeholder: PropTypes.string,
  /** Set if mask will guide the user or not. */
  guide: PropTypes.bool,
};

var _templateObject$12 = taggedTemplateLiteral(
  ['\n  display: ', ';\n'],
  ['\n  display: ', ';\n'],
);

var SpacingBlockStyled = styled__default('div')(_templateObject$12, function(
  _ref,
) {
  var inline = _ref.inline;
  return inline ? 'inline-block' : 'block';
});

var _templateObject$13 = taggedTemplateLiteral(
  ['\n  ', ';\n'],
  ['\n  ', ';\n'],
);

var SpacingStyled = SpacingBlockStyled.extend(_templateObject$13, function(
  _ref,
) {
  var type = _ref.type,
    top = _ref.top,
    right = _ref.right,
    bottom = _ref.bottom,
    left = _ref.left,
    theme = _ref.theme;
  return (
    '\n    ' +
    type +
    '-top: ' +
    (top ? theme.spacings.kilo : 'auto') +
    ';\n    ' +
    type +
    '-bottom: ' +
    (bottom ? theme.spacings.kilo : 'auto') +
    ';\n    ' +
    type +
    '-left: ' +
    (left ? theme.spacings.kilo : 'auto') +
    ';\n    ' +
    type +
    '-right: ' +
    (right ? theme.spacings.kilo : 'auto') +
    ';\n  '
  );
});

var MARGIN = 'margin';
var PADDING = 'padding';

var Spacing = function Spacing(_ref) {
  var children = _ref.children,
    props = objectWithoutProperties(_ref, ['children']);
  return React__default.createElement(SpacingStyled, props, children);
};

Spacing.propTypes = {
  type: PropTypes.oneOf([MARGIN, PADDING]).isRequired,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

Spacing.defaultProps = {
  type: MARGIN,
};

var _templateObject$14 = taggedTemplateLiteral(
  [
    '\n  font-size: ',
    ';\n  font-weight: ',
    ';\n  line-height: ',
    ';\n  margin: 0 0 ',
    ';\n',
  ],
  [
    '\n  font-size: ',
    ';\n  font-weight: ',
    ';\n  line-height: ',
    ';\n  margin: 0 0 ',
    ';\n',
  ],
);

var TYPES = {
  h1: {
    fontSize: 'giga',
    lineHeight: 'kilo',
  },
  h2: {
    fontSize: 'mega',
    lineHeight: 'byte',
  },
  h3: {
    fontSize: 'kilo',
    lineHeight: 'byte',
  },
  h4: {
    fontSize: 'byte',
    lineHeight: 'bit',
  },
  h5: {
    fontSize: 'bit',
    lineHeight: 'bit',
  },
};

var HeadingStyled = styled__default('h3')(
  _templateObject$14,
  function(_ref) {
    var theme = _ref.theme,
      as = _ref.as;
    return theme.fontSize[(TYPES[as] || {}).fontSize];
  },
  function(_ref2) {
    var theme = _ref2.theme,
      bold = _ref2.bold;
    return theme.fontWeight[bold ? 'semiBold' : 'regular'];
  },
  function(_ref3) {
    var theme = _ref3.theme,
      as = _ref3.as;
    return theme.lineHeight[(TYPES[as] || {}).lineHeight];
  },
  function(_ref4) {
    var theme = _ref4.theme,
      noMargin = _ref4.noMargin;
    return noMargin ? 0 : theme.spacings.kilo;
  },
);

var Heading = function Heading(_ref) {
  var children = _ref.children,
    props = objectWithoutProperties(_ref, ['children']);

  var RenderAsProp = HeadingStyled.withComponent(props.as);
  return React__default.createElement(RenderAsProp, props, children);
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  noMargin: PropTypes.bool.isRequired,
  bold: PropTypes.bool.isRequired,
};

Heading.defaultProps = {
  as: 'h3',
  noMargin: false,
  bold: false,
};

var cssKeyframer = createCommonjsModule(function(module, exports) {
  /*!
 * css-keyframer
 * Dynamic css animation keyframes Manipulation library.
 *
 * @author tsuyoshiwada
 * @license MIT
 * @version 1.0.1
 */

  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var commonjsGlobal$$1 =
      typeof window !== 'undefined'
        ? window
        : typeof commonjsGlobal !== 'undefined'
          ? commonjsGlobal
          : typeof self !== 'undefined'
            ? self
            : {};

    function unwrapExports$$1(x) {
      return x && x.__esModule ? x['default'] : x;
    }

    function createCommonjsModule$$1(fn, module) {
      return (
        (module = { exports: {} }), fn(module, module.exports), module.exports
      );
    }

    var prefixProps = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = {
        Webkit: {
          transform: true,
          transformOrigin: true,
          transformOriginX: true,
          transformOriginY: true,
          backfaceVisibility: true,
          perspective: true,
          perspectiveOrigin: true,
          transformStyle: true,
          transformOriginZ: true,
          animation: true,
          animationDelay: true,
          animationDirection: true,
          animationFillMode: true,
          animationDuration: true,
          animationIterationCount: true,
          animationName: true,
          animationPlayState: true,
          animationTimingFunction: true,
          appearance: true,
          userSelect: true,
          fontKerning: true,
          textEmphasisPosition: true,
          textEmphasis: true,
          textEmphasisStyle: true,
          textEmphasisColor: true,
          boxDecorationBreak: true,
          clipPath: true,
          maskImage: true,
          maskMode: true,
          maskRepeat: true,
          maskPosition: true,
          maskClip: true,
          maskOrigin: true,
          maskSize: true,
          maskComposite: true,
          mask: true,
          maskBorderSource: true,
          maskBorderMode: true,
          maskBorderSlice: true,
          maskBorderWidth: true,
          maskBorderOutset: true,
          maskBorderRepeat: true,
          maskBorder: true,
          maskType: true,
          textDecorationStyle: true,
          textDecorationSkip: true,
          textDecorationLine: true,
          textDecorationColor: true,
          filter: true,
          fontFeatureSettings: true,
          breakAfter: true,
          breakBefore: true,
          breakInside: true,
          columnCount: true,
          columnFill: true,
          columnGap: true,
          columnRule: true,
          columnRuleColor: true,
          columnRuleStyle: true,
          columnRuleWidth: true,
          columns: true,
          columnSpan: true,
          columnWidth: true,
          flex: true,
          flexBasis: true,
          flexDirection: true,
          flexGrow: true,
          flexFlow: true,
          flexShrink: true,
          flexWrap: true,
          alignContent: true,
          alignItems: true,
          alignSelf: true,
          justifyContent: true,
          order: true,
          transition: true,
          transitionDelay: true,
          transitionDuration: true,
          transitionProperty: true,
          transitionTimingFunction: true,
          backdropFilter: true,
          scrollSnapType: true,
          scrollSnapPointsX: true,
          scrollSnapPointsY: true,
          scrollSnapDestination: true,
          scrollSnapCoordinate: true,
          shapeImageThreshold: true,
          shapeImageMargin: true,
          shapeImageOutside: true,
          hyphens: true,
          flowInto: true,
          flowFrom: true,
          regionFragment: true,
          textSizeAdjust: true,
        },
        Moz: {
          appearance: true,
          userSelect: true,
          boxSizing: true,
          textAlignLast: true,
          textDecorationStyle: true,
          textDecorationSkip: true,
          textDecorationLine: true,
          textDecorationColor: true,
          tabSize: true,
          hyphens: true,
          fontFeatureSettings: true,
          breakAfter: true,
          breakBefore: true,
          breakInside: true,
          columnCount: true,
          columnFill: true,
          columnGap: true,
          columnRule: true,
          columnRuleColor: true,
          columnRuleStyle: true,
          columnRuleWidth: true,
          columns: true,
          columnSpan: true,
          columnWidth: true,
        },
        ms: {
          flex: true,
          flexBasis: false,
          flexDirection: true,
          flexGrow: false,
          flexFlow: true,
          flexShrink: false,
          flexWrap: true,
          alignContent: false,
          alignItems: false,
          alignSelf: false,
          justifyContent: false,
          order: false,
          transform: true,
          transformOrigin: true,
          transformOriginX: true,
          transformOriginY: true,
          userSelect: true,
          wrapFlow: true,
          wrapThrough: true,
          wrapMargin: true,
          scrollSnapType: true,
          scrollSnapPointsX: true,
          scrollSnapPointsY: true,
          scrollSnapDestination: true,
          scrollSnapCoordinate: true,
          touchAction: true,
          hyphens: true,
          flowInto: true,
          flowFrom: true,
          breakBefore: true,
          breakAfter: true,
          breakInside: true,
          regionFragment: true,
          gridTemplateColumns: true,
          gridTemplateRows: true,
          gridTemplateAreas: true,
          gridTemplate: true,
          gridAutoColumns: true,
          gridAutoRows: true,
          gridAutoFlow: true,
          grid: true,
          gridRowStart: true,
          gridColumnStart: true,
          gridRowEnd: true,
          gridRow: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnGap: true,
          gridRowGap: true,
          gridArea: true,
          gridGap: true,
          textSizeAdjust: true,
        },
      };
      module.exports = exports['default'];
    });

    var capitalizeString = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      // helper to capitalize strings

      exports.default = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };

      module.exports = exports['default'];
    });

    var isPrefixedProperty = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      exports.default = function(property) {
        return property.match(/^(Webkit|Moz|O|ms)/) !== null;
      };

      module.exports = exports['default'];
    });

    var sortPrefixedStyle_1 = createCommonjsModule$$1(function(
      module,
      exports,
    ) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = sortPrefixedStyle;

      var _isPrefixedProperty = isPrefixedProperty;

      var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function sortPrefixedStyle(style) {
        return Object.keys(style)
          .sort(function(left, right) {
            if (
              (0, _isPrefixedProperty2.default)(left) &&
              !(0, _isPrefixedProperty2.default)(right)
            ) {
              return -1;
            } else if (
              !(0, _isPrefixedProperty2.default)(left) &&
              (0, _isPrefixedProperty2.default)(right)
            ) {
              return 1;
            }
            return 0;
          })
          .reduce(function(sortedStyle, prop) {
            sortedStyle[prop] = style[prop];
            return sortedStyle;
          }, {});
      }
      module.exports = exports['default'];
    });

    var position_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = position;
      function position(property, value) {
        if (property === 'position' && value === 'sticky') {
          return { position: ['-webkit-sticky', 'sticky'] };
        }
      }
      module.exports = exports['default'];
    });

    var joinPrefixedValue = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      // returns a style object with a single concated prefixed value string

      exports.default = function(property, value) {
        var replacer =
          arguments.length <= 2 || arguments[2] === undefined
            ? function(prefix, value) {
                return prefix + value;
              }
            : arguments[2];
        return _defineProperty(
          {},
          property,
          ['-webkit-', '-moz-', ''].map(function(prefix) {
            return replacer(prefix, value);
          }),
        );
      };

      module.exports = exports['default'];
    });

    var isPrefixedValue = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      exports.default = function(value) {
        if (Array.isArray(value)) value = value.join(',');

        return value.match(/-webkit-|-moz-|-ms-/) !== null;
      };

      module.exports = exports['default'];
    });

    var calc_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = calc;

      var _joinPrefixedValue = joinPrefixedValue;

      var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

      var _isPrefixedValue = isPrefixedValue;

      var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function calc(property, value) {
        if (
          typeof value === 'string' &&
          !(0, _isPrefixedValue2.default)(value) &&
          value.indexOf('calc(') > -1
        ) {
          return (0, _joinPrefixedValue2.default)(property, value, function(
            prefix,
            value,
          ) {
            return value.replace(/calc\(/g, prefix + 'calc(');
          });
        }
      }
      module.exports = exports['default'];
    });

    var cursor_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = cursor;

      var _joinPrefixedValue = joinPrefixedValue;

      var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var values = {
        'zoom-in': true,
        'zoom-out': true,
        grab: true,
        grabbing: true,
      };

      function cursor(property, value) {
        if (property === 'cursor' && values[value]) {
          return (0, _joinPrefixedValue2.default)(property, value);
        }
      }
      module.exports = exports['default'];
    });

    var flex_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = flex;
      var values = { flex: true, 'inline-flex': true };

      function flex(property, value) {
        if (property === 'display' && values[value]) {
          return {
            display: [
              '-webkit-box',
              '-moz-box',
              '-ms-' + value + 'box',
              '-webkit-' + value,
              value,
            ],
          };
        }
      }
      module.exports = exports['default'];
    });

    var sizing_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = sizing;

      var _joinPrefixedValue = joinPrefixedValue;

      var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var properties = {
        maxHeight: true,
        maxWidth: true,
        width: true,
        height: true,
        columnWidth: true,
        minWidth: true,
        minHeight: true,
      };
      var values = {
        'min-content': true,
        'max-content': true,
        'fill-available': true,
        'fit-content': true,
        'contain-floats': true,
      };

      function sizing(property, value) {
        if (properties[property] && values[value]) {
          return (0, _joinPrefixedValue2.default)(property, value);
        }
      }
      module.exports = exports['default'];
    });

    var gradient_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = gradient;

      var _joinPrefixedValue = joinPrefixedValue;

      var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

      var _isPrefixedValue = isPrefixedValue;

      var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

      function gradient(property, value) {
        if (
          typeof value === 'string' &&
          !(0, _isPrefixedValue2.default)(value) &&
          value.match(values) !== null
        ) {
          return (0, _joinPrefixedValue2.default)(property, value);
        }
      }
      module.exports = exports['default'];
    });

    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache = {};

    function hyphenateStyleName(string) {
      return string in cache
        ? cache[string]
        : (cache[string] = string
            .replace(uppercasePattern, '-$&')
            .toLowerCase()
            .replace(msPattern, '-ms-'));
    }

    var index = hyphenateStyleName;

    var transition_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = transition;

      var _hyphenateStyleName = index;

      var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

      var _capitalizeString = capitalizeString;

      var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

      var _isPrefixedValue = isPrefixedValue;

      var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

      var _prefixProps = prefixProps;

      var _prefixProps2 = _interopRequireDefault(_prefixProps);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var properties = {
        transition: true,
        transitionProperty: true,
        WebkitTransition: true,
        WebkitTransitionProperty: true,
      };

      function transition(property, value) {
        // also check for already prefixed transitions
        if (typeof value === 'string' && properties[property]) {
          var _ref2;

          var outputValue = prefixValue(value);
          var webkitOutput = outputValue
            .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
            .filter(function(value) {
              return value.match(/-moz-|-ms-/) === null;
            })
            .join(',');

          // if the property is already prefixed
          if (property.indexOf('Webkit') > -1) {
            return _defineProperty({}, property, webkitOutput);
          }

          return (
            (_ref2 = {}),
            _defineProperty(
              _ref2,
              'Webkit' + (0, _capitalizeString2.default)(property),
              webkitOutput,
            ),
            _defineProperty(_ref2, property, outputValue),
            _ref2
          );
        }
      }

      function prefixValue(value) {
        if ((0, _isPrefixedValue2.default)(value)) {
          return value;
        }

        // only split multi values, not cubic beziers
        var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

        // iterate each single value and check for transitioned properties
        // that need to be prefixed as well
        multipleValues.forEach(function(val, index$$1) {
          multipleValues[index$$1] = Object.keys(_prefixProps2.default).reduce(
            function(out, prefix) {
              var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

              Object.keys(_prefixProps2.default[prefix]).forEach(function(
                prop,
              ) {
                var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

                if (
                  val.indexOf(dashCaseProperty) > -1 &&
                  dashCaseProperty !== 'order'
                ) {
                  // join all prefixes and create a new value
                  out =
                    val.replace(
                      dashCaseProperty,
                      dashCasePrefix + dashCaseProperty,
                    ) +
                    ',' +
                    out;
                }
              });
              return out;
            },
            val,
          );
        });

        return multipleValues.join(',');
      }
      module.exports = exports['default'];
    });

    var flexboxIE_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = flexboxIE;

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var alternativeValues = {
        'space-around': 'distribute',
        'space-between': 'justify',
        'flex-start': 'start',
        'flex-end': 'end',
      };
      var alternativeProps = {
        alignContent: 'msFlexLinePack',
        alignSelf: 'msFlexItemAlign',
        alignItems: 'msFlexAlign',
        justifyContent: 'msFlexPack',
        order: 'msFlexOrder',
        flexGrow: 'msFlexPositive',
        flexShrink: 'msFlexNegative',
        flexBasis: 'msPreferredSize',
      };

      function flexboxIE(property, value) {
        if (alternativeProps[property]) {
          return _defineProperty(
            {},
            alternativeProps[property],
            alternativeValues[value] || value,
          );
        }
      }
      module.exports = exports['default'];
    });

    var flexboxOld_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = flexboxOld;

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var alternativeValues = {
        'space-around': 'justify',
        'space-between': 'justify',
        'flex-start': 'start',
        'flex-end': 'end',
        'wrap-reverse': 'multiple',
        wrap: 'multiple',
      };

      var alternativeProps = {
        alignItems: 'WebkitBoxAlign',
        justifyContent: 'WebkitBoxPack',
        flexWrap: 'WebkitBoxLines',
      };

      function flexboxOld(property, value) {
        if (property === 'flexDirection' && typeof value === 'string') {
          return {
            WebkitBoxOrient:
              value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
            WebkitBoxDirection:
              value.indexOf('reverse') > -1 ? 'reverse' : 'normal',
          };
        }
        if (alternativeProps[property]) {
          return _defineProperty(
            {},
            alternativeProps[property],
            alternativeValues[value] || value,
          );
        }
      }
      module.exports = exports['default'];
    });

    var prefixAll_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = prefixAll;

      var _prefixProps = prefixProps;

      var _prefixProps2 = _interopRequireDefault(_prefixProps);

      var _capitalizeString = capitalizeString;

      var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

      var _sortPrefixedStyle = sortPrefixedStyle_1;

      var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

      var _position = position_1;

      var _position2 = _interopRequireDefault(_position);

      var _calc = calc_1;

      var _calc2 = _interopRequireDefault(_calc);

      var _cursor = cursor_1;

      var _cursor2 = _interopRequireDefault(_cursor);

      var _flex = flex_1;

      var _flex2 = _interopRequireDefault(_flex);

      var _sizing = sizing_1;

      var _sizing2 = _interopRequireDefault(_sizing);

      var _gradient = gradient_1;

      var _gradient2 = _interopRequireDefault(_gradient);

      var _transition = transition_1;

      var _transition2 = _interopRequireDefault(_transition);

      var _flexboxIE = flexboxIE_1;

      var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

      var _flexboxOld = flexboxOld_1;

      var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      // special flexbox specifications

      var plugins = [
        _position2.default,
        _calc2.default,
        _cursor2.default,
        _sizing2.default,
        _gradient2.default,
        _transition2.default,
        _flexboxIE2.default,
        _flexboxOld2.default,
        _flex2.default,
      ];

      /**
       * Returns a prefixed version of the style object using all vendor prefixes
       * @param {Object} styles - Style object that gets prefixed properties added
       * @returns {Object} - Style object with prefixed properties and values
       */
      function prefixAll(styles) {
        Object.keys(styles).forEach(function(property) {
          var value = styles[property];
          if (value instanceof Object && !Array.isArray(value)) {
            // recurse through nested style objects
            styles[property] = prefixAll(value);
          } else {
            Object.keys(_prefixProps2.default).forEach(function(prefix) {
              var properties = _prefixProps2.default[prefix];
              // add prefixes if needed
              if (properties[property]) {
                styles[
                  prefix + (0, _capitalizeString2.default)(property)
                ] = value;
              }
            });
          }
        });

        Object.keys(styles).forEach(function(property) {
          [].concat(styles[property]).forEach(function(value, index) {
            // resolve every special plugins
            plugins.forEach(function(plugin) {
              return assignStyles(styles, plugin(property, value));
            });
          });
        });

        return (0, _sortPrefixedStyle2.default)(styles);
      }

      function assignStyles(base) {
        var extend =
          arguments.length <= 1 || arguments[1] === undefined
            ? {}
            : arguments[1];

        Object.keys(extend).forEach(function(property) {
          var baseValue = base[property];
          if (Array.isArray(baseValue)) {
            [].concat(extend[property]).forEach(function(value) {
              var valueIndex = baseValue.indexOf(value);
              if (valueIndex > -1) {
                base[property].splice(valueIndex, 1);
              }
              base[property].push(value);
            });
          } else {
            base[property] = extend[property];
          }
        });
      }
      module.exports = exports['default'];
    });

    var bowser = createCommonjsModule$$1(function(module) {
      /*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

      !(function(root, name, definition) {
        if ('object' != 'undefined' && module.exports)
          module.exports = definition();
        else if (typeof undefined == 'function' && undefined.amd)
          undefined(name, definition);
        else root[name] = definition();
      })(commonjsGlobal$$1, 'bowser', function() {
        /**
         * See useragents.js for examples of navigator.userAgent
         */

        var t = true;

        function detect(ua) {
          function getFirstMatch(regex) {
            var match = ua.match(regex);
            return (match && match.length > 1 && match[1]) || '';
          }

          function getSecondMatch(regex) {
            var match = ua.match(regex);
            return (match && match.length > 1 && match[2]) || '';
          }

          var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
            likeAndroid = /like android/i.test(ua),
            android = !likeAndroid && /android/i.test(ua),
            nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
            nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
            chromeos = /CrOS/.test(ua),
            silk = /silk/i.test(ua),
            sailfish = /sailfish/i.test(ua),
            tizen = /tizen/i.test(ua),
            webos = /(web|hpw)os/i.test(ua),
            windowsphone = /windows phone/i.test(ua),
            samsungBrowser = /SamsungBrowser/i.test(ua),
            windows = !windowsphone && /windows/i.test(ua),
            mac = !iosdevice && !silk && /macintosh/i.test(ua),
            linux =
              !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
            edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i),
            versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
            tablet = /tablet/i.test(ua),
            mobile = !tablet && /[^-]mobi/i.test(ua),
            xbox = /xbox/i.test(ua),
            result;

          if (/opera/i.test(ua)) {
            //  an old Opera
            result = {
              name: 'Opera',
              opera: t,
              version:
                versionIdentifier ||
                getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
            };
          } else if (/opr|opios/i.test(ua)) {
            // a new Opera
            result = {
              name: 'Opera',
              opera: t,
              version:
                getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) ||
                versionIdentifier,
            };
          } else if (/SamsungBrowser/i.test(ua)) {
            result = {
              name: 'Samsung Internet for Android',
              samsungBrowser: t,
              version:
                versionIdentifier ||
                getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
            };
          } else if (/coast/i.test(ua)) {
            result = {
              name: 'Opera Coast',
              coast: t,
              version:
                versionIdentifier ||
                getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
            };
          } else if (/yabrowser/i.test(ua)) {
            result = {
              name: 'Yandex Browser',
              yandexbrowser: t,
              version:
                versionIdentifier ||
                getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
            };
          } else if (/ucbrowser/i.test(ua)) {
            result = {
              name: 'UC Browser',
              ucbrowser: t,
              version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
            };
          } else if (/mxios/i.test(ua)) {
            result = {
              name: 'Maxthon',
              maxthon: t,
              version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
            };
          } else if (/epiphany/i.test(ua)) {
            result = {
              name: 'Epiphany',
              epiphany: t,
              version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
            };
          } else if (/puffin/i.test(ua)) {
            result = {
              name: 'Puffin',
              puffin: t,
              version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
            };
          } else if (/sleipnir/i.test(ua)) {
            result = {
              name: 'Sleipnir',
              sleipnir: t,
              version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
            };
          } else if (/k-meleon/i.test(ua)) {
            result = {
              name: 'K-Meleon',
              kMeleon: t,
              version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
            };
          } else if (windowsphone) {
            result = {
              name: 'Windows Phone',
              windowsphone: t,
            };
            if (edgeVersion) {
              result.msedge = t;
              result.version = edgeVersion;
            } else {
              result.msie = t;
              result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
            }
          } else if (/msie|trident/i.test(ua)) {
            result = {
              name: 'Internet Explorer',
              msie: t,
              version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i),
            };
          } else if (chromeos) {
            result = {
              name: 'Chrome',
              chromeos: t,
              chromeBook: t,
              chrome: t,
              version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
            };
          } else if (/chrome.+? edge/i.test(ua)) {
            result = {
              name: 'Microsoft Edge',
              msedge: t,
              version: edgeVersion,
            };
          } else if (/vivaldi/i.test(ua)) {
            result = {
              name: 'Vivaldi',
              vivaldi: t,
              version:
                getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier,
            };
          } else if (sailfish) {
            result = {
              name: 'Sailfish',
              sailfish: t,
              version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
            };
          } else if (/seamonkey\//i.test(ua)) {
            result = {
              name: 'SeaMonkey',
              seamonkey: t,
              version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i),
            };
          } else if (/firefox|iceweasel|fxios/i.test(ua)) {
            result = {
              name: 'Firefox',
              firefox: t,
              version: getFirstMatch(
                /(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i,
              ),
            };
            if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
              result.firefoxos = t;
            }
          } else if (silk) {
            result = {
              name: 'Amazon Silk',
              silk: t,
              version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i),
            };
          } else if (/phantom/i.test(ua)) {
            result = {
              name: 'PhantomJS',
              phantom: t,
              version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i),
            };
          } else if (/slimerjs/i.test(ua)) {
            result = {
              name: 'SlimerJS',
              slimer: t,
              version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i),
            };
          } else if (
            /blackberry|\bbb\d+/i.test(ua) ||
            /rim\stablet/i.test(ua)
          ) {
            result = {
              name: 'BlackBerry',
              blackberry: t,
              version:
                versionIdentifier ||
                getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
            };
          } else if (webos) {
            result = {
              name: 'WebOS',
              webos: t,
              version:
                versionIdentifier ||
                getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
            };
            /touchpad\//i.test(ua) && (result.touchpad = t);
          } else if (/bada/i.test(ua)) {
            result = {
              name: 'Bada',
              bada: t,
              version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i),
            };
          } else if (tizen) {
            result = {
              name: 'Tizen',
              tizen: t,
              version:
                getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) ||
                versionIdentifier,
            };
          } else if (/qupzilla/i.test(ua)) {
            result = {
              name: 'QupZilla',
              qupzilla: t,
              version:
                getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) ||
                versionIdentifier,
            };
          } else if (/chromium/i.test(ua)) {
            result = {
              name: 'Chromium',
              chromium: t,
              version:
                getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) ||
                versionIdentifier,
            };
          } else if (/chrome|crios|crmo/i.test(ua)) {
            result = {
              name: 'Chrome',
              chrome: t,
              version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
            };
          } else if (android) {
            result = {
              name: 'Android',
              version: versionIdentifier,
            };
          } else if (/safari|applewebkit/i.test(ua)) {
            result = {
              name: 'Safari',
              safari: t,
            };
            if (versionIdentifier) {
              result.version = versionIdentifier;
            }
          } else if (iosdevice) {
            result = {
              name:
                iosdevice == 'iphone'
                  ? 'iPhone'
                  : iosdevice == 'ipad'
                    ? 'iPad'
                    : 'iPod',
            };
            // WTF: version is not part of user agent in web apps
            if (versionIdentifier) {
              result.version = versionIdentifier;
            }
          } else if (/googlebot/i.test(ua)) {
            result = {
              name: 'Googlebot',
              googlebot: t,
              version:
                getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier,
            };
          } else {
            result = {
              name: getFirstMatch(/^(.*)\/(.*) /),
              version: getSecondMatch(/^(.*)\/(.*) /),
            };
          }

          // set webkit or gecko flag for browsers based on these engines
          if (!result.msedge && /(apple)?webkit/i.test(ua)) {
            if (/(apple)?webkit\/537\.36/i.test(ua)) {
              result.name = result.name || 'Blink';
              result.blink = t;
            } else {
              result.name = result.name || 'Webkit';
              result.webkit = t;
            }
            if (!result.version && versionIdentifier) {
              result.version = versionIdentifier;
            }
          } else if (!result.opera && /gecko\//i.test(ua)) {
            result.name = result.name || 'Gecko';
            result.gecko = t;
            result.version =
              result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
          }

          // set OS flags for platforms that have multiple browsers
          if (
            !result.windowsphone &&
            !result.msedge &&
            (android || result.silk)
          ) {
            result.android = t;
          } else if (!result.windowsphone && !result.msedge && iosdevice) {
            result[iosdevice] = t;
            result.ios = t;
          } else if (mac) {
            result.mac = t;
          } else if (xbox) {
            result.xbox = t;
          } else if (windows) {
            result.windows = t;
          } else if (linux) {
            result.linux = t;
          }

          // OS version extraction
          var osVersion = '';
          if (result.windowsphone) {
            osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
          } else if (iosdevice) {
            osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
            osVersion = osVersion.replace(/[_\s]/g, '.');
          } else if (android) {
            osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
          } else if (result.webos) {
            osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
          } else if (result.blackberry) {
            osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
          } else if (result.bada) {
            osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
          } else if (result.tizen) {
            osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
          }
          if (osVersion) {
            result.osversion = osVersion;
          }

          // device type extraction
          var osMajorVersion = osVersion.split('.')[0];
          if (
            tablet ||
            nexusTablet ||
            iosdevice == 'ipad' ||
            (android &&
              (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile))) ||
            result.silk
          ) {
            result.tablet = t;
          } else if (
            mobile ||
            iosdevice == 'iphone' ||
            iosdevice == 'ipod' ||
            android ||
            nexusMobile ||
            result.blackberry ||
            result.webos ||
            result.bada
          ) {
            result.mobile = t;
          }

          // Graded Browser Support
          // http://developer.yahoo.com/yui/articles/gbs
          if (
            result.msedge ||
            (result.msie && result.version >= 10) ||
            (result.yandexbrowser && result.version >= 15) ||
            (result.vivaldi && result.version >= 1.0) ||
            (result.chrome && result.version >= 20) ||
            (result.samsungBrowser && result.version >= 4) ||
            (result.firefox && result.version >= 20.0) ||
            (result.safari && result.version >= 6) ||
            (result.opera && result.version >= 10.0) ||
            (result.ios &&
              result.osversion &&
              result.osversion.split('.')[0] >= 6) ||
            (result.blackberry && result.version >= 10.1) ||
            (result.chromium && result.version >= 20)
          ) {
            result.a = t;
          } else if (
            (result.msie && result.version < 10) ||
            (result.chrome && result.version < 20) ||
            (result.firefox && result.version < 20.0) ||
            (result.safari && result.version < 6) ||
            (result.opera && result.version < 10.0) ||
            (result.ios &&
              result.osversion &&
              result.osversion.split('.')[0] < 6) ||
            (result.chromium && result.version < 20)
          ) {
            result.c = t;
          } else result.x = t;

          return result;
        }

        var bowser = detect(
          typeof navigator !== 'undefined' ? navigator.userAgent || '' : '',
        );

        bowser.test = function(browserList) {
          for (var i = 0; i < browserList.length; ++i) {
            var browserItem = browserList[i];
            if (typeof browserItem === 'string') {
              if (browserItem in bowser) {
                return true;
              }
            }
          }
          return false;
        };

        /**
         * Get version precisions count
         *
         * @example
         *   getVersionPrecision("1.10.3") // 3
         *
         * @param  {string} version
         * @return {number}
         */
        function getVersionPrecision(version) {
          return version.split('.').length;
        }

        /**
         * Array::map polyfill
         *
         * @param  {Array} arr
         * @param  {Function} iterator
         * @return {Array}
         */
        function map(arr, iterator) {
          var result = [],
            i;
          if (Array.prototype.map) {
            return Array.prototype.map.call(arr, iterator);
          }
          for (i = 0; i < arr.length; i++) {
            result.push(iterator(arr[i]));
          }
          return result;
        }

        /**
         * Calculate browser version weight
         *
         * @example
         *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
         *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
         *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
         *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
         *
         * @param  {Array<String>} versions versions to compare
         * @return {Number} comparison result
         */
        function compareVersions(versions) {
          // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
          var precision = Math.max(
            getVersionPrecision(versions[0]),
            getVersionPrecision(versions[1]),
          );
          var chunks = map(versions, function(version) {
            var delta = precision - getVersionPrecision(version);

            // 2) "9" -> "9.0" (for precision = 2)
            version = version + new Array(delta + 1).join('.0');

            // 3) "9.0" -> ["000000000"", "000000009"]
            return map(version.split('.'), function(chunk) {
              return new Array(20 - chunk.length).join('0') + chunk;
            }).reverse();
          });

          // iterate in reverse order by reversed chunks array
          while (--precision >= 0) {
            // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
            if (chunks[0][precision] > chunks[1][precision]) {
              return 1;
            } else if (chunks[0][precision] === chunks[1][precision]) {
              if (precision === 0) {
                // all version chunks are same
                return 0;
              }
            } else {
              return -1;
            }
          }
        }

        /**
         * Check if browser is unsupported
         *
         * @example
         *   bowser.isUnsupportedBrowser({
         *     msie: "10",
         *     firefox: "23",
         *     chrome: "29",
         *     safari: "5.1",
         *     opera: "16",
         *     phantom: "534"
         *   });
         *
         * @param  {Object}  minVersions map of minimal version to browser
         * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
         * @param  {String}  [ua] user agent string
         * @return {Boolean}
         */
        function isUnsupportedBrowser(minVersions, strictMode, ua) {
          var _bowser = bowser;

          // make strictMode param optional with ua param usage
          if (typeof strictMode === 'string') {
            ua = strictMode;
            strictMode = void 0;
          }

          if (strictMode === void 0) {
            strictMode = false;
          }
          if (ua) {
            _bowser = detect(ua);
          }

          var version = '' + _bowser.version;
          for (var browser in minVersions) {
            if (minVersions.hasOwnProperty(browser)) {
              if (_bowser[browser]) {
                if (typeof minVersions[browser] !== 'string') {
                  throw new Error(
                    'Browser version in the minVersion map should be a string: ' +
                      browser +
                      ': ' +
                      String(minVersions),
                  );
                }

                // browser version and min supported version.
                return compareVersions([version, minVersions[browser]]) < 0;
              }
            }
          }

          return strictMode; // not found
        }

        /**
         * Check if browser is supported
         *
         * @param  {Object} minVersions map of minimal version to browser
         * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
         * @param  {String}  [ua] user agent string
         * @return {Boolean}
         */
        function check(minVersions, strictMode, ua) {
          return !isUnsupportedBrowser(minVersions, strictMode, ua);
        }

        bowser.isUnsupportedBrowser = isUnsupportedBrowser;
        bowser.compareVersions = compareVersions;
        bowser.check = check;

        /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
        bowser._detect = detect;

        return bowser;
      });
    });

    var getBrowserInformation = createCommonjsModule$$1(function(
      module,
      exports,
    ) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _bowser = bowser;

      var _bowser2 = _interopRequireDefault(_bowser);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var vendorPrefixes = {
        Webkit: [
          'chrome',
          'safari',
          'ios',
          'android',
          'phantom',
          'opera',
          'webos',
          'blackberry',
          'bada',
          'tizen',
          'chromium',
          'vivaldi',
        ],
        Moz: ['firefox', 'seamonkey', 'sailfish'],
        ms: ['msie', 'msedge'],
      };
      var browsers = {
        chrome: [['chrome'], ['chromium']],
        safari: [['safari']],
        firefox: [['firefox']],
        edge: [['msedge']],
        opera: [['opera'], ['vivaldi']],
        ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
        ie: [['msie']],
        op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
        and_uc: [['android', 'mobile'], ['android', 'tablet']],
        android: [['android', 'mobile'], ['android', 'tablet']],
      };

      var browserByInfo = function browserByInfo(info) {
        if (info.firefox) {
          return 'firefox';
        }
        var name = '';

        Object.keys(browsers).forEach(function(browser) {
          browsers[browser].forEach(function(condition) {
            var match = 0;
            condition.forEach(function(single) {
              if (info[single]) {
                match += 1;
              }
            });
            if (condition.length === match) {
              name = browser;
            }
          });
        });

        return name;
      };

      /**
       * Uses bowser to get default browser information such as version and name
       * Evaluates bowser info and adds vendorPrefix information
       * @param {string} userAgent - userAgent that gets evaluated
       */

      exports.default = function(userAgent) {
        if (!userAgent) {
          return false;
        }
        var info = _bowser2.default._detect(userAgent);

        Object.keys(vendorPrefixes).forEach(function(prefix) {
          vendorPrefixes[prefix].forEach(function(browser) {
            if (info[browser]) {
              info.prefix = {
                inline: prefix,
                css: '-' + prefix.toLowerCase() + '-',
              };
            }
          });
        });

        info.browser = browserByInfo(info);

        // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
        info.version = info.version
          ? parseFloat(info.version)
          : parseInt(parseFloat(info.osversion), 10);
        info.osversion = parseFloat(info.osversion);

        // iOS forces all browsers to use Safari under the hood
        // as the Safari version seems to match the iOS version
        // we just explicitely use the osversion instead
        // https://github.com/rofrischmann/inline-style-prefixer/issues/72
        if (info.browser === 'ios_saf' && info.version > info.osversion) {
          info.version = info.osversion;
          info.safari = true;
        }

        // seperate native android chrome
        // https://github.com/rofrischmann/inline-style-prefixer/issues/45
        if (info.browser === 'android' && info.chrome && info.version > 37) {
          info.browser = 'and_chr';
        }

        // For android < 4.4 we want to check the osversion
        // not the chrome version, see issue #26
        // https://github.com/rofrischmann/inline-style-prefixer/issues/26
        if (info.browser === 'android' && info.osversion < 5) {
          info.version = info.osversion;
        }

        return info;
      };

      module.exports = exports['default'];
    });

    var getPrefixedKeyframes = createCommonjsModule$$1(function(
      module,
      exports,
    ) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      exports.default = function(_ref) {
        var browser = _ref.browser;
        var version = _ref.version;
        var prefix = _ref.prefix;

        var prefixedKeyframes = 'keyframes';

        if (
          (browser === 'chrome' && version < 43) ||
          ((browser === 'safari' || browser === 'ios_saf') && version < 9) ||
          (browser === 'opera' && version < 30) ||
          (browser === 'android' && version <= 4.4) ||
          browser === 'and_uc'
        ) {
          prefixedKeyframes = prefix.css + prefixedKeyframes;
        }
        return prefixedKeyframes;
      };

      module.exports = exports['default'];
    });

    var prefixProps$2 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = {
        chrome: {
          transform: 35,
          transformOrigin: 35,
          transformOriginX: 35,
          transformOriginY: 35,
          backfaceVisibility: 35,
          perspective: 35,
          perspectiveOrigin: 35,
          transformStyle: 35,
          transformOriginZ: 35,
          animation: 42,
          animationDelay: 42,
          animationDirection: 42,
          animationFillMode: 42,
          animationDuration: 42,
          animationIterationCount: 42,
          animationName: 42,
          animationPlayState: 42,
          animationTimingFunction: 42,
          appearance: 55,
          userSelect: 55,
          fontKerning: 32,
          textEmphasisPosition: 55,
          textEmphasis: 55,
          textEmphasisStyle: 55,
          textEmphasisColor: 55,
          boxDecorationBreak: 55,
          clipPath: 55,
          maskImage: 55,
          maskMode: 55,
          maskRepeat: 55,
          maskPosition: 55,
          maskClip: 55,
          maskOrigin: 55,
          maskSize: 55,
          maskComposite: 55,
          mask: 55,
          maskBorderSource: 55,
          maskBorderMode: 55,
          maskBorderSlice: 55,
          maskBorderWidth: 55,
          maskBorderOutset: 55,
          maskBorderRepeat: 55,
          maskBorder: 55,
          maskType: 55,
          textDecorationStyle: 55,
          textDecorationSkip: 55,
          textDecorationLine: 55,
          textDecorationColor: 55,
          filter: 52,
          fontFeatureSettings: 47,
          breakAfter: 49,
          breakBefore: 49,
          breakInside: 49,
          columnCount: 49,
          columnFill: 49,
          columnGap: 49,
          columnRule: 49,
          columnRuleColor: 49,
          columnRuleStyle: 49,
          columnRuleWidth: 49,
          columns: 49,
          columnSpan: 49,
          columnWidth: 49,
        },
        safari: {
          flex: 8,
          flexBasis: 8,
          flexDirection: 8,
          flexGrow: 8,
          flexFlow: 8,
          flexShrink: 8,
          flexWrap: 8,
          alignContent: 8,
          alignItems: 8,
          alignSelf: 8,
          justifyContent: 8,
          order: 8,
          transition: 6,
          transitionDelay: 6,
          transitionDuration: 6,
          transitionProperty: 6,
          transitionTimingFunction: 6,
          transform: 8,
          transformOrigin: 8,
          transformOriginX: 8,
          transformOriginY: 8,
          backfaceVisibility: 8,
          perspective: 8,
          perspectiveOrigin: 8,
          transformStyle: 8,
          transformOriginZ: 8,
          animation: 8,
          animationDelay: 8,
          animationDirection: 8,
          animationFillMode: 8,
          animationDuration: 8,
          animationIterationCount: 8,
          animationName: 8,
          animationPlayState: 8,
          animationTimingFunction: 8,
          appearance: 10,
          userSelect: 10,
          backdropFilter: 10,
          fontKerning: 9,
          scrollSnapType: 10,
          scrollSnapPointsX: 10,
          scrollSnapPointsY: 10,
          scrollSnapDestination: 10,
          scrollSnapCoordinate: 10,
          textEmphasisPosition: 7,
          textEmphasis: 7,
          textEmphasisStyle: 7,
          textEmphasisColor: 7,
          boxDecorationBreak: 10,
          clipPath: 10,
          maskImage: 10,
          maskMode: 10,
          maskRepeat: 10,
          maskPosition: 10,
          maskClip: 10,
          maskOrigin: 10,
          maskSize: 10,
          maskComposite: 10,
          mask: 10,
          maskBorderSource: 10,
          maskBorderMode: 10,
          maskBorderSlice: 10,
          maskBorderWidth: 10,
          maskBorderOutset: 10,
          maskBorderRepeat: 10,
          maskBorder: 10,
          maskType: 10,
          textDecorationStyle: 10,
          textDecorationSkip: 10,
          textDecorationLine: 10,
          textDecorationColor: 10,
          shapeImageThreshold: 10,
          shapeImageMargin: 10,
          shapeImageOutside: 10,
          filter: 9,
          hyphens: 10,
          flowInto: 10,
          flowFrom: 10,
          breakBefore: 8,
          breakAfter: 8,
          breakInside: 8,
          regionFragment: 10,
          columnCount: 8,
          columnFill: 8,
          columnGap: 8,
          columnRule: 8,
          columnRuleColor: 8,
          columnRuleStyle: 8,
          columnRuleWidth: 8,
          columns: 8,
          columnSpan: 8,
          columnWidth: 8,
        },
        firefox: {
          appearance: 51,
          userSelect: 51,
          boxSizing: 28,
          textAlignLast: 48,
          textDecorationStyle: 35,
          textDecorationSkip: 35,
          textDecorationLine: 35,
          textDecorationColor: 35,
          tabSize: 51,
          hyphens: 42,
          fontFeatureSettings: 33,
          breakAfter: 51,
          breakBefore: 51,
          breakInside: 51,
          columnCount: 51,
          columnFill: 51,
          columnGap: 51,
          columnRule: 51,
          columnRuleColor: 51,
          columnRuleStyle: 51,
          columnRuleWidth: 51,
          columns: 51,
          columnSpan: 51,
          columnWidth: 51,
        },
        opera: {
          flex: 16,
          flexBasis: 16,
          flexDirection: 16,
          flexGrow: 16,
          flexFlow: 16,
          flexShrink: 16,
          flexWrap: 16,
          alignContent: 16,
          alignItems: 16,
          alignSelf: 16,
          justifyContent: 16,
          order: 16,
          transform: 22,
          transformOrigin: 22,
          transformOriginX: 22,
          transformOriginY: 22,
          backfaceVisibility: 22,
          perspective: 22,
          perspectiveOrigin: 22,
          transformStyle: 22,
          transformOriginZ: 22,
          animation: 29,
          animationDelay: 29,
          animationDirection: 29,
          animationFillMode: 29,
          animationDuration: 29,
          animationIterationCount: 29,
          animationName: 29,
          animationPlayState: 29,
          animationTimingFunction: 29,
          appearance: 41,
          userSelect: 41,
          fontKerning: 19,
          textEmphasisPosition: 41,
          textEmphasis: 41,
          textEmphasisStyle: 41,
          textEmphasisColor: 41,
          boxDecorationBreak: 41,
          clipPath: 41,
          maskImage: 41,
          maskMode: 41,
          maskRepeat: 41,
          maskPosition: 41,
          maskClip: 41,
          maskOrigin: 41,
          maskSize: 41,
          maskComposite: 41,
          mask: 41,
          maskBorderSource: 41,
          maskBorderMode: 41,
          maskBorderSlice: 41,
          maskBorderWidth: 41,
          maskBorderOutset: 41,
          maskBorderRepeat: 41,
          maskBorder: 41,
          maskType: 41,
          textDecorationStyle: 41,
          textDecorationSkip: 41,
          textDecorationLine: 41,
          textDecorationColor: 41,
          filter: 39,
          fontFeatureSettings: 34,
          breakAfter: 36,
          breakBefore: 36,
          breakInside: 36,
          columnCount: 36,
          columnFill: 36,
          columnGap: 36,
          columnRule: 36,
          columnRuleColor: 36,
          columnRuleStyle: 36,
          columnRuleWidth: 36,
          columns: 36,
          columnSpan: 36,
          columnWidth: 36,
        },
        ie: {
          flex: 10,
          flexDirection: 10,
          flexFlow: 10,
          flexWrap: 10,
          transform: 9,
          transformOrigin: 9,
          transformOriginX: 9,
          transformOriginY: 9,
          userSelect: 11,
          wrapFlow: 11,
          wrapThrough: 11,
          wrapMargin: 11,
          scrollSnapType: 11,
          scrollSnapPointsX: 11,
          scrollSnapPointsY: 11,
          scrollSnapDestination: 11,
          scrollSnapCoordinate: 11,
          touchAction: 10,
          hyphens: 11,
          flowInto: 11,
          flowFrom: 11,
          breakBefore: 11,
          breakAfter: 11,
          breakInside: 11,
          regionFragment: 11,
          gridTemplateColumns: 11,
          gridTemplateRows: 11,
          gridTemplateAreas: 11,
          gridTemplate: 11,
          gridAutoColumns: 11,
          gridAutoRows: 11,
          gridAutoFlow: 11,
          grid: 11,
          gridRowStart: 11,
          gridColumnStart: 11,
          gridRowEnd: 11,
          gridRow: 11,
          gridColumn: 11,
          gridColumnEnd: 11,
          gridColumnGap: 11,
          gridRowGap: 11,
          gridArea: 11,
          gridGap: 11,
          textSizeAdjust: 11,
        },
        edge: {
          userSelect: 14,
          wrapFlow: 14,
          wrapThrough: 14,
          wrapMargin: 14,
          scrollSnapType: 14,
          scrollSnapPointsX: 14,
          scrollSnapPointsY: 14,
          scrollSnapDestination: 14,
          scrollSnapCoordinate: 14,
          hyphens: 14,
          flowInto: 14,
          flowFrom: 14,
          breakBefore: 14,
          breakAfter: 14,
          breakInside: 14,
          regionFragment: 14,
          gridTemplateColumns: 14,
          gridTemplateRows: 14,
          gridTemplateAreas: 14,
          gridTemplate: 14,
          gridAutoColumns: 14,
          gridAutoRows: 14,
          gridAutoFlow: 14,
          grid: 14,
          gridRowStart: 14,
          gridColumnStart: 14,
          gridRowEnd: 14,
          gridRow: 14,
          gridColumn: 14,
          gridColumnEnd: 14,
          gridColumnGap: 14,
          gridRowGap: 14,
          gridArea: 14,
          gridGap: 14,
        },
        ios_saf: {
          flex: 8.1,
          flexBasis: 8.1,
          flexDirection: 8.1,
          flexGrow: 8.1,
          flexFlow: 8.1,
          flexShrink: 8.1,
          flexWrap: 8.1,
          alignContent: 8.1,
          alignItems: 8.1,
          alignSelf: 8.1,
          justifyContent: 8.1,
          order: 8.1,
          transition: 6,
          transitionDelay: 6,
          transitionDuration: 6,
          transitionProperty: 6,
          transitionTimingFunction: 6,
          transform: 8.1,
          transformOrigin: 8.1,
          transformOriginX: 8.1,
          transformOriginY: 8.1,
          backfaceVisibility: 8.1,
          perspective: 8.1,
          perspectiveOrigin: 8.1,
          transformStyle: 8.1,
          transformOriginZ: 8.1,
          animation: 8.1,
          animationDelay: 8.1,
          animationDirection: 8.1,
          animationFillMode: 8.1,
          animationDuration: 8.1,
          animationIterationCount: 8.1,
          animationName: 8.1,
          animationPlayState: 8.1,
          animationTimingFunction: 8.1,
          appearance: 9.3,
          userSelect: 9.3,
          backdropFilter: 9.3,
          fontKerning: 9.3,
          scrollSnapType: 9.3,
          scrollSnapPointsX: 9.3,
          scrollSnapPointsY: 9.3,
          scrollSnapDestination: 9.3,
          scrollSnapCoordinate: 9.3,
          boxDecorationBreak: 9.3,
          clipPath: 9.3,
          maskImage: 9.3,
          maskMode: 9.3,
          maskRepeat: 9.3,
          maskPosition: 9.3,
          maskClip: 9.3,
          maskOrigin: 9.3,
          maskSize: 9.3,
          maskComposite: 9.3,
          mask: 9.3,
          maskBorderSource: 9.3,
          maskBorderMode: 9.3,
          maskBorderSlice: 9.3,
          maskBorderWidth: 9.3,
          maskBorderOutset: 9.3,
          maskBorderRepeat: 9.3,
          maskBorder: 9.3,
          maskType: 9.3,
          textSizeAdjust: 9.3,
          textDecorationStyle: 9.3,
          textDecorationSkip: 9.3,
          textDecorationLine: 9.3,
          textDecorationColor: 9.3,
          shapeImageThreshold: 9.3,
          shapeImageMargin: 9.3,
          shapeImageOutside: 9.3,
          filter: 9,
          hyphens: 9.3,
          flowInto: 9.3,
          flowFrom: 9.3,
          breakBefore: 8.1,
          breakAfter: 8.1,
          breakInside: 8.1,
          regionFragment: 9.3,
          columnCount: 8.1,
          columnFill: 8.1,
          columnGap: 8.1,
          columnRule: 8.1,
          columnRuleColor: 8.1,
          columnRuleStyle: 8.1,
          columnRuleWidth: 8.1,
          columns: 8.1,
          columnSpan: 8.1,
          columnWidth: 8.1,
        },
        android: {
          flex: 4.2,
          flexBasis: 4.2,
          flexDirection: 4.2,
          flexGrow: 4.2,
          flexFlow: 4.2,
          flexShrink: 4.2,
          flexWrap: 4.2,
          alignContent: 4.2,
          alignItems: 4.2,
          alignSelf: 4.2,
          justifyContent: 4.2,
          order: 4.2,
          transition: 4.2,
          transitionDelay: 4.2,
          transitionDuration: 4.2,
          transitionProperty: 4.2,
          transitionTimingFunction: 4.2,
          transform: 4.4,
          transformOrigin: 4.4,
          transformOriginX: 4.4,
          transformOriginY: 4.4,
          backfaceVisibility: 4.4,
          perspective: 4.4,
          perspectiveOrigin: 4.4,
          transformStyle: 4.4,
          transformOriginZ: 4.4,
          animation: 4.4,
          animationDelay: 4.4,
          animationDirection: 4.4,
          animationFillMode: 4.4,
          animationDuration: 4.4,
          animationIterationCount: 4.4,
          animationName: 4.4,
          animationPlayState: 4.4,
          animationTimingFunction: 4.4,
          appearance: 51,
          userSelect: 51,
          fontKerning: 4.4,
          textEmphasisPosition: 51,
          textEmphasis: 51,
          textEmphasisStyle: 51,
          textEmphasisColor: 51,
          boxDecorationBreak: 51,
          clipPath: 51,
          maskImage: 51,
          maskMode: 51,
          maskRepeat: 51,
          maskPosition: 51,
          maskClip: 51,
          maskOrigin: 51,
          maskSize: 51,
          maskComposite: 51,
          mask: 51,
          maskBorderSource: 51,
          maskBorderMode: 51,
          maskBorderSlice: 51,
          maskBorderWidth: 51,
          maskBorderOutset: 51,
          maskBorderRepeat: 51,
          maskBorder: 51,
          maskType: 51,
          filter: 51,
          fontFeatureSettings: 4.4,
          breakAfter: 51,
          breakBefore: 51,
          breakInside: 51,
          columnCount: 51,
          columnFill: 51,
          columnGap: 51,
          columnRule: 51,
          columnRuleColor: 51,
          columnRuleStyle: 51,
          columnRuleWidth: 51,
          columns: 51,
          columnSpan: 51,
          columnWidth: 51,
        },
        and_chr: {
          appearance: 51,
          userSelect: 51,
          textEmphasisPosition: 51,
          textEmphasis: 51,
          textEmphasisStyle: 51,
          textEmphasisColor: 51,
          boxDecorationBreak: 51,
          clipPath: 51,
          maskImage: 51,
          maskMode: 51,
          maskRepeat: 51,
          maskPosition: 51,
          maskClip: 51,
          maskOrigin: 51,
          maskSize: 51,
          maskComposite: 51,
          mask: 51,
          maskBorderSource: 51,
          maskBorderMode: 51,
          maskBorderSlice: 51,
          maskBorderWidth: 51,
          maskBorderOutset: 51,
          maskBorderRepeat: 51,
          maskBorder: 51,
          maskType: 51,
          textDecorationStyle: 51,
          textDecorationSkip: 51,
          textDecorationLine: 51,
          textDecorationColor: 51,
          filter: 51,
        },
        and_uc: {
          flex: 9.9,
          flexBasis: 9.9,
          flexDirection: 9.9,
          flexGrow: 9.9,
          flexFlow: 9.9,
          flexShrink: 9.9,
          flexWrap: 9.9,
          alignContent: 9.9,
          alignItems: 9.9,
          alignSelf: 9.9,
          justifyContent: 9.9,
          order: 9.9,
          transition: 9.9,
          transitionDelay: 9.9,
          transitionDuration: 9.9,
          transitionProperty: 9.9,
          transitionTimingFunction: 9.9,
          transform: 9.9,
          transformOrigin: 9.9,
          transformOriginX: 9.9,
          transformOriginY: 9.9,
          backfaceVisibility: 9.9,
          perspective: 9.9,
          perspectiveOrigin: 9.9,
          transformStyle: 9.9,
          transformOriginZ: 9.9,
          animation: 9.9,
          animationDelay: 9.9,
          animationDirection: 9.9,
          animationFillMode: 9.9,
          animationDuration: 9.9,
          animationIterationCount: 9.9,
          animationName: 9.9,
          animationPlayState: 9.9,
          animationTimingFunction: 9.9,
          appearance: 9.9,
          userSelect: 9.9,
          fontKerning: 9.9,
          textEmphasisPosition: 9.9,
          textEmphasis: 9.9,
          textEmphasisStyle: 9.9,
          textEmphasisColor: 9.9,
          maskImage: 9.9,
          maskMode: 9.9,
          maskRepeat: 9.9,
          maskPosition: 9.9,
          maskClip: 9.9,
          maskOrigin: 9.9,
          maskSize: 9.9,
          maskComposite: 9.9,
          mask: 9.9,
          maskBorderSource: 9.9,
          maskBorderMode: 9.9,
          maskBorderSlice: 9.9,
          maskBorderWidth: 9.9,
          maskBorderOutset: 9.9,
          maskBorderRepeat: 9.9,
          maskBorder: 9.9,
          maskType: 9.9,
          textSizeAdjust: 9.9,
          filter: 9.9,
          hyphens: 9.9,
          flowInto: 9.9,
          flowFrom: 9.9,
          breakBefore: 9.9,
          breakAfter: 9.9,
          breakInside: 9.9,
          regionFragment: 9.9,
          fontFeatureSettings: 9.9,
          columnCount: 9.9,
          columnFill: 9.9,
          columnGap: 9.9,
          columnRule: 9.9,
          columnRuleColor: 9.9,
          columnRuleStyle: 9.9,
          columnRuleWidth: 9.9,
          columns: 9.9,
          columnSpan: 9.9,
          columnWidth: 9.9,
        },
        op_mini: {},
      };
      module.exports = exports['default'];
    });

    var getPrefixedValue = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      exports.default = function(prefixedValue, value, keepUnprefixed) {
        return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
      };

      module.exports = exports['default'];
    });

    var position_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = position;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function position(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var browser = _ref.browserInfo.browser;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          property === 'position' &&
          value === 'sticky' &&
          (browser === 'safari' || browser === 'ios_saf')
        ) {
          return _defineProperty(
            {},
            property,
            (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed),
          );
        }
      }
      module.exports = exports['default'];
    });

    var calc_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = calc;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function calc(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var _ref$browserInfo = _ref.browserInfo;
        var browser = _ref$browserInfo.browser;
        var version = _ref$browserInfo.version;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          typeof value === 'string' &&
          value.indexOf('calc(') > -1 &&
          ((browser === 'firefox' && version < 15) ||
            (browser === 'chrome' && version < 25) ||
            (browser === 'safari' && version < 6.1) ||
            (browser === 'ios_saf' && version < 7))
        ) {
          return _defineProperty(
            {},
            property,
            (0, _getPrefixedValue2.default)(
              value.replace(/calc\(/g, css + 'calc('),
              value,
              keepUnprefixed,
            ),
          );
        }
      }
      module.exports = exports['default'];
    });

    var zoomCursor_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = zoomCursor;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var values = { 'zoom-in': true, 'zoom-out': true };

      function zoomCursor(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var _ref$browserInfo = _ref.browserInfo;
        var browser = _ref$browserInfo.browser;
        var version = _ref$browserInfo.version;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          property === 'cursor' &&
          values[value] &&
          ((browser === 'firefox' && version < 24) ||
            (browser === 'chrome' && version < 37) ||
            (browser === 'safari' && version < 9) ||
            (browser === 'opera' && version < 24))
        ) {
          return {
            cursor: (0, _getPrefixedValue2.default)(
              css + value,
              value,
              keepUnprefixed,
            ),
          };
        }
      }
      module.exports = exports['default'];
    });

    var grabCursor_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = grabCursor;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var values = { grab: true, grabbing: true };

      function grabCursor(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var browser = _ref.browserInfo.browser;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
        if (
          property === 'cursor' &&
          values[value] &&
          (browser === 'firefox' ||
            browser === 'chrome' ||
            browser === 'safari' ||
            browser === 'opera')
        ) {
          return {
            cursor: (0, _getPrefixedValue2.default)(
              css + value,
              value,
              keepUnprefixed,
            ),
          };
        }
      }
      module.exports = exports['default'];
    });

    var flex_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = flex;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var values = { flex: true, 'inline-flex': true };

      function flex(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var _ref$browserInfo = _ref.browserInfo;
        var browser = _ref$browserInfo.browser;
        var version = _ref$browserInfo.version;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          property === 'display' &&
          values[value] &&
          ((browser === 'chrome' && version < 29 && version > 20) ||
            ((browser === 'safari' || browser === 'ios_saf') &&
              version < 9 &&
              version > 6) ||
            (browser === 'opera' && (version == 15 || version == 16)))
        ) {
          return {
            display: (0, _getPrefixedValue2.default)(
              css + value,
              value,
              keepUnprefixed,
            ),
          };
        }
      }
      module.exports = exports['default'];
    });

    var sizing_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = sizing;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var properties = {
        maxHeight: true,
        maxWidth: true,
        width: true,
        height: true,
        columnWidth: true,
        minWidth: true,
        minHeight: true,
      };
      var values = {
        'min-content': true,
        'max-content': true,
        'fill-available': true,
        'fit-content': true,
        'contain-floats': true,
      };

      function sizing(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        // This might change in the future
        // Keep an eye on it
        if (properties[property] && values[value]) {
          return _defineProperty(
            {},
            property,
            (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed),
          );
        }
      }
      module.exports = exports['default'];
    });

    var gradient_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = gradient;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

      function gradient(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var _ref$browserInfo = _ref.browserInfo;
        var browser = _ref$browserInfo.browser;
        var version = _ref$browserInfo.version;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          typeof value === 'string' &&
          value.match(values) !== null &&
          ((browser === 'firefox' && version < 16) ||
            (browser === 'chrome' && version < 26) ||
            ((browser === 'safari' || browser === 'ios_saf') && version < 7) ||
            ((browser === 'opera' || browser === 'op_mini') &&
              version < 12.1) ||
            (browser === 'android' && version < 4.4) ||
            browser === 'and_uc')
        ) {
          return _defineProperty(
            {},
            property,
            (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed),
          );
        }
      }
      module.exports = exports['default'];
    });

    var unprefixProperty = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      exports.default = function(property) {
        var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
        return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
      };

      module.exports = exports['default'];
    });

    var transition_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _typeof =
        typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
          ? function(obj) {
              return typeof obj;
            }
          : function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol
                ? 'symbol'
                : typeof obj;
            };

      exports.default = transition;

      var _hyphenateStyleName = index;

      var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

      var _unprefixProperty = unprefixProperty;

      var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var properties = { transition: true, transitionProperty: true };

      function transition(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var css = _ref.prefix.css;
        var requiresPrefix = _ref.requiresPrefix;
        var keepUnprefixed = _ref.keepUnprefixed;

        // also check for already prefixed transitions
        var unprefixedProperty = (0, _unprefixProperty2.default)(property);

        if (typeof value === 'string' && properties[unprefixedProperty]) {
          var _ret = (function() {
            // TODO: memoize this array
            var requiresPrefixDashCased = Object.keys(requiresPrefix).map(
              function(prop) {
                return (0, _hyphenateStyleName2.default)(prop);
              },
            );

            // only split multi values, not cubic beziers
            var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

            requiresPrefixDashCased.forEach(function(prop) {
              multipleValues.forEach(function(val, index$$1) {
                if (val.indexOf(prop) > -1 && prop !== 'order') {
                  multipleValues[index$$1] =
                    val.replace(prop, css + prop) +
                    (keepUnprefixed ? ',' + val : '');
                }
              });
            });

            return {
              v: _defineProperty({}, property, multipleValues.join(',')),
            };
          })();

          if (
            (typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) ===
            'object'
          )
            return _ret.v;
        }
      }
      module.exports = exports['default'];
    });

    var flexboxIE_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = flexboxIE;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var alternativeValues = {
        'space-around': 'distribute',
        'space-between': 'justify',
        'flex-start': 'start',
        'flex-end': 'end',
        flex: 'flexbox',
        'inline-flex': 'inline-flexbox',
      };
      var alternativeProps = {
        alignContent: 'msFlexLinePack',
        alignSelf: 'msFlexItemAlign',
        alignItems: 'msFlexAlign',
        justifyContent: 'msFlexPack',
        order: 'msFlexOrder',
        flexGrow: 'msFlexPositive',
        flexShrink: 'msFlexNegative',
        flexBasis: 'msPreferredSize',
      };

      function flexboxIE(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var styles = _ref.styles;
        var _ref$browserInfo = _ref.browserInfo;
        var browser = _ref$browserInfo.browser;
        var version = _ref$browserInfo.version;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          (alternativeProps[property] ||
            (property === 'display' &&
              typeof value === 'string' &&
              value.indexOf('flex') > -1)) &&
          (browser === 'ie_mob' || browser === 'ie') &&
          version == 10
        ) {
          if (!keepUnprefixed && !Array.isArray(styles[property])) {
            delete styles[property];
          }
          if (property === 'display' && alternativeValues[value]) {
            return {
              display: (0, _getPrefixedValue2.default)(
                css + alternativeValues[value],
                value,
                keepUnprefixed,
              ),
            };
          }
          if (alternativeProps[property]) {
            return _defineProperty(
              {},
              alternativeProps[property],
              alternativeValues[value] || value,
            );
          }
        }
      }
      module.exports = exports['default'];
    });

    var flexboxOld_1$1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = flexboxOld;

      var _getPrefixedValue = getPrefixedValue;

      var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var alternativeValues = {
        'space-around': 'justify',
        'space-between': 'justify',
        'flex-start': 'start',
        'flex-end': 'end',
        'wrap-reverse': 'multiple',
        wrap: 'multiple',
        flex: 'box',
        'inline-flex': 'inline-box',
      };

      var alternativeProps = {
        alignItems: 'WebkitBoxAlign',
        justifyContent: 'WebkitBoxPack',
        flexWrap: 'WebkitBoxLines',
      };

      var otherProps = [
        'alignContent',
        'alignSelf',
        'order',
        'flexGrow',
        'flexShrink',
        'flexBasis',
        'flexDirection',
      ];
      var properties = Object.keys(alternativeProps).concat(otherProps);

      function flexboxOld(_ref) {
        var property = _ref.property;
        var value = _ref.value;
        var styles = _ref.styles;
        var _ref$browserInfo = _ref.browserInfo;
        var browser = _ref$browserInfo.browser;
        var version = _ref$browserInfo.version;
        var css = _ref.prefix.css;
        var keepUnprefixed = _ref.keepUnprefixed;

        if (
          (properties.indexOf(property) > -1 ||
            (property === 'display' &&
              typeof value === 'string' &&
              value.indexOf('flex') > -1)) &&
          ((browser === 'firefox' && version < 22) ||
            (browser === 'chrome' && version < 21) ||
            ((browser === 'safari' || browser === 'ios_saf') &&
              version <= 6.1) ||
            (browser === 'android' && version < 4.4) ||
            browser === 'and_uc')
        ) {
          if (!keepUnprefixed && !Array.isArray(styles[property])) {
            delete styles[property];
          }
          if (property === 'flexDirection' && typeof value === 'string') {
            return {
              WebkitBoxOrient:
                value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
              WebkitBoxDirection:
                value.indexOf('reverse') > -1 ? 'reverse' : 'normal',
            };
          }
          if (property === 'display' && alternativeValues[value]) {
            return {
              display: (0, _getPrefixedValue2.default)(
                css + alternativeValues[value],
                value,
                keepUnprefixed,
              ),
            };
          }
          if (alternativeProps[property]) {
            return _defineProperty(
              {},
              alternativeProps[property],
              alternativeValues[value] || value,
            );
          }
        }
      }
      module.exports = exports['default'];
    });

    var Prefixer_1 = createCommonjsModule$$1(function(module, exports) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });

      var _createClass = (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      // special flexbox specifications

      var _prefixAll2 = prefixAll_1;

      var _prefixAll3 = _interopRequireDefault(_prefixAll2);

      var _getBrowserInformation = getBrowserInformation;

      var _getBrowserInformation2 = _interopRequireDefault(
        _getBrowserInformation,
      );

      var _getPrefixedKeyframes = getPrefixedKeyframes;

      var _getPrefixedKeyframes2 = _interopRequireDefault(
        _getPrefixedKeyframes,
      );

      var _capitalizeString = capitalizeString;

      var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

      var _sortPrefixedStyle = sortPrefixedStyle_1;

      var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

      var _prefixProps = prefixProps$2;

      var _prefixProps2 = _interopRequireDefault(_prefixProps);

      var _position = position_1$1;

      var _position2 = _interopRequireDefault(_position);

      var _calc = calc_1$1;

      var _calc2 = _interopRequireDefault(_calc);

      var _zoomCursor = zoomCursor_1;

      var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

      var _grabCursor = grabCursor_1;

      var _grabCursor2 = _interopRequireDefault(_grabCursor);

      var _flex = flex_1$1;

      var _flex2 = _interopRequireDefault(_flex);

      var _sizing = sizing_1$1;

      var _sizing2 = _interopRequireDefault(_sizing);

      var _gradient = gradient_1$1;

      var _gradient2 = _interopRequireDefault(_gradient);

      var _transition = transition_1$1;

      var _transition2 = _interopRequireDefault(_transition);

      var _flexboxIE = flexboxIE_1$1;

      var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

      var _flexboxOld = flexboxOld_1$1;

      var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      var plugins = [
        _position2.default,
        _calc2.default,
        _zoomCursor2.default,
        _grabCursor2.default,
        _sizing2.default,
        _gradient2.default,
        _transition2.default,
        _flexboxIE2.default,
        _flexboxOld2.default,
        // this must be run AFTER the flexbox specs
        _flex2.default,
      ];

      var Prefixer = (function() {
        /**
         * Instantiante a new prefixer
         * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
         * @param {string} keepUnprefixed - keeps unprefixed properties and values
         */

        function Prefixer() {
          var _this = this;

          var options =
            arguments.length <= 0 || arguments[0] === undefined
              ? {}
              : arguments[0];

          _classCallCheck(this, Prefixer);

          var defaultUserAgent =
            typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

          this._userAgent = options.userAgent || defaultUserAgent;
          this._keepUnprefixed = options.keepUnprefixed || false;

          this._browserInfo = (0, _getBrowserInformation2.default)(
            this._userAgent,
          );

          // Checks if the userAgent was resolved correctly
          if (this._browserInfo && this._browserInfo.prefix) {
            // set additional prefix information
            this.cssPrefix = this._browserInfo.prefix.css;
            this.jsPrefix = this._browserInfo.prefix.inline;
            this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(
              this._browserInfo,
            );
          } else {
            this._usePrefixAllFallback = true;
            return false;
          }

          var data =
            this._browserInfo.browser &&
            _prefixProps2.default[this._browserInfo.browser];
          if (data) {
            this._requiresPrefix = Object.keys(data)
              .filter(function(key) {
                return data[key] >= _this._browserInfo.version;
              })
              .reduce(function(result, name) {
                result[name] = true;
                return result;
              }, {});
            this._hasPropsRequiringPrefix =
              Object.keys(this._requiresPrefix).length > 0;
          } else {
            this._usePrefixAllFallback = true;
          }
        }

        /**
         * Returns a prefixed version of the style object
         * @param {Object} styles - Style object that gets prefixed properties added
         * @returns {Object} - Style object with prefixed properties and values
         */

        _createClass(
          Prefixer,
          [
            {
              key: 'prefix',
              value: function prefix(styles) {
                var _this2 = this;

                // use prefixAll as fallback if userAgent can not be resolved
                if (this._usePrefixAllFallback) {
                  return (0, _prefixAll3.default)(styles);
                }

                // only add prefixes if needed
                if (!this._hasPropsRequiringPrefix) {
                  return styles;
                }

                Object.keys(styles).forEach(function(property) {
                  var value = styles[property];
                  if (value instanceof Object && !Array.isArray(value)) {
                    // recurse through nested style objects
                    styles[property] = _this2.prefix(value);
                  } else {
                    // add prefixes if needed
                    if (_this2._requiresPrefix[property]) {
                      styles[
                        _this2.jsPrefix +
                          (0, _capitalizeString2.default)(property)
                      ] = value;
                      if (!_this2._keepUnprefixed) {
                        delete styles[property];
                      }
                    }
                  }
                });

                Object.keys(styles).forEach(function(property) {
                  [].concat(styles[property]).forEach(function(value) {
                    // resolve plugins
                    plugins.forEach(function(plugin) {
                      // generates a new plugin interface with current data
                      assignStyles(
                        styles,
                        plugin({
                          property: property,
                          value: value,
                          styles: styles,
                          browserInfo: _this2._browserInfo,
                          prefix: {
                            js: _this2.jsPrefix,
                            css: _this2.cssPrefix,
                            keyframes: _this2.prefixedKeyframes,
                          },
                          keepUnprefixed: _this2._keepUnprefixed,
                          requiresPrefix: _this2._requiresPrefix,
                        }),
                        value,
                        _this2._keepUnprefixed,
                      );
                    });
                  });
                });

                return (0, _sortPrefixedStyle2.default)(styles);
              },

              /**
               * Returns a prefixed version of the style object using all vendor prefixes
               * @param {Object} styles - Style object that gets prefixed properties added
               * @returns {Object} - Style object with prefixed properties and values
               */
            },
          ],
          [
            {
              key: 'prefixAll',
              value: function prefixAll(styles) {
                return (0, _prefixAll3.default)(styles);
              },
            },
          ],
        );

        return Prefixer;
      })();

      exports.default = Prefixer;

      function assignStyles(base) {
        var extend =
          arguments.length <= 1 || arguments[1] === undefined
            ? {}
            : arguments[1];
        var value = arguments[2];
        var keepUnprefixed = arguments[3];

        Object.keys(extend).forEach(function(property) {
          var baseValue = base[property];
          if (Array.isArray(baseValue)) {
            [].concat(extend[property]).forEach(function(val) {
              if (base[property].indexOf(val) === -1) {
                base[property].splice(
                  baseValue.indexOf(value),
                  keepUnprefixed ? 0 : 1,
                  val,
                );
              }
            });
          } else {
            base[property] = extend[property];
          }
        });
      }
      module.exports = exports['default'];
    });

    var Prefixer = unwrapExports$$1(Prefixer_1);

    /*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

    var index$2 = function isObject(val) {
      return val != null && typeof val === 'object' && !Array.isArray(val);
    };

    var isObject = index$2;

    function isObjectObject(o) {
      return (
        isObject(o) === true &&
        Object.prototype.toString.call(o) === '[object Object]'
      );
    }

    var index$1 = function isPlainObject(o) {
      var ctor, prot;

      if (isObjectObject(o) === false) return false;

      // If has modified constructor
      ctor = o.constructor;
      if (typeof ctor !== 'function') return false;

      // If has modified prototype
      prot = ctor.prototype;
      if (isObjectObject(prot) === false) return false;

      // If constructor does not have an Object-specific method
      if (prot.hasOwnProperty('isPrototypeOf') === false) {
        return false;
      }

      // Most likely a plain Object
      return true;
    };

    var keys = function keys(obj) {
      return Object.keys(obj);
    };

    var isArray = function isArray(obj) {
      return obj && Array.isArray(obj);
    };

    var isArrayLike = function isArrayLike(obj) {
      return index$1(obj) || isArray(obj);
    };

    // http://hg.mozilla.org/mozilla-central/diff/7c3cb4883157/js/src/builtin/String.js
    var strRepeat = function strRepeat(str, repeatCount) {
      var s = str;
      var n = repeatCount;
      var result = '';

      for (;;) {
        if (n & 1) result += s;
        n >>= 1;
        if (n) s += s;
        else break;
      }

      return result;
    };

    var indent = function indent(str, size) {
      var eol = '\n';

      return str
        .split(eol)
        .map(function(line) {
          return strRepeat(' ', size) + line;
        })
        .join(eol);
    };

    var makeStyle = function makeStyle(selector, props) {
      var pretty =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : false;

      if (
        !selector ||
        (selector && selector.trim() === '') ||
        !index$1(props)
      ) {
        return null;
      }

      var styles = keys(props).map(function(key) {
        return index(key) + ': ' + props[key] + ';';
      });

      return pretty
        ? selector + ' {\n' + indent(styles.join('\n'), 2) + '\n}'
        : selector + '{' + styles.join('') + '}';
    };

    var makeKeyframes = function makeKeyframes(name, prefixedKeyframes, props) {
      var pretty =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : false;

      if (!name || (name && name.trim() === '') || !isArrayLike(props)) {
        return null;
      }

      var eol = '\n';
      var styles = keys(props).map(function(selector) {
        var values = props[selector];
        var selectorString = selector;

        if (typeof selector === 'number' || /^\d+$/.test(selector)) {
          var maxIndex = props.length - 1;

          if (selector === 0) {
            selectorString = '0%';
          } else if (selector === maxIndex) {
            selectorString = '100%';
          } else {
            selectorString = parseInt(selector, 10) / maxIndex * 100 + '%';
          }
        }

        return makeStyle(selectorString, values, pretty);
      });

      return pretty
        ? [
            '@' + prefixedKeyframes + ' ' + name + ' {',
            indent(styles.join(eol + eol), 2),
            '}',
          ].join(eol)
        : '@' + prefixedKeyframes + ' ' + name + '{' + styles.join('') + '}';
    };

    var index$4 = createCommonjsModule$$1(function(module) {
      /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
      /* global define */

      (function() {
        var canUseDOM = !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        );

        var ExecutionEnvironment = {
          canUseDOM: canUseDOM,

          canUseWorkers: typeof Worker !== 'undefined',

          canUseEventListeners:
            canUseDOM && !!(window.addEventListener || window.attachEvent),

          canUseViewport: canUseDOM && !!window.screen,
        };

        if (
          typeof undefined === 'function' &&
          typeof undefined.amd === 'object' &&
          undefined.amd
        ) {
          undefined(function() {
            return ExecutionEnvironment;
          });
        } else if ('object' !== 'undefined' && module.exports) {
          module.exports = ExecutionEnvironment;
        } else {
          window.ExecutionEnvironment = ExecutionEnvironment;
        }
      })();
    });

    var findStyleElement = function findStyleElement(dataName, name) {
      return document.querySelector('style[' + dataName + '="' + name + '"]');
    };

    var createStyleElement = function createStyleElement(dataName, name) {
      var el = document.createElement('style');
      el.type = 'text/css';
      el.setAttribute(dataName, name);
      document.head.appendChild(el);

      return el;
    };

    var getStyleElement = function getStyleElement(dataName, name) {
      if (!index$4.canUseDOM) return null;

      var el = findStyleElement(dataName, name);

      return el ? el : createStyleElement(dataName, name);
    };

    var classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
      }
    };

    var createClass = (function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    })();

    var _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    var CSSKeyframer = (function() {
      function CSSKeyframer() {
        var options =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        classCallCheck(this, CSSKeyframer);

        this.keyframes = {};
        this.options = _extends({}, CSSKeyframer.defaults, options);
        this.prefixer = new Prefixer({ userAgent: options.userAgent });
      }

      createClass(CSSKeyframer, [
        {
          key: 'getPrefixedName',
          value: function getPrefixedName(name) {
            return this.options.namePrefix + name;
          },
        },
        {
          key: 'getKeyframesString',
          value: function getKeyframesString(name, keyframes) {
            var _this = this;

            if (!name || typeof name !== 'string' || !isArrayLike(keyframes)) {
              return '';
            }

            var prefixedKeyframes = isArray(keyframes) ? [] : {};

            keys(keyframes).forEach(function(selector) {
              prefixedKeyframes[selector] = _this.prefixer.prefix(
                keyframes[selector],
              );
            });

            return makeKeyframes(
              this.getPrefixedName(name),
              this.prefixer.prefixedKeyframes || 'keyframes',
              prefixedKeyframes,
              this.options.pretty,
            );
          },
        },
        {
          key: 'getKeyframesStylesheet',
          value: function getKeyframesStylesheet(name, keyframes) {
            var styleDataName = this.options.styleDataName;

            var keyframesString = this.getKeyframesString(name, keyframes);

            return !keyframesString
              ? ''
              : '<style type="text/css" ' +
                  styleDataName +
                  '="' +
                  name +
                  '">' +
                  keyframesString +
                  '</style>';
          },
        },
        {
          key: 'register',
          value: function register(name, keyframes) {
            this.unregister(name);

            var styleDataName = this.options.styleDataName;

            var keyframesString = this.getKeyframesString(name, keyframes);
            if (keyframesString === '') return;

            var el = getStyleElement(styleDataName, this.getPrefixedName(name));
            if (el == null) return;

            el.innerHTML = keyframesString;

            this.keyframes[name] = el;
          },
        },
        {
          key: 'unregister',
          value: function unregister(name) {
            if (this.contains(name)) {
              var el = this.keyframes[name];
              el.parentNode.removeChild(el);
              delete this.keyframes[name];
            }
          },
        },
        {
          key: 'unregisterAll',
          value: function unregisterAll() {
            var _this2 = this;

            keys(this.keyframes).forEach(function(name) {
              return _this2.unregister(name);
            });
          },
        },
        {
          key: 'contains',
          value: function contains(name) {
            return this.keyframes.hasOwnProperty(name);
          },
        },
        {
          key: 'animationProp',
          get: function get$$1() {
            var _prefixer = this.prefixer,
              jsPrefix = _prefixer.jsPrefix,
              cssPrefix = _prefixer.cssPrefix;

            return {
              js: jsPrefix ? jsPrefix + 'Animation' : 'animation',
              css: cssPrefix + 'animation',
            };
          },
        },
      ]);
      return CSSKeyframer;
    })();

    CSSKeyframer.defaults = {
      namePrefix: '',
      styleDataName: 'data-keyframes',
      pretty: false,
      userAgent: null,
    };

    return CSSKeyframer;
  });
});

unwrapExports(cssKeyframer);

var bowser = createCommonjsModule(function(module) {
  /*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

  !(function(root, name, definition) {
    if ('object' != 'undefined' && module.exports)
      module.exports = definition();
    else if (typeof undefined == 'function' && undefined.amd)
      undefined(name, definition);
    else root[name] = definition();
  })(commonjsGlobal, 'bowser', function() {
    /**
     * See useragents.js for examples of navigator.userAgent
     */

    var t = true;

    function detect(ua) {
      function getFirstMatch(regex) {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[1]) || '';
      }

      function getSecondMatch(regex) {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[2]) || '';
      }

      var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase(),
        likeAndroid = /like android/i.test(ua),
        android = !likeAndroid && /android/i.test(ua),
        nexusMobile = /nexus\s*[0-6]\s*/i.test(ua),
        nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua),
        chromeos = /CrOS/.test(ua),
        silk = /silk/i.test(ua),
        sailfish = /sailfish/i.test(ua),
        tizen = /tizen/i.test(ua),
        webos = /(web|hpw)os/i.test(ua),
        windowsphone = /windows phone/i.test(ua),
        samsungBrowser = /SamsungBrowser/i.test(ua),
        windows = !windowsphone && /windows/i.test(ua),
        mac = !iosdevice && !silk && /macintosh/i.test(ua),
        linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua),
        edgeVersion = getSecondMatch(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
        versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i),
        tablet = /tablet/i.test(ua) && !/tablet pc/i.test(ua),
        mobile = !tablet && /[^-]mobi/i.test(ua),
        xbox = /xbox/i.test(ua),
        result;

      if (/opera/i.test(ua)) {
        //  an old Opera
        result = {
          name: 'Opera',
          opera: t,
          version:
            versionIdentifier ||
            getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
        };
      } else if (/opr\/|opios/i.test(ua)) {
        // a new Opera
        result = {
          name: 'Opera',
          opera: t,
          version:
            getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) ||
            versionIdentifier,
        };
      } else if (/SamsungBrowser/i.test(ua)) {
        result = {
          name: 'Samsung Internet for Android',
          samsungBrowser: t,
          version:
            versionIdentifier ||
            getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
        };
      } else if (/coast/i.test(ua)) {
        result = {
          name: 'Opera Coast',
          coast: t,
          version:
            versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
        };
      } else if (/yabrowser/i.test(ua)) {
        result = {
          name: 'Yandex Browser',
          yandexbrowser: t,
          version:
            versionIdentifier ||
            getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
        };
      } else if (/ucbrowser/i.test(ua)) {
        result = {
          name: 'UC Browser',
          ucbrowser: t,
          version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
        };
      } else if (/mxios/i.test(ua)) {
        result = {
          name: 'Maxthon',
          maxthon: t,
          version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
        };
      } else if (/epiphany/i.test(ua)) {
        result = {
          name: 'Epiphany',
          epiphany: t,
          version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
        };
      } else if (/puffin/i.test(ua)) {
        result = {
          name: 'Puffin',
          puffin: t,
          version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
        };
      } else if (/sleipnir/i.test(ua)) {
        result = {
          name: 'Sleipnir',
          sleipnir: t,
          version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
        };
      } else if (/k-meleon/i.test(ua)) {
        result = {
          name: 'K-Meleon',
          kMeleon: t,
          version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
        };
      } else if (windowsphone) {
        result = {
          name: 'Windows Phone',
          osname: 'Windows Phone',
          windowsphone: t,
        };
        if (edgeVersion) {
          result.msedge = t;
          result.version = edgeVersion;
        } else {
          result.msie = t;
          result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i);
        }
      } else if (/msie|trident/i.test(ua)) {
        result = {
          name: 'Internet Explorer',
          msie: t,
          version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i),
        };
      } else if (chromeos) {
        result = {
          name: 'Chrome',
          osname: 'Chrome OS',
          chromeos: t,
          chromeBook: t,
          chrome: t,
          version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
        };
      } else if (/edg([ea]|ios)/i.test(ua)) {
        result = {
          name: 'Microsoft Edge',
          msedge: t,
          version: edgeVersion,
        };
      } else if (/vivaldi/i.test(ua)) {
        result = {
          name: 'Vivaldi',
          vivaldi: t,
          version:
            getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier,
        };
      } else if (sailfish) {
        result = {
          name: 'Sailfish',
          osname: 'Sailfish OS',
          sailfish: t,
          version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
        };
      } else if (/seamonkey\//i.test(ua)) {
        result = {
          name: 'SeaMonkey',
          seamonkey: t,
          version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i),
        };
      } else if (/firefox|iceweasel|fxios/i.test(ua)) {
        result = {
          name: 'Firefox',
          firefox: t,
          version: getFirstMatch(
            /(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i,
          ),
        };
        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
          result.firefoxos = t;
          result.osname = 'Firefox OS';
        }
      } else if (silk) {
        result = {
          name: 'Amazon Silk',
          silk: t,
          version: getFirstMatch(/silk\/(\d+(\.\d+)?)/i),
        };
      } else if (/phantom/i.test(ua)) {
        result = {
          name: 'PhantomJS',
          phantom: t,
          version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i),
        };
      } else if (/slimerjs/i.test(ua)) {
        result = {
          name: 'SlimerJS',
          slimer: t,
          version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i),
        };
      } else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
        result = {
          name: 'BlackBerry',
          osname: 'BlackBerry OS',
          blackberry: t,
          version:
            versionIdentifier ||
            getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
        };
      } else if (webos) {
        result = {
          name: 'WebOS',
          osname: 'WebOS',
          webos: t,
          version:
            versionIdentifier ||
            getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
        };
        /touchpad\//i.test(ua) && (result.touchpad = t);
      } else if (/bada/i.test(ua)) {
        result = {
          name: 'Bada',
          osname: 'Bada',
          bada: t,
          version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i),
        };
      } else if (tizen) {
        result = {
          name: 'Tizen',
          osname: 'Tizen',
          tizen: t,
          version:
            getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) ||
            versionIdentifier,
        };
      } else if (/qupzilla/i.test(ua)) {
        result = {
          name: 'QupZilla',
          qupzilla: t,
          version:
            getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) ||
            versionIdentifier,
        };
      } else if (/chromium/i.test(ua)) {
        result = {
          name: 'Chromium',
          chromium: t,
          version:
            getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) ||
            versionIdentifier,
        };
      } else if (/chrome|crios|crmo/i.test(ua)) {
        result = {
          name: 'Chrome',
          chrome: t,
          version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
        };
      } else if (android) {
        result = {
          name: 'Android',
          version: versionIdentifier,
        };
      } else if (/safari|applewebkit/i.test(ua)) {
        result = {
          name: 'Safari',
          safari: t,
        };
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (iosdevice) {
        result = {
          name:
            iosdevice == 'iphone'
              ? 'iPhone'
              : iosdevice == 'ipad'
                ? 'iPad'
                : 'iPod',
        };
        // WTF: version is not part of user agent in web apps
        if (versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (/googlebot/i.test(ua)) {
        result = {
          name: 'Googlebot',
          googlebot: t,
          version:
            getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier,
        };
      } else {
        result = {
          name: getFirstMatch(/^(.*)\/(.*) /),
          version: getSecondMatch(/^(.*)\/(.*) /),
        };
      }

      // set webkit or gecko flag for browsers based on these engines
      if (!result.msedge && /(apple)?webkit/i.test(ua)) {
        if (/(apple)?webkit\/537\.36/i.test(ua)) {
          result.name = result.name || 'Blink';
          result.blink = t;
        } else {
          result.name = result.name || 'Webkit';
          result.webkit = t;
        }
        if (!result.version && versionIdentifier) {
          result.version = versionIdentifier;
        }
      } else if (!result.opera && /gecko\//i.test(ua)) {
        result.name = result.name || 'Gecko';
        result.gecko = t;
        result.version =
          result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i);
      }

      // set OS flags for platforms that have multiple browsers
      if (!result.windowsphone && (android || result.silk)) {
        result.android = t;
        result.osname = 'Android';
      } else if (!result.windowsphone && iosdevice) {
        result[iosdevice] = t;
        result.ios = t;
        result.osname = 'iOS';
      } else if (mac) {
        result.mac = t;
        result.osname = 'macOS';
      } else if (xbox) {
        result.xbox = t;
        result.osname = 'Xbox';
      } else if (windows) {
        result.windows = t;
        result.osname = 'Windows';
      } else if (linux) {
        result.linux = t;
        result.osname = 'Linux';
      }

      function getWindowsVersion(s) {
        switch (s) {
          case 'NT':
            return 'NT';
          case 'XP':
            return 'XP';
          case 'NT 5.0':
            return '2000';
          case 'NT 5.1':
            return 'XP';
          case 'NT 5.2':
            return '2003';
          case 'NT 6.0':
            return 'Vista';
          case 'NT 6.1':
            return '7';
          case 'NT 6.2':
            return '8';
          case 'NT 6.3':
            return '8.1';
          case 'NT 10.0':
            return '10';
          default:
            return undefined;
        }
      }

      // OS version extraction
      var osVersion = '';
      if (result.windows) {
        osVersion = getWindowsVersion(
          getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i),
        );
      } else if (result.windowsphone) {
        osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
      } else if (result.mac) {
        osVersion = getFirstMatch(/Mac OS X (\d+([_\.\s]\d+)*)/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (iosdevice) {
        osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
      } else if (android) {
        osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
      } else if (result.webos) {
        osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
      } else if (result.blackberry) {
        osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
      } else if (result.bada) {
        osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
      } else if (result.tizen) {
        osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
      }
      if (osVersion) {
        result.osversion = osVersion;
      }

      // device type extraction
      var osMajorVersion = !result.windows && osVersion.split('.')[0];
      if (
        tablet ||
        nexusTablet ||
        iosdevice == 'ipad' ||
        (android &&
          (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile))) ||
        result.silk
      ) {
        result.tablet = t;
      } else if (
        mobile ||
        iosdevice == 'iphone' ||
        iosdevice == 'ipod' ||
        android ||
        nexusMobile ||
        result.blackberry ||
        result.webos ||
        result.bada
      ) {
        result.mobile = t;
      }

      // Graded Browser Support
      // http://developer.yahoo.com/yui/articles/gbs
      if (
        result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
        (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios &&
          result.osversion &&
          result.osversion.split('.')[0] >= 6) ||
        (result.blackberry && result.version >= 10.1) ||
        (result.chromium && result.version >= 20)
      ) {
        result.a = t;
      } else if (
        (result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios &&
          result.osversion &&
          result.osversion.split('.')[0] < 6) ||
        (result.chromium && result.version < 20)
      ) {
        result.c = t;
      } else result.x = t;

      return result;
    }

    var bowser = detect(
      typeof navigator !== 'undefined' ? navigator.userAgent || '' : '',
    );

    bowser.test = function(browserList) {
      for (var i = 0; i < browserList.length; ++i) {
        var browserItem = browserList[i];
        if (typeof browserItem === 'string') {
          if (browserItem in bowser) {
            return true;
          }
        }
      }
      return false;
    };

    /**
     * Get version precisions count
     *
     * @example
     *   getVersionPrecision("1.10.3") // 3
     *
     * @param  {string} version
     * @return {number}
     */
    function getVersionPrecision(version) {
      return version.split('.').length;
    }

    /**
     * Array::map polyfill
     *
     * @param  {Array} arr
     * @param  {Function} iterator
     * @return {Array}
     */
    function map(arr, iterator) {
      var result = [],
        i;
      if (Array.prototype.map) {
        return Array.prototype.map.call(arr, iterator);
      }
      for (i = 0; i < arr.length; i++) {
        result.push(iterator(arr[i]));
      }
      return result;
    }

    /**
     * Calculate browser version weight
     *
     * @example
     *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
     *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
     *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
     *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
     *
     * @param  {Array<String>} versions versions to compare
     * @return {Number} comparison result
     */
    function compareVersions(versions) {
      // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
      var precision = Math.max(
        getVersionPrecision(versions[0]),
        getVersionPrecision(versions[1]),
      );
      var chunks = map(versions, function(version) {
        var delta = precision - getVersionPrecision(version);

        // 2) "9" -> "9.0" (for precision = 2)
        version = version + new Array(delta + 1).join('.0');

        // 3) "9.0" -> ["000000000"", "000000009"]
        return map(version.split('.'), function(chunk) {
          return new Array(20 - chunk.length).join('0') + chunk;
        }).reverse();
      });

      // iterate in reverse order by reversed chunks array
      while (--precision >= 0) {
        // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
        if (chunks[0][precision] > chunks[1][precision]) {
          return 1;
        } else if (chunks[0][precision] === chunks[1][precision]) {
          if (precision === 0) {
            // all version chunks are same
            return 0;
          }
        } else {
          return -1;
        }
      }
    }

    /**
     * Check if browser is unsupported
     *
     * @example
     *   bowser.isUnsupportedBrowser({
     *     msie: "10",
     *     firefox: "23",
     *     chrome: "29",
     *     safari: "5.1",
     *     opera: "16",
     *     phantom: "534"
     *   });
     *
     * @param  {Object}  minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */
    function isUnsupportedBrowser(minVersions, strictMode, ua) {
      var _bowser = bowser;

      // make strictMode param optional with ua param usage
      if (typeof strictMode === 'string') {
        ua = strictMode;
        strictMode = void 0;
      }

      if (strictMode === void 0) {
        strictMode = false;
      }
      if (ua) {
        _bowser = detect(ua);
      }

      var version = '' + _bowser.version;
      for (var browser in minVersions) {
        if (minVersions.hasOwnProperty(browser)) {
          if (_bowser[browser]) {
            if (typeof minVersions[browser] !== 'string') {
              throw new Error(
                'Browser version in the minVersion map should be a string: ' +
                  browser +
                  ': ' +
                  String(minVersions),
              );
            }

            // browser version and min supported version.
            return compareVersions([version, minVersions[browser]]) < 0;
          }
        }
      }

      return strictMode; // not found
    }

    /**
     * Check if browser is supported
     *
     * @param  {Object} minVersions map of minimal version to browser
     * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
     * @param  {String}  [ua] user agent string
     * @return {Boolean}
     */
    function check(minVersions, strictMode, ua) {
      return !isUnsupportedBrowser(minVersions, strictMode, ua);
    }

    bowser.isUnsupportedBrowser = isUnsupportedBrowser;
    bowser.compareVersions = compareVersions;
    bowser.check = check;

    /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
    bowser._detect = detect;

    /*
   * Set our detect public method to the main bowser object
   * This is needed to implement bowser in server side
   */
    bowser.detect = detect;
    return bowser;
  });
});

var getBrowserInformation_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = getBrowserInformation;

  var _bowser2 = _interopRequireDefault(bowser);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var prefixByBrowser = {
    chrome: 'Webkit',
    safari: 'Webkit',
    ios: 'Webkit',
    android: 'Webkit',
    phantom: 'Webkit',
    opera: 'Webkit',
    webos: 'Webkit',
    blackberry: 'Webkit',
    bada: 'Webkit',
    tizen: 'Webkit',
    chromium: 'Webkit',
    vivaldi: 'Webkit',
    firefox: 'Moz',
    seamoney: 'Moz',
    sailfish: 'Moz',
    msie: 'ms',
    msedge: 'ms',
  };

  var browserByCanIuseAlias = {
    chrome: 'chrome',
    chromium: 'chrome',
    safari: 'safari',
    firfox: 'firefox',
    msedge: 'edge',
    opera: 'opera',
    vivaldi: 'opera',
    msie: 'ie',
  };

  function getBrowserName(browserInfo) {
    if (browserInfo.firefox) {
      return 'firefox';
    }

    if (browserInfo.mobile || browserInfo.tablet) {
      if (browserInfo.ios) {
        return 'ios_saf';
      } else if (browserInfo.android) {
        return 'android';
      } else if (browserInfo.opera) {
        return 'op_mini';
      }
    }

    for (var browser in browserByCanIuseAlias) {
      if (browserInfo.hasOwnProperty(browser)) {
        return browserByCanIuseAlias[browser];
      }
    }
  }

  /**
   * Uses bowser to get default browser browserInformation such as version and name
   * Evaluates bowser browserInfo and adds vendorPrefix browserInformation
   * @param {string} userAgent - userAgent that gets evaluated
   */
  function getBrowserInformation(userAgent) {
    var browserInfo = _bowser2.default._detect(userAgent);

    if (browserInfo.yandexbrowser) {
      browserInfo = _bowser2.default._detect(
        userAgent.replace(/YaBrowser\/[0-9.]*/, ''),
      );
    }

    for (var browser in prefixByBrowser) {
      if (browserInfo.hasOwnProperty(browser)) {
        var prefix = prefixByBrowser[browser];

        browserInfo.jsPrefix = prefix;
        browserInfo.cssPrefix = '-' + prefix.toLowerCase() + '-';
        break;
      }
    }

    browserInfo.browserName = getBrowserName(browserInfo);

    // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
    if (browserInfo.version) {
      browserInfo.browserVersion = parseFloat(browserInfo.version);
    } else {
      browserInfo.browserVersion = parseInt(
        parseFloat(browserInfo.osversion),
        10,
      );
    }

    browserInfo.osVersion = parseFloat(browserInfo.osversion);

    // iOS forces all browsers to use Safari under the hood
    // as the Safari version seems to match the iOS version
    // we just explicitely use the osversion instead
    // https://github.com/rofrischmann/inline-style-prefixer/issues/72
    if (
      browserInfo.browserName === 'ios_saf' &&
      browserInfo.browserVersion > browserInfo.osVersion
    ) {
      browserInfo.browserVersion = browserInfo.osVersion;
    }

    // seperate native android chrome
    // https://github.com/rofrischmann/inline-style-prefixer/issues/45
    if (
      browserInfo.browserName === 'android' &&
      browserInfo.chrome &&
      browserInfo.browserVersion > 37
    ) {
      browserInfo.browserName = 'and_chr';
    }

    // For android < 4.4 we want to check the osversion
    // not the chrome version, see issue #26
    // https://github.com/rofrischmann/inline-style-prefixer/issues/26
    if (browserInfo.browserName === 'android' && browserInfo.osVersion < 5) {
      browserInfo.browserVersion = browserInfo.osVersion;
    }

    // Samsung browser are basically build on Chrome > 44
    // https://github.com/rofrischmann/inline-style-prefixer/issues/102
    if (browserInfo.browserName === 'android' && browserInfo.samsungBrowser) {
      browserInfo.browserName = 'and_chr';
      browserInfo.browserVersion = 44;
    }

    return browserInfo;
  }
  module.exports = exports['default'];
});

unwrapExports(getBrowserInformation_1);

var getPrefixedKeyframes_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = getPrefixedKeyframes;
  function getPrefixedKeyframes(browserName, browserVersion, cssPrefix) {
    var prefixedKeyframes = 'keyframes';

    if (
      (browserName === 'chrome' && browserVersion < 43) ||
      ((browserName === 'safari' || browserName === 'ios_saf') &&
        browserVersion < 9) ||
      (browserName === 'opera' && browserVersion < 30) ||
      (browserName === 'android' && browserVersion <= 4.4) ||
      browserName === 'and_uc'
    ) {
      return cssPrefix + prefixedKeyframes;
    }
    return prefixedKeyframes;
  }
  module.exports = exports['default'];
});

unwrapExports(getPrefixedKeyframes_1);

var capitalizeString_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = capitalizeString;
  function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  module.exports = exports['default'];
});

unwrapExports(capitalizeString_1);

var addNewValuesOnly_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = addNewValuesOnly;
  function addIfNew(list, value) {
    if (list.indexOf(value) === -1) {
      list.push(value);
    }
  }

  function addNewValuesOnly(list, values) {
    if (Array.isArray(values)) {
      for (var i = 0, len = values.length; i < len; ++i) {
        addIfNew(list, values[i]);
      }
    } else {
      addIfNew(list, values);
    }
  }
  module.exports = exports['default'];
});

unwrapExports(addNewValuesOnly_1);

var isObject_1$2 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = isObject;
  function isObject(value) {
    return value instanceof Object && !Array.isArray(value);
  }
  module.exports = exports['default'];
});

unwrapExports(isObject_1$2);

var prefixValue_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = prefixValue;
  function prefixValue(plugins, property, value, style, metaData) {
    for (var i = 0, len = plugins.length; i < len; ++i) {
      var processedValue = plugins[i](property, value, style, metaData);

      // we can stop processing if a value is returned
      // as all plugin criteria are unique
      if (processedValue) {
        return processedValue;
      }
    }
  }
  module.exports = exports['default'];
});

unwrapExports(prefixValue_1);

var createPrefixer_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  exports.default = createPrefixer;

  var _getBrowserInformation2 = _interopRequireDefault(getBrowserInformation_1);

  var _getPrefixedKeyframes2 = _interopRequireDefault(getPrefixedKeyframes_1);

  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  var _addNewValuesOnly2 = _interopRequireDefault(addNewValuesOnly_1);

  var _isObject2 = _interopRequireDefault(isObject_1$2);

  var _prefixValue2 = _interopRequireDefault(prefixValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
    var fallback =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : function(style) {
            return style;
          };

    return (function() {
      /**
       * Instantiante a new prefixer
       * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
       * @param {string} keepUnprefixed - keeps unprefixed properties and values
       */
      function Prefixer() {
        var options =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};

        _classCallCheck(this, Prefixer);

        var defaultUserAgent =
          typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

        this._userAgent = options.userAgent || defaultUserAgent;
        this._keepUnprefixed = options.keepUnprefixed || false;

        if (this._userAgent) {
          this._browserInfo = (0, _getBrowserInformation2.default)(
            this._userAgent,
          );
        }

        // Checks if the userAgent was resolved correctly
        if (this._browserInfo && this._browserInfo.cssPrefix) {
          this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(
            this._browserInfo.browserName,
            this._browserInfo.browserVersion,
            this._browserInfo.cssPrefix,
          );
        } else {
          this._useFallback = true;
          return false;
        }

        var prefixData =
          this._browserInfo.browserName &&
          prefixMap[this._browserInfo.browserName];
        if (prefixData) {
          this._requiresPrefix = {};

          for (var property in prefixData) {
            if (prefixData[property] >= this._browserInfo.browserVersion) {
              this._requiresPrefix[property] = true;
            }
          }

          this._hasPropsRequiringPrefix =
            Object.keys(this._requiresPrefix).length > 0;
        } else {
          this._useFallback = true;
        }

        this._metaData = {
          browserVersion: this._browserInfo.browserVersion,
          browserName: this._browserInfo.browserName,
          cssPrefix: this._browserInfo.cssPrefix,
          jsPrefix: this._browserInfo.jsPrefix,
          keepUnprefixed: this._keepUnprefixed,
          requiresPrefix: this._requiresPrefix,
        };
      }

      _createClass(
        Prefixer,
        [
          {
            key: 'prefix',
            value: function prefix(style) {
              // use static prefixer as fallback if userAgent can not be resolved
              if (this._useFallback) {
                return fallback(style);
              }

              // only add prefixes if needed
              if (!this._hasPropsRequiringPrefix) {
                return style;
              }

              return this._prefixStyle(style);
            },
          },
          {
            key: '_prefixStyle',
            value: function _prefixStyle(style) {
              for (var property in style) {
                var value = style[property];

                // handle nested objects
                if ((0, _isObject2.default)(value)) {
                  style[property] = this.prefix(value);
                  // handle array values
                } else if (Array.isArray(value)) {
                  var combinedValue = [];

                  for (var i = 0, len = value.length; i < len; ++i) {
                    var processedValue = (0, _prefixValue2.default)(
                      plugins,
                      property,
                      value[i],
                      style,
                      this._metaData,
                    );
                    (0, _addNewValuesOnly2.default)(
                      combinedValue,
                      processedValue || value[i],
                    );
                  }

                  // only modify the value if it was touched
                  // by any plugin to prevent unnecessary mutations
                  if (combinedValue.length > 0) {
                    style[property] = combinedValue;
                  }
                } else {
                  var _processedValue = (0, _prefixValue2.default)(
                    plugins,
                    property,
                    value,
                    style,
                    this._metaData,
                  );

                  // only modify the value if it was touched
                  // by any plugin to prevent unnecessary mutations
                  if (_processedValue) {
                    style[property] = _processedValue;
                  }

                  // add prefixes to properties
                  if (this._requiresPrefix.hasOwnProperty(property)) {
                    style[
                      this._browserInfo.jsPrefix +
                        (0, _capitalizeString2.default)(property)
                    ] = value;
                    if (!this._keepUnprefixed) {
                      delete style[property];
                    }
                  }
                }
              }

              return style;
            },

            /**
             * Returns a prefixed version of the style object using all vendor prefixes
             * @param {Object} styles - Style object that gets prefixed properties added
             * @returns {Object} - Style object with prefixed properties and values
             */
          },
        ],
        [
          {
            key: 'prefixAll',
            value: function prefixAll(styles) {
              return fallback(styles);
            },
          },
        ],
      );

      return Prefixer;
    })();
  }
  module.exports = exports['default'];
});

unwrapExports(createPrefixer_1);

var getPrefixedValue_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = getPrefixedValue;
  function getPrefixedValue(prefixedValue, value, keepUnprefixed) {
    if (keepUnprefixed) {
      return [prefixedValue, value];
    }
    return prefixedValue;
  }
  module.exports = exports['default'];
});

unwrapExports(getPrefixedValue_1);

var cursor_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = cursor;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var grabValues = {
    grab: true,
    grabbing: true,
  };

  var zoomValues = {
    'zoom-in': true,
    'zoom-out': true,
  };

  function cursor(property, value, style, _ref) {
    var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    // adds prefixes for firefox, chrome, safari, and opera regardless of
    // version until a reliable browser support info can be found
    // see: https://github.com/rofrischmann/inline-style-prefixer/issues/79
    if (
      property === 'cursor' &&
      grabValues[value] &&
      (browserName === 'firefox' ||
        browserName === 'chrome' ||
        browserName === 'safari' ||
        browserName === 'opera')
    ) {
      return (0, _getPrefixedValue2.default)(
        cssPrefix + value,
        value,
        keepUnprefixed,
      );
    }

    if (
      property === 'cursor' &&
      zoomValues[value] &&
      ((browserName === 'firefox' && browserVersion < 24) ||
        (browserName === 'chrome' && browserVersion < 37) ||
        (browserName === 'safari' && browserVersion < 9) ||
        (browserName === 'opera' && browserVersion < 24))
    ) {
      return (0, _getPrefixedValue2.default)(
        cssPrefix + value,
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(cursor_1);

var crossFade_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = crossFade;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function crossFade(property, value, style, _ref) {
    var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    if (
      typeof value === 'string' &&
      value.indexOf('cross-fade(') > -1 &&
      (browserName === 'chrome' ||
        browserName === 'opera' ||
        browserName === 'and_chr' ||
        ((browserName === 'ios_saf' || browserName === 'safari') &&
          browserVersion < 10))
    ) {
      return (0, _getPrefixedValue2.default)(
        value.replace(/cross-fade\(/g, cssPrefix + 'cross-fade('),
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(crossFade_1);

var filter_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = filter;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function filter(property, value, style, _ref) {
    var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    if (
      typeof value === 'string' &&
      value.indexOf('filter(') > -1 &&
      (browserName === 'ios_saf' ||
        (browserName === 'safari' && browserVersion < 9.1))
    ) {
      return (0, _getPrefixedValue2.default)(
        value.replace(/filter\(/g, cssPrefix + 'filter('),
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(filter_1);

var flex_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = flex;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var values = {
    flex: true,
    'inline-flex': true,
  };
  function flex(property, value, style, _ref) {
    var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    if (
      property === 'display' &&
      values[value] &&
      ((browserName === 'chrome' &&
        browserVersion < 29 &&
        browserVersion > 20) ||
        ((browserName === 'safari' || browserName === 'ios_saf') &&
          browserVersion < 9 &&
          browserVersion > 6) ||
        (browserName === 'opera' &&
          (browserVersion === 15 || browserVersion === 16)))
    ) {
      return (0, _getPrefixedValue2.default)(
        cssPrefix + value,
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(flex_1);

var flexboxOld_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = flexboxOld;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple',
    flex: 'box',
    'inline-flex': 'inline-box',
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines',
  };

  var otherProps = [
    'alignContent',
    'alignSelf',
    'order',
    'flexGrow',
    'flexShrink',
    'flexBasis',
    'flexDirection',
  ];
  var properties = Object.keys(alternativeProps).concat(otherProps);

  function flexboxOld(property, value, style, _ref) {
    var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

    if (
      (properties.indexOf(property) > -1 ||
        (property === 'display' &&
          typeof value === 'string' &&
          value.indexOf('flex') > -1)) &&
      ((browserName === 'firefox' && browserVersion < 22) ||
        (browserName === 'chrome' && browserVersion < 21) ||
        ((browserName === 'safari' || browserName === 'ios_saf') &&
          browserVersion <= 6.1) ||
        (browserName === 'android' && browserVersion < 4.4) ||
        browserName === 'and_uc')
    ) {
      delete requiresPrefix[property];

      if (!keepUnprefixed && !Array.isArray(style[property])) {
        delete style[property];
      }
      if (property === 'flexDirection' && typeof value === 'string') {
        if (value.indexOf('column') > -1) {
          style.WebkitBoxOrient = 'vertical';
        } else {
          style.WebkitBoxOrient = 'horizontal';
        }
        if (value.indexOf('reverse') > -1) {
          style.WebkitBoxDirection = 'reverse';
        } else {
          style.WebkitBoxDirection = 'normal';
        }
      }
      if (property === 'display' && alternativeValues.hasOwnProperty(value)) {
        return (0, _getPrefixedValue2.default)(
          cssPrefix + alternativeValues[value],
          value,
          keepUnprefixed,
        );
      }
      if (alternativeProps.hasOwnProperty(property)) {
        style[alternativeProps[property]] = alternativeValues[value] || value;
      }
    }
  }
  module.exports = exports['default'];
});

unwrapExports(flexboxOld_1);

var gradient_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = gradient;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;
  function gradient(property, value, style, _ref) {
    var browserName = _ref.browserName,
      browserVersion = _ref.browserVersion,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    if (
      typeof value === 'string' &&
      values.test(value) &&
      ((browserName === 'firefox' && browserVersion < 16) ||
        (browserName === 'chrome' && browserVersion < 26) ||
        ((browserName === 'safari' || browserName === 'ios_saf') &&
          browserVersion < 7) ||
        ((browserName === 'opera' || browserName === 'op_mini') &&
          browserVersion < 12.1) ||
        (browserName === 'android' && browserVersion < 4.4) ||
        browserName === 'and_uc')
    ) {
      return (0, _getPrefixedValue2.default)(
        cssPrefix + value,
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(gradient_1);

var imageSet_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = imageSet;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function imageSet(property, value, style, _ref) {
    var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    if (
      typeof value === 'string' &&
      value.indexOf('image-set(') > -1 &&
      (browserName === 'chrome' ||
        browserName === 'opera' ||
        browserName === 'and_chr' ||
        browserName === 'and_uc' ||
        browserName === 'ios_saf' ||
        browserName === 'safari')
    ) {
      return (0, _getPrefixedValue2.default)(
        value.replace(/image-set\(/g, cssPrefix + 'image-set('),
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(imageSet_1);

var position_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = position;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function position(property, value, style, _ref) {
    var browserName = _ref.browserName,
      cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    if (
      property === 'position' &&
      value === 'sticky' &&
      (browserName === 'safari' || browserName === 'ios_saf')
    ) {
      return (0, _getPrefixedValue2.default)(
        cssPrefix + value,
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(position_1);

var sizing_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = sizing;

  var _getPrefixedValue2 = _interopRequireDefault(getPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true,
  };

  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true,

    // TODO: chrome & opera support it
  };
  function sizing(property, value, style, _ref) {
    var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed;

    // This might change in the future
    // Keep an eye on it
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return (0, _getPrefixedValue2.default)(
        cssPrefix + value,
        value,
        keepUnprefixed,
      );
    }
  }
  module.exports = exports['default'];
});

unwrapExports(sizing_1);

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
  return string in cache
    ? cache[string]
    : (cache[string] = string
        .replace(uppercasePattern, '-$&')
        .toLowerCase()
        .replace(msPattern, '-ms-'));
}

var hyphenateStyleName_1 = hyphenateStyleName;

var hyphenateProperty_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = hyphenateProperty;

  var _hyphenateStyleName2 = _interopRequireDefault(hyphenateStyleName_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function hyphenateProperty(property) {
    return (0, _hyphenateStyleName2.default)(property);
  }
  module.exports = exports['default'];
});

unwrapExports(hyphenateProperty_1);

var transition_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = transition;

  var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true,
  };

  var requiresPrefixDashCased = void 0;

  function transition(property, value, style, _ref) {
    var cssPrefix = _ref.cssPrefix,
      keepUnprefixed = _ref.keepUnprefixed,
      requiresPrefix = _ref.requiresPrefix;

    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      // memoize the prefix array for later use
      if (!requiresPrefixDashCased) {
        requiresPrefixDashCased = Object.keys(requiresPrefix).map(function(
          prop,
        ) {
          return (0, _hyphenateProperty2.default)(prop);
        });
      }

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function(prop) {
        multipleValues.forEach(function(val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] =
              val.replace(prop, cssPrefix + prop) +
              (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return multipleValues.join(',');
    }
  }
  module.exports = exports['default'];
});

unwrapExports(transition_1);

var prefixProperty_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = prefixProperty;

  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function prefixProperty(prefixProperties, property, style) {
    if (prefixProperties.hasOwnProperty(property)) {
      var requiredPrefixes = prefixProperties[property];
      for (var i = 0, len = requiredPrefixes.length; i < len; ++i) {
        style[requiredPrefixes[i] + (0, _capitalizeString2.default)(property)] =
          style[property];
      }
    }
  }
  module.exports = exports['default'];
});

unwrapExports(prefixProperty_1);

var createPrefixer_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createPrefixer;

  var _prefixProperty2 = _interopRequireDefault(prefixProperty_1);

  var _prefixValue2 = _interopRequireDefault(prefixValue_1);

  var _addNewValuesOnly2 = _interopRequireDefault(addNewValuesOnly_1);

  var _isObject2 = _interopRequireDefault(isObject_1$2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function createPrefixer(_ref) {
    var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

    function prefixAll(style) {
      for (var property in style) {
        var value = style[property];

        // handle nested objects
        if ((0, _isObject2.default)(value)) {
          style[property] = prefixAll(value);
          // handle array values
        } else if (Array.isArray(value)) {
          var combinedValue = [];

          for (var i = 0, len = value.length; i < len; ++i) {
            var processedValue = (0, _prefixValue2.default)(
              plugins,
              property,
              value[i],
              style,
              prefixMap,
            );
            (0, _addNewValuesOnly2.default)(
              combinedValue,
              processedValue || value[i],
            );
          }

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (combinedValue.length > 0) {
            style[property] = combinedValue;
          }
        } else {
          var _processedValue = (0, _prefixValue2.default)(
            plugins,
            property,
            value,
            style,
            prefixMap,
          );

          // only modify the value if it was touched
          // by any plugin to prevent unnecessary mutations
          if (_processedValue) {
            style[property] = _processedValue;
          }

          (0, _prefixProperty2.default)(prefixMap, property, style);
        }
      }

      return style;
    }

    return prefixAll;
  }
  module.exports = exports['default'];
});

unwrapExports(createPrefixer_1$1);

var staticData = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var w = ['Webkit'];
  var m = ['Moz'];
  var ms = ['ms'];
  var wm = ['Webkit', 'Moz'];
  var wms = ['Webkit', 'ms'];
  var wmms = ['Webkit', 'Moz', 'ms'];

  exports.default = {
    plugins: [],
    prefixMap: {
      appearance: wm,
      userSelect: wmms,
      textEmphasisPosition: w,
      textEmphasis: w,
      textEmphasisStyle: w,
      textEmphasisColor: w,
      boxDecorationBreak: w,
      clipPath: w,
      maskImage: w,
      maskMode: w,
      maskRepeat: w,
      maskPosition: w,
      maskClip: w,
      maskOrigin: w,
      maskSize: w,
      maskComposite: w,
      mask: w,
      maskBorderSource: w,
      maskBorderMode: w,
      maskBorderSlice: w,
      maskBorderWidth: w,
      maskBorderOutset: w,
      maskBorderRepeat: w,
      maskBorder: w,
      maskType: w,
      textDecorationStyle: w,
      textDecorationSkip: w,
      textDecorationLine: w,
      textDecorationColor: w,
      filter: w,
      fontFeatureSettings: w,
      breakAfter: wmms,
      breakBefore: wmms,
      breakInside: wmms,
      columnCount: wm,
      columnFill: wm,
      columnGap: wm,
      columnRule: wm,
      columnRuleColor: wm,
      columnRuleStyle: wm,
      columnRuleWidth: wm,
      columns: wm,
      columnSpan: wm,
      columnWidth: wm,
      writingMode: wms,
      flex: w,
      flexBasis: w,
      flexDirection: w,
      flexGrow: w,
      flexFlow: w,
      flexShrink: w,
      flexWrap: w,
      alignContent: w,
      alignItems: w,
      alignSelf: w,
      justifyContent: w,
      order: w,
      transform: w,
      transformOrigin: w,
      transformOriginX: w,
      transformOriginY: w,
      backfaceVisibility: w,
      perspective: w,
      perspectiveOrigin: w,
      transformStyle: w,
      transformOriginZ: w,
      animation: w,
      animationDelay: w,
      animationDirection: w,
      animationFillMode: w,
      animationDuration: w,
      animationIterationCount: w,
      animationName: w,
      animationPlayState: w,
      animationTimingFunction: w,
      backdropFilter: w,
      fontKerning: w,
      scrollSnapType: wms,
      scrollSnapPointsX: wms,
      scrollSnapPointsY: wms,
      scrollSnapDestination: wms,
      scrollSnapCoordinate: wms,
      shapeImageThreshold: w,
      shapeImageMargin: w,
      shapeImageOutside: w,
      hyphens: wmms,
      flowInto: wms,
      flowFrom: wms,
      regionFragment: wms,
      textAlignLast: m,
      tabSize: m,
      wrapFlow: ms,
      wrapThrough: ms,
      wrapMargin: ms,
      gridTemplateColumns: ms,
      gridTemplateRows: ms,
      gridTemplateAreas: ms,
      gridTemplate: ms,
      gridAutoColumns: ms,
      gridAutoRows: ms,
      gridAutoFlow: ms,
      grid: ms,
      gridRowStart: ms,
      gridColumnStart: ms,
      gridRowEnd: ms,
      gridRow: ms,
      gridColumn: ms,
      gridColumnEnd: ms,
      gridColumnGap: ms,
      gridRowGap: ms,
      gridArea: ms,
      gridGap: ms,
      textSizeAdjust: wms,
      borderImage: w,
      borderImageOutset: w,
      borderImageRepeat: w,
      borderImageSlice: w,
      borderImageSource: w,
      borderImageWidth: w,
      transitionDelay: w,
      transitionDuration: w,
      transitionProperty: w,
      transitionTimingFunction: w,
    },
  };
  module.exports = exports['default'];
});

unwrapExports(staticData);

var cursor_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = cursor;
  var prefixes = ['-webkit-', '-moz-', ''];

  var values = {
    'zoom-in': true,
    'zoom-out': true,
    grab: true,
    grabbing: true,
  };

  function cursor(property, value) {
    if (property === 'cursor' && values.hasOwnProperty(value)) {
      return prefixes.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
});

unwrapExports(cursor_1$1);

var isPrefixedValue_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = isPrefixedValue;
  var regex = /-webkit-|-moz-|-ms-/;

  function isPrefixedValue(value) {
    return typeof value === 'string' && regex.test(value);
  }
  module.exports = exports['default'];
});

unwrapExports(isPrefixedValue_1);

var crossFade_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = crossFade;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // http://caniuse.com/#search=cross-fade
  var prefixes = ['-webkit-', ''];
  function crossFade(property, value) {
    if (
      typeof value === 'string' &&
      !(0, _isPrefixedValue2.default)(value) &&
      value.indexOf('cross-fade(') > -1
    ) {
      return prefixes.map(function(prefix) {
        return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
      });
    }
  }
  module.exports = exports['default'];
});

unwrapExports(crossFade_1$1);

var filter_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = filter;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // http://caniuse.com/#feat=css-filter-function
  var prefixes = ['-webkit-', ''];
  function filter(property, value) {
    if (
      typeof value === 'string' &&
      !(0, _isPrefixedValue2.default)(value) &&
      value.indexOf('filter(') > -1
    ) {
      return prefixes.map(function(prefix) {
        return value.replace(/filter\(/g, prefix + 'filter(');
      });
    }
  }
  module.exports = exports['default'];
});

unwrapExports(filter_1$1);

var flex_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = flex;
  var values = {
    flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
    'inline-flex': [
      '-webkit-inline-box',
      '-moz-inline-box',
      '-ms-inline-flexbox',
      '-webkit-inline-flex',
      'inline-flex',
    ],
  };

  function flex(property, value) {
    if (property === 'display' && values.hasOwnProperty(value)) {
      return values[value];
    }
  }
  module.exports = exports['default'];
});

unwrapExports(flex_1$1);

var flexboxOld_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = flexboxOld;
  var alternativeValues = {
    'space-around': 'justify',
    'space-between': 'justify',
    'flex-start': 'start',
    'flex-end': 'end',
    'wrap-reverse': 'multiple',
    wrap: 'multiple',
  };

  var alternativeProps = {
    alignItems: 'WebkitBoxAlign',
    justifyContent: 'WebkitBoxPack',
    flexWrap: 'WebkitBoxLines',
  };

  function flexboxOld(property, value, style) {
    if (property === 'flexDirection' && typeof value === 'string') {
      if (value.indexOf('column') > -1) {
        style.WebkitBoxOrient = 'vertical';
      } else {
        style.WebkitBoxOrient = 'horizontal';
      }
      if (value.indexOf('reverse') > -1) {
        style.WebkitBoxDirection = 'reverse';
      } else {
        style.WebkitBoxDirection = 'normal';
      }
    }
    if (alternativeProps.hasOwnProperty(property)) {
      style[alternativeProps[property]] = alternativeValues[value] || value;
    }
  }
  module.exports = exports['default'];
});

unwrapExports(flexboxOld_1$1);

var gradient_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = gradient;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var prefixes = ['-webkit-', '-moz-', ''];

  var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

  function gradient(property, value) {
    if (
      typeof value === 'string' &&
      !(0, _isPrefixedValue2.default)(value) &&
      values.test(value)
    ) {
      return prefixes.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
});

unwrapExports(gradient_1$1);

var imageSet_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = imageSet;

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // http://caniuse.com/#feat=css-image-set
  var prefixes = ['-webkit-', ''];
  function imageSet(property, value) {
    if (
      typeof value === 'string' &&
      !(0, _isPrefixedValue2.default)(value) &&
      value.indexOf('image-set(') > -1
    ) {
      return prefixes.map(function(prefix) {
        return value.replace(/image-set\(/g, prefix + 'image-set(');
      });
    }
  }
  module.exports = exports['default'];
});

unwrapExports(imageSet_1$1);

var position_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = position;
  function position(property, value) {
    if (property === 'position' && value === 'sticky') {
      return ['-webkit-sticky', 'sticky'];
    }
  }
  module.exports = exports['default'];
});

unwrapExports(position_1$1);

var sizing_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = sizing;
  var prefixes = ['-webkit-', '-moz-', ''];

  var properties = {
    maxHeight: true,
    maxWidth: true,
    width: true,
    height: true,
    columnWidth: true,
    minWidth: true,
    minHeight: true,
  };
  var values = {
    'min-content': true,
    'max-content': true,
    'fill-available': true,
    'fit-content': true,
    'contain-floats': true,
  };

  function sizing(property, value) {
    if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
      return prefixes.map(function(prefix) {
        return prefix + value;
      });
    }
  }
  module.exports = exports['default'];
});

unwrapExports(sizing_1$1);

var transition_1$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = transition;

  var _hyphenateProperty2 = _interopRequireDefault(hyphenateProperty_1);

  var _isPrefixedValue2 = _interopRequireDefault(isPrefixedValue_1);

  var _capitalizeString2 = _interopRequireDefault(capitalizeString_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var properties = {
    transition: true,
    transitionProperty: true,
    WebkitTransition: true,
    WebkitTransitionProperty: true,
    MozTransition: true,
    MozTransitionProperty: true,
  };

  var prefixMapping = {
    Webkit: '-webkit-',
    Moz: '-moz-',
    ms: '-ms-',
  };

  function prefixValue(value, propertyPrefixMap) {
    if ((0, _isPrefixedValue2.default)(value)) {
      return value;
    }

    // only split multi values, not cubic beziers
    var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

    for (var i = 0, len = multipleValues.length; i < len; ++i) {
      var singleValue = multipleValues[i];
      var values = [singleValue];
      for (var property in propertyPrefixMap) {
        var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

        if (
          singleValue.indexOf(dashCaseProperty) > -1 &&
          dashCaseProperty !== 'order'
        ) {
          var prefixes = propertyPrefixMap[property];
          for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
            // join all prefixes and create a new value
            values.unshift(
              singleValue.replace(
                dashCaseProperty,
                prefixMapping[prefixes[j]] + dashCaseProperty,
              ),
            );
          }
        }
      }

      multipleValues[i] = values.join(',');
    }

    return multipleValues.join(',');
  }

  function transition(property, value, style, propertyPrefixMap) {
    // also check for already prefixed transitions
    if (typeof value === 'string' && properties.hasOwnProperty(property)) {
      var outputValue = prefixValue(value, propertyPrefixMap);
      // if the property is already prefixed
      var webkitOutput = outputValue
        .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
        .filter(function(val) {
          return !/-moz-|-ms-/.test(val);
        })
        .join(',');

      if (property.indexOf('Webkit') > -1) {
        return webkitOutput;
      }

      var mozOutput = outputValue
        .split(/,(?![^()]*(?:\([^()]*\))?\))/g)
        .filter(function(val) {
          return !/-webkit-|-ms-/.test(val);
        })
        .join(',');

      if (property.indexOf('Moz') > -1) {
        return mozOutput;
      }

      style[
        'Webkit' + (0, _capitalizeString2.default)(property)
      ] = webkitOutput;
      style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
      return outputValue;
    }
  }
  module.exports = exports['default'];
});

unwrapExports(transition_1$1);

var _static = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _createPrefixer2 = _interopRequireDefault(createPrefixer_1$1);

  var _staticData2 = _interopRequireDefault(staticData);

  var _cursor2 = _interopRequireDefault(cursor_1$1);

  var _crossFade2 = _interopRequireDefault(crossFade_1$1);

  var _filter2 = _interopRequireDefault(filter_1$1);

  var _flex2 = _interopRequireDefault(flex_1$1);

  var _flexboxOld2 = _interopRequireDefault(flexboxOld_1$1);

  var _gradient2 = _interopRequireDefault(gradient_1$1);

  var _imageSet2 = _interopRequireDefault(imageSet_1$1);

  var _position2 = _interopRequireDefault(position_1$1);

  var _sizing2 = _interopRequireDefault(sizing_1$1);

  var _transition2 = _interopRequireDefault(transition_1$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var plugins = [
    _crossFade2.default,
    _cursor2.default,
    _filter2.default,
    _flexboxOld2.default,
    _gradient2.default,
    _imageSet2.default,
    _position2.default,
    _sizing2.default,
    _transition2.default,
    _flex2.default,
  ];

  exports.default = (0, _createPrefixer2.default)({
    prefixMap: _staticData2.default.prefixMap,
    plugins: plugins,
  });
  module.exports = exports['default'];
});

unwrapExports(_static);

var dynamicData = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = {
    plugins: [],
    prefixMap: {
      chrome: {
        appearance: 64,
        userSelect: 53,
        textEmphasisPosition: 64,
        textEmphasis: 64,
        textEmphasisStyle: 64,
        textEmphasisColor: 64,
        boxDecorationBreak: 64,
        clipPath: 54,
        maskImage: 64,
        maskMode: 64,
        maskRepeat: 64,
        maskPosition: 64,
        maskClip: 64,
        maskOrigin: 64,
        maskSize: 64,
        maskComposite: 64,
        mask: 64,
        maskBorderSource: 64,
        maskBorderMode: 64,
        maskBorderSlice: 64,
        maskBorderWidth: 64,
        maskBorderOutset: 64,
        maskBorderRepeat: 64,
        maskBorder: 64,
        maskType: 64,
        textDecorationStyle: 56,
        textDecorationSkip: 56,
        textDecorationLine: 56,
        textDecorationColor: 56,
        filter: 52,
        fontFeatureSettings: 47,
        breakAfter: 49,
        breakBefore: 49,
        breakInside: 49,
        columnCount: 49,
        columnFill: 49,
        columnGap: 49,
        columnRule: 49,
        columnRuleColor: 49,
        columnRuleStyle: 49,
        columnRuleWidth: 49,
        columns: 49,
        columnSpan: 49,
        columnWidth: 49,
        writingMode: 47,
      },
      safari: {
        flex: 8,
        flexBasis: 8,
        flexDirection: 8,
        flexGrow: 8,
        flexFlow: 8,
        flexShrink: 8,
        flexWrap: 8,
        alignContent: 8,
        alignItems: 8,
        alignSelf: 8,
        justifyContent: 8,
        order: 8,
        transform: 8,
        transformOrigin: 8,
        transformOriginX: 8,
        transformOriginY: 8,
        backfaceVisibility: 8,
        perspective: 8,
        perspectiveOrigin: 8,
        transformStyle: 8,
        transformOriginZ: 8,
        animation: 8,
        animationDelay: 8,
        animationDirection: 8,
        animationFillMode: 8,
        animationDuration: 8,
        animationIterationCount: 8,
        animationName: 8,
        animationPlayState: 8,
        animationTimingFunction: 8,
        appearance: 11,
        userSelect: 11,
        backdropFilter: 11,
        fontKerning: 9,
        scrollSnapType: 10.1,
        scrollSnapPointsX: 10.1,
        scrollSnapPointsY: 10.1,
        scrollSnapDestination: 10.1,
        scrollSnapCoordinate: 10.1,
        boxDecorationBreak: 11,
        clipPath: 11,
        maskImage: 11,
        maskMode: 11,
        maskRepeat: 11,
        maskPosition: 11,
        maskClip: 11,
        maskOrigin: 11,
        maskSize: 11,
        maskComposite: 11,
        mask: 11,
        maskBorderSource: 11,
        maskBorderMode: 11,
        maskBorderSlice: 11,
        maskBorderWidth: 11,
        maskBorderOutset: 11,
        maskBorderRepeat: 11,
        maskBorder: 11,
        maskType: 11,
        textDecorationStyle: 11,
        textDecorationSkip: 11,
        textDecorationLine: 11,
        textDecorationColor: 11,
        shapeImageThreshold: 10,
        shapeImageMargin: 10,
        shapeImageOutside: 10,
        filter: 9,
        hyphens: 11,
        flowInto: 11,
        flowFrom: 11,
        breakBefore: 8,
        breakAfter: 8,
        breakInside: 8,
        regionFragment: 11,
        columnCount: 8,
        columnFill: 8,
        columnGap: 8,
        columnRule: 8,
        columnRuleColor: 8,
        columnRuleStyle: 8,
        columnRuleWidth: 8,
        columns: 8,
        columnSpan: 8,
        columnWidth: 8,
        writingMode: 11,
      },
      firefox: {
        appearance: 58,
        userSelect: 58,
        textAlignLast: 48,
        tabSize: 58,
        hyphens: 42,
        breakAfter: 51,
        breakBefore: 51,
        breakInside: 51,
        columnCount: 51,
        columnFill: 51,
        columnGap: 51,
        columnRule: 51,
        columnRuleColor: 51,
        columnRuleStyle: 51,
        columnRuleWidth: 51,
        columns: 51,
        columnSpan: 51,
        columnWidth: 51,
      },
      opera: {
        flex: 16,
        flexBasis: 16,
        flexDirection: 16,
        flexGrow: 16,
        flexFlow: 16,
        flexShrink: 16,
        flexWrap: 16,
        alignContent: 16,
        alignItems: 16,
        alignSelf: 16,
        justifyContent: 16,
        order: 16,
        transform: 22,
        transformOrigin: 22,
        transformOriginX: 22,
        transformOriginY: 22,
        backfaceVisibility: 22,
        perspective: 22,
        perspectiveOrigin: 22,
        transformStyle: 22,
        transformOriginZ: 22,
        animation: 29,
        animationDelay: 29,
        animationDirection: 29,
        animationFillMode: 29,
        animationDuration: 29,
        animationIterationCount: 29,
        animationName: 29,
        animationPlayState: 29,
        animationTimingFunction: 29,
        appearance: 49,
        userSelect: 40,
        fontKerning: 19,
        textEmphasisPosition: 49,
        textEmphasis: 49,
        textEmphasisStyle: 49,
        textEmphasisColor: 49,
        boxDecorationBreak: 49,
        clipPath: 41,
        maskImage: 49,
        maskMode: 49,
        maskRepeat: 49,
        maskPosition: 49,
        maskClip: 49,
        maskOrigin: 49,
        maskSize: 49,
        maskComposite: 49,
        mask: 49,
        maskBorderSource: 49,
        maskBorderMode: 49,
        maskBorderSlice: 49,
        maskBorderWidth: 49,
        maskBorderOutset: 49,
        maskBorderRepeat: 49,
        maskBorder: 49,
        maskType: 49,
        textDecorationStyle: 43,
        textDecorationSkip: 43,
        textDecorationLine: 43,
        textDecorationColor: 43,
        filter: 39,
        fontFeatureSettings: 34,
        breakAfter: 36,
        breakBefore: 36,
        breakInside: 36,
        columnCount: 36,
        columnFill: 36,
        columnGap: 36,
        columnRule: 36,
        columnRuleColor: 36,
        columnRuleStyle: 36,
        columnRuleWidth: 36,
        columns: 36,
        columnSpan: 36,
        columnWidth: 36,
        writingMode: 34,
      },
      ie: {
        userSelect: 11,
        wrapFlow: 11,
        wrapThrough: 11,
        wrapMargin: 11,
        scrollSnapType: 11,
        scrollSnapPointsX: 11,
        scrollSnapPointsY: 11,
        scrollSnapDestination: 11,
        scrollSnapCoordinate: 11,
        hyphens: 11,
        flowInto: 11,
        flowFrom: 11,
        breakBefore: 11,
        breakAfter: 11,
        breakInside: 11,
        regionFragment: 11,
        gridTemplateColumns: 11,
        gridTemplateRows: 11,
        gridTemplateAreas: 11,
        gridTemplate: 11,
        gridAutoColumns: 11,
        gridAutoRows: 11,
        gridAutoFlow: 11,
        grid: 11,
        gridRowStart: 11,
        gridColumnStart: 11,
        gridRowEnd: 11,
        gridRow: 11,
        gridColumn: 11,
        gridColumnEnd: 11,
        gridColumnGap: 11,
        gridRowGap: 11,
        gridArea: 11,
        gridGap: 11,
        textSizeAdjust: 11,
        writingMode: 11,
      },
      edge: {
        userSelect: 16,
        wrapFlow: 16,
        wrapThrough: 16,
        wrapMargin: 16,
        scrollSnapType: 16,
        scrollSnapPointsX: 16,
        scrollSnapPointsY: 16,
        scrollSnapDestination: 16,
        scrollSnapCoordinate: 16,
        hyphens: 16,
        flowInto: 16,
        flowFrom: 16,
        breakBefore: 16,
        breakAfter: 16,
        breakInside: 16,
        regionFragment: 16,
        gridTemplateColumns: 15,
        gridTemplateRows: 15,
        gridTemplateAreas: 15,
        gridTemplate: 15,
        gridAutoColumns: 15,
        gridAutoRows: 15,
        gridAutoFlow: 15,
        grid: 15,
        gridRowStart: 15,
        gridColumnStart: 15,
        gridRowEnd: 15,
        gridRow: 15,
        gridColumn: 15,
        gridColumnEnd: 15,
        gridColumnGap: 15,
        gridRowGap: 15,
        gridArea: 15,
        gridGap: 15,
      },
      ios_saf: {
        flex: 8.1,
        flexBasis: 8.1,
        flexDirection: 8.1,
        flexGrow: 8.1,
        flexFlow: 8.1,
        flexShrink: 8.1,
        flexWrap: 8.1,
        alignContent: 8.1,
        alignItems: 8.1,
        alignSelf: 8.1,
        justifyContent: 8.1,
        order: 8.1,
        transform: 8.1,
        transformOrigin: 8.1,
        transformOriginX: 8.1,
        transformOriginY: 8.1,
        backfaceVisibility: 8.1,
        perspective: 8.1,
        perspectiveOrigin: 8.1,
        transformStyle: 8.1,
        transformOriginZ: 8.1,
        animation: 8.1,
        animationDelay: 8.1,
        animationDirection: 8.1,
        animationFillMode: 8.1,
        animationDuration: 8.1,
        animationIterationCount: 8.1,
        animationName: 8.1,
        animationPlayState: 8.1,
        animationTimingFunction: 8.1,
        appearance: 11,
        userSelect: 11,
        backdropFilter: 11,
        fontKerning: 11,
        scrollSnapType: 11,
        scrollSnapPointsX: 11,
        scrollSnapPointsY: 11,
        scrollSnapDestination: 11,
        scrollSnapCoordinate: 11,
        boxDecorationBreak: 11,
        clipPath: 11,
        maskImage: 11,
        maskMode: 11,
        maskRepeat: 11,
        maskPosition: 11,
        maskClip: 11,
        maskOrigin: 11,
        maskSize: 11,
        maskComposite: 11,
        mask: 11,
        maskBorderSource: 11,
        maskBorderMode: 11,
        maskBorderSlice: 11,
        maskBorderWidth: 11,
        maskBorderOutset: 11,
        maskBorderRepeat: 11,
        maskBorder: 11,
        maskType: 11,
        textSizeAdjust: 11,
        textDecorationStyle: 11,
        textDecorationSkip: 11,
        textDecorationLine: 11,
        textDecorationColor: 11,
        shapeImageThreshold: 10,
        shapeImageMargin: 10,
        shapeImageOutside: 10,
        filter: 9,
        hyphens: 11,
        flowInto: 11,
        flowFrom: 11,
        breakBefore: 8.1,
        breakAfter: 8.1,
        breakInside: 8.1,
        regionFragment: 11,
        columnCount: 8.1,
        columnFill: 8.1,
        columnGap: 8.1,
        columnRule: 8.1,
        columnRuleColor: 8.1,
        columnRuleStyle: 8.1,
        columnRuleWidth: 8.1,
        columns: 8.1,
        columnSpan: 8.1,
        columnWidth: 8.1,
        writingMode: 11,
      },
      android: {
        borderImage: 4.2,
        borderImageOutset: 4.2,
        borderImageRepeat: 4.2,
        borderImageSlice: 4.2,
        borderImageSource: 4.2,
        borderImageWidth: 4.2,
        flex: 4.2,
        flexBasis: 4.2,
        flexDirection: 4.2,
        flexGrow: 4.2,
        flexFlow: 4.2,
        flexShrink: 4.2,
        flexWrap: 4.2,
        alignContent: 4.2,
        alignItems: 4.2,
        alignSelf: 4.2,
        justifyContent: 4.2,
        order: 4.2,
        transition: 4.2,
        transitionDelay: 4.2,
        transitionDuration: 4.2,
        transitionProperty: 4.2,
        transitionTimingFunction: 4.2,
        transform: 4.4,
        transformOrigin: 4.4,
        transformOriginX: 4.4,
        transformOriginY: 4.4,
        backfaceVisibility: 4.4,
        perspective: 4.4,
        perspectiveOrigin: 4.4,
        transformStyle: 4.4,
        transformOriginZ: 4.4,
        animation: 4.4,
        animationDelay: 4.4,
        animationDirection: 4.4,
        animationFillMode: 4.4,
        animationDuration: 4.4,
        animationIterationCount: 4.4,
        animationName: 4.4,
        animationPlayState: 4.4,
        animationTimingFunction: 4.4,
        appearance: 56,
        userSelect: 4.4,
        fontKerning: 4.4,
        textEmphasisPosition: 56,
        textEmphasis: 56,
        textEmphasisStyle: 56,
        textEmphasisColor: 56,
        boxDecorationBreak: 56,
        clipPath: 4.4,
        maskImage: 56,
        maskMode: 56,
        maskRepeat: 56,
        maskPosition: 56,
        maskClip: 56,
        maskOrigin: 56,
        maskSize: 56,
        maskComposite: 56,
        mask: 56,
        maskBorderSource: 56,
        maskBorderMode: 56,
        maskBorderSlice: 56,
        maskBorderWidth: 56,
        maskBorderOutset: 56,
        maskBorderRepeat: 56,
        maskBorder: 56,
        maskType: 56,
        filter: 4.4,
        fontFeatureSettings: 4.4,
        breakAfter: 4.4,
        breakBefore: 4.4,
        breakInside: 4.4,
        columnCount: 4.4,
        columnFill: 4.4,
        columnGap: 4.4,
        columnRule: 4.4,
        columnRuleColor: 4.4,
        columnRuleStyle: 4.4,
        columnRuleWidth: 4.4,
        columns: 4.4,
        columnSpan: 4.4,
        columnWidth: 4.4,
        writingMode: 4.4,
      },
      and_chr: {
        appearance: 61,
        textEmphasisPosition: 61,
        textEmphasis: 61,
        textEmphasisStyle: 61,
        textEmphasisColor: 61,
        boxDecorationBreak: 61,
        maskImage: 61,
        maskMode: 61,
        maskRepeat: 61,
        maskPosition: 61,
        maskClip: 61,
        maskOrigin: 61,
        maskSize: 61,
        maskComposite: 61,
        mask: 61,
        maskBorderSource: 61,
        maskBorderMode: 61,
        maskBorderSlice: 61,
        maskBorderWidth: 61,
        maskBorderOutset: 61,
        maskBorderRepeat: 61,
        maskBorder: 61,
        maskType: 61,
      },
      and_uc: {
        flex: 11.4,
        flexBasis: 11.4,
        flexDirection: 11.4,
        flexGrow: 11.4,
        flexFlow: 11.4,
        flexShrink: 11.4,
        flexWrap: 11.4,
        alignContent: 11.4,
        alignItems: 11.4,
        alignSelf: 11.4,
        justifyContent: 11.4,
        order: 11.4,
        transform: 11.4,
        transformOrigin: 11.4,
        transformOriginX: 11.4,
        transformOriginY: 11.4,
        backfaceVisibility: 11.4,
        perspective: 11.4,
        perspectiveOrigin: 11.4,
        transformStyle: 11.4,
        transformOriginZ: 11.4,
        animation: 11.4,
        animationDelay: 11.4,
        animationDirection: 11.4,
        animationFillMode: 11.4,
        animationDuration: 11.4,
        animationIterationCount: 11.4,
        animationName: 11.4,
        animationPlayState: 11.4,
        animationTimingFunction: 11.4,
        appearance: 11.4,
        userSelect: 11.4,
        textEmphasisPosition: 11.4,
        textEmphasis: 11.4,
        textEmphasisStyle: 11.4,
        textEmphasisColor: 11.4,
        clipPath: 11.4,
        maskImage: 11.4,
        maskMode: 11.4,
        maskRepeat: 11.4,
        maskPosition: 11.4,
        maskClip: 11.4,
        maskOrigin: 11.4,
        maskSize: 11.4,
        maskComposite: 11.4,
        mask: 11.4,
        maskBorderSource: 11.4,
        maskBorderMode: 11.4,
        maskBorderSlice: 11.4,
        maskBorderWidth: 11.4,
        maskBorderOutset: 11.4,
        maskBorderRepeat: 11.4,
        maskBorder: 11.4,
        maskType: 11.4,
        textSizeAdjust: 11.4,
        filter: 11.4,
        hyphens: 11.4,
        fontFeatureSettings: 11.4,
        breakAfter: 11.4,
        breakBefore: 11.4,
        breakInside: 11.4,
        columnCount: 11.4,
        columnFill: 11.4,
        columnGap: 11.4,
        columnRule: 11.4,
        columnRuleColor: 11.4,
        columnRuleStyle: 11.4,
        columnRuleWidth: 11.4,
        columns: 11.4,
        columnSpan: 11.4,
        columnWidth: 11.4,
        writingMode: 11.4,
      },
      op_mini: {},
    },
  };
  module.exports = exports['default'];
});

unwrapExports(dynamicData);

var dynamic = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _createPrefixer2 = _interopRequireDefault(createPrefixer_1);

  var _cursor2 = _interopRequireDefault(cursor_1);

  var _crossFade2 = _interopRequireDefault(crossFade_1);

  var _filter2 = _interopRequireDefault(filter_1);

  var _flex2 = _interopRequireDefault(flex_1);

  var _flexboxOld2 = _interopRequireDefault(flexboxOld_1);

  var _gradient2 = _interopRequireDefault(gradient_1);

  var _imageSet2 = _interopRequireDefault(imageSet_1);

  var _position2 = _interopRequireDefault(position_1);

  var _sizing2 = _interopRequireDefault(sizing_1);

  var _transition2 = _interopRequireDefault(transition_1);

  var _static2 = _interopRequireDefault(_static);

  var _dynamicData2 = _interopRequireDefault(dynamicData);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var plugins = [
    _crossFade2.default,
    _cursor2.default,
    _filter2.default,
    _flexboxOld2.default,
    _gradient2.default,
    _imageSet2.default,
    _position2.default,
    _sizing2.default,
    _transition2.default,
    _flex2.default,
  ];

  var Prefixer = (0, _createPrefixer2.default)(
    {
      prefixMap: _dynamicData2.default.prefixMap,
      plugins: plugins,
    },
    _static2.default,
  );
  exports.default = Prefixer;
  module.exports = exports['default'];
});

unwrapExports(dynamic);

var exenv = createCommonjsModule(function(module) {
  /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
  /* global define */

  (function() {
    var canUseDOM = !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    );

    var ExecutionEnvironment = {
      canUseDOM: canUseDOM,

      canUseWorkers: typeof Worker !== 'undefined',

      canUseEventListeners:
        canUseDOM && !!(window.addEventListener || window.attachEvent),

      canUseViewport: canUseDOM && !!window.screen,
    };

    if (
      typeof undefined === 'function' &&
      typeof undefined.amd === 'object' &&
      undefined.amd
    ) {
      undefined(function() {
        return ExecutionEnvironment;
      });
    } else if ('object' !== 'undefined' && module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  })();
});

var styles = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getStyles = exports.autoPrefixAndNormalizeStyles = exports.getColors = exports.keyframes = undefined;

  var _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

  var _keyframes;

  var _inlineStylePrefixer2 = _interopRequireDefault(dynamic);

  var _exenv2 = _interopRequireDefault(exenv);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  var canUseDOM = _exenv2.default.canUseDOM;

  var KEYFRAME_PREFIX = '__react-md-spinner-animation__';

  var Keyframe = {
    ROOT_ROTATE: 'root-rotate',
    FILL_UNFILL_ROTATE: 'fill-unfill-rotate',
    LAYER_1_FADE_IN_OUT: 'layer-1-fade-in-out',
    LAYER_2_FADE_IN_OUT: 'layer-2-fade-in-out',
    LAYER_3_FADE_IN_OUT: 'layer-3-fade-in-out',
    LAYER_4_FADE_IN_OUT: 'layer-4-fade-in-out',
    LEFT_SPIN: 'left-spin',
    RIGHT_SPIN: 'right-spin',
  };

  Object.keys(Keyframe).forEach(function(key) {
    Keyframe[key] = KEYFRAME_PREFIX + Keyframe[key];
  });

  var keyframes = (exports.keyframes = ((_keyframes = {}),
  _defineProperty(_keyframes, Keyframe.ROOT_ROTATE, {
    to: { transform: 'rotate(360deg)' },
  }),
  _defineProperty(_keyframes, Keyframe.FILL_UNFILL_ROTATE, {
    '12.5%': { transform: 'rotate(135deg)' },
    '25%': { transform: 'rotate(270deg)' },
    '37.5%': { transform: 'rotate(405deg)' },
    '50%': { transform: 'rotate(540deg)' },
    '62.5%': { transform: 'rotate(675deg)' },
    '75%': { transform: 'rotate(810deg)' },
    '87.5%': { transform: 'rotate(945deg)' },
    to: { transform: 'rotate(1080deg)' },
  }),
  _defineProperty(_keyframes, Keyframe.LAYER_1_FADE_IN_OUT, {
    '0%': { opacity: 1 },
    '25%': { opacity: 1 },
    '26%': { opacity: 0 },
    '89%': { opacity: 0 },
    '90%': { opacity: 1 },
    to: { opacity: 1 },
  }),
  _defineProperty(_keyframes, Keyframe.LAYER_2_FADE_IN_OUT, {
    '0%': { opacity: 0 },
    '15%': { opacity: 0 },
    '25%': { opacity: 1 },
    '50%': { opacity: 1 },
    '51%': { opacity: 0 },
    to: { opacity: 0 },
  }),
  _defineProperty(_keyframes, Keyframe.LAYER_3_FADE_IN_OUT, {
    '0%': { opacity: 0 },
    '40%': { opacity: 0 },
    '50%': { opacity: 1 },
    '75%': { opacity: 1 },
    '76%': { opacity: 0 },
    to: { opacity: 0 },
  }),
  _defineProperty(_keyframes, Keyframe.LAYER_4_FADE_IN_OUT, {
    '0%': { opacity: 0 },
    '65%': { opacity: 0 },
    '75%': { opacity: 1 },
    '90%': { opacity: 1 },
    to: { opacity: 0 },
  }),
  _defineProperty(_keyframes, Keyframe.LEFT_SPIN, {
    from: { transform: 'rotate(130deg)' },
    '50%': { transform: 'rotate(-5deg)' },
    to: { transform: 'rotate(130deg)' },
  }),
  _defineProperty(_keyframes, Keyframe.RIGHT_SPIN, {
    from: { transform: 'rotate(-130deg)' },
    '50%': { transform: 'rotate(5deg)' },
    to: { transform: 'rotate(-130deg)' },
  }),
  _keyframes));

  var getColors = (exports.getColors = function getColors(props) {
    var singleColor = props.singleColor,
      color1 = props.color1,
      color2 = props.color2,
      color3 = props.color3,
      color4 = props.color4;

    return singleColor
      ? [singleColor, singleColor, singleColor, singleColor]
      : [color1, color2, color3, color4];
  });

  var autoPrefixAndNormalizeStyles = (exports.autoPrefixAndNormalizeStyles = function autoPrefixAndNormalizeStyles(
    prefixer,
    styles,
  ) {
    var isFlexBox =
      ['flex', 'inline-flex'].indexOf(
        styles.hasOwnProperty('display') ? styles.display : null,
      ) > -1;

    var prefixedStyles = prefixer.prefix(styles);

    if (isFlexBox) {
      var display = prefixedStyles.display;

      var isArray = Array.isArray(display);

      if (canUseDOM) {
        prefixedStyles.display = isArray
          ? display[display.length - 1]
          : display;
      } else {
        prefixedStyles.display = isArray
          ? display.join('; display: ')
          : display;
      }
    }

    return prefixedStyles;
  });

  var getStyles = (exports.getStyles = function getStyles(props) {
    var duration = props.duration,
      userAgent = props.userAgent;

    var size = parseInt(props.size, 10);
    var colors = getColors(props);
    var borderWidth = Math.max(1, Math.round(parseInt(size, 10) * 0.107142));
    var arcSize = 270;
    var arcStartRotate = 216;
    var rootDuration = 360 * duration / (arcStartRotate + (360 - arcSize));
    var prefixer = new _inlineStylePrefixer2.default({ userAgent: userAgent });

    var rootStyle = autoPrefixAndNormalizeStyles(prefixer, {
      display: 'inline-block',
      position: 'relative',
      width: size,
      height: size,
      verticalAlign: 'middle',
      animation:
        Keyframe.ROOT_ROTATE + ' ' + rootDuration + 'ms linear infinite',
    });

    var layerStyle = autoPrefixAndNormalizeStyles(prefixer, {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100%',
      whiteSpace: 'nowrap',
      animationName: Keyframe.FILL_UNFILL_ROTATE,
      animationDuration: duration * colors.length + 'ms',
      animationTimingFunction: 'cubic-bezier(.4, 0, .2, 1)',
      animationIterationCount: 'infinite',
      opacity: 1,
    });

    var layerStyles = colors.map(function(color, i) {
      return _extends({}, layerStyle, {
        borderColor: color,
        animationName:
          Keyframe.FILL_UNFILL_ROTATE +
          ', ' +
          Keyframe['LAYER_' + (i + 1) + '_FADE_IN_OUT'],
      });
    });

    var clipStyle = autoPrefixAndNormalizeStyles(prefixer, {
      display: 'inline-block',
      position: 'relative',
      flexGrow: 1,
      height: '100%',
      overflow: 'hidden',
      borderColor: 'inherit',
    });

    var layerClipAfterStyle = {
      boxSizing: 'border-box',
      position: 'absolute',
      top: 0,
      borderRadius: '50%',
    };

    var layerAfterStyle = autoPrefixAndNormalizeStyles(
      prefixer,
      _extends({}, layerClipAfterStyle, {
        left: '45%',
        width: '10%',
        borderWidth: borderWidth,
        borderColor: 'inherit',
        borderTopStyle: 'solid',
      }),
    );

    var clipAfterStyle = _extends({}, layerClipAfterStyle, {
      bottom: 0,
      width: '200%',
      borderWidth: borderWidth,
      borderStyle: 'solid',
      animationDuration: duration + 'ms',
      animationTimingFunction: 'cubic-bezier(.4, 0, .2, 1)',
      animationIterationCount: 'infinite',
    });

    var clip1AfterStyle = autoPrefixAndNormalizeStyles(
      prefixer,
      _extends({}, clipAfterStyle, {
        left: 0,
        transform: 'rotate(129deg)',
        animationName: Keyframe.LEFT_SPIN,
      }),
    );

    var clip1AfterStyles = colors.map(function(color) {
      return _extends({}, clip1AfterStyle, {
        borderColor: color + ' transparent transparent ' + color,
      });
    });

    var clip2AfterStyle = autoPrefixAndNormalizeStyles(
      prefixer,
      _extends({}, clipAfterStyle, {
        left: '-100%',
        transform: 'rotate(-129deg)',
        animationName: Keyframe.RIGHT_SPIN,
      }),
    );

    var clip2AfterStyles = colors.map(function(color) {
      return _extends({}, clip2AfterStyle, {
        borderColor: color + ' ' + color + ' transparent transparent',
      });
    });

    return {
      rootStyle: rootStyle,
      layerStyles: layerStyles,
      layerAfterStyle: layerAfterStyle,
      clipStyle: clipStyle,
      clip1AfterStyles: clip1AfterStyles,
      clip2AfterStyles: clip2AfterStyles,
    };
  });
});

unwrapExports(styles);
var styles_1 = styles.getStyles;
var styles_2 = styles.autoPrefixAndNormalizeStyles;
var styles_3 = styles.getColors;
var styles_4 = styles.keyframes;

var ssrBehavior = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getStylesheetComponent = exports.getStylesheetString = undefined;

  var _react2 = _interopRequireDefault(React__default);

  var _cssKeyframer2 = _interopRequireDefault(cssKeyframer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var keyframerFactory = function keyframerFactory() {
    var options =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new _cssKeyframer2.default(options);
  };

  var mapKeyframes = function mapKeyframes(iteratee) {
    return Object.keys(styles.keyframes).map(function(key) {
      return iteratee(styles.keyframes[key], key);
    });
  };

  var getStylesheetString = (exports.getStylesheetString = function getStylesheetString(
    userAgent,
  ) {
    var keyframer = keyframerFactory({ userAgent: userAgent });

    return mapKeyframes(function(keyframe, key) {
      return keyframer.getKeyframesStylesheet(key, keyframe);
    }).join('');
  });

  var getStylesheetComponent = (exports.getStylesheetComponent = function getStylesheetComponent(
    userAgent,
  ) {
    var keyframer = keyframerFactory({ userAgent: userAgent });

    return mapKeyframes(function(keyframe, key) {
      return _react2.default.createElement('style', {
        key: key,
        type: 'text/css',
        'data-keyframes': key,
        dangerouslySetInnerHTML: {
          __html: keyframer.getKeyframesString(key, keyframe),
        },
      });
    });
  });
});

unwrapExports(ssrBehavior);
var ssrBehavior_1 = ssrBehavior.getStylesheetComponent;
var ssrBehavior_2 = ssrBehavior.getStylesheetString;

var MDSpinner_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  var _react2 = _interopRequireDefault(React__default);

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _exenv2 = _interopRequireDefault(exenv);

  var _cssKeyframer2 = _interopRequireDefault(cssKeyframer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass,
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var canUseDOM = _exenv2.default.canUseDOM;

  var MDSpinner = (function(_Component) {
    _inherits(MDSpinner, _Component);

    function MDSpinner(props, context) {
      _classCallCheck(this, MDSpinner);

      var _this = _possibleConstructorReturn(
        this,
        (MDSpinner.__proto__ || Object.getPrototypeOf(MDSpinner)).call(
          this,
          props,
          context,
        ),
      );

      _this.keyframer = new _cssKeyframer2.default({
        userAgent: props.userAgent,
      });
      return _this;
    }

    _createClass(MDSpinner, [
      {
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.registerKeyframesIfNeeded();

          MDSpinner.mountedInstanceCount++;
        },
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          MDSpinner.mountedInstanceCount--;

          this.unregisterKeyframesIfNeeded();
          this.keyframer = null;
        },
      },
      {
        key: 'registerKeyframesIfNeeded',
        value: function registerKeyframesIfNeeded() {
          var _this2 = this;

          if (MDSpinner.mountedInstanceCount > 0) return;
          if (!this.keyframer) return;

          Object.keys(styles.keyframes).forEach(function(key) {
            return _this2.keyframer.register(key, styles.keyframes[key]);
          });
        },
      },
      {
        key: 'unregisterKeyframesIfNeeded',
        value: function unregisterKeyframesIfNeeded() {
          if (!canUseDOM) return;
          if (MDSpinner.mountedInstanceCount > 0) return;
          if (!this.keyframer) return;

          Object.keys(styles.keyframes).forEach(function(key) {
            var $style = document.querySelector(
              'style[data-keyframes="' + key + '"]',
            );
            if ($style) {
              $style.parentNode.removeChild($style);
            }
          });
        },
      },
      {
        key: 'render',
        value: function render() {
          var props = this.props;
          var className = props.className,
            style = props.style;

          var _getStyles = (0, styles.getStyles)(props),
            rootStyle = _getStyles.rootStyle,
            layerStyles = _getStyles.layerStyles,
            layerAfterStyle = _getStyles.layerAfterStyle,
            clipStyle = _getStyles.clipStyle,
            clip1AfterStyles = _getStyles.clip1AfterStyles,
            clip2AfterStyles = _getStyles.clip2AfterStyles;

          var layers = [];

          for (var i = 0; i < 4; i++) {
            layers.push(
              _react2.default.createElement(
                'span',
                { key: i, style: layerStyles[i] },
                _react2.default.createElement(
                  'span',
                  { style: clipStyle },
                  _react2.default.createElement('span', {
                    style: clip1AfterStyles[i],
                  }),
                ),
                _react2.default.createElement(
                  'span',
                  { style: clipStyle },
                  _react2.default.createElement('span', {
                    style: clip2AfterStyles[i],
                  }),
                ),
                _react2.default.createElement('span', {
                  style: layerAfterStyle,
                }),
              ),
            );
          }

          return _react2.default.createElement(
            'span',
            {
              className: className,
              style: _extends({}, rootStyle, style || {}),
            },
            layers,
          );
        },
      },
    ]);

    return MDSpinner;
  })(React__default.Component);

  MDSpinner.propTypes = {
    className: _propTypes2.default.string,
    userAgent: _propTypes2.default.string,
    style: _propTypes2.default.object,
    singleColor: _propTypes2.default.string,
    size: _propTypes2.default.oneOfType([
      _propTypes2.default.number,
      _propTypes2.default.string,
    ]),
    duration: _propTypes2.default.number,
    color1: _propTypes2.default.string,
    color2: _propTypes2.default.string,
    color3: _propTypes2.default.string,
    color4: _propTypes2.default.string,
  };
  MDSpinner.defaultProps = {
    size: 28,
    duration: 1333,
    color1: 'rgb(66, 165, 245)',
    color2: 'rgb(239, 83, 80)',
    color3: 'rgb(253, 216, 53)',
    color4: 'rgb(76, 175, 80)',
  };
  MDSpinner.mountedInstanceCount = 0;
  exports.default = MDSpinner;
});

unwrapExports(MDSpinner_1);

var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = exports.ssrBehavior = undefined;

  var _ssrBehavior = _interopRequireWildcard(ssrBehavior);

  var _MDSpinner2 = _interopRequireDefault(MDSpinner_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};
      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key))
            newObj[key] = obj[key];
        }
      }
      newObj.default = obj;
      return newObj;
    }
  }

  exports.ssrBehavior = _ssrBehavior;
  exports.default = _MDSpinner2.default;
});

var Loader = unwrapExports(lib);
var lib_1 = lib.ssrBehavior;

var _templateObject$15 = taggedTemplateLiteral(
  [
    '\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(52, 58, 66, 0.8);\n  z-index: ',
    ';\n',
  ],
  [
    '\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(52, 58, 66, 0.8);\n  z-index: ',
    ';\n',
  ],
);

var SpinnerOverlay = styled__default('div')(_templateObject$15, function(_ref) {
  var theme = _ref.theme;
  return theme.zIndex.spinnerOverlay;
});

var _templateObject$16 = taggedTemplateLiteral(
  [
    '\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: ',
    ';\n',
  ],
  [
    '\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: ',
    ';\n',
  ],
);

var SpinnerWrapper = styled__default('div')(_templateObject$16, function(_ref) {
  var theme = _ref.theme;
  return theme.zIndex.spinner;
});

var _templateObject$17 = taggedTemplateLiteral(
  ['\n  position: relative;\n'],
  ['\n  position: relative;\n'],
);

var SpinnerWrapper$1 = styled__default('div')(_templateObject$17);

var Spinner = function Spinner(_ref) {
  var theme = _ref.theme,
    size = _ref.size,
    children = _ref.children,
    spinWhen = _ref.spinWhen;
  return React__default.createElement(
    SpinnerWrapper$1,
    null,
    spinWhen &&
      React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(SpinnerOverlay, null),
        React__default.createElement(
          SpinnerWrapper,
          null,
          React__default.createElement(Loader, {
            singleColor: theme.colors.primary100,
            size: size,
          }),
        ),
      ),
    children,
  );
};

Spinner.propTypes = {
  theme: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  spinWhen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

Spinner.defaultProps = {
  size: 50,
};

var Spinner$1 = styled.withTheme(Spinner);

var createNumberMask = createCommonjsModule(function(module, exports) {
  !(function(e, t) {
    module.exports = t();
  })(commonjsGlobal, function() {
    return (function(e) {
      function t(n) {
        if (o[n]) return o[n].exports;
        var i = (o[n] = { exports: {}, id: n, loaded: !1 });
        return (
          e[n].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
        );
      }
      var o = {};
      return (t.m = e), (t.c = o), (t.p = ''), t(0);
    })([
      function(e, t, o) {
        e.exports = o(2);
      },
      ,
      function(e, t) {
        function o() {
          function e() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : l,
              t = e.length;
            if (e === l || (e[0] === y[0] && 1 === t))
              return y
                .split(l)
                .concat([v])
                .concat(g.split(l));
            if (e === k && M)
              return y
                .split(l)
                .concat(['0', k, v])
                .concat(g.split(l));
            var o = e[0] === s && q;
            o && (e = e.toString().substr(1));
            var c = e.lastIndexOf(k),
              u = c !== -1,
              a = void 0,
              b = void 0,
              h = void 0;
            if (
              (e.slice(T * -1) === g && (e = e.slice(0, T * -1)),
              u && (M || $)
                ? ((a = e.slice(e.slice(0, R) === y ? R : 0, c)),
                  (b = e.slice(c + 1, t)),
                  (b = n(b.replace(f, l))))
                : (a = e.slice(0, R) === y ? e.slice(R) : e),
              P && ('undefined' == typeof P ? 'undefined' : r(P)) === p)
            ) {
              var S = '.' === j ? '[.]' : '' + j,
                w = (a.match(new RegExp(S, 'g')) || []).length;
              a = a.slice(0, P + w * Z);
            }
            return (
              (a = a.replace(f, l)),
              E || (a = a.replace(/^0+(0$|[^0])/, '$1')),
              (a = x ? i(a, j) : a),
              (h = n(a)),
              ((u && M) || $ === !0) &&
                (e[c - 1] !== k && h.push(m),
                h.push(k, m),
                b &&
                  (('undefined' == typeof L ? 'undefined' : r(L)) === p &&
                    (b = b.slice(0, L)),
                  (h = h.concat(b))),
                $ === !0 && e[c - 1] === k && h.push(v)),
              R > 0 && (h = y.split(l).concat(h)),
              o && (h.length === R && h.push(v), (h = [d].concat(h))),
              g.length > 0 && (h = h.concat(g.split(l))),
              h
            );
          }
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            o = t.prefix,
            y = void 0 === o ? c : o,
            b = t.suffix,
            g = void 0 === b ? l : b,
            h = t.includeThousandsSeparator,
            x = void 0 === h || h,
            S = t.thousandsSeparatorSymbol,
            j = void 0 === S ? u : S,
            w = t.allowDecimal,
            M = void 0 !== w && w,
            N = t.decimalSymbol,
            k = void 0 === N ? a : N,
            D = t.decimalLimit,
            L = void 0 === D ? 2 : D,
            O = t.requireDecimal,
            $ = void 0 !== O && O,
            _ = t.allowNegative,
            q = void 0 !== _ && _,
            B = t.allowLeadingZeroes,
            E = void 0 !== B && B,
            I = t.integerLimit,
            P = void 0 === I ? null : I,
            R = (y && y.length) || 0,
            T = (g && g.length) || 0,
            Z = (j && j.length) || 0;
          return (e.instanceOf = 'createNumberMask'), e;
        }
        function n(e) {
          return e.split(l).map(function(e) {
            return v.test(e) ? v : e;
          });
        }
        function i(e, t) {
          return e.replace(/\B(?=(\d{3})+(?!\d))/g, t);
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
        t.default = o;
        var c = '$',
          l = '',
          u = ',',
          a = '.',
          s = '-',
          d = /-/,
          f = /\D+/g,
          p = 'number',
          v = /\d/,
          m = '[]';
      },
    ]);
  });
});

var createNumberMask$1 = unwrapExports(createNumberMask);
var createNumberMask_1 = createNumberMask.createNumberMask;

var emailMask = createCommonjsModule(function(module, exports) {
  !(function(e, t) {
    module.exports = t();
  })(commonjsGlobal, function() {
    return (function(e) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var u = (n[r] = { exports: {}, id: r, loaded: !1 });
        return (
          e[r].call(u.exports, u, u.exports, t), (u.loaded = !0), u.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = ''), t(0);
    })([
      function(e, t, n) {
        e.exports = n(3);
      },
      ,
      ,
      function(e, t, n) {
        function r(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e, t) {
          e = e.replace(y, h);
          var n = t.placeholderChar,
            r = t.currentCaretPosition,
            u = e.indexOf(x),
            s = e.lastIndexOf(d),
            f = s < u ? -1 : s,
            p = o(e, u + 1, x),
            g = o(e, f - 1, d),
            v = c(e, u, n),
            m = i(e, u, f, n),
            O = a(e, f, n, r);
          (v = l(v)), (m = l(m)), (O = l(O, !0));
          var b = v
            .concat(p)
            .concat(m)
            .concat(g)
            .concat(O);
          return b;
        }
        function o(e, t, n) {
          var r = [];
          return e[t] === n ? r.push(n) : r.push(g, n), r.push(g), r;
        }
        function c(e, t) {
          return t === -1 ? e : e.slice(0, t);
        }
        function i(e, t, n, r) {
          var u = h;
          return (
            t !== -1 &&
              (u = n === -1 ? e.slice(t + 1, e.length) : e.slice(t + 1, n)),
            (u = u.replace(new RegExp('[\\s' + r + ']', m), h)),
            u === x
              ? p
              : u.length < 1
                ? v
                : u[u.length - 1] === d
                  ? u.slice(0, u.length - 1)
                  : u
          );
        }
        function a(e, t, n, r) {
          var u = h;
          return (
            t !== -1 && (u = e.slice(t + 1, e.length)),
            (u = u.replace(new RegExp('[\\s' + n + '.]', m), h)),
            0 === u.length ? (e[t - 1] === d && r !== e.length ? p : h) : u
          );
        }
        function l(e, t) {
          return e.split(h).map(function(e) {
            return e === v ? e : t ? b : O;
          });
        }
        Object.defineProperty(t, '__esModule', { value: !0 });
        var s = n(4),
          f = r(s),
          p = '*',
          d = '.',
          h = '',
          x = '@',
          g = '[]',
          v = ' ',
          m = 'g',
          O = /[^\s]/,
          b = /[^.\s]/,
          y = /\s/g;
        t.default = { mask: u, pipe: f.default };
      },
      function(e, t) {
        function n(e, t) {
          var n = t.currentCaretPosition,
            o = t.rawValue,
            p = t.previousConformedValue,
            d = t.placeholderChar,
            h = e;
          h = r(h);
          var x = h.indexOf(i),
            g = null === o.match(new RegExp('[^@\\s.' + d + ']'));
          if (g) return c;
          if (
            h.indexOf(l) !== -1 ||
            (x !== -1 && n !== x + 1) ||
            (o.indexOf(u) === -1 && p !== c && o.indexOf(a) !== -1)
          )
            return !1;
          var v = h.indexOf(u),
            m = h.slice(v + 1, h.length);
          return (
            (m.match(f) || s).length > 1 &&
              h.substr(-1) === a &&
              n !== o.length &&
              (h = h.slice(0, h.length - 1)),
            h
          );
        }
        function r(e) {
          var t = 0;
          return e.replace(o, function() {
            return t++, 1 === t ? u : c;
          });
        }
        Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = n);
        var u = '@',
          o = /@/g,
          c = '',
          i = '@.',
          a = '.',
          l = '..',
          s = [],
          f = /\./g;
      },
    ]);
  });
});

var emailMask$1 = unwrapExports(emailMask);
var emailMask_1 = emailMask.emailMask;

// DD.MM.YYYY
var BIRTHDAY_MASK = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

// 10 %
var PERGENTAGE_MASK = createNumberMask$1({
  prefix: '',
  includeThousandsSeparator: false,
  suffix: ' %',
});

// $ 10
var MONEY_MASK = createNumberMask$1();

// rick@c137.com
var EMAIL_MASK = emailMask$1;

var MASKS = Object.freeze({
  BIRTHDAY_MASK: BIRTHDAY_MASK,
  PERGENTAGE_MASK: PERGENTAGE_MASK,
  MONEY_MASK: MONEY_MASK,
  EMAIL_MASK: EMAIL_MASK,
});

var white = '#fff';
var black = '#000';

var primary = {
  primary100: '#3f9bfd',
  primary200: '#375f8a',
  primary300: '#324e70',
  primary400: '#96a2b0',
  primary500: '#484e58',
};

var greys = {
  grey100: '#96a2b0',
  grey200: '#3f454d',
  grey300: '#343a42',
  grey400: '#292d33',
  grey500: '#40464f',
};

var greens = {
  green100: '#c6e5cb',
  green300: '#97e2a3',
  green500: '#62de76',
  green700: '#49b85b',
  green900: '#2f903e',
};

var reds = {
  red100: '#ffe6e1',
  red300: '#ffaf9f',
  red500: '#ff7559',
  red700: '#d55a41',
  red900: '#a94442',
};

var yellows = {
  yellow100: '#f2e5cb',
  yellow300: '#f7da9f',
  yellow500: '#ffc859',
  yellow700: '#d4a546',
  yellow900: '#ab8433',
};

var misc = {
  bodyBackground: greys.grey400,
  mainBackground: '343941',
  textColor: white,
  danger: reds.red900,
  success: greens.green700,
  warning: yellows.yellow700,
};

var colors = _extends(
  {
    white: white,
    black: black,
  },
  primary,
  greys,
  greens,
  reds,
  yellows,
  misc,
);

var spacings = {
  bit: '1px',
  byte: '5px',
  kilo: '10px',
  mega: '15px',
  giga: '20px',
};

var composedSpacings = {
  byte: spacings.kilo + ' ' + spacings.mega,
};

var grid = {
  outerGutter: '10px',
};

var borderRadius$1 = {
  kilo: '1px',
  mega: '4px',
  giga: '5px',
};

var borderWidth$1 = {
  bit: '1px',
  byte: '2px',
};

var fontFamily = {
  default: '"Open Sans", sans-serif',
  color: colors.white,
};

var fontSize = {
  bit: '11px',
  byte: '13px',
  kilo: '15px',
  mega: '18px',
  giga: '24px',
};

var lineHeight = {
  bit: 1.153,
  byte: 1.333,
  kilo: 1.5,
};

var fontWeight = {
  regular: 400,
  semiBold: 600,
  bold: 700,
};

var zIndex = {
  select: 1090,
  spinnerOverlay: 2000,
  spinner: 2010,
};

var rooster = {
  colors: colors,
  grid: grid,
  spacings: spacings,
  composedSpacings: composedSpacings,
  borderRadius: borderRadius$1,
  borderWidth: borderWidth$1,
  fontFamily: fontFamily,
  fontWeight: fontWeight,
  fontSize: fontSize,
  lineHeight: lineHeight,
  zIndex: zIndex,
};

var white$1 = '#fff';
var black$1 = '#000';

var primary$1 = {
  primary100: '#db0062',
  primary200: '#375f8a',
};

var greys$1 = {
  grey100: '#96a2b0',
  grey200: '#3f454d',
  grey300: '#343a42',
  grey400: '#292d33',
};

var greens$1 = {
  green100: '#c6e5cb',
  green300: '#97e2a3',
  green500: '#62de76',
  green700: '#49b85b',
  green900: '#2f903e',
};

var reds$1 = {
  red100: '#ffe6e1',
  red300: '#ffaf9f',
  red500: '#ff7559',
  red700: '#d55a41',
  red900: '#a73d28',
};

var yellows$1 = {
  yellow100: '#f2e5cb',
  yellow300: '#f7da9f',
  yellow500: '#ffc859',
  yellow700: '#d4a546',
  yellow900: '#ab8433',
};

var misc$1 = {
  bodyBackground: '#fff',
  mainBackground: '#ccc',
  textColor: white$1,
  danger: reds$1.red500,
  success: greens$1.green700,
  warning: yellows$1.yellow700,
};

var colors$1 = _extends(
  {
    white: white$1,
    black: black$1,
  },
  primary$1,
  greys$1,
  greens$1,
  reds$1,
  yellows$1,
  misc$1,
);

var spacings$1 = {
  bit: '4px',
  byte: '8px',
  kilo: '12px',
  mega: '16px',
  giga: '24px',
  tera: '32px',
  peta: '40px',
  exa: '48px',
  zetta: '56px',
};

var borderRadius$2 = {
  kilo: '1px',
  mega: '4px',
  giga: '5px',
};

var borderWidth$2 = {
  kilo: '1px',
  mega: '2px',
};

var fontFamily$1 = {
  default: '"Open Sans", sans-serif',
};

var fontWeight$1 = {
  regular: '400',
  bold: '700',
};

var hurrier = {
  colors: colors$1,
  spacings: spacings$1,
  borderRadius: borderRadius$2,
  borderWidth: borderWidth$2,
  fontFamily: fontFamily$1,
  fontWeight: fontWeight$1,
};

var Themes = { rooster: rooster, hurrier: hurrier };

var index$3 = _extends(
  {
    SingleSelect: SingleSelect,
    MultipleSelect: MultipleSelect,
    ComposedTabs: ComposedTabs,
    TimeSpanDisplay: TimeSpanDisplay$2,
    Prediction: Prediction,
    Button: Button$1,
    Global: Global,
    Themes: Themes,
    Indicator: Indicator,
    Text: Text,
    Input: Input,
    MaskedInput: InputMask,
    Spinner: Spinner$1,
    Spacing: Spacing,
    Heading: Heading,
    MASKS: MASKS,
  },
  Grid$2,
);

module.exports = index$3;
//# sourceMappingURL=index.js.map

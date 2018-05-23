import styled from 'styled-components';
import React, { Fragment, PureComponent, cloneElement } from 'react';
import PropTypes from 'prop-types';
import SelectPlus from 'react-select-plus';
import _reactDom from 'react-dom';
import crypto from 'crypto';

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

var Global = styled.main(
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
    '\n  display: inline-block;\n  margin-right: 5px;\n  width: 100%;\n  .Select {\n    width: ',
    ';\n    &-control {\n      min-height: 40px;\n      background-color: ',
    ';\n      border: 1px solid #40464f;\n      display: flex;\n      align-items: center;\n      height: auto;\n    }\n    &-multi {\n      &-value-wrapper {\n        flex: 1;\n      }\n    }\n    &-placeholder {\n      position: relative;\n    }\n    &-value {\n      margin: 5px 0 5px 5px;\n    }\n    &.is-focused,\n    &.is-open {\n      .Select-control {\n        background-color: ',
    ';\n        border: 1px solid #40464f;\n        box-shadow: none;\n      }\n    }\n    &-input {\n      position: absolute;\n      top: 0;\n      opacity: 1;\n      z-index: -1;\n    }\n    &-menu-outer {\n      box-shadow: 0;\n      background-color: ',
    ';\n      border: 1px solid #40464f;\n      .Select-menu .Select-option {\n        background-color: ',
    ';\n        color: #ffffff;\n        &.is-selected {\n          background-color: ',
    ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-focused {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &:hover {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &.is-selected:hover {\n          background-color: ',
    ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-disabled {\n          color: ',
    ';\n          &:hover {\n            background-color: ',
    ';\n            color: ',
    ';\n          }\n        }\n      }\n    }\n    &--single {\n      > .Select-control .Select-value {\n        position: relative;\n        margin: 0;\n      }\n    }\n    &--multi {\n      .Select-value {\n        display: inline-flex;\n        background-color: ',
    ';\n        color: #fff;\n        flex-flow: row-reverse;\n        align-items: center;\n        &-label {\n          flex: 1;\n        }\n      }\n    }\n    &.has-value {\n      &.Select--single {\n        > .Select-control .Select-value .Select-value-label {\n          color: #b2b8c0;\n        }\n      }\n    }\n  }\n',
  ],
  [
    '\n  display: inline-block;\n  margin-right: 5px;\n  width: 100%;\n  .Select {\n    width: ',
    ';\n    &-control {\n      min-height: 40px;\n      background-color: ',
    ';\n      border: 1px solid #40464f;\n      display: flex;\n      align-items: center;\n      height: auto;\n    }\n    &-multi {\n      &-value-wrapper {\n        flex: 1;\n      }\n    }\n    &-placeholder {\n      position: relative;\n    }\n    &-value {\n      margin: 5px 0 5px 5px;\n    }\n    &.is-focused,\n    &.is-open {\n      .Select-control {\n        background-color: ',
    ';\n        border: 1px solid #40464f;\n        box-shadow: none;\n      }\n    }\n    &-input {\n      position: absolute;\n      top: 0;\n      opacity: 1;\n      z-index: -1;\n    }\n    &-menu-outer {\n      box-shadow: 0;\n      background-color: ',
    ';\n      border: 1px solid #40464f;\n      .Select-menu .Select-option {\n        background-color: ',
    ';\n        color: #ffffff;\n        &.is-selected {\n          background-color: ',
    ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-focused {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &:hover {\n          background-color: ',
    ';\n          border: 0;\n        }\n        &.is-selected:hover {\n          background-color: ',
    ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-disabled {\n          color: ',
    ';\n          &:hover {\n            background-color: ',
    ';\n            color: ',
    ';\n          }\n        }\n      }\n    }\n    &--single {\n      > .Select-control .Select-value {\n        position: relative;\n        margin: 0;\n      }\n    }\n    &--multi {\n      .Select-value {\n        display: inline-flex;\n        background-color: ',
    ';\n        color: #fff;\n        flex-flow: row-reverse;\n        align-items: center;\n        &-label {\n          flex: 1;\n        }\n      }\n    }\n    &.has-value {\n      &.Select--single {\n        > .Select-control .Select-value .Select-value-label {\n          color: #b2b8c0;\n        }\n      }\n    }\n  }\n',
  ],
);

var sizes = {
  small: '100px',
  regular: '300px',
  block: '100%',
};

var Select = styled('div')(
  _templateObject$1,
  function(props) {
    return sizes[props.size];
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey300;
  },
  function(props) {
    return props.theme.colors.grey300;
  },
  function(props) {
    return props.theme.colors.grey100;
  },
  function(props) {
    return props.theme.colors.grey400;
  },
  function(props) {
    return props.theme.colors.grey100;
  },
  function(props) {
    return props.theme.colors.primary100;
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
          isFirst = _props.isFirst;
        var selectedValue = this.state.selectedValue;

        return React.createElement(
          Select,
          { size: size, isFirst: isFirst },
          React.createElement(SelectPlus, {
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
})(PureComponent);

SingleSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isSearchable: PropTypes.bool,
  isFirst: PropTypes.bool,
  size: PropTypes.string,
  initialValue: PropTypes.string,
};

var MultipleSelect = (function(_PureComponent) {
  inherits(MultipleSelect, _PureComponent);

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
        selectedValue: _this.props.initialValue,
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
      key: 'render',
      value: function render() {
        var _props = this.props,
          options = _props.options,
          name = _props.name,
          placeholder = _props.placeholder;
        var selectedValue = this.state.selectedValue;

        return React.createElement(
          Select,
          null,
          React.createElement(SelectPlus, {
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
})(PureComponent);

MultipleSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.array,
};

var commonjsGlobal =
  typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
        ? self
        : {};

function commonjsRequire() {
  throw new Error(
    'Dynamic requires are not currently supported by rollup-plugin-commonjs',
  );
}

function unwrapExports(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
    ? x['default']
    : x;
}

function createCommonjsModule(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var moment = createCommonjsModule(function(module, exports) {
  //! moment.js

  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var hookCallback;

    function hooks() {
      return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
      hookCallback = callback;
    }

    function isArray(input) {
      return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
      );
    }

    function isObject(input) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
      );
    }

    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k;
        for (k in obj) {
          if (obj.hasOwnProperty(k)) {
            return false;
          }
        }
        return true;
      }
    }

    function isUndefined(input) {
      return input === void 0;
    }

    function isNumber(input) {
      return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
      );
    }

    function isDate(input) {
      return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
      );
    }

    function map(arr, fn) {
      var res = [],
        i;
      for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
      }
      return res;
    }

    function hasOwnProp(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
      for (var i in b) {
        if (hasOwnProp(b, i)) {
          a[i] = b[i];
        }
      }

      if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
      }

      if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
      }

      return a;
    }

    function createUTC(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
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
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
          if (i in t && fun.call(this, t[i], i, t)) {
            return true;
          }
        }

        return false;
      };
    }

    function isValid(m) {
      if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some.call(flags.parsedDateParts, function(i) {
          return i != null;
        });
        var isNowValid =
          !isNaN(m._d.getTime()) &&
          flags.overflow < 0 &&
          !flags.empty &&
          !flags.invalidMonth &&
          !flags.invalidWeekday &&
          !flags.weekdayMismatch &&
          !flags.nullInput &&
          !flags.invalidFormat &&
          !flags.userInvalidated &&
          (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
          isNowValid =
            isNowValid &&
            flags.charsLeftOver === 0 &&
            flags.unusedTokens.length === 0 &&
            flags.bigHour === undefined;
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

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []);

    function copyConfig(to, from) {
      var i, prop, val;

      if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
      }
      if (!isUndefined(from._i)) {
        to._i = from._i;
      }
      if (!isUndefined(from._f)) {
        to._f = from._f;
      }
      if (!isUndefined(from._l)) {
        to._l = from._l;
      }
      if (!isUndefined(from._strict)) {
        to._strict = from._strict;
      }
      if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
      }
      if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
      }
      if (!isUndefined(from._offset)) {
        to._offset = from._offset;
      }
      if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
      }
      if (!isUndefined(from._locale)) {
        to._locale = from._locale;
      }

      if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
          prop = momentProperties[i];
          val = from[prop];
          if (!isUndefined(val)) {
            to[prop] = val;
          }
        }
      }

      return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = new Date(NaN);
      }
      // Prevent infinite loop in case updateOffset creates new moment
      // objects.
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }

    function isMoment(obj) {
      return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
      );
    }

    function absFloor(number) {
      if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }

    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
        value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }

      return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
      for (i = 0; i < len; i++) {
        if (
          (dontConvert && array1[i] !== array2[i]) ||
          (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
        ) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }

    function warn(msg) {
      if (
        hooks.suppressDeprecationWarnings === false &&
        typeof console !== 'undefined' &&
        console.warn
      ) {
        console.warn('Deprecation warning: ' + msg);
      }
    }

    function deprecate(msg, fn) {
      var firstTime = true;

      return extend(function() {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [];
          var arg;
          for (var i = 0; i < arguments.length; i++) {
            arg = '';
            if (typeof arguments[i] === 'object') {
              arg += '\n[' + i + '] ';
              for (var key in arguments[0]) {
                arg += key + ': ' + arguments[0][key] + ', ';
              }
              arg = arg.slice(0, -2); // Remove trailing comma and space
            } else {
              arg = arguments[i];
            }
            args.push(arg);
          }
          warn(
            msg +
              '\nArguments: ' +
              Array.prototype.slice.call(args).join('') +
              '\n' +
              new Error().stack,
          );
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
      return (
        input instanceof Function ||
        Object.prototype.toString.call(input) === '[object Function]'
      );
    }

    function set(config) {
      var prop, i;
      for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
          this[i] = prop;
        } else {
          this['_' + i] = prop;
        }
      }
      this._config = config;
      // Lenient ordinal parsing accepts just a number in addition to
      // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
      // TODO: Remove "ordinalParse" fallback in next major release.
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          '|' +
          /\d{1,2}/.source,
      );
    }

    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig),
        prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
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
        if (
          hasOwnProp(parentConfig, prop) &&
          !hasOwnProp(childConfig, prop) &&
          isObject(parentConfig[prop])
        ) {
          // make sure changes to properties don't modify parent config
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
        var i,
          res = [];
        for (i in obj) {
          if (hasOwnProp(obj, i)) {
            res.push(i);
          }
        }
        return res;
      };
    }

    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L',
    };

    function calendar(key, mom, now) {
      var output = this._calendar[key] || this._calendar['sameElse'];
      return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
      var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

      if (format || !formatUpper) {
        return format;
      }

      this._longDateFormat[key] = formatUpper.replace(
        /MMMM|MM|DD|dddd/g,
        function(val) {
          return val.slice(1);
        },
      );

      return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
      return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
      return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
      var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
      return isFunction(format)
        ? format(output)
        : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
      var lowerCase = unit.toLowerCase();
      aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
      return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
    }

    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
        normalizedProp,
        prop;

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
      var units = [];
      for (var u in unitsObj) {
        units.push({ unit: u, priority: priorities[u] });
      }
      units.sort(function(a, b) {
        return a.priority - b.priority;
      });
      return units;
    }

    function zeroFill(number, targetLength, forceSign) {
      var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
      return (
        (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill))
          .toString()
          .substr(1) +
        absNumber
      );
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
      var func = callback;
      if (typeof callback === 'string') {
        func = function() {
          return this[callback]();
        };
      }
      if (token) {
        formatTokenFunctions[token] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function() {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal) {
        formatTokenFunctions[ordinal] = function() {
          return this.localeData().ordinal(func.apply(this, arguments), token);
        };
      }
    }

    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }
      return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
      var array = format.match(formattingTokens),
        i,
        length;

      for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }

      return function(mom) {
        var output = '',
          i;
        for (i = 0; i < length; i++) {
          output += isFunction(array[i])
            ? array[i].call(mom, format)
            : array[i];
        }
        return output;
      };
    }

    // format date using native date object
    function formatMoment(m, format) {
      if (!m.isValid()) {
        return m.localeData().invalidDate();
      }

      format = expandFormat(format, m.localeData());
      formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);

      return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
      var i = 5;

      function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
      }

      localFormattingTokens.lastIndex = 0;
      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens,
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }

      return format;
    }

    var match1 = /\d/; //       0 - 9
    var match2 = /\d\d/; //      00 - 99
    var match3 = /\d{3}/; //     000 - 999
    var match4 = /\d{4}/; //    0000 - 9999
    var match6 = /[+-]?\d{6}/; // -999999 - 999999
    var match1to2 = /\d\d?/; //       0 - 99
    var match3to4 = /\d\d\d\d?/; //     999 - 9999
    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3 = /\d{1,3}/; //       0 - 999
    var match1to4 = /\d{1,4}/; //       0 - 9999
    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    var matchUnsigned = /\d+/; //       0 - inf
    var matchSigned = /[+-]?\d+/; //    -inf - inf

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken(token, regex, strictRegex) {
      regexes[token] = isFunction(regex)
        ? regex
        : function(isStrict, localeData) {
            return isStrict && strictRegex ? strictRegex : regex;
          };
    }

    function getParseRegexForToken(token, config) {
      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }

      return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
      return regexEscape(
        s
          .replace('\\', '')
          .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
            matched,
            p1,
            p2,
            p3,
            p4,
          ) {
            return p1 || p2 || p3 || p4;
          }),
      );
    }

    function regexEscape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
      var i,
        func = callback;
      if (typeof token === 'string') {
        token = [token];
      }
      if (isNumber(callback)) {
        func = function(input, array) {
          array[callback] = toInt(input);
        };
      }
      for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
      }
    }

    function addWeekParseToken(token, callback) {
      addParseToken(token, function(input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
      });
    }

    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function() {
      var y = this.year();
      return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function() {
      return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function(input, array) {
      array[YEAR] =
        input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function(input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function(input, array) {
      array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
      return isLeapYear(this.year());
    }

    function makeGetSet(unit, keepTime) {
      return function(value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }

    function get(mom, unit) {
      return mom.isValid()
        ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
        : NaN;
    }

    function set$1(mom, unit, value) {
      if (mom.isValid() && !isNaN(value)) {
        if (
          unit === 'FullYear' &&
          isLeapYear(mom.year()) &&
          mom.month() === 1 &&
          mom.date() === 29
        ) {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
            value,
            mom.month(),
            daysInMonth(value, mom.month()),
          );
        } else {
          mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
      }
    }

    // MOMENTS

    function stringGet(units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units]();
      }
      return this;
    }

    function stringSet(units, value) {
      if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value);
        }
      }
      return this;
    }

    function mod(n, x) {
      return (n % x + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function(o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
            return i;
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
      return modMonth === 1
        ? isLeapYear(year)
          ? 29
          : 28
        : 31 - (modMonth % 7) % 2;
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function() {
      return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function(format) {
      return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function(format) {
      return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function(isStrict, locale) {
      return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function(isStrict, locale) {
      return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function(input, array) {
      array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
      var month = config._locale.monthsParse(input, token, config._strict);
      // if we didn't find a month name, mark the date as invalid.
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
      '_',
    );
    function localeMonths(m, format) {
      if (!m) {
        return isArray(this._months)
          ? this._months
          : this._months['standalone'];
      }
      return isArray(this._months)
        ? this._months[m.month()]
        : this._months[
            (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
              ? 'format'
              : 'standalone'
          ][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
      '_',
    );
    function localeMonthsShort(m, format) {
      if (!m) {
        return isArray(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort['standalone'];
      }
      return isArray(this._monthsShort)
        ? this._monthsShort[m.month()]
        : this._monthsShort[
            MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
          ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
      var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
          mom = createUTC([2000, i]);
          this._shortMonthsParse[i] = this.monthsShort(
            mom,
            '',
          ).toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'MMM') {
          ii = indexOf.call(this._shortMonthsParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeMonthsParse(monthName, format, strict) {
      var i, mom, regex;

      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
      }

      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }

      // TODO: add sorting
      // Sorting makes sure if one month (or abbr) is a prefix of another
      // see sorting in computeMonthsParse
      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp(
            '^' + this.months(mom, '').replace('.', '') + '$',
            'i',
          );
          this._shortMonthsParse[i] = new RegExp(
            '^' + this.monthsShort(mom, '').replace('.', '') + '$',
            'i',
          );
        }
        if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
          strict &&
          format === 'MMMM' &&
          this._longMonthsParse[i].test(monthName)
        ) {
          return i;
        } else if (
          strict &&
          format === 'MMM' &&
          this._shortMonthsParse[i].test(monthName)
        ) {
          return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
        }
      }
    }

    // MOMENTS

    function setMonth(mom, value) {
      var dayOfMonth;

      if (!mom.isValid()) {
        // No op
        return mom;
      }

      if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value);
          // TODO: Another silent failure?
          if (!isNumber(value)) {
            return mom;
          }
        }
      }

      dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
      return mom;
    }

    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, 'Month');
      }
    }

    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex;
      }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
          ? this._monthsStrictRegex
          : this._monthsRegex;
      }
    }

    function computeMonthsParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
      for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
      }
      // Sorting makes sure if one month (or abbr) is a prefix of another it
      // will match the longer piece.
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
      }
      for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i',
      );
      this._monthsShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i',
      );
    }

    function createDate(y, m, d, h, M, s, ms) {
      // can't just apply() to create a date:
      // https://stackoverflow.com/q/181348
      var date = new Date(y, m, d, h, M, s, ms);

      // the date constructor remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }
      return date;
    }

    function createUTCDate(y) {
      var date = new Date(Date.UTC.apply(null, arguments));

      // the Date.UTC function remaps years 0-99 to 1900-1999
      if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }
      return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
      var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

      return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

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
        dayOfYear: resDayOfYear,
      };
    }

    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

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
        year: resYear,
      };
    }

    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function(
      input,
      week,
      config,
      token,
    ) {
      week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
      dow: 0, // Sunday is the first day of the week.
      doy: 6, // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek() {
      return this._week.dow;
    }

    function localeFirstDayOfYear() {
      return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function(format) {
      return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function(format) {
      return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function(format) {
      return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function(isStrict, locale) {
      return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function(isStrict, locale) {
      return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function(isStrict, locale) {
      return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function(
      input,
      week,
      config,
      token,
    ) {
      var weekday = config._locale.weekdaysParse(input, token, config._strict);
      // if we didn't get a weekday name, mark the date as invalid
      if (weekday != null) {
        week.d = weekday;
      } else {
        getParsingFlags(config).invalidWeekday = input;
      }
    });

    addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
      week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
      if (typeof input !== 'string') {
        return input;
      }

      if (!isNaN(input)) {
        return parseInt(input, 10);
      }

      input = locale.weekdaysParse(input);
      if (typeof input === 'number') {
        return input;
      }

      return null;
    }

    function parseIsoWeekday(input, locale) {
      if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
      '_',
    );
    function localeWeekdays(m, format) {
      if (!m) {
        return isArray(this._weekdays)
          ? this._weekdays
          : this._weekdays['standalone'];
      }
      return isArray(this._weekdays)
        ? this._weekdays[m.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(format) ? 'format' : 'standalone'
          ][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort(m) {
      return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin(m) {
      return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
      var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
          mom = createUTC([2000, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(
            mom,
            '',
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(
            mom,
            '',
          ).toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
      }

      if (strict) {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format === 'dddd') {
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
      var i, mom, regex;

      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
      }

      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }

      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp(
            '^' + this.weekdays(mom, '').replace('.', '.?') + '$',
            'i',
          );
          this._shortWeekdaysParse[i] = new RegExp(
            '^' + this.weekdaysShort(mom, '').replace('.', '.?') + '$',
            'i',
          );
          this._minWeekdaysParse[i] = new RegExp(
            '^' + this.weekdaysMin(mom, '').replace('.', '.?') + '$',
            'i',
          );
        }
        if (!this._weekdaysParse[i]) {
          regex =
            '^' +
            this.weekdays(mom, '') +
            '|^' +
            this.weekdaysShort(mom, '') +
            '|^' +
            this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
          strict &&
          format === 'dddd' &&
          this._fullWeekdaysParse[i].test(weekdayName)
        ) {
          return i;
        } else if (
          strict &&
          format === 'ddd' &&
          this._shortWeekdaysParse[i].test(weekdayName)
        ) {
          return i;
        } else if (
          strict &&
          format === 'dd' &&
          this._minWeekdaysParse[i].test(weekdayName)
        ) {
          return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
        }
      }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
      } else {
        return day;
      }
    }

    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }

      // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.

      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex;
      }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex;
      }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex;
      }
    }

    function computeWeekdaysParse() {
      function cmpLenRev(a, b) {
        return b.length - a.length;
      }

      var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
      for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      // Sorting makes sure if one weekday (or abbr) is a prefix of another it
      // will match the longer piece.
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
      }

      this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;

      this._weekdaysStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i',
      );
      this._weekdaysShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i',
      );
      this._weekdaysMinStrictRegex = new RegExp(
        '^(' + minPieces.join('|') + ')',
        'i',
      );
    }

    // FORMATTING

    function hFormat() {
      return this.hours() % 12 || 12;
    }

    function kFormat() {
      return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function() {
      return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function() {
      return (
        '' +
        hFormat.apply(this) +
        zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2)
      );
    });

    addFormatToken('Hmm', 0, 0, function() {
      return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function() {
      return (
        '' +
        this.hours() +
        zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2)
      );
    });

    function meridiem(token, lowercase) {
      addFormatToken(token, 0, 0, function() {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase,
        );
      });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
      return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function(input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function(input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function(input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function(input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function(input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function(input, array, config) {
      var pos1 = input.length - 4;
      var pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
      // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
      // Using charAt should be more compatible.
      return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem(hours, minutes, isLower) {
      if (hours > 11) {
        return isLower ? 'pm' : 'PM';
      } else {
        return isLower ? 'am' : 'AM';
      }
    }

    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

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

      meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
      var i = 0,
        j,
        next,
        locale,
        split;

      while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));
          if (locale) {
            return locale;
          }
          if (
            next &&
            next.length >= j &&
            compareArrays(split, next, true) >= j - 1
          ) {
            //the next array item is better than a shallower substring of this one
            break;
          }
          j--;
        }
        i++;
      }
      return globalLocale;
    }

    function loadLocale(name) {
      var oldLocale = null;
      // TODO: Find a better way to register and load all the locales in Node
      if (
        !locales[name] &&
        'object' !== 'undefined' &&
        module &&
        module.exports
      ) {
        try {
          oldLocale = globalLocale._abbr;
          var aliasedRequire = commonjsRequire;
          aliasedRequire('./locale/' + name);
          getSetGlobalLocale(oldLocale);
        } catch (e) {}
      }
      return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }

        if (data) {
          // moment.duration._locale = moment._locale = data;
          globalLocale = data;
        } else {
          if (typeof console !== 'undefined' && console.warn) {
            //warn user if arguments are passed but the locale could not be set
            console.warn(
              'Locale ' + key + ' not found. Did you forget to load it?',
            );
          }
        }
      }

      return globalLocale._abbr;
    }

    function defineLocale(name, config) {
      if (config !== null) {
        var locale,
          parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            'defineLocaleOverride',
            'use moment.updateLocale(localeName, config) to change ' +
              'an existing locale. moment.defineLocale(localeName, ' +
              'config) should only be used for creating a new locale ' +
              'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
          );
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale = loadLocale(config.parentLocale);
            if (locale != null) {
              parentConfig = locale._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                name: name,
                config: config,
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function(x) {
            defineLocale(x.name, x.config);
          });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);

        return locales[name];
      } else {
        // useful for testing
        delete locales[name];
        return null;
      }
    }

    function updateLocale(name, config) {
      if (config != null) {
        var locale,
          tmpLocale,
          parentConfig = baseConfig;
        // MERGE
        tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
      } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }

    // returns locale data
    function getLocale(key) {
      var locale;

      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }

      if (!key) {
        return globalLocale;
      }

      if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
          return locale;
        }
        key = [key];
      }

      return chooseLocale(key);
    }

    function listLocales() {
      return keys(locales);
    }

    function checkOverflow(m) {
      var overflow;
      var a = m._a;

      if (a && getParsingFlags(m).overflow === -2) {
        overflow =
          a[MONTH] < 0 || a[MONTH] > 11
            ? MONTH
            : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
              ? DATE
              : a[HOUR] < 0 ||
                a[HOUR] > 24 ||
                (a[HOUR] === 24 &&
                  (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0))
                ? HOUR
                : a[MINUTE] < 0 || a[MINUTE] > 59
                  ? MINUTE
                  : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                      ? MILLISECOND
                      : -1;

        if (
          getParsingFlags(m)._overflowDayOfYear &&
          (overflow < YEAR || overflow > DATE)
        ) {
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

    // Pick the first defined of two or three arguments.
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
      // hooks is actually the exported moment object
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate(),
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
      var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

      if (config._d) {
        return;
      }

      currentDate = currentDateArray(config);

      //compute day of the year from weeks and weekdays
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }

      //if the day of the year is set, figure out what it is
      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (
          config._dayOfYear > daysInYear(yearToUse) ||
          config._dayOfYear === 0
        ) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }

      // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything
      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      }

      // Zero out whatever was not defaulted, including time
      for (; i < 7; i++) {
        config._a[i] = input[i] =
          config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
      }

      // Check for 24:00:00.000
      if (
        config._a[HOUR] === 24 &&
        config._a[MINUTE] === 0 &&
        config._a[SECOND] === 0 &&
        config._a[MILLISECOND] === 0
      ) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(
        null,
        input,
      );
      expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();

      // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
        config._a[HOUR] = 24;
      }

      // check for mismatching day of week
      if (
        config._w &&
        typeof config._w.d !== 'undefined' &&
        config._w.d !== expectedWeekday
      ) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }

    function dayOfYearFromWeekInfo(config) {
      var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

      w = config._w;
      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(
          w.GG,
          config._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year,
        );
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          // local weekday -- counting starts from begining of week
          weekday = w.e + dow;
          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          // default to begining of week
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

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, false],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      // YYYYMM is NOT allowed by the standard
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, false],
      ['YYYYDDD', /\d{7}/],
    ];

    // iso time formats and regexes
    var isoTimes = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/],
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
      var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

      if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config._isValid = false;
          return;
        }
        if (match[3]) {
          for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
              // match[2] should be 'T' or space
              timeFormat = (match[2] || ' ') + isoTimes[i][0];
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
            tzFormat = 'Z';
          } else {
            config._isValid = false;
            return;
          }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(
      yearStr,
      monthStr,
      dayStr,
      hourStr,
      minuteStr,
      secondStr,
    ) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
      ];

      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }

      return result;
    }

    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2000 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }

    function preprocessRFC2822(s) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return s
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .trim();
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
          weekdayActual = new Date(
            parsedInput[0],
            parsedInput[1],
            parsedInput[2],
          ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }
      return true;
    }

    var obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
      } else {
        var hm = parseInt(numOffset, 10);
        var m = hm % 100,
          h = (hm - m) / 100;
        return h * 60 + m;
      }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i));
      if (match) {
        var parsedArray = extractFromRFC2822Strings(
          match[4],
          match[3],
          match[2],
          match[5],
          match[6],
          match[7],
        );
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

    // date from iso format or fallback
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

      // Final attempt, use Input Fallback
      hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
      'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
      function(config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
      },
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function() {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function() {};

    // date from string and format string
    function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
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

      // This array is used to make a Date, either with `new Date` or `Date.UTC`
      var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

      tokens =
        expandFormat(config._f, config._locale).match(formattingTokens) || [];

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) ||
          [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length,
          );
          totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }
          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      }

      // add remaining unparsed input length to the string
      getParsingFlags(config).charsLeftOver =
        stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      }

      // clear _12h flag if hour is <= 12
      if (
        config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0
      ) {
        getParsingFlags(config).bigHour = undefined;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      // handle meridiem
      config._a[HOUR] = meridiemFixWrap(
        config._locale,
        config._a[HOUR],
        config._meridiem,
      );

      configFromArray(config);
      checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
      var isPm;

      if (meridiem == null) {
        // nothing to do
        return hour;
      }
      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        // this is not supposed to happen
        return hour;
      }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
      var tempConfig, bestMoment, scoreToBeat, i, currentScore;

      if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
      }

      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
          continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }

      extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
      if (config._d) {
        return;
      }

      var i = normalizeObjectUnits(config._i);
      config._a = map(
        [
          i.year,
          i.month,
          i.day || i.date,
          i.hour,
          i.minute,
          i.second,
          i.millisecond,
        ],
        function(obj) {
          return obj && parseInt(obj, 10);
        },
      );

      configFromArray(config);
    }

    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
      }

      return res;
    }

    function prepareConfig(config) {
      var input = config._i,
        format = config._f;

      config._locale = config._locale || getLocale(config._l);

      if (input === null || (format === undefined && input === '')) {
        return createInvalid({ nullInput: true });
      }

      if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
      }

      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
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
      } else if (typeof input === 'string') {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function(obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
      var c = {};

      if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
      }

      if (
        (isObject(input) && isObjectEmpty(input)) ||
        (isArray(input) && input.length === 0)
      ) {
        input = undefined;
      }
      // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423
      c._isAMomentObject = true;
      c._useUTC = c._isUTC = isUTC;
      c._l = locale;
      c._i = input;
      c._f = format;
      c._strict = strict;

      return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
      return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      },
    );

    var prototypeMax = deprecate(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      },
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
      var res, i;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
        }
      }
      return res;
    }

    // TODO: Use [].sort instead?
    function min() {
      var args = [].slice.call(arguments, 0);

      return pickBy('isBefore', args);
    }

    function max() {
      var args = [].slice.call(arguments, 0);

      return pickBy('isAfter', args);
    }

    var now = function() {
      return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
      'year',
      'quarter',
      'month',
      'week',
      'day',
      'hour',
      'minute',
      'second',
      'millisecond',
    ];

    function isDurationValid(m) {
      for (var key in m) {
        if (
          !(
            indexOf.call(ordering, key) !== -1 &&
            (m[key] == null || !isNaN(m[key]))
          )
        ) {
          return false;
        }
      }

      var unitHasDecimal = false;
      for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
          if (unitHasDecimal) {
            return false; // only allow non-integers for smallest unit
          }
          if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
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
      var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

      this._isValid = isDurationValid(normalizedInput);

      // representation for dateAddRemove
      this._milliseconds =
        +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
      // Because of dateAddRemove treats 24 hours as different from a
      // day when working around DST, we need to store them separately
      this._days = +days + weeks * 7;
      // It is impossible to translate months into days without knowing
      // which months you are are talking about, so we have to store
      // it separately.
      this._months = +months + quarters * 3 + years * 12;

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

    // FORMATTING

    function offset(token, separator) {
      addFormatToken(token, 0, 0, function() {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }
        return (
          sign +
          zeroFill(~~(offset / 60), 2) +
          separator +
          zeroFill(~~offset % 60, 2)
        );
      });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function(input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
      var matches = (string || '').match(matcher);

      if (matches === null) {
        return null;
      }

      var chunk = matches[matches.length - 1] || [];
      var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
      var minutes = +(parts[1] * 60) + toInt(parts[2]);

      return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
      var res, diff;
      if (model._isUTC) {
        res = model.clone();
        diff =
          (isMoment(input) || isDate(input)
            ? input.valueOf()
            : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }

    function getDateOffset(m) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function() {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset = this._offset || 0,
        localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === 'string') {
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
          this.add(localAdjust, 'm');
        }
        if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(this, createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset : getDateOffset(this);
      }
    }

    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
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
          this.subtract(getDateOffset(this), 'm');
        }
      }
      return this;
    }

    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === 'string') {
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
      return (
        this.utcOffset() >
          this.clone()
            .month(0)
            .utcOffset() ||
        this.utcOffset() >
          this.clone()
            .month(5)
            .utcOffset()
      );
    }

    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }

      var c = {};

      copyConfig(c, this);
      c = prepareConfig(c);

      if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted =
          this.isValid() && compareArrays(c._a, other.toArray()) > 0;
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

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
      var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months,
        };
      } else if (isNumber(input)) {
        duration = {};
        if (key) {
          duration[key] = input;
        } else {
          duration.milliseconds = input;
        }
      } else if (!!(match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign,
          h: toInt(match[HOUR]) * sign,
          m: toInt(match[MINUTE]) * sign,
          s: toInt(match[SECOND]) * sign,
          ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
        };
      } else if (!!(match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;
        duration = {
          y: parseIso(match[2], sign),
          M: parseIso(match[3], sign),
          w: parseIso(match[4], sign),
          d: parseIso(match[5], sign),
          h: parseIso(match[6], sign),
          m: parseIso(match[7], sign),
          s: parseIso(match[8], sign),
        };
      } else if (duration == null) {
        // checks for null or undefined
        duration = {};
      } else if (
        typeof duration === 'object' &&
        ('from' in duration || 'to' in duration)
      ) {
        diffRes = momentsDifference(
          createLocal(duration.from),
          createLocal(duration.to),
        );

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }

      ret = new Duration(duration);

      if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
      }

      return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.
      var res = inp && parseFloat(inp.replace(',', '.'));
      // apply sign while we're at it
      return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
      var res = { milliseconds: 0, months: 0 };

      res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
      if (
        base
          .clone()
          .add(res.months, 'M')
          .isAfter(other)
      ) {
        --res.months;
      }

      res.milliseconds = +other - +base.clone().add(res.months, 'M');

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

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
      return function(val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            'moment().' +
              name +
              '(period, number) is deprecated. Please use moment().' +
              name +
              '(number, period). ' +
              'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
          );
          tmp = val;
          val = period;
          period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

      if (!mom.isValid()) {
        // No op
        return;
      }

      updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
      }
      if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
      }
      if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days || months);
      }
    }

    var add = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
      var diff = myMoment.diff(now, 'days', true);
      return diff < -6
        ? 'sameElse'
        : diff < -1
          ? 'lastWeek'
          : diff < 0
            ? 'lastDay'
            : diff < 1
              ? 'sameDay'
              : diff < 2
                ? 'nextDay'
                : diff < 7
                  ? 'nextWeek'
                  : 'sameElse';
    }

    function calendar$1(time, formats) {
      // We want to compare the start of today, vs this.
      // Getting start-of-today depends on whether we're local/utc/offset or not.
      var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

      var output =
        formats &&
        (isFunction(formats[format])
          ? formats[format].call(this, now)
          : formats[format]);

      return this.format(
        output || this.localeData().calendar(format, this, createLocal(now)),
      );
    }

    function clone() {
      return new Moment(this);
    }

    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
      } else {
        return (
          localInput.valueOf() <
          this.clone()
            .startOf(units)
            .valueOf()
        );
      }
    }

    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
      if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
      } else {
        return (
          this.clone()
            .endOf(units)
            .valueOf() < localInput.valueOf()
        );
      }
    }

    function isBetween(from, to, units, inclusivity) {
      inclusivity = inclusivity || '()';
      return (
        (inclusivity[0] === '('
          ? this.isAfter(from, units)
          : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')'
          ? this.isBefore(to, units)
          : !this.isAfter(to, units))
      );
    }

    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units || 'millisecond');
      if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return (
          this.clone()
            .startOf(units)
            .valueOf() <= inputMs &&
          inputMs <=
            this.clone()
              .endOf(units)
              .valueOf()
        );
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
        case 'year':
          output = monthDiff(this, that) / 12;
          break;
        case 'month':
          output = monthDiff(this, that);
          break;
        case 'quarter':
          output = monthDiff(this, that) / 3;
          break;
        case 'second':
          output = (this - that) / 1e3;
          break; // 1000
        case 'minute':
          output = (this - that) / 6e4;
          break; // 1000 * 60
        case 'hour':
          output = (this - that) / 36e5;
          break; // 1000 * 60 * 60
        case 'day':
          output = (this - that - zoneDelta) / 864e5;
          break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
          output = (this - that - zoneDelta) / 6048e5;
          break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
          output = this - that;
      }

      return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
      // difference in months
      var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

      if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
      }

      //check for negative zero, return zero if negative zero
      return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
      return this.clone()
        .locale('en')
        .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true;
      var m = utc ? this.clone().utc() : this;
      if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(
          m,
          utc
            ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
            : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ',
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
            .toISOString()
            .replace('Z', formatMoment(m, 'Z'));
        }
      }
      return formatMoment(
        m,
        utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
      );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
      if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
      }
      var func = 'moment';
      var zone = '';
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
      }
      var prefix = '[' + func + '("]';
      var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
      var datetime = '-MM-DD[T]HH:mm:ss.SSS';
      var suffix = zone + '[")]';

      return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc()
          ? hooks.defaultFormatUtc
          : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
      if (
        this.isValid() &&
        ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
      ) {
        return createDuration({ to: this, from: time })
          .locale(this.locale())
          .humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
      if (
        this.isValid() &&
        ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
      ) {
        return createDuration({ from: this, to: time })
          .locale(this.locale())
          .humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }

    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
      var newLocaleData;

      if (key === undefined) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }

    var lang = deprecate(
      'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
      function(key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      },
    );

    function localeData() {
      return this._locale;
    }

    function startOf(units) {
      units = normalizeUnits(units);
      // the following switch intentionally omits break keywords
      // to utilize falling through the cases.
      switch (units) {
        case 'year':
          this.month(0);
        /* falls through */
        case 'quarter':
        case 'month':
          this.date(1);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
          this.hours(0);
        /* falls through */
        case 'hour':
          this.minutes(0);
        /* falls through */
        case 'minute':
          this.seconds(0);
        /* falls through */
        case 'second':
          this.milliseconds(0);
      }

      // weeks are a special case
      if (units === 'week') {
        this.weekday(0);
      }
      if (units === 'isoWeek') {
        this.isoWeekday(1);
      }

      // quarters are also special
      if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
      }

      return this;
    }

    function endOf(units) {
      units = normalizeUnits(units);
      if (units === undefined || units === 'millisecond') {
        return this;
      }

      // 'date' is an alias for 'day', so it should be considered as such.
      if (units === 'date') {
        units = 'day';
      }

      return this.startOf(units)
        .add(1, units === 'isoWeek' ? 'week' : units)
        .subtract(1, 'ms');
    }

    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
      return Math.floor(this.valueOf() / 1000);
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
        m.millisecond(),
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
        milliseconds: m.milliseconds(),
      };
    }

    function toJSON() {
      // new Date(NaN).toJSON() === null
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
        strict: this._strict,
      };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function() {
      return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function() {
      return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
      addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(
      input,
      week,
      config,
      token,
    ) {
      week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
      week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy,
      );
    }

    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4,
      );
    }

    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
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
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function(input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
      return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function(isStrict, locale) {
      // TODO: Remove "ordinalParse" fallback in next major release.
      return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function(input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function(input, array, config) {
      config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
      var dayOfYear =
        Math.round(
          (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5,
        ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function() {
      return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function() {
      return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function() {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function() {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function() {
      return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function() {
      return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
      return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
      return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
      addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
      array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
      addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
      return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
      return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
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
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
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
    proto.isoWeeksInYear = getISOWeeksInYear;
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
    proto.dates = deprecate(
      'dates accessor is deprecated. Use date instead.',
      getSetDayOfMonth,
    );
    proto.months = deprecate(
      'months accessor is deprecated. Use month instead',
      getSetMonth,
    );
    proto.years = deprecate(
      'years accessor is deprecated. Use year instead',
      getSetYear,
    );
    proto.zone = deprecate(
      'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
      getSetZone,
    );
    proto.isDSTShifted = deprecate(
      'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
      isDaylightSavingTimeShifted,
    );

    function createUnix(input) {
      return createLocal(input * 1000);
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

    function get$1(format, index, field, setter) {
      var locale = getLocale();
      var utc = createUTC().set(setter, index);
      return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
      if (isNumber(format)) {
        index = format;
        format = undefined;
      }

      format = format || '';

      if (index != null) {
        return get$1(format, index, field, 'month');
      }

      var i;
      var out = [];
      for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
      }
      return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
      if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
          index = format;
          format = undefined;
        }

        format = format || '';
      }

      var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

      if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
      }

      var i;
      var out = [];
      for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
      }
      return out;
    }

    function listMonths(format, index) {
      return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
      return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
      return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(number) {
        var b = number % 10,
          output =
            toInt((number % 100) / 10) === 1
              ? 'th'
              : b === 1
                ? 'st'
                : b === 2
                  ? 'nd'
                  : b === 3
                    ? 'rd'
                    : 'th';
        return number + output;
      },
    });

    // Side effect imports

    hooks.lang = deprecate(
      'moment.lang is deprecated. Use moment.locale instead.',
      getSetGlobalLocale,
    );
    hooks.langData = deprecate(
      'moment.langData is deprecated. Use moment.localeData instead.',
      getLocale,
    );

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

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
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
      var milliseconds = this._milliseconds;
      var days = this._days;
      var months = this._months;
      var data = this._data;
      var seconds, minutes, hours, years, monthsFromDays;

      // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166
      if (
        !(
          (milliseconds >= 0 && days >= 0 && months >= 0) ||
          (milliseconds <= 0 && days <= 0 && months <= 0)
        )
      ) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      }

      // The following code bubbles up values, see the tests for
      // examples of what that means.
      data.milliseconds = milliseconds % 1000;

      seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;

      minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;

      hours = absFloor(minutes / 60);
      data.hours = hours % 24;

      days += absFloor(hours / 24);

      // convert days to months
      monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays));

      // 12 months -> 1 year
      years = absFloor(months / 12);
      months %= 12;

      data.days = days;
      data.months = months;
      data.years = years;

      return this;
    }

    function daysToMonths(days) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return days * 4800 / 146097;
    }

    function monthsToDays(months) {
      // the reverse of daysToMonths
      return months * 146097 / 4800;
    }

    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }
      var days;
      var months;
      var milliseconds = this._milliseconds;

      units = normalizeUnits(units);

      if (units === 'month' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
      } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case 'week':
            return days / 7 + milliseconds / 6048e5;
          case 'day':
            return days + milliseconds / 864e5;
          case 'hour':
            return days * 24 + milliseconds / 36e5;
          case 'minute':
            return days * 1440 + milliseconds / 6e4;
          case 'second':
            return days * 86400 + milliseconds / 1000;
          // Math.floor prevents floating point math errors here
          case 'millisecond':
            return Math.floor(days * 864e5) + milliseconds;
          default:
            throw new Error('Unknown unit ' + units);
        }
      }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
      if (!this.isValid()) {
        return NaN;
      }
      return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
      );
    }

    function makeAs(alias) {
      return function() {
        return this.as(alias);
      };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds = makeAs('s');
    var asMinutes = makeAs('m');
    var asHours = makeAs('h');
    var asDays = makeAs('d');
    var asWeeks = makeAs('w');
    var asMonths = makeAs('M');
    var asYears = makeAs('y');

    function clone$1() {
      return createDuration(this);
    }

    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
      return function() {
        return this.isValid() ? this._data[name] : NaN;
      };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds = makeGetter('seconds');
    var minutes = makeGetter('minutes');
    var hours = makeGetter('hours');
    var days = makeGetter('days');
    var months = makeGetter('months');
    var years = makeGetter('years');

    function weeks() {
      return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
      ss: 44, // a few seconds to seconds
      s: 45, // seconds to minute
      m: 45, // minutes to hour
      h: 22, // hours to day
      d: 26, // days to month
      M: 11, // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(
      string,
      number,
      withoutSuffix,
      isFuture,
      locale,
    ) {
      return locale.relativeTime(
        number || 1,
        !!withoutSuffix,
        string,
        isFuture,
      );
    }

    function relativeTime$1(posNegDuration, withoutSuffix, locale) {
      var duration = createDuration(posNegDuration).abs();
      var seconds = round(duration.as('s'));
      var minutes = round(duration.as('m'));
      var hours = round(duration.as('h'));
      var days = round(duration.as('d'));
      var months = round(duration.as('M'));
      var years = round(duration.as('y'));

      var a = (seconds <= thresholds.ss && ['s', seconds]) ||
        (seconds < thresholds.s && ['ss', seconds]) ||
        (minutes <= 1 && ['m']) ||
        (minutes < thresholds.m && ['mm', minutes]) ||
        (hours <= 1 && ['h']) ||
        (hours < thresholds.h && ['hh', hours]) ||
        (days <= 1 && ['d']) ||
        (days < thresholds.d && ['dd', days]) ||
        (months <= 1 && ['M']) ||
        (months < thresholds.M && ['MM', months]) ||
        (years <= 1 && ['y']) || ['yy', years];

      a[2] = withoutSuffix;
      a[3] = +posNegDuration > 0;
      a[4] = locale;
      return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === undefined) {
        return round;
      }
      if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
      }
      return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }
      if (limit === undefined) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === 's') {
        thresholds.ss = limit - 1;
      }
      return true;
    }

    function humanize(withSuffix) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var locale = this.localeData();
      var output = relativeTime$1(this, !withSuffix, locale);

      if (withSuffix) {
        output = locale.pastFuture(+this, output);
      }

      return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
      return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
      // for ISO strings we do not use the normal bubbling rules:
      //  * milliseconds bubble up until they become hours
      //  * days do not bubble at all
      //  * months bubble up until they become years
      // This is because there is no context-free conversion between hours and days
      // (think of clock changes)
      // and also not between days and months (28-31 days per month)
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }

      var seconds = abs$1(this._milliseconds) / 1000;
      var days = abs$1(this._days);
      var months = abs$1(this._months);
      var minutes, hours, years;

      // 3600 seconds -> 60 minutes -> 1 hour
      minutes = absFloor(seconds / 60);
      hours = absFloor(minutes / 60);
      seconds %= 60;
      minutes %= 60;

      // 12 months -> 1 year
      years = absFloor(months / 12);
      months %= 12;

      // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
      var Y = years;
      var M = months;
      var D = days;
      var h = hours;
      var m = minutes;
      var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
      var total = this.asSeconds();

      if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
      }

      var totalSign = total < 0 ? '-' : '';
      var ymSign = sign(this._months) !== sign(total) ? '-' : '';
      var daysSign = sign(this._days) !== sign(total) ? '-' : '';
      var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

      return (
        totalSign +
        'P' +
        (Y ? ymSign + Y + 'Y' : '') +
        (M ? ymSign + M + 'M' : '') +
        (D ? daysSign + D + 'D' : '') +
        (h || m || s ? 'T' : '') +
        (h ? hmsSign + h + 'H' : '') +
        (m ? hmsSign + m + 'M' : '') +
        (s ? hmsSign + s + 'S' : '')
      );
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

    proto$2.toIsoString = deprecate(
      'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
      toISOString$1,
    );
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function(input, array, config) {
      config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function(input, array, config) {
      config._d = new Date(toInt(input));
    });

    // Side effect imports

    hooks.version = '2.22.1';

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

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
      DATE: 'YYYY-MM-DD', // <input type="date" />
      TIME: 'HH:mm', // <input type="time" />
      TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
      TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
      WEEK: 'YYYY-[W]WW', // <input type="week" />
      MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;
  });
});

var momentTimezone = createCommonjsModule(function(module) {
  //! moment-timezone.js
  //! version : 0.5.16
  //! Copyright (c) JS Foundation and other contributors
  //! license : MIT
  //! github.com/moment/moment-timezone

  (function(root, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
      undefined(['moment'], factory); // AMD
    } else if ('object' === 'object' && module.exports) {
      module.exports = factory(moment); // Node
    } else {
      factory(root.moment); // Browser
    }
  })(commonjsGlobal, function(moment$$1) {
    var VERSION = '0.5.16',
      zones = {},
      links = {},
      names = {},
      guesses = {},
      cachedGuess,
      momentVersion = moment$$1.version.split('.'),
      major = +momentVersion[0],
      minor = +momentVersion[1];

    // Moment.js version check
    if (major < 2 || (major === 2 && minor < 6)) {
      logError(
        'Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' +
          moment$$1.version +
          '. See momentjs.com',
      );
    }

    /************************************
		Unpacking
	************************************/

    function charCodeToInt(charCode) {
      if (charCode > 96) {
        return charCode - 87;
      } else if (charCode > 64) {
        return charCode - 29;
      }
      return charCode - 48;
    }

    function unpackBase60(string) {
      var i = 0,
        parts = string.split('.'),
        whole = parts[0],
        fractional = parts[1] || '',
        multiplier = 1,
        num,
        out = 0,
        sign = 1;

      // handle negative numbers
      if (string.charCodeAt(0) === 45) {
        i = 1;
        sign = -1;
      }

      // handle digits before the decimal
      for (i; i < whole.length; i++) {
        num = charCodeToInt(whole.charCodeAt(i));
        out = 60 * out + num;
      }

      // handle digits after the decimal
      for (i = 0; i < fractional.length; i++) {
        multiplier = multiplier / 60;
        num = charCodeToInt(fractional.charCodeAt(i));
        out += num * multiplier;
      }

      return out * sign;
    }

    function arrayToInt(array) {
      for (var i = 0; i < array.length; i++) {
        array[i] = unpackBase60(array[i]);
      }
    }

    function intToUntil(array, length) {
      for (var i = 0; i < length; i++) {
        array[i] = Math.round((array[i - 1] || 0) + array[i] * 60000); // minutes to milliseconds
      }

      array[length - 1] = Infinity;
    }

    function mapIndices(source, indices) {
      var out = [],
        i;

      for (i = 0; i < indices.length; i++) {
        out[i] = source[indices[i]];
      }

      return out;
    }

    function unpack(string) {
      var data = string.split('|'),
        offsets = data[2].split(' '),
        indices = data[3].split(''),
        untils = data[4].split(' ');

      arrayToInt(offsets);
      arrayToInt(indices);
      arrayToInt(untils);

      intToUntil(untils, indices.length);

      return {
        name: data[0],
        abbrs: mapIndices(data[1].split(' '), indices),
        offsets: mapIndices(offsets, indices),
        untils: untils,
        population: data[5] | 0,
      };
    }

    /************************************
		Zone object
	************************************/

    function Zone(packedString) {
      if (packedString) {
        this._set(unpack(packedString));
      }
    }

    Zone.prototype = {
      _set: function(unpacked) {
        this.name = unpacked.name;
        this.abbrs = unpacked.abbrs;
        this.untils = unpacked.untils;
        this.offsets = unpacked.offsets;
        this.population = unpacked.population;
      },

      _index: function(timestamp) {
        var target = +timestamp,
          untils = this.untils,
          i;

        for (i = 0; i < untils.length; i++) {
          if (target < untils[i]) {
            return i;
          }
        }
      },

      parse: function(timestamp) {
        var target = +timestamp,
          offsets = this.offsets,
          untils = this.untils,
          max = untils.length - 1,
          offset,
          offsetNext,
          offsetPrev,
          i;

        for (i = 0; i < max; i++) {
          offset = offsets[i];
          offsetNext = offsets[i + 1];
          offsetPrev = offsets[i ? i - 1 : i];

          if (offset < offsetNext && tz.moveAmbiguousForward) {
            offset = offsetNext;
          } else if (offset > offsetPrev && tz.moveInvalidForward) {
            offset = offsetPrev;
          }

          if (target < untils[i] - offset * 60000) {
            return offsets[i];
          }
        }

        return offsets[max];
      },

      abbr: function(mom) {
        return this.abbrs[this._index(mom)];
      },

      offset: function(mom) {
        logError('zone.offset has been deprecated in favor of zone.utcOffset');
        return this.offsets[this._index(mom)];
      },

      utcOffset: function(mom) {
        return this.offsets[this._index(mom)];
      },
    };

    /************************************
		Current Timezone
	************************************/

    function OffsetAt(at) {
      var timeString = at.toTimeString();
      var abbr = timeString.match(/\([a-z ]+\)/i);
      if (abbr && abbr[0]) {
        // 17:56:31 GMT-0600 (CST)
        // 17:56:31 GMT-0600 (Central Standard Time)
        abbr = abbr[0].match(/[A-Z]/g);
        abbr = abbr ? abbr.join('') : undefined;
      } else {
        // 17:56:31 CST
        // 17:56:31 GMT+0800 (台北標準時間)
        abbr = timeString.match(/[A-Z]{3,5}/g);
        abbr = abbr ? abbr[0] : undefined;
      }

      if (abbr === 'GMT') {
        abbr = undefined;
      }

      this.at = +at;
      this.abbr = abbr;
      this.offset = at.getTimezoneOffset();
    }

    function ZoneScore(zone) {
      this.zone = zone;
      this.offsetScore = 0;
      this.abbrScore = 0;
    }

    ZoneScore.prototype.scoreOffsetAt = function(offsetAt) {
      this.offsetScore += Math.abs(
        this.zone.utcOffset(offsetAt.at) - offsetAt.offset,
      );
      if (
        this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr
      ) {
        this.abbrScore++;
      }
    };

    function findChange(low, high) {
      var mid, diff;

      while ((diff = (((high.at - low.at) / 12e4) | 0) * 6e4)) {
        mid = new OffsetAt(new Date(low.at + diff));
        if (mid.offset === low.offset) {
          low = mid;
        } else {
          high = mid;
        }
      }

      return low;
    }

    function userOffsets() {
      var startYear = new Date().getFullYear() - 2,
        last = new OffsetAt(new Date(startYear, 0, 1)),
        offsets = [last],
        change,
        next,
        i;

      for (i = 1; i < 48; i++) {
        next = new OffsetAt(new Date(startYear, i, 1));
        if (next.offset !== last.offset) {
          change = findChange(last, next);
          offsets.push(change);
          offsets.push(new OffsetAt(new Date(change.at + 6e4)));
        }
        last = next;
      }

      for (i = 0; i < 4; i++) {
        offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
        offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
      }

      return offsets;
    }

    function sortZoneScores(a, b) {
      if (a.offsetScore !== b.offsetScore) {
        return a.offsetScore - b.offsetScore;
      }
      if (a.abbrScore !== b.abbrScore) {
        return a.abbrScore - b.abbrScore;
      }
      return b.zone.population - a.zone.population;
    }

    function addToGuesses(name, offsets) {
      var i, offset;
      arrayToInt(offsets);
      for (i = 0; i < offsets.length; i++) {
        offset = offsets[i];
        guesses[offset] = guesses[offset] || {};
        guesses[offset][name] = true;
      }
    }

    function guessesForUserOffsets(offsets) {
      var offsetsLength = offsets.length,
        filteredGuesses = {},
        out = [],
        i,
        j,
        guessesOffset;

      for (i = 0; i < offsetsLength; i++) {
        guessesOffset = guesses[offsets[i].offset] || {};
        for (j in guessesOffset) {
          if (guessesOffset.hasOwnProperty(j)) {
            filteredGuesses[j] = true;
          }
        }
      }

      for (i in filteredGuesses) {
        if (filteredGuesses.hasOwnProperty(i)) {
          out.push(names[i]);
        }
      }

      return out;
    }

    function rebuildGuess() {
      // use Intl API when available and returning valid time zone
      try {
        var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (intlName && intlName.length > 3) {
          var name = names[normalizeName(intlName)];
          if (name) {
            return name;
          }
          logError(
            'Moment Timezone found ' +
              intlName +
              ' from the Intl api, but did not have that data loaded.',
          );
        }
      } catch (e) {
        // Intl unavailable, fall back to manual guessing.
      }

      var offsets = userOffsets(),
        offsetsLength = offsets.length,
        guesses = guessesForUserOffsets(offsets),
        zoneScores = [],
        zoneScore,
        i,
        j;

      for (i = 0; i < guesses.length; i++) {
        zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
        for (j = 0; j < offsetsLength; j++) {
          zoneScore.scoreOffsetAt(offsets[j]);
        }
        zoneScores.push(zoneScore);
      }

      zoneScores.sort(sortZoneScores);

      return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
    }

    function guess(ignoreCache) {
      if (!cachedGuess || ignoreCache) {
        cachedGuess = rebuildGuess();
      }
      return cachedGuess;
    }

    /************************************
		Global Methods
	************************************/

    function normalizeName(name) {
      return (name || '').toLowerCase().replace(/\//g, '_');
    }

    function addZone(packed) {
      var i, name, split, normalized;

      if (typeof packed === 'string') {
        packed = [packed];
      }

      for (i = 0; i < packed.length; i++) {
        split = packed[i].split('|');
        name = split[0];
        normalized = normalizeName(name);
        zones[normalized] = packed[i];
        names[normalized] = name;
        addToGuesses(normalized, split[2].split(' '));
      }
    }

    function getZone(name, caller) {
      name = normalizeName(name);

      var zone = zones[name];
      var link;

      if (zone instanceof Zone) {
        return zone;
      }

      if (typeof zone === 'string') {
        zone = new Zone(zone);
        zones[name] = zone;
        return zone;
      }

      // Pass getZone to prevent recursion more than 1 level deep
      if (
        links[name] &&
        caller !== getZone &&
        (link = getZone(links[name], getZone))
      ) {
        zone = zones[name] = new Zone();
        zone._set(link);
        zone.name = names[name];
        return zone;
      }

      return null;
    }

    function getNames() {
      var i,
        out = [];

      for (i in names) {
        if (
          names.hasOwnProperty(i) &&
          (zones[i] || zones[links[i]]) &&
          names[i]
        ) {
          out.push(names[i]);
        }
      }

      return out.sort();
    }

    function addLink(aliases) {
      var i, alias, normal0, normal1;

      if (typeof aliases === 'string') {
        aliases = [aliases];
      }

      for (i = 0; i < aliases.length; i++) {
        alias = aliases[i].split('|');

        normal0 = normalizeName(alias[0]);
        normal1 = normalizeName(alias[1]);

        links[normal0] = normal1;
        names[normal0] = alias[0];

        links[normal1] = normal0;
        names[normal1] = alias[1];
      }
    }

    function loadData(data) {
      addZone(data.zones);
      addLink(data.links);
      tz.dataVersion = data.version;
    }

    function zoneExists(name) {
      if (!zoneExists.didShowError) {
        zoneExists.didShowError = true;
        logError(
          "moment.tz.zoneExists('" +
            name +
            "') has been deprecated in favor of !moment.tz.zone('" +
            name +
            "')",
        );
      }
      return !!getZone(name);
    }

    function needsOffset(m) {
      var isUnixTimestamp = m._f === 'X' || m._f === 'x';
      return !!(m._a && m._tzm === undefined && !isUnixTimestamp);
    }

    function logError(message) {
      if (
        typeof console !== 'undefined' &&
        typeof console.error === 'function'
      ) {
        console.error(message);
      }
    }

    /************************************
		moment.tz namespace
	************************************/

    function tz(input) {
      var args = Array.prototype.slice.call(arguments, 0, -1),
        name = arguments[arguments.length - 1],
        zone = getZone(name),
        out = moment$$1.utc.apply(null, args);

      if (zone && !moment$$1.isMoment(input) && needsOffset(out)) {
        out.add(zone.parse(out), 'minutes');
      }

      out.tz(name);

      return out;
    }

    tz.version = VERSION;
    tz.dataVersion = '';
    tz._zones = zones;
    tz._links = links;
    tz._names = names;
    tz.add = addZone;
    tz.link = addLink;
    tz.load = loadData;
    tz.zone = getZone;
    tz.zoneExists = zoneExists; // deprecated in 0.1.0
    tz.guess = guess;
    tz.names = getNames;
    tz.Zone = Zone;
    tz.unpack = unpack;
    tz.unpackBase60 = unpackBase60;
    tz.needsOffset = needsOffset;
    tz.moveInvalidForward = true;
    tz.moveAmbiguousForward = false;

    /************************************
		Interface with Moment.js
	************************************/

    var fn = moment$$1.fn;

    moment$$1.tz = tz;

    moment$$1.defaultZone = null;

    moment$$1.updateOffset = function(mom, keepTime) {
      var zone = moment$$1.defaultZone,
        offset;

      if (mom._z === undefined) {
        if (zone && needsOffset(mom) && !mom._isUTC) {
          mom._d = moment$$1.utc(mom._a)._d;
          mom.utc().add(zone.parse(mom), 'minutes');
        }
        mom._z = zone;
      }
      if (mom._z) {
        offset = mom._z.utcOffset(mom);
        if (Math.abs(offset) < 16) {
          offset = offset / 60;
        }
        if (mom.utcOffset !== undefined) {
          mom.utcOffset(-offset, keepTime);
        } else {
          mom.zone(offset, keepTime);
        }
      }
    };

    fn.tz = function(name, keepTime) {
      if (name) {
        this._z = getZone(name);
        if (this._z) {
          moment$$1.updateOffset(this, keepTime);
        } else {
          logError(
            'Moment Timezone has no data for ' +
              name +
              '. See http://momentjs.com/timezone/docs/#/data-loading/.',
          );
        }
        return this;
      }
      if (this._z) {
        return this._z.name;
      }
    };

    function abbrWrap(old) {
      return function() {
        if (this._z) {
          return this._z.abbr(this);
        }
        return old.call(this);
      };
    }

    function resetZoneWrap(old) {
      return function() {
        this._z = null;
        return old.apply(this, arguments);
      };
    }

    fn.zoneName = abbrWrap(fn.zoneName);
    fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
    fn.utc = resetZoneWrap(fn.utc);

    moment$$1.tz.setDefault = function(name) {
      if (major < 2 || (major === 2 && minor < 9)) {
        logError(
          'Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' +
            moment$$1.version +
            '.',
        );
      }
      moment$$1.defaultZone = name ? getZone(name) : null;
      return moment$$1;
    };

    // Cloning a moment should include the _z property.
    var momentProperties = moment$$1.momentProperties;
    if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
      // moment 2.8.1+
      momentProperties.push('_z');
      momentProperties.push('_a');
    } else if (momentProperties) {
      // moment 2.7.0
      momentProperties._z = null;
    }

    // INJECT DATA

    return moment$$1;
  });
});

var version = '2018d';
var zones = [
  'Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5',
  'Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5',
  'Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5',
  'Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5',
  'Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6',
  'Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4',
  'Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5',
  'Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6',
  'Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5',
  'Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3',
  'Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4',
  'Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5',
  'Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0',
  'Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5',
  'Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5',
  'Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5',
  'Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|012|-2le00 4i6N0',
  'Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5',
  'Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5',
  'Africa/Windhoek|+0130 SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|01213454545454545454545454545454545454545454545454543|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4',
  'America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326',
  'America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4',
  'America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3',
  'America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4',
  'America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0',
  'America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0',
  'America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0',
  'America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0',
  'America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0',
  'America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0',
  'America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0',
  'America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0',
  'America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0',
  'America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0',
  'America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0',
  'America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0',
  'America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4',
  'America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5',
  'America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2',
  'America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3',
  'America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5',
  'America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4',
  'America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5',
  'America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3',
  'America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2',
  'America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2',
  'America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5',
  'America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4',
  'America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2',
  'America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|77e4',
  'America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4',
  'America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5',
  'America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3',
  'America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5',
  'America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5',
  'America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4',
  'America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5',
  'America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2',
  'America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|54e4',
  'America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8',
  'America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3',
  'America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2',
  'America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5',
  'America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5',
  'America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5',
  'America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3',
  'America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5',
  'America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5',
  'America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2',
  'America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5',
  'America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3',
  'America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3',
  'America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2',
  'America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2',
  'America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5',
  'America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5',
  'America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4',
  'America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4',
  'America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5',
  'America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4',
  'America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2',
  'America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2',
  'America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4',
  'America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3',
  'America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5',
  'America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6',
  'America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6',
  'America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4',
  'America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5',
  'America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5',
  'America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4',
  'America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4',
  'America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4',
  'America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2',
  'America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5',
  'America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2',
  'America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6',
  'America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2',
  'America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3',
  'America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5',
  'America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5',
  'America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5',
  'America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4',
  'America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6',
  'America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2',
  'America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2',
  'America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2',
  'America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3',
  'America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2',
  'America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4',
  'America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5',
  'America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5',
  'America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4',
  'America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4',
  'America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5',
  'America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0',
  'America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842',
  'America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2',
  'America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5',
  'America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4',
  'America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229',
  'America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4',
  'America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5',
  'America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5',
  'America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|20e6',
  'America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452',
  'America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2',
  'America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4',
  'America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3',
  'America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5',
  'America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656',
  'America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4',
  'America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5',
  'America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3',
  'America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4',
  'America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642',
  'America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3',
  'Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10',
  'Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70',
  'Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80',
  'Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1',
  'Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60',
  'Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5',
  'Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40',
  'Antarctica/Rothera|-00 -03|0 30|01|gOo0|130',
  'Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20',
  'Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40',
  'Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25',
  'Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4',
  'Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5',
  'Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5',
  'Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5',
  'Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3',
  'Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4',
  'Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4',
  'Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4',
  'Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0',
  'Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5',
  'Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4',
  'Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5',
  'Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6',
  'Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0',
  'Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5',
  'Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4',
  'Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4',
  'Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6',
  'Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4',
  'Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3',
  'Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6',
  'Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5',
  'Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6',
  'Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5',
  'Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4',
  'Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5',
  'Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4',
  'Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00',
  'Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|18e5',
  'Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|25e4',
  'Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5',
  'Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5',
  'Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3',
  'Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4',
  'Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6',
  'Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6',
  'Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4',
  'Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4',
  'Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5',
  'Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4',
  'Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6',
  'Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5',
  'Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5',
  'Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2',
  'Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5',
  'Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5',
  'Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4',
  'Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le80 1XO3u 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4',
  'Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3',
  'Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5',
  'Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6',
  'Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4',
  'Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4',
  'Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5',
  'Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5',
  'Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4',
  'Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4',
  'Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|01231|-2um8n 97XR 1lTzu 2Onc0|29e5',
  'Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4',
  'Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5',
  'Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4',
  'Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4',
  'Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6',
  'Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2',
  'Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5',
  'Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5',
  'Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5',
  'Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6',
  'Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3',
  'Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rb0 1ld0 14n0 1zd0 On0 1zd0 On0|38e6',
  'Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5',
  'Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5',
  'Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2',
  'Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4',
  'Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4',
  'Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5',
  'Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5',
  'Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4',
  'Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3',
  'Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4',
  'Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4',
  'Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3',
  'Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4',
  'Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4',
  'Atlantic/South_Georgia|-02|20|0||30',
  'Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2',
  'Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5',
  'Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5',
  'Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5',
  'Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3',
  'Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746',
  'Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4',
  'Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368',
  'Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4',
  'Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347',
  'Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10',
  'Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5',
  'Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5',
  'CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00',
  'Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2',
  'CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00',
  'Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5',
  'EST|EST|50|0|',
  'EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'Etc/GMT-0|GMT|0|0|',
  'Etc/GMT-1|+01|-10|0|',
  'Pacific/Port_Moresby|+10|-a0|0||25e4',
  'Pacific/Pohnpei|+11|-b0|0||34e3',
  'Pacific/Tarawa|+12|-c0|0||29e3',
  'Etc/GMT-13|+13|-d0|0|',
  'Etc/GMT-14|+14|-e0|0|',
  'Etc/GMT-2|+02|-20|0|',
  'Etc/GMT-3|+03|-30|0|',
  'Etc/GMT-4|+04|-40|0|',
  'Etc/GMT-5|+05|-50|0|',
  'Etc/GMT-6|+06|-60|0|',
  'Indian/Christmas|+07|-70|0||21e2',
  'Etc/GMT-8|+08|-80|0|',
  'Pacific/Palau|+09|-90|0||21e3',
  'Etc/GMT+1|-01|10|0|',
  'Etc/GMT+10|-10|a0|0|',
  'Etc/GMT+11|-11|b0|0|',
  'Etc/GMT+12|-12|c0|0|',
  'Etc/GMT+3|-03|30|0|',
  'Etc/GMT+4|-04|40|0|',
  'Etc/GMT+5|-05|50|0|',
  'Etc/GMT+6|-06|60|0|',
  'Etc/GMT+7|-07|70|0|',
  'Etc/GMT+8|-08|80|0|',
  'Etc/GMT+9|-09|90|0|',
  'Etc/UCT|UCT|0|0|',
  'Etc/UTC|UTC|0|0|',
  'Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5',
  'Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3',
  'Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0',
  'Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5',
  'Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6',
  'Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5',
  'Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5',
  'Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5',
  'Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5',
  'Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5',
  'Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5',
  'Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4',
  'Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4',
  'Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5',
  'Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3',
  'Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5',
  'Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4',
  'Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5',
  'Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4',
  'Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5',
  'Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4',
  'Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5',
  'Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4',
  'Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5',
  'Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3',
  'Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6',
  'Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6',
  'Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4',
  'Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5',
  'Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5',
  'Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810',
  'Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4',
  'Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5',
  'Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5',
  'Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4',
  'Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4',
  'Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0',
  'Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4',
  'Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5',
  'Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4',
  'Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5',
  'Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5',
  'Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4',
  'HST|HST|a0|0|',
  'Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2',
  'Indian/Cocos|+0630|-6u|0||596',
  'Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130',
  'Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3',
  'Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4',
  'Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4',
  'Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4',
  'Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3',
  'MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00',
  'MST|MST|70|0|',
  'MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600',
  'Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3',
  'Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4',
  'Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3',
  'Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1',
  'Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483',
  'Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4',
  'Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3',
  'Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125',
  'Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4',
  'Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4',
  'Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4',
  'Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2',
  'Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2',
  'Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3',
  'Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2',
  'Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2',
  'Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3',
  'Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2',
  'Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4',
  'Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3',
  'Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56',
  'Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3',
  'Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4',
  'Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3',
  'PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
  'WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00',
];
var links = [
  'Africa/Abidjan|Africa/Bamako',
  'Africa/Abidjan|Africa/Banjul',
  'Africa/Abidjan|Africa/Conakry',
  'Africa/Abidjan|Africa/Dakar',
  'Africa/Abidjan|Africa/Freetown',
  'Africa/Abidjan|Africa/Lome',
  'Africa/Abidjan|Africa/Nouakchott',
  'Africa/Abidjan|Africa/Ouagadougou',
  'Africa/Abidjan|Africa/Timbuktu',
  'Africa/Abidjan|Atlantic/St_Helena',
  'Africa/Cairo|Egypt',
  'Africa/Johannesburg|Africa/Maseru',
  'Africa/Johannesburg|Africa/Mbabane',
  'Africa/Lagos|Africa/Bangui',
  'Africa/Lagos|Africa/Brazzaville',
  'Africa/Lagos|Africa/Douala',
  'Africa/Lagos|Africa/Kinshasa',
  'Africa/Lagos|Africa/Libreville',
  'Africa/Lagos|Africa/Luanda',
  'Africa/Lagos|Africa/Malabo',
  'Africa/Lagos|Africa/Niamey',
  'Africa/Lagos|Africa/Porto-Novo',
  'Africa/Maputo|Africa/Blantyre',
  'Africa/Maputo|Africa/Bujumbura',
  'Africa/Maputo|Africa/Gaborone',
  'Africa/Maputo|Africa/Harare',
  'Africa/Maputo|Africa/Kigali',
  'Africa/Maputo|Africa/Lubumbashi',
  'Africa/Maputo|Africa/Lusaka',
  'Africa/Nairobi|Africa/Addis_Ababa',
  'Africa/Nairobi|Africa/Asmara',
  'Africa/Nairobi|Africa/Asmera',
  'Africa/Nairobi|Africa/Dar_es_Salaam',
  'Africa/Nairobi|Africa/Djibouti',
  'Africa/Nairobi|Africa/Kampala',
  'Africa/Nairobi|Africa/Mogadishu',
  'Africa/Nairobi|Indian/Antananarivo',
  'Africa/Nairobi|Indian/Comoro',
  'Africa/Nairobi|Indian/Mayotte',
  'Africa/Tripoli|Libya',
  'America/Adak|America/Atka',
  'America/Adak|US/Aleutian',
  'America/Anchorage|US/Alaska',
  'America/Argentina/Buenos_Aires|America/Buenos_Aires',
  'America/Argentina/Catamarca|America/Argentina/ComodRivadavia',
  'America/Argentina/Catamarca|America/Catamarca',
  'America/Argentina/Cordoba|America/Cordoba',
  'America/Argentina/Cordoba|America/Rosario',
  'America/Argentina/Jujuy|America/Jujuy',
  'America/Argentina/Mendoza|America/Mendoza',
  'America/Atikokan|America/Coral_Harbour',
  'America/Chicago|US/Central',
  'America/Curacao|America/Aruba',
  'America/Curacao|America/Kralendijk',
  'America/Curacao|America/Lower_Princes',
  'America/Denver|America/Shiprock',
  'America/Denver|Navajo',
  'America/Denver|US/Mountain',
  'America/Detroit|US/Michigan',
  'America/Edmonton|Canada/Mountain',
  'America/Fort_Wayne|America/Indiana/Indianapolis',
  'America/Fort_Wayne|America/Indianapolis',
  'America/Fort_Wayne|US/East-Indiana',
  'America/Halifax|Canada/Atlantic',
  'America/Havana|Cuba',
  'America/Indiana/Knox|America/Knox_IN',
  'America/Indiana/Knox|US/Indiana-Starke',
  'America/Jamaica|Jamaica',
  'America/Kentucky/Louisville|America/Louisville',
  'America/Los_Angeles|US/Pacific',
  'America/Los_Angeles|US/Pacific-New',
  'America/Manaus|Brazil/West',
  'America/Mazatlan|Mexico/BajaSur',
  'America/Mexico_City|Mexico/General',
  'America/New_York|US/Eastern',
  'America/Noronha|Brazil/DeNoronha',
  'America/Panama|America/Cayman',
  'America/Phoenix|US/Arizona',
  'America/Port_of_Spain|America/Anguilla',
  'America/Port_of_Spain|America/Antigua',
  'America/Port_of_Spain|America/Dominica',
  'America/Port_of_Spain|America/Grenada',
  'America/Port_of_Spain|America/Guadeloupe',
  'America/Port_of_Spain|America/Marigot',
  'America/Port_of_Spain|America/Montserrat',
  'America/Port_of_Spain|America/St_Barthelemy',
  'America/Port_of_Spain|America/St_Kitts',
  'America/Port_of_Spain|America/St_Lucia',
  'America/Port_of_Spain|America/St_Thomas',
  'America/Port_of_Spain|America/St_Vincent',
  'America/Port_of_Spain|America/Tortola',
  'America/Port_of_Spain|America/Virgin',
  'America/Regina|Canada/Saskatchewan',
  'America/Rio_Branco|America/Porto_Acre',
  'America/Rio_Branco|Brazil/Acre',
  'America/Santiago|Chile/Continental',
  'America/Sao_Paulo|Brazil/East',
  'America/St_Johns|Canada/Newfoundland',
  'America/Tijuana|America/Ensenada',
  'America/Tijuana|America/Santa_Isabel',
  'America/Tijuana|Mexico/BajaNorte',
  'America/Toronto|America/Montreal',
  'America/Toronto|Canada/Eastern',
  'America/Vancouver|Canada/Pacific',
  'America/Whitehorse|Canada/Yukon',
  'America/Winnipeg|Canada/Central',
  'Asia/Ashgabat|Asia/Ashkhabad',
  'Asia/Bangkok|Asia/Phnom_Penh',
  'Asia/Bangkok|Asia/Vientiane',
  'Asia/Dhaka|Asia/Dacca',
  'Asia/Dubai|Asia/Muscat',
  'Asia/Ho_Chi_Minh|Asia/Saigon',
  'Asia/Hong_Kong|Hongkong',
  'Asia/Jerusalem|Asia/Tel_Aviv',
  'Asia/Jerusalem|Israel',
  'Asia/Kathmandu|Asia/Katmandu',
  'Asia/Kolkata|Asia/Calcutta',
  'Asia/Kuala_Lumpur|Asia/Singapore',
  'Asia/Kuala_Lumpur|Singapore',
  'Asia/Macau|Asia/Macao',
  'Asia/Makassar|Asia/Ujung_Pandang',
  'Asia/Nicosia|Europe/Nicosia',
  'Asia/Qatar|Asia/Bahrain',
  'Asia/Rangoon|Asia/Yangon',
  'Asia/Riyadh|Asia/Aden',
  'Asia/Riyadh|Asia/Kuwait',
  'Asia/Seoul|ROK',
  'Asia/Shanghai|Asia/Chongqing',
  'Asia/Shanghai|Asia/Chungking',
  'Asia/Shanghai|Asia/Harbin',
  'Asia/Shanghai|PRC',
  'Asia/Taipei|ROC',
  'Asia/Tehran|Iran',
  'Asia/Thimphu|Asia/Thimbu',
  'Asia/Tokyo|Japan',
  'Asia/Ulaanbaatar|Asia/Ulan_Bator',
  'Asia/Urumqi|Asia/Kashgar',
  'Atlantic/Faroe|Atlantic/Faeroe',
  'Atlantic/Reykjavik|Iceland',
  'Atlantic/South_Georgia|Etc/GMT+2',
  'Australia/Adelaide|Australia/South',
  'Australia/Brisbane|Australia/Queensland',
  'Australia/Broken_Hill|Australia/Yancowinna',
  'Australia/Darwin|Australia/North',
  'Australia/Hobart|Australia/Tasmania',
  'Australia/Lord_Howe|Australia/LHI',
  'Australia/Melbourne|Australia/Victoria',
  'Australia/Perth|Australia/West',
  'Australia/Sydney|Australia/ACT',
  'Australia/Sydney|Australia/Canberra',
  'Australia/Sydney|Australia/NSW',
  'Etc/GMT-0|Etc/GMT',
  'Etc/GMT-0|Etc/GMT+0',
  'Etc/GMT-0|Etc/GMT0',
  'Etc/GMT-0|Etc/Greenwich',
  'Etc/GMT-0|GMT',
  'Etc/GMT-0|GMT+0',
  'Etc/GMT-0|GMT-0',
  'Etc/GMT-0|GMT0',
  'Etc/GMT-0|Greenwich',
  'Etc/UCT|UCT',
  'Etc/UTC|Etc/Universal',
  'Etc/UTC|Etc/Zulu',
  'Etc/UTC|UTC',
  'Etc/UTC|Universal',
  'Etc/UTC|Zulu',
  'Europe/Belgrade|Europe/Ljubljana',
  'Europe/Belgrade|Europe/Podgorica',
  'Europe/Belgrade|Europe/Sarajevo',
  'Europe/Belgrade|Europe/Skopje',
  'Europe/Belgrade|Europe/Zagreb',
  'Europe/Chisinau|Europe/Tiraspol',
  'Europe/Dublin|Eire',
  'Europe/Helsinki|Europe/Mariehamn',
  'Europe/Istanbul|Asia/Istanbul',
  'Europe/Istanbul|Turkey',
  'Europe/Lisbon|Portugal',
  'Europe/London|Europe/Belfast',
  'Europe/London|Europe/Guernsey',
  'Europe/London|Europe/Isle_of_Man',
  'Europe/London|Europe/Jersey',
  'Europe/London|GB',
  'Europe/London|GB-Eire',
  'Europe/Moscow|W-SU',
  'Europe/Oslo|Arctic/Longyearbyen',
  'Europe/Oslo|Atlantic/Jan_Mayen',
  'Europe/Prague|Europe/Bratislava',
  'Europe/Rome|Europe/San_Marino',
  'Europe/Rome|Europe/Vatican',
  'Europe/Warsaw|Poland',
  'Europe/Zurich|Europe/Busingen',
  'Europe/Zurich|Europe/Vaduz',
  'Indian/Christmas|Etc/GMT-7',
  'Pacific/Auckland|Antarctica/McMurdo',
  'Pacific/Auckland|Antarctica/South_Pole',
  'Pacific/Auckland|NZ',
  'Pacific/Chatham|NZ-CHAT',
  'Pacific/Easter|Chile/EasterIsland',
  'Pacific/Guam|Pacific/Saipan',
  'Pacific/Honolulu|Pacific/Johnston',
  'Pacific/Honolulu|US/Hawaii',
  'Pacific/Kwajalein|Kwajalein',
  'Pacific/Pago_Pago|Pacific/Midway',
  'Pacific/Pago_Pago|Pacific/Samoa',
  'Pacific/Pago_Pago|US/Samoa',
  'Pacific/Palau|Etc/GMT-9',
  'Pacific/Pohnpei|Etc/GMT-11',
  'Pacific/Pohnpei|Pacific/Ponape',
  'Pacific/Port_Moresby|Etc/GMT-10',
  'Pacific/Port_Moresby|Pacific/Chuuk',
  'Pacific/Port_Moresby|Pacific/Truk',
  'Pacific/Port_Moresby|Pacific/Yap',
  'Pacific/Tarawa|Etc/GMT-12',
  'Pacific/Tarawa|Pacific/Funafuti',
  'Pacific/Tarawa|Pacific/Wake',
  'Pacific/Tarawa|Pacific/Wallis',
];
var latest = {
  version: version,
  zones: zones,
  links: links,
};

var latest$1 = Object.freeze({
  version: version,
  zones: zones,
  links: links,
  default: latest,
});

var require$$1 = (latest$1 && latest) || latest$1;

var momentTimezone$2 = createCommonjsModule(function(module) {
  var moment = (module.exports = momentTimezone);
  moment.tz.load(require$$1);
});

var TimeSpanDisplay = function TimeSpanDisplay(_ref) {
  var date = _ref.date,
    withSeconds = _ref.withSeconds;
  return React.createElement(
    Fragment,
    null,
    momentTimezone$2(date).format('' + (withSeconds ? 'HH:mm:ss' : 'HH:mm')),
  );
};

TimeSpanDisplay.propTypes = {
  date: PropTypes.string.isRequired,
  withSeconds: PropTypes.bool.isRequired,
};

var TimeSpanDisplay$1 = function TimeSpanDisplay$$1(_ref) {
  var startAt = _ref.startAt,
    endAt = _ref.endAt,
    withSeconds = _ref.withSeconds;
  return React.createElement(
    Fragment,
    null,
    React.createElement(TimeSpanDisplay, {
      date: startAt,
      withSeconds: withSeconds,
    }),
    ' \u2014',
    ' ',
    React.createElement(TimeSpanDisplay, {
      date: endAt,
      withSeconds: withSeconds,
    }),
  );
};

TimeSpanDisplay$1.propTypes = {
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  withSeconds: PropTypes.bool,
};

var _global = createCommonjsModule(function(module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = (module.exports =
    typeof window != 'undefined' && window.Math == Math
      ? window
      : typeof self != 'undefined' && self.Math == Math
        ? self
        : // eslint-disable-next-line no-new-func
          Function('return this')());
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function(module) {
  var core = (module.exports = { version: '2.5.5' });
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;

var _aFunction = function(it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function(fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function(a) {
        return fn.call(that, a);
      };
    case 2:
      return function(a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function(a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function(/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function(it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function(it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function(exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function() {
  return (
    Object.defineProperty({}, 'a', {
      get: function() {
        return 7;
      },
    }).a != 7
  );
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function(it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine =
  !_descriptors &&
  !_fails(function() {
    return (
      Object.defineProperty(_domCreate('div'), 'a', {
        get: function() {
          return 7;
        },
      }).a != 7
    );
  });

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (
    S &&
    typeof (fn = it.toString) == 'function' &&
    !_isObject((val = fn.call(it)))
  )
    return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject((val = fn.call(it))))
    return val;
  if (
    !S &&
    typeof (fn = it.toString) == 'function' &&
    !_isObject((val = fn.call(it)))
  )
    return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors
  ? Object.defineProperty
  : function defineProperty(O, P, Attributes) {
      _anObject(O);
      P = _toPrimitive(P, true);
      _anObject(Attributes);
      if (_ie8DomDefine)
        try {
          return dP(O, P, Attributes);
        } catch (e) {
          /* empty */
        }
      if ('get' in Attributes || 'set' in Attributes)
        throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };

var _objectDp = {
  f: f,
};

var _propertyDesc = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value,
  };
};

var _hide = _descriptors
  ? function(object, key, value) {
      return _objectDp.f(object, key, _propertyDesc(1, value));
    }
  : function(object, key, value) {
      object[key] = value;
      return object;
    };

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key) {
  return hasOwnProperty.call(it, key);
};

var PROTOTYPE = 'prototype';

var $export = function(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL
    ? _global
    : IS_STATIC
      ? _global[name]
      : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && _has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] =
      IS_GLOBAL && typeof target[key] != 'function'
        ? source[key]
        : // bind timers to global for call from export context
          IS_BIND && own
          ? _ctx(out, _global)
          : // wrap global constructors for prevent change them in library
            IS_WRAP && target[key] == out
            ? (function(C) {
                var F = function(a, b, c) {
                  if (this instanceof C) {
                    switch (arguments.length) {
                      case 0:
                        return new C();
                      case 1:
                        return new C(a);
                      case 2:
                        return new C(a, b);
                    }
                    return new C(a, b, c);
                  }
                  return C.apply(this, arguments);
                };
                F[PROTOTYPE] = C[PROTOTYPE];
                return F;
                // make static versions for prototype methods
              })(out)
            : IS_PROTO && typeof out == 'function'
              ? _ctx(Function.call, out)
              : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key])
        _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var toString = {}.toString;

var _cof = function(it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0)
  ? Object
  : function(it) {
      return _cof(it) == 'String' ? it.split('') : Object(it);
    };

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function(it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it) {
  return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function(it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function(index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el)
      while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      }
    else
      for (; length > index; index++)
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
    return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function(key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function(key) {
  return 'Symbol('.concat(
    key === undefined ? '' : key,
    ')_',
    (++id + px).toString(36),
  );
};

var shared$1 = _shared('keys');

var _sharedKey = function(key) {
  return shared$1[key] || (shared$1[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i)
    if (_has(O, (key = names[i++]))) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
  ',',
);

// 19.1.2.14 / 15.2.3.14 Object.keys(O)

var _objectKeys =
  Object.keys ||
  function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
  f: f$1,
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
  f: f$2,
};

// 7.1.13 ToObject(argument)

var _toObject = function(it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)

var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign =
  !$assign ||
  _fails(function() {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  })
    ? function assign(target, source) {
        // eslint-disable-line no-unused-vars
        var T = _toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = _objectGops.f;
        var isEnum = _objectPie.f;
        while (aLen > index) {
          var S = _iobject(arguments[index++]);
          var keys = getSymbols
            ? _objectKeys(S).concat(getSymbols(S))
            : _objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j)
            if (isEnum.call(S, (key = keys[j++]))) T[key] = S[key];
        }
        return T;
      }
    : $assign;

// 19.1.3.1 Object.assign(target, source)

_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign = _core.Object.assign;

var assign$2 = createCommonjsModule(function(module) {
  module.exports = { default: assign, __esModule: true };
});

var _Object$assign = unwrapExports(assign$2);

var _extends$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _assign2 = _interopRequireDefault(assign$2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default =
    _assign2.default ||
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
});

var _extends$2 = unwrapExports(_extends$1);

var classCallCheck$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  exports.default = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  };
});

var _classCallCheck = unwrapExports(classCallCheck$1);

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING) {
  return function(that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 ||
      a > 0xdbff ||
      i + 1 === l ||
      (b = s.charCodeAt(i + 1)) < 0xdc00 ||
      b > 0xdfff
      ? TO_STRING
        ? s.charAt(i)
        : a
      : TO_STRING
        ? s.slice(i, i + 2)
        : ((a - 0xd800) << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var _iterators = {};

var _objectDps = _descriptors
  ? Object.defineProperties
  : function defineProperties(O, Properties) {
      _anObject(O);
      var keys = _objectKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) _objectDp.f(O, (P = keys[i++]), Properties[P]);
      return O;
    };

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function() {
  /* empty */
};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(
    lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt,
  );
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate =
  Object.create ||
  function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

var _wks = createCommonjsModule(function(module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = (module.exports = function(name) {
    return (
      store[name] ||
      (store[name] =
        (USE_SYMBOL && Symbol[name]) ||
        (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name))
    );
  });

  $exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat) {
  if (it && !_has((it = stat ? it : it.prototype), TAG))
    def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function() {
  return this;
});

var _iterCreate = function(Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, {
    next: _propertyDesc(1, next),
  });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo =
  Object.getPrototypeOf ||
  function(O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto : null;
  };

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function() {
  return this;
};

var _iterDefine = function(
  Base,
  NAME,
  Constructor,
  next,
  DEFAULT,
  IS_SET,
  FORCED,
) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native =
    proto[ITERATOR] || proto[FF_ITERATOR] || (DEFAULT && proto[DEFAULT]);
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT
    ? !DEF_VALUES
      ? $default
      : getMethod('entries')
    : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function')
        _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries,
    };
    if (FORCED)
      for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      }
    else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(
  String,
  'String',
  function(iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  },
  function() {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  },
);

var _iterStep = function(done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(
  Array,
  'Array',
  function(iterated, kind) {
    this._t = _toIobject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  },
  function() {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }
    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  },
  'values',
);

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = (
  'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList'
).split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$3 = _wks;

var _wksExt = {
  f: f$3,
};

var iterator = _wksExt.f('iterator');

var iterator$2 = createCommonjsModule(function(module) {
  module.exports = { default: iterator, __esModule: true };
});

unwrapExports(iterator$2);

var _meta = createCommonjsModule(function(module) {
  var META = _uid('meta');

  var setDesc = _objectDp.f;
  var id = 0;
  var isExtensible =
    Object.isExtensible ||
    function() {
      return true;
    };
  var FREEZE = !_fails(function() {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function(it) {
    setDesc(it, META, {
      value: {
        i: 'O' + ++id, // object ID
        w: {}, // weak collections IDs
      },
    });
  };
  var fastKey = function(it, create) {
    // return primitive with prefix
    if (!_isObject(it))
      return typeof it == 'symbol'
        ? it
        : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }
    return it[META].i;
  };
  var getWeak = function(it, create) {
    if (!_has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }
    return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function(it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
    return it;
  };
  var meta = (module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze,
  });
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty$1 = _objectDp.f;
var _wksDefine = function(name) {
  var $Symbol =
    _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol))
    defineProperty$1($Symbol, name, { value: _wksExt.f(name) });
};

// all enumerable object keys, includes symbols

var _enumKeys = function(it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i)
      if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
  }
  return result;
};

// 7.2.2 IsArray(argument)

var _isArray =
  Array.isArray ||
  function isArray(arg) {
    return _cof(arg) == 'Array';
  };

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 =
  Object.getOwnPropertyNames ||
  function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

var _objectGopn = {
  f: f$4,
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames =
  typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window)
    : [];

var getWindowNames = function(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]'
    ? getWindowNames(it)
    : gOPN(_toIobject(it));
};

var _objectGopnExt = {
  f: f$5,
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors
  ? gOPD
  : function getOwnPropertyDescriptor(O, P) {
      O = _toIobject(O);
      P = _toPrimitive(P, true);
      if (_ie8DomDefine)
        try {
          return gOPD(O, P);
        } catch (e) {
          /* empty */
        }
      if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
    };

var _objectGopd = {
  f: f$6,
};

// ECMAScript 6 symbols shim

var META = _meta.KEY;

var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter =
  !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc =
  _descriptors &&
  _fails(function() {
    return (
      _objectCreate(
        dP$1({}, 'a', {
          get: function() {
            return dP$1(this, 'a', { value: 7 }).a;
          },
        }),
      ).a != 7
    );
  })
    ? function(it, key, D) {
        var protoDesc = gOPD$1(ObjectProto$1, key);
        if (protoDesc) delete ObjectProto$1[key];
        dP$1(it, key, D);
        if (protoDesc && it !== ObjectProto$1)
          dP$1(ObjectProto$1, key, protoDesc);
      }
    : dP$1;

var wrap = function(tag) {
  var sym = (AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]));
  sym._k = tag;
  return sym;
};

var isSymbol =
  USE_NATIVE && typeof $Symbol.iterator == 'symbol'
    ? function(it) {
        return typeof it == 'symbol';
      }
    : function(it) {
        return it instanceof $Symbol;
      };

var $defineProperty$1 = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty$1(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    }
    return setSymbolDesc(it, key, D);
  }
  return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys((P = _toIobject(P)));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty$1(it, (key = keys[i++]), P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined
    ? _objectCreate(it)
    : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, (key = _toPrimitive(key, true)));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))
    return false;
  return E ||
    !_has(this, key) ||
    !_has(AllSymbols, key) ||
    (_has(this, HIDDEN) && this[HIDDEN][key])
    ? E
    : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))
    return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key]))
    D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, (key = names[i++])) && key != HIDDEN && key != META)
      result.push(key);
  }
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (
      _has(AllSymbols, (key = names[i++])) &&
      (IS_OP ? _has(ObjectProto$1, key) : true)
    )
      result.push(AllSymbols[key]);
  }
  return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol)
      throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag))
        this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter)
      setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty$1;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(
      ObjectProto$1,
      'propertyIsEnumerable',
      $propertyIsEnumerable,
      true,
    );
  }

  _wksExt.f = function(name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (
  var es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split( // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      ',',
    ),
    j = 0;
  es6Symbols.length > j;

)
  _wks(es6Symbols[j++]);

for (
  var wellKnownSymbols = _objectKeys(_wks.store), k = 0;
  wellKnownSymbols.length > k;

)
  _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  for: function(key) {
    return _has(SymbolRegistry, (key += ''))
      ? SymbolRegistry[key]
      : (SymbolRegistry[key] = $Symbol(key));
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function() {
    setter = true;
  },
  useSimple: function() {
    setter = false;
  },
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty$1,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols,
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON &&
  _export(
    _export.S +
      _export.F *
        (!USE_NATIVE ||
          _fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return (
              _stringify([S]) != '[null]' ||
              _stringify({ a: S }) != '{}' ||
              _stringify(Object(S)) != '{}'
            );
          })),
    'JSON',
    {
      stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) args.push(arguments[i++]);
        $replacer = replacer = args[1];
        if ((!_isObject(replacer) && it === undefined) || isSymbol(it)) return; // IE8 returns string on undefined
        if (!_isArray(replacer))
          replacer = function(key, value) {
            if (typeof $replacer == 'function')
              value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
        args[1] = replacer;
        return _stringify.apply($JSON, args);
      },
    },
  );

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] ||
  _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol = _core.Symbol;

var symbol$2 = createCommonjsModule(function(module) {
  module.exports = { default: symbol, __esModule: true };
});

unwrapExports(symbol$2);

var _typeof_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _iterator2 = _interopRequireDefault(iterator$2);

  var _symbol2 = _interopRequireDefault(symbol$2);

  var _typeof =
    typeof _symbol2.default === 'function' &&
    typeof _iterator2.default === 'symbol'
      ? function(obj) {
          return typeof obj;
        }
      : function(obj) {
          return obj &&
            typeof _symbol2.default === 'function' &&
            obj.constructor === _symbol2.default &&
            obj !== _symbol2.default.prototype
            ? 'symbol'
            : typeof obj;
        };

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default =
    typeof _symbol2.default === 'function' &&
    _typeof(_iterator2.default) === 'symbol'
      ? function(obj) {
          return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
        }
      : function(obj) {
          return obj &&
            typeof _symbol2.default === 'function' &&
            obj.constructor === _symbol2.default &&
            obj !== _symbol2.default.prototype
            ? 'symbol'
            : typeof obj === 'undefined'
              ? 'undefined'
              : _typeof(obj);
        };
});

var _typeof$1 = unwrapExports(_typeof_1);

var possibleConstructorReturn$1 = createCommonjsModule(function(
  module,
  exports,
) {
  exports.__esModule = true;

  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = function(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }

    return call &&
      ((typeof call === 'undefined'
        ? 'undefined'
        : (0, _typeof3.default)(call)) === 'object' ||
        typeof call === 'function')
      ? call
      : self;
  };
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn$1);

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function(O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null)
    throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set:
    Object.setPrototypeOf ||
    ('__proto__' in {} // eslint-disable-line
      ? (function(test, buggy, set) {
          try {
            set = _ctx(
              Function.call,
              _objectGopd.f(Object.prototype, '__proto__').set,
              2,
            );
            set(test, []);
            buggy = !(test instanceof Array);
          } catch (e) {
            buggy = true;
          }
          return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy) O.__proto__ = proto;
            else set(O, proto);
            return O;
          };
        })({}, false)
      : undefined),
  check: check,
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf = _core.Object.setPrototypeOf;

var setPrototypeOf$2 = createCommonjsModule(function(module) {
  module.exports = { default: setPrototypeOf, __esModule: true };
});

unwrapExports(setPrototypeOf$2);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object = _core.Object;
var create = function create(P, D) {
  return $Object.create(P, D);
};

var create$2 = createCommonjsModule(function(module) {
  module.exports = { default: create, __esModule: true };
});

unwrapExports(create$2);

var inherits$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$2);

  var _create2 = _interopRequireDefault(create$2);

  var _typeof3 = _interopRequireDefault(_typeof_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = function(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          (typeof superClass === 'undefined'
            ? 'undefined'
            : (0, _typeof3.default)(superClass)),
      );
    }

    subClass.prototype = (0, _create2.default)(
      superClass && superClass.prototype,
      {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true,
        },
      },
    );
    if (superClass)
      _setPrototypeOf2.default
        ? (0, _setPrototypeOf2.default)(subClass, superClass)
        : (subClass.__proto__ = superClass);
  };
});

var _inherits = unwrapExports(inherits$1);

var objectWithoutProperties$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  exports.default = function(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties$1);

var classnames = createCommonjsModule(function(module) {
  /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
  /* global define */

  (function() {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if ('object' !== 'undefined' && module.exports) {
      module.exports = classNames;
    } else if (
      typeof undefined === 'function' &&
      typeof undefined.amd === 'object' &&
      undefined.amd
    ) {
      // register as 'classnames', consistent with npm package name
      undefined('classnames', [], function() {
        return classNames;
      });
    } else {
      window.classNames = classNames;
    }
  })();
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
          'for the full error message and additional helpful warnings.',
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() {
          return args[argIndex++];
        }),
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant;

var utils = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.version = undefined;
  exports.uncontrolledPropTypes = uncontrolledPropTypes;
  exports.getType = getType;
  exports.getValue = getValue;
  exports.getLinkName = getLinkName;
  exports.defaultKey = defaultKey;
  exports.chain = chain;
  exports.transform = transform;
  exports.each = each;
  exports.has = has;
  exports.isReactComponent = isReactComponent;

  var _react2 = _interopRequireDefault(React);

  var _invariant2 = _interopRequireDefault(invariant_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function readOnlyPropType(handler, name) {
    return function(props, propName) {
      if (props[propName] !== undefined) {
        if (!props[handler]) {
          return new Error(
            'You have provided a `' +
              propName +
              '` prop to ' +
              '`' +
              name +
              '` without an `' +
              handler +
              '` handler. This will render a read-only field. ' +
              'If the field should be mutable use `' +
              defaultKey(propName) +
              '`. Otherwise, set `' +
              handler +
              '`',
          );
        }
      }
    };
  }

  function uncontrolledPropTypes(controlledValues, basePropTypes, displayName) {
    var propTypes = {};

    if (process.env.NODE_ENV !== 'production' && basePropTypes) {
      transform(
        controlledValues,
        function(obj, handler, prop) {
          (0, _invariant2.default)(
            typeof handler === 'string' && handler.trim().length,
            'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable',
            displayName,
            prop,
          );

          obj[prop] = readOnlyPropType(handler, displayName);
        },
        propTypes,
      );
    }

    return propTypes;
  }

  var version = (exports.version = _react2.default.version
    .split('.')
    .map(parseFloat));

  function getType(component) {
    if (version[0] >= 15 || (version[0] === 0 && version[1] >= 13))
      return component;

    return component.type;
  }

  function getValue(props, name) {
    var linkPropName = getLinkName(name);

    if (linkPropName && !isProp(props, name) && isProp(props, linkPropName))
      return props[linkPropName].value;

    return props[name];
  }

  function isProp(props, prop) {
    return props[prop] !== undefined;
  }

  function getLinkName(name) {
    return name === 'value'
      ? 'valueLink'
      : name === 'checked'
        ? 'checkedLink'
        : null;
  }

  function defaultKey(key) {
    return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
  }

  function chain(thisArg, a, b) {
    return function chainedFunction() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      a && a.call.apply(a, [thisArg].concat(args));
      b && b.call.apply(b, [thisArg].concat(args));
    };
  }

  function transform(obj, cb, seed) {
    each(obj, cb.bind(null, (seed = seed || (Array.isArray(obj) ? [] : {}))));
    return seed;
  }

  function each(obj, cb, thisArg) {
    if (Array.isArray(obj)) return obj.forEach(cb, thisArg);

    for (var key in obj) {
      if (has(obj, key)) cb.call(thisArg, obj[key], key, obj);
    }
  }

  function has(o, k) {
    return o ? Object.prototype.hasOwnProperty.call(o, k) : false;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */
  function isReactComponent(component) {
    return !!(
      component &&
      component.prototype &&
      component.prototype.isReactComponent
    );
  }
});

unwrapExports(utils);
var utils_1 = utils.version;
var utils_2 = utils.uncontrolledPropTypes;
var utils_3 = utils.getType;
var utils_4 = utils.getValue;
var utils_5 = utils.getLinkName;
var utils_6 = utils.defaultKey;
var utils_7 = utils.chain;
var utils_8 = utils.transform;
var utils_9 = utils.each;
var utils_10 = utils.has;
var utils_11 = utils.isReactComponent;

var createUncontrollable_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

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

  exports.default = createUncontrollable;

  var _react2 = _interopRequireDefault(React);

  var _invariant2 = _interopRequireDefault(invariant_1);

  var utils$$1 = _interopRequireWildcard(utils);

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

  function createUncontrollable(mixin, set) {
    return uncontrollable;

    function uncontrollable(Component, controlledValues) {
      var _class, _temp;

      var methods =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var displayName = Component.displayName || Component.name || 'Component',
        basePropTypes = utils$$1.getType(Component).propTypes,
        isCompositeComponent = utils$$1.isReactComponent(Component),
        controlledProps = Object.keys(controlledValues),
        propTypes;

      var OMIT_PROPS = ['valueLink', 'checkedLink'].concat(
        controlledProps.map(utils$$1.defaultKey),
      );

      propTypes = utils$$1.uncontrolledPropTypes(
        controlledValues,
        basePropTypes,
        displayName,
      );

      (0,
      _invariant2.default)(isCompositeComponent || !methods.length, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', '));

      methods = utils$$1.transform(
        methods,
        function(obj, method) {
          obj[method] = function() {
            var _refs$inner;

            return (_refs$inner = this.refs.inner)[method].apply(
              _refs$inner,
              arguments,
            );
          };
        },
        {},
      );

      var component = ((_temp = _class = (function(_React$Component) {
        _inherits(component, _React$Component);

        function component() {
          _classCallCheck(this, component);

          return _possibleConstructorReturn(
            this,
            _React$Component.apply(this, arguments),
          );
        }

        component.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (
            !mixin.shouldComponentUpdate ||
            mixin.shouldComponentUpdate.apply(this, args)
          );
        };

        component.prototype.componentWillMount = function componentWillMount() {
          var _this2 = this;

          var props = this.props;

          this._values = {};

          controlledProps.forEach(function(key) {
            _this2._values[key] = props[utils$$1.defaultKey(key)];
          });
        };

        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */

        component.prototype.componentWillReceiveProps = function componentWillReceiveProps(
          nextProps,
        ) {
          var _this3 = this;

          var props = this.props;

          if (mixin.componentWillReceiveProps) {
            mixin.componentWillReceiveProps.call(this, nextProps);
          }

          controlledProps.forEach(function(key) {
            if (
              utils$$1.getValue(nextProps, key) === undefined &&
              utils$$1.getValue(props, key) !== undefined
            ) {
              _this3._values[key] = nextProps[utils$$1.defaultKey(key)];
            }
          });
        };

        component.prototype.componentWillUnmount = function componentWillUnmount() {
          this.unmounted = true;
        };

        component.prototype.getControlledInstance = function getControlledInstance() {
          return this.refs.inner;
        };

        component.prototype.render = function render() {
          var _this4 = this;

          var newProps = {},
            props = omitProps(this.props);

          utils$$1.each(controlledValues, function(handle, propName) {
            var linkPropName = utils$$1.getLinkName(propName),
              prop = _this4.props[propName];

            if (
              linkPropName &&
              !isProp(_this4.props, propName) &&
              isProp(_this4.props, linkPropName)
            ) {
              prop = _this4.props[linkPropName].value;
            }

            newProps[propName] =
              prop !== undefined ? prop : _this4._values[propName];

            newProps[handle] = setAndNotify.bind(_this4, propName);
          });

          newProps = _extends({}, props, newProps, {
            ref: isCompositeComponent ? 'inner' : null,
          });

          return _react2.default.createElement(Component, newProps);
        };

        return component;
      })(_react2.default.Component)),
      (_class.displayName = 'Uncontrolled(' + displayName + ')'),
      (_class.propTypes = propTypes),
      _temp);

      _extends(component.prototype, methods);

      component.ControlledComponent = Component;

      /**
       * useful when wrapping a Component and you want to control
       * everything
       */
      component.deferControlTo = function(newComponent) {
        var additions =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        var nextMethods = arguments[2];

        return uncontrollable(
          newComponent,
          _extends({}, controlledValues, additions),
          nextMethods,
        );
      };

      return component;

      function setAndNotify(propName, value) {
        var linkName = utils$$1.getLinkName(propName),
          handler = this.props[controlledValues[propName]];

        if (linkName && isProp(this.props, linkName) && !handler) {
          handler = this.props[linkName].requestChange;
        }

        for (
          var _len2 = arguments.length,
            args = Array(_len2 > 2 ? _len2 - 2 : 0),
            _key2 = 2;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2 - 2] = arguments[_key2];
        }

        set(this, propName, handler, value, args);
      }

      function isProp(props, prop) {
        return props[prop] !== undefined;
      }

      function omitProps(props) {
        var result = {};

        utils$$1.each(props, function(value, key) {
          if (OMIT_PROPS.indexOf(key) === -1) result[key] = value;
        });

        return result;
      }
    }
  }
  module.exports = exports['default'];
});

unwrapExports(createUncontrollable_1);

var uncontrollable = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _createUncontrollable2 = _interopRequireDefault(createUncontrollable_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var mixin = {
    shouldComponentUpdate: function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    },
  };

  function set(component, propName, handler, value, args) {
    if (handler) {
      component._notifying = true;
      handler.call.apply(handler, [component, value].concat(args));
      component._notifying = false;
    }

    component._values[propName] = value;

    if (!component.unmounted) component.forceUpdate();
  }

  exports.default = (0, _createUncontrollable2.default)(mixin, set);
  module.exports = exports['default'];
});

var uncontrollable$1 = unwrapExports(uncontrollable);

var isEnum$1 = _objectPie.f;
var _objectToArray = function(isEntries) {
  return function(it) {
    var O = _toIobject(it);
    var keys = _objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i)
      if (isEnum$1.call(O, (key = keys[i++]))) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    return result;
  };
};

// https://github.com/tc39/proposal-object-values-entries

var $entries = _objectToArray(true);

_export(_export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  },
});

var entries = _core.Object.entries;

var entries$2 = createCommonjsModule(function(module) {
  module.exports = { default: entries, __esModule: true };
});

var _Object$entries = unwrapExports(entries$2);

var Size = {
  LARGE: 'large',
  SMALL: 'small',
  XSMALL: 'xsmall',
};

var SIZE_MAP = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
  xsmall: 'xs',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs',
};

var DEVICE_SIZES = ['lg', 'md', 'sm', 'xs'];

var State = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  INFO: 'info',
};

var Style = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  LINK: 'link',
  INVERSE: 'inverse',
};

// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.

function curry(fn) {
  return function() {
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];
    if (typeof last === 'function') {
      return fn.apply(undefined, args);
    }
    return function(Component) {
      return fn.apply(undefined, args.concat([Component]));
    };
  };
}

function prefix(props, variant) {
  var bsClass = (props.bsClass || '').trim();
  !(bsClass != null)
    ? process.env.NODE_ENV !== 'production'
      ? invariant_1(false, 'A `bsClass` prop is required for this component')
      : invariant_1(false)
    : void 0;
  return bsClass + (variant ? '-' + variant : '');
}

var bsClass = curry(function(defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});

  propTypes.bsClass = PropTypes.string;
  defaultProps.bsClass = defaultClass;

  return Component;
});

var bsStyles = curry(function(styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};

  styles.forEach(function(style) {
    if (existing.indexOf(style) === -1) {
      existing.push(style);
    }
  });

  var propType = PropTypes.oneOf(existing);

  // expose the values on the propType function for documentation
  Component.STYLES = existing;
  propType._values = existing;

  Component.propTypes = _extends$2({}, propTypes, {
    bsStyle: propType,
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});

var bsSizes = curry(function(sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};

  sizes.forEach(function(size) {
    if (existing.indexOf(size) === -1) {
      existing.push(size);
    }
  });

  var values = [];
  existing.forEach(function(size) {
    var mappedSize = SIZE_MAP[size];
    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = PropTypes.oneOf(values);
  propType._values = values;

  // expose the values on the propType function for documentation
  Component.SIZES = existing;

  Component.propTypes = _extends$2({}, propTypes, {
    bsSize: propType,
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }
    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});

function getClassSet(props) {
  var _classes;

  var classes = ((_classes = {}), (_classes[prefix(props)] = true), _classes);

  if (props.bsSize) {
    var bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole,
  };
}

function isBsProp(propName) {
  return (
    propName === 'bsClass' ||
    propName === 'bsSize' ||
    propName === 'bsStyle' ||
    propName === 'bsRole'
  );
}

function splitBsProps(props) {
  var elementProps = {};
  _Object$entries(props).forEach(function(_ref) {
    var propName = _ref[0],
      propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

function splitBsPropsAndOmit(props, omittedPropNames) {
  var isOmittedProp = {};
  omittedPropNames.forEach(function(propName) {
    isOmittedProp[propName] = true;
  });

  var elementProps = {};
  _Object$entries(props).forEach(function(_ref2) {
    var propName = _ref2[0],
      propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}

/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */

// TODO: This module should be ElementChildren, and should use named exports.

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */
function map(children, func, context) {
  var index = 0;

  return React.Children.map(children, function(child) {
    if (!React.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}

/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */
function forEach(children, func, context) {
  var index = 0;

  React.Children.forEach(children, function(child) {
    if (!React.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}

/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */
function count(children) {
  var result = 0;

  React.Children.forEach(children, function(child) {
    if (!React.isValidElement(child)) {
      return;
    }

    ++result;
  });

  return result;
}

/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */
function filter(children, func, context) {
  var index = 0;
  var result = [];

  React.Children.forEach(children, function(child) {
    if (!React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });

  return result;
}

function find(children, func, context) {
  var index = 0;
  var result = void 0;

  React.Children.forEach(children, function(child) {
    if (result) {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });

  return result;
}

function every(children, func, context) {
  var index = 0;
  var result = true;

  React.Children.forEach(children, function(child) {
    if (!result) {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });

  return result;
}

function some(children, func, context) {
  var index = 0;
  var result = false;

  React.Children.forEach(children, function(child) {
    if (result) {
      return;
    }
    if (!React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });

  return result;
}

function toArray$1(children) {
  var result = [];

  React.Children.forEach(children, function(child) {
    if (!React.isValidElement(child)) {
      return;
    }

    result.push(child);
  });

  return result;
}

var ValidChildren = {
  map: map,
  forEach: forEach,
  count: count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray$1,
};

var createChainableTypeChecker_1 = createCommonjsModule(function(
  module,
  exports,
) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createChainableTypeChecker;
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  // Mostly taken from ReactPropTypes.

  function createChainableTypeChecker(validate) {
    function checkType(
      isRequired,
      props,
      propName,
      componentName,
      location,
      propFullName,
    ) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          return new Error(
            'Required ' +
              location +
              ' `' +
              propFullNameSafe +
              '` was not specified ' +
              ('in `' + componentNameSafe + '`.'),
          );
        }

        return null;
      }

      for (
        var _len = arguments.length,
          args = Array(_len > 6 ? _len - 6 : 0),
          _key = 6;
        _key < _len;
        _key++
      ) {
        args[_key - 6] = arguments[_key];
      }

      return validate.apply(
        undefined,
        [props, propName, componentNameSafe, location, propFullNameSafe].concat(
          args,
        ),
      );
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }
  module.exports = exports['default'];
});

var createChainableTypeChecker = unwrapExports(createChainableTypeChecker_1);

var idPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

function generatedId(name) {
  return function(props) {
    for (
      var _len = arguments.length,
        args = Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }

    var error = null;

    if (!props.generateChildId) {
      error = idPropType.apply(undefined, [props].concat(args));

      if (!error && !props.id) {
        error = new Error(
          'In order to properly initialize the ' +
            name +
            ' in a way that is accessible to assistive technologies ' +
            ('(such as screen readers) an `id` or a `generateChildId` prop to ' +
              name +
              ' is required'),
        );
      }
    }
    return error;
  };
}

function requiredRoles() {
  for (
    var _len2 = arguments.length, roles = Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    roles[_key2] = arguments[_key2];
  }

  return createChainableTypeChecker(function(props, propName, component) {
    var missing = void 0;

    roles.every(function(role) {
      if (
        !ValidChildren.some(props.children, function(child) {
          return child.props.bsRole === role;
        })
      ) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error(
        '(children) ' +
          component +
          ' - Missing a required child with bsRole: ' +
          (missing +
            '. ' +
            component +
            ' must have at least one child of each of ') +
          ('the following bsRoles: ' + roles.join(', ')),
      );
    }

    return null;
  });
}

function exclusiveRoles() {
  for (
    var _len3 = arguments.length, roles = Array(_len3), _key3 = 0;
    _key3 < _len3;
    _key3++
  ) {
    roles[_key3] = arguments[_key3];
  }

  return createChainableTypeChecker(function(props, propName, component) {
    var duplicate = void 0;

    roles.every(function(role) {
      var childrenWithRole = ValidChildren.filter(props.children, function(
        child,
      ) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error(
        '(children) ' +
          component +
          ' - Duplicate children detected of bsRole: ' +
          (duplicate + '. Only one child each allowed with the following ') +
          ('bsRoles: ' + roles.join(', ')),
      );
    }

    return null;
  });
}

var propTypes = {
  accordion: PropTypes.bool,
  /**
   * When `accordion` is enabled, `activeKey` controls the which child `Panel` is expanded. `activeKey` should
   * match a child Panel `eventKey` prop exactly.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.any,

  /**
   * A callback fired when a child Panel collapse state changes. It's called with the next expanded `activeKey`
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * An HTML role attribute
   */
  role: PropTypes.string,

  /**
   * A function that takes an eventKey and type and returns a
   * unique id for each Panel heading and Panel Collapse. The function _must_ be a pure function,
   * meaning it should always return the _same_ id for the same set of inputs. The default
   * value requires that an `id` to be set for the PanelGroup.
   *
   * The `type` argument will either be `"body"` or `"heading"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: PropTypes.func,

  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: generatedId('PanelGroup'),
};

var defaultProps = {
  accordion: false,
};

var childContextTypes = {
  $bs_panelGroup: PropTypes.shape({
    getId: PropTypes.func,
    headerRole: PropTypes.string,
    panelRole: PropTypes.string,
    activeKey: PropTypes.any,
    onToggle: PropTypes.func,
  }),
};

var PanelGroup = (function(_React$Component) {
  _inherits(PanelGroup, _React$Component);

  function PanelGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, PanelGroup);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        _React$Component.call.apply(_React$Component, [this].concat(args)),
      )),
      _this)),
      (_this.handleSelect = function(key, expanded, e) {
        if (expanded) {
          _this.props.onSelect(key, e);
        } else if (_this.props.activeKey === key) {
          _this.props.onSelect(null, e);
        }
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  PanelGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
      activeKey = _props.activeKey,
      accordion = _props.accordion,
      generateChildId = _props.generateChildId,
      id = _props.id;

    var getId = null;

    if (accordion) {
      getId =
        generateChildId ||
        function(key, type) {
          return id ? id + '-' + type + '-' + key : null;
        };
    }

    return {
      $bs_panelGroup: _extends$2(
        {
          getId: getId,
          headerRole: 'tab',
          panelRole: 'tabpanel',
        },
        accordion && {
          activeKey: activeKey,
          onToggle: this.handleSelect,
        },
      ),
    };
  };

  PanelGroup.prototype.render = function render() {
    var _props2 = this.props,
      accordion = _props2.accordion,
      className = _props2.className,
      children = _props2.children,
      props = _objectWithoutProperties(_props2, [
        'accordion',
        'className',
        'children',
      ]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, [
        'onSelect',
        'activeKey',
      ]),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    if (accordion) {
      elementProps.role = elementProps.role || 'tablist';
    }

    var classes = getClassSet(bsProps);

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      ValidChildren.map(children, function(child) {
        return cloneElement(child, {
          bsStyle: child.props.bsStyle || bsProps.bsStyle,
        });
      }),
    );
  };

  return PanelGroup;
})(React.Component);

PanelGroup.propTypes = propTypes;
PanelGroup.defaultProps = defaultProps;
PanelGroup.childContextTypes = childContextTypes;

var PanelGroup$1 = uncontrollable$1(bsClass('panel-group', PanelGroup), {
  activeKey: 'onSelect',
});

var Accordion = (function(_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Accordion.prototype.render = function render() {
    return React.createElement(
      PanelGroup$1,
      _extends$2({}, this.props, { accordion: true }),
      this.props.children,
    );
  };

  return Accordion;
})(React.Component);

// https://github.com/tc39/proposal-object-values-entries

var $values = _objectToArray(false);

_export(_export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  },
});

var values = _core.Object.values;

var values$2 = createCommonjsModule(function(module) {
  module.exports = { default: values, __esModule: true };
});

var _Object$values = unwrapExports(values$2);

var propTypes$1 = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

var defaultProps$1 = {
  label: 'Close',
};

var CloseButton = (function(_React$Component) {
  _inherits(CloseButton, _React$Component);

  function CloseButton() {
    _classCallCheck(this, CloseButton);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  CloseButton.prototype.render = function render() {
    var _props = this.props,
      label = _props.label,
      onClick = _props.onClick;

    return React.createElement(
      'button',
      { type: 'button', className: 'close', onClick: onClick },
      React.createElement('span', { 'aria-hidden': 'true' }, '\xD7'),
      React.createElement('span', { className: 'sr-only' }, label),
    );
  };

  return CloseButton;
})(React.Component);

CloseButton.propTypes = propTypes$1;
CloseButton.defaultProps = defaultProps$1;

var propTypes$2 = {
  onDismiss: PropTypes.func,
  closeLabel: PropTypes.string,
};

var defaultProps$2 = {
  closeLabel: 'Close alert',
};

var Alert = (function(_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Alert.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      onDismiss = _props.onDismiss,
      closeLabel = _props.closeLabel,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'onDismiss',
        'closeLabel',
        'className',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var dismissable = !!onDismiss;
    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps, 'dismissable')] = dismissable),
      _extends2),
    );

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        role: 'alert',
        className: classnames(className, classes),
      }),
      dismissable &&
        React.createElement(CloseButton, {
          onClick: onDismiss,
          label: closeLabel,
        }),
      children,
    );
  };

  return Alert;
})(React.Component);

Alert.propTypes = propTypes$2;
Alert.defaultProps = defaultProps$2;

bsStyles(_Object$values(State), State.INFO, bsClass('alert', Alert));

// TODO: `pullRight` doesn't belong here. There's no special handling here.

var propTypes$3 = {
  pullRight: PropTypes.bool,
};

var defaultProps$3 = {
  pullRight: false,
};

var Badge = (function(_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Badge.prototype.hasContent = function hasContent(children) {
    var result = false;

    React.Children.forEach(children, function(child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  Badge.prototype.render = function render() {
    var _props = this.props,
      pullRight = _props.pullRight,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'pullRight',
        'className',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2({}, getClassSet(bsProps), {
      'pull-right': pullRight,

      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children),
    });

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      children,
    );
  };

  return Badge;
})(React.Component);

Badge.propTypes = propTypes$3;
Badge.defaultProps = defaultProps$3;

bsClass('badge', Badge);

var reactIs_production_min = createCommonjsModule(function(module, exports) {
  /** @license React v16.3.2
   * react-is.production.min.js
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  Object.defineProperty(exports, '__esModule', { value: !0 });
  var b = 'function' === typeof Symbol && Symbol['for'],
    c = b ? Symbol['for']('react.element') : 60103,
    d = b ? Symbol['for']('react.portal') : 60106,
    e = b ? Symbol['for']('react.fragment') : 60107,
    f = b ? Symbol['for']('react.strict_mode') : 60108,
    g = b ? Symbol['for']('react.provider') : 60109,
    h = b ? Symbol['for']('react.context') : 60110,
    k = b ? Symbol['for']('react.async_mode') : 60111,
    l = b ? Symbol['for']('react.forward_ref') : 60112;
  function m(a) {
    if ('object' === typeof a && null !== a) {
      var n = a.$$typeof;
      switch (n) {
        case c:
          switch (((a = a.type), a)) {
            case k:
            case e:
            case f:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case h:
                case l:
                case g:
                  return a;
                default:
                  return n;
              }
          }
        case d:
          return n;
      }
    }
  }
  exports.typeOf = m;
  exports.AsyncMode = k;
  exports.ContextConsumer = h;
  exports.ContextProvider = g;
  exports.Element = c;
  exports.ForwardRef = l;
  exports.Fragment = e;
  exports.Portal = d;
  exports.StrictMode = f;
  exports.isValidElementType = function(a) {
    return (
      'string' === typeof a ||
      'function' === typeof a ||
      a === e ||
      a === k ||
      a === f ||
      ('object' === typeof a &&
        null !== a &&
        (a.$$typeof === g || a.$$typeof === h || a.$$typeof === l))
    );
  };
  exports.isAsyncMode = function(a) {
    return m(a) === k;
  };
  exports.isContextConsumer = function(a) {
    return m(a) === h;
  };
  exports.isContextProvider = function(a) {
    return m(a) === g;
  };
  exports.isElement = function(a) {
    return 'object' === typeof a && null !== a && a.$$typeof === c;
  };
  exports.isForwardRef = function(a) {
    return m(a) === l;
  };
  exports.isFragment = function(a) {
    return m(a) === e;
  };
  exports.isPortal = function(a) {
    return m(a) === d;
  };
  exports.isStrictMode = function(a) {
    return m(a) === f;
  };
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_4 = reactIs_production_min.ContextProvider;
var reactIs_production_min_5 = reactIs_production_min.Element;
var reactIs_production_min_6 = reactIs_production_min.ForwardRef;
var reactIs_production_min_7 = reactIs_production_min.Fragment;
var reactIs_production_min_8 = reactIs_production_min.Portal;
var reactIs_production_min_9 = reactIs_production_min.StrictMode;
var reactIs_production_min_10 = reactIs_production_min.isValidElementType;
var reactIs_production_min_11 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_12 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_13 = reactIs_production_min.isContextProvider;
var reactIs_production_min_14 = reactIs_production_min.isElement;
var reactIs_production_min_15 = reactIs_production_min.isForwardRef;
var reactIs_production_min_16 = reactIs_production_min.isFragment;
var reactIs_production_min_17 = reactIs_production_min.isPortal;
var reactIs_production_min_18 = reactIs_production_min.isStrictMode;

var reactIs_development = createCommonjsModule(function(module, exports) {
  /** @license React v16.3.2
   * react-is.development.js
   *
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== 'production') {
    (function() {
      Object.defineProperty(exports, '__esModule', { value: true });

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

      var REACT_ELEMENT_TYPE = hasSymbol
        ? Symbol['for']('react.element')
        : 0xeac7;

      var REACT_PORTAL_TYPE = hasSymbol
        ? Symbol['for']('react.portal')
        : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol['for']('react.fragment')
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol['for']('react.strict_mode')
        : 0xeacc;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol['for']('react.provider')
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol
        ? Symbol['for']('react.context')
        : 0xeace;
      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol['for']('react.async_mode')
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol['for']('react.forward_ref')
        : 0xead0;

      function isValidElementType(type) {
        return (
          typeof type === 'string' ||
          typeof type === 'function' ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_ASYNC_MODE_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          (typeof type === 'object' &&
            type !== null &&
            (type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_STRICT_MODE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      }

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment$$1 = REACT_FRAGMENT_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;

      function isAsyncMode(object) {
        return typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment$$1;
      exports.Portal = Portal;
      exports.StrictMode = StrictMode;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isPortal = isPortal;
      exports.isStrictMode = isStrictMode;
    })();
  }
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Portal;
var reactIs_development_9 = reactIs_development.StrictMode;
var reactIs_development_10 = reactIs_development.isValidElementType;
var reactIs_development_11 = reactIs_development.isAsyncMode;
var reactIs_development_12 = reactIs_development.isContextConsumer;
var reactIs_development_13 = reactIs_development.isContextProvider;
var reactIs_development_14 = reactIs_development.isElement;
var reactIs_development_15 = reactIs_development.isForwardRef;
var reactIs_development_16 = reactIs_development.isFragment;
var reactIs_development_17 = reactIs_development.isPortal;
var reactIs_development_18 = reactIs_development.isStrictMode;

var reactIs = createCommonjsModule(function(module) {
  if (process.env.NODE_ENV === 'production') {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

var elementType_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _react2 = _interopRequireDefault(React);

  var _createChainableTypeChecker2 = _interopRequireDefault(
    createChainableTypeChecker_1,
  );

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function elementType(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];

    if (_react2.default.isValidElement(propValue)) {
      return new Error(
        'Invalid ' +
          location +
          ' `' +
          propFullName +
          '` of type ReactElement ' +
          ('supplied to `' +
            componentName +
            '`,expected an element type (a string ') +
          ', component class, or function component).',
      );
    }

    if (!(0, reactIs.isValidElementType)(propValue)) {
      return new Error(
        'Invalid ' +
          location +
          ' `' +
          propFullName +
          '` of value `' +
          propValue +
          '` ' +
          ('supplied to `' +
            componentName +
            '`, expected an element type (a string ') +
          ', component class, or function component).',
      );
    }

    return null;
  }

  exports.default = (0, _createChainableTypeChecker2.default)(elementType);
  module.exports = exports['default'];
});

var elementType = unwrapExports(elementType_1);

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (
    var _len = arguments.length, funcs = Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    funcs[_key] = arguments[_key];
  }

  return funcs
    .filter(function(f) {
      return f != null;
    })
    .reduce(function(acc, f) {
      if (typeof f !== 'function') {
        throw new Error(
          'Invalid Argument Type, must only provide functions, undefined, or null.',
        );
      }

      if (acc === null) {
        return f;
      }

      return function chainedFunction() {
        for (
          var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2];
        }

        acc.apply(this, args);
        f.apply(this, args);
      };
    }, null);
}

var propTypes$4 = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  role: PropTypes.string,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * this is sort of silly but needed for Button
   */
  componentClass: elementType,
};

var defaultProps$4 = {
  componentClass: 'a',
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, MenuItems, etc.
 */

var SafeAnchor = (function(_React$Component) {
  _inherits(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    _classCallCheck(this, SafeAnchor);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  SafeAnchor.prototype.handleClick = function handleClick(event) {
    var _props = this.props,
      disabled = _props.disabled,
      href = _props.href,
      onClick = _props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  SafeAnchor.prototype.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  SafeAnchor.prototype.render = function render() {
    var _props2 = this.props,
      Component = _props2.componentClass,
      disabled = _props2.disabled,
      onKeyDown = _props2.onKeyDown,
      props = _objectWithoutProperties(_props2, [
        'componentClass',
        'disabled',
        'onKeyDown',
      ]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = _extends$2({ pointerEvents: 'none' }, props.style);
    }

    return React.createElement(
      Component,
      _extends$2({}, props, {
        onClick: this.handleClick,
        onKeyDown: createChainedFunction(this.handleKeyDown, onKeyDown),
      }),
    );
  };

  return SafeAnchor;
})(React.Component);

SafeAnchor.propTypes = propTypes$4;
SafeAnchor.defaultProps = defaultProps$4;

var propTypes$5 = {
  /**
   * If set to true, renders `span` instead of `a`
   */
  active: PropTypes.bool,
  /**
   * `href` attribute for the inner `a` element
   */
  href: PropTypes.string,
  /**
   * `title` attribute for the inner `a` element
   */
  title: PropTypes.node,
  /**
   * `target` attribute for the inner `a` element
   */
  target: PropTypes.string,
};

var defaultProps$5 = {
  active: false,
};

var BreadcrumbItem = (function(_React$Component) {
  _inherits(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  BreadcrumbItem.prototype.render = function render() {
    var _props = this.props,
      active = _props.active,
      href = _props.href,
      title = _props.title,
      target = _props.target,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'active',
        'href',
        'title',
        'target',
        'className',
      ]);

    // Don't try to render these props on non-active <span>.

    var linkProps = { href: href, title: title, target: target };

    return React.createElement(
      'li',
      { className: classnames(className, { active: active }) },
      active
        ? React.createElement('span', props)
        : React.createElement(SafeAnchor, _extends$2({}, props, linkProps)),
    );
  };

  return BreadcrumbItem;
})(React.Component);

BreadcrumbItem.propTypes = propTypes$5;
BreadcrumbItem.defaultProps = defaultProps$5;

var Breadcrumb = (function(_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Breadcrumb.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'ol',
      _extends$2({}, elementProps, {
        role: 'navigation',
        'aria-label': 'breadcrumbs',
        className: classnames(className, classes),
      }),
    );
  };

  return Breadcrumb;
})(React.Component);

Breadcrumb.Item = BreadcrumbItem;

bsClass('breadcrumb', Breadcrumb);

var propTypes$6 = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  componentClass: elementType,
  href: PropTypes.string,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

var defaultProps$6 = {
  active: false,
  block: false,
  disabled: false,
};

var Button = (function(_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Button.prototype.renderAnchor = function renderAnchor(
    elementProps,
    className,
  ) {
    return React.createElement(
      SafeAnchor,
      _extends$2({}, elementProps, {
        className: classnames(className, elementProps.disabled && 'disabled'),
      }),
    );
  };

  Button.prototype.renderButton = function renderButton(_ref, className) {
    var componentClass = _ref.componentClass,
      elementProps = _objectWithoutProperties(_ref, ['componentClass']);

    var Component = componentClass || 'button';

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        type: elementProps.type || 'button',
        className: className,
      }),
    );
  };

  Button.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      active = _props.active,
      block = _props.block,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'active',
        'block',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {
        active: active,
      }),
      (_extends2[prefix(bsProps, 'block')] = block),
      _extends2),
    );
    var fullClassName = classnames(className, classes);

    if (elementProps.href) {
      return this.renderAnchor(elementProps, fullClassName);
    }

    return this.renderButton(elementProps, fullClassName);
  };

  return Button;
})(React.Component);

Button.propTypes = propTypes$6;
Button.defaultProps = defaultProps$6;

var RBButton = bsClass(
  'btn',
  bsSizes(
    [Size.LARGE, Size.SMALL, Size.XSMALL],
    bsStyles(
      [].concat(_Object$values(State), [
        Style.DEFAULT,
        Style.PRIMARY,
        Style.LINK,
      ]),
      Style.DEFAULT,
      Button,
    ),
  ),
);

var all_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = all;

  var _createChainableTypeChecker2 = _interopRequireDefault(
    createChainableTypeChecker_1,
  );

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function all() {
    for (
      var _len = arguments.length, validators = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      validators[_key] = arguments[_key];
    }

    function allPropTypes() {
      for (
        var _len2 = arguments.length, args = Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }

      var error = null;

      validators.forEach(function(validator) {
        if (error != null) {
          return;
        }

        var result = validator.apply(undefined, args);
        if (result != null) {
          error = result;
        }
      });

      return error;
    }

    return (0, _createChainableTypeChecker2.default)(allPropTypes);
  }
  module.exports = exports['default'];
});

var all = unwrapExports(all_1);

var propTypes$7 = {
  vertical: PropTypes.bool,
  justified: PropTypes.bool,

  /**
   * Display block buttons; only useful when used with the "vertical" prop.
   * @type {bool}
   */
  block: all(PropTypes.bool, function(_ref) {
    var block = _ref.block,
      vertical = _ref.vertical;
    return block && !vertical
      ? new Error('`block` requires `vertical` to be set to have any effect')
      : null;
  }),
};

var defaultProps$7 = {
  block: false,
  justified: false,
  vertical: false,
};

var ButtonGroup = (function(_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ButtonGroup.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      block = _props.block,
      justified = _props.justified,
      vertical = _props.vertical,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'block',
        'justified',
        'vertical',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps)] = !vertical),
      (_extends2[prefix(bsProps, 'vertical')] = vertical),
      (_extends2[prefix(bsProps, 'justified')] = justified),
      (_extends2[prefix(RBButton.defaultProps, 'block')] = block),
      _extends2),
    );

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return ButtonGroup;
})(React.Component);

ButtonGroup.propTypes = propTypes$7;
ButtonGroup.defaultProps = defaultProps$7;

var ButtonGroup$1 = bsClass('btn-group', ButtonGroup);

var ButtonToolbar = (function(_React$Component) {
  _inherits(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    _classCallCheck(this, ButtonToolbar);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ButtonToolbar.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        role: 'toolbar',
        className: classnames(className, classes),
      }),
    );
  };

  return ButtonToolbar;
})(React.Component);

bsClass('btn-toolbar', ButtonToolbar);

var propTypes$8 = {
  componentClass: elementType,
};

var defaultProps$8 = {
  componentClass: 'div',
};

var CarouselCaption = (function(_React$Component) {
  _inherits(CarouselCaption, _React$Component);

  function CarouselCaption() {
    _classCallCheck(this, CarouselCaption);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  CarouselCaption.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return CarouselCaption;
})(React.Component);

CarouselCaption.propTypes = propTypes$8;
CarouselCaption.defaultProps = defaultProps$8;

var CarouselCaption$1 = bsClass('carousel-caption', CarouselCaption);

var inDOM = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
  module.exports = exports['default'];
});

var canUseDOM = unwrapExports(inDOM);

var properties = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var transform = 'transform';
  var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
  var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
  var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

  if (_inDOM2.default) {
    var _getTransitionPropert = getTransitionProperties();

    prefix = _getTransitionPropert.prefix;
    exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
    exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;

    exports.transform = transform = prefix + '-' + transform;
    exports.transitionProperty = transitionProperty =
      prefix + '-transition-property';
    exports.transitionDuration = transitionDuration =
      prefix + '-transition-duration';
    exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
    exports.transitionTiming = transitionTiming =
      prefix + '-transition-timing-function';

    exports.animationName = animationName = prefix + '-animation-name';
    exports.animationDuration = animationDuration =
      prefix + '-animation-duration';
    exports.animationTiming = animationTiming = prefix + '-animation-delay';
    exports.animationDelay = animationDelay =
      prefix + '-animation-timing-function';
  }

  exports.transform = transform;
  exports.transitionProperty = transitionProperty;
  exports.transitionTiming = transitionTiming;
  exports.transitionDelay = transitionDelay;
  exports.transitionDuration = transitionDuration;
  exports.transitionEnd = transitionEnd;
  exports.animationName = animationName;
  exports.animationDuration = animationDuration;
  exports.animationTiming = animationTiming;
  exports.animationDelay = animationDelay;
  exports.animationEnd = animationEnd;
  exports.default = {
    transform: transform,
    end: transitionEnd,
    property: transitionProperty,
    timing: transitionTiming,
    delay: transitionDelay,
    duration: transitionDuration,
  };

  function getTransitionProperties() {
    var style = document.createElement('div').style;

    var vendorMap = {
      O: function O(e) {
        return 'o' + e.toLowerCase();
      },
      Moz: function Moz(e) {
        return e.toLowerCase();
      },
      Webkit: function Webkit(e) {
        return 'webkit' + e;
      },
      ms: function ms(e) {
        return 'MS' + e;
      },
    };

    var vendors = Object.keys(vendorMap);

    var transitionEnd = void 0,
      animationEnd = void 0;
    var prefix = '';

    for (var i = 0; i < vendors.length; i++) {
      var vendor = vendors[i];

      if (vendor + 'TransitionProperty' in style) {
        prefix = '-' + vendor.toLowerCase();
        transitionEnd = vendorMap[vendor]('TransitionEnd');
        animationEnd = vendorMap[vendor]('AnimationEnd');
        break;
      }
    }

    if (!transitionEnd && 'transitionProperty' in style)
      transitionEnd = 'transitionend';

    if (!animationEnd && 'animationName' in style)
      animationEnd = 'animationend';

    style = null;

    return {
      animationEnd: animationEnd,
      transitionEnd: transitionEnd,
      prefix: prefix,
    };
  }
});

unwrapExports(properties);
var properties_1 = properties.animationEnd;
var properties_2 = properties.animationDelay;
var properties_3 = properties.animationTiming;
var properties_4 = properties.animationDuration;
var properties_5 = properties.animationName;
var properties_6 = properties.transitionEnd;
var properties_7 = properties.transitionDuration;
var properties_8 = properties.transitionDelay;
var properties_9 = properties.transitionTiming;
var properties_10 = properties.transitionProperty;
var properties_11 = properties.transform;

var camelize_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = camelize;
  var rHyphen = /-(.)/g;

  function camelize(string) {
    return string.replace(rHyphen, function(_, chr) {
      return chr.toUpperCase();
    });
  }
  module.exports = exports['default'];
});

unwrapExports(camelize_1);

var camelizeStyle = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = camelizeStyleName;

  var _camelize2 = _interopRequireDefault(camelize_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var msPattern = /^-ms-/; /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
   */
  function camelizeStyleName(string) {
    return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
  }
  module.exports = exports['default'];
});

unwrapExports(camelizeStyle);

var hyphenate_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = hyphenate;

  var rUpper = /([A-Z])/g;

  function hyphenate(string) {
    return string.replace(rUpper, '-$1').toLowerCase();
  }
  module.exports = exports['default'];
});

unwrapExports(hyphenate_1);

var hyphenateStyle = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = hyphenateStyleName;

  var _hyphenate2 = _interopRequireDefault(hyphenate_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var msPattern = /^ms-/; /**
   * Copyright 2013-2014, Facebook, Inc.
   * All rights reserved.
   * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
   */

  function hyphenateStyleName(string) {
    return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
  }
  module.exports = exports['default'];
});

unwrapExports(hyphenateStyle);

var getComputedStyle = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = _getComputedStyle;

  var _camelizeStyle2 = _interopRequireDefault(camelizeStyle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var rposition = /^(top|right|bottom|left)$/;
  var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

  function _getComputedStyle(node) {
    if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
    var doc = node.ownerDocument;

    return 'defaultView' in doc
      ? doc.defaultView.opener
        ? node.ownerDocument.defaultView.getComputedStyle(node, null)
        : window.getComputedStyle(node, null)
      : {
          //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
          getPropertyValue: function getPropertyValue(prop) {
            var style = node.style;

            prop = (0, _camelizeStyle2.default)(prop);

            if (prop == 'float') prop = 'styleFloat';

            var current = node.currentStyle[prop] || null;

            if (current == null && style && style[prop]) current = style[prop];

            if (rnumnonpx.test(current) && !rposition.test(prop)) {
              // Remember the original values
              var left = style.left;
              var runStyle = node.runtimeStyle;
              var rsLeft = runStyle && runStyle.left;

              // Put in the new values to get a computed value out
              if (rsLeft) runStyle.left = node.currentStyle.left;

              style.left = prop === 'fontSize' ? '1em' : current;
              current = style.pixelLeft + 'px';

              // Revert the changed values
              style.left = left;
              if (rsLeft) runStyle.left = rsLeft;
            }

            return current;
          },
        };
  }
  module.exports = exports['default'];
});

unwrapExports(getComputedStyle);

var removeStyle_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = removeStyle;
  function removeStyle(node, key) {
    return 'removeProperty' in node.style
      ? node.style.removeProperty(key)
      : node.style.removeAttribute(key);
  }
  module.exports = exports['default'];
});

unwrapExports(removeStyle_1);

var isTransform_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = isTransform;
  var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

  function isTransform(property) {
    return !!(property && supportedTransforms.test(property));
  }
  module.exports = exports['default'];
});

unwrapExports(isTransform_1);

var style_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = style;

  var _camelizeStyle2 = _interopRequireDefault(camelizeStyle);

  var _hyphenateStyle2 = _interopRequireDefault(hyphenateStyle);

  var _getComputedStyle3 = _interopRequireDefault(getComputedStyle);

  var _removeStyle2 = _interopRequireDefault(removeStyle_1);

  var _isTransform2 = _interopRequireDefault(isTransform_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function style(node, property, value) {
    var css = '';
    var transforms = '';
    var props = property;

    if (typeof property === 'string') {
      if (value === undefined) {
        return (
          node.style[(0, _camelizeStyle2.default)(property)] ||
          (0, _getComputedStyle3.default)(node).getPropertyValue(
            (0, _hyphenateStyle2.default)(property),
          )
        );
      } else {
        (props = {})[property] = value;
      }
    }

    Object.keys(props).forEach(function(key) {
      var value = props[key];
      if (!value && value !== 0) {
        (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
      } else if ((0, _isTransform2.default)(key)) {
        transforms += key + '(' + value + ') ';
      } else {
        css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
      }
    });

    if (transforms) {
      css += properties.transform + ': ' + transforms + ';';
    }

    node.style.cssText += ';' + css;
  }
  module.exports = exports['default'];
});

var css = unwrapExports(style_1);

var end = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _properties2 = _interopRequireDefault(properties);

  var _style2 = _interopRequireDefault(style_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function onEnd(node, handler, duration) {
    var fakeEvent = {
        target: node,
        currentTarget: node,
      },
      backup;

    if (!_properties2.default.end) duration = 0;
    else if (duration == null) duration = parseDuration(node) || 0;

    if (_properties2.default.end) {
      node.addEventListener(_properties2.default.end, done, false);

      backup = setTimeout(function() {
        return done(fakeEvent);
      }, (duration || 100) * 1.5);
    } else setTimeout(done.bind(null, fakeEvent), 0);

    function done(event) {
      if (event.target !== event.currentTarget) return;
      clearTimeout(backup);
      event.target.removeEventListener(_properties2.default.end, done);
      handler.call(this);
    }
  }

  onEnd._parseDuration = parseDuration;

  exports.default = onEnd;

  function parseDuration(node) {
    var str = (0, _style2.default)(node, _properties2.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;

    return parseFloat(str) * mult;
  }
  module.exports = exports['default'];
});

unwrapExports(end);

var transition = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.properties = exports.end = undefined;

  var _end2 = _interopRequireDefault(end);

  var _properties2 = _interopRequireDefault(properties);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.end = _end2.default;
  exports.properties = _properties2.default;
  exports.default = { end: _end2.default, properties: _properties2.default };
});

var transition$1 = unwrapExports(transition);
var transition_1 = transition.properties;
var transition_2 = transition.end;

var propTypes$9 = {
  direction: PropTypes.oneOf(['prev', 'next']),
  onAnimateOutEnd: PropTypes.func,
  active: PropTypes.bool,
  animateIn: PropTypes.bool,
  animateOut: PropTypes.bool,
  index: PropTypes.number,
};

var defaultProps$9 = {
  active: false,
  animateIn: false,
  animateOut: false,
};

var CarouselItem = (function(_React$Component) {
  _inherits(CarouselItem, _React$Component);

  function CarouselItem(props, context) {
    _classCallCheck(this, CarouselItem);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleAnimateOutEnd = _this.handleAnimateOutEnd.bind(_this);

    _this.state = {
      direction: null,
    };

    _this.isUnmounted = false;
    return _this;
  }

  CarouselItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(
    nextProps,
  ) {
    if (this.props.active !== nextProps.active) {
      this.setState({ direction: null });
    }
  };

  CarouselItem.prototype.componentDidUpdate = function componentDidUpdate(
    prevProps,
  ) {
    var _this2 = this;

    var active = this.props.active;

    var prevActive = prevProps.active;

    if (!active && prevActive) {
      transition$1.end(_reactDom.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (active !== prevActive) {
      setTimeout(function() {
        return _this2.startAnimation();
      }, 20);
    }
  };

  CarouselItem.prototype.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  CarouselItem.prototype.handleAnimateOutEnd = function handleAnimateOutEnd() {
    if (this.isUnmounted) {
      return;
    }

    if (this.props.onAnimateOutEnd) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  };

  CarouselItem.prototype.startAnimation = function startAnimation() {
    if (this.isUnmounted) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ? 'right' : 'left',
    });
  };

  CarouselItem.prototype.render = function render() {
    var _props = this.props,
      direction = _props.direction,
      active = _props.active,
      animateIn = _props.animateIn,
      animateOut = _props.animateOut,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'direction',
        'active',
        'animateIn',
        'animateOut',
        'className',
      ]);

    delete props.onAnimateOutEnd;
    delete props.index;

    var classes = {
      item: true,
      active: (active && !animateIn) || animateOut,
    };
    if (direction && active && animateIn) {
      classes[direction] = true;
    }
    if (this.state.direction && (animateIn || animateOut)) {
      classes[this.state.direction] = true;
    }

    return React.createElement(
      'div',
      _extends$2({}, props, { className: classnames(className, classes) }),
    );
  };

  return CarouselItem;
})(React.Component);

CarouselItem.propTypes = propTypes$9;
CarouselItem.defaultProps = defaultProps$9;

var propTypes$10 = {
  /**
   * An icon name without "glyphicon-" prefix. See e.g. http://getbootstrap.com/components/#glyphicons
   */
  glyph: PropTypes.string.isRequired,
};

var Glyphicon = (function(_React$Component) {
  _inherits(Glyphicon, _React$Component);

  function Glyphicon() {
    _classCallCheck(this, Glyphicon);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Glyphicon.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      glyph = _props.glyph,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['glyph', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}), (_extends2[prefix(bsProps, glyph)] = true), _extends2),
    );

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Glyphicon;
})(React.Component);

Glyphicon.propTypes = propTypes$10;

var Glyphicon$1 = bsClass('glyphicon', Glyphicon);

// TODO: `slide` should be `animate`.

// TODO: Use uncontrollable.

var propTypes$11 = {
  slide: PropTypes.bool,
  indicators: PropTypes.bool,
  /**
   * The amount of time to delay between automatically cycling an item.
   * If `null`, carousel will not automatically cycle.
   */
  interval: PropTypes.number,
  controls: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  wrap: PropTypes.bool,
  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: any, ?event: Object) => any
   * ```
   *
   * If this callback takes two or more arguments, the second argument will
   * be a persisted event object with `direction` set to the direction of the
   * transition.
   */
  onSelect: PropTypes.func,
  onSlideEnd: PropTypes.func,
  activeIndex: PropTypes.number,
  defaultActiveIndex: PropTypes.number,
  direction: PropTypes.oneOf(['prev', 'next']),
  prevIcon: PropTypes.node,
  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: PropTypes.string,
  nextIcon: PropTypes.node,
  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: PropTypes.string,
};

var defaultProps$10 = {
  slide: true,
  interval: 5000,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  prevIcon: React.createElement(Glyphicon$1, { glyph: 'chevron-left' }),
  prevLabel: 'Previous',
  nextIcon: React.createElement(Glyphicon$1, { glyph: 'chevron-right' }),
  nextLabel: 'Next',
};

var Carousel = (function(_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props, context) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleMouseOut = _this.handleMouseOut.bind(_this);
    _this.handlePrev = _this.handlePrev.bind(_this);
    _this.handleNext = _this.handleNext.bind(_this);
    _this.handleItemAnimateOutEnd = _this.handleItemAnimateOutEnd.bind(_this);

    var defaultActiveIndex = props.defaultActiveIndex;

    _this.state = {
      activeIndex: defaultActiveIndex != null ? defaultActiveIndex : 0,
      previousActiveIndex: null,
      direction: null,
    };

    _this.isUnmounted = false;
    return _this;
  }

  Carousel.prototype.componentDidMount = function componentDidMount() {
    this.waitForNext();
  };

  Carousel.prototype.componentWillReceiveProps = function componentWillReceiveProps(
    nextProps,
  ) {
    var activeIndex = this.getActiveIndex();

    if (
      nextProps.activeIndex != null &&
      nextProps.activeIndex !== activeIndex
    ) {
      clearTimeout(this.timeout);

      this.setState({
        previousActiveIndex: activeIndex,
        direction:
          nextProps.direction != null
            ? nextProps.direction
            : this.getDirection(activeIndex, nextProps.activeIndex),
      });
    }

    if (
      nextProps.activeIndex == null &&
      this.state.activeIndex >= nextProps.children.length
    ) {
      this.setState({
        activeIndex: 0,
        previousActiveIndex: null,
        direction: null,
      });
    }
  };

  Carousel.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  Carousel.prototype.getActiveIndex = function getActiveIndex() {
    var activeIndexProp = this.props.activeIndex;
    return activeIndexProp != null ? activeIndexProp : this.state.activeIndex;
  };

  Carousel.prototype.getDirection = function getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  };

  Carousel.prototype.handleItemAnimateOutEnd = function handleItemAnimateOutEnd() {
    var _this2 = this;

    this.setState(
      {
        previousActiveIndex: null,
        direction: null,
      },
      function() {
        _this2.waitForNext();

        if (_this2.props.onSlideEnd) {
          _this2.props.onSlideEnd();
        }
      },
    );
  };

  Carousel.prototype.handleMouseOut = function handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  };

  Carousel.prototype.handleMouseOver = function handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  };

  Carousel.prototype.handleNext = function handleNext(e) {
    var index = this.getActiveIndex() + 1;
    var count = ValidChildren.count(this.props.children);

    if (index > count - 1) {
      if (!this.props.wrap) {
        return;
      }
      index = 0;
    }

    this.select(index, e, 'next');
  };

  Carousel.prototype.handlePrev = function handlePrev(e) {
    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.wrap) {
        return;
      }
      index = ValidChildren.count(this.props.children) - 1;
    }

    this.select(index, e, 'prev');
  };

  // This might be a public API.

  Carousel.prototype.pause = function pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  };

  // This might be a public API.

  Carousel.prototype.play = function play() {
    this.isPaused = false;
    this.waitForNext();
  };

  Carousel.prototype.select = function select(index, e, direction) {
    clearTimeout(this.timeout);

    // TODO: Is this necessary? Seems like the only risk is if the component
    // unmounts while handleItemAnimateOutEnd fires.
    if (this.isUnmounted) {
      return;
    }

    var previousActiveIndex = this.props.slide ? this.getActiveIndex() : null;
    direction = direction || this.getDirection(previousActiveIndex, index);

    var onSelect = this.props.onSelect;

    if (onSelect) {
      if (onSelect.length > 1) {
        // React SyntheticEvents are pooled, so we need to remove this event
        // from the pool to add a custom property. To avoid unnecessarily
        // removing objects from the pool, only do this when the listener
        // actually wants the event.
        if (e) {
          e.persist();
          e.direction = direction;
        } else {
          e = { direction: direction };
        }

        onSelect(index, e);
      } else {
        onSelect(index);
      }
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queueing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction,
      });
    }
  };

  Carousel.prototype.waitForNext = function waitForNext() {
    var _props = this.props,
      slide = _props.slide,
      interval = _props.interval,
      activeIndexProp = _props.activeIndex;

    if (!this.isPaused && slide && interval && activeIndexProp == null) {
      this.timeout = setTimeout(this.handleNext, interval);
    }
  };

  Carousel.prototype.renderControls = function renderControls(properties) {
    var wrap = properties.wrap,
      children = properties.children,
      activeIndex = properties.activeIndex,
      prevIcon = properties.prevIcon,
      nextIcon = properties.nextIcon,
      bsProps = properties.bsProps,
      prevLabel = properties.prevLabel,
      nextLabel = properties.nextLabel;

    var controlClassName = prefix(bsProps, 'control');
    var count = ValidChildren.count(children);

    return [
      (wrap || activeIndex !== 0) &&
        React.createElement(
          SafeAnchor,
          {
            key: 'prev',
            className: classnames(controlClassName, 'left'),
            onClick: this.handlePrev,
          },
          prevIcon,
          prevLabel &&
            React.createElement('span', { className: 'sr-only' }, prevLabel),
        ),
      (wrap || activeIndex !== count - 1) &&
        React.createElement(
          SafeAnchor,
          {
            key: 'next',
            className: classnames(controlClassName, 'right'),
            onClick: this.handleNext,
          },
          nextIcon,
          nextLabel &&
            React.createElement('span', { className: 'sr-only' }, nextLabel),
        ),
    ];
  };

  Carousel.prototype.renderIndicators = function renderIndicators(
    children,
    activeIndex,
    bsProps,
  ) {
    var _this3 = this;

    var indicators = [];

    ValidChildren.forEach(children, function(child, index) {
      indicators.push(
        React.createElement('li', {
          key: index,
          className: index === activeIndex ? 'active' : null,
          onClick: function onClick(e) {
            return _this3.select(index, e);
          },
        }),

        // Force whitespace between indicator elements. Bootstrap requires
        // this for correct spacing of elements.
        ' ',
      );
    });

    return React.createElement(
      'ol',
      { className: prefix(bsProps, 'indicators') },
      indicators,
    );
  };

  Carousel.prototype.render = function render() {
    var _this4 = this;

    var _props2 = this.props,
      slide = _props2.slide,
      indicators = _props2.indicators,
      controls = _props2.controls,
      wrap = _props2.wrap,
      prevIcon = _props2.prevIcon,
      prevLabel = _props2.prevLabel,
      nextIcon = _props2.nextIcon,
      nextLabel = _props2.nextLabel,
      className = _props2.className,
      children = _props2.children,
      props = _objectWithoutProperties(_props2, [
        'slide',
        'indicators',
        'controls',
        'wrap',
        'prevIcon',
        'prevLabel',
        'nextIcon',
        'nextLabel',
        'className',
        'children',
      ]);

    var _state = this.state,
      previousActiveIndex = _state.previousActiveIndex,
      direction = _state.direction;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, [
        'interval',
        'pauseOnHover',
        'onSelect',
        'onSlideEnd',
        'activeIndex', // Accessed via this.getActiveIndex().
        'defaultActiveIndex',
        'direction',
      ]),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    var activeIndex = this.getActiveIndex();

    var classes = _extends$2({}, getClassSet(bsProps), {
      slide: slide,
    });

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut,
      }),
      indicators && this.renderIndicators(children, activeIndex, bsProps),
      React.createElement(
        'div',
        { className: prefix(bsProps, 'inner') },
        ValidChildren.map(children, function(child, index) {
          var active = index === activeIndex;
          var previousActive = slide && index === previousActiveIndex;

          return cloneElement(child, {
            active: active,
            index: index,
            animateOut: previousActive,
            animateIn: active && previousActiveIndex != null && slide,
            direction: direction,
            onAnimateOutEnd: previousActive
              ? _this4.handleItemAnimateOutEnd
              : null,
          });
        }),
      ),
      controls &&
        this.renderControls({
          wrap: wrap,
          children: children,
          activeIndex: activeIndex,
          prevIcon: prevIcon,
          prevLabel: prevLabel,
          nextIcon: nextIcon,
          nextLabel: nextLabel,
          bsProps: bsProps,
        }),
    );
  };

  return Carousel;
})(React.Component);

Carousel.propTypes = propTypes$11;
Carousel.defaultProps = defaultProps$10;

Carousel.Caption = CarouselCaption$1;
Carousel.Item = CarouselItem;

bsClass('carousel', Carousel);

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
          'message argument',
      );
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
          'warning. Please, use a more descriptive format than: ' +
          format,
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message =
        'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

var warning_1 = warning;

/* eslint-disable jsx-a11y/label-has-for */

var propTypes$12 = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  /**
   * Only valid if `inline` is not set.
   */
  validationState: PropTypes.oneOf(['success', 'warning', 'error', null]),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Checkbox inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func,
};

var defaultProps$11 = {
  inline: false,
  disabled: false,
  title: '',
};

var Checkbox = (function(_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Checkbox.prototype.render = function render() {
    var _props = this.props,
      inline = _props.inline,
      disabled = _props.disabled,
      validationState = _props.validationState,
      inputRef = _props.inputRef,
      className = _props.className,
      style = _props.style,
      title = _props.title,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'inline',
        'disabled',
        'validationState',
        'inputRef',
        'className',
        'style',
        'title',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var input = React.createElement(
      'input',
      _extends$2({}, elementProps, {
        ref: inputRef,
        type: 'checkbox',
        disabled: disabled,
      }),
    );

    if (inline) {
      var _classes2;

      var _classes = ((_classes2 = {}),
      (_classes2[prefix(bsProps, 'inline')] = true),
      (_classes2.disabled = disabled),
      _classes2);

      // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            !validationState,
            '`validationState` is ignored on `<Checkbox inline>`. To display ' +
              'validation state on an inline checkbox, set `validationState` on a ' +
              'parent `<FormGroup>` or other element instead.',
          )
        : void 0;

      return React.createElement(
        'label',
        {
          className: classnames(className, _classes),
          style: style,
          title: title,
        },
        input,
        children,
      );
    }

    var classes = _extends$2({}, getClassSet(bsProps), {
      disabled: disabled,
    });
    if (validationState) {
      classes['has-' + validationState] = true;
    }

    return React.createElement(
      'div',
      { className: classnames(className, classes), style: style },
      React.createElement('label', { title: title }, input, children),
    );
  };

  return Checkbox;
})(React.Component);

Checkbox.propTypes = propTypes$12;
Checkbox.defaultProps = defaultProps$11;

bsClass('checkbox', Checkbox);

function capitalize(string) {
  return '' + string.charAt(0).toUpperCase() + string.slice(1);
}

var propTypes$13 = {
  componentClass: elementType,

  /**
   * Apply clearfix
   *
   * on Extra small devices Phones
   *
   * adds class `visible-xs-block`
   */
  visibleXsBlock: PropTypes.bool,
  /**
   * Apply clearfix
   *
   * on Small devices Tablets
   *
   * adds class `visible-sm-block`
   */
  visibleSmBlock: PropTypes.bool,
  /**
   * Apply clearfix
   *
   * on Medium devices Desktops
   *
   * adds class `visible-md-block`
   */
  visibleMdBlock: PropTypes.bool,
  /**
   * Apply clearfix
   *
   * on Large devices Desktops
   *
   * adds class `visible-lg-block`
   */
  visibleLgBlock: PropTypes.bool,
};

var defaultProps$12 = {
  componentClass: 'div',
};

var Clearfix = (function(_React$Component) {
  _inherits(Clearfix, _React$Component);

  function Clearfix() {
    _classCallCheck(this, Clearfix);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Clearfix.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    DEVICE_SIZES.forEach(function(size) {
      var propName = 'visible' + capitalize(size) + 'Block';
      if (elementProps[propName]) {
        classes['visible-' + size + '-block'] = true;
      }

      delete elementProps[propName];
    });

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Clearfix;
})(React.Component);

Clearfix.propTypes = propTypes$13;
Clearfix.defaultProps = defaultProps$12;

bsClass('clearfix', Clearfix);

var propTypes$14 = {
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  htmlFor: PropTypes.string,
  srOnly: PropTypes.bool,
};

var defaultProps$13 = {
  srOnly: false,
};

var contextTypes = {
  $bs_formGroup: PropTypes.object,
};

var ControlLabel = (function(_React$Component) {
  _inherits(ControlLabel, _React$Component);

  function ControlLabel() {
    _classCallCheck(this, ControlLabel);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ControlLabel.prototype.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props,
      _props$htmlFor = _props.htmlFor,
      htmlFor = _props$htmlFor === undefined ? controlId : _props$htmlFor,
      srOnly = _props.srOnly,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'htmlFor',
        'srOnly',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== 'production'
      ? warning_1(
          controlId == null || htmlFor === controlId,
          '`controlId` is ignored on `<ControlLabel>` when `htmlFor` is specified.',
        )
      : void 0;

    var classes = _extends$2({}, getClassSet(bsProps), {
      'sr-only': srOnly,
    });

    return React.createElement(
      'label',
      _extends$2({}, elementProps, {
        htmlFor: htmlFor,
        className: classnames(className, classes),
      }),
    );
  };

  return ControlLabel;
})(React.Component);

ControlLabel.propTypes = propTypes$14;
ControlLabel.defaultProps = defaultProps$13;
ControlLabel.contextTypes = contextTypes;

bsClass('control-label', ControlLabel);

var propTypes$15 = {
  componentClass: elementType,

  /**
   * The number of columns you wish to span
   *
   * for Extra small devices Phones (<768px)
   *
   * class-prefix `col-xs-`
   */
  xs: PropTypes.number,
  /**
   * The number of columns you wish to span
   *
   * for Small devices Tablets (≥768px)
   *
   * class-prefix `col-sm-`
   */
  sm: PropTypes.number,
  /**
   * The number of columns you wish to span
   *
   * for Medium devices Desktops (≥992px)
   *
   * class-prefix `col-md-`
   */
  md: PropTypes.number,
  /**
   * The number of columns you wish to span
   *
   * for Large devices Desktops (≥1200px)
   *
   * class-prefix `col-lg-`
   */
  lg: PropTypes.number,
  /**
   * Hide column
   *
   * on Extra small devices Phones
   *
   * adds class `hidden-xs`
   */
  xsHidden: PropTypes.bool,
  /**
   * Hide column
   *
   * on Small devices Tablets
   *
   * adds class `hidden-sm`
   */
  smHidden: PropTypes.bool,
  /**
   * Hide column
   *
   * on Medium devices Desktops
   *
   * adds class `hidden-md`
   */
  mdHidden: PropTypes.bool,
  /**
   * Hide column
   *
   * on Large devices Desktops
   *
   * adds class `hidden-lg`
   */
  lgHidden: PropTypes.bool,
  /**
   * Move columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-offset-`
   */
  xsOffset: PropTypes.number,
  /**
   * Move columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-offset-`
   */
  smOffset: PropTypes.number,
  /**
   * Move columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-offset-`
   */
  mdOffset: PropTypes.number,
  /**
   * Move columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-offset-`
   */
  lgOffset: PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-push-`
   */
  xsPush: PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-push-`
   */
  smPush: PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-push-`
   */
  mdPush: PropTypes.number,
  /**
   * Change the order of grid columns to the right
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-push-`
   */
  lgPush: PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Extra small devices Phones
   *
   * class-prefix `col-xs-pull-`
   */
  xsPull: PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Small devices Tablets
   *
   * class-prefix `col-sm-pull-`
   */
  smPull: PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Medium devices Desktops
   *
   * class-prefix `col-md-pull-`
   */
  mdPull: PropTypes.number,
  /**
   * Change the order of grid columns to the left
   *
   * for Large devices Desktops
   *
   * class-prefix `col-lg-pull-`
   */
  lgPull: PropTypes.number,
};

var defaultProps$14 = {
  componentClass: 'div',
};

var Col = (function(_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Col.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = [];

    DEVICE_SIZES.forEach(function(size) {
      function popProp(propSuffix, modifier) {
        var propName = '' + size + propSuffix;
        var propValue = elementProps[propName];

        if (propValue != null) {
          classes.push(prefix(bsProps, '' + size + modifier + '-' + propValue));
        }

        delete elementProps[propName];
      }

      popProp('', '');
      popProp('Offset', '-offset');
      popProp('Push', '-push');
      popProp('Pull', '-pull');

      var hiddenPropName = size + 'Hidden';
      if (elementProps[hiddenPropName]) {
        classes.push('hidden-' + size);
      }
      delete elementProps[hiddenPropName];
    });

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Col;
})(React.Component);

Col.propTypes = propTypes$15;
Col.defaultProps = defaultProps$14;

bsClass('col', Col);

var PropTypes$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.classNamesShape = exports.timeoutsShape = undefined;
  exports.transitionTimeout = transitionTimeout;

  var _propTypes2 = _interopRequireDefault(PropTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function transitionTimeout(transitionType) {
    var timeoutPropName = 'transition' + transitionType + 'Timeout';
    var enabledPropName = 'transition' + transitionType;

    return function(props) {
      // If the transition is enabled
      if (props[enabledPropName]) {
        // If no timeout duration is provided
        if (props[timeoutPropName] == null) {
          return new Error(
            timeoutPropName +
              " wasn't supplied to CSSTransitionGroup: " +
              "this can cause unreliable animations and won't be supported in " +
              'a future version of React. See ' +
              'https://fb.me/react-animation-transition-group-timeout for more ' +
              'information.',
          );

          // If the duration isn't a number
        } else if (typeof props[timeoutPropName] !== 'number') {
          return new Error(
            timeoutPropName + ' must be a number (in milliseconds)',
          );
        }
      }

      return null;
    };
  }

  var timeoutsShape = (exports.timeoutsShape = _propTypes2.default.oneOfType([
    _propTypes2.default.number,
    _propTypes2.default.shape({
      enter: _propTypes2.default.number,
      exit: _propTypes2.default.number,
    }).isRequired,
  ]));

  var classNamesShape = (exports.classNamesShape = _propTypes2.default.oneOfType(
    [
      _propTypes2.default.string,
      _propTypes2.default.shape({
        enter: _propTypes2.default.string,
        exit: _propTypes2.default.string,
        active: _propTypes2.default.string,
      }),
      _propTypes2.default.shape({
        enter: _propTypes2.default.string,
        enterDone: _propTypes2.default.string,
        enterActive: _propTypes2.default.string,
        exit: _propTypes2.default.string,
        exitDone: _propTypes2.default.string,
        exitActive: _propTypes2.default.string,
      }),
    ],
  ));
});

unwrapExports(PropTypes$1);
var PropTypes_1 = PropTypes$1.classNamesShape;
var PropTypes_2 = PropTypes$1.timeoutsShape;
var PropTypes_3 = PropTypes$1.transitionTimeout;

var Transition_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

  var PropTypes$$1 = _interopRequireWildcard(PropTypes);

  var _react2 = _interopRequireDefault(React);

  var _reactDom2 = _interopRequireDefault(_reactDom);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
    return target;
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

  var UNMOUNTED = (exports.UNMOUNTED = 'unmounted');
  var EXITED = (exports.EXITED = 'exited');
  var ENTERING = (exports.ENTERING = 'entering');
  var ENTERED = (exports.ENTERED = 'entered');
  var EXITING = (exports.EXITING = 'exiting');

  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */

  var Transition = (function(_React$Component) {
    _inherits(Transition, _React$Component);

    function Transition(props, context) {
      _classCallCheck(this, Transition);

      var _this = _possibleConstructorReturn(
        this,
        _React$Component.call(this, props, context),
      );

      var parentGroup = context.transitionGroup;
      // In the context of a TransitionGroup all enters are really appears
      var appear =
        parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

      var initialStatus = void 0;
      _this.nextStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.nextStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = { status: initialStatus };

      _this.nextCallback = null;
      return _this;
    }

    Transition.prototype.getChildContext = function getChildContext() {
      return { transitionGroup: null }; // allows for nested Transitions
    };

    Transition.prototype.componentDidMount = function componentDidMount() {
      this.updateStatus(true);
    };

    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps,
    ) {
      var _ref = this.pendingState || this.state,
        status = _ref.status;

      if (nextProps.in) {
        if (status === UNMOUNTED) {
          this.setState({ status: EXITED });
        }
        if (status !== ENTERING && status !== ENTERED) {
          this.nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          this.nextStatus = EXITING;
        }
      }
    };

    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
      this.updateStatus();
    };

    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    Transition.prototype.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;

      var exit = void 0,
        enter = void 0,
        appear = void 0;

      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter;
        appear = timeout.appear;
      }
      return { exit: exit, enter: enter, appear: appear };
    };

    Transition.prototype.updateStatus = function updateStatus() {
      var mounting =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : false;

      var nextStatus = this.nextStatus;

      if (nextStatus !== null) {
        this.nextStatus = null;
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        var node = _reactDom2.default.findDOMNode(this);

        if (nextStatus === ENTERING) {
          this.performEnter(node, mounting);
        } else {
          this.performExit(node);
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({ status: UNMOUNTED });
      }
    };

    Transition.prototype.performEnter = function performEnter(node, mounting) {
      var _this2 = this;

      var enter = this.props.enter;

      var appearing = this.context.transitionGroup
        ? this.context.transitionGroup.isMounting
        : mounting;

      var timeouts = this.getTimeouts();

      // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set
      if (!mounting && !enter) {
        this.safeSetState({ status: ENTERED }, function() {
          _this2.props.onEntered(node);
        });
        return;
      }

      this.props.onEnter(node, appearing);

      this.safeSetState({ status: ENTERING }, function() {
        _this2.props.onEntering(node, appearing);

        // FIXME: appear timeout?
        _this2.onTransitionEnd(node, timeouts.enter, function() {
          _this2.safeSetState({ status: ENTERED }, function() {
            _this2.props.onEntered(node, appearing);
          });
        });
      });
    };

    Transition.prototype.performExit = function performExit(node) {
      var _this3 = this;

      var exit = this.props.exit;

      var timeouts = this.getTimeouts();

      // no exit animation skip right to EXITED
      if (!exit) {
        this.safeSetState({ status: EXITED }, function() {
          _this3.props.onExited(node);
        });
        return;
      }
      this.props.onExit(node);

      this.safeSetState({ status: EXITING }, function() {
        _this3.props.onExiting(node);

        _this3.onTransitionEnd(node, timeouts.exit, function() {
          _this3.safeSetState({ status: EXITED }, function() {
            _this3.props.onExited(node);
          });
        });
      });
    };

    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    Transition.prototype.safeSetState = function safeSetState(
      nextState,
      callback,
    ) {
      var _this4 = this;

      // We need to track pending updates for instances where a cWRP fires quickly
      // after cDM and before the state flushes, which would double trigger a
      // transition
      this.pendingState = nextState;

      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, function() {
        _this4.pendingState = null;
        callback();
      });
    };

    Transition.prototype.setNextCallback = function setNextCallback(callback) {
      var _this5 = this;

      var active = true;

      this.nextCallback = function(event) {
        if (active) {
          active = false;
          _this5.nextCallback = null;

          callback(event);
        }
      };

      this.nextCallback.cancel = function() {
        active = false;
      };

      return this.nextCallback;
    };

    Transition.prototype.onTransitionEnd = function onTransitionEnd(
      node,
      timeout,
      handler,
    ) {
      this.setNextCallback(handler);

      if (node) {
        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }
        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      } else {
        setTimeout(this.nextCallback, 0);
      }
    };

    Transition.prototype.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }

      var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
      // filter props for Transtition

      delete childProps.in;
      delete childProps.mountOnEnter;
      delete childProps.unmountOnExit;
      delete childProps.appear;
      delete childProps.enter;
      delete childProps.exit;
      delete childProps.timeout;
      delete childProps.addEndListener;
      delete childProps.onEnter;
      delete childProps.onEntering;
      delete childProps.onEntered;
      delete childProps.onExit;
      delete childProps.onExiting;
      delete childProps.onExited;

      if (typeof children === 'function') {
        return children(status, childProps);
      }

      var child = _react2.default.Children.only(children);
      return _react2.default.cloneElement(child, childProps);
    };

    return Transition;
  })(_react2.default.Component);

  Transition.contextTypes = {
    transitionGroup: PropTypes$$1.object,
  };
  Transition.childContextTypes = {
    transitionGroup: function transitionGroup() {},
  };

  Transition.propTypes =
    process.env.NODE_ENV !== 'production'
      ? {
          /**
           * A `function` child can be used instead of a React element.
           * This function is called with the current transition status
           * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
           * to apply context specific props to a component.
           *
           * ```jsx
           * <Transition timeout={150}>
           *   {(status) => (
           *     <MyComponent className={`fade fade-${status}`} />
           *   )}
           * </Transition>
           * ```
           */
          children: PropTypes$$1.oneOfType([
            PropTypes$$1.func.isRequired,
            PropTypes$$1.element.isRequired,
          ]).isRequired,

          /**
           * Show the component; triggers the enter or exit states
           */
          in: PropTypes$$1.bool,

          /**
           * By default the child component is mounted immediately along with
           * the parent `Transition` component. If you want to "lazy mount" the component on the
           * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
           * mounted, even on "exited", unless you also specify `unmountOnExit`.
           */
          mountOnEnter: PropTypes$$1.bool,

          /**
           * By default the child component stays mounted after it reaches the `'exited'` state.
           * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
           */
          unmountOnExit: PropTypes$$1.bool,

          /**
           * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
           * If you want to transition on the first mount set `appear` to `true`, and the
           * component will transition in as soon as the `<Transition>` mounts.
           *
           * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
           */
          appear: PropTypes$$1.bool,

          /**
           * Enable or disable enter transitions.
           */
          enter: PropTypes$$1.bool,

          /**
           * Enable or disable exit transitions.
           */
          exit: PropTypes$$1.bool,

          /**
           * The duration of the transition, in milliseconds.
           * Required unless `addEndListener` is provided
           *
           * You may specify a single timeout for all transitions like: `timeout={500}`,
           * or individually like:
           *
           * ```jsx
           * timeout={{
           *  enter: 300,
           *  exit: 500,
           * }}
           * ```
           *
           * @type {number | { enter?: number, exit?: number }}
           */
          timeout: function timeout(props) {
            for (
              var _len = arguments.length,
                args = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            var pt = PropTypes$1.timeoutsShape;
            if (!props.addEndListener) pt = pt.isRequired;
            return pt.apply(undefined, [props].concat(args));
          },

          /**
           * Add a custom transition end trigger. Called with the transitioning
           * DOM node and a `done` callback. Allows for more fine grained transition end
           * logic. **Note:** Timeouts are still used as a fallback if provided.
           *
           * ```jsx
           * addEndListener={(node, done) => {
           *   // use the css transitionend event to mark the finish of a transition
           *   node.addEventListener('transitionend', done, false);
           * }}
           * ```
           */
          addEndListener: PropTypes$$1.func,

          /**
           * Callback fired before the "entering" status is applied. An extra parameter
           * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
           *
           * @type Function(node: HtmlElement, isAppearing: bool) -> void
           */
          onEnter: PropTypes$$1.func,

          /**
           * Callback fired after the "entering" status is applied. An extra parameter
           * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
           *
           * @type Function(node: HtmlElement, isAppearing: bool)
           */
          onEntering: PropTypes$$1.func,

          /**
           * Callback fired after the "entered" status is applied. An extra parameter
           * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
           *
           * @type Function(node: HtmlElement, isAppearing: bool) -> void
           */
          onEntered: PropTypes$$1.func,

          /**
           * Callback fired before the "exiting" status is applied.
           *
           * @type Function(node: HtmlElement) -> void
           */
          onExit: PropTypes$$1.func,

          /**
           * Callback fired after the "exiting" status is applied.
           *
           * @type Function(node: HtmlElement) -> void
           */
          onExiting: PropTypes$$1.func,

          /**
           * Callback fired after the "exited" status is applied.
           *
           * @type Function(node: HtmlElement) -> void
           */
          onExited: PropTypes$$1.func,
        }
      : {};

  // Name the function so it is clearer in the documentation
  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,

    onEnter: noop,
    onEntering: noop,
    onEntered: noop,

    onExit: noop,
    onExiting: noop,
    onExited: noop,
  };

  Transition.UNMOUNTED = 0;
  Transition.EXITED = 1;
  Transition.ENTERING = 2;
  Transition.ENTERED = 3;
  Transition.EXITING = 4;

  exports.default = Transition;
});

var Transition = unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var _collapseStyles;

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight'],
};

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

function getDimensionValue(dimension, elem) {
  var value = elem['offset' + capitalize(dimension)];
  var margins = MARGINS[dimension];

  return (
    value +
    parseInt(css(elem, margins[0]), 10) +
    parseInt(css(elem, margins[1]), 10)
  );
}

var collapseStyles = ((_collapseStyles = {}),
(_collapseStyles[Transition_5] = 'collapse'),
(_collapseStyles[Transition_2] = 'collapsing'),
(_collapseStyles[Transition_4] = 'collapsing'),
(_collapseStyles[Transition_3] = 'collapse in'),
_collapseStyles);

var propTypes$16 = {
  /**
   * Show the component; triggers the expand or collapse animation
   */
  in: PropTypes.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is collapsed
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Run the expand animation when the component mounts, if it is initially
   * shown
   */
  appear: PropTypes.bool,

  /**
   * Duration of the collapse animation in milliseconds, to ensure that
   * finishing callbacks are fired even if the original browser transition end
   * events are canceled
   */
  timeout: PropTypes.number,

  /**
   * Callback fired before the component expands
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the component starts to expand
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the component has expanded
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the component collapses
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the component has collapsed
   */
  onExited: PropTypes.func,

  /**
   * The dimension used when collapsing, or a function that returns the
   * dimension
   *
   * _Note: Bootstrap only partially supports 'width'!
   * You will need to supply your own CSS animation for the `.width` CSS class._
   */
  dimension: PropTypes.oneOfType([
    PropTypes.oneOf(['height', 'width']),
    PropTypes.func,
  ]),

  /**
   * Function that returns the height or width of the animating DOM node
   *
   * Allows for providing some custom logic for how much the Collapse component
   * should animate in its specified dimension. Called with the current
   * dimension prop value and the DOM node.
   */
  getDimensionValue: PropTypes.func,

  /**
   * ARIA role of collapsible element
   */
  role: PropTypes.string,
};

var defaultProps$15 = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,

  dimension: 'height',
  getDimensionValue: getDimensionValue,
};

var Collapse = (function(_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    var _temp, _this, _ret;

    _classCallCheck(this, Collapse);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        _React$Component.call.apply(_React$Component, [this].concat(args)),
      )),
      _this)),
      (_this.handleEnter = function(elem) {
        elem.style[_this.getDimension()] = '0';
      }),
      (_this.handleEntering = function(elem) {
        var dimension = _this.getDimension();
        elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
      }),
      (_this.handleEntered = function(elem) {
        elem.style[_this.getDimension()] = null;
      }),
      (_this.handleExit = function(elem) {
        var dimension = _this.getDimension();
        elem.style[dimension] =
          _this.props.getDimensionValue(dimension, elem) + 'px';
        triggerBrowserReflow(elem);
      }),
      (_this.handleExiting = function(elem) {
        elem.style[_this.getDimension()] = '0';
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  Collapse.prototype.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function'
      ? this.props.dimension()
      : this.props.dimension;
  };

  // for testing

  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(
    elem,
    dimension,
  ) {
    return elem['scroll' + capitalize(dimension)] + 'px';
  };

  /* -- Expanding -- */

  /* -- Collapsing -- */

  Collapse.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
      onEnter = _props.onEnter,
      onEntering = _props.onEntering,
      onEntered = _props.onEntered,
      onExit = _props.onExit,
      onExiting = _props.onExiting,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'onEnter',
        'onEntering',
        'onEntered',
        'onExit',
        'onExiting',
        'className',
        'children',
      ]);

    delete props.dimension;
    delete props.getDimensionValue;

    var handleEnter = createChainedFunction(this.handleEnter, onEnter);
    var handleEntering = createChainedFunction(this.handleEntering, onEntering);
    var handleEntered = createChainedFunction(this.handleEntered, onEntered);
    var handleExit = createChainedFunction(this.handleExit, onExit);
    var handleExiting = createChainedFunction(this.handleExiting, onExiting);

    return React.createElement(
      Transition,
      _extends$2({}, props, {
        'aria-expanded': props.role ? props.in : null,
        onEnter: handleEnter,
        onEntering: handleEntering,
        onEntered: handleEntered,
        onExit: handleExit,
        onExiting: handleExiting,
      }),
      function(state, innerProps) {
        return React.cloneElement(
          children,
          _extends$2({}, innerProps, {
            className: classnames(
              className,
              children.props.className,
              collapseStyles[state],
              _this2.getDimension() === 'width' && 'width',
            ),
          }),
        );
      },
    );
  };

  return Collapse;
})(React.Component);

Collapse.propTypes = propTypes$16;
Collapse.defaultProps = defaultProps$15;

var ownerDocument_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = ownerDocument;
  function ownerDocument(node) {
    return (node && node.ownerDocument) || document;
  }
  module.exports = exports['default'];
});

var ownerDocument = unwrapExports(ownerDocument_1);

var activeElement_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = activeElement;

  var _ownerDocument2 = _interopRequireDefault(ownerDocument_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function activeElement() {
    var doc =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : (0, _ownerDocument2.default)();

    try {
      return doc.activeElement;
    } catch (e) {
      /* ie throws if no active element */
    }
  }
  module.exports = exports['default'];
});

var activeElement = unwrapExports(activeElement_1);

var contains = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.default = (function() {
    // HTML DOM and SVG DOM may have different support levels,
    // so we need to check on context instead of a document root element.
    return _inDOM2.default
      ? function(context, node) {
          if (context.contains) {
            return context.contains(node);
          } else if (context.compareDocumentPosition) {
            return (
              context === node || !!(context.compareDocumentPosition(node) & 16)
            );
          } else {
            return fallback(context, node);
          }
        }
      : fallback;
  })();

  function fallback(context, node) {
    if (node)
      do {
        if (node === context) return true;
      } while ((node = node.parentNode));

    return false;
  }
  module.exports = exports['default'];
});

var contains$1 = unwrapExports(contains);

var keycode = createCommonjsModule(function(module, exports) {
  // Source: http://jsfiddle.net/vWx8V/
  // http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

  /**
   * Conenience method returns corresponding value for given keyName or keyCode.
   *
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Mixed}
   * @api public
   */

  function keyCode(searchInput) {
    // Keyboard Events
    if (searchInput && 'object' === typeof searchInput) {
      var hasKeyCode =
        searchInput.which || searchInput.keyCode || searchInput.charCode;
      if (hasKeyCode) searchInput = hasKeyCode;
    }

    // Numbers
    if ('number' === typeof searchInput) return names[searchInput];

    // Everything else (cast to string)
    var search = String(searchInput);

    // check codes
    var foundNamedKey = codes[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey;

    // check aliases
    var foundNamedKey = aliases[search.toLowerCase()];
    if (foundNamedKey) return foundNamedKey;

    // weird character?
    if (search.length === 1) return search.charCodeAt(0);

    return undefined;
  }

  /**
   * Compares a keyboard event with a given keyCode or keyName.
   *
   * @param {Event} event Keyboard event that should be tested
   * @param {Mixed} keyCode {Number} or keyName {String}
   * @return {Boolean}
   * @api public
   */
  keyCode.isEventKey = function isEventKey(event, nameOrCode) {
    if (event && 'object' === typeof event) {
      var keyCode = event.which || event.keyCode || event.charCode;
      if (keyCode === null || keyCode === undefined) {
        return false;
      }
      if (typeof nameOrCode === 'string') {
        // check codes
        var foundNamedKey = codes[nameOrCode.toLowerCase()];
        if (foundNamedKey) {
          return foundNamedKey === keyCode;
        }

        // check aliases
        var foundNamedKey = aliases[nameOrCode.toLowerCase()];
        if (foundNamedKey) {
          return foundNamedKey === keyCode;
        }
      } else if (typeof nameOrCode === 'number') {
        return nameOrCode === keyCode;
      }
      return false;
    }
  };

  exports = module.exports = keyCode;

  /**
   * Get by name
   *
   *   exports.code['enter'] // => 13
   */

  var codes = (exports.code = exports.codes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    'pause/break': 19,
    'caps lock': 20,
    esc: 27,
    space: 32,
    'page up': 33,
    'page down': 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    delete: 46,
    command: 91,
    'left command': 91,
    'right command': 93,
    'numpad *': 106,
    'numpad +': 107,
    'numpad -': 109,
    'numpad .': 110,
    'numpad /': 111,
    'num lock': 144,
    'scroll lock': 145,
    'my computer': 182,
    'my calculator': 183,
    ';': 186,
    '=': 187,
    ',': 188,
    '-': 189,
    '.': 190,
    '/': 191,
    '`': 192,
    '[': 219,
    '\\': 220,
    ']': 221,
    "'": 222,
  });

  // Helper aliases

  var aliases = (exports.aliases = {
    windows: 91,
    '⇧': 16,
    '⌥': 18,
    '⌃': 17,
    '⌘': 91,
    ctl: 17,
    control: 17,
    option: 18,
    pause: 19,
    break: 19,
    caps: 20,
    return: 13,
    escape: 27,
    spc: 32,
    spacebar: 32,
    pgup: 33,
    pgdn: 34,
    ins: 45,
    del: 46,
    cmd: 91,
  });

  /*!
 * Programatically add the following
 */

  // lower case chars
  for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

  // numbers
  for (var i = 48; i < 58; i++) codes[i - 48] = i;

  // function keys
  for (i = 1; i < 13; i++) codes['f' + i] = i + 111;

  // numpad keys
  for (i = 0; i < 10; i++) codes['numpad ' + i] = i + 96;

  /**
   * Get by code
   *
   *   exports.name[13] // => 'Enter'
   */

  var names = (exports.names = exports.title = {}); // title for backward compat

  // Create reverse mapping
  for (i in codes) names[codes[i]] = i;

  // Add aliases
  for (var alias in aliases) {
    codes[alias] = aliases[alias];
  }
});

var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;

var isRequiredForA11y_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = isRequiredForA11y;
  function isRequiredForA11y(validator) {
    return function validate(
      props,
      propName,
      componentName,
      location,
      propFullName,
    ) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      if (props[propName] == null) {
        return new Error(
          'The ' +
            location +
            ' `' +
            propFullNameSafe +
            '` is required to make ' +
            ('`' + componentNameSafe + '` accessible for users of assistive ') +
            'technologies such as screen readers.',
        );
      }

      for (
        var _len = arguments.length,
          args = Array(_len > 5 ? _len - 5 : 0),
          _key = 5;
        _key < _len;
        _key++
      ) {
        args[_key - 5] = arguments[_key];
      }

      return validator.apply(
        undefined,
        [props, propName, componentName, location, propFullName].concat(args),
      );
    };
  }
  module.exports = exports['default'];
});

var isRequiredForA11y = unwrapExports(isRequiredForA11y_1);

// call something on iterator step with safe closing on error

var _iterCall = function(iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function(it) {
  return (
    it !== undefined &&
    (_iterators.Array === it || ArrayProto[ITERATOR$1] === it)
  );
};

var _createProperty = function(object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG =
  _cof(
    (function() {
      return arguments;
    })(),
  ) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

var _classof = function(it) {
  var O, T, B;
  return it === undefined
    ? 'Undefined'
    : it === null
      ? 'Null'
      : // @@toStringTag case
        typeof (T = tryGet((O = Object(it)), TAG$1)) == 'string'
        ? T
        : // builtinTag case
          ARG
          ? _cof(O)
          : // ES3 arguments fallback
            (B = _cof(O)) == 'Object' && typeof O.callee == 'function'
            ? 'Arguments'
            : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = (_core.getIteratorMethod = function(it) {
  if (it != undefined)
    return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
});

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function() {
    SAFE_CLOSING = true;
  };
  // eslint-disable-next-line no-throw-literal
} catch (e) {
  /* empty */
}

var _iterDetect = function(exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function() {
      return { done: (safe = true) };
    };
    arr[ITERATOR$3] = function() {
      return iter;
    };
    exec(arr);
  } catch (e) {
    /* empty */
  }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function(iter) {}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(
    arrayLike /* , mapfn = undefined, thisArg = undefined */,
  ) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (
        iterator = iterFn.call(O), result = new C();
        !(step = iterator.next()).done;
        index++
      ) {
        _createProperty(
          result,
          index,
          mapping
            ? _iterCall(iterator, mapfn, [step.value, index], true)
            : step.value,
        );
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(
          result,
          index,
          mapping ? mapfn(O[index], index) : O[index],
        );
      }
    }
    result.length = index;
    return result;
  },
});

var from = _core.Array.from;

var from$2 = createCommonjsModule(function(module) {
  module.exports = { default: from, __esModule: true };
});

var _Array$from = unwrapExports(from$2);

var on_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var on = function on() {};
  if (_inDOM2.default) {
    on = (function() {
      if (document.addEventListener)
        return function(node, eventName, handler, capture) {
          return node.addEventListener(eventName, handler, capture || false);
        };
      else if (document.attachEvent)
        return function(node, eventName, handler) {
          return node.attachEvent('on' + eventName, function(e) {
            e = e || window.event;
            e.target = e.target || e.srcElement;
            e.currentTarget = node;
            handler.call(node, e);
          });
        };
    })();
  }

  exports.default = on;
  module.exports = exports['default'];
});

unwrapExports(on_1);

var off_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var off = function off() {};
  if (_inDOM2.default) {
    off = (function() {
      if (document.addEventListener)
        return function(node, eventName, handler, capture) {
          return node.removeEventListener(eventName, handler, capture || false);
        };
      else if (document.attachEvent)
        return function(node, eventName, handler) {
          return node.detachEvent('on' + eventName, handler);
        };
    })();
  }

  exports.default = off;
  module.exports = exports['default'];
});

unwrapExports(off_1);

var addEventListener = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  exports.default = function(node, event, handler, capture) {
    (0, _on2.default)(node, event, handler, capture);

    return {
      remove: function remove() {
        (0, _off2.default)(node, event, handler, capture);
      },
    };
  };

  var _on2 = _interopRequireDefault(on_1);

  var _off2 = _interopRequireDefault(off_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  module.exports = exports['default'];
});

unwrapExports(addEventListener);

var ownerDocument$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  exports.default = function(componentOrElement) {
    return (0, _ownerDocument2.default)(
      _reactDom2.default.findDOMNode(componentOrElement),
    );
  };

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  module.exports = exports['default'];
});

unwrapExports(ownerDocument$1);

var RootCloseWrapper_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _contains2 = _interopRequireDefault(contains);

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _react2 = _interopRequireDefault(React);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _addEventListener2 = _interopRequireDefault(addEventListener);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument$1);

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

  var escapeKeyCode = 27;

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  /**
   * The `<RootCloseWrapper/>` component registers your callback on the document
   * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
   * style behavior where your callback is triggered when the user tries to
   * interact with the rest of the document or hits the `esc` key.
   */

  var RootCloseWrapper = (function(_React$Component) {
    _inherits(RootCloseWrapper, _React$Component);

    function RootCloseWrapper(props, context) {
      _classCallCheck(this, RootCloseWrapper);

      var _this = _possibleConstructorReturn(
        this,
        _React$Component.call(this, props, context),
      );

      _this.addEventListeners = function() {
        var event = _this.props.event;

        var doc = (0, _ownerDocument2.default)(_this);

        // Use capture for this listener so it fires before React's listener, to
        // avoid false positives in the contains() check below if the target DOM
        // element is removed in the React mouse callback.
        _this.documentMouseCaptureListener = (0, _addEventListener2.default)(
          doc,
          event,
          _this.handleMouseCapture,
          true,
        );

        _this.documentMouseListener = (0, _addEventListener2.default)(
          doc,
          event,
          _this.handleMouse,
        );

        _this.documentKeyupListener = (0, _addEventListener2.default)(
          doc,
          'keyup',
          _this.handleKeyUp,
        );
      };

      _this.removeEventListeners = function() {
        if (_this.documentMouseCaptureListener) {
          _this.documentMouseCaptureListener.remove();
        }

        if (_this.documentMouseListener) {
          _this.documentMouseListener.remove();
        }

        if (_this.documentKeyupListener) {
          _this.documentKeyupListener.remove();
        }
      };

      _this.handleMouseCapture = function(e) {
        _this.preventMouseRootClose =
          isModifiedEvent(e) ||
          !isLeftClickEvent(e) ||
          (0, _contains2.default)(
            _reactDom2.default.findDOMNode(_this),
            e.target,
          );
      };

      _this.handleMouse = function(e) {
        if (!_this.preventMouseRootClose && _this.props.onRootClose) {
          _this.props.onRootClose(e);
        }
      };

      _this.handleKeyUp = function(e) {
        if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
          _this.props.onRootClose(e);
        }
      };

      _this.preventMouseRootClose = false;
      return _this;
    }

    RootCloseWrapper.prototype.componentDidMount = function componentDidMount() {
      if (!this.props.disabled) {
        this.addEventListeners();
      }
    };

    RootCloseWrapper.prototype.componentDidUpdate = function componentDidUpdate(
      prevProps,
    ) {
      if (!this.props.disabled && prevProps.disabled) {
        this.addEventListeners();
      } else if (this.props.disabled && !prevProps.disabled) {
        this.removeEventListeners();
      }
    };

    RootCloseWrapper.prototype.componentWillUnmount = function componentWillUnmount() {
      if (!this.props.disabled) {
        this.removeEventListeners();
      }
    };

    RootCloseWrapper.prototype.render = function render() {
      return this.props.children;
    };

    return RootCloseWrapper;
  })(_react2.default.Component);

  RootCloseWrapper.displayName = 'RootCloseWrapper';

  RootCloseWrapper.propTypes = {
    /**
     * Callback fired after click or mousedown. Also triggers when user hits `esc`.
     */
    onRootClose: _propTypes2.default.func,
    /**
     * Children to render.
     */
    children: _propTypes2.default.element,
    /**
     * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
     */
    disabled: _propTypes2.default.bool,
    /**
     * Choose which document mouse event to bind to.
     */
    event: _propTypes2.default.oneOf(['click', 'mousedown']),
  };

  RootCloseWrapper.defaultProps = {
    event: 'click',
  };

  exports.default = RootCloseWrapper;
  module.exports = exports['default'];
});

var RootCloseWrapper = unwrapExports(RootCloseWrapper_1);

var propTypes$17 = {
  open: PropTypes.bool,
  pullRight: PropTypes.bool,
  onClose: PropTypes.func,
  labelledBy: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown']),
};

var defaultProps$16 = {
  bsRole: 'menu',
  pullRight: false,
};

var DropdownMenu = (function(_React$Component) {
  _inherits(DropdownMenu, _React$Component);

  function DropdownMenu(props) {
    _classCallCheck(this, DropdownMenu);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props),
    );

    _this.handleRootClose = _this.handleRootClose.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  DropdownMenu.prototype.getFocusableMenuItems = function getFocusableMenuItems() {
    var node = _reactDom.findDOMNode(this);
    if (!node) {
      return [];
    }

    return _Array$from(node.querySelectorAll('[tabIndex="-1"]'));
  };

  DropdownMenu.prototype.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
    var items = this.getFocusableMenuItems();
    var activeIndex = items.indexOf(document.activeElement);

    return { items: items, activeIndex: activeIndex };
  };

  DropdownMenu.prototype.focusNext = function focusNext() {
    var _getItemsAndActiveInd = this.getItemsAndActiveIndex(),
      items = _getItemsAndActiveInd.items,
      activeIndex = _getItemsAndActiveInd.activeIndex;

    if (items.length === 0) {
      return;
    }

    var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    items[nextIndex].focus();
  };

  DropdownMenu.prototype.focusPrevious = function focusPrevious() {
    var _getItemsAndActiveInd2 = this.getItemsAndActiveIndex(),
      items = _getItemsAndActiveInd2.items,
      activeIndex = _getItemsAndActiveInd2.activeIndex;

    if (items.length === 0) {
      return;
    }

    var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    items[prevIndex].focus();
  };

  DropdownMenu.prototype.handleKeyDown = function handleKeyDown(event) {
    switch (event.keyCode) {
      case keycode.codes.down:
        this.focusNext();
        event.preventDefault();
        break;
      case keycode.codes.up:
        this.focusPrevious();
        event.preventDefault();
        break;
      case keycode.codes.esc:
      case keycode.codes.tab:
        this.props.onClose(event, { source: 'keydown' });
        break;
      default:
    }
  };

  DropdownMenu.prototype.handleRootClose = function handleRootClose(event) {
    this.props.onClose(event, { source: 'rootClose' });
  };

  DropdownMenu.prototype.render = function render() {
    var _extends2,
      _this2 = this;

    var _props = this.props,
      open = _props.open,
      pullRight = _props.pullRight,
      labelledBy = _props.labelledBy,
      onSelect = _props.onSelect,
      className = _props.className,
      rootCloseEvent = _props.rootCloseEvent,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'open',
        'pullRight',
        'labelledBy',
        'onSelect',
        'className',
        'rootCloseEvent',
        'children',
      ]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['onClose']),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps, 'right')] = pullRight),
      _extends2),
    );

    return React.createElement(
      RootCloseWrapper,
      {
        disabled: !open,
        onRootClose: this.handleRootClose,
        event: rootCloseEvent,
      },
      React.createElement(
        'ul',
        _extends$2({}, elementProps, {
          role: 'menu',
          className: classnames(className, classes),
          'aria-labelledby': labelledBy,
        }),
        ValidChildren.map(children, function(child) {
          return React.cloneElement(child, {
            onKeyDown: createChainedFunction(
              child.props.onKeyDown,
              _this2.handleKeyDown,
            ),
            onSelect: createChainedFunction(child.props.onSelect, onSelect),
          });
        }),
      ),
    );
  };

  return DropdownMenu;
})(React.Component);

DropdownMenu.propTypes = propTypes$17;
DropdownMenu.defaultProps = defaultProps$16;

var DropdownMenu$1 = bsClass('dropdown-menu', DropdownMenu);

var propTypes$18 = {
  noCaret: PropTypes.bool,
  open: PropTypes.bool,
  title: PropTypes.string,
  useAnchor: PropTypes.bool,
};

var defaultProps$17 = {
  open: false,
  useAnchor: false,
  bsRole: 'toggle',
};

var DropdownToggle = (function(_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  DropdownToggle.prototype.render = function render() {
    var _props = this.props,
      noCaret = _props.noCaret,
      open = _props.open,
      useAnchor = _props.useAnchor,
      bsClass$$1 = _props.bsClass,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'noCaret',
        'open',
        'useAnchor',
        'bsClass',
        'className',
        'children',
      ]);

    delete props.bsRole;

    var Component = useAnchor ? SafeAnchor : RBButton;
    var useCaret = !noCaret;

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    // FIXME: Should this really fall back to `title` as children?

    return React.createElement(
      Component,
      _extends$2({}, props, {
        role: 'button',
        className: classnames(className, bsClass$$1),
        'aria-haspopup': true,
        'aria-expanded': open,
      }),
      children || props.title,
      useCaret && ' ',
      useCaret && React.createElement('span', { className: 'caret' }),
    );
  };

  return DropdownToggle;
})(React.Component);

DropdownToggle.propTypes = propTypes$18;
DropdownToggle.defaultProps = defaultProps$17;

var DropdownToggle$1 = bsClass('dropdown-toggle', DropdownToggle);

var TOGGLE_ROLE = DropdownToggle$1.defaultProps.bsRole;
var MENU_ROLE = DropdownMenu$1.defaultProps.bsRole;

var propTypes$19 = {
  /**
   * The menu will open above the dropdown button, instead of below it.
   */
  dropup: PropTypes.bool,

  /**
   * An html id attribute, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  componentClass: elementType,

  /**
   * The children of a Dropdown may be a `<Dropdown.Toggle>` or a `<Dropdown.Menu>`.
   * @type {node}
   */
  children: all(
    requiredRoles(TOGGLE_ROLE, MENU_ROLE),
    exclusiveRoles(MENU_ROLE),
  ),

  /**
   * Whether or not component is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Align the menu to the right side of the Dropdown toggle
   */
  pullRight: PropTypes.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  open: PropTypes.bool,

  defaultOpen: PropTypes.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `open` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(Boolean isOpen, Object event, { String source }) {}
   * ```
   * @controllable open
   */
  onToggle: PropTypes.func,

  /**
   * A callback fired when a menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: PropTypes.func,

  /**
   * If `'menuitem'`, causes the dropdown to behave like a menu item rather than
   * a menu button.
   */
  role: PropTypes.string,

  /**
   * Which event when fired outside the component will cause it to be closed
   *
   * *Note: For custom dropdown components, you will have to pass the
   * `rootCloseEvent` to `<RootCloseWrapper>` in your custom dropdown menu
   * component ([similarly to how it is implemented in `<Dropdown.Menu>`](https://github.com/react-bootstrap/react-bootstrap/blob/v0.31.5/src/DropdownMenu.js#L115-L119)).*
   */
  rootCloseEvent: PropTypes.oneOf(['click', 'mousedown']),

  /**
   * @private
   */
  onMouseEnter: PropTypes.func,
  /**
   * @private
   */
  onMouseLeave: PropTypes.func,
};

var defaultProps$18 = {
  componentClass: ButtonGroup$1,
};

var Dropdown = (function(_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props, context) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);

    _this._focusInDropdown = false;
    _this.lastOpenEventType = null;
    return _this;
  }

  Dropdown.prototype.componentDidMount = function componentDidMount() {
    this.focusNextOnOpen();
  };

  Dropdown.prototype.componentWillUpdate = function componentWillUpdate(
    nextProps,
  ) {
    if (!nextProps.open && this.props.open) {
      this._focusInDropdown = contains$1(
        _reactDom.findDOMNode(this.menu),
        activeElement(document),
      );
    }
  };

  Dropdown.prototype.componentDidUpdate = function componentDidUpdate(
    prevProps,
  ) {
    var open = this.props.open;

    var prevOpen = prevProps.open;

    if (open && !prevOpen) {
      this.focusNextOnOpen();
    }

    if (!open && prevOpen) {
      // if focus hasn't already moved from the menu let's return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  Dropdown.prototype.focus = function focus() {
    var toggle = _reactDom.findDOMNode(this.toggle);

    if (toggle && toggle.focus) {
      toggle.focus();
    }
  };

  Dropdown.prototype.focusNextOnOpen = function focusNextOnOpen() {
    var menu = this.menu;

    if (!menu.focusNext) {
      return;
    }

    if (
      this.lastOpenEventType === 'keydown' ||
      this.props.role === 'menuitem'
    ) {
      menu.focusNext();
    }
  };

  Dropdown.prototype.handleClick = function handleClick(event) {
    if (this.props.disabled) {
      return;
    }

    this.toggleOpen(event, { source: 'click' });
  };

  Dropdown.prototype.handleClose = function handleClose(event, eventDetails) {
    if (!this.props.open) {
      return;
    }

    this.toggleOpen(event, eventDetails);
  };

  Dropdown.prototype.handleKeyDown = function handleKeyDown(event) {
    if (this.props.disabled) {
      return;
    }

    switch (event.keyCode) {
      case keycode.codes.down:
        if (!this.props.open) {
          this.toggleOpen(event, { source: 'keydown' });
        } else if (this.menu.focusNext) {
          this.menu.focusNext();
        }
        event.preventDefault();
        break;
      case keycode.codes.esc:
      case keycode.codes.tab:
        this.handleClose(event, { source: 'keydown' });
        break;
      default:
    }
  };

  Dropdown.prototype.toggleOpen = function toggleOpen(event, eventDetails) {
    var open = !this.props.open;

    if (open) {
      this.lastOpenEventType = eventDetails.source;
    }

    if (this.props.onToggle) {
      this.props.onToggle(open, event, eventDetails);
    }
  };

  Dropdown.prototype.renderMenu = function renderMenu(child, _ref) {
    var _this2 = this;

    var id = _ref.id,
      onSelect = _ref.onSelect,
      rootCloseEvent = _ref.rootCloseEvent,
      props = _objectWithoutProperties(_ref, [
        'id',
        'onSelect',
        'rootCloseEvent',
      ]);

    var ref = function ref(c) {
      _this2.menu = c;
    };

    if (typeof child.ref === 'string') {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            false,
            'String refs are not supported on `<Dropdown.Menu>` components. ' +
              'To apply a ref to the component use the callback signature:\n\n ' +
              'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute',
          )
        : void 0;
    } else {
      ref = createChainedFunction(child.ref, ref);
    }

    return cloneElement(
      child,
      _extends$2({}, props, {
        ref: ref,
        labelledBy: id,
        bsClass: prefix(props, 'menu'),
        onClose: createChainedFunction(child.props.onClose, this.handleClose),
        onSelect: createChainedFunction(
          child.props.onSelect,
          onSelect,
          function(key, event) {
            return _this2.handleClose(event, { source: 'select' });
          },
        ),
        rootCloseEvent: rootCloseEvent,
      }),
    );
  };

  Dropdown.prototype.renderToggle = function renderToggle(child, props) {
    var _this3 = this;

    var ref = function ref(c) {
      _this3.toggle = c;
    };

    if (typeof child.ref === 'string') {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            false,
            'String refs are not supported on `<Dropdown.Toggle>` components. ' +
              'To apply a ref to the component use the callback signature:\n\n ' +
              'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute',
          )
        : void 0;
    } else {
      ref = createChainedFunction(child.ref, ref);
    }

    return cloneElement(
      child,
      _extends$2({}, props, {
        ref: ref,
        bsClass: prefix(props, 'toggle'),
        onClick: createChainedFunction(child.props.onClick, this.handleClick),
        onKeyDown: createChainedFunction(
          child.props.onKeyDown,
          this.handleKeyDown,
        ),
      }),
    );
  };

  Dropdown.prototype.render = function render() {
    var _classes,
      _this4 = this;

    var _props = this.props,
      Component = _props.componentClass,
      id = _props.id,
      dropup = _props.dropup,
      disabled = _props.disabled,
      pullRight = _props.pullRight,
      open = _props.open,
      onSelect = _props.onSelect,
      role = _props.role,
      bsClass$$1 = _props.bsClass,
      className = _props.className,
      rootCloseEvent = _props.rootCloseEvent,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'componentClass',
        'id',
        'dropup',
        'disabled',
        'pullRight',
        'open',
        'onSelect',
        'role',
        'bsClass',
        'className',
        'rootCloseEvent',
        'children',
      ]);

    delete props.onToggle;

    var classes = ((_classes = {}),
    (_classes[bsClass$$1] = true),
    (_classes.open = open),
    (_classes.disabled = disabled),
    _classes);

    if (dropup) {
      classes[bsClass$$1] = false;
      classes.dropup = true;
    }

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    return React.createElement(
      Component,
      _extends$2({}, props, { className: classnames(className, classes) }),
      ValidChildren.map(children, function(child) {
        switch (child.props.bsRole) {
          case TOGGLE_ROLE:
            return _this4.renderToggle(child, {
              id: id,
              disabled: disabled,
              open: open,
              role: role,
              bsClass: bsClass$$1,
            });
          case MENU_ROLE:
            return _this4.renderMenu(child, {
              id: id,
              open: open,
              pullRight: pullRight,
              bsClass: bsClass$$1,
              onSelect: onSelect,
              rootCloseEvent: rootCloseEvent,
            });
          default:
            return child;
        }
      }),
    );
  };

  return Dropdown;
})(React.Component);

Dropdown.propTypes = propTypes$19;
Dropdown.defaultProps = defaultProps$18;

bsClass('dropdown', Dropdown);

var UncontrolledDropdown = uncontrollable$1(Dropdown, { open: 'onToggle' });

UncontrolledDropdown.Toggle = DropdownToggle$1;
UncontrolledDropdown.Menu = DropdownMenu$1;

function splitComponentProps(props, Component) {
  var componentPropTypes = Component.propTypes;

  var parentProps = {};
  var childProps = {};

  _Object$entries(props).forEach(function(_ref) {
    var propName = _ref[0],
      propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });

  return [parentProps, childProps];
}

var propTypes$20 = _extends$2({}, UncontrolledDropdown.propTypes, {
  // Toggle props.
  bsStyle: PropTypes.string,
  bsSize: PropTypes.string,
  title: PropTypes.node.isRequired,
  noCaret: PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node,
});

var DropdownButton = (function(_React$Component) {
  _inherits(DropdownButton, _React$Component);

  function DropdownButton() {
    _classCallCheck(this, DropdownButton);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  DropdownButton.prototype.render = function render() {
    var _props = this.props,
      bsSize = _props.bsSize,
      bsStyle = _props.bsStyle,
      title = _props.title,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'bsSize',
        'bsStyle',
        'title',
        'children',
      ]);

    var _splitComponentProps = splitComponentProps(
        props,
        UncontrolledDropdown.ControlledComponent,
      ),
      dropdownProps = _splitComponentProps[0],
      toggleProps = _splitComponentProps[1];

    return React.createElement(
      UncontrolledDropdown,
      _extends$2({}, dropdownProps, { bsSize: bsSize, bsStyle: bsStyle }),
      React.createElement(
        UncontrolledDropdown.Toggle,
        _extends$2({}, toggleProps, { bsSize: bsSize, bsStyle: bsStyle }),
        title,
      ),
      React.createElement(UncontrolledDropdown.Menu, null, children),
    );
  };

  return DropdownButton;
})(React.Component);

DropdownButton.propTypes = propTypes$20;

var _fadeStyles;

var propTypes$21 = {
  /**
   * Show the component; triggers the fade in or fade out animation
   */
  in: PropTypes.bool,

  /**
   * Wait until the first "enter" transition to mount the component (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount the component (remove it from the DOM) when it is faded out
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Run the fade in animation when the component mounts, if it is initially
   * shown
   */
  appear: PropTypes.bool,

  /**
   * Duration of the fade animation in milliseconds, to ensure that finishing
   * callbacks are fired even if the original browser transition end events are
   * canceled
   */
  timeout: PropTypes.number,

  /**
   * Callback fired before the component fades in
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the component starts to fade in
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the has component faded in
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the component fades out
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the component starts to fade out
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the component has faded out
   */
  onExited: PropTypes.func,
};

var defaultProps$19 = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
};

var fadeStyles = ((_fadeStyles = {}),
(_fadeStyles[Transition_4] = 'in'),
(_fadeStyles[Transition_3] = 'in'),
_fadeStyles);

var Fade = (function(_React$Component) {
  _inherits(Fade, _React$Component);

  function Fade() {
    _classCallCheck(this, Fade);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Fade.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['className', 'children']);

    return React.createElement(Transition, props, function(status, innerProps) {
      return React.cloneElement(
        children,
        _extends$2({}, innerProps, {
          className: classnames(
            'fade',
            className,
            children.props.className,
            fadeStyles[status],
          ),
        }),
      );
    });
  };

  return Fade;
})(React.Component);

Fade.propTypes = propTypes$21;
Fade.defaultProps = defaultProps$19;

var propTypes$22 = {
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  componentClass: elementType,
};

var defaultProps$20 = {
  horizontal: false,
  inline: false,
  componentClass: 'form',
};

var Form = (function(_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Form.prototype.render = function render() {
    var _props = this.props,
      horizontal = _props.horizontal,
      inline = _props.inline,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'horizontal',
        'inline',
        'componentClass',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = [];
    if (horizontal) {
      classes.push(prefix(bsProps, 'horizontal'));
    }
    if (inline) {
      classes.push(prefix(bsProps, 'inline'));
    }

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Form;
})(React.Component);

Form.propTypes = propTypes$22;
Form.defaultProps = defaultProps$20;

bsClass('form', Form);

var defaultProps$21 = {
  bsRole: 'feedback',
};

var contextTypes$1 = {
  $bs_formGroup: PropTypes.object,
};

var FormControlFeedback = (function(_React$Component) {
  _inherits(FormControlFeedback, _React$Component);

  function FormControlFeedback() {
    _classCallCheck(this, FormControlFeedback);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  FormControlFeedback.prototype.getGlyph = function getGlyph(validationState) {
    switch (validationState) {
      case 'success':
        return 'ok';
      case 'warning':
        return 'warning-sign';
      case 'error':
        return 'remove';
      default:
        return null;
    }
  };

  FormControlFeedback.prototype.renderDefaultFeedback = function renderDefaultFeedback(
    formGroup,
    className,
    classes,
    elementProps,
  ) {
    var glyph = this.getGlyph(formGroup && formGroup.validationState);
    if (!glyph) {
      return null;
    }

    return React.createElement(
      Glyphicon$1,
      _extends$2({}, elementProps, {
        glyph: glyph,
        className: classnames(className, classes),
      }),
    );
  };

  FormControlFeedback.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['className', 'children']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (!children) {
      return this.renderDefaultFeedback(
        this.context.$bs_formGroup,
        className,
        classes,
        elementProps,
      );
    }

    var child = React.Children.only(children);
    return React.cloneElement(
      child,
      _extends$2({}, elementProps, {
        className: classnames(child.props.className, className, classes),
      }),
    );
  };

  return FormControlFeedback;
})(React.Component);

FormControlFeedback.defaultProps = defaultProps$21;
FormControlFeedback.contextTypes = contextTypes$1;

var FormControlFeedback$1 = bsClass(
  'form-control-feedback',
  FormControlFeedback,
);

var propTypes$23 = {
  componentClass: elementType,
};

var defaultProps$22 = {
  componentClass: 'p',
};

var FormControlStatic = (function(_React$Component) {
  _inherits(FormControlStatic, _React$Component);

  function FormControlStatic() {
    _classCallCheck(this, FormControlStatic);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  FormControlStatic.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return FormControlStatic;
})(React.Component);

FormControlStatic.propTypes = propTypes$23;
FormControlStatic.defaultProps = defaultProps$22;

var FormControlStatic$1 = bsClass('form-control-static', FormControlStatic);

var propTypes$24 = {
  componentClass: elementType,
  /**
   * Only relevant if `componentClass` is `'input'`.
   */
  type: PropTypes.string,
  /**
   * Uses `controlId` from `<FormGroup>` if not explicitly specified.
   */
  id: PropTypes.string,
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <FormControl inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func,
};

var defaultProps$23 = {
  componentClass: 'input',
};

var contextTypes$2 = {
  $bs_formGroup: PropTypes.object,
};

var FormControl = (function(_React$Component) {
  _inherits(FormControl, _React$Component);

  function FormControl() {
    _classCallCheck(this, FormControl);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  FormControl.prototype.render = function render() {
    var formGroup = this.context.$bs_formGroup;
    var controlId = formGroup && formGroup.controlId;

    var _props = this.props,
      Component = _props.componentClass,
      type = _props.type,
      _props$id = _props.id,
      id = _props$id === undefined ? controlId : _props$id,
      inputRef = _props.inputRef,
      className = _props.className,
      bsSize = _props.bsSize,
      props = _objectWithoutProperties(_props, [
        'componentClass',
        'type',
        'id',
        'inputRef',
        'className',
        'bsSize',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== 'production'
      ? warning_1(
          controlId == null || id === controlId,
          '`controlId` is ignored on `<FormControl>` when `id` is specified.',
        )
      : void 0;

    // input[type="file"] should not have .form-control.
    var classes = void 0;
    if (type !== 'file') {
      classes = getClassSet(bsProps);
    }

    // If user provides a size, make sure to append it to classes as input-
    // e.g. if bsSize is small, it will append input-sm
    if (bsSize) {
      var size = SIZE_MAP[bsSize] || bsSize;
      classes[prefix({ bsClass: 'input' }, size)] = true;
    }

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        type: type,
        id: id,
        ref: inputRef,
        className: classnames(className, classes),
      }),
    );
  };

  return FormControl;
})(React.Component);

FormControl.propTypes = propTypes$24;
FormControl.defaultProps = defaultProps$23;
FormControl.contextTypes = contextTypes$2;

FormControl.Feedback = FormControlFeedback$1;
FormControl.Static = FormControlStatic$1;

bsClass('form-control', bsSizes([Size.SMALL, Size.LARGE], FormControl));

var propTypes$25 = {
  /**
   * Sets `id` on `<FormControl>` and `htmlFor` on `<FormGroup.Label>`.
   */
  controlId: PropTypes.string,
  validationState: PropTypes.oneOf(['success', 'warning', 'error', null]),
};

var childContextTypes$1 = {
  $bs_formGroup: PropTypes.object.isRequired,
};

var FormGroup = (function(_React$Component) {
  _inherits(FormGroup, _React$Component);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  FormGroup.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
      controlId = _props.controlId,
      validationState = _props.validationState;

    return {
      $bs_formGroup: {
        controlId: controlId,
        validationState: validationState,
      },
    };
  };

  FormGroup.prototype.hasFeedback = function hasFeedback(children) {
    var _this2 = this;

    return ValidChildren.some(children, function(child) {
      return (
        child.props.bsRole === 'feedback' ||
        (child.props.children && _this2.hasFeedback(child.props.children))
      );
    });
  };

  FormGroup.prototype.render = function render() {
    var _props2 = this.props,
      validationState = _props2.validationState,
      className = _props2.className,
      children = _props2.children,
      props = _objectWithoutProperties(_props2, [
        'validationState',
        'className',
        'children',
      ]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['controlId']),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    var classes = _extends$2({}, getClassSet(bsProps), {
      'has-feedback': this.hasFeedback(children),
    });
    if (validationState) {
      classes['has-' + validationState] = true;
    }

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      children,
    );
  };

  return FormGroup;
})(React.Component);

FormGroup.propTypes = propTypes$25;
FormGroup.childContextTypes = childContextTypes$1;

bsClass('form-group', bsSizes([Size.LARGE, Size.SMALL], FormGroup));

var propTypes$26 = {
  /**
   * Turn any fixed-width grid layout into a full-width layout by this property.
   *
   * Adds `container-fluid` class.
   */
  fluid: PropTypes.bool,
  /**
   * You can use a custom element for this component
   */
  componentClass: elementType,
};

var defaultProps$24 = {
  componentClass: 'div',
  fluid: false,
};

var Grid = (function(_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Grid.prototype.render = function render() {
    var _props = this.props,
      fluid = _props.fluid,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'fluid',
        'componentClass',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = prefix(bsProps, fluid && 'fluid');

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Grid;
})(React.Component);

Grid.propTypes = propTypes$26;
Grid.defaultProps = defaultProps$24;

var Grid$1 = bsClass('container', Grid);

var HelpBlock = (function(_React$Component) {
  _inherits(HelpBlock, _React$Component);

  function HelpBlock() {
    _classCallCheck(this, HelpBlock);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  HelpBlock.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return HelpBlock;
})(React.Component);

bsClass('help-block', HelpBlock);

var propTypes$27 = {
  /**
   * Sets image as responsive image
   */
  responsive: PropTypes.bool,

  /**
   * Sets image shape as rounded
   */
  rounded: PropTypes.bool,

  /**
   * Sets image shape as circle
   */
  circle: PropTypes.bool,

  /**
   * Sets image shape as thumbnail
   */
  thumbnail: PropTypes.bool,
};

var defaultProps$25 = {
  responsive: false,
  rounded: false,
  circle: false,
  thumbnail: false,
};

var Image = (function(_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Image.prototype.render = function render() {
    var _classes;

    var _props = this.props,
      responsive = _props.responsive,
      rounded = _props.rounded,
      circle = _props.circle,
      thumbnail = _props.thumbnail,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'responsive',
        'rounded',
        'circle',
        'thumbnail',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = ((_classes = {}),
    (_classes[prefix(bsProps, 'responsive')] = responsive),
    (_classes[prefix(bsProps, 'rounded')] = rounded),
    (_classes[prefix(bsProps, 'circle')] = circle),
    (_classes[prefix(bsProps, 'thumbnail')] = thumbnail),
    _classes);

    return React.createElement(
      'img',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Image;
})(React.Component);

Image.propTypes = propTypes$27;
Image.defaultProps = defaultProps$25;

bsClass('img', Image);

var InputGroupAddon = (function(_React$Component) {
  _inherits(InputGroupAddon, _React$Component);

  function InputGroupAddon() {
    _classCallCheck(this, InputGroupAddon);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  InputGroupAddon.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return InputGroupAddon;
})(React.Component);

var InputGroupAddon$1 = bsClass('input-group-addon', InputGroupAddon);

var InputGroupButton = (function(_React$Component) {
  _inherits(InputGroupButton, _React$Component);

  function InputGroupButton() {
    _classCallCheck(this, InputGroupButton);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  InputGroupButton.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return InputGroupButton;
})(React.Component);

var InputGroupButton$1 = bsClass('input-group-btn', InputGroupButton);

var InputGroup = (function(_React$Component) {
  _inherits(InputGroup, _React$Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  InputGroup.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return InputGroup;
})(React.Component);

InputGroup.Addon = InputGroupAddon$1;
InputGroup.Button = InputGroupButton$1;

bsClass('input-group', bsSizes([Size.LARGE, Size.SMALL], InputGroup));

var propTypes$28 = {
  componentClass: elementType,
};

var defaultProps$26 = {
  componentClass: 'div',
};

var Jumbotron = (function(_React$Component) {
  _inherits(Jumbotron, _React$Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Jumbotron.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Jumbotron;
})(React.Component);

Jumbotron.propTypes = propTypes$28;
Jumbotron.defaultProps = defaultProps$26;

bsClass('jumbotron', Jumbotron);

var Label = (function(_React$Component) {
  _inherits(Label, _React$Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Label.prototype.hasContent = function hasContent(children) {
    var result = false;

    React.Children.forEach(children, function(child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });

    return result;
  };

  Label.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['className', 'children']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2({}, getClassSet(bsProps), {
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children),
    });

    return React.createElement(
      'span',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      children,
    );
  };

  return Label;
})(React.Component);

bsClass(
  'label',
  bsStyles(
    [].concat(_Object$values(State), [Style.DEFAULT, Style.PRIMARY]),
    Style.DEFAULT,
    Label,
  ),
);

var propTypes$29 = {
  active: PropTypes.any,
  disabled: PropTypes.any,
  header: PropTypes.node,
  listItem: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.string,
};

var defaultProps$27 = {
  listItem: false,
};

var ListGroupItem = (function(_React$Component) {
  _inherits(ListGroupItem, _React$Component);

  function ListGroupItem() {
    _classCallCheck(this, ListGroupItem);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ListGroupItem.prototype.renderHeader = function renderHeader(
    header,
    headingClassName,
  ) {
    if (React.isValidElement(header)) {
      return cloneElement(header, {
        className: classnames(header.props.className, headingClassName),
      });
    }

    return React.createElement('h4', { className: headingClassName }, header);
  };

  ListGroupItem.prototype.render = function render() {
    var _props = this.props,
      active = _props.active,
      disabled = _props.disabled,
      className = _props.className,
      header = _props.header,
      listItem = _props.listItem,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'active',
        'disabled',
        'className',
        'header',
        'listItem',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2({}, getClassSet(bsProps), {
      active: active,
      disabled: disabled,
    });

    var Component = void 0;

    if (elementProps.href) {
      Component = 'a';
    } else if (elementProps.onClick) {
      Component = 'button';
      elementProps.type = elementProps.type || 'button';
    } else if (listItem) {
      Component = 'li';
    } else {
      Component = 'span';
    }

    elementProps.className = classnames(className, classes);

    // TODO: Deprecate `header` prop.
    if (header) {
      return React.createElement(
        Component,
        elementProps,
        this.renderHeader(header, prefix(bsProps, 'heading')),
        React.createElement(
          'p',
          { className: prefix(bsProps, 'text') },
          children,
        ),
      );
    }

    return React.createElement(Component, elementProps, children);
  };

  return ListGroupItem;
})(React.Component);

ListGroupItem.propTypes = propTypes$29;
ListGroupItem.defaultProps = defaultProps$27;

var ListGroupItem$1 = bsClass(
  'list-group-item',
  bsStyles(_Object$values(State), ListGroupItem),
);

var propTypes$30 = {
  /**
   * You can use a custom element type for this component.
   *
   * If not specified, it will be treated as `'li'` if every child is a
   * non-actionable `<ListGroupItem>`, and `'div'` otherwise.
   */
  componentClass: elementType,
};

function getDefaultComponent(children) {
  if (!children) {
    // FIXME: This is the old behavior. Is this right?
    return 'div';
  }

  if (
    ValidChildren.some(children, function(child) {
      return (
        child.type !== ListGroupItem$1 ||
        child.props.href ||
        child.props.onClick
      );
    })
  ) {
    return 'div';
  }

  return 'ul';
}

var ListGroup = (function(_React$Component) {
  _inherits(ListGroup, _React$Component);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ListGroup.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      _props$componentClass = _props.componentClass,
      Component =
        _props$componentClass === undefined
          ? getDefaultComponent(children)
          : _props$componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'children',
        'componentClass',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    var useListItem =
      Component === 'ul' &&
      ValidChildren.every(children, function(child) {
        return child.type === ListGroupItem$1;
      });

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      useListItem
        ? ValidChildren.map(children, function(child) {
            return cloneElement(child, { listItem: true });
          })
        : children,
    );
  };

  return ListGroup;
})(React.Component);

ListGroup.propTypes = propTypes$30;

bsClass('list-group', ListGroup);

var propTypes$31 = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),

  componentClass: elementType,
};

var defaultProps$28 = {
  componentClass: 'div',
};

var MediaBody = (function(_React$Component) {
  _inherits(MediaBody, _React$Component);

  function MediaBody() {
    _classCallCheck(this, MediaBody);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  MediaBody.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      align = _props.align,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'componentClass',
        'align',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[prefix(Media$1.defaultProps, align)] = true;
    }

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return MediaBody;
})(React.Component);

MediaBody.propTypes = propTypes$31;
MediaBody.defaultProps = defaultProps$28;

var MediaBody$1 = bsClass('media-body', MediaBody);

var propTypes$32 = {
  componentClass: elementType,
};

var defaultProps$29 = {
  componentClass: 'h4',
};

var MediaHeading = (function(_React$Component) {
  _inherits(MediaHeading, _React$Component);

  function MediaHeading() {
    _classCallCheck(this, MediaHeading);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  MediaHeading.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return MediaHeading;
})(React.Component);

MediaHeading.propTypes = propTypes$32;
MediaHeading.defaultProps = defaultProps$29;

var MediaHeading$1 = bsClass('media-heading', MediaHeading);

var propTypes$33 = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

var MediaLeft = (function(_React$Component) {
  _inherits(MediaLeft, _React$Component);

  function MediaLeft() {
    _classCallCheck(this, MediaLeft);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  MediaLeft.prototype.render = function render() {
    var _props = this.props,
      align = _props.align,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['align', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-left-top`.
      classes[prefix(Media$1.defaultProps, align)] = true;
    }

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return MediaLeft;
})(React.Component);

MediaLeft.propTypes = propTypes$33;

var MediaLeft$1 = bsClass('media-left', MediaLeft);

var MediaList = (function(_React$Component) {
  _inherits(MediaList, _React$Component);

  function MediaList() {
    _classCallCheck(this, MediaList);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  MediaList.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'ul',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return MediaList;
})(React.Component);

var MediaList$1 = bsClass('media-list', MediaList);

var MediaListItem = (function(_React$Component) {
  _inherits(MediaListItem, _React$Component);

  function MediaListItem() {
    _classCallCheck(this, MediaListItem);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  MediaListItem.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'li',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return MediaListItem;
})(React.Component);

var MediaListItem$1 = bsClass('media', MediaListItem);

var propTypes$34 = {
  /**
   * Align the media to the top, middle, or bottom of the media object.
   */
  align: PropTypes.oneOf(['top', 'middle', 'bottom']),
};

var MediaRight = (function(_React$Component) {
  _inherits(MediaRight, _React$Component);

  function MediaRight() {
    _classCallCheck(this, MediaRight);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  MediaRight.prototype.render = function render() {
    var _props = this.props,
      align = _props.align,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['align', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    if (align) {
      // The class is e.g. `media-top`, not `media-right-top`.
      classes[prefix(Media$1.defaultProps, align)] = true;
    }

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return MediaRight;
})(React.Component);

MediaRight.propTypes = propTypes$34;

var MediaRight$1 = bsClass('media-right', MediaRight);

var propTypes$35 = {
  componentClass: elementType,
};

var defaultProps$30 = {
  componentClass: 'div',
};

var Media = (function(_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Media.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Media;
})(React.Component);

Media.propTypes = propTypes$35;
Media.defaultProps = defaultProps$30;

Media.Heading = MediaHeading$1;
Media.Body = MediaBody$1;
Media.Left = MediaLeft$1;
Media.Right = MediaRight$1;
Media.List = MediaList$1;
Media.ListItem = MediaListItem$1;

var Media$1 = bsClass('media', Media);

var propTypes$36 = {
  /**
   * Highlight the menu item as active.
   */
  active: PropTypes.bool,

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled: PropTypes.bool,

  /**
   * Styles the menu item as a horizontal rule, providing visual separation between
   * groups of menu items.
   */
  divider: all(PropTypes.bool, function(_ref) {
    var divider = _ref.divider,
      children = _ref.children;
    return divider && children
      ? new Error('Children will not be rendered for dividers')
      : null;
  }),

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey: PropTypes.any,

  /**
   * Styles the menu item as a header label, useful for describing a group of menu items.
   */
  header: PropTypes.bool,

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href: PropTypes.string,

  /**
   * Callback fired when the menu item is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Callback fired when the menu item is selected.
   *
   * ```js
   * (eventKey: any, event: Object) => any
   * ```
   */
  onSelect: PropTypes.func,
};

var defaultProps$31 = {
  divider: false,
  disabled: false,
  header: false,
};

var MenuItem = (function(_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props, context) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  MenuItem.prototype.handleClick = function handleClick(event) {
    var _props = this.props,
      href = _props.href,
      disabled = _props.disabled,
      onSelect = _props.onSelect,
      eventKey = _props.eventKey;

    if (!href || disabled) {
      event.preventDefault();
    }

    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  MenuItem.prototype.render = function render() {
    var _props2 = this.props,
      active = _props2.active,
      disabled = _props2.disabled,
      divider = _props2.divider,
      header = _props2.header,
      onClick = _props2.onClick,
      className = _props2.className,
      style = _props2.style,
      props = _objectWithoutProperties(_props2, [
        'active',
        'disabled',
        'divider',
        'header',
        'onClick',
        'className',
        'style',
      ]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, [
        'eventKey',
        'onSelect',
      ]),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    if (divider) {
      // Forcibly blank out the children; separators shouldn't render any.
      elementProps.children = undefined;

      return React.createElement(
        'li',
        _extends$2({}, elementProps, {
          role: 'separator',
          className: classnames(className, 'divider'),
          style: style,
        }),
      );
    }

    if (header) {
      return React.createElement(
        'li',
        _extends$2({}, elementProps, {
          role: 'heading',
          className: classnames(className, prefix(bsProps, 'header')),
          style: style,
        }),
      );
    }

    return React.createElement(
      'li',
      {
        role: 'presentation',
        className: classnames(className, {
          active: active,
          disabled: disabled,
        }),
        style: style,
      },
      React.createElement(
        SafeAnchor,
        _extends$2({}, elementProps, {
          role: 'menuitem',
          tabIndex: '-1',
          onClick: createChainedFunction(onClick, this.handleClick),
        }),
      ),
    );
  };

  return MenuItem;
})(React.Component);

MenuItem.propTypes = propTypes$36;
MenuItem.defaultProps = defaultProps$31;

bsClass('dropdown', MenuItem);

var querySelectorAll = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = qsa;
  // Zepto.js
  // (c) 2010-2015 Thomas Fuchs
  // Zepto.js may be freely distributed under the MIT license.
  var simpleSelectorRE = /^[\w-]*$/;
  var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

  function qsa(element, selector) {
    var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

    if (isSimple) {
      if (maybeID) {
        element = element.getElementById ? element : document;
        return (found = element.getElementById(nameOnly)) ? [found] : [];
      }

      if (element.getElementsByClassName && maybeClass)
        return toArray(element.getElementsByClassName(nameOnly));

      return toArray(element.getElementsByTagName(selector));
    }

    return toArray(element.querySelectorAll(selector));
  }
  module.exports = exports['default'];
});

unwrapExports(querySelectorAll);

var filter$1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = filterEvents;

  var _contains2 = _interopRequireDefault(contains);

  var _querySelectorAll2 = _interopRequireDefault(querySelectorAll);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function filterEvents(selector, handler) {
    return function filterHandler(e) {
      var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll2.default)(top, selector);

      if (
        matches.some(function(match) {
          return (0, _contains2.default)(match, target);
        })
      )
        handler.call(this, e);
    };
  }
  module.exports = exports['default'];
});

unwrapExports(filter$1);

var listen_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  var _inDOM2 = _interopRequireDefault(inDOM);

  var _on2 = _interopRequireDefault(on_1);

  var _off2 = _interopRequireDefault(off_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var listen = function listen() {};

  if (_inDOM2.default) {
    listen = function listen(node, eventName, handler, capture) {
      (0, _on2.default)(node, eventName, handler, capture);
      return function() {
        (0, _off2.default)(node, eventName, handler, capture);
      };
    };
  }

  exports.default = listen;
  module.exports = exports['default'];
});

unwrapExports(listen_1);

var events = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.listen = exports.filter = exports.off = exports.on = undefined;

  var _on2 = _interopRequireDefault(on_1);

  var _off2 = _interopRequireDefault(off_1);

  var _filter2 = _interopRequireDefault(filter$1);

  var _listen2 = _interopRequireDefault(listen_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.on = _on2.default;
  exports.off = _off2.default;
  exports.filter = _filter2.default;
  exports.listen = _listen2.default;
  exports.default = {
    on: _on2.default,
    off: _off2.default,
    filter: _filter2.default,
    listen: _listen2.default,
  };
});

var events$1 = unwrapExports(events);
var events_1 = events.listen;
var events_2 = events.filter;
var events_3 = events.off;
var events_4 = events.on;

var scrollbarSize = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });

  exports.default = function(recalc) {
    if ((!size && size !== 0) || recalc) {
      if (_inDOM2.default) {
        var scrollDiv = document.createElement('div');

        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';

        document.body.appendChild(scrollDiv);
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
    }

    return size;
  };

  var _inDOM2 = _interopRequireDefault(inDOM);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var size = void 0;

  module.exports = exports['default'];
});

var getScrollbarSize = unwrapExports(scrollbarSize);

var componentOrElement = createCommonjsModule(function(module, exports) {
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
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };

  var _react2 = _interopRequireDefault(React);

  var _createChainableTypeChecker2 = _interopRequireDefault(
    createChainableTypeChecker_1,
  );

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType =
      typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

    if (_react2.default.isValidElement(propValue)) {
      return new Error(
        'Invalid ' +
          location +
          ' `' +
          propFullName +
          '` of type ReactElement ' +
          ('supplied to `' +
            componentName +
            '`, expected a ReactComponent or a ') +
          'DOMElement. You can usually obtain a ReactComponent or DOMElement ' +
          'from a ReactElement by attaching a ref to it.',
      );
    }

    if (
      (propType !== 'object' || typeof propValue.render !== 'function') &&
      propValue.nodeType !== 1
    ) {
      return new Error(
        'Invalid ' +
          location +
          ' `' +
          propFullName +
          '` of value `' +
          propValue +
          '` ' +
          ('supplied to `' +
            componentName +
            '`, expected a ReactComponent or a ') +
          'DOMElement.',
      );
    }

    return null;
  }

  exports.default = (0, _createChainableTypeChecker2.default)(validate);
  module.exports = exports['default'];
});

unwrapExports(componentOrElement);

var deprecated_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = deprecated;

  var _warning2 = _interopRequireDefault(warning_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var warned = {};

  function deprecated(validator, reason) {
    return function validate(
      props,
      propName,
      componentName,
      location,
      propFullName,
    ) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      if (props[propName] != null) {
        var messageKey = componentName + '.' + propName;

        (0, _warning2.default)(
          warned[messageKey],
          'The ' +
            location +
            ' `' +
            propFullNameSafe +
            '` of ' +
            ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'),
        );

        warned[messageKey] = true;
      }

      for (
        var _len = arguments.length,
          args = Array(_len > 5 ? _len - 5 : 0),
          _key = 5;
        _key < _len;
        _key++
      ) {
        args[_key - 5] = arguments[_key];
      }

      return validator.apply(
        undefined,
        [props, propName, componentName, location, propFullName].concat(args),
      );
    };
  }

  /* eslint-disable no-underscore-dangle */
  function _resetWarned() {
    warned = {};
  }

  deprecated._resetWarned = _resetWarned;
  /* eslint-enable no-underscore-dangle */

  module.exports = exports['default'];
});

unwrapExports(deprecated_1);

var hasClass_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = hasClass;
  function hasClass(element, className) {
    if (element.classList)
      return !!className && element.classList.contains(className);
    else
      return (
        (' ' + (element.className.baseVal || element.className) + ' ').indexOf(
          ' ' + className + ' ',
        ) !== -1
      );
  }
  module.exports = exports['default'];
});

unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = addClass;

  var _hasClass2 = _interopRequireDefault(hasClass_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else if (!(0, _hasClass2.default)(element, className))
      if (typeof element.className === 'string')
        element.className = element.className + ' ' + className;
      else
        element.setAttribute(
          'class',
          ((element.className && element.className.baseVal) || '') +
            ' ' +
            className,
        );
  }
  module.exports = exports['default'];
});

unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass
    .replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);
  else if (typeof element.className === 'string')
    element.className = replaceClassName(element.className, className);
  else
    element.setAttribute(
      'class',
      replaceClassName(
        (element.className && element.className.baseVal) || '',
        className,
      ),
    );
};

var _class = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.hasClass = exports.removeClass = exports.addClass = undefined;

  var _addClass2 = _interopRequireDefault(addClass_1);

  var _removeClass2 = _interopRequireDefault(removeClass);

  var _hasClass2 = _interopRequireDefault(hasClass_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  exports.addClass = _addClass2.default;
  exports.removeClass = _removeClass2.default;
  exports.hasClass = _hasClass2.default;
  exports.default = {
    addClass: _addClass2.default,
    removeClass: _removeClass2.default,
    hasClass: _hasClass2.default,
  };
});

unwrapExports(_class);
var _class_1 = _class.hasClass;
var _class_2 = _class.removeClass;
var _class_3 = _class.addClass;

var isWindow = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = getWindow;
  function getWindow(node) {
    return node === node.window
      ? node
      : node.nodeType === 9
        ? node.defaultView || node.parentWindow
        : false;
  }
  module.exports = exports['default'];
});

unwrapExports(isWindow);

var isOverflowing_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = isOverflowing;

  var _isWindow2 = _interopRequireDefault(isWindow);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function isBody(node) {
    return node && node.tagName.toLowerCase() === 'body';
  }

  function bodyIsOverflowing(node) {
    var doc = (0, _ownerDocument2.default)(node);
    var win = (0, _isWindow2.default)(doc);
    var fullWidth = win.innerWidth;

    // Support: ie8, no innerWidth
    if (!fullWidth) {
      var documentElementRect = doc.documentElement.getBoundingClientRect();
      fullWidth =
        documentElementRect.right - Math.abs(documentElementRect.left);
    }

    return doc.body.clientWidth < fullWidth;
  }

  function isOverflowing(container) {
    var win = (0, _isWindow2.default)(container);

    return win || isBody(container)
      ? bodyIsOverflowing(container)
      : container.scrollHeight > container.clientHeight;
  }
  module.exports = exports['default'];
});

var isOverflowing = unwrapExports(isOverflowing_1);

var manageAriaHidden = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.ariaHidden = ariaHidden;
  exports.hideSiblings = hideSiblings;
  exports.showSiblings = showSiblings;

  var BLACKLIST = ['template', 'script', 'style'];

  var isHidable = function isHidable(_ref) {
    var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
    return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
  };

  var siblings = function siblings(container, mount, cb) {
    mount = [].concat(mount);

    [].forEach.call(container.children, function(node) {
      if (mount.indexOf(node) === -1 && isHidable(node)) {
        cb(node);
      }
    });
  };

  function ariaHidden(show, node) {
    if (!node) {
      return;
    }
    if (show) {
      node.setAttribute('aria-hidden', 'true');
    } else {
      node.removeAttribute('aria-hidden');
    }
  }

  function hideSiblings(container, mountNode) {
    siblings(container, mountNode, function(node) {
      return ariaHidden(true, node);
    });
  }

  function showSiblings(container, mountNode) {
    siblings(container, mountNode, function(node) {
      return ariaHidden(false, node);
    });
  }
});

unwrapExports(manageAriaHidden);
var manageAriaHidden_1 = manageAriaHidden.ariaHidden;
var manageAriaHidden_2 = manageAriaHidden.hideSiblings;
var manageAriaHidden_3 = manageAriaHidden.showSiblings;

var ModalManager_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _class2 = _interopRequireDefault(_class);

  var _style2 = _interopRequireDefault(style_1);

  var _scrollbarSize2 = _interopRequireDefault(scrollbarSize);

  var _isOverflowing2 = _interopRequireDefault(isOverflowing_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function findIndexOf(arr, cb) {
    var idx = -1;
    arr.some(function(d, i) {
      if (cb(d, i)) {
        idx = i;
        return true;
      }
    });
    return idx;
  }

  function findContainer(data, modal) {
    return findIndexOf(data, function(d) {
      return d.modals.indexOf(modal) !== -1;
    });
  }

  function setContainerStyle(state, container) {
    var style = { overflow: 'hidden' };

    // we are only interested in the actual `style` here
    // becasue we will override it
    state.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight,
    };

    if (state.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight =
        parseInt((0, _style2.default)(container, 'paddingRight') || 0, 10) +
        (0, _scrollbarSize2.default)() +
        'px';
    }

    (0, _style2.default)(container, style);
  }

  function removeContainerStyle(_ref, container) {
    var style = _ref.style;

    Object.keys(style).forEach(function(key) {
      return (container.style[key] = style[key]);
    });
  }
  /**
   * Proper state managment for containers and the modals in those containers.
   *
   * @internal Used by the Modal to ensure proper styling of containers.
   */

  var ModalManager = function ModalManager() {
    var _this = this;

    var _ref2 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$hideSiblingNode = _ref2.hideSiblingNodes,
      hideSiblingNodes =
        _ref2$hideSiblingNode === undefined ? true : _ref2$hideSiblingNode,
      _ref2$handleContainer = _ref2.handleContainerOverflow,
      handleContainerOverflow =
        _ref2$handleContainer === undefined ? true : _ref2$handleContainer;

    _classCallCheck(this, ModalManager);

    this.add = function(modal, container, className) {
      var modalIdx = _this.modals.indexOf(modal);
      var containerIdx = _this.containers.indexOf(container);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = _this.modals.length;
      _this.modals.push(modal);

      if (_this.hideSiblingNodes) {
        (0, manageAriaHidden.hideSiblings)(container, modal.mountNode);
      }

      if (containerIdx !== -1) {
        _this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        //right now only the first modal of a container will have its classes applied
        classes: className ? className.split(/\s+/) : [],

        overflowing: (0, _isOverflowing2.default)(container),
      };

      if (_this.handleContainerOverflow) {
        setContainerStyle(data, container);
      }

      data.classes.forEach(_class2.default.addClass.bind(null, container));

      _this.containers.push(container);
      _this.data.push(data);

      return modalIdx;
    };

    this.remove = function(modal) {
      var modalIdx = _this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return;
      }

      var containerIdx = findContainer(_this.data, modal);
      var data = _this.data[containerIdx];
      var container = _this.containers[containerIdx];

      data.modals.splice(data.modals.indexOf(modal), 1);

      _this.modals.splice(modalIdx, 1);

      // if that was the last modal in a container,
      // clean up the container
      if (data.modals.length === 0) {
        data.classes.forEach(_class2.default.removeClass.bind(null, container));

        if (_this.handleContainerOverflow) {
          removeContainerStyle(data, container);
        }

        if (_this.hideSiblingNodes) {
          (0, manageAriaHidden.showSiblings)(container, modal.mountNode);
        }
        _this.containers.splice(containerIdx, 1);
        _this.data.splice(containerIdx, 1);
      } else if (_this.hideSiblingNodes) {
        //otherwise make sure the next top modal is visible to a SR
        (0, manageAriaHidden.ariaHidden)(
          false,
          data.modals[data.modals.length - 1].mountNode,
        );
      }
    };

    this.isTopModal = function(modal) {
      return (
        !!_this.modals.length && _this.modals[_this.modals.length - 1] === modal
      );
    };

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
  };

  exports.default = ModalManager;
  module.exports = exports['default'];
});

unwrapExports(ModalManager_1);

var getContainer_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = getContainer;

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return _reactDom2.default.findDOMNode(container) || defaultContainer;
  }
  module.exports = exports['default'];
});

unwrapExports(getContainer_1);

var LegacyPortal = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _componentOrElement2 = _interopRequireDefault(componentOrElement);

  var _react2 = _interopRequireDefault(React);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _getContainer2 = _interopRequireDefault(getContainer_1);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument$1);

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

  /**
   * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
   * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
   * The children of `<Portal/>` component will be appended to the `container` specified.
   */
  var Portal = (function(_React$Component) {
    _inherits(Portal, _React$Component);

    function Portal() {
      var _temp, _this, _ret;

      _classCallCheck(this, Portal);

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      return (
        (_ret = ((_temp = ((_this = _possibleConstructorReturn(
          this,
          _React$Component.call.apply(_React$Component, [this].concat(args)),
        )),
        _this)),
        (_this._mountOverlayTarget = function() {
          if (!_this._overlayTarget) {
            _this._overlayTarget = document.createElement('div');
            _this._portalContainerNode = (0, _getContainer2.default)(
              _this.props.container,
              (0, _ownerDocument2.default)(_this).body,
            );
            _this._portalContainerNode.appendChild(_this._overlayTarget);
          }
        }),
        (_this._unmountOverlayTarget = function() {
          if (_this._overlayTarget) {
            _this._portalContainerNode.removeChild(_this._overlayTarget);
            _this._overlayTarget = null;
          }
          _this._portalContainerNode = null;
        }),
        (_this._renderOverlay = function() {
          var overlay = !_this.props.children
            ? null
            : _react2.default.Children.only(_this.props.children);

          // Save reference for future access.
          if (overlay !== null) {
            _this._mountOverlayTarget();

            var initialRender = !_this._overlayInstance;

            _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(
              _this,
              overlay,
              _this._overlayTarget,
              function() {
                if (initialRender && _this.props.onRendered) {
                  _this.props.onRendered();
                }
              },
            );
          } else {
            // Unrender if the component is null for transitions to null
            _this._unrenderOverlay();
            _this._unmountOverlayTarget();
          }
        }),
        (_this._unrenderOverlay = function() {
          if (_this._overlayTarget) {
            _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
            _this._overlayInstance = null;
          }
        }),
        (_this.getMountNode = function() {
          return _this._overlayTarget;
        }),
        _temp)),
        _possibleConstructorReturn(_this, _ret)
      );
    }

    Portal.prototype.componentDidMount = function componentDidMount() {
      this._isMounted = true;
      this._renderOverlay();
    };

    Portal.prototype.componentDidUpdate = function componentDidUpdate() {
      this._renderOverlay();
    };

    Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps,
    ) {
      if (this._overlayTarget && nextProps.container !== this.props.container) {
        this._portalContainerNode.removeChild(this._overlayTarget);
        this._portalContainerNode = (0, _getContainer2.default)(
          nextProps.container,
          (0, _ownerDocument2.default)(this).body,
        );
        this._portalContainerNode.appendChild(this._overlayTarget);
      }
    };

    Portal.prototype.componentWillUnmount = function componentWillUnmount() {
      this._isMounted = false;
      this._unrenderOverlay();
      this._unmountOverlayTarget();
    };

    Portal.prototype.render = function render() {
      return null;
    };

    return Portal;
  })(_react2.default.Component);

  Portal.displayName = 'Portal';
  Portal.propTypes = {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _propTypes2.default.oneOfType([
      _componentOrElement2.default,
      _propTypes2.default.func,
    ]),

    onRendered: _propTypes2.default.func,
  };
  exports.default = Portal;
  module.exports = exports['default'];
});

unwrapExports(LegacyPortal);

var Portal_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _componentOrElement2 = _interopRequireDefault(componentOrElement);

  var _react2 = _interopRequireDefault(React);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _getContainer2 = _interopRequireDefault(getContainer_1);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument$1);

  var _LegacyPortal2 = _interopRequireDefault(LegacyPortal);

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

  /**
   * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
   * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
   * The children of `<Portal/>` component will be appended to the `container` specified.
   */
  var Portal = (function(_React$Component) {
    _inherits(Portal, _React$Component);

    function Portal() {
      var _temp, _this, _ret;

      _classCallCheck(this, Portal);

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      return (
        (_ret = ((_temp = ((_this = _possibleConstructorReturn(
          this,
          _React$Component.call.apply(_React$Component, [this].concat(args)),
        )),
        _this)),
        (_this.setContainer = function() {
          var props =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : _this.props;

          _this._portalContainerNode = (0, _getContainer2.default)(
            props.container,
            (0, _ownerDocument2.default)(_this).body,
          );
        }),
        (_this.getMountNode = function() {
          return _this._portalContainerNode;
        }),
        _temp)),
        _possibleConstructorReturn(_this, _ret)
      );
    }

    Portal.prototype.componentDidMount = function componentDidMount() {
      this.setContainer();
      this.forceUpdate(this.props.onRendered);
    };

    Portal.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps,
    ) {
      if (nextProps.container !== this.props.container) {
        this.setContainer(nextProps);
      }
    };

    Portal.prototype.componentWillUnmount = function componentWillUnmount() {
      this._portalContainerNode = null;
    };

    Portal.prototype.render = function render() {
      return this.props.children && this._portalContainerNode
        ? _reactDom2.default.createPortal(
            this.props.children,
            this._portalContainerNode,
          )
        : null;
    };

    return Portal;
  })(_react2.default.Component);

  Portal.displayName = 'Portal';
  Portal.propTypes = {
    /**
     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
     * appended to it.
     */
    container: _propTypes2.default.oneOfType([
      _componentOrElement2.default,
      _propTypes2.default.func,
    ]),

    onRendered: _propTypes2.default.func,
  };
  exports.default = _reactDom2.default.createPortal
    ? Portal
    : _LegacyPortal2.default;
  module.exports = exports['default'];
});

unwrapExports(Portal_1);

var RefHolder_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _react2 = _interopRequireDefault(React);

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

  var propTypes = {
    children: _propTypes2.default.node,
  };

  /**
   * Internal helper component to allow attaching a non-conflicting ref to a
   * child element that may not accept refs.
   */

  var RefHolder = (function(_React$Component) {
    _inherits(RefHolder, _React$Component);

    function RefHolder() {
      _classCallCheck(this, RefHolder);

      return _possibleConstructorReturn(
        this,
        _React$Component.apply(this, arguments),
      );
    }

    RefHolder.prototype.render = function render() {
      return this.props.children;
    };

    return RefHolder;
  })(_react2.default.Component);

  RefHolder.propTypes = propTypes;

  exports.default = RefHolder;
  module.exports = exports['default'];
});

unwrapExports(RefHolder_1);

var addFocusListener_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = addFocusListener;
  /**
   * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
   * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
   *
   * We only allow one Listener at a time to avoid stack overflows
   */
  function addFocusListener(handler) {
    var useFocusin = !document.addEventListener;
    var remove = void 0;

    if (useFocusin) {
      document.attachEvent('onfocusin', handler);
      remove = function remove() {
        return document.detachEvent('onfocusin', handler);
      };
    } else {
      document.addEventListener('focus', handler, true);
      remove = function remove() {
        return document.removeEventListener('focus', handler, true);
      };
    }

    return { remove: remove };
  }
  module.exports = exports['default'];
});

unwrapExports(addFocusListener_1);

var Modal_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

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

  var _activeElement2 = _interopRequireDefault(activeElement_1);

  var _contains2 = _interopRequireDefault(contains);

  var _inDOM2 = _interopRequireDefault(inDOM);

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _componentOrElement2 = _interopRequireDefault(componentOrElement);

  var _deprecated2 = _interopRequireDefault(deprecated_1);

  var _elementType2 = _interopRequireDefault(elementType_1);

  var _react2 = _interopRequireDefault(React);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _warning2 = _interopRequireDefault(warning_1);

  var _ModalManager2 = _interopRequireDefault(ModalManager_1);

  var _Portal2 = _interopRequireDefault(Portal_1);

  var _RefHolder2 = _interopRequireDefault(RefHolder_1);

  var _addEventListener2 = _interopRequireDefault(addEventListener);

  var _addFocusListener2 = _interopRequireDefault(addFocusListener_1);

  var _getContainer2 = _interopRequireDefault(getContainer_1);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument$1);

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
  } /* eslint-disable react/prop-types */

  var modalManager = new _ModalManager2.default();

  /**
   * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
   * The Modal component renders its `children` node in front of a backdrop component.
   *
   * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
   *
   * - Manages dialog stacking when one-at-a-time just isn't enough.
   * - Creates a backdrop, for disabling interaction below the modal.
   * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
   * - It disables scrolling of the page content while open.
   * - Adds the appropriate ARIA roles are automatically.
   * - Easily pluggable animations via a `<Transition/>` component.
   *
   * Note that, in the same way the backdrop element prevents users from clicking or interacting
   * with the page content underneath the Modal, Screen readers also need to be signaled to not to
   * interact with page content while the Modal is open. To do this, we use a common technique of applying
   * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
   * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
   * React hierarchy (such as the default: document.body).
   */

  var Modal = (function(_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal() {
      var _temp, _this, _ret;

      _classCallCheck(this, Modal);

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      return (
        (_ret = ((_temp = ((_this = _possibleConstructorReturn(
          this,
          _React$Component.call.apply(_React$Component, [this].concat(args)),
        )),
        _this)),
        _initialiseProps.call(_this),
        _temp)),
        _possibleConstructorReturn(_this, _ret)
      );
    }

    Modal.prototype.omitProps = function omitProps(props, propTypes) {
      var keys = Object.keys(props);
      var newProps = {};
      keys.map(function(prop) {
        if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
          newProps[prop] = props[prop];
        }
      });

      return newProps;
    };

    Modal.prototype.render = function render() {
      var _props = this.props,
        show = _props.show,
        container = _props.container,
        children = _props.children,
        Transition = _props.transition,
        backdrop = _props.backdrop,
        className = _props.className,
        style = _props.style,
        onExit = _props.onExit,
        onExiting = _props.onExiting,
        onEnter = _props.onEnter,
        onEntering = _props.onEntering,
        onEntered = _props.onEntered;

      var dialog = _react2.default.Children.only(children);
      var filteredProps = this.omitProps(this.props, Modal.propTypes);

      var mountModal = show || (Transition && !this.state.exited);
      if (!mountModal) {
        return null;
      }

      var _dialog$props = dialog.props,
        role = _dialog$props.role,
        tabIndex = _dialog$props.tabIndex;

      if (role === undefined || tabIndex === undefined) {
        dialog = (0, React.cloneElement)(dialog, {
          role: role === undefined ? 'document' : role,
          tabIndex: tabIndex == null ? '-1' : tabIndex,
        });
      }

      if (Transition) {
        dialog = _react2.default.createElement(
          Transition,
          {
            appear: true,
            unmountOnExit: true,
            in: show,
            onExit: onExit,
            onExiting: onExiting,
            onExited: this.handleHidden,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered,
          },
          dialog,
        );
      }

      return _react2.default.createElement(
        _Portal2.default,
        {
          ref: this.setMountNode,
          container: container,
          onRendered: this.onPortalRendered,
        },
        _react2.default.createElement(
          'div',
          _extends(
            {
              ref: this.setModalNodeRef,
              role: role || 'dialog',
            },
            filteredProps,
            {
              style: style,
              className: className,
            },
          ),
          backdrop && this.renderBackdrop(),
          _react2.default.createElement(
            _RefHolder2.default,
            { ref: this.setDialogRef },
            dialog,
          ),
        ),
      );
    };

    Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps,
    ) {
      if (nextProps.show) {
        this.setState({ exited: false });
      } else if (!nextProps.transition) {
        // Otherwise let handleHidden take care of marking exited.
        this.setState({ exited: true });
      }
    };

    Modal.prototype.componentWillUpdate = function componentWillUpdate(
      nextProps,
    ) {
      if (!this.props.show && nextProps.show) {
        this.checkForFocus();
      }
    };

    Modal.prototype.componentDidMount = function componentDidMount() {
      this._isMounted = true;
      if (this.props.show) {
        this.onShow();
      }
    };

    Modal.prototype.componentDidUpdate = function componentDidUpdate(
      prevProps,
    ) {
      var transition = this.props.transition;

      if (prevProps.show && !this.props.show && !transition) {
        // Otherwise handleHidden will call this.
        this.onHide();
      } else if (!prevProps.show && this.props.show) {
        this.onShow();
      }
    };

    Modal.prototype.componentWillUnmount = function componentWillUnmount() {
      var _props2 = this.props,
        show = _props2.show,
        transition = _props2.transition;

      this._isMounted = false;

      if (show || (transition && !this.state.exited)) {
        this.onHide();
      }
    };

    Modal.prototype.autoFocus = function autoFocus() {
      if (!this.props.autoFocus) {
        return;
      }

      var dialogElement = this.getDialogElement();
      var currentActiveElement = (0, _activeElement2.default)(
        (0, _ownerDocument2.default)(this),
      );

      if (
        dialogElement &&
        !(0, _contains2.default)(dialogElement, currentActiveElement)
      ) {
        this.lastFocus = currentActiveElement;

        if (!dialogElement.hasAttribute('tabIndex')) {
          (0, _warning2.default)(
            false,
            'The modal content node does not accept focus. For the benefit of ' +
              'assistive technologies, the tabIndex of the node is being set ' +
              'to "-1".',
          );

          dialogElement.setAttribute('tabIndex', -1);
        }

        dialogElement.focus();
      }
    };

    Modal.prototype.restoreLastFocus = function restoreLastFocus() {
      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      if (this.lastFocus && this.lastFocus.focus) {
        this.lastFocus.focus();
        this.lastFocus = null;
      }
    };

    Modal.prototype.getDialogElement = function getDialogElement() {
      return _reactDom2.default.findDOMNode(this.dialog);
    };

    Modal.prototype.isTopModal = function isTopModal() {
      return this.props.manager.isTopModal(this);
    };

    return Modal;
  })(_react2.default.Component);

  Modal.propTypes = _extends({}, _Portal2.default.propTypes, {
    /**
     * Set the visibility of the Modal
     */
    show: _propTypes2.default.bool,

    /**
     * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
     *
     * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
     * page content can be placed behind a virtual backdrop as well as a visual one.
     */
    container: _propTypes2.default.oneOfType([
      _componentOrElement2.default,
      _propTypes2.default.func,
    ]),

    /**
     * A callback fired when the Modal is opening.
     */
    onShow: _propTypes2.default.func,

    /**
     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
     *
     * The `onHide` callback only signals intent from the Modal,
     * you must actually set the `show` prop to `false` for the Modal to close.
     */
    onHide: _propTypes2.default.func,

    /**
     * Include a backdrop component.
     */
    backdrop: _propTypes2.default.oneOfType([
      _propTypes2.default.bool,
      _propTypes2.default.oneOf(['static']),
    ]),

    /**
     * A function that returns a backdrop component. Useful for custom
     * backdrop rendering.
     *
     * ```js
     *  renderBackdrop={props => <MyBackdrop {...props} />}
     * ```
     */
    renderBackdrop: _propTypes2.default.func,

    /**
     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
     */
    onEscapeKeyDown: _propTypes2.default.func,

    /**
     * Support for this function will be deprecated. Please use `onEscapeKeyDown` instead
     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
     * @deprecated
     */
    onEscapeKeyUp: (0, _deprecated2.default)(
      _propTypes2.default.func,
      'Please use onEscapeKeyDown instead for consistency',
    ),

    /**
     * A callback fired when the backdrop, if specified, is clicked.
     */
    onBackdropClick: _propTypes2.default.func,

    /**
     * A style object for the backdrop component.
     */
    backdropStyle: _propTypes2.default.object,

    /**
     * A css class or classes for the backdrop component.
     */
    backdropClassName: _propTypes2.default.string,

    /**
     * A css class or set of classes applied to the modal container when the modal is open,
     * and removed when it is closed.
     */
    containerClassName: _propTypes2.default.string,

    /**
     * Close the modal when escape key is pressed
     */
    keyboard: _propTypes2.default.bool,

    /**
     * A `react-transition-group@2.0.0` `<Transition/>` component used
     * to control animations for the dialog component.
     */
    transition: _elementType2.default,

    /**
     * A `react-transition-group@2.0.0` `<Transition/>` component used
     * to control animations for the backdrop components.
     */
    backdropTransition: _elementType2.default,

    /**
     * When `true` The modal will automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes. This also
     * works correctly with any Modal children that have the `autoFocus` prop.
     *
     * Generally this should never be set to `false` as it makes the Modal less
     * accessible to assistive technologies, like screen readers.
     */
    autoFocus: _propTypes2.default.bool,

    /**
     * When `true` The modal will prevent focus from leaving the Modal while open.
     *
     * Generally this should never be set to `false` as it makes the Modal less
     * accessible to assistive technologies, like screen readers.
     */
    enforceFocus: _propTypes2.default.bool,

    /**
     * When `true` The modal will restore focus to previously focused element once
     * modal is hidden
     */
    restoreFocus: _propTypes2.default.bool,

    /**
     * Callback fired before the Modal transitions in
     */
    onEnter: _propTypes2.default.func,

    /**
     * Callback fired as the Modal begins to transition in
     */
    onEntering: _propTypes2.default.func,

    /**
     * Callback fired after the Modal finishes transitioning in
     */
    onEntered: _propTypes2.default.func,

    /**
     * Callback fired right before the Modal transitions out
     */
    onExit: _propTypes2.default.func,

    /**
     * Callback fired as the Modal begins to transition out
     */
    onExiting: _propTypes2.default.func,

    /**
     * Callback fired after the Modal finishes transitioning out
     */
    onExited: _propTypes2.default.func,

    /**
     * A ModalManager instance used to track and manage the state of open
     * Modals. Useful when customizing how modals interact within a container
     */
    manager: _propTypes2.default.object.isRequired,
  });
  Modal.defaultProps = {
    show: false,
    backdrop: true,
    keyboard: true,
    autoFocus: true,
    enforceFocus: true,
    restoreFocus: true,
    onHide: function onHide() {},
    manager: modalManager,
    renderBackdrop: function renderBackdrop(props) {
      return _react2.default.createElement('div', props);
    },
  };

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.state = { exited: !this.props.show };

    this.renderBackdrop = function() {
      var _props3 = _this2.props,
        backdropStyle = _props3.backdropStyle,
        backdropClassName = _props3.backdropClassName,
        renderBackdrop = _props3.renderBackdrop,
        Transition = _props3.backdropTransition;

      var backdropRef = function backdropRef(ref) {
        return (_this2.backdrop = ref);
      };

      var backdrop = renderBackdrop({
        ref: backdropRef,
        style: backdropStyle,
        className: backdropClassName,
        onClick: _this2.handleBackdropClick,
      });

      if (Transition) {
        backdrop = _react2.default.createElement(
          Transition,
          {
            appear: true,
            in: _this2.props.show,
          },
          backdrop,
        );
      }

      return backdrop;
    };

    this.onPortalRendered = function() {
      _this2.autoFocus();

      if (_this2.props.onShow) {
        _this2.props.onShow();
      }
    };

    this.onShow = function() {
      var doc = (0, _ownerDocument2.default)(_this2);
      var container = (0, _getContainer2.default)(
        _this2.props.container,
        doc.body,
      );

      _this2.props.manager.add(
        _this2,
        container,
        _this2.props.containerClassName,
      );

      _this2._onDocumentKeydownListener = (0, _addEventListener2.default)(
        doc,
        'keydown',
        _this2.handleDocumentKeyDown,
      );

      _this2._onDocumentKeyupListener = (0, _addEventListener2.default)(
        doc,
        'keyup',
        _this2.handleDocumentKeyUp,
      );

      _this2._onFocusinListener = (0, _addFocusListener2.default)(
        _this2.enforceFocus,
      );
    };

    this.onHide = function() {
      _this2.props.manager.remove(_this2);

      _this2._onDocumentKeydownListener.remove();

      _this2._onDocumentKeyupListener.remove();

      _this2._onFocusinListener.remove();

      if (_this2.props.restoreFocus) {
        _this2.restoreLastFocus();
      }
    };

    this.setMountNode = function(ref) {
      _this2.mountNode = ref ? ref.getMountNode() : ref;
    };

    this.setModalNodeRef = function(ref) {
      _this2.modalNode = ref;
    };

    this.setDialogRef = function(ref) {
      _this2.dialog = ref;
    };

    this.handleHidden = function() {
      _this2.setState({ exited: true });
      _this2.onHide();

      if (_this2.props.onExited) {
        var _props4;

        (_props4 = _this2.props).onExited.apply(_props4, arguments);
      }
    };

    this.handleBackdropClick = function(e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      if (_this2.props.onBackdropClick) {
        _this2.props.onBackdropClick(e);
      }

      if (_this2.props.backdrop === true) {
        _this2.props.onHide();
      }
    };

    this.handleDocumentKeyDown = function(e) {
      if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
        if (_this2.props.onEscapeKeyDown) {
          _this2.props.onEscapeKeyDown(e);
        }

        _this2.props.onHide();
      }
    };

    this.handleDocumentKeyUp = function(e) {
      if (_this2.props.keyboard && e.keyCode === 27 && _this2.isTopModal()) {
        if (_this2.props.onEscapeKeyUp) {
          _this2.props.onEscapeKeyUp(e);
        }
      }
    };

    this.checkForFocus = function() {
      if (_inDOM2.default) {
        _this2.lastFocus = (0, _activeElement2.default)();
      }
    };

    this.enforceFocus = function() {
      if (
        !_this2.props.enforceFocus ||
        !_this2._isMounted ||
        !_this2.isTopModal()
      ) {
        return;
      }

      var dialogElement = _this2.getDialogElement();
      var currentActiveElement = (0, _activeElement2.default)(
        (0, _ownerDocument2.default)(_this2),
      );

      if (
        dialogElement &&
        !(0, _contains2.default)(dialogElement, currentActiveElement)
      ) {
        dialogElement.focus();
      }
    };
  };

  Modal.Manager = _ModalManager2.default;

  exports.default = Modal;
  module.exports = exports['default'];
});

var BaseModal = unwrapExports(Modal_1);

var propTypes$37 = {
  componentClass: elementType,
};

var defaultProps$32 = {
  componentClass: 'div',
};

var ModalBody = (function(_React$Component) {
  _inherits(ModalBody, _React$Component);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ModalBody.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return ModalBody;
})(React.Component);

ModalBody.propTypes = propTypes$37;
ModalBody.defaultProps = defaultProps$32;

var Body = bsClass('modal-body', ModalBody);

var propTypes$38 = {
  /**
   * A css class to apply to the Modal dialog DOM node.
   */
  dialogClassName: PropTypes.string,
};

var ModalDialog = (function(_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    _classCallCheck(this, ModalDialog);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ModalDialog.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      dialogClassName = _props.dialogClassName,
      className = _props.className,
      style = _props.style,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'dialogClassName',
        'className',
        'style',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var bsClassName = prefix(bsProps);

    var modalStyle = _extends$2({ display: 'block' }, style);

    var dialogClasses = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[bsClassName] = false),
      (_extends2[prefix(bsProps, 'dialog')] = true),
      _extends2),
    );

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: classnames(className, bsClassName),
      }),
      React.createElement(
        'div',
        { className: classnames(dialogClassName, dialogClasses) },
        React.createElement(
          'div',
          { className: prefix(bsProps, 'content'), role: 'document' },
          children,
        ),
      ),
    );
  };

  return ModalDialog;
})(React.Component);

ModalDialog.propTypes = propTypes$38;

var ModalDialog$1 = bsClass(
  'modal',
  bsSizes([Size.LARGE, Size.SMALL], ModalDialog),
);

var propTypes$39 = {
  componentClass: elementType,
};

var defaultProps$33 = {
  componentClass: 'div',
};

var ModalFooter = (function(_React$Component) {
  _inherits(ModalFooter, _React$Component);

  function ModalFooter() {
    _classCallCheck(this, ModalFooter);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ModalFooter.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return ModalFooter;
})(React.Component);

ModalFooter.propTypes = propTypes$39;
ModalFooter.defaultProps = defaultProps$33;

var Footer = bsClass('modal-footer', ModalFooter);

// TODO: `aria-label` should be `closeLabel`.

var propTypes$40 = {
  /**
   * Provides an accessible label for the close
   * button. It is used for Assistive Technology when the label text is not
   * readable.
   */
  closeLabel: PropTypes.string,

  /**
   * Specify whether the Component should contain a close button
   */
  closeButton: PropTypes.bool,

  /**
   * A Callback fired when the close button is clicked. If used directly inside
   * a Modal component, the onHide will automatically be propagated up to the
   * parent Modal `onHide`.
   */
  onHide: PropTypes.func,
};

var defaultProps$34 = {
  closeLabel: 'Close',
  closeButton: false,
};

var contextTypes$3 = {
  $bs_modal: PropTypes.shape({
    onHide: PropTypes.func,
  }),
};

var ModalHeader = (function(_React$Component) {
  _inherits(ModalHeader, _React$Component);

  function ModalHeader() {
    _classCallCheck(this, ModalHeader);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ModalHeader.prototype.render = function render() {
    var _props = this.props,
      closeLabel = _props.closeLabel,
      closeButton = _props.closeButton,
      onHide = _props.onHide,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'closeLabel',
        'closeButton',
        'onHide',
        'className',
        'children',
      ]);

    var modal = this.context.$bs_modal;

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      closeButton &&
        React.createElement(CloseButton, {
          label: closeLabel,
          onClick: createChainedFunction(modal && modal.onHide, onHide),
        }),
      children,
    );
  };

  return ModalHeader;
})(React.Component);

ModalHeader.propTypes = propTypes$40;
ModalHeader.defaultProps = defaultProps$34;
ModalHeader.contextTypes = contextTypes$3;

var Header = bsClass('modal-header', ModalHeader);

var propTypes$41 = {
  componentClass: elementType,
};

var defaultProps$35 = {
  componentClass: 'h4',
};

var ModalTitle = (function(_React$Component) {
  _inherits(ModalTitle, _React$Component);

  function ModalTitle() {
    _classCallCheck(this, ModalTitle);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ModalTitle.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return ModalTitle;
})(React.Component);

ModalTitle.propTypes = propTypes$41;
ModalTitle.defaultProps = defaultProps$35;

var Title = bsClass('modal-title', ModalTitle);

var propTypes$42 = _extends$2(
  {},
  BaseModal.propTypes,
  ModalDialog$1.propTypes,
  {
    /**
     * Include a backdrop component. Specify 'static' for a backdrop that doesn't
     * trigger an "onHide" when clicked.
     */
    backdrop: PropTypes.oneOf(['static', true, false]),

    /**
     * Add an optional extra class name to .modal-backdrop
     * It could end up looking like class="modal-backdrop foo-modal-backdrop in".
     */
    backdropClassName: PropTypes.string,

    /**
     * Close the modal when escape key is pressed
     */
    keyboard: PropTypes.bool,

    /**
     * Open and close the Modal with a slide and fade animation.
     */
    animation: PropTypes.bool,

    /**
     * A Component type that provides the modal content Markup. This is a useful
     * prop when you want to use your own styles and markup to create a custom
     * modal component.
     */
    dialogComponentClass: elementType,

    /**
     * When `true` The modal will automatically shift focus to itself when it
     * opens, and replace it to the last focused element when it closes.
     * Generally this should never be set to false as it makes the Modal less
     * accessible to assistive technologies, like screen-readers.
     */
    autoFocus: PropTypes.bool,

    /**
     * When `true` The modal will prevent focus from leaving the Modal while
     * open. Consider leaving the default value here, as it is necessary to make
     * the Modal work well with assistive technologies, such as screen readers.
     */
    enforceFocus: PropTypes.bool,

    /**
     * When `true` The modal will restore focus to previously focused element once
     * modal is hidden
     */
    restoreFocus: PropTypes.bool,

    /**
     * When `true` The modal will show itself.
     */
    show: PropTypes.bool,

    /**
     * A callback fired when the header closeButton or non-static backdrop is
     * clicked. Required if either are specified.
     */
    onHide: PropTypes.func,

    /**
     * Callback fired before the Modal transitions in
     */
    onEnter: PropTypes.func,

    /**
     * Callback fired as the Modal begins to transition in
     */
    onEntering: PropTypes.func,

    /**
     * Callback fired after the Modal finishes transitioning in
     */
    onEntered: PropTypes.func,

    /**
     * Callback fired right before the Modal transitions out
     */
    onExit: PropTypes.func,

    /**
     * Callback fired as the Modal begins to transition out
     */
    onExiting: PropTypes.func,

    /**
     * Callback fired after the Modal finishes transitioning out
     */
    onExited: PropTypes.func,

    /**
     * @private
     */
    container: BaseModal.propTypes.container,
  },
);

var defaultProps$36 = _extends$2({}, BaseModal.defaultProps, {
  animation: true,
  dialogComponentClass: ModalDialog$1,
});

var childContextTypes$2 = {
  $bs_modal: PropTypes.shape({
    onHide: PropTypes.func,
  }),
};

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props) {
  return React.createElement(
    Fade,
    _extends$2({}, props, { timeout: Modal.TRANSITION_DURATION }),
  );
}

function BackdropTransition(props) {
  return React.createElement(
    Fade,
    _extends$2({}, props, { timeout: Modal.BACKDROP_TRANSITION_DURATION }),
  );
}

/* eslint-enable no-use-before-define */

var Modal = (function(_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleEntering = _this.handleEntering.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    _this.handleDialogClick = _this.handleDialogClick.bind(_this);
    _this.setModalRef = _this.setModalRef.bind(_this);

    _this.state = {
      style: {},
    };
    return _this;
  }

  Modal.prototype.getChildContext = function getChildContext() {
    return {
      $bs_modal: {
        onHide: this.props.onHide,
      },
    };
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    this.handleExited();
  };

  Modal.prototype.setModalRef = function setModalRef(ref) {
    this._modal = ref;
  };

  Modal.prototype.handleDialogClick = function handleDialogClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    this.props.onHide();
  };

  Modal.prototype.handleEntering = function handleEntering() {
    // FIXME: This should work even when animation is disabled.
    events$1.on(window, 'resize', this.handleWindowResize);
    this.updateStyle();
  };

  Modal.prototype.handleExited = function handleExited() {
    // FIXME: This should work even when animation is disabled.
    events$1.off(window, 'resize', this.handleWindowResize);
  };

  Modal.prototype.handleWindowResize = function handleWindowResize() {
    this.updateStyle();
  };

  Modal.prototype.updateStyle = function updateStyle() {
    if (!canUseDOM) {
      return;
    }

    var dialogNode = this._modal.getDialogElement();
    var dialogHeight = dialogNode.scrollHeight;

    var document = ownerDocument(dialogNode);
    var bodyIsOverflowing = isOverflowing(
      _reactDom.findDOMNode(this.props.container || document.body),
    );
    var modalIsOverflowing =
      dialogHeight > document.documentElement.clientHeight;

    this.setState({
      style: {
        paddingRight:
          bodyIsOverflowing && !modalIsOverflowing
            ? getScrollbarSize()
            : undefined,
        paddingLeft:
          !bodyIsOverflowing && modalIsOverflowing
            ? getScrollbarSize()
            : undefined,
      },
    });
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
      backdrop = _props.backdrop,
      backdropClassName = _props.backdropClassName,
      animation = _props.animation,
      show = _props.show,
      Dialog = _props.dialogComponentClass,
      className = _props.className,
      style = _props.style,
      children = _props.children,
      onEntering = _props.onEntering,
      onExited = _props.onExited,
      props = _objectWithoutProperties(_props, [
        'backdrop',
        'backdropClassName',
        'animation',
        'show',
        'dialogComponentClass',
        'className',
        'style',
        'children',
        'onEntering',
        'onExited',
      ]);

    var _splitComponentProps = splitComponentProps(props, BaseModal),
      baseModalProps = _splitComponentProps[0],
      dialogProps = _splitComponentProps[1];

    var inClassName = show && !animation && 'in';

    return React.createElement(
      BaseModal,
      _extends$2({}, baseModalProps, {
        ref: this.setModalRef,
        show: show,
        containerClassName: prefix(props, 'open'),
        transition: animation ? DialogTransition : undefined,
        backdrop: backdrop,
        backdropTransition: animation ? BackdropTransition : undefined,
        backdropClassName: classnames(
          prefix(props, 'backdrop'),
          backdropClassName,
          inClassName,
        ),
        onEntering: createChainedFunction(onEntering, this.handleEntering),
        onExited: createChainedFunction(onExited, this.handleExited),
      }),
      React.createElement(
        Dialog,
        _extends$2({}, dialogProps, {
          style: _extends$2({}, this.state.style, style),
          className: classnames(className, inClassName),
          onClick: backdrop === true ? this.handleDialogClick : null,
        }),
        children,
      ),
    );
  };

  return Modal;
})(React.Component);

Modal.propTypes = propTypes$42;
Modal.defaultProps = defaultProps$36;
Modal.childContextTypes = childContextTypes$2;

Modal.Body = Body;
Modal.Header = Header;
Modal.Title = Title;
Modal.Footer = Footer;

Modal.Dialog = ModalDialog$1;

Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;

bsClass('modal', bsSizes([Size.LARGE, Size.SMALL], Modal));

// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?

// TODO: This `bsStyle` is very unlike the others. Should we rename it?

// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
// Consider renaming or replacing them.

var propTypes$43 = {
  /**
   * Marks the NavItem with a matching `eventKey` as active. Has a
   * higher precedence over `activeHref`.
   */
  activeKey: PropTypes.any,

  /**
   * Marks the child NavItem with a matching `href` prop as active.
   */
  activeHref: PropTypes.string,

  /**
   * NavItems are be positioned vertically.
   */
  stacked: PropTypes.bool,

  justified: all(PropTypes.bool, function(_ref) {
    var justified = _ref.justified,
      navbar = _ref.navbar;
    return justified && navbar
      ? Error('justified navbar `Nav`s are not supported')
      : null;
  }),

  /**
   * A callback fired when a NavItem is selected.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   */
  onSelect: PropTypes.func,

  /**
   * ARIA role for the Nav, in the context of a TabContainer, the default will
   * be set to "tablist", but can be overridden by the Nav when set explicitly.
   *
   * When the role is set to "tablist" NavItem focus is managed according to
   * the ARIA authoring practices for tabs:
   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
   */
  role: PropTypes.string,

  /**
   * Apply styling an alignment for use in a Navbar. This prop will be set
   * automatically when the Nav is used inside a Navbar.
   */
  navbar: PropTypes.bool,

  /**
   * Float the Nav to the right. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullRight: PropTypes.bool,

  /**
   * Float the Nav to the left. When `navbar` is `true` the appropriate
   * contextual classes are added as well.
   */
  pullLeft: PropTypes.bool,
};

var defaultProps$37 = {
  justified: false,
  pullRight: false,
  pullLeft: false,
  stacked: false,
};

var contextTypes$4 = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    onSelect: PropTypes.func,
  }),

  $bs_tabContainer: PropTypes.shape({
    activeKey: PropTypes.any,
    onSelect: PropTypes.func.isRequired,
    getTabId: PropTypes.func.isRequired,
    getPaneId: PropTypes.func.isRequired,
  }),
};

var Nav = (function(_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Nav.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    if (!this._needsRefocus) {
      return;
    }

    this._needsRefocus = false;

    var children = this.props.children;

    var _getActiveProps = this.getActiveProps(),
      activeKey = _getActiveProps.activeKey,
      activeHref = _getActiveProps.activeHref;

    var activeChild = ValidChildren.find(children, function(child) {
      return _this2.isActive(child, activeKey, activeHref);
    });

    var childrenArray = ValidChildren.toArray(children);
    var activeChildIndex = childrenArray.indexOf(activeChild);

    var childNodes = _reactDom.findDOMNode(this).children;
    var activeNode = childNodes && childNodes[activeChildIndex];

    if (!activeNode || !activeNode.firstChild) {
      return;
    }

    activeNode.firstChild.focus();
  };

  Nav.prototype.getActiveProps = function getActiveProps() {
    var tabContainer = this.context.$bs_tabContainer;

    if (tabContainer) {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            this.props.activeKey == null && !this.props.activeHref,
            'Specifying a `<Nav>` `activeKey` or `activeHref` in the context of ' +
              'a `<TabContainer>` is not supported. Instead use `<TabContainer ' +
              ('activeKey={' + this.props.activeKey + '} />`.'),
          )
        : void 0;

      return tabContainer;
    }

    return this.props;
  };

  Nav.prototype.getNextActiveChild = function getNextActiveChild(offset) {
    var _this3 = this;

    var children = this.props.children;

    var validChildren = children.filter(function(child) {
      return child.props.eventKey != null && !child.props.disabled;
    });

    var _getActiveProps2 = this.getActiveProps(),
      activeKey = _getActiveProps2.activeKey,
      activeHref = _getActiveProps2.activeHref;

    var activeChild = ValidChildren.find(children, function(child) {
      return _this3.isActive(child, activeKey, activeHref);
    });

    // This assumes the active child is not disabled.
    var activeChildIndex = validChildren.indexOf(activeChild);
    if (activeChildIndex === -1) {
      // Something has gone wrong. Select the first valid child we can find.
      return validChildren[0];
    }

    var nextIndex = activeChildIndex + offset;
    var numValidChildren = validChildren.length;

    if (nextIndex >= numValidChildren) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = numValidChildren - 1;
    }

    return validChildren[nextIndex];
  };

  Nav.prototype.getTabProps = function getTabProps(
    child,
    tabContainer,
    navRole,
    active,
    onSelect,
  ) {
    var _this4 = this;

    if (!tabContainer && navRole !== 'tablist') {
      // No tab props here.
      return null;
    }

    var _child$props = child.props,
      id = _child$props.id,
      controls = _child$props['aria-controls'],
      eventKey = _child$props.eventKey,
      role = _child$props.role,
      onKeyDown = _child$props.onKeyDown,
      tabIndex = _child$props.tabIndex;

    if (tabContainer) {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            !id && !controls,
            'In the context of a `<TabContainer>`, `<NavItem>`s are given ' +
              'generated `id` and `aria-controls` attributes for the sake of ' +
              'proper component accessibility. Any provided ones will be ignored. ' +
              'To control these attributes directly, provide a `generateChildId` ' +
              'prop to the parent `<TabContainer>`.',
          )
        : void 0;

      id = tabContainer.getTabId(eventKey);
      controls = tabContainer.getPaneId(eventKey);
    }

    if (navRole === 'tablist') {
      role = role || 'tab';
      onKeyDown = createChainedFunction(function(event) {
        return _this4.handleTabKeyDown(onSelect, event);
      }, onKeyDown);
      tabIndex = active ? tabIndex : -1;
    }

    return {
      id: id,
      role: role,
      onKeyDown: onKeyDown,
      'aria-controls': controls,
      tabIndex: tabIndex,
    };
  };

  Nav.prototype.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
    var nextActiveChild = void 0;

    switch (event.keyCode) {
      case keycode.codes.left:
      case keycode.codes.up:
        nextActiveChild = this.getNextActiveChild(-1);
        break;
      case keycode.codes.right:
      case keycode.codes.down:
        nextActiveChild = this.getNextActiveChild(1);
        break;
      default:
        // It was a different key; don't handle this keypress.
        return;
    }

    event.preventDefault();

    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey != null) {
      onSelect(nextActiveChild.props.eventKey);
    }

    this._needsRefocus = true;
  };

  Nav.prototype.isActive = function isActive(_ref2, activeKey, activeHref) {
    var props = _ref2.props;

    if (
      props.active ||
      (activeKey != null && props.eventKey === activeKey) ||
      (activeHref && props.href === activeHref)
    ) {
      return true;
    }

    return props.active;
  };

  Nav.prototype.render = function render() {
    var _extends2,
      _this5 = this;

    var _props = this.props,
      stacked = _props.stacked,
      justified = _props.justified,
      onSelect = _props.onSelect,
      propsRole = _props.role,
      propsNavbar = _props.navbar,
      pullRight = _props.pullRight,
      pullLeft = _props.pullLeft,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'stacked',
        'justified',
        'onSelect',
        'role',
        'navbar',
        'pullRight',
        'pullLeft',
        'className',
        'children',
      ]);

    var tabContainer = this.context.$bs_tabContainer;
    var role = propsRole || (tabContainer ? 'tablist' : null);

    var _getActiveProps3 = this.getActiveProps(),
      activeKey = _getActiveProps3.activeKey,
      activeHref = _getActiveProps3.activeHref;

    delete props.activeKey; // Accessed via this.getActiveProps().
    delete props.activeHref; // Accessed via this.getActiveProps().

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps, 'stacked')] = stacked),
      (_extends2[prefix(bsProps, 'justified')] = justified),
      _extends2),
    );

    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
    var pullLeftClassName = void 0;
    var pullRightClassName = void 0;

    if (navbar) {
      var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

      classes[prefix(navbarProps, 'nav')] = true;

      pullRightClassName = prefix(navbarProps, 'right');
      pullLeftClassName = prefix(navbarProps, 'left');
    } else {
      pullRightClassName = 'pull-right';
      pullLeftClassName = 'pull-left';
    }

    classes[pullRightClassName] = pullRight;
    classes[pullLeftClassName] = pullLeft;

    return React.createElement(
      'ul',
      _extends$2({}, elementProps, {
        role: role,
        className: classnames(className, classes),
      }),
      ValidChildren.map(children, function(child) {
        var active = _this5.isActive(child, activeKey, activeHref);
        var childOnSelect = createChainedFunction(
          child.props.onSelect,
          onSelect,
          navbar && navbar.onSelect,
          tabContainer && tabContainer.onSelect,
        );

        return cloneElement(
          child,
          _extends$2(
            {},
            _this5.getTabProps(
              child,
              tabContainer,
              role,
              active,
              childOnSelect,
            ),
            {
              active: active,
              activeKey: activeKey,
              activeHref: activeHref,
              onSelect: childOnSelect,
            },
          ),
        );
      }),
    );
  };

  return Nav;
})(React.Component);

Nav.propTypes = propTypes$43;
Nav.defaultProps = defaultProps$37;
Nav.contextTypes = contextTypes$4;

var Nav$1 = bsClass('nav', bsStyles(['tabs', 'pills'], Nav));

var contextTypes$5 = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
  }),
};

var NavbarBrand = (function(_React$Component) {
  _inherits(NavbarBrand, _React$Component);

  function NavbarBrand() {
    _classCallCheck(this, NavbarBrand);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  NavbarBrand.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['className', 'children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = prefix(navbarProps, 'brand');

    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: classnames(children.props.className, className, bsClassName),
      });
    }

    return React.createElement(
      'span',
      _extends$2({}, props, { className: classnames(className, bsClassName) }),
      children,
    );
  };

  return NavbarBrand;
})(React.Component);

NavbarBrand.contextTypes = contextTypes$5;

var contextTypes$6 = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
  }),
};

var NavbarCollapse = (function(_React$Component) {
  _inherits(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    _classCallCheck(this, NavbarCollapse);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  NavbarCollapse.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['children']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = prefix(navbarProps, 'collapse');

    return React.createElement(
      Collapse,
      _extends$2({ in: navbarProps.expanded }, props),
      React.createElement('div', { className: bsClassName }, children),
    );
  };

  return NavbarCollapse;
})(React.Component);

NavbarCollapse.contextTypes = contextTypes$6;

var contextTypes$7 = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
  }),
};

var NavbarHeader = (function(_React$Component) {
  _inherits(NavbarHeader, _React$Component);

  function NavbarHeader() {
    _classCallCheck(this, NavbarHeader);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  NavbarHeader.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var bsClassName = prefix(navbarProps, 'header');

    return React.createElement(
      'div',
      _extends$2({}, props, { className: classnames(className, bsClassName) }),
    );
  };

  return NavbarHeader;
})(React.Component);

NavbarHeader.contextTypes = contextTypes$7;

var propTypes$44 = {
  onClick: PropTypes.func,
  /**
   * The toggle content, if left empty it will render the default toggle (seen above).
   */
  children: PropTypes.node,
};

var contextTypes$8 = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
  }),
};

var NavbarToggle = (function(_React$Component) {
  _inherits(NavbarToggle, _React$Component);

  function NavbarToggle() {
    _classCallCheck(this, NavbarToggle);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  NavbarToggle.prototype.render = function render() {
    var _props = this.props,
      onClick = _props.onClick,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'onClick',
        'className',
        'children',
      ]);

    var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };

    var buttonProps = _extends$2(
      {
        type: 'button',
      },
      props,
      {
        onClick: createChainedFunction(onClick, navbarProps.onToggle),
        className: classnames(
          className,
          prefix(navbarProps, 'toggle'),
          !navbarProps.expanded && 'collapsed',
        ),
      },
    );

    if (children) {
      return React.createElement('button', buttonProps, children);
    }

    return React.createElement(
      'button',
      buttonProps,
      React.createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation',
      ),
      React.createElement('span', { className: 'icon-bar' }),
      React.createElement('span', { className: 'icon-bar' }),
      React.createElement('span', { className: 'icon-bar' }),
    );
  };

  return NavbarToggle;
})(React.Component);

NavbarToggle.propTypes = propTypes$44;
NavbarToggle.contextTypes = contextTypes$8;

// TODO: Remove this pragma once we upgrade eslint-config-airbnb.
/* eslint-disable react/no-multi-comp */

var propTypes$45 = {
  /**
   * Create a fixed navbar along the top of the screen, that scrolls with the
   * page
   */
  fixedTop: PropTypes.bool,
  /**
   * Create a fixed navbar along the bottom of the screen, that scrolls with
   * the page
   */
  fixedBottom: PropTypes.bool,
  /**
   * Create a full-width navbar that scrolls away with the page
   */
  staticTop: PropTypes.bool,
  /**
   * An alternative dark visual style for the Navbar
   */
  inverse: PropTypes.bool,
  /**
   * Allow the Navbar to fluidly adjust to the page or container width, instead
   * of at the predefined screen breakpoints
   */
  fluid: PropTypes.bool,

  /**
   * Set a custom element for this component.
   */
  componentClass: elementType,
  /**
   * A callback fired when the `<Navbar>` body collapses or expands. Fired when
   * a `<Navbar.Toggle>` is clicked and called with the new `expanded`
   * boolean value.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,
  /**
   * A callback fired when a descendant of a child `<Nav>` is selected. Should
   * be used to execute complex closing or other miscellaneous actions desired
   * after selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`
   * descendants exist. The callback is called with an eventKey, which is a
   * prop from the selected `<Nav>` descendant, and an event.
   *
   * ```js
   * function (
   *  Any eventKey,
   *  SyntheticEvent event?
   * )
   * ```
   *
   * For basic closing behavior after all `<Nav>` descendant onSelect events in
   * mobile viewports, try using collapseOnSelect.
   *
   * Note: If you are manually closing the navbar using this `OnSelect` prop,
   * ensure that you are setting `expanded` to false and not *toggling* between
   * true and false.
   */
  onSelect: PropTypes.func,
  /**
   * Sets `expanded` to `false` after the onSelect event of a descendant of a
   * child `<Nav>`. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * The onSelect callback should be used instead for more complex operations
   * that need to be executed after the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: PropTypes.bool,
  /**
   * Explicitly set the visiblity of the navbar body
   *
   * @controllable onToggle
   */
  expanded: PropTypes.bool,

  role: PropTypes.string,
};

var defaultProps$38 = {
  componentClass: 'nav',
  fixedTop: false,
  fixedBottom: false,
  staticTop: false,
  inverse: false,
  fluid: false,
  collapseOnSelect: false,
};

var childContextTypes$3 = {
  $bs_navbar: PropTypes.shape({
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
  }),
};

var Navbar = (function(_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props, context) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleCollapse = _this.handleCollapse.bind(_this);
    return _this;
  }

  Navbar.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
      bsClass$$1 = _props.bsClass,
      expanded = _props.expanded,
      onSelect = _props.onSelect,
      collapseOnSelect = _props.collapseOnSelect;

    return {
      $bs_navbar: {
        bsClass: bsClass$$1,
        expanded: expanded,
        onToggle: this.handleToggle,
        onSelect: createChainedFunction(
          onSelect,
          collapseOnSelect ? this.handleCollapse : null,
        ),
      },
    };
  };

  Navbar.prototype.handleCollapse = function handleCollapse() {
    var _props2 = this.props,
      onToggle = _props2.onToggle,
      expanded = _props2.expanded;

    if (expanded) {
      onToggle(false);
    }
  };

  Navbar.prototype.handleToggle = function handleToggle() {
    var _props3 = this.props,
      onToggle = _props3.onToggle,
      expanded = _props3.expanded;

    onToggle(!expanded);
  };

  Navbar.prototype.render = function render() {
    var _extends2;

    var _props4 = this.props,
      Component = _props4.componentClass,
      fixedTop = _props4.fixedTop,
      fixedBottom = _props4.fixedBottom,
      staticTop = _props4.staticTop,
      inverse = _props4.inverse,
      fluid = _props4.fluid,
      className = _props4.className,
      children = _props4.children,
      props = _objectWithoutProperties(_props4, [
        'componentClass',
        'fixedTop',
        'fixedBottom',
        'staticTop',
        'inverse',
        'fluid',
        'className',
        'children',
      ]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, [
        'expanded',
        'onToggle',
        'onSelect',
        'collapseOnSelect',
      ]),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one

    if (elementProps.role === undefined && Component !== 'nav') {
      elementProps.role = 'navigation';
    }

    if (inverse) {
      bsProps.bsStyle = Style.INVERSE;
    }

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps, 'fixed-top')] = fixedTop),
      (_extends2[prefix(bsProps, 'fixed-bottom')] = fixedBottom),
      (_extends2[prefix(bsProps, 'static-top')] = staticTop),
      _extends2),
    );

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      React.createElement(Grid$1, { fluid: fluid }, children),
    );
  };

  return Navbar;
})(React.Component);

Navbar.propTypes = propTypes$45;
Navbar.defaultProps = defaultProps$38;
Navbar.childContextTypes = childContextTypes$3;

bsClass('navbar', Navbar);

var UncontrollableNavbar = uncontrollable$1(Navbar, { expanded: 'onToggle' });

function createSimpleWrapper(tag, suffix, displayName) {
  var Wrapper = function Wrapper(_ref, _ref2) {
    var _ref2$$bs_navbar = _ref2.$bs_navbar,
      navbarProps =
        _ref2$$bs_navbar === undefined
          ? { bsClass: 'navbar' }
          : _ref2$$bs_navbar;

    var Component = _ref.componentClass,
      className = _ref.className,
      pullRight = _ref.pullRight,
      pullLeft = _ref.pullLeft,
      props = _objectWithoutProperties(_ref, [
        'componentClass',
        'className',
        'pullRight',
        'pullLeft',
      ]);

    return React.createElement(
      Component,
      _extends$2({}, props, {
        className: classnames(
          className,
          prefix(navbarProps, suffix),
          pullRight && prefix(navbarProps, 'right'),
          pullLeft && prefix(navbarProps, 'left'),
        ),
      }),
    );
  };

  Wrapper.displayName = displayName;

  Wrapper.propTypes = {
    componentClass: elementType,
    pullRight: PropTypes.bool,
    pullLeft: PropTypes.bool,
  };

  Wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false,
  };

  Wrapper.contextTypes = {
    $bs_navbar: PropTypes.shape({
      bsClass: PropTypes.string,
    }),
  };

  return Wrapper;
}

UncontrollableNavbar.Brand = NavbarBrand;
UncontrollableNavbar.Header = NavbarHeader;
UncontrollableNavbar.Toggle = NavbarToggle;
UncontrollableNavbar.Collapse = NavbarCollapse;

UncontrollableNavbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
UncontrollableNavbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
UncontrollableNavbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');

// Set bsStyles here so they can be overridden.
bsStyles([Style.DEFAULT, Style.INVERSE], Style.DEFAULT, UncontrollableNavbar);

var propTypes$46 = _extends$2({}, UncontrolledDropdown.propTypes, {
  // Toggle props.
  title: PropTypes.node.isRequired,
  noCaret: PropTypes.bool,
  active: PropTypes.bool,
  activeKey: PropTypes.any,
  activeHref: PropTypes.string,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node,
});

var NavDropdown = (function(_React$Component) {
  _inherits(NavDropdown, _React$Component);

  function NavDropdown() {
    _classCallCheck(this, NavDropdown);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  NavDropdown.prototype.isActive = function isActive(
    _ref,
    activeKey,
    activeHref,
  ) {
    var props = _ref.props;

    var _this2 = this;

    if (
      props.active ||
      (activeKey != null && props.eventKey === activeKey) ||
      (activeHref && props.href === activeHref)
    ) {
      return true;
    }

    if (
      ValidChildren.some(props.children, function(child) {
        return _this2.isActive(child, activeKey, activeHref);
      })
    ) {
      return true;
    }

    return props.active;
  };

  NavDropdown.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
      title = _props.title,
      activeKey = _props.activeKey,
      activeHref = _props.activeHref,
      className = _props.className,
      style = _props.style,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'title',
        'activeKey',
        'activeHref',
        'className',
        'style',
        'children',
      ]);

    var active = this.isActive(this, activeKey, activeHref);
    delete props.active; // Accessed via this.isActive().
    delete props.eventKey; // Accessed via this.isActive().

    var _splitComponentProps = splitComponentProps(
        props,
        UncontrolledDropdown.ControlledComponent,
      ),
      dropdownProps = _splitComponentProps[0],
      toggleProps = _splitComponentProps[1];

    // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.

    return React.createElement(
      UncontrolledDropdown,
      _extends$2({}, dropdownProps, {
        componentClass: 'li',
        className: classnames(className, { active: active }),
        style: style,
      }),
      React.createElement(
        UncontrolledDropdown.Toggle,
        _extends$2({}, toggleProps, { useAnchor: true }),
        title,
      ),
      React.createElement(
        UncontrolledDropdown.Menu,
        null,
        ValidChildren.map(children, function(child) {
          return React.cloneElement(child, {
            active: _this3.isActive(child, activeKey, activeHref),
          });
        }),
      ),
    );
  };

  return NavDropdown;
})(React.Component);

NavDropdown.propTypes = propTypes$46;

var propTypes$47 = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  role: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  eventKey: PropTypes.any,
};

var defaultProps$39 = {
  active: false,
  disabled: false,
};

var NavItem = (function(_React$Component) {
  _inherits(NavItem, _React$Component);

  function NavItem(props, context) {
    _classCallCheck(this, NavItem);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  NavItem.prototype.handleClick = function handleClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onSelect) {
      this.props.onSelect(this.props.eventKey, e);
    }
  };

  NavItem.prototype.render = function render() {
    var _props = this.props,
      active = _props.active,
      disabled = _props.disabled,
      onClick = _props.onClick,
      className = _props.className,
      style = _props.style,
      props = _objectWithoutProperties(_props, [
        'active',
        'disabled',
        'onClick',
        'className',
        'style',
      ]);

    delete props.onSelect;
    delete props.eventKey;

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey;
    delete props.activeHref;

    if (!props.role) {
      if (props.href === '#') {
        props.role = 'button';
      }
    } else if (props.role === 'tab') {
      props['aria-selected'] = active;
    }

    return React.createElement(
      'li',
      {
        role: 'presentation',
        className: classnames(className, {
          active: active,
          disabled: disabled,
        }),
        style: style,
      },
      React.createElement(
        SafeAnchor,
        _extends$2({}, props, {
          disabled: disabled,
          onClick: createChainedFunction(onClick, this.handleClick),
        }),
      ),
    );
  };

  return NavItem;
})(React.Component);

NavItem.propTypes = propTypes$47;
NavItem.defaultProps = defaultProps$39;

var offset_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = offset;

  var _contains2 = _interopRequireDefault(contains);

  var _isWindow2 = _interopRequireDefault(isWindow);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function offset(node) {
    var doc = (0, _ownerDocument2.default)(node),
      win = (0, _isWindow2.default)(doc),
      docElem = doc && doc.documentElement,
      box = { top: 0, left: 0, height: 0, width: 0 };

    if (!doc) return;

    // Make sure it's not a disconnected DOM node
    if (!(0, _contains2.default)(docElem, node)) return box;

    if (node.getBoundingClientRect !== undefined)
      box = node.getBoundingClientRect();

    // IE8 getBoundingClientRect doesn't support width & height
    box = {
      top:
        box.top +
        (win.pageYOffset || docElem.scrollTop) -
        (docElem.clientTop || 0),
      left:
        box.left +
        (win.pageXOffset || docElem.scrollLeft) -
        (docElem.clientLeft || 0),
      width: (box.width == null ? node.offsetWidth : box.width) || 0,
      height: (box.height == null ? node.offsetHeight : box.height) || 0,
    };

    return box;
  }
  module.exports = exports['default'];
});

unwrapExports(offset_1);

var offsetParent_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = offsetParent;

  var _ownerDocument2 = _interopRequireDefault(ownerDocument_1);

  var _style2 = _interopRequireDefault(style_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
  }

  function offsetParent(node) {
    var doc = (0, _ownerDocument2.default)(node),
      offsetParent = node && node.offsetParent;

    while (
      offsetParent &&
      nodeName(node) !== 'html' &&
      (0, _style2.default)(offsetParent, 'position') === 'static'
    ) {
      offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || doc.documentElement;
  }
  module.exports = exports['default'];
});

unwrapExports(offsetParent_1);

var scrollTop_1 = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = scrollTop;

  var _isWindow2 = _interopRequireDefault(isWindow);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function scrollTop(node, val) {
    var win = (0, _isWindow2.default)(node);

    if (val === undefined)
      return win
        ? 'pageYOffset' in win
          ? win.pageYOffset
          : win.document.documentElement.scrollTop
        : node.scrollTop;

    if (win)
      win.scrollTo(
        'pageXOffset' in win
          ? win.pageXOffset
          : win.document.documentElement.scrollLeft,
        val,
      );
    else node.scrollTop = val;
  }
  module.exports = exports['default'];
});

unwrapExports(scrollTop_1);

var scrollLeft = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = scrollTop;

  var _isWindow2 = _interopRequireDefault(isWindow);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function scrollTop(node, val) {
    var win = (0, _isWindow2.default)(node);

    if (val === undefined)
      return win
        ? 'pageXOffset' in win
          ? win.pageXOffset
          : win.document.documentElement.scrollLeft
        : node.scrollLeft;

    if (win)
      win.scrollTo(
        val,
        'pageYOffset' in win
          ? win.pageYOffset
          : win.document.documentElement.scrollTop,
      );
    else node.scrollLeft = val;
  }
  module.exports = exports['default'];
});

unwrapExports(scrollLeft);

var position_1 = createCommonjsModule(function(module, exports) {
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

  exports.default = position;

  var _offset2 = _interopRequireDefault(offset_1);

  var _offsetParent2 = _interopRequireDefault(offsetParent_1);

  var _scrollTop2 = _interopRequireDefault(scrollTop_1);

  var _scrollLeft2 = _interopRequireDefault(scrollLeft);

  var _style2 = _interopRequireDefault(style_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function nodeName(node) {
    return node.nodeName && node.nodeName.toLowerCase();
  }

  function position(node, offsetParent) {
    var parentOffset = { top: 0, left: 0 },
      offset;

    // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
    // because it is its only offset parent
    if ((0, _style2.default)(node, 'position') === 'fixed') {
      offset = node.getBoundingClientRect();
    } else {
      offsetParent = offsetParent || (0, _offsetParent2.default)(node);
      offset = (0, _offset2.default)(node);

      if (nodeName(offsetParent) !== 'html')
        parentOffset = (0, _offset2.default)(offsetParent);

      parentOffset.top +=
        parseInt((0, _style2.default)(offsetParent, 'borderTopWidth'), 10) -
          (0, _scrollTop2.default)(offsetParent) || 0;
      parentOffset.left +=
        parseInt((0, _style2.default)(offsetParent, 'borderLeftWidth'), 10) -
          (0, _scrollLeft2.default)(offsetParent) || 0;
    }

    // Subtract parent offsets and node margins
    return _extends({}, offset, {
      top:
        offset.top -
        parentOffset.top -
        (parseInt((0, _style2.default)(node, 'marginTop'), 10) || 0),
      left:
        offset.left -
        parentOffset.left -
        (parseInt((0, _style2.default)(node, 'marginLeft'), 10) || 0),
    });
  }
  module.exports = exports['default'];
});

unwrapExports(position_1);

var calculatePosition_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;
  exports.default = calculatePosition;

  var _offset2 = _interopRequireDefault(offset_1);

  var _position2 = _interopRequireDefault(position_1);

  var _scrollTop2 = _interopRequireDefault(scrollTop_1);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function getContainerDimensions(containerNode) {
    var width = void 0,
      height = void 0,
      scroll = void 0;

    if (containerNode.tagName === 'BODY') {
      width = window.innerWidth;
      height = window.innerHeight;

      scroll =
        (0, _scrollTop2.default)(
          (0, _ownerDocument2.default)(containerNode).documentElement,
        ) || (0, _scrollTop2.default)(containerNode);
    } else {
      var _getOffset = (0, _offset2.default)(containerNode);

      width = _getOffset.width;
      height = _getOffset.height;

      scroll = (0, _scrollTop2.default)(containerNode);
    }

    return { width: width, height: height, scroll: scroll };
  }

  function getTopDelta(top, overlayHeight, container, padding) {
    var containerDimensions = getContainerDimensions(container);
    var containerScroll = containerDimensions.scroll;
    var containerHeight = containerDimensions.height;

    var topEdgeOffset = top - padding - containerScroll;
    var bottomEdgeOffset = top + padding - containerScroll + overlayHeight;

    if (topEdgeOffset < 0) {
      return -topEdgeOffset;
    } else if (bottomEdgeOffset > containerHeight) {
      return containerHeight - bottomEdgeOffset;
    } else {
      return 0;
    }
  }

  function getLeftDelta(left, overlayWidth, container, padding) {
    var containerDimensions = getContainerDimensions(container);
    var containerWidth = containerDimensions.width;

    var leftEdgeOffset = left - padding;
    var rightEdgeOffset = left + padding + overlayWidth;

    if (leftEdgeOffset < 0) {
      return -leftEdgeOffset;
    } else if (rightEdgeOffset > containerWidth) {
      return containerWidth - rightEdgeOffset;
    }

    return 0;
  }

  function calculatePosition(
    placement,
    overlayNode,
    target,
    container,
    padding,
  ) {
    var childOffset =
      container.tagName === 'BODY'
        ? (0, _offset2.default)(target)
        : (0, _position2.default)(target, container);

    var _getOffset2 = (0, _offset2.default)(overlayNode),
      overlayHeight = _getOffset2.height,
      overlayWidth = _getOffset2.width;

    var positionLeft = void 0,
      positionTop = void 0,
      arrowOffsetLeft = void 0,
      arrowOffsetTop = void 0;

    if (placement === 'left' || placement === 'right') {
      positionTop = childOffset.top + (childOffset.height - overlayHeight) / 2;

      if (placement === 'left') {
        positionLeft = childOffset.left - overlayWidth;
      } else {
        positionLeft = childOffset.left + childOffset.width;
      }

      var topDelta = getTopDelta(
        positionTop,
        overlayHeight,
        container,
        padding,
      );

      positionTop += topDelta;
      arrowOffsetTop = 50 * (1 - 2 * topDelta / overlayHeight) + '%';
      arrowOffsetLeft = void 0;
    } else if (placement === 'top' || placement === 'bottom') {
      positionLeft = childOffset.left + (childOffset.width - overlayWidth) / 2;

      if (placement === 'top') {
        positionTop = childOffset.top - overlayHeight;
      } else {
        positionTop = childOffset.top + childOffset.height;
      }

      var leftDelta = getLeftDelta(
        positionLeft,
        overlayWidth,
        container,
        padding,
      );

      positionLeft += leftDelta;
      arrowOffsetLeft = 50 * (1 - 2 * leftDelta / overlayWidth) + '%';
      arrowOffsetTop = void 0;
    } else {
      throw new Error(
        'calcOverlayPosition(): No such placement of "' +
          placement +
          '" found.',
      );
    }

    return {
      positionLeft: positionLeft,
      positionTop: positionTop,
      arrowOffsetLeft: arrowOffsetLeft,
      arrowOffsetTop: arrowOffsetTop,
    };
  }
  module.exports = exports['default'];
});

unwrapExports(calculatePosition_1);

var Position_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

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

  var _classnames2 = _interopRequireDefault(classnames);

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _componentOrElement2 = _interopRequireDefault(componentOrElement);

  var _react2 = _interopRequireDefault(React);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _calculatePosition2 = _interopRequireDefault(calculatePosition_1);

  var _getContainer2 = _interopRequireDefault(getContainer_1);

  var _ownerDocument2 = _interopRequireDefault(ownerDocument$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
    return target;
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

  /**
   * The Position component calculates the coordinates for its child, to position
   * it relative to a `target` component or node. Useful for creating callouts
   * and tooltips, the Position component injects a `style` props with `left` and
   * `top` values for positioning your component.
   *
   * It also injects "arrow" `left`, and `top` values for styling callout arrows
   * for giving your components a sense of directionality.
   */
  var Position = (function(_React$Component) {
    _inherits(Position, _React$Component);

    function Position(props, context) {
      _classCallCheck(this, Position);

      var _this = _possibleConstructorReturn(
        this,
        _React$Component.call(this, props, context),
      );

      _this.getTarget = function() {
        var target = _this.props.target;

        var targetElement = typeof target === 'function' ? target() : target;
        return (
          (targetElement && _reactDom2.default.findDOMNode(targetElement)) ||
          null
        );
      };

      _this.maybeUpdatePosition = function(placementChanged) {
        var target = _this.getTarget();

        if (
          !_this.props.shouldUpdatePosition &&
          target === _this._lastTarget &&
          !placementChanged
        ) {
          return;
        }

        _this.updatePosition(target);
      };

      _this.state = {
        positionLeft: 0,
        positionTop: 0,
        arrowOffsetLeft: null,
        arrowOffsetTop: null,
      };

      _this._needsFlush = false;
      _this._lastTarget = null;
      return _this;
    }

    Position.prototype.componentDidMount = function componentDidMount() {
      this.updatePosition(this.getTarget());
    };

    Position.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
      this._needsFlush = true;
    };

    Position.prototype.componentDidUpdate = function componentDidUpdate(
      prevProps,
    ) {
      if (this._needsFlush) {
        this._needsFlush = false;
        this.maybeUpdatePosition(this.props.placement !== prevProps.placement);
      }
    };

    Position.prototype.render = function render() {
      var _props = this.props,
        children = _props.children,
        className = _props.className,
        props = _objectWithoutProperties(_props, ['children', 'className']);

      var _state = this.state,
        positionLeft = _state.positionLeft,
        positionTop = _state.positionTop,
        arrowPosition = _objectWithoutProperties(_state, [
          'positionLeft',
          'positionTop',
        ]);

      // These should not be forwarded to the child.

      delete props.target;
      delete props.container;
      delete props.containerPadding;
      delete props.shouldUpdatePosition;

      var child = _react2.default.Children.only(children);
      return (0, React.cloneElement)(
        child,
        _extends({}, props, arrowPosition, {
          // FIXME: Don't forward `positionLeft` and `positionTop` via both props
          // and `props.style`.
          positionLeft: positionLeft,
          positionTop: positionTop,
          className: (0, _classnames2.default)(
            className,
            child.props.className,
          ),
          style: _extends({}, child.props.style, {
            left: positionLeft,
            top: positionTop,
          }),
        }),
      );
    };

    Position.prototype.updatePosition = function updatePosition(target) {
      this._lastTarget = target;

      if (!target) {
        this.setState({
          positionLeft: 0,
          positionTop: 0,
          arrowOffsetLeft: null,
          arrowOffsetTop: null,
        });

        return;
      }

      var overlay = _reactDom2.default.findDOMNode(this);
      var container = (0, _getContainer2.default)(
        this.props.container,
        (0, _ownerDocument2.default)(this).body,
      );

      this.setState(
        (0, _calculatePosition2.default)(
          this.props.placement,
          overlay,
          target,
          container,
          this.props.containerPadding,
        ),
      );
    };

    return Position;
  })(_react2.default.Component);

  Position.propTypes = {
    /**
     * A node, element, or function that returns either. The child will be
     * be positioned next to the `target` specified.
     */
    target: _propTypes2.default.oneOfType([
      _componentOrElement2.default,
      _propTypes2.default.func,
    ]),

    /**
     * "offsetParent" of the component
     */
    container: _propTypes2.default.oneOfType([
      _componentOrElement2.default,
      _propTypes2.default.func,
    ]),
    /**
     * Minimum spacing in pixels between container border and component border
     */
    containerPadding: _propTypes2.default.number,
    /**
     * How to position the component relative to the target
     */
    placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * Whether the position should be changed on each update
     */
    shouldUpdatePosition: _propTypes2.default.bool,
  };

  Position.displayName = 'Position';

  Position.defaultProps = {
    containerPadding: 0,
    placement: 'right',
    shouldUpdatePosition: false,
  };

  exports.default = Position;
  module.exports = exports['default'];
});

unwrapExports(Position_1);

var Overlay_1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

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

  var _propTypes2 = _interopRequireDefault(PropTypes);

  var _elementType2 = _interopRequireDefault(elementType_1);

  var _react2 = _interopRequireDefault(React);

  var _Portal2 = _interopRequireDefault(Portal_1);

  var _Position2 = _interopRequireDefault(Position_1);

  var _RootCloseWrapper2 = _interopRequireDefault(RootCloseWrapper_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};
    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }
    return target;
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

  /**
   * Built on top of `<Position/>` and `<Portal/>`, the overlay component is great for custom tooltip overlays.
   */
  var Overlay = (function(_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay(props, context) {
      _classCallCheck(this, Overlay);

      var _this = _possibleConstructorReturn(
        this,
        _React$Component.call(this, props, context),
      );

      _this.handleHidden = function() {
        _this.setState({ exited: true });

        if (_this.props.onExited) {
          var _this$props;

          (_this$props = _this.props).onExited.apply(_this$props, arguments);
        }
      };

      _this.state = { exited: !props.show };
      _this.onHiddenListener = _this.handleHidden.bind(_this);
      return _this;
    }

    Overlay.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps,
    ) {
      if (nextProps.show) {
        this.setState({ exited: false });
      } else if (!nextProps.transition) {
        // Otherwise let handleHidden take care of marking exited.
        this.setState({ exited: true });
      }
    };

    Overlay.prototype.render = function render() {
      var _props = this.props,
        container = _props.container,
        containerPadding = _props.containerPadding,
        target = _props.target,
        placement = _props.placement,
        shouldUpdatePosition = _props.shouldUpdatePosition,
        rootClose = _props.rootClose,
        children = _props.children,
        Transition = _props.transition,
        props = _objectWithoutProperties(_props, [
          'container',
          'containerPadding',
          'target',
          'placement',
          'shouldUpdatePosition',
          'rootClose',
          'children',
          'transition',
        ]);

      // Don't un-render the overlay while it's transitioning out.

      var mountOverlay = props.show || (Transition && !this.state.exited);
      if (!mountOverlay) {
        // Don't bother showing anything if we don't have to.
        return null;
      }

      var child = children;

      // Position is be inner-most because it adds inline styles into the child,
      // which the other wrappers don't forward correctly.
      child = _react2.default.createElement(
        _Position2.default,
        {
          container: container,
          containerPadding: containerPadding,
          target: target,
          placement: placement,
          shouldUpdatePosition: shouldUpdatePosition,
        },
        child,
      );

      if (Transition) {
        var onExit = props.onExit,
          onExiting = props.onExiting,
          onEnter = props.onEnter,
          onEntering = props.onEntering,
          onEntered = props.onEntered;

        // This animates the child node by injecting props, so it must precede
        // anything that adds a wrapping div.

        child = _react2.default.createElement(
          Transition,
          {
            in: props.show,
            appear: true,
            onExit: onExit,
            onExiting: onExiting,
            onExited: this.onHiddenListener,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered,
          },
          child,
        );
      }

      // This goes after everything else because it adds a wrapping div.
      if (rootClose) {
        child = _react2.default.createElement(
          _RootCloseWrapper2.default,
          { onRootClose: props.onHide },
          child,
        );
      }

      return _react2.default.createElement(
        _Portal2.default,
        { container: container },
        child,
      );
    };

    return Overlay;
  })(_react2.default.Component);

  Overlay.propTypes = _extends(
    {},
    _Portal2.default.propTypes,
    _Position2.default.propTypes,
    {
      /**
       * Set the visibility of the Overlay
       */
      show: _propTypes2.default.bool,

      /**
       * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
       */
      rootClose: _propTypes2.default.bool,

      /**
       * A Callback fired by the Overlay when it wishes to be hidden.
       *
       * __required__ when `rootClose` is `true`.
       *
       * @type func
       */
      onHide: function onHide(props) {
        var propType = _propTypes2.default.func;
        if (props.rootClose) {
          propType = propType.isRequired;
        }

        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        return propType.apply(undefined, [props].concat(args));
      },

      /**
       * A `react-transition-group@2.0.0` `<Transition/>` component
       * used to animate the overlay as it changes visibility.
       */
      transition: _elementType2.default,

      /**
       * Callback fired before the Overlay transitions in
       */
      onEnter: _propTypes2.default.func,

      /**
       * Callback fired as the Overlay begins to transition in
       */
      onEntering: _propTypes2.default.func,

      /**
       * Callback fired after the Overlay finishes transitioning in
       */
      onEntered: _propTypes2.default.func,

      /**
       * Callback fired right before the Overlay transitions out
       */
      onExit: _propTypes2.default.func,

      /**
       * Callback fired as the Overlay begins to transition out
       */
      onExiting: _propTypes2.default.func,

      /**
       * Callback fired after the Overlay finishes transitioning out
       */
      onExited: _propTypes2.default.func,
    },
  );

  exports.default = Overlay;
  module.exports = exports['default'];
});

var BaseOverlay = unwrapExports(Overlay_1);

var propTypes$48 = _extends$2({}, BaseOverlay.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: PropTypes.bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: PropTypes.bool,
  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: PropTypes.func,

  /**
   * Use animation
   */
  animation: PropTypes.oneOfType([PropTypes.bool, elementType]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: PropTypes.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: PropTypes.func,

  /**
   * Sets the direction of the Overlay.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
});

var defaultProps$40 = {
  animation: Fade,
  rootClose: false,
  show: false,
  placement: 'right',
};

var Overlay = (function(_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Overlay.prototype.render = function render() {
    var _props = this.props,
      animation = _props.animation,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['animation', 'children']);

    var transition = animation === true ? Fade : animation || null;

    var child = void 0;

    if (!transition) {
      child = cloneElement(children, {
        className: classnames(children.props.className, 'in'),
      });
    } else {
      child = children;
    }

    return React.createElement(
      BaseOverlay,
      _extends$2({}, props, { transition: transition }),
      child,
    );
  };

  return Overlay;
})(React.Component);

Overlay.propTypes = propTypes$48;
Overlay.defaultProps = defaultProps$40;

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var triggerType = PropTypes.oneOf(['click', 'hover', 'focus']);

var propTypes$49 = _extends$2({}, Overlay.propTypes, {
  /**
   * Specify which action or actions trigger Overlay visibility
   */
  trigger: PropTypes.oneOfType([triggerType, PropTypes.arrayOf(triggerType)]),

  /**
   * A millisecond delay amount to show and hide the Overlay once triggered
   */
  delay: PropTypes.number,
  /**
   * A millisecond delay amount before showing the Overlay once triggered.
   */
  delayShow: PropTypes.number,
  /**
   * A millisecond delay amount before hiding the Overlay once triggered.
   */
  delayHide: PropTypes.number,

  // FIXME: This should be `defaultShow`.
  /**
   * The initial visibility state of the Overlay. For more nuanced visibility
   * control, consider using the Overlay component directly.
   */
  defaultOverlayShown: PropTypes.bool,

  /**
   * An element or text to overlay next to the target.
   */
  overlay: PropTypes.node.isRequired,

  /**
   * @private
   */
  onBlur: PropTypes.func,
  /**
   * @private
   */
  onClick: PropTypes.func,
  /**
   * @private
   */
  onFocus: PropTypes.func,
  /**
   * @private
   */
  onMouseOut: PropTypes.func,
  /**
   * @private
   */
  onMouseOver: PropTypes.func,

  // Overridden props from `<Overlay>`.
  /**
   * @private
   */
  target: PropTypes.oneOf([null]),
  /**
   * @private
   */
  onHide: PropTypes.oneOf([null]),
  /**
   * @private
   */
  show: PropTypes.oneOf([null]),
});

var defaultProps$41 = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus'],
};

var OverlayTrigger = (function(_React$Component) {
  _inherits(OverlayTrigger, _React$Component);

  function OverlayTrigger(props, context) {
    _classCallCheck(this, OverlayTrigger);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.handleDelayedShow = _this.handleDelayedShow.bind(_this);
    _this.handleDelayedHide = _this.handleDelayedHide.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);

    _this.handleMouseOver = function(e) {
      return _this.handleMouseOverOut(
        _this.handleDelayedShow,
        e,
        'fromElement',
      );
    };
    _this.handleMouseOut = function(e) {
      return _this.handleMouseOverOut(_this.handleDelayedHide, e, 'toElement');
    };

    _this._mountNode = null;

    _this.state = {
      show: props.defaultOverlayShown,
    };
    return _this;
  }

  OverlayTrigger.prototype.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  OverlayTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderOverlay();
  };

  OverlayTrigger.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom.unmountComponentAtNode(this._mountNode);
    this._mountNode = null;

    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };

  OverlayTrigger.prototype.handleDelayedHide = function handleDelayedHide() {
    var _this2 = this;

    if (this._hoverShowDelay != null) {
      clearTimeout(this._hoverShowDelay);
      this._hoverShowDelay = null;
      return;
    }

    if (!this.state.show || this._hoverHideDelay != null) {
      return;
    }

    var delay =
      this.props.delayHide != null ? this.props.delayHide : this.props.delay;

    if (!delay) {
      this.hide();
      return;
    }

    this._hoverHideDelay = setTimeout(function() {
      _this2._hoverHideDelay = null;
      _this2.hide();
    }, delay);
  };

  OverlayTrigger.prototype.handleDelayedShow = function handleDelayedShow() {
    var _this3 = this;

    if (this._hoverHideDelay != null) {
      clearTimeout(this._hoverHideDelay);
      this._hoverHideDelay = null;
      return;
    }

    if (this.state.show || this._hoverShowDelay != null) {
      return;
    }

    var delay =
      this.props.delayShow != null ? this.props.delayShow : this.props.delay;

    if (!delay) {
      this.show();
      return;
    }

    this._hoverShowDelay = setTimeout(function() {
      _this3._hoverShowDelay = null;
      _this3.show();
    }, delay);
  };

  OverlayTrigger.prototype.handleHide = function handleHide() {
    this.hide();
  };

  // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.

  OverlayTrigger.prototype.handleMouseOverOut = function handleMouseOverOut(
    handler,
    e,
    relatedNative,
  ) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !contains$1(target, related)) {
      handler(e);
    }
  };

  OverlayTrigger.prototype.handleToggle = function handleToggle() {
    if (this.state.show) {
      this.hide();
    } else {
      this.show();
    }
  };

  OverlayTrigger.prototype.hide = function hide() {
    this.setState({ show: false });
  };

  OverlayTrigger.prototype.makeOverlay = function makeOverlay(overlay, props) {
    return React.createElement(
      Overlay,
      _extends$2({}, props, {
        show: this.state.show,
        onHide: this.handleHide,
        target: this,
      }),
      overlay,
    );
  };

  OverlayTrigger.prototype.show = function show() {
    this.setState({ show: true });
  };

  OverlayTrigger.prototype.renderOverlay = function renderOverlay() {
    _reactDom.unstable_renderSubtreeIntoContainer(
      this,
      this._overlay,
      this._mountNode,
    );
  };

  OverlayTrigger.prototype.render = function render() {
    var _props = this.props,
      trigger = _props.trigger,
      overlay = _props.overlay,
      children = _props.children,
      onBlur = _props.onBlur,
      onClick = _props.onClick,
      onFocus = _props.onFocus,
      onMouseOut = _props.onMouseOut,
      onMouseOver = _props.onMouseOver,
      props = _objectWithoutProperties(_props, [
        'trigger',
        'overlay',
        'children',
        'onBlur',
        'onClick',
        'onFocus',
        'onMouseOut',
        'onMouseOver',
      ]);

    delete props.delay;
    delete props.delayShow;
    delete props.delayHide;
    delete props.defaultOverlayShown;

    var child = React.Children.only(children);
    var childProps = child.props;
    var triggerProps = {};

    if (this.state.show) {
      triggerProps['aria-describedby'] = overlay.props.id;
    }

    // FIXME: The logic here for passing through handlers on this component is
    // inconsistent. We shouldn't be passing any of these props through.

    triggerProps.onClick = createChainedFunction(childProps.onClick, onClick);

    if (isOneOf('click', trigger)) {
      triggerProps.onClick = createChainedFunction(
        triggerProps.onClick,
        this.handleToggle,
      );
    }

    if (isOneOf('hover', trigger)) {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            !(trigger === 'hover'),
            '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' +
              'visibility of the overlay to just mouse users. Consider also ' +
              'including the `"focus"` trigger so that touch and keyboard only ' +
              'users can see the overlay as well.',
          )
        : void 0;

      triggerProps.onMouseOver = createChainedFunction(
        childProps.onMouseOver,
        onMouseOver,
        this.handleMouseOver,
      );
      triggerProps.onMouseOut = createChainedFunction(
        childProps.onMouseOut,
        onMouseOut,
        this.handleMouseOut,
      );
    }

    if (isOneOf('focus', trigger)) {
      triggerProps.onFocus = createChainedFunction(
        childProps.onFocus,
        onFocus,
        this.handleDelayedShow,
      );
      triggerProps.onBlur = createChainedFunction(
        childProps.onBlur,
        onBlur,
        this.handleDelayedHide,
      );
    }

    this._overlay = this.makeOverlay(overlay, props);

    return cloneElement(child, triggerProps);
  };

  return OverlayTrigger;
})(React.Component);

OverlayTrigger.propTypes = propTypes$49;
OverlayTrigger.defaultProps = defaultProps$41;

var PageHeader = (function(_React$Component) {
  _inherits(PageHeader, _React$Component);

  function PageHeader() {
    _classCallCheck(this, PageHeader);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  PageHeader.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['className', 'children']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      React.createElement('h1', null, children),
    );
  };

  return PageHeader;
})(React.Component);

bsClass('page-header', PageHeader);

var propTypes$50 = {
  disabled: PropTypes.bool,
  previous: PropTypes.bool,
  next: PropTypes.bool,
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  eventKey: PropTypes.any,
};

var defaultProps$42 = {
  disabled: false,
  previous: false,
  next: false,
};

var PagerItem = (function(_React$Component) {
  _inherits(PagerItem, _React$Component);

  function PagerItem(props, context) {
    _classCallCheck(this, PagerItem);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  PagerItem.prototype.handleSelect = function handleSelect(e) {
    var _props = this.props,
      disabled = _props.disabled,
      onSelect = _props.onSelect,
      eventKey = _props.eventKey;

    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onSelect) {
      onSelect(eventKey, e);
    }
  };

  PagerItem.prototype.render = function render() {
    var _props2 = this.props,
      disabled = _props2.disabled,
      previous = _props2.previous,
      next = _props2.next,
      onClick = _props2.onClick,
      className = _props2.className,
      style = _props2.style,
      props = _objectWithoutProperties(_props2, [
        'disabled',
        'previous',
        'next',
        'onClick',
        'className',
        'style',
      ]);

    delete props.onSelect;
    delete props.eventKey;

    return React.createElement(
      'li',
      {
        className: classnames(className, {
          disabled: disabled,
          previous: previous,
          next: next,
        }),
        style: style,
      },
      React.createElement(
        SafeAnchor,
        _extends$2({}, props, {
          disabled: disabled,
          onClick: createChainedFunction(onClick, this.handleSelect),
        }),
      ),
    );
  };

  return PagerItem;
})(React.Component);

PagerItem.propTypes = propTypes$50;
PagerItem.defaultProps = defaultProps$42;

var warned = {};

function deprecationWarning(oldname, newname, link) {
  var message = void 0;

  if (
    (typeof oldname === 'undefined' ? 'undefined' : _typeof$1(oldname)) ===
    'object'
  ) {
    message = oldname.message;
  } else {
    message = oldname + ' is deprecated. Use ' + newname + ' instead.';

    if (link) {
      message += '\nYou can read more about it at ' + link;
    }
  }

  if (warned[message]) {
    return;
  }

  process.env.NODE_ENV !== 'production' ? warning_1(false, message) : void 0;
  warned[message] = true;
}

deprecationWarning.wrapper = function(Component) {
  for (
    var _len = arguments.length,
      args = Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    args[_key - 1] = arguments[_key];
  }

  return (function(_Component) {
    _inherits(DeprecatedComponent, _Component);

    function DeprecatedComponent() {
      _classCallCheck(this, DeprecatedComponent);

      return _possibleConstructorReturn(
        this,
        _Component.apply(this, arguments),
      );
    }

    DeprecatedComponent.prototype.componentWillMount = function componentWillMount() {
      deprecationWarning.apply(undefined, args);

      if (_Component.prototype.componentWillMount) {
        var _Component$prototype$;

        for (
          var _len2 = arguments.length, methodArgs = Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          methodArgs[_key2] = arguments[_key2];
        }

        (_Component$prototype$ =
          _Component.prototype.componentWillMount).call.apply(
          _Component$prototype$,
          [this].concat(methodArgs),
        );
      }
    };

    return DeprecatedComponent;
  })(Component);
};

deprecationWarning.wrapper(PagerItem, '`<PageItem>`', '`<Pager.Item>`');

var propTypes$51 = {
  onSelect: PropTypes.func,
};

var Pager = (function(_React$Component) {
  _inherits(Pager, _React$Component);

  function Pager() {
    _classCallCheck(this, Pager);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Pager.prototype.render = function render() {
    var _props = this.props,
      onSelect = _props.onSelect,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'onSelect',
        'className',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'ul',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      ValidChildren.map(children, function(child) {
        return cloneElement(child, {
          onSelect: createChainedFunction(child.props.onSelect, onSelect),
        });
      }),
    );
  };

  return Pager;
})(React.Component);

Pager.propTypes = propTypes$51;

Pager.Item = PagerItem;

bsClass('pager', Pager);

/* eslint-disable react/no-multi-comp */
var propTypes$52 = {
  eventKey: PropTypes.any,
  className: PropTypes.string,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  activeLabel: PropTypes.string.isRequired,
};

var defaultProps$43 = {
  active: false,
  disabled: false,
  activeLabel: '(current)',
};

function PaginationItem(_ref) {
  var active = _ref.active,
    disabled = _ref.disabled,
    className = _ref.className,
    style = _ref.style,
    activeLabel = _ref.activeLabel,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      'active',
      'disabled',
      'className',
      'style',
      'activeLabel',
      'children',
    ]);

  var Component = active || disabled ? 'span' : SafeAnchor;
  return React.createElement(
    'li',
    {
      style: style,
      className: classnames(className, { active: active, disabled: disabled }),
    },
    React.createElement(
      Component,
      _extends$2({ disabled: disabled }, props),
      children,
      active &&
        React.createElement('span', { className: 'sr-only' }, activeLabel),
    ),
  );
}

PaginationItem.propTypes = propTypes$52;
PaginationItem.defaultProps = defaultProps$43;

function createButton(name, defaultValue) {
  var _class, _temp;

  var label =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : name;

  return (
    (_temp = _class = (function(_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(
          this,
          _React$Component.apply(this, arguments),
        );
      }

      _class.prototype.render = function render() {
        var _props = this.props,
          disabled = _props.disabled,
          children = _props.children,
          className = _props.className,
          props = _objectWithoutProperties(_props, [
            'disabled',
            'children',
            'className',
          ]);

        var Component = disabled ? 'span' : SafeAnchor;

        return React.createElement(
          'li',
          _extends$2(
            {
              'aria-label': label,
              className: classnames(className, { disabled: disabled }),
            },
            props,
          ),
          React.createElement(Component, null, children || defaultValue),
        );
      };

      return _class;
    })(React.Component)),
    (_class.displayName = name),
    (_class.propTypes = { disabled: PropTypes.bool }),
    _temp
  );
}

var First = createButton('First', '\xAB');
var Prev = createButton('Prev', '\u2039');
var Ellipsis = createButton('Ellipsis', '\u2026', 'More');
var Next = createButton('Next', '\u203A');
var Last = createButton('Last', '\xBB');

var Pagination = (function(_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Pagination.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, ['className', 'children']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'ul',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      children,
    );
  };

  return Pagination;
})(React.Component);

bsClass('pagination', Pagination);

Pagination.First = First;
Pagination.Prev = Prev;
Pagination.Ellipsis = Ellipsis;
Pagination.Item = PaginationItem;
Pagination.Next = Next;
Pagination.Last = Last;

var propTypes$53 = {
  /**
   * Callback fired before the component expands
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the component starts to expand
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the component has expanded
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the component collapses
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the component starts to collapse
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the component has collapsed
   */
  onExited: PropTypes.func,
};

var contextTypes$9 = {
  $bs_panel: PropTypes.shape({
    headingId: PropTypes.string,
    bodyId: PropTypes.string,
    bsClass: PropTypes.string,
    expanded: PropTypes.bool,
  }),
};

var PanelCollapse = (function(_React$Component) {
  _inherits(PanelCollapse, _React$Component);

  function PanelCollapse() {
    _classCallCheck(this, PanelCollapse);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  PanelCollapse.prototype.render = function render() {
    var children = this.props.children;

    var _ref = this.context.$bs_panel || {},
      headingId = _ref.headingId,
      bodyId = _ref.bodyId,
      _bsClass = _ref.bsClass,
      expanded = _ref.expanded;

    var _splitBsProps = splitBsProps(this.props),
      bsProps = _splitBsProps[0],
      props = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId && bodyId) {
      props.id = bodyId;
      props.role = props.role || 'tabpanel';
      props['aria-labelledby'] = headingId;
    }

    return React.createElement(
      Collapse,
      _extends$2({ in: expanded }, props),
      React.createElement(
        'div',
        { className: prefix(bsProps, 'collapse') },
        children,
      ),
    );
  };

  return PanelCollapse;
})(React.Component);

PanelCollapse.propTypes = propTypes$53;
PanelCollapse.contextTypes = contextTypes$9;

var Collapse$2 = bsClass('panel', PanelCollapse);

var propTypes$54 = {
  /**
   * A convenience prop that renders a Collapse component around the Body for
   * situations when the parent Panel only contains a single Panel.Body child.
   *
   * renders:
   * ```jsx
   * <Panel.Collapse>
   *  <Panel.Body />
   * </Panel.Collapse>
   * ```
   */
  collapsible: PropTypes.bool.isRequired,
};

var defaultProps$44 = {
  collapsible: false,
};

var contextTypes$10 = {
  $bs_panel: PropTypes.shape({
    bsClass: PropTypes.string,
  }),
};

var PanelBody = (function(_React$Component) {
  _inherits(PanelBody, _React$Component);

  function PanelBody() {
    _classCallCheck(this, PanelBody);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  PanelBody.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      className = _props.className,
      collapsible = _props.collapsible;

    var _ref = this.context.$bs_panel || {},
      _bsClass = _ref.bsClass;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(this.props, ['collapsible']),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    var body = React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, prefix(bsProps, 'body')),
      }),
      children,
    );

    if (collapsible) {
      body = React.createElement(Collapse$2, null, body);
    }

    return body;
  };

  return PanelBody;
})(React.Component);

PanelBody.propTypes = propTypes$54;
PanelBody.defaultProps = defaultProps$44;
PanelBody.contextTypes = contextTypes$10;

var Body$1 = bsClass('panel', PanelBody);

var createChainableTypeChecker_1$1 = createCommonjsModule(function(
  module,
  exports,
) {
  exports.__esModule = true;
  exports.default = createChainableTypeChecker;
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  // Mostly taken from ReactPropTypes.

  function createChainableTypeChecker(validate) {
    function checkType(
      isRequired,
      props,
      propName,
      componentName,
      location,
      propFullName,
    ) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          return new Error(
            'Required ' +
              location +
              ' `' +
              propFullNameSafe +
              '` was not specified ' +
              ('in `' + componentNameSafe + '`.'),
          );
        }

        return null;
      }

      for (
        var _len = arguments.length,
          args = Array(_len > 6 ? _len - 6 : 0),
          _key = 6;
        _key < _len;
        _key++
      ) {
        args[_key - 6] = arguments[_key];
      }

      return validate.apply(
        undefined,
        [props, propName, componentNameSafe, location, propFullNameSafe].concat(
          args,
        ),
      );
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }
});

unwrapExports(createChainableTypeChecker_1$1);

var elementType_1$1 = createCommonjsModule(function(module, exports) {
  exports.__esModule = true;

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

  var _react2 = _interopRequireDefault(React);

  var _createChainableTypeChecker2 = _interopRequireDefault(
    createChainableTypeChecker_1$1,
  );

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function elementType(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType =
      typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

    if (_react2.default.isValidElement(propValue)) {
      return new Error(
        'Invalid ' +
          location +
          ' `' +
          propFullName +
          '` of type ReactElement ' +
          ('supplied to `' +
            componentName +
            '`, expected an element type (a string ') +
          'or a ReactClass).',
      );
    }

    if (propType !== 'function' && propType !== 'string') {
      return new Error(
        'Invalid ' +
          location +
          ' `' +
          propFullName +
          '` of value `' +
          propValue +
          '` ' +
          ('supplied to `' +
            componentName +
            '`, expected an element type (a string ') +
          'or a ReactClass).',
      );
    }

    return null;
  }

  exports.default = (0, _createChainableTypeChecker2.default)(elementType);
});

var elementType$1 = unwrapExports(elementType_1$1);

var propTypes$55 = {
  componentClass: elementType$1,
};

var defaultProps$45 = {
  componentClass: 'div',
};

var contextTypes$11 = {
  $bs_panel: PropTypes.shape({
    headingId: PropTypes.string,
    bsClass: PropTypes.string,
  }),
};

var PanelHeading = (function(_React$Component) {
  _inherits(PanelHeading, _React$Component);

  function PanelHeading() {
    _classCallCheck(this, PanelHeading);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  PanelHeading.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      className = _props.className,
      Component = _props.componentClass,
      props = _objectWithoutProperties(_props, [
        'children',
        'className',
        'componentClass',
      ]);

    var _ref = this.context.$bs_panel || {},
      headingId = _ref.headingId,
      _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (headingId) {
      elementProps.role = elementProps.role || 'tab';
      elementProps.id = headingId;
    }

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, prefix(bsProps, 'heading')),
      }),
      children,
    );
  };

  return PanelHeading;
})(React.Component);

PanelHeading.propTypes = propTypes$55;
PanelHeading.defaultProps = defaultProps$45;
PanelHeading.contextTypes = contextTypes$11;

var Heading = bsClass('panel', PanelHeading);

var propTypes$56 = {
  /**
   * only here to satisfy linting, just the html onClick handler.
   *
   * @private
   */
  onClick: PropTypes.func,
  /**
   * You can use a custom element for this component
   */
  componentClass: elementType$1,
};

var defaultProps$46 = {
  componentClass: SafeAnchor,
};

var contextTypes$12 = {
  $bs_panel: PropTypes.shape({
    bodyId: PropTypes.string,
    onToggle: PropTypes.func,
    expanded: PropTypes.bool,
  }),
};

var PanelToggle = (function(_React$Component) {
  _inherits(PanelToggle, _React$Component);

  function PanelToggle() {
    _classCallCheck(this, PanelToggle);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call.apply(_React$Component, [this].concat(args)),
    );

    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  PanelToggle.prototype.handleToggle = function handleToggle(event) {
    var _ref = this.context.$bs_panel || {},
      onToggle = _ref.onToggle;

    if (onToggle) {
      onToggle(event);
    }
  };

  PanelToggle.prototype.render = function render() {
    var _props = this.props,
      onClick = _props.onClick,
      className = _props.className,
      componentClass = _props.componentClass,
      props = _objectWithoutProperties(_props, [
        'onClick',
        'className',
        'componentClass',
      ]);

    var _ref2 = this.context.$bs_panel || {},
      expanded = _ref2.expanded,
      bodyId = _ref2.bodyId;

    var Component = componentClass;

    props.onClick = createChainedFunction(onClick, this.handleToggle);

    props['aria-expanded'] = expanded;
    props.className = classnames(className, !expanded && 'collapsed');

    if (bodyId) {
      props['aria-controls'] = bodyId;
    }

    return React.createElement(Component, props);
  };

  return PanelToggle;
})(React.Component);

PanelToggle.propTypes = propTypes$56;
PanelToggle.defaultProps = defaultProps$46;
PanelToggle.contextTypes = contextTypes$12;

var propTypes$57 = {
  componentClass: elementType$1,
  /**
   * A convenience prop that renders the Panel.Title as a panel collapse toggle component
   * for the common use-case.
   */
  toggle: PropTypes.bool,
};

var contextTypes$13 = {
  $bs_panel: PropTypes.shape({
    bsClass: PropTypes.string,
  }),
};

var defaultProps$47 = {
  componentClass: 'div',
};

var PanelTitle = (function(_React$Component) {
  _inherits(PanelTitle, _React$Component);

  function PanelTitle() {
    _classCallCheck(this, PanelTitle);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  PanelTitle.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      className = _props.className,
      toggle = _props.toggle,
      Component = _props.componentClass,
      props = _objectWithoutProperties(_props, [
        'children',
        'className',
        'toggle',
        'componentClass',
      ]);

    var _ref = this.context.$bs_panel || {},
      _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    if (toggle) {
      children = React.createElement(PanelToggle, null, children);
    }

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, prefix(bsProps, 'title')),
      }),
      children,
    );
  };

  return PanelTitle;
})(React.Component);

PanelTitle.propTypes = propTypes$57;
PanelTitle.defaultProps = defaultProps$47;
PanelTitle.contextTypes = contextTypes$13;

var Title$1 = bsClass('panel', PanelTitle);

var contextTypes$14 = {
  $bs_panel: PropTypes.shape({
    bsClass: PropTypes.string,
  }),
};

var PanelFooter = (function(_React$Component) {
  _inherits(PanelFooter, _React$Component);

  function PanelFooter() {
    _classCallCheck(this, PanelFooter);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  PanelFooter.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      className = _props.className;

    var _ref = this.context.$bs_panel || {},
      _bsClass = _ref.bsClass;

    var _splitBsProps = splitBsProps(this.props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    bsProps.bsClass = _bsClass || bsProps.bsClass;

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, prefix(bsProps, 'footer')),
      }),
      children,
    );
  };

  return PanelFooter;
})(React.Component);

PanelFooter.contextTypes = contextTypes$14;

var Footer$1 = bsClass('panel', PanelFooter);

var has$1 = Object.prototype.hasOwnProperty;

var defaultGetId = function defaultGetId(id, type) {
  return id ? id + '--' + type : null;
};

var propTypes$58 = {
  /**
   * Controls the collapsed/expanded state ofthe Panel. Requires
   * a `Panel.Collapse` or `<Panel.Body collapsible>` child component
   * in order to actually animate out or in.
   *
   * @controllable onToggle
   */
  expanded: PropTypes.bool,
  /**
   * A callback fired when the collapse state changes.
   *
   * @controllable expanded
   */
  onToggle: PropTypes.func,
  eventKey: PropTypes.any,

  /**
   * An HTML `id` attribute uniquely identifying the Panel component.
   */
  id: PropTypes.string,
};

var contextTypes$15 = {
  $bs_panelGroup: PropTypes.shape({
    getId: PropTypes.func,
    activeKey: PropTypes.any,
    onToggle: PropTypes.func,
  }),
};

var childContextTypes$4 = {
  $bs_panel: PropTypes.shape({
    headingId: PropTypes.string,
    bodyId: PropTypes.string,
    bsClass: PropTypes.string,
    onToggle: PropTypes.func,
    expanded: PropTypes.bool,
  }),
};

var Panel = (function(_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    var _temp, _this, _ret;

    _classCallCheck(this, Panel);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        _React$Component.call.apply(_React$Component, [this].concat(args)),
      )),
      _this)),
      (_this.handleToggle = function(e) {
        var panelGroup = _this.context.$bs_panelGroup;
        var expanded = !_this.getExpanded();

        if (panelGroup && panelGroup.onToggle) {
          panelGroup.onToggle(_this.props.eventKey, expanded, e);
        } else {
          _this.props.onToggle(expanded, e);
        }
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  Panel.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
      eventKey = _props.eventKey,
      id = _props.id;

    var idKey = eventKey == null ? id : eventKey;

    var ids = void 0;

    if (idKey !== null) {
      var panelGroup = this.context.$bs_panelGroup;
      var getId = (panelGroup && panelGroup.getId) || defaultGetId;

      ids = {
        headingId: getId(idKey, 'heading'),
        bodyId: getId(idKey, 'body'),
      };
    }

    return {
      $bs_panel: _extends$2({}, ids, {
        bsClass: this.props.bsClass,
        expanded: this.getExpanded(),
        onToggle: this.handleToggle,
      }),
    };
  };

  Panel.prototype.getExpanded = function getExpanded() {
    var panelGroup = this.context.$bs_panelGroup;

    if (panelGroup && has$1.call(panelGroup, 'activeKey')) {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            this.props.expanded == null,
            'Specifying `<Panel>` `expanded` in the context of an accordion ' +
              '`<PanelGroup>` is not supported. Set `activeKey` on the ' +
              '`<PanelGroup>` instead.',
          )
        : void 0;

      return panelGroup.activeKey === this.props.eventKey;
    }

    return !!this.props.expanded;
  };

  Panel.prototype.render = function render() {
    var _props2 = this.props,
      className = _props2.className,
      children = _props2.children;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(this.props, [
        'onToggle',
        'eventKey',
        'expanded',
      ]),
      bsProps = _splitBsPropsAndOmit[0],
      props = _splitBsPropsAndOmit[1];

    return React.createElement(
      'div',
      _extends$2({}, props, {
        className: classnames(className, getClassSet(bsProps)),
      }),
      children,
    );
  };

  return Panel;
})(React.Component);

Panel.propTypes = propTypes$58;

Panel.contextTypes = contextTypes$15;
Panel.childContextTypes = childContextTypes$4;

var UncontrolledPanel = uncontrollable$1(
  bsClass(
    'panel',
    bsStyles(
      [].concat(_Object$values(State), [Style.DEFAULT, Style.PRIMARY]),
      Style.DEFAULT,
      Panel,
    ),
  ),
  { expanded: 'onToggle' },
);

_Object$assign(UncontrolledPanel, {
  Heading: Heading,
  Title: Title$1,
  Body: Body$1,
  Footer: Footer$1,
  Toggle: PanelToggle,
  Collapse: Collapse$2,
});

var propTypes$59 = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string}
   * @required
   */
  id: isRequiredForA11y(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  /**
   * Sets the direction the Popover is positioned towards.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Popover.
   */
  positionTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The "left" position value for the Popover.
   */
  positionLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The "top" position value for the Popover arrow.
   */
  arrowOffsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The "left" position value for the Popover arrow.
   */
  arrowOffsetLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Title content
   */
  title: PropTypes.node,
};

var defaultProps$48 = {
  placement: 'right',
};

var Popover = (function(_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Popover.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      placement = _props.placement,
      positionTop = _props.positionTop,
      positionLeft = _props.positionLeft,
      arrowOffsetTop = _props.arrowOffsetTop,
      arrowOffsetLeft = _props.arrowOffsetLeft,
      title = _props.title,
      className = _props.className,
      style = _props.style,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'placement',
        'positionTop',
        'positionLeft',
        'arrowOffsetTop',
        'arrowOffsetLeft',
        'title',
        'className',
        'style',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}), (_extends2[placement] = true), _extends2),
    );

    var outerStyle = _extends$2(
      {
        display: 'block',
        top: positionTop,
        left: positionLeft,
      },
      style,
    );

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft,
    };

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        role: 'tooltip',
        className: classnames(className, classes),
        style: outerStyle,
      }),
      React.createElement('div', { className: 'arrow', style: arrowStyle }),
      title &&
        React.createElement(
          'h3',
          { className: prefix(bsProps, 'title') },
          title,
        ),
      React.createElement(
        'div',
        { className: prefix(bsProps, 'content') },
        children,
      ),
    );
  };

  return Popover;
})(React.Component);

Popover.propTypes = propTypes$59;
Popover.defaultProps = defaultProps$48;

bsClass('popover', Popover);

var ROUND_PRECISION = 1000;

/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */
function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];
  if (!children) {
    return null;
  }

  var error = null;

  React.Children.forEach(children, function(child) {
    if (error) {
      return;
    }

    // eslint-disable-next-line no-use-before-define
    if (child.type === ProgressBar) return;

    var childIdentifier = React.isValidElement(child)
      ? child.type.displayName || child.type.name || child.type
      : child;
    error = new Error(
      'Children of ' +
        componentName +
        ' can contain only ProgressBar ' +
        ('components. Found ' + childIdentifier + '.'),
    );
  });

  return error;
}

var propTypes$60 = {
  min: PropTypes.number,
  now: PropTypes.number,
  max: PropTypes.number,
  label: PropTypes.node,
  srOnly: PropTypes.bool,
  striped: PropTypes.bool,
  active: PropTypes.bool,
  children: onlyProgressBar,

  /**
   * @private
   */
  isChild: PropTypes.bool,
};

var defaultProps$49 = {
  min: 0,
  max: 100,
  active: false,
  isChild: false,
  srOnly: false,
  striped: false,
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar = (function(_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ProgressBar.prototype.renderProgressBar = function renderProgressBar(_ref) {
    var _extends2;

    var min = _ref.min,
      now = _ref.now,
      max = _ref.max,
      label = _ref.label,
      srOnly = _ref.srOnly,
      striped = _ref.striped,
      active = _ref.active,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, [
        'min',
        'now',
        'max',
        'label',
        'srOnly',
        'striped',
        'active',
        'className',
        'style',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {
        active: active,
      }),
      (_extends2[prefix(bsProps, 'striped')] = active || striped),
      _extends2),
    );

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        role: 'progressbar',
        className: classnames(className, classes),
        style: _extends$2({ width: getPercentage(now, min, max) + '%' }, style),
        'aria-valuenow': now,
        'aria-valuemin': min,
        'aria-valuemax': max,
      }),
      srOnly
        ? React.createElement('span', { className: 'sr-only' }, label)
        : label,
    );
  };

  ProgressBar.prototype.render = function render() {
    var _props = this.props,
      isChild = _props.isChild,
      props = _objectWithoutProperties(_props, ['isChild']);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
      now = props.now,
      max = props.max,
      label = props.label,
      srOnly = props.srOnly,
      striped = props.striped,
      active = props.active,
      bsClass$$1 = props.bsClass,
      bsStyle = props.bsStyle,
      className = props.className,
      children = props.children,
      wrapperProps = _objectWithoutProperties(props, [
        'min',
        'now',
        'max',
        'label',
        'srOnly',
        'striped',
        'active',
        'bsClass',
        'bsStyle',
        'className',
        'children',
      ]);

    return React.createElement(
      'div',
      _extends$2({}, wrapperProps, {
        className: classnames(className, 'progress'),
      }),
      children
        ? ValidChildren.map(children, function(child) {
            return cloneElement(child, { isChild: true });
          })
        : this.renderProgressBar({
            min: min,
            now: now,
            max: max,
            label: label,
            srOnly: srOnly,
            striped: striped,
            active: active,
            bsClass: bsClass$$1,
            bsStyle: bsStyle,
          }),
    );
  };

  return ProgressBar;
})(React.Component);

ProgressBar.propTypes = propTypes$60;
ProgressBar.defaultProps = defaultProps$49;

bsClass('progress-bar', bsStyles(_Object$values(State), ProgressBar));

/* eslint-disable jsx-a11y/label-has-for */

var propTypes$61 = {
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  /**
   * Only valid if `inline` is not set.
   */
  validationState: PropTypes.oneOf(['success', 'warning', 'error', null]),
  /**
   * Attaches a ref to the `<input>` element. Only functions can be used here.
   *
   * ```js
   * <Radio inputRef={ref => { this.input = ref; }} />
   * ```
   */
  inputRef: PropTypes.func,
};

var defaultProps$50 = {
  inline: false,
  disabled: false,
  title: '',
};

var Radio = (function(_React$Component) {
  _inherits(Radio, _React$Component);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Radio.prototype.render = function render() {
    var _props = this.props,
      inline = _props.inline,
      disabled = _props.disabled,
      validationState = _props.validationState,
      inputRef = _props.inputRef,
      className = _props.className,
      style = _props.style,
      title = _props.title,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'inline',
        'disabled',
        'validationState',
        'inputRef',
        'className',
        'style',
        'title',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var input = React.createElement(
      'input',
      _extends$2({}, elementProps, {
        ref: inputRef,
        type: 'radio',
        disabled: disabled,
      }),
    );

    if (inline) {
      var _classes2;

      var _classes = ((_classes2 = {}),
      (_classes2[prefix(bsProps, 'inline')] = true),
      (_classes2.disabled = disabled),
      _classes2);

      // Use a warning here instead of in propTypes to get better-looking
      // generated documentation.
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            !validationState,
            '`validationState` is ignored on `<Radio inline>`. To display ' +
              'validation state on an inline radio, set `validationState` on a ' +
              'parent `<FormGroup>` or other element instead.',
          )
        : void 0;

      return React.createElement(
        'label',
        {
          className: classnames(className, _classes),
          style: style,
          title: title,
        },
        input,
        children,
      );
    }

    var classes = _extends$2({}, getClassSet(bsProps), {
      disabled: disabled,
    });
    if (validationState) {
      classes['has-' + validationState] = true;
    }

    return React.createElement(
      'div',
      { className: classnames(className, classes), style: style },
      React.createElement('label', { title: title }, input, children),
    );
  };

  return Radio;
})(React.Component);

Radio.propTypes = propTypes$61;
Radio.defaultProps = defaultProps$50;

bsClass('radio', Radio);

// TODO: This should probably take a single `aspectRatio` prop.

var propTypes$62 = {
  /**
   * This component requires a single child element
   */
  children: PropTypes.element.isRequired,
  /**
   * 16by9 aspect ratio
   */
  a16by9: PropTypes.bool,
  /**
   * 4by3 aspect ratio
   */
  a4by3: PropTypes.bool,
};

var defaultProps$51 = {
  a16by9: false,
  a4by3: false,
};

var ResponsiveEmbed = (function(_React$Component) {
  _inherits(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    _classCallCheck(this, ResponsiveEmbed);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ResponsiveEmbed.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      a16by9 = _props.a16by9,
      a4by3 = _props.a4by3,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'a16by9',
        'a4by3',
        'className',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    process.env.NODE_ENV !== 'production'
      ? warning_1(a16by9 || a4by3, 'Either `a16by9` or `a4by3` must be set.')
      : void 0;
    process.env.NODE_ENV !== 'production'
      ? warning_1(
          !(a16by9 && a4by3),
          'Only one of `a16by9` or `a4by3` can be set.',
        )
      : void 0;

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps, '16by9')] = a16by9),
      (_extends2[prefix(bsProps, '4by3')] = a4by3),
      _extends2),
    );

    return React.createElement(
      'div',
      { className: classnames(classes) },
      cloneElement(
        children,
        _extends$2({}, elementProps, {
          className: classnames(className, prefix(bsProps, 'item')),
        }),
      ),
    );
  };

  return ResponsiveEmbed;
})(React.Component);

ResponsiveEmbed.propTypes = propTypes$62;
ResponsiveEmbed.defaultProps = defaultProps$51;

bsClass('embed-responsive', ResponsiveEmbed);

var propTypes$63 = {
  componentClass: elementType,
};

var defaultProps$52 = {
  componentClass: 'div',
};

var Row = (function(_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Row.prototype.render = function render() {
    var _props = this.props,
      Component = _props.componentClass,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Row;
})(React.Component);

Row.propTypes = propTypes$63;
Row.defaultProps = defaultProps$52;

bsClass('row', Row);

var SplitToggle = (function(_React$Component) {
  _inherits(SplitToggle, _React$Component);

  function SplitToggle() {
    _classCallCheck(this, SplitToggle);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  SplitToggle.prototype.render = function render() {
    return React.createElement(
      DropdownToggle$1,
      _extends$2({}, this.props, { useAnchor: false, noCaret: false }),
    );
  };

  return SplitToggle;
})(React.Component);

SplitToggle.defaultProps = DropdownToggle$1.defaultProps;

var propTypes$64 = _extends$2({}, UncontrolledDropdown.propTypes, {
  // Toggle props.
  bsStyle: PropTypes.string,
  bsSize: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * The content of the split button.
   */
  title: PropTypes.node.isRequired,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: PropTypes.string,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node,
});

var SplitButton = (function(_React$Component) {
  _inherits(SplitButton, _React$Component);

  function SplitButton() {
    _classCallCheck(this, SplitButton);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  SplitButton.prototype.render = function render() {
    var _props = this.props,
      bsSize = _props.bsSize,
      bsStyle = _props.bsStyle,
      title = _props.title,
      toggleLabel = _props.toggleLabel,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'bsSize',
        'bsStyle',
        'title',
        'toggleLabel',
        'children',
      ]);

    var _splitComponentProps = splitComponentProps(
        props,
        UncontrolledDropdown.ControlledComponent,
      ),
      dropdownProps = _splitComponentProps[0],
      buttonProps = _splitComponentProps[1];

    return React.createElement(
      UncontrolledDropdown,
      _extends$2({}, dropdownProps, { bsSize: bsSize, bsStyle: bsStyle }),
      React.createElement(
        RBButton,
        _extends$2({}, buttonProps, {
          disabled: props.disabled,
          bsSize: bsSize,
          bsStyle: bsStyle,
        }),
        title,
      ),
      React.createElement(SplitToggle, {
        'aria-label': toggleLabel || title,
        bsSize: bsSize,
        bsStyle: bsStyle,
      }),
      React.createElement(UncontrolledDropdown.Menu, null, children),
    );
  };

  return SplitButton;
})(React.Component);

SplitButton.propTypes = propTypes$64;

SplitButton.Toggle = SplitToggle;

var TAB = 'tab';
var PANE = 'pane';

var idPropType$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

var propTypes$65 = {
  /**
   * HTML id attribute, required if no `generateChildId` prop
   * is specified.
   */
  id: function id(props) {
    var error = null;

    if (!props.generateChildId) {
      for (
        var _len = arguments.length,
          args = Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType$1.apply(undefined, [props].concat(args));

      if (!error && !props.id) {
        error = new Error(
          'In order to properly initialize Tabs in a way that is accessible ' +
            'to assistive technologies (such as screen readers) an `id` or a ' +
            '`generateChildId` prop to TabContainer is required',
        );
      }
    }

    return error;
  },

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${this.props.id}-${type}-${key}`
   */
  generateChildId: PropTypes.func,

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.any,
};

var childContextTypes$5 = {
  $bs_tabContainer: PropTypes.shape({
    activeKey: PropTypes.any,
    onSelect: PropTypes.func.isRequired,
    getTabId: PropTypes.func.isRequired,
    getPaneId: PropTypes.func.isRequired,
  }),
};

var TabContainer = (function(_React$Component) {
  _inherits(TabContainer, _React$Component);

  function TabContainer() {
    _classCallCheck(this, TabContainer);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  TabContainer.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
      activeKey = _props.activeKey,
      onSelect = _props.onSelect,
      generateChildId = _props.generateChildId,
      id = _props.id;

    var getId =
      generateChildId ||
      function(key, type) {
        return id ? id + '-' + type + '-' + key : null;
      };

    return {
      $bs_tabContainer: {
        activeKey: activeKey,
        onSelect: onSelect,
        getTabId: function getTabId(key) {
          return getId(key, TAB);
        },
        getPaneId: function getPaneId(key) {
          return getId(key, PANE);
        },
      },
    };
  };

  TabContainer.prototype.render = function render() {
    var _props2 = this.props,
      children = _props2.children,
      props = _objectWithoutProperties(_props2, ['children']);

    delete props.generateChildId;
    delete props.onSelect;
    delete props.activeKey;

    return React.cloneElement(React.Children.only(children), props);
  };

  return TabContainer;
})(React.Component);

TabContainer.propTypes = propTypes$65;
TabContainer.childContextTypes = childContextTypes$5;

var UncontrolledTabContainer = uncontrollable$1(TabContainer, {
  activeKey: 'onSelect',
});

var propTypes$66 = {
  componentClass: elementType,

  /**
   * Sets a default animation strategy for all children `<TabPane>`s. Use
   * `false` to disable, `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  animation: PropTypes.oneOfType([PropTypes.bool, elementType]),

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit: PropTypes.bool,
};

var defaultProps$53 = {
  componentClass: 'div',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false,
};

var contextTypes$16 = {
  $bs_tabContainer: PropTypes.shape({
    activeKey: PropTypes.any,
  }),
};

var childContextTypes$6 = {
  $bs_tabContent: PropTypes.shape({
    bsClass: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.bool, elementType]),
    activeKey: PropTypes.any,
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    onPaneEnter: PropTypes.func.isRequired,
    onPaneExited: PropTypes.func.isRequired,
    exiting: PropTypes.bool.isRequired,
  }),
};

var TabContent = (function(_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent(props, context) {
    _classCallCheck(this, TabContent);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handlePaneEnter = _this.handlePaneEnter.bind(_this);
    _this.handlePaneExited = _this.handlePaneExited.bind(_this);

    // Active entries in state will be `null` unless `animation` is set. Need
    // to track active child in case keys swap and the active child changes
    // but the active key does not.
    _this.state = {
      activeKey: null,
      activeChild: null,
    };
    return _this;
  }

  TabContent.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
      bsClass$$1 = _props.bsClass,
      animation = _props.animation,
      mountOnEnter = _props.mountOnEnter,
      unmountOnExit = _props.unmountOnExit;

    var stateActiveKey = this.state.activeKey;
    var containerActiveKey = this.getContainerActiveKey();

    var activeKey =
      stateActiveKey != null ? stateActiveKey : containerActiveKey;
    var exiting =
      stateActiveKey != null && stateActiveKey !== containerActiveKey;

    return {
      $bs_tabContent: {
        bsClass: bsClass$$1,
        animation: animation,
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        onPaneEnter: this.handlePaneEnter,
        onPaneExited: this.handlePaneExited,
        exiting: exiting,
      },
    };
  };

  TabContent.prototype.componentWillReceiveProps = function componentWillReceiveProps(
    nextProps,
  ) {
    if (!nextProps.animation && this.state.activeChild) {
      this.setState({ activeKey: null, activeChild: null });
    }
  };

  TabContent.prototype.componentWillUnmount = function componentWillUnmount() {
    this.isUnmounted = true;
  };

  TabContent.prototype.getContainerActiveKey = function getContainerActiveKey() {
    var tabContainer = this.context.$bs_tabContainer;
    return tabContainer && tabContainer.activeKey;
  };

  TabContent.prototype.handlePaneEnter = function handlePaneEnter(
    child,
    childKey,
  ) {
    if (!this.props.animation) {
      return false;
    }

    // It's possible that this child should be transitioning out.
    if (childKey !== this.getContainerActiveKey()) {
      return false;
    }

    this.setState({
      activeKey: childKey,
      activeChild: child,
    });

    return true;
  };

  TabContent.prototype.handlePaneExited = function handlePaneExited(child) {
    // This might happen as everything is unmounting.
    if (this.isUnmounted) {
      return;
    }

    this.setState(function(_ref) {
      var activeChild = _ref.activeChild;

      if (activeChild !== child) {
        return null;
      }

      return {
        activeKey: null,
        activeChild: null,
      };
    });
  };

  TabContent.prototype.render = function render() {
    var _props2 = this.props,
      Component = _props2.componentClass,
      className = _props2.className,
      props = _objectWithoutProperties(_props2, [
        'componentClass',
        'className',
      ]);

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, [
        'animation',
        'mountOnEnter',
        'unmountOnExit',
      ]),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, prefix(bsProps, 'content')),
      }),
    );
  };

  return TabContent;
})(React.Component);

TabContent.propTypes = propTypes$66;
TabContent.defaultProps = defaultProps$53;
TabContent.contextTypes = contextTypes$16;
TabContent.childContextTypes = childContextTypes$6;

var TabContent$1 = bsClass('tab', TabContent);

var propTypes$67 = {
  /**
   * Uniquely identify the `<TabPane>` among its siblings.
   */
  eventKey: PropTypes.any,

  /**
   * Use animation when showing or hiding `<TabPane>`s. Use `false` to disable,
   * `true` to enable the default `<Fade>` animation or
   * a react-transition-group v2 `<Transition/>` component.
   */
  animation: PropTypes.oneOfType([PropTypes.bool, elementType]),

  /** @private * */
  id: PropTypes.string,

  /** @private * */
  'aria-labelledby': PropTypes.string,

  /**
   * If not explicitly specified and rendered in the context of a
   * `<TabContent>`, the `bsClass` of the `<TabContent>` suffixed by `-pane`.
   * If otherwise not explicitly specified, `tab-pane`.
   */
  bsClass: PropTypes.string,

  /**
   * Transition onEnter callback when animation is not `false`
   */
  onEnter: PropTypes.func,

  /**
   * Transition onEntering callback when animation is not `false`
   */
  onEntering: PropTypes.func,

  /**
   * Transition onEntered callback when animation is not `false`
   */
  onEntered: PropTypes.func,

  /**
   * Transition onExit callback when animation is not `false`
   */
  onExit: PropTypes.func,

  /**
   * Transition onExiting callback when animation is not `false`
   */
  onExiting: PropTypes.func,

  /**
   * Transition onExited callback when animation is not `false`
   */
  onExited: PropTypes.func,

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: PropTypes.bool,
};

var contextTypes$17 = {
  $bs_tabContainer: PropTypes.shape({
    getTabId: PropTypes.func,
    getPaneId: PropTypes.func,
  }),
  $bs_tabContent: PropTypes.shape({
    bsClass: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.bool, elementType]),
    activeKey: PropTypes.any,
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    onPaneEnter: PropTypes.func.isRequired,
    onPaneExited: PropTypes.func.isRequired,
    exiting: PropTypes.bool.isRequired,
  }),
};

/**
 * We override the `<TabContainer>` context so `<Nav>`s in `<TabPane>`s don't
 * conflict with the top level one.
 */
var childContextTypes$7 = {
  $bs_tabContainer: PropTypes.oneOf([null]),
};

var TabPane = (function(_React$Component) {
  _inherits(TabPane, _React$Component);

  function TabPane(props, context) {
    _classCallCheck(this, TabPane);

    var _this = _possibleConstructorReturn(
      this,
      _React$Component.call(this, props, context),
    );

    _this.handleEnter = _this.handleEnter.bind(_this);
    _this.handleExited = _this.handleExited.bind(_this);

    _this.in = false;
    return _this;
  }

  TabPane.prototype.getChildContext = function getChildContext() {
    return {
      $bs_tabContainer: null,
    };
  };

  TabPane.prototype.componentDidMount = function componentDidMount() {
    if (this.shouldBeIn()) {
      // In lieu of the action event firing.
      this.handleEnter();
    }
  };

  TabPane.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.in) {
      if (!this.shouldBeIn()) {
        // We shouldn't be active any more. Notify the parent.
        this.handleExited();
      }
    } else if (this.shouldBeIn()) {
      // We are the active child. Notify the parent.
      this.handleEnter();
    }
  };

  TabPane.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.in) {
      // In lieu of the action event firing.
      this.handleExited();
    }
  };

  TabPane.prototype.getAnimation = function getAnimation() {
    if (this.props.animation != null) {
      return this.props.animation;
    }

    var tabContent = this.context.$bs_tabContent;
    return tabContent && tabContent.animation;
  };

  TabPane.prototype.handleEnter = function handleEnter() {
    var tabContent = this.context.$bs_tabContent;
    if (!tabContent) {
      return;
    }

    this.in = tabContent.onPaneEnter(this, this.props.eventKey);
  };

  TabPane.prototype.handleExited = function handleExited() {
    var tabContent = this.context.$bs_tabContent;
    if (!tabContent) {
      return;
    }

    tabContent.onPaneExited(this);
    this.in = false;
  };

  TabPane.prototype.isActive = function isActive() {
    var tabContent = this.context.$bs_tabContent;
    var activeKey = tabContent && tabContent.activeKey;

    return this.props.eventKey === activeKey;
  };

  TabPane.prototype.shouldBeIn = function shouldBeIn() {
    return this.getAnimation() && this.isActive();
  };

  TabPane.prototype.render = function render() {
    var _props = this.props,
      eventKey = _props.eventKey,
      className = _props.className,
      onEnter = _props.onEnter,
      onEntering = _props.onEntering,
      onEntered = _props.onEntered,
      onExit = _props.onExit,
      onExiting = _props.onExiting,
      onExited = _props.onExited,
      propsMountOnEnter = _props.mountOnEnter,
      propsUnmountOnExit = _props.unmountOnExit,
      props = _objectWithoutProperties(_props, [
        'eventKey',
        'className',
        'onEnter',
        'onEntering',
        'onEntered',
        'onExit',
        'onExiting',
        'onExited',
        'mountOnEnter',
        'unmountOnExit',
      ]);

    var _context = this.context,
      tabContent = _context.$bs_tabContent,
      tabContainer = _context.$bs_tabContainer;

    var _splitBsPropsAndOmit = splitBsPropsAndOmit(props, ['animation']),
      bsProps = _splitBsPropsAndOmit[0],
      elementProps = _splitBsPropsAndOmit[1];

    var active = this.isActive();
    var animation = this.getAnimation();

    var mountOnEnter =
      propsMountOnEnter != null
        ? propsMountOnEnter
        : tabContent && tabContent.mountOnEnter;
    var unmountOnExit =
      propsUnmountOnExit != null
        ? propsUnmountOnExit
        : tabContent && tabContent.unmountOnExit;

    if (!active && !animation && unmountOnExit) {
      return null;
    }

    var Transition = animation === true ? Fade : animation || null;

    if (tabContent) {
      bsProps.bsClass = prefix(tabContent, 'pane');
    }

    var classes = _extends$2({}, getClassSet(bsProps), {
      active: active,
    });

    if (tabContainer) {
      process.env.NODE_ENV !== 'production'
        ? warning_1(
            !elementProps.id && !elementProps['aria-labelledby'],
            'In the context of a `<TabContainer>`, `<TabPanes>` are given ' +
              'generated `id` and `aria-labelledby` attributes for the sake of ' +
              'proper component accessibility. Any provided ones will be ignored. ' +
              'To control these attributes directly provide a `generateChildId` ' +
              'prop to the parent `<TabContainer>`.',
          )
        : void 0;

      elementProps.id = tabContainer.getPaneId(eventKey);
      elementProps['aria-labelledby'] = tabContainer.getTabId(eventKey);
    }

    var pane = React.createElement(
      'div',
      _extends$2({}, elementProps, {
        role: 'tabpanel',
        'aria-hidden': !active,
        className: classnames(className, classes),
      }),
    );

    if (Transition) {
      var exiting = tabContent && tabContent.exiting;

      return React.createElement(
        Transition,
        {
          in: active && !exiting,
          onEnter: createChainedFunction(this.handleEnter, onEnter),
          onEntering: onEntering,
          onEntered: onEntered,
          onExit: onExit,
          onExiting: onExiting,
          onExited: createChainedFunction(this.handleExited, onExited),
          mountOnEnter: mountOnEnter,
          unmountOnExit: unmountOnExit,
        },
        pane,
      );
    }

    return pane;
  };

  return TabPane;
})(React.Component);

TabPane.propTypes = propTypes$67;
TabPane.contextTypes = contextTypes$17;
TabPane.childContextTypes = childContextTypes$7;

var TabPane$1 = bsClass('tab-pane', TabPane);

var propTypes$68 = _extends$2({}, TabPane$1.propTypes, {
  disabled: PropTypes.bool,

  title: PropTypes.node,

  /**
   * tabClassName is used as className for the associated NavItem
   */
  tabClassName: PropTypes.string,
});

var Tab = (function(_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Tab.prototype.render = function render() {
    var props = _extends$2({}, this.props);

    // These props are for the parent `<Tabs>` rather than the `<TabPane>`.
    delete props.title;
    delete props.disabled;
    delete props.tabClassName;

    return React.createElement(TabPane$1, props);
  };

  return Tab;
})(React.Component);

Tab.propTypes = propTypes$68;

Tab.Container = UncontrolledTabContainer;
Tab.Content = TabContent$1;
Tab.Pane = TabPane$1;

var propTypes$69 = {
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  condensed: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
};

var defaultProps$54 = {
  bordered: false,
  condensed: false,
  hover: false,
  responsive: false,
  striped: false,
};

var Table = (function(_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Table.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      striped = _props.striped,
      bordered = _props.bordered,
      condensed = _props.condensed,
      hover = _props.hover,
      responsive = _props.responsive,
      className = _props.className,
      props = _objectWithoutProperties(_props, [
        'striped',
        'bordered',
        'condensed',
        'hover',
        'responsive',
        'className',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}),
      (_extends2[prefix(bsProps, 'striped')] = striped),
      (_extends2[prefix(bsProps, 'bordered')] = bordered),
      (_extends2[prefix(bsProps, 'condensed')] = condensed),
      (_extends2[prefix(bsProps, 'hover')] = hover),
      _extends2),
    );

    var table = React.createElement(
      'table',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );

    if (responsive) {
      return React.createElement(
        'div',
        { className: prefix(bsProps, 'responsive') },
        table,
      );
    }

    return table;
  };

  return Table;
})(React.Component);

Table.propTypes = propTypes$69;
Table.defaultProps = defaultProps$54;

bsClass('table', Table);

var TabContainer$1 = UncontrolledTabContainer.ControlledComponent;

var propTypes$70 = {
  /**
   * Mark the Tab with a matching `eventKey` as active.
   *
   * @controllable onSelect
   */
  activeKey: PropTypes.any,

  /**
   * Navigation style
   */
  bsStyle: PropTypes.oneOf(['tabs', 'pills']),

  animation: PropTypes.bool,

  id: isRequiredForA11y(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  /**
   * Callback fired when a Tab is selected.
   *
   * ```js
   * function (
   *   Any eventKey,
   *   SyntheticEvent event?
   * )
   * ```
   *
   * @controllable activeKey
   */
  onSelect: PropTypes.func,

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter: PropTypes.bool,

  /**
   * Unmount tabs (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit: PropTypes.bool,
};

var defaultProps$55 = {
  bsStyle: 'tabs',
  animation: true,
  mountOnEnter: false,
  unmountOnExit: false,
};

function getDefaultActiveKey(children) {
  var defaultActiveKey = void 0;
  ValidChildren.forEach(children, function(child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

var Tabs = (function(_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Tabs.prototype.renderTab = function renderTab(child) {
    var _child$props = child.props,
      title = _child$props.title,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return React.createElement(
      NavItem,
      { eventKey: eventKey, disabled: disabled, className: tabClassName },
      title,
    );
  };

  Tabs.prototype.render = function render() {
    var _props = this.props,
      id = _props.id,
      onSelect = _props.onSelect,
      animation = _props.animation,
      mountOnEnter = _props.mountOnEnter,
      unmountOnExit = _props.unmountOnExit,
      bsClass$$1 = _props.bsClass,
      className = _props.className,
      style = _props.style,
      children = _props.children,
      _props$activeKey = _props.activeKey,
      activeKey =
        _props$activeKey === undefined
          ? getDefaultActiveKey(children)
          : _props$activeKey,
      props = _objectWithoutProperties(_props, [
        'id',
        'onSelect',
        'animation',
        'mountOnEnter',
        'unmountOnExit',
        'bsClass',
        'className',
        'style',
        'children',
        'activeKey',
      ]);

    return React.createElement(
      TabContainer$1,
      {
        id: id,
        activeKey: activeKey,
        onSelect: onSelect,
        className: className,
        style: style,
      },
      React.createElement(
        'div',
        null,
        React.createElement(
          Nav$1,
          _extends$2({}, props, { role: 'tablist' }),
          ValidChildren.map(children, this.renderTab),
        ),
        React.createElement(
          TabContent$1,
          {
            bsClass: bsClass$$1,
            animation: animation,
            mountOnEnter: mountOnEnter,
            unmountOnExit: unmountOnExit,
          },
          children,
        ),
      ),
    );
  };

  return Tabs;
})(React.Component);

Tabs.propTypes = propTypes$70;
Tabs.defaultProps = defaultProps$55;

bsClass('tab', Tabs);

uncontrollable$1(Tabs, { activeKey: 'onSelect' });

/* eslint-disable jsx-a11y/alt-text */

var propTypes$71 = {
  /**
   * src property that is passed down to the image inside this component
   */
  src: PropTypes.string,
  /**
   * alt property that is passed down to the image inside this component
   */
  alt: PropTypes.string,
  /**
   * href property that is passed down to the image inside this component
   */
  href: PropTypes.string,
  /**
   * onError callback that is passed down to the image inside this component
   */
  onError: PropTypes.func,
  /**
   * onLoad callback that is passed down to the image inside this component
   */
  onLoad: PropTypes.func,
};

var Thumbnail = (function(_React$Component) {
  _inherits(Thumbnail, _React$Component);

  function Thumbnail() {
    _classCallCheck(this, Thumbnail);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Thumbnail.prototype.render = function render() {
    var _props = this.props,
      src = _props.src,
      alt = _props.alt,
      onError = _props.onError,
      onLoad = _props.onLoad,
      className = _props.className,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'src',
        'alt',
        'onError',
        'onLoad',
        'className',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var Component = elementProps.href ? SafeAnchor : 'div';
    var classes = getClassSet(bsProps);

    return React.createElement(
      Component,
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
      React.createElement('img', {
        src: src,
        alt: alt,
        onError: onError,
        onLoad: onLoad,
      }),
      children &&
        React.createElement('div', { className: 'caption' }, children),
    );
  };

  return Thumbnail;
})(React.Component);

Thumbnail.propTypes = propTypes$71;

bsClass('thumbnail', Thumbnail);

var propTypes$72 = {
  /**
   * The `<input>` `type`
   * @type {[type]}
   */
  type: PropTypes.oneOf(['checkbox', 'radio']),

  /**
   * The HTML input name, used to group like checkboxes or radio buttons together
   * semantically
   */
  name: PropTypes.string,

  /**
   * The checked state of the input, managed by `<ToggleButtonGroup>`` automatically
   */
  checked: PropTypes.bool,

  /**
   * The disabled state of both the label and input
   */
  disabled: PropTypes.bool,

  /**
   * [onChange description]
   */
  onChange: PropTypes.func,
  /**
   * The value of the input, and unique identifier in the ToggleButtonGroup
   */
  value: PropTypes.any.isRequired,
};

var ToggleButton = (function(_React$Component) {
  _inherits(ToggleButton, _React$Component);

  function ToggleButton() {
    _classCallCheck(this, ToggleButton);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ToggleButton.prototype.render = function render() {
    var _props = this.props,
      children = _props.children,
      name = _props.name,
      checked = _props.checked,
      type = _props.type,
      onChange = _props.onChange,
      value = _props.value,
      props = _objectWithoutProperties(_props, [
        'children',
        'name',
        'checked',
        'type',
        'onChange',
        'value',
      ]);

    var disabled = props.disabled;

    return React.createElement(
      RBButton,
      _extends$2({}, props, { active: !!checked, componentClass: 'label' }),
      React.createElement('input', {
        name: name,
        type: type,
        autoComplete: 'off',
        value: value,
        checked: !!checked,
        disabled: !!disabled,
        onChange: onChange,
      }),
      children,
    );
  };

  return ToggleButton;
})(React.Component);

ToggleButton.propTypes = propTypes$72;

var propTypes$73 = {
  /**
   * An HTML `<input>` name for each child button.
   *
   * __Required if `type` is set to `'radio'`__
   */
  name: PropTypes.string,

  /**
   * The value, or array of values, of the active (pressed) buttons
   *
   * @controllable onChange
   */
  value: PropTypes.any,

  /**
   * Callback fired when a button is pressed, depending on whether the `type`
   * is `'radio'` or `'checkbox'`, `onChange` will be called with the value or
   * array of active values
   *
   * @controllable values
   */
  onChange: PropTypes.func,

  /**
   * The input `type` of the rendered buttons, determines the toggle behavior
   * of the buttons
   */
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
};

var defaultProps$56 = {
  type: 'radio',
};

var ToggleButtonGroup = (function(_React$Component) {
  _inherits(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    _classCallCheck(this, ToggleButtonGroup);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  ToggleButtonGroup.prototype.getValues = function getValues() {
    var value = this.props.value;

    return value == null ? [] : [].concat(value);
  };

  ToggleButtonGroup.prototype.handleToggle = function handleToggle(value) {
    var _props = this.props,
      type = _props.type,
      onChange = _props.onChange;

    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) {
        onChange(value);
      }
      return;
    }

    if (isActive) {
      onChange(
        values.filter(function(n) {
          return n !== value;
        }),
      );
    } else {
      onChange([].concat(values, [value]));
    }
  };

  ToggleButtonGroup.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
      children = _props2.children,
      type = _props2.type,
      name = _props2.name,
      props = _objectWithoutProperties(_props2, ['children', 'type', 'name']);

    var values = this.getValues();

    !(type !== 'radio' || !!name)
      ? process.env.NODE_ENV !== 'production'
        ? invariant_1(
            false,
            'A `name` is required to group the toggle buttons when the `type` ' +
              'is set to "radio"',
          )
        : invariant_1(false)
      : void 0;

    delete props.onChange;
    delete props.value;

    // the data attribute is required b/c twbs css uses it in the selector
    return React.createElement(
      ButtonGroup$1,
      _extends$2({}, props, { 'data-toggle': 'buttons' }),
      ValidChildren.map(children, function(child) {
        var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

        var handler = function handler() {
          return _this2.handleToggle(value);
        };

        return React.cloneElement(child, {
          type: type,
          name: child.name || name,
          checked: values.indexOf(value) !== -1,
          onChange: createChainedFunction(onChange, handler),
        });
      }),
    );
  };

  return ToggleButtonGroup;
})(React.Component);

ToggleButtonGroup.propTypes = propTypes$73;
ToggleButtonGroup.defaultProps = defaultProps$56;

var UncontrolledToggleButtonGroup = uncontrollable$1(ToggleButtonGroup, {
  value: 'onChange',
});

UncontrolledToggleButtonGroup.Button = ToggleButton;

var propTypes$74 = {
  /**
   * An html id attribute, necessary for accessibility
   * @type {string|number}
   * @required
   */
  id: isRequiredForA11y(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  /**
   * Sets the direction the Tooltip is positioned towards.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * The "top" position value for the Tooltip.
   */
  positionTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The "left" position value for the Tooltip.
   */
  positionLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The "top" position value for the Tooltip arrow.
   */
  arrowOffsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The "left" position value for the Tooltip arrow.
   */
  arrowOffsetLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

var defaultProps$57 = {
  placement: 'right',
};

var Tooltip = (function(_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Tooltip.prototype.render = function render() {
    var _extends2;

    var _props = this.props,
      placement = _props.placement,
      positionTop = _props.positionTop,
      positionLeft = _props.positionLeft,
      arrowOffsetTop = _props.arrowOffsetTop,
      arrowOffsetLeft = _props.arrowOffsetLeft,
      className = _props.className,
      style = _props.style,
      children = _props.children,
      props = _objectWithoutProperties(_props, [
        'placement',
        'positionTop',
        'positionLeft',
        'arrowOffsetTop',
        'arrowOffsetLeft',
        'className',
        'style',
        'children',
      ]);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = _extends$2(
      {},
      getClassSet(bsProps),
      ((_extends2 = {}), (_extends2[placement] = true), _extends2),
    );

    var outerStyle = _extends$2(
      {
        top: positionTop,
        left: positionLeft,
      },
      style,
    );

    var arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft,
    };

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        role: 'tooltip',
        className: classnames(className, classes),
        style: outerStyle,
      }),
      React.createElement('div', {
        className: prefix(bsProps, 'arrow'),
        style: arrowStyle,
      }),
      React.createElement(
        'div',
        { className: prefix(bsProps, 'inner') },
        children,
      ),
    );
  };

  return Tooltip;
})(React.Component);

Tooltip.propTypes = propTypes$74;
Tooltip.defaultProps = defaultProps$57;

bsClass('tooltip', Tooltip);

var Well = (function(_React$Component) {
  _inherits(Well, _React$Component);

  function Well() {
    _classCallCheck(this, Well);

    return _possibleConstructorReturn(
      this,
      _React$Component.apply(this, arguments),
    );
  }

  Well.prototype.render = function render() {
    var _props = this.props,
      className = _props.className,
      props = _objectWithoutProperties(_props, ['className']);

    var _splitBsProps = splitBsProps(props),
      bsProps = _splitBsProps[0],
      elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);

    return React.createElement(
      'div',
      _extends$2({}, elementProps, {
        className: classnames(className, classes),
      }),
    );
  };

  return Well;
})(React.Component);

bsClass('well', bsSizes([Size.LARGE, Size.SMALL], Well));

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
  return React.createElement(
    RBButton,
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
function invariant$2(e, n, r, t, o, i, a, u) {
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
function toObject$1(e) {
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
          invariant$1$1(
            'function' == typeof e[i],
            '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
            t || 'React class',
            r,
            i,
            _typeof$2(e[i]),
          ),
            (a = e[i](n, i, t, r, null, ReactPropTypesSecret$1));
        } catch (e) {
          a = e;
        }
        if (
          (warning$1$1(
            !a || a instanceof Error,
            '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
            t || 'React class',
            r,
            i,
            void 0 === a ? 'undefined' : _typeof$2(a),
          ),
          a instanceof Error && !(a.message in loggedTypeFailures))
        ) {
          loggedTypeFailures[a.message] = !0;
          var u = o ? o() : '';
          warning$1$1(
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
var invariant_1$1 = invariant$2;
var warning$2 = emptyFunction_1;
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
  warning$2 = function(e, n) {
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
var warning_1$1 = warning$2;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var index$1 = shouldUseNative()
  ? Object.assign
  : function(e, n) {
      for (var r, t, o = toObject$1(e), i = 1; i < arguments.length; i++) {
        r = Object(arguments[i]);
        for (var a in r) hasOwnProperty$1.call(r, a) && (o[a] = r[a]);
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
var _typeof$2 =
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
if ('production' !== process.env.NODE_ENV) var invariant$1$1 = invariant_1$1;
var warning$1$1 = warning_1$1;
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
          invariant_1$1(
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
            (warning_1$1(
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
    switch (void 0 === n ? 'undefined' : _typeof$2(n)) {
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
    var n = void 0 === e ? 'undefined' : _typeof$2(e);
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
              warning_1$1(
                !1,
                'Invalid argument supplied to oneOf, expected an instance of array.',
              ),
            emptyFunction_1.thatReturnsNull);
      },
      oneOfType: function(e) {
        if (!Array.isArray(e))
          return (
            'production' !== process.env.NODE_ENV &&
              warning_1$1(
                !1,
                'Invalid argument supplied to oneOfType, expected an instance of array.',
              ),
            emptyFunction_1.thatReturnsNull
          );
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if ('function' != typeof r)
            return (
              warning_1$1(
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
      invariant_1$1(
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
var index$1$1 = createCommonjsModule$1(function(e) {
  if ('production' !== process.env.NODE_ENV) {
    var n =
        ('function' == typeof Symbol &&
          Symbol.for &&
          Symbol.for('react.element')) ||
        60103,
      r = function(e) {
        return (
          'object' === (void 0 === e ? 'undefined' : _typeof$2(e)) &&
          null !== e &&
          e.$$typeof === n
        );
      };
    e.exports = factoryWithTypeCheckers(r, !0);
  } else e.exports = factoryWithThrowingShims();
});
var Cell = styled.section.withConfig({ displayName: 'Cell__Cell' })(
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
  className: index$1$1.string,
  width: index$1$1.number,
  height: index$1$1.number,
  top: index$1$1.oneOfType([index$1$1.number, index$1$1.string]),
  left: index$1$1.oneOfType([index$1$1.number, index$1$1.string]),
  middle: index$1$1.bool,
  center: index$1$1.bool,
  area: index$1$1.string,
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
var Grid$2 = styled.div.withConfig({ displayName: 'Grid__Grid' })(
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
Grid$2.propTypes = {
  className: index$1$1.string,
  columns: index$1$1.oneOfType([index$1$1.string, index$1$1.number]),
  gap: index$1$1.string,
  minRowHeight: index$1$1.string,
  flow: index$1$1.string,
  rows: index$1$1.oneOfType([index$1$1.string, index$1$1.number]),
  areas: index$1$1.arrayOf(index$1$1.string),
  justifyContent: index$1$1.string,
  alignContent: index$1$1.string,
};

var _templateObject$2 = taggedTemplateLiteral(
  ['\n  padding: ', ';\n'],
  ['\n  padding: ', ';\n'],
);

var OuterGutter = styled.section(_templateObject$2, function(_ref) {
  var theme = _ref.theme;
  return theme.grid.outerGutter;
});

var ComposedGrid = function ComposedGrid(props) {
  return React.createElement(
    OuterGutter,
    null,
    React.createElement(Grid$2, props),
  );
};

var Grid$4 = { Grid: ComposedGrid, Cell: Cell };

// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280.0;
}

function setSeed(_seed_) {
  seed = _seed_;
}

var randomFromSeed = {
  nextValue: getNextValue,
  seed: setSeed,
};

var ORIGINAL =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
  shuffled = false;
}

function setCharacters(_alphabet_) {
  if (!_alphabet_) {
    if (alphabet !== ORIGINAL) {
      alphabet = ORIGINAL;
      reset();
    }
    return;
  }

  if (_alphabet_ === alphabet) {
    return;
  }

  if (_alphabet_.length !== ORIGINAL.length) {
    throw new Error(
      'Custom alphabet for shortid must be ' +
        ORIGINAL.length +
        ' unique characters. You submitted ' +
        _alphabet_.length +
        ' characters: ' +
        _alphabet_,
    );
  }

  var unique = _alphabet_.split('').filter(function(item, ind, arr) {
    return ind !== arr.lastIndexOf(item);
  });

  if (unique.length) {
    throw new Error(
      'Custom alphabet for shortid must be ' +
        ORIGINAL.length +
        ' unique characters. These characters were not unique: ' +
        unique.join(', '),
    );
  }

  alphabet = _alphabet_;
  reset();
}

function characters(_alphabet_) {
  setCharacters(_alphabet_);
  return alphabet;
}

function setSeed$1(seed) {
  randomFromSeed.seed(seed);
  if (previousSeed !== seed) {
    reset();
    previousSeed = seed;
  }
}

function shuffle() {
  if (!alphabet) {
    setCharacters(ORIGINAL);
  }

  var sourceArray = alphabet.split('');
  var targetArray = [];
  var r = randomFromSeed.nextValue();
  var characterIndex;

  while (sourceArray.length > 0) {
    r = randomFromSeed.nextValue();
    characterIndex = Math.floor(r * sourceArray.length);
    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
  }
  return targetArray.join('');
}

function getShuffled() {
  if (shuffled) {
    return shuffled;
  }
  shuffled = shuffle();
  return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
  var alphabetShuffled = getShuffled();
  return alphabetShuffled[index];
}

var alphabet_1 = {
  characters: characters,
  seed: setSeed$1,
  lookup: lookup,
  shuffled: getShuffled,
};

var randomBytes = crypto.randomBytes;

function randomByte() {
  return randomBytes(1)[0] & 0x30;
}

var randomByte_1 = randomByte;

function encode(lookup, number) {
  var loopCounter = 0;
  var done;

  var str = '';

  while (!done) {
    str = str + lookup(((number >> (4 * loopCounter)) & 0x0f) | randomByte_1());
    done = number < Math.pow(16, loopCounter + 1);
    loopCounter++;
  }
  return str;
}

var encode_1 = encode;

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
  var characters = alphabet_1.shuffled();
  return {
    version: characters.indexOf(id.substr(0, 1)) & 0x0f,
    worker: characters.indexOf(id.substr(1, 1)) & 0x0f,
  };
}

var decode_1 = decode;

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version$1 = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
  var str = '';

  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

  if (seconds === previousSeconds) {
    counter++;
  } else {
    counter = 0;
    previousSeconds = seconds;
  }

  str = str + encode_1(alphabet_1.lookup, version$1);
  str = str + encode_1(alphabet_1.lookup, clusterWorkerId);
  if (counter > 0) {
    str = str + encode_1(alphabet_1.lookup, counter);
  }
  str = str + encode_1(alphabet_1.lookup, seconds);

  return str;
}

var build_1 = build;

function isShortId(id) {
  if (!id || typeof id !== 'string' || id.length < 6) {
    return false;
  }

  var characters = alphabet_1.characters();
  var len = id.length;
  for (var i = 0; i < len; i++) {
    if (characters.indexOf(id[i]) === -1) {
      return false;
    }
  }
  return true;
}

var isValid = isShortId;

var clusterWorkerId = parseInt(process.env.NODE_UNIQUE_ID || 0, 10);

var lib = createCommonjsModule(function(module) {
  var clusterWorkerId$$1 = clusterWorkerId || 0;

  /**
   * Set the seed.
   * Highly recommended if you don't want people to try to figure out your id schema.
   * exposed as shortid.seed(int)
   * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
   */
  function seed(seedValue) {
    alphabet_1.seed(seedValue);
    return module.exports;
  }

  /**
   * Set the cluster worker or machine id
   * exposed as shortid.worker(int)
   * @param workerId worker must be positive integer.  Number less than 16 is recommended.
   * returns shortid module so it can be chained.
   */
  function worker(workerId) {
    clusterWorkerId$$1 = workerId;
    return module.exports;
  }

  /**
   *
   * sets new characters to use in the alphabet
   * returns the shuffled alphabet
   */
  function characters(newCharacters) {
    if (newCharacters !== undefined) {
      alphabet_1.characters(newCharacters);
    }

    return alphabet_1.shuffled();
  }

  /**
   * Generate unique id
   * Returns string id
   */
  function generate() {
    return build_1(clusterWorkerId$$1);
  }

  // Export all other functions as properties of the generate function
  module.exports = generate;
  module.exports.generate = generate;
  module.exports.seed = seed;
  module.exports.worker = worker;
  module.exports.characters = characters;
  module.exports.decode = decode_1;
  module.exports.isValid = isValid;
});

var lib_1 = lib.generate;
var lib_2 = lib.seed;
var lib_3 = lib.worker;
var lib_4 = lib.characters;
var lib_5 = lib.decode;
var lib_6 = lib.isValid;

var shortid = lib;

//

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var _extends$3 =
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

var _templateObject$3 = /*#__PURE__*/ taggedTemplateLiteralLoose$1(
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
function curry$1(f) {
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
    _extends$3({}, hslColor, {
      hue: (hslColor.hue + degree) % 360,
    }),
  );
}

var curriedAdjustHue = /*#__PURE__*/ curry$1(adjustHue);

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
    _extends$3({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness - amount),
    }),
  );
}

var curriedDarken = /*#__PURE__*/ curry$1(darken);

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
    _extends$3({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation - amount),
    }),
  );
}

var curriedDesaturate = /*#__PURE__*/ curry$1(desaturate);

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
    _extends$3({}, hslColor, {
      lightness: guard(0, 1, hslColor.lightness + amount),
    }),
  );
}

var curriedLighten = /*#__PURE__*/ curry$1(lighten);

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
  var color1 = _extends$3({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1,
  });

  var parsedColor2 = parseToRgb(otherColor);
  var color2 = _extends$3({}, parsedColor2, {
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

var curriedMix = /*#__PURE__*/ curry$1(mix);

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
  var colorWithAlpha = _extends$3({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + amount * 100) / 100),
  });
  return rgba(colorWithAlpha);
}

var curriedOpacify = /*#__PURE__*/ curry$1(opacify);

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

var curriedReadableColor = /*#__PURE__*/ curry$1(readableColor);

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
    _extends$3({}, hslColor, {
      saturation: guard(0, 1, hslColor.saturation + amount),
    }),
  );
}

var curriedSaturate = /*#__PURE__*/ curry$1(saturate);

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
    _extends$3({}, parseToHsl(color), {
      hue: hue,
    }),
  );
}

var curriedSetHue = /*#__PURE__*/ curry$1(setHue);

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
    _extends$3({}, parseToHsl(color), {
      lightness: lightness,
    }),
  );
}

var curriedSetLightness = /*#__PURE__*/ curry$1(setLightness);

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
    _extends$3({}, parseToHsl(color), {
      saturation: saturation,
    }),
  );
}

var curriedSetSaturation = /*#__PURE__*/ curry$1(setSaturation);

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

var curriedShade = /*#__PURE__*/ curry$1(shade);

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

var curriedTint = /*#__PURE__*/ curry$1(tint);

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
  var colorWithAlpha = _extends$3({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - amount * 100) / 100),
  });
  return rgba(colorWithAlpha);
}

var curriedTransparentize = /*#__PURE__*/ curry$1(transparentize);

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

var _templateObject$4 = taggedTemplateLiteral(
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

var TabButton = styled('a')(
  _templateObject$4,
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
  return React.createElement(
    Fragment,
    null,
    options.map(function(item, key) {
      return React.createElement(
        TabButton,
        {
          key: 'ComposedTabButton-' + shortid.generate(),
          isActive: activeTab === key,
          onClick: onClick(key),
        },
        item,
      );
    }),
  );
};

TabButtonList.propTypes = {
  options: PropTypes.array.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

var _templateObject$5 = taggedTemplateLiteral(
  ['\n  width: 100%;\n  padding: ', ';\n  background-color: ', ';\n'],
  ['\n  width: 100%;\n  padding: ', ';\n  background-color: ', ';\n'],
);

var TabContainer$2 = styled.div(
  _templateObject$5,
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
  return React.createElement(
    Fragment,
    null,
    options.map(function(item, key) {
      return (
        activeTab === key &&
        React.createElement(
          TabContainer$2,
          { key: 'ComposedTabContainer-' + shortid.generate() },
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

        return React.createElement(
          'div',
          null,
          React.createElement(TabButtonList, {
            activeTab: active,
            options: Object.keys(options),
            onClick: this.onClick,
          }),
          React.createElement(TabContainerList, {
            activeTab: active,
            options: Object.values(options),
          }),
        );
      },
    },
  ]);
  return ComposedTabs;
})(PureComponent);

ComposedTabs.propTypes = {
  /** Tab Component Options */
  options: PropTypes.object.isRequired,
};

var white = '#fff';
var black = '#000';

var primary = {
  primary100: '#3f9bfd',
  primary200: '#375f8a',
};

var greys = {
  grey100: '#96a2b0',
  grey200: '#3f454d',
  grey300: '#343a42',
  grey400: '#292d33',
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
  red900: '#a73d28',
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
  danger: reds.red500,
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
  outerGutter: '8px',
};

var borderRadius$1 = {
  kilo: '1px',
  mega: '4px',
  giga: '5px',
};

var borderWidth$1 = {
  kilo: '1px',
  mega: '2px',
};

var fontFamily = {
  default: '"Open Sans", sans-serif',
  color: colors.white,
};

var fontWeight = {
  regular: '400',
  bold: '700',
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

var index$2 = _extends(
  {
    SingleSelect: SingleSelect,
    MultipleSelect: MultipleSelect,
    ComposedTabs: ComposedTabs,
    TimeSpanDisplay: TimeSpanDisplay$1,
    Button: Button$1,
    Global: Global,
    Themes: Themes,
  },
  Grid$4,
);

export default index$2;
//# sourceMappingURL=index.es.js.map

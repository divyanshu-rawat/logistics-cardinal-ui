'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var styled = _interopDefault(require('styled-components'));
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

        return React__default.createElement(
          Select,
          { size: size, isFirst: isFirst },
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

        return React__default.createElement(
          Select,
          null,
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
})(React.PureComponent);

MultipleSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.array,
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
  withSeconds: PropTypes.bool.isRequired,
};

var TimeSpanDisplay$1 = function TimeSpanDisplay$$1(_ref) {
  var startAt = _ref.startAt,
    endAt = _ref.endAt,
    withSeconds = _ref.withSeconds;
  return React__default.createElement(
    React.Fragment,
    null,
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
  withSeconds: PropTypes.bool,
};

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

function createCommonjsModule(e, n) {
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
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
var index$1 = shouldUseNative()
  ? Object.assign
  : function(e, n) {
      for (var r, t, o = toObject(e), i = 1; i < arguments.length; i++) {
        r = Object(arguments[i]);
        for (var a in r) hasOwnProperty.call(r, a) && (o[a] = r[a]);
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
var index = createCommonjsModule(function(e) {
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
var Grid = styled.div.withConfig({ displayName: 'Grid__Grid' })(
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

var _templateObject$2 = taggedTemplateLiteral(
  ['\n  padding: ', ';\n'],
  ['\n  padding: ', ';\n'],
);

var OuterGutter = styled.section(_templateObject$2, function(_ref) {
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
  withPad: PropTypes.bool,
};

ComposedGrid.defaultProps = {
  withPad: false,
};

var Grid$2 = { Grid: ComposedGrid, Cell: Cell };

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

function createCommonjsModule$1(fn, module) {
  return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var hashids = createCommonjsModule$1(function(module, exports) {
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

var reactKeyIndex = createCommonjsModule$1(function(module) {
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

var _templateObject$5 = taggedTemplateLiteral(
  ['\n  width: 100%;\n  padding: ', ';\n  background-color: ', ';\n'],
  ['\n  width: 100%;\n  padding: ', ';\n  background-color: ', ';\n'],
);

var TabContainer = styled.div(
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

var _templateObject$6 = taggedTemplateLiteral(
  [
    '\n  color: ',
    ';\n  font-family: ',
    ';\n  font-weight: ',
    ';\n  text-align: ',
    ';\n  text-transform: ',
    ';\n  margin: ',
    ';\n\n  display: inline-block;\n\n  ',
    ';\n',
  ],
  [
    '\n  color: ',
    ';\n  font-family: ',
    ';\n  font-weight: ',
    ';\n  text-align: ',
    ';\n  text-transform: ',
    ';\n  margin: ',
    ';\n\n  display: inline-block;\n\n  ',
    ';\n',
  ],
);

var TextStyled = styled.span(
  _templateObject$6,
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
    var truncate = _ref7.truncate;

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
  margin: PropTypes.string,
};

Text.defaultProps = {
  children: '',
  as: 'span',
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

var index$1$1 = _extends(
  {
    SingleSelect: SingleSelect,
    MultipleSelect: MultipleSelect,
    ComposedTabs: ComposedTabs,
    TimeSpanDisplay: TimeSpanDisplay$1,
    Button: Button$1,
    Global: Global,
    Themes: Themes,
    Text: Text,
  },
  Grid$2,
);

module.exports = index$1$1;
//# sourceMappingURL=index.js.map

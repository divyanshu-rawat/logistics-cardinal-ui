'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var SelectPlus = _interopDefault(require('react-select-plus'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();



var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  background-color: ', ';\n  font-family: ', ';\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: ', ';\n  width: 100%;\n  height: 100vh;\n'], ['\n  background-color: ', ';\n  font-family: ', ';\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: ', ';\n  width: 100%;\n  height: 100vh;\n']);

var Global = styled.main(_templateObject, function (props) {
  return props.theme.colors.bodyBackground;
}, function (props) {
  return props.theme.fontFamily.default;
}, function (props) {
  return props.theme.colors.white;
});

var _templateObject$1 = taggedTemplateLiteral(['\n  display: inline-block;\n  margin-right: 5px;\n  .Select {\n    display: inline-block;\n    width: ', ';\n    &-control {\n      min-height: 40px;\n      background-color: ', ';\n      border: 1px solid #40464f;\n      display: flex;\n      align-items: center;\n      height: auto;\n    }\n    &-multi {\n      &-value-wrapper {\n        flex: 1;\n      }\n    }\n    &-placeholder {\n      position: relative;\n    }\n    &-value {\n      margin: 5px 0 5px 5px;\n    }\n    &.is-focused,\n    &.is-open {\n      .Select-control {\n        background-color: ', ';\n        border: 1px solid #40464f;\n        box-shadow: none;\n      }\n    }\n    &-input {\n      position: absolute;\n      top: 0;\n      opacity: 1;\n      z-index: -1;\n    }\n    &-menu-outer {\n      box-shadow: 0;\n      background-color: ', ';\n      border: 1px solid #40464f;\n      .Select-menu .Select-option {\n        background-color: ', ';\n        color: #ffffff;\n        &.is-selected {\n          background-color: ', ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-focused {\n          background-color: ', ';\n          border: 0;\n        }\n        &:hover {\n          background-color: ', ';\n          border: 0;\n        }\n        &.is-selected:hover {\n          background-color: ', ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-disabled {\n          color: ', ';\n          &:hover {\n            background-color: ', ';\n            color: ', ';\n          }\n        }\n      }\n    }\n    &--single {\n      > .Select-control .Select-value {\n        position: relative;\n        margin: 0;\n      }\n    }\n    &--multi {\n      .Select-value {\n        display: inline-flex;\n        background-color: ', ';\n        color: #fff;\n        flex-flow: row-reverse;\n        align-items: center;\n        &-label {\n          flex: 1;\n        }\n      }\n    }\n    &.has-value {\n      &.Select--single {\n        > .Select-control .Select-value .Select-value-label {\n          color: #b2b8c0;\n        }\n      }\n    }\n  }\n'], ['\n  display: inline-block;\n  margin-right: 5px;\n  .Select {\n    display: inline-block;\n    width: ', ';\n    &-control {\n      min-height: 40px;\n      background-color: ', ';\n      border: 1px solid #40464f;\n      display: flex;\n      align-items: center;\n      height: auto;\n    }\n    &-multi {\n      &-value-wrapper {\n        flex: 1;\n      }\n    }\n    &-placeholder {\n      position: relative;\n    }\n    &-value {\n      margin: 5px 0 5px 5px;\n    }\n    &.is-focused,\n    &.is-open {\n      .Select-control {\n        background-color: ', ';\n        border: 1px solid #40464f;\n        box-shadow: none;\n      }\n    }\n    &-input {\n      position: absolute;\n      top: 0;\n      opacity: 1;\n      z-index: -1;\n    }\n    &-menu-outer {\n      box-shadow: 0;\n      background-color: ', ';\n      border: 1px solid #40464f;\n      .Select-menu .Select-option {\n        background-color: ', ';\n        color: #ffffff;\n        &.is-selected {\n          background-color: ', ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-focused {\n          background-color: ', ';\n          border: 0;\n        }\n        &:hover {\n          background-color: ', ';\n          border: 0;\n        }\n        &.is-selected:hover {\n          background-color: ', ';\n          border-bottom: 1px solid #40464f;\n        }\n        &.is-disabled {\n          color: ', ';\n          &:hover {\n            background-color: ', ';\n            color: ', ';\n          }\n        }\n      }\n    }\n    &--single {\n      > .Select-control .Select-value {\n        position: relative;\n        margin: 0;\n      }\n    }\n    &--multi {\n      .Select-value {\n        display: inline-flex;\n        background-color: ', ';\n        color: #fff;\n        flex-flow: row-reverse;\n        align-items: center;\n        &-label {\n          flex: 1;\n        }\n      }\n    }\n    &.has-value {\n      &.Select--single {\n        > .Select-control .Select-value .Select-value-label {\n          color: #b2b8c0;\n        }\n      }\n    }\n  }\n']);

var Select = styled('div')(_templateObject$1, function (props) {
  return props.size === 'small' ? '100px;' : '300px';
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey300;
}, function (props) {
  return props.theme.colors.grey300;
}, function (props) {
  return props.theme.colors.grey100;
}, function (props) {
  return props.theme.colors.grey400;
}, function (props) {
  return props.theme.colors.grey100;
}, function (props) {
  return props.theme.colors.primary100;
});

var Timepicker = function (_PureComponent) {
  inherits(Timepicker, _PureComponent);

  function Timepicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Timepicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedValue: _this.props.initialValue
    }, _this.onChangeTime = function (option) {
      var name = _this.props.name;

      _this.setState({ selectedValue: option }, function () {
        return _this.props.onChange({ name: name, option: option });
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Timepicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$size = _props.size,
          size = _props$size === undefined ? 'small' : _props$size,
          options = _props.options,
          name = _props.name,
          placeholder = _props.placeholder,
          _props$isSearchable = _props.isSearchable,
          isSearchable = _props$isSearchable === undefined ? false : _props$isSearchable,
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
          onChange: this.onChangeTime
        })
      );
    }
  }]);
  return Timepicker;
}(React.PureComponent);

Timepicker.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isSearchable: PropTypes.bool,
  isFirst: PropTypes.bool,
  size: PropTypes.string,
  initialValue: PropTypes.string
};

var PeriodSelector = function (_PureComponent) {
  inherits(PeriodSelector, _PureComponent);

  function PeriodSelector() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PeriodSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PeriodSelector.__proto__ || Object.getPrototypeOf(PeriodSelector)).call.apply(_ref, [this].concat(args))), _this), _this.onChangeTime = function (element) {
      var onChange = _this.props.onChange;

      onChange(element);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(PeriodSelector, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          _props$names = slicedToArray(_props.names, 2),
          startAtName = _props$names[0],
          endAtName = _props$names[1],
          _props$initialValues = slicedToArray(_props.initialValues, 2),
          startAtDefault = _props$initialValues[0],
          endAtDefault = _props$initialValues[1],
          _props$placeholders = slicedToArray(_props.placeholders, 2),
          startAtPlaceholder = _props$placeholders[0],
          endAtPlaceholder = _props$placeholders[1];

      return React__default.createElement(
        React.Fragment,
        null,
        React__default.createElement(Timepicker, {
          name: startAtName,
          placeholder: startAtPlaceholder,
          options: options,
          onChange: this.onChangeTime,
          initialValue: startAtDefault,
          isFirst: true
        }),
        React__default.createElement(Timepicker, {
          name: endAtName,
          placeholder: endAtPlaceholder,
          options: options,
          onChange: this.onChangeTime,
          initialValue: endAtDefault
        })
      );
    }
  }]);
  return PeriodSelector;
}(React.PureComponent);

PeriodSelector.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  names: PropTypes.array.isRequired,
  placeholders: PropTypes.array.isRequired,
  initialValues: PropTypes.array.isRequired
};

var index = { Timepicker: Timepicker, PeriodSelector: PeriodSelector, Global: Global };

module.exports = index;
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _constants = require('./constants');

var BBBCardIO = (0, _reactNative.requireNativeComponent)('BBBCardIO', null);
var languageOrLocale = _react2['default'].PropTypes.oneOf(_constants.SUPPORTED_LANGUAGES);
var detectionMode = _react2['default'].PropTypes.oneOf(_constants.DETECTION_MODES);

var CardIO = (function (_Component) {
  _inherits(CardIO, _Component);

  function CardIO() {
    _classCallCheck(this, CardIO);

    _get(Object.getPrototypeOf(CardIO.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CardIO, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props;
      var onSuccess = _props.onSuccess;
      var onFailure = _props.onFailure;

      var successSubscription = _reactNative.NativeAppEventEmitter.addListener('cardIOSuccess', onSuccess);
      var failureSubscription = _reactNative.NativeAppEventEmitter.addListener('cardIOFailure', onFailure);

      this.setState({
        successSubscription: successSubscription,
        failureSubscription: failureSubscription
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _state = this.state;
      var successSubscription = _state.successSubscription;
      var failureSubscription = _state.failureSubscription;

      successSubscription.remove();
      failureSubscription.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(BBBCardIO, this.props);
    }
  }]);

  return CardIO;
})(_react.Component);

exports['default'] = CardIO;
;
module.exports = exports['default'];
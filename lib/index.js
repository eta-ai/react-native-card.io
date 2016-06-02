'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactNative = require('react-native');

var _CardIOIos = require('./CardIO.ios');

var _CardIOIos2 = _interopRequireDefault(_CardIOIos);

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

var preload = _reactNative.NativeModules.BBBCardIO.preload;
exports['default'] = _CardIOIos2['default'];
var CardIOConstants = constants;
exports.CardIOConstants = CardIOConstants;
exports.preload = preload;
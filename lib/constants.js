'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _reactNative = require('react-native');

var _NativeModules$BBBCardIO = _reactNative.NativeModules.BBBCardIO;
var LIBRARY_VERSION = _NativeModules$BBBCardIO.LIBRARY_VERSION;
var DETECTION_MODE = _NativeModules$BBBCardIO.DETECTION_MODE;
var CAN_READ_CARD_WITH_CAMERA = _NativeModules$BBBCardIO.CAN_READ_CARD_WITH_CAMERA;
var SUPPORTED_LANGUAGES = ['ar', 'da', 'de', 'en', 'en_AU', 'en_GB', 'es', 'es_MX', 'fr', 'he', 'is', 'it', 'ja', 'ko', 'ms', 'nb', 'nl', 'pl', 'pt', 'pt_BR', 'ru', 'sv', 'th', 'tr', 'zh-Hans', 'zh-Hant', 'zh-Hant_TW'];

exports.SUPPORTED_LANGUAGES = SUPPORTED_LANGUAGES;
exports.LIBRARY_VERSION = LIBRARY_VERSION;
exports.DETECTION_MODE = DETECTION_MODE;
exports.CAN_READ_CARD_WITH_CAMERA = CAN_READ_CARD_WITH_CAMERA;
var DETECTION_MODES = Object.keys(DETECTION_MODE).reduce(function (arr, key) {
  return arr.concat([DETECTION_MODE[key]]);
}, []);
exports.DETECTION_MODES = DETECTION_MODES;
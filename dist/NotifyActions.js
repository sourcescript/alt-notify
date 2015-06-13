'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('./alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = _alt2['default'].generateActions('add', 'remove', 'clear');
module.exports = exports['default'];
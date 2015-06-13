'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _NotifyActions = require('./NotifyActions');

var _NotifyActions2 = _interopRequireDefault(_NotifyActions);

var _symbols = require('./symbols');

var Item = (function () {
  /**
   * @param {Object} prop Properties (not to be mistaken with a Component `props`)
   */

  function Item(prop) {
    _classCallCheck(this, Item);

    prop || (prop = {});

    this[_symbols.ITEM_ID] = prop.id;
    this.type = prop.type;
    this[_symbols.ITEM_DURATION] = prop.duration || _config2['default'].duration();
    this.data = prop.data;

    this[_symbols.ITEM_TIMEOUT] = setTimeout(this.remove.bind(this), this[_symbols.ITEM_DURATION]);
  }

  _createClass(Item, [{
    key: 'remove',

    /**
     * Cancels the timeout, and calls the removeHandler
     * @see {constructor} (for the removeHandler)
     */
    value: function remove() {
      if (this[_symbols.ITEM_TIMEOUT]) {
        clearTimeout(this[_symbols.ITEM_TIMEOUT]);
      }

      _NotifyActions2['default'].remove(this[_symbols.ITEM_ID]);
    }
  }]);

  return Item;
})();

exports['default'] = Item;
module.exports = exports['default'];
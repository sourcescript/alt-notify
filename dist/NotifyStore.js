'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('./alt');

var _alt2 = _interopRequireDefault(_alt);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

var _NotifyActions = require('./NotifyActions');

var _NotifyActions2 = _interopRequireDefault(_NotifyActions);

var _symbols = require('./symbols');

// ID
var _counter = 0;

var NotifyStore = (function () {
  function NotifyStore() {
    _classCallCheck(this, NotifyStore);

    this.stack = [];
    this.bindActions(_NotifyActions2['default']);
  }

  _createClass(NotifyStore, [{
    key: 'onAdd',

    /**
     * Adds a new item to the stack
     * @param {Object} prop Properties (not to be mistaken with a Component `props`)
     */
    value: function onAdd(prop) {
      var data = prop.data;
      var type = prop.type;
      var duration = prop.duration;

      var id = _counter++;

      this.stack.push(new _Item2['default']({
        id: id,
        duration: duration,
        type: type,
        data: data
      }));
    }
  }, {
    key: 'onRemove',

    /**
     * Removes an item from the stack with the provided id.
     */
    value: function onRemove(id) {
      var index = this.stack.map(function (item) {
        return item[_symbols.ITEM_ID];
      }).indexOf(id);

      // If the message does not in the stack anymore,
      // We'll just let it be. This only happens when
      // a `clear` occurs. Not that there's any other reason.
      if (index == -1) {
        return false;
      }

      this.stack.splice(index, 1);
    }
  }, {
    key: 'onClear',

    /**
     * Clears either the whole stack, or items having the given type
     */
    value: function onClear(type) {
      this.stack = type == undefined ? [] : this.stack.filter(function (item) {
        return item.type !== type;
      });
    }
  }]);

  return NotifyStore;
})();

exports['default'] = _alt2['default'].createStore(NotifyStore);
module.exports = exports['default'];
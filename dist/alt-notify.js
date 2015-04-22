'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _objectWithoutProperties = function (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _React = require('react');

var _React2 = _interopRequireWildcard(_React);

var _AltContainer = require('alt/components/AltContainer');

var _AltContainer2 = _interopRequireWildcard(_AltContainer);

var _NotifyActions = require('./NotifyActions');

var _NotifyActions2 = _interopRequireWildcard(_NotifyActions);

var _NotifyStore = require('./NotifyStore');

var _NotifyStore2 = _interopRequireWildcard(_NotifyStore);

/**
 * @usage
 * <Drawer filter={'success'} render{(data) => {
 *   return ( <div> {this.data} </div> );
 * })}
 */
exports['default'] = _React2['default'].createClass({
  displayName: 'Drawer',

  propTypes: {
    /**
     * Types of messages from the Store
     * to be fetched
     */
    filter: _React2['default'].PropTypes.string,

    /**
     * The render of each item in the stack. We'll use this instead of
     * using `children` prop to allow `on-the-go` creation of a drawer.
     * To add, this removes our dependency from `cloneWithProps` which
     * exists only from the React `addon` library (oh wait -- we could
     * require from the lib, directly.. haha).
     *
     * To illustrate this,
     * <Drawer> <MyTemplateForThisDrawer /> </Drawer>
     * forcing us to create custom components.
     * Well, that's okay, but it isn't so friendly.
     *
     * Compared to this:
     *
     * <Drawer render={(data) => {
     *   return <div style={ ... }>{data.text}</div>;
     * })} />
     *
     * p.s., inspired by Flummox
     * https://github.com/acdlite/flummox
     */
    render: _React2['default'].PropTypes.func.isRequired
  },

  render: function render() {
    var _props = this.props;
    var render = _props.render;
    var filter = _props.filter;

    var other = _objectWithoutProperties(_props, ['render', 'filter']);

    return _React2['default'].createElement(
      'div',
      other,
      _React2['default'].createElement(_AltContainer2['default'], {
        store: _NotifyStore2['default'],
        render: function (props) {
          var stack = filter == undefined ? props.stack : props.stack.filter(function (item) {
            return item.type == filter;
          });

          return !!stack.length ? _React2['default'].createElement(
            'div',
            null,
            ' ',
            stack.map(function (item, i) {
              return render(item);
            }),
            ' '
          ) : null;
        } })
    );
  }
});
module.exports = exports['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _config = require('./config');

var _config2 = _interopRequireWildcard(_config);

var _NotifyActions = require('./NotifyActions');

var _NotifyActions2 = _interopRequireWildcard(_NotifyActions);

var _ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT = require('./symbols');

var Item = (function () {
  /**
   * @param {Object} prop Properties (not to be mistaken with a Component `props`)
   */

  function Item(prop) {
    _classCallCheck(this, Item);

    prop || (prop = {});

    this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_ID] = prop.id;
    this.type = prop.type;
    this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_DURATION] = prop.duration || _config2['default'].duration();
    this.data = prop.data;

    this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_TIMEOUT] = setTimeout(this.remove.bind(this), this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_DURATION]);
  }

  _createClass(Item, [{
    key: 'remove',

    /**
     * Cancels the timeout, and calls the removeHandler
     * @see {constructor} (for the removeHandler)
     */
    value: function remove() {
      if (this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_TIMEOUT]) {
        clearTimeout(this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_TIMEOUT]);
      }

      _NotifyActions2['default'].remove(this[_ITEM_ID$ITEM_DURATION$ITEM_TIMEOUT.ITEM_ID]);
    }
  }]);

  return Item;
})();

exports['default'] = Item;
module.exports = exports['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _alt = require('./alt');

var _alt2 = _interopRequireWildcard(_alt);

exports['default'] = _alt2['default'].generateActions('add', 'remove', 'clear');
module.exports = exports['default'];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _alt = require('./alt');

var _alt2 = _interopRequireWildcard(_alt);

var _Item = require('./Item');

var _Item2 = _interopRequireWildcard(_Item);

var _NotifyActions = require('./NotifyActions');

var _NotifyActions2 = _interopRequireWildcard(_NotifyActions);

var _ITEM_ID = require('./symbols');

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
        return item[_ITEM_ID.ITEM_ID];
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
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _expect = require('chai');

var _React = require('react/addons');

var _React2 = _interopRequireWildcard(_React);

var _Component = require('../Drawer.jsx');

var _Component2 = _interopRequireWildcard(_Component);

var _NotifyStore = require('../NotifyStore');

var _NotifyStore2 = _interopRequireWildcard(_NotifyStore);

var TestUtils = _React2['default'].addons.TestUtils;

describe('Drawer component', function () {
  var stub;
  beforeEach(function () {
    stub = sinon.stub(_NotifyStore2['default'], 'getState');
  });
  afterEach(function () {
    _NotifyStore2['default'].getState.restore();
  });

  describe('@filter', function () {
    it('should render only messages with certain type when filter is provided', function () {
      stub.returns({ stack: [{ id: 1, type: 'notification' }, { id: 2, type: 'notification' }, { id: 3 }, { id: 4, type: 'success' }]
      });

      var Instance = TestUtils.renderIntoDocument(_React2['default'].createElement(_Component2['default'], { filter: 'notification',
        render: function (props) {
          return _React2['default'].createElement('span', { key: props.key });
        } }));

      var elements = TestUtils.scryRenderedDOMComponentsWithTag(Instance, 'span');
      _expect.expect(elements.length).to.equal(2);
    });

    it('should render all messages when filter is not provided', function () {
      stub.returns({ stack: [{ id: 1, type: 'notification' }, { id: 2 }, { id: 3 }]
      });

      var Instance = TestUtils.renderIntoDocument(_React2['default'].createElement(_Component2['default'], { render: function (props) {
          return _React2['default'].createElement('span', { key: props.key });
        } }));
      var elements = TestUtils.scryRenderedDOMComponentsWithTag(Instance, 'span');
      _expect.expect(elements.length).to.equal(3);
    });
  });
});
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _expect = require('chai');

var _config = require('../config');

var _config2 = _interopRequireWildcard(_config);

var _NotifyActions = require('../NotifyActions');

var _NotifyActions2 = _interopRequireWildcard(_NotifyActions);

var _Item = require('../Item');

var _Item2 = _interopRequireWildcard(_Item);

describe('Item object', function () {
  var clock;
  beforeEach(function () {
    clock = sinon.useFakeTimers();
  });
  afterEach(function () {
    clock.restore();
  });

  describe('#constructor', function () {
    it('should start the timer when instantiated', function () {
      sinon.spy(window, 'setTimeout');

      // It's called on the constructor so we'll just instantiate
      var item = new _Item2['default']();
      _expect.expect(window.setTimeout.called).to.equal(true);

      window.setTimeout.restore();
    });
  });

  // We really just wanna test the `remove` here.
  // Compared to above,
  describe('#remove', function () {
    it('should cancel the timer for itself after the provided duration', function () {
      var duration = 1000;
      sinon.spy(window, 'clearTimeout');
      // We don't really need to test the `removeHandler`
      // as this is tested on the test below
      var item = new _Item2['default']({ duration: duration });

      clock.tick(duration);
      _expect.expect(clearTimeout.called).to.equal(true);

      window.clearTimeout.restore();
    });

    it('should call `remove` within the <config defaults> if the <duration> was not provided', function () {
      var duration = 10000;
      sinon.stub(_config2['default'], 'duration').returns(duration);
      // We don't really need to test the `removeHandler`
      // as this is tested on the test below
      sinon.spy(_Item2['default'].prototype, 'remove');
      var item = new _Item2['default']({});

      clock.tick(duration);
      _expect.expect(item.remove.called).to.equal(true);

      _Item2['default'].prototype.remove.restore();
      _config2['default'].duration.restore();
    });

    it('should call the NotifyActions.remove with the given id', function () {
      var spy = sinon.spy(_NotifyActions2['default'], 'remove');
      var item = new _Item2['default']({});

      item.remove();
      _expect.expect(_NotifyActions2['default'].remove.called).to.equal(true);
      _NotifyActions2['default'].remove.restore();
    });
  });
});
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _expect = require('chai');

var _alt = require('../alt');

var _alt2 = _interopRequireWildcard(_alt);

var _NotifyStore = require('../NotifyStore');

var _NotifyStore2 = _interopRequireWildcard(_NotifyStore);

var _AltTestingUtils = require('alt/utils/AltTestingUtils');

var _AltTestingUtils2 = _interopRequireWildcard(_AltTestingUtils);

var _ITEM_ID = require('../symbols');

var _Item = require('../Item');

var _Item2 = _interopRequireWildcard(_Item);

describe('NotifyStore', function () {
  var Store;
  beforeEach(function () {
    Store = _AltTestingUtils2['default'].makeStoreTestable(_alt2['default'], _NotifyStore2['default'].StoreModel);
  });

  it('should have an empty stack at start', function () {
    _expect.expect(Store.stack.length).to.equal(0);
  });

  describe('#add', function () {
    it('should add in data to the stack', function () {
      Store.onAdd({});
      _expect.expect(Store.stack.length).to.equal(1);
    });

    it('should add an instance of `Item` in the stack', function () {
      Store.onAdd({});
      _expect.expect(Store.stack[0] instanceof _Item2['default']).to.equal(true);
    });
  });

  describe('#remove', function () {
    it('should remove a message of the provided id in the stack', function () {
      // we'll add first
      Store.onAdd({});
      // Get the id of the last message
      var lastId = Store.stack[0][_ITEM_ID.ITEM_ID];

      // then the actual test
      Store.onRemove(lastId);
      _expect.expect(Store.stack.map(function (item) {
        return item.id;
      }).indexOf(lastId)).to.equal(-1);
    });

    it('should not emit changes (or return false) if the provided item was not found', function () {
      // Given that the stack is empty at start, we shouldn't find anything at all.
      // 69 is just a random number I thought of.
      _expect.expect(Store.onRemove(69)).to.equal(false);
    });
  });

  describe('#clear', function () {
    it('should clear the stack', function () {
      Store.stack = [{}, {}, {}];
      _expect.expect(Store.stack.length).to.equal(3);

      Store.onClear();
      _expect.expect(Store.stack.length).to.equal(0);
    });

    it('should remove all items in the stack with the provided type', function () {
      var type = 'success';

      // add three items
      Store.onAdd({ type: type });
      Store.onAdd({});
      Store.onAdd({});
      _expect.expect(Store.stack.length).to.equal(3);

      // the actual test. first, we run the `clear` action
      // then we check if it still exists (the opposite of the expectation above)
      Store.onClear(type);
      _expect.expect(Store.stack.map(function (item) {
        return item.type;
      }).indexOf(type)).to.equal(-1);
      _expect.expect(Store.stack.length).to.equal(2);
    });
  });
});
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _expect = require('chai');

var _config = require('../config');

var _config2 = _interopRequireWildcard(_config);

describe('config', function () {
  it('should return the `duration` value if no argument was provided', function () {
    _expect.expect(_config2['default'].duration()).to.equal(10000);
  });

  it('should set the duration to the current', function () {
    _expect.expect(_config2['default'].duration(5000)).to.equal(_config2['default']);
  });

  it('should set the duration to the current and then return the set duration', function () {
    _expect.expect(_config2['default'].duration(69).duration()).to.equal(69);
  });
});
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Alt = require('alt');

var _Alt2 = _interopRequireWildcard(_Alt);

exports['default'] = new _Alt2['default']();
module.exports = exports['default'];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Global config setters/getters. Chainable ;)
 *
 * @usage
 * config.duration(500) //
 * config.duration() // => 500
 * config.duration(600).duration() // 600
 */

// Number of millseconds for each message to last
var _duration = 10000;

/**
 * (s|g)etter for the duration
 *
 * @parmam {int} ms
 * @return {this|int}
 */
exports["default"] = {
  duration: function duration(ms) {
    if (ms) {
      // We'll parse it as int just in case a
      // dumb consumer tries to provide a string
      _duration = parseInt(ms, 10);
      return this;
    } else {
      return _duration;
    }
  }
};
module.exports = exports["default"];
'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _config2 = require('./config');

var _config3 = _interopRequireWildcard(_config2);

exports.config = _config3['default'];

var _Drawer2 = require('./Drawer');

var _Drawer3 = _interopRequireWildcard(_Drawer2);

exports.Drawer = _Drawer3['default'];

var _NotifyActions2 = require('./NotifyActions');

var _NotifyActions3 = _interopRequireWildcard(_NotifyActions2);

exports.NotifyActions = _NotifyActions3['default'];

var _NotifyStore2 = require('./NotifyStore');

var _NotifyStore3 = _interopRequireWildcard(_NotifyStore2);

exports.NotifyStore = _NotifyStore3['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ITEM_ID = Symbol('id');
exports.ITEM_ID = ITEM_ID;
var ITEM_DURATION = Symbol('duration');
exports.ITEM_DURATION = ITEM_DURATION;
var ITEM_TIMEOUT = Symbol('_timeout');
exports.ITEM_TIMEOUT = ITEM_TIMEOUT;

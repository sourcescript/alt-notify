'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _altComponentsAltContainer = require('alt/components/AltContainer');

var _altComponentsAltContainer2 = _interopRequireDefault(_altComponentsAltContainer);

var _NotifyActions = require('./NotifyActions');

var _NotifyActions2 = _interopRequireDefault(_NotifyActions);

var _NotifyStore = require('./NotifyStore');

var _NotifyStore2 = _interopRequireDefault(_NotifyStore);

/**
 * @usage
 * <Drawer filter={'success'} render{(data) => {
 *   return ( <div> {this.data} </div> );
 * })}
 */
exports['default'] = _react2['default'].createClass({
  displayName: 'Drawer',

  propTypes: {
    /**
     * Types of messages from the Store
     * to be fetched
     */
    filter: _react2['default'].PropTypes.string,

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
    render: _react2['default'].PropTypes.func.isRequired
  },

  render: function render() {
    var _props = this.props;
    var render = _props.render;
    var filter = _props.filter;

    var other = _objectWithoutProperties(_props, ['render', 'filter']);

    return _react2['default'].createElement(
      'div',
      other,
      _react2['default'].createElement(_altComponentsAltContainer2['default'], {
        store: _NotifyStore2['default'],
        render: function (props) {
          var stack = filter == undefined ? props.stack : props.stack.filter(function (item) {
            return item.type == filter;
          });

          return !!stack.length ? _react2['default'].createElement(
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
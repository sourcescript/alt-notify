import React from 'react/addons';

import NotifyStore from './NotifyStore';
import Item from './Item';

export default React.createClass({
  propTypes: {
    /**
     * Types of messages from the Store
     * to be fetched
     */
    filter: React.PropTypes.string
  },

  componentDidMount() {
    // Bind listener
    NotifyStore.listen(this._onChange);
  },

  componentWillUnmount() {
    // Unbind store listener
    NotifyStore.unlisten(this._onChange);
  },

  _onChange(state) {
    var filter = this.props.filter;
    var stack;

    if ( filter ) {
      stack = state.stack.filter((item) => {
        return item.type == filter;
      });
    }

    this.setState({ stack });
  },

  render() {
    var { stack } = this.state;
    var { children } = this.props;

    return (
      <div>
        {stack.map((item) => {
          return React.addons.cloneWithProps(children, {
            data: item
          });
        })}
      </div>
    );
  }
});

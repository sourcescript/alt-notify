import React from 'react';
import NotifyStore from './NotifyStore';

/**
 * @usage
 * <Drawer filter={'success'} render{(data) => {
 *   return ( <div> {this.data} </div> );
 * })}
 */
export default React.createClass({
  getInitialState() {
    return NotifyStore.getState();
  },

  componentDidMount() {
    // Bind listener
    NotifyStore.listen(this._onChange);
  },

  componentWillUnmount() {
    // Unbind store listener
    NotifyStore.unlisten(this._onChange);
  },

  /**
   * Handler for the the store listener.
   */
  _onChange(state) {
    var { filter } = this.props;

    // We'll filter in items if the `filter` prop was provided
    var stack = filter
      ? state.stack
      : state.stack.filter(item => { item.type == filter });

    this.setState({ stack });
  },

  propTypes: {
    /**
     * Types of messages from the Store
     * to be fetched
     */
    filter: React.PropTypes.string,

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
    render: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <div>
        {this.state.stack.map((item, i) => {
          /* We'll implicitly put the key here to reduce boilerplate */
          return <div key={i}> {this.props.render(item)} </div>
        })}
      </div>
    );
  }
});

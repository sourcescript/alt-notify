import React from 'react';
import AltContainer from 'alt/components/AltContainer';
import NotifyActions from './NotifyActions';
import NotifyStore from './NotifyStore';

/**
 * @usage
 * <Drawer filter={'success'} render{(data) => {
 *   return ( <div> {this.data} </div> );
 * })}
 */
export default React.createClass({
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
    var { render, filter, ...other } = this.props;

    return (
      <div {...other}>
        <AltContainer
          store={NotifyStore}
          render={(props) => {
            var stack = filter == undefined
              ? props.stack
              : props.stack.filter(item => item._type == filter);

            return !!stack.length ? <div> { stack.map((item, i) => {
              return render(Object.assign({}, item, {
                key: i,
                removeHandler: () => NotifyActions.remove(item._id)
              }));
            }) } </div> : null;
          }} />
      </div>
    );
  }
});

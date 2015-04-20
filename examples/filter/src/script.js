require('babel/polyfill');
import React from 'react';
import classnames from 'classnames';
import { Drawer, NotifyActions } from '../../../';

var App = React.createClass({
  render() {
    return (
      <div>
      <Drawer className="drawer" render={(props) => {
          var classNames = classnames('alert', 'drawer__item', {
            'alert-success': props.type == 'success',
            'alert-danger': props.type == 'danger'
          });
          return (
            <div className={classNames}>
              <button type="button" className="close" onClick={props.remove}>
                X
              </button>
              <p>{props.data} </p>
            </div>
          );
        }} />

        <Drawer className="drawer drawer--success" filter={'success'} render={(props) => {
            return (
              <div className="alert alert-success drawer__item">
                <button type="button" className="close" onClick={props.remove}>
                  X
                </button>
                <p>{props.data} </p>
              </div>
            );
          }} />

          <Drawer className="drawer drawer--danger" filter={'danger'} render={(props) => {
              return (
                <div className="alert alert-danger drawer__item">
                  <button type="button" className="close" onClick={props.remove}>
                    X
                  </button>
                  <p>{props.data} </p>
                </div>
              );
            }} />

        <div className="btn__container">
          <div className="btn__container__inner">
            <button onClick={this.addNotification} type="button" className="btn btn-primary btn-lg">
              Hey, Notify Me!
            </button>
          </div>
        </div>
      </div>
    );
  },

  addNotification() {
    var random = Math.floor((Math.random() * 3) + 0);
    var messages = ['Hello', 'Oh no!', 'Hmm..', 'You look good today!'];
    var types = ['success', 'danger']
    NotifyActions.add({ type: types[random % 2], data: messages[random] });
  }
});

React.render(<App />, document.body)

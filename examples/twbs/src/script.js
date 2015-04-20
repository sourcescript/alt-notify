require('babel/polyfill');
import React from 'react';
import { Drawer, NotifyActions } from '../../../';

var App = React.createClass({
  render() {
    return (
      <div>
        <Drawer className="drawer" render={(props) => {
            return (
              <div className="alert alert-success drawer__item">
                <button type="button" className="close" onClick={props.remove} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
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
    NotifyActions.add({ type: 'alert', data: messages[random] });
  }
});

React.render(<App />, document.body)

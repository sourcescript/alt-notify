require('babel/polyfill');
import React from 'react';
import { Drawer, NotifyActions } from '../../../';

var App = React.createClass({
  render() {
    return (
      <div>
        <Drawer render={(data) => {
            return <div> {data} </div>
          }} />

        <button onClick={() => { NotifyActions.add({ type: 'alert', text: 'hehe' }) }} type="button">
          Notify
        </button>
      </div>
    );
  }
});

React.render(<App />, document.body)

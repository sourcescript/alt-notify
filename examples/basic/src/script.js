require('babel/polyfill');
import React from 'react';
import { Drawer, NotifyActions } from '../../../';

var App = React.createClass({
  render() {
    return (
      <div>
        <Drawer render={(props) => {
            return <h2>{props.data} <button onClick={() => { props.remove(); }}> (x) </button> </h2>
          }} />

        <button onClick={() => { NotifyActions.add({ type: 'alert', data: 'hehe' }) }} type="button">
          Notify
        </button>
      </div>
    );
  }
});

React.render(<App />, document.body)

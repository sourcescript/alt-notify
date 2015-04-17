require('babel/polyfill');
import React from 'react';
import { Drawer, NotifyActions } from '../../../';

var App = React.createClass({
  render() {
    return (
      <div>
        <Drawer filter="alert"
          render={(data) => {
            <div key={data.key}> {data.text} </div>
          }} />

        <button onClick={NotifyActions.add.bind(null, { text: 'hehe' })} type="button">
          Notify
        </button>
      </div>
    );
  }
});

React.render(<App />, document.body)

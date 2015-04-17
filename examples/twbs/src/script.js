import React from 'react';
import { Drawer, NotifyActions } from 'alt-notify';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <AltNotify.Drawer filter="alert"
          render={(data) => {
            <div key={data.key}> {data.text} </data>
          }} />

        <button onClick={NotifyActions.add.bind(null, { text: 'hehe' }) type="button">
          Notify
        </button>
      </div>
    );
  }
});

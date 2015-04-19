import { expect } from 'chai'
import React from 'react/addons';
import Component from '../Drawer.jsx';
import NotifyStore from '../NotifyStore';
var TestUtils = React.addons.TestUtils;

describe('Drawer component', () => {
  var stub;
  beforeEach(() => { stub = sinon.stub(NotifyStore, 'getState'); })
  afterEach(() => { NotifyStore.getState.restore(); });

  describe('@filter', function() {
    it('should render only messages with certain type when filter is provided', () => {
      stub.returns({ stack: [
          { id: 1, type: 'notification' },
          { id: 2, type: 'notification' },
          { id: 3 },
          { id: 4, type: 'success' }
        ]
      });

      var Instance = TestUtils.renderIntoDocument(
        <Component filter="notification"
        render={props => <span key={props.key} /> } />
      );

      var elements = TestUtils.scryRenderedDOMComponentsWithTag(Instance, 'span');
      expect(elements.length).to.equal(2);
    });

    it('should render all messages when filter is not provided', () => {
      stub.returns({ stack: [
          { id: 1, type: 'notification' },
          { id: 2 },
          { id: 3 }
        ]
      });

      var Instance = TestUtils.renderIntoDocument(<Component render={props => <span key={props.key} /> } />);
      var elements = TestUtils.scryRenderedDOMComponentsWithTag(Instance, 'span');
      expect(elements.length).to.equal(3);
    });
  });
});

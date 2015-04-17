import { expect } from 'chai'
import React from 'react/addons';
import Component from '../Drawer.jsx';
import NotifyStore from '../NotifyStore';
var TestUtils = React.addons.TestUtils;

describe('Drawer component', () => {
  var stub;
  beforeEach(() => {
    stub = sinon.stub(NotifyStore, 'getState');
  })
  // Restore the stubs
  afterEach(() => {
    NotifyStore.getState.restore();
  });

  describe('filter', function() {
    it('should render only messages with certain type when filter is provided', () => {
      stub.returns({ stack: [
          { _id: 1, _type: 'notification' },
          { _id: 2, _type: 'notification' },
          { _id: 3 },
          { _id: 4, _type: 'success' }
        ]
      });

      var Instance = TestUtils.renderIntoDocument(<Component
        filter="notification"
        render={(props) => { return <span key={props.key} /> }} />);

      var elements = TestUtils.scryRenderedDOMComponentsWithTag(Instance, 'span');
      expect(elements.length).to.equal(2);
    });

    it('should render all messages when filter is not provided', () => {
      stub.returns({ stack: [
          { _id: 1, _type: 'notification' },
          { _id: 2 },
          { _id: 3 }
        ]
      });

      var Instance = TestUtils.renderIntoDocument(<Component
        render={(props) => { return <span key={props.key} /> }} />);

      var elements = TestUtils.scryRenderedDOMComponentsWithTag(Instance, 'span');
      expect(elements.length).to.equal(3);
    });
  });

  describe('remove', () => {
    it('should be able to remove the children themselves', () => {
      //
    });
  });
});

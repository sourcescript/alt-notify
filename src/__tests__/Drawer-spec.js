import React from 'react/addons';
import { expect } from 'chai'
import Component from '../Drawer';
import NotifyStore from '../NotifyStore';
const { TestUtils } = React.addons;
describe('Drawer component', function() {
  var stub;
  beforeEach(function() {
    stub = sinon.stub(NotifyStore, 'getState');
  })
  // Restore the stubs
  afterEach(function() {
    NotifyStore.getState.restore();
  });

  describe('filter', function() {
    it('should render only messages with certain type when filter is provided', function() {
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

    it('should render all messages when filter is not provided', function() {
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
  })
});

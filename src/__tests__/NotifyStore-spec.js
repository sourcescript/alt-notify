import { expect } from 'chai';
// var sinon = require('sinon'); // no need to require
import alt from '../alt';
import NotifyStore from '../NotifyStore';
import NotifyActions from '../NotifyActions';
var dispatcher = alt.dispatcher;

describe('NotifyStore', () =>  {
  it('should have an empty stack at start', () =>  {
    expect(NotifyStore.getState().stack.length).to.equal(0);
  });

  describe('#add', () =>  {
    it('should add in data to the stack', () =>  {
      const oldStackLength = NotifyStore.getState().stack.length;
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      expect(NotifyStore.getState().stack.length).to.equal(oldStackLength + 1);
    });
  });

  describe('#remove', () =>  {
    it('should remove a message of the provided index in the stack', () => {
      const oldStackLength = NotifyStore.getState().stack.length;

      // we'll add first
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      // two since we just added two through the dispatcher as stated two lines above
      expect(NotifyStore.getState().stack.length).to.equal(oldStackLength + 2);

      // then the actual test
      dispatcher.dispatch({ action: NotifyActions.REMOVE, data: 1 });
      expect(NotifyStore.getState().stack.length).to.equal(oldStackLength + 1);
      expect(NotifyStore.getState().stack[oldStackLength + 1]).to.equal(undefined);
    });
  });

  describe('#clear', () =>  {
    it('should clear the stack', () =>  {
      const oldStackLength = NotifyStore.getState().stack.length;

      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      expect(NotifyStore.getState().stack.length).to.equal(oldStackLength + 3);

      dispatcher.dispatch({ action: NotifyActions.CLEAR });
      expect(NotifyStore.getState().stack.length).to.equal(0);
    });

    it('should remove all items in the stack with the provided type', () =>  {
      const type = 'success';
      const oldStackLength = NotifyStore.getState().stack.length;

      // add three items
      dispatcher.dispatch({ action: NotifyActions.ADD, data: { type } });
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      dispatcher.dispatch({ action: NotifyActions.ADD, data: {} });
      // just add an expectation so we know there are three
      // and the item with [type] exists
      expect(NotifyStore.getState().stack.map(item => item.type).indexOf(type)).not.to.equal(-1);
      expect(NotifyStore.getState().stack.length).to.equal(oldStackLength + 3);

      // the actual test. first, we run the `clear` action
      // then we check if it still exists (the opposite of the expectation above)
      dispatcher.dispatch({ action: NotifyActions.CLEAR, data: type });
      expect(NotifyStore.getState().stack.map(item => item.type).indexOf(type)).to.equal(-1);
      expect(NotifyStore.getState().stack.length).to.equal(oldStackLength + 2);
    });
  });
});

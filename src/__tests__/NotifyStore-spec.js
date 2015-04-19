import { expect } from 'chai';
import alt from '../alt';
import NotifyStore from '../NotifyStore';
import AltTestingUtils from 'alt/utils/AltTestingUtils';
import Item from '../Item';

describe('NotifyStore', () =>  {
  var Store;
  beforeEach(() => {
    Store = AltTestingUtils.makeStoreTestable(alt, NotifyStore.StoreModel);
  });

  it('should have an empty stack at start', () =>  {
    expect(Store.stack.length).to.equal(0);
  });

  describe('#add', () =>  {
    it('should add in data to the stack', () =>  {
      Store.onAdd({});
      expect(Store.stack.length).to.equal(1);
    });

    it('should add an instance of `Item` in the stack', () => {
      Store.onAdd({});
      expect(Store.stack[0] instanceof Item).to.equal(true);
    })
  });

  describe('#remove', () =>  {
    it('should remove a message of the provided id in the stack', () => {
      // we'll add first
      Store.onAdd({});
      // Get the id of the last message
      const lastId = Store.stack[0]._id;

      // then the actual test
      Store.onRemove(lastId);
      expect(Store.stack.map(item => item.id).indexOf(lastId)).to.equal(-1);
    });

    it('should not emit changes (or return false) if the provided item was not found', () => {
      // Given that the stack is empty at start, we shouldn't find anything at all.
      // 69 is just a random number I thought of.
      expect(Store.onRemove(69)).to.equal(false);
    });
  });

  describe('#clear', () =>  {
    it('should clear the stack', () => {
      Store.stack = [{}, {}, {}];
      expect(Store.stack.length).to.equal(3);

      Store.onClear();
      expect(Store.stack.length).to.equal(0);
    });

    it('should remove all items in the stack with the provided type', () =>  {
      const type = 'success';

      // add three items
      Store.onAdd({ type });
      Store.onAdd({});
      Store.onAdd({});
      expect(Store.stack.length).to.equal(3);

      // the actual test. first, we run the `clear` action
      // then we check if it still exists (the opposite of the expectation above)
      Store.onClear(type);
      expect(Store.stack.map(item => item.type).indexOf(type)).to.equal(-1);
      expect(Store.stack.length).to.equal(2);
    });
  });
});

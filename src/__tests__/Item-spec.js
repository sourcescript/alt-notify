import { expect } from 'chai';
import config from '../config';
import NotifyActions from '../NotifyActions';
import Item from '../Item';

describe('Item object', () => {
  var clock, sandbox;
  beforeEach(() => {
    sandbox = sinon.sanbox.create();
    clock = sandbox.useFakeTimers();
  });
  afterEach(() => {
    sandbox.restore();
  });

  describe('#constructor', () => {
    it('should start the timer when instantiated', () => {
      sandbox.spy(window, 'setTimeout');

      // It's called on the constructor so we'll just instantiate
      var item = new Item();
      expect(window.setTimeout.called).to.equal(true);
    });
  });

  // We really just wanna test the `remove` here.
  // Compared to above,
  describe('#remove', () => {
    it('should cancel the timer for itself after the provided duration', () => {
      const duration = 1000;
      sandbox.spy(window, 'clearTimeout');
      // We don't really need to test the `removeHandler`
      // as this is tested on the test below
      var item = new Item({ duration });

      clock.tick(duration);
      expect(clearTimeout.called).to.equal(true);
    });

    it('should call `remove` within the <config defaults> if the <duration> was not provided', () => {
      const duration = 10000;
      sandbox.stub(config, 'duration').returns(duration);
      // We don't really need to test the `removeHandler`
      // as this is tested on the test below
      sandbox.spy(Item.prototype, 'remove');
      var item = new Item({});

      clock.tick(duration);
      expect(item.remove.called).to.equal(true);
    });

    it('should call the NotifyActions.remove with the given id', () => {
      var spy = sandbox.spy(NotifyActions, 'remove');
      var item = new Item({});

      item.remove();
      expect(NotifyActions.remove.called).to.equal(true);
    });
  });
});
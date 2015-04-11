import { expect } from 'chai';
import alt from '../alt';

describe('NotifyActions', () => {
  var dispatcherSpy;
  beforeEach(() => {
    dispatcherSpy = sinon.spy(alt.dispatcher, 'dispatch');
  });

  afterEach(() => {
    // Restore spies so we don't affect other tests
    alt.dispatcher.dispatch.restore();
  });

  // describe('#add');
  // describe('#remove');
  // describe('#clear');
});

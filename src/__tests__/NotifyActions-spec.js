import { expect } from 'chai';
// var sinon = require('sinon'); // no need to require
import alt from '../alt';

describe('NotifyActions', () => {
  var dispatcherSpy;
  beforeEach(() => {
    dispatcherSpy = sinon.spy(alt.dispatcher, 'dispatch');
  });

  afterEach(() => {
    // clean up
    alt.dispatcher.dispatch.restore();
  });

  // describe('#add');
  // describe('#remove');
  // describe('#clear');
});

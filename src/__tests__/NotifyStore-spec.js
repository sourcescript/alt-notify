var expect = require('chai').expect;
var NotifyStore = require('../NotifyStore');
console.log(NotifyStore.getState);
// console.log(NotifyStore.getState());

describe('NotifyStore', function() {
  it('should have an empty stack at start', function() {
    expect(NotifyStore.getState().stack.length).to.equal(0);
  });

  describe('#add', function() {
    it('should add in data to the stack', function() {

    });
  });

  describe('#remove', function() {
    it('should remove a message of the provided index in the stack', function() {

    });
  });

  describe('#clear', function() {
    it('should clear the stack');
    it('should remove all items in the stack with the provided type');
  });
});

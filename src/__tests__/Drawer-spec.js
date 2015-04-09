var expect = require('chai').expect;
// we no longer have to do this
// check `karma.conf.js`.
// var sinon = require('sinon');

var Drawer = require('../Drawer.jsx');
var NotifyActions = require('../NotifyActions');
var NotifyStore = require('../NotifyStore');

describe('Drawer component', function() {
  describe('filter', function() {
    it('should filter the messages properly when provided', function() {
      sinon.stub(NotifyStore, 'getState');
    });

    it('should not filter the messages properly when not provided', function() {

    });
  })
});

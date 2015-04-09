var expect = require('chai').expect;
var config = require('../config');

describe('config', function() {
  it('should return the `duration` value if no argument was provded', function() {
    expect(config.duration()).to.equal(10000);
  });

  it('should set the duration to the current', function() {
    expect(config.duration(5000)).to.equal(config);
  });

  it('should set the duration to the current and then return the set duration', function() {
    expect(config.duration(69).duration()).to.equal(69);
  })
});

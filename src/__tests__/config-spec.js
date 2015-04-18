import { expect } from 'chai';
import config from '../config';

describe('config', () => {
  it('should return the `duration` value if no argument was provided', () => {
    expect(config.duration()).to.equal(10000);
  });

  it('should set the duration to the current', () => {
    expect(config.duration(5000)).to.equal(config);
  });

  it('should set the duration to the current and then return the set duration', () => {
    expect(config.duration(69).duration()).to.equal(69);
  })
});

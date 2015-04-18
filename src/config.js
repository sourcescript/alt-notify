/**
 * Global config setters/getters. Chainable ;)
 *
 * @usage
 * config.duration(500) //
 * config.duration() // => 500
 * config.duration(600).duration() // 600
 */

// Number of millseconds for each message to last
var _duration = 10000;

/**
 * (s|g)etter for the duration
 *
 * @parmam {int} ms
 * @return {this|int}
 */
export default {
  duration: function (ms) {
    if ( ms ) {
      // We'll parse it as int just in case a
      // dumb consumer tries to provide a string
      _duration = parseInt(ms, 10);
      return this;
    } else {
      return _duration;
    }
  }
};

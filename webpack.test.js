/**
 * Webpack config for our Karma tests
 * This captures only test files (*-spec.js).
 * http://webpack.github.io/docs/context.html
 */
var context = require.context('./src', true, /-spec\.js$/);
context.keys().forEach(context);

/**
 * Webpack config for our Karma tests
 * This captures only test files.
 * http://webpack.github.io/docs/context.html
 */
require.context('./src/', false, /-spec\.js$/);
context.keys().forEach(context);

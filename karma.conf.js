// Karma configuration
// Generated on Wed Apr 08 2015 22:52:43 GMT+0800 (Malay Peninsula Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-sinon',
      'karma-chai',
      'karma-chrome-launcher'
    ],


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      // PhantomJS polyfill
      // './node_modules/phantomjs-polyfill/bind-polyfill.js',
      // './node_modules/babel-core/browser-polyfill.js',
      'webpack.test.js'
    ],

    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd'
      }
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'webpack.test.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader?modules=common&stage=0" },
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
      },
      devtool: 'inline-source-map'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};

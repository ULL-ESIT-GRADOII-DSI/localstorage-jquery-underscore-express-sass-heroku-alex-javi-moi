// Karma configuration
// Generated on Fri Apr 08 2016 08:50:43 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    client : {
      mocha : {
          ui : 'bdd'
      }
    },

    plugins : [
        'karma-mocha',
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-firefox-launcher'
    ],

    // list of files / patterns to load in the browser
    files: [
      './assets/js/csv.js',
      './test/*.js',
      './test/index.html',
      './test/sinon-1.17.2.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
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
    browsers: ['PhantomJS', 'Firefox', process.env.TRAVIS ? 'Chrome_travis_ci' : 'Chrome'],
    customLaunchers: {
       Chrome_travis_ci: {
         base: 'Chrome',
         flags: ['--no-sandbox']
       }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

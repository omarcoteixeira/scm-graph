// Karma configuration
// Generated on Fri Nov 04 2016 21:43:25 GMT-0200 (BRST)

var stringify = require('stringify');
var istanbul = require('browserify-istanbul');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      '*.js',
      'test/**/*.spec.js'
    ],
 
    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['browserify']
    },

    // test results reporter to use
    reporters: ['progress', 'verbose', 'junit', 'coverage'],

    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'TESTS-xunit.xml',
      useBrowserName: false
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'reports',
      subdir: 'coverage',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },

    browserify: {
      debug: true,
      transform: [
        stringify({
          extensions: ['.html'],
          minify: false
        }),
        istanbul({
          ignore: [
            '**/*.html'
          ]
        })
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('foobar');
        });
      }
    },

    // level of logging
    logLevel: config.LOG_INFO,

    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    port: 9876,
    colors: true
  })
}

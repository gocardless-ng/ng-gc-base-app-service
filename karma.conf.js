'use strict';

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',


    // list of files / patterns to load in the browser
    files: [
      // Vendor
      'components/bower-angular/angular.js',
      'components/bower-angular-mocks/angular-mocks.js',
      'components/bower-lodash-angular/lodash.custom.js',
      'components/bower-redefine/*.js',
      'components/ng-http-factory/*.js',
      'components/ng-gc-utils/**/*.js',
      'components/ng-gc-user-api-service/*.js',

      // Specs helpers
      'components/jasmine-helpers/*.js',

      'config/*.js',
      'initializers/*.js',
      'services/*.js',
      'ng-gc-base-app-service*.js'
    ],


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    frameworks: ['jasmine'],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['dots', 'growl'],


    reportSlowerThan: 50,


    // enable / disable watching file and executing tests
    // whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

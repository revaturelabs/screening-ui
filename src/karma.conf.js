// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'karma-typescript'],
    plugins: [
      require('karma-jasmine'),
      require('karma-typescript'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
      { pattern: "**/*.ts" }
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join('coverage/'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    karmaTypescriptConfig: {
      reports:
      {
        "lcovonly":{
          "directory": "coverage",
          "filename": "lcov.info",
          "subdirectory": "lcov"
        }
      }
    },
    reporters: ['progress', 'karma-typescript', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
// karma.conf.js
module.exports = function(config) {
  config.set({

    basePath: '../../',

    frameworks: ['mocha', 'sinon-chai'],

    browsers : ['Chrome'],

    reporters : ['mocha'],

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    files: [

      { pattern: 'node_modules/chai/chai.js', watched: false },

      { pattern: 'node_modules/angular/angular.js', watched: false },

      { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },

      { pattern: 'node_modules/angular-route/angular-route.js', watched: false },

      'app.js',

      'controllers/*.js',

      'index.html',

      'test/support/setup.js',

      'test/**/*.spec.js',

    ],

    // see https://github.com/karma-runner/karma-ng-html2js-preprocessor
    ngHtml2JsPreprocessor: {
      moduleName: 'ClassCreatorApp'
    },

    client: {
      chai: {
        includeStack: true
      }
    }

  });
};

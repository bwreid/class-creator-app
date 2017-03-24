module.exports = function (config) {
  var dependencies = [
    'chai',
    'angular',
    'angular-mocks',
    'angular-route'
  ]
  var files = dependencies.map(dep => `node_modules/${dep}/${dep}.js`)

  config.set({
    basePath: '../../',
    frameworks: ['mocha'],
    browsers : ['Chrome'],
    reporters : ['mocha'],
    files: files.concat([
      'app.js',
      'controllers/*.js',
      'test/support/setup.js',
      'test/**/*.spec.js',
    ])
  })
}

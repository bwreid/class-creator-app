(function () {
  'use strict'

  angular.module('ClassCreatorApp', [])
    .config(CompileProvider)

    function CompileProvider ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data|mailto):/);
    }
})()

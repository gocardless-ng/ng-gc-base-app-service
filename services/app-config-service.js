'use strict';

angular.module('ngGcAppConfigService', [
]).factory('AppConfig', [
  '$window',
  function AppConfigService($window) {

    return $window.AppConfig;

  }
]);

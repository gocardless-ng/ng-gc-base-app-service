'use strict';

angular.module('gc.ngHttpGetParamInterceptor', [
  'gc.utils'
]).factory('httpGetParamInterceptor', [
  'utils',
  function httpGetParamInterceptor(utils) {
    return {
      request: function(config) {
        // Manually build query params using custom logic because Angular and
        // Rails do not handle nested query parameters in the same way
        if (config.params) {
          config.url = config.url + '?' + utils.param(config.params);
          delete config.params;
        }
        return config;
      }
    };
  }
]);

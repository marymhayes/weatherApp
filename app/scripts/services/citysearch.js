'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=42bd22f215f7a0555c53e1a2315204ec', {}, {
      find: {
        method: 'GET',
        params: {
        query: 'seattle'
        },
        isArray: false
      }
    });
  });

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
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=c11578394c33a774dd1afb804bf3a5e4', {}, {
      find: {
        method: 'GET',
        params: {
        query: 'seattle'
        },
        isArray: false
      }
    });
  });

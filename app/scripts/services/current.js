'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.current
 * @description
 * # current
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')

// Updated resource definition to include cityID


.factory('current', function ($resource) {
  // Service logic
  // ...

  // Public API here

  // Added new key
  return $resource('http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=42bd22f215f7a0555c53e1a2315204ec', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});

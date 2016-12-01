'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.forecast
 * @description
 * # forecast
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')

// Added resource definition for forecast
.factory('forecast', function ($resource) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=42bd22f215f7a0555c53e1a2315204ec', {}, {
    query: {
      method:'GET',
      params:{
        cityID: '4717560' // Paris, France ID
      },
      isArray:false
    }
  });
});

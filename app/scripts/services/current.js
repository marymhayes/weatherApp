'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.current
 * @description
 * # current
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')

// Added $resource parameter
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here

  // Added API from OpenWeatherMap
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=c11578394c33a774dd1afb804bf3a5e4', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us',
          bogus: null
        },
        isArray:false
      }
    });
  });

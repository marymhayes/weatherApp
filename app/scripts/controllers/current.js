'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')

// Added $scope and $routeParams to controller
.controller('CurrentCtrl', function ($scope, $routeParams, current) {
  $scope.cityID = $routeParams.cityID;

  $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
  });
});

'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp')

// Replaced controller info
.controller('MainCtrl', function ($scope, current) {
  $scope.current = current.query();

// Added $scope.refresh
$scope.refreshCurrent = function(){
    $scope.current = current.query({
        location: $scope.location
    });
};
});

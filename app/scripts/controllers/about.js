'use strict';

/**
 * @ngdoc function
 * @name helloYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloYeomanApp
 */
angular.module('helloYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

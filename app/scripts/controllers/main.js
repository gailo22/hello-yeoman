'use strict';

/**
 * @ngdoc function
 * @name helloYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloYeomanApp
 */
angular.module('helloYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

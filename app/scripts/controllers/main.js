'use strict';

/**
 * @ngdoc function
 * @name helloYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloYeomanApp
 */
angular.module('helloYeomanApp')
    .controller('MainCtrl', function($scope) {
        $scope.todos = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addTodo = function() {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function(index) {
            $scope.todos.splice(index, 1);
        };
    });
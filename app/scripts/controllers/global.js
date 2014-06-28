'use strict';

angular.module('demoApp')
  .controller('GlobalCtrl', function ($rootScope) {
    $rootScope.greeting = "Hi there";
    $rootScope.user = {name: "Chase" };
  });

'use strict';

angular.module('demoApp')
  .controller('Page2Ctrl', function ($scope, Repos) {
     Repos.query().$promise
        .then(function(data) {
            $scope.count = data.length;
            $scope.repos = data;
        });
  });

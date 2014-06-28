'use strict';

angular.module('demoApp')
  .directive('focusMe', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element[0].focus();
      }
    };
  });

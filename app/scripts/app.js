'use strict';

angular.module('demoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page2', {
        templateUrl: 'views/page2.html',
        controller: 'Page2Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

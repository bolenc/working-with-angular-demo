'use strict';

angular.module('demoApp')
  .service('Repos', function Repos($resource) {
    return $resource("https://api.github.com/users/angular/repos");
  });

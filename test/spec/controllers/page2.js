'use strict';

describe('Controller: Page2Ctrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var Page2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page2Ctrl = $controller('Page2Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

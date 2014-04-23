'use strict';

describe('Controller: IndustryanalysisCtrl', function () {

  // load the controller's module
  beforeEach(module('pencilsToPixelsApp'));

  var IndustryanalysisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndustryanalysisCtrl = $controller('IndustryanalysisCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

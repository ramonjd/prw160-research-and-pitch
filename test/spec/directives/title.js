'use strict';

describe('Directive: title', function () {

  // load the directive's module
  beforeEach(module('pencilsToPixelsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<title></title>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the title directive');
  }));
});

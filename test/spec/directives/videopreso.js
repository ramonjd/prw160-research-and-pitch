'use strict';

describe('Directive: videoPreso', function () {

  // load the directive's module
  beforeEach(module('pencilsToPixelsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<video-preso></video-preso>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the videoPreso directive');
  }));
});

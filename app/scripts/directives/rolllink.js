'use strict';

angular.module('pencilsToPixelsApp')
  .directive('rollLink', function () {
    return {
      template: '<span data-title="{{elementText}}">{{elementText}}</div>',
      restrict: 'C',
      replace: false,
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.elementText = attrs.title;
      }
    };
  });

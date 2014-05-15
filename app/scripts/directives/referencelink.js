'use strict';

angular.module('pencilsToPixelsApp')
  .directive('referencelink', function () {
    return {
      template: '<a href="/bibliography?#{{link}}" id="ref{{link}}">{{link}}</a>',
      restrict: 'A',
      replace: false,
      scope: {
          link: '=referencelink'
      }, 
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });

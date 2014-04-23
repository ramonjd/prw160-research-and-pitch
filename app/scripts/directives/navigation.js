'use strict';

angular.module('pencilsToPixelsApp')
  .directive('navigation', function ($rootScope, $window) {
    return {
      template: '<nav class="{{currentPage}}"><ul><li><a href="#home">Home</li><li><a href="#industry-analysis">Industry Analysis</li><li><a href="#research">Research</li><li><a href="#presentation">Presentation</li></ul></nav>',
      restrict: 'E',
      replace : true,
      link: function postLink(scope, element, attrs) {
        scope.currentPage = 'home';
        $rootScope.$on('$routeChangeSuccess', function($scope, current) {
          scope.currentPage = current.$$route.pageId;
          $window.document.title = 'PRW160 Research & Development :: ' + current.$$route.pageName;
        });
      }
    };
  });

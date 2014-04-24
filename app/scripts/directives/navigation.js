'use strict';

angular.module('pencilsToPixelsApp')
  .directive('navigation', function ($rootScope, $window) {
    return {
      templateUrl: '/views/navigation.html',
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

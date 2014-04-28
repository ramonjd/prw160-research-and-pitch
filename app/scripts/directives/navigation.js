'use strict';

angular.module('pencilsToPixelsApp')
  .directive('navigation', function ($rootScope, $window, $anchorScroll) {
    return {
      templateUrl: '/views/navigation.html',
      restrict: 'E',
      replace : true,
      link: function postLink(scope, element, attrs) {
        var mainNav = angular.element(document.getElementById('main-nav'));
        scope.currentPage = 'home';
        $rootScope.currentPage = 'home';
        $rootScope.$on('$routeChangeSuccess', function($scope, current) {
          scope.currentPage = current.$$route.pageId;
          $rootScope.currentPage = current.$$route.pageId; 
          $anchorScroll();
          $window.document.title = 'PRW160 Research & Development :: ' + current.$$route.pageName;
        });

        mainNav.find('a').on('click', function(){
          mainNav.removeClass('in');
        });
      }
    };
  });

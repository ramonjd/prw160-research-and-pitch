'use strict';

angular
  .module('pencilsToPixelsApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        redirectTo: '/home'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        pageId: 'home',
        pageName: 'Introduction'
      })
      .when('/industry-analysis', {
        templateUrl: 'views/industryanalysis.html',
        controller: 'IndustryanalysisCtrl',
        pageId: 'industry-analysis',
        pageName: 'Industry Analysis'
      })
      .when('/presentation', {
        templateUrl: 'views/presentation.html',
        controller: 'PresentationCtrl',
        pageId: 'presentation',
        pageName: 'Presentation'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        pageId: 'about',
        pageName: 'About this site'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl',
        pageId: 'research',
        pageName: 'Research'
      })
      .when('/bibliography', {
        templateUrl: 'views/bibliography.html',
        controller: 'BibliographyCtrl'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }).run(function($rootScope, $location, $anchorScroll, $routeParams) {
    //when the route is changed scroll to the proper element.
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      if ($routeParams.ref) {
            $location.hash('ref'+$routeParams.ref);
          $anchorScroll();  
      }
    });
});

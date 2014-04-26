'use strict';

angular
  .module('pencilsToPixelsApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
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
  });

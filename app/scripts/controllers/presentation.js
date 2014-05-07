'use strict';

angular.module('pencilsToPixelsApp')
  .controller('PresentationCtrl', function ($scope, $routeParams, $location, $anchorScroll) {
    if ($routeParams.reference) {
        $location.hash('ref'+$routeParams.reference);
        $anchorScroll(); 
        $scope.currentReference = $routeParams.reference;
    }
  });

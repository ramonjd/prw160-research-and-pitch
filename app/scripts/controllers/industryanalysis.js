'use strict';

angular.module('pencilsToPixelsApp')
  .controller('IndustryanalysisCtrl', function ($scope, $routeParams, $location, $anchorScroll) {
    if ($routeParams.reference) {
        $location.hash('ref'+$routeParams.reference);
        $anchorScroll(); 
        $scope.currentReference = $routeParams.reference;
    }
  });

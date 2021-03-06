'use strict';

angular.module('pencilsToPixelsApp')
  .controller('CarouselCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 940 + slides.length;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/450',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	    });
	  };
	  for (var i=0; i<4; i++) {
	    $scope.addSlide();
	  }
  });

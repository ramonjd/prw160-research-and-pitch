'use strict';

angular.module('pencilsToPixelsApp')
  .controller('CarouselCtrl', function ($scope) {
	  $scope.myInterval = 5000;
	  var slides = $scope.slides = [];
	  $scope.addSlide = function() {
	    var newWidth = 940 + slides.length;
	    slides.push({
	      image: 'http://placekitten.com/' + newWidth + '/450',
	      text: ['More','Extra','Lots of','Surplus'][slides.length % 8] + ' ' +
	        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 8]
	    });
	  };
	  for (var i=0; i<8; i++) {
	    $scope.addSlide();
	  }
  });

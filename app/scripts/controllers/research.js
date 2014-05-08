'use strict';

angular.module('pencilsToPixelsApp')
  .controller('ResearchCtrl', function ($scope, $routeParams, $location, $anchorScroll) {
    if ($routeParams.reference) {
        $location.hash('ref'+$routeParams.reference);
        $anchorScroll(); 
        $scope.currentReference = $routeParams.reference;
    }    

      var $doc = $(document),
          $win = $(window);

        $.fn.inView = function(){
            var obj = $(this);
            //the top Scroll Position in the page
            var scrollPosition = $win.scrollTop();
            //the end of the visible area in the page, starting from the scroll position
            var visibleArea = $win.scrollTop() + $win.height();
            //the end of the object to check
            var objEndPos = (obj.offset().top + obj.outerHeight());
            return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
        };


        $doc.scroll(function(){
            if($('#cars-gallery').inView()) {
                $('#cars-gallery').addClass('in-view');
            }else{
                $('#cars-gallery').removeClass('in-view');
            }
        });


  });

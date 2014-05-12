'use strict';

angular.module('pencilsToPixelsApp')
  .directive('videoPreso', function () {
    return {
      //template: '<div class="video-container video"><video controls poster="images/poster.jpg"><source src="videos/presentation.mp4" type=\'video/mp4;codecs="avc1.42E01E, mp4a.40.2"\' /><source src="videos/presentation.ogv" type="video/ogg; codecs=dirac, speex"><track kind="subtitles" label="Subtitles" src="videos/subtitles_en.vtt" srclang="en" default></track></video>',
      template: '<iframe src="//player.vimeo.com/video/94924251?title=0&amp;byline=0&amp;portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
      restrict: 'A',
      replace: true,
      link: function postLink(scope, element, attrs) {
        scope.video = element.find('video')[0];
      }
    };
  });

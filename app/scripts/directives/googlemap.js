'use strict';

angular.module('pencilsToPixelsApp')
  .directive('googlemap', function () {
    return {
      restrict: 'A',
      replace: true,
      template: '<iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/view?zoom=16&maptype=satellite&center=-30.1774071%2C153.1920213&key=AIzaSyAx81MSkRlxhT_bt94aVstaXENKV9tMMec"></iframe>'
    };
  });

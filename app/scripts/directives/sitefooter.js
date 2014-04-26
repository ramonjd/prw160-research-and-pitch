'use strict';

angular.module('pencilsToPixelsApp')
  .directive('siteFooter', function () {
    return {
      template: '<div id="footer" class="footer"><footer class="container"><ul class="nav nav-pills"><li><a href="#bibliography"><i class="fa fa-bookmark"></i> Bibliography</a></li></ul><footer></div>',
      restrict: 'E',
      replace: true
    };
  });

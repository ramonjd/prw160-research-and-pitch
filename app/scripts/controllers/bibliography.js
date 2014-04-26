'use strict';

angular.module('pencilsToPixelsApp')
  .controller('BibliographyCtrl', function ($scope) {
    $scope.sources = [
        
        {
            title: 'Penguin Authors Guide to Online Marketing, 2008', 
            linkText : 'http://www.penguin.com',
            link: 'http://www.penguin.com/static/pdf/misc/penguin_authors_guide_to_online_marketing_summer_2008.pdf',
            accessed: '25 April 2014'
        }

    ];
  });
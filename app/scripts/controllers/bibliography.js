'use strict';

angular.module('pencilsToPixelsApp')
  .controller('BibliographyCtrl', function ($scope, $routeParams) {
    $scope.sources = [
        
        {
            title: 'Penguin Authors Guide to Online Marketing, 2008', 
            linkText : 'http://www.penguin.com',
            link: 'http://www.penguin.com/static/pdf/misc/penguin_authors_guide_to_online_marketing_summer_2008.pdf',
            accessed: '25 April 2014'
        },
        {
            title: 'It\'s Time for (Many) Experienced Writers to Stop Blogging', 
            linkText : 'http://janefriedman.com',
            link: 'http://janefriedman.com/2013/03/15/its-time-for-many-experienced-writers-to-stop-blogging/',
            accessed: '22 April 2014' 
        },
        {   
            title: 'Building a Literary Community: Why And How', 
            linkText : 'http://www.thecreativepenn.com',
            link: 'http://www.thecreativepenn.com/2014/03/30/building-a-literary-community/comment-page-1/#comments',
            accessed: '26 April 2014' 
        },
        {
            title: 'Twitter shares drop 11% on slowdown in user growth', 
            linkText : 'http://www.bbc.com/news/technology',
            link: 'http://www.bbc.com/news/technology-27214815',
            accessed: '30 April 2014'
        },  
        {
            title: 'A Eulogy for Twitter', 
            linkText : 'http://www.theatlantic.com/technology/',
            link: 'http://www.theatlantic.com/technology/archive/2014/04/a-eulogy-for-twitter/361339/',
            accessed: '30 April 2014'
        },
        {
            title: 'Indigenous Protest, 1988 Australian Bicentenary: Museum Victoria', 
            linkText : 'http://museumvictoria.com.au',
            link: 'http://museumvictoria.com.au/collections/themes/2835/indigenous-protest-1988-australian-bicentenary',
            accessed: '17 April 2014'
        }

    ];

    $scope.currentReference = $routeParams.reference;

  });

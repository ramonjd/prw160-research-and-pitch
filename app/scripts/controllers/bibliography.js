'use strict';

angular.module('pencilsToPixelsApp')
  .controller('BibliographyCtrl', function ($scope, $routeParams, $location, $anchorScroll) {
    
    if ($routeParams.reference) {
        $scope.currentReference = $routeParams.reference;
    }


    $scope.sources = [
        
        {
            title: 'Penguin Authors Guide to Online Marketing, 2008', 
            linkText : 'http://www.penguin.com',
            link: 'http://www.penguin.com/static/pdf/misc/penguin_authors_guide_to_online_marketing_summer_2008.pdf',
            accessed: '25 April 2014',
            srcPage: '#industry-analysis'
        },
        {   
            author: 'Barkat, L.L., 2013,',
            title: 'It\'s Time for (Many) Experienced Writers to Stop Blogging', 
            linkText : 'http://janefriedman.com',
            link: 'http://janefriedman.com/2013/03/15/its-time-for-many-experienced-writers-to-stop-blogging/',
            accessed: '22 April 2014',
            srcPage: '#industry-analysis' 
        },
        {   
            author: 'Penn, J., 2014,',
            title: 'Building a Literary Community: Why And How', 
            linkText : 'http://www.thecreativepenn.com',
            link: 'http://www.thecreativepenn.com/2014/03/30/building-a-literary-community/comment-page-1/#comments',
            accessed: '26 April 2014',
            srcPage: '#industry-analysis' 
        },
        {
            title: 'Twitter shares drop 11% on slowdown in user growth', 
            linkText : 'http://www.bbc.com/news/technology',
            link: 'http://www.bbc.com/news/technology-27214815',
            accessed: '30 April 2014',
            srcPage: '#industry-analysis'
        },  
        {
            title: 'A Eulogy for Twitter', 
            linkText : 'http://www.theatlantic.com/technology/',
            link: 'http://www.theatlantic.com/technology/archive/2014/04/a-eulogy-for-twitter/361339/',
            accessed: '30 April 2014',
            srcPage: '#industry-analysis'
        },
        {
            title: 'Indigenous Protest, 1988 Australian Bicentenary: Museum Victoria', 
            linkText : 'http://museumvictoria.com.au',
            link: 'http://museumvictoria.com.au/collections/themes/2835/indigenous-protest-1988-australian-bicentenary',
            accessed: '17 April 2014',
            srcPage: '#research'
        },
        {
            title: 'IMDB: Home and Away (1988– )', 
            linkText : 'http://www.imdb.com/title/tt0094481/',
            link: 'http://www.imdb.com/title/tt0094481/',
            accessed: '02 May 2014',
            srcPage: '#research'
        },
        {
            title: 'NSW State Library Collection: First Fleet Re-enactment Company records, 1978-1990', 
            linkText : 'http://acms.sl.nsw.gov.au',
            link: 'http://acms.sl.nsw.gov.au/item/itemDetailPaged.aspx?itemID=825606',
            accessed: '03 May 2014',
            srcPage: '#research'
        },
        {
            title: 'Wikipedia: 1988 in Australia, [wiki article]', 
            linkText : 'http://en.wikipedia.org/wiki/1988_in_Australia',
            link: 'http://en.wikipedia.org/wiki/1988_in_Australia',
            accessed: '24 April 2014',
            srcPage: '#research'
        },
        {
            title: 'Wikipedia: World Expo 88, [wiki article]', 
            linkText : 'http://en.wikipedia.org/wiki/World_Expo_88',
            link: 'http://en.wikipedia.org/wiki/World_Expo_88',
            accessed: '6 May 2014',
            srcPage: '#research'
        },
        {
            title: 'The Queen marks Australia\'s bicentenary, 9 May 1988', 
            linkText : 'https://www.royal.gov.uk',
            link: 'https://www.royal.gov.uk/ImagesandBroadcasts/Historic%20speeches%20and%20broadcasts/Australiabicentenaryspeech9May1988.aspx',
            accessed: '7 May 2014',
            srcPage: '#research'
        },
        {
            title: 'History of Parliament House', 
            linkText : 'http://www.aph.gov.au/',
            link: 'http://www.aph.gov.au/Visit_Parliament/About_the_Building/History_of_Parliament_House',
            accessed: '12 May 2014',
            srcPage: '#research'
        },

        {
            title: 'Gangland witness Jason Ryan tells why he put his life on the line to dob in the Walsh St police killers, October 12, 2013', 
            linkText : 'http://www.heraldsun.com.au/news/law-order/',
            link: 'http://www.heraldsun.com.au/news/law-order/gangland-witness-jason-ryan-tells-why-he-put-his-life-on-the-line-to-dob-in-the-walsh-st-police-killers/story-fni0ffnk-1226745448263',
            accessed: '7 May 2014',
            srcPage: '#research'
        },

        {
            title: 'Australian Bureau of Meteorology: Climate Data Online', 
            linkText : 'http://www.bom.gov.au/',
            link: 'http://www.bom.gov.au/climate/data/',
            accessed: '11 May 2014',
            srcPage: '#research'
        },

        {
            title: 'NSW Department of Primary Industries: Marine habitats', 
            linkText : 'http://www.dpi.nsw.gov.au/fisheries/habitat/aquatic-habitats/marine',
            link: 'http://www.dpi.nsw.gov.au/fisheries/habitat/aquatic-habitats/marine',
            accessed: '11 May 2014',
            srcPage: '#research'
        },

        {
            title: 'What it used to cost, 2 April, 2014', 
            linkText : 'http://guides.slv.vic.gov.au/',
            link: 'http://guides.slv.vic.gov.au/content.php?pid=14258&sid=95520',
            accessed: '19 April 2014',
            srcPage: '#research'
        },
        {
            title: 'Coles Online', 
            linkText : 'http://shop.coles.com.au/',
            link: 'http://shop.coles.com.au/',
            accessed: '7 May 2014',
            srcPage: '#research'
        },
        {
            title: 'Queensland Government Statistician\'s Office: Average weekly earnings 1981–82 to 2012–13, 3 October 2013', 
            linkText : 'http://www.qgso.qld.gov.au',
            link: 'http://www.qgso.qld.gov.au/products/tables/average-weekly-earnings-qld-aus/index.php',
            accessed: '3 May 2014',
            srcPage: '#research'
        },
        {
            author: 'Gargett, D., 2010',    
            title: 'Petrol prices in Australia: Bureau of Infrastructure, Transport and Regional Economics, Canberra', 
            linkText : 'http://www.atrf.info/papers/2010/2010_Gargett.pdf',
            link: 'http://www.atrf.info/papers/2010/2010_Gargett.pdf',
            accessed: '1 May 2014',
            srcPage: '#research'
        },
        {
            author: 'Abelson, P., Chung, D., 2004',    
            title: 'HOUSING PRICES IN AUSTRALIA: 1970 TO 2003 (Macquarie University)', 
            linkText : 'http://www.econ.mq.edu.au',
            link: 'http://www.econ.mq.edu.au/Econ_docs/research_papers2/2004_research_papers/Abelson_9_04.pdf',
            accessed: '1 May 2014',
            srcPage: '#research'
        },
        {
            author: 'Wilson, A., 2014',    
            title: 'Housing market report, Australian Property Monitors', 
            linkText : 'http://www.domain.com.au/content/files/apm/reports/',
            link: 'http://www.domain.com.au/content/files/apm/reports/ap1400103_housingmarketreport_jan_apm.pdf',
            accessed: '1 May 2014',
            srcPage: '#research'
        },
        {
            title: 'Australia 1988-1989: The start of the real \‘Falcadore\’ era, 5 January, 1990', 
            linkText : 'http://bestsellingcarsblog.com',
            link: 'http://bestsellingcarsblog.com/1990/01/05/australia-1988-1989-the-start-of-the-real-falcadore-era/',
            accessed: '6 May 2014',
            srcPage: '#research'
        },
        {
            title: 'Welch, D., Religious divide drives bikie war (Sydney Morning Herald Online)', 
            linkText : 'http://www.smh.com.au/national/',
            link: 'http://www.smh.com.au/national/religious-divide-drives-bikie-war-20090215-887l.html',
            accessed: '14 May 2014',
            srcPage: '#research'
        },

        {
            title: 'The Bikie Wars (Sydney Morning Herald Online)', 
            linkText : 'http://www.smh.com.au/interactive/bikie-wars/index.html',
            link: 'http://www.smh.com.au/interactive/bikie-wars/index.html',
            accessed: '14 May 2014',
            srcPage: '#research'
        },

        {
            title: 'THE FIRST FLEET, BOTANY BAY AND THE BRITISH PENAL COLONY', 
            linkText : 'http://www.migrationheritage.nsw.gov.au',
            link: 'http://www.migrationheritage.nsw.gov.au/exhibition/objectsthroughtime-history/ott1788/',
            accessed: '8 May 2014',
            srcPage: '#research'
        },
        {
            title: 'Fellowship of First Fleeters: Charlotte', 
            linkText : 'http://www.fellowshipfirstfleeters.org.au',
            link: 'http://www.fellowshipfirstfleeters.org.au/janemcmanus.htm',
            accessed: '13 May 2014',
            srcPage: '#research'
        }

    ];
    

  });

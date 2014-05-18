'use strict';

angular.module('pencilsToPixelsApp')
  .controller('BibliographyCtrl', function ($scope, $routeParams, $location, $anchorScroll) {
    if ($location.hash()) {
        $scope.currentReference = $location.hash();
    }


    $scope.sources = [
        {
            author: 'Patten, Robert L., (2001)', 
            title : '"From Sketches to Nickleby". In Jordan, John O. The Cambridge Companion to Charles Dickens.',
            publisher: 'Cambridge University Press.', 
            srcPage: 'industry-analysis',
            book: true
        },
        {
            title: 'Penguin Authors Guide to Online Marketing, 2008', 
            linkText : 'http://www.penguin.com',
            link: 'http://www.penguin.com/static/pdf/misc/penguin_authors_guide_to_online_marketing_summer_2008.pdf',
            accessed: '25 April 2014',
            srcPage: 'industry-analysis'
        },
        {   
            author: 'Barkat, L.L., 2013,',
            title: 'It\'s Time for (Many) Experienced Writers to Stop Blogging', 
            linkText : 'http://janefriedman.com',
            link: 'http://janefriedman.com/2013/03/15/its-time-for-many-experienced-writers-to-stop-blogging/',
            accessed: '22 April 2014',
            srcPage: 'industry-analysis' 
        },
        {   
            author: 'Penn, J., 2014,',
            title: 'Building a Literary Community: Why And How', 
            linkText : 'http://www.thecreativepenn.com',
            link: 'http://www.thecreativepenn.com/2014/03/30/building-a-literary-community/comment-page-1/#comments',
            accessed: '26 April 2014',
            srcPage: 'industry-analysis' 
        },
        {
            title: 'Twitter shares drop 11% on slowdown in user growth', 
            linkText : 'http://www.bbc.com/news/technology',
            link: 'http://www.bbc.com/news/technology-27214815',
            accessed: '30 April 2014',
            srcPage: 'industry-analysis'
        },  
        {
            title: 'A Eulogy for Twitter', 
            linkText : 'http://www.theatlantic.com/technology/',
            link: 'http://www.theatlantic.com/technology/archive/2014/04/a-eulogy-for-twitter/361339/',
            accessed: '30 April 2014',
            srcPage: 'industry-analysis'
        },
        {
            title: 'Indigenous Protest, 1988 Australian Bicentenary: Museum Victoria', 
            linkText : 'http://museumvictoria.com.au',
            link: 'http://museumvictoria.com.au/collections/themes/2835/indigenous-protest-1988-australian-bicentenary',
            accessed: '17 April 2014',
            srcPage: 'research'
        },
        {
            title: 'IMDB: Home and Away (1988– )', 
            linkText : 'http://www.imdb.com/title/tt0094481/',
            link: 'http://www.imdb.com/title/tt0094481/',
            accessed: '02 May 2014',
            srcPage: 'research'
        },
        {
            title: 'NSW State Library Collection: First Fleet Re-enactment Company records, 1978-1990', 
            linkText : 'http://acms.sl.nsw.gov.au',
            link: 'http://acms.sl.nsw.gov.au/item/itemDetailPaged.aspx?itemID=825606',
            accessed: '03 May 2014',
            srcPage: 'research'
        },
        {
            title: 'Wikipedia: 1988 in Australia, [wiki article]', 
            linkText : 'http://en.wikipedia.org/wiki/1988_in_Australia',
            link: 'http://en.wikipedia.org/wiki/1988_in_Australia',
            accessed: '24 April 2014',
            srcPage: 'research'
        },
        {
            title: 'Wikipedia: World Expo 88, [wiki article]', 
            linkText : 'http://en.wikipedia.org/wiki/World_Expo_88',
            link: 'http://en.wikipedia.org/wiki/World_Expo_88',
            accessed: '6 May 2014',
            srcPage: 'research'
        },
        {
            title: 'The Queen marks Australia\'s bicentenary, 9 May 1988', 
            linkText : 'https://www.royal.gov.uk',
            link: 'https://www.royal.gov.uk/ImagesandBroadcasts/Historic%20speeches%20and%20broadcasts/Australiabicentenaryspeech9May1988.aspx',
            accessed: '7 May 2014',
            srcPage: 'research'
        },
        {
            title: 'History of Parliament House', 
            linkText : 'http://www.aph.gov.au/',
            link: 'http://www.aph.gov.au/Visit_Parliament/About_the_Building/History_of_Parliament_House',
            accessed: '12 May 2014',
            srcPage: 'research'
        },

        {
            author: 'Anderson, P.,',
            title: 'Gangland witness Jason Ryan tells why he put his life on the line to dob in the Walsh St police killers, 12 October, 2013', 
            linkText : 'http://www.heraldsun.com.au/news/law-order/',
            link: 'http://www.heraldsun.com.au/news/law-order/gangland-witness-jason-ryan-tells-why-he-put-his-life-on-the-line-to-dob-in-the-walsh-st-police-killers/story-fni0ffnk-1226745448263',
            accessed: '7 May 2014',
            srcPage: 'research'
        },

        {
            title: 'Australian Bureau of Meteorology: Climate Data Online', 
            linkText : 'http://www.bom.gov.au/',
            link: 'http://www.bom.gov.au/climate/data/',
            accessed: '11 May 2014',
            srcPage: 'research'
        },

        {
            title: 'NSW Department of Primary Industries: Marine habitats', 
            linkText : 'http://www.dpi.nsw.gov.au/fisheries/habitat/aquatic-habitats/marine',
            link: 'http://www.dpi.nsw.gov.au/fisheries/habitat/aquatic-habitats/marine',
            accessed: '11 May 2014',
            srcPage: 'research'
        },

        {
            title: 'What it used to cost, 2 April, 2014', 
            linkText : 'http://guides.slv.vic.gov.au/',
            link: 'http://guides.slv.vic.gov.au/content.php?pid=14258&sid=95520',
            accessed: '19 April 2014',
            srcPage: 'research'
        },
        {
            title: 'Coles Online', 
            linkText : 'http://shop.coles.com.au/',
            link: 'http://shop.coles.com.au/',
            accessed: '7 May 2014',
            srcPage: 'research'
        },
        {
            title: 'Queensland Government Statistician\'s Office: Average weekly earnings 1981–82 to 2012–13, 3 October 2013', 
            linkText : 'http://www.qgso.qld.gov.au',
            link: 'http://www.qgso.qld.gov.au/products/tables/average-weekly-earnings-qld-aus/index.php',
            accessed: '3 May 2014',
            srcPage: 'research'
        },
        {
            author: 'Gargett, D., 2010',    
            title: 'Petrol prices in Australia: Bureau of Infrastructure, Transport and Regional Economics, Canberra', 
            linkText : 'http://www.atrf.info/papers/2010/2010_Gargett.pdf',
            link: 'http://www.atrf.info/papers/2010/2010_Gargett.pdf',
            accessed: '1 May 2014',
            srcPage: 'research'
        },
        {
            author: 'Abelson, P., Chung, D., 2004',    
            title: 'HOUSING PRICES IN AUSTRALIA: 1970 TO 2003 (Macquarie University)', 
            linkText : 'http://www.econ.mq.edu.au',
            link: 'http://www.econ.mq.edu.au/Econ_docs/research_papers2/2004_research_papers/Abelson_9_04.pdf',
            accessed: '1 May 2014',
            srcPage: 'research'
        },
        {
            author: 'Wilson, A., 2014',    
            title: 'Housing market report, Australian Property Monitors', 
            linkText : 'http://www.domain.com.au/content/files/apm/reports/',
            link: 'http://www.domain.com.au/content/files/apm/reports/ap1400103_housingmarketreport_jan_apm.pdf',
            accessed: '1 May 2014',
            srcPage: 'research'
        },
        {
            title: 'Australia 1988-1989: The start of the real \‘Falcadore\’ era, 5 January, 1990', 
            linkText : 'http://bestsellingcarsblog.com',
            link: 'http://bestsellingcarsblog.com/1990/01/05/australia-1988-1989-the-start-of-the-real-falcadore-era/',
            accessed: '6 May 2014',
            srcPage: 'research'
        },
        {
            author: 'Welch, D., 2009',
            title: 'Religious divide drives bikie war, 16 February, 2009 (Sydney Morning Herald Online)', 
            linkText : 'http://www.smh.com.au/national/',
            link: 'http://www.smh.com.au/national/religious-divide-drives-bikie-war-20090215-887l.html',
            accessed: '14 May 2014',
            srcPage: 'research'
        },

        {
            title: 'The Bikie Wars (Sydney Morning Herald Online)', 
            linkText : 'http://www.smh.com.au/interactive/bikie-wars/index.html',
            link: 'http://www.smh.com.au/interactive/bikie-wars/index.html',
            accessed: '14 May 2014',
            srcPage: 'research'
        },

        {
            author: 'James, C., 2008',     
            title: 'Adelaide Finks jailed for attacking Hells Angel Christopher Wayne Hudson, 4 September, 2008  (Adelaide Now Online)', 
            linkText : 'http://www.adelaidenow.com.au',
            link: 'http://www.adelaidenow.com.au/news/sa-finks-jailed-for-attacking-hells-angel/story-e6freol3-1111117402609',
            accessed: '15 May 2014',
            srcPage: 'research'
        },


        {
            title: 'CBD shooter Christopher Wayne Hudson tortured by Hells Angels bikies, 7 May, 2009 (News.com.au - News Ltd)', 
            linkText : 'http://www.news.com.au/national/',
            link: 'http://www.news.com.au/national/fugitive-killer-tortured-by-bikies-insider/story-e6frfkp9-1225710364743',
            accessed: '15 May 2014',
            srcPage: 'research'
        },

        {
            author: 'Migration Heritage., ',
            title: 'THE FIRST FLEET, BOTANY BAY AND THE BRITISH PENAL COLONY', 
            linkText : 'http://www.migrationheritage.nsw.gov.au',
            link: 'http://www.migrationheritage.nsw.gov.au/exhibition/objectsthroughtime-history/ott1788/',
            accessed: '8 May 2014',
            srcPage: 'research'
        },
        {
            title: 'Fellowship of First Fleeters: Charlotte', 
            linkText : 'http://www.fellowshipfirstfleeters.org.au',
            link: 'http://www.fellowshipfirstfleeters.org.au/janemcmanus.htm',
            accessed: '13 May 2014',
            srcPage: 'research'
        },



        {
            author: 'Australian Bureau of Statistics',
            title: 'Arts and Culture in Australia: A Statistical Overview, 2011', 
            linkText : 'http://www.abs.gov.au/ausstats/',
            link: 'http://www.abs.gov.au/ausstats/abs@.nsf/Products/1B3531FF481F7C6BCA257968000CBCB1',
            accessed: '18 May 2014',
            srcPage: 'research'
        },


        {
            author: 'Milliot, J., 2012,',
            title: 'Industry Sales Pegged At $27.2 Billion, 20 July 2012 (Publishers Weekly)', 
            linkText : 'http://www.publishersweekly.com',
            link: 'http://www.publishersweekly.com/pw/by-topic/industry-news/financial-reporting/article/53112-industry-sales-pegged-at-27-2-billion.html',
            accessed: '18 May 2014',
            srcPage: 'research'
        },


        {
            author: 'Australian Writer\’s Marketplace', 
            title : 'The Australian Writer\’s Marketplace, 2007/2008 Edition',
            publisher: 'AWM Print Editions.', 
            srcPage: 'research',
            book: true
        },

        {
            author: 'Rosenbloom, H.,', 
            title : 'Book-trade blues, 27 February, 2012',
            linkText : 'http://scribepublications.com.au',
            link: 'http://scribepublications.com.au/news-and-events/post/book-trade-blues/',
            accessed: '18 May 2014',
            srcPage: 'research'
        },
        {
            author: 'Rice, D., 2013', 
            title : 'Sales alive and well as definition of book evolves, 30 May, 2013 (ABC Online)',
            linkText : 'http://www.abc.net.au/news/',
            link: 'http://www.abc.net.au/news/2013-05-28/the-book-is-not-dead-it-is-simply-being-redefined/4717872/?site=science/memory&topic=latest',
            accessed: '18 May 2014',
            srcPage: 'research'
        },


        {   
            author: 'Macfarlane, I.,',
            title: 'Why the recession was good for us, 2 December, 2006 (Sydney Morning Herald Online)', 
            linkText : 'http://www.smh.com.au/news/business/',
            link: 'http://www.smh.com.au/news/business/why-the-recession-was-good-for-us/2006/12/01/1164777795744.html',
            accessed: '11 May 2014',
            srcPage: 'presentation'
        },

        {   
            author: 'Rosenbloom, H.,',
            title: 'Book-trade blues, 27 February 2012', 
            linkText : 'http://scribepublications.com.au',
            link: 'http://scribepublications.com.au/news-and-events/post/book-trade-blues/',
            accessed: '2 May 2014',
            srcPage: 'presentation'
        },
        {   
            author: 'Sullivan , J.,',
            title: 'What\'s the story with Australian fiction?, 14 August 2004 (The Age Online)', 
            linkText : 'http://www.theage.com.au',
            link: 'http://www.theage.com.au/articles/2004/08/11/1092102516301.html',
            accessed: '2 May 2014',
            srcPage: 'presentation'
        },
        {   
            author: 'King , C.,',
            title: '5 Key Trends in Self-Publishing for 2014', 
            linkText : 'http://www.pbs.org/mediashift/2014/',
            link: 'http://www.pbs.org/mediashift/2014/01/5-key-trends-in-self-publishing-for-2014/',
            accessed: '3 May 2014',
            srcPage: 'presentation'
        }

    ];
    

  });

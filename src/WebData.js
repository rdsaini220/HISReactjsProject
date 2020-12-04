import feature from './assets/images/feature-1.jpg';
import feature1 from './assets/images/feature-2.jpg';
import portfolioimg from './assets/images/portfolio/portfolio-1.png';
import ind1 from './assets/images/industry/1.png';
import ind2 from './assets/images/industry/2.png';
import ind3 from './assets/images/industry/3.png';
import ind4 from './assets/images/industry/4.png';
import ind5 from './assets/images/industry/5.png';


let FeatureData = [
    {
        img : feature,
        title : 'TOP 10',
        subtitle : 'IN SAR-2019 SURVEY',
        text : 'RANKED AMONG TOP 10 MOBILE DEVELOPMENT COMPANIES IN SAR-2019 SURVEY..'
    },
     {
        img : feature1,
        title : '5 STAR REVIEWS',
        subtitle : 'CLUTCH MARKETPLACE',
        text : 'ALL 5 STAR REVIEWS ON CLUTCH MARKETPLACE AND RECOMMENDED BY CLIENTS'
    }
]

let serviceData = [
    {
        iconClass : 'icon flaticon-responsive',
        title : 'UI/UX Development',
        url : '/ui-ux-development',
        text : 'From Figma to Zeplin we have a team of top industry experts for designing.'
    },
    {
        iconClass : 'icon flaticon-coding',
        title : 'Web Development',
        url : '/php-development',
        text : 'From PHP to advanced web app development environment we are ready.'
    },
    {
        iconClass : 'icon flaticon-mobile-app',
        title : 'Mobile Application',
        url : '/cross-platform-development',
        text : 'No matter if you have Native, Hybrid or cross-platform we have vast experience with all.'
    },
    {
        iconClass : 'icon flaticon-monitor',
        title : 'Enterprise Solution',
        url : '/e-commerce-development',
        text : 'Sed ut perspiciatis unde omnis iste natus error volup validate your ideas.'
    },
     
]

let PortfolioData = [
    {
        id : 1,
        name : '1 ENJOY STEM',
        url : '/',
        description : 'Education & e-Learning',
        image : portfolioimg,
        category : [16,8]
    },
    {   
        id : 2,
        name : '2 ENJOY STEM',
        url : '/',
        description : 'Education & e-Learning',
        image : portfolioimg,
        category : []
    },
    {
        id : 3,
        name : '3 ENJOY STEM',
        url : '/',
        description : 'Education & e-Learning',
        image : portfolioimg,
        category : []
    },
    {
        id : 4,
        name : '4 ENJOY STEM',
        url : '/',
        description : 'Education & e-Learning',
        image : portfolioimg,
        category : []
    },
    {
        id : 5,
        name : '5 ENJOY STEM',
        url : '/',
        description : 'Education & e-Learning',
        image : portfolioimg,
        category : []
    },
    {
        id : 6,
        name : '6 ENJOY STEM',
        url : '/',
        description : 'Education & e-Learning',
        image : portfolioimg,
        category : []
    }
     
]

let GalleryData = [
    {
        img : ind1,
        title : 'RETAIL & E-COMMERCE',
        text : 'We have been providing our services to B2B ,B2c portals.'
    },
    {
        img : ind2,
        title : 'REAL ESTATE',
        text : 'We are development parners fopr many real estate companies.'
    },
    {
        img : ind3,
        title : 'SOFTWARE & IT',
        text : 'We are relaible development center for IT companies.'
    },
    {
        img : ind4,
        title : 'AUTOMOBILE',
        text : 'We are development partners to major automobile companies.'
    },
    {
        img : ind5,
        title : 'EDUCATION & E-LEARNING',
        text : 'We have been a back bone for various e learning companies.'
    }    
     
];

export {FeatureData,serviceData,PortfolioData,GalleryData}
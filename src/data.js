import bootStrapLogo from './assets/programmingLanguages/Bootstrap.png';
import cssLogo from './assets/programmingLanguages/css.png';
import djangoLogo from './assets/programmingLanguages/django.png';
import dockerLogo from './assets/programmingLanguages/Docker.png';
import gitLogo from './assets/programmingLanguages/Git.png';
import html5Logo from './assets/programmingLanguages/html-5.png';
import jsLogo from './assets/programmingLanguages/js.png';
import mongoDBLogo from './assets/programmingLanguages/MongoDB.png';
import mongooseLogo from './assets/programmingLanguages/Mongoose.png';
import nestLogo from './assets/programmingLanguages/Nest.png';
import nodeLogo from './assets/programmingLanguages/Node.png';
import npmLogo from './assets/programmingLanguages/NPM.png';
import postgreSqlLogo from './assets/programmingLanguages/PostgresSQL.png';
import postmanLogo from './assets/programmingLanguages/Postman.png';
import powerShellLogo from './assets/programmingLanguages/PowerShell.png';
import pythonLogo from './assets/programmingLanguages/Python.png';
import reactLogo from './assets/programmingLanguages/react.png';
import rubyOnRailsLogo from './assets/programmingLanguages/RubyOnRails.png';
import rubyLogo from './assets/programmingLanguages/Ruby.png';
import sassLogo from './assets/programmingLanguages/sass.png';
import tailwindLogo from './assets/programmingLanguages/Tailwind.png';
import typeScriptLogo from './assets/programmingLanguages/TypeScript.png';
import viteLogo from './assets/programmingLanguages/Vite.png';
import neonLogo from './assets/programmingLanguages/neonDB.png';
import nextLogo from './assets/programmingLanguages/nextjs.png';

import backEndI from './assets/certifications/BackEnd1.png';
import backEnd2 from './assets/certifications/BackEnd2.png';
import backEnd3 from './assets/certifications/BackEnd3.png';
import certificadoIngles from './assets/certifications/certificadoIngles.jpeg';
import hackerRank from './assets/certifications/HackerRank1.jpg';
import javaScript from './assets/certifications/JavaScript.png';
import react from './assets/certifications/reactniof.png';
import webDevelopment from './assets/certifications/WebDevelopment.png';

import ecommerce from './assets/projects/e-commerce.png'
import auth from './assets/projects/auth.png';
import caloriesTracker from './assets/projects/caloriesTracker.png';
import videogameSearcher from './assets/projects/videoGameSearcher.png';
import dreamjournal from './assets/projects/dreamJournal.png';
import digitalLibrary from './assets/projects/digitalLibrary.png';
import historyWebSite from './assets/projects/historyWebSite.png';
import photographicPortfolio from './assets/projects/photographicPortfolio.png';
import artGallery from './assets/projects/artgallery.png';
import seatMapBuilder from './assets/projects/seatMapBuilder.png';
import coalitionTest from './assets/projects/coalitionTest.png';

export const languageLogos = [
    // Main Programming Languages & Frameworks
    { src: html5Logo, alt: 'HTML5', link: 'https://html.spec.whatwg.org/' },
    { src: cssLogo, alt: 'CSS', link: 'https://www.w3.org/Style/CSS/' },
    { src: jsLogo, alt: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { src: reactLogo, alt: 'React', link: 'https://reactjs.org/' },
    { src: typeScriptLogo, alt: 'TypeScript', link: 'https://www.typescriptlang.org/' },
    { src: nodeLogo, alt: 'NodeJS', link: 'https://nodejs.org/' },
    { src: nextLogo, alt: 'Next.js', link: 'https://nextjs.org/' },
    { src: nestLogo, alt: 'Nest', link: 'https://nestjs.com/' },
    { src: pythonLogo, alt: 'Python', link: 'https://www.python.org/' },
    { src: djangoLogo, alt: 'Django', link: 'https://www.djangoproject.com/' },
    { src: rubyLogo, alt: 'Ruby', link: 'https://www.ruby-lang.org/' },
    { src: rubyOnRailsLogo, alt: 'Ruby on Rails', link: 'https://rubyonrails.org/' },

    // Styling Libraries
    { src: sassLogo, alt: 'Sass', link: 'https://sass-lang.com/' },
    { src: tailwindLogo, alt: 'Tailwind', link: 'https://tailwindcss.com/' },
    { src: bootStrapLogo, alt: 'BootStrap', link: 'https://getbootstrap.com/' },

    // Databases & Related Technologies
    { src: mongoDBLogo, alt: 'MongoDB', link: 'https://www.mongodb.com/' },
    { src: mongooseLogo, alt: 'Mongoose', link: 'https://mongoosejs.com/' },
    { src: postgreSqlLogo, alt: 'PostgresSQL', link: 'https://www.postgresql.org/' },
    { src: neonLogo, alt: 'Neon DB', link: 'https://neon.tech/' },

    // Tools & Platforms
    { src: gitLogo, alt: 'Git', link: 'https://git-scm.com/' },
    { src: npmLogo, alt: 'NPM', link: 'https://www.npmjs.com/' },
    { src: dockerLogo, alt: 'Docker', link: 'https://www.docker.com/' },
    { src: viteLogo, alt: 'Vite', link: 'https://vitejs.dev/' },
    { src: postmanLogo, alt: 'PostMan', link: 'https://www.postman.com/' },
    { src: powerShellLogo, alt: 'PowerShell', link: 'https://docs.microsoft.com/en-us/powershell/' },
];

export const certifications = [
    { src: backEndI, alt: 'Backend I: Testing and Scability' },
    { src: backEnd2, alt: 'Advanced Backend II' },
    { src: backEnd3, alt: 'Advanced Backend III' },
    { src: certificadoIngles, alt: 'English language certificate' },
    { src: hackerRank, alt: 'Problem solving' },
    { src: javaScript, alt: 'Java Script' },
    { src: react, alt: 'React certificate' },
    { src: webDevelopment, alt: 'Web development; HTML5, CSS3' }
];

export const projects = [

    {
        title: 'Dream Journal',
        projectImage: dreamjournal,
        backendIcon: nestLogo,
        frontendRepo: 'https://github.com/RobertFacundo/dreamJournalF',
        backendRepo: 'https://github.com/RobertFacundo/dreamJournalB',
        deployedUrl: 'https://dreamjournalb.onrender.com/',
        styleIcon: sassLogo,
    },
    {
        title: 'Digital Library',
        projectImage: digitalLibrary,
        backendIcon: pythonLogo,
        frontendRepo: 'https://github.com/RobertFacundo/digitalLibraryF',
        backendRepo: 'https://github.com/RobertFacundo/digitalLibraryB',
        deployedUrl: 'https://digitallibraryb.onrender.com/',
        styleIcon: sassLogo,
    },
    {
        title: 'Calories Tracker',
        projectImage: caloriesTracker,
        backendIcon: rubyLogo,
        frontendRepo: 'https://github.com/RobertFacundo/caloriesTrackerF',
        backendRepo: 'https://github.com/RobertFacundo/caloriesTrackerB',
        deployedUrl: 'https://caloriestrackerb.onrender.com/',
        styleIcon: cssLogo,
    },
    {
        title: 'VideoGame Searcher',
        projectImage: videogameSearcher,
        backendIcon: '',
        frontendRepo: 'https://github.com/RobertFacundo/videoGameSearcher',
        backendRepo: '',
        deployedUrl: 'https://videogame-searcher.vercel.app/',
        styleIcon: sassLogo,
    },
    {
        title: 'History Web Site',
        projectImage: historyWebSite,
        backendIcon: '',
        frontendRepo: 'https://github.com/RobertFacundo/historyWebSite',
        backendRepo: '',
        deployedUrl: 'https://history-web-site.vercel.app/',
        styleIcon: cssLogo,
    },
    {
        title: 'Art Gallery',
        projectImage: artGallery,
        backendIcon: rubyLogo,
        frontendRepo: 'https://github.com/RobertFacundo/galleryArtF',
        backendRepo: 'https://github.com/RobertFacundo/galleryArtB',
        deployedUrl: 'https://galleryartb.onrender.com/',
        styleIcon: tailwindLogo,
    },
    {
        title: 'E-commerce',
        projectImage: ecommerce,
        backendIcon: djangoLogo,
        frontendRepo: 'https://github.com/RobertFacundo/eCommerceF',
        backendRepo: 'https://github.com/RobertFacundo/eCommerceB',
        deployedUrl: 'https://ecommerceb-tc17.onrender.com/',
        styleIcon: cssLogo,
    },
    {
        title: 'Photographic Portfolio',
        projectImage: photographicPortfolio,
        backendIcon: '',
        frontendRepo: 'https://github.com/RobertFacundo/photographyPortfolio',
        backendRepo: '',
        deployedUrl: 'https://photography-portfolio-template-taupe.vercel.app/',
        styleIcon: sassLogo,
    },
    {
        title: 'Authentication',
        projectImage: auth,
        backendIcon: nestLogo,
        frontendRepo: 'https://github.com/RobertFacundo/authF',
        backendRepo: 'https://github.com/RobertFacundo/authB',
        deployedUrl: 'https://authb.onrender.com/',
        styleIcon: cssLogo,
    },
]

export const technicalChallenges = [

    {
        image: coalitionTest,
        dateKey: 'challenge_coalition_test_date',
        titleKey: 'challenge_coalition_test_title',
        descriptionKey: 'challenge_coalition_test_description',
        link: 'https://patient-dashboard-two-dun.vercel.app/',
    },
    {
         image: seatMapBuilder,
        // Usaremos una clave para la fecha si quieres traducirla (ej. Sep vs Septiembre)
        dateKey: 'challenge_seat_map_date', 
        // Usaremos una clave para el título
        titleKey: 'challenge_seat_map_title', 
        // Usaremos una clave para la descripción
        descriptionKey: 'challenge_seat_map_description', 
        link: 'https://seat-map-builder.vercel.app/',
    },
]
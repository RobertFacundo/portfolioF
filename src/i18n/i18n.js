import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "about_link": "About",
            "projects_link": "Projects",
            "change_language": "Change Language",
            "certifications_link": "Certifications",
            "about_title": "Full-Stack Web Developer",
            "first_paragraph": "I'm a <highlight>full-stack web developer</highlight> based in Argentina. My professional-level English and understanding of the international work environment were honed during my time in the US hospitality industry. Over the past <highlight>2 years</highlight>, I have dedicated myself to studying and building modern applications.",
            "second_paragraph": "With a strong foundation in <highlight>React</highlight>, I'm passionate about creating dynamic and responsive user interfaces. I've built a robust portfolio of personal projects using diverse backend technologies, including <highlight>Node.js with Express, Nest.js, Python, and Ruby on Rails</highlight>. This practical experience has given me a comprehensive grasp of different architectural patterns and languages.",
            "third_paragraph": "I am currently seeking my first professional role in the IT industry, and my work ethic is best showcased through my portfolio. My <highlight>personal projects</highlight> are professionally documented and structured, demonstrating a commitment to clean code and effective development practices.",
            "last_paragraph": "I am eager to contribute my <highlight>passion and skills</highlight> to a team where I can grow as a developer.",
            "disclaimer":  "Clicking the <highlight>project title</highlight> will open the deployed URL.<br/>Clicking the <highlight>Backend icon</highlight> or the <highlight>Frontend GitHub icon</highlight> will open their respective repositories.<br/>Please note that the backends for these projects, deployed on <highlight>Render</highlight>, may experience a <highlight>cold start</highlight> on the first visit, causing a brief delay.",
            "disclaimer_left": "Every project was made with a <1></1> Front-End deployed on <2>Vercel</2>.",
        }
    },
    es: {
        translation: {
            "about_link": "Acerca",
            "projects_link": "Proyectos",
            "change_language": "Cambia el idioma",
            "certifications_link": "Certificaciones",
            "about_title": "Full-Stack Web Developer",
            "first_paragraph": "Soy un <highlight>desarrollador web full-stack</highlight> con base en Argentina. Mi inglés de nivel profesional y mi entendimiento del entorno de trabajo internacional se perfeccionaron durante mi tiempo en la industria hotelera de EE. UU. Durante el últimos <highlight>dos años</highlight>, me he dedicado a estudiar y construir aplicaciones modernas.",
            "second_paragraph": "Con una sólida base en <highlight>React</highlight>, me apasiona crear interfaces de usuario dinámicas y responsivas. He construido un sólido portafolio de proyectos personales usando diversas tecnologías de back-end, incluyendo <highlight>Node.js con Express, Nest.js, Python, y Ruby on Rails</highlight>. Esta experiencia práctica me ha dado un conocimiento integral de diferentes patrones arquitectónicos y lenguajes.",
            "third_paragraph": "Actualmente busco mi primer rol profesional en la industria de TI, y mi ética de trabajo se refleja mejor en mi portafolio. Mis <highlight>proyectos personales</highlight> están documentados y estructurados profesionalmente, lo que demuestra mi compromiso con el código limpio y las prácticas de desarrollo efectivas.",
            "last_paragraph": "Estoy ansioso por aportar mi <highlight>pasión y habilidades</highlight> a un equipo donde pueda crecer como desarrollador.",
            "disclaimer": "Al hacer clic en el <highlight>título del proyecto</highlight>, se abrirá la URL desplegada.<br/>Al hacer clic en el <highlight>icono del backend</highlight> o en el <highlight>icono de GitHub del frontend</highlight>, se abrirán sus respectivos repositorios.<br/>Los backends para estos proyectos, desplegados en <highlight>Render</highlight>, pueden experimentar un <highlight>arranque en frío</highlight> en la primera visita, lo que puede causar un breve delay.",
            "disclaimer_left": "Cada proyecto fue hecho con <1></1> Front-End desplegado en <2>Vercel</2>.",
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['navigator', 'localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage'],
        }
    });

export default i18n;
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
            "technical_challenges": "Technical Challenges",
            "about_title": "Full-Stack Web Developer",
            "first_paragraph": "I am a <highlight>full-stack web developer</highlight> from Argentina, with <highlight>professional-level English</highlight> (gained through international experience in the U.S. hospitality industry). Over the past <highlight>two years</highlight>, I have fully dedicated myself to programming and developing personal projects, solidifying my career transition.",
            "second_paragraph": "I have strong experience in <highlight>React</highlight> and back-end development with <highlight>Node.js and Express</highlight>. My hands-on projects have allowed me to understand different architectural patterns and work with multiple technologies, creating dynamic interfaces and robust systems.",
            "third_paragraph": "I am seeking my <highlight>first professional role in IT</highlight>, bringing my commitment to <highlight>clean code and best practices</highlight>. My personal projects are professionally documented and organized, demonstrating responsibility and work ethic.",
            "last_paragraph": "I am ready to contribute my <highlight>passion and skills</highlight> to a team where I can grow and continue learning as a developer.",
            "disclaimer": "Clicking the <highlight>project title</highlight> will open the deployed URL.<br/>Clicking the <highlight>Backend icon</highlight> or the <highlight>Frontend GitHub icon</highlight> will open their respective repositories.<br/>Please note that the backends for these projects, deployed on <highlight>Render</highlight>, may experience a <highlight>cold start</highlight> on the first visit, causing a brief delay.",
            "disclaimer_left": "Every project was made with a <1></1> Front-End deployed on <2>Vercel</2>. ",
            "disclaimer_star": "<highlight>⭐</highlight>are production-ready projects with professional architecture.",

            "total_coding_time_title": "Total Coding Time",
            "last_updated_label": "Last Monthly Updated",

            "challenge_seat_map_title": "Seat Map Builder",
            "challenge_seat_map_date": "September 2025",
            "challenge_seat_map_description": "Developed as a technical challenge to showcase advanced front-end skills and state management. Built using React with Next.js, this interactive tool allows users to design and label dynamic seat maps from scratch. Key features include an advanced Drag and Drop system for reordering rows, batch labeling for mass numbering, and robust JSON import/export with schema validation for map persistence.",

            "challenge_coalition_test_title": "Patient Dashboard",
            "challenge_coalition_test_date": "October 2023",
            "challenge_coalition_test_description": "A pixel-perfect, responsive React dashboard replicating a detailed medical patient data visualization design (Figma/Adobe XD). Features include Recharts integration for diagnostic history and modular component architecture."

        }
    },
    es: {
        translation: {
            "about_link": "Acerca",
            "projects_link": "Proyectos",
            "change_language": "Cambia el idioma",
            "certifications_link": "Certificaciones",
            "technical_challenges": "Desafios Técnicos",
            "about_title": "Full-Stack Web Developer",
            "first_paragraph": "Soy un <highlight>desarrollador web full-stack</highlight> de Argentina, con <highlight>nivel de inglés profesional</highlight> (experiencia internacional adquirida en la industria hotelera de EE. UU). En los últimos <highlight>dos años</highlight>, me he dedicado de lleno a la programación y al desarrollo de proyectos propios, consolidando mi transición de carrera.",
            "second_paragraph": "Tengo experiencia sólida en <highlight>React</highlight> y en back-end con <highlight>Node.js, Express</highlight>. Mis proyectos prácticos me han permitido comprender diferentes patrones arquitectónicos y trabajar con múltiples tecnologías, creando interfaces dinámicas y sistemas robustos.",
            "third_paragraph": "Busco mi <highlight>primer rol profesional en TI</highlight>, aportando mi compromiso con el <highlight>código limpio y buenas prácticas</highlight>. Mis proyectos personales están documentados y organizados profesionalmente, demostrando responsabilidad y ética de trabajo.",
            "last_paragraph": "Estoy listo para aportar mi <highlight>pasión y habilidades</highlight> a un equipo donde pueda crecer y aprender como desarrollador.",
            "disclaimer": "Al hacer clic en el <highlight>título del proyecto</highlight>, se abrirá la URL desplegada.<br/>Al hacer clic en el <highlight>icono del backend</highlight> o en el <highlight>icono de GitHub del frontend</highlight>, se abrirán sus respectivos repositorios.<br/>Los backends para estos proyectos, desplegados en <highlight>Render</highlight>, pueden experimentar un <highlight>arranque en frío</highlight> en la primera visita, lo que puede causar un breve delay.",
            "disclaimer_left": "Cada proyecto fue hecho con <1></1> Front-End desplegado en <2>Vercel</2>.",
            "disclaimer_star": "<highlight>⭐</highlight> Proyectos con arquitectura profesional y listos para producción.",

            "total_coding_time_title": "Tiempo total de Codigo",
            "last_updated_label": "Última actualización mensual",

            "challenge_seat_map_title": "Constructor de Mapas de Asientos",
            "challenge_seat_map_date": "Septiembre de 2025",
            "challenge_seat_map_description": "Desarrollado como un desafío técnico para demostrar habilidades avanzadas de front-end y gestión de estado. Construida con React y Next.js, esta herramienta interactiva permite a los usuarios diseñar y etiquetar mapas de asientos dinámicos desde cero. Las características clave incluyen un sistema avanzado de Arrastrar y Soltar (Drag and Drop) para reordenar filas, etiquetado por lotes para numeración masiva, e importación/exportación robusta de JSON con validación de esquema para la persistencia del mapa.",


            "challenge_coalition_test_title": "Panel de Control de Pacientes",
            "challenge_coalition_test_date": "Octubre 2025",
            "challenge_coalition_test_description": "Panel de control responsivo y con fidelidad pixel-perfect desarrollado en React. Replica un diseño detallado de visualización de datos médicos de pacientes, incluyendo la integración de Recharts para el historial de diagnóstico y arquitectura modular."
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
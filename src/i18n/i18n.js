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
            "experience": "Experience",
            "technical_challenges": "Technical Challenges",
            "about_title": "Front End Developer",
            "first_paragraph": "I am a <highlight>frontend-focused developer</highlight> from Argentina, with <highlight>professional-level English</highlight> gained through international experience in the U.S. hospitality industry. Over the past <highlight>two years</highlight>, I have dedicated myself to programming and building real-world projects, solidifying my transition into tech.",

            "second_paragraph": "I specialize in building modern interfaces using <highlight>React</highlight> and <highlight>TypeScript</highlight>, focusing on <highlight>responsive design</highlight>, clean component architecture, and state management with <highlight>Redux Toolkit</highlight> and <highlight>React Query</highlight>.",

            "third_paragraph": "I also have experience with <highlight>Node.js and Express</highlight> on the backend, which allows me to better understand API integration and full-stack workflows. My current focus is on <highlight>frontend development</highlight>, building user-centered interfaces and delivering high-quality UI.",

            "last_paragraph": "I am seeking my <highlight>first professional role as a frontend developer</highlight>, bringing a <highlight>proactive mindset</highlight>, demonstrated through continuous learning and real-world projects, along with strong communication skills, and a commitment to <highlight>clean code and best practices</highlight>.",
            "disclaimer": "Clicking the <highlight>project title</highlight> will open the deployed URL.<br/>Clicking the <highlight>Backend icon</highlight> or the <highlight>Frontend GitHub icon</highlight> will open their respective repositories.<br/>Please note that the backends for these projects, deployed on <highlight>Render</highlight>, may experience a <highlight>cold start</highlight> on the first visit, causing a brief delay.",
            "disclaimer_left": "Every project was made with a <1></1> Front-End deployed on <2>Vercel</2>. ",
            "disclaimer_star": "<highlight>⭐</highlight> Full-Stack projects with professional architecture.",

            "total_coding_time_title": "Total Coding Time",
            "last_updated_label": "Last Weekly Updated",

            "challenge_seat_map_title": "Seat Map Builder",
            "challenge_seat_map_date": "September 2025",
            "challenge_seat_map_description": "Developed as a technical challenge to showcase advanced front-end skills and state management. Built using React with Next.js, this interactive tool allows users to design and label dynamic seat maps from scratch. Key features include an advanced Drag and Drop system for reordering rows, batch labeling for mass numbering, and robust JSON import/export with schema validation for map persistence.",

            "challenge_coalition_test_title": "Patient Dashboard",
            "challenge_coalition_test_date": "October 2023",
            "challenge_coalition_test_description": "A pixel-perfect, responsive React dashboard replicating a detailed medical patient data visualization design (Figma/Adobe XD). Features include Recharts integration for diagnostic history and modular component architecture."
            ,
            "exp_2026_apr_title": "Frontend Development (UI & Landing Experiences)",

            "exp_2026_apr_desc":
                "Currently focused on <highlight>frontend development</highlight>, building <highlight>pixel-perfect user interfaces</highlight> by translating Figma designs into React applications. Working on <highlight>UI challenges</highlight>, improving layout precision, responsiveness, and component architecture. Also developing <highlight>creative landing experiences</highlight> with animations and interactive elements to enhance user experience.",
            "exp_2026_title": "Professional E-commerce Projects",
            "exp_2026_desc":
                "Built multiple <highlight>full-scale e-commerce</highlight> applications using professional architecture. Implemented <highlight>JWT authentication</highlight>, cart system, <highlight>Redux</highlight> state management, <highlight>React Query</highlight>, <highlight>internationalization</highlight> (i18n), API integration and advanced component structure. This stage marked the transition from study and practice to actively pursuing my first <highlight>professional opportunity</highlight>",
            "exp_2025_title": "Advanced Practice and Skill Reinforcement",
            "exp_2025_desc":
                "After completing my <highlight>full stack studies</highlight>, I focused on strengthening my knowledge by building <highlight>multiple projects</highlight>, learning new libraries, improving <highlight>UI design</highlight>, animations, <highlight>state management</highlight> and API integration to reach a <highlight>professional level</highlight>",
            "exp_2024_title": "Full Stack MERN Career Start",
            "exp_2024_desc":
                "Started my <highlight>full stack development</highlight> career at Coderhouse, completing courses in <highlight>HTML</highlight>, <highlight>CSS</highlight>, <highlight>JavaScript</highlight>, <highlight>React</highlight> and <highlight>Node</highlight> backend. During this stage I learned the fundamentals of <highlight>modern web development</highlight> and built my first <highlight>applications</highlight>",
            "latest": "Latest",
            "oldest": "Oldest",
            "all": "All",

        }
    },
    es: {
        translation: {
            "about_link": "Acerca",
            "projects_link": "Proyectos",
            "change_language": "Cambia el idioma",
            "certifications_link": "Certificaciones",
            "experience": "Experiencia",
            "technical_challenges": "Desafios Técnicos",
            "about_title": "Front End Developer",
            "first_paragraph": "Soy un <highlight>desarrollador enfocado en Front-End</highlight> de Argentina, con <highlight>nivel profesional de inglés</highlight>, adquirido a través de experiencia internacional en la industria de hospitalidad en EE.UU. Durante los últimos <highlight>dos años</highlight>, me he dedicado completamente a la programación y al desarrollo de proyectos reales, consolidando mi transición al mundo IT.",

            "second_paragraph": "Me especializo en construir interfaces modernas utilizando <highlight>React</highlight> y <highlight>TypeScript</highlight>, enfocándome en <highlight>diseño responsive</highlight>, arquitectura de componentes limpia y manejo de estado con <highlight>Redux Toolkit</highlight> y <highlight>React Query</highlight>.",

            "third_paragraph": "También cuento con experiencia en backend con <highlight>Node.js y Express</highlight>, lo que me permite comprender mejor la integración de APIs y el funcionamiento full-stack. Actualmente, mi enfoque está en el <highlight>desarrollo frontend</highlight>, creando interfaces centradas en el usuario y de alta calidad.",

            "last_paragraph": "Busco mi <highlight>primer rol profesional como desarrollador frontend</highlight>, aportando una <highlight>mentalidad proactiva</highlight>, demostrada a través del aprendizaje constante y el desarrollo de proyectos reales, junto con sólidas habilidades de comunicación y un fuerte compromiso con el <highlight>código limpio y las buenas prácticas</highlight>.",
            "disclaimer": "Al hacer clic en el <highlight>título del proyecto</highlight>, se abrirá la URL desplegada.<br/>Al hacer clic en el <highlight>icono del backend</highlight> o en el <highlight>icono de GitHub del frontend</highlight>, se abrirán sus respectivos repositorios.<br/>Los backends para estos proyectos, desplegados en <highlight>Render</highlight>, pueden experimentar un <highlight>arranque en frío</highlight> en la primera visita, lo que puede causar un breve delay.",
            "disclaimer_left": "Cada proyecto fue hecho con <1></1> Front-End desplegado en <2>Vercel</2>.",
            "disclaimer_star": "<highlight>⭐</highlight> Proyectos Full-Stack con arquitectura profesional.",

            "total_coding_time_title": "Tiempo total de Codigo",
            "last_updated_label": "Última actualización semanal",

            "challenge_seat_map_title": "Constructor de Mapas de Asientos",
            "challenge_seat_map_date": "Septiembre de 2025",
            "challenge_seat_map_description": "Desarrollado como un desafío técnico para demostrar habilidades avanzadas de front-end y gestión de estado. Construida con React y Next.js, esta herramienta interactiva permite a los usuarios diseñar y etiquetar mapas de asientos dinámicos desde cero. Las características clave incluyen un sistema avanzado de Arrastrar y Soltar (Drag and Drop) para reordenar filas, etiquetado por lotes para numeración masiva, e importación/exportación robusta de JSON con validación de esquema para la persistencia del mapa",


            "challenge_coalition_test_title": "Panel de Control de Pacientes",
            "challenge_coalition_test_date": "Octubre 2025",
            "challenge_coalition_test_description": "Panel de control responsivo y con fidelidad pixel-perfect desarrollado en React. Replica un diseño detallado de visualización de datos médicos de pacientes, incluyendo la integración de Recharts para el historial de diagnóstico y arquitectura modular."
            ,

            "exp_2026_apr_title": "Desarrollo Frontend (UI & Experiencias de Landing)",

            "exp_2026_apr_desc":
                "Actualmente enfocado en el <highlight>desarrollo frontend</highlight>, construyendo <highlight>interfaces pixel-perfect</highlight> a partir de diseños en Figma utilizando React. Trabajando en <highlight>desafíos de UI</highlight>, mejorando precisión en layouts, responsividad y arquitectura de componentes. Además, desarrollando <highlight>landings creativas</highlight> con animaciones y elementos interactivos para mejorar la experiencia de usuario.",
            "exp_2026_title": "Proyectos Profesionales de E-commerce",

            "exp_2026_desc":
                "Desarrollé múltiples aplicaciones <highlight>de e-commerce a gran escala</highlight> utilizando una arquitectura profesional. Implementé <highlight>autenticación JWT</highlight>, sistema de carrito, gestión de estado con <highlight>Redux</highlight>, <highlight>React Query</highlight>, <highlight>internacionalización</highlight> (i18n), integración con APIs y una estructura avanzada de componentes. Esta etapa marcó la transición del estudio y la práctica a la búsqueda activa de mi primera <highlight>oportunidad profesional</highlight>",

            "exp_2025_title": "Práctica Avanzada y Refuerzo de Habilidades",

            "exp_2025_desc":
                "Tras completar mis estudios de <highlight>full stack</highlight>, me enfoqué en fortalecer mis conocimientos construyendo <highlight>múltiples proyectos</highlight>, aprendiendo nuevas librerías, mejorando el <highlight>diseño de interfaces</highlight>, animaciones, <highlight>gestión de estado</highlight> e integración con APIs para alcanzar un <highlight>nivel profesional</highlight>",

            "exp_2024_title": "Inicio de Carrera Full Stack MERN",

            "exp_2024_desc":
                "Comencé mi carrera de <highlight>desarrollo full stack</highlight> en Coderhouse, completando cursos de <highlight>HTML</highlight>, <highlight>CSS</highlight>, <highlight>JavaScript</highlight>, <highlight>React</highlight> y backend con <highlight>Node</highlight>. Durante esta etapa aprendí los fundamentos del <highlight>desarrollo web moderno</highlight> y construí mis primeras <highlight>aplicaciones</highlight>",
            "latest": "Recientes",
            "oldest": "Antiguos",
            "all": "Todos",

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
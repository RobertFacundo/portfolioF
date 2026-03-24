import React, { useEffect } from "react";
import { projects } from "../data";
import { StyledProjectsContainer, StyledProjectCard, StyledHighlight } from '../styles/ProjectViewsStyles.js';
import reactLogo from '../assets/programmingLanguages/react.png'
import useAnalytics from "../hooks/useAnalytics.js";
import { useTranslation, Trans } from "react-i18next";
import {motion} from 'framer-motion'

const ProjectsView = () => {
    const { increment } = useAnalytics('projectsView', 'tab');
    const { t } = useTranslation();

    useEffect(() => {
        increment();
    }, [])

    const handleDeployedUrlClick = (project) => {
        increment(project.title, 'project');
        window.open(project.deployedUrl, '_blank');
    };

    const handleFrontendRepoClick = (project) => {
        window.open(project.frontendRepo, '_blank');
    };

    const handleBackendRepoClick = (project) => {
        window.open(project.backendRepo, '_blank');
    };

    return (
        <StyledProjectsContainer>
            <div className="disclaimer-container">
                <div className="disclaimer-left-container">
                    <p className="disclaimer-left">
                        <Trans
                            i18nKey="disclaimer_left"
                            components={{
                                1: <img src={reactLogo} alt="React front end" className="tech-logo" />,
                                2: <a href="https://vercel.com/robertfacundos-projects" target="_blank" rel="noopener noreferrer"></a>
                            }}
                        />
                    </p>
                </div>
                <p className="disclaimer-right">
                    <Trans
                        i18nKey="disclaimer_star"
                        components={{ highlight: <span /> }}
                    />
                </p>
            </div>
            {
                projects.map((project, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                        >
                            <StyledProjectCard index={index} key={index} >
                                <div className="card-info">
                                    <div>
                                        <h2 onClick={() => handleDeployedUrlClick(project)} style={{ cursor: 'pointer' }}>
                                            {project.title}
                                            {project.star && <span style={{ marginLeft: '0.5rem' }}>⭐</span>}
                                        </h2>
                                        <p className="subtitle">{project.subtitle}</p>
                                    </div>
                                </div>
                                <img src={project.projectImage} alt={`${project.title} screenshot`} />

                                <div className="links-container">

                                    {project.frontendRepo && (
                                        <p
                                            onClick={() => handleFrontendRepoClick(project)}
                                            className="project-link"
                                        >
                                            Frontend Repo
                                        </p>
                                    )}
                                    {project.deployedUrl && (
                                        <p
                                            onClick={() => handleDeployedUrlClick(project)}
                                            className="project-link"
                                        >
                                            Live Demo
                                        </p>
                                    )}

                                    {project.backendRepo && (
                                        <p
                                            onClick={() => handleBackendRepoClick(project)}
                                            className="project-link"
                                        >
                                            Backend Repo
                                        </p>
                                    )}

                                </div>
                            </StyledProjectCard>
                        </motion.div>
                    )
                })
            }
        </StyledProjectsContainer >
    )
};

export default ProjectsView;
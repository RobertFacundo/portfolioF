import React, { useEffect } from "react";
import { projects } from "../data";
import { StyledProjectsContainer, StyledProjectCard, StyledHighlight } from '../styles/ProjectViewsStyles.js';
import { FaGithub } from "react-icons/fa";
import reactLogo from '../assets/programmingLanguages/react.png'
import useAnalytics from "../hooks/useAnalytics.js";
import { useTranslation, Trans } from "react-i18next";

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
            <p className="disclaimer-container">
                <p className="disclaimer-left">
                    <Trans
                        i18nKey="disclaimer_left"
                        components={{
                            1: <img src={reactLogo} alt="React front end" className="tech-logo" />,
                            2: <a href="https://vercel.com/robertfacundos-projects" target="_blank" rel="noopener noreferrer"></a>
                        }}
                    />
                </p>
                <p className="disclaimer-right">
                    <Trans
                        i18nKey="disclaimer"
                        components={{ highlight: <StyledHighlight /> }}
                    />
                </p>
            </p>
            {
                projects.map((project, index) => {
                    return (
                        <StyledProjectCard index={index} key={index} >
                            <div className="card-info">
                                <h2 onClick={() => handleDeployedUrlClick(project)} style={{ cursor: 'pointer' }}>{project.title}</h2>
                                <div className="icons-container">
                                    <FaGithub onClick={() => handleFrontendRepoClick(project)} className="tech-icons" style={{ cursor: 'pointer' }} />
                                    {project.backendIcon && (
                                        <img
                                            src={project.backendIcon}
                                            alt={`${project.title} backend language`}
                                            className="tech-icons"
                                            onClick={() => handleBackendRepoClick(project)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    )}
                                    <img src={project.styleIcon} alt={`${project.title} styling library`} className="tech-icons" />
                                </div>
                            </div>
                            <img src={project.projectImage} alt={`${project.title} screenshot`} />
                        </StyledProjectCard>
                    )
                })
            }
        </StyledProjectsContainer >
    )
};

export default ProjectsView;
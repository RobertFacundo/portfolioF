import React, { useEffect } from "react";
import { projects } from "../data";
import { StyledProjectsContainer, StyledProjectCard, StyledHighlight } from '../styles/ProjectViewsStyles.js';
import reactLogo from '../assets/programmingLanguages/react.png'
import useAnalytics from "../hooks/useAnalytics.js";

const ProjectsView = () => {
    const { increment } = useAnalytics('projectsView', 'tab');

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
            <p className="disclaimer">
                - Every project was made with a <img src="https://placehold.co/20x20" alt="React front end" className="tech-logo" /> Front-End deployed on <a href="https://vercel.com/robertfacundos-projects" target="_blank" rel="noopener noreferrer">Vercel</a>.<br />
                - Clicking the <StyledHighlight>project title</StyledHighlight> will open the deployed URL.<br />
                - Clicking the <StyledHighlight>Backend icon</StyledHighlight> or the new <StyledHighlight>Frontend GitHub icon</StyledHighlight> will open their respective repositories.<br />
                - Please note that the backends for these projects, deployed on <StyledHighlight>Render</StyledHighlight>, may experience a <StyledHighlight>cold start</StyledHighlight> on the first visit, causing a brief delay.
            </p>
            {projects.map((project, index) => {
                return (
                    <StyledProjectCard index={index} key={index} >
                        <div className="card-info">
                            <h2 onClick={() => handleDeployedUrlClick(project)} style={{ cursor: 'pointer' }}>{project.title}</h2>
                            <div className="icons-container">
                                <span onClick={() => handleFrontendRepoClick(project)} style={{ cursor: 'pointer' }}>
                                    <GitHubIcon />
                                </span>
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
            })}
        </StyledProjectsContainer>
    )
};

export default ProjectsView;
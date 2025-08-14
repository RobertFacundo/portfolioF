import React from "react";
import { projects } from "../data";
import { StyledProjectsContainer, StyledProjectCard, StyledHighlight } from '../styles/ProjectViewsStyles.js';
import reactLogo from '../assets/programmingLanguages/react.png'

const ProjectsView = () => {
    const handleProjectClick = (project) => {
        window.open(project.frontendRepo, '_blank');
        if (project.backendRepo) { window.open(project.backendRepo, '_blank'); }
        window.open(project.deployedUrl, '_blank');
    };

    return (
        <StyledProjectsContainer>
            <p className="disclaimer">
                - Every project was made with a <img src={reactLogo} alt="React front end" className="tech-logo" /> Front-End deployed on <a href="https://vercel.com/robertfacundos-projects" target="_blank" rel="noopener noreferrer">Vercel</a>.<br />
                - Clicking on a project will open <StyledHighlight>three new tabs</StyledHighlight> with the <StyledHighlight>Frontend README</StyledHighlight>, <StyledHighlight>Backend README</StyledHighlight>, and the <StyledHighlight>deployed URL</StyledHighlight>.<br />
                - Please note that the backends for these projects, deployed on <StyledHighlight>Render</StyledHighlight>, may experience a <StyledHighlight>cold start</StyledHighlight> on the first visit, causing a brief delay.
            </p>
            {projects.map((project, index) => {
                return (
                    <StyledProjectCard index={index} key={index} onClick={() => handleProjectClick(project)}>
                        <div className="card-info">
                            <h2>{project.title}</h2>
                            <div className="icons-container">
                                {project.backendIcon && <img src={project.backendIcon} alt={`${project.title} backend language`} className="tech-icons" />}
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
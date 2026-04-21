import React, { useEffect, useState, useMemo } from "react";
import { projects } from "../data";
import { StyledProjectsContainer, StyledProjectCard, StyledHighlight, Filters, FilterButton } from '../styles/ProjectViewsStyles.js';
import useAnalytics from "../hooks/useAnalytics.js";
import { useTranslation, Trans } from "react-i18next";
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsView = () => {
    const { increment } = useAnalytics('projectsView', 'tab');
    const { t } = useTranslation();
    const [sortType, setSortType] = useState('latest');
    const [filterType, setFilterType] = useState('all')

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

    const filteredAndSortedProjects = useMemo(() => {
        let result = [...projects];

        if (filterType !== 'all') {
            result = result.filter(project => project.type === filterType);
        }

        result.sort((a, b) => {
            return sortType === 'latest'
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        });

        return result;
    }, [sortType, filterType]);

    const sortOptions = [
        { labelKey: "latest", value: 'latest' },
        { labelKey: "oldest", value: 'oldest' }
    ];

    const filterOptions = [
        { labelKey: 'all', value: 'all' },
        { labelKey: 'Frontend', value: 'frontend' },
        { labelKey: 'Fullstack', value: 'fullstack' }
    ]

    return (
        <StyledProjectsContainer>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="filters-container"
            >
                <Filters>
                    <div>
                        {sortOptions.map((option) => (
                            <FilterButton
                                key={option.value}
                                active={sortType === option.value}
                                onClick={() => setSortType(option.value)}
                            >
                                {t(option.labelKey)}
                            </FilterButton>
                        ))}
                    </div>

                    <div>
                        {filterOptions.map((option) => (
                            <FilterButton
                                key={option.value}
                                active={filterType === option.value}
                                onClick={() => setFilterType(option.value)}
                            >
                                {t(option.labelKey)}
                            </FilterButton>
                        ))}
                    </div>
                </Filters>
            </motion.div>
            {
                filteredAndSortedProjects.map((project, index) => {
                    return (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                layout: { duration: 0.5, ease: "easeInOut" },
                                opacity: { duration: 0.3 }
                            }}
                        >
                            <StyledProjectCard index={index} key={index} layout >
                                <div className="card-info">
                                    <div>
                                        <h2 onClick={() => handleDeployedUrlClick(project)} style={{ cursor: 'pointer' }}>
                                            {project.title}
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
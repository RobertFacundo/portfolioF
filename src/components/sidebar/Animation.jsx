import React from "react";
import { StyledAnimationContainer, StyledLogoImage, StyledLogoLink } from '../../styles/Animation.js';
import { languageLogos } from "../../data.js";

const Animation = () => {

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.16,
                delayChildren: 0.1,
            },
        },
    };

    const logoVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <StyledAnimationContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            {languageLogos.map((logo) => (
                <StyledLogoLink
                    key={logo.src}
                    category={logo.category}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={logo.link}
                    variants={logoVariants}
                >
                    <StyledLogoImage
                        src={logo.src}
                        alt={logo.alt}
                        category={logo.category}
                    />
                </StyledLogoLink>
            ))}
        </StyledAnimationContainer>
    )
};

export default Animation;
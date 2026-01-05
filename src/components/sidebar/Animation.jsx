import React from "react";
import { StyledAnimationContainer, StyledLogoImage, StyledLogoLink } from '../../styles/Animation.js';
import { languageLogos } from "../../data.js";

const Animation = () => {

    return (
        <StyledAnimationContainer>
            {languageLogos.map((logo, index) => (
                <StyledLogoLink
                    index={index}
                    key={logo.src}
                    category={logo.category}
                    target="_blank"
                    rel="noopener noreferree"
                    href={logo.link}
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
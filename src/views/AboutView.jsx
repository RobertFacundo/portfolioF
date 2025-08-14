import React from "react";
import { StyledAboutContentContainer, StyledSideBarContainer, StyledAboutView } from '../styles/AboutViewStyles.js'
import SideBarTitle from "../components/sidebar/SideBarTitle.jsx";
import Contact from "../components/sidebar/Contact.jsx";
import Animation from "../components/sidebar/Animation.jsx";
import AboutSection from "../components/About/AboutSection.jsx";

const AboutView = () => {
    return (
        <StyledAboutView>
            <StyledSideBarContainer>
                <SideBarTitle />
                <Animation />
                <Contact />
            </StyledSideBarContainer>
            <StyledAboutContentContainer>
                <AboutSection />
            </StyledAboutContentContainer>
        </StyledAboutView>
    )
};

export default AboutView;
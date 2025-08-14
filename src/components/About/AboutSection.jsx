import React from "react";
import { Trans } from "react-i18next";
import { StyledHighLight } from "../../styles/AboutSectionStyles.js";
import AboutParagraph from "./AboutParagraph";
import AboutTitle from "./AboutTitle";
import { useTranslation } from "react-i18next";
import { StyledAboutSection } from '../../styles/AboutSectionStyles.js';

const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <StyledAboutSection>
            <AboutTitle />
            <AboutParagraph paragraph={<Trans i18nKey="first_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
            <AboutParagraph paragraph={<Trans i18nKey="second_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
            <AboutParagraph paragraph={<Trans i18nKey="third_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
            <AboutParagraph paragraph={<Trans i18nKey="last_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
        </StyledAboutSection>
    )
}

export default AboutSection;
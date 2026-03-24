import React from "react";
import { Trans } from "react-i18next";
import { StyledHighLight } from "../../styles/AboutSectionStyles.js";
import AboutParagraph from "./AboutParagraph";
import AboutTitle from "./AboutTitle";
import { useTranslation } from "react-i18next";
import { StyledAboutSection } from '../../styles/AboutSectionStyles.js';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3   // retrasa cada hijo 0.3s
        }
    }
};

const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

const AboutSection = () => {
    const { t } = useTranslation();
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}   // empieza invisible y ligeramente abajo
            animate={{ opacity: 1, y: 0 }}    // se anima a visible y posición normal
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <StyledAboutSection>
                <AboutTitle />
                <motion.div variants={paragraphVariants}>
                    <AboutParagraph paragraph={<Trans i18nKey="first_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
                </motion.div>
                <motion.div variants={paragraphVariants}>
                    <AboutParagraph paragraph={<Trans i18nKey="second_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
                </motion.div>
                <motion.div variants={paragraphVariants}>
                    <AboutParagraph paragraph={<Trans i18nKey="third_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
                </motion.div>
                <motion.div variants={paragraphVariants}>
                    <AboutParagraph paragraph={<Trans i18nKey="last_paragraph" components={{ highlight: <StyledHighLight /> }} />} />
                </motion.div>
            </StyledAboutSection>
        </motion.div>
    )
}

export default AboutSection;
import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageToggleContainer, LanguageButton, FlagIconImg, FlagsWrapper, LanguageIcon } from "../styles/LanguageToggle.js";

const LanguageToggle = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <LanguageToggleContainer>
            <LanguageIcon src='/translation.png' alt='Language Icon'/>

            <FlagsWrapper>
                <LanguageButton
                    onClick={() => changeLanguage('en')}
                    $isActive={i18n.language === 'en'}
                >
                    <FlagIconImg src="/us.png" alt="US flag" />
                </LanguageButton>
                <LanguageButton
                    onClick={() => changeLanguage('es')}
                     $isActive={i18n.language === 'es'}
                >
                    <FlagIconImg src="/ar.png" alt="Argentinian flag" />
                </LanguageButton>
            </FlagsWrapper>
        </LanguageToggleContainer>
    )
};

export default LanguageToggle;
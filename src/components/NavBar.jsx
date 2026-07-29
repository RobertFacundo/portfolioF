import { NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import CodingTime from './CodingTime.jsx';
import { useTranslation } from "react-i18next";
import { StyledNav, NavList, NavItem, NavLinksWrapper } from "../styles/NavBarStyles";
import { useState, useEffect } from "react";

const NavBar = () => {
    const { t } = useTranslation();
     const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <StyledNav style={{
    opacity: mounted ? 1 : 0,
    transition: "opacity 0.2s ease"
  }}>
            <CodingTime/>
            <NavLinksWrapper>
                <NavList>
                    <NavItem><NavLink to='/About'>{t("about_link")}</NavLink></NavItem>
                    <NavItem><NavLink to='/'>{t("projects_link")}</NavLink></NavItem>
                    {/* <NavItem><NavLink to='/Certifications'>{t("certifications_link")}</NavLink></NavItem> */}
                    <NavItem><NavLink to='/Experience'>{t("experience")}</NavLink></NavItem>
                    {/* <NavItem><NavLink to='/TechnicalChallenges'>{t("technical_challenges")}</NavLink></NavItem> */}
                </NavList>
            </NavLinksWrapper>
            <LanguageToggle />
        </StyledNav>
    )
};

export default NavBar;
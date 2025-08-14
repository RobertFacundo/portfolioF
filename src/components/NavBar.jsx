import { NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import { StyledNav, NavList, NavItem, NavLinksWrapper } from "../styles/NavBarStyles";

const NavBar = () => {
    const { t } = useTranslation();

    return (
        <StyledNav>
            <NavLinksWrapper>
                <NavList>
                    <NavItem><NavLink to='/About'>{t("about_link")}</NavLink></NavItem>
                    <NavItem><NavLink to='/'>{t("projects_link")}</NavLink></NavItem>
                    <NavItem><NavLink to='/Certifications'>{t("certifications_link")}</NavLink></NavItem>
                </NavList>
            </NavLinksWrapper>
            <LanguageToggle />
        </StyledNav>
    )
};

export default NavBar;
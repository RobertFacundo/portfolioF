import React from "react";
import {StyledFooter, StyledLink} from '../styles/FooterStyle.js';

const Footer = () => {
    return (
        <StyledFooter className="footer-container">
            Designed & developed &gt;{" "}
            <StyledLink href="https://github.com/RobertFacundo"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                Robert
            </StyledLink>
        </StyledFooter>
    )
};

export default Footer;
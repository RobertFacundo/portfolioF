import React from "react";
import {StyledContactContainer} from '../../styles/Contact.js';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = ()=>{
    return(
        <StyledContactContainer>
            <a href="https://github.com/RobertFacundo" target="_blank" rel="noopener noreferrer">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/robertfacundodev/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a href="mailto:robertf.coder@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope/>
            </a>
            <a href="https://wa.me/5492235801773" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp/>
            </a>
        </StyledContactContainer>
    )
}

export default Contact;
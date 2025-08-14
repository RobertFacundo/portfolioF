import React from "react";
import {StyledModalOverlay, StyledModalContent} from '../styles/ModalStyles.js';

const Modal = ({src, onClose})=>{
    return(
        <StyledModalOverlay onClick={onClose}>
            <StyledModalContent>
                <img src={src} alt="Full Screen certification" />
            </StyledModalContent>
        </StyledModalOverlay>
    )
};

export default Modal;
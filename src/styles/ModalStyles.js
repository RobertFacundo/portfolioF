import styled from "styled-components";

export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const StyledModalContent =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    max-width: 60%;
    max-height: 60%;

    img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;
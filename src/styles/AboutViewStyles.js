import styled from "styled-components";

export const StyledAboutView = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 80vh;
    background-color: #000000;
    color: #ffffff;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 2rem 1rem;
    }
`;

export const StyledSideBarContainer = styled.div`
    flex-basis: 33.33%;
    padding-right: 1rem;
    /* border-right: 2px solid rgba(255, 255, 255, 0.2); */

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px){
        flex-basis: 100%;
        border-right: none;
        border-bottom: 2px solid #ffffff;
        padding-right: 0;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
    }
`;

export const StyledAboutContentContainer = styled.div`
    flex-basis: 66.666%;
    padding-left: 2rem;

    @media (max-width: 768px){
        flex-basis: 100%;
        padding-left: 0;
    }
`;
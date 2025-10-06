import styled from "styled-components";


export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    font-size: 0.8em;
    letter-spacing: 2px;

    position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: 3px;
    z-index: 100;
`

export const StyledLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;
    margin-left: 0.5rem;

    &:hover {
        color: #00FF41;
        text-decoration: underline;
    }
`
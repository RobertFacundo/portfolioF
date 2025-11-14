import styled from "styled-components";

export const StyledAboutSection = styled.div`
    h1{
        padding-top: 3rem;
        border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        letter-spacing: 0.3rem;
        font-size: 1.9em;

        @media (max-width: 768px){
            font-size: 1.5rem;
        text-align: center;
        padding-top: 0;

        /* Ajuste para el borde */
        width: calc(100% - 30px); /* reduce ancho respecto al padding deseado */
        margin: 0 auto;          /* centra el h1 */
        border-bottom-width: 2px;
        }
    }
    p{
        padding-top: 1rem;
        padding-right: 1rem;
        line-height: 1.9rem;
        text-indent: 0.6rem;
        font-family: 'VT323', monospace;
        font-size: 1.4rem; 
        letter-spacing: 1px;
        text-align: left;

        @media (max-width: 768px){
            font-size: 1.2rem;
            text-align: center;
        }
    }
`;

export const StyledHighLight = styled.span`
    /* font-family: 'Oxanium', sans-serif;  */
    font-weight: bold;
    color: #00FF41;
`

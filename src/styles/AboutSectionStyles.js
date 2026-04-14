import styled from "styled-components";

export const StyledAboutSection = styled.div`
    h1{
        padding-top: 3rem;
        border-bottom: 1px solid rgba(0, 255, 65, 0.2);
        letter-spacing: 0.1rem;
        font-size: 2.3em;
        font-family: "Space Grotesk", sans-serif;

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

    .cv-icon svg {
  color: #28c522;
  transition: all 0.2s ease;
}

.cv-icon:hover svg {
  color: #1faa1a;
  transform: scale(1.1);
}
    p{
        padding-top: 1rem;
        padding-right: 1rem;
        line-height: 1.9rem;
        text-indent: 0.3rem;
        font-family: 'Oxanium', sans-serif;
        font-size: 1.1rem; 
        letter-spacing: 1;
        text-align: left;
        font-weight: 300;

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

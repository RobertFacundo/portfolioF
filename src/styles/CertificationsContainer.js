import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }to{
        opacity: 1;
        transform: translateY(0);
    }
`;


export const StyledCertificationsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    /* CLAVE 1: Transición para el efecto hover. Se aplica a 'transform' y es de 0.8s */
    
`

export const StyledCertImage = styled.img`
    width: 100%;
    max-width: 450px;
    height: auto;
    cursor: pointer;

    opacity: 0;
    transform: translateY(-50px);
    
    animation: ${slideIn} 1.6s ease-out forwards;
    animation-delay: ${({ index }) => index * 0.4}s;

    // This media query is not needed since the component is using flexbox
    @media (max-width: 1024px) {
        /* grid-template-columns: 1fr; */
    }
`;
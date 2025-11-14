
import styled from 'styled-components';

export const ChallengesList = styled.div`
    width: 100vw;
    margin-top: 10px;
    padding: 0;
    margin-top: 30px;
    /* FIX 1: Aumento del margen inferior para asegurar que el último elemento sea visible. */
    margin-bottom: 150px; 

    /* FIX 3: Oculta el desbordamiento causado por la transformación scale(1.01) en hover. */
    overflow-x: hidden;
    border-top: 2px solid rgba(0, 255, 65, 0.2);
`;

export const ChallengeItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    padding: 0 2rem ;
    align-items: center; 
    padding-top: 10px;
    padding-bottom: 10px;
    /* box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);  */
    border-bottom: 2px solid rgba(0, 255, 65, 0.3);

    transition: transform 0.8s ease-in-out, border-bottom 0.3s ease-in-out;
    
    /* CLAVE 2: Efecto hover */
    &:hover {
        /* Un leve scale (ej. 1.01 = 1% más grande) para el efecto 3D */
        transform: scale(1.01);
        /* Opcional: Aumentamos la sombra en hover para mayor profundidad */
        border-bottom: 2px solid rgba(0, 255, 65, 0.5);
    }

    @media (max-width: 768px) {
        width: 95%;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem 1rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        margin-left: 3px;
    }
`;

export const Screenshot = styled.img`
    width: 30%;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 100%; /* Ocupa todo el ancho */
        max-width: 80%;
        margin-bottom: 1rem;
    }
`;

// 2. Fecha (Columna central)
export const DateWrapper = styled.div`
    width: 15%;
    text-align: center;
    font-size: 1rem;
    color: #00FF41;
    letter-spacing: 3px;
    font-weight: 500;

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
`;

// 3. Título y Descripción (Columna derecha)
export const ContentWrapper = styled.div`
    width: 45%; 
    display: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

// Título (clickeable)
export const ChallengeTitle = styled.h3`
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    letter-spacing: 2px;
    
    a {
        color: #ffffff; /* Color primario o de enlace */
        text-decoration: none;

        transition: color 0.3s ease-in-out; 
        &:hover {
            color: #00FF41;
            text-decoration: underline;
        }
    }
`;

// Descripción
export const Description = styled.p`
    font-size: 1rem;
    color: #ffffff;
    line-height: 1.8;
    text-align: right;
    margin: 0;
    letter-spacing: 0.5;
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;
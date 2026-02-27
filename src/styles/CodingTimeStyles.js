import styled from 'styled-components';

export const CodingTimeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    width: 300px;
    padding-left: 20px;
    font-family: 'Oxanium', sans-serif; 

    @media (max-width:768px){
        flex-direction: row;
        width: 100vw;
        gap: 3rem;
        padding-bottom: 5px;
        border-bottom: 2px solid rgba(0, 255, 65, 0.2);
    }
    
`;

export const Label = styled.p`
    white-space: nowrap; 
    text-align: left;
    font-size: 0.8rem;
    letter-spacing: 1.3px;
    margin-bottom: 4px;
    font-weight: 600;
    border-bottom: 2px solid rgba(0, 255, 65, 0.18);
`;

export const TimeDisplay = styled.p`
    text-align: left;
    font-size: 0.9rem;
    color: #00FF41;
    font-weight: bold;
    letter-spacing: 1.5px;
`;

export const UpdateInfo = styled.p`
    text-align: center;
    padding-left: 1rem;
    letter-spacing: 1px;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0px;
`;

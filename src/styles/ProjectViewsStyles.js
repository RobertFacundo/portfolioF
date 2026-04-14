import styled, { keyframes } from "styled-components";


export const Filters = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

export const FilterButton = styled.button`
    background:none;
    border:none;
    cursor:pointer;
    font-style: italic;
    color: ${({ active }) => active ? '#39ff14' : 'rgba(191, 248, 156, 0.5)'};
    margin-right: 0.5rem;

    transition: all 0.2s ease;

    &:hover{
        color: #39ff14;
        transform: translateY(-1px)
    }

    &::after {
    content: '';
    display: block;
    height: 2px;
    width: ${({ active }) => active ? '100%' : '0%'};
    background: #39ff14;
    transition: width 0.3s ease;
}
`

export const StyledProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    /* border-top: 1px solid rgba(0, 255, 65, 0.1); */
    padding-bottom: 3rem;  

    .filters-container {
        width: 100%;
        display:flex;
        justify-content: center;
        font-size: 0.9rem;
        font-style: italic;
        margin-left: 1rem;
        color: rgba(255, 255, 255, 0.7);
        padding-top: 1rem;
        padding-bottom: 1rem;

        @media (max-width: 768px){
            font-size: 0.6rem;
        }
    }
`;

export const StyledProjectCard = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.4s ease;

    &:hover {
        h2 {
            color: #00FF41;
        }
    }

    img{
        width: 100%;
        height: 220px;
        object-fit: cover;
    }

    .card-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        h2{
            font-size: 1.6rem;
            margin: 0;
            transition: color 0.6s ease;
            letter-spacing: 0.1rem;
            font-family: "Space Grotesk", sans-serif;
        }

        .subtitle{
            font-size: 0.6rem;
            color: rgba(255, 255, 255, 0.7);
            font-family: 'Oxanium', sans-serif;
            letter-spacing: 1px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            overflow: hidden;
        }

        .icons-container {
            display: flex;
            flex-direction: row;
            gap: 0.3rem;

        }
        .tech-icons {
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
    }
    .links-container {
        display: flex;
        gap: 1.7rem;
        justify-content: center;
        margin-top: 0.5rem;
        padding: 15px;

        .project-link {
            cursor: pointer;
            color: #ffffff;
            font-family: 'VT323', monospace;
            letter-spacing: 0.5px;
            font-size: 1.4rem;
            font-weight: 300;
            transition: 0.2s;
        }

        .project-link:hover {
            color: #00FF41;
            transform: scale(1.05);
        }
    }
`;

export const StyledHighlight = styled.span`
    color: #00FF41;
`;


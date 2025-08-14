import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px);
    }to{
        opacity: 1;
        transform: translateY(0);
    }
`



export const StyledProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .disclaimer {
        width: 100%;
        text-align: left;
        font-size:0.8rem ;
        font-style: italic;
        margin-left: 1rem;
        color: rgba(255, 255, 255, 0.7);
        a{
            color: #00FF41;
        }
        .tech-logo {
          height: 5em; // Sets the height of the logo to match the font size
          width: auto; // Maintains the logo's aspect ratio
          vertical-align: middle; // Aligns the logo vertically with the text
          /* margin: 0 0.25em; // Adds a small space around the logo */
        }
    }
`;

export const StyledProjectCard = styled.div`
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s ease;

    animation: ${slideIn} 2.6s ease-out forwards;
    animation-delay: ${({ index }) => index * 0.4}s;

    &:hover {
        h2 {
            color: #00FF41;
        }
    }

    img{
        width: 100%;
        height: 190px;
        object-fit: cover;
    }

    .card-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        h2{
            font-size: 1.3rem;
            margin: 0;
            transition: color 0.6s ease;
        }

        .icons-container {
            display: flex;
            gap: 0.2rem;
        }
        .tech-icons {
            width: 50px;
            height: 50px;
            object-fit: contain;
        }
    }
`;

export const StyledHighlight = styled.span`
    color: #00FF41;
`;


import styled, { keyframes } from "styled-components";



export const StyledProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    /* border-top: 1px solid rgba(0, 255, 65, 0.1); */
    padding-bottom: 3rem;  

    .disclaimer-container {
        width: 100%;
        display:flex;
        justify-content: space-between;
        font-size: 0.9rem;
        font-style: italic;
        margin-left: 1rem;
        color: rgba(255, 255, 255, 0.7);
        padding-top: 1rem;
        padding-bottom: 1rem;


        .disclaimer-left-container{
            display: flex;
            flex-direction: column;
            .disclaimer-left {
                text-align: left;
                .tech-logo {
                  height: 5em; // Sets the height of the logo to match the font size
                  width: auto; // Maintains the logo's aspect ratio
                  vertical-align: middle; // Aligns the logo vertically with the text
                }
    
                a{
                    color: #00FF41;
                }
            }
            
        }
        .disclaimer-right{
            text-align: right;
            padding-right: 1rem;
            max-width: 800px;
            margin-top:27px;
        }

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
            font-size: 1.3rem;
            margin: 0;
            transition: color 0.6s ease;
        }

        .subtitle{
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            font-family: 'VT323', monospace;
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


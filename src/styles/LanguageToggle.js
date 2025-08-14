import styled from "styled-components";
import { colors, spacing } from './constants';

export const LanguageToggleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FlagsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LanguageIcon = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
    filter: brightness(0) invert(1);
`

// Styled component for the flag image itself
export const FlagIconImg = styled.img`
    width: 39px;
    height: 39px;
    object-fit: contain;
    border-radius: 50%; // Makes it perfectly round if width/height are equal
    box-shadow: 0 0 2px #00FF41;

    /* KEY: Transition for the scale effect */
    transition: transform 0.9s ease-in-out, box-shadow 0.9s ease-in-out;
`;

// Styled button for language selection
export const LanguageButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacing.small}; /* 5px is close to spacing.small */

    /* Apply hover effects to the FlagIconImg when the button is hovered */
    &:hover ${FlagIconImg} {
        box-shadow: 0 0 10px #00FF41; /* Golden shadow on hover */
    }

    /* Styles for the active state (when current language matches) */
    ${props => props.$isActive && `
        font-weight: bold;
        ${FlagIconImg} {
            box-shadow: 0 0 10px #00FF41; /* Keeps the golden shadow */
        }
    `}
`;
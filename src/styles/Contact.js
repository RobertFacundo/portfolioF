import styled from "styled-components";

export const StyledContactContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;
    width: 100%;

    a {
        color: #fff;
        font-size: 3rem;
        transition: all 0.5s ease-in-out;

        &:hover {
            transform: scale(1.1);
            color: #00FF41;
        }
    }
`
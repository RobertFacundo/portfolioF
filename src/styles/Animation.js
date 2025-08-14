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

export const StyledAnimationContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 0.8rem;
   padding: 0.3rem 0;
   width: 100%;
   cursor: pointer;
   /* border-right: 2px solid rgba(255, 255, 255, 0.2); */
   border-bottom: 2px solid rgba(255, 255, 255, 0.2);
   border-top: 2px solid rgba(255, 255, 255, 0.2);
`;

export const StyledLogoLink = styled.a`
    width: 70px;
    height: auto;
    opacity: 0;
    transition: transform 0.3s ease-in-out;

    animation: ${slideIn} 0.6s ease-out forwards;
    animation-delay: ${({index})=> index * 0.3}s;

    &:hover {
        transform: scale(1.2);
    }
`

export const StyledLogoImage = styled.img.attrs(props =>({
    title: props.alt,
}))`
    width: 100%;
    height: auto;
`


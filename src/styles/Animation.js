import styled, { keyframes } from "styled-components";

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
   border-bottom: 1px solid rgba(0, 255, 65, 0.1);;
   border-top: 1px solid rgba(0, 255, 65, 0.2);;

   @media (max-width: 768px){
     padding: 5px 8px;
      border-top: none; /* quitamos el border original */
      border-bottom: none;

      /* Creamos bordes con pseudo-elementos que respeten el padding */
      position: relative;

      &::before, &::after {
         content: "";
         position: absolute;
         left: 30px; /* mismo que padding */
         right: 30px;
         height: 2px;
         background-color: rgba(255, 255, 255, 0.2);
      }

      &::before {
         top: 0;
      }

      &::after {
         bottom: 0;
      }
   }
`;

export const StyledLogoLink = styled.a`
     width: ${({ category }) => {
        if (category === 'core') return '80px';
        if (category === 'tools') return '30px';
        return '50px';
    }};
  height: auto;

  opacity: ${({ category }) => {
        if (category === 'core') return 1;
        if (category === 'tools') return 0.7;
        return 0.85;
    }};

  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  animation: ${slideIn} 0.6s ease-out forwards;
  animation-delay: ${({ index }) => index * 0.3}s;

  &:hover {
    transform: ${({ category }) => {
        if (category === 'core') return 'scale(1.25)';
        if (category === 'secondary') return 'scale(1.1)';
        return 'scale(1.15)';
    }};
    opacity: 1;
  }
`

export const StyledLogoImage = styled.img.attrs(props => ({
  title: `${props.alt} ${props.category === 'core' ? '- Core stack' : ''}`,
}))`
  width: 100%;
  height: auto;
`;


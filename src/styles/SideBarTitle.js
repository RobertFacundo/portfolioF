import styled, { keyframes } from "styled-components";

const typing = keyframes`
  0%, 100% { content: ""; }
  2.5% { content: "F"; }
  5% { content: "Fa"; }
  7.5% { content: "Fac"; }
  10% { content: "Facu"; }
  12.5% { content: "Facun"; }
  15% { content: "Facund"; }
  17.5% { content: "Facundo"; }
  20% { content: "Facundo "; }
  22.5% { content: "Facundo R"; }
  25% { content: "Facundo Ro"; }
  27.5% { content: "Facundo Rob"; }
  30% { content: "Facundo Robe"; }
  32.5% { content: "Facundo Rober"; }
  35% { content: "Facundo Robert"; }
  60%, 100% { content: "Facundo Robert"; } 
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const StyledSideBarTitle = styled.h1`
  position: relative;
  font-size: 2.1em;
  color: #00FF41; 
  letter-spacing: 2px;
  
  
  
  &::before {
    content: " "; 
    animation: ${typing} 16s steps(14) 1 forwards; 
  }

  &::after {
    content: "|"; 
    border-right: 3px solid transparent; 
    animation: ${blink} 0.6s linear infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8;
    letter-spacing: 3px;
  }
`;

export const Wrapper = styled.div`
  margin-left: 1rem;
  display: grid;
  place-items: center;
`;
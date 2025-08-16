// src/styles/NavBarStyles.js
import styled from "styled-components";
// No need to import constants if you're using raw values, as requested earlier.
// If you decide to re-introduce constants later, you'd add:
// import { colors, spacing, fonts } from './constants';


export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between; /* Spreads out items evenly */
  align-items: center;
  padding: 1rem 2rem;
  padding-bottom: 0;
  background-color: #000000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Comfortaa', cursive; /* Make sure this font is imported globally if used */

  @media (max-width: 768px){
    flex-direction: column;
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;  
`

export const NavList = styled.ul`
  display: flex;
  gap: 12rem; /* Large space between the navigation links */
  margin-left: 10rem;

  @media (max-width: 768px){
    gap:0;
    margin-left: 0;
    flex-wrap: wrap;
  }
`;

export const NavItem = styled.li`
  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: #ffffff;
    font-family: 'VT323', monospace;
    font-size: 1.8rem; /* Base font size */
    letter-spacing: 6px;
    overflow: hidden;
    border: none;

    transform: scale(1);
    transition: color 0.3s ease, transform 0.5s ease; /* Animate both color and font size */
    text-transform: uppercase;

    &:hover {
      color: #00FF41;
      transform: scale(1.2);
    }

    &.active {
      transform: scale(1.2);
      color: #00FF41;
    }

    @media (max-width: 768px){
      font-size: 0.6;
    }
  }
`;
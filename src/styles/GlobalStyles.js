import { createGlobalStyle } from "styled-components";
import { colors, fonts, spacing } from "./constants";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html{
    font-size: 16px;
    padding: 0;
    margin: 0;
    height: 100%;
  }

  body{
    font-family: 'Oxanium', sans-serif; 
    color: ${colors.white};
    background-color: ${colors.black};
    line-height: 1.6;
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  ul {
    list-style: none;
  }

  #root{
    height: 100%;
  }
   
`;

export default GlobalStyle;
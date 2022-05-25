import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    color: #FFFFFF;
    background-color: #232323;
  }
  
  h1 {
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 300;
    font-family: 'Montserrat', serif;
  }
`;
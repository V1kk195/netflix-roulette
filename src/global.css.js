import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', serif;
    color: #FFFFFF;
    font-size: 16px;
    margin: 0;
  }
  
  body {
    background-color: #555555;
    margin: 0;
  }
  
  h1 {
    color: #FFFFFF;
    font-size: 40px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 36px;
  }
  
  h2 {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.7;
    line-height: 22px;
    margin: 0;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.7;
    margin: 0;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`;

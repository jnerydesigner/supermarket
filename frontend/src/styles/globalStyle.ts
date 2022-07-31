import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
    font-family: 'Cairo', sans-serif;
  }
  body{
    width: 100%;
    height: 100%;
    max-height: 100vh;
    background-color: #2D3436;
    display: flex;
  }
`;

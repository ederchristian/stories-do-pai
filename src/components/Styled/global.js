import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0E1436;
    color: #FFF;
    max-width: 90%;
    margin: auto;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    padding: 32px 0;
    position: relative;

    @media screen and (min-width: 1100px) {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      height: 100vh;
      padding: 0;
    }
  }
  
  #root {
    width: 100%;
    margin: 0 auto;
  }

  .iphone {
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 350px;
    }

    @media screen and (min-width: 1100px) {
      width: 315px;
    }
  }
`

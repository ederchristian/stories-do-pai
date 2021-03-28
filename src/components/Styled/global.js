import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    --blue: #0e1436;
    --red: #e80c4d;
    --white: #fff;

    --mainTransition: all 0.5s ease;

    background-color: var(--blue);
    color: var(--white);
    max-width: 90%;
    margin: auto;
    font-weight: 300;
    font-family: "Roboto", sans-serif;
    padding: 32px 0;
    position: relative;
  }
  
  #root {
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 1100px) {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      padding: 0;
    }
  }
`

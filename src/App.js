import React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000;
    color: #FFF;
    max-width: 90%;
    margin: auto;
    font-weight: 300;
  }

  @media screen and (min-width: 1100px) {
    body {
      max-width: 1200px;
    }
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px 0;

  @media screen and (min-width: 1100px) {
    padding: 32px 0;
  }
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 16px;

  @media screen and (min-width: 1100px) {
    font-size: 34px;
  }
`

const Subtitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  padding-bottom: 32px;

  @media screen and (min-width: 1100px) {
    font-size: 20px;
    max-width: 600px;
    margin: auto;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>
        <Title>Stories do Pai</Title>
        <Subtitle>
          Gere alguns dos maiores ensinamentos de 12 anos de experiência de
          Ícaro de Carvalho
        </Subtitle>
      </Header>
    </React.Fragment>
  )
}

export default App

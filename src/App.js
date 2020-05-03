import React from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components"
import { fadeInLeft } from "react-animations"
import RandomStory from "./components/RandomStory/RandomStory"

const GlobalStyle = createGlobalStyle`
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
`

const LinkGitHub = styled.a`
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  margin: 0 auto;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-align: center;

  @media screen and (min-width: 1100px) {
    top: 12px;
    left: initial;
  }
`

const Main = styled.div`
  @media screen and (min-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  animation: 2s ${keyframes`${fadeInLeft}`};

  @media screen and (min-width: 1100px) {
    align-items: flex-start;
    padding: 32px 0;
  }
`

const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 16px;

  @media screen and (min-width: 1100px) {
    font-size: 44px;
  }
`

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  padding-bottom: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 500px;
    margin: auto;
  }

  @media screen and (min-width: 1100px) {
    font-size: 28px;
    max-width: 500px;
    text-align: initial;
  }
`

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <LinkGitHub
        href="https://github.com/ederchristian/stories-do-pai"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ver no GitHub
      </LinkGitHub>

      <Main>
        <Header>
          <Title>Stories do Pai</Title>
          <Subtitle>
            Gere stories do Instagram com alguns dos maiores ensinamentos de +12
            anos de experiência de Ícaro de Carvalho
          </Subtitle>
        </Header>

        <RandomStory />
      </Main>
    </React.Fragment>
  )
}

export default App

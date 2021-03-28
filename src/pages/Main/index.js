import React from "react"

import LogoEder from "../../static/assets/svg/logo-eder-christian.svg"

import Header from "../../components/Header"
import RandomStory from "../../components/RandomStory"

import * as Styled from "./styled"

function App() {
  return (
    <Styled.Main>
      <Styled.LinkEder
        href="https://ederchristian.com"
        rel="noopener noreferrer"
      >
        <Styled.Logo src={LogoEder} alt="Logo Eder Christian" />
      </Styled.LinkEder>
      <Header />
      <RandomStory />
    </Styled.Main>
  )
}

export default App

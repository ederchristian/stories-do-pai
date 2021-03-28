import React from "react"

import LogoEder from "../../static/assets/svg/logo-eder-christian.svg"

import Header from "../../components/Header"
import RandomStory from "../../components/RandomStory"

import * as Styled from "./styled"

function App() {
  return (
    <Styled.Main>
      <Styled.Logo src={LogoEder} alt="Logo Eder Christian" />
      <Header />
      <RandomStory />
    </Styled.Main>
  )
}

export default App

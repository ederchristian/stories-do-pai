import React from "react"

import Header from "../../components/Header"
import RandomStory from "../../components/RandomStory/RandomStory"

import * as Styled from "./styled"

function App() {
  return (
    <Styled.Main>
      <Header />
      <RandomStory />
    </Styled.Main>
  )
}

export default App

import React from "react"
import { GlobalStyle, LinkGitHub, Main, Header, Title, Subtitle } from "./style"
import RandomStory from "./components/RandomStory/RandomStory"

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

import React from "react"

import Main from "./pages/Main"

import { GlobalStyle } from "./components/Styled/global"
import { LinkGitHub } from "./style"

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

      <Main />
    </React.Fragment>
  )
}

export default App

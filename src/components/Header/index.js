import React from "react"

import AdSense from "react-adsense"

import * as Styled from "./styled"

export default function Header() {
  return (
    <Styled.Header>
      <Styled.Title>Stories do Pai</Styled.Title>
      <Styled.Subtitle>
        Gere stories do Instagram com alguns dos maiores ensinamentos de +12
        anos de experiência de Ícaro de Carvalho
      </Styled.Subtitle>
      <Styled.LinkGitHub
        href="https://github.com/ederchristian/stories-do-pai"
        rel="noopener noreferrer"
        target="_blank"
      >
        Ver no GitHub
      </Styled.LinkGitHub>
      <AdSense.Google
        client="ca-pub-3992890004059934"
        slot=""
        style={{ display: "block", width: "100%" }}
        layout="in-article"
        format="fluid"
      />
    </Styled.Header>
  )
}

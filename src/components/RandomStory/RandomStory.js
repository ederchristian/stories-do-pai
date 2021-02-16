import React, { useState, useEffect } from "react"

import Icaro from "../../static/assets/img/icaro-de-carvalho.jpg"
import { ReactComponent as Iphone } from "../../static/assets/svg/iphone-x.svg"

import { GlobalStyle } from "../Styled/global"
import * as Styled from "./style"

export default function RandomStory() {
  const [stories, setStories] = useState(null)

  const data =
    "https://raw.githubusercontent.com/ederchristian/stories-do-pai/master/src/stories.json"

  const getData = () => {
    fetch(data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (stories) {
        setStories(stories)
      })
  }

  useEffect(() => {
    getData()
  }, [data])

  // randomStoryHandler = () => {
  //   const randomNumber = Math.floor(Math.random() * this.state.stories.length)
  //   const randomStory = this.state.stories[randomNumber]

  //   this.setState({
  //     randomStory,
  //   })
  // }

  return (
    <Styled.Container>
      <GlobalStyle />

      <Styled.ContainerStories>
        <Iphone className="iphone" />

        <Styled.ContainerStoriesContent>
          <Styled.ContainerStoriesContentHeader>
            <img src={Icaro} alt="Ícaro de Carvalho" />
            <a
              href="https://instagram.com/icaro.decarvalho"
              rel="noopener noreferrer"
              target="_blank"
            >
              icaro.decarvalho
            </a>
            <span>X</span>
          </Styled.ContainerStoriesContentHeader>

          {/* <Styled.BoxQuestion>
            <Styled.BoxQuestionHeader>
              <Styled.BoxQuestionHeaderTitle>
                Consultoria grátis.
              </Styled.BoxQuestionHeaderTitle>
            </Styled.BoxQuestionHeader>

            <Styled.BoxQuestionBody>
              <Styled.Question>
                {stories !== null &&
                  stories.question}
              </Styled.Question>
            </Styled.BoxQuestionBody>
          </Styled.BoxQuestion>

          <Styled.Answer>
            {stories !== null &&
              stories.answer
                .split("\n")
                .map(function (item, key) {
                  return (
                    <span key={key}>
                      {item}
                      <br />
                    </span>
                  )
                })}
          </Styled.Answer> */}
        </Styled.ContainerStoriesContent>
      </Styled.ContainerStories>

      <Styled.Button>Gerar novo story</Styled.Button>
      {/* <Styled.Button onClick={this.randomStoryHandler}>Gerar novo story</Styled.Button> */}
    </Styled.Container>
  )
}

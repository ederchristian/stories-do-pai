import React, { useCallback, useState, useEffect } from "react"

import Icaro from "../../static/assets/img/icaro-de-carvalho.jpg"
import { ReactComponent as Iphone } from "../../static/assets/svg/iphone-x.svg"

import { GlobalStyle } from "../Styled/global"
import * as Styled from "./style"

export default function RandomStory() {
  const [stories, setStories] = useState(null)
  const [randomStory, setRandomStory] = useState(null)

  const data =
    "https://raw.githubusercontent.com/ederchristian/stories-do-pai/master/src/stories.json"

  const getData = () => {
    fetch(data)
      .then(function (response) {
        return response.json()
      })
      .then(function (stories) {
        setStories(stories.stories)
      })
  }

  useEffect(() => {
    getData()
  }, [data])

  useEffect(() => {
    randomStoryHandler()
  }, [stories])

  const randomStoryHandler = useCallback(() => {
    if (stories !== null) {
      const randomNumber = Math.floor(Math.random() * stories.length)
      const randomStory = stories[randomNumber]

      setRandomStory(randomStory)
    }
  }, [stories])

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

          <Styled.BoxQuestion>
            <Styled.BoxQuestionHeader>
              <Styled.BoxQuestionHeaderTitle>
                Consultoria grátis.
              </Styled.BoxQuestionHeaderTitle>
            </Styled.BoxQuestionHeader>

            <Styled.BoxQuestionBody>
              <Styled.Question>
                {randomStory !== null && randomStory.question}
              </Styled.Question>
            </Styled.BoxQuestionBody>
          </Styled.BoxQuestion>

          <Styled.Answer>
            {randomStory !== null &&
              randomStory.answer.split("\n").map(function (item, key) {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                )
              })}
          </Styled.Answer>
        </Styled.ContainerStoriesContent>
      </Styled.ContainerStories>

      <Styled.Button onClick={randomStoryHandler}>
        Gerar novo story
      </Styled.Button>
    </Styled.Container>
  )
}

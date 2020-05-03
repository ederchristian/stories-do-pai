import React from "react"
import {
  GlobalStyle,
  Button,
  Container,
  ContainerStories,
  ContainerStoriesContent,
  ContainerStoriesContentHeader,
  BoxQuestion,
  BoxQuestionHeader,
  BoxQuestionHeaderTitle,
  BoxQuestionBody,
  Question,
  Answer,
} from "./style"
import { ReactComponent as Iphone } from "../../static/assets/svg/iphone-x.svg"
import Icaro from "../../static/assets/img/icaro-de-carvalho.jpg"

const API =
  "https://raw.githubusercontent.com/ederchristian/stories-do-pai/master/src/stories.json"

class RandomStory extends React.Component {
  state = {
    stories: null,
    randomStory: null,
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          stories: data.stories,
        })
      })
  }

  randomStoryHandler = () => {
    const randomNumber = Math.floor(Math.random() * this.state.stories.length)
    const randomStory = this.state.stories[randomNumber]

    this.setState({
      randomStory,
    })
  }

  render() {
    return (
      <Container>
        <GlobalStyle />

        <ContainerStories>
          <Iphone className="iphone" />

          <ContainerStoriesContent>
            <ContainerStoriesContentHeader>
              <img src={Icaro} alt="Ícaro de Carvalho" />
              <a
                href="https://instagram.com/icaro.decarvalho"
                rel="noopener noreferrer"
                target="_blank"
              >
                icaro.decarvalho
              </a>
              <span>X</span>
            </ContainerStoriesContentHeader>

            <BoxQuestion>
              <BoxQuestionHeader>
                <BoxQuestionHeaderTitle>
                  Consultoria grátis.
                </BoxQuestionHeaderTitle>
              </BoxQuestionHeader>

              <BoxQuestionBody>
                <Question>
                  {this.state.randomStory !== null &&
                    this.state.randomStory.question}
                </Question>
              </BoxQuestionBody>
            </BoxQuestion>

            <Answer>
              {this.state.randomStory !== null &&
                this.state.randomStory.answer
                  .split("\n")
                  .map(function (item, key) {
                    return (
                      <span key={key}>
                        {item}
                        <br />
                      </span>
                    )
                  })}
            </Answer>
          </ContainerStoriesContent>
        </ContainerStories>

        <Button onClick={this.randomStoryHandler}>Gerar novo story</Button>
      </Container>
    )
  }
}

export default RandomStory

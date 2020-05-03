import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { ReactComponent as Iphone } from "../../static/assets/svg/iphone-x.svg"
import Icaro from "../../static/assets/img/icaro-de-carvalho.jpg"

const GlobalStyle = createGlobalStyle`
  .iphone {
    width: 100%;

    @media screen and (min-width: 768px) {
      width: 350px;
    }

    @media screen and (min-width: 1100px) {
      width: 315px;
    }
  }
`

const Button = styled.button`
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background-color: #e80c4d;
  border: 2px solid #e80c4d;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;

  &:hover {
    background-color: #0e1436;
    color: #e80c4d;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    margin: auto;
  }

  @media screen and (min-width: 1100px) {
    width: 100%;
  }
`

const Container = styled.div`
  @media screen and (min-width: 1100px) {
    max-width: 400px;
  }
`

const ContainerStories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 32px;
  position: relative;
`

const ContainerStoriesContent = styled.div`
  position: absolute;
  top: 50px;
  width: 80%;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 1100px) {
    top: 45px;
    width: 80%;
  }
`

const ContainerStoriesContentHeader = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dashed #fff;
  padding: 8px 0 12px;
  position: relative;

  & img {
    height: 25px;
    border-radius: 50px;
  }

  & a {
    font-size: 12px;
    font-weight: 700;
    text-decoration: none;
    margin-left: 12px;
    color: #fff;
  }

  & span {
    position: absolute;
    right: 0;
    top: 10px;
    font-weight: 100;
    -webkit-transform: scale(1.5, 1);
    -moz-transform: scale(1.5, 1);
    -ms-transform: scale(1.5, 1);
    -o-transform: scale(1.5, 1);
    transform: scale(1.5, 1);
  }
`

const BoxQuestion = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 12px;
`

const BoxQuestionHeader = styled.div`
  width: 100%;
  background-color: #bc2968;
  padding: 8px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const BoxQuestionHeaderTitle = styled.div`
  color: #fff;
  font-size: 11px;
`

const BoxQuestionBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`

const Question = styled.h3`
  color: #bc2968;
  font-size: 11px;
`

const Answer = styled.p`
  font-size: 11px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
`

const API =
  "https://raw.githubusercontent.com/ederchristian/stories-do-pai/master/src/stories.json?token=ACGU4E7YY4DXOQQO4QFPKRC6VZDXU"

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

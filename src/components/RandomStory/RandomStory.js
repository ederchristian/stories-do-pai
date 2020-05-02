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
      width: 310px;
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
  top: 80px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 1099px) {
    width: 275px;
  }

  @media screen and (min-width: 1100px) {
    top: 50px;
    width: 80%;
  }
`

const ContainerStoriesContentHeader = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dashed #fff;
  padding: 8px 0 16px;

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
`

const Question = styled.h3`
  font-size: 14px;
  padding-bottom: 16px;
`

const Answer = styled.p`
  font-size: 11px;
  line-height: 1.5;
`

const API =
  "https://raw.githubusercontent.com/ederchristian/stories-do-pai/master/src/stories.json?token=ACGU4E6QRFXSQIMT75FOYOS6VXSLG"

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
              >
                icaro.decarvalho
              </a>
            </ContainerStoriesContentHeader>

            <Question>
              {this.state.randomStory !== null &&
                this.state.randomStory.question}
            </Question>

            <Answer>
              {this.state.randomStory !== null && this.state.randomStory.answer}
            </Answer>
          </ContainerStoriesContent>
        </ContainerStories>

        <Button onClick={this.randomStoryHandler}>Gerar novo story</Button>
      </Container>
    )
  }
}

export default RandomStory

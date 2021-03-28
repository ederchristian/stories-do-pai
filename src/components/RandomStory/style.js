import styled, { keyframes } from "styled-components"
import { fadeInRight } from "react-animations"

export const Container = styled.div`
  position: relative;
  animation: 2s ${keyframes`${fadeInRight}`};

  @media screen and (min-width: 1100px) {
    max-width: 400px;
  }
`

export const ContainerStories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 32px;
  position: relative;
`

export const ContainerStoriesContent = styled.div`
  position: absolute;
  top: 50px;
  width: 80%;
  max-width: 290px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 1100px) {
    top: 45px;
    width: 80%;
  }
`

export const ContainerStoriesContentHeader = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px dashed var(--white);
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
    color: var(--white);
  }

  & span {
    position: absolute;
    right: 0;
    top: 10px;
    font-weight: 100;
    transform: scale(1.5, 1);
  }
`

export const BoxQuestion = styled.div`
  width: 100%;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 12px;
`

export const BoxQuestionHeader = styled.div`
  width: 100%;
  background-color: var(--red);
  padding: 8px 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const BoxQuestionHeaderTitle = styled.div`
  color: var(--white);
  font-size: 11px;
`

export const BoxQuestionBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`

export const Question = styled.h3`
  color: var(--red);
  font-size: 11px;
`

export const Answer = styled.p`
  font-size: 11px;
  font-weight: 700;
  line-height: 1.5;
  text-align: left;
`

export const Button = styled.button`
  width: 90%;
  color: var(--white);
  font-size: 16px;
  font-weight: 700;
  background-color: var(--red);
  border: 2px solid var(--red);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--mainTransition);

  @media screen and (max-width: 1023px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 32px;
    margin: auto;
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    margin: auto;
  }

  @media screen and (min-width: 1100px) {
    width: 100%;

    &:hover {
      background-color: var(--blue);
      color: var(--red);
    }
  }
`

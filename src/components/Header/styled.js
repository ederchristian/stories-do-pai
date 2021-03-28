import styled, { keyframes } from "styled-components"
import { fadeInLeft } from "react-animations"

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  animation: 2s ${keyframes`${fadeInLeft}`};

  @media screen and (min-width: 1100px) {
    align-items: flex-start;
    padding: 32px 0;
  }
`

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 28px;
  font-weight: 700;
  padding-bottom: 16px;

  @media screen and (min-width: 1100px) {
    font-size: 44px;
  }
`

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.6;
  padding-bottom: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    max-width: 500px;
    margin: auto;
  }

  @media screen and (min-width: 1100px) {
    font-size: 28px;
    max-width: 500px;
    text-align: initial;
  }
`

export const LinkGitHub = styled.a`
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 32px;
`

export const AdSenseWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1100px) {
    width: 100%;
  }
`

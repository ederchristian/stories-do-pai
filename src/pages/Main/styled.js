import styled from "styled-components"

export const Main = styled.div`
  position: relative;
  text-align: center;

  @media screen and (min-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 32px;

  @media screen and (min-width: 1100px) {
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 0;
  }
`

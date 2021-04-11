import styled from "styled-components"
import github from './assets/github.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import codepen from './assets/codepen.svg'
import { useState } from "react"


export const Footer = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <Container>
      <h3>developed and designed by <Underlined onMouseEnter={() => setHovered(true)}
        onClick={() => setHovered((prev) => !prev)}
        onMouseLeave={() => setHovered(false)}>me{hovered && <Popup>shubham chopade &#169; {new Date().getFullYear()}</Popup>}</Underlined></h3>
      <div>
        <img src={linkedin} />
        <img src={instagram} />
        <img src={github} />
        <img src={codepen} />
      </div>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin: 2rem auto;

            @media ${(props) => props.theme.breakpoints.tablet} {
         flex-direction: column;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 10rem;
        margin-bottom: 2rem;

        img {
            width: 25px;
            cursor: pointer;

            &:hover{
                filter: brightness(120%);
                transform: scale(1.05);
            }
            &:active{
                filter: brightness(130%);
                transform: scale(0.95);
            }
        }
    }
    
    h3 {
        font-family: Noto Sans JP;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 52px;
        color: ${props => props.theme.text.main};

        @media ${(props) => props.theme.breakpoints.tablet} {
         font-size: 18px;
    }
    }
`

const Underlined = styled.span`
  text-decoration: underline dotted;
  position: relative;
  font-style: italic;
  cursor: pointer;
`

const Popup = styled.p`
  font-size: 1rem;
  padding: 0.8rem;
  line-height: 100%;
  width: 14rem;
  position: absolute;
  bottom: 40px;
  left: -70px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.bg.secondary};
  color: ${(props) => props.theme.text.main};
  z-index: 10;

  /* @media ${(props) => props.theme.breakpoints.tablet} {
    top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 30px;
  } */

  &::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 60px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${(props) => props.theme.bg.secondary};
    transform: rotate(180deg)
  }
`;
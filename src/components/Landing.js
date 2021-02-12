import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { ScrollAnimation } from "./ScrollAnimation";
import { ScrollText } from "./ScrollText";
import { Slider } from "./Slider";

export const Landing = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <LandingWrapper>
      <HeroText>
        Hi, I am Shubham Chopade. An{" "}
        <Utilitarian
          onMouseEnter={() => setHovered(true)}
          onClick={() => setHovered((prev) => !prev)}
          onMouseLeave={() => setHovered(false)}
        >
          Utilitarian
          {hovered && <Popup>designed to be useful or practical</Popup>}
        </Utilitarian>{" "}
        building amazing products.
      </HeroText>

      <Slider />
      {/* <ScrollAnimation /> */}
      <ScrollText />
      <Button to="/about" text="Hire Me" />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.section``;
const HeroText = styled.p`
  font-size: 4rem;
  max-width: 70rem;
  width: 80%;
  color: ${(props) => props.theme.text.main};
  margin: 0 auto;
  margin-top: 3rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 1.5rem;
  }
`;
const Popup = styled.p`
  padding: 0.6rem;
  font-size: 0.8rem;
  width: 9rem;
  position: absolute;
  top: 80px;
  left: 0;
  border-radius: 2px;
  background-color: ${(props) => props.theme.bg.secondary};
  color: ${(props) => props.theme.text.main};
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.tablet} {
    top: 40px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid ${(props) => props.theme.bg.secondary};
  }
`;
const Utilitarian = styled.span`
  text-decoration: underline dotted;
  position: relative;
  font-style: italic;
`;

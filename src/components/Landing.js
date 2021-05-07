import { useState } from "react";
import styled from "styled-components";
import { Popup } from "./Common";
import { Footer } from "./Footer";
import { Projects } from "./Projects";
import { ScrollText } from "./ScrollText";
import { Slider } from "./Slider";

export const Landing = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <LandingWrapper>
      <HeroText>
        Hi, I am Shubham Chopade. A{" "}
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
      <Projects />
      <ScrollText />
      <Footer />
    </LandingWrapper>
  );
};

const LandingWrapper = styled.section``;
const HeroText = styled.p`
  font-size: 4rem;
  max-width: 70rem;
  width: 90%;
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

const Utilitarian = styled.span`
  text-decoration: underline dotted;
  position: relative;
  font-style: italic;
  cursor: pointer;
`;

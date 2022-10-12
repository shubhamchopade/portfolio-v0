import { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
import styled from "styled-components";
import { Button } from "./Button";

export const ScrollText = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isScrolled, setIsScrolled] = useState(0);
  const { scrollY } = useViewportScroll();

  const svgVariants = {
    hidden: {},
    visible: {},
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrolled = (winScroll / height) * 100;

      setIsScrolled(scrolled);
      // console.log(scrolled, isComplete);
    });
  }, [scrollY]);

  return (
    <Wrapper>
      <Container>
        <SVG
          width="1020"
          height="100"
          viewBox="0 0 1020 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <Text
            x="10%"
            y="50%"
            text-anchor="middle"
            str={isScrolled}
            fil={isComplete}
          >
            GET YOUR WORK DONE
          </Text>
        </SVG>
      </Container>
      <div style={{ height: "30vh" }}>
        <Button
          str={isScrolled}
          fil={isComplete}
          margin="auto"
          href="https://www.linkedin.com/in/shubham-chopade/"
          text="Hire Me"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 3rem 0;
`;
const Container = styled.section`
  height: 200vh;
`;
const SVG = styled.svg.attrs((props) => ({}))`
  position: sticky;
  top: 30%;
  left: 50%;
  width: 100%;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 20%;
  }
`;
const Text = styled.text.attrs((props) => ({
  strokeOpacity: props.str + "%",
  fillOpacity: props.str > 90 ? props.str + "%" : 0,
}))`
  font-size: 4rem;
  font-weight: bold;
  stroke: ${(props) => props.theme.text.main};
  fill: ${(props) => props.theme.text.main};
  transition: opacity 0.5s ease-in-out;
`;

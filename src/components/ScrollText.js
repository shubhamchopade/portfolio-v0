import { useEffect, useRef, useState } from "react";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";
import { Button } from "./Button";

export const ScrollText = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isScrolled, setIsScrolled] = useState(0);
  const { scrollYProgress, scrollY } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  const svgVariants = {
    hidden: {},
    visible: {},
  };

  useEffect(() => {
    yRange.onChange((v) => setIsComplete(v >= 1));
  }, [yRange]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrolled = (winScroll / height) * 100;

      setIsScrolled(scrolled);
      isScrolled === 100 && setIsComplete(true);

      console.log(scrolled, isComplete);
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
      <Button
        height="50vh"
        str={isScrolled}
        fil={isComplete}
        margin="0 auto"
        to="/about"
        text="Hire Me"
      />
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
  top: 50%;
  left: 50%;
  width: 100%;
  margin: auto;
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

import { useEffect, useState } from "react";
import styled from "styled-components";
import shubham from "./assets/shubham.png";
import thugLife from "./assets/thugLife.png";
import xmas from "./assets/xmasCap.png";
import { motion, AnimatePresence } from "framer-motion";

export const Slider = () => {
  const data = ["UI/UX DESIGN", "INSTAGRAM", "DEVELOPMENT"];
  const [counter, setCounter] = useState(2);
  const [service, setService] = useState("UI/UX DESIGN");

  const first = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 20,
      opacity: 0,
    },
  };
  const imgVariants = {
    initial: {
      x: "-100vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "100",
      opacity: 0,
    },
  };

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 2000);
    counter === 0 && setTimeout(() => setCounter(2), 2000);
    setService(data[counter]);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <SliderWrapper>
      <Text>
        <p className="slider-heading">I can help you with</p>
        <Dash />
        <AnimatePresence exitBeforeEnter>
          {" "}
          {service === "UI/UX DESIGN" && (
            <SlidingText
              variants={first}
              initial="initial"
              animate="animate"
              exit="exit"
              key="UI/UX DESIGN"
            >
              UI/UX DESIGN
            </SlidingText>
          )}
          {service === "INSTAGRAM" && (
            <SlidingText
              variants={first}
              initial="initial"
              animate="animate"
              exit="exit"
              key="INSTAGRAM"
            >
              INSTAGRAM
            </SlidingText>
          )}
          {service === "DEVELOPMENT" && (
            <SlidingText
              variants={first}
              initial="initial"
              animate="animate"
              exit="exit"
              key="DEVELOPMENT"
            >
              DEVELOPMENT
            </SlidingText>
          )}
        </AnimatePresence>

        <Dash />
      </Text>
      <Shubham>
        <img className="shubham" src={shubham} />
        <AnimatePresence exitBeforeEnter>
          {service === "UI/UX DESIGN" && (
            <motion.img
              key="UI/UX DESIGN"
              variants={imgVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="thugLife"
              src={thugLife}
            />
          )}
          {service === "DEVELOPMENT" && (
            <motion.img
              key="DEVELOPMENT"
              variants={imgVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="xmas"
              src={xmas}
            />
          )}
        </AnimatePresence>
      </Shubham>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.section`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto;
`;
const Text = styled.div`
  position: relative;
  .slider-heading {
    font-size: 2rem;
    font-weight: normal;
    color: ${(props) => props.theme.text.secondary};

    @media ${(props) => props.theme.breakpoints.tablet} {
      font-size: 1rem;
    }
  }
`;
const SlidingText = styled(motion.p).attrs({
  originX: 0.5,
})`
  position: absolute;
  top: 40px;
  font-size: 2.6rem;
  font-weight: bold;
  max-width: 50rem;
  width: 29rem;
  font-size: 4rem;
  margin: 2rem 0;
  color: ${(props) => props.theme.text.main};

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 23rem;
    font-size: 3rem;
    top: 25px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 15rem;
    font-size: 2rem;
    top: 30px;
  }
`;
const Shubham = styled.div`
  position: relative;
  .shubham {
    width: 20rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      width: 15rem;
    }
    @media ${(props) => props.theme.breakpoints.mobile} {
      width: 10rem;
    }
  }
  .thugLife {
    position: absolute;
    width: 7rem;
    top: 105px;
    left: 110px;

    @media ${(props) => props.theme.breakpoints.tablet} {
      width: 5rem;
      top: 75px;
      left: 85px;
    }
    @media ${(props) => props.theme.breakpoints.mobile} {
      width: 4rem;
      top: 50px;
      left: 52px;
    }
  }
  .xmas {
    width: 15rem;
    position: absolute;
    top: -90px;
    left: 70px;

    @media ${(props) => props.theme.breakpoints.tablet} {
      width: 10rem;
      top: -60px;
      left: 60px;
    }
    @media ${(props) => props.theme.breakpoints.mobile} {
      width: 8rem;
      top: -50px;
      left: 30px;
    }
  }
`;
const Dash = styled.div`
  width: 7rem;
  height: 0.1rem;
  margin: 0 auto;
  background-color: ${(props) => props.theme.text.main};
  margin-top: 1.5rem;
  margin-bottom: 6rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-bottom: 5.5rem;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-bottom: 5rem;
  }
`;

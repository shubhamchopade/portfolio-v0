import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextBlock, TextBlockHeading } from "./Common";
import projectsData from "./projectsData";

export const Project = ({ children }) => {
  return (
    <Wrapper>
      <div>
        <p className="color slider-heading">Checkout my best projects</p>
        <TextBlock>
          These projects are solely based on solving the very basic problems.
        </TextBlock>
      </div>
      <hr />
      {projectsData.map((project, key) => {
        const { id, img, heading, shortDescription, aboutLink, liveLink } =
          project;
        return (
          <ProjectComponent
            key={key}
            id={id}
            img={img}
            heading={heading}
            shortDescription={shortDescription}
            aboutLink={aboutLink}
            liveLink={liveLink}
          >
            {children}
          </ProjectComponent>
        );
      })}
    </Wrapper>
  );
};

export const ProjectComponent = ({
  img,
  heading,
  shortDescription,
  aboutLink,
  liveLink,
}) => {
  return (
    <>
      <LocalContainer>
        <ProjectContainer>
          <img src={img} />
          <TextContainer>
            <TextBlockHeading>{heading}</TextBlockHeading>
            <TextBlock>{shortDescription}</TextBlock>
          </TextContainer>
        </ProjectContainer>

        <LinksContainer>
          <Link to={aboutLink} className="btn-link effect">
            About
          </Link>
          <a
            href={liveLink}
            target="_blank"
            className="btn-link effect"
            rel="noreferrer"
          >
            Check Live
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z"
                fill="#C2AB8E"
              />
              <path
                d="M19 19H5V5H12L10 3H5C3.897 3 3 3.897 3 5V19C3 20.103 3.897 21 5 21H19C20.103 21 21 20.103 21 19V14L19 12V19Z"
                fill="#C2AB8E"
              />
            </svg>
          </a>
        </LinksContainer>
      </LocalContainer>
      <hr />
    </>
  );
};

const LocalContainer = styled.main`
  margin: 2rem auto;

  &:hover a svg {
    transform: translateX(2px);
  }
  &:hover a svg path {
    fill: #ff8e00;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: unset;
  }

  img {
    width: 25rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
      width: 100%;
    }
  }
`;
const TextContainer = styled.div`
  max-width: 30rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-left: 2rem;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    margin: 1rem 0;
  }
`;

const Wrapper = styled.section`
  max-width: 70rem;
  width: 90%;
  margin: 2rem auto;

  .color {
    color: ${(props) => props.theme.text.secondary};
  }

  .slider-heading {
    font-size: 2rem;
    font-weight: bold;
    line-height: 100%;
    margin: 1rem 0;

    @media ${(props) => props.theme.breakpoints.tablet} {
      font-size: 1.5rem;
    }
  }
  .slider-subheading {
    font-size: 1.3rem;
    font-weight: medium;
    margin: 1rem 0;
    color: ${(props) => props.theme.text.neutral};
  }
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  max-width: 15rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    max-width: 12rem;
  }

  .btn-link {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.text.secondary};
    text-decoration: none;

    @media ${(props) => props.theme.breakpoints.tablet} {
      font-size: 1rem;
    }

    svg {
      width: 1.3rem;
      margin-left: 0.5rem;
      transition: 0.1s;

      path {
        fill: ${(props) => props.theme.text.secondary};
      }
    }
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectsData from "./projectsData";

export const Project = ({ children }) => {
    return (
        <Wrapper>
            <div>
                <p className="color slider-heading">Checkout my best projects</p>
                <p className="color slider-subheading">
                    These projects are solely based on solving the very basic problems.
        </p>
            </div>
            <hr />
            {projectsData.map((project) => {
                const {
                    id,
                    img,
                    heading,
                    shortDescription,
                    aboutLink,
                    liveLink,
                } = project;
                return (
                    <ProjectComponent
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
                        <h3>{heading}</h3>
                        <p>{shortDescription}</p>
                    </TextContainer>
                </ProjectContainer>

                <LinksContainer>
                    <Link to={aboutLink} className="btn-link">
                        About
        </Link>
                    <a href={liveLink} target="_blank" className="btn-link">
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
    margin: 3rem auto;

    &:hover a svg path {
      fill: ${(props) => props.theme.text.main};
    }
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto;

  @media ${(props) => props.theme.breakpoints.tablet} {
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

  h3 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.text.main};
  }

  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme.text.secondary};
  }
`;

const Wrapper = styled.section`
    max-width: 70rem;
  width: 80%;
  margin: 2rem auto;
  .color {
    color: ${(props) => props.theme.text.secondary};
  }

  .slider-heading {
    font-size: 2rem;
    font-weight: bold;
    line-height: 0;

    @media ${(props) => props.theme.breakpoints.tablet} {
      font-size: 2rem;
    }
  }
  .slider-subheading {
    font-size: 1.2rem;
    font-weight: medium;
  }
  hr{
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

  .btn-link {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme.text.secondary};
    text-decoration: none;

    &:hover path {
      fill: ${(props) => props.theme.text.main};
    }

    svg {
      width: 1.3rem;
      margin-left: 0.5rem;

      path {
        fill: ${(props) => props.theme.text.secondary};
      }
    }
  }
`;

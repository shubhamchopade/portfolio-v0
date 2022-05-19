import ReactGA from "react-ga4";
import { Link } from "react-router-dom";
import styled from "styled-components";
import resume from "../components/assets/ShubhamChopade_resume.pdf";

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <Logo>SC</Logo>
      </Link>
      <Links>
        <StyledLink
          onClick={() => {
            ReactGA.send({ hitType: "downloadResume", page: "/nav" });
          }}
          href={resume}
          target="_blank"
        >
          <span>Resume</span>{" "}
          <svg
            width="56"
            height="51"
            viewBox="0 0 56 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 33L38 23M28 33V3V33ZM28 33L18 23L28 33Z"
              stroke="#A0A0A0"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 38L4.5525 44.2125C4.82288 45.2942 5.44706 46.2545 6.32583 46.9407C7.20459 47.627 8.28752 47.9998 9.4025 48H46.5975C47.7125 47.9998 48.7954 47.627 49.6742 46.9407C50.5529 46.2545 51.1771 45.2942 51.4475 44.2125L53 38"
              stroke="#A0A0A0"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/shubham-chopade/"
          target="_blank"
        >
          <span>Let's Connect</span>{" "}
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 0H2C0.89375 0 0 0.89375 0 2V48C0 49.1063 0.89375 50 2 50H48C49.1063 50 50 49.1063 50 48V2C50 0.89375 49.1063 0 48 0ZM14.8312 42.6063H7.4125V18.7437H14.8312V42.6063ZM11.125 15.4813C10.2745 15.4813 9.44318 15.2291 8.73605 14.7566C8.02892 14.2841 7.47777 13.6125 7.15232 12.8268C6.82686 12.0411 6.74171 11.1765 6.90762 10.3424C7.07354 9.50824 7.48308 8.74206 8.08444 8.14069C8.68581 7.53932 9.45199 7.12979 10.2861 6.96387C11.1202 6.79796 11.9848 6.88311 12.7705 7.20857C13.5563 7.53402 14.2278 8.08517 14.7003 8.7923C15.1728 9.49943 15.425 10.3308 15.425 11.1812C15.4187 13.5562 13.4937 15.4813 11.125 15.4813ZM42.6063 42.6063H35.1937V31C35.1937 28.2313 35.1438 24.675 31.3375 24.675C27.4813 24.675 26.8875 27.6875 26.8875 30.8V42.6063H19.4813V18.7437H26.5938V22.0063H26.6937C27.6812 20.1313 30.1 18.15 33.7125 18.15C41.225 18.15 42.6063 23.0938 42.6063 29.5187V42.6063Z"
              fill="#A0A0A0"
            />
          </svg>
        </StyledLink>
      </Links>
    </NavWrapper>
  );
};

const NavWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  width: 90%;
  margin: 1rem auto;
`;
const Logo = styled.h3.attrs({
  className: "effect",
})`
  color: ${(props) => props.theme.text.main};
`;
const Links = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
`;
const StyledLink = styled.a.attrs({
  className: "effect",
})`
  color: ${(props) => props.theme.text.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0.5rem;
  padding: 0 0.7rem;
  border-radius: 0.7rem;
  border: 2px solid #a0a0a0;

  svg {
    width: 1rem;
    margin-left: 0.5rem;
  }
`;

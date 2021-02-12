import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <Logo>SC</Logo>
      </Link>
      <Links>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/experience">Experience</StyledLink>
      </Links>
    </NavWrapper>
  );
};

const NavWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.h3`
  color: ${(props) => props.theme.text.main};
`;
const Links = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 20rem;
`;
const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text.main};
`;

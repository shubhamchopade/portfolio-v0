import styled from "styled-components";

export const Popup = styled.p`
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
import styled from "styled-components";

export const Popup = styled.p`
  padding: 0.6rem;
  font-size: 1rem;
  width: 9rem;
  position: absolute;
  top: 100px;
  left: 0;
  border-radius: 2px;
  background-color: ${(props) => props.theme.bg.secondary};
  color: ${(props) => props.theme.text.main};
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.tablet} {
    top: 60px;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    top: 45px;
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

/*
  Project Common Components
    1. Header = Image + Text Block
    2. List Pointers - Outcomes
    3. Responsive Image - captions
    4. Text block - with Heading
    5. Tech Stack
    6. Testimonial
*/

export const Logo = styled.img`
  width: 8rem;
  height: 8rem;
`
export const Cover = styled.img`
  width: 30rem;
  border-radius: 0.5rem;

    @media ${props => props.theme.breakpoints.tablet}{
    width: 100%;
  }
`
export const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin: 4rem auto;

 &::before{
   content: ${props => props.caption};
   color: blue;
 }
`
export const TextBlock = styled.p`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.secondary};
  line-height: 150%;
  margin: 1rem auto;

    @media ${props => props.theme.breakpoints.mobile}{
      font-size: 1rem;
  }
`
export const TextBlockHeading = styled.h3`
  text-transform: ${props => props.uppercase ? props.uppercase : 'unset'};
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.main};
`
export const Heading = styled.h1`
  font-weight: normal;
  line-height: 100%;
  color: ${({ theme }) => theme.text.main};
`
export const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'unset'};
  align-items: ${props => props.alignItems ? props.alignItems : 'unset'};
  margin: 4rem auto;

  @media ${props => props.theme.breakpoints.mobile}{
    flex-direction: column;
  }
`
export const SVG = styled.svg`
  width: 100%;

  .react-icon:hover{
    fill: #00D1F7;
  }
  .firebase-icon:hover{
    fill: #FFCB2E;
  }
  .styled-icon:hover{
    fill: #D66C8E;
  }
  .tailwindcss-icon:hover{
    fill: #15B7C4;
  }
`
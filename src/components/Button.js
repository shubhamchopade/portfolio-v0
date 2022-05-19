import styled from "styled-components";

export const Button = ({ href, text, margin, str, fil, height }) => {
  return (
    <ButtonWrapper
      className="effect"
      margin={margin}
      str={str}
      fil={fil}
      height={height}
    >
      <StyledLink href={href} target="_blank">
        {text ? text : "Button"}{" "}
        <svg
          width="38"
          height="39"
          viewBox="0 0 38 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.25 2.875H4.75C4.12011 2.875 3.51602 3.12522 3.07062 3.57062C2.62522 4.01602 2.375 4.62011 2.375 5.25V33.75C2.375 34.3799 2.62522 34.984 3.07062 35.4294C3.51602 35.8748 4.12011 36.125 4.75 36.125H33.25C33.8799 36.125 34.484 35.8748 34.9294 35.4294C35.3748 34.984 35.625 34.3799 35.625 33.75V5.25C35.625 4.62011 35.3748 4.01602 34.9294 3.57062C34.484 3.12522 33.8799 2.875 33.25 2.875ZM4.75 0.5C3.49022 0.5 2.28204 1.00045 1.39124 1.89124C0.500445 2.78204 0 3.99022 0 5.25L0 33.75C0 35.0098 0.500445 36.218 1.39124 37.1088C2.28204 37.9996 3.49022 38.5 4.75 38.5H33.25C34.5098 38.5 35.718 37.9996 36.6088 37.1088C37.4996 36.218 38 35.0098 38 33.75V5.25C38 3.99022 37.4996 2.78204 36.6088 1.89124C35.718 1.00045 34.5098 0.5 33.25 0.5L4.75 0.5Z"
              fill="#BAC99C"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.1592 27.4655C18.0486 27.3552 17.9609 27.2242 17.901 27.0799C17.8412 26.9356 17.8104 26.781 17.8104 26.6248C17.8104 26.4686 17.8412 26.3139 17.901 26.1697C17.9609 26.0254 18.0486 25.8943 18.1592 25.784L24.4459 19.4998L18.1592 13.2155C18.0488 13.1051 17.9612 12.9741 17.9015 12.8298C17.8417 12.6855 17.811 12.5309 17.811 12.3748C17.811 12.2186 17.8417 12.064 17.9015 11.9198C17.9612 11.7755 18.0488 11.6445 18.1592 11.534C18.2696 11.4236 18.4007 11.3361 18.545 11.2763C18.6892 11.2165 18.8438 11.1858 19 11.1858C19.1561 11.1858 19.3107 11.2165 19.455 11.2763C19.5993 11.3361 19.7303 11.4236 19.8407 11.534L26.9657 18.659C27.0763 18.7693 27.1641 18.9004 27.2239 19.0447C27.2838 19.1889 27.3146 19.3436 27.3146 19.4998C27.3146 19.656 27.2838 19.8106 27.2239 19.9549C27.1641 20.0992 27.0763 20.2302 26.9657 20.3405L19.8407 27.4655C19.7304 27.5761 19.5994 27.6639 19.4551 27.7237C19.3108 27.7836 19.1562 27.8144 19 27.8144C18.8438 27.8144 18.6891 27.7836 18.5449 27.7237C18.4006 27.6639 18.2695 27.5761 18.1592 27.4655Z"
              fill="#BAC99C"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6875 19.5C10.6875 19.1851 10.8126 18.883 11.0353 18.6603C11.258 18.4376 11.5601 18.3125 11.875 18.3125H23.75C24.0649 18.3125 24.367 18.4376 24.5897 18.6603C24.8124 18.883 24.9375 19.1851 24.9375 19.5C24.9375 19.8149 24.8124 20.117 24.5897 20.3397C24.367 20.5624 24.0649 20.6875 23.75 20.6875H11.875C11.5601 20.6875 11.258 20.5624 11.0353 20.3397C10.8126 20.117 10.6875 19.8149 10.6875 19.5Z"
              fill="#BAC99C"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="38"
                height="38"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </StyledLink>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div.attrs({})`
  max-width: 20rem;
  transition: transform 1s ease-in-out;
  transform: translateX(-200px);
  transform: ${(props) => props.str > 99 && "translateX(0px)"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${(props) => props.theme.text.neutral};
  padding: 1rem 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;

  @media ${(props) => props.theme.breakpoints.mobile} {
    transform: scale(0.8);
  }

  &:hover {
    font-style: italic;
  }
`;

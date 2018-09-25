import React from "react";
import { styled, Paragraph, Inline } from "reakit";

const StyledParagraph = styled(Paragraph)`
  color: #000075;
  font-weight: 800;
  font-size: 1.9em;
  line-height: 1.1;
  &:not(:last-child) {
    margin-bottom: 0.4em;
  }
  @media (min-width: 756px) {
    font-size: 2.3em;
  }
`;

const Wrapper = styled("div")`
  padding: 0.5em 2em;
  font-family: "M PLUS 1p", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #ff5454;
  color: white;
  min-height: 10vh;
  letter-spacing: 0.02em;
  @media (min-width: 756px) {
    padding: 1em 4em;
  }
`;

const Header = () => (
  <Wrapper>
    <StyledParagraph>React Notepad</StyledParagraph>
    <Inline fontWeight={500} fontSize="1em">
      Try to add some notes!
    </Inline>
  </Wrapper>
);

export default Header;

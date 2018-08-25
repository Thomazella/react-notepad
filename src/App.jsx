import React from "react";
import { Base, styled, Paragraph, Inline, Provider } from "reakit";

import Notepad from "./Components/Notepad";

const StyledParagraph = styled(Paragraph)`
  color: #000075;
  font-weight: 800;
  font-size: 2.3em;
  font-weight: 800;
`;

const Header = styled(Base)`
  padding: 1em 4em;
  font-family: "M PLUS 1p", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #ff5454;
  color: white;
  min-height: 10vh;
`;

const App = (
  <Provider>
    <Header>
      <StyledParagraph>React Notepad</StyledParagraph>
      <Inline fontWeight={500}>Try to add some notes!</Inline>
    </Header>
    <Notepad />
  </Provider>
);

export default App;

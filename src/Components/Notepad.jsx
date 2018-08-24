import React from "react";
import { Base, styled, Paragraph } from "reakit";
import NotepadView from "../Components/NotepadView";
import NoteContainer from "../Containers/NoteContainer";
import ModalToggle from "./ModalToggle";

const MainView = styled(Base)`
  max-width: 100%;
  @media (min-width: 756px) {
    max-width: 65%;
  }
`;

const Wrapper = styled(Base)`
  background-color: #ffffff;
  padding: 4rem;
  min-height: 100vh;
  min-width: 100vw;
  font-family: "M PLUS 1p", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
`;

const StyledParagraph = styled(Paragraph)`
  color: #ff5555;
  font-weight: 800;
  margin-bottom: 2.6em;
  font-size: 2.3em;
`;

const Notepad = props => (
  <Wrapper>
    <StyledParagraph>React Notepad</StyledParagraph>
    <MainView>
      <NoteContainer context="notepad">
        {({ notes, deleteNote }) => (
          <NotepadView notes={notes} deleteNote={deleteNote} {...props} />
        )}
      </NoteContainer>
    </MainView>
    <ModalToggle {...props} />
  </Wrapper>
);

export default Notepad;

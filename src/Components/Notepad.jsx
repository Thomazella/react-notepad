import React from "react";
import { Base, styled, Paragraph } from "reakit";
import NotepadView from "../Components/NotepadView";
import NoteContainer from "../Containers/NoteContainer";
import ModalToggle from "./ModalToggle";

const MainView = styled(Base)`
  width: 100%;
  @media (min-width: 756px) {
    max-width: 65%;
  }
`;

const Wrapper = styled(Base)`
  background-color: #ffffff;
  padding: 2rem;
  min-height: 100vh;
  min-width: 100vw;
  font-family: "M PLUS 1p", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  @media (min-width: 756px) {
    padding: 4rem;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: #ff5555;
  font-weight: 800;
  font-size: 2.3em;
  &:not(:last-child) {
    margin-bottom: 1em;
  }
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

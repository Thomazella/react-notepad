import React from "react";
import { Base, styled } from "reakit";
import NotepadView from "../Components/NotepadView";
import NoteContainer from "../Containers/NoteContainer";
import ModalToggle from "./ModalToggle";

const MainView = styled(Base)`
  max-width: 100%;
  @media (min-width: 756px) {
    max-width: 50%;
  }
`;

const Wrapper = styled(Base)`
  background-color: #ddd;
  padding: 4rem;
  min-height: 100vh;
  min-width: 100vw;
`;

const Notepad = props => (
  <Wrapper>
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

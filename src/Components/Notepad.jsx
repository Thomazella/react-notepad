import React from "react";
import { Base, styled } from "reakit";
import NotepadView from "../Components/NotepadView";
import NoteContainer from "../Containers/NoteContainer";
import ModalToggle from "./ModalToggle";

const HomeView = styled(Base)`
  width: 100%;
  @media (min-width: 756px) {
    max-width: 65%;
  }
`;

const Wrapper = styled(Base)`
  background-color: #ffffff;
  padding: 2rem;
  min-width: 100%;
  min-height: calc(100vh - 150px);
  font-family: "M PLUS 1p", Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  @media (min-width: 756px) {
    padding: 4rem;
  }
`;

const Notepad = props => (
  <Wrapper>
    <HomeView>
      <NoteContainer>
        {({ notes, hideNote }) => (
          <NotepadView notes={notes} deleteNote={hideNote} {...props} />
        )}
      </NoteContainer>
    </HomeView>
    <ModalToggle {...props} />
  </Wrapper>
);

export default Notepad;

import React from "react";
import { Base, styled, Container } from "reakit";
import NotepadView from "../Components/NotepadView";
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

const actions = {
  toggle: () => state => ({ isClosed: !state.isClosed }),
  deleteNote: noteIndex => state => ({
    notes: state.notes.filter((note, i) => i !== noteIndex)
  }),
  addNote: newNote => state => ({ notes: [...state.notes, newNote] })
};

const Notepad = props => (
  <Container
    initialState={{ notes: [], isClosed: true }}
    actions={actions}
    {...props}
  >
    {({ notes, isClosed, toggle, deleteNote, addNote }) => (
      <Wrapper>
        <MainView>
          <NotepadView notes={notes} deleteNote={deleteNote} />
        </MainView>
        <ModalToggle
          closed={isClosed}
          onClick={toggle}
          notes={notes}
          deleteNote={deleteNote}
          addNote={addNote}
        />
      </Wrapper>
    )}
  </Container>
);

export default Notepad;

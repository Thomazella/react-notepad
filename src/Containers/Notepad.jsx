import React from "react";
import { Base, styled, Container } from "reakit";
import NotepadView from "../Components/NotepadView";
import NotepadToggle from "../Components/NotepadToggle";

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
  deleteNote: targetNote => state => ({
    notes: state.notes.filter(note => note !== targetNote)
  }),
  addNote: newNote => state => ({ notes: !state.notes.push(newNote) })
};

const Notepad = props => (
  <Container
    initialState={{ notes: ["foo", "bar"], isClosed: true }}
    actions={actions}
    {...props}
  >
    {({ notes, isClosed, toggle, deleteNote }) => (
      <Wrapper>
        <MainView>
          <NotepadView notes={notes} deleteNote={deleteNote} />
        </MainView>
        <NotepadToggle closed={isClosed} onClick={toggle} />
      </Wrapper>
    )}
  </Container>
);

export default Notepad;

import React from "react";
import { Container } from "reakit";

const actions = {
  toggle: () => state => ({ closed: !state.closed }),
  deleteNote: noteIndex => state => ({
    notes: state.notes.filter((note, i) => i !== noteIndex)
  }),
  addNote: newNote => state => ({ notes: [...state.notes, newNote] })
};

const initialState = { notes: [], closed: true };

const NoteContainer = incomingProps => {
  const { children, ...props } = incomingProps;
  return (
    <Container actions={actions} initialState={initialState} {...props}>
      {children}
    </Container>
  );
};

export default NoteContainer;

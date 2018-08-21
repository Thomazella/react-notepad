import React from "react";
import { Container } from "reakit";

const actions = {
  toggle: () => state => ({ closed: !state.closed }),
  deleteNote: noteIndex => state => {
    const { notes, modalNotes } = state;
    const newState = {};
    newState.notes = notes && notes.filter((note, i) => i !== noteIndex);
    newState.modalNotes =
      modalNotes && modalNotes.filter((note, i) => i !== noteIndex);
    return newState;
  }
};

const effects = {
  addNote: newNote => ({ setState }) => {
    setTimeout(
      () => setState(({ notes }) => ({ notes: [...notes, newNote] })),
      2000
    );
    setTimeout(
      () =>
        setState(({ modalNotes }) => ({
          modalNotes: [...modalNotes, newNote]
        })),
      1000
    );
  }
};

const initialState = { notes: [], modalNotes: [], closed: true };

const NoteContainer = incomingProps => {
  const { children, ...props } = incomingProps;
  return (
    <Container
      actions={actions}
      initialState={initialState}
      effects={effects}
      {...props}
    >
      {children}
    </Container>
  );
};

export default NoteContainer;

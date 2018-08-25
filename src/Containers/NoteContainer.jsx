import React from "react";
import { Container } from "reakit";

const actions = {
  toggle: () => state => ({ closed: !state.closed }),
  deleteNote: noteIndex => state => {
    const deleteAtIndex = (key, index) =>
      state[key] && {
        [key]: [...state[key].slice(0, index), ...state[key].slice(index + 1)]
      };

    return Object.assign(
      deleteAtIndex("notes", noteIndex),
      deleteAtIndex("modalNotes", noteIndex)
    );
  }
};

const effects = {
  addNote: newNote => ({ setState }) => {
    const update = key => () =>
      setState(state => ({ [key]: [...state[key], newNote] }));

    setTimeout(update("modalNotes"), 1000);
    setTimeout(update("notes"), 2000);
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
      context="notepad"
      {...props}
    >
      {children}
    </Container>
  );
};

export default NoteContainer;

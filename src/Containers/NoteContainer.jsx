import React from "react";
import { Container } from "reakit";
import getUniqueId from "../utils/getUniqueId";

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
  addNote: newNoteText => ({ setState }) => {
    const update = key => () =>
      setState(state => {
        const oldNotes = state[key];
        const newNote = { id: getUniqueId("note"), text: newNoteText };
        return { [key]: [...oldNotes, newNote] };
      });

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

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
  addNote: newNoteText => ({ setState, state: oldState }) => {
    const update = key => () =>
      setState(state => {
        const oldNotes = state[key];
        const newNote = {
          id: getUniqueId("note"),
          text: newNoteText,
          visible: true
        };
        return { [key]: [...oldNotes, newNote] };
      });

    if (oldState.loading) return;
    setState({ loading: true });
    setTimeout(update("modalNotes"), 1000);
    setTimeout(update("notes"), 2000);
    setTimeout(() => setState({ loading: false }), 2000);
  },

  hideNote: noteIndex => ({ setState, state: oldState }) => {
    const hideAtIndex = (key, index) => {
      if (!oldState[key] || !oldState[key][index]) return oldState;
      return Object.assign(oldState[key][index], { visible: false });
    };

    setState(
      Object.assign(
        hideAtIndex("notes", noteIndex),
        hideAtIndex("modalNotes", noteIndex)
      )
    );

    setTimeout(
      () => setState(state => actions.deleteNote(noteIndex)(state)),
      1000
    );
  }
};

const initialState = {
  notes: [],
  modalNotes: [],
  closed: true,
  loading: false
};

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

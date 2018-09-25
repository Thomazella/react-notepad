/**
 * Action creators
 */

export const addNote = text => ({
  type: "ADD_NOTE",
  value: text
});

export const deleteNote = index => ({
  type: "DELETE_NOTE",
  value: index
});

export const hideNote = index => ({
  type: "HIDE_NOTE",
  value: index
});

export const toggleLoading = target => ({
  type: "TOGGLE_LOADING",
  value: target
});

export const asyncAddNote = (text, delay, target = "notes") => (
  dispatch,
  getState
) => {
  const shouldAddNote = !getState().loading[target];
  if (shouldAddNote) {
    dispatch(toggleLoading(target));
    setTimeout(() => {
      dispatch({
        value: text,
        type: target === "notes" ? "ADD_NOTE" : "ADD_MODAL_NOTE"
      });
      dispatch(toggleLoading(target));
    }, delay);
  }
};

/**
 * Action mapping functions
 */

export const hideThenDelete = dispatch => ({
  deleteNote: index => {
    dispatch(hideNote(index));
    setTimeout(() => {
      dispatch(deleteNote(index));
    }, 500);
  }
});

export const addNoteToAllTargets = dispatch => ({
  handleOnClick: (newNoteText, setLocalStateFn) => {
    dispatch(asyncAddNote(newNoteText, 1000, "notes"));
    dispatch(asyncAddNote(newNoteText, 2000, "modalNotes"));
    setLocalStateFn({ value: "" });
  }
});

import { combineReducers } from "redux";
import getUniqueId from "./utils/getUniqueId";

const initialState = {
  notes: [],
  modalNotes: [],
  loading: { notes: false, modalNotes: false }
};

const noteReducer = (state = initialState.notes, action) => {
  switch (action.type) {
    case "ADD_MODAL_NOTE":
    case "ADD_NOTE":
      return [
        ...state,
        {
          id: getUniqueId("note"),
          text: action.value,
          visible: true
        }
      ];
    case "DELETE_NOTE":
      return [
        ...state.slice(0, action.value),
        ...state.slice(action.value + 1)
      ];
    case "HIDE_NOTE":
      return [
        ...state.slice(0, action.value),
        { ...state[action.value], visible: false },
        ...state.slice(action.value + 1)
      ];
    default:
      return state;
  }
};

export function notes(state, action) {
  switch (action.type) {
    case "ADD_MODAL_NOTE":
      return state;
    default:
      return noteReducer(state, action);
  }
}

export function modalNotes(state, action) {
  switch (action.type) {
    case "ADD_NOTE":
      return state;
    default:
      return noteReducer(state, action);
  }
}

export function loading(state = initialState.loading, action) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        [action.value]: !state[action.value]
      };
    default:
      return state;
  }
}

/**
 * The notepad root reducer
 */
export default combineReducers({ notes, loading, modalNotes });

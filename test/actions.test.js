import { addNote, deleteNote, toggleLoading, hideNote } from "../src/actions";

test("addNote", () => {
  expect(addNote("foo")).toEqual({
    type: "ADD_NOTE",
    value: "foo"
  });
});

test("deleteNote", () => {
  expect(deleteNote(3)).toEqual({
    type: "DELETE_NOTE",
    value: 3
  });
});

test("hideNote", () => {
  expect(hideNote(3)).toEqual({
    type: "HIDE_NOTE",
    value: 3
  });
});

test("toggleLoading", () => {
  expect(toggleLoading()).toEqual({
    type: "TOGGLE_LOADING"
  });
});

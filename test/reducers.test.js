import { notes, loading } from "../src/reducers";
import { addNote, toggleLoading, deleteNote, hideNote } from "../src/actions";

test("notes add", () => {
  let result;

  result = notes(undefined, addNote("foo"));
  expect(result).toEqual(expect.any(Object));

  result = notes(["something"], addNote("foo"));
  expect(result).toEqual(["something", expect.any(Object)]);
});

test("notes delete", () => {
  let result;

  result = notes(["foo"], deleteNote(0));
  expect(result).toEqual([]);

  result = notes(["something", "foo", "somethingElse"], deleteNote(1));
  expect(result).toEqual(["something", "somethingElse"]);
});

test("notes hide", () => {
  let result;

  result = notes([{ name: "foo", visible: true }], hideNote(0));
  expect(result).toEqual([{ name: "foo", visible: false }]);

  result = notes(
    [{ visible: true }, { name: "foo", visible: true }, { visible: true }],
    hideNote(1)
  );
  expect(result).toEqual([
    { visible: true },
    { name: "foo", visible: false },
    { visible: true }
  ]);
});

test.only("loading", () => {
  let result;

  result = loading(undefined, toggleLoading("notes"));
  expect(result.notes).toBe(true);

  result = loading({ notes: false }, toggleLoading("notes"));
  expect(result.notes).toBe(true);

  result = loading({ modalNotes: true }, toggleLoading("modalNotes"));
  expect(result.modalNotes).toBe(false);
});

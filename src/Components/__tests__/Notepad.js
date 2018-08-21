import React from "react";
import { mount } from "enzyme";
import { Provider } from "reakit";
import Notepad from "../Notepad";
import NotepadView from "../NotepadView";
import NotepadButton from "../NotepadButton";
import Note from "../Note";
import NewNote from "../NewNote";

/* eslint-disable react/jsx-filename-extension */

test("state.notes starts empty", () => {
  const wrapper = mount(
    <Provider>
      <Notepad />
    </Provider>
  );
  const result = wrapper
    .find(NotepadView)
    .at(0)
    .prop("notes");

  expect(result).toEqual([]);
});

test("doesn't delete notes with equal content", () => {
  const wrapper = mount(
    <Provider initialState={{ notepad: { notes: ["foo", "foo", "foo"] } }}>
      <Notepad />
    </Provider>
  );
  const button = wrapper
    .find(Note)
    .find(NotepadButton)
    .at(0);

  button.simulate("click");

  const result = wrapper
    .find(NotepadView)
    .at(0)
    .prop("notes");

  expect(result).toEqual(["foo", "foo"]);
});

test("adds note to state", () => {
  const wrapper = mount(
    <Provider>
      <Notepad />
    </Provider>
  );

  wrapper
    .find(NewNote)
    .find("input")
    .simulate("change", { target: { value: "foo" } });

  wrapper
    .find(NewNote)
    .find(NotepadButton)
    .simulate("click");

  const result = wrapper
    .find(NotepadView)
    .at(0)
    .prop("notes");

  expect(result).toEqual(["foo"]);
});

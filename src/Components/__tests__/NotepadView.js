import React from "react";
import { mount } from "enzyme";
import { Provider } from "reakit";
import NotepadView from "../NotepadView";
import NoteContainer from "../../Containers/NoteContainer";
import NotepadButton from "../NotepadButton";
import Note from "../Note";

/* eslint-disable react/jsx-filename-extension */

test("renders Notes", () => {
  const wrapper = mount(<NotepadView notes={[1]} />);

  expect(wrapper.contains(Note)).toBe(true);
});

test("renders as many notes as passed", () => {
  const wrapper = mount(<NotepadView notes={[1, 2, 3]} />);

  expect(wrapper.children().length).toEqual(3);
});

test("deletes notes from state", () => {
  const wrapper = mount(
    <Provider initialState={{ notepad: { notes: ["foo"] } }}>
      <NoteContainer context="notepad">
        {({ notes, deleteNote }) => (
          <NotepadView notes={notes} deleteNote={deleteNote} />
        )}
      </NoteContainer>
    </Provider>
  );

  wrapper.find(NotepadButton).forEach(button => button.simulate("click"));

  expect(wrapper.find(NotepadView).text()).toBe(null);
});

import React from "react";
import { mount } from "enzyme";
import { Provider } from "reakit";
import NotepadView from "../NotepadView";
import NoteContainer from "../../Containers/NoteContainer";
import NotepadButton from "../NotepadButton";
import Note from "../Note";

/* eslint-disable react/jsx-filename-extension */

test("renders Notes", () => {
  const wrapper = mount(<NotepadView notes={[{ text: "foo", id: 1 }]} />);

  expect(wrapper.contains(Note)).toBe(true);
});

test("renders as many notes as passed", () => {
  const wrapper = mount(
    <NotepadView
      notes={[
        { text: "foo", id: 1 },
        { text: "bar", id: 2 },
        { text: "baz", id: 3 }
      ]}
    />
  );

  expect(wrapper.text()).toMatch(/foobarbaz/);
});

test("deletes notes from state", () => {
  const wrapper = mount(
    <Provider initialState={{ notepad: { notes: [{ text: "foo", id: 1 }] } }}>
      <NoteContainer>
        {({ notes, deleteNote }) => (
          <NotepadView notes={notes} deleteNote={deleteNote} />
        )}
      </NoteContainer>
    </Provider>
  );

  wrapper.find(NotepadButton).forEach(button => button.simulate("click"));

  expect(wrapper.find(NotepadView).text()).toBe(null);
});

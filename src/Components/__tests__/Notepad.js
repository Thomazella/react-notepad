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

test("doesn't delete notes with identic tests", () => {
  const mock = [
    { text: "foo", id: 1 },
    { text: "foo", id: 2 },
    { text: "foo", id: 3 }
  ];
  const wrapper = mount(
    <Provider initialState={{ notepad: { notes: mock } }}>
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

  expect(result.length).toEqual(2);
});

test("adds note to state", () => {
  jest.useFakeTimers();
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

  jest.runAllTimers();
  wrapper.update();

  expect(wrapper.text()).toMatch(/foo/);
});

test("adds notes with delay", () => {
  jest.useFakeTimers();
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

  jest.advanceTimersByTime(1000);
  wrapper.update();

  let modal = wrapper
    .find(NotepadView)
    .at(1)
    .text();

  let home = wrapper
    .find(NotepadView)
    .at(0)
    .text();

  expect(modal).toMatch(/foo/);
  expect(home).toBe(null);

  jest.advanceTimersByTime(1000);
  wrapper.update();

  modal = wrapper
    .find(NotepadView)
    .at(1)
    .text();

  home = wrapper
    .find(NotepadView)
    .at(0)
    .text();

  expect(home).toMatch(/foo/);
  expect(modal).toMatch(/foo/);
});

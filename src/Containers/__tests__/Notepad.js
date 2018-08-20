import React from "react";
import { mount } from "enzyme";
import Notepad from "../Notepad";
import NotepadView from "../../Components/NotepadView";
import NotepadToggle from "../../Components/NotepadToggle";
import NotepadButton from "../../Components/NotepadButton";
import Note from "../../Components/Note";

/* eslint-disable react/jsx-filename-extension */

test.skip("state.notes starts empty", () => {
  const wrapper = mount(<Notepad />);
  expect(wrapper.find(NotepadView).prop("notes")).toEqual([]);
});

test("state.isClosed starts true", () => {
  const wrapper = mount(<Notepad />);
  expect(wrapper.find(NotepadToggle).prop("closed")).toBe(true);
});

test("passes down deleteNote function", () => {
  const wrapper = mount(<Notepad />);
  expect(
    wrapper
      .find(NotepadView)
      .at(0)
      .prop("deleteNote")
  ).toEqual(expect.any(Function));
});

test("passes down toggle function", () => {
  const wrapper = mount(<Notepad />);
  expect(wrapper.find(NotepadToggle).prop("onClick")).toEqual(
    expect.any(Function)
  );
});

test("toggles open/closed state", () => {
  const wrapper = mount(<Notepad />);
  wrapper
    .find(NotepadToggle)
    .find(NotepadButton)
    .at(0)
    .simulate("click");
  expect(wrapper.find(NotepadToggle).prop("closed")).toBe(false);
});

test("deletes notes from state", () => {
  const wrapper = mount(<Notepad initialState={{ notes: [1] }} />);
  wrapper
    .find(Note)
    .find(NotepadButton)
    .at(0)
    .simulate("click");
  expect(
    wrapper
      .find(NotepadView)
      .at(0)
      .prop("notes")
  ).toEqual([]);
});

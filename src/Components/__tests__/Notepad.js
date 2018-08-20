import React from "react";
import { mount } from "enzyme";
import Notepad from "../Notepad";
import NotepadView from "../../Components/NotepadView";
import ModalToggle from "../../Components/ModalToggle";
import NotepadButton from "../../Components/NotepadButton";
import Note from "../../Components/Note";
import NewNote from "../../Components/NewNote";

/* eslint-disable react/jsx-filename-extension */

test("state.notes starts empty", () => {
  const wrapper = mount(<Notepad />);
  expect(wrapper.find(ModalToggle).prop("notes")).toEqual([]);
});

test("state.isClosed starts true", () => {
  const wrapper = mount(<Notepad />);
  expect(wrapper.find(ModalToggle).prop("closed")).toBe(true);
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
  expect(wrapper.find(ModalToggle).prop("onClick")).toEqual(
    expect.any(Function)
  );
});

test("passes down addNote function", () => {
  const wrapper = mount(<Notepad />);
  expect(wrapper.find(ModalToggle).prop("addNote")).toEqual(
    expect.any(Function)
  );
});

test("toggles open/closed state", () => {
  const wrapper = mount(<Notepad />);
  wrapper
    .find(ModalToggle)
    .find(NotepadButton)
    .at(0)
    .simulate("click");
  expect(wrapper.find(ModalToggle).prop("closed")).toBe(false);
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

test("deletes not based on note content", () => {
  const wrapper = mount(<Notepad initialState={{ notes: [1, 1, 1] }} />);
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
  ).toEqual([1, 1]);
});

test("adds notes to state", () => {
  const mock = jest.fn();
  const wrapper = mount(<Notepad actions={{ addNote: () => () => mock() }} />);
  wrapper
    .find(NewNote)
    .find("button")
    .simulate("click");
  expect(mock).toHaveBeenCalledTimes(1);
});

import React from "react";
import { mount } from "enzyme";
import NotepadView from "../NotepadView";
import Note from "../Note";

/* eslint-disable react/jsx-filename-extension */

test("renders Notes", () => {
  const wrapper = mount(<NotepadView notes={[1]} />);
  expect(wrapper.contains(Note)).toBeTruthy();
});

test("renders as many notes as passed", () => {
  const wrapper = mount(<NotepadView notes={[1, 2, 3]} />);
  expect(wrapper.children().length).toEqual(3);
});

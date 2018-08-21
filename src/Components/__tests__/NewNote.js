import React from "react";
import { mount } from "enzyme";
import NewNote from "../NewNote";
import NotepadButton from "../NotepadButton";

/* eslint-disable react/jsx-filename-extension */

test("calls addNote on click", () => {
  const mock = jest.fn();
  const wrapper = mount(<NewNote addNote={mock} />);

  wrapper.find("button").simulate("click");

  expect(mock).toHaveBeenCalledTimes(1);
});

test("keeps track of what's typed", () => {
  const mock = jest.fn();
  const wrapper = mount(<NewNote addNote={mock} />);

  wrapper.find("input").simulate("change", { target: { value: "foo" } });
  wrapper.find(NotepadButton).simulate("click");

  expect(mock).toHaveBeenCalledWith("foo");
});

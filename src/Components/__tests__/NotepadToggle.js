import React from "react";
import { mount } from "enzyme";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import NotepadToggle from "../NotepadToggle";

/* eslint-disable react/jsx-filename-extension */

const ClosedIcon = TiArrowMaximise;
const OpenedIcon = TiArrowMinimise;

test("renders closed icon", () => {
  const wrapper = mount(<NotepadToggle closed />);
  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBeTruthy();
});

test("renders opened icon", () => {
  const wrapper = mount(<NotepadToggle closed={false} />);
  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBeTruthy();
});

test("defaults to being closed", () => {
  const wrapper = mount(<NotepadToggle />);
  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBeTruthy();
});

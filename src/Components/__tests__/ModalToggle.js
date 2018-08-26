import React from "react";
import { mount } from "enzyme";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import { Provider } from "reakit";
import ModalToggle from "../ModalToggle";
import NotepadButton from "../NotepadButton";

/* eslint-disable react/jsx-filename-extension */

const ClosedIcon = TiArrowMaximise;
const OpenedIcon = TiArrowMinimise;

test("renders closed icon", () => {
  const wrapper = mount(
    <Provider initialState={{ notepad: { closed: true } }}>
      <ModalToggle />
    </Provider>
  );

  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBe(true);
});

test("renders opened icon", () => {
  const wrapper = mount(
    <Provider initialState={{ notepad: { closed: false } }}>
      <ModalToggle />
    </Provider>
  );

  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBe(true);
});

test("defaults to being closed", () => {
  const wrapper = mount(
    <Provider>
      <ModalToggle />
    </Provider>
  );

  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBe(true);
});

test("clicks toggle icons", () => {
  const wrapper = mount(
    <Provider>
      <ModalToggle />
    </Provider>
  );

  wrapper.find(NotepadButton).forEach(button => button.simulate("click"));

  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBe(true);

  wrapper.find(NotepadButton).forEach(button => button.simulate("click"));

  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBe(false);
});

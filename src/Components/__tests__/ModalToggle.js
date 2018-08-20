import React from "react";
import { mount } from "enzyme";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import ModalToggle from "../ModalToggle";

/* eslint-disable react/jsx-filename-extension */

const ClosedIcon = TiArrowMaximise;
const OpenedIcon = TiArrowMinimise;

test("renders closed icon", () => {
  const wrapper = mount(<ModalToggle closed />);
  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBeTruthy();
});

test("renders opened icon", () => {
  const wrapper = mount(<ModalToggle closed={false} />);
  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBeTruthy();
});

test("defaults to being closed", () => {
  const wrapper = mount(<ModalToggle />);
  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBeTruthy();
});

import React from "react";
import { mount } from "enzyme";
import { TiArrowMaximise, TiArrowMinimise } from "react-icons/ti";
import ToggleButton from "../../src/components/ToggleButton";
import Button from "../../src/elements/Button";

const ClosedIcon = TiArrowMaximise;
const OpenedIcon = TiArrowMinimise;

test("renders closed icon by default", () => {
  const wrapper = mount(<ToggleButton />);
  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBe(true);
});

test("renders opened icon", () => {
  const wrapper = mount(<ToggleButton initialState={{ closed: false }} />);
  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBe(true);
});

test("clicks toggle icons", () => {
  const wrapper = mount(<ToggleButton />);

  wrapper.find(Button).simulate("click");
  expect(wrapper.containsMatchingElement(<OpenedIcon />)).toBe(true);

  wrapper.find(Button).simulate("click");
  expect(wrapper.containsMatchingElement(<ClosedIcon />)).toBe(true);
});

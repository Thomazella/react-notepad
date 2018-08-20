import React from "react";
import { mount } from "enzyme";
import { Input } from "reakit";
import NewNote from "../NewNote";

/* eslint-disable react/jsx-filename-extension */

test("calls addNote on click", () => {
  const mock = jest.fn();
  const wrapper = mount(<NewNote addNote={mock} />);
  wrapper.find("button").simulate("click");
  expect(mock).toHaveBeenCalledTimes(1);
});

test("keeps track of what's typed", () => {
  const mock = jest.fn();
  const wrapper = mount(
    <NewNote actions={{ updateText: () => () => mock() }} />
  );
  wrapper.find(Input).simulate("change");
  expect(mock).toHaveBeenCalledTimes(1);
});

import React from "react";
import { mount } from "enzyme";
import Note from "../Note";

/* eslint-disable react/jsx-filename-extension */

test("delete button", () => {
  const mock = jest.fn();
  const wrapper = mount(<Note deleteNote={mock} />);

  wrapper.find("button").simulate("click");

  expect(mock).toHaveBeenCalledTimes(1);
});

test("renders children", () => {
  const wrapper = mount(
    <Note>
      <span />
    </Note>
  );

  expect(wrapper.find("span").length).toBe(1);
});

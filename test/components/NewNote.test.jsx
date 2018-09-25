import React from "react";
import { mount } from "enzyme";
import { CompositionalNewNote as NewNote } from "../../src/components/NewNote";

test("calls clickHandler", () => {
  const mock = jest.fn();
  const wrapper = mount(<NewNote handleOnClick={mock} />);

  wrapper.find("button").simulate("click");
  expect(mock).toHaveBeenCalledTimes(1);
});

test("keeps track of what's typed", () => {
  const mock = jest.fn();
  const wrapper = mount(<NewNote handleOnClick={mock} />);

  wrapper.find("input").simulate("change", { target: { value: "foo" } });
  wrapper.find("button").simulate("click");

  expect(mock).toHaveBeenCalledWith("foo", expect.any(Function));
});

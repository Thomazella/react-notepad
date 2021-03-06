import React from "react";
import { mount } from "enzyme";
import Note from "../../src/components/Note";

/* eslint-disable jsx-a11y/accessible-emoji */

test("delete button", () => {
  const mock = jest.fn();
  const wrapper = mount(<Note deleteNote={mock} />);

  wrapper.find("button").simulate("click");

  expect(mock).toHaveBeenCalledTimes(1);
});

test("renders children", () => {
  const wrapper = mount(<Note>child</Note>);

  expect(wrapper.text()).toMatch(/child/);
});

test("emoji error", () => {
  const wrapper = mount(
    <div>
      <Note> 🎹 </Note>
    </div>
  );

  expect(wrapper.text()).toMatch(/shouldn't contain emoji/);
  expect(wrapper.text()).not.toMatch(/shouldn't exceed 100 characters/);
  expect(wrapper.text()).not.toMatch(/shouldn't be empty/);
});

test("over 100 error", () => {
  const wrapper = mount(
    <div>
      <Note>
        ,,,,,,,,,,,,,,reallyLongString,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      </Note>
    </div>
  );

  expect(wrapper.text()).toMatch(/shouldn't exceed 100 characters/);
  expect(wrapper.text()).not.toMatch(/shouldn't contain emoji/);
  expect(wrapper.text()).not.toMatch(/shouldn't be empty/);
});

test("empty error", () => {
  const wrapper = mount(<div>{React.createElement(Note, null, "")}</div>);

  expect(wrapper.text()).toMatch(/shouldn't be empty/);
  expect(wrapper.text()).not.toMatch(/shouldn't contain emoji/);
  expect(wrapper.text()).not.toMatch(/shouldn't exceed 100 characters/);
});

test("multiple errors", () => {
  const wrapper = mount(
    <div>
      <Note>
        ,,,,,,,,,,,,,,reallyLongStringWithEmoji🎹,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
      </Note>
    </div>
  );

  expect(wrapper.text()).toMatch(/shouldn't exceed 100 characters/);
  expect(wrapper.text()).toMatch(/shouldn't contain emoji/);
  expect(wrapper.text()).not.toMatch(/shouldn't be empty/);
});

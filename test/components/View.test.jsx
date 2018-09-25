import React from "react";
import { mount } from "enzyme";
import { Provider } from "reakit";
import View from "../../src/components/View";
import Button from "../../src/elements/Button";
import Note from "../../src/components/Note";

test("renders Notes", () => {
  const wrapper = mount(<View notes={[{ text: "foo", id: 1 }]} />);

  expect(wrapper.contains(Note)).toBe(true);
});

test("renders as many notes as passed", () => {
  const wrapper = mount(
    <div>
      <View
        notes={[
          { text: "foo", id: 1 },
          { text: "bar", id: 2 },
          { text: "baz", id: 3 }
        ]}
      />
    </div>
  );

  expect(wrapper.text()).toMatch(/foobarbaz/);
});

test("deletes notes from state", () => {
  const wrapper = mount(
    <Provider initialState={{ notepad: { notes: [{ text: "foo", id: 1 }] } }}>
      <View />
    </Provider>
  );

  wrapper.find(Button).forEach(button => button.simulate("click"));

  expect(wrapper.find(View).text()).toBe(null);
});

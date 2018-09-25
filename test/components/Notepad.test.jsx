/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Notepad from "../../src/components/Notepad";
import View from "../../src/components/View";
import Button from "../../src/elements/Button";
import Note from "../../src/components/Note";
import { CompositionalNewNote as NewNote } from "../../src/components/NewNote";
import { createHydratedStore } from "../../src/App";

// otherwise redux logger polutes jest output
console.log = () => {};
console.groupCollapsed = () => {};

const wrapMount = (store, ...args) =>
  mount(
    <Provider store={store || createHydratedStore()}>
      <Notepad {...args} />
    </Provider>
  );

test("state.notes starts empty", () => {
  const wrapper = wrapMount();
  const result = wrapper
    .find(View)
    .at(0)
    .prop("notes");

  expect(result).toEqual([]);
});

test("doesn't delete notes with identic text", () => {
  jest.useFakeTimers();
  const mockStore = createHydratedStore({
    notes: [
      { text: "foo", id: 1 },
      { text: "foo", id: 2 },
      { text: "foo", id: 3 }
    ]
  });
  const wrapper = wrapMount(mockStore);
  const button = wrapper
    .find(Note)
    .find(Button)
    .at(0);

  button.simulate("click");
  jest.runAllTimers();
  wrapper.update();

  const result = wrapper
    .find(View)
    .at(0)
    .prop("notes");

  expect(result.length).toEqual(2);
});

test("adds note to state", () => {
  jest.useFakeTimers();
  const wrapper = wrapMount();

  wrapper
    .find(NewNote)
    .find("input")
    .simulate("change", { target: { value: "foo" } });

  wrapper
    .find(NewNote)
    .find(Button)
    .simulate("click");

  jest.runAllTimers();
  wrapper.update();

  expect(wrapper.text()).toMatch(/foo/);
});

test("adds notes with delay", () => {
  jest.useFakeTimers();
  const wrapper = wrapMount();

  wrapper
    .find(NewNote)
    .find("input")
    .simulate("change", { target: { value: "foo" } });

  wrapper
    .find(NewNote)
    .find(Button)
    .simulate("click");

  jest.advanceTimersByTime(1000);
  wrapper.update();

  let modal = wrapper
    .find(View)
    .at(0)
    .text();

  let home = wrapper
    .find(View)
    .at(1)
    .text();

  expect(modal).toMatch(/foo/);
  expect(home).toBe(null);

  jest.advanceTimersByTime(1000);
  wrapper.update();

  modal = wrapper
    .find(View)
    .at(1)
    .text();

  home = wrapper
    .find(View)
    .at(0)
    .text();

  expect(home).toMatch(/foo/);
  expect(modal).toMatch(/foo/);
});

test("throttles addNote", () => {
  jest.useFakeTimers();
  const wrapper = wrapMount();

  const input = wrapper.find(NewNote).find("input");
  const submit = wrapper.find(NewNote).find(Button);

  input.simulate("change", { target: { value: "foo" } });
  submit.simulate("click");
  input.simulate("change", { target: { value: "bar" } });
  submit.simulate("click");
  input.simulate("change", { target: { value: "baz" } });
  submit.simulate("click");

  jest.advanceTimersByTime(1000);
  wrapper.update();

  const modal = wrapper
    .find(View)
    .at(0)
    .text();

  expect(modal).toMatch(/foo/);
  expect(modal).not.toMatch(/foobarbaz/);
});

test("Adds and deletes correctly", () => {
  jest.useFakeTimers();
  const wrapper = wrapMount();

  const input = wrapper.find(NewNote).find("input");
  const submit = wrapper.find(NewNote).find(Button);

  input.simulate("change", { target: { value: "foo" } });
  submit.simulate("click");
  jest.runAllTimers();
  input.simulate("change", { target: { value: "bar" } });
  submit.simulate("click");
  jest.runAllTimers();
  wrapper.update();

  const modal = wrapper
    .find(View)
    .at(0)
    .text();

  expect(modal).toMatch(/foobar/);

  const deleteButton = wrapper
    .find(Note)
    .find(Button)
    .at(0);

  deleteButton.simulate("click");
  jest.runAllTimers();
  wrapper.update();

  const result = wrapper
    .find(View)
    .at(0)
    .prop("notes");

  expect(result[0].text).toBe("bar");
});

test("Hides before deleting", () => {
  jest.useFakeTimers();
  const wrapper = wrapMount();

  const input = wrapper.find(NewNote).find("input");
  const submit = wrapper.find(NewNote).find(Button);

  input.simulate("change", { target: { value: "foo" } });
  submit.simulate("click");
  jest.runAllTimers();
  wrapper.update();

  const deleteButton = wrapper
    .find(Note)
    .find(Button)
    .at(0);

  deleteButton.simulate("click");
  jest.advanceTimersByTime(100);
  wrapper.update();

  let result = wrapper
    .find(View)
    .at(0)
    .prop("notes");

  expect(result[0].text).toBe("foo");
  expect(result[0].visible).toBe(false);

  jest.advanceTimersByTime(900);
  wrapper.update();

  result = wrapper
    .find(View)
    .at(0)
    .prop("notes");

  expect(result).toEqual([]);
});

import getUniqueId from "../getUniqueId";

test("multiple calls yield different numbers", () => {
  // eslint-disable-next-line no-self-compare
  expect(getUniqueId() !== getUniqueId()).toBeTruthy();
});

test("append args", () => {
  expect(getUniqueId("foo")).toMatch(/foo\d+/);
});

/**
 * @jest-environment jsdom
 */

const fs = require("fs");

beforeAll(() => {
  const file = fs.readFileSync("./index.html");
  document.body.innerHTML = file;
});

it("should have h1", () => {
  const h1 = document.getElementById("title");
  expect(h1.textContent).toEqual("I am Batman");
});

it("h1 color should be red", () => {
  const h1 = document.getElementById("title");
  const styles = window.getComputedStyle(h1);
  expect(styles.color).toEqual("red");
});

it("h1 color should be green after execting script", () => {
  const h1 = document.getElementById("title");
  // execute js
  require("./index");
  const styles = window.getComputedStyle(h1);
  expect(styles.color).toEqual("green");
});

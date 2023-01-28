import { nodeText } from "./index";

beforeAll(() => {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<textarea id='nodeText'><div>nodeText</div></textarea>`
  );
});

test("nodeText", () => {
  expect(nodeText("#nodeText")).toBe("nodeText");
});

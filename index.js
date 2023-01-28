// selector is textarea.
function getContent(selector) {
  const div = document.createElement("div");
  const inner = document.querySelector(selector)?.value;
  div.innerHTML = inner;
  console.log("innerText: ", div.innerText);
  console.log("innerHTML: ", div.innerHTML);
  return (field) => div[field];
}
export const nodeText = (selector) => getContent(selector)("innerText");

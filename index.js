"use strict";

//task -1
const wrapper = document.getElementById("wrapper");

console.log(wrapper.children);

Array.from(wrapper.children).forEach((child) => {
  console.log(child);
  console.log(child.classList.length);
});
console.log("wrapper child element count is:", wrapper.childElementCount);

//task -2

function maxClass() {
  let result = Array.from(wrapper.children).reduce((acc, curr) => {
    return acc?.classList?.length > curr.classList.length ? acc : curr;
  }, {});
  return [result.nodeName, result.classList.length];
}

console.log("wrapper element with max classes is:", maxClass());

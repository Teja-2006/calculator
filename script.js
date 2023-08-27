"use strict";
// Selecting elements
// * individual buttons
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".sub");
const multiplication = document.querySelector(".multi");
const division = document.querySelector(".divide");
const clearOne = document.querySelector(".clear_one");
const clearAll = document.querySelector(".clear_all");
const result = document.querySelector(".display");
//  * all buttons
const allOperators = document.querySelectorAll(".operator");
const allClear = document.querySelectorAll(".clear");
const allNum = document.querySelectorAll(".num");
// ? global variables
const dis = [];
// * Helper function to maintain code
const displayInput = function () {
  result.value = dis.join(" ");
};

// * event listeners
// EVENT LISTENER FOR ADDING THE OPERATORS ON THE  INPUT NODE
allOperators.forEach((node) =>
  node.addEventListener("click", function (e) {
    dis.push(e.target.dataset.value);
    displayInput();
  })
);
// EVENT LISTENER FOR CLEARING THE INPUT NODE
allClear.forEach((node) =>
  node.addEventListener("click", function (e) {
    if (e.target.dataset.value === "AC") {
      dis.length = 0;
      displayInput();
    } else if (e.target.dataset.value === "C") {
      dis.pop();
      displayInput();
    }
  })
);
//
allNum.forEach((node) =>
  node.addEventListener("click", function (e) {
    const num = e.target.dataset.value;
    dis.push(num);
    displayInput();
  })
);

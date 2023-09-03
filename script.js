"use strict";
// Selecting elements
// * Valid if parameters

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
  result.value = dis.join("");
};

const operatorEnter = (node) => {
  node.addEventListener("click", function (e) {
    dis.push(e.target.dataset.value);
    displayInput();
  });
};

const fullClear = (node) => {
  node.addEventListener("click", function (e) {
    if (e.target.dataset.value === "AC") {
      dis.length = 0;
      displayInput();
    } else if (e.target.dataset.value === "C") {
      dis.pop();
      displayInput();
    }
  });
};

const numberEnter = (node) => {
  node.addEventListener("click", function (e) {
    const num = e.target.dataset.value;
    dis.push(num);
    displayInput();
  });
};

const keydownNumFun = (number, e) => {
  if (e.key === number) {
    dis.push(e.key);
    displayInput();
  }
};

// TODO: making math basic functions work.
// * 1.Addition
const add = function (inputs) {
  if (inputs.length === 0) {
    return 0; // Handle case with no inputs
  }
  return inputs.reduce((acc, cur) => acc + cur, 0);
};
// * 2.Subtraction
const minus = function (inputs) {
  if (inputs.length === 0) {
    return 0; // Handle case with no inputs
  }
  return inputs.reduce((acc, cur) => acc - cur, 0);
};

// * 3.Multiplication
const product = function (inputs) {
  if (inputs.length === 0) {
    return 0; // Handle case with no inputs
  }
  return inputs.reduce((acc, cur) => acc * cur, 0);
};
// * 4.Division
const divide = function (inputs) {
  if (inputs.length === 0) {
    return 0; // Handle case with no inputs
  }
  return inputs.reduce((acc, cur) => acc / cur, 0);
};

// * event listeners for mouse clicks
// EVENT LISTENER FOR ADDING THE OPERATORS ON THE  INPUT NODE
allOperators.forEach((node) => operatorEnter(node));
// EVENT LISTENER FOR CLEARING THE INPUT NODE
allClear.forEach((node) => fullClear(node));
//
allNum.forEach((node) => numberEnter(node));
// * eventlisters for keyboard down (event)

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  // Number will be added to the result area in the calculator
  if (e.key === "0") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "1") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "2") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "3") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "4") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "5") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "6") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "7") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "8") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "9") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "10") {
    dis.push(e.key);
    displayInput();
  }
  //  Deletion of one number function
  console.log(e);
  if (e.key === "Backspace") {
    dis.pop();
    displayInput();
  }
  // Deletion of all the Number written in the result panel
  if (e.key === "Backspace" && e.metaKey) {
    dis.length = 0;
    displayInput();
  }
  // * Reference =>  ['+','-','/','x',"*"];
  // Operators to be added
  if (e.key === "+") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "-") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "/") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "x") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "*") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === ".") {
    dis.push(e.key);
    displayInput();
  }
  if (e.key === "%") {
    dis.push(e.key);
    displayInput();
  }
});

"use strict";
// Selecting elements
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".sub");
const multiplication = document.querySelector(".multi");
const division = document.querySelector(".divide");
const clearOne = document.querySelector(".clear_one");
const clearAll = document.querySelector(".clear_all");

document.addEventListener("click", function (e) {
  console.log(e);
  console.log("🚀 ~ file: script.js:12 ~ e:", e.target);
});

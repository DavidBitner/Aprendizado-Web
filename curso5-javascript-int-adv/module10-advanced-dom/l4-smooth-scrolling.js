"use strict";

// JavaScript
const btn_scroll_to = document.querySelector(".btn-scroll-to");
const section_1 = document.querySelector("#section-1");

btn_scroll_to.addEventListener("click", function () {
  section_1.scrollIntoView({ behavior: "smooth" });
});

// CSS
/* 
html {
  scroll-behavior: smooth;
} 
*/

"use strict";

// https://developer.mozilla.org/en-US/docs/Web/Events

const h1 = document.querySelector("h1");

function alert_mouse_enter() {
  alert("MouseEnter event");

  h1.removeEventListener("mouseenter", alert_mouse_enter);
}

h1.addEventListener("mouseenter", alert_mouse_enter);

// Jeito mais antigo de se fazer
// h1.onmouseenter = function (e) {
//   alert("MouseEnter event");
// };

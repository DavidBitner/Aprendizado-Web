"use strict";

// rbg(255,255,255)

const rand_int = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

const random_color = () =>
  `rgb(${rand_int(0, 255)},${rand_int(0, 255)},${rand_int(0, 255)})`;

document.querySelector(".h").addEventListener("click", function (e) {
  this.style.backgroundColor = random_color();

  // Parar propagração de eventos
  e.stopPropagation();
});

document.querySelector(".hs").addEventListener("click", function (e) {
  this.style.backgroundColor = random_color();
});

document.querySelector(".divs").addEventListener("click", function (e) {
  this.style.backgroundColor = random_color();
});

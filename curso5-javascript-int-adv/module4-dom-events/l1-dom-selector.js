"use strict";

// DOM selector
// console.log(document.querySelector('.message').textContent)

// Mudar texto do elemento HTML através do DOM
document.querySelector(`.message`).textContent = "Correct Answer";

// Capturando mais elementos HTML
document.querySelector(`.number`).textContent = "10";
document.querySelector(`.score`).textContent = "10";

// Capturando input
document.querySelector(`.guess`).value = "15";

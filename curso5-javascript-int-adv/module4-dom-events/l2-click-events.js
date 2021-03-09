"use strict";

// Event Listener
document.querySelector(`.check`).addEventListener("click", function () {
  const guess = document.querySelector(`.guess`).value;
  console.log(guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = "Invalid Value";
  }
});

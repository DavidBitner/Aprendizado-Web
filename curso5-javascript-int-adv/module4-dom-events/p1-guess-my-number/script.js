"use strict";

const correct_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let high_score = 0;

document.querySelector(`.check`).addEventListener("click", function () {
  const guess = document.querySelector(`.guess`).value;

  // Quando não há input
  if (!guess) {
    document.querySelector(`.message`).textContent = "Invalid Number!";

    // Quando o jogador ganha
  } else if (guess == correct_number) {
    document.querySelector(`.message`).textContent = "Correct Number!";
    if (high_score < score) {
      high_score = score;
    }
    document.querySelector(`body`).style.backgroundColor = "green";
    document.querySelector(`.number`).style.width = "30rem";
    document.querySelector(`.number`).textContent = correct_number;

    // Quando o palpite é muito alto
  } else if (guess > correct_number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = "Too High!";
      score--;

      // Quando o jogador perde
    } else {
      document.querySelector(`.message`).textContent = "You Lost!";
      score = 0;
      document.querySelector(`body`).style.backgroundColor = "red";
    }

    // Quando o palpite é muito baixo
  } else {
    if (score > 1) {
      document.querySelector(`.message`).textContent = "Too Low!";
      score--;

      // Quando o jogador perde
    } else {
      document.querySelector(`.message`).textContent = "You Lost!!";
      score = 0;
      document.querySelector(`body`).style.backgroundColor = "red";
    }
  }
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = high_score;
});

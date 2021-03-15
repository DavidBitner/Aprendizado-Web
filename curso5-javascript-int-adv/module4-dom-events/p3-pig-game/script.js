"use strict";

// Declarando variáveis DOM
let p1_score = document.querySelector(`#p1-score`);
let p1_total = document.querySelector(`#p1-total`);
let p2_score = document.querySelector(`#p2-score`);
let p2_total = document.querySelector(`#p2-total`);
let dice = document.querySelector(`#dice`);
const btn_new_game = document.querySelector(`#new`);
const btn_roll = document.querySelector(`#roll`);
const btn_hold = document.querySelector(`#hold`);

// Declarando variáveis simples
let score = 0;

// Settando jogo
p1_score.textContent = 0;
p1_total.textContent = 0;
p2_score.textContent = 0;
p2_total.textContent = 0;

// Funções dos botões
btn_new_game.addEventListener("click", function () {
  p1_score.textContent = 0;
  p1_total.textContent = 0;
  p2_score.textContent = 0;
  p2_total.textContent = 0;
  score = 0;
});

btn_roll.addEventListener("click", function () {
  let n = Math.trunc(Math.random() * 6 + 1);

  dice.src = "img/dice-1.png";

  switch (n) {
    case 1:
      dice.src = "img/dice-1.png";
      // Perde a vez e o score
      break;
    case 2:
      dice.src = "img/dice-2.png";
      score += 2;
      break;
    case 3:
      dice.src = "img/dice-3.png";
      score += 3;
      break;
    case 4:
      dice.src = "img/dice-4.png";
      score += 4;
      break;
    case 5:
      dice.src = "img/dice-5.png";
      score += 5;
      break;
    case 6:
      dice.src = "img/dice-6.png";
      score += 6;
      break;
    default:
      dice.src = "img/hidden.png";
      break;
  }
  p1_score.textContent = score;
});

btn_hold.addEventListener("click", function () {
  p1_total.textContent = Number(p1_total.textContent) + score;
  score = 0;
  p1_score.textContent = 0;
});

// Fazer o script cuidar do player atual, não do player1/player2

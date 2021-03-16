"use strict";

// Declarando variáveis DOM
let p1 = document.querySelector(`#p1`);
let p2 = document.querySelector(`#p2`);
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
let active_player = 1;
let roll_1 = false;

// Settando jogo
p1_score.textContent = 0;
p1_total.textContent = 0;
p2_score.textContent = 0;
p2_total.textContent = 0;

// Função inverter jogadores
function inverter_jogadores(jogador) {
  if (jogador == 1) {
    p1.classList.add("inactive");
    p1.classList.remove("active");
    p2.classList.add("active");
    p2.classList.remove("inactive");
  } else {
    p1.classList.add("active");
    p1.classList.remove("inactive");
    p2.classList.add("inactive");
    p2.classList.remove("active");
  }
}

// Funções dos botões
btn_new_game.addEventListener("click", function () {
  p1_score.textContent = 0;
  p1_total.textContent = 0;
  p2_score.textContent = 0;
  p2_total.textContent = 0;
  score = 0;
  dice.src = "img/hidden.png";
});

btn_roll.addEventListener("click", function () {
  let n = Math.trunc(Math.random() * 6 + 1);

  // dice.src = `img/dice-${dice}.png`

  switch (n) {
    case 1:
      dice.src = "img/dice-1.png";
      roll_1 = true;
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

  if (active_player == 1) {
    p1_score.textContent = score;
    if (roll_1) {
      active_player = 2;
      roll_1 = false;
      score = 0;
      p1_score.textContent = 0;
      inverter_jogadores(1);
    }
  } else if (active_player == 2) {
    p2_score.textContent = score;
    if (roll_1) {
      active_player = 1;
      roll_1 = false;
      score = 0;
      p2_score.textContent = 0;
      inverter_jogadores(2);
    }
  }
});

btn_hold.addEventListener("click", function () {
  if (active_player == 1) {
    p1_total.textContent = Number(p1_total.textContent) + score;
    score = 0;
    p1_score.textContent = 0;
    active_player = 2;
    inverter_jogadores(1);
  } else if (active_player == 2) {
    p2_total.textContent = Number(p2_total.textContent) + score;
    score = 0;
    p2_score.textContent = 0;
    active_player = 1;
    inverter_jogadores(2);
  }
});

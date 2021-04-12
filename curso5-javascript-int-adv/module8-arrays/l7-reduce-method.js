"use strict";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];

// O accumulator funciona como uma bola de neve
// A ", 0" depois da função serve para determinar o valor inicial do accumulator

// const balance = movements.reduce((accumulator, movement, index) => {
//   console.log(`Iteration ${index}. Accumulator ${accumulator}`);
//   return accumulator + movement;
// }, 0);

const balance = movements.reduce(
  (accumulator, movement) => accumulator + movement,
  0
);

console.log(balance);

// Exemplo
const max = movements.reduce(function (accumulator, movement) {
  if (accumulator > movement) {
    return accumulator;
  } else {
    return movement;
  }
}, movements[0]);

console.log(max);

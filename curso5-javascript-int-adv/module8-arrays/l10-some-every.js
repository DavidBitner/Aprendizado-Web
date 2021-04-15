"use strict";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];

// SOME
// Ver se existe algum valor acima de 0
const any_deposits1 = movements.some((mov) => mov > 0);
console.log(any_deposits1);

// Checkar se existe algum valor acima de 5000
const any_deposits2 = movements.some((mov) => mov > 5000);
console.log(any_deposits2);

// EVERY
// Este método checa se todos os valores em um array são verdadeiros conforme a condição passada
console.log(movements.every((mov) => mov > 0));
console.log(movements.every((mov) => mov > -5000));

// Separar callback
const deposit = (mov) => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

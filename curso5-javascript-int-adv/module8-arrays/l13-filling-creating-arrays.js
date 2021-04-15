"use strict";

// Manual
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty array
console.log(new Array(7));

// Fill method
let x = new Array(10);
x.fill(1);
console.log(x);

// Preenchendo array a partir da terceira posição
x = new Array(10);
x.fill(2, 3);
console.log(x);

// Preenchendo array a partir da terceira posição até a nona posição
x = new Array(10);
x.fill(3, 3, 9);
console.log(x);

// Mudando array a partir da segunda posição até a sexta posição
x.fill(4, 2, 6);
console.log(x);

// Preenchendo array com o método "from". É necessário ter uma callback function nesse método
// Preenchendo com 1
let y = Array.from({ length: 7 }, () => 1);
console.log(y);

// Preenchendo de 1 a 7
y = Array.from({ length: 7 }, (current, index) => index + 1);
console.log(y);

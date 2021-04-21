"use script";

// Raiz quadrada
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// Raiz Cúbica
console.log(8 ** (1 / 3));

// Máximo é minimo
console.log(Math.max(5, 15, 25, 12, 2));
console.log(Math.max(5, 15, "25", 12, 2));
console.log(Math.min(5, 15, 25, 12, 2));

// Área do círculo
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Numero aleatório
console.log(Math.trunc(Math.random() * 6) + 1);

// Função para numero aleatório estar sempre entre um minimo e um máximo
const rand_int = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(rand_int(10, 20));

// Rounding integers
console.log(Math.trunc(23.3));
console.log(Math.trunc(23.9));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

// Rounding floats
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.743).toFixed(2));
console.log(+(2.743).toFixed(2));

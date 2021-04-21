"use strict";

console.log(23 === 23.0);

// Em JavaScript não é possível fazer contas complexas precisas
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// É possível substituir o "Number" pelo sinal de "+"
console.log(Number("23"));
// ===
console.log(+"23");

// Parsing
console.log(Number.parseInt("30px"));
console.log(Number.parseInt("px30"));

console.log(Number.parseInt("2.5rem"));
console.log(Number.parseFloat("2.5rem"));

// Checar se o valor é um NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// Checando se o valor é um numero
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

// Checando se o valor é um integer
console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger("23"));
console.log(Number.isInteger(23 / 0));

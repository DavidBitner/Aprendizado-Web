"use strict";

// Map
const currencies = new Map([
  ["USD", "United Stater dollar"],
  ["BRL", "Brazilian real"],
  ["EUR", "Euro"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currencies_unique = new Set(["USD", "USD", "BRL", "EUR", "BRL", "EUR"]);

currencies_unique.forEach(function (value, _, set) {
  console.log(`${value} ${i}`);
});

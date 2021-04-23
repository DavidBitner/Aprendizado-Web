"use strict";

const num = 156156514.121;
const options = {
  style: "unit", // percent, currency
  unit: "celsius", // mile-per-hour,
  // currency: "EUR", // USD
  // useGrouping: false,
};

console.log(`US: `, new Intl.NumberFormat("en-US").format(num));
console.log(`BR: `, new Intl.NumberFormat("pt-BR").format(num));
console.log(`SY: `, new Intl.NumberFormat("ar-SY").format(num));
console.log(`US: `, new Intl.NumberFormat("en-US", options).format(num));
console.log(`BR: `, new Intl.NumberFormat("pt-BR", options).format(num));
console.log(`SY: `, new Intl.NumberFormat("ar-SY", options).format(num));

"use strict";

const restaurant = {
  restaurant_name: `Clássico Italiano`,
  location: `Via Angelo Tavanti, Firenze, Italy`,
  categories: [`Italian`, `Vegetarian`, `Pizzeria`, `Organic`],
  starter_menu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
  main_menu: [`Pizza`, `Pasta`, `Risotto`],
  open_hours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 8,
      close: 24,
    },
  },

  order: function (starter_order, main_order) {
    return [this.starter_menu[starter_order], this.main_menu[main_order]];
  },

  delivery_order: function ({
    starter_order = 0,
    main_order = 0,
    adress,
    time,
  }) {
    console.log(
      `Order received! ${this.starter_menu[starter_order]} and ${this.main_menu[main_order]} will be delivered to ${adress} at ${time}`
    );
  },
};

// SPREAD, pois está do lado direito do =
const arr = [2, 4, ...[6, 7]];
console.log(arr);

// REST, pois está do lado esquerdo do =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// O sinal de spread deve vir sempre no final da lista
const [pizza, , risotto, ...others2] = [
  ...restaurant.main_menu,
  ...restaurant.starter_menu,
];
console.log(pizza, risotto, others2);

// Objects
const { fri, ...other_days } = restaurant.open_hours;
console.log(fri, other_days);

// Functions
function add(...numbers) {
  console.log(numbers);
}
add(2, 4, 5);
add(4, 5, 6, 7);
add(1, 4, 5, 9, 10, 15);

function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(`A soma dos valores é ${sum}!`);
}
sum(2, 2);
sum(4, 5, 6);
sum(1, 1, 1, 1, 4, 5);

const x = [1, 2, 3];
sum(...x);

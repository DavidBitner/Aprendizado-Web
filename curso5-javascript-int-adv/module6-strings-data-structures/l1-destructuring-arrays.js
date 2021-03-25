"use strict";

const restaurant = {
  name: `Clássico Italiano`,
  location: `Via Angelo Tavanti, Firenze, Italy`,
  categories: [`Italian`, `Vegetarian`, `Pizzeria`, `Organic`],
  starter_menu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
  main_menu: [`Pizza`, `Pasta`, `Risotto`],

  order: function (starter_order, main_order) {
    return [this.starter_menu[starter_order], this.main_menu[main_order]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);

// first == Italian, second == Vegetarian
const [first, second] = restaurant.categories;
console.log(first, second);

// first == Italian, second == Pizzeria
const [first2, , second2] = restaurant.categories;
console.log(first2, second2);

// first == Vegetarian, second == Italian
let [first3, second3] = restaurant.categories;
[first3, second3] = [second3, first3];
console.log(first3, second3);

// Order/retornando dois valores de uma função em variáveis
console.log(restaurant.order(1, 2));
const [starter, main] = restaurant.order(1, 2);
console.log(starter, main);

// Nested arrays destructuring
const nested = [2, 4, [5, 7]];
const [first4, , second4] = nested;
console.log(first4, second4);

const [first5, , [second5, third5]] = nested;
console.log(first5, second5, third5);

// Default values
const [first6 = 1, second6 = 1, third6 = 1] = [8, 9];
console.log(first6, second6, third6);

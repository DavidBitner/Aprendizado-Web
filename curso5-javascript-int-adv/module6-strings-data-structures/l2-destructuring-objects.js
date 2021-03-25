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

// Destructuring
const { restaurant_name, categories, main_menu } = restaurant;
console.log(restaurant_name, categories, main_menu);

// Destructuring into variables
const {
  restaurant_name: res_name,
  categories: cat,
  main_menu: principal_menu,
} = restaurant;
console.log(res_name, cat, principal_menu);

// Default values
const { menu = [], starter_menu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 69;
let b = 96;
const obj = { a: 23, b: 45, c: 32 };
({ a, b } = obj);
console.log(a, b);

// Nested destructuring
const { fri } = restaurant.open_hours;
console.log(fri);

const {
  fri: { open, close },
} = restaurant.open_hours;
console.log(open, close);

const {
  fri: { open: o, close: c },
} = restaurant.open_hours;
console.log(o, c);

// Mandando um objeto para uma função
restaurant.delivery_order({
  starter_order: 0,
  main_order: 0,
  time: `22:45`,
  adress: `Via del Sole, 21`,
});

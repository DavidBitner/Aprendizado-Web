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

// Spread operator
const arr = [5, 6, 7];
const bad_new_arr = [1, 2, arr[0], arr[1], arr[2]];
console.log(bad_new_arr);

const good_new_arr = [1, 2, ...arr];
console.log(good_new_arr);

console.log(1, 2, 5, 6, 7);
console.log(...good_new_arr);

// Add itens to array
const new_menu = [...restaurant.main_menu, "Pastel"];
console.log(new_menu);

// Copy array
const main_menu_copy = [...restaurant.main_menu];
console.log(main_menu_copy);

// Merge two arrays
const full_menu = [...restaurant.main_menu, ...restaurant.starter_menu];
console.log(full_menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "David";
const letters = [...str, "", "B."];
console.log(letters);

// Copying objects
const restaurant_copy = { ...restaurant, founder: "David", founded_in: "1914" };
console.log(restaurant_copy);

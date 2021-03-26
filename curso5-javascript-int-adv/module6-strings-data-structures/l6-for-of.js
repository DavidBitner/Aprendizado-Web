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

// Para varrer os itens de um array, usa-se o for of
const menu = [...restaurant.starter_menu, ...restaurant.main_menu];
for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(item);
}

for (const [iterator, i] of menu.entries()) {
  console.log(`${iterator + 1}: ${i}`);
}

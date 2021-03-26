"use strict";

const open_hours = {
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
};

const restaurant = {
  restaurant_name: `Clássico Italiano`,
  location: `Via Angelo Tavanti, Firenze, Italy`,
  categories: [`Italian`, `Vegetarian`, `Pizzeria`, `Organic`],
  starter_menu: [`Focaccia`, `Bruschetta`, `Garlic Bread`, `Caprese Salad`],
  main_menu: [`Pizza`, `Pasta`, `Risotto`],
  open_hours,

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

// Property names
const properties = Object.keys(open_hours);
let str_open = `We are open ${properties.length} days of the week : `;
for (const item of properties) {
  str_open += `${item}, `;
}
console.log(str_open);

// Property values
const values = Object.values(open_hours);
console.log(values);

// Both values and names
const entries = Object.entries(open_hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

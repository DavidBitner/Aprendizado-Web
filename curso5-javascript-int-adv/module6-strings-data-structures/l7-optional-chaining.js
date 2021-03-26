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

// Quando for necessário saber se algo existe, é possível fazer o uso da "?" para facilitar a leitura do código
// Sem optional chaining é necessário usar o && multiplas vezes para saber se algo existe
if (restaurant.open_hours && restaurant.open_hours.mon) {
  console.log(restaurant.open_hours.mon.open);
}

// Com optional chaining é possível retornar undefined assim que a operação é chamada, sem a necessidade de um if
console.log(restaurant.open_hours.mon?.open);

// É possível ainda fazer uso do optional chaining multiplas vezes em uma unica sentença
console.log(restaurant?.open_hours?.sat?.open);

// Exemplo
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.open_hours[day]?.open;
  open && console.log(`On ${day}, we open at ${open}`);
  open || console.log(`On ${day}, we are closed`);
}

// Methods. Também é possível usar o optional chaining para definir se um determinado método existe ou não
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.order_risotto?.(0, 1) ?? "Method does not exist");

// Arrays. No caso de arrays é possível checar se o array está vazio ou não
const users = [{ name: "David", email: "hello@david.com" }];
console.log(users[0]?.name ?? "User array empty");

const empty_users = [];
console.log(empty_users[0]?.name ?? "User array empty");

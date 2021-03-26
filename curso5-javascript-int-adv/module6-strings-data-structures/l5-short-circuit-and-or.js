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

// OR
console.log(`-----OR-----`);

// Use any type of data, short circuiting, return any data type
// Short circuiting vai pegar o primeiro valor verdadeiro da sentença e mostra-lo, sem percorrer toda a sentença, já que o valor verdadeiro foi encontrado
console.log(3 || "David");
console.log("" || "David");
console.log(true || 0);
console.log(undefined || null);

// Se um valor for falsy, ele não será exibido, apenas o primeiro valor truthy será
console.log("" || null || 0 || "Hello" || 23);

// Or pode ser usado para facilitar a declaração de um default
// Nesse caso "num_guests" não foi definido, então 10 será atribuido a variável graças ao operador
const guests = restaurant.num_guests || 10;
console.log(guests);

// AND
console.log(`-----AND-----`);

// And funciona do mesmo jeito de OR porém ao contrário, o primeiro valor falsy da sentença é o que será lido
console.log(0 && "David");
console.log("David" && "");
console.log(true && 0);
console.log(undefined && null);

console.log("David" && 23 && null && 0);

// And pode ser usado para saber se algo existe, e caso exista fazer algo
restaurant.order && console.log(`Existe uma função de pedido`);

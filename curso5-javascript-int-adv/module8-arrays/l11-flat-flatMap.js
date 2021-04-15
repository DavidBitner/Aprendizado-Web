"use strict";

// FLAT serve para fazer um array com arrays ficar simplificado
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// É possível passar um parâmetro dizendo a quantidade de níveis que o array deve simplificar
const deep_arr = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(deep_arr.flat());
console.log(deep_arr.flat(2));

//Exemplo
const account1 = {
  owner: "David Bitner",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interest_rate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Deborah Silva",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interest_rate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "John Johnsons",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interest_rate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Kraismens Stalanovsky",
  movements: [430, 1000, 700, 50, 90],
  interest_rate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(`\nExemplo`);

// Juntar todas as movimentações em um só array
const accounts_movements = accounts.map((acc) => acc.movements);
console.log(accounts_movements);

// Mostrando todas as movimentações em um só array
const all_movements = accounts_movements.flat();
console.log(all_movements);

// Mostrando o balanço geral de todas as contas
const overall_balance = all_movements.reduce((acc, mov) => acc + mov, 0);
console.log(overall_balance);

// Tudo encadeado
const overall_balance_chain = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overall_balance_chain);

// FlatMap: É comum utilizar o map e em seguida o flat dentro de JS
const overall_balance_chain2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overall_balance_chain);

"use strict";

// Data
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

// 1. Somar todos os depósitos de todas as contas
console.log(`Atividade 1`);

const bank_deposits_sum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bank_deposits_sum);

// 2. Quantidade de depósitos no banco com pelo menos 1000 reais
console.log(`\nAtividade 2`);

// const bank_deposits_1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
// console.log(bank_deposits_1000);

const bank_deposits_1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(bank_deposits_1000);

// 3. Usar reduce para retornar um objeto
console.log(`\nAtividade 3`);

const { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (cums.withdrawals += cur);
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4. Fazer uma função que retorne um bom titulo. Ex: this is a nice title -> This Is a Nice Title
console.log(`\nAtividade 4`);

const convert_title = function (title) {
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  const exceptions = ["a", "an", "and", "the", "but", "or", "an", "in", "with"];

  const title_case = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  return capitalize(title_case);
};

console.log(convert_title(`this is a nice title`));
console.log(convert_title(`this is a LONG title but not too long`));
console.log(convert_title(`and here is another title with an EXAMPLE`));

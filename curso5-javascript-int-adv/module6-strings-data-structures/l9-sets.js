"use strict";

// Criando um set
const orders_set = new Set([
  "pizza",
  "risotto",
  "pizza",
  "pasta",
  "risotto",
  "pizza",
]);

console.log(orders_set);

console.log(new Set("david"));

// Tamanho do set
console.log(orders_set.size);

// Saber se determinada coisa existe dentro do set
console.log(orders_set.has("pizza"));
console.log(orders_set.has("bread"));

// Adicionar ao set
orders_set.add("garlic bread");
orders_set.add("garlic bread");
console.log(orders_set);

// Remover do set
orders_set.delete("pasta");
console.log(orders_set);

// Loop dentro do set
for (const iterator of orders_set) {
  console.log(iterator);
}

// Limpar o set
orders_set.clear();
console.log(orders_set);

// Exemplo
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staff_unique = [...new Set(staff)];
console.log(staff_unique);

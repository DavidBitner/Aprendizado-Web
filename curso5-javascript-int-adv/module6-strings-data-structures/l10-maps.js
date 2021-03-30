"use strict";

// Criar mapa
const rest = new Map();

// Adicionar chaves ao mapa
rest.set("name", "classico italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
rest
  .set("categories", ["italian", "pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest);

// Get
console.log(rest.get(`name`));
console.log(rest.get(true));
console.log(rest.get(1));

// Exemplo de uso do get
const current_time = 21;
console.log(
  rest.get(current_time > rest.get("open") && current_time < rest.get("close"))
);

// Saber se algo existe dentro do mapa
console.log(rest.has("categories"));

// Deletar algo do mapa
rest.delete(2);

// Tamanho do mapa
console.log(rest.size);

// Usar objetos como chaves do mapa
const arr = [1, 2];
rest.set(arr, "doidera");
console.log(rest.get(arr));

// Limpar o mapa
rest.clear();

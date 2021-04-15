"use strict";

// Strings
const owners = ["David", "Amanda", "Joana", "Kraismens"];
console.log("1- " + owners.sort());

// Numbers
const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];
console.log("2- " + movements.sort());

// O método sort não funciona muito bem para numeros, pois o método primeiro converte os valores do array para string para depois os reposicionar. Por isso é necessário o uso de uma callback function

// return < 0, A, B
// return > 0, B, A
movements.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
});
console.log("3- " + movements);

// Ordem decrescente
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
});
console.log("4- " + movements);

// Simplificado crescente
movements.sort((a, b) => a - b);
console.log("5- " + movements);

// Simplificado decrescente
movements.sort((a, b) => b - a);
console.log("6- " + movements);

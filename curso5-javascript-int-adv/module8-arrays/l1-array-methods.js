"use strict";

let arr = ["a", "b", "c", "d", "e"];
let arr2 = ["f", "h", "i", "j", "g"];

// Slice == Cortar uma parte do array
console.log(`Slice`);

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// Splice == Corta uma parte do array e muda o array original (o segundo valor passado no método é o numero de itens a se deletar do array, então splice(2, 4) significa que serão retirados quadro valores do array a partir da posição 2)
console.log(`\nSplice`);
console.log(arr.splice(2, 1));
arr.splice(-1);
console.log(arr);

// Reverse == Inverter array. O array original é modificado
arr = ["a", "b", "c", "d", "e"];
console.log(`\nReverse`);
console.log(arr.reverse());

// Concat == Juntar arrays.
arr = ["a", "b", "c", "d", "e"];
let arr_concat = arr.concat(arr2);
console.log(`\nConcat`);
console.log(arr_concat);

// Join == Juntar todos os valores do array em um só
console.log(`\nJoin`);
console.log(arr_concat.join(" - "));

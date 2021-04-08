"use strict";

const movements = [200, 450, 500, 900, -500, 3000, -560, -480, 70, 8000];

// FOR OF
console.log(`FOR OF`);
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

// FOR EACH
console.log(`\nFOR EACH`);
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(500)
// ...

// FOR EACH com Iterator. (a ordem dos valores passados na função é sempre a mesma, 1º valor = valor do array, 2º = iterator e 3º = array inteiro)
console.log(`\nFOR EACH WITH ITERATOR`);
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index}: You withdrew ${Math.abs(movement)}`);
  }
});

// A principal diferença entre o forof e o foreach é que não é possível parar o for each, ou seja, não existe um break, o foreach sempre vai fazer o loop por todo o array

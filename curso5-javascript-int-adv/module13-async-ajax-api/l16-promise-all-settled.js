"use strict";

// Promise.allSettled serve para retornar um array com o resultado de todas as promises que não terminaram em erro
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("ERROR"),
  Promise.resolve("Another success"),
]).then((res) => console.log(res));

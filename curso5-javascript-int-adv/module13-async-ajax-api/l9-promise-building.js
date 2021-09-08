"use strict";

// Ao criar uma promise, é necessário que a promise tenha uma função executora, que possuirá dois argumentos, o primeiro argumento será uma função para caso a promise seja concluida, e o segundo argumento será uma outra função para caso a promise não seja finalizada corretamente
// O resultado retornado pela função resolve é o que será manipulado pelo método "then"
const lottery_promise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("You WIN");
  } else {
    reject("You lost your money");
  }
});

// Ao executar a promise criada acima, é possível usar os métodos "then", "catch" e "finally" para lidar com os possíveis estados da promise
lottery_promise
  .then((resolve_value) => console.log(resolve_value))
  .catch((error) => console.error(error));

// Promise com asynchronous behaviour e erro
const lottery_promise_async = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject(new Error("You lost your money"));
    }
  }, 2000);
});

lottery_promise_async
  .then((resolve_value) => console.log(resolve_value))
  .catch((error) => console.error(error));

// Transformando setTimout em promise
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited 1 second`));

// É possível também criar uma promise e imediatamente tornar o estado dela resolve
Promise.resolve("Promise resolved").then((x) => console.log(x));
Promise.reject(new Error("Promise rejected")).then((x) => console.error(x));

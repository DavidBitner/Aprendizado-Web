"use strict";

// Criar Data
const now = new Date();
console.log(now);

console.log(new Date("Apr 22 2021 02:26:50"));
console.log(new Date("December 24, 2018"));

// Quando for necessario converter milisegundos para dias horas e etc, usa-se a seguinte conta
// milisenconds / (1000 * 60 * 60 * 24)
// 1000 == miliseconds para segundos
// 60 == segundos para minutos
// 60 == minutos para hora
// 24 == horas para dia

const account1 = {
  owner: "David Bitner",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interest_rate: 1.2, // %
  pin: 1111,

  movements_dates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

console.log(new Date(account1.movements_dates[0]));
console.log(new Date(2022, 5, 10, 15, 20, 25));
console.log(new Date(0));

// Trabalhando com datas
const future = new Date(2010, 10, 10, 10, 10);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toDateString());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(1289391000000));

console.log(Date.now());

// É possível mudar datas com o comando "set" da mesma forma que o comando "get"
future.setFullYear(2048);
console.log(future);

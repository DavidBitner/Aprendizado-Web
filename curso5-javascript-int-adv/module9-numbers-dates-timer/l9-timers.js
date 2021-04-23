"use strict";

console.log(`Timers`);
let stop = false;

// setTimeOut
// Timer para executar uma função depois de um certo tempo
setTimeout(() => {
  console.log(`Passaram-se 5 segundos.`);
  stop = true;
}, 5000);

// É importante saber que enquanto o código espera o tempo do timeout, ele continua funcionando, é possível perceber isso com o log logo abaixo
console.log(`Esperando...`);

// É possível passar argumentos da seguinte forma
setTimeout(
  (ing1, ing2) => {
    console.log(`Sua pizza de 10 segundos com ${ing1} e ${ing2} está pronta.`);
  },
  10000,
  "Batata",
  "Queijo"
);

// Clear timeout serve para cancelar um timer
const variavel = ["falso", "verdadeiro"];
const nome_do_timeout = setTimeout(() => {
  console.log(`Este timer não será executado`);
}, 50000);
if (variavel.includes("verdadeiro")) {
  clearTimeout(nome_do_timeout);
}

// setInterval
// Essa função ira executar uma função de tempo em tempo
const doidera = setInterval(() => {
  const now = new Date();
  console.log(now);
  if (stop) {
    clearInterval(doidera);
  }
}, 1000);

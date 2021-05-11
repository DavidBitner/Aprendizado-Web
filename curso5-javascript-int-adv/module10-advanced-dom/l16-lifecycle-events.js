"use strict";

// Este evento será executado quando o HTML e a árvore DOM de uma página forem carregados
document.addEventListener("DOMContentLoaded", function (e) {
  console.log(`HTMl parsed and DOM tree built!`, e);
});

// Este evento será executado quando todo o conteúdo de uma página for carregado, incluindo imagens e JS
document.addEventListener("load", function (e) {
  console.log(`Page fully loaded!`, e);
});

// Este evento será executado quando o conteúdo de uma página estiver sendo dispensado, fechado, recarregado
document.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = "";
});

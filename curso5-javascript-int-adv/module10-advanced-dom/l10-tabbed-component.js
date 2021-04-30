"use strict";
// CONTEUDO DE REFERÊNCIA, CHECAR P1-BANK-WEBSITE PARTE DE OPERAÇÕES PARA MAIS INFORMAÇÕES

// Declaração das variáveis
const tabs = document.querySelectorAll(".operations-tab");
const tabs_container = document.querySelector(".operations-tab-container");
const tabs_content = document.querySelectorAll(".operations-content");

tabs_container.addEventListener("click", function (e) {
  // Identificando qual aba foi selecionada
  const clicked = e.target.closest(".operations-tab");

  // Certificando que apenas a área dos botões pode ser selecionada
  // Clausula de defesa
  if (!clicked) {
    return;
  }

  // Abaixando botões não selecionados
  tabs.forEach((tab) => tab.classList.remove("operations-tab-active"));

  // Levantando botão selecionado
  clicked.classList.add("operations-tab-active");

  // Esconder as abas não selecionadas
  tabs_content.forEach((content) =>
    content.classList.remove("operations-content-active")
  );

  // Ativar o conteúdo certo levando em conta a aba selecionada
  document
    .querySelector(`.operations-content-${clicked.dataset.tab}`)
    .classList.add("operations-content-active");
});

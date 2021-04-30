"use strict";
// CONTEUDO DE REFERÊNCIA, CHECAR P1-BANK-WEBSITE PARTE DE EFEITO DE FADE PARA MAIS INFORMAÇÕES

// Efeito de fade no menu
// Função dos eventos
function handle_hover(e, opacity) {
  // Se o mouse estiver em cima de um elemento que tenha a classe "nav-link", ele entra no bloco
  if (e.target.classList.contains("nav-link")) {
    // Hover é o elemento que o mouse estiver em cima
    const hover = e.target;

    // Siblings são os elementos do menu nos quais o mouse não se encontra em cima
    const siblings = hover.closest(".nav").querySelectorAll(".nav-link");

    // Logo do menu
    const logo = hover.closest(".nav").querySelector("img");

    // Abaixando a opacidade de todos os siblings que não estão com o mouse em cima
    siblings.forEach((el) => {
      if (el !== hover) {
        el.style.opacity = opacity;
      }
    });

    // Abaixando a opacidade do logo
    logo.style.opacity = opacity;
  }
}

// Mouse em cima do elemento
// nav.addEventListener('mouseover', handle_hover.bind(0.5))
nav.addEventListener("mouseover", function (e) {
  handle_hover(e, 0.5)
});

// Mouse saindo de cima do elemento
// nav.addEventListener("mouseout", handle_hover.bind(1));
nav.addEventListener("mouseout", function (e) {
  handle_hover(e, 1);
});

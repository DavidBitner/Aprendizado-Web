"use strict";

// O que acontecerá quando o observer for ativado
function obs_callback(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
}

// Opções do observer
const obs_options = {
  root: null, // Parte do documento a ser observada
  threshold: [0, 0.2], // Porcentagem do objeto observado que estará visível quando o callback for ativado
  rootMargin: "-90px",
};

// Criação do observer
const observer = new IntersectionObserver(obs_callback, obs_options);

observer.observe(sessao_observada);

// Exemplo
// Navegação Sticky
// getBoundingClientRect(); serve para conseguir algumas informações sobre o tamanho de um elemento
const header = document.querySelector(".header");
const nav_height = nav.getBoundingClientRect().height;

function sticky_nav(entries) {
  const [entry] = entries;

  // Ativar navegação sticky quando não for possível mais ver o banner principal
  if (!entry.isIntersecting) {
    nav.classList.add("sticky"); // Adicionando classe CSS ao menu de navegação
  } else {
    nav.classList.remove("sticky");
  }
}

const header_observer = new IntersectionObserver(sticky_nav, {
  root: null,
  threshold: 0, // Navegação sticky será ativada quando 0% do header estiver na tela
  rootMargin: `-${nav_height}px`,
});

header_observer.observe(header);

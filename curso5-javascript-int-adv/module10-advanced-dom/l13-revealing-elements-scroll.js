"use strict";

// CONTEUDO DE REFERÊNCIA, CHECAR P1-BANK-WEBSITE PARTE DE REVELAR SESSÕES PARA MAIS INFORMAÇÕES

// Revelar sessões conforme a página for descendo
// Colocar todas as sessões em uma variável para poder observar todas ao mesmo tempo
const all_sections = document.querySelectorAll(".section");

// Função que irá revelar a sessão baseado na posição da página
function reveal_section(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  }

  // Removendo classe que esconde a sessão
  entry.target.classList.remove("section-hidden");

  // Removendo observer depois do mesmo ser usado
  observer.unobserve(entry.target);
}

// Criação do observer
const section_observer = new IntersectionObserver(reveal_section, {
  root: null,
  threshold: 0.15,
});

// Ativando o observer em todas as sessões
all_sections.forEach(function (section) {
  section_observer.observe(section);
  // Deixando as sessões escondidas para criar o efeito
  section.classList.add("section-hidden");
});

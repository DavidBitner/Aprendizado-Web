"use strict";

// Declaração das variáveis
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btn_close_modal = document.querySelector(".btn-close-modal");
const btns_open_modal = document.querySelectorAll(".btn-show-modal");
const tabs = document.querySelectorAll(".operations-tab");
const tabs_container = document.querySelector(".operations-tab-container");
const tabs_content = document.querySelectorAll(".operations-content");
const header = document.querySelector(".header");
const message = document.createElement("div");
const btn_scroll_to = document.querySelector(".btn-scroll-to");
const section_1 = document.querySelector("#section-1");
const nav = document.querySelector(".nav");

///////////////////////////////////////
// Modal window
// Função para abrir o modal
function open_modal(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

// Função para fechar o modal
function close_modal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Botões que abrem o modal
btns_open_modal.forEach((btn) => btn.addEventListener("click", open_modal));

// Botão que fecha o modal
btn_close_modal.addEventListener("click", close_modal);

// Sair do modal clicando fora dele
overlay.addEventListener("click", close_modal);

// Sair do modal com esc
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    close_modal();
  }
});

///////////////////////////////////////
// Mensagem cookie
// Criação da mensagem
message.classList.add("cookie-message");
message.innerHTML = `<p>Nós usamos cookies para melhorar o serviço</p> <button class="btn btn-close">Accept</button>`;
message.style.backgroundColor = "lightblue";
message.style.width = "100%";
message.style.height = "80px";

// Inserção da mensagem na página
header.prepend(message);

// Fechar mensagem de cookie
document.querySelector(".btn-close").addEventListener("click", function () {
  message.remove();
});

///////////////////////////////////////
// Smooth Scrolling
btn_scroll_to.addEventListener("click", function () {
  section_1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Operations
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
  handle_hover(e, 0.5);
});

// Mouse saindo de cima do elemento
// nav.addEventListener("mouseout", handle_hover.bind(1));
nav.addEventListener("mouseout", function (e) {
  handle_hover(e, 1);
});

///////////////////////////////////////
// Navegação Sticky
// getBoundingClientRect(); serve para conseguir algumas informações sobre o tamanho de um elemento
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

///////////////////////////////////////
// Revelar sessões conforme a página for descendo
// Colocar todas as sessões em uma variável para poder observar todas ao mesmo tempo
const all_sections = document.querySelectorAll(".section");

// Função que irá revelar a sessão baseado na posição da página
function reveal_section(entries, observer) {
  const [entry] = entries;

  // Clausula de defesa
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

///////////////////////////////////////
// Lazy loading images
// Selecionar todas as imagens que contenham a propriedade "data-src"
const img_targets = document.querySelectorAll("img[data-src]");

// Criando função que acontecerá quando o observer funcionar
function load_img(entries, observer) {
  const [entry] = entries;

  // Clausula de defesa
  if (!entry.isIntersecting) {
    return;
  }

  // Substituir src da imagem pelo data-src
  entry.target.src = entry.target.dataset.src;

  // Retirar classe de blur da imagem apenas depois do load acontecer
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  // Removendo observer depois do mesmo ser usado
  observer.unobserve(entry.target);
}

// Criando observer
const img_observer = new IntersectionObserver(load_img, {
  root: null,
  threshold: 0,
});

// Ativando observer nas imagens
img_targets.forEach(function (img) {
  img_observer.observe(img);
});

///////////////////////////////////////
// Slider
function slider() {
  const slides = document.querySelectorAll(".slide");
  const btn_left = document.querySelector(".slider-btn-left");
  const btn_right = document.querySelector(".slider-btn-right");
  let cur_slide = 0;
  const max_slide = slides.length;
  const dot_container = document.querySelector(".dots");

  function go_to_slide(slide) {
    slides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  }

  // Functions
  // Criando os pontos de navegação do slider
  function create_dots() {
    slides.forEach(function (_, index) {
      dot_container.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${index}"></button>`
      );
    });
  }

  // Função que irá ativar o botão correspondente ao slide selecionado
  function activate_dot(slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot-active"));

    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot-active");
  }
  // Next slide
  function next_slide() {
    if (cur_slide === max_slide - 1) {
      cur_slide = 0;
    } else {
      cur_slide++;
    }

    go_to_slide(cur_slide);
    activate_dot(cur_slide);
  }

  // Previous slide
  function previous_slide() {
    if (cur_slide === 0) {
      cur_slide = max_slide - 1;
    } else {
      cur_slide--;
    }

    go_to_slide(cur_slide);
    activate_dot(cur_slide);
  }

  // Init
  function init() {
    go_to_slide(0);
    create_dots();
    activate_dot(0);
  }

  init();

  // Event Handlers
  // Btns
  btn_right.addEventListener("click", next_slide);
  btn_left.addEventListener("click", previous_slide);

  // Habilitando a possibilidade de controlar os slides com as arrow keys
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      previous_slide();
    }
    if (e.key === "ArrowRight") {
      next_slide();
    }
  });

  // Adicionando a função de ir até o slide certo dependendo do ponto de navegação pressionado
  dot_container.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots-dot")) {
      const slide = e.target.dataset.slide;
      go_to_slide(slide);
      activate_dot(slide);
    }
  });
}

slider();

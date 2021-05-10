"use strict";

// É interessante fazer uso dessa função para carregar as imagens de uma página apenas quando estar imagens forem observáveis

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
  rootMargin: "200px", // Forçar carregamento das imagens antes do usuário chegar nelas
});

// Ativando observer nas imagens
img_targets.forEach(function (img) {
  img_observer.observe(img);
});

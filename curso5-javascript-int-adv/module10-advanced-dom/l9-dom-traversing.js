"use strict";

// É necessário saber navegar pelo DOM, já que as vezes é necessário selecionar um elemento indiretamente
const hs = document.querySelector(".hs");
console.log(hs.childNodes);
console.log(hs.children);

// Indo para baixo: Selecionar filho (child)
const h = hs.querySelector(".h");
h.style.backgroundColor = "green";
hs.firstElementChild.style.color = "beige";
hs.lastElementChild.style.backgroundColor = "lightblue";

// Indo para cima: Selecionar pai (parent)
const divs = hs.parentNode;
// divs.style.backgroundColor = "lightgray";
hs.closest(".divs").style.backgroundColor = "lightgreen";

// Indo para o lado: Selecionar irmão
const previous_sibling = h.previousElementSibling;
const next_sibling = h.nextElementSibling;
previous_sibling.style.backgroundColor = "red";
next_sibling.style.backgroundColor = "red";

// Selecionar todos os irmãos
const all_siblings = [...h.parentElement.children];
all_siblings.forEach((el) => {
  if (el !== h) {
    el.style.border = "1px solid purple";
  }
});

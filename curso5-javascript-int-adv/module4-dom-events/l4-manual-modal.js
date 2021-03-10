// A melhor forma de manipular uma página é usando classes CSS, com elas é possível esconder e mostrar coisas na tela através de eventos JS
"use strict";

// Atribuindo query selectors a variáveis
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btn_close_modal = document.querySelector(`.close-modal`);
const btns_open_modal = document.querySelectorAll(`.show-modal`);

// Funções dos event listeners
function open_modal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function close_modal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Loop que varre variável com um query selector all
for (let i = 0; i < btns_open_modal.length; i++) {
  console.log(btns_open_modal[i].textContent);
}

// Event listeners
for (let i = 0; i < btns_open_modal.length; i++) {
  btns_open_modal[i].addEventListener("click", open_modal);
}

btn_close_modal.addEventListener("click", close_modal);
overlay.addEventListener("click", close_modal);

// Keyboard Events. Para usar uma tecla como evento, é necessário usar o documento como base, quando uma tecla for pressionada será enviado para a função através da variável "event" qual tecla foi pressionada
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    close_modal();
  }
});

"use strict";

const message = document.createElement("div");
const header = document.querySelector(".header");
message.classList.add("cookie-message");
message.innerHTML = `<p>Nós usamos cookies para melhorar o serviço</p> <button class="btn-close">Accept</button>`;
header.prepend(message);

// Styles
message.style.backgroundColor = "blue";
message.style.width = "120%";

// Adiquirir informações de estilo
console.log(message.style.color); // Empty String
console.log(message.style.backgroundColor); // Não é empty porque foi iniciado no próprio JS
console.log(getComputedStyle(message).color); // Retorna cor
console.log(getComputedStyle(message).height);

// Adicionar unidade a uma propriedade de estilo
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 100 + "px";

// Mudar o atributo de uma variável CSS
document.documentElement.style.setProperty("--color-primary", "orangered");

// Atributos
const logo_site = document.querySelector(".nav-logo");
// console.log(logo.att);
// console.log(logo.src);
logo_site.alt = "Texto alt da imagem";

console.log(getAttribute("src")); // img/logo.png
console.log(logo_site.src); // exemplo.com/img/logo.png

logo_site.setAttribute("company", "Bitner");

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("1", "2");
logo.classList.remove("3", "4");
logo.classList.toggle("5");
logo.classList.contains("6");

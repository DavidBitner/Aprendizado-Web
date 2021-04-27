"use strict";

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// Seleção
// Seleção padrão
const header = document.querySelector(".header");

// Seleção por grupo
const all_sections = document.querySelectorAll(".section");
console.log(all_sections);

// Seleção por id
const section_1 = document.getElementById("section-1");

// Seleção por tag
const all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

// Seleção por classe
console.log(document.getElementsByClassName("btn"));

// Criando e inserindo elementos
// HTML adjacente
// 'beforebegin' 'afterbegin' 'beforeend' 'afterend'
section_1.insertAdjacentHTML("afterend", "<p>INSERIDO</p>");

// Criar elemento e adicionar coisas a ele
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'Nós usamos cookies para melhorar o serviço'
message.innerHTML = `<p>Nós usamos cookies para melhorar o serviço</p> <button class="btn btn-close-cookie">Accept</button>`;

/**
 * Inserir no documento.
 * Quando append e prepend forem usados, não é possível
 * colocar dois elementos diferentes usando estes comandos, o comando serve
 * para posicionar algo no documento, então ao chamar esses dois, ele irá
 * mover o elemento de um lugar para outro no documento.
 * Quando for necessário usar o mesmo elemento mais de uma vez, é necessário
 * clonar o elemento.
 */
header.prepend(message);
header.append(message);
header.append(message.cloneNode(true));

// Também é possível adicionar antes e depois do elemento
header.before(message.cloneNode(true));
header.after(message.cloneNode(true));

// Deletar elemento
document.querySelector(".btn-close").addEventListener("click", function () {
  message.remove();

  // old
  // message.parentElement.removeChild(message);
});

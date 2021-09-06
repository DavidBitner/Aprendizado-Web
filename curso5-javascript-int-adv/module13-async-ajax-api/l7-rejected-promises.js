"use strict";

const countries_container = document.querySelector(".countries");
const btn = document.querySelector(".btn-country");

// Função que vai mostrar país e suas informações na tela
function render_country(data, class_name = "") {
  // HTML que será usada na aplicação já com as informações necessarias
  const html = `
    <article class="country ${class_name}">
      <img class="country-img" src="${data.flag}" />
      <div class="country-data">
        <h3 class="country-name">${data.name}</h3>
        <h4 class="country-region">${data.region}</h4>
        <p class="country-row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country-row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country-row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countries_container.insertAdjacentHTML("beforeend", html);
}

// Função que vai mostrar para o usuário o erro no fetch
function render_error(msg) {
  countries_container.insertAdjacentHTML("beforeend", msg);
}

// Função de coletar dados do pais
function get_country_data(country) {
  // Fetch do pais 1
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then((response) => response.json())
    .then((data) => {
      render_country(data[0]);

      // Coletando pais vizinho
      const neighbour = data[0].borders[0];

      // Clausula de defesa caso não existam paises vizinhos
      if (!neighbour) {
        return;
      }

      // Fetch do pais vizinho
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    // Chamando método then sem criar um callback hell
    .then((response) => response.json())
    .then((data) => render_country(data, "neighbour"))
    // Catch serve para apontar o que irá acontecer caso ocorra um erro em algum dos fetch's
    .catch((error) => {
      console.error(error);
      render_error(`Something went wrong ${error}. Try Again!`);
    })
    // Finally serve para fazer com que um bloco de código sempre seja executado ao final de um fetch, seja o fetch um sucesso ou uma falha
    .finally(() => {
      countries_container.style.opacity = 1;
    });
}

btn.addEventListener("click", function () {
  get_country_data("brasil");
});

"use strict";

const countries_container = document.querySelector(".countries");

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
  countries_container.style.opacity = 1;
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
    .then((data) => render_country(data, "neighbour"));
}

get_country_data("brasil");

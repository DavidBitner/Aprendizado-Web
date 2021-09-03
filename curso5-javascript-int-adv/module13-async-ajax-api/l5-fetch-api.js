"use strict";

const countries_container = document.querySelector(".countries");

// Como funciona um request com a fetch api
const request = fetch(
  "https://restcountries.eu/rest/v2/name/brasil?fullText=true"
);

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
  // Todo fetch vai retornar uma promise, usando "then" é possível usar os dados de uma promise que foi ou não fullfilled
  fetch(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`)
    .then(function (response) {
      // A promise retornada do primeiro fetch precisa ser retornada junto com um "json()" para que seja possível usar os dados dela
      return response.json();
    })
    // Por ultimo chama-se um segundo "then" para utilizar as informações do request
    .then(function (data) {
      render_country(data[0]);
    });
}

get_country_data("brasil");

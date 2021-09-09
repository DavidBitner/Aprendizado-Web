"use strict";

// Async await é uma forma melhor de lidar com código, "await" serve para substituir o "then" das aulas anteriores

const countries_container = document.querySelector(".countries");

// Função que vai mostrar país e suas informações na tela
function render_country(data, class_name = "") {
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

// Geolocation api promise based
function get_position() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Função async await para saber onde se encontra
async function where_am_i() {
  // Usando await é possível passar o resultado de um fetch para uma variável ao invés de usar "then" para manipular a resolução do fetch
  // Geolocation
  const position = await get_position();
  const { latitude: lat, longitude: lng } = position.coords;

  // Reverse geocoding
  const response_geo = await fetch(
    `https://geocode.xyz/${lat},${lng}?geoit=json&auth=372124368989912681460x27012`
  );
  const data_geo = await response_geo.json();

  // Country data
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${data_geo.country}?fullText=true`
  );

  // Usando await na resolve da promise e passando o resultado da promise para uma outra variável
  const [data] = await response.json();
  render_country(data);
}

where_am_i();

"use strict";

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

// Função que irá mostrar erro na tela para o usuário
function render_error(msg) {
  countries_container.insertAdjacentHTML("beforeend", msg);
}

// Função async await para saber onde se encontra
async function where_am_i() {
  try {
    // Geolocation
    const position = await get_position();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const response_geo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=372124368989912681460x27012`
    );

    if (!response_geo.ok) {
      throw new Error("Problem getting location data");
    }

    const data_geo = await response_geo.json();

    // Country data
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${data_geo.country}?fullText=true`
    );

    if (!response_geo.ok) {
      throw new Error("Problem getting country data");
    }

    const [data] = await response.json();
    render_country(data);

    // Async functions sempre vão retornar promises, então para usar o valor retornado por uma async function é necessário usar "then"
    return `You are in ${data_geo.city}, ${data_geo.country}`;
  } catch (error) {
    console.log(`${error}`);
    render_error(`${error.message}`);

    // Enviando erro como retorno da async function para o código funcionar corretamente
    throw error;
  }
}

// Chamando função e atribuindo valor retornado pela mesma
where_am_i()
  .then((message) => console.log(message))
  .catch((error) => console.error(`${error.message}`))
  .finally(() => console.log(`Programm finished`));

// Chamando função e atribuindo valor retornado pela mesma com async e IIFE
(async function () {
  try {
    const city = await where_am_i();
    console.log(city);
  } catch (error) {
    console.error(`${error.message}`);
  }
  console.log(`Programm finished`);
})();

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
  // Bloco try que o JS tentara executar
  try {
    // Geolocation
    const position = await get_position();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const response_geo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=372124368989912681460x27012`
    );

    // Clausula de defesa para caso fetch não seja executado de maneira correta
    if (!response_geo.ok) {
      throw new Error("Problem getting location data");
    }

    const data_geo = await response_geo.json();

    // Country data
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${data_geo.country}?fullText=true`
    );

    // Clausula de defesa para caso fetch não seja executado de maneira correta
    if (!response_geo.ok) {
      throw new Error("Problem getting country data");
    }

    const [data] = await response.json();
    render_country(data);
  } catch (error) {
    // Bloco catch para lidar com os erros
    console.log(`${error}`);
    render_error(`${error.message}`);
  }
}

where_am_i();

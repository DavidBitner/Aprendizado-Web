"use strict";

const countries_container = document.querySelector(".countries");

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

function get_country_and_neighbour(country) {
  // AJAX call do primeiro pais
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
  );
  request.send();

  // Criando event listener que vai aguardar o request ser finalizado e armazenar as informações em outra variavel
  // This nesse caso é a request
  request.addEventListener("load", function () {
    // Converter JSON para uma string JS e desestruturando ao mesmo tempo
    const [data] = JSON.parse(this.responseText);

    // Render do primeiro pais
    render_country(data);

    // Coletar pais vizinho
    const [neighbour] = data.borders;

    // Clausula de defesa para caso o primeiro pais não tenha vizinhos
    if (!neighbour) {
      return;
    }

    // AJAX call do pais vizinho
    const request_vizinho = new XMLHttpRequest();
    request_vizinho.open(
      "GET",
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    );
    request_vizinho.send();

    // Event listener para quando o request do vizinho for finalizado
    request_vizinho.addEventListener("load", function () {
      const data_vizinho = JSON.parse(this.responseText);

      render_country(data_vizinho, "neighbour");
    });
  });
}

get_country_and_neighbour("brasil");

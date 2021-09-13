"use strict";

async function get_json(url, error_msg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${error_msg} (${response.status})`);
    }
    return response.json();
  });
}

// Promise.race vai retornar a primeira promise que que for executada corretamente
(async function () {
  const [response] = await Promise.race([
    get_json(`https://restcountries.eu/rest/v2/name/mexico?fullText=true`),
    get_json(`https://restcountries.eu/rest/v2/name/egypt?fullText=true`),
    get_json(`https://restcountries.eu/rest/v2/name/brasil?fullText=true`),
  ]);
  console.log(response);
})();

// Função de timeout
function timeout(seconds) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error("Request took too long!"));
    }, seconds * 1000);
  });
}

// Fazendo um fetch ser executado ao mesmo tempo da função timeout, caso o fetch não seja concluido antes do timeout, aplicação resultara em erro
Promise.race([
  get_json(`https://restcountries.eu/rest/v2/name/brasil?fullText=true`),
  timeout(0.01),
])
  .then(([data]) => console.log(data))
  .catch((error) => console.error(error));

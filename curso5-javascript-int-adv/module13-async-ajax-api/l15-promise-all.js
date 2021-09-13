"use strict";

async function get_json(url, error_msg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${error_msg} (${response.status})`);
    }
    return response.json();
  });
}

async function get_countries(c1, c2, c3) {
  try {
    /*
      // Coletando promises na ordem, uma de cada vez
      const [data1] = await get_json(
        `https://restcountries.eu/rest/v2/name/${c1}?fullText=true`
      );
      const [data2] = await get_json(
        `https://restcountries.eu/rest/v2/name/${c2}?fullText=true`
      );
      const [data3] = await get_json(
        `https://restcountries.eu/rest/v2/name/${c3}?fullText=true`
      );
      console.log(data1.capital, data2.capital, data3.capital);
    */

    // Coletando promises ao mesmo tempo
    const data = await Promise.all([
      get_json(`https://restcountries.eu/rest/v2/name/${c1}?fullText=true`),
      get_json(`https://restcountries.eu/rest/v2/name/${c2}?fullText=true`),
      get_json(`https://restcountries.eu/rest/v2/name/${c3}?fullText=true`),
    ]);

    console.log(data.map(([data]) => data.capital));
  } catch (error) {
    console.error(error);
  }
}

get_countries("brasil", "canada", "italy");

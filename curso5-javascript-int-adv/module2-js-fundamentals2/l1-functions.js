// Criando a função
function logger() {
  console.log('Hello, my name is Dave!')
}

// Chamando a função
logger()
logger()
logger()

//Função com dados
function processador_frutas(laranjas, uvas) {
  const suco = `Suco de ${laranjas} laranjas e ${uvas} uvas.`
  return suco
}

// Armazenando resultado da função em uma variável e dando os argumentos 4 e 6
const suco_ul = processador_frutas(4, 6)
console.log(suco_ul)

/**
 * Atividade
 * 1.Write a function called 'describeCountry'which takes three parameters: 'country', 'population' and 'capitalCity'. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
 * 2.Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/
function describe_country(country, population, capital_city) {
  const description = `${country} has ${population} million people an its capital city is ${capital_city}`
  return description
}

console.log(describe_country('Brasil', 210, 'Brasilia'))
console.log(describe_country('USA', 300, 'Washington'))
console.log(describe_country('Argentina', 50, 'Buenos Aires'))
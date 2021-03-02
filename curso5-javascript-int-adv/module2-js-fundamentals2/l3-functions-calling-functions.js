// Exemplo de funções chamando outras funções

function cortar_frutas(fruta) {
  return fruta * 4
}

function processador_frutas(laranjas, uvas) {
  const pedacos_laranja = cortar_frutas(laranjas)
  const pedacos_uvas = cortar_frutas(uvas)

  const suco = `Suco de ${pedacos_laranja} pedaços de laranjas e ${pedacos_uvas} pedaços de uvas.`
  return suco
}

console.log(processador_frutas(4, 8))

/**
 * Atividade
 * 
 * 1.Create a function called 'describePopulation'. Use the function type you like the most. This function takes in two arguments: 'country'and 'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
 * 2.To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier
 * 3.Call 'describePopulation' with data for 3 countries of your choice
*/

console.log('Atividade')

function percentage_of_world(country_population) {
  return country_population / 7900 * 100
}

function describe_population(country, population) {
  const percentage = percentage_of_world(population)
  return `${country} has ${population} million people, which is about ${percentage} of the world`
}

console.log(describe_population('Brasil', 210, 'Brasilia'))
console.log(describe_population('USA', 300, 'Washington'))
console.log(describe_population('Argentina', 50, 'Buenos Aires'))

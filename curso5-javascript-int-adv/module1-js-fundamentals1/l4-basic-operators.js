/*
1.If your country split in half, and each half would contain half the population, then how many people would live in each half?
2.Increase the population of your country by 1 and log the result to the console
3.Finland has a population of 6 million. Does your country have more people than Finland?
4.The average population of a country is 33 million people. Does your country have less people than the average country?
5.Based on the variables you created, create a new variable 'description' which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
*/

const country = 'Brasil'
const continent = 'South America'
const population = 200
const quarter_population = population / 4
const population_plus = population++
const isIsland = false
const language = 'Portuguese'

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`)
console.log(quarter_population + ' million people is half of half the population of Brazil')
console.log(`The average population of a country is 33 million people. ${country} have more people than the average country`)

if (population > 6) {
  console.log(`${country} have more people than Finland`)
} else {
  console.log(`${country} have less peoples than Finland`)
}

if (population > 33) {
  console.log(`${country} have more people than average`)
} else {
  console.log(`${country} have less peoples than average`)
}
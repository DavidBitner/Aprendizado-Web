// Parâmetro é o placeholder da função (ano_nasc), argumento é o que é dado quando a função é chamada (1991)

// Função de declaração
function calc_idade1(ano_nasc) {
  return 2021 - ano_nasc
}

const idade1 = calc_idade1(1991)
console.log(idade1)

// Função expressão é quando toda uma função é armazenada em uma variável e a variável é usada para executar a função
const calc_idade2 = function (ano_nasc) {
  return 2021 - ano_nasc
}

const idade2 = calc_idade2(1992)
console.log(idade2)

// Função Arrow, serve para criar funções em apenas uma linha
const calc_idade3 = ano_nasc => 2021 - ano_nasc
const idade3 = calc_idade3(1993)
console.log(idade3)

/**
 * Atividade 1
 * 
 * 1.The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1'which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
 * 2.To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
 * 3.Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
 * 4.Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)
*/

console.log('Atividade 1:')

function percentage_of_world1(country_population) {
  return country_population / 7900 * 100
}

console.log(percentage_of_world1(200))
console.log(percentage_of_world1(300))
console.log(percentage_of_world1(50))

const percentage_of_world2 = function (country_population) {
  return country_population / 7900 * 100
}

console.log(percentage_of_world2(200))
console.log(percentage_of_world2(300))
console.log(percentage_of_world2(50))

/**
 * Atividade 2
 * 
 * 1.Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

console.log('Atividade 2')

const percentage_of_world3 = country_population => country_population / 7900 * 100

console.log(percentage_of_world3(200))
console.log(percentage_of_world3(300))
console.log(percentage_of_world3(50))

// É possível fazer o uso desse operador para atribuir um valor a uma const, sem a necessidade de definir uma let e depois usar um if else

const age = 23
const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2
if (age >=18) {
  drink2 = 'wine'
} else {
  drink2 = 'water'
}

// É possível usar o condicional ternário dentro de um template literal (``), coisa que não é possível com if else's
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

/**
 * Atividade
 * 1.If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: 'Portugal's population is above average'. Otherwise, simply log 'Portugal's population is below average'. Notice how only one word changes between these two sentences!
 * 2.After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original
*/

console.log('Atividade')
const population = 130
console.log(`Portugal's popilation is ${population > 33 ? 'above' : 'below'} average`)
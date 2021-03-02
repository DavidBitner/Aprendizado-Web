// Declaração de variáveis
const friend1 = 'Johnsons'
const friend2 = 'James'
const friend3 = 'John'

// Declaração de Arrays
const friends1 = ['Johnsons', 'James', 'John']
const friends2 = new Array('Johnsons', 'James', 'John')

// Retorno de elementos dentro do array
console.log(friends2)
console.log(friends1[0])
console.log(friends2[1])
console.log(friends1.length)
console.log(friends1[friends1.length - 1])

// Manipulando Array (é possível mudar arrays mesmo sendo declarados como const, exceto quando a mudança realizada é do array como um todo)
friends2[2] = 'Blaber'
console.log(friends2)

// Arrays podem conter vários tipos de dados
const david = ['David', 'Bitner', 2021 - 1996, friends1]
console.log(david)

/**
 * Atividade
 * 
 * 1.Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
 * 2.Log to the console whether the array has 4 elements or not (true or false)
 * 3.Create an array called 'percentages' containing the percentages of the world population for these 4 population values. Use the function 'percentageOfWorld1'that you created earlier to compute the 4 percentage values
*/
function percentage_of_world1(country_population) {
  return country_population / 7900 * 100
}

const populations = [200, 400, 50, 800]

console.log(`${populations.length == 4 ? 'The array have 4 elements' : 'The array does not have 4 elements'}`)

const percentages = [percentage_of_world1(populations[0]), percentage_of_world1(populations[1]), percentage_of_world1(populations[2]), percentage_of_world1(populations[3])]

console.log(percentages)

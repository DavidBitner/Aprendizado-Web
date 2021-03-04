const david = [
  'David',
  'Bitner',
  2021 - 1996,
  'Programador',
  ['James', 'John', 'Johnson'],
  true
]

const types = []

for (let i = 0; i < david.length; i++) {
  // Lendo o array
  console.log(david[i], typeof david[i])

  // Preenchendo um array
  types[i] = typeof david[i]
  // types.push(typeof david[i])
}

console.log(types)

years = [1990, 1991, 1992, 1993]
ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i])
}

console.log(ages)

// Continue and break
// Continue sai do loop atual e vai direto para o próximo
// Break sai do laço
console.log('\n---ONLY STRINGS---')
for (let i = 0; i < david.length; i++) {
  if (typeof david[i] != 'string') continue
  
  console.log(david[i], typeof david[i])
}

console.log('\n---Only the first number---')
for (let i = 0; i < david.length; i++) {
  console.log(david[i], typeof david[i])

  if(typeof david[i] == 'number') break
}

/**
 * Atividade
 * 
 * 1.Let's bring back the 'populations' array from a previous assignment
 * 2.Use a for loop to compute an array called 'percentages' containing the percentages of the world population for the 4 population values.
*/
console.log('\nAtividade')

const populations = [200, 400, 50, 800]

const percentages = []

for (let i = 0; i < populations.length; i++) {
  percentages.push(populations[i] / 7900 * 100)
}

console.log(percentages)
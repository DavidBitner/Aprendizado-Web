const david = [
  'David',
  'Bitner',
  2021 - 1996,
  'Programador',
  ['James', 'John', 'Johnson']
]

// Loop backwards
for (let i = david.length - 1; i >= 0; i--) {
  console.log(david[i])
}

// Loop in loop
for (let exercise = 0; exercise < 2; exercise++) {
  console.log(`Starting exercise ${exercise}`)

  for (let repetition = 0; repetition < 5; repetition++) {
    console.log(`Repetition ${repetition}`)
  }
}

/**
 * Atividade
 * 
 * 1.Store this array of arrays into a variable called 'listOfNeighbours'[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
 * 2.Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
 * 3.You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway
*/
console.log('\nAtividade')

const list_of_neighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']]

for (let i = 0; i < list_of_neighbours.length; i++) {
  let neighbour = list_of_neighbours[i].length

  for (let i2 = 0; i2 < neighbour; i2++) {
    console.log(`Neighbour: ${list_of_neighbours[i][i2]}`)
  }
}

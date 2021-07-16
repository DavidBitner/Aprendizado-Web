const friends = ["Johnsons", "James", "John"];

// Push adiciona um valor ao fim do array
friends.push("Blaber");
console.log(friends);

// Unshift adiciona um valor ao inicio do array
friends.unshift("Carstens");
console.log(friends);

// Pop remove o ultimo valor de um array
friends.pop();
console.log(friends);

// Shift remove o primeiro valor de um array
friends.shift();
console.log(friends);

// Indexof retorna a posição de um elemento dentro de um array (caso o valor de indexOf não exista dentro do array, será retornado -1)
console.log(friends.indexOf("James"));
console.log(friends.indexOf("Bob"));

// Includes retorna um boolean para caso o valor exista ou não dentro do array
console.log(friends.includes("James"));
console.log(friends.includes("Bob"));

if (friends.includes("James")) {
  console.log("You have a friend called James");
}

/**
 * Atividade
 *
 * 1.Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
 * 2.At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours'array
 * 3.Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
 * 4.If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
 * 5.Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
 */
const neighbours = ["Argentina", "Paraguai", "Venezuela"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

const posicao1 = neighbours.indexOf("Argentina");
neighbours[posicao1] = "Uruguai";

console.log(neighbours);

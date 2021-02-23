/* 
Ordem de precedência dos operadores:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

const now = 2037
const age_jonas = now - 1991
const age_sarah = now - 2018

console.log(now - 1991 > now - 2018) // Dentro da ordem de precedência, a subtração será feita antes do maior que

let x, y // É possível declarar mais de uma variável ao mesmo tempo
x = y = 25 - 5 - 5 // x = y = 15, x = 15, 15 15
console.log(x, y)

const average_age = (age_jonas + age_sarah) / 2 // Os parênteses servem como prioridade máxima, sempre que algo estiver entre parênteses, será executado antes

console.log(age_jonas, age_sarah, average_age)
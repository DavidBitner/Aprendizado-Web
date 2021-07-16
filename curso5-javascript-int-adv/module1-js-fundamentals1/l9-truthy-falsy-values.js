/* Falsy value é quando um valor, quando convertido para boolean, será dado como falso, são eles:
0, '', undefined, null, NaN

Truthy value é quando um valor, que não os falsy é dado como verdadeiro
*/

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Quando um valor qualquer for colocado dentro de um if/else statement, esse numero será convertido automáticamente para boolean
const money = 0;
if (money) {
  console.log("You have money!");
} else {
  console.log("You have no money!");
}

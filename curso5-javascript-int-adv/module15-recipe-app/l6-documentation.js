/**
 * Description of the function
 * @param {string} msg Description of parameter. (string, numver, undefined, null, boolean, symbol)
 * @returns {undefined | array} Description of what the function returns
 * @this {object} Description of this keyword
 * @author David Bitner
 * @todo Details of what is yet to be done in the function
 */
function helloWorld(msg = "") {
  console.log(`Hello World ${msg}`);
}

helloWorld("doidera");

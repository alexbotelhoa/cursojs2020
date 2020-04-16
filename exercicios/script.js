const num1 = parseInt(prompt('Primeiro número:'));
console.log(num1);
document.body.innerHTML += `${num1} <br />`;

const num2 = parseInt(prompt('Segundo número:'));
console.log(num2);
document.body.innerHTML += `${num2} <br />`;

const num3 = confirm('Se "OK" => Soma | "Cancelar" => Multiplica');

if (num3) { resultado = num1 + num2 } else { resultado = num1 * num2 }

console.log(`Resultado dessa adição é: ${resultado}`);
document.body.innerHTML += `${resultado} <br />`;
alert(`Resultado dessa adição é: ${resultado}`);


/*
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let vaco = [varA, varB, varC]
console.log(vaco[1], vaco[2], vaco[0]);

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
*/


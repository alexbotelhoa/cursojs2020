function maior (numA, numB) {
   return numA > numB ? numA : numB;
}
console.log(maior(10, 20));

const maiorSlim = (numA, numB) => numA > numB ? numA : numB;
console.log(maior(10, 20));

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(1024, 2048));

// Escrever uma função que recebe um número e retorne o sequinte:
// Se o número for divisível por 3, retorne = Fizz;
// Se o número for divisível por 5, retorne = Buzz;
// Se o número for divisível por 3 e 5, retorne = FizzBuzz;
// Se o número NÃO for divisível po 3 e 5, retorne = O próprio número;
// Se o número for realmente um número, retorne = O próprio número;
// Use a função com números de 0 a 100;

function verficiaNumero(num) {
   const div3 = (num % 3) === 0 ? 'Fizz' : '';
   const div5 = (num % 5) === 0 ? 'Buzz' : '';
   const resultado = div3 == '' && div5 == '' ? num : div3 + div5; 
   return resultado;
}
let rand = Math.floor(Math.random() * 100);
console.log(rand);
console.log(verficiaNumero(rand));
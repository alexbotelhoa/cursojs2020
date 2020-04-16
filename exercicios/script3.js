//const valor = prompt('Digite um número:');
let valor = 10.10;

const numero = document.getElementById('numero');
const quadrada = document.getElementById('quadrada');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const baixo = document.getElementById('baixo');
const cima = document.getElementById('cima');
const decimal = document.getElementById('decimal');

numero.innerHTML = `<p>Seu número é: ${valor}</p>`;
quadrada.innerHTML = `<p>Rais quadrada: ${Math.sqrt(valor)}</p>`;
inteiro.innerHTML = `<p>${valor} é inteiro: ${Number.isInteger(valor)}</p>`;
nan.innerHTML = `<p>É NaN: ${Number.isNaN(valor)}</p>`;
cima.innerHTML = `<p>Arredondando para cima: ${Math.ceil(valor)}</p>`;
baixo.innerHTML = `<p>Arredondando para baixo: ${Math.floor(valor)}</p>`;
decimal.innerHTML = `<p>Com duas casas decimais: ${valor.toFixed(2)}</p>`;

// Solução dois
const texto = document.getElementById('texto');

texto.innerHTML = '';
texto.innerHTML +=
   numero.innerHTML + 
   quadrada.innerHTML +
   inteiro.innerHTML + 
   nan.innerHTML +
   cima.innerHTML + 
   baixo.innerHTML +
   decimal.innerHTML;
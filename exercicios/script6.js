const elementos = [
   {tag: 'p', texto: 'Frase 1'},
   {tag: 'div', texto: 'Frase 2'},
   {tag: 'footer', texto: 'Frase 3'},
   {tag: 'section', texto: 'Frase 4'},
]

//const body = document.querySelector('.body')
/* let tags = '';
for (i = 0; i < elementos.length; i++) { 
    tags += `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
}
body.innerHTML = tags; */

function * elemento() {
   yield "A";
   yield "B"; 
   yield "C";

   /*
   for (i = 0; i < elementos.length; i++) { 
      tags = `<${elementos[i].tag}>${elementos[i].texto}</${elementos[i].tag}>`;
      yield tags;
  }
  */
}
//body.innerHTML = elementos();
var iterator = elemento();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const nomes = [
   'Alex', 'Botelho', 'de', 'Almeida'
];

for (let key = 0; key < nomes.length; key++) { // Imprimi o valor via índice
   console.log(nomes[key]);
}

for (let key in nomes) { // Imprimi o valor via índice
   console.log(nomes[key]);
}

for (let value of nomes) { // Imprime direto o valor
   console.log(value);
}

nomes.forEach(function(value) {
   console.log(value);
});
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

function recebeEventForm (event) {
   event.preventDefault();
   
   const peso = form.querySelector('.peso');
   const altura = form.querySelector('.altura');

   const imc = (peso.value / (altura.value * altura.value)).toFixed(2);

   let resposta;

   if (imc < 18.5) {
      resposta = `Seu IMC é ${imc} (Abaixo do peso)`;
   } else if (imc >= 18.5 && imc <= 24.9) {
      resposta = `Seu IMC é ${imc} (Peso normal)`;
   } else if (imc >= 25 && imc <= 29.9) {
      resposta = `Seu IMC é ${imc} (Sobrepeso)`;
   } else if (imc >= 30 && imc <= 34.9) {
      resposta = `Seu IMC é ${imc} (Obesidade grau 1)`;
   } else if (imc >= 35 && imc <= 39.9) {
      resposta = `Seu IMC é ${imc} (Obesidade grau 2)`;
   } else if (imc >= 40) {
      resposta = `Seu IMC é ${imc} (Obesidade grau 3)`;
   } else {
      resposta = `Informe alguma valor`;
   }
   resultado.innerHTML = `<p>${resposta}</p>`;
}

form.addEventListener('submit', recebeEventForm);
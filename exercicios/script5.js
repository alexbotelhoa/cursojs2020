function zeroEsq(num) {
   return num <= 9 ? `0${num}` : `${num}`
}

// Solução 1
function data() {
   const data = new Date();

   let semana;
   let dia = zeroEsq(data.getDate());
   let mes;
   let ano = data.getFullYear();
   let hora = zeroEsq(data.getHours());
   let minuto = zeroEsq(data.getMinutes());
   let segundo = zeroEsq(data.getSeconds());

   switch (data.getDay()) {
      case 0: semana = 'domingo'; break;
      case 1: semana = 'segunda-feira'; break;
      case 2: semana = 'terça-feira'; break;
      case 3: semana = 'quarta-feira'; break;
      case 4: semana = 'quinta-feira'; break;
      case 5: semana = 'sexta-feira'; break;
      case 6: semana = 'sábado'; break;
   }

   switch (data.getMonth()) {
      case 0: mes = 'janeiro'; break;
      case 1: mes = 'fevereiro'; break;
      case 2: mes = 'março'; break;
      case 3: mes = 'abril'; break;
      case 4: mes = 'maio'; break;
      case 5: mes = 'junho'; break;
      case 6: mes = 'julho'; break;
      case 7: mes = 'agosto'; break; 
      case 8: mes = 'setembro'; break; 
      case 9: mes = 'outubro'; break; 
      case 10: mes = 'nevembro'; break; 
      case 11: mes = 'dezembro'; break;
   }

   return `${semana}, ${dia} de ${mes} de ${ano} ${hora}:${minuto}:${segundo}`;
}
const h1 = document.querySelector('.data1');
h1.innerHTML = data();


// Solução 2
const h2 = document.querySelector('.data2');
const data2 = new Date();
const opcoes = {
   dateStyle: 'full',
   timeStyle: 'short'
}
h2.innerHTML = data2.toLocaleDateString('pt-BR', opcoes)


// Solução 3
const data3 = new Date();

function semana(semana) {
   const semana3 = [
      'domingo', 'segunda-feira', 'terça-feira', 
      'quarta-feira', 'quinta-feira', 'sexta-feira', 
      'sábado' 
   ];
   return semana3[semana];
}

function mes(mes) {
   const mes3 = [
      'janeiro', 'fevereiro', 'março', 'abril',
      'maio', 'junho', 'julho', 'agosto', 'setembro',
      'outubro', 'novembro', 'dezembro'
   ]
   return mes3[mes];
}

let semana3 = semana(data3.getDay());
let dia3 = zeroEsq(data3.getDate());
let mes3 = mes(data3.getMonth());
let ano3 = data3.getFullYear();
let hora3 = zeroEsq(data3.getHours());
let minuto3 = zeroEsq(data3.getMinutes());
let segundo3 = zeroEsq(data3.getSeconds());

const dataFull = `${semana3}, ${dia3} de ${mes3} de ${ano3} ${hora3}:${minuto3}:${segundo3}`;

const h3 = document.querySelector('.data3');
h3.innerHTML = dataFull;
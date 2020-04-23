function mostraHora() {
   let data = new Date()
   return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
   })
}
/*
const timer = setInterval(function() {
   console.log(mostraHora())
}, 1000)
setTimeout(function() {
   clearInterval(timer)
}, 10000)
*/

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let timer;

iniciar.addEventListener('click', function(event) {
   //const tempo = new Date('02-01-1970 00:00:10');
   timer = setInterval(function() {
      relogio.innerHTML = mostraHora();
   }, 1000)
})

pausar.addEventListener('click', function(event) {
   setTimeout(function() {
      clearInterval(timer)
   })
})

zerar.addEventListener('click', function(event) {
   //const timer = '00:00:00'
   setTimeout(function() {
      clearInterval(timer)
      relogio.innerHTML = '00:00:00'
   })
})

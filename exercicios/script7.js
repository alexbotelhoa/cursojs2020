const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const bgColorBody = estiloBody.backgroundColor;

console.log(bgColorBody);

for (let p of ps) {
   //console.log(p.setAttribute('style', `background-color: ${bgColorBody}`))
   p.style.backgroundColor = bgColorBody;
   p.style.color = '#fff';
}
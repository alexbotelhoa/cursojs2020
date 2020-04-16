function meuEscopo () {
   const form = document.querySelector('.form');
   const resultado = document.querySelector('.resultado');

   const pessoas = [];

   function recebeEventForm (event) {
      event.preventDefault();
      
      const nome = form.querySelector('.nome');
      const sobrenome = form.querySelector('.sobrenome');
      const peso = form.querySelector('.peso');
      const altura = form.querySelector('.altura');
      
      pessoa = {
         nome: nome.value, 
         sobrenome: sobrenome.value, 
         peso: peso.value, 
         altura: altura.value
      };

      resultado.innerHTML += `<p>
         ${pessoa.nome}
         ${pessoa.sobrenome}
         ${pessoa.peso}
         ${pessoa.altura}
      </p>`;

      pessoas.push(pessoa);
      console.log(pessoas);
   }

   form.addEventListener('submit', recebeEventForm);
}
meuEscopo();
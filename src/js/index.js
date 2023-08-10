

//OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos seleciona-los
//Passo 1- pegar os personagem no JS pra poder verificar quando o usuario passar o mouse em cima de um dele 
 
const personagens = document.querySelectorAll('.personagem'); // pegar a classe personagem la tag <li>
//console.log(personagem);  // mostra todos os personagem da lista no console do site quando expecionado o lista de elementos 


// Passo 2 -adicionar a classe selecionado, no personagem que o usuario passar o cursor do mouse
personagens.forEach  ((personagem) => {
//console.log(personagem);
//laço de repetição, pra cada item vai ter uma representacao do personagem 
   personagem.addEventListener('mouseenter',() => {
      if(window.innerWidth < 450){  // se estiver abrindo do celular
window.scrollTo({top: 0, behavior: 'smooth'});   // top:0  ate o topo da tela; rolagem suave
      }
    //Passo 3- verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele 
        const personagemSelecionado = document.querySelector('.selecionado'); //pegar o só um personagem da classe selecionado e busca um elemnto so pois nao pode ter  dois elemento selecionado
       personagemSelecionado.classList.remove('selecionado'); //remover classe quando tirar o cursor do mouse de cima
    //console.log(personagem.classList);  //mostra a classe dos personagem
    personagem.classList.add('selecionado'); // adcionar a classe selecionado para cada personagem que ppassou o mouse em cima
   // console.log('mouse entrou na li'); // mostra la o mouse passando 
            //ag é possivel colocar um evento dentro de cada personagem 



            //OBJETIVO 2- quando passar o mouse em cima do personagem na listagem,trocar a imagem , o nome e a descrição do personagem grande

       // passo 1- pegar o elemento do personagem grande pra adicionar as inforações nele
       const imagemPersonagemGrande = document.querySelector('.personagem-grande'); // classe personagem grande para poder altera a foto dps 
       //console.log(imagemPersonagemGrande);

       //passo 2 - tirar a imagem do personagem grande
       const idPersonagem = personagem.attributes.id.value;         // atributos do personagem que tem a classe e o id, aq vamos pegar o id
       imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png`;                  // interpolação colocar a variavel, olhar o caminho da imagem

       // Passo 3 - alterar o nome do personagem grande 
       const nomePersonagem = document.getElementById('nome-personagem'); // pegar o id do elemento da imagem grande para dps alterar 
       nomePersonagem.innerText = personagem.getAttribute('data-name');     // adicionar o data-name em todos personagens da lista                              // o texto dps do do id sera alterado no html de ciclope pro outros 

       // Passo 4 - alterar a descrição do personagem grande
       const descricaoPersonagem = document.getElementById('descricao-personagem');
       descricaoPersonagem.innerText= personagem.getAttribute('data-description'); //A mesma coisa a cima mas com outro atributos trocando o texto
       })   
} ) 




  
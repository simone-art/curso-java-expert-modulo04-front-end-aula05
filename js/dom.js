//Document Object Model
//Consegue pegar qualquer conteúdo existente em uma página
//e passar para o JS
//inserir novos conteúdos na página
//Excluir, alterar, atualizar, listar qualquer conteúdo via DOM
//Gran árvore de tags tem como nó inicial o HTML

//Pegar id
const dados = document.getElementById("dados");
console.log(dados);

//QuerySelector pega qualquer coisa
const dados2 = document.querySelector

//Pegar pela class
const personagem1 = document.getElementsByClassName("personagem")
console.log(personagem1);

//Pegar pela tag
const getTD= document.getElementsByTagName('td');
console.log(getTD);

const getTD2= document.querySelectorAll('td');
console.log(getTD2);
console.log(getTD2[0]);
getTD2[2].textContent = "Princesa Leila";



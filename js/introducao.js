

//Variáveis
//Var deixa no escopo global
var diaSemana= 'Quarta-Feira';

//Console do navegador
console.log(diaSemana);

//Concatenacao
console.log('Hoje é ' + diaSemana);

//O Escopo do let é de bloco..aonde ele for criado, ele pode ser usado, fora dele não
let nomeUsuario = 'Simone Santos';
let idadeUsuario = 44;
let noite = 'true';
let email = 'pptrueno@gmail.com';

console.log(nomeUsuario);
console.log(`Nome do usuário:${nomeUsuario}, Email:${email}`);
console.log(noite, typeof noite);
console.log(email, typeof email);
console.log(idadeUsuario, typeof(idadeUsuario));

//Array
const pessoas = ['Maria', 'Ana', 'Pedro'];
console.log(pessoas);
console.log(pessoas[3]);

//Array recebe qualquer coisa
const coisas = ['Taty', 17, 'Mousse', 'Mesa']
console.log(coisas)

console.table(coisas);

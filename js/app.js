
const tbody = document.querySelector('tbody');
console.log(tbody);

//pegar o form para cancelar o envio dos dados(EVENTO)
//quando o evento submit for disparado, cancele esse evento
//Para executar uma função que estará ligad ao formulário

document.querySelector('form').addEventListener('submit', function(event){
    //cancelar o evento padrão - receber na função o evento
    event.preventDefault();

    //Recuperar os campos digitados do formulário e salvar em um array
    const campos =[
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
        
    ];

    //criar a linha que receberá as colunas da tabela
    const tr = document.createElement('tr');


    //Percorrer o array campos e pegar em cada um dos índices a informação digitada
    //Cria uma td para cada campo
    //e coloca essa td na tr
    campos.forEach((campo)=>{
        const td = document.createElement('td');

        //pegar o que foi digitado no campo
        td.textContent = campo.value;

        //Adicionar a td na tr
        tr.appendChild(td);
        //colocar no tbody a tr criada
        tbody.appendChild(tr);

        //limpar o formulário
        this.reset();
    })

});
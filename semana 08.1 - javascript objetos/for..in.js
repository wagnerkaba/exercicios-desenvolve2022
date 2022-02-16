
const cliente = {
    nome: 'andré',
    idade: 36,
    cpf: '98089089',
    email: 'andre@gmail.com',
    telefones: ['4534564564', '213456486'],
    dependentes: [
        {
            nome: 'Sara Saraiva',
            parentesco: 'filha',
            dataNasc: '20/03/2021'
        },
        {
            nome: 'Aleta Saraiva',
            parentesco: 'filha',
            dataNasc: '10/10/2014'
        }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor;
    }
}


let relatorio = '';

for(let chave in cliente){

    // se o tipo de dado for "object" ou "function" então não deve ser incluido no relatorio
    if(typeof cliente[chave]==="object" || typeof cliente[chave]==="function"){
        continue;
    } else {
        relatorio += `${chave}: ${cliente[chave]}\n`;
    }
   
}

console.log(relatorio);
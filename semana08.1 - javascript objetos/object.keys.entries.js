
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


console.log(Object.keys(cliente));
console.log(Object.entries(cliente));


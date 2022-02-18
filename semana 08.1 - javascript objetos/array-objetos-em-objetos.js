
// Como adicionar mais de um dependente no objeto cliente?



let cliente = {
    nome: 'andré',
    idade: 36,
    cpf: '98089089',
    email: 'andre@gmail.com',
    telefones: ['4534564564', '213456486'],
    dependentes: {
        nome: 'Sara Saraiva',
        parentesco: 'filha',
        dataNasc: '20/03/2021'
    }
}





//adicionando colchetes a dependentes, dependentes torna-se um array de objetos
//desse jeito é possível adicionar mais dependentes

cliente = {
    nome: 'andré',
    idade: 36,
    cpf: '98089089',
    email: 'andre@gmail.com',
    telefones: ['4534564564', '213456486'],
    dependentes: [{
        nome: 'Sara Saraiva',
        parentesco: 'filha',
        dataNasc: '20/03/2021'
    }]
}

cliente.dependentes.push({
    nome: 'Aleta Saraiva',
    parentesco: 'filha',
    dataNasc: '10/10/2014'
});

console.log(cliente);
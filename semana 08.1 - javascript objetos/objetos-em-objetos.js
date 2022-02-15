const cliente = {
    nome: "andré",
    idade:36,
    cpf:"98089089",
    email:"andre@gmail.com",
    telefones: ["4534564564", "213456486"]

}


cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNasc: "20/03/2021"
}

console.log(cliente);

// alterando dados de dependentes

cliente.dependentes.nome = "Sara Saraiva";

console.log(cliente);
const cliente = {
    nome: "andré",
    idade:36,
    cpf:"98089089",
    email:"andre@gmail.com"

}

// diferentes formas de acessar as propriedades do objeto

console.log(cliente["nome"]);

console.log(cliente.idade);


const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[2]])

console.log(cliente);

chaves.forEach(info=>console.log(cliente[info]));




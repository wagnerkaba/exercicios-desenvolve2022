
//O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:

// Syntax
// apply(thisArg)
// apply(thisArg, argsArray)



function imprimeNomeEmail(tipoCliente, agencia) {
    console.log(`
      ${tipoCliente} da agência ${agencia}:
      - nome: ${this.nome}, email: ${this.email}
      `)
}

const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}

const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com


// O MÉTODO CALL TAMBÉM PODERIA SER UTILIZADO, EXTRAINDO-SE OS PARAMETROS DO ARRAY. VEJA EXEMPLO:

tipoCliente1 = "cliente especial"
agencia1 = "Paraná"
tipoCliente2 = "cliente vip"
agencia2 = "Manaus"

imprimeNomeEmail.call(cliente1, tipoCliente1, agencia1);
imprimeNomeEmail.call(cliente2, tipoCliente2, agencia2);


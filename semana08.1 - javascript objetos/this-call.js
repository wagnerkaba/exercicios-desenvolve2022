
// call()
// Esse método permite que uma função seja chamada com parâmetros e valor de this específicos. Vamos ver um exemplo:

// Syntax
// call()
// call(thisArg)
// call(thisArg, arg1)
// call(thisArg, arg1, arg2)
// call(thisArg, arg1, ... , argN)
// Esse método permite que uma função seja chamada com parâmetros e valor de this específicos. Vamos ver um exemplo:


function imprimeNomeEmail(tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
}

const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
}


imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: c@email.com

imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Fred, email: f@email.com

// No exemplo acima, o primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.

// The call() allows for a function/method belonging to one object to be assigned and called for a different object.


function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}


const pizza = new Food("pizza", 65);

console.log(pizza);


// EXEMPLO 2

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

//The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

//Creating a user-defined object requires two steps:

// Define the object type by writing a function that specifies its name and properties. For example, a constructor function to create an object  Cliente might look like this:

function Cliente(nome,cpf, email, saldo){
    this.nome=nome;
    this.cpf=cpf;
    this.email=email;
    this.saldo=saldo;
    this.depositar=function(valor){
        this.saldo += valor;
    }
}

// Create an instance of the object with new.

const andre = new Cliente("André", "432432432", "angre@gmail.com", 100);

console.log(andre);
console.log(andre.nome);

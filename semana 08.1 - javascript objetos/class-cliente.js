
// obs: o nome de classe sempre deve começar com letra maiuscula

class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    // dentro da classe não é necessário escrever "function"
    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

const andre = new Cliente("Andre", "andre@gmail.com", "809809890", 100);

andre.exibirSaldo();

console.log(andre);
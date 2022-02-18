class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo +=valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}

const andre = new ClientePoupanca("Andre", "andre@gmail.com", "80980980", 100, 200);

console.table(andre);

andre.depositar(50);
andre.depositarPoupanca(30);

console.table(andre);
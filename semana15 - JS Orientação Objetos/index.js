import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 7879798789);
const cliente2 = new Cliente("Alice", 997689789);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

// conta2.saldo = 30000;

console.log(conta2.saldo);

console.log(contaCorrenteRicardo); // vai mostrar apenas agencia, pois cliente é campo privado

console.log(ContaCorrente.numeroDeContas);

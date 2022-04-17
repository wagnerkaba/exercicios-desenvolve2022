import { Cliente } from "./Cliente.js";

export class ContaCorrente{

    // A static property of a class is shared by all instances of that class.
    // veja nota-de-aulas: javascript static properties
    static numeroDeContas = 0;
    agencia;
    //cliente é uma variável privada
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    #cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this.#cliente = novoValor;
        }
    }

    get cliente(){
        return this.#cliente;
    }


    //saldo é uma variável privada
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    #saldo = 0;
    
    get saldo(){
        return this.#saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        //numeroDeContas é static, por isso não usa "this"
        //"this" seria um atributo apenas de uma instância
        //To access a static property, you use the class name followed by the `.` operator and the static property name.
        ContaCorrente.numeroDeContas +=1;
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this.#saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}

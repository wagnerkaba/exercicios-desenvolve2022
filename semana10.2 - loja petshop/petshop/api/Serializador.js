const ValorNaoSuportado = require('./erros/ValorNaoSuportado');


// Serializador serve para capturar os dados a serem enviados para o cliente e convertê-los em um formato específico que o cliente deseja.
// Por exemplo, se o cliente deseja que os dados sejam enviados por json, o serializador converte os dados para json.
//Serialization is the process of converting an object into a stream of bytes to store the object or transmit it to memory, a database, or a file. Its main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization.

class Serializador {
    json(dados) {
        return JSON.stringify(dados);
    }

    serializar(dados) {
        if (this.contentType === 'application/json') {
            console.log('Serializando dados...');
            return this.json(                 
                this.filtrar(dados)
            );
        }
        throw new ValorNaoSuportado(this.contentType);
    }

    // método para filtrar dados que não devem ser enviados como resposta
    // Recebe apenas objetos simples como parâmetro
    // Por exemplo, se não queremos que dados privados do fornecedor sejam enviados (por exemplo email do fornecedor), o método abaixo retira os dados que não queremos que sejam enviados.
    filtrarObjeto(dados){
        const novoObjeto = {};

        this.camposPublicos.forEach((campo) => {
            if (dados.hasOwnProperty(campo)){
                novoObjeto[campo] = dados[campo];
            }
        })
        return novoObjeto;
    }

    // método para filtrar dados que não devem ser enviados como resposta
    // Recebe como parâmetro arrays ou objetos simples
    // Quando o usuário pede para listar todos os fornecedores, o método listar envia um array como resposta
    // Nesse caso, o método filtrar irá receber esse array para ser filtrado
    // Quando o usuário pede para listar um fornecedor específico, o método listar envia apenas o objeto do fornecedor desejado
    // Nesse caso, o método filtrar recebe esse objeto para ser filtrado
    filtrar (dados) {
        if (Array.isArray(dados)) {
            dados = dados.map(item => {
                return this.filtrarObjeto(item);
            })
        } else {
            dados = this.filtrarObjeto(dados);
        }

        return dados;
    }

}

// Classe que cria um Serializador com propriedades específicas para uso
// Este é um exemplo do Design Pattern Template Method
// Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
class SerializadorFornecedor extends Serializador {
    constructor(contentType) {
        super();
        // contentType é uma propriedade específica da classe SerializadorFornecedor
        this.contentType = contentType;
        this.camposPublicos = ['id', 'empresa', 'categoria'];
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: ['application/json']
}
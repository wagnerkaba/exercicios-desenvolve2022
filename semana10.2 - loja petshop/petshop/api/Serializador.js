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
            return this.json(dados);
        }
        throw new ValorNaoSuportado(this.contentType);
    }

}

// Classe que cria um Serializador específico para Fornecedor
// Este é um exemplo do Design Pattern Template Method
// Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
class SerializadorFornecedor extends Serializador {
    constructor(contentType) {
        super();
        this.contentType = contentType;
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    formatosAceitos: ['application/json']
}
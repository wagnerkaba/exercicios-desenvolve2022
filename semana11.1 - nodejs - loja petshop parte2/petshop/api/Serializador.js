const ValorNaoSuportado = require('./erros/ValorNaoSuportado');
// jsontoxml  is a library designed to render js objects as xml.
// para instalar jsontoxml: npm install jsontoxml
const jsontoxml = require('jsontoxml');

//__________________________________________________________________________
//                  CLASSE SERIALIZADOR
//__________________________________________________________________________
// Serializador serve para capturar os dados a serem enviados para o cliente e convertê-los em um formato específico que o cliente deseja.
// Por exemplo, se o cliente deseja que os dados sejam enviados por json, o serializador converte os dados para json.
//Serialization is the process of converting an object into a stream of bytes to store the object or transmit it to memory, a database, or a file. Its main purpose is to save the state of an object in order to be able to recreate it when needed. The reverse process is called deserialization.

class Serializador {
    json(dados) {
        return JSON.stringify(dados);
    }

    xml(dados){

        //tag é o root element do xml
        //caso dados seja um único objeto, o root element do xml será tagSingular
        let tag = this.tagSingular;

        // se os dados recebidos forem uma lista de objetos, então o root element do xml será tagPlural e cada objeto terá uma tagSingular
        if (Array.isArray(dados)){            
            tag = this.tagPlural;
            dados = dados.map((item) => {
                return {
                    [this.tagSingular]: item
                }
            })
        }


        return jsontoxml({ [tag] : dados });
    }

    serializar(dados) {

        dados = this.filtrar(dados);

        if (this.contentType === 'application/json') {
            return this.json(dados);
        }

        if (this.contentType === 'application/xml') {
            return this.xml(dados);
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

//__________________________________________________________________________
//                  CLASSE SERIALIZADOR FORNECEDOR
//__________________________________________________________________________
// Classe que cria um Serializador com propriedades específicas para fornecedor
// Este é um exemplo do Design Pattern Template Method
// Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
class SerializadorFornecedor extends Serializador {


    // Parâmetros do construtor:
    // contentType: é o formato de dados que o usuário quer receber (por exemplo: JSON)
    // camposExtras: quando o usuário pede uma informação, a API envia apenas os dados públicos (id, empresa e categoria).
    // se o usuário quiser outros dados além dos dados públicos, ele precisa informar que dados deseja através do parâmetro camposExtras
    constructor(contentType, camposExtras) {
        super();
        // contentType é uma propriedade específica da classe SerializadorFornecedor
        this.contentType = contentType;
        this.camposPublicos = [
            'id', 
            'empresa',
            'categoria'
        ].concat(camposExtras || []); // se camposExtras for undefined, vai causar erro. Para evitar erro, concat deve concatenar uma lista vazia caso camposExtras seja undefined
        
        this.tagSingular = 'fornecedor'; // utilizado como parâmetro no método xml() para servir como "root element" do xml
        this.tagPlural = 'fornecedores'; // utilizado como parâmetro no método xml() para servir como "root element" do xml
    }
}

//__________________________________________________________________________
//                  CLASSE SERIALIZADOR PRODUTO
//  Para entender melhor, veja os comentários em SERIALIZADOR FORNECEDOR
//__________________________________________________________________________
class SerializadorProduto extends Serializador{
    constructor (contentType, camposExtras){
        super();
        this.contentType = contentType;
        this.camposPublicos = [
            'id',
            'titulo'
        ].concat(camposExtras || []);
        this.tagSingular = 'produto';
        this.tagPlural = 'produtos';
    }
}


//__________________________________________________________________________
//                  SERIALIZADOR ERRO
//__________________________________________________________________________
// Classe que cria um Serializador com propriedades específicas para mensagens de erro
class SerializadorErro  extends Serializador {
    constructor(contentType, camposExtras){
        super();
        this.contentType = contentType;
        this.camposPublicos = [
            'id',
            'mensagem'
        ].concat(camposExtras || []);

        this.tagSingular = 'erro'; // utilizado como parâmetro no método xml() para servir como "root element" do xml
        this.tagPlural = 'erros'; // utilizado como parâmetro no método xml() para servir como "root element" do xml
    }
}

module.exports = {
    Serializador: Serializador,
    SerializadorFornecedor: SerializadorFornecedor,
    SerializadorErro: SerializadorErro, 
    SerializadorProduto: SerializadorProduto,
    formatosAceitos: ['application/json', 'application/xml']
}
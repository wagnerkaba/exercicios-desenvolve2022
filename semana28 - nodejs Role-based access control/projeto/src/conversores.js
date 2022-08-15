
class Conversor {

    converter(dados) {
        // se camposPublicos receber "*" então isso significa que o usuario pode ler todos os atributos
        // se o usuario pode ler todos os atributos, então não existe necessidade de filtrar
        if (this.camposPublicos.indexOf('*') === -1) {
            dados = this.filtrar(dados);
        }

        if (this.tipoDeConteudo === 'json') {
            return this.json(dados);
        }
    }

    json(dados) {
        return JSON.stringify(dados);
    }

    // o objetivo da função receber dados e filtrar esses dados para que mostrem apenas campos publicos
    filtrar(dados) {

        // verifica se dados é um array
        if (Array.isArray(dados)) {
            dados = dados.map((post) => this.filtrarObjeto(post))
        }
        else { //se dados não é um array, então ele é um objeto

            dados = this.filtrarObjeto(dados);
        }
        return dados;
    }

    filtrarObjeto(objeto) {
        const objetoFiltrado = {};

        this.camposPublicos.forEach((campo) => {

            //The static Reflect.has() method works like the "in" operator as a function.
            //The "in" operator returns true if the specified property is in the specified object or its prototype chain.
            if (Reflect.has(objeto, campo)) {
                objetoFiltrado[campo] = objeto[campo];
            }
        })
        return objetoFiltrado;
    }

}




class ConversorPost extends Conversor {

    //tipoDeConteudo é o tipo para o qual haverá conversão. Por exemplo: json
    constructor(tipoDeConteudo, camposExtras = []) { //por padrão, camposExtra é uma lista vazia

        super();

        this.tipoDeConteudo = tipoDeConteudo;

        // camposPublicos são os campos que serão mostrados para o usuário
        // em regra, camposPublicos são apenas 'titulo' e 'conteudo' de um post
        // caso o usuario atual tenha direito de ver outros campos, isso deve ser enviado como parâmetro em camposExtras
        this.camposPublicos = ['titulo', 'conteudo'].concat(camposExtras);
    }


}

class ConversorUsuario extends Conversor {

    constructor(tipoDeConteudo, camposExtras = []) { //por padrão, camposExtra é uma lista vazia

        super();

        this.tipoDeConteudo = tipoDeConteudo;

        // camposPublicos são os campos que serão mostrados para o usuário
        // em regra, camposPublicos é apenas o nome de um usuario
        // caso o usuario atual tenha direito de ver outros campos, isso deve ser enviado como parâmetro em camposExtras
        this.camposPublicos = ['nome'].concat(camposExtras);
    }

}

class ConversorErro extends Conversor {
    constructor(tipoDeConteudo) {
        super();
        this.tipoDeConteudo = tipoDeConteudo;
        this.camposPublicos = ['message', 'mensagem'];
    }
}


module.exports = { ConversorPost, ConversorUsuario, ConversorErro };
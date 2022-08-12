
class ConversorPost {

    //tipoDeConteudo é o tipo para o qual haverá conversão. Por exemplo: json
    constructor(tipoDeConteudo) {
        this.tipoDeConteudo = tipoDeConteudo;

        // camposPublicos são os campos que qualquer pessoa (mesmo que não esteja registrada no blog) pode ver
        this.camposPublicos = ['titulo', 'conteudo'];
    }

    converter(dados){
        dados = this.filtrar(dados);

        if (this.tipoDeConteudo === 'json'){
            return this.converterJSON(dados);
        }
    }

    converterJSON(dados){
        return JSON.stringify(dados);
    }

    // o objetivo da função receber posts e filtrar esses posts para que mostrem apenas campos publicos
    // posts que possuem apenas campos publicos são posts que qualquer pessoa (mesmo que não esteja registrada no blog) pode ver
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

module.exports = ConversorPost;
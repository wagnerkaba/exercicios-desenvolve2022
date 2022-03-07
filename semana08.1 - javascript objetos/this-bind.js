
// O método bind() “prende” ou “liga” uma função ao contexto de um objeto. Por exemplo:


const personagem = {
    nome: "Princesa Leia",
    apresentar: function () {
        return `a personagem é ${this.nome}`
    }
}


const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

// Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a referência original e não consegue mais localizar onde está this.

// Ressolvemos este problema com bind():


const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

//The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
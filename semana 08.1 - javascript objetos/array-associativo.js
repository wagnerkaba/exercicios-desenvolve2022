const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipocolecao: ["quadrinhos"],
    contato: ["joao@email.com"],
    adicionarTipo: function (propriedade, tipo) {
        this[propriedade].push(tipo)
    }
}


for (i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao", "HQ" + i)
}

for (i = 0; i < 4; i++) {
    colecionador.adicionarTipo("contato", "telefone" + i)
}

console.log(colecionador);
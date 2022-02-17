// um objeto JSON não parece muito diferente de um objeto literal em JavaScript
// As diferenças de sintaxe entre JSON e um objeto JavaScript são:

// *** No JSON, as chaves sempre devem estar entre aspas duplas ” ”, no formato string. Já no objeto JavaScript, as aspas não são obrigatórias;
// *** O JSON aceita como valores apenas dados primitivos (string, number para números finitos, true, false e null), objetos e arrays. Não é possível declarar funções/métodos;
// *** Não são permitidas vírgulas após o último conjunto de chave/valor do objeto.

// JSON é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

// JSON.parse(): converte JSON para um objeto JavaScript;
// JSON.stringify(): converte um objeto JavaScript para o formato JSON.

const livro = {
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
}

// Por exemplo, podemos converter um objeto de livro para o JSON:

const jsonLivro = JSON.stringify(livro);

console.log(jsonLivro);

// O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização (ou marshaling em algumas linguagens como Go).
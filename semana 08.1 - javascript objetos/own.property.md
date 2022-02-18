# [Para saber mais: Propriedades enumeráveis](https://cursos.alura.com.br/course/fundamentos-javascript-objetos/task/95870)


Vimos que quando um objeto JavaScript é criado ele tem propriedades particulares (por exemplo, nome, cpf ou email e também outras propriedades herdadas do protótipo.

Além do nome e do valor, cada propriedade tem também três atributos:

* Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
* Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;
* Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.

Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento têm estes três atributos como true. Já a maior parte das propriedades herdadas do protótipo têm estes atributos como false e não podem ser enumeradas, adicionadas ou alteradas.

O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf e email) e que não são herdadas do protótipo.

Podemos verificar os atributos de cada propriedade utilizando alguns métodos nativos do JavaScript:

```
const catalogo = {
 "editora": "Casa do Código",
 "catalogo": [
 {
   "id": 50,
   "titulo": "Primeiros Passos com NodeJS",
   "autor": "João Rubens",
   "categoria": "programação",
   "versoes": ["ebook", "impresso"]
 }
]}
```
Usando o método Object.getOwnPropertyDescriptor() para descrever os atributos da propriedade editora, teremos:

```
console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))
```

O resultado será um objeto com os quatro atributos da propriedade editora: o valor (um string ”Casa do Código”) e os três atributos que descrevemos anteriormente:

```
{
 value: 'Casa do Código',
 writable: true,
 enumerable: true,
 configurable: true
}
```

A propriedade editora foi criada por nós e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável - ou seja, vai ser percorrida em um loop for...in e indexada a um array com Object.keys() ou Object.entries().

Veja que métodos que começam com getOwnProperty… funcionam apenas em propriedades “próprias” do objeto.

* Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; 
* Objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; 
* Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.

Protótipos e herança são temas vastos em JavaScript. A partir desta introdução, você pode praticar e se aprofundar no tema.
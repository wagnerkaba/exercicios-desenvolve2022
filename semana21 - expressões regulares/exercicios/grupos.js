
let alvo = '<a href="www.alura.com.br"> Cursos online </a>';
const exp = /<(a)\s+href="(.+)"(?:>(.*)<\/\1>)/g; // 'g'  is a optional flag (global search)

// OBS: caso queira retirar o non-capturing group, a expressão fica desse jeito:
// const exp = /<(a)\s+href="(.+)"(>(.*)<\/\1>)/g;

let resultado = exp.exec(alvo);
console.log(resultado);

// Quais grupos a regex seleciona?
// A regex possui 4 grupos, 3 são capturados. 
// O primeiro grupo devolve o nome da tag, sempre a.
// O segundo grupo devolve o conteúdo do atributo href.
// O terceiro grupo devolve o conteúdo da tag.

// Há back-references?
// Sim, o back-reference \1 referencia o primeiro grupo, (a).

//A regex contém non-capturing groups?
// Sim. If you already know what non-capturing groups in regular expressions are, here's the syntax: it's (?:) as in /(?:non-caputuring group)/.




// filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true. 

// Quando a função callback retorna verdadeiro, ou true, o elemento é adicionado no array de retorno, e quando ela retorna falso, ou false, o elemento é descartado.


const alunos = ['Guilherme', 'Aline', 'Fabiana', 'André', 'Ricardo'];
const notas = [0,6,7,4, 8];

let reprovados = alunos.filter((aluno, indice) => notas[indice] < 5);

console.log(reprovados);

// o visual studio code, reclama que o parâmetro aluno foi declarado, mas o valor dele nunca foi lido, porque declaramos a primeira variável, mas não está utilizando ela no bloco da função, não está sendo utilizado.

// Nesse caso o Java script tem um padrão para identificarmos quando um parâmetro não está sendo usado, que é colocar um underline ("_" também chamado de underscore). Se colocamos um underline o Java script sabe que aquele parâmetro existe, mas ele não vai ser utilizado no corpo da função.

// Para saber mais: https://stackoverflow.com/questions/27637013/what-is-the-meaning-of-an-underscore-in-javascript-function-parameter


reprovados = alunos.filter((_, indice) => notas[indice] < 7);

console.log(reprovados);



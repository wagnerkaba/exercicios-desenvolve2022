//tipagem dinâmica ou untyped

let varDinamica = 1;
varDinamica++;
console.log("Agora varDinamica tem valor numerico: " +varDinamica);

varDinamica = "hello world";
console.log("Agora varDinamica tem valor de string: " + varDinamica);

varDinamica = false;

if (!varDinamica) {
    console.log('Agora varDinamica tem valor booleano: "false"');
}
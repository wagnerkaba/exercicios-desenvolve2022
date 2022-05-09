var alvo='11a22b33c';

// esta é uma forma mais elegante de escrever o regex, comparado com usar RegExp (vide teste-regex.js)
var exp= /(\d\d)(\w)/g; // 'g'  is a optional flag (global search)
var resultado = null;
while (resultado=exp.exec(alvo)){
    console. log(resultado);
    console.log("lastIndex = " + exp.lastIndex);
}

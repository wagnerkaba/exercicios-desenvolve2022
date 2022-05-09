var alvo='11a22b33c';
var exp=new RegExp('(\\d\\d)(\\w)', 'g'); // 'g'  is a optional flag (global search)
var resultado=exp.exec(alvo);
console. log(resultado);
console.log(exp.lastIndex);
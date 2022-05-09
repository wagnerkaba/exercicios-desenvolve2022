
// Exercicio: troque todos os hifens de '2007-12-31' por '/'

var anoMesDia = '2007-12-31';
var exp = /-/g;
anoMesDia = anoMesDia.replace(exp, '/');
console.log(anoMesDia);

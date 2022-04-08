const pessoa = {
    nome: 'Ju',
    idade: 25
}

const pessoaComTelefone = {...pessoa, telefone: 434343};
console.log(pessoa);
console.log(pessoaComTelefone);

console.log(pessoa.nome);

const {idade} = pessoa;

console.log(idade);

function imprimeDados({nome, idade}){
    console.log(`o nome é ${nome}`);
    console.log(`a idade é ${idade}`);

}

imprimeDados(pessoa);
const alunos = ['Guilherme', 'Aline', 'Fabiana', 'André'];
const notas = [10,8,7,5];


let listaNotasAlunos = [alunos, notas];


const exibeNomeNota = (nomeDoAluno) => {
    if (listaNotasAlunos[0].includes(nomeDoAluno))
    {
        let indice = listaNotasAlunos[0].indexOf(nomeDoAluno);
        return `Aluno: ${listaNotasAlunos[0][indice]}; Nota: ${listaNotasAlunos[1][indice]}`;
    } else {
        return `Aluno ${nomeDoAluno} não está cadastrado`;
    }
}

console.log(exibeNomeNota("Aline"));
console.log(exibeNomeNota("Fabiana"));
console.log(exibeNomeNota("Marcelo"));


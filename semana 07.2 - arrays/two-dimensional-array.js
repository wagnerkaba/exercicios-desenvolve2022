const alunos = ['Guilherme', 'Aline', 'Fabiana', 'André'];
const notas = [10,8,7,5];

let alunosEnotas = [alunos, notas];



for (var x = 0; x < 4; x++){
    
    console.log (`${alunosEnotas[0][x]}, sua nota é ${alunosEnotas[1][x]}`);
}


const idades = [30, 35, 28]
const nomes = ["Ana", "Juliana", "Leonardo"]
const faculdade = [false, true, true]

const funcionarios = [nomes,idades,faculdade]


for (var x = 0; x < 3; x++){
    
    console.log (`Funcionario: ${funcionarios[0][x]}; idade: ${funcionarios[1][x]}; faculdade: ${funcionarios[2][x]}`);
}




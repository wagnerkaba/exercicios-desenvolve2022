

/*
AS funções abaixo servem para mostrar a diferença
entre passar uma variavel por referência e por valor

a variavel "idadeStefany" não é alterada quando passada como parâmetro

por outro lado, a lista "idadesAmigos" é alterada ao final da função

isso acontece porque Listas são passadas por referência 
para funções. Dessa forma, se modificamos seu conteúdo 
dentro da função, a lista é modificada. 

Explicação by WK:

Aconteceu que quando se passa a lista "idadesAmigos" para a função,
na verdade está se passando os ponteiros da lista "idadeAmigos"

Os ponteiros passados para a função também apontam para a lista
"idadesAmigos"

Está apontando para uma região da memória onde estão os valores 
e quando faz a cópia disso faz também cópia para apontar para 
o mesmo endereço da memória, por isso faz a modificação - 
elemento de índice zero da lista copiada também 
modifica o elemento zero da lista original.

Porque eles estão apontando para os lugares, estão modificando 
o mesmo elemento, por isso que quando está trabalhando com listas 
e objetos que trabalham usando ponteiros, tem que ter muito 
cuidado ao fazer cópia dos elementos.


Por outro lado, isso não acontece com número, 
que são passados por valor. Nesse caso, não são passados ponteiros.
Por isso, a varival "idadeStefany" não é alterada ao final da função.

*/





function calculaProximaIdade(idade) {
    idade += 1;
    console.log(idade);
}

function calculaProximasIdades(idades) {
    for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 1;
    }
    console.log(idades);
}

function calculaIdadesDaqui5Anos(idades) {
     for (let i = 0; i < idades.length; i += 1) {
        idades[i] += 5;
    }
    console.log(idades);
}

const idadeStefany = 21;
console.log("idade Stefany é:" + idadeStefany);
calculaProximaIdade(idadeStefany);



const idadesAmigos = [idadeStefany, 20, 23, 18, 7];
console.log("idades amigos é:" + idadesAmigos);

calculaProximasIdades(idadesAmigos);

calculaIdadesDaqui5Anos(idadesAmigos);

console.log("idades amigos é:" + idadesAmigos);

console.log("idade Stefany é:" + idadeStefany);


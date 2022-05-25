import React from 'react';

const ValidacoesCadastro = React.createContext();

// const ValidacoesCadastro = React.createContext({
//     cpf: semValidacao,
//     senha: semValidacao,
//     nome: semValidacao
// });

// function semValidacao(dados){
//     console.log("sem validação:" + dados);
//     return {valido:true, texto: ""};
// }
export default ValidacoesCadastro;
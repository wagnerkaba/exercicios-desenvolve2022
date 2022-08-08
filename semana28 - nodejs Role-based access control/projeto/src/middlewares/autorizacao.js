

// Este middleware é uma function composition. Para saber mais, vide "nota de aula 1.8 - middleware"
module.exports = (cargosObrigatorios) => (requisicao, resposta, proximo) => {

    
    // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    if(cargosObrigatorios.indexOf(requisicao.user.cargo) === -1){
        resposta.status(403);
        resposta.end();
        return;
    }
    proximo();
}
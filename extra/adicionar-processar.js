
const sitios = ['google.com', 'yahoo.com'];


console.log(adicionarHttp('uol.com'));

processar(sitios, adicionarHttp);


function adicionarHttp(url) {
    return "http://" + url;
}

function processar(sites, funcao) {
    const resultado = sites.map((site) => funcao(site));
    console.log(resultado);
}
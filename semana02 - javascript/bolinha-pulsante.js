

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

var raio = 20;
var sentido = 1;

function bolinhaPulsando() {

    limpaTela();
    desenhaCirculo((raio+raio) , (raio+raio) , raio, 'blue');

    if (raio > 300) {
        sentido = -1;
    }

    if (raio < 20) {
        sentido = 1;
    }

    raio = raio + sentido;

    console.log(raio);



}



setInterval(bolinhaPulsando, 10);

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var desenha = false;

// atribuindo diretamente a função anônima
tela.onmousemove = function(evento) {

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
    console.log(x + ',' + y);
}

tela.onmousedown = function() {

    desenha = true;
}

    tela.onmouseup = function() {

    desenha = false;
}


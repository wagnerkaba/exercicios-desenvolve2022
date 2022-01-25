document.write("<br><h1>Clique em algum ponto no quadro cinza</h1>");

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle="blue";
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*3.14);
    pincel.fill();

    console.log("posição do clique : " + x + ", " + y);
}


tela.onclick = desenhaCirculo;
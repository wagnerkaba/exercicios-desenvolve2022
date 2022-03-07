document.write("<br><h1>Clique em algum ponto no quadro cinza</h1>");
document.write("<h1>Clique e aperte 'shift' para aumentar bolinha</h1>");
document.write("<h1>Clique e aperte 'alt' para diminuir bolinha</h1>");


var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var raio = 10;

pincel.fillStyle = 'gray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;



    console.log(x + ',' + y);

    if (evento.shiftKey) {

        //raio é aumentado, mas não deve ser maior do que 40
        if (raio<=40){
            raio = raio + 10; 
        }
    }

    if (evento.altKey) {

        //raio é diminuído com a tecla "alt", mas não deve ser menor do que 5
        if (raio>=10){
            raio = raio - 5; 
        }

    }


    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

tela.onclick = desenhaCirculo;


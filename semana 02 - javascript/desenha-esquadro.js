
function desenhaTriangulo(xa, ya, xc, yc, cor){
    
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle=cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();
}



function desenhaEsquadro(xa, ya, xc, yc, cor) {

    desenhaTriangulo(xa, ya, xc, yc, cor);

    xa = (6*xa + xc)/7;
    ya = (9*ya + 5*yc)/14;
    xc = (5*xa + 9*xc)/14;
    yc = (ya + 6*yc)/7;

    desenhaTriangulo(xa, ya, xc, yc, 'white');
    
}


desenhaEsquadro(20,20,200,200, 'blue');





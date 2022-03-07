

var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = 'darkgreen';
pincel.fillRect(0,0,350,300);

pincel.fillStyle = 'black';
pincel.fillRect(45, 55 ,90, 90);
pincel.fillRect(205, 55 ,90, 90);
pincel.fillRect(135, 145, 70, 100);
pincel.fillRect(95, 190, 40, 110);
pincel.fillRect(205, 190, 40, 110);
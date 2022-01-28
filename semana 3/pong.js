//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda(); 
  }

  function mostraBolinha(){
    circle(xBolinha,yBolinha,diametro);
  }

  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }

  function verificaColisaoBorda(){
    if (xBolinha - raio < 0 || xBolinha + raio > width){
      velocidadeXBolinha *= -1;
    }
    if (yBolinha - raio < 0 || yBolinha + raio > height){
      velocidadeYBolinha *= -1;
    }
  }

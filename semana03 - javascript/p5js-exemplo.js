
/*
    Exemplo de código usando p5.js
    Vide https://p5js.org/get-started/
*/

function setup() {
    createCanvas(400, 400);
    background(0);  
  }
  
  function draw() {
    
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
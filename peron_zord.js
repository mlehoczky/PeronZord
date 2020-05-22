
function setup() {
  createCanvas(400, 400);
  frameRate(20);
}

function draw() {
  background(220);

  
  s1 = new Ship(12,14, height, width);
  s1.setX(mouseX);
  s1.drawShip();
  

  text(key, 33, 65); // Display last key pressed.
  

  
} 


let y;
let shots = [];
let shotSpeed = 5;


function setup() {
  createCanvas(300, 500);
  frameRate(50);
  y = height * 2 / 3;
}

function draw() {
  background(220);

  
  s1 = new Ship(12, 14, height, width);
  s1.setX(mouseX);
  s1.drawShip();

  
  //s1.shoot();
  
  text(key, 33, 65); // Display last key pressed.

  shots.forEach(element => {
    element.moveForward();
  });

} 

function mouseClicked() {
  shots.push(s1.shoot(shotSpeed));
};


let y;
let shots = [];
let shotSpeed = 10;

let lastTimeShot = 0;
let shotDelay = 200;
//let shotFrequency = 1.05;

function preload() {
  soundFormats('ogg');
  pewSound = loadSound('assets/sound/pew');
}


function setup() {
  // createCanvas(300, 500);
  createCanvas(windowWidth, windowHeight);
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
  //text("lastTimeShot: " + lastTimeShot + "millis: " + millis(), 33, 65);
  let now = millis();

  //if (mouseIsPressed && (millis() > lastTimeShot ** shotFrequency)) {
  if (mouseIsPressed && ((now - lastTimeShot) > shotDelay) ) {
    shots.push(s1.shoot(shotSpeed));
    pewSound.play();
    lastTimeShot = millis();
  };

  // if (touches.length > 0) {
  //   if (millis() > lastTimeShot ** shotFrequency) shots.push(s1.shoot(shotSpeed));
  // };


  shots.forEach(element => {
    element.moveForward();
  });

} 

function mousePressed() {
  shots.push(s1.shoot(shotSpeed));
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}



let y;
let shots = [];
let shotSpeed = 10;

let lastTimeShot = 0;
let shotDelay = 200;
//let shotFrequency = 1.05;

var backgroundImage;
var y1 = 0;
var y2;

var scrollSpeed = 1;


function preload() {
  soundFormats('ogg');
  pewSound = loadSound('assets/sound/pew');
  backgroundImage = loadImage("assets/images/terrain2.jpg");
}


function setup() {
  createCanvas(300, 500);
  // createCanvas(windowWidth, windowHeight);
  frameRate(30);
  y = height * 2 / 3;
  y2 = height;
}

function draw() {
  //background(220);
  image(backgroundImage, 0, y1, width, height);
  image(backgroundImage, 0, y2, width, height);
  
  y1 -= scrollSpeed;
  y2 -= scrollSpeed;
  
  if (y1 < -height){
    y1 = height;
  }
  if (y2 < -height){
    y2 = height;
  }

  
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



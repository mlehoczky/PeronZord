// let y;
let shots = [];
let shotSpeed = 10;

let lastTimeShot = 0;
let shotDelay = 200;
//let shotFrequency = 1.05;

var backgroundImage;
var enemyImage;

var enemy;
var y1;
var y2;
var s1;

var scrollSpeed = 1;


function preload() {
  soundFormats('ogg');
  pewSound = loadSound('assets/sound/pew');
  backgroundImage = loadImage("assets/images/terrain3.jpg");
  enemyImage = loadImage("assets/images/spaceship-oavv.png");

}


function setup() {
  createCanvas(300, 500);
  // createCanvas(windowWidth, windowHeight);
  frameRate(30);
  //y = height * 2 / 3;
  y1 = 0;
  y2 = height;

  s1 = new Ship(12, 14);
  enemy = new Enemy(enemyImage, width/2, height/3);
}

function draw() {

  image(backgroundImage, 0, y1, width, height);
  image(backgroundImage, 0, y2, width, height);
  
  y1 += scrollSpeed;
  y2 += scrollSpeed;
  
  if (y1 > height){
    y1 = -height;
  }
  if (y2 > height){
    y2 = -height;
  }
  
  s1.setX(mouseX);
  s1.setY(mouseY);
  s1.drawShip();
  enemy.update();
  enemy.show();

  
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



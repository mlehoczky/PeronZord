// let y;
let shots = [];
let shotsImpacted = [];
let lastImpactedShotTime;
let shotSpeed = 10;

let lastTimeShot = 0;
let now;
let shotDelay = 200;
//let shotFrequency = 1.05;

let backgroundImage;
let enemyImage;

let enemy;
let yBkground1;
let yBkground2;
let s1;


let scrollSpeed = 1;


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
  yBkground1 = 0;
  yBkground2 = height;

  s1 = new Ship(12, 14);
  enemy = new Enemy(enemyImage, width/2, height/3);

  enemy.setVulnerableAreas(39, 55, 257, 72); // wing spread
  enemy.setVulnerableAreas(142, 26, 160, 200);  //major axis 
  enemy.setVulnerableAreas(39, 54, 54, 158); // left cannon
  enemy.setVulnerableAreas(244, 54, 257, 159); // right cannon


}

function draw() {
  //background(0);
  image(backgroundImage, 0, yBkground1, width, height);
  image(backgroundImage, 0, yBkground2, width, height);
  
  yBkground1 += scrollSpeed;
  yBkground2 += scrollSpeed;
  
  if (yBkground1 > height){
    yBkground1 = -height;
  }
  if (yBkground2 > height){
    yBkground2 = -height;
  }
  
  s1.setX(mouseX);
  s1.setY(mouseY);
  s1.drawShip();

  // enemy.update();
  // enemy.show();
  
  
  enemy.update();
  // if (shots.length > 0) {
  //   //console.log("no shots");
  //   //for(let i = 0; i < shots.length; i++) {
  //   // for(let i = shots.length - 1; i >= 0; i--) {
  //   //   if (enemy.checkForHits(shots[i]) || shots[i].isLostInSpace()) {
  //   //     shots[i].impactEnemy();
  //   //     shots.shift();
  //   //   }
  //   // }
  // }
  

  
  text(key, 33, 65); // Display last key pressed.
  //text("lastTimeShot: " + lastTimeShot + "millis: " + millis(), 33, 65);
  now = millis();

  //if (mouseIsPressed && (millis() > lastTimeShot ** shotFrequency)) {
  if (mouseIsPressed && ((now - lastTimeShot) > shotDelay) ) {
    shots.push(s1.shoot(shotSpeed));
    pewSound.play();
    lastTimeShot = millis();
  };

  // if (touches.length > 0) {
  //   if (millis() > lastTimeShot ** shotFrequency) shots.push(s1.shoot(shotSpeed));
  // };


  shots.forEach(shot => {
    shot.moveForward();
    if (enemy.checkForHits(shot)) {
      //shot.impactEnemy();
      shotsImpacted.push(shots.shift());
      lastImpactedShotTime = millis();
    }  
    if(shot.isLostInSpace()) {
      shots.shift();
    }
  });

  

  enemy.show(now);

  shotsImpacted.forEach(shot => {
    shot.explode();
    if ((now - lastImpactedShotTime) > 250) {
      shotsImpacted.shift();
    }
  });

} 

// function mousePressed() {
//   shots.push(s1.shoot(shotSpeed));
// }



// function windowResized() {

//   resizeCanvas(windowWidth, windowHeight);

// }



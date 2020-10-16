const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var object1;

var dartObject, launcherObject, targetObject, backgroundImage, timerObject, score, ground;

function preload() {
  backgroundImage = loadImage("assets/arenaBackground.jpg");
}

function setup() {
  var canvas = createCanvas(1350,605);
  engine = Engine.create();
  world = engine.world;

  dartObject = new Dart(200, 300, 100, 100);

  launcherObject = new Launcher(dartObject.body, {x: 200, y: 300});

  targetObject = new Target(900, 300, 200, 200);

  ground = new Ground(895, 375, 500, 10);


  timerObject = 20;

  score = 0;

  createTimer();
  
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);

  dartObject.display();
  launcherObject.display();
  targetObject.display();

  ground.display();


  textSize(25);
  fill("White");
  text("Score: " + score, 1100, 80);

  textSize(20);
  fill("White");
  text("Drag and Release the Dart to Hit The Target!", 450, 550);
  text("The Time Is Ticking.....", 540, 580);

  if (score === 3) {
    respawn();
    object1.display();
  }

}

function mouseDragged() {
  Matter.Body.setPosition(dartObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  launcherObject.fly();
}

async function getTime() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
}

function createTimer(){
  var timeleft = 20;
  var downloadTimer = setInterval(function(){

  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  
  document.getElementById("progressBar").value = 20 - timeleft;
  timeleft -= 1;
}, 2000);
}

function respawn() {
  object1 = new Target(1000, 300, 200, 200);   
}
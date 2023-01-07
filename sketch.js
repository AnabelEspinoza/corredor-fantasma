  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  
}


function draw() {
  background(255);
 
  
  drawSprites();
}

function spawnDoors()
 {
  //escribir aquí el código para aparecer los obstáculos
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //agregar la función random
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //cambiar la profundidad del fantasma y de la puerta
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //asignar lifetime a door, climber y invisible block

 .lifetime = 800;
    .lifetime = 800;
    .lifetime = 800;
    //agregar cada obstáculo al grupo obstaclesGroup.add(obstacle); aquí los obstáculos son door, climber, invisible block
    
     doorsGroup.add();
    invisibleBlock.debug = true;
    climbersGroup.add();
    invisibleBlockGroup.add();
  }
}


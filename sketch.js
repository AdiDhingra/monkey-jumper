var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacletipping
var bananaGroup, obstacleGroup
var survivaltime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banana_Image=loadImage("banana.png");
  obstacle_tipping = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)
monkey=createSprite(80,400)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.2
  monkey.velocityX=0

  ground=createSprite(10,460,1400,10)
  survivaltime=0;
  obstacle=createSprite(500,400)
  obstacle.addImage("tipping",obstacle_tipping)
  obstacle.scale=0.3
  obstacle.velocityX=-5
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
 
  background(220)
   text("Survival time: "+ survivaltime, 300,200);
drawSprites();
    food();
  stone();
 if(keyDown("space")&&monkey.y>=393.6){
 monkey.velocityY=-15
  
 }
 monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
 
  survivaltime = survivaltime + Math.round(frameCount/60);
  
  
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    
  } 
  if(obstacleGroup.isTouching(monkey)){
    survivaltime=0;
  }
  
   obstacle.setCollider("circle",0,0,200);
}
function food(){
  if (frameCount % 150 === 0){
    banana=createSprite(460,330)
banana.addImage("Image",banana_Image)
  banana.scale=0.14
  banana.velocityX=-5
    bananaGroup.add(banana)
  
}
  
  }
function stone(){
   if (frameCount % 150 === 0){
     obstacle=createSprite(500,400)
  obstacle.addImage("tipping",obstacle_tipping)
  obstacle.scale=0.3
  obstacle.velocityX=-5
  obstacleGroup.add(obstacle)
   }
  
}
  







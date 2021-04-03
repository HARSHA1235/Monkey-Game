var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
 createCanvas(400,400);
 
 // creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
 // ground
  ground = createSprite(80,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
  
  survivalTime = 0;
  
}


function draw() {
 
  background("white");
  
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  stroke("black");
  textSize(30);
  
  
  
  // infinite scorling of ground
   if(ground.x<0) {
     ground.x=ground.width/2;
   }
  
  if(keyDown("space") && monkey.y >= 150) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);

  //food function
  food();
  // obstacles function
  obstacles();
  
  drawSprites();
  
}

function food() {
  if(frameCount % 80 === 0){
var banana = createSprite(600,165,10,40);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.setLifetime = 100;
    
    FoodGroup.add(banana);
 }  
}   
    
function obstacles() {
  if(frameCount % 300===0){
var obstacle = createSprite(600,325,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
    obstacle.setLifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
}

var bg
var girl1,coin1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,road;
var road1;
var invisibleGround;
function setup() {
  createCanvas(800,400);
  road1=createSprite(400,200)
  road1.addImage(road)
  road1.scale=1.30
  road1.velocityX=-9
  girl_1=createSprite(70,270)
  girl_1.addAnimation("girl",girl1)
  girl_1.scale=0.4
  invisibleGround=createSprite(400,390,800,20)
}

function preload(){
  girl1=loadAnimation("girl_1.png","girl_2.png","girl_3.png")
  coin1=loadImage("coin.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  road=loadImage("road.png")
}

function draw() {
  background("red"); 
  if (road1.x < 0){
    road1.x = road1.width/2;
  }
  if(keyDown("UP_ARROW")) {
    girl_1.velocityY = -12;
}
girl_1.velocityY = girl_1.velocityY + 0.8
girl_1.collide(invisibleGround);
spawnCoins()
  drawSprites();
}

function spawnCoins() {
  
  //write code here to spawn the clouds
 if (frameCount % 120 === 0) {
    var coin = createSprite(800,120,40,10);
    coin.y = Math.round(random(80,120));
    coin.addImage(coin1);
    coin.scale = 0.5;
    coin.velocityX = -3;
    
     //assign lifetime to the variable
    coin.lifetime = 500;
    
    //adjust the depth
   // cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    //cloudsGroup.add(cloud);
  }
}
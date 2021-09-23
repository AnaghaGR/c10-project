var sea 
var ship , ship_moving

function preload(){
seaImage=loadImage("sea.png")
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaImage)
  ship=createSprite(200,220,20,20)
  ship.addAnimation("moving",ship_moving)
  ship.scale=0.1
  sea.scale=0.3
}

function draw(){
background(0) 
sea.velocityX=-5;
if(sea.x<0){
sea.x=sea.width/8
}
drawSprites()
}

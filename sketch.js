var sea 
var ship , ship_moving

function preload(){
seaImage=loadImage("sea.png")
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,20,20)
  sea.addImage(seaImage)
  ship=createSprite(200,170,20,20)
  ship.addAnimation("moving",ship_moving)
  ship.scale=0.1
  sea.scale=0.1
}

function draw(){
background("blue")
sea.velocityX=5;
if(sea.x<0){
sea.x=sea.width/2
}
drawSprites()
}

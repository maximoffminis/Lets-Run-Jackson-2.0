var track
var track_image
var boy 
var boyimage
var lboundary



function preload(){
  track_image=loadImage("path.png")
  boyimage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  track=createSprite(200,200)
  track.velocityY=4
  track.addImage(track_image)
  boy=createSprite(150,320,30,30)
  boy.addAnimation("running",boyimage)
  boy.scale=0.05
  
}

function draw() {
  background(0);
  if(track.y>400){
    track.y=height/2
  }
  
boy.x = World.mouseX;

  
drawSprites()
}

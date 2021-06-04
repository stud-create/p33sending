var bg1
var snow
function preload(){
  bg = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(800,400);
  bg1= createSprite(400, 200, 50, 50);
  bg1.addImage("snow1.jpg",bg)
  snow=new Snow(400,200,50)
}


function draw() {
  background(255,255,255);  
  snow.display()
  drawSprites();
}
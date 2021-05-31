function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload(){
  bgImg=loadImage("snow2.png");
}

function draw() {
  background(255,255,255);  
  backgroundImg(bg)
  drawSprites();
}
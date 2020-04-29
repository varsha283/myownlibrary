var movingRect, fixedRect;




function setup() {

  createCanvas(1200,800);
  movingRect = createSprite(1000, 200, 50, 50);
  movingRect.shapeColor="white"
movingRect.velocityX=-2;

fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="cyan" 

  box1 = createSprite(400, 250, 50, 50);
  box1.shapeColor="white"
  box1.shapeColor="white"
  box1.velocityX=2;

 box2 = createSprite(400, 50, 50, 50);
  box2.shapeColor="white"

  box3 = createSprite(300, 250, 50, 50);
  
}

function draw() {
  background(0);  
  box2.x=World.mouseX
  box2.y=World.mouseY
if(isTouching(box2,box3))
{
box2.shapeColor="red";
box3.shapeColor="red";
}
 if(bounceOff(movingRect,box1)) {
  movingRect.shapeColor = "red";
   box1.shapeColor = "red"; 
}
  else {
    movingRect.shapeColor="white";
   box1.shapeColor="white" ;
 }


  drawSprites();
}

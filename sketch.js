var fixedRect, movingRect;
var gameobject

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject = createSprite(500,600,80,40);
  gameobject.shapeColor = "red";
  gameobject.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameobject)){
    movingRect.shapeColor = "red";
    gameobject.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    gameobject.shapeColor = "green";
  }
  drawSprites();



 
}

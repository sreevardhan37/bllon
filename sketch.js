var car1,car2,car3,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car1=createSprite(50, 200, 50, 50);
  car1.velocityX=speed;


car2=createSprite(50, 200, 50, 50);
  car2.velocityX=speed;


car3=createSprite(50, 200, 50, 50);
  car3.velocityX=speed;

  wall=createSprite(1500, 200, 60,height/2);
}

function draw() {
  background(255,255,255);
  speed=random(55,90);
  weight=random(400,1500);

  if(wall.x-car3.x<(car.width=wall.width)/2)
{
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;

if(defformation>180)
{
  car.shapeColor=color(225,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor+color(230,230,0);
}

if(deformation<100)
{
  car.shapecolor=color(0,225,0);
}

}
  drawSprites();
}
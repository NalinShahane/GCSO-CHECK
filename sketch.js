  
var car,weight,speed;
var wall;
var speed, weight;

function setup()
{
   createCanvas(1600,400);
   //giving random values to variables SPEED and WEIGHT.
   speed=random(55,90)
   weight=random(400,1500)

   //creating a sprite that ressembles a car 
   car = createSprite(50,200,60,40);
   car.velocityX = speed; 
   car.shapeColor = "white";

   // creating a sprite that ressembles a wall
   wall = createSprite(1300,200,20,500);
   wall.shapeColor = "grey";
 
}

function draw() 
{
  background("black"); 
console.log(Deformation);
  //checking collision
 if ( wall.x-car.x < (car.width+wall.width)/2)
 {
  car.velocityX=0;
  var Deformation =0.5 * weight * speed* speed/22509;
  
  if(Deformation>180) 
{ 
  car.shapeColor="red";
}
  if(Deformation<180 && Deformation>100) 
{ 
   car.shapeColor="yellow";
}
   if(Deformation<100) 
{ 
   car.shapeColor="green";
}

}

  drawSprites();
}

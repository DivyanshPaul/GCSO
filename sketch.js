var car,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(500,400);
 //canvas.shapeColor = color(80,80,80);


  speed=random(45,60);
  weight=random(400,1500);

 car =  createSprite(50,200,50,50);
 
 wall = createSprite(400,200,60,120);
 wall.shapeColor = "white"
}


function draw() {
  background(80,80,80);  

  car.velocityX = speed ; 

  if(wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        car.shapeColor = "lightblue"
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = "lightpink"
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = "lightblue" 
      }
    } 
  drawSprites();
}
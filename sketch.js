var car,wall;
var speed,weight;

function setup() {
  createCanvas(1200,500);

  speed = random(90,55);
  weight = random(400,1500);

  car = createSprite(200,300,70,70);
  car.velocityX = speed;
  car.shapeColor = "blue";

  wall = createSprite(1150,300,80,500);
  wall.shapeColor = "purple";
  }

  function draw() {
    background("black");  
    if(wall.x - car.x < car.width/2 + wall.width/2 ){
      car.velocityX = 0;

    var deformation = 0.5* weight* speed* speed/22500;
    if (deformation > 180){
      car.shapeColor = (255,0,0);
    }
  
    if(deformation < 180 && deformation > 100){
      car.ShapeColor = (230,230,0);
    }
  
    if(deformation < 100){
      car.shapeColor = (0,255,0);
    }
    }
    drawSprites();
  }
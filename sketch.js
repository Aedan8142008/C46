var car, carImage;
var obstacle, obstacleImage, obstaclesGroup;
var building, buildingImage, buildingsGroup;
var dealership, dealershipImage;
var road, roadImage;


function preload() {
carImage=loadImage("car1.2.png");
roadImage=loadImage("road1.png");
buildingImage=loadImage("Building.jpg");
}

function setup() {
  createCanvas(800,800);
  road=createSprite(400, 760, 400, 20);
  //road.addImage("roas",roadImage);
  road.velocityX=2;
  road.scale = 2;
  
  car=createSprite(400, 720, 100, 50);
  //car.addImage("Tactical",carImage);
  car.scale=0.3;
  //car.velocityY=-3;
  
}

function draw() {
  background(0);  
 
  //camera.position.x = car.x;

  if(keyDown("RIGHT_ARROW")){
    car.x = car.x+2;
  }
  
  console.log("road's position"+road.x);
  console.log("Car's position"+car.x);

   if(road.x>300){
    road.x=400;
   }
   spawnBuildings();
  drawSprites();
}


function spawnBuildings() {
  //write code here to spawn the buildings
  if (frameCount % 60 === 0) {
    var building = createSprite(200,700,50,50);
    building.y = Math.round(random(100,300));
    building.addImage(buildingImage);
    building.scale = 0.5;
    building.velocityX = -2;
    
     //assign lifetime to the variable
     //building.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    
    //add each cloud to the group
   // buildingsGroup.add(building);
  }
  
}



/*

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

*/
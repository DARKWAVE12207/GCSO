var car,wall,speed,weight
function setup() {
  createCanvas(800,400);
 car = createSprite(400, 200, 50, 50);
 car.shapeColor = "white"
 wall = createSprite(700, 200, 50, 600);
 wall.shapeColor = color (46,145,53)
 speed = random(55,90)
 weight = random(400,1500)
 car.velocityX= speed
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX= 0
    var damage = 0.5*speed*speed*weight/22509
    if(damage>180){
      car.shapeColor = "red"
    }
    if(damage>180&&damage<100){
      car.shapeColor = "yellow"
    }
    if(damage<100){
      car.shapeColor = "green"
    }
  } 
  drawSprites();

}
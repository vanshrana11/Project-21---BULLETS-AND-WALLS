var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55, 90);
  weight = random(30, 52);
  thickness = random(22, 83)
  
  bullet = createSprite(50, 200, 80, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = (255);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80); 
}

function draw() {
  background(0);  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/ thickness * thickness * thickness;

    if(damage > 10){
      wall.shapeColor = ("red");
    }
    
    if(damage < 10){
      wall.shapeColor = ("green");
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
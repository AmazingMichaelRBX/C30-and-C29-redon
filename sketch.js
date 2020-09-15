var world,imageMode,CENTER,polygon;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //polygon holder
  //polygon = Bodies.circle(50,200,20);
  World.add(world,polygon)


  slingShot = new Slingshot(this.polygon,{x:100,y:200})
}
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

function draw() {
  background(255,255,255);  
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}
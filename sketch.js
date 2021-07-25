var garden,rabbit;
var gardenImg,rabbitImg;
var apples, appleImg;
var leaves, leafImg;
var select_sprites

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//generate random numbers
var rand =  Math.round(random(1,100))
console.log(rand)

}


function draw() {
  background(0);

  rabbit.x = mouseX;

  select_sprites = Math.round(random(1,2));

  if (frameCount %80 === 0) {
    if (select_sprites === 2) {
  createApples(); }

  else {
  createLeaves(); }
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

//apples and leaves spawning
function createApples() {
  apples = createSprite(200, 0, 10, 10);
  apples.addImage(appleImg);
  apples.scale = 0.08;
  apples.x = Math.round(random(50, 350));
  apples.velocityY = 8;

}

function createLeaves() {
  leaves = createSprite(200, 0, 10, 10);
  leaves.addImage(leafImg);
  leaves.scale = 0.08;
  leaves.x = Math.round(random(50, 350));
  leaves.velocityY = 8;
}


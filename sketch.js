const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup()
 {
  createCanvas(400,400);
  engine = Engine.create();
  world =  engine.world;
 
  box1 = new Box(200,150,50,50);
  box2 = new Box(230,50,50,50);
  ground = new Ground(200,375,400,50);
  
}

function draw() 
{
  background("lightblue");
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}

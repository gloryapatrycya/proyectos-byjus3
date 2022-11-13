const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
//var ground;*/

function setup() {
  //createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  var canvas = createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

  /*var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world.ground);

  var ball_positions = {
    restitution: 1.0
  }

  console.log(ground);*/

  object = Bodies.rectangle(200,100,50,50);
  World.add(world,object);

  console.log(object);
  /*console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);*/
}

function draw() {
  background(0);    
  Engine.update(engine);
  
  //rect(ground.position.x,ground.position.y,400,20);

  /*ellipseMode(RADIUS);
  ellipse(ball,position.x, ball.position.y, 20,20);*/
  rectMode(CENTER);
  //rect(200,200,50,50);
  
  rect(object.position.x, object.position.y, 50, 50);  
  //drawSprites();
}
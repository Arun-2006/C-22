const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ball;
var world,engine



function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

var ball_option={
  restitution: 1.0

}
 ground = Bodies.rectangle(0,390,50,50,options)
  World.add(world,ground)

  ball=Bodies.circle(200,150,5,ball_option);
  World.add(world,ball);  
  console.log(ground)
  console.log(ground.label)
  console.log(ground.position.x)
  console.log(ground.position.y)
  
}

function draw() {
  background("black");
  Engine.update(engine)  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,50)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
}
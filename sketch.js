
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(1500,500);
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic:true
  }

  ground = Bodies.rectangle(750,130,1700,20,option)
  World.add(world,ground);

  var ball_options = {
    restitution : 1.0,
    //density : 1.0
  }

  ball  = Bodies.circle(770,200,90,ball_options);
  World.add(world,ball);


  var options = {
    bodyA : ball,
    bodyB : ground,
    stiffness: 0.004,
    length : 100
  }
  var string = Constraint.create(options);
  World.add(world,string);
}


function draw() {
  background("green"); 
  Engine.update(engine);

  fill(255);
  textSize(30);
  text("Press enter to move the pendulum with the mouse!!", 600,70);

  fill ("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);

  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);

  strokeWeight(8);
  stroke("white");
  line(ball.position.x,ball.position.y,ground.position.x,ground.position.y)

  if(keyCode===ENTER){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
  }
}









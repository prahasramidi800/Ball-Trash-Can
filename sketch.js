const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ball;
var ground1
var leftSide
var rightSide

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();  //1. create own engine
	world = engine.world; //2. create own world 

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

    ball = Bodies.circle(260, 100, 20, ball_options) 
	World.add(world,ball)

	//creating object of ground
	ground1=new Ground(width/2, height-50, width, 20)
	leftSide = new Ground(1100, height-120, 20, 120)
	rightSide = new Ground(1500, height-120, 20, 120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 20)
  ground1.display()
  leftSide.display()
  rightSide.display()
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, {x: 0, y: 0},{x:85,y:-85})
	}
}




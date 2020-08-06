var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper;

function setup() {
	createCanvas(900, 500);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper();
	ground = new Ground();
	bin = new Dustbin();
	Engine.run(engine);
}
function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})

	}
}

function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  paper.display();
	bin.display();
}

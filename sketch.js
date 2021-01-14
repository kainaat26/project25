
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,paperball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(400,500,800,20);

 dustbin1 = new Dustbin(600,485,80,10);
 
 paperball = new Paper (40,470,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  


  ground.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  paperball.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:10,y:-15})
  }
}



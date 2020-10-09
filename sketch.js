var log1,log2,log3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(80,680,20)
	ground1 = new Ground(401,height,799,35)

	log1Sprite=createSprite(500,627,7,100)
	log1Sprite.shapeColor=color("white")

	log2Sprite=createSprite(598,673,200,7)
	log2Sprite.shapeColor=color("white")

	log3Sprite=createSprite(700,627,7,100)
	log3Sprite.shapeColor=color("white")


	log1 = Bodies.rectangle(width/2+100,627,7,100,{isStatic:true})
	 World.add(world,log1)

	 log2 = Bodies.rectangle(598,673,200,7,{isStatic:true})
	 World.add(world,log2)

	log3 = Bodies.rectangle(700,627,7,100,{isStatic:true}) 
	 World.add(world,log3)


	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);

  paper1.display()
  ground1.display()
 

  //keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position{x:65,y:-65});
}
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin_Img,dustbin, paper;
function preload()
{
	dustbin_Img = loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1000, 700);
    rectMode(CENTER)

	engine = Engine.create();

	world = engine.world;
	Engine.run(engine);

	dustbin = createSprite(604,600,20,20);
	dustbin.addImage(dustbin_Img)
	dustbin.scale = 1.2;

	//left = new Dustbin(550,620,20,100);
	//bottom = new Dustbin(610,660,100,20);
	//right = new Dustbin(670,620,20,100);

	paper = new Paper(100,300,10)
	ground = Bodies.rectangle(width/2,700,width,10,
		{
			isStatic: true
		});
		World.add(world,ground);
  
}


function draw() {
background("black");
  rectMode(CENTER);
background(0)
 
  
  drawSprites();
  
  //left.display();
 // right.display();
 // bottom.display();
paper.display();
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{
		x: 42,
		y: -43
		});
	}
}




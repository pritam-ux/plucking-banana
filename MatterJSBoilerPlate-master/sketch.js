
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var stone;
var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5;


function preload()
{
	boy = createSprite(150,50);
	boy = loadImage("images/boy.jpg");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,height,800,10);
   stone = new Stone(200,50);
   tree = new Tree(810,220);
   mango1 = new Mango(610,350);
   mango2 = new Mango(600,350);
   mango3 = new Mango(610,320);
   mango4 = new Mango(630,350);
   mango5 = new Mango(630,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  boy.display();
 ground.display();









  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var boy;
var stone;
var ground;
var tree;
var mango1,mango2,mango3,mango4,mango5;
var launcherObject
var launchingForce=100

function preload()
{
	
	boy = loadImage("images/boy.jpg");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(width/2,600,width,30);
   stone = new Stone(235,420,30);
   tree = new Tree(1050,580,);
   mango1 = new Mango(1100,100,30);
   mango2 = new Mango(1010,140,30);
   mango3 = new Mango(1000,230,30);
   mango4 = new Mango(1120,50,40);
   mango5 = new Mango(900,230,40);
   launcherObject= new Launcher(stone.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image (boy,200,350,200,300)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
 ground.display();
  tree.display();
launcherObject.display();

detectcollision(stone,mango1)
detectcollision(stone,mango2)
detectcollision(stone,mango3)
detectcollision(stone,mango4)
detectcollision(stone,mango5)


  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcherObject.fly();
}

function keyPressed(){
 if (keyCode===32) {
  Matter.Body.setPosition(stone.body,{x:235,y:420})
launcherObject.attach(stone.body)
 }
}

function detectcollision(stoneobj,mangoobj){
  mangobodyposition=mangoobj.body.position
  stonebodyposition=stoneobj.body.position
  var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
  if (distance<=mangoobj.r+stoneobj.r){
    Matter.Body.setStatic(mangoobj.body,false)
  }
}
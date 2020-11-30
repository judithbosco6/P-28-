/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/
var mango1,mango2,mango3,mango4,mango5, mango6,mango7,mango8,mango9,mango10;
var stone;
var tree;
var ground;
var boy;
var launcher;

function preload()
{
  //Don't preload this boy image here. You need to create a boy class and then do it.
	 boy=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	
	engine = Matter.Engine.create();
	world = engine.world;

  stone=new Stone(100,400,50);

	
  //create rest of objects
  mango1=new Mango(550,250,25);
  mango2=new Mango(450,250,25);
  mango3=new Mango(400,390,25);
  mango4=new Mango(530,320,25);
  mango5=new Mango(650,330,25);
  mango6=new Mango(480,300,25);
  mango7=new Mango(580,370,25);
  mango8=new Mango(460,350,25);
  mango9=new Mango(350,350,25);
  mango10=new Mango(700,360,25);
  tree=new Tree(500,435);
  //Create a ground class first to use the below statement to create an object
  ground=new Ground(400,670,800,10);
  launcher=new Launcher(stone.body,{x:90, y:530})
	Matter.Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightYellow");

  
  
  tree.display();
  // you need to create boy class and preload the image in constructor and then call this
  //boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  image(boy,150,600,200,250);

  stone.display();
 
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);

  //create ground class first and then uncomment this.
  ground.display();
  
  drawSprites();
}


function detectCollision(lstone,lmango){
 
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=25+50)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
}

function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(stoneObj.body, {x:100, y:300})
    launcher.attach(stone.body);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  launcher.fly();
}







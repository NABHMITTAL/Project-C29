const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine
var world
var base1, base2,ground
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var block11,block12,block13,block14,block15,block16,block17
var block18,block19,block20,block21,block22
var block23,block24,block25
var block26
var polygon
var slingShot


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


    Engine.run(engine);
    
    base1 = new Ground(400,480,300,10)
    base2 = new Ground(650,250,200,10)
    ground = new Ground(400,690,800,10)
    block1 = new Box(330,235,30,40)
    block2 = new Box(360,235,30,40)
    block3 = new Box(390,235,30,40)
    block4 = new Box(420,235,30,40)
    block5 = new Box(450,235,30,40)
    block6 = new Box(480,235,30,40)
    block7 = new Box(510,235,30,40)
    block8 = new Box(300,235,30,40)
    block9 = new Box(270,235,30,40)

    block11 = new Box(300,195,30,40)
    block12 = new Box(330,195,30,40)
    block13 = new Box(360,195,30,40)
    block14 = new Box(390,195,30,40)
    block15 = new Box(420,195,30,40)
    block16 = new Box(450,195,30,40)
    block17 = new Box(480,195,30,40)

    block18 = new Box(330,155,30,40)
    block19 = new Box(360,155,30,40)
    block20 = new Box(390,155,30,40)
    block21 = new Box(420,155,30,40)
    block22 = new Box(450,155,30,40)
    
    block23 = new Box(360,115,30,40)
    block24 = new Box(390,115,30,40)
    block25 = new Box(420,115,30,40)

    block26 = new Box(390,75,30,40)

  polygon = new Polygon(50,200,20,20)


  slingShot = new SlingShot({x : 100 , y : 200},this.polygon)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
base1.display();
base2.display()
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();

block11.display();
block12.display();
block14.display();
block13.display();
block15.display();
block16.display();
block17.display();

block18.display();
block19.display();
block20.display();
block21.display();
block22.display();

block23.display();
block24.display();
block25.display();

block26.display();
slingShot.display()
drawSprites();  
}


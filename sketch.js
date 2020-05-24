const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bird1;
var pig1,log1;
var box3,box4,pig2,log2,box5,log3,log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    log1 = new Log(810,250,300,PI/2);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70)
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);
    bird1 = new Bird(100,200);
    box5 = new Box(810,160,70,70);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    log1.display();
    bird1.display();
    pig1.display();
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
}
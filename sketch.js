const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;

  roof1 = new roof();
  bob1 = new bob(350);
  bob2 = new bob(390);
  bob3 = new bob(430);
  bob4 = new bob(470);
  bob5 = new bob(310);
  rope1 = new rope(bob5.body, {x : 310 , y : 150});
  rope2 = new rope(bob1.body, {x : 350 , y : 150});
  rope3 = new rope(bob2.body, {x : 390 , y : 150});
  rope4 = new rope(bob3.body, {x : 430 , y : 150});
  rope5 = new rope(bob4.body, {x : 470 , y : 150});
}

function draw() {
  background(179, 255, 179);
  Engine.update(engine);
 
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
   bob5.display();
}


function keyPressed() {
  if(keyCode == UP_ARROW){
  Matter.Body.applyForce(bob5.body, bob5.body.position,{ x: -0.03, y: -0.03});
  }
}

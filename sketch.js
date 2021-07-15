const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ball;
var ground;
var left;
var right;
var top_wall;
var btn1 , btn2  , btn3;
var w1 , w2 ;

function setup() {
  createCanvas(700,400)
  engine = Engine.create();
  world = engine.world;

/*btn1 = createImg('right.png');
btn1.position(220,30);
btn1.size(50,50);
btn1.mouseClicked(hForce)

btn2 = createImg('up.png');
btn2.position(20,30);
btn2.size(50,50);
btn2.mouseClicked(vForce) */

btn3 = createImg('push.png');
btn3.position(30,30);
btn3.size(50,50);
btn3.mouseClicked(aForce)


  ground =new Ground(200,390,980,20);
  right = new Ground(690,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(10,10,1800,20);
  w1 =new Ground(570,350,10,80);
  w2 =new Ground(670,350,10,80);

var op = {
restitution: 0.95

}

ball=Bodies.circle(50,350,20,op);
World.add(world , ball );

 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  
  ellipse(ball.position.x , ball.position.y , 20);
  

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  w1.show();
  w2.show();
  Engine.update(engine);

  push();
  strokeWeight(2);
  stroke(255);
  fill ("yellow")
  line(600,300,600,400);
  line(650,300,650,400);
  
  pop();

}

function hForce(){

Matter.Body.applyForce(ball,{x:0 , y:0} , { x:0.05 , y:0 })

}

function vForce(){

  Matter.Body.applyForce(ball,{x:0 , y:0     } , { x:0 , y:-0.05 })
  
  }

  function aForce(){

    Matter.Body.applyForce(ball,{x:0 , y:0     } , { x:0.05 , y:-0.05 })
    
    }
  
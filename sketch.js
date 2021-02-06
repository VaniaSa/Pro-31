const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var particles = []
var plinko = []
var division = []

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;

  ground= new Ground(600,780,1200,20)

  for(var i=5; i<480; i= i+75)
  {
    division.push(new Divisions(i,650,15,250))
  }

  for(var p=10; p<480; p= p+75)
{
  plinko.push(new Plinko(p,200,20))
}

for(var p=30; p<480; p= p+75)
{
  plinko.push(new Plinko(p,300,20))
}

for(var p=10; p<480; p= p+75)
{
  plinko.push(new Plinko(p,400,20))
}

for(var p=30; p<480; p= p+75)
{
  plinko.push(new Plinko(p,100,20))
}

for(var s=200; s<300; s= s+120)
{
  particles.push(new Particles(s,10,10))
}

}

var engine, world;
function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  for(var k = 0; k < division.length; k++)
  {
    division[k].display()
  } 
  for(var p = 0; p < plinko.length; p++)
  {
    plinko[p].display()
  }
  for(var s = 0; s < particles.length; s++)
  {
    particles[s].display()
  }
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10,10));
  }
  drawSprites();
}
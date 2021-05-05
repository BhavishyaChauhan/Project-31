const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var engine,world;

var divisionHeight=300;

var divisions=[];
var plinkos=[];
var particles=[];



function setup() {

  engine=Engine.create(engine);
  world=engine.world;

  createCanvas(480,800);

  ground=new Ground(width/2,height,width,20);

  //a=new Particle(random(200,250),20)
  
  Engine.run(engine)

}
 

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display()


  for (var k=0; k<=width; k= k+80){
    divisions1=new Division(k,height-divisionHeight/2,10,divisionHeight)
    divisions1.display()
    divisions.push(divisions1)
  }  

  for(var j=15; j<=width; j= j+90){
    plinkos.push(plinkos1=new plinko(j,60))
    plinkos1.display()
  }

  for(var j=55; j<=width; j= j+90){
    plinkos.push(plinkos1=new plinko(j,150))
    plinkos1.display()
  }

  for(var j=15; j<=width; j= j+90){
    plinkos.push(plinkos1=new plinko(j,240))
    plinkos1.display()
  }

  for(var j=55; j<=width; j= j+90){
    plinkos.push(plinkos1=new plinko(j,330))
    plinkos1.display()
  }

  for(var j=15; j<=width; j= j+90){
    plinkos.push(plinkos1=new plinko(j,420))
    plinkos1.display()
  }

  if(frameCount %50==0){
    p1= new Particle(random(width/2-30,width/2+30),20);
    particles.push(p1);
  }
    
  for(var j=0; j<particles.length; j++){
    particles[j].display();
  }


  

  drawSprites();
}
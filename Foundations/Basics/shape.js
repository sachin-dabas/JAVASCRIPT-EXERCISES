//@sachin-dabas
// to setup the canvas

function setup() 
{
  createCanvas(800, 800);
}

//to draw on the canvas
function draw() 
{
  background(900,100,100); // what does these three do?
  //attributes
  rectMode(CENTER);
  //primitive-shapes
  circle(200,200,150,150);
  circle(600,200,150,150);
  circle(400,400,400,400);
  circle(400,450,100,100);
  // rect(400,400,100,100,20);
  // line(200,200,500,500);
  // rect(200,200,100,100);
}
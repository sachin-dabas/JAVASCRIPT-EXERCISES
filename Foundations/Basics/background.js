//sachindabas
var x = 0;

function setup()
{
    createCanvas(1200,800);
}


function draw() 
{
    x = map(mouseX,0,width,0,255);
    background(x);
    ellipse(width/2,height/2,400,400);

}
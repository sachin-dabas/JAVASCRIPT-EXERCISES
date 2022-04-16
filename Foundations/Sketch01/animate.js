//sachindabas

//const also
let circleX = 100;
let circleR = 20;

function setup()
{
    createCanvas(800,800);
    background(255,0,0);
}

function mousePressed()
{
    circleX = 0;
    circleR = 0;
}

function draw()
{
    background(255,0,0);
    noStroke();
    circle(400,400,circleR);
    circleR = circleR+10;
}
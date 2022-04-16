//sachindabas

//const also
let circleX = 100;
let circleR = 20;

//setup the scene
function setup()
{
    createCanvas(800,800);
    background(255,0,0);
}

//interactions with the mouse
function mousePressed()
{
    circleX = 0;
    circleR = 0;
}

//draw it over the canvas
function draw()
{
    background(255,0,0);
    noStroke();
    circle(400,400,circleR);
    circleR = circleR+10;
}
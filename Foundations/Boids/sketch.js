////sachindabas
//references: Daniel Shifman: https://www.youtube.com/watch?v=OAcXnzRNiCY
// var attractor;
var particles  = [];
var myList  = [];
var rad = 200;
var circles = [];
var spaces = [50,200,75,125,100,150];
function setup() {
    createCanvas(1920,1080);
    frameRate(120);
    //Creating an attactor here since it is fixed
    attractor = createVector(width/2,height/2);
    center = (400,400,100);
    // print("my list has...",myList);
    att_r = 100;
    myList.push(new Particle(width/2,height/2,100));
    
}

function mousePressed()
{
    var r = random(spaces);
    var n = new Particle(mouseX,mouseY,r); //change random to space areas
    particles.push(n);
    myList.push(n);
    // print("my list has...",myList);
}

//draw dynamic elements on the screen

function draw() {
    background(175);
    rectMode(CENTER);
    stroke(255); //gives the color
    // fill(0,255,0,125);
    noFill();
    circle(width/2,height/2,100);
    // rect(width/2,height/2,300,300);
    
    //Attractor point
    strokeWeight(2);
    point(attractor.x,attractor.y);

    //draw all the particles
    for (var i = 0; i < particles.length; i++) 
    {
        var particle = particles[i];
        particle.update(rad,attractor,att_r,myList);
        particle.show(attractor);       
    }
}
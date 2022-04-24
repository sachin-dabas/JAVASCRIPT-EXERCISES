// Reference
// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

// var attractor;
var particles  = [];
var myList  = [];
var rad = 200;
var circles = [];
// var spaces = [100,200,150,300,600];
function setup() {
    createCanvas(800,800);
    // frameRate(10);
    //Creating an attactor here since it is fixed
    attractor = createVector(width/2,height/2);
    center = (400,400,100);
    // print("my list has...",myList);
    att_r = 100;
    myList.push(new Particle(200,200,100));
}

function mousePressed()
{
    var n = new Particle(mouseX,mouseY,100); //change random to space areas
    particles.push(n);
    myList.push(n);
    // print("my list has...",myList);
}

//draw dynamic elements on the screen
function draw() {
    background(150);
    rectMode(CENTER);
    circle(200,200,100);
    
    //Attractor point
    stroke(0,255,0); //gives the color
    strokeWeight(2);
    noFill();
    point(attractor.x,attractor.y);

    //draw all the particles
    for (var i = 0; i < particles.length; i++) 
    {
        var particle = particles[i];
        particle.update(rad,attractor,att_r,myList);
        particle.show(attractor);
        circles.push(particle);        
    }
}
// Reference
// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

var attractor;
var particles  = [];

function setup() {
    createCanvas(800,800);
    //constructor function
    for (var i = 0; i < 1; i++) {
        particles.push(new Particle(200,200));
    }
    //Creating an attactor here since it is fixed
    attractor = createVector(width/2,height/2);
}

function mousePressed()
{
    particles.push(new Particle(mouseX,mouseY));
}

//draw dynamic elements on the screen
function draw() {
    background(125);
    rectMode(CENTER);
    
    //Attractor point
    stroke(0,255,0); //gives the color
    strokeWeight(2);
    noFill();
    point(attractor.x,attractor.y);
    circle(400,400,40,40);
    
    // create the boundary
    // stroke(255,255,255); // gives the color
    // strokeWeight(1);
    // rect(400,400,400,200);
    
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        particle.attracted(attractor);
        particle.update();
        particle.show();
    }
    }

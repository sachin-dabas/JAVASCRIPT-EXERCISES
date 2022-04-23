// Reference
// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

// var attractor;
var particles  = [];
var rad = 100;
var circles = [];

function setup() {
    createCanvas(800,800);
    // frameRate(10);
    //constructor function
    for (var i = 0; i < 1; i++) {
        particles.push(new Particle(200,200,rad));
    }
    //Creating an attactor here since it is fixed
    attractor = createVector(width/2,height/2);
}

function mousePressed()
{
    particles.push(new Particle(mouseX,mouseY,rad));
}

//draw dynamic elements on the screen
function draw() {
    background(100);
    rectMode(CENTER);
    
    //Attractor point
    stroke(0,255,0); //gives the color
    strokeWeight(2);
    noFill();
    point(attractor.x,attractor.y);
    circle(400,400,100);
    // create the boundary
    // stroke(255,255,255); // gives the color
    // strokeWeight(1);
    // rect(400,400,400,200);
    
    for (var i = 0; i < particles.length; i++) {
        var particle = particles[i];
        particle.update(rad,attractor);
        particle.show(attractor);
        circles.push(particle);
        fixit();        
    }

    function fixit() {
        for (var i = 0; i < particles.length-1; i++) {
            var particle1 = particles[i];
            var particle2 = particles[i+1];
            // print("Hello");

            console.log(particle1.x);
            // var vect = p5.Vector.sub((particle2.x,particle2.y),(particle1.x,particle1.y));
    }
    }

}
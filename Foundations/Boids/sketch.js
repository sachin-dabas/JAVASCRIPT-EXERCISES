
// var attractor;
var particles  = [];
var myList  = [];
var rad = 200;
var circles = [];
var spaces = [50,100,150,200,250,300];
function setup() {
    createCanvas(800,800);
    // frameRate(10);
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
    stroke(0,255,0,5); //gives the color
    fill(0,255,0,125);
    circle(width/2,height/2,100);
    rect(width/2);
    
    //Attractor point
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
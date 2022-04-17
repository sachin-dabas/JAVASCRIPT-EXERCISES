//sachindabas

var attractor;
var particle;

function setup()
{
    createCanvas(800,800);
    attractor = createVector(400,400);
    particle = new Particle(200,200);
}


function draw()
{
    background(50);
    stroke(255);
    strokeWeight(10);
    point(attractor.x,attractor.y);

    particle.attracted(attractor);
    particle.update();
    particle.show();
}

// Reference
// Daniel Shiffman
// http://codingtra.in
// Attraction / Repulsion
// Video: https://youtu.be/OAcXnzRNiCY

var attractor;
var particles = [];

function setup()
{
    createCanvas(400,400);
    for (var i = 0; i < 50; i++) {
        particles.push(new Particle(200,200));
    }

    attractor = createVector(200,200);
    // particle = ;
    background(50);
}


function draw()
{
    stroke(255);
    strokeWeight(4);
    //make the attractor point
    point(attractor.x,attractor.y);

    for(var i =0; i < 50; i++)
    {
        var particle = particles[i];
        particle.attracted(attractor);
        particle.update();
        particle.show();
    }

}


//create an object class
function Particle(x,y)
{
    this.pos = createVector(x,y);
    // this.vel = createVector(0,0); //empty vectors
    this.vel = p5.Vector.random2D();
    this.acc = createVector(); //empty vectors

    this.update = function()
    {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
    }

    this.show = function()
    {
        stroke(255);
        strokeWeight(10);
        point(this.pos.x,this.pos.y);
    }

    this.attracted = function(target)
    {
        var force = p5.Vector.sub(target,this.pos);
        var dsquared = force.magSq();
        dsquared = constrain(dsquared,25,400);
        var G = 100;
        var strength = G / dsquared;
        force.setMag(strength);
        this.acc= force;
    }
}
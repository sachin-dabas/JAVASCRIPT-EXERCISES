//click and get the circle
// attracted to the point
// restricted to the radius

function Particle(x,y,r) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.rad = r;
    // this.acc = createVector();

    //change the object per frame
    this.update = function(radius,target) {
        var d = dist(this.pos.x,this.pos.y,target.x,target.y);
        // print(d);
        
        if (d > 100) {
            var vect = p5.Vector.sub(target,this.pos);
            // var v = vect.mag();
            var vect_unit = vect.normalize();
            vect_unit.setMag(1);
            this.pos.add(vect_unit);
        }
    }
    
    //attracts the object
    this.attracted = function(target) {
        var force = p5.Vector.sub(target,this.pos);
        
        // var d = force.magSq();
        // d = constrain(d,5,25);
        // var G = 100;
        // var strength = G / (d * d);
        // force.setMag(1);
        // if (d < 5) {
            //     force.mult(-1);
            // } 
            // this.acc = force;
        }

        //draws the object
    this.show = function(target) {
        stroke(10);
        strokeWeight(0.1);
        line(this.pos.x,this.pos.y,target.x,target.y);
        strokeWeight(1);
        point(this.pos.x,this.pos.y);
        circle(this.pos.x,this.pos.y,100);
            // console.log(this.pos);
        }
}
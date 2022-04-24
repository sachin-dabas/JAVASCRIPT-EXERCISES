//click and get the circle
// attracted to the point
// restricted to the radius

function Particle(x,y,r) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.rad = r;
    // print("radius is",this.rad);
    // this.acc = createVector();
    
    //change the object per frame
    this.update = function(radius,target,att_r,myList) {
        // myList.pop();
        closest_dist = Number.MAX_VALUE;
        closest_idx = 0;
        for (var i = 0; i < myList.length-1; i++) 
        {
            print("i is",i);
            p = myList[i];
            if (p.pos.x != this.pos) 
            {
                print("length of list is",myList.length);
                // if (p.pos.x != this.pos.x) {
                d = dist(this.pos.x,this.pos.y,p.pos.x,p.pos.y);
                print("distance is... ",d);
                line(this.pos.x,this.pos.y,p.pos.x,p.pos.y);
                print("closest dist1...",closest_dist);
                // print("closest distance is...",closest_dist);
                if (d < closest_dist) 
                {
                    print("i am accessed...");
                    closest_dist = d;
                    closest_idx = i;
                    print("closest dist2...",closest_dist);
                }
            }
        }
        c = myList[closest_idx];
        print("closest index is...",closest_idx);
        d1 = dist(this.pos.x,this.pos.y,c.pos.x,c.pos.y);
        print("d1 is...",d1);
        if (d1 > (c.rad)) {
            var vect = p5.Vector.sub(c.pos,this.pos);
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
        circle(this.pos.x,this.pos.y,this.rad);
            // console.log(this.pos);
        }
}
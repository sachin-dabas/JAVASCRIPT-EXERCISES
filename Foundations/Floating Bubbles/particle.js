//sachindabas
//references: Daniel Shifman: https://www.youtube.com/watch?v=OAcXnzRNiCY


//Agent class
function Particle(x,y,r) 
{
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.rad = r;
    //define the spaces
    this.space = [100,200,50,25,255,10,75,65,125];
    this.spaces = ['red','green','yellow','blue'];
    this.color = random(this.spaces);
    print("color is...",this.color);

    //change the object per frame
    this.update = function(radius,target,att_r,myList) {
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
        if (d1 > (c.rad/2 + this.rad/2)) {
            var vect = p5.Vector.sub(c.pos,this.pos);
            // var v = vect.mag();
            var vect_unit = vect.normalize();
            vect_unit.setMag(1);
            this.pos.add(vect_unit);
        }
    }

    //draws the object
    this.show = function(target) {
        stroke(10);
        strokeWeight(0.5);
        line(this.pos.x,this.pos.y,target.x,target.y);
        // strokeWeight(1);
        fill(random(this.spaces));
        strokeWeight(1);
        point(this.pos.x,this.pos.y);
        circle(this.pos.x,this.pos.y,this.rad);
        }
}
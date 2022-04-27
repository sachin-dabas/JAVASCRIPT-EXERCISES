//sachindabas

var x = [];
var y = [];
var r = [];
var spaces = [100,50,200,100,50];
var colors = [75,200,10,50,150];
var currentCount = 1;
var newX;
var newY;
var pressedX = [];
var pressedY = [];

function setup() {
    createCanvas(800,800);
    x.push(width/2);
    y.push(height/2);
    r.push(200);
    // var vel = createVector();
}

function mousePressed() {
    pressedX.push(mouseX);
    pressedY.push(mouseY);
}

function update(pos,pos2) {
    // for (var i = 0; i < spaces.length; i++) {
        //     var pos = createVector(pressedX[i],pressedY[i]);
        //     // console.log(pos);
        //     var rad = spaces[i];
        var d = dist(pos.x,pos.y,400,400);
        
        if (d > 100) {
            var vect = p5.Vector.sub(pos2,pos);
            var v = vect.mag();
            console.log(v);
            var vect_unit = vect.normalize();
            vect_unit.setMag(1);
            pos.add(vect);
        }
    }
    
    // console.log(spaces.length);
    function draw() {
        newX = 400;
        newY = 400;
        background(100);
        // noFill();
        // draw the shapes from the functions
        for (var i = 0; i < spaces.length; i++) {
            var pos = createVector(pressedX[i],pressedY[i]);
            var pos2 = createVector(400,400);
            fill(colors[i]);
            line(pos.x,pos.y,400,400);
            update(pos,pos2);
            circle(pos.x,pos.y,100);
        }
        var closest_dist = Number.MAX_VALUE;
        var closest_idx = 0;
    //find the closest circle
    for (var i = 0; i < currentCount; i++ ) {
        var new_dist = dist(newX,newY, x[i],y[i]);
        if (new_dist < closest_idx) {
                closest_dist = new_dist;
                closest_idx = i;
        }
    
    // draw the shapes
    for (var i = 0; i < currentCount; i++) {
        noFill();
        circle(x[i],y[i],r[i]);
    }
    }
}
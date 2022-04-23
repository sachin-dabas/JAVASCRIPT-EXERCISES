var x = [];
var y = [];
var r = [];
var currentCount = 1;
var attractor;

function setup() {
    createCanvas(800,800);
    attractor = createVector(width/2,height/2);
}

function mousePressed() {
    var newX = mouseX;
    var newY = mouseY;
}

function draw() {
    background(100);
    var closest_dist = Number.MAX_VALUE;
    var closest_idx = 0;

    for (var i = 0; i < currentCount; i++ ) {
        var new_dist = dist(newX,newY, x[i],y[i],x[i],y[i]);
        if (new_dist < int_max) {
                closest_dist = new_dist;
        }
        
     }
}
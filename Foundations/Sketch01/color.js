function setup()
{
    createCanvas(800,800);
    print("Hello");
}

function draw()
{
    // background(100); //Grey color
    background(250,0,200); //RGB color, also HSP color
    rectMode(CENTER);
    fill(0,0,255);
    circle(400,400,300);
    noFill();
    ellipse(0,400,800,400);//x,y,w,h
    ellipse(800,400,800,400);//x,y,w,h
    fill(255,0,0);
    circle(0,400,200);
    circle(800,400,200);
    line(0,400,800,400);
    line(0,200,800,200);
    line(0,600,800,600);
    noFill();
    rect(0,400,200,200);
    rectMode(CENTER);
    rect(400,400,300,300);
    rect(800,400,200,200);
}
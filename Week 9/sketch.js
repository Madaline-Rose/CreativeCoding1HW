function setup()
{
    createCanvas(500,600);
}

function draw()
{
    background(53, 94, 59);

    //back of hair
    fill(230, 180, 119);
    rect(155, 80, 192, 135);

    //body
    fill(0, 0, 0);
    triangle(170, 220, 250, 370, 330, 220);

    //head
    fill (255, 222, 199);
    ellipse(250, 153, 120, 140);

    //hair bangs
    fill(230, 180, 119);
    arc(250, 130, 130, 120, PI, TWO_PI);

    //eyes
    fill(255);
    ellipse (220, 150, 30, 20);
    ellipse(280, 150, 30, 20);
    fill(53, 94, 59);
    ellipse(220, 150, 15, 20);
    ellipse(280, 150, 15, 20);

    //glasses
    strokeWeight(5);
    noFill();
        //left
    square(200, 130, 40);
    line(200, 150, 180, 150);
        //right
    square(260, 130, 40);
    line(320, 150, 300, 150);
        //center
    line(240, 150, 260, 150);
    strokeWeight(1);

    //mouth
    fill(255, 192, 203);
    arc(250, 190, 30, 30, 0, radians(180), PIE);
    fill(248, 131, 121);
    arc(250, 203.5, 15, 5, PI, TWO_PI);

    //nose
    strokeWeight(3);
    point(250,175);
    strokeWeight(1);

    //title
    fill(255);
    textSize(22);
    text("It's-a me, Madaline!", 155, 400);

    //signature
    fill(0, 0, 0);
    textStyle(ITALIC);
    textSize(18);
    text("Madaline Brown", 183, 435);
    
}

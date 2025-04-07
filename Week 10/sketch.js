//green of the eyes
var irisX = 250;
var irisY = 150;
var irisDirection = 1;

//back of hair
var hairX = 155;
var hairY = 80;
var hairDirection = 5;

//body
var bodyY1 = 220;
var bodyY2 = 370;
var bodyY3 = 220;  
var bodyDirection = 7;

//head
var headX = 250;
var headY = 153;
var headDirection = 3;

//title sizing
var size = 22
var count = 0;
var sizeDirection = .5;

function setup()
{
    createCanvas(500,600);
}

function draw()
{
    background(53, 94, 59);

    //back of hair
    fill(230, 180, 119);
    rect(hairX, 80, 192, 135);
    hairX+=hairDirection;
    if(hairX >= 300 || hairX  <= 20)
    {
        hairDirection*=-1;
    }

    //body
    fill(0, 0, 0);
    triangle(170, bodyY1, 250, bodyY2, 330, bodyY3);
    bodyY1+=bodyDirection;
    bodyY2+=bodyDirection;
    bodyY3+=bodyDirection;
    if(bodyY1 <= 100 || bodyY1 >= 400)
    {
        bodyDirection*=-1;
    }

    //head
    fill (255, 222, 199);
    ellipse(headX, headY, 120, 140);
    headX+=headDirection;
    headY+=headDirection;
    if(headX <= 75 || headY >= 220)
    {
        headDirection*=-1;
    }

    //hair bangs
    fill(230, 180, 119);
    arc(250, 130, 130, 120, PI, TWO_PI);

    //eyes
    fill(255);
    ellipse (220, 150, 30, 20);
    ellipse(280, 150, 30, 20);
    fill(53, 94, 59);
    ellipse(irisX, 150, 15, 20);
    irisX+=irisDirection;
    if(irisX >= 275 || irisX  <= 180)
    {
        irisDirection*=-1;
    }

    ellipse(280, irisY, 15, 20);
    irisY+=irisDirection;
    if(irisY <= 100 || irisY >= 180 )
    {
        irisDirection*=-1;
    }

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
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("It's-a me, Madaline!", 155, 400);

    //signature
    fill(0, 0, 0);
    textStyle(ITALIC);
    textSize(18);
    text("Madaline Brown", 183, 435);
    
}

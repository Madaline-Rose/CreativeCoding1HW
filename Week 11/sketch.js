// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y enemy 1
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

//x and y enemy 2
var shapeX2 = 400; 
var shapeY2 = 400;
var shapeX2Speed;
var shapeY2Speed; 

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
    shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
    createCharacter(250,550);
}

function draw()
{
    background(248, 200, 220);
    

    // exit message
    textSize(25);
    textStyle (BOLD);
    text("EXIT", 225, 50);

    //createCharacter(250, 550);
    drawCharacter();
    characterMovement();

    // potential enemy 1
    fill(2, 48, 32);
    circle(shapeX, shapeY, 5);

    //potential enemy 2
    fill (255, 255, 0);
    circle(shapeX2, shapeY2, 30);

     // random speed
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    shapeX2 += shapeX2Speed;
    shapeY2 += shapeY2Speed;

   // Enemy 1 wrap logic
if (shapeX > width) {
    shapeX = 0;
} else if (shapeX < 0) {
    shapeX = width;
}

if (shapeY > height) {
    shapeY = 0;
} else if (shapeY < 0) {
    shapeY = height;
}

// Enemy 2 wrap logic
if (shapeX2 > width) {
    shapeX2 = 0;
} else if (shapeX2 < 0) {
    shapeX2 = width;
}

if (shapeY2 > height) {
    shapeY2 = 0;
} else if (shapeY2 < 0) {
    shapeY2 = height;
}

// check to see if the character has touched the exit
if (characterY <= 0 && characterX >= 0 && characterX <= width) 
    {
    fill(0);
    stroke(5);
    textSize(26);
    text("You Win!", width / 2 - 50, height / 2 - 50);
    }

// create the shape based on the mouse click
    fill(255, 255, 255);
    rect(mouseShapeX, mouseShapeY, 40, 20);
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(170, 21, 106);
    circle(characterX,characterY,15);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
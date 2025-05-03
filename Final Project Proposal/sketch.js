//Background stars
let stars = [];
let numStars = 100;

//Inserted images,songs, qoute
let bg;
let jim, ship, morph;
let jimSong; 
let quoteVisible = false; 

function preload() {
    //placeholder
    bg = loadImage ("copy of Teasure Planet.png");
    jim = loadImage ("jim.png");
    ship = loadImage("ship.png");
    morph = loadImage ("morph.png");
    song = loadSound ("I'm Still Here.mp3");
}

function setup(){
    createCanvas (1587, 2245);

    //Adding twinkling stars
    for (let i = 0; i , 200; i++)
        stars.push({
        x: random (width),
        y: random(height),
        brightness: random (100, 225),
        delta: random (0.5, 2)
    });
}

function draw (){
    Image(bg, 0, 0, width, height);
    drawTwinklingStars ();

    //Adding interactive characters (jim, morph)
    image (jim, 100, 400, 100, 150);
    image (ship, 500, 200, 120, 80); 
    image (morph, mouseX, mouseY, 80, 80); 

    //Adding qoute on ship hover
    if (qouteVisible) {
        fill (255);
        textSize (20);
        text ("You got the makings of greatness in you...", 100, 180);
    }
}

function mousePressed() {
//clicking jim
if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 550) {
    if (!song.isPlaying()) {
        song.play();
    }
}

//clicking morph
if (mouseX > mouseX && mouseX < mouseX + 80 && mouseY > mouseY && mouseY < mouseY + 80); {
 morph.x = random (width);
 morph.y = random (height);   
    }
}

function mouseMoved() {
    // Hover over ship
    quoteVisible = (mouseX > 500 && mouseX < 620 && mouseY > 200 && mouseY < 280);
  }

  function drawTwinklingStars() {
    noStroke ();
    for (let star of stars) {
        fill (255, 255, 255, star.brightness);
        circle (star.x, star.y, 2);
        star.brightness += random (-star.delta, star.delta);
        star.brightness = constrain (star.brightness, 100, 255);
    }
  }

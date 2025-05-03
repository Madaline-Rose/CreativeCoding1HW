// Background stars
let stars = [];
let numStars = 100;

// Inserted images, song, quote
let bg;
let jim, ship, morph;
let jimSong; 
let quoteVisible = false; 

// Morph movement
let morphX = 300;
let morphY = 600;

function preload() {
    bg = loadImage("bg.png");
    jim = loadImage("jim.png");
    ship = loadImage("ship.png");
    morph = loadImage("morph.png");
    jimSong = loadSound("im_still_here.mp3"); 
}

function setup() {
    createCanvas(1587, 2245);

    // Add twinkling stars
    for (let i = 0; i < 200; i++) { 
        stars.push({
            x: random(width),
            y: random(height),
            brightness: random(100, 225),
            delta: random(0.5, 2)
        });
    }
}

function draw() {
    image(bg, 0, 0, width, height);
    drawTwinklingStars();

    // Interactive characters
    image(jim, 100, 400, 100, 150);
    image(ship, 500, 200, 120, 80);
    image(morph, morphX, morphY, 80, 80);

    // Show quote on ship hover
    if (quoteVisible) {
        fill(255);
        textSize(20);
        text("You got the makings of greatness in you...", 100, 180);
    }
}

function mousePressed() {
    // Clicking Jim
    if (mouseX > 100 && mouseX < 200 && mouseY > 400 && mouseY < 550) {
        if (!jimSong.isPlaying()) {
            jimSong.play();
        }
    }

    // Clicking Morph
    if (mouseX > morphX && mouseX < morphX + 80 && mouseY > morphY && mouseY < morphY + 80) {
        morphX = random(width - 80);
        morphY = random(height - 80);
    }
}

function mouseMoved() {
    // Hover over ship
    quoteVisible = (mouseX > 500 && mouseX < 620 && mouseY > 200 && mouseY < 280);
}

function drawTwinklingStars() {
    noStroke();
    for (let star of stars) {
        fill(255, 255, 255, star.brightness);
        circle(star.x, star.y, 2);
        star.brightness += random(-star.delta, star.delta);
        star.brightness = constrain(star.brightness, 100, 255);
    }
}
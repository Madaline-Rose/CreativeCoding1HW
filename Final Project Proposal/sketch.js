// Background stars
let stars = [];
let numStars = 100;

// Inserted images, song, quote
let bgFinal;
let jimSong; 
let quoteVisible = false;
let morphImg;

// Morph position
let morphX = 412;
let morphY = 583;

function preload() {
  bgFinal = loadImage("bgFinal.png");
  jimSong = loadSound("themeSong.mp3");
  morphImg = loadImage("morphEdit.png");
}

function setup() {
  createCanvas(1587, 2245);

  // Create twinkling stars
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      brightness: random(100, 225),
      delta: random(10, 30),
      size: random(4,8)
    });
  }
}

function draw() {
  image(bgFinal, 0, 0, width, height);

  blendMode (ADD);
  drawTwinklingStars();
  blendMode(BLEND);

  //Add morph
  if (morphImg) {
  image(morphImg, morphX - morphImg.width / 2, morphY - morphImg.height / 2);
}

  // Show quote if hovering over the ship
  if (quoteVisible) {
    fill(255);
    textSize(60);
    textAlign(CENTER);
    text("You got the makings of greatness in you...", width / 2, 200);
  }
}

function mousePressed() {
    userStartAudio();

  // Click Jim (318, 927)
  if (dist(mouseX, mouseY, 318, 927) < 75) {
    if (!jimSong.isPlaying()) {
      jimSong.play();
    }
  }

  // Click Morph to move
  if (dist(mouseX, mouseY, morphX, morphY) < 50) {
    morphX = random(width - 100);
    morphY = random(height - 100);
  }
}

function mouseMoved() {
  // Hover ship (1346, 1559)
  quoteVisible = dist(mouseX, mouseY, 1346, 1559) < 80;
}

function drawTwinklingStars() {
    noStroke();
    for (let star of stars) {
      star.brightness += random(-star.delta, star.delta);
      star.brightness = constrain(star.brightness, 20, 255);
  
      // Draw the star
      fill(255, 255, random (230, 255), star.brightness);
      let flicker = random(-1, 1);
      circle(star.x, star.y, star.size + flicker);
    }
  }
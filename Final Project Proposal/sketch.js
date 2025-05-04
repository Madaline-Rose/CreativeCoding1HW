// Background stars
let stars = [];
let numStars = 100;

// Images and assets
let bg;
let morph;
let jimSong;
let quoteVisible = false;

// Morph's floating position
let morphX = 800;
let morphY = 1250;

function preload() {
  bg = loadImage("bg.png"); // Full Canva poster
  morph = loadImage("morph.png"); // Just morph character (optional)
  jimSong = loadSound("im_still_here.mp3");
}

function setup() {
  createCanvas(1587, 2245);

  // Create twinkling stars
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      brightness: random(100, 225),
      delta: random(0.5, 2),
    });
  }
}

function draw() {
  image(bg, 0, 0, width, height); // Full poster
  drawTwinklingStars();

  // Morph floating on top
  image(morph, morphX, morphY, 100, 100);

  // Show quote on ship hover
  if (quoteVisible) {
    fill(255);
    textSize(24);
    textAlign(CENTER);
    text("You got the makings of greatness in you...", width / 2, 180);
  }
}

function mousePressed() {
  // Click Jim (adjust these coordinates to match your poster!)
  if (mouseX > 230 && mouseX < 430 && mouseY > 1480 && mouseY < 1700) {
    if (!jimSong.isPlaying()) {
      jimSong.play();
    }
  }

  // Click Morph to move him
  if (mouseX > morphX && mouseX < morphX + 100 && mouseY > morphY && mouseY < morphY + 100) {
    morphX = random(width - 100);
    morphY = random(height - 100);
  }

  // Optional: show mouse coordinates for debugging
  // console.log("Mouse clicked at:", mouseX, mouseY);
}

function mouseMoved() {
  // Hover ship (adjust coordinates to your ship area)
  quoteVisible = mouseX > 1000 && mouseX < 1300 && mouseY > 400 && mouseY < 600;
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
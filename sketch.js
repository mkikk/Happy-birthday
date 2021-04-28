let fireworks = []; // Created fireworks will be added and removed from here
let gravity; // gravity to stop fireworks
// inital setup
function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(255);
	strokeWeight(4);
	background(0);
	gravity = createVector(0,0.22);
 
}
// continuous loop
function draw() {
	colorMode(RGB);
	background(0,0,0,30); // To leave trail behind exploded particles
	if (random(1) < 0.07) {
		fireworks.push(new Firework(random(width),height, true));
	}
	for (let i =  fireworks.length - 1; i >= 0 ; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()) {
			fireworks.splice(i,1);
		}
	}
}

// If mouse is pressed, then shoot out fireworks at the spot where
// the click was made.
function mousePressed() {
	let firework = new Firework(mouseX,mouseY, false);
	fireworks.push(firework);
	firework.clicked();
}

// If window is resized, change canvas size to fit correctly.
function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
} 

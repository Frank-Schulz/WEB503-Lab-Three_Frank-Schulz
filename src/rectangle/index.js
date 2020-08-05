function setup() {
    // create a canvas
    createCanvas(500, 500);
}

function draw() {
    // set rectMode to center
    rectMode(CENTER);
    // set background colour
    background("orange");
    // move to center
    translate(width/2, height/2);
    // define stroke colour
    stroke(255, 0, 0);
    // define stroke weight
    strokeWeight(4);
    // create rectangle
    rect(0, 0, 20, 20, 4);
}